(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+gxN":
/*!******************************************!*\
  !*** ./src/app/commons/app.component.ts ***!
  \******************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fSXp");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "tT5z");






function AppComponent_app_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 3);
} }
function AppComponent_app_footer_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 4);
} }
class AppComponent {
    constructor(location) {
        this.location = location;
        this.title = 'jaguAr';
        this.location.onUrlChange(x => this.urlChange(x));
        this.visible = true;
    }
    ngOnInit() {
    }
    urlChange(x) {
        x === '/visor' ? this.visible = false : this.visible = true; // visibilidad del header y footer
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [["id", "app-navbar", "role", "toolbar", 4, "ngIf"], ["role", "main", 1, "content"], ["id", "app-footer", 4, "ngIf"], ["id", "app-navbar", "role", "toolbar"], ["id", "app-footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_header_0_Template, 1, 0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_footer_3_Template, 1, 0, "app-footer", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "+i+F":
/*!******************************************!*\
  !*** ./src/app/models/marcador-admin.ts ***!
  \******************************************/
/*! exports provided: MarcadorAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcadorAdmin", function() { return MarcadorAdmin; });
class MarcadorAdmin {
    constructor(nombre, urlTarget) {
        this.nombre = nombre;
        this.urlTarget = urlTarget;
    }
    get Nombre() {
        return this.nombre;
    }
    get UrlTarget() {
        return this.urlTarget;
    }
    get IdTarget() {
        return this.idTarget;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set UrlTarget(value) {
        this.urlTarget = value;
    }
    set IdTarget(value) {
        this.idTarget = value;
    }
}


/***/ }),

/***/ "/QNy":
/*!******************************************!*\
  !*** ./src/app/service/token.service.ts ***!
  \******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const TOKEN_KEY = 'AuthToken';
const ID_MUSEO = 'IdMuseo';
class TokenService {
    constructor(router) {
        this.router = router;
        this.roles = [];
    }
    setToken(token) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }
    setIdMuseo(idMuseo) {
        window.localStorage.removeItem(ID_MUSEO);
        window.localStorage.setItem(ID_MUSEO, idMuseo.toString());
    }
    getIdMuseo() {
        return localStorage.getItem(ID_MUSEO);
    }
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }
    isLogged() {
        if (this.getToken()) {
            return true;
        }
        return false;
    }
    getUserName() {
        if (!this.isLogged()) {
            return null;
        }
        const token = this.getToken();
        const payload = token.split('.')[1];
        const payloadDecoded = atob(payload);
        const values = JSON.parse(payloadDecoded);
        const username = values.sub;
        return username;
    }
    isAdmin() {
        if (!this.isLogged()) {
            return false;
        }
        const token = this.getToken();
        const payload = token.split('.')[1];
        const payloadDecoded = atob(payload);
        const values = JSON.parse(payloadDecoded);
        const roles = values.roles;
        if (roles.indexOf('ROL_ADMIN') < 0) {
            return false;
        }
        return true;
    }
    logOut() {
        window.localStorage.clear();
        this.router.navigate(['/login']);
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "/Tkw":
/*!*********************************!*\
  !*** ./src/app/admin.module.ts ***!
  \*********************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _admin_entities_grupos_grupos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/entities/grupos/grupos.component */ "rOqL");
/* harmony import */ var _admin_entities_componentes_componentes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/entities/componentes/componentes.component */ "SNHH");
/* harmony import */ var _admin_entities_modelos_modelos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/entities/modelos/modelos.component */ "0sL4");
/* harmony import */ var _admin_entities_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/entities/marcadores/marcadores.component */ "Itwj");
/* harmony import */ var _admin_entities_multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/entities/multimedia/multimedia.component */ "jBZP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _interceptors_prod_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/prod-interceptor.service */ "M8e2");
/* harmony import */ var _session_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./session/profile/profile.component */ "/cI4");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




















class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [_interceptors_prod_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["interceptorProvider"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        _admin_entities_grupos_grupos_component__WEBPACK_IMPORTED_MODULE_4__["GruposComponent"],
        _admin_entities_componentes_componentes_component__WEBPACK_IMPORTED_MODULE_5__["ComponentesComponent"],
        _admin_entities_modelos_modelos_component__WEBPACK_IMPORTED_MODULE_6__["ModelosComponent"],
        _admin_entities_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_7__["MarcadoresComponent"],
        _admin_entities_multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_8__["MultimediaComponent"],
        _session_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
                    _admin_entities_grupos_grupos_component__WEBPACK_IMPORTED_MODULE_4__["GruposComponent"],
                    _admin_entities_componentes_componentes_component__WEBPACK_IMPORTED_MODULE_5__["ComponentesComponent"],
                    _admin_entities_modelos_modelos_component__WEBPACK_IMPORTED_MODULE_6__["ModelosComponent"],
                    _admin_entities_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_7__["MarcadoresComponent"],
                    _admin_entities_multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_8__["MultimediaComponent"],
                    _session_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"]
                ],
                providers: [_interceptors_prod_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["interceptorProvider"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "/cI4":
/*!******************************************************!*\
  !*** ./src/app/session/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_models_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/profile */ "X+pJ");
/* harmony import */ var src_app_models_restore_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/restore-password */ "9emF");
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/profile.service */ "KOD3");
/* harmony import */ var src_app_service_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/token.service */ "/QNy");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");











function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_19_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_19_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_template_19_div_8_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.nombre == null ? null : ctx_r4.nombre.errors == null ? null : ctx_r4.nombre.errors.required);
} }
function ProfileComponent_ng_template_19_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_19_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_template_19_div_13_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.direccion == null ? null : ctx_r5.direccion.errors == null ? null : ctx_r5.direccion.errors.required);
} }
function ProfileComponent_ng_template_19_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_19_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El n\u00FAmero solo se puede conformar por digitos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_19_div_18_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El n\u00FAmero telef\u00F3nico debe conformarse de ", ctx_r13.telefono == null ? null : ctx_r13.telefono.errors == null ? null : ctx_r13.telefono.errors.minlength.requiredLength, " digitos");
} }
function ProfileComponent_ng_template_19_div_18_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El n\u00FAmero telef\u00F3nico debe conformarse de ", ctx_r14.telefono == null ? null : ctx_r14.telefono.errors == null ? null : ctx_r14.telefono.errors.maxlength.requiredLength, " digitos");
} }
function ProfileComponent_ng_template_19_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_template_19_div_18_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_ng_template_19_div_18_div_2_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_ng_template_19_div_18_div_3_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_ng_template_19_div_18_div_4_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.telefono == null ? null : ctx_r6.telefono.errors == null ? null : ctx_r6.telefono.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.telefono == null ? null : ctx_r6.telefono.errors == null ? null : ctx_r6.telefono.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.telefono == null ? null : ctx_r6.telefono.errors == null ? null : ctx_r6.telefono.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.telefono == null ? null : ctx_r6.telefono.errors == null ? null : ctx_r6.telefono.errors.maxlength);
} }
function ProfileComponent_ng_template_19_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_19_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo debe ser n\u00FAmerico");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_19_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_template_19_div_24_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_ng_template_19_div_24_div_2_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.latitud == null ? null : ctx_r7.latitud.errors == null ? null : ctx_r7.latitud.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.latitud == null ? null : ctx_r7.latitud.errors == null ? null : ctx_r7.latitud.errors.pattern);
} }
function ProfileComponent_ng_template_19_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_19_div_30_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo debe ser n\u00FAmerico");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_19_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_template_19_div_30_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_ng_template_19_div_30_div_2_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.longitud == null ? null : ctx_r8.longitud.errors == null ? null : ctx_r8.longitud.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.longitud == null ? null : ctx_r8.longitud.errors == null ? null : ctx_r8.longitud.errors.pattern);
} }
function ProfileComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_ng_template_19_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre del establecimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_ng_template_19_div_8_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Direcci\u00F3n del establecimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_ng_template_19_div_13_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tel\u00E9fono del establecimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_ng_template_19_div_18_Template, 5, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Latitud del recinto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_ng_template_19_div_24_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Longitud del recinto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProfileComponent_ng_template_19_div_30_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Actualizar informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.nombre == null ? null : ctx_r2.nombre.touched) && (ctx_r2.nombre == null ? null : ctx_r2.nombre.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.direccion == null ? null : ctx_r2.direccion.touched) && (ctx_r2.direccion == null ? null : ctx_r2.direccion.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.telefono == null ? null : ctx_r2.telefono.touched) && (ctx_r2.telefono == null ? null : ctx_r2.telefono.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.latitud == null ? null : ctx_r2.latitud.touched) && (ctx_r2.latitud == null ? null : ctx_r2.latitud.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.longitud == null ? null : ctx_r2.longitud.touched) && (ctx_r2.longitud == null ? null : ctx_r2.longitud.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.isValid());
} }
function ProfileComponent_ng_template_23_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_23_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El campo debe tener al menos ", _r22.errors == null ? null : _r22.errors.minlength.requiredLength, " caracteres");
} }
function ProfileComponent_ng_template_23_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_template_23_div_10_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_ng_template_23_div_10_div_2_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r22.errors == null ? null : _r22.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r22.errors == null ? null : _r22.errors.minlength);
} }
function ProfileComponent_ng_template_23_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_23_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El campo debe tener al menos ", _r24.errors == null ? null : _r24.errors.minlength.requiredLength, " caracteres");
} }
function ProfileComponent_ng_template_23_div_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La contrase\u00F1a debe contaner un n\u00FAmero y una letra en m\u00EDnuscula y may\u00FAscula, y tener al menos 8 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_23_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_template_23_div_16_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_ng_template_23_div_16_div_2_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_ng_template_23_div_16_div_3_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.errors == null ? null : _r24.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.errors == null ? null : _r24.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.errors == null ? null : _r24.errors.pattern);
} }
function ProfileComponent_ng_template_23_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_23_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Las contrase\u00F1as deben coincidir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_23_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_template_23_div_22_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_ng_template_23_div_22_div_2_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r26.errors == null ? null : _r26.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r26.errors == null ? null : _r26.errors.pattern);
} }
function ProfileComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_ng_template_23_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onRegister(_r21.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contrase\u00F1a actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_ng_template_23_div_10_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nueva contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_ng_template_23_div_16_Template, 4, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Confirmar contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileComponent_ng_template_23_div_22_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cambiar contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r22.touched && _r22.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.touched && _r24.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", _r24.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r26.touched && _r26.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r21.valid);
} }
class ProfileComponent {
    constructor(profileService, tokenService, toastService) {
        this.profileService = profileService;
        this.tokenService = tokenService;
        this.toastService = toastService;
        this.telefonoPattern = "^[0-9]+$";
        this.latitudLonPattern = "^-?[0-9]\\d*(\\.\\d+)?$";
        this.isLoading = false;
        this.errMsj = '';
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.telefonoPattern),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]),
            latitud: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.latitudLonPattern)]),
            longitud: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.latitudLonPattern)])
        });
    }
    ngOnInit() {
        this.loadInfo();
    }
    loadInfo() {
        if (this.tokenService.getToken()) {
            this.profileService.getAccountInfo(this.tokenService.getUserName())
                .subscribe((profi) => {
                var _a, _b, _c, _d, _e;
                this.profile = new src_app_models_profile__WEBPACK_IMPORTED_MODULE_2__["Profile"](profi.direccion, profi.telefono, profi.latitud, profi.longitud, profi.nombre);
                (_a = this.nombre) === null || _a === void 0 ? void 0 : _a.setValue(this.profile.Nombre);
                (_b = this.direccion) === null || _b === void 0 ? void 0 : _b.setValue(this.profile.Direccion);
                (_c = this.telefono) === null || _c === void 0 ? void 0 : _c.setValue(this.profile.Telefono);
                (_d = this.latitud) === null || _d === void 0 ? void 0 : _d.setValue(this.profile.Latitud);
                (_e = this.longitud) === null || _e === void 0 ? void 0 : _e.setValue(this.profile.Longitud);
            }, (error) => {
                this.toastService.error("Error al obtener la cuenta", 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
                setTimeout(() => {
                    window.location.href = '/admin';
                }, 2000);
            });
        }
    }
    onEdit() {
        this.isLoading = true;
        let nombre = this.nombre.value;
        let direccion = this.direccion.value;
        let telefono = this.telefono.value;
        let latitud = this.latitud.value;
        let longitud = this.longitud.value;
        var mod = new src_app_models_profile__WEBPACK_IMPORTED_MODULE_2__["Profile"](direccion, telefono, latitud, longitud, nombre);
        if (this.tokenService.getToken()) {
            this.isLoading = true;
            this.profileService.update(this.tokenService.getUserName(), mod)
                .subscribe((modelo) => {
                this.isLoading = false;
                this.toastService.success("Se ha actualizado la información con éxito", 'OK', {
                    timeOut: 3000, positionClass: 'toast-top-center'
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }, (error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error("Ocurrió un error al actualizar la información", 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
            });
        }
        else {
            this.toastService.error("Error al obtener la cuenta", 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
            setTimeout(() => {
                window.location.href = '/admin';
            }, 2000);
        }
    }
    isValid() {
        return this.editForm.valid;
    }
    onRegister(value) {
        let oldPassword = value.oldPassword;
        let password = value.password;
        let confirmPassword = value.confirmPass;
        if (this.tokenService.getToken()) {
            this.isLoading = true;
            var p = new src_app_models_restore_password__WEBPACK_IMPORTED_MODULE_3__["RestorePassword"](this.tokenService.getUserName(), oldPassword, password, confirmPassword);
            this.profileService.restorePassword(p)
                .subscribe((password) => {
                this.isLoading = false;
                this.toastService.success(password.mensaje, 'OK', {
                    timeOut: 3000, positionClass: 'toast-top-center'
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }, (error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error("Ocurrió un error al actualizar la información", 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
            });
        }
    }
    get nombre() {
        return this.editForm.get('nombre');
    }
    get direccion() {
        return this.editForm.get('direccion');
    }
    get telefono() {
        return this.editForm.get('telefono');
    }
    get latitud() {
        return this.editForm.get('latitud');
    }
    get longitud() {
        return this.editForm.get('longitud');
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 25, vars: 2, consts: [["class", "loading", 4, "ngIf"], [1, "row", "m-0", "p-0"], ["id", "profile_back_img", 1, "col-lg-5", "col-md-5", "col-sm-12", "p-0"], [1, "text-white", "font-xs", "p-3", "backg-charcoal50"], ["href", "https://unsplash.com/@soberanes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 1, "text-yellow"], ["href", "https://unsplash.com", 1, "text-yellow"], [1, "col-lg-7", "col-md-7", "col-sm-12", "p-4", "mx-auto", "backg-charcoal", "text-white"], [1, "mb-3"], [1, "text-center"], ["ngbNav", "", 1, "nav-tabs", "col-12"], ["nav", "ngbNav"], ["ngbNavItem", "", 1, "col-6", "text-center"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [1, "loading"], ["src", "../../../assets/gif/loading_splash.gif"], [1, "p-3", "profile-content-container"], [1, "col-8", "mx-auto", "my-4"], [3, "formGroup", "ngSubmit"], [1, "form-container", "mb-4"], [1, "form-group", "w-100", "mb-2"], ["for", "register_placeName", 1, ""], ["formControlName", "nombre", "id", "register_placeName", "type", "text", "placeholder", "Ingrese el nombre", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "register_address", 1, ""], ["formControlName", "direccion", "id", "register_address", "type", "text", "placeholder", "Ingrese la direcci\u00F3n", 1, "form-control"], ["for", "register_phone", 1, ""], ["formControlName", "telefono", "id", "register_phone", "type", "text", "placeholder", "Ingrese el n\u00FAmero telef\u00F3nico", 1, "form-control"], ["for", "register_latitude", 1, ""], ["data-toggle", "tooltip", "ngbPopover", "Es el lado izquierdo de las coordenadas en google maps (antes de la coma), el primer n\u00FAmero debe ser un valor comprendido entre -90 y 90.", "triggers", "mouseenter:mouseleave", 1, "mdi", "mdi-information"], ["formControlName", "latitud", "id", "register_latitude", "type", "text", "placeholder", "Ejemplo: 21.047785753144087", 1, "form-control"], ["for", "register_longitude", 1, ""], ["data-toggle", "tooltip", "ngbPopover", "Es el lado derecho de las coordenadas en google maps, primer n\u00FAmero debe ser un valor comprendido entre -180 y 180.", "triggers", "mouseenter:mouseleave", 1, "mdi", "mdi-information"], ["formControlName", "longitud", "id", "register_longitude", "type", "text", "placeholder", "Ejemplo: -89.64432970276357", 1, "form-control"], [1, "w-100", "btn", "btn-forest", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "ngSubmit"], ["f", "ngForm"], [1, "mb-4"], ["for", "register_pass", 1, ""], ["ngModel", "", "name", "oldPassword", "id", "register_pass", "type", "password", "required", "", "placeholder", "********", 1, "form-control"], ["oldPassword", "ngModel"], ["for", "register_new_pass", 1, ""], ["ngModel", "", "name", "password", "required", "", "minlength", "8", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "id", "register_new_pass", "type", "password", "placeholder", "********", 1, "form-control"], ["password", "ngModel"], [1, "form-group", "w-100", "mb-4"], ["for", "register_confirm_pass", 1, ""], ["ngModel", "", "name", "confirmPass", "required", "", "id", "register_confirm_pass", "type", "password", "id", "register_confirm_pass", "type", "password", "placeholder", "********", 1, "form-control", 3, "pattern"], ["confirmPass", "ngModel"], [1, "w-100", "mb-2", "btn", "btn-forest", 3, "disabled"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cr\u00E9ditos de fotograf\u00EDa a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Uriel Soberanes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Unsplash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mi Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Informaci\u00F3n de perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_ng_template_19_Template, 34, 7, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cambio de contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfileComponent_ng_template_23_Template, 25, 5, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPopover"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"]], styles: [".form-container[_ngcontent-%COMP%]{\r\n    max-height: 18rem;\r\n    overflow-y: scroll;\r\n}\r\n#session_back_img[_ngcontent-%COMP%], #profile_back_img[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-color: var(--blue-gray);\r\n}\r\n#session_back_img[_ngcontent-%COMP%] {\r\n    background-image: url('admin_02.jpg');\r\n}\r\n#profile_back_img[_ngcontent-%COMP%]{background-image: url('admin_04.jpg')}\r\n.loading[_ngcontent-%COMP%]{height: calc(100% + var(--header_height) + var(--footer_height));}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLHFDQUE0RDtBQUNoRTtBQUNBLGtCQUFrQixxQ0FBNEQ7QUFDOUUsU0FBUyxnRUFBZ0UsQ0FBQyIsImZpbGUiOiJzZXNzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxOHJlbTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4jc2Vzc2lvbl9iYWNrX2ltZywgI3Byb2ZpbGVfYmFja19pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1ncmF5KTtcclxufVxyXG4jc2Vzc2lvbl9iYWNrX2ltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2FkbWluL2FkbWluXzAyLmpwZ1wiKTtcclxufVxyXG4jcHJvZmlsZV9iYWNrX2ltZ3tiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2FkbWluL2FkbWluXzA0LmpwZ1wiKX1cclxuLmxvYWRpbmd7aGVpZ2h0OiBjYWxjKDEwMCUgKyB2YXIoLS1oZWFkZXJfaGVpZ2h0KSArIHZhcigtLWZvb3Rlcl9oZWlnaHQpKTt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['../session.component.css']
            }]
    }], function () { return [{ type: src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }, { type: src_app_service_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mbrito\Documents\repositorios\Proy\jaguAR\src\main.ts */"zUnb");


/***/ }),

/***/ "0M3w":
/*!*****************************************!*\
  !*** ./src/app/models/grupo-request.ts ***!
  \*****************************************/
/*! exports provided: GrupoRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoRequest", function() { return GrupoRequest; });
class GrupoRequest {
    constructor(idMuseo, nombre, descripcion, urlImagen) {
        this.idMuseo = idMuseo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
    }
    get Nombre() {
        return this.nombre;
    }
    get Descripcion() {
        return this.descripcion;
    }
    get UrlImagen() {
        return this.urlImagen;
    }
    get IdMuseo() {
        return this.idMuseo;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set Descripcion(value) {
        this.descripcion = value;
    }
    set UrlImagen(value) {
        this.urlImagen = value;
    }
    set IdMuseo(value) {
        this.idMuseo = value;
    }
}


/***/ }),

/***/ "0ipe":
/*!****************************************************!*\
  !*** ./src/app/session/auth/registro.component.ts ***!
  \****************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_registro_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/registro-usuario */ "9/xm");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/token.service */ "/QNy");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");










function RegistroComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo debe ser de tipo email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_9_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistroComponent_div_9_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors.email);
} }
function RegistroComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_15_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.required);
} }
function RegistroComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_21_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors.required);
} }
function RegistroComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_27_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors.required);
} }
function RegistroComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_33_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El n\u00FAmero solo se puede conformar por digitos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_33_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El n\u00FAmero telef\u00F3nico debe conformarse de ", _r10.errors == null ? null : _r10.errors.minlength.requiredLength, " digitos");
} }
function RegistroComponent_div_33_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El n\u00FAmero telef\u00F3nico debe conformarse de ", _r10.errors == null ? null : _r10.errors.maxlength.requiredLength, " digitos");
} }
function RegistroComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_33_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistroComponent_div_33_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegistroComponent_div_33_div_3_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegistroComponent_div_33_div_4_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors.maxlength);
} }
function RegistroComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo debe ser n\u00FAmerico");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_40_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistroComponent_div_40_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors == null ? null : _r12.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors == null ? null : _r12.errors.pattern);
} }
function RegistroComponent_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_47_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo debe ser n\u00FAmerico");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_47_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistroComponent_div_47_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors == null ? null : _r14.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors == null ? null : _r14.errors.pattern);
} }
function RegistroComponent_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_54_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El campo debe tener al menos ", _r16.errors == null ? null : _r16.errors.minlength.requiredLength, " caracteres");
} }
function RegistroComponent_div_54_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La contrase\u00F1a debe contaner un n\u00FAmero y una letra en m\u00EDnuscula y may\u00FAscula, y tener al menos 8 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_54_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistroComponent_div_54_div_2_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegistroComponent_div_54_div_3_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r16.errors == null ? null : _r16.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r16.errors == null ? null : _r16.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r16.errors == null ? null : _r16.errors.pattern);
} }
function RegistroComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_60_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Las contrase\u00F1as deben coincidir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_60_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistroComponent_div_60_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r18.errors == null ? null : _r18.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r18.errors == null ? null : _r18.errors.pattern);
} }
// import { ToastrService } from 'ngx-toastr';
class RegistroComponent {
    constructor(tokenService, authService, router, toastService
    // private toastr: ToastrService
    ) {
        this.tokenService = tokenService;
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
        // nuevoUsuario: RegistroUsuario = {};
        this.emailUsuario = '';
        this.aliasUsuario = '';
        this.password = '';
        this.nombreRecinto = '';
        this.direccionRecinto = '';
        this.telefonoRecinto = '';
        this.latitud = 0;
        this.longitud = 0;
        this.errMsj = '';
        this.isLogged = false;
        this.isLoading = false;
    }
    ngOnInit() {
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        }
    }
    onRegister(register) {
        this.isLoading = true;
        console.log(register);
        let roles = ["admin"];
        let email = register.emailUsuario;
        let alias = register.aliasUsuario;
        let password = register.password;
        let direccion = register.direccionRecinto;
        let telefono = register.telefonoRecinto;
        let latitud = register.latitud;
        let longitud = register.longitud;
        let nombre = register.nombreRecinto;
        let registro = new _models_registro_usuario__WEBPACK_IMPORTED_MODULE_1__["RegistroUsuario"](email, alias, password, direccion, telefono, latitud, longitud, nombre, roles);
        this.authService.nuevo(registro)
            .subscribe((data) => {
            this.isLoading = false;
            this.toastService.success('Su cuenta se ha registrado con éxito, recibirá un email a ' + data.email + ' en la brevedad', 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center'
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }, (error) => {
            this.isLoading = false;
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error(this.errMsj, 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], decls: 63, vars: 12, consts: [["class", "loading", 4, "ngIf"], [1, "form-container", 3, "ngSubmit"], ["f", "ngForm"], [1, "col-8", "mx-auto", "my-4"], [1, "form-group", "w-100", "mb-2"], ["for", "register_email", 1, ""], ["ngModel", "", "name", "emailUsuario", "required", "", "email", "", "id", "register_email", "type", "text", "placeholder", "Ingrese el correo electr\u00F3nico", 1, "form-control"], ["emailUsuario", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "register_alias", 1, ""], ["ngModel", "", "name", "aliasUsuario", "required", "", "id", "register_alias", "type", "text", "placeholder", "Ingrese la cuenta del usuario", 1, "form-control"], ["aliasUsuario", "ngModel"], ["for", "register_placeName", 1, ""], ["ngModel", "", "name", "nombreRecinto", "required", "", "id", "register_placeName", "type", "text", "placeholder", "Ingrese el nombre", 1, "form-control"], ["nombreRecinto", "ngModel"], ["for", "register_address", 1, ""], ["ngModel", "", "name", "direccionRecinto", "required", "", "id", "register_address", "type", "text", "placeholder", "Ingrese la direcci\u00F3n", 1, "form-control"], ["direccionRecinto", "ngModel"], ["for", "register_phone", 1, ""], ["ngModel", "", "name", "telefonoRecinto", "required", "", "minlength", "10", "maxlength", "10", "pattern", "^[0-9]+$", "id", "register_phone", "type", "text", "placeholder", "Ingrese el n\u00FAmero telef\u00F3nico", 1, "form-control"], ["telefonoRecinto", "ngModel"], ["for", "register_latitude", 1, ""], ["data-toggle", "tooltip", "ngbPopover", "Es el lado izquierdo de las coordenadas en google maps (antes de la coma), el primer n\u00FAmero debe ser un valor comprendido entre -90 y 90.", "triggers", "mouseenter:mouseleave", 1, "mdi", "mdi-information"], ["ngModel", "", "name", "latitud", "required", "", "pattern", "^-?[0-9]\\d*(\\.\\d+)?$", "id", "register_latitude", "type", "text", "placeholder", "Ejemplo: 21.047785753144087", 1, "form-control"], ["latitud", "ngModel"], ["for", "register_longitude", 1, ""], ["data-toggle", "tooltip", "ngbPopover", "Es el lado derecho de las coordenadas en google maps, primer n\u00FAmero debe ser un valor comprendido entre -180 y 180.", "triggers", "mouseenter:mouseleave", 1, "mdi", "mdi-information"], ["ngModel", "", "name", "longitud", "required", "", "pattern", "^-?[0-9]\\d*(\\.\\d+)?$", "id", "register_longitude", "type", "text", "placeholder", "Ejemplo: -89.64432970276357", 1, "form-control"], ["longitud", "ngModel"], ["for", "register_pass", 1, ""], ["ngModel", "", "name", "password", "required", "", "minlength", "8", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "id", "register_pass", "type", "password", "placeholder", "********", 1, "form-control"], ["password", "ngModel"], [1, "form-group", "w-100", "mb-4"], ["for", "register_confirm_pass", 1, ""], ["ngModel", "", "name", "confirmPass", "required", "", "id", "register_confirm_pass", "type", "password", "placeholder", "********", 1, "form-control", 3, "pattern"], ["confirmPass", "ngModel"], [1, "w-100", "btn", "btn-yellow", 3, "disabled"], [1, "loading"], ["src", "../../../assets/gif/loading_splash.gif"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegistroComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistroComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onRegister(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegistroComponent_div_9_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegistroComponent_div_15_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Nombre del recinto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegistroComponent_div_21_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Direcci\u00F3n del recinto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegistroComponent_div_27_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Tel\u00E9fono del recinto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RegistroComponent_div_33_Template, 5, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Latitud del recinto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RegistroComponent_div_40_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Longitud del recinto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RegistroComponent_div_47_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RegistroComponent_div_54_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Confirmar contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, RegistroComponent_div_60_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.touched && _r2.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.touched && _r4.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.touched && _r6.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.touched && _r8.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.touched && _r10.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.touched && _r12.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.touched && _r14.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r16.touched && _r16.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", _r16.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r18.touched && _r18.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPopover"]], styles: [".form-container[_ngcontent-%COMP%]{\r\n    max-height: 18rem;\r\n    overflow-y: scroll;\r\n}\r\n#session_back_img[_ngcontent-%COMP%], #profile_back_img[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-color: var(--blue-gray);\r\n}\r\n#session_back_img[_ngcontent-%COMP%] {\r\n    background-image: url('admin_02.jpg');\r\n}\r\n#profile_back_img[_ngcontent-%COMP%]{background-image: url('admin_04.jpg')}\r\n.loading[_ngcontent-%COMP%]{height: calc(100% + var(--header_height) + var(--footer_height));}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLHFDQUE0RDtBQUNoRTtBQUNBLGtCQUFrQixxQ0FBNEQ7QUFDOUUsU0FBUyxnRUFBZ0UsQ0FBQyIsImZpbGUiOiJzZXNzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxOHJlbTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4jc2Vzc2lvbl9iYWNrX2ltZywgI3Byb2ZpbGVfYmFja19pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1ncmF5KTtcclxufVxyXG4jc2Vzc2lvbl9iYWNrX2ltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2FkbWluL2FkbWluXzAyLmpwZ1wiKTtcclxufVxyXG4jcHJvZmlsZV9iYWNrX2ltZ3tiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2FkbWluL2FkbWluXzA0LmpwZ1wiKX1cclxuLmxvYWRpbmd7aGVpZ2h0OiBjYWxjKDEwMCUgKyB2YXIoLS1oZWFkZXJfaGVpZ2h0KSArIHZhcigtLWZvb3Rlcl9oZWlnaHQpKTt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registro',
                templateUrl: './registro.component.html',
                styleUrls: ['../session.component.css']
            }]
    }], function () { return [{ type: _service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }, { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "0sL4":
/*!*************************************************************!*\
  !*** ./src/app/admin/entities/modelos/modelos.component.ts ***!
  \*************************************************************/
/*! exports provided: ModelosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelosComponent", function() { return ModelosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_models_modelo_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/modelo-admin */ "a/hz");
/* harmony import */ var src_app_models_modelo_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/modelo-request */ "WJ30");
/* harmony import */ var src_app_models_modelo_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/modelo-update */ "6+NH");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var src_app_service_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/token.service */ "/QNy");
/* harmony import */ var src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/cuenta.service */ "rPZ9");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_service_modelo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/modelo.service */ "GErA");
/* harmony import */ var src_app_service_file_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/file.service */ "shLW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
















function ModelosComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModelosComponent_tr_24_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 21);
} }
function ModelosComponent_tr_24_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 22);
} }
function ModelosComponent_tr_24_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 21);
} }
function ModelosComponent_tr_24_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 22);
} }
function ModelosComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModelosComponent_tr_24_a_8_Template, 1, 0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModelosComponent_tr_24_a_9_Template, 1, 0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModelosComponent_tr_24_a_11_Template, 1, 0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModelosComponent_tr_24_a_12_Template, 1, 0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelosComponent_tr_24_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const model_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return ctx_r14.editModal(_r7, model_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelosComponent_tr_24_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const model_r9 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx_r16.deleteModal(_r3, model_r9.IdModelo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r9.Nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r9.UrlModelo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r9.NombreAnimacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", model_r9.HasResize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !model_r9.HasResize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", model_r9.HasRotation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !model_r9.HasRotation);
} }
function ModelosComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No se encontraron registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModelosComponent_ng_template_27_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModelosComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModelosComponent_ng_template_27_div_0_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelosComponent_ng_template_27_Template_button_click_5_listener() { const modal_r17 = ctx.$implicit; return modal_r17.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00BFEst\u00E1 seguro de que desea eliminar este modelo?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelosComponent_ng_template_27_Template_button_click_13_listener() { const modal_r17 = ctx.$implicit; return modal_r17.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelosComponent_ng_template_27_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Eliminar modelo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
} }
function ModelosComponent_ng_template_29_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModelosComponent_ng_template_29_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModelosComponent_ng_template_29_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModelosComponent_ng_template_29_div_15_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r26.errors == null ? null : _r26.errors.required);
} }
function ModelosComponent_ng_template_29_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModelosComponent_ng_template_29_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModelosComponent_ng_template_29_div_21_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r28.errors == null ? null : _r28.errors.required);
} }
function ModelosComponent_ng_template_29_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModelosComponent_ng_template_29_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModelosComponent_ng_template_29_div_35_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r31.errors == null ? null : _r31.errors.required);
} }
function ModelosComponent_ng_template_29_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModelosComponent_ng_template_29_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModelosComponent_ng_template_29_div_41_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r33.errors == null ? null : _r33.errors.required);
} }
function ModelosComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModelosComponent_ng_template_29_div_0_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nuevo modelo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelosComponent_ng_template_29_Template_button_click_5_listener() { const modal_r23 = ctx.$implicit; return modal_r23.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ModelosComponent_ng_template_29_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.onRegister(_r25.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre del modelo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModelosComponent_ng_template_29_div_15_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Nombre de la animaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ModelosComponent_ng_template_29_div_21_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ModelosComponent_ng_template_29_Template_input_change_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelosComponent_ng_template_29_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r30.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Cambio de tama\u00F1o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ModelosComponent_ng_template_29_div_35_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Rotaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ModelosComponent_ng_template_29_div_41_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelosComponent_ng_template_29_Template_button_click_45_listener() { const modal_r23 = ctx.$implicit; return modal_r23.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Crear Modelo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r26.touched && _r26.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r28.touched && _r28.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.fileName || "Ning\u00FAn archivo seleccionado.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r31.touched && _r31.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r33.touched && _r33.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r25.valid || !ctx_r6.fileModelo);
} }
function ModelosComponent_ng_template_31_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModelosComponent_ng_template_31_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModelosComponent_ng_template_31_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModelosComponent_ng_template_31_div_17_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.animacion.errors == null ? null : ctx_r47.animacion.errors.required);
} }
function ModelosComponent_ng_template_31_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModelosComponent_ng_template_31_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModelosComponent_ng_template_31_div_22_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.resize.errors == null ? null : ctx_r48.resize.errors.required);
} }
function ModelosComponent_ng_template_31_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModelosComponent_ng_template_31_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModelosComponent_ng_template_31_div_27_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.rotation.errors == null ? null : ctx_r49.rotation.errors.required);
} }
function ModelosComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModelosComponent_ng_template_31_div_0_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Editar modelo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelosComponent_ng_template_31_Template_button_click_5_listener() { const modal_r45 = ctx.$implicit; return modal_r45.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ModelosComponent_ng_template_31_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre del modelo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nombre de la animaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ModelosComponent_ng_template_31_div_17_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Cambio de tama\u00F1o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ModelosComponent_ng_template_31_div_22_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Rotaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ModelosComponent_ng_template_31_div_27_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelosComponent_ng_template_31_Template_button_click_33_listener() { const modal_r45 = ctx.$implicit; return modal_r45.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Guardar modelo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r8.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.animacion.touched && ctx_r8.animacion.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.resize.touched && ctx_r8.resize.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.rotation.touched && ctx_r8.rotation.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r8.isValid());
} }
class ModelosComponent {
    constructor(modalService, tokenService, cuentaService, toastService, modeloService, fileService) {
        this.modalService = modalService;
        this.tokenService = tokenService;
        this.cuentaService = cuentaService;
        this.toastService = toastService;
        this.modeloService = modeloService;
        this.fileService = fileService;
        this.isLoading = false;
        this.fileName = '';
        this.modelos = [];
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            animacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            rotation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            resize: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            idModelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            urlImagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.deleteModel = 0;
        this.errMsj = '';
        this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        this.lengthOfCode = 5;
    }
    ngOnInit() {
        this.loadMuseo();
    }
    openModal(content) {
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    editModal(content, modelo) {
        var _a, _b, _c, _d, _e, _f;
        (_a = this.editForm.get('nombre')) === null || _a === void 0 ? void 0 : _a.setValue(modelo.Nombre);
        (_b = this.editForm.get('animacion')) === null || _b === void 0 ? void 0 : _b.setValue(modelo.NombreAnimacion);
        (_c = this.editForm.get('rotation')) === null || _c === void 0 ? void 0 : _c.setValue(modelo.HasRotation);
        (_d = this.editForm.get('resize')) === null || _d === void 0 ? void 0 : _d.setValue(modelo.HasResize);
        (_e = this.editForm.get('idModelo')) === null || _e === void 0 ? void 0 : _e.setValue(modelo.IdModelo);
        (_f = this.editForm.get('urlImagen')) === null || _f === void 0 ? void 0 : _f.setValue(modelo.UrlModelo);
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    deleteModal(content, idModelo) {
        this.deleteModel = idModelo;
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    loadMuseo() {
        if (!this.tokenService.getIdMuseo() && this.tokenService.getToken()) {
            this.cuentaService.getMuseo(this.tokenService.getUserName())
                .subscribe((museo) => {
                this.tokenService.setIdMuseo(+museo.idMuseo);
                this.loadModelos(+this.tokenService.getIdMuseo());
            }, (error) => {
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
                setTimeout(() => {
                    window.location.href = '/admin';
                }, 2000);
            });
        }
        else if (!this.tokenService.getToken()) {
            window.location.href = '/admin';
        }
        else if (this.tokenService.getIdMuseo()) {
            this.loadModelos(+(this.tokenService.getIdMuseo()));
        }
    }
    loadModelos(idMuseo) {
        this.modeloService.getAllByRecinto(idMuseo)
            .subscribe((models) => {
            this.modelos = [];
            models.forEach(element => {
                var m = new src_app_models_modelo_admin__WEBPACK_IMPORTED_MODULE_2__["ModeloAdmin"](element.nombre, element.urlModelo, element.nombreAnimacion, element.hasRotation, element.hasMovement, element.hasResize, element.texturaPath);
                m.IdModelo = element.idModelo;
                this.modelos.push(m);
            });
        }, (error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error(this.errMsj, 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    onRegister(value) {
        let nombre = value.nombre;
        let animacion = value.animacion;
        let resize = (value.resize == "") ? false : value.resize;
        let rotation = (value.rotation == "") ? false : value.rotation;
        let movement = false;
        let path = "N/A";
        this.isLoading = true;
        if (this.fileModelo) {
            let string = this.makeRandom(this.lengthOfCode, this.possible);
            let nameFile = this.tokenService.getIdMuseo() + "_" + string + "_" + this.fileName;
            let finalName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].modelosExternoFolder + nameFile;
            this.fileService.upload(this.fileModelo, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].modelosFolder + nameFile)
                .subscribe((response) => {
                var mod = new src_app_models_modelo_request__WEBPACK_IMPORTED_MODULE_3__["ModeloRequest"](nombre, finalName, animacion, rotation, movement, resize, path, +this.tokenService.getIdMuseo());
                this.modeloService.save(mod)
                    .subscribe((modelo) => {
                    this.isLoading = false;
                    this.toastService.success("El modelo se ha almacenado con éxito", 'OK', {
                        timeOut: 3000, positionClass: 'toast-top-center'
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }, (error) => {
                    this.isLoading = false;
                    this.errMsj = error.error.message;
                    console.log(this.errMsj);
                    this.toastService.error("Ocurrió un error al registrar el componente", 'Fail', {
                        timeOut: 3000, positionClass: 'toast-top-center',
                    });
                });
            }, (error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error("Ocurrió un error al registrar el archivo", 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
            });
        }
        else {
            this.toastService.error("No se ha seleccionado un archivo para subir", 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        }
    }
    onFileSelected(event) {
        let archivo = event.target.files[0];
        if (archivo) {
            this.fileModelo = archivo;
            this.fileName = archivo.name;
        }
    }
    onEdit() {
        this.isLoading = true;
        let nombre = this.nombre.value;
        let animacion = this.animacion.value;
        let resize = (this.resize.value == "") ? false : this.resize.value;
        let rotation = (this.rotation.value == "") ? false : this.rotation.value;
        let urlModelo = this.urlImagen.value;
        let idModelo = this.idModelo.value;
        let movement = false;
        let path = "N/A";
        var mod = new src_app_models_modelo_update__WEBPACK_IMPORTED_MODULE_4__["ModeloUpdate"](nombre, urlModelo, animacion, rotation, movement, resize, path);
        this.isLoading = true;
        this.modeloService.update(idModelo, mod)
            .subscribe((modelo) => {
            this.isLoading = false;
            this.toastService.success("El modelo se ha almacenado con éxito", 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center'
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }, (error) => {
            this.isLoading = false;
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error("Ocurrió un error al actualizar el modelo", 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    onDelete() {
        if (this.deleteModel != 0) {
            this.isLoading = true;
            this.modeloService.delete(this.deleteModel, +this.tokenService.getIdMuseo())
                .subscribe((response) => {
                this.isLoading = false;
                this.toastService.success(response.message, 'OK', {
                    timeOut: 3000, positionClass: 'toast-top-center'
                });
                this.deleteModel = 0;
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }, (error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.deleteModel = 0;
                this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
            });
        }
    }
    makeRandom(lengthOfCode, possible) {
        let text = "";
        for (let i = 0; i < lengthOfCode; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    isValid() {
        return this.editForm.valid;
    }
    get nombre() {
        return this.editForm.get('nombre');
    }
    get animacion() {
        return this.editForm.get('animacion');
    }
    get rotation() {
        return this.editForm.get('rotation');
    }
    get resize() {
        return this.editForm.get('resize');
    }
    get idModelo() {
        return this.editForm.get('idModelo');
    }
    get urlImagen() {
        return this.editForm.get('urlImagen');
    }
}
ModelosComponent.ɵfac = function ModelosComponent_Factory(t) { return new (t || ModelosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_8__["CuentaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_modelo_service__WEBPACK_IMPORTED_MODULE_10__["ModeloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_file_service__WEBPACK_IMPORTED_MODULE_11__["FileService"])); };
ModelosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModelosComponent, selectors: [["app-modelos"]], decls: 33, vars: 3, consts: [["class", "loading", 4, "ngIf"], [1, "container-fluid", "px-5", "py-3"], [1, "row", "mb-4"], [1, "col", "text-white"], [1, "btn", "btn-forest", "col-3", 3, "click"], [1, "table-container"], [1, "table", "table-light", "table-hover", "text-center"], [1, "thead-aqua"], ["data-toggle", "tooltip", "title", "Editar", 1, "icon", "mdi", "mdi-resize"], ["data-toggle", "tooltip", "title", "Editar", 1, "icon", "mdi", "mdi-cursor-move"], [4, "ngFor", "ngForOf"], ["colspan", "12", 4, "ngIf"], ["confirmDelete", ""], ["newEntityModal", ""], ["EditEntityModal", ""], [1, "loading"], ["src", "../../../../assets/gif/loading_splash.gif"], ["class", "icon mdi mdi-check-circle text-green", "data-toggle", "tooltip", "title", "Editar", 4, "ngIf"], ["class", "icon mdi mdi-check-circle-outline text-green", "data-toggle", "tooltip", "title", "Eliminar", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Editar", 1, "icon", "mdi", "mdi-pencil", "text-yellow", 3, "click"], ["data-toggle", "tooltip", "title", "Eliminar", 1, "icon", "mdi", "mdi-trash-can", "text-red", 3, "click"], ["data-toggle", "tooltip", "title", "Editar", 1, "icon", "mdi", "mdi-check-circle", "text-green"], ["data-toggle", "tooltip", "title", "Eliminar", 1, "icon", "mdi", "mdi-check-circle-outline", "text-green"], ["colspan", "12"], [1, "modal-header", "pb-2"], [1, "col-2"], [1, "modal-title", "text-center", "col"], ["type", "button", "aria-label", "Close", 1, "close", "col-2", "my-auto", 3, "click"], ["aria-hidden", "true", 1, "mdi", "mdi-close-thick"], [1, "modal-body", "p-3"], [1, "modal-footer"], [1, "row", "col-12"], [1, "col-6"], [1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "btn", "btn-yellow", "w-100", 3, "click"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "w-100", "mb-2"], ["for", "model_name", 1, ""], ["ngModel", "", "name", "nombre", "id", "model_name", "type", "text", "placeholder", "Ingrese el nombre del modelo", "required", "", 1, "form-control"], ["nombre", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["ngModel", "", "name", "animacion", "id", "model_name", "type", "text", "placeholder", "Ingrese el nombre del modelo", "required", "", 1, "form-control"], ["animacion", "ngModel"], [1, "form-group", "w-100", "mb-4"], ["type", "file", "required", "", "accept", ".glb,.gltf,.obj", 1, "file-input", 3, "change"], ["fileUpload", ""], [1, "file-upload"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "upload-btn", 3, "click"], ["ngModel", "", "name", "resize", "type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["resize", "ngModel"], ["for", "flexCheckDefault", 1, "form-check-label"], ["ngModel", "", "name", "rotation", "type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["rotation", "ngModel"], ["type", "button", 1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "btn", "btn-yellow", "w-100", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], ["formControlName", "nombre", "type", "text", "placeholder", "Ingrese el nombre del modelo", 1, "form-control"], ["formControlName", "animacion", "type", "text", "placeholder", "Ingrese el nombre del modelo", 1, "form-control"], ["formControlName", "resize", "type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["formControlName", "rotation", "type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["formControlName", "idModelo", "type", "text", "hidden", "", 1, "form-control"], ["formControlName", "urlImagen", "type", "text", "hidden", "", 1, "form-control"]], template: function ModelosComponent_Template(rf, ctx) { if (rf & 1) {
        const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModelosComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Modelos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelosComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx.openModal(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nuevo modelo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Archivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Animaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ModelosComponent_tr_24_Template, 16, 7, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ModelosComponent_td_26_Template, 2, 0, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ModelosComponent_ng_template_27_Template, 18, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ModelosComponent_ng_template_29_Template, 50, 7, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ModelosComponent_ng_template_31_Template, 38, 6, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.modelos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modelos.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".file-input[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.loading[_ngcontent-%COMP%]{height: calc(100% + var(--header_height) + var(--footer_height));}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQSxTQUFTLGdFQUFnRSxDQUFDIiwiZmlsZSI6Im1vZGVsb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxvYWRpbmd7aGVpZ2h0OiBjYWxjKDEwMCUgKyB2YXIoLS1oZWFkZXJfaGVpZ2h0KSArIHZhcigtLWZvb3Rlcl9oZWlnaHQpKTt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modelos',
                templateUrl: './modelos.component.html',
                styleUrls: ['./modelos.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: src_app_service_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"] }, { type: src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_8__["CuentaService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }, { type: src_app_service_modelo_service__WEBPACK_IMPORTED_MODULE_10__["ModeloService"] }, { type: src_app_service_file_service__WEBPACK_IMPORTED_MODULE_11__["FileService"] }]; }, null); })();


/***/ }),

/***/ "3qEQ":
/*!********************************************!*\
  !*** ./src/app/models/marcador-request.ts ***!
  \********************************************/
/*! exports provided: MarcadorRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcadorRequest", function() { return MarcadorRequest; });
class MarcadorRequest {
    constructor(nombre, urlTarget, idMuseo) {
        this.nombre = nombre;
        this.urlTarget = urlTarget;
        this.idMuseo = idMuseo;
    }
    get Nombre() {
        return this.nombre;
    }
    get UrlTarget() {
        return this.urlTarget;
    }
    get IdMuseo() {
        return this.idMuseo;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set UrlTarget(value) {
        this.urlTarget = value;
    }
    set IdMuseo(value) {
        this.idMuseo = value;
    }
}


/***/ }),

/***/ "6+NH":
/*!*****************************************!*\
  !*** ./src/app/models/modelo-update.ts ***!
  \*****************************************/
/*! exports provided: ModeloUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeloUpdate", function() { return ModeloUpdate; });
class ModeloUpdate {
    constructor(nombre, urlModelo, nombreAnimacion, hasRotation, hasMovement, hasResize, texturaPath) {
        this.nombre = nombre;
        this.urlModelo = urlModelo;
        this.nombreAnimacion = nombreAnimacion;
        this.hasRotation = hasRotation;
        this.hasMovement = hasMovement;
        this.hasResize = hasResize;
        this.texturaPath = texturaPath;
    }
    get Nombre() {
        return this.nombre;
    }
    get UrlModelo() {
        return this.urlModelo;
    }
    get NombreAnimacion() {
        return this.nombreAnimacion;
    }
    get HasRotation() {
        return this.hasRotation;
    }
    get HasMovement() {
        return this.hasMovement;
    }
    get HasResize() {
        return this.hasResize;
    }
    get TexturaPath() {
        return this.texturaPath;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set UrlModelo(value) {
        this.urlModelo = value;
    }
    set NombreAnimacion(value) {
        this.nombreAnimacion = value;
    }
    set HasRotation(value) {
        this.hasRotation = value;
    }
    set HasMovement(value) {
        this.hasMovement = value;
    }
    set HasResize(value) {
        this.hasResize = value;
    }
    set TexturaPath(value) {
        this.texturaPath = value;
    }
}


/***/ }),

/***/ "6uu6":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.authURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi}/auth/`;
    }
    nuevo(nuevoUsuario) {
        return this.httpClient.post(this.authURL + 'register', nuevoUsuario);
    }
    login(loginUsuario) {
        return this.httpClient.post(this.authURL + 'login', loginUsuario);
    }
    refresh(token) {
        return this.httpClient.post(this.authURL + 'refresh', token);
    }
    recover(id) {
        return this.httpClient.get(this.authURL + `recover/${id}`);
    }
    restore(restore) {
        return this.httpClient.post(this.authURL + 'restore', restore);
    }
    restoreAccount(userEmail) {
        return this.httpClient.post(this.authURL + 'restore/account', userEmail);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9/xm":
/*!********************************************!*\
  !*** ./src/app/models/registro-usuario.ts ***!
  \********************************************/
/*! exports provided: RegistroUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroUsuario", function() { return RegistroUsuario; });
class RegistroUsuario {
    constructor(email, alias, password, direccion, telefono, latitud, longitud, nombre, roles) {
        this.email = email;
        this.alias = alias;
        this.password = password;
        this.direccion = direccion;
        this.telefono = telefono;
        this.latitud = latitud;
        this.longitud = longitud;
        this.nombre = nombre;
        this.roles = roles;
    }
    get Email() {
        return this.email;
    }
    get Alias() {
        return this.alias;
    }
    get Password() {
        return this.password;
    }
    get Direccion() {
        return this.direccion;
    }
    get Telefono() {
        return this.telefono;
    }
    get Latitud() {
        return this.latitud;
    }
    get Longitud() {
        return this.longitud;
    }
    get Nombre() {
        return this.nombre;
    }
    get Roles() {
        return this.roles;
    }
    set Password(value) {
        this.password = value;
    }
    set Alias(value) {
        this.alias = value;
    }
    set Direccion(value) {
        this.direccion = value;
    }
    set Telefono(value) {
        this.telefono = value;
    }
    set Latitud(value) {
        this.latitud = value;
    }
    set Longitud(value) {
        this.longitud = value;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set Roles(value) {
        this.roles = value;
    }
    set Email(value) {
        this.email = value;
    }
}


/***/ }),

/***/ "9emF":
/*!********************************************!*\
  !*** ./src/app/models/restore-password.ts ***!
  \********************************************/
/*! exports provided: RestorePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePassword", function() { return RestorePassword; });
class RestorePassword {
    constructor(username, oldPassword, nuevaPassword, confirmPassword) {
        this.username = username;
        this.oldPassword = oldPassword;
        this.nuevaPassword = nuevaPassword;
        this.confirmPassword = confirmPassword;
    }
    get Username() {
        return this.username;
    }
    set Username(value) {
        this.username = value;
    }
    get OldPassword() {
        return this.oldPassword;
    }
    set OldPassword(value) {
        this.oldPassword = value;
    }
    get NuevaPassword() {
        return this.nuevaPassword;
    }
    set NuevaPassword(value) {
        this.nuevaPassword = value;
    }
    get ConfirmPassword() {
        return this.confirmPassword;
    }
    set ConfirmPassword(value) {
        this.confirmPassword = value;
    }
}


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
    production: false,
    urlApi: "https://50.21.190.243:4043/api/v1",
    grupoFolder: "/root/jaguar/jaguAR/src/assets/usr/grupos/",
    grupoExternoFolder: "../../../assets/usr/grupos/",
    componentesFolder: "/root/jaguar/jaguAR/src/assets/usr/componentes/",
    componenteExternoFolder: "../../../assets/usr/componentes/",
    imagenesFolder: "/root/jaguar/jaguAR/src/assets/usr/imagenes/",
    imagenesExternoFolder: "../../assets/usr/imagenes/",
    videosFolder: "/root/jaguar/jaguAR/src/assets/usr/videos/",
    videosExternoFolder: "../../assets/usr/videos/",
    modelosFolder: "/root/jaguar/jaguAR/src/assets/usr/modelos/",
    modelosExternoFolder: "../../assets/usr/modelos/",
    marcadoresFolder: "/root/jaguar/jaguAR/src/assets/usr/marcadores/",
    marcadoresExternosFolder: "../../assets/usr/marcadores/"
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

/***/ "GErA":
/*!*******************************************!*\
  !*** ./src/app/service/modelo.service.ts ***!
  \*******************************************/
/*! exports provided: ModeloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeloService", function() { return ModeloService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class ModeloService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.modeloURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi;
    }
    getAllByRecinto(id) {
        return this.httpClient.get(`${this.modeloURL}/modelos/${id}`);
    }
    save(modelo) {
        return this.httpClient.post(`${this.modeloURL}/modelo`, modelo);
    }
    update(id, modelo) {
        return this.httpClient.put(`${this.modeloURL}/modelo/${id}`, modelo);
    }
    delete(id, idMuseo) {
        return this.httpClient.delete(`${this.modeloURL}/modelo/${id}?id=${idMuseo}`);
    }
}
ModeloService.ɵfac = function ModeloService_Factory(t) { return new (t || ModeloService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ModeloService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModeloService, factory: ModeloService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModeloService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "H/Kn":
/*!******************************************!*\
  !*** ./src/app/service/visor.service.ts ***!
  \******************************************/
/*! exports provided: VisorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisorService", function() { return VisorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class VisorService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.visorURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi}/visor/grupo`;
    }
    getGruposByRecinto(id) {
        return this.httpClient.get(`${this.visorURL}/${id}`);
    }
    getComponentesByGrupo(id) {
        return this.httpClient.get(`${this.visorURL}/${id}/componentes`);
    }
}
VisorService.ɵfac = function VisorService_Factory(t) { return new (t || VisorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
VisorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VisorService, factory: VisorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ICfN":
/*!**********************************************!*\
  !*** ./src/app/models/multimedia-request.ts ***!
  \**********************************************/
/*! exports provided: MultimediaRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaRequest", function() { return MultimediaRequest; });
class MultimediaRequest {
    constructor(nombre, urlUbicacion, tipo, idMuseo) {
        this.nombre = nombre;
        this.urlUbicacion = urlUbicacion;
        this.tipo = tipo;
        this.idMuseo = idMuseo;
    }
    get Nombre() {
        return this.nombre;
    }
    get UrlUbicacion() {
        return this.urlUbicacion;
    }
    get Tipo() {
        return this.tipo;
    }
    get IdMuseo() {
        return this.idMuseo;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set UrlUbicacion(value) {
        this.UrlUbicacion = value;
    }
    set Tipo(value) {
        this.tipo = value;
    }
    set IdMuseo(value) {
        this.idMuseo = value;
    }
}


/***/ }),

/***/ "Itwj":
/*!*******************************************************************!*\
  !*** ./src/app/admin/entities/marcadores/marcadores.component.ts ***!
  \*******************************************************************/
/*! exports provided: MarcadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcadoresComponent", function() { return MarcadoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_models_marcador_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/marcador-admin */ "+i+F");
/* harmony import */ var src_app_models_marcador_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/marcador-request */ "3qEQ");
/* harmony import */ var src_app_models_marcador_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/marcador-update */ "XzGD");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var src_app_service_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/token.service */ "/QNy");
/* harmony import */ var src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/cuenta.service */ "rPZ9");
/* harmony import */ var src_app_service_file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/file.service */ "shLW");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_service_marcador_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/marcador.service */ "nPBU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
















function MarcadoresComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MarcadoresComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_tr_18_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return ctx_r10.editModal(_r7, item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_tr_18_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx_r12.deleteModal(_r3, item_r9.IdTarget); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.Nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.UrlTarget);
} }
function MarcadoresComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No se encontraron registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MarcadoresComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_ng_template_21_Template_button_click_4_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00BFEst\u00E1 seguro de que desea eliminar este marcador?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_ng_template_21_Template_button_click_12_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_ng_template_21_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Eliminar marcador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MarcadoresComponent_ng_template_23_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MarcadoresComponent_ng_template_23_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MarcadoresComponent_ng_template_23_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarcadoresComponent_ng_template_23_div_15_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.errors == null ? null : _r21.errors.required);
} }
function MarcadoresComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MarcadoresComponent_ng_template_23_div_0_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nuevo marcador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_ng_template_23_Template_button_click_5_listener() { const modal_r18 = ctx.$implicit; return modal_r18.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MarcadoresComponent_ng_template_23_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.onRegister(_r20.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre del marcador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MarcadoresComponent_ng_template_23_div_15_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MarcadoresComponent_ng_template_23_Template_input_change_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_ng_template_23_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r23.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_ng_template_23_Template_button_click_27_listener() { const modal_r18 = ctx.$implicit; return modal_r18.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Crear marcador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.touched && _r21.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.fileName || "Ning\u00FAn archivo seleccionado.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r20.valid || !ctx_r6.fileMarcador);
} }
function MarcadoresComponent_ng_template_25_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MarcadoresComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MarcadoresComponent_ng_template_25_div_0_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nuevo marcador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_ng_template_25_Template_button_click_5_listener() { const modal_r31 = ctx.$implicit; return modal_r31.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MarcadoresComponent_ng_template_25_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre del marcador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_ng_template_25_Template_button_click_16_listener() { const modal_r31 = ctx.$implicit; return modal_r31.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Guardar marcador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r8.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r8.isValid());
} }
class MarcadoresComponent {
    constructor(modalService, tokenService, cuentaService, fileService, toastService, marcadorService) {
        this.modalService = modalService;
        this.tokenService = tokenService;
        this.cuentaService = cuentaService;
        this.fileService = fileService;
        this.toastService = toastService;
        this.marcadorService = marcadorService;
        this.fileName = '';
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            idMarcador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            urlImagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.marcadores = [];
        this.deleteMarcador = 0;
        this.errMsj = '';
        this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        this.lengthOfCode = 5;
        this.isLoading = false;
    }
    ngOnInit() {
        this.loadMuseo();
    }
    loadMuseo() {
        if (!this.tokenService.getIdMuseo() && this.tokenService.getToken()) {
            this.cuentaService.getMuseo(this.tokenService.getUserName())
                .subscribe((museo) => {
                this.tokenService.setIdMuseo(+museo.idMuseo);
                this.loadTargets(+this.tokenService.getIdMuseo());
            }, (error) => {
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
                setTimeout(() => {
                    window.location.href = '/admin';
                }, 2000);
            });
        }
        else if (!this.tokenService.getToken()) {
            window.location.href = '/admin';
        }
        else if (this.tokenService.getIdMuseo()) {
            this.loadTargets(+(this.tokenService.getIdMuseo()));
        }
    }
    loadTargets(idMuseo) {
        this.marcadorService.getAllByRecinto(idMuseo)
            .subscribe((marc) => {
            this.marcadores = [];
            marc.forEach(element => {
                var t = new src_app_models_marcador_admin__WEBPACK_IMPORTED_MODULE_2__["MarcadorAdmin"](element.nombre, element.urlTarget);
                t.IdTarget = element.idTarget;
                this.marcadores.push(t);
            });
        }, (error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
        });
    }
    openModal(content) {
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    editModal(content, marcador) {
        var _a, _b, _c;
        (_a = this.editForm.get('nombre')) === null || _a === void 0 ? void 0 : _a.setValue(marcador.Nombre);
        (_b = this.editForm.get('idMarcador')) === null || _b === void 0 ? void 0 : _b.setValue(marcador.IdTarget);
        (_c = this.editForm.get('urlImagen')) === null || _c === void 0 ? void 0 : _c.setValue(marcador.UrlTarget);
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    deleteModal(content, idMarcador) {
        this.deleteMarcador = idMarcador;
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    onRegister(value) {
        let nombre = value.nombre;
        this.isLoading = true;
        if (this.fileMarcador) {
            let string = this.makeRandom(this.lengthOfCode, this.possible);
            let nameFile = this.tokenService.getIdMuseo() + "_" + string + "_" + this.fileName;
            let finalName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].marcadoresExternosFolder + nameFile;
            let multiName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].marcadoresFolder + nameFile;
            this.fileService.upload(this.fileMarcador, multiName)
                .subscribe((response) => {
                var mod = new src_app_models_marcador_request__WEBPACK_IMPORTED_MODULE_3__["MarcadorRequest"](nombre, finalName, +this.tokenService.getIdMuseo());
                this.marcadorService.save(mod)
                    .subscribe((multimedia) => {
                    this.isLoading = false;
                    this.toastService.success("El marcador se ha almacenado con éxito", 'OK', {
                        timeOut: 3000, positionClass: 'toast-top-center'
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }, (error) => {
                    this.isLoading = false;
                    this.errMsj = error.error.message;
                    console.log(this.errMsj);
                    this.toastService.error("Ocurrió un error al registrar el marcador", 'Fail', {
                        timeOut: 3000, positionClass: 'toast-top-center',
                    });
                });
            }, (error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error("Ocurrió un error al registrar el archivo", 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
            });
        }
        else {
            this.toastService.error("No se ha seleccionado un archivo para subir", 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        }
    }
    onFileSelected(event) {
        let archivo = event.target.files[0];
        if (archivo) {
            this.fileMarcador = archivo;
            this.fileName = archivo.name;
        }
    }
    onEdit() {
        this.isLoading = true;
        let nombre = this.nombre.value;
        let urlTarget = this.urlImagen.value;
        let idMarcador = this.idMarcador.value;
        var mod = new src_app_models_marcador_update__WEBPACK_IMPORTED_MODULE_4__["MarcadorUpdate"](nombre, urlTarget);
        this.isLoading = true;
        this.marcadorService.update(idMarcador, mod)
            .subscribe((modelo) => {
            this.isLoading = false;
            this.toastService.success("El marcador se ha actualizado con éxito", 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center'
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }, (error) => {
            this.isLoading = false;
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error("Ocurrió un error al actualizar el marcador", 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    onDelete() {
        if (this.deleteMarcador != 0) {
            this.isLoading = true;
            this.marcadorService.delete(this.deleteMarcador, +this.tokenService.getIdMuseo())
                .subscribe((response) => {
                this.isLoading = false;
                this.toastService.success(response.message, 'OK', {
                    timeOut: 3000, positionClass: 'toast-top-center'
                });
                this.deleteMarcador = 0;
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }, (error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.deleteMarcador = 0;
                this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
            });
        }
    }
    isValid() {
        return this.editForm.valid;
    }
    makeRandom(lengthOfCode, possible) {
        let text = "";
        for (let i = 0; i < lengthOfCode; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    get nombre() {
        return this.editForm.get('nombre');
    }
    get idMarcador() {
        return this.editForm.get('idMarcador');
    }
    get urlImagen() {
        return this.editForm.get('urlImagen');
    }
}
MarcadoresComponent.ɵfac = function MarcadoresComponent_Factory(t) { return new (t || MarcadoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_8__["CuentaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_file_service__WEBPACK_IMPORTED_MODULE_9__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_marcador_service__WEBPACK_IMPORTED_MODULE_11__["MarcadorService"])); };
MarcadoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarcadoresComponent, selectors: [["app-marcadores"]], decls: 27, vars: 3, consts: [["class", "loading", 4, "ngIf"], [1, "container-fluid", "px-5", "py-3"], [1, "row", "mb-4"], [1, "col", "text-white"], [1, "btn", "btn-forest", "col-3", 3, "click"], [1, "table-container"], [1, "table", "table-light", "table-hover", "text-center"], [1, "thead-aqua"], [4, "ngFor", "ngForOf"], ["colspan", "12", 4, "ngIf"], ["confirmDelete", ""], ["newEntityModal", ""], ["EditEntityModal", ""], [1, "loading"], ["src", "../../../../assets/gif/loading_splash.gif"], ["data-toggle", "tooltip", "title", "Editar", 1, "icon", "mdi", "mdi-pencil", "text-yellow", 3, "click"], ["data-toggle", "tooltip", "title", "Eliminar", 1, "icon", "mdi", "mdi-trash-can", "text-red", 3, "click"], ["colspan", "12"], [1, "modal-header", "pb-2"], [1, "col-2"], [1, "modal-title", "text-center", "col"], ["type", "button", "aria-label", "Close", 1, "close", "col-2", "my-auto", 3, "click"], ["aria-hidden", "true", 1, "mdi", "mdi-close-thick"], [1, "modal-body", "p-3"], [1, "modal-footer"], [1, "row", "col-12"], [1, "col-6"], ["type", "button", 1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "btn", "btn-yellow", "w-100", 3, "click"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "w-100", "mb-2"], ["for", "target_name", 1, ""], ["ngModel", "", "name", "nombre", "id", "target_name", "type", "text", "placeholder", "Ingrese el nombre del marcador", "required", "", 1, "form-control"], ["nombre", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "w-100", "mb-4"], ["type", "file", "required", "", "accept", ".patt", 1, "file-input", 3, "change"], ["fileUpload", ""], [1, "file-upload"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "upload-btn", 3, "click"], [1, "btn", "btn-yellow", "w-100", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"], ["form", "", 3, "formGroup", "ngSubmit"], ["id", "target_name", "type", "text", "placeholder", "Ingrese el nombre del marcador", "required", "", 1, "form-control"]], template: function MarcadoresComponent_Template(rf, ctx) { if (rf & 1) {
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MarcadoresComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Marcadores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.openModal(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nuevo marcador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Archivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MarcadoresComponent_tr_18_Template, 8, 2, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MarcadoresComponent_td_20_Template, 2, 0, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MarcadoresComponent_ng_template_21_Template, 17, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MarcadoresComponent_ng_template_23_Template, 32, 4, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MarcadoresComponent_ng_template_25_Template, 21, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.marcadores);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.marcadores.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: [".file-input[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.loading[_ngcontent-%COMP%]{height: calc(100% + var(--header_height) + var(--footer_height));}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmNhZG9yZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQSxTQUFTLGdFQUFnRSxDQUFDIiwiZmlsZSI6Im1hcmNhZG9yZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxvYWRpbmd7aGVpZ2h0OiBjYWxjKDEwMCUgKyB2YXIoLS1oZWFkZXJfaGVpZ2h0KSArIHZhcigtLWZvb3Rlcl9oZWlnaHQpKTt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarcadoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-marcadores',
                templateUrl: './marcadores.component.html',
                styleUrls: ['./marcadores.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: src_app_service_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"] }, { type: src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_8__["CuentaService"] }, { type: src_app_service_file_service__WEBPACK_IMPORTED_MODULE_9__["FileService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: src_app_service_marcador_service__WEBPACK_IMPORTED_MODULE_11__["MarcadorService"] }]; }, null); })();


/***/ }),

/***/ "Jah+":
/*!********************************************!*\
  !*** ./src/app/models/componente-admin.ts ***!
  \********************************************/
/*! exports provided: ComponenteAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponenteAdmin", function() { return ComponenteAdmin; });
class ComponenteAdmin {
    constructor(nombre, urlImagen, descripcion, componentType, hasTarget, hasDescripcion) {
        this.nombre = nombre;
        this.urlImagen = urlImagen;
        this.descripcion = descripcion;
        this.componentType = componentType;
        this.hasTarget = hasTarget;
        this.hasDescripcion = hasDescripcion;
    }
    get Nombre() {
        return this.nombre;
    }
    get UrlImagen() {
        return this.urlImagen;
    }
    get Descripcion() {
        return this.descripcion;
    }
    get HasTarget() {
        return this.hasTarget;
    }
    get ComponentType() {
        return this.componentType;
    }
    get HasDescripcion() {
        return this.hasDescripcion;
    }
    get IdComponente() {
        return this.idComponente;
    }
    get Modelo() {
        return this.modelo;
    }
    get Multimedia() {
        return this.multimedia;
    }
    get Target() {
        return this.target;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set UrlImagen(value) {
        this.urlImagen = value;
    }
    set Descripcion(value) {
        this.descripcion = value;
    }
    set HasTarget(value) {
        this.hasTarget = value;
    }
    set ComponentType(value) {
        this.componentType = value;
    }
    set HasDescripcion(value) {
        this.hasDescripcion = value;
    }
    set IdComponente(value) {
        this.idComponente = value;
    }
    set Modelo(value) {
        this.modelo = value;
    }
    set Multimedia(value) {
        this.multimedia = value;
    }
    set Target(value) {
        this.target = value;
    }
}


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/visor"]; };
class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 39, vars: 4, consts: [[1, "jaguar-skin"], ["id", "welcome", 1, "p-5"], [1, "welcome", "col-lg-5", "col-md-5", "col-sm-12", "offset-lg-7", "offset-md-7", "offset-sm-0", "p-4", "text-center", "float-right", "my-3"], ["id", "jaguar_logo", "src", "../../assets/img/jaguAR_logo.png", 1, "mx-auto", "my-auto"], [1, "text-justify", "mt-3"], [1, "mt-4"], [3, "routerLink"], [1, "mdi", "mdi-camera", "mr-2"], [1, "my-auto"], [1, "mdi", "mdi-camera", "ml-2"], ["id", "whatIsAr", 1, "p-5"], [1, "text-center"], [1, "col-lg-8", "mx-auto", "text-justify", "mt-4"], [1, "row", "col-lg-8", "mx-auto"], [1, "col-6", "pl-0"], ["width", "100%", "height", "auto", "src", "https://i.imgur.com/gITbaez.gif?noredirect"], [1, "col-6", "pr-0"], ["width", "100%", "height", "100%", "src", "https://i.gifer.com/8yco.gif"], ["id", "areYouReady", 1, "text-center", "p-4"], [1, ""], [1, "mdi", "mdi-xl", "mdi-camera", 3, "routerLink"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A1Bienvenido!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " jaguAR es una plataforma accesible que ofrece la mejor experiencia inmersiva de realidad aumentada, utilizando modelos interactivos 3D. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Vive la experiencia AR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00BFQu\u00E9 es la realidad aumentada?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "La Realidad Aumentada, o por sus siglas en ingl\u00E9s AR (Augmented Reality), se entiende como una superposici\u00F3n de elementos visuales tecnol\u00F3gicos a trav\u00E9s de dispositivos electr\u00F3nicos, con el objetivo de provocar una inmersi\u00F3n que altera la percepci\u00F3n de la realidad del usuario, haci\u00E9ndole sentir que lo virtual forma parte de su realidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Es la vista del mundo f\u00EDsico en donde elementos gr\u00E1ficos, creados por computadora, mejoran e interponen el entorno real. Estas entradas pueden ir desde sonido, videos, gr\u00E1ficos, plantillas GPS entre otros elementos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00BFEst\u00E1s listo?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Comienza a vivir la experiencia de la Realidad Aumentada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Haz click en la c\u00E1mara para comenzar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".jaguar-skin[_ngcontent-%COMP%]{\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-image: url('jaguar_skin.svg');\r\n    background-attachment: fixed;\r\n}\r\n#welcome[_ngcontent-%COMP%]{\r\n    background-image: url('mountain.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 100vw 100vh;\r\n    background-position-x: right;\r\n    min-height: 100vh;\r\n}\r\n.welcome[_ngcontent-%COMP%]{min-height: calc(100vh - 3rem);}\r\n#whatIsAr[_ngcontent-%COMP%]{\r\n    background-color: var(--darkChocolate);\r\n}\r\n#areYouReady[_ngcontent-%COMP%]{\r\n    background-color: var(--syrup);\r\n}\r\n#jaguar_logo[_ngcontent-%COMP%]{width: 100%; height:auto; padding-top: 3rem!important}\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover{\r\n    background: var(--gradientSunset);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\na[_ngcontent-%COMP%]:hover{font-weight: bold;}\r\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color: white}\r\n.float-right[_ngcontent-%COMP%]{float: right;}\r\n@media (max-width: 1200px) {\r\n}\r\n@media (max-width: 992px) {}\r\n@media (max-width: 767px){ \r\n    #welcome[_ngcontent-%COMP%]{background-image: none; background-color: var(--syrup); min-height: 50vh;}\r\n    .welcome[_ngcontent-%COMP%]{background-color: var(--darkChocolate);min-height: unset}\r\n    #jaguar_logo[_ngcontent-%COMP%]{width: 100%; height:auto; padding-top: 0!important}\r\n    .mdi[_ngcontent-%COMP%]{font-size: inherit}\r\n\r\n}\r\n@media (max-width: 576px) {\r\n    h1[_ngcontent-%COMP%]{font-size: 1.5rem}\r\n    p[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{font-size: .8rem}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsd0NBQXlEO0lBQ3pELDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kscUNBQThEO0lBQzlELDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQjtBQUNBLFNBQVMsOEJBQThCLENBQUM7QUFDeEM7SUFDSSxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBLGFBQWEsV0FBVyxFQUFFLFdBQVcsRUFBRSwyQkFBMkI7QUFDbEU7SUFDSSxpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLG9DQUFvQztBQUN4QztBQUNBLFFBQVEsaUJBQWlCLENBQUM7QUFDMUIsS0FBSyxZQUFZO0FBQ2pCLGFBQWEsWUFBWSxDQUFDO0FBQzFCLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQSwyQkFBMkIsMEJBQTBCLENBQUM7QUFDdEQsMkJBQTJCLHdCQUF3QjtJQUMvQyxTQUFTLHNCQUFzQixFQUFFLDhCQUE4QixFQUFFLGdCQUFnQixDQUFDO0lBQ2xGLFNBQVMsc0NBQXNDLENBQUMsaUJBQWlCO0lBQ2pFLGFBQWEsV0FBVyxFQUFFLFdBQVcsRUFBRSx3QkFBd0I7SUFDL0QsS0FBSyxrQkFBa0I7O0FBRTNCO0FBQ0EsMkJBQTJCLHdCQUF3QjtJQUMvQyxHQUFHLGlCQUFpQjtJQUNwQixJQUFJLGdCQUFnQjtBQUN4QiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuamFndWFyLXNraW57XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9qYWd1YXJfc2tpbi5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuI3dlbGNvbWV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvbGFuZGluZy9tb3VudGFpbi5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi53ZWxjb21le21pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzcmVtKTt9XHJcbiN3aGF0SXNBcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDaG9jb2xhdGUpO1xyXG59XHJcbiNhcmVZb3VSZWFkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN5cnVwKTtcclxufVxyXG4jamFndWFyX2xvZ297d2lkdGg6IDEwMCU7IGhlaWdodDphdXRvOyBwYWRkaW5nLXRvcDogM3JlbSFpbXBvcnRhbnR9XHJcbmEsIGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudFN1bnNldCk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5hOmhvdmVye2ZvbnQtd2VpZ2h0OiBib2xkO31cclxuaDEscHtjb2xvcjogd2hpdGV9XHJcbi5mbG9hdC1yaWdodHtmbG9hdDogcmlnaHQ7fVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7Lypib290c3RyYXAgeGwgLSBiaWcgcGMqL1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkgey8qYm9vdHN0cmFwIGxnIC0gc21hbGwgcGMqL31cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXsgLypib290c3RyYXAgbWQgLSB0YWJsZXQqL1xyXG4gICAgI3dlbGNvbWV7YmFja2dyb3VuZC1pbWFnZTogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3lydXApOyBtaW4taGVpZ2h0OiA1MHZoO31cclxuICAgIC53ZWxjb21le2JhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDaG9jb2xhdGUpO21pbi1oZWlnaHQ6IHVuc2V0fVxyXG4gICAgI2phZ3Vhcl9sb2dve3dpZHRoOiAxMDAlOyBoZWlnaHQ6YXV0bzsgcGFkZGluZy10b3A6IDAhaW1wb3J0YW50fVxyXG4gICAgLm1kaXtmb250LXNpemU6IGluaGVyaXR9XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkgey8qYm9vdHN0cmFwIHNtIC0gbW9iaWxlKi9cclxuICAgIGgxe2ZvbnQtc2l6ZTogMS41cmVtfVxyXG4gICAgcCxhe2ZvbnQtc2l6ZTogLjhyZW19XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KOD3":
/*!********************************************!*\
  !*** ./src/app/service/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class ProfileService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.authURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi}/account`;
    }
    update(alias, profile) {
        return this.httpClient.put(`${this.authURL}/profile?alias=${alias}`, profile);
    }
    getAccountInfo(alias) {
        return this.httpClient.get(`${this.authURL}/profile?alias=${alias}`);
    }
    restorePassword(body) {
        return this.httpClient.post(`${this.authURL}/restore`, body);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "LAN1":
/*!***********************************************!*\
  !*** ./src/app/service/multimedia.service.ts ***!
  \***********************************************/
/*! exports provided: MultimediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaService", function() { return MultimediaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class MultimediaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.multimediaURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi;
    }
    getAllByRecinto(id) {
        return this.httpClient.get(`${this.multimediaURL}/multimedias/${id}`);
    }
    save(multimedia) {
        return this.httpClient.post(`${this.multimediaURL}/multimedia`, multimedia);
    }
    update(id, multimedia) {
        return this.httpClient.put(`${this.multimediaURL}/multimedia/${id}`, multimedia);
    }
    delete(id, idMuseo) {
        return this.httpClient.delete(`${this.multimediaURL}/multimedia/${id}?id=${idMuseo}`);
    }
}
MultimediaService.ɵfac = function MultimediaService_Factory(t) { return new (t || MultimediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MultimediaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MultimediaService, factory: MultimediaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultimediaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "LRDa":
/*!******************************************!*\
  !*** ./src/app/service/grupo.service.ts ***!
  \******************************************/
/*! exports provided: GrupoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoService", function() { return GrupoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class GrupoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.grupoURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi;
    }
    getAllByRecinto(id) {
        return this.httpClient.get(`${this.grupoURL}/grupos/${id}`);
    }
    save(grupo) {
        return this.httpClient.post(`${this.grupoURL}/grupo`, grupo);
    }
    update(id, grupo) {
        return this.httpClient.put(`${this.grupoURL}/grupo/${id}`, grupo);
    }
    delete(id) {
        return this.httpClient.delete(`${this.grupoURL}/grupo/${id}`);
    }
}
GrupoService.ɵfac = function GrupoService_Factory(t) { return new (t || GrupoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GrupoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GrupoService, factory: GrupoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrupoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "M8e2":
/*!**********************************************************!*\
  !*** ./src/app/interceptors/prod-interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: ProdInterceptorService, interceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdInterceptorService", function() { return ProdInterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interceptorProvider", function() { return interceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_jwt_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/jwt-dto */ "mj9F");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/token.service */ "/QNy");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/auth.service */ "6uu6");








const AUTHORIZATION = 'Authorization';
class ProdInterceptorService {
    constructor(tokenService, authService) {
        this.tokenService = tokenService;
        this.authService = authService;
    }
    intercept(req, next) {
        if (!this.tokenService.isLogged()) {
            return next.handle(req);
        }
        let intReq = req;
        const token = this.tokenService.getToken();
        intReq = this.addToken(req, token);
        return next.handle(intReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            if (err.status === 401) {
                const dto = new _models_jwt_dto__WEBPACK_IMPORTED_MODULE_3__["JwtDTO"](this.tokenService.getToken());
                return this.authService.refresh(dto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((data) => {
                    console.log('refreshing....');
                    this.tokenService.setToken(data.token);
                    intReq = this.addToken(req, data.token);
                    return next.handle(intReq);
                }));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }
        }));
    }
    addToken(req, token) {
        return req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    }
}
ProdInterceptorService.ɵfac = function ProdInterceptorService_Factory(t) { return new (t || ProdInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
ProdInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdInterceptorService, factory: ProdInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }, { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();
const interceptorProvider = [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: ProdInterceptorService, multi: true }];


/***/ }),

/***/ "Qgpa":
/*!**************************************!*\
  !*** ./src/app/admin/dto/element.ts ***!
  \**************************************/
/*! exports provided: Elemento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elemento", function() { return Elemento; });
class Elemento {
    constructor(value, name) {
        this.value = value;
        this.name = name;
    }
    get Value() {
        return this.value;
    }
    set Value(value) {
        this.value = value;
    }
    get Name() {
        return this.name;
    }
    set Name(value) {
        this.name = value;
    }
}


/***/ }),

/***/ "R3r6":
/*!*********************************!*\
  !*** ./src/app/models/grupo.ts ***!
  \*********************************/
/*! exports provided: GrupoModelo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoModelo", function() { return GrupoModelo; });
class GrupoModelo {
    constructor(nombre, descripcion, urlImagen, createdDate, updatedDate) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
    get Nombre() {
        return this.nombre;
    }
    get Descripcion() {
        return this.descripcion;
    }
    get UrlImagen() {
        return this.urlImagen;
    }
    get CreatedDate() {
        return this.createdDate;
    }
    get UpdatedDate() {
        return this.updatedDate;
    }
    get IdGrupo() {
        return this.idGrupo;
    }
    get MuseoId() {
        return this.idMuseo;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set Descripcion(value) {
        this.descripcion = value;
    }
    set UrlImagen(value) {
        this.urlImagen = value;
    }
    set CreatedDate(value) {
        this.createdDate = value;
    }
    set UpdatedDate(value) {
        this.updatedDate = value;
    }
    set IdGrupo(value) {
        this.idGrupo = value;
    }
    set MuseoId(value) {
        this.idMuseo = value;
    }
}


/***/ }),

/***/ "RVQx":
/*!**********************************************!*\
  !*** ./src/app/visor/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");



function MenuComponent_ng_template_3_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Opciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_ng_template_3_ng_template_15_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); modal_r2.dismiss("Cross click"); return ctx_r6.loadHomePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Regresar a Inicio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_ng_template_3_ng_template_15_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); modal_r2.dismiss("Cross click"); return ctx_r9.refreshPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Recargar visor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_ng_template_3_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Controles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Men\u00FA de grupos y componentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Debes seleccionar primero un grupo para poder despu\u00E9s seleccionar un componente.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "El \u00EDcono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " en los componentes indica que \u00E9ste tiene un marcador asociado. Al hacerle clic, hay que escanearlo con la c\u00E1mara para poder activarlo. Si el componente no tiene el \u00EDcono, con solo hacerle clic se desplegar\u00E1 el componente.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Una vez cargado el componente, aparecer\u00E1 el \u00EDcono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00C9ste puede contener informaci\u00F3n adicional sobre el contenido que se despliega. Si es un modelo, tambi\u00E9n muestra una imagen del marcador asociado. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Acciones disponibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "(\u00DAnicamente para dispositivos m\u00F3viles)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cambiar el tama\u00F1o del objeto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Mover el objeto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Rotar el objeto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MEN\u00DA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_ng_template_3_Template_button_click_5_listener() { const modal_r2 = ctx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Opciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MenuComponent_ng_template_3_ng_template_15_Template, 10, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Gu\u00EDa Visor RA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MenuComponent_ng_template_3_ng_template_19_Template, 40, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r3);
} }
class MenuComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openMenuModal(content) {
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    refreshPage() {
        window.location.reload();
    }
    loadHomePage() {
        window.location.replace('/inicio');
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-visor-menu"]], decls: 5, vars: 0, consts: [[1, "buttons", "navbar", "p-3"], [1, "btn", "circle", "btn-info", "text-white", "float-left", "mr-3", 3, "click"], [1, "mdi", "mdi-menu"], ["content", ""], [1, "modal-rainbow"], [1, "modal-header", "pb-2"], [1, "col-2"], [1, "modal-title", "text-center", "col"], ["type", "button", "aria-label", "Close", 1, "close", "col-2", "my-auto", 3, "click"], ["aria-hidden", "true", 1, "mdi", "mdi-close-thick"], [1, "modal-body", "p-0"], [3, "ngbNavOutlet"], [1, "modal-footer"], ["ngbNav", "", 1, "nav-pills", "col-12"], ["nav", "ngbNav"], ["ngbNavItem", "", 1, "col-6", "text-center"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "text-center", "bb-rainbow", "backg-charcoal"], [1, "p-3", "modal-content-container"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "text-center"], [1, "nav-link", "cursor-pointer", 3, "click"], [1, "row", "py-1"], [1, "col-3", "text-center"], [1, "btn", "circle", "btn-danger"], [1, "mdi", "mdi-cube-outline"], [1, "col", "my-auto"], [1, "row", "py-1", "mx-3", "text-justify"], [1, "mdi", "mdi-qrcode"], [1, "mdi", "mdi-information", "me-2"], [1, "row", "mx-3", "my-1"], [1, "font-xs"], [1, "mdi", "mdi-resize", "me-2"], [1, "mdi", "mdi-cursor-move", "me-2"], [1, "mdi", "mdi-rotate-3d", "me-2"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.openMenuModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuComponent_ng_template_3_Template, 20, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavContent"]], styles: ["/*Botones de navegaci\u00F3n del visor*/\r\nbody{\r\n    background-image: url('jaguar_skin_violet.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\n.nav-pills .nav-link.active, .nav-pills .show>.nav-link{background-color: #000 !important; text-decoration: underline}\r\n.nav-link,.nav-link:focus, .nav-link:hover{color: #fff}\r\n.nav-link:hover{font-weight: bold;}\r\n#visor-navigation{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.buttons {\r\n    width: 100%;\r\n    height: 5em;\r\n    z-index: 10;\r\n}\r\n/*------*/\r\n.clickable{\r\n    cursor: pointer;\r\n}\r\n/*OVERRIDE MODAL*/\r\n.modal-content .modal-rainbow{\r\n    border: 5px solid transparent!important;\r\n    border-image-source: var(--gradientRainbow)!important;\r\n    border-image-slice: 1!important;\r\n    border-radius: 0!important;\r\n    background-color: var(--darks);\r\n    color: #fff;\r\n\r\n    /*background:\r\n            linear-gradient(var(--charcoal),var(--charcoal)) padding-box, /*this is your grey background/\r\n            var(--gradientRainbow) border-box;\r\n    color: #fff;\r\n    padding:10px;\r\n    border: 5px solid transparent;\r\n    border-radius:15px;\r\n    display:inline-block;\r\n    margin: 75px 0;*/\r\n}\r\n.modal-rainbow .modal-header{border-bottom: unset; background-color: var(--charcoal);}\r\n.modal-rainbow .modal-body{background-color: transparent}\r\n.modal-rainbow .modal-footer{\r\n    border-top: unset;background-color: var(--charcoal);\r\n    border-top: 5px solid transparent;\r\n    border-image-source: var(--gradientRainbow);\r\n    border-image-slice: 1;\r\n}\r\n/*MODAL-SECCION DE GRUPOS Y COMPONENTES*/\r\n.selector-img{\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n    width: var(--visor-img-w);\r\n    height: var(--visor-img-h);\r\n}\r\n.selector-img img{object-fit: cover;width: var(--visor-img-w);height: var(--visor-img-h);}\r\n.selector-info, .selector-background{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n.selector-background{\r\n    width: var(--visor-img-w);\r\n    height: var(--visor-img-h);\r\n    background-color: var(--darks);\r\n}\r\n.selector-info{}\r\n.selector-info p{\r\n    padding: .5rem; margin: 0; word-break: unset; overflow:hidden;\r\n    text-overflow: ellipsis; max-width: var(--visor-img-w); max-height: var(--visor-img-h);\r\n}\r\n.selected .selector-background, .selected img{border: 3px solid #fff}\r\n/*CONTENEDOR DEL A-SCENE*/\r\n.component-display{\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n/*FOOTER - informacion adicional de componentes*/\r\n#visor-footer .row{--bs-gutter-x: 0!important;}\r\n#visor-footer{\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    max-height: 12rem;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    z-index: 20\r\n}\r\n.visor-footer-info{background-color: var(--darks);color: #fff;}\r\n#visor-footer .card{border: unset!important;}\r\n#visor-footer .card-body{\r\n    background-color: var(--darks);\r\n    border-radius: 0;\r\n    color: #fff;\r\n}\r\n.marker-img{\r\n    width: 15vw;\r\n    height: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc29yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDO0lBQ0ksK0NBQWdFO0lBQ2hFLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDO0FBQ0Esd0RBQXdELGlDQUFpQyxFQUFFLDBCQUEwQjtBQUNySCwyQ0FBMkMsV0FBVztBQUN0RCxnQkFBZ0IsaUJBQWlCLENBQUM7QUFDbEM7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87QUFDWDtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7SUFDSSxlQUFlO0FBQ25CO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksdUNBQXVDO0lBQ3ZDLHFEQUFxRDtJQUNyRCwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixXQUFXOztJQUVYOzs7Ozs7OztvQkFRZ0I7QUFDcEI7QUFDQSw2QkFBNkIsb0JBQW9CLEVBQUUsaUNBQWlDLENBQUM7QUFDckYsMkJBQTJCLDZCQUE2QjtBQUN4RDtJQUNJLGlCQUFpQixDQUFDLGlDQUFpQztJQUNuRCxpQ0FBaUM7SUFDakMsMkNBQTJDO0lBQzNDLHFCQUFxQjtBQUN6QjtBQUVBLHdDQUF3QztBQUN4QztJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7QUFDQSxrQkFBa0IsaUJBQWlCLENBQUMseUJBQXlCLENBQUMsMEJBQTBCLENBQUM7QUFDekY7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsOEJBQThCO0FBQ2xDO0FBQ0EsZUFBZTtBQUNmO0lBQ0ksY0FBYyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxlQUFlO0lBQzdELHVCQUF1QixFQUFFLDZCQUE2QixFQUFFLDhCQUE4QjtBQUMxRjtBQUNBLDhDQUE4QyxzQkFBc0I7QUFFcEUseUJBQXlCO0FBQ3pCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFFQSxnREFBZ0Q7QUFDaEQsbUJBQW1CLDBCQUEwQixDQUFDO0FBQzlDO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQSxtQkFBbUIsOEJBQThCLENBQUMsV0FBVyxDQUFDO0FBQzlELG9CQUFvQix1QkFBdUIsQ0FBQztBQUM1QztJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJ2aXNvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypCb3RvbmVzIGRlIG5hdmVnYWNpw7NuIGRlbCB2aXNvciovXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2phZ3Vhcl9za2luX3Zpb2xldC5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lfVxyXG4ubmF2LWxpbmssLm5hdi1saW5rOmZvY3VzLCAubmF2LWxpbms6aG92ZXJ7Y29sb3I6ICNmZmZ9XHJcbi5uYXYtbGluazpob3Zlcntmb250LXdlaWdodDogYm9sZDt9XHJcbiN2aXNvci1uYXZpZ2F0aW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4uYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuLyotLS0tLS0qL1xyXG4uY2xpY2thYmxle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKk9WRVJSSURFIE1PREFMKi9cclxuLm1vZGFsLWNvbnRlbnQgLm1vZGFsLXJhaW5ib3d7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItaW1hZ2Utc291cmNlOiB2YXIoLS1ncmFkaWVudFJhaW5ib3cpIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtzKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIC8qYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHZhcigtLWNoYXJjb2FsKSx2YXIoLS1jaGFyY29hbCkpIHBhZGRpbmctYm94LCAvKnRoaXMgaXMgeW91ciBncmV5IGJhY2tncm91bmQvXHJcbiAgICAgICAgICAgIHZhcigtLWdyYWRpZW50UmFpbmJvdykgYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNzVweCAwOyovXHJcbn1cclxuLm1vZGFsLXJhaW5ib3cgLm1vZGFsLWhlYWRlcntib3JkZXItYm90dG9tOiB1bnNldDsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO31cclxuLm1vZGFsLXJhaW5ib3cgLm1vZGFsLWJvZHl7YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnR9XHJcbi5tb2RhbC1yYWluYm93IC5tb2RhbC1mb290ZXJ7XHJcbiAgICBib3JkZXItdG9wOiB1bnNldDtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItaW1hZ2Utc291cmNlOiB2YXIoLS1ncmFkaWVudFJhaW5ib3cpO1xyXG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xyXG59XHJcblxyXG4vKk1PREFMLVNFQ0NJT04gREUgR1JVUE9TIFkgQ09NUE9ORU5URVMqL1xyXG4uc2VsZWN0b3ItaW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IHZhcigtLXZpc29yLWltZy13KTtcclxuICAgIGhlaWdodDogdmFyKC0tdmlzb3ItaW1nLWgpO1xyXG59XHJcbi5zZWxlY3Rvci1pbWcgaW1ne29iamVjdC1maXQ6IGNvdmVyO3dpZHRoOiB2YXIoLS12aXNvci1pbWctdyk7aGVpZ2h0OiB2YXIoLS12aXNvci1pbWctaCk7fVxyXG4uc2VsZWN0b3ItaW5mbywgLnNlbGVjdG9yLWJhY2tncm91bmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5zZWxlY3Rvci1iYWNrZ3JvdW5ke1xyXG4gICAgd2lkdGg6IHZhcigtLXZpc29yLWltZy13KTtcclxuICAgIGhlaWdodDogdmFyKC0tdmlzb3ItaW1nLWgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3MpO1xyXG59XHJcbi5zZWxlY3Rvci1pbmZve31cclxuLnNlbGVjdG9yLWluZm8gcHtcclxuICAgIHBhZGRpbmc6IC41cmVtOyBtYXJnaW46IDA7IHdvcmQtYnJlYWs6IHVuc2V0OyBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgbWF4LXdpZHRoOiB2YXIoLS12aXNvci1pbWctdyk7IG1heC1oZWlnaHQ6IHZhcigtLXZpc29yLWltZy1oKTtcclxufVxyXG4uc2VsZWN0ZWQgLnNlbGVjdG9yLWJhY2tncm91bmQsIC5zZWxlY3RlZCBpbWd7Ym9yZGVyOiAzcHggc29saWQgI2ZmZn1cclxuXHJcbi8qQ09OVEVORURPUiBERUwgQS1TQ0VORSovXHJcbi5jb21wb25lbnQtZGlzcGxheXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLypGT09URVIgLSBpbmZvcm1hY2lvbiBhZGljaW9uYWwgZGUgY29tcG9uZW50ZXMqL1xyXG4jdmlzb3ItZm9vdGVyIC5yb3d7LS1icy1ndXR0ZXIteDogMCFpbXBvcnRhbnQ7fVxyXG4jdmlzb3ItZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1heC1oZWlnaHQ6IDEycmVtO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMjBcclxufVxyXG4udmlzb3ItZm9vdGVyLWluZm97YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3MpO2NvbG9yOiAjZmZmO31cclxuI3Zpc29yLWZvb3RlciAuY2FyZHtib3JkZXI6IHVuc2V0IWltcG9ydGFudDt9XHJcbiN2aXNvci1mb290ZXIgLmNhcmQtYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubWFya2VyLWltZ3tcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-visor-menu',
                templateUrl: './menu.component.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styleUrls: ['../visor.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "SNHH":
/*!*********************************************************************!*\
  !*** ./src/app/admin/entities/componentes/componentes.component.ts ***!
  \*********************************************************************/
/*! exports provided: ComponentesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentesComponent", function() { return ComponentesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_models_componente_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/componente-admin */ "Jah+");
/* harmony import */ var src_app_models_componente_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/componente-request */ "eKhR");
/* harmony import */ var src_app_models_componente_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/componente-update */ "ZYVa");
/* harmony import */ var src_app_models_grupo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/grupo */ "R3r6");
/* harmony import */ var src_app_models_marcador_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/marcador-admin */ "+i+F");
/* harmony import */ var src_app_models_modelo_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/modelo-admin */ "a/hz");
/* harmony import */ var src_app_models_multimedia_admin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/multimedia-admin */ "ZOS2");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _dto_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dto/element */ "Qgpa");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var src_app_service_componente_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/service/componente.service */ "VSMV");
/* harmony import */ var src_app_service_token_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/service/token.service */ "/QNy");
/* harmony import */ var src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/service/cuenta.service */ "rPZ9");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_service_grupo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/service/grupo.service */ "LRDa");
/* harmony import */ var src_app_service_modelo_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/service/modelo.service */ "GErA");
/* harmony import */ var src_app_service_multimedia_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/service/multimedia.service */ "LAN1");
/* harmony import */ var src_app_service_marcador_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/service/marcador.service */ "nPBU");
/* harmony import */ var src_app_service_file_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/service/file.service */ "shLW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");

























function ComponentesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentesComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentesComponent_tr_26_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx_r10.editModal(_r7, item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentesComponent_tr_26_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return ctx_r12.deleteModal(_r3, item_r9.IdComponente); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.Nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.Descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.UrlImagen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r9.Target == null ? null : item_r9.Target.IdTarget) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.ComponentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r9.Modelo == null ? null : item_r9.Modelo.IdModelo) || (item_r9.Multimedia == null ? null : item_r9.Multimedia.IdMultimedia));
} }
function ComponentesComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No se encontraron registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentesComponent_ng_template_28_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentesComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComponentesComponent_ng_template_28_div_0_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentesComponent_ng_template_28_Template_button_click_5_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00BFEst\u00E1 seguro de que desea eliminar este componente?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentesComponent_ng_template_28_Template_button_click_13_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentesComponent_ng_template_28_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Eliminar componente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
} }
function ComponentesComponent_ng_template_30_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentesComponent_ng_template_30_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentesComponent_ng_template_30_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentesComponent_ng_template_30_div_15_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r22.errors == null ? null : _r22.errors.required);
} }
function ComponentesComponent_ng_template_30_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentesComponent_ng_template_30_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentesComponent_ng_template_30_div_21_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.errors == null ? null : _r24.errors.required);
} }
function ComponentesComponent_ng_template_30_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", g_r39.IdGrupo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r39.Nombre);
} }
function ComponentesComponent_ng_template_30_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r40.IdTarget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r40.Nombre);
} }
function ComponentesComponent_ng_template_30_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r41.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r41.name);
} }
function ComponentesComponent_ng_template_30_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentesComponent_ng_template_30_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentesComponent_ng_template_30_div_46_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r30.errors == null ? null : _r30.errors.required);
} }
function ComponentesComponent_ng_template_30_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sc_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sc_r43.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sc_r43.Name);
} }
function ComponentesComponent_ng_template_30_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentesComponent_ng_template_30_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentesComponent_ng_template_30_div_55_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r33.errors == null ? null : _r33.errors.required);
} }
function ComponentesComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComponentesComponent_ng_template_30_div_0_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nuevo componente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentesComponent_ng_template_30_Template_button_click_5_listener() { const modal_r19 = ctx.$implicit; return modal_r19.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ComponentesComponent_ng_template_30_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.onRegister(_r21.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre del componente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ComponentesComponent_ng_template_30_div_15_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Descripci\u00F3n del componente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ComponentesComponent_ng_template_30_div_21_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sin Grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ComponentesComponent_ng_template_30_option_29_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Marcador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sin Marcador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ComponentesComponent_ng_template_30_option_37_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tipo Archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ComponentesComponent_ng_template_30_Template_select_change_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.fillSelect(_r30.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Seleccione el tipo de archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ComponentesComponent_ng_template_30_option_45_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ComponentesComponent_ng_template_30_div_46_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "select", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Seleccione el Archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ComponentesComponent_ng_template_30_option_54_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ComponentesComponent_ng_template_30_div_55_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ComponentesComponent_ng_template_30_Template_input_change_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentesComponent_ng_template_30_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58); return _r36.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentesComponent_ng_template_30_Template_button_click_67_listener() { const modal_r19 = ctx.$implicit; return modal_r19.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Crear componente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r22.touched && _r22.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.touched && _r24.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.grupos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.targets);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.componentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r30.touched && _r30.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.elementos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r33.touched && _r33.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.fileName || "Ning\u00FAn archivo seleccionado.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r21.valid || !ctx_r6.fileGrupo);
} }
function ComponentesComponent_ng_template_32_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentesComponent_ng_template_32_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentesComponent_ng_template_32_div_12_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.nombre.errors == null ? null : ctx_r53.nombre.errors.required);
} }
function ComponentesComponent_ng_template_32_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentesComponent_ng_template_32_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentesComponent_ng_template_32_div_17_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r54.descripcion.errors == null ? null : ctx_r54.descripcion.errors.required);
} }
function ComponentesComponent_ng_template_32_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", g_r63.IdGrupo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r63.Nombre);
} }
function ComponentesComponent_ng_template_32_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r64.IdTarget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r64.Nombre);
} }
function ComponentesComponent_ng_template_32_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r65.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r65.name);
} }
function ComponentesComponent_ng_template_32_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentesComponent_ng_template_32_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentesComponent_ng_template_32_div_39_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r58.componentTipe.errors == null ? null : ctx_r58.componentTipe.errors.required);
} }
function ComponentesComponent_ng_template_32_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sc_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sc_r67.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sc_r67.Name);
} }
function ComponentesComponent_ng_template_32_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentesComponent_ng_template_32_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentesComponent_ng_template_32_div_47_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r60.archivo.errors == null ? null : ctx_r60.archivo.errors.required);
} }
function ComponentesComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Editar componente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentesComponent_ng_template_32_Template_button_click_4_listener() { const modal_r52 = ctx.$implicit; return modal_r52.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ComponentesComponent_ng_template_32_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nombre del componente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ComponentesComponent_ng_template_32_div_12_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Descripci\u00F3n del componente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ComponentesComponent_ng_template_32_div_17_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sin grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ComponentesComponent_ng_template_32_option_24_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Marcador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sin marcador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ComponentesComponent_ng_template_32_option_31_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Tipo Archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ComponentesComponent_ng_template_32_Template_select_change_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.fillSelect(ctx_r72.componentTipe); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Seleccione el tipo de archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ComponentesComponent_ng_template_32_option_38_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ComponentesComponent_ng_template_32_div_39_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Seleccione el Archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ComponentesComponent_ng_template_32_option_46_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ComponentesComponent_ng_template_32_div_47_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentesComponent_ng_template_32_Template_button_click_53_listener() { const modal_r52 = ctx.$implicit; return modal_r52.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Guardar Componente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r8.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.nombre.touched && ctx_r8.nombre.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.descripcion.touched && ctx_r8.descripcion.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.grupos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.targets);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.componentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.componentTipe.touched && ctx_r8.componentTipe.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.elementos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.archivo.touched && ctx_r8.archivo.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r8.isValid());
} }
class ComponentesComponent {
    constructor(modalService, componenteService, tokenService, cuentaService, toastService, grupoService, modeloService, multimediaService, marcadorService, fileService) {
        this.modalService = modalService;
        this.componenteService = componenteService;
        this.tokenService = tokenService;
        this.cuentaService = cuentaService;
        this.toastService = toastService;
        this.grupoService = grupoService;
        this.modeloService = modeloService;
        this.multimediaService = multimediaService;
        this.marcadorService = marcadorService;
        this.fileService = fileService;
        this.isLoading = false;
        this.componentes = [];
        this.grupos = [];
        this.modelos = [];
        this.multimedias = [];
        this.targets = [];
        this.elementos = [];
        this.componentType = [
            { value: "MODELO", name: "Modelo" },
            { value: "VIDEO", name: "Video" },
            { value: "IMAGEN", name: "Imagen" }
        ];
        this.isAdmin = false;
        this.errMsj = '';
        this.fileName = '';
        this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        this.lengthOfCode = 5;
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            grupo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            marcador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            componentTipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            archivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            idComponente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            urlImagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.deleteComponente = 0;
    }
    ngOnInit() {
        this.loadMuseo();
    }
    openModal(content) {
        this.loadGrupos(+this.tokenService.getIdMuseo());
        this.loadModelos(+this.tokenService.getIdMuseo());
        this.loadMultimedia(+this.tokenService.getIdMuseo());
        this.loadTargets(+this.tokenService.getIdMuseo());
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    editModal(content, component) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.isLoading = true;
        this.loadGrupos(+this.tokenService.getIdMuseo());
        this.loadModelos(+this.tokenService.getIdMuseo());
        this.loadMultimedia(+this.tokenService.getIdMuseo());
        this.loadTargets(+this.tokenService.getIdMuseo());
        var idGrupo = this.loadGrupoByComponent(component.IdComponente);
        (_a = this.editForm.get('nombre')) === null || _a === void 0 ? void 0 : _a.setValue(component.Nombre);
        (_b = this.editForm.get('descripcion')) === null || _b === void 0 ? void 0 : _b.setValue(component.Descripcion);
        (_c = this.editForm.get('componentTipe')) === null || _c === void 0 ? void 0 : _c.setValue(component.ComponentType);
        setTimeout(() => {
            this.fillSelect(component.ComponentType);
        }, 2000);
        if (component.ComponentType === 'MODELO') {
            if (component.Modelo != null) {
                (_d = this.editForm.get('archivo')) === null || _d === void 0 ? void 0 : _d.setValue((_e = component.Modelo.IdModelo) === null || _e === void 0 ? void 0 : _e.toString());
            }
        }
        else if (component.ComponentType === 'VIDEO' || component.ComponentType === 'IMAGEN') {
            if (component.Multimedia != null) {
                (_f = this.editForm.get('archivo')) === null || _f === void 0 ? void 0 : _f.setValue((_g = component.Multimedia.IdMultimedia) === null || _g === void 0 ? void 0 : _g.toString());
            }
        }
        if (component.Target != null) {
            (_h = this.editForm.get('marcador')) === null || _h === void 0 ? void 0 : _h.setValue(component.Target.IdTarget.toString());
        }
        (_j = this.editForm.get('idComponente')) === null || _j === void 0 ? void 0 : _j.setValue(component.IdComponente);
        (_k = this.editForm.get('urlImagen')) === null || _k === void 0 ? void 0 : _k.setValue(component.UrlImagen);
        setTimeout(() => {
            this.modalService.open(content, { backdropClass: 'color-backdrop' });
            this.isLoading = false;
        }, 2000);
    }
    deleteModal(content, idGrupo) {
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
        this.deleteComponente = idGrupo;
    }
    loadMuseo() {
        if (!this.tokenService.getIdMuseo() && this.tokenService.getToken()) {
            this.cuentaService.getMuseo(this.tokenService.getUserName())
                .subscribe((museo) => {
                this.tokenService.setIdMuseo(+museo.idMuseo);
                this.loadComponentes(+(this.tokenService.getIdMuseo()));
                this.loadGrupos(+this.tokenService.getIdMuseo());
                this.loadModelos(+this.tokenService.getIdMuseo());
                this.loadMultimedia(+this.tokenService.getIdMuseo());
                this.loadTargets(+this.tokenService.getIdMuseo());
            }, (error) => {
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
                setTimeout(() => {
                    window.location.href = '/admin';
                }, 2000);
            });
        }
        else if (!this.tokenService.getToken()) {
            window.location.href = '/admin';
        }
        else if (this.tokenService.getIdMuseo()) {
            this.loadComponentes(+(this.tokenService.getIdMuseo()));
        }
    }
    loadComponentes(id) {
        this.componenteService.getAllByRecinto(+this.tokenService.getIdMuseo())
            .subscribe((comp) => {
            this.componentes = [];
            comp.forEach(element => {
                var c = new src_app_models_componente_admin__WEBPACK_IMPORTED_MODULE_2__["ComponenteAdmin"](element.nombre, element.urlImagen, element.descripcion, element.componentType, element.hasTarget, element.hasDescripcion);
                if (element.modelo != null) {
                    c.Modelo = new src_app_models_modelo_admin__WEBPACK_IMPORTED_MODULE_7__["ModeloAdmin"](element.modelo.nombre, element.modelo.urlModelo, element.modelo.nombreAnimacion, element.modelo.hasRotation, element.modelo.hasMovement, element.modelo.hasResize, element.modelo.texturaPath);
                    c.Modelo.IdModelo = element.modelo.idModelo;
                }
                else if (element.multimedia != null) {
                    c.Multimedia = new src_app_models_multimedia_admin__WEBPACK_IMPORTED_MODULE_8__["MultimediaAdmin"](element.multimedia.nombre, element.multimedia.urlUbicacion, element.multimedia.multimediaType);
                    c.Multimedia.IdMultimedia = element.multimedia.idMultimedia;
                }
                if (element.target != null) {
                    c.Target = new src_app_models_marcador_admin__WEBPACK_IMPORTED_MODULE_6__["MarcadorAdmin"](element.target.nombre, element.target.urlTarget);
                    c.Target.IdTarget = element.target.idTarget;
                }
                c.IdComponente = element.idComponente;
                this.componentes.push(c);
            });
        }, (error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error(this.errMsj, 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    loadGrupos(idMuseo) {
        this.grupoService.getAllByRecinto(idMuseo)
            .subscribe((groupes) => {
            this.grupos = [];
            groupes.forEach(element => {
                var n = new src_app_models_grupo__WEBPACK_IMPORTED_MODULE_5__["GrupoModelo"](element.nombre, element.descripcion, element.urlImagen, element.createdDate, element.updatedDate);
                n.IdGrupo = element.idGrupo;
                this.grupos.push(n);
            });
        }, (error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
        });
    }
    loadModelos(idMuseo) {
        this.modeloService.getAllByRecinto(idMuseo)
            .subscribe((models) => {
            this.modelos = [];
            models.forEach(element => {
                var m = new src_app_models_modelo_admin__WEBPACK_IMPORTED_MODULE_7__["ModeloAdmin"](element.nombre, element.urlModelo, element.nombreAnimacion, element.hasRotation, element.hasMovement, element.hasResize, element.texturaPath);
                m.IdModelo = element.idModelo;
                this.modelos.push(m);
            });
        }, (error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
        });
    }
    loadMultimedia(idMuseo) {
        this.multimediaService.getAllByRecinto(idMuseo)
            .subscribe((mult) => {
            this.multimedias = [];
            mult.forEach(element => {
                var mt = new src_app_models_multimedia_admin__WEBPACK_IMPORTED_MODULE_8__["MultimediaAdmin"](element.nombre, element.urlUbicacion, element.multimediaType);
                mt.IdMultimedia = element.idMultimedia;
                this.multimedias.push(mt);
            });
        }, (error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
        });
    }
    loadTargets(idMuseo) {
        this.marcadorService.getAllByRecinto(idMuseo)
            .subscribe((marcadores) => {
            this.targets = [];
            marcadores.forEach(element => {
                var t = new src_app_models_marcador_admin__WEBPACK_IMPORTED_MODULE_6__["MarcadorAdmin"](element.nombre, element.urlTarget);
                t.IdTarget = element.idTarget;
                this.targets.push(t);
            });
        }, (error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
        });
    }
    loadGrupoByComponent(id) {
        var idGrupo = -1;
        this.componenteService.getGruposByComponente(id)
            .subscribe((response) => {
            var _a;
            idGrupo = response.idGrupo;
            (_a = this.editForm.get('grupo')) === null || _a === void 0 ? void 0 : _a.setValue(idGrupo.toString());
        }, (error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
        });
        return idGrupo;
    }
    onFileSelected(event) {
        let archivo = event.target.files[0];
        if (archivo) {
            this.fileGrupo = archivo;
            this.fileName = archivo.name;
        }
    }
    fillSelect(value) {
        if (value == 'MODELO') {
            this.elementos = [];
            this.modelos.forEach(element => {
                var e = new _dto_element__WEBPACK_IMPORTED_MODULE_10__["Elemento"](element.IdModelo, element.Nombre);
                this.elementos.push(e);
            });
        }
        else if (value == 'IMAGEN' || value == 'VIDEO') {
            this.elementos = [];
            this.multimedias.forEach(element => {
                if (value == element.MultimediaType) {
                    var e = new _dto_element__WEBPACK_IMPORTED_MODULE_10__["Elemento"](element.IdMultimedia, element.Nombre);
                    this.elementos.push(e);
                }
            });
        }
        this.elementos.forEach(element => {
            console.log(element);
        });
    }
    onRegister(item) {
        let nombre = item.nombreComponente;
        let hasTarget = false;
        let hasDescription = false;
        let grupo = -1;
        let marcador = -1;
        if (item.grupo != "") {
            grupo = +item.grupo;
        }
        if (item.marcador != "") {
            marcador = +item.marcador;
        }
        if (marcador != -1) {
            hasTarget = true;
        }
        let descripcion = item.descripcionComponente;
        if (descripcion == "") {
            hasDescription = false;
        }
        let tipoComponente = item.componentTipe;
        let idElemento = +item.archivo;
        console.log(item);
        this.isLoading = true;
        if (this.fileGrupo) {
            let string = this.makeRandom(this.lengthOfCode, this.possible);
            let nameFile = this.tokenService.getIdMuseo() + "_" + string + "_" + this.fileName;
            let finalName = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].componenteExternoFolder + nameFile;
            this.fileService.upload(this.fileGrupo, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].componentesFolder + nameFile)
                .subscribe((response) => {
                var comp = new src_app_models_componente_request__WEBPACK_IMPORTED_MODULE_3__["ComponenteRequest"](nombre, grupo, descripcion, marcador, tipoComponente, idElemento, finalName, +this.tokenService.getIdMuseo(), hasTarget, hasDescription);
                this.componenteService.save(comp)
                    .subscribe((response) => {
                    this.isLoading = false;
                    this.toastService.success("El componente se ha almacenado con éxito", 'OK', {
                        timeOut: 3000, positionClass: 'toast-top-center'
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }, (error) => {
                    this.isLoading = false;
                    this.errMsj = error.error.message;
                    console.log(this.errMsj);
                    this.toastService.error("Ocurrió un error al registrar el componente", 'Fail', {
                        timeOut: 3000, positionClass: 'toast-top-center',
                    });
                });
            }, (error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error("Ocurrió un error al registrar el archivo", 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
            });
        }
        else {
            this.toastService.error("No se ha seleccionado un archivo para subir", 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        }
    }
    onEdit() {
        this.isLoading = true;
        console.log(this.editForm.value);
        var grupoC = (this.grupo.value == "") ? -1 : this.grupo.value;
        var marcC = (this.marcador.value == "") ? -1 : this.marcador.value;
        var hasTarget = (marcC != -1);
        var hasDescripcion = (this.descripcion.value != "");
        var c = new src_app_models_componente_update__WEBPACK_IMPORTED_MODULE_4__["ComponenteUpdate"](this.nombre.value, grupoC, this.descripcion.value, marcC, this.componentTipe.value, +this.archivo.value, this.urlImagen.value, hasTarget, hasDescripcion);
        var idComponente = +this.idComponente.value;
        this.componenteService.update(idComponente, c)
            .subscribe((elemento) => {
            this.isLoading = false;
            this.toastService.success("El componente se ha actualizado con éxito", 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center'
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }, (error) => {
            this.isLoading = false;
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error("Ocurrió un error al actualizar el componente", 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    onDelete() {
        if (this.deleteComponente != 0) {
            this.isLoading = true;
            this.componenteService.delete(this.deleteComponente, +this.tokenService.getIdMuseo())
                .subscribe((response) => {
                this.isLoading = false;
                this.toastService.success(response.message, 'OK', {
                    timeOut: 3000, positionClass: 'toast-top-center'
                });
                this.deleteComponente = 0;
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }, (error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.deleteComponente = 0;
                this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
            });
        }
    }
    get nombre() {
        return this.editForm.get('nombre');
    }
    get descripcion() {
        return this.editForm.get('descripcion');
    }
    get grupo() {
        return this.editForm.get('grupo');
    }
    get marcador() {
        return this.editForm.get('marcador');
    }
    get componentTipe() {
        return this.editForm.get('componentTipe');
    }
    get archivo() {
        return this.editForm.get('archivo');
    }
    get urlImagen() {
        return this.editForm.get('urlImagen');
    }
    get idComponente() {
        return this.editForm.get('idComponente');
    }
    isValid() {
        return this.editForm.valid;
    }
    makeRandom(lengthOfCode, possible) {
        let text = "";
        for (let i = 0; i < lengthOfCode; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
ComponentesComponent.ɵfac = function ComponentesComponent_Factory(t) { return new (t || ComponentesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_componente_service__WEBPACK_IMPORTED_MODULE_12__["ComponenteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_token_service__WEBPACK_IMPORTED_MODULE_13__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_14__["CuentaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_grupo_service__WEBPACK_IMPORTED_MODULE_16__["GrupoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_modelo_service__WEBPACK_IMPORTED_MODULE_17__["ModeloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_multimedia_service__WEBPACK_IMPORTED_MODULE_18__["MultimediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_marcador_service__WEBPACK_IMPORTED_MODULE_19__["MarcadorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_file_service__WEBPACK_IMPORTED_MODULE_20__["FileService"])); };
ComponentesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComponentesComponent, selectors: [["app-componentes"]], decls: 34, vars: 3, consts: [["class", "loading", 4, "ngIf"], [1, "container-fluid", "px-5", "py-3"], [1, "row", "mb-4"], [1, "col", "text-white"], [1, "btn", "btn-forest", "col-3", 3, "click"], [1, "table-container"], [1, "table", "table-light", "table-hover", "text-center"], [1, "thead-aqua"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["confirmDelete", ""], ["newEntityModal", ""], ["EditEntityModal", ""], [1, "loading"], ["src", "../../../../assets/gif/loading_splash.gif"], ["data-toggle", "tooltip", "title", "Editar", 1, "icon", "mdi", "mdi-pencil", "text-yellow", 3, "click"], ["data-toggle", "tooltip", "title", "Eliminar", 1, "icon", "mdi", "mdi-trash-can", "text-red", 3, "click"], ["colspan", "12"], [1, "modal-header", "pb-2"], [1, "col-2"], [1, "modal-title", "text-center", "col"], ["type", "button", "aria-label", "Close", 1, "close", "col-2", "my-auto", 3, "click"], ["aria-hidden", "true", 1, "mdi", "mdi-close-thick"], [1, "modal-body", "p-3"], [1, "modal-footer"], [1, "row", "col-12"], [1, "col-6"], [1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "btn", "btn-yellow", "w-100", 3, "click"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "w-100", "mb-2"], ["for", "group_name", 1, ""], ["ngModel", "", "name", "nombreComponente", "type", "text", "placeholder", "Ingrese el nombre del grupo", "required", "", 1, "form-control"], ["nombreComponente", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "w-100", "mb-4"], ["for", "group_description", 1, ""], ["ngModel", "", "name", "descripcionComponente", "placeholder", "Ingrese una descripci\u00F3n", "required", "", 1, "form-control"], ["descripcionComponente", "ngModel"], ["ngModel", "", "name", "grupo", "aria-label", "Default select example", 1, "form-select"], ["grupo", "ngModel"], ["value", "-1", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["ngModel", "", "name", "marcador", "aria-label", "Default select example", 1, "form-select"], ["marcador", "ngModel"], ["ngModel", "", "name", "componentTipe", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["componentTipe", "ngModel"], ["value", "", "selected", ""], ["ngModel", "", "name", "archivo", "required", "", "aria-label", "Default select example", 1, "form-select"], ["archivo", "ngModel"], ["type", "file", "required", "", "accept", ".jpg,.jpeg,.png", 1, "file-input", 3, "change"], ["fileUpload", ""], [1, "file-upload"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "upload-btn", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "btn", "btn-yellow", "w-100", 3, "disabled"], [1, "alert", "alert-danger"], [3, "value"], [3, "formGroup", "ngSubmit"], ["formControlName", "nombre", "type", "text", "placeholder", "Ingrese el nombre del grupo", 1, "form-control"], ["formControlName", "descripcion", "placeholder", "Ingrese una descripci\u00F3n", 1, "form-control"], ["formControlName", "grupo", "aria-label", "Default select example", 1, "form-select"], ["formControlName", "marcador", "aria-label", "Default select example", 1, "form-select"], ["formControlName", "componentTipe", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["formControlName", "archivo", "aria-label", "Default select example", 1, "form-select"], ["formControlName", "idComponente", "type", "text", "hidden", "", 1, "form-control"], ["formControlName", "urlImagen", "type", "text", "hidden", "", 1, "form-control"]], template: function ComponentesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComponentesComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Componentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentesComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.openModal(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nuevo componente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Marcador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Archivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ComponentesComponent_tr_26_Template, 16, 6, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ComponentesComponent_tr_27_Template, 3, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ComponentesComponent_ng_template_28_Template, 18, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ComponentesComponent_ng_template_30_Template, 72, 11, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ComponentesComponent_ng_template_32_Template, 58, 10, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.componentes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.componentes.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".file-input[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.loading[_ngcontent-%COMP%]{height: calc(100% + var(--header_height) + var(--footer_height));}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0EsU0FBUyxnRUFBZ0UsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGUtaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubG9hZGluZ3toZWlnaHQ6IGNhbGMoMTAwJSArIHZhcigtLWhlYWRlcl9oZWlnaHQpICsgdmFyKC0tZm9vdGVyX2hlaWdodCkpO30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-componentes',
                templateUrl: './componentes.component.html',
                styleUrls: ['./componentes.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] }, { type: src_app_service_componente_service__WEBPACK_IMPORTED_MODULE_12__["ComponenteService"] }, { type: src_app_service_token_service__WEBPACK_IMPORTED_MODULE_13__["TokenService"] }, { type: src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_14__["CuentaService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrService"] }, { type: src_app_service_grupo_service__WEBPACK_IMPORTED_MODULE_16__["GrupoService"] }, { type: src_app_service_modelo_service__WEBPACK_IMPORTED_MODULE_17__["ModeloService"] }, { type: src_app_service_multimedia_service__WEBPACK_IMPORTED_MODULE_18__["MultimediaService"] }, { type: src_app_service_marcador_service__WEBPACK_IMPORTED_MODULE_19__["MarcadorService"] }, { type: src_app_service_file_service__WEBPACK_IMPORTED_MODULE_20__["FileService"] }]; }, null); })();


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/token.service */ "/QNy");
/* harmony import */ var _service_cuenta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/cuenta.service */ "rPZ9");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function AdminComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Grupos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Componentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Modelos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Multimedia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Marcadores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} }
class AdminComponent {
    constructor(tokenService, cuentaService, toastService) {
        this.tokenService = tokenService;
        this.cuentaService = cuentaService;
        this.toastService = toastService;
        this.isLogged = false;
        this.errMsj = '';
    }
    ngOnInit() {
        this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
        this.loadMuseo();
    }
    loadMuseo() {
        if (!this.tokenService.getIdMuseo() && this.tokenService.getToken()) {
            this.cuentaService.getMuseo(this.tokenService.getUserName())
                .subscribe((museo) => {
                this.tokenService.setIdMuseo(+museo.idMuseo);
                // alert(this.tokenService.getIdMuseo());
            }, (error) => {
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
                /*
                setTimeout(() => {
                  window.location.href = '/admin';
                },2000);*/
            });
        }
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cuenta_service__WEBPACK_IMPORTED_MODULE_2__["CuentaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 13, vars: 2, consts: [[1, "row", "p-0", "m-0"], [1, "col-lg-3", "col-md-3", "col-sm-12", "px-0"], ["class", "container-fluid h-100 backg-charcoal px-0", 4, "ngIf"], ["id", "admin_alt_sidebar", "class", "container-fluid h-100 px-0", 4, "ngIf"], ["id", "adminContent", 1, "col-lg-9", "col-md-9", "col-sm-12", "px-0"], [1, "text-white", "font-xs", "p-3", "backg-charcoal50"], ["href", "https://unsplash.com/@esu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 1, "text-yellow"], ["href", "https://unsplash.com", 1, "text-yellow"], [1, "container-fluid", "h-100", "backg-charcoal", "px-0"], [1, "col", "bb-gray"], [1, "p-3"], ["id", "admin-grupos", "routerLink", "grupos", 1, "font-lg", "btn-link", "w-100"], ["id", "admin-componentes", "routerLink", "componentes", 1, "font-lg", "btn-link", "w-100"], [1, "px-3"], [1, "ps-4"], ["id", "admin-modelos", "routerLink", "modelos", 1, "font-lg", "btn-link", "w-100"], [1, "mdi", "mdi-arrow-bottom-right-thick"], ["id", "admin-multimedia", "routerLink", "multimedia", 1, "font-lg", "btn-link", "w-100"], [1, "ps-4", "pb-3"], ["id", "admin-marcadores", "routerLink", "marcadores", 1, "font-lg", "btn-link", "w-100"], ["id", "admin_alt_sidebar", 1, "container-fluid", "h-100", "px-0"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_2_Template, 22, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Cr\u00E9ditos de fotograf\u00EDa a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Adaivorukamuthan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Unsplash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".btn-link[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    padding-left: 3rem;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-weight: normal;\r\n}\r\n.btn-link[_ngcontent-%COMP%]:hover{font-weight: bold; color: var(--gold)}\r\n#adminContent[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    overflow-y: scroll;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-color: var(--blue-gray);\r\n    background-image: url('admin_03.jpg');\r\n}\r\n#adminContent[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]{\r\n    min-height: 90%;\r\n}\r\n#admin_alt_sidebar[_ngcontent-%COMP%]{background-image: url('jaguar_skin.svg'); background-repeat: no-repeat; background-size: cover}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBQ0EsZ0JBQWdCLGlCQUFpQixFQUFFLGtCQUFrQjtBQUNyRDtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLHFDQUE0RDtBQUNoRTtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBLG1CQUFtQix3Q0FBeUQsRUFBRSw0QkFBNEIsRUFBRSxzQkFBc0IiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbGlua3tcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmJ0bi1saW5rOmhvdmVye2ZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogdmFyKC0tZ29sZCl9XHJcbiNhZG1pbkNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWdyYXkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2FkbWluL2FkbWluXzAzLmpwZycpO1xyXG59XHJcbiNhZG1pbkNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIG1pbi1oZWlnaHQ6IDkwJTtcclxufVxyXG4jYWRtaW5fYWx0X3NpZGViYXJ7YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9qYWd1YXJfc2tpbi5zdmdcIik7IGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IGJhY2tncm91bmQtc2l6ZTogY292ZXJ9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: _service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }, { type: _service_cuenta_service__WEBPACK_IMPORTED_MODULE_2__["CuentaService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "UFx+":
/*!*************************************************!*\
  !*** ./src/app/session/auth/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_login_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/login-usuario */ "mljW");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/token.service */ "/QNy");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function LoginComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_7_div_1_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
} }
function LoginComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El campo debe tener al menos ", _r3.errors == null ? null : _r3.errors.minlength.requiredLength, " caracteres");
} }
function LoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_13_div_1_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_13_div_2_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.minlength);
} }
// import { ToastrService } from 'ngx-toastr';
class LoginComponent {
    constructor(tokenService, authService, router, toastService, cookieService) {
        this.tokenService = tokenService;
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
        this.cookieService = cookieService;
        this.isLogged = false;
        this.isLoginFail = false;
        // loginUsuario: LoginUsuario = {};
        this.emailUsuario = '';
        this.password = '';
        this.roles = [];
        this.errMsj = '';
    }
    ngOnInit() {
        if (this.tokenService.getToken()) {
            this.isLogged = true;
            this.isLoginFail = false;
        }
    }
    onLogin(login) {
        console.log(login.emailUsuario);
        var loginUsuario = new _models_login_usuario__WEBPACK_IMPORTED_MODULE_1__["LoginUsuario"](login.emailUsuario, login.password);
        this.authService.login(loginUsuario).
            subscribe((data) => {
            this.isLogged = true;
            this.tokenService.setToken(data.token);
            this.toastService.success('Bienvenido ' + this.tokenService.getUserName(), 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center'
            });
            setTimeout(() => {
                window.location.href = '/admin';
            }, 2000);
            //this.router.navigate(['/admin']);
        }, (error) => {
            this.isLogged = false;
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error(this.errMsj, 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
            // console.log(err.error.message);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 3, consts: [[3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "w-100", "mb-2"], ["for", "login_email", 1, ""], ["required", "", "ngModel", "", "name", "emailUsuario", "id", "login_email", "type", "text", "placeholder", "Ingrese la cuenta", 1, "form-control"], ["emailUsuario", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "w-100", "mb-4"], ["for", "login_pass", 1, ""], ["required", "", "minlength", "8", "ngModel", "", "name", "password", "id", "login_pass", "type", "password", "placeholder", "********", 1, "form-control"], ["password", "ngModel"], [1, "form-group", "w-100"], [1, "w-100", "mb-2", "btn", "btn-ryb", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onLogin(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"]], styles: [".form-container[_ngcontent-%COMP%]{\r\n    max-height: 18rem;\r\n    overflow-y: scroll;\r\n}\r\n#session_back_img[_ngcontent-%COMP%], #profile_back_img[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-color: var(--blue-gray);\r\n}\r\n#session_back_img[_ngcontent-%COMP%] {\r\n    background-image: url('admin_02.jpg');\r\n}\r\n#profile_back_img[_ngcontent-%COMP%]{background-image: url('admin_04.jpg')}\r\n.loading[_ngcontent-%COMP%]{height: calc(100% + var(--header_height) + var(--footer_height));}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLHFDQUE0RDtBQUNoRTtBQUNBLGtCQUFrQixxQ0FBNEQ7QUFDOUUsU0FBUyxnRUFBZ0UsQ0FBQyIsImZpbGUiOiJzZXNzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxOHJlbTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4jc2Vzc2lvbl9iYWNrX2ltZywgI3Byb2ZpbGVfYmFja19pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1ncmF5KTtcclxufVxyXG4jc2Vzc2lvbl9iYWNrX2ltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2FkbWluL2FkbWluXzAyLmpwZ1wiKTtcclxufVxyXG4jcHJvZmlsZV9iYWNrX2ltZ3tiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2FkbWluL2FkbWluXzA0LmpwZ1wiKX1cclxuLmxvYWRpbmd7aGVpZ2h0OiBjYWxjKDEwMCUgKyB2YXIoLS1oZWFkZXJfaGVpZ2h0KSArIHZhcigtLWZvb3Rlcl9oZWlnaHQpKTt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['../session.component.css']
            }]
    }], function () { return [{ type: _service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }, { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "UaPw":
/*!************************************!*\
  !*** ./src/app/models/marcador.ts ***!
  \************************************/
/*! exports provided: Marcador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marcador", function() { return Marcador; });
class Marcador {
    constructor(nombreMarcador, urlMarcador) {
        this.nombreMarcador = nombreMarcador;
        this.urlMarcador = urlMarcador;
    }
    get NombreMarcador() {
        return this.nombreMarcador;
    }
    get UrlMarcador() {
        return this.urlMarcador;
    }
    get IdMarcador() {
        return this.idMarcador;
    }
    set NombreMarcador(value) {
        this.nombreMarcador = value;
    }
    set UrlMarcador(value) {
        this.urlMarcador = value;
    }
    set IdMarcador(value) {
        this.idMarcador = value;
    }
}


/***/ }),

/***/ "VSMV":
/*!***********************************************!*\
  !*** ./src/app/service/componente.service.ts ***!
  \***********************************************/
/*! exports provided: ComponenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponenteService", function() { return ComponenteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class ComponenteService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.componenteURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi;
    }
    getAllByRecinto(id) {
        return this.httpClient.get(`${this.componenteURL}/componentes/${id}`);
    }
    save(componente) {
        return this.httpClient.post(`${this.componenteURL}/componente`, componente);
    }
    update(id, componente) {
        return this.httpClient.put(`${this.componenteURL}/componente/${id}`, componente);
    }
    delete(id, idMuseo) {
        return this.httpClient.delete(`${this.componenteURL}/componente/${id}?id=${idMuseo}`);
    }
    getGruposByComponente(id) {
        return this.httpClient.get(`${this.componenteURL}/componente/${id}/grupo`);
    }
}
ComponenteService.ɵfac = function ComponenteService_Factory(t) { return new (t || ComponenteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ComponenteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComponenteService, factory: ComponenteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponenteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "VioV":
/*!**********************************************!*\
  !*** ./src/app/service/ubicacion.service.ts ***!
  \**********************************************/
/*! exports provided: UbicacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbicacionService", function() { return UbicacionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class UbicacionService {
    constructor(http) {
        this.http = http;
        this.urlVisor = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi}/visor`;
    }
    getMuseo(location) {
        const path = `${this.urlVisor}/location/museo`;
        return this.http.post(path, location);
    }
}
UbicacionService.ɵfac = function UbicacionService_Factory(t) { return new (t || UbicacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UbicacionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UbicacionService, factory: UbicacionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbicacionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "WJ30":
/*!******************************************!*\
  !*** ./src/app/models/modelo-request.ts ***!
  \******************************************/
/*! exports provided: ModeloRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeloRequest", function() { return ModeloRequest; });
class ModeloRequest {
    constructor(nombre, urlModelo, nombreAnimacion, hasRotation, hasMovement, hasResize, texturaPath, idMuseo) {
        this.nombre = nombre;
        this.urlModelo = urlModelo;
        this.nombreAnimacion = nombreAnimacion;
        this.hasRotation = hasRotation;
        this.hasMovement = hasMovement;
        this.hasResize = hasResize;
        this.texturaPath = texturaPath;
        this.idMuseo = idMuseo;
    }
    get Nombre() {
        return this.nombre;
    }
    get UrlModelo() {
        return this.urlModelo;
    }
    get NombreAnimacion() {
        return this.nombreAnimacion;
    }
    get HasRotation() {
        return this.hasRotation;
    }
    get HasMovement() {
        return this.hasMovement;
    }
    get HasResize() {
        return this.hasResize;
    }
    get TexturaPath() {
        return this.texturaPath;
    }
    get IdMuseo() {
        return this.idMuseo;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set UrlModelo(value) {
        this.urlModelo = value;
    }
    set NombreAnimacion(value) {
        this.nombreAnimacion = value;
    }
    set HasRotation(value) {
        this.hasRotation = value;
    }
    set HasMovement(value) {
        this.hasMovement = value;
    }
    set HasResize(value) {
        this.hasResize = value;
    }
    set TexturaPath(value) {
        this.texturaPath = value;
    }
    set IdMuseo(value) {
        this.idMuseo = value;
    }
}


/***/ }),

/***/ "X+pJ":
/*!***********************************!*\
  !*** ./src/app/models/profile.ts ***!
  \***********************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
class Profile {
    constructor(direccion, telefono, latitud, longitud, nombre) {
        this.direccion = direccion;
        this.telefono = telefono;
        this.latitud = latitud;
        this.longitud = longitud;
        this.nombre = nombre;
    }
    get Direccion() {
        return this.direccion;
    }
    set Direccion(value) {
        this.direccion = value;
    }
    get Telefono() {
        return this.telefono;
    }
    set Telefono(value) {
        this.telefono = value;
    }
    get Latitud() {
        return this.latitud;
    }
    set Latitud(value) {
        this.latitud = value;
    }
    get Longitud() {
        return this.longitud;
    }
    set Longitud(value) {
        this.longitud = value;
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(value) {
        this.nombre = value;
    }
}


/***/ }),

/***/ "XzGD":
/*!*******************************************!*\
  !*** ./src/app/models/marcador-update.ts ***!
  \*******************************************/
/*! exports provided: MarcadorUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcadorUpdate", function() { return MarcadorUpdate; });
class MarcadorUpdate {
    constructor(nombre, urlTarget) {
        this.nombre = nombre;
        this.urlTarget = urlTarget;
    }
    get Nombre() {
        return this.nombre;
    }
    get UrlTarget() {
        return this.urlTarget;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set UrlTarget(value) {
        this.urlTarget = value;
    }
}


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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _404_pageNotFound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./404/pageNotFound.component */ "bC+/");
/* harmony import */ var _commons_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commons/app.component */ "+gxN");
/* harmony import */ var _commons_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commons/header/header.component */ "fSXp");
/* harmony import */ var _commons_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commons/footer/footer.component */ "tT5z");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _admin_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin.module */ "/Tkw");
/* harmony import */ var _visor_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visor.module */ "q/d5");
/* harmony import */ var _session_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./session.module */ "c0pl");
/* harmony import */ var _interceptors_prod_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interceptors/prod-interceptor.service */ "M8e2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "5eHb");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_commons_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _interceptors_prod_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["ProdInterceptorService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _admin_module__WEBPACK_IMPORTED_MODULE_10__["AdminModule"],
            _visor_module__WEBPACK_IMPORTED_MODULE_11__["VisorModule"],
            _session_module__WEBPACK_IMPORTED_MODULE_12__["SessionModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_commons_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
        _commons_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _commons_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _404_pageNotFound_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _admin_module__WEBPACK_IMPORTED_MODULE_10__["AdminModule"],
        _visor_module__WEBPACK_IMPORTED_MODULE_11__["VisorModule"],
        _session_module__WEBPACK_IMPORTED_MODULE_12__["SessionModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _commons_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
                    _commons_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _commons_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _404_pageNotFound_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _admin_module__WEBPACK_IMPORTED_MODULE_10__["AdminModule"],
                    _visor_module__WEBPACK_IMPORTED_MODULE_11__["VisorModule"],
                    _session_module__WEBPACK_IMPORTED_MODULE_12__["SessionModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
                ],
                providers: [
                    _interceptors_prod_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["ProdInterceptorService"],
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"]
                ],
                bootstrap: [_commons_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZOS2":
/*!********************************************!*\
  !*** ./src/app/models/multimedia-admin.ts ***!
  \********************************************/
/*! exports provided: MultimediaAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaAdmin", function() { return MultimediaAdmin; });
class MultimediaAdmin {
    constructor(nombre, urlUbicacion, multimediaType) {
        this.nombre = nombre;
        this.urlUbicacion = urlUbicacion;
        this.multimediaType = multimediaType;
    }
    get Nombre() {
        return this.nombre;
    }
    get UrlUbicacion() {
        return this.urlUbicacion;
    }
    get MultimediaType() {
        return this.multimediaType;
    }
    get IdMultimedia() {
        return this.idMultimedia;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set UrlUbicacion(value) {
        this.UrlUbicacion = value;
    }
    set MultimediaType(value) {
        this.multimediaType = value;
    }
    set IdMultimedia(value) {
        this.idMultimedia = value;
    }
}


/***/ }),

/***/ "ZUqc":
/*!******************************************************!*\
  !*** ./src/app/visor/selector/selector.component.ts ***!
  \******************************************************/
/*! exports provided: SelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorComponent", function() { return SelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_grupo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/grupo */ "R3r6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var src_app_service_visor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/visor.service */ "H/Kn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SelectorComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectorComponent_nav_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return ctx_r3.openMenuModal(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectorComponent_ng_template_1_ng_template_15_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No se encontr\u00F3 ning\u00FAn grupo registrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectorComponent_ng_template_1_ng_template_15_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectorComponent_ng_template_1_ng_template_15_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const g_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r12.getComponentes(g_r11.IdGrupo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "grupo-" + g_r11.IdGrupo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", g_r11.UrlImagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", g_r11.IdGrupo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](g_r11.Nombre);
} }
function SelectorComponent_ng_template_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Selecciona un grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectorComponent_ng_template_1_ng_template_15_p_4_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectorComponent_ng_template_1_ng_template_15_div_6_Template, 7, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.hasGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.grupos);
} }
function SelectorComponent_ng_template_1_ng_template_19_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No se encontr\u00F3 ning\u00FAn componente registrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectorComponent_ng_template_1_ng_template_19_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectorComponent_ng_template_1_ng_template_19_div_5_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const c_r17 = ctx.$implicit; const modal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); modal_r5.dismiss("Cross click"); return ctx_r18.showComponente(c_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "componente-" + c_r17.IdComponente);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", c_r17.UrlImagenComponente, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r17.NombreComponente, " ");
} }
function SelectorComponent_ng_template_1_ng_template_19_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectorComponent_ng_template_1_ng_template_19_div_5_div_1_Template, 7, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.componentes);
} }
function SelectorComponent_ng_template_1_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Selecciona un componente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectorComponent_ng_template_1_ng_template_19_p_4_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SelectorComponent_ng_template_1_ng_template_19_div_5_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.hasComponentes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.hasComponentes);
} }
function SelectorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "EXPLORA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectorComponent_ng_template_1_Template_button_click_5_listener() { const modal_r5 = ctx.$implicit; return modal_r5.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Grupos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SelectorComponent_ng_template_1_ng_template_15_Template, 7, 2, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Componentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SelectorComponent_ng_template_1_ng_template_19_Template, 6, 2, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r6);
} }
/*import { Grupo } from '../../class/grupo';
import { GrupoModelo } from '../../class/grupo-modelo';
import { PruebaComponent } from '../prueba/prueba.component';
import { GrupoServicioService } from '../../services/grupo-servicio.service';
import { SharingService } from '../../services/sharing.service';*/
class SelectorComponent {
    constructor(modalService, visorService) {
        this.modalService = modalService;
        this.visorService = visorService;
        this.componentes = [];
        this.hasComponentes = false;
        this.componenteUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.componenteShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.grupos = [];
        this.hasGroups = false;
        this.message = '';
    }
    openMenuModal(content) {
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
        // alert(this.idMuseo?.toString());
        if (this.idMuseo != null) {
            this.getGrupos(this.idMuseo);
        }
    }
    ngOnInit() { }
    getGrupos(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.visorService.getGruposByRecinto(id)
                .subscribe((groups) => {
                this.grupos = [];
                groups.forEach((value) => {
                    var n = new src_app_models_grupo__WEBPACK_IMPORTED_MODULE_2__["GrupoModelo"](value.nombre, value.descripcion, value.urlImagen, value.createdDate, value.updatedDate);
                    n.IdGrupo = value.idGrupo;
                    this.grupos.push(n);
                });
                this.grupos.length > 0 ? this.hasGroups = true : this.hasGroups = false;
            }, (error) => {
                if (error.error instanceof ErrorEvent) {
                    console.log('Error Event');
                }
                else {
                    console.log(`error status : ${error.status} ${error.statusText}`);
                    switch (error.status) {
                        case 404:
                            console.log('No se encontró ningún grupo registrado');
                            this.hasGroups = false;
                            break;
                    }
                }
            });
        });
    }
    getComponentes(id) {
        // alert(id);
        // marca la clase seleccionada
        const images = document.getElementsByClassName('grupo-img');
        for (let i = 0; i < images.length; i++) {
            // if (images[i].id === 'grupo-'+id ){}
            images[i].classList.remove('selected');
        }
        const grupoImg = document.getElementById('grupo-' + id);
        if (grupoImg != null) {
            grupoImg.classList.add('selected');
        }
        // carga sus componentes
        this.componenteUpdate.emit(id);
    }
    showComponente(component) {
        // alert(component.IdComponente);
        // marca la clase seleccionada
        const images = document.getElementsByClassName('componente-img');
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('selected');
        }
        const grupoImg = document.getElementById('componente-' + component.IdComponente);
        if (grupoImg != null) {
            grupoImg.classList.add('selected');
        }
        this.componenteShow.emit(component);
    }
}
SelectorComponent.ɵfac = function SelectorComponent_Factory(t) { return new (t || SelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_visor_service__WEBPACK_IMPORTED_MODULE_4__["VisorService"])); };
SelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectorComponent, selectors: [["app-visor-selector"]], inputs: { idMuseo: "idMuseo", componentes: "componentes", hasComponentes: "hasComponentes" }, outputs: { componenteUpdate: "componenteUpdate", componenteShow: "componenteShow" }, decls: 3, vars: 1, consts: [["class", "buttons navbar p-3", 4, "ngIf"], ["content", ""], [1, "buttons", "navbar", "p-3"], [1, "btn", "circle", "btn-danger", "float-left", "mr-3", 3, "click"], [1, "mdi", "mdi-cube-outline"], ["id", "modalClase", 1, "modal-rainbow"], [1, "modal-header", "pb-2"], [1, "col-2"], [1, "modal-title", "text-center", "col"], ["type", "button", "aria-label", "Close", 1, "close", "col-2", "my-auto", 3, "click"], ["aria-hidden", "true", 1, "mdi", "mdi-close-thick"], [1, "modal-body", "p-0"], [3, "ngbNavOutlet"], [1, "modal-footer"], ["ngbNav", "", 1, "nav-pills", "col-12"], ["nav", "ngbNav"], ["ngbNavItem", "", 1, "col-6", "text-center"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "text-center", "bb-rainbow", "backg-charcoal"], [1, "p-3", "modal-content-container"], ["class", "text-center", 4, "ngIf"], [1, "row"], ["class", "selector-img grupo-img col-6 p-0 my-2 mx-auto text-center clickable", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "selector-img", "grupo-img", "col-6", "p-0", "my-2", "mx-auto", "text-center", "clickable", 3, "id", "click"], [3, "src"], ["hidden", "", 3, "value"], [1, "selector-background"], [1, "selector-info"], ["class", "row", 4, "ngIf"], ["class", "selector-img componente-img col-6 p-0 my-2 mx-auto text-center clickable", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "selector-img", "componente-img", "col-6", "p-0", "my-2", "mx-auto", "text-center", "clickable", 3, "id", "click"], [1, "clickable", "font-sm"], [1, "mdi", "mdi-qrcode"]], template: function SelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SelectorComponent_nav_0_Template, 3, 0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectorComponent_ng_template_1_Template, 20, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.idMuseo && ctx.idMuseo != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["/*Botones de navegaci\u00F3n del visor*/\r\nbody{\r\n    background-image: url('jaguar_skin_violet.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\n.nav-pills .nav-link.active, .nav-pills .show>.nav-link{background-color: #000 !important; text-decoration: underline}\r\n.nav-link,.nav-link:focus, .nav-link:hover{color: #fff}\r\n.nav-link:hover{font-weight: bold;}\r\n#visor-navigation{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.buttons {\r\n    width: 100%;\r\n    height: 5em;\r\n    z-index: 10;\r\n}\r\n/*------*/\r\n.clickable{\r\n    cursor: pointer;\r\n}\r\n/*OVERRIDE MODAL*/\r\n.modal-content .modal-rainbow{\r\n    border: 5px solid transparent!important;\r\n    border-image-source: var(--gradientRainbow)!important;\r\n    border-image-slice: 1!important;\r\n    border-radius: 0!important;\r\n    background-color: var(--darks);\r\n    color: #fff;\r\n\r\n    /*background:\r\n            linear-gradient(var(--charcoal),var(--charcoal)) padding-box, /*this is your grey background/\r\n            var(--gradientRainbow) border-box;\r\n    color: #fff;\r\n    padding:10px;\r\n    border: 5px solid transparent;\r\n    border-radius:15px;\r\n    display:inline-block;\r\n    margin: 75px 0;*/\r\n}\r\n.modal-rainbow .modal-header{border-bottom: unset; background-color: var(--charcoal);}\r\n.modal-rainbow .modal-body{background-color: transparent}\r\n.modal-rainbow .modal-footer{\r\n    border-top: unset;background-color: var(--charcoal);\r\n    border-top: 5px solid transparent;\r\n    border-image-source: var(--gradientRainbow);\r\n    border-image-slice: 1;\r\n}\r\n/*MODAL-SECCION DE GRUPOS Y COMPONENTES*/\r\n.selector-img{\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n    width: var(--visor-img-w);\r\n    height: var(--visor-img-h);\r\n}\r\n.selector-img img{object-fit: cover;width: var(--visor-img-w);height: var(--visor-img-h);}\r\n.selector-info, .selector-background{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n.selector-background{\r\n    width: var(--visor-img-w);\r\n    height: var(--visor-img-h);\r\n    background-color: var(--darks);\r\n}\r\n.selector-info{}\r\n.selector-info p{\r\n    padding: .5rem; margin: 0; word-break: unset; overflow:hidden;\r\n    text-overflow: ellipsis; max-width: var(--visor-img-w); max-height: var(--visor-img-h);\r\n}\r\n.selected .selector-background, .selected img{border: 3px solid #fff}\r\n/*CONTENEDOR DEL A-SCENE*/\r\n.component-display{\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n/*FOOTER - informacion adicional de componentes*/\r\n#visor-footer .row{--bs-gutter-x: 0!important;}\r\n#visor-footer{\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    max-height: 12rem;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    z-index: 20\r\n}\r\n.visor-footer-info{background-color: var(--darks);color: #fff;}\r\n#visor-footer .card{border: unset!important;}\r\n#visor-footer .card-body{\r\n    background-color: var(--darks);\r\n    border-radius: 0;\r\n    color: #fff;\r\n}\r\n.marker-img{\r\n    width: 15vw;\r\n    height: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc29yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDO0lBQ0ksK0NBQWdFO0lBQ2hFLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDO0FBQ0Esd0RBQXdELGlDQUFpQyxFQUFFLDBCQUEwQjtBQUNySCwyQ0FBMkMsV0FBVztBQUN0RCxnQkFBZ0IsaUJBQWlCLENBQUM7QUFDbEM7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87QUFDWDtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7SUFDSSxlQUFlO0FBQ25CO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksdUNBQXVDO0lBQ3ZDLHFEQUFxRDtJQUNyRCwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixXQUFXOztJQUVYOzs7Ozs7OztvQkFRZ0I7QUFDcEI7QUFDQSw2QkFBNkIsb0JBQW9CLEVBQUUsaUNBQWlDLENBQUM7QUFDckYsMkJBQTJCLDZCQUE2QjtBQUN4RDtJQUNJLGlCQUFpQixDQUFDLGlDQUFpQztJQUNuRCxpQ0FBaUM7SUFDakMsMkNBQTJDO0lBQzNDLHFCQUFxQjtBQUN6QjtBQUVBLHdDQUF3QztBQUN4QztJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7QUFDQSxrQkFBa0IsaUJBQWlCLENBQUMseUJBQXlCLENBQUMsMEJBQTBCLENBQUM7QUFDekY7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsOEJBQThCO0FBQ2xDO0FBQ0EsZUFBZTtBQUNmO0lBQ0ksY0FBYyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxlQUFlO0lBQzdELHVCQUF1QixFQUFFLDZCQUE2QixFQUFFLDhCQUE4QjtBQUMxRjtBQUNBLDhDQUE4QyxzQkFBc0I7QUFFcEUseUJBQXlCO0FBQ3pCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFFQSxnREFBZ0Q7QUFDaEQsbUJBQW1CLDBCQUEwQixDQUFDO0FBQzlDO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQSxtQkFBbUIsOEJBQThCLENBQUMsV0FBVyxDQUFDO0FBQzlELG9CQUFvQix1QkFBdUIsQ0FBQztBQUM1QztJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJ2aXNvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypCb3RvbmVzIGRlIG5hdmVnYWNpw7NuIGRlbCB2aXNvciovXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2phZ3Vhcl9za2luX3Zpb2xldC5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lfVxyXG4ubmF2LWxpbmssLm5hdi1saW5rOmZvY3VzLCAubmF2LWxpbms6aG92ZXJ7Y29sb3I6ICNmZmZ9XHJcbi5uYXYtbGluazpob3Zlcntmb250LXdlaWdodDogYm9sZDt9XHJcbiN2aXNvci1uYXZpZ2F0aW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4uYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuLyotLS0tLS0qL1xyXG4uY2xpY2thYmxle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKk9WRVJSSURFIE1PREFMKi9cclxuLm1vZGFsLWNvbnRlbnQgLm1vZGFsLXJhaW5ib3d7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItaW1hZ2Utc291cmNlOiB2YXIoLS1ncmFkaWVudFJhaW5ib3cpIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtzKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIC8qYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHZhcigtLWNoYXJjb2FsKSx2YXIoLS1jaGFyY29hbCkpIHBhZGRpbmctYm94LCAvKnRoaXMgaXMgeW91ciBncmV5IGJhY2tncm91bmQvXHJcbiAgICAgICAgICAgIHZhcigtLWdyYWRpZW50UmFpbmJvdykgYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNzVweCAwOyovXHJcbn1cclxuLm1vZGFsLXJhaW5ib3cgLm1vZGFsLWhlYWRlcntib3JkZXItYm90dG9tOiB1bnNldDsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO31cclxuLm1vZGFsLXJhaW5ib3cgLm1vZGFsLWJvZHl7YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnR9XHJcbi5tb2RhbC1yYWluYm93IC5tb2RhbC1mb290ZXJ7XHJcbiAgICBib3JkZXItdG9wOiB1bnNldDtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItaW1hZ2Utc291cmNlOiB2YXIoLS1ncmFkaWVudFJhaW5ib3cpO1xyXG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xyXG59XHJcblxyXG4vKk1PREFMLVNFQ0NJT04gREUgR1JVUE9TIFkgQ09NUE9ORU5URVMqL1xyXG4uc2VsZWN0b3ItaW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IHZhcigtLXZpc29yLWltZy13KTtcclxuICAgIGhlaWdodDogdmFyKC0tdmlzb3ItaW1nLWgpO1xyXG59XHJcbi5zZWxlY3Rvci1pbWcgaW1ne29iamVjdC1maXQ6IGNvdmVyO3dpZHRoOiB2YXIoLS12aXNvci1pbWctdyk7aGVpZ2h0OiB2YXIoLS12aXNvci1pbWctaCk7fVxyXG4uc2VsZWN0b3ItaW5mbywgLnNlbGVjdG9yLWJhY2tncm91bmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5zZWxlY3Rvci1iYWNrZ3JvdW5ke1xyXG4gICAgd2lkdGg6IHZhcigtLXZpc29yLWltZy13KTtcclxuICAgIGhlaWdodDogdmFyKC0tdmlzb3ItaW1nLWgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3MpO1xyXG59XHJcbi5zZWxlY3Rvci1pbmZve31cclxuLnNlbGVjdG9yLWluZm8gcHtcclxuICAgIHBhZGRpbmc6IC41cmVtOyBtYXJnaW46IDA7IHdvcmQtYnJlYWs6IHVuc2V0OyBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgbWF4LXdpZHRoOiB2YXIoLS12aXNvci1pbWctdyk7IG1heC1oZWlnaHQ6IHZhcigtLXZpc29yLWltZy1oKTtcclxufVxyXG4uc2VsZWN0ZWQgLnNlbGVjdG9yLWJhY2tncm91bmQsIC5zZWxlY3RlZCBpbWd7Ym9yZGVyOiAzcHggc29saWQgI2ZmZn1cclxuXHJcbi8qQ09OVEVORURPUiBERUwgQS1TQ0VORSovXHJcbi5jb21wb25lbnQtZGlzcGxheXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLypGT09URVIgLSBpbmZvcm1hY2lvbiBhZGljaW9uYWwgZGUgY29tcG9uZW50ZXMqL1xyXG4jdmlzb3ItZm9vdGVyIC5yb3d7LS1icy1ndXR0ZXIteDogMCFpbXBvcnRhbnQ7fVxyXG4jdmlzb3ItZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1heC1oZWlnaHQ6IDEycmVtO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMjBcclxufVxyXG4udmlzb3ItZm9vdGVyLWluZm97YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3MpO2NvbG9yOiAjZmZmO31cclxuI3Zpc29yLWZvb3RlciAuY2FyZHtib3JkZXI6IHVuc2V0IWltcG9ydGFudDt9XHJcbiN2aXNvci1mb290ZXIgLmNhcmQtYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubWFya2VyLWltZ3tcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-visor-selector',
                templateUrl: './selector.component.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                styleUrls: ['../visor.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: src_app_service_visor_service__WEBPACK_IMPORTED_MODULE_4__["VisorService"] }]; }, { idMuseo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], componentes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hasComponentes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], componenteUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], componenteShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "ZYVa":
