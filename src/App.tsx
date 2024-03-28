import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import Alert from 'react-bootstrap/Alert'
import FormComponent from './components/FormComponent'
import MyNavBar from './components/MyNavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchComponent from './components/FetchComponent'

function App() {
  const handleClick = () => {
    console.log('HAI CLICCATO!')
  }

  return (
    <BrowserRouter>
      <div className="App">
        <MyNavBar />
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Alert variant="success">
                    I componenti di React Bootstrap funzionano senza problemi{' '}
                  </Alert>

                  <FunctionalComponent
                    customTitle="COMPONENTE A FUNZIONE"
                    handleClick={handleClick}
                  />
                </>
              }
            />

            <Route path="/form" element={<FormComponent />} />
            <Route
              path="/class"
              element={<ClassComponent customTitle="COMPONENTE A CLASSE" />}
            />

            <Route path="/books" element={<FetchComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
