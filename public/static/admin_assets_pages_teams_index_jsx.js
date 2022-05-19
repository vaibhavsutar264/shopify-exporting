"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin_assets_pages_teams_index_jsx"],{

/***/ "./node_modules/@react-aria/breadcrumbs/dist/module.js":
/*!*************************************************************!*\
  !*** ./node_modules/@react-aria/breadcrumbs/dist/module.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBreadcrumbItem": () => (/* binding */ $dafd15390222438a$export$452b38fce62c9384),
/* harmony export */   "useBreadcrumbs": () => (/* binding */ $848231d7a2b3998e$export$8cefe241bd876ca0)
/* harmony export */ });
/* harmony import */ var _react_aria_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/link */ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/link/dist/module.js");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/i18n */ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/i18n/dist/module.js");




function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $dafd15390222438a$exports = {};

$parcel$export($dafd15390222438a$exports, "useBreadcrumbItem", () => $dafd15390222438a$export$452b38fce62c9384);

function $dafd15390222438a$export$452b38fce62c9384(props, ref) {
    let { isCurrent: isCurrent , isDisabled: isDisabled , 'aria-current': ariaCurrent , elementType: elementType = 'a' , ...otherProps } = props;
    let { linkProps: linkProps  } = (0,_react_aria_link__WEBPACK_IMPORTED_MODULE_0__.useLink)({
        isDisabled: isDisabled || isCurrent,
        elementType: elementType,
        ...otherProps
    }, ref);
    let isHeading = /^h[1-6]$/.test(elementType);
    let itemProps = {
    };
    if (!isHeading) itemProps = linkProps;
    if (isCurrent) {
        itemProps['aria-current'] = ariaCurrent || 'page';
        // isCurrent sets isDisabled === true for the current item,
        // so we have to restore the tabIndex in order to support autoFocus.
        itemProps.tabIndex = props.autoFocus ? -1 : undefined;
    }
    return {
        itemProps: {
            'aria-disabled': isDisabled,
            ...itemProps
        }
    };
}


var $848231d7a2b3998e$exports = {};

$parcel$export($848231d7a2b3998e$exports, "useBreadcrumbs", () => $848231d7a2b3998e$export$8cefe241bd876ca0);

var $28dc7e2f5ed40c80$exports = {};
var $b91590b2dc47de39$exports = {};
$b91590b2dc47de39$exports = JSON.parse("{\"breadcrumbs\":\"عناصر الواجهة\"}");


var $55b0693b2cf3fe91$exports = {};
$55b0693b2cf3fe91$exports = JSON.parse("{\"breadcrumbs\":\"Трохи хляб\"}");


var $6ec1ed7729e948cc$exports = {};
$6ec1ed7729e948cc$exports = JSON.parse("{\"breadcrumbs\":\"Popis cesty\"}");


var $5a41bb2baa6861e4$exports = {};
$5a41bb2baa6861e4$exports = JSON.parse("{\"breadcrumbs\":\"Brødkrummer\"}");


var $f28bbea439e87eca$exports = {};
$f28bbea439e87eca$exports = JSON.parse("{\"breadcrumbs\":\"Breadcrumbs\"}");


var $b3eca51cb720961a$exports = {};
$b3eca51cb720961a$exports = JSON.parse("{\"breadcrumbs\":\"Πλοηγήσεις breadcrumb\"}");


var $0b39b205118db415$exports = {};
$0b39b205118db415$exports = JSON.parse("{\"breadcrumbs\":\"Breadcrumbs\"}");


var $f467c0ee7bfb0950$exports = {};
$f467c0ee7bfb0950$exports = JSON.parse("{\"breadcrumbs\":\"Migas de pan\"}");


var $ab711d2ffb4cdf3d$exports = {};
$ab711d2ffb4cdf3d$exports = JSON.parse("{\"breadcrumbs\":\"Lingiread\"}");


var $b63105d663e6f9d5$exports = {};
$b63105d663e6f9d5$exports = JSON.parse("{\"breadcrumbs\":\"Navigointilinkit\"}");


var $9d2ed7be7fcdc2a1$exports = {};
$9d2ed7be7fcdc2a1$exports = JSON.parse("{\"breadcrumbs\":\"Chemin de navigation\"}");


var $c5704294d85c7b5d$exports = {};
$c5704294d85c7b5d$exports = JSON.parse("{\"breadcrumbs\":\"שבילי ניווט\"}");


var $20c975671d6bbc63$exports = {};
$20c975671d6bbc63$exports = JSON.parse("{\"breadcrumbs\":\"Navigacijski putovi\"}");


var $2569ca3917233115$exports = {};
$2569ca3917233115$exports = JSON.parse("{\"breadcrumbs\":\"Morzsamenü\"}");


var $caa152f7f8e96c85$exports = {};
$caa152f7f8e96c85$exports = JSON.parse("{\"breadcrumbs\":\"Breadcrumb\"}");


var $cbc6af0cc98fad10$exports = {};
$cbc6af0cc98fad10$exports = JSON.parse("{\"breadcrumbs\":\"パンくずリスト\"}");


var $ad9be5d332b4d607$exports = {};
$ad9be5d332b4d607$exports = JSON.parse("{\"breadcrumbs\":\"탐색 표시\"}");


var $659de19a00ff9617$exports = {};
$659de19a00ff9617$exports = JSON.parse("{\"breadcrumbs\":\"Naršymo kelias\"}");


var $173e9fb4d14fe309$exports = {};
$173e9fb4d14fe309$exports = JSON.parse("{\"breadcrumbs\":\"Atpakaļceļi\"}");


var $d8e2640a066567a9$exports = {};
$d8e2640a066567a9$exports = JSON.parse("{\"breadcrumbs\":\"Navigasjonsstier\"}");


var $d71fd764236c0d12$exports = {};
$d71fd764236c0d12$exports = JSON.parse("{\"breadcrumbs\":\"Broodkruimels\"}");


var $f4ad3faf9f4aaec6$exports = {};
$f4ad3faf9f4aaec6$exports = JSON.parse("{\"breadcrumbs\":\"Struktura nawigacyjna\"}");


var $9703be9d55d8e9c2$exports = {};
$9703be9d55d8e9c2$exports = JSON.parse("{\"breadcrumbs\":\"Caminho detalhado\"}");


var $7e23baec8a14f309$exports = {};
$7e23baec8a14f309$exports = JSON.parse("{\"breadcrumbs\":\"Categorias\"}");


var $568f95594049d56e$exports = {};
$568f95594049d56e$exports = JSON.parse("{\"breadcrumbs\":\"Miez de pâine\"}");


var $625df06cecc70764$exports = {};
$625df06cecc70764$exports = JSON.parse("{\"breadcrumbs\":\"Навигация\"}");


var $b5a67525f3a2f594$exports = {};
$b5a67525f3a2f594$exports = JSON.parse("{\"breadcrumbs\":\"Navigačné prvky Breadcrumbs\"}");


var $16125922964febca$exports = {};
$16125922964febca$exports = JSON.parse("{\"breadcrumbs\":\"Drobtine\"}");


var $de104bf355206bcf$exports = {};
$de104bf355206bcf$exports = JSON.parse("{\"breadcrumbs\":\"Putanje navigacije\"}");


var $d5ab76bcbadc9c07$exports = {};
$d5ab76bcbadc9c07$exports = JSON.parse("{\"breadcrumbs\":\"Sökvägar\"}");


var $a6a1af5968159b55$exports = {};
$a6a1af5968159b55$exports = JSON.parse("{\"breadcrumbs\":\"İçerik haritaları\"}");


var $5204a30f0d17ffec$exports = {};
$5204a30f0d17ffec$exports = JSON.parse("{\"breadcrumbs\":\"Навігаційна стежка\"}");


var $8d15e736e12d3dfd$exports = {};
$8d15e736e12d3dfd$exports = JSON.parse("{\"breadcrumbs\":\"导航栏\"}");


var $f8c49dd804b75140$exports = {};
$f8c49dd804b75140$exports = JSON.parse("{\"breadcrumbs\":\"導覽列\"}");


$28dc7e2f5ed40c80$exports = {
    "ar-AE": $b91590b2dc47de39$exports,
    "bg-BG": $55b0693b2cf3fe91$exports,
    "cs-CZ": $6ec1ed7729e948cc$exports,
    "da-DK": $5a41bb2baa6861e4$exports,
    "de-DE": $f28bbea439e87eca$exports,
    "el-GR": $b3eca51cb720961a$exports,
    "en-US": $0b39b205118db415$exports,
    "es-ES": $f467c0ee7bfb0950$exports,
    "et-EE": $ab711d2ffb4cdf3d$exports,
    "fi-FI": $b63105d663e6f9d5$exports,
    "fr-FR": $9d2ed7be7fcdc2a1$exports,
    "he-IL": $c5704294d85c7b5d$exports,
    "hr-HR": $20c975671d6bbc63$exports,
    "hu-HU": $2569ca3917233115$exports,
    "it-IT": $caa152f7f8e96c85$exports,
    "ja-JP": $cbc6af0cc98fad10$exports,
    "ko-KR": $ad9be5d332b4d607$exports,
    "lt-LT": $659de19a00ff9617$exports,
    "lv-LV": $173e9fb4d14fe309$exports,
    "nb-NO": $d8e2640a066567a9$exports,
    "nl-NL": $d71fd764236c0d12$exports,
    "pl-PL": $f4ad3faf9f4aaec6$exports,
    "pt-BR": $9703be9d55d8e9c2$exports,
    "pt-PT": $7e23baec8a14f309$exports,
    "ro-RO": $568f95594049d56e$exports,
    "ru-RU": $625df06cecc70764$exports,
    "sk-SK": $b5a67525f3a2f594$exports,
    "sl-SI": $16125922964febca$exports,
    "sr-SP": $de104bf355206bcf$exports,
    "sv-SE": $d5ab76bcbadc9c07$exports,
    "tr-TR": $a6a1af5968159b55$exports,
    "uk-UA": $5204a30f0d17ffec$exports,
    "zh-CN": $8d15e736e12d3dfd$exports,
    "zh-TW": $f8c49dd804b75140$exports
};



function $848231d7a2b3998e$export$8cefe241bd876ca0(props) {
    let { 'aria-label': ariaLabel , ...otherProps } = props;
    let formatMessage = (0,_react_aria_i18n__WEBPACK_IMPORTED_MODULE_1__.useMessageFormatter)((/*@__PURE__*/$parcel$interopDefault($28dc7e2f5ed40c80$exports)));
    return {
        navProps: {
            ...(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.filterDOMProps)(otherProps, {
                labelable: true
            }),
            'aria-label': ariaLabel || formatMessage('breadcrumbs')
        }
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/focus/dist/module.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/focus/dist/module.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusScope": () => (/* binding */ $9bf71ea28793e738$export$20e40289641fbbb6),
/* harmony export */   "useFocusManager": () => (/* binding */ $9bf71ea28793e738$export$10c5169755ce7bd7),
/* harmony export */   "getFocusableTreeWalker": () => (/* binding */ $9bf71ea28793e738$export$2d6ec8fc375ceafa),
/* harmony export */   "createFocusManager": () => (/* binding */ $9bf71ea28793e738$export$c5251b9e124bf29),
/* harmony export */   "FocusRing": () => (/* binding */ $907718708eab68af$export$1a38b4ad7f578e1d),
/* harmony export */   "FocusableProvider": () => (/* binding */ $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5),
/* harmony export */   "useFocusable": () => (/* binding */ $e6afbd83fe6ebbd2$export$4c014de7c8940b4c),
/* harmony export */   "useFocusRing": () => (/* binding */ $f7dceffc5ad7768b$export$4e328f61c538687f),
/* harmony export */   "focusSafely": () => (/* binding */ $6a99195332edec8b$export$80f3e147d781571c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/module.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");





function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9bf71ea28793e738$exports = {};

$parcel$export($9bf71ea28793e738$exports, "FocusScope", () => $9bf71ea28793e738$export$20e40289641fbbb6);
$parcel$export($9bf71ea28793e738$exports, "useFocusManager", () => $9bf71ea28793e738$export$10c5169755ce7bd7);
$parcel$export($9bf71ea28793e738$exports, "getFocusableTreeWalker", () => $9bf71ea28793e738$export$2d6ec8fc375ceafa);
$parcel$export($9bf71ea28793e738$exports, "createFocusManager", () => $9bf71ea28793e738$export$c5251b9e124bf29);
var $6a99195332edec8b$exports = {};

$parcel$export($6a99195332edec8b$exports, "focusSafely", () => $6a99195332edec8b$export$80f3e147d781571c);


function $6a99195332edec8b$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    if ((0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.getInteractionModality)() === 'virtual') {
        let lastFocusedElement = document.activeElement;
        (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.runAfterTransition)(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if (document.activeElement === lastFocusedElement && document.contains(element)) (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.focusWithoutScrolling)(element);
        });
    } else (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.focusWithoutScrolling)(element);
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $645f2e67b85a24c9$var$isStyleVisible(element) {
    if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) return false;
    let { display: display , visibility: visibility  } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle: getComputedStyle  } = element.ownerDocument.defaultView;
        let { display: computedDisplay , visibility: computedVisibility  } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
    return element.nodeName !== '#comment' && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}




const $9bf71ea28793e738$var$FocusContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
let $9bf71ea28793e738$var$activeScope = null;
let $9bf71ea28793e738$var$scopes = new Map();
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
    let { children: children , contain: contain , restoreFocus: restoreFocus , autoFocus: autoFocus  } = props;
    let startRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    let endRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    let scopeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    let ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($9bf71ea28793e738$var$FocusContext);
    let parentScope = ctx === null || ctx === void 0 ? void 0 : ctx.scopeRef;
    (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        // Find all rendered nodes between the sentinels and add them to the scope.
        let node = startRef.current.nextSibling;
        let nodes = [];
        while(node && node !== endRef.current){
            nodes.push(node);
            node = node.nextSibling;
        }
        scopeRef.current = nodes;
    }, [
        children,
        parentScope
    ]);
    (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        $9bf71ea28793e738$var$scopes.set(scopeRef, parentScope);
        return ()=>{
            // Restore the active scope on unmount if this scope or a descendant scope is active.
            // Parent effect cleanups run before children, so we need to check if the
            // parent scope actually still exists before restoring the active scope to it.
            if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$var$scopes.has(parentScope))) $9bf71ea28793e738$var$activeScope = parentScope;
            $9bf71ea28793e738$var$scopes.delete(scopeRef);
        };
    }, [
        scopeRef,
        parentScope
    ]);
    $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
    $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
    let focusManager = $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($9bf71ea28793e738$var$FocusContext.Provider, {
        value: {
            scopeRef: scopeRef,
            focusManager: focusManager
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        "data-focus-scope-start": true,
        hidden: true,
        ref: startRef
    }), children, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        "data-focus-scope-end": true,
        hidden: true,
        ref: endRef
    })));
}
function $9bf71ea28793e738$export$10c5169755ce7bd7() {
    var ref;
    return (ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($9bf71ea28793e738$var$FocusContext)) === null || ref === void 0 ? void 0 : ref.focusManager;
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
    return {
        focusNext (opts = {
        }) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[0].previousElementSibling;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = sentinel;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {
        }) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[scope.length - 1].nextElementSibling;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = sentinel;
                previousNode = walker.previousNode();
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {
        }) {
            let scope = scopeRef.current;
            let { tabbable: tabbable  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = scope[0].previousElementSibling;
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {
        }) {
            let scope = scopeRef.current;
            let { tabbable: tabbable  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = scope[scope.length - 1].nextElementSibling;
            let previousNode = walker.previousNode();
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        }
    };
}
const $9bf71ea28793e738$var$focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]'
];
const $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$getScopeRoot(scope) {
    return scope[0].parentElement;
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
    let focusedNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    let raf = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        let scope1 = scopeRef.current;
        if (!contain) return;
        // Handle the Tab key to contain focus within the scope
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || scopeRef !== $9bf71ea28793e738$var$activeScope) return;
            let focusedElement = document.activeElement;
            let scope = scopeRef.current;
            if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scope)) return;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: true
            }, scope);
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nextElement) {
                walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
                nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            }
            e.preventDefault();
            if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
        };
        let onFocus = (e)=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if (!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) {
                $9bf71ea28793e738$var$activeScope = scopeRef;
                focusedNode.current = e.target;
            } else if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(e.target, scopeRef)) {
                // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
                // restore focus to the previously focused node or the first tabbable element in the active scope.
                if (focusedNode.current) focusedNode.current.focus();
                else if ($9bf71ea28793e738$var$activeScope) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
            } else if (scopeRef === $9bf71ea28793e738$var$activeScope) focusedNode.current = e.target;
        };
        let onBlur = (e)=>{
            // Firefox doesn't shift focus back to the Dialog properly without this
            raf.current = requestAnimationFrame(()=>{
                // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
                if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(document.activeElement, scopeRef)) {
                    $9bf71ea28793e738$var$activeScope = scopeRef;
                    focusedNode.current = e.target;
                    focusedNode.current.focus();
                }
            });
        };
        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('focusin', onFocus, false);
        scope1.forEach((element)=>element.addEventListener('focusin', onFocus, false)
        );
        scope1.forEach((element)=>element.addEventListener('focusout', onBlur, false)
        );
        return ()=>{
            document.removeEventListener('keydown', onKeyDown, false);
            document.removeEventListener('focusin', onFocus, false);
            scope1.forEach((element)=>element.removeEventListener('focusin', onFocus, false)
            );
            scope1.forEach((element)=>element.removeEventListener('focusout', onBlur, false)
            );
        };
    }, [
        scopeRef,
        contain
    ]);
    // eslint-disable-next-line arrow-body-style
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>cancelAnimationFrame(raf.current)
        ;
    }, [
        raf
    ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
    for (let scope of $9bf71ea28793e738$var$scopes.keys()){
        if ($9bf71ea28793e738$var$isElementInScope(element, scope.current)) return true;
    }
    return false;
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
    return scope.some((node)=>node.contains(element)
    );
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope) {
    // node.contains in isElementInScope covers child scopes that are also DOM children,
    // but does not cover child scopes in portals.
    for (let s of $9bf71ea28793e738$var$scopes.keys()){
        if ((s === scope || $9bf71ea28793e738$var$isAncestorScope(scope, s)) && $9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
    }
    return false;
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
    let parent = $9bf71ea28793e738$var$scopes.get(scope);
    if (!parent) return false;
    if (parent === ancestor) return true;
    return $9bf71ea28793e738$var$isAncestorScope(ancestor, parent);
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        $6a99195332edec8b$export$80f3e147d781571c(element);
    } catch (err) {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch (err1) {
    // ignore
    }
}
function $9bf71ea28793e738$var$focusFirstInScope(scope) {
    let sentinel = scope[0].previousElementSibling;
    let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable: true
    }, scope);
    walker.currentNode = sentinel;
    $9bf71ea28793e738$var$focusElement(walker.nextNode());
}
function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
    const autoFocusRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(autoFocus);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (autoFocusRef.current) {
            $9bf71ea28793e738$var$activeScope = scopeRef;
            if (!$9bf71ea28793e738$var$isElementInScope(document.activeElement, $9bf71ea28793e738$var$activeScope.current)) $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
        }
        autoFocusRef.current = false;
    }, []);
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
    // create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
    const nodeToRestoreRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(typeof document !== 'undefined' ? document.activeElement : null);
    // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
    (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        let nodeToRestore = nodeToRestoreRef.current;
        if (!restoreFocus) return;
        // Handle the Tab key so that tabbing out of the scope goes to the next element
        // after the node that had focus when the scope mounted. This is important when
        // using portals for overlays, so that focus goes to the expected element when
        // tabbing out of the overlay.
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey) return;
            let focusedElement = document.activeElement;
            if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scopeRef.current)) return;
            // Create a DOM tree walker that matches all tabbable elements
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(document.body, {
                tabbable: true
            });
            // Find the next tabbable element after the currently focused element
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body) nodeToRestore = null;
            // If there is no next element, or it is outside the current scope, move focus to the
            // next element after the node to restore to instead.
            if ((!nextElement || !$9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current)) && nodeToRestore) {
                walker.currentNode = nodeToRestore;
                // Skip over elements within the scope, in case the scope immediately follows the node to restore.
                do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
                while ($9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current))
                e.preventDefault();
                e.stopPropagation();
                if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
                else // If there is no next element and the nodeToRestore isn't within a FocusScope (i.e. we are leaving the top level focus scope)
                // then move focus to the body.
                // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
                if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
                else $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
            }
        };
        if (!contain) document.addEventListener('keydown', onKeyDown, true);
        return ()=>{
            if (!contain) document.removeEventListener('keydown', onKeyDown, true);
            if (restoreFocus && nodeToRestore && $9bf71ea28793e738$var$isElementInScope(document.activeElement, scopeRef.current)) requestAnimationFrame(()=>{
                if (document.body.contains(nodeToRestore)) $9bf71ea28793e738$var$focusElement(nodeToRestore);
            });
        };
    }, [
        scopeRef,
        restoreFocus,
        contain
    ]);
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
    let selector = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR : $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR;
    let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            var ref;
            // Skip nodes inside the starting node.
            if (opts === null || opts === void 0 ? void 0 : (ref = opts.from) === null || ref === void 0 ? void 0 : ref.contains(node)) return NodeFilter.FILTER_REJECT;
            if (node.matches(selector) && $645f2e67b85a24c9$export$e989c0fffaa6b27a(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
    return walker;
}
function $9bf71ea28793e738$export$c5251b9e124bf29(ref) {
    return {
        focusNext (opts = {
        }) {
            let root = ref.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            if (root.contains(node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {
        }) {
            let root = ref.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            if (root.contains(node)) walker.currentNode = node;
            else {
                let next = $9bf71ea28793e738$var$last(walker);
                if (next) $9bf71ea28793e738$var$focusElement(next, true);
                return next;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                previousNode = $9bf71ea28793e738$var$last(walker);
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {
        }) {
            let root = ref.current;
            let { tabbable: tabbable  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {
        }) {
            let root = ref.current;
            let { tabbable: tabbable  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            let next = $9bf71ea28793e738$var$last(walker);
            if (next) $9bf71ea28793e738$var$focusElement(next, true);
            return next;
        }
    };
}
function $9bf71ea28793e738$var$last(walker) {
    let next;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last)
    return next;
}


var $907718708eab68af$exports = {};

$parcel$export($907718708eab68af$exports, "FocusRing", () => $907718708eab68af$export$1a38b4ad7f578e1d);



var $f7dceffc5ad7768b$exports = {};

$parcel$export($f7dceffc5ad7768b$exports, "useFocusRing", () => $f7dceffc5ad7768b$export$4e328f61c538687f);



function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {
}) {
    let { autoFocus: autoFocus = false , isTextInput: isTextInput , within: within  } = props;
    let state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocused: false,
        isFocusVisible: autoFocus || (0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.isFocusVisible)()
    }).current;
    let [isFocused1, setFocused] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>state.isFocused && state.isFocusVisible
    );
    let updateState = ()=>setFocusVisible(state.isFocused && state.isFocusVisible)
    ;
    let onFocusChange = (isFocused)=>{
        state.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    };
    (0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useFocusVisibleListener)((isFocusVisible)=>{
        state.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps  } = (0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useFocus)({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps  } = (0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useFocusWithin)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused1,
        isFocusVisible: state.isFocused && isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}


function $907718708eab68af$export$1a38b4ad7f578e1d(props) {
    let { children: children , focusClass: focusClass , focusRingClass: focusRingClass  } = props;
    let { isFocused: isFocused , isFocusVisible: isFocusVisible , focusProps: focusProps  } = $f7dceffc5ad7768b$export$4e328f61c538687f(props);
    let child = react__WEBPACK_IMPORTED_MODULE_0___default().Children.only(children);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.mergeProps)(child.props, {
        ...focusProps,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])({
            [focusClass || '']: isFocused,
            [focusRingClass || '']: isFocusVisible
        })
    })));
}


