# MySecretSanta

---

Here is the first project that I built entirely on my own, using Node.js, PostgreSQL and TailwindCSS. It's an application which generate a random draw for Secret Santa moments (wishlist feature is not yet implemented).

---  
To use it, install the dependancies :  
``` 
npm install .
```
You need to create a database, I used PostgreSQL.
 In the psql terminal :
 ```
 CREATE ROLE santa WITH LOGIN PASSWORD 'santa';
 CREATE DATABASE santa OWNER santa;
 ```
Change the .env-example in .env
Then you can run the script to create tables :
```
npm run db:create
```
Finally, you can launch the application :
```
npm run start
```


You need to register to use the features. You can provide fake informations, you just need to put the same informations to log in.

---
