var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './input.css';
import { ReactComponent as CheckMark } from '@/assets/check-mark.svg';
import { ReactComponent as ErrorMark } from '@/assets/error-mark.svg';
export var Input = function (_a) {
    var label = _a.label, defaultValue = _a.defaultValue, errorMessage = _a.errorMessage, isError = _a.isError, isChecked = _a.isChecked, props = __rest(_a, ["label", "defaultValue", "errorMessage", "isError", "isChecked"]);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "input ".concat(isError === true ? 'input--error' : ''), children: [_jsx("input", __assign({ placeholder: label }, props, { defaultValue: defaultValue })), isChecked === true && _jsx(CheckMark, {}), isError === true && _jsx(ErrorMark, {})] }), isError === true && _jsx("div", { className: "input--error-message", children: errorMessage })] }));
};
