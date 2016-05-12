	var words = "America Beer Java Philly Tacos Military Aliens".split(" ");
	if(window.location.hash.length>1)
		words = window.location.hash.substring(1).split("%20");

var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Timer = require("./ui/Timer"),
    mountNode = document.getElementById("app");

var TrumpGreat = React.createClass({
  getInitialState: function() {
    return {words: this.props.words}
  },
  render: function() {
    return (
      <h1>Make <span><Timer words={this.props.words} /></span>Great Again
	</h1>
    );
  }
});



ReactDOM.render(<TrumpGreat words={words} />, mountNode);

