import config from './config/configuration';
import Server from './Server';

const server: Server = new Server(config);
server.bootstrap().run();
