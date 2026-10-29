FROM node:20-bookworm

WORKDIR /app

COPY . /app

# Instalar dependencias del sistema necesarias para Oracle Client
RUN apt-get update && apt-get install -y libaio1 && rm -rf /var/lib/apt/lists/*

# Configurar Oracle Instant Client
RUN mkdir -p /opt/oracle && \
    mv /app/instantclient_11_2 /opt/oracle && \
    cd /opt/oracle/instantclient_11_2 && \
    ln -s libclntsh.so.11.1 libclntsh.so && \
    ln -s libocci.so.11.1 libocci.so && \
    echo "/opt/oracle/instantclient_11_2" > /etc/ld.so.conf.d/oracle-instantclient.conf && \
    ldconfig

# Configurar variables de entorno para que Node encuentre las librerías de Oracle
ENV LD_LIBRARY_PATH=/opt/oracle/instantclient_11_2:$LD_LIBRARY_PATH
ENV PATH=/opt/oracle/instantclient_11_2:$PATH

EXPOSE 80

CMD ["npm", "start"]
