import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Header from './Header.jsx'
import Heropage from "./Heropage.jsx"
import Program from "./program.jsx"
import Artikel from "./artikel.jsx"
import Testimoni from "./testimoni.jsx"
import Form from './Form.jsx'
import Footer from './Footer.jsx'
import './assets/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Heropage />
    <Program />
    <Artikel />
    <Testimoni />
    <Form />
    <Footer />
  </React.StrictMode>,
)
