export interface paths {
    "/about": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get/about"];
        put: operations["put/about"];
        post?: never;
        delete: operations["delete/about"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/articles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get/articles"];
        put?: never;
        post: operations["post/articles"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/articles/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get/articles/{id}"];
        put: operations["put/articles/{id}"];
        post?: never;
        delete: operations["delete/articles/{id}"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get/authors"];
        put?: never;
        post: operations["post/authors"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authors/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get/authors/{id}"];
        put: operations["put/authors/{id}"];
        post?: never;
        delete: operations["delete/authors/{id}"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get/categories"];
        put?: never;
        post: operations["post/categories"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get/categories/{id}"];
        put: operations["put/categories/{id}"];
        post?: never;
        delete: operations["delete/categories/{id}"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/global": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get/global"];
        put: operations["put/global"];
        post?: never;
        delete: operations["delete/global"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Upload files */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description Upload files */
            requestBody: {
                content: {
                    "multipart/form-data": {
                        /** @description The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3). */
                        path?: string;
                        /** @description The ID of the entry which the file(s) will be linked to */
                        refId?: string;
                        /** @description The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant). */
                        ref?: string;
                        /** @description The field of the entry which the file(s) will be precisely linked to. */
                        field?: string;
                        files: string[];
                    };
                };
            };
            responses: {
                /** @description response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UploadFile"][];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/upload?id={id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Upload file information */
        post: {
            parameters: {
                query: {
                    /** @description File id */
                    id: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description Upload files */
            requestBody: {
                content: {
                    "multipart/form-data": {
                        fileInfo?: {
                            name?: string;
                            alternativeText?: string;
                            caption?: string;
                        };
                        /** Format: binary */
                        files?: string;
                    };
                };
            };
            responses: {
                /** @description response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UploadFile"][];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/upload/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Get a list of files */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UploadFile"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/upload/files/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Get a specific file */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UploadFile"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Delete a file */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UploadFile"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/connect/{provider}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Login with a provider
         * @description Redirects to provider login before being redirect to /auth/{provider}/callback
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Provider name */
                    provider: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Redirect response */
                301: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/local": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Local login
         * @description Returns a jwt token and user info
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    /** @example {
                     *       "identifier": "foobar",
                     *       "password": "Test1234"
                     *     } */
                    "application/json": {
                        identifier?: string;
                        password?: string;
                    };
                };
            };
            responses: {
                /** @description Connection */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Users-Permissions-UserRegistration"];
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/local/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Register a user
         * @description Returns a jwt token and user info
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    /** @example {
                     *       "username": "foobar",
                     *       "email": "foo.bar@strapi.io",
                     *       "password": "Test1234"
                     *     } */
                    "application/json": {
                        username?: string;
                        email?: string;
                        password?: string;
                    };
                };
            };
            responses: {
                /** @description Successful registration */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Users-Permissions-UserRegistration"];
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/{provider}/callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Default Callback from provider auth */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Provider name */
                    provider: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Returns a jwt token and user info */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Users-Permissions-UserRegistration"];
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/forgot-password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Send rest password email */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    /** @example {
                     *       "email": "foo.bar@strapi.io"
                     *     } */
                    "application/json": {
                        email?: string;
                    };
                };
            };
            responses: {
                /** @description Returns ok */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @enum {string} */
                            ok?: true;
                        };
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/reset-password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Rest user password */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    /** @example {
                     *       "password": "Test1234",
                     *       "passwordConfirmation": "Test1234",
                     *       "code": "zertyoaizndoianzodianzdonaizdoinaozdnia"
                     *     } */
                    "application/json": {
                        password?: string;
                        passwordConfirmation?: string;
                        code?: string;
                    };
                };
            };
            responses: {
                /** @description Returns a jwt token and user info */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Users-Permissions-UserRegistration"];
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/change-password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update user's own password */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        password: string;
                        currentPassword: string;
                        passwordConfirmation: string;
                    };
                };
            };
            responses: {
                /** @description Returns a jwt token and user info */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Users-Permissions-UserRegistration"];
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/email-confirmation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Confirm user email */
        get: {
            parameters: {
                query?: {
                    /** @description confirmation token received by email */
                    confirmation?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Redirects to the configure email confirmation redirect url */
                301: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/send-email-confirmation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Send confirmation email */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        email?: string;
                    };
                };
            };
            responses: {
                /** @description Returns email and boolean to confirm email was sent */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            email?: string;
                            /** @enum {string} */
                            sent?: true;
                        };
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users-permissions/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get default generated permissions */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Returns the permissions tree */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            permissions?: components["schemas"]["Users-Permissions-PermissionsTree"];
                        };
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users-permissions/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List roles */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Returns list of roles */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            roles?: (components["schemas"]["Users-Permissions-Role"] & {
                                nb_users?: number;
                            })[];
                        };
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        /** Create a role */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["Users-Permissions-RoleRequest"];
            responses: {
                /** @description Returns ok if the role was create */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @enum {string} */
                            ok?: true;
                        };
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users-permissions/roles/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a role */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description role Id */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Returns the role */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            role?: components["schemas"]["Users-Permissions-Role"];
                        };
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users-permissions/roles/{role}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update a role */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description role Id */
                    role: string;
                };
                cookie?: never;
            };
            requestBody: components["requestBodies"]["Users-Permissions-RoleRequest"];
            responses: {
                /** @description Returns ok if the role was udpated */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @enum {string} */
                            ok?: true;
                        };
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        post?: never;
        /** Delete a role */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description role Id */
                    role: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Returns ok if the role was delete */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @enum {string} */
                            ok?: true;
                        };
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get list of users */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Returns an array of users */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Users-Permissions-User"][];
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        /** Create a user */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    /** @example {
                     *       "username": "foo",
                     *       "email": "foo@strapi.io",
                     *       "password": "foo-password"
                     *     } */
                    "application/json": {
                        email: string;
                        username: string;
                        password: string;
                    };
                };
            };
            responses: {
                /** @description Returns created user info */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Users-Permissions-User"] & {
                            role?: components["schemas"]["Users-Permissions-Role"];
                        };
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a user */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description user Id */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Returns a user */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Users-Permissions-User"];
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        /** Update a user */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description user Id */
                    id: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    /** @example {
                     *       "username": "foo",
                     *       "email": "foo@strapi.io",
                     *       "password": "foo-password"
                     *     } */
                    "application/json": {
                        email: string;
                        username: string;
                        password: string;
                    };
                };
            };
            responses: {
                /** @description Returns updated user info */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Users-Permissions-User"] & {
                            role?: components["schemas"]["Users-Permissions-Role"];
                        };
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        post?: never;
        /** Delete a user */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description user Id */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Returns deleted user info */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Users-Permissions-User"];
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get authenticated user info */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Returns user info */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Users-Permissions-User"];
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get user count */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Returns a number */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": number;
                    };
                };
                /** @description Error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Error: {
            data?: (Record<string, never> | Record<string, never>[]) | null;
            error: {
                status?: number;
                name?: string;
                message?: string;
                details?: Record<string, never>;
            };
        };
        AboutRequest: {
            data: {
                title?: string;
                blocks?: (components["schemas"]["SharedMediaComponent"] | components["schemas"]["SharedQuoteComponent"] | components["schemas"]["SharedRichTextComponent"] | components["schemas"]["SharedSliderComponent"])[];
                locale?: string;
                localizations?: (number | string)[];
            };
        };
        AboutListResponse: {
            data?: components["schemas"]["About"][];
            meta?: {
                pagination?: {
                    page?: number;
                    pageSize?: number;
                    pageCount?: number;
                    total?: number;
                };
            };
        };
        About: {
            id?: number;
            documentId?: string;
            title?: string;
            blocks?: (components["schemas"]["SharedMediaComponent"] | components["schemas"]["SharedQuoteComponent"] | components["schemas"]["SharedRichTextComponent"] | components["schemas"]["SharedSliderComponent"])[];
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
                id?: number;
                documentId?: string;
            };
            updatedBy?: {
                id?: number;
                documentId?: string;
            };
            locale?: string;
            localizations?: {
                id?: number;
                documentId?: string;
                title?: string;
                blocks?: (components["schemas"]["SharedMediaComponent"] | components["schemas"]["SharedQuoteComponent"] | components["schemas"]["SharedRichTextComponent"] | components["schemas"]["SharedSliderComponent"])[];
                /** Format: date-time */
                createdAt?: string;
                /** Format: date-time */
                updatedAt?: string;
                /** Format: date-time */
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: {
                    id?: number;
                    documentId?: string;
                }[];
            }[];
        };
        AboutResponse: {
            data?: components["schemas"]["About"];
            meta?: Record<string, never>;
        };
        SharedMediaComponent: {
            id?: number;
            /** @enum {string} */
            __component?: "shared.media";
            file?: {
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: unknown;
                hash?: string;
                ext?: string;
                mime?: string;
                /** Format: float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: unknown;
                related?: {
                    id?: number;
                    documentId?: string;
                }[];
                folder?: {
                    id?: number;
                    documentId?: string;
                };
                folderPath?: string;
                /** Format: date-time */
                createdAt?: string;
                /** Format: date-time */
                updatedAt?: string;
                /** Format: date-time */
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: {
                    id?: number;
                    documentId?: string;
                }[];
            };
        };
        SharedQuoteComponent: {
            id?: number;
            /** @enum {string} */
            __component?: "shared.quote";
            title?: string;
            body?: string;
        };
        SharedRichTextComponent: {
            id?: number;
            /** @enum {string} */
            __component?: "shared.rich-text";
            body?: string;
        };
        SharedSliderComponent: {
            id?: number;
            /** @enum {string} */
            __component?: "shared.slider";
            files?: {
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: unknown;
                hash?: string;
                ext?: string;
                mime?: string;
                /** Format: float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: unknown;
                related?: {
                    id?: number;
                    documentId?: string;
                }[];
                folder?: {
                    id?: number;
                    documentId?: string;
                };
                folderPath?: string;
                /** Format: date-time */
                createdAt?: string;
                /** Format: date-time */
                updatedAt?: string;
                /** Format: date-time */
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: {
                    id?: number;
                    documentId?: string;
                }[];
            }[];
        };
        ArticleRequest: {
            data: {
                title?: string;
                description?: string;
                slug?: string;
                /** @example string or id */
                cover?: number | string;
                /** @example string or id */
                author?: number | string;
                /** @example string or id */
                category?: number | string;
                blocks?: (components["schemas"]["SharedMediaComponent"] | components["schemas"]["SharedQuoteComponent"] | components["schemas"]["SharedRichTextComponent"] | components["schemas"]["SharedSliderComponent"])[];
                locale?: string;
                localizations?: (number | string)[];
            };
        };
        ArticleListResponse: {
            data?: components["schemas"]["Article"][];
            meta?: {
                pagination?: {
                    page?: number;
                    pageSize?: number;
                    pageCount?: number;
                    total?: number;
                };
            };
        };
        Article: {
            id?: number;
            documentId?: string;
            title?: string;
            description?: string;
            slug?: string;
            cover?: {
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: unknown;
                hash?: string;
                ext?: string;
                mime?: string;
                /** Format: float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: unknown;
                related?: {
                    id?: number;
                    documentId?: string;
                }[];
                folder?: {
                    id?: number;
                    documentId?: string;
                    name?: string;
                    pathId?: number;
                    parent?: {
                        id?: number;
                        documentId?: string;
                    };
                    children?: {
                        id?: number;
                        documentId?: string;
                    }[];
                    files?: {
                        id?: number;
                        documentId?: string;
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: unknown;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        /** Format: float */
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: unknown;
                        related?: {
                            id?: number;
                            documentId?: string;
                        }[];
                        folder?: {
                            id?: number;
                            documentId?: string;
                        };
                        folderPath?: string;
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        /** Format: date-time */
                        publishedAt?: string;
                        createdBy?: {
                            id?: number;
                            documentId?: string;
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** Format: email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                                id?: number;
                                documentId?: string;
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                    id?: number;
                                    documentId?: string;
                                }[];
                                permissions?: {
                                    id?: number;
                                    documentId?: string;
                                    action?: string;
                                    actionParameters?: unknown;
                                    subject?: string;
                                    properties?: unknown;
                                    conditions?: unknown;
                                    role?: {
                                        id?: number;
                                        documentId?: string;
                                    };
                                    /** Format: date-time */
                                    createdAt?: string;
                                    /** Format: date-time */
                                    updatedAt?: string;
                                    /** Format: date-time */
                                    publishedAt?: string;
                                    createdBy?: {
                                        id?: number;
                                        documentId?: string;
                                    };
                                    updatedBy?: {
                                        id?: number;
                                        documentId?: string;
                                    };
                                    locale?: string;
                                    localizations?: {
                                        id?: number;
                                        documentId?: string;
                                    }[];
                                }[];
                                /** Format: date-time */
                                createdAt?: string;
                                /** Format: date-time */
                                updatedAt?: string;
                                /** Format: date-time */
                                publishedAt?: string;
                                createdBy?: {
                                    id?: number;
                                    documentId?: string;
                                };
                                updatedBy?: {
                                    id?: number;
                                    documentId?: string;
                                };
                                locale?: string;
                                localizations?: {
                                    id?: number;
                                    documentId?: string;
                                }[];
                            }[];
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** Format: date-time */
                            createdAt?: string;
                            /** Format: date-time */
                            updatedAt?: string;
                            /** Format: date-time */
                            publishedAt?: string;
                            createdBy?: {
                                id?: number;
                                documentId?: string;
                            };
                            updatedBy?: {
                                id?: number;
                                documentId?: string;
                            };
                            locale?: string;
                            localizations?: {
                                id?: number;
                                documentId?: string;
                            }[];
                        };
                        updatedBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        locale?: string;
                        localizations?: {
                            id?: number;
                            documentId?: string;
                        }[];
                    }[];
                    path?: string;
                    /** Format: date-time */
                    createdAt?: string;
                    /** Format: date-time */
                    updatedAt?: string;
                    /** Format: date-time */
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                        id?: number;
                        documentId?: string;
                    }[];
                };
                folderPath?: string;
                /** Format: date-time */
                createdAt?: string;
                /** Format: date-time */
                updatedAt?: string;
                /** Format: date-time */
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: {
                    id?: number;
                    documentId?: string;
                }[];
            };
            author?: {
                id?: number;
                documentId?: string;
                name?: string;
                avatar?: {
                    id?: number;
                    documentId?: string;
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: unknown;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** Format: float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: unknown;
                    related?: {
                        id?: number;
                        documentId?: string;
                    }[];
                    folder?: {
                        id?: number;
                        documentId?: string;
                    };
                    folderPath?: string;
                    /** Format: date-time */
                    createdAt?: string;
                    /** Format: date-time */
                    updatedAt?: string;
                    /** Format: date-time */
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                        id?: number;
                        documentId?: string;
                    }[];
                };
                email?: string;
                articles?: {
                    id?: number;
                    documentId?: string;
                    title?: string;
                    description?: string;
                    slug?: string;
                    cover?: {
                        id?: number;
                        documentId?: string;
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: unknown;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        /** Format: float */
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: unknown;
                        related?: {
                            id?: number;
                            documentId?: string;
                        }[];
                        folder?: {
                            id?: number;
                            documentId?: string;
                        };
                        folderPath?: string;
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        /** Format: date-time */
                        publishedAt?: string;
                        createdBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        updatedBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        locale?: string;
                        localizations?: {
                            id?: number;
                            documentId?: string;
                        }[];
                    };
                    author?: {
                        id?: number;
                        documentId?: string;
                    };
                    category?: {
                        id?: number;
                        documentId?: string;
                        name?: string;
                        slug?: string;
                        articles?: {
                            id?: number;
                            documentId?: string;
                        }[];
                        description?: string;
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        /** Format: date-time */
                        publishedAt?: string;
                        createdBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        updatedBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        locale?: string;
                        localizations?: {
                            id?: number;
                            documentId?: string;
                        }[];
                    };
                    blocks?: (components["schemas"]["SharedMediaComponent"] | components["schemas"]["SharedQuoteComponent"] | components["schemas"]["SharedRichTextComponent"] | components["schemas"]["SharedSliderComponent"])[];
                    /** Format: date-time */
                    createdAt?: string;
                    /** Format: date-time */
                    updatedAt?: string;
                    /** Format: date-time */
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                        id?: number;
                        documentId?: string;
                    }[];
                }[];
                /** Format: date-time */
                createdAt?: string;
                /** Format: date-time */
                updatedAt?: string;
                /** Format: date-time */
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: {
                    id?: number;
                    documentId?: string;
                }[];
            };
            category?: {
                id?: number;
                documentId?: string;
            };
            blocks?: (components["schemas"]["SharedMediaComponent"] | components["schemas"]["SharedQuoteComponent"] | components["schemas"]["SharedRichTextComponent"] | components["schemas"]["SharedSliderComponent"])[];
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
                id?: number;
                documentId?: string;
            };
            updatedBy?: {
                id?: number;
                documentId?: string;
            };
            locale?: string;
            localizations?: {
                id?: number;
                documentId?: string;
            }[];
        };
        ArticleResponse: {
            data?: components["schemas"]["Article"];
            meta?: Record<string, never>;
        };
        AuthorRequest: {
            data: {
                name?: string;
                /** @example string or id */
                avatar?: number | string;
                email?: string;
                articles?: (number | string)[];
                locale?: string;
                localizations?: (number | string)[];
            };
        };
        AuthorListResponse: {
            data?: components["schemas"]["Author"][];
            meta?: {
                pagination?: {
                    page?: number;
                    pageSize?: number;
                    pageCount?: number;
                    total?: number;
                };
            };
        };
        Author: {
            id?: number;
            documentId?: string;
            name?: string;
            avatar?: {
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: unknown;
                hash?: string;
                ext?: string;
                mime?: string;
                /** Format: float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: unknown;
                related?: {
                    id?: number;
                    documentId?: string;
                }[];
                folder?: {
                    id?: number;
                    documentId?: string;
                    name?: string;
                    pathId?: number;
                    parent?: {
                        id?: number;
                        documentId?: string;
                    };
                    children?: {
                        id?: number;
                        documentId?: string;
                    }[];
                    files?: {
                        id?: number;
                        documentId?: string;
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: unknown;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        /** Format: float */
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: unknown;
                        related?: {
                            id?: number;
                            documentId?: string;
                        }[];
                        folder?: {
                            id?: number;
                            documentId?: string;
                        };
                        folderPath?: string;
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        /** Format: date-time */
                        publishedAt?: string;
                        createdBy?: {
                            id?: number;
                            documentId?: string;
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** Format: email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                                id?: number;
                                documentId?: string;
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                    id?: number;
                                    documentId?: string;
                                }[];
                                permissions?: {
                                    id?: number;
                                    documentId?: string;
                                    action?: string;
                                    actionParameters?: unknown;
                                    subject?: string;
                                    properties?: unknown;
                                    conditions?: unknown;
                                    role?: {
                                        id?: number;
                                        documentId?: string;
                                    };
                                    /** Format: date-time */
                                    createdAt?: string;
                                    /** Format: date-time */
                                    updatedAt?: string;
                                    /** Format: date-time */
                                    publishedAt?: string;
                                    createdBy?: {
                                        id?: number;
                                        documentId?: string;
                                    };
                                    updatedBy?: {
                                        id?: number;
                                        documentId?: string;
                                    };
                                    locale?: string;
                                    localizations?: {
                                        id?: number;
                                        documentId?: string;
                                    }[];
                                }[];
                                /** Format: date-time */
                                createdAt?: string;
                                /** Format: date-time */
                                updatedAt?: string;
                                /** Format: date-time */
                                publishedAt?: string;
                                createdBy?: {
                                    id?: number;
                                    documentId?: string;
                                };
                                updatedBy?: {
                                    id?: number;
                                    documentId?: string;
                                };
                                locale?: string;
                                localizations?: {
                                    id?: number;
                                    documentId?: string;
                                }[];
                            }[];
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** Format: date-time */
                            createdAt?: string;
                            /** Format: date-time */
                            updatedAt?: string;
                            /** Format: date-time */
                            publishedAt?: string;
                            createdBy?: {
                                id?: number;
                                documentId?: string;
                            };
                            updatedBy?: {
                                id?: number;
                                documentId?: string;
                            };
                            locale?: string;
                            localizations?: {
                                id?: number;
                                documentId?: string;
                            }[];
                        };
                        updatedBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        locale?: string;
                        localizations?: {
                            id?: number;
                            documentId?: string;
                        }[];
                    }[];
                    path?: string;
                    /** Format: date-time */
                    createdAt?: string;
                    /** Format: date-time */
                    updatedAt?: string;
                    /** Format: date-time */
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                        id?: number;
                        documentId?: string;
                    }[];
                };
                folderPath?: string;
                /** Format: date-time */
                createdAt?: string;
                /** Format: date-time */
                updatedAt?: string;
                /** Format: date-time */
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: {
                    id?: number;
                    documentId?: string;
                }[];
            };
            email?: string;
            articles?: {
                id?: number;
                documentId?: string;
                title?: string;
                description?: string;
                slug?: string;
                cover?: {
                    id?: number;
                    documentId?: string;
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: unknown;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** Format: float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: unknown;
                    related?: {
                        id?: number;
                        documentId?: string;
                    }[];
                    folder?: {
                        id?: number;
                        documentId?: string;
                    };
                    folderPath?: string;
                    /** Format: date-time */
                    createdAt?: string;
                    /** Format: date-time */
                    updatedAt?: string;
                    /** Format: date-time */
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                        id?: number;
                        documentId?: string;
                    }[];
                };
                author?: {
                    id?: number;
                    documentId?: string;
                    name?: string;
                    avatar?: {
                        id?: number;
                        documentId?: string;
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: unknown;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        /** Format: float */
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: unknown;
                        related?: {
                            id?: number;
                            documentId?: string;
                        }[];
                        folder?: {
                            id?: number;
                            documentId?: string;
                        };
                        folderPath?: string;
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        /** Format: date-time */
                        publishedAt?: string;
                        createdBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        updatedBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        locale?: string;
                        localizations?: {
                            id?: number;
                            documentId?: string;
                        }[];
                    };
                    email?: string;
                    articles?: {
                        id?: number;
                        documentId?: string;
                    }[];
                    /** Format: date-time */
                    createdAt?: string;
                    /** Format: date-time */
                    updatedAt?: string;
                    /** Format: date-time */
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                        id?: number;
                        documentId?: string;
                    }[];
                };
                category?: {
                    id?: number;
                    documentId?: string;
                    name?: string;
                    slug?: string;
                    articles?: {
                        id?: number;
                        documentId?: string;
                    }[];
                    description?: string;
                    /** Format: date-time */
                    createdAt?: string;
                    /** Format: date-time */
                    updatedAt?: string;
                    /** Format: date-time */
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                        id?: number;
                        documentId?: string;
                    }[];
                };
                blocks?: (components["schemas"]["SharedMediaComponent"] | components["schemas"]["SharedQuoteComponent"] | components["schemas"]["SharedRichTextComponent"] | components["schemas"]["SharedSliderComponent"])[];
                /** Format: date-time */
                createdAt?: string;
                /** Format: date-time */
                updatedAt?: string;
                /** Format: date-time */
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: {
                    id?: number;
                    documentId?: string;
                }[];
            }[];
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
                id?: number;
                documentId?: string;
            };
            updatedBy?: {
                id?: number;
                documentId?: string;
            };
            locale?: string;
            localizations?: {
                id?: number;
                documentId?: string;
            }[];
        };
        AuthorResponse: {
            data?: components["schemas"]["Author"];
            meta?: Record<string, never>;
        };
        CategoryRequest: {
            data: {
                name?: string;
                slug?: string;
                articles?: (number | string)[];
                description?: string;
                locale?: string;
                localizations?: (number | string)[];
            };
        };
        CategoryListResponse: {
            data?: components["schemas"]["Category"][];
            meta?: {
                pagination?: {
                    page?: number;
                    pageSize?: number;
                    pageCount?: number;
                    total?: number;
                };
            };
        };
        Category: {
            id?: number;
            documentId?: string;
            name?: string;
            slug?: string;
            articles?: {
                id?: number;
                documentId?: string;
                title?: string;
                description?: string;
                slug?: string;
                cover?: {
                    id?: number;
                    documentId?: string;
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: unknown;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** Format: float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: unknown;
                    related?: {
                        id?: number;
                        documentId?: string;
                    }[];
                    folder?: {
                        id?: number;
                        documentId?: string;
                        name?: string;
                        pathId?: number;
                        parent?: {
                            id?: number;
                            documentId?: string;
                        };
                        children?: {
                            id?: number;
                            documentId?: string;
                        }[];
                        files?: {
                            id?: number;
                            documentId?: string;
                            name?: string;
                            alternativeText?: string;
                            caption?: string;
                            width?: number;
                            height?: number;
                            formats?: unknown;
                            hash?: string;
                            ext?: string;
                            mime?: string;
                            /** Format: float */
                            size?: number;
                            url?: string;
                            previewUrl?: string;
                            provider?: string;
                            provider_metadata?: unknown;
                            related?: {
                                id?: number;
                                documentId?: string;
                            }[];
                            folder?: {
                                id?: number;
                                documentId?: string;
                            };
                            folderPath?: string;
                            /** Format: date-time */
                            createdAt?: string;
                            /** Format: date-time */
                            updatedAt?: string;
                            /** Format: date-time */
                            publishedAt?: string;
                            createdBy?: {
                                id?: number;
                                documentId?: string;
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                /** Format: email */
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                    id?: number;
                                    documentId?: string;
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: {
                                        id?: number;
                                        documentId?: string;
                                    }[];
                                    permissions?: {
                                        id?: number;
                                        documentId?: string;
                                        action?: string;
                                        actionParameters?: unknown;
                                        subject?: string;
                                        properties?: unknown;
                                        conditions?: unknown;
                                        role?: {
                                            id?: number;
                                            documentId?: string;
                                        };
                                        /** Format: date-time */
                                        createdAt?: string;
                                        /** Format: date-time */
                                        updatedAt?: string;
                                        /** Format: date-time */
                                        publishedAt?: string;
                                        createdBy?: {
                                            id?: number;
                                            documentId?: string;
                                        };
                                        updatedBy?: {
                                            id?: number;
                                            documentId?: string;
                                        };
                                        locale?: string;
                                        localizations?: {
                                            id?: number;
                                            documentId?: string;
                                        }[];
                                    }[];
                                    /** Format: date-time */
                                    createdAt?: string;
                                    /** Format: date-time */
                                    updatedAt?: string;
                                    /** Format: date-time */
                                    publishedAt?: string;
                                    createdBy?: {
                                        id?: number;
                                        documentId?: string;
                                    };
                                    updatedBy?: {
                                        id?: number;
                                        documentId?: string;
                                    };
                                    locale?: string;
                                    localizations?: {
                                        id?: number;
                                        documentId?: string;
                                    }[];
                                }[];
                                blocked?: boolean;
                                preferedLanguage?: string;
                                /** Format: date-time */
                                createdAt?: string;
                                /** Format: date-time */
                                updatedAt?: string;
                                /** Format: date-time */
                                publishedAt?: string;
                                createdBy?: {
                                    id?: number;
                                    documentId?: string;
                                };
                                updatedBy?: {
                                    id?: number;
                                    documentId?: string;
                                };
                                locale?: string;
                                localizations?: {
                                    id?: number;
                                    documentId?: string;
                                }[];
                            };
                            updatedBy?: {
                                id?: number;
                                documentId?: string;
                            };
                            locale?: string;
                            localizations?: {
                                id?: number;
                                documentId?: string;
                            }[];
                        }[];
                        path?: string;
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        /** Format: date-time */
                        publishedAt?: string;
                        createdBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        updatedBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        locale?: string;
                        localizations?: {
                            id?: number;
                            documentId?: string;
                        }[];
                    };
                    folderPath?: string;
                    /** Format: date-time */
                    createdAt?: string;
                    /** Format: date-time */
                    updatedAt?: string;
                    /** Format: date-time */
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                        id?: number;
                        documentId?: string;
                    }[];
                };
                author?: {
                    id?: number;
                    documentId?: string;
                    name?: string;
                    avatar?: {
                        id?: number;
                        documentId?: string;
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: unknown;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        /** Format: float */
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: unknown;
                        related?: {
                            id?: number;
                            documentId?: string;
                        }[];
                        folder?: {
                            id?: number;
                            documentId?: string;
                        };
                        folderPath?: string;
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        /** Format: date-time */
                        publishedAt?: string;
                        createdBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        updatedBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        locale?: string;
                        localizations?: {
                            id?: number;
                            documentId?: string;
                        }[];
                    };
                    email?: string;
                    articles?: {
                        id?: number;
                        documentId?: string;
                    }[];
                    /** Format: date-time */
                    createdAt?: string;
                    /** Format: date-time */
                    updatedAt?: string;
                    /** Format: date-time */
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                        id?: number;
                        documentId?: string;
                    }[];
                };
                category?: {
                    id?: number;
                    documentId?: string;
                    name?: string;
                    slug?: string;
                    articles?: {
                        id?: number;
                        documentId?: string;
                    }[];
                    description?: string;
                    /** Format: date-time */
                    createdAt?: string;
                    /** Format: date-time */
                    updatedAt?: string;
                    /** Format: date-time */
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                        id?: number;
                        documentId?: string;
                    }[];
                };
                blocks?: (components["schemas"]["SharedMediaComponent"] | components["schemas"]["SharedQuoteComponent"] | components["schemas"]["SharedRichTextComponent"] | components["schemas"]["SharedSliderComponent"])[];
                /** Format: date-time */
                createdAt?: string;
                /** Format: date-time */
                updatedAt?: string;
                /** Format: date-time */
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: {
                    id?: number;
                    documentId?: string;
                }[];
            }[];
            description?: string;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
                id?: number;
                documentId?: string;
            };
            updatedBy?: {
                id?: number;
                documentId?: string;
            };
            locale?: string;
            localizations?: {
                id?: number;
                documentId?: string;
            }[];
        };
        CategoryResponse: {
            data?: components["schemas"]["Category"];
            meta?: Record<string, never>;
        };
        GlobalRequest: {
            data: {
                siteName: string;
                /** @example string or id */
                favicon?: number | string;
                siteDescription: string;
                defaultSeo?: components["schemas"]["SharedSeoComponent"];
                locale?: string;
                localizations?: (number | string)[];
            };
        };
        GlobalListResponse: {
            data?: components["schemas"]["Global"][];
            meta?: {
                pagination?: {
                    page?: number;
                    pageSize?: number;
                    pageCount?: number;
                    total?: number;
                };
            };
        };
        Global: {
            id?: number;
            documentId?: string;
            siteName: string;
            favicon?: {
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: unknown;
                hash?: string;
                ext?: string;
                mime?: string;
                /** Format: float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: unknown;
                related?: {
                    id?: number;
                    documentId?: string;
                }[];
                folder?: {
                    id?: number;
                    documentId?: string;
                    name?: string;
                    pathId?: number;
                    parent?: {
                        id?: number;
                        documentId?: string;
                    };
                    children?: {
                        id?: number;
                        documentId?: string;
                    }[];
                    files?: {
                        id?: number;
                        documentId?: string;
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: unknown;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        /** Format: float */
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: unknown;
                        related?: {
                            id?: number;
                            documentId?: string;
                        }[];
                        folder?: {
                            id?: number;
                            documentId?: string;
                        };
                        folderPath?: string;
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        /** Format: date-time */
                        publishedAt?: string;
                        createdBy?: {
                            id?: number;
                            documentId?: string;
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** Format: email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                                id?: number;
                                documentId?: string;
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                    id?: number;
                                    documentId?: string;
                                }[];
                                permissions?: {
                                    id?: number;
                                    documentId?: string;
                                    action?: string;
                                    actionParameters?: unknown;
                                    subject?: string;
                                    properties?: unknown;
                                    conditions?: unknown;
                                    role?: {
                                        id?: number;
                                        documentId?: string;
                                    };
                                    /** Format: date-time */
                                    createdAt?: string;
                                    /** Format: date-time */
                                    updatedAt?: string;
                                    /** Format: date-time */
                                    publishedAt?: string;
                                    createdBy?: {
                                        id?: number;
                                        documentId?: string;
                                    };
                                    updatedBy?: {
                                        id?: number;
                                        documentId?: string;
                                    };
                                    locale?: string;
                                    localizations?: {
                                        id?: number;
                                        documentId?: string;
                                    }[];
                                }[];
                                /** Format: date-time */
                                createdAt?: string;
                                /** Format: date-time */
                                updatedAt?: string;
                                /** Format: date-time */
                                publishedAt?: string;
                                createdBy?: {
                                    id?: number;
                                    documentId?: string;
                                };
                                updatedBy?: {
                                    id?: number;
                                    documentId?: string;
                                };
                                locale?: string;
                                localizations?: {
                                    id?: number;
                                    documentId?: string;
                                }[];
                            }[];
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** Format: date-time */
                            createdAt?: string;
                            /** Format: date-time */
                            updatedAt?: string;
                            /** Format: date-time */
                            publishedAt?: string;
                            createdBy?: {
                                id?: number;
                                documentId?: string;
                            };
                            updatedBy?: {
                                id?: number;
                                documentId?: string;
                            };
                            locale?: string;
                            localizations?: {
                                id?: number;
                                documentId?: string;
                            }[];
                        };
                        updatedBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        locale?: string;
                        localizations?: {
                            id?: number;
                            documentId?: string;
                        }[];
                    }[];
                    path?: string;
                    /** Format: date-time */
                    createdAt?: string;
                    /** Format: date-time */
                    updatedAt?: string;
                    /** Format: date-time */
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                        id?: number;
                        documentId?: string;
                    }[];
                };
                folderPath?: string;
                /** Format: date-time */
                createdAt?: string;
                /** Format: date-time */
                updatedAt?: string;
                /** Format: date-time */
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: {
                    id?: number;
                    documentId?: string;
                }[];
            };
            siteDescription: string;
            defaultSeo?: components["schemas"]["SharedSeoComponent"];
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
                id?: number;
                documentId?: string;
            };
            updatedBy?: {
                id?: number;
                documentId?: string;
            };
            locale?: string;
            localizations?: {
                id?: number;
                documentId?: string;
                siteName?: string;
                favicon?: {
                    id?: number;
                    documentId?: string;
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: unknown;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** Format: float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: unknown;
                    related?: {
                        id?: number;
                        documentId?: string;
                    }[];
                    folder?: {
                        id?: number;
                        documentId?: string;
                    };
                    folderPath?: string;
                    /** Format: date-time */
                    createdAt?: string;
                    /** Format: date-time */
                    updatedAt?: string;
                    /** Format: date-time */
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                        id?: number;
                        documentId?: string;
                    }[];
                };
                siteDescription?: string;
                defaultSeo?: components["schemas"]["SharedSeoComponent"];
                /** Format: date-time */
                createdAt?: string;
                /** Format: date-time */
                updatedAt?: string;
                /** Format: date-time */
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: {
                    id?: number;
                    documentId?: string;
                }[];
            }[];
        };
        GlobalResponse: {
            data?: components["schemas"]["Global"];
            meta?: Record<string, never>;
        };
        SharedSeoComponent: {
            id?: number;
            metaTitle?: string;
            metaDescription?: string;
            shareImage?: {
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: unknown;
                hash?: string;
                ext?: string;
                mime?: string;
                /** Format: float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: unknown;
                related?: {
                    id?: number;
                    documentId?: string;
                }[];
                folder?: {
                    id?: number;
                    documentId?: string;
                };
                folderPath?: string;
                /** Format: date-time */
                createdAt?: string;
                /** Format: date-time */
                updatedAt?: string;
                /** Format: date-time */
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: {
                    id?: number;
                    documentId?: string;
                }[];
            };
        };
        UploadFile: {
            id?: number;
            name?: string;
            alternativeText?: string;
            caption?: string;
            /** Format: integer */
            width?: number;
            /** Format: integer */
            height?: number;
            formats?: number;
            hash?: string;
            ext?: string;
            mime?: string;
            /** Format: double */
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: Record<string, never>;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
        };
        "Users-Permissions-Role": {
            id?: number;
            name?: string;
            description?: string;
            type?: string;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
        };
        "Users-Permissions-User": {
            /** @example 1 */
            id?: number;
            /** @example foo.bar */
            username?: string;
            /** @example foo.bar@strapi.io */
            email?: string;
            /** @example local */
            provider?: string;
            /** @example true */
            confirmed?: boolean;
            /** @example false */
            blocked?: boolean;
            /**
             * Format: date-time
             * @example 2022-06-02T08:32:06.258Z
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @example 2022-06-02T08:32:06.267Z
             */
            updatedAt?: string;
        };
        "Users-Permissions-UserRegistration": {
            /** @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c */
            jwt?: string;
            user?: components["schemas"]["Users-Permissions-User"];
        };
        "Users-Permissions-PermissionsTree": {
            [key: string]: {
                /** @description every controller of the api */
                controllers?: {
                    [key: string]: {
                        [key: string]: {
                            enabled?: boolean;
                            policy?: string;
                        };
                    };
                };
            };
        };
    };
    responses: never;
    parameters: never;
    requestBodies: {
        "Users-Permissions-RoleRequest": {
            content: {
                /** @example {
                 *       "name": "foo",
                 *       "description": "role foo",
                 *       "permissions": {
                 *         "api::content-type.content-type": {
                 *           "controllers": {
                 *             "controllerA": {
                 *               "find": {
                 *                 "enabled": true
                 *               }
                 *             }
                 *           }
                 *         }
                 *       }
                 *     } */
                "application/json": {
                    name?: string;
                    description?: string;
                    type?: string;
                    permissions?: components["schemas"]["Users-Permissions-PermissionsTree"];
                };
            };
        };
    };
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "get/about": {
        parameters: {
            query?: {
                /** @description Sort by attributes ascending (asc) or descending (desc) */
                sort?: string;
                /** @description Return page/pageSize (default: true) */
                "pagination[withCount]"?: boolean;
                /** @description Page number (default: 0) */
                "pagination[page]"?: number;
                /** @description Page size (default: 25) */
                "pagination[pageSize]"?: number;
                /** @description Offset value (default: 0) */
                "pagination[start]"?: number;
                /** @description Number of entities to return (default: 25) */
                "pagination[limit]"?: number;
                /** @description Fields to return (ex: title,author) */
                fields?: string;
                /** @description Relations to return */
                populate?: string;
                /** @description Filters to apply */
                filters?: {
                    [key: string]: unknown;
                };
                /** @description Locale to apply */
                locale?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AboutResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "put/about": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AboutRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AboutResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "delete/about": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": number;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "get/articles": {
        parameters: {
            query?: {
                /** @description Sort by attributes ascending (asc) or descending (desc) */
                sort?: string;
                /** @description Return page/pageSize (default: true) */
                "pagination[withCount]"?: boolean;
                /** @description Page number (default: 0) */
                "pagination[page]"?: number;
                /** @description Page size (default: 25) */
                "pagination[pageSize]"?: number;
                /** @description Offset value (default: 0) */
                "pagination[start]"?: number;
                /** @description Number of entities to return (default: 25) */
                "pagination[limit]"?: number;
                /** @description Fields to return (ex: title,author) */
                fields?: string;
                /** @description Relations to return */
                populate?: string;
                /** @description Filters to apply */
                filters?: {
                    [key: string]: unknown;
                };
                /** @description Locale to apply */
                locale?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ArticleListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "post/articles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ArticleRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ArticleResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "get/articles/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ArticleResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "put/articles/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ArticleRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ArticleResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "delete/articles/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": number;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "get/authors": {
        parameters: {
            query?: {
                /** @description Sort by attributes ascending (asc) or descending (desc) */
                sort?: string;
                /** @description Return page/pageSize (default: true) */
                "pagination[withCount]"?: boolean;
                /** @description Page number (default: 0) */
                "pagination[page]"?: number;
                /** @description Page size (default: 25) */
                "pagination[pageSize]"?: number;
                /** @description Offset value (default: 0) */
                "pagination[start]"?: number;
                /** @description Number of entities to return (default: 25) */
                "pagination[limit]"?: number;
                /** @description Fields to return (ex: title,author) */
                fields?: string;
                /** @description Relations to return */
                populate?: string;
                /** @description Filters to apply */
                filters?: {
                    [key: string]: unknown;
                };
                /** @description Locale to apply */
                locale?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthorListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "post/authors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AuthorRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthorResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "get/authors/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthorResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "put/authors/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AuthorRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthorResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "delete/authors/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": number;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "get/categories": {
        parameters: {
            query?: {
                /** @description Sort by attributes ascending (asc) or descending (desc) */
                sort?: string;
                /** @description Return page/pageSize (default: true) */
                "pagination[withCount]"?: boolean;
                /** @description Page number (default: 0) */
                "pagination[page]"?: number;
                /** @description Page size (default: 25) */
                "pagination[pageSize]"?: number;
                /** @description Offset value (default: 0) */
                "pagination[start]"?: number;
                /** @description Number of entities to return (default: 25) */
                "pagination[limit]"?: number;
                /** @description Fields to return (ex: title,author) */
                fields?: string;
                /** @description Relations to return */
                populate?: string;
                /** @description Filters to apply */
                filters?: {
                    [key: string]: unknown;
                };
                /** @description Locale to apply */
                locale?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CategoryListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "post/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CategoryRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CategoryResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "get/categories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CategoryResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "put/categories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CategoryRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CategoryResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "delete/categories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": number;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "get/global": {
        parameters: {
            query?: {
                /** @description Sort by attributes ascending (asc) or descending (desc) */
                sort?: string;
                /** @description Return page/pageSize (default: true) */
                "pagination[withCount]"?: boolean;
                /** @description Page number (default: 0) */
                "pagination[page]"?: number;
                /** @description Page size (default: 25) */
                "pagination[pageSize]"?: number;
                /** @description Offset value (default: 0) */
                "pagination[start]"?: number;
                /** @description Number of entities to return (default: 25) */
                "pagination[limit]"?: number;
                /** @description Fields to return (ex: title,author) */
                fields?: string;
                /** @description Relations to return */
                populate?: string;
                /** @description Filters to apply */
                filters?: {
                    [key: string]: unknown;
                };
                /** @description Locale to apply */
                locale?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GlobalResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "put/global": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GlobalRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GlobalResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    "delete/global": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": number;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
}
