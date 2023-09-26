import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class SignIn extends Component {
  state = {number: '', error: false}

  onNumberChange = event => {
    this.setState({number: event.target.value})
  }

  onSignUp = () => {
    const {number} = this.state
    const {history} = this.props
    if (number.length !== 10) {
      this.setState({error: true})
    } else {
      Cookies.set('number', number, {
        expires: 30,
        path: '/',
      })
      this.setState({error: false})
      history.push('/otp')
    }
  }

  render() {
    const {number, error} = this.state
    return (
      <div className="signInMainContainer">
        <img
          src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1695704735/AK_logo_x6eohk.png"
          alt="logo"
        />
        <p className="welcomeBack">Welcome Back</p>
        <p className="PleaseSignInPara">Please sign in to your account</p>
        <p className="enterContact">Enter Contact Number</p>
        <div className="mobileNumberContainer">
          <img
            src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1695706038/image_1_igqvtj.png"
            alt="flag"
            className="flagStyles"
          />
          <select className="countryCode">
            <option>+91</option>
            <option>+1</option>
            <option>+44</option>
            <option>+52</option>
            <option>+86</option>
          </select>
          <input
            type="number"
            max="10"
            className="inputNumberField"
            onChange={this.onNumberChange}
            value={number}
          />
        </div>
        <p className="weWillSend">
          We will send you a one time SMS message.
          <br />
          Charges may apply
        </p>
        <button type="button" className="signInButton" onClick={this.onSignUp}>
          Sign in with OTP
        </button>
        {error && (
          <p className="error-message">
            Invalid number, please enter valid 10 digit number
          </p>
        )}
      </div>
    )
  }
}

export default SignIn
