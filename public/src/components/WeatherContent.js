import React from 'react';


const WeatherContent = (props)=>(
    <section>
        <p>WeatherContent</p>
        {props.state.error && <p>{props.state.error}</p>}
        {props.state.temperature && <p>Temperature:{props.state.temperature}</p>}
        {props.state.city && <p>City:{props.state.city}</p>}
        {props.state.country && <p>Country:{props.state.country}</p>}
        {props.state. humidity && <p>Humidity:{props.state.humidity}</p>}
        {props.state.description && <p>Description:{props.state.description}</p>}
    </section>
);

export default WeatherContent;