import React from 'react';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

let QuoteList = React.createClass({
  quotes() {
    return this.props.quotes.map((quote, index) => {
      return ( <li key={index}>{quote.quote} - {quote.attribution}</li> );
    });
  },

  render() {
    return <ul>{this.quotes()}</ul>;
  }
});

let App = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    return { quotes: [] };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.firebaseRefs.quotes.push({
      quote: this.state.quote,
      attribution: this.state.attribution
    });
    this.setState({attribution: "", quote: ""});
  },

  componentWillMount() {
    this.bindAsArray(
      new Firebase("https://shitmymatessay.firebaseio.com/quotes"),
      "quotes"
    );
  },

  onQuoteChange(e) {
    this.setState({quote: e.target.value});
  },

  onAttributionChange(e) {
    this.setState({attribution: e.target.value});
  },

  quotes() {
    return this.state.quotes.map((quote) => {
      return ( <li>{quote.quote} - {quote.attribution}</li> );
    });
  },

  render() {
    return (
      <div>
        <QuoteList quotes={ this.state.quotes } />
        <form onSubmit={ this.handleSubmit }>
          <input name="quote" placeholder="Quote" onChange={ this.onQuoteChange } value={ this.state.quote } />
          <input name="attribution" placeholder="Attribution" onChange={ this.onAttributionChange } value={ this.state.attribution } />
          <button>{ "Add #" + (this.state.quotes.length + 1) }</button>
        </form>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById("app"));
