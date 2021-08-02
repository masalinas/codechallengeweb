# Description
OpenAPI Code Challenge

# Generate client angular services sources
Design and generate client sources from Swagger Editor docker image loading the OpenAPI contract document **openapi.yaml** Code challenge API file

Start Swagger Editor from your host using docker cli
```
docker pull swaggerapi/swagger-editor
docker run -d --name swagger-editor -p 80:8080 swaggerapi/swagger-edito
```

Load Swagger Editor from your browser open this link
```
http://localhost:8080
```

From Swagger Editor select Generate Client -> typescript-angular menu option to generate the client sources to be download

![Captura de pantalla de 2021-08-01 10-31-00](https://user-images.githubusercontent.com/1216181/127765735-91bd31a9-5de0-4fae-af20-aea71e65bb37.png)

# Load dependencies app
```
npm install
```

# Start app in localhost and debug
```
npm run start
```

Load the app from your brower open this link
```
http://localhost:4200
```

Default username/password it's: user/pass

# Test app
```
npm run test
```

# Build app
```
npm run build
```

# Build app for production
```
npm run build -- --prod
```

# Some app captures 
![Captura de pantalla de 2021-08-02 08-33-49](https://user-images.githubusercontent.com/1216181/127814679-a5073981-2554-417d-8fbf-f829600e813f.png)


![Captura de pantalla de 2021-08-01 13-08-09](https://user-images.githubusercontent.com/1216181/127768589-80dd84e4-770c-4b55-a32e-4a281e6d547c.png)
