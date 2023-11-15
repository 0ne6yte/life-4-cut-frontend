import React from 'react';

interface StepperProps {
  stepLength: number;
  activeStep: number;
  classProps?: number;
}

const indicatorStyle = {
  previous: 'bg-white border border-primary-default text-primary-default',
  current: 'bg-primary-default text-white',
  next: 'bg-white border border-grey-placeholder text-grey-placeholder',
};

export function Stepper({ stepLength, activeStep, classProps }: StepperProps) {
  const getIndicatorStyle = (step: number) => {
    if (step < activeStep) {
      return indicatorStyle.previous;
    }
    if (step === activeStep) {
      return indicatorStyle.current;
    }
    return indicatorStyle.next;
  };

  return (
    <div className="flex select-none">
      {Array.from({ length: stepLength }, (_, index) => index + 1).map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-[24px] h-[24px] rounded-full flex items-center justify-center text-[11px] font-bold ${getIndicatorStyle(
              step
            )}`}
          >
            {step}
          </div>
          {step < stepLength && (
            <div className={`h-[1px] w-[76px] ${step < activeStep ? 'bg-primary-default' : 'bg-grey-placeholder'}`} />
          )}
        </div>
      ))}
    </div>
  );
}
