import React, { useCallback, useState, useEffect } from 'react';
import { processBankOcr } from '../shared/calculation.service';

const BankOcr: React.FC = () => {
  const [file, setFile] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const fileChangeHandler = useCallback((changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = changeEvent.target;
    if (files && files.length) {
      const reader = new FileReader();
      reader.onloadend = function() {
        setFile(reader.result as string);
      };
      reader.readAsText(files[0]);
    }
  }, []);

  // update result on file change
  useEffect(() => {
    setValue(processBankOcr(file));
  }, [file]);

  return (
    <React.Fragment>
      <div>
        <input type="file" onChange={fileChangeHandler} />
      </div>
      <div>
        <span>Raw:</span>
        <pre>{file}</pre>
      </div>
      <div>
        <span>Result: </span>
        <span>{value}</span>
      </div>
    </React.Fragment>
  );
};

export default BankOcr;
