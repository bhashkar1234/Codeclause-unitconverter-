function convert() {
    const fromValue = document.getElementById('fromValue').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
  
    let result;
  
    switch (fromUnit) {
      case 'm':
        result = convertLength(fromValue, toUnit);
        break;
      case 'km':
        result = convertLength(fromValue * 1000, toUnit);
        break;
      case 'ft':
        result = convertLength(fromValue * 0.3048, toUnit);
        break;
      case 'sqm':
        result = convertArea(fromValue, toUnit);
        break;
      case 'sqft':
        result = convertArea(fromValue * 0.092903, toUnit);
        break;
      case 'mph':
        result = convertSpeed(fromValue * 0.44704, toUnit);
        break;
      case 'kmh':
        result = convertSpeed(fromValue * 0.277778, toUnit);
        break;
      case 'kg':
        result = convertWeight(fromValue, toUnit);
        break;
      case 'lbs':
        result = convertWeight(fromValue * 0.453592, toUnit);
        break;
      case 'liters':
        result = convertVolume(fromValue, toUnit);
        break;
      case 'gallons':
        result = convertVolume(fromValue * 3.78541, toUnit);
        break;
      case 'celsius':
        result = convertTemperature(fromValue, toUnit);
        break;
      case 'fahrenheit':
        result = convertTemperature((fromValue - 32) * (5 / 9), toUnit);
        break;
    }
  
    document.getElementById('toValue').value = result;
  }
  
  function convertLength(value, toUnit) {
    let result;
  
    switch (toUnit) {
      case 'm':
        result = value;
        break;
      case 'km':
        result = value / 1000;
        break;
      case 'ft':
        result = value / 0.3048;
        break;
    }
  
    return result;
  }
  
  function convertArea(value, toUnit) {
    let result;
  
    switch (toUnit) {
      case 'sqm':
        result = value;
        break;
      case 'sqft':
        result = value / 0.092903;
        break;
    }
  
    return result;
  }
  
  function convertSpeed(value, toUnit) {
    let result;
  
    switch (toUnit) {
      case 'mph':
        result = value / 0.44704;
        break;
      case 'kmh':
        result = value / 0.277778;
        break;
    }
  
    return result;
  }
  
  function convertWeight(value, toUnit) {
    let result;
  
    switch (toUnit) {
      case 'kg':
        result = value;
        break;
      case 'lbs':
        result = value / 0.453592;
        break;
    }
  
    return result;
  }
  
  function convertVolume(value, toUnit) {
    let result;
  
    switch (toUnit) {
      case 'liters':
        result = value;
        break;
      case 'gallons':
        result = value / 3.78541;
        break;
    }
  
    return result;
  }
  
  function convertTemperature(value, toUnit) {
    let result;
  
    switch (toUnit) {
      case 'celsius':
        result = value;
        break;
      case 'fahrenheit':
        result = (value * (9 / 5)) + 32;
        break;
    }
  
    return result;
  }
  