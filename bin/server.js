const socketApp = require('../socket_app');
const apiApp = require('../api_app');

socketApp().then(app => app.listen(
  3001, () => { console.log('Socket started at 3001'); },
)).catch((e) => console.log(e));

apiApp().then(app => app.listen(
  3005, () => { console.log('API started at 3005'); },
)).catch((e) => console.log(e));