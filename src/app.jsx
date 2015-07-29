'use strict';

var React = require("react");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Ready to use React !</h1>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);
