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
    axios.get(`https://restcountries.eu/rest/v2/name/${this.state.value}`)
    .then(res => {
     const persons = res.data;
     this.setState({ weatherDatas:persons,flag:true });
   })
}

 
    render(){
        
        const { datas } = this.props
        console.log("propss",datas[0])
        return(
          <>  {(this.state.flag ===true)? <CapitalWeather capital={datas[0].capital} /> : 
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