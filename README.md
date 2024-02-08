# MySecretSanta

---

Here is the first project that I built entirely on my own, using NodeJS, PostgreSQL and TailwindCSS. It's an application which generate a random draw for Secret Santa moments (wishlist feature is not yet implemented).

---  
To use it, install the dependancies :  
``` 
npm install .
```
You need to create a database, I used PostgreSQL. You have access to the MCD there :  
 [MCD with Mocodo](https://www.mocodo.net/?mcd=eNpljjsOgzAQRHufYg_gIrTpLEDCEgJkTFxvghNW4ifbEdcPzq9Iulnp7ZvpvHVHoJ7DlZwPM06Ww4ifZCekkcOK3m-L65muIVW50DmHQwVdmysOSQKZEoZlDreX6nzvbzZEuBCniCbQCKVlKhtR6edrhFmDLtCFVpzDd8PPhCipTfXv2FtNIduilK1mZiA_jOTfGgp2KveLsQcuokQZ)
 
 In the psql terminal :
 ```
 CREATE ROLE santa WITH LOGIN PASSWORD 'santa';
 CREATE DATABASE santa OWNER santa;
 ```
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
