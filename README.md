# URL Shortener

This is an URL shortener built with React, Node.js, Express, and Mongo DB.

## Environment Variables

To run this project, you will need to create `.env` file in the main project directory and add the following environment variables to the file.

| Variable     | Description                                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------------------------------ |
| `MONGO_URI`  | Your MongoDB URI `Ex) MONGO_URI=mongodb+srv://{DB_USERNAME}:{DB_PASSWORD}@{PROJECT_NAME}.mongodb.net/{DB_NAME}` |
| `BASE`       | Base URL for shortening `Ex) BASE=http://localhost:5000`                                                            |
| `PORT`       | Port for client `Ex) PORT=3000`                                                                                     |
| `SERVERPORT` | Port for server `Ex) PORT=5000`                                                                                     |

## Steps to Run Locally

Clone the project

```bash
  git clone https://github.com/arthur-ryoo/UrlShortener.git
```

Go to the project directory

```bash
  cd UrlShortener
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon server.js
```

Start the client

```bash
  npm start
```

## Algorithm Used for Generating the Random Short URL

```javascript
function generateRandomUrl(length) {
  let url = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  for (let i = 0; i < length; i++) {
    url += characters.charAt(Math.floor(Math.random() * characters.length));
   }
    
   return url;
}
```
