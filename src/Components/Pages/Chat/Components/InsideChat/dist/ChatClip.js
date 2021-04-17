"use strict";
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
exports.__esModule = true;
var react_1 = require("react");
var Icon_1 = require("../../../../General/Constants/Icons/Icon");
var fa_1 = require("react-icons/fa");
var ThemeContext_1 = require("../../../../../Store/Themes/ThemeContext");
function DropdownMenuFiles() {
    var files = [
        {
            name: "video",
            icon: react_1["default"].createElement(fa_1.FaCamera, null),
            color: "rgb(239, 58, 58)"
        },
        {
            name: "fotografía",
            icon: react_1["default"].createElement(fa_1.FaCamera, null),
            color: "rgb(36, 228, 91)"
        }
    ];
    var styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: "53px",
            left: 0
        },
        item: {
            borderRadius: "50%",
            padding: "10px 15px",
            marginBottom: 15,
            fontSize: 20
        }
    };
    return (react_1["default"].createElement("div", { style: styles.container }, files.map(function (x) { return (react_1["default"].createElement("div", { style: __assign(__assign({}, styles.item), { backgroundColor: x.color, color: x.color }) }, x.icon)); })));
}
function ChatClip(_a) {
    var sendMessage = _a.sendMessage;
    var theme = react_1.useContext(ThemeContext_1["default"]);
    var _b = react_1.useState(false), show = _b[0], setShow = _b[1];
    var styles = {
        backgroundColor: theme.colors.primary,
        padding: "0.8rem",
        width: "fit-content",
        borderRadius: "50%",
        cursor: "pointer",
        position: "relative"
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { style: { width: "100%", display: "flex", justifyContent: "center" } },
            react_1["default"].createElement("div", { style: styles, onClick: function () { return setShow(true); } },
                react_1["default"].createElement(DropdownMenuFiles, null),
                react_1["default"].createElement(Icon_1.Icon, null,
                    react_1["default"].createElement(fa_1.FaPaperclip, null))))));
}
exports["default"] = ChatClip;