var $e6afbd83fe6ebbd2$exports = {};

$parcel$export($e6afbd83fe6ebbd2$exports, "FocusableProvider", () => $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5);
$parcel$export($e6afbd83fe6ebbd2$exports, "useFocusable", () => $e6afbd83fe6ebbd2$export$4c014de7c8940b4c);




let $e6afbd83fe6ebbd2$var$FocusableContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
    let context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($e6afbd83fe6ebbd2$var$FocusableContext) || {
    };
    (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useSyncRef)(context, ref);
    // eslint-disable-next-line
    let { ref: _ , ...otherProps } = context;
    return otherProps;
}
/**
 * Provides DOM props to the nearest focusable child.
 */ function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
    let { children: children , ...otherProps } = props;
    let context = {
        ...otherProps,
        ref: ref
    };
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
        value: context
    }, children));
}
let $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps  } = (0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useFocus)(props);
    let { keyboardProps: keyboardProps  } = (0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useKeyboard)(props);
    let interactions = (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.mergeProps)(focusProps, keyboardProps);
    let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {
    } : domProps;
    let autoFocusRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.autoFocus);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) $6a99195332edec8b$export$80f3e147d781571c(domRef.current);
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    return {
        focusableProps: (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.mergeProps)({
            ...interactions,
            tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
        }, interactionProps)
    };
}







//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/i18n/dist/module.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/i18n/dist/module.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18nProvider": () => (/* binding */ $18f2051aff69b9bf$export$a54013f0d02a8f82),
/* harmony export */   "useLocale": () => (/* binding */ $18f2051aff69b9bf$export$43bb16f9c6d9e3f7),
/* harmony export */   "useMessageFormatter": () => (/* binding */ $321bc95feeb923dd$export$ec23bf898b1eed85),
/* harmony export */   "useDateFormatter": () => (/* binding */ $896ba0a80a8f4d36$export$85fd5fdf27bacc79),
/* harmony export */   "useNumberFormatter": () => (/* binding */ $a916eb452884faea$export$b7a616150fdb9f44),
/* harmony export */   "useCollator": () => (/* binding */ $325a3faab7a68acd$export$a16aca283550c30d),
/* harmony export */   "useFilter": () => (/* binding */ $bb77f239b46e8c72$export$3274cf84b703fff)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/ssr */ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/ssr/dist/module.js");
/* harmony import */ var _internationalized_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internationalized/message */ "./node_modules/@internationalized/message/dist/module.js");
/* harmony import */ var _internationalized_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internationalized/date */ "./node_modules/@internationalized/date/dist/module.js");
/* harmony import */ var _internationalized_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internationalized/number */ "./node_modules/@internationalized/number/dist/module.js");






function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $18f2051aff69b9bf$exports = {};

$parcel$export($18f2051aff69b9bf$exports, "I18nProvider", () => $18f2051aff69b9bf$export$a54013f0d02a8f82);
$parcel$export($18f2051aff69b9bf$exports, "useLocale", () => $18f2051aff69b9bf$export$43bb16f9c6d9e3f7);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $148a7a147e38ea7f$var$RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const $148a7a147e38ea7f$var$RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(locale) {
    // If the Intl.Locale API is available, use it to get the script for the locale.
    // This is more accurate than guessing by language, since languages can be written in multiple scripts.
    // @ts-ignore
    if (Intl.Locale) {
        // @ts-ignore
        let script = new Intl.Locale(locale).maximize().script;
        return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = locale.split('-')[0];
    return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}





function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
    // @ts-ignore
    let locale = typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        // @ts-ignore
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch (_err) {
        locale = 'en-US';
    }
    return {
        locale: locale,
        direction: $148a7a147e38ea7f$export$702d680b21cbd764(locale) ? 'rtl' : 'ltr'
    };
}
let $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
let $1e5a04cdaf7d1af8$var$listeners = new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
    $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
    for (let listener of $1e5a04cdaf7d1af8$var$listeners)listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
    let isSSR = (0,_react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__.useIsSSR)();
    let [defaultLocale, setDefaultLocale] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)($1e5a04cdaf7d1af8$var$currentLocale);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
        return ()=>{
            $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
            if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: 'en-US',
        direction: 'ltr'
    };
    return defaultLocale;
}



const $18f2051aff69b9bf$var$I18nContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
function $18f2051aff69b9bf$export$a54013f0d02a8f82(props) {
    let { locale: locale , children: children  } = props;
    let defaultLocale = $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a();
    let value = locale ? {
        locale: locale,
        direction: $148a7a147e38ea7f$export$702d680b21cbd764(locale) ? 'rtl' : 'ltr'
    } : defaultLocale;
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($18f2051aff69b9bf$var$I18nContext.Provider, {
        value: value
    }, children));
}
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
    let defaultLocale = $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a();
    let context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($18f2051aff69b9bf$var$I18nContext);
    return context || defaultLocale;
}


var $321bc95feeb923dd$exports = {};

$parcel$export($321bc95feeb923dd$exports, "useMessageFormatter", () => $321bc95feeb923dd$export$ec23bf898b1eed85);



const $321bc95feeb923dd$var$cache = new WeakMap();
function $321bc95feeb923dd$var$getCachedDictionary(strings) {
    let dictionary = $321bc95feeb923dd$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new _internationalized_message__WEBPACK_IMPORTED_MODULE_2__.MessageDictionary(strings);
        $321bc95feeb923dd$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $321bc95feeb923dd$export$ec23bf898b1eed85(strings) {
    let { locale: locale  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let dictionary = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>$321bc95feeb923dd$var$getCachedDictionary(strings)
    , [
        strings
    ]);
    let formatter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _internationalized_message__WEBPACK_IMPORTED_MODULE_2__.MessageFormatter(locale, dictionary)
    , [
        locale,
        dictionary
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((key, variables)=>formatter.format(key, variables)
    , [
        formatter
    ]);
}


var $896ba0a80a8f4d36$exports = {};

$parcel$export($896ba0a80a8f4d36$exports, "useDateFormatter", () => $896ba0a80a8f4d36$export$85fd5fdf27bacc79);



function $896ba0a80a8f4d36$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    let lastOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (options && lastOptions.current && $896ba0a80a8f4d36$var$isEqual(options, lastOptions.current)) options = lastOptions.current;
    lastOptions.current = options;
    let { locale: locale  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _internationalized_date__WEBPACK_IMPORTED_MODULE_3__.DateFormatter(locale, options)
    , [
        locale,
        options
    ]);
}
function $896ba0a80a8f4d36$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}


var $a916eb452884faea$exports = {};

$parcel$export($a916eb452884faea$exports, "useNumberFormatter", () => $a916eb452884faea$export$b7a616150fdb9f44);



function $a916eb452884faea$export$b7a616150fdb9f44(options = {
}) {
    let { locale: locale  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _internationalized_number__WEBPACK_IMPORTED_MODULE_4__.NumberFormatter(locale, options)
    , [
        locale,
        options
    ]);
}


var $325a3faab7a68acd$exports = {};

$parcel$export($325a3faab7a68acd$exports, "useCollator", () => $325a3faab7a68acd$export$a16aca283550c30d);

let $325a3faab7a68acd$var$cache = new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
    let { locale: locale  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1
    ).join() : '');
    if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
    return formatter;
}


var $bb77f239b46e8c72$exports = {};

$parcel$export($bb77f239b46e8c72$exports, "useFilter", () => $bb77f239b46e8c72$export$3274cf84b703fff);

function $bb77f239b46e8c72$export$3274cf84b703fff(options) {
    let collator = $325a3faab7a68acd$export$a16aca283550c30d({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    return {
        startsWith (string, substring) {
            if (substring.length === 0) return true;
            // Normalize both strings so we can slice safely
            // TODO: take into account the ignorePunctuation option as well...
            string = string.normalize('NFC');
            substring = substring.normalize('NFC');
            return collator.compare(string.slice(0, substring.length), substring) === 0;
        },
        endsWith (string, substring) {
            if (substring.length === 0) return true;
            string = string.normalize('NFC');
            substring = substring.normalize('NFC');
            return collator.compare(string.slice(-substring.length), substring) === 0;
        },
        contains (string, substring) {
            if (substring.length === 0) return true;
            string = string.normalize('NFC');
            substring = substring.normalize('NFC');
            let scan = 0;
            let sliceLen = substring.length;
            for(; scan + sliceLen <= string.length; scan++){
                let slice = string.slice(scan, scan + sliceLen);
                if (collator.compare(substring, slice) === 0) return true;
            }
            return false;
        }
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/link/dist/module.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/link/dist/module.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLink": () => (/* binding */ $298d61e98472621b$export$dcf14c9974fe2767)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/focus/dist/module.js");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/module.js");




function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $298d61e98472621b$exports = {};

$parcel$export($298d61e98472621b$exports, "useLink", () => $298d61e98472621b$export$dcf14c9974fe2767);



function $298d61e98472621b$export$dcf14c9974fe2767(props, ref) {
    let { elementType: elementType = 'a' , onPress: onPress , onPressStart: onPressStart , onPressEnd: onPressEnd , // @ts-ignore
    onClick: deprecatedOnClick , isDisabled: isDisabled , ...otherProps } = props;
    let linkProps;
    if (elementType !== 'a') linkProps = {
        role: 'link',
        tabIndex: !isDisabled ? 0 : undefined
    };
    let { focusableProps: focusableProps  } = (0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_0__.useFocusable)(props, ref);
    let { pressProps: pressProps , isPressed: isPressed  } = (0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__.usePress)({
        onPress: onPress,
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        isDisabled: isDisabled,
        ref: ref
    });
    let domProps = (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.filterDOMProps)(otherProps, {
        labelable: true
    });
    let interactionHandlers = (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.mergeProps)(focusableProps, pressProps);
    return {
        isPressed: isPressed,
        linkProps: (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.mergeProps)(domProps, {
            ...interactionHandlers,
            ...linkProps,
            'aria-disabled': isDisabled || undefined,
            onClick: (e)=>{
                pressProps.onClick(e);
                if (deprecatedOnClick) {
                    deprecatedOnClick(e);
                    console.warn('onClick is deprecated, please use onPress');
                }
            }
        })
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/ssr/dist/module.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/ssr/dist/module.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSRProvider": () => (/* binding */ $9d939cbc98267846$export$9f8ac96af4b1b2ae),
/* harmony export */   "useSSRSafeId": () => (/* binding */ $9d939cbc98267846$export$619500959fc48b26),
/* harmony export */   "useIsSSR": () => (/* binding */ $9d939cbc98267846$export$535bd6ca7f90a273)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9d939cbc98267846$exports = {};

$parcel$export($9d939cbc98267846$exports, "SSRProvider", () => $9d939cbc98267846$export$9f8ac96af4b1b2ae);
$parcel$export($9d939cbc98267846$exports, "useSSRSafeId", () => $9d939cbc98267846$export$619500959fc48b26);
$parcel$export($9d939cbc98267846$exports, "useIsSSR", () => $9d939cbc98267846$export$535bd6ca7f90a273);

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $9d939cbc98267846$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $9d939cbc98267846$var$SSRContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext($9d939cbc98267846$var$defaultContext);
function $9d939cbc98267846$export$9f8ac96af4b1b2ae(props) {
    let cur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($9d939cbc98267846$var$SSRContext);
    let value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $9d939cbc98267846$var$defaultContext ? '' : `${cur.prefix}-${++cur.current}`,
            current: 0
        })
    , [
        cur
    ]);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($9d939cbc98267846$var$SSRContext.Provider, {
        value: value
    }, props.children));
}
let $9d939cbc98267846$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
function $9d939cbc98267846$export$619500959fc48b26(defaultId) {
    let ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($9d939cbc98267846$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $9d939cbc98267846$var$defaultContext && !$9d939cbc98267846$var$canUseDOM) console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>defaultId || `react-aria${ctx.prefix}-${++ctx.current}`
    , [
        defaultId
    ]);
}
function $9d939cbc98267846$export$535bd6ca7f90a273() {
    let cur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($9d939cbc98267846$var$SSRContext);
    let isInSSRContext = cur !== $9d939cbc98267846$var$defaultContext;
    let [isSSR, setIsSSR] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isInSSRContext);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof window !== 'undefined' && isInSSRContext) // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        setIsSSR(false);
    }, []);
    return isSSR;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/utils/dist/module.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/utils/dist/module.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useId": () => (/* binding */ $bdb11010cef70236$export$f680877a34711e37),
/* harmony export */   "mergeIds": () => (/* binding */ $bdb11010cef70236$export$cd8c9cb68f842629),
/* harmony export */   "useSlotId": () => (/* binding */ $bdb11010cef70236$export$b4cc09c592e8fdb8),
/* harmony export */   "chain": () => (/* binding */ $ff5963eb1fccf552$export$e08e3b67e392101e),
/* harmony export */   "mergeProps": () => (/* binding */ $3ef42575df84b30b$export$9d1611c77c2fe928),
/* harmony export */   "mergeRefs": () => (/* binding */ $5dc95899b306f630$export$c9058316764c140e),
/* harmony export */   "filterDOMProps": () => (/* binding */ $65484d02dcb7eb3e$export$457c3d6518dd4c6f),
/* harmony export */   "focusWithoutScrolling": () => (/* binding */ $7215afc6de606d6b$export$de79e2c695e052f3),
/* harmony export */   "getOffset": () => (/* binding */ $ab71dadb03a6fb2e$export$622cea445a1c5b7d),
/* harmony export */   "clamp": () => (/* reexport safe */ _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__.clamp),
/* harmony export */   "snapValueToStep": () => (/* reexport safe */ _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__.snapValueToStep),
/* harmony export */   "runAfterTransition": () => (/* binding */ $bbed8b41f857bcc0$export$24490316f764c430),
/* harmony export */   "useDrag1D": () => (/* binding */ $9cc09df9fd7676be$export$7bbed75feba39706),
/* harmony export */   "useGlobalListeners": () => (/* binding */ $03deb23ff14920c4$export$4eaf04e54aa8eed6),
/* harmony export */   "useLabels": () => (/* binding */ $313b98861ee5dd6c$export$d6875122194c7b44),
/* harmony export */   "useObjectRef": () => (/* binding */ $df56164dff5785e2$export$4338b53315abf666),
/* harmony export */   "useUpdateEffect": () => (/* binding */ $4f58c5f72bcf79f7$export$496315a1608d9602),
/* harmony export */   "useLayoutEffect": () => (/* binding */ $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c),
/* harmony export */   "useResizeObserver": () => (/* binding */ $9daab02d461809db$export$683480f191c0e3ea),
/* harmony export */   "useSyncRef": () => (/* binding */ $e7801be82b4b2a53$export$4debdb1a3f0fa79e),
/* harmony export */   "getScrollParent": () => (/* binding */ $62d8ded9296f3872$export$cfa2225e87938781),
/* harmony export */   "useViewportSize": () => (/* binding */ $5df64b3807dc15ee$export$d699905dd57c73ca),
/* harmony export */   "useDescription": () => (/* binding */ $ef06256079686ba0$export$f8aeda7b10753fa1),
/* harmony export */   "isMac": () => (/* binding */ $c87311424ea30a05$export$9ac100e40613ea10),
/* harmony export */   "isIPhone": () => (/* binding */ $c87311424ea30a05$export$186c6964ca17d99),
/* harmony export */   "isIPad": () => (/* binding */ $c87311424ea30a05$export$7bef049ce92e4224),
/* harmony export */   "isIOS": () => (/* binding */ $c87311424ea30a05$export$fedb369cb70207f1),
/* harmony export */   "isAppleDevice": () => (/* binding */ $c87311424ea30a05$export$e1865c3bedcd822b),
/* harmony export */   "isWebKit": () => (/* binding */ $c87311424ea30a05$export$78551043582a6a98),
/* harmony export */   "isChrome": () => (/* binding */ $c87311424ea30a05$export$6446a186d09e379e),
/* harmony export */   "isAndroid": () => (/* binding */ $c87311424ea30a05$export$a11b0059900ceec8),
/* harmony export */   "useEvent": () => (/* binding */ $e9faafb641e167db$export$90fc3a17d93f704c),
/* harmony export */   "useValueEffect": () => (/* binding */ $1dbecbe27a04f9af$export$14d238f342723f25),
/* harmony export */   "scrollIntoView": () => (/* binding */ $2f04cbc44ee30ce0$export$53a0910f038337bd)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/ssr */ "./node_modules/@react-aria/breadcrumbs/node_modules/@react-aria/ssr/dist/module.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-stately/utils */ "./node_modules/@react-stately/utils/dist/module.js");





