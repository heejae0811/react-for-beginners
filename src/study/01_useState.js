import {useState, useEffect} from 'react'
import Button from '../component/Button'
import styles from '../css/App.module.css'

function useState() {
  // 리액트는 새로운 UI 요소가 추가될 때 마다 화면을 새로고침(refresh)한다.
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState('')

  const onClick = () => {
    setValue((counter) => counter + 1)
  }

  const onChange = (event) => {
    setKeyword(event.target.value)
  }

  console.log('I run all the time.')

  // useEffect가 빈 배열이면 페이지가 렌더링 된 후 딱 1번만 실행된다.
  // 배열에 값이 있으면 값이 바뀔 때 마다 실행된다.
  useEffect(() => {
    console.log('I run only once.')
  }, [])

  // counter 또는 keyword가 변할 때 마다 실행된다.
  useEffect(() => {
    console.log('I run when counter or keyword changes.', counter)
  }, [counter, keyword])

  return (
    <div>
      <input
        type="text"
        placeholder="Search here.."
        value={keyword}
        onChange={onChange}/>

      <h1 className={styles.title}>{counter}</h1>
      <Button text={'Component button'}/>
      <button onClick={onClick}>Counter</button>
    </div>
  )
}

export default useState
