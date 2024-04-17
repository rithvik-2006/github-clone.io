import React from 'react'
import './App.css'
import RepositoryCard from './assets/components/RepositoryCard'
import Navbar from './assets/components/navbar';

function App() {
  const repositories = [
    {
      name: 'react-todo-app',
      description: 'A simple to-do list app built with React and styled-components.',
    },
    {
      name: 'node-express-api',
      description: 'RESTful API built using Node.js, Express, and MongoDB for data storage.',
    },
    {
      name: 'javascript-weather-app',
      description: 'A weather application using OpenWeatherMap API and vanilla JavaScript.',
    },
    {
      name: 'python-machine-learning',
      description: 'Machine learning projects implemented in Python using TensorFlow and scikit-learn.',
    },
    {
      name: 'portfolio-website',
      description: 'Personal portfolio website showcasing skills and projects.',
    },
    {
      name: 'full-stack-e-commerce',
      description: 'Full-stack e-commerce website using React, Node.js, Express, and MongoDB.',
    },
  ];

  return (
    <>
     <div className="app">
     <div className='header'>
     <Navbar/>
      <h1 className='page-title'>Repositories</h1>
      <br/>
      </div>
      <div className="container">
      <img className="profilePic" src="https://imgs.search.brave.com/fOIK2TAg7QoYfA-RMvPcFM7QCzRAqqXfVQyxNht1G0Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC84T3BJZ0Fo/LnBuZw"></img>
      <div className="repository-list">
      {repositories.map((repo)=>(
        <RepositoryCard key={repo.name}
        name={repo.name}
        description={repo.description}/>))}
      </div>
      </div>
     </div>
    </>
  )
}

export default App
