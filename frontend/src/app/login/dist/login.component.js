"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var user_service_1 = require("../shared/user.service");
var email;
var password;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_Activatedroute, userService) {
        this._Activatedroute = _Activatedroute;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.GetUserByEmailAndPassword = function (form) {
        var _this = this;
        // console.log('email :::: ' + this.userService.selectedUser.email);
        // console.log('password :::: ' + this.userService.selectedUser.password);
        this.userService
            .GetUserByEmailAndPassword(String(this.userService.selectedUser.email), String(this.userService.selectedUser.password))
            .subscribe(function (res) {
            _this.userService.selectedUser = res;
            // console.log('RESPONSA = ' + JSON.stringify(this.userService.selectedUser));
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [user_service_1.UserService]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;