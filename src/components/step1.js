import * as React from 'react'
import '../styles/step1.css'
import '../media-queries/step1.css'
const Step1 = () => (
  <div className="step1 ">
    <h1 className="step1-header">Personal Info</h1>
    <p className="step1-sub">Please provide your name, email address, and phone number.</p>
    <form action="#" className="step1-form">
      <div className="step1-form__cell">
        <label htmlFor="name" className="step1-label step-1-name">Name</label >
        <input type="text" id="name" name="name" className="step1-input"/>
      </div>
      <div className="step1-form__cell">
        <label htmlFor="address" className="step1-label step-1-email">Email Address</label>
        <input type="text" id="address" name="address" className="step1-input"/>
      </div>
      <div className="step1-form__cell">
        <label htmlFor="phone" className="step1-label step-1-phone">Phone Number</label>
        <input type="text" id="phone" name="phone" className="step1-input"/>
      </div>
    </form>
  </div>
)

export default Step1