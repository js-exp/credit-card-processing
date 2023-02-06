
import app from './server.js';
import { connect } from './src/database/conn.js';

const port = process.env.port || 5000;

connect().then(() => {
  try {
    app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));
  } catch (error) {
    console.log(`Can not connect to the server: ${JSON.stringify(error)}`);
  }
}).catch((error) => {
  console.log(`Invalid database connection: ${JSON.stringify(error)}`);
});
