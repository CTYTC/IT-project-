# NobodyCares IT Project 

## Documents
- Motivational Model


- Persona


- User stories

## Description of key algorithms
- Authentication -- The front end uses two attributes to track the statue of user login, userLogin and Authentication.  UserLogin represents if user has logined in. Authentication stored in the local storage contains the information for backend to verify if user's login state is valid. When user firstly login, the backend will return a token which should be stored as Authentication. After user logining out, the userLogin will be false and Authentication will be empty.


- Page Control
Timeline page shown three desciption on a specific year once a time. The user are able to click "last" and "next" to change the month when the month is over three. The user also able to select a specific year to see what happen in this year. All of these operation do not change the router of this page. It controlled by the back-end. Therefore, it will not need to give the new router at each time changing the year which will save a lot of time in redirecting.


- Image storage and display
A powerful media management -- Cloudinary is used to store images. With Cloudinary, images could be uploaded to the storage safely and easily. Also, while uploading, transformation could also be handled to crop images. Every image that stored in Cloudinary would have a url and public id, which could be stored in our database. While using the images, we access the database to get the url and id, and then getting the images with them. In this way, although all images are stored in the same bucket, they could be seperated by database table. 
We display images and articles ine the way of waterfall wall, which makes it look nice and beautiful. 

## Description of key classes and the application's layers 
<img width="592" alt="layers" src="https://user-images.githubusercontent.com/42131250/99541426-c55a1280-29eb-11eb-8571-2db570d303c7.png">



## Description of database structure

<img width="780" alt="database" src="https://user-images.githubusercontent.com/42131250/99541502-d99e0f80-29eb-11eb-990b-6b0803128c41.png">



## Deployment guidelines 

#Locol Delpoyment

- first run 'npm install' and 'node app' in the back end
- Secondly run 'npm install' and 'npm run serve' in the front end

#Heroku

-Web app is deployed in Heroku with link: https://guarded-castle-98054.herokuapp.com/
