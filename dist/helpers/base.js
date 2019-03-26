"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = (...args) => { };
var types;
(function (types) {
    types[types["array"] = 0] = "array";
    types[types["object"] = 1] = "object";
    types[types["other"] = 2] = "other";
    types[types["function"] = 3] = "function";
})(types = exports.types || (exports.types = {}));
exports.isType = (data, expectedType) => {
    const typeOf = typeof data;
    if (data instanceof Array) {
        return types.array === expectedType;
    }
    if (typeOf === 'object') {
        return types.object === expectedType;
    }
    if (typeOf === 'function') {
        return types.function === expectedType;
    }
    return types.other === expectedType;
};
exports.copy = (data) => exports.isType(data, types.array) ? data.slice() : exports.isType(data, types.object) ? Object.assign({}, data) : data;
//# sourceMappingURL=base.js.map