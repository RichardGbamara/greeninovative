import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactStep from './steps/ContactStep';
import CompanyStep from './steps/CompanyStep';
import LocationStep from './steps/LocationStep';
import EnergyUsageStep from './steps/EnergyUsageStep';
import FinancingStep from './steps/FinancingStep';
import ConsentStep from './steps/ConsentStep';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Contact Info
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    preferredContact: '',
    
    // Company Info
    company: '',
    role: '',
    department: '',
    branch: '',
    
    // Location Info
    propertyLocation: '',
    propertyOwnership: '',
    propertyType: '',
    
    // Energy Usage Info
    monthlyBill: '',
    frequentOutages: '',
    solarReasons: '',
    solutionInterest: '',
    
    // Financing Info
    paymentOption: '',
    installationTimeline: '',
    
    // Consent Info
    specialRequirements: '',
    consent: false
  });

  const steps = [
    { id: 1, title: 'CONTACT', component: ContactStep },
    { id: 2, title: 'COMPANY', component: CompanyStep },
    { id: 3, title: 'LOCATION', component: LocationStep },
    { id: 4, title: 'ENERGY USAGE', component: EnergyUsageStep },
    { id: 5, title: 'FINANCING', component: FinancingStep },
    { id: 6, title: 'CONSENT', component: ConsentStep }
  ];

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'pending';
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="form-container">
      {/* Navigation Header */}
      <div className="form-header">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <Link to="/" className="form-logo">
          <img 
            src="/images/Logo.png" 
            alt="The Greennovative Lab Logo" 
            className="logo-icon"
          />
        </Link>
      </div>
      
      <div className="container">
        <div className="sidebar">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`step-indicator ${getStepStatus(step.id)}`}
            >
              <div className="step-number">{step.id}</div>
              <div className="step-title">{step.title}</div>
            </div>
          ))}
        </div>
        <div className="main-content">
          <CurrentStepComponent
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            currentStep={currentStep}
            totalSteps={steps.length}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm; 