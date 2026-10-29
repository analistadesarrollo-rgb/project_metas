FROM node:22-bookworm

WORKDIR /app

COPY . /app

RUN apt-get update && apt-get install -y --no-install-recommends libaio1 && \
    rm -rf /var/lib/apt/lists/*

# Configurar Oracle Instant Client
RUN mkdir -p /opt/oracle && \
    mv /app/instantclient_11_2 /opt/oracle && \
    mkdir -p /opt/oracle/instantclient_11_2/network/admin && \
    cd /opt/oracle/instantclient_11_2 && \
    ln -s libclntsh.so.11.1 libclntsh.so && \
    ln -s libocci.so.11.1 libocci.so && \
    mv /app/tnsnames.ora /opt/oracle/instantclient_11_2/network/admin && \
    echo "/opt/oracle/instantclient_11_2" > /etc/ld.so.conf.d/oracle-instantclient.conf && \
    ldconfig

ENV DB_ORACLE_DIR=/opt/oracle/instantclient_11_2 \
    DB_ORACLE_DIR_TNS=/opt/oracle/instantclient_11_2/network/admin \
    LD_LIBRARY_PATH=/opt/oracle/instantclient_11_2

EXPOSE 80

CMD ["npm", "start"]
