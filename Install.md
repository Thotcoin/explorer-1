Installation steps:
===================

### 1. Setup Ubuntu 16.04

### 2. Update repositories
    sudo apt-get update
 
### 3. Install MongoDB
    sudo apt-get install mongodb -y
 
### 4. Update repositories for Nodejs setup
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
 
### 5. Install Nodejs
    sudo apt-get install -y nodejs
 
### 6. Create database and user
    mong
    > use explorerdb
    > db.createUser( { user: "username", pwd: "3xp!0reR", roles: [ "readWrite" ] } )
 
### 7. Get source from GutHub
    git clone 
 
### 8. Install Nodejs dependencies
    sudo chmod -R 777 ~/explorer
    cd ~/explorer
    sudo npm install mongoose
    sudo npm install
 
### 9. Create and modify settings.json
    cp settings.json.template settings.json
    nano settings.json
 
### 10. Create screen session for npm server
    screen -S npm

### 11. Start npm server
    sudo npm start
 
### 12. Exit npm screen session
 press Ctrl+a+d
 
 To reconnect to npm screen session use command below:

    screen -r -d npm
     
