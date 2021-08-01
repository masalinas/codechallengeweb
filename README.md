# Description
OpenAPI Code Challenge

# Generate client angular services sources
Design and generate client sources from Swagger Editor docker image loading the OpenAPI contract document **openapi.yaml** Code challenge API file

Start Swagger Editor from your host using docker cli
```
docker pull swaggerapi/swagger-editor
docker run -d -p 8080:8080 swaggerapi/swagger-editor
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
Login view
![Captura de pantalla de 2021-08-01 11-27-23](https://user-images.githubusercontent.com/1216181/127766105-8f488694-7964-46f2-8e06-2782dfe7e84a.png)

Transaction list View
![Captura de pantalla de 2021-08-01 11-29-29](https://user-images.githubusercontent.com/1216181/127766142-d080ff87-f5d2-4d56-b7d9-23fd44171e1c.png)
