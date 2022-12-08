import Button from './Button'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello, welcome my page!</h1>
      <Button text={"btn"} />
    </div>
  );
}

export default App;
