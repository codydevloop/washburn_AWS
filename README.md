

  # Washburn Real Estate (Zillow Clone)

    Table of Contents:
  
  - [Description](#description)
  
  - [Dependencies](#dependencies)
  
  - [Installation](#installation)
    
  - [Contributing](#contributing)
  
  - [License](#license)

  - [Updates](#updates)
  
  

  
  
Deployed with Heroku:
   
https://codydevloop-washburn-realestat.herokuapp.com/

## Description:
---
1. This app was created with focus on the MERN technology stack, and Auth0 authentication.

2. It is designed to be used by independent real estate agents.

3. The app  provides the primary functions of Zillow.com using the RealatorAPI. (Login, Search, Favorites, Map) 

4. The app creates value to the agent by providing user search habits (graphs and charts) and other metadata to asist the agent's marketing efforts.  (ADMIN on navbar)





## | M | -MongoDB Atlas & Mongoose 

## | E |   -Express.js 

## | R |   -React.js 

## | N |   -Node.js 
---

## Dependencies:  
---


## FrontEnd (.env contains values for Auth0 and RealtorAPI)

![front end ](https://github.com/codydevloop/real-estate/blob/master/client/public/images/frontend.PNG)
## BackEnd (.env contains values for MongoDB Atlas)
![front end ](https://github.com/codydevloop/real-estate/blob/master/client/public/images/backend.PNG)
          
  
## Installation:

    1. Install Nodejs dependencies.
    ```
    npm install
    ```
    2. In the root directory of the project, start the app.
    ```
    npm start
  
## Contributing:
  
  Cody Hoover, Alex Poshivailo, Dallas Washburn, Azucena Gonzalez
## Usage
1. marking a property as favorite will initiate an API call.  After a 1-3 second delay, a camera icon will display and link to a modal containing a carousel of the photo gallery, and any property description details.

## License:

MIT License

## Updates

8/18/20

The following work was done in preparation of hosting this app on other providers (AWS, Google) and then maybe trying my hand at Terraform.

1. forked group project: https://github.com/azu20/real-estate
2. created new Heroku deployment: https://codydevloop-washburn-realestat.herokuapp.com/
3. created new MongoDB Atlas cluster and connected to app and Heroku
4. created new Auth0 application and updated connection variables
-- **the new Auth0 is still somehow connected to the original app's user DB. Ex.  I can authenticate with users I created in the original app that was forked. I know there is a way to seperate these and will dig into Auth0 documentation sometime. While i'm there i'll also need to dig into the whitelist information
5. created env variables for API key, Auth0 varibles, MongodDB atlas.
-- need to install (npm dotenv) in order to read backend .env file.
6. cleaned up other random code as i ran into it.

  

