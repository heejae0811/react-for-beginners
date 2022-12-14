import {useState} from 'react'

function ToDos() {
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
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your to do.."
          value={toDo}
          onChange={onChange}/>
        <button>Add To Do</button>
      </form>

      {/* map은 값을 내가 원하는 형태로 바꿔주는 역할을 한다. */}
      <ul>
        {
          toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ToDos
