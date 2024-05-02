"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TextLogo_1 = require("./TextLogo");
var react_2 = require("react");
var hi2_1 = require("react-icons/hi2");
var MainMenu_1 = require("./MainMenu");
var NavBar = function () {
    // Initialize state with theme from local storage if available, otherwise we set light theme
    var _a = react_2.useState(typeof window !== 'undefined' && localStorage.getItem("theme") === "dark" ? "dark" : "light"), theme = _a[0], setTheme = _a[1];
    // Update state on toggle
    var handleToggle = function (e) {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    };
    // set theme state in localstorage on mount & also update localstorage on state change
    react_2.useEffect(function () {
        localStorage.setItem("theme", theme);
        var localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        // document.querySelector("html").setAttribute("data-theme", localTheme);
        document.documentElement.setAttribute("data-theme", localTheme);
    }, [theme]);
    return (react_1["default"].createElement("div", { className: 'navbar bg-primary' },
        react_1["default"].createElement("div", { className: 'navbar-start' },
            react_1["default"].createElement("div", { className: 'dropdown' },
                react_1["default"].createElement("div", { tabIndex: 0, role: 'button', className: 'btn btn-ghost btn-circle' },
                    react_1["default"].createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                        react_1["default"].createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M4 6h16M4 12h16M4 18h7' }))),
                react_1["default"].createElement(MainMenu_1["default"], null)),
            react_1["default"].createElement("div", { className: 'text-white' }, "Menu")),
        react_1["default"].createElement("div", { className: 'navbar-center' },
            react_1["default"].createElement(TextLogo_1["default"], null)),
        react_1["default"].createElement("div", { className: 'navbar-end' },
            react_1["default"].createElement("div", { className: '' },
                react_1["default"].createElement("label", { className: 'swap swap-rotate w-12 h-12 text-lg' },
                    react_1["default"].createElement("input", { type: 'checkbox', onChange: handleToggle, 
                        // show toggle image based on localstorage theme
                        checked: theme === "light" ? false : true }),
                    theme === "dark" ? (react_1["default"].createElement("span", { className: 'text-yellow-600 w-6 h-6' },
                        react_1["default"].createElement(hi2_1.HiMiniSun, null))) : (react_1["default"].createElement("span", { className: 'text-gray-500 w-6 h-6' },
                        react_1["default"].createElement(hi2_1.HiMiniMoon, null))))))));
};
exports["default"] = NavBar;
