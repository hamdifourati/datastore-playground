// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

// Your Google Cloud Platform project ID
const projectId = process.env.DATASTORE_PROJECT_ID;

// Creates a client
const datastore = new Datastore({
  projectId: projectId,
  apiEndpoint: process.env.DATASTORE_HOST
});

module.exports = datastore;
