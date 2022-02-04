/* --------- Create ---------- */

// List of methods
insertOne(data, options)
insertMany(data, options)

// Insert one document in collection (remember to select a database with use db)
db.COLLECTION_NAME.insertOne({
  example: "example"
})

// Insert many documents in collection (remember to select a database with use db)
db.COLLECTION_NAME.insertMany(
  [
    {
      example1: "value"
    },
    {
      example2: "value"
    }
  ]
)

// Insert a date 

// ISO Date
db.COLLECTION_NAME.insertOne({ date: new Date() })

// Timestamp
db.COLLECTION_NAME.insertOne({ date: new Timestamp() })

// Ordered

//  Valor padrão: true
// O ordered faz com que os documentos sejam inseridos no banco na ordem passada
// caso ocorra algum erro e ainda existam documentos a inserir todo o resto das inserções
// serão canceladas por isso o valor pode ser setado para que tudo que for póssivel possa ser
// inserido.
db.COLLECTION_NAME.insertMany([
  { teste: 1 },
  { teste: 2 },
], { ordered: false })

// Import (use a terminal not client)
'mongoimport PATH_FILE_JSON -d DATABASE_NAME -c COLLECTION NAME --jsonArray --drop'

// --jsonArray specify the type data
// --drop delete a collection to create a new collection with nem documents to import