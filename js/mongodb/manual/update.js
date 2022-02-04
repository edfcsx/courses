/* --------- UPDATE ---------- */

// list of methods
update(filter, data, options)
updateOne(filter, data, options)
updateMany(filter, data, options)
replaceOne(filter, data, options)

// How to update one document (remember to select a database with use db)
db.COLLECTION_NAME.updateOne(
  { _id: ObjectId("5dfbec17509096e9157ec2f9") }, // <--- Filter
  { $set: { intercontinental: false } } // <--- Change Value
)

// How to update many document (remember to select a database with use db)
// use "{}" in filter to update all documents
db.COLLECTION_NAME.updateMany(
  {}, //<--- Filter
  { $set: { update: "value" } }
)