const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 4100;
const db = require('./api/models');
const morgan = require('morgan');
const cors = require('cors');
// const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// load the banner
require('./config/banner');

// registering cors
var allowedOrigins = [process.env.FRONTAPP_URI];
app.use(
  cors({
    origin: function(origin, callback) {
      // allow requests with no origin only in dev mode
      // (like mobile apps or curl requests)
      if (process.env.NODE_ENV !== 'production' && !origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure body-parser ends here
app.use(morgan('dev')); // configure morgan

// if (process.env.NODE_ENV !== 'production') {
//   db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and re-sync db.');
//   });
// } else {
  db.sequelize.sync();
// }

// app.use(
//   history({
//     verbose: true,
//   })
// );
app.use('/', express.static(path.join(__dirname, 'public')));

// const equipesRouter = require('./routes/equipes'),
// joueursRouter = require('./routes/joueurs'),
// matchsRouter = require('./routes/matchs'),
// phasesRouter = require('./routes/phases'),
// tournoisRouter = require('./routes/tournois'),
// app.use('/api/equipes', equipesRouter);
// app.use('/api/joueurs', joueursRouter);
// app.use('/api/matchs', matchsRouter);
// app.use('/api/phases', phasesRouter);
// app.use('/api/tournois', tournoisRouter);

const userRoutes = require('./api/user/route/user');
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`✔ App is running on ${PORT}\n`);
});
