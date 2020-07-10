(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/users/user-list/user-list.component */ "./src/app/components/users/user-list/user-list.component.ts");
/* harmony import */ var _components_repos_repo_list_repo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/repos/repo-list/repo-list.component */ "./src/app/components/repos/repo-list/repo-list.component.ts");






const routes = [
    { path: '', component: _components_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"] },
    { path: 'repos/:username/:page', component: _components_repos_repo_list_repo_list_component__WEBPACK_IMPORTED_MODULE_3__["RepoListComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'github-explorer';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_users_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/users/user-card/user-card.component */ "./src/app/components/users/user-card/user-card.component.ts");
/* harmony import */ var _components_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/users/user-list/user-list.component */ "./src/app/components/users/user-list/user-list.component.ts");
/* harmony import */ var _services_config_app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/config/app-config.service */ "./src/app/services/config/app-config.service.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_repos_repo_list_repo_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/repos/repo-list/repo-list.component */ "./src/app/components/repos/repo-list/repo-list.component.ts");
/* harmony import */ var _components_repos_repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/repos/repo-card/repo-card.component */ "./src/app/components/repos/repo-card/repo-card.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            multi: true,
            deps: [_services_config_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfigService"]],
            useFactory: (appConfigService) => {
                return () => {
                    return appConfigService.loadConfig();
                };
            }
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_users_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_7__["UserCardComponent"],
        _components_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__["UserListComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        _components_repos_repo_list_repo_list_component__WEBPACK_IMPORTED_MODULE_11__["RepoListComponent"],
        _components_repos_repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_12__["RepoCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_users_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_7__["UserCardComponent"],
                    _components_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__["UserListComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                    _components_repos_repo_list_repo_list_component__WEBPACK_IMPORTED_MODULE_11__["RepoListComponent"],
                    _components_repos_repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_12__["RepoCardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [{
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                        multi: true,
                        deps: [_services_config_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfigService"]],
                        useFactory: (appConfigService) => {
                            return () => {
                                return appConfigService.loadConfig();
                            };
                        }
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 13, vars: 0, consts: [["color", "primary", 1, "toolbar"], ["mat-button", "", "routerLink", "/"], [1, "spacer"], ["href", "https://github.com/AngelUrq/github-explorer", "target", "_blank", 1, "repo-link"], ["mat-icon-button", "", 1, "example-icon"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "GitHub Explorer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Repository ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.repo-link[_ngcontent-%COMP%] {\r\n    font-size: 0.75em;\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5yZXBvLWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi50b29sYmFyIGkge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/repos/repo-card/repo-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/repos/repo-card/repo-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: RepoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoCardComponent", function() { return RepoCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






class RepoCardComponent {
    constructor() {
        this.name = '';
        this.url = '';
        this.description = '';
        this.forks = 0;
        this.openIssues = 0;
    }
    ngOnInit() {
    }
}
RepoCardComponent.ɵfac = function RepoCardComponent_Factory(t) { return new (t || RepoCardComponent)(); };
RepoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepoCardComponent, selectors: [["repo-card"]], inputs: { name: "name", url: "url", description: "description", forks: "forks", openIssues: "openIssues" }, decls: 24, vars: 4, consts: [[1, "card"], [1, "card-title"], [1, "account-icon"], [1, "card-content"], ["id", "github-button", "mat-raised-button", "", "color", "accent", 1, "btn-card"]], template: function RepoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Forks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Open Issues");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Open in GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.forks, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.openIssues, "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".card[_ngcontent-%COMP%] {\r\n    width: 20vw;\r\n}\r\n\r\n.card-content[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.profile-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 200px;\r\n    height: auto;\r\n}\r\n\r\n.account-icon[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.btn-card[_ngcontent-%COMP%] {\r\n    font-size: 0.75em;\r\n    display: block;\r\n    width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcy9yZXBvLWNhcmQvcmVwby1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXBvcy9yZXBvLWNhcmQvcmVwby1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICB3aWR0aDogMjB2dztcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hY2NvdW50LWljb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuLWNhcmQge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepoCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'repo-card',
                templateUrl: './repo-card.component.html',
                styleUrls: ['./repo-card.component.css']
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], forks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openIssues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/repos/repo-list/repo-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/repos/repo-list/repo-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: RepoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoListComponent", function() { return RepoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_repos_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/repos/repo.service */ "./src/app/services/repos/repo.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../repo-card/repo-card.component */ "./src/app/components/repos/repo-card/repo-card.component.ts");









function RepoListComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No repos were found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RepoListComponent_repo_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "repo-card", 4);
} if (rf & 2) {
    const repo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", repo_r2.name)("name", repo_r2.name)("url", repo_r2.html_url)("description", repo_r2.description ? repo_r2.description : "No description available")("forks", repo_r2.forks_count)("openIssues", repo_r2.open_issues_count);
} }
class RepoListComponent {
    constructor(_route, _router, _repoService, _userService) {
        this._route = _route;
        this._router = _router;
        this._repoService = _repoService;
        this._userService = _userService;
        this.repos = [];
        this.username = '';
        this.page = 1;
        this.totalCount = 0;
    }
    ngOnInit() {
        this._route.params.subscribe(params => {
            this.username = params.username;
            this.page = parseInt(params.page);
            this.getNumberRepos();
            this.getRepos();
        });
    }
    getNumberRepos() {
        this._userService.getUser(this.username).subscribe(response => {
            this.totalCount = response.public_repos;
            console.log(this.totalCount);
        }, error => {
            console.log(error);
        });
    }
    getRepos() {
        this._repoService.get(this.username, this.page.toString()).subscribe(response => {
            this.repos = response.body;
        }, error => {
            console.log(error);
        });
    }
    changePage(pageEvent) {
        this.page = pageEvent.pageIndex + 1;
        this._router.navigateByUrl('repos/' + this.username + '/' + this.page);
        this.getRepos();
    }
}
RepoListComponent.ɵfac = function RepoListComponent_Factory(t) { return new (t || RepoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_repos_repo_service__WEBPACK_IMPORTED_MODULE_2__["RepoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
RepoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepoListComponent, selectors: [["app-repo-list"]], decls: 4, vars: 4, consts: [[1, "repo-container"], [4, "ngIf"], ["class", "repo-card", 3, "id", "name", "url", "description", "forks", "openIssues", 4, "ngFor", "ngForOf"], ["pageSize", "4", 3, "length", "pageIndex", "page"], [1, "repo-card", 3, "id", "name", "url", "description", "forks", "openIssues"]], template: function RepoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RepoListComponent_mat_card_1_Template, 2, 0, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RepoListComponent_repo_card_2_Template, 1, 6, "repo-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-paginator", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function RepoListComponent_Template_mat_paginator_page_3_listener($event) { return ctx.changePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.repos.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.repos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.totalCount)("pageIndex", ctx.page - 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_7__["RepoCardComponent"]], styles: [".repo-container[_ngcontent-%COMP%] {\r\n    display: flex; \r\n    flex-wrap: wrap;\r\n}\r\n\r\n.repo-card[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n    margin-top: 30px;\r\n    width: 2vw;\r\n    height: 5vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcy9yZXBvLWxpc3QvcmVwby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3MvcmVwby1saXN0L3JlcG8tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG8tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ucmVwby1jYXJkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHdpZHRoOiAydnc7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-repo-list',
                templateUrl: './repo-list.component.html',
                styleUrls: ['./repo-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_repos_repo_service__WEBPACK_IMPORTED_MODULE_2__["RepoService"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/users/user-card/user-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/user-card/user-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class UserCardComponent {
    constructor() {
        this.username = '';
        this.profileURL = '';
        this.imageURL = '';
    }
    ngOnInit() {
    }
    openGitHub() {
        window.open(this.profileURL, '_blank');
    }
}
UserCardComponent.ɵfac = function UserCardComponent_Factory(t) { return new (t || UserCardComponent)(); };
UserCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserCardComponent, selectors: [["user-card"]], inputs: { username: "username", profileURL: "profileURL", imageURL: "imageURL" }, decls: 22, vars: 3, consts: [[1, "card"], [1, "card-title"], ["id", "username-title"], [1, "account-icon"], ["cols", "4", 1, "card-content"], ["colspan", "2", "rowspan", "2"], ["id", "profile-picture", "alt", "Profile photo", 1, "profile-image", 3, "src"], ["colspan", "2", "rowspan", "1"], ["id", "explore-button", "mat-raised-button", "", "color", "primary", 1, "btn-card", 3, "routerLink"], ["id", "github-button", "mat-raised-button", "", "color", "accent", 1, "btn-card", 3, "click"]], template: function UserCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-grid-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-grid-tile", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Explore repos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-grid-tile", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCardComponent_Template_button_click_18_listener() { return ctx.openGitHub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Open GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "repos/" + ctx.username + "/1");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: [".card[_ngcontent-%COMP%] {\r\n    width: 17vw;\r\n}\r\n\r\n.card-content[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.profile-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 200px;\r\n    height: auto;\r\n}\r\n\r\n.account-icon[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.btn-card[_ngcontent-%COMP%] {\r\n    font-size: 0.75em;\r\n    display: block;\r\n    margin-top: 35px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2VyLWNhcmQvdXNlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgd2lkdGg6IDE3dnc7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYWNjb3VudC1pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmJ0bi1jYXJkIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'user-card',
                templateUrl: './user-card.component.html',
                styleUrls: ['./user-card.component.css']
            }]
    }], function () { return []; }, { username: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], profileURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/users/user-list/user-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/user-list/user-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_config_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/config/app-config.service */ "./src/app/services/config/app-config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-card/user-card.component */ "./src/app/components/users/user-card/user-card.component.ts");








function UserListComponent_user_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "user-card", 3);
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", user_r1.login)("username", user_r1.login)("profileURL", user_r1.html_url)("imageURL", user_r1.avatar_url);
} }
class UserListComponent {
    constructor(_userService, _config) {
        this._userService = _userService;
        this._config = _config;
        this.users = [];
        this.next = '';
    }
    ngOnInit() {
        this.getUsers();
        this.next = this._config.getUsersURL();
    }
    getUsers() {
        this._userService.getUsers(this.next).subscribe(response => {
            this.users = response.body;
            if (response.headers.get('link')) {
                this.next = this.getNext(response.headers.get('link'));
            }
            else {
                this.next = '';
            }
        }, error => {
            console.log(error);
        });
    }
    getNext(link) {
        let next = '';
        let links = link.split(',');
        next = links.find(str => str.indexOf('rel="next"') > -1);
        if (next)
            next = next.substring(next.lastIndexOf('<') + 1, next.lastIndexOf('>'));
        return next;
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"])); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 5, vars: 1, consts: [[1, "user-container"], ["class", "user-card", 3, "id", "username", "profileURL", "imageURL", 4, "ngFor", "ngForOf"], ["id", "next-button", "mat-raised-button", "", "color", "warn", 1, "btn", 3, "click"], [1, "user-card", 3, "id", "username", "profileURL", "imageURL"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserListComponent_user_card_1_Template, 1, 4, "user-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_2_listener() { return ctx.getUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_right_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__["UserCardComponent"]], styles: [".user-container[_ngcontent-%COMP%] {\r\n    display: flex; \r\n    flex-wrap: wrap;\r\n}\r\n\r\n.user-card[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n    margin-top: 30px;\r\n    width: 2vw;\r\n    height: 5vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4udXNlci1jYXJkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHdpZHRoOiAydnc7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-list',
                templateUrl: './user-list.component.html',
                styleUrls: ['./user-list.component.css']
            }]
    }], function () { return [{ type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _services_config_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");









const MATERIAL_COMPONENTS = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[MATERIAL_COMPONENTS], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MATERIAL_COMPONENTS],
                exports: [MATERIAL_COMPONENTS]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/config/app-config.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/config/app-config.service.ts ***!
  \*******************************************************/
/*! exports provided: AppConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigService", function() { return AppConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AppConfigService {
    constructor(_http) {
        this._http = _http;
    }
    loadConfig() {
        return this._http.get('/assets/config/config.json')
            .toPromise()
            .then(data => {
            this.appConfig = data;
        }).catch(error => {
            console.log(error);
        });
    }
    getUsersURL() {
        if (this.appConfig) {
            return this.appConfig.githubAPI.url + this.appConfig.githubAPI.get.users;
        }
        else {
            return '';
        }
    }
    getUserURL() {
        if (this.appConfig) {
            return this.appConfig.githubAPI.url + this.appConfig.githubAPI.get.user;
        }
        else {
            return '';
        }
    }
    getReposURL(username, page) {
        if (this.appConfig) {
            return this.appConfig.githubAPI.url + this.appConfig.githubAPI.get.repos.replace('USERNAME', username).replace('PAGENUMBER', page);
        }
        else {
            return '';
        }
    }
}
AppConfigService.ɵfac = function AppConfigService_Factory(t) { return new (t || AppConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppConfigService, factory: AppConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/repos/repo.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/repos/repo.service.ts ***!
  \************************************************/
/*! exports provided: RepoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoService", function() { return RepoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _config_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app-config.service */ "./src/app/services/config/app-config.service.ts");




class RepoService {
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this.getURL = '';
    }
    get(username, page) {
        this.getURL = this._config.getReposURL(username, page);
        return this._http.get(this.getURL, { observe: 'response' });
    }
}
RepoService.ɵfac = function RepoService_Factory(t) { return new (t || RepoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"])); };
RepoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RepoService, factory: RepoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _config_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _config_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app-config.service */ "./src/app/services/config/app-config.service.ts");




class UserService {
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this.getUsersURL = '';
        this.getUserURL = '';
        this.getUsersURL = this._config.getUsersURL();
        this.getUserURL = this._config.getUserURL();
    }
    getUsers(next) {
        if (next) {
            return this._http.get(next, { observe: 'response' });
        }
        else {
            return this._http.get(this.getUsersURL, { observe: 'response' });
        }
    }
    getUser(username) {
        return this._http.get(this.getUserURL + '/' + username);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _config_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Source\Angular\github-explorer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map