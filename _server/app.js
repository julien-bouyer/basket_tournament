'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    equipesRouter = require('./routes/equipes'),
    joueursRouter = require('./routes/joueurs'),
    matchsRouter = require('./routes/matchs'),
    phasesRouter = require('./routes/phases'),
    tournoisRouter = require('./routes/tournois'),
    usersRouter = require('./routes/users'),
    cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 9009);
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, DELETE");
    next();
});

app.use('/api/equipes', equipesRouter);
app.use('/api/joueurs', joueursRouter);
app.use('/api/matchs', matchsRouter);
app.use('/api/phases', phasesRouter);
app.use('/api/tournois', tournoisRouter);
app.use('/api/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(app.get('port'), function () {
    console.log('✔Express server listening on http://localhost:%d/', app.get('port'));
});

