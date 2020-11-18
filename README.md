# NobodyCares IT Project 

## Documents
- Motivational Model


- Persona


- User stories

## Description of key algorithms
- Authentication 

The front end uses two attributes to track the statue of user login, userLogin and Authentication. UserLogin represents if user has logined in. Authentication stored in the local storage contains the information for backend to verify if user's login state is valid. When user firstly login, the backend will return a token which should be stored as Authentication. After user logining out, the userLogin will be false and Authentication will be empty.


- Timeline


- Image storage and display
A powerful media management -- Cloudinary is used to store images. With Cloudinary, images could be uploaded to the storage safely and easily. Also, while uploading, transformation could also be handled to crop images. Every image that stored in Cloudinary would have a url and public id, which could be stored in our database. While using the images, we access the database to get the url and id, and then getting the images with them. In this way, although all images are stored in the same bucket, they could be seperated by database table. 
We display images and articles ine the way of waterfall wall, which makes it look nice and beautiful. 

## Description of key classes and the application's layers 



## Description of database structure



## Deployment guidelines 

