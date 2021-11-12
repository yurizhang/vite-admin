import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from "react-router-dom";
// import 'antd/dist/antd.less';
import "@/assets/css/antReset.less"
import "@/assets/css/common.less"
import "./css/App.less"
// import App from './App'
import App from './Customapp'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
