// Instalace

node -v                 (funguje s verzi v16.15.0)
npm init                (nainstaluje package.json)

npm i express           (framework)
npm i express-session   (middleware, přístup k datům klienta)
npm i ejs               (generuje HTML pomocí JavaScriptu)
npm i mongoose          (databáze)
npm i dotenv            (bezpečné uložení systémových proměnných)

vše v jednom:              npm i express express-session ejs mongoose dotenv

npm i -D nodemon        (proces pro detekci změn ve zdroji a automatický restart (pouze pro DEV))

//GIT

$ heroku git:remote -a dbfilmu
 git commit -am "make it better"
 git push heroku master
 heroku logs -n 200