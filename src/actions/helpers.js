export const stringArrayOfObjects=(array,key)=>{
  // input: [ {}, {} ]      output ['','']
  if (Array.isArray(array)) {
    return array.map(item=>item[key])
  }
  return [];
}

export const arrayToObject=(array,key='id')=>{
  // input: [ {id:0}, {id:1} ]      output {0:{},1:{}}
  const newObject = {};
  if (Array.isArray(array)) {
    array.forEach(item=>newObject[item[key]] = item);
    return newObject;
  }
  return {};
}

export const objectToArray=(object)=>{
  // input {0:{},1:{}}         output: [ {}, {} ]      
  const newArray = [];
  if (typeof object === 'object' && !Array.isArray(object)) {
    for (let prop in object) {
      newArray.push(object[prop]);
    }
    return newArray;
  }
  return [];
}

export const convertStringKeysToString = object =>{
  let theString = object[0];
  for (let key in object) {
    if (key !== '0' && typeof object[key] === 'string') {
      theString += object[key];
    }
  }
  return theString;
}

export const queryObject = (query, object, searchInKey, returnKey) => {
  let focusId = 0; // so we default to something vs undefined
  for (let key in object) {
    if (object[key][searchInKey] === query) {
      focusId = object[key][returnKey];
    }
  }
  return focusId;
}

export const getDaysOfMonth = month => {
  let monthDays;
  switch (month) {
    case 'Feb':
      monthDays = 28;
    break;
    case 'Apr':
    case 'Jun':
    case 'Sep':
    case 'Nov':
      monthDays = 30;
      break;
    default:
      monthDays = 31;
    } 
  return monthDays;
}

export const nestProject = project => {
  // input: project with all keys at one level
  // output: project nested as used in state
  const {
    name, locationCity, locationState, locationCountry,
    areas, 
    area, volume, thickness,
    intervalMins, eventGapThreshold,
    controlledRate, controlledHi, controlledLo,
    source, location, startMonth, startDay, endMonth, endDay, stormData,
    ranIntervalMins, ranEventGapThreshold,
    ranControlledRate, ranControlledHi, ranControlledLo,
    ranSource, ranLocation, ranStartMonth, ranStartDay, ranEndMonth, ranEndDay, ranStormData,
    analysisStartMonth, analysisStartDay, analysisEndMonth, analysisEndDay, analysisStartEvent, analysisEndEvent,
  } = project;

  const units = {area, volume, thickness};
  const areaObject = arrayToObject(project.areas, 'id');
  const areasList = project.areas.map(area=>area.name);
  areaObject.list = areasList;

  const intervals = {intervalMins, eventGapThreshold}; 
  const controlled = {controlledRate, controlledHi, controlledLo};
  const stormSettings = {source, location, startMonth, startDay, endMonth, endDay, stormData};

  const ranIntervals = {ranIntervalMins, ranEventGapThreshold}; 
  const ranControlled = {ranControlledRate, ranControlledHi, ranControlledLo};
  const ranStormSettings = {ranSource, ranLocation, ranStartMonth, ranStartDay, ranEndMonth, ranEndDay, ranStormData};
  
  const analysisSettings = {analysisStartMonth, analysisStartDay, analysisEndMonth, analysisEndDay, analysisStartEvent, analysisEndEvent};

  const formattedProject = {
    name, 
    locationCity, locationState, locationCountry,
    units, 
    areas: areaObject,
    intervals,    controlled,    stormSettings,
    ranIntervals, ranControlled, ranStormSettings,
    analysisSettings,
  };

  return formattedProject;
}