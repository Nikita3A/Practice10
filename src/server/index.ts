import http from 'http';
import events = require('./events');
import { app } from './server';

const port = app.get('port');

events.bind(http.createServer(app).listen(port), port);

