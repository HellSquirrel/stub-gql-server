import http from 'http';
import {createServer} from 'http';

import app from './server';

const server = http.createServer(app);
let currentApp = app;

const PORT = process.env.PORT || '3000';
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

if (module.hot) {
  module.hot.accept(['./server'], () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
