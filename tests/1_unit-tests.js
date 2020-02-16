/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32l';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '32.3kg';
      assert.equal(convertHandler.getNum(input), 32.3);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '32/2kg';
      assert.equal(convertHandler.getNum(input), 16);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '32.5/0.5kg';
      assert.equal(convertHandler.getNum(input), 65);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '28/2/2kg';
      assert.isNull(convertHandler.getNum(input));
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'kg';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(`12 ${ele}`), ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      assert.isNull(convertHandler.getUnit('12mz'));
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [20, 'l'];
      var expected = 5.283457;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.3); //0.3 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [2.3, 'mi'];
      var expected = 3.701491;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [53, 'km'];
      var expected = 32.93267;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [3224, 'lbs'];
      var expected = 1462.382;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 1); //1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [78, 'kg'];
      var expected = 171.9606;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 1); //1 tolerance
      done();
    });
    
  });

});