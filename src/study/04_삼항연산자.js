import {useEffect, useState} from 'react'

function TrueFalse() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>

      {/*삼항연산자를 사용해서 Loading를 보여준다.*/}
      {
        loading ? <strong>Loading...</strong> : null
      }

      <ul>
        {
          coins.map((item, index) => <li>{item.name} ({item.symbol} : ${item.quotes.USD.price})</li>)
        }
      </ul>
    </div>
  )
}

export default TrueFalse
