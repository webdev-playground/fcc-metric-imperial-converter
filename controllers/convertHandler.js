/*
*
*
*       Complete the handler logic below
*       
*       
*/
const math = require('mathjs');

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = math.evaluate(input).toNumber();
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result = math.evaluate(input).formatUnits();
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const units  = this.getUnit(initUnit);
    var result;
    
    switch (units) {
      case 'kg':
        result = 'lbs';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'gal':
        result = 'L';
        break;
      default:
        result = '??';
        break;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch (unit) {
      case 'kg':
        result = 'kilogram';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'km':
        result = 'miles';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'L':
        result = 'liters';
        break;
      case 'gal':
        result = 'gallons';
        break;
      default:
        result = '??';
        break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    var result;
    
    switch (initUnit) {
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'lbs':
        result = initNum * ;
        break;
      case 'km':
        result = 'miles';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'L':
        result = 'liters';
        break;
      case 'gal':
        result = 'gallons';
        break;
      default:
        result = '??';
        break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
