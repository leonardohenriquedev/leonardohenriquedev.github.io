import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Tecnologies from '../components/Tecnologies';
import './styles/home.css';

export default class Home extends Component {
  render() {
    return window.location.href = 'https://leonardohenrique.vercel.app/'
      // <div className="home">
      //   <Hero />
      //   <Tecnologies />
      //   <About />
      //   <Footer />
      // </div>
    
  }
}
