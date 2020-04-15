import React, { Component }  from 'react';
import axios from 'axios';
import './App.css';

class CapitalWeather extends Component{
   constructor(props){
       super(props);
           this.state={
                
             
           }
   }
   onSubmit=()=>{
       const access="1ea015744997294d300d6cd2e57ec920"
        axios.get(`http://api.weatherstack.com/current? access_key=${access}&query =${this.props.capital}`)
    .then(res => {
     const persons = res.data;
     this.setState({ weatherDatas:persons });
   })
   }

 
    render(){
        
        const { datas } = this.props
        console.log("propss",)
        return(
        <>
        <table>
           <tr><th>temperature  </th>
            <th>weather_icons</th>
            <th>wind_speed</th>
            <th>precip</th>

            </tr>
            <tr>
        <td>{}</td>
        <td>{}</td>
        <td>{}</td>
            <td><img  alt="flag" style={{width:"50px"}}/></td>

            </tr>


        </table>
        <button onClick={this.onSubmit}>Capital Weather</button>

        </>)
    }
}
export default CapitalWeather