# FastApi.ProdavnicaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProdavnicaByIdProdavnicaIdIdGet**](ProdavnicaApi.md#getProdavnicaByIdProdavnicaIdIdGet) | **GET** /prodavnica/id/{id} | Get Prodavnica By Id
[**getProdavnicaByPibProdavnicaAllGet**](ProdavnicaApi.md#getProdavnicaByPibProdavnicaAllGet) | **GET** /prodavnica/all | Get Prodavnica By Pib
[**getProdavnicaByPibProdavnicaPibPibGet**](ProdavnicaApi.md#getProdavnicaByPibProdavnicaPibPibGet) | **GET** /prodavnica/pib/{pib} | Get Prodavnica By Pib



## getProdavnicaByIdProdavnicaIdIdGet

> Object getProdavnicaByIdProdavnicaIdIdGet(id)

Get Prodavnica By Id

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ProdavnicaApi();
let id = 56; // Number | 
apiInstance.getProdavnicaByIdProdavnicaIdIdGet(id, (error, data, response) => {
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


## getProdavnicaByPibProdavnicaAllGet

> Object getProdavnicaByPibProdavnicaAllGet()

Get Prodavnica By Pib

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ProdavnicaApi();
apiInstance.getProdavnicaByPibProdavnicaAllGet((error, data, response) => {
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


## getProdavnicaByPibProdavnicaPibPibGet

> Object getProdavnicaByPibProdavnicaPibPibGet(pib)

Get Prodavnica By Pib

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ProdavnicaApi();
let pib = 56; // Number | 
apiInstance.getProdavnicaByPibProdavnicaPibPibGet(pib, (error, data, response) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

