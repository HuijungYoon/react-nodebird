module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/constants.js\");\n\n//# sourceURL=webpack:///external_%22next/dist/next-server/lib/constants.js%22?");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/document-context.js\");\n\n//# sourceURL=webpack:///external_%22next/dist/next-server/lib/document-context.js%22?");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");\n\n//# sourceURL=webpack:///external_%22next/dist/next-server/lib/utils.js%22?");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/server/utils.js\");\n\n//# sourceURL=webpack:///external_%22next/dist/next-server/server/utils.js%22?");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.middleware = middleware;\nexports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ \"styled-jsx/server\"));\n\nvar _constants = __webpack_require__(/*! ../next-server/lib/constants */ \"../next-server/lib/constants\");\n\nvar _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ \"../next-server/lib/document-context\");\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.DocumentContext = _utils.DocumentContext;\nexports.DocumentInitialProps = _utils.DocumentInitialProps;\nexports.DocumentProps = _utils.DocumentProps;\n\nvar _utils2 = __webpack_require__(/*! ../next-server/server/utils */ \"../next-server/server/utils\");\n\nvar _htmlescape = __webpack_require__(/*! ../server/htmlescape */ \"./node_modules/next/dist/server/htmlescape.js\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    default: obj\n  };\n}\n\nfunction _getRequireWildcardCache() {\n  if (typeof WeakMap !== \"function\") return null;\n  var cache = new WeakMap();\n\n  _getRequireWildcardCache = function () {\n    return cache;\n  };\n\n  return cache;\n}\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  }\n\n  if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") {\n    return {\n      default: obj\n    };\n  }\n\n  var cache = _getRequireWildcardCache();\n\n  if (cache && cache.has(obj)) {\n    return cache.get(obj);\n  }\n\n  var newObj = {};\n  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;\n\n  for (var key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) {\n      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;\n\n      if (desc && (desc.get || desc.set)) {\n        Object.defineProperty(newObj, key, desc);\n      } else {\n        newObj[key] = obj[key];\n      }\n    }\n  }\n\n  newObj.default = obj;\n\n  if (cache) {\n    cache.set(obj, newObj);\n  }\n\n  return newObj;\n}\n\nasync function middleware({\n  req,\n  res\n}) {}\n\nfunction dedupe(bundles) {\n  const files = new Set();\n  const kept = [];\n\n  for (const bundle of bundles) {\n    if (files.has(bundle.file)) continue;\n    files.add(bundle.file);\n    kept.push(bundle);\n  }\n\n  return kept;\n}\n\nfunction getOptionalModernScriptVariant(path) {\n  if (false) {}\n\n  return path;\n}\n/**\n* `Document` component handles the initial `document` markup and renders only on the server side.\n* Commonly used for implementing server side rendering for `css-in-js` libraries.\n*/\n\n\nclass Document extends _react.Component {\n  /**\n  * `getInitialProps` hook returns the context object with the addition of `renderPage`.\n  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers\n  */\n  static async getInitialProps(ctx) {\n    const enhancers =  false ? undefined : [];\n\n    const enhanceApp = App => {\n      for (const enhancer of enhancers) {\n        App = enhancer(App);\n      }\n\n      return props => /*#__PURE__*/_react.default.createElement(App, props);\n    };\n\n    const {\n      html,\n      head\n    } = await ctx.renderPage({\n      enhanceApp\n    });\n    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];\n    return {\n      html,\n      head,\n      styles\n    };\n  }\n\n  static renderDocument(Document, props) {\n    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {\n      value: {\n        _documentProps: props,\n        // In dev we invalidate the cache by appending a timestamp to the resource URL.\n        // This is a workaround to fix https://github.com/vercel/next.js/issues/5860\n        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.\n        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined\n      }\n    }, /*#__PURE__*/_react.default.createElement(Document, props));\n  }\n\n  render() {\n    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement(\"body\", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));\n  }\n\n}\n\nexports.default = Document;\nDocument.headTagsMiddleware =  false ? undefined : () => [];\nDocument.bodyTagsMiddleware =  false ? undefined : () => [];\nDocument.htmlPropsMiddleware =  false ? undefined : () => [];\n\nclass Html extends _react.Component {\n  constructor(...args) {\n    super(...args);\n    this.context = void 0;\n  }\n\n  render() {\n    const {\n      inAmpMode,\n      htmlProps\n    } = this.context._documentProps;\n    return /*#__PURE__*/_react.default.createElement(\"html\", Object.assign({}, htmlProps, this.props, {\n      amp: inAmpMode ? '' : undefined,\n      \"data-ampdevmode\": inAmpMode && true ? '' : undefined\n    }));\n  }\n\n}\n\nexports.Html = Html;\nHtml.contextType = _documentContext.DocumentContext;\nHtml.propTypes = {\n  children: _propTypes.default.node.isRequired\n};\n\nclass Head extends _react.Component {\n  constructor(...args) {\n    super(...args);\n    this.context = void 0;\n  }\n\n  getCssLinks() {\n    const {\n      assetPrefix,\n      files\n    } = this.context._documentProps;\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n    const cssFiles = files && files.length ? files.filter(f => /\\.css$/.test(f)) : [];\n    const cssLinkElements = [];\n    cssFiles.forEach(file => {\n      cssLinkElements.push( /*#__PURE__*/_react.default.createElement(\"link\", {\n        key: `${file}-preload`,\n        nonce: this.props.nonce,\n        rel: \"preload\",\n        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,\n        as: \"style\",\n        crossOrigin: this.props.crossOrigin || undefined\n      }), /*#__PURE__*/_react.default.createElement(\"link\", {\n        key: file,\n        nonce: this.props.nonce,\n        rel: \"stylesheet\",\n        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,\n        crossOrigin: this.props.crossOrigin || undefined\n      }));\n    });\n    return cssLinkElements.length === 0 ? null : cssLinkElements;\n  }\n\n  getPreloadDynamicChunks() {\n    const {\n      dynamicImports,\n      assetPrefix\n    } = this.context._documentProps;\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n    return dedupe(dynamicImports).map(bundle => {\n      // `dynamicImports` will contain both `.js` and `.module.js` when the\n      // feature is enabled. This clause will filter down to the modern\n      // variants only.\n      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {\n        return null;\n      }\n\n      return /*#__PURE__*/_react.default.createElement(\"link\", {\n        rel: \"preload\",\n        key: bundle.file,\n        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,\n        as: \"script\",\n        nonce: this.props.nonce,\n        crossOrigin: this.props.crossOrigin || undefined\n      });\n    }) // Filter out nulled scripts\n    .filter(Boolean);\n  }\n\n  getPreloadMainLinks() {\n    const {\n      assetPrefix,\n      files\n    } = this.context._documentProps;\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n    const preloadFiles = files && files.length ? files.filter(file => {\n      // `dynamicImports` will contain both `.js` and `.module.js` when\n      // the feature is enabled. This clause will filter down to the\n      // modern variants only.\n      return file.endsWith(getOptionalModernScriptVariant('.js'));\n    }) : [];\n    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement(\"link\", {\n      key: file,\n      nonce: this.props.nonce,\n      rel: \"preload\",\n      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,\n      as: \"script\",\n      crossOrigin: this.props.crossOrigin || undefined\n    }));\n  }\n\n  render() {\n    const {\n      styles,\n      ampPath,\n      inAmpMode,\n      assetPrefix,\n      hybridAmp,\n      canonicalBase,\n      __NEXT_DATA__,\n      dangerousAsPath,\n      headTags,\n      unstable_runtimeJS\n    } = this.context._documentProps;\n    const disableRuntimeJS = unstable_runtimeJS === false;\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n    const {\n      page,\n      buildId\n    } = __NEXT_DATA__;\n    let {\n      head\n    } = this.context._documentProps;\n    let children = this.props.children; // show a warning if Head contains <title> (only in development)\n\n    if (true) {\n      children = _react.default.Children.map(children, child => {\n        var _child$props;\n\n        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];\n\n        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {\n          console.warn(\"Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title\");\n        }\n\n        return child;\n      });\n      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');\n    }\n\n    let hasAmphtmlRel = false;\n    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags\n\n    head = _react.default.Children.map(head || [], child => {\n      if (!child) return child;\n      const {\n        type,\n        props\n      } = child;\n\n      if (inAmpMode) {\n        let badProp = '';\n\n        if (type === 'meta' && props.name === 'viewport') {\n          badProp = 'name=\"viewport\"';\n        } else if (type === 'link' && props.rel === 'canonical') {\n          hasCanonicalRel = true;\n        } else if (type === 'script') {\n          // only block if\n          // 1. it has a src and isn't pointing to ampproject's CDN\n          // 2. it is using dangerouslySetInnerHTML without a type or\n          // a type of text/javascript\n          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {\n            badProp = '<script';\n            Object.keys(props).forEach(prop => {\n              badProp += ` ${prop}=\"${props[prop]}\"`;\n            });\n            badProp += '/>';\n          }\n        }\n\n        if (badProp) {\n          console.warn(`Found conflicting amp tag \"${child.type}\" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);\n          return null;\n        }\n      } else {\n        // non-amp mode\n        if (type === 'link' && props.rel === 'amphtml') {\n          hasAmphtmlRel = true;\n        }\n      }\n\n      return child;\n    }); // try to parse styles from fragment for backwards compat\n\n    const curStyles = Array.isArray(styles) ? styles : [];\n\n    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement\n    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement\n    Array.isArray(styles.props.children)) {\n      const hasStyles = el => {\n        var _el$props, _el$props$dangerously;\n\n        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;\n      }; // @ts-ignore Property 'props' does not exist on type ReactElement\n\n\n      styles.props.children.forEach(child => {\n        if (Array.isArray(child)) {\n          child.forEach(el => hasStyles(el) && curStyles.push(el));\n        } else if (hasStyles(child)) {\n          curStyles.push(child);\n        }\n      });\n    }\n\n    return /*#__PURE__*/_react.default.createElement(\"head\", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(\"style\", {\n      \"data-next-hide-fouc\": true,\n      \"data-ampdevmode\": inAmpMode ? 'true' : undefined,\n      dangerouslySetInnerHTML: {\n        __html: `body{display:none}`\n      }\n    }), /*#__PURE__*/_react.default.createElement(\"noscript\", {\n      \"data-next-hide-fouc\": true,\n      \"data-ampdevmode\": inAmpMode ? 'true' : undefined\n    }, /*#__PURE__*/_react.default.createElement(\"style\", {\n      dangerouslySetInnerHTML: {\n        __html: `body{display:block}`\n      }\n    }))), children, head, /*#__PURE__*/_react.default.createElement(\"meta\", {\n      name: \"next-head-count\",\n      content: _react.default.Children.count(head || []).toString()\n    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width,minimum-scale=1,initial-scale=1\"\n    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement(\"link\", {\n      rel: \"canonical\",\n      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)\n    }), /*#__PURE__*/_react.default.createElement(\"link\", {\n      rel: \"preload\",\n      as: \"script\",\n      href: \"https://cdn.ampproject.org/v0.js\"\n    }), styles && /*#__PURE__*/_react.default.createElement(\"style\", {\n      \"amp-custom\": \"\",\n      dangerouslySetInnerHTML: {\n        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\\/\\*# sourceMappingURL=.*\\*\\//g, '').replace(/\\/\\*@ sourceURL=.*?\\*\\//g, '')\n      }\n    }), /*#__PURE__*/_react.default.createElement(\"style\", {\n      \"amp-boilerplate\": \"\",\n      dangerouslySetInnerHTML: {\n        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`\n      }\n    }), /*#__PURE__*/_react.default.createElement(\"noscript\", null, /*#__PURE__*/_react.default.createElement(\"style\", {\n      \"amp-boilerplate\": \"\",\n      dangerouslySetInnerHTML: {\n        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`\n      }\n    })), /*#__PURE__*/_react.default.createElement(\"script\", {\n      async: true,\n      src: \"https://cdn.ampproject.org/v0.js\"\n    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement(\"link\", {\n      rel: \"amphtml\",\n      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)\n    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement(\"link\", {\n      rel: \"preload\",\n      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,\n      as: \"script\",\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined\n    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement(\"link\", {\n      rel: \"preload\",\n      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,\n      as: \"script\",\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined\n    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&\n    /*#__PURE__*/\n    // this element is used to mount development styles so the\n    // ordering matches production\n    // (by default, style-loader injects at the bottom of <head />)\n    _react.default.createElement(\"noscript\", {\n      id: \"__next_css__DO_NOT_USE__\"\n    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));\n  }\n\n}\n\nexports.Head = Head;\nHead.contextType = _documentContext.DocumentContext;\nHead.propTypes = {\n  nonce: _propTypes.default.string,\n  crossOrigin: _propTypes.default.string\n};\n\nclass Main extends _react.Component {\n  constructor(...args) {\n    super(...args);\n    this.context = void 0;\n  }\n\n  render() {\n    const {\n      inAmpMode,\n      html\n    } = this.context._documentProps;\n    if (inAmpMode) return _constants.AMP_RENDER_TARGET;\n    return /*#__PURE__*/_react.default.createElement(\"div\", {\n      id: \"__next\",\n      dangerouslySetInnerHTML: {\n        __html: html\n      }\n    });\n  }\n\n}\n\nexports.Main = Main;\nMain.contextType = _documentContext.DocumentContext;\n\nclass NextScript extends _react.Component {\n  constructor(...args) {\n    super(...args);\n    this.context = void 0;\n  }\n\n  getDynamicChunks() {\n    const {\n      dynamicImports,\n      assetPrefix,\n      files\n    } = this.context._documentProps;\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n    return dedupe(dynamicImports).map(bundle => {\n      let modernProps = {};\n\n      if (false) {}\n\n      if (!/\\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;\n      return /*#__PURE__*/_react.default.createElement(\"script\", Object.assign({\n        async: true,\n        key: bundle.file,\n        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,\n        nonce: this.props.nonce,\n        crossOrigin: this.props.crossOrigin || undefined\n      }, modernProps));\n    });\n  }\n\n  getScripts() {\n    const {\n      assetPrefix,\n      files,\n      lowPriorityFiles\n    } = this.context._documentProps;\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));\n    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));\n    return [...normalScripts, ...lowPriorityScripts].map(file => {\n      let modernProps = {};\n\n      if (false) {}\n\n      return /*#__PURE__*/_react.default.createElement(\"script\", Object.assign({\n        key: file,\n        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,\n        nonce: this.props.nonce,\n        async: true,\n        crossOrigin: this.props.crossOrigin || undefined\n      }, modernProps));\n    });\n  }\n\n  getPolyfillScripts() {\n    // polyfills.js has to be rendered as nomodule without async\n    // It also has to be the first script to load\n    const {\n      assetPrefix,\n      polyfillFiles\n    } = this.context._documentProps;\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\\.module\\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement(\"script\", {\n      key: polyfill,\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined,\n      noModule: true,\n      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`\n    }));\n  }\n\n  static getInlineScriptSource(documentProps) {\n    const {\n      __NEXT_DATA__\n    } = documentProps;\n\n    try {\n      const data = JSON.stringify(__NEXT_DATA__);\n      return (0, _htmlescape.htmlEscapeJsonString)(data);\n    } catch (err) {\n      if (err.message.indexOf('circular structure')) {\n        throw new Error(`Circular structure in \"getInitialProps\" result of page \"${__NEXT_DATA__.page}\". https://err.sh/vercel/next.js/circular-structure`);\n      }\n\n      throw err;\n    }\n  }\n\n  render() {\n    const {\n      staticMarkup,\n      assetPrefix,\n      inAmpMode,\n      devFiles,\n      __NEXT_DATA__,\n      bodyTags,\n      unstable_runtimeJS\n    } = this.context._documentProps;\n    const disableRuntimeJS = unstable_runtimeJS === false;\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n\n    if (inAmpMode) {\n      if (false) {}\n\n      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];\n      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement(\"script\", {\n        id: \"__NEXT_DATA__\",\n        type: \"application/json\",\n        nonce: this.props.nonce,\n        crossOrigin: this.props.crossOrigin || undefined,\n        dangerouslySetInnerHTML: {\n          __html: NextScript.getInlineScriptSource(this.context._documentProps)\n        },\n        \"data-ampdevmode\": true\n      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement(\"script\", {\n        key: file,\n        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,\n        nonce: this.props.nonce,\n        crossOrigin: this.props.crossOrigin || undefined,\n        \"data-ampdevmode\": true\n      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));\n    }\n\n    const {\n      page,\n      buildId\n    } = __NEXT_DATA__;\n\n    if (true) {\n      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');\n    }\n\n    const pageScript = [/*#__PURE__*/_react.default.createElement(\"script\", Object.assign({\n      async: true,\n      \"data-next-page\": page,\n      key: page,\n      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined\n    },  false ? undefined : {})),  false && /*#__PURE__*/false];\n    const appScript = [/*#__PURE__*/_react.default.createElement(\"script\", Object.assign({\n      async: true,\n      \"data-next-page\": \"/_app\",\n      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,\n      key: \"_app\",\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined\n    },  false ? undefined : {})),  false && /*#__PURE__*/false];\n    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\\.js\\.map/) && /*#__PURE__*/_react.default.createElement(\"script\", {\n      key: file,\n      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined\n    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement(\"script\", {\n      id: \"__NEXT_DATA__\",\n      type: \"application/json\",\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined,\n      dangerouslySetInnerHTML: {\n        __html: NextScript.getInlineScriptSource(this.context._documentProps)\n      }\n    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));\n  }\n\n}\n\nexports.NextScript = NextScript;\nNextScript.contextType = _documentContext.DocumentContext;\nNextScript.propTypes = {\n  nonce: _propTypes.default.string,\n  crossOrigin: _propTypes.default.string\n};\nNextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement(\"script\");if(!(\"noModule\"in t)&&\"onbeforeload\"in t){var n=!1;e.addEventListener(\"beforeload\",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute(\"nomodule\")||!n)return;e.preventDefault()},!0),t.type=\"module\",t.src=\".\",e.head.appendChild(t),t.remove()}}();';\n\nfunction getAmpPath(ampPath, asPath) {\n  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;\n}\n\nfunction getPageFile(page, buildId) {\n  const startingUrl = page === '/' ? '/index' : page;\n  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;\n}\n\n//# sourceURL=webpack:///./node_modules/next/dist/pages/_document.js?");

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape\n// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE\nconst ESCAPE_LOOKUP={'&':'\\\\u0026','>':'\\\\u003e','<':'\\\\u003c','\\u2028':'\\\\u2028','\\u2029':'\\\\u2029'};const ESCAPE_REGEX=/[&><\\u2028\\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}\n//# sourceMappingURL=htmlescape.js.map\n\n//# sourceURL=webpack:///./node_modules/next/dist/server/htmlescape.js?");

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_document */ \"./node_modules/next/dist/pages/_document.js\")\n\n\n//# sourceURL=webpack:///./node_modules/next/document.js?");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyDocument; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/huijungyoon/ReactFolder/NodeBirdJS/prepare/front/pages/_document.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nclass MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {\n  static async getInitialProps(ctx) {\n    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__[\"ServerStyleSheet\"]();\n    const originalRenderPage = ctx.renderPage;\n\n    try {\n      ctx.renderPage = () => originalRenderPage({\n        enhanceApp: App => props => sheet.collectStyles(__jsx(App, _extends({}, props, {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 33\n          }\n        })))\n      });\n\n      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);\n      return _objectSpread(_objectSpread({}, initialProps), {}, {\n        styles: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, initialProps.styles, sheet.getStyleElement())\n      });\n    } finally {\n      sheet.seal();\n    }\n  }\n\n  render() {\n    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__[\"Html\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }\n    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__[\"Head\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }\n    }), __jsx(\"body\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }\n    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__[\"Main\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }\n    }), __jsx(\"script\", {\n      src: \"https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }\n    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__[\"NextScript\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./pages/_document.js?");

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! private-next-pages/_document.js */\"./pages/_document.js\");\n\n\n//# sourceURL=webpack:///multi_private-next-pages/_document.js?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/server\");\n\n//# sourceURL=webpack:///external_%22styled-jsx/server%22?");

/***/ })

/******/ });