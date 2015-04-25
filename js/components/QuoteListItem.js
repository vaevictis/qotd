var React = require('react/addons');
var Animations = React.addons.CSSTransitionGroup;
require('../../css/animations.css');

module.exports = React.createClass({
  getInitialState() {
    return { bylineVisible: false };
  },

  byline(quote) {
    var date = new Date(quote.quoted_at).toLocaleDateString();
    var byline = [quote.attribution, date].filter(Boolean).join(", ");
    return (
      <small key={date} className="quote-byline list-group-item-text">- {byline}</small>
    );
  },

  toggleByline() {
    this.setState({bylineVisible: !this.state.bylineVisible});
  },

  render() {
    return (
      <div key={this.props.key} className="quote-item list-group-item" onClick={this.toggleByline}>
        <h4 className="quote-text list-group-item-heading">{this.props.quote.quote}</h4>
        <Animations transitionName="fade">
          { this.state.bylineVisible && this.byline(this.props.quote)}
        </Animations>
      </div>
    );
  }
});
