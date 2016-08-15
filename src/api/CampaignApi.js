/**
 * SendX API
 * SendX is built on the simple tenet that users must have open access to their data. SendX API is the first step in that direction. To cite some examples:   - subscribe / unsubscribe a contact from a list   - Schedule campaign to a segment of users   - Trigger transactional emails   - Get / PUT / POST and DELETE operations on team, campaign, list, contact, report etc. and so on.  As companies grow big, custom use cases around email marketing also crop up. SendX API ensures   that SendX platform is able to satisfy such unforeseen use cases. They may range from building     custom reporting dashboard to tagging contacts with custom attributes or triggering emails based on recommendation algorithm.  We do our best to have all our URLs be [RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer). Every endpoint (URL) may support one of four different http verbs. GET requests fetch information about an object, POST requests create objects, PUT requests update objects, and finally DELETE requests will delete objects.  Also all API calls besides:   - Subscribe / unsubscribe signup form  required **api_key** to be passed as **header**   ### The Envelope Every response is contained by an envelope. That is, each response has a predictable set of keys with which you can expect to interact: ```json {     \"status\": \"200\",      \"message\": \"OK\",     \"data\"\": [        {          ...        },        .        .        .     ] } ```  #### Status  The status key is used to communicate extra information about the response to the developer. If all goes well, you'll only ever see a code key with value 200. However, sometimes things go wrong, and in that case you might see a response like: ```json {     \"status\": \"404\" } ```  #### Data  The data key is the meat of the response. It may be a list containing single object or multiple objects  #### Message  This returns back human readable message. This is specially useful to make sense in case of error scenarios. 
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Campaign', 'model/CampaignAddUpdate', 'model/InlineResponse2002', 'model/InlineResponse200', 'model/InlineResponse2001'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Campaign'), require('../model/CampaignAddUpdate'), require('../model/InlineResponse2002'), require('../model/InlineResponse200'), require('../model/InlineResponse2001'));
  } else {
    // Browser globals (root is window)
    if (!root.SendXApi) {
      root.SendXApi = {};
    }
    root.SendXApi.CampaignApi = factory(root.SendXApi.ApiClient, root.SendXApi.Campaign, root.SendXApi.CampaignAddUpdate, root.SendXApi.InlineResponse2002, root.SendXApi.InlineResponse200, root.SendXApi.InlineResponse2001);
  }
}(this, function(ApiClient, Campaign, CampaignAddUpdate, InlineResponse2002, InlineResponse200, InlineResponse2001) {
  'use strict';

  /**
   * Campaign service.
   * @module api/CampaignApi
   * @version v1
   */

  /**
   * Constructs a new CampaignApi. 
   * @alias module:api/CampaignApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the campaignCampaignIdDelete operation.
     * @callback module:api/CampaignApi~campaignCampaignIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a campaign
     * 
     * @param {String} apiKey 
     * @param {Integer} campaignId Campaign ID to delete
     * @param {module:api/CampaignApi~campaignCampaignIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.campaignCampaignIdDelete = function(apiKey, campaignId, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling campaignCampaignIdDelete";
      }

      // verify the required parameter 'campaignId' is set
      if (campaignId == undefined || campaignId == null) {
        throw "Missing the required parameter 'campaignId' when calling campaignCampaignIdDelete";
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/campaign/{campaignId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignCampaignIdGet operation.
     * @callback module:api/CampaignApi~campaignCampaignIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Campaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find campaign by ID
     * 
     * @param {String} apiKey 
     * @param {Integer} campaignId ID of campaign that needs to be fetched
     * @param {module:api/CampaignApi~campaignCampaignIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Campaign}
     */
    this.campaignCampaignIdGet = function(apiKey, campaignId, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling campaignCampaignIdGet";
      }

      // verify the required parameter 'campaignId' is set
      if (campaignId == undefined || campaignId == null) {
        throw "Missing the required parameter 'campaignId' when calling campaignCampaignIdGet";
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Campaign;

      return this.apiClient.callApi(
        '/campaign/{campaignId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignCampaignIdPut operation.
     * @callback module:api/CampaignApi~campaignCampaignIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a campaign by ID
     * 
     * @param {String} apiKey 
     * @param {Integer} campaignId ID of campaign that needs to be updated
     * @param {module:model/CampaignAddUpdate} body Campaign object that needs to be added
     * @param {module:api/CampaignApi~campaignCampaignIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    this.campaignCampaignIdPut = function(apiKey, campaignId, body, callback) {
      var postBody = body;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling campaignCampaignIdPut";
      }

      // verify the required parameter 'campaignId' is set
      if (campaignId == undefined || campaignId == null) {
        throw "Missing the required parameter 'campaignId' when calling campaignCampaignIdPut";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling campaignCampaignIdPut";
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/campaign/{campaignId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignGet operation.
     * @callback module:api/CampaignApi~campaignGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information about all campaigns
     * 
     * @param {String} apiKey 
     * @param {module:api/CampaignApi~campaignGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.campaignGet = function(apiKey, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling campaignGet";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/campaign', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignPost operation.
     * @callback module:api/CampaignApi~campaignPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new campaign
     * 
     * @param {String} apiKey 
     * @param {module:model/CampaignAddUpdate} body Campaign object that needs to be added
     * @param {module:api/CampaignApi~campaignPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.campaignPost = function(apiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling campaignPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling campaignPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/campaign', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));