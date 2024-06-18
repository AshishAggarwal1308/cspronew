/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/material-ripple-effects";
exports.ids = ["vendor-chunks/material-ripple-effects"];
exports.modules = {

/***/ "(ssr)/./node_modules/material-ripple-effects/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/material-ripple-effects/index.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("module.exports = class Ripple {\r\n  constructor() {\r\n    this.x = 0;\r\n    this.y = 0;\r\n    this.z = 0;\r\n  }\r\n\r\n  findFurthestPoint(\r\n    clickPointX,\r\n    elementWidth,\r\n    offsetX,\r\n    clickPointY,\r\n    elementHeight,\r\n    offsetY,\r\n  ) {\r\n    this.x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;\r\n    this.y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;\r\n    this.z = Math.hypot(\r\n      this.x - (clickPointX - offsetX),\r\n      this.y - (clickPointY - offsetY),\r\n    );\r\n\r\n    return this.z;\r\n  }\r\n\r\n  appyStyles(element, color, rect, radius, event) {\r\n    element.classList.add('ripple');\r\n    element.style.backgroundColor =\r\n      color === 'dark' ? 'rgba(0,0,0, 0.2)' : 'rgba(255,255,255, 0.3)';\r\n    element.style.borderRadius = '50%';\r\n    element.style.pointerEvents = 'none';\r\n    element.style.position = 'absolute';\r\n    element.style.left = event.clientX - rect.left - radius + 'px';\r\n    element.style.top = event.clientY - rect.top - radius + 'px';\r\n    element.style.width = element.style.height = radius * 2 + 'px';\r\n  }\r\n\r\n  applyAnimation(element) {\r\n    element.animate(\r\n      [\r\n        {\r\n          transform: 'scale(0)',\r\n          opacity: 1,\r\n        },\r\n        {\r\n          transform: 'scale(1.5)',\r\n          opacity: 0,\r\n        },\r\n      ],\r\n      {\r\n        duration: 500,\r\n        easing: 'linear',\r\n      },\r\n    );\r\n  }\r\n\r\n  create(event, color) {\r\n    const element = event.currentTarget;\r\n\r\n    element.style.position = 'relative';\r\n    element.style.overflow = 'hidden';\r\n\r\n    const rect = element.getBoundingClientRect();\r\n\r\n    const radius = this.findFurthestPoint(\r\n      event.clientX,\r\n      element.offsetWidth,\r\n      rect.left,\r\n      event.clientY,\r\n      element.offsetHeight,\r\n      rect.top,\r\n    );\r\n\r\n    const circle = document.createElement('span');\r\n\r\n    this.appyStyles(circle, color, rect, radius, event);\r\n    this.applyAnimation(circle);\r\n\r\n    element.appendChild(circle);\r\n\r\n    setTimeout(() => circle.remove(), 500);\r\n  }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtcmlwcGxlLWVmZmVjdHMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NzcHJvdGVjaC8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC1yaXBwbGUtZWZmZWN0cy9pbmRleC5qcz9kZDcwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUmlwcGxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgdGhpcy56ID0gMDtcclxuICB9XHJcblxyXG4gIGZpbmRGdXJ0aGVzdFBvaW50KFxyXG4gICAgY2xpY2tQb2ludFgsXHJcbiAgICBlbGVtZW50V2lkdGgsXHJcbiAgICBvZmZzZXRYLFxyXG4gICAgY2xpY2tQb2ludFksXHJcbiAgICBlbGVtZW50SGVpZ2h0LFxyXG4gICAgb2Zmc2V0WSxcclxuICApIHtcclxuICAgIHRoaXMueCA9IGNsaWNrUG9pbnRYIC0gb2Zmc2V0WCA+IGVsZW1lbnRXaWR0aCAvIDIgPyAwIDogZWxlbWVudFdpZHRoO1xyXG4gICAgdGhpcy55ID0gY2xpY2tQb2ludFkgLSBvZmZzZXRZID4gZWxlbWVudEhlaWdodCAvIDIgPyAwIDogZWxlbWVudEhlaWdodDtcclxuICAgIHRoaXMueiA9IE1hdGguaHlwb3QoXHJcbiAgICAgIHRoaXMueCAtIChjbGlja1BvaW50WCAtIG9mZnNldFgpLFxyXG4gICAgICB0aGlzLnkgLSAoY2xpY2tQb2ludFkgLSBvZmZzZXRZKSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuejtcclxuICB9XHJcblxyXG4gIGFwcHlTdHlsZXMoZWxlbWVudCwgY29sb3IsIHJlY3QsIHJhZGl1cywgZXZlbnQpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmlwcGxlJyk7XHJcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9XHJcbiAgICAgIGNvbG9yID09PSAnZGFyaycgPyAncmdiYSgwLDAsMCwgMC4yKScgOiAncmdiYSgyNTUsMjU1LDI1NSwgMC4zKSc7XHJcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xyXG4gICAgZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gcmFkaXVzICsgJ3B4JztcclxuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wIC0gcmFkaXVzICsgJ3B4JztcclxuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHJhZGl1cyAqIDIgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlBbmltYXRpb24oZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5hbmltYXRlKFxyXG4gICAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuNSknLFxyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICB7XHJcbiAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShldmVudCwgY29sb3IpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGNvbnN0IHJhZGl1cyA9IHRoaXMuZmluZEZ1cnRoZXN0UG9pbnQoXHJcbiAgICAgIGV2ZW50LmNsaWVudFgsXHJcbiAgICAgIGVsZW1lbnQub2Zmc2V0V2lkdGgsXHJcbiAgICAgIHJlY3QubGVmdCxcclxuICAgICAgZXZlbnQuY2xpZW50WSxcclxuICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgIHJlY3QudG9wLFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgdGhpcy5hcHB5U3R5bGVzKGNpcmNsZSwgY29sb3IsIHJlY3QsIHJhZGl1cywgZXZlbnQpO1xyXG4gICAgdGhpcy5hcHBseUFuaW1hdGlvbihjaXJjbGUpO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNpcmNsZS5yZW1vdmUoKSwgNTAwKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/material-ripple-effects/index.js\n");

/***/ })

};
;