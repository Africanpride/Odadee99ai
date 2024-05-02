"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var MainMenu = function () {
    return (React.createElement("div", null,
        React.createElement("ul", { tabIndex: 0, className: 'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-52' },
            React.createElement("li", null,
                React.createElement(link_1["default"], { href: '/' }, "Home")),
            React.createElement("li", null,
                React.createElement(link_1["default"], { href: '/about' }, "About Us")),
            React.createElement("li", null,
                React.createElement(link_1["default"], { href: '/mission-vision' }, "Mission & Vision")),
            React.createElement("li", null,
                React.createElement(link_1["default"], { href: '/get-involved' }, "Get Involved")),
            React.createElement("li", null,
                React.createElement(link_1["default"], { href: '/events' }, "Events")),
            React.createElement("li", null,
                React.createElement(link_1["default"], { href: '/news' }, "Announcements & News")),
            React.createElement("li", null,
                React.createElement(link_1["default"], { href: '/alumni-network' }, "Alumni Network")),
            React.createElement("li", null,
                React.createElement(link_1["default"], { href: '/resources' }, "Resources")),
            React.createElement("li", null,
                React.createElement(link_1["default"], { href: '/contact' }, "Contact Us")),
            React.createElement("li", null,
                React.createElement(link_1["default"], { href: '/donate-now' }, "Donate Now")))));
};
exports["default"] = MainMenu;
