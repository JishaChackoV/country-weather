import React, { Component }  from 'react';
import axios from 'axios';
import './App.css';

class CountryComponent extends Component{
   constructor(props){
       super(props);
           this.state={
                datas:null,
                pageNo:0,
             
           }
   }
   componentDidMount(){
    this.getData()
   }

   getData=()=>{
    axios.get(`https://restcountries.eu/rest/v2/name/${AMERICA}`)
    .then(res => {
     const persons = res.data;
     this.setState({ datas:persons });
   })
   

   }
    render(){
        
        const { datas } =this.state;
     
        return(
        <> 
       
        </>)
    }
}
export default CountryComponent