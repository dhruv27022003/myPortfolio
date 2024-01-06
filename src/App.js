import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
 // eslint-disable-next-line
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

  const { theme } = useContext(ThemeContext);
  console.warn = console.error = () => {};
  console.log("Theme is ",theme)

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Routes>

      <Route path="/" element={<Main />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      {/* You can use Navigate inside a component or in response to an event, not directly here */}
    </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
