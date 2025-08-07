import React from 'react';

const LocationStep = ({ formData, updateFormData, nextStep }) => {
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
          <h1>Location Info</h1>
          <p>Please provide information on your property to be solarized</p>
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
        <label className="form-label">Location of Property for installation</label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g. Teiman, Accra"
          value={formData.propertyLocation}
          onChange={(e) => handleInputChange('propertyLocation', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Do you own the property?</label>
        <div className="radio-group">
          <div className="radio-option">
            <input
              type="radio"
              id="own-yes"
              name="propertyOwnership"
              value="yes"
              checked={formData.propertyOwnership === 'yes'}
              onChange={(e) => handleInputChange('propertyOwnership', e.target.value)}
            />
            <label htmlFor="own-yes">Yes</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="own-no"
              name="propertyOwnership"
              value="no"
              checked={formData.propertyOwnership === 'no'}
              onChange={(e) => handleInputChange('propertyOwnership', e.target.value)}
            />
            <label htmlFor="own-no">No</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Type of property</label>
        <div className="radio-group">
          <div className="radio-option">
            <input
              type="radio"
              id="detached"
              name="propertyType"
              value="detached"
              checked={formData.propertyType === 'detached'}
              onChange={(e) => handleInputChange('propertyType', e.target.value)}
            />
            <label htmlFor="detached">Detached</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="semi-detached"
              name="propertyType"
              value="semi-detached"
              checked={formData.propertyType === 'semi-detached'}
              onChange={(e) => handleInputChange('propertyType', e.target.value)}
            />
            <label htmlFor="semi-detached">Semi-detached</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="apartment"
              name="propertyType"
              value="apartment"
              checked={formData.propertyType === 'apartment'}
              onChange={(e) => handleInputChange('propertyType', e.target.value)}
            />
            <label htmlFor="apartment">Apartment</label>
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

export default LocationStep; 