/*!*********************************************!*\
  !*** ./src/app/models/componente-update.ts ***!
  \*********************************************/
/*! exports provided: ComponenteUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponenteUpdate", function() { return ComponenteUpdate; });
class ComponenteUpdate {
    constructor(nombre, idGrupo, descripcion, idMarcador, tipoComponente, idElemento, urlImagen, hasTarget, hasDescription) {
        this.nombre = nombre;
        this.idGrupo = idGrupo;
        this.descripcion = descripcion;
        this.idMarcador = idMarcador;
        this.tipoComponente = tipoComponente;
        this.idElemento = idElemento;
        this.urlImagen = urlImagen;
        this.hasTarget = hasTarget;
        this.hasDescription = hasDescription;
    }
    get Nombre() {
        return this.nombre;
    }
    get UrlImagen() {
        return this.urlImagen;
    }
    get Descripcion() {
        return this.descripcion;
    }
    get HasTarget() {
        return this.hasTarget;
    }
    get TipoComponente() {
        return this.tipoComponente;
    }
    get HasDescription() {
        return this.hasDescription;
    }
    get IdElemento() {
        return this.idElemento;
    }
    get IdMarcador() {
        return this.idMarcador;
    }
    get IdGrupo() {
        return this.idGrupo;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set UrlImagen(value) {
        this.urlImagen = value;
    }
    set Descripcion(value) {
        this.descripcion = value;
    }
    set HasTarget(value) {
        this.hasTarget = value;
    }
    set TipoComponente(value) {
        this.tipoComponente = value;
    }
    set HasDescription(value) {
        this.hasDescription = value;
    }
    set IdElemento(value) {
        this.idElemento = value;
    }
    set IdMarcador(value) {
        this.idMarcador = value;
    }
    set IdGrupo(value) {
        this.idGrupo = value;
    }
}


/***/ }),

