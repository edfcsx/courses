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

db.posts.insertOne({
  title: 'My frist post!',
  text: 'Hello guys',
  creator: ObjectId("5e0117814d010fd8743f8ce1"),
  tags: ['new'],
  comments: [
    {
      text: "Hello man!",
      author: ObjectId("5e0117814d010fd8743f8ce2")
    }
  ]
});