const { fileLoader, mergeResolvers } = require('merge-graphql-schemas');
const path = require('path');
const resolvers = require('./node');

module.exports = mergeResolvers([resolvers]);
