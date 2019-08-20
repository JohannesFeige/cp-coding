import React from 'react';
import RomanNumeral from './RomanNumeral';

const Roman: React.FC = () => {
  return (
    <div>
      <h3>To Roman Numerals</h3>
      <p>The input will be translated to Roman Numerals</p>
      <RomanNumeral />
    </div>
  );
};

export default Roman;
