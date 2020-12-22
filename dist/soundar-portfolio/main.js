(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Visual Studio Files\angular\my-portfolio\soundar-portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "EwND":
/*!************************************!*\
  !*** ./src/app/connect.service.ts ***!
  \************************************/
/*! exports provided: ConnectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectService", function() { return ConnectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ConnectService {
    constructor(http) {
        this.http = http;
        this.error = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    createAndStorePost(name, email, phone, purpose) {
        const connect = {
            name: name,
            email: email,
            phone: phone,
            purpose: purpose,
        };
        this.http
            .post('https://soundar-portfolio-1995-default-rtdb.europe-west1.firebasedatabase.app/posts.json', connect)
            .subscribe((responseData) => {
            console.log(responseData);
            alert('Data Recorderd Successfully! Our Team will response to you soon...');
        }),
            (error) => {
                this.error.next(error.message);
                alert(error.message);
            };
    }
}
ConnectService.ɵfac = function ConnectService_Factory(t) { return new (t || ConnectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ConnectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConnectService, factory: ConnectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect.service */ "EwND");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






const _c0 = ["connectForm"];
class AppComponent {
    constructor(http, connectService) {
        this.http = http;
        this.connectService = connectService;
        this.title = 'soundar-portfolio';
        this.collapsed = true;
        this.isCollapsed = true;
        this.isCollapsed2 = true;
        this.isCollapsed3 = true;
        this.isCollapsed4 = true;
    }
    onSubmit(connect) {
        this.connectService.createAndStorePost(connect.name, connect.email, connect.phone, connect.purpose);
        console.log(connect.name, connect.email, connect.phone, connect.purpose);
        this.connect.resetForm();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_connect_service__WEBPACK_IMPORTED_MODULE_2__["ConnectService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.connect = _t.first);
    } }, decls: 321, vars: 15, consts: [[1, "main"], ["id", "navbar-example", 1, "navbar", "navbar-expand-sm", "navbar-dark", "bg-dark", "fixed-top"], [1, "container"], ["type", "button", "data-toggle", "collapse", "data-target", "#Navbar", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["href", "#"], [1, "text-white"], [1, "fas", "fa-code"], ["href", "#", 1, "navbar-brand", "d-none", "d-md-block", "d-lg-block"], [1, "text_1"], [1, "text_2"], ["id", "Navbar", 1, "collapse", "navbar-collapse", 3, "resize"], [1, "navbar-nav", "ml-auto", "animate__animated", "animate__lightSpeedInLeft", "animate__delay-2s"], [1, "nav-item", "animate__animated", "animate__lightSpeedInLeft", "animate__delay-3s"], ["href", "#About", 1, "nav-link"], ["href", "#Skills", 1, "nav-link"], ["href", "#Projects", 1, "nav-link"], ["href", "#Experience", 1, "nav-link"], ["href", "#Contact", 1, "nav-link"], ["id", "bg-img", 1, "my-custom-scrollbar", "my-custom-scrollbar-primary"], ["id", "About"], [1, "card", "mb-3"], [1, "aboutData"], [1, "row", "no-gutters"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "media"], ["src", "../assets/images/soundar.jpg", "height", "250px", "width", "250px", 1, "img-fluid", "rounded-top", "mx-auto", "my-5", "d-lg-block", "animate__animated", "animate__zoomIn", "animate__delay-2s"], [1, "card-body", "mx-auto", "my-5"], [1, "ml-3", "card-title", "nav-item", "animate__animated", "animate__lightSpeedInRight", "animate__delay-5s"], [1, "card-text", "animate__animated", "animate__lightSpeedInRight", "animate__delay-5s"], [1, "text-muted", 2, "font-size", "large"], [1, "text-muted"], [1, "far", "fa-user"], [1, "fas", "fa-at"], ["href", "https://mail.google.com/", "target", "_blank"], [1, "fab", "fa-whatsapp"], [1, "fab", "fa-telegram"], [1, "card-footer", "bg-danger"], ["href", "https://github.com/stormsoundar", "target", "_blank"], [1, "fab", "fa-github", "fa-2x", "mx-4", 2, "color", "#211f1f"], ["href", "https://www.facebook.com/StormSoundar", "target", "_blank"], [1, "fab", "fa-facebook-f", "fa-2x", "mx-4", 2, "color", "#4267b2"], ["href", "https://twitter.com/soundarit1995", "target", "_blank"], [1, "fab", "fa-twitter", "fa-2x", "mx-4", 2, "color", "#00acee"], ["href", "https://www.linkedin.com/in/soundar-rajan-365337b2", "target", "_blank"], [1, "fab", "fa-linkedin-in", "fa-2x", "mx-4", 2, "color", "#0e76a8"], ["href", "https://www.instagram.com/storm_soundar_tamilan", "target", "_blank"], [1, "fab", "fa-instagram", "fa-2x", "mx-4", 2, "color", "#f78fb3"], [1, "container", "mt-5"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "bg-danger", "text-white"], [1, "bg-danger"], [1, "lead", "text-justify"], ["id", "Skills", 1, "mt-5"], [1, "bg-primary", "text-white"], [1, "bg-primary"], [1, "card", "bg-white", "mt-2"], [1, "list-group"], [1, "list-group-item"], ["href", "https://angular.io/", "target", "_blank"], [1, "fab", "fa-angular", "fa-2x", "mr-4", 2, "color", "#b71c1c"], ["href", "https://www.w3schools.com/html/default.asp", "target", "_blank"], [1, "fab", "fa-html5", "fa-2x", "mr-4", 2, "color", "#e34c26"], ["href", "https://www.w3schools.com/css/", "target", "_blank"], [1, "fab", "fa-css3-alt", "fa-2x", "mr-4", 2, "color", "#264de4"], ["href", "https://getbootstrap.com/", "target", "_blank"], [1, "fab", "fa-bootstrap", "fa-2x", "mr-4", 2, "color", "#9933cc"], ["href", "https://www.w3schools.com/js/DEFAULT.asp", "target", "_blank"], [1, "fab", "fa-js-square", "fa-2x", "mr-4", 2, "color", "#ffd600"], ["href", "https://nodejs.org/en/", "target", "_blank"], [1, "fab", "fa-node-js", "fa-2x", "mr-4", 2, "color", "#3c873a"], ["href", "https://www.java.com/en/", "target", "_blank"], [1, "fab", "fa-java", "fa-2x", "mr-3", 2, "color", "#5382a1"], ["href", "https://sequelize.org/", "target", "_blank"], [1, "mr-3"], ["src", "https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg", "height", "35px", "width", "35px", "alt", "sequelize", 2, "margin-top", "-10px"], ["href", "https://expressjs.com/", "target", "_blank"], ["src", "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg", "height", "35px", "width", "65px", "alt", "express", 2, "margin-top", "-10px"], ["href", "https://www.mysql.com/", "target", "_blank"], [1, "mr-4"], ["src", "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg", "height", "35px", "width", "65px", "alt", "mysql", 2, "margin-top", "-10px"], ["href", "https://www.mongodb.com/", "target", "_blank"], ["src", "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg", "height", "50px", "width", "80px", "alt", "mongodb"], ["href", "https://www.postgresql.org/", "target", "_blank"], ["src", "https://www.vectorlogo.zone/logos/postgresql/postgresql-horizontal.svg", "height", "20px", "width", "90px", "alt", "postgres"], ["href", "https://code.visualstudio.com/", "target", "_blank"], ["src", "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg", "height", "55px", "width", "110px", "alt", "vscode", 2, "margin-top", "-10px"], ["href", "https://www.jetbrains.com/idea/", "target", "_blank"], ["src", "https://cdn.worldvectorlogo.com/logos/intellijidea.svg", "height", "55px", "width", "90px", "alt", "intellijidea"], ["href", "https://aws.amazon.com/", "target", "_blank"], ["src", "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg", "height", "55px", "width", "120px", "alt", "aws"], ["href", "https://firebase.google.com/", "target", "_blank"], ["src", "https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg", "height", "45px", "width", "100px", "alt", "firebase"], ["id", "Projects", 1, "mt-5"], [1, "text-white", 2, "background-color", "#f7b731"], [2, "background-color", "#f7b731"], [1, "list-group", "list-group-flush"], [1, "col-xs-12", "col-sm-12", "col-md-2", "col-lg-2", "m-auto"], ["src", "data:image/jpeg;base64,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", "alt", "scholar Quiz", "height", "60", "width", "90", 1, "img-fluid"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3", "m-auto"], ["data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", "aria-controls", "quizCollapseExample", 3, "click"], [1, "m-auto"], [1, "projectTitle"], ["id", "circleIcon", 1, "fas", "fa-chevron-circle-down", "fa-2x", "m-auto"], ["id", "quizCollapseExample", 1, "collapse", "multi-collapse", 3, "ngbCollapse"], [1, "card"], [1, "col-xs-12", "col-sm-12", "col-md-10", "col-lg-10"], [1, "card-body", "lead"], ["href", "https://github.com/stormsoundar/quiz-meanstack", "target", "_blank", "id", "link"], [1, "fab", "fa-github-square", "fa-3x"], ["src", "https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg", "alt", "Covid19", "height", "60", "width", "90", 1, "img-fluid"], ["data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", "aria-controls", "covidCollapseExample", 3, "click"], ["id", "covidCollapseExample", 1, "collapse", "multi-collapse", 3, "ngbCollapse"], ["href", "https://github.com/stormsoundar/covid19-tracker-india", "target", "_blank", "id", "link"], ["href", "https://covid19-tracker-india-6fcb8.web.app", "target", "_blank", "id", "link"], [1, "fa", "fa-globe", "fa-3x"], ["src", "../assets/images/logo.jpg", "alt", "DeepaStore", "height", "60", "width", "90", 1, "img-fluid"], ["data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", "aria-controls", "deepaCollapseExample", 3, "click"], ["id", "deepaCollapseExample", 1, "collapse", "multi-collapse", 3, "ngbCollapse"], ["href", "https://github.com/stormsoundar?tab=repositories", "target", "_blank", "id", "link"], ["href", "https://deepa-maligai.web.app/", "target", "_blank", "id", "link"], ["src", "data:image/png;base64,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", "alt", "CRUD", "height", "60", "width", "90", 1, "img-fluid"], ["data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", "aria-controls", "crudCollapseExample", 3, "click"], ["id", "crudCollapseExample", 1, "collapse", "multi-collapse", 3, "ngbCollapse"], ["href", "https://github.com/stormsoundar/crud-ng-node", "target", "_blank", "id", "link"], ["id", "Experience", 1, "mt-5"], [1, "bg-success", "text-white"], [1, "bg-success"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "card", "systemic", "bg-white", "mt-2"], ["src", "../assets/images/0.jpg", "alt", "systemic", "height", "60", "width", "200", 1, "img-fluid", "py-3", "m-auto"], [1, "text-center", "pt-2", 2, "color", "#0099cc"], [1, "lead", "text-justify", "p-3"], [1, "card", "rajesh", "bg-white", "mt-2"], [1, "py-3", "m-auto", "display-4", "text-success"], [1, "text-center", "text-success"], ["id", "Contact", 1, "mt-5"], [1, "card-title", "text-center", "mt-5"], [3, "ngSubmit"], ["connectForm", "ngForm"], [1, "form-group"], [1, "card-body"], [1, "row", "mx-auto"], [1, "col-xs-12", "col-sm-12", "col-md-10", "col-lg-10", "offset-md-1", "offset-lg-1"], [1, "mt-3"], ["for", "name", 1, "form-label"], ["type", "text", "name", "name", "ngModel", "", "placeholder", "Enter Your Name", "required", "", 1, "form-control"], [1, "mt-2"], ["for", "email", 1, "form-label"], ["type", "email", "name", "email", "ngModel", "", "placeholder", "Enter Your Email", "required", "", "email", "", 1, "form-control"], ["for", "phone", 1, "form-label"], ["type", "text", "name", "phone", "minlength", "10", "maxlength", "10", "ngModel", "", "placeholder", "Enter Your Mobile", "required", "", 1, "form-control"], ["for", "purpose", 1, "form-label"], ["name", "purpose", "rows", "3", "ngModel", "", "placeholder", "Write something...", 1, "form-control"], [1, "mt-2", "text-center"], ["type", "submit", "name", "Submit", 1, "btn", "btn-outline-primary", "btn-lg", 3, "disabled"], [1, "container-fluid", "bg-dark", "mt-5"], [1, "text-white", "text-center", "pt-3"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.collapsed = !ctx.collapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hello, Everyone...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Welcome to My Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_Template_div_resize_16_listener() { return "collapsed = true"; }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Expertise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " I'm Soundararajan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Junior Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u00A0\u00A025 Years Old");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "soundarit1995@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "+917845360097");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "+917845360097");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "hr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " To be a successful professional in a globally respected company and to achieve the objectives of the company with honesty and fairness and to continually upgrade my knowledge and skills. I'm a jovial, kind, lovely & passionate. I like to have fun, work & smile. My Hobbies include photography, gardening & cycling. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "section", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Expertise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "hr", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ul", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "section", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "hr", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "ul", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "ul", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_159_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Scholar Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_164_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " An above project is a web application that will be integrated for a student can attend a Quiz Competition. In the project, a frontend framework is Angular, backend is Node JS. This also done by MEAN. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_182_listener() { return ctx.isCollapsed2 = !ctx.isCollapsed2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Covid19 India Tracker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_187_listener() { return ctx.isCollapsed2 = !ctx.isCollapsed2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " An above project is a web application that will be integrated showing a covid19 information about India\u2019s states and every districts. It projecting a table view of COVID19 Cases every day report of Bharat India. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_207_listener() { return ctx.isCollapsed3 = !ctx.isCollapsed3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Deepa Grocery Shop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_212_listener() { return ctx.isCollapsed3 = !ctx.isCollapsed3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " An above project is a web application that will be integrated showing a commercial website information about a small scale grocery shop. It projecting about shop products, services and contact to shop proprietor. It contains a slideshow of their products and location on map view. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "img", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_232_listener() { return ctx.isCollapsed4 = !ctx.isCollapsed4; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "CRUD Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_237_listener() { return ctx.isCollapsed4 = !ctx.isCollapsed4; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " An above project is a web application that will be integrated for Create, Read, Update, and Delete operations with done by a User. In the project, a frontend framework is Angular, backend is Node.js ORM with Sequelize and Postgres. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "a", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "section", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "hr", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h4", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " Software Trainee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Worked as a Software Trainee in Systemic Info Solutions Pvt Ltd, Salem from 2019 to 2020. Implementing web application using Angular 9, develop front-end application along with HTML, CSS and JavaScript. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "h2", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Rajesh Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "h4", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Laser and Label Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " Worked as a Label Designer in Rajesh Labels Pvt Ltd, Avinashi from 2017 to 2019. Designing and make a custom designs of woven labels. To make a delivery process from the production in Laser Department. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "section", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Contact Me On Below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "form", 139, 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_282_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](283); return ctx.onSubmit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "label", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "input", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "label", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "input", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "label", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "input", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "label", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "textarea", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " Submit Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "p", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " Reserved By: Soundararajan.M in 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapse", ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"]], styles: [".text_1[_ngcontent-%COMP%] {\r\n  animation: text1;\r\n}\r\n.text_2[_ngcontent-%COMP%] {\r\n  animation: text2;\r\n}\r\n.text_1[_ngcontent-%COMP%], .text_2[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  display: inline-block;\r\n  position: relative;\r\n  padding-top: 10px;\r\n  animation-duration: 20s;\r\n  animation-timing-function: steps(25, end);\r\n  animation-iteration-count: infinite;\r\n}\r\n.text_1[_ngcontent-%COMP%]::after, .text_2[_ngcontent-%COMP%]::after {\r\n  \r\n  position: absolute;\r\n  right: 0;\r\n  animation: caret infinite;\r\n  animation-duration: 1s;\r\n  animation-timing-function: steps(1, end);\r\n}\r\n@keyframes text2 {\r\n  0%,\r\n  50%,\r\n  100% {\r\n    width: 0;\r\n  }\r\n\r\n  60%,\r\n  90% {\r\n    width: 13.7em;\r\n  }\r\n}\r\n@keyframes text1 {\r\n  0%,\r\n  50%,\r\n  100% {\r\n    width: 0;\r\n  }\r\n  10%,\r\n  40% {\r\n    width: 8em;\r\n  }\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n  font-size: medium;\r\n}\r\n#bg-img[_ngcontent-%COMP%] {\r\n  background: url('7.jpg');\r\n  background-size: 100%;\r\n  background-repeat: no-repeat;\r\n  min-height: 500px;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  padding-top: 90px;\r\n}\r\n#About[_ngcontent-%COMP%] {\r\n  margin-top: -200px;\r\n}\r\n.card-footer[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]:hover {\r\n  animation: shakeY; \r\n  animation-duration: 1s; \r\n}\r\n*[_ngcontent-%COMP%] {\r\n  scroll-behavior: smooth;\r\n}\r\n#About[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding: 10px 20px 10px 20px;\r\n}\r\n#About[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-width: 2px;\r\n  margin-top: 7px;\r\n}\r\n#Skills[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding: 10px 20px 10px 20px;\r\n}\r\n#Skills[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-width: 2px;\r\n  margin-top: 7px;\r\n}\r\n#Skills[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n  animation: flip; \r\n  animation-duration: 1s; \r\n}\r\n#Skills[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n  animation: flip; \r\n  animation-duration: 1s; \r\n}\r\n#Projects[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding: 10px 20px 10px 20px;\r\n}\r\n#Projects[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-width: 2px;\r\n  margin-top: 7px;\r\n}\r\n#Projects[_ngcontent-%COMP%]   #link[_ngcontent-%COMP%] {\r\n  color: #757575;\r\n}\r\n#Projects[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n  animation: jello;\r\n  animation-duration: 2s; \r\n}\r\n#Projects[_ngcontent-%COMP%]   .projectTitle[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n#Projects[_ngcontent-%COMP%]   .fa-chevron-circle-down[_ngcontent-%COMP%] {\r\n  transform: rotate(-90deg);\r\n  cursor: pointer;\r\n}\r\n#Projects[_ngcontent-%COMP%]   #circleIcon[_ngcontent-%COMP%] {\r\n  color: #0d47a1;\r\n}\r\n#Projects[_ngcontent-%COMP%]   #circleIcon[_ngcontent-%COMP%]:hover {\r\n  color: #4285F4;\r\n  animation: shakeY; \r\n  animation-duration: 2s; \r\n}\r\n#Projects[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-family: Arial, Helvetica, Arial, sans-serif;\r\n}\r\n#Projects[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n  border-radius: 0%;\r\n}\r\n#Experience[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding: 10px 20px 10px 20px;\r\n}\r\n#Experience[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-width: 2px;\r\n  margin-top: 7px;\r\n}\r\n#Experience[_ngcontent-%COMP%]   .systemic[_ngcontent-%COMP%] {\r\n  border-top: 4px solid #0099cc;\r\n}\r\n#Experience[_ngcontent-%COMP%]   .rajesh[_ngcontent-%COMP%] {\r\n  border-top: 4px solid #20bf6b;\r\n}\r\n#Contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding: 10px 20px 10px 20px;\r\n  background-color: #8E24AA;\r\n}\r\n#Contact[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  background-color: #8E24AA;\r\n  border-width: 2px;\r\n  margin-top: 7px;\r\n}\r\n#Contact[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n  border-top: 4px solid #8E24AA;\r\n}\r\n#Contact[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  color: #8E24AA;\r\n  border: 1px solid #8E24AA;\r\n}\r\n#Contact[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #8E24AA;\r\n  border: 1px solid #8E24AA;\r\n  color: #fff;\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n  overflow-x: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QyxtQ0FBbUM7QUFDckM7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHdDQUF3QztBQUMxQztBQUVBO0VBQ0U7OztJQUdFLFFBQVE7RUFDVjs7RUFFQTs7SUFFRSxhQUFhO0VBQ2Y7QUFDRjtBQUNBO0VBQ0U7OztJQUdFLFFBQVE7RUFDVjtFQUNBOztJQUVFLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHdCQUF5QztFQUN6QyxxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCLEVBQUUsZ0VBQWdFO0VBQ25GLHNCQUFzQixFQUFFLG9DQUFvQztBQUM5RDtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlLEVBQUUsZ0VBQWdFO0VBQ2pGLHNCQUFzQixFQUFFLG9DQUFvQztBQUM5RDtBQUVBO0VBQ0UsZUFBZSxFQUFFLGdFQUFnRTtFQUNqRixzQkFBc0IsRUFBRSxvQ0FBb0M7QUFDOUQ7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0IsRUFBRSxvQ0FBb0M7QUFDOUQ7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUUsZ0VBQWdFO0VBQ25GLHNCQUFzQixFQUFFLG9DQUFvQztBQUM5RDtBQUVBO0VBQ0UsZ0RBQWdEO0FBQ2xEO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0XzEge1xyXG4gIGFuaW1hdGlvbjogdGV4dDE7XHJcbn1cclxuLnRleHRfMiB7XHJcbiAgYW5pbWF0aW9uOiB0ZXh0MjtcclxufVxyXG4udGV4dF8xLFxyXG4udGV4dF8yIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDIwcztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBzdGVwcygyNSwgZW5kKTtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG4udGV4dF8xOjphZnRlcixcclxuLnRleHRfMjo6YWZ0ZXIge1xyXG4gIC8qIGNvbnRlbnQ6IFwifFwiOyAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBhbmltYXRpb246IGNhcmV0IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMSwgZW5kKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyB0ZXh0MiB7XHJcbiAgMCUsXHJcbiAgNTAlLFxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG5cclxuICA2MCUsXHJcbiAgOTAlIHtcclxuICAgIHdpZHRoOiAxMy43ZW07XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgdGV4dDEge1xyXG4gIDAlLFxyXG4gIDUwJSxcclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICAxMCUsXHJcbiAgNDAlIHtcclxuICAgIHdpZHRoOiA4ZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG4jYmctaW1nIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzLzcuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogOTBweDtcclxufVxyXG5cclxuI0Fib3V0IHtcclxuICBtYXJnaW4tdG9wOiAtMjAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciAuZmFiOmhvdmVyIHtcclxuICBhbmltYXRpb246IHNoYWtlWTsgLyogcmVmZXJyaW5nIGRpcmVjdGx5IHRvIHRoZSBhbmltYXRpb24ncyBAa2V5ZnJhbWUgZGVjbGFyYXRpb24gKi9cclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzOyAvKiBkb24ndCBmb3JnZXQgdG8gc2V0IGEgZHVyYXRpb24hICovXHJcbn1cclxuXHJcbioge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4jQWJvdXQgc3BhbiB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxufVxyXG5cclxuI0Fib3V0IGhyIHtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbn1cclxuXHJcbiNTa2lsbHMgc3BhbiB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxufVxyXG5cclxuI1NraWxscyBociB7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcblxyXG4jU2tpbGxzIGk6aG92ZXIge1xyXG4gIGFuaW1hdGlvbjogZmxpcDsgLyogcmVmZXJyaW5nIGRpcmVjdGx5IHRvIHRoZSBhbmltYXRpb24ncyBAa2V5ZnJhbWUgZGVjbGFyYXRpb24gKi9cclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzOyAvKiBkb24ndCBmb3JnZXQgdG8gc2V0IGEgZHVyYXRpb24hICovXHJcbn1cclxuXHJcbiNTa2lsbHMgaW1nOmhvdmVyIHtcclxuICBhbmltYXRpb246IGZsaXA7IC8qIHJlZmVycmluZyBkaXJlY3RseSB0byB0aGUgYW5pbWF0aW9uJ3MgQGtleWZyYW1lIGRlY2xhcmF0aW9uICovXHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsgLyogZG9uJ3QgZm9yZ2V0IHRvIHNldCBhIGR1cmF0aW9uISAqL1xyXG59XHJcblxyXG4jUHJvamVjdHMgc3BhbiB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxufVxyXG5cclxuI1Byb2plY3RzIGhyIHtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbn1cclxuXHJcbiNQcm9qZWN0cyAjbGluayB7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcbn1cclxuXHJcbiNQcm9qZWN0cyBpOmhvdmVyIHtcclxuICBhbmltYXRpb246IGplbGxvO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7IC8qIGRvbid0IGZvcmdldCB0byBzZXQgYSBkdXJhdGlvbiEgKi9cclxufVxyXG5cclxuI1Byb2plY3RzIC5wcm9qZWN0VGl0bGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI1Byb2plY3RzIC5mYS1jaGV2cm9uLWNpcmNsZS1kb3duIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jUHJvamVjdHMgI2NpcmNsZUljb24ge1xyXG4gIGNvbG9yOiAjMGQ0N2ExO1xyXG59XHJcblxyXG4jUHJvamVjdHMgI2NpcmNsZUljb246aG92ZXIge1xyXG4gIGNvbG9yOiAjNDI4NUY0O1xyXG4gIGFuaW1hdGlvbjogc2hha2VZOyAvKiByZWZlcnJpbmcgZGlyZWN0bHkgdG8gdGhlIGFuaW1hdGlvbidzIEBrZXlmcmFtZSBkZWNsYXJhdGlvbiAqL1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7IC8qIGRvbid0IGZvcmdldCB0byBzZXQgYSBkdXJhdGlvbiEgKi9cclxufVxyXG5cclxuI1Byb2plY3RzIGg0IHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNQcm9qZWN0cyBidXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG4jRXhwZXJpZW5jZSBzcGFuIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG59XHJcblxyXG4jRXhwZXJpZW5jZSBociB7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcblxyXG4jRXhwZXJpZW5jZSAuc3lzdGVtaWMge1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDA5OWNjO1xyXG59XHJcblxyXG4jRXhwZXJpZW5jZSAucmFqZXNoIHtcclxuICBib3JkZXItdG9wOiA0cHggc29saWQgIzIwYmY2YjtcclxufVxyXG5cclxuI0NvbnRhY3Qgc3BhbiB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEUyNEFBO1xyXG59XHJcblxyXG4jQ29udGFjdCBociB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhFMjRBQTtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbn1cclxuXHJcbiNDb250YWN0IC5jYXJkIHtcclxuICBib3JkZXItdG9wOiA0cHggc29saWQgIzhFMjRBQTtcclxufVxyXG5cclxuI0NvbnRhY3QgLmJ0biB7XHJcbiAgY29sb3I6ICM4RTI0QUE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhFMjRBQTtcclxufVxyXG5cclxuI0NvbnRhY3QgLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhFMjRBQTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOEUyNEFBO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _connect_service__WEBPACK_IMPORTED_MODULE_2__["ConnectService"] }]; }, { connect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['connectForm']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
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

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map