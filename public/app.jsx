//Component
var React = require('react')
var ReactDOM = require('react-dom')
var Greeter = require('./components/Greeter')

var firstName = 'Ilana'

ReactDOM.render(
  //Props
  <Greeter name={firstName}/>,
  document.getElementById('app')
)
