# Url shortener:blush:

## Introduction:vulcan_salute: 
This API (codebse) was built to help transform long Urls into shorter Urls for use. It was built using Node.js, Express, MongoDb and CRUD functionality.

## Table of Contents:v:
---
- [Prerequisites](#Prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Conclusion](#contribution)


## Prerequisites:hand::raised_hand:
---
- Fundamental knowledge of Node.js, Express, MongoDb (mongoose).
- Node.js installed on your machine
- MongoDb installed on your Machine
- Basic knowledge of CRUD functionality
- You can access and/or download the technologies here:
  - [Nodejs](https://nodejs.org/en/download/current/)
  - [MongoDb](https://www.mongodb.com/download-center/community)
  - [Vscode](https://code.visualstudio.com/download) 
  - [Postman](https://www.postman.com/downloads/)
---

## Getting Started:heart_eyes:
---
### Setting up manually

```bash
# Get the latest snapshot
git clone https://github.com/timilehin2000/url-shortener.git

# Change directory
cd url-shortener

# Copy .env.example to .env
cp .env.variable.env variable.env

# Create a database (with MongoDB)
# Update variable.env file with database credentials 

# PROD_DATABASE=mongodb://<username>:<password>@localhost/<database_name>
# DEV_DATABASE=mongodb://localhost:27017/<database_name>

# Install NPM dependencies 
npm install

# Then simply start your app
- npm start (when connected to development database)
- npm run dev (when using production database)

By default, the client will listen on localhost via port 3000. which is what was duplicated from the .env.example file
```
---

## Usage:wink:
---

### Using Postman
Make sure post is set to `x-www-form-urlencoded`
* Post the long url (POST): `/api/v1/`
```bash 
Copy and paste the shortened url the browser
```
---

## Conclusion:man_cartwheeling:
---
Although this is a simple and small codebase, however if you find an issue with the codebase or you have any suggestion please help out, send in a PR. I am not perfect:astronaut:.

Thanks:upside_down_face:
</br> Timi
