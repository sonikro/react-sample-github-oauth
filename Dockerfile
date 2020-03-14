FROM node:12 as builder
COPY package.json .
COPY yarn* ./
RUN yarn
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=builder build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /etc/nginx
EXPOSE 80