/* --------- READ ------------ */

// list of methods
find(filter, options)
findOne(filter, options)

// Find all documents in collection (remember to select a database with use db)
db.COLLECTION_NAME.find()

// Find documents with prettier style result
db.COLLECTION_NAME.find().pretty()

// Find documents with filter example
db.COLLECTION_NAME.find(
  {} //<--- filter
)
/*
Find documents with specify columns to return
obs: the value 1 is equal show and value 0 is equal hide
per default the value for column _id is 1
*/

db.COLLECTION_NAME.find({}, { column1: 1, column2: 1 })
  'OTHER EXAMPLE'
db.passengers.find({}, { _id: 0, name: 1 })

// Find documents and organize result in array
db.COLLECTION_NAME.find({}).toArray()

// Find documents and create a iterator using forEach
db.COLLECTION_NAME.find({}).forEach((iterator) => { printjson(iterator) })
  'OTHER EXAMPLE TO USE A NEW QUERY WITH ITERATOR'
db.passengers.find({}).forEach((p) => {
  db.passengers.updateOne(
    { _id: p._id },
    { $set: { age: 40 } }
  )
})

// Find documents and acess the array
db.COLLECTION_NAME.findOne({}).ARRAY_PROPERTY
  'OTHER EXAMPLE'
db.passengers.findOne({ name: "Albert Twostone" }).hobbies

// Find documents per property in array value
db.COLLECTION_NAME.find({ ARRAY_PROPERTY: VALUE_TO_SEARCH })
  'OTHER EXAMPLE'
db.passengers.find({ hobbies: "cooking" }).pretty()

// Find documents with embbeded propertys 
// obs: need to use double quotes "" in column name
db.passengers.find({"status.details.responsible": "Eduardo Cipriano"})

// Comparison Query Operators

// $eq	Matches values that are equal to a specified value.
db.COLLECTION_NAME.find({ departureAirport: { $eq: "REC" } })

// $gt	Matches values that are greater than a specified value.
db.COLLECTION_NAME.find({ distance: { $gt: 12000 } })

// $gte	Matches values that are greater than or equal to a specified value.
db.COLLECTION_NAME.find({ distance: { $gte: 18000 } })

// $in	Matches any of the values specified in an array.

// $lt	Matches values that are less than a specified value.

// $lte	Matches values that are less than or equal to a specified value.

// $ne	Matches all values that are not equal to a specified value.

//$nin	Matches none of the values specified in an array.