function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $bdb11010cef70236$exports = {};

$parcel$export($bdb11010cef70236$exports, "useId", () => $bdb11010cef70236$export$f680877a34711e37);
$parcel$export($bdb11010cef70236$exports, "mergeIds", () => $bdb11010cef70236$export$cd8c9cb68f842629);
$parcel$export($bdb11010cef70236$exports, "useSlotId", () => $bdb11010cef70236$export$b4cc09c592e8fdb8);

var $f0a04ccd8dbdd83b$exports = {};

$parcel$export($f0a04ccd8dbdd83b$exports, "useLayoutEffect", () => $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c);

const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof window !== 'undefined' ? (react__WEBPACK_IMPORTED_MODULE_0___default().useLayoutEffect) : ()=>{
};




let $bdb11010cef70236$var$idsUpdaterMap = new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let isRendering = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    isRendering.current = true;
    let [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultId);
    let nextId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let res = (0,_react_aria_ssr__WEBPACK_IMPORTED_MODULE_2__.useSSRSafeId)(value);
    // don't memo this, we want it new each render so that the Effects always run
    let updateValue = (val)=>{
        if (!isRendering.current) setValue(val);
        else nextId.current = val;
    };
    $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        isRendering.current = false;
    }, [
        updateValue
    ]);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        let r = res;
        return ()=>{
            $bdb11010cef70236$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) {
            setValue(newId);
            nextId.current = null;
        }
    }, [
        setValue,
        updateValue
    ]);
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
    if (setIdA) {
        setIdA(idB);
        return idB;
    }
    let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
    if (setIdB) {
        setIdB(idA);
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = $1dbecbe27a04f9af$export$14d238f342723f25(id);
    let updateId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : null;
        });
    }, [
        id,
        setResolvedId
    ]);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}


var $ff5963eb1fccf552$exports = {};

$parcel$export($ff5963eb1fccf552$exports, "chain", () => $ff5963eb1fccf552$export$e08e3b67e392101e);
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}


var $3ef42575df84b30b$exports = {};

$parcel$export($3ef42575df84b30b$exports, "mergeProps", () => $3ef42575df84b30b$export$9d1611c77c2fe928);



function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = $ff5963eb1fccf552$export$e08e3b67e392101e(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(a, b);
            else if (key === 'id' && a && b) result.id = $bdb11010cef70236$export$cd8c9cb68f842629(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}


var $5dc95899b306f630$exports = {};

$parcel$export($5dc95899b306f630$exports, "mergeRefs", () => $5dc95899b306f630$export$c9058316764c140e);
function $5dc95899b306f630$export$c9058316764c140e(...refs) {
    return (value)=>{
        for (let ref of refs){
            if (typeof ref === 'function') ref(value);
            else if (ref != null) ref.current = value;
        }
    };
}


var $65484d02dcb7eb3e$exports = {};

$parcel$export($65484d02dcb7eb3e$exports, "filterDOMProps", () => $65484d02dcb7eb3e$export$457c3d6518dd4c6f);
const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    'id'
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {
}) {
    let { labelable: labelable , propNames: propNames  } = opts;
    let filteredProps = {
    };
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}


var $7215afc6de606d6b$exports = {};

$parcel$export($7215afc6de606d6b$exports, "focusWithoutScrolling", () => $7215afc6de606d6b$export$de79e2c695e052f3);
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
        element.focus();
        $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
        $7215afc6de606d6b$var$supportsPreventScrollCached = false;
        try {
            var focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch (e) {
        // Ignore
        }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
    var parent = element.parentNode;
    var scrollableElements = [];
    var rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element , scrollTop: scrollTop , scrollLeft: scrollLeft  } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}


var $ab71dadb03a6fb2e$exports = {};

$parcel$export($ab71dadb03a6fb2e$exports, "getOffset", () => $ab71dadb03a6fb2e$export$622cea445a1c5b7d);
function $ab71dadb03a6fb2e$export$622cea445a1c5b7d(element, reverse, orientation = 'horizontal') {
    let rect = element.getBoundingClientRect();
    if (reverse) return orientation === 'horizontal' ? rect.right : rect.bottom;
    return orientation === 'horizontal' ? rect.left : rect.top;
}


var $103b0e103f1b5952$exports = {};

$parcel$export($103b0e103f1b5952$exports, "clamp", () => _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__.clamp);
$parcel$export($103b0e103f1b5952$exports, "snapValueToStep", () => _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__.snapValueToStep);



var $bbed8b41f857bcc0$exports = {};

$parcel$export($bbed8b41f857bcc0$exports, "runAfterTransition", () => $bbed8b41f857bcc0$export$24490316f764c430);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    let onTransitionStart = (e)=>{
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener('transitioncancel', onTransitionEnd);
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener('transitioncancel', onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}


var $9cc09df9fd7676be$exports = {};

$parcel$export($9cc09df9fd7676be$exports, "useDrag1D", () => $9cc09df9fd7676be$export$7bbed75feba39706);


// Keep track of elements that we are currently handling dragging for via useDrag1D.
// If there's an ancestor and a descendant both using useDrag1D(), and the user starts
// dragging the descendant, we don't want useDrag1D events to fire for the ancestor.
const $9cc09df9fd7676be$var$draggingElements = [];
function $9cc09df9fd7676be$export$7bbed75feba39706(props) {
    console.warn('useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html');
    let { containerRef: containerRef , reverse: reverse , orientation: orientation , onHover: onHover , onDrag: onDrag , onPositionChange: onPositionChange , onIncrement: onIncrement , onDecrement: onDecrement , onIncrementToMax: onIncrementToMax , onDecrementToMin: onDecrementToMin , onCollapseToggle: onCollapseToggle  } = props;
    let getPosition = (e)=>orientation === 'horizontal' ? e.clientX : e.clientY
    ;
    let getNextOffset = (e)=>{
        let containerOffset = $ab71dadb03a6fb2e$export$622cea445a1c5b7d(containerRef.current, reverse, orientation);
        let mouseOffset = getPosition(e);
        let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
        return nextOffset;
    };
    let dragging = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    let prevPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    // Keep track of the current handlers in a ref so that the events can access them.
    let handlers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        onPositionChange: onPositionChange,
        onDrag: onDrag
    });
    handlers.current.onDrag = onDrag;
    handlers.current.onPositionChange = onPositionChange;
    let onMouseDragged = (e)=>{
        e.preventDefault();
        let nextOffset = getNextOffset(e);
        if (!dragging.current) {
            dragging.current = true;
            if (handlers.current.onDrag) handlers.current.onDrag(true);
            if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        }
        if (prevPosition.current === nextOffset) return;
        prevPosition.current = nextOffset;
        if (onPositionChange) onPositionChange(nextOffset);
    };
    let onMouseUp = (e)=>{
        const target = e.target;
        dragging.current = false;
        let nextOffset = getNextOffset(e);
        if (handlers.current.onDrag) handlers.current.onDrag(false);
        if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        $9cc09df9fd7676be$var$draggingElements.splice($9cc09df9fd7676be$var$draggingElements.indexOf(target), 1);
        window.removeEventListener('mouseup', onMouseUp, false);
        window.removeEventListener('mousemove', onMouseDragged, false);
    };
    let onMouseDown = (e)=>{
        const target = e.currentTarget;
        // If we're already handling dragging on a descendant with useDrag1D, then
        // we don't want to handle the drag motion on this target as well.
        if ($9cc09df9fd7676be$var$draggingElements.some((elt)=>target.contains(elt)
        )) return;
        $9cc09df9fd7676be$var$draggingElements.push(target);
        window.addEventListener('mousemove', onMouseDragged, false);
        window.addEventListener('mouseup', onMouseUp, false);
    };
    let onMouseEnter = ()=>{
        if (onHover) onHover(true);
    };
    let onMouseOut = ()=>{
        if (onHover) onHover(false);
    };
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'Left':
            case 'ArrowLeft':
                if (orientation === 'horizontal') {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case 'Up':
            case 'ArrowUp':
                if (orientation === 'vertical') {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case 'Right':
            case 'ArrowRight':
                if (orientation === 'horizontal') {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case 'Down':
            case 'ArrowDown':
                if (orientation === 'vertical') {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case 'Home':
                e.preventDefault();
                if (onDecrementToMin) onDecrementToMin();
                break;
            case 'End':
                e.preventDefault();
                if (onIncrementToMax) onIncrementToMax();
                break;
            case 'Enter':
                e.preventDefault();
                if (onCollapseToggle) onCollapseToggle();
                break;
        }
    };
    return {
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseOut: onMouseOut,
        onKeyDown: onKeyDown
    };
}


var $03deb23ff14920c4$exports = {};

$parcel$export($03deb23ff14920c4$exports, "useGlobalListeners", () => $03deb23ff14920c4$export$4eaf04e54aa8eed6);

function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
    let addGlobalListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, listener, options);
    }, []);
    let removeGlobalListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options)=>{
        var ref;
        let fn = ((ref = globalListeners.current.get(listener)) === null || ref === void 0 ? void 0 : ref.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    // eslint-disable-next-line arrow-body-style
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}


var $313b98861ee5dd6c$exports = {};

$parcel$export($313b98861ee5dd6c$exports, "useLabels", () => $313b98861ee5dd6c$export$d6875122194c7b44);

function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id , 'aria-label': label , 'aria-labelledby': labelledBy  } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = $bdb11010cef70236$export$f680877a34711e37(id);
    if (labelledBy && label) {
        let ids = new Set([
            ...labelledBy.trim().split(/\s+/),
            id
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}


var $df56164dff5785e2$exports = {};

$parcel$export($df56164dff5785e2$exports, "useObjectRef", () => $df56164dff5785e2$export$4338b53315abf666);


function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
    const objRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    /**
   * We're using `useLayoutEffect` here instead of `useEffect` because we want
   * to make sure that the `ref` value is up to date before other places in the
   * the execution cycle try to read it.
   */ $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        if (!forwardedRef) return;
        if (typeof forwardedRef === 'function') forwardedRef(objRef.current);
        else forwardedRef.current = objRef.current;
    }, [
        forwardedRef
    ]);
    return objRef;
}


var $4f58c5f72bcf79f7$exports = {};

$parcel$export($4f58c5f72bcf79f7$exports, "useUpdateEffect", () => $4f58c5f72bcf79f7$export$496315a1608d9602);

function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
    const isInitialMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}



var $9daab02d461809db$exports = {};

$parcel$export($9daab02d461809db$exports, "useResizeObserver", () => $9daab02d461809db$export$683480f191c0e3ea);

function $9daab02d461809db$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
    const { ref: ref , onResize: onResize  } = options;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) return;
        if (!$9daab02d461809db$var$hasResizeObserver()) {
            window.addEventListener('resize', onResize, false);
            return ()=>{
                window.removeEventListener('resize', onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element);
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref
    ]);
}


var $e7801be82b4b2a53$exports = {};

$parcel$export($e7801be82b4b2a53$exports, "useSyncRef", () => $e7801be82b4b2a53$export$4debdb1a3f0fa79e);

function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                context.ref.current = null;
            };
        }
    }, [
        context,
        ref
    ]);
}


var $62d8ded9296f3872$exports = {};

$parcel$export($62d8ded9296f3872$exports, "getScrollParent", () => $62d8ded9296f3872$export$cfa2225e87938781);
function $62d8ded9296f3872$export$cfa2225e87938781(node) {
    while(node && !$62d8ded9296f3872$var$isScrollable(node))node = node.parentElement;
    return node || document.scrollingElement || document.documentElement;
}
function $62d8ded9296f3872$var$isScrollable(node) {
    let style = window.getComputedStyle(node);
    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}


var $5df64b3807dc15ee$exports = {};

$parcel$export($5df64b3807dc15ee$exports, "useViewportSize", () => $5df64b3807dc15ee$export$d699905dd57c73ca);

// @ts-ignore
let $5df64b3807dc15ee$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $5df64b3807dc15ee$export$d699905dd57c73ca() {
    let [size1, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>$5df64b3807dc15ee$var$getViewportSize()
    );
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            setSize((size)=>{
                let newSize = $5df64b3807dc15ee$var$getViewportSize();
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        if (!$5df64b3807dc15ee$var$visualViewport) window.addEventListener('resize', onResize);
        else $5df64b3807dc15ee$var$visualViewport.addEventListener('resize', onResize);
        return ()=>{
            if (!$5df64b3807dc15ee$var$visualViewport) window.removeEventListener('resize', onResize);
            else $5df64b3807dc15ee$var$visualViewport.removeEventListener('resize', onResize);
        };
    }, []);
    return size1;
}
function $5df64b3807dc15ee$var$getViewportSize() {
    return {
        width: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.width) || window.innerWidth,
        height: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.height) || window.innerHeight
    };
}


var $ef06256079686ba0$exports = {};

$parcel$export($ef06256079686ba0$exports, "useDescription", () => $ef06256079686ba0$export$f8aeda7b10753fa1);


let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id1, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (--desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id1 : undefined
    };
}


var $c87311424ea30a05$exports = {};

$parcel$export($c87311424ea30a05$exports, "isMac", () => $c87311424ea30a05$export$9ac100e40613ea10);
$parcel$export($c87311424ea30a05$exports, "isIPhone", () => $c87311424ea30a05$export$186c6964ca17d99);
$parcel$export($c87311424ea30a05$exports, "isIPad", () => $c87311424ea30a05$export$7bef049ce92e4224);
$parcel$export($c87311424ea30a05$exports, "isIOS", () => $c87311424ea30a05$export$fedb369cb70207f1);
$parcel$export($c87311424ea30a05$exports, "isAppleDevice", () => $c87311424ea30a05$export$e1865c3bedcd822b);
$parcel$export($c87311424ea30a05$exports, "isWebKit", () => $c87311424ea30a05$export$78551043582a6a98);
$parcel$export($c87311424ea30a05$exports, "isChrome", () => $c87311424ea30a05$export$6446a186d09e379e);
$parcel$export($c87311424ea30a05$exports, "isAndroid", () => $c87311424ea30a05$export$a11b0059900ceec8);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c87311424ea30a05$var$testUserAgent(re) {
    var ref;
    if (typeof window === 'undefined' || window.navigator == null) return false;
    return ((ref = window.navigator['userAgentData']) === null || ref === void 0 ? void 0 : ref.brands.some((brand)=>re.test(brand.brand)
    )) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    return typeof window !== 'undefined' && window.navigator != null ? re.test((window.navigator['userAgentData'] || window.navigator).platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$e1865c3bedcd822b() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
}
function $c87311424ea30a05$export$78551043582a6a98() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
}


var $e9faafb641e167db$exports = {};

$parcel$export($e9faafb641e167db$exports, "useEvent", () => $e9faafb641e167db$export$90fc3a17d93f704c);

function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler1, options) {
    let handlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler1);
    handlerRef.current = handler1;
    let isDisabled = handler1 == null;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (isDisabled) return;
        let element = ref.current;
        let handler = (e)=>handlerRef.current.call(this, e)
        ;
        element.addEventListener(event, handler, options);
        return ()=>{
            element.removeEventListener(event, handler, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled
    ]);
}


var $1dbecbe27a04f9af$exports = {};

$parcel$export($1dbecbe27a04f9af$exports, "useValueEffect", () => $1dbecbe27a04f9af$export$14d238f342723f25);


function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
    let valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
    let effect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    valueRef.current = value;
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    nextRef.current = ()=>{
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef.current();
        else setValue(newValue.value);
    };
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef.current();
    });
    let queue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((fn)=>{
        effect.current = fn(valueRef.current);
        nextRef.current();
    }, [
        effect,
        nextRef
    ]);
    return [
        value,
        queue
    ];
}


var $2f04cbc44ee30ce0$exports = {};

$parcel$export($2f04cbc44ee30ce0$exports, "scrollIntoView", () => $2f04cbc44ee30ce0$export$53a0910f038337bd);
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'left');
    let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'top');
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    let maxX = x + scrollView.offsetWidth;
    let maxY = y + scrollView.offsetHeight;
    if (offsetX <= x) x = offsetX;
    else if (offsetX + width > maxX) x += offsetX + width - maxX;
    if (offsetY <= y) y = offsetY;
    else if (offsetY + height > maxY) y += offsetY + height - maxY;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop';
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./admin/assets/components/molecules/Breadcrumb.jsx":
/*!**********************************************************!*\
  !*** ./admin/assets/components/molecules/Breadcrumb.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Breadcrumb)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _react_aria_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/breadcrumbs */ "./node_modules/@react-aria/breadcrumbs/dist/module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var StyledBreadcrumb = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].nav(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n   font-size: 13px;\n   ol {\n      display: flex;\n      list-style: none;\n      margin: 0;\n      padding: 0;\n   }\n"])));
function Breadcrumb(props) {
  var _useBreadcrumbs = (0,_react_aria_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__.useBreadcrumbs)(props),
      navProps = _useBreadcrumbs.navProps;

  var children = react__WEBPACK_IMPORTED_MODULE_1___default().Children.toArray(props.children);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledBreadcrumb, _objectSpread(_objectSpread({}, navProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ol", {
      children: children.map(function (child, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(child, {
          isCurrent: i === children.length - 1
        });
      })
    })
  }));
}

function BreadcrumbItem(props) {
  var ref = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();

  var _useBreadcrumbItem = (0,_react_aria_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__.useBreadcrumbItem)(_objectSpread(_objectSpread({}, props), {}, {
    elementType: 'span'
  }), ref),
      itemProps = _useBreadcrumbItem.itemProps;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", _objectSpread(_objectSpread({}, itemProps), {}, {
      ref: ref,
      style: {
        color: 'var(--blue)',
        textDecoration: props.isCurrent ? null : 'underline',
        fontWeight: props.isCurrent ? 'bold' : null,
        cursor: props.isCurrent ? 'default' : 'pointer'
      },
      children: props.children
    })), !props.isCurrent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      "aria-hidden": "true",
      style: {
        padding: '0 5px'
      },
      children: '›'
    })]
  });
}

Breadcrumb.Item = BreadcrumbItem;

/***/ }),

