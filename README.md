
# GrowthX Assignment
Develop a backend system for an assignment submission portal.


## Features

- **Users** can:
    - Register and log in.
    - Upload assignments.
- **Admins** can:
    - Register and log in.
    - View assignments tagged to them.
    - Accept or reject assignments.

## Tech Stack

**Server:** Node JS, Express JS, Mongoose ORM  , Zod (for validation)
**Database:** MongoDB


## Run Locally

Clone the project

```bash
  git clone https://github.com/RonakSurana-2001/GrowthX-Assignment.git
```

Go to the project directory

```bash
  cd GrowthX-Assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```

or if you do not want to restart server again and again after making any change to file in project use command
```bash
  nodemon app.js
```

## Environment Variables

To run this project, you will need to add the following environment variable to your .env file

`DB_URL`

# Swagger Documentation

<a href="https://growthx-assignment-oyx1.onrender.com/docs">Swagger Docs</a>

## API Reference

#### Register User or Admin

```http
  POST /register
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userEmail` | `string` | **Required**. Email Address |
| `username` | `string` | **Required**. Username |
| `password` | `string` | **Required**. Create Password |
| `admin` | `boolean` | **Required**. *true* is registering as admin else *false* |

#### Login User or Admin

```http
  POST /login
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userEmail`      | `string` | **Required**. Email Address |
| `Password`      | `string` | **Required**. Password |


#### Fetch all admins

```http
  GET /admins
```

#### Upload an assignment
User only can upload an assignment
```http
  POST /upload
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userEmail`      | `string` | **Required**. Email Address of logged in user |
| `adminEmail`      | `string` | **Required**. Email Address of Admin whom you want to tag the assignment |
| `task`      | `string` | **Required**. Description of task |


#### View assignments tagged to the admin
```http
  GET /assignments 
```

| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userid`      | `string` | **Required**. User ID of Logged in user who is admin |
| `useremail`      | `string` | **Required**. Email of Logged in user who is admin |

#### Accept an assignment
Only Admin can accept the assignment
```http
  POST /assignments/:id/accept 
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userid`      | `string` | **Required**. User ID of Logged in user who is admin |
| `useremail`      | `string` | **Required**. Email of Logged in user who is admin |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Assignment ID |



#### Reject an assignment
Only Admin can reject the assignment
```http
  POST /assignments/:id/reject 
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userid`      | `string` | **Required**. User ID of Logged in user who is admin |
| `useremail`      | `string` | **Required**. Email of Logged in user who is admin |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Assignment ID |

## Authors

[Ronak Surana](ronaksurana2017@gmail.com)

