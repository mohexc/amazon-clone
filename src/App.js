import React from 'react'
import './App.less';
import AppHeader from './layouts/AppHeader';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <Home />
    </div>
  )
}

export default App