/***/ "./admin/assets/components/templates/Page.jsx":
/*!****************************************************!*\
  !*** ./admin/assets/components/templates/Page.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _molecules_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../molecules/Breadcrumb */ "./admin/assets/components/molecules/Breadcrumb.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["children", "className"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function Page(_ref) {
  var title = _ref.title,
      children = _ref.children;

  var _usePage = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.usePage)(),
      errors = _usePage.props.errors;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
      className: "container mx-auto py-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_molecules_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: title
      }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        className: "leading-10 text-3xl font-bold",
        children: title
      })]
    }), errors && Object.keys(errors).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container mx-auto py-3 mb-4 bg-red-400 text-white px-4 rounded-md",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ol", {
        className: "text-sm",
        children: Object.keys(errors).map(function (er) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: errors[er]
          }, er);
        })
      })
    }), children]
  });
}

Page.Section = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      rest = _objectWithoutProperties(_ref2, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "container mx-auto ".concat(className),
    children: children
  });
};

/***/ }),

/***/ "./admin/assets/components/templates/index.js":
/*!****************************************************!*\
  !*** ./admin/assets/components/templates/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* reexport safe */ _Page__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./admin/assets/components/templates/Page.jsx");


/***/ }),

/***/ "./admin/assets/pages/teams/index.jsx":
/*!********************************************!*\
  !*** ./admin/assets/pages/teams/index.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ teams)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-data-grid */ "./node_modules/react-data-grid/lib/bundle.js");
/* harmony import */ var _components_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/templates */ "./admin/assets/components/templates/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var columns = [{
  key: 'id',
  name: 'ID'
}, {
  key: 'title',
  name: 'Title'
}];
var rows = [{
  id: 0,
  title: 'Example'
}, {
  id: 1,
  title: 'Demo'
}];
function teams(_ref) {
  var teams = _ref.teams;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_templates__WEBPACK_IMPORTED_MODULE_1__.Page, {
    title: 'Teams',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_templates__WEBPACK_IMPORTED_MODULE_1__.Page.Section, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.InertiaLink, {
        href: route('admin.teams.create'),
        children: "New team"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_data_grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "rdg-light",
        columns: columns,
        rows: rows
      }), JSON.stringify({
        teams: teams
      })]
    })
  });
}

/***/ }),

/***/ "./node_modules/react-data-grid/lib/bundle.js":
/*!****************************************************!*\
  !*** ./node_modules/react-data-grid/lib/bundle.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxFormatter": () => (/* binding */ CheckboxFormatter),
/* harmony export */   "DataGridDefaultComponentsProvider": () => (/* binding */ DataGridDefaultComponentsProvider),
/* harmony export */   "HeaderRenderer": () => (/* binding */ HeaderRenderer),
/* harmony export */   "Row": () => (/* binding */ Row$1),
/* harmony export */   "SELECT_COLUMN_KEY": () => (/* binding */ SELECT_COLUMN_KEY),
/* harmony export */   "SelectCellFormatter": () => (/* binding */ SelectCellFormatter),
/* harmony export */   "SelectColumn": () => (/* binding */ SelectColumn),
/* harmony export */   "TextEditor": () => (/* binding */ TextEditor),
/* harmony export */   "ToggleGroupFormatter": () => (/* binding */ ToggleGroupFormatter),
/* harmony export */   "ValueFormatter": () => (/* binding */ ValueFormatter),
/* harmony export */   "default": () => (/* binding */ DataGrid$1),
/* harmony export */   "useRowSelection": () => (/* binding */ useRowSelection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$f = ".c1wupbe700-beta12{background-color:inherit;border-block-end:1px solid var(--rdg-border-color);border-inline-end:1px solid var(--rdg-border-color);contain:strict;contain:size layout style paint;grid-row-start:var(--rdg-grid-row-start);outline:none;overflow:hidden;overflow:clip;padding-block:0;padding-inline:8px;text-overflow:ellipsis;white-space:nowrap}.c1wupbe700-beta12[aria-selected=true]{outline:2px solid var(--rdg-selection-color);outline-offset:-2px}.cd0kgiy700-beta12 .c1wupbe700-beta12{contain:content}.c1730fa4700-beta12{position:sticky;z-index:1}.c9dpaye700-beta12{box-shadow:calc(2px*var(--rdg-sign)) 0 5px -2px hsla(0,0%,53%,.3)}";
styleInject(css_248z$f,{"insertAt":"top"});

const cell = "c1wupbe700-beta12";
const cellClassname = `rdg-cell ${cell}`;
const cellAutoResizeClassname = "cd0kgiy700-beta12";
const cellFrozen = "c1730fa4700-beta12";
const cellFrozenClassname = `rdg-cell-frozen ${cellFrozen}`;
const cellFrozenLast = "c9dpaye700-beta12";
const cellFrozenLastClassname = `rdg-cell-frozen-last ${cellFrozenLast}`;

var css_248z$e = ".r104f42s700-beta12{--rdg-color:#000;--rdg-border-color:#ddd;--rdg-summary-border-color:#aaa;--rdg-background-color:#fff;--rdg-header-background-color:#f9f9f9;--rdg-row-hover-background-color:#f5f5f5;--rdg-row-selected-background-color:#dbecfa;--row-selected-hover-background-color:#c9e3f8;--rdg-checkbox-color:#005194;--rdg-checkbox-focus-color:#61b8ff;--rdg-checkbox-disabled-border-color:#ccc;--rdg-checkbox-disabled-background-color:#ddd;--rdg-selection-color:#66afe9;--rdg-font-size:14px;content-visibility:auto;background-color:var(--rdg-background-color);block-size:350px;border:1px solid var(--rdg-border-color);box-sizing:border-box;color:var(--rdg-color);color-scheme:var(--rdg-color-scheme,light dark);contain:strict;contain:size layout style paint;display:grid;font-size:var(--rdg-font-size);overflow:auto;user-select:none}@supports not (contain:strict){.r104f42s700-beta12{position:relative;z-index:0}}.r104f42s700-beta12 *,.r104f42s700-beta12 :after,.r104f42s700-beta12 :before{box-sizing:inherit}.r104f42s700-beta12:before{content:\"\";grid-column:1/-1;grid-row:1/-1}.r104f42s700-beta12.rdg-dark{--rdg-color-scheme:dark;--rdg-color:#ddd;--rdg-border-color:#444;--rdg-summary-border-color:#555;--rdg-background-color:#212121;--rdg-header-background-color:#1b1b1b;--rdg-row-hover-background-color:#171717;--rdg-row-selected-background-color:#1a73bc;--row-selected-hover-background-color:#1768ab;--rdg-checkbox-color:#94cfff;--rdg-checkbox-focus-color:#c7e6ff;--rdg-checkbox-disabled-border-color:#000;--rdg-checkbox-disabled-background-color:#333}.r104f42s700-beta12.rdg-light{--rdg-color-scheme:light}@media (prefers-color-scheme:dark){.r104f42s700-beta12:not(.rdg-light){--rdg-color:#ddd;--rdg-border-color:#444;--rdg-summary-border-color:#555;--rdg-background-color:#212121;--rdg-header-background-color:#1b1b1b;--rdg-row-hover-background-color:#171717;--rdg-row-selected-background-color:#1a73bc;--row-selected-hover-background-color:#1768ab;--rdg-checkbox-color:#94cfff;--rdg-checkbox-focus-color:#c7e6ff;--rdg-checkbox-disabled-border-color:#000;--rdg-checkbox-disabled-background-color:#333}}.v7ly7s700-beta12.r1otpg64700-beta12{cursor:move}.fc4f4zb700-beta12{grid-column:1/-1;pointer-events:none;z-index:4}";
styleInject(css_248z$e,{"insertAt":"top"});

const root = "r104f42s700-beta12";
const rootClassname = `rdg ${root}`;
const viewportDragging = "v7ly7s700-beta12";
const viewportDraggingClassname = `rdg-viewport-dragging ${viewportDragging}`;
const focusSinkClassname = "fc4f4zb700-beta12";

var css_248z$d = ".r1otpg64700-beta12{background-color:var(--rdg-background-color);display:contents;line-height:var(--rdg-row-height)}.r1otpg64700-beta12:hover{background-color:var(--rdg-row-hover-background-color)}.r1otpg64700-beta12[aria-selected=true]{background-color:var(--rdg-row-selected-background-color)}.r1otpg64700-beta12[aria-selected=true]:hover{background-color:var(--row-selected-hover-background-color)}.rel5gk2700-beta12{outline:2px solid var(--rdg-selection-color);outline-offset:-2px}.r1qymf1z700-beta12:before{border-inline-start:2px solid var(--rdg-selection-color);content:\"\";display:inline-block;height:100%;inset-inline-start:0;position:sticky}";
styleInject(css_248z$d,{"insertAt":"top"});

const row = "r1otpg64700-beta12";
const rowClassname = `rdg-row ${row}`;
const rowSelected = "rel5gk2700-beta12";
const rowSelectedClassname = `rdg-row-selected`;
const rowSelectedWithFrozenCell = "r1qymf1z700-beta12";

var css_248z$c = ".cd9l4jz700-beta12{align-items:center;cursor:pointer;display:flex;inset:0;justify-content:center;margin-inline-end:1px;position:absolute}.c1noyk41700-beta12{all:unset}.cdwjxv8700-beta12{background-color:var(--rdg-background-color);block-size:20px;border:2px solid var(--rdg-border-color);content:\"\";inline-size:20px}.c1noyk41700-beta12:checked+.cdwjxv8700-beta12{background-color:var(--rdg-checkbox-color);outline:4px solid var(--rdg-background-color);outline-offset:-6px}.c1noyk41700-beta12:focus+.cdwjxv8700-beta12{border-color:var(--rdg-checkbox-focus-color)}.cca4mwn700-beta12{cursor:default}.cca4mwn700-beta12 .cdwjxv8700-beta12{background-color:var(--rdg-checkbox-disabled-background-color);border-color:var(--rdg-checkbox-disabled-border-color)}";
styleInject(css_248z$c,{"insertAt":"top"});

const checkboxLabel = "cd9l4jz700-beta12";
const checkboxLabelClassname = `rdg-checkbox-label ${checkboxLabel}`;
const checkboxInput = "c1noyk41700-beta12";
const checkboxInputClassname = `rdg-checkbox-input ${checkboxInput}`;
const checkbox = "cdwjxv8700-beta12";
const checkboxClassname = `rdg-checkbox ${checkbox}`;
const checkboxLabelDisabled = "cca4mwn700-beta12";
const checkboxLabelDisabledClassname = `rdg-checkbox-label-disabled ${checkboxLabelDisabled}`;
const CheckboxFormatter = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function CheckboxFormatter({
  onChange,
  ...props
}, ref) {
  function handleChange(e) {
    onChange(e.target.checked, e.nativeEvent.shiftKey);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(checkboxLabelClassname, props.disabled && checkboxLabelDisabledClassname),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      type: "checkbox",
      ref: ref,
      ...props,
      className: checkboxInputClassname,
      onChange: handleChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: checkboxClassname
    })]
  });
});

const useLayoutEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;

function useFocusRef(isSelected) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  useLayoutEffect(() => {
    var _ref$current;

    if (!isSelected) return;
    (_ref$current = ref.current) == null ? void 0 : _ref$current.focus({
      preventScroll: true
    });
  }, [isSelected]);
  return {
    ref,
    tabIndex: isSelected ? 0 : -1
  };
}

const DataGridDefaultComponentsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
const DataGridDefaultComponentsProvider = DataGridDefaultComponentsContext.Provider;
function useDefaultComponents() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DataGridDefaultComponentsContext);
}

function SelectCellFormatter({
  value,
  isCellSelected,
  disabled,
  onChange,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy
}) {
  const {
    ref,
    tabIndex
  } = useFocusRef(isCellSelected);
  const Formatter = useDefaultComponents().checkboxFormatter;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Formatter, {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    ref: ref,
    tabIndex: tabIndex,
    disabled: disabled,
    checked: value,
    onChange: onChange
  });
}

function ValueFormatter(props) {
  try {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: props.row[props.column.key]
    });
  } catch {
    return null;
  }
}

var css_248z$b = ".gch972y700-beta12{outline:none}.cz2qf0d700-beta12{stroke:currentColor;stroke-width:1.5px;fill:transparent;margin-inline-start:4px;vertical-align:middle}.cz2qf0d700-beta12>path{transition:d .1s}";
styleInject(css_248z$b,{"insertAt":"top"});

const groupCellContent = "gch972y700-beta12";
const groupCellContentClassname = `rdg-group-cell-content ${groupCellContent}`;
const caret = "cz2qf0d700-beta12";
const caretClassname = `rdg-caret ${caret}`;
function ToggleGroupFormatter({
  groupKey,
  isExpanded,
  isCellSelected,
  toggleGroup
}) {
  const {
    ref,
    tabIndex
  } = useFocusRef(isCellSelected);

  function handleKeyDown({
    key
  }) {
    if (key === 'Enter') {
      toggleGroup();
    }
  }

  const d = isExpanded ? 'M1 1 L 7 7 L 13 1' : 'M1 7 L 7 1 L 13 7';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
    ref: ref,
    className: groupCellContentClassname,
    tabIndex: tabIndex,
    onKeyDown: handleKeyDown,
    children: [groupKey, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: caretClassname,
      "aria-hidden": true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
        d: d
      })
    })]
  });
}

const RowSelectionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
const RowSelectionProvider = RowSelectionContext.Provider;
const RowSelectionChangeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
const RowSelectionChangeProvider = RowSelectionChangeContext.Provider;
function useRowSelection() {
  const rowSelectionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RowSelectionContext);
  const rowSelectionChangeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RowSelectionChangeContext);

  if (rowSelectionContext === undefined || rowSelectionChangeContext === undefined) {
    throw new Error('useRowSelection must be used within DataGrid cells');
  }

  return [rowSelectionContext, rowSelectionChangeContext];
}

const SELECT_COLUMN_KEY = 'select-row';

function SelectFormatter(props) {
  const [isRowSelected, onRowSelectionChange] = useRowSelection();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectCellFormatter, {
    "aria-label": "Select",
    isCellSelected: props.isCellSelected,
    value: isRowSelected,
    onChange: (checked, isShiftClick) => {
      onRowSelectionChange({
        row: props.row,
        checked,
        isShiftClick
      });
    }
  });
}

function SelectGroupFormatter(props) {
  const [isRowSelected, onRowSelectionChange] = useRowSelection();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectCellFormatter, {
    "aria-label": "Select Group",
    isCellSelected: props.isCellSelected,
    value: isRowSelected,
    onChange: checked => {
      onRowSelectionChange({
        row: props.row,
        checked,
        isShiftClick: false
      });
    }
  });
}

const SelectColumn = {
  key: SELECT_COLUMN_KEY,
  name: '',
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: false,
  sortable: false,
  frozen: true,

  headerRenderer(props) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectCellFormatter, {
      "aria-label": "Select All",
      isCellSelected: props.isCellSelected,
      value: props.allRowsSelected,
      onChange: props.onAllRowsSelectionChange
    });
  },

  formatter: SelectFormatter,
  groupFormatter: SelectGroupFormatter
};

function getColSpan(column, lastFrozenColumnIndex, args) {
  const colSpan = typeof column.colSpan === 'function' ? column.colSpan(args) : 1;

  if (Number.isInteger(colSpan) && colSpan > 1 && (!column.frozen || column.idx + colSpan - 1 <= lastFrozenColumnIndex)) {
    return colSpan;
  }

  return undefined;
}

