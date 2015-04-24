import React from 'react';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import QuoteList from './components/QuoteList.js';
require('../css/style.css');

let App = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    return { quotes: [] };
  },

  handleSubmit(e) {
    e.preventDefault();
    this.firebaseRefs.quotes.push({
      quote: this.state.quote,
      attribution: this.state.attribution,
      quoted_at: new Date().getTime()
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
        <h1>Shit My Mates Say</h1>

        <form onSubmit={ this.handleSubmit }>
          <div className="form-group joined-inputs">
            <label className="sr-only" htmlFor="quote">New Quote</label>
            <textarea
              name="quote"
              placeholder="Some awesome quote..."
              onChange={ this.onQuoteChange }
              value={ this.state.quote }
              className="form-control"
              rows="3"
            /><input
              name="attribution"
              placeholder="Who?"
              onChange={ this.onAttributionChange }
              value={ this.state.attribution }
              className="form-control"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-lg btn-default btn-block">{ "Quote it!" }</button>
          </div>
        </form>

        <QuoteList quotes={ this.state.quotes } />
      </div>
    );
  }
});

React.render(<App/>, document.getElementById("app"));
