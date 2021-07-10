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

- [x] create project
- [x] add sanity
- [x] create project schemas
- [x] fill sanity with data
- [x] connect to sanity from client
- [x] build query string
      WHAT QUERIES DO I NEED (open to figma files to find out)
- [x] check that data is received

2. ui project setup

- [x] colors
- [x] typography
- [x] buttons
- [x] inputs
- [x] links
- [x] layout
  - [x] header
  - [x] footer
  - [x] prefooter

4. build first page
   [x] add content to cdn
   [x] build and add query with types
   [x] build components
   - [x] hero
   - [x] comp1
   - [x] comp2
   - [x] comp3
         [x] use data in components
5. build product page

- [x] use getStaticPaths to create product page
- [x] use getStaticProps to pass props for each product
- [x] ProductDetails
- [x] ProductFeatures
- [x] ProductGallery
- [x] ProductRecommended
- [x] use getStaticProps/Paths to render product pages
- [x] add dynamic data for each product page
- [x] use typescript to manage types of fetched data

6. build category pages
   - [x] build productPreviewComponent
     - [x] change database to host mobile, tablet and desktop for each image

- [x] use getStaticPaths to create category pages
- [x] use getStaticProps to pass props for each category

- [x] build categoryLinks component

7. add auth0
8. build shopping cart

- [] build cart
  [x] overlay
  [x] cart
  [x] cart rows

  [x] add to cart functionality
  [x] global cart state
  [x] count cart items
  [x] remove all
  [x] remove one
  [x] count total
  [] checkout button / check that there is data / use shopping cart on checkout page

9. build checkout

# Notes upon opening figma design files

- For images i can use Next.js to optimize and use a single source for all images

- query strings needed are
  - [] get products within category
  - [] get product details

# Forms

This project requires us to style radio buttons with custom styles.

This is similar to the styling of checkboxes in the last project.

Method # 1:
set appearance-none to the default input element
implement the display of a radio or checkbox with your own css

Method # 2:
Use a library like the tailwindcss forms plugin
install then add `plugins: [require('@tailwindcss/forms')]`

1. this resets all form elements
1. add styles directly to inputs
1. write custom overrides to all inputs

Since we are using very simple radio for this i will build this component with both methods to have both in my toolkit for future projects.

PROBLEMS WITH SVGs for buttons

using object within button

```tsx
<button className='lg:hidden cursor-pointer'>
	text
	<object data='/icon-hamburger.svg'></object>
</button>
```

result: text gets a pointer but the object does not
button is focusable with tabbing

using img tag

```tsx
<button className='lg:hidden '>
	<img src='/icon-hamburger.svg'></img>
</button>
```

result: cursor works as expected and tabbing works

July 5th get into production checklist:

[x] confirm that the local project is working with localhost running both server and client

[x] move server to non local host and connect from production client
[x] set up cloud SQL instance,
[x] change connections to allow from anywhere
[x] connect to cloud SQL from local server
[x] migrate and seed database using prisma
[x] dockerize local server
[x] setup cloud sdk and authenticate then deploy docker image to to gcr
[x] move local server to compute engine on GCP
[x] set up firewall rule to allow connection to compute engine
[x] connect to deployed compute engine server from poduction client

July 6th

[x] support auth in client
[x] create form (register and login in)
[x] collect form data
[x] send to server
[x] get back response and save data accordingly

[x] support authentication on server
[x] create auth endpoints
[x] run auth middleware
[x] send back responses

[] look into JWT cookies sessions ?

...

July 7th

[x] create order API

- [x] imporve mt prisma starter files
- [x] create prisma schema for orders
- [x] migrate DB to new postgres db
- [x] routes
- [x] controllers
  - [x] for creating order
  - [x] for getting orders
  - [x] for getting customers

[x] create order client

- [] add user or guest ui to formik form
- [x] pass order data to server
- [x] handle server response appropraitely

July 8th

[x] add route/controllers to get user orders
[x] add ui to view user orders

- [x] add view orders button
- [x] view orders page

[x] create orders on local env then
[x] support orders in client

July 9th

[] move order servers to prod env

- [x] setup database and connect to cloud sql instance
- [x] add dockerfile for orders server
- [x] check that image runs on local docker env
- [x] push docker image to gcr
  - [x] docker build -t audiophile-orders
  - [x] docker tag audiophile gcr.io/[project-name]/audiophile-orders
  - [x] docker push gcr.io/[project-name]/audiophile-orders
- [x] create new compute engine with docker image
- [x] set firewall rules to allow connections
- [x] set up and test connection from orders branch in client
- [x] merge orders branch with prod

...July 10th

[] fix Client Bugs

- [] show password requirements when incorrect
- [] fix the hero image max size
- [] yx1-earphones slug issue on homepage
- [] recommended items names are short
- [] the qty in product details needs to reset between items
- [] category pages need new prodcut subtitle
- [] sort category items by newest
- [] order page is not showing $ signs

- [x] secure the users/orders server using heroku (this is a dyno and will sleep)
- [] use this secure server in prod

[] share hosted project on front end mentor
[] write about learning points