const nonInputKeys = new Set(['Unidentified', 'Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Meta', 'NumLock', 'ScrollLock', 'Shift', 'Tab', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'End', 'Home', 'PageDown', 'PageUp', 'Insert', 'ContextMenu', 'Escape', 'Pause', 'Play', 'PrintScreen', 'F1', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12']);
function isCtrlKeyHeldDown(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== 'Control';
}
function isDefaultCellInput(event) {
  return !nonInputKeys.has(event.key);
}
function onEditorNavigation({
  key,
  target
}) {
  if (key === 'Tab' && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) {
    return target.matches('.rdg-editor-container > :only-child, .rdg-editor-container > label:only-child > :only-child');
  }

  return false;
}

function isSelectedCellEditable({
  selectedPosition,
  columns,
  rows,
  isGroupRow
}) {
  const column = columns[selectedPosition.idx];
  const row = rows[selectedPosition.rowIdx];
  return !isGroupRow(row) && isCellEditable(column, row);
}
function isCellEditable(column, row) {
  return column.editor != null && !column.rowGroup && (typeof column.editable === 'function' ? column.editable(row) : column.editable) !== false;
}
function getSelectedCellColSpan({
  rows,
  summaryRows,
  rowIdx,
  lastFrozenColumnIndex,
  column,
  isGroupRow
}) {
  if (rowIdx === -1) {
    return getColSpan(column, lastFrozenColumnIndex, {
      type: 'HEADER'
    });
  }

  if (rowIdx >= 0 && rowIdx < rows.length) {
    const row = rows[rowIdx];

    if (!isGroupRow(row)) {
      return getColSpan(column, lastFrozenColumnIndex, {
        type: 'ROW',
        row
      });
    }

    return undefined;
  }

  if (summaryRows) {
    return getColSpan(column, lastFrozenColumnIndex, {
      type: 'SUMMARY',
      row: summaryRows[rowIdx - rows.length]
    });
  }

  return undefined;
}
function getNextSelectedCellPosition({
  cellNavigationMode,
  columns,
  colSpanColumns,
  rows,
  summaryRows,
  minRowIdx,
  maxRowIdx,
  currentPosition: {
    idx: currentIdx
  },
  nextPosition,
  lastFrozenColumnIndex,
  isCellWithinBounds,
  isGroupRow
}) {
  let {
    idx: nextIdx,
    rowIdx: nextRowIdx
  } = nextPosition;

  const setColSpan = moveRight => {
    if (nextRowIdx >= 0 && nextRowIdx < rows.length) {
      const row = rows[nextRowIdx];
      if (isGroupRow(row)) return;
    }

    for (const column of colSpanColumns) {
      const colIdx = column.idx;
      if (colIdx > nextIdx) break;
      const colSpan = getSelectedCellColSpan({
        rows,
        summaryRows,
        rowIdx: nextRowIdx,
        lastFrozenColumnIndex,
        column,
        isGroupRow
      });

      if (colSpan && nextIdx > colIdx && nextIdx < colSpan + colIdx) {
        nextIdx = colIdx + (moveRight ? colSpan : 0);
        break;
      }
    }
  };

  if (isCellWithinBounds(nextPosition)) {
    setColSpan(nextIdx - currentIdx > 0);
  }

  if (cellNavigationMode !== 'NONE') {
    const columnsCount = columns.length;
    const isAfterLastColumn = nextIdx === columnsCount;
    const isBeforeFirstColumn = nextIdx === -1;

    if (isAfterLastColumn) {
      if (cellNavigationMode === 'CHANGE_ROW') {
        const isLastRow = nextRowIdx === maxRowIdx;

        if (!isLastRow) {
          nextIdx = 0;
          nextRowIdx += 1;
        }
      } else {
        nextIdx = 0;
      }
    } else if (isBeforeFirstColumn) {
      if (cellNavigationMode === 'CHANGE_ROW') {
        const isFirstRow = nextRowIdx === minRowIdx;

        if (!isFirstRow) {
          nextRowIdx -= 1;
          nextIdx = columnsCount - 1;
        }
      } else {
        nextIdx = columnsCount - 1;
      }

      setColSpan(false);
    }
  }

  return {
    idx: nextIdx,
    rowIdx: nextRowIdx
  };
}
function canExitGrid({
  cellNavigationMode,
  maxColIdx,
  minRowIdx,
  maxRowIdx,
  selectedPosition: {
    rowIdx,
    idx
  },
  shiftKey
}) {
  if (cellNavigationMode === 'NONE' || cellNavigationMode === 'CHANGE_ROW') {
    const atLastCellInRow = idx === maxColIdx;
    const atFirstCellInRow = idx === 0;
    const atLastRow = rowIdx === maxRowIdx;
    const atFirstRow = rowIdx === minRowIdx;
    return shiftKey ? atFirstCellInRow && atFirstRow : atLastCellInRow && atLastRow;
  }

  return false;
}

function getRowStyle(rowIdx, height) {
  if (height !== undefined) {
    return {
      '--rdg-grid-row-start': rowIdx,
      '--rdg-row-height': `${height}px`
    };
  }

  return {
    '--rdg-grid-row-start': rowIdx
  };
}
function getCellStyle(column, colSpan) {
  return {
    gridColumnStart: column.idx + 1,
    gridColumnEnd: colSpan !== undefined ? `span ${colSpan}` : undefined,
    insetInlineStart: column.frozen ? `var(--rdg-frozen-left-${column.idx})` : undefined
  };
}
function getCellClassname(column, ...extraClasses) {
  return (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(cellClassname, ...extraClasses, column.frozen && cellFrozenClassname, column.isLastFrozenColumn && cellFrozenLastClassname);
}

const {
  min,
  max,
  round,
  floor,
  sign,
  abs,
  ceil
} = Math;
function assertIsValidKeyGetter(keyGetter) {
  if (typeof keyGetter !== 'function') {
    throw new Error('Please specify the rowKeyGetter prop to use selection');
  }
}
function clampColumnWidth(width, {
  minWidth,
  maxWidth
}) {
  width = max(width, minWidth);

  if (typeof maxWidth === 'number' && maxWidth > minWidth) {
    return min(width, maxWidth);
  }

  return width;
}

function useCalculatedColumns({
  rawColumns,
  columnWidths,
  viewportWidth,
  scrollLeft,
  defaultColumnOptions,
  rawGroupBy,
  enableVirtualization
}) {
  var _defaultColumnOptions, _defaultColumnOptions2, _defaultColumnOptions3, _defaultColumnOptions4;

  const defaultWidth = defaultColumnOptions == null ? void 0 : defaultColumnOptions.width;
  const defaultMinWidth = (_defaultColumnOptions = defaultColumnOptions == null ? void 0 : defaultColumnOptions.minWidth) != null ? _defaultColumnOptions : 80;
  const defaultMaxWidth = defaultColumnOptions == null ? void 0 : defaultColumnOptions.maxWidth;
  const defaultFormatter = (_defaultColumnOptions2 = defaultColumnOptions == null ? void 0 : defaultColumnOptions.formatter) != null ? _defaultColumnOptions2 : ValueFormatter;
  const defaultSortable = (_defaultColumnOptions3 = defaultColumnOptions == null ? void 0 : defaultColumnOptions.sortable) != null ? _defaultColumnOptions3 : false;
  const defaultResizable = (_defaultColumnOptions4 = defaultColumnOptions == null ? void 0 : defaultColumnOptions.resizable) != null ? _defaultColumnOptions4 : false;
  const {
    columns,
    colSpanColumns,
    lastFrozenColumnIndex,
    groupBy
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const groupBy = [];
    let lastFrozenColumnIndex = -1;
    const columns = rawColumns.map(rawColumn => {
      var _rawGroupBy$includes, _rawColumn$width, _rawColumn$minWidth, _rawColumn$maxWidth, _rawColumn$sortable, _rawColumn$resizable, _rawColumn$formatter;

      const rowGroup = (_rawGroupBy$includes = rawGroupBy == null ? void 0 : rawGroupBy.includes(rawColumn.key)) != null ? _rawGroupBy$includes : false;
      const frozen = rowGroup || rawColumn.frozen || false;
      const column = { ...rawColumn,
        idx: 0,
        frozen,
        isLastFrozenColumn: false,
        rowGroup,
        width: (_rawColumn$width = rawColumn.width) != null ? _rawColumn$width : defaultWidth,
        minWidth: (_rawColumn$minWidth = rawColumn.minWidth) != null ? _rawColumn$minWidth : defaultMinWidth,
        maxWidth: (_rawColumn$maxWidth = rawColumn.maxWidth) != null ? _rawColumn$maxWidth : defaultMaxWidth,
        sortable: (_rawColumn$sortable = rawColumn.sortable) != null ? _rawColumn$sortable : defaultSortable,
        resizable: (_rawColumn$resizable = rawColumn.resizable) != null ? _rawColumn$resizable : defaultResizable,
        formatter: (_rawColumn$formatter = rawColumn.formatter) != null ? _rawColumn$formatter : defaultFormatter
      };

      if (rowGroup) {
        var _column$groupFormatte;

        (_column$groupFormatte = column.groupFormatter) != null ? _column$groupFormatte : column.groupFormatter = ToggleGroupFormatter;
      }

      if (frozen) {
        lastFrozenColumnIndex++;
      }

      return column;
    });
    columns.sort(({
      key: aKey,
      frozen: frozenA
    }, {
      key: bKey,
      frozen: frozenB
    }) => {
      if (aKey === SELECT_COLUMN_KEY) return -1;
      if (bKey === SELECT_COLUMN_KEY) return 1;

      if (rawGroupBy != null && rawGroupBy.includes(aKey)) {
        if (rawGroupBy.includes(bKey)) {
          return rawGroupBy.indexOf(aKey) - rawGroupBy.indexOf(bKey);
        }

        return -1;
      }

      if (rawGroupBy != null && rawGroupBy.includes(bKey)) return 1;

      if (frozenA) {
        if (frozenB) return 0;
        return -1;
      }

      if (frozenB) return 1;
      return 0;
    });
    const colSpanColumns = [];
    columns.forEach((column, idx) => {
      column.idx = idx;

      if (column.rowGroup) {
        groupBy.push(column.key);
      }

      if (column.colSpan != null) {
        colSpanColumns.push(column);
      }
    });

    if (lastFrozenColumnIndex !== -1) {
      columns[lastFrozenColumnIndex].isLastFrozenColumn = true;
    }

    return {
      columns,
      colSpanColumns,
      lastFrozenColumnIndex,
      groupBy
    };
  }, [rawColumns, defaultWidth, defaultMinWidth, defaultMaxWidth, defaultFormatter, defaultResizable, defaultSortable, rawGroupBy]);
  const {
    layoutCssVars,
    totalFrozenColumnWidth,
    columnMetrics
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const columnMetrics = new Map();
    let left = 0;
    let totalFrozenColumnWidth = 0;
    let templateColumns = '';
    let allocatedWidth = 0;
    let unassignedColumnsCount = 0;

    for (const column of columns) {
      let width = getSpecifiedWidth(column, columnWidths, viewportWidth);

      if (width === undefined) {
        unassignedColumnsCount++;
      } else {
        width = clampColumnWidth(width, column);
        allocatedWidth += width;
        columnMetrics.set(column, {
          width,
          left: 0
        });
      }
    }

    for (const column of columns) {
      let width;

      if (columnMetrics.has(column)) {
        const columnMetric = columnMetrics.get(column);
        columnMetric.left = left;
        ({
          width
        } = columnMetric);
      } else {
        const unallocatedWidth = viewportWidth - allocatedWidth;
        const unallocatedColumnWidth = round(unallocatedWidth / unassignedColumnsCount);
        width = clampColumnWidth(unallocatedColumnWidth, column);
        allocatedWidth += width;
        unassignedColumnsCount--;
        columnMetrics.set(column, {
          width,
          left
        });
      }

      left += width;
      templateColumns += `${width}px `;
    }

    if (lastFrozenColumnIndex !== -1) {
      const columnMetric = columnMetrics.get(columns[lastFrozenColumnIndex]);
      totalFrozenColumnWidth = columnMetric.left + columnMetric.width;
    }

    const layoutCssVars = {
      gridTemplateColumns: templateColumns
    };

    for (let i = 0; i <= lastFrozenColumnIndex; i++) {
      const column = columns[i];
      layoutCssVars[`--rdg-frozen-left-${column.idx}`] = `${columnMetrics.get(column).left}px`;
    }

    return {
      layoutCssVars,
      totalFrozenColumnWidth,
      columnMetrics
    };
  }, [columnWidths, columns, viewportWidth, lastFrozenColumnIndex]);
  const [colOverscanStartIdx, colOverscanEndIdx] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!enableVirtualization) {
      return [0, columns.length - 1];
    }

    const viewportLeft = scrollLeft + totalFrozenColumnWidth;
    const viewportRight = scrollLeft + viewportWidth;
    const lastColIdx = columns.length - 1;
    const firstUnfrozenColumnIdx = min(lastFrozenColumnIndex + 1, lastColIdx);

    if (viewportLeft >= viewportRight) {
      return [firstUnfrozenColumnIdx, firstUnfrozenColumnIdx];
    }

    let colVisibleStartIdx = firstUnfrozenColumnIdx;

    while (colVisibleStartIdx < lastColIdx) {
      const {
        left,
        width
      } = columnMetrics.get(columns[colVisibleStartIdx]);

      if (left + width > viewportLeft) {
        break;
      }

      colVisibleStartIdx++;
    }

    let colVisibleEndIdx = colVisibleStartIdx;

    while (colVisibleEndIdx < lastColIdx) {
      const {
        left,
        width
      } = columnMetrics.get(columns[colVisibleEndIdx]);

      if (left + width >= viewportRight) {
        break;
      }

      colVisibleEndIdx++;
    }

    const colOverscanStartIdx = max(firstUnfrozenColumnIdx, colVisibleStartIdx - 1);
    const colOverscanEndIdx = min(lastColIdx, colVisibleEndIdx + 1);
    return [colOverscanStartIdx, colOverscanEndIdx];
  }, [columnMetrics, columns, lastFrozenColumnIndex, scrollLeft, totalFrozenColumnWidth, viewportWidth, enableVirtualization]);
  return {
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    layoutCssVars,
    columnMetrics,
    lastFrozenColumnIndex,
    totalFrozenColumnWidth,
    groupBy
  };
}

function getSpecifiedWidth({
  key,
  width
}, columnWidths, viewportWidth) {
  if (columnWidths.has(key)) {
    return columnWidths.get(key);
  }

  if (typeof width === 'number') {
    return width;
  }

  if (typeof width === 'string' && /^\d+%$/.test(width)) {
    return floor(viewportWidth * parseInt(width, 10) / 100);
  }

  return undefined;
}

function useGridDimensions() {
  const gridRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [inlineSize, setInlineSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [blockSize, setBlockSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  useLayoutEffect(() => {
    const {
      ResizeObserver
    } = window;
    if (ResizeObserver == null) return;
    const {
      clientWidth,
      clientHeight,
      offsetWidth,
      offsetHeight
    } = gridRef.current;
    const {
      width,
      height
    } = gridRef.current.getBoundingClientRect();
    const initialWidth = width - offsetWidth + clientWidth;
    const initialHeight = height - offsetHeight + clientHeight;
    setInlineSize(handleDevicePixelRatio(initialWidth));
    setBlockSize(initialHeight);
    const resizeObserver = new ResizeObserver(entries => {
      const size = entries[0].contentBoxSize[0];
      setInlineSize(handleDevicePixelRatio(size.inlineSize));
      setBlockSize(size.blockSize);
    });
    resizeObserver.observe(gridRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return [gridRef, inlineSize, blockSize];
}

function handleDevicePixelRatio(size) {
  return size - (devicePixelRatio === 1 ? 0 : ceil(devicePixelRatio));
}

function useLatestFunc(fn) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = fn;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args) => {
    ref.current(...args);
  }, []);
}

function useRovingCellRef(isSelected) {
  const [isChildFocused, setIsChildFocused] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  if (isChildFocused && !isSelected) {
    setIsChildFocused(false);
  }

  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(cell => {
    if (cell === null || cell.contains(document.activeElement)) return;
    cell.focus({
      preventScroll: true
    });
  }, []);

  function onFocus(event) {
    if (event.target !== event.currentTarget) {
      setIsChildFocused(true);
    }
  }

  const isFocused = isSelected && !isChildFocused;
  return {
    ref: isSelected ? ref : undefined,
    tabIndex: isFocused ? 0 : -1,
    onFocus: isSelected ? onFocus : undefined
  };
}

function useViewportColumns({
  columns,
  colSpanColumns,
  rows,
  summaryRows,
  colOverscanStartIdx,
  colOverscanEndIdx,
  lastFrozenColumnIndex,
  rowOverscanStartIdx,
  rowOverscanEndIdx,
  isGroupRow
}) {
  const startIdx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (colOverscanStartIdx === 0) return 0;
    let startIdx = colOverscanStartIdx;

    const updateStartIdx = (colIdx, colSpan) => {
      if (colSpan !== undefined && colIdx + colSpan > colOverscanStartIdx) {
        startIdx = colIdx;
        return true;
      }

      return false;
    };

    for (const column of colSpanColumns) {
      const colIdx = column.idx;
      if (colIdx >= startIdx) break;

      if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
        type: 'HEADER'
      }))) {
        break;
      }

      for (let rowIdx = rowOverscanStartIdx; rowIdx <= rowOverscanEndIdx; rowIdx++) {
        const row = rows[rowIdx];
        if (isGroupRow(row)) continue;

        if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
          type: 'ROW',
          row
        }))) {
          break;
        }
      }

      if (summaryRows != null) {
        for (const row of summaryRows) {
          if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
            type: 'SUMMARY',
            row
          }))) {
            break;
          }
        }
      }
    }

    return startIdx;
  }, [rowOverscanStartIdx, rowOverscanEndIdx, rows, summaryRows, colOverscanStartIdx, lastFrozenColumnIndex, colSpanColumns, isGroupRow]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const viewportColumns = [];

    for (let colIdx = 0; colIdx <= colOverscanEndIdx; colIdx++) {
      const column = columns[colIdx];
      if (colIdx < startIdx && !column.frozen) continue;
      viewportColumns.push(column);
    }

    return viewportColumns;
  }, [startIdx, colOverscanEndIdx, columns]);
}

function isReadonlyArray(arr) {
  return Array.isArray(arr);
}

function useViewportRows({
  rawRows,
  rowHeight,
  clientHeight,
  scrollTop,
  groupBy,
  rowGrouper,
  expandedGroupIds,
  enableVirtualization
}) {
  const [groupedRows, rowsCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (groupBy.length === 0 || rowGrouper == null) return [undefined, rawRows.length];

    const groupRows = (rows, [groupByKey, ...remainingGroupByKeys], startRowIndex) => {
      let groupRowsCount = 0;
      const groups = {};

      for (const [key, childRows] of Object.entries(rowGrouper(rows, groupByKey))) {
        const [childGroups, childRowsCount] = remainingGroupByKeys.length === 0 ? [childRows, childRows.length] : groupRows(childRows, remainingGroupByKeys, startRowIndex + groupRowsCount + 1);
        groups[key] = {
          childRows,
          childGroups,
          startRowIndex: startRowIndex + groupRowsCount
        };
        groupRowsCount += childRowsCount + 1;
      }

      return [groups, groupRowsCount];
    };

    return groupRows(rawRows, groupBy, 0);
  }, [groupBy, rowGrouper, rawRows]);
  const [rows, isGroupRow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const allGroupRows = new Set();
    if (!groupedRows) return [rawRows, isGroupRow];
    const flattenedRows = [];

    const expandGroup = (rows, parentId, level) => {
      if (isReadonlyArray(rows)) {
        flattenedRows.push(...rows);
        return;
      }

      Object.keys(rows).forEach((groupKey, posInSet, keys) => {
        var _expandedGroupIds$has;

        const id = parentId !== undefined ? `${parentId}__${groupKey}` : groupKey;
        const isExpanded = (_expandedGroupIds$has = expandedGroupIds == null ? void 0 : expandedGroupIds.has(id)) != null ? _expandedGroupIds$has : false;
        const {
          childRows,
          childGroups,
          startRowIndex
        } = rows[groupKey];
        const groupRow = {
          id,
          parentId,
          groupKey,
          isExpanded,
          childRows,
          level,
          posInSet,
          startRowIndex,
          setSize: keys.length
        };
        flattenedRows.push(groupRow);
        allGroupRows.add(groupRow);

        if (isExpanded) {
          expandGroup(childGroups, id, level + 1);
        }
      });
    };

    expandGroup(groupedRows, undefined, 0);
    return [flattenedRows, isGroupRow];

    function isGroupRow(row) {
      return allGroupRows.has(row);
    }
  }, [expandedGroupIds, groupedRows, rawRows]);
  const {
    totalRowHeight,
    gridTemplateRows,
    getRowTop,
    getRowHeight,
    findRowIdx
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (typeof rowHeight === 'number') {
      return {
        totalRowHeight: rowHeight * rows.length,
        gridTemplateRows: ` repeat(${rows.length}, ${rowHeight}px)`,
        getRowTop: rowIdx => rowIdx * rowHeight,
        getRowHeight: () => rowHeight,
        findRowIdx: offset => floor(offset / rowHeight)
      };
    }

    let totalRowHeight = 0;
    let gridTemplateRows = ' ';
    const rowPositions = rows.map(row => {
      const currentRowHeight = isGroupRow(row) ? rowHeight({
        type: 'GROUP',
        row
      }) : rowHeight({
        type: 'ROW',
        row
      });
      const position = {
        top: totalRowHeight,
        height: currentRowHeight
      };
      gridTemplateRows += `${currentRowHeight}px `;
      totalRowHeight += currentRowHeight;
      return position;
    });

    const validateRowIdx = rowIdx => {
      return max(0, min(rows.length - 1, rowIdx));
    };

    return {
      totalRowHeight,
      gridTemplateRows,
      getRowTop: rowIdx => rowPositions[validateRowIdx(rowIdx)].top,
      getRowHeight: rowIdx => rowPositions[validateRowIdx(rowIdx)].height,

      findRowIdx(offset) {
        let start = 0;
        let end = rowPositions.length - 1;

        while (start <= end) {
          const middle = start + floor((end - start) / 2);
          const currentOffset = rowPositions[middle].top;
          if (currentOffset === offset) return middle;

          if (currentOffset < offset) {
            start = middle + 1;
          } else if (currentOffset > offset) {
            end = middle - 1;
          }

          if (start > end) return end;
        }

        return 0;
      }

    };
  }, [isGroupRow, rowHeight, rows]);
  let rowOverscanStartIdx = 0;
  let rowOverscanEndIdx = rows.length - 1;

  if (enableVirtualization) {
    const overscanThreshold = 4;
    const rowVisibleStartIdx = findRowIdx(scrollTop);
    const rowVisibleEndIdx = findRowIdx(scrollTop + clientHeight);
    rowOverscanStartIdx = max(0, rowVisibleStartIdx - overscanThreshold);
    rowOverscanEndIdx = min(rows.length - 1, rowVisibleEndIdx + overscanThreshold);
  }

  return {
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    rowsCount,
    totalRowHeight,
    gridTemplateRows,
    isGroupRow,
    getRowTop,
    getRowHeight,
    findRowIdx
  };
}

var css_248z$a = ".h1tr5c9i700-beta12{cursor:pointer;display:flex}.h1tr5c9i700-beta12:focus{outline:none}.h19r0msv700-beta12{flex-grow:1;overflow:hidden;overflow:clip;text-overflow:ellipsis}";
styleInject(css_248z$a,{"insertAt":"top"});

