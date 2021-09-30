import { createConnection, getRepository } from "typeorm";
import { User } from "./models/user";

(async () => {
  const connection = await createConnection({
    type: 'mysql',
    database: 'test',
    username: 'root',
    synchronize: true,
    logging: true,
    logger: 'file',
    entities: ['src/models/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
  });

  const user = await getRepository(User).findOne({ email: 'test@email.com' }, { relations: ['roles'] });

  console.log(user);
})();
