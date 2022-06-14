import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coin from './Coin';
import './App.css';

function App() {

const [coins, setCoins] = useState([])
const [search, setSearch] = useState('')

useEffect(()=> {
  axios.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    ).then(res => {
      setCoins(res.data);
      //console.log(res.data);
    }).catch(error => console.log(error))
},[]);

const handleChange = e => {
  setSearch(e.target.value)
}

const filteredCoins =coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase()))

const handleMode = () => {
 
     document.body.classList.toggle('dark');

     localStorage.setItem('mode',document.body.classList)
    
  
}

if(localStorage.getItem('mode') !== ''){
  document.body.classList.add(localStorage.getItem('mode'));

}

  return (
  
    <div className='coin-app'>

  <div className='coin search'>
    <h1 className='coin-txt'>Search a currency</h1>
    <form>
      <input type="text"  placeholder='Search' className='coin-input' onChange={handleChange} ></input> 
    
      <label className='mode-control'>
      <input id='mode-btn' type='checkbox' onClick={handleMode}></input>
      <span>Dark Mode</span>
      <span>Light Mode</span>
      </label>
    </form>
    
  </div>
  <br></br>

  {filteredCoins.map(coin =>{
    return (
      <Coin key={coin.id} 
      name={coin.name}
      image={coin.image}
      symbol={coin.symbol}
      marketcap={coin.market_cap}
      price={coin.current_price}
      priceChange = {coin.market_cap_change_percentage_24h}
      volume = {coin.total_volume}
      ></Coin>
    )
  })}

    </div>
  );
}

export default App;