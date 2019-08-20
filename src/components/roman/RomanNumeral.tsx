import React, { useState, useCallback } from 'react';
import { toRomanNumerals } from '../shared/calculation.service';

const RomanNumeral: React.FC = () => {
  const [value, setValue] = useState<undefined | number>();
  const [romanValue, setRomanValue] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseInt(event.target.value);
    setValue(newValue);
    setRomanValue(getTranslation(newValue));
  };

  const getTranslation = useCallback((value: number | undefined) => {
    let tranlatedValue = '';
    if (value) {
      tranlatedValue = toRomanNumerals(value);
    }
    return tranlatedValue;
  }, []);

  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Decimal Value</span>
        </div>
        <input
          type="number"
          className="form-control"
          placeholder="Decimal Value"
          value={value}
          onChange={handleChange}
        />
      </div>
      <span id="result">Roman Numeral: {romanValue}</span>
    </div>
  );
};

export default RomanNumeral;
