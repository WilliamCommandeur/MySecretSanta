# MySecretSanta

---

Hi there!  
Here is the first project that I built entirely on my own, using NodeJS and postgreSQL. It's an application which generate a random draw for Secret Santa moments.

---  
To use it, install the dependancies :  
``` 
npm install .
```
You need to create a database, I used PostgreSQL. You have access to some docs there :  
 [MCD with Mocodo](https://www.mocodo.net/?mcd=eNpdjkEOgjAQRfc9xRygC9m6a4SERgQCRdajVJmkIGlruL5UlER385L57__GabsH6jjcyDo_4qA5GPxeekAyHCZ0bn7YjqkCTuKYcNjl0NRJxSGKIK5Ey2KL8yq6PLu79uG1FJWSB1kKtSY2ztWbQ4aVaD1dacLRb0P-dgRXKs5BEv1KlvY2lXWayVqxtifXG3IfD3k9ZAuxF4q6Rdg=)  
 [MLD](docs/project-analysis/MLD.mcd)  
 
 
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
npm run dev
```


You need to register to use the features. You can provide fake informations, you just need to put the same informations to log in.  Enjoy !

---

I start in web development, and I'm interested in all opportunities that will help me evolve. You can contact me [here](https://www.linkedin.com/in/william-commandeur/). 
