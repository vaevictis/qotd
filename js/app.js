import React from 'react';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import QuoteList from './components/QuoteList.js';
import QuoteForm from './components/QuoteForm.js';
require('../css/style.css');

let App = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    return { quotes: [] };
  },

  submitQuote(quote, attribution) {
    this.firebaseRefs.quotes.push({
      quote: quote,
      attribution: attribution,
      quoted_at: new Date().getTime()
    });
  },

  componentWillMount() {
    this.bindAsArray(
      new Firebase("https://shitmymatessay.firebaseio.com/quotes"),
      "quotes"
    );
  },

  render() {
    return (
      <div>
        <h1>Shit My Mates Say</h1>
        <QuoteForm onSubmit={this.submitQuote} />
        <QuoteList quotes={ this.state.quotes } />
      </div>
    );
  }
});

React.render(<App/>, document.getElementById("app"));
