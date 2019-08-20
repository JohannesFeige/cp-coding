/**
 * Translates number to Roman Numeral
 * Number should be between 1 and 3000
 * @param value number for translation
 */
export function toRomanNumerals(value: number): string {
  if (value < 1 || value > 3000) {
    console.error('value should be between 1 and 3000', { value });
    return NaN.toString();
  }
  // ignore decimal places
  value = Math.floor(value);

  const lookup = [
    { roman: 'M', decimal: 1000 },
    { roman: 'CM', decimal: 900 },
    { roman: 'D', decimal: 500 },
    { roman: 'CD', decimal: 400 },
    { roman: 'C', decimal: 100 },
    { roman: 'XC', decimal: 90 },
    { roman: 'L', decimal: 50 },
    { roman: 'XL', decimal: 40 },
    { roman: 'X', decimal: 10 },
    { roman: 'IX', decimal: 9 },
    { roman: 'V', decimal: 5 },
    { roman: 'IV', decimal: 4 },
    { roman: 'I', decimal: 1 },
  ];

  let result = '';
  lookup
    .sort((a, b) => {
      // sort desc
      return b.decimal - a.decimal;
    })
    .forEach(({ roman, decimal }) => {
      while (value >= decimal) {
        result += roman;
        value -= decimal;
      }
    });

  return result;
}
/**
 * Implementation of the russian peasant multiplication
 * @param x first value
 * @param y second value
 */
export function mul(x: number, y: number): number {
  let result = 0;
  while (x !== 0) {
    // only add if left is even
    if (x % 2 !== 0) {
      result += y;
    }
    x = Math.floor(x / 2);
    y *= 2;
  }

  return result;
}

/**
 * simple ocr
 * @param file file to process
 */
export function processBankOcr(file: string): string {
  if (!file) {
    return '';
  }

  const DIGIT_WIDTH = 4;

  const rawResult = parse(file);
  const lookup = getLookup();
  const result = rawResult
    .map((raw) => {
      const lookedUp = lookup.find((x) => x.rating === raw);
      return (lookedUp && lookedUp.value) || 'NaN';
    })
    .reduce((prev, curr) => (prev += `${curr}`), '');

  return result;

  /**
   * Parses each digit in file and return array with digit ratings
   * @param file the file to parse
   */
  function parse(file: string): number[] {
    const rows = file.split('\n');
    const rawResult: number[] = [];

    // iterate over rows:
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      // itterate over columns:
      for (let j = 0; j < row.length; j++) {
        if (!((j + 1) % DIGIT_WIDTH)) {
          // ignore the divider columns
          continue;
        }
        const digit = row[j];
        // if there is more than empty space
        if (digit.trim()) {
          // the index of the ASCII-digit in the whole file
          const index = Math.floor(j / DIGIT_WIDTH);
          const digitRating = getDigitRating(i, j % DIGIT_WIDTH);
          rawResult[index] = (rawResult[index] || 0) + digitRating;
        }
      }
    }
    return rawResult;
  }

  /**
   * Calculates the matrix-element specific rating.
   * @param row current row
   * @param column current column
   */
  function getDigitRating(row: number, column: number): number {
    const offset = row * 2;
    const exponent = offset + row + column;
    return Math.pow(2, exponent);
  }

  /**
   * Defines rated values.
   * Every digit in the ACSII file can be displayed as matrix while each element represents a square number.
   * The rating of a number is the sum of all filled matrix-elements.
   *          1  2   4     0 0 0
   *     | => 8  16  32 => 0 0 32   => 288
   *     |    64 128 256   0 0 256
   */
  function getLookup(): { value: string; rating: number }[] {
    return [
      { value: '1', rating: 288 },
      { value: '2', rating: 242 },
      { value: '3', rating: 434 },
      { value: '4', rating: 312 },
      { value: '5', rating: 410 },
      { value: '6', rating: 474 },
      { value: '7', rating: 290 },
      { value: '8', rating: 506 },
      { value: '9', rating: 442 },
      { value: '0', rating: 490 },
    ];
  }
}
