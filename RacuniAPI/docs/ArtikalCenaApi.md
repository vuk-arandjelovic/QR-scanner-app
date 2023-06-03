# FastApi.ArtikalCenaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getArtikalCenaAllArtikalCenaAllGet**](ArtikalCenaApi.md#getArtikalCenaAllArtikalCenaAllGet) | **GET** /artikal_cena/all | Get Artikal Cena All
[**getArtikalCenaByArtikalIdArtikalCenaArtikalIdArtikalIdGet**](ArtikalCenaApi.md#getArtikalCenaByArtikalIdArtikalCenaArtikalIdArtikalIdGet) | **GET** /artikal_cena/artikal_id/{artikal_id} | Get Artikal Cena By Artikal Id
[**getArtikalCenaByIdArtikalCenaIdIdGet**](ArtikalCenaApi.md#getArtikalCenaByIdArtikalCenaIdIdGet) | **GET** /artikal_cena/id/{id} | Get Artikal Cena By Id



## getArtikalCenaAllArtikalCenaAllGet

> Object getArtikalCenaAllArtikalCenaAllGet()

Get Artikal Cena All

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ArtikalCenaApi();
apiInstance.getArtikalCenaAllArtikalCenaAllGet((error, data, response) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getArtikalCenaByArtikalIdArtikalCenaArtikalIdArtikalIdGet

> Object getArtikalCenaByArtikalIdArtikalCenaArtikalIdArtikalIdGet(artikalId)

Get Artikal Cena By Artikal Id

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ArtikalCenaApi();
let artikalId = 56; // Number | 
apiInstance.getArtikalCenaByArtikalIdArtikalCenaArtikalIdArtikalIdGet(artikalId, (error, data, response) => {
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
 **artikalId** | **Number**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getArtikalCenaByIdArtikalCenaIdIdGet

> Object getArtikalCenaByIdArtikalCenaIdIdGet(id)

Get Artikal Cena By Id

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ArtikalCenaApi();
let id = 56; // Number | 
apiInstance.getArtikalCenaByIdArtikalCenaIdIdGet(id, (error, data, response) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

