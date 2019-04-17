import React, { Component } from 'react';
import nakedLogo from '../../assets/ben.png';
import './StartQuote.scss';

export class StartQuote extends Component {
  render() {
    return (
      <div className="start-quote-page">
        <div className="start-quote-page__message-block">
          <div className="start-quote-page__message-img-block">
            <img src={nakedLogo} className="start-quote-page__message-img" alt="logo" />
          </div>
          <div className="start-quote-page__message">
            Hi, I'm Ben. <br />
            Let's work together to find you an awesome price
          </div>
        </div>
        <div className="start-quote-page__message-btn-block">
          <a href="/" className="button start-quote-page__message-btn">
            Continue
            <i className="fas fa-arrow-right start-quote-page__message-btn-icon"></i>
          </a>
        </div>
      </div>
    );
  }
}
