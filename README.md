# CFA Project 3 - Church Organizer API Backend
This is a Node.js RESTful API application to manage membership data for a church. This application is designed to sit in the back end and to serve data and allow CRUD actions from frontend applications. For this project the frontend is a <a href="https://github.com/ethankhoa/CFA-Project3-Organizer-React-Web">web app with React</a>. 

# Development

This application is built with MongoDB with Mongoose ORM. 

Member model schema
```
name: {
    title: {
      type: String,
    },
    first: {
      type: String,
    },
    last: {
      type: String,
    }
        },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
  },
  emailOptIn: {
    type: Boolean,
    default: false
  },
  isMember: {
    type: Boolean,
    default: false
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postCode: {
      type: String,
    }
  },
    birthday: {
      day: {
        type: Number,
      },
      month: {
        type: Number,
      },
      year: {
        type: Number
      }
    }
  },
  
);
```
# Setup
1. Clone Repo
1. Create MongoDB 
1. You'll need to define the env vars. Copy .env.example to .env
```
yarn install
yarn watch
```

# Routes 
These are the routes that are currently available within the application. 

### POST /members/
Post route to create a member, name and email are required elements. This route accepts x-www-form-urlencoded Body data. 
```
firstName: string,
lastName: string,
email: string,
emailOptin: boolean,
isMember: boolean,
phone: string,
street: string,
city: string,
state: string,
postCode: string
```
Success Message 
```
{ message: 'Member has been added!', data: member }
```

### GET /members/
Get route to display all members, results are returned in JSON.
```
[
    {
        "_id": "593a3b129f529b0011bb3e05",
        "phone": "0411222333",
        "email": "toocool4school@noemail.com",
        "__v": 0,
        "birthday": {
            "year": null,
            "day": null,
            "month": null
        },
        "address": {
            "postCode": "2065",
            "state": "NSW",
            "city": "Wollstonecraft",
            "street": "123 Cool Road"
        },
        "isMember": false,
        "emailOptIn": true,
        "created": "2017-06-09T06:07:14.456Z",
        "name": {
            "last": "Bravo",
            "first": "John"
        }
    }
 ]
```

### GET /members/:id
Get route to display information of one member. 
```
    {
        "_id": "593a3b129f529b0011bb3e05",
        "phone": "0411222333",
        "email": "toocool4school@noemail.com",
        "__v": 0,
        "birthday": {
            "year": null,
            "day": null,
            "month": null
        },
        "address": {
            "postCode": "2065",
            "state": "NSW",
            "city": "Wollstonecraft",
            "street": "123 Cool Road"
        },
        "isMember": false,
        "emailOptIn": true,
        "created": "2017-06-09T06:07:14.456Z",
        "name": {
            "last": "Bravo",
            "first": "John"
        }
    }
```

### POST /members/:id/edit
Post route to edit member information, new information is passed via Body.
Success
```
{ message: 'Member has been updated.' }
```

### DELETE /members/:id
Delete route to delete member record.
```
{ message: 'Member has been deleted.'}
```
# MongoDB diagram of initial models
<img src="https://res.cloudinary.com/ethankhoa/image/upload/v1500444747/Screen_Shot_2017-07-19_at_4.11.21_PM_xlnahh.png">
