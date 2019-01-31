(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-profile/admin-profile.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin-profile/admin-profile.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXByb2ZpbGUvYWRtaW4tcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin-profile/admin-profile.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin-profile/admin-profile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-3 col-md-4\">\n            <div class=\"text-center card-box\">\n                <div class=\"member-card\">\n                    <div class=\"thumb-xl member-thumb m-b-10 center-block\">\n                        <img src=\"https://bootdey.com/img/Content/avatar/avatar6.png\" class=\"img-circle img-thumbnail\" alt=\"profile-image\">\n                    </div>\n\n                    <div class=\"\">\n                        <h4 class=\"m-b-5\">{{userDetails.firstName}} {{userDetails.lastName}}</h4>\n                        <p class=\"text-muted\">@{{userDetails.firstName}}</p>\n                    </div>\n                    \n                    <button type=\"button\" class=\"btn btn-success btn-sm w-sm waves-effect m-t-10 waves-light\">Follow</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-sm w-sm waves-effect m-t-10 waves-light\">Message</button>\n                    \n                    <div class=\"text-left m-t-40\">\n                        <p class=\"text-muted font-13\"><strong>Full Name :</strong> <span class=\"m-l-15\">{{userDetails.firstName}} {{userDetails.lastName}}</span></p>\n                        <p class=\"text-muted font-13\"><strong>Mobile :</strong><span class=\"m-l-15\">{{userDetails.tel}}</span></p>\n                        <p class=\"text-muted font-13\"><strong>Email :</strong> <span class=\"m-l-15\">{{userDetails.email}}</span></p>\n                        <p class=\"text-muted font-13\"><strong>Location :</strong> <span class=\"m-l-15\">{{userDetails.city}}</span></p>\n                    </div>\n                </div>\n            </div> <!-- end card-box -->\n\n\n        </div> <!-- end col -->\n\n\n        <div class=\"col-md-8 col-lg-9\">\n            <div class=\"\">\n                <div class=\"\">                    \n                    <ul class=\"nav nav-tabs\">\n                        <li class=\"nav-item\">\n                          <a class=\"nav-link active\" routerLink=\"/admin/sentdocs\">Send</a>\n                        </li>\n                        <li class=\"nav-item\">\n                          <a class=\"nav-link\" routerLink=\"/admin/messages\">Messages</a>\n                        </li>\n                        <li class=\"nav-item\">\n                          <a class=\"nav-link\" routerLink=\"/admin/received\">received</a>\n                        </li>\n                        <li class=\"nav-item\">\n                          <a class=\"nav-link disabled\" routerLink=\"/admin/allusers\">Users</a>\n                        </li>\n                      </ul>\n                    <div class=\"tab-content tab-pane\">\n                        \n                      <router-outlet></router-outlet>\n                      <!-- <app-messages></app-messages> -->\n                    </div>\n                </div>\n            </div>\n        </div> <!-- end col -->\n    </div>\n    <!-- end row -->\n</div>"

/***/ }),

/***/ "./src/app/admin-profile/admin-profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-profile/admin-profile.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function() { return AdminProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminProfileComponent = /** @class */ (function () {
    function AdminProfileComponent(service, router) {
        this.service = service;
        this.router = router;
        this.userId = '';
    }
    AdminProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            _this.userId = _this.userDetails.id;
            _this.service.setid(_this.userDetails._id);
            console.log(res);
            console.log(_this.userDetails);
        }, function (err) {
            console.log(err);
        });
    };
    AdminProfileComponent.prototype.onLogout = function () {
        this.service.deleteToken();
        this.router.navigate(['/login']);
    };
    AdminProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-profile',
            template: __webpack_require__(/*! ./admin-profile.component.html */ "./src/app/admin-profile/admin-profile.component.html"),
            styles: [__webpack_require__(/*! ./admin-profile.component.css */ "./src/app/admin-profile/admin-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminProfileComponent);
    return AdminProfileComponent;
}());



/***/ }),

/***/ "./src/app/admin-profile/adminuploads/adminuploads.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin-profile/adminuploads/adminuploads.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXByb2ZpbGUvYWRtaW51cGxvYWRzL2FkbWludXBsb2Fkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin-profile/adminuploads/adminuploads.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin-profile/adminuploads/adminuploads.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-4\">\n        <br><h1>{{user}}</h1>\n          <form>\n              <div class=\"form-group\">\n                  <label for=\"multiple\">Choose file(s)</label>\n                  <input type=\"file\" class=\"form-control\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple  />\n              </div>            \n          </form>\n      </div>\n      </div>\n      <br>\n      <div class=\"col-md-8\">\n           File(s) Selected: {{ uploader?.queue?.length }}\n          <table class=\"table\">\n              <thead>\n              <tr>\n                  <th width=\"50%\">Name</th>\n                  <th>Size</th>\n                  <th>Progress</th>\n                  <th>Status</th>\n                  <th>Actions</th>\n              </tr>\n              </thead> \n              <tbody>\n              <tr *ngFor=\"let item of uploader.queue\">\n                  <td><strong>{{ item.file.name }}</strong></td>\n                  <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n                  <td>\n                      <div class=\"progress\" style=\"margin-bottom: 0;\">\n                          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                      </div>\n                  </td>\n                  <td class=\"text-center\">\n                      <span *ngIf=\"item.isSuccess\"><i class=\"fa fa-check\"></i></span>\n                      <span *ngIf=\"item.isCancel\"><i class=\"fa fa-ban\"></i></span>\n                      <span *ngIf=\"item.isError\"><i class=\"fa fa-times\"></i></span>\n                  </td>\n                  <td nowrap>\n                      <button type=\"button\" class=\"btn btn-success btn-xs\"\n                              (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                          <span class=\"fa fa-upload\"></span> Upload\n                      </button>\n                      <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                              (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                          <span class=\"fa fa-ban\"></span> Cancel\n                      </button>\n                      <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                              (click)=\"item.remove()\">\n                          <span class=\"fa fa-trash\"></span> Remove\n                      </button>\n                  </td>\n              </tr>\n              </tbody>\n          </table>\n\n          <div>\n              <hr>\n              <div>\n                  Total progress:\n                  <div class=\"progress\">\n                      <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                  </div>\n                  <hr>\n              </div>\n              <button type=\"button\" class=\"btn btn-success btn-s\"\n                      (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                  <span class=\"fa fa-upload\"></span> Upload all\n              </button>\n              <button type=\"button\" class=\"btn btn-warning btn-s\"\n                      (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                  <span class=\"fa fa-ban\"></span> Cancel all\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-s\"\n                      (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                  <span class=\"fa fa-trash\"></span> Remove all\n              </button>\n          </div>\n      </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/admin-profile/adminuploads/adminuploads.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin-profile/adminuploads/adminuploads.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminuploadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminuploadsComponent", function() { return AdminuploadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servers_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servers/files.service */ "./src/app/admin-profile/servers/files.service.ts");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminuploadsComponent = /** @class */ (function () {
    function AdminuploadsComponent(FileService, service) {
        this.FileService = FileService;
        this.service = service;
        this.files = [];
        this.id = '';
        this.user = '';
        this.url = '';
        this.au = 'Bearer ' + this.service.getToken();
    }
    AdminuploadsComponent.prototype.ngOnInit = function () {
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
        this.id = tokenPayload._id;
        this.url = 'http://localhost:3001/api/upload/' + this.service.getid() + '/' + this.service.getuserid();
        console.log(this.url);
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: this.url, itemAlias: 'photo' });
    };
    AdminuploadsComponent.prototype.clear = function () {
        this.files = [];
        this.id = '';
    };
    AdminuploadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminuploads',
            template: __webpack_require__(/*! ./adminuploads.component.html */ "./src/app/admin-profile/adminuploads/adminuploads.component.html"),
            styles: [__webpack_require__(/*! ./adminuploads.component.css */ "./src/app/admin-profile/adminuploads/adminuploads.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], AdminuploadsComponent);
    return AdminuploadsComponent;
}());



/***/ }),

/***/ "./src/app/admin-profile/allusers/allusers.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-profile/allusers/allusers.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXByb2ZpbGUvYWxsdXNlcnMvYWxsdXNlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-profile/allusers/allusers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-profile/allusers/allusers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"b\" class=\"container\">\n    <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>User</th>\n            <th>NIC</th>\n            \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let file of files\">\n            <td>{{ file.username }}</td>\n            <td>{{ file.nic }}</td>\n            \n            <td><button class=\"btn btn-primary button\" (click)=\"user(file.username,file.userid)\">Send</button></td>\n          </tr>   \n        </tbody>\n      </table>\n  </div>\n\n  <div *ngIf=\"!b\" class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            \n          <br>\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"multiple\">Choose file(s)</label>\n                    <input type=\"file\" class=\"form-control\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple  />\n                </div>            \n            </form>\n        </div>\n        </div>\n        <br>\n        <div class=\"col-md-8\">\n             File(s) Selected: {{ uploader?.queue?.length }}\n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th width=\"50%\">Name</th>\n                    <th>Size</th>\n                    <th>Progress</th>\n                    <th>Status</th>\n                    <th>Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                    <td><strong>{{ item.file.name }}</strong></td>\n                    <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n                    <td>\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                        </div>\n                    </td>\n                    <td class=\"text-center\">\n                        <span *ngIf=\"item.isSuccess\"><i class=\"fa fa-check\"></i></span>\n                        <span *ngIf=\"item.isCancel\"><i class=\"fa fa-ban\"></i></span>\n                        <span *ngIf=\"item.isError\"><i class=\"fa fa-times\"></i></span>\n                    </td>\n                    <td nowrap>\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                            <span class=\"fa fa-upload\"></span> Upload\n                        </button>\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                            <span class=\"fa fa-ban\"></span> Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                (click)=\"item.remove()\">\n                            <span class=\"fa fa-trash\"></span> Remove\n                        </button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n  \n            <div>\n                <hr>\n                <div>\n                    Total progress:\n                    <div class=\"progress\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                    </div>\n                    <hr>\n                </div>\n                <button type=\"button\" class=\"btn btn-success btn-s\"\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                    <span class=\"fa fa-upload\"></span> Upload all\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                    <span class=\"fa fa-ban\"></span> Cancel all\n                </button>\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"fa fa-trash\"></span> Remove all\n                </button>\n            </div>\n        </div>\n  </div>\n  <hr>\n  "

