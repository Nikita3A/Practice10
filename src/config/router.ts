import { object } from '@hapi/joi';
import express, { Response, Request } from 'express';
import http from 'http';
import UserRouter = require('../components/User/router');

/**
     * @function
     * @param {express.Application} app
     * @summary init Application router
     * @returns void
     */
function init(app: any): void {
    const router = express.Router();

    /**
     * Forwards any requests to the /v1/users URI to UserRouter.
     * @name /v1/users
     * @function
     * @inner
     * @param {string} path - Express path
     * @param {callback} middleware - Express middleware.
     */
    app.use('/v1/users', UserRouter.router);

    /**
     * @description No results returned mean the object is not found
     * @function
     * @inner
     * @param {callback} middleware - Express middleware.
     */
    app.use((req: Request, res: Response) => {
        res.status(404).send(app.STATUS_CODES[404]);
    });

    /**
     * @function
     * @inner
     * @param {express.Router}
     */
    app.use(router);
}

export { init };
