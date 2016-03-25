{React} = require 'react'
{ReactDOM} = require 'react-dom'


App = React.createClass
  render: ->
      <div>
        <h1>BenchBNB</h1>
      </div>

$(document).ready ->
  ReactDOM.render(
    <App />,
    $("#content")[0]
    )
