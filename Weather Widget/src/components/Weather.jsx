// Import necessary modules
import React from "react"
import weather from "../data/weather.json"
import Days from "./Days"
import "./Weather.css"
// Moment used to display date and time in a readable format
var moment = require("moment")
// Get Current weather from json file
const currentWeather = weather.list[0]
// Get days and date 
let newDate = new Date()
const weekDay = currentWeather.dt * 1000
newDate.setTime(weekDay)
// Get icons that corresponds to the correct weather
const imgURL = `owf owf-${currentWeather.weather[0].id} owf-5x`

class Weather extends React.Component {
  // Set initial state
  state = { dailyData: [] }
  // Constructor function
  componentDidMount = () => {
    // Get specific data from json file
    const dailyData = weather.list.filter(read =>
      read.dt_txt.includes("12:00:00")
    )
    // Set the state
    this.setState(
      {dailyData: dailyData},
      () => console.log(this.state)
    )
  }
  // Map data to days component
  formatDays = () => {
    return this.state.dailyData.map((reading, index) => (
      <Days reading={reading} key={index} />
    ))
  }

  render() {
    return (
      <div>
        {/* Display current weather */}
        <div className="component__weather-box">
          <h3 className="card-title">Today</h3>
          <p className="text-muted">
            {moment(newDate).format("MMMM Do, h:mm a")}
          </p>
          <i className={imgURL}></i>
          <h2>{Math.round(currentWeather.main.temp) - 273} °C</h2>
          <div className="card-body">
            <p className="card-text">{currentWeather.weather[0].description}</p>
          </div>
        </div>
        {/* Display mapped days data */}
        {this.formatDays()}
      </div>
    )
  }
}

export default Weather
