import { Html5Qrcode } from 'html5-qrcode';

import { useEffect, useRef } from 'react';

export default function ScanQRCode() {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html5QrCode = new Html5Qrcode('reader');
    const config = { fps: 10, qrbox: { width: 250, height: 250 }, facingMode: 'environment' };

    const qrCodeSuccessCallback = (decodedText: any, decodedResult: any) => {
      html5QrCode.clear();
      const decodedTextString = String(decodedText);
      console.log(decodedTextString, decodedResult);
    };

    const qrCodeErrorCallback = (err: any) => {
      html5QrCode.clear();
      console.log(err);
    };

    if (!previewRef.current) {
      return;
    }

    const didStart = html5QrCode
      .start({ facingMode: 'environment' }, config, qrCodeSuccessCallback, qrCodeErrorCallback)
      .catch((err) => {
        console.log(err);
      });

    return () => {
      didStart
        .then(() => {
          html5QrCode.stop().catch((err) => {
            console.log(err);
          });
        })
        .catch(() => {
          console.log('Error stopping scanner');
        });
    };
  }, [previewRef]);

  return (
    <div className="w-[4/5]">
      <div id="reader" ref={previewRef}></div>
    </div>
  );
}
