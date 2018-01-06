// initial state is in same order as endpoints in api
// https://app.swaggerhub.com/api/Brad-Garner/GRSWM/ - be sure to use current version

export const general = {
  // data and settings that are not changed by the user, e.g. not changed by display or project
  // includes fixed setitngs, and value lists that are fetched from the server on initialize  
  // endpoints: api/initialize
  initialized: false,
  vwcIncrementEff: 5,
  vwcIncrementEt: 10,
  rainIntensityIncrement: 0.0009,
  rainIntensityIncrements: 8,
  coverings: {
    list: ['',''], // used for value lists
    listId: [0,1], // used with value lists
    0: {
      id: 0,
      name: 'a',
      type: '',
      slope: 0,
      thickness: 0,
      capacity: 0,
      efficiency: [
        [60,55,50,45,40,35,30,30],
        [65,60,55,50,45,40,35,33],
        [70,65,60,55,50,45,40,38],
        [85,79,73,67,61,55,49,45],
        [88,82,76,70,64,58,52,50],
        [90,84,78,72,66,60,54,50],
        [92,86,80,74,68,62,56,50],
        [93,86,79,72,65,58,51,50],
        [95,88,81,74,67,60,53,50],
        [95,88,81,74,67,60,53,50],
        [95,88,81,74,67,60,53,50],
        [95,88,81,74,67,60,53,50],
        [92,86,80,74,68,62,56,50],
        [90,84,78,72,66,60,54,50],
        [88,82,76,70,64,58,52,50],
        [85,79,73,67,61,55,49,45],
        [80,74,68,62,56,50,44,40],
        [70,64,58,52,46,40,34,30],
        [60,54,48,42,36,30,24,20],
        [50,44,38,32,26,20,14,10],
        [40,35,30,25,20,15,10,5 ]
      ],
    },
    1: {
      id: 0,
      name: 'b',
      type: '',
      slope: 0,
      thickness: 0,
      capacity: 0,
      efficiency: [],
    }
  },
  etTables: {
    list: ['',''], // used for value lists
    listId: [0,1], // used with value lists
    0: {
      id: 0,
      name: '',
      location: '',
      exposure: '',
      table: [
        [
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00012,0.00012,0.00012,0.00012,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00014,0.00014,0.00014,0.00014,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00017,0.00017,0.00017,0.00017,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00019,0.00019,0.00019,0.00019,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00022,0.00022,0.00022,0.00022,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00024,0.00024,0.00024,0.00024,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00026,0.00026,0.00026,0.00026,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00029,0.00029,0.00029,0.00029,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00031,0.00031,0.00031,0.00031,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00036,0.00036,0.00036,0.00036,0.00000,0.00000,0.00000]
        ],
        [
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00012,0.00012,0.00012,0.00012,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00014,0.00014,0.00014,0.00014,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00017,0.00017,0.00017,0.00017,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00019,0.00019,0.00019,0.00019,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00022,0.00022,0.00022,0.00022,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00024,0.00024,0.00024,0.00024,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00026,0.00026,0.00026,0.00026,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00029,0.00029,0.00029,0.00029,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00031,0.00031,0.00031,0.00031,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00036,0.00036,0.00036,0.00036,0.00000,0.00000,0.00000]
        ],
        [
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00015,0.00017,0.00017,0.00015,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00018,0.00020,0.00020,0.00018,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00021,0.00023,0.00023,0.00021,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00025,0.00027,0.00027,0.00024,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00028,0.00030,0.00030,0.00027,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00031,0.00033,0.00033,0.00030,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00034,0.00037,0.00037,0.00033,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00037,0.00040,0.00040,0.00036,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00041,0.00043,0.00043,0.00039,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00000,0.00047,0.00050,0.00050,0.00045,0.00000,0.00000,0.00000]
        ],
        [
          [0.00000,0.00000,0.00000,0.00000,0.00015,0.00017,0.00018,0.00018,0.00016,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00020,0.00022,0.00023,0.00023,0.00020,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00025,0.00028,0.00029,0.00027,0.00025,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00030,0.00033,0.00034,0.00032,0.00029,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00035,0.00039,0.00039,0.00037,0.00033,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00040,0.00044,0.00045,0.00041,0.00037,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00045,0.00050,0.00050,0.00046,0.00041,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00050,0.00055,0.00055,0.00050,0.00045,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00055,0.00061,0.00061,0.00055,0.00050,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00065,0.00072,0.00072,0.00064,0.00058,0.00000,0.00000,0.00000]
        ],
        [
          [0.00000,0.00000,0.00000,0.00000,0.00015,0.00017,0.00018,0.00018,0.00016,0.00015,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00020,0.00022,0.00023,0.00023,0.00020,0.00018,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00025,0.00028,0.00029,0.00027,0.00025,0.00022,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00030,0.00033,0.00034,0.00032,0.00029,0.00026,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00035,0.00039,0.00039,0.00037,0.00033,0.00030,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00040,0.00044,0.00045,0.00041,0.00037,0.00033,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00045,0.00050,0.00050,0.00046,0.00041,0.00037,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00050,0.00055,0.00055,0.00050,0.00045,0.00041,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00055,0.00061,0.00061,0.00055,0.00050,0.00045,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00065,0.00072,0.00072,0.00064,0.00058,0.00052,0.00000,0.00000]
        ],
        [
          [0.00000,0.00000,0.00000,0.00011,0.00015,0.00017,0.00018,0.00018,0.00016,0.00015,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00015,0.00020,0.00022,0.00023,0.00023,0.00020,0.00018,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00019,0.00025,0.00028,0.00029,0.00027,0.00025,0.00022,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00023,0.00030,0.00033,0.00034,0.00032,0.00029,0.00026,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00026,0.00035,0.00039,0.00039,0.00037,0.00033,0.00030,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00030,0.00040,0.00044,0.00045,0.00041,0.00037,0.00033,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00034,0.00045,0.00050,0.00050,0.00046,0.00041,0.00037,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00038,0.00050,0.00055,0.00055,0.00050,0.00045,0.00041,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00041,0.00055,0.00061,0.00061,0.00055,0.00050,0.00045,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00049,0.00065,0.00072,0.00072,0.00064,0.00058,0.00052,0.00000,0.00000]
        ],
        [
          [0.00000,0.00000,0.00000,0.00011,0.00015,0.00017,0.00018,0.00018,0.00016,0.00015,0.00011,0.00000],
          [0.00000,0.00000,0.00000,0.00015,0.00020,0.00022,0.00023,0.00023,0.00020,0.00018,0.00014,0.00000],
          [0.00000,0.00000,0.00000,0.00019,0.00025,0.00028,0.00029,0.00027,0.00025,0.00022,0.00017,0.00000],
          [0.00000,0.00000,0.00000,0.00023,0.00030,0.00033,0.00034,0.00032,0.00029,0.00026,0.00019,0.00000],
          [0.00000,0.00000,0.00000,0.00026,0.00035,0.00039,0.00039,0.00037,0.00033,0.00030,0.00022,0.00000],
          [0.00000,0.00000,0.00000,0.00030,0.00040,0.00044,0.00045,0.00041,0.00037,0.00033,0.00025,0.00000],
          [0.00000,0.00000,0.00000,0.00034,0.00045,0.00050,0.00050,0.00046,0.00041,0.00037,0.00028,0.00000],
          [0.00000,0.00000,0.00000,0.00038,0.00050,0.00055,0.00055,0.00050,0.00045,0.00041,0.00031,0.00000],
          [0.00000,0.00000,0.00000,0.00041,0.00055,0.00061,0.00061,0.00055,0.00050,0.00045,0.00033,0.00000],
          [0.00000,0.00000,0.00000,0.00049,0.00065,0.00072,0.00072,0.00064,0.00058,0.00052,0.00039,0.00000]
        ],
        [
          [0.00000,0.00000,0.00000,0.00011,0.00015,0.00017,0.00018,0.00018,0.00016,0.00015,0.00011,0.00000],
          [0.00000,0.00000,0.00000,0.00015,0.00020,0.00022,0.00023,0.00023,0.00020,0.00018,0.00014,0.00000],
          [0.00000,0.00000,0.00000,0.00019,0.00025,0.00028,0.00029,0.00027,0.00025,0.00022,0.00017,0.00000],
          [0.00000,0.00000,0.00000,0.00023,0.00030,0.00033,0.00034,0.00032,0.00029,0.00026,0.00019,0.00000],
          [0.00000,0.00000,0.00000,0.00026,0.00035,0.00039,0.00039,0.00037,0.00033,0.00030,0.00022,0.00000],
          [0.00000,0.00000,0.00000,0.00030,0.00040,0.00044,0.00045,0.00041,0.00037,0.00033,0.00025,0.00000],
          [0.00000,0.00000,0.00000,0.00034,0.00045,0.00050,0.00050,0.00046,0.00041,0.00037,0.00028,0.00000],
          [0.00000,0.00000,0.00000,0.00038,0.00050,0.00055,0.00055,0.00050,0.00045,0.00041,0.00031,0.00000],
          [0.00000,0.00000,0.00000,0.00041,0.00055,0.00061,0.00061,0.00055,0.00050,0.00045,0.00033,0.00000],
          [0.00000,0.00000,0.00000,0.00049,0.00065,0.00072,0.00072,0.00064,0.00058,0.00052,0.00039,0.00000]
        ],
        [
          [0.00000,0.00000,0.00000,0.00011,0.00015,0.00017,0.00018,0.00018,0.00016,0.00015,0.00011,0.00000],
          [0.00000,0.00000,0.00000,0.00015,0.00020,0.00022,0.00023,0.00023,0.00020,0.00018,0.00014,0.00000],
          [0.00000,0.00000,0.00000,0.00019,0.00025,0.00028,0.00029,0.00027,0.00025,0.00022,0.00017,0.00000],
          [0.00000,0.00000,0.00000,0.00023,0.00030,0.00033,0.00034,0.00032,0.00029,0.00026,0.00019,0.00000],
          [0.00000,0.00000,0.00000,0.00026,0.00035,0.00039,0.00039,0.00037,0.00033,0.00030,0.00022,0.00000],
          [0.00000,0.00000,0.00000,0.00030,0.00040,0.00044,0.00045,0.00041,0.00037,0.00033,0.00025,0.00000],
          [0.00000,0.00000,0.00000,0.00034,0.00045,0.00050,0.00050,0.00046,0.00041,0.00037,0.00028,0.00000],
          [0.00000,0.00000,0.00000,0.00038,0.00050,0.00055,0.00055,0.00050,0.00045,0.00041,0.00031,0.00000],
          [0.00000,0.00000,0.00000,0.00041,0.00055,0.00061,0.00061,0.00055,0.00050,0.00045,0.00033,0.00000],
          [0.00000,0.00000,0.00000,0.00049,0.00065,0.00072,0.00072,0.00064,0.00058,0.00052,0.00039,0.00000]
        ],
        [
          [0.00000,0.00000,0.00000,0.00011,0.00015,0.00017,0.00018,0.00018,0.00016,0.00015,0.00011,0.00000],
          [0.00000,0.00000,0.00000,0.00014,0.00018,0.00020,0.00022,0.00021,0.00019,0.00017,0.00013,0.00000],
          [0.00000,0.00000,0.00000,0.00016,0.00022,0.00024,0.00025,0.00024,0.00022,0.00020,0.00015,0.00000],
          [0.00000,0.00000,0.00000,0.00019,0.00025,0.00028,0.00029,0.00027,0.00025,0.00022,0.00017,0.00000],
          [0.00000,0.00000,0.00000,0.00021,0.00029,0.00031,0.00032,0.00030,0.00027,0.00025,0.00018,0.00000],
          [0.00000,0.00000,0.00000,0.00024,0.00032,0.00035,0.00036,0.00033,0.00030,0.00027,0.00020,0.00000],
          [0.00000,0.00000,0.00000,0.00027,0.00035,0.00039,0.00040,0.00036,0.00033,0.00029,0.00022,0.00000],
          [0.00000,0.00000,0.00000,0.00029,0.00039,0.00043,0.00043,0.00039,0.00035,0.00032,0.00024,0.00000],
          [0.00000,0.00000,0.00000,0.00032,0.00042,0.00046,0.00047,0.00042,0.00038,0.00034,0.00026,0.00000],
          [0.00000,0.00000,0.00000,0.00037,0.00049,0.00054,0.00054,0.00049,0.00044,0.00039,0.00029,0.00000]
        ],
        [
          [0.00000,0.00000,0.00000,0.00000,0.00008,0.00011,0.00012,0.00013,0.00013,0.00012,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00010,0.00013,0.00015,0.00016,0.00015,0.00014,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00012,0.00015,0.00017,0.00018,0.00017,0.00015,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00013,0.00018,0.00019,0.00020,0.00019,0.00017,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00015,0.00020,0.00022,0.00023,0.00021,0.00019,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00017,0.00022,0.00024,0.00025,0.00023,0.00021,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00018,0.00024,0.00027,0.00027,0.00025,0.00022,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00020,0.00026,0.00029,0.00029,0.00027,0.00024,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00021,0.00029,0.00031,0.00032,0.00029,0.00026,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00025,0.00033,0.00036,0.00036,0.00033,0.00029,0.00000,0.00000]
        ],
        [
          [0.00000,0.00000,0.00000,0.00000,0.00008,0.00011,0.00012,0.00013,0.00013,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00010,0.00013,0.00015,0.00016,0.00015,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00012,0.00015,0.00017,0.00018,0.00017,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00013,0.00018,0.00019,0.00020,0.00019,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00015,0.00020,0.00022,0.00023,0.00021,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00017,0.00022,0.00024,0.00025,0.00023,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00018,0.00024,0.00027,0.00027,0.00025,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00020,0.00026,0.00029,0.00029,0.00027,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00021,0.00029,0.00031,0.00032,0.00029,0.00000,0.00000,0.00000],
          [0.00000,0.00000,0.00000,0.00000,0.00025,0.00033,0.00036,0.00036,0.00033,0.00000,0.00000,0.00000]
        ]
      ]
    }
  },
  etTableTime: [
    '0:00-1:59',
    '2:00-3:59',
    '4:00-5:59',
    '6:00-7:59',
    '8:00-9:59',
    '10:00-11:59',
    '12:00-13:59',
    '14:00-15:59',
    '16:00-17:59',
    '18:00-19:59',
    '20:00-21:59',
    '22:00-23:59',
  ],
  volume: [
    'gallons',
    'cubic feet',
    'liters',
  ],
  thickness: [
    'inches',
    'cm',
  ],
  area: [
    'square feet',
    'square meters',
  ],
  months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  states: [
    {
        name: 'Alabama',
        abbreviation: 'AL'
    },
    {
        name: 'Alaska',
        abbreviation: 'AK'
    },
    {
        name: 'American Samoa',
        abbreviation: 'AS'
    },
    {
        name: 'Arizona',
        abbreviation: 'AZ'
    },
    {
        name: 'Arkansas',
        abbreviation: 'AR'
    },
    {
        name: 'California',
        abbreviation: 'CA'
    },
    {
        name: 'Colorado',
        abbreviation: 'CO'
    },
    {
        name: 'Connecticut',
        abbreviation: 'CT'
    },
    {
        name: 'Delaware',
        abbreviation: 'DE'
    },
    {
        name: 'District Of Columbia',
        abbreviation: 'DC'
    },
    {
        name: 'Federated States Of Micronesia',
        abbreviation: 'FM'
    },
    {
        name: 'Florida',
        abbreviation: 'FL'
    },
    {
        name: 'Georgia',
        abbreviation: 'GA'
    },
    {
        name: 'Guam',
        abbreviation: 'GU'
    },
    {
        name: 'Hawaii',
        abbreviation: 'HI'
    },
    {
        name: 'Idaho',
        abbreviation: 'ID'
    },
    {
        name: 'Illinois',
        abbreviation: 'IL'
    },
    {
        name: 'Indiana',
        abbreviation: 'IN'
    },
    {
        name: 'Iowa',
        abbreviation: 'IA'
    },
    {
        name: 'Kansas',
        abbreviation: 'KS'
    },
    {
        name: 'Kentucky',
        abbreviation: 'KY'
    },
    {
        name: 'Louisiana',
        abbreviation: 'LA'
    },
    {
        name: 'Maine',
        abbreviation: 'ME'
    },
    {
        name: 'Marshall Islands',
        abbreviation: 'MH'
    },
    {
        name: 'Maryland',
        abbreviation: 'MD'
    },
    {
        name: 'Massachusetts',
        abbreviation: 'MA'
    },
    {
        name: 'Michigan',
        abbreviation: 'MI'
    },
    {
        name: 'Minnesota',
        abbreviation: 'MN'
    },
    {
        name: 'Mississippi',
        abbreviation: 'MS'
    },
    {
        name: 'Missouri',
        abbreviation: 'MO'
    },
    {
        name: 'Montana',
        abbreviation: 'MT'
    },
    {
        name: 'Nebraska',
        abbreviation: 'NE'
    },
    {
        name: 'Nevada',
        abbreviation: 'NV'
    },
    {
        name: 'New Hampshire',
        abbreviation: 'NH'
    },
    {
        name: 'New Jersey',
        abbreviation: 'NJ'
    },
    {
        name: 'New Mexico',
        abbreviation: 'NM'
    },
    {
        name: 'New York',
        abbreviation: 'NY'
    },
    {
        name: 'North Carolina',
        abbreviation: 'NC'
    },
    {
        name: 'North Dakota',
        abbreviation: 'ND'
    },
    {
        name: 'Northern Mariana Islands',
        abbreviation: 'MP'
    },
    {
        name: 'Ohio',
        abbreviation: 'OH'
    },
    {
        name: 'Oklahoma',
        abbreviation: 'OK'
    },
    {
        name: 'Oregon',
        abbreviation: 'OR'
    },
    {
        name: 'Palau',
        abbreviation: 'PW'
    },
    {
        name: 'Pennsylvania',
        abbreviation: 'PA'
    },
    {
        name: 'Puerto Rico',
        abbreviation: 'PR'
    },
    {
        name: 'Rhode Island',
        abbreviation: 'RI'
    },
    {
        name: 'South Carolina',
        abbreviation: 'SC'
    },
    {
        name: 'South Dakota',
        abbreviation: 'SD'
    },
    {
        name: 'Tennessee',
        abbreviation: 'TN'
    },
    {
        name: 'Texas',
        abbreviation: 'TX'
    },
    {
        name: 'Utah',
        abbreviation: 'UT'
    },
    {
        name: 'Vermont',
        abbreviation: 'VT'
    },
    {
        name: 'Virgin Islands',
        abbreviation: 'VI'
    },
    {
        name: 'Virginia',
        abbreviation: 'VA'
    },
    {
        name: 'Washington',
        abbreviation: 'WA'
    },
    {
        name: 'West Virginia',
        abbreviation: 'WV'
    },
    {
        name: 'Wisconsin',
        abbreviation: 'WI'
    },
    {
        name: 'Wyoming',
        abbreviation: 'WY'
    }
  ],
  countries:
  [ 
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}, 
    {name: 'Antigua and Barbuda', code: 'AG'}, 
    {name: 'Argentina', code: 'AR'}, 
    {name: 'Armenia', code: 'AM'}, 
    {name: 'Aruba', code: 'AW'}, 
    {name: 'Australia', code: 'AU'}, 
    {name: 'Austria', code: 'AT'}, 
    {name: 'Azerbaijan', code: 'AZ'}, 
    {name: 'Bahamas', code: 'BS'}, 
    {name: 'Bahrain', code: 'BH'}, 
    {name: 'Bangladesh', code: 'BD'}, 
    {name: 'Barbados', code: 'BB'}, 
    {name: 'Belarus', code: 'BY'}, 
    {name: 'Belgium', code: 'BE'}, 
    {name: 'Belize', code: 'BZ'}, 
    {name: 'Benin', code: 'BJ'}, 
    {name: 'Bermuda', code: 'BM'}, 
    {name: 'Bhutan', code: 'BT'}, 
    {name: 'Bolivia', code: 'BO'}, 
    {name: 'Bosnia and Herzegovina', code: 'BA'}, 
    {name: 'Botswana', code: 'BW'}, 
    {name: 'Bouvet Island', code: 'BV'}, 
    {name: 'Brazil', code: 'BR'}, 
    {name: 'British Indian Ocean Territory', code: 'IO'}, 
    {name: 'Brunei Darussalam', code: 'BN'}, 
    {name: 'Bulgaria', code: 'BG'}, 
    {name: 'Burkina Faso', code: 'BF'}, 
    {name: 'Burundi', code: 'BI'}, 
    {name: 'Cambodia', code: 'KH'}, 
    {name: 'Cameroon', code: 'CM'}, 
    {name: 'Canada', code: 'CA'}, 
    {name: 'Cape Verde', code: 'CV'}, 
    {name: 'Cayman Islands', code: 'KY'}, 
    {name: 'Central African Republic', code: 'CF'}, 
    {name: 'Chad', code: 'TD'}, 
    {name: 'Chile', code: 'CL'}, 
    {name: 'China', code: 'CN'}, 
    {name: 'Christmas Island', code: 'CX'}, 
    {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {name: 'Colombia', code: 'CO'}, 
    {name: 'Comoros', code: 'KM'}, 
    {name: 'Congo', code: 'CG'}, 
    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {name: 'Cook Islands', code: 'CK'}, 
    {name: 'Costa Rica', code: 'CR'}, 
    {name: 'Cote D\'Ivoire', code: 'CI'}, 
    {name: 'Croatia', code: 'HR'}, 
    {name: 'Cuba', code: 'CU'}, 
    {name: 'Cyprus', code: 'CY'}, 
    {name: 'Czech Republic', code: 'CZ'}, 
    {name: 'Denmark', code: 'DK'}, 
    {name: 'Djibouti', code: 'DJ'}, 
    {name: 'Dominica', code: 'DM'}, 
    {name: 'Dominican Republic', code: 'DO'}, 
    {name: 'Ecuador', code: 'EC'}, 
    {name: 'Egypt', code: 'EG'}, 
    {name: 'El Salvador', code: 'SV'}, 
    {name: 'Equatorial Guinea', code: 'GQ'}, 
    {name: 'Eritrea', code: 'ER'}, 
    {name: 'Estonia', code: 'EE'}, 
    {name: 'Ethiopia', code: 'ET'}, 
    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {name: 'Faroe Islands', code: 'FO'}, 
    {name: 'Fiji', code: 'FJ'}, 
    {name: 'Finland', code: 'FI'}, 
    {name: 'France', code: 'FR'}, 
    {name: 'French Guiana', code: 'GF'}, 
    {name: 'French Polynesia', code: 'PF'}, 
    {name: 'French Southern Territories', code: 'TF'}, 
    {name: 'Gabon', code: 'GA'}, 
    {name: 'Gambia', code: 'GM'}, 
    {name: 'Georgia', code: 'GE'}, 
    {name: 'Germany', code: 'DE'}, 
    {name: 'Ghana', code: 'GH'}, 
    {name: 'Gibraltar', code: 'GI'}, 
    {name: 'Greece', code: 'GR'}, 
    {name: 'Greenland', code: 'GL'}, 
    {name: 'Grenada', code: 'GD'}, 
    {name: 'Guadeloupe', code: 'GP'}, 
    {name: 'Guam', code: 'GU'}, 
    {name: 'Guatemala', code: 'GT'}, 
    {name: 'Guernsey', code: 'GG'}, 
    {name: 'Guinea', code: 'GN'}, 
    {name: 'Guinea-Bissau', code: 'GW'}, 
    {name: 'Guyana', code: 'GY'}, 
    {name: 'Haiti', code: 'HT'}, 
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
    {name: 'Holy See (Vatican City State)', code: 'VA'}, 
    {name: 'Honduras', code: 'HN'}, 
    {name: 'Hong Kong', code: 'HK'}, 
    {name: 'Hungary', code: 'HU'}, 
    {name: 'Iceland', code: 'IS'}, 
    {name: 'India', code: 'IN'}, 
    {name: 'Indonesia', code: 'ID'}, 
    {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {name: 'Iraq', code: 'IQ'}, 
    {name: 'Ireland', code: 'IE'}, 
    {name: 'Isle of Man', code: 'IM'}, 
    {name: 'Israel', code: 'IL'}, 
    {name: 'Italy', code: 'IT'}, 
    {name: 'Jamaica', code: 'JM'}, 
    {name: 'Japan', code: 'JP'}, 
    {name: 'Jersey', code: 'JE'}, 
    {name: 'Jordan', code: 'JO'}, 
    {name: 'Kazakhstan', code: 'KZ'}, 
    {name: 'Kenya', code: 'KE'}, 
    {name: 'Kiribati', code: 'KI'}, 
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
    {name: 'Korea, Republic of', code: 'KR'}, 
    {name: 'Kuwait', code: 'KW'}, 
    {name: 'Kyrgyzstan', code: 'KG'}, 
    {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
    {name: 'Latvia', code: 'LV'}, 
    {name: 'Lebanon', code: 'LB'}, 
    {name: 'Lesotho', code: 'LS'}, 
    {name: 'Liberia', code: 'LR'}, 
    {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
    {name: 'Liechtenstein', code: 'LI'}, 
    {name: 'Lithuania', code: 'LT'}, 
    {name: 'Luxembourg', code: 'LU'}, 
    {name: 'Macao', code: 'MO'}, 
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {name: 'Madagascar', code: 'MG'}, 
    {name: 'Malawi', code: 'MW'}, 
    {name: 'Malaysia', code: 'MY'}, 
    {name: 'Maldives', code: 'MV'}, 
    {name: 'Mali', code: 'ML'}, 
    {name: 'Malta', code: 'MT'}, 
    {name: 'Marshall Islands', code: 'MH'}, 
    {name: 'Martinique', code: 'MQ'}, 
    {name: 'Mauritania', code: 'MR'}, 
    {name: 'Mauritius', code: 'MU'}, 
    {name: 'Mayotte', code: 'YT'}, 
    {name: 'Mexico', code: 'MX'}, 
    {name: 'Micronesia, Federated States of', code: 'FM'}, 
    {name: 'Moldova, Republic of', code: 'MD'}, 
    {name: 'Monaco', code: 'MC'}, 
    {name: 'Mongolia', code: 'MN'}, 
    {name: 'Montserrat', code: 'MS'}, 
    {name: 'Morocco', code: 'MA'}, 
    {name: 'Mozambique', code: 'MZ'}, 
    {name: 'Myanmar', code: 'MM'}, 
    {name: 'Namibia', code: 'NA'}, 
    {name: 'Nauru', code: 'NR'}, 
    {name: 'Nepal', code: 'NP'}, 
    {name: 'Netherlands', code: 'NL'}, 
    {name: 'Netherlands Antilles', code: 'AN'}, 
    {name: 'New Caledonia', code: 'NC'}, 
    {name: 'New Zealand', code: 'NZ'}, 
    {name: 'Nicaragua', code: 'NI'}, 
    {name: 'Niger', code: 'NE'}, 
    {name: 'Nigeria', code: 'NG'}, 
    {name: 'Niue', code: 'NU'}, 
    {name: 'Norfolk Island', code: 'NF'}, 
    {name: 'Northern Mariana Islands', code: 'MP'}, 
    {name: 'Norway', code: 'NO'}, 
    {name: 'Oman', code: 'OM'}, 
    {name: 'Pakistan', code: 'PK'}, 
    {name: 'Palau', code: 'PW'}, 
    {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
    {name: 'Panama', code: 'PA'}, 
    {name: 'Papua New Guinea', code: 'PG'}, 
    {name: 'Paraguay', code: 'PY'}, 
    {name: 'Peru', code: 'PE'}, 
    {name: 'Philippines', code: 'PH'}, 
    {name: 'Pitcairn', code: 'PN'}, 
    {name: 'Poland', code: 'PL'}, 
    {name: 'Portugal', code: 'PT'}, 
    {name: 'Puerto Rico', code: 'PR'}, 
    {name: 'Qatar', code: 'QA'}, 
    {name: 'Reunion', code: 'RE'}, 
    {name: 'Romania', code: 'RO'}, 
    {name: 'Russian Federation', code: 'RU'}, 
    {name: 'RWANDA', code: 'RW'}, 
    {name: 'Saint Helena', code: 'SH'}, 
    {name: 'Saint Kitts and Nevis', code: 'KN'}, 
    {name: 'Saint Lucia', code: 'LC'}, 
    {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {name: 'Samoa', code: 'WS'}, 
    {name: 'San Marino', code: 'SM'}, 
    {name: 'Sao Tome and Principe', code: 'ST'}, 
    {name: 'Saudi Arabia', code: 'SA'}, 
    {name: 'Senegal', code: 'SN'}, 
    {name: 'Serbia and Montenegro', code: 'CS'}, 
    {name: 'Seychelles', code: 'SC'}, 
    {name: 'Sierra Leone', code: 'SL'}, 
    {name: 'Singapore', code: 'SG'}, 
    {name: 'Slovakia', code: 'SK'}, 
    {name: 'Slovenia', code: 'SI'}, 
    {name: 'Solomon Islands', code: 'SB'}, 
    {name: 'Somalia', code: 'SO'}, 
    {name: 'South Africa', code: 'ZA'}, 
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {name: 'Spain', code: 'ES'}, 
    {name: 'Sri Lanka', code: 'LK'}, 
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Suriname', code: 'SR'}, 
    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {name: 'Swaziland', code: 'SZ'}, 
    {name: 'Sweden', code: 'SE'}, 
    {name: 'Switzerland', code: 'CH'}, 
    {name: 'Syrian Arab Republic', code: 'SY'}, 
    {name: 'Taiwan, Province of China', code: 'TW'}, 
    {name: 'Tajikistan', code: 'TJ'}, 
    {name: 'Tanzania, United Republic of', code: 'TZ'}, 
    {name: 'Thailand', code: 'TH'}, 
    {name: 'Timor-Leste', code: 'TL'}, 
    {name: 'Togo', code: 'TG'}, 
    {name: 'Tokelau', code: 'TK'}, 
    {name: 'Tonga', code: 'TO'}, 
    {name: 'Trinidad and Tobago', code: 'TT'}, 
    {name: 'Tunisia', code: 'TN'}, 
    {name: 'Turkey', code: 'TR'}, 
    {name: 'Turkmenistan', code: 'TM'}, 
    {name: 'Turks and Caicos Islands', code: 'TC'}, 
    {name: 'Tuvalu', code: 'TV'}, 
    {name: 'Uganda', code: 'UG'}, 
    {name: 'Ukraine', code: 'UA'}, 
    {name: 'United Arab Emirates', code: 'AE'}, 
    {name: 'United Kingdom', code: 'GB'}, 
    {name: 'United States', code: 'US'}, 
    {name: 'United States Minor Outlying Islands', code: 'UM'}, 
    {name: 'Uruguay', code: 'UY'}, 
    {name: 'Uzbekistan', code: 'UZ'}, 
    {name: 'Vanuatu', code: 'VU'}, 
    {name: 'Venezuela', code: 'VE'}, 
    {name: 'Viet Nam', code: 'VN'}, 
    {name: 'Virgin Islands, British', code: 'VG'}, 
    {name: 'Virgin Islands, U.S.', code: 'VI'}, 
    {name: 'Wallis and Futuna', code: 'WF'}, 
    {name: 'Western Sahara', code: 'EH'}, 
    {name: 'Yemen', code: 'YE'}, 
    {name: 'Zambia', code: 'ZM'}, 
    {name: 'Zimbabwe', code: 'ZW'} 
  ]
};

export const user = {
  // user who is currently logged in
  // user is loaded at login
  // user's list of projects is used for selection
  // endpoints: api/users/...
  id: 0,
  username: '',
  firstName: '',
  lastName: '',
  organization: '',
  authToken: '',
  projects: [{name:'x', id: 0},{name:'y', id:1}],
};

export const project = {
  // project that is in focus; when project is selected, project is loaded into state
  // only one project is in state at a time
  // endpoints: api/projects/...
  id: 9,
  name: '',
  locationCity: '',
  locationState: '',
  locationCountry: '',
  areas: {
    focus: 0,        // area id primary key
    list: [ 'a','b' ],    // used for value lists
    0: {             // area id primary key
      id: 0,         // area id primary key
      name: 'a',      // text name
      area: 0,       // integer
      covering: 0,   // covering id foreign key
      runoff: 0,   // area id foreign key
      cda: [0,0,0], // area ids foreign keys
      slope: 0,      // integer %
      etTable: 0,         // table id foreign key
    }, 
    1: {             // area id primary key
      id: 1,         // area id primary key
      name: 'b',      // text name
      area: 0,       // integer
      covering: 0,   // covering id foreign key
      runoff: 0,   // area id foreign key
      cda: [1], // area ids foreign keys
      slope: 0,      // integer %
      etTable: 0,         // table id foreign key
    }, 
  },
  units: {
    area: 'square feet', 
    volume: 'gallons',
    thickness: 'inches',
  },
  intervals: {
    intervalMins: 5,
    eventGapThreshold: 480,
  },
  controlled: {
    controlledRate: 0.002,
    controlledHi: 70,
    controlledLo: 0
  },
  stormSettings: {
    // information about storms saved for current project
    // storm data is user input of storms, saved from Redux forms
    // to be used at next runtime
    source: '',
    location: '',
    startMonth: '',
    startDay: '',
    endMonth: '',
    endDay: '',
    stormData: [],
  },
  ranIntervals: {
    intervalMins: 5,
    eventGapThreshold: 480,
  },
  ranControlled: {
    controlledRate: 0.002,
    controlledHi: 70,
    controlledLo: 0
  },
  ranStormSettings: {
    // information about storms saved for current project as of last runtime
    // populated only at end of runtime, by copying from 'storms' upon success
    source: '',
    location: '',
    startMonth: '',
    startDay: '',
    endMonth: '',
    endDay: '',
    stormData: [],
    events: [1,2,3], // list of all events, generated at runtime, used for selection list
  },
  analysisSettings: {
    // settings used to filter graphs and tabular analysis
    // settings are display properties for project only, but are saved in project vs display, as it filters project data (is not purely display)
    // settings are saved to project record in SQL, just so user can see where they left off
    startMonth: '',
    startDay: '',
    endMonth: '',
    endDay: '',
    startEvent: '',
    endEvent: '',
  }
};

export const display = {
  // 
  // main: '',
  // aside: '',
  // newAcct: false,
  view: 'landing',
  modal: false,
  message: '',
  focusArea: 0,
  focusEt: 0,
  focusCovering: 0,
  storms: {
    totalMinutes: 0, // single-purpose value to summarize all values below,
    minuteTracker: { // single-purpose object to add up all minutes on the form; used at input, ignored at submission
      0: 0,
      1: 0,
    },
    totalDays: 0, 
    totalHours: 0, 
    allMinutes: 0,
  },
  stormsImported: {
    header: '',
    stormData: [],
  },
};
