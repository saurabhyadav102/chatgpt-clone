import { useState } from 'react'
import Motion from './components/Motion'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Chat from './components/Chat'
function App() {
 

  return (
    
      <BrowserRouter>
      <Routes>
           <Route path='/' element={<Motion/>}/>
           <Route path='/Chat' element={<Chat/>}/>
    </Routes>
      
      </BrowserRouter>
    
  )
}

export default App
