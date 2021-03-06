

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

PM2 | NGNIX | UFW | Docker Containers | NVM | 

# mini 

8/25 recap

- created new ec2 micro instance with ubuntu 18.4
- install nvm
- install node.js
- update apt 
- install npm
- clone project from git
- install dependencies 'npm install'
- install NGINX from apt
- configure NGINX server block, restart NGINX
- create backend .env file that contains MongoDB Atlas creds
- start backend 'node server.js'
- navigate to instance ec2-52-207-36-218.compute-1.amazonaws.com
- ISSUES (unresolved)
  - MongoDB Atlas connection failure (removed lines of code in server.js)
  - ec2 / Auth0 communication issue
- ISSUES (resolved)
  - unexpected token '<'  (rebuilt application and hard reload in browser)


8/21 - 8/24


## Unbuntu


https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04

-new ubuntu (base) config

https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04


root access "sudu -i"  and change users

https://askubuntu.com/questions/617850/changing-from-user-to-superuser


https://net2.com/how-to-switch-users-on-linux-ubuntu/





-install nvm (node/npm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash


https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/

## long filenames 8/20
https://stackoverflow.com/questions/22575662/filename-too-long-in-git-for-windows#26111092
- run gitBash as admin
- git config --system core.longpaths true


## view/change remote 8/20
https://docs.github.com/en/github/using-git/changing-a-remotes-url
-git remote -v
-git remote set-url origin https://github.com/codydevloop/washburn_AWS.git

## NGINX primer
https://www.youtube.com/watch?v=vRrhQwNixlc





## MongoDB Connection







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

  

