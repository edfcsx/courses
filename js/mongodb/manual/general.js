/* GENERAL */
/* Max document size: 16mbs */
/* 100 levels of embedded documents */

/* ----------------- MONGO SERVER --------------------*/

// Start a mongodb server
'mongod'

// Start a mongodb with other port  (default port 27017)
'mongod --port PORT_NUMBER'

// Start a mongodb with a specify database path
'mongod --dbpath PATH'

// Start a mongodb with a specify log path (path of file)
'mongod --logpath PATH' || 'mongod --logpath \'data\log\log.log'

// Start a mongodb on service running on background (command don't work in windows)
'mongod --fork'

// Start a mongodb with config file
'mongod -f PATH' || 'mongod -config PATH'

/* ----------------- MONGO CLIENT --------------------*/


// Start a mongo shell comand line
'mongo'

// VARIABLES PATHS
'--host' // to set address to connect
'--port' // to set a port to connect

/* ----------------- DATABASE COMMANDS ------------------------ */
// Show a databases
'show dbs'

// Select a database
'use DB_NAME'

// Show a status to database
db.stats()

// Drop a database (remember to select a database with use db)
db.dropDatabase()

/* ----------------- COLLECTION COMMANDS ------------------------ */
// Show all collections in database
'show collections'

// Drop a collection (remember to select a database with use db)
db.COLLECTION_NAME.drop()

// Create a collection
db.createCollection(COLLECTION_NAME, options)

// validator a schema example

/*
  Validation actions
  default value is error
  
  error = error which blocks the action and throws an error.
  warn = throws error which don't block the action.
*/


db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "text", "creator", "comments"],
      properties: {
        title: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        text: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        creator: {
          bsonType: "objectId",
          description: "must be an objectId and is required"
        },
        comments: {
          bsonType: "array",
          description: "must be an array and is required",
          items: {
            bsonType: "object",
            required: ["text", "author"],
            properties: {
              text: {
                bsonType: "string",
                description: "must be a string and is required",
              },
              author: {
                bsonType: "objectId",
                description: "must be a objectId and is required"
              }
            }
          }
        }
      }
    }
  }
});


// Change a validator with runCommand

db.runCommand({
  collMod: 'posts',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['title', 'text', 'creator', 'comments'],
      properties: {
        title: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        text: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        creator: {
          bsonType: 'objectId',
          description: 'must be an objectid and is required'
        },
        comments: {
          bsonType: 'array',
          description: 'must be an array and is required',
          items: {
            bsonType: 'object',
            required: ['text', 'author'],
            properties: {
              text: {
                bsonType: 'string',
                description: 'must be a string and is required'
              },
              author: {
                bsonType: 'objectId',
                description: 'must be an objectid and is required'
              }
            }
          }
        }
      }
    }
  },
  validationAction: 'warn'
});
