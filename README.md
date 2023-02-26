# ImageProcessingAPI_Udacity
About the Project
The project is a simple API. That give you a server can create the thumbnail image with existing image in server.

## Getting Started
### Clone the project
> https://github.com/trungdinhtran/ImageProcessingAPI_Udacity.git
### Go to the project directory
> cd project-directory
### Install dependencies
> npm i or npm install
### Run a test with Jasmine
> npm run test
### Start a project
> npm run start
## How it work
### The server will return resize images with endpoint:
> http://localhost:3000/api/images?filename=fjord&height=200&width=220
### This endpoint have 3 paramaters is
+ filename: is a file name(without extension file) is existing in project-directory/images/full
+ height: is a height of a image(must be a positive number).
+ width: is a width of a image(must be a positive number).
