import React from 'react';

const WeatherContent = (props)=>(
    <section className="section-WeatherContent">
        <p>WeatherContent</p>
      {props.state.error && <p className="erorr">{props.state.error}</p>}
        <div className="row">
            <div className="col-1-of-2">
                {props.state.temperature && <p>Temperature:{props.state.temperature} &deg;C</p>}
                {props.state.icon && <img src={`http://openweathermap.org/img/w/${props.state.icon}.png`} />}
                {props.state.description && <p>Condition:{props.state.description}</p>}
            </div>

            <div className="col-1-of-2">
                {props.state.city && props.state.country && <p>City:{props.state.city}, {props.state.country}</p>}
                {props.state. humidity && <p>Humidity:{props.state.humidity}</p>}
            </div>

        </div>
    </section>
  );

export default WeatherContent;
