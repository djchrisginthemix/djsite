import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Reveal from 'react-awesome-reveal'
import { useLocation, useNavigate } from 'react-router-dom'

import Button from '../components/Button'

const VibeInput = ({ name, selectedVibes, onChange }) => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const vibesString = queryParams.get('music')
  const vibes = vibesString
    ? vibesString.split(', ')
    : [
        'Electronic',
        'Hip Hop',
        'Pop',
        'Top 40',
        'Retro',
        'House',
        'Chillout',
        'Latin',
        'Party Mix',
      ]


  const handleChange = event => {
    const { value, checked } = event.target
    if (checked) {
      onChange([...selectedVibes, value])
    } else {
      onChange(selectedVibes.filter(vibe => vibe !== value))
    }
  }

  return (
    <div id='vibes-selected-list' className='flex gap-4 flex-wrap'>
      {vibes.map(vibe => {
        function hasValue () {
          return vibesString ? true : false
        }

        const isChecked = hasValue() || selectedVibes.includes(vibe)
        return (
          <div key={vibe} className='flex items-center'>
            <label
              htmlFor={`${vibe.trim().replace(/\s+/g, '-').toLowerCase()}`}
              className={`inline-flex items-center px-4 py-2 font-medium rounded-full cursor-pointer transition duration-500 ease-in-out ${
                isChecked
                  ? 'bg-orange-mid opacity-100 text-gray-800'
                  : 'bg-gray-200 text-gray-500 opacity-50'
              }`}
            >
              <Field
                id={`${vibe.trim().replace(/\s+/g, '-').toLowerCase()}`}
                name={name}
                type='checkbox'
                value={vibe}
                checked={isChecked}
                onChange={handleChange}
                className='hidden'
              />
              <span className='ml-2'>{vibe}</span>
            </label>
          </div>
        )
      })}
    </div>
  )
}


