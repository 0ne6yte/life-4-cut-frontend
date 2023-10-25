import { Button, Stepper } from '@/domain/_common/components';

interface BottomTabProps {
  stepNum: number;
  stepLength: number;
  onNext: () => void;
}

export function BottomTab({ stepNum, stepLength, onNext }: BottomTabProps) {
  return (
    <div className={'w-full'}>
      <div className={'w-fit mx-auto'}>
        <Stepper stepLength={stepLength} activeStep={stepNum} />
      </div>
      <div className={'flex gap-5'}>
        <Button variant={'contained'} color={'grey'}>
          뒤로 가기
        </Button>
        <Button variant={'contained'} color={'primary'} onClick={onNext}>
          다음
        </Button>
      </div>
    </div>
  );
}
