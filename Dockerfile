FROM node:12.14.1
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN cd api && \
    npm install && \
    npm run build && \
    cd ../web && \
    npm install

EXPOSE 3000

CMD [ "npm", "run", "--prefix", "web", "buildstart" ]