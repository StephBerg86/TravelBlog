FROM node:lts as builder
WORKDIR /app
COPY . /app/
RUN npm install --omit=dev && npm run build

FROM nginx:alpine
WORKDIR /app
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /app
STOPSIGNAL SIGQUIT
