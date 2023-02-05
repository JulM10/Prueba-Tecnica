# PRUEBA TECNICA

Soy Julio Madero.

Los pasos para iniciar el proyecto son:

## CD EN BACKEND
    Para instalar los requirimientos de la aplicación 

    pip install -r requirements.txt

    Para iniciar el servidor Backend 

    python manage.py runserver
 
## CD EN FRONTEND
 Para instalar el FrontEnd
    npm install
 
    npm run build

Para iniciar el FrontEnd de la aplicación hay que correr el siguiente comando
    npm start
 

## Docker

 Para correr el docker-compose hay que ejecutar el comando 
 docker-compose up -d
 
# Como subir el proyecto a google cloud:

1ero entrar a la cuenta de google cloud
2do crear un BUCKET 
3ero importar los archivos del proyecto 
4to configurar un load balancer para la pagina web utilizar el HTTPS load balancer publico, configurar el frontend, backend.

# CI/CD

    para las pruebas integrales se uso la plataforma de CircleCI la cual usa el archivo /.circleci/config.yml para correr el pipeline cuando se actualiza la version.
    Agregar el repositorio a la pagina de CircleCI para poder ver el pipeline y cada despliegue 