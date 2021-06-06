# Notes upon opening files

## data

data is an array of product objects.
the product object has data like image paths, ids, descriptions

## assets

there are a LOT of .jpg image assets for this project

lets break this apart

options for where the images are stored:

#### store them locally in the directory as i have done for previous yet smaller projects.

- file size increases in my linked github repo and build
- images are public

#### store them on a CDN (sanity)

- smaller build
- image security; ability to block access to download

its going to be better to set up a CDN to store images
we might as well include the entire project structure

#### why not just do a database?

steps:

1. create an API for the database
2. connect and setup database with schemas
3. seed product data into database
4. use my api to read and update database

cons: must code a solution to change data non-programaticlly i.e admin dashboards
pros: more support for allowing a user to change data through the my api

#### allowing a user to change data

things i want a user to do with data:

- create an order
- create an account
- log in

options:

- serverless functions
- custom api

#### hosting servers

hosting on heroku ehh

hosting on cloud provider (google cloud, aws, digital ocean)

LOTS OF OPTIONS ON HOW TO BUILD THIS
WHAT WOULD I LIKE TO FOUCS ON FOR THIS

option #1 - maximum security

- custom database
- custom auth
- host on a something like aws or digital ocean

option #2 - maximum flexibility JAMSTACK

- serverless functions
- cdn (sanity)
- auth0 for authentication
- still host on vercel

Im going to go with option#2 for this. Option 2 might make a good pick for my next project.

## GAMEPLAN

steps:

1. build cdn and host data
2. ui project setup
3. build base components
4. build first page
5. build product page
6. build remaining pages
7. add auth0
8. build shopping cart
9. build checkout
