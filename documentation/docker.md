# Docker

`Dockerfile`

```
FROM node:6.6
ADD mkdir /app
ADD . /add
WORKDIR /app
RUN npm install

EXPOSE 8000
CMD ["node","index.js"]
```
