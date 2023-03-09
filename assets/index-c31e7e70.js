import { g as getDefaultExportFromCjs } from "./index-4e05fa9e.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var myalgoConnectExports = {};
var myalgoConnect = {
  get exports() {
    return myalgoConnectExports;
  },
  set exports(v) {
    myalgoConnectExports = v;
  }
};
const ERRORS = {
  WINDOW_NOT_LOADED: "Window not loaded",
  WINDOW_IS_OPENED: "Windows is opened",
  WINDOW_NOT_OPENED: "Can not open popup window",
  INVALID_WINDOW: "Invalid window"
};
let SignTxnsError$1 = class SignTxnsError extends Error {
  constructor(message, code, data) {
    super(message);
    this.code = code;
    this.data = data;
  }
};
var errors = {
  ERRORS,
  SignTxnsError: SignTxnsError$1
};
const { WINDOW_NOT_OPENED } = errors;
const defaultOptions = {
  width: 400,
  height: 600
};
function openPopup$1(url, options = defaultOptions) {
  let { name = "", width, height, top = 0, left = 0 } = options;
  if (width) {
    if (window.outerWidth) {
      left = Math.round((window.outerWidth - width) / 2) + window.screenX;
    } else if (window.screen.width) {
      left = Math.round((window.screen.width - width) / 2);
    }
  }
  if (height) {
    if (window.outerHeight) {
      top = Math.round((window.outerHeight - height) / 2) + window.screenY;
    } else if (window.screen.height) {
      top = Math.round((window.screen.height - height) / 2);
    }
  }
  if (width && height) {
    options = {
      top,
      left,
      width,
      height,
      status: 1,
      toolbar: 0,
      menubar: 0,
      resizable: 1,
      scrollbars: 1
    };
  }
  const params = Object.keys(options).map((key) => {
    const param = options[key];
    if (param !== null && param !== void 0 && typeof param.toString === "function") {
      return `${key}=${param.toString()}`;
    }
  }).filter(Boolean).join(",");
  let win;
  try {
    win = window.open(url, name, params);
  } catch (err) {
    throw new Error(`${WINDOW_NOT_OPENED} - ${err.stack || err.message}`);
  }
  if (!win || window.closed) {
    throw new Error(`${WINDOW_NOT_OPENED} - blocked`);
  }
  return win;
}
var popup = {
  openPopup: openPopup$1
};
function sleep$1(msec = 200) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}
function prepareTxn$1(transaction) {
  if (transaction.constructor === Uint8Array)
    return Buffer.from(transaction).toString("base64");
  else if (typeof transaction === "string")
    return transaction;
  const txn = Object.assign({}, transaction);
  if (txn.note && txn.note.constructor === Uint8Array)
    txn.note = Buffer.from(txn.note).toString("base64");
  if (txn.assetMetadataHash && txn.assetMetadataHash.constructor === Uint8Array)
    txn.assetMetadataHash = Buffer.from(txn.assetMetadataHash).toString("base64");
  if (txn.group && txn.group.constructor === Uint8Array)
    txn.group = Buffer.from(txn.group).toString("base64");
  if (txn.type === "appl" && txn.appApprovalProgram && txn.appApprovalProgram.constructor === Uint8Array)
    txn.appApprovalProgram = Buffer.from(txn.appApprovalProgram).toString("base64");
  if (txn.type === "appl" && txn.appClearProgram && txn.appClearProgram.constructor === Uint8Array)
    txn.appClearProgram = Buffer.from(txn.appClearProgram).toString("base64");
  if (txn.type === "appl" && txn.appArgs && txn.appArgs.length > 0) {
    for (let i = 0; i < txn.appArgs.length; i++)
      if (txn.appArgs[i].constructor === Uint8Array)
        txn.appArgs[i] = Buffer.from(txn.appArgs[i]).toString("base64");
  }
  return txn;
}
var utils = {
  sleep: sleep$1,
  prepareTxn: prepareTxn$1
};
var communicationBridgeExports = {};
var communicationBridge = {
  get exports() {
    return communicationBridgeExports;
  },
  set exports(v) {
    communicationBridgeExports = v;
  }
};
let Messenger$1 = class Messenger {
  /**
   * @callback onMessage
   * @param {error} err
   * @param {Object} result
   */
  /**
   * @description Callback function to send response to the window source of the message
   * @callback sendResponse
   * @param {Object} response Message response
   * @returns {void}
   */
  /**
   * @description Callback function to manage message received from the channel
      * @callback onMessageCallback
      * @param {Object} json
   * @param {Window} source
      * @param {sendResponse} cb
   * @param {Messenger} bridge
   * @returns {void}
      */
  /**
   * @description Send message options
   * @typedef {Object} sendMessageOptions
   * @property {boolean} waitForReply Wait for a reply from the recipient
   * @property {string} origin Override Window.origin
   * @property {number} timeout Timeout to wait for reply message, default 4000 msec
   */
  /**
      * @param {string} channelName  Channel Name
      * @param {onMessageCallback} [onMessageCallback] Callback function
      */
  constructor(channelName, onMessageCallback) {
    this.channelName = channelName;
    this.onMessage = onMessageCallback;
    this._installListener();
    this._requests = /* @__PURE__ */ new Map();
    this._nextId = 0;
    this._defaultTimeout = 4e3;
  }
  /**
   * @access private
   */
  _installListener() {
    const that = this;
    this._listener = function(event) {
      if (!event.data || typeof event.data !== "string") {
        return;
      }
      let json;
      try {
        json = JSON.parse(event.data);
        if (!json.channel || json.channel !== that.channelName) {
          return;
        }
        if (typeof json.message !== "object") {
          return;
        }
      } catch (err) {
        return;
      }
      if (typeof json.replyId !== "undefined") {
        if (typeof json.replyId !== "number" || json.replyId % 1 !== 0) {
          return;
        }
        const req = that._requests.get(json.replyId);
        if (req) {
          if (event.origin !== req.targetOrigin) {
            return;
          }
          clearTimeout(req.timeout);
          that._requests.delete(json.replyId);
          req.resolve(json.message);
        }
      } else {
        if (typeof json.id !== "number" || json.id % 1 !== 0 || !that.onMessage) {
          return;
        }
        const channel = that.channelName;
        const replyId = json.id;
        const origin = event.origin;
        const replyMessage = function(message) {
          const request = {
            channel,
            replyId,
            message
          };
          event.source.postMessage(
            JSON.stringify(request),
            origin
          );
        };
        that.onMessage(json.message, event.origin, event.source, replyMessage, that);
      }
    };
    window.addEventListener("message", this._listener);
  }
  /**
   * @access public
   * @description Send a message to another window
   * @param {Window} targetWindow Target Window
   * @param {Object} message Object Message
   * @param {string} origin Target origin
   * @param {sendMessageOptions} [options] Object Message
   * @returns {Promise<any>} Returns
   */
  sendMessage(targetWindow, message, origin, options) {
    let targetOrigin;
    try {
      targetOrigin = new URL(origin).origin;
    } catch (e) {
      throw new Error("Invalid origin URL");
    }
    const request = {
      channel: this.channelName,
      id: this.getNextId(),
      message
    };
    if (options && options.waitForReply) {
      const that = this;
      return new Promise(function(resolve, reject) {
        const timeout = setTimeout(function() {
          const req = that._requests.get(request.id);
          if (req) {
            that._requests.delete(request.id);
            reject(new Error("Timeout expired for the message response"));
          }
        }, options && options.timeout ? options.timeout : that._defaultTimeout);
        that._requests.set(request.id, {
          timeout,
          resolve,
          targetOrigin
        });
        targetWindow.postMessage(
          JSON.stringify(request),
          targetOrigin
        );
      });
    }
    targetWindow.postMessage(
      JSON.stringify(request),
      targetOrigin
    );
  }
  /**
   * @access public
   * @description Close client connection
   */
  close() {
    window.removeEventListener("message", this._listener);
    this._listener = null;
    delete this._requests;
  }
  /**
   * @access private
   */
  getNextId() {
    this._nextId += 1;
    return this._nextId;
  }
};
var messenger = Messenger$1;
(function(module) {
  module.exports = messenger;
})(communicationBridge);
const Messenger2 = communicationBridgeExports;
const WALLET_BRIDGE_CHANNEL_NAME = "wallet-bridge-communication-channel";
let Messaging$1 = class Messaging {
  /**
   * @description Request object
   * @typedef {Object} Request
   * @property {string} method Request method
   * @property {Object} [params] Optionally, request params
   */
  /**
   * @description Response object
   * @typedef {Object} Response
   * @property {"error"|"success"} status Response status
   * @property {string} message Response message
   * @property {Object} [data] Optionally, is the request was a success and sent data
   */
  /**
   * @description Callback function to manage message received from the channel
      * @callback onMessagingCallback
      * @param {Request} request Request received from another window
      * @param {sendResponse} cb Response callback
   * @returns {void}
      */
  /**
      * @constructor Messaging constructor
      * @param {onMessagingCallback} [listenerCallback]
      * @description Create an abstraction of Messenger class
      */
  constructor(listenerCallback) {
    const that = this;
    this.options = { waitForReply: true, timeout: 250 };
    this.listenerCallback = listenerCallback;
    this.bridge = new Messenger2(WALLET_BRIDGE_CHANNEL_NAME, function(req, source, cb, bridge2) {
      if (that.listenerCallback)
        that.listenerCallback(req, cb);
    });
  }
  /**
   * @access public
      * @description Send message to a target window
      * @param {Window} window Target window
      * @param {Request} request Request
      * @param {string} origin Target origin
   * @param {import("bridge-communication").sendMessageOptions} [options] Override default message options
   * @returns {Promise<Response>} Response of the target window
      */
  sendMessage(window2, request, origin, options) {
    return this.bridge.sendMessage(window2, request, origin, options ? options : this.options);
  }
  /**
   * @access public
   * @description Set new listener
   * @param {onMessagingCallback} [listenerCallback] Set a new listener or override actual listener
   * @returns {void}
   */
  setNewListener(listenerCallback) {
    this.listenerCallback = listenerCallback;
  }
  /**
   * @access public
   * @description Close bridge
   * @returns {void}
   */
  close() {
    this.bridge.close();
  }
};
var Messaging_1 = Messaging$1;
const { openPopup } = popup;
const { sleep, prepareTxn } = utils;
const { Errors, SignTxnsError: SignTxnsError2 } = errors;
const Messaging2 = Messaging_1;
let bridge = null;
class MyAlgoConnect {
  /**
   * @constructor
   * @param {Options} [options] Operation options
   */
  constructor(options) {
    if (!bridge) {
      bridge = new Messaging2();
    }
    this.bridge = bridge;
    this.timeout = options && options.timeout ? options.timeout : 16e5;
    this.url = options && options.bridgeUrl ? options.bridgeUrl : "https://wallet.myalgo.com/bridge";
    if (this.url.endsWith("/"))
      this.url = this.url.slice(0, -1);
    this.currentConnectPopup = null;
    this.currentSigntxPopup = null;
    this.currentSignLogicSigPopup = null;
    this.currentTealSignPopup = null;
    this.currentSignBytesPopup = null;
    this.options = { waitForReply: true, timeout: this.timeout };
    this.disableLedgerNano = options && options.disableLedgerNano ? options.disableLedgerNano : false;
  }
  /**
   * @async
   * @access public
   * @description Open a new window to load accounts from storage.
   * @param {ConnectionSettings} settings Connect settings
   * @returns {Promise<string[]>} Returns allowed accounts by the user.
   */
  async connect(settings = { shouldSelectOneAccount: false, openManager: false }) {
    if (this.currentConnectPopup) {
      if (this.currentConnectPopup.closed) {
        this.currentConnectPopup = null;
      } else {
        this.focusWindow(this.currentConnectPopup);
      }
    }
    try {
      this.currentConnectPopup = openPopup(this.url + "/connect.html");
      await this.waitForWindowToLoad(this.currentConnectPopup);
      const res = await this.bridge.sendMessage(
        this.currentConnectPopup,
        { method: "unlock", params: Object.assign(settings, { disableLedgerNano: this.disableLedgerNano }) },
        this.url,
        this.options
      );
      this.closeWindow(this.currentConnectPopup);
      this.currentConnectPopup = null;
      if (res.status === "error")
        throw new Error(res.message);
      return res.data.accounts;
    } catch (err) {
      this.closeWindow(this.currentConnectPopup);
      this.currentConnectPopup = null;
      throw err;
    }
  }
  /**
   * @async
   * @access public
   * @description Open a new window to sign transaction.
   * @param {Transaction|Transaction[]|EncodedTransaction|EncodedTransaction[]} transaction Transaction object or a Transaction array.
   * @param {SignTransactionOptions} [signOptions] Sign transactions options object.
   * (The signer account must be the same for all transactions).
   * @returns {(SignedTx|SignedTx[])} Returns transaction blob or an Array of blobs, depends if the
   * transaction was an object or an array.
   */
  async signTransaction(transaction, signOptions) {
    let txn;
    if (this.currentSigntxPopup) {
      if (this.currentSigntxPopup.closed) {
        this.currentSigntxPopup = null;
      } else {
        this.focusWindow(this.currentSigntxPopup);
      }
    }
    if (Array.isArray(transaction))
      txn = Array.from(transaction).map((tx) => prepareTxn(tx));
    else
      txn = prepareTxn(transaction);
    try {
      this.currentSigntxPopup = openPopup(this.url + "/signtx.html");
      await this.waitForWindowToLoad(this.currentSigntxPopup);
      const res = await this.bridge.sendMessage(
        this.currentSigntxPopup,
        {
          method: "transaction",
          params: { txn, settings: { disableLedgerNano: this.disableLedgerNano }, options: signOptions }
        },
        this.url,
        this.options
      );
      this.closeWindow(this.currentSigntxPopup);
      this.currentSigntxPopup = null;
      if (res.status === "error")
        throw new Error(res.message);
      if (Array.isArray(res.data)) {
        const result = [];
        for (const t of res.data) {
          t.blob = new Uint8Array(Buffer.from(t.blob, "hex"));
          result.push(t);
        }
        return result;
      }
      res.data.blob = new Uint8Array(Buffer.from(res.data.blob, "hex"));
      return res.data;
    } catch (err) {
      this.closeWindow(this.currentSigntxPopup);
      this.currentSigntxPopup = null;
      throw err;
    }
  }
  /**
   * @async
   * @access public
   * @description Open a new window to sign transaction.
   * @param {WalletTransaction[]} txnsToSign Transactions to sign.
   * @param {SignTxnsOpts} [opts] Sign transactions options object.
   * @returns {(SignedTxnStr|null)[]} Returns an array of base64 encoding of the SignedTxn,
   * or null where the transaction was not to be signed.
   */
  async signTxns(txnsToSign, opts) {
    if (this.currentSigntxPopup) {
      if (this.currentSigntxPopup.closed) {
        this.currentSigntxPopup = null;
      } else {
        this.focusWindow(this.currentSigntxPopup);
      }
    }
    try {
      let txns = txnsToSign;
      if (!Array.isArray(txnsToSign)) {
        txns = [txnsToSign];
      }
      this.currentSigntxPopup = openPopup(this.url + "/signtx.html");
      await this.waitForWindowToLoad(this.currentSigntxPopup);
      const res = await this.bridge.sendMessage(
        this.currentSigntxPopup,
        {
          method: "signTxns",
          params: { txns, settings: { disableLedgerNano: this.disableLedgerNano }, opts }
        },
        this.url,
        this.options
      );
      this.closeWindow(this.currentSigntxPopup);
      this.currentSigntxPopup = null;
      if (res.status === "error")
        throw new SignTxnsError2(res.message, res.code, res.data);
      return res.data.map((r) => r ? Buffer.from(r.blob, "hex").toString("base64") : null);
    } catch (err) {
      this.closeWindow(this.currentSigntxPopup);
      this.currentSigntxPopup = null;
      throw err;
    }
  }
  /**
   * @async
   * @access public
   * @description Open a new window to sign a teal program.
   * @param {Uint8Array|Base64} logic LogicSig program
   * @param {Address} address Signer Address
   * @returns {Uint8Array} Returns logicsig blob
   */
  async signLogicSig(logic, address) {
    if (this.currentSignLogicSigPopup) {
      if (this.currentSignLogicSigPopup.closed) {
        this.currentSignLogicSigPopup = null;
      } else {
        this.focusWindow(this.currentSignLogicSigPopup);
      }
    }
    try {
      this.currentSignLogicSigPopup = openPopup(this.url + "/logicsigtx.html");
      await this.waitForWindowToLoad(this.currentSignLogicSigPopup);
      let logicInBase64 = logic;
      if (logic.constructor === Uint8Array)
        logicInBase64 = Buffer.from(logic).toString("base64");
      const res = await this.bridge.sendMessage(
        this.currentSignLogicSigPopup,
        { method: "logicsig", params: { logic: logicInBase64, address } },
        this.url,
        this.options
      );
      this.closeWindow(this.currentSignLogicSigPopup);
      this.currentSignLogicSigPopup = null;
      if (res.status === "error")
        throw new Error(res.message);
      return new Uint8Array(Buffer.from(res.data.signedTeal, "base64"));
    } catch (err) {
      this.closeWindow(this.currentSignLogicSigPopup);
      this.currentSignLogicSigPopup = null;
      throw err;
    }
  }
  /**
   * @async
   * @access public
   * @description Open a new window to sign data to verify in a teal program.
   * @param {Uint8Array|Base64} data Data to sign
   * @param {Address} contractAddress Address of the contract that will verify the data
   * @param {Address} address Signer Address
   * @returns {Uint8Array} Returns data signature
   */
  async tealSign(data, contractAddress, address) {
    if (this.currentTealSignPopup) {
      if (this.currentTealSignPopup.closed) {
        this.currentTealSignPopup = null;
      } else {
        this.focusWindow(this.currentTealSignPopup);
      }
    }
    try {
      this.currentTealSignPopup = openPopup(this.url + "/tealsign.html");
      await this.waitForWindowToLoad(this.currentTealSignPopup);
      let dataInBase64 = data;
      if (data.constructor === Uint8Array)
        dataInBase64 = Buffer.from(data).toString("base64");
      const res = await this.bridge.sendMessage(
        this.currentTealSignPopup,
        { method: "tealsign", params: { data: dataInBase64, contractAddress, address } },
        this.url,
        this.options
      );
      this.closeWindow(this.currentTealSignPopup);
      this.currentTealSignPopup = null;
      if (res.status === "error")
        throw new Error(res.message);
      return new Uint8Array(Buffer.from(res.data.signature, "base64"));
    } catch (err) {
      this.closeWindow(this.currentTealSignPopup);
      this.currentTealSignPopup = null;
      throw err;
    }
  }
  /**
   * @async
   * @access public
   * @description Open a new window to sign an arbitrary array of bytes.
   * @param {Uint8Array} bytes Bytes to sign
   * @param {Address} address Signer Address
   * @returns {Uint8Array} Returns bytes signature
   */
  async signBytes(bytes, address) {
    if (this.currentSignBytesPopup) {
      if (this.currentSignBytesPopup.closed) {
        this.currentSignBytesPopup = null;
      } else {
        this.focusWindow(this.currentSignBytesPopup);
      }
    }
    try {
      this.currentSignBytesPopup = openPopup(this.url + "/signbytes.html");
      await this.waitForWindowToLoad(this.currentSignBytesPopup);
      let messageInBase64 = Buffer.from(bytes).toString("base64");
      const res = await this.bridge.sendMessage(
        this.currentSignBytesPopup,
        { method: "signbytes", params: { data: messageInBase64, address } },
        this.url,
        this.options
      );
      this.closeWindow(this.currentSignBytesPopup);
      this.currentSignBytesPopup = null;
      if (res.status === "error")
        throw new Error(res.message);
      return new Uint8Array(Buffer.from(res.data.signature, "base64"));
    } catch (err) {
      this.closeWindow(this.currentSignBytesPopup);
      this.currentSignBytesPopup = null;
      throw err;
    }
  }
  /**
   * @async
   * @access private
   * @description Wait until the window opened loads.
   * @param {Window} targetWindow Window opened context.
   * @param {number} retries Times to retry before throw an error.
   * @returns {Promise<void>} Throw error if the window does not load.
   */
  async waitForWindowToLoad(targetWindow, retries = 30) {
    for (let i = 0; i < retries; i++) {
      await sleep(300);
      if (!targetWindow)
        break;
      try {
        const res = await bridge.sendMessage(targetWindow, { method: "status" }, this.url);
        if (res.status == "success")
          return;
      } catch (err) {
      }
    }
    throw new Error(Errors.WINDOW_NOT_LOADED);
  }
  /**
   * @access private
   * @description Safely close an opened window
   * @param {Window} window Window object
   * @returns {void}
   */
  closeWindow(window2) {
    if (window2 && !window2.closed && window2.close) {
      window2.close();
    }
  }
  /**
   * @access private
   * @description Focus current popup
   * @param {Window} window Window object
   * @returns {void}
   * @throws {"Windows is opened"}
   */
  focusWindow(window2) {
    if (window2 && window2.focus) {
      window2.focus();
      throw new Error(Errors.WINDOW_IS_OPENED);
    } else {
      throw new Error(Errors.INVALID_WINDOW);
    }
  }
}
var main = MyAlgoConnect;
(function(module) {
  module.exports = main;
})(myalgoConnect);
const index = /* @__PURE__ */ getDefaultExportFromCjs(myalgoConnectExports);
const index$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: index
}, [myalgoConnectExports]);
export {
  index$1 as i
};
