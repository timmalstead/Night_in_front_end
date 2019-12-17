import React from "react"
import ReactDOM from "react-dom"
import "semantic-ui-css/semantic.min.css"

// import 'semantic-ui-css/semantic.css'
// import 'semantic-ui-css/semantic.js'
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(<App />, document.getElementById("root"))

serviceWorker.unregister()
