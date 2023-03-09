import { a as algosdk, A as ABIAddressType, d as ABIArrayDynamicType, e as ABIArrayStaticType, f as ABIBoolType, h as ABIByteType, i as ABIContract, j as ABIInterface, k as ABIMethod, l as ABIReferenceType, m as ABIStringType, n as ABITransactionType, p as ABITupleType, q as ABIType, r as ABIUfixedType, s as ABIUintType, t as ADDR_BYTE_SIZE, u as ALGORAND_MIN_TX_FEE, v as AlgodClient, w as AtomicTransactionComposer, x as AtomicTransactionComposerStatus, D as DryrunResult, E as ERROR_INVALID_MICROALGOS, y as ERROR_MULTISIG_BAD_SENDER, I as INVALID_MICROALGOS_ERROR_MSG, z as IndexerClient, B as IntDecoding, K as Kmd, L as LENGTH_ENCODE_BYTE_SIZE, C as LogicSig, F as LogicSigAccount, M as MAX_LEN, G as MULTISIG_BAD_SENDER_ERROR_MSG, O as OnApplicationComplete, S as SINGLE_BOOL_SIZE, H as SINGLE_BYTE_SIZE, J as SourceMap, T as Transaction, N as TransactionType, P as abiCheckTransactionType, Q as abiTypeIsReference, R as abiTypeIsTransaction, U as algosToMicroalgos, V as appendSignMultisigTransaction, W as appendSignRawMultisigSignature, X as assignGroupID, Y as bigIntToBytes, Z as bytesToBigInt, _ as computeGroupID, $ as createDryrun, a0 as createMultisigTransaction, a1 as decodeAddress, a2 as decodeObj, a3 as decodeSignedTransaction, a4 as decodeUint64, a5 as decodeUnsignedTransaction, a6 as encodeAddress, a7 as encodeObj, a8 as encodeUint64, a9 as encodeUnsignedTransaction, aa as generateAccount, ab as getApplicationAddress, ac as getMethodByName, ad as types, ae as instantiateTxnIfNeeded, af as isTransactionWithSigner, ag as isValidAddress$1, ah as logicSigFromByte, ai as makeApplicationCallTxnFromObject, aj as makeApplicationClearStateTxn, ak as makeApplicationClearStateTxnFromObject, al as makeApplicationCloseOutTxn, am as makeApplicationCloseOutTxnFromObject, an as makeApplicationCreateTxn, ao as makeApplicationCreateTxnFromObject, ap as makeApplicationDeleteTxn, aq as makeApplicationDeleteTxnFromObject, ar as makeApplicationNoOpTxn, as as makeApplicationNoOpTxnFromObject, at as makeApplicationOptInTxn, au as makeApplicationOptInTxnFromObject, av as makeApplicationUpdateTxn, aw as makeApplicationUpdateTxnFromObject, ax as makeAssetConfigTxnWithSuggestedParams, ay as makeAssetConfigTxnWithSuggestedParamsFromObject, az as makeAssetCreateTxnWithSuggestedParams, aA as makeAssetCreateTxnWithSuggestedParamsFromObject, aB as makeAssetDestroyTxnWithSuggestedParams, aC as makeAssetDestroyTxnWithSuggestedParamsFromObject, aD as makeAssetFreezeTxnWithSuggestedParams, aE as makeAssetFreezeTxnWithSuggestedParamsFromObject, aF as makeAssetTransferTxnWithSuggestedParams, aG as makeAssetTransferTxnWithSuggestedParamsFromObject, aH as makeBasicAccountTransactionSigner, aI as makeKeyRegistrationTxnWithSuggestedParams, aJ as makeKeyRegistrationTxnWithSuggestedParamsFromObject, aK as makeLogicSigAccountTransactionSigner, aL as makeMultiSigAccountTransactionSigner, aM as makePaymentTxnWithSuggestedParams, aN as makePaymentTxnWithSuggestedParamsFromObject, aO as masterDerivationKeyToMnemonic, aP as mergeMultisigTransactions, aQ as microalgosToAlgos, aR as mnemonicFromSeed, aS as mnemonicToMasterDerivationKey, aT as mnemonicToSecretKey, aU as types$1, aV as multisigAddress, aW as secretKeyToMnemonic, aX as seedFromMnemonic, aY as signBid, aZ as signBytes, a_ as signLogicSigTransaction, a$ as signLogicSigTransactionObject, b0 as signMultisigTransaction, b1 as signTransaction, b2 as tealSign, b3 as tealSignFromProgram, b4 as verifyBytes, b5 as verifyMultisig, b6 as verifyTealSign, b7 as waitForConfirmation, b8 as require$$0, c as commonjsGlobal, b9 as getAugmentedNamespace } from "./index-4e05fa9e.js";
const esm$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ABIAddressType,
  ABIArrayDynamicType,
  ABIArrayStaticType,
  ABIBoolType,
  ABIByteType,
  ABIContract,
  ABIInterface,
  ABIMethod,
  get ABIReferenceType() {
    return ABIReferenceType;
  },
  ABIStringType,
  get ABITransactionType() {
    return ABITransactionType;
  },
  ABITupleType,
  ABIType,
  ABIUfixedType,
  ABIUintType,
  ADDR_BYTE_SIZE,
  ALGORAND_MIN_TX_FEE,
  Algodv2: AlgodClient,
  AtomicTransactionComposer,
  get AtomicTransactionComposerStatus() {
    return AtomicTransactionComposerStatus;
  },
  DryrunResult,
  ERROR_INVALID_MICROALGOS,
  ERROR_MULTISIG_BAD_SENDER,
  INVALID_MICROALGOS_ERROR_MSG,
  Indexer: IndexerClient,
  IntDecoding,
  Kmd,
  LENGTH_ENCODE_BYTE_SIZE,
  LogicSig,
  LogicSigAccount,
  MAX_LEN,
  MULTISIG_BAD_SENDER_ERROR_MSG,
  get OnApplicationComplete() {
    return OnApplicationComplete;
  },
  SINGLE_BOOL_SIZE,
  SINGLE_BYTE_SIZE,
  SourceMap,
  Transaction,
  get TransactionType() {
    return TransactionType;
  },
  abiCheckTransactionType,
  abiTypeIsReference,
  abiTypeIsTransaction,
  algosToMicroalgos,
  appendSignMultisigTransaction,
  appendSignRawMultisigSignature,
  assignGroupID,
  bigIntToBytes,
  bytesToBigInt,
  computeGroupID,
  createDryrun,
  createMultisigTransaction,
  decodeAddress,
  decodeObj,
  decodeSignedTransaction,
  decodeUint64,
  decodeUnsignedTransaction,
  default: algosdk,
  encodeAddress,
  encodeObj,
  encodeUint64,
  encodeUnsignedTransaction,
  generateAccount,
  getApplicationAddress,
  getMethodByName,
  indexerModels: types,
  instantiateTxnIfNeeded,
  isTransactionWithSigner,
  isValidAddress: isValidAddress$1,
  logicSigFromByte,
  makeApplicationCallTxnFromObject,
  makeApplicationClearStateTxn,
  makeApplicationClearStateTxnFromObject,
  makeApplicationCloseOutTxn,
  makeApplicationCloseOutTxnFromObject,
  makeApplicationCreateTxn,
  makeApplicationCreateTxnFromObject,
  makeApplicationDeleteTxn,
  makeApplicationDeleteTxnFromObject,
  makeApplicationNoOpTxn,
  makeApplicationNoOpTxnFromObject,
  makeApplicationOptInTxn,
  makeApplicationOptInTxnFromObject,
  makeApplicationUpdateTxn,
  makeApplicationUpdateTxnFromObject,
  makeAssetConfigTxnWithSuggestedParams,
  makeAssetConfigTxnWithSuggestedParamsFromObject,
  makeAssetCreateTxnWithSuggestedParams,
  makeAssetCreateTxnWithSuggestedParamsFromObject,
  makeAssetDestroyTxnWithSuggestedParams,
  makeAssetDestroyTxnWithSuggestedParamsFromObject,
  makeAssetFreezeTxnWithSuggestedParams,
  makeAssetFreezeTxnWithSuggestedParamsFromObject,
  makeAssetTransferTxnWithSuggestedParams,
  makeAssetTransferTxnWithSuggestedParamsFromObject,
  makeBasicAccountTransactionSigner,
  makeKeyRegistrationTxnWithSuggestedParams,
  makeKeyRegistrationTxnWithSuggestedParamsFromObject,
  makeLogicSigAccountTransactionSigner,
  makeMultiSigAccountTransactionSigner,
  makePaymentTxnWithSuggestedParams,
  makePaymentTxnWithSuggestedParamsFromObject,
  masterDerivationKeyToMnemonic,
  mergeMultisigTransactions,
  microalgosToAlgos,
  mnemonicFromSeed,
  mnemonicToMasterDerivationKey,
  mnemonicToSecretKey,
  modelsv2: types$1,
  multisigAddress,
  secretKeyToMnemonic,
  seedFromMnemonic,
  signBid,
  signBytes,
  signLogicSigTransaction,
  signLogicSigTransactionObject,
  signMultisigTransaction,
  signTransaction,
  tealSign,
  tealSignFromProgram,
  verifyBytes,
  verifyMultisig,
  verifyTealSign,
  waitForConfirmation
}, Symbol.toStringTag, { value: "Module" }));
var cjs$2 = {};
var cjs$1 = {};
Object.defineProperty(cjs$1, "__esModule", { value: true });
var getLocalStorage_1 = cjs$1.getLocalStorage = cjs$1.getLocalStorageOrThrow = cjs$1.getCrypto = cjs$1.getCryptoOrThrow = getLocation_1 = cjs$1.getLocation = cjs$1.getLocationOrThrow = getNavigator_1 = cjs$1.getNavigator = cjs$1.getNavigatorOrThrow = cjs$1.getDocument = cjs$1.getDocumentOrThrow = cjs$1.getFromWindowOrThrow = cjs$1.getFromWindow = void 0;
function getFromWindow(name) {
  let res = void 0;
  if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
    res = window[name];
  }
  return res;
}
cjs$1.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
  const res = getFromWindow(name);
  if (!res) {
    throw new Error(`${name} is not defined in Window`);
  }
  return res;
}
cjs$1.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
  return getFromWindowOrThrow("document");
}
cjs$1.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
  return getFromWindow("document");
}
cjs$1.getDocument = getDocument;
function getNavigatorOrThrow() {
  return getFromWindowOrThrow("navigator");
}
cjs$1.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator$1() {
  return getFromWindow("navigator");
}
var getNavigator_1 = cjs$1.getNavigator = getNavigator$1;
function getLocationOrThrow() {
  return getFromWindowOrThrow("location");
}
cjs$1.getLocationOrThrow = getLocationOrThrow;
function getLocation$1() {
  return getFromWindow("location");
}
var getLocation_1 = cjs$1.getLocation = getLocation$1;
function getCryptoOrThrow() {
  return getFromWindowOrThrow("crypto");
}
cjs$1.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
  return getFromWindow("crypto");
}
cjs$1.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
  return getFromWindowOrThrow("localStorage");
}
cjs$1.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage$1() {
  return getFromWindow("localStorage");
}
getLocalStorage_1 = cjs$1.getLocalStorage = getLocalStorage$1;
Object.defineProperty(cjs$2, "__esModule", { value: true });
var getWindowMetadata_1 = cjs$2.getWindowMetadata = void 0;
const window_getters_1 = cjs$1;
function getWindowMetadata() {
  let doc;
  let loc;
  try {
    doc = window_getters_1.getDocumentOrThrow();
    loc = window_getters_1.getLocationOrThrow();
  } catch (e) {
    return null;
  }
  function getIcons() {
    const links = doc.getElementsByTagName("link");
    const icons2 = [];
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const rel = link.getAttribute("rel");
      if (rel) {
        if (rel.toLowerCase().indexOf("icon") > -1) {
          const href = link.getAttribute("href");
          if (href) {
            if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
              let absoluteHref = loc.protocol + "//" + loc.host;
              if (href.indexOf("/") === 0) {
                absoluteHref += href;
              } else {
                const path = loc.pathname.split("/");
                path.pop();
                const finalPath = path.join("/");
                absoluteHref += finalPath + "/" + href;
              }
              icons2.push(absoluteHref);
            } else if (href.indexOf("//") === 0) {
              const absoluteUrl = loc.protocol + href;
              icons2.push(absoluteUrl);
            } else {
              icons2.push(href);
            }
          }
        }
      }
    }
    return icons2;
  }
  function getWindowMetadataOfAny(...args) {
    const metaTags = doc.getElementsByTagName("meta");
    for (let i = 0; i < metaTags.length; i++) {
      const tag = metaTags[i];
      const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
        if (attr) {
          return args.includes(attr);
        }
        return false;
      });
      if (attributes.length && attributes) {
        const content = tag.getAttribute("content");
        if (content) {
          return content;
        }
      }
    }
    return "";
  }
  function getName() {
    let name2 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
    if (!name2) {
      name2 = doc.title;
    }
    return name2;
  }
  function getDescription() {
    const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
    return description2;
  }
  const name = getName();
  const description = getDescription();
  const url = loc.origin;
  const icons = getIcons();
  const meta = {
    description,
    url,
    icons,
    name
  };
  return meta;
}
getWindowMetadata_1 = cjs$2.getWindowMetadata = getWindowMetadata;
var __spreadArrays = globalThis && globalThis.__spreadArrays || function() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
};
var BrowserInfo = (
  /** @class */
  function() {
    function BrowserInfo2(name, version, os) {
      this.name = name;
      this.version = version;
      this.os = os;
      this.type = "browser";
    }
    return BrowserInfo2;
  }()
);
var NodeInfo = (
  /** @class */
  function() {
    function NodeInfo2(version) {
      this.version = version;
      this.type = "node";
      this.name = "node";
      this.os = process.platform;
    }
    return NodeInfo2;
  }()
);
var SearchBotDeviceInfo = (
  /** @class */
  function() {
    function SearchBotDeviceInfo2(name, version, os, bot) {
      this.name = name;
      this.version = version;
      this.os = os;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo2;
  }()
);
var BotInfo = (
  /** @class */
  function() {
    function BotInfo2() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo2;
  }()
);
var ReactNativeInfo = (
  /** @class */
  function() {
    function ReactNativeInfo2() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo2;
  }()
);
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FBAV\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["searchbot", SEARCHBOX_UA_REGEX]
];
var operatingSystemRules = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua) {
  return ua !== "" && userAgentRules.reduce(function(matched, _a) {
    var browser = _a[0], regex = _a[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua);
    return !!uaMatch && [browser, uaMatch];
  }, false);
}
function parseUserAgent(ua) {
  var matchedRule = matchUserAgent(ua);
  if (!matchedRule) {
    return null;
  }
  var name = matchedRule[0], match = matchedRule[1];
  if (name === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArrays(versionParts, createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length));
    }
  } else {
    versionParts = [];
  }
  var version = versionParts.join(".");
  var os = detectOS$1(ua);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
  }
  return new BrowserInfo(name, version, os);
}
function detectOS$1(ua) {
  for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
    var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
    var match = regex.exec(ua);
    if (match) {
      return os;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode2 = typeof process !== "undefined" && process.version;
  return isNode2 ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii = 0; ii < count; ii++) {
    output.push("0");
  }
  return output;
}
function detectEnv(userAgent) {
  return detect(userAgent);
}
function detectOS() {
  const env2 = detectEnv();
  return env2 && env2.os ? env2.os : void 0;
}
function isAndroid() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("android") : false;
}
function isIOS() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("ios") || os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : false;
}
function isMobile() {
  const os = detectOS();
  return os ? isAndroid() || isIOS() : false;
}
function isNode() {
  const env2 = detectEnv();
  const result = env2 && env2.name ? env2.name.toLowerCase() === "node" : false;
  return result;
}
function isBrowser() {
  const result = !isNode() && !!getNavigator();
  return result;
}
const getNavigator = getNavigator_1;
const getLocation = getLocation_1;
const getLocalStorage = getLocalStorage_1;
function getClientMeta() {
  return getWindowMetadata_1();
}
function safeJsonParse$1(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSON.parse(value);
  } catch (_a) {
    return value;
  }
}
function safeJsonStringify$1(value) {
  return typeof value === "string" ? value : JSON.stringify(value);
}
const safeJsonParse = safeJsonParse$1;
const safeJsonStringify = safeJsonStringify$1;
function setLocal(key, data) {
  const raw = safeJsonStringify(data);
  const local = getLocalStorage();
  if (local) {
    local.setItem(key, raw);
  }
}
function getLocal(key) {
  let data = null;
  let raw = null;
  const local = getLocalStorage();
  if (local) {
    raw = local.getItem(key);
  }
  data = raw ? safeJsonParse(raw) : raw;
  return data;
}
function removeLocal(key) {
  const local = getLocalStorage();
  if (local) {
    local.removeItem(key);
  }
}
const mobileLinkChoiceKey = "WALLETCONNECT_DEEPLINK_CHOICE";
const reservedEvents = [
  "session_request",
  "session_update",
  "exchange_key",
  "connect",
  "disconnect",
  "display_uri",
  "modal_closed",
  "transport_open",
  "transport_close",
  "transport_error"
];
const signingMethods = [
  "eth_sendTransaction",
  "eth_signTransaction",
  "eth_sign",
  "eth_signTypedData",
  "eth_signTypedData_v1",
  "eth_signTypedData_v2",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "personal_sign",
  "wallet_addEthereumChain",
  "wallet_switchEthereumChain",
  "wallet_getPermissions",
  "wallet_requestPermissions",
  "wallet_registerOnboarding",
  "wallet_watchAsset",
  "wallet_scanQRCode"
];
var bnExports = {};
var bn = {
  get exports() {
    return bnExports;
  },
  set exports(v) {
    bnExports = v;
  }
};
(function(module) {
  (function(module2, exports) {
    function assert(val, msg) {
      if (!val)
        throw new Error(msg || "Assertion failed");
    }
    function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
    function BN2(number, base, endian) {
      if (BN2.isBN(number)) {
        return number;
      }
      this.negative = 0;
      this.words = null;
      this.length = 0;
      this.red = null;
      if (number !== null) {
        if (base === "le" || base === "be") {
          endian = base;
          base = 10;
        }
        this._init(number || 0, base || 10, endian || "be");
      }
    }
    if (typeof module2 === "object") {
      module2.exports = BN2;
    } else {
      exports.BN = BN2;
    }
    BN2.BN = BN2;
    BN2.wordSize = 26;
    var Buffer2;
    try {
      Buffer2 = require$$0.Buffer;
    } catch (e) {
    }
    BN2.isBN = function isBN(num) {
      if (num instanceof BN2) {
        return true;
      }
      return num !== null && typeof num === "object" && num.constructor.wordSize === BN2.wordSize && Array.isArray(num.words);
    };
    BN2.max = function max(left, right) {
      if (left.cmp(right) > 0)
        return left;
      return right;
    };
    BN2.min = function min(left, right) {
      if (left.cmp(right) < 0)
        return left;
      return right;
    };
    BN2.prototype._init = function init(number, base, endian) {
      if (typeof number === "number") {
        return this._initNumber(number, base, endian);
      }
      if (typeof number === "object") {
        return this._initArray(number, base, endian);
      }
      if (base === "hex") {
        base = 16;
      }
      assert(base === (base | 0) && base >= 2 && base <= 36);
      number = number.toString().replace(/\s+/g, "");
      var start = 0;
      if (number[0] === "-") {
        start++;
      }
      if (base === 16) {
        this._parseHex(number, start);
      } else {
        this._parseBase(number, base, start);
      }
      if (number[0] === "-") {
        this.negative = 1;
      }
      this.strip();
      if (endian !== "le")
        return;
      this._initArray(this.toArray(), base, endian);
    };
    BN2.prototype._initNumber = function _initNumber(number, base, endian) {
      if (number < 0) {
        this.negative = 1;
        number = -number;
      }
      if (number < 67108864) {
        this.words = [number & 67108863];
        this.length = 1;
      } else if (number < 4503599627370496) {
        this.words = [
          number & 67108863,
          number / 67108864 & 67108863
        ];
        this.length = 2;
      } else {
        assert(number < 9007199254740992);
        this.words = [
          number & 67108863,
          number / 67108864 & 67108863,
          1
        ];
        this.length = 3;
      }
      if (endian !== "le")
        return;
      this._initArray(this.toArray(), base, endian);
    };
    BN2.prototype._initArray = function _initArray(number, base, endian) {
      assert(typeof number.length === "number");
      if (number.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }
      this.length = Math.ceil(number.length / 3);
      this.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }
      var j, w;
      var off = 0;
      if (endian === "be") {
        for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
          w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
          this.words[j] |= w << off & 67108863;
          this.words[j + 1] = w >>> 26 - off & 67108863;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      } else if (endian === "le") {
        for (i = 0, j = 0; i < number.length; i += 3) {
          w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
          this.words[j] |= w << off & 67108863;
          this.words[j + 1] = w >>> 26 - off & 67108863;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      }
      return this.strip();
    };
    function parseHex(str, start, end) {
      var r = 0;
      var len = Math.min(str.length, end);
      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r <<= 4;
        if (c >= 49 && c <= 54) {
          r |= c - 49 + 10;
        } else if (c >= 17 && c <= 22) {
          r |= c - 17 + 10;
        } else {
          r |= c & 15;
        }
      }
      return r;
    }
    BN2.prototype._parseHex = function _parseHex(number, start) {
      this.length = Math.ceil((number.length - start) / 6);
      this.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }
      var j, w;
      var off = 0;
      for (i = number.length - 6, j = 0; i >= start; i -= 6) {
        w = parseHex(number, i, i + 6);
        this.words[j] |= w << off & 67108863;
        this.words[j + 1] |= w >>> 26 - off & 4194303;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
      if (i + 6 !== start) {
        w = parseHex(number, start, i + 6);
        this.words[j] |= w << off & 67108863;
        this.words[j + 1] |= w >>> 26 - off & 4194303;
      }
      this.strip();
    };
    function parseBase(str, start, end, mul) {
      var r = 0;
      var len = Math.min(str.length, end);
      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r *= mul;
        if (c >= 49) {
          r += c - 49 + 10;
        } else if (c >= 17) {
          r += c - 17 + 10;
        } else {
          r += c;
        }
      }
      return r;
    }
    BN2.prototype._parseBase = function _parseBase(number, base, start) {
      this.words = [0];
      this.length = 1;
      for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) {
        limbLen++;
      }
      limbLen--;
      limbPow = limbPow / base | 0;
      var total = number.length - start;
      var mod = total % limbLen;
      var end = Math.min(total, total - mod) + start;
      var word = 0;
      for (var i = start; i < end; i += limbLen) {
        word = parseBase(number, i, i + limbLen, base);
        this.imuln(limbPow);
        if (this.words[0] + word < 67108864) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
      if (mod !== 0) {
        var pow = 1;
        word = parseBase(number, i, number.length, base);
        for (i = 0; i < mod; i++) {
          pow *= base;
        }
        this.imuln(pow);
        if (this.words[0] + word < 67108864) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
    };
    BN2.prototype.copy = function copy(dest) {
      dest.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        dest.words[i] = this.words[i];
      }
      dest.length = this.length;
      dest.negative = this.negative;
      dest.red = this.red;
    };
    BN2.prototype.clone = function clone() {
      var r = new BN2(null);
      this.copy(r);
      return r;
    };
    BN2.prototype._expand = function _expand(size) {
      while (this.length < size) {
        this.words[this.length++] = 0;
      }
      return this;
    };
    BN2.prototype.strip = function strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }
      return this._normSign();
    };
    BN2.prototype._normSign = function _normSign() {
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }
      return this;
    };
    BN2.prototype.inspect = function inspect() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var zeros = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ];
    var groupSizes = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ];
    var groupBases = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    BN2.prototype.toString = function toString2(base, padding) {
      base = base || 10;
      padding = padding | 0 || 1;
      var out;
      if (base === 16 || base === "hex") {
        out = "";
        var off = 0;
        var carry = 0;
        for (var i = 0; i < this.length; i++) {
          var w = this.words[i];
          var word = ((w << off | carry) & 16777215).toString(16);
          carry = w >>> 24 - off & 16777215;
          if (carry !== 0 || i !== this.length - 1) {
            out = zeros[6 - word.length] + word + out;
          } else {
            out = word + out;
          }
          off += 2;
          if (off >= 26) {
            off -= 26;
            i--;
          }
        }
        if (carry !== 0) {
          out = carry.toString(16) + out;
        }
        while (out.length % padding !== 0) {
          out = "0" + out;
        }
        if (this.negative !== 0) {
          out = "-" + out;
        }
        return out;
      }
      if (base === (base | 0) && base >= 2 && base <= 36) {
        var groupSize = groupSizes[base];
        var groupBase = groupBases[base];
        out = "";
        var c = this.clone();
        c.negative = 0;
        while (!c.isZero()) {
          var r = c.modn(groupBase).toString(base);
          c = c.idivn(groupBase);
          if (!c.isZero()) {
            out = zeros[groupSize - r.length] + r + out;
          } else {
            out = r + out;
          }
        }
        if (this.isZero()) {
          out = "0" + out;
        }
        while (out.length % padding !== 0) {
          out = "0" + out;
        }
        if (this.negative !== 0) {
          out = "-" + out;
        }
        return out;
      }
      assert(false, "Base should be between 2 and 36");
    };
    BN2.prototype.toNumber = function toNumber() {
      var ret = this.words[0];
      if (this.length === 2) {
        ret += this.words[1] * 67108864;
      } else if (this.length === 3 && this.words[2] === 1) {
        ret += 4503599627370496 + this.words[1] * 67108864;
      } else if (this.length > 2) {
        assert(false, "Number can only safely store up to 53 bits");
      }
      return this.negative !== 0 ? -ret : ret;
    };
    BN2.prototype.toJSON = function toJSON() {
      return this.toString(16);
    };
    BN2.prototype.toBuffer = function toBuffer(endian, length) {
      assert(typeof Buffer2 !== "undefined");
      return this.toArrayLike(Buffer2, endian, length);
    };
    BN2.prototype.toArray = function toArray(endian, length) {
      return this.toArrayLike(Array, endian, length);
    };
    BN2.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
      var byteLength = this.byteLength();
      var reqLength = length || Math.max(1, byteLength);
      assert(byteLength <= reqLength, "byte array longer than desired length");
      assert(reqLength > 0, "Requested array length <= 0");
      this.strip();
      var littleEndian = endian === "le";
      var res = new ArrayType(reqLength);
      var b, i;
      var q = this.clone();
      if (!littleEndian) {
        for (i = 0; i < reqLength - byteLength; i++) {
          res[i] = 0;
        }
        for (i = 0; !q.isZero(); i++) {
          b = q.andln(255);
          q.iushrn(8);
          res[reqLength - i - 1] = b;
        }
      } else {
        for (i = 0; !q.isZero(); i++) {
          b = q.andln(255);
          q.iushrn(8);
          res[i] = b;
        }
        for (; i < reqLength; i++) {
          res[i] = 0;
        }
      }
      return res;
    };
    if (Math.clz32) {
      BN2.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
      };
    } else {
      BN2.prototype._countBits = function _countBits(w) {
        var t = w;
        var r = 0;
        if (t >= 4096) {
          r += 13;
          t >>>= 13;
        }
        if (t >= 64) {
          r += 7;
          t >>>= 7;
        }
        if (t >= 8) {
          r += 4;
          t >>>= 4;
        }
        if (t >= 2) {
          r += 2;
          t >>>= 2;
        }
        return r + t;
      };
    }
    BN2.prototype._zeroBits = function _zeroBits(w) {
      if (w === 0)
        return 26;
      var t = w;
      var r = 0;
      if ((t & 8191) === 0) {
        r += 13;
        t >>>= 13;
      }
      if ((t & 127) === 0) {
        r += 7;
        t >>>= 7;
      }
      if ((t & 15) === 0) {
        r += 4;
        t >>>= 4;
      }
      if ((t & 3) === 0) {
        r += 2;
        t >>>= 2;
      }
      if ((t & 1) === 0) {
        r++;
      }
      return r;
    };
    BN2.prototype.bitLength = function bitLength() {
      var w = this.words[this.length - 1];
      var hi = this._countBits(w);
      return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
      var w = new Array(num.bitLength());
      for (var bit = 0; bit < w.length; bit++) {
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
      }
      return w;
    }
    BN2.prototype.zeroBits = function zeroBits() {
      if (this.isZero())
        return 0;
      var r = 0;
      for (var i = 0; i < this.length; i++) {
        var b = this._zeroBits(this.words[i]);
        r += b;
        if (b !== 26)
          break;
      }
      return r;
    };
    BN2.prototype.byteLength = function byteLength() {
      return Math.ceil(this.bitLength() / 8);
    };
    BN2.prototype.toTwos = function toTwos(width) {
      if (this.negative !== 0) {
        return this.abs().inotn(width).iaddn(1);
      }
      return this.clone();
    };
    BN2.prototype.fromTwos = function fromTwos(width) {
      if (this.testn(width - 1)) {
        return this.notn(width).iaddn(1).ineg();
      }
      return this.clone();
    };
    BN2.prototype.isNeg = function isNeg() {
      return this.negative !== 0;
    };
    BN2.prototype.neg = function neg() {
      return this.clone().ineg();
    };
    BN2.prototype.ineg = function ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }
      return this;
    };
    BN2.prototype.iuor = function iuor(num) {
      while (this.length < num.length) {
        this.words[this.length++] = 0;
      }
      for (var i = 0; i < num.length; i++) {
        this.words[i] = this.words[i] | num.words[i];
      }
      return this.strip();
    };
    BN2.prototype.ior = function ior(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuor(num);
    };
    BN2.prototype.or = function or(num) {
      if (this.length > num.length)
        return this.clone().ior(num);
      return num.clone().ior(this);
    };
    BN2.prototype.uor = function uor(num) {
      if (this.length > num.length)
        return this.clone().iuor(num);
      return num.clone().iuor(this);
    };
    BN2.prototype.iuand = function iuand(num) {
      var b;
      if (this.length > num.length) {
        b = num;
      } else {
        b = this;
      }
      for (var i = 0; i < b.length; i++) {
        this.words[i] = this.words[i] & num.words[i];
      }
      this.length = b.length;
      return this.strip();
    };
    BN2.prototype.iand = function iand(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuand(num);
    };
    BN2.prototype.and = function and(num) {
      if (this.length > num.length)
        return this.clone().iand(num);
      return num.clone().iand(this);
    };
    BN2.prototype.uand = function uand(num) {
      if (this.length > num.length)
        return this.clone().iuand(num);
      return num.clone().iuand(this);
    };
    BN2.prototype.iuxor = function iuxor(num) {
      var a;
      var b;
      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      for (var i = 0; i < b.length; i++) {
        this.words[i] = a.words[i] ^ b.words[i];
      }
      if (this !== a) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      this.length = a.length;
      return this.strip();
    };
    BN2.prototype.ixor = function ixor(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuxor(num);
    };
    BN2.prototype.xor = function xor(num) {
      if (this.length > num.length)
        return this.clone().ixor(num);
      return num.clone().ixor(this);
    };
    BN2.prototype.uxor = function uxor(num) {
      if (this.length > num.length)
        return this.clone().iuxor(num);
      return num.clone().iuxor(this);
    };
    BN2.prototype.inotn = function inotn(width) {
      assert(typeof width === "number" && width >= 0);
      var bytesNeeded = Math.ceil(width / 26) | 0;
      var bitsLeft = width % 26;
      this._expand(bytesNeeded);
      if (bitsLeft > 0) {
        bytesNeeded--;
      }
      for (var i = 0; i < bytesNeeded; i++) {
        this.words[i] = ~this.words[i] & 67108863;
      }
      if (bitsLeft > 0) {
        this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
      }
      return this.strip();
    };
    BN2.prototype.notn = function notn(width) {
      return this.clone().inotn(width);
    };
    BN2.prototype.setn = function setn(bit, val) {
      assert(typeof bit === "number" && bit >= 0);
      var off = bit / 26 | 0;
      var wbit = bit % 26;
      this._expand(off + 1);
      if (val) {
        this.words[off] = this.words[off] | 1 << wbit;
      } else {
        this.words[off] = this.words[off] & ~(1 << wbit);
      }
      return this.strip();
    };
    BN2.prototype.iadd = function iadd(num) {
      var r;
      if (this.negative !== 0 && num.negative === 0) {
        this.negative = 0;
        r = this.isub(num);
        this.negative ^= 1;
        return this._normSign();
      } else if (this.negative === 0 && num.negative !== 0) {
        num.negative = 0;
        r = this.isub(num);
        num.negative = 1;
        return r._normSign();
      }
      var a, b;
      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      var carry = 0;
      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
        this.words[i] = r & 67108863;
        carry = r >>> 26;
      }
      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        this.words[i] = r & 67108863;
        carry = r >>> 26;
      }
      this.length = a.length;
      if (carry !== 0) {
        this.words[this.length] = carry;
        this.length++;
      } else if (a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      return this;
    };
    BN2.prototype.add = function add(num) {
      var res;
      if (num.negative !== 0 && this.negative === 0) {
        num.negative = 0;
        res = this.sub(num);
        num.negative ^= 1;
        return res;
      } else if (num.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        res = num.sub(this);
        this.negative = 1;
        return res;
      }
      if (this.length > num.length)
        return this.clone().iadd(num);
      return num.clone().iadd(this);
    };
    BN2.prototype.isub = function isub(num) {
      if (num.negative !== 0) {
        num.negative = 0;
        var r = this.iadd(num);
        num.negative = 1;
        return r._normSign();
      } else if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(num);
        this.negative = 1;
        return this._normSign();
      }
      var cmp = this.cmp(num);
      if (cmp === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      }
      var a, b;
      if (cmp > 0) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      var carry = 0;
      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 67108863;
      }
      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 67108863;
      }
      if (carry === 0 && i < a.length && a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      this.length = Math.max(this.length, i);
      if (a !== this) {
        this.negative = 1;
      }
      return this.strip();
    };
    BN2.prototype.sub = function sub(num) {
      return this.clone().isub(num);
    };
    function smallMulTo(self2, num, out) {
      out.negative = num.negative ^ self2.negative;
      var len = self2.length + num.length | 0;
      out.length = len;
      len = len - 1 | 0;
      var a = self2.words[0] | 0;
      var b = num.words[0] | 0;
      var r = a * b;
      var lo = r & 67108863;
      var carry = r / 67108864 | 0;
      out.words[0] = lo;
      for (var k = 1; k < len; k++) {
        var ncarry = carry >>> 26;
        var rword = carry & 67108863;
        var maxJ = Math.min(k, num.length - 1);
        for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
          var i = k - j | 0;
          a = self2.words[i] | 0;
          b = num.words[j] | 0;
          r = a * b + rword;
          ncarry += r / 67108864 | 0;
          rword = r & 67108863;
        }
        out.words[k] = rword | 0;
        carry = ncarry | 0;
      }
      if (carry !== 0) {
        out.words[k] = carry | 0;
      } else {
        out.length--;
      }
      return out.strip();
    }
    var comb10MulTo = function comb10MulTo2(self2, num, out) {
      var a = self2.words;
      var b = num.words;
      var o = out.words;
      var c = 0;
      var lo;
      var mid;
      var hi;
      var a0 = a[0] | 0;
      var al0 = a0 & 8191;
      var ah0 = a0 >>> 13;
      var a1 = a[1] | 0;
      var al1 = a1 & 8191;
      var ah1 = a1 >>> 13;
      var a2 = a[2] | 0;
      var al2 = a2 & 8191;
      var ah2 = a2 >>> 13;
      var a3 = a[3] | 0;
      var al3 = a3 & 8191;
      var ah3 = a3 >>> 13;
      var a4 = a[4] | 0;
      var al4 = a4 & 8191;
      var ah4 = a4 >>> 13;
      var a5 = a[5] | 0;
      var al5 = a5 & 8191;
      var ah5 = a5 >>> 13;
      var a6 = a[6] | 0;
      var al6 = a6 & 8191;
      var ah6 = a6 >>> 13;
      var a7 = a[7] | 0;
      var al7 = a7 & 8191;
      var ah7 = a7 >>> 13;
      var a8 = a[8] | 0;
      var al8 = a8 & 8191;
      var ah8 = a8 >>> 13;
      var a9 = a[9] | 0;
      var al9 = a9 & 8191;
      var ah9 = a9 >>> 13;
      var b0 = b[0] | 0;
      var bl0 = b0 & 8191;
      var bh0 = b0 >>> 13;
      var b1 = b[1] | 0;
      var bl1 = b1 & 8191;
      var bh1 = b1 >>> 13;
      var b2 = b[2] | 0;
      var bl2 = b2 & 8191;
      var bh2 = b2 >>> 13;
      var b3 = b[3] | 0;
      var bl3 = b3 & 8191;
      var bh3 = b3 >>> 13;
      var b4 = b[4] | 0;
      var bl4 = b4 & 8191;
      var bh4 = b4 >>> 13;
      var b5 = b[5] | 0;
      var bl5 = b5 & 8191;
      var bh5 = b5 >>> 13;
      var b6 = b[6] | 0;
      var bl6 = b6 & 8191;
      var bh6 = b6 >>> 13;
      var b7 = b[7] | 0;
      var bl7 = b7 & 8191;
      var bh7 = b7 >>> 13;
      var b8 = b[8] | 0;
      var bl8 = b8 & 8191;
      var bh8 = b8 >>> 13;
      var b9 = b[9] | 0;
      var bl9 = b9 & 8191;
      var bh9 = b9 >>> 13;
      out.negative = self2.negative ^ num.negative;
      out.length = 19;
      lo = Math.imul(al0, bl0);
      mid = Math.imul(al0, bh0);
      mid = mid + Math.imul(ah0, bl0) | 0;
      hi = Math.imul(ah0, bh0);
      var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
      w0 &= 67108863;
      lo = Math.imul(al1, bl0);
      mid = Math.imul(al1, bh0);
      mid = mid + Math.imul(ah1, bl0) | 0;
      hi = Math.imul(ah1, bh0);
      lo = lo + Math.imul(al0, bl1) | 0;
      mid = mid + Math.imul(al0, bh1) | 0;
      mid = mid + Math.imul(ah0, bl1) | 0;
      hi = hi + Math.imul(ah0, bh1) | 0;
      var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
      w1 &= 67108863;
      lo = Math.imul(al2, bl0);
      mid = Math.imul(al2, bh0);
      mid = mid + Math.imul(ah2, bl0) | 0;
      hi = Math.imul(ah2, bh0);
      lo = lo + Math.imul(al1, bl1) | 0;
      mid = mid + Math.imul(al1, bh1) | 0;
      mid = mid + Math.imul(ah1, bl1) | 0;
      hi = hi + Math.imul(ah1, bh1) | 0;
      lo = lo + Math.imul(al0, bl2) | 0;
      mid = mid + Math.imul(al0, bh2) | 0;
      mid = mid + Math.imul(ah0, bl2) | 0;
      hi = hi + Math.imul(ah0, bh2) | 0;
      var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
      w2 &= 67108863;
      lo = Math.imul(al3, bl0);
      mid = Math.imul(al3, bh0);
      mid = mid + Math.imul(ah3, bl0) | 0;
      hi = Math.imul(ah3, bh0);
      lo = lo + Math.imul(al2, bl1) | 0;
      mid = mid + Math.imul(al2, bh1) | 0;
      mid = mid + Math.imul(ah2, bl1) | 0;
      hi = hi + Math.imul(ah2, bh1) | 0;
      lo = lo + Math.imul(al1, bl2) | 0;
      mid = mid + Math.imul(al1, bh2) | 0;
      mid = mid + Math.imul(ah1, bl2) | 0;
      hi = hi + Math.imul(ah1, bh2) | 0;
      lo = lo + Math.imul(al0, bl3) | 0;
      mid = mid + Math.imul(al0, bh3) | 0;
      mid = mid + Math.imul(ah0, bl3) | 0;
      hi = hi + Math.imul(ah0, bh3) | 0;
      var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
      w3 &= 67108863;
      lo = Math.imul(al4, bl0);
      mid = Math.imul(al4, bh0);
      mid = mid + Math.imul(ah4, bl0) | 0;
      hi = Math.imul(ah4, bh0);
      lo = lo + Math.imul(al3, bl1) | 0;
      mid = mid + Math.imul(al3, bh1) | 0;
      mid = mid + Math.imul(ah3, bl1) | 0;
      hi = hi + Math.imul(ah3, bh1) | 0;
      lo = lo + Math.imul(al2, bl2) | 0;
      mid = mid + Math.imul(al2, bh2) | 0;
      mid = mid + Math.imul(ah2, bl2) | 0;
      hi = hi + Math.imul(ah2, bh2) | 0;
      lo = lo + Math.imul(al1, bl3) | 0;
      mid = mid + Math.imul(al1, bh3) | 0;
      mid = mid + Math.imul(ah1, bl3) | 0;
      hi = hi + Math.imul(ah1, bh3) | 0;
      lo = lo + Math.imul(al0, bl4) | 0;
      mid = mid + Math.imul(al0, bh4) | 0;
      mid = mid + Math.imul(ah0, bl4) | 0;
      hi = hi + Math.imul(ah0, bh4) | 0;
      var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
      w4 &= 67108863;
      lo = Math.imul(al5, bl0);
      mid = Math.imul(al5, bh0);
      mid = mid + Math.imul(ah5, bl0) | 0;
      hi = Math.imul(ah5, bh0);
      lo = lo + Math.imul(al4, bl1) | 0;
      mid = mid + Math.imul(al4, bh1) | 0;
      mid = mid + Math.imul(ah4, bl1) | 0;
      hi = hi + Math.imul(ah4, bh1) | 0;
      lo = lo + Math.imul(al3, bl2) | 0;
      mid = mid + Math.imul(al3, bh2) | 0;
      mid = mid + Math.imul(ah3, bl2) | 0;
      hi = hi + Math.imul(ah3, bh2) | 0;
      lo = lo + Math.imul(al2, bl3) | 0;
      mid = mid + Math.imul(al2, bh3) | 0;
      mid = mid + Math.imul(ah2, bl3) | 0;
      hi = hi + Math.imul(ah2, bh3) | 0;
      lo = lo + Math.imul(al1, bl4) | 0;
      mid = mid + Math.imul(al1, bh4) | 0;
      mid = mid + Math.imul(ah1, bl4) | 0;
      hi = hi + Math.imul(ah1, bh4) | 0;
      lo = lo + Math.imul(al0, bl5) | 0;
      mid = mid + Math.imul(al0, bh5) | 0;
      mid = mid + Math.imul(ah0, bl5) | 0;
      hi = hi + Math.imul(ah0, bh5) | 0;
      var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
      w5 &= 67108863;
      lo = Math.imul(al6, bl0);
      mid = Math.imul(al6, bh0);
      mid = mid + Math.imul(ah6, bl0) | 0;
      hi = Math.imul(ah6, bh0);
      lo = lo + Math.imul(al5, bl1) | 0;
      mid = mid + Math.imul(al5, bh1) | 0;
      mid = mid + Math.imul(ah5, bl1) | 0;
      hi = hi + Math.imul(ah5, bh1) | 0;
      lo = lo + Math.imul(al4, bl2) | 0;
      mid = mid + Math.imul(al4, bh2) | 0;
      mid = mid + Math.imul(ah4, bl2) | 0;
      hi = hi + Math.imul(ah4, bh2) | 0;
      lo = lo + Math.imul(al3, bl3) | 0;
      mid = mid + Math.imul(al3, bh3) | 0;
      mid = mid + Math.imul(ah3, bl3) | 0;
      hi = hi + Math.imul(ah3, bh3) | 0;
      lo = lo + Math.imul(al2, bl4) | 0;
      mid = mid + Math.imul(al2, bh4) | 0;
      mid = mid + Math.imul(ah2, bl4) | 0;
      hi = hi + Math.imul(ah2, bh4) | 0;
      lo = lo + Math.imul(al1, bl5) | 0;
      mid = mid + Math.imul(al1, bh5) | 0;
      mid = mid + Math.imul(ah1, bl5) | 0;
      hi = hi + Math.imul(ah1, bh5) | 0;
      lo = lo + Math.imul(al0, bl6) | 0;
      mid = mid + Math.imul(al0, bh6) | 0;
      mid = mid + Math.imul(ah0, bl6) | 0;
      hi = hi + Math.imul(ah0, bh6) | 0;
      var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
      w6 &= 67108863;
      lo = Math.imul(al7, bl0);
      mid = Math.imul(al7, bh0);
      mid = mid + Math.imul(ah7, bl0) | 0;
      hi = Math.imul(ah7, bh0);
      lo = lo + Math.imul(al6, bl1) | 0;
      mid = mid + Math.imul(al6, bh1) | 0;
      mid = mid + Math.imul(ah6, bl1) | 0;
      hi = hi + Math.imul(ah6, bh1) | 0;
      lo = lo + Math.imul(al5, bl2) | 0;
      mid = mid + Math.imul(al5, bh2) | 0;
      mid = mid + Math.imul(ah5, bl2) | 0;
      hi = hi + Math.imul(ah5, bh2) | 0;
      lo = lo + Math.imul(al4, bl3) | 0;
      mid = mid + Math.imul(al4, bh3) | 0;
      mid = mid + Math.imul(ah4, bl3) | 0;
      hi = hi + Math.imul(ah4, bh3) | 0;
      lo = lo + Math.imul(al3, bl4) | 0;
      mid = mid + Math.imul(al3, bh4) | 0;
      mid = mid + Math.imul(ah3, bl4) | 0;
      hi = hi + Math.imul(ah3, bh4) | 0;
      lo = lo + Math.imul(al2, bl5) | 0;
      mid = mid + Math.imul(al2, bh5) | 0;
      mid = mid + Math.imul(ah2, bl5) | 0;
      hi = hi + Math.imul(ah2, bh5) | 0;
      lo = lo + Math.imul(al1, bl6) | 0;
      mid = mid + Math.imul(al1, bh6) | 0;
      mid = mid + Math.imul(ah1, bl6) | 0;
      hi = hi + Math.imul(ah1, bh6) | 0;
      lo = lo + Math.imul(al0, bl7) | 0;
      mid = mid + Math.imul(al0, bh7) | 0;
      mid = mid + Math.imul(ah0, bl7) | 0;
      hi = hi + Math.imul(ah0, bh7) | 0;
      var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
      w7 &= 67108863;
      lo = Math.imul(al8, bl0);
      mid = Math.imul(al8, bh0);
      mid = mid + Math.imul(ah8, bl0) | 0;
      hi = Math.imul(ah8, bh0);
      lo = lo + Math.imul(al7, bl1) | 0;
      mid = mid + Math.imul(al7, bh1) | 0;
      mid = mid + Math.imul(ah7, bl1) | 0;
      hi = hi + Math.imul(ah7, bh1) | 0;
      lo = lo + Math.imul(al6, bl2) | 0;
      mid = mid + Math.imul(al6, bh2) | 0;
      mid = mid + Math.imul(ah6, bl2) | 0;
      hi = hi + Math.imul(ah6, bh2) | 0;
      lo = lo + Math.imul(al5, bl3) | 0;
      mid = mid + Math.imul(al5, bh3) | 0;
      mid = mid + Math.imul(ah5, bl3) | 0;
      hi = hi + Math.imul(ah5, bh3) | 0;
      lo = lo + Math.imul(al4, bl4) | 0;
      mid = mid + Math.imul(al4, bh4) | 0;
      mid = mid + Math.imul(ah4, bl4) | 0;
      hi = hi + Math.imul(ah4, bh4) | 0;
      lo = lo + Math.imul(al3, bl5) | 0;
      mid = mid + Math.imul(al3, bh5) | 0;
      mid = mid + Math.imul(ah3, bl5) | 0;
      hi = hi + Math.imul(ah3, bh5) | 0;
      lo = lo + Math.imul(al2, bl6) | 0;
      mid = mid + Math.imul(al2, bh6) | 0;
      mid = mid + Math.imul(ah2, bl6) | 0;
      hi = hi + Math.imul(ah2, bh6) | 0;
      lo = lo + Math.imul(al1, bl7) | 0;
      mid = mid + Math.imul(al1, bh7) | 0;
      mid = mid + Math.imul(ah1, bl7) | 0;
      hi = hi + Math.imul(ah1, bh7) | 0;
      lo = lo + Math.imul(al0, bl8) | 0;
      mid = mid + Math.imul(al0, bh8) | 0;
      mid = mid + Math.imul(ah0, bl8) | 0;
      hi = hi + Math.imul(ah0, bh8) | 0;
      var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
      w8 &= 67108863;
      lo = Math.imul(al9, bl0);
      mid = Math.imul(al9, bh0);
      mid = mid + Math.imul(ah9, bl0) | 0;
      hi = Math.imul(ah9, bh0);
      lo = lo + Math.imul(al8, bl1) | 0;
      mid = mid + Math.imul(al8, bh1) | 0;
      mid = mid + Math.imul(ah8, bl1) | 0;
      hi = hi + Math.imul(ah8, bh1) | 0;
      lo = lo + Math.imul(al7, bl2) | 0;
      mid = mid + Math.imul(al7, bh2) | 0;
      mid = mid + Math.imul(ah7, bl2) | 0;
      hi = hi + Math.imul(ah7, bh2) | 0;
      lo = lo + Math.imul(al6, bl3) | 0;
      mid = mid + Math.imul(al6, bh3) | 0;
      mid = mid + Math.imul(ah6, bl3) | 0;
      hi = hi + Math.imul(ah6, bh3) | 0;
      lo = lo + Math.imul(al5, bl4) | 0;
      mid = mid + Math.imul(al5, bh4) | 0;
      mid = mid + Math.imul(ah5, bl4) | 0;
      hi = hi + Math.imul(ah5, bh4) | 0;
      lo = lo + Math.imul(al4, bl5) | 0;
      mid = mid + Math.imul(al4, bh5) | 0;
      mid = mid + Math.imul(ah4, bl5) | 0;
      hi = hi + Math.imul(ah4, bh5) | 0;
      lo = lo + Math.imul(al3, bl6) | 0;
      mid = mid + Math.imul(al3, bh6) | 0;
      mid = mid + Math.imul(ah3, bl6) | 0;
      hi = hi + Math.imul(ah3, bh6) | 0;
      lo = lo + Math.imul(al2, bl7) | 0;
      mid = mid + Math.imul(al2, bh7) | 0;
      mid = mid + Math.imul(ah2, bl7) | 0;
      hi = hi + Math.imul(ah2, bh7) | 0;
      lo = lo + Math.imul(al1, bl8) | 0;
      mid = mid + Math.imul(al1, bh8) | 0;
      mid = mid + Math.imul(ah1, bl8) | 0;
      hi = hi + Math.imul(ah1, bh8) | 0;
      lo = lo + Math.imul(al0, bl9) | 0;
      mid = mid + Math.imul(al0, bh9) | 0;
      mid = mid + Math.imul(ah0, bl9) | 0;
      hi = hi + Math.imul(ah0, bh9) | 0;
      var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
      w9 &= 67108863;
      lo = Math.imul(al9, bl1);
      mid = Math.imul(al9, bh1);
      mid = mid + Math.imul(ah9, bl1) | 0;
      hi = Math.imul(ah9, bh1);
      lo = lo + Math.imul(al8, bl2) | 0;
      mid = mid + Math.imul(al8, bh2) | 0;
      mid = mid + Math.imul(ah8, bl2) | 0;
      hi = hi + Math.imul(ah8, bh2) | 0;
      lo = lo + Math.imul(al7, bl3) | 0;
      mid = mid + Math.imul(al7, bh3) | 0;
      mid = mid + Math.imul(ah7, bl3) | 0;
      hi = hi + Math.imul(ah7, bh3) | 0;
      lo = lo + Math.imul(al6, bl4) | 0;
      mid = mid + Math.imul(al6, bh4) | 0;
      mid = mid + Math.imul(ah6, bl4) | 0;
      hi = hi + Math.imul(ah6, bh4) | 0;
      lo = lo + Math.imul(al5, bl5) | 0;
      mid = mid + Math.imul(al5, bh5) | 0;
      mid = mid + Math.imul(ah5, bl5) | 0;
      hi = hi + Math.imul(ah5, bh5) | 0;
      lo = lo + Math.imul(al4, bl6) | 0;
      mid = mid + Math.imul(al4, bh6) | 0;
      mid = mid + Math.imul(ah4, bl6) | 0;
      hi = hi + Math.imul(ah4, bh6) | 0;
      lo = lo + Math.imul(al3, bl7) | 0;
      mid = mid + Math.imul(al3, bh7) | 0;
      mid = mid + Math.imul(ah3, bl7) | 0;
      hi = hi + Math.imul(ah3, bh7) | 0;
      lo = lo + Math.imul(al2, bl8) | 0;
      mid = mid + Math.imul(al2, bh8) | 0;
      mid = mid + Math.imul(ah2, bl8) | 0;
      hi = hi + Math.imul(ah2, bh8) | 0;
      lo = lo + Math.imul(al1, bl9) | 0;
      mid = mid + Math.imul(al1, bh9) | 0;
      mid = mid + Math.imul(ah1, bl9) | 0;
      hi = hi + Math.imul(ah1, bh9) | 0;
      var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
      w10 &= 67108863;
      lo = Math.imul(al9, bl2);
      mid = Math.imul(al9, bh2);
      mid = mid + Math.imul(ah9, bl2) | 0;
      hi = Math.imul(ah9, bh2);
      lo = lo + Math.imul(al8, bl3) | 0;
      mid = mid + Math.imul(al8, bh3) | 0;
      mid = mid + Math.imul(ah8, bl3) | 0;
      hi = hi + Math.imul(ah8, bh3) | 0;
      lo = lo + Math.imul(al7, bl4) | 0;
      mid = mid + Math.imul(al7, bh4) | 0;
      mid = mid + Math.imul(ah7, bl4) | 0;
      hi = hi + Math.imul(ah7, bh4) | 0;
      lo = lo + Math.imul(al6, bl5) | 0;
      mid = mid + Math.imul(al6, bh5) | 0;
      mid = mid + Math.imul(ah6, bl5) | 0;
      hi = hi + Math.imul(ah6, bh5) | 0;
      lo = lo + Math.imul(al5, bl6) | 0;
      mid = mid + Math.imul(al5, bh6) | 0;
      mid = mid + Math.imul(ah5, bl6) | 0;
      hi = hi + Math.imul(ah5, bh6) | 0;
      lo = lo + Math.imul(al4, bl7) | 0;
      mid = mid + Math.imul(al4, bh7) | 0;
      mid = mid + Math.imul(ah4, bl7) | 0;
      hi = hi + Math.imul(ah4, bh7) | 0;
      lo = lo + Math.imul(al3, bl8) | 0;
      mid = mid + Math.imul(al3, bh8) | 0;
      mid = mid + Math.imul(ah3, bl8) | 0;
      hi = hi + Math.imul(ah3, bh8) | 0;
      lo = lo + Math.imul(al2, bl9) | 0;
      mid = mid + Math.imul(al2, bh9) | 0;
      mid = mid + Math.imul(ah2, bl9) | 0;
      hi = hi + Math.imul(ah2, bh9) | 0;
      var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
      w11 &= 67108863;
      lo = Math.imul(al9, bl3);
      mid = Math.imul(al9, bh3);
      mid = mid + Math.imul(ah9, bl3) | 0;
      hi = Math.imul(ah9, bh3);
      lo = lo + Math.imul(al8, bl4) | 0;
      mid = mid + Math.imul(al8, bh4) | 0;
      mid = mid + Math.imul(ah8, bl4) | 0;
      hi = hi + Math.imul(ah8, bh4) | 0;
      lo = lo + Math.imul(al7, bl5) | 0;
      mid = mid + Math.imul(al7, bh5) | 0;
      mid = mid + Math.imul(ah7, bl5) | 0;
      hi = hi + Math.imul(ah7, bh5) | 0;
      lo = lo + Math.imul(al6, bl6) | 0;
      mid = mid + Math.imul(al6, bh6) | 0;
      mid = mid + Math.imul(ah6, bl6) | 0;
      hi = hi + Math.imul(ah6, bh6) | 0;
      lo = lo + Math.imul(al5, bl7) | 0;
      mid = mid + Math.imul(al5, bh7) | 0;
      mid = mid + Math.imul(ah5, bl7) | 0;
      hi = hi + Math.imul(ah5, bh7) | 0;
      lo = lo + Math.imul(al4, bl8) | 0;
      mid = mid + Math.imul(al4, bh8) | 0;
      mid = mid + Math.imul(ah4, bl8) | 0;
      hi = hi + Math.imul(ah4, bh8) | 0;
      lo = lo + Math.imul(al3, bl9) | 0;
      mid = mid + Math.imul(al3, bh9) | 0;
      mid = mid + Math.imul(ah3, bl9) | 0;
      hi = hi + Math.imul(ah3, bh9) | 0;
      var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
      w12 &= 67108863;
      lo = Math.imul(al9, bl4);
      mid = Math.imul(al9, bh4);
      mid = mid + Math.imul(ah9, bl4) | 0;
      hi = Math.imul(ah9, bh4);
      lo = lo + Math.imul(al8, bl5) | 0;
      mid = mid + Math.imul(al8, bh5) | 0;
      mid = mid + Math.imul(ah8, bl5) | 0;
      hi = hi + Math.imul(ah8, bh5) | 0;
      lo = lo + Math.imul(al7, bl6) | 0;
      mid = mid + Math.imul(al7, bh6) | 0;
      mid = mid + Math.imul(ah7, bl6) | 0;
      hi = hi + Math.imul(ah7, bh6) | 0;
      lo = lo + Math.imul(al6, bl7) | 0;
      mid = mid + Math.imul(al6, bh7) | 0;
      mid = mid + Math.imul(ah6, bl7) | 0;
      hi = hi + Math.imul(ah6, bh7) | 0;
      lo = lo + Math.imul(al5, bl8) | 0;
      mid = mid + Math.imul(al5, bh8) | 0;
      mid = mid + Math.imul(ah5, bl8) | 0;
      hi = hi + Math.imul(ah5, bh8) | 0;
      lo = lo + Math.imul(al4, bl9) | 0;
      mid = mid + Math.imul(al4, bh9) | 0;
      mid = mid + Math.imul(ah4, bl9) | 0;
      hi = hi + Math.imul(ah4, bh9) | 0;
      var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
      w13 &= 67108863;
      lo = Math.imul(al9, bl5);
      mid = Math.imul(al9, bh5);
      mid = mid + Math.imul(ah9, bl5) | 0;
      hi = Math.imul(ah9, bh5);
      lo = lo + Math.imul(al8, bl6) | 0;
      mid = mid + Math.imul(al8, bh6) | 0;
      mid = mid + Math.imul(ah8, bl6) | 0;
      hi = hi + Math.imul(ah8, bh6) | 0;
      lo = lo + Math.imul(al7, bl7) | 0;
      mid = mid + Math.imul(al7, bh7) | 0;
      mid = mid + Math.imul(ah7, bl7) | 0;
      hi = hi + Math.imul(ah7, bh7) | 0;
      lo = lo + Math.imul(al6, bl8) | 0;
      mid = mid + Math.imul(al6, bh8) | 0;
      mid = mid + Math.imul(ah6, bl8) | 0;
      hi = hi + Math.imul(ah6, bh8) | 0;
      lo = lo + Math.imul(al5, bl9) | 0;
      mid = mid + Math.imul(al5, bh9) | 0;
      mid = mid + Math.imul(ah5, bl9) | 0;
      hi = hi + Math.imul(ah5, bh9) | 0;
      var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
      w14 &= 67108863;
      lo = Math.imul(al9, bl6);
      mid = Math.imul(al9, bh6);
      mid = mid + Math.imul(ah9, bl6) | 0;
      hi = Math.imul(ah9, bh6);
      lo = lo + Math.imul(al8, bl7) | 0;
      mid = mid + Math.imul(al8, bh7) | 0;
      mid = mid + Math.imul(ah8, bl7) | 0;
      hi = hi + Math.imul(ah8, bh7) | 0;
      lo = lo + Math.imul(al7, bl8) | 0;
      mid = mid + Math.imul(al7, bh8) | 0;
      mid = mid + Math.imul(ah7, bl8) | 0;
      hi = hi + Math.imul(ah7, bh8) | 0;
      lo = lo + Math.imul(al6, bl9) | 0;
      mid = mid + Math.imul(al6, bh9) | 0;
      mid = mid + Math.imul(ah6, bl9) | 0;
      hi = hi + Math.imul(ah6, bh9) | 0;
      var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
      w15 &= 67108863;
      lo = Math.imul(al9, bl7);
      mid = Math.imul(al9, bh7);
      mid = mid + Math.imul(ah9, bl7) | 0;
      hi = Math.imul(ah9, bh7);
      lo = lo + Math.imul(al8, bl8) | 0;
      mid = mid + Math.imul(al8, bh8) | 0;
      mid = mid + Math.imul(ah8, bl8) | 0;
      hi = hi + Math.imul(ah8, bh8) | 0;
      lo = lo + Math.imul(al7, bl9) | 0;
      mid = mid + Math.imul(al7, bh9) | 0;
      mid = mid + Math.imul(ah7, bl9) | 0;
      hi = hi + Math.imul(ah7, bh9) | 0;
      var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
      w16 &= 67108863;
      lo = Math.imul(al9, bl8);
      mid = Math.imul(al9, bh8);
      mid = mid + Math.imul(ah9, bl8) | 0;
      hi = Math.imul(ah9, bh8);
      lo = lo + Math.imul(al8, bl9) | 0;
      mid = mid + Math.imul(al8, bh9) | 0;
      mid = mid + Math.imul(ah8, bl9) | 0;
      hi = hi + Math.imul(ah8, bh9) | 0;
      var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
      w17 &= 67108863;
      lo = Math.imul(al9, bl9);
      mid = Math.imul(al9, bh9);
      mid = mid + Math.imul(ah9, bl9) | 0;
      hi = Math.imul(ah9, bh9);
      var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
      w18 &= 67108863;
      o[0] = w0;
      o[1] = w1;
      o[2] = w2;
      o[3] = w3;
      o[4] = w4;
      o[5] = w5;
      o[6] = w6;
      o[7] = w7;
      o[8] = w8;
      o[9] = w9;
      o[10] = w10;
      o[11] = w11;
      o[12] = w12;
      o[13] = w13;
      o[14] = w14;
      o[15] = w15;
      o[16] = w16;
      o[17] = w17;
      o[18] = w18;
      if (c !== 0) {
        o[19] = c;
        out.length++;
      }
      return out;
    };
    if (!Math.imul) {
      comb10MulTo = smallMulTo;
    }
    function bigMulTo(self2, num, out) {
      out.negative = num.negative ^ self2.negative;
      out.length = self2.length + num.length;
      var carry = 0;
      var hncarry = 0;
      for (var k = 0; k < out.length - 1; k++) {
        var ncarry = hncarry;
        hncarry = 0;
        var rword = carry & 67108863;
        var maxJ = Math.min(k, num.length - 1);
        for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
          var i = k - j;
          var a = self2.words[i] | 0;
          var b = num.words[j] | 0;
          var r = a * b;
          var lo = r & 67108863;
          ncarry = ncarry + (r / 67108864 | 0) | 0;
          lo = lo + rword | 0;
          rword = lo & 67108863;
          ncarry = ncarry + (lo >>> 26) | 0;
          hncarry += ncarry >>> 26;
          ncarry &= 67108863;
        }
        out.words[k] = rword;
        carry = ncarry;
        ncarry = hncarry;
      }
      if (carry !== 0) {
        out.words[k] = carry;
      } else {
        out.length--;
      }
      return out.strip();
    }
    function jumboMulTo(self2, num, out) {
      var fftm = new FFTM();
      return fftm.mulp(self2, num, out);
    }
    BN2.prototype.mulTo = function mulTo(num, out) {
      var res;
      var len = this.length + num.length;
      if (this.length === 10 && num.length === 10) {
        res = comb10MulTo(this, num, out);
      } else if (len < 63) {
        res = smallMulTo(this, num, out);
      } else if (len < 1024) {
        res = bigMulTo(this, num, out);
      } else {
        res = jumboMulTo(this, num, out);
      }
      return res;
    };
    function FFTM(x, y) {
      this.x = x;
      this.y = y;
    }
    FFTM.prototype.makeRBT = function makeRBT(N) {
      var t = new Array(N);
      var l = BN2.prototype._countBits(N) - 1;
      for (var i = 0; i < N; i++) {
        t[i] = this.revBin(i, l, N);
      }
      return t;
    };
    FFTM.prototype.revBin = function revBin(x, l, N) {
      if (x === 0 || x === N - 1)
        return x;
      var rb = 0;
      for (var i = 0; i < l; i++) {
        rb |= (x & 1) << l - i - 1;
        x >>= 1;
      }
      return rb;
    };
    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
      for (var i = 0; i < N; i++) {
        rtws[i] = rws[rbt[i]];
        itws[i] = iws[rbt[i]];
      }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
      this.permute(rbt, rws, iws, rtws, itws, N);
      for (var s = 1; s < N; s <<= 1) {
        var l = s << 1;
        var rtwdf = Math.cos(2 * Math.PI / l);
        var itwdf = Math.sin(2 * Math.PI / l);
        for (var p = 0; p < N; p += l) {
          var rtwdf_ = rtwdf;
          var itwdf_ = itwdf;
          for (var j = 0; j < s; j++) {
            var re = rtws[p + j];
            var ie = itws[p + j];
            var ro = rtws[p + j + s];
            var io = itws[p + j + s];
            var rx = rtwdf_ * ro - itwdf_ * io;
            io = rtwdf_ * io + itwdf_ * ro;
            ro = rx;
            rtws[p + j] = re + ro;
            itws[p + j] = ie + io;
            rtws[p + j + s] = re - ro;
            itws[p + j + s] = ie - io;
            if (j !== l) {
              rx = rtwdf * rtwdf_ - itwdf * itwdf_;
              itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
              rtwdf_ = rx;
            }
          }
        }
      }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
      var N = Math.max(m, n) | 1;
      var odd = N & 1;
      var i = 0;
      for (N = N / 2 | 0; N; N = N >>> 1) {
        i++;
      }
      return 1 << i + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
      if (N <= 1)
        return;
      for (var i = 0; i < N / 2; i++) {
        var t = rws[i];
        rws[i] = rws[N - i - 1];
        rws[N - i - 1] = t;
        t = iws[i];
        iws[i] = -iws[N - i - 1];
        iws[N - i - 1] = -t;
      }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws, N) {
      var carry = 0;
      for (var i = 0; i < N / 2; i++) {
        var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
        ws[i] = w & 67108863;
        if (w < 67108864) {
          carry = 0;
        } else {
          carry = w / 67108864 | 0;
        }
      }
      return ws;
    };
    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
      var carry = 0;
      for (var i = 0; i < len; i++) {
        carry = carry + (ws[i] | 0);
        rws[2 * i] = carry & 8191;
        carry = carry >>> 13;
        rws[2 * i + 1] = carry & 8191;
        carry = carry >>> 13;
      }
      for (i = 2 * len; i < N; ++i) {
        rws[i] = 0;
      }
      assert(carry === 0);
      assert((carry & ~8191) === 0);
    };
    FFTM.prototype.stub = function stub(N) {
      var ph = new Array(N);
      for (var i = 0; i < N; i++) {
        ph[i] = 0;
      }
      return ph;
    };
    FFTM.prototype.mulp = function mulp(x, y, out) {
      var N = 2 * this.guessLen13b(x.length, y.length);
      var rbt = this.makeRBT(N);
      var _ = this.stub(N);
      var rws = new Array(N);
      var rwst = new Array(N);
      var iwst = new Array(N);
      var nrws = new Array(N);
      var nrwst = new Array(N);
      var niwst = new Array(N);
      var rmws = out.words;
      rmws.length = N;
      this.convert13b(x.words, x.length, rws, N);
      this.convert13b(y.words, y.length, nrws, N);
      this.transform(rws, _, rwst, iwst, N, rbt);
      this.transform(nrws, _, nrwst, niwst, N, rbt);
      for (var i = 0; i < N; i++) {
        var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
        iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
        rwst[i] = rx;
      }
      this.conjugate(rwst, iwst, N);
      this.transform(rwst, iwst, rmws, _, N, rbt);
      this.conjugate(rmws, _, N);
      this.normalize13b(rmws, N);
      out.negative = x.negative ^ y.negative;
      out.length = x.length + y.length;
      return out.strip();
    };
    BN2.prototype.mul = function mul(num) {
      var out = new BN2(null);
      out.words = new Array(this.length + num.length);
      return this.mulTo(num, out);
    };
    BN2.prototype.mulf = function mulf(num) {
      var out = new BN2(null);
      out.words = new Array(this.length + num.length);
      return jumboMulTo(this, num, out);
    };
    BN2.prototype.imul = function imul(num) {
      return this.clone().mulTo(num, this);
    };
    BN2.prototype.imuln = function imuln(num) {
      assert(typeof num === "number");
      assert(num < 67108864);
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = (this.words[i] | 0) * num;
        var lo = (w & 67108863) + (carry & 67108863);
        carry >>= 26;
        carry += w / 67108864 | 0;
        carry += lo >>> 26;
        this.words[i] = lo & 67108863;
      }
      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }
      return this;
    };
    BN2.prototype.muln = function muln(num) {
      return this.clone().imuln(num);
    };
    BN2.prototype.sqr = function sqr() {
      return this.mul(this);
    };
    BN2.prototype.isqr = function isqr() {
      return this.imul(this.clone());
    };
    BN2.prototype.pow = function pow(num) {
      var w = toBitArray(num);
      if (w.length === 0)
        return new BN2(1);
      var res = this;
      for (var i = 0; i < w.length; i++, res = res.sqr()) {
        if (w[i] !== 0)
          break;
      }
      if (++i < w.length) {
        for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
          if (w[i] === 0)
            continue;
          res = res.mul(q);
        }
      }
      return res;
    };
    BN2.prototype.iushln = function iushln(bits) {
      assert(typeof bits === "number" && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      var carryMask = 67108863 >>> 26 - r << 26 - r;
      var i;
      if (r !== 0) {
        var carry = 0;
        for (i = 0; i < this.length; i++) {
          var newCarry = this.words[i] & carryMask;
          var c = (this.words[i] | 0) - newCarry << r;
          this.words[i] = c | carry;
          carry = newCarry >>> 26 - r;
        }
        if (carry) {
          this.words[i] = carry;
          this.length++;
        }
      }
      if (s !== 0) {
        for (i = this.length - 1; i >= 0; i--) {
          this.words[i + s] = this.words[i];
        }
        for (i = 0; i < s; i++) {
          this.words[i] = 0;
        }
        this.length += s;
      }
      return this.strip();
    };
    BN2.prototype.ishln = function ishln(bits) {
      assert(this.negative === 0);
      return this.iushln(bits);
    };
    BN2.prototype.iushrn = function iushrn(bits, hint, extended) {
      assert(typeof bits === "number" && bits >= 0);
      var h;
      if (hint) {
        h = (hint - hint % 26) / 26;
      } else {
        h = 0;
      }
      var r = bits % 26;
      var s = Math.min((bits - r) / 26, this.length);
      var mask = 67108863 ^ 67108863 >>> r << r;
      var maskedWords = extended;
      h -= s;
      h = Math.max(0, h);
      if (maskedWords) {
        for (var i = 0; i < s; i++) {
          maskedWords.words[i] = this.words[i];
        }
        maskedWords.length = s;
      }
      if (s === 0)
        ;
      else if (this.length > s) {
        this.length -= s;
        for (i = 0; i < this.length; i++) {
          this.words[i] = this.words[i + s];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }
      var carry = 0;
      for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
        var word = this.words[i] | 0;
        this.words[i] = carry << 26 - r | word >>> r;
        carry = word & mask;
      }
      if (maskedWords && carry !== 0) {
        maskedWords.words[maskedWords.length++] = carry;
      }
      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }
      return this.strip();
    };
    BN2.prototype.ishrn = function ishrn(bits, hint, extended) {
      assert(this.negative === 0);
      return this.iushrn(bits, hint, extended);
    };
    BN2.prototype.shln = function shln(bits) {
      return this.clone().ishln(bits);
    };
    BN2.prototype.ushln = function ushln(bits) {
      return this.clone().iushln(bits);
    };
    BN2.prototype.shrn = function shrn(bits) {
      return this.clone().ishrn(bits);
    };
    BN2.prototype.ushrn = function ushrn(bits) {
      return this.clone().iushrn(bits);
    };
    BN2.prototype.testn = function testn(bit) {
      assert(typeof bit === "number" && bit >= 0);
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r;
      if (this.length <= s)
        return false;
      var w = this.words[s];
      return !!(w & q);
    };
    BN2.prototype.imaskn = function imaskn(bits) {
      assert(typeof bits === "number" && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      assert(this.negative === 0, "imaskn works only with positive numbers");
      if (this.length <= s) {
        return this;
      }
      if (r !== 0) {
        s++;
      }
      this.length = Math.min(s, this.length);
      if (r !== 0) {
        var mask = 67108863 ^ 67108863 >>> r << r;
        this.words[this.length - 1] &= mask;
      }
      return this.strip();
    };
    BN2.prototype.maskn = function maskn(bits) {
      return this.clone().imaskn(bits);
    };
    BN2.prototype.iaddn = function iaddn(num) {
      assert(typeof num === "number");
      assert(num < 67108864);
      if (num < 0)
        return this.isubn(-num);
      if (this.negative !== 0) {
        if (this.length === 1 && (this.words[0] | 0) < num) {
          this.words[0] = num - (this.words[0] | 0);
          this.negative = 0;
          return this;
        }
        this.negative = 0;
        this.isubn(num);
        this.negative = 1;
        return this;
      }
      return this._iaddn(num);
    };
    BN2.prototype._iaddn = function _iaddn(num) {
      this.words[0] += num;
      for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
        this.words[i] -= 67108864;
        if (i === this.length - 1) {
          this.words[i + 1] = 1;
        } else {
          this.words[i + 1]++;
        }
      }
      this.length = Math.max(this.length, i + 1);
      return this;
    };
    BN2.prototype.isubn = function isubn(num) {
      assert(typeof num === "number");
      assert(num < 67108864);
      if (num < 0)
        return this.iaddn(-num);
      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(num);
        this.negative = 1;
        return this;
      }
      this.words[0] -= num;
      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        for (var i = 0; i < this.length && this.words[i] < 0; i++) {
          this.words[i] += 67108864;
          this.words[i + 1] -= 1;
        }
      }
      return this.strip();
    };
    BN2.prototype.addn = function addn(num) {
      return this.clone().iaddn(num);
    };
    BN2.prototype.subn = function subn(num) {
      return this.clone().isubn(num);
    };
    BN2.prototype.iabs = function iabs() {
      this.negative = 0;
      return this;
    };
    BN2.prototype.abs = function abs() {
      return this.clone().iabs();
    };
    BN2.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
      var len = num.length + shift;
      var i;
      this._expand(len);
      var w;
      var carry = 0;
      for (i = 0; i < num.length; i++) {
        w = (this.words[i + shift] | 0) + carry;
        var right = (num.words[i] | 0) * mul;
        w -= right & 67108863;
        carry = (w >> 26) - (right / 67108864 | 0);
        this.words[i + shift] = w & 67108863;
      }
      for (; i < this.length - shift; i++) {
        w = (this.words[i + shift] | 0) + carry;
        carry = w >> 26;
        this.words[i + shift] = w & 67108863;
      }
      if (carry === 0)
        return this.strip();
      assert(carry === -1);
      carry = 0;
      for (i = 0; i < this.length; i++) {
        w = -(this.words[i] | 0) + carry;
        carry = w >> 26;
        this.words[i] = w & 67108863;
      }
      this.negative = 1;
      return this.strip();
    };
    BN2.prototype._wordDiv = function _wordDiv(num, mode) {
      var shift = this.length - num.length;
      var a = this.clone();
      var b = num;
      var bhi = b.words[b.length - 1] | 0;
      var bhiBits = this._countBits(bhi);
      shift = 26 - bhiBits;
      if (shift !== 0) {
        b = b.ushln(shift);
        a.iushln(shift);
        bhi = b.words[b.length - 1] | 0;
      }
      var m = a.length - b.length;
      var q;
      if (mode !== "mod") {
        q = new BN2(null);
        q.length = m + 1;
        q.words = new Array(q.length);
        for (var i = 0; i < q.length; i++) {
          q.words[i] = 0;
        }
      }
      var diff = a.clone()._ishlnsubmul(b, 1, m);
      if (diff.negative === 0) {
        a = diff;
        if (q) {
          q.words[m] = 1;
        }
      }
      for (var j = m - 1; j >= 0; j--) {
        var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
        qj = Math.min(qj / bhi | 0, 67108863);
        a._ishlnsubmul(b, qj, j);
        while (a.negative !== 0) {
          qj--;
          a.negative = 0;
          a._ishlnsubmul(b, 1, j);
          if (!a.isZero()) {
            a.negative ^= 1;
          }
        }
        if (q) {
          q.words[j] = qj;
        }
      }
      if (q) {
        q.strip();
      }
      a.strip();
      if (mode !== "div" && shift !== 0) {
        a.iushrn(shift);
      }
      return {
        div: q || null,
        mod: a
      };
    };
    BN2.prototype.divmod = function divmod(num, mode, positive) {
      assert(!num.isZero());
      if (this.isZero()) {
        return {
          div: new BN2(0),
          mod: new BN2(0)
        };
      }
      var div, mod, res;
      if (this.negative !== 0 && num.negative === 0) {
        res = this.neg().divmod(num, mode);
        if (mode !== "mod") {
          div = res.div.neg();
        }
        if (mode !== "div") {
          mod = res.mod.neg();
          if (positive && mod.negative !== 0) {
            mod.iadd(num);
          }
        }
        return {
          div,
          mod
        };
      }
      if (this.negative === 0 && num.negative !== 0) {
        res = this.divmod(num.neg(), mode);
        if (mode !== "mod") {
          div = res.div.neg();
        }
        return {
          div,
          mod: res.mod
        };
      }
      if ((this.negative & num.negative) !== 0) {
        res = this.neg().divmod(num.neg(), mode);
        if (mode !== "div") {
          mod = res.mod.neg();
          if (positive && mod.negative !== 0) {
            mod.isub(num);
          }
        }
        return {
          div: res.div,
          mod
        };
      }
      if (num.length > this.length || this.cmp(num) < 0) {
        return {
          div: new BN2(0),
          mod: this
        };
      }
      if (num.length === 1) {
        if (mode === "div") {
          return {
            div: this.divn(num.words[0]),
            mod: null
          };
        }
        if (mode === "mod") {
          return {
            div: null,
            mod: new BN2(this.modn(num.words[0]))
          };
        }
        return {
          div: this.divn(num.words[0]),
          mod: new BN2(this.modn(num.words[0]))
        };
      }
      return this._wordDiv(num, mode);
    };
    BN2.prototype.div = function div(num) {
      return this.divmod(num, "div", false).div;
    };
    BN2.prototype.mod = function mod(num) {
      return this.divmod(num, "mod", false).mod;
    };
    BN2.prototype.umod = function umod(num) {
      return this.divmod(num, "mod", true).mod;
    };
    BN2.prototype.divRound = function divRound(num) {
      var dm = this.divmod(num);
      if (dm.mod.isZero())
        return dm.div;
      var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
      var half = num.ushrn(1);
      var r2 = num.andln(1);
      var cmp = mod.cmp(half);
      if (cmp < 0 || r2 === 1 && cmp === 0)
        return dm.div;
      return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN2.prototype.modn = function modn(num) {
      assert(num <= 67108863);
      var p = (1 << 26) % num;
      var acc = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        acc = (p * acc + (this.words[i] | 0)) % num;
      }
      return acc;
    };
    BN2.prototype.idivn = function idivn(num) {
      assert(num <= 67108863);
      var carry = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        var w = (this.words[i] | 0) + carry * 67108864;
        this.words[i] = w / num | 0;
        carry = w % num;
      }
      return this.strip();
    };
    BN2.prototype.divn = function divn(num) {
      return this.clone().idivn(num);
    };
    BN2.prototype.egcd = function egcd(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var x = this;
      var y = p.clone();
      if (x.negative !== 0) {
        x = x.umod(p);
      } else {
        x = x.clone();
      }
      var A = new BN2(1);
      var B = new BN2(0);
      var C = new BN2(0);
      var D = new BN2(1);
      var g = 0;
      while (x.isEven() && y.isEven()) {
        x.iushrn(1);
        y.iushrn(1);
        ++g;
      }
      var yp = y.clone();
      var xp = x.clone();
      while (!x.isZero()) {
        for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
          ;
        if (i > 0) {
          x.iushrn(i);
          while (i-- > 0) {
            if (A.isOdd() || B.isOdd()) {
              A.iadd(yp);
              B.isub(xp);
            }
            A.iushrn(1);
            B.iushrn(1);
          }
        }
        for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
          ;
        if (j > 0) {
          y.iushrn(j);
          while (j-- > 0) {
            if (C.isOdd() || D.isOdd()) {
              C.iadd(yp);
              D.isub(xp);
            }
            C.iushrn(1);
            D.iushrn(1);
          }
        }
        if (x.cmp(y) >= 0) {
          x.isub(y);
          A.isub(C);
          B.isub(D);
        } else {
          y.isub(x);
          C.isub(A);
          D.isub(B);
        }
      }
      return {
        a: C,
        b: D,
        gcd: y.iushln(g)
      };
    };
    BN2.prototype._invmp = function _invmp(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var a = this;
      var b = p.clone();
      if (a.negative !== 0) {
        a = a.umod(p);
      } else {
        a = a.clone();
      }
      var x1 = new BN2(1);
      var x2 = new BN2(0);
      var delta = b.clone();
      while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
        for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
          ;
        if (i > 0) {
          a.iushrn(i);
          while (i-- > 0) {
            if (x1.isOdd()) {
              x1.iadd(delta);
            }
            x1.iushrn(1);
          }
        }
        for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
          ;
        if (j > 0) {
          b.iushrn(j);
          while (j-- > 0) {
            if (x2.isOdd()) {
              x2.iadd(delta);
            }
            x2.iushrn(1);
          }
        }
        if (a.cmp(b) >= 0) {
          a.isub(b);
          x1.isub(x2);
        } else {
          b.isub(a);
          x2.isub(x1);
        }
      }
      var res;
      if (a.cmpn(1) === 0) {
        res = x1;
      } else {
        res = x2;
      }
      if (res.cmpn(0) < 0) {
        res.iadd(p);
      }
      return res;
    };
    BN2.prototype.gcd = function gcd(num) {
      if (this.isZero())
        return num.abs();
      if (num.isZero())
        return this.abs();
      var a = this.clone();
      var b = num.clone();
      a.negative = 0;
      b.negative = 0;
      for (var shift = 0; a.isEven() && b.isEven(); shift++) {
        a.iushrn(1);
        b.iushrn(1);
      }
      do {
        while (a.isEven()) {
          a.iushrn(1);
        }
        while (b.isEven()) {
          b.iushrn(1);
        }
        var r = a.cmp(b);
        if (r < 0) {
          var t = a;
          a = b;
          b = t;
        } else if (r === 0 || b.cmpn(1) === 0) {
          break;
        }
        a.isub(b);
      } while (true);
      return b.iushln(shift);
    };
    BN2.prototype.invm = function invm(num) {
      return this.egcd(num).a.umod(num);
    };
    BN2.prototype.isEven = function isEven() {
      return (this.words[0] & 1) === 0;
    };
    BN2.prototype.isOdd = function isOdd() {
      return (this.words[0] & 1) === 1;
    };
    BN2.prototype.andln = function andln(num) {
      return this.words[0] & num;
    };
    BN2.prototype.bincn = function bincn(bit) {
      assert(typeof bit === "number");
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r;
      if (this.length <= s) {
        this._expand(s + 1);
        this.words[s] |= q;
        return this;
      }
      var carry = q;
      for (var i = s; carry !== 0 && i < this.length; i++) {
        var w = this.words[i] | 0;
        w += carry;
        carry = w >>> 26;
        w &= 67108863;
        this.words[i] = w;
      }
      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }
      return this;
    };
    BN2.prototype.isZero = function isZero() {
      return this.length === 1 && this.words[0] === 0;
    };
    BN2.prototype.cmpn = function cmpn(num) {
      var negative = num < 0;
      if (this.negative !== 0 && !negative)
        return -1;
      if (this.negative === 0 && negative)
        return 1;
      this.strip();
      var res;
      if (this.length > 1) {
        res = 1;
      } else {
        if (negative) {
          num = -num;
        }
        assert(num <= 67108863, "Number is too big");
        var w = this.words[0] | 0;
        res = w === num ? 0 : w < num ? -1 : 1;
      }
      if (this.negative !== 0)
        return -res | 0;
      return res;
    };
    BN2.prototype.cmp = function cmp(num) {
      if (this.negative !== 0 && num.negative === 0)
        return -1;
      if (this.negative === 0 && num.negative !== 0)
        return 1;
      var res = this.ucmp(num);
      if (this.negative !== 0)
        return -res | 0;
      return res;
    };
    BN2.prototype.ucmp = function ucmp(num) {
      if (this.length > num.length)
        return 1;
      if (this.length < num.length)
        return -1;
      var res = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        var a = this.words[i] | 0;
        var b = num.words[i] | 0;
        if (a === b)
          continue;
        if (a < b) {
          res = -1;
        } else if (a > b) {
          res = 1;
        }
        break;
      }
      return res;
    };
    BN2.prototype.gtn = function gtn(num) {
      return this.cmpn(num) === 1;
    };
    BN2.prototype.gt = function gt(num) {
      return this.cmp(num) === 1;
    };
    BN2.prototype.gten = function gten(num) {
      return this.cmpn(num) >= 0;
    };
    BN2.prototype.gte = function gte(num) {
      return this.cmp(num) >= 0;
    };
    BN2.prototype.ltn = function ltn(num) {
      return this.cmpn(num) === -1;
    };
    BN2.prototype.lt = function lt(num) {
      return this.cmp(num) === -1;
    };
    BN2.prototype.lten = function lten(num) {
      return this.cmpn(num) <= 0;
    };
    BN2.prototype.lte = function lte(num) {
      return this.cmp(num) <= 0;
    };
    BN2.prototype.eqn = function eqn(num) {
      return this.cmpn(num) === 0;
    };
    BN2.prototype.eq = function eq(num) {
      return this.cmp(num) === 0;
    };
    BN2.red = function red(num) {
      return new Red(num);
    };
    BN2.prototype.toRed = function toRed(ctx) {
      assert(!this.red, "Already a number in reduction context");
      assert(this.negative === 0, "red works only with positives");
      return ctx.convertTo(this)._forceRed(ctx);
    };
    BN2.prototype.fromRed = function fromRed() {
      assert(this.red, "fromRed works only with numbers in reduction context");
      return this.red.convertFrom(this);
    };
    BN2.prototype._forceRed = function _forceRed(ctx) {
      this.red = ctx;
      return this;
    };
    BN2.prototype.forceRed = function forceRed(ctx) {
      assert(!this.red, "Already a number in reduction context");
      return this._forceRed(ctx);
    };
    BN2.prototype.redAdd = function redAdd(num) {
      assert(this.red, "redAdd works only with red numbers");
      return this.red.add(this, num);
    };
    BN2.prototype.redIAdd = function redIAdd(num) {
      assert(this.red, "redIAdd works only with red numbers");
      return this.red.iadd(this, num);
    };
    BN2.prototype.redSub = function redSub(num) {
      assert(this.red, "redSub works only with red numbers");
      return this.red.sub(this, num);
    };
    BN2.prototype.redISub = function redISub(num) {
      assert(this.red, "redISub works only with red numbers");
      return this.red.isub(this, num);
    };
    BN2.prototype.redShl = function redShl(num) {
      assert(this.red, "redShl works only with red numbers");
      return this.red.shl(this, num);
    };
    BN2.prototype.redMul = function redMul(num) {
      assert(this.red, "redMul works only with red numbers");
      this.red._verify2(this, num);
      return this.red.mul(this, num);
    };
    BN2.prototype.redIMul = function redIMul(num) {
      assert(this.red, "redMul works only with red numbers");
      this.red._verify2(this, num);
      return this.red.imul(this, num);
    };
    BN2.prototype.redSqr = function redSqr() {
      assert(this.red, "redSqr works only with red numbers");
      this.red._verify1(this);
      return this.red.sqr(this);
    };
    BN2.prototype.redISqr = function redISqr() {
      assert(this.red, "redISqr works only with red numbers");
      this.red._verify1(this);
      return this.red.isqr(this);
    };
    BN2.prototype.redSqrt = function redSqrt() {
      assert(this.red, "redSqrt works only with red numbers");
      this.red._verify1(this);
      return this.red.sqrt(this);
    };
    BN2.prototype.redInvm = function redInvm() {
      assert(this.red, "redInvm works only with red numbers");
      this.red._verify1(this);
      return this.red.invm(this);
    };
    BN2.prototype.redNeg = function redNeg() {
      assert(this.red, "redNeg works only with red numbers");
      this.red._verify1(this);
      return this.red.neg(this);
    };
    BN2.prototype.redPow = function redPow(num) {
      assert(this.red && !num.red, "redPow(normalNum)");
      this.red._verify1(this);
      return this.red.pow(this, num);
    };
    var primes = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function MPrime(name, p) {
      this.name = name;
      this.p = new BN2(p, 16);
      this.n = this.p.bitLength();
      this.k = new BN2(1).iushln(this.n).isub(this.p);
      this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
      var tmp = new BN2(null);
      tmp.words = new Array(Math.ceil(this.n / 13));
      return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
      var r = num;
      var rlen;
      do {
        this.split(r, this.tmp);
        r = this.imulK(r);
        r = r.iadd(this.tmp);
        rlen = r.bitLength();
      } while (rlen > this.n);
      var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
      if (cmp === 0) {
        r.words[0] = 0;
        r.length = 1;
      } else if (cmp > 0) {
        r.isub(this.p);
      } else {
        r.strip();
      }
      return r;
    };
    MPrime.prototype.split = function split(input, out) {
      input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
      return num.imul(this.k);
    };
    function K256() {
      MPrime.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    inherits(K256, MPrime);
    K256.prototype.split = function split(input, output) {
      var mask = 4194303;
      var outLen = Math.min(input.length, 9);
      for (var i = 0; i < outLen; i++) {
        output.words[i] = input.words[i];
      }
      output.length = outLen;
      if (input.length <= 9) {
        input.words[0] = 0;
        input.length = 1;
        return;
      }
      var prev = input.words[9];
      output.words[output.length++] = prev & mask;
      for (i = 10; i < input.length; i++) {
        var next = input.words[i] | 0;
        input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
        prev = next;
      }
      prev >>>= 22;
      input.words[i - 10] = prev;
      if (prev === 0 && input.length > 10) {
        input.length -= 10;
      } else {
        input.length -= 9;
      }
    };
    K256.prototype.imulK = function imulK(num) {
      num.words[num.length] = 0;
      num.words[num.length + 1] = 0;
      num.length += 2;
      var lo = 0;
      for (var i = 0; i < num.length; i++) {
        var w = num.words[i] | 0;
        lo += w * 977;
        num.words[i] = lo & 67108863;
        lo = w * 64 + (lo / 67108864 | 0);
      }
      if (num.words[num.length - 1] === 0) {
        num.length--;
        if (num.words[num.length - 1] === 0) {
          num.length--;
        }
      }
      return num;
    };
    function P224() {
      MPrime.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    inherits(P224, MPrime);
    function P192() {
      MPrime.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    inherits(P192, MPrime);
    function P25519() {
      MPrime.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    inherits(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
      var carry = 0;
      for (var i = 0; i < num.length; i++) {
        var hi = (num.words[i] | 0) * 19 + carry;
        var lo = hi & 67108863;
        hi >>>= 26;
        num.words[i] = lo;
        carry = hi;
      }
      if (carry !== 0) {
        num.words[num.length++] = carry;
      }
      return num;
    };
    BN2._prime = function prime(name) {
      if (primes[name])
        return primes[name];
      var prime2;
      if (name === "k256") {
        prime2 = new K256();
      } else if (name === "p224") {
        prime2 = new P224();
      } else if (name === "p192") {
        prime2 = new P192();
      } else if (name === "p25519") {
        prime2 = new P25519();
      } else {
        throw new Error("Unknown prime " + name);
      }
      primes[name] = prime2;
      return prime2;
    };
    function Red(m) {
      if (typeof m === "string") {
        var prime = BN2._prime(m);
        this.m = prime.p;
        this.prime = prime;
      } else {
        assert(m.gtn(1), "modulus must be greater than 1");
        this.m = m;
        this.prime = null;
      }
    }
    Red.prototype._verify1 = function _verify1(a) {
      assert(a.negative === 0, "red works only with positives");
      assert(a.red, "red works only with red numbers");
    };
    Red.prototype._verify2 = function _verify2(a, b) {
      assert((a.negative | b.negative) === 0, "red works only with positives");
      assert(
        a.red && a.red === b.red,
        "red works only with red numbers"
      );
    };
    Red.prototype.imod = function imod(a) {
      if (this.prime)
        return this.prime.ireduce(a)._forceRed(this);
      return a.umod(this.m)._forceRed(this);
    };
    Red.prototype.neg = function neg(a) {
      if (a.isZero()) {
        return a.clone();
      }
      return this.m.sub(a)._forceRed(this);
    };
    Red.prototype.add = function add(a, b) {
      this._verify2(a, b);
      var res = a.add(b);
      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }
      return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd(a, b) {
      this._verify2(a, b);
      var res = a.iadd(b);
      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }
      return res;
    };
    Red.prototype.sub = function sub(a, b) {
      this._verify2(a, b);
      var res = a.sub(b);
      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Red.prototype.isub = function isub(a, b) {
      this._verify2(a, b);
      var res = a.isub(b);
      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }
      return res;
    };
    Red.prototype.shl = function shl(a, num) {
      this._verify1(a);
      return this.imod(a.ushln(num));
    };
    Red.prototype.imul = function imul(a, b) {
      this._verify2(a, b);
      return this.imod(a.imul(b));
    };
    Red.prototype.mul = function mul(a, b) {
      this._verify2(a, b);
      return this.imod(a.mul(b));
    };
    Red.prototype.isqr = function isqr(a) {
      return this.imul(a, a.clone());
    };
    Red.prototype.sqr = function sqr(a) {
      return this.mul(a, a);
    };
    Red.prototype.sqrt = function sqrt(a) {
      if (a.isZero())
        return a.clone();
      var mod3 = this.m.andln(3);
      assert(mod3 % 2 === 1);
      if (mod3 === 3) {
        var pow = this.m.add(new BN2(1)).iushrn(2);
        return this.pow(a, pow);
      }
      var q = this.m.subn(1);
      var s = 0;
      while (!q.isZero() && q.andln(1) === 0) {
        s++;
        q.iushrn(1);
      }
      assert(!q.isZero());
      var one = new BN2(1).toRed(this);
      var nOne = one.redNeg();
      var lpow = this.m.subn(1).iushrn(1);
      var z = this.m.bitLength();
      z = new BN2(2 * z * z).toRed(this);
      while (this.pow(z, lpow).cmp(nOne) !== 0) {
        z.redIAdd(nOne);
      }
      var c = this.pow(z, q);
      var r = this.pow(a, q.addn(1).iushrn(1));
      var t = this.pow(a, q);
      var m = s;
      while (t.cmp(one) !== 0) {
        var tmp = t;
        for (var i = 0; tmp.cmp(one) !== 0; i++) {
          tmp = tmp.redSqr();
        }
        assert(i < m);
        var b = this.pow(c, new BN2(1).iushln(m - i - 1));
        r = r.redMul(b);
        c = b.redSqr();
        t = t.redMul(c);
        m = i;
      }
      return r;
    };
    Red.prototype.invm = function invm(a) {
      var inv = a._invmp(this.m);
      if (inv.negative !== 0) {
        inv.negative = 0;
        return this.imod(inv).redNeg();
      } else {
        return this.imod(inv);
      }
    };
    Red.prototype.pow = function pow(a, num) {
      if (num.isZero())
        return new BN2(1).toRed(this);
      if (num.cmpn(1) === 0)
        return a.clone();
      var windowSize = 4;
      var wnd = new Array(1 << windowSize);
      wnd[0] = new BN2(1).toRed(this);
      wnd[1] = a;
      for (var i = 2; i < wnd.length; i++) {
        wnd[i] = this.mul(wnd[i - 1], a);
      }
      var res = wnd[0];
      var current = 0;
      var currentLen = 0;
      var start = num.bitLength() % 26;
      if (start === 0) {
        start = 26;
      }
      for (i = num.length - 1; i >= 0; i--) {
        var word = num.words[i];
        for (var j = start - 1; j >= 0; j--) {
          var bit = word >> j & 1;
          if (res !== wnd[0]) {
            res = this.sqr(res);
          }
          if (bit === 0 && current === 0) {
            currentLen = 0;
            continue;
          }
          current <<= 1;
          current |= bit;
          currentLen++;
          if (currentLen !== windowSize && (i !== 0 || j !== 0))
            continue;
          res = this.mul(res, wnd[current]);
          currentLen = 0;
          current = 0;
        }
        start = 26;
      }
      return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
      var r = num.umod(this.m);
      return r === num ? r.clone() : r;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
      var res = num.clone();
      res.red = null;
      return res;
    };
    BN2.mont = function mont(num) {
      return new Mont(num);
    };
    function Mont(m) {
      Red.call(this, m);
      this.shift = this.m.bitLength();
      if (this.shift % 26 !== 0) {
        this.shift += 26 - this.shift % 26;
      }
      this.r = new BN2(1).iushln(this.shift);
      this.r2 = this.imod(this.r.sqr());
      this.rinv = this.r._invmp(this.m);
      this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
      this.minv = this.minv.umod(this.r);
      this.minv = this.r.sub(this.minv);
    }
    inherits(Mont, Red);
    Mont.prototype.convertTo = function convertTo(num) {
      return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom(num) {
      var r = this.imod(num.mul(this.rinv));
      r.red = null;
      return r;
    };
    Mont.prototype.imul = function imul(a, b) {
      if (a.isZero() || b.isZero()) {
        a.words[0] = 0;
        a.length = 1;
        return a;
      }
      var t = a.imul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;
      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Mont.prototype.mul = function mul(a, b) {
      if (a.isZero() || b.isZero())
        return new BN2(0)._forceRed(this);
      var t = a.mul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;
      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Mont.prototype.invm = function invm(a) {
      var res = this.imod(a._invmp(this.m).mul(this.r2));
      return res._forceRed(this);
    };
  })(module, commonjsGlobal);
})(bn);
const BN = bnExports;
var isTypedarray = isTypedArray$1;
isTypedArray$1.strict = isStrictTypedArray;
isTypedArray$1.loose = isLooseTypedArray;
var toString = Object.prototype.toString;
var names = {
  "[object Int8Array]": true,
  "[object Int16Array]": true,
  "[object Int32Array]": true,
  "[object Uint8Array]": true,
  "[object Uint8ClampedArray]": true,
  "[object Uint16Array]": true,
  "[object Uint32Array]": true,
  "[object Float32Array]": true,
  "[object Float64Array]": true
};
function isTypedArray$1(arr) {
  return isStrictTypedArray(arr) || isLooseTypedArray(arr);
}
function isStrictTypedArray(arr) {
  return arr instanceof Int8Array || arr instanceof Int16Array || arr instanceof Int32Array || arr instanceof Uint8Array || arr instanceof Uint8ClampedArray || arr instanceof Uint16Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;
}
function isLooseTypedArray(arr) {
  return names[toString.call(arr)];
}
var isTypedArray = isTypedarray.strict;
var typedarrayToBuffer = function typedarrayToBuffer2(arr) {
  if (isTypedArray(arr)) {
    var buf = Buffer.from(arr.buffer);
    if (arr.byteLength !== arr.buffer.byteLength) {
      buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
    }
    return buf;
  } else {
    return Buffer.from(arr);
  }
};
const ENC_HEX = "hex";
const ENC_UTF8 = "utf8";
const STRING_ZERO = "0";
function bufferToArray(buf) {
  return new Uint8Array(buf);
}
function bufferToHex(buf, prefixed = false) {
  const hex = buf.toString(ENC_HEX);
  return prefixed ? addHexPrefix(hex) : hex;
}
function bufferToUtf8(buf) {
  return buf.toString(ENC_UTF8);
}
function arrayToBuffer(arr) {
  return typedarrayToBuffer(arr);
}
function arrayToHex(arr, prefixed = false) {
  return bufferToHex(arrayToBuffer(arr), prefixed);
}
function arrayToUtf8(arr) {
  return bufferToUtf8(arrayToBuffer(arr));
}
function hexToBuffer(hex) {
  return Buffer.from(removeHexPrefix(hex), ENC_HEX);
}
function hexToArray(hex) {
  return bufferToArray(hexToBuffer(hex));
}
function utf8ToBuffer(utf8) {
  return Buffer.from(utf8, ENC_UTF8);
}
function utf8ToArray(utf8) {
  return bufferToArray(utf8ToBuffer(utf8));
}
function utf8ToHex(utf8, prefixed = false) {
  return bufferToHex(utf8ToBuffer(utf8), prefixed);
}
function isHexString$1(str, length) {
  if (typeof str !== "string" || !str.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }
  if (length && str.length !== 2 + 2 * length) {
    return false;
  }
  return true;
}
function concatArrays(...args) {
  let result = [];
  args.forEach((arg) => result = result.concat(Array.from(arg)));
  return new Uint8Array([...result]);
}
function calcByteLength(length, byteSize = 8) {
  const remainder = length % byteSize;
  return remainder ? (length - remainder) / byteSize * byteSize + byteSize : length;
}
function sanitizeBytes(str, byteSize = 8, padding = STRING_ZERO) {
  return padLeft(str, calcByteLength(str.length, byteSize), padding);
}
function padLeft(str, length, padding = STRING_ZERO) {
  return padString(str, length, true, padding);
}
function removeHexPrefix(hex) {
  return hex.replace(/^0x/, "");
}
function addHexPrefix(hex) {
  return hex.startsWith("0x") ? hex : `0x${hex}`;
}
function sanitizeHex$1(hex) {
  hex = removeHexPrefix(hex);
  hex = sanitizeBytes(hex, 2);
  if (hex) {
    hex = addHexPrefix(hex);
  }
  return hex;
}
function removeHexLeadingZeros$1(hex) {
  const prefixed = hex.startsWith("0x");
  hex = removeHexPrefix(hex);
  hex = hex.startsWith(STRING_ZERO) ? hex.substring(1) : hex;
  return prefixed ? addHexPrefix(hex) : hex;
}
function padString(str, length, left, padding = STRING_ZERO) {
  const diff = length - str.length;
  let result = str;
  if (diff > 0) {
    const pad = padding.repeat(diff);
    result = left ? pad + str : str + pad;
  }
  return result;
}
function convertArrayBufferToBuffer(arrBuf) {
  return arrayToBuffer(new Uint8Array(arrBuf));
}
function convertArrayBufferToHex(arrBuf, noPrefix) {
  return arrayToHex(new Uint8Array(arrBuf), !noPrefix);
}
function convertBufferToArrayBuffer(buf) {
  return bufferToArray(buf).buffer;
}
function convertUtf8ToBuffer(utf8) {
  return utf8ToBuffer(utf8);
}
function convertUtf8ToHex(utf8, noPrefix) {
  return utf8ToHex(utf8, !noPrefix);
}
function convertHexToArrayBuffer(hex) {
  return hexToArray(hex).buffer;
}
function convertNumberToHex(num, noPrefix) {
  const hex = removeHexPrefix(sanitizeHex$1(new BN(num).toString(16)));
  return noPrefix ? hex : addHexPrefix(hex);
}
var sha3Exports = {};
var sha3 = {
  get exports() {
    return sha3Exports;
  },
  set exports(v) {
    sha3Exports = v;
  }
};
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
(function(module) {
  (function() {
    var INPUT_ERROR = "input is invalid type";
    var FINALIZE_ERROR = "finalize already called";
    var WINDOW = typeof window === "object";
    var root = WINDOW ? window : {};
    if (root.JS_SHA3_NO_WINDOW) {
      WINDOW = false;
    }
    var WEB_WORKER = !WINDOW && typeof self === "object";
    var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
    if (NODE_JS) {
      root = commonjsGlobal;
    } else if (WEB_WORKER) {
      root = self;
    }
    var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && true && module.exports;
    var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
    var HEX_CHARS = "0123456789abcdef".split("");
    var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
    var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
    var KECCAK_PADDING = [1, 256, 65536, 16777216];
    var PADDING = [6, 1536, 393216, 100663296];
    var SHIFT = [0, 8, 16, 24];
    var RC = [
      1,
      0,
      32898,
      0,
      32906,
      2147483648,
      2147516416,
      2147483648,
      32907,
      0,
      2147483649,
      0,
      2147516545,
      2147483648,
      32777,
      2147483648,
      138,
      0,
      136,
      0,
      2147516425,
      0,
      2147483658,
      0,
      2147516555,
      0,
      139,
      2147483648,
      32905,
      2147483648,
      32771,
      2147483648,
      32770,
      2147483648,
      128,
      2147483648,
      32778,
      0,
      2147483658,
      2147483648,
      2147516545,
      2147483648,
      32896,
      2147483648,
      2147483649,
      0,
      2147516424,
      2147483648
    ];
    var BITS = [224, 256, 384, 512];
    var SHAKE_BITS = [128, 256];
    var OUTPUT_TYPES = ["hex", "buffer", "arrayBuffer", "array", "digest"];
    var CSHAKE_BYTEPAD = {
      "128": 168,
      "256": 136
    };
    if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
      Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
      };
    }
    if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
      ArrayBuffer.isView = function(obj) {
        return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
      };
    }
    var createOutputMethod = function(bits2, padding, outputType) {
      return function(message) {
        return new Keccak(bits2, padding, bits2).update(message)[outputType]();
      };
    };
    var createShakeOutputMethod = function(bits2, padding, outputType) {
      return function(message, outputBits) {
        return new Keccak(bits2, padding, outputBits).update(message)[outputType]();
      };
    };
    var createCshakeOutputMethod = function(bits2, padding, outputType) {
      return function(message, outputBits, n, s) {
        return methods["cshake" + bits2].update(message, outputBits, n, s)[outputType]();
      };
    };
    var createKmacOutputMethod = function(bits2, padding, outputType) {
      return function(key, message, outputBits, s) {
        return methods["kmac" + bits2].update(key, message, outputBits, s)[outputType]();
      };
    };
    var createOutputMethods = function(method, createMethod2, bits2, padding) {
      for (var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2) {
        var type = OUTPUT_TYPES[i2];
        method[type] = createMethod2(bits2, padding, type);
      }
      return method;
    };
    var createMethod = function(bits2, padding) {
      var method = createOutputMethod(bits2, padding, "hex");
      method.create = function() {
        return new Keccak(bits2, padding, bits2);
      };
      method.update = function(message) {
        return method.create().update(message);
      };
      return createOutputMethods(method, createOutputMethod, bits2, padding);
    };
    var createShakeMethod = function(bits2, padding) {
      var method = createShakeOutputMethod(bits2, padding, "hex");
      method.create = function(outputBits) {
        return new Keccak(bits2, padding, outputBits);
      };
      method.update = function(message, outputBits) {
        return method.create(outputBits).update(message);
      };
      return createOutputMethods(method, createShakeOutputMethod, bits2, padding);
    };
    var createCshakeMethod = function(bits2, padding) {
      var w = CSHAKE_BYTEPAD[bits2];
      var method = createCshakeOutputMethod(bits2, padding, "hex");
      method.create = function(outputBits, n, s) {
        if (!n && !s) {
          return methods["shake" + bits2].create(outputBits);
        } else {
          return new Keccak(bits2, padding, outputBits).bytepad([n, s], w);
        }
      };
      method.update = function(message, outputBits, n, s) {
        return method.create(outputBits, n, s).update(message);
      };
      return createOutputMethods(method, createCshakeOutputMethod, bits2, padding);
    };
    var createKmacMethod = function(bits2, padding) {
      var w = CSHAKE_BYTEPAD[bits2];
      var method = createKmacOutputMethod(bits2, padding, "hex");
      method.create = function(key, outputBits, s) {
        return new Kmac(bits2, padding, outputBits).bytepad(["KMAC", s], w).bytepad([key], w);
      };
      method.update = function(key, message, outputBits, s) {
        return method.create(key, outputBits, s).update(message);
      };
      return createOutputMethods(method, createKmacOutputMethod, bits2, padding);
    };
    var algorithms = [
      { name: "keccak", padding: KECCAK_PADDING, bits: BITS, createMethod },
      { name: "sha3", padding: PADDING, bits: BITS, createMethod },
      { name: "shake", padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod },
      { name: "cshake", padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createCshakeMethod },
      { name: "kmac", padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createKmacMethod }
    ];
    var methods = {}, methodNames = [];
    for (var i = 0; i < algorithms.length; ++i) {
      var algorithm = algorithms[i];
      var bits = algorithm.bits;
      for (var j = 0; j < bits.length; ++j) {
        var methodName = algorithm.name + "_" + bits[j];
        methodNames.push(methodName);
        methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
        if (algorithm.name !== "sha3") {
          var newMethodName = algorithm.name + bits[j];
          methodNames.push(newMethodName);
          methods[newMethodName] = methods[methodName];
        }
      }
    }
    function Keccak(bits2, padding, outputBits) {
      this.blocks = [];
      this.s = [];
      this.padding = padding;
      this.outputBits = outputBits;
      this.reset = true;
      this.finalized = false;
      this.block = 0;
      this.start = 0;
      this.blockCount = 1600 - (bits2 << 1) >> 5;
      this.byteCount = this.blockCount << 2;
      this.outputBlocks = outputBits >> 5;
      this.extraBytes = (outputBits & 31) >> 3;
      for (var i2 = 0; i2 < 50; ++i2) {
        this.s[i2] = 0;
      }
    }
    Keccak.prototype.update = function(message) {
      if (this.finalized) {
        throw new Error(FINALIZE_ERROR);
      }
      var notString, type = typeof message;
      if (type !== "string") {
        if (type === "object") {
          if (message === null) {
            throw new Error(INPUT_ERROR);
          } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
            message = new Uint8Array(message);
          } else if (!Array.isArray(message)) {
            if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
              throw new Error(INPUT_ERROR);
            }
          }
        } else {
          throw new Error(INPUT_ERROR);
        }
        notString = true;
      }
      var blocks = this.blocks, byteCount = this.byteCount, length = message.length, blockCount = this.blockCount, index = 0, s = this.s, i2, code;
      while (index < length) {
        if (this.reset) {
          this.reset = false;
          blocks[0] = this.block;
          for (i2 = 1; i2 < blockCount + 1; ++i2) {
            blocks[i2] = 0;
          }
        }
        if (notString) {
          for (i2 = this.start; index < length && i2 < byteCount; ++index) {
            blocks[i2 >> 2] |= message[index] << SHIFT[i2++ & 3];
          }
        } else {
          for (i2 = this.start; index < length && i2 < byteCount; ++index) {
            code = message.charCodeAt(index);
            if (code < 128) {
              blocks[i2 >> 2] |= code << SHIFT[i2++ & 3];
            } else if (code < 2048) {
              blocks[i2 >> 2] |= (192 | code >> 6) << SHIFT[i2++ & 3];
              blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
            } else if (code < 55296 || code >= 57344) {
              blocks[i2 >> 2] |= (224 | code >> 12) << SHIFT[i2++ & 3];
              blocks[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
              blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
            } else {
              code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
              blocks[i2 >> 2] |= (240 | code >> 18) << SHIFT[i2++ & 3];
              blocks[i2 >> 2] |= (128 | code >> 12 & 63) << SHIFT[i2++ & 3];
              blocks[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
              blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
            }
          }
        }
        this.lastByteIndex = i2;
        if (i2 >= byteCount) {
          this.start = i2 - byteCount;
          this.block = blocks[blockCount];
          for (i2 = 0; i2 < blockCount; ++i2) {
            s[i2] ^= blocks[i2];
          }
          f(s);
          this.reset = true;
        } else {
          this.start = i2;
        }
      }
      return this;
    };
    Keccak.prototype.encode = function(x, right) {
      var o = x & 255, n = 1;
      var bytes = [o];
      x = x >> 8;
      o = x & 255;
      while (o > 0) {
        bytes.unshift(o);
        x = x >> 8;
        o = x & 255;
        ++n;
      }
      if (right) {
        bytes.push(n);
      } else {
        bytes.unshift(n);
      }
      this.update(bytes);
      return bytes.length;
    };
    Keccak.prototype.encodeString = function(str) {
      var notString, type = typeof str;
      if (type !== "string") {
        if (type === "object") {
          if (str === null) {
            throw new Error(INPUT_ERROR);
          } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
            str = new Uint8Array(str);
          } else if (!Array.isArray(str)) {
            if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
              throw new Error(INPUT_ERROR);
            }
          }
        } else {
          throw new Error(INPUT_ERROR);
        }
        notString = true;
      }
      var bytes = 0, length = str.length;
      if (notString) {
        bytes = length;
      } else {
        for (var i2 = 0; i2 < str.length; ++i2) {
          var code = str.charCodeAt(i2);
          if (code < 128) {
            bytes += 1;
          } else if (code < 2048) {
            bytes += 2;
          } else if (code < 55296 || code >= 57344) {
            bytes += 3;
          } else {
            code = 65536 + ((code & 1023) << 10 | str.charCodeAt(++i2) & 1023);
            bytes += 4;
          }
        }
      }
      bytes += this.encode(bytes * 8);
      this.update(str);
      return bytes;
    };
    Keccak.prototype.bytepad = function(strs, w) {
      var bytes = this.encode(w);
      for (var i2 = 0; i2 < strs.length; ++i2) {
        bytes += this.encodeString(strs[i2]);
      }
      var paddingBytes = w - bytes % w;
      var zeros = [];
      zeros.length = paddingBytes;
      this.update(zeros);
      return this;
    };
    Keccak.prototype.finalize = function() {
      if (this.finalized) {
        return;
      }
      this.finalized = true;
      var blocks = this.blocks, i2 = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
      blocks[i2 >> 2] |= this.padding[i2 & 3];
      if (this.lastByteIndex === this.byteCount) {
        blocks[0] = blocks[blockCount];
        for (i2 = 1; i2 < blockCount + 1; ++i2) {
          blocks[i2] = 0;
        }
      }
      blocks[blockCount - 1] |= 2147483648;
      for (i2 = 0; i2 < blockCount; ++i2) {
        s[i2] ^= blocks[i2];
      }
      f(s);
    };
    Keccak.prototype.toString = Keccak.prototype.hex = function() {
      this.finalize();
      var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j2 = 0;
      var hex = "", block;
      while (j2 < outputBlocks) {
        for (i2 = 0; i2 < blockCount && j2 < outputBlocks; ++i2, ++j2) {
          block = s[i2];
          hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15] + HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15] + HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15] + HEX_CHARS[block >> 28 & 15] + HEX_CHARS[block >> 24 & 15];
        }
        if (j2 % blockCount === 0) {
          f(s);
          i2 = 0;
        }
      }
      if (extraBytes) {
        block = s[i2];
        hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15];
        if (extraBytes > 1) {
          hex += HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15];
        }
        if (extraBytes > 2) {
          hex += HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15];
        }
      }
      return hex;
    };
    Keccak.prototype.arrayBuffer = function() {
      this.finalize();
      var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j2 = 0;
      var bytes = this.outputBits >> 3;
      var buffer;
      if (extraBytes) {
        buffer = new ArrayBuffer(outputBlocks + 1 << 2);
      } else {
        buffer = new ArrayBuffer(bytes);
      }
      var array = new Uint32Array(buffer);
      while (j2 < outputBlocks) {
        for (i2 = 0; i2 < blockCount && j2 < outputBlocks; ++i2, ++j2) {
          array[j2] = s[i2];
        }
        if (j2 % blockCount === 0) {
          f(s);
        }
      }
      if (extraBytes) {
        array[i2] = s[i2];
        buffer = buffer.slice(0, bytes);
      }
      return buffer;
    };
    Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;
    Keccak.prototype.digest = Keccak.prototype.array = function() {
      this.finalize();
      var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j2 = 0;
      var array = [], offset, block;
      while (j2 < outputBlocks) {
        for (i2 = 0; i2 < blockCount && j2 < outputBlocks; ++i2, ++j2) {
          offset = j2 << 2;
          block = s[i2];
          array[offset] = block & 255;
          array[offset + 1] = block >> 8 & 255;
          array[offset + 2] = block >> 16 & 255;
          array[offset + 3] = block >> 24 & 255;
        }
        if (j2 % blockCount === 0) {
          f(s);
        }
      }
      if (extraBytes) {
        offset = j2 << 2;
        block = s[i2];
        array[offset] = block & 255;
        if (extraBytes > 1) {
          array[offset + 1] = block >> 8 & 255;
        }
        if (extraBytes > 2) {
          array[offset + 2] = block >> 16 & 255;
        }
      }
      return array;
    };
    function Kmac(bits2, padding, outputBits) {
      Keccak.call(this, bits2, padding, outputBits);
    }
    Kmac.prototype = new Keccak();
    Kmac.prototype.finalize = function() {
      this.encode(this.outputBits, true);
      return Keccak.prototype.finalize.call(this);
    };
    var f = function(s) {
      var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
      for (n = 0; n < 48; n += 2) {
        c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
        c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
        c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
        c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
        c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
        c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
        c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
        c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
        c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
        c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
        h = c8 ^ (c2 << 1 | c3 >>> 31);
        l = c9 ^ (c3 << 1 | c2 >>> 31);
        s[0] ^= h;
        s[1] ^= l;
        s[10] ^= h;
        s[11] ^= l;
        s[20] ^= h;
        s[21] ^= l;
        s[30] ^= h;
        s[31] ^= l;
        s[40] ^= h;
        s[41] ^= l;
        h = c0 ^ (c4 << 1 | c5 >>> 31);
        l = c1 ^ (c5 << 1 | c4 >>> 31);
        s[2] ^= h;
        s[3] ^= l;
        s[12] ^= h;
        s[13] ^= l;
        s[22] ^= h;
        s[23] ^= l;
        s[32] ^= h;
        s[33] ^= l;
        s[42] ^= h;
        s[43] ^= l;
        h = c2 ^ (c6 << 1 | c7 >>> 31);
        l = c3 ^ (c7 << 1 | c6 >>> 31);
        s[4] ^= h;
        s[5] ^= l;
        s[14] ^= h;
        s[15] ^= l;
        s[24] ^= h;
        s[25] ^= l;
        s[34] ^= h;
        s[35] ^= l;
        s[44] ^= h;
        s[45] ^= l;
        h = c4 ^ (c8 << 1 | c9 >>> 31);
        l = c5 ^ (c9 << 1 | c8 >>> 31);
        s[6] ^= h;
        s[7] ^= l;
        s[16] ^= h;
        s[17] ^= l;
        s[26] ^= h;
        s[27] ^= l;
        s[36] ^= h;
        s[37] ^= l;
        s[46] ^= h;
        s[47] ^= l;
        h = c6 ^ (c0 << 1 | c1 >>> 31);
        l = c7 ^ (c1 << 1 | c0 >>> 31);
        s[8] ^= h;
        s[9] ^= l;
        s[18] ^= h;
        s[19] ^= l;
        s[28] ^= h;
        s[29] ^= l;
        s[38] ^= h;
        s[39] ^= l;
        s[48] ^= h;
        s[49] ^= l;
        b0 = s[0];
        b1 = s[1];
        b32 = s[11] << 4 | s[10] >>> 28;
        b33 = s[10] << 4 | s[11] >>> 28;
        b14 = s[20] << 3 | s[21] >>> 29;
        b15 = s[21] << 3 | s[20] >>> 29;
        b46 = s[31] << 9 | s[30] >>> 23;
        b47 = s[30] << 9 | s[31] >>> 23;
        b28 = s[40] << 18 | s[41] >>> 14;
        b29 = s[41] << 18 | s[40] >>> 14;
        b20 = s[2] << 1 | s[3] >>> 31;
        b21 = s[3] << 1 | s[2] >>> 31;
        b2 = s[13] << 12 | s[12] >>> 20;
        b3 = s[12] << 12 | s[13] >>> 20;
        b34 = s[22] << 10 | s[23] >>> 22;
        b35 = s[23] << 10 | s[22] >>> 22;
        b16 = s[33] << 13 | s[32] >>> 19;
        b17 = s[32] << 13 | s[33] >>> 19;
        b48 = s[42] << 2 | s[43] >>> 30;
        b49 = s[43] << 2 | s[42] >>> 30;
        b40 = s[5] << 30 | s[4] >>> 2;
        b41 = s[4] << 30 | s[5] >>> 2;
        b22 = s[14] << 6 | s[15] >>> 26;
        b23 = s[15] << 6 | s[14] >>> 26;
        b4 = s[25] << 11 | s[24] >>> 21;
        b5 = s[24] << 11 | s[25] >>> 21;
        b36 = s[34] << 15 | s[35] >>> 17;
        b37 = s[35] << 15 | s[34] >>> 17;
        b18 = s[45] << 29 | s[44] >>> 3;
        b19 = s[44] << 29 | s[45] >>> 3;
        b10 = s[6] << 28 | s[7] >>> 4;
        b11 = s[7] << 28 | s[6] >>> 4;
        b42 = s[17] << 23 | s[16] >>> 9;
        b43 = s[16] << 23 | s[17] >>> 9;
        b24 = s[26] << 25 | s[27] >>> 7;
        b25 = s[27] << 25 | s[26] >>> 7;
        b6 = s[36] << 21 | s[37] >>> 11;
        b7 = s[37] << 21 | s[36] >>> 11;
        b38 = s[47] << 24 | s[46] >>> 8;
        b39 = s[46] << 24 | s[47] >>> 8;
        b30 = s[8] << 27 | s[9] >>> 5;
        b31 = s[9] << 27 | s[8] >>> 5;
        b12 = s[18] << 20 | s[19] >>> 12;
        b13 = s[19] << 20 | s[18] >>> 12;
        b44 = s[29] << 7 | s[28] >>> 25;
        b45 = s[28] << 7 | s[29] >>> 25;
        b26 = s[38] << 8 | s[39] >>> 24;
        b27 = s[39] << 8 | s[38] >>> 24;
        b8 = s[48] << 14 | s[49] >>> 18;
        b9 = s[49] << 14 | s[48] >>> 18;
        s[0] = b0 ^ ~b2 & b4;
        s[1] = b1 ^ ~b3 & b5;
        s[10] = b10 ^ ~b12 & b14;
        s[11] = b11 ^ ~b13 & b15;
        s[20] = b20 ^ ~b22 & b24;
        s[21] = b21 ^ ~b23 & b25;
        s[30] = b30 ^ ~b32 & b34;
        s[31] = b31 ^ ~b33 & b35;
        s[40] = b40 ^ ~b42 & b44;
        s[41] = b41 ^ ~b43 & b45;
        s[2] = b2 ^ ~b4 & b6;
        s[3] = b3 ^ ~b5 & b7;
        s[12] = b12 ^ ~b14 & b16;
        s[13] = b13 ^ ~b15 & b17;
        s[22] = b22 ^ ~b24 & b26;
        s[23] = b23 ^ ~b25 & b27;
        s[32] = b32 ^ ~b34 & b36;
        s[33] = b33 ^ ~b35 & b37;
        s[42] = b42 ^ ~b44 & b46;
        s[43] = b43 ^ ~b45 & b47;
        s[4] = b4 ^ ~b6 & b8;
        s[5] = b5 ^ ~b7 & b9;
        s[14] = b14 ^ ~b16 & b18;
        s[15] = b15 ^ ~b17 & b19;
        s[24] = b24 ^ ~b26 & b28;
        s[25] = b25 ^ ~b27 & b29;
        s[34] = b34 ^ ~b36 & b38;
        s[35] = b35 ^ ~b37 & b39;
        s[44] = b44 ^ ~b46 & b48;
        s[45] = b45 ^ ~b47 & b49;
        s[6] = b6 ^ ~b8 & b0;
        s[7] = b7 ^ ~b9 & b1;
        s[16] = b16 ^ ~b18 & b10;
        s[17] = b17 ^ ~b19 & b11;
        s[26] = b26 ^ ~b28 & b20;
        s[27] = b27 ^ ~b29 & b21;
        s[36] = b36 ^ ~b38 & b30;
        s[37] = b37 ^ ~b39 & b31;
        s[46] = b46 ^ ~b48 & b40;
        s[47] = b47 ^ ~b49 & b41;
        s[8] = b8 ^ ~b0 & b2;
        s[9] = b9 ^ ~b1 & b3;
        s[18] = b18 ^ ~b10 & b12;
        s[19] = b19 ^ ~b11 & b13;
        s[28] = b28 ^ ~b20 & b22;
        s[29] = b29 ^ ~b21 & b23;
        s[38] = b38 ^ ~b30 & b32;
        s[39] = b39 ^ ~b31 & b33;
        s[48] = b48 ^ ~b40 & b42;
        s[49] = b49 ^ ~b41 & b43;
        s[0] ^= RC[n];
        s[1] ^= RC[n + 1];
      }
    };
    if (COMMON_JS) {
      module.exports = methods;
    } else {
      for (i = 0; i < methodNames.length; ++i) {
        root[methodNames[i]] = methods[methodNames[i]];
      }
    }
  })();
})(sha3);
var cjs = {};
var tslibExports = {};
var tslib = {
  get exports() {
    return tslibExports;
  },
  set exports(v) {
    tslibExports = v;
  }
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
(function(module) {
  var __extends;
  var __assign;
  var __rest;
  var __decorate;
  var __param;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays2;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar;
  var __importDefault;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __createBinding;
  (function(factory) {
    var root = typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : {};
    {
      factory(createExporter(root, createExporter(module.exports)));
    }
    function createExporter(exports, previous) {
      if (exports !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports, "__esModule", { value: true });
        } else {
          exports.__esModule = true;
        }
      }
      return function(id, v) {
        return exports[id] = previous ? previous(id, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
    };
    __extends = function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    __createBinding = function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __exportStar = function(m, exports) {
      for (var p in m)
        if (p !== "default" && !exports.hasOwnProperty(p))
          exports[p] = m[p];
    };
    __values = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays2 = function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        if (g[n])
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({ value: v2, done: d });
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    __importStar = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (Object.hasOwnProperty.call(mod, k))
            result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    };
    __importDefault = function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    __classPrivateFieldGet = function(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays2);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
  });
})(tslib);
var crypto = {};
var hasRequiredCrypto;
function requireCrypto() {
  if (hasRequiredCrypto)
    return crypto;
  hasRequiredCrypto = 1;
  Object.defineProperty(crypto, "__esModule", { value: true });
  crypto.isBrowserCryptoAvailable = crypto.getSubtleCrypto = crypto.getBrowerCrypto = void 0;
  function getBrowerCrypto() {
    return (commonjsGlobal === null || commonjsGlobal === void 0 ? void 0 : commonjsGlobal.crypto) || (commonjsGlobal === null || commonjsGlobal === void 0 ? void 0 : commonjsGlobal.msCrypto) || {};
  }
  crypto.getBrowerCrypto = getBrowerCrypto;
  function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
  }
  crypto.getSubtleCrypto = getSubtleCrypto;
  function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
  }
  crypto.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
  return crypto;
}
var env = {};
var hasRequiredEnv;
function requireEnv() {
  if (hasRequiredEnv)
    return env;
  hasRequiredEnv = 1;
  Object.defineProperty(env, "__esModule", { value: true });
  env.isBrowser = env.isNode = env.isReactNative = void 0;
  function isReactNative() {
    return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
  }
  env.isReactNative = isReactNative;
  function isNode2() {
    return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
  }
  env.isNode = isNode2;
  function isBrowser2() {
    return !isReactNative() && !isNode2();
  }
  env.isBrowser = isBrowser2;
  return env;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  const tslib_1 = tslibExports;
  tslib_1.__exportStar(requireCrypto(), exports);
  tslib_1.__exportStar(requireEnv(), exports);
})(cjs);
function payloadId$1() {
  const date = Date.now() * Math.pow(10, 3);
  const extra = Math.floor(Math.random() * Math.pow(10, 3));
  return date + extra;
}
function sanitizeHex(hex) {
  return sanitizeHex$1(hex);
}
function removeHexLeadingZeros(hex) {
  return removeHexLeadingZeros$1(addHexPrefix(hex));
}
const payloadId = payloadId$1;
function uuid() {
  const result = ((a, b) => {
    for (b = a = ""; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : "-") {
    }
    return b;
  })();
  return result;
}
function isEmptyString(value) {
  return value === "" || typeof value === "string" && value.trim() === "";
}
function isEmptyArray(array) {
  return !(array && array.length);
}
function isHexString(value, length) {
  return isHexString$1(value, length);
}
function isJsonRpcRequest(object) {
  return typeof object.method !== "undefined";
}
function isJsonRpcResponseSuccess(object) {
  return typeof object.result !== "undefined";
}
function isJsonRpcResponseError(object) {
  return typeof object.error !== "undefined";
}
function isInternalEvent(object) {
  return typeof object.event !== "undefined";
}
function isReservedEvent(event) {
  return reservedEvents.includes(event) || event.startsWith("wc_");
}
function isSilentPayload(request) {
  if (request.method.startsWith("wc_")) {
    return true;
  }
  if (signingMethods.includes(request.method)) {
    return false;
  }
  return true;
}
function toChecksumAddress(address) {
  address = removeHexPrefix(address.toLowerCase());
  const hash = removeHexPrefix(sha3Exports.keccak_256(convertUtf8ToBuffer(address)));
  let checksum = "";
  for (let i = 0; i < address.length; i++) {
    if (parseInt(hash[i], 16) > 7) {
      checksum += address[i].toUpperCase();
    } else {
      checksum += address[i];
    }
  }
  return addHexPrefix(checksum);
}
const isValidAddress = (address) => {
  if (!address) {
    return false;
  } else if (address.toLowerCase().substring(0, 2) !== "0x") {
    return false;
  } else if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  } else {
    return address === toChecksumAddress(address);
  }
};
function parsePersonalSign(params) {
  if (!isEmptyArray(params) && !isHexString(params[0])) {
    params[0] = convertUtf8ToHex(params[0]);
  }
  return params;
}
function parseTransactionData(txData) {
  if (typeof txData.type !== "undefined" && txData.type !== "0")
    return txData;
  if (typeof txData.from === "undefined" || !isValidAddress(txData.from)) {
    throw new Error(`Transaction object must include a valid 'from' value.`);
  }
  function parseHexValues(value) {
    let result = value;
    if (typeof value === "number" || typeof value === "string" && !isEmptyString(value)) {
      if (!isHexString(value)) {
        result = convertNumberToHex(value);
      } else if (typeof value === "string") {
        result = sanitizeHex(value);
      }
    }
    if (typeof result === "string") {
      result = removeHexLeadingZeros(result);
    }
    return result;
  }
  const txDataRPC = {
    from: sanitizeHex(txData.from),
    to: typeof txData.to === "undefined" ? void 0 : sanitizeHex(txData.to),
    gasPrice: typeof txData.gasPrice === "undefined" ? "" : parseHexValues(txData.gasPrice),
    gas: typeof txData.gas === "undefined" ? typeof txData.gasLimit === "undefined" ? "" : parseHexValues(txData.gasLimit) : parseHexValues(txData.gas),
    value: typeof txData.value === "undefined" ? "" : parseHexValues(txData.value),
    nonce: typeof txData.nonce === "undefined" ? "" : parseHexValues(txData.nonce),
    data: typeof txData.data === "undefined" ? "" : sanitizeHex(txData.data) || "0x"
  };
  const prunable = ["gasPrice", "gas", "value", "nonce"];
  Object.keys(txDataRPC).forEach((key) => {
    if ((typeof txDataRPC[key] === "undefined" || typeof txDataRPC[key] === "string" && !txDataRPC[key].trim().length) && prunable.includes(key)) {
      delete txDataRPC[key];
    }
  });
  return txDataRPC;
}
function formatRpcError(error) {
  const message = error.message || "Failed or Rejected Request";
  let code = -32e3;
  if (error && !error.code) {
    switch (message) {
      case "Parse error":
        code = -32700;
        break;
      case "Invalid request":
        code = -32600;
        break;
      case "Method not found":
        code = -32601;
        break;
      case "Invalid params":
        code = -32602;
        break;
      case "Internal error":
        code = -32603;
        break;
      default:
        code = -32e3;
        break;
    }
  }
  const result = {
    code,
    message
  };
  if (error.data) {
    result.data = error.data;
  }
  return result;
}
var queryString = {};
var strictUriEncode = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
var token = "%[a-f0-9]{2}";
var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
var multiMatcher = new RegExp("(" + token + ")+", "gi");
function decodeComponents(components, split) {
  try {
    return [decodeURIComponent(components.join(""))];
  } catch (err) {
  }
  if (components.length === 1) {
    return components;
  }
  split = split || 1;
  var left = components.slice(0, split);
  var right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch (err) {
    var tokens = input.match(singleMatcher) || [];
    for (var i = 1; i < tokens.length; i++) {
      input = decodeComponents(tokens, i).join("");
      tokens = input.match(singleMatcher) || [];
    }
    return input;
  }
}
function customDecodeURIComponent(input) {
  var replaceMap = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  };
  var match = multiMatcher.exec(input);
  while (match) {
    try {
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch (err) {
      var result = decode(match[0]);
      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }
    match = multiMatcher.exec(input);
  }
  replaceMap["%C2"] = "�";
  var entries = Object.keys(replaceMap);
  for (var i = 0; i < entries.length; i++) {
    var key = entries[i];
    input = input.replace(new RegExp(key, "g"), replaceMap[key]);
  }
  return input;
}
var decodeUriComponent = function(encodedURI) {
  if (typeof encodedURI !== "string") {
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
  }
  try {
    encodedURI = encodedURI.replace(/\+/g, " ");
    return decodeURIComponent(encodedURI);
  } catch (err) {
    return customDecodeURIComponent(encodedURI);
  }
};
var splitOnFirst = (string, separator) => {
  if (!(typeof string === "string" && typeof separator === "string")) {
    throw new TypeError("Expected the arguments to be of type `string`");
  }
  if (separator === "") {
    return [string];
  }
  const separatorIndex = string.indexOf(separator);
  if (separatorIndex === -1) {
    return [string];
  }
  return [
    string.slice(0, separatorIndex),
    string.slice(separatorIndex + separator.length)
  ];
};
(function(exports) {
  const strictUriEncode$1 = strictUriEncode;
  const decodeComponent = decodeUriComponent;
  const splitOnFirst$1 = splitOnFirst;
  const isNullOrUndefined = (value) => value === null || value === void 0;
  function encoderForArrayFormat(options) {
    switch (options.arrayFormat) {
      case "index":
        return (key) => (result, value) => {
          const index = result.length;
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode(key, options), "[", index, "]"].join("")];
          }
          return [
            ...result,
            [encode(key, options), "[", encode(index, options), "]=", encode(value, options)].join("")
          ];
        };
      case "bracket":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode(key, options), "[]"].join("")];
          }
          return [...result, [encode(key, options), "[]=", encode(value, options)].join("")];
        };
      case "comma":
      case "separator":
        return (key) => (result, value) => {
          if (value === null || value === void 0 || value.length === 0) {
            return result;
          }
          if (result.length === 0) {
            return [[encode(key, options), "=", encode(value, options)].join("")];
          }
          return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
        };
      default:
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, encode(key, options)];
          }
          return [...result, [encode(key, options), "=", encode(value, options)].join("")];
        };
    }
  }
  function parserForArrayFormat(options) {
    let result;
    switch (options.arrayFormat) {
      case "index":
        return (key, value, accumulator) => {
          result = /\[(\d*)\]$/.exec(key);
          key = key.replace(/\[\d*\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      case "bracket":
        return (key, value, accumulator) => {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "comma":
      case "separator":
        return (key, value, accumulator) => {
          const isArray = typeof value === "string" && value.split("").indexOf(options.arrayFormatSeparator) > -1;
          const newValue = isArray ? value.split(options.arrayFormatSeparator).map((item) => decode2(item, options)) : value === null ? value : decode2(value, options);
          accumulator[key] = newValue;
        };
      default:
        return (key, value, accumulator) => {
          if (accumulator[key] === void 0) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }
  function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function encode(value, options) {
    if (options.encode) {
      return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
    }
    return value;
  }
  function decode2(value, options) {
    if (options.decode) {
      return decodeComponent(value);
    }
    return value;
  }
  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    }
    if (typeof input === "object") {
      return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map((key) => input[key]);
    }
    return input;
  }
  function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) {
      input = input.slice(0, hashStart);
    }
    return input;
  }
  function getHash(url) {
    let hash = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) {
      hash = url.slice(hashStart);
    }
    return hash;
  }
  function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) {
      return "";
    }
    return input.slice(queryStart + 1);
  }
  function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
      value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
      value = value.toLowerCase() === "true";
    }
    return value;
  }
  function parse(input, options) {
    options = Object.assign({
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    const ret = /* @__PURE__ */ Object.create(null);
    if (typeof input !== "string") {
      return ret;
    }
    input = input.trim().replace(/^[?#&]/, "");
    if (!input) {
      return ret;
    }
    for (const param of input.split("&")) {
      let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, " ") : param, "=");
      value = value === void 0 ? null : ["comma", "separator"].includes(options.arrayFormat) ? value : decode2(value, options);
      formatter(decode2(key, options), value, ret);
    }
    for (const key of Object.keys(ret)) {
      const value = ret[key];
      if (typeof value === "object" && value !== null) {
        for (const k of Object.keys(value)) {
          value[k] = parseValue(value[k], options);
        }
      } else {
        ret[key] = parseValue(value, options);
      }
    }
    if (options.sort === false) {
      return ret;
    }
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
      const value = ret[key];
      if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
        result[key] = keysSorter(value);
      } else {
        result[key] = value;
      }
      return result;
    }, /* @__PURE__ */ Object.create(null));
  }
  exports.extract = extract;
  exports.parse = parse;
  exports.stringify = (object, options) => {
    if (!object) {
      return "";
    }
    options = Object.assign({
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object)) {
      if (!shouldFilter(key)) {
        objectCopy[key] = object[key];
      }
    }
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) {
      keys.sort(options.sort);
    }
    return keys.map((key) => {
      const value = object[key];
      if (value === void 0) {
        return "";
      }
      if (value === null) {
        return encode(key, options);
      }
      if (Array.isArray(value)) {
        return value.reduce(formatter(key), []).join("&");
      }
      return encode(key, options) + "=" + encode(value, options);
    }).filter((x) => x.length > 0).join("&");
  };
  exports.parseUrl = (input, options) => {
    options = Object.assign({
      decode: true
    }, options);
    const [url, hash] = splitOnFirst$1(input, "#");
    return Object.assign(
      {
        url: url.split("?")[0] || "",
        query: parse(extract(input), options)
      },
      options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode2(hash, options) } : {}
    );
  };
  exports.stringifyUrl = (input, options) => {
    options = Object.assign({
      encode: true,
      strict: true
    }, options);
    const url = removeHash(input.url).split("?")[0] || "";
    const queryFromUrl = exports.extract(input.url);
    const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
    const query = Object.assign(parsedQueryFromUrl, input.query);
    let queryString2 = exports.stringify(query, options);
    if (queryString2) {
      queryString2 = `?${queryString2}`;
    }
    let hash = getHash(input.url);
    if (input.fragmentIdentifier) {
      hash = `#${encode(input.fragmentIdentifier, options)}`;
    }
    return `${url}${queryString2}${hash}`;
  };
})(queryString);
function getQueryString(url) {
  const pathEnd = url.indexOf("?") !== -1 ? url.indexOf("?") : void 0;
  const queryString2 = typeof pathEnd !== "undefined" ? url.substr(pathEnd) : "";
  return queryString2;
}
function appendToQueryString(queryString2, newQueryParams) {
  let queryParams = parseQueryString(queryString2);
  queryParams = Object.assign(Object.assign({}, queryParams), newQueryParams);
  queryString2 = formatQueryString(queryParams);
  return queryString2;
}
function parseQueryString(queryString$1) {
  return queryString.parse(queryString$1);
}
function formatQueryString(queryParams) {
  return queryString.stringify(queryParams);
}
function isWalletConnectSession(object) {
  return typeof object.bridge !== "undefined";
}
function parseWalletConnectUri(str) {
  const pathStart = str.indexOf(":");
  const pathEnd = str.indexOf("?") !== -1 ? str.indexOf("?") : void 0;
  const protocol = str.substring(0, pathStart);
  const path = str.substring(pathStart + 1, pathEnd);
  function parseRequiredParams(path2) {
    const separator = "@";
    const values = path2.split(separator);
    const requiredParams2 = {
      handshakeTopic: values[0],
      version: parseInt(values[1], 10)
    };
    return requiredParams2;
  }
  const requiredParams = parseRequiredParams(path);
  const queryString2 = typeof pathEnd !== "undefined" ? str.substr(pathEnd) : "";
  function parseQueryParams(queryString3) {
    const result2 = parseQueryString(queryString3);
    const parameters = {
      key: result2.key || "",
      bridge: result2.bridge || ""
    };
    return parameters;
  }
  const queryParams = parseQueryParams(queryString2);
  const result = Object.assign(Object.assign({ protocol }, requiredParams), queryParams);
  return result;
}
class NetworkMonitor {
  constructor() {
    this._eventEmitters = [];
    if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
      window.addEventListener("online", () => this.trigger("online"));
      window.addEventListener("offline", () => this.trigger("offline"));
    }
  }
  on(event, callback) {
    this._eventEmitters.push({
      event,
      callback
    });
  }
  trigger(event) {
    let eventEmitters = [];
    if (event) {
      eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
    }
    eventEmitters.forEach((eventEmitter) => {
      eventEmitter.callback();
    });
  }
}
const WS = typeof global.WebSocket !== "undefined" ? global.WebSocket : require("ws");
class SocketTransport {
  constructor(opts) {
    this.opts = opts;
    this._queue = [];
    this._events = [];
    this._subscriptions = [];
    this._protocol = opts.protocol;
    this._version = opts.version;
    this._url = "";
    this._netMonitor = null;
    this._socket = null;
    this._nextSocket = null;
    this._subscriptions = opts.subscriptions || [];
    this._netMonitor = opts.netMonitor || new NetworkMonitor();
    if (!opts.url || typeof opts.url !== "string") {
      throw new Error("Missing or invalid WebSocket url");
    }
    this._url = opts.url;
    this._netMonitor.on("online", () => this._socketCreate());
  }
  set readyState(value) {
  }
  get readyState() {
    return this._socket ? this._socket.readyState : -1;
  }
  set connecting(value) {
  }
  get connecting() {
    return this.readyState === 0;
  }
  set connected(value) {
  }
  get connected() {
    return this.readyState === 1;
  }
  set closing(value) {
  }
  get closing() {
    return this.readyState === 2;
  }
  set closed(value) {
  }
  get closed() {
    return this.readyState === 3;
  }
  open() {
    this._socketCreate();
  }
  close() {
    this._socketClose();
  }
  send(message, topic, silent) {
    if (!topic || typeof topic !== "string") {
      throw new Error("Missing or invalid topic field");
    }
    this._socketSend({
      topic,
      type: "pub",
      payload: message,
      silent: !!silent
    });
  }
  subscribe(topic) {
    this._socketSend({
      topic,
      type: "sub",
      payload: "",
      silent: true
    });
  }
  on(event, callback) {
    this._events.push({ event, callback });
  }
  _socketCreate() {
    if (this._nextSocket) {
      return;
    }
    const url = getWebSocketUrl(this._url, this._protocol, this._version);
    this._nextSocket = new WS(url);
    if (!this._nextSocket) {
      throw new Error("Failed to create socket");
    }
    this._nextSocket.onmessage = (event) => this._socketReceive(event);
    this._nextSocket.onopen = () => this._socketOpen();
    this._nextSocket.onerror = (event) => this._socketError(event);
    this._nextSocket.onclose = () => {
      setTimeout(() => {
        this._nextSocket = null;
        this._socketCreate();
      }, 1e3);
    };
  }
  _socketOpen() {
    this._socketClose();
    this._socket = this._nextSocket;
    this._nextSocket = null;
    this._queueSubscriptions();
    this._pushQueue();
  }
  _socketClose() {
    if (this._socket) {
      this._socket.onclose = () => {
      };
      this._socket.close();
    }
  }
  _socketSend(socketMessage) {
    const message = JSON.stringify(socketMessage);
    if (this._socket && this._socket.readyState === 1) {
      this._socket.send(message);
    } else {
      this._setToQueue(socketMessage);
      this._socketCreate();
    }
  }
  async _socketReceive(event) {
    let socketMessage;
    try {
      socketMessage = JSON.parse(event.data);
    } catch (error) {
      return;
    }
    this._socketSend({
      topic: socketMessage.topic,
      type: "ack",
      payload: "",
      silent: true
    });
    if (this._socket && this._socket.readyState === 1) {
      const events = this._events.filter((event2) => event2.event === "message");
      if (events && events.length) {
        events.forEach((event2) => event2.callback(socketMessage));
      }
    }
  }
  _socketError(e) {
    const events = this._events.filter((event) => event.event === "error");
    if (events && events.length) {
      events.forEach((event) => event.callback(e));
    }
  }
  _queueSubscriptions() {
    const subscriptions = this._subscriptions;
    subscriptions.forEach((topic) => this._queue.push({
      topic,
      type: "sub",
      payload: "",
      silent: true
    }));
    this._subscriptions = this.opts.subscriptions || [];
  }
  _setToQueue(socketMessage) {
    this._queue.push(socketMessage);
  }
  _pushQueue() {
    const queue = this._queue;
    queue.forEach((socketMessage) => this._socketSend(socketMessage));
    this._queue = [];
  }
}
function getWebSocketUrl(_url, protocol, version) {
  var _a, _b;
  const url = _url.startsWith("https") ? _url.replace("https", "wss") : _url.startsWith("http") ? _url.replace("http", "ws") : _url;
  const splitUrl = url.split("?");
  const params = isBrowser() ? {
    protocol,
    version,
    env: "browser",
    host: ((_a = getLocation()) === null || _a === void 0 ? void 0 : _a.host) || ""
  } : {
    protocol,
    version,
    env: ((_b = detectEnv()) === null || _b === void 0 ? void 0 : _b.name) || ""
  };
  const queryString2 = appendToQueryString(getQueryString(splitUrl[1] || ""), params);
  return splitUrl[0] + "?" + queryString2;
}
const ERROR_SESSION_CONNECTED = "Session currently connected";
const ERROR_SESSION_DISCONNECTED = "Session currently disconnected";
const ERROR_SESSION_REJECTED = "Session Rejected";
const ERROR_MISSING_JSON_RPC = "Missing JSON RPC response";
const ERROR_MISSING_RESULT = `JSON-RPC success response must include "result" field`;
const ERROR_MISSING_ERROR = `JSON-RPC error response must include "error" field`;
const ERROR_MISSING_METHOD = `JSON RPC request must have valid "method" value`;
const ERROR_MISSING_ID = `JSON RPC request must have valid "id" value`;
const ERROR_MISSING_REQUIRED = "Missing one of the required parameters: bridge / uri / session";
const ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid";
const ERROR_INVALID_URI = "URI format is invalid";
const ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided";
const ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal";
class EventManager {
  constructor() {
    this._eventEmitters = [];
  }
  subscribe(eventEmitter) {
    this._eventEmitters.push(eventEmitter);
  }
  unsubscribe(event) {
    this._eventEmitters = this._eventEmitters.filter((x) => x.event !== event);
  }
  trigger(payload) {
    let eventEmitters = [];
    let event;
    if (isJsonRpcRequest(payload)) {
      event = payload.method;
    } else if (isJsonRpcResponseSuccess(payload) || isJsonRpcResponseError(payload)) {
      event = `response:${payload.id}`;
    } else if (isInternalEvent(payload)) {
      event = payload.event;
    } else {
      event = "";
    }
    if (event) {
      eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
    }
    if ((!eventEmitters || !eventEmitters.length) && !isReservedEvent(event) && !isInternalEvent(event)) {
      eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === "call_request");
    }
    eventEmitters.forEach((eventEmitter) => {
      if (isJsonRpcResponseError(payload)) {
        const error = new Error(payload.error.message);
        eventEmitter.callback(error, null);
      } else {
        eventEmitter.callback(null, payload);
      }
    });
  }
}
class SessionStorage {
  constructor(storageId = "walletconnect") {
    this.storageId = storageId;
  }
  getSession() {
    let session = null;
    const json = getLocal(this.storageId);
    if (json && isWalletConnectSession(json)) {
      session = json;
    }
    return session;
  }
  setSession(session) {
    setLocal(this.storageId, session);
    return session;
  }
  removeSession() {
    removeLocal(this.storageId);
  }
}
const domain = "walletconnect.org";
const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
const bridges = alphanumerical.split("").map((char) => `https://${char}.bridge.walletconnect.org`);
function extractHostname(url) {
  let hostname = url.indexOf("//") > -1 ? url.split("/")[2] : url.split("/")[0];
  hostname = hostname.split(":")[0];
  hostname = hostname.split("?")[0];
  return hostname;
}
function extractRootDomain(url) {
  return extractHostname(url).split(".").slice(-2).join(".");
}
function randomBridgeIndex() {
  return Math.floor(Math.random() * bridges.length);
}
function selectRandomBridgeUrl() {
  return bridges[randomBridgeIndex()];
}
function shouldSelectRandomly(url) {
  return extractRootDomain(url) === domain;
}
function getBridgeUrl(url) {
  if (shouldSelectRandomly(url)) {
    return selectRandomBridgeUrl();
  }
  return url;
}
class Connector {
  constructor(opts) {
    this.protocol = "wc";
    this.version = 1;
    this._bridge = "";
    this._key = null;
    this._clientId = "";
    this._clientMeta = null;
    this._peerId = "";
    this._peerMeta = null;
    this._handshakeId = 0;
    this._handshakeTopic = "";
    this._connected = false;
    this._accounts = [];
    this._chainId = 0;
    this._networkId = 0;
    this._rpcUrl = "";
    this._eventManager = new EventManager();
    this._clientMeta = getClientMeta() || opts.connectorOpts.clientMeta || null;
    this._cryptoLib = opts.cryptoLib;
    this._sessionStorage = opts.sessionStorage || new SessionStorage(opts.connectorOpts.storageId);
    this._qrcodeModal = opts.connectorOpts.qrcodeModal;
    this._qrcodeModalOptions = opts.connectorOpts.qrcodeModalOptions;
    this._signingMethods = [...signingMethods, ...opts.connectorOpts.signingMethods || []];
    if (!opts.connectorOpts.bridge && !opts.connectorOpts.uri && !opts.connectorOpts.session) {
      throw new Error(ERROR_MISSING_REQUIRED);
    }
    if (opts.connectorOpts.bridge) {
      this.bridge = getBridgeUrl(opts.connectorOpts.bridge);
    }
    if (opts.connectorOpts.uri) {
      this.uri = opts.connectorOpts.uri;
    }
    const session = opts.connectorOpts.session || this._getStorageSession();
    if (session) {
      this.session = session;
    }
    if (this.handshakeId) {
      this._subscribeToSessionResponse(this.handshakeId, "Session request rejected");
    }
    this._transport = opts.transport || new SocketTransport({
      protocol: this.protocol,
      version: this.version,
      url: this.bridge,
      subscriptions: [this.clientId]
    });
    this._subscribeToInternalEvents();
    this._initTransport();
    if (opts.connectorOpts.uri) {
      this._subscribeToSessionRequest();
    }
    if (opts.pushServerOpts) {
      this._registerPushServer(opts.pushServerOpts);
    }
  }
  set bridge(value) {
    if (!value) {
      return;
    }
    this._bridge = value;
  }
  get bridge() {
    return this._bridge;
  }
  set key(value) {
    if (!value) {
      return;
    }
    const key = convertHexToArrayBuffer(value);
    this._key = key;
  }
  get key() {
    if (this._key) {
      const key = convertArrayBufferToHex(this._key, true);
      return key;
    }
    return "";
  }
  set clientId(value) {
    if (!value) {
      return;
    }
    this._clientId = value;
  }
  get clientId() {
    let clientId = this._clientId;
    if (!clientId) {
      clientId = this._clientId = uuid();
    }
    return this._clientId;
  }
  set peerId(value) {
    if (!value) {
      return;
    }
    this._peerId = value;
  }
  get peerId() {
    return this._peerId;
  }
  set clientMeta(value) {
  }
  get clientMeta() {
    let clientMeta = this._clientMeta;
    if (!clientMeta) {
      clientMeta = this._clientMeta = getClientMeta();
    }
    return clientMeta;
  }
  set peerMeta(value) {
    this._peerMeta = value;
  }
  get peerMeta() {
    const peerMeta = this._peerMeta;
    return peerMeta;
  }
  set handshakeTopic(value) {
    if (!value) {
      return;
    }
    this._handshakeTopic = value;
  }
  get handshakeTopic() {
    return this._handshakeTopic;
  }
  set handshakeId(value) {
    if (!value) {
      return;
    }
    this._handshakeId = value;
  }
  get handshakeId() {
    return this._handshakeId;
  }
  get uri() {
    const _uri = this._formatUri();
    return _uri;
  }
  set uri(value) {
    if (!value) {
      return;
    }
    const { handshakeTopic, bridge, key } = this._parseUri(value);
    this.handshakeTopic = handshakeTopic;
    this.bridge = bridge;
    this.key = key;
  }
  set chainId(value) {
    this._chainId = value;
  }
  get chainId() {
    const chainId = this._chainId;
    return chainId;
  }
  set networkId(value) {
    this._networkId = value;
  }
  get networkId() {
    const networkId = this._networkId;
    return networkId;
  }
  set accounts(value) {
    this._accounts = value;
  }
  get accounts() {
    const accounts = this._accounts;
    return accounts;
  }
  set rpcUrl(value) {
    this._rpcUrl = value;
  }
  get rpcUrl() {
    const rpcUrl = this._rpcUrl;
    return rpcUrl;
  }
  set connected(value) {
  }
  get connected() {
    return this._connected;
  }
  set pending(value) {
  }
  get pending() {
    return !!this._handshakeTopic;
  }
  get session() {
    return {
      connected: this.connected,
      accounts: this.accounts,
      chainId: this.chainId,
      bridge: this.bridge,
      key: this.key,
      clientId: this.clientId,
      clientMeta: this.clientMeta,
      peerId: this.peerId,
      peerMeta: this.peerMeta,
      handshakeId: this.handshakeId,
      handshakeTopic: this.handshakeTopic
    };
  }
  set session(value) {
    if (!value) {
      return;
    }
    this._connected = value.connected;
    this.accounts = value.accounts;
    this.chainId = value.chainId;
    this.bridge = value.bridge;
    this.key = value.key;
    this.clientId = value.clientId;
    this.clientMeta = value.clientMeta;
    this.peerId = value.peerId;
    this.peerMeta = value.peerMeta;
    this.handshakeId = value.handshakeId;
    this.handshakeTopic = value.handshakeTopic;
  }
  on(event, callback) {
    const eventEmitter = {
      event,
      callback
    };
    this._eventManager.subscribe(eventEmitter);
  }
  off(event) {
    this._eventManager.unsubscribe(event);
  }
  async createInstantRequest(instantRequest) {
    this._key = await this._generateKey();
    const request = this._formatRequest({
      method: "wc_instantRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          request: this._formatRequest(instantRequest)
        }
      ]
    });
    this.handshakeId = request.id;
    this.handshakeTopic = uuid();
    this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    });
    this.on("modal_closed", () => {
      throw new Error(ERROR_QRCODE_MODAL_USER_CLOSED);
    });
    const endInstantRequest = () => {
      this.killSession();
    };
    try {
      const result = await this._sendCallRequest(request);
      if (result) {
        endInstantRequest();
      }
      return result;
    } catch (error) {
      endInstantRequest();
      throw error;
    }
  }
  async connect(opts) {
    if (!this._qrcodeModal) {
      throw new Error(ERROR_QRCODE_MODAL_NOT_PROVIDED);
    }
    if (this.connected) {
      return {
        chainId: this.chainId,
        accounts: this.accounts
      };
    }
    await this.createSession(opts);
    return new Promise(async (resolve, reject) => {
      this.on("modal_closed", () => reject(new Error(ERROR_QRCODE_MODAL_USER_CLOSED)));
      this.on("connect", (error, payload) => {
        if (error) {
          return reject(error);
        }
        resolve(payload.params[0]);
      });
    });
  }
  async createSession(opts) {
    if (this._connected) {
      throw new Error(ERROR_SESSION_CONNECTED);
    }
    if (this.pending) {
      return;
    }
    this._key = await this._generateKey();
    const request = this._formatRequest({
      method: "wc_sessionRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          chainId: opts && opts.chainId ? opts.chainId : null
        }
      ]
    });
    this.handshakeId = request.id;
    this.handshakeTopic = uuid();
    this._sendSessionRequest(request, "Session update rejected", {
      topic: this.handshakeTopic
    });
    this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    });
  }
  approveSession(sessionStatus) {
    if (this._connected) {
      throw new Error(ERROR_SESSION_CONNECTED);
    }
    this.chainId = sessionStatus.chainId;
    this.accounts = sessionStatus.accounts;
    this.networkId = sessionStatus.networkId || 0;
    this.rpcUrl = sessionStatus.rpcUrl || "";
    const sessionParams = {
      approved: true,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl,
      peerId: this.clientId,
      peerMeta: this.clientMeta
    };
    const response = {
      id: this.handshakeId,
      jsonrpc: "2.0",
      result: sessionParams
    };
    this._sendResponse(response);
    this._connected = true;
    this._setStorageSession();
    this._eventManager.trigger({
      event: "connect",
      params: [
        {
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    });
  }
  rejectSession(sessionError) {
    if (this._connected) {
      throw new Error(ERROR_SESSION_CONNECTED);
    }
    const message = sessionError && sessionError.message ? sessionError.message : ERROR_SESSION_REJECTED;
    const response = this._formatResponse({
      id: this.handshakeId,
      error: { message }
    });
    this._sendResponse(response);
    this._connected = false;
    this._eventManager.trigger({
      event: "disconnect",
      params: [{ message }]
    });
    this._removeStorageSession();
  }
  updateSession(sessionStatus) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    this.chainId = sessionStatus.chainId;
    this.accounts = sessionStatus.accounts;
    this.networkId = sessionStatus.networkId || 0;
    this.rpcUrl = sessionStatus.rpcUrl || "";
    const sessionParams = {
      approved: true,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl
    };
    const request = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [sessionParams]
    });
    this._sendSessionRequest(request, "Session update rejected");
    this._eventManager.trigger({
      event: "session_update",
      params: [
        {
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    });
    this._manageStorageSession();
  }
  async killSession(sessionError) {
    const message = sessionError ? sessionError.message : "Session Disconnected";
    const sessionParams = {
      approved: false,
      chainId: null,
      networkId: null,
      accounts: null
    };
    const request = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [sessionParams]
    });
    await this._sendRequest(request);
    this._handleSessionDisconnect(message);
  }
  async sendTransaction(tx) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const parsedTx = parseTransactionData(tx);
    const request = this._formatRequest({
      method: "eth_sendTransaction",
      params: [parsedTx]
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async signTransaction(tx) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const parsedTx = parseTransactionData(tx);
    const request = this._formatRequest({
      method: "eth_signTransaction",
      params: [parsedTx]
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async signMessage(params) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const request = this._formatRequest({
      method: "eth_sign",
      params
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async signPersonalMessage(params) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    params = parsePersonalSign(params);
    const request = this._formatRequest({
      method: "personal_sign",
      params
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async signTypedData(params) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    const request = this._formatRequest({
      method: "eth_signTypedData",
      params
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  async updateChain(chainParams) {
    if (!this._connected) {
      throw new Error("Session currently disconnected");
    }
    const request = this._formatRequest({
      method: "wallet_updateChain",
      params: [chainParams]
    });
    const result = await this._sendCallRequest(request);
    return result;
  }
  unsafeSend(request, options) {
    this._sendRequest(request, options);
    this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request, options }]
    });
    return new Promise((resolve, reject) => {
      this._subscribeToResponse(request.id, (error, payload) => {
        if (error) {
          reject(error);
          return;
        }
        if (!payload) {
          throw new Error(ERROR_MISSING_JSON_RPC);
        }
        resolve(payload);
      });
    });
  }
  async sendCustomRequest(request, options) {
    if (!this._connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }
    switch (request.method) {
      case "eth_accounts":
        return this.accounts;
      case "eth_chainId":
        return convertNumberToHex(this.chainId);
      case "eth_sendTransaction":
      case "eth_signTransaction":
        if (request.params) {
          request.params[0] = parseTransactionData(request.params[0]);
        }
        break;
      case "personal_sign":
        if (request.params) {
          request.params = parsePersonalSign(request.params);
        }
        break;
    }
    const formattedRequest = this._formatRequest(request);
    const result = await this._sendCallRequest(formattedRequest, options);
    return result;
  }
  approveRequest(response) {
    if (isJsonRpcResponseSuccess(response)) {
      const formattedResponse = this._formatResponse(response);
      this._sendResponse(formattedResponse);
    } else {
      throw new Error(ERROR_MISSING_RESULT);
    }
  }
  rejectRequest(response) {
    if (isJsonRpcResponseError(response)) {
      const formattedResponse = this._formatResponse(response);
      this._sendResponse(formattedResponse);
    } else {
      throw new Error(ERROR_MISSING_ERROR);
    }
  }
  transportClose() {
    this._transport.close();
  }
  async _sendRequest(request, options) {
    const callRequest = this._formatRequest(request);
    const encryptionPayload = await this._encrypt(callRequest);
    const topic = typeof (options === null || options === void 0 ? void 0 : options.topic) !== "undefined" ? options.topic : this.peerId;
    const payload = JSON.stringify(encryptionPayload);
    const silent = typeof (options === null || options === void 0 ? void 0 : options.forcePushNotification) !== "undefined" ? !options.forcePushNotification : isSilentPayload(callRequest);
    this._transport.send(payload, topic, silent);
  }
  async _sendResponse(response) {
    const encryptionPayload = await this._encrypt(response);
    const topic = this.peerId;
    const payload = JSON.stringify(encryptionPayload);
    const silent = true;
    this._transport.send(payload, topic, silent);
  }
  async _sendSessionRequest(request, errorMsg, options) {
    this._sendRequest(request, options);
    this._subscribeToSessionResponse(request.id, errorMsg);
  }
  _sendCallRequest(request, options) {
    this._sendRequest(request, options);
    this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request, options }]
    });
    return this._subscribeToCallResponse(request.id);
  }
  _formatRequest(request) {
    if (typeof request.method === "undefined") {
      throw new Error(ERROR_MISSING_METHOD);
    }
    const formattedRequest = {
      id: typeof request.id === "undefined" ? payloadId() : request.id,
      jsonrpc: "2.0",
      method: request.method,
      params: typeof request.params === "undefined" ? [] : request.params
    };
    return formattedRequest;
  }
  _formatResponse(response) {
    if (typeof response.id === "undefined") {
      throw new Error(ERROR_MISSING_ID);
    }
    const baseResponse = { id: response.id, jsonrpc: "2.0" };
    if (isJsonRpcResponseError(response)) {
      const error = formatRpcError(response.error);
      const errorResponse = Object.assign(Object.assign(Object.assign({}, baseResponse), response), { error });
      return errorResponse;
    } else if (isJsonRpcResponseSuccess(response)) {
      const successResponse = Object.assign(Object.assign({}, baseResponse), response);
      return successResponse;
    }
    throw new Error(ERROR_INVALID_RESPONSE);
  }
  _handleSessionDisconnect(errorMsg) {
    const message = errorMsg || "Session Disconnected";
    if (!this._connected) {
      if (this._qrcodeModal) {
        this._qrcodeModal.close();
      }
      removeLocal(mobileLinkChoiceKey);
    }
    if (this._connected) {
      this._connected = false;
    }
    if (this._handshakeId) {
      this._handshakeId = 0;
    }
    if (this._handshakeTopic) {
      this._handshakeTopic = "";
    }
    if (this._peerId) {
      this._peerId = "";
    }
    this._eventManager.trigger({
      event: "disconnect",
      params: [{ message }]
    });
    this._removeStorageSession();
    this.transportClose();
  }
  _handleSessionResponse(errorMsg, sessionParams) {
    if (sessionParams) {
      if (sessionParams.approved) {
        if (!this._connected) {
          this._connected = true;
          if (sessionParams.chainId) {
            this.chainId = sessionParams.chainId;
          }
          if (sessionParams.accounts) {
            this.accounts = sessionParams.accounts;
          }
          if (sessionParams.peerId && !this.peerId) {
            this.peerId = sessionParams.peerId;
          }
          if (sessionParams.peerMeta && !this.peerMeta) {
            this.peerMeta = sessionParams.peerMeta;
          }
          this._eventManager.trigger({
            event: "connect",
            params: [
              {
                peerId: this.peerId,
                peerMeta: this.peerMeta,
                chainId: this.chainId,
                accounts: this.accounts
              }
            ]
          });
        } else {
          if (sessionParams.chainId) {
            this.chainId = sessionParams.chainId;
          }
          if (sessionParams.accounts) {
            this.accounts = sessionParams.accounts;
          }
          this._eventManager.trigger({
            event: "session_update",
            params: [
              {
                chainId: this.chainId,
                accounts: this.accounts
              }
            ]
          });
        }
        this._manageStorageSession();
      } else {
        this._handleSessionDisconnect(errorMsg);
      }
    } else {
      this._handleSessionDisconnect(errorMsg);
    }
  }
  async _handleIncomingMessages(socketMessage) {
    const activeTopics = [this.clientId, this.handshakeTopic];
    if (!activeTopics.includes(socketMessage.topic)) {
      return;
    }
    let encryptionPayload;
    try {
      encryptionPayload = JSON.parse(socketMessage.payload);
    } catch (error) {
      return;
    }
    const payload = await this._decrypt(encryptionPayload);
    if (payload) {
      this._eventManager.trigger(payload);
    }
  }
  _subscribeToSessionRequest() {
    this._transport.subscribe(this.handshakeTopic);
  }
  _subscribeToResponse(id, callback) {
    this.on(`response:${id}`, callback);
  }
  _subscribeToSessionResponse(id, errorMsg) {
    this._subscribeToResponse(id, (error, payload) => {
      if (error) {
        this._handleSessionResponse(error.message);
        return;
      }
      if (isJsonRpcResponseSuccess(payload)) {
        this._handleSessionResponse(errorMsg, payload.result);
      } else if (payload.error && payload.error.message) {
        this._handleSessionResponse(payload.error.message);
      } else {
        this._handleSessionResponse(errorMsg);
      }
    });
  }
  _subscribeToCallResponse(id) {
    return new Promise((resolve, reject) => {
      this._subscribeToResponse(id, (error, payload) => {
        if (error) {
          reject(error);
          return;
        }
        if (isJsonRpcResponseSuccess(payload)) {
          resolve(payload.result);
        } else if (payload.error && payload.error.message) {
          reject(payload.error);
        } else {
          reject(new Error(ERROR_INVALID_RESPONSE));
        }
      });
    });
  }
  _subscribeToInternalEvents() {
    this.on("display_uri", () => {
      if (this._qrcodeModal) {
        this._qrcodeModal.open(this.uri, () => {
          this._eventManager.trigger({
            event: "modal_closed",
            params: []
          });
        }, this._qrcodeModalOptions);
      }
    });
    this.on("connect", () => {
      if (this._qrcodeModal) {
        this._qrcodeModal.close();
      }
    });
    this.on("call_request_sent", (error, payload) => {
      const { request } = payload.params[0];
      if (isMobile() && this._signingMethods.includes(request.method)) {
        const mobileLinkUrl = getLocal(mobileLinkChoiceKey);
        if (mobileLinkUrl) {
          window.location.href = mobileLinkUrl.href;
        }
      }
    });
    this.on("wc_sessionRequest", (error, payload) => {
      if (error) {
        this._eventManager.trigger({
          event: "error",
          params: [
            {
              code: "SESSION_REQUEST_ERROR",
              message: error.toString()
            }
          ]
        });
      }
      this.handshakeId = payload.id;
      this.peerId = payload.params[0].peerId;
      this.peerMeta = payload.params[0].peerMeta;
      const internalPayload = Object.assign(Object.assign({}, payload), { method: "session_request" });
      this._eventManager.trigger(internalPayload);
    });
    this.on("wc_sessionUpdate", (error, payload) => {
      if (error) {
        this._handleSessionResponse(error.message);
      }
      this._handleSessionResponse("Session disconnected", payload.params[0]);
    });
  }
  _initTransport() {
    this._transport.on("message", (socketMessage) => this._handleIncomingMessages(socketMessage));
    this._transport.on("open", () => this._eventManager.trigger({ event: "transport_open", params: [] }));
    this._transport.on("close", () => this._eventManager.trigger({ event: "transport_close", params: [] }));
    this._transport.on("error", () => this._eventManager.trigger({
      event: "transport_error",
      params: ["Websocket connection failed"]
    }));
    this._transport.open();
  }
  _formatUri() {
    const protocol = this.protocol;
    const handshakeTopic = this.handshakeTopic;
    const version = this.version;
    const bridge = encodeURIComponent(this.bridge);
    const key = this.key;
    const uri = `${protocol}:${handshakeTopic}@${version}?bridge=${bridge}&key=${key}`;
    return uri;
  }
  _parseUri(uri) {
    const result = parseWalletConnectUri(uri);
    if (result.protocol === this.protocol) {
      if (!result.handshakeTopic) {
        throw Error("Invalid or missing handshakeTopic parameter value");
      }
      const handshakeTopic = result.handshakeTopic;
      if (!result.bridge) {
        throw Error("Invalid or missing bridge url parameter value");
      }
      const bridge = decodeURIComponent(result.bridge);
      if (!result.key) {
        throw Error("Invalid or missing key parameter value");
      }
      const key = result.key;
      return { handshakeTopic, bridge, key };
    } else {
      throw new Error(ERROR_INVALID_URI);
    }
  }
  async _generateKey() {
    if (this._cryptoLib) {
      const result = await this._cryptoLib.generateKey();
      return result;
    }
    return null;
  }
  async _encrypt(data) {
    const key = this._key;
    if (this._cryptoLib && key) {
      const result = await this._cryptoLib.encrypt(data, key);
      return result;
    }
    return null;
  }
  async _decrypt(payload) {
    const key = this._key;
    if (this._cryptoLib && key) {
      const result = await this._cryptoLib.decrypt(payload, key);
      return result;
    }
    return null;
  }
  _getStorageSession() {
    let result = null;
    if (this._sessionStorage) {
      result = this._sessionStorage.getSession();
    }
    return result;
  }
  _setStorageSession() {
    if (this._sessionStorage) {
      this._sessionStorage.setSession(this.session);
    }
  }
  _removeStorageSession() {
    if (this._sessionStorage) {
      this._sessionStorage.removeSession();
    }
  }
  _manageStorageSession() {
    if (this._connected) {
      this._setStorageSession();
    } else {
      this._removeStorageSession();
    }
  }
  _registerPushServer(pushServerOpts) {
    if (!pushServerOpts.url || typeof pushServerOpts.url !== "string") {
      throw Error("Invalid or missing pushServerOpts.url parameter value");
    }
    if (!pushServerOpts.type || typeof pushServerOpts.type !== "string") {
      throw Error("Invalid or missing pushServerOpts.type parameter value");
    }
    if (!pushServerOpts.token || typeof pushServerOpts.token !== "string") {
      throw Error("Invalid or missing pushServerOpts.token parameter value");
    }
    const pushSubscription = {
      bridge: this.bridge,
      topic: this.clientId,
      type: pushServerOpts.type,
      token: pushServerOpts.token,
      peerName: "",
      language: pushServerOpts.language || ""
    };
    this.on("connect", async (error, payload) => {
      if (error) {
        throw error;
      }
      if (pushServerOpts.peerMeta) {
        const peerName = payload.params[0].peerMeta.name;
        pushSubscription.peerName = peerName;
      }
      try {
        const response = await fetch(`${pushServerOpts.url}/new`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(pushSubscription)
        });
        const json = await response.json();
        if (!json.success) {
          throw Error("Failed to register in Push Server");
        }
      } catch (error2) {
        throw Error("Failed to register in Push Server");
      }
    });
  }
}
function randomBytes(length) {
  const browserCrypto = cjs.getBrowerCrypto();
  return browserCrypto.getRandomValues(new Uint8Array(length));
}
const LENGTH_256 = 256;
const AES_LENGTH = LENGTH_256;
const HMAC_LENGTH = LENGTH_256;
const AES_BROWSER_ALGO = "AES-CBC";
const HMAC_BROWSER_ALGO = `SHA-${AES_LENGTH}`;
const HMAC_BROWSER = "HMAC";
const ENCRYPT_OP = "encrypt";
const DECRYPT_OP = "decrypt";
const SIGN_OP = "sign";
const VERIFY_OP = "verify";
function getAlgo(type) {
  return type === AES_BROWSER_ALGO ? { length: AES_LENGTH, name: AES_BROWSER_ALGO } : {
    hash: { name: HMAC_BROWSER_ALGO },
    name: HMAC_BROWSER
  };
}
function getOps(type) {
  return type === AES_BROWSER_ALGO ? [ENCRYPT_OP, DECRYPT_OP] : [SIGN_OP, VERIFY_OP];
}
async function browserImportKey(buffer, type = AES_BROWSER_ALGO) {
  return cjs.getSubtleCrypto().importKey("raw", buffer, getAlgo(type), true, getOps(type));
}
async function browserAesEncrypt(iv, key, data) {
  const subtle = cjs.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, AES_BROWSER_ALGO);
  const result = await subtle.encrypt({
    iv,
    name: AES_BROWSER_ALGO
  }, cryptoKey, data);
  return new Uint8Array(result);
}
async function browserAesDecrypt(iv, key, data) {
  const subtle = cjs.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, AES_BROWSER_ALGO);
  const result = await subtle.decrypt({
    iv,
    name: AES_BROWSER_ALGO
  }, cryptoKey, data);
  return new Uint8Array(result);
}
async function browserHmacSha256Sign(key, data) {
  const subtle = cjs.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, HMAC_BROWSER);
  const signature = await subtle.sign({
    length: HMAC_LENGTH,
    name: HMAC_BROWSER
  }, cryptoKey, data);
  return new Uint8Array(signature);
}
function aesCbcEncrypt(iv, key, data) {
  return browserAesEncrypt(iv, key, data);
}
function aesCbcDecrypt(iv, key, data) {
  return browserAesDecrypt(iv, key, data);
}
async function hmacSha256Sign(key, msg) {
  const result = await browserHmacSha256Sign(key, msg);
  return result;
}
async function generateKey(length) {
  const _length = (length || 256) / 8;
  const bytes = randomBytes(_length);
  const result = convertBufferToArrayBuffer(arrayToBuffer(bytes));
  return result;
}
async function verifyHmac(payload, key) {
  const cipherText = hexToArray(payload.data);
  const iv = hexToArray(payload.iv);
  const hmac = hexToArray(payload.hmac);
  const hmacHex = arrayToHex(hmac, false);
  const unsigned = concatArrays(cipherText, iv);
  const chmac = await hmacSha256Sign(key, unsigned);
  const chmacHex = arrayToHex(chmac, false);
  if (removeHexPrefix(hmacHex) === removeHexPrefix(chmacHex)) {
    return true;
  }
  return false;
}
async function encrypt(data, key, providedIv) {
  const _key = bufferToArray(convertArrayBufferToBuffer(key));
  const ivArrayBuffer = providedIv || await generateKey(128);
  const iv = bufferToArray(convertArrayBufferToBuffer(ivArrayBuffer));
  const ivHex = arrayToHex(iv, false);
  const contentString = JSON.stringify(data);
  const content = utf8ToArray(contentString);
  const cipherText = await aesCbcEncrypt(iv, _key, content);
  const cipherTextHex = arrayToHex(cipherText, false);
  const unsigned = concatArrays(cipherText, iv);
  const hmac = await hmacSha256Sign(_key, unsigned);
  const hmacHex = arrayToHex(hmac, false);
  return {
    data: cipherTextHex,
    hmac: hmacHex,
    iv: ivHex
  };
}
async function decrypt(payload, key) {
  const _key = bufferToArray(convertArrayBufferToBuffer(key));
  if (!_key) {
    throw new Error("Missing key: required for decryption");
  }
  const verified = await verifyHmac(payload, _key);
  if (!verified) {
    return null;
  }
  const cipherText = hexToArray(payload.data);
  const iv = hexToArray(payload.iv);
  const buffer = await aesCbcDecrypt(iv, _key, cipherText);
  const utf8 = arrayToUtf8(buffer);
  let data;
  try {
    data = JSON.parse(utf8);
  } catch (error) {
    return null;
  }
  return data;
}
const cryptoLib = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decrypt,
  encrypt,
  generateKey,
  verifyHmac
}, Symbol.toStringTag, { value: "Module" }));
class WalletConnect extends Connector {
  constructor(connectorOpts, pushServerOpts) {
    super({
      cryptoLib,
      connectorOpts,
      pushServerOpts
    });
  }
}
const esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WalletConnect
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(esm);
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(esm$1);
var es5Exports = {};
var es5 = {
  get exports() {
    return es5Exports;
  },
  set exports(v) {
    es5Exports = v;
  }
};
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e) {
      var t = {};
      function r(n) {
        if (t[n])
          return t[n].exports;
        var i = t[n] = { i: n, l: false, exports: {} };
        return e[n].call(i.exports, i, i.exports, r), i.l = true, i.exports;
      }
      return r.m = e, r.c = t, r.d = function(e2, t2, n) {
        r.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: n });
      }, r.r = function(e2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, r.t = function(e2, t2) {
        if (1 & t2 && (e2 = r(e2)), 8 & t2)
          return e2;
        if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
          return e2;
        var n = /* @__PURE__ */ Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
          for (var i in e2)
            r.d(n, i, function(t3) {
              return e2[t3];
            }.bind(null, i));
        return n;
      }, r.n = function(e2) {
        var t2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return r.d(t2, "a", t2), t2;
      }, r.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, r.p = "", r(r.s = 90);
    }({ 17: function(e, t, r) {
      t.__esModule = true, t.default = void 0;
      var n = r(18), i = function() {
        function e2() {
        }
        return e2.getFirstMatch = function(e3, t2) {
          var r2 = t2.match(e3);
          return r2 && r2.length > 0 && r2[1] || "";
        }, e2.getSecondMatch = function(e3, t2) {
          var r2 = t2.match(e3);
          return r2 && r2.length > 1 && r2[2] || "";
        }, e2.matchAndReturnConst = function(e3, t2, r2) {
          if (e3.test(t2))
            return r2;
        }, e2.getWindowsVersionName = function(e3) {
          switch (e3) {
            case "NT":
              return "NT";
            case "XP":
              return "XP";
            case "NT 5.0":
              return "2000";
            case "NT 5.1":
              return "XP";
            case "NT 5.2":
              return "2003";
            case "NT 6.0":
              return "Vista";
            case "NT 6.1":
              return "7";
            case "NT 6.2":
              return "8";
            case "NT 6.3":
              return "8.1";
            case "NT 10.0":
              return "10";
            default:
              return;
          }
        }, e2.getMacOSVersionName = function(e3) {
          var t2 = e3.split(".").splice(0, 2).map(function(e4) {
            return parseInt(e4, 10) || 0;
          });
          if (t2.push(0), 10 === t2[0])
            switch (t2[1]) {
              case 5:
                return "Leopard";
              case 6:
                return "Snow Leopard";
              case 7:
                return "Lion";
              case 8:
                return "Mountain Lion";
              case 9:
                return "Mavericks";
              case 10:
                return "Yosemite";
              case 11:
                return "El Capitan";
              case 12:
                return "Sierra";
              case 13:
                return "High Sierra";
              case 14:
                return "Mojave";
              case 15:
                return "Catalina";
              default:
                return;
            }
        }, e2.getAndroidVersionName = function(e3) {
          var t2 = e3.split(".").splice(0, 2).map(function(e4) {
            return parseInt(e4, 10) || 0;
          });
          if (t2.push(0), !(1 === t2[0] && t2[1] < 5))
            return 1 === t2[0] && t2[1] < 6 ? "Cupcake" : 1 === t2[0] && t2[1] >= 6 ? "Donut" : 2 === t2[0] && t2[1] < 2 ? "Eclair" : 2 === t2[0] && 2 === t2[1] ? "Froyo" : 2 === t2[0] && t2[1] > 2 ? "Gingerbread" : 3 === t2[0] ? "Honeycomb" : 4 === t2[0] && t2[1] < 1 ? "Ice Cream Sandwich" : 4 === t2[0] && t2[1] < 4 ? "Jelly Bean" : 4 === t2[0] && t2[1] >= 4 ? "KitKat" : 5 === t2[0] ? "Lollipop" : 6 === t2[0] ? "Marshmallow" : 7 === t2[0] ? "Nougat" : 8 === t2[0] ? "Oreo" : 9 === t2[0] ? "Pie" : void 0;
        }, e2.getVersionPrecision = function(e3) {
          return e3.split(".").length;
        }, e2.compareVersions = function(t2, r2, n2) {
          void 0 === n2 && (n2 = false);
          var i2 = e2.getVersionPrecision(t2), s = e2.getVersionPrecision(r2), a = Math.max(i2, s), o = 0, u = e2.map([t2, r2], function(t3) {
            var r3 = a - e2.getVersionPrecision(t3), n3 = t3 + new Array(r3 + 1).join(".0");
            return e2.map(n3.split("."), function(e3) {
              return new Array(20 - e3.length).join("0") + e3;
            }).reverse();
          });
          for (n2 && (o = a - Math.min(i2, s)), a -= 1; a >= o; ) {
            if (u[0][a] > u[1][a])
              return 1;
            if (u[0][a] === u[1][a]) {
              if (a === o)
                return 0;
              a -= 1;
            } else if (u[0][a] < u[1][a])
              return -1;
          }
        }, e2.map = function(e3, t2) {
          var r2, n2 = [];
          if (Array.prototype.map)
            return Array.prototype.map.call(e3, t2);
          for (r2 = 0; r2 < e3.length; r2 += 1)
            n2.push(t2(e3[r2]));
          return n2;
        }, e2.find = function(e3, t2) {
          var r2, n2;
          if (Array.prototype.find)
            return Array.prototype.find.call(e3, t2);
          for (r2 = 0, n2 = e3.length; r2 < n2; r2 += 1) {
            var i2 = e3[r2];
            if (t2(i2, r2))
              return i2;
          }
        }, e2.assign = function(e3) {
          for (var t2, r2, n2 = e3, i2 = arguments.length, s = new Array(i2 > 1 ? i2 - 1 : 0), a = 1; a < i2; a++)
            s[a - 1] = arguments[a];
          if (Object.assign)
            return Object.assign.apply(Object, [e3].concat(s));
          var o = function() {
            var e4 = s[t2];
            "object" == typeof e4 && null !== e4 && Object.keys(e4).forEach(function(t3) {
              n2[t3] = e4[t3];
            });
          };
          for (t2 = 0, r2 = s.length; t2 < r2; t2 += 1)
            o();
          return e3;
        }, e2.getBrowserAlias = function(e3) {
          return n.BROWSER_ALIASES_MAP[e3];
        }, e2.getBrowserTypeByAlias = function(e3) {
          return n.BROWSER_MAP[e3] || "";
        }, e2;
      }();
      t.default = i, e.exports = t.default;
    }, 18: function(e, t, r) {
      t.__esModule = true, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0;
      t.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" };
      t.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" };
      t.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" };
      t.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" };
      t.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
    }, 90: function(e, t, r) {
      t.__esModule = true, t.default = void 0;
      var n, i = (n = r(91)) && n.__esModule ? n : { default: n }, s = r(18);
      function a(e2, t2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          var n2 = t2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
        }
      }
      var o = function() {
        function e2() {
        }
        var t2, r2, n2;
        return e2.getParser = function(e3, t3) {
          if (void 0 === t3 && (t3 = false), "string" != typeof e3)
            throw new Error("UserAgent should be a string");
          return new i.default(e3, t3);
        }, e2.parse = function(e3) {
          return new i.default(e3).getResult();
        }, t2 = e2, n2 = [{ key: "BROWSER_MAP", get: function() {
          return s.BROWSER_MAP;
        } }, { key: "ENGINE_MAP", get: function() {
          return s.ENGINE_MAP;
        } }, { key: "OS_MAP", get: function() {
          return s.OS_MAP;
        } }, { key: "PLATFORMS_MAP", get: function() {
          return s.PLATFORMS_MAP;
        } }], (r2 = null) && a(t2.prototype, r2), n2 && a(t2, n2), e2;
      }();
      t.default = o, e.exports = t.default;
    }, 91: function(e, t, r) {
      t.__esModule = true, t.default = void 0;
      var n = u(r(92)), i = u(r(93)), s = u(r(94)), a = u(r(95)), o = u(r(17));
      function u(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      var d = function() {
        function e2(e3, t3) {
          if (void 0 === t3 && (t3 = false), null == e3 || "" === e3)
            throw new Error("UserAgent parameter can't be empty");
          this._ua = e3, this.parsedResult = {}, true !== t3 && this.parse();
        }
        var t2 = e2.prototype;
        return t2.getUA = function() {
          return this._ua;
        }, t2.test = function(e3) {
          return e3.test(this._ua);
        }, t2.parseBrowser = function() {
          var e3 = this;
          this.parsedResult.browser = {};
          var t3 = o.default.find(n.default, function(t4) {
            if ("function" == typeof t4.test)
              return t4.test(e3);
            if (t4.test instanceof Array)
              return t4.test.some(function(t5) {
                return e3.test(t5);
              });
            throw new Error("Browser's test function is not valid");
          });
          return t3 && (this.parsedResult.browser = t3.describe(this.getUA())), this.parsedResult.browser;
        }, t2.getBrowser = function() {
          return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
        }, t2.getBrowserName = function(e3) {
          return e3 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
        }, t2.getBrowserVersion = function() {
          return this.getBrowser().version;
        }, t2.getOS = function() {
          return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
        }, t2.parseOS = function() {
          var e3 = this;
          this.parsedResult.os = {};
          var t3 = o.default.find(i.default, function(t4) {
            if ("function" == typeof t4.test)
              return t4.test(e3);
            if (t4.test instanceof Array)
              return t4.test.some(function(t5) {
                return e3.test(t5);
              });
            throw new Error("Browser's test function is not valid");
          });
          return t3 && (this.parsedResult.os = t3.describe(this.getUA())), this.parsedResult.os;
        }, t2.getOSName = function(e3) {
          var t3 = this.getOS().name;
          return e3 ? String(t3).toLowerCase() || "" : t3 || "";
        }, t2.getOSVersion = function() {
          return this.getOS().version;
        }, t2.getPlatform = function() {
          return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
        }, t2.getPlatformType = function(e3) {
          void 0 === e3 && (e3 = false);
          var t3 = this.getPlatform().type;
          return e3 ? String(t3).toLowerCase() || "" : t3 || "";
        }, t2.parsePlatform = function() {
          var e3 = this;
          this.parsedResult.platform = {};
          var t3 = o.default.find(s.default, function(t4) {
            if ("function" == typeof t4.test)
              return t4.test(e3);
            if (t4.test instanceof Array)
              return t4.test.some(function(t5) {
                return e3.test(t5);
              });
            throw new Error("Browser's test function is not valid");
          });
          return t3 && (this.parsedResult.platform = t3.describe(this.getUA())), this.parsedResult.platform;
        }, t2.getEngine = function() {
          return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
        }, t2.getEngineName = function(e3) {
          return e3 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
        }, t2.parseEngine = function() {
          var e3 = this;
          this.parsedResult.engine = {};
          var t3 = o.default.find(a.default, function(t4) {
            if ("function" == typeof t4.test)
              return t4.test(e3);
            if (t4.test instanceof Array)
              return t4.test.some(function(t5) {
                return e3.test(t5);
              });
            throw new Error("Browser's test function is not valid");
          });
          return t3 && (this.parsedResult.engine = t3.describe(this.getUA())), this.parsedResult.engine;
        }, t2.parse = function() {
          return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
        }, t2.getResult = function() {
          return o.default.assign({}, this.parsedResult);
        }, t2.satisfies = function(e3) {
          var t3 = this, r2 = {}, n2 = 0, i2 = {}, s2 = 0;
          if (Object.keys(e3).forEach(function(t4) {
            var a3 = e3[t4];
            "string" == typeof a3 ? (i2[t4] = a3, s2 += 1) : "object" == typeof a3 && (r2[t4] = a3, n2 += 1);
          }), n2 > 0) {
            var a2 = Object.keys(r2), u2 = o.default.find(a2, function(e4) {
              return t3.isOS(e4);
            });
            if (u2) {
              var d2 = this.satisfies(r2[u2]);
              if (void 0 !== d2)
                return d2;
            }
            var c = o.default.find(a2, function(e4) {
              return t3.isPlatform(e4);
            });
            if (c) {
              var f = this.satisfies(r2[c]);
              if (void 0 !== f)
                return f;
            }
          }
          if (s2 > 0) {
            var l = Object.keys(i2), h = o.default.find(l, function(e4) {
              return t3.isBrowser(e4, true);
            });
            if (void 0 !== h)
              return this.compareVersion(i2[h]);
          }
        }, t2.isBrowser = function(e3, t3) {
          void 0 === t3 && (t3 = false);
          var r2 = this.getBrowserName().toLowerCase(), n2 = e3.toLowerCase(), i2 = o.default.getBrowserTypeByAlias(n2);
          return t3 && i2 && (n2 = i2.toLowerCase()), n2 === r2;
        }, t2.compareVersion = function(e3) {
          var t3 = [0], r2 = e3, n2 = false, i2 = this.getBrowserVersion();
          if ("string" == typeof i2)
            return ">" === e3[0] || "<" === e3[0] ? (r2 = e3.substr(1), "=" === e3[1] ? (n2 = true, r2 = e3.substr(2)) : t3 = [], ">" === e3[0] ? t3.push(1) : t3.push(-1)) : "=" === e3[0] ? r2 = e3.substr(1) : "~" === e3[0] && (n2 = true, r2 = e3.substr(1)), t3.indexOf(o.default.compareVersions(i2, r2, n2)) > -1;
        }, t2.isOS = function(e3) {
          return this.getOSName(true) === String(e3).toLowerCase();
        }, t2.isPlatform = function(e3) {
          return this.getPlatformType(true) === String(e3).toLowerCase();
        }, t2.isEngine = function(e3) {
          return this.getEngineName(true) === String(e3).toLowerCase();
        }, t2.is = function(e3, t3) {
          return void 0 === t3 && (t3 = false), this.isBrowser(e3, t3) || this.isOS(e3) || this.isPlatform(e3);
        }, t2.some = function(e3) {
          var t3 = this;
          return void 0 === e3 && (e3 = []), e3.some(function(e4) {
            return t3.is(e4);
          });
        }, e2;
      }();
      t.default = d, e.exports = t.default;
    }, 92: function(e, t, r) {
      t.__esModule = true, t.default = void 0;
      var n, i = (n = r(17)) && n.__esModule ? n : { default: n };
      var s = /version\/(\d+(\.?_?\d+)+)/i, a = [{ test: [/googlebot/i], describe: function(e2) {
        var t2 = { name: "Googlebot" }, r2 = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e2) || i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/opera/i], describe: function(e2) {
        var t2 = { name: "Opera" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/opr\/|opios/i], describe: function(e2) {
        var t2 = { name: "Opera" }, r2 = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e2) || i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/SamsungBrowser/i], describe: function(e2) {
        var t2 = { name: "Samsung Internet for Android" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/Whale/i], describe: function(e2) {
        var t2 = { name: "NAVER Whale Browser" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/MZBrowser/i], describe: function(e2) {
        var t2 = { name: "MZ Browser" }, r2 = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/focus/i], describe: function(e2) {
        var t2 = { name: "Focus" }, r2 = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/swing/i], describe: function(e2) {
        var t2 = { name: "Swing" }, r2 = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/coast/i], describe: function(e2) {
        var t2 = { name: "Opera Coast" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function(e2) {
        var t2 = { name: "Opera Touch" }, r2 = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/yabrowser/i], describe: function(e2) {
        var t2 = { name: "Yandex Browser" }, r2 = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/ucbrowser/i], describe: function(e2) {
        var t2 = { name: "UC Browser" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/Maxthon|mxios/i], describe: function(e2) {
        var t2 = { name: "Maxthon" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/epiphany/i], describe: function(e2) {
        var t2 = { name: "Epiphany" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/puffin/i], describe: function(e2) {
        var t2 = { name: "Puffin" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/sleipnir/i], describe: function(e2) {
        var t2 = { name: "Sleipnir" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/k-meleon/i], describe: function(e2) {
        var t2 = { name: "K-Meleon" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/micromessenger/i], describe: function(e2) {
        var t2 = { name: "WeChat" }, r2 = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/qqbrowser/i], describe: function(e2) {
        var t2 = { name: /qqbrowserlite/i.test(e2) ? "QQ Browser Lite" : "QQ Browser" }, r2 = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/msie|trident/i], describe: function(e2) {
        var t2 = { name: "Internet Explorer" }, r2 = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/\sedg\//i], describe: function(e2) {
        var t2 = { name: "Microsoft Edge" }, r2 = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/edg([ea]|ios)/i], describe: function(e2) {
        var t2 = { name: "Microsoft Edge" }, r2 = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/vivaldi/i], describe: function(e2) {
        var t2 = { name: "Vivaldi" }, r2 = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/seamonkey/i], describe: function(e2) {
        var t2 = { name: "SeaMonkey" }, r2 = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/sailfish/i], describe: function(e2) {
        var t2 = { name: "Sailfish" }, r2 = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/silk/i], describe: function(e2) {
        var t2 = { name: "Amazon Silk" }, r2 = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/phantom/i], describe: function(e2) {
        var t2 = { name: "PhantomJS" }, r2 = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/slimerjs/i], describe: function(e2) {
        var t2 = { name: "SlimerJS" }, r2 = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e2) {
        var t2 = { name: "BlackBerry" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/(web|hpw)[o0]s/i], describe: function(e2) {
        var t2 = { name: "WebOS Browser" }, r2 = i.default.getFirstMatch(s, e2) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/bada/i], describe: function(e2) {
        var t2 = { name: "Bada" }, r2 = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/tizen/i], describe: function(e2) {
        var t2 = { name: "Tizen" }, r2 = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/qupzilla/i], describe: function(e2) {
        var t2 = { name: "QupZilla" }, r2 = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/firefox|iceweasel|fxios/i], describe: function(e2) {
        var t2 = { name: "Firefox" }, r2 = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/electron/i], describe: function(e2) {
        var t2 = { name: "Electron" }, r2 = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/MiuiBrowser/i], describe: function(e2) {
        var t2 = { name: "Miui" }, r2 = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/chromium/i], describe: function(e2) {
        var t2 = { name: "Chromium" }, r2 = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e2) || i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/chrome|crios|crmo/i], describe: function(e2) {
        var t2 = { name: "Chrome" }, r2 = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/GSA/i], describe: function(e2) {
        var t2 = { name: "Google Search" }, r2 = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: function(e2) {
        var t2 = !e2.test(/like android/i), r2 = e2.test(/android/i);
        return t2 && r2;
      }, describe: function(e2) {
        var t2 = { name: "Android Browser" }, r2 = i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/playstation 4/i], describe: function(e2) {
        var t2 = { name: "PlayStation 4" }, r2 = i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/safari|applewebkit/i], describe: function(e2) {
        var t2 = { name: "Safari" }, r2 = i.default.getFirstMatch(s, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/.*/i], describe: function(e2) {
        var t2 = -1 !== e2.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
        return { name: i.default.getFirstMatch(t2, e2), version: i.default.getSecondMatch(t2, e2) };
      } }];
      t.default = a, e.exports = t.default;
    }, 93: function(e, t, r) {
      t.__esModule = true, t.default = void 0;
      var n, i = (n = r(17)) && n.__esModule ? n : { default: n }, s = r(18);
      var a = [{ test: [/Roku\/DVP/], describe: function(e2) {
        var t2 = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e2);
        return { name: s.OS_MAP.Roku, version: t2 };
      } }, { test: [/windows phone/i], describe: function(e2) {
        var t2 = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e2);
        return { name: s.OS_MAP.WindowsPhone, version: t2 };
      } }, { test: [/windows /i], describe: function(e2) {
        var t2 = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e2), r2 = i.default.getWindowsVersionName(t2);
        return { name: s.OS_MAP.Windows, version: t2, versionName: r2 };
      } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function(e2) {
        var t2 = { name: s.OS_MAP.iOS }, r2 = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/macintosh/i], describe: function(e2) {
        var t2 = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e2).replace(/[_\s]/g, "."), r2 = i.default.getMacOSVersionName(t2), n2 = { name: s.OS_MAP.MacOS, version: t2 };
        return r2 && (n2.versionName = r2), n2;
      } }, { test: [/(ipod|iphone|ipad)/i], describe: function(e2) {
        var t2 = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e2).replace(/[_\s]/g, ".");
        return { name: s.OS_MAP.iOS, version: t2 };
      } }, { test: function(e2) {
        var t2 = !e2.test(/like android/i), r2 = e2.test(/android/i);
        return t2 && r2;
      }, describe: function(e2) {
        var t2 = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e2), r2 = i.default.getAndroidVersionName(t2), n2 = { name: s.OS_MAP.Android, version: t2 };
        return r2 && (n2.versionName = r2), n2;
      } }, { test: [/(web|hpw)[o0]s/i], describe: function(e2) {
        var t2 = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e2), r2 = { name: s.OS_MAP.WebOS };
        return t2 && t2.length && (r2.version = t2), r2;
      } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e2) {
        var t2 = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e2) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e2) || i.default.getFirstMatch(/\bbb(\d+)/i, e2);
        return { name: s.OS_MAP.BlackBerry, version: t2 };
      } }, { test: [/bada/i], describe: function(e2) {
        var t2 = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e2);
        return { name: s.OS_MAP.Bada, version: t2 };
      } }, { test: [/tizen/i], describe: function(e2) {
        var t2 = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e2);
        return { name: s.OS_MAP.Tizen, version: t2 };
      } }, { test: [/linux/i], describe: function() {
        return { name: s.OS_MAP.Linux };
      } }, { test: [/CrOS/], describe: function() {
        return { name: s.OS_MAP.ChromeOS };
      } }, { test: [/PlayStation 4/], describe: function(e2) {
        var t2 = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e2);
        return { name: s.OS_MAP.PlayStation4, version: t2 };
      } }];
      t.default = a, e.exports = t.default;
    }, 94: function(e, t, r) {
      t.__esModule = true, t.default = void 0;
      var n, i = (n = r(17)) && n.__esModule ? n : { default: n }, s = r(18);
      var a = [{ test: [/googlebot/i], describe: function() {
        return { type: "bot", vendor: "Google" };
      } }, { test: [/huawei/i], describe: function(e2) {
        var t2 = i.default.getFirstMatch(/(can-l01)/i, e2) && "Nova", r2 = { type: s.PLATFORMS_MAP.mobile, vendor: "Huawei" };
        return t2 && (r2.model = t2), r2;
      } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() {
        return { type: s.PLATFORMS_MAP.tablet, vendor: "Nexus" };
      } }, { test: [/ipad/i], describe: function() {
        return { type: s.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
      } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() {
        return { type: s.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
      } }, { test: [/kftt build/i], describe: function() {
        return { type: s.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
      } }, { test: [/silk/i], describe: function() {
        return { type: s.PLATFORMS_MAP.tablet, vendor: "Amazon" };
      } }, { test: [/tablet(?! pc)/i], describe: function() {
        return { type: s.PLATFORMS_MAP.tablet };
      } }, { test: function(e2) {
        var t2 = e2.test(/ipod|iphone/i), r2 = e2.test(/like (ipod|iphone)/i);
        return t2 && !r2;
      }, describe: function(e2) {
        var t2 = i.default.getFirstMatch(/(ipod|iphone)/i, e2);
        return { type: s.PLATFORMS_MAP.mobile, vendor: "Apple", model: t2 };
      } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() {
        return { type: s.PLATFORMS_MAP.mobile, vendor: "Nexus" };
      } }, { test: [/[^-]mobi/i], describe: function() {
        return { type: s.PLATFORMS_MAP.mobile };
      } }, { test: function(e2) {
        return "blackberry" === e2.getBrowserName(true);
      }, describe: function() {
        return { type: s.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
      } }, { test: function(e2) {
        return "bada" === e2.getBrowserName(true);
      }, describe: function() {
        return { type: s.PLATFORMS_MAP.mobile };
      } }, { test: function(e2) {
        return "windows phone" === e2.getBrowserName();
      }, describe: function() {
        return { type: s.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
      } }, { test: function(e2) {
        var t2 = Number(String(e2.getOSVersion()).split(".")[0]);
        return "android" === e2.getOSName(true) && t2 >= 3;
      }, describe: function() {
        return { type: s.PLATFORMS_MAP.tablet };
      } }, { test: function(e2) {
        return "android" === e2.getOSName(true);
      }, describe: function() {
        return { type: s.PLATFORMS_MAP.mobile };
      } }, { test: function(e2) {
        return "macos" === e2.getOSName(true);
      }, describe: function() {
        return { type: s.PLATFORMS_MAP.desktop, vendor: "Apple" };
      } }, { test: function(e2) {
        return "windows" === e2.getOSName(true);
      }, describe: function() {
        return { type: s.PLATFORMS_MAP.desktop };
      } }, { test: function(e2) {
        return "linux" === e2.getOSName(true);
      }, describe: function() {
        return { type: s.PLATFORMS_MAP.desktop };
      } }, { test: function(e2) {
        return "playstation 4" === e2.getOSName(true);
      }, describe: function() {
        return { type: s.PLATFORMS_MAP.tv };
      } }, { test: function(e2) {
        return "roku" === e2.getOSName(true);
      }, describe: function() {
        return { type: s.PLATFORMS_MAP.tv };
      } }];
      t.default = a, e.exports = t.default;
    }, 95: function(e, t, r) {
      t.__esModule = true, t.default = void 0;
      var n, i = (n = r(17)) && n.__esModule ? n : { default: n }, s = r(18);
      var a = [{ test: function(e2) {
        return "microsoft edge" === e2.getBrowserName(true);
      }, describe: function(e2) {
        if (/\sedg\//i.test(e2))
          return { name: s.ENGINE_MAP.Blink };
        var t2 = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e2);
        return { name: s.ENGINE_MAP.EdgeHTML, version: t2 };
      } }, { test: [/trident/i], describe: function(e2) {
        var t2 = { name: s.ENGINE_MAP.Trident }, r2 = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: function(e2) {
        return e2.test(/presto/i);
      }, describe: function(e2) {
        var t2 = { name: s.ENGINE_MAP.Presto }, r2 = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: function(e2) {
        var t2 = e2.test(/gecko/i), r2 = e2.test(/like gecko/i);
        return t2 && !r2;
      }, describe: function(e2) {
        var t2 = { name: s.ENGINE_MAP.Gecko }, r2 = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }, { test: [/(apple)?webkit\/537\.36/i], describe: function() {
        return { name: s.ENGINE_MAP.Blink };
      } }, { test: [/(apple)?webkit/i], describe: function(e2) {
        var t2 = { name: s.ENGINE_MAP.WebKit }, r2 = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e2);
        return r2 && (t2.version = r2), t2;
      } }];
      t.default = a, e.exports = t.default;
    } });
  });
})(es5);
var qrCodeStylingExports = {};
var qrCodeStyling = {
  get exports() {
    return qrCodeStylingExports;
  },
  set exports(v) {
    qrCodeStylingExports = v;
  }
};
var hasRequiredQrCodeStyling;
function requireQrCodeStyling() {
  if (hasRequiredQrCodeStyling)
    return qrCodeStylingExports;
  hasRequiredQrCodeStyling = 1;
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(self, function() {
      return (() => {
        var t = { 192: (t2, e2) => {
          var r2, n, o = function() {
            var t3 = function(t4, e4) {
              var r4 = t4, n3 = a[e4], o3 = null, i2 = 0, u2 = null, v2 = [], w2 = {}, m = function(t5, e5) {
                o3 = function(t6) {
                  for (var e6 = new Array(t6), r5 = 0; r5 < t6; r5 += 1) {
                    e6[r5] = new Array(t6);
                    for (var n4 = 0; n4 < t6; n4 += 1)
                      e6[r5][n4] = null;
                  }
                  return e6;
                }(i2 = 4 * r4 + 17), b(0, 0), b(i2 - 7, 0), b(0, i2 - 7), x(), _(), M(t5, e5), r4 >= 7 && S(t5), null == u2 && (u2 = A(r4, n3, v2)), C(u2, e5);
              }, b = function(t5, e5) {
                for (var r5 = -1; r5 <= 7; r5 += 1)
                  if (!(t5 + r5 <= -1 || i2 <= t5 + r5))
                    for (var n4 = -1; n4 <= 7; n4 += 1)
                      e5 + n4 <= -1 || i2 <= e5 + n4 || (o3[t5 + r5][e5 + n4] = 0 <= r5 && r5 <= 6 && (0 == n4 || 6 == n4) || 0 <= n4 && n4 <= 6 && (0 == r5 || 6 == r5) || 2 <= r5 && r5 <= 4 && 2 <= n4 && n4 <= 4);
              }, _ = function() {
                for (var t5 = 8; t5 < i2 - 8; t5 += 1)
                  null == o3[t5][6] && (o3[t5][6] = t5 % 2 == 0);
                for (var e5 = 8; e5 < i2 - 8; e5 += 1)
                  null == o3[6][e5] && (o3[6][e5] = e5 % 2 == 0);
              }, x = function() {
                for (var t5 = s.getPatternPosition(r4), e5 = 0; e5 < t5.length; e5 += 1)
                  for (var n4 = 0; n4 < t5.length; n4 += 1) {
                    var i3 = t5[e5], a2 = t5[n4];
                    if (null == o3[i3][a2])
                      for (var u3 = -2; u3 <= 2; u3 += 1)
                        for (var h2 = -2; h2 <= 2; h2 += 1)
                          o3[i3 + u3][a2 + h2] = -2 == u3 || 2 == u3 || -2 == h2 || 2 == h2 || 0 == u3 && 0 == h2;
                  }
              }, S = function(t5) {
                for (var e5 = s.getBCHTypeNumber(r4), n4 = 0; n4 < 18; n4 += 1) {
                  var a2 = !t5 && 1 == (e5 >> n4 & 1);
                  o3[Math.floor(n4 / 3)][n4 % 3 + i2 - 8 - 3] = a2;
                }
                for (n4 = 0; n4 < 18; n4 += 1)
                  a2 = !t5 && 1 == (e5 >> n4 & 1), o3[n4 % 3 + i2 - 8 - 3][Math.floor(n4 / 3)] = a2;
              }, M = function(t5, e5) {
                for (var r5 = n3 << 3 | e5, a2 = s.getBCHTypeInfo(r5), u3 = 0; u3 < 15; u3 += 1) {
                  var h2 = !t5 && 1 == (a2 >> u3 & 1);
                  u3 < 6 ? o3[u3][8] = h2 : u3 < 8 ? o3[u3 + 1][8] = h2 : o3[i2 - 15 + u3][8] = h2;
                }
                for (u3 = 0; u3 < 15; u3 += 1)
                  h2 = !t5 && 1 == (a2 >> u3 & 1), u3 < 8 ? o3[8][i2 - u3 - 1] = h2 : u3 < 9 ? o3[8][15 - u3 - 1 + 1] = h2 : o3[8][15 - u3 - 1] = h2;
                o3[i2 - 8][8] = !t5;
              }, C = function(t5, e5) {
                for (var r5 = -1, n4 = i2 - 1, a2 = 7, u3 = 0, h2 = s.getMaskFunction(e5), c2 = i2 - 1; c2 > 0; c2 -= 2)
                  for (6 == c2 && (c2 -= 1); ; ) {
                    for (var l2 = 0; l2 < 2; l2 += 1)
                      if (null == o3[n4][c2 - l2]) {
                        var d2 = false;
                        u3 < t5.length && (d2 = 1 == (t5[u3] >>> a2 & 1)), h2(n4, c2 - l2) && (d2 = !d2), o3[n4][c2 - l2] = d2, -1 == (a2 -= 1) && (u3 += 1, a2 = 7);
                      }
                    if ((n4 += r5) < 0 || i2 <= n4) {
                      n4 -= r5, r5 = -r5;
                      break;
                    }
                  }
              }, A = function(t5, e5, r5) {
                for (var n4 = c.getRSBlocks(t5, e5), o4 = l(), i3 = 0; i3 < r5.length; i3 += 1) {
                  var a2 = r5[i3];
                  o4.put(a2.getMode(), 4), o4.put(a2.getLength(), s.getLengthInBits(a2.getMode(), t5)), a2.write(o4);
                }
                var u3 = 0;
                for (i3 = 0; i3 < n4.length; i3 += 1)
                  u3 += n4[i3].dataCount;
                if (o4.getLengthInBits() > 8 * u3)
                  throw "code length overflow. (" + o4.getLengthInBits() + ">" + 8 * u3 + ")";
                for (o4.getLengthInBits() + 4 <= 8 * u3 && o4.put(0, 4); o4.getLengthInBits() % 8 != 0; )
                  o4.putBit(false);
                for (; !(o4.getLengthInBits() >= 8 * u3 || (o4.put(236, 8), o4.getLengthInBits() >= 8 * u3)); )
                  o4.put(17, 8);
                return function(t6, e6) {
                  for (var r6 = 0, n5 = 0, o5 = 0, i4 = new Array(e6.length), a3 = new Array(e6.length), u4 = 0; u4 < e6.length; u4 += 1) {
                    var c2 = e6[u4].dataCount, l2 = e6[u4].totalCount - c2;
                    n5 = Math.max(n5, c2), o5 = Math.max(o5, l2), i4[u4] = new Array(c2);
                    for (var d2 = 0; d2 < i4[u4].length; d2 += 1)
                      i4[u4][d2] = 255 & t6.getBuffer()[d2 + r6];
                    r6 += c2;
                    var f2 = s.getErrorCorrectPolynomial(l2), g2 = h(i4[u4], f2.getLength() - 1).mod(f2);
                    for (a3[u4] = new Array(f2.getLength() - 1), d2 = 0; d2 < a3[u4].length; d2 += 1) {
                      var p2 = d2 + g2.getLength() - a3[u4].length;
                      a3[u4][d2] = p2 >= 0 ? g2.getAt(p2) : 0;
                    }
                  }
                  var v3 = 0;
                  for (d2 = 0; d2 < e6.length; d2 += 1)
                    v3 += e6[d2].totalCount;
                  var w3 = new Array(v3), y2 = 0;
                  for (d2 = 0; d2 < n5; d2 += 1)
                    for (u4 = 0; u4 < e6.length; u4 += 1)
                      d2 < i4[u4].length && (w3[y2] = i4[u4][d2], y2 += 1);
                  for (d2 = 0; d2 < o5; d2 += 1)
                    for (u4 = 0; u4 < e6.length; u4 += 1)
                      d2 < a3[u4].length && (w3[y2] = a3[u4][d2], y2 += 1);
                  return w3;
                }(o4, n4);
              };
              w2.addData = function(t5, e5) {
                var r5 = null;
                switch (e5 = e5 || "Byte") {
                  case "Numeric":
                    r5 = d(t5);
                    break;
                  case "Alphanumeric":
                    r5 = f(t5);
                    break;
                  case "Byte":
                    r5 = g(t5);
                    break;
                  case "Kanji":
                    r5 = p(t5);
                    break;
                  default:
                    throw "mode:" + e5;
                }
                v2.push(r5), u2 = null;
              }, w2.isDark = function(t5, e5) {
                if (t5 < 0 || i2 <= t5 || e5 < 0 || i2 <= e5)
                  throw t5 + "," + e5;
                return o3[t5][e5];
              }, w2.getModuleCount = function() {
                return i2;
              }, w2.make = function() {
                if (r4 < 1) {
                  for (var t5 = 1; t5 < 40; t5++) {
                    for (var e5 = c.getRSBlocks(t5, n3), o4 = l(), i3 = 0; i3 < v2.length; i3++) {
                      var a2 = v2[i3];
                      o4.put(a2.getMode(), 4), o4.put(a2.getLength(), s.getLengthInBits(a2.getMode(), t5)), a2.write(o4);
                    }
                    var u3 = 0;
                    for (i3 = 0; i3 < e5.length; i3++)
                      u3 += e5[i3].dataCount;
                    if (o4.getLengthInBits() <= 8 * u3)
                      break;
                  }
                  r4 = t5;
                }
                m(false, function() {
                  for (var t6 = 0, e6 = 0, r5 = 0; r5 < 8; r5 += 1) {
                    m(true, r5);
                    var n4 = s.getLostPoint(w2);
                    (0 == r5 || t6 > n4) && (t6 = n4, e6 = r5);
                  }
                  return e6;
                }());
              }, w2.createTableTag = function(t5, e5) {
                t5 = t5 || 2;
                var r5 = "";
                r5 += '<table style="', r5 += " border-width: 0px; border-style: none;", r5 += " border-collapse: collapse;", r5 += " padding: 0px; margin: " + (e5 = void 0 === e5 ? 4 * t5 : e5) + "px;", r5 += '">', r5 += "<tbody>";
                for (var n4 = 0; n4 < w2.getModuleCount(); n4 += 1) {
                  r5 += "<tr>";
                  for (var o4 = 0; o4 < w2.getModuleCount(); o4 += 1)
                    r5 += '<td style="', r5 += " border-width: 0px; border-style: none;", r5 += " border-collapse: collapse;", r5 += " padding: 0px; margin: 0px;", r5 += " width: " + t5 + "px;", r5 += " height: " + t5 + "px;", r5 += " background-color: ", r5 += w2.isDark(n4, o4) ? "#000000" : "#ffffff", r5 += ";", r5 += '"/>';
                  r5 += "</tr>";
                }
                return (r5 += "</tbody>") + "</table>";
              }, w2.createSvgTag = function(t5, e5, r5, n4) {
                var o4 = {};
                "object" == typeof arguments[0] && (t5 = (o4 = arguments[0]).cellSize, e5 = o4.margin, r5 = o4.alt, n4 = o4.title), t5 = t5 || 2, e5 = void 0 === e5 ? 4 * t5 : e5, (r5 = "string" == typeof r5 ? { text: r5 } : r5 || {}).text = r5.text || null, r5.id = r5.text ? r5.id || "qrcode-description" : null, (n4 = "string" == typeof n4 ? { text: n4 } : n4 || {}).text = n4.text || null, n4.id = n4.text ? n4.id || "qrcode-title" : null;
                var i3, a2, s2, u3, h2 = w2.getModuleCount() * t5 + 2 * e5, c2 = "";
                for (u3 = "l" + t5 + ",0 0," + t5 + " -" + t5 + ",0 0,-" + t5 + "z ", c2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', c2 += o4.scalable ? "" : ' width="' + h2 + 'px" height="' + h2 + 'px"', c2 += ' viewBox="0 0 ' + h2 + " " + h2 + '" ', c2 += ' preserveAspectRatio="xMinYMin meet"', c2 += n4.text || r5.text ? ' role="img" aria-labelledby="' + k([n4.id, r5.id].join(" ").trim()) + '"' : "", c2 += ">", c2 += n4.text ? '<title id="' + k(n4.id) + '">' + k(n4.text) + "</title>" : "", c2 += r5.text ? '<description id="' + k(r5.id) + '">' + k(r5.text) + "</description>" : "", c2 += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', c2 += '<path d="', a2 = 0; a2 < w2.getModuleCount(); a2 += 1)
                  for (s2 = a2 * t5 + e5, i3 = 0; i3 < w2.getModuleCount(); i3 += 1)
                    w2.isDark(a2, i3) && (c2 += "M" + (i3 * t5 + e5) + "," + s2 + u3);
                return (c2 += '" stroke="transparent" fill="black"/>') + "</svg>";
              }, w2.createDataURL = function(t5, e5) {
                t5 = t5 || 2, e5 = void 0 === e5 ? 4 * t5 : e5;
                var r5 = w2.getModuleCount() * t5 + 2 * e5, n4 = e5, o4 = r5 - e5;
                return y(r5, r5, function(e6, r6) {
                  if (n4 <= e6 && e6 < o4 && n4 <= r6 && r6 < o4) {
                    var i3 = Math.floor((e6 - n4) / t5), a2 = Math.floor((r6 - n4) / t5);
                    return w2.isDark(a2, i3) ? 0 : 1;
                  }
                  return 1;
                });
              }, w2.createImgTag = function(t5, e5, r5) {
                t5 = t5 || 2, e5 = void 0 === e5 ? 4 * t5 : e5;
                var n4 = w2.getModuleCount() * t5 + 2 * e5, o4 = "";
                return o4 += "<img", o4 += ' src="', o4 += w2.createDataURL(t5, e5), o4 += '"', o4 += ' width="', o4 += n4, o4 += '"', o4 += ' height="', o4 += n4, o4 += '"', r5 && (o4 += ' alt="', o4 += k(r5), o4 += '"'), o4 + "/>";
              };
              var k = function(t5) {
                for (var e5 = "", r5 = 0; r5 < t5.length; r5 += 1) {
                  var n4 = t5.charAt(r5);
                  switch (n4) {
                    case "<":
                      e5 += "&lt;";
                      break;
                    case ">":
                      e5 += "&gt;";
                      break;
                    case "&":
                      e5 += "&amp;";
                      break;
                    case '"':
                      e5 += "&quot;";
                      break;
                    default:
                      e5 += n4;
                  }
                }
                return e5;
              };
              return w2.createASCII = function(t5, e5) {
                if ((t5 = t5 || 1) < 2)
                  return function(t6) {
                    t6 = void 0 === t6 ? 2 : t6;
                    var e6, r6, n5, o5, i4, a3 = 1 * w2.getModuleCount() + 2 * t6, s3 = t6, u4 = a3 - t6, h3 = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " }, c3 = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " }, l3 = "";
                    for (e6 = 0; e6 < a3; e6 += 2) {
                      for (n5 = Math.floor((e6 - s3) / 1), o5 = Math.floor((e6 + 1 - s3) / 1), r6 = 0; r6 < a3; r6 += 1)
                        i4 = "█", s3 <= r6 && r6 < u4 && s3 <= e6 && e6 < u4 && w2.isDark(n5, Math.floor((r6 - s3) / 1)) && (i4 = " "), s3 <= r6 && r6 < u4 && s3 <= e6 + 1 && e6 + 1 < u4 && w2.isDark(o5, Math.floor((r6 - s3) / 1)) ? i4 += " " : i4 += "█", l3 += t6 < 1 && e6 + 1 >= u4 ? c3[i4] : h3[i4];
                      l3 += "\n";
                    }
                    return a3 % 2 && t6 > 0 ? l3.substring(0, l3.length - a3 - 1) + Array(a3 + 1).join("▀") : l3.substring(0, l3.length - 1);
                  }(e5);
                t5 -= 1, e5 = void 0 === e5 ? 2 * t5 : e5;
                var r5, n4, o4, i3, a2 = w2.getModuleCount() * t5 + 2 * e5, s2 = e5, u3 = a2 - e5, h2 = Array(t5 + 1).join("██"), c2 = Array(t5 + 1).join("  "), l2 = "", d2 = "";
                for (r5 = 0; r5 < a2; r5 += 1) {
                  for (o4 = Math.floor((r5 - s2) / t5), d2 = "", n4 = 0; n4 < a2; n4 += 1)
                    i3 = 1, s2 <= n4 && n4 < u3 && s2 <= r5 && r5 < u3 && w2.isDark(o4, Math.floor((n4 - s2) / t5)) && (i3 = 0), d2 += i3 ? h2 : c2;
                  for (o4 = 0; o4 < t5; o4 += 1)
                    l2 += d2 + "\n";
                }
                return l2.substring(0, l2.length - 1);
              }, w2.renderTo2dContext = function(t5, e5) {
                e5 = e5 || 2;
                for (var r5 = w2.getModuleCount(), n4 = 0; n4 < r5; n4++)
                  for (var o4 = 0; o4 < r5; o4++)
                    t5.fillStyle = w2.isDark(n4, o4) ? "black" : "white", t5.fillRect(n4 * e5, o4 * e5, e5, e5);
              }, w2;
            };
            t3.stringToBytes = (t3.stringToBytesFuncs = { default: function(t4) {
              for (var e4 = [], r4 = 0; r4 < t4.length; r4 += 1) {
                var n3 = t4.charCodeAt(r4);
                e4.push(255 & n3);
              }
              return e4;
            } }).default, t3.createStringToBytes = function(t4, e4) {
              var r4 = function() {
                for (var r5 = w(t4), n4 = function() {
                  var t5 = r5.read();
                  if (-1 == t5)
                    throw "eof";
                  return t5;
                }, o3 = 0, i2 = {}; ; ) {
                  var a2 = r5.read();
                  if (-1 == a2)
                    break;
                  var s2 = n4(), u2 = n4() << 8 | n4();
                  i2[String.fromCharCode(a2 << 8 | s2)] = u2, o3 += 1;
                }
                if (o3 != e4)
                  throw o3 + " != " + e4;
                return i2;
              }(), n3 = "?".charCodeAt(0);
              return function(t5) {
                for (var e5 = [], o3 = 0; o3 < t5.length; o3 += 1) {
                  var i2 = t5.charCodeAt(o3);
                  if (i2 < 128)
                    e5.push(i2);
                  else {
                    var a2 = r4[t5.charAt(o3)];
                    "number" == typeof a2 ? (255 & a2) == a2 ? e5.push(a2) : (e5.push(a2 >>> 8), e5.push(255 & a2)) : e5.push(n3);
                  }
                }
                return e5;
              };
            };
            var e3, r3, n2, o2, i, a = { L: 1, M: 0, Q: 3, H: 2 }, s = (e3 = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], r3 = 1335, n2 = 7973, i = function(t4) {
              for (var e4 = 0; 0 != t4; )
                e4 += 1, t4 >>>= 1;
              return e4;
            }, (o2 = {}).getBCHTypeInfo = function(t4) {
              for (var e4 = t4 << 10; i(e4) - i(r3) >= 0; )
                e4 ^= r3 << i(e4) - i(r3);
              return 21522 ^ (t4 << 10 | e4);
            }, o2.getBCHTypeNumber = function(t4) {
              for (var e4 = t4 << 12; i(e4) - i(n2) >= 0; )
                e4 ^= n2 << i(e4) - i(n2);
              return t4 << 12 | e4;
            }, o2.getPatternPosition = function(t4) {
              return e3[t4 - 1];
            }, o2.getMaskFunction = function(t4) {
              switch (t4) {
                case 0:
                  return function(t5, e4) {
                    return (t5 + e4) % 2 == 0;
                  };
                case 1:
                  return function(t5, e4) {
                    return t5 % 2 == 0;
                  };
                case 2:
                  return function(t5, e4) {
                    return e4 % 3 == 0;
                  };
                case 3:
                  return function(t5, e4) {
                    return (t5 + e4) % 3 == 0;
                  };
                case 4:
                  return function(t5, e4) {
                    return (Math.floor(t5 / 2) + Math.floor(e4 / 3)) % 2 == 0;
                  };
                case 5:
                  return function(t5, e4) {
                    return t5 * e4 % 2 + t5 * e4 % 3 == 0;
                  };
                case 6:
                  return function(t5, e4) {
                    return (t5 * e4 % 2 + t5 * e4 % 3) % 2 == 0;
                  };
                case 7:
                  return function(t5, e4) {
                    return (t5 * e4 % 3 + (t5 + e4) % 2) % 2 == 0;
                  };
                default:
                  throw "bad maskPattern:" + t4;
              }
            }, o2.getErrorCorrectPolynomial = function(t4) {
              for (var e4 = h([1], 0), r4 = 0; r4 < t4; r4 += 1)
                e4 = e4.multiply(h([1, u.gexp(r4)], 0));
              return e4;
            }, o2.getLengthInBits = function(t4, e4) {
              if (1 <= e4 && e4 < 10)
                switch (t4) {
                  case 1:
                    return 10;
                  case 2:
                    return 9;
                  case 4:
                  case 8:
                    return 8;
                  default:
                    throw "mode:" + t4;
                }
              else if (e4 < 27)
                switch (t4) {
                  case 1:
                    return 12;
                  case 2:
                    return 11;
                  case 4:
                    return 16;
                  case 8:
                    return 10;
                  default:
                    throw "mode:" + t4;
                }
              else {
                if (!(e4 < 41))
                  throw "type:" + e4;
                switch (t4) {
                  case 1:
                    return 14;
                  case 2:
                    return 13;
                  case 4:
                    return 16;
                  case 8:
                    return 12;
                  default:
                    throw "mode:" + t4;
                }
              }
            }, o2.getLostPoint = function(t4) {
              for (var e4 = t4.getModuleCount(), r4 = 0, n3 = 0; n3 < e4; n3 += 1)
                for (var o3 = 0; o3 < e4; o3 += 1) {
                  for (var i2 = 0, a2 = t4.isDark(n3, o3), s2 = -1; s2 <= 1; s2 += 1)
                    if (!(n3 + s2 < 0 || e4 <= n3 + s2))
                      for (var u2 = -1; u2 <= 1; u2 += 1)
                        o3 + u2 < 0 || e4 <= o3 + u2 || 0 == s2 && 0 == u2 || a2 == t4.isDark(n3 + s2, o3 + u2) && (i2 += 1);
                  i2 > 5 && (r4 += 3 + i2 - 5);
                }
              for (n3 = 0; n3 < e4 - 1; n3 += 1)
                for (o3 = 0; o3 < e4 - 1; o3 += 1) {
                  var h2 = 0;
                  t4.isDark(n3, o3) && (h2 += 1), t4.isDark(n3 + 1, o3) && (h2 += 1), t4.isDark(n3, o3 + 1) && (h2 += 1), t4.isDark(n3 + 1, o3 + 1) && (h2 += 1), 0 != h2 && 4 != h2 || (r4 += 3);
                }
              for (n3 = 0; n3 < e4; n3 += 1)
                for (o3 = 0; o3 < e4 - 6; o3 += 1)
                  t4.isDark(n3, o3) && !t4.isDark(n3, o3 + 1) && t4.isDark(n3, o3 + 2) && t4.isDark(n3, o3 + 3) && t4.isDark(n3, o3 + 4) && !t4.isDark(n3, o3 + 5) && t4.isDark(n3, o3 + 6) && (r4 += 40);
              for (o3 = 0; o3 < e4; o3 += 1)
                for (n3 = 0; n3 < e4 - 6; n3 += 1)
                  t4.isDark(n3, o3) && !t4.isDark(n3 + 1, o3) && t4.isDark(n3 + 2, o3) && t4.isDark(n3 + 3, o3) && t4.isDark(n3 + 4, o3) && !t4.isDark(n3 + 5, o3) && t4.isDark(n3 + 6, o3) && (r4 += 40);
              var c2 = 0;
              for (o3 = 0; o3 < e4; o3 += 1)
                for (n3 = 0; n3 < e4; n3 += 1)
                  t4.isDark(n3, o3) && (c2 += 1);
              return r4 + Math.abs(100 * c2 / e4 / e4 - 50) / 5 * 10;
            }, o2), u = function() {
              for (var t4 = new Array(256), e4 = new Array(256), r4 = 0; r4 < 8; r4 += 1)
                t4[r4] = 1 << r4;
              for (r4 = 8; r4 < 256; r4 += 1)
                t4[r4] = t4[r4 - 4] ^ t4[r4 - 5] ^ t4[r4 - 6] ^ t4[r4 - 8];
              for (r4 = 0; r4 < 255; r4 += 1)
                e4[t4[r4]] = r4;
              return { glog: function(t5) {
                if (t5 < 1)
                  throw "glog(" + t5 + ")";
                return e4[t5];
              }, gexp: function(e5) {
                for (; e5 < 0; )
                  e5 += 255;
                for (; e5 >= 256; )
                  e5 -= 255;
                return t4[e5];
              } };
            }();
            function h(t4, e4) {
              if (void 0 === t4.length)
                throw t4.length + "/" + e4;
              var r4 = function() {
                for (var r5 = 0; r5 < t4.length && 0 == t4[r5]; )
                  r5 += 1;
                for (var n4 = new Array(t4.length - r5 + e4), o3 = 0; o3 < t4.length - r5; o3 += 1)
                  n4[o3] = t4[o3 + r5];
                return n4;
              }(), n3 = { getAt: function(t5) {
                return r4[t5];
              }, getLength: function() {
                return r4.length;
              }, multiply: function(t5) {
                for (var e5 = new Array(n3.getLength() + t5.getLength() - 1), r5 = 0; r5 < n3.getLength(); r5 += 1)
                  for (var o3 = 0; o3 < t5.getLength(); o3 += 1)
                    e5[r5 + o3] ^= u.gexp(u.glog(n3.getAt(r5)) + u.glog(t5.getAt(o3)));
                return h(e5, 0);
              }, mod: function(t5) {
                if (n3.getLength() - t5.getLength() < 0)
                  return n3;
                for (var e5 = u.glog(n3.getAt(0)) - u.glog(t5.getAt(0)), r5 = new Array(n3.getLength()), o3 = 0; o3 < n3.getLength(); o3 += 1)
                  r5[o3] = n3.getAt(o3);
                for (o3 = 0; o3 < t5.getLength(); o3 += 1)
                  r5[o3] ^= u.gexp(u.glog(t5.getAt(o3)) + e5);
                return h(r5, 0).mod(t5);
              } };
              return n3;
            }
            var c = function() {
              var t4 = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], e4 = function(t5, e5) {
                var r5 = {};
                return r5.totalCount = t5, r5.dataCount = e5, r5;
              }, r4 = { getRSBlocks: function(r5, n3) {
                var o3 = function(e5, r6) {
                  switch (r6) {
                    case a.L:
                      return t4[4 * (e5 - 1) + 0];
                    case a.M:
                      return t4[4 * (e5 - 1) + 1];
                    case a.Q:
                      return t4[4 * (e5 - 1) + 2];
                    case a.H:
                      return t4[4 * (e5 - 1) + 3];
                    default:
                      return;
                  }
                }(r5, n3);
                if (void 0 === o3)
                  throw "bad rs block @ typeNumber:" + r5 + "/errorCorrectionLevel:" + n3;
                for (var i2 = o3.length / 3, s2 = [], u2 = 0; u2 < i2; u2 += 1)
                  for (var h2 = o3[3 * u2 + 0], c2 = o3[3 * u2 + 1], l2 = o3[3 * u2 + 2], d2 = 0; d2 < h2; d2 += 1)
                    s2.push(e4(c2, l2));
                return s2;
              } };
              return r4;
            }(), l = function() {
              var t4 = [], e4 = 0, r4 = { getBuffer: function() {
                return t4;
              }, getAt: function(e5) {
                var r5 = Math.floor(e5 / 8);
                return 1 == (t4[r5] >>> 7 - e5 % 8 & 1);
              }, put: function(t5, e5) {
                for (var n3 = 0; n3 < e5; n3 += 1)
                  r4.putBit(1 == (t5 >>> e5 - n3 - 1 & 1));
              }, getLengthInBits: function() {
                return e4;
              }, putBit: function(r5) {
                var n3 = Math.floor(e4 / 8);
                t4.length <= n3 && t4.push(0), r5 && (t4[n3] |= 128 >>> e4 % 8), e4 += 1;
              } };
              return r4;
            }, d = function(t4) {
              var e4 = t4, r4 = { getMode: function() {
                return 1;
              }, getLength: function(t5) {
                return e4.length;
              }, write: function(t5) {
                for (var r5 = e4, o4 = 0; o4 + 2 < r5.length; )
                  t5.put(n3(r5.substring(o4, o4 + 3)), 10), o4 += 3;
                o4 < r5.length && (r5.length - o4 == 1 ? t5.put(n3(r5.substring(o4, o4 + 1)), 4) : r5.length - o4 == 2 && t5.put(n3(r5.substring(o4, o4 + 2)), 7));
              } }, n3 = function(t5) {
                for (var e5 = 0, r5 = 0; r5 < t5.length; r5 += 1)
                  e5 = 10 * e5 + o3(t5.charAt(r5));
                return e5;
              }, o3 = function(t5) {
                if ("0" <= t5 && t5 <= "9")
                  return t5.charCodeAt(0) - "0".charCodeAt(0);
                throw "illegal char :" + t5;
              };
              return r4;
            }, f = function(t4) {
              var e4 = t4, r4 = { getMode: function() {
                return 2;
              }, getLength: function(t5) {
                return e4.length;
              }, write: function(t5) {
                for (var r5 = e4, o3 = 0; o3 + 1 < r5.length; )
                  t5.put(45 * n3(r5.charAt(o3)) + n3(r5.charAt(o3 + 1)), 11), o3 += 2;
                o3 < r5.length && t5.put(n3(r5.charAt(o3)), 6);
              } }, n3 = function(t5) {
                if ("0" <= t5 && t5 <= "9")
                  return t5.charCodeAt(0) - "0".charCodeAt(0);
                if ("A" <= t5 && t5 <= "Z")
                  return t5.charCodeAt(0) - "A".charCodeAt(0) + 10;
                switch (t5) {
                  case " ":
                    return 36;
                  case "$":
                    return 37;
                  case "%":
                    return 38;
                  case "*":
                    return 39;
                  case "+":
                    return 40;
                  case "-":
                    return 41;
                  case ".":
                    return 42;
                  case "/":
                    return 43;
                  case ":":
                    return 44;
                  default:
                    throw "illegal char :" + t5;
                }
              };
              return r4;
            }, g = function(e4) {
              var r4 = t3.stringToBytes(e4);
              return { getMode: function() {
                return 4;
              }, getLength: function(t4) {
                return r4.length;
              }, write: function(t4) {
                for (var e5 = 0; e5 < r4.length; e5 += 1)
                  t4.put(r4[e5], 8);
              } };
            }, p = function(e4) {
              var r4 = t3.stringToBytesFuncs.SJIS;
              if (!r4)
                throw "sjis not supported.";
              !function(t4, e5) {
                var n4 = r4("友");
                if (2 != n4.length || 38726 != (n4[0] << 8 | n4[1]))
                  throw "sjis not supported.";
              }();
              var n3 = r4(e4);
              return { getMode: function() {
                return 8;
              }, getLength: function(t4) {
                return ~~(n3.length / 2);
              }, write: function(t4) {
                for (var e5 = n3, r5 = 0; r5 + 1 < e5.length; ) {
                  var o3 = (255 & e5[r5]) << 8 | 255 & e5[r5 + 1];
                  if (33088 <= o3 && o3 <= 40956)
                    o3 -= 33088;
                  else {
                    if (!(57408 <= o3 && o3 <= 60351))
                      throw "illegal char at " + (r5 + 1) + "/" + o3;
                    o3 -= 49472;
                  }
                  o3 = 192 * (o3 >>> 8 & 255) + (255 & o3), t4.put(o3, 13), r5 += 2;
                }
                if (r5 < e5.length)
                  throw "illegal char at " + (r5 + 1);
              } };
            }, v = function() {
              var t4 = [], e4 = { writeByte: function(e5) {
                t4.push(255 & e5);
              }, writeShort: function(t5) {
                e4.writeByte(t5), e4.writeByte(t5 >>> 8);
              }, writeBytes: function(t5, r4, n3) {
                r4 = r4 || 0, n3 = n3 || t5.length;
                for (var o3 = 0; o3 < n3; o3 += 1)
                  e4.writeByte(t5[o3 + r4]);
              }, writeString: function(t5) {
                for (var r4 = 0; r4 < t5.length; r4 += 1)
                  e4.writeByte(t5.charCodeAt(r4));
              }, toByteArray: function() {
                return t4;
              }, toString: function() {
                var e5 = "";
                e5 += "[";
                for (var r4 = 0; r4 < t4.length; r4 += 1)
                  r4 > 0 && (e5 += ","), e5 += t4[r4];
                return e5 + "]";
              } };
              return e4;
            }, w = function(t4) {
              var e4 = t4, r4 = 0, n3 = 0, o3 = 0, i2 = { read: function() {
                for (; o3 < 8; ) {
                  if (r4 >= e4.length) {
                    if (0 == o3)
                      return -1;
                    throw "unexpected end of file./" + o3;
                  }
                  var t5 = e4.charAt(r4);
                  if (r4 += 1, "=" == t5)
                    return o3 = 0, -1;
                  t5.match(/^\s$/) || (n3 = n3 << 6 | a2(t5.charCodeAt(0)), o3 += 6);
                }
                var i3 = n3 >>> o3 - 8 & 255;
                return o3 -= 8, i3;
              } }, a2 = function(t5) {
                if (65 <= t5 && t5 <= 90)
                  return t5 - 65;
                if (97 <= t5 && t5 <= 122)
                  return t5 - 97 + 26;
                if (48 <= t5 && t5 <= 57)
                  return t5 - 48 + 52;
                if (43 == t5)
                  return 62;
                if (47 == t5)
                  return 63;
                throw "c:" + t5;
              };
              return i2;
            }, y = function(t4, e4, r4) {
              for (var n3 = function(t5, e5) {
                var r5 = t5, n4 = e5, o4 = new Array(t5 * e5), i3 = { setPixel: function(t6, e6, n5) {
                  o4[e6 * r5 + t6] = n5;
                }, write: function(t6) {
                  t6.writeString("GIF87a"), t6.writeShort(r5), t6.writeShort(n4), t6.writeByte(128), t6.writeByte(0), t6.writeByte(0), t6.writeByte(0), t6.writeByte(0), t6.writeByte(0), t6.writeByte(255), t6.writeByte(255), t6.writeByte(255), t6.writeString(","), t6.writeShort(0), t6.writeShort(0), t6.writeShort(r5), t6.writeShort(n4), t6.writeByte(0);
                  var e6 = a3(2);
                  t6.writeByte(2);
                  for (var o5 = 0; e6.length - o5 > 255; )
                    t6.writeByte(255), t6.writeBytes(e6, o5, 255), o5 += 255;
                  t6.writeByte(e6.length - o5), t6.writeBytes(e6, o5, e6.length - o5), t6.writeByte(0), t6.writeString(";");
                } }, a3 = function(t6) {
                  for (var e6 = 1 << t6, r6 = 1 + (1 << t6), n5 = t6 + 1, i4 = s3(), a4 = 0; a4 < e6; a4 += 1)
                    i4.add(String.fromCharCode(a4));
                  i4.add(String.fromCharCode(e6)), i4.add(String.fromCharCode(r6));
                  var u3, h3, c2, l2 = v(), d2 = (u3 = l2, h3 = 0, c2 = 0, { write: function(t7, e7) {
                    if (t7 >>> e7 != 0)
                      throw "length over";
                    for (; h3 + e7 >= 8; )
                      u3.writeByte(255 & (t7 << h3 | c2)), e7 -= 8 - h3, t7 >>>= 8 - h3, c2 = 0, h3 = 0;
                    c2 |= t7 << h3, h3 += e7;
                  }, flush: function() {
                    h3 > 0 && u3.writeByte(c2);
                  } });
                  d2.write(e6, n5);
                  var f2 = 0, g2 = String.fromCharCode(o4[f2]);
                  for (f2 += 1; f2 < o4.length; ) {
                    var p2 = String.fromCharCode(o4[f2]);
                    f2 += 1, i4.contains(g2 + p2) ? g2 += p2 : (d2.write(i4.indexOf(g2), n5), i4.size() < 4095 && (i4.size() == 1 << n5 && (n5 += 1), i4.add(g2 + p2)), g2 = p2);
                  }
                  return d2.write(i4.indexOf(g2), n5), d2.write(r6, n5), d2.flush(), l2.toByteArray();
                }, s3 = function() {
                  var t6 = {}, e6 = 0, r6 = { add: function(n5) {
                    if (r6.contains(n5))
                      throw "dup key:" + n5;
                    t6[n5] = e6, e6 += 1;
                  }, size: function() {
                    return e6;
                  }, indexOf: function(e7) {
                    return t6[e7];
                  }, contains: function(e7) {
                    return void 0 !== t6[e7];
                  } };
                  return r6;
                };
                return i3;
              }(t4, e4), o3 = 0; o3 < e4; o3 += 1)
                for (var i2 = 0; i2 < t4; i2 += 1)
                  n3.setPixel(i2, o3, r4(i2, o3));
              var a2 = v();
              n3.write(a2);
              for (var s2 = function() {
                var t5 = 0, e5 = 0, r5 = 0, n4 = "", o4 = {}, i3 = function(t6) {
                  n4 += String.fromCharCode(a3(63 & t6));
                }, a3 = function(t6) {
                  if (t6 < 0)
                    ;
                  else {
                    if (t6 < 26)
                      return 65 + t6;
                    if (t6 < 52)
                      return t6 - 26 + 97;
                    if (t6 < 62)
                      return t6 - 52 + 48;
                    if (62 == t6)
                      return 43;
                    if (63 == t6)
                      return 47;
                  }
                  throw "n:" + t6;
                };
                return o4.writeByte = function(n5) {
                  for (t5 = t5 << 8 | 255 & n5, e5 += 8, r5 += 1; e5 >= 6; )
                    i3(t5 >>> e5 - 6), e5 -= 6;
                }, o4.flush = function() {
                  if (e5 > 0 && (i3(t5 << 6 - e5), t5 = 0, e5 = 0), r5 % 3 != 0)
                    for (var o5 = 3 - r5 % 3, a4 = 0; a4 < o5; a4 += 1)
                      n4 += "=";
                }, o4.toString = function() {
                  return n4;
                }, o4;
              }(), u2 = a2.toByteArray(), h2 = 0; h2 < u2.length; h2 += 1)
                s2.writeByte(u2[h2]);
              return s2.flush(), "data:image/gif;base64," + s2;
            };
            return t3;
          }();
          o.stringToBytesFuncs["UTF-8"] = function(t3) {
            return function(t4) {
              for (var e3 = [], r3 = 0; r3 < t4.length; r3++) {
                var n2 = t4.charCodeAt(r3);
                n2 < 128 ? e3.push(n2) : n2 < 2048 ? e3.push(192 | n2 >> 6, 128 | 63 & n2) : n2 < 55296 || n2 >= 57344 ? e3.push(224 | n2 >> 12, 128 | n2 >> 6 & 63, 128 | 63 & n2) : (r3++, n2 = 65536 + ((1023 & n2) << 10 | 1023 & t4.charCodeAt(r3)), e3.push(240 | n2 >> 18, 128 | n2 >> 12 & 63, 128 | n2 >> 6 & 63, 128 | 63 & n2));
              }
              return e3;
            }(t3);
          }, void 0 === (n = "function" == typeof (r2 = function() {
            return o;
          }) ? r2.apply(e2, []) : r2) || (t2.exports = n);
        }, 676: (t2, e2, r2) => {
          r2.d(e2, { default: () => q });
          var n = function() {
            return (n = Object.assign || function(t3) {
              for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
                for (var o2 in e3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
              return t3;
            }).apply(this, arguments);
          }, o = function() {
            for (var t3 = 0, e3 = 0, r3 = arguments.length; e3 < r3; e3++)
              t3 += arguments[e3].length;
            var n2 = Array(t3), o2 = 0;
            for (e3 = 0; e3 < r3; e3++)
              for (var i2 = arguments[e3], a2 = 0, s2 = i2.length; a2 < s2; a2++, o2++)
                n2[o2] = i2[a2];
            return n2;
          }, i = function(t3) {
            return !!t3 && "object" == typeof t3 && !Array.isArray(t3);
          };
          function a(t3) {
            for (var e3 = [], r3 = 1; r3 < arguments.length; r3++)
              e3[r3 - 1] = arguments[r3];
            if (!e3.length)
              return t3;
            var s2 = e3.shift();
            return void 0 !== s2 && i(t3) && i(s2) ? (t3 = n({}, t3), Object.keys(s2).forEach(function(e4) {
              var r4 = t3[e4], n2 = s2[e4];
              Array.isArray(r4) && Array.isArray(n2) ? t3[e4] = n2 : i(r4) && i(n2) ? t3[e4] = a(Object.assign({}, r4), n2) : t3[e4] = n2;
            }), a.apply(void 0, o([t3], e3))) : t3;
          }
          function s(t3, e3) {
            var r3 = document.createElement("a");
            r3.download = e3, r3.href = t3, document.body.appendChild(r3), r3.click(), document.body.removeChild(r3);
          }
          function u(t3) {
            return e3 = this, r3 = void 0, o2 = function() {
              return function(t4, e4) {
                var r4, n3, o3, i2, a2 = { label: 0, sent: function() {
                  if (1 & o3[0])
                    throw o3[1];
                  return o3[1];
                }, trys: [], ops: [] };
                return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
                  return this;
                }), i2;
                function s2(i3) {
                  return function(s3) {
                    return function(i4) {
                      if (r4)
                        throw new TypeError("Generator is already executing.");
                      for (; a2; )
                        try {
                          if (r4 = 1, n3 && (o3 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o3 = n3.return) && o3.call(n3), 0) : n3.next) && !(o3 = o3.call(n3, i4[1])).done)
                            return o3;
                          switch (n3 = 0, o3 && (i4 = [2 & i4[0], o3.value]), i4[0]) {
                            case 0:
                            case 1:
                              o3 = i4;
                              break;
                            case 4:
                              return a2.label++, { value: i4[1], done: false };
                            case 5:
                              a2.label++, n3 = i4[1], i4 = [0];
                              continue;
                            case 7:
                              i4 = a2.ops.pop(), a2.trys.pop();
                              continue;
                            default:
                              if (!((o3 = (o3 = a2.trys).length > 0 && o3[o3.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                                a2 = 0;
                                continue;
                              }
                              if (3 === i4[0] && (!o3 || i4[1] > o3[0] && i4[1] < o3[3])) {
                                a2.label = i4[1];
                                break;
                              }
                              if (6 === i4[0] && a2.label < o3[1]) {
                                a2.label = o3[1], o3 = i4;
                                break;
                              }
                              if (o3 && a2.label < o3[2]) {
                                a2.label = o3[2], a2.ops.push(i4);
                                break;
                              }
                              o3[2] && a2.ops.pop(), a2.trys.pop();
                              continue;
                          }
                          i4 = e4.call(t4, a2);
                        } catch (t5) {
                          i4 = [6, t5], n3 = 0;
                        } finally {
                          r4 = o3 = 0;
                        }
                      if (5 & i4[0])
                        throw i4[1];
                      return { value: i4[0] ? i4[1] : void 0, done: true };
                    }([i3, s3]);
                  };
                }
              }(this, function(e4) {
                return [2, new Promise(function(e5) {
                  var r4 = new XMLHttpRequest();
                  r4.onload = function() {
                    var t4 = new FileReader();
                    t4.onloadend = function() {
                      e5(t4.result);
                    }, t4.readAsDataURL(r4.response);
                  }, r4.open("GET", t3), r4.responseType = "blob", r4.send();
                })];
              });
            }, new ((n2 = void 0) || (n2 = Promise))(function(t4, i2) {
              function a2(t5) {
                try {
                  u2(o2.next(t5));
                } catch (t6) {
                  i2(t6);
                }
              }
              function s2(t5) {
                try {
                  u2(o2.throw(t5));
                } catch (t6) {
                  i2(t6);
                }
              }
              function u2(e4) {
                var r4;
                e4.done ? t4(e4.value) : (r4 = e4.value, r4 instanceof n2 ? r4 : new n2(function(t5) {
                  t5(r4);
                })).then(a2, s2);
              }
              u2((o2 = o2.apply(e3, r3 || [])).next());
            });
            var e3, r3, n2, o2;
          }
          const h = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
          var c = function() {
            return (c = Object.assign || function(t3) {
              for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
                for (var o2 in e3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
              return t3;
            }).apply(this, arguments);
          };
          const l = function() {
            function t3(t4) {
              var e3 = t4.svg, r3 = t4.type;
              this._svg = e3, this._type = r3;
            }
            return t3.prototype.draw = function(t4, e3, r3, n2) {
              var o2;
              switch (this._type) {
                case "dots":
                  o2 = this._drawDot;
                  break;
                case "classy":
                  o2 = this._drawClassy;
                  break;
                case "classy-rounded":
                  o2 = this._drawClassyRounded;
                  break;
                case "rounded":
                  o2 = this._drawRounded;
                  break;
                case "extra-rounded":
                  o2 = this._drawExtraRounded;
                  break;
                case "square":
                default:
                  o2 = this._drawSquare;
              }
              o2.call(this, { x: t4, y: e3, size: r3, getNeighbor: n2 });
            }, t3.prototype._rotateFigure = function(t4) {
              var e3, r3 = t4.x, n2 = t4.y, o2 = t4.size, i2 = t4.rotation, a2 = void 0 === i2 ? 0 : i2, s2 = r3 + o2 / 2, u2 = n2 + o2 / 2;
              (0, t4.draw)(), null === (e3 = this._element) || void 0 === e3 || e3.setAttribute("transform", "rotate(" + 180 * a2 / Math.PI + "," + s2 + "," + u2 + ")");
            }, t3.prototype._basicDot = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(c(c({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), e3._element.setAttribute("cx", String(n2 + r3 / 2)), e3._element.setAttribute("cy", String(o2 + r3 / 2)), e3._element.setAttribute("r", String(r3 / 2));
              } }));
            }, t3.prototype._basicSquare = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(c(c({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), e3._element.setAttribute("x", String(n2)), e3._element.setAttribute("y", String(o2)), e3._element.setAttribute("width", String(r3)), e3._element.setAttribute("height", String(r3));
              } }));
            }, t3.prototype._basicSideRounded = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(c(c({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 + "h " + r3 / 2 + "a " + r3 / 2 + " " + r3 / 2 + ", 0, 0, 0, 0 " + -r3);
              } }));
            }, t3.prototype._basicCornerRounded = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(c(c({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 + "h " + r3 + "v " + -r3 / 2 + "a " + r3 / 2 + " " + r3 / 2 + ", 0, 0, 0, " + -r3 / 2 + " " + -r3 / 2);
              } }));
            }, t3.prototype._basicCornerExtraRounded = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(c(c({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 + "h " + r3 + "a " + r3 + " " + r3 + ", 0, 0, 0, " + -r3 + " " + -r3);
              } }));
            }, t3.prototype._basicCornersRounded = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(c(c({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 / 2 + "a " + r3 / 2 + " " + r3 / 2 + ", 0, 0, 0, " + r3 / 2 + " " + r3 / 2 + "h " + r3 / 2 + "v " + -r3 / 2 + "a " + r3 / 2 + " " + r3 / 2 + ", 0, 0, 0, " + -r3 / 2 + " " + -r3 / 2);
              } }));
            }, t3.prototype._drawDot = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size;
              this._basicDot({ x: e3, y: r3, size: n2, rotation: 0 });
            }, t3.prototype._drawSquare = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size;
              this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 });
            }, t3.prototype._drawRounded = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.getNeighbor, i2 = o2 ? +o2(-1, 0) : 0, a2 = o2 ? +o2(1, 0) : 0, s2 = o2 ? +o2(0, -1) : 0, u2 = o2 ? +o2(0, 1) : 0, h2 = i2 + a2 + s2 + u2;
              if (0 !== h2)
                if (h2 > 2 || i2 && a2 || s2 && u2)
                  this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 });
                else {
                  if (2 === h2) {
                    var c2 = 0;
                    return i2 && s2 ? c2 = Math.PI / 2 : s2 && a2 ? c2 = Math.PI : a2 && u2 && (c2 = -Math.PI / 2), void this._basicCornerRounded({ x: e3, y: r3, size: n2, rotation: c2 });
                  }
                  if (1 === h2)
                    return c2 = 0, s2 ? c2 = Math.PI / 2 : a2 ? c2 = Math.PI : u2 && (c2 = -Math.PI / 2), void this._basicSideRounded({ x: e3, y: r3, size: n2, rotation: c2 });
                }
              else
                this._basicDot({ x: e3, y: r3, size: n2, rotation: 0 });
            }, t3.prototype._drawExtraRounded = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.getNeighbor, i2 = o2 ? +o2(-1, 0) : 0, a2 = o2 ? +o2(1, 0) : 0, s2 = o2 ? +o2(0, -1) : 0, u2 = o2 ? +o2(0, 1) : 0, h2 = i2 + a2 + s2 + u2;
              if (0 !== h2)
                if (h2 > 2 || i2 && a2 || s2 && u2)
                  this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 });
                else {
                  if (2 === h2) {
                    var c2 = 0;
                    return i2 && s2 ? c2 = Math.PI / 2 : s2 && a2 ? c2 = Math.PI : a2 && u2 && (c2 = -Math.PI / 2), void this._basicCornerExtraRounded({ x: e3, y: r3, size: n2, rotation: c2 });
                  }
                  if (1 === h2)
                    return c2 = 0, s2 ? c2 = Math.PI / 2 : a2 ? c2 = Math.PI : u2 && (c2 = -Math.PI / 2), void this._basicSideRounded({ x: e3, y: r3, size: n2, rotation: c2 });
                }
              else
                this._basicDot({ x: e3, y: r3, size: n2, rotation: 0 });
            }, t3.prototype._drawClassy = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.getNeighbor, i2 = o2 ? +o2(-1, 0) : 0, a2 = o2 ? +o2(1, 0) : 0, s2 = o2 ? +o2(0, -1) : 0, u2 = o2 ? +o2(0, 1) : 0;
              0 !== i2 + a2 + s2 + u2 ? i2 || s2 ? a2 || u2 ? this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 }) : this._basicCornerRounded({ x: e3, y: r3, size: n2, rotation: Math.PI / 2 }) : this._basicCornerRounded({ x: e3, y: r3, size: n2, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: e3, y: r3, size: n2, rotation: Math.PI / 2 });
            }, t3.prototype._drawClassyRounded = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.getNeighbor, i2 = o2 ? +o2(-1, 0) : 0, a2 = o2 ? +o2(1, 0) : 0, s2 = o2 ? +o2(0, -1) : 0, u2 = o2 ? +o2(0, 1) : 0;
              0 !== i2 + a2 + s2 + u2 ? i2 || s2 ? a2 || u2 ? this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 }) : this._basicCornerExtraRounded({ x: e3, y: r3, size: n2, rotation: Math.PI / 2 }) : this._basicCornerExtraRounded({ x: e3, y: r3, size: n2, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: e3, y: r3, size: n2, rotation: Math.PI / 2 });
            }, t3;
          }();
          var d = function() {
            return (d = Object.assign || function(t3) {
              for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
                for (var o2 in e3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
              return t3;
            }).apply(this, arguments);
          };
          const f = function() {
            function t3(t4) {
              var e3 = t4.svg, r3 = t4.type;
              this._svg = e3, this._type = r3;
            }
            return t3.prototype.draw = function(t4, e3, r3, n2) {
              var o2;
              switch (this._type) {
                case "square":
                  o2 = this._drawSquare;
                  break;
                case "extra-rounded":
                  o2 = this._drawExtraRounded;
                  break;
                case "dot":
                default:
                  o2 = this._drawDot;
              }
              o2.call(this, { x: t4, y: e3, size: r3, rotation: n2 });
            }, t3.prototype._rotateFigure = function(t4) {
              var e3, r3 = t4.x, n2 = t4.y, o2 = t4.size, i2 = t4.rotation, a2 = void 0 === i2 ? 0 : i2, s2 = r3 + o2 / 2, u2 = n2 + o2 / 2;
              (0, t4.draw)(), null === (e3 = this._element) || void 0 === e3 || e3.setAttribute("transform", "rotate(" + 180 * a2 / Math.PI + "," + s2 + "," + u2 + ")");
            }, t3.prototype._basicDot = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y, i2 = r3 / 7;
              this._rotateFigure(d(d({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("clip-rule", "evenodd"), e3._element.setAttribute("d", "M " + (n2 + r3 / 2) + " " + o2 + "a " + r3 / 2 + " " + r3 / 2 + " 0 1 0 0.1 0zm 0 " + i2 + "a " + (r3 / 2 - i2) + " " + (r3 / 2 - i2) + " 0 1 1 -0.1 0Z");
              } }));
            }, t3.prototype._basicSquare = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y, i2 = r3 / 7;
              this._rotateFigure(d(d({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("clip-rule", "evenodd"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 + "h " + r3 + "v " + -r3 + "zM " + (n2 + i2) + " " + (o2 + i2) + "h " + (r3 - 2 * i2) + "v " + (r3 - 2 * i2) + "h " + (2 * i2 - r3) + "z");
              } }));
            }, t3.prototype._basicExtraRounded = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y, i2 = r3 / 7;
              this._rotateFigure(d(d({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("clip-rule", "evenodd"), e3._element.setAttribute("d", "M " + n2 + " " + (o2 + 2.5 * i2) + "v " + 2 * i2 + "a " + 2.5 * i2 + " " + 2.5 * i2 + ", 0, 0, 0, " + 2.5 * i2 + " " + 2.5 * i2 + "h " + 2 * i2 + "a " + 2.5 * i2 + " " + 2.5 * i2 + ", 0, 0, 0, " + 2.5 * i2 + " " + 2.5 * -i2 + "v " + -2 * i2 + "a " + 2.5 * i2 + " " + 2.5 * i2 + ", 0, 0, 0, " + 2.5 * -i2 + " " + 2.5 * -i2 + "h " + -2 * i2 + "a " + 2.5 * i2 + " " + 2.5 * i2 + ", 0, 0, 0, " + 2.5 * -i2 + " " + 2.5 * i2 + "M " + (n2 + 2.5 * i2) + " " + (o2 + i2) + "h " + 2 * i2 + "a " + 1.5 * i2 + " " + 1.5 * i2 + ", 0, 0, 1, " + 1.5 * i2 + " " + 1.5 * i2 + "v " + 2 * i2 + "a " + 1.5 * i2 + " " + 1.5 * i2 + ", 0, 0, 1, " + 1.5 * -i2 + " " + 1.5 * i2 + "h " + -2 * i2 + "a " + 1.5 * i2 + " " + 1.5 * i2 + ", 0, 0, 1, " + 1.5 * -i2 + " " + 1.5 * -i2 + "v " + -2 * i2 + "a " + 1.5 * i2 + " " + 1.5 * i2 + ", 0, 0, 1, " + 1.5 * i2 + " " + 1.5 * -i2);
              } }));
            }, t3.prototype._drawDot = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
              this._basicDot({ x: e3, y: r3, size: n2, rotation: o2 });
            }, t3.prototype._drawSquare = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
              this._basicSquare({ x: e3, y: r3, size: n2, rotation: o2 });
            }, t3.prototype._drawExtraRounded = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
              this._basicExtraRounded({ x: e3, y: r3, size: n2, rotation: o2 });
            }, t3;
          }();
          var g = function() {
            return (g = Object.assign || function(t3) {
              for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
                for (var o2 in e3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
              return t3;
            }).apply(this, arguments);
          };
          const p = function() {
            function t3(t4) {
              var e3 = t4.svg, r3 = t4.type;
              this._svg = e3, this._type = r3;
            }
            return t3.prototype.draw = function(t4, e3, r3, n2) {
              var o2;
              switch (this._type) {
                case "square":
                  o2 = this._drawSquare;
                  break;
                case "dot":
                default:
                  o2 = this._drawDot;
              }
              o2.call(this, { x: t4, y: e3, size: r3, rotation: n2 });
            }, t3.prototype._rotateFigure = function(t4) {
              var e3, r3 = t4.x, n2 = t4.y, o2 = t4.size, i2 = t4.rotation, a2 = void 0 === i2 ? 0 : i2, s2 = r3 + o2 / 2, u2 = n2 + o2 / 2;
              (0, t4.draw)(), null === (e3 = this._element) || void 0 === e3 || e3.setAttribute("transform", "rotate(" + 180 * a2 / Math.PI + "," + s2 + "," + u2 + ")");
            }, t3.prototype._basicDot = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(g(g({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), e3._element.setAttribute("cx", String(n2 + r3 / 2)), e3._element.setAttribute("cy", String(o2 + r3 / 2)), e3._element.setAttribute("r", String(r3 / 2));
              } }));
            }, t3.prototype._basicSquare = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(g(g({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), e3._element.setAttribute("x", String(n2)), e3._element.setAttribute("y", String(o2)), e3._element.setAttribute("width", String(r3)), e3._element.setAttribute("height", String(r3));
              } }));
            }, t3.prototype._drawDot = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
              this._basicDot({ x: e3, y: r3, size: n2, rotation: o2 });
            }, t3.prototype._drawSquare = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
              this._basicSquare({ x: e3, y: r3, size: n2, rotation: o2 });
            }, t3;
          }(), v = "circle";
          var w = function(t3, e3, r3, n2) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(t4) {
                try {
                  u2(n2.next(t4));
                } catch (t5) {
                  i2(t5);
                }
              }
              function s2(t4) {
                try {
                  u2(n2.throw(t4));
                } catch (t5) {
                  i2(t5);
                }
              }
              function u2(t4) {
                var e4;
                t4.done ? o2(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3(function(t5) {
                  t5(e4);
                })).then(a2, s2);
              }
              u2((n2 = n2.apply(t3, e3 || [])).next());
            });
          }, y = function(t3, e3) {
            var r3, n2, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n2 && (o2 = 2 & i4[0] ? n2.return : i4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, i4[1])).done)
                        return o2;
                      switch (n2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = e3.call(t3, a2);
                    } catch (t4) {
                      i4 = [6, t4], n2 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, m = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]], b = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
          const _ = function() {
            function t3(t4) {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(t4.width)), this._element.setAttribute("height", String(t4.height)), this._defs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._options = t4;
            }
            return Object.defineProperty(t3.prototype, "width", { get: function() {
              return this._options.width;
            }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "height", { get: function() {
              return this._options.height;
            }, enumerable: false, configurable: true }), t3.prototype.getElement = function() {
              return this._element;
            }, t3.prototype.drawQR = function(t4) {
              return w(this, void 0, void 0, function() {
                var e3, r3, n2, o2, i2, a2, s2, u2, c2, l2, d2 = this;
                return y(this, function(f2) {
                  switch (f2.label) {
                    case 0:
                      return e3 = t4.getModuleCount(), r3 = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, n2 = this._options.shape === v ? r3 / Math.sqrt(2) : r3, o2 = Math.floor(n2 / e3), i2 = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 }, this._qr = t4, this._options.image ? [4, this.loadImage()] : [3, 2];
                    case 1:
                      if (f2.sent(), !this._image)
                        return [2];
                      a2 = this._options, s2 = a2.imageOptions, u2 = a2.qrOptions, c2 = s2.imageSize * h[u2.errorCorrectionLevel], l2 = Math.floor(c2 * e3 * e3), i2 = function(t5) {
                        var e4 = t5.originalHeight, r4 = t5.originalWidth, n3 = t5.maxHiddenDots, o3 = t5.maxHiddenAxisDots, i3 = t5.dotSize, a3 = { x: 0, y: 0 }, s3 = { x: 0, y: 0 };
                        if (e4 <= 0 || r4 <= 0 || n3 <= 0 || i3 <= 0)
                          return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                        var u3 = e4 / r4;
                        return a3.x = Math.floor(Math.sqrt(n3 / u3)), a3.x <= 0 && (a3.x = 1), o3 && o3 < a3.x && (a3.x = o3), a3.x % 2 == 0 && a3.x--, s3.x = a3.x * i3, a3.y = 1 + 2 * Math.ceil((a3.x * u3 - 1) / 2), s3.y = Math.round(s3.x * u3), (a3.y * a3.x > n3 || o3 && o3 < a3.y) && (o3 && o3 < a3.y ? (a3.y = o3, a3.y % 2 == 0 && a3.x--) : a3.y -= 2, s3.y = a3.y * i3, a3.x = 1 + 2 * Math.ceil((a3.y / u3 - 1) / 2), s3.x = Math.round(s3.y / u3)), { height: s3.y, width: s3.x, hideYDots: a3.y, hideXDots: a3.x };
                      }({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: l2, maxHiddenAxisDots: e3 - 14, dotSize: o2 }), f2.label = 2;
                    case 2:
                      return this.drawBackground(), this.drawDots(function(t5, r4) {
                        var n3, o3, a3, s3, u3, h2;
                        return !(d2._options.imageOptions.hideBackgroundDots && t5 >= (e3 - i2.hideXDots) / 2 && t5 < (e3 + i2.hideXDots) / 2 && r4 >= (e3 - i2.hideYDots) / 2 && r4 < (e3 + i2.hideYDots) / 2 || (null === (n3 = m[t5]) || void 0 === n3 ? void 0 : n3[r4]) || (null === (o3 = m[t5 - e3 + 7]) || void 0 === o3 ? void 0 : o3[r4]) || (null === (a3 = m[t5]) || void 0 === a3 ? void 0 : a3[r4 - e3 + 7]) || (null === (s3 = b[t5]) || void 0 === s3 ? void 0 : s3[r4]) || (null === (u3 = b[t5 - e3 + 7]) || void 0 === u3 ? void 0 : u3[r4]) || (null === (h2 = b[t5]) || void 0 === h2 ? void 0 : h2[r4 - e3 + 7]));
                      }), this.drawCorners(), this._options.image ? [4, this.drawImage({ width: i2.width, height: i2.height, count: e3, dotSize: o2 })] : [3, 4];
                    case 3:
                      f2.sent(), f2.label = 4;
                    case 4:
                      return [2];
                  }
                });
              });
            }, t3.prototype.drawBackground = function() {
              var t4, e3, r3, n2 = this._element, o2 = this._options;
              if (n2) {
                var i2 = null === (t4 = o2.backgroundOptions) || void 0 === t4 ? void 0 : t4.gradient, a2 = null === (e3 = o2.backgroundOptions) || void 0 === e3 ? void 0 : e3.color;
                if ((i2 || a2) && this._createColor({ options: i2, color: a2, additionalRotation: 0, x: 0, y: 0, height: o2.height, width: o2.width, name: "background-color" }), null === (r3 = o2.backgroundOptions) || void 0 === r3 ? void 0 : r3.round) {
                  var s2 = Math.min(o2.width, o2.height), u2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                  this._backgroundClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", "clip-path-background-color"), this._defs.appendChild(this._backgroundClipPath), u2.setAttribute("x", String((o2.width - s2) / 2)), u2.setAttribute("y", String((o2.height - s2) / 2)), u2.setAttribute("width", String(s2)), u2.setAttribute("height", String(s2)), u2.setAttribute("rx", String(s2 / 2 * o2.backgroundOptions.round)), this._backgroundClipPath.appendChild(u2);
                }
              }
            }, t3.prototype.drawDots = function(t4) {
              var e3, r3, n2 = this;
              if (!this._qr)
                throw "QR code is not defined";
              var o2 = this._options, i2 = this._qr.getModuleCount();
              if (i2 > o2.width || i2 > o2.height)
                throw "The canvas is too small.";
              var a2 = Math.min(o2.width, o2.height) - 2 * o2.margin, s2 = o2.shape === v ? a2 / Math.sqrt(2) : a2, u2 = Math.floor(s2 / i2), h2 = Math.floor((o2.width - i2 * u2) / 2), c2 = Math.floor((o2.height - i2 * u2) / 2), d2 = new l({ svg: this._element, type: o2.dotsOptions.type });
              this._dotsClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", "clip-path-dot-color"), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: null === (e3 = o2.dotsOptions) || void 0 === e3 ? void 0 : e3.gradient, color: o2.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: o2.height, width: o2.width, name: "dot-color" });
              for (var f2 = function(e4) {
                for (var o3 = function(o4) {
                  return t4 && !t4(e4, o4) ? "continue" : (null === (r3 = g2._qr) || void 0 === r3 ? void 0 : r3.isDark(e4, o4)) ? (d2.draw(h2 + e4 * u2, c2 + o4 * u2, u2, function(r4, a4) {
                    return !(e4 + r4 < 0 || o4 + a4 < 0 || e4 + r4 >= i2 || o4 + a4 >= i2) && !(t4 && !t4(e4 + r4, o4 + a4)) && !!n2._qr && n2._qr.isDark(e4 + r4, o4 + a4);
                  }), void (d2._element && g2._dotsClipPath && g2._dotsClipPath.appendChild(d2._element))) : "continue";
                }, a3 = 0; a3 < i2; a3++)
                  o3(a3);
              }, g2 = this, p2 = 0; p2 < i2; p2++)
                f2(p2);
              if (o2.shape === v) {
                var w2 = Math.floor((a2 / u2 - i2) / 2), y2 = i2 + 2 * w2, m2 = h2 - w2 * u2, b2 = c2 - w2 * u2, _2 = [], x2 = Math.floor(y2 / 2);
                for (p2 = 0; p2 < y2; p2++) {
                  _2[p2] = [];
                  for (var S2 = 0; S2 < y2; S2++)
                    p2 >= w2 - 1 && p2 <= y2 - w2 && S2 >= w2 - 1 && S2 <= y2 - w2 || Math.sqrt((p2 - x2) * (p2 - x2) + (S2 - x2) * (S2 - x2)) > x2 ? _2[p2][S2] = 0 : _2[p2][S2] = this._qr.isDark(S2 - 2 * w2 < 0 ? S2 : S2 >= i2 ? S2 - 2 * w2 : S2 - w2, p2 - 2 * w2 < 0 ? p2 : p2 >= i2 ? p2 - 2 * w2 : p2 - w2) ? 1 : 0;
                }
                var M2 = function(t5) {
                  for (var e4 = function(e5) {
                    if (!_2[t5][e5])
                      return "continue";
                    d2.draw(m2 + t5 * u2, b2 + e5 * u2, u2, function(r5, n3) {
                      var o3;
                      return !!(null === (o3 = _2[t5 + r5]) || void 0 === o3 ? void 0 : o3[e5 + n3]);
                    }), d2._element && C2._dotsClipPath && C2._dotsClipPath.appendChild(d2._element);
                  }, r4 = 0; r4 < y2; r4++)
                    e4(r4);
                }, C2 = this;
                for (p2 = 0; p2 < y2; p2++)
                  M2(p2);
              }
            }, t3.prototype.drawCorners = function() {
              var t4 = this;
              if (!this._qr)
                throw "QR code is not defined";
              var e3 = this._element, r3 = this._options;
              if (!e3)
                throw "Element code is not defined";
              var n2 = this._qr.getModuleCount(), o2 = Math.min(r3.width, r3.height) - 2 * r3.margin, i2 = r3.shape === v ? o2 / Math.sqrt(2) : o2, a2 = Math.floor(i2 / n2), s2 = 7 * a2, u2 = 3 * a2, h2 = Math.floor((r3.width - n2 * a2) / 2), c2 = Math.floor((r3.height - n2 * a2) / 2);
              [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(function(e4) {
                var o3, i3, d2, g2, v2, w2, y2, _2, x2, S2, M2, C2, A2 = e4[0], k2 = e4[1], O2 = e4[2], D2 = h2 + A2 * a2 * (n2 - 7), P2 = c2 + k2 * a2 * (n2 - 7), z2 = t4._dotsClipPath, B2 = t4._dotsClipPath;
                if (((null === (o3 = r3.cornersSquareOptions) || void 0 === o3 ? void 0 : o3.gradient) || (null === (i3 = r3.cornersSquareOptions) || void 0 === i3 ? void 0 : i3.color)) && ((z2 = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-square-color-" + A2 + "-" + k2), t4._defs.appendChild(z2), t4._cornersSquareClipPath = t4._cornersDotClipPath = B2 = z2, t4._createColor({ options: null === (d2 = r3.cornersSquareOptions) || void 0 === d2 ? void 0 : d2.gradient, color: null === (g2 = r3.cornersSquareOptions) || void 0 === g2 ? void 0 : g2.color, additionalRotation: O2, x: D2, y: P2, height: s2, width: s2, name: "corners-square-color-" + A2 + "-" + k2 })), null === (v2 = r3.cornersSquareOptions) || void 0 === v2 ? void 0 : v2.type) {
                  var q2 = new f({ svg: t4._element, type: r3.cornersSquareOptions.type });
                  q2.draw(D2, P2, s2, O2), q2._element && z2 && z2.appendChild(q2._element);
                } else
                  for (var I = new l({ svg: t4._element, type: r3.dotsOptions.type }), E = function(t5) {
                    for (var e5 = function(e6) {
                      if (!(null === (w2 = m[t5]) || void 0 === w2 ? void 0 : w2[e6]))
                        return "continue";
                      I.draw(D2 + t5 * a2, P2 + e6 * a2, a2, function(r5, n3) {
                        var o4;
                        return !!(null === (o4 = m[t5 + r5]) || void 0 === o4 ? void 0 : o4[e6 + n3]);
                      }), I._element && z2 && z2.appendChild(I._element);
                    }, r4 = 0; r4 < m[t5].length; r4++)
                      e5(r4);
                  }, L = 0; L < m.length; L++)
                    E(L);
                if (((null === (y2 = r3.cornersDotOptions) || void 0 === y2 ? void 0 : y2.gradient) || (null === (_2 = r3.cornersDotOptions) || void 0 === _2 ? void 0 : _2.color)) && ((B2 = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-dot-color-" + A2 + "-" + k2), t4._defs.appendChild(B2), t4._cornersDotClipPath = B2, t4._createColor({ options: null === (x2 = r3.cornersDotOptions) || void 0 === x2 ? void 0 : x2.gradient, color: null === (S2 = r3.cornersDotOptions) || void 0 === S2 ? void 0 : S2.color, additionalRotation: O2, x: D2 + 2 * a2, y: P2 + 2 * a2, height: u2, width: u2, name: "corners-dot-color-" + A2 + "-" + k2 })), null === (M2 = r3.cornersDotOptions) || void 0 === M2 ? void 0 : M2.type) {
                  var R = new p({ svg: t4._element, type: r3.cornersDotOptions.type });
                  R.draw(D2 + 2 * a2, P2 + 2 * a2, u2, O2), R._element && B2 && B2.appendChild(R._element);
                } else {
                  I = new l({ svg: t4._element, type: r3.dotsOptions.type });
                  var N = function(t5) {
                    for (var e5 = function(e6) {
                      if (!(null === (C2 = b[t5]) || void 0 === C2 ? void 0 : C2[e6]))
                        return "continue";
                      I.draw(D2 + t5 * a2, P2 + e6 * a2, a2, function(r5, n3) {
                        var o4;
                        return !!(null === (o4 = b[t5 + r5]) || void 0 === o4 ? void 0 : o4[e6 + n3]);
                      }), I._element && B2 && B2.appendChild(I._element);
                    }, r4 = 0; r4 < b[t5].length; r4++)
                      e5(r4);
                  };
                  for (L = 0; L < b.length; L++)
                    N(L);
                }
              });
            }, t3.prototype.loadImage = function() {
              var t4 = this;
              return new Promise(function(e3, r3) {
                var n2 = t4._options, o2 = new Image();
                if (!n2.image)
                  return r3("Image is not defined");
                "string" == typeof n2.imageOptions.crossOrigin && (o2.crossOrigin = n2.imageOptions.crossOrigin), t4._image = o2, o2.onload = function() {
                  e3();
                }, o2.src = n2.image;
              });
            }, t3.prototype.drawImage = function(t4) {
              var e3 = t4.width, r3 = t4.height, n2 = t4.count, o2 = t4.dotSize;
              return w(this, void 0, void 0, function() {
                var t5, i2, a2, s2, h2, c2, l2, d2, f2;
                return y(this, function(g2) {
                  switch (g2.label) {
                    case 0:
                      return t5 = this._options, i2 = Math.floor((t5.width - n2 * o2) / 2), a2 = Math.floor((t5.height - n2 * o2) / 2), s2 = i2 + t5.imageOptions.margin + (n2 * o2 - e3) / 2, h2 = a2 + t5.imageOptions.margin + (n2 * o2 - r3) / 2, c2 = e3 - 2 * t5.imageOptions.margin, l2 = r3 - 2 * t5.imageOptions.margin, (d2 = document.createElementNS("http://www.w3.org/2000/svg", "image")).setAttribute("x", String(s2)), d2.setAttribute("y", String(h2)), d2.setAttribute("width", c2 + "px"), d2.setAttribute("height", l2 + "px"), [4, u(t5.image || "")];
                    case 1:
                      return f2 = g2.sent(), d2.setAttribute("href", f2 || ""), this._element.appendChild(d2), [2];
                  }
                });
              });
            }, t3.prototype._createColor = function(t4) {
              var e3 = t4.options, r3 = t4.color, n2 = t4.additionalRotation, o2 = t4.x, i2 = t4.y, a2 = t4.height, s2 = t4.width, u2 = t4.name, h2 = s2 > a2 ? s2 : a2, c2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              if (c2.setAttribute("x", String(o2)), c2.setAttribute("y", String(i2)), c2.setAttribute("height", String(a2)), c2.setAttribute("width", String(s2)), c2.setAttribute("clip-path", "url('#clip-path-" + u2 + "')"), e3) {
                var l2;
                if ("radial" === e3.type)
                  (l2 = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", u2), l2.setAttribute("gradientUnits", "userSpaceOnUse"), l2.setAttribute("fx", String(o2 + s2 / 2)), l2.setAttribute("fy", String(i2 + a2 / 2)), l2.setAttribute("cx", String(o2 + s2 / 2)), l2.setAttribute("cy", String(i2 + a2 / 2)), l2.setAttribute("r", String(h2 / 2));
                else {
                  var d2 = ((e3.rotation || 0) + n2) % (2 * Math.PI), f2 = (d2 + 2 * Math.PI) % (2 * Math.PI), g2 = o2 + s2 / 2, p2 = i2 + a2 / 2, v2 = o2 + s2 / 2, w2 = i2 + a2 / 2;
                  f2 >= 0 && f2 <= 0.25 * Math.PI || f2 > 1.75 * Math.PI && f2 <= 2 * Math.PI ? (g2 -= s2 / 2, p2 -= a2 / 2 * Math.tan(d2), v2 += s2 / 2, w2 += a2 / 2 * Math.tan(d2)) : f2 > 0.25 * Math.PI && f2 <= 0.75 * Math.PI ? (p2 -= a2 / 2, g2 -= s2 / 2 / Math.tan(d2), w2 += a2 / 2, v2 += s2 / 2 / Math.tan(d2)) : f2 > 0.75 * Math.PI && f2 <= 1.25 * Math.PI ? (g2 += s2 / 2, p2 += a2 / 2 * Math.tan(d2), v2 -= s2 / 2, w2 -= a2 / 2 * Math.tan(d2)) : f2 > 1.25 * Math.PI && f2 <= 1.75 * Math.PI && (p2 += a2 / 2, g2 += s2 / 2 / Math.tan(d2), w2 -= a2 / 2, v2 -= s2 / 2 / Math.tan(d2)), (l2 = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", u2), l2.setAttribute("gradientUnits", "userSpaceOnUse"), l2.setAttribute("x1", String(Math.round(g2))), l2.setAttribute("y1", String(Math.round(p2))), l2.setAttribute("x2", String(Math.round(v2))), l2.setAttribute("y2", String(Math.round(w2)));
                }
                e3.colorStops.forEach(function(t5) {
                  var e4 = t5.offset, r4 = t5.color, n3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                  n3.setAttribute("offset", 100 * e4 + "%"), n3.setAttribute("stop-color", r4), l2.appendChild(n3);
                }), c2.setAttribute("fill", "url('#" + u2 + "')"), this._defs.appendChild(l2);
              } else
                r3 && c2.setAttribute("fill", r3);
              this._element.appendChild(c2);
            }, t3;
          }(), x = "canvas";
          for (var S = {}, M = 0; M <= 40; M++)
            S[M] = M;
          const C = { type: x, shape: "square", width: 300, height: 300, data: "", margin: 0, qrOptions: { typeNumber: S[0], mode: void 0, errorCorrectionLevel: "Q" }, imageOptions: { hideBackgroundDots: true, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: "square", color: "#000" }, backgroundOptions: { round: 0, color: "#fff" } };
          var A = function() {
            return (A = Object.assign || function(t3) {
              for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
                for (var o2 in e3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
              return t3;
            }).apply(this, arguments);
          };
          function k(t3) {
            var e3 = A({}, t3);
            if (!e3.colorStops || !e3.colorStops.length)
              throw "Field 'colorStops' is required in gradient";
            return e3.rotation ? e3.rotation = Number(e3.rotation) : e3.rotation = 0, e3.colorStops = e3.colorStops.map(function(t4) {
              return A(A({}, t4), { offset: Number(t4.offset) });
            }), e3;
          }
          function O(t3) {
            var e3 = A({}, t3);
            return e3.width = Number(e3.width), e3.height = Number(e3.height), e3.margin = Number(e3.margin), e3.imageOptions = A(A({}, e3.imageOptions), { hideBackgroundDots: Boolean(e3.imageOptions.hideBackgroundDots), imageSize: Number(e3.imageOptions.imageSize), margin: Number(e3.imageOptions.margin) }), e3.margin > Math.min(e3.width, e3.height) && (e3.margin = Math.min(e3.width, e3.height)), e3.dotsOptions = A({}, e3.dotsOptions), e3.dotsOptions.gradient && (e3.dotsOptions.gradient = k(e3.dotsOptions.gradient)), e3.cornersSquareOptions && (e3.cornersSquareOptions = A({}, e3.cornersSquareOptions), e3.cornersSquareOptions.gradient && (e3.cornersSquareOptions.gradient = k(e3.cornersSquareOptions.gradient))), e3.cornersDotOptions && (e3.cornersDotOptions = A({}, e3.cornersDotOptions), e3.cornersDotOptions.gradient && (e3.cornersDotOptions.gradient = k(e3.cornersDotOptions.gradient))), e3.backgroundOptions && (e3.backgroundOptions = A({}, e3.backgroundOptions), e3.backgroundOptions.gradient && (e3.backgroundOptions.gradient = k(e3.backgroundOptions.gradient))), e3;
          }
          var D = r2(192), P = r2.n(D), z = function(t3, e3, r3, n2) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(t4) {
                try {
                  u2(n2.next(t4));
                } catch (t5) {
                  i2(t5);
                }
              }
              function s2(t4) {
                try {
                  u2(n2.throw(t4));
                } catch (t5) {
                  i2(t5);
                }
              }
              function u2(t4) {
                var e4;
                t4.done ? o2(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3(function(t5) {
                  t5(e4);
                })).then(a2, s2);
              }
              u2((n2 = n2.apply(t3, e3 || [])).next());
            });
          }, B = function(t3, e3) {
            var r3, n2, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n2 && (o2 = 2 & i4[0] ? n2.return : i4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, i4[1])).done)
                        return o2;
                      switch (n2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = e3.call(t3, a2);
                    } catch (t4) {
                      i4 = [6, t4], n2 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          };
          const q = function() {
            function t3(t4) {
              this._options = t4 ? O(a(C, t4)) : C, this.update();
            }
            return t3._clearContainer = function(t4) {
              t4 && (t4.innerHTML = "");
            }, t3.prototype._setupSvg = function() {
              var t4 = this;
              if (this._qr) {
                var e3 = new _(this._options);
                this._svg = e3.getElement(), this._svgDrawingPromise = e3.drawQR(this._qr).then(function() {
                  var r3;
                  t4._svg && (null === (r3 = t4._extension) || void 0 === r3 || r3.call(t4, e3.getElement(), t4._options));
                });
              }
            }, t3.prototype._setupCanvas = function() {
              var t4, e3 = this;
              this._qr && (this._canvas = document.createElement("canvas"), this._canvas.width = this._options.width, this._canvas.height = this._options.height, this._setupSvg(), this._canvasDrawingPromise = null === (t4 = this._svgDrawingPromise) || void 0 === t4 ? void 0 : t4.then(function() {
                if (e3._svg) {
                  var t5 = e3._svg, r3 = new XMLSerializer().serializeToString(t5), n2 = "data:image/svg+xml;base64," + btoa(r3), o2 = new Image();
                  return new Promise(function(t6) {
                    o2.onload = function() {
                      var r4, n3;
                      null === (n3 = null === (r4 = e3._canvas) || void 0 === r4 ? void 0 : r4.getContext("2d")) || void 0 === n3 || n3.drawImage(o2, 0, 0), t6();
                    }, o2.src = n2;
                  });
                }
              }));
            }, t3.prototype._getElement = function(t4) {
              return void 0 === t4 && (t4 = "png"), z(this, void 0, void 0, function() {
                return B(this, function(e3) {
                  switch (e3.label) {
                    case 0:
                      if (!this._qr)
                        throw "QR code is empty";
                      return "svg" !== t4.toLowerCase() ? [3, 2] : (this._svg && this._svgDrawingPromise || this._setupSvg(), [4, this._svgDrawingPromise]);
                    case 1:
                      return e3.sent(), [2, this._svg];
                    case 2:
                      return this._canvas && this._canvasDrawingPromise || this._setupCanvas(), [4, this._canvasDrawingPromise];
                    case 3:
                      return e3.sent(), [2, this._canvas];
                  }
                });
              });
            }, t3.prototype.update = function(e3) {
              t3._clearContainer(this._container), this._options = e3 ? O(a(this._options, e3)) : this._options, this._options.data && (this._qr = P()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function(t4) {
                switch (true) {
                  case /^[0-9]*$/.test(t4):
                    return "Numeric";
                  case /^[0-9A-Z $%*+\-./:]*$/.test(t4):
                    return "Alphanumeric";
                  default:
                    return "Byte";
                }
              }(this._options.data)), this._qr.make(), this._options.type === x ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
            }, t3.prototype.append = function(t4) {
              if (t4) {
                if ("function" != typeof t4.appendChild)
                  throw "Container should be a single DOM node";
                this._options.type === x ? this._canvas && t4.appendChild(this._canvas) : this._svg && t4.appendChild(this._svg), this._container = t4;
              }
            }, t3.prototype.applyExtension = function(t4) {
              if (!t4)
                throw "Extension function should be defined.";
              this._extension = t4, this.update();
            }, t3.prototype.deleteExtension = function() {
              this._extension = void 0, this.update();
            }, t3.prototype.getRawData = function(t4) {
              return void 0 === t4 && (t4 = "png"), z(this, void 0, void 0, function() {
                var e3, r3, n2;
                return B(this, function(o2) {
                  switch (o2.label) {
                    case 0:
                      if (!this._qr)
                        throw "QR code is empty";
                      return [4, this._getElement(t4)];
                    case 1:
                      return (e3 = o2.sent()) ? "svg" === t4.toLowerCase() ? (r3 = new XMLSerializer(), n2 = r3.serializeToString(e3), [2, new Blob(['<?xml version="1.0" standalone="no"?>\r\n' + n2], { type: "image/svg+xml" })]) : [2, new Promise(function(r4) {
                        return e3.toBlob(r4, "image/" + t4, 1);
                      })] : [2, null];
                  }
                });
              });
            }, t3.prototype.download = function(t4) {
              return z(this, void 0, void 0, function() {
                var e3, r3, n2, o2, i2;
                return B(this, function(a2) {
                  switch (a2.label) {
                    case 0:
                      if (!this._qr)
                        throw "QR code is empty";
                      return e3 = "png", r3 = "qr", "string" == typeof t4 ? (e3 = t4, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : "object" == typeof t4 && null !== t4 && (t4.name && (r3 = t4.name), t4.extension && (e3 = t4.extension)), [4, this._getElement(e3)];
                    case 1:
                      return (n2 = a2.sent()) ? ("svg" === e3.toLowerCase() ? (o2 = new XMLSerializer(), i2 = '<?xml version="1.0" standalone="no"?>\r\n' + (i2 = o2.serializeToString(n2)), s("data:image/svg+xml;charset=utf-8," + encodeURIComponent(i2), r3 + ".svg")) : s(n2.toDataURL("image/" + e3), r3 + "." + e3), [2]) : [2];
                  }
                });
              });
            }, t3;
          }();
        } }, e = {};
        function r(n) {
          if (e[n])
            return e[n].exports;
          var o = e[n] = { exports: {} };
          return t[n](o, o.exports, r), o.exports;
        }
        return r.n = (t2) => {
          var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
          return r.d(e2, { a: e2 }), e2;
        }, r.d = (t2, e2) => {
          for (var n in e2)
            r.o(e2, n) && !r.o(t2, n) && Object.defineProperty(t2, n, { enumerable: true, get: e2[n] });
        }, r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r(676);
      })().default;
    });
  })(qrCodeStyling);
  return qrCodeStylingExports;
}
export {
  require$$1 as a,
  require$$2 as b,
  es5Exports as e,
  requireQrCodeStyling as r
};
