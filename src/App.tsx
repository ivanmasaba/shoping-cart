import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"

// PAGES
import { Home } from "./Pages/Home"
import { Store } from "./Pages/Store"
import { About } from "./Pages/About"

import { Navbar } from './Components/Navbar'

function App() {
  return ( 
    <>
     <Navbar />
      <Container className="mb-4" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />▬
        </Routes>
      </Container>
    </>
  )
}

export default App
