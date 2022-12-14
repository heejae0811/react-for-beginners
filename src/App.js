import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Detail from './routes/Detail'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App