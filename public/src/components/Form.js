import React from 'react';
import WeatherContent from './WeatherContent';

const API_KEY = '1c21ae453f5c8945100e0454a7a7353a';

export default class Form extends React.Component {

    state ={
        city:undefined,
        country:undefined,
        temperature:undefined,
        humidity:undefined,
        description:undefined,
        error:""
    }


    getWeather = async (e)=>{
        e.preventDefault(); 
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        
        if(city && country){
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
        this.setState(()=>({
            city:data.name,
            country:data.sys.country,
            humidity:data.main.humidity,
            description:data.weather[0].description,
            error:""
        }));
        }else{
            this.setState(()=>({
                city:undefined,
                country:undefined,
                humidity:undefined,
                description:undefined,
                error:"Please enter city and country"
            }));
        }
    }

    render(){
        return(
            <section>
                <form onSubmit={this.getWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
                </form>

                <WeatherContent state={this.state} />
            </section>
            
    );
    }
    
}


