import {Routes, Route} from 'react-router-dom'
import MovieHome from './routes/MovieHome'
import MovieDetail from './routes/MovieDetail'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MovieHome/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
      </Routes>
    </div>
  )
}

export default App