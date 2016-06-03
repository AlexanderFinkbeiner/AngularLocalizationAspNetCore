webpackJsonp([0],{

/***/ 0:
/*!*****************************!*\
  !*** ./wwwroot/app/boot.ts ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 280);
	var router_1 = __webpack_require__(/*! @angular/router */ 301);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 323);
	var app_constants_1 = __webpack_require__(/*! ./app.constants */ 341);
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
	    router_1.ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    app_constants_1.Configuration,
	]);


/***/ },

/***/ 323:
/*!**************************************!*\
  !*** ./wwwroot/app/app.component.ts ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 7);
	var router_1 = __webpack_require__(/*! @angular/router */ 301);
	var angular2localization_1 = __webpack_require__(/*! angular2localization/angular2localization */ 324);
	var angular2localization_2 = __webpack_require__(/*! angular2localization/angular2localization */ 324);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 337);
	var shop_component_1 = __webpack_require__(/*! ./shop/shop.component */ 339);
	var ProductService_1 = __webpack_require__(/*! ./services/ProductService */ 340);
	var AppComponent = (function (_super) {
	    __extends(AppComponent, _super);
	    function AppComponent(router, locale, localization, _productService) {
	        _super.call(this, null, localization);
	        this.router = router;
	        this.locale = locale;
	        this.localization = localization;
	        this._productService = _productService;
	        this.locale.addLanguage('de');
	        this.locale.addLanguage('fr');
	        this.locale.addLanguage('it');
	        this.locale.addLanguage('en');
	        this.locale.definePreferredLocale('en', 'US', 30);
	        this.localization.translationProvider('./i18n/locale-');
	        this.localization.updateTranslation();
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        this.router.navigate(['/home']);
	    };
	    AppComponent.prototype.ChangeCulture = function (language, country, currency) {
	        this.locale.setCurrentLocale(language, country);
	        this.locale.setCurrentCurrency(currency);
	        this.localization.updateTranslation();
	    };
	    AppComponent.prototype.ChangeCurrency = function (currency) {
	        this.locale.setCurrentCurrency(currency);
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: __webpack_require__(/*! ./app.component.html */ 343),
	            styles: [__webpack_require__(/*! ./app.component.css */ 345)],
	            directives: [router_1.ROUTER_DIRECTIVES],
	            providers: [angular2localization_1.LocalizationService, angular2localization_1.LocaleService, ProductService_1.ProductService],
	            pipes: [angular2localization_2.TranslatePipe]
	        }),
	        router_1.Routes([
	            { path: '/home', component: home_component_1.HomeComponent },
	            { path: '/shop', component: shop_component_1.ShopComponent }
	        ]), 
	        __metadata('design:paramtypes', [router_1.Router, angular2localization_1.LocaleService, angular2localization_1.LocalizationService, ProductService_1.ProductService])
	    ], AppComponent);
	    return AppComponent;
	}(angular2localization_1.Locale));
	exports.AppComponent = AppComponent;


/***/ },

/***/ 337:
/*!********************************************!*\
  !*** ./wwwroot/app/home/home.component.ts ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 7);
	var common_1 = __webpack_require__(/*! @angular/common */ 181);
	var HomeComponent = (function () {
	    function HomeComponent() {
	        this.message = "home.component";
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        console.log("ngOnInit HomeComponent");
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'homecomponent',
	            template: __webpack_require__(/*! ./home.component.html */ 338),
	            directives: [common_1.CORE_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 338:
/*!**********************************************!*\
  !*** ./wwwroot/app/home/home.component.html ***!
  \**********************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\r\n\r\n    <p>hello home</p>\r\n\r\n</div>";

/***/ },

/***/ 339:
/*!********************************************!*\
  !*** ./wwwroot/app/shop/shop.component.ts ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 7);
	var common_1 = __webpack_require__(/*! @angular/common */ 181);
	var angular2localization_1 = __webpack_require__(/*! angular2localization/angular2localization */ 324);
	var ProductService_1 = __webpack_require__(/*! ../services/ProductService */ 340);
	var angular2localization_2 = __webpack_require__(/*! angular2localization/angular2localization */ 324);
	var ShopComponent = (function () {
	    function ShopComponent(_locale, _productService) {
	        var _this = this;
	        this._locale = _locale;
	        this._productService = _productService;
	        this.message = "shop.component";
	        this._locale.countryCodeChanged.subscribe(function (item) { return _this.onCountryChangedDataRecieved(item); });
	        this._locale.currencyCodeChanged.subscribe(function (currency) { return _this.onChangedCurrencyRecieved(currency); });
	    }
	    ShopComponent.prototype.ngOnInit = function () {
	        console.log("ngOnInit ShopComponent");
	        this.GetProducts();
	        this.Currency = this._locale.getCurrentCurrency();
	        if (!(this.Currency === "CHF" || this.Currency === "EUR")) {
	            this.Currency = "CHF";
	        }
	    };
	    ShopComponent.prototype.GetProducts = function () {
	        var _this = this;
	        console.log('ShopComponent:GetProducts starting...');
	        this._productService.GetAvailableProducts()
	            .subscribe(function (data) {
	            _this.Products = data;
	        }, function (error) { return console.log(error); }, function () {
	            console.log('ProductService:GetProducts completed');
	        });
	    };
	    ShopComponent.prototype.onCountryChangedDataRecieved = function (item) {
	        this.GetProducts();
	        console.log("onProductDataRecieved");
	        console.log(item);
	    };
	    ShopComponent.prototype.onChangedCurrencyRecieved = function (currency) {
	        this.Currency = currency;
	        console.log("onChangedCurrencyRecieved");
	        console.log(currency);
	    };
	    ShopComponent = __decorate([
	        core_1.Component({
	            selector: 'shopcomponent',
	            template: __webpack_require__(/*! ./shop.component.html */ 342),
	            directives: [common_1.CORE_DIRECTIVES],
	            pipes: [angular2localization_2.TranslatePipe]
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocaleService, ProductService_1.ProductService])
	    ], ShopComponent);
	    return ShopComponent;
	}());
	exports.ShopComponent = ShopComponent;


/***/ },

/***/ 340:
/*!************************************************!*\
  !*** ./wwwroot/app/services/ProductService.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 7);
	var http_1 = __webpack_require__(/*! @angular/http */ 280);
	__webpack_require__(/*! rxjs/add/operator/map */ 326);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 341);
	var angular2localization_1 = __webpack_require__(/*! angular2localization/angular2localization */ 324);
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


