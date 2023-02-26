import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';
describe('getEvenNumbersFromArray positive tests', () =>{
  let validator;
  beforeEach(() =>{
    validator = new NumbersValidator();
  });
  afterEach(()=> {
    validator = null;
  });
  it('should return even numbers of an array', () =>{
    const validationResults = validator.getEvenNumbersFromArray([1, 2, 3, 4]);
    expect(validationResults).to.eql([2, 4]);
  });
  //   it('should return false when provided with an odd number', () =>{
  //     const validationResults = validator.isNumberEven(5);
  //     expect(validationResults).to.be.equal(false);
  //   });
  it('should trow an error when provided a string', () =>{
    expect(() => {
      validator.getEvenNumbersFromArray(['1', '4']);
    }).to.throw('[1,4] is not an array of "Numbers"');
  });
});
