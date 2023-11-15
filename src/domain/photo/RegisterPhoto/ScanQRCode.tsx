import { Html5QrcodeScanner } from 'html5-qrcode';

import { useEffect, useState } from 'react';

export default function ScanQRCode() {
  const [scanResultUrl, setscanResultUrl] = useState('');

  const isImgUrl = async (url: string) => {
    console.log(url);

    const img = new Image();
    img.src = `${url}.png`;

    return await new Promise((resolve) => {
      img.onerror = () => {
        resolve(false);
      };
      img.onload = () => {
        resolve(true);
      };
    });
  };

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
      setscanResultUrl(String(decodedText));

      scanner.clear().catch((err) => {
        console.log(err);
      });
    };

    const qrFailCallback = () => {};

    scanner.render(qrSuccessCallback, qrFailCallback);

    return () => {
      scanner.clear().catch((error) => {
        console.error('Failed to clear html5QrcodeScanner. ', error);
      });
    };
  }, []);

  useEffect(() => {
    if (scanResultUrl) {
      isImgUrl(scanResultUrl)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [scanResultUrl]);

  return (
    <>
      <div id="reader" className="w-full h-[250px]"></div>
    </>
  );
}
