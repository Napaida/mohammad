import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from './components/Header'
import './App.css'
import Detail from "./components/ProductDetail"
import Detail2 from "./components/ProductDetail2"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Header/>}/>
      <Route path="/product/:id" element={<Detail/>}/>
      <Route path="/servic/:id" element={<Detail2/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
