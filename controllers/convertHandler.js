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
    var result;
    var validNumRegex = /^\d*\.?\d*(\/\d*\.?\d*)?/;
    var unitRegex = /[a-z]$/;
    try {
      var evaluation = math.evaluate(input);
      if (evaluation.value === null) {
        result = 1;
      } else {
        result = evaluation.toNumber();
      }
    } catch(err) {
      result = null;
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    try {
      result = math.evaluate(input).formatUnits();
    } catch(err) {
      result = null;
    }
    
    if (!['kg', 'lbs', 'mi', 'km', 'gal', 'l'].includes(result)) {
      result = null;
    }
    
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
      case 'l':
        result = 'gal';
        break;
      case 'gal':
        result = 'l';
        break;
      default:
        result = null;
        break;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch (unit) {
      case 'kg':
        result = 'kilograms';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'gal':
        result = 'gallons';
        break;
      default:
        result = null;
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
        result = initNum * lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      default:
        result = null;
        break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${math.format(returnNum, { notation: 'fixed', precision: 5 })} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
