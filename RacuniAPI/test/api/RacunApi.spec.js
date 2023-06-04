/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FastApi);
  }
}(this, function(expect, FastApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FastApi.RacunApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RacunApi', function() {
    describe('getRacunAllRacunAllGet', function() {
      it('should call getRacunAllRacunAllGet successfully', function(done) {
        //uncomment below and update the code to test getRacunAllRacunAllGet
        //instance.getRacunAllRacunAllGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRacunAllUrlRacunAllUrlGet', function() {
      it('should call getRacunAllUrlRacunAllUrlGet successfully', function(done) {
        //uncomment below and update the code to test getRacunAllUrlRacunAllUrlGet
        //instance.getRacunAllUrlRacunAllUrlGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRacunByIdRacunIdIdGet', function() {
      it('should call getRacunByIdRacunIdIdGet successfully', function(done) {
        //uncomment below and update the code to test getRacunByIdRacunIdIdGet
        //instance.getRacunByIdRacunIdIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRacunByPibRacunProdavnicaIdPibGet', function() {
      it('should call getRacunByPibRacunProdavnicaIdPibGet successfully', function(done) {
        //uncomment below and update the code to test getRacunByPibRacunProdavnicaIdPibGet
        //instance.getRacunByPibRacunProdavnicaIdPibGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRacunByProdavnicaIdRacunProdavnicaIdProdavnicaIdGet', function() {
      it('should call getRacunByProdavnicaIdRacunProdavnicaIdProdavnicaIdGet successfully', function(done) {
        //uncomment below and update the code to test getRacunByProdavnicaIdRacunProdavnicaIdProdavnicaIdGet
        //instance.getRacunByProdavnicaIdRacunProdavnicaIdProdavnicaIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));