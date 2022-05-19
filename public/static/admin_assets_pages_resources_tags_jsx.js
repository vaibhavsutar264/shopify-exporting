"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin_assets_pages_resources_tags_jsx"],{

/***/ "./admin/assets/pages/resources/tags.jsx":
/*!***********************************************!*\
  !*** ./admin/assets/pages/resources/tags.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tags)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_data_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-data-grid */ "./node_modules/react-data-grid/lib/bundle.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import { Inertia } from "@inertiajs/inertia";







function tags(_ref) {
  var tags = _ref.tags;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRows = _useState4[0],
      setSelectedRows = _useState4[1];

  var cols = Object.keys(tags.data[0]).map(function (ok) {
    return {
      key: ok,
      name: ok
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (search && search.length) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(route('admin.tags.index', {
        q: search
      }));
    }
  }, [search]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
      value: search,
      onChange: function onChange(ev) {
        return setSearch(ev.target.value);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "container mx-auto py-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.InertiaLink, {
        href: route('admin.tags.create'),
        children: "New user"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_data_grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "rdg-light",
      columns: cols,
      rows: tags.data,
      defaultColumnOptions: {
        sortable: true,
        resizable: true
      },
      selectedRows: selectedRows,
      onSelectedRowsChange: setSelectedRows
    })]
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