/***/ }),

/***/ "./src/app/admin-profile/allusers/allusers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-profile/allusers/allusers.component.ts ***!
  \**************************************************************/
/*! exports provided: AllusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllusersComponent", function() { return AllusersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllusersComponent = /** @class */ (function () {
    function AllusersComponent(users, router) {
        this.users = users;
        this.router = router;
        this.files = [];
        this.b = true;
        this.selectuser = "fgjdfhxjx";
    }
    AllusersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users.getusers().subscribe(function (res) {
            _this.response = res;
            console.log(_this.response[1]);
            for (var i = 0; i < _this.response.length; i++) {
                _this.files[i] = {
                    username: _this.response[i].firstName,
                    nic: _this.response[i].nic,
                    userid: _this.response[i]._id,
                };
            }
        }, function (err) {
            console.log(err);
        });
    };
    AllusersComponent.prototype.user = function (nic, id) {
        this.users.setuser(nic, id);
        this.router.navigateByUrl('/admin/upload');
    };
    AllusersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allusers',
            template: __webpack_require__(/*! ./allusers.component.html */ "./src/app/admin-profile/allusers/allusers.component.html"),
            styles: [__webpack_require__(/*! ./allusers.component.css */ "./src/app/admin-profile/allusers/allusers.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AllusersComponent);
    return AllusersComponent;
}());



/***/ }),

/***/ "./src/app/admin-profile/messages/messages.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-profile/messages/messages.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXByb2ZpbGUvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-profile/messages/messages.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-profile/messages/messages.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>File Name</th>\n          <th>User</th>\n          <th>Date</th>\n          <th>Time</th>\n          <th>Link</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let file of files\">\n          <td>{{ file.originalname }}</td>\n          <td>{{ file.username }}</td>\n          <td>{{file.time | date:'MMM dd, yyyy'}}</td>\n      <td>{{ file.time | date:'hh:mm' }}</td>\n      <!-- <td>{{ file.username }}</td> -->\n          <td><button class=\"btn btn-primary button\" (click)=\"downloadPdf(file.filename, file.contentType)\">Download</button></td>\n          <td><button class=\"btn btn-primary button\" routerLink=\"admin/messages\"  (click)=\"read(file.filename)\">Mark As Read</button></td>\n        </tr>   \n      </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-profile/messages/messages.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-profile/messages/messages.component.ts ***!
  \**************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_files_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/files.service */ "./src/app/admin-profile/servers/files.service.ts");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(FileService, service, router) {
        this.FileService = FileService;
        this.service = service;
        this.router = router;
        this.files = [];
        this.filename = '';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FileService.message().subscribe(function (res) {
            _this.response = res;
            console.log(_this.response);
            for (var i = 0; i < _this.response.json().length; i++) {
                _this.files[i] = {
                    filename: _this.response.json()[i].filename,
                    originalname: _this.response.json()[i].originalname,
                    contentType: _this.response.json()[i].mimetype,
                    time: _this.response.json()[i].time,
                    username: _this.response.json()[i].firstName
                };
                console.log(_this.response.json()[i].mimetype);
            }
        });
    };
    MessagesComponent.prototype.read = function (name) {
        console.log(name);
        this.FileService.readmsg(name).subscribe(function (res) {
        });
    };
    MessagesComponent.prototype.downloadPdf = function (filename, contentType) {
        this.FileService.downloadPDF(filename, contentType).subscribe(function (res) {
            console.log(res);
            var file = new Blob([res.blob()], { type: contentType });
            console.log(file);
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
            // window.open('/download');
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/admin-profile/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/admin-profile/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_files_service__WEBPACK_IMPORTED_MODULE_1__["FilesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/admin-profile/received/received.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-profile/received/received.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXByb2ZpbGUvcmVjZWl2ZWQvcmVjZWl2ZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-profile/received/received.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-profile/received/received.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>File Name</th>\n            <th>User</th>\n            <th>Date</th>\n            <th>Time</th>\n            <th>Link</th> \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let file of files\">\n            <td>{{ file.originalname }}</td>\n            <td>{{ file.username }}</td>\n            <td>{{file.time | date:'MMM dd, yyyy'}}</td>\n        <td>{{ file.time | date:'hh:mm' }}</td>\n        <!-- <td>{{ file.username }}</td> -->\n            <td><button class=\"btn btn-primary button\" (click)=\"downloadPdf(file.filename, file.contentType)\">Download</button></td>\n          </tr>   \n        </tbody>\n      </table>\n  </div>\n  "

/***/ }),

/***/ "./src/app/admin-profile/received/received.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-profile/received/received.component.ts ***!
  \**************************************************************/
/*! exports provided: ReceivedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivedComponent", function() { return ReceivedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_files_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/files.service */ "./src/app/admin-profile/servers/files.service.ts");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReceivedComponent = /** @class */ (function () {
    function ReceivedComponent(FileService, service) {
        this.FileService = FileService;
        this.service = service;
        this.files = [];
    }
    ReceivedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FileService.showFileNames().subscribe(function (res) {
            _this.response = res;
            console.log(_this.response);
            for (var i = 0; i < _this.response.json().length; i++) {
                _this.files[i] = {
                    filename: _this.response.json()[i].filename,
                    originalname: _this.response.json()[i].originalname,
                    contentType: _this.response.json()[i].mimetype,
                    time: _this.response.json()[i].time,
                    username: _this.response.json()[i].firstName
                };
                console.log(_this.response.json()[i].mimetype);
            }
        });
    };
    ReceivedComponent.prototype.downloadPdf = function (filename, contentType) {
        this.FileService.downloadPDF(filename, contentType).subscribe(function (res) {
            console.log(res);
            var file = new Blob([res.blob()], { type: contentType });
            console.log(file);
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
            // window.open('/download');
        });
    };
    ReceivedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-received',
            template: __webpack_require__(/*! ./received.component.html */ "./src/app/admin-profile/received/received.component.html"),
            styles: [__webpack_require__(/*! ./received.component.css */ "./src/app/admin-profile/received/received.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_files_service__WEBPACK_IMPORTED_MODULE_1__["FilesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__["RegserviceService"]])
    ], ReceivedComponent);
    return ReceivedComponent;
}());



/***/ }),

/***/ "./src/app/admin-profile/sentdocs/sentdocs.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-profile/sentdocs/sentdocs.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXByb2ZpbGUvc2VudGRvY3Mvc2VudGRvY3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-profile/sentdocs/sentdocs.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-profile/sentdocs/sentdocs.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>File Name</th>\n          <th>Sent To</th>\n          <th>Date</th>\n          <th>Time</th>\n          <th>Link</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let file of files\">\n          <td>{{ file.originalname }}</td>\n          <td>{{ file.username }}</td>\n          <td>{{file.time | date:'MMM dd, yyyy'}}</td>\n      <td>{{ file.time | date:'hh:mm' }}</td>\n      <!-- <td>{{ file.username }}</td> -->\n          <td><button class=\"btn btn-primary button\" (click)=\"downloadPdf(file.filename, file.contentType)\">Download</button></td>\n        </tr>   \n      </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-profile/sentdocs/sentdocs.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-profile/sentdocs/sentdocs.component.ts ***!
  \**************************************************************/
/*! exports provided: SentdocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentdocsComponent", function() { return SentdocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_files_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/files.service */ "./src/app/admin-profile/servers/files.service.ts");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SentdocsComponent = /** @class */ (function () {
    function SentdocsComponent(FileService, service) {
        this.FileService = FileService;
        this.service = service;
        this.files = [];
    }
    SentdocsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FileService.adminsent().subscribe(function (res) {
            _this.response = res;
            console.log(_this.response);
            for (var i = 0; i < _this.response.json().length; i++) {
                _this.files[i] = {
                    filename: _this.response.json()[i].filename,
                    originalname: _this.response.json()[i].originalname,
                    contentType: _this.response.json()[i].mimetype,
                    time: _this.response.json()[i].time,
                    username: _this.response.json()[i].firstName
                };
                console.log(_this.response.json()[i].mimetype);
            }
        });
    };
    SentdocsComponent.prototype.downloadPdf = function (filename, contentType) {
        this.FileService.admindownloadPDF(filename, contentType).subscribe(function (res) {
            console.log(res);
            var file = new Blob([res.blob()], { type: contentType });
            console.log(file);
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
            // window.open('/download');
        });
    };
    SentdocsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sentdocs',
            template: __webpack_require__(/*! ./sentdocs.component.html */ "./src/app/admin-profile/sentdocs/sentdocs.component.html"),
            styles: [__webpack_require__(/*! ./sentdocs.component.css */ "./src/app/admin-profile/sentdocs/sentdocs.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_files_service__WEBPACK_IMPORTED_MODULE_1__["FilesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__["RegserviceService"]])
    ], SentdocsComponent);
    return SentdocsComponent;
}());



