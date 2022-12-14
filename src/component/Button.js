import style from '../css/Button.module.css'

function Button({text}) {
  return (
    // css 파일명이 ~.module.css가 아니라면 아래 방식으로 className이 작성되지 않는다.
    <button className={style.btn}>{text}</button>
  )
}

export default Button