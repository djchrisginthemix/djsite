import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import withLoading from './partials/withLoading';
import ScrollToTopButton from './partials/ScrollToTopButton';
import ScrollToTopOnload from './partials/ScrollToTopOnload';
import LoadingScreen from './partials/loadingScreen';
import Footer from './partials/Footer';
import Homepage from './pages/Home';
import Requests from './pages/Requests';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Thankyou from './pages/Thankyou';

const HomepageWithLoading = withLoading(Homepage);
const RequestsWithLoading = withLoading(Requests);
const EventsWithLoading = withLoading(Events);
const ContactWithLoading = withLoading(Contact);
const ThankyouWithLoading = withLoading(Thankyou);

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited === 'true') {
      setTimeout(() => {
        setShowLoading(false);
      }, 2500); // Set the timeout to 2.5 seconds
    } else {
      setTimeout(() => {
        setShowLoading(false);
        localStorage.setItem('hasVisited', 'true');
      }, 5000); // Set the timeout to 5 seconds for the first visit
    }
  }, []);
  

  return (
    <Router basename="/">
      {showLoading ? (
        <LoadingScreen />
      ) : (
        <div className="App">
          <ScrollToTopOnload />
          <Routes>
            <Route exact path="/" element={<HomepageWithLoading />} />
            <Route path="/requests" element={<RequestsWithLoading />} />
            <Route path="/events" element={<EventsWithLoading />} />
            <Route path="/contact" element={<ContactWithLoading />} />
            <Route path="/thank-you" element={<ThankyouWithLoading />} />

          </Routes>
          <Footer />
          <ScrollToTopButton />
        </div>
      )}
    </Router>
  );
}

export default App;
