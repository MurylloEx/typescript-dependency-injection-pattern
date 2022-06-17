import { Injector } from '../Injector';
import { Service } from '../Decorators';
import { ServiceContainer } from '../Container';

@Service()
class DatabaseService {

  insert(table: string, data: { [column: string]: string | number }) {
    console.log(`writing to ${table}:`);
    console.log(data);
  }
}

@Service()
class LoggerService {

  constructor(protected readonly dbHandler: DatabaseService) {}

  info(message: string) {
    this.dbHandler.insert('log', {
      level: 200,
      message: message
    });
  }
}

@Service()
class UserService {

  constructor(private readonly logger: LoggerService) {}

  editUser(userId: number) {
    this.logger.info(`User ${userId} has been edited`);
  }
}

const container = ServiceContainer.create().providers([
  LoggerService,
  UserService,
  DatabaseService
]);

Injector.create(container).resolveAll();

const userService: UserService = container.get<UserService>(UserService);

userService.editUser(3);
