const { fileLoader, mergeResolvers } = require('merge-graphql-schemas');
const path = require('path');
const resolvers = require('./issue/issue');

module.exports = mergeResolvers([resolvers]);
