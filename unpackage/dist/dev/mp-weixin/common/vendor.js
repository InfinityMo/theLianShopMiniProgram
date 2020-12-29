(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":""}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":""}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":""}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":""}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var rawBindings = vm.__secret_vfa_state__ && vm.__secret_vfa_state__.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }
  
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":""}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!*****************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/pages.json ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _package = __webpack_require__(/*! ../package.json */ 6);function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;
var DIFF_TIME = 60 * 1000 * 60 * 24;

var statConfig = __webpack_require__(/*! uni-stat-config */ 7).default || __webpack_require__(/*! uni-stat-config */ 7);
var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq',
    'mp-kuaishou': 'ks' };

  return platformList["mp-weixin"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var Report_Data_Time = 'Report_Data_Time';
var Report_Status = 'Report_Status';
var isReportData = function isReportData() {
  return new Promise(function (resolve, reject) {
    var start_time = '';
    var end_time = new Date().getTime();
    var diff_time = DIFF_TIME;
    var report_status = 1;
    try {
      start_time = uni.getStorageSync(Report_Data_Time);
      report_status = uni.getStorageSync(Report_Status);
    } catch (e) {
      start_time = '';
      report_status = 1;
    }

    if (report_status === '') {
      requestData(function (_ref)

      {var enable = _ref.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
        if (enable === 1) {
          resolve();
        }
      });
      return;
    }

    if (report_status === 1) {
      resolve();
    }

    if (!start_time) {
      uni.setStorageSync(Report_Data_Time, end_time);
      start_time = end_time;
    }

    if (end_time - start_time > diff_time) {
      requestData(function (_ref2)

      {var enable = _ref2.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
      });
    }

  });
};

var requestData = function requestData(done) {
  var formData = {
    usv: STAT_VERSION,
    conf: JSON.stringify({
      ak: statConfig.appid }) };


  uni.request({
    url: STAT_URL,
    method: 'GET',
    data: formData,
    success: function success(res) {var

      data =
      res.data;
      if (data.ret === 0) {
        typeof done === 'function' && done({
          enable: data.enable });

      }
    },
    fail: function fail(e) {
      var report_status_code = 1;
      try {
        report_status_code = uni.getStorageSync(Report_Status);
      } catch (e) {
        report_status_code = 1;
      }
      if (report_status_code === '') {
        report_status_code = 1;
      }
      typeof done === 'function' && done({
        enable: report_status_code });

    } });

};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 8).default;
var statConfig$1 = __webpack_require__(/*! uni-stat-config */ 7).default || __webpack_require__(/*! uni-stat-config */ 7);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig$1.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "getIsReportData", value: function getIsReportData()

    {
      return isReportData();
    } }, { key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref3$key = _ref3.key,key = _ref3$key === void 0 ? '' : _ref3$key,_ref3$value = _ref3.value,value = _ref3$value === void 0 ? "" : _ref3$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig$1.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      this.getIsReportData().then(function () {
        uni.request({
          url: STAT_URL,
          method: 'POST',
          // header: {
          //   'content-type': 'application/json' // 默认值
          // },
          data: optionsData,
          success: function success() {
            // if (process.env.NODE_ENV === 'development') {
            //   console.log('stat request success');
            // }
          },
          fail: function fail(e) {
            if (++_this5._retry < 3) {
              setTimeout(function () {
                _this5._sendRequest(optionsData);
              }, 1000);
            }
          } });

      });
    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      this.getIsReportData().then(function () {
        var image = new Image();
        var options = getSgin(GetEncodeURIComponentOptions(data)).options;
        image.src = STAT_H5_URL + '?' + options;
      });
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _super.call(this);
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 6 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@dcloudio/uni-stat@next\",\"_id\":\"@dcloudio/uni-stat@2.0.0-28920200907001\",\"_inBundle\":false,\"_integrity\":\"sha512-AFKRFzMJDKa0IWyPtRHxUw79WJxlTFUPZMv4veCKsNubBm7Nxo1JYa4S4UubFs623mFEw9UGpJAU0uWSwuAwNg==\",\"_location\":\"/@dcloudio/uni-stat\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"@dcloudio/uni-stat@next\",\"name\":\"@dcloudio/uni-stat\",\"escapedName\":\"@dcloudio%2funi-stat\",\"scope\":\"@dcloudio\",\"rawSpec\":\"next\",\"saveSpec\":null,\"fetchSpec\":\"next\"},\"_requiredBy\":[\"#USER\",\"/\",\"/@dcloudio/vue-cli-plugin-uni\"],\"_resolved\":\"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-28920200907001.tgz\",\"_shasum\":\"529372676359ab63f23a56df4c35d638c35ccede\",\"_spec\":\"@dcloudio/uni-stat@next\",\"_where\":\"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli\",\"author\":\"\",\"bugs\":{\"url\":\"https://github.com/dcloudio/uni-app/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"\",\"devDependencies\":{\"@babel/core\":\"^7.5.5\",\"@babel/preset-env\":\"^7.5.5\",\"eslint\":\"^6.1.0\",\"rollup\":\"^1.19.3\",\"rollup-plugin-babel\":\"^4.3.3\",\"rollup-plugin-clear\":\"^2.0.7\",\"rollup-plugin-commonjs\":\"^10.0.2\",\"rollup-plugin-copy\":\"^3.1.0\",\"rollup-plugin-eslint\":\"^7.0.0\",\"rollup-plugin-json\":\"^4.0.0\",\"rollup-plugin-node-resolve\":\"^5.2.0\",\"rollup-plugin-replace\":\"^2.2.0\",\"rollup-plugin-uglify\":\"^6.0.2\"},\"files\":[\"dist\",\"package.json\",\"LICENSE\"],\"gitHead\":\"f3c987005a645cea90787e5f1ea2c96a92905bb2\",\"homepage\":\"https://github.com/dcloudio/uni-app#readme\",\"license\":\"Apache-2.0\",\"main\":\"dist/index.js\",\"name\":\"@dcloudio/uni-stat\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/dcloudio/uni-app.git\",\"directory\":\"packages/uni-stat\"},\"scripts\":{\"build\":\"NODE_ENV=production rollup -c rollup.config.js\",\"dev\":\"NODE_ENV=development rollup -w -c rollup.config.js\"},\"version\":\"2.0.0-28920200907001\"}");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/pages.json?{"type":"stat"} ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__AD002C0" };exports.default = _default;

/***/ }),
/* 8 */
/*!**********************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/pages.json?{"type":"style"} ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": { "pages/index/index": { "backgroundColor": "#e5e5e5", "navigationBarTitleText": "首页", "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/car/car": { "navigationBarTitleText": "购物车", "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/user/user": { "navigationBarTitleText": "个人中心", "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/brand/index": { "navigationBarTitleText": "", "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/good/index": { "navigationBarTitleText": "商品详情", "usingComponents": { "echone-sku": "/components/echone-sku/echone-sku" }, "usingAutoImportComponents": { "echone-sku": "/components/echone-sku/echone-sku" } }, "pages/order/index": { "navigationBarTitleText": "确认订单", "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/myOrder/index": { "navigationBarTitleText": "我的订单", "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/integral/index": { "navigationBarTitleText": "积分兑换", "usingComponents": {}, "usingAutoImportComponents": {} } }, "globalStyle": { "navigationBarTextStyle": "white", "navigationBarTitleText": "uni-app", "navigationBarBackgroundColor": "#007AFF", "backgroundColor": "#e5e5e5" } };exports.default = _default;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */
/*!*********************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/store/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  state: {
    spinning: false,
    hasLogin: false,
    userInfo: {} },

  mutations: {
    setSpinning: function setSpinning(state, payload) {
      state.spinning = payload;
    },
    login: function login(state, provider) {
      state.hasLogin = true;
      state.userInfo = provider;
      uni.setStorage({ //缓存用户登陆状态
        key: 'userInfo',
        data: provider });

      console.log(state.userInfo);
    },
    logout: function logout(state) {
      state.hasLogin = false;
      state.userInfo = {};
      uni.removeStorage({
        key: 'userInfo' });

    } },

  actions: {} });var _default =




store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 16 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 17 */
/*!********************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/common/network/request.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 15));
var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ 18));
var _qs = __webpack_require__(/*! qs */ 46);


var _loading = _interopRequireDefault(__webpack_require__(/*! @/common/utils/func/loading/loading.js */ 51));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var serverUrl = 'http://172.165.197.11';
var instance = _axios.default.create({
  baseURL: '/basicinfo',
  timeout: 7000 });

instance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
var codeMessage = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作',
  401: '用户没有权限（令牌、用户名、密码错误）',
  403: '用户得到授权，但是访问是被禁止的',
  404: '请求不存在',
  406: '请求的格式不可得',
  410: '请求的资源被永久删除，且不会再得到的',
  422: '当创建一个对象时，发生一个验证错误',
  500: '服务器错误',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时' };

// 清除请求参数的首尾空格
var trimParams = function trimParams(params) {
  for (var prop in params) {
    // eslint-disable-next-line no-prototype-builtins
    if (params.hasOwnProperty(prop)) {
      if (params[prop] && typeof params[prop] === 'string') {
        params[prop] = params[prop].trim();
      }
    }
  }
};
instance.interceptors.request.use(function (config) {
  _loading.default.show();
  config.data = (0, _qs.stringify)(config.data);
  return config;
},
function (error) {
  _loading.default.hide();
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
  _loading.default.hide();
  return response.data;
  // if (response.data.errorCode === 1) {
  // 	return response.data // 过滤响应对象里多余的字段，只返回需要的data
  // } else {
  // 	uni.showToast({
  // 		title: codeMessage['500']
  // 	})
  // 	return Promise.reject(new Error('服务器发生错误'))
  // }
}, function (error) {
  _loading.default.hide();
  var code = error.response && error.response.status;
  // 如果code不存在且错误信息里包含timeout字段，判断为服务器请求超时，则code设置为504
  if (code === undefined && (error.message.includes('timeout') || error.message.includes('Network Error'))) code = 504;
  uni.showToast({
    title: codeMessage[code],
    icon: 'none' });

  return Promise.reject(error);
});
_axios.default.defaults.adapter = function (config) {
  return new Promise(function (resolve, reject) {
    var settle = __webpack_require__(/*! axios/lib/core/settle */ 33);
    var buildURL = __webpack_require__(/*! axios/lib/helpers/buildURL */ 23);
    uni.request({
      method: config.method.toUpperCase(),
      url: buildURL("".concat(serverUrl).concat(config.baseURL).concat(config.url), config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      success: function success(response) {
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config: config };

        settle(resolve, reject, response);
      },
      fail: function fail(error) {
        uni.showToast({
          title: error });

        _loading.default.hide();
      } });

  });
};var _default =
{
  post: function post(url, params, spinning) {
    trimParams(params);
    if (!spinning) {
      _loading.default.show();
    }
    return instance.post(url, params);
  },
  // get 请求
  get: function get(url, params, spinning) {
    if (!spinning) {
      _loading.default.show();
    }
    return instance.get(url, params);
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 18 */
/*!**********************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ 19);

/***/ }),
/* 19 */
/*!**************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/axios.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 20);
var bind = __webpack_require__(/*! ./helpers/bind */ 21);
var Axios = __webpack_require__(/*! ./core/Axios */ 22);
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ 42);
var defaults = __webpack_require__(/*! ./defaults */ 28);

/**
                                       * Create an instance of Axios
                                       *
                                       * @param {Object} defaultConfig The default config for the instance
                                       * @return {Axios} A new instance of Axios
                                       */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ 43);
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ 44);
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ 27);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ 45);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 20 */
/*!**************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/utils.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ 21);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
                                           * Determine if a value is an Array
                                           *
                                           * @param {Object} val The value to test
                                           * @returns {boolean} True if value is an Array, otherwise false
                                           */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) &&
  typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
function isString(val) {
  return typeof val === 'string';
}

/**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
function isNumber(val) {
  return typeof val === 'number';
}

/**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
   * Determine if a value is a plain Object
   *
   * @param {Object} val The value to test
   * @return {boolean} True if value is a plain Object, otherwise false
   */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
  navigator.product === 'NativeScript' ||
  navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined');

}

/**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   * @return {string} content value without BOM
   */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM };

/***/ }),
/* 21 */
/*!*********************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/helpers/bind.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 22 */
/*!*******************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/core/Axios.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 20);
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ 23);
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 24);
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 25);
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ 42);

/**
                                             * Create a new instance of Axios
                                             *
                                             * @param {Object} instanceConfig The default config for the instance
                                             */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager() };

}

/**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url }));

  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data }));

  };
});

module.exports = Axios;

/***/ }),
/* 23 */
/*!*************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/helpers/buildURL.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 20);

function encode(val) {
  return encodeURIComponent(val).
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 24 */
/*!********************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/core/InterceptorManager.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 20);

function InterceptorManager() {
  this.handlers = [];
}

/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected });

  return this.handlers.length - 1;
};

/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 25 */
/*!*****************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/core/dispatchRequest.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 20);
var transformData = __webpack_require__(/*! ./transformData */ 26);
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ 27);
var defaults = __webpack_require__(/*! ../defaults */ 28);

/**
                                        * Throws a `Cancel` if cancellation has been requested.
                                        */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
  config.data,
  config.headers,
  config.transformRequest);


  // Flatten headers
  config.headers = utils.merge(
  config.headers.common || {},
  config.headers[config.method] || {},
  config.headers);


  utils.forEach(
  ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
  function cleanHeaderConfig(method) {
    delete config.headers[method];
  });


  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
    response.data,
    response.headers,
    config.transformResponse);


    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
        reason.response.data,
        reason.response.headers,
        config.transformResponse);

      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 26 */
/*!***************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/core/transformData.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 20);

/**
                                    * Transform the data for a request or a response
                                    *
                                    * @param {Object|String} data The data to be transformed
                                    * @param {Array} headers The headers for the request or response
                                    * @param {Array|Function} fns A single function or Array of functions
                                    * @returns {*} The resulting transformed data
                                    */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 27 */
/*!************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/cancel/isCancel.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 28 */
/*!*****************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/defaults.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ 20);
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 31);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded' };


function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ 32);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ 32);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
    utils.isArrayBuffer(data) ||
    utils.isBuffer(data) ||
    utils.isStream(data) ||
    utils.isFile(data) ||
    utils.isBlob(data))
    {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  } };


defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*' } };



utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 29)))

/***/ }),
/* 29 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 30);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 30 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 29)))

/***/ }),
/* 31 */
/*!************************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 20);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 32 */
/*!*********************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/adapters/xhr.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 20);
var settle = __webpack_require__(/*! ./../core/settle */ 33);
var cookies = __webpack_require__(/*! ./../helpers/cookies */ 36);
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 23);
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ 37);
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 40);
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 41);
var createError = __webpack_require__(/*! ../core/createError */ 34);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    if (
    (utils.isBlob(requestData) || utils.isFile(requestData)) &&
    requestData.type)
    {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = unescape(encodeURIComponent(config.auth.password)) || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request };


      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
      request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
      cookies.read(config.xsrfCookieName) :
      undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),
/* 33 */
/*!********************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/core/settle.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ 34);

/**
                                             * Resolve or reject a Promise based on response status.
                                             *
                                             * @param {Function} resolve A function that resolves the promise.
                                             * @param {Function} reject A function that rejects the promise.
                                             * @param {object} response The response.
                                             */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
    'Request failed with status code ' + response.status,
    response.config,
    null,
    response.request,
    response));

  }
};

/***/ }),
/* 34 */
/*!*************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/core/createError.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ 35);

/**
                                               * Create an Error with the specified message, config, error code, request and response.
                                               *
                                               * @param {string} message The error message.
                                               * @param {Object} config The config.
                                               * @param {string} [code] The error code (for example, 'ECONNABORTED').
                                               * @param {Object} [request] The request.
                                               * @param {Object} [response] The response.
                                               * @returns {Error} The created error.
                                               */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 35 */
/*!**************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/core/enhanceError.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Update an Error with the specified config, error code, and response.
               *
               * @param {Error} error The error to update.
               * @param {Object} config The config.
               * @param {string} [code] The error code (for example, 'ECONNABORTED').
               * @param {Object} [request] The request.
               * @param {Object} [response] The response.
               * @returns {Error} The error.
               */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code };

  };
  return error;
};

/***/ }),
/* 36 */
/*!************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/helpers/cookies.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 20);

module.exports =
utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    } };

}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {return null;},
    remove: function remove() {} };

}();

/***/ }),
/* 37 */
/*!***************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/core/buildFullPath.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ 38);
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ 39);

/**
                                                      * Creates a new URL by combining the baseURL with the requestedURL,
                                                      * only when the requestedURL is not already an absolute URL.
                                                      * If the requestURL is absolute, this function returns the requestedURL untouched.
                                                      *
                                                      * @param {string} baseURL The base URL
                                                      * @param {string} requestedURL Absolute or relative URL to combine
                                                      * @returns {string} The combined full path
                                                      */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

/***/ }),
/* 38 */
/*!******************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Determines whether the specified URL is absolute
               *
               * @param {string} url The URL to test
               * @returns {boolean} True if the specified URL is absolute, otherwise false
               */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),
/* 39 */
/*!****************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/helpers/combineURLs.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Creates a new URL by combining the specified URLs
               *
               * @param {string} baseURL The base URL
               * @param {string} relativeURL The relative URL
               * @returns {string} The combined URL
               */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ?
  baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') :
  baseURL;
};

/***/ }),
/* 40 */
/*!*****************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 20);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
'age', 'authorization', 'content-length', 'content-type', 'etag',
'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
'last-modified', 'location', 'max-forwards', 'proxy-authorization',
'referer', 'retry-after', 'user-agent'];


/**
                                          * Parse headers into an object
                                          *
                                          * ```
                                          * Date: Wed, 27 Aug 2014 08:58:49 GMT
                                          * Content-Type: application/json
                                          * Connection: keep-alive
                                          * Transfer-Encoding: chunked
                                          * ```
                                          *
                                          * @param {String} headers Headers needing to be parsed
                                          * @returns {Object} Headers parsed into an object
                                          */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {return parsed;}

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

/***/ }),
/* 41 */
/*!********************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 20);

module.exports =
utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
                 * Parse a URL to discover it's components
                 *
                 * @param {String} url The URL to be parsed
                 * @returns {Object}
                 */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ?
      urlParsingNode.pathname :
      '/' + urlParsingNode.pathname };

  }

  originURL = resolveURL(window.location.href);

  /**
                                                * Determine if a URL shares the same origin as the current location
                                                *
                                                * @param {String} requestURL The URL to test
                                                * @returns {boolean} True if URL shares the same origin, otherwise false
                                                */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol &&
    parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 42 */
