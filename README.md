<h1 align="center">TypeScript Dependency Injection Pattern</h1>
<p align="center">
  <img src="https://i.imgur.com/kpnFpjv.png" width="120" alt="TypeScript Logo" />
</p>
<h2 align="center">This project was created due to necessity in a library that uses Dependency Injection.</h2>
<p align="center">This repository contains a project with dependency injection pattern.</p>
<p align="center">
  <img src="https://badgen.net/badge/lang/TypeScript/purple?icon=label"/> 
  <img src="https://badgen.net/badge/license/MIT/green?icon=label"/>
  <img src="https://badgen.net/badge/authors/Muryllo/red?icon=label"/>
  <img src="https://badgen.net/badge/pattern/Dependency%20Injection/orange?icon=label"/>
</p>

Para utilizá-lo você necessitará da versão mais recente do Node.js e do npm.

## Instalação

```sh
git clone https://github.com/MurylloEx/typescript-dependency-injection-pattern.git
npm install
```

``Declaring services``
```ts
@Service()
class DatabaseService {

  constructor() {}

  insert(table: string, data: { [column: string]: string | number }) {
    console.log(`writing to ${table}:`);
    console.log(data);
  }
}

@Service()
class LoggerService {

  constructor(private dbService: DatabaseService) {}

  info(message: string) {
    this.dbService.insert('log', {
      level: 200,
      message: message
    });
  }
}

@Service()
class UserService {

  constructor(private logger: LoggerService) {}

  editUser(userId: number) {
    this.logger.info(`User ${userId} has been edited`);
  }
}
```

``Loading and using services``
```ts
const container = ServiceContainer.create().providers([
  LoggerService,
  UserService,
  DatabaseService
]);

Injector.create(container).resolveAll();

const userService: UserService = container.get<UserService>(UserService);

userService.editUser(3);
```

## Metadados

```
Muryllo Pimenta – muryllo.pimenta@upe.br
```

Distribuído sobre a licença MIT. Veja ``LICENSE`` para mais informações.

## Contribuição

1. Fork it (<https://github.com/MurylloEx/typescript-dependency-injection-pattern/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
