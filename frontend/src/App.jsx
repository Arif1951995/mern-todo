import {BrowserRouter, Routes, Route} from  "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"


function App() {

  return (
   <div >
    <BrowserRouter>
      <Header />
      <div className="pages">
      <Routes>
        <Route Component={Home} path="/"/>
      </Routes>
      </div>
    </BrowserRouter>
   </div>
  )
}

export default App
