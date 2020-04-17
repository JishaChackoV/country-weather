import React, { Component }  from 'react';
import axios from 'axios';
import './App.css';
import CapitalWeather from './CapitalWeather';

class CountryDetailsComponent extends Component{
   constructor(props){
       super(props);
           this.state={
             weatherDatas:null ,
             flag:false  
             
           }
   }
   onSubmit=()=>{
    axios.get(`http://api.weatherstack.com/current?access_key=a4d0ea5a1be955cd432fb657b6742939&query=${this.props.datas[0].capital}`)
    .then(res => {
        const persons = res.data; 
        this.setState({ weatherDatas: persons,flag:true });
        if(persons.error){
          alert(persons.error.info)
        }
    })
   
}

 
    render(){
        
        const { datas } = this.props
        console.log("propss",datas[0])
        return(
          <>  {(this.state.flag ===true)? <CapitalWeather weatherDatas={this.state.weatherDatas} /> : 
         <> <table>
           <tr><th>Capital  </th>
            <th>population</th>
            <th>latlng</th>
            <th>Flag</th>

            </tr>
            <tr>
        <td>{datas[0].capital}</td>
        <td>{datas[0].population}</td>
        <td>{datas[0].latlng[0]},{datas[0].latlng[1]}</td>
            <td><img src={datas[0].flag} alt="flag" style={{width:"50px"}}/></td>

            </tr>


        </table>
        <button onClick={this.onSubmit}>Capital Weather</button></>
      
          }</>)
    }
}
export default CountryDetailsComponent