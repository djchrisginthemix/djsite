import { useState, useEffect } from 'react'
import { GiMusicalNotes } from 'react-icons/gi'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          className="fixed z-100 bottom-5 right-5 transition duration-500 ease-in-out bg-blue-ice hover:bg-transparent text-white hover:text-white p-3 rounded-full shadow-md hover:shadow-none"
          onClick={handleScrollToTop}
        >
          <GiMusicalNotes className="text-5xl" />
        </button>
      )}
    </>
  )
}

export default ScrollToTopButton