/***/ }),

/***/ "./src/app/admin-profile/servers/files.service.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-profile/servers/files.service.ts ***!
  \********************************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilesService = /** @class */ (function () {
    function FilesService(http) {
        this.http = http;
    }
    FilesService.prototype.downloadPDF = function (filename, filetype) {
        return this.http.get('http://localhost:3001/api/file/' + filename, { responseType: _angular_http__WEBPACK_IMPORTED_MODULE_1__["ResponseContentType"].Blob });
    };
    FilesService.prototype.admindownloadPDF = function (filename, filetype) {
        return this.http.get('http://localhost:3001/api/adminfile/' + filename, { responseType: _angular_http__WEBPACK_IMPORTED_MODULE_1__["ResponseContentType"].Blob });
    };
    FilesService.prototype.showFileNames = function () {
        return this.http.get('http://localhost:3001/api/userfiles');
    };
    FilesService.prototype.adminsent = function () {
        return this.http.get('http://localhost:3001/api/admindoc');
    };
    FilesService.prototype.recevefile = function (id) {
        return this.http.get('http://localhost:3001/api/rfiles/' + id);
    };
    FilesService.prototype.readmsg = function (file) {
        console.log(file);
        return this.http.get('http://localhost:3001/api/readmsg/' + file);
    };
    FilesService.prototype.message = function () {
        return this.http.get('http://localhost:3001/api/messages');
        // 'http://localhost:3001/api/messages
    };
    FilesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FilesService);
    return FilesService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resetpw/resetpw.component */ "./src/app/resetpw/resetpw.component.ts");
/* harmony import */ var _newpw_component_newpw_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newpw-component/newpw-component.component */ "./src/app/newpw-component/newpw-component.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-profile/admin-profile.component */ "./src/app/admin-profile/admin-profile.component.ts");
/* harmony import */ var _admin_profile_allusers_allusers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-profile/allusers/allusers.component */ "./src/app/admin-profile/allusers/allusers.component.ts");
/* harmony import */ var _admin_profile_sentdocs_sentdocs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-profile/sentdocs/sentdocs.component */ "./src/app/admin-profile/sentdocs/sentdocs.component.ts");
/* harmony import */ var _user_profile_receive_receive_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-profile/receive/receive.component */ "./src/app/user-profile/receive/receive.component.ts");
/* harmony import */ var _admin_profile_received_received_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-profile/received/received.component */ "./src/app/admin-profile/received/received.component.ts");
/* harmony import */ var _admin_profile_messages_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-profile/messages/messages.component */ "./src/app/admin-profile/messages/messages.component.ts");
/* harmony import */ var _admin_profile_adminuploads_adminuploads_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-profile/adminuploads/adminuploads.component */ "./src/app/admin-profile/adminuploads/adminuploads.component.ts");
/* harmony import */ var _auth_role_guard_service_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/role-guard-service.guard */ "./src/app/auth/role-guard-service.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    // 1st Route
    { path: 'reg', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] },
    // 6th Route
    // { path: 'reg',  component: RegistraionComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], },
    { path: 'admin', component: _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_9__["AdminProfileComponent"], canActivate: [_auth_role_guard_service_guard__WEBPACK_IMPORTED_MODULE_16__["RoleGuardServiceGuard"]], data: {
            expectedRole: 'admin'
        },
        children: [
            { path: 'allusers', component: _admin_profile_allusers_allusers_component__WEBPACK_IMPORTED_MODULE_10__["AllusersComponent"] },
            { path: 'sentdocs', component: _admin_profile_sentdocs_sentdocs_component__WEBPACK_IMPORTED_MODULE_11__["SentdocsComponent"] },
            { path: 'received', component: _admin_profile_received_received_component__WEBPACK_IMPORTED_MODULE_13__["ReceivedComponent"] },
            { path: 'messages', component: _admin_profile_messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"] },
            { path: 'upload', component: _admin_profile_adminuploads_adminuploads_component__WEBPACK_IMPORTED_MODULE_15__["AdminuploadsComponent"] },
            { path: '**', redirectTo: 'allusers', pathMatch: 'full' },
        ] },
    { path: 'userprofile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            { path: 'userHome', component: _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_8__["FileUploadComponent"] },
            //   {path: 'settings', component: SettingsComponent},
            { path: 'gallery', component: _user_profile_receive_receive_component__WEBPACK_IMPORTED_MODULE_12__["ReceiveComponent"] },
            { path: '', redirectTo: 'userHome', pathMatch: 'full' },
        ]
    },
    { path: 'resetpassword', component: _resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_4__["ResetpwComponent"] },
    { path: 'newpassword/:token', component: _newpw_component_newpw_component_component__WEBPACK_IMPORTED_MODULE_5__["NewpwComponentComponent"] },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    text-decoration: none;\r\n    list-style: none;\r\n}\r\n\r\nbody {\r\n    width: 100%;\r\n    height: 100vh;\r\n    /* background: url(Hero.jpg) no-repeat 50% 50%; */\r\n    background-size: cover;\r\n    display: table;\r\n}\r\n\r\n.content {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.content h1 {\r\n    color: #fff;\r\n    font-family: \"Poppins\";\r\n    font-weight: 200;\r\n    font-size: 40px;\r\n}\r\n\r\nnav {\r\n    width: 100%;\r\n    background: rgb(77, 63, 201);\r\n    height: 70px;\r\n    position: static;\r\n    z-index: 1;\r\n}\r\n\r\nnav #brand {\r\n    float: left;\r\n    display: block;\r\n    margin-left: 84px;\r\n    font-size: 30px;\r\n    line-height: 70px;\r\n    font-weight: bold;\r\n}\r\n\r\nnav #brand a {\r\n    color: #fff;\r\n    transition: all 0.3s ease-out;\r\n    font-family: \"Poppins\";\r\n    font-weight: 300;\r\n}\r\n\r\nnav #menu {\r\n    float: left;\r\n    left: 50%;\r\n    position: relative;\r\n}\r\n\r\nnav #menu li {\r\n    display: inline-block;\r\n    padding: 0px 30px;\r\n    cursor: pointer;\r\n    line-height: 70px;\r\n    position: relative;\r\n    transition: all 0.3s ease-out;\r\n}\r\n\r\nnav #menu li a {\r\n    color: #fff;\r\n    font-family: \"Poppins\";\r\n    font-weight: 200;\r\n}\r\n\r\n#toggle {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 14px;\r\n    z-index: 999;\r\n    width: 40px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    float: right;\r\n    transition: all 0.3s ease-out;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n}\r\n\r\n#toggle .span {\r\n    height: 3px;\r\n    background: #fff;\r\n    transition: all 0.3s ease-out;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    margin: 5px auto;\r\n}\r\n\r\n#toggle.on #one {\r\n    -webkit-transform: rotate(45deg) translateX(2px) translateY(4px);\r\n            transform: rotate(45deg) translateX(2px) translateY(4px);\r\n}\r\n\r\n#toggle.on #two {\r\n    opacity: 0;\r\n}\r\n\r\n#toggle.on #three {\r\n    -webkit-transform: rotate(-45deg) translateX(8px) translateY(-10px);\r\n            transform: rotate(-45deg) translateX(8px) translateY(-10px);\r\n}\r\n\r\n#resize {\r\n    z-index: 1;\r\n    top: 0px;\r\n    position: absolute;\r\n    background: #000;\r\n    width: 100%;\r\n    height: 100%;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all 1s ease-out;\r\n    display: table;\r\n}\r\n\r\n#resize #menu {\r\n    height: 90px;\r\n    display: table-cell;\r\n    vertical-align: center;\r\n}\r\n\r\n#resize #menu li {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 20px 0;\r\n    font-size: 50px;\r\n    min-height: 50px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-out;\r\n}\r\n\r\n#resize li:nth-child(1) {\r\n    margin-top:140px;\r\n}\r\n\r\n#resize #menu li a {\r\n    color: #fff;\r\n}\r\n\r\n#resize.active {\r\n    visibility: visible;\r\n    opacity: 0.99;\r\n}\r\n\r\n@media(max-width: 768px) {\r\n    #toggle {\r\n          visibility: visible;\r\n          opacity: 1;\r\n          margin-top: 6px;\r\n    }\r\n\r\n    nav #brand {\r\n          margin-left: 18px;\r\n    }\r\n\r\n    #menu a {\r\n          font-family: \"Poppins\";\r\n          font-weight: 200;\r\n          font-size: 20px;\r\n    }\r\n\r\n    nav #menu {\r\n          display: none;\r\n    }\r\n}\r\n\r\n@media(min-width: 768px) {\r\n    #resize {\r\n          visibility: hidden !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGtEQUFrRDtJQUNsRCx1QkFBdUI7SUFDdkIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUFpQztZQUFqQyxpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztDQUNkOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsOEJBQThCO0NBQ2pDOztBQUVEO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztDQUNkOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpRUFBeUQ7WUFBekQseURBQXlEO0NBQzVEOztBQUVEO0lBQ0ksV0FBVztDQUNkOztBQUVEO0lBQ0ksb0VBQTREO1lBQTVELDREQUE0RDtDQUMvRDs7QUFFRDtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztDQUNqQjs7QUFHRDtJQUNJO1VBQ00sb0JBQW9CO1VBQ3BCLFdBQVc7VUFDWCxnQkFBZ0I7S0FDckI7O0lBRUQ7VUFDTSxrQkFBa0I7S0FDdkI7O0lBRUQ7VUFDTSx1QkFBdUI7VUFDdkIsaUJBQWlCO1VBQ2pCLGdCQUFnQjtLQUNyQjs7SUFFRDtVQUNNLGNBQWM7S0FDbkI7Q0FDSjs7QUFFRDtJQUNJO1VBQ00sOEJBQThCO0tBQ25DO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKEhlcm8uanBnKSBuby1yZXBlYXQgNTAlIDUwJTsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmNvbnRlbnQgaDEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzcsIDYzLCAyMDEpO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbm5hdiAjYnJhbmQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiA4NHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxubmF2ICNicmFuZCBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5uYXYgI21lbnUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbm5hdiAjbWVudSBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbm5hdiAjbWVudSBsaSBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuI3RvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogMTRweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4jdG9nZ2xlIC5zcGFuIHtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG5cclxuI3RvZ2dsZS5vbiAjb25lIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSg0cHgpO1xyXG59XHJcblxyXG4jdG9nZ2xlLm9uICN0d28ge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuI3RvZ2dsZS5vbiAjdGhyZWUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVYKDhweCkgdHJhbnNsYXRlWSgtMTBweCk7XHJcbn1cclxuXHJcbiNyZXNpemUge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4jcmVzaXplICNtZW51IHtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jcmVzaXplICNtZW51IGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbiNyZXNpemUgbGk6bnRoLWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi10b3A6MTQwcHg7XHJcbn1cclxuXHJcbiNyZXNpemUgI21lbnUgbGkgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI3Jlc2l6ZS5hY3RpdmUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDAuOTk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3RvZ2dsZSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICBuYXYgI2JyYW5kIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNtZW51IGEge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBuYXYgI21lbnUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICNyZXNpemUge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n      <title>Smooth Fade-Up Responsive Navigation</title>\n      <!-- <link rel=\"stylesheet\" href=\"style.css\"> -->\n      <script src=\"http://code.jquery.com/jquery-3.3.1.js\"></script>\n      <link href=\"https://fonts.googleapis.com/css?family=Poppins:200,300,400,700,900\" rel=\"stylesheet\">\n      <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <!-- <script src=\"http://maps.googleapis.com/maps/api/js?key=AIzaSyDySdsZG3tJO4FJqgu24ujKy8kIdlexmsE&v=3.exp&libraries=places\" async defer></script> -->\n\n      <nav>\n            <span id=\"brand\">\n                  <a href=\"index.html\">PARK HERE</a>\n            </span>\n\n            <ul id=\"menu\">\n                <li><a routerLink=\"\" class=\"active\">Home</a></li>\n                <li><a routerLink=\"/login\">News</a></li>\n                <li><a routerLink=\"/comment\">Comment</a></li>\n                <!-- <li ><a routerLink=\"/resetpassword\">forgotten password</a></li> -->\n                <li *ngIf=\"state\" ><a (click)=\"click()\" routerLink=\"/login\">Signout</a></li>\n                <li *ngIf=\"state\" ><a routerLink=\"/login\">profile</a></li>\n                <li *ngIf=\"!state\" ><a routerLink=\"/login\">SignIn</a></li>\n                <li ><a routerLink=\"/reg\">SignUp</a></li>\n            </ul>\n\n            <div (click)=\"js()\" id=\"toggle\">\n                  <div class=\"span\" id=\"one\"></div>\n                  <div class=\"span\" id=\"two\"></div>\n                  <div class=\"span\" id=\"three\"></div>\n            </div>\n      </nav>\n\n      <div id=\"resize\">\n            <ul id=\"menu\">\n                <li><a routerLink=\"/\" class=\"active\">Home</a></li>\n                <li><a routerLink=\"/login\">News</a></li>\n                <li><a routerLink=\"/comment\">Comment</a></li>\n                <!-- <li ><a routerLink=\"/resetpassword\">forgotten password</a></li> -->\n                <li *ngIf=\"state\" ><a (click)=\"click()\" routerLink=\"/login\">Signout</a></li>\n                <li *ngIf=\"state\" ><a routerLink=\"/login\">profile</a></li>\n                <li *ngIf=\"!state\" ><a routerLink=\"/login\">SignIn</a></li>\n                <li ><a routerLink=\"/reg\">SignUp</a></li>\n            </ul>\n      </div>\n\n      <div style=\"padding:0 16px;\">\n          <router-outlet></router-outlet>\n          <!-- <app-file-upload></app-file-upload> -->\n      </div>\n\n    \n</body>\n</html>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.state = false;
    }
    AppComponent.prototype.click = function () {
        this.service.deleteToken();
        this.state = false;
    };
    AppComponent.prototype.js = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#toggle").click(function () {
            // alert('aaaa')
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).toggleClass('on');
            jquery__WEBPACK_IMPORTED_MODULE_2__("#resize").toggleClass("active");
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        if (this.service.isLoggedIn())
            this.state = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpw/resetpw.component */ "./src/app/resetpw/resetpw.component.ts");
