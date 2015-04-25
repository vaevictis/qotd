var React = require('react');

module.exports = React.createClass({
  getInitialState() {
    return {
      quote: "",
      attribution: ""
    };
  },

  onQuoteChange(e) {
    this.setState({quote: e.target.value});
  },

  onAttributionChange(e) {
    this.setState({attribution: e.target.value});
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.quote, this.state.attribution);
    this.setState({attribution: "", quote: ""});
  },

  render() {
    return (
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
          />
          <input
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
    );
  }
});
