<p align="center">
    <img src="src/assets/images/logo.png" alt="Image" width="400" height="400">
</p>

# TSRepoSearch

**TSRepoSearch** — это веб-приложение, которое позволяет искать репозитории на GitHub. Результаты сортируются по количеству звезд (по убыванию). Приложение построено с использованием TypeScript, React и Redux.

## Установка

Для того чтобы запустить приложение локально, выполните следующие шаги:

1. Клонируйте репозиторий:

```bash
git clone https://github.com/fedorov0av/TSRepoSearch.git
```

2. Перейдите в папку проекта:

```bash
cd TSRepoSearch
```

### Запуск с помощью Docker:

1. Убедитесь, что у вас установлен Docker и Docker Compose на вашем компьютере. Вы можете скачать их с официальных сайтов:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

2. Соберите и запустите контейнеры с помощью Docker Compose:

```bash
docker-compose up --build
```

3. После успешного запуска приложение будет доступно по адресу: [http://localhost](https://localhost)

### Запуск с помощью NPM:

1. Установите зависимости:

```bash
npm install
```

2. Запустите приложение:

```bash
npm start
```

3. Далее выбрать один из режимов запуска:

- Запустить проект в режиме разработки с помощью Vite:

```bash
npm run dev
```

- Собрать проект с использованием TypeScript и Vite:

```bash
npm run build
```

- Запустить линтинг с использованием ESLint для проверки кода на ошибки:

```bash
npm run lint
```

- Просмотр собранного проекта в режиме предпросмотра:

```bash
npm run preview
```

4. После запуска приложение будет доступно по указаному в терминале адресу, к примеру: [http://localhost:5173](https://localhost:5173)
