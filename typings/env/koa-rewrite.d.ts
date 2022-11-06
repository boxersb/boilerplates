declare module 'koa-rewrite' {
    /**
     * Rwrite `src` to `dst`.
     *
     * @param {String|RegExp} src
     * @param {String} dst
     * @return {Function}
     * @api public
     */
    declare function rewrite(
        src: string | RegExp,
        dst: string,
    ): Application.Middleware<StateT & NewStateT, ContextT & NewContextT>

    export = rewrite
}
