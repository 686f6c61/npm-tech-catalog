FROM node:22-alpine AS build
WORKDIR /app
COPY demo/package*.json ./
RUN npm install
COPY demo/ .
RUN node build.js

FROM nginx:alpine
COPY --from=build /app/index.html /usr/share/nginx/html/
COPY --from=build /app/catalog-bundle.js /usr/share/nginx/html/ 2>/dev/null || true
RUN printf 'server {\n  listen 80;\n  server_name _;\n  root /usr/share/nginx/html;\n  index index.html;\n  server_tokens off;\n  gzip on;\n  gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript image/svg+xml;\n  location / {\n    try_files $uri $uri/ /index.html;\n  }\n  add_header X-Frame-Options "SAMEORIGIN" always;\n  add_header X-Content-Type-Options "nosniff" always;\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
