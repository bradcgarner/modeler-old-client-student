
export const display = {
    about: false,
    main: '',
    aside: '',
    newAcct: false,
    view: 'landing',
};

export const project = {
  name: '',
    general: {
      area: 'sf', 
      volume: 'gallons',
      thickness: 'inches',
    },
    areas: {
      focus: 0,        // area id primary key
      list: [ '' ],    // used for value lists
      0: {             // area id primary key
        id: 0,         // area id primary key
        name: '',      // text name
        size: 0,       // integer
        covering: 0,   // product id foreign key
        drainsTo: 0,   // area id foreign key
        CDAs: [0,0,0], // area ids foreign keys
        slope: 0,      // integer %
        ET: 0,         // table id foreign key
      }, 
    }
};

export const user = {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
    authToken: '',
};

export const general= {
    coverings: {
      list: ['',''], // used for value lists
      0: {
        name: '',
        id: 0,
      }
    },
    et: {
      list: ['',''], // used for value lists
      0: {
        name: '',
        id: 0,
      }
    },
};