/***/ "ZjiB":
/*!******************************************!*\
  !*** ./src/app/visor/visor.component.ts ***!
  \******************************************/
/*! exports provided: VisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisorComponent", function() { return VisorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _interfaces_ubicacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/ubicacion */ "iOL+");
/* harmony import */ var _models_componente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/componente */ "vxqu");
/* harmony import */ var _models_modelo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/modelo */ "vzRv");
/* harmony import */ var _models_multimedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/multimedia */ "nHuG");
/* harmony import */ var _models_marcador__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/marcador */ "UaPw");
/* harmony import */ var _service_ubicacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/ubicacion.service */ "VioV");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _service_visor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/visor.service */ "H/Kn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "RVQx");
/* harmony import */ var _selector_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selector/selector.component */ "ZUqc");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
















function VisorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VisorComponent_nav_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisorComponent_nav_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); return _r7.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx_r1.isCollapsed);
} }
function VisorComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a-scene", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a-marker", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "a-entity", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "a-entity", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function VisorComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a-scene", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a-assets", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "video", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a-marker", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "a-video", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "a-entity", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function VisorComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a-scene", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a-assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a-marker", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "a-image", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "a-entity", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function VisorComponent_ngb_alert_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dismissible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("No se encontr\u00F3 ning\u00FAn museo cerca de su localidad. Sus coordenadas son ", ctx_r5.latitude, ", ", ctx_r5.longitude, "");
} }
function VisorComponent_ngb_alert_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 40, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dismissible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Museo detectado, bienvenido a ", ctx_r6.nombreMuseo, "");
} }
function VisorComponent_p_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 44);
} }
function VisorComponent_p_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 45);
} }
function VisorComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Acciones disponibles: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VisorComponent_p_16_span_2_Template, 1, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VisorComponent_p_16_span_3_Template, 1, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.resize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.rotate);
} }
function VisorComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.componentDescription);
} }
class VisorComponent {
    constructor(ubicacionService, cookieService, visorService) {
        this.ubicacionService = ubicacionService;
        this.cookieService = cookieService;
        this.visorService = visorService;
        this.AFRAME = window.AFRAME;
        this.isTest = true;
        this.secondTime = false;
        // COLLAPSE AL DESPLEGAR COMPONENTE
        this.isCollapsed = true;
        this.componentDescription = '';
        this.rotate = false;
        this.resize = false;
        this.componentes = [];
        this.urlModelo = '../../assets/modelos/plato.glb';
        this.urlTarget = '../../assets/usr/marcadores/hiro.patt';
        this.urlVideo = '../../assets/usr/videos/prueba.mp4';
        this.urlImagen = '../../assets/usr/imagenes/example.png';
        this.latitude = 0;
        this.longitude = 0;
        this.idMuseo = 0;
        this.nombreMuseo = '';
        this.isModel = false;
        this.isVideo = false;
        this.isImage = false;
        this.hasComponentes = false;
        this.isLoading = false;
    }
    ngAfterViewInit() { }
    ngOnInit() {
        this.getLocation();
        this.setVideo();
    }
    getLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!navigator.geolocation) {
                console.log('No es soportado por el navegador');
                alert('La geolocalización no es soportada por este navegador o dispositivo');
            }
            else {
                navigator.geolocation.getCurrentPosition((position) => {
                    console.log(`lat: ${position.coords.latitude}, long: ${position.coords.longitude}`);
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                    // alert(this.latitude + ' ' +  this.longitude);
                    this.getMuseo(this.latitude, this.longitude);
                });
            }
        });
    }
    getMuseo(latitude, longitud) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let ubicacion = new _interfaces_ubicacion__WEBPACK_IMPORTED_MODULE_2__["Ubicacion"](latitude, longitud);
            this.ubicacionService.getMuseo(ubicacion)
                .subscribe((museo) => {
                this.cookieService.set('idMuseo', museo.idMuseo.toString());
                this.idMuseo = museo.idMuseo;
                this.nombreMuseo = museo.nameMuseo;
                // alert(this.idMuseo + ' ' + museo.idMuseo);
            }, (error) => {
                if (error.error instanceof ErrorEvent) {
                    console.log('Error Event');
                }
                else {
                    console.log(`error status : ${error.status} ${error.statusText}`);
                    switch (error.status) {
                        case 404:
                            // alert('No se encontró ningún museo cerca de su localidad');
                            console.log('No se encontró ningún museo cerca de su localidad');
                            break;
                    }
                }
            });
        });
    }
    getComponente(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // alert("Grupo"+id);
            this.visorService.getComponentesByGrupo(id)
                .subscribe((componentes) => {
                this.componentes = [];
                componentes.forEach((value) => {
                    var c = new _models_componente__WEBPACK_IMPORTED_MODULE_3__["Componente"](value.nombre, value.urlImagen, value.descripcion, value.componentType, value.hasTarget, value.hasDescripcion);
                    if (value.modelo != null) {
                        var m = new _models_modelo__WEBPACK_IMPORTED_MODULE_4__["Modelo"](value.modelo.nombre, value.modelo.urlModelo, value.modelo.nombreAnimacion, value.modelo.hasRotation, value.modelo.hasMovement, value.modelo.hasResize, value.modelo.texturaPath);
                        m.IdModelo = value.modelo.idModelo;
                        c.Modelo = m;
                    }
                    else if (value.multimedia != null) {
                        var mult = new _models_multimedia__WEBPACK_IMPORTED_MODULE_5__["Multimedia"](value.multimedia.nombre, value.multimedia.urlUbicacion, value.multimedia.multimediaType);
                        mult.IdMultimedia = value.multimedia.idMultimedia;
                        c.Multimedia = mult;
                    }
                    if (value.target != null) {
                        var target = new _models_marcador__WEBPACK_IMPORTED_MODULE_6__["Marcador"](value.target.nombre, value.target.urlTarget);
                        target.IdMarcador = value.target.idTarget;
                        c.Target = target;
                    }
                    c.IdComponente = value.idComponente;
                    this.componentes.push(c);
                });
                this.componentes.length > 0 ? this.hasComponentes = true : this.hasComponentes = false;
            }, (error) => {
                if (error.error instanceof ErrorEvent) {
                    console.log('Error Event');
                }
                else {
                    console.log(`error status : ${error.status} ${error.statusText}`);
                    switch (error.status) {
                        case 404:
                            console.log('No se encontró ningún componente registrado');
                            this.hasComponentes = false;
                            break;
                    }
                }
            });
        });
    }
    showComponent(componente) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*
            if(componente.Target != null){
              this.setMarker(componente.Target.UrlMarcador);
              alert(componente.Target.UrlMarcador);
            }*/
            if (componente.Modelo != null) {
                // alert('Cargando modelo');
                console.log('Cargando modelo');
                this.isLoading = true;
                this.isImage = false;
                this.isVideo = false;
                this.isModel = true;
                setTimeout(() => {
                    this.setModelo(componente.Modelo.UrlModelo);
                    this.setMovement(componente.Modelo.HasRotation, componente.Modelo.HasResize);
                    // alert('Modelo cargado');
                    console.log('modelo cargado');
                    this.isLoading = false;
                    this.isCollapsed = false;
                    this.componentDescription = componente.DescripcionComponente;
                }, 5000);
            }
            if (componente.Multimedia != null) {
                if (componente.Multimedia.TipoMultimedia == 'VIDEO') {
                    // alert('Cargando video');
                    console.log('Cargando video');
                    this.isLoading = true;
                    this.isImage = false;
                    this.isModel = false;
                    this.isVideo = true;
                    /*
                    setTimeout(() => {
                      this.setVideoUrl(componente.Multimedia!.UrlMultimedia);
                    },8000);*/
                    setTimeout(() => {
                        //this.setVideo();
                        // alert('Video cargado');
                        console.log('video cargado');
                        this.isLoading = false;
                        this.isCollapsed = false;
                        this.componentDescription = componente.DescripcionComponente;
                    }, 5000);
                }
                else if (componente.Multimedia.TipoMultimedia == 'IMAGEN') {
                    // alert('Cargando imagen');
                    console.log('Cargando imagen');
                    this.isLoading = true;
                    this.isModel = false;
                    this.isVideo = false;
                    this.isImage = true;
                    setTimeout(() => {
                        this.setImagenUrl(componente.Multimedia.UrlMultimedia);
                        // alert('Imagen cargada');
                        console.log('imagen cargada');
                        this.isLoading = false;
                        this.isCollapsed = false;
                        this.componentDescription = componente.DescripcionComponente;
                    }, 5000);
                }
            }
        });
    }
    setVideo() {
        this.AFRAME.registerComponent('vidhandler', {
            init: function () {
                this.toggle = false;
                this.vid = document.querySelector("#vid"); //reference to the video
                this.vid.pause();
            },
            tick: function () {
                this.marker = document.querySelector("a-marker");
                if (this.marker.object3D.visible == true) {
                    if (!this.toggle) {
                        this.toggle = true;
                        this.vid = document.querySelector("#vid");
                        this.vid.play();
                    }
                }
                else {
                    this.toggle = false;
                    this.vid = document.querySelector("#vid");
                    this.vid.pause();
                }
            }
        });
    }
    setMovement(rotation, resize) {
        this.rotate = false;
        this.resize = false;
        if (rotation) {
            this.rotate = true;
        }
        if (resize) {
            this.resize = true;
        }
        const ent = document.querySelector('a-entity');
        var objectoT = { rotation: this.rotate, resize: this.resize };
        ent.setAttribute('foo', objectoT);
        try {
            this.AFRAME.registerComponent('foo', {
                schema: {
                    rotation: { type: 'boolean' },
                    resize: { type: 'boolean' }
                },
                init: function () {
                    var element = document.querySelector('body');
                    this.marker = document.querySelector('a-marker');
                    var model = document.querySelector('a-entity');
                    var hammertime = new Hammer(element);
                    var pinch = new Hammer.Pinch(); // Pinch is not by default in the recognisers
                    hammertime.add(pinch); // add it to the Manager instance
                    if (rotation) {
                        hammertime.on('pan', (ev) => {
                            let rotation = model.getAttribute('rotation');
                            switch (ev.direction) {
                                case 2:
                                    rotation.y = rotation.y + 4;
                                    break;
                                case 4:
                                    rotation.y = rotation.y - 4;
                                    break;
                                case 8:
                                    rotation.x = rotation.x + 4;
                                    break;
                                case 16:
                                    rotation.x = rotation.x - 4;
                                    break;
                                default:
                                    break;
                            }
                            model.setAttribute("rotation", rotation);
                        });
                    }
                    if (resize) {
                        hammertime.on("pinch", (ev) => {
                            let scale = { x: ev.scale, y: ev.scale, z: ev.scale };
                            model.setAttribute("scale", scale);
                        });
                    }
                }
            });
        }
        catch (e) {
            console.log("Si pasa");
            this.isLoading = false;
        }
    }
    setMarker(marcador) {
        var marker = document.getElementById('marker');
        marker.setAttribute('url', marcador);
    }
    setModelo(urlModelo) {
        var objeto = document.getElementById('objeto');
        objeto === null || objeto === void 0 ? void 0 : objeto.setAttribute('gltf-model', urlModelo);
    }
    setVideoUrl(urlVideo) {
        // Create a new asset
        var assets = document.getElementById('assetId');
        assets.removeChild(assets.childNodes[0]);
        var new_asset = document.createElement('video');
        new_asset.setAttribute('id', 'vid'); // Create a unique id for asset
        new_asset.setAttribute('src', urlVideo);
        // Append the new video to the a-assets, where a-assets id="assets-id"
        assets.appendChild(new_asset);
        var obj = document.getElementById('planeVid');
        obj.setAttribute('src', '#vid');
    }
    setImagenUrl(urlImagen) {
        var obj = document.getElementById('transpImage');
        obj.setAttribute('src', urlImagen);
    }
}
VisorComponent.ɵfac = function VisorComponent_Factory(t) { return new (t || VisorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_ubicacion_service__WEBPACK_IMPORTED_MODULE_7__["UbicacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_visor_service__WEBPACK_IMPORTED_MODULE_9__["VisorService"])); };
VisorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VisorComponent, selectors: [["app-visor"]], decls: 25, vars: 13, consts: [["class", "loading backg-charcoal80", 4, "ngIf"], ["id", "visor-navigation"], [3, "componentes", "idMuseo", "hasComponentes", "componenteUpdate", "componenteShow"], ["class", "buttons navbar p-3", 4, "ngIf"], ["class", "component-display", 4, "ngIf"], ["id", "visor-footer"], ["class", "msg-error p-2 col-11 mx-auto", "type", "custom", 3, "dismissible", 4, "ngIf"], ["class", "msg-ok p-2 col-11 mx-auto", "type", "custom", 3, "dismissible", 4, "ngIf"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "visor-footer-info", "row", "p-0"], [1, "row", "col", "my-auto", "p-3"], ["class", "font-sm m-0", 4, "ngIf"], [1, "btn", "btn-trans", "col-2", "px-0", "text-center", "text-white", 3, "click"], [1, "mdi", "mdi-lg", "mdi-close-thick"], ["id", "target-info", 1, "p-3", "text-center", "row"], [1, "col-4", "p-0", "my-auto"], ["src", "../../assets/usr/marcadores/hiro_marker.png", 1, "marker-img", "col-8", "p-0"], ["id", "component-info", "class", "p-3 bt-flash-dotted", 4, "ngIf"], [1, "loading", "backg-charcoal80"], ["src", "../../assets/gif/loading_splash.gif"], [1, "buttons", "navbar", "p-3"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "circle", "btn-dark", "float-left", "mr-3", 3, "click"], [1, "mdi", "mdi-information"], [1, "component-display"], ["embedded", "", "embedded", "", "arjs", "", "vr-mode-ui", "enabled: false", 2, "z-index", "-1"], ["id", "marker", "preset", "hiro"], ["id", "objeto", "position", "0 0 0", "scale", "0.5 0.5 0.5", "gltf-model", "", "foo", ""], ["camera", ""], ["embedded", "", "embedded", "", "vr-mode-ui", "enabled: false", "artoolkit", "sourceType: webcam; detectionMode: mono; maxDetectionRate: 30; canvasWidth:240; canvasHeight:180", 2, "z-index", "-1"], ["id", "assetId"], ["id", "vid", "src", "../../assets/usr/videos/hanal_pixan.mp4", "loop", "true"], ["id", "markervideo", "preset", "hiro"], ["id", "planeVid", "src", "#vid", "width", "2", "height", "2", "rotation", "-90 0 0", "material", "transparent:true; opacity: 0.8;", "vidhandler", ""], ["embedded", "", "arjs", "", "vr-mode-ui", "enabled: false"], ["src", ""], ["preset", "hiro"], ["id", "transpImage", "width", "1", "height", "1", "src", "", "rotation", "-90 0 0"], ["type", "custom", 1, "msg-error", "p-2", "col-11", "mx-auto", 3, "dismissible"], ["selfClosingAlert", ""], ["type", "custom", 1, "msg-ok", "p-2", "col-11", "mx-auto", 3, "dismissible"], [1, "font-sm", "m-0"], ["class", "mdi mdi-resize px-1", 4, "ngIf"], ["class", "mdi mdi-rotate-3d px-1", 4, "ngIf"], [1, "mdi", "mdi-resize", "px-1"], [1, "mdi", "mdi-rotate-3d", "px-1"], ["id", "component-info", 1, "p-3", "bt-flash-dotted"]], template: function VisorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisorComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-visor-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-visor-selector", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("componenteUpdate", function VisorComponent_Template_app_visor_selector_componenteUpdate_4_listener($event) { return ctx.getComponente($event); })("componenteShow", function VisorComponent_Template_app_visor_selector_componenteShow_4_listener($event) { return ctx.showComponent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, VisorComponent_nav_5_Template, 3, 1, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, VisorComponent_ng_container_6_Template, 5, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, VisorComponent_ng_container_7_Template, 7, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, VisorComponent_ng_container_8_Template, 7, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, VisorComponent_ngb_alert_10_Template, 3, 3, "ngb-alert", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, VisorComponent_ngb_alert_11_Template, 3, 2, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngbCollapseChange", function VisorComponent_Template_div_ngbCollapseChange_12_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, VisorComponent_p_16_Template, 4, 2, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisorComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); return _r7.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Marcador:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, VisorComponent_div_23_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("componentes", ctx.componentes)("idMuseo", ctx.idMuseo)("hasComponentes", ctx.hasComponentes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isModel || ctx.isVideo || ctx.isImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isVideo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.idMuseo || ctx.idMuseo == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.idMuseo && ctx.idMuseo != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.componentDescription);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _selector_selector_component__WEBPACK_IMPORTED_MODULE_12__["SelectorComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbAlert"]], styles: ["body[_ngcontent-%COMP%]{\r\n    background-image: url('jaguar_skin_violet.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]{background-color: #000 !important; text-decoration: underline}\r\n.nav-link[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%]:focus, .nav-link[_ngcontent-%COMP%]:hover{color: #fff}\r\n.nav-link[_ngcontent-%COMP%]:hover{font-weight: bold;}\r\n#visor-navigation[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.buttons[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 5em;\r\n    z-index: 10;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .modal-rainbow[_ngcontent-%COMP%]{\r\n    border: 5px solid transparent!important;\r\n    border-image-source: var(--gradientRainbow)!important;\r\n    border-image-slice: 1!important;\r\n    border-radius: 0!important;\r\n    background-color: var(--darks);\r\n    color: #fff;\r\n\r\n    \r\n}\r\n.modal-rainbow[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{border-bottom: unset; background-color: var(--charcoal);}\r\n.modal-rainbow[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{background-color: transparent}\r\n.modal-rainbow[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]{\r\n    border-top: unset;background-color: var(--charcoal);\r\n    border-top: 5px solid transparent;\r\n    border-image-source: var(--gradientRainbow);\r\n    border-image-slice: 1;\r\n}\r\n\r\n.selector-img[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n    width: var(--visor-img-w);\r\n    height: var(--visor-img-h);\r\n}\r\n.selector-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit: cover;width: var(--visor-img-w);height: var(--visor-img-h);}\r\n.selector-info[_ngcontent-%COMP%], .selector-background[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n.selector-background[_ngcontent-%COMP%]{\r\n    width: var(--visor-img-w);\r\n    height: var(--visor-img-h);\r\n    background-color: var(--darks);\r\n}\r\n.selector-info[_ngcontent-%COMP%]{}\r\n.selector-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    padding: .5rem; margin: 0; word-break: unset; overflow:hidden;\r\n    text-overflow: ellipsis; max-width: var(--visor-img-w); max-height: var(--visor-img-h);\r\n}\r\n.selected[_ngcontent-%COMP%]   .selector-background[_ngcontent-%COMP%], .selected[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border: 3px solid #fff}\r\n\r\n.component-display[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n#visor-footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{--bs-gutter-x: 0!important;}\r\n#visor-footer[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    max-height: 12rem;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    z-index: 20\r\n}\r\n.visor-footer-info[_ngcontent-%COMP%]{background-color: var(--darks);color: #fff;}\r\n#visor-footer[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border: unset!important;}\r\n#visor-footer[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{\r\n    background-color: var(--darks);\r\n    border-radius: 0;\r\n    color: #fff;\r\n}\r\n.marker-img[_ngcontent-%COMP%]{\r\n    width: 15vw;\r\n    height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc29yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDO0lBQ0ksK0NBQWdFO0lBQ2hFLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDO0FBQ0Esd0RBQXdELGlDQUFpQyxFQUFFLDBCQUEwQjtBQUNySCwyQ0FBMkMsV0FBVztBQUN0RCxnQkFBZ0IsaUJBQWlCLENBQUM7QUFDbEM7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87QUFDWDtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7SUFDSSxlQUFlO0FBQ25CO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksdUNBQXVDO0lBQ3ZDLHFEQUFxRDtJQUNyRCwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixXQUFXOztJQUVYOzs7Ozs7OztvQkFRZ0I7QUFDcEI7QUFDQSw2QkFBNkIsb0JBQW9CLEVBQUUsaUNBQWlDLENBQUM7QUFDckYsMkJBQTJCLDZCQUE2QjtBQUN4RDtJQUNJLGlCQUFpQixDQUFDLGlDQUFpQztJQUNuRCxpQ0FBaUM7SUFDakMsMkNBQTJDO0lBQzNDLHFCQUFxQjtBQUN6QjtBQUVBLHdDQUF3QztBQUN4QztJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7QUFDQSxrQkFBa0IsaUJBQWlCLENBQUMseUJBQXlCLENBQUMsMEJBQTBCLENBQUM7QUFDekY7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsOEJBQThCO0FBQ2xDO0FBQ0EsZUFBZTtBQUNmO0lBQ0ksY0FBYyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxlQUFlO0lBQzdELHVCQUF1QixFQUFFLDZCQUE2QixFQUFFLDhCQUE4QjtBQUMxRjtBQUNBLDhDQUE4QyxzQkFBc0I7QUFFcEUseUJBQXlCO0FBQ3pCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFFQSxnREFBZ0Q7QUFDaEQsbUJBQW1CLDBCQUEwQixDQUFDO0FBQzlDO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQSxtQkFBbUIsOEJBQThCLENBQUMsV0FBVyxDQUFDO0FBQzlELG9CQUFvQix1QkFBdUIsQ0FBQztBQUM1QztJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJ2aXNvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypCb3RvbmVzIGRlIG5hdmVnYWNpw7NuIGRlbCB2aXNvciovXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2phZ3Vhcl9za2luX3Zpb2xldC5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lfVxyXG4ubmF2LWxpbmssLm5hdi1saW5rOmZvY3VzLCAubmF2LWxpbms6aG92ZXJ7Y29sb3I6ICNmZmZ9XHJcbi5uYXYtbGluazpob3Zlcntmb250LXdlaWdodDogYm9sZDt9XHJcbiN2aXNvci1uYXZpZ2F0aW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4uYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuLyotLS0tLS0qL1xyXG4uY2xpY2thYmxle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKk9WRVJSSURFIE1PREFMKi9cclxuLm1vZGFsLWNvbnRlbnQgLm1vZGFsLXJhaW5ib3d7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItaW1hZ2Utc291cmNlOiB2YXIoLS1ncmFkaWVudFJhaW5ib3cpIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtzKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIC8qYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHZhcigtLWNoYXJjb2FsKSx2YXIoLS1jaGFyY29hbCkpIHBhZGRpbmctYm94LCAvKnRoaXMgaXMgeW91ciBncmV5IGJhY2tncm91bmQvXHJcbiAgICAgICAgICAgIHZhcigtLWdyYWRpZW50UmFpbmJvdykgYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNzVweCAwOyovXHJcbn1cclxuLm1vZGFsLXJhaW5ib3cgLm1vZGFsLWhlYWRlcntib3JkZXItYm90dG9tOiB1bnNldDsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO31cclxuLm1vZGFsLXJhaW5ib3cgLm1vZGFsLWJvZHl7YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnR9XHJcbi5tb2RhbC1yYWluYm93IC5tb2RhbC1mb290ZXJ7XHJcbiAgICBib3JkZXItdG9wOiB1bnNldDtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItaW1hZ2Utc291cmNlOiB2YXIoLS1ncmFkaWVudFJhaW5ib3cpO1xyXG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xyXG59XHJcblxyXG4vKk1PREFMLVNFQ0NJT04gREUgR1JVUE9TIFkgQ09NUE9ORU5URVMqL1xyXG4uc2VsZWN0b3ItaW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IHZhcigtLXZpc29yLWltZy13KTtcclxuICAgIGhlaWdodDogdmFyKC0tdmlzb3ItaW1nLWgpO1xyXG59XHJcbi5zZWxlY3Rvci1pbWcgaW1ne29iamVjdC1maXQ6IGNvdmVyO3dpZHRoOiB2YXIoLS12aXNvci1pbWctdyk7aGVpZ2h0OiB2YXIoLS12aXNvci1pbWctaCk7fVxyXG4uc2VsZWN0b3ItaW5mbywgLnNlbGVjdG9yLWJhY2tncm91bmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5zZWxlY3Rvci1iYWNrZ3JvdW5ke1xyXG4gICAgd2lkdGg6IHZhcigtLXZpc29yLWltZy13KTtcclxuICAgIGhlaWdodDogdmFyKC0tdmlzb3ItaW1nLWgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3MpO1xyXG59XHJcbi5zZWxlY3Rvci1pbmZve31cclxuLnNlbGVjdG9yLWluZm8gcHtcclxuICAgIHBhZGRpbmc6IC41cmVtOyBtYXJnaW46IDA7IHdvcmQtYnJlYWs6IHVuc2V0OyBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgbWF4LXdpZHRoOiB2YXIoLS12aXNvci1pbWctdyk7IG1heC1oZWlnaHQ6IHZhcigtLXZpc29yLWltZy1oKTtcclxufVxyXG4uc2VsZWN0ZWQgLnNlbGVjdG9yLWJhY2tncm91bmQsIC5zZWxlY3RlZCBpbWd7Ym9yZGVyOiAzcHggc29saWQgI2ZmZn1cclxuXHJcbi8qQ09OVEVORURPUiBERUwgQS1TQ0VORSovXHJcbi5jb21wb25lbnQtZGlzcGxheXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLypGT09URVIgLSBpbmZvcm1hY2lvbiBhZGljaW9uYWwgZGUgY29tcG9uZW50ZXMqL1xyXG4jdmlzb3ItZm9vdGVyIC5yb3d7LS1icy1ndXR0ZXIteDogMCFpbXBvcnRhbnQ7fVxyXG4jdmlzb3ItZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1heC1oZWlnaHQ6IDEycmVtO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMjBcclxufVxyXG4udmlzb3ItZm9vdGVyLWluZm97YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3MpO2NvbG9yOiAjZmZmO31cclxuI3Zpc29yLWZvb3RlciAuY2FyZHtib3JkZXI6IHVuc2V0IWltcG9ydGFudDt9XHJcbiN2aXNvci1mb290ZXIgLmNhcmQtYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubWFya2VyLWltZ3tcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-visor',
                templateUrl: './visor.component.html',
                styleUrls: ['./visor.component.css']
            }]
    }], function () { return [{ type: _service_ubicacion_service__WEBPACK_IMPORTED_MODULE_7__["UbicacionService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }, { type: _service_visor_service__WEBPACK_IMPORTED_MODULE_9__["VisorService"] }]; }, null); })();


/***/ }),

/***/ "a/hz":
/*!****************************************!*\
  !*** ./src/app/models/modelo-admin.ts ***!
  \****************************************/
/*! exports provided: ModeloAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeloAdmin", function() { return ModeloAdmin; });
class ModeloAdmin {
    constructor(nombre, urlModelo, nombreAnimacion, hasRotation, hasMovement, hasResize, texturaPath) {
        this.nombre = nombre;
        this.urlModelo = urlModelo;
        this.nombreAnimacion = nombreAnimacion;
        this.hasRotation = hasRotation;
        this.hasMovement = hasMovement;
        this.hasResize = hasResize;
        this.texturaPath = texturaPath;
    }
    get Nombre() {
        return this.nombre;
    }
    get UrlModelo() {
        return this.urlModelo;
    }
    get NombreAnimacion() {
        return this.nombreAnimacion;
    }
    get HasRotation() {
        return this.hasRotation;
    }
    get HasMovement() {
        return this.hasMovement;
    }
    get HasResize() {
        return this.hasResize;
    }
    get TexturaPath() {
        return this.texturaPath;
    }
    get IdModelo() {
        return this.idModelo;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set UrlModelo(value) {
        this.urlModelo = value;
    }
    set NombreAnimacion(value) {
        this.nombreAnimacion = value;
    }
    set HasRotation(value) {
        this.hasRotation = value;
    }
    set HasMovement(value) {
        this.hasMovement = value;
    }
    set HasResize(value) {
        this.hasResize = value;
    }
    set TexturaPath(value) {
        this.texturaPath = value;
    }
    set IdModelo(value) {
        this.idModelo = value;
    }
}


/***/ }),

