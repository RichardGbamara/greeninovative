import React from 'react';

const CompanyStep = ({ formData, updateFormData, nextStep }) => {
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
          <h1>Company Info</h1>
          <p>Please provide your company and work details</p>
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
        <label className="form-label">Company</label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g. Absa Bank"
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Role</label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g. Intelligence Officer"
          value={formData.role}
          onChange={(e) => handleInputChange('role', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Department</label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g. Risk Management"
          value={formData.department}
          onChange={(e) => handleInputChange('department', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Branch</label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g. Kasoa"
          value={formData.branch}
          onChange={(e) => handleInputChange('branch', e.target.value)}
          required
        />
      </div>

      <div className="button-group">
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </div>
    </form>
  );
};

export default CompanyStep; 