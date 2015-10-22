/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.12.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions, RequestOptions, WebResource } from "ms-rest";
import * as models from "./models";
import * as stream from "stream";

export default class AutoRestValidationTest {
    /**
     * @class
     * Initializes a new instance of the AutoRestValidationTest class.
     * @constructor
     *
     * @param {String} subscriptionId Subscription ID.
     *
     * @param {String} apiVersion Required string following pattern \d{2}-\d{2}-\d{4}
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - Options for the underlying request object
     * {@link https://github.com/request/request#requestoptions-callback Options doc}
     *
     * @param {bool} [options.noRetryPolicy] - If set to true, turn off default retry policy
     */
    constructor(subscriptionId: string, apiVersion: string, baseUri: string, options: ServiceClientOptions);

        /**
     * Validates input parameters on the method. See swagger for details.
     *
     * @param {string} resourceGroupName Required string between 3 and 10 chars
     * with pattern [a-zA-Z0-9]+.
     * 
     * @param {number} id Required int multiple of 10 from 100 to 1000.
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link Product} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    validationOfMethodParameters(resourceGroupName: string, id: number, options: RequestOptions, callback: (err: Error, result: models.Product, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Validates body parameters on the method. See swagger for details.
     *
     * @param {string} resourceGroupName Required string between 3 and 10 chars
     * with pattern [a-zA-Z0-9]+.
     * 
     * @param {number} id Required int multiple of 10 from 100 to 1000.
     * 
     * @param {object} [body]
     * 
     * @param {array} [body.displayNames] Non required array of unique items from
     * 0 to 6 elements.
     * 
     * @param {number} [body.capacity] Non required int betwen 0 and 100 exclusive.
     * 
     * @param {string} [body.image] Image URL representing the product.
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link Product} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    validationOfBody(resourceGroupName: string, id: number, body: models.Product, options: RequestOptions, callback: (err: Error, result: models.Product, request: WebResource, response: stream.Readable) => void): void;
}