/* harmony import */ var _newpw_component_newpw_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newpw-component/newpw-component.component */ "./src/app/newpw-component/newpw-component.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-profile/admin-profile.component */ "./src/app/admin-profile/admin-profile.component.ts");
/* harmony import */ var _admin_profile_allusers_allusers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-profile/allusers/allusers.component */ "./src/app/admin-profile/allusers/allusers.component.ts");
/* harmony import */ var _admin_profile_sentdocs_sentdocs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-profile/sentdocs/sentdocs.component */ "./src/app/admin-profile/sentdocs/sentdocs.component.ts");
/* harmony import */ var _user_profile_receive_receive_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-profile/receive/receive.component */ "./src/app/user-profile/receive/receive.component.ts");
/* harmony import */ var _admin_profile_adminuploads_adminuploads_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin-profile/adminuploads/adminuploads.component */ "./src/app/admin-profile/adminuploads/adminuploads.component.ts");
/* harmony import */ var _admin_profile_received_received_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin-profile/received/received.component */ "./src/app/admin-profile/received/received.component.ts");
/* harmony import */ var _admin_profile_messages_messages_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-profile/messages/messages.component */ "./src/app/admin-profile/messages/messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"],
                _resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_6__["ResetpwComponent"],
                _newpw_component_newpw_component_component__WEBPACK_IMPORTED_MODULE_7__["NewpwComponentComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"],
                _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_15__["FileUploadComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileSelectDirective"],
                _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_17__["AdminProfileComponent"],
                _admin_profile_allusers_allusers_component__WEBPACK_IMPORTED_MODULE_18__["AllusersComponent"],
                _admin_profile_sentdocs_sentdocs_component__WEBPACK_IMPORTED_MODULE_19__["SentdocsComponent"],
                _user_profile_receive_receive_component__WEBPACK_IMPORTED_MODULE_20__["ReceiveComponent"],
                _admin_profile_adminuploads_adminuploads_component__WEBPACK_IMPORTED_MODULE_21__["AdminuploadsComponent"],
                _admin_profile_received_received_component__WEBPACK_IMPORTED_MODULE_22__["ReceivedComponent"],
                _admin_profile_messages_messages_component__WEBPACK_IMPORTED_MODULE_23__["MessagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_13__["HttpModule"]
            ],
            providers: [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_11__["RegserviceService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(service, router) {
        this.service = service;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.service.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.service.deleteToken();
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(service, router) {
        this.service = service;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.service.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/login');
                }
            }));
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/role-guard-service.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/role-guard-service.guard.ts ***!
  \**************************************************/
/*! exports provided: RoleGuardServiceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardServiceGuard", function() { return RoleGuardServiceGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleGuardServiceGuard = /** @class */ (function () {
    function RoleGuardServiceGuard(service, router) {
        this.service = service;
        this.router = router;
    }
    RoleGuardServiceGuard.prototype.canActivate = function (next, state) {
        var expectedRole = next.data.expectedRole;
        var token = this.service.getToken();
        // decode the token to get its payload
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        if (!this.service.isLoggedIn() || tokenPayload.role !== expectedRole) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    RoleGuardServiceGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuardServiceGuard);
    return RoleGuardServiceGuard;
}());



/***/ }),

