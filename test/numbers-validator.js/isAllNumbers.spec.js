import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';
describe('isAllNumbers positive tests', () =>{
  let validator;
  beforeEach(() =>{
    validator = new NumbersValidator();
  });
  afterEach(()=> {
    validator = null;
  });
  it('should return true if all array elements are numbers', () =>{
    const validationResults = validator.isAllNumbers([1, 2, 3, 4]);
    expect(validationResults).to.eql(true);
  });
  it('should return false if not all array elements are numbers', () =>{
    const validationResults = validator.isAllNumbers([1, '2', 3, 4]);
    expect(validationResults).to.eql(false);
  });
  it('should trow an error when provided not an array', () =>{
    expect(() => {
      validator.isAllNumbers(4);
    }).to.throw('[4] is not an array');
  });
});
