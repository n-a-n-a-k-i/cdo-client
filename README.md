# ПУО

Проверка устройств на объектах

## Переменные среды

Переменные среды описать в файле `.env` в корне приложения:

```dotenv
REACT_APP_SERVER_URL=http://localhost:1337

REACT_APP_NAV_MENU_WIDTH=240
```

## Запуск

Установить `pm2`:

```shell
pm2 serve build 5003 --spa --name cdo-client
```
