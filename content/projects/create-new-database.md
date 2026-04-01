---
title: Create New Database file
description: I specialize in web development
externalUrl: https://hartlief-new.webflow.io/
image: /project-images/unnamed.png
navigation:
  title: Create New Database file
  description: I specialize in web development
---

```js
/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'nr-ntts-namibia';
const collection = 'users';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

// Create admin user with admin role

db.createUser({
  user: "admin",
  pwd: "MaGano_1531",
  roles: [{ role: "userAdminAnyDatabase", db: "admin" }],
});

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
```

```js
/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "nr-ntts-namibia";
const collection = "users";

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

// Create admin user with admin role

db.createUser({
  user: "admin",
  pwd: "MaGano_1531",
  roles: [{ role: "root", db: "admin" }],
});

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
```
