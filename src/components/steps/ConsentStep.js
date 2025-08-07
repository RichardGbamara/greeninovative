import React, { useState } from 'react';

const ConsentStep = ({ formData, updateFormData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Google Apps Script Web App URL - Updated with new deployment
      const scriptURL = 'https://script.google.com/a/macros/translightsolar.com/s/AKfycbx0NLg3VE4D9t03DQG12gbV-C9U1yH3MCJjWBqEXLn662vcU4rAwQ7yQGz8udiwUZ9M/exec';
      
      const formDataToSend = {
        timestamp: new Date().toISOString(),
        // Contact Info
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        emailAddress: formData.emailAddress,
        preferredContact: formData.preferredContact,
        
        // Company Info
        company: formData.company,
        role: formData.role,
        department: formData.department,
        branch: formData.branch,
        
        // Location Info
        propertyLocation: formData.propertyLocation,
        propertyOwnership: formData.propertyOwnership,
        propertyType: formData.propertyType,
        
        // Energy Usage Info
        monthlyBill: formData.monthlyBill,
        frequentOutages: formData.frequentOutages,
        solarReasons: formData.solarReasons,
        solutionInterest: formData.solutionInterest,
        
        // Financing Info
        paymentOption: formData.paymentOption,
        installationTimeline: formData.installationTimeline,
        
        // Consent Info
        specialRequirements: formData.specialRequirements,
        consent: true
      };

      // Use URLSearchParams to send data as form data
      const urlParams = new URLSearchParams();
      Object.keys(formDataToSend).forEach(key => {
        urlParams.append(key, formDataToSend[key]);
      });

      // Try with no-cors mode first
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlParams.toString()
      });

      // Since we're using no-cors, we can't read the response
      // We'll assume success if no error is thrown
      setSubmitStatus('success');
      alert('Thank you! Your solar inquiry has been submitted successfully.');
      console.log('Form submitted successfully:', formDataToSend);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <div className="title-section">
          <h1>Consent</h1>
          <p>Kindly give us your consent</p>
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
        <label className="form-label">Any special requirements?</label>
        <textarea
          className="textarea"
          placeholder="e.g. I will like to speak to an engineer"
          value={formData.specialRequirements}
          onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
        />
      </div>

      <div className="consent-text">
        I consent to be contacted by Translight Solar regarding this request
      </div>

      <div className="button-group">
        <button 
          type="submit" 
          className={`btn ${submitStatus === 'success' ? 'btn-success' : 'btn-submit'}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {submitStatus === 'success' && (
        <div style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>
          ✅ Form submitted successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
          ❌ Error submitting form. Please try again.
        </div>
      )}
    </form>
  );
};

export default ConsentStep; 