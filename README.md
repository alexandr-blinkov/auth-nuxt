# nuxt-fakeAuth
Авторизация и регистрация в Nuxt приложении, с использованием json-server

## Установка

```bash
# Установка необходимых компонентов
$ npm install

# Для запуска приложения по адресу localhost:3000
$ npm run dev

# Для запуска JSON server по адресу localhost:3001
$ npm run server
```

## Описание 
### О программе 
Приложение разработано с использованием фреймворка Nuxt.js. В нем реализованы возможности авторизации и регистрации пользователей. После аутентификации пользователю доступна следующая информация: имя, адрес электронной почты, дата и время регистрации.

### Запуск
Для корректного функционирования приложения, необходимо запустить и приложение, и сервер.
```bash
$ npm run dev
$ npm run server
```

### Тестовые данные
В приложении уже зарегистрированы следующие пользователи:
```
Логин: alexandr.ivanov@mail.ru
Пароль: 123456
```
```
Логин: mixail.petrov@mail.ru
Пароль: 123456
```
```
Логин: andrey.sidorov@mail.ru
Пароль: 123456
```
```
Логин: nik.vasilyev@mail.ru
Пароль: 123456
```

### Фейковый сервер
В качестве fake API сервера используется модуль json-server-auth для добавления функционала аутентификации JWT и контроля доступа.
* ```server/index.js``` - настройки сервера
* ```server/db/db.json``` - база данных

### Особенности
* Использование middleware для защиты роутов - авторизированные пользователи не могут зайти на страницы ```auth/login``` и ```auth/registration```
* Использование front-end валидации для форм регистрации и авторизации - если поля пусты или не соответствуют правилам заполнения кнопка входа или регистрации будет неактивной
* Для генерации id пользователя используется UUID
* Пароль пользователя хранится в базе данных в зашифрованном виде

### Ключевые модули
* Axios
* Vuex
* Auth
