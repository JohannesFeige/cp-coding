import React from 'react';
import BankOcr from './BankOcr';

const Ocr: React.FC = () => {
  return (
    <div>
      <h3>BankOCR</h3>
      <p>Scans account numbers from ASCII file.</p>
      <BankOcr />
    </div>
  );
};

export default Ocr;
