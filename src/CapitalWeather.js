import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class CapitalWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onSubmit = () => {

        axios.get(`http://api.weatherstack.com/current?access_key=69187d964fd1574bbd9472b7b570f0ee&query=${this.props.capital}`)
            .then(res => {
                const persons = res.data;
                this.setState({ weatherDatas: persons });
            })
    }
    render() {

        const { datas } = this.props
        console.log("pss",this.state.weatherDatas.current)
        return (
            <>
                <table>
                    <tr><th>temperature  </th>
                        <th>weather_icons</th>
                        <th>wind_speed</th>
                        <th>precip</th>

                    </tr>
                    <tr>
                        <td>{this.state.weatherDatas.current.description}</td>
                        <td><img src={this.state.weatherDatas.current.weather_icons} alt="flag" style={{ width: "50px" }} /></td>
                        <td>{this.state.weatherDatas.wind_speed}</td>
                        <td>{this.state.weatherDatas.precip}</td>

                    </tr>


                </table>
                <button onClick={this.onSubmit}>Capital Weather</button>

            </>)
    }
}
export default CapitalWeather