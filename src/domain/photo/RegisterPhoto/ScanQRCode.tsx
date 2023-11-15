import { Html5QrcodeScanner } from 'html5-qrcode';

import { useEffect, useState } from 'react';

export default function ScanQRCode() {
  const [scanResult, setScanResult] = useState('');

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      false
    );

    const qrSuccessCallback = (decodedText: any, decodedResult: any) => {
      setScanResult(String(decodedText));

      scanner.clear().catch((err) => {
        console.log(err);
      });
    };

    const qrFailCallback = () => {};

    scanner.render(qrSuccessCallback, qrFailCallback);
  }, []);

  return (
    <>{scanResult ? <h1>주소 이름은 {scanResult}입니다.</h1> : <div id="reader" className="w-full h-[250px]"></div>}</>
  );
}
