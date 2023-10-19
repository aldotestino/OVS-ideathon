FROM node
WORKDIR /srv/app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build
CMD yarn preview