/***/ "bC+/":
/*!***********************************************!*\
  !*** ./src/app/404/pageNotFound.component.ts ***!
  \***********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 7, vars: 0, consts: [["id", "404-content", 1, "text-center", 2, "height", "100%", "width", "100%"], [1, "p-3"], [1, "text-purple"], ["width", "260", "src", "https://i.pinimg.com/originals/82/8e/ed/828eedcce8128fdd93bd1f23f9af8ba1.gif"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Perdona, no podemos encontrar la ruta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './pageNotFound.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "c0pl":
/*!***********************************!*\
  !*** ./src/app/session.module.ts ***!
  \***********************************/
/*! exports provided: SessionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _session_session_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session/session.component */ "qTzr");
/* harmony import */ var _session_auth_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session/auth/login.component */ "UFx+");
/* harmony import */ var _session_auth_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session/auth/registro.component */ "0ipe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");












class SessionModule {
}
SessionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SessionModule });
SessionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SessionModule_Factory(t) { return new (t || SessionModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SessionModule, { declarations: [_session_session_component__WEBPACK_IMPORTED_MODULE_4__["SessionComponent"],
        _session_auth_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _session_auth_registro_component__WEBPACK_IMPORTED_MODULE_6__["RegistroComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _session_session_component__WEBPACK_IMPORTED_MODULE_4__["SessionComponent"],
                    _session_auth_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _session_auth_registro_component__WEBPACK_IMPORTED_MODULE_6__["RegistroComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "eKhR":
/*!**********************************************!*\
  !*** ./src/app/models/componente-request.ts ***!
  \**********************************************/
/*! exports provided: ComponenteRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponenteRequest", function() { return ComponenteRequest; });
class ComponenteRequest {
    constructor(nombre, idGrupo, descripcion, idMarcador, tipoComponente, idElemento, urlImagen, idMuseo, hasTarget, hasDescription) {
        this.nombre = nombre;
        this.idGrupo = idGrupo;
        this.descripcion = descripcion;
        this.idMarcador = idMarcador;
        this.tipoComponente = tipoComponente;
        this.idElemento = idElemento;
        this.urlImagen = urlImagen;
        this.idMuseo = idMuseo;
        this.hasTarget = hasTarget;
        this.hasDescription = hasDescription;
    }
    get Nombre() {
        return this.nombre;
    }
    get UrlImagen() {
        return this.urlImagen;
    }
    get Descripcion() {
        return this.descripcion;
    }
    get HasTarget() {
        return this.hasTarget;
    }
    get TipoComponente() {
        return this.tipoComponente;
    }
    get HasDescription() {
        return this.hasDescription;
    }
    get IdElemento() {
        return this.idElemento;
    }
    get IdMarcador() {
        return this.idMarcador;
    }
    get IdGrupo() {
        return this.idGrupo;
    }
    get IdMuseo() {
        return this.idMuseo;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set UrlImagen(value) {
        this.urlImagen = value;
    }
    set Descripcion(value) {
        this.descripcion = value;
    }
    set HasTarget(value) {
        this.hasTarget = value;
    }
    set TipoComponente(value) {
        this.tipoComponente = value;
    }
    set HasDescription(value) {
        this.hasDescription = value;
    }
    set IdElemento(value) {
        this.idElemento = value;
    }
    set IdMarcador(value) {
        this.idMarcador = value;
    }
    set IdGrupo(value) {
        this.idGrupo = value;
    }
    set IdMuseo(value) {
        this.idMuseo = value;
    }
}


/***/ }),

/***/ "f6Yx":
/*!*********************************************!*\
  !*** ./src/app/models/multimedia-update.ts ***!
  \*********************************************/
/*! exports provided: MultimediaUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaUpdate", function() { return MultimediaUpdate; });
class MultimediaUpdate {
    constructor(nombre, urlUbicacion, tipo) {
        this.nombre = nombre;
        this.urlUbicacion = urlUbicacion;
        this.tipo = tipo;
    }
    get Nombre() {
        return this.nombre;
    }
    get UrlUbicacion() {
        return this.urlUbicacion;
    }
    get Tipo() {
        return this.tipo;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set UrlUbicacion(value) {
        this.UrlUbicacion = value;
    }
    set Tipo(value) {
        this.tipo = value;
    }
}


/***/ }),

/***/ "fSXp":
/*!****************************************************!*\
  !*** ./src/app/commons/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/token.service */ "/QNy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function HeaderComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.isMenuCollapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Panel administrador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_15_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.isMenuCollapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mi perfil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_15_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); ctx_r8.isMenuCollapsed = true; return ctx_r8.openMenuModal(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cerrar sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.userName, " ");
} }
function HeaderComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cierre de sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_16_Template_button_click_4_listener() { const modal_r9 = ctx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00BFEst\u00E1 seguro de que desea cerrar sesi\u00F3n?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_16_Template_button_click_12_listener() { const modal_r9 = ctx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_16_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onLogOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cerrar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(modalService, tokenService, location) {
        this.modalService = modalService;
        this.tokenService = tokenService;
        this.location = location;
        this.isMenuCollapsed = true;
        this.isLogged = false;
        this.isVisor = false;
        this.userName = '';
        this.grupos = [];
    }
    openMenuModal(content) {
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    ngOnInit() {
        this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
        this.userName = this.tokenService.getUserName();
    }
    onLogOut() {
        this.tokenService.logOut();
        window.location.reload();
    }
    getGrupo() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { grupos: "grupos" }, decls: 18, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light"], ["href", "/", 1, "navbar-brand"], ["id", "jaguar_logo", "src", "../../../assets/img/jaguAR_logo_letras.png"], ["type", "button", 1, "navbar-toggler", "ms-auto", "me-3", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "me-auto"], [1, "nav-item", "text-center"], ["routerLink", "inicio", 1, "nav-link", 3, "click"], ["routerLink", "visor", 1, "nav-link", 3, "click"], ["class", "nav-item text-center", 4, "ngIf"], [1, "navbar-nav", "text-center", "ms-auto", "me-3"], ["class", "nav-item", "ngbDropdown", "", "display", "dynamic", "placement", "bottom-right", 4, "ngIf"], ["content", ""], ["routerLink", "admin", 1, "nav-link", 3, "click"], ["ngbDropdown", "", "display", "dynamic", "placement", "bottom-right", 1, "nav-item"], ["tabindex", "0", "id", "dropdownSession", "ngbDropdownToggle", "", "role", "button", 1, "nav-link"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownSession", 1, "dropdown-menu"], ["routerLink", "perfil", 1, "btn", "btn-trans", "nav-link", 3, "click"], [1, "mdi", "mdi-account"], [1, "btn", "btn-trans", "nav-link", 3, "click"], [1, "mdi", "mdi-logout"], [1, "modal-header", "pb-2"], [1, "col-2"], [1, "modal-title", "text-center", "col"], ["type", "button", "aria-label", "Close", 1, "close", "col-2", "my-auto", 3, "click"], ["aria-hidden", "true", 1, "mdi", "mdi-close-thick"], [1, "modal-body", "p-3"], [1, "modal-footer"], [1, "row", "col-12"], [1, "col-6"], [1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "btn", "btn-yellow", "w-100", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.isMenuCollapsed = !ctx.isMenuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_8_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Visor AR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_li_13_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_li_15_Template, 10, 1, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_ng_template_16_Template, 17, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"]], styles: [".navbar{\r\n    top: 0;\r\n    width: 100%;\r\n    height: var(--header_height);\r\n}\r\n.navbar-light{\r\n    background-color: var(--almost-white);\r\n}\r\n#jaguar_logo{width: 10rem; height: auto; margin: auto;}\r\n@media (max-width: 991px) {/*bootstrap lg - small pc*/\r\n.navbar-collapse{background-color: var(--sand)}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksTUFBTTtJQUNOLFdBQVc7SUFDWCw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHFDQUFxQztBQUN6QztBQUNBLGFBQWEsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7QUFDdEQsMkJBQTJCLDBCQUEwQjtBQUNyRCxpQkFBaUIsNkJBQTZCO0FBQzlDIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXJfaGVpZ2h0KTtcclxufVxyXG4ubmF2YmFyLWxpZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxtb3N0LXdoaXRlKTtcclxufVxyXG4jamFndWFyX2xvZ297d2lkdGg6IDEwcmVtOyBoZWlnaHQ6IGF1dG87IG1hcmdpbjogYXV0bzt9XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgey8qYm9vdHN0cmFwIGxnIC0gc21hbGwgcGMqL1xyXG4ubmF2YmFyLWNvbGxhcHNle2JhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmQpfVxyXG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, { grupos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "iOL+":
/*!*****************************************!*\
  !*** ./src/app/interfaces/ubicacion.ts ***!
  \*****************************************/
/*! exports provided: Ubicacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ubicacion", function() { return Ubicacion; });
class Ubicacion {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
        this.latitud = lat;
        this.longitud = lon;
    }
    get Latitud() {
        return this.latitud;
    }
    get Longitud() {
        return this.longitud;
    }
    set Latitud(lat) {
        this.latitud = lat;
    }
    set Longitud(lon) {
        this.longitud = lon;
    }
}


/***/ }),

/***/ "jBZP":
/*!*******************************************************************!*\
  !*** ./src/app/admin/entities/multimedia/multimedia.component.ts ***!
  \*******************************************************************/
/*! exports provided: MultimediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaComponent", function() { return MultimediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_models_multimedia_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/multimedia-admin */ "ZOS2");
/* harmony import */ var src_app_models_multimedia_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/multimedia-request */ "ICfN");
/* harmony import */ var src_app_models_multimedia_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/multimedia-update */ "f6Yx");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var src_app_service_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/token.service */ "/QNy");
/* harmony import */ var src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/cuenta.service */ "rPZ9");
/* harmony import */ var src_app_service_file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/file.service */ "shLW");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_service_multimedia_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/multimedia.service */ "LAN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
















function MultimediaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultimediaComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultimediaComponent_tr_20_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const mult_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx_r10.editModal(_r7, mult_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultimediaComponent_tr_20_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const mult_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx_r12.deleteModal(_r3, mult_r9.IdMultimedia); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mult_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mult_r9.Nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mult_r9.UrlUbicacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mult_r9.MultimediaType);
} }
function MultimediaComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No se encontraron registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultimediaComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultimediaComponent_ng_template_23_Template_button_click_4_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00BFEst\u00E1 seguro de que desea eliminar este archivo?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultimediaComponent_ng_template_23_Template_button_click_12_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultimediaComponent_ng_template_23_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Eliminar archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultimediaComponent_ng_template_25_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultimediaComponent_ng_template_25_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultimediaComponent_ng_template_25_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultimediaComponent_ng_template_25_div_15_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.errors == null ? null : _r21.errors.required);
} }
function MultimediaComponent_ng_template_25_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r28.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r28.name);
} }
function MultimediaComponent_ng_template_25_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultimediaComponent_ng_template_25_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultimediaComponent_ng_template_25_div_24_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r23.errors == null ? null : _r23.errors.required);
} }
function MultimediaComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultimediaComponent_ng_template_25_div_0_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nuevo archivo multimedia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultimediaComponent_ng_template_25_Template_button_click_5_listener() { const modal_r18 = ctx.$implicit; return modal_r18.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MultimediaComponent_ng_template_25_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onRegister(_r20.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre del archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MultimediaComponent_ng_template_25_div_15_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tipo Archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Seleccione el tipo de archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MultimediaComponent_ng_template_25_option_23_Template, 2, 2, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MultimediaComponent_ng_template_25_div_24_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MultimediaComponent_ng_template_25_Template_input_change_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultimediaComponent_ng_template_25_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return _r26.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultimediaComponent_ng_template_25_Template_button_click_36_listener() { const modal_r18 = ctx.$implicit; return modal_r18.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Crear archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.touched && _r21.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.componentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r23.touched && _r23.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.fileName || "Ning\u00FAn archivo seleccionado.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r20.valid || !ctx_r6.fileMultimedia);
} }
function MultimediaComponent_ng_template_27_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultimediaComponent_ng_template_27_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultimediaComponent_ng_template_27_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultimediaComponent_ng_template_27_div_13_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.nombre.errors == null ? null : ctx_r38.nombre.errors.required);
} }
function MultimediaComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultimediaComponent_ng_template_27_div_0_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Editar archivo multimedia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultimediaComponent_ng_template_27_Template_button_click_5_listener() { const modal_r36 = ctx.$implicit; return modal_r36.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MultimediaComponent_ng_template_27_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre del archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MultimediaComponent_ng_template_27_div_13_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultimediaComponent_ng_template_27_Template_button_click_20_listener() { const modal_r36 = ctx.$implicit; return modal_r36.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Guardar archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r8.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.nombre.touched && ctx_r8.nombre.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r8.isValid());
} }
class MultimediaComponent {
    constructor(modalService, tokenService, cuentaService, fileService, toastService, multimediaService) {
        this.modalService = modalService;
        this.tokenService = tokenService;
        this.cuentaService = cuentaService;
        this.fileService = fileService;
        this.toastService = toastService;
        this.multimediaService = multimediaService;
        this.fileName = '';
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            idMultimedia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            urlImagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.componentType = [
            { value: "VIDEO", name: "Video" },
            { value: "IMAGEN", name: "Imagen" }
        ];
        this.multimedias = [];
        this.deleteMultimedia = 0;
        this.errMsj = '';
        this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        this.lengthOfCode = 5;
        this.isLoading = false;
    }
    ngOnInit() {
        this.loadMuseo();
    }
    loadMultimedia(idMuseo) {
        this.multimediaService.getAllByRecinto(idMuseo)
            .subscribe((mult) => {
            this.multimedias = [];
            mult.forEach(element => {
                var mt = new src_app_models_multimedia_admin__WEBPACK_IMPORTED_MODULE_2__["MultimediaAdmin"](element.nombre, element.urlUbicacion, element.multimediaType);
                mt.IdMultimedia = element.idMultimedia;
                this.multimedias.push(mt);
            });
        }, (error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
        });
    }
    loadMuseo() {
        if (!this.tokenService.getIdMuseo() && this.tokenService.getToken()) {
            this.cuentaService.getMuseo(this.tokenService.getUserName())
                .subscribe((museo) => {
                this.tokenService.setIdMuseo(+museo.idMuseo);
                this.loadMultimedia(+this.tokenService.getIdMuseo());
            }, (error) => {
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
                setTimeout(() => {
                    window.location.href = '/admin';
                }, 2000);
            });
        }
        else if (!this.tokenService.getToken()) {
            window.location.href = '/admin';
        }
        else if (this.tokenService.getIdMuseo()) {
            this.loadMultimedia(+(this.tokenService.getIdMuseo()));
        }
    }
    openModal(content) {
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    editModal(content, multimedia) {
        var _a, _b, _c, _d;
        (_a = this.editForm.get('nombre')) === null || _a === void 0 ? void 0 : _a.setValue(multimedia.Nombre);
        (_b = this.editForm.get('tipo')) === null || _b === void 0 ? void 0 : _b.setValue(multimedia.MultimediaType);
        (_c = this.editForm.get('idMultimedia')) === null || _c === void 0 ? void 0 : _c.setValue(multimedia.IdMultimedia);
        (_d = this.editForm.get('urlImagen')) === null || _d === void 0 ? void 0 : _d.setValue(multimedia.UrlUbicacion);
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    deleteModal(content, idMultimedia) {
        this.deleteMultimedia = idMultimedia;
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    onRegister(value) {
        let nombre = value.nombre;
        let tipo = value.componentTipe;
        this.isLoading = true;
        if (this.fileMultimedia) {
            let string = this.makeRandom(this.lengthOfCode, this.possible);
            let nameFile = this.tokenService.getIdMuseo() + "_" + string + "_" + this.fileName;
            let finalName = "";
            let multiName = "";
            if (tipo === 'VIDEO') {
                finalName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].videosExternoFolder + nameFile;
                multiName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].videosFolder + nameFile;
            }
            else {
                finalName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].imagenesExternoFolder + nameFile;
                multiName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].imagenesFolder + nameFile;
            }
            this.fileService.upload(this.fileMultimedia, multiName)
                .subscribe((response) => {
                var mod = new src_app_models_multimedia_request__WEBPACK_IMPORTED_MODULE_3__["MultimediaRequest"](nombre, finalName, tipo, +this.tokenService.getIdMuseo());
                this.multimediaService.save(mod)
                    .subscribe((multimedia) => {
                    this.isLoading = false;
                    this.toastService.success("El archivo se ha almacenado con éxito", 'OK', {
                        timeOut: 3000, positionClass: 'toast-top-center'
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }, (error) => {
                    this.isLoading = false;
                    this.errMsj = error.error.message;
                    console.log(this.errMsj);
                    this.toastService.error("Ocurrió un error al registrar el archivo", 'Fail', {
                        timeOut: 3000, positionClass: 'toast-top-center',
                    });
                });
            }, (error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error("Ocurrió un error al registrar el archivo", 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
            });
        }
        else {
            this.toastService.error("No se ha seleccionado un archivo para subir", 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        }
    }
    onFileSelected(event) {
        let archivo = event.target.files[0];
        if (archivo) {
            this.fileMultimedia = archivo;
            this.fileName = archivo.name;
        }
    }
    onEdit() {
        this.isLoading = true;
        let nombre = this.nombre.value;
        let tipo = this.tipo.value;
        let urlMultimedia = this.urlImagen.value;
        let idMultimedia = this.idMultimedia.value;
        var mod = new src_app_models_multimedia_update__WEBPACK_IMPORTED_MODULE_4__["MultimediaUpdate"](nombre, urlMultimedia, tipo);
        this.isLoading = true;
        this.multimediaService.update(idMultimedia, mod)
            .subscribe((modelo) => {
            this.isLoading = false;
            this.toastService.success("El archivo se ha actualizado con éxito", 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center'
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }, (error) => {
            this.isLoading = false;
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error("Ocurrió un error al actualizar el archivo", 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    onDelete() {
        if (this.deleteMultimedia != 0) {
            this.isLoading = true;
            this.multimediaService.delete(this.deleteMultimedia, +this.tokenService.getIdMuseo())
                .subscribe((response) => {
                this.isLoading = false;
                this.toastService.success(response.message, 'OK', {
                    timeOut: 3000, positionClass: 'toast-top-center'
                });
                this.deleteMultimedia = 0;
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }, (error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.deleteMultimedia = 0;
                this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
            });
        }
    }
    isValid() {
        return this.editForm.valid;
    }
    makeRandom(lengthOfCode, possible) {
        let text = "";
        for (let i = 0; i < lengthOfCode; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    get nombre() {
        return this.editForm.get('nombre');
    }
    get tipo() {
        return this.editForm.get('tipo');
    }
    get idMultimedia() {
        return this.editForm.get('idMultimedia');
    }
    get urlImagen() {
        return this.editForm.get('urlImagen');
    }
}
MultimediaComponent.ɵfac = function MultimediaComponent_Factory(t) { return new (t || MultimediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_8__["CuentaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_file_service__WEBPACK_IMPORTED_MODULE_9__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_multimedia_service__WEBPACK_IMPORTED_MODULE_11__["MultimediaService"])); };
MultimediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultimediaComponent, selectors: [["app-multimedia"]], decls: 29, vars: 3, consts: [["class", "loading", 4, "ngIf"], [1, "container-fluid", "px-5", "py-3"], [1, "row", "mb-4"], [1, "col", "text-white"], [1, "btn", "btn-forest", "col-3", 3, "click"], [1, "table-container"], [1, "table", "table-light", "table-hover", "text-center"], [1, "thead-aqua"], [4, "ngFor", "ngForOf"], ["colspan", "12", 4, "ngIf"], ["confirmDelete", ""], ["newEntityModal", ""], ["EditEntityModal", ""], [1, "loading"], ["src", "../../../../assets/gif/loading_splash.gif"], ["data-toggle", "tooltip", "ngbPopover", "Editar", "triggers", "mouseenter:mouseleave", 1, "icon", "mdi", "mdi-pencil", "text-yellow", 3, "click"], ["data-toggle", "tooltip", "title", "Eliminar", 1, "icon", "mdi", "mdi-trash-can", "text-red", 3, "click"], ["colspan", "12"], [1, "modal-header", "pb-2"], [1, "col-2"], [1, "modal-title", "text-center", "col"], ["type", "button", "aria-label", "Close", 1, "close", "col-2", "my-auto", 3, "click"], ["aria-hidden", "true", 1, "mdi", "mdi-close-thick"], [1, "modal-body", "p-3"], [1, "modal-footer"], [1, "row", "col-12"], [1, "col-6"], [1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "btn", "btn-yellow", "w-100", 3, "click"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "w-100", "mb-2"], ["for", "multimedia_name", 1, ""], ["ngModel", "", "name", "nombre", "id", "multimedia_name", "type", "text", "placeholder", "Ingrese el nombre del archivo", "required", "", 1, "form-control"], ["nombre", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "w-100", "mb-4"], ["for", "group_description", 1, ""], ["ngModel", "", "name", "componentTipe", "required", "", "aria-label", "Default select example", 1, "form-select"], ["componentTipe", "ngModel"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "file", "required", "", "accept", ".jpg,.jpeg,.png,.mp4", 1, "file-input", 3, "change"], ["fileUpload", ""], [1, "file-upload"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "upload-btn", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "btn", "btn-yellow", "w-100", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"], ["form", "", 3, "formGroup", "ngSubmit"], ["formControlName", "nombre", "id", "multimedia_name", "type", "text", "placeholder", "Ingrese el nombre del archivo", "required", "", 1, "form-control"], ["formControlName", "tipo", "type", "text", "hidden", "", 1, "form-control"], ["formControlName", "idMultimedia", "type", "text", "hidden", "", 1, "form-control"], ["formControlName", "urlImagen", "type", "text", "hidden", "", 1, "form-control"]], template: function MultimediaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultimediaComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Archivos multimedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultimediaComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return ctx.openModal(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nuevo archivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Archivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MultimediaComponent_tr_20_Template, 10, 3, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MultimediaComponent_td_22_Template, 2, 0, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MultimediaComponent_ng_template_23_Template, 17, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MultimediaComponent_ng_template_25_Template, 41, 6, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MultimediaComponent_ng_template_27_Template, 25, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.multimedias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multimedias.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPopover"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".file-input[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpbWVkaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoibXVsdGltZWRpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGUtaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultimediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multimedia',
                templateUrl: './multimedia.component.html',
                styleUrls: ['./multimedia.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: src_app_service_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"] }, { type: src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_8__["CuentaService"] }, { type: src_app_service_file_service__WEBPACK_IMPORTED_MODULE_9__["FileService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: src_app_service_multimedia_service__WEBPACK_IMPORTED_MODULE_11__["MultimediaService"] }]; }, null); })();


/***/ }),

/***/ "mj9F":
/*!***********************************!*\
  !*** ./src/app/models/jwt-dto.ts ***!
  \***********************************/
/*! exports provided: JwtDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtDTO", function() { return JwtDTO; });
class JwtDTO {
    constructor(token) {
        this.token = token;
    }
}


/***/ }),

/***/ "mljW":
/*!*****************************************!*\
  !*** ./src/app/models/login-usuario.ts ***!
  \*****************************************/
/*! exports provided: LoginUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUsuario", function() { return LoginUsuario; });
class LoginUsuario {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    get Username() {
        return this.username;
    }
    get Password() {
        return this.password;
    }
    set Username(value) {
        this.username = value;
    }
    set Password(value) {
        this.password = value;
    }
}


/***/ }),

/***/ "nHuG":
/*!**************************************!*\
  !*** ./src/app/models/multimedia.ts ***!
  \**************************************/
/*! exports provided: Multimedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimedia", function() { return Multimedia; });
class Multimedia {
    constructor(nombreMultimedia, urlMultimedia, tipoMultimedia) {
        this.nombreMultimedia = nombreMultimedia;
        this.urlMultimedia = urlMultimedia;
        this.tipoMultimedia = tipoMultimedia;
    }
    get NombreMultimedia() {
        return this.nombreMultimedia;
    }
    get UrlMultimedia() {
        return this.urlMultimedia;
    }
    get TipoMultimedia() {
        return this.tipoMultimedia;
    }
    get IdMultimedia() {
        return this.idMultimedia;
    }
    set NombreMultimedia(value) {
        this.nombreMultimedia = value;
    }
    set UrlMultimedia(value) {
        this.urlMultimedia = value;
    }
    set TipoMultimedia(value) {
        this.tipoMultimedia = value;
    }
    set IdMultimedia(value) {
        this.idMultimedia = value;
    }
}


/***/ }),

/***/ "nPBU":
/*!*********************************************!*\
  !*** ./src/app/service/marcador.service.ts ***!
  \*********************************************/
/*! exports provided: MarcadorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcadorService", function() { return MarcadorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class MarcadorService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.marcadorURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi;
    }
    getAllByRecinto(id) {
        return this.httpClient.get(`${this.marcadorURL}/targets/${id}`);
    }
    save(marcador) {
        return this.httpClient.post(`${this.marcadorURL}/target`, marcador);
    }
    update(id, marcador) {
        return this.httpClient.put(`${this.marcadorURL}/target/${id}`, marcador);
    }
    delete(id, idMuseo) {
        return this.httpClient.delete(`${this.marcadorURL}/target/${id}?id=${idMuseo}`);
    }
}
MarcadorService.ɵfac = function MarcadorService_Factory(t) { return new (t || MarcadorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MarcadorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MarcadorService, factory: MarcadorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarcadorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "oTT5":
/*!****************************************!*\
  !*** ./src/app/models/grupo-update.ts ***!
  \****************************************/
/*! exports provided: GrupoUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoUpdate", function() { return GrupoUpdate; });
class GrupoUpdate {
    constructor(nombre, descripcion, urlImagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
    }
    get Nombre() {
        return this.nombre;
    }
    get Descripcion() {
        return this.descripcion;
    }
    get UrlImagen() {
        return this.urlImagen;
    }
    set Nombre(value) {
        this.nombre = value;
    }
    set Descripcion(value) {
        this.descripcion = value;
    }
    set UrlImagen(value) {
        this.urlImagen = value;
    }
}


/***/ }),

/***/ "ofjI":
/*!***********************************************!*\
  !*** ./src/app/guards/prod-guards.service.ts ***!
  \***********************************************/
/*! exports provided: ProdGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdGuardService", function() { return ProdGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/token.service */ "/QNy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ProdGuardService {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
        this.realRol = 'user';
    }
    canActivate(route, state) {
        const expectedRol = route.data.expectedRol;
        this.realRol = this.tokenService.isAdmin() ? 'admin' : 'user';
        if (!this.tokenService.isLogged() || expectedRol.indexOf(this.realRol) < 0) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
ProdGuardService.ɵfac = function ProdGuardService_Factory(t) { return new (t || ProdGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProdGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdGuardService, factory: ProdGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "q/d5":
/*!*********************************!*\
  !*** ./src/app/visor.module.ts ***!
  \*********************************/
/*! exports provided: VisorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisorModule", function() { return VisorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _visor_visor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visor/visor.component */ "ZjiB");
/* harmony import */ var _visor_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visor/menu/menu.component */ "RVQx");
/* harmony import */ var _visor_selector_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visor/selector/selector.component */ "ZUqc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");










class VisorModule {
}
VisorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VisorModule });
VisorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VisorModule_Factory(t) { return new (t || VisorModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VisorModule, { declarations: [_visor_visor_component__WEBPACK_IMPORTED_MODULE_4__["VisorComponent"],
        _visor_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
        _visor_selector_selector_component__WEBPACK_IMPORTED_MODULE_6__["SelectorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _visor_visor_component__WEBPACK_IMPORTED_MODULE_4__["VisorComponent"],
                    _visor_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                    _visor_selector_selector_component__WEBPACK_IMPORTED_MODULE_6__["SelectorComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "qTzr":
/*!**********************************************!*\
  !*** ./src/app/session/session.component.ts ***!
  \**********************************************/
/*! exports provided: SessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionComponent", function() { return SessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/login.component */ "UFx+");
/* harmony import */ var _auth_registro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/registro.component */ "0ipe");




class SessionComponent {
    constructor() { }
    showContent(section) {
        const nav = document.getElementById('login_navigation');
        const login = document.getElementById('login_section');
        const register = document.getElementById('register_section');
        if (nav != null && login != null && register != null) {
            switch (section) {
                case 1:
                    nav.classList.add('show-element');
                    nav.classList.remove('hide-element');
                    login.classList.add('hide-element');
                    login.classList.remove('show-element');
                    register.classList.add('hide-element');
                    register.classList.remove('show-element');
                    break;
                case 2:
                    login.classList.add('show-element');
                    login.classList.remove('hide-element');
                    nav.classList.add('hide-element');
                    nav.classList.remove('show-element');
                    register.classList.add('hide-element');
                    register.classList.remove('show-element');
                    break;
                case 3:
                    register.classList.add('show-element');
                    register.classList.remove('hide-element');
                    nav.classList.add('hide-element');
                    nav.classList.remove('show-element');
                    login.classList.add('hide-element');
                    login.classList.remove('show-element');
                    break;
                default:
                    break;
            }
        }
    }
}
SessionComponent.ɵfac = function SessionComponent_Factory(t) { return new (t || SessionComponent)(); };
SessionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SessionComponent, selectors: [["app-session"]], decls: 33, vars: 0, consts: [[1, "row", "m-0", "p-0"], ["id", "session_back_img", 1, "col-lg-5", "col-md-5", "col-sm-12", "p-0"], [1, "text-white", "font-xs", "p-3", "backg-charcoal50"], ["href", "https://unsplash.com/@prashantsaini?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 1, "text-yellow"], ["href", "https://unsplash.com", 1, "text-yellow"], [1, "col-lg-7", "col-md-7", "col-sm-12", "p-4", "mx-auto", "backg-charcoal", "text-white"], [1, "text-center"], ["width", "40%", "height", "auto", "src", "../../assets/img/jaguAR_logo.png"], ["id", "login_navigation", 1, "show-element"], [1, "col-6", "mx-auto", "my-4"], [1, "w-100", "mb-2", "btn", "btn-ryb", 3, "click"], [1, "w-100", "btn", "btn-yellow", 3, "click"], ["id", "login_section", 1, "hide-element"], [1, "col-8", "mx-auto", "my-4"], [1, "w-100", "mt-2", "btn", "btn-link", 3, "click"], ["id", "register_section", 1, "hide-element"]], template: function SessionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Cr\u00E9ditos de fotograf\u00EDa a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Prashant Saini ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Unsplash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Panel Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionComponent_Template_button_click_16_listener() { return ctx.showContent(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionComponent_Template_button_click_18_listener() { return ctx.showContent(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Inicio de sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionComponent_Template_a_click_25_listener() { return ctx.showContent(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Regresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Registro de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionComponent_Template_a_click_31_listener() { return ctx.showContent(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Regresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_auth_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], _auth_registro_component__WEBPACK_IMPORTED_MODULE_2__["RegistroComponent"]], styles: [".form-container[_ngcontent-%COMP%]{\r\n    max-height: 18rem;\r\n    overflow-y: scroll;\r\n}\r\n#session_back_img[_ngcontent-%COMP%], #profile_back_img[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-color: var(--blue-gray);\r\n}\r\n#session_back_img[_ngcontent-%COMP%] {\r\n    background-image: url('admin_02.jpg');\r\n}\r\n#profile_back_img[_ngcontent-%COMP%]{background-image: url('admin_04.jpg')}\r\n.loading[_ngcontent-%COMP%]{height: calc(100% + var(--header_height) + var(--footer_height));}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLHFDQUE0RDtBQUNoRTtBQUNBLGtCQUFrQixxQ0FBNEQ7QUFDOUUsU0FBUyxnRUFBZ0UsQ0FBQyIsImZpbGUiOiJzZXNzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxOHJlbTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4jc2Vzc2lvbl9iYWNrX2ltZywgI3Byb2ZpbGVfYmFja19pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1ncmF5KTtcclxufVxyXG4jc2Vzc2lvbl9iYWNrX2ltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2FkbWluL2FkbWluXzAyLmpwZ1wiKTtcclxufVxyXG4jcHJvZmlsZV9iYWNrX2ltZ3tiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2FkbWluL2FkbWluXzA0LmpwZ1wiKX1cclxuLmxvYWRpbmd7aGVpZ2h0OiBjYWxjKDEwMCUgKyB2YXIoLS1oZWFkZXJfaGVpZ2h0KSArIHZhcigtLWZvb3Rlcl9oZWlnaHQpKTt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-session',
                templateUrl: './session.component.html',
                styleUrls: ['./session.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rOqL":
/*!***********************************************************!*\
  !*** ./src/app/admin/entities/grupos/grupos.component.ts ***!
  \***********************************************************/
/*! exports provided: GruposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposComponent", function() { return GruposComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_grupo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/grupo */ "R3r6");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_models_grupo_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/grupo-request */ "0M3w");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_models_grupo_update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/grupo-update */ "oTT5");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _service_grupo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/grupo.service */ "LRDa");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/token.service */ "/QNy");
/* harmony import */ var src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/cuenta.service */ "rPZ9");
/* harmony import */ var src_app_service_file_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/file.service */ "shLW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");

















function GruposComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GruposComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_tr_22_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return ctx_r10.editModal(_r7, item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_tr_22_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return ctx_r12.deleteModal(_r3, item_r9.IdGrupo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.Nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.Descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.UrlImagen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.UpdatedDate);
} }
function GruposComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No se encontraron registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GruposComponent_ng_template_24_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GruposComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GruposComponent_ng_template_24_div_0_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_ng_template_24_Template_button_click_5_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00BFEst\u00E1 seguro de que desea eliminar este grupo?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_ng_template_24_Template_button_click_13_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_ng_template_24_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Eliminar grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
} }
function GruposComponent_ng_template_26_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GruposComponent_ng_template_26_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GruposComponent_ng_template_26_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GruposComponent_ng_template_26_div_15_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r22.errors == null ? null : _r22.errors.required);
} }
function GruposComponent_ng_template_26_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GruposComponent_ng_template_26_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GruposComponent_ng_template_26_div_21_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.errors == null ? null : _r24.errors.required);
} }
function GruposComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GruposComponent_ng_template_26_div_0_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nuevo grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_ng_template_26_Template_button_click_5_listener() { const modal_r19 = ctx.$implicit; return modal_r19.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GruposComponent_ng_template_26_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.onRegister(_r21.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre del grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GruposComponent_ng_template_26_div_15_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Descripci\u00F3n del grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GruposComponent_ng_template_26_div_21_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GruposComponent_ng_template_26_Template_input_change_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_ng_template_26_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r26.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_ng_template_26_Template_button_click_33_listener() { const modal_r19 = ctx.$implicit; return modal_r19.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Crear grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r22.touched && _r22.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.touched && _r24.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.fileName || "Ning\u00FAn archivo seleccionado.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r21.valid || !ctx_r6.fileGrupo);
} }
function GruposComponent_ng_template_28_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GruposComponent_ng_template_28_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GruposComponent_ng_template_28_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GruposComponent_ng_template_28_div_13_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.editForm.get("nombre").errors == null ? null : ctx_r37.editForm.get("nombre").errors.required);
} }
function GruposComponent_ng_template_28_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GruposComponent_ng_template_28_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GruposComponent_ng_template_28_div_18_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.editForm.get("descripcion").errors == null ? null : ctx_r38.editForm.get("descripcion").errors.required);
} }
function GruposComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GruposComponent_ng_template_28_div_0_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Editar grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_ng_template_28_Template_button_click_5_listener() { const modal_r35 = ctx.$implicit; return modal_r35.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GruposComponent_ng_template_28_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre del grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GruposComponent_ng_template_28_div_13_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Descripci\u00F3n del grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GruposComponent_ng_template_28_div_18_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_ng_template_28_Template_button_click_24_listener() { const modal_r35 = ctx.$implicit; return modal_r35.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Guardar grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r8.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.editForm.get("nombre").touched && ctx_r8.editForm.get("nombre").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.editForm.get("descripcion").touched && ctx_r8.editForm.get("descripcion").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r8.isValid());
} }
class GruposComponent {
    constructor(modalService, grupoService, toastService, tokenService, cuentaService, fileService, 
    /* puede que activated route no se use en el update, porque en el
    tutorial original lo usan por estar en otra página de detalle del producto
    https://github.com/cavanosa/tutorial_jwt_FRONT/blob/master/src/app/producto/editar-producto.component.ts*/
    router) {
        this.modalService = modalService;
        this.grupoService = grupoService;
        this.toastService = toastService;
        this.tokenService = tokenService;
        this.cuentaService = cuentaService;
        this.fileService = fileService;
        this.router = router;
        //grupos: Grupo[] = [];
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            idGrupo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            urlImagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.roles = [];
        this.isAdmin = false;
        this.errMsj = '';
        this.grupos = [];
        this.fileName = '';
        this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        this.lengthOfCode = 5;
        this.isLoading = false;
        this.deleteGrupo = 0;
        /*a eliminar por lo que te puse abajo del tutorial*/
        //grupo: Grupo | null = null;
        this.x = '';
        this.y = '';
    }
    ngOnInit() {
        this.loadMuseo();
    }
    ngAfterViewInit() {
    }
    openModal(content) {
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    deleteModal(content, idGrupo) {
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
        this.deleteGrupo = idGrupo;
    }
    editModal(content, grupo) {
        var _a, _b, _c, _d;
        (_a = this.editForm.get('nombre')) === null || _a === void 0 ? void 0 : _a.setValue(grupo.Nombre);
        (_b = this.editForm.get('descripcion')) === null || _b === void 0 ? void 0 : _b.setValue(grupo.Descripcion);
        (_c = this.editForm.get('idGrupo')) === null || _c === void 0 ? void 0 : _c.setValue(grupo.IdGrupo);
        (_d = this.editForm.get('urlImagen')) === null || _d === void 0 ? void 0 : _d.setValue(grupo.UrlImagen);
        this.modalService.open(content, { backdropClass: 'color-backdrop' });
    }
    onDelete() {
        if (this.deleteGrupo != 0) {
            this.isLoading = true;
            this.grupoService.delete(this.deleteGrupo)
                .subscribe((response) => {
                this.isLoading = false;
                this.toastService.success(response.message, 'OK', {
                    timeOut: 3000, positionClass: 'toast-top-center'
                });
                this.deleteGrupo = 0;
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }, (error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.deleteGrupo = 0;
                this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
            });
        }
    }
    onEdit() {
        console.log(this.editForm.value);
        this.isLoading = true;
        let idGrupo = this.editForm.get('idGrupo').value;
        let nombre = this.editForm.get('nombre').value;
        let descripcion = this.editForm.get('descripcion').value;
        let imagen = this.editForm.get('urlImagen').value;
        let grupo = new src_app_models_grupo_update__WEBPACK_IMPORTED_MODULE_5__["GrupoUpdate"](nombre, descripcion, imagen);
        this.grupoService.update(idGrupo, grupo)
            .subscribe((response) => {
            this.isLoading = false;
            this.toastService.success("El grupo se ha actualizado con éxito", 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center'
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }, (error) => {
            this.isLoading = false;
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error("Ocurrió un error al actualizar el grupo", 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    onRegister(item) {
        console.log(item);
        this.isLoading = true;
        if (this.fileGrupo) {
            let string = this.makeRandom(this.lengthOfCode, this.possible);
            let nameFile = this.tokenService.getIdMuseo() + "_" + string + "_" + this.fileName;
            let finalName = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].grupoExternoFolder + nameFile;
            this.fileService.upload(this.fileGrupo, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].grupoFolder + nameFile)
                .subscribe((response) => {
                let nombreGrupo = item.nombreGrupo;
                let descripcionG = item.descripcionGrupo;
                let museo = +this.tokenService.getIdMuseo();
                let group = new src_app_models_grupo_request__WEBPACK_IMPORTED_MODULE_3__["GrupoRequest"](museo, nombreGrupo, descripcionG, finalName);
                this.grupoService.save(group)
                    .subscribe((response) => {
                    this.isLoading = false;
                    this.toastService.success("El grupo se ha almacenado con éxito", 'OK', {
                        timeOut: 3000, positionClass: 'toast-top-center'
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }, (error) => {
                    this.isLoading = false;
                    this.errMsj = error.error.message;
                    console.log(this.errMsj);
                    this.toastService.error("Ocurrió un error al registrar el grupo", 'Fail', {
                        timeOut: 3000, positionClass: 'toast-top-center',
                    });
                });
            }, (error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error("Ocurrió un error al registrar el archivo", 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
            });
        }
        else {
            this.toastService.error("No se ha seleccionado un archivo para subir", 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        }
    }
    onFileSelected(event) {
        let archivo = event.target.files[0];
        if (archivo) {
            this.fileGrupo = archivo;
            this.fileName = archivo.name;
        }
    }
    loadMuseo() {
        if (!this.tokenService.getIdMuseo() && this.tokenService.getToken()) {
            this.cuentaService.getMuseo(this.tokenService.getUserName())
                .subscribe((museo) => {
                this.tokenService.setIdMuseo(+museo.idMuseo);
                this.loadGrupos(+(this.tokenService.getIdMuseo()));
            }, (error) => {
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });
                setTimeout(() => {
                    window.location.href = '/admin';
                }, 2000);
            });
        }
        else if (!this.tokenService.getToken()) {
            window.location.href = '/admin';
        }
        else if (this.tokenService.getIdMuseo()) {
            this.loadGrupos(+(this.tokenService.getIdMuseo()));
        }
    }
    loadGrupos(idMuseo) {
        this.grupoService.getAllByRecinto(idMuseo)
            .subscribe((groupes) => {
            this.grupos = [];
            groupes.forEach(element => {
                var n = new _models_grupo__WEBPACK_IMPORTED_MODULE_1__["GrupoModelo"](element.nombre, element.descripcion, element.urlImagen, element.createdDate, element.updatedDate);
                n.IdGrupo = element.idGrupo;
                this.grupos.push(n);
            });
        }, (error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error(this.errMsj, 'Fail', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    makeRandom(lengthOfCode, possible) {
        let text = "";
        for (let i = 0; i < lengthOfCode; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    isValid() {
        return this.editForm.valid;
    }
}
GruposComponent.ɵfac = function GruposComponent_Factory(t) { return new (t || GruposComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_grupo_service__WEBPACK_IMPORTED_MODULE_7__["GrupoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_10__["CuentaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_file_service__WEBPACK_IMPORTED_MODULE_11__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"])); };
GruposComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GruposComponent, selectors: [["app-grupos"]], decls: 30, vars: 3, consts: [["class", "loading", 4, "ngIf"], [1, "container-fluid", "px-5", "py-3"], [1, "row", "mb-4"], [1, "col", "text-white"], [1, "btn", "btn-forest", "col-3", 3, "click"], [1, "table-container"], [1, "table", "table-light", "table-hover", "text-center"], [1, "thead-aqua"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["confirmDelete", ""], ["newEntityModal", ""], ["editEntityModal", ""], [1, "loading"], ["src", "../../../../assets/gif/loading_splash.gif"], ["data-toggle", "tooltip", "ngbPopover", "Editar", "triggers", "mouseenter:mouseleave", 1, "icon", "mdi", "mdi-pencil", "text-yellow", 3, "click"], ["data-toggle", "tooltip", "title", "Eliminar", 1, "icon", "mdi", "mdi-trash-can", "text-red", 3, "click"], ["colspan", "12"], [1, "modal-header", "pb-2"], [1, "col-2"], [1, "modal-title", "text-center", "col"], ["type", "button", "aria-label", "Close", 1, "close", "col-2", "my-auto", 3, "click"], ["aria-hidden", "true", 1, "mdi", "mdi-close-thick"], [1, "modal-body", "p-3"], [1, "modal-footer"], [1, "row", "col-12"], [1, "col-6"], [1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "btn", "btn-yellow", "w-100", 3, "click"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "w-100", "mb-2"], ["for", "group_name", 1, ""], ["ngModel", "", "name", "nombreGrupo", "required", "", "id", "group_name", "type", "text", "placeholder", "Ingrese el nombre del grupo", 1, "form-control"], ["nombreGrupo", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "w-100", "mb-4"], ["for", "group_description", 1, ""], ["ngModel", "", "name", "descripcionGrupo", "required", "", "id", "group_description", "placeholder", "Ingrese una descripci\u00F3n", "required", "", 1, "form-control"], ["descripcionGrupo", "ngModel"], ["type", "file", "required", "", "accept", ".jpg,.jpeg,.png", 1, "file-input", 3, "change"], ["fileUpload", ""], [1, "file-upload"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "upload-btn", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "btn", "btn-yellow", "w-100", 3, "disabled"], [1, "alert", "alert-danger"], [3, "formGroup", "ngSubmit"], ["formControlName", "nombre", "id", "nombreGrupoE", "type", "text", "placeholder", "Ingrese el nombre del grupo", 1, "form-control"], ["formControlName", "descripcion", "id", "group_descriptionE", "placeholder", "Ingrese una descripci\u00F3n", "required", "", 1, "form-control"], ["formControlName", "idGrupo", "type", "text", "hidden", "", 1, "form-control"], ["formControlName", "urlImagen", "type", "text", "hidden", "", 1, "form-control"]], template: function GruposComponent_Template(rf, ctx) { if (rf & 1) {
        const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GruposComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Grupos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GruposComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return ctx.openModal(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nuevo grupo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Fecha de modificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GruposComponent_tr_22_Template, 12, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GruposComponent_tr_23_Template, 3, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GruposComponent_ng_template_24_Template, 18, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, GruposComponent_ng_template_26_Template, 38, 5, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, GruposComponent_ng_template_28_Template, 29, 5, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grupos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grupos.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPopover"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]], styles: [".file-input[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.loading[_ngcontent-%COMP%]{height: calc(100% + var(--header_height) + var(--footer_height));}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdydXBvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBLFNBQVMsZ0VBQWdFLENBQUMiLCJmaWxlIjoiZ3J1cG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZS1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2FkaW5ne2hlaWdodDogY2FsYygxMDAlICsgdmFyKC0taGVhZGVyX2hlaWdodCkgKyB2YXIoLS1mb290ZXJfaGVpZ2h0KSk7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GruposComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grupos',
                templateUrl: './grupos.component.html',
                styleUrls: ['./grupos.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: _service_grupo_service__WEBPACK_IMPORTED_MODULE_7__["GrupoService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _service_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"] }, { type: src_app_service_cuenta_service__WEBPACK_IMPORTED_MODULE_10__["CuentaService"] }, { type: src_app_service_file_service__WEBPACK_IMPORTED_MODULE_11__["FileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }]; }, null); })();


/***/ }),

/***/ "rPZ9":
/*!*******************************************!*\
  !*** ./src/app/service/cuenta.service.ts ***!
  \*******************************************/
/*! exports provided: CuentaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaService", function() { return CuentaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class CuentaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.authURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi}/account`;
    }
    getMuseo(alias) {
        return this.httpClient.get(`${this.authURL}/museo?name=${alias}`);
    }
}
CuentaService.ɵfac = function CuentaService_Factory(t) { return new (t || CuentaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CuentaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CuentaService, factory: CuentaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CuentaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "shLW":
/*!*****************************************!*\
  !*** ./src/app/service/file.service.ts ***!
  \*****************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class FileService {
    constructor(http) {
        this.http = http;
        this.fileURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi}/file/upload?ruta=`;
    }
    upload(file, path) {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(`${this.fileURL + path}`, formData);
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tT5z":
/*!****************************************************!*\
  !*** ./src/app/commons/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 20, vars: 0, consts: [[1, "row", "px-0", "py-4", "mx-0", "text-white"], [1, "col-lg-6", "col-md-6", "sol-sm-12", "text-center"], [1, "col-lg-6", "col-md-6", "sol-sm-12"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Universidad Aut\u00F3noma de Yucat\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Facultad de Matem\u00E1ticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Licenciatura en Ingenier\u00EDa de Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "M\u00F3nica Naomi Brito Ort\u00EDz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "[moninambri@gmail.com / A14003030@alumnos.uady.mx]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hilda Beatriz Cruz Sanguino ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "[cruzsanguino.hb@gmail.com / A16016307@alumnos.uady.mx]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]{\r\n    \r\n    width: 100%;\r\n    min-height: var(--footer_height);\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: var(--lightChocolate);\r\n}\r\nli[_ngcontent-%COMP%]{word-break: break-word}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1Q0FBdUM7QUFDM0M7QUFDQSxHQUFHLHNCQUFzQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIC8qcG9zaXRpb246IGFic29sdXRlOyovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWZvb3Rlcl9oZWlnaHQpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDaG9jb2xhdGUpO1xyXG59XHJcbmxpe3dvcmQtYnJlYWs6IGJyZWFrLXdvcmR9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
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
/* harmony import */ var _session_session_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session/session.component */ "qTzr");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _admin_entities_grupos_grupos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/entities/grupos/grupos.component */ "rOqL");
/* harmony import */ var _admin_entities_componentes_componentes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/entities/componentes/componentes.component */ "SNHH");
/* harmony import */ var _admin_entities_modelos_modelos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/entities/modelos/modelos.component */ "0sL4");
/* harmony import */ var _admin_entities_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/entities/marcadores/marcadores.component */ "Itwj");
/* harmony import */ var _admin_entities_multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/entities/multimedia/multimedia.component */ "jBZP");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _visor_visor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visor/visor.component */ "ZjiB");
/* harmony import */ var _404_pageNotFound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./404/pageNotFound.component */ "bC+/");
/* harmony import */ var _session_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./session/profile/profile.component */ "/cI4");
/* harmony import */ var _guards_prod_guards_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/prod-guards.service */ "ofjI");
















const routes = [
    { path: 'inicio', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"] },
    { path: 'visor', component: _visor_visor_component__WEBPACK_IMPORTED_MODULE_10__["VisorComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            { path: 'grupos', component: _admin_entities_grupos_grupos_component__WEBPACK_IMPORTED_MODULE_4__["GruposComponent"], canActivate: [_guards_prod_guards_service__WEBPACK_IMPORTED_MODULE_13__["ProdGuardService"]], data: { expectedRol: ['admin'] } },
            { path: 'componentes', component: _admin_entities_componentes_componentes_component__WEBPACK_IMPORTED_MODULE_5__["ComponentesComponent"], canActivate: [_guards_prod_guards_service__WEBPACK_IMPORTED_MODULE_13__["ProdGuardService"]], data: { expectedRol: ['admin'] } },
            { path: 'modelos', component: _admin_entities_modelos_modelos_component__WEBPACK_IMPORTED_MODULE_6__["ModelosComponent"], canActivate: [_guards_prod_guards_service__WEBPACK_IMPORTED_MODULE_13__["ProdGuardService"]], data: { expectedRol: ['admin'] } },
            { path: 'marcadores', component: _admin_entities_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_7__["MarcadoresComponent"], canActivate: [_guards_prod_guards_service__WEBPACK_IMPORTED_MODULE_13__["ProdGuardService"]], data: { expectedRol: ['admin'] } },
            { path: 'multimedia', component: _admin_entities_multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_8__["MultimediaComponent"], canActivate: [_guards_prod_guards_service__WEBPACK_IMPORTED_MODULE_13__["ProdGuardService"]], data: { expectedRol: ['admin'] } }
        ]
    },
    { path: 'login', component: _session_session_component__WEBPACK_IMPORTED_MODULE_2__["SessionComponent"] },
    { path: 'perfil', component: _session_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_guards_prod_guards_service__WEBPACK_IMPORTED_MODULE_13__["ProdGuardService"]], data: { expectedRol: ['admin'] } },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: '**', component: _404_pageNotFound_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"] }
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

/***/ "vxqu":
/*!**************************************!*\
  !*** ./src/app/models/componente.ts ***!
  \**************************************/
/*! exports provided: Componente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Componente", function() { return Componente; });
class Componente {
    constructor(nombreComponente, urlImagenComponente, descripcionComponente, tipoComponente, hasTarget, hasDescription) {
        this.nombreComponente = nombreComponente;
        this.urlImagenComponente = urlImagenComponente;
        this.descripcionComponente = descripcionComponente;
        this.tipoComponente = tipoComponente;
        this.hasTarget = hasTarget;
        this.hasDescription = hasDescription;
    }
    get NombreComponente() {
        return this.nombreComponente;
    }
    get UrlImagenComponente() {
        return this.urlImagenComponente;
    }
    get DescripcionComponente() {
        return this.descripcionComponente;
    }
    get HasTarget() {
        return this.hasTarget;
    }
    get TipoComponente() {
        return this.tipoComponente;
    }
    get HasDescription() {
        return this.hasDescription;
    }
    get IdComponente() {
        return this.idComponente;
    }
    get Modelo() {
        return this.modelo;
    }
    get Multimedia() {
        return this.multimedia;
    }
    get Target() {
        return this.target;
    }
    set NombreComponente(value) {
        this.nombreComponente = value;
    }
    set UrlImagenComponente(value) {
        this.urlImagenComponente = value;
    }
    set DescripcionComponente(value) {
        this.descripcionComponente = value;
    }
    set HasTarget(value) {
        this.hasTarget = value;
    }
    set TipoComponente(value) {
        this.tipoComponente = value;
    }
    set HasDescription(value) {
        this.hasDescription = value;
    }
    set IdComponente(value) {
        this.idComponente = value;
    }
    set Modelo(value) {
        this.modelo = value;
    }
    set Multimedia(value) {
        this.multimedia = value;
    }
    set Target(value) {
        this.target = value;
    }
}


/***/ }),

/***/ "vzRv":
/*!**********************************!*\
  !*** ./src/app/models/modelo.ts ***!
  \**********************************/
/*! exports provided: Modelo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modelo", function() { return Modelo; });
class Modelo {
    constructor(nombreModelo, urlModelo, nombreAnimacion, hasRotation, hasMovement, hasResize, texturaModelo) {
        this.nombreModelo = nombreModelo;
        this.urlModelo = urlModelo;
        this.nombreAnimacion = nombreAnimacion;
        this.hasRotation = hasRotation;
        this.hasMovement = hasMovement;
        this.hasResize = hasResize;
        this.texturaModelo = texturaModelo;
    }
    get NombreModelo() {
        return this.nombreModelo;
    }
    get UrlModelo() {
        return this.urlModelo;
    }
    get NombreAnimacion() {
        return this.nombreAnimacion;
    }
    get HasRotation() {
        return this.hasRotation;
    }
    get HasMovement() {
        return this.hasMovement;
    }
    get HasResize() {
        return this.hasResize;
    }
    get TexturaModelo() {
        return this.texturaModelo;
    }
    get IdModelo() {
        return this.idModelo;
    }
    set NombreModelo(value) {
        this.nombreModelo = value;
    }
    set UrlModelo(value) {
        this.urlModelo = value;
    }
    set NombreAnimacion(value) {
        this.nombreAnimacion = value;
    }
    set HasRotation(value) {
        this.hasRotation = value;
    }
    set HasMovement(value) {
        this.hasMovement = value;
    }
    set HasResize(value) {
        this.hasResize = value;
    }
    set TexturaModelo(value) {
        this.texturaModelo = value;
    }
    set IdModelo(value) {
        this.idModelo = value;
    }
}


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