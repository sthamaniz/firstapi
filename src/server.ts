import app from "./app";
import config from './config/config';

app.listen(config.app.port, () => {
  console.log(`Express server listening on port : ${config.app.port}`);
});