/***/ "./src/app/file-upload/file-upload.component.css":
/*!*******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.html":
/*!********************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <br>\r\n            <form>\r\n                <div class=\"form-group\">\r\n                    <label for=\"multiple\">Choose file(s)</label>\r\n                    <input type=\"file\" class=\"form-control\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple  />\r\n                </div>            \r\n            </form>\r\n        </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"col-md-8\">\r\n             File(s) Selected: {{ uploader?.queue?.length }}\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th width=\"50%\">Name</th>\r\n                    <th>Size</th>\r\n                    <th>Progress</th>\r\n                    <th>Status</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of uploader.queue\">\r\n                    <td><strong>{{ item.file.name }}</strong></td>\r\n                    <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\r\n                    <td>\r\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <span *ngIf=\"item.isSuccess\"><i class=\"fa fa-check\"></i></span>\r\n                        <span *ngIf=\"item.isCancel\"><i class=\"fa fa-ban\"></i></span>\r\n                        <span *ngIf=\"item.isError\"><i class=\"fa fa-times\"></i></span>\r\n                    </td>\r\n                    <td nowrap>\r\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\r\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                            <span class=\"fa fa-upload\"></span> Upload\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\r\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                            <span class=\"fa fa-ban\"></span> Cancel\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\r\n                                (click)=\"item.remove()\">\r\n                            <span class=\"fa fa-trash\"></span> Remove\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n  \r\n            <div>\r\n                <hr>\r\n                <div>\r\n                    Total progress:\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                    </div>\r\n                    <hr>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                    <span class=\"fa fa-upload\"></span> Upload all\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                    <span class=\"fa fa-ban\"></span> Cancel all\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n                    <span class=\"fa fa-trash\"></span> Remove all\r\n                </button>\r\n            </div>\r\n        </div>\r\n  </div>\r\n  <hr>\r\n  \r\n  <div class=\"container\">\r\n      <table class=\"table table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <th>File Name</th>\r\n              <th>Date</th>\r\n              <th>Time</th>\r\n              <th>Link</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let file of files\">\r\n              <td>{{ file.originalname }}</td>\r\n              <td>{{file.time | date:'MMM dd, yyyy'}}</td>\r\n          <td>{{ file.time | date:'hh:mm' }}</td>\r\n              <td><button class=\"btn btn-primary button\" (click)=\"downloadPdf(file.filename, file.contentType)\">Download</button></td>\r\n            </tr>   \r\n          </tbody>\r\n        </table>\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _servers_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../servers/files.service */ "./src/app/servers/files.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(FileService, service, user) {
        this.FileService = FileService;
        this.service = service;
        this.user = user;
        this.files = [];
        this.id = '';
        this.url = '';
        this.au = 'Bearer ' + this.service.getToken();
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(token);
        this.id = tokenPayload._id;
        this.url = 'http://localhost:3001/api/upload/' + tokenPayload._id;
        console.log(this.url);
        this.FileService.showFileNames(this.id).subscribe(function (response) {
            console.log(response);
            for (var i = 0; i < response.json().length; i++) {
                _this.files[i] = {
                    filename: response.json()[i].filename,
                    originalname: response.json()[i].originalname,
                    contentType: response.json()[i].mimetype,
                    time: response.json()[i].time,
                };
                console.log(response.json()[i].mimetype);
            }
        });
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: this.url, itemAlias: 'photo' });
    };
    FileUploadComponent.prototype.downloadPdf = function (filename, contentType) {
        this.FileService.downloadPDF(filename, contentType).subscribe(function (res) {
            console.log(res);
            var file = new Blob([res.blob()], { type: contentType });
            console.log(file);
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
            // window.open('/download');
        });
    };
    FileUploadComponent.prototype.clear = function () {
        this.files = [];
        this.id = '';
    };
    FileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.css */ "./src/app/file-upload/file-upload.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_files_service__WEBPACK_IMPORTED_MODULE_0__["FilesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".b{\r\n    width: 50%;\r\n    margin: 60px auto;\r\n    height: 500px;\r\n    background: #fff;\r\n    /*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwrQ0FBK0M7Q0FDbEQiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8qYm94LXNoYWRvdzogMTBweCAxMHB4ICNjY2MsLTEwcHggMjBweCAjZGRkOyovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section  style=\"background:#efefe9;\">\n    \n  <div class=\"container\">\n      \n      <div class=\"b\">\n          \n              <form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\n                <div class=\"tab-pane fade in active\">\n                  <div class='row'>\n                    <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" for=\"email\">Email</label>\n                          <input class=\"form-control input-md\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"email\" name=\"email\" type=\"text\" placeholder=\"Email\" [(ngModel)]=\"model.email\">\n                          <div *ngIf=\"signInForm.submitted && email.errors?.pattern\">\n                            <label class=\"validation-message\">Invalid email address.</label>\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" for=\"password\">Password</label>  \n                          <input class=\"form-control input-md\" #password=\"ngModel\" pattern=\".{6,}\" required id=\"password\" name=\"password\" type=\"password\" placeholder=\"password\" [(ngModel)]=\"model.password\">   \n                          <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n                            <label class=\"validation-message\">Minimum 4 characters.</label>\n                          </div><br>\n                          <div><strong>\n                            <a href=\"/resetpassword\">Forgot password</a></strong>\n                          </div> <br> \n                          <div>\n                            Don't have an account?<a href=\"/reg\">\n                              Sign up\n                            </a>\n                          </div>\n                        </div>\n                      <input type=\"submit\" class=\"btn btn-success btn-outline-rounded btn-info \" value=\"Sign In\">\n                    </div>\n                  </div>\n                </div>\n\n              </form>  \n              <div class=\"alert\" *ngIf=\"serverErrorMessages\">\n                {{serverErrorMessages}}\n              </div>\n\n          </div>\n          <!-- End Content Area -->\n      </div>\n\n      \n  \n</section>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router, state) {
        this.service = service;
        this.router = router;
        this.state = state;
        this.model = {
            email: '',
            password: ''
        };
        this.roll = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.service.isLoggedIn())
            this.router.navigateByUrl('/admin');
        this.isAdmin = false;
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.service.login(form.value).subscribe(function (res) {
            _this.service.setToken(res['token']);
            var token = _this.service.getToken();
            var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
            console.log(tokenPayload.role);
            if (tokenPayload.role == "admin") {
                _this.router.navigateByUrl('/admin');
                _this.state.state = true;
            }
            else {
                _this.router.navigateByUrl('/userprofile');
                _this.state.state = true;
            }
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/newpw-component/newpw-component.component.css":
/*!***************************************************************!*\
  !*** ./src/app/newpw-component/newpw-component.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".b{\r\n    width: 90%;\r\n    margin: 6px auto;\r\n    height: 800px;\r\n    background: #fff;\r\n    /*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\r\n}\r\n.container{\r\n    width: 100%;\r\n    height: 900px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cHctY29tcG9uZW50L25ld3B3LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLCtDQUErQztDQUNsRDtBQUNEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9uZXdwdy1jb21wb25lbnQvbmV3cHctY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDZweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAvKmJveC1zaGFkb3c6IDEwcHggMTBweCAjY2NjLC0xMHB4IDIwcHggI2RkZDsqL1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/newpw-component/newpw-component.component.html":
/*!****************************************************************!*\
  !*** ./src/app/newpw-component/newpw-component.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section  style=\"background:#efefe9;\">\n    \n  <div class=\"container\">\n      \n      <div class=\"b\">\n          \n              <form #resetpw=\"ngForm\" (ngSubmit)=\"resetpw.valid && onSubmit()\">\n                <div class=\"tab-pane fade in active\">\n                  <div class='row'>\n                    <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                      <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"newpassword\">New newPassword</label>  \n                        <input class=\"form-control input-md\" #newpassword=\"ngModel\" pattern=\".{6,}\" required id=\"newpassword\" name=\"newpassword\" type=\"password\" placeholder=\"Create newpassword\" [(ngModel)]=\"model.newpassword\">   \n                        <div class=\"alert alert-danger\" [hidden]=\"newpassword.valid\">Password must be at least 6 characters long</div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label class=\"control-label\" for=\"confirmnewPassword\">Repeat newPassword</label>  \n                      <input  class=\"form-control input-md\" #confirmnewPassword=\"ngModel\" required id=\"confirmnewPassword\" name=\"confirmnewPassword\" type=\"password\" placeholder=\"Repeat newpassword\" [(ngModel)]=\"model.confirmnewPassword\">\n                      <div class=\"alert alert-danger\" *ngIf=\"newpassword.value!=confirmnewPassword.value\">Password not match</div>\n                  </div>\n                  <div>\n                    <label class=\"validation-message\">{{msg}}</label>\n                  </div>\n                      <input type=\"submit\" [disabled]=\"!resetpw.valid || (newpassword.value!=confirmnewPassword.value)\" class=\"btn btn-success btn-outline-rounded btn-info \" value=\"confirm\">\n                    </div>\n                  </div>\n                </div>\n\n              </form>  \n              \n\n          </div>\n          <!-- End Content Area -->\n      </div>\n\n      \n  \n</section>"

/***/ }),

/***/ "./src/app/newpw-component/newpw-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/newpw-component/newpw-component.component.ts ***!
  \**************************************************************/
