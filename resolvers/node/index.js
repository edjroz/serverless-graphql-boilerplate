const { find, propEq } = require('ramda');

const data = [
  {'id': '1',
  'description': 'this is the first node',
  }
];

module.exports = {
  Query: {
    nodes: () => data,
    node: (_, { id }) => find(propEq('id', id), data),
  },
};
