# 🤖 Gama Lab Playlist Service API
## Setup Docker
🐳 - [Docker windows](https://docs.docker.com/desktop/install/windows-install/)

```bash
# run this command to execute the container from the docker-compose.yml
$ docker-compose up -d
```

## Installation

```bash
$ yarn
```

## DB migration 
```bash
$ yarn db:migrate
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Other commands
```bash
# visualize the database on browser
$ yarn db:show
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
