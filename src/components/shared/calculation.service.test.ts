import { toRomanNumerals, mul, processBankOcr } from '../shared/calculation.service';

describe('toRomanNumerals', () => {
  const spy = spyConsole();

  it('should translate 1', () => {
    expect(toRomanNumerals(1)).toBe('I');
  });
  it('should translate 2', () => {
    expect(toRomanNumerals(2)).toBe('II');
  });
  it('should translate 4', () => {
    expect(toRomanNumerals(4)).toBe('IV');
  });
  it('should translate 5', () => {
    expect(toRomanNumerals(5)).toBe('V');
  });
  it('should translate 9', () => {
    expect(toRomanNumerals(9)).toBe('IX');
  });
  it('should translate 10', () => {
    expect(toRomanNumerals(10)).toBe('X');
  });
  it('should translate 42', () => {
    expect(toRomanNumerals(42)).toBe('XLII');
  });
  it('should translate 99', () => {
    expect(toRomanNumerals(99)).toBe('XCIX');
  });
  it('should translate 2013', () => {
    expect(toRomanNumerals(2013)).toBe('MMXIII');
  });
  it('should translate 3000', () => {
    expect(toRomanNumerals(3000)).toBe('MMM');
  });

  it('should not translate 0', () => {
    expect(toRomanNumerals(0)).toBe('NaN');
    expect(console.error).toHaveBeenCalled();
    expect(spy.console && spy.console.mock.calls[0][0]).toContain('value should be between 1 and 3000');
  });
  it('should not translate 3001', () => {
    expect(toRomanNumerals(3001)).toBe('NaN');
    expect(console.error).toHaveBeenCalled();
    expect(spy.console && spy.console.mock.calls[0][0]).toContain('value should be between 1 and 3000');
  });
});

describe('russianPeasantMuliplication', () => {
  it('should multiplicate', () => {
    expect(mul(47, 42)).toBe(1974);
  });
  it('should still mulitplicate', () => {
    expect(mul(10, 10)).toBe(100);
  });
  it('should mulitplicate furtermore', () => {
    expect(mul(123, 456)).toBe(56088);
  });
});

describe('bankOCR', () => {
  it('should process 1', () => {
    // prettier-ignore
    const input = `    \n` +
                  `  | \n` +
                  `  | \n`;
    expect(processBankOcr(input)).toBe('1');
  });
  it('should process 2', () => {
    // prettier-ignore
    const input = ` _  \n` +
                  ` _| \n` +
                  `|_  \n`;
    expect(processBankOcr(input)).toBe('2');
  });
  it('should process 3', () => {
    // prettier-ignore
    const input = ` _  \n` +
                  ` _| \n` +
                  ` _| \n`;
    expect(processBankOcr(input)).toBe('3');
  });
  it('should process 4', () => {
    // prettier-ignore
    const input = `    \n` +
                  `|_| \n` +
                  `  | \n`;
    expect(processBankOcr(input)).toBe('4');
  });
  it('should process 5', () => {
    // prettier-ignore
    const input = ` _  \n` +
                  `|_  \n` +
                  ` _| \n`;
    expect(processBankOcr(input)).toBe('5');
  });
  it('should process 6', () => {
    // prettier-ignore
    const input = ` _  \n` +
                  `|_  \n` +
                  `|_| \n`;
    expect(processBankOcr(input)).toBe('6');
  });
  it('should process 7', () => {
    // prettier-ignore
    const input = ` _  \n` +
                  `  | \n` +
                  `  | \n`;
    expect(processBankOcr(input)).toBe('7');
  });
  it('should process 8', () => {
    // prettier-ignore
    const input = ` _  \n` +
                  `|_| \n` +
                  `|_| \n`;
    expect(processBankOcr(input)).toBe('8');
  });
  it('should process 9', () => {
    // prettier-ignore
    const input = ` _  \n` +
                  `|_| \n` +
                  ` _| \n`;
    expect(processBankOcr(input)).toBe('9');
  });
  it('should process 0', () => {
    // prettier-ignore
    const input = ` _  \n` +
                  `| | \n` +
                  `|_| \n`;
    expect(processBankOcr(input)).toBe('0');
  });
  it('should process 1234567890', () => {
    // prettier-ignore
    const input = `     _   _       _   _   _   _   _   _  \n` +
                  `  |  _|  _| |_| |_  |_    | |_| |_| | | \n` +
                  `  | |_   _|   |  _| |_|   | |_|  _| |_| \n`;
    expect(processBankOcr(input)).toBe('1234567890');
  });
});

function spyConsole() {
  let spy: { console?: jest.SpyInstance } = {};

  beforeAll(() => {
    spy.console = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    spy.console && spy.console.mockRestore();
  });

  return spy;
}