const FormComponent = ({
  color = 'white',
  selectedTitles = [],
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const vibesStringRef = new URLSearchParams(location.search).get('music');
  const [vibes, setVibes] = useState(selectedTitles)
  const [resetKey, setResetKey] = useState(0)


  const colorClasses = {
    white: 'text-white',
    black: 'text-black',
    gray: 'text-gray-800'
  }

  const buttonColor = color === 'white' ? 'orangeYellow' : 'blue'
  const borderColor = color === 'white' ? 'transparent' : 'gray'

  const revealSettings = {
    from: 'bottom',
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 100
  }

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    vibes: vibesStringRef ? vibesStringRef.split(', ') : [],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Name should have at least 5 characters')
      .max(50, 'Name should not exceed 50 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email')
      .max(50, 'Email should not exceed 50 characters')
      .required('Email is required'),
    phone: Yup.string()
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        'Phone number must have the format ###-###-####'
      )
      .required('Phone number is required')
      .test('phone', 'Phone number must have 10 digits', value => {
        if (value) {
          const digitsOnly = value.replace(/\D/g, '')
          return digitsOnly.length === 10
        }
        return true
      }),
    message: Yup.string()
      .required('Message is required')
      .min(100, 'Message must be at least 100 characters long')
      .max(1000, 'Message must be at most 1000 characters long')
  })

  const handleVibeChange = selectedVibes => {
    setVibes(selectedVibes)
  }

  const handleReset = formik => {
    setVibes(selectedTitles)
    formik.resetForm({}, false)
    setResetKey(prevKey => prevKey + 1)
  }

  const formatPhoneNumber = phoneNumber => {
    const cleaned = phoneNumber.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`
    }
    return phoneNumber
  }

  const handleSubmit = (values, actions) => {
    if (!vibesStringRef || vibesStringRef.length === 0) {
      values.vibes = vibes;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'dj Chris G Contact',
        ...values
      })
    })
      .then(() => {
        navigate('/thank-you')
        actions.resetForm()
      })
      .catch(() => {
        alert('Error')
      })
      .finally(() => actions.setSubmitting(false))
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => {
        let value = data[key];
        if (Array.isArray(value)) {
          value = value.map(item => encodeURIComponent(item)).join(', ');
        } else {
          value = encodeURIComponent(value);
        }
        return encodeURIComponent(key) + '=' + value;
      })
      .join('&');
  };

  return (
    <Reveal triggerOnce {...revealSettings}>
      <Formik
        key={resetKey}
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        {({ resetForm, setFieldValue }) => (
          <Form
            name='dj-chris-g-contact'
            netlify-honeypot='bot-field'
            data-netlify={true}
          >
            {/* Add a hidden field for Netlify Forms */}
            <input
              type='hidden'
              name='form-name'
              className='hidden'
              value='dj-chris-g-contact'
            />
            <input type='hidden' name='bot-field' className='hidden' />

            <div className='max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 sm:gap-8 md:gap-16 lg:gap-20'>
              <div className='djcg-contact-left-col flex flex-col flex-1 mb-6'>
                <div className='field name-group mb-4 md:mb-5'>
                  <label
                    htmlFor='name'
                    className={`djcg-label block text-lg sm:text-base md:text-lg ${colorClasses[color]} mb-3`}
                  >
                    Name
                  </label>
                  <Field
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Enter your name'
                    className={`djcg-input block w-full shadow-sm border-2 border-${borderColor}-300 rounded-md text-gray-800 text-lg sm:text-base  focus:ring-blue-500 focus:border-blue-500`}
                  />
                  <ErrorMessage
                    name='name'
                    component='div'
                    className='bg-red-500 text-xs text-white p-2 rounded-b-md'
                  />
                </div>
                <div className='field email-group mb-4 md:mb-5'>
                  <label
                    htmlFor='email'
                    className={`djcg-label block text-lg sm:text-base md:text-lg ${colorClasses[color]} mb-3`}
                  >
                    Email
                  </label>
                  <Field
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Enter your email address'
                    className={`djcg-input block w-full shadow-sm border-2 border-${borderColor}-300 rounded-md text-gray-800 text-lg sm:text-base  focus:ring-blue-500 focus:border-blue-500`}
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className='bg-red-500 text-xs text-white p-2 rounded-b-md'
                  />
                </div>
                <div className='field phone-group mb-4 md:mb-5'>
                  <label
                    htmlFor='phone'
                    className={`djcg-label block text-lg sm:text-base md:text-lg ${colorClasses[color]} mb-3`}
                  >
                    Phone
                  </label>
                  <Field
                    id='phone'
                    name='phone'
                    type='text'
                    placeholder='Enter your phone number'
                    className={`djcg-input block w-full shadow-sm border-2 border-${borderColor}-300 rounded-md text-gray-800 text-lg sm:text-base  focus:ring-blue-500 focus:border-blue-500`}
                    onChange={e => {
                      const formattedPhone = formatPhoneNumber(e.target.value)
                      setFieldValue('phone', formattedPhone)
                    }}
                    maxLength='12'
                  />
                  <ErrorMessage
                    name='phone'
                    component='div'
                    className='bg-red-500 text-xs text-white p-2 rounded-b-md'
                  />
                </div>
                <div className='field message-group mb-4 md:mb-5'>
                  <label
                    htmlFor='message'
                    className={`djcg-label block text-lg sm:text-base md:text-lg ${colorClasses[color]} mb-3`}
                  >
                    Message
                  </label>
                  <Field
                    as='textarea'
                    id='message'
                    name='message'
                    placeholder='Describe what you are looking for here'
                    rows='5'
                    className={`djcg-textarea block w-full shadow-sm border-2 border-${borderColor}-300 rounded-md text-gray-800 text-lg sm:text-base focus:ring-blue-500 focus:border-blue-500`}
                  />
                  <ErrorMessage
                    name='message'
                    component='div'
                    className='bg-red-500 text-xs text-white p-2 rounded-b-md'
                  />
                </div>
              </div>
              <div className='djcg-contact-right-col flex flex-col flex-1 justify-between'>
                <div className='field vibes-group mb-4 md:mb-5'>
                  <label
                    htmlFor='vibes'
                    className={`djcg-label block text-lg sm:text-base md:text-lg ${colorClasses[color]} mb-5`}
                  >
                    Set the vibe of your event:
                  </label>
                  <VibeInput
                    id='vibes'
                    name='vibes'
                    selectedVibes={vibes}
                    onChange={handleVibeChange}
                  />
                  <ErrorMessage
                    name='vibes'
                    component='div'
                    className='text-red-500 font-semibold text-xs p-2 rounded-b-md'
                  />
                </div>
                <div className='form-actions flex gap-4 md:gap-6 justify-center items-center sm:justify-end sm:items-end mt-8'>
                  <Button
                    type='submit'
                    text='Submit'
                    color={buttonColor}
                    size='md'
                    useLink={false}
                  />
                  <Button
                    type='button'
                    text='Reset'
                    color={buttonColor}
                    size='md'
                    useLink={false}
                    onClick={() =>
                      handleReset({ resetForm, values: initialValues })
                    }
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Reveal>
  )
}
export default FormComponent
