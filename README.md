## Serve webpack 4 gzip file over nginx [![Build Status](https://travis-ci.org/ganny26/tizzy-app.svg?branch=master)](https://travis-ci.org/ganny26/tizzy-app)
 
### nginx conf.d

```
gzip  on;
server {
  listen       80;
  server_name  127.0.0.1;
    
  location / {
    gzip_static on;
    gunzip on;
    expires max;
  }
```
