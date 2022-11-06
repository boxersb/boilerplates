import {PromiseRejection, PromiseResolution, PromiseResult} from 'promise.allsettled'
export {}

// TechDebt: Remove once project is migrated to ES2020
// Global type aliases are required because the promise.allsettled shim doesn't match the types of the actual
// ES2020 implementation
declare global {
    export type PromiseFulfilledResult<T> = PromiseResolution<T>
    export type PromiseRejectedResult = PromiseRejection<unknown>
    export type PromiseSettledResult<T> = PromiseResult<T, unknown>

    export class PromiseConstructor {
        /**
         * Creates a Promise that is resolved with an array of results when all
         * of the provided Promises resolve or reject.
         * @param values An array of Promises.
         * @returns A new Promise.
         */
        allSettled<T extends readonly unknown[] | readonly [unknown]>(
            values: T,
        ): Promise<{-readonly [P in keyof T]: PromiseSettledResult<T[P] extends PromiseLike<infer U> ? U : T[P]>}>

        /**
         * Creates a Promise that is resolved with an array of results when all
         * of the provided Promises resolve or reject.
         * @param values An array of Promises.
         * @returns A new Promise.
         */
        // eslint-disable-next-line no-dupe-class-members
        allSettled<T>(values: Iterable<T>): Promise<PromiseSettledResult<T extends PromiseLike<infer U> ? U : T>[]>
    }
}
