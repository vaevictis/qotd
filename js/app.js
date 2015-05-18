var React = require('react');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var QuoteList = require('./components/QuoteList.js');
var QuoteForm = require('./components/QuoteForm.js');
require("../sass/application.sass");

let App = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    return { quotes: [] };
  },

  submitQuote(quote, attribution) {
    if (quote.trim()) {
      this.firebaseRefs.quotes.push({
        quote: quote.trim(),
        attribution: attribution.trim(),
        quoted_at: new Date().getTime()
      });
    }
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
        <QuoteList quotes={this.state.quotes} />
      </div>
    );
  }
});

React.render(<App/>, document.getElementById("app"));
