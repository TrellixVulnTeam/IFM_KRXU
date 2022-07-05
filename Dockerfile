FROM node:14 As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN rm -rf node_modules

RUN npm install

RUN npm run build

EXPOSE 3012

CMD ["node", "dist/main"]


FROM node:14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3012

CMD ["node", "dist/main"]

