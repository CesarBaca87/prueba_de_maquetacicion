export function validateGiftCode(code: string): boolean {
  // Code must be 8-10 characters, contain a number and a capital letter
  const lengthValid = code.length >= 8 && code.length <= 10;
  const hasNumber = /\d/.test(code);
  const hasCapital = /[A-Z]/.test(code);
  
  return lengthValid && hasNumber && hasCapital;
}