/*! exports provided: NewpwComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpwComponentComponent", function() { return NewpwComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewpwComponentComponent = /** @class */ (function () {
    function NewpwComponentComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.model = {
            newpassword: '',
            confirmnewPassword: '',
            email: '',
        };
    }
    NewpwComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['token'];
        });
        this.service.newpassword(this.id).subscribe(function (res) {
            // console.log(res);
            _this.emai = res['user'];
            _this.model.email = _this.emai.email;
            console.log(_this.model.email);
        }, function (err) {
            console.log(err);
        });
    };
    NewpwComponentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.savepassword(this.model).subscribe(function (res) {
            console.log(res);
            if (res['sucsess'] == false) {
                _this.msg = res['message'];
                _this.router.navigate(['login']);
            }
            else {
                _this.model.newpassword = '';
                _this.model.confirmnewPassword = '';
                _this.msg = res['message'];
            }
        }, function (err) {
            console.log(err);
            _this.msg = '';
        });
    };
    NewpwComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newpw-component',
            template: __webpack_require__(/*! ./newpw-component.component.html */ "./src/app/newpw-component/newpw-component.component.html"),
            styles: [__webpack_require__(/*! ./newpw-component.component.css */ "./src/app/newpw-component/newpw-component.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewpwComponentComponent);
    return NewpwComponentComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section  style=\"background:#efefe9;\">\n    \n  <div class=\"container\">\n      \n      <div class=\"b\">\n          \n              <form #regForm=\"ngForm\" >\n                <div class=\"tab-pane fade in active\">\n                  <div class=\"row\">\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"firstname\">First Name</label>  \n                            <input class=\"form-control input-md\" #firstname=\"ngModel\" required id=\"firstname\" name=\"firstname\" type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"personal.firstName\">   \n                            <div class=\"alert alert-danger\" [hidden]=\"firstname.valid\">First Name is required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"lastname\">Last Name</label>  \n                            <input class=\"form-control input-md\" #lastname=\"ngModel\" required id=\"lastname\" name=\"lastname\" type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"personal.lastName\">\n                            <div class=\"alert alert-danger\"  [hidden]=\"lastname.valid\">Last Name is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Email</label>\n                    <input class=\"form-control input-md\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"email\" name=\"email\" type=\"text\" placeholder=\"Email\" [(ngModel)]=\"personal.email\">\n                    <div class=\"alert alert-danger\" [hidden]=\"email.valid\">Email is required and must be valid</div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"tel\">Tel</label>\n                  <input class=\"form-control input-md\" #tel=\"ngModel\" required id=\"tel\" name=\"tel\" type=\"text\" placeholder=\"Tel\" [(ngModel)]=\"personal.tel\">\n                  <div class=\"alert alert-danger\" [hidden]=\"tel.valid\">Tel is required</div>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"nic\">NIC</label>\n                  <input class=\"form-control input-md\" #nic=\"ngModel\" required id=\"nic\" name=\"nic\" type=\"text\" placeholder=\"NIC\" [(ngModel)]=\"personal.nic\">\n                  <div class=\"alert alert-danger\" [hidden]=\"nic.valid\">NIC is required</div>\n              </div>\n              <div class=\"row\">\n                  <div class='col-xs-12 col-sm-6'>\n                      <div class=\"form-group\">\n                          <label class=\"control-label\" for=\"password\">Create Password</label>  \n                          <input class=\"form-control input-md\" #password=\"ngModel\" pattern=\".{6,}\" required id=\"password\" name=\"password\" type=\"password\" placeholder=\"Create password\" [(ngModel)]=\"personal.password\">   \n                          <div class=\"alert alert-danger\" [hidden]=\"password.valid\">Password must be at least 6 characters long</div>\n                      </div>\n                  </div>\n                  <div class='col-xs-12 col-sm-6'>\n                      <div class=\"form-group\">\n                          <label class=\"control-label\" for=\"confirmPassword\">Repeat Password</label>  \n                          <input  class=\"form-control input-md\" #confirmPassword=\"ngModel\" required id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" placeholder=\"Repeat password\" [(ngModel)]=\"personal.confirmPassword\">\n                          <div class=\"alert alert-danger\" *ngIf=\"password.value!=confirmPassword.value\">Password not match</div>\n                      </div>\n                  </div>\n              </div>\n                    \n                <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-outline-rounded btn-info \" [disabled]=\"!regForm.valid || (password.value!=confirmPassword.value)\"  (click)=\"save()\"> Submit <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n                </div>\n                </div>\n\n              </form>  \n              <div class=\"alert\" *ngIf=\"serverErrorMessages\">\n                {{serverErrorMessages}}\n              </div>\n\n          </div>\n          <!-- End Content Area -->\n      </div>\n\n      \n  \n</section>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(reg, route) {
        this.reg = reg;
        this.route = route;
        this.personal = {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            nic: '',
            password: '',
            confirmPassword: ''
        };
        this.serverErrorMessages = '';
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.save = function () {
        var _this = this;
        this.reg.storedetails(this.personal)
            .subscribe(function (response) {
            if (response) {
                _this.res = response['status'];
                if (!_this.res) {
                    _this.serverErrorMessages = 'Your email is already exists';
                }
                else {
                    _this.serverErrorMessages = "Registration Succsesfull";
                    _this.route.navigateByUrl('/login');
                }
            }
        }, function (error) {
            console.log(error);
            {
                if (error)
                    _this.serverErrorMessages = 'Your email is already exists';
            }
        });
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/resetpw/resetpw.component.css":
/*!***********************************************!*\
  !*** ./src/app/resetpw/resetpw.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".b{\r\n    width: 90%;\r\n    margin: 6px auto;\r\n    height: 800px;\r\n    background: #fff;\r\n    /*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\r\n}\r\n.container{\r\n    width: 100%;\r\n    height: 900px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXRwdy9yZXNldHB3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsK0NBQStDO0NBQ2xEO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0cHcvcmVzZXRwdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiA2cHggYXV0bztcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLypib3gtc2hhZG93OiAxMHB4IDEwcHggI2NjYywtMTBweCAyMHB4ICNkZGQ7Ki9cclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/resetpw/resetpw.component.html":
/*!************************************************!*\
  !*** ./src/app/resetpw/resetpw.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section  style=\"background:#efefe9;\">\n    \n  <div class=\"container\">\n      \n      <div class=\"b\">\n          \n              <form #forgotpw=\"ngForm\" (ngSubmit)=\"forgotpw.valid && onSubmit(forgotpw)\">\n                <div class=\"tab-pane fade in active\">\n                  <div class='row'>\n                    <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" for=\"email\">Email</label>\n                          <input class=\"form-control input-md\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"email\" name=\"email\" type=\"text\" placeholder=\"Email\" [(ngModel)]=\"model.email\">\n                          <div *ngIf=\"forgotpw.submitted && email.errors?.pattern\">\n                            <label class=\"validation-message\">Invalid email address.</label>\n                          </div>\n                          <div>\n                            <label class=\"validation-message\">{{msg}}</label>\n                          </div>\n                        </div>\n                        \n                      <input type=\"submit\" [disabled]=\"!forgotpw.valid\" class=\"btn btn-success btn-outline-rounded btn-info \" value=\"Send Link\">\n                    </div>\n                  </div>\n                </div>\n\n              </form>  \n              \n\n          </div>\n          <!-- End Content Area -->\n      </div>\n\n      \n  \n</section>"

/***/ }),

/***/ "./src/app/resetpw/resetpw.component.ts":
/*!**********************************************!*\
  !*** ./src/app/resetpw/resetpw.component.ts ***!
  \**********************************************/
/*! exports provided: ResetpwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpwComponent", function() { return ResetpwComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetpwComponent = /** @class */ (function () {
    function ResetpwComponent(service, router) {
        this.service = service;
        this.router = router;
        this.msg = '';
        this.model = {
            email: ''
        };
    }
    ResetpwComponent.prototype.ngOnInit = function () {
    };
    ResetpwComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.service.rstpw(form.value).subscribe(function (res) {
            console.log(res);
            if (res['sucsess'] == false) {
                _this.msg = res['message'];
                _this.router.navigate(['newpassword']);
            }
            else {
                _this.msg = res['message'];
            }
        }, function (err) {
            console.log(err);
            _this.msg = '';
        });
    };
    ResetpwComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resetpw',
            template: __webpack_require__(/*! ./resetpw.component.html */ "./src/app/resetpw/resetpw.component.html"),
            styles: [__webpack_require__(/*! ./resetpw.component.css */ "./src/app/resetpw/resetpw.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ResetpwComponent);
    return ResetpwComponent;
}());



/***/ }),

/***/ "./src/app/servers/files.service.ts":
/*!******************************************!*\
  !*** ./src/app/servers/files.service.ts ***!
  \******************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilesService = /** @class */ (function () {
    function FilesService(http) {
        this.http = http;
    }
    FilesService.prototype.downloadPDF = function (filename, filetype) {
        return this.http.get('http://localhost:3001/api/adminfile/' + filename, { responseType: _angular_http__WEBPACK_IMPORTED_MODULE_1__["ResponseContentType"].Blob });
    };
    FilesService.prototype.showFileNames = function (id) {
        return this.http.get('http://localhost:3001/api/files/' + id);
    };
    FilesService.prototype.recevefile = function (id) {
        return this.http.get('http://localhost:3001/api/rfiles/' + id);
    };
    FilesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FilesService);
    return FilesService;
}());



/***/ }),

/***/ "./src/app/servers/regservice.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servers/regservice.service.ts ***!
  \***********************************************/
