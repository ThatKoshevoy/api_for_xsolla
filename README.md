# api_for_xsolla 

## Description
This API was developed by me for Xsolla School 2021.It is designed as a RESTful API and provides features to manage the database, such as deleting, modifying, viewing, and adding new items, in this case products, to the catalog for the e-commerce site.

## Development
To develop the API, I used:
 * JavaScript
 * Node.JS w/ Express v4.17.1
 * MongoDB (The database is on their server)

There're else few libraries that you will need for startin' an app:
 * body-parser v1.19.0 (for parsing data)
 * mongodb v3.6.9 (for work with MongoDB obviously)

This libraries already installed and located in node_modules folder, so nevermind. But you can enter "npm install" for check.

I also used the Heroku service for hosting, which currently hosts my API in a fully working state. (Use https://shopapiforxsolla.herokuapp.com/catalog and others links that you can find in the api.js file)

## Launching
To run the API you need to launch the file api.js, for this you have to enter "npm start" or "node api.js" in your terminal to start API on your localhost:3000 or 127.0.0.1:3000 localdomain.

After this you can use any of sites that can help you with sending requests (https://reqbin.com/ for example) or something else. Links for requests you can find in api.js file. 

You can also use the simple tryapi.exe app, that i made with Python for testing my API. Its working with API on Heroku. (Source is in tryapi.py)


