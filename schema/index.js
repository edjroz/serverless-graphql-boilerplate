const { fileLoader, mergeTypes } = require('merge-graphql-schemas');
const path = require('path');
const typesDir = path.join(__dirname, 'types');

const typeDefs = mergeTypes(fileLoader(typesDir), { all: true });

module.exports = typeDefs;
