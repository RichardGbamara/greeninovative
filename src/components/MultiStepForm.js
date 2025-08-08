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
    firstName: '', lastName: '', phoneNumber: '', emailAddress: '', preferredContact: '',
    company: '', role: '', department: '', branch: '',
    propertyLocation: '', propertyOwnership: '', propertyType: '',
    monthlyBill: '', frequentOutages: '', solarReasons: '', solutionInterest: '',
    paymentOption: '', installationTimeline: '',
    specialRequirements: '', consent: false
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
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return 'bg-green-500 text-white';
    if (stepId === currentStep) return 'bg-blue-600 text-white';
    return 'bg-gray-200 text-gray-600';
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-white border-t-4 border-blue-800 shadow-md fixed top-0 w-full z-50">
        <Link to="/" className="text-gray-700 font-medium hover:text-orange-500 transition">
          ← Back to Home
        </Link>
        <Link to="/" className="flex items-center justify-center">
          <img 
            src="/images/Logo.png" 
            alt="The Greennovative Lab Logo" 
            className="w-14 h-14 object-contain"
          />
        </Link>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 pt-28 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Steps */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center p-3 rounded-lg shadow-sm ${getStepStatus(step.id)}`}
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full font-bold mr-3 bg-white text-black">
                {step.id}
              </div>
              <div className="uppercase font-semibold">{step.title}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 bg-white rounded-lg shadow-lg p-6">
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
