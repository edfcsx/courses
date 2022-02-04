/* -------- DELETE ------------ */

// list of methods
deleteOne(filter, options)
deleteMany(filter, options)

// How to delete a one document (remember to select a database with use db)
db.COLLECTION_NAME.deleteOne({
  example: "felipe" // <--- Filter
});

// How to delete a many documents (remember to select a database with use db)
db.COLLECTION_NAME.deleteMany(
  {} // <-- Filter
)
