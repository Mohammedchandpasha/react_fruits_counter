// Write your code here
import './index.css'

import {Component} from 'react'

class FruitCounter extends Component {
  state = {mcount: 0, bcount: 0}

  onMangoIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.mcount}`)
      return {mcount: prevState.mcount + 1}
    })
  }

  onBananaIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.bcount}`)
      return {bcount: prevState.bcount + 1}
    })
  }

  render() {
    const {mcount, bcount} = this.state
    return (
      <div className="app-container">
        <div className="fruits-container">
          <h1>
            Bob ate<span className="count-color"> {mcount}</span> mangoes
            <span className="count-color"> {bcount}</span> bananas
          </h1>
          <div className="image-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button type="button" onClick={this.onMangoIncrement}>
                Eat Mango
              </button>
            </div>
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button type="button" onClick={this.onBananaIncrement}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitCounter
