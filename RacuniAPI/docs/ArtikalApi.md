# FastApi.ArtikalApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getArtikalAllArtikalAllGet**](ArtikalApi.md#getArtikalAllArtikalAllGet) | **GET** /artikal/all | Get Artikal All
[**getArtikalByIdArtikalIdIdGet**](ArtikalApi.md#getArtikalByIdArtikalIdIdGet) | **GET** /artikal/id/{id} | Get Artikal By Id
[**getArtikalByNazivArtikalNazivNazivGet**](ArtikalApi.md#getArtikalByNazivArtikalNazivNazivGet) | **GET** /artikal/naziv/{naziv} | Get Artikal By Naziv
[**getArtikalByProdavnicaIdArtikalProdavnicaIdProdavnicaIdGet**](ArtikalApi.md#getArtikalByProdavnicaIdArtikalProdavnicaIdProdavnicaIdGet) | **GET** /artikal/prodavnica_id/{prodavnica_id} | Get Artikal By Prodavnica Id



## getArtikalAllArtikalAllGet

> Object getArtikalAllArtikalAllGet()

Get Artikal All

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ArtikalApi();
apiInstance.getArtikalAllArtikalAllGet((error, data, response) => {
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


## getArtikalByIdArtikalIdIdGet

> Object getArtikalByIdArtikalIdIdGet(id)

Get Artikal By Id

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ArtikalApi();
let id = 56; // Number | 
apiInstance.getArtikalByIdArtikalIdIdGet(id, (error, data, response) => {
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


## getArtikalByNazivArtikalNazivNazivGet

> Object getArtikalByNazivArtikalNazivNazivGet(naziv)

Get Artikal By Naziv

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ArtikalApi();
let naziv = "naziv_example"; // String | 
apiInstance.getArtikalByNazivArtikalNazivNazivGet(naziv, (error, data, response) => {
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
 **naziv** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getArtikalByProdavnicaIdArtikalProdavnicaIdProdavnicaIdGet

> Object getArtikalByProdavnicaIdArtikalProdavnicaIdProdavnicaIdGet(prodavnicaId)

Get Artikal By Prodavnica Id

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ArtikalApi();
let prodavnicaId = 56; // Number | 
apiInstance.getArtikalByProdavnicaIdArtikalProdavnicaIdProdavnicaIdGet(prodavnicaId, (error, data, response) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

