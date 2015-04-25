var React = require('react');
var QuoteListItem = require('./QuoteListItem.js');

module.exports = React.createClass({
  spinner() {
    return (
      <div className="list-group-item">
        <div className="spinner" />
      </div>
    );
  },

  quotes() {
    return this.props.quotes.reverse().map((quote, index) => {
      return (<QuoteListItem quote={quote} key={index} />);
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
