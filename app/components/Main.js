var React = require('react')

var Main = React.createClass({
  render: function() {
    return(
      <div>
        Jello from Main
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
