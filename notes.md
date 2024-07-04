# - ftp з'єднатися: 
  - ssh користувач@сервер

# - NGINX
 ## Інсталяція
```
 sudo apt update
 sudo apt install nginx
```
 ## Команди

nginx -t 			-- Перевірити конфіг файл

systemctl restart nginx		-- Перезавантажити

systemctl status nginx		-- перевірити статус

systemctl stop nginx		-- Зупинити

systemctl start nginx		-- Запустити

 ## nginx react config
 ### file path:
   *  ```/etc/nginx/enginx.conf``` (http end)
   *  ```/etc/nginx/sites-enabled/default```
   *  ```/etc/nginx/sites-available/default```

```php
server {
	listen 80 default_server;
	listen [::]:80 default_server;


	root /var/www/app;

	# Add index.php to the list if you are using PHP
	index index.html /index.html;
        error_page 500 502 503 403 504 =200 /index.html;
	server_name name;

	location / {
		try_files $uri /index.html;
	}

}

```

# Зміна паролю сервера
sudo passwd root

# - Розрахунок оперативної пам'яті на одне зображення Формула:
```width * heithg * (3 - байта для непрозорих || 4 - для зображень з прозорістю)```
 - ex: png 240/320 без прозорості буде займати у пам'яті 230400 байт / 225 кб
