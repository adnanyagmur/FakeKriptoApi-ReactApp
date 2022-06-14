import React from 'react'
import "./Coin.css";

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img className='coin-image' src={image} alt="crypto"></img>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>${price}</p>
                <p className='coin-volume'>${volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                    <p className='coin-precent red'>{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='coin-precent green'>{priceChange.toFixed(2)}%</p>) }

                    <p className='coin-marketcap'> Market Cap: ${marketcap.toLocaleString()}</p>

            </div>
        </div>
    </div>
  )
}

export default Coin