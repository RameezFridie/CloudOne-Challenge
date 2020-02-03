// Import necessary nodules
import React from "react"
import './Days.css'
// Moment required to display readable date values
var moment = require("moment")
// Days component getting data from json file
const Days = ({ reading }) => {
  // Getting weekdays and date
  let newDate = new Date()
  const weekDay = reading.dt * 1000
  newDate.setTime(weekDay)
  // image icons based on weather
  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

  return (
    // Display mapped data
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format("dddd")}</h3>
        <p className="text-muted">
          {moment(newDate).format("MMMM Do, h:mm a")}
        </p>
        <i className={imgURL}></i>
        <h2>{Math.round(reading.main.temp)-273} °C</h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default Days
