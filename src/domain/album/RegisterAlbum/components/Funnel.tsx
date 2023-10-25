import { type ReactElement, useState } from 'react';
import { type UseFormReturn } from 'react-hook-form';
import { useRoutes } from 'react-router-dom';

import { BottomTab } from '@/domain/album/RegisterAlbum/components/layouts/BottomTab';
import { Header } from '@/domain/album/RegisterAlbum/components/layouts/Header';

interface FunnelProps {
  children: ReactElement[];
}

interface StepProps {
  name: string;
  children: ReactElement;
  stepNum: number;
  onNext: () => null;
}
export function useFunnel(steps: readonly string[], options?: UseFormReturn<any>['control']) {
  const [step, setStep] = useState<string | null>(steps[0]);

  function Funnel({ children }: FunnelProps) {
    const visibleStep = children.find((childStep) => childStep.props.name === step);
    return <>{visibleStep}</>;
  }

  function Step({ name, children, stepNum, onNext }: StepProps) {
    return (
      <div className={'flex flex-col h-full'}>
        <Header title={name} />
        <div className={'flex-1'}>{children}</div>
        <BottomTab stepNum={stepNum} stepLength={steps.length} onNext={onNext} />
      </div>
    );
  }

  return Object.assign([Object.assign(Funnel, { Step }), setStep]);
}
