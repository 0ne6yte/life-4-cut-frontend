import { useState } from 'react';

import { Stepper } from '@/domain/_common/components';
import { Button } from '@/domain/_common/components/Button';

import AddPhotoIntoAlbum from './components/AddPhotoIntoAlbum';
import SelectFrame from './components/SelectFrame';
import UploadInfo from './components/UploadInfo';

export default function UploadPhoto() {
  const [step, setStep] = useState(1);

  const handleStepForward = () => {
    setStep((prev) => prev + 1);
  };

  const handleStepBackward = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="h-full flex flex-col p-10">
      <h1 className="font-bold text-[24px] mb-4">새 사진 등록</h1>
      <div className="h-[75%] w-full relative mb-10 flex flex-col justify-center">
        {step === 1 && <AddPhotoIntoAlbum />}
        {step === 2 && <SelectFrame />}
        {step === 3 && <UploadInfo />}
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Stepper stepLength={3} activeStep={step} />
        <div className="w-full flex gap-3">
          <Button variant="contained" onClick={handleStepBackward}>
            뒤로 가기
          </Button>
          <Button color="primary" variant="contained" onClick={handleStepForward}>
            다음
          </Button>
        </div>
      </div>
    </div>
  );
}
