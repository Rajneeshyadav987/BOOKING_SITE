import { BrowserRouter, Route, Routes } from "react-router-dom"
import SingIn from "./components/SingIn"
import SingUp from "./components/SingUp"
import Bookingform from "./components/Bookingform"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/SingIn" element={<SingIn />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/Bookingform" element={<Bookingform />} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;