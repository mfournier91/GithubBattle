var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div> Jello World </div>
    )
  }
})

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
)
