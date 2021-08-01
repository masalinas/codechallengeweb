# description
OpenAPI Code Challenge

# generate angular services sources
Design and generate client sources from Swagger Editor docker image loading the OpenAPI contract document **openapi.yaml**

```
docker pull swaggerapi/swagger-editor
docker run -d -p 8080:8080 swaggerapi/swagger-editor

http://localhost:8080
```

![Captura de pantalla de 2021-08-01 10-31-00](https://user-images.githubusercontent.com/1216181/127765735-91bd31a9-5de0-4fae-af20-aea71e65bb37.png)

# debug app
```
npm run start
```

# test app
```
npm run test
```

# build app
```
npm run build
```

# build app for production
```
npm run build -- --prod
```