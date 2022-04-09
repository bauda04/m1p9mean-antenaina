"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderService = void 0;
var core_1 = require("@angular/core");
var order_model_1 = require("./order.model");
var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.selectedOrder = new order_model_1.Order();
        // selectedRestaurant: Restaurant = new Restaurant();
        this.order = [];
        this.baseURL = 'http://localhost:3000/order';
    }
    OrderService.prototype.postUser = function (order) {
        return this.http.post(this.baseURL, order);
    };
    OrderService.prototype.getOrderList = function () {
        return this.http.get(this.baseURL);
    };
    OrderService.prototype.GetOrderByIdUserAndStatus = function (id_user, order_status) {
        // console.log('id_user ------' + id_user);
        // console.log('order_status ------' + order_status);
        return this.http.get(this.baseURL + "/GetOrderByIdUserAndStatus/" + id_user + "/" + order_status);
    };
    OrderService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
