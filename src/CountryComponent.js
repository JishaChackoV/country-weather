import React, { Component }  from 'react';
import axios from 'axios';
import CountryDetails from './CountryDetails'
import './App.css';

class CountryComponent extends Component{
   constructor(props){
       super(props);
           this.state={
                datas:null,
                value:null
             
           }
   }
       handleChange=(event)=> {
        this.setState({value: event.target.value});
      }
    
      handleSubmit=(event)=> {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.value}`)
        .then(res => {
         const persons = res.data;
         this.setState({ datas:persons });
       })
      }
        render(){
            console.log("ppp",this.state.value)
            return(
            <> {
           (this.state.datas!==null)?<CountryDetails datas={this.state.datas} /> :<form onSubmit={this.handleSubmit}>
            <label>
              Country:
              <input type="text" placeholder="Enter Country" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        }</>)
        }
    }
   
export default CountryComponent