const headerSortCell = "h1tr5c9i700-beta12";
const headerSortCellClassname = `rdg-header-sort-cell ${headerSortCell}`;
const headerSortName = "h19r0msv700-beta12";
const headerSortNameClassname = `rdg-header-sort-name ${headerSortName}`;
function HeaderRenderer({
  column,
  sortDirection,
  priority,
  onSort,
  isCellSelected
}) {
  if (!column.sortable) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: column.name
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SortableHeaderCell, {
    onSort: onSort,
    sortDirection: sortDirection,
    priority: priority,
    isCellSelected: isCellSelected,
    children: column.name
  });
}

function SortableHeaderCell({
  onSort,
  sortDirection,
  priority,
  children,
  isCellSelected
}) {
  const SortIcon = useDefaultComponents().sortIcon;
  const {
    ref,
    tabIndex
  } = useFocusRef(isCellSelected);

  function handleKeyDown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      onSort(event.ctrlKey || event.metaKey);
    }
  }

  function handleClick(event) {
    onSort(event.ctrlKey || event.metaKey);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
    ref: ref,
    tabIndex: tabIndex,
    className: headerSortCellClassname,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: headerSortNameClassname,
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SortIcon, {
        sortDirection: sortDirection
      }), priority]
    })]
  });
}

var css_248z$9 = ".celq7o9700-beta12{touch-action:none}.celq7o9700-beta12:after{content:\"\";cursor:col-resize;inline-size:10px;inset-block-end:0;inset-block-start:0;inset-inline-end:0;position:absolute}";
styleInject(css_248z$9,{"insertAt":"top"});

const cellResizable = "celq7o9700-beta12";
const cellResizableClassname = `rdg-cell-resizable ${cellResizable}`;
function HeaderCell({
  column,
  colSpan,
  isCellSelected,
  onColumnResize,
  allRowsSelected,
  onAllRowsSelectionChange,
  sortColumns,
  onSortColumnsChange,
  selectCell,
  shouldFocusGrid,
  direction
}) {
  var _column$headerRendere, _column$maxWidth;

  const isRtl = direction === 'rtl';
  const {
    ref,
    tabIndex,
    onFocus
  } = useRovingCellRef(isCellSelected);
  const sortIndex = sortColumns == null ? void 0 : sortColumns.findIndex(sort => sort.columnKey === column.key);
  const sortColumn = sortIndex !== undefined && sortIndex > -1 ? sortColumns[sortIndex] : undefined;
  const sortDirection = sortColumn == null ? void 0 : sortColumn.direction;
  const priority = sortColumn !== undefined && sortColumns.length > 1 ? sortIndex + 1 : undefined;
  const ariaSort = sortDirection && !priority ? sortDirection === 'ASC' ? 'ascending' : 'descending' : undefined;
  const className = getCellClassname(column, column.headerCellClass, column.resizable && cellResizableClassname);
  const HeaderRenderer$1 = (_column$headerRendere = column.headerRenderer) != null ? _column$headerRendere : HeaderRenderer;

  function onPointerDown(event) {
    if (event.pointerType === 'mouse' && event.buttons !== 1) {
      return;
    }

    const {
      currentTarget,
      pointerId
    } = event;
    const {
      right,
      left
    } = currentTarget.getBoundingClientRect();
    const offset = isRtl ? event.clientX - left : right - event.clientX;

    if (offset > 11) {
      return;
    }

    function onPointerMove(event) {
      const {
        right,
        left
      } = currentTarget.getBoundingClientRect();
      const width = isRtl ? right + offset - event.clientX : event.clientX + offset - left;

      if (width > 0) {
        onColumnResize(column, clampColumnWidth(width, column));
      }
    }

    function onLostPointerCapture() {
      currentTarget.removeEventListener('pointermove', onPointerMove);
      currentTarget.removeEventListener('lostpointercapture', onLostPointerCapture);
    }

    currentTarget.setPointerCapture(pointerId);
    currentTarget.addEventListener('pointermove', onPointerMove);
    currentTarget.addEventListener('lostpointercapture', onLostPointerCapture);
  }

  function onSort(ctrlClick) {
    if (onSortColumnsChange == null) return;
    const {
      sortDescendingFirst
    } = column;

    if (sortColumn === undefined) {
      const nextSort = {
        columnKey: column.key,
        direction: sortDescendingFirst ? 'DESC' : 'ASC'
      };
      onSortColumnsChange(sortColumns && ctrlClick ? [...sortColumns, nextSort] : [nextSort]);
    } else {
      let nextSortColumn;

      if (sortDescendingFirst && sortDirection === 'DESC' || !sortDescendingFirst && sortDirection === 'ASC') {
        nextSortColumn = {
          columnKey: column.key,
          direction: sortDirection === 'ASC' ? 'DESC' : 'ASC'
        };
      }

      if (ctrlClick) {
        const nextSortColumns = [...sortColumns];

        if (nextSortColumn) {
          nextSortColumns[sortIndex] = nextSortColumn;
        } else {
          nextSortColumns.splice(sortIndex, 1);
        }

        onSortColumnsChange(nextSortColumns);
      } else {
        onSortColumnsChange(nextSortColumn ? [nextSortColumn] : []);
      }
    }
  }

  function onClick() {
    selectCell(column.idx);
  }

  function onDoubleClick(event) {
    const {
      right,
      left
    } = event.currentTarget.getBoundingClientRect();
    const offset = isRtl ? event.clientX - left : right - event.clientX;

    if (offset > 11) {
      return;
    }

    onColumnResize(column, 'auto');
  }

  function handleFocus(event) {
    onFocus == null ? void 0 : onFocus(event);

    if (shouldFocusGrid) {
      selectCell(0);
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    role: "columnheader",
    "aria-colindex": column.idx + 1,
    "aria-selected": isCellSelected,
    "aria-sort": ariaSort,
    "aria-colspan": colSpan,
    ref: ref,
    tabIndex: shouldFocusGrid ? 0 : tabIndex,
    className: className,
    style: { ...getCellStyle(column, colSpan),
      minWidth: column.minWidth,
      maxWidth: (_column$maxWidth = column.maxWidth) != null ? _column$maxWidth : undefined
    },
    onFocus: handleFocus,
    onClick: onClick,
    onDoubleClick: column.resizable ? onDoubleClick : undefined,
    onPointerDown: column.resizable ? onPointerDown : undefined,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HeaderRenderer$1, {
      column: column,
      sortDirection: sortDirection,
      priority: priority,
      onSort: onSort,
      allRowsSelected: allRowsSelected,
      onAllRowsSelectionChange: onAllRowsSelectionChange,
      isCellSelected: isCellSelected
    })
  });
}

var css_248z$8 = ".h197vzie700-beta12{background-color:var(--rdg-header-background-color);display:contents;font-weight:700;line-height:var(--rdg-header-row-height)}.h197vzie700-beta12>.c1wupbe700-beta12{inset-block-start:0;position:sticky;z-index:2}.h197vzie700-beta12>.c1730fa4700-beta12{z-index:3}";
styleInject(css_248z$8,{"insertAt":"top"});

const headerRow = "h197vzie700-beta12";
const headerRowClassname = `rdg-header-row ${headerRow}`;

function HeaderRow({
  columns,
  allRowsSelected,
  onAllRowsSelectionChange,
  onColumnResize,
  sortColumns,
  onSortColumnsChange,
  lastFrozenColumnIndex,
  selectedCellIdx,
  selectCell,
  shouldFocusGrid,
  direction
}) {
  const cells = [];

  for (let index = 0; index < columns.length; index++) {
    const column = columns[index];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: 'HEADER'
    });

    if (colSpan !== undefined) {
      index += colSpan - 1;
    }

    cells.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HeaderCell, {
      column: column,
      colSpan: colSpan,
      isCellSelected: selectedCellIdx === column.idx,
      onColumnResize: onColumnResize,
      allRowsSelected: allRowsSelected,
      onAllRowsSelectionChange: onAllRowsSelectionChange,
      onSortColumnsChange: onSortColumnsChange,
      sortColumns: sortColumns,
      selectCell: selectCell,
      shouldFocusGrid: shouldFocusGrid && index === 0,
      direction: direction
    }, column.key));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    role: "row",
    "aria-rowindex": 1,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(headerRowClassname, selectedCellIdx === -1 && rowSelectedClassname),
    style: getRowStyle(1),
    children: cells
  });
}

const HeaderRow$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(HeaderRow);

var css_248z$7 = ".c1bmg16t700-beta12,.ccpfvsn700-beta12{background-color:#ccf}.c1bmg16t700-beta12.ccpfvsn700-beta12{background-color:#99f}";
styleInject(css_248z$7,{"insertAt":"top"});

const cellCopied = "ccpfvsn700-beta12";
const cellCopiedClassname = `rdg-cell-copied ${cellCopied}`;
const cellDraggedOver = "c1bmg16t700-beta12";
const cellDraggedOverClassname = `rdg-cell-dragged-over ${cellDraggedOver}`;

function Cell({
  column,
  colSpan,
  isCellSelected,
  isCopied,
  isDraggedOver,
  row,
  dragHandle,
  onRowClick,
  onRowDoubleClick,
  onRowChange,
  selectCell,
  ...props
}) {
  const {
    ref,
    tabIndex,
    onFocus
  } = useRovingCellRef(isCellSelected);
  const {
    cellClass
  } = column;
  const className = getCellClassname(column, typeof cellClass === 'function' ? cellClass(row) : cellClass, isCopied && cellCopiedClassname, isDraggedOver && cellDraggedOverClassname);

  function selectCellWrapper(openEditor) {
    selectCell(row, column, openEditor);
  }

  function handleClick() {
    var _column$editorOptions;

    selectCellWrapper((_column$editorOptions = column.editorOptions) == null ? void 0 : _column$editorOptions.editOnClick);
    onRowClick == null ? void 0 : onRowClick(row, column);
  }

  function handleContextMenu() {
    selectCellWrapper();
  }

  function handleDoubleClick() {
    selectCellWrapper(true);
    onRowDoubleClick == null ? void 0 : onRowDoubleClick(row, column);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-selected": isCellSelected,
    "aria-colspan": colSpan,
    "aria-readonly": !isCellEditable(column, row) || undefined,
    ref: ref,
    tabIndex: tabIndex,
    className: className,
    style: getCellStyle(column, colSpan),
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
    onContextMenu: handleContextMenu,
    onFocus: onFocus,
    ...props,
    children: !column.rowGroup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(column.formatter, {
        column: column,
        row: row,
        isCellSelected: isCellSelected,
        onRowChange: onRowChange
      }), dragHandle]
    })
  });
}

const Cell$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Cell);

function Row({
  className,
  rowIdx,
  gridRowStart,
  height,
  selectedCellIdx,
  isRowSelected,
  copiedCellIdx,
  draggedOverCellIdx,
  lastFrozenColumnIndex,
  row,
  viewportColumns,
  selectedCellEditor,
  selectedCellDragHandle,
  onRowClick,
  onRowDoubleClick,
  rowClass,
  setDraggedOverRowIdx,
  onMouseEnter,
  onRowChange,
  selectCell,
  ...props
}, ref) {
  const handleRowChange = useLatestFunc(newRow => {
    onRowChange(rowIdx, newRow);
  });

  function handleDragEnter(event) {
    setDraggedOverRowIdx == null ? void 0 : setDraggedOverRowIdx(rowIdx);
    onMouseEnter == null ? void 0 : onMouseEnter(event);
  }

  className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? 'even' : 'odd'}`, rowClass == null ? void 0 : rowClass(row), className, selectedCellIdx === -1 && rowSelectedClassname);
  const cells = [];

  for (let index = 0; index < viewportColumns.length; index++) {
    const column = viewportColumns[index];
    const {
      idx
    } = column;
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: 'ROW',
      row
    });

    if (colSpan !== undefined) {
      index += colSpan - 1;
    }

    const isCellSelected = selectedCellIdx === idx;

    if (isCellSelected && selectedCellEditor) {
      cells.push(selectedCellEditor);
    } else {
      cells.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell$1, {
        column: column,
        colSpan: colSpan,
        row: row,
        isCopied: copiedCellIdx === idx,
        isDraggedOver: draggedOverCellIdx === idx,
        isCellSelected: isCellSelected,
        dragHandle: isCellSelected ? selectedCellDragHandle : undefined,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowChange: handleRowChange,
        selectCell: selectCell
      }, column.key));
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RowSelectionProvider, {
    value: isRowSelected,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      role: "row",
      ref: ref,
      className: className,
      onMouseEnter: handleDragEnter,
      style: getRowStyle(gridRowStart, height),
      ...props,
      children: cells
    })
  });
}

const Row$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Row));

function GroupCell({
  id,
  groupKey,
  childRows,
  isExpanded,
  isCellSelected,
  column,
  row,
  groupColumnIndex,
  toggleGroup: toggleGroupWrapper
}) {
  const {
    ref,
    tabIndex,
    onFocus
  } = useRovingCellRef(isCellSelected);

  function toggleGroup() {
    toggleGroupWrapper(id);
  }

  const isLevelMatching = column.rowGroup && groupColumnIndex === column.idx;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-selected": isCellSelected,
    ref: ref,
    tabIndex: tabIndex,
    className: getCellClassname(column),
    style: { ...getCellStyle(column),
      cursor: isLevelMatching ? 'pointer' : 'default'
    },
    onClick: isLevelMatching ? toggleGroup : undefined,
    onFocus: onFocus,
    children: (!column.rowGroup || groupColumnIndex === column.idx) && column.groupFormatter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(column.groupFormatter, {
      groupKey: groupKey,
      childRows: childRows,
      column: column,
      row: row,
      isExpanded: isExpanded,
      isCellSelected: isCellSelected,
      toggleGroup: toggleGroup
    })
  }, column.key);
}

const GroupCell$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(GroupCell);

var css_248z$6 = ".gyxx7e9700-beta12:not([aria-selected=true]){background-color:var(--rdg-header-background-color)}.gyxx7e9700-beta12>.c1wupbe700-beta12:not(:last-child):not(.c9dpaye700-beta12){border-inline-end:none}";
styleInject(css_248z$6,{"insertAt":"top"});

const groupRow = "gyxx7e9700-beta12";
const groupRowClassname = `rdg-group-row ${groupRow}`;

function GroupedRow({
  id,
  groupKey,
  viewportColumns,
  childRows,
  rowIdx,
  row,
  gridRowStart,
  height,
  level,
  isExpanded,
  selectedCellIdx,
  isRowSelected,
  selectGroup,
  toggleGroup,
  ...props
}) {
  const idx = viewportColumns[0].key === SELECT_COLUMN_KEY ? level + 1 : level;

  function handleSelectGroup() {
    selectGroup(rowIdx);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RowSelectionProvider, {
    value: isRowSelected,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      role: "row",
      "aria-level": level,
      "aria-expanded": isExpanded,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(rowClassname, groupRowClassname, `rdg-row-${rowIdx % 2 === 0 ? 'even' : 'odd'}`, selectedCellIdx === -1 && rowSelectedClassname),
      onClick: handleSelectGroup,
      style: getRowStyle(gridRowStart, height),
      ...props,
      children: viewportColumns.map(column => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(GroupCell$1, {
        id: id,
        groupKey: groupKey,
        childRows: childRows,
        isExpanded: isExpanded,
        isCellSelected: selectedCellIdx === column.idx,
        column: column,
        row: row,
        groupColumnIndex: idx,
        toggleGroup: toggleGroup
      }, column.key))
    })
  });
}

const GroupRowRenderer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(GroupedRow);

var css_248z$5 = ".s1n3hxke700-beta12{inset-block-end:var(--rdg-summary-row-bottom);inset-block-start:var(--rdg-summary-row-top)}";
styleInject(css_248z$5,{"insertAt":"top"});

const summaryCellClassname = "s1n3hxke700-beta12";

function SummaryCell({
  column,
  colSpan,
  row,
  isCellSelected,
  selectCell
}) {
  const {
    ref,
    tabIndex,
    onFocus
  } = useRovingCellRef(isCellSelected);
  const {
    summaryFormatter: SummaryFormatter,
    summaryCellClass
  } = column;
  const className = getCellClassname(column, summaryCellClassname, typeof summaryCellClass === 'function' ? summaryCellClass(row) : summaryCellClass);

  function onClick() {
    selectCell(row, column);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    "aria-selected": isCellSelected,
    ref: ref,
    tabIndex: tabIndex,
    className: className,
    style: getCellStyle(column, colSpan),
    onClick: onClick,
    onFocus: onFocus,
    children: SummaryFormatter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SummaryFormatter, {
      column: column,
      row: row,
      isCellSelected: isCellSelected
    })
  });
}

const SummaryCell$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SummaryCell);

var css_248z$4 = ".snfqesz700-beta12.r1otpg64700-beta12{line-height:var(--rdg-summary-row-height)}.snfqesz700-beta12.r1otpg64700-beta12>.c1wupbe700-beta12{position:sticky}.s1jijrjz700-beta12>.c1wupbe700-beta12{border-block-start:2px solid var(--rdg-summary-border-color)}";
styleInject(css_248z$4,{"insertAt":"top"});

const summaryRow = "snfqesz700-beta12";
const summaryRowBorderClassname = "s1jijrjz700-beta12";
const summaryRowClassname = `rdg-summary-row ${summaryRow}`;

function SummaryRow({
  rowIdx,
  gridRowStart,
  row,
  viewportColumns,
  top,
  bottom,
  lastFrozenColumnIndex,
  selectedCellIdx,
  selectCell,
  'aria-rowindex': ariaRowIndex
}) {
  const cells = [];

  for (let index = 0; index < viewportColumns.length; index++) {
    const column = viewportColumns[index];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: 'SUMMARY',
      row
    });

    if (colSpan !== undefined) {
      index += colSpan - 1;
    }

    const isCellSelected = selectedCellIdx === column.idx;
    cells.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SummaryCell$1, {
      column: column,
      colSpan: colSpan,
      row: row,
      isCellSelected: isCellSelected,
      selectCell: selectCell
    }, column.key));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    role: "row",
    "aria-rowindex": ariaRowIndex,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? 'even' : 'odd'}`, summaryRowClassname, rowIdx === 0 && summaryRowBorderClassname, selectedCellIdx === -1 && rowSelectedClassname),
    style: { ...getRowStyle(gridRowStart),
      '--rdg-summary-row-top': top !== undefined ? `${top}px` : undefined,
      '--rdg-summary-row-bottom': bottom !== undefined ? `${bottom}px` : undefined
    },
    children: cells
  });
}

const SummaryRow$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SummaryRow);

var css_248z$3 = ".c1tngyp1700-beta12.rdg-cell{padding:0}";
styleInject(css_248z$3,{"insertAt":"top"});

