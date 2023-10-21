To begin builidng a React Native App

  npx create-expo-app
    named the folder
    then cd 
    then npm start

Start JSON Server 

npm install -g json-server

Open a bash terminal in the json-server/ folder by following the instructions below:

cd ~/Desktop/NucampFolder/json-server
Once you have a bash terminal open to the json-server/ folder, enter the ls command and confirm that you see the public/ folder and the db.json file listed:

Enter the following at the command prompt to start the server. Copy and paste this command down somewhere you can access it easily, because you will need to run it again multiple times in the future:
json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000