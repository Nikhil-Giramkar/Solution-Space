import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home} from  "./pages/Home"
import { Contact} from  "./pages/Contact"
import { Service} from  "./pages/Service"
import { Login} from  "./pages/Login"
import { Register} from  "./pages/Register"
import { About} from  "./pages/About"
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/sevice" element={<Service />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;