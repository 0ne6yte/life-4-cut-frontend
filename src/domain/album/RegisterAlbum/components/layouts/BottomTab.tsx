import { Button, Stepper } from '@/domain/_common/components';

interface BottomTabProps {
  stepNum: number;
  stepLength: number;
  onPrev?: () => void;
  onNext?: () => void;
}

export function BottomTab({ stepNum, stepLength, onPrev, onNext }: BottomTabProps) {
  const isLastPage = stepNum === stepLength;
  return (
    <div className={'w-full'}>
      <div className={'w-fit mx-auto mb-3'}>
        <Stepper stepLength={stepLength} activeStep={stepNum} />
      </div>
      <div className={'flex gap-5'}>
        {onPrev && (
          <Button variant={'contained'} color={'grey'} onClick={onPrev} type={'button'}>
            뒤로 가기
          </Button>
        )}
        {!isLastPage && onNext && (
          <Button variant={'contained'} color={'primary'} onClick={onNext} type={'button'}>
            다음
          </Button>
        )}
        {isLastPage && (
          <Button variant={'contained'} color={'primary'} type={'submit'}>
            완료
          </Button>
        )}
      </div>
    </div>
  );
}
