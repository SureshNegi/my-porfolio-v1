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




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
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


class AppComponent {
    constructor() {
        this.title = 'my-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 147, vars: 0, consts: [[1, "top-header", "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "/", 1, "navbar-brand"], ["src", "/assets/img/about_me.jpg", "alt", "My image", 1, "brandLogo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", 2, "transition-delay", "0ms"], ["href", "/#about", 1, "nav-link"], [1, "nav-item", 2, "transition-delay", "100ms"], ["href", "/#jobs", 1, "nav-link"], [1, "nav-item", 2, "transition-delay", "300ms"], ["href", "/#contact", 1, "nav-link"], [1, "btn", "resume-btn", "fadedown-enter-done", 2, "transition-delay", "400ms"], ["href", "/assets/resume.pdf", "target", "_blank", "rel", "nofollow noopener noreferrer", 1, "nav__StyledResumeButton-ghklvd-10", "jXamAq"], [1, "left_slidebar"], [1, "social_links"], ["href", "https://www.linkedin.com/in/suresh-negi-796b8429/", "target", "_blank", "rel", "nofollow noopener noreferrer", "aria-label", "Linkedin", 1, "social__StyledLink-anu6nt-1", "jZDtYm"], ["viewBox", "0 0 512 512", "preserveAspectRatio", "xMidYMid meet"], ["d", "M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"], ["href", "#", "title", "GitHub", 1, "icon-13", "github"], ["d", "M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"], ["href", ""], ["d", "M294.8 361.2l-122 0.1 0-26 122-0.1L294.8 361.2zM377.2 213.7L356.4 93.5l-25.7 4.5 20.9 120.2L377.2 213.7zM297.8 301.8l-121.4-11.2 -2.4 25.9 121.4 11.2L297.8 301.8zM305.8 267.8l-117.8-31.7 -6.8 25.2 117.8 31.7L305.8 267.8zM321.2 238l-105-62 -13.2 22.4 105 62L321.2 238zM346.9 219.7l-68.7-100.8 -21.5 14.7 68.7 100.8L346.9 219.7zM315.5 275.5v106.5H155.6V275.5h-20.8v126.9h201.5V275.5H315.5z"], [1, "main_content", "container"], [1, "profile_highlight"], [1, "me_desc"], [1, "btn", "resume-btn"], ["href", "/resume.pdf", "target", "_blank", "rel", "nofollow noopener noreferrer", 1, "nav__StyledResumeButton-ghklvd-10", "jXamAq"], ["id", "about"], [1, "sno"], [1, "about_me_cont"], [1, "left"], ["href", "https://www.geu.ac.in/", "target", "_blank"], ["href", "https://www.mmc.com/", "target", "_blank", "rel", "nofollow noopener noreferrer"], [1, "about_tech_grid"], [1, "about__Skill-sc-1ownso9-4", "ibWQpd"], [1, "right"], ["href", "https://github.com/SureshNegi", 1, "about_pic"], ["src", "/assets/img/profile.jpg", "alt", ""], ["id", "jobs"], [1, "jobs_list"], ["id", "tab-0", "tabindex", "-1"], ["id", "tab-1", "tabindex", "-1"], ["id", "tab-2", "tabindex", "-1"], [1, "job_about"], [1, "highligt_text"], ["href", "https://www.upstatement.com/", "target", "_blank", "rel", "nofollow noopener noreferrer", 1, "highligt_text"], ["id", "contact"], ["href", "mailto:suresh.negi89@gmail.com", "target", "_blank"], [1, "footer_row"], ["href", "https://github.com/bchiang7/v4", "target", "_blank"], [1, "mt-2"], ["aria-label", "stars", "viewBox", "0 0 14 16", "version", "1.1", "width", "14", "height", "16", "role", "img"], ["fill-rule", "evenodd", "d", "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"], ["aria-label", "forks", "viewBox", "0 0 10 16", "version", "1.1", "width", "10", "height", "16", "role", "img"], ["fill-rule", "evenodd", "d", "M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Hi, my name is");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Suresh Negi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "I build things for the web.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " About Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Hello! I'm Suresh, a software engineer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "I enjoy creating things that live on the internet, whether that be websites or web applications, or anything in between. My goal is to always gain experience by using the new technologies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "I have done Master of Computer Applications(MCA is a professional degree in computer science.) from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "GEU University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ", Currently I am woring at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Mercer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " where I work on a wide variety of interesting and meaningful projects on a daily basis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Here are a few technologies I've been working with recently:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "JavaScript (ES6+)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "HTML & (S)CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "section", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Where I've Worked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Mercer Consulting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Annik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Codescape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u00A0@\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Upstatement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "May 2018 - Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Write modern, performant, maintainable code for a diverse array of client and internal projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "What's Next?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Mail Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Designed & Built by Suresh Negi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "svg", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "1,824");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "svg", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "831");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  background-color: #0a192f !important;\n}\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 50px;\n  border-radius: 36px;\n}\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  counter-increment: item 1;\n}\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: white;\n  font-size: 13px;\n}\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"0\" counter(item) \".\";\n  text-align: right;\n  color: #64ffda;\n  font-size: 12px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  height: 96px;\n  height: 9.6rem;\n  width: 96px;\n  width: 9.6rem;\n}\n.btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  font-family: \"SF Mono\", \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, monospace;\n  line-height: 1;\n  cursor: pointer;\n  margin-left: 10px;\n  font-size: 13px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #64ffda;\n  -o-border-image: initial;\n     border-image: initial;\n  border-radius: 3px;\n  padding: 0.75rem 1rem;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.resume-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64ffda !important;\n}\n.left_slidebar[_ngcontent-%COMP%] {\n  width: 40px;\n  position: fixed;\n  top: 30%;\n  left: 40px;\n  right: auto;\n  z-index: 10;\n  color: #a8b2d1;\n}\n.left_slidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.left_slidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: list-item;\n  padding-bottom: 50px;\n  text-align: -webkit-match-parent;\n}\n.left_slidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.left_slidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.left_slidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  background-color: #a8b2d1;\n  margin: 0px auto;\n}\n.main_content[_ngcontent-%COMP%] {\n  padding: 100px 0 0 60px;\n  counter-reset: section 0;\n}\n.main_content[_ngcontent-%COMP%]   h3.sno[_ngcontent-%COMP%]::before {\n  counter-increment: section 1;\n  content: \"0\" counter(section) \".\";\n  margin-right: 10px;\n  font-family: \"SF Mono\", \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, monospace;\n  font-weight: normal;\n  color: #64ffda;\n  font-size: 20px;\n  position: relative;\n  bottom: -5px;\n}\n.main_content[_ngcontent-%COMP%]   h3.sno[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  height: 1px;\n  width: 300px;\n  background-color: #303c55;\n  position: relative;\n  margin-left: 20px;\n}\n.main_content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 32px;\n  margin: 10px 0px 40px;\n}\n.main_content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64ffda;\n  font-family: \"SF Mono\", \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, monospace;\n  font-weight: normal;\n  margin: 0px 0px 20px 3px;\n}\n.main_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  transition-delay: 200ms;\n  font-size: 80px;\n  line-height: 1.1;\n  margin: 0px;\n  color: #ccd6f6;\n}\n.main_content[_ngcontent-%COMP%]   .profile_highlight[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 80px;\n  transition-delay: 300ms;\n  color: #8892b0;\n}\n.main_content[_ngcontent-%COMP%]   div.me_desc[_ngcontent-%COMP%] {\n  transition-delay: 400ms;\n  margin-top: 25px;\n  width: 100%;\n  max-width: 500px;\n}\n.main_content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.75rem;\n}\n.main_content[_ngcontent-%COMP%]   #about[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  position: relative;\n  margin: 0px auto;\n  padding: 150px 0px;\n}\n.main_content[_ngcontent-%COMP%]   #about[_ngcontent-%COMP%]   .about_me_cont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.main_content[_ngcontent-%COMP%]   #about[_ngcontent-%COMP%]   .about_me_cont[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%] {\n  width: 60%;\n  max-width: 480px;\n}\n.main_content[_ngcontent-%COMP%]   #about[_ngcontent-%COMP%]   .about_me_cont[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%]   ul.about_tech_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(140px, 200px));\n  overflow: hidden;\n  padding: 0px;\n  margin: 20px 0px 0px;\n  list-style: none;\n}\n.main_content[_ngcontent-%COMP%]   #about[_ngcontent-%COMP%]   .about_me_cont[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%]   ul.about_tech_grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  font-family: \"SF Mono\", \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, monospace;\n  font-size: 13px;\n  color: #8892b0;\n}\n.main_content[_ngcontent-%COMP%]   #about[_ngcontent-%COMP%]   .about_me_cont[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%]   ul.about_tech_grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0px;\n  color: #64ffda;\n  font-size: 14px;\n  line-height: 12px;\n}\n.main_content[_ngcontent-%COMP%]   #about[_ngcontent-%COMP%]   .about_me_cont[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40%;\n  max-width: 300px;\n  margin-left: 60px;\n}\n.main_content[_ngcontent-%COMP%]   #about[_ngcontent-%COMP%]   .about_me_cont[_ngcontent-%COMP%]   a.about_pic[_ngcontent-%COMP%] {\n  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;\n  width: 100%;\n  position: relative;\n  background-color: #64ffda;\n  margin-left: -20px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  border-radius: 3px;\n}\n.main_content[_ngcontent-%COMP%]   #about[_ngcontent-%COMP%]   .about_me_cont[_ngcontent-%COMP%]   a.about_pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 700px;\n  margin: 0px auto;\n  padding: 0px 0px;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  color: #64ffda;\n  outline: 0px;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  background-color: #172a45;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: transparent;\n  height: 42px;\n  text-align: left;\n  white-space: nowrap;\n  font-family: \"SF Mono\", \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, monospace;\n  font-size: 13px;\n  color: #8892b0;\n  text-decoration: none;\n  padding: 0px 20px 2px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  border: 0;\n  border-left: 2px solid #303c55;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  outline: -webkit-focus-ring-color auto 1px;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   div.job_about[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: auto;\n  padding-top: 12px;\n  padding-left: 30px;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   div.job_about[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-size: 22px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   div.job_about[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-size: 22px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   div.job_about[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .highligt_text[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   div.job_about[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  letter-spacing: 0.05em;\n  color: #a8b2d1;\n  margin-bottom: 30px;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   div.job_about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0px;\n  color: #64ffda;\n}\n.main_content[_ngcontent-%COMP%]   #jobs[_ngcontent-%COMP%]   div.jobs_list[_ngcontent-%COMP%]   div.job_about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 10px;\n}\n.main_content[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  padding: 150px 0px;\n  margin: 0px auto 100px;\n}\n.main_content[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #64ffda;\n  justify-content: center;\n  margin: 10px 0px 20px;\n  font-size: 20px;\n}\n.main_content[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%]   h3.sno[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.main_content[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin: 0px 0px 20px;\n}\n.main_content[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  height: auto;\n  min-height: 70px;\n  padding: 15px;\n}\n.main_content[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   div.footer_row[_ngcontent-%COMP%] {\n  font-family: \"SF Mono\", \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, monospace;\n  font-size: 12px;\n  line-height: 1;\n}\n.main_content[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   div.footer_row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n  padding: 10px;\n}\n.main_content[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   div.footer_row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin: 0px 7px;\n}\n.main_content[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   div.footer_row[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 15px;\n  width: auto;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXHN1cmVzaC1uZWdpXFxSbkRcXG15X3Byb2plY3RzXFxteS1wb3J0Zm9saW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QURFSjtBQ0RJO0VBQ0ksb0NBQUE7QURHUjtBQ0NBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FERUo7QUNBQTtFQUNJLHlCQUFBO0FER0o7QUNEQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURJSjtBQ0ZBO0VBRVEsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FESVI7QUNDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBREVKO0FDQUE7RUFDSSw2QkFBQTtFQUNBLG9HQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkRBQUE7QURHSjtBQ0RBO0VBQ0kseUJBQUE7QURJSjtBQ0ZBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBREtKO0FDSkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURNUjtBQ0xRO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FET1o7QUNOWTtFQUNJLGFBQUE7QURRaEI7QUNQaUI7RUFDRyxXQUFBO0VBQ0EsWUFBQTtBRFNwQjtBQ0pJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QURNUjtBQ0RBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtBRElKO0FDSEk7RUFDSSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvR0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURLUjtBQ0hJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBREtSO0FDSEk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QURLUjtBQ0hJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxvR0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QURLUjtBQ0hJO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBREtSO0FDSEk7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FES1I7QUNISTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURLUjtBQ0hJO0VBQ0ksd0JBQUE7QURLUjtBQ0hJO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURJUjtBQ0RRO0VBQ0ksYUFBQTtFQUVBLDhCQUFBO0VBRUEsdUJBQUE7QURHWjtBQ0ZZO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FESWhCO0FDSGdCO0VBQ0ksYUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBREtwQjtBQ0pvQjtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9HQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURNeEI7QUNKb0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRE14QjtBQ0ZZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBREloQjtBQ0ZZO0VBQ0ksb0RBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkRBQUE7RUFDQSxrQkFBQTtBREloQjtBQ0hnQjtFQUNJLFdBQUE7QURLcEI7QUNHSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FERFI7QUNHUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FERFo7QUNLZ0I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBREhwQjtBQ0tnQjtFQUNJLHlCQUFBO0FESHBCO0FDS2dCO0VBQ0ksaUNBQUE7VUFBQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0dBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSw2REFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBREhwQjtBQ09ZO0VBQ0ksMENBQUE7QURMaEI7QUNPWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FETGhCO0FDT2dCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FETHBCO0FDTW9CO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FESnhCO0FDTW9CO0VBQ0ksY0FBQTtBREp4QjtBQ09nQjtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FETHBCO0FDT2dCO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QURMcEI7QUNPZ0I7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURMcEI7QUNXSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FEVFI7QUNVUTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRFJaO0FDVVE7RUFDSSxhQUFBO0FEUlo7QUNVUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBRFJaO0FDYUk7RUFDSSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FEWFI7QUNZUTtFQUNJLG9HQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURWWjtBQ1dZO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QURUaEI7QUNXWTtFQUNJLG9CQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0FEVGhCO0FDV1k7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QURUaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuaGVhZGVyIG5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTE5MmYgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1icmFuZCBpbWcge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XG59XG5cbm9sIGxpIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGl0ZW0gMTtcbn1cblxub2wgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbm9sIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIjBcIiBjb3VudGVyKGl0ZW0pIFwiLlwiO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM2NGZmZGE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxudWwgbGkgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA5NnB4O1xuICBoZWlnaHQ6IDkuNnJlbTtcbiAgd2lkdGg6IDk2cHg7XG4gIHdpZHRoOiA5LjZyZW07XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgTW9ub1wiLCBcIkZpcmEgQ29kZVwiLCBcIkZpcmEgTW9ub1wiLCBcIlJvYm90byBNb25vXCIsIFwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM2NGZmZGE7XG4gIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cblxuLnJlc3VtZS1idG4gYSB7XG4gIGNvbG9yOiAjNjRmZmRhICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0X3NsaWRlYmFyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDQwcHg7XG4gIHJpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAxMDtcbiAgY29sb3I6ICNhOGIyZDE7XG59XG4ubGVmdF9zbGlkZWJhciB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGVmdF9zbGlkZWJhciB1bCBsaSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtbWF0Y2gtcGFyZW50O1xufVxuLmxlZnRfc2xpZGViYXIgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubGVmdF9zbGlkZWJhciB1bCBsaSBhIHN2ZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG4ubGVmdF9zbGlkZWJhciB1bDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThiMmQxO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4ubWFpbl9jb250ZW50IHtcbiAgcGFkZGluZzogMTAwcHggMCAwIDYwcHg7XG4gIGNvdW50ZXItcmVzZXQ6IHNlY3Rpb24gMDtcbn1cbi5tYWluX2NvbnRlbnQgaDMuc25vOjpiZWZvcmUge1xuICBjb3VudGVyLWluY3JlbWVudDogc2VjdGlvbiAxO1xuICBjb250ZW50OiBcIjBcIiBjb3VudGVyKHNlY3Rpb24pIFwiLlwiO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIE1vbm9cIiwgXCJGaXJhIENvZGVcIiwgXCJGaXJhIE1vbm9cIiwgXCJSb2JvdG8gTW9ub1wiLCBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzY0ZmZkYTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTVweDtcbn1cbi5tYWluX2NvbnRlbnQgaDMuc25vOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzYzU1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1haW5fY29udGVudCBoMyB7XG4gIGNvbG9yOiAjY2NkNmY2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbjogMTBweCAwcHggNDBweDtcbn1cbi5tYWluX2NvbnRlbnQgaDEge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNjRmZmRhO1xuICBmb250LWZhbWlseTogXCJTRiBNb25vXCIsIFwiRmlyYSBDb2RlXCIsIFwiRmlyYSBNb25vXCIsIFwiUm9ib3RvIE1vbm9cIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggM3B4O1xufVxuLm1haW5fY29udGVudCBoMiB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDIwMG1zO1xuICBmb250LXNpemU6IDgwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2NjZDZmNjtcbn1cbi5tYWluX2NvbnRlbnQgLnByb2ZpbGVfaGlnaGxpZ2h0IGgzIHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAzMDBtcztcbiAgY29sb3I6ICM4ODkyYjA7XG59XG4ubWFpbl9jb250ZW50IGRpdi5tZV9kZXNjIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogNDAwbXM7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuLm1haW5fY29udGVudCAuYnRuIHtcbiAgcGFkZGluZzogMS4yNXJlbSAxLjc1cmVtO1xufVxuLm1haW5fY29udGVudCAjYWJvdXQge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nOiAxNTBweCAwcHg7XG59XG4ubWFpbl9jb250ZW50ICNhYm91dCAuYWJvdXRfbWVfY29udCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ubWFpbl9jb250ZW50ICNhYm91dCAuYWJvdXRfbWVfY29udCBkaXYubGVmdCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1heC13aWR0aDogNDgwcHg7XG59XG4ubWFpbl9jb250ZW50ICNhYm91dCAuYWJvdXRfbWVfY29udCBkaXYubGVmdCB1bC5hYm91dF90ZWNoX2dyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMTQwcHgsIDIwMHB4KSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAyMHB4IDBweCAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubWFpbl9jb250ZW50ICNhYm91dCAuYWJvdXRfbWVfY29udCBkaXYubGVmdCB1bC5hYm91dF90ZWNoX2dyaWQgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgTW9ub1wiLCBcIkZpcmEgQ29kZVwiLCBcIkZpcmEgTW9ub1wiLCBcIlJvYm90byBNb25vXCIsIFwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM4ODkyYjA7XG59XG4ubWFpbl9jb250ZW50ICNhYm91dCAuYWJvdXRfbWVfY29udCBkaXYubGVmdCB1bC5hYm91dF90ZWNoX2dyaWQgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pa5XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICBjb2xvcjogIzY0ZmZkYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cbi5tYWluX2NvbnRlbnQgI2Fib3V0IC5hYm91dF9tZV9jb250IGRpdi5yaWdodCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG4ubWFpbl9jb250ZW50ICNhYm91dCAuYWJvdXRfbWVfY29udCBhLmFib3V0X3BpYyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMiwgMTIsIDI3LCAwLjcpIDBweCAxMHB4IDMwcHggLTE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGZmZGE7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLm1haW5fY29udGVudCAjYWJvdXQgLmFib3V0X21lX2NvbnQgYS5hYm91dF9waWMgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50ICNqb2JzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nOiAwcHggMHB4O1xufVxuLm1haW5fY29udGVudCAjam9icyBkaXYuam9ic19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnQgI2pvYnMgZGl2LmpvYnNfbGlzdCB1bCBsaSBidXR0b246aG92ZXIsIC5tYWluX2NvbnRlbnQgI2pvYnMgZGl2LmpvYnNfbGlzdCB1bCBsaSBidXR0b246YWN0aXZlLCAubWFpbl9jb250ZW50ICNqb2JzIGRpdi5qb2JzX2xpc3QgdWwgbGkgYnV0dG9uOmZvY3VzIHtcbiAgY29sb3I6ICM2NGZmZGE7XG4gIG91dGxpbmU6IDBweDtcbn1cbi5tYWluX2NvbnRlbnQgI2pvYnMgZGl2LmpvYnNfbGlzdCB1bCBsaSBidXR0b246aG92ZXIsIC5tYWluX2NvbnRlbnQgI2pvYnMgZGl2LmpvYnNfbGlzdCB1bCBsaSBidXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcyYTQ1O1xufVxuLm1haW5fY29udGVudCAjam9icyBkaXYuam9ic19saXN0IHVsIGxpIGJ1dHRvbiB7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiA0MnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LWZhbWlseTogXCJTRiBNb25vXCIsIFwiRmlyYSBDb2RlXCIsIFwiRmlyYSBNb25vXCIsIFwiUm9ib3RvIE1vbm9cIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzg4OTJiMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwcHggMjBweCAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMzAzYzU1O1xufVxuLm1haW5fY29udGVudCAjam9icyBkaXYuam9ic19saXN0IDpmb2N1cyB7XG4gIG91dGxpbmU6IC13ZWJraXQtZm9jdXMtcmluZy1jb2xvciBhdXRvIDFweDtcbn1cbi5tYWluX2NvbnRlbnQgI2pvYnMgZGl2LmpvYnNfbGlzdCBkaXYuam9iX2Fib3V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuLm1haW5fY29udGVudCAjam9icyBkaXYuam9ic19saXN0IGRpdi5qb2JfYWJvdXQgaDQge1xuICBjb2xvcjogI2NjZDZmNjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50ICNqb2JzIGRpdi5qb2JzX2xpc3QgZGl2LmpvYl9hYm91dCBoNCBzcGFuIHtcbiAgY29sb3I6ICNjY2Q2ZjY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudCAjam9icyBkaXYuam9ic19saXN0IGRpdi5qb2JfYWJvdXQgaDQgLmhpZ2hsaWd0X3RleHQge1xuICBjb2xvcjogIzY0ZmZkYTtcbn1cbi5tYWluX2NvbnRlbnQgI2pvYnMgZGl2LmpvYnNfbGlzdCBkaXYuam9iX2Fib3V0IGg1IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogI2E4YjJkMTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5tYWluX2NvbnRlbnQgI2pvYnMgZGl2LmpvYnNfbGlzdCBkaXYuam9iX2Fib3V0IHVsIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKWuVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgY29sb3I6ICM2NGZmZGE7XG59XG4ubWFpbl9jb250ZW50ICNqb2JzIGRpdi5qb2JzX2xpc3QgZGl2LmpvYl9hYm91dCB1bCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudCAjY29udGFjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgcGFkZGluZzogMTUwcHggMHB4O1xuICBtYXJnaW46IDBweCBhdXRvIDEwMHB4O1xufVxuLm1haW5fY29udGVudCAjY29udGFjdCBoMyB7XG4gIGNvbG9yOiAjNjRmZmRhO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDBweCAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50ICNjb250YWN0IGgzLnNubzo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1haW5fY29udGVudCAjY29udGFjdCBoNCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG59XG4ubWFpbl9jb250ZW50IGZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLm1haW5fY29udGVudCBmb290ZXIgZGl2LmZvb3Rlcl9yb3cge1xuICBmb250LWZhbWlseTogXCJTRiBNb25vXCIsIFwiRmlyYSBDb2RlXCIsIFwiRmlyYSBNb25vXCIsIFwiUm9ib3RvIE1vbm9cIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5tYWluX2NvbnRlbnQgZm9vdGVyIGRpdi5mb290ZXJfcm93IGEge1xuICBjb2xvcjogI2E4YjJkMTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnQgZm9vdGVyIGRpdi5mb290ZXJfcm93IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggN3B4O1xufVxuLm1haW5fY29udGVudCBmb290ZXIgZGl2LmZvb3Rlcl9yb3cgc3ZnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iLCJoZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBuYXZ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTkyZiFpbXBvcnRhbnQ7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4ubmF2YmFyLWJyYW5kIGltZ3tcclxuICAgIG1heC13aWR0aDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XHJcbn1cclxub2wgbGl7XHJcbiAgICBjb3VudGVyLWluY3JlbWVudDogaXRlbSAxO1xyXG59XHJcbm9sIGxpIGF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5vbCBsaTo6YmVmb3Jle1xyXG4gICAgXHJcbiAgICAgICAgY29udGVudDogXCIwXCIgY291bnRlcihpdGVtKSBcIi5cIjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMCwgMjU1LCAyMTgpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgXHJcbn1cclxuXHJcblxyXG51bCBsaSBhe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgaGVpZ2h0OiA5LjZyZW07XHJcbiAgICB3aWR0aDogOTZweDtcclxuICAgIHdpZHRoOiA5LjZyZW07XHJcbn1cclxuLmJ0bnsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNGIE1vbm9cIiwgXCJGaXJhIENvZGVcIiwgXCJGaXJhIE1vbm9cIiwgXCJSb2JvdG8gTW9ub1wiLCBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDEwMCwgMjU1LCAyMTgpO1xyXG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcclxufVxyXG4ucmVzdW1lLWJ0biBhe1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDI1NSwgMjE4KSAhaW1wb3J0YW50O1xyXG59XHJcbi5sZWZ0X3NsaWRlYmFye1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgY29sb3I6IHJnYigxNjgsIDE3OCwgMjA5KTtcclxuICAgIHVse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7ICBcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1tYXRjaC1wYXJlbnQ7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVsOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE3OCwgMjA5KTtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5tYWluX2NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTAwcHggMCAwIDYwcHg7XHJcbiAgICBjb3VudGVyLXJlc2V0OiBzZWN0aW9uIDA7XHJcbiAgICBoMy5zbm86OmJlZm9yZXtcclxuICAgICAgICBjb3VudGVyLWluY3JlbWVudDogc2VjdGlvbiAxO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiMFwiIGNvdW50ZXIoc2VjdGlvbikgXCIuXCI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIE1vbm9cIiwgXCJGaXJhIENvZGVcIiwgXCJGaXJhIE1vbm9cIiwgXCJSb2JvdG8gTW9ub1wiLCBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDAsIDI1NSwgMjE4KTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvdHRvbTogLTVweDtcclxuICAgIH1cclxuICAgIGgzLnNubzo6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA2MCwgODUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjA0LCAyMTQsIDI0Nik7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggNDBweDtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMCwgMjU1LCAyMTgpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIE1vbm9cIiwgXCJGaXJhIENvZGVcIiwgXCJGaXJhIE1vbm9cIiwgXCJSb2JvdG8gTW9ub1wiLCBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDIwcHggM3B4O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMjAwbXM7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigyMDQsIDIxNCwgMjQ2KTtcclxuICAgIH1cclxuICAgIC5wcm9maWxlX2hpZ2hsaWdodCBoM3tcclxuICAgICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMzAwbXM7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMzYsIDE0NiwgMTc2KTtcclxuICAgIH1cclxuICAgIGRpdi5tZV9kZXNje1xyXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDQwMG1zO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7ICAgICAgIFxyXG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMjVyZW0gMS43NXJlbTtcclxuICAgIH1cclxuICAgICNhYm91dHtcclxuICAgICAgICBcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxNTBweCAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmFib3V0X21lX2NvbnR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGRpdi5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgICAgICAgICAgICAgICB1bC5hYm91dF90ZWNoX2dyaWR7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMTQwcHgsIDIwMHB4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIE1vbm9cIiwgXCJGaXJhIENvZGVcIiwgXCJGaXJhIE1vbm9cIiwgXCJSb2JvdG8gTW9ub1wiLCBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTM2LCAxNDYsIDE3Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi4pa5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDEwMCwgMjU1LCAyMTgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXYucmlnaHR7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEuYWJvdXRfcGlje1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyLCAxMiwgMjcsIDAuNykgMHB4IDEwcHggMzBweCAtMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMjU1LCAyMTgpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNqb2Jze1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuXHJcbiAgICAgICAgZGl2LmpvYnNfbGlzdHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgIGxpe1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlciwgYnV0dG9uOmFjdGl2ZSwgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDEwMCwgMjU1LCAyMTgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlciwgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDQyLCA2OSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBNb25vXCIsIFwiRmlyYSBDb2RlXCIsIFwiRmlyYSBNb25vXCIsIFwiUm9ib3RvIE1vbm9cIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigxMzYsIDE0NiwgMTc2KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHggMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoNDgsIDYwLCA4NSk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdi5qb2JfYWJvdXR7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjA0LCAyMTQsIDI0Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjA0LCAyMTQsIDI0Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGlnaGxpZ3RfdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigxMDAsIDI1NSwgMjE4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTY4LCAxNzgsIDIwOSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVsIGxpOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLilrlcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTAwLCAyNTUsIDIxOCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1bCBsaXtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhY3R7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTUwcHggMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMTAwcHg7XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjRmZmRhO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzLnNubzo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9vdGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWluLWhlaWdodDogNzBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGRpdi5mb290ZXJfcm93e1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBNb25vXCIsIFwiRmlyYSBDb2RlXCIsIFwiRmlyYSBNb25vXCIsIFwiUm9ib3RvIE1vbm9cIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTY4LCAxNzgsIDIwOSk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
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





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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

module.exports = __webpack_require__(/*! C:\Users\suresh-negi\RnD\my_projects\my-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map