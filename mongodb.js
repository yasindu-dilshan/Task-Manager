const { MongoClient, ObjectID } = require("mongodb");

const connection = "mongodb://127.0.0.1:27017";
const databaseName = "taskmanager";

MongoClient.connect(connection, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database");
  }
  const db = client.db(databaseName);

  // db.collection("tasks")
  //   .updateMany(
  //     {
  //       completed: false,
  //     },
  //     {
  //       $set: {
  //         completed: true,
  //       },
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(result);
  //   });

  db.collection("users")
    .updateOne(
      {
        _id: new ObjectID("6009c03de2ac6c49781caaee"),
      },
      {
        // $set: {
        //   name: "Shethmi",
        // },
        $inc: {
          age: 1,
        },
      }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  // db.collection("tasks").findOne(
  //   {
  //     _id: new ObjectID("6009c97d3893b21134d41745"),
  //   },
  //   (err, results) => {
  //     if (err) {
  //       return console.log("Unable to fetch");
  //     }
  //     console.log(results);
  //   }
  // );

  // db.collection("tasks")
  //   .find({ completed: false })
  //   .toArray((err, result) => {
  //     if (err) {
  //       return console.log("Unable to fetch");
  //     }
  //     console.log(result);
  //   });

  // db.collection("users").findOne(
  //   {
  //     name: "Yasindu",
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log("Unable to fetch");
  //     }
  //     console.log(result);
  //   }
  // );

  // db.collection("users").insertOne(
  //   {
  //     name: "Yasindu",
  //     age: 22,
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log("unable to insert user");
  //     }

  //     console.log(result.ops);
  //   }
  // );

  // db.collection("users").insertMany(
  //   [
  //     {
  //       name: "Chaminda",
  //       age: 49,
  //     },
  //     {
  //       name: "Dammika",
  //       age: 47,
  //     },
  //   ],
  //   (err, result) => {
  //     if (err) {
  //       return console.log("Unable to insert user");
  //     }

  //     console.log(result.ops);
  //   }
  // );

  // db.collection("tasks").insertMany(
  //   [
  //     {
  //       description: "check emails",
  //       completed: true,
  //     },
  //     {
  //       description: "Complete lec slides",
  //       completed: false,
  //     },
  //     {
  //       description: "java leetcode practise",
  //       completed: true,
  //     },
  //   ],
  //   (err, result) => {
  //     if (err) {
  //       return console.log("Unable to insert data");
  //     }

  //     console.log(result.ops);
  //   }
  // );
});
