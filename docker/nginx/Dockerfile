FROM nginx:1.17-alpine

RUN adduser -u 1000 -S www-data
RUN rm /etc/nginx/conf.d/default.conf

COPY vhost.conf /etc/nginx/conf.d/vhost.tmpl
CMD /bin/sh -c "envsubst '\$APP_NAME \$DOMAIN \$SERVER_PORT \$CLIENT_PORT' < \
    /etc/nginx/conf.d/vhost.tmpl > \
    /etc/nginx/conf.d/vhost.conf && \
    exec nginx -g 'daemon off;'"

EXPOSE 80
EXPOSE 443
