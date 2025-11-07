FROM nginx:alpine

# Remove a config padrão e adiciona a sua
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copia o index.html da raiz do projeto
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80
