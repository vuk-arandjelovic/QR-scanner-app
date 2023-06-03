# FastApi.FirmaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFirmaByNazivFirmaAllGet**](FirmaApi.md#getFirmaByNazivFirmaAllGet) | **GET** /firma/all | Get Firma By Naziv
[**getFirmaByNazivFirmaNazivNazivGet**](FirmaApi.md#getFirmaByNazivFirmaNazivNazivGet) | **GET** /firma/naziv/{naziv} | Get Firma By Naziv
[**getFirmaByPibFirmaPibPibGet**](FirmaApi.md#getFirmaByPibFirmaPibPibGet) | **GET** /firma/pib/{pib} | Get Firma By Pib



## getFirmaByNazivFirmaAllGet

> Object getFirmaByNazivFirmaAllGet()

Get Firma By Naziv

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FirmaApi();
apiInstance.getFirmaByNazivFirmaAllGet((error, data, response) => {
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


## getFirmaByNazivFirmaNazivNazivGet

> Object getFirmaByNazivFirmaNazivNazivGet(naziv)

Get Firma By Naziv

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FirmaApi();
let naziv = "naziv_example"; // String | 
apiInstance.getFirmaByNazivFirmaNazivNazivGet(naziv, (error, data, response) => {
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


## getFirmaByPibFirmaPibPibGet

> Object getFirmaByPibFirmaPibPibGet(pib)

Get Firma By Pib

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FirmaApi();
let pib = 56; // Number | 
apiInstance.getFirmaByPibFirmaPibPibGet(pib, (error, data, response) => {
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

