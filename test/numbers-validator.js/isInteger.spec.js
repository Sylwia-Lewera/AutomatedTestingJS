import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';
describe('isInteger positive tests', () =>{
  let validator;
  beforeEach(() =>{
    validator = new NumbersValidator();
  });
  afterEach(()=> {
    validator = null;
  });
  it('should return true if provided integer', () =>{
    const validationResults = validator.isInteger(66);
    expect(validationResults).to.eql(true);
  });
  it('should return false if not provided not intreger number', () =>{
    const validationResults = validator.isInteger(6.6);
    expect(validationResults).to.eql(false);
  });
  it('should trow an error when provided not a number', () =>{
    expect(() => {
      validator.isInteger('a');
    }).to.throw('[a] is not a number');
  });
});