/*!*************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/core/mergeConfig.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 20);

/**
                                  * Config-specific merge-function which creates a new config-object
                                  * by merging two configuration objects together.
                                  *
                                  * @param {Object} config1
                                  * @param {Object} config2
                                  * @returns {Object} New object resulting from merging config2 to config1
                                  */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
  'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
  'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
  'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
  'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
  'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'];

  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys.
  concat(mergeDeepPropertiesKeys).
  concat(defaultToConfig2Keys).
  concat(directMergeKeys);

  var otherKeys = Object.
  keys(config1).
  concat(Object.keys(config2)).
  filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};

/***/ }),
/* 43 */
/*!**********************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/cancel/Cancel.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * A `Cancel` is an object that is thrown when an operation is canceled.
               *
               * @class
               * @param {string=} message The message.
               */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 44 */
/*!***************************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/cancel/CancelToken.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ 43);

/**
                                   * A `CancelToken` is an object that can be used to request cancellation of an operation.
                                   *
                                   * @class
                                   * @param {Function} executor The executor function.
                                   */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
   * Throws a `Cancel` if cancellation has been requested.
   */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
    * Returns an object that contains a new `CancelToken` and a function that, when called,
    * cancels the `CancelToken`.
    */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel };

};

module.exports = CancelToken;

/***/ }),
/* 45 */
/*!***********************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/node_modules/axios/lib/helpers/spread.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Syntactic sugar for invoking a function and expanding an array for arguments.
               *
               * Common use case would be to use `Function.prototype.apply`.
               *
               *  ```js
               *  function f(x, y, z) {}
               *  var args = [1, 2, 3];
               *  f.apply(null, args);
               *  ```
               *
               * With `spread` this example can be re-written.
               *
               *  ```js
               *  spread(function(x, y, z) {})([1, 2, 3]);
               *  ```
               *
               * @param {Function} callback
               * @returns {Function}
               */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 46 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ 47);