/*! exports provided: RegserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegserviceService", function() { return RegserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegserviceService = /** @class */ (function () {
    function RegserviceService(http) {
        this.http = http;
        this.url = "http://localhost:3001/api";
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    RegserviceService.prototype.storedetails = function (details) {
        return this.http.post(this.url + '/register', details, this.noAuthHeader);
    };
    RegserviceService.prototype.login = function (authCredentials) {
        console.log(authCredentials);
        return this.http.post(this.url + '/authenticate', authCredentials, this.noAuthHeader);
    };
    RegserviceService.prototype.getUserProfile = function () {
        return this.http.get(this.url + '/userProfile');
    };
    RegserviceService.prototype.rstpw = function (email) {
        return this.http.put(this.url + '/rstpw', email);
    };
    RegserviceService.prototype.newpassword = function (token) {
        return this.http.get(this.url + '/resetpassword/' + token);
    };
    RegserviceService.prototype.savepassword = function (password) {
        return this.http.put(this.url + '/savepassword', password);
    };
    //Helper Methods
    RegserviceService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    RegserviceService.prototype.setid = function (id) {
        localStorage.setItem('id', id);
    };
    RegserviceService.prototype.getid = function () {
        return localStorage.getItem('id');
    };
    RegserviceService.prototype.deleteid = function () {
        localStorage.removeItem('id');
    };
    RegserviceService.prototype.setuser = function (name, id) {
        localStorage.setItem('usernic', name);
        localStorage.setItem('userid', id);
    };
    RegserviceService.prototype.getuser = function () {
        return localStorage.getItem('usernic');
    };
    RegserviceService.prototype.getuserid = function () {
        return localStorage.getItem('userid');
    };
    RegserviceService.prototype.deleteuser = function () {
        localStorage.removeItem('usernic');
    };
    RegserviceService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    RegserviceService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
        this.deleteid();
    };
    RegserviceService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    };
    RegserviceService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    };
    RegserviceService.prototype.getusers = function () {
        console.log('getuser');
        return this.http.get(this.url + '/users');
    };
    RegserviceService.prototype.newpost = function (post) {
        return this.http.post(this.url + '/newPost', post);
    };
    RegserviceService.prototype.getAllPosts = function () {
        return this.http.get(this.url + '/getPosts');
    };
    RegserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RegserviceService);
    return RegserviceService;
}());



/***/ }),

/***/ "./src/app/user-profile/receive/receive.component.css":
/*!************************************************************!*\
  !*** ./src/app/user-profile/receive/receive.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS9yZWNlaXZlL3JlY2VpdmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-profile/receive/receive.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user-profile/receive/receive.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>File Name</th>\n          <th>Date</th>\n          <th>Time</th>\n          <th>Link</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let file of files\">\n          <td>{{ file.originalname }}</td>\n          <td>{{file.time | date:'MMM dd, yyyy'}}</td>\n          <td>{{ file.time | date:'hh:mm' }}</td>\n          <td><button class=\"btn btn-primary button\" (click)=\"downloadPdf(file.filename, file.contentType)\">Download</button></td>\n        </tr>   \n      </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/user-profile/receive/receive.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-profile/receive/receive.component.ts ***!
  \***********************************************************/
