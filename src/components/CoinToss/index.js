import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {toss: 0, headCount: 0, tailCount: 0}

  random = () => {
    const result = Math.floor(Math.random() * 2)
    if (result === 0) {
      this.setState(pre => ({toss: result, headCount: pre.headCount + 1}))
    } else {
      this.setState(pre => ({toss: result, tailCount: pre.tailCount + 1}))
    }
  }

  render() {
    const {headCount, tailCount, toss} = this.state
    const totalCount = headCount + tailCount
    const imageUrl =
      toss === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="img" />
          <button type="button" className="btn" onClick={this.random}>
            Toss Coin
          </button>
          <div className="flex">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
