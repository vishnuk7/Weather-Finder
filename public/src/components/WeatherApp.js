import React from 'react';
import Form from './Form';
import Title from './Title';
import Footer from './Footer';

export default class extends React.Component{


    render() {
        return (
            <section className="u-center-text">
                <Title />
                <Form />
                <Footer />
            </section>
        );

    }
}
