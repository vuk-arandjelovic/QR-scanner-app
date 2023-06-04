# FastApi.ArtikalRacunApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getArtikalRacunByArtikalIdArtikalRacunArtikalIdIdArtiklaGet**](ArtikalRacunApi.md#getArtikalRacunByArtikalIdArtikalRacunArtikalIdIdArtiklaGet) | **GET** /artikal_racun/artikal_id/{id_artikla} | Get Artikal Racun By Artikal Id
[**getArtikalRacunByIdArtikalRacunIdIdGet**](ArtikalRacunApi.md#getArtikalRacunByIdArtikalRacunIdIdGet) | **GET** /artikal_racun/id/{id} | Get Artikal Racun By Id
[**getArtikalRacunByRacunIdArtikalRacunRacunIdRacunIdGet**](ArtikalRacunApi.md#getArtikalRacunByRacunIdArtikalRacunRacunIdRacunIdGet) | **GET** /artikal_racun/racun_id/{racun_id} | Get Artikal Racun By Racun Id



## getArtikalRacunByArtikalIdArtikalRacunArtikalIdIdArtiklaGet

> Object getArtikalRacunByArtikalIdArtikalRacunArtikalIdIdArtiklaGet(idArtikla)

Get Artikal Racun By Artikal Id

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.ArtikalRacunApi();
let idArtikla = 56; // Number | 
apiInstance.getArtikalRacunByArtikalIdArtikalRacunArtikalIdIdArtiklaGet(idArtikla, (error, data, response) => {
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
 **idArtikla** | **Number**|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getArtikalRacunByIdArtikalRacunIdIdGet

> Object getArtikalRacunByIdArtikalRacunIdIdGet(id)

Get Artikal Racun By Id

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.ArtikalRacunApi();
let id = 56; // Number | 
apiInstance.getArtikalRacunByIdArtikalRacunIdIdGet(id, (error, data, response) => {
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


## getArtikalRacunByRacunIdArtikalRacunRacunIdRacunIdGet

> Object getArtikalRacunByRacunIdArtikalRacunRacunIdRacunIdGet(racunId)

Get Artikal Racun By Racun Id

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.ArtikalRacunApi();
let racunId = 56; // Number | 
apiInstance.getArtikalRacunByRacunIdArtikalRacunRacunIdRacunIdGet(racunId, (error, data, response) => {
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
 **racunId** | **Number**|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

