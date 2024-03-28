import React from 'react'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'

function App() {
  const handleClick = () => {
    console.log('HAI CLICCATO!')
  }

  return (
    <div className="App">
      <header className="App-header">
        <FunctionalComponent
          customTitle="COMPONENTE A FUNZIONE"
          handleClick={handleClick}
        />
        <ClassComponent customTitle="COMPONENTE A FUNZIONE" />
      </header>
    </div>
  )
}

export default App
