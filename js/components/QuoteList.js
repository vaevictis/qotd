import React from 'react';

module.exports = React.createClass({
  spinner() {
    return (
      <div className="list-group-item">
        <div className="spinner" />
      </div>
    );
  },

  quotes() {
    return this.props.quotes.map((quote, index) => {
      return (
        <div key={index} className="list-group-item">
          <h4 className="list-group-item-heading">{quote.quote}</h4>
          <p className="list-group-item-text">- {quote.attribution}</p>
        </div>
      );
    });
  },

  render() {
    return (
      <div className="list-group">
        {this.props.quotes.length > 0 ? this.quotes() : this.spinner() }
      </div>
    );
  }
});
