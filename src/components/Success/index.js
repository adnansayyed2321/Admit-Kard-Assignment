import './index.css'

const Success = () => (
  <div className="successMainContainer">
    <img
      src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1695728288/Artboard_1_hqttmi.png"
      alt="success-sign-up"
    />
    <p className="welcome-to-para">Welcome to AdmitKard</p>
    <p className="paraTextInOrder">
      In order to provide you with <br /> a custom experience,
      <br />
      <span className="weNeedToPara"> we need to ask you a few questions.</span>
    </p>
    <button type="button" className="getStartedButton">
      Get Started
    </button>
    <p className="thisWillPara">*This will take only 5 min.</p>
  </div>
)
export default Success
