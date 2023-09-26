import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import OTPInput from 'react-input-otp'
import './index.css'

class Otp extends Component {
  state = {otp: '', errorInOtp: false}

  onClickOtp = event => {
    this.setState({otp: event})
  }

  onVerify = () => {
    const {history} = this.props
    const {otp} = this.state
    const myOtp = otp.toString()
    if (myOtp.length === 6) {
      this.setState({errorInOtp: false})
      history.push('/success')
    } else {
      this.setState({errorInOtp: true})
    }
  }

  render() {
    const {errorInOtp} = this.state
    const number = Cookies.get('number')
    return (
      <div className="otpMainContainer">
        <img
          src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1695723269/undraw_confirmed_81ex_xupkgx.png"
          alt="otp-sent"
        />
        <p className="pleaseVerifyPara">Please verify Mobile number</p>
        <p className="anOtpSentPara">
          An OTP is sent to <span className="number">+91{number}</span>
        </p>
        <Link to="/">
          <p className="changePhoneNumber">Change Phone Number</p>
        </Link>
        <div>
          <OTPInput otplength={6} autoFocus onChange={this.onClickOtp} />
        </div>
        <p className="didNotGetOtp">
          Did not receive the code ? <span className="resend">Resend</span>
        </p>
        <button type="button" className="verifyButton" onClick={this.onVerify}>
          Verify
        </button>
        {errorInOtp && (
          <p className="errorMessageOtp">Please enter valid 6 digit OTP</p>
        )}
      </div>
    )
  }
}
export default Otp
