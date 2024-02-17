import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Service } from "./pages/Service"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { Error } from "./pages/Error"
const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sevice" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;