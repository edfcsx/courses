/* ------------- JOINS ----------------------- */
// Aggregate documents with aggregate framework

Example:

/*
aggreggate is a function
from = target join collection
localField = property in original collection
foreignField = property in target join collection
as = aliases to embbeded how to contain data
*/

db.books.aggregate(
  [
    {
      $lookup: {
        from: "authors",
        localField: "authors",
        foreignField: "_id",
        as: "creators"
      }
    }
  ]
)