define(["require", "exports", "dojo/_base/declare"], function (require, exports, declare) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A decorator that converts a TypeScript class into a declare constructor.
     * This allows declare constructors to be defined as classes, which nicely
     * hides away the `declare([], {})` boilerplate.
     */
    function default_1() {
        var mixins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mixins[_i] = arguments[_i];
        }
        return function (target) {
            return declare(mixins, target.prototype);
        };
    }
    exports.default = default_1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyZURlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlY2xhcmVEZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFFQTs7OztPQUlHO0lBQ0g7UUFBd0IsZ0JBQW1CO2FBQW5CLFVBQW1CLEVBQW5CLHFCQUFtQixFQUFuQixJQUFtQjtZQUFuQiwyQkFBbUI7O1FBQ3pDLE1BQU0sQ0FBQyxVQUFTLE1BQWdCO1lBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBSkQsNEJBSUMifQ==