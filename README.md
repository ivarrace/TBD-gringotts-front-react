# gringotts-front

## Docker

### Build image
``` 
docker build -t gringotts-front:dev .
```

### Run container
``` 
docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true -e REACT_APP_API_BASE_URL=http://localhost:8080 --name gringotts-front-container -d gringotts-front:dev
```