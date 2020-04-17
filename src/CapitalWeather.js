import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class CapitalWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherDatas:null
        }
    }
    
    render() {

        const { weatherDatas } = this.props
        console.log("pss",weatherDatas.current)
        return (
            <>
                <table border="1">
                    <tr><th>temperature  </th>
                        <th>weather_icons</th>
                        <th>wind_speed</th>
                        <th>precip</th>

                    </tr>
                    {weatherDatas !==null&& <tr>
                        <td>{weatherDatas.current.temperature}</td>
                       <td><img src={weatherDatas.current.weather_icons} alt="flag" style={{ width: "50px" }} /></td>
                       <td>{weatherDatas.current.wind_speed}</td>
                      <td>{weatherDatas.current.precip}</td>

                    </tr>}


                </table>

            </>)
    }
}
export default CapitalWeather