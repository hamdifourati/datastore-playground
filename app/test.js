// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

// Your Google Cloud Platform project ID
const projectId = process.env.DATASTORE_PROJECT_ID;

// Creates a client
const datastore = new Datastore({
  projectId: projectId,
  apiEndpoint: process.env.DATASTORE_HOST
});

// The kind for the new entity
const kind = 'Task';
// The name/ID for the new entity
const name = 'sampletask1';
// The Cloud Datastore key for the new entity
const taskKey = datastore.key([kind, name]);

// Prepares the new entity
const task = {
  key: taskKey,
  data: {
    description: 'Buy milk',
  },
};

// Saves the entity
datastore
  .save(task)
  .then(() => {
    console.log(`Saved ${task.key.name}: ${task.data.description}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
