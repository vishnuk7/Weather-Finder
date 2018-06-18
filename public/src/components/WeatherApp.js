import React from 'react';
import Form from './Form';
import Title from './Title';


export default class extends React.Component{

   
    render() {
        return (
            <section className="u-center-text">
                <Title />
                <Form />
            </section>
        );

    }
}