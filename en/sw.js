/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in self)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.5.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheFallbackPlugin": () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            response = await handler.fetch(new Request(request, {
                integrity: integrityInRequest || integrityInManifest,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            if (integrityInManifest && noIntegrityConflict) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/workbox-precaching/_types.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/_types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:6.5.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:6.5.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": () => (/* binding */ defaultMethod),
/* harmony export */   "validMethods": () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:6.5.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"db95b0d3c33375355ec1217e52427fc6","url":"2015/05/02/defect-about-java-programmer-from-programming-thinking/defect-about-java-programmer-from-programming-thinking/index.html"},{"revision":"09045cae013e759c8cabd1b98ce26741","url":"2015/10/04/class-conflict-check/index.html"},{"revision":"f1807c60f6cda754ab95fa497f2e4ec8","url":"2016/04/09/toss-about-raspberrypi/index.html"},{"revision":"7f632e4f3904ceabf0aba122602fbd98","url":"2017/02/01/create-my-own-ioc/index.html"},{"revision":"caab5ef2e47d784b6f299b1dced32f11","url":"2018/05/25/redis-login-limitation/index.html"},{"revision":"b0e60b3eca66d6580f514b3ba7841166","url":"2019/09/27/web-framework-design/index.html"},{"revision":"bc689d223f6089a3cd234941ef0ca227","url":"2021/09/20/face-recognition-detection-ocr/index.html"},{"revision":"1d06d750acf79af447bae8039cf54860","url":"2021/11/04/make-database-db/index.html"},{"revision":"17ab43fbe156849ddda49a94f97443f4","url":"2022/05/04/mobile-technology/index.html"},{"revision":"ccb0df9476ce713f820bfc6d8801e054","url":"2022/06/11/web-dev-history/index.html"},{"revision":"06513daeb1f2d0be69a1a0d454fa27ec","url":"2022/11/10/bt-torrent-download/index.html"},{"revision":"b61f124750ab12ada4026ee1a7d99af6","url":"2022/12/12/writing-tech-doc/index.html"},{"revision":"89f22e2fa3cd50cf0442adf092d249af","url":"2023/01/01/food-machine-learning/index.html"},{"revision":"4e7efaa40b2967359b286fe4ef87f4e4","url":"2023/04/20/docusaurus-github-pages-blog/index.html"},{"revision":"a5abe519dfe79b5011dbbda0f8564cdb","url":"404.html"},{"revision":"6710766090f2541fa5a32a2235f1d5df","url":"about/index.html"},{"revision":"751892e27ba7754f9c79613dca9821b9","url":"archive/index.html"},{"revision":"8fb5ad1708d52b931ce9254017563f5f","url":"assets/css/styles.d08d09a2.css"},{"revision":"79a38e1bae492b7d5937c23f4ffbadcd","url":"assets/js/00124c0c.a2137afb.js"},{"revision":"5f31829a49cc75e751f7f5b06974a26f","url":"assets/js/004ad85b.10a8cecf.js"},{"revision":"7475897635ccd26de045812f565432cd","url":"assets/js/010de7ee.87f3b54d.js"},{"revision":"38ee6273cdc4fabb49a3b4429b9277eb","url":"assets/js/0163a65d.0be3ebff.js"},{"revision":"6f3bf909ce0231c257d32dbd59f5ff3f","url":"assets/js/01a85c17.2a568168.js"},{"revision":"3239354025c390326beb568ce44bab9b","url":"assets/js/0396db49.9bcceaf7.js"},{"revision":"eb11d845a46a88f8591062c17e1e4b18","url":"assets/js/04f9190d.7e95e784.js"},{"revision":"7f3d73d63dadf4b8b74501542cdb02c0","url":"assets/js/062d019a.d8548eba.js"},{"revision":"ad25411a041a82fd315c7c76ef6e514c","url":"assets/js/06dd3c88.d62417cd.js"},{"revision":"b51d8e3558ee9195b3bae02eec761108","url":"assets/js/073cc43c.bbb7bb6f.js"},{"revision":"3613e5916f56cdcfb3ce731033494b5f","url":"assets/js/07858f61.2cb2d5ba.js"},{"revision":"16958fc593606c3631b35bbaa437886e","url":"assets/js/084bae2b.7d732b64.js"},{"revision":"7ae7080e00d3fad295fd9640e2accc54","url":"assets/js/08bd099b.c7ce6ace.js"},{"revision":"8415054a84418bc5402f4b3e5f9a22d2","url":"assets/js/09dc0972.d92a71a9.js"},{"revision":"7de150a96800183d01c1941ba3928a1f","url":"assets/js/0b7f88ae.0c90df1b.js"},{"revision":"e82666b1330e8f9c712aba9dd20b63bc","url":"assets/js/0b961411.fd140108.js"},{"revision":"8efec1b447d1a7613d2f2c33bd4fb3f3","url":"assets/js/0c6a0bdd.8e23df79.js"},{"revision":"6dc92e2b0dfe1f03bcd7318fdfcf1382","url":"assets/js/0cc564ba.28ad0238.js"},{"revision":"fea61a88e594e61f826bfa2d9ab24192","url":"assets/js/0d3c0202.05006a53.js"},{"revision":"b309f60da782e16519200d751df81d49","url":"assets/js/0e1994a7.f3c81f39.js"},{"revision":"2cbfeaf80168ad30c06b9d217b42df93","url":"assets/js/0e384e19.59a97343.js"},{"revision":"34f486868b3d0c6c1f353f7f2ba2a36b","url":"assets/js/0f80f551.dbbe49c8.js"},{"revision":"fdadee6e52bf63b18b096446217ee70f","url":"assets/js/0fc9d000.09278454.js"},{"revision":"3161531d41ee580e030d57fc2d54b7f3","url":"assets/js/1013.81cf3b89.js"},{"revision":"45b66ec5e541ba6ec1d24978e6891d5a","url":"assets/js/10848213.2ef6440a.js"},{"revision":"95aacd7bc834416de089f388dec59e46","url":"assets/js/112102ee.aa5c6253.js"},{"revision":"5643af418c01bbe76067b0b0bd08cbad","url":"assets/js/11881d0d.3fb64f74.js"},{"revision":"cc0a7abc1ba8144fc48ae1aea2d01b9f","url":"assets/js/12060eb5.d7bd13b5.js"},{"revision":"47f65998cd6dab48b7f3f29d83cebe85","url":"assets/js/13885b9d.5d9f8d7f.js"},{"revision":"b1ca56af26c47a578c20bc5cff7775bd","url":"assets/js/1451ccbe.a330cef9.js"},{"revision":"c7f666ddb2aa681ecaaa62c29ff88381","url":"assets/js/14b3201b.a8aeb0b3.js"},{"revision":"2c41b5a08710c772a204e4000e191273","url":"assets/js/15b483f2.2c273e05.js"},{"revision":"ca8d43d5d2f531cbedb11d164b2b58c6","url":"assets/js/16da4947.170baccc.js"},{"revision":"22165d8d84f581a9906448c2a8e67a5a","url":"assets/js/17625f7b.0d07a461.js"},{"revision":"3fb7acc4a9496c785b22c8f31eb00507","url":"assets/js/17896441.059e8692.js"},{"revision":"8722830ca562041caf0282fb3015a9d0","url":"assets/js/183c72c9.8edeb262.js"},{"revision":"0157ceac4b968ab60a5a2eb9f513f825","url":"assets/js/193108da.7fe8185a.js"},{"revision":"34bc4afee4f999787a7f8661323cb9b6","url":"assets/js/194d4dab.798f38dc.js"},{"revision":"6bde027f5a112973b7c8890a031d8448","url":"assets/js/1a4e3797.4e95fbc7.js"},{"revision":"e512d092d3ca3a30f0eca0b71055116e","url":"assets/js/1abae8b9.bf796ee2.js"},{"revision":"44c21788ac62b4066a31830bcdbf08eb","url":"assets/js/1b39ae9a.ae5e55df.js"},{"revision":"82e20081dac91c709fe318548ae300fb","url":"assets/js/1be78505.7b57d07e.js"},{"revision":"2f33ae84afbfa607c4c15c7b91f11096","url":"assets/js/1ddeba0f.ffa8e57c.js"},{"revision":"bcb72fa6d411ff9cf0f2979437ca8a33","url":"assets/js/1e724d3e.eee5283b.js"},{"revision":"8738bf4286a4012fd6edfcd551ad6ac2","url":"assets/js/1f391b9e.4977a328.js"},{"revision":"cb96559519966d4203f73f44c32b0d4b","url":"assets/js/1f56379c.f3f8308a.js"},{"revision":"302742116ffbdacfa95d1a9c85d2861b","url":"assets/js/1fafcb16.f68445e3.js"},{"revision":"7093e8f0d4a2d60bb62df62f586f29b0","url":"assets/js/1fc0faf7.516c2e51.js"},{"revision":"e35b027705a8398d5ff53b2fa1754db5","url":"assets/js/200330e6.d20aa7fc.js"},{"revision":"9102547700f7a5c6cd411a3d98c5673d","url":"assets/js/2020764d.cb471e94.js"},{"revision":"b1185c719d6f4d1623eb70733092e77c","url":"assets/js/20b5fe61.43be250f.js"},{"revision":"d82f74800848be69fc9167ab776d8858","url":"assets/js/2153.88e59033.js"},{"revision":"dac7bedf7e8fc505b5951cf07a3cbe6b","url":"assets/js/21815b40.c32df452.js"},{"revision":"5af034fcb538fb67f6dd4ea9a6a88f91","url":"assets/js/22477e4d.5710e57f.js"},{"revision":"9cf9a5c4bde97d7110d8f9adb0d89857","url":"assets/js/2316e402.78ce5b44.js"},{"revision":"604de5ae11a0600d87ea3fca6bcac22a","url":"assets/js/23ca167b.5500491a.js"},{"revision":"1e7d9491b028bdb262294f031c0cd763","url":"assets/js/24bfbcb9.2478208b.js"},{"revision":"391f246ee5c87cbf135e169a36312472","url":"assets/js/24e6d345.a19f3f57.js"},{"revision":"e182d9d1f544255dcfbd662344cc92de","url":"assets/js/254f8b80.4ac01f4f.js"},{"revision":"6a89bd1f113f1cea8f06210fe23b1432","url":"assets/js/263abf7f.2d462775.js"},{"revision":"78b7b327fa0d846d624819c8acc3da7f","url":"assets/js/27de6c46.447adb5c.js"},{"revision":"825a8b514f85fd532855d840fca4f3c6","url":"assets/js/27f40dd1.b654fcec.js"},{"revision":"88ecc1dd13c597dab140c2bb183f3421","url":"assets/js/282d1b11.2920c732.js"},{"revision":"1037fc73e588f263a2d46a8b95b1566b","url":"assets/js/28444e7b.24f2bd11.js"},{"revision":"bff7520cf321bbcfb80e661e1670fa4a","url":"assets/js/2900efd3.57cc02a8.js"},{"revision":"7526cfa59222c12a4a0494318a5730e5","url":"assets/js/293b43e6.e1dc3d47.js"},{"revision":"d79a10388014a56df4cc02c12b4638f8","url":"assets/js/2963df94.3b3a63b6.js"},{"revision":"deb18b3367a68bfd641434a19f08eb0d","url":"assets/js/297450db.1d463964.js"},{"revision":"252825649aca4838bd137ba450d0f657","url":"assets/js/2b348008.c5fa85c0.js"},{"revision":"411f537cac43751d839983a4ba5c9c1f","url":"assets/js/2b996dff.ebacd735.js"},{"revision":"b5ef191699fc24711ad2b7b51cd6e25d","url":"assets/js/2c72ae7b.ceac4a0f.js"},{"revision":"7c32aaf199257ff6ef3f4c98412716d6","url":"assets/js/2c8a992c.57a3ac49.js"},{"revision":"7ae2327d4a06b903dc1a0b748580108f","url":"assets/js/2d7e66af.2143c097.js"},{"revision":"b411f61d7df2cca52ab00ef44576c539","url":"assets/js/2e06076e.deaee317.js"},{"revision":"3bee96aeb52ac43dc51bb2d8966414f8","url":"assets/js/2e0fa9ff.a16d23cf.js"},{"revision":"0540f589e0b687dc90ffd74d4870602a","url":"assets/js/2e167373.05d9c508.js"},{"revision":"7842d3a41fc9378815819ac43bee166f","url":"assets/js/2e68304d.e32b31d1.js"},{"revision":"d6010ccb79eed0454a3e0e207f08dd7d","url":"assets/js/2e991137.daf367ed.js"},{"revision":"afabc712da66629bc1ff6ad670aa0faf","url":"assets/js/2f244b30.5b11329f.js"},{"revision":"d83a43c6606cf2fb6e5adc03afbb3bdf","url":"assets/js/2fcf0fac.4f1ef164.js"},{"revision":"817c97b32622a1e6d48e44f24ecb18c8","url":"assets/js/303e3bd4.13f2633b.js"},{"revision":"048340220cdca533dbdd5985d6fcbf2d","url":"assets/js/30a29d29.c714a58e.js"},{"revision":"13ca7762c182ef4d93e0bd540eef36ef","url":"assets/js/31178139.ebd797b0.js"},{"revision":"d5775a72d1c788e1cb4e617388c3b933","url":"assets/js/312d5b36.80bd8c92.js"},{"revision":"54ac369eba09c43de0e9d383254a455e","url":"assets/js/324edd98.5300e880.js"},{"revision":"5df3d2eccb276155b1b4e17901c5772a","url":"assets/js/34dabafd.4269d31d.js"},{"revision":"7a039aea4cd76c7394e8eadd2d922f33","url":"assets/js/3501.87912c49.js"},{"revision":"299e5d46c0225d3de5cf1919634f2134","url":"assets/js/35537470.703ef783.js"},{"revision":"1240763cbc920ad879336e72bf2a7cbf","url":"assets/js/35edc5c9.6d04de51.js"},{"revision":"f4db8a5ed802138fa9241a7ef279c828","url":"assets/js/363.df93e03b.js"},{"revision":"97f371af8b87149de82fca3fcf655341","url":"assets/js/3634cef6.dece52dc.js"},{"revision":"ea8289ace3e453ec6e36cbe863e27cb4","url":"assets/js/3720c009.f2a3616d.js"},{"revision":"62b35e568e665044d2981f001b71ae0a","url":"assets/js/37bfe27b.8163b75f.js"},{"revision":"560a63482bbb47b803474ef8049e4eef","url":"assets/js/37dac02a.14db8159.js"},{"revision":"cc34b4253a268f8fea28dfda369f23b4","url":"assets/js/384a71bf.bd0d95d5.js"},{"revision":"d7c1f90ba3aad77a5ff34b368c19ceee","url":"assets/js/3898c07a.5a8979d0.js"},{"revision":"1286b0143aa3a3823301557517cec610","url":"assets/js/3a404452.2b345fb8.js"},{"revision":"b58d77c6195ec0b89a3133eeccb31803","url":"assets/js/3a66e6b0.15615a3b.js"},{"revision":"87926a1ee3f7176759e5e4b0dc31581d","url":"assets/js/3a7de7fa.4f25a63f.js"},{"revision":"694ac2c06f51731527b33bb309a281de","url":"assets/js/3b4dfa8f.7329a9fb.js"},{"revision":"3c82838f79649a2f52724a539161df42","url":"assets/js/3d1f9260.48cd00e5.js"},{"revision":"9681a5983f38c8c6bb46481100b6171f","url":"assets/js/3edcb100.541be713.js"},{"revision":"127e312e0c749a05987cb5b2a24e3882","url":"assets/js/4248.df66ba45.js"},{"revision":"6b106e365ade67bd65b72a5486637f6f","url":"assets/js/426a06e0.15064b7a.js"},{"revision":"1c08f953636faf0fe5f3a795a6a02ee8","url":"assets/js/43043529.99615079.js"},{"revision":"f9bf7a1e1df6955be56dfc09e5f38e60","url":"assets/js/43c9379d.6cd641f0.js"},{"revision":"6733716668b213c019690c7f5ab59fca","url":"assets/js/4494e42c.5770c86b.js"},{"revision":"37a7b2b172bdf2ff68e2a08dc170d906","url":"assets/js/45cf6035.20bcdc95.js"},{"revision":"a1ac073772f7f718731f16249071b65f","url":"assets/js/4783af5e.d92bae73.js"},{"revision":"2a2ff2ea234902f022dd6030ceed4a74","url":"assets/js/479db5f6.f4062ec8.js"},{"revision":"fd656b3cc705ffb9b6653d286599e23d","url":"assets/js/4818fd9e.b6aa92eb.js"},{"revision":"ce4a3b497b9cd75205086507bc9d226b","url":"assets/js/4941ba5d.18f01605.js"},{"revision":"9a27fd04dd11b0087920c2c94ab44aa5","url":"assets/js/4aa221c3.db4c8809.js"},{"revision":"9b0bd306814800f1789e8c2e8fcc17de","url":"assets/js/4b57ab0f.6594bd1c.js"},{"revision":"7a29f6eb2d7103370d492fc9af55bea1","url":"assets/js/4cddadae.783f9f85.js"},{"revision":"228f9a8d893136ca5b8824dd229b7a25","url":"assets/js/4e565ec7.5eebbb2e.js"},{"revision":"589fc628025e1d9807bceb8d8b447080","url":"assets/js/4edfaad4.e8173f6b.js"},{"revision":"f9b28bdb68dd9967bc9c622289935c01","url":"assets/js/4ee51898.6b65921b.js"},{"revision":"f929cbb88c929a45f614774d73044db3","url":"assets/js/4f58a341.9477c8af.js"},{"revision":"9fb841afa697b7323eb50e46468f54de","url":"assets/js/50022963.fbb62d7b.js"},{"revision":"103c911ba41c9cbe6b71695af80f69a2","url":"assets/js/5036a9f0.d96f8cba.js"},{"revision":"7cd44163ad5644c4c349a8da693cbaf6","url":"assets/js/5131.c7cf0938.js"},{"revision":"eb0c9a8a138b068d4986d2aafb67e9b5","url":"assets/js/513da4ef.c9261c2e.js"},{"revision":"8b469032fa5cb83c56dd617d9b624713","url":"assets/js/51a807fa.9516252e.js"},{"revision":"03df36e8ad23ef126ee7b594251995c5","url":"assets/js/537e98a5.ac8f3490.js"},{"revision":"528627a6e274331578cbe238ce85488c","url":"assets/js/53919598.0fe27da0.js"},{"revision":"9f08a1a0f0f71e3f43c3a7cc53eb9827","url":"assets/js/55960ee5.5b97303c.js"},{"revision":"8d7acca166bbd10e36e04815424dc7e1","url":"assets/js/56578cd5.398d82f6.js"},{"revision":"1f85d6dcbf731e7a75f9037fdc8a2a94","url":"assets/js/58511d66.b40134a4.js"},{"revision":"beb556b76f73db8b6eb1ecdabe744964","url":"assets/js/58bcec53.b972e957.js"},{"revision":"9845a56b375a96c3aa66623a2074e75d","url":"assets/js/5944.df7a4877.js"},{"revision":"d5bb79f45f3bcc792731b8ee0aa00f6e","url":"assets/js/5bd4a77b.1db3ede9.js"},{"revision":"5d805b08e9c437d669c84e158c0e50c3","url":"assets/js/5cbc303d.961fe96d.js"},{"revision":"40502bbd4c50bedc1363b8939f9c94bd","url":"assets/js/5cc59f42.2fdd7676.js"},{"revision":"f94cb47dc672a9fec92a181739fec1d3","url":"assets/js/5ccfe7b6.0f07b48f.js"},{"revision":"066718d6de4db8131ee76c4c8f6b66de","url":"assets/js/5d2ee7de.14174f7c.js"},{"revision":"e0f91cbe536cc69e43c4b847df313187","url":"assets/js/5e758a96.d308fa0b.js"},{"revision":"df7f09b7f824802583382622990d5582","url":"assets/js/5eb92cdc.821c87be.js"},{"revision":"3d84861683eee32bd4c7456e0fe75707","url":"assets/js/5ec0c20b.c16e3fce.js"},{"revision":"47c89b30cb1bbd665a2a99b540c70c8f","url":"assets/js/5f49d032.040363b2.js"},{"revision":"3b6bb25ec79fd3741453449bed5cb949","url":"assets/js/5f6ca2d4.c5fb7b28.js"},{"revision":"190dc13f5326d77a570daa8bce96e45f","url":"assets/js/5faa7a88.86450e88.js"},{"revision":"28643f4292ce10c4b2a38dc08bab09b4","url":"assets/js/6036e0a3.1aa5192c.js"},{"revision":"69163639f21557baca79d7b9b803d396","url":"assets/js/63b9fc3d.ab29cc0c.js"},{"revision":"a413240dcec7648069b889ae2fb401da","url":"assets/js/6441.449db14e.js"},{"revision":"6d267c0f6be272426b088b248f28fd3f","url":"assets/js/65c532cf.e70aa029.js"},{"revision":"b290da0e3dc439c41558812b4605af5f","url":"assets/js/66e005cb.56488245.js"},{"revision":"f6d84baa34918f541172902cf1939486","url":"assets/js/6780.a14ec251.js"},{"revision":"6ddc3915a8363b6b2011b63bbb326d4e","url":"assets/js/67b34bc3.520be023.js"},{"revision":"a8be529f57b163a0ff2bbd399389a18f","url":"assets/js/6875c492.78354b4b.js"},{"revision":"c120f9f8f571ac47dfdd795519b527b2","url":"assets/js/68e5b04a.284696c4.js"},{"revision":"e2fcb8f759c327d65eec1cec73d91261","url":"assets/js/6945.f52c5157.js"},{"revision":"61dd2d41652f9adb1567b6d2a658a0dd","url":"assets/js/69bf6ac6.a48e67fc.js"},{"revision":"62a587615640e1ef0f5b5655e3c664ec","url":"assets/js/6a073a76.33fa12da.js"},{"revision":"5b5df5819f0dc4e1e2172cdfb6b4be64","url":"assets/js/6a5dc382.a51b41aa.js"},{"revision":"6bbf0d9a6910afa9b3d5bf92b652b01f","url":"assets/js/6c2fe172.4a2af431.js"},{"revision":"48fefc451476f4ab67bb1fa5e8150d6f","url":"assets/js/6cf45b45.27af9c7c.js"},{"revision":"15a88d445f2bdc8b8e73e7440c6f1048","url":"assets/js/6dc1fadf.4c05a84d.js"},{"revision":"bcf8d59facb6bb37d9712a9092f5ef93","url":"assets/js/6ffb9e72.4e401ada.js"},{"revision":"d83469c026faa045a47cea5010d2711c","url":"assets/js/711b58c5.e5d47dab.js"},{"revision":"3a5ee4cc25f95a2047dfe202f6403621","url":"assets/js/7266d6d8.ad1de803.js"},{"revision":"6ed23bddd4c41fcee42647acfb27d660","url":"assets/js/729cc395.a84f2923.js"},{"revision":"64aecd88bdd181e0822259789325124a","url":"assets/js/7343d66b.00094f55.js"},{"revision":"554a844ba381db82d7e90f16e5fea16e","url":"assets/js/73bd83c5.3ce39dce.js"},{"revision":"7ff5914b7a936e5a70ba9e383f0e995e","url":"assets/js/73be5bbf.f7bed4a6.js"},{"revision":"0f33304a8e8e0d0d8871ea0cf2f9e7b9","url":"assets/js/75697e17.93d55788.js"},{"revision":"73da3ba5287a8d6def0b2ac2a0bdb5ef","url":"assets/js/778b85c7.6c06c6ad.js"},{"revision":"979ca3733f5f041f758575e851cbcfc6","url":"assets/js/789df689.e1391648.js"},{"revision":"c448117e0c1c58746dffbb81baebc92f","url":"assets/js/78ac55b0.56967967.js"},{"revision":"d415252583facc911a95615240d64a04","url":"assets/js/7a3c83a3.da0bf0b8.js"},{"revision":"a6cfd52ae714ab1ecdf9b9d8610d6bac","url":"assets/js/7bcd96ce.036d6c0c.js"},{"revision":"7ca446f7d10d632f2dd2f0a938fff07e","url":"assets/js/7c9131ed.3d1427de.js"},{"revision":"78dbc7b694b9b8e8e9109db0c8553a84","url":"assets/js/7cc21c6e.e6a1723e.js"},{"revision":"db5f9a87e408437d8f68ea4382ec3184","url":"assets/js/7e39416f.8dc479c5.js"},{"revision":"910cc7fddfb8dba3c2cf9edf65c0fb45","url":"assets/js/7f0b81db.25640d5b.js"},{"revision":"05ccf6bb5d526f40ba956bdf1b6ac6da","url":"assets/js/80a1bc03.0f86650b.js"},{"revision":"3c4e87643afb99357e5cb61b87bc5650","url":"assets/js/814f3328.432dd5f8.js"},{"revision":"307035ee1f40df05456b515981eafcc5","url":"assets/js/82704cce.7a691571.js"},{"revision":"7bca340d5a5eaf488418165169406d7e","url":"assets/js/83c704e1.1b7bd6a8.js"},{"revision":"7bd3b522c14d1ffeeccc1746d5c850e2","url":"assets/js/852b01d2.e764a7bd.js"},{"revision":"13f7500789e6212f94f1df64b4236c44","url":"assets/js/878bbbc7.0b790c1b.js"},{"revision":"c79dce7290cf256e16ccca953fca0015","url":"assets/js/87a1fa0e.05ca8207.js"},{"revision":"a5e9e0b5f400ef7c03bf6a2c8c544de4","url":"assets/js/8869a078.3e7662fc.js"},{"revision":"f4d76118134d784c18d806adae04c650","url":"assets/js/88ff6e96.0b88c618.js"},{"revision":"8d31866515de2b5198caf2b083406d49","url":"assets/js/8cc26a95.e5e9e179.js"},{"revision":"f26dc8a447f68fdebc055e466c6cb0ed","url":"assets/js/8d1b3e58.dfab897a.js"},{"revision":"4e62a5a9c198beba3d3e3ac2ce6fb212","url":"assets/js/8d3cf0b8.61decb3b.js"},{"revision":"223f44f628b73faa42765eb77c1cb93d","url":"assets/js/8d78f997.26b28b56.js"},{"revision":"d2ff4b6374a4fa1ab4117dddc51b1bf7","url":"assets/js/8d9fb551.ff99bd60.js"},{"revision":"9738df8b6b818d20160881c5077275b5","url":"assets/js/8db22de9.ca4edab2.js"},{"revision":"f4f8764b619711d13537c0456ba3648c","url":"assets/js/8e488b3c.8d48ac6e.js"},{"revision":"1e9fac4847cb7d0f3af91960ef2099be","url":"assets/js/8e98feea.34c25bec.js"},{"revision":"4571d89e623ae44830fec6fd0046bb62","url":"assets/js/8f2ca4e9.16855c78.js"},{"revision":"a609015f631fe18648997d7f6092e896","url":"assets/js/8f865487.6568e12b.js"},{"revision":"5eb59919ba62f4e17b65ee6a5ec022e4","url":"assets/js/8fbbbc0e.559dec3e.js"},{"revision":"d1ba7fda5b64bb7dc915952334a1b2cf","url":"assets/js/904.390936e5.js"},{"revision":"3a6edb857fc5fe64c71575ada39edc29","url":"assets/js/904.557aad31.js"},{"revision":"d90b364007055239a6cd750b18371ae8","url":"assets/js/92825809.1bb8c400.js"},{"revision":"62fb739fd7cc57d2eb8f29c62886184e","url":"assets/js/935f2afb.128d76fa.js"},{"revision":"d6183e74a1f74460be8635218986ddf2","url":"assets/js/93e7f4e9.24b01788.js"},{"revision":"cbda676794e85e9d04c54336bbf7ac59","url":"assets/js/954a9796.ec04bf73.js"},{"revision":"3366211410463a57607f34890fcf5d61","url":"assets/js/9556081d.85335037.js"},{"revision":"52ea5471d3f29b3d1662dde7439e186d","url":"assets/js/955f7394.fc3f8fb4.js"},{"revision":"f9ac9161f9da913d60c6125d862d20bc","url":"assets/js/95eab07d.f4f8190e.js"},{"revision":"fa2cf4ce0ae27779ee04c270059140f6","url":"assets/js/9644.2626d4a3.js"},{"revision":"83301b57ccac3ea096e6ba06bc0aa746","url":"assets/js/964adafc.88247ade.js"},{"revision":"d741b855621a47f3d2d6656e36247621","url":"assets/js/9771871a.80ecb103.js"},{"revision":"e3e5bb7948274d626a04f275b13d9d80","url":"assets/js/97b470da.113d98e8.js"},{"revision":"94c230ea89792397441a7f7a890e6a77","url":"assets/js/988b5c24.d23c68fb.js"},{"revision":"86c764d06009d698f06b1ff6178d95c7","url":"assets/js/9acffaba.de9c1073.js"},{"revision":"248afea69a70a5814db936f20b13a109","url":"assets/js/9ca25557.714d6ce9.js"},{"revision":"55f42113efd2224664e95c2bc60996fe","url":"assets/js/9e4087bc.c7409ad7.js"},{"revision":"3b47a259846d582314be2da1c6d020cd","url":"assets/js/9e920dbd.c7dd8be7.js"},{"revision":"c7ee830c73887ed9c0056b1e3c9ae21d","url":"assets/js/a06a2b3c.d79d895b.js"},{"revision":"3d9bf9e45157dd2163cac832ad5f4641","url":"assets/js/a10dd25b.4df53d90.js"},{"revision":"d2b92f63b16ca1d84df2117bd80f824c","url":"assets/js/a29f262d.f0f901c9.js"},{"revision":"bce4b6e7b456d26e00f89167152f47bb","url":"assets/js/a518efd0.7709f86f.js"},{"revision":"93ca593de00238c4edb9d57d3c8a5532","url":"assets/js/a554310a.9a234f6a.js"},{"revision":"538e42874c207d8d09e05eb49b100df9","url":"assets/js/a5579ff7.824ad539.js"},{"revision":"10faa2af53ab891115695dc1ef00651a","url":"assets/js/a61bfd26.9c1b785c.js"},{"revision":"d8d86ff25e72f1b982e86b7d7d0a9895","url":"assets/js/a6aa9e1f.7a94c62f.js"},{"revision":"856d72537a9c5cf6fe9fcd557f39dcfe","url":"assets/js/a791cf25.6b9917bf.js"},{"revision":"4d0b64efff6fdf0b450e72c531d50f72","url":"assets/js/a9206568.4e4210e0.js"},{"revision":"88e8c5b7be4ad8dca0cf0ff052b55533","url":"assets/js/a9b5716d.6288235a.js"},{"revision":"8f2d13e9c136a7790b92b7baff2da06d","url":"assets/js/aabf448f.5717a9f4.js"},{"revision":"66469e2a1ce5f5bd8e0b637d0f82da14","url":"assets/js/ac1036a5.3fc7f911.js"},{"revision":"4ab31d85d4788251262d52ebd5587ffa","url":"assets/js/ad45da60.807b25ec.js"},{"revision":"c4296cf280422ba0033720be2e140c54","url":"assets/js/b034da26.110daab0.js"},{"revision":"2469b6661fa67236e200955a6b219859","url":"assets/js/b1384383.34d5e6f8.js"},{"revision":"41a81cdcf6ade2bc52a4106e19589cc1","url":"assets/js/b1d458d7.1a7f4235.js"},{"revision":"47a46f5892c77644677eb8d4c8436dae","url":"assets/js/b298269f.da878e00.js"},{"revision":"30315c25ce6a4583a8af96f7132708ed","url":"assets/js/b318e391.7e106407.js"},{"revision":"8f029eaac50c76c504b995397f905d27","url":"assets/js/b3948558.a95b3778.js"},{"revision":"c675db60bda7698ca35a84ec4b80d46a","url":"assets/js/ba8a721c.941a7366.js"},{"revision":"f01d6715be5616a5f5dbc3fc538c04fc","url":"assets/js/bb0d99e2.eacbd7f0.js"},{"revision":"0601addb9eb379a0163c56a537c3949b","url":"assets/js/bc8d5bf2.cd02af54.js"},{"revision":"bca52d81b8f8734f724bef6dbc4a0bcf","url":"assets/js/bd3bc6a7.7984b30f.js"},{"revision":"370265f9671881fbc6f392f27d70171e","url":"assets/js/be28b83d.fa0fd3db.js"},{"revision":"d354839f2a1a121df564d669367157f6","url":"assets/js/bf134ccd.f6d87eef.js"},{"revision":"f72ff526e59676760c960f2daf10622b","url":"assets/js/c03469f9.7a623faa.js"},{"revision":"6007b28a41cd5b5a620abca8936f951a","url":"assets/js/c0a72016.903226a2.js"},{"revision":"186e93aca7c0eec486f7609391e08b08","url":"assets/js/c100b4f8.99d49614.js"},{"revision":"9170441277ad5b1f9b47f666efd40da1","url":"assets/js/c13fd9cc.3cbb9016.js"},{"revision":"8ff16502b263a1bacba3ab0ec64d6c5d","url":"assets/js/c1ff1519.dbb73ce6.js"},{"revision":"021192f909a6828afb768a3d278b86c7","url":"assets/js/c2deafe5.5123ff88.js"},{"revision":"1ab54572a223e615fb6e2be053eba9b4","url":"assets/js/c309a594.65ff21aa.js"},{"revision":"6ff522575f28c1064eea36fb9133ac47","url":"assets/js/c4821769.763a4fa7.js"},{"revision":"bc17c70dd5645c1418980711acbef53f","url":"assets/js/c5ae5a27.e2f88756.js"},{"revision":"79bd5b2d3cb9156e999ee34a471e6246","url":"assets/js/c643ca05.100f9ab3.js"},{"revision":"5a440f12cf27cbe0744cabec03281a2f","url":"assets/js/c6db63dd.30f4b51b.js"},{"revision":"3d52c2e78a8e7fd9f2d04dbfaca4c536","url":"assets/js/c6e50282.a865d59b.js"},{"revision":"2e7bf43aff153df8d23cb59ca6cf96c1","url":"assets/js/c702c133.c80f6a7c.js"},{"revision":"dd4eb86cc501fb4d9815437a9ffbc164","url":"assets/js/c71e59d2.fb927161.js"},{"revision":"9357ee0c04eb933f6cbdcb90824e567a","url":"assets/js/c8e03ed9.c9a62f9c.js"},{"revision":"7703ee26cdf116dc3757120e36585b60","url":"assets/js/c9358a5c.906e29fb.js"},{"revision":"4a09058c51e4aaffdd5e496b60632b15","url":"assets/js/c9c3511c.03713b77.js"},{"revision":"2d7fecfbd90ebec340db8003005975e0","url":"assets/js/ca0d7869.ad210bc0.js"},{"revision":"c2fb1abbe6a36f17a916fa316a8663d5","url":"assets/js/ca4df7c5.1762d8d5.js"},{"revision":"367dae4f5b20f2716223805ebf15aa55","url":"assets/js/ca76e87d.7ed067b9.js"},{"revision":"5598937cf8b8be80b2163cd43985b5f3","url":"assets/js/ca7d2748.61671111.js"},{"revision":"f4f582043ab1afdf8af9993099c515f3","url":"assets/js/caec3843.2228291e.js"},{"revision":"c805bf5dc04f6e4ff4fcb463f5b07993","url":"assets/js/cba9cab1.99ed8021.js"},{"revision":"4b6eb9c355fcebb3df6a4365c981e615","url":"assets/js/cc377055.aba8606d.js"},{"revision":"9468f292e1fc7f4a675f14d59f1825ff","url":"assets/js/cc7c2f17.ea7673f8.js"},{"revision":"f15ea2b9cf15b7db73479ed92215a200","url":"assets/js/ccc49370.3bfc1abd.js"},{"revision":"12a80c3263e7b5e15c2f6ec58f9f42e2","url":"assets/js/cd21ed90.41718460.js"},{"revision":"9c303c9c37264cf636d6edba106747bd","url":"assets/js/cdc7b331.0bbd1cc6.js"},{"revision":"dc4928a1e7423090576a0c42b9fede3a","url":"assets/js/ceec8bf9.f1fe37df.js"},{"revision":"5e809cec1a2ee5d33ae207033aa0a803","url":"assets/js/d099080d.66864d65.js"},{"revision":"b6afd5857d483f4661c001dc10dec222","url":"assets/js/d1982e7c.cc2fbe0b.js"},{"revision":"48e3967b338bd6189ceeddd284af580a","url":"assets/js/d1fb7c20.340e30d6.js"},{"revision":"a334957396d35976c36c6ea518e2777d","url":"assets/js/d23687cc.f1f0d61f.js"},{"revision":"41cfda719db7cda1b9be623768ff6015","url":"assets/js/d401c919.c001159b.js"},{"revision":"dacb5691d77832de961000336692f4c1","url":"assets/js/d4465409.a6abc60c.js"},{"revision":"7cf01bde1cc81b0b3a1193716f07df00","url":"assets/js/d5d54a37.1f9e0d7f.js"},{"revision":"6deac80d33297d03c766e0852dee2da5","url":"assets/js/d6687d0b.cd291b28.js"},{"revision":"c432cd4c0440a463de6894f196c20028","url":"assets/js/d6ed17c6.bb3777c7.js"},{"revision":"a47c7eea1ae21636f042e3929ab096dc","url":"assets/js/d7f6d233.8d82fd95.js"},{"revision":"1af3d519e356347db726073c53dcb0ad","url":"assets/js/d8d47d44.157e5b45.js"},{"revision":"41794ac7057629c3d4d775b44a05e4cc","url":"assets/js/d9ba9cf2.d9d4b471.js"},{"revision":"444350517d55b1c8564326a266d2d560","url":"assets/js/da2e5c19.b4ab4655.js"},{"revision":"d81554223788fc914a66cc5b95f9de9a","url":"assets/js/dd02458c.cf66342a.js"},{"revision":"78962ed15efcbfd4f5396eae6397497d","url":"assets/js/dd1db7bb.0bab7df2.js"},{"revision":"9f621f97ef45571d1e5d9c1e7c83bfd3","url":"assets/js/dd453a5b.9cf9095c.js"},{"revision":"782ee69fddc46c3d5173c90a3bb13891","url":"assets/js/de170726.8cc89eda.js"},{"revision":"17c235a89a792f626b102ed09c00dc3a","url":"assets/js/df203c0f.7e4571f9.js"},{"revision":"40112b0af1cb0cc4f02a67a3709313bd","url":"assets/js/df468bd5.0e93fed6.js"},{"revision":"f1c754b3e4008f964bddc870846324ff","url":"assets/js/dfcbddc7.6967da1a.js"},{"revision":"fbdd429f85d6de26b8780eb46a8d4227","url":"assets/js/dfe1150f.ab08fb2b.js"},{"revision":"23fad7354aaed0547164a7a5f6b5d203","url":"assets/js/e01ae958.562961de.js"},{"revision":"34473581a0667882c1d118f2f7bc1e14","url":"assets/js/e02998a4.dcc02852.js"},{"revision":"505bc6705757a483e74bcfd042665f62","url":"assets/js/e0507655.8428d160.js"},{"revision":"765e5e0babd63a78c5f8c5da17950bf6","url":"assets/js/e0e57bed.ea488ae9.js"},{"revision":"1e921a1cf0b05bb1744137f82572ec77","url":"assets/js/e169ae7a.3f5c46b8.js"},{"revision":"11c1844ecea1c5d71f5c01deabae8b40","url":"assets/js/e1a7ef0d.7cdbd139.js"},{"revision":"4023a998880b80307edb38df46b6e57d","url":"assets/js/e25eb4bb.b6a2947b.js"},{"revision":"0411f6030b5932a7fa33229652cc0bf4","url":"assets/js/e272d464.d7b08a78.js"},{"revision":"1961e7025ef99814333cd0367d6ead89","url":"assets/js/e2a0ad98.189ab719.js"},{"revision":"a0b318e159bd0248c461888c422b512b","url":"assets/js/e32e55f7.40dd61fe.js"},{"revision":"69fc5968b778b7f4e7eea159cd4c246c","url":"assets/js/e3ebd011.56cf95f0.js"},{"revision":"90f769c45dfac768953fd2d49bebd994","url":"assets/js/e3fbd4b0.90bfd693.js"},{"revision":"2d0358bc464fe79af5d6fa5b8cc0b7af","url":"assets/js/e4726719.d0d62a52.js"},{"revision":"1c2dee8f09d85dff1829c56313832e4a","url":"assets/js/e517a08c.6ea1ffff.js"},{"revision":"38182e1b5632a1aecff7969192ad7cca","url":"assets/js/e53ca3df.4f7b5ff1.js"},{"revision":"8732d90a665ea2c7877e02a29d32b2ed","url":"assets/js/e5f5b6a0.aa288b19.js"},{"revision":"c95d644f52cd11b6ea09e8d18f056b40","url":"assets/js/e6cd77b4.96fce3f7.js"},{"revision":"cc4b701d659691cb304b94e53f6b2dca","url":"assets/js/e6fda746.da1c4b75.js"},{"revision":"c14c1be4eab0ec047ac75f7302fc5bac","url":"assets/js/e8182122.2a1ee4b0.js"},{"revision":"eae6d48c29269451be72d81487b85064","url":"assets/js/e8e6b3ff.5d6ac580.js"},{"revision":"79349a071dd186765bf38c0811df0e1c","url":"assets/js/e9bb9c21.7f3f2d6d.js"},{"revision":"82d1f097349687580a887a1763bc54b8","url":"assets/js/ea241b5b.1a3abd52.js"},{"revision":"83ba2804568b1265aca7c845aecdd250","url":"assets/js/ed327e4f.7521f943.js"},{"revision":"96f76bdd6804a4f168918b10952da1ee","url":"assets/js/ee0f6c68.f1ef3c09.js"},{"revision":"0b7eb0a5c86959cb47b698f7de2f1632","url":"assets/js/ee7d5f53.11dbdcf9.js"},{"revision":"b3d7f1e4696a0750684aa56d34312888","url":"assets/js/ef7d15e9.b1208568.js"},{"revision":"4157cb68a0954380f705b1c872665a6d","url":"assets/js/ef9441fb.522b569c.js"},{"revision":"69e46ed18656fedc1981e7a6101d39a4","url":"assets/js/efb49fec.2a145a59.js"},{"revision":"f5ca39d2f9806d0f7170523eb2a2ed95","url":"assets/js/f0572fb7.cd246d80.js"},{"revision":"dd8b78f0611eebf42e4527b198a93efc","url":"assets/js/f1c795df.9503c88d.js"},{"revision":"4d987c43603638411f1cf3f5980eff27","url":"assets/js/f2db7fdf.fed396fe.js"},{"revision":"babb5dcb5d0b3805db8c5b2ddca38c79","url":"assets/js/f3628a63.30199d14.js"},{"revision":"59ef1c7132f8fd91cf28076090ccc450","url":"assets/js/f388d569.b115ec8a.js"},{"revision":"e8fd93f59fffec28331717279c1ff5b4","url":"assets/js/f3eeff9a.c3849436.js"},{"revision":"f512d0c87b3cecb7e2cacf82b0b4a326","url":"assets/js/f63a2436.fbefcc8e.js"},{"revision":"9c3d381d9b78fa415c0b926b4788e616","url":"assets/js/f798fc9a.afbdfe02.js"},{"revision":"3be37276c6cae7854f26ffdd0454fead","url":"assets/js/f82d3ee0.15b5a7c2.js"},{"revision":"b79134c28170ecb674371ac1e730791c","url":"assets/js/f85350a7.752c3ae8.js"},{"revision":"4240cd6ce2aa4e5f55d4875286cefd24","url":"assets/js/f91de78a.bf44f75e.js"},{"revision":"b3f7875b956234bd7f7d440f40af55c7","url":"assets/js/f92d83b9.d2bc660e.js"},{"revision":"b42ec3491a25602419f6b7bec8c2160a","url":"assets/js/f9f115a6.01836d1c.js"},{"revision":"3537b3b7d746969d312a93427b276d52","url":"assets/js/fa031069.e2635472.js"},{"revision":"9e95a284ebb2fab3c45c0b633a78cc5c","url":"assets/js/fa63f6f3.d3fca76e.js"},{"revision":"c3762fb44d9f4e9c31da6020969dff31","url":"assets/js/fae50b85.9c940996.js"},{"revision":"710f6c7ee9067402d1e8dcac9d1143f2","url":"assets/js/fb295b69.6fa0462c.js"},{"revision":"2a3c38564d023d63140b92ce64fe3117","url":"assets/js/fb8127a3.8a702a60.js"},{"revision":"74051797a48fa932165aaf3f02228a28","url":"assets/js/fc57d407.53125293.js"},{"revision":"eb387f7052b0a8409c7a7eccb5adeb8f","url":"assets/js/fc8559aa.e20d2bb3.js"},{"revision":"e1d8c8ee7b14d29cfbabb2914b8eb829","url":"assets/js/fe4bee52.b6564fcd.js"},{"revision":"419bc95b7bc97d7ad9d1d62efd1a344d","url":"assets/js/ff2523de.eeded7e7.js"},{"revision":"bb90120a71439fef234a8cde2ebe2ca1","url":"assets/js/ff3d4e4b.8e26842b.js"},{"revision":"adecb364f30825785ca8cb0b81997bca","url":"assets/js/main.c88fdd55.js"},{"revision":"995e72707a08a2aa9e6f51f7e28fd7c7","url":"assets/js/runtime~main.2b39e607.js"},{"revision":"01acd54dcefdfa7f96729ca6d8d4dd05","url":"coding-gracefully-with-gradle-java17-jpa/index.html"},{"revision":"30506e264075645b42c992a2e8e18be7","url":"docs/autohotkey/index.html"},{"revision":"86e81d80dae823e617f9e4513734e393","url":"docs/blockchain/index.html"},{"revision":"b74a70f65157abc5beb020a51cc1491b","url":"docs/c-sharp-and-dot-net/index.html"},{"revision":"49c998398b76187dcdb47878f5f26cb8","url":"docs/chatgpt/index.html"},{"revision":"361d5020611fe9a3f7c1a8b167841616","url":"docs/cpp/index.html"},{"revision":"c5ff38be837b244959774bff631a7ef2","url":"docs/cross-gfw/index.html"},{"revision":"57ad82d6e76929f5e77a6316a5028cc8","url":"docs/cs-note/index.html"},{"revision":"a57ad7265ed1111042063418fcd6c5f2","url":"docs/css-pre-processor/index.html"},{"revision":"5d28678d18c1b8213f9ca09ab980d3c2","url":"docs/data-structure-and-algorithm/index.html"},{"revision":"574c9b15aebe475e2229b7b6152d250a","url":"docs/design-pattern-note/index.html"},{"revision":"f467657f801c3a8bfb1708b31cf340b9","url":"docs/dev-resources/index.html"},{"revision":"dce18800f76e78bf372fec39cae8e487","url":"docs/distributed-system/index.html"},{"revision":"7aefafd573e46a3f1597e0a5b3339421","url":"docs/docker-note-virtual-dev-env/index.html"},{"revision":"eb0fe241b8d3ba52aa9dda510dc7123e","url":"docs/effective-java-reading-note/index.html"},{"revision":"bb4f486f048e11866d53eff6a71e020a","url":"docs/elk-elastic-log/index.html"},{"revision":"d7a1821ea31911eea6c152728304e48a","url":"docs/english-note/index.html"},{"revision":"8315f5e7410d9ed4e78409fc39c851de","url":"docs/extjs-note/index.html"},{"revision":"06819e63f53fdbd8b4bde13b1cf2cd12","url":"docs/git-note/index.html"},{"revision":"f826b11dced80555f7457ba213ae040f","url":"docs/gps-gis-tracing/index.html"},{"revision":"480445f0eb931ce03dddfeea192f83e9","url":"docs/gradle/index.html"},{"revision":"3354e36c06d24c768d97fd4b8fb06b5a","url":"docs/greasy-monkey/index.html"},{"revision":"ebd5aa5e02a99760f33340f7dd0f393c","url":"docs/groovy-note/index.html"},{"revision":"30fb81461d4ca7ae1e5159a4fb32ee92","url":"docs/health/index.html"},{"revision":"92725808b36af2f3aae89c9b5c1eedb3","url":"docs/how-to-test-java-app/index.html"},{"revision":"3d8f3ed68371a953dc14f10805a5c391","url":"docs/interview-system-design/index.html"},{"revision":"f8a7219763b601c71c7da8822a85ae07","url":"docs/intro/index.html"},{"revision":"f290daf28e5a3969e38c47c5ff929356","url":"docs/iot/index.html"},{"revision":"b5248c3b9d2e8e9c4d1bdae22aa6a986","url":"docs/java-code-clean/index.html"},{"revision":"8b9991bd2abbb47d5d90dce324ffcf93","url":"docs/java-concurrent/index.html"},{"revision":"f49cd892f22e2e28c430a5c6d74847f3","url":"docs/java-memory-model-jmm-jvm/index.html"},{"revision":"93210cf621a2032e3a52a915b03e853a","url":"docs/java-note/index.html"},{"revision":"a1d0cea0fe87622455a94b92195f7b31","url":"docs/kotlin/index.html"},{"revision":"dad27645521e4f43dd53160f56ef0db2","url":"docs/kubernetes-k8s/index.html"},{"revision":"b7af5eceae98f3b0e5bdbde32ecc1415","url":"docs/linux-note/index.html"},{"revision":"7f7a38f686f1cf67125cf9de08868b95","url":"docs/low-code-platform/index.html"},{"revision":"001cdb38023333cee3d3c98b9be5b5b0","url":"docs/mac/index.html"},{"revision":"4e73171807529f7c4a86285eaca20c4a","url":"docs/machine-learning-ml/index.html"},{"revision":"606cb40a75c36fc2a6a56c03724a7a59","url":"docs/marketing-seo/index.html"},{"revision":"108b3babb016e1fa428278c7e7b4588a","url":"docs/maven-note/index.html"},{"revision":"a7e873fa0ee8b30e495ebca8646d6811","url":"docs/message-queue/index.html"},{"revision":"a6031b7b0b82614a9e98b6a4d3ae5b7e","url":"docs/money/index.html"},{"revision":"feac9c538245cedcc8d6a7a844379dca","url":"docs/mongodb-note/index.html"},{"revision":"69c2944e8ef5e8254b02e24b08f51e32","url":"docs/monitor-system-grafana-prometheus-influxdb-hbase/index.html"},{"revision":"d311716b0b852b5ad3e53f31384581e2","url":"docs/mvc-mvvm/index.html"},{"revision":"2e86ecfac083c36b598f0854bef8eb94","url":"docs/mybatis-note/index.html"},{"revision":"636f10e070ac988aee728e3a95b74a99","url":"docs/netty-note/index.html"},{"revision":"d4ee9c6dfbf9664075655976656c2691","url":"docs/nlp-natural-language-processing/index.html"},{"revision":"fbbfb3f869f108c047b2d60e458d5db3","url":"docs/nodejs-yarn-npm/index.html"},{"revision":"0c97a7f090607fa7aed748a8f0368f86","url":"docs/oracle/index.html"},{"revision":"e293fe2670fe71c933a51a5e4735e2d1","url":"docs/outline-about-audio-video/index.html"},{"revision":"5aa41975556b71da57a9c664baae5b37","url":"docs/outline-about-big-data-introduce/index.html"},{"revision":"e31a113ec1fb32e4c4e00fbf94fbc0d1","url":"docs/outline-about-cache/index.html"},{"revision":"1f59e4a1b1c7bf4a927d5a7b81e6b3fe","url":"docs/outline-about-computational-ad/index.html"},{"revision":"a264257e39d8ae76f0d69f493eb4c557","url":"docs/outline-about-crawler-spider/index.html"},{"revision":"5ed0f55dc5d9cd1369257305b0b852ae","url":"docs/outline-about-db-design-note/index.html"},{"revision":"d44e3c0b2cbee2d59c091fbe79eb07fb","url":"docs/outline-about-desktop-develop/index.html"},{"revision":"b1e19502b04672b10aee030b7e06507a","url":"docs/outline-about-http-restful/index.html"},{"revision":"d33d7b95adf81ca3d76ccb46560e6e0f","url":"docs/outline-about-reactive-programming/index.html"},{"revision":"3ca3e576a58c8e1a4d8381fb88d4fd16","url":"docs/outline-about-rpc/index.html"},{"revision":"662a23d912d229b721b07d9719b87582","url":"docs/outline-about-rule-engine-note/index.html"},{"revision":"5317a61dc87e75353e78fe8f631247db","url":"docs/php-note/index.html"},{"revision":"a88663a60ab7263c010aa6c311b93ffe","url":"docs/postgres-note/index.html"},{"revision":"74bef7c83481593d0a97c5632b286fda","url":"docs/process-workflow-bpm-engine/index.html"},{"revision":"cfa03f3984468e653c9eb9f411f45a57","url":"docs/protect-your-app-authentication-oauth2-jwt-https/index.html"},{"revision":"0ad465df9eae01b8206ee02f32b373fe","url":"docs/python-note/index.html"},{"revision":"fac893ca3ff34c85bbe271608f783848","url":"docs/quant-money/index.html"},{"revision":"e19f1adb967cc55608d6f8b04d6909c1","url":"docs/quarkus/index.html"},{"revision":"74c95b57cea3a1e14812c61455753e3b","url":"docs/react-note/index.html"},{"revision":"e380dcdb8bfa83aa900dde44d0e20f66","url":"docs/real-time-communication-protocol/index.html"},{"revision":"ba35908158753797c292b702ae4d8e28","url":"docs/redis-note/index.html"},{"revision":"7db0d684f68469a0c6c9e45ef336d227","url":"docs/regex/index.html"},{"revision":"a3afe9a2a03a33d569886d6c3c73be1f","url":"docs/scala-akka-play-framework/index.html"},{"revision":"bf567782d3ae57cca05bf3ab4d661170","url":"docs/serverless/index.html"},{"revision":"e267baebc2c81313025f27aa32e4747e","url":"docs/service-mesh/index.html"},{"revision":"d51bff6b79c6ab1c7b2f2a37bb4cf355","url":"docs/servlet/index.html"},{"revision":"502fcd615e6b4397048b7478190d3741","url":"docs/shell-bash-note/index.html"},{"revision":"4e36c3594d0861ecebebcc85bb87e10c","url":"docs/spring-note/index.html"},{"revision":"f01cc37bc45782c1fb2262488e6f1360","url":"docs/SpringBoot-note/index.html"},{"revision":"9a08c23c70ba993c4afdf933d701d1fc","url":"docs/springcloud-note/index.html"},{"revision":"a72569b7957f8e7f6ffb3249a74a13d6","url":"docs/springmvc-note/index.html"},{"revision":"3bac7260df512b207e1eb9bf93cf2dea","url":"docs/tags/ad/index.html"},{"revision":"45fef7d8648399d933170be882f2f3cb","url":"docs/tags/akka/index.html"},{"revision":"2497583604e8d673230bdf672318c6bc","url":"docs/tags/audio/index.html"},{"revision":"4225d00ed8bb9c5d9ffc8ac3a8d915ec","url":"docs/tags/authentication/index.html"},{"revision":"9b2f44d829f99acc8498b9fda75bbf05","url":"docs/tags/autohotkey/index.html"},{"revision":"7eac1994a80ace35e4aa9a73ee34c9ec","url":"docs/tags/bash/index.html"},{"revision":"16cb55b76ccce8d45eb9de7a52cbe195","url":"docs/tags/block-chain/index.html"},{"revision":"de67ec0d173f3145db72cbbf0658d2de","url":"docs/tags/c-sharp/index.html"},{"revision":"7601d1166f7551ac7adf5fc04f98d1d9","url":"docs/tags/c/index.html"},{"revision":"bffd5daf5d473d6f7f28bd53a45b6266","url":"docs/tags/cache/index.html"},{"revision":"03911a93d1f0df7fb1a77ac867f4db97","url":"docs/tags/chatgpt/index.html"},{"revision":"173cf25d5412644cf06e7e73a25134e4","url":"docs/tags/clickhouse/index.html"},{"revision":"67197b812a0ef3161713e917d0bad77a","url":"docs/tags/concurrent/index.html"},{"revision":"26d9d2a8629ce9ce7015156cadf2087a","url":"docs/tags/cpp/index.html"},{"revision":"4b625c46e01b09b444d5f675c9850380","url":"docs/tags/css/index.html"},{"revision":"02fad10c1f1ae28ffc4779dd8c21f37e","url":"docs/tags/database/index.html"},{"revision":"a861d3c8edf4451d5f48be62ca97166a","url":"docs/tags/db/index.html"},{"revision":"8fcc2d65b8fa04e58e8930a71d2bca3f","url":"docs/tags/desktop/index.html"},{"revision":"3fcbfcf06a0be22173089f8ba76bc051","url":"docs/tags/docker/index.html"},{"revision":"ecdc1686cc62387a9e35cd48a5f42e80","url":"docs/tags/dot-net/index.html"},{"revision":"a7659c08b51badc49b638dbb212bde2e","url":"docs/tags/elk/index.html"},{"revision":"4855e908ba7f4895802c0590275f4cc0","url":"docs/tags/es/index.html"},{"revision":"8b26b30b3b96bf1490bb7e8c5fe34dce","url":"docs/tags/esbuild/index.html"},{"revision":"0cb5f24f1ecc2f5f3182502e9b0b67c0","url":"docs/tags/ext-js/index.html"},{"revision":"ab48b7ff194368343715049b515bbf4e","url":"docs/tags/framework/index.html"},{"revision":"34d1601baf2774cac09b34073c8f6f7c","url":"docs/tags/gc/index.html"},{"revision":"f949ea1595375aeab24b979336bc934a","url":"docs/tags/gfw/index.html"},{"revision":"180028c7909cbc1bc4515a97b2a46b7a","url":"docs/tags/gis/index.html"},{"revision":"fcafe96769552aad31a56f76fb919011","url":"docs/tags/git/index.html"},{"revision":"941306de4178a6469120325ebbb041d1","url":"docs/tags/go/index.html"},{"revision":"2d022cc3b6967b9bb9c3e07388583cad","url":"docs/tags/gps/index.html"},{"revision":"7d611c74f7ae217ccdac6fd4729cbe0d","url":"docs/tags/grafana/index.html"},{"revision":"1865c9ce94c0931d3b8b16aff0d48384","url":"docs/tags/groovy/index.html"},{"revision":"129ed024ec21ed5c2b2d69df89cdd7c3","url":"docs/tags/health/index.html"},{"revision":"22ba80e5208cf977f817422b9b79f400","url":"docs/tags/history/index.html"},{"revision":"c5e84058ade991fe5d5cd864b1299307","url":"docs/tags/http/index.html"},{"revision":"aa4a274af1bc1e61b3a2abc7ae107630","url":"docs/tags/index.html"},{"revision":"da131192b97fb54922e8b119839c328f","url":"docs/tags/influxdb/index.html"},{"revision":"354347f3e6c9ba1ff68ef8f4cc2a1ea9","url":"docs/tags/interview/index.html"},{"revision":"88326de4f07981322b1217fb65e630b9","url":"docs/tags/iot/index.html"},{"revision":"af348e4826dd84bfb60389956ef52369","url":"docs/tags/java/index.html"},{"revision":"d741793797384b512271066015b23be3","url":"docs/tags/javascript/index.html"},{"revision":"5b862c3de583d5cc3555827c1b7d6775","url":"docs/tags/jetty/index.html"},{"revision":"b2baf291edce189aa467b9a46ababb8a","url":"docs/tags/jvm/index.html"},{"revision":"d9f893107edd163089308bf56d8c1874","url":"docs/tags/jwt/index.html"},{"revision":"74026563ff31bee1edaa9bb23ec97ab1","url":"docs/tags/k-8-s/index.html"},{"revision":"68d50d4b698b3993de1b8bf738b23b17","url":"docs/tags/kotlin/index.html"},{"revision":"bf2f2c4ccd6c0708c679ae6b059cf29e","url":"docs/tags/linux/index.html"},{"revision":"85d9a00c4dcad29e4fd22b3e423055ae","url":"docs/tags/log/index.html"},{"revision":"e1bccccd8cce8d352440baa771ea3da9","url":"docs/tags/mac/index.html"},{"revision":"9dcaf55f03ba4c8d0318ba9ce2c85ac9","url":"docs/tags/machine-learning/index.html"},{"revision":"d384b5d5f102b07859539d8122b39007","url":"docs/tags/marketing/index.html"},{"revision":"334aa80a0a62862acbfddf76c4e188c9","url":"docs/tags/maven/index.html"},{"revision":"c000d3d69fb99d11e36a84400c7a72cd","url":"docs/tags/mock/index.html"},{"revision":"173a743543db88c502bb069e01bc3d02","url":"docs/tags/money/index.html"},{"revision":"2195922ee51afff35180888b677bd0ca","url":"docs/tags/mongodb/index.html"},{"revision":"873d122fbab05d29c21a097dae0536b4","url":"docs/tags/mq/index.html"},{"revision":"3153b0998b5b7c440bdd5bc7abf6eb24","url":"docs/tags/mvc/index.html"},{"revision":"8bf8af221c5c40454d982ff95e43b843","url":"docs/tags/mvvm/index.html"},{"revision":"4732d1c9b8bfa76f0e69b8c77ae68a36","url":"docs/tags/mybatis/index.html"},{"revision":"98b82973c7a2e3831014dff59af00427","url":"docs/tags/netty/index.html"},{"revision":"7f62c4957bc3ce3372e7fdca3e071417","url":"docs/tags/network/index.html"},{"revision":"6a3b8664fab89cc9308ac6a127985093","url":"docs/tags/nginx/index.html"},{"revision":"5c5eb76295decdce48e4ad148188f732","url":"docs/tags/nio/index.html"},{"revision":"39a9504aa57cce2bd6414d87ff07ddcd","url":"docs/tags/nlp/index.html"},{"revision":"9842db89d7e6ae2d3ab2048afc7f8983","url":"docs/tags/node/index.html"},{"revision":"8a2d4d3b58e6bf870dca6d44aa2de88c","url":"docs/tags/nosql/index.html"},{"revision":"8a16c5a361fdebb6364bebaa681da419","url":"docs/tags/npm/index.html"},{"revision":"14650d49caea3739cdbf3e4c83694996","url":"docs/tags/oauth-2-0/index.html"},{"revision":"48d41a8c8e7111b48570b650d2564aed","url":"docs/tags/orm/index.html"},{"revision":"d8cd85af3c56fbca464f2baef00aebb9","url":"docs/tags/ourline/index.html"},{"revision":"908e4405290009a50b0e8fdbbb178297","url":"docs/tags/outline/index.html"},{"revision":"d88726d776356b1a4bd3524f49f778e6","url":"docs/tags/php/index.html"},{"revision":"14500bcdc5fb251a7c33cd0815e516ee","url":"docs/tags/play/index.html"},{"revision":"c31f1149e9349bed82eada87674a426d","url":"docs/tags/postgres/index.html"},{"revision":"416b827ddf191b76e9dde56e6fd30435","url":"docs/tags/processor/index.html"},{"revision":"5aa13154e0af88b65768df5fefda37f3","url":"docs/tags/prometheus/index.html"},{"revision":"61eb2de2ec6275e0d73131e47180b668","url":"docs/tags/python/index.html"},{"revision":"4ce3d14e2f025f4c871390d5b2216a9f","url":"docs/tags/quant/index.html"},{"revision":"63a93e451a41e51590462e32f457f84a","url":"docs/tags/quarkus/index.html"},{"revision":"5159a36a202f330d70c60ee4391cc88e","url":"docs/tags/react/index.html"},{"revision":"a6aebaab29f1f97d442d24ebf16a273e","url":"docs/tags/reactive/index.html"},{"revision":"2ab86827ebf651c456b060bd5c11eda8","url":"docs/tags/redis/index.html"},{"revision":"1c40c69a891962daa93a7c82ef4d8f9c","url":"docs/tags/regex/index.html"},{"revision":"d0c7349f6488aa006c13a479a7c6a901","url":"docs/tags/restful/index.html"},{"revision":"19e6c46c0f471c5cfadf5d62bbd56033","url":"docs/tags/rollup/index.html"},{"revision":"aceed268f32bd9a2bf382b3f2b025f18","url":"docs/tags/rpc/index.html"},{"revision":"95c92fdde5566b57c27ade2b05304b74","url":"docs/tags/rust/index.html"},{"revision":"794ea2cf68b9ce25f296cfb4eca50033","url":"docs/tags/scala/index.html"},{"revision":"11f4a8c00785498e35a6c2e872c76c2b","url":"docs/tags/schedule/index.html"},{"revision":"18652a29a59287e23eb8b56130ea7f9b","url":"docs/tags/seo/index.html"},{"revision":"a72d31727633a5eddba710a756c3d207","url":"docs/tags/serverless/index.html"},{"revision":"4ca6049e9b22d924a545716c96817805","url":"docs/tags/service-mesh/index.html"},{"revision":"1690222d3cea649a1d72017d9019d2be","url":"docs/tags/servlet/index.html"},{"revision":"e8246b2a37340871a3e322da3cd8b938","url":"docs/tags/shell/index.html"},{"revision":"04b25135e3077eb675e3889d36818241","url":"docs/tags/spring/index.html"},{"revision":"3a48741e000ceb82b1c9618ff68a9161","url":"docs/tags/springcloud/index.html"},{"revision":"eb1dd61e5613cacc35259d0184b5e7fe","url":"docs/tags/test/index.html"},{"revision":"f44c1151db77c88ddd01fbf4e53f0af3","url":"docs/tags/tomcat/index.html"},{"revision":"7a68d609dc5775150f675dd84f1a48a5","url":"docs/tags/up主/index.html"},{"revision":"5751a93660a82ef1474a6ad43022aa72","url":"docs/tags/vertx/index.html"},{"revision":"5eaf4e9fecb974e3ec9c6e7ea124dd50","url":"docs/tags/video/index.html"},{"revision":"7043e8accfa19bb04f9495e8aa9c2085","url":"docs/tags/vite/index.html"},{"revision":"b0ae6ccb5164e7870c824fe2966157bc","url":"docs/tags/web-3/index.html"},{"revision":"18445cd611ca6a3a0b8d553f73c14ac0","url":"docs/tags/webassembly/index.html"},{"revision":"a2bc0279a30cf0cc0ab845d529d414e1","url":"docs/tags/webpack/index.html"},{"revision":"dc2c23d78da9ee5983f0a713adf6556d","url":"docs/tags/webrtc/index.html"},{"revision":"86cbac3e2d220bed369df70423dca204","url":"docs/tags/websocket/index.html"},{"revision":"a7d51ab37f40a23e918c544fca74491c","url":"docs/tags/workflow/index.html"},{"revision":"1a49b28801b1a25ad4eb615afc985ce9","url":"docs/tags/wsl/index.html"},{"revision":"7ce123278fb1bd91ae4a05dacacee836","url":"docs/tags/yarn/index.html"},{"revision":"581b45fb99a9757b5dfd97e63860345c","url":"docs/tags/内存模型/index.html"},{"revision":"c7a8983f6950497e615521aa38625d97","url":"docs/tags/分布式/index.html"},{"revision":"7a852775b1c2cbf3794b30d83f577981","url":"docs/tags/大数据/index.html"},{"revision":"bf5a2eec9c0e8ca8ce4604c0ae99076a","url":"docs/tags/爬虫/index.html"},{"revision":"fbe92ae084d9dc84406e2a4f7c6b1097","url":"docs/tags/算法/index.html"},{"revision":"6e8659178dbfd5a6f4034b50a4a65b9d","url":"docs/tags/系统设计/index.html"},{"revision":"9ae11c44fdcb610e624629154617bab9","url":"docs/tags/英语/index.html"},{"revision":"f1589c531f6d0988a1017eb4d3404246","url":"docs/tags/规则引擎/index.html"},{"revision":"f25f6674af143db5006fe837f0499c44","url":"docs/tags/计算机科学/index.html"},{"revision":"5951678ef8bd39e9fe05c24c63dda0ed","url":"docs/tags/设计模式/index.html"},{"revision":"5d58452218941774d3cafa5509ee52eb","url":"docs/tags/资源/index.html"},{"revision":"ece442ae8a9bfd7494295060badeecb5","url":"docs/tags/阅读笔记/index.html"},{"revision":"efd0131374943064af0e1c9dc3c45865","url":"docs/task-schedule-note/index.html"},{"revision":"7f8193faf67a6f2dcf3d1badec589eba","url":"docs/tcp-ip-note-p2p/index.html"},{"revision":"59cad329ecf0c0ec42ad642dc47489c9","url":"docs/tomcat-jetty-nginx/index.html"},{"revision":"e581c458ef056e71d53936e70d40db3e","url":"docs/vertx/index.html"},{"revision":"692c58f3e7c38e912a2638da2c05c2b6","url":"docs/video-creator/index.html"},{"revision":"6f9a181f7036696fa738e07b1a5ac7d3","url":"docs/webassembly/index.html"},{"revision":"17adc645e9727ac8dc834fd5742609eb","url":"docs/webpack-esbuild-vite-rollup/index.html"},{"revision":"56091dfef5bec06a849d1a6429654695","url":"docs/windows-sub-system-on-linux/index.html"},{"revision":"329c9503c38dcf231ab3f7788d25a06a","url":"feed.json"},{"revision":"76fd33ea9edd72b56c92f8af2a2e7cca","url":"friends/index.html"},{"revision":"89a2e2756b1c19b0b73542f1dbf6b9e9","url":"index.html"},{"revision":"8cda6e44e35116cf1da233260f3e3fcd","url":"manifest.json"},{"revision":"d93d23efd35155ca0ab066dd71978302","url":"page/2/index.html"},{"revision":"e40e59f87b3f84a3d5817cb522a9666e","url":"project/index.html"},{"revision":"4c6eced50df65caf57be04ba311799ca","url":"react-vue-docker/index.html"},{"revision":"8950e27e38708fed3cc0069e62d7f707","url":"redmi-router-crack/index.html"},{"revision":"5621828581134dc90c19f11bf13dffe8","url":"resource/index.html"},{"revision":"80e872fb643640765d523b64805bad7d","url":"search/index.html"},{"revision":"dd1fa63608183a3cc414da443f7a42d8","url":"spring-boot-react-package-together/index.html"},{"revision":"cb334b23a56dc46882ccdfa7e1385187","url":"spring-boot-with-docker/index.html"},{"revision":"683714be73618401990db9befa41e8c1","url":"tags/bt/index.html"},{"revision":"8e27e5ae45b5a7b8660ecf529e4b504a","url":"tags/crack/index.html"},{"revision":"f21f5a8e7d7d911a6a7730424b4c9000","url":"tags/database/index.html"},{"revision":"43ea7dae39dec432367c6f8fad95e723","url":"tags/docker/index.html"},{"revision":"9038412a5945f65f7c3bfa9698c70dd4","url":"tags/docusaurus/index.html"},{"revision":"be4280a8241c541f4dd19597e0add114","url":"tags/download/index.html"},{"revision":"00d7aed076a5564a4700e405099dacae","url":"tags/face-recognition/index.html"},{"revision":"14982ccfc6c819b9b2e5b66ca6f61d7e","url":"tags/food/index.html"},{"revision":"a55cbc342fa6a9c3c0a6f8415ad1ece6","url":"tags/github-pages/index.html"},{"revision":"4c2300dec05b5231ccecd7abfa1a0828","url":"tags/gradle/index.html"},{"revision":"4a23c31c2297b6177dd95d931cb5d2c1","url":"tags/history/index.html"},{"revision":"eb0212946250dcd756c6609d58552dcc","url":"tags/index.html"},{"revision":"70d09d832f9ff03ebb6ca296c9d1b251","url":"tags/ioc/index.html"},{"revision":"5c52f7002bf890dab5b3a168c39969bd","url":"tags/java/index.html"},{"revision":"12160a6bca167f6e59c7012c6bfe5d44","url":"tags/jpa/index.html"},{"revision":"ee120f61da9d4b488dc282c73ec0d2ae","url":"tags/machine-learning/index.html"},{"revision":"b09a0d78e6777bc7d8be5230134de9d5","url":"tags/mobile/index.html"},{"revision":"a6ccf67056b77f98c4f86dcbbe9f6376","url":"tags/raspberrypi/index.html"},{"revision":"bb74088920a349fe05addd7b341727a4","url":"tags/react/index.html"},{"revision":"785d7552fe2afc6056ee94cd21b9388b","url":"tags/redis/index.html"},{"revision":"796ae0254849b03f9597a59d05e85ff4","url":"tags/spring/index.html"},{"revision":"fe362985728c0e269da677f62ad26457","url":"tags/torrent/index.html"},{"revision":"4ae7d9b2ed7c40043a7121f1a22a1491","url":"tags/vue/index.html"},{"revision":"2db3f411a630bb8d8482f50505f3be27","url":"tags/web-design/index.html"},{"revision":"9beb0f4189bebf6175667146bcf254ce","url":"tags/web/index.html"},{"revision":"fa46b01f2974d16b0531bf1beeff7998","url":"tags/writing/index.html"},{"revision":"1daa62876e340a85464e8146f649f5da","url":"assets/images/filter-interceptor-90f17548c68363628d147541a5513c5e.png"},{"revision":"59a26c335b61689d6bcce7cdbfa30da8","url":"assets/images/k3d-e9c6aa818d0953eb83dc50aa15ba84f7.png"},{"revision":"d27206f07ea65d5d71875991478e2631","url":"assets/images/k8s_design-3303f985c7890750df7bd0ada74e7b20.png"},{"revision":"1c9522d153a448279b9ad5dd1bfca4bb","url":"assets/images/k8s_design1-ee6f461a1bfc8942e993842de39ed7a6.png"},{"revision":"30a032f69fd8892664f48714e6758a2b","url":"assets/images/k8s_service_clusterip-e86739dbbf5a24827a7c8a13cadbe0ec.png"},{"revision":"02f3f96c26b6042eb0bfd67add6e7e19","url":"assets/images/k8s_storage-be12cdb7b38ab477a52835c7c8343043.png"},{"revision":"be32b64add46edef8184cdf43ac1b142","url":"assets/images/loop_dependency-109a7daae3a169c305db8651021bd052.png"},{"revision":"ee8cf10acf671328afbc974cff7f4060","url":"assets/images/nat-41f3e2cfad6fa9b39d7832fb1c6f4db5.png"},{"revision":"1256bd5fd0b222ade606b37b656a8472","url":"assets/images/rust_macro_process-ee8b27ee3a95c102b98fc156cdce0bf8.png"},{"revision":"0083560c24b78d2c11fe43288fda6251","url":"assets/images/spring-cloud-arch-e17e65bdfb94199c9480a2db1ad04d98.png"},{"revision":"c7c9c7831da370fb888541c1e20ccf8a","url":"img/buildwith.png"},{"revision":"c59d57251ab3066e2d363f8f43b73f21","url":"img/favicon.ico"},{"revision":"1daa62876e340a85464e8146f649f5da","url":"img/filter-interceptor.png"},{"revision":"e9a7d2223623512b989ec8165690e16b","url":"img/friend/alan.png"},{"revision":"62001f1f52db3de4c4a89a9a05bd0c7d","url":"img/friend/cworld.png"},{"revision":"45bce7a1050bdbf3f8d3ec0e2c59184e","url":"img/friend/disnox.png"},{"revision":"f477b81b9f11062e5ab245688b70390d","url":"img/friend/faith&passion.png"},{"revision":"aaa9eaef6c95c5bafb6980df18a09a0a","url":"img/friend/jetzihan.png"},{"revision":"4642850abe073836ec745bec85c77a31","url":"img/friend/knifer.png"},{"revision":"3f05a96bb180f3919469cb7feb86931c","url":"img/friend/mas0n.png"},{"revision":"7dce8a33b9b0661a9be62f1efd545161","url":"img/friend/meoo.png"},{"revision":"8a7036642aa9d7d51b582c88854fabfd","url":"img/friend/old_monster.png"},{"revision":"72cec370117b069f8d4c61b0a521cb18","url":"img/friend/pincman.png"},{"revision":"4f657563ab674b7629df1fe9222f5982","url":"img/friend/shake.png"},{"revision":"34fc43d3881c4f9a897da62bc14eab7c","url":"img/friend/zxuqian.png"},{"revision":"f03949b42066a920181c265980608474","url":"img/icons/icon-128.png"},{"revision":"155ba60fecc4ac7ad899be72eeac0f79","url":"img/icons/icon-192.png"},{"revision":"59a26c335b61689d6bcce7cdbfa30da8","url":"img/k3d.png"},{"revision":"d27206f07ea65d5d71875991478e2631","url":"img/k8s_design.png"},{"revision":"1c9522d153a448279b9ad5dd1bfca4bb","url":"img/k8s_design1.png"},{"revision":"30a032f69fd8892664f48714e6758a2b","url":"img/k8s_service_clusterip.png"},{"revision":"02f3f96c26b6042eb0bfd67add6e7e19","url":"img/k8s_storage.png"},{"revision":"be32b64add46edef8184cdf43ac1b142","url":"img/loop_dependency.png"},{"revision":"ee8cf10acf671328afbc974cff7f4060","url":"img/nat.png"},{"revision":"ead15afc8659ed4a171c7df59d6dd6b6","url":"img/resource/antv.png"},{"revision":"f4bc27c77d6c694a8f102400b47a0f8c","url":"img/resource/any-rule.ico"},{"revision":"901b00933f6f11b2f1a6a5599f8c1262","url":"img/resource/apifox.png"},{"revision":"b96c95e3c8bcbb9e7c4ee3d700f18e3e","url":"img/resource/atoolbox.ico"},{"revision":"f74ef9646e0ce62d91bd1f386ddea182","url":"img/resource/axios.ico"},{"revision":"f2d2896c488493e18c1b112cdd9bb1d9","url":"img/resource/bilibili.ico"},{"revision":"60d38d73bce4e75b23ea4969576e1a16","url":"img/resource/bootcdn.png"},{"revision":"46a4dee218eae406decc106f9172ad8f","url":"img/resource/bun.svg"},{"revision":"633ba93467bb1d9193e64649ad384a48","url":"img/resource/coding.png"},{"revision":"b052a4bef57c1aa73cd7cff5bc4fb61d","url":"img/resource/component party.svg"},{"revision":"9069c3d1357b5404790869a73dc6c4a7","url":"img/resource/coolify.png"},{"revision":"3ae5122c812791633e19312c0f5c77f2","url":"img/resource/coolors.png"},{"revision":"4dd24c08b90ddd2ed308e21a1aa93f35","url":"img/resource/css-inspiration.png"},{"revision":"e67ffbf9f1b0922984b8f7f679c7d9f2","url":"img/resource/cssfx.png"},{"revision":"bccc2805bbb49ba2a229eccd9d6336de","url":"img/resource/cypress.png"},{"revision":"e6dbdc5d73afb6259d59b047cf0e796a","url":"img/resource/dbyun.png"},{"revision":"ed1ea8d1835045039ee20a25a0c1119b","url":"img/resource/digitalocean.png"},{"revision":"106e45640bf6465e840987f8d0809cac","url":"img/resource/docusaurus.svg"},{"revision":"fff84f43a8b8da380fc7f09a820b5cc1","url":"img/resource/electron.ico"},{"revision":"03094a3f1a2133a2e482161f0ea880b7","url":"img/resource/es6.png"},{"revision":"d249a627f5d1dc56064e6e5e51591e4e","url":"img/resource/figma.png"},{"revision":"4cb055f312b13dbed3d215eb6c06e198","url":"img/resource/fresh.ico"},{"revision":"54a5811e46ae339fe0748c7e19ee13cf","url":"img/resource/gitee.ico"},{"revision":"7f969f62ee272a3be19966806fff4ad5","url":"img/resource/github.ico"},{"revision":"ca1ef68de99bb1c21b54a2de9c2f5603","url":"img/resource/github.png"},{"revision":"42442ce03d1ed3af099667a09ae3d9bf","url":"img/resource/google_fonts.ico"},{"revision":"268d07772e674f7727b22d43feea87cd","url":"img/resource/graphQL.svg"},{"revision":"18796448b4d2c235ef28174ea8fd3df3","url":"img/resource/hoppscotch.png"},{"revision":"a017103bc249c013451e62ab18267655","url":"img/resource/igoutu.png"},{"revision":"0c1f700da144243c526f252e59362138","url":"img/resource/javascript.svg"},{"revision":"ced24ba3036e65440698d9f4a5d3d7ee","url":"img/resource/jest.png"},{"revision":"91f205ab264c6166b2f0cdfa15dcb998","url":"img/resource/juejin.png"},{"revision":"ee94dbce87dfc0bcdee0c8f526d75e75","url":"img/resource/loading.ico"},{"revision":"cbbd161ba4740677c61b6c0b5cb5f08e","url":"img/resource/mdn.png"},{"revision":"86e699e394c20125f4c0cc23d318dc57","url":"img/resource/naiveUI.svg"},{"revision":"f99daa41b5ced801b85e4baf11a4763b","url":"img/resource/namae.png"},{"revision":"b32f0b84e4492accdd6b5553cf2b205f","url":"img/resource/netlify.png"},{"revision":"f30aab085c20efcdee28b9d16750d3c5","url":"img/resource/nuxt.svg"},{"revision":"0c390c49eafedc9d0b9eab5f48eae811","url":"img/resource/ossinsight.png"},{"revision":"3a2e616a4c02faa220f078f403535bfa","url":"img/resource/playwright.svg"},{"revision":"0f8eab4686969701a3f4b1853714f39a","url":"img/resource/prisma.png"},{"revision":"8b0dbfce0588a8f48d2d829611332f2c","url":"img/resource/quick reference.svg"},{"revision":"0e32bdb3d2bb46ade327d020267b88eb","url":"img/resource/railway.png"},{"revision":"aba7d35a3f4086b3221e0a9fcc1b79e0","url":"img/resource/remix.png"},{"revision":"14d1960996334408e55adb37ccd61e4f","url":"img/resource/roadmap.png"},{"revision":"ae74fdaee9fbeefec73131e08c2b4853","url":"img/resource/runoob.png"},{"revision":"b653c6e07999f2b00977c97e126edf79","url":"img/resource/rust-logo-blk.svg"},{"revision":"b653c6e07999f2b00977c97e126edf79","url":"img/resource/rust.svg"},{"revision":"e62acc5edf1a5489565848df8b6b0e15","url":"img/resource/shields.png"},{"revision":"c7eaca1932ec1bca09b2a6e7f943395e","url":"img/resource/stackblitz.png"},{"revision":"b80e8429f2dd86602ba9bedaee2372bf","url":"img/resource/stateofjs.svg"},{"revision":"eb33422a859d1e43141bae4e314aec24","url":"img/resource/strapi.png"},{"revision":"156dd1b995c322417a7263047e450c0e","url":"img/resource/supabase.png"},{"revision":"b47372fe0bd2425afbaff1f022033a1b","url":"img/resource/swc.png"},{"revision":"603a01f9397b9c1bac708ab63c2f0ca9","url":"img/resource/swr.png"},{"revision":"6b0b3baf7667b855c81b9521bc1bd545","url":"img/resource/taro.png"},{"revision":"31c4413e9d4fff5adb58792f8900d65c","url":"img/resource/terminalgif.ico"},{"revision":"b2f84f958493f6b6643428b0d38c65c4","url":"img/resource/turbopack.svg"},{"revision":"3d86b98e3d7c252c00dad343f37e6191","url":"img/resource/turborepo.svg"},{"revision":"778664dab30dd2c4f8c12feab032f3b8","url":"img/resource/twind.svg"},{"revision":"a1e9f66a2d4c49efc0e723e29e75c6da","url":"img/resource/typeorm.ico"},{"revision":"166813938a8a65cf3197fa7da1d131f4","url":"img/resource/typescript.png"},{"revision":"bc0b4df0aa581c87542d2231a261c5fc","url":"img/resource/typing-svg.png"},{"revision":"a285ab8bd5ea48234315d7b223a5e727","url":"img/resource/uiverse.png"},{"revision":"6f2fe057bbbb1e0577ef779818eb9a77","url":"img/resource/vben-admin.png"},{"revision":"1821c958bbe5e0a6a4563025af907760","url":"img/resource/vite.svg"},{"revision":"2ccd6960a9ed152749f34a16174686fa","url":"img/resource/webgradients.png"},{"revision":"de88d6acf04f16debb7521f2644ed756","url":"img/resource/webpack.png"},{"revision":"2233ab8d63b1bff9b704dbbaf731f2b0","url":"img/resource/zhubai.png"},{"revision":"1256bd5fd0b222ade606b37b656a8472","url":"img/rust_macro_process.png"},{"revision":"0083560c24b78d2c11fe43288fda6251","url":"img/spring-cloud-arch.png"},{"revision":"6bdafd801c878b10edb5fed5d00969e9","url":"svg/juejin.svg"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map