var parse = __webpack_require__(/*! ./parse */ 50);
var formats = __webpack_require__(/*! ./formats */ 49);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 47 */
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 48);
var formats = __webpack_require__(/*! ./formats */ 49);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 48 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),
/* 49 */
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 50 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 48);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 51 */
/*!*******************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/common/utils/func/loading/loading.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  show: function show() {var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中...';
    uni.showLoading({ title: title });
  },
  hide: function hide() {
    uni.hideLoading();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/*!*********************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/static/img/base/banner.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/img/base/banner.png";

/***/ }),
/* 59 */
/*!*********************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/static/img/brands/ysfy.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 60 */
/*!*******************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/static/img/brands/hw.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAABvCAYAAABvhBtxAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAHWxSURBVHgB7b0HlF1pch723XtfDt39OucG0Mh5EAaYAWYnp51ZbiC55JJcJmlNUsmUjnVsyTpHtnwkW5atY1NWOhLFeGiS2sRdbp64kwcYAIOcGp1z9+uX87vXX9V/u4FZrswVsdzhhjenB0D36/tuqL/qq++rqh/40etHrx+9fvT60etHrx+9fvT60etHrx+9fvT60etHrx+9vv3Lwl28PL7wPr88NOR/fNkwl8N/WE3/wuT/AX2P/K3puajVq3DdOoIhG5blwOXbA3YEnhuExUO4aKLRKMKxGgg6AR4ugkYthEYdCMWAaq3MYzURDoXQbLqQOxBwbNgOf5f/aCIEi5/j2J6+D/55NBvmvR7P0/VsODy2w9+p1RpwmzWEw2G+y+H7oOchH/399rL4wl/w9YNpiPyyLM//njz4Cv9tfi6nbN5h88tBnQZWKgK/8Rt/TCPL4qc/8Sy2bO1BMODy3RYW59bw/NfO4saNaRw9vgfPfugYDRkIBv2Pc+UB8FNoeC7/q9HI6nUx1AAs80FoNJs0dkvPoSnGyFOhrer3wwEasSVG66FSLfFzA1wAYX7Pwffb624M8ftw3f1FXiH1NHzuyGSLuHVrFteujtMok4gEO3D12gx+5w+fpzG5WElHcXD/XrS0tKBeq+L6tet49ZtvYGFxHqfP3cDCUhWJBD0oShga7sbuXcNItcVRrzaxlinh1Jl5ZNZKcBtiiPR6AXo5frDjWPR8TXrkOgIhnlE4gnwujwj/4QQ81Ko5JFptHDy4Fdu29CL0Q/Jk1l8/FKFZwq94MfnzrTfP4Pd+73N4+aV3aBxdqJaj8Jox5HgpjWYFQf5uLBJmaKYndS3UJPy64mElZC8jFg8bI7FL+OAzH8AnP/kh7Nkzimq1jjffOI9f/7v/K49JI7QSaLoB9XSenolDg4siEAxwURTQpJFHYnGUCkX+TOJxCZ09Qfzdv/fL+PCzDyMesfH99vqRR9x4eXd8rb+acoNohA3FhP30Yg8+cgQdPR00qF4Ucg7eeP0C1iZz6B/sxL33bkdXVwKxaBTZtQpee+0Crl+eQDwew4mT+7Bn7x4aUpnHLeO+E/vQ29uuWDDIELtpeAA//VPP0MiIS60IA7WtgK9QrPE47+Lm9UUkknHs3NGPA/t3IhoPwa1XGLZlUVf4M2D3zi16rB+21w+IId65EO80RnmgRG6uw3fY6pv6+7vx+JMfwJHjhxG0W5DNNtHWnkD2c6fx0CMH8aEPH0SqI6mhvJBtoKe3F+8MXUMLDegnPj5KI9rBn9V5vDo6OqKIxSShqfFGBjDQ14G/9gsfoweljyMQdBnqPWYxq+kqZubmMXZzgceJ4ei9W/HJn3+aCQ4xIr8c22YyVCWudNDGMB9wPNxlsPq+e/0AGKLnR+T1B2dpNuBteEVL3+JYDNGSxNA229qiSPKBVxhCc/k8GjTUcDCMRCyB1mQ7bt0YI4acomEksGvXVtx3bDuNJYjde5NYXligx+xAIhpkaG+oN5RsWUJ3PBZENJwk1qRhSZJiN9GkNy5VKooT68yQk4kwtm7rxcimGL2gi6jT0MylWacpC3jkuf9wmaB5/YB4RDE6gkA/SzZf8L9nMlqv6WmI9piheh6NotHE5HQRf/KFS/i93/86lpbKxG9NDPYP4pVX38bzz72Mgf4+/IN/+Ak8/MheFAou3n59kiH2mzh+724cYlLR1Zkk7gsww21CiBvPlS8blTqTjybhADPlOr3izfEFHp+0EcKIJBLo6O5Ducqzq3NpSHZO2BAMBGnQlp6yot3vv6T5rl4/AIa4Ttn8l3/m8QG7lutTNkHSNBYmZ3L44p+8i9/6rc9jYWEFKRrV6I4UltNLKJZqkEw7HG7hIVowPZPHm69ew3/4N1/F5Suv4/MjcfyLf/EP8IGT99ArBg0fScNbI6ZcXeVXJo98mXxilJ8bqOGts2NYKdAQw8SdVQ9jk3m0tK2hViI+tKpMY2rYtn0AqXbyi0GXCZNY4Q9X2vwDmKzIy3rvn3zYpUqVHi+qxPTFS3P4HDHh7/zuV5DLldE9kMQv/NIj+MVffgLvnErT671Nz8ZwHWrB2PUKXnrhBfznP/wsKiUH3T2D2L9/E8N7GzlBelZXCPEgSqUGTp++hX/2v/0+JqbnEIimgCgUJ9ZrUZRLLfRyHbg1kcW//tefh6BWh+HacmsoFpbwq3/j4/j5X3oIbZ1BPesfMof4A2KIig//S8jKUgwXizEBoXG99M1z+Hf/9gt44YWLxGQdGB7pw6/+rZ/Cr3xqP/K1VUyMX8Lq4iI8WuzYjav4V1cuI5tLIx6NYM++bvzqr/wMnnl2L9paQ0wq6gzLFqoll0bqaZKSzWZplMyAIxVU8nVUmpKIBFVpiUWFqK4ht7ZIA6SxSRh2JZuv06NKUiU+W/774UOJ3/+G6H3rQ7szYzavRiOGWzfz+P3f/wY++7mXMT2bY9jdzHcJ6RzH1s37SShX0EYPOMvMNrecI7XjorPDw/btm3HgwNO47/gxHDvZy6SHqgrdVaNWo2E3YZNqiUYlSQnjySf24MFH/63ylR6Vlzxx4Moy8K9+47P47Ge/gdZEDJ/4+CM0+qfQlnDUGIWp4WFA6pIos0ZjpIRID/vDBhJ/gEPzevJiKQH9pS9/gaHzPHbs3IoTH9iGi5fHcfXqNXR0tdMAVpEItlN1ITuYC9HDeWhPteDHf+Ik/vqvPEXDsBimY5T1hNS29LiRkGBDktPUiV2vyu+I12M0JiZsUFVpBpghOxHMEBsWiRmrhQx6t1GJIYfYnbJogHV6UMIFMTges0ZlJkiPaVkxoxn+kL1+AAxRjM3Pmq11Q/QF3Y231PDk00ewZ/9uxFs6yOnlcW3sIhOYNQQiSWzfkxTaG4uLReI1KURwEU+2YnB4GIn2GA2xxjAaQDrr4T/8+98VF4unn3gIO3YMkY4R9USM3lJPaFkm+w1YJKvJFd2kfLg0TwK8weTHidGA45T/qHKHaYDUlF1SOrZNfVnEa2bcjN3mnH/IbPGHIjWzaWZbt/ZiaFMAxSqNY2IW6cwiMaKF1rYQujtD5PwqmF9axPJaGjXqgXUaxVq+iRxpG9erEzcyc379Bn73d5+HVy1i7+4jzLKpI4t4ooUUrnKVYkG2Izwis2R6u8WlDLXnMmmeML1vJ7PlVlVb6qSTAlJioxUTjmJNV9gbKYCwoAUXP0yvuzLE9UqW9Xu2Ia4Jgbyu9q5/wzJ/en7YcfVf1gaSU6Jlg5v2NlCe5Ydbv6bG/M0zD+r2w5KfNk1Ji3pC5w7syGORYgmFbBqeo0axOLOK9OISopEAKZMEKRMo/SJcXsMr6ecvrlTw3Is3sUoqx6Wct0JveeH0NYxPzuPA3mEaVASRoI1ivobLV2cxMbPGMG04RTG0GrNhOxDB2+euYym7DJca80qWVM7pSSwsLvADa8Sa9Ix2g9p0lpn4ToxuHUQwxHviWn610Le8rPf+41v1F2v9Vvh/en6EsL4PQv3dG6JlDOS2sOapgdj+N6w7Ob51Y5T/u4a8XQ+nxhuYG7Z+rIDU9fnf0Vo++TDLUo8h/25KJcP6A5NCB3ouqXiBp1UJRlRhRmDXSZX4hHEhV8Ly0jLyhRX0DHRhy+iAZtVBN4TtW7px/Ng2SnIFTNPwXnvzHF4/9Q49V5XnW5KPwH4S2X/zb/wkdu/uowdsYnm1hD/90zfx+S+/RRUlxu855BZtrTMMBEPkFTMoFau6AC9Ts56fXUWUxua5VFt4TNsq8Exz+NVf+1n0DnSjLRgxQMPzbpNQ6/flTrrU8vz7fsf7cMf75N46t5/TX3VjvLvQ7BvFxj8B3wzXV6r3XmbFsrFuts66ubn+yrXs28UznvmL69kbR7TU8iy9oZI8qGHWv6XAQb8pT8DdOJ4eguCtSSP1mI2G4jZ6htpw8Mh2jAz04sShfYjw1yKkUHo7AvjoR48j1dWGSzfmGFazJJ2ziJALtOi5egaHcPTIZjz71AlmwMSGXAghpr0dqRD6egJo8KpCNEZbKnc84/37uwdomGGf9BYpj9cuxbSBBI01q9fYnkqhq6NVaxbXr2c9cqx/Z+M2+pdrIpF7x53He6OT/f0FM+/qXJue+Jg7vJi/ZDWv9G+Ya5koaX2LgTa1jNTzf9HSsivlz0zM1mPVpSqFD8ehITl8gBaTiAY5uhr1Ma/pmkKGmqfSGlAVy/Q/J6yJgCUnIUZEDRhhHoNcYJnZ7djkCsZvzmGgsxP37B1BiMQzAgU0mg6xYpi0i62FCsvEd418gb/R1IXTuWkIw8Pi9bgQmLAE+Gednz+9sIbJhVXKdlKfHdJLCmoFN03TcYx0p0W5RKv0lFJWJlm34EiHCyARd1RZSVCHbjKTlkVkM9lRaGLdAXG82w9M4Yt1J0tgrnwjMnse7gzu3wuP+L5VaIsh6kHuDBne7QPrvbPXFV+DG9dXdYVGU+eKDvC7AbnxnsFGxqtZ+sAkg7RogF6xBo+knLuaR2maui2TjUaxQkolgmqloZwerVSNTgoOxAPZDIs2f98O0AC7kugc6kK4owV2ayvsJP+kIYjX0UKICI01WEZdqhutkGI9yxVChtSPf+5ypQ3HVH4HdMkoNlAN26NXdBmO5Tr5caiRDA8FAyZsWtJewCNbglEDPnY2q01aFwIw7xNn2HDruiA1XljG+29gaO+99/m9hmjuuKkwWn8Mnvmd9Z/+FTfE727WbNyi+atJ/f7Mj9e/FZKsUTwZH6LlmPfXLIV6/D5MRjlXRJWea+36OFbHZoBMCZEKtVgaJopl7RkJRWPK3zW9Bu2igTofbtVbT6RcLXCwaUDl9iSsZAjBzlakdm1Dx4FdsAZSsFIBFMTjiuRmhfknvVbD8HshGiWtwxQvNOv0Yo5eQYVyYZAZsh1wlLoRo3SZfEgFtu1E+XuysFzFsJJBx0Immza3p6HvEw4y7IQUSUjluEYNKj+6aB1jdf91T/V2NFp//VCFZj3IRqayboSehlTrPZkz/J+Z91qu+WmTP6zSIKv0Iik+RJT4zaszmL9wDdlzY2gu5qjJ0mjJvQXJlURoIFECevGiYmwNt6neSoKzu/5hgo8s4xHkPdKWlC8UqFswQ6VtFfkxjY4YOg7tRN/hvYiPjpCJ5rFoJOKlg/RmAYZUr+Ga0m4aUlObTypMekLq3aSky9EmKNtAACmq8CzVqO07RBGXi8NcsGOqfzTBN/dl/X1NkfpMDS3f75oczn4vgaM+2PM27qVnfQs+xrrXM/flWxOUH+jQTEBu7MrzNvCL/F2MS/g1uc/ysCzfSDWZEyBvmdDh8kFb/ApJeKrzh1cmMfvGJRQv3kKkKKVarobncCCkHtKSkn2GTMFmamS0vrBPXmtloBimZj9SG+3qZxqOz9J6QnnadRpGhTisTJK6SKWkTiy3Y989aD+5Dd5oL7MWHosOTN4uBav1uryf2I8aXFBCt5yDbWsQtO/EbN5tisqVcjAYb2jfwRQYkkB9L72grhJm1o7BuDRkqWkUzw4BBeKN/UPezprvNDzX95p3ZoPmPusNhsHXGw/6h8EQN16+QTZ4g8SzCL4JqrBvkI6E36ZtmiwbErb4s0iJN386jZW3LmL5jYuw00WkGCKjxHll8nxViWqqWAhms9WwbfGQ9CoBNYe67xH5cD2D+fRflqdexPZMGUG16unnij4sGbDl0AjrVchRyqU6MkMOBu47gN5Hj8LqTsANG+/taWuorQ/Vds33mpbBeI4nX5bPPdEoBCt6rjEN8W5eUz2bhmw5hnrEhpgzzyigPTEBKSO7M43z7kxA3mtALt5riBa+jSG6viHKAnRup84/2Ibo+qHZjxcmJJhwK5XJAvQVK4lJiEHwBkmk02yYyWFojRnw9RnMvHEe6ctjSJL/i1DuCvF9cYZfCaNV2+fLxAtZJqGRUB3k8QJSiW03UaFhSGl/qGohxsxXHv6aU0MgbCNUYCZNaa3J36vS8OpCJNuuelJp5xR/XJUOvDC1vdY4enZsRurYHkT2DICkHr0jDZafoeixSu/Fc6rZGgC5GDzFlKKGNKwGTFdz0IRgwIRz5ZCg5y43m0hWlo4mKeK1raahs2z7Dr6laXgnvauOr7j499f2Exhdcq67gQzXQ7YeB1IVXub1h/TfJmDffs8GxYPvLo78K9U8tZ6j2D6PJhFX5SvBcnUo4RugyN9cyGHl7E0snr2C8q0FtAvI12pnej6Cp0a9qaE3JCX+8jD8B2X5lI6JbIKnGpp9yg0XvVYWQp1eJxQNkU4pgvkA8oz7wYY4iqZEPUrFNc0Q7GBYPViEB26rB1Epulh69ybWiiX0VMvoPDSqyUxAMnqGaJdhtC7EeVOIdkcTnIYt2LKp3lKMUhURz/Crjg8frDtkcJuhOeQrJxonpP/F07BhBCF9k+mxkV+UhStwQ+CA5RhQKZ7dcW3jofm7mujIzxUzu3q/GrwXzp9jF96GR33/X99VQzRg3POBtTSbexs33FALvHNVms5sGpl3bmLl3A1U51fQ0rDRFokZbtFf9cK/OT4jLTycYEDXl/48x1dWTA6AUMNS+kcK/OphSx2KK14sHlIPWOJDCkuPMb1sk54LdRmxIDWAfHCVpjYspaJJZIrkEulJylemsUp86tDgWg9vId0TVOOoqtejFCi6sroTBxtSo4RmwarSeC9ZP5MrS06EWb5V5O/lqaRUSEOVCAfKUkLmocLsvFIu6SK1mZEH42GllSwmRzYXUpC41A7zvCP8XjIGgY2CcuTLajR93t5Wmsp/AGpcFVp/I2BpknabYcRtTg13QIC/GnZ49xLft3pjaz2REC5M8JBcr2Nuh3Bk5eklZN66jLXT1+ERD/aGE4hIUV69YXp+ZWKCEL46gsPbUCgsxWaWhn3XfIA5B6FehPQWfMbDiPHbET7EJJMLGuLM3BTCNLTElkFY/LcERkc8WKmM/I0plFeK6No8gDgNcfWdC0hacbTTCMtji1ijgQRoGPE9I6h3hOigGn52axqmDAZ1FCaYbNhkq26ZkCNdQj1bRpXHd5flKwcUSGAXyTGWG2p8Mv6kVCuqFwMNMcDzC8h1E1JYYfrXMK2aBhmg6hId6kGgJQpbv+Im9OgKN1mygCTbMVyirY2s3u2Q/J4H9G3/+r6//lKqb9RZ8EYF6YVqNDCPnoP5AWqrBaTPXEH61GUEVstIBWOIUQO2NMGxhDzcyDLl70pkeMYD2rbPtVlmPs06RpckU/FT0BDBkjm7iRC67tmJSrOCzPIUNqcS6LxnK5odcX5WU545apksiXAaCg8cvX8rKnP8dyKIRGsbEoJfF2iIhAwrzOID0SicxABicV6PV9PzUj/vmYUi9YQ2caZLntPN0aMurWB5Yh6FuRXUlvJo0hgdsgASkqO85REJ4nKttuBo4kXBmMziXS7MisqiwkHWlRiv8nwDiRjahnsR6mhDtLcd8f5e2NK4leJ5xYh2abCukO2yIHmDIjAQRVnP/4K1/VXTnv9SDNEAayi2ssjjWBV+gyFp4eVzSL9+EZFMDckwNVmG30qdHiok4SdkQi8NI2BL9Ypkfcby1mXodfxp3YbolMVSyNboWfjwZLBRSEZ49KTQpJeLMay1TU5qDYRbLKJcyRusJ1k9eUWZtNCzqxWhzhTefe51DOweRnL7ZqTPX0U101TjKly5hSmG0MHIAwjt6qIKI9l7SBcW1Tk0KTfWVvLwxuZRvjqJ4swC8pkM8lSBREeJh+OIU0MMkUyXeTbqxPwkw6w5k5XDvs2xCiYURcqxHZUSpRW1emMVufPTyNDzJ6kOuUMpRIa7kOR1hoe6EWqPAS1EuwGTSLn+ffuuZyR/Sa+7MsRvt6o8n7cTckHFfVmXJRfZs+MajkPpCpKhmHJsEoYDkaCOvmr4IVcy8IZ/VnIzlTbhHTWahucbor3BsQnV6DHJMUBf6vxIWlMfDtCjtQwPINXShkI2i/DZG2rJ9XoNZSnzZ1gMtibRNtCP6pVZEuVBdB7dg+X0IparGZBeREsbcSux2MrYNNwXTmFr38MIxaJKckv1kJsjRX5jDnkee21iCoXlZSTp+aL08l3RNh4jAjULLiqX5yVyoyYVen1GC9ZqHU1yDM7UQU5yHRL6NzjQABccvWI0odlwjV63dimH4s1prHWNIbF1AF37tiE8OogAIUkj6Glov01yYmMVv8cu/woZ6XedvpFXUw2RnkOoiSzdxlQOF/7oywjP5ZBo2ibDpQcU7FilYTjM8MLRiKorEpsFG4lUt26EYoYSchz8WTwqJEhdMleR+Wg01WoVXiyEkWMHUMnnMHXhMumWJmJlS49TlASBDxM0xjoxWefgMLFqFdsP7IbX14JT588y+Wmi26F6k60ytK+hUKowuW2g/+AmDP7M08y8A6icoeG9eR2LpJ2ymWUwqqMzLLNt4nqetoJaV5USPVfHMYuPq7MaaGwI8Y5lUJ0uL5+I1mu1DEEvDIBiSIZyreIWxoDnF2DiU+c1ZAV+EPc2kxF079mKrY+dALZ0mX6auOUbPfT37qzoMQ8M31VD/CvGI5o+YvFUVf6vhWnkhf/rD2FfnEMXH5Jm0dJ9JMQv73+ARqcMHG92gG7IZeipScISdAwe36jMWe9uM17S0By2TvCymrc5NSlAaPDYhZJM2nLMMCWCwhJPdalSYghrwfDwMFIMy2liuBl6u5AbxEAghpVAHbH+NnQc3YVoVxuakyuEEkysrs0gzOx6sa2Oow89gKnJBcyeH0cLjbtTDBbkJ52yJgvhesLgMiGyhQMN8s+Q4U6binlpRJaZx6NLy3JMnaXnl7iJh5RFKJMhhPuRxUgjbnIhKG3kmUijrS4No1vLYq1QC58rEhIQN2554n4MnTyKQE9A2rONAdo+wPb5zA250P7uWeL7Nx9ROAh/LqDnGdlBbkpDvgjgwxmi/rfH8cZvfRZD8Q4uatIpxIRBEq1ByxA6QtNAFReYljbhDANmSoLnGEUloIqK8RxK/zIUy4OVsR4xSV3Ea/hFuioruq56jRCBfIGcYYjfX6ax2Jt60baHhPVQH0LU8NJXp3H5qy8hRUNM1RykqSVHe9rRs2cnH3oTxVuz1LrXUM8U4NSlTptUED14rSEEd4AEfAgx0ZaVB/SU/4zwvwJppAaxZJakepLvi9Oeis2qerUoYYjbMNPKhO+r25Z6c3mF6REjTRM/Baa48O+tMglGutyoqPH5KyHEZZiYSJhy3xcKeXr6CDqH+5F6bA+i+wZJP0WN/u5YipclgsgAFrvCZChscmtlAPyvjer2/0pV5v0jtJWodv3SflOwqthNbnSFPys0cPOts2intwm6vuGFwvqrTc1mzEpV/tFZtyL50/eGllEKTPgyXKGubrmh+vA8f1Cmo78m5LR8iQeRQoUsvWXWqaPBcN29axStNMIAs84yM9L5qRnUZ4gjib+iUnHGsJkIRJjM0ADHpzVRsTNF0jx1BFzTZqA1lrUGokq4U4OmcbtBo15IAJYi2bIkHzyW0EmBOjm9kKu8oNMIqdeWnDso1ydZrXpN3gtnQ6Y2HKFKlvZGqZciHsu+XfjqY0lHtWzbT3IcFQRaYzFkeL356XmknysgtbSErkM7EGVio0mblLEVK8pTelIV5OvVGmu+RXnRU7K+NzDyrgxRtFQpvYLv1RSYW6Yo1i6Ukb1wHdmJOQzRS4QlywwaikEqZqS2rylaqL7ZVJvAbzex/JYTCd22X1lgaLqmGiJtwtiwchTWBqdm+b0qouaUKHJXiQGjXV1YKxcQP7gFTnc7ilRZ0gvLWLw+BntiBYPM3tu5OIrMvEPiVQknaiTZA/SAUc/RTNyLmOuKRkiXkHTOFUpo3zyIaH833Iip1OalobCUxtKtKXTHWuh5twBziygurpAoz/N3qZ9Lu6h8Rv121hDwnYg6QkenPeo1rBeGmH+6fuuFA5/RgirPsvgcW0vdBBNKyI4K9ubCqNSIa4ULXc2hMZ9G5/E9SB7cTJ2eHyuZGD+wGjQ1ogahvve1YfTfo9fdGaIvPfmi3kbRg82wXF3KYu7CDYamIAI1hjI+iKaM7nXN70iNYFNLtsyELkvuospYtk/Z+L0pPq2x3lCl77eMbCh1i03bLAJVFywTrpkToxpxkBgdQAszyZhLz8UMOes0mKPUTYiMx1C2hWOu6rQFmxmuLThVTkOIRuI4Ke2v8xsujTHSmoDXGsPk1WuoRJvoPLwV8W3DaMosbvGCOfrHy/y1xTkEhjsQ3DWE1fkpJBgWW4JJ9YaNSt0USYgn826PAJDvWT6mbJgyWXNP/dIyC6b1wG7691lxXVMxp1A769SPcI8OYUaMnjHshRGiquNlGH4vTmGpWldsntg/ooqSG7K16tzBBiX7Hg369jMGvhfTGu+aRzQTtgyd4q2X+VNBqE3TE0zOo69ptOMNJUQuVq/ekDxihYZZWOcG/WPCYETPsTZkLcXWikn9LjfXDLDWQgCpH9Skx3TRWYkwvdYArN42xHhiJSl4EFzE5CjR3krKYxMK/IDqHPm5SgOJMheLJEhcNFKLKB6J+YlW/9g0wtYdW5l4eEjk11BeXBLXYxQeumYxEE+wKMNxopufR+9bpReuUF7soGdskTHF16fQkDBPd990/CJZLWu7rYB469e50ehjrZcA6Z+eZQbQy42RxezR8JpW04RovrdJWGE3pYUhoIOcgraBQUVCpNy1OczyfAd4/BgXiecYRcr+NuH4TlP8XjnFu+MRYZKTdQJbRHgpeK0TW1WYWbr803JlQkJEQ49whZ6W1BsYvm6Ali9EmcoRe8M4G+IlHD9LdtYZD8/oGupd/aZ2nervr9u6lF65qlyE4lHkmE1W6PVq9HoBeuUQKZBolB4unkRLMoHCQBrNAvWMdyfpSl0Ng+tKjWS7NemDj/LBdySpXQcwWt9FhSiLOhdZKV8kzmJixjCIbJGUSkM9Z5iZ+cpr76J9sBdhPvTaSsGMm+OCXGcD1vGGV2/6tJTBv811TIj14hFXw7nlv18jkGv7FfBypk0tzLW13AzGsD1TYBuzQygxkQvwc4PlOqHSOBb4nk0tSdhD7VodtB555OXdPq3bz/h7xDXelSGuB2W9UetZLbFVLZ1HcXYVQT7YSDh0+8EGzHg41zXUjRHsHR8fOuvZiYYuLSS1fV/hUw7rjefye4Zyszd0aNcxP9OuECk9o2cQIrtshVEul6jcRBSPyTxDqEEwQw13INrdAbfaQDlbQ3pqjtm0o3yjwQXS6NRAnb+fn5hA+z3b0aRHDQpdMjmHBvFfmY+zTEOULDtKXTqSakGRakw5l0Pfw8fpdemNZuaVknHppWXlRGTBBnw1WFl5v9DDvqPKXBaqJF7aJutpXaV6QR88q8xoQLSep6FxpNA2qDdDQ7Z4dt6HklBGvK4OhuocaadsZztaP3gYXkcLCN9vG57vfO8sjvi+METN1mVVN5rm4QlmK1O5WKbHWMkq2E9Qp21QBpMSe8FASrRK0arl18brzXQMbSM3VR6QX0RqPsMwiIqj1v+zTJqp3jHgahmYhLSgZqtBLZyVquf5mWl+rxtRZpJSYW1ptmqwpmjguk2FqDo0SntLD5ZWZkn10JNohm4y8pAdVuN26fE84t7F85eomtCj0MNUqS0H+JCTglv5wF1m2pI1l8fnESJVVKXUl56aR6RBj7R1kCGSWvTSGkLVmoEUOjzb1jpGy8+7/PTEVHjr96XkrGEyONzWOvW+eP5IZiXNG2rMJqeRLCgkCb7I4Cp7alctM5XOsou5V99lsmih+6MPkDMyzVu3RWlvQ7Xa+PN78LpL+sYnsUUXlisVuiJbQG5+meErp0OIyGqbCmd9sMYTyl4iWtSgIdesal3ojuOTrzABW6U9U+NnW/YGdhQMJB13kuDURaXQ37dVEpTTiDC7TYY9zK2kFS+M7NxKuY1qjZyn1OtJ6LYMlVETfo+vW6Ey0p0hxElQysClkFg2MR1IdVgEi0Fix/Rbl5CoaSEkAuTqmgEz4zDIpCYgLpnnlKV3SyaTmFtOo5EuIxYnvjw0iuhQLzoXKctZt5AZn9CB7ZYPQRR6+ELz+nQLFUklW3ZNxbcntZT+1AJvvQ3C8jVpWSqWKb1rMCIJoa9cKxdJUAl36aeu8RhBhRLhbBlTNMYUoUNQWiRizkaiaVm3KRvL+t6pgHeZrHhmoAC5OCnTl/sULXqIr9aQy5PMJVaSkK2hhbSITWa5TMyGsD+/Qcb7BqTY1NQQtsYo85XKGsaCooq4db+8PqCZq94U3vmgGFW15LcPGAPT4lnefI9ksuwO5dC+RltSmJ9YQzowjYFtm5kpRwghXS3j8mj0KwVKj5cuKWJ96AMPoru3G016q9ZYErGSh9KNWWSuTzDC8YEy441yodlCSMcCqmlL64KIH55M87JtbeIP0cilWLbDizJ7d7R0DWukUrJTqK6uUSfOIhQOqLeLSVkcM3qPXryqTflNvafi6WU3qxANp8ksX5SrWr2icVK7DKXdsWneK2YoW3CIUBALhhX3VRuGLJei4oZnBkQ5FBMCUglVk57qMByZmvvpl7B5yyDckSTP2VVjCNp+RXjALGpZphH85b/ush7R0kZ3YfhloJG88gTw5UKRFEJIWf86jSnK8Oz6slw0EldpSjbCCfABFPnghQKJtbUgw4eUjEUZLRyDI+XG86E1SKdUeaMcCfN8AKVGEaFkQPuEA8zKHU2+1XcycSD/BykodbBGRSSZSCBITNT0SXDNwnkeTT647FoG87OziqduTNzk78msQ3pDZsBVJiSl5SX+jMZFnCsb9oi64vokvkpBKnCbRWbug60DmywuzEhQMlYaqCgyxJJFfl6tRImRvyuzFKW1oEj86ZBYdmhwAf7OarWIIq9ztbiGteyyJh6JsOwDI/Nxihgd2YqIV1PDD7iu9sxIOJb7FWFm5fD7EXrykD4Syxi2nxhteDUfb7ukc8pkEm499wqGnrwPob5W4lZLHYfQwtLcJZBHjv29eN21IZqSdsuUxDMDrOQLqNIQAzrxiuuTN7jkuT7All4TR6fnNxnqpJYw0ZakzCT9IzVfKZC/1zcSEOkXKfGhrfEBr2VJCVHCipGEln6VOr3FULydYTjOhxthlhhBVI7NMFajgctiKPK4UnGTIIh3fTJdJDZZFX29fXjikce07m8lTTghpDQXTq6ZR3Apg0ilghSza1GKynUZmmQZ9cY2xbquYNu6oZA0c6cRWALKJIryugMCBfj3pmTXst0ZDSeq9Iu0rRpvE+IxRRQQo5iXBTbYg9Fte9HS2WIwqho0PX6pgLHzF7A8voR4IIwUr1eKzSXRkjZb8Z6Ca6Vwwm4asluup+kTlhrQBfUwa5frEFK9QUlz+ew1dDFER5I70WiP6vtD4kHl/svS/h4RiXdliM2mycZ0jzlJWMoNHQlSrVY0nNkklW3ybWuVkn6UNhDRWKUwNEoCOeSENcQ1CPKFozMb35imeNkksU5Xl6aXyEgj/ZBsN3YEzUiQK980Y0k7ajhXxtL4DArFErpobAnLtKYG+ABjVBlKpTUN980yz8mOqmcTrCo9MYItZauzIrNiaAGvSZ7EWOX9oaro4vRI9BReyHQdakT0y9FsxYVNg+UMfNN2WYkCynUKVAn4NUOS0WojEz+b1yPh0WuYqvIS+cblZhnDxw6ibesw7PYE711Q+53LNRvJFmk9aGKkO4XE+RtYvTmFPHFelEeLCBPhGsrH9RMxBEyYD/i9MjKIQP7t2YYs1/PwzM/K2QrWzt3gAuhEMDW8QZP5Fcimzi70l2+Jd4kR/X4yXeSeNgKJrlvnUq1GPBTqDG/VNQQZdlN9KUp8DioFJjNFhm6pzHH8qhpDfPHBcjXSeCoM3TKSZJHSWL0lgo4do4gRyzgdnZTLyhrSJZFMdcQQ662jne9Z5MOZZbbeH21DC5MVoTeaXPHxeByZTB4L7jRaejsRoQcW8lvAvZSgFbhI6jzviMymkxBHmke6vDxiQe3c0y5EGCjh+tKbe0eWKYbdbPiat6fXKPDBZOhcQIJt1UCausikFVW0ZY8pbUiMhHTQajmLnv070Ll7C4r0dldIPo/NzKJQklYCaYgq4tDBnXjw6Hb0MYuP0TLnTp9HcSVHEj6hXrdRN+ek+JLnUOZziIiTUCjpboRoz+cYBbeH6bW7vAgyUlN5Ywatg+0IdMf9saOmR0hWnoO/4oaoz0KKHmTaQcDoxnWC6kydRHaQoSwWZ1YbwODhg2gZ6NbwVWfYXpiYRH4lQ/xUY4j1kCLhrdMcYB5ykw8xK5vkpJJI7diEli2bkebNOHfqOsZnSJQzrOTTObTTqI4e24ptwz1opUGsWRNIi6cIxqADFgQ3yjnR8KW+MSSbOTqmt1oKTwU6SA2kHQygvb3d1PkxBWnUa9p3HA+FFXo0deC6SSFtTTNMpZFWQCvvGcD6YD6RIqXhSSkoCeOa8pp75Gqbrd92XBGM5yBfLiPc1YaOXVuQ5jm9c+YKzlyawtjsClaIcUv03Ol8Gq+eucqP+gg+sG872keHkJudQZGYs15rmgEFtmEfqlxEDbrCqmDIppEfjR0aTV5ZA7+nPOiZGk3ZWSF3ZQphUlitqc3Ksbp+P5LlfC8EvrsltIWVl/2G+bAdrTGU7R6qyAUZMrvasf3e43CSMXQMjVLrzOuN6kgMYXB7DyrLq0iPTWP+xpgmDt1OVJMNWcnVlijK9Azdu3ciPjqMW8t5vHzqCs5dn8HiShGryzkU8nnNjo9dG8Evf/JpHNs1qhs6Lr57E0vlDDpibXp++XyGRLKN9u5OREmrCDYr0sirmjBJ5XNC+39b6TmlnaFBbJkvkvesN3W6RMMzxLpgWw3JWi7TNLMZ5R74NIyn/a1NxWJWwO+dkR5u7a9pqhTocoE1/BZRoaBserfpuXls2n8Yoe4WvPHNc3jtzasYny1hPkMDzFR0jk+5GcCVm6RbqIjsHB5EH9Wbvm2bMMfFWJhYRdRNKiaVhM0jvpa+GjtoqaRpeeuUkK/e2Ma4VOZXucvVeoDc+AJKlybpFTth9bWosSrsCjj4Tvb+vNsemLv3iH5hgoRC2QBb/hTv139wPzp278Hc6jLGpydwY3aKYYbaa3sS2xhmR7YPorszjnyzgLWbs2iVoUfkvDxeeLpSRhu13fhIPxaI716nN3iD3nBpjTxdrolsVjxajMlLBa+/fhYnj+3GAT4YO0LDsZnYMPx3tLTr6i9XqogO96JjuE/xakmqwOthPjxP+cw4DVFvM7PsOM+B9snzNI3vInUIhnV90t3ow672lNRcUxRheT7ZJiqIdP1JM4sdMMRW2NYCg2bDVFoLzVSXwe/0WgEnpsMB0sSHm2JhXaTXxyYxTg52Ou1hdpX6uE6nELKfCRjx7bWxKawVG+hJ8VzbWzUKVYhlw/EU6RhbqR7Ry6WFViiqesCUx3maQHn+WBRLKSjb53XFs0uIDpCcb9AYq1TEIj0txuNLTme7wF0a2XfyusvqGylF97eC5QOThnabMtbo4X3o3LeXN24OL731Lm4sLGGRktdaJsfkoYD9e/fgI08dxwcObMXuB4/hevlFrM7lmMDE4FAFSWeWMUxlIphKYOztC7h4ZRxpGuD8EhOTdFEfYlEqS5BAhVTH4mwGGcqKST7gEvlFAfEewyuChlts6epkWE6ozhskQLOlX9gznJksJFd3tveU9nAF53LBhDxzbabyW/AdlRR6jlK9rlydFMnKA4cvb8oO9WJgiZCtqk44HNfER6eU0ZbK9JY5wpamJ7tNNfTu1bggyjEegryozu/hOaxQCJhbIrXUiNMWYqZdoFLUmTmtbW2qk/tZkW5eJDxiKCh1lAzH9Oayp6B4x4ZfuW2EADMH3NW5PX5LpC8nagsDF5QMIKhRORJpNrJrRHfN0pjOa/R8qXV9AoDyuXfKgJYFD3++1/z/e92VIdZV/YAOJ5IekKXcCiIjnUh1DeIGpa1Pf/0t3Jqvc4WTesnxxlXbkV71cP3mRVjVMEY6urB1OIX2g9twbf5ltIcHkGViMUTQHu4OYzWzhumJFYbiOjIlGxPFLKokk2UznkgkBpvZuddsx9oaNVQqIKmOCBKpFBMhegnpTREejPirXuEiyVeI3cJ+G0GRoT2LcMRGRBrZ+SWdhtM52d+iikx2DfGqg1iojQYpRlPlA3OxxsRhLl1A56Y+aQ5ApVnSRWi7ERqFNGbxgdMQCqsZdIeSuttVhbgzQfxZcWjIbp4LI0T9u6aFC0ErhXhbSWc2ikceGGDG3LyEUiFL4w3yM6ne8DPsRhatySgePnEPOtqC0jJDnBxiMttGJY9qDQ0pLoW4zLSFsJdEq0bDd8q2FuE2bVcpLUlkhCLz/JrGRlDK7oJia6pLVwtllObS6Ezzvg4IW9DQp9zkzbFk1oosDE3UtItI+6d1j0P5jI3pte+DIYrbr4qEFzSqinKJzFhzDCnnr4xhYmYZk0tNjC+s6g6glksPIGGKD+z81Vt46+wVDI88SLyzHddfeQu8m5ianMe9vYcQJq0ycY7JyeQiQXsRyzTmhowuFrZV8JCM7XDMYigSp1b5wJ1gnJJaC+w1T0F4vVpGkDzg7NwMFpZntXcl2c6Hx4eez2Z4vi2keGJIJbqRrS9Ta14k38is3eWD4DVU6aFj9KR5qkRZSpcrbg6BgS4MPrCb50cVo14yXXmiPUgEk1k9fJjvvvgy3h27ha5UFzrICw7s2YkkMaoOA5JJEKamwbeGsgm9NIpHHztGz59H6fMv4+KNRXrcNAl9co8xF5/62Z/GL/70SeJE8oeFJuZuXudnrSJF9apR8QhxuDgTUd37bzm7xIiR47kltQ5Ahta3tkWVe3XLvE9N8qv5kvKxMuOsViuhg3+fK2SQnZgGVzXQS2VI5gwpL2srwa1avhRSuH61lWUS1Lvzhbh7QxTvHPArYmTbr1BYHhypBeKNy2OL1HrLWBRvWCDpKtXNHknXcJIGY+PdG9P4k+dP4Z57D+LgphY89JEP4XP/+rexZ98RtG4f4s2s4PzlWdyayYNOCKt5hhZbthDjCnZNyBP9tUBPvMpMPMewFG1pw+CWrchlblDFKCsVI15xduIGekYGkUr1oKuTHptfkmCI6jE9ncV5UiWDm1M4cu8JnRJbHlzF4pVb/L0FLIn2zOuKdvXj6JEROKlOXL+1irF3L/N5FchB0hvnpFU0gNEtfXj42Hbc+7GncPmt09i2ex95SCYkxF6vv/I20jynqlRGV12ttNm3Z5jH3EKJLkcvF8PgSBi/+ivP4OknT+LGrRXk5J4mPYxs7sT+7b2IEsBa9TzmLl/F6pXziGbITERSKNALFgkYppZukdNysINMwiiTDtuLK122QG37/NUbqK8WMJIaQAc9ZooLo8gFHleZSTJs2aCIi5rQJjM5gdahFILJoPKcQmRJqNeRyvaG5G0qn2C0cRvvo0eUkwhL3wNB8jJlrKD0K/OkF+eW6F2K4H1HvtTUEGMzBNTqlk5KdUhmu24Ck4t5JiJXsG3kGOKdbVhpUuIbauXPHZxjgnJTuuiKFvlIhho3oImMbENruX6Jlt3UKhKhKoSKMcqBpcJ+MWcmf63S2Hbv24GB7bvpMVqYOK3g7XfexcpKFkvkHbNZUWzKJNRL6OxqxX337seR3Zswsn8P4q0tzOqnEO/rQ/fmEeRqFbz4+ddx9sokz30J2UIFlYpNTFvTrsHRLSne0Mfx2EOHsG3vPizMrOL1184QiswzpPNc8lWslRrIMIpk1hbQ2VHF//Q//n0cPtSLyloRly9dwcJsDktLJRqEi03bhnHi/v1oiVnUpWUDSTISV65i+p0LCBJvVikapMtUWrp6sfvwMWxviaPG97YMtGtxrzygJHFn++H9GKXOnZ+YQXZsFmNnbpCPpABAZqGZaSCQjCBfS2OtUSBjwDi9wOy5vJUwI6EV8IIOY1qJTvghs3tEBiQ+sIL2HX1W7yNG9Narofn3zFqWYaMXUuG0sJjG6hrJaH9rrwDViWbTr9Lx2wNchqNx4pGvv3wKzz55nNRKHD/5qz+HzlSfDlVfXOJKpjddyhGblWQ0XNBUqLhmPqK9XuXtSX9GWWcdSvuBy4eTd8vI55ZUv95x+Ajsvhiu3lrEueevY2w8i/kFPmyeo/Qry66i4EJZo3crlMbwtecu4Oc+/ig+/OQRDGweRFtPB883yYy9ii98402cvbyAxTWGPz7AAhdJoxnUBZcpuMhXZvDaW2fwwAcO4fVTN/Hmq2cwN1ugoXqYX20gWyQ+pZqSI79XKTqYmB7DK29dxa69fbhymYndC5cwN5PBzEoTM6tFevRTJLbH8ff+9k+onHfrrWsYf+UdhMpBLPHyO7f1YXQPDXVoAMEWJm5lDze5cJauXESBSV3JLqO1K4Uto5swPDSC1JZhdN1bQvfwebz7xW8QftSQjKawQkzM3AiFaALpaBWL8+R5TxMqUXeXbkwJwx2dSXR1t1HlaeHzjKmeLjWQdeUQXFWQ3jdD9K1RgW5AKjpERSBwqwrhXGIotWSyf0hxRbXW1L2NTfW7NNVHdZrX+OwaXnv7Cn78sZ3o2rGDISKIC1fnMTmd5gOkB6BsWCDOcQW8C9iWsR06hLOhANkl3+fWXKVSxE7r5NBWymto0qtuv+cgQr3teOGdczh9jiTxeBlzC1V6HBodQ1aRRLdswFgl1vOCrVw47bjGcPzVF85g03AHBh7l70ejmGVW/vlvvI4LU1VcmuECWSsxO5c99zytsNbyK3qsAJOfZHsHJpcbeO7NS/S+ZSwTIy8sVon96npvpFZCe0ts3UmNC68NtUoAFy5NY2yiiJXFJqaZfM1l+XBDZcKAWd32QqrVlsm9js/MYHvvTuy+/yBS24aYlDh4+9YMLpH6WSWWXePiLS0T45ZIXdkFYk8uFucMOns78PADB/HkvduQPLIL+2hCr3/mT9FCzjfG0N+3extGd/Sh3hbQyhuLzIL0GSk7JYPHmAAuzU1h4uZN3R6uu3+YRt6hY56bKt+8nzziujfmHY1z9Yg+XCIYLlXqukO7lCOJVuE2TUWxznLRBiFDPnpMXhZWKvQKF/HUI7vRGktoidNl3tipuSxWGF6L1IClX9fMwaHNNy2dGmvqIJta+RnwAloPKMR4ucmQxZs/uHM7ooPdeJ7HfuHUGKkk4r4VF8srJdJIGR3AJBREkCpM3ZWtuz3dEqPKzPDmzApuTi1pL0uN5PcZEr2XxlZwfdnC+FKeYbNOKFBRdYKiNL8q6OwO4MSJfbjn0CGcOnUZNyYzmF1okHKqE0dy2dCDCNlvkeLyqkxCrCzuO7QXJ47twvxUGrPTy4wiFpYyDgoylcIy+/OFpcnJ0vwMJclee6LovX8XF+1OTK2s4dzFMVxlgje2mCF0sLBKHFihNwzK/bCreu/KUnhxeZERaI2JSRUfuX8vOk4eRH9mgSldC3q2jiLU2kNoRHWK7EOxXKTik+VnMg0j0d8ZSyIZC6J9YAQtpN8yDPNj18bQS1age6hbt1Lw/P6Y98UQVSoiei3Ts0gjjoyVyy3lKLPlaYBBJYbr641AolLAJIpNRRQBDetFPuxzlycItEsY7Y0xmy3gBr3SAhOdbIEqiw7jFrfvbkx3krJ5nY0oTe1CHolHpMGKfhziYuga6kdH9xBu8OE+99oFXJuuYXKWK5pZT5aKjO3UMLK1C0cO3YMCE4033rigDfvlYlX7oYtc/Wv8e55PMC+J1zUmXgsVzK/V6emrhuT1ZOcBF4P93di1Yxd27e7GfcdGMUiP+KXPvogSPdrKCvnAnMARKU0lCxmoo7+/herIEPp6Qjh5dCd2benAi89fQnpFoIKne7xIEhXiNcqsm6HeXnPTGEzah3rR1psiBhzC1dl5Yt1rjB7TmF6sYLEgEMbVtohmOa8Fu1KsgQBpGOL2Cu/PKS5I2XLm5L370NPDkM2kyHND6uGv35ogVMiTnRCIUtJxedLvYkWpcDFB7OkIYc/OLuzbPkKVqh+N5SXMT88pTu8f6cH76hE1eWJYyq6lSZVQVYl6NELSHPwSWaws5LBlbzRZaYmXxCPHVBRrwSe9xOTsMk6dn8RI9y5MTq7yhqzoTWWirGPZRC8NaEGrKcC1xKh1k23CAVEQ+PDq0vfBzFUwjLM5xHAbwDdpYBPT1LYXPHqKOkM9HxLzy21bOvHRjxzHoycexJXzq5gk7iu5GfXk0nMj/dGhkIEU2RwNmLp4OlfiA3LN50qdJI1wuC+JJ07uwY89fT9GR1P8HYbVK8SQ06RPCqRIaLRk+LTEzaYH3LIphQ8+cgiPHt+Bof4EBnpalc3JpLMokKDP0MOUZJaPjKrjNbcw+dg+unWj025k83aEE0mcpxb9Go3wzIUpRg7yt2tUoxg9svlVtCWa2E4uV9jueS5uwaRVKZ4lzV9nInKZEGBuIY+utlbEmFlPTq7h5bPX6FkXMDtfRiYvhRZV1dPLtYY6khBl10S0ia7XXEaue/H0Y8cxtHkL2YAxLM/Po6evg2zI+2iIotVaJI5L+RxkwyRGRmR58/NSsCCZrGS2Mh5Ye0OkAths3NgkOaptzMQWdSYtBUp6r79zGR99ZBemSI2kiXNk021qKMRA9DwMfzr91I6QqqBjDJNALsmsQcpkXpkYRQpNg2bDHR4vlgzh6nlSFteX6WFJjC/Q22RrWhHe29+Oxx6+Bx999hC8fBrl5Rn0M3u8ml1Ury6FGK30RAPMoKXXaS29itX0shZH0E79hWXrGJO9u0fw7NN7cf/hTqWxVskU3Lh2i5cYJAGflyFo1LYTOl45Hivj5PH9+MRPHMHO/hZVLMSYs4QLi4tUNGokwpuSYBDrhqW+k9dNznDLjhHTfcvsty3RiltUoF4/NU46Js1QC0zMB3jPgxQLSuRAq7j/QDee/eAxkLPHC1+7hqvEtPPE7MKzBgLCfZJuml9DaEcrFlZX8eXn3sa5c/OYJ+xYZmK4XJSxKmUtypWZ4cEm4UokpAvyMnHoQu4tBMk+/NSHThIn9mJu+iZW6Rn7trTibl53WRhrCl4rFcFLQa3YkNo+SQKkYkWn5wvL63hasyK4TDdnlDZyz9dhpao6nMD1aws4dyGPC1fmIBGyVG0YbZTeRMrvO1uTSoYXeMNtYrlASDrVKlrbVxMZzajdWlVcZILz1pmLNKAa5uZLWKFV12T3USZOB3fuxclDx1FmFvzqq2/j4rVZpMGFVCQZXMogwbB93+Et2L9jkFRFCcuUvAoZYsIqkxrp1uMxAoGmtgns2L6FXq5fF5TcCpHYpsgE5JmJV6q2XqOpdqlgsK8N+/cM0RO2KbgWPlRw8vzyCr32glJBTdNdotp9kHJkS3sE/QMtyjRIhTYJCHxNkqaLSxifKmB6oYhM0ZR4hcNreOzBnfjH/90vUMMP4o3XZxhCCwhnFmFlCtSNSzILDVEaeW9fUkvb3jh9HaffGWfyBuJZl8kOoxgNUKbuBihFRqVtixZdbSR0uFUw0YNr4/N49e3LuPee7djWH9GJb3O3ptC3eRfu5nVXhiiNOpL91Sp0/MGQ3hDpIZZxFyaZ0MnXGsOlGjislc0No8+6/rg52emOIHuRGOyrz53HxPgqV2ZF97WTMG7Rc7SnItjEMLK0Rua/WDL71fkEqpS3e34FcpPGVqMMt0zMMz1fZNaapVE4auw2sZ80+ldJm5w/nca5Rg6XrqyQhvEwM89jEZ8F6kUc2NeLZx8/hJ1bBpEnKC+SZyyXJPQHtNFKi1CpK0eo+Q7ygcq52TJbm95NekcyNMIacZfMYHQl8OoYkwo6Ui1cTBF6Un8Kl2XaSdOZMtISDqUWQ/RmWVRUSdpTQQwOd6K9JaAjjqenZjE5lcX18TTmlqvkJRuKJwWjBYJ17N0xgP/hH34K7Ukuwrfn8cZbl7FIfrRAtqKu7a5UT1LA7h09GNnUoUOrxifTXADAPPH4ypq0dcSY+UcgU0t62uPopawo3u7K4hrCyRQdAbErfx7klw7Q10Y25ggCad5PHnG980tejm1GrDWanhYQyAB2v1JKsaBMQujq6yaYJnlMw21apt4tKKuOBl0s2njhmxc0JK1yBZelnoAPhNIy+rvaMTrcixq9QgvRdrokG0AG9fSNpmBuxFq2iCsXZ2lg85ghTVOsBZmBlnWMh8ysDoaDzICvULG5wAccRyQWpsecR4nnViLO3bunB3/7V34MJ6lMxKjaZek2KgxxpZIQt4QYVsFsaMQw15ZMkCnQSkDFjDUmB9l8gV6lrFlqQSwLppda6u072+JIxiOa6Vv+ZAzhRhbTayql1ejtK7W6qf1maOyKp3B4/27iVmbe1ybx+ovv4iozfybvmFiqYkW8LkxLre1vIff2mQlkF+dwmp6uWglhdrVMOFHV0X2OW0B73MFPfORBek/B8k0mKEuawEkEsSmPSrFkjYsxQrnl4QcP47/55ONYmZ7HP/mNz+CNN9/VcS2dfS3Yvn2QmHiQHiit1d9SzubdZYHO3WFEx3x6nPJdNMTQRk6rzotpNoVKkfYBR2mXkCQZPOEDe7YTKM9jYo7JQbWuFSESI0LkFMskY29VstpiINm49iqT3+vr6cQ95Lj6iNkuXbiIOCmNjM7cCZptIYg9W2TsmhfG2dMT+Mx/foGSYBDTqyVkK0lKfFVtAKrImDmG8mDYDDtfW5pDs5SFFLPIPnq/+Mn78N/+7Z/DJno5hxSL7MfXbIqHIh5l1ruWy2sBim7sSMqoh5q1dB06pgQamRyz/bEpNaySvxCF/mgSWoT5GQO9PehmRq01fjDbtmWZjV0mpiwy6y9KZbvM4aFaEXIaGOppwcFtW+AVy/iD3/sy9XIbizkL0/kGVor0uo6r02+kMr5J+urWZA7/+J/+JjraW2mYJOjXKlS7Zk3nn93Avq2d+Gs/+yieevioZvtx6vqtra3IFaa4UHmNopp4CprIZJSwSswcTwaw9cQQPnP01/H//tFzVIimcPjgPjxw727IpOQ8WY0AVbLNO0Y3ZmS+L4aoN5UrXBrYI6QJ8lJ8wJBalwfoBmDmuZphmg3ipC3D/WhtCWEtv8KVWuTDCGmYc7Ry2VYMJAErqGyNtD7mMdwzikN7txPbl5m0mLJ1rRUMmB2spO0yHApqkM+mM8Sat+gtIsjKXBsZPxI04wukgJVIj1iL1AbKzAIpoQ314MDObXjmiaex72iMoStJ3bhI2kQUZ3re3CqmSVNUSJI3g542QCkXyqwsGQ4xmXF0MplgwSLVn8XlPD/T0/34PI0Idd1MMiF7RPe0MwtOmmpt9dC2tgJMziyo9gzdSQvafxxluO1OhPiwpROS3m8lT29Icr8ZxxoXOBNs1OySjlYJELPKVr0iH7bQ446NLSBBjTi7ssww2mSSFMLxowfwMx97CI/cP4qIbcq7eInYsXUQn/mT04RW0lQWUoO26BkFYnz9+bMI02B//Vc+ieF+Cz/x4ft5cvch7Mhc8ACqWSpAkzO6TV2CEev2EJ33wRB1M0R6Np03QK9X4cMolevaYKTqnz/TxpIeEHq3tpYg5SZ6RYrzq1Lq1HS00Ulq+ShUa4uliupS5098KOFxK6kW2Vl+8uaEJi3SUiBVxzJSRHCi1PDVi3V6tiY6hlqweUsvJk7fRNGil463kxusKGGt5f30Its39+HY4U04cXgEuze1E1MliYla8O65cZx99yyVkDk89dgHcJQc4zITiFyd4TgsW7rVuOobpmWUobwlEaMxR7Sl09MqpCaJcuJJYi6ZjNyQa1I8XCWlFEQvFZ6keG7hUF3TQi/yYi7LRIoQQnYmJZdAjF0mOZ7Aji196O0O0UiqePyDH8BClvr4RJ6LgQvPltFzUhcpndOuKi/SN1TKrfGe1dERc7HzYC+27tyE++/bjYN7tnJBd6CdNIAsYnk2Lknoxx45iBdfvY7nXnqXOK+GQKyXiCdC4yI7UYvj6y9dRi79W/hn//PPob87ysSkrgZTz1KnH59GtVTDJi7kUGtIMfL7Zoi6+aFwTnWzo1OVF1OtNbT7TMfP+fNjxNqklJSOE0eP9uLSjRZcnyHgLUhDeEP3pKsRVFtRAcFlbUoX6W54sA17dnWiq72BS5kVBf3KHUr9G72b1msyW3c8SURsEsvD+LW/8XEMv3oVv/3553jMhoZT2RdQZ/Pwnx2RFtyzeSeOjm6mUVPyu5HGxYvncHM8j8s3xsm9TRI7diOZ6iWPWcZalaG22dAdp3SwJpMQ2Y5isK+XakMC/qBcJaGzlPFKoj/X6J9JNYmXEPkrTgNobQuTbDfVpIqlGY6z2YruA1gmPq6X/R4Tfr8rlcLQYL9q57G4h0efOgovuhX/7P/4A4LPEO9NwE/YGjqbsZ/w5ZknH0Nr3CJcqGLbSAyDvbyXhEy1BmmdMM8hJDhR28C0OFYm9vZ3J/GpTz2r5Wkvvn6Nyc2q2ctPxsO4CdJCRXyd2NQKFPAP/u4vYPdwCo18BquyX3auhp3bdyHS04am0zAjZ94vQ5QLyhdqqFU9eocAvWGJK5qSnGxboUSEPJCQTsuSkW3hQAN9rQ52EPCe4SrK5Cta9KuTIvgex20jbRCSxc5nmMfOoSGM9pO1J6VSsvIoWPQehABNhn2hgbRDSrrrA64+tI5UHIf3jeimOS+8/DYmZmVccFxqqY1v5gOcnFviSj+Fubl53eoiS0C/ulzCrUye0hU50EwDRX7VSAIWiYEKsi+0G9BiC5d/BgMNVUnaOuIIRqVMKkBv4kuHuSyvm/RVQ95HQyD3GCDW7Iy3oY0h0vbbDHTnBNpEjh60Ug4YD0WjLQs5L5Nu+b6xpTXMkpDe3BfXED3c7qJDCnsrpLB4TEf3exFEx88I1bF5UwIPHh7kreLS5gLKkiS/MbPExOw8oU8OjzxwAI+dPEo87o8/tsyWbQe50P/Wp55Cqi3E+3KddFKJa4X3mPxnnbCmSgfy3CsT2LXnEjrIgbbr7g8NRJMOYomoao8NXkzz/Sx6kOSkWDZeUBJo9YjC/wFaBGAEc38jRymqtOoE4i72jA5QRZnAzclZXgcJU9moWzvHaDBeRFdlIhLAgV3k6Yb7eLyahiGpNJYL12y8bplRdI5U90D7S4THFOphM7m6HSNDuHnzOkNNXB9Wk8lNgMaRKTZx7golO2rGAd2sh967amGGIbGcySFB7Dk02KNZ8eT0DOkewW00uIaZ9+25/IZVRqozqvv9SQQuMPyvrKYZmtd03EjdkyLesLbHypQeoUKSxBnro0MqUv9nJ3SwUp5UVa2e5L1ieOOCshgyF5j4PPfqO7yfS3jyxHbcT5iQJKbtSIUxubTKIwY35gEJrltltv7GKRLNtRnEufBXqTXPkiS/SVnz2o1LPP85yLihI4cOMtmzceXSGJmJDDPgXuzY0Yc9xIqf+NhJxEJxPPf8JH+3Rlwc5IKS6RqmMPhL33gTjxzfjI6tHdrlVyFhX64WEG1GtQuy/n5KfGIQtVpZiWXZ7kxaSZuy4aIrp1VXqUw2zg4KQau8WUPJ2REa4taRPpw7v4gsqYOyPJiweJCiqUyhNxwabMfOXYPo62tlErCk3WZOU4obgjp5S8Ygu1JEwHgbiQe1TN7VTX/4bwL9Q4f34MvEOCXeLCtkmb5rybStiFYCLS1L+Xtdm4jqlSYKpDm8eh57iB337B9EC3k8qdDJZ3hNtRjsGhdShHRIOU0+MKiNX1FB/DI2mOdTLOawwvPMr8lIlaAmKs1mQQ1oeHM3E4iIcqhl8kFZ0kx9XTF09SaYtEkVkIgBMd0VywmRH+TiPnN+GvMTV1HLTuG+owfRPRRFZz8X7eUyCeewMVx/alq60MBzr1/FjauT6KEaI0NxpfppjZyp0DOMVchzsaTTZcxkivja1y8yy57j8Xrw6MP7Mbp9M7Zu2oITx5qYHCdJnp4i5Ipq4uWQDanRSsZujmGJxu2RhxROVnrCpYAiKtPKdCjW3b3uehqYENWunAZvcoOerVGvGuwoortnJpM3+KASfGhOyMydaWtPYNe2QYz03MLZKzP0aAltu9Q+YZehwV3DPlI2W7dImRFMt5xutEd8U5d6RJtavqOlWEEmKRGSjUHZu05GG3g1HcN27Oh2HD2yHS+/dRNBt0XpI8uu6kKQUC1jSGwdCULKiYR6KFjkAunCM8/ehwMHhxTUy6Kq5kuklvh5rlQpryLslXDs4H70drXQu5sekHhUSOCgNtqvLa9ywZEYDgpFk8PmzV04cs8O0ipxJfpX6TlXqV33dg6gf6iNykkM8xep1ct0CVm8gao2StVp/LlsCePjq+p1u7qC2Lm7Hy+dko2FlBlVKlWaw0T6zJNUnlhpkMzPa4JYIdasETJIl98WLuqtm4Y1Or32ymVcvZoliW0zMozTIAs4+UAJo1u7aGg5sgAeWQijM8eCMRG2iDPzmoyUhJOVTkFChDgjhsxilPmWnnf3U0nuEiOKo5K1ICDY1cZ0ecASIl1/Yr4WrjJkhxnKYomI1DsgRqPcvKkbI4MpnLk8RmPrRI4rOCJZZSGDlkgVx+8ZxuBAK4/V0OJaKSXTKVj0iCGGT5HbhBaKRsSIxCBcJcA9kbII0Pdu7cY/+u9/Cel/9H/i1oU5PugQE3MakxRiSOkWgagtOFNG/IZCOHliK37yxx/EsSObaSQxEtl17GTI2jyQJNc3r9tHuDTCPXu34hc/8SF+v0PbR+XyozzuoQN78aEPFpCpvEXPQxkyUMK2rUP48Q+fxJGDo/SMUaVh1pYzxHkVrXiORDw8+8xR3Jj+HLLU2UKRuAa4ZjOk+K2jtZ1hc6/O07G4yD7yoYfw0qs3qH/Pq5okKWBFuFreE9kqq8qFlc2ktaW0yqQqQguO2xXcd89BnDy6h+dbxs1bs7g1laO3DDL8JnHueo6f/xJpNRsJPp+KTJYgeS8UkVAz0kobY0jrTCTJFMimlQFtv6jLHi8wRLpnvc+GqCMRyakJWBVcKB1kul+wbDUmLZa6W5StzffSBhmPRf2ppy5XYA+O3LcdX3v9Hczn0jSqGOoU4eNeAR968jAePLoVne1R7YaIxZkYBGTLW4a2Wl5HhNhB0X+zCEcr2Emj3tzbzYyOUtXchGq+Q7tICI9G8bv/5h/ipa8/T7L7OsZuLTNLJTfnSFO9R0oljt2kNnZs34GHH9gNMjKaEUsqHGK4f/LRg9g03IO3T50jHhKJrBfHjh9GZ6fM1fGUliprca2DrSSMP/XXP4iTjx7TCvVINMbj9qOrNYCIjN0TeoQrc/PgCK/FwtIcQ2NXN/7aLzyO/k2t+OqLp3H+4hQNqab6dG9HAieP7MOv/fxH1PM2CH9GmAn/83/yy/ijT7+Ir3ztDGZm6cHcpvZLy3YbMk0iSA07SiwrmvLwsIOnH7mPBnwMe3eN4Or1GcwV5jGep5rjdWjFT9yJo8jzKtKgm9qiUNcSPmnmEp6ScpbCg4efeBjbeJ+jXEDzxKTptRzaB/zZlK6ZSva+GaK83Ial3gow1S/6ZZmxHDpukjgsrF6QRCgTkJAQ1nxPO0nXQ/uHtb/jd//4Rbp7Khr0pjuoKf/Kz32YSUqHNjLJMcQDOvR6+cIidehlYr4EQycTH6+I/dtGcOzAALoSJKDHZnDt9BWszM+iMywbJtLIGNJ2/NyjWH7yAWbBNsOMqCUCJapoTQXQ2RFTGkiyUOl70a14GPN00DlPdOfOXuzb96TiN/F+suOAlGpI3V+aC6dYKOriaq21ob2rC/fs7YC1t1e9lagzovFKedrKyjw9OzXkjg6tWppbmYbVIZPJynjywSO4/8RRLK2QFaiIYlRWPrCnpQ0JSeKIvQMRS7PV7Zui+JufegQPPXAMr71xHafPnMPU1AIVkorWhkYJUcQTnzx+L+47uRmjzKZbY5b2Nid4rfsf2InPn/pDXgEJT4Z0m55TJMZCVnf907mRNaus9FBQBIDiGo7u7GAUeJYyayeqhTTDM7PmRAvpuIRCHdfsef7+GaLZcyeo8pocqkGDLFcbZncpxzwwIX9LhQUMdu4idRNAUsrQZSQdb8zeLf34B3/zJ3B03w56nTexbXgAP/7MB7GFN88Jq9is/N9gXwoffPogbk7fwvPMJvOFNa5MBw/efz8+9UsfxF7ZoZMhNuYkaRDtxJA13PzmRXTOF9G9fRR2R5JcZIhGp/v1cImQ05NpXOvdaMIC0cNWmdAECM4lXNeapgI9HDBj8uRcpCKmrttjMGMmH9nd26L3QdpaXTNMQb1ZJl8kHRLn70Y0W60TdnR3D5usWycs1OmtNtGQiRWHBsHEWbZlxnBXVGm8oJ3UrXwt//wckvNVMw9Ja4TbW6I4dm8UR4518lj3Met3la2wNHoEmXRVVQeXGUFKLNTNtnQDvAG/+DPPoK2zHX/0x9/A1QvTJKyXaKRhXWRNqRbiB7shiUMlRJj4Pf7gAfzTf/grVGFIrdE4p+cJc0iyd3T1IZxo5efSIYgCdJc9pXdZBib/E10lpGZZ51MuFMr0EmXNHAUfSpKSZea2qb+LpCpxDMH61Ngt4sUY+jZvUW33J585go89vZvKCWkbrjLHk4b4Iq6ev0DgHMbmXTuxeaQfv/53P4kP/+QzmJlZxOHdW5EiJdJGbBOVvgzyeIWpDFAMYFP7Vu2qGzt7FfOLy9j/oeP0em2Uv5aJkRYYNiO459B2emHyhvm0fl6NOm9n1xAuXprEhavXueKj2LN7O7PbdvXM8XDUn3sInHt3AqtrUuIW0z4cSTJcu2LGeTChki3eKtUFnX0YgJllJzRbd28HeqlwhGOO7nLa6YRx88YaTp+dwNLqGvYfHMEuJiRhGpqntFAJN8dmsbyap3du0d0ZZNsMmRQR7wyhb6ATPal2nf7VKsPyDVTXLYclYshU2Ea2Rly6RgdRQXKgjb/TgU88fh+ePXYQb3/zBi7eXKVUN4+iFmvQidAigi0BbB7uwvG9o/jAPaPUyJNa3FFYW8Pq4pLWfLaRdJdSPN11y2u+z4S2ZEuyixQxm2xcPUDX3ZJoIrd6ixijhSoEaQ2uzv07uvHEg/eiM9lKRj6NifM3qYWuYNdBft1/nMZE6saVCQaezinMjU0jfW0cuQu3dK86Zw3YRuzVzWw7QCJ1y2g7umiwUdndU8Isdc/M1Tn+3hw9Ls8r3EDbpkEMbEmhHqW+yzBy+dYafvv3voEXnzuP/Qf2kQ7ZhIFe3lwqBIlEHu3tWxgyw/js576Jr3z1bbS0p/Cxj9fx8z/7sBaJysSGMDm7//SbX8KnP/cmFlYa2qch7auS+Cg1Je6MFJOjY/pcrUKXTZ09VZYqTIgO46c+8SgOHR2gYQRw+vQc/p/f+H2M3Vgi3nW0U+6Jp+/HR378KNpJ+H/5C+/gt377s1pBI1KhRS8snkv0/QgX4Ief/gA+8ZHHqaK0wJE9XKT6nbiuTiJ7hdlzW8FCZmGZWHKG6hChyEgXhu/ZhY57dpK5CCP86B7sv5f8bE2KhmXcgxkiJastGYujLZFAWzyse7dMT0xiaWleQ7e0YsRonNpcL62lOg24ibt53R1GZHKSam9DKVMgWK5j985BPPvUcdAZYnqtiBBj1nBvL5595Bjx4AhFkAZKXHn93YNwmVnefO0s6ktFtFKisoIymJJ6LjPK2uwySjOraJVaQq72DD3QONPt7t2b0N1jhg+pHMbPmJ8aR2UpzffLuBBSDm3UjrtbkSD9g1SU6koW4zcz+PSnv4EvfOktLM3X0DtQw6Ury7yPCWbI7QzTSVIqUZy7cB1nzixjbLyBLjq48YkapqZL6OuOa5UOnxduTSzh3LlJZqhtfCjkTx2z06g0O8mfNUIRi19hJ6gJhOzRLPNuIhHq8DQ+h5TIIr33Cy+O4dOfOYVXvnkLfT39OgXt2rUlJhCvMtQ38Ogjh5iIESMmOrm44toeIQ3349O8XhlHRyppe18PMscOgRQzbp25grCOGyHmuyU9Nll0isJDqTRKjxWSavj8NCbIBWbnVjGwdzu6aZhd0osu5AEXjO3v+tBkKA9YMqecdNTSMu/ZHCOGGVjQzvvVxhDvhIL+uNL37Ibx/hiizJGRcW9S9ZJnJjbY3YLHHjyEvk09mM9kiTFCGOjoJpWyidlZjatzQSu4B0dH0UL8NPb6KUy/+A4KUXJyDIWSRDh8IB18WDEK6olwig8yigyzufQrlxDJlnVfYpnoKsOGIrxh6ekpNEjohiUkSRWPrOZNm1Bhlv07v/883r42BZvUwzun3iV3RkDvRBmuV/CFz72Gi5va8ORT+zSsfPHTX8X1sUVcu17ieXBxVWI4e2aO4fVlPPjAKB46sUtJ9A88fg+zzBZ6wxZ6Xpt4MI9LF8YxNb6o3F7/YAL3HT6s3rtabpod5SkLthOfHqD8aAXq+PJXzuIP/uBtnD23RDjQi4/91BPUqMt4/muvkDecw+c/9zJ5SQcPnLwfP/+LP4ZMNkrMHMW7F25ibiZN2NLUUc0tpFtiXOxWporM+VsI8p6BECGSryNZli03SBEFQzqdVutT+PO1myvkJ8m1rlKMTEWI5UMIM4lp6WeobYtqktmQWUEFqQtNawW8zcXWygUuQ6Bk6IAUxlr+JpW6pYZ39wPD7m50MTFQNJVEJ7HK0swMZqZvoIM0yslDIzICQr1WgFlqemEWs5SUZKZhe1cPolxVSV5QmATr1DdOoTq+xJXPZEAwBxF/RyKg0pVTcbRNNErjKWToBU6NI08OUPpuS/Sg0igVl5mEdMFhYqQmQ6QsjnBLK9Ikcr/6wrs4O0ZKpGTpLOhYLIUYydjV1Sy++tXTWpqVo7w3P7eGb3zhJVoyZTeHCkeQn8eHdu7dMczOXCPuyuAEDVFqO3K1NQxv62FyQq4nRCVksQz7Wl37qYMM0230wiNMwtpbbK2UkaauFobZe08MYngwSqO9gVdfuYq33rrKbLsbXX2dSLTxPsZpMDGb3jmG5aUMz2maoTqAmTkHb7x1kQYcx9xsWmsIezt6sPdgCk89vg9dxLuFK5NILFcRLjX4++RWZeteXoMMWRJf5UgS5sm0M1JoTIQKK03kT40hzaxedmGwe5PY8vA9aAkPaBWPzuEW5M97HOf1yAQM2clBGsp0BqNl2nnXjVFe1vsp8ekOUVwKbZ2tzKQyWF5eQH02j3ipRZouYDM0hJnxrczMatiVSV1xvjfQyhVKXNi+fxvskou50imE6dVS1IXdgNAknpY6KfZmyA8rhRPRkqgo44gI7JpB0lhk8FCt0dCWUtn3xKNHld0AkgxbP/5jD6Dj1DS+8LU36J0aOMAEZXigG7fIp50+fYtZsoOr5BbPnLlE6doxG0tSMgxFzY4FMtu7WJStOur0DlWcOzWPf/UbnyGX2cr3MVxSjitVSuQEuQDqAeU6M0sNfONLbxI/r2ltpduMMTkhaijvxeOP70U7k4u9e3bgJYbmdCbAaFLBl77wChrlHO9fGnv2bePPe3Hk6CZ6vwW8+vIFfOHzL9LQScOk2rB/307s3jGKBx4axmHJZCWZuTqOaIFeS0YqNSyVXGU+ouWT3p7uCW2pWhRxwroZZJD3I0C2Y80qqBIVivA8k0ltQZWh9Ml2G11OL2o8TjDgtwRbZsoNPD9Rhamy30jv3y9D1L3jZKXFwuimbilcX5bJyNzcrPb/WhQpu1q7mAlHeRO70M731GQjmoCrFTd2XxuSlOFaSQCvvHIekVpQR4xJ/hXWSa2msFRIccljxONIAaw0VkWZWQp53uDniCwlBRiNuqNAbnFyHJuGhvCzP3kCa5k38cUvfp1qTSse+8BhZq3tWJ5eVW6yvauN3rFM+qRAFadPK2KW0ytUQVowwHMtSs9HZp7etg3LC1X8zm+9iLffYkLUKoUWlDOZQIj6ECJtFJXRdrwXq8t5LBPftrSUVIyvV5LI5JZo5HPYMhLHY0+cxNPPHMIV4sEXXryB7GqByV2JC7aKvqEUPv7T9zOZ2kLsO4/P/uc3cPHinNIrolpJVhwKRVWPr9VzXKTM5LlYHJlwy3siDINMvK3zNobpCIJ1YzESQXR0smfglIxMjhEDSuGC0xNDP9mBluF+WHyOOlHWMyOOtZBYBglQ19YxxjIHx1dS1AeuD0k0G+Dgbl533dcsJf2ySXaI2mNfbASJfDti2TzFfZn8aKGrrQepvi6+sahtkjKIXUhjMWCp7wx1J9B9bA9phhJWrk0gwdXZQvwnM6Y9symz7tMsHX8ybqQhVIFsmCPTHYS7q7oqf4UCZouzalOMJ6MVYquLVXz6j/8I9fIyHn78BPnJTpw7cxHnz59Xlae9NYorNyd4D0vYvnUnpmbGsZatMzlpJ282So80j+urs6hWbBpiHRcuXGO4SuLQkd0YIQ599/wNXLsygR6GNpH+SvQyb3zzKo2ziqP3HsLQUA9e/sYNUlp5HaopvTxFGk2Yct/TzzzG8N5GPPhlSnkpfODkA3jiqcPYd6iT4fsCfvc/fgGn3riipHOqK0V+zyJ/msfnPvt1es88PviRHYj98tN4MNmB1kiY7ESaKzWiAbKq3q+JRNPsbFVp+NmwEE2CLzzZizBIuqaG2K4tiO/ZzAgVNTs88AhixFIrUCHlE5eqIbOjuyYnksyYbejutAP3LgPzd2Ea2Po4XHXVToTsfQsS7TDbncnhK1B6QDbgqdRK2vVldj80LZgWecbYrkFsJd575d/+HqwiQ0alrLNxTDupmZIfIEaRJEW3jGCWW87XlMMKMFQ3SlLKz2ybSUGDikRqtAdleqznXziP05dvkn9u4uiJ3cjmPZx9d4YkrIedlLzq5Roq9OCHyVPu2bWbfN4riHCxbN4kLQ1BTFRW+UDyWuU9P1NheBctm7r0fYdxz+EDqBUjuHU5Q85tEz76Yao36SxefuUdks8FPPvjD+nIucnJP8DY1HV09nUQwrTw86fwb/7Nc5idKzMckqMMtWqH4AVSVbNzk3h4+h70MOvftXMHb1GVv9PGZCdGOJDA5HiOHnYJJdJiV66MYXx2Eo8c7NLdAwqEPk0diWwp/RKkAUuNZ0On3Zrt0WRCruyOUOT316oFxEa7MfzEcQR729AIWX6/jK2QSDyftGxIg0VRBsbLwH3dZzvgb0FivK3upPBd2Dny7pUV24yuteiRZBinTmKQYUkimperugOTI4WlvMhYOKErTsdoOob1127TJMPGcBvu/+SHcf73v0icVUCdXq+FvxfSCnRTwSPrOkJ+qyZZH+mRIDNCkRfDTBxcmcZK2Uoyu74tm7FEQ/2T586iGWqn9zmCPUc24cufP8cEZBJRJi1Cyk6Sr2xks3jmoV+gyE+DLlI+ZPrd2xPHru1DKOWm6RH6sZdYdnJyioR9TueEb9veS9y4gNmpGa2sHhnsZSi28PbpyzTagjIJ957YjgvvXqPHHZOOKwyMjKC1nbBgMc/kKY/55RwqvD+1eoSG18UEqYnlLDE2Mdt9D+zHz/3cfnokMg0ZDyuLMfzpl8Zx9dIfUfGZY6hdxZ79D1By2yZKpWlZlWonGqLguUZFCoIpQ9oGN8sIZ1n4ddkLh/ctTdnxVjWHj3z0p1EhHeYkHN3jRrc+k9stxHatSpkxLCGHizOpnlB/35a6Un9LEhj56bsxYfuuDFE0Y7NrJnRBBHx8Z7aIk/2SbT8kWKZUxzP8u2RksmGhlAiGdBI+VFYK7O3HyEcexI0vvow6M9kwkxcdaeeYknvdjKdR1eNLAYSre6DIzqcJndrqSnUyk6Nmez8W0nlcvjim4yeeefAJrEzlcPXyRZ5XGaNbt6CDWveyvYzjJHWfergf//x/+QpqhaTuVPrHX/sSHs3P40OPCf/5IcwsLOHf/8c/pWHmqIEfQidpqtPvnMVKehKpTg+DW6N86GlcuX6LC6eO7QND6Ey5uHH5MnnTDD14ApsGtuvYvoDVjp/5xCepmOTxhS9+lYnTLZy85zE8fHIXhkcd9G920NvLxcubMj1ewG/+5mv42lfP0vALyBTn0L8piXvvP4Ff+shDON7fj+I7t5BdzKCN96A1QLaAfJ+UaJVkuEEdCmekFtOhk5DhVRLehaJ54MeegLe3B8GEGVLf8JMP8xyZeEXMfEWZZmv7W61ZjrXB05gs+bu3Pdpdh+Zvdcl3kpvv3fLAes/fZCd3Bb2u2RRbiVRyVq33bMeBSAITL7yF7Pg8v09pCtR2SfUohmHWYoVC2hfdqFcUn0phqiS8Mt+5qZprXT3X1M136UH78frrF7GaXcKN61cwOLIJH/nEYdxHdWPy6m4c3L9FMd7xE9twc3kF10ibrExM40LgLRzf2YXBJ/dQUVjE1YsThAA57NrWh772CNZmJpFfuoXOtgGMdFHxoGedHSfeJMZt7+aDDNmYnFqihywj0RpB7zDD+OQ1/PEfPYdXXhvnOu2jEd7Q+dSvv/0i8eZLzOpT+MX/5ilykZtRKTbJTWbxzefPUnmZxd69m/Grf+2D+CAXzlB/DCnmQunXr2Dl9bNIZSqkuELE5Ux64lGsFfOEI8TQTD5kpwHdCUEWLSGShPDWB/ag/cP3kXhvKAXj3jF+2FrfCOOO3cSt9yQn+LbP9G5fdz8f8du8vpM9N7RjVCb26zAlmeIlVR/Q7bvC2/swEjiOpbcvonB9GjKDpI3SWdwRgO2pQcqecrIFmjBeukGP3dT+lTqVmUpmmfJUFE8+fAyvvZPmw7yAYmNVe6GPHN2F+09swZaBEIZ7RpCMt6oOfPKJffjCy2eACWbkJNFHNw1h+7ZBxYVz08ys02aQ0ciOEaoqQUwv5pBjaN1EudF2WskU5LGWztEAmzhIfXZNGuHHFvTchvt6qeCkKLXdxIV3riM9t4IherZnnr1HE5uZsSymJmfI2eXIOuQ1OZCOyGUZirRW0ym5T1PO+9mP7sNmeuy181dJ2aygRAUlulZBTIaYMmRW5L7Y0t4b1p1SZaSeTnYlBpLBBqWgi47j+9H1zH1wCX1UmtNNWKx1PsaY1h2DEzReO3erm/z5r78UQ/xOXmqEvstXjCNVJqGADq8UnjG6qx+dEd6s1hjyJJbTxI3tup8dyW5yhaZ7z2x6DymIFalNepfpVRfJZ7bt34W/83d+Gtd+/TOYnWXGTiNu7aInSaaQINUik7sS/vZh6eUGPvuV53Frihp5o4xNI5144P796oUypHDGJ7Ik4/mR1HqHmOTMrtRoiGVtyeob7tU51rPzt7Qcvz0VwJHD+2mEdSY4K3qOm/oHEKgnMT9eQn65js19Q/jETz+FA8f6te30//7fv0pvuojurgES+61aBSM9J2fPC9eYJcQJMCsfQH8qhoXnXkDh7A145C5DTHKiMvxURuppxbZsMS7RoG52i3Vlm7eqbvPWiAWRODCKrg8eRWioTSVZL2Y2nPz2L2tjDOD34vW+GaKW/eE2BSWeUebYqO4pfFcsgAjDYDsVB5tSVuHMDcxT502KOkD1QernZU9i2S5WZSlJZkjQRpMt1JtTur2uMkhNg1OloljaNk+/cxWDDJNPPLZbRf1rF+bw+msX8ZkvvKGdfe3JKPnGe/DgiQM0jFZcuLyIydlF3T00EnOYqHSR1lnkwkgzq2xgoC+ihRfzk/PardjRQ3XCSuKL1LVlCJTc4sHBLrFiqjQF4soSFZ0tOEaNePdh6s5LFd3BtWFF0D+0jQspgjPvzuLVV6/g9XfOo0KduruP9NCODli5DFYv3UBwYhWJRhLhQFAzVml1lT1hbNl1lNcpu48KrivzfHKUVF3SVMmDo+h88AACm7uZwHg6Gzt4J8T7NjDq7nPh7/z1PhqiKR/SmTSyE5KMARa9WFoMZCnKuF5SKUF6J2mnFAVlIXAehZk1WFzNUkwvtERQchjZFlcqgBJhtA32I9LTi5fePI//8J9ewkqG5HXCQit/P1ss4vW3zvLB5RClEaYSMXz+06fxyjffxCwVDplP8wQN8MOP34tdpHA84s1spoCZmQkZKoKB3lYM9kdx+tVxlHNrWtzb1y2bnS9ikZhR+ABJlr720ikmGM8hQ7Wjg58xuCVOzrRGnEqdlxzgSq6EU+euIVOP4+qNVVynETelrDMUwWuvXia2JEalfn2T4TpJqfCBe0exY6AVtbM894U8YUoCCX6OJCKatFmyta2t6pLQXdFkmJl5FnlmvkFSRi33bEPqgX2EPL1oOFolCovRRrfT9Wv8zVaD1nt5aet75hDfR0P0Q4IO4FAu0tvIuHUTbp1eYCtECXbSaI7tRgtpkvQFhit6tfpKjnlyUMV86Y+pMhwFeXNTg31YIs/27/79H+O5r5+nVLUNTzx5L3buHcY7Zy/j3NkrqFGHvnFtksnMCj7/+ee1GHbXSC8+9sQhfPChoxhoC6M8NYtgWwyldJo6+g30djfw8Y8/hmTSIol9BVHSUSfuvxf7DzLJubmEtfwyRrdvIu2zC6dOP49patSpRAsefegI9u7uRGdnjTRNAN09Ua3O/pf/8j+gtz+FRV7HMtWdvfuYNHWG8eZLb+DUW6d1rs1wdzf27dqKv/XJpxFnZnzzjWsIZ5n9NqNajSP3SUiLoExWE4WFVlXjAl+W6nFq3y07h9B9ZBeSDMlgQuYFTR+RbFURkmkZnuELjUDy3mRy4ynpFhY/wBhRSFGdvCq6cb2h2bP0Ka9vryXKi9wQ0e0F+3mkGRwS1Z29TA5Sccy/cRH1tRKqeVdxXl3pcz6+WhFuJUSqpBu7qI7sPrgbf//XPkYlJIK3d/fg1U3Uu2Mx7CWJ/fWZV7CXSckWJiVPPnIIH3/8ECyS42OnLpBHy6OPGXWc57Rnax+6h/bj1/76RxAjOR7nA33g+AH87Cc+iAMHNmFhYRG7dg9gx65tePKxB/DVF76CALnCw5TOPvnxx7F7OKHZ2dMPHEZpNYcL18gF1m39rP54AttIwzzzoXvx2MP70FrJIU6OT+o7Dx85gKceOYHdlEKzX3kXpfOz6KTmLJMiJKlrwDTs62JkSBbNuMgfLZJ8TfJcek8cQmK0F15LSGGM1zSjpgVXSutvg9RY2BcJ/CzF/OV7FY/veN3VR3reX9xxu8rO625+OnNQ2jJlicosbDscMnumQEsejZEGzJYy0h8Rki6CS7NYPH0RpQtTlLykN5oAvSOKvhN7ET9+CFNrNqYnFnHgCBOAWplKzCrCLXEzfo0Hl0qfXNrF9FwJfb0taGurwiV9M//OGGYuTVPLDmHoyA4kduxAiZcZ64hoqbxlV7AyH0eUGDQaE4K4oINFq26UBm4jIpuI0zNfuyQeTeac17E0dhPR1la00cOVmP0vZZvaHhsKGg1XRvml2huIx8mDpuuEAxXd0LG9lefLc0+/dg3zX3kT3eUgAgy/smVb3WwmqC0XOkBUsz0H2UQQqQf3oOcDh9DsCuv0MxEPXL+dwdHNLi16Tld3qI+4ZvKE+j1/l0/vTrzo70OtxvLnsCHWXWxR+r4Z4nqq4r3nO2bflHWc0rBMaLBN5N5YtDrbqGH2Ha6evo7l8zexcHNKy93buvuw+chBpA7sphZIr5EtMtN8Cbn5JbQO9KJjdBOCyaROHwvJHipMhpCp0gBPYfX6FGx62ajQQsRsQaoO7Yd3I7x1WKczrF64SG9rYeDgYfKgISxQZpOpWB27hhElfiwvz6NKj9fWOwKngzrnfBpz75yhIV6BE7PQs3MLUnv3wGbWLHKlwJIovRhyzGwn59BYzSKWSCLUmtRhnUWptCZWzF+ZQkvBQ3s4rhv51KSHRpYpIYlMKstQxy9SEWrZ0YfRp++Hc4g8JMWEQMBTVmEjKVz/8m4XzHg6Vm8dKJoNdbWYBaZJWJ5w9Du0ku9bQ7z9n8GKgpx1L24fNLsW7thm647oodtK+Jm2TPSs0JPMpLHIBODG+WvIM8FoTbXTxiKo5YrMMOnRZFK/bXaXF+pCPqNCWiQf8FRD7WZ2bdc9JgFBhPlvGRtS4EMui0YelAy8gSR5OSkkrUdlCoKLGL1bSKqyGQqr0i5AzjDUlKYAmS4b0B0/E8zmZbybG3BR4YrK85xLDbM3jSQZMrgvJntX8HjNSl0xm0spTUu2eC5C5AfpBSOyQEUHFglP+lOk8Z/JSJVUV2x7P/qO72ZmvE330JOpLVK+Fbgjyt4mrN+7qE2J/581RP8Wa8XOD7QhGgP0ZwWaY6kGbfsM/gbD/60nuv6JZj6m2clKWu6qfJDFBopLa1i4NIb505dgz2bRTb4xbjGUyv4sUjwre4LILgUy8UGmRThmHnZEJkjIhjye2Xtad4R1PP9jHJ0zk5B2P3rhHA1LyOM4f1OmQMpeBbIVrmSugrmaUmYvM8XFsyr8MINHq03T1xK0TJus+EQpBA6YDa/9e0Fyn4siVDcT1WQWuYDmEDlWmVCR96qo0IvZTODaNg+ifc8oDXEYdm8MnpSihS0du6J9Mlq+5RevfsuTvp0dGz7XiCfGEE3d4frYBOA73UHl+9YQ183R3/fdLzlfN0LL7Lz+bT5C9wf2zCxqdZCu0a2FzpEH21grojq5Co9JQW2SHOB0Tr+nM/yClnblyT4komG7xJ4R/l5cpiXIjEdmPnVPZr6YLWZ12zZiBN3DpVnVrdaEHJb9/hx6MVOQS3Mkp+fQ8KQwV9Im2VtFNoiX7Tm0asg186YDet4y29EMHwjoQCnP7Avt70wlmxrJcUs0vJow4vy8Ko2rSF8b72lB7+gIgttIpI90I9rdCSsZ0WREDEdGtFhSx1kv0SBjuvehud/4tk9bp+7C/6FnMmjPN8R1Pjv4g+4RzZ9+WN4gCW6TqVog4fn0zvpPv+WMG/486g3vKdmNYEiGOYtfbrGGynQa5YkFrE3No7DIpCVXQ6xqhn1KdV2Ex4iL4djSfK/lROoxzWRmWw3E7FEsjVFNlB2jeYd0yqujW2vInJ+gTD6TE5QZkTKcKWAqo13d3d7SCfy6EY9UuDpmiKlbNV5SZsjIBpeSdEntpewpUyeBXozycEyc2hl+O7b0I7alB2EmJBZVFtl/WohsrO8NqhGC5xas0/gbvK7ot23zfO+8azM7cl1hsPybrI3z+mO/Suo7eH2fGuK3f7meuVHrhmiKKDz/JhmDXc/i5OPNBjx33G5vPcwbAV9pIOrFLjPRErm4xnIGTZLijdk15NeyzDgZAwtMe3M5LWGTvUik6UvKQQX/2fSKdRpoTT+S4Zh/LzbL6n0isieCTsJyFN8GZXa4a/aPkfZPKTRwtWJFem94HsIINAxbIN6yxj8rJOLriiGJGUncC/4LRCNItLchMdgNp78dbkccMaor8Y4kXBqlQAZH90q2zSKWHhNt67Q1vjR1IJYMqIqaHeu9b/+gPWv9/pr/WXe8705j/U7t6/vaEC3vjn95fkjwz+o9l3WHKG/5SFsNrunfKH+Li42CTd/LKBSXkCPJgPxDZjmuFVBdyJHSKWtxbHl2GRZlO5ng32DiY8mOquT4nGpNM3YxxIpydjWkdDszT3taRNWR7dhk2Lt4lQDlx4ZOJKLhuyV/rxlbg7CcT1N6a+gNZeSIS32tyUTIihOByRd13xAlRaeznTQUMS250mhnG4KpFrjRgFaz27qrq2cKi/3MtuFvHxKUhaCV2ebfUs3kBWUjTes9BnZn1uJt3GTvzxjihqpi/ZAYol6tXwq2zmavr0Z3Pd76b9aS2o3yJGN0rh+UZX88UZ1tz8zYlqxD9w+wHR0KFWiY7cvE84hhBmue2ZCH368trMJZzOootmKugspKHu5KFlYmryFeKluaOhOmhFipoaVVEpKdqglrTcfUWoohyt/rXpnGWdRB8yEZYczvuzRW3Q+GgMtiUhGkpm23xhDqaEGoPQmbxhhOJRHoTsGi17NCnn6ubpskkyJgNmlfH/cqm0zKUFCZCSn3RXGvIG2ZRSSbKWklvLl/tvct2TJuY0bX8iPNnzFEvxhF/mr/oBviermR5+GOHag3zkppBN8Q5Y/1iqU7DsAHbvlb/5jsNOD/ujm0qxXhTd2D3dIeXR01JIbp+WsAUj0mdYwMsEFpiudRCsSCuTLsbEm2wFIlwwoHdayISIvZ5TSxXVPJZZ3a6pN1tsw1FAnNq2jFdczfbcGWQC+tmFF6vgiNn9l6qIVqiwz6lB0MGJKheBJabSxbo+neNP6mQPKy/fvkaf+JqyOTxVB1oL4//srkx0G9ZkmH5F6swxvr24RnPaQfXdbfc/sh3PGu7wOPOI6/4Os7teG7uLb/upc/8nTjtHxvcMf/tM3SbRoPrgmH596BvyxDv1h+NbMYiSQ5jq/lrl+HZd6z/rLuDH3rnsdnUb7fXryOzfgLvv4/OkCOVmNfcukAAAAASUVORK5CYII="

/***/ }),
/* 61 */
/*!********************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/static/img/brands/mkf.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 62 */
/*!********************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/static/img/brands/stf.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 63 */
/*!*********************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/static/img/brands/mlgy.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAABvCAYAAABvhBtxAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACh9SURBVHgB7X0JdB3Fme5f1d131XYlXclabMuyvGAbY8cGYghbAkNYjQE7G0PIvCQkc0he8mayJyP7nBDyMvNyJmROEpjMS8IwmcQEMMYQ1hgS8rBZHIwXvMjyJmvx1b7crbuq3lctS9bSss0gi3uZ+3Eu1r1d3V1d9de/fH9VNVEOOeSQQw455JBDDjnkkEMOOeSQQw455JBDDjnkkEMOOeSQQw455JBDDjnkkEMOWQxGWY62b829jxQL4c+B8u/t/Rz9N0LrN+d+FB14DWNsUdnde5dRFoNTlkMqXqqIzsGQuvjgl5YUqfoFPvpvADwz5I+uxT+L8DXvYP3lAZXFiiXrBdHksgBdUoU/5+TlJcq7KR6i9zhU/eVm82crgorYMojedKlUIJLqCNLq7O3PrBdEpVgVU6oEf/rRIZ92HF5H73F0OM3lVmn+ZVB/C/A1yoiZaStRE1sQDVKWImsF8bXPLrN66hcUS6IQ42QM/spWSjLP2fPVefn0HoYgPlMSu234B06cCVaZTvv8lKXIWkFcVtFhSCEKmSJLqeHnmE5kVBQyMYPeo2j9+/Iw52wGTPK5I37mkrFii0VMylJkbcW7ktzvcFUNXTByMAVIyRXMNNL4exe9B6HMwgVKinNhjocFEQPRQiNU2SKe04hTDScQCCqtGcYOJk6Xomdubf37xeH6+uz3gccCofJt0H5XjfwND2nCV66RknKCONUwyETjy2KYqFHPAO2Qh86qkP7UOTe0VAToPQJNS/XUVxczzubDHakcdYyUwUhFDGZkrYXLWkG0RcqCVS5jY54B333g0yKIXj44KxoqofcIYniulAzMxEjTJrlq9FG4J4yVSTOnEaccJsmAYlQLk2SNPQY6pwD/fDntsNmqnt4TBDe83hkkja9B4ArGHmOuaaY6k6mstQBZK4gpNDoafxoM0/hn0DkHRYXc4Mu67TkLKMuhaSphqBo87wXQiOMGltL9iKjZkKZ//eohKiu7kMVMvN+EJigm72dAx1BQMbXAJj4XHZjVOfV4mqZJISvwZw2exPIogjZQoSTJ8OppdVnpJ2axIDpaMyBqVtZEZUBxXEdc3UJrLzeyOQ+LNOa14A5X6Qc6ZTn4zK0hs4KyEFkpiOqHK4KIHPPRK/muoz4hWIQUq43Zx6+K1UfDlGWAf8t76+eWwvm4CNr9/NOV51yWKFOVUhYiKwWxL9YVQpAShpazTlNUR9AlSjnn2/2R7HPkF65m6bSaDb+wGo7gaRkAqahAD1DKQmSlIKZ8VMI5nSk1Uwbu7aOBPJl106Sadu0qFIx/BPXW5va0QQhnVGJwkZWUVVYKoiOdCilU+RkW1ya5Tjj8Q7Fv12bNzJyjX64OEolqOB4fOxNt6ELyCkH8TNslo5CVgsikWYCan7EJck04Y0ulY02nLEG4oCBqOHKOkhSBGj8zoprJfCNnmqcOIKwLQckUv51z4D9dxQyamy3mWTiylhO/FLX1qzPvJ7QLe1vtkinIzqiZqWpQ1lVv5xx3Eimji2Pfnnc1ZTiO1y/Ik0pdAlb+k2/rRMaq0aNvq10yBdnJIzKWRzShCZIQVel5GtFMSepSynBAGy7HQNNzDt9e7lipMJ4+T2XhrKPs1IgSZlmxQs9jpJKKsa4JTp2NlMtVB+trAnrdB2UYdAZIfzhTH8Rfc/CM4ygnmOkk/nH0g3pcIg/5d+SiL/dlG0OQlYIImqJMKTVBBoFvZpLWex1BJ1fiszwvHbgwFj+eccTv2rXEdq1dYEHEPgNfz3N5KDTl6/j/XoiZh9aHF6xU8LhoqqL6y7Mq55xVgqhH+f4v1GlzVcTckT8OjiSxRSr2W5Tt1N+9riO5/ASZNIcyDHfRvGkRR1xDOoeuyHMhlJT0OLTlMxhQx72Oo118TPDKpt6G05H9GYXs0oiQroCZDEMbaJNleRxOMmkctQ2nCXapAT8kPC/D2BJ4YuWxDFpkpU2ylCpqMdKpPB+ecaxGcxC89CDdtx1FD0LgJnA/mIW8dLFl2FnVt1lVWW22rGB+pZ786nUcv7dxg/rChp5Hqn6LH7y1hqLzmaEWGkE+kzIFD63mUjI9U+ijXochhAMYQLvTkm+X0tmHn1omuJJfglUwokU5QTxbiFDQVOTMRGd5RpMQxCPMUfF7qaE/oVL/yRk7iJ/7vcoqya9yhLyNMgQdO3ddboBewp+egwNa8LCS8l+MRF+3YnyAETvieSH4iGifmmSrkTPNZwsWJfggYas8I14EMF1IiaXWriNlT7M6EVjuwq+eHaa5SPiSi7rqa4oyge4QUi6BtGm/1ePZVA8+MUbOzuqCOtvP9bxg1wceD8ZMvVSCFzg5jXi2YFCaG4yXobUn4NdYTCqRhGZUc77YkFJSbYMm2epZVNEMSPV5ybRZ2Uzv7iIrl2qR6ioMpMUTFIEQsoNl3zu4g617weHCSGCQxSYoazLFosaAyKq+zarZvIm0aVlc1boRpRdLxqhRkdU3/NUyH2G2E4NvdSvOyRs1sZRpV5GKODO+bqXzvweXaw+9C2j6xvySVoNWcJJLoabLvMqAp/k1KecFRoPcYUqofsOkxgkuqdumzgibWdW3WaYRHbh9qhi19jbNILI5zNbQ9yhpFUrt6L1X0TmpceUHg55zbS6nHa+P5tG7ANMnCrlO56nxWh4BikAdO7iS+xl3Dg2fo1RaMukZNesJHoioI5yySyNmV2VZgEPayvXOBl7HYd9itkonh7+v251GWNOMv56H/kuOzUawQQposanYXJEsmXKCW2d4QDeVQ3CulIo8sihM4tgBQ7H95d89fGjod4v7EowxT9PsrugjKnEE+VV9fdb0b1YJou0kLTUYVXqSvZzxo0pa8ZG/tdpmjEz750zxdvSSGHOKNtVcEr+Oc3kzTTHCdmg+E+oCDKz3Me+8cg9E8afSsQ8PmWWNQr8Y8Nv+IxNcFoOVfLagsqbeh4ooS5A1gqgj23DQ9XvKJ+IRQ4I1V/mSAyN/W7h2t13ecqALgcDzuMper/MQaV+gZ+Zof02tXj1lqTHF5JUYPVdOcHgAktfSy+zne5LmGDO82yn07+jD8X580l4nm9woo4JU1kwJyyKNuMBMSqZnW2ttOCZUcWfbOHFHgjOsGZXW0yuc2f1k40m349sxzfGMvTJ+KdXTpwKmrKUFL03Jbgk6qwNPYZ5U0nPWOGeqAyNid3fsQGvdjxtGCRtbRxIfZFqYDsw8BRGMQRHMftYsGMsaQWwbSBWRY2s/Ttd5jCAy3RkD0R/s7dP0htf5KYMek0rtgGR6Hdc7JVQiMvhIT8o664Lobq9s8jkwoUshTPM9yyi2Uyr+5HIMopFmeUypFhzr8zqCNF85l6qQsgTD0Wf1Y79fLKSwWlZd//qpTijfsOFcg7GC5pUr/zxRmbonn/TH0/ISRLiLwZFoR7zMFR3GBsCXbZGkXmCJ/ldbPv7x9rHnVj/+eJWy5ZXIqV7GiAeZZi+Y6l+Z7FDn9R8KfeXwRgrLBBmjFBsD4TuYzqt7cktBMh4rlwZ9HCZ3ubveg8m8S6SMXdDb4F/Sf2jXHS1/WGK4q+5PXsPd2IixTyRDoV/9030fM34w+38Y1kDiLvx+jrt4icl8JjmyGqwF192GNNuveTrd3rRmzbh8dvX69cWOL1xrKnm95PR+3AcCocLQze1MqV0Xp9vb73/rp7URZ2Ca6T11EpG+enV9xfI/VT36v/86xeTz7dXVMVq+3B5VStERpTcqZe7iKvp/hfPIpxxa3ntAN3cVSaN0dL2eKpZm+i4p5ZNhLo8cuPnmcSnQ6O8enxOw2DJF8JkVlYP0zyMdgiv1Jim+Xaj0cy033/yWxzMHHcsqN5j1cQUarXnl9b8ZOlb+wANhqyCid7jNTxtme9sN1zw/9vxhjSiVcw4zaIm+oB6O5A1mkjEPEdsFFRs3hsaV09/r682UQ9eg6FKIUBUa9Iji7BVYxNe1j4YbhgxSy4xg3sro5s15l2/ePIqKcRzHklxvR+xOfk0IqdqQg+3mivI7zILKl4vm0gAPjOkPpSPlrsj69YVJu+MiZhlXgucpgQZslIy2o6+3OMzY3xwo7ngjb1Z6a+FcFbPytYSPeDJ3YlXkMC9ddEzOvMTfn1iFX0sR3cTwWLvw2Ypr7UXH9+kpaDCbVyrD9363HYawfr2h66D8+R/iQqxAvcpgI5sh8+75qOh+g6Q/zgMznyhZfm6nlZef5uOZKNRqh6Ospt8UfEAwxi+zyDy34vDhyrHl0NpdGOzDA2FPuIreyKuhY/5iSjKzyOBylGl28qSBvqhDnr047pjjovTq32240Geoi6EoFgvFOnS9GWevgUTajkGaVBzPbVg3aGVR/OCTo2Y/2clCeBMKHCarU2P4UDl9OsazUYr+qODC9lzcNdwKuMj5JNgsMxx+gh56SEeX432P+npcUC2HkLzf4LQe5ZxR5e6/36xYtsyCtvg6+jWhMx1wyH8kSDRokQ8w3bHsb4gZH8R16ozu7ud32bbWisP5YJNzKAmmd/lqQ4O8Be27G00e9Av7xn4zMO/B8stoRqKd8uNNw2KkJwTgn1ggEKiAkHwUna9nYT+JcPgRwZxGm7EOv+Fb1GJFrj9uFVXYGHG3t76ginv3MT6sWfWOWuTvNkLXJky/3hJ5GQR4I0zcs1LSzqAdbE6YfZXcNGczwVZJMr5CXG02pdQBkBupL6ut5c3NzRVKir8hg01HG0D7m78w0qkWH4ViaX98ZiiVugG6eMX68ouXzkq20eL+w+STY70F9UyX5W9sjFSEYF5vcdN5hl+7DIdHlmJ6kzDF4kMNsR1C2GXm0YxkB11kv1VqSXuUsASUMmDnZwgyCwTJcQGfNPkn8I9OM5ZAqXxPivQenl8UY/39IZL8JiigC9Fan0M+f0co396PHGPv8LkBHzOZ40fbz0DY3jTyuoWJBE+4WwjyUqaEp+vkCmL500+HVSKtNzRanrbll8p46H7o7HHMffWSZavQbxfiAyeb1UYgQF0jBLGqbMalSjpXQlBbMQJ+fOymD2/GCBlpe9rw+buKDZsuQa9fYjDzQbL8d+O3349rFMYOg9rY1nTLDVv0963fml/UEKyw7pr32WVtviKalu6miDMkv6wbdT/IJfsVcsivQHPd07Lyhn8dc8mX0bhbMHj+ocbwH30usrjwQKA8dHvbi+5B5X4Y/az6mo8d80W25Yvkj/bcsvqeMdfQLoA2S5uqNm5cI1Kij7h/yKqw1sOHy7nh+zVq/yJG/380rVr54Jjz32z99rzz+3gw/mJkIVWkuqCET7rpOgKGTCUMU/7k9kVfPo9LDvOoWmF6V6KDK6AINtG6dcPtCc1zABrxnJPnMzrsj9I9M2+mb7HfzS9O97xJtI9OB63hyFGLcf4NGNT3+VKJnzauWdMzokgHPj+OPvHEQz5b/Rs08Xooi3vrHnzwRw233dZLkwC3FYxEophp/w2NgFG82DAoQq+9Nn67N0YfQDkoKTjJUhSHzOKTdqVe78oltflYCmF4Sgr7GE3kZAt2BIL2kk6xMcMphXk7LZmc4KH8JLdKHCguuCzwEU9Sgn1GQDWEKvUP2l04DCne5nkRPACtXi0LRPzxNl9hU0OoYriCaW5Rsz+CyICzUqePfbL5D6esD262y/Tx/YnEoFao+PXGEsZ5pU4/QlJ2Ia/x5thzDnytFlkUVhtQ6flz481UYvdTSJ5M+EDzaeuw9fnCqN1j5eNaaj46fQN+a1acG5VLl85Zdt/JfkE7d51YOjCMQhGni3r20Nb8uUVPFl8QKd2w4bRzLtGJpdKdB8k3Ezf287y8pGfBgYF+oYyDUEQHIQP+/oKCeTRJcAXRVGYZSRkfnGzJZhtk18xobR1OeWk/rmbz5gAa/wNK94GiBm7wsrSTGm6UmpoXfIMr69TSBIknwPQdQcd7CmLLLdcdadn2yks4GoT5LDUMY/y0fyHyJFNFWkj1Z2f+9KqjwWilH864JWFcRky+7rby1BuhGj13APIpDyDg2jbB8ypdp8W9R9YfCZQ17gtVKsEGacME99HRQFSX4FXxWPBTrZsLhtaQeF2o9cYbdzWtXNnQedu1riD6AjwKK1CD64MbZ7uOr1y5Y+w5YcOv34mywKfEOfO0IDp9kNoTBkXTSlwdxf2f+9z871gpaczQ/haCJL3sYQ/cBGRMjOXNFc0jFISIwbEdxZsWQ7g/2LWD9gcrIluL5lSF9TW07z6x308QrnJYqIuRUXzKSYs9Dddem/IqF1uzpr911TWH0M97ELRZXNBEkzTeNlxBRIfPgM/WiYd9DdHSo5Kbi1Ip55KhQrsHBmake3sv0VoTwvMK+uaPeK6Z0EzDGY7eSE8U+c+A9g07b7rpaMuNN8ZPcV/lmhhGryIy9oFQqR1fM/4hZEq+gIf9J2QX/vlrsz/xsfsrr1x2Q/trNCPVDvL6ZAAZMwuMl4vma59nK/yQGE1Idwyi/q57n+81/U2CcRsBA2mfUQcNR/ylVAu/benAoVr03B1N/6s6QGvOjOJyuAPXhip1tCvJ7vaqAyf5aYyDuTgyPkLhlAC7sMex1C+CKefDEBt9vWNgJ/6CQbmeM/kyZ/QZJ5kc9vvgqx5BxmikCaWwSBLYAbqx/VX2vt4DFyPQ+GXF448Htf8+Ud2lcIpQ2YXw519Oh8yjdBoo3c6KJSGQtTRJGBRENCAEwkEn7oET/jvcaS4swfk1v/hFQI8kMy3OZcr4OIbUfzhaeAyuw/4qBK/DnJsVDJonRp5DkwGmZ1nDRSB2EZRM+82xrYkvH90kVsW2UGl6tFticyMd8+chyyBhuaU8k8vb3GdD+MaZIK5Vz6AjX2yEgte2zZ5zxrO49fI7pp9fmqOEUN23zDrw/dpCtPb1eJYaz3MVexFaaUtly74eaJuPStL/ORvcYyKwXTIDvikrDwby60o3PONG0O291nHQQ9pRHvfMK2CeYaKToIhaITTfqKqYfokyDE+tiB5m2uWyhHCM/v4zaj+0tZ6/NGkrBfmJqxbjko4QdrsZiDSiUnCVyCfKy6uqH3o6ggaehjvWIlp6w5B0bJDRV8WSn+Qe4Gc6g1kLZtbde69/NaiM09xbR+CFeCBD+ni/R8U6oHm1wLdzKYpmJdpCC/qPsqpUJ/lHyrreyVzJeJz7tH+Vz0zztIS0plwcOEMSUmtK0YUoz9ECGBRpCKhJKW7puvvwvwtMy4qeyUafillp0Ez6OfKVb/R6k87mnqC/15iF61SjicZxT7rdQDe90WsEDkZWPAq+Uc7HHUOarK56+OFqEUjnwSpYupxUoiagBqr1qQtjuxM4G4OJjRtQ09I9VJXqjs9KHG+CgC/GNefZfclZXnUHr6jXgifSShX6iotP236637jO0SvWT5MEVxBd385Vtby16cMXdaLS22EGpEzJG5jPWcgGTU746C03vupL9jUqR3TjeyWUzzAFUJROIyKGIWVUkpoxo+SlQOBUD6T5Rua+K0SypLTdwGYUYLf3QlIfhXb4Pkza5VC10wpE0nPWTYETb+3mRW/qQAttWngqf8h9aMeoFiDL08xMFDnxbaBw+vygUCrTnXQUUWe7WXCikvxjTKoavdEnna4h7cRxPH47GnMhPqP4u6Rt1fk4v5UG97AZbepdL5Q5tpIbflZ17eH8Yt9i3HcWhGc6lFQdovJbueA3MxIXoHQzfMzr4dcudU99yPXX+9A2HV51WhA/2vJ/DvzyJRok1N/PLb7Kq5zFqRcyfggR/2LRHZ9Gp3tWtDP6xYeKN9EkwW0UCNVMRSKVdkx3ahHU/cMYeoeYkp9CLvQL6FcoDPkTfexgX18nBBEUEpsunJNz6HavXm3D2QB5rH4DSuJbCK0XTSQQFY8++r6qJe/7NI4fg0Y8UFlZecCrnGEaBxSXz1Wku958oXhR9y8rrxhfCCa8JhXb0xeN6pnYSfib76/ctOl678d1BwDCbvktqO6eAeZ7QErxL2iBtjyRoEX9RxCNS2ryl9DTJUt06QpHqUta7earxl5o2sMbzy9/5JFFQ1Fp044dB00jtEPpJawOXT1twya3ssfql4VAEs/HZT85dC40Lm3LryVNqicMP0ynfIilxKFHqi6E9pV34r5b0Ckp+HfI6qgFgx8qRx+0YnAuhSAsKX3qqYrBDmQw5Xqqm0f7KRnKk+lqMBifh6IBj8OvxnUXusTzCCQN1QhD9isM5C/DIFym6Tyv61U98kjJtA0blqN+F6Hv+p2A9SxNElzTyvQ6EKXZyEFizpayC9alGzccQMOUIw58AwHNIB3R3Cxk2YwUB8kHltxPOjNyxRWOjkb57x47hFzQi4wba3C991c+9oTZv379nt6urr66VIp31tX5gwKjXaQvlFItB+n7vFTGsdfHpq5OQNi203LLjfEb/299Y48RntOEjMGhYJSqkl1kDZlnpXpNJQYOXXFFsmrDphegHYqUIy+Z8eimZmmbB6mpN9HUsytVvXBhEfn91cxWFQgKogiGdkmBzvHRHuYwOOgKEbldcE78KCJoP72WNxvEecwsdOJzw3a6BYLwVOV99wV9paWF0jCQMaIPkfI1KSb04O1D8OXwRx/tROD+ouFmF5SBOvRubfi5b0nfwflhSpboyDxmFVCHL5+2FMylsINkha16Qiz18k8WXs3TjlFOnM2CAGrfMKH0ctjRqUw9G6IEqsIO9id1xNqCqBqUG+/x2vgBCQE/lENE9mOEFRTsZmTsQPuAcB7tOiDR3gVLshNWcAD9WGOk0x8sWb9+m5lMdlcvWJBua2w0yV8ARkTUWeScj+u+ypVoDPT2dtPbAHNf3MkKwUeO0rqx665rNU+UKIOddOxovrsgp/2mm/rgRx1jgvYxwzgPmYLe1jf+MkiJINo1Hn4SgqfSUOVW+dGj/rYTC9mbOlrfqqioaEC+8G9xzWtw46X5ZvCfi/JCR5IzTRay7RIQ66thv8+H33mOkM6lYjCzckp85eCG3d+fdev52mS+ll+HDtxFUftEwMLBvUnhUhiSy/uhIb6Kkb1SIGhwDLlRzDQO1wUv7BxwnBr4t3+lTH6Fjlqh4ncWdXQ8W7Vun932zXMaMI6031VwXcfr9MeiBfRA+RVU5AzQkr5D581SrX6qp3sC06YhJcdroHVXQQuB3Fd/gsnVmlgT9YTni9umeT868x/RnovhNPtthD9J5js3zJLBXjNEb+bPpLfC0+mZyHmI0I9LX7/oLk0lnnoisgLBDKtG29XCzP+4KRq13QE+BtUbNkQQUBYr09TTx56G9YmDAuv08mKZfiUcZ9G2228fQH/+CdwvBIddN3bOCBgO3QftlRs27oYCmYdo/HyfFbiHwuG9ib6+DmTb8hBAXI4+XyEFXwmN+tcYyPu98uynApRaGP3u86fl2IkeJwRRr3ZT7FjsiiuGnc9ER8fOQCTyAy7UHMnV/pGMPgvzOLLAGxlySMHy8jB6YZDLuvNOuwUKFfnqD5Hpv0Zx4wIEPb8VYVVOifTgpAdGz6HT/81W6sXjN61qG1dbjmyQuzhexYQhXWkrkImZXzryeN5xXwH9rOpqmh1vdfm3PKF9dNYEDdd9okH3zNi06e/g3VY6gv1P05DgLHzlibTIh4DCDaDXoBE2F9rJH+7etctpOvFMJrMfgM94BNe6pw7XroTGvbrjDfrXyquQabm6rNVXFO0yw9BQvB3EI8yg+jM41GtFMtnWOSKzsHvNGk0Kbo+uf+J2vynmGUze8d1Zt65yFM9PGT4Q2H00J95Cs5Ot9JtdP0T94y8EpP1C2ff3N1Q/GrkNHl9KT/I6VQc7Pt8vwWKAz1V36Nx2+i9ruwNMuKk/fW2dqTGGJ1KwAvww50TbtKNftggrsEYq3uyn+Lh7NN904xerH3tsMZPGxe5kM1tO7+7pL2CD2bOtAtSdQfzKplXXvTH2XD/F0IT+fkbmdqHkwZHH+trbhVkQgT/J5mOAnodBfN6Y0wc3ItKLcyzBRp1cVFOTTMZiMRUISEpao53h3oIEWe1POo44ZHd1DYytlB7NFX19u5HcgxNMTdxgYU0aIuoG02IcsJF7ZoGAZ8QVMIy+fke8gtYcoKTP9VnhFBeHZNIfTSu6pmMbwWcczs9CK/WAfBhuVMTPSScv7zgX4nHc8i/uK9FgQ/FvL9iAFiGpdbcm5deu1Vyme06S1DGLs0bcCP6aiprKMfKdBF3etRO54EPUbwRFpxmOwZz+dl+oYi8E/4hfyo6mJUu8MxA00L+ip7GzUvQ1VSU7dETKbFjDEAaPFsaIPYAIPUV6RguT3HV5bJ9/O7PTp49Y29vjoqjoLThC/6mzROb278B869lHCvzhftdAD7ktJyYQR4bOrUO/7O7uPgDj15f0+TyFHRLX5jfka0rwNAK1Qja4P6OA2T4GE96UctBGHijv6nLaIpFOx2c8g6zuqFk92rwfa2rabXCeRMtv8To/K3aMavv2/IfRGMthEsa9/hZs2w8MEo+X3d34Er0DHP3mvMUQxntxjxU0Zgb4iVnQDeArPnekI3/L8vtft091LR0Hd39ncU1SptagA79C5LX1MIuj3GcEs/9UdfeB05LIE6H9GzVIAwYuhQ9/n0c90hh8/WXmR6K0dp1i7NRE/7uJ7JgYq1QN03v/eQCmokUp6x0n3i3L0dHrT2lwYsMoaM2iN/oE2beiJtq39LQXe2g1T4tUJYTwTnzzmJyqkHVSiDjtN9+JELpXYsEewby3H9EbMmm+tyv57/n0xbqMfhVcVggic1eGMs8FU47m0LgYoHeIcvJ3p4R6FX+C01Segg2/7DLY2QtOd63jr29fBEZgEeo9NKN8DNy5fZsgQD30DmGIVNySdMqAzwgEor3FvoxeNpDRgrh+9WpDb6h5YpsR742XmOpKSDtO7xB66emM7+8/CPu1h9hof3m4DDHweuyCrvolRafa6JObEEKllqvBXW3HtjGCHtUKYvrPFIt30DtEJBCAr+fmmyfavJOSaVHuODwniP9VrKh+2Xcs3VoI2kA3omfHm4q3hqxwH00C9NoQsAQPK0GvTVAEKTJ1btJJLjlEh7wX+bupS3aV/kxwl0ZQGNsqv7v/rar7WyZlACWlm2/uxwASnmU4VZJMZvTbBjJaEEUwvwjZL89JB3oXBPwvKYTsjK7d/Y5N8xBMaT8LqudPcL48/S4I2AyDqc+H7Lxxvp/Oohz/h3PA7ymkRVWl9/niWURYD9IkQgzOetbrnD1X9EE6ZyXJiFAGI6MFMSCdoMG9X9cAgdCmqNeSKj2Z0WAk0NinmGpVTP7F67hOj4G+QcpNRMdu9Cl7E6D05IUYIIUTvJ4NdBQ/nLacAzSJCChD6p3Q0CqeM5/ct9sbMkgZjMwOViwjDL7M+01KSmdzVEwGjTOatnSm0GuGkV/WOys84V2A6ZWFi5CvrhU+GjWzPBBUflAm1+vVb+Rd50aQ4vunrzvQQJOIIBhu+K+ac015l9CLmXiIMhgZLYhI0ukgZbbnMT3BQdFBgdwdTTIqG/btT8fjv8Cfmrz1JH5B9t4Fm3fD0Pf2+rnzBVNIg5FeYFTgWWfG7vY59naaZAgVdAZ3QiNPgh1CWsdlZr8IKLMF0TCgfZinbwNzbOvllKHw5GpEF+tJVhc0gbRWLyNi99zsCK5BLepQ0/KNuqj+nnKQowXpTt6FE3qGj7DVPgrSpCw2GgmpBiTchU7c3/a+vYqoMTNuMg0ZvYeeQSwEYSsj5eECuluzUawH4QVNMk74nE7LN9iz3NBrk/WEiNHvhdYThfHPfEjAnP331vUabXQuTrvU01kFX8gY31f1gz176SxAKDCJHGk1xSfwEVlUT7R1Zz5maHYlszUiU0X4/0RT9dNo4KMhSk+6aR6C4TP+HUK4i7y29WDuVp9zTdP827wYX4xy2iR7akRoo71Sulmbs4LSYMpm0t1Te4LJEmoaCPTIoU/VTMm+Pv8VZLQgcsXCpLcr8QKjlCQRa6GeyTfNJ3CkZXcKmmwnbvZH7xIIAhS7EEJwG1TNRO9taQcddAD28xU6awhJm+yYUjTxoFQUzq/yZey7nDNWEN1NJpXUb6mfYM0zcwzDOr6wpNCmswS9AZJ0N4TXgugupB5r1vKgFfWKPz03cII3YekgQu0uR9aGzhrKpHJ87UzvijtBdgXqOwS2MePetjWEjBXE5pZNAakXQ42YxjQSemYJWLMW2ll41jSii6R/K9I3z+j8MBu/Ws7d6BP/LKAJImXgYUTTr068o9ckYN0LYnqwQk+9SmJgeLaHUrKAtL+bochYQZRl8SqM4gl3PIUWSvpE6Cjd9/pZ8xE1yv/xzXgwzY7hhg/Iwa03zhRJnZ1RnP1elCRepbMIV8ghjHovnBOvfhtfhrEiRkbGvkI3YwUxYBg6O+FNOSiYIMZTkUAicbZnVOoos88XTiCjshW30jPBz1ADq17G1BuJZDL2856mFJ1lDGpc3ndi806v4wHHDf4yExkriLaQpXoLO69jbHD3rT6d8D+rJu8EKhfWppgynlGD+ecz08BIP4Jeerqm1D+wbh2dXfdh6JZM9TDl/Ypg8Ixhg1HGktoZK4iWlDNAe3g2HAIICIRsoSkCW/OQiH7vrRb4XxuUx85l46D0m6LYW/bAwP301b2Ttgj99JAtcoJ2YYOzxGdRhiJjCW3pmhHvybB6BwSM/kmZ+vW2oIwdjItiCNoNYwnu0WC7YNF3utmZKVyMoaTqY5z3etkI1DagPF62frS+upglAiHmM8JG0t/UHnbsRfq1IFOMjBVEzqhUah7Rs1VZF6d3Prv57cJR8g1TUBidqgeBjpI9xExJd4G8ZNv0hus0heDcQppPeBKrYBnC0OglQ9kVdW+dv/GYDBiSzWKWmY/2LJZhxyi3VdfB+pquWesOJWkKkblRM7lb3Hk611zPuhncF2dKUX3Png6TlN75cgNk0GsOJKrN+hgTz5Kv8ymaYjAmdbu0TXA4H2N6Gt25TO8QxZqP+crzDetzpjQ/j0DsRr3nNrfFPYrEHT4n8D6aYmRuZkVRqSZhvQ4Jpbq5mHqNqJFImsehUjYRjX+TFZCCX/sHJn3Hj1TGznqkPBZSqC7lLi31BBJVyhwoTJQ01Nflm4Yowi96zyOt4UMIZvKhMTuRtK7AYPsATTEyThCHN8eEj6g3fvIqg4brhg/ZRe8CqmfNHDCUpXd3OKYYndxyQ7k7Byfw23OItFqX30lnLeMzEXyM98BaTNguSDXyfi6jnHxFtl5rrrgf7WzpF2ai+noblWYDB+EW1dAUI+MEce1aePprF6BxeFTnR73KKOIdzgQ7YJ1tsC/+PlVy986jTC8nINp/8gAET1GHNGn94Za9MXoXYJusA27BhO0CbW1xS1UVSBn1S3dnssNKb4pHahpTdCFU5nb3LQjEptS31cg4QbyDanyRZHIamsc36rW2IwCV2ZkSopPeTTD7CdIr8YagaCc4vKf0RpvL7qMp70iN6MLdCUcZoIs0o+CV6mN6+/EqZds9Qgq9wdN5jKsWuBovok1/hCCmGIM86H3u2UXGCWJewm+FfGZEv00UUtg/5oPMAYhiqbpqI++OjzgEDirHILUHnXbgxNufXoU2elm/bu3dmvPH1pCAf6dX8zXrdhrXfkyloO0KHVva5NMvI5eHEdyAllUIYJhPSDUdl+mTwtlFU4yME0QzGDQchxfB6e5W7q6x4z4xrs3y1xunnkccgdK79x2zBUEQ2Ral3xSlX2ik0i/QuwzBGQIm1gB72z6u7XSbMhUMmEz5kgJmnG3U2yGDKzuPDPorfJ+LEdaK6Hsj5ZBDDjnkkEMOOeSQQw455JBDDjnkkEMOOeSQQw455JBDDjnkkEMOOeSQQw455JBDDjlkGf4/BxPckuPOCMMAAAAASUVORK5CYII="

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/*!************************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/static/img/base/good-home.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgB7VU9boMwFH6USMmYI9AbZE+GZOtIbpCcoHQJEktgQQIWeoKkJ6g6dSwdmJOeoPQGrCAh+rmyK5REwVbClk968sN+ft/7sQ1Rx9BkDW3bNjBsIFOIFwSBK7NPigDOp9y5AckhQ8i2KIqnOI7zc3vvqN25i+GDOa3rej4YDO6hx5BFv9/f8cxIOQPLsoZwwKI24XivadocZcnE+mq1WmPOxRrLwAvDMJYmcBxnVFXVK1QDDuKyLL1TpeDRs+zYeLIvRwSIzEJka/7pYtMzncFB8zPIrJnpPwEviQv1kRnquj73fX9PkhAl4yRLkCRsXhdRwOE7DEx8JjgdsyiKMlJAmqaf4/H4Cz4eWLyTyUTDXKJxgh2GEertolkeXYCDvpjimLJznVzqnIHXf8l0BDxqvQdNsD5JmmZCUSLAIfhGCTYqewSBIWkvm8ERQWe4EbSi19AzCXsTN/6HFNBTMcYleiNF3JrcCtGDHA+TiWeArgSDj9kfAU7GjP8iF3Q9bPE6v1DX+AVvQZMomAvG0gAAAABJRU5ErkJggg=="

/***/ }),
/* 95 */
/*!***********************************************************************!*\
  !*** G:/HBuilder/theLianShopMiniProgram/static/img/base/good-car.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIHSURBVHgBvVVLbsJADHVSJAorbtDpCZo9SOUGpSeAGzRd8JFYBJaAEHADOEHpCQoL9uEEDTfIEgkEfa5mUIAMJIB4knFix/bY82YguhOMarX6Cy3kuw8ZtFqtBt0YD7lcTkAvIR7kEVLIZrM0m82mdEMYwRfHcTLL5ZI79NHVM90QxqEBo/yCKqDQnq9SqRQMw+hRPEwgTeTyzBAn7xPV6/WnoHG73WYoPkqQH9u2M4kQp8s/6/XaglooY6fTGUINKQYwBQdTaCSTydejjrBylVzQjbDZbPyjQliBKx8tuhLI9Z9jtVrNj0bHGwdC+OhsrxBsArYegrV7hZV/YsRuwGQhxu33+35CE8OEEAdJ8qZpFuh0By8k91geFc4x5ndTE+PyyoPMYzKAIOKUtNvtkfoeRSxZfMJa15HHPwjmQ7tjXrfbXVBEYGSvKMKTcLUdwTmXHz/RhQgSQVuI5JzpOubtiKAtlE6nPfko6AIwEWSsp2yhhZrNJq/CV+3HxSERtIUkeHyC7ymKCSYCa0UERuLExxOsKI97ysFh/aboRTKIK+HRw5GYni2USqUGGAEH2FIigSktC77v2c8FlsvlEoIj0xzf+jyyYDd3xdmOFGq1WgnjKEIGuGrGQR/+d2x08hbmU0hQRCDJB5SFhILkRblbrWEUdT6FU/Q+LDSSehjiG+t8d8cf5CwBgqGnbLEAAAAASUVORK5CYII="

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map
//# sourceMappingURL=vendor.js.map