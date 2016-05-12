'use strict';

var React = require('react');

var Timer = React.createClass({
  getInitialState: function() {
    return {whats_great: this.get_word()};
  },
  get_word(){
    return this.props.words[Math.floor(Math.random() * this.props.words.length)];
  },
  tick: function() {
    this.setState({whats_great: this.get_word()});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div> {this.state.whats_great }</div>
    );
  }
});


module.exports = Timer;