/*! exports provided: ReceiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveComponent", function() { return ReceiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _servers_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servers/files.service */ "./src/app/servers/files.service.ts");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReceiveComponent = /** @class */ (function () {
    function ReceiveComponent(FileService, service, user) {
        this.FileService = FileService;
        this.service = service;
        this.user = user;
        this.files = [];
        this.id = this.user.userId;
    }
    ReceiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FileService.recevefile(this.service.getid()).subscribe(function (response) {
            console.log(response);
            for (var i = 0; i < response.json().length; i++) {
                _this.files[i] = {
                    filename: response.json()[i].filename,
                    originalname: response.json()[i].originalname,
                    contentType: response.json()[i].mimetype,
                    time: response.json()[i].time
                };
                console.log(response.json()[i].mimetype);
            }
        });
    };
    ReceiveComponent.prototype.downloadPdf = function (filename, contentType) {
        this.FileService.downloadPDF(filename, contentType).subscribe(function (res) {
            console.log(res);
            var file = new Blob([res.blob()], { type: contentType });
            console.log(file);
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
            // window.open('/download');
        });
    };
    ReceiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receive',
            template: __webpack_require__(/*! ./receive.component.html */ "./src/app/user-profile/receive/receive.component.html"),
            styles: [__webpack_require__(/*! ./receive.component.css */ "./src/app/user-profile/receive/receive.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]])
    ], ReceiveComponent);
    return ReceiveComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nbody{\r\n    margin-top:20px;\r\n    background:#f5f5f5;\r\n}\r\n/* ===========\r\n   Profile\r\n =============*/\r\n.card-box {\r\n  padding: 20px;\r\n  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.06), 0 2px 0 0 rgba(0, 0, 0, 0.02);\r\n  border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  background-clip: padding-box;\r\n  margin-bottom: 20px;\r\n  background-color: #ffffff;\r\n}\r\n.header-title {\r\n  text-transform: uppercase;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.04em;\r\n  line-height: 16px;\r\n  margin-bottom: 8px;\r\n}\r\n.social-links li a {\r\n  -webkit-border-radius: 50%;\r\n  background: #EFF0F4;\r\n  border-radius: 50%;\r\n  color: #7A7676;\r\n  display: inline-block;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  text-align: center;\r\n  width: 30px;\r\n}\r\n/* ===========\r\n   Gallery\r\n =============*/\r\n.portfolioFilter a {\r\n  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);\r\n  -moz-transition: all 0.3s ease-out;\r\n  -ms-transition: all 0.3s ease-out;\r\n  -o-transition: all 0.3s ease-out;\r\n  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);\r\n  -webkit-transition: all 0.3s ease-out;\r\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);\r\n  color: #333333;\r\n  padding: 5px 10px;\r\n  display: inline-block;\r\n  transition: all 0.3s ease-out;\r\n}\r\n.portfolioFilter a:hover {\r\n  background-color: #228bdf;\r\n  color: #ffffff;\r\n}\r\n.portfolioFilter a.current {\r\n  background-color: #228bdf;\r\n  color: #ffffff;\r\n}\r\n.thumb {\r\n  background-color: #ffffff;\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\r\n  margin-top: 30px;\r\n  padding-bottom: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-top: 10px;\r\n  width: 100%;\r\n}\r\n.thumb-img {\r\n  border-radius: 2px;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n.gal-detail h4 {\r\n  margin: 16px auto 10px auto;\r\n  width: 80%;\r\n  white-space: nowrap;\r\n  display: block;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.gal-detail .ga-border {\r\n  height: 3px;\r\n  width: 40px;\r\n  background-color: #228bdf;\r\n  margin: 10px auto;\r\n}\r\n.tabs-vertical-env .tab-content {\r\n  background: #ffffff;\r\n  display: table-cell;\r\n  margin-bottom: 30px;\r\n  padding: 30px;\r\n  vertical-align: top;\r\n}\r\n.tabs-vertical-env .nav.tabs-vertical {\r\n  display: table-cell;\r\n  min-width: 120px;\r\n  vertical-align: top;\r\n  width: 150px;\r\n}\r\n.tabs-vertical-env .nav.tabs-vertical li.active > a {\r\n  background-color: #ffffff;\r\n  border: 0;\r\n}\r\n.tabs-vertical-env .nav.tabs-vertical li > a {\r\n  color: #333333;\r\n  text-align: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 500;\r\n  white-space: nowrap;\r\n}\r\n.nav.nav-tabs > li.active > a {\r\n  background-color: #ffffff;\r\n  border: 0;\r\n}\r\n.nav.nav-tabs > li > a {\r\n  background-color: transparent;\r\n  border-radius: 0;\r\n  border: none;\r\n  color: #333333 !important;\r\n  cursor: pointer;\r\n  line-height: 50px;\r\n  font-weight: 500;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n.nav.nav-tabs > li > a:hover {\r\n  color: #228bdf !important;\r\n}\r\n.nav.tabs-vertical > li > a {\r\n  background-color: transparent;\r\n  border-radius: 0;\r\n  border: none;\r\n  color: #333333 !important;\r\n  cursor: pointer;\r\n  line-height: 50px;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n.nav.tabs-vertical > li > a:hover {\r\n  color: #228bdf !important;\r\n}\r\n.tab-content {\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\r\n  color: #777777;\r\n}\r\n.nav.nav-tabs > li:last-of-type a {\r\n  margin-right: 0px;\r\n}\r\n.nav.nav-tabs {\r\n  border-bottom: 0;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\r\n}\r\n.navtab-custom li {\r\n  margin-bottom: -2px;\r\n}\r\n.navtab-custom li a {\r\n  border-top: 2px solid transparent !important;\r\n}\r\n.navtab-custom li.active a {\r\n  border-top: 2px solid #228bdf !important;\r\n}\r\n.nav-tab-left.navtab-custom li a {\r\n  border: none !important;\r\n  border-left: 2px solid transparent !important;\r\n}\r\n.nav-tab-left.navtab-custom li.active a {\r\n  border-left: 2px solid #228bdf !important;\r\n}\r\n.nav-tab-right.navtab-custom li a {\r\n  border: none !important;\r\n  border-right: 2px solid transparent !important;\r\n}\r\n.nav-tab-right.navtab-custom li.active a {\r\n  border-right: 2px solid #228bdf !important;\r\n}\r\n.nav-tabs.nav-justified > .active > a,\r\n.nav-tabs.nav-justified > .active > a:hover,\r\n.nav-tabs.nav-justified > .active > a:focus,\r\n.tabs-vertical-env .nav.tabs-vertical li.active > a {\r\n  border: none;\r\n}\r\n.nav-tabs > li.active > a,\r\n.nav-tabs > li.active > a:focus,\r\n.nav-tabs > li.active > a:hover,\r\n.tabs-vertical > li.active > a,\r\n.tabs-vertical > li.active > a:focus,\r\n.tabs-vertical > li.active > a:hover {\r\n  color: #228bdf !important;\r\n}\r\n.nav.nav-tabs + .tab-content {\r\n    background: #ffffff;\r\n    margin-bottom: 20px;\r\n    padding: 20px;\r\n}\r\n.progress.progress-sm .progress-bar {\r\n    font-size: 8px;\r\n    line-height: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBUUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7O2dCQUVnQjtBQUNoQjtFQUNFLGNBQWM7RUFDZCw0RUFBNEU7RUFFNUUsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtDQUNiO0FBRUQ7O2dCQUVnQjtBQUNoQjtFQUNFLG9EQUFvRDtFQUNwRCxtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGlDQUFpQztFQUNqQyx1REFBdUQ7RUFDdkQsc0NBQXNDO0VBQ3RDLCtDQUErQztFQUMvQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7Q0FDL0I7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0MsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixZQUFZO0NBQ2I7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsa0JBQWtCO0NBQ25CO0FBS0Q7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2Qsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixVQUFVO0NBQ1g7QUFDRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixVQUFVO0NBQ1g7QUFDRDtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLDBDQUEwQztFQUMxQyxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQiwwQ0FBMEM7Q0FDM0M7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsNkNBQTZDO0NBQzlDO0FBQ0Q7RUFDRSx5Q0FBeUM7Q0FDMUM7QUFDRDtFQUNFLHdCQUF3QjtFQUN4Qiw4Q0FBOEM7Q0FDL0M7QUFDRDtFQUNFLDBDQUEwQztDQUMzQztBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLCtDQUErQztDQUNoRDtBQUNEO0VBQ0UsMkNBQTJDO0NBQzVDO0FBQ0Q7Ozs7RUFJRSxhQUFhO0NBQ2Q7QUFDRDs7Ozs7O0VBTUUsMEJBQTBCO0NBQzNCO0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmJvZHl7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XHJcbn1cclxuLyogPT09PT09PT09PT1cclxuICAgUHJvZmlsZVxyXG4gPT09PT09PT09PT09PSovXHJcbi5jYXJkLWJveCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggMCAwIHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5oZWFkZXItdGl0bGUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuLnNvY2lhbC1saW5rcyBsaSBhIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjRUZGMEY0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogIzdBNzY3NjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT1cclxuICAgR2FsbGVyeVxyXG4gPT09PT09PT09PT09PSovXHJcbi5wb3J0Zm9saW9GaWx0ZXIgYSB7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG59XHJcbi5wb3J0Zm9saW9GaWx0ZXIgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyOGJkZjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ucG9ydGZvbGlvRmlsdGVyIGEuY3VycmVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyOGJkZjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4udGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50aHVtYi1pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5nYWwtZGV0YWlsIGg0IHtcclxuICBtYXJnaW46IDE2cHggYXV0byAxMHB4IGF1dG87XHJcbiAgd2lkdGg6IDgwJTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmdhbC1kZXRhaWwgLmdhLWJvcmRlciB7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyOGJkZjtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnRhYnMtdmVydGljYWwtZW52IC50YWItY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi50YWJzLXZlcnRpY2FsLWVudiAubmF2LnRhYnMtdmVydGljYWwge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG4udGFicy12ZXJ0aWNhbC1lbnYgLm5hdi50YWJzLXZlcnRpY2FsIGxpLmFjdGl2ZSA+IGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi50YWJzLXZlcnRpY2FsLWVudiAubmF2LnRhYnMtdmVydGljYWwgbGkgPiBhIHtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4ubmF2Lm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuLm5hdi5uYXYtdGFicyA+IGxpID4gYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm5hdi5uYXYtdGFicyA+IGxpID4gYTpob3ZlciB7XHJcbiAgY29sb3I6ICMyMjhiZGYgIWltcG9ydGFudDtcclxufVxyXG4ubmF2LnRhYnMtdmVydGljYWwgPiBsaSA+IGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5uYXYudGFicy12ZXJ0aWNhbCA+IGxpID4gYTpob3ZlciB7XHJcbiAgY29sb3I6ICMyMjhiZGYgIWltcG9ydGFudDtcclxufVxyXG4udGFiLWNvbnRlbnQge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcbi5uYXYubmF2LXRhYnMgPiBsaTpsYXN0LW9mLXR5cGUgYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLm5hdi5uYXYtdGFicyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG4ubmF2dGFiLWN1c3RvbSBsaSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxufVxyXG4ubmF2dGFiLWN1c3RvbSBsaSBhIHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4ubmF2dGFiLWN1c3RvbSBsaS5hY3RpdmUgYSB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMyMjhiZGYgIWltcG9ydGFudDtcclxufVxyXG4ubmF2LXRhYi1sZWZ0Lm5hdnRhYi1jdXN0b20gbGkgYSB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtdGFiLWxlZnQubmF2dGFiLWN1c3RvbSBsaS5hY3RpdmUgYSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMjI4YmRmICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi10YWItcmlnaHQubmF2dGFiLWN1c3RvbSBsaSBhIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtdGFiLXJpZ2h0Lm5hdnRhYi1jdXN0b20gbGkuYWN0aXZlIGEge1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMyMjhiZGYgIWltcG9ydGFudDtcclxufVxyXG4ubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhLFxyXG4ubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhOmhvdmVyLFxyXG4ubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhOmZvY3VzLFxyXG4udGFicy12ZXJ0aWNhbC1lbnYgLm5hdi50YWJzLXZlcnRpY2FsIGxpLmFjdGl2ZSA+IGEge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4ubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhLFxyXG4ubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmZvY3VzLFxyXG4ubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmhvdmVyLFxyXG4udGFicy12ZXJ0aWNhbCA+IGxpLmFjdGl2ZSA+IGEsXHJcbi50YWJzLXZlcnRpY2FsID4gbGkuYWN0aXZlID4gYTpmb2N1cyxcclxuLnRhYnMtdmVydGljYWwgPiBsaS5hY3RpdmUgPiBhOmhvdmVyIHtcclxuICBjb2xvcjogIzIyOGJkZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2Lm5hdi10YWJzICsgLnRhYi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4ucHJvZ3Jlc3MucHJvZ3Jlc3Mtc20gLnByb2dyZXNzLWJhciB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-3 col-md-4\">\n            <div class=\"text-center card-box\">\n                <div class=\"member-card\">\n                    <div class=\"thumb-xl member-thumb m-b-10 center-block\">\n                        <img src=\"https://bootdey.com/img/Content/avatar/avatar6.png\" class=\"img-circle img-thumbnail\" alt=\"profile-image\">\n                    </div>\n\n                    <div class=\"\">\n                        <h4 class=\"m-b-5\">{{userDetails.firstName}} {{userDetails.lastName}}</h4>\n                        <p class=\"text-muted\">@{{userDetails.firstName}}</p>\n                    </div>\n                    \n                    <button type=\"button\" class=\"btn btn-success btn-sm w-sm waves-effect m-t-10 waves-light\">Follow</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-sm w-sm waves-effect m-t-10 waves-light\">Message</button>\n                    \n                    <div class=\"text-left m-t-40\">\n                        <p class=\"text-muted font-13\"><strong>Full Name :</strong> <span class=\"m-l-15\">{{userDetails.firstName}} {{userDetails.lastName}}</span></p>\n                        <p class=\"text-muted font-13\"><strong>Mobile :</strong><span class=\"m-l-15\">{{userDetails.tel}}</span></p>\n                        <p class=\"text-muted font-13\"><strong>Email :</strong> <span class=\"m-l-15\">{{userDetails.email}}</span></p>\n                        <p class=\"text-muted font-13\"><strong>Location :</strong> <span class=\"m-l-15\">{{userDetails.city}}</span></p>\n                    </div>\n                </div>\n            </div> <!-- end card-box -->\n\n\n        </div> <!-- end col -->\n\n\n        <div class=\"col-md-8 col-lg-9\">\n            <div class=\"\">\n                <div class=\"\">\n                    <ul class=\"nav nav-tabs navtab-custom\" role=\"tabpanel\">\n                        <li class=\"\">\n                            <a role=\"tab\" routerLink=\"/userprofile/userHome\" data-toggle=\"tab\" aria-expanded=\"false\">\n                                <span class=\"visible-xs\"><i class=\"fa fa-user\"></i></span>\n                                <span class=\"hidden-xs\">Send</span>\n                            </a>\n                        </li>\n                        <li class=\"\">\n                            <a routerLink=\"/userprofile/gallery\" data-toggle=\"tab\" aria-expanded=\"true\">\n                                <span class=\"visible-xs\"><i class=\"fa fa-photo\"></i></span>\n                                <span class=\"hidden-xs\">Receive </span>\n                            </a>\n                        </li>\n                        <!-- <li class=\"\">\n                            <a routerLink=\"/userprofile/settings\" data-toggle=\"tab\" aria-expanded=\"false\">\n                                <span class=\"visible-xs\"><i class=\"fa fa-cog\"></i></span>\n                                <span class=\"hidden-xs\">SETTINGS</span>\n                            </a>\n                        </li> -->\n                    </ul>\n                    <div class=\"tab-content tab-pane\">\n                        \n                      <router-outlet></router-outlet>\n                            <!-- <app-file-upload></app-file-upload> -->\n                    </div>\n                </div>\n            </div>\n        </div> <!-- end col -->\n    </div>\n    <!-- end row -->\n</div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(service, router) {
        this.service = service;
        this.router = router;
        this.userId = '';
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            _this.userId = _this.userDetails._id;
            _this.service.setid(_this.userDetails._id);
            // console.log(this.userId);
            console.log(_this.userDetails);
        }, function (err) {
            console.log(err);
        });
    };
    UserProfileComponent.prototype.onLogout = function () {
        this.service.deleteToken();
        this.router.navigate(['/login']);
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\H.A.C.K.Hettiarachch\Desktop\AuditingHelpApp\AHA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map