var React = require("react");

var Router = require("react-router");
var Link = Router.Link;

module.exports = React.createClass({
  render(){
    return <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"profile"}>Profile</Link>
    </div>
  }
})