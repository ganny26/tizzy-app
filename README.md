## Serve webpack 4 gzip file over nginx

### nginx conf.d

```

gzip  on;
server {
  listen       80;
  server_name  localhost;
    
  location / {
    gzip_static on;
    gunzip on;
    expires max;
  }

```
