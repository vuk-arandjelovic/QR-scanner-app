# FastApi.AllApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getArtikalAllArtikalAllGet**](AllApi.md#getArtikalAllArtikalAllGet) | **GET** /artikal/all | Get Artikal All
[**getArtikalCenaAllArtikalCenaAllGet**](AllApi.md#getArtikalCenaAllArtikalCenaAllGet) | **GET** /artikal_cena/all | Get Artikal Cena All
[**getBackupUrlAllBackupUrlAllGet**](AllApi.md#getBackupUrlAllBackupUrlAllGet) | **GET** /backup/url/all | Get Backup Url All
[**getFirmaByNazivFirmaAllGet**](AllApi.md#getFirmaByNazivFirmaAllGet) | **GET** /firma/all | Get Firma By Naziv
[**getProdavnicaByPibProdavnicaAllGet**](AllApi.md#getProdavnicaByPibProdavnicaAllGet) | **GET** /prodavnica/all | Get Prodavnica By Pib
[**getRacunAllRacunAllGet**](AllApi.md#getRacunAllRacunAllGet) | **GET** /racun/all | Get Racun All
[**getRacunAllUrlRacunAllUrlGet**](AllApi.md#getRacunAllUrlRacunAllUrlGet) | **GET** /racun/all/url | Get Racun All Url



## getArtikalAllArtikalAllGet

> Object getArtikalAllArtikalAllGet()

Get Artikal All

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AllApi();
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


## getArtikalCenaAllArtikalCenaAllGet

> Object getArtikalCenaAllArtikalCenaAllGet()

Get Artikal Cena All

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AllApi();
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


## getBackupUrlAllBackupUrlAllGet

> Object getBackupUrlAllBackupUrlAllGet()

Get Backup Url All

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.AllApi();
apiInstance.getBackupUrlAllBackupUrlAllGet((error, data, response) => {
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


## getFirmaByNazivFirmaAllGet

> Object getFirmaByNazivFirmaAllGet()

Get Firma By Naziv

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AllApi();
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


## getProdavnicaByPibProdavnicaAllGet

> Object getProdavnicaByPibProdavnicaAllGet()

Get Prodavnica By Pib

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AllApi();
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

let apiInstance = new FastApi.AllApi();
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

let apiInstance = new FastApi.AllApi();
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

