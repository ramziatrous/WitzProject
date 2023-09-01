FROM node:18.16.1 as build

WORKDIR usr/src/app
COPY ./ /usr/src/app
RUN npm install && npm install @angular/cli
RUN npm run build

FROM nginx:latest
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/frontend/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
