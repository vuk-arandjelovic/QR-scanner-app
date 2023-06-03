# FastApi.BackupApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBackupUrlAllBackupUrlAllGet**](BackupApi.md#getBackupUrlAllBackupUrlAllGet) | **GET** /backup/url/all | Get Backup Url All



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

let apiInstance = new FastApi.BackupApi();
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

