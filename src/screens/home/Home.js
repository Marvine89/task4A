import React, { Component } from 'react';
import nakedLogo from '../../assets/naked-logo.png';
import './Home.scss';

export class Home extends Component {
  render() {
    return (
        <div className="home-page">
            <div className="home-page__image-block">
              <img src={nakedLogo}  className="home-page__logo" alt="logo" />
            </div>
            <div className="home-page__text-block">
              <p className="home-page__text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been 
              </p>
            </div>
            <div className="home-page__button-block">
                <a href="/start-quote" className="button home-page__button-link">Get a Quote</a>
            </div>
        </div>
    );
  }
}
