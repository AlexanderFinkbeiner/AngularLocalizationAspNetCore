"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var app_constants_1 = require('../app.constants');
var angular2localization_1 = require('angular2localization/angular2localization');
var ProductService = (function () {
    function ProductService(_http, _configuration, _locale) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this._locale = _locale;
        this.GetAvailableProducts = function () {
            console.log(_this._locale.getCurrentLanguage());
            console.log(_this._locale.getCurrentCountry());
            _this.isoCode = _this._locale.getCurrentLanguage() + "-" + _this._locale.getCurrentCountry();
            _this.setHeaders();
            return _this._http.get(_this.actionUrl + "AvailableProducts?culture=" + _this.isoCode, {
                headers: _this.headers
            }).map(function (res) { return res.json(); });
        };
        this.actionUrl = _configuration.Server + "api/Shop/";
    }
    ProductService.prototype.setHeaders = function () {
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration, angular2localization_1.LocaleService])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map