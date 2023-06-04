# FastApi.RacunApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRacunRacunPost**](RacunApi.md#addRacunRacunPost) | **POST** /racun/ | Add Racun
[**getRacunAllRacunAllGet**](RacunApi.md#getRacunAllRacunAllGet) | **GET** /racun/all | Get Racun All
[**getRacunAllUrlRacunAllUrlGet**](RacunApi.md#getRacunAllUrlRacunAllUrlGet) | **GET** /racun/all/url | Get Racun All Url
[**getRacunByIdRacunIdIdGet**](RacunApi.md#getRacunByIdRacunIdIdGet) | **GET** /racun/id/{id} | Get Racun By Id
[**getRacunByPibRacunProdavnicaIdPibGet**](RacunApi.md#getRacunByPibRacunProdavnicaIdPibGet) | **GET** /racun/prodavnica_id/{pib} | Get Racun By Pib
[**getRacunByProdavnicaIdRacunProdavnicaIdProdavnicaIdGet**](RacunApi.md#getRacunByProdavnicaIdRacunProdavnicaIdProdavnicaIdGet) | **GET** /racun/prodavnica_id/{prodavnica_id} | Get Racun By Prodavnica Id



## addRacunRacunPost

> Object addRacunRacunPost(url)

Add Racun

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.RacunApi();
let url = "url_example"; // String | 
apiInstance.addRacunRacunPost(url, (error, data, response) => {
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
 **url** | **String**|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRacunAllRacunAllGet

> Object getRacunAllRacunAllGet()

Get Racun All

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.RacunApi();
apiInstance.getRacunAllRacunAllGet((error, data, response) => {
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

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRacunAllUrlRacunAllUrlGet

> Object getRacunAllUrlRacunAllUrlGet()

Get Racun All Url

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.RacunApi();
apiInstance.getRacunAllUrlRacunAllUrlGet((error, data, response) => {
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

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRacunByIdRacunIdIdGet

> Object getRacunByIdRacunIdIdGet(id)

Get Racun By Id

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.RacunApi();
let id = 56; // Number | 
apiInstance.getRacunByIdRacunIdIdGet(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRacunByPibRacunProdavnicaIdPibGet

> Object getRacunByPibRacunProdavnicaIdPibGet(pib)

Get Racun By Pib

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.RacunApi();
let pib = 56; // Number | 
apiInstance.getRacunByPibRacunProdavnicaIdPibGet(pib, (error, data, response) => {
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
 **pib** | **Number**|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRacunByProdavnicaIdRacunProdavnicaIdProdavnicaIdGet

> Object getRacunByProdavnicaIdRacunProdavnicaIdProdavnicaIdGet(prodavnicaId)

Get Racun By Prodavnica Id

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.RacunApi();
let prodavnicaId = 56; // Number | 
apiInstance.getRacunByProdavnicaIdRacunProdavnicaIdProdavnicaIdGet(prodavnicaId, (error, data, response) => {
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
 **prodavnicaId** | **Number**|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