const cellEditing = "c1tngyp1700-beta12";
function EditCell({
  column,
  colSpan,
  row,
  onRowChange,
  closeEditor,
  scrollToCell
}) {
  var _column$editorOptions, _column$editorOptions4, _column$editorOptions5;

  const frameRequestRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const commitOnOutsideClick = ((_column$editorOptions = column.editorOptions) == null ? void 0 : _column$editorOptions.commitOnOutsideClick) !== false;
  const commitOnOutsideMouseDown = useLatestFunc(() => {
    onClose(true);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!commitOnOutsideClick) return;

    function onWindowCaptureMouseDown() {
      frameRequestRef.current = requestAnimationFrame(commitOnOutsideMouseDown);
    }

    addEventListener('mousedown', onWindowCaptureMouseDown, {
      capture: true
    });
    return () => {
      removeEventListener('mousedown', onWindowCaptureMouseDown, {
        capture: true
      });
      cancelFrameRequest();
    };
  }, [commitOnOutsideClick, commitOnOutsideMouseDown]);

  function cancelFrameRequest() {
    cancelAnimationFrame(frameRequestRef.current);
  }

  function onKeyDown(event) {
    if (event.key === 'Escape') {
      event.stopPropagation();
      onClose();
    } else if (event.key === 'Enter') {
      event.stopPropagation();
      onClose(true);
      scrollToCell();
    } else {
      var _column$editorOptions2, _column$editorOptions3;

      const onNavigation = (_column$editorOptions2 = (_column$editorOptions3 = column.editorOptions) == null ? void 0 : _column$editorOptions3.onNavigation) != null ? _column$editorOptions2 : onEditorNavigation;

      if (!onNavigation(event)) {
        event.stopPropagation();
      }
    }
  }

  function onClose(commitChanges) {
    if (commitChanges) {
      onRowChange(row, true);
    } else {
      closeEditor();
    }
  }

  const {
    cellClass
  } = column;
  const className = getCellClassname(column, 'rdg-editor-container', typeof cellClass === 'function' ? cellClass(row) : cellClass, !((_column$editorOptions4 = column.editorOptions) != null && _column$editorOptions4.renderFormatter) && cellEditing);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    "aria-selected": true,
    className: className,
    style: getCellStyle(column, colSpan),
    onKeyDown: onKeyDown,
    onMouseDownCapture: commitOnOutsideClick ? cancelFrameRequest : undefined,
    children: column.editor != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(column.editor, {
        column: column,
        row: row,
        onRowChange: onRowChange,
        onClose: onClose
      }), ((_column$editorOptions5 = column.editorOptions) == null ? void 0 : _column$editorOptions5.renderFormatter) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(column.formatter, {
        column: column,
        row: row,
        isCellSelected: true,
        onRowChange: onRowChange
      })]
    })
  });
}

var css_248z$2 = ".cadd3bp700-beta12{background-color:var(--rdg-selection-color);block-size:8px;cursor:move;inline-size:8px;inset-block-end:0;inset-inline-end:0;position:absolute}.cadd3bp700-beta12:hover{background-color:var(--rdg-background-color);block-size:16px;border:2px solid var(--rdg-selection-color);inline-size:16px}";
styleInject(css_248z$2,{"insertAt":"top"});

const cellDragHandle = "cadd3bp700-beta12";
const cellDragHandleClassname = `rdg-cell-drag-handle ${cellDragHandle}`;
function DragHandle({
  rows,
  columns,
  selectedPosition,
  latestDraggedOverRowIdx,
  isCellEditable,
  onRowsChange,
  onFill,
  setDragging,
  setDraggedOverRowIdx
}) {
  function handleMouseDown(event) {
    if (event.buttons !== 1) return;
    setDragging(true);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseup', onMouseUp);

    function onMouseOver(event) {
      if (event.buttons !== 1) onMouseUp();
    }

    function onMouseUp() {
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseup', onMouseUp);
      setDragging(false);
      handleDragEnd();
    }
  }

  function handleDragEnd() {
    const overRowIdx = latestDraggedOverRowIdx.current;
    if (overRowIdx === undefined) return;
    const {
      rowIdx
    } = selectedPosition;
    const startRowIndex = rowIdx < overRowIdx ? rowIdx + 1 : overRowIdx;
    const endRowIndex = rowIdx < overRowIdx ? overRowIdx + 1 : rowIdx;
    updateRows(startRowIndex, endRowIndex);
    setDraggedOverRowIdx(undefined);
  }

  function handleDoubleClick(event) {
    event.stopPropagation();
    updateRows(selectedPosition.rowIdx + 1, rows.length);
  }

  function updateRows(startRowIdx, endRowIdx) {
    const {
      idx,
      rowIdx
    } = selectedPosition;
    const column = columns[idx];
    const sourceRow = rows[rowIdx];
    const updatedRows = [...rows];
    const indexes = [];

    for (let i = startRowIdx; i < endRowIdx; i++) {
      if (isCellEditable({
        rowIdx: i,
        idx
      })) {
        const updatedRow = onFill({
          columnKey: column.key,
          sourceRow,
          targetRow: rows[i]
        });

        if (updatedRow !== rows[i]) {
          updatedRows[i] = updatedRow;
          indexes.push(i);
        }
      }
    }

    if (indexes.length > 0) {
      onRowsChange == null ? void 0 : onRowsChange(updatedRows, {
        indexes,
        column
      });
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: cellDragHandleClassname,
    onMouseDown: handleMouseDown,
    onDoubleClick: handleDoubleClick
  });
}

var css_248z$1 = ".a888944700-beta12{fill:currentColor}.a888944700-beta12>path{transition:d .1s}";
styleInject(css_248z$1,{"insertAt":"top"});

const arrow = "a888944700-beta12";
const arrowClassname = `rdg-sort-arrow ${arrow}`;
function SortIcon({
  sortDirection
}) {
  return sortDirection !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: arrowClassname,
    "aria-hidden": true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: sortDirection === 'ASC' ? 'M0 8 6 0 12 8' : 'M0 0 6 8 12 0'
    })
  }) : null;
}

const initialPosition = {
  idx: -1,
  rowIdx: -2,
  mode: 'SELECT'
};

