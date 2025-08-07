import React from 'react';

const ContactStep = ({ formData, updateFormData, nextStep }) => {
  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <div className="title-section">
          <h1>Personal Info</h1>
          <p>Please provide your name and contact details</p>
        </div>
        <div className="logo">
          <img 
            src="/images/Logo.png" 
            alt="The Greennovative Lab Logo" 
            className="logo-icon"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">First Name</label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g. Michael John"
          value={formData.firstName}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g. Nsiah Asare"
          value={formData.lastName}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Phone Number</label>
        <input
          type="tel"
          className="form-input"
          placeholder="e.g. 0505409341"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input
          type="email"
          className="form-input"
          placeholder="e.g. mjnsiahasare@gmail.com"
          value={formData.emailAddress}
          onChange={(e) => handleInputChange('emailAddress', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Preferred Contact Method</label>
        <div className="radio-group">
          <div className="radio-option">
            <input
              type="radio"
              id="email"
              name="preferredContact"
              value="email"
              checked={formData.preferredContact === 'email'}
              onChange={(e) => handleInputChange('preferredContact', e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="sms"
              name="preferredContact"
              value="sms"
              checked={formData.preferredContact === 'sms'}
              onChange={(e) => handleInputChange('preferredContact', e.target.value)}
            />
            <label htmlFor="sms">SMS</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="call"
              name="preferredContact"
              value="call"
              checked={formData.preferredContact === 'call'}
              onChange={(e) => handleInputChange('preferredContact', e.target.value)}
            />
            <label htmlFor="call">Call</label>
          </div>
        </div>
      </div>

      <div className="button-group">
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </div>
    </form>
  );
};

export default ContactStep; 