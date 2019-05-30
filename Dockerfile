FROM node:10

ARG COMMIT_REF
ARG BUILD_DATE
ARG BUILD_BRANCH

WORKDIR /app

# use wildcard to copy both package.json and package-lock.json
COPY package*.json .

RUN npm install

COPY . .

ENV APP_COMMIT_REF=${COMMIT_REF} \
    APP_BUILD_DATE=${BUILD_DATE} \
    APP_BUILD_BRANCH=${BUILD_BRANCH}

EXPOSE 3000

CMD ["npm", "start"]