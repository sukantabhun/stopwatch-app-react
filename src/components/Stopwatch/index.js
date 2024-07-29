import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {timeElapsed: 0}
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  updateTimer = () => {
    this.setState(prevState => ({timeElapsed: prevState.timeElapsed + 1}))
  }

  onStartClick = () => {
    this.intervalId = setInterval(this.updateTimer, 1000)
  }

  onStopClick = () => {
    clearInterval(this.intervalId)
  }

  onResetTimer = () => {
    this.setState({timeElapsed: 0})
    clearInterval(this.intervalId)
  }

  minutes = () => {
    const {timeElapsed} = this.state
    const minutes = Math.floor(timeElapsed / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  seconds = () => {
    const {timeElapsed} = this.state
    const seconds = Math.floor(timeElapsed % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const time = `${this.minutes()}:${this.seconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="timer-image"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                onClick={this.onStartClick}
                className="start-button button"
              >
                Start
              </button>
              <button
                type="button"
                onClick={this.onStopClick}
                className="stop-button button"
              >
                Stop
              </button>
              <button
                type="button"
                onClick={this.onResetTimer}
                className="reset-button button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
