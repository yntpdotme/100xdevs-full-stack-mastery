import React, {useEffect, useRef, useState} from 'react';
import './OTPLogin.css';

const OTPLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const handlePhoneSubmit = e => {
    e.preventDefault();
    setError('');

    // Phone Validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      setError('Invalid Phone Number');
      return;
    }

    // BackEnd API Call

    // Show OTP Field
    setShowOtpInput(true);
  };

  const handlePhoneNumberChange = e => {
    setPhoneNumber(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') handlePhoneSubmit(e);
  };

  const onOtpSubmit = otp => {
    console.log('Login Successful', otp);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="OTPLogin">
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <div className="OTPLogin__input">
            <input
              type="number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onKeyDown={handleKeyDown}
              ref={inputRef}
              placeholder="Enter Phone Number"
              className="spin-button-none"
            />
            <button type="submit">Get OTP</button>
          </div>
          {error && <div className="otp-login__error">{error}</div>}
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to *******{phoneNumber.slice(-3)}</p>
          <OtpInput onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

const OtpInput = ({length = 4, onOtpSubmit}) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOnChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value.slice(-1);

    setOtp(newOtp);

    // Submit trigger
    const combinedOtp = newOtp.join('');
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to the next input if the current field is filled
    if (e.target.value && index < length - 1 && inputRefs.current[index + 1]) {
      let nextIndex = index + 1;
      while (nextIndex < length && newOtp[nextIndex]) {
        nextIndex++;
      }

      if (nextIndex < length && inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move focus to the previous input field on backspace
      e.preventDefault();
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOnClick = index => {
    // Select the text inside the input
    inputRefs.current[index].select();

    // Focus on the previous empty field (if any)
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf('')].focus();
    }
  };

  return (
    <div className="OTP__input">
      {otp.map((value, index) => (
        <React.Fragment key={index}>
          <input
            type="number"
            value={value}
            ref={input => (inputRefs.current[index] = input)}
            onChange={e => handleOnChange(e, index)}
            onClick={() => handleOnClick(index)}
            onKeyDown={e => handleKeyDown(e, index)}
            className="otpInput spin-button-none"
          />
          {index === length - 1 ? null : <span className="otp-input__dash" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OTPLogin;
