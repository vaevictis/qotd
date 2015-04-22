import React from 'react';

let App = React.createClass({
  quotes() {
    return [
      {
        name: "Anon",
        quote: "Boom shakalacka"
      }
    ].map((quote) => {
      return ( <li>{quote.quote} - {quote.name}</li> );
    });
  },

  render() {
    return (
      <ul id="quote-list" class="item-list">
        {this.quotes()}
      </ul>
    );
  }
});

React.render(<App/>, document.getElementById("app"));
