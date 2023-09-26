import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SignIn from './components/SignIn'
import Otp from './components/Otp'
import Success from './components/Success'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/otp" component={Otp} />
      <Route exact path="/success" component={Success} />
    </Switch>
  </BrowserRouter>
)

export default App
