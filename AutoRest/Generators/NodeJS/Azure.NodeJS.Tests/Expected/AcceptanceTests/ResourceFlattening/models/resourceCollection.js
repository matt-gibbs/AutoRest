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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ResourceCollection class.
 * @constructor
 * @member {object} [productresource]
 * 
 * @member {string} [productresource.pname]
 * 
 * @member {string} [productresource.flattenedProductType]
 * 
 * @member {string} [productresource.provisioningStateValues] Possible values
 * for this property include: 'Succeeded', 'Failed', 'canceled', 'Accepted',
 * 'Creating', 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'.
 * 
 * @member {string} [productresource.provisioningState]
 * 
 * @member {array} [arrayofresources]
 * 
 * @member {object} [dictionaryofresources]
 * 
 */
function ResourceCollection(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.productresource) {
      this.productresource = new models['FlattenedProduct'](parameters.productresource);
    }
    if (parameters.arrayofresources) {
      var tempParametersarrayofresources = [];
      parameters.arrayofresources.forEach(function(element) {
        if (element) {
          element = new models['FlattenedProduct'](element);
        }
        tempParametersarrayofresources.push(element);
      });
      this.arrayofresources = tempParametersarrayofresources;
    }
    if (parameters.dictionaryofresources) {
      this.dictionaryofresources = {};
      for(var valueElement in parameters.dictionaryofresources) {
        if (parameters.dictionaryofresources[valueElement]) {
          this.dictionaryofresources[valueElement] = new models['FlattenedProduct'](parameters.dictionaryofresources[valueElement]);
        }
      }
    }
  }    
}


/**
 * Validate the payload against the ResourceCollection schema
 *
 * @param {JSON} payload
 *
 */
ResourceCollection.prototype.serialize = function () {
  var payload = {};
  if (this['productresource']) {
    payload['productresource'] = this['productresource'].serialize();
  }

  if (util.isArray(this['arrayofresources'])) {
    payload['arrayofresources'] = [];
    for (var i = 0; i < this['arrayofresources'].length; i++) {
      if (this['arrayofresources'][i]) {
        payload['arrayofresources'][i] = this['arrayofresources'][i].serialize();
      }
    }
  }

  if (this['dictionaryofresources'] && typeof this['dictionaryofresources'] === 'object') {
    payload['dictionaryofresources'] = {};
    for(var valueElement1 in this['dictionaryofresources']) {
      if (this['dictionaryofresources'][valueElement1]) {
        payload['dictionaryofresources'][valueElement1] = this['dictionaryofresources'][valueElement1].serialize();
      }
      else {
        payload['dictionaryofresources'][valueElement1] = this['dictionaryofresources'][valueElement1];
      }
    }
  }

  return payload;
};

/**
 * Deserialize the instance to ResourceCollection schema
 *
 * @param {JSON} instance
 *
 */
ResourceCollection.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['productresource']) {
      this['productresource'] = new models['FlattenedProduct']().deserialize(instance['productresource']);
    }

    if (instance['arrayofresources']) {
      var tempInstancearrayofresources = [];
      instance['arrayofresources'].forEach(function(element1) {
        if (element1) {
          element1 = new models['FlattenedProduct']().deserialize(element1);
        }
        tempInstancearrayofresources.push(element1);
      });
      this['arrayofresources'] = tempInstancearrayofresources;
    }

    if (instance['dictionaryofresources']) {
      this['dictionaryofresources'] = {};
      for(var valueElement2 in instance['dictionaryofresources']) {
        if (instance['dictionaryofresources'] !== null && instance['dictionaryofresources'] !== undefined) {
          if (instance['dictionaryofresources'][valueElement2]) {
            this['dictionaryofresources'][valueElement2] = new models['FlattenedProduct']().deserialize(instance['dictionaryofresources'][valueElement2]);
          }
        }
      }
    }
  }

  return this;
};

module.exports = ResourceCollection;
