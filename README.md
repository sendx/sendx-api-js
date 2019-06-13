# send_x_rest_api

SendXRestApi - NodeJS client for send_x_rest_api

*NOTE:* All API calls contain 2 parameters - 'api_key' and 'team_id'. These can be inferred from your settings page 'https://app.sendx.io/setting' under the sections 'Api Key' and 'Team Id' respectively.  

For checking language specific Clients: 
  - [Golang](https://github.com/sendx/sendx-api-go)
  - [Python](https://github.com/sendx/sendx-api-python)
  - [Ruby](https://github.com/sendx/sendx-api-ruby)
  - [Java](https://github.com/sendx/sendx-api-java)
  - [PHP](https://github.com/sendx/sendx-api-php)
  - [NodeJS](https://github.com/sendx/sendx-api-nodejs)
  - [Javascript API](http://help.sendx.io/knowledge_base/topics/javascript-api-1) for client side integrations.
  
SendX REST API has two methods:
  - *Identify*
  - *Track*
  
## Identify API Method

Identify API Method is used to attach data to a visitor.
  
  - If a contact is not yet created then we will create the contact.
  - In case contact already exists then we update it.

### Example Request:       

```json      {         email: \"john.doe@gmail.com\",         firstName: \"John\",         lastName: \"Doe\",         birthday: \"1989-03-03\",         customFields: {           \"Designation\": \"Software Engineer\",           \"Age\": \"27\",           \"Experience\": \"5\"         },         tags: [\"Developer\", \"API Team\"],      }```

  - Tags are an array of strings.
  - In case they don't exist previously then API will create them and associate them with the contact.
  - Similarly if a custom field doesn't exist then it is first created and then associated with the contact along-with the corresponding value.
  - In case custom field exists already then we simply update the value of it for the aforementioned contact.    Custom Fields are associated with data types and which be created and edited inside the app.
  - If a custom field is not present inside the app and an API call is made containing it, a custom field with type 'string' is created and the value set.
  - For custom fields with data type 'number', values can be added to or subtracted from existing values. This can be done by using \"++\" or \"--\" operator before the number (e.g. \"customField_name\": \"++34\" would increase the value of existing \"customField_name\" in SendX for the contact.
  - If it doesn't already exist, the value '34' would be inserted for it).
  - We don't delete any of the properties based on identify call. What this means is that if for the same contact you did two API calls like:
  
### API Call A
```json      {         email: \"john.doe@gmail.com\",         firstName: \"John\",         birthday: \"1989-03-03\",         customFields: {           \"Designation\": \"Software Engineer\"         },         tags: [\"Developer\"],      }```
  
### API Call B
```json      {         email: \"john.doe@gmail.com\",         customFields: {           \"Age\": \"29\"         },         tags: [\"API Team\"],      }   ```
  
Then the final contact will have firstName as **John**, birthday as **1989-03-03** present. Also both tags **Developer** and **API Team** shall be present along with custom fields **Designation** and **Age**.
  
## Properties: 
  - **firstName**: type string
  - **lastName**: type string
  - **email**: type string
  - **newEmail**: type string
  - **company**: type string
  - **birthday**: type string with format **YYYY-MM-DD** eg: 2016-11-21
  - **customFields**: type map[string]string
  - **tags**: type array of string
    
In case email of an already existing contact needs to be updated then specify current email under email property and updated email under newEmail property.

## Response:
```json      {         \"status\": \"200\",         \"message\": \"OK\",         \"data\": {           \"encryptedTeamId\": \"CLdh9Ig5GLIN1u8gTRvoja\",           \"encryptedId\": \"c9QF63nrBenCaAXe660byz\",           \"tags\": [             \"API Team\",             \"Tech\"           ],           \"firstName\": \"John\",           \"lastName\": \"Doe\",           \"email\": \"john.doe@gmail.com\",           \"company\": \"\",           \"birthday\": \"1989-03-03\",           \"customFields\": {             \"Age\": \"29\",             \"Designation\": \"Software Engineer\"           }           }        }   ```

## Track API Method

Track API Method is used to track a contact. In the track API object you can:
  - **addTags**
  - **removeTags**

You can have automation rules based on tag addition as well as tag removal and they will get executed Eg:
  - On **user registration** tag start onboarding drip for contact
  - **Account Upgrade** tag start add user to paid user list and start account expansion drip.
  - On removal of **trial user** tag start upsell trial completed users drip.
  
### Example Request:
```      >     \\_scq.push([\"track\", {        \"addTags\": [\"blogger\", \"female\"]     }]);           >     \\_scq.push([\"track\", {        \"addTags\": [\"paid user\"],        \"removeTags\": [\"trial user\"]     }]);           **Response:**      >      {       \"status\": \"200\",       \"message\": \"OK\",       \"data\": \"success\"      }```

---

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- Package version: v1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install send_x_rest_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your send_x_rest_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('send_x_rest_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/send_x_rest_api
then install it via:

```shell
    npm install YOUR_USERNAME/send_x_rest_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SendXRestApi = require('send_x_rest_api');

var api = new SendXRestApi.ContactApi()

var apiKey = "apiKey_example"; // {String} 

var teamId = "teamId_example"; // {String} 

var contactDetails = new SendXRestApi.ContactRequest(); // {ContactRequest} Contact details

var contactDetails.email = "john.doe@gmail.com";
var contactDetails.firstName = "John";
var contactDetails.lastName = "Doe";
var contactDetails.birthday = "1989-03-03";
var contactDetails.customFields = {"Designation": "Software Engineer"};
var contactDetails.tags = ["Developer"];

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.contactIdentifyPost(apiKey, teamId, contactDetails, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://app.sendx.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SendXRestApi.ContactApi* | [**contactIdentifyPost**](docs/ContactApi.md#contactIdentifyPost) | **POST** /contact/identify | Identify a contact as user
*SendXRestApi.ContactApi* | [**contactTrackPost**](docs/ContactApi.md#contactTrackPost) | **POST** /contact/track | Add tracking info using tags to a contact


## Documentation for Models

 - [SendXRestApi.Contact](docs/Contact.md)
 - [SendXRestApi.ContactRequest](docs/ContactRequest.md)
 - [SendXRestApi.ContactResponse](docs/ContactResponse.md)
 - [SendXRestApi.TrackRequest](docs/TrackRequest.md)
 - [SendXRestApi.TrackResponse](docs/TrackResponse.md)


## Documentation for Authorization

 All endpoints do not require authorization.

