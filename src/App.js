import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MetaMaskIcon from './images/metamask.png'
import GithubIcon from './images/github.png'
import DiscordIcon from './images/discord.png'
import FacebookIcon from './images/facebook.png'
import RedditIcon from './images/reddit.png'
import LinkedinIcon from './images/linkedin.png'
import OfficialwebIcon from './images/officialweb.png'


function App() {
  const [coinData, setCoinData ] = useState()
  const api = {
    coinId:'avalanche-2'
  }

  useEffect(()=> {
    fetchAvaxData()
  }, [])

  const fetchAvaxData = async()=> {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${api.coinId}`)
    setCoinData(response.data)
    console.log(coinData)
  }

  return (
    <>
      <div>
        {
          coinData
            ?
              <div className='main-component'>
                <div className='main-component-inner'>

                  <div className='landing-header'>
                    <div className='coin-info'>
                      <h1>{coinData.name}</h1>
                      <div className='name-and-price'>
                        <h2 className='coin-info-price'>${coinData.market_data.current_price.usd.toFixed(2)}</h2>
                        <h2 className='coin-info-symbol'>/{coinData.symbol}</h2>
                        {/* <button className='metamask-button'><img src={MetaMaskIcon} className='metamask-icon'></img></button> */}
                      </div>
                      <p className='coin-description-short'>FAST, LOW COST, ENVIRONMENTAL FRIENDLY</p>
                    </div>
                    <ul>
                      <div className='ath'>ATH:${coinData.market_data.ath.usd.toFixed(2)}</div>
                      <div className='ath-hide'>All-Time-High: {coinData.market_data.ath_date.usd}</div>
                      <div className='atl'>ATL:${coinData.market_data.atl.usd.toFixed(2)}</div>
                      <div className='atl-hide'>All-Time-Low {coinData.market_data.atl_date.usd}</div>
                    </ul>
                  </div>

                  <div className='coin-price_change_percentage_table'>
                    <div className={ coinData.market_data.price_change_percentage_24h > 0  ? 'positive' : 'negative'}>
                      <p>24H</p>
                      {}
                      <p>{coinData.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                    </div>
                    <div className={ coinData.market_data.price_change_percentage_7d_in_currency.usd > 0  ? 'positive' : 'negative'}>
                      <p>7D</p>
                      <p>{coinData.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</p>
                    </div>
                    <div className={coinData.market_data.price_change_percentage_14d_in_currency.usd > 0 ? 'positive' : 'negative' }>
                      <p>14D</p>
                      <p>{coinData.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</p>
                    </div>
                    <div className={coinData.market_data.price_change_percentage_30d_in_currency.usd > 0 ? 'positive' : 'negative'}>
                      <p>30D</p>
                      <p>{coinData.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</p>
                    </div>
                    <div className={coinData.market_data.price_change_percentage_60d_in_currency.usd > 0 ? 'positive' : 'negative'}>
                      <p>60D</p>
                      <p>{coinData.market_data.price_change_percentage_60d_in_currency.usd.toFixed(2)}%</p>
                    </div>
                    <div className={coinData.market_data.price_change_percentage_200d_in_currency.usd > 0 ? 'positive' : 'negative'}>
                      <p>200D</p>
                      <p>{coinData.market_data.price_change_percentage_200d_in_currency.usd.toFixed(2)}%</p>
                    </div>
                    <div className={coinData.market_data.price_change_percentage_1y_in_currency.usd > 0 ? 'positive' : 'negative'}>
                      <p>1Y</p>
                      <p>{coinData.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</p>
                    </div>
                  </div>

                  <div className="coin-market-info">
                    <div className="market-cap">
                      <h4>Market Cap</h4>
                      <p>(Circulating supply of coins) x (Price per coin) = Total crypto market capitalization</p>
                      <p>{coinData.market_data.circulating_supply.toFixed(2)} x {coinData.market_data.current_price.usd} = ${coinData.market_data.market_cap.usd}</p>
                    </div>
                    <div className="fully-diluted-market">
                      <h4>Fully Diluted Market</h4>
                      <p>(Max supply of a token) x (Current market price of the token) = Fully diluted market capitalization</p>
                      <p>{coinData.market_data.max_supply.toFixed(2)} x {coinData.market_data.current_price.usd} = ${coinData.market_data.fully_diluted_valuation.usd}</p>
                    </div>
                  </div>

                  <div className="about">
                    <h4>About</h4>
                    <p>{coinData.description.en}</p>
                  </div>

                  <div className="contact">
                    <div className='contact-links'>
                      <p><a href={coinData.links.homepage[0]}><img src={OfficialwebIcon}></img></a></p>
                      <p><a href={coinData.links.repos_url.github[0]}><img src={GithubIcon}></img></a></p>
                      <p><a href={coinData.links.chat_url[0]}><img src={DiscordIcon}></img></a></p>
                      <p><a href={coinData.links.chat_url[1]}><img src={FacebookIcon}></img></a></p>
                      <p><a href={coinData.links.announcement_url[0]}><img src={LinkedinIcon}></img></a></p>
                      <p><a href={coinData.links.subreddit_url}><img src={RedditIcon}></img></a></p>
                    </div>
                    {/* <p><a href={coinData.links.}>GitHub</a></p> */}
                  </div>

                </div>
              </div>
            : <h1>LOADING</h1>
        }

        <button onClick={fetchAvaxData}>INFO</button>
      </div>
    </>
  );
}

export default App;
