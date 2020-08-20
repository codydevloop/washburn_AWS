

  # Host on AWS -- Washburn Real Estate (Zillow Clone)

    Table of Contents:
  
  - [Description](#description)
  
  - [Dependencies](#dependencies)
  
  - [Installation](#installation)
    
  - [Contributing](#contributing)
  
  - [License](#license)

  - [Updates](#updates)
  
  

  
  


# description:

1. Take this app:


Deployed with Heroku:
https://codydevloop-washburn-realestat.herokuapp.com/

GitHub:
https://github.com/codydevloop/real-estate

..and host on AWS following this video.

https://www.youtube.com/watch?v=FanoTGjkxhQ



# new packages/concepts to digest

PM2 | NGNIX | UFW | Docker Containers

# other bumps in the road 

## long filenames 8/20
https://stackoverflow.com/questions/22575662/filename-too-long-in-git-for-windows#26111092
- run gitBash as admin
- git config --system core.longpaths true


## view/change remote 8/20
https://docs.github.com/en/github/using-git/changing-a-remotes-url
-git remote -v
-git remote set-url origin https://github.com/codydevloop/washburn_AWS.git







---

## Dependencies:  
---



          
  
## Installation:

    1. Install Nodejs dependencies.
    ```
    npm install
    ```
    2. In the root directory of the project, start the app.
    ```
    npm start
  
## Contributing:
  
  
## Usage
1. marking a property as favorite will initiate an API call.  After a 1-3 second delay, a camera icon will display and link to a modal containing a carousel of the photo gallery, and any property description details.


## Main Page
![main page ](https://github.com/codydevloop/real-estate/blob/master/client/public/images/washmain.png)

## Admin Page
![admin page ](https://github.com/codydevloop/real-estate/blob/master/client/public/images/washadmin.png)

## Login Page
![login ](https://github.com/codydevloop/real-estate/blob/master/client/public/images/washlogin.png)

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

  

