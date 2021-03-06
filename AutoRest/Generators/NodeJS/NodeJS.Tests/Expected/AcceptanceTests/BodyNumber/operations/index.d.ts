/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Number
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutoRestNumberTestService.
 */
export interface Number {

    /**
     * Get null Number value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getNull(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getNull(callback: ServiceCallback<number>): void;

    /**
     * Get invalid float Number value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getInvalidFloat(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getInvalidFloat(callback: ServiceCallback<number>): void;

    /**
     * Get invalid double Number value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getInvalidDouble(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getInvalidDouble(callback: ServiceCallback<number>): void;

    /**
     * Get invalid decimal Number value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getInvalidDecimal(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getInvalidDecimal(callback: ServiceCallback<number>): void;

    /**
     * Put big float value 3.402823e+20
     *
     * @param {number} numberBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putBigFloat(numberBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putBigFloat(numberBody: number, callback: ServiceCallback<void>): void;

    /**
     * Get big float value 3.402823e+20
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBigFloat(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getBigFloat(callback: ServiceCallback<number>): void;

    /**
     * Put big double value 2.5976931e+101
     *
     * @param {number} numberBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putBigDouble(numberBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putBigDouble(numberBody: number, callback: ServiceCallback<void>): void;

    /**
     * Get big double value 2.5976931e+101
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBigDouble(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getBigDouble(callback: ServiceCallback<number>): void;

    /**
     * Put big double value 99999999.99
     *
     * @param {number} numberBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putBigDoublePositiveDecimal(numberBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putBigDoublePositiveDecimal(numberBody: number, callback: ServiceCallback<void>): void;

    /**
     * Get big double value 99999999.99
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBigDoublePositiveDecimal(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getBigDoublePositiveDecimal(callback: ServiceCallback<number>): void;

    /**
     * Put big double value -99999999.99
     *
     * @param {number} numberBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putBigDoubleNegativeDecimal(numberBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putBigDoubleNegativeDecimal(numberBody: number, callback: ServiceCallback<void>): void;

    /**
     * Get big double value -99999999.99
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBigDoubleNegativeDecimal(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getBigDoubleNegativeDecimal(callback: ServiceCallback<number>): void;

    /**
     * Put big decimal value 2.5976931e+101
     *
     * @param {number} numberBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putBigDecimal(numberBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putBigDecimal(numberBody: number, callback: ServiceCallback<void>): void;

    /**
     * Get big decimal value 2.5976931e+101
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBigDecimal(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getBigDecimal(callback: ServiceCallback<number>): void;

    /**
     * Put big decimal value 99999999.99
     *
     * @param {number} numberBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putBigDecimalPositiveDecimal(numberBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putBigDecimalPositiveDecimal(numberBody: number, callback: ServiceCallback<void>): void;

    /**
     * Get big decimal value 99999999.99
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBigDecimalPositiveDecimal(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getBigDecimalPositiveDecimal(callback: ServiceCallback<number>): void;

    /**
     * Put big decimal value -99999999.99
     *
     * @param {number} numberBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putBigDecimalNegativeDecimal(numberBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putBigDecimalNegativeDecimal(numberBody: number, callback: ServiceCallback<void>): void;

    /**
     * Get big decimal value -99999999.99
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBigDecimalNegativeDecimal(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getBigDecimalNegativeDecimal(callback: ServiceCallback<number>): void;

    /**
     * Put small float value 3.402823e-20
     *
     * @param {number} numberBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putSmallFloat(numberBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putSmallFloat(numberBody: number, callback: ServiceCallback<void>): void;

    /**
     * Get big double value 3.402823e-20
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getSmallFloat(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getSmallFloat(callback: ServiceCallback<number>): void;

    /**
     * Put small double value 2.5976931e-101
     *
     * @param {number} numberBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putSmallDouble(numberBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putSmallDouble(numberBody: number, callback: ServiceCallback<void>): void;

    /**
     * Get big double value 2.5976931e-101
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getSmallDouble(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getSmallDouble(callback: ServiceCallback<number>): void;

    /**
     * Put small decimal value 2.5976931e-101
     *
     * @param {number} numberBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putSmallDecimal(numberBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putSmallDecimal(numberBody: number, callback: ServiceCallback<void>): void;

    /**
     * Get small decimal value 2.5976931e-101
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getSmallDecimal(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getSmallDecimal(callback: ServiceCallback<number>): void;
}
