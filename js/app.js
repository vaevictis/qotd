import React from 'react';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

let QuoteList = React.createClass({
  quotes() {
    return this.props.items.map((quote, index) => {
      return ( <li key={index}>{quote.text} - {quote.name}</li> );
    });
  },

  render() {
    return <ul>{this.quotes()}</ul>;
  }
});

let App = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    return { items: [] };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.firebaseRefs.items.push({
      text: this.state.text,
      name: "React!"
    });
    this.setState({text: ""});
  },

  componentWillMount() {
    this.bindAsArray(
      new Firebase("https://krhlpbn0zsv.firebaseio-demo.com/"),
      "items"
    );
    console.log(this.state.items);
  },

  onChange(e) {
    this.setState({text: e.target.value});
  },

  quotes() {
    return this.state.items.map((quote) => {
      return ( <li>{quote.text} - {quote.name}</li> );
    });
  },

  render() {
    return (
      <div>
        <QuoteList items={ this.state.items } />
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.onChange } value={ this.state.text } />
          <button>{ "Add #" + (this.state.items.length + 1) }</button>
        </form>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById("app"));