function DataGrid({
  columns: rawColumns,
  rows: rawRows,
  summaryRows,
  rowKeyGetter,
  onRowsChange,
  rowHeight,
  headerRowHeight: rawHeaderRowHeight,
  summaryRowHeight: rawSummaryRowHeight,
  selectedRows,
  onSelectedRowsChange,
  sortColumns,
  onSortColumnsChange,
  defaultColumnOptions,
  groupBy: rawGroupBy,
  rowGrouper,
  expandedGroupIds,
  onExpandedGroupIdsChange,
  onRowClick,
  onRowDoubleClick,
  onScroll,
  onColumnResize,
  onFill,
  onCopy,
  onPaste,
  cellNavigationMode: rawCellNavigationMode,
  enableVirtualization,
  components,
  className,
  style,
  rowClass,
  direction,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'data-testid': testId
}, ref) {
  var _rowHeight, _ref, _components$rowRender, _ref2, _components$sortIcon, _ref3, _components$checkboxF, _components$noRowsFal, _enableVirtualization, _direction, _summaryRows$length;

  const defaultComponents = useDefaultComponents();
  (_rowHeight = rowHeight) != null ? _rowHeight : rowHeight = 35;
  const headerRowHeight = rawHeaderRowHeight != null ? rawHeaderRowHeight : typeof rowHeight === 'number' ? rowHeight : 35;
  const summaryRowHeight = rawSummaryRowHeight != null ? rawSummaryRowHeight : typeof rowHeight === 'number' ? rowHeight : 35;
  const RowRenderer = (_ref = (_components$rowRender = components == null ? void 0 : components.rowRenderer) != null ? _components$rowRender : defaultComponents == null ? void 0 : defaultComponents.rowRenderer) != null ? _ref : Row$1;
  const sortIcon = (_ref2 = (_components$sortIcon = components == null ? void 0 : components.sortIcon) != null ? _components$sortIcon : defaultComponents == null ? void 0 : defaultComponents.sortIcon) != null ? _ref2 : SortIcon;
  const checkboxFormatter = (_ref3 = (_components$checkboxF = components == null ? void 0 : components.checkboxFormatter) != null ? _components$checkboxF : defaultComponents == null ? void 0 : defaultComponents.checkboxFormatter) != null ? _ref3 : CheckboxFormatter;
  const noRowsFallback = (_components$noRowsFal = components == null ? void 0 : components.noRowsFallback) != null ? _components$noRowsFal : defaultComponents == null ? void 0 : defaultComponents.noRowsFallback;
  const cellNavigationMode = rawCellNavigationMode != null ? rawCellNavigationMode : 'NONE';
  (_enableVirtualization = enableVirtualization) != null ? _enableVirtualization : enableVirtualization = true;
  (_direction = direction) != null ? _direction : direction = 'ltr';
  const [scrollTop, setScrollTop] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [scrollLeft, setScrollLeft] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [columnWidths, setColumnWidths] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => new Map());
  const [selectedPosition, setSelectedPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialPosition);
  const [copiedCell, setCopiedCell] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isDragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [draggedOverRowIdx, setOverRowIdx] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const [autoResizeColumn, setAutoResizeColumn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const prevSelectedPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(selectedPosition);
  const latestDraggedOverRowIdx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(draggedOverRowIdx);
  const lastSelectedRowIdx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(-1);
  const rowRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [gridRef, gridWidth, gridHeight] = useGridDimensions();
  const headerRowsCount = 1;
  const summaryRowsCount = (_summaryRows$length = summaryRows == null ? void 0 : summaryRows.length) != null ? _summaryRows$length : 0;
  const clientHeight = gridHeight - headerRowHeight - summaryRowsCount * summaryRowHeight;
  const isSelectable = selectedRows != null && onSelectedRowsChange != null;
  const isHeaderRowSelected = selectedPosition.rowIdx === -1;
  const isRtl = direction === 'rtl';
  const leftKey = isRtl ? 'ArrowRight' : 'ArrowLeft';
  const rightKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
  const defaultGridComponents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    sortIcon,
    checkboxFormatter
  }), [sortIcon, checkboxFormatter]);
  const allRowsSelected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const {
      length
    } = rawRows;
    return length !== 0 && selectedRows != null && rowKeyGetter != null && selectedRows.size >= length && rawRows.every(row => selectedRows.has(rowKeyGetter(row)));
  }, [rawRows, selectedRows, rowKeyGetter]);
  const {
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    layoutCssVars,
    columnMetrics,
    lastFrozenColumnIndex,
    totalFrozenColumnWidth,
    groupBy
  } = useCalculatedColumns({
    rawColumns,
    columnWidths,
    scrollLeft,
    viewportWidth: gridWidth,
    defaultColumnOptions,
    rawGroupBy: rowGrouper ? rawGroupBy : undefined,
    enableVirtualization
  });
  const {
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    rowsCount,
    totalRowHeight,
    gridTemplateRows,
    isGroupRow,
    getRowTop,
    getRowHeight,
    findRowIdx
  } = useViewportRows({
    rawRows,
    groupBy,
    rowGrouper,
    rowHeight,
    clientHeight,
    scrollTop,
    expandedGroupIds,
    enableVirtualization
  });
  const viewportColumns = useViewportColumns({
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    lastFrozenColumnIndex,
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    summaryRows,
    isGroupRow
  });
  const hasGroups = groupBy.length > 0 && typeof rowGrouper === 'function';
  const minColIdx = hasGroups ? -1 : 0;
  const maxColIdx = columns.length - 1;
  const minRowIdx = -1;
  const maxRowIdx = headerRowsCount + rows.length + summaryRowsCount - 2;
  const selectedCellIsWithinSelectionBounds = isCellWithinSelectionBounds(selectedPosition);
  const selectedCellIsWithinViewportBounds = isCellWithinViewportBounds(selectedPosition);
  const selectRowLatest = useLatestFunc(selectRow);
  const selectAllRowsLatest = useLatestFunc(selectAllRows);
  const handleFormatterRowChangeLatest = useLatestFunc(updateRow);
  const selectViewportCellLatest = useLatestFunc((row, column, enableEditor) => {
    const rowIdx = rows.indexOf(row);
    selectCell({
      rowIdx,
      idx: column.idx
    }, enableEditor);
  });
  const selectGroupLatest = useLatestFunc(rowIdx => {
    selectCell({
      rowIdx,
      idx: -1
    });
  });
  const selectHeaderCellLatest = useLatestFunc(idx => {
    selectCell({
      rowIdx: -1,
      idx
    });
  });
  const selectSummaryCellLatest = useLatestFunc((summaryRow, column) => {
    const rowIdx = summaryRows.indexOf(summaryRow) + headerRowsCount + rows.length - 1;
    selectCell({
      rowIdx,
      idx: column.idx
    });
  });
  const toggleGroupLatest = useLatestFunc(toggleGroup);
  useLayoutEffect(() => {
    if (!selectedCellIsWithinSelectionBounds || isSamePosition(selectedPosition, prevSelectedPosition.current)) {
      prevSelectedPosition.current = selectedPosition;
      return;
    }

    prevSelectedPosition.current = selectedPosition;
    scrollToCell(selectedPosition);

    if (selectedPosition.idx === -1) {
      rowRef.current.focus({
        preventScroll: true
      });
    }
  });
  useLayoutEffect(() => {
    if (autoResizeColumn === null) return;
    const columnElement = gridRef.current.querySelector(`[aria-colindex="${autoResizeColumn.idx + 1}"]`);
    const {
      width
    } = columnElement.getBoundingClientRect();
    setColumnWidths(columnWidths => {
      const newColumnWidths = new Map(columnWidths);
      newColumnWidths.set(autoResizeColumn.key, width);
      return newColumnWidths;
    });
    setAutoResizeColumn(null);
    onColumnResize == null ? void 0 : onColumnResize(autoResizeColumn.idx, width);
  }, [autoResizeColumn, gridRef, onColumnResize]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    element: gridRef.current,

    scrollToColumn(idx) {
      scrollToCell({
        idx
      });
    },

    scrollToRow(rowIdx) {
      const {
        current
      } = gridRef;
      if (!current) return;
      current.scrollTo({
        top: getRowTop(rowIdx),
        behavior: 'smooth'
      });
    },

    selectCell
  }));
  const handleColumnResize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((column, width) => {
    if (width === 'auto') {
      setAutoResizeColumn(column);
      return;
    }

    setColumnWidths(columnWidths => {
      const newColumnWidths = new Map(columnWidths);
      newColumnWidths.set(column.key, width);
      return newColumnWidths;
    });
    onColumnResize == null ? void 0 : onColumnResize(column.idx, width);
  }, [onColumnResize]);
  const setDraggedOverRowIdx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(rowIdx => {
    setOverRowIdx(rowIdx);
    latestDraggedOverRowIdx.current = rowIdx;
  }, []);

  function selectRow({
    row,
    checked,
    isShiftClick
  }) {
    if (!onSelectedRowsChange) return;
    assertIsValidKeyGetter(rowKeyGetter);
    const newSelectedRows = new Set(selectedRows);

    if (isGroupRow(row)) {
      for (const childRow of row.childRows) {
        const rowKey = rowKeyGetter(childRow);

        if (checked) {
          newSelectedRows.add(rowKey);
        } else {
          newSelectedRows.delete(rowKey);
        }
      }

      onSelectedRowsChange(newSelectedRows);
      return;
    }

    const rowKey = rowKeyGetter(row);

    if (checked) {
      newSelectedRows.add(rowKey);
      const previousRowIdx = lastSelectedRowIdx.current;
      const rowIdx = rows.indexOf(row);
      lastSelectedRowIdx.current = rowIdx;

      if (isShiftClick && previousRowIdx !== -1 && previousRowIdx !== rowIdx) {
        const step = sign(rowIdx - previousRowIdx);

        for (let i = previousRowIdx + step; i !== rowIdx; i += step) {
          const row = rows[i];
          if (isGroupRow(row)) continue;
          newSelectedRows.add(rowKeyGetter(row));
        }
      }
    } else {
      newSelectedRows.delete(rowKey);
      lastSelectedRowIdx.current = -1;
    }

    onSelectedRowsChange(newSelectedRows);
  }

  function selectAllRows(checked) {
    if (!onSelectedRowsChange) return;
    assertIsValidKeyGetter(rowKeyGetter);
    const newSelectedRows = new Set(selectedRows);

    for (const row of rawRows) {
      const rowKey = rowKeyGetter(row);

      if (checked) {
        newSelectedRows.add(rowKey);
      } else {
        newSelectedRows.delete(rowKey);
      }
    }

    onSelectedRowsChange(newSelectedRows);
  }

  function toggleGroup(expandedGroupId) {
    if (!onExpandedGroupIdsChange) return;
    const newExpandedGroupIds = new Set(expandedGroupIds);

    if (newExpandedGroupIds.has(expandedGroupId)) {
      newExpandedGroupIds.delete(expandedGroupId);
    } else {
      newExpandedGroupIds.add(expandedGroupId);
    }

    onExpandedGroupIdsChange(newExpandedGroupIds);
  }

  function handleKeyDown(event) {
    if (!(event.target instanceof Element)) return;
    const isCellEvent = event.target.closest('.rdg-cell') !== null;
    const isRowEvent = hasGroups && event.target === rowRef.current;
    if (!isCellEvent && !isRowEvent) return;
    const {
      key,
      keyCode
    } = event;
    const {
      rowIdx
    } = selectedPosition;

    if (selectedCellIsWithinViewportBounds && (onPaste != null || onCopy != null) && isCtrlKeyHeldDown(event) && !isGroupRow(rows[rowIdx]) && selectedPosition.mode === 'SELECT') {
      const cKey = 67;
      const vKey = 86;

      if (keyCode === cKey) {
        handleCopy();
        return;
      }

      if (keyCode === vKey) {
        handlePaste();
        return;
      }
    }

    if (isRowIdxWithinViewportBounds(rowIdx)) {
      const row = rows[rowIdx];

      if (isGroupRow(row) && selectedPosition.idx === -1 && (key === leftKey && row.isExpanded || key === rightKey && !row.isExpanded)) {
        event.preventDefault();
        toggleGroup(row.id);
        return;
      }
    }

    switch (event.key) {
      case 'Escape':
        setCopiedCell(null);
        return;

      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'Tab':
      case 'Home':
      case 'End':
      case 'PageUp':
      case 'PageDown':
        navigate(event);
        break;

      default:
        handleCellInput(event);
        break;
    }
  }

  function handleScroll(event) {
    const {
      scrollTop,
      scrollLeft
    } = event.currentTarget;
    setScrollTop(scrollTop);
    setScrollLeft(abs(scrollLeft));
    onScroll == null ? void 0 : onScroll(event);
  }

  function getRawRowIdx(rowIdx) {
    return hasGroups ? rawRows.indexOf(rows[rowIdx]) : rowIdx;
  }

  function updateRow(rowIdx, row) {
    if (typeof onRowsChange !== 'function') return;
    const rawRowIdx = getRawRowIdx(rowIdx);
    if (row === rawRows[rawRowIdx]) return;
    const updatedRows = [...rawRows];
    updatedRows[rawRowIdx] = row;
    onRowsChange(updatedRows, {
      indexes: [rawRowIdx],
      column: columns[selectedPosition.idx]
    });
  }

  function commitEditorChanges() {
    if (selectedPosition.mode !== 'EDIT') return;
    updateRow(selectedPosition.rowIdx, selectedPosition.row);
  }

  function handleCopy() {
    const {
      idx,
      rowIdx
    } = selectedPosition;
    const sourceRow = rawRows[getRawRowIdx(rowIdx)];
    const sourceColumnKey = columns[idx].key;
    setCopiedCell({
      row: sourceRow,
      columnKey: sourceColumnKey
    });
    onCopy == null ? void 0 : onCopy({
      sourceRow,
      sourceColumnKey
    });
  }

  function handlePaste() {
    if (!onPaste || !onRowsChange || copiedCell === null || !isCellEditable(selectedPosition)) {
      return;
    }

    const {
      idx,
      rowIdx
    } = selectedPosition;
    const targetRow = rawRows[getRawRowIdx(rowIdx)];
    const updatedTargetRow = onPaste({
      sourceRow: copiedCell.row,
      sourceColumnKey: copiedCell.columnKey,
      targetRow,
      targetColumnKey: columns[idx].key
    });
    updateRow(rowIdx, updatedTargetRow);
  }

  function handleCellInput(event) {
    var _column$editorOptions;

    if (!selectedCellIsWithinViewportBounds) return;
    const row = rows[selectedPosition.rowIdx];
    if (isGroupRow(row)) return;
    const {
      key,
      shiftKey
    } = event;

    if (isSelectable && shiftKey && key === ' ') {
      assertIsValidKeyGetter(rowKeyGetter);
      const rowKey = rowKeyGetter(row);
      selectRow({
        row,
        checked: !selectedRows.has(rowKey),
        isShiftClick: false
      });
      event.preventDefault();
      return;
    }

    const column = columns[selectedPosition.idx];
    (_column$editorOptions = column.editorOptions) == null ? void 0 : _column$editorOptions.onCellKeyDown == null ? void 0 : _column$editorOptions.onCellKeyDown(event);
    if (event.isDefaultPrevented()) return;

    if (isCellEditable(selectedPosition) && isDefaultCellInput(event)) {
      setSelectedPosition(({
        idx,
        rowIdx
      }) => ({
        idx,
        rowIdx,
        mode: 'EDIT',
        row,
        originalRow: row
      }));
    }
  }

  function isColIdxWithinSelectionBounds(idx) {
    return idx >= minColIdx && idx <= maxColIdx;
  }

  function isRowIdxWithinViewportBounds(rowIdx) {
    return rowIdx >= 0 && rowIdx < rows.length;
  }

  function isCellWithinSelectionBounds({
    idx,
    rowIdx
  }) {
    return rowIdx >= minRowIdx && rowIdx <= maxRowIdx && isColIdxWithinSelectionBounds(idx);
  }

  function isCellWithinViewportBounds({
    idx,
    rowIdx
  }) {
    return isRowIdxWithinViewportBounds(rowIdx) && isColIdxWithinSelectionBounds(idx);
  }

  function isCellEditable(position) {
    return isCellWithinViewportBounds(position) && isSelectedCellEditable({
      columns,
      rows,
      selectedPosition: position,
      isGroupRow
    });
  }

  function selectCell(position, enableEditor) {
    if (!isCellWithinSelectionBounds(position)) return;
    commitEditorChanges();

    if (enableEditor && isCellEditable(position)) {
      const row = rows[position.rowIdx];
      setSelectedPosition({ ...position,
        mode: 'EDIT',
        row,
        originalRow: row
      });
    } else if (isSamePosition(selectedPosition, position)) {
      scrollToCell(position);
    } else {
      setSelectedPosition({ ...position,
        mode: 'SELECT'
      });
    }
  }

  function scrollToCell({
    idx,
    rowIdx
  }) {
    const {
      current
    } = gridRef;
    if (!current) return;

    if (typeof idx === 'number' && idx > lastFrozenColumnIndex) {
      var _rowIdx;

      (_rowIdx = rowIdx) != null ? _rowIdx : rowIdx = selectedPosition.rowIdx;
      if (!isCellWithinSelectionBounds({
        rowIdx,
        idx
      })) return;
      const {
        clientWidth
      } = current;
      const column = columns[idx];
      const {
        left,
        width
      } = columnMetrics.get(column);
      let right = left + width;
      const colSpan = getSelectedCellColSpan({
        rows,
        summaryRows,
        rowIdx,
        lastFrozenColumnIndex,
        column,
        isGroupRow
      });

      if (colSpan !== undefined) {
        const {
          left,
          width
        } = columnMetrics.get(columns[column.idx + colSpan - 1]);
        right = left + width;
      }

      const isCellAtLeftBoundary = left < scrollLeft + totalFrozenColumnWidth;
      const isCellAtRightBoundary = right > clientWidth + scrollLeft;
      const sign = isRtl ? -1 : 1;

      if (isCellAtLeftBoundary) {
        current.scrollLeft = (left - totalFrozenColumnWidth) * sign;
      } else if (isCellAtRightBoundary) {
        current.scrollLeft = (right - clientWidth) * sign;
      }
    }

    if (typeof rowIdx === 'number' && isRowIdxWithinViewportBounds(rowIdx)) {
      const rowTop = getRowTop(rowIdx);
      const rowHeight = getRowHeight(rowIdx);

      if (rowTop < scrollTop) {
        current.scrollTop = rowTop;
      } else if (rowTop + rowHeight > scrollTop + clientHeight) {
        current.scrollTop = rowTop + rowHeight - clientHeight;
      }
    }
  }

  function getNextPosition(key, ctrlKey, shiftKey) {
    const {
      idx,
      rowIdx
    } = selectedPosition;
    const row = rows[rowIdx];
    const isRowSelected = selectedCellIsWithinSelectionBounds && idx === -1;

    if (key === leftKey && isRowSelected && isGroupRow(row) && !row.isExpanded && row.level !== 0) {
      let parentRowIdx = -1;

      for (let i = selectedPosition.rowIdx - 1; i >= 0; i--) {
        const parentRow = rows[i];

        if (isGroupRow(parentRow) && parentRow.id === row.parentId) {
          parentRowIdx = i;
          break;
        }
      }

      if (parentRowIdx !== -1) {
        return {
          idx,
          rowIdx: parentRowIdx
        };
      }
    }

    switch (key) {
      case 'ArrowUp':
        return {
          idx,
          rowIdx: rowIdx - 1
        };

      case 'ArrowDown':
        return {
          idx,
          rowIdx: rowIdx + 1
        };

      case leftKey:
        return {
          idx: idx - 1,
          rowIdx
        };

      case rightKey:
        return {
          idx: idx + 1,
          rowIdx
        };

      case 'Tab':
        return {
          idx: idx + (shiftKey ? -1 : 1),
          rowIdx
        };

      case 'Home':
        if (isRowSelected) return {
          idx,
          rowIdx: 0
        };
        return {
          idx: 0,
          rowIdx: ctrlKey ? minRowIdx : rowIdx
        };

      case 'End':
        if (isRowSelected) return {
          idx,
          rowIdx: rows.length - 1
        };
        return {
          idx: maxColIdx,
          rowIdx: ctrlKey ? maxRowIdx : rowIdx
        };

      case 'PageUp':
        {
          if (selectedPosition.rowIdx === minRowIdx) return selectedPosition;
          const nextRowY = getRowTop(rowIdx) + getRowHeight(rowIdx) - clientHeight;
          return {
            idx,
            rowIdx: nextRowY > 0 ? findRowIdx(nextRowY) : 0
          };
        }

      case 'PageDown':
        {
          if (selectedPosition.rowIdx >= rows.length) return selectedPosition;
          const nextRowY = getRowTop(rowIdx) + clientHeight;
          return {
            idx,
            rowIdx: nextRowY < totalRowHeight ? findRowIdx(nextRowY) : rows.length - 1
          };
        }

      default:
        return selectedPosition;
    }
  }

  function navigate(event) {
    const {
      key,
      shiftKey
    } = event;
    let mode = cellNavigationMode;

    if (key === 'Tab') {
      if (canExitGrid({
        shiftKey,
        cellNavigationMode,
        maxColIdx,
        minRowIdx,
        maxRowIdx,
        selectedPosition
      })) {
        commitEditorChanges();
        return;
      }

      mode = cellNavigationMode === 'NONE' ? 'CHANGE_ROW' : cellNavigationMode;
    }

    event.preventDefault();
    const ctrlKey = isCtrlKeyHeldDown(event);
    const nextPosition = getNextPosition(key, ctrlKey, shiftKey);
    if (isSamePosition(selectedPosition, nextPosition)) return;
    const nextSelectedCellPosition = getNextSelectedCellPosition({
      columns,
      colSpanColumns,
      rows,
      summaryRows,
      minRowIdx,
      maxRowIdx,
      lastFrozenColumnIndex,
      cellNavigationMode: mode,
      currentPosition: selectedPosition,
      nextPosition,
      isCellWithinBounds: isCellWithinSelectionBounds,
      isGroupRow
    });
    selectCell(nextSelectedCellPosition);
  }

  function getDraggedOverCellIdx(currentRowIdx) {
    if (draggedOverRowIdx === undefined) return;
    const {
      rowIdx
    } = selectedPosition;
    const isDraggedOver = rowIdx < draggedOverRowIdx ? rowIdx < currentRowIdx && currentRowIdx <= draggedOverRowIdx : rowIdx > currentRowIdx && currentRowIdx >= draggedOverRowIdx;
    return isDraggedOver ? selectedPosition.idx : undefined;
  }

  function getLayoutCssVars() {
    if (autoResizeColumn === null) return layoutCssVars;
    const {
      gridTemplateColumns
    } = layoutCssVars;
    const newSizes = gridTemplateColumns.split(' ');
    newSizes[autoResizeColumn.idx] = 'max-content';
    return { ...layoutCssVars,
      gridTemplateColumns: newSizes.join(' ')
    };
  }

  function getDragHandle(rowIdx) {
    if (selectedPosition.rowIdx !== rowIdx || selectedPosition.mode === 'EDIT' || hasGroups || onFill == null) {
      return;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DragHandle, {
      rows: rawRows,
      columns: columns,
      selectedPosition: selectedPosition,
      isCellEditable: isCellEditable,
      latestDraggedOverRowIdx: latestDraggedOverRowIdx,
      onRowsChange: onRowsChange,
      onFill: onFill,
      setDragging: setDragging,
      setDraggedOverRowIdx: setDraggedOverRowIdx
    });
  }

  function getCellEditor(rowIdx) {
    if (selectedPosition.rowIdx !== rowIdx || selectedPosition.mode === 'SELECT') return;
    const {
      idx,
      row
    } = selectedPosition;
    const column = columns[idx];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: 'ROW',
      row
    });

    const closeEditor = () => {
      setSelectedPosition(({
        idx,
        rowIdx
      }) => ({
        idx,
        rowIdx,
        mode: 'SELECT'
      }));
    };

    const onRowChange = (row, commitChanges) => {
      if (commitChanges) {
        updateRow(selectedPosition.rowIdx, row);
        closeEditor();
      } else {
        setSelectedPosition(position => ({ ...position,
          row
        }));
      }
    };

    if (rows[selectedPosition.rowIdx] !== selectedPosition.originalRow) {
      closeEditor();
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(EditCell, {
      column: column,
      colSpan: colSpan,
      row: row,
      onRowChange: onRowChange,
      closeEditor: closeEditor,
      scrollToCell: () => {
        scrollToCell(selectedPosition);
      }
    }, column.key);
  }

  function getRowViewportColumns(rowIdx) {
    const selectedColumn = columns[selectedPosition.idx];

    if (selectedColumn !== undefined && selectedPosition.rowIdx === rowIdx && !viewportColumns.includes(selectedColumn)) {
      return selectedPosition.idx > colOverscanEndIdx ? [...viewportColumns, selectedColumn] : [...viewportColumns.slice(0, lastFrozenColumnIndex + 1), selectedColumn, ...viewportColumns.slice(lastFrozenColumnIndex + 1)];
    }

    return viewportColumns;
  }

  function getViewportRows() {
    const rowElements = [];
    let startRowIndex = 0;
    const {
      idx: selectedIdx,
      rowIdx: selectedRowIdx
    } = selectedPosition;
    const startRowIdx = selectedCellIsWithinViewportBounds && selectedRowIdx < rowOverscanStartIdx ? rowOverscanStartIdx - 1 : rowOverscanStartIdx;
    const endRowIdx = selectedCellIsWithinViewportBounds && selectedRowIdx > rowOverscanEndIdx ? rowOverscanEndIdx + 1 : rowOverscanEndIdx;

    for (let viewportRowIdx = startRowIdx; viewportRowIdx <= endRowIdx; viewportRowIdx++) {
      const isRowOutsideViewport = viewportRowIdx === rowOverscanStartIdx - 1 || viewportRowIdx === rowOverscanEndIdx + 1;
      const rowIdx = isRowOutsideViewport ? selectedRowIdx : viewportRowIdx;
      let rowColumns = viewportColumns;
      const selectedColumn = columns[selectedIdx];

      if (selectedColumn !== undefined) {
        if (isRowOutsideViewport) {
          rowColumns = [selectedColumn];
        } else {
          rowColumns = getRowViewportColumns(rowIdx);
        }
      }

      const row = rows[rowIdx];
      const gridRowStart = headerRowsCount + rowIdx + 1;

      if (isGroupRow(row)) {
        ({
          startRowIndex
        } = row);
        const isGroupRowSelected = isSelectable && row.childRows.every(cr => selectedRows.has(rowKeyGetter(cr)));
        rowElements.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(GroupRowRenderer, {
          "aria-level": row.level + 1,
          "aria-setsize": row.setSize,
          "aria-posinset": row.posInSet + 1,
          "aria-rowindex": headerRowsCount + startRowIndex + 1,
          "aria-selected": isSelectable ? isGroupRowSelected : undefined,
          id: row.id,
          groupKey: row.groupKey,
          viewportColumns: rowColumns,
          childRows: row.childRows,
          rowIdx: rowIdx,
          row: row,
          gridRowStart: gridRowStart,
          height: getRowHeight(rowIdx),
          level: row.level,
          isExpanded: row.isExpanded,
          selectedCellIdx: selectedRowIdx === rowIdx ? selectedIdx : undefined,
          isRowSelected: isGroupRowSelected,
          selectGroup: selectGroupLatest,
          toggleGroup: toggleGroupLatest
        }, row.id));
        continue;
      }

      startRowIndex++;
      let key;
      let isRowSelected = false;

      if (typeof rowKeyGetter === 'function') {
        var _selectedRows$has;

        key = rowKeyGetter(row);
        isRowSelected = (_selectedRows$has = selectedRows == null ? void 0 : selectedRows.has(key)) != null ? _selectedRows$has : false;
      } else {
        key = hasGroups ? startRowIndex : rowIdx;
      }

      rowElements.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RowRenderer, {
        "aria-rowindex": headerRowsCount + (hasGroups ? startRowIndex : rowIdx) + 1,
        "aria-selected": isSelectable ? isRowSelected : undefined,
        rowIdx: rowIdx,
        row: row,
        viewportColumns: rowColumns,
        isRowSelected: isRowSelected,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        rowClass: rowClass,
        gridRowStart: gridRowStart,
        height: getRowHeight(rowIdx),
        copiedCellIdx: copiedCell !== null && copiedCell.row === row ? columns.findIndex(c => c.key === copiedCell.columnKey) : undefined,
        selectedCellIdx: selectedRowIdx === rowIdx ? selectedIdx : undefined,
        draggedOverCellIdx: getDraggedOverCellIdx(rowIdx),
        setDraggedOverRowIdx: isDragging ? setDraggedOverRowIdx : undefined,
        lastFrozenColumnIndex: lastFrozenColumnIndex,
        onRowChange: handleFormatterRowChangeLatest,
        selectCell: selectViewportCellLatest,
        selectedCellDragHandle: getDragHandle(rowIdx),
        selectedCellEditor: getCellEditor(rowIdx)
      }, key));
    }

    return rowElements;
  }

  if (selectedPosition.idx > maxColIdx || selectedPosition.rowIdx > maxRowIdx) {
    setSelectedPosition(initialPosition);
    setDraggedOverRowIdx(undefined);
  }

  let templateRows = `${headerRowHeight}px`;

  if (rows.length > 0) {
    templateRows += gridTemplateRows;
  }

  if (summaryRowsCount > 0) {
    templateRows += ` repeat(${summaryRowsCount}, ${summaryRowHeight}px)`;
  }

  const isGroupRowFocused = selectedPosition.idx === -1 && selectedPosition.rowIdx !== -2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    role: hasGroups ? 'treegrid' : 'grid',
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-multiselectable": isSelectable ? true : undefined,
    "aria-colcount": columns.length,
    "aria-rowcount": headerRowsCount + rowsCount + summaryRowsCount,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(rootClassname, className, isDragging && viewportDraggingClassname, autoResizeColumn !== null && cellAutoResizeClassname),
    style: { ...style,
      gridTemplateRows: templateRows,
      '--rdg-header-row-height': `${headerRowHeight}px`,
      '--rdg-summary-row-height': `${summaryRowHeight}px`,
      '--rdg-sign': isRtl ? -1 : 1,
      ...getLayoutCssVars()
    },
    dir: direction,
    ref: gridRef,
    onScroll: handleScroll,
    onKeyDown: handleKeyDown,
    "data-testid": testId,
    children: [hasGroups && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      ref: rowRef,
      tabIndex: isGroupRowFocused ? 0 : -1,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(focusSinkClassname, isGroupRowFocused && [rowSelected, lastFrozenColumnIndex !== -1 && rowSelectedWithFrozenCell]),
      style: {
        gridRowStart: selectedPosition.rowIdx + 2
      },
      onKeyDown: handleKeyDown
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(DataGridDefaultComponentsProvider, {
      value: defaultGridComponents,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HeaderRow$1, {
        columns: getRowViewportColumns(-1),
        onColumnResize: handleColumnResize,
        allRowsSelected: allRowsSelected,
        onAllRowsSelectionChange: selectAllRowsLatest,
        sortColumns: sortColumns,
        onSortColumnsChange: onSortColumnsChange,
        lastFrozenColumnIndex: lastFrozenColumnIndex,
        selectedCellIdx: isHeaderRowSelected ? selectedPosition.idx : undefined,
        selectCell: selectHeaderCellLatest,
        shouldFocusGrid: !selectedCellIsWithinSelectionBounds,
        direction: direction
      }), rows.length === 0 && noRowsFallback ? noRowsFallback : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RowSelectionChangeProvider, {
          value: selectRowLatest,
          children: getViewportRows()
        }), summaryRows == null ? void 0 : summaryRows.map((row, rowIdx) => {
          const gridRowStart = headerRowsCount + rows.length + rowIdx + 1;
          const summaryRowIdx = headerRowsCount + rows.length + rowIdx - 1;
          const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
          const top = clientHeight > totalRowHeight ? gridHeight - summaryRowHeight * (summaryRows.length - rowIdx) : undefined;
          const bottom = top === undefined ? summaryRowHeight * (summaryRows.length - 1 - rowIdx) : undefined;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SummaryRow$1, {
            "aria-rowindex": headerRowsCount + rowsCount + rowIdx + 1,
            rowIdx: rowIdx,
            gridRowStart: gridRowStart,
            row: row,
            top: top,
            bottom: bottom,
            viewportColumns: getRowViewportColumns(summaryRowIdx),
            lastFrozenColumnIndex: lastFrozenColumnIndex,
            selectedCellIdx: isSummaryRowSelected ? selectedPosition.idx : undefined,
            selectCell: selectSummaryCellLatest
          }, rowIdx);
        })]
      })]
    })]
  });
}

function isSamePosition(p1, p2) {
  return p1.idx === p2.idx && p1.rowIdx === p2.rowIdx;
}

const DataGrid$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(DataGrid);

var css_248z = ".t16y9g8l700-beta12{appearance:none;background-color:var(--rdg-background-color);block-size:100%;border:2px solid #ccc;box-sizing:border-box;color:var(--rdg-color);font-family:inherit;font-size:var(--rdg-font-size);inline-size:100%;padding-block:0;padding-inline:6px;vertical-align:top}.t16y9g8l700-beta12:focus{border-color:var(--rdg-selection-color);outline:none}.t16y9g8l700-beta12::placeholder{color:#999;opacity:1}";
styleInject(css_248z,{"insertAt":"top"});

const textEditor = "t16y9g8l700-beta12";
const textEditorClassname = `rdg-text-editor ${textEditor}`;

function autoFocusAndSelect(input) {
  input == null ? void 0 : input.focus();
  input == null ? void 0 : input.select();
}

function TextEditor({
  row,
  column,
  onRowChange,
  onClose
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
    className: textEditorClassname,
    ref: autoFocusAndSelect,
    value: row[column.key],
    onChange: event => onRowChange({ ...row,
      [column.key]: event.target.value
    }),
    onBlur: () => onClose(true)
  });
}


//# sourceMappingURL=bundle.js.map


/***/ })

}]);