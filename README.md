
# Caesar Cipher
Please find the 1. caesar_cipher.js file.

# Simple Traveling Sales Problem
Please find the 2. simple_traveling_salesman_problem.js file

# Sample Rest API

### Project SETUP
npm install

### Compiles and hot-reloads for development
npm run dev / node server.js <br/>
Please import Tebengan.postman_collection.json file into your postman if you want to try it postman
## API Reference

#### Get all Trips With Pagination

```http
  GET /trips?page=1
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `string` | |

#### Create Trips

```http
  POST /trips
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `startLandMark`      | `string` | **Required**. |
| `endLandMark`      | `string` | **Required**. |
| `driver`      | `JSON` | **Required**.|
| `orders`      | `ARRAY[]` | **Required**.  |