/***/ },

/***/ 341:
/*!**************************************!*\
  !*** ./wwwroot/app/app.constants.ts ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 7);
	var Configuration = (function () {
	    function Configuration() {
	        this.Server = "http://localhost:5000/";
	    }
	    Configuration = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Configuration);
	    return Configuration;
	}());
	exports.Configuration = Configuration;


/***/ },

/***/ 342:
/*!**********************************************!*\
  !*** ./wwwroot/app/shop/shop.component.html ***!
  \**********************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\" >\r\n\r\n    <div class=\"panel-group\" *ngIf=\"Products\">\r\n\r\n        <div class=\"mcbutton col-md-4\" style=\"margin-left: -15px; margin-bottom: 10px;\" *ngFor=\"let product of Products\">\r\n            <div class=\"panel panel-default\" >\r\n                <div class=\"panel-heading\" style=\"color: #9d9d9d;background-color: #222;\">\r\n                    {{product.Name}}\r\n                    <span style=\"float:right;\" *ngIf=\"Currency === 'CHF'\">{{product.PriceCHF}} {{Currency}}</span>\r\n                    <span style=\"float:right;\" *ngIf=\"Currency === 'EUR'\">{{product.PriceEUR}} {{Currency}}</span>\r\n                </div>\r\n                <div class=\"panel-body\" style=\"height: 200px;\">\r\n                    <!--<img src=\"images/mc1.jpg\" style=\"width: 100%;margin-top: 20px;\" />-->\r\n                    {{product.Description}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n";

/***/ },

/***/ 343:
/*!****************************************!*\
  !*** ./wwwroot/app/app.component.html ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"container\" style=\"margin-top: 15px;\">\r\n   \r\n    <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <a [routerLink]=\"['/home']\" class=\"navbar-brand\"><img src=\"" + __webpack_require__(/*! ../images/damienbod.jpg */ 344) + "\" height=\"40\" style=\"margin-top:-10px;\" /></a>\r\n            </div>\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a [routerLink]=\"['/home']\">{{ 'NAV_MENU_HOME' | translate:lang }}</a></li>\r\n                <li><a [routerLink]=\"['/shop']\">{{ 'NAV_MENU_SHOP' | translate:lang }}</a></li>\r\n            </ul>\r\n\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a (click)=\"ChangeCulture('de','CH', 'CHF')\">de</a></li>\r\n                <li><a (click)=\"ChangeCulture('fr','CH', 'CHF')\">fr</a></li>\r\n                <li><a (click)=\"ChangeCulture('it','CH', 'CHF')\">it</a></li>\r\n                <li><a (click)=\"ChangeCulture('en','US', 'CHF')\">en</a></li>\r\n            </ul>\r\n\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <div class=\"navbar\" style=\"margin-bottom:0;\">\r\n                        <form class=\"navbar-form pull-left\">\r\n                            <select (change)=\"ChangeCurrency($event.target.value)\" class=\"form-control\">\r\n                                <option *ngFor=\"let currency of ['CHF', 'EUR']\">{{currency}}</option>\r\n                            </select>\r\n                        </form>\r\n                    </div>\r\n                </li>             \r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n\r\n";

/***/ },

/***/ 344:
/*!**************************************!*\
  !*** ./wwwroot/images/damienbod.jpg ***!
  \**************************************/
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },

/***/ 345:
/*!***************************************!*\
  !*** ./wwwroot/app/app.component.css ***!
  \***************************************/
/***/ function(module, exports) {

	module.exports = "body {\r\npadding-top: 50px;\r\n}\r\n\r\n.starter-template {\r\npadding: 40px 15px;\r\ntext-align: center;\r\n}\r\n\r\n.navigationLinkButton:hover {\r\ncursor: pointer;\r\n}"

/***/ }

});
//# sourceMappingURL=app.bundle.js.map