// pages/multiStepForm.js

import { useState } from 'react';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process or submit the form data
    console.log('Form submitted:', formData);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className=" mt-2 mb-4">
      <h1 className='text-base font-normal text-gray-500 text-center'>Multi-Step Form</h1>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div>
            <h2>Step 1</h2>
            <label htmlFor={'shift'} className="text-gray-900">Date</label>
              <input
                type="date"
                name="Date"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                value={formData.firstName}
                readOnly
                onChange={handleInputChange}
              />
            <br />
            <label htmlFor={'shift'} className="text-gray-900">Shift:</label>
              
              <input
                type="text"
                name="shift"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            
            <br />
            <button
                     
                     className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
                    onClick={nextStep}
                  >
                     <svg
                        className="svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="gem"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path>
                     </svg>
                     Next
                  </button>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2>Step 2: Contact Information</h2>
            <label>
              Email:
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2>Step 3: Review and Submit</h2>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Email: {formData.email}</p>
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
