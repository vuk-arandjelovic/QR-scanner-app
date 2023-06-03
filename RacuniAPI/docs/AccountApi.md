# FastApi.AccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginForAccessTokenTokenPost**](AccountApi.md#loginForAccessTokenTokenPost) | **POST** /token | Login For Access Token
[**readUsersMeUserMeGet**](AccountApi.md#readUsersMeUserMeGet) | **GET** /user/me/ | Read Users Me



## loginForAccessTokenTokenPost

> Token loginForAccessTokenTokenPost(username, password, opts)

Login For Access Token

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AccountApi();
let username = "username_example"; // String | 
let password = "password_example"; // String | 
let opts = {
  'grantType': "grantType_example", // String | 
  'scope': "''", // String | 
  'clientId': "clientId_example", // String | 
  'clientSecret': "clientSecret_example" // String | 
};
apiInstance.loginForAccessTokenTokenPost(username, password, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **grantType** | **String**|  | [optional] 
 **scope** | **String**|  | [optional] [default to &#39;&#39;]
 **clientId** | **String**|  | [optional] 
 **clientSecret** | **String**|  | [optional] 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## readUsersMeUserMeGet

> User readUsersMeUserMeGet()

Read Users Me

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.AccountApi();
apiInstance.readUsersMeUserMeGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

