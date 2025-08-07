import React from 'react';

const FinancingStep = ({ formData, updateFormData, nextStep }) => {
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
          <h1>Financing Info</h1>
          <p>How would you like to have the system financed?</p>
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
        <label className="form-label">Preferred Payment Option</label>
        <div className="radio-group-vertical">
          <div className="radio-option">
            <input
              type="radio"
              id="payment-onetime"
              name="paymentOption"
              value="one-time-payment"
              checked={formData.paymentOption === 'one-time-payment'}
              onChange={(e) => handleInputChange('paymentOption', e.target.value)}
            />
            <label htmlFor="payment-onetime">One-time payment</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="payment-monthly"
              name="paymentOption"
              value="monthly-installments"
              checked={formData.paymentOption === 'monthly-installments'}
              onChange={(e) => handleInputChange('paymentOption', e.target.value)}
            />
            <label htmlFor="payment-monthly">Monthly installments</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="payment-company"
              name="paymentOption"
              value="special-company-financing"
              checked={formData.paymentOption === 'special-company-financing'}
              onChange={(e) => handleInputChange('paymentOption', e.target.value)}
            />
            <label htmlFor="payment-company">Special Company financing</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">How soon are you looking to install solar</label>
        <div className="radio-group-vertical">
          <div className="radio-option">
            <input
              type="radio"
              id="timeline-1-3"
              name="installationTimeline"
              value="1-3-months"
              checked={formData.installationTimeline === '1-3-months'}
              onChange={(e) => handleInputChange('installationTimeline', e.target.value)}
            />
            <label htmlFor="timeline-1-3">1-3 months</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="timeline-6-months"
              name="installationTimeline"
              value="within-6-months"
              checked={formData.installationTimeline === 'within-6-months'}
              onChange={(e) => handleInputChange('installationTimeline', e.target.value)}
            />
            <label htmlFor="timeline-6-months">within 6 months</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="timeline-exploring"
              name="installationTimeline"
              value="just-exploring"
              checked={formData.installationTimeline === 'just-exploring'}
              onChange={(e) => handleInputChange('installationTimeline', e.target.value)}
            />
            <label htmlFor="timeline-exploring">Just exploring for now</label>
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

export default FinancingStep; 