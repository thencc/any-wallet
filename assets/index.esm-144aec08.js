var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var logger = {
  enabled: false,
  // TODO add prefix option for logger "[inkey-client]"
  log(...args) {
    if (!this.enabled)
      return;
    console.log(...args);
  },
  debug(...args) {
    if (!this.enabled)
      return;
    console.debug(...args);
  }
};
var SRC_DEFAULT = "https://inkey.app/";
var DEFAULT_STYLES = {
  transparent: true,
  blur: true,
  blurOverlay: false,
  containerBg: "rgba(0,0,0,0.2)"
};
var FrameBus = class {
  //
  constructor(config) {
    this.ready = false;
    this.initing = false;
    this.destroying = false;
    this.__v_skip = true;
    this.walEl = null;
    this.walElContainer = null;
    this.walWin = null;
    this.onMsgHandler = null;
    this.requests = /* @__PURE__ */ new Map();
    if (!config) {
      this.initSrc();
    } else {
      if (typeof config == "string") {
        this.initSrc(config);
      } else if (typeof config == "object") {
        logger.log("got config obj", config);
        if (config.src) {
          if (config.align) {
            this.initSrc(config.src, config.align, config.styles);
          } else {
            this.initSrc(config.src, "center", config.styles);
          }
        } else {
          throw new Error("bad inkey config, cannot init");
        }
      } else {
        throw new Error("err constructing FrameBus");
      }
    }
    document.body.addEventListener("DOMNodeRemoved", (evt) => {
      if (!this.destroying) {
        const removedNode = evt.target;
        if (removedNode == this.walElContainer) {
          logger.log("iframe container removed from DOM");
          this.destroy();
        }
      }
    }, false);
  }
  // INSERT iframe into DOM
  async initSrc(src = SRC_DEFAULT, align = "center", styles = DEFAULT_STYLES) {
    const url = new URL(src);
    if (url.searchParams.has("wood")) {
      logger.enabled = true;
    }
    logger.log("initSrc", src);
    logger.log("styles", styles);
    const exEl = document.querySelector("iframe#inkey-wallet");
    if (exEl) {
      console.warn("dont mount frame to DOM again");
      return;
    }
    this.destroy();
    this.initing = true;
    const walElContainer = document.createElement("div");
    walElContainer.setAttribute("id", "inkey-wallet-container");
    walElContainer.style.position = "fixed";
    if (align == "left")
      walElContainer.classList.add("align-left");
    if (align == "right")
      walElContainer.classList.add("align-right");
    if (styles.containerBg) {
      walElContainer.style.background = styles.containerBg;
    }
    let cacheStr = (/* @__PURE__ */ new Date()).getTime().toString();
    const walEl = document.createElement("iframe");
    walEl.src = `${src}${src.includes("?") ? "&" : "?"}cache=${cacheStr}`;
    walEl.classList.add("inkey-wallet");
    walEl.setAttribute("id", "inkey-wallet");
    walEl.setAttribute("name", `inkey-wallet-instance_${cacheStr}`);
    walEl.setAttribute("title", "Algorand Microwallet");
    walEl.setAttribute("frameborder", "0");
    walEl.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-downloads");
    walEl.setAttribute("allow", "publickey-credentials-get; clipboard-write");
    walEl.style.display = "none";
    walEl.style.visibility = "hidden";
    logger.log("styles.blur", styles.blur);
    if (styles.blur) {
      walEl.classList.add("blur-backdrop");
    }
    if (styles.blurOverlay) {
      walElContainer.classList.add("blur-backdrop");
    }
    this.walEl = walEl;
    this.walElContainer = walElContainer;
    walElContainer.appendChild(walEl);
    document.body.appendChild(walElContainer);
    const walWin = walEl.contentWindow;
    if (!walWin) {
      console.error("no walWin");
      return;
    }
    this.walWin = walWin;
    walEl.addEventListener("load", () => {
      logger.log("iframe loaded");
      setTimeout(() => {
        walEl.style.display = "initial";
        walElContainer.style.transition = "opacity 0.2s ease-out";
      }, 100);
      this.ready = true;
      this.initing = false;
      this.onMsgHandler = this.onMessage.bind(this);
      window.addEventListener("message", this.onMsgHandler, false);
      const data = {
        type: "get-style-recs"
      };
      this.emit(data);
      this.emit({
        type: "set-styles",
        payload: {
          styles
        }
      });
      const data2 = {
        type: "init-comms",
        payload: {
          url: window.location.origin + window.location.pathname
        }
      };
      this.emit(data2);
    });
  }
  showFrame(routepath) {
    var _a;
    logger.log("showFrame", routepath);
    if (!this.walElContainer)
      return;
    this.walElContainer.classList.add("inkey-visible");
    if (this.walEl) {
      this.walEl.classList.add("visible");
      this.walEl.style.position = "absolute";
      (_a = this.walWin) == null ? void 0 : _a.focus();
      const data = {
        type: "set-visibility",
        payload: {
          visible: true,
          route: routepath
        }
      };
      this.emit(data);
    }
  }
  hideFrame() {
    this.walElContainer.classList.remove("inkey-visible");
    if (this.walEl) {
      this.walEl.classList.remove("visible");
      const data = {
        type: "set-visibility",
        payload: {
          visible: false
        }
      };
      this.emit(data);
    }
  }
  setHeight(height, unit = "px") {
    if (this.walEl) {
      this.walEl.style.height = `${height}${unit}`;
    }
  }
  destroy() {
    logger.log("destroy FrameBus");
    this.destroying = true;
    if (this.walElContainer) {
      if (this.walEl) {
        this.walElContainer.removeChild(this.walEl);
      }
      document.body.removeChild(this.walElContainer);
      this.walElContainer = null;
    }
    if (this.walEl) {
      this.walEl = null;
    }
    if (this.walWin) {
      this.walWin = null;
    }
    if (this.onMsgHandler) {
      window.removeEventListener("message", this.onMsgHandler, false);
      this.onMsgHandler = null;
    }
    this.removeStyles();
    this.ready = false;
    this.initing = false;
    this.destroying = false;
  }
  // async ready for waiting for iframe to mount + load into DOM
  async isReady() {
    return new Promise((resolve) => {
      if (this.ready) {
        resolve(true);
      } else {
        if (this.initing) {
          const readyInterval = setInterval(() => {
            logger.log("isReady intervaling");
            if (this.ready) {
              clearInterval(readyInterval);
              resolve(true);
            }
          }, 150);
        } else {
          console.warn("do initSrc again");
          resolve(false);
        }
      }
    });
  }
  setOnDisconnect(f) {
    this.onDisconnect = f;
  }
  onDisconnect() {
    logger.log("onDisconnect");
  }
  // onMessage(event: any) {
  onMessage(event) {
    let d = event.data;
    if (d.source && d.source == "ncc-inkey-wallet") {
      logger.log("[inkey-client] got:", d);
      if (d.type === "hide") {
        this.hideFrame();
      }
      if (d.type === "show") {
        this.showFrame();
      }
      if (d.type === "disconnect") {
        this.onDisconnect();
      }
      if (d.type === "set-height") {
        const h = d.payload.height;
        if (h) {
          this.setHeight(h);
        }
      }
      if (d.type == "style-recs") {
        const css = d.payload.css;
        this.insertStyles(css);
      }
      if (d.type == "async-reply") {
        if (d["async"] && d.async == true && d.uuid) {
          const outgoing = this.requests.get(d.uuid);
          if (!outgoing) {
            throw Error("got an async msg back but could not match the uuid to resolve it");
          }
          this.requests.delete(d.uuid);
          const resolve = outgoing.resolve;
          resolve(d.payload);
        }
      }
    }
  }
  emit(data) {
    logger.log("[inkey-client] emit:", data);
    if (!this.ready) {
      throw new Error("FrameBus not ready");
    }
    const uuid = (/* @__PURE__ */ new Date()).getTime().toString();
    data = __spreadProps(__spreadValues({}, data), {
      source: "ncc-inkey-client",
      uuid
    });
    if (this.walEl && this.walWin) {
      this.walWin.postMessage(JSON.stringify(data), this.walEl.src);
    } else {
      throw new Error("no wallEl or walWin");
    }
    return data;
  }
  // async emit
  emitAsync(data) {
    data = __spreadProps(__spreadValues({}, data), {
      async: true
    });
    data = this.emit(data);
    return new Promise((resolve) => {
      if (data.uuid == void 0) {
        throw new Error("emit returned without data.uuid");
      }
      this.requests.set(data.uuid, { req: data, resolve });
    });
  }
  /**
   * Insert styles into the frame container from inkey.
   * @param css String containing CSS code
   */
  insertStyles(css) {
    const existingStyles = document.querySelector("style#inkey-wallet-styles");
    if (!existingStyles) {
      const stylesheet = document.createElement("style");
      stylesheet.setAttribute("id", "inkey-wallet-styles");
      stylesheet.innerText = css;
      document.head.appendChild(stylesheet);
    } else {
      existingStyles.innerText += css;
    }
    if (this.walEl) {
      setTimeout(() => {
        if (this.walEl)
          this.walEl.style.visibility = "initial";
      }, 100);
    } else {
      console.warn("no walEl for style.visibility reset");
    }
  }
  removeStyles() {
    const styleEl = document.querySelector("style#inkey-wallet-styles");
    if (styleEl) {
      document.head.removeChild(styleEl);
    }
  }
};
var createClient = async (config) => {
  logger.log("inkey>createClient>started");
  return {
    frameBus: new FrameBus(config),
    /**
     * Opens Inkey to allow users to create an account or login with a previously
     * created account. Must be called before transactions can be signed.
     * @param payload Optional payload object, can contain `siteName` parameter to display the name of the application.
     * @returns Promise resolving to an account object of type `{ account: string, username: string }[]`
     * 			// return array because we will support arrays of accounts in the future even if we always return 1 for now
     */
    async connect(payload) {
      if (!payload)
        payload = {};
      const data = {
        type: "connect",
        payload
      };
      const { accounts } = await this.ping(data, { showFrame: true });
      return accounts;
    },
    /**
     * Tells Inkey to close your session & clear local storage.
     * @returns Success or fail message
     */
    async disconnect() {
      const data = {
        type: "disconnect"
      };
      const res = await this.ping(data, { showFrame: false });
      if (res.success)
        ;
      return res;
    },
    /**
     * Shows the Inkey wallet frame
     */
    show(routepath) {
      if (this.frameBus) {
        this.frameBus.showFrame(routepath);
      }
    },
    /**
     * Hides the Inkey wallet frame
     */
    hide() {
      if (this.frameBus) {
        this.frameBus.hideFrame();
        this.ping({ type: "reject" });
      }
    },
    // ---
    //
    /**
     * Sends messages to Inkey via FrameBus
     * @param data Message to send
     * @returns Whatever Inkey gives us
     */
    async ping(data, options) {
      if (!this.frameBus) {
        throw new Error("No inkey frameBus");
      }
      if (!this.frameBus.ready) {
        await this.frameBus.isReady();
      }
      data.source = "ncc-inkey-client";
      data.async = true;
      if (options == null ? void 0 : options.showFrame)
        this.frameBus.showFrame();
      const returnedPayload = await this.frameBus.emitAsync(data);
      return returnedPayload;
    },
    /**
     * Signs unsigned transactions, returns signed txns
     * @param txns Array of Uint8Array encoded transactions
     * @returns {Promise<InkeySignTxnResponse>} Promise resolving to response object containing signedTxns if successful. Otherwise, provides `error` or `reject` properties. { success, reject, error, signedTxns }
     */
    async signTxnsUint8Array(txns, connectedAccounts) {
      var _a;
      const data = {
        type: "sign-txns-raw",
        payload: {
          txns,
          connectedAccounts
        }
      };
      const res = await this.ping(data, { showFrame: true });
      (_a = this.frameBus) == null ? void 0 : _a.hideFrame();
      if (res.error) {
        return {
          success: false,
          reject: false,
          error: res.error
        };
      }
      if (res.reject) {
        return {
          success: false,
          reject: true
        };
      }
      return {
        success: true,
        reject: false,
        signedTxns: res.signedTxns
      };
    },
    /**
     * Sends unsigned transactions to Inkey, awaits signing, returns signed txns
     * @param txns Array of base64 encoded transactions OR more complex obj array w txn signing type needed
     * @returns {Promise<InkeySignTxnResponse>} Promise resolving to response object containing signedTxns if successful. Otherwise, provides `error` or `reject` properties. { success, reject, error, signedTxns }
     */
    async signTxns(txns, connectedAccounts) {
      var _a;
      let data;
      if (typeof txns[0] == "string") {
        data = {
          type: "sign-txns",
          // inkey-wallet determines payload type
          payload: {
            txns,
            connectedAccounts
          }
        };
      } else if (typeof txns[0] == "object") {
        data = {
          type: "sign-txns",
          // inkey-wallet determines payload type
          payload: {
            txns,
            connectedAccounts
          }
        };
      } else {
        throw new Error("bad txns array input...");
      }
      const res = await this.ping(data, { showFrame: true });
      (_a = this.frameBus) == null ? void 0 : _a.hideFrame();
      if (res.error) {
        return {
          success: false,
          reject: false,
          error: res.error
        };
      }
      if (res.reject) {
        return {
          success: false,
          reject: true
        };
      }
      return {
        success: true,
        reject: false,
        signedTxns: res.signedTxns
      };
    }
  };
};
export {
  createClient
};
