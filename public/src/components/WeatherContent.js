import React from 'react';


const WeatherContent = (props)=>(
    <section>
        <p>WeatherContent</p>
        {props.state.error && <p>{props.state.error}</p>}
        <div className="row">
            <div className="col-1-of-2">
                {props.state.temperature && <p>Temperature:{props.state.temperature}</p>}
                {props.state.description && <p>Description:{props.state.description}</p>}
            </div>

            <div className="col-1-of-2">
                {props.state.city && <p>City:{props.state.city}</p>}
                {props.state.country && <p>Country:{props.state.country}</p>}
                {props.state. humidity && <p>Humidity:{props.state.humidity}</p>}
            </div>

        </div>
    </section>
);

export default WeatherContent;