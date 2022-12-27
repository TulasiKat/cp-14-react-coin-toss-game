// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  getToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prev => ({
        tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        totalCount: prev.totalCount + 1,
        headsCount: prev.headsCount + 1,
      }))
    } else {
      this.setState(prev => ({
        tossImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        totalCount: prev.totalCount + 1,
        tailsCount: prev.tailsCount + 1,
      }))
    }
  }

  render() {
    const {tossImage, totalCount, headsCount, tailsCount} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="toss-image" />
          <button type="button" className="button" onClick={this.getToss}>
            Toss coin
          </button>
          <div className="counts-container">
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
