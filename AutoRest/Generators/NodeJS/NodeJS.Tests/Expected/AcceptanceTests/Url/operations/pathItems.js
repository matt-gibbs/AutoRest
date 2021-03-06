/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var WebResource = msRest.WebResource;

/**
 * @class
 * PathItems
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutoRestUrlTestService.
 * Initializes a new instance of the PathItems class.
 * @constructor
 *
 * @param {AutoRestUrlTestService} client Reference to the service client.
 */
function PathItems(client) {
  this.client = client;
}

/**
 * send globalStringPath='globalStringPath',
 * pathItemStringPath='pathItemStringPath',
 * localStringPath='localStringPath', globalStringQuery='globalStringQuery',
 * pathItemStringQuery='pathItemStringQuery',
 * localStringQuery='localStringQuery'
 *
 * @param {string} localStringPath should contain value 'localStringPath'
 * 
 * @param {string} pathItemStringPath A string value 'pathItemStringPath' that
 * appears in the path
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {string} [options.localStringQuery] should contain value
 * 'localStringQuery'
 * 
 * @param {string} [options.pathItemStringQuery] A string value
 * 'pathItemStringQuery' that appears as a query parameter
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
PathItems.prototype.getAllWithValues = function (localStringPath, pathItemStringPath, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var localStringQuery = (options && options.localStringQuery !== undefined) ? options.localStringQuery : undefined;
  var pathItemStringQuery = (options && options.pathItemStringQuery !== undefined) ? options.pathItemStringQuery : undefined;
  // Validate
  try {
    if (localStringPath === null || localStringPath === undefined || typeof localStringPath.valueOf() !== 'string') {
      throw new Error('localStringPath cannot be null or undefined and it must be of type string.');
    }
    if (localStringQuery !== null && localStringQuery !== undefined && typeof localStringQuery.valueOf() !== 'string') {
      throw new Error('localStringQuery must be of type string.');
    }
    if (pathItemStringPath === null || pathItemStringPath === undefined || typeof pathItemStringPath.valueOf() !== 'string') {
      throw new Error('pathItemStringPath cannot be null or undefined and it must be of type string.');
    }
    if (pathItemStringQuery !== null && pathItemStringQuery !== undefined && typeof pathItemStringQuery.valueOf() !== 'string') {
      throw new Error('pathItemStringQuery must be of type string.');
    }
    if (this.client.globalStringPath === null || this.client.globalStringPath === undefined || typeof this.client.globalStringPath.valueOf() !== 'string') {
      throw new Error('this.client.globalStringPath cannot be null or undefined and it must be of type string.');
    }
    if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined && typeof this.client.globalStringQuery.valueOf() !== 'string') {
      throw new Error('this.client.globalStringQuery must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri +
                   '//pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery';
  requestUrl = requestUrl.replace('{localStringPath}', encodeURIComponent(localStringPath));
  requestUrl = requestUrl.replace('{pathItemStringPath}', encodeURIComponent(pathItemStringPath));
  requestUrl = requestUrl.replace('{globalStringPath}', encodeURIComponent(this.client.globalStringPath));
  var queryParameters = [];
  if (localStringQuery !== null && localStringQuery !== undefined) {
    queryParameters.push('localStringQuery=' + encodeURIComponent(localStringQuery));
  }
  if (pathItemStringQuery !== null && pathItemStringQuery !== undefined) {
    queryParameters.push('pathItemStringQuery=' + encodeURIComponent(pathItemStringQuery));
  }
  if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined) {
    queryParameters.push('globalStringQuery=' + encodeURIComponent(this.client.globalStringQuery));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  httpRequest.headers['Content-Length'] = 0;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = httpRequest;
      error.response = response;
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        error.body = new client._models['ErrorModel']();
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          error.body.deserialize(parsedErrorResponse);
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody - "%s" for the default response.', defaultError, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
};

/**
 * send globalStringPath='globalStringPath',
 * pathItemStringPath='pathItemStringPath',
 * localStringPath='localStringPath', globalStringQuery=null,
 * pathItemStringQuery='pathItemStringQuery',
 * localStringQuery='localStringQuery'
 *
 * @param {string} localStringPath should contain value 'localStringPath'
 * 
 * @param {string} pathItemStringPath A string value 'pathItemStringPath' that
 * appears in the path
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {string} [options.localStringQuery] should contain value
 * 'localStringQuery'
 * 
 * @param {string} [options.pathItemStringQuery] A string value
 * 'pathItemStringQuery' that appears as a query parameter
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
PathItems.prototype.getGlobalQueryNull = function (localStringPath, pathItemStringPath, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var localStringQuery = (options && options.localStringQuery !== undefined) ? options.localStringQuery : undefined;
  var pathItemStringQuery = (options && options.pathItemStringQuery !== undefined) ? options.pathItemStringQuery : undefined;
  // Validate
  try {
    if (localStringPath === null || localStringPath === undefined || typeof localStringPath.valueOf() !== 'string') {
      throw new Error('localStringPath cannot be null or undefined and it must be of type string.');
    }
    if (localStringQuery !== null && localStringQuery !== undefined && typeof localStringQuery.valueOf() !== 'string') {
      throw new Error('localStringQuery must be of type string.');
    }
    if (pathItemStringPath === null || pathItemStringPath === undefined || typeof pathItemStringPath.valueOf() !== 'string') {
      throw new Error('pathItemStringPath cannot be null or undefined and it must be of type string.');
    }
    if (pathItemStringQuery !== null && pathItemStringQuery !== undefined && typeof pathItemStringQuery.valueOf() !== 'string') {
      throw new Error('pathItemStringQuery must be of type string.');
    }
    if (this.client.globalStringPath === null || this.client.globalStringPath === undefined || typeof this.client.globalStringPath.valueOf() !== 'string') {
      throw new Error('this.client.globalStringPath cannot be null or undefined and it must be of type string.');
    }
    if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined && typeof this.client.globalStringQuery.valueOf() !== 'string') {
      throw new Error('this.client.globalStringQuery must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri +
                   '//pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/localStringQuery';
  requestUrl = requestUrl.replace('{localStringPath}', encodeURIComponent(localStringPath));
  requestUrl = requestUrl.replace('{pathItemStringPath}', encodeURIComponent(pathItemStringPath));
  requestUrl = requestUrl.replace('{globalStringPath}', encodeURIComponent(this.client.globalStringPath));
  var queryParameters = [];
  if (localStringQuery !== null && localStringQuery !== undefined) {
    queryParameters.push('localStringQuery=' + encodeURIComponent(localStringQuery));
  }
  if (pathItemStringQuery !== null && pathItemStringQuery !== undefined) {
    queryParameters.push('pathItemStringQuery=' + encodeURIComponent(pathItemStringQuery));
  }
  if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined) {
    queryParameters.push('globalStringQuery=' + encodeURIComponent(this.client.globalStringQuery));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  httpRequest.headers['Content-Length'] = 0;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = httpRequest;
      error.response = response;
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        error.body = new client._models['ErrorModel']();
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          error.body.deserialize(parsedErrorResponse);
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody - "%s" for the default response.', defaultError, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
};

/**
 * send globalStringPath=globalStringPath,
 * pathItemStringPath='pathItemStringPath',
 * localStringPath='localStringPath', globalStringQuery=null,
 * pathItemStringQuery='pathItemStringQuery', localStringQuery=null
 *
 * @param {string} localStringPath should contain value 'localStringPath'
 * 
 * @param {string} pathItemStringPath A string value 'pathItemStringPath' that
 * appears in the path
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {string} [options.localStringQuery] should contain null value
 * 
 * @param {string} [options.pathItemStringQuery] A string value
 * 'pathItemStringQuery' that appears as a query parameter
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
PathItems.prototype.getGlobalAndLocalQueryNull = function (localStringPath, pathItemStringPath, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var localStringQuery = (options && options.localStringQuery !== undefined) ? options.localStringQuery : undefined;
  var pathItemStringQuery = (options && options.pathItemStringQuery !== undefined) ? options.pathItemStringQuery : undefined;
  // Validate
  try {
    if (localStringPath === null || localStringPath === undefined || typeof localStringPath.valueOf() !== 'string') {
      throw new Error('localStringPath cannot be null or undefined and it must be of type string.');
    }
    if (localStringQuery !== null && localStringQuery !== undefined && typeof localStringQuery.valueOf() !== 'string') {
      throw new Error('localStringQuery must be of type string.');
    }
    if (pathItemStringPath === null || pathItemStringPath === undefined || typeof pathItemStringPath.valueOf() !== 'string') {
      throw new Error('pathItemStringPath cannot be null or undefined and it must be of type string.');
    }
    if (pathItemStringQuery !== null && pathItemStringQuery !== undefined && typeof pathItemStringQuery.valueOf() !== 'string') {
      throw new Error('pathItemStringQuery must be of type string.');
    }
    if (this.client.globalStringPath === null || this.client.globalStringPath === undefined || typeof this.client.globalStringPath.valueOf() !== 'string') {
      throw new Error('this.client.globalStringPath cannot be null or undefined and it must be of type string.');
    }
    if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined && typeof this.client.globalStringQuery.valueOf() !== 'string') {
      throw new Error('this.client.globalStringQuery must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri +
                   '//pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null';
  requestUrl = requestUrl.replace('{localStringPath}', encodeURIComponent(localStringPath));
  requestUrl = requestUrl.replace('{pathItemStringPath}', encodeURIComponent(pathItemStringPath));
  requestUrl = requestUrl.replace('{globalStringPath}', encodeURIComponent(this.client.globalStringPath));
  var queryParameters = [];
  if (localStringQuery !== null && localStringQuery !== undefined) {
    queryParameters.push('localStringQuery=' + encodeURIComponent(localStringQuery));
  }
  if (pathItemStringQuery !== null && pathItemStringQuery !== undefined) {
    queryParameters.push('pathItemStringQuery=' + encodeURIComponent(pathItemStringQuery));
  }
  if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined) {
    queryParameters.push('globalStringQuery=' + encodeURIComponent(this.client.globalStringQuery));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  httpRequest.headers['Content-Length'] = 0;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = httpRequest;
      error.response = response;
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        error.body = new client._models['ErrorModel']();
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          error.body.deserialize(parsedErrorResponse);
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody - "%s" for the default response.', defaultError, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
};

/**
 * send globalStringPath='globalStringPath',
 * pathItemStringPath='pathItemStringPath',
 * localStringPath='localStringPath', globalStringQuery='globalStringQuery',
 * pathItemStringQuery=null, localStringQuery=null
 *
 * @param {string} localStringPath should contain value 'localStringPath'
 * 
 * @param {string} pathItemStringPath A string value 'pathItemStringPath' that
 * appears in the path
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {string} [options.localStringQuery] should contain value null
 * 
 * @param {string} [options.pathItemStringQuery] should contain value null
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
PathItems.prototype.getLocalPathItemQueryNull = function (localStringPath, pathItemStringPath, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var localStringQuery = (options && options.localStringQuery !== undefined) ? options.localStringQuery : undefined;
  var pathItemStringQuery = (options && options.pathItemStringQuery !== undefined) ? options.pathItemStringQuery : undefined;
  // Validate
  try {
    if (localStringPath === null || localStringPath === undefined || typeof localStringPath.valueOf() !== 'string') {
      throw new Error('localStringPath cannot be null or undefined and it must be of type string.');
    }
    if (localStringQuery !== null && localStringQuery !== undefined && typeof localStringQuery.valueOf() !== 'string') {
      throw new Error('localStringQuery must be of type string.');
    }
    if (pathItemStringPath === null || pathItemStringPath === undefined || typeof pathItemStringPath.valueOf() !== 'string') {
      throw new Error('pathItemStringPath cannot be null or undefined and it must be of type string.');
    }
    if (pathItemStringQuery !== null && pathItemStringQuery !== undefined && typeof pathItemStringQuery.valueOf() !== 'string') {
      throw new Error('pathItemStringQuery must be of type string.');
    }
    if (this.client.globalStringPath === null || this.client.globalStringPath === undefined || typeof this.client.globalStringPath.valueOf() !== 'string') {
      throw new Error('this.client.globalStringPath cannot be null or undefined and it must be of type string.');
    }
    if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined && typeof this.client.globalStringQuery.valueOf() !== 'string') {
      throw new Error('this.client.globalStringQuery must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri +
                   '//pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null';
  requestUrl = requestUrl.replace('{localStringPath}', encodeURIComponent(localStringPath));
  requestUrl = requestUrl.replace('{pathItemStringPath}', encodeURIComponent(pathItemStringPath));
  requestUrl = requestUrl.replace('{globalStringPath}', encodeURIComponent(this.client.globalStringPath));
  var queryParameters = [];
  if (localStringQuery !== null && localStringQuery !== undefined) {
    queryParameters.push('localStringQuery=' + encodeURIComponent(localStringQuery));
  }
  if (pathItemStringQuery !== null && pathItemStringQuery !== undefined) {
    queryParameters.push('pathItemStringQuery=' + encodeURIComponent(pathItemStringQuery));
  }
  if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined) {
    queryParameters.push('globalStringQuery=' + encodeURIComponent(this.client.globalStringQuery));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  httpRequest.headers['Content-Length'] = 0;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = httpRequest;
      error.response = response;
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        error.body = new client._models['ErrorModel']();
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          error.body.deserialize(parsedErrorResponse);
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody - "%s" for the default response.', defaultError, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
};


module.exports = PathItems;
