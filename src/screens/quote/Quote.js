import React, { Component } from 'react';
import * as QuoteData from './Quote.json'
import './Quote.scss';

export class Quote extends Component {
  render() {
    return (
      <div className="quote-page">
        <div className="quote-page__price-block-underline">
          <div className="quote-page__price-block">
            <h3 className="quote-page__price">R{QuoteData.price}</h3>
            <div className="quote-page__price-block-col-2">
              <h6 className="quote-page__price-block-col-2-1">Inc VAT</h6>
              <h4 className="quote-page__price-block-col-2-2">PM</h4>
            </div>
          </div>
        </div>
        <h5 className="quote-page___item-detail">
          {QuoteData.vehicle}
        </h5>
        <div className="quote-page___button-block">
          <a href="/start-quote" className="button quote-page__button-link">Get Cover</a>
        </div>
        <div className="quote-page___accordion-block">
          {
            QuoteData.cover.map( (element, i) => (
              <div className="quote-page___accordion" key={i}>
                <div className="quote-page___accordion--block-1">{element.title}</div>
                <div className="quote-page___accordion--block-2">{element.detail}</div>
                <div className="quote-page___accordion--block-3">
                  <i className="fas fa-plus quote-page___accordion-block-icon"></i>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
