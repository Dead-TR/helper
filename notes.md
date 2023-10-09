### ftp з'єднатися: 
  - ssh користувач@сервер

### Розрахунок оперативної пам'яті на одне зображення Формула:
```width * heithg * (3 - байта для непрозорих || 4 - для зображень з прозорістю)```
 - ex: png 240/320 без прозорості буде займати у пам'яті 230400 байт / 225 кб

### nginx react config
```php
server {
	listen 80 default_server;
	listen [::]:80 default_server;


	root /var/www/app;

	# Add index.php to the list if you are using PHP
	index index.html /index.html;

	server_name name;

	location / {
		try_files $uri /index.html;
	}

}

```