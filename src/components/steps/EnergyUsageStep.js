import React from 'react';

const EnergyUsageStep = ({ formData, updateFormData, nextStep }) => {
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
          <h1>Energy Usage Info</h1>
          <p>Please provide information on your power consumption</p>
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
        <label className="form-label">What is your current monthly bill from ECG?</label>
        <div className="radio-group">
          <div className="radio-option">
            <input
              type="radio"
              id="bill-200-500"
              name="monthlyBill"
              value="200-500"
              checked={formData.monthlyBill === '200-500'}
              onChange={(e) => handleInputChange('monthlyBill', e.target.value)}
            />
            <label htmlFor="bill-200-500">200-500</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="bill-500-1000"
              name="monthlyBill"
              value="500-1000"
              checked={formData.monthlyBill === '500-1000'}
              onChange={(e) => handleInputChange('monthlyBill', e.target.value)}
            />
            <label htmlFor="bill-500-1000">500-1000</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="bill-1000-2000"
              name="monthlyBill"
              value="1000-2000"
              checked={formData.monthlyBill === '1000-2000'}
              onChange={(e) => handleInputChange('monthlyBill', e.target.value)}
            />
            <label htmlFor="bill-1000-2000">1000-2000</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="bill-2000-plus"
              name="monthlyBill"
              value="2000+"
              checked={formData.monthlyBill === '2000+'}
              onChange={(e) => handleInputChange('monthlyBill', e.target.value)}
            />
            <label htmlFor="bill-2000-plus">2000+</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Do you get frequent priorities?</label>
        <div className="radio-group">
          <div className="radio-option">
            <input
              type="radio"
              id="outages-yes"
              name="frequentOutages"
              value="yes"
              checked={formData.frequentOutages === 'yes'}
              onChange={(e) => handleInputChange('frequentOutages', e.target.value)}
            />
            <label htmlFor="outages-yes">Yes</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="outages-no"
              name="frequentOutages"
              value="no"
              checked={formData.frequentOutages === 'no'}
              onChange={(e) => handleInputChange('frequentOutages', e.target.value)}
            />
            <label htmlFor="outages-no">No</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="outages-occasionally"
              name="frequentOutages"
              value="occasionally"
              checked={formData.frequentOutages === 'occasionally'}
              onChange={(e) => handleInputChange('frequentOutages', e.target.value)}
            />
            <label htmlFor="outages-occasionally">Occasionally</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">What are your reasons for getting solar?</label>
        <div className="radio-group-vertical">
          <div className="radio-option">
            <input
              type="radio"
              id="reason-bills"
              name="solarReasons"
              value="reduce-electricity-bills"
              checked={formData.solarReasons === 'reduce-electricity-bills'}
              onChange={(e) => handleInputChange('solarReasons', e.target.value)}
            />
            <label htmlFor="reason-bills">Reduce electricity bills</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="reason-investment"
              name="solarReasons"
              value="long-term-investment"
              checked={formData.solarReasons === 'long-term-investment'}
              onChange={(e) => handleInputChange('solarReasons', e.target.value)}
            />
            <label htmlFor="reason-investment">Long-term investment</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="reason-backup"
              name="solarReasons"
              value="backup-power"
              checked={formData.solarReasons === 'backup-power'}
              onChange={(e) => handleInputChange('solarReasons', e.target.value)}
            />
            <label htmlFor="reason-backup">Backup power during outages</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="reason-environmental"
              name="solarReasons"
              value="environmental"
              checked={formData.solarReasons === 'environmental'}
              onChange={(e) => handleInputChange('solarReasons', e.target.value)}
            />
            <label htmlFor="reason-environmental">Environmental / sustainability reasons</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">What solution are you interested in?</label>
        <div className="radio-group-vertical">
          <div className="radio-option">
            <input
              type="radio"
              id="solution-battery"
              name="solutionInterest"
              value="solar-with-battery"
              checked={formData.solutionInterest === 'solar-with-battery'}
              onChange={(e) => handleInputChange('solutionInterest', e.target.value)}
            />
            <label htmlFor="solution-battery">Solar with battery backup</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="solution-grid-tied"
              name="solutionInterest"
              value="solar-without-battery"
              checked={formData.solutionInterest === 'solar-without-battery'}
              onChange={(e) => handleInputChange('solutionInterest', e.target.value)}
            />
            <label htmlFor="solution-grid-tied">Solar without battery (grid-tied)</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="solution-backup-only"
              name="solutionInterest"
              value="backup-power-only"
              checked={formData.solutionInterest === 'backup-power-only'}
              onChange={(e) => handleInputChange('solutionInterest', e.target.value)}
            />
            <label htmlFor="solution-backup-only">Backup power only (battery + inverter)</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="solution-not-sure"
              name="solutionInterest"
              value="not-sure"
              checked={formData.solutionInterest === 'not-sure'}
              onChange={(e) => handleInputChange('solutionInterest', e.target.value)}
            />
            <label htmlFor="solution-not-sure">Not sure yet</label>
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

export default EnergyUsageStep; 