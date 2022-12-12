import {useState} from 'react'

function App() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])

  const onChange = (event) => {
    setToDo(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()

    if (toDo === '') {
      return
    }

    // state는 직접적으로 수정할 수 없다. array.push (x)
    setToDos(currentArray => [toDo, ...currentArray]) // ...(전개연산자)를 사용해서 배열에 현재 배열 내용을 추가한다.
    setToDo('')

    console.log(toDos)
  }

  return (
    <div>
      <h1>My To Dos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your to do.."
          value={toDo}
          onChange={onChange}/>
        <button>Add To Do</button>
      </form>
    </div>
  )
}

export default App
