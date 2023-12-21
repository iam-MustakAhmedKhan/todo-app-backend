
# Todo app Server

Todo application Server README




## Installation

To install this project in you local machine you have to clone this repository first


```bash
  https://github.com/iam-MustakAhmedKhan/todo-app-backend.git my-project
  cd my-project
  npm install
  npm start
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_CONNECTION_STRING`

`PORT`

`JWT_SECRET`




## API Reference

#### **Check Health**
```http
GET /health
```

#### **Google Auth**

```http
POST /auth
```

| Body | Type     | 
| :-------- | :------- | 
| `accessToken`      | `string` |

*Response*
```json
{
    "name": "Mustak Ahmed Khan",
    "email": "mustakahmedkhan6@gmail.com",
    "profile_img": "https://lh3.googleusercontent.com/a/ACg8ocLoaqC3TfHOvm7Xd-7b8HEtv0AZaqusGWMMNaJWs5ZA18I=s384-c",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODMzYzhjNDRhOTA2N2IzMzEyY2FlOSIsImlhdCI6MTcwMzE3NzYzMX0.Oa9wuRLKnqm3z0TXTkwS975mUpGusR51hl9tcf2ERTo",
    "_id": "65833c8c44a9067b3312cae9"
}

```

#### **Create a Task**

```http
POST /create-task
```
| Body | Type     |
| :-------- | :------- |
| `title`      | `string` 
| `description`      | `string`
| `date`      | `string` |
| `priority`      | `string` | 

*Request Body*
```json 
{
    "title":"Task 4",
    "description": "Description for task 4",
    "date":"12/11/2003",
    "priority":"High"
}
```
*Response*
```json 
{
    "title": "Task 4",
    "des": "Description for task 4",
    "date": "2003-12-10T00:00:00.000Z",
    "completed": false,
    "priority": "High",
    "user": "65833c8c44a9067b3312cae9",
    "_id": "65846f8c118b391e207744b9",
    "createdAt": "2023-12-21T17:02:04.934Z",
    "updatedAt": "2023-12-21T17:02:04.934Z",
    "__v": 0
}

```

#### **Get Tasks**

```http
GET /get-task
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user`      | `string` | **Required**. accessToken |

*Response*
```json
[
    {
        "_id": "65846f8c118b391e207744b9",
        "title": "Task 4",
        "des": "Description for task 4",
        "date": "2003-12-10T00:00:00.000Z",
        "completed": false,
        "priority": "High",
        "user": "65833c8c44a9067b3312cae9",
        "createdAt": "2023-12-21T17:02:04.934Z",
        "updatedAt": "2023-12-21T17:02:04.934Z",
        "__v": 0
    },
    {
        "_id": "6584654ef408a7b591feac19",
        "title": "Task 1",
        "des": "Description 1",
        "date": "2023-12-16T00:00:00.000Z",
        "completed": false,
        "priority": "High",
        "user": "65833c8c44a9067b3312cae9",
        "createdAt": "2023-12-21T16:18:22.454Z",
        "updatedAt": "2023-12-21T16:18:22.454Z",
        "__v": 0
    }
]
```


#### **Update a Task**

```http
PATCH /update-task
```

| Body | Type     |
| :-------- | :------- |
| `task_id`      | `string` |
| `title`      | `string` 
| `description`      | `string`
| `date`      | `string` |
| `priority`      | `string` |
| `completed`      | `Boolean` |



#### **Delete a Task**

```http
DELETE /delete-task
```

| body | Type     | 
| :-------- | :------- | 
| `task_id`      | `string` | 




## Tech / Libraries
**Server:** Node, Express

**Libraries:** mongoose, nodemon, dotenv, cors


## Author

- [@iam-MustakAhmedKhan](https://github.com/iam-MustakAhmedKhan)

