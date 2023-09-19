import { r as requireQrCodeStyling, a as require$$1, e as es5Exports } from "./qr-code-styling-87721598.js";
import { a as algosdk_minExports } from "./algosdk.min-94b10098.js";
import { b as buffer } from "./index-76a79632.js";
import { r as requireLottie } from "./lottie-b035792e.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e2 = m[i];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k in e2) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e2, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e2[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var dist = {};
var index9f980d8f = {};
var AppA86735fb = {};
var hasRequiredAppA86735fb;
function requireAppA86735fb() {
  if (hasRequiredAppA86735fb)
    return AppA86735fb;
  hasRequiredAppA86735fb = 1;
  var n = requireIndex9f980d8f(), e2 = requireQrCodeStyling(), t = requireLottie();
  function o(n2) {
    return n2 && "object" == typeof n2 && "default" in n2 ? n2 : { default: n2 };
  }
  var l = o(e2), a = o(t);
  function i(n2, e3) {
    void 0 === e3 && (e3 = {});
    var t2 = e3.insertAt;
    if (n2 && "undefined" != typeof document) {
      var o2 = document.head || document.getElementsByTagName("head")[0], l2 = document.createElement("style");
      l2.type = "text/css", "top" === t2 && o2.firstChild ? o2.insertBefore(l2, o2.firstChild) : o2.appendChild(l2), l2.styleSheet ? l2.styleSheet.cssText = n2 : l2.appendChild(document.createTextNode(n2));
    }
  }
  var d = ".defly-wallet-modal-header {\n  position: absolute;\n  top: -44px;\n  right: 0px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.defly-wallet-modal-header--mobile {\n  position: static;\n}\n.defly-wallet-modal-header--mobile .defly-wallet-modal-header__close-button {\n  width: 24px;\n  height: 24px;\n  margin: 0;\n  padding: 0;\n  background: transparent;\n  border: unset;\n  box-shadow: unset;\n}\n\n.defly-wallet-modal-header__brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: -0.13px;\n  color: #ffffff;\n}\n\n.defly-wallet-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 48px;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--defly-wallet-modal-font-family);\n  font-size: 14px;\n}\n\n.defly-wallet-modal-header__close-button {\n  width: 40px;\n  height: 40px;\n  margin: 0;\n  padding: 0;\n  background: #333333;\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 100%;\n}\n\n.defly-wallet-modal-header__close-button__close-icon {\n  width: 20px;\n  height: 20px;\n}";
  i(d);
  function s() {
    return document.documentElement.clientWidth <= 935;
  }
  function c() {
    document.documentElement.style.setProperty("--vh", 0.01 * window.innerHeight + "px");
  }
  const r = document.createElement("template"), p = n.isMobile() ? "defly-wallet-modal-header defly-wallet-modal-header--mobile" : "defly-wallet-modal-header defly-wallet-modal-header--desktop";
  r.innerHTML = `
  <div class="${p}">
      ${s() && n.isMobile() ? "" : `<div class="defly-wallet-modal-header__brand">
              <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3e %3cg transform='translate(18090 -8429)'%3e %3cg transform='translate(-18227.732 8408.374)'%3e %3cpath d='M168.632%2c47.566%2c155.742%2c26l-12.89%2c21.566%2c12.89-7.354Z' transform='translate(0)' fill='white'/%3e %3cpath d='M191.634%2c257.081l-10.639-5.607-10.639%2c5.607%2c10.639-3.464Z' transform='translate(-25.252 -207.321)' fill='white'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e" />

              Defly Connect
            </div>
            `} 

      <button
        id="defly-wallet-modal-header-close-button"
        class="defly-wallet-button defly-wallet-modal-header__close-button">
        <img
          class="defly-wallet-modal-header__close-button__close-icon"
          src="${s() && n.isMobile() ? "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='%23999999' stroke-width='2'/%3e%3c/svg%3e" : "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='white' stroke-width='2'/%3e%3c/svg%3e"}"
        />
      </button>
    </div>
`;
  class m extends HTMLElement {
    constructor() {
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const n2 = document.createElement("style");
        n2.textContent = d, this.shadowRoot.append(r.content.cloneNode(true), n2), this.onClose();
      }
    }
    onClose() {
      var e3;
      const t2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.getElementById("defly-wallet-modal-header-close-button"), o2 = this.getAttribute("modal-id");
      t2 && o2 === n.DEFLY_WALLET_REDIRECT_MODAL_ID && t2.addEventListener("click", () => {
        n.removeModalWrapperFromDOM(n.DEFLY_WALLET_REDIRECT_MODAL_ID);
      });
    }
  }
  var f = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3e%3cg transform='translate(18090 -8429)'%3e%3cg transform='translate(-18090 8428)'%3e%3crect width='36' height='36' rx='18' transform='translate(0 1)'/%3e%3c/g%3e%3cg transform='translate(-18227.732 8408.374)'%3e%3cpath d='M168.632%2c47.566%2c155.742%2c26l-12.89%2c21.566%2c12.89-7.354Z' transform='translate(0)' fill='white'/%3e%3cpath d='M191.634%2c257.081l-10.639-5.607-10.639%2c5.607%2c10.639-3.464Z' transform='translate(-25.252 -207.321)' fill='white'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", w = ".defly-wallet-download-qr-code-wrapper {\n  width: fit-content;\n  margin: 0 auto;\n  display: flex;\n  background-color: #ffffff;\n  box-shadow: 0 12px 32px rgba(26, 35, 91, 0.1);\n  border-radius: 30px;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n}\n\n@media (max-width: 935px) {\n  .defly-wallet-download-qr-code-wrapper {\n    margin-top: 32px;\n  }\n}";
  i(w);
  const x = n.isAndroid() ? "algorand://" : "defly-wc://", y = document.createElement("template");
  y.innerHTML = '\n  <div id="defly-wallet-download-qr-code-wrapper" class="defly-wallet-download-qr-code-wrapper"></div>  \n';
  class h extends HTMLElement {
    constructor() {
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const n2 = document.createElement("style");
        n2.textContent = w, this.shadowRoot.append(y.content.cloneNode(true), n2);
      }
    }
    connectedCallback() {
      var n2;
      const e3 = new l.default({ width: 250, height: 250, type: "svg", data: "https://defly.app/", image: f, dotsOptions: { color: "#000", type: "dots" }, imageOptions: { crossOrigin: "anonymous", margin: 10 }, cornersSquareOptions: { type: "extra-rounded" }, cornersDotOptions: { type: "dot" } }), t2 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("defly-wallet-download-qr-code-wrapper");
      t2 && e3.append(t2);
    }
  }
  var g = ".defly-wallet-connect-modal-desktop-mode {\n  display: grid;\n  grid-template-columns: 50% auto;\n  gap: 24px;\n  align-items: center;\n}\n.defly-wallet-connect-modal-desktop-mode--default .defly-wallet-connect-modal-desktop-mode__default-view {\n  display: block;\n}\n.defly-wallet-connect-modal-desktop-mode--default .defly-wallet-connect-modal-desktop-mode__download-view {\n  display: none;\n}\n.defly-wallet-connect-modal-desktop-mode--download .defly-wallet-connect-modal-desktop-mode__default-view {\n  display: none;\n}\n.defly-wallet-connect-modal-desktop-mode--download .defly-wallet-connect-modal-desktop-mode__download-view {\n  display: block;\n}\n.defly-wallet-connect-modal-desktop-mode--download .defly-wallet-connect-modal-desktop-mode__download-view .defly-wallet-connect-modal-download-defly-view__footer a {\n  display: flex;\n  cursor: pointer;\n}\n.defly-wallet-connect-modal-desktop-mode--select-account {\n  width: 100%;\n  height: 100%;\n}\n.defly-wallet-connect-modal-desktop-mode--select-account.defly-wallet-connect-modal-desktop-mode--default {\n  overflow: hidden;\n}\n.defly-wallet-connect-modal-desktop-mode--select-account .defly-wallet-accordion {\n  overflow: hidden;\n}\n.defly-wallet-connect-modal-desktop-mode--select-account #defly-wallet-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n}\n\n.defly-wallet-connect-modal-desktop-mode__accordion__description,\n.defly-wallet-connect-modal-desktop-mode__connect-button-wrapper {\n  padding: 0 40px 20px 64px;\n}\n\n.defly-wallet-connect-modal-desktop-mode__connect-button {\n  display: block;\n  width: 100%;\n  height: 48px;\n  border: unset;\n  border-radius: 6px;\n  background-color: #333333;\n  color: white;\n  cursor: pointer;\n  font-family: var(--defly-wallet-modal-font-family);\n  font-size: 13px;\n}\n\n.defly-wallet-connect-qr-code-wrapper {\n  width: fit-content;\n  padding: 10px;\n  margin: 0 auto;\n  display: flex;\n  background-color: #ffffff;\n  box-shadow: 0 12px 32px rgba(26, 35, 91, 0.1);\n  border-radius: 30px;\n}\n\n.defly-wallet-connect-qr-code-wrapper {\n  margin-top: 30px;\n  cursor: pointer;\n}\n\n.defly-wallet-download-qr-code__image {\n  width: 300px;\n  height: 300px;\n}\n\n.defly-wallet-accordion-copy-button {\n  display: block;\n  width: 100%;\n  color: #696868;\n  text-align: center;\n  margin-top: 15px;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: -0.1px;\n  font-weight: 400;\n  transition: all ease-in 0.2s;\n}\n.defly-wallet-accordion-copy-button:hover {\n  color: #999999;\n}\n\n.defly-wallet-connect-modal-desktop-mode__scan-defly-description {\n  color: #999999;\n  text-align: center;\n  margin: 15px 0 12px;\n  font-size: 22px;\n  font-weight: 600;\n  line-height: 26px;\n  letter-spacing: 0.2px;\n}\n.defly-wallet-connect-modal-desktop-mode__scan-defly-description a {\n  color: #999999;\n}\n.defly-wallet-connect-modal-desktop-mode__scan-defly-description a:hover {\n  color: #696868;\n}\n\n.defly-wallet-connect-modal-desktop-mode__download-defly-description {\n  color: #696868;\n  text-align: center;\n  margin: 32px 0 12px;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: -0.04px;\n}\n\n.defly-wallet-connect-modal-download-defly-view__back-button {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 14px;\n  padding: 12px 24px;\n  color: #3c3c49;\n  background-color: #ffffff;\n  outline: none;\n  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);\n  border: unset;\n  border-radius: 24px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: -0.1px;\n  cursor: pointer;\n}\n\n.defly-wallet-connect-modal-download-defly-view {\n  padding: 20px;\n  background-color: #333333;\n  border-radius: 30px;\n}\n\n.defly-wallet-connect-modal-download-defly-view__title {\n  margin-bottom: 15px;\n  color: #999999;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.2px;\n}\n\n.defly-wallet-connect-modal-download-defly-view__footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 20px;\n}\n\n.defly-wallet-connect-modal-download-defly-view__footer__button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 16px;\n  color: #6a6a81;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);\n  text-decoration: none;\n  border-radius: 12px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 200%;\n  letter-spacing: -0.04px;\n  cursor: pointer;\n}\n\n#defly-wallet-iframe {\n  width: 285px;\n  height: 376px;\n  margin: 0 auto;\n  border: none;\n}\n\n@media (max-width: 935px) {\n  .defly-wallet-connect-modal-desktop-mode {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .defly-wallet-connect-qr-code-wrapper {\n    margin-top: 16px;\n  }\n  .defly-wallet-connect-modal-download-defly-view {\n    padding: 24px;\n  }\n  .defly-wallet-connect-modal-download-defly-view__footer {\n    margin-top: 40px;\n  }\n}";
  i(g);
  var u = ".defly-wallet-accordion-item:not(:last-of-type) {\n  margin-bottom: 20px;\n}\n.defly-wallet-accordion-item:not(:last-of-type) .defly-wallet-accordion-panel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.defly-wallet-accordion-item .defly-wallet-accordion-item__content {\n  height: 0;\n  overflow: hidden;\n  color: #696868;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: -0.1px;\n  transition: height ease-in 0.2s;\n}\n.defly-wallet-accordion-item--active .defly-wallet-accordion-item__content {\n  height: 494px;\n  transition: height ease-in 0.2s;\n}\n\n.defly-wallet-accordion-toggle {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 24px;\n  color: #2c3559;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 24px;\n  outline: none;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 18px;\n  letter-spacing: -0.1px;\n  font-weight: 600;\n  transition: all ease-in 0.2s;\n}\n.defly-wallet-accordion-toggle__text, .defly-wallet-accordion-toggle__content-with-label__text {\n  color: #6a6a81;\n}\n\n.defly-wallet-accordion-toggle__bold-color {\n  color: #3c3c49;\n  font-weight: 600;\n}\n\n.defly-wallet-accordion-toggle__content-with-label {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.defly-wallet-accordion-toggle__label {\n  padding: 4px 9px;\n  color: #00b19e;\n  background: rgba(0, 177, 158, 0.08);\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0.01px;\n}\n\n.defly-wallet-accordion-toggle__button {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  cursor: pointer;\n}\n\n@media (max-width: 935px) {\n  .defly-wallet-accordion-toggle {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 24px;\n    letter-spacing: -0.1px;\n  }\n}";
  i(u);
  const _ = document.createElement("template"), k = document.createElement("style"), v = document.createElement("style");
  k.textContent = g, v.textContent = u;
  _.innerHTML = `
  <div id="defly-wallet-connect-modal-desktop-mode" class="defly-wallet-connect-modal-desktop-mode defly-wallet-connect-modal-desktop-mode--default">
      <defly-wallet-connect-modal-information-section></defly-wallet-connect-modal-information-section>

      <div class="defly-wallet-connect-modal-desktop-mode__default-view">

        <div class="defly-wallet-accordion-item defly-wallet-accordion-item--active">

          <div class="defly-wallet-accordion-item__content">
            <div id="defly-wallet-connect-modal-connect-qr-code" class="defly-wallet-connect-qr-code-wrapper f_copy-button"></div>

            <div class="defly-wallet-accordion-copy-button f_copy-button">Tap to copy</div>
            <p class="defly-wallet-connect-modal-desktop-mode__scan-defly-description">
                Scan with <a href="https://defly.app/">Defly Wallet</a>
            </p>

            
          </div>
        </div>
      </div>

      <div class="defly-wallet-connect-modal-desktop-mode__download-view">
        <button id="defly-wallet-connect-modal-download-defly-view-back-button" class="defly-wallet-connect-modal-download-defly-view__back-button">
          <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.7071 6.29387C11.0976 6.68439 11.0976 7.31756 10.7071 7.70808L7.41421 11.001L19 11.001C19.5523 11.001 20 11.4487 20 12.001C20 12.5533 19.5523 13.001 19 13.001L7.41421 13.001L10.7071 16.2939C11.0976 16.6844 11.0976 17.3176 10.7071 17.7081C10.3166 18.0986 9.68342 18.0986 9.29289 17.7081L4.29289 12.7081C4.10536 12.5205 4 12.2662 4 12.001C4 11.7358 4.10536 11.4814 4.29289 11.2939L9.29289 6.29387C9.68342 5.90335 10.3166 5.90335 10.7071 6.29387Z' fill='%233C3C49'/%3e%3c/svg%3e" alt="Back Arrow" /> Back
        </button>

        <div class="defly-wallet-connect-modal-download-defly-view">
          <h1 class="defly-wallet-connect-modal-download-defly-view__title">
            Download Defly Wallet
          </h1>

          <defly-wallet-download-qr-code></defly-wallet-download-qr-code>

          <div class="defly-wallet-connect-modal-download-defly-view__footer">
            <a
              href="https://apps.apple.com/us/app/defly/id1602672723"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M25.6308 20.3011C25.6416 19.4664 25.8633 18.6481 26.2753 17.9221C26.6873 17.1962 27.2763 16.5863 27.9873 16.1491C27.5356 15.5039 26.9397 14.973 26.2469 14.5984C25.554 14.2239 24.7834 14.016 23.9963 13.9914C22.317 13.8151 20.6891 14.9962 19.8333 14.9962C18.9611 14.9962 17.6436 14.0089 16.2249 14.0381C15.3072 14.0677 14.4128 14.3346 13.6289 14.8126C12.8451 15.2906 12.1984 15.9636 11.7519 16.7659C9.81789 20.1144 11.2605 25.0354 13.1132 27.742C14.0401 29.0674 15.1233 30.5478 16.5408 30.4953C17.9278 30.4378 18.4458 29.6108 20.1202 29.6108C21.779 29.6108 22.265 30.4953 23.7112 30.4619C25.1995 30.4378 26.1372 29.1307 27.0316 27.7928C27.6976 26.8484 28.2101 25.8047 28.55 24.7003C27.6853 24.3345 26.9474 23.7224 26.4283 22.9401C25.9092 22.1578 25.6318 21.2399 25.6308 20.3011ZM22.8993 12.2113C23.7108 11.2371 24.1106 9.98492 24.0138 8.7207C22.7739 8.85092 21.6287 9.44347 20.8062 10.3803C20.404 10.838 20.096 11.3704 19.8998 11.9472C19.7035 12.5239 19.6229 13.1337 19.6625 13.7417C20.2826 13.7481 20.8961 13.6137 21.4568 13.3486C22.0175 13.0835 22.5107 12.6946 22.8993 12.2113Z' fill='white'/%3e%3c/svg%3e" alt="App Store icon" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=io.blockshake.defly.app"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M12.41 9.7719C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922V10.8671V29.1294V29.0091C11.9683 29.5202 12.1099 29.9149 12.3497 30.169L12.4109 30.2277V30.228C12.6051 30.4035 12.854 30.4966 13.1393 30.4963C13.418 30.4963 13.7316 30.4073 14.0626 30.2194L26.0264 23.4107L30.1359 21.0717C30.6578 20.7748 30.9508 20.3917 30.9998 20.0014V19.9998C30.9508 19.6087 30.6578 19.2259 30.1359 18.9289L26.0261 16.5902L14.0627 9.78154C13.731 9.59325 13.4171 9.50391 13.1376 9.50391C12.8527 9.50391 12.6041 9.59677 12.41 9.7719H12.41Z' fill='%2300C1FF'/%3e%3cpath d='M12.411 30.2285L12.3497 30.1698C12.1099 29.9157 11.9683 29.5209 11.9683 29.0098V29.1301V10.8724V10.993C11.9683 10.4396 12.1334 10.0226 12.41 9.77268L22.622 20.0009L12.411 30.2285Z' fill='url(%23paint0_linear_173_14441)'/%3e%3cpath d='M26.0256 23.4102L22.6211 19.9996L26.0253 16.5896L30.1351 18.9283C30.657 19.2253 30.95 19.6081 30.9989 19.9993V20.0008C30.95 20.3911 30.657 20.7742 30.1351 21.0712L26.0256 23.4101' fill='url(%23paint1_linear_173_14441)'/%3e%3cpath d='M13.1374 30.4961C12.8522 30.4964 12.6033 30.4032 12.4092 30.2277V30.2275L22.6202 19.9999L26.0246 23.4104L14.0608 30.2191C13.7298 30.4071 13.4162 30.4961 13.1374 30.4961Z' fill='url(%23paint2_linear_173_14441)'/%3e%3cpath d='M22.6212 20.002L12.4092 9.7737C12.6033 9.59858 12.8519 9.50571 13.1368 9.50571C13.4163 9.50571 13.7302 9.59501 14.0618 9.78335L26.0253 16.592L22.6212 20.002' fill='url(%23paint3_linear_173_14441)'/%3e%3cpath d='M13.1394 30.6172C12.8542 30.6172 12.6049 30.524 12.4108 30.3486L12.4105 30.3489C12.4097 30.3481 12.4088 30.3473 12.4079 30.3466L12.3548 30.2947C12.3531 30.2931 12.3516 30.2912 12.3496 30.2893L12.4108 30.2279C12.6049 30.4034 12.8538 30.4966 13.1392 30.4962C13.4179 30.4962 13.7315 30.4073 14.0625 30.2193L26.0263 23.4106L26.1029 23.4874L26.0253 23.5316L14.0625 30.3398C13.7608 30.5111 13.4739 30.6004 13.2147 30.6153C13.1896 30.6165 13.1645 30.6171 13.1394 30.6172' fill='url(%23paint4_linear_173_14441)'/%3e%3cpath d='M12.3497 30.2891C12.1099 30.0349 11.9683 29.6406 11.9683 29.1292V29.0089C11.9683 29.52 12.1099 29.9146 12.3497 30.1688L12.4109 30.2275L12.3497 30.2891Z' fill='url(%23paint5_linear_173_14441)'/%3e%3cpath d='M26.1025 23.4882L26.0259 23.4114L30.1349 21.0727C30.6568 20.7758 30.9498 20.3927 30.9987 20.0025C30.9987 20.1457 30.9668 20.2889 30.9035 20.4282C30.7756 20.7091 30.5194 20.9744 30.135 21.1934L26.1025 23.4883' fill='url(%23paint6_linear_173_14441)'/%3e%3cpath d='M30.9991 20C30.9501 19.6089 30.6571 19.2261 30.1353 18.9291L26.0259 16.5907L26.1025 16.5139H26.1029L30.1353 18.8088C30.7106 19.1365 30.9987 19.5682 30.9991 20Z' fill='url(%23paint7_linear_173_14441)'/%3e%3cpath d='M11.9683 10.9922V10.8661C11.9683 10.8206 11.9695 10.7761 11.9718 10.7329V10.7309C11.9718 10.7303 11.9718 10.7297 11.972 10.729V10.7242C11.9969 10.284 12.1334 9.94066 12.3497 9.71139L12.4099 9.77198C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922Z' fill='url(%23paint8_linear_173_14441)'/%3e%3cpath d='M26.026 16.5898L14.0625 9.78115C13.7308 9.59285 13.417 9.50355 13.1375 9.50355C12.8525 9.50355 12.6039 9.59642 12.4099 9.77154L12.3496 9.71091C12.3684 9.69096 12.388 9.67172 12.4082 9.65322C12.4089 9.65255 12.4099 9.65188 12.4105 9.65125C12.6031 9.47747 12.849 9.3846 13.1314 9.38293H13.1375C13.417 9.38293 13.7308 9.47227 14.0625 9.66064L26.1029 16.5128L26.1026 16.513L26.026 16.5898Z' fill='url(%23paint9_linear_173_14441)'/%3e%3cdefs%3e%3clinearGradient id='paint0_linear_173_14441' x1='18.4943' y1='10.6794' x2='9.69389' y2='19.494' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2300A0FF'/%3e%3cstop offset='0.00657' stop-color='%2300A1FF'/%3e%3cstop offset='0.2601' stop-color='%2300BEFF'/%3e%3cstop offset='0.5122' stop-color='%2300D2FF'/%3e%3cstop offset='0.7604' stop-color='%2300DFFF'/%3e%3cstop offset='1' stop-color='%2300E3FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_173_14441' x1='31.6348' y1='19.9407' x2='11.691' y2='19.9407' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE000'/%3e%3cstop offset='0.4087' stop-color='%23FFBD00'/%3e%3cstop offset='0.7754' stop-color='orange'/%3e%3cstop offset='1' stop-color='%23FF9C00'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_173_14441' x1='24.2172' y1='23.2425' x2='9.30414' y2='38.0705' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF3A44'/%3e%3cstop offset='1' stop-color='%23C31162'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_173_14441' x1='9.77725' y1='8.25731' x2='16.4237' y2='14.876' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2332A071'/%3e%3cstop offset='0.0685' stop-color='%232DA771'/%3e%3cstop offset='0.4762' stop-color='%2315CF74'/%3e%3cstop offset='0.8009' stop-color='%2306E775'/%3e%3cstop offset='1' stop-color='%2300F076'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear_173_14441' x1='24.2114' y1='25.6084' x2='12.2683' y2='37.5709' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23CC2E36'/%3e%3cstop offset='1' stop-color='%239C0E4E'/%3e%3c/linearGradient%3e%3clinearGradient id='paint5_linear_173_14441' x1='13.3285' y1='10.6804' x2='5.57625' y2='18.4453' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23008DE0'/%3e%3cstop offset='0.00657' stop-color='%23008DE0'/%3e%3cstop offset='0.2601' stop-color='%2300A7E0'/%3e%3cstop offset='0.5122' stop-color='%2300B8E0'/%3e%3cstop offset='0.7604' stop-color='%2300C4E0'/%3e%3cstop offset='1' stop-color='%2300C7E0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint6_linear_173_14441' x1='31.6346' y1='20.0018' x2='11.6929' y2='20.0018' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23E0C500'/%3e%3cstop offset='0.4087' stop-color='%23E0A600'/%3e%3cstop offset='0.7754' stop-color='%23E09100'/%3e%3cstop offset='1' stop-color='%23E08900'/%3e%3c/linearGradient%3e%3clinearGradient id='paint7_linear_173_14441' x1='31.6349' y1='20.0008' x2='11.6933' y2='20.0008' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE840'/%3e%3cstop offset='0.4087' stop-color='%23FFCE40'/%3e%3cstop offset='0.7754' stop-color='%23FFBC40'/%3e%3cstop offset='1' stop-color='%23FFB540'/%3e%3c/linearGradient%3e%3clinearGradient id='paint8_linear_173_14441' x1='13.3201' y1='10.6927' x2='5.8533' y2='17.8475' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2340B8FF'/%3e%3cstop offset='0.00657' stop-color='%2340B9FF'/%3e%3cstop offset='0.2601' stop-color='%2340CEFF'/%3e%3cstop offset='0.5122' stop-color='%2340DDFF'/%3e%3cstop offset='0.7604' stop-color='%2340E7FF'/%3e%3cstop offset='1' stop-color='%2340EAFF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint9_linear_173_14441' x1='9.76302' y1='10.4182' x2='15.0961' y2='15.76' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2365B895'/%3e%3cstop offset='0.0685' stop-color='%2362BD95'/%3e%3cstop offset='0.4762' stop-color='%2350DB97'/%3e%3cstop offset='0.8009' stop-color='%2344ED98'/%3e%3cstop offset='1' stop-color='%2340F498'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="Play Store icon" />
            </a>

          </div>
        </div>
      </div>
    </div>
  `;
  class b extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" }), this.shadowRoot && (this.shadowRoot.append(_.content.cloneNode(true), k, v), this.shadowRoot.addEventListener("click", (n2) => {
        this.handleAccordion(n2);
      }));
    }
    connectedCallback() {
      this.handleChangeView();
    }
    handleChangeView() {
      var n2, e3, t2;
      const o2 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("defly-wallet-connect-modal-desktop-mode-download-defly-button"), l2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.getElementById("defly-wallet-connect-modal-download-defly-view-back-button"), a2 = null === (t2 = this.shadowRoot) || void 0 === t2 ? void 0 : t2.querySelectorAll(".f_copy-button");
      o2 && o2.addEventListener("click", () => {
        this.onClickDownload();
      }), l2 && l2.addEventListener("click", () => {
        this.onClickBack();
      }), a2 && a2.length && a2.forEach((n3) => {
        n3.addEventListener("click", () => {
          this.onClickCopy();
        });
      }), this.renderQRCode();
    }
    handleAccordion(n2) {
      var e3, t2;
      if (n2.target instanceof Element) {
        if (!n2.target.classList.contains("defly-wallet-accordion-toggle__button"))
          return;
        if (this.shadowRoot && (null === (e3 = n2.target.parentElement) || void 0 === e3 ? void 0 : e3.parentElement)) {
          const e4 = null === (t2 = n2.target.parentElement) || void 0 === t2 ? void 0 : t2.parentElement;
          if (!e4)
            return;
          if (e4.classList.contains("defly-wallet-accordion-item--active"))
            return;
          const o2 = this.shadowRoot.querySelectorAll(".defly-wallet-accordion-item.defly-wallet-accordion-item--active");
          for (let n3 = 0; n3 < o2.length; n3++)
            o2[n3].classList.remove("defly-wallet-accordion-item--active");
          e4.classList.toggle("defly-wallet-accordion-item--active");
        }
      }
    }
    renderQRCode() {
      var n2;
      const e3 = this.getAttribute("uri");
      if (e3) {
        const t2 = new l.default({ width: 330, height: 330, type: "svg", data: e3, image: f, dotsOptions: { color: "#000", type: "dots" }, imageOptions: { imageSize: 0.21, crossOrigin: "anonymous" }, cornersSquareOptions: { type: "extra-rounded" }, cornersDotOptions: { type: "dot" } }), o2 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("defly-wallet-connect-modal-connect-qr-code");
        o2 && t2.append(o2);
      }
    }
    onClickDownload() {
      if (this.shadowRoot) {
        const n2 = this.shadowRoot.getElementById("defly-wallet-connect-modal-desktop-mode");
        n2 && (n2.classList.remove("defly-wallet-connect-modal-desktop-mode--default"), n2.classList.add("defly-wallet-connect-modal-desktop-mode--download"));
      }
    }
    onClickCopy() {
      if (this.shadowRoot) {
        const n2 = this.getAttribute("uri");
        if (n2) {
          const e3 = document.createElement("textarea");
          e3.style.position = "fixed", e3.style.left = "0", e3.style.top = "0", e3.style.opacity = "0", e3.value = n2, document.body.appendChild(e3), e3.focus(), e3.select(), document.execCommand("copy"), document.body.removeChild(e3);
        }
      }
    }
    onClickBack() {
      if (this.shadowRoot) {
        const n2 = this.shadowRoot.getElementById("defly-wallet-connect-modal-desktop-mode");
        n2 && (n2.classList.add("defly-wallet-connect-modal-desktop-mode--default"), n2.classList.remove("defly-wallet-connect-modal-desktop-mode--download"));
      }
    }
  }
  function E(e3 = true) {
    let t2 = x;
    const o2 = n.detectBrowser();
    return e3 && o2 && (t2 = `${t2}?browser=${encodeURIComponent(o2)}`), t2;
  }
  var C = ".defly-wallet-connect-modal-touch-screen-mode {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 46px;\n  padding: 4px;\n}\n\n.defly-wallet-connect-modal-touch-screen-mode--pending-message-view {\n  gap: 56px;\n  grid-template-rows: auto 48px;\n  height: 100%;\n  padding-bottom: 70px;\n}\n\n.defly-wallet-connect-modal-touch-screen-mode__launch-defly-wallet-button,\n.defly-wallet-connect-modal-touch-screen-mode__install-defly-wallet-button {\n  display: block;\n  padding: 14px;\n  border-radius: 12px;\n  text-decoration: none;\n  text-align: center;\n  font-size: 15px;\n  line-height: 26px;\n  letter-spacing: -0.09px;\n  font-weight: 500;\n  margin: 0 40px;\n}\n\n.defly-wallet-connect-modal-touch-screen-mode__launch-defly-wallet-button {\n  margin-bottom: 45px;\n  background: linear-gradient(90deg, #3E38B9, #413AAA);\n  color: #ffffff;\n}\n\n.defly-wallet-connect-modal-touch-screen-mode__install-defly-wallet-button {\n  margin-bottom: 20px;\n  background-color: #494949;\n  color: #ffffff;\n}\n\n.defly-wallet-connect-modal-touch-screen-mode__new-to-defly-box {\n  position: relative;\n  margin-bottom: 5px;\n}\n\n.defly-wallet-connect-modal-touch-screen-mode__new-to-defly-box__text {\n  color: #999999;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.04px;\n  text-align: center;\n}\n.defly-wallet-connect-modal-touch-screen-mode__new-to-defly-box__text a {\n  color: inherit;\n}";
  i(C);
  const L = document.createElement("template");
  class D extends HTMLElement {
    constructor() {
      var e3;
      if (super(), this.attachShadow({ mode: "open" }), L.innerHTML = '\n  <div class="defly-wallet-connect-modal-touch-screen-mode">\n    <defly-wallet-connect-modal-information-section></defly-wallet-connect-modal-information-section>\n\n    <div>\n      <a\n        id="defly-wallet-connect-modal-touch-screen-mode-launch-defly-wallet-button"\n        class="defly-wallet-connect-modal-touch-screen-mode__launch-defly-wallet-button"\n        rel="noopener noreferrer"\n        target="_blank">\n        Launch Defly Wallet\n      </a>\n\n      <div\n        class="defly-wallet-connect-modal-touch-screen-mode__new-to-defly-box">\n        <p class="defly-wallet-connect-modal-touch-screen-mode__new-to-defly-box__text">\n          New to <a href="https://defly.app/">Defly Wallet</a>?\n        </p>\n      </div>\n\n      <a\n        href="https://defly.app/download.html"\n        class="defly-wallet-connect-modal-touch-screen-mode__install-defly-wallet-button"\n        rel="noopener noreferrer"\n        target="_blank">\n        Install Defly Wallet\n      </a>\n    </div>\n  </div>\n', this.shadowRoot) {
        const t2 = document.createElement("style");
        t2.textContent = C, this.shadowRoot.append(L.content.cloneNode(true), t2);
        const o2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.getElementById("defly-wallet-connect-modal-touch-screen-mode-launch-defly-wallet-button"), l2 = this.getAttribute("uri");
        o2 && l2 && (o2.setAttribute("href", function(e4) {
          let t3 = E(false);
          n.isIOS() && !t3.includes("-wc") && (t3 = t3.replace("://", "-wc://"));
          let o3 = `${t3}wc?uri=${encodeURIComponent(e4)}`;
          const l3 = n.detectBrowser();
          return n.isAndroid() && (o3 = e4), l3 && (o3 = `${o3}&browser=${encodeURIComponent(l3)}`), o3;
        }(l2)), o2.addEventListener("click", () => {
          this.onClickLaunch();
        }));
      }
    }
    onClickLaunch() {
      if (L.innerHTML = `
    <div class="defly-wallet-connect-modal-touch-screen-mode defly-wallet-connect-modal-touch-screen-mode--pending-message-view">
      <defly-wallet-connect-modal-pending-message-section should-use-sound="${this.getAttribute("should-use-sound")}"></defly-wallet-connect-modal-pending-message-section>
    </div>
  `, this.shadowRoot) {
        const n2 = document.createElement("style");
        n2.textContent = C, this.shadowRoot.innerHTML = "", this.shadowRoot.append(L.content.cloneNode(true), n2);
      }
    }
  }
  var A = '@import url("https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;600&display=swap");\n@import url("https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;900&display=swap");\n.defly-wallet-modal {\n  --defly-wallet-modal-font-family: "Spline Sans", sans-serif;\n  --defly-wallet-connect-modal-headline-family: "Hanken Grotesk", sans-serif;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 999999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.defly-wallet-modal--select-account .defly-wallet-modal__body {\n  width: 480px;\n  height: 578px;\n}\n.defly-wallet-modal--mobile .defly-wallet-modal__body {\n  top: 40px;\n  bottom: 0;\n  left: 20px;\n  width: calc(100% - 40px);\n  max-width: unset;\n  height: calc(100 * var(--vh));\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);\n  border-radius: 20px 20px 0px 0px;\n  animation: 0.3s DeflyWalletConnectMobileSlideIn ease-out;\n  overflow-y: auto;\n  transform: unset;\n}\n.defly-wallet-modal--mobile .defly-wallet-modal__body::before {\n  background-image: unset;\n}\n.defly-wallet-modal * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: var(--defly-wallet-modal-font-family);\n  font-smooth: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.defly-wallet-modal ul,\n.defly-wallet-modal ol,\n.defly-wallet-modal li {\n  list-style-type: none;\n}\n\n.defly-wallet-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 48px;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--defly-wallet-modal-font-family);\n  font-size: 14px;\n}\n\n.defly-wallet-modal__logo img {\n  display: block;\n  width: 32px;\n}\n\n.defly-wallet-modal__body {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 979px;\n  max-width: calc(100vw - 80px);\n  padding: 28px;\n  background-color: #131313;\n  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);\n  border-radius: 40px;\n  animation: 0.3s DeflyWalletConnectSlideIn ease-out;\n  transform: translate(-50%, -50%);\n}\n\n@media (max-width: 935px) {\n  .defly-wallet-modal--desktop .defly-wallet-modal__body {\n    width: 100%;\n    max-width: calc(100vw - 32px);\n    padding: 24px;\n  }\n}\n@keyframes DeflyWalletConnectSlideIn {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, calc(-50% + 24px));\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes DeflyWalletConnectMobileSlideIn {\n  0% {\n    top: 30%;\n    opacity: 0;\n  }\n  100% {\n    top: 40px;\n    opacity: 1;\n  }\n}';
  i(A);
  const S = document.createElement("template"), M = n.isMobile() ? `${n.DEFLY_WALLET_MODAL_CLASSNAME} ${n.DEFLY_WALLET_MODAL_CLASSNAME}--mobile` : `${n.DEFLY_WALLET_MODAL_CLASSNAME} ${n.DEFLY_WALLET_MODAL_CLASSNAME}--desktop`;
  class B extends HTMLElement {
    constructor() {
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const e3 = document.createElement("style");
        e3.textContent = A, n.isMobile() ? (S.innerHTML = `
        <div class="${M}">
          <div class="defly-wallet-modal__body" part="body">
            <defly-wallet-modal-header modal-id="${n.DEFLY_WALLET_CONNECT_MODAL_ID}"></defly-wallet-modal-header/>
      
            <defly-wallet-modal-touch-screen-mode uri="${this.getAttribute("uri")}" should-use-sound="${this.getAttribute("should-use-sound")}"></defly-wallet-modal-touch-screen-mode>
          </div>
        </div>
      `, this.shadowRoot.append(S.content.cloneNode(true), e3)) : (S.innerHTML = `
          <div class="${M}">
            <div class="defly-wallet-modal__body">
              <defly-wallet-modal-header modal-id="${n.DEFLY_WALLET_CONNECT_MODAL_ID}"></defly-wallet-modal-header/>
        
              <defly-wallet-modal-desktop-mode id="defly-wallet-modal-desktop-mode" uri="${this.getAttribute("uri")}">
              </defly-wallet-modal-desktop-mode>
            </div>
          </div>
        `, this.shadowRoot.append(S.content.cloneNode(true), e3));
      }
    }
  }
  var F = '@import url("https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;600&display=swap");\n@import url("https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;900&display=swap");\n.defly-wallet-modal {\n  --defly-wallet-modal-font-family: "Spline Sans", sans-serif;\n  --defly-wallet-connect-modal-headline-family: "Hanken Grotesk", sans-serif;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 999999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.defly-wallet-modal--select-account .defly-wallet-modal__body {\n  width: 480px;\n  height: 578px;\n}\n.defly-wallet-modal--mobile .defly-wallet-modal__body {\n  top: 40px;\n  bottom: 0;\n  left: 20px;\n  width: calc(100% - 40px);\n  max-width: unset;\n  height: calc(100 * var(--vh));\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);\n  border-radius: 20px 20px 0px 0px;\n  animation: 0.3s DeflyWalletConnectMobileSlideIn ease-out;\n  overflow-y: auto;\n  transform: unset;\n}\n.defly-wallet-modal--mobile .defly-wallet-modal__body::before {\n  background-image: unset;\n}\n.defly-wallet-modal * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: var(--defly-wallet-modal-font-family);\n  font-smooth: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.defly-wallet-modal ul,\n.defly-wallet-modal ol,\n.defly-wallet-modal li {\n  list-style-type: none;\n}\n\n.defly-wallet-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 48px;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--defly-wallet-modal-font-family);\n  font-size: 14px;\n}\n\n.defly-wallet-modal__logo img {\n  display: block;\n  width: 32px;\n}\n\n.defly-wallet-modal__body {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 979px;\n  max-width: calc(100vw - 80px);\n  padding: 28px;\n  background-color: #131313;\n  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);\n  border-radius: 40px;\n  animation: 0.3s DeflyWalletConnectSlideIn ease-out;\n  transform: translate(-50%, -50%);\n}\n\n@media (max-width: 935px) {\n  .defly-wallet-modal--desktop .defly-wallet-modal__body {\n    width: 100%;\n    max-width: calc(100vw - 32px);\n    padding: 24px;\n  }\n}\n@keyframes DeflyWalletConnectSlideIn {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, calc(-50% + 24px));\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes DeflyWalletConnectMobileSlideIn {\n  0% {\n    top: 30%;\n    opacity: 0;\n  }\n  100% {\n    top: 40px;\n    opacity: 1;\n  }\n}\n.defly-wallet-redirect-modal {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 56px;\n  grid-template-rows: auto 48px;\n  height: 100%;\n  padding: 4px;\n  padding-bottom: 70px;\n}\n\n.defly-wallet-redirect-modal__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.defly-wallet-redirect-modal__content__title {\n  margin: 20px 0 8px;\n  color: #3c3c49;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: -0.26px;\n}\n\n.defly-wallet-redirect-modal__content__description,\n.defly-wallet-redirect-modal__content__install-defly-text {\n  color: #3c3c49;\n  max-width: 271px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: -0.09px;\n  text-align: center;\n}\n\n.defly-wallet-redirect-modal__content__description {\n  margin-bottom: 24px;\n}\n\n.defly-wallet-redirect-modal__content__install-defly-text__link {\n  color: #6b46fe;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: -0.09px;\n  text-align: center;\n}\n\n.defly-wallet-redirect-modal__launch-defly-wallet-button {\n  display: block;\n  padding: 14px;\n  color: #ffffff;\n  background-color: #6b46fe;\n  border-radius: 12px;\n  text-decoration: none;\n  text-align: center;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.09px;\n  font-weight: 500;\n}';
  i(F);
  const R = document.createElement("template");
  R.innerHTML = `
  <div class="defly-wallet-modal defly-wallet-modal--mobile">
    <div class="defly-wallet-modal__body">
    <defly-wallet-modal-header modal-id="${n.DEFLY_WALLET_REDIRECT_MODAL_ID}"></pera-wallet-modal-header/>
      <div class="defly-wallet-redirect-modal">
        <div class="defly-wallet-redirect-modal__content">
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='120' height='38' viewBox='0 0 120 38'%3e %3cdefs%3e %3cclipPath id='a'%3e %3crect width='120' height='38' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3cg transform='translate(18090 -8428)'%3e %3cg transform='translate(-18090 8428)' clip-path='url(%23a)'%3e %3crect width='36' height='36' rx='7.768' transform='translate(0 1)' fill='%23222222'/%3e %3cpath d='M112.25%2c37h-11.5A5.976%2c5.976%2c0%2c0%2c1%2c95%2c30.818V9.182A5.976%2c5.976%2c0%2c0%2c1%2c100.75%2c3h11.5A5.976%2c5.976%2c0%2c0%2c1%2c118%2c9.182V30.818A5.976%2c5.976%2c0%2c0%2c1%2c112.25%2c37Z' transform='translate(0 -1)' fill='rgba(107%2c70%2c254%2c0.1)'/%3e %3cpath d='M112.25%2c38.5h-11.5a7.484%2c7.484%2c0%2c0%2c1-7.25-7.682V9.182A7.484%2c7.484%2c0%2c0%2c1%2c100.75%2c1.5h11.5a7.484%2c7.484%2c0%2c0%2c1%2c7.25%2c7.682V30.818A7.484%2c7.484%2c0%2c0%2c1%2c112.25%2c38.5Zm-11.5-34A4.487%2c4.487%2c0%2c0%2c0%2c96.5%2c9.182V30.818a4.487%2c4.487%2c0%2c0%2c0%2c4.25%2c4.682h11.5a4.487%2c4.487%2c0%2c0%2c0%2c4.25-4.682V9.182A4.487%2c4.487%2c0%2c0%2c0%2c112.25%2c4.5Z' transform='translate(0 -1)' fill='white'/%3e %3cpath d='M78.927%2c16.594H52v-3H71.683l-2.534-2.534L71.27%2c8.939Z' fill='white'/%3e %3cpath d='M59.73%2c30.655%2c52.073%2c23H79v3H59.317l2.534%2c2.534Z' fill='white'/%3e %3cpath d='M109.565%2c30.175h-5.826a1.5%2c1.5%2c0%2c1%2c1%2c0-3h5.826a1.5%2c1.5%2c0%2c0%2c1%2c0%2c3Z' fill='white'/%3e %3c/g%3e %3cg transform='translate(-18227.544 8408.866)'%3e %3cpath d='M168.632%2c47.566%2c155.742%2c26l-12.89%2c21.566%2c12.89-7.354Z' transform='translate(0)' fill='white'/%3e %3cpath d='M191.634%2c257.081l-10.639-5.607-10.639%2c5.607%2c10.639-3.464Z' transform='translate(-25.252 -207.321)' fill='white'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e" />

          <h1 class="defly-wallet-redirect-modal__content__title">
            Can't Launch Defly
          </h1>

          <p class="defly-wallet-redirect-modal__content__description">
            We couldn't redirect you to Defly Wallet automatically. Please try again.
          </p>

          <p class="defly-wallet-redirect-modal__content__install-defly-text">
            Don't have Defly Wallet installed yet?
            <br />
            
            <a
              id="defly-wallet-redirect-modal-download-defly-link"
              class="defly-wallet-redirect-modal__content__install-defly-text__link"
              href="https://defly.app/ "
              rel="noopener noreferrer"
              target="_blank">
              Tap here to install.
            </a>
          </p>
        </div>

        <a
          id="defly-wallet-redirect-modal-launch-defly-link"
          class="defly-wallet-redirect-modal__launch-defly-wallet-button"
          rel="noopener noreferrer"
          target="_blank">
          Launch Defly Wallet
        </a>
      </div>
    </div>
  </div>
`;
  class T extends HTMLElement {
    constructor() {
      var n2, e3;
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const t2 = document.createElement("style");
        t2.textContent = F, this.shadowRoot.append(R.content.cloneNode(true), t2);
        const o2 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("defly-wallet-redirect-modal-download-defly-link");
        null == o2 || o2.addEventListener("click", () => {
          this.onClose();
        });
        const l2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.getElementById("defly-wallet-redirect-modal-launch-defly-link");
        null == l2 || l2.addEventListener("click", () => {
          this.onClose(), window.open(E(), "_blank");
        });
      }
    }
    connectedCallback() {
      const n2 = window.open(E(), "_blank");
      n2 && !n2.closed && this.onClose();
    }
    onClose() {
      n.removeModalWrapperFromDOM(n.DEFLY_WALLET_REDIRECT_MODAL_ID);
    }
  }
  var I = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101.962' height='90.114' viewBox='0 0 101.962 90.114'%3e %3cg transform='translate(0.004)'%3e %3cpath d='M244.81%2c107.44%2c193.834%2c26l-50.986%2c81.44%2c50.986-27.77Z' transform='translate(-142.852 -26)' fill='white'/%3e %3cpath d='M254.505%2c273.648l-42.072-22.175-42.076%2c22.175%2c42.076-13.7Z' transform='translate(-161.446 -183.534)' fill='white'/%3e %3c/g%3e%3c/svg%3e", z = ".defly-wallet-connect-modal-information-section {\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  flex-flow: column;\n  justify-content: center;\n}\n.defly-wallet-connect-modal-information-section--mobile {\n  padding: 0;\n  margin-top: 20px;\n}\n.defly-wallet-connect-modal-information-section--mobile .defly-wallet-connect-modal-information-section__defly-icon {\n  margin-bottom: 21px;\n  max-width: 70px;\n}\n.defly-wallet-connect-modal-information-section--mobile .defly-wallet-connect-modal-information-section__title {\n  font-size: 34px;\n  line-height: 32px;\n}\n\n.defly-wallet-connect-modal-information-section__defly-icon {\n  margin-bottom: 32px;\n}\n\n.defly-wallet-connect-modal-information-section__title {\n  margin-top: 0;\n  margin-bottom: 0;\n  color: #fff;\n  font-size: 52px;\n  line-height: 48px;\n  font-weight: 900;\n  white-space: pre-line;\n  text-align: center;\n  letter-spacing: 0;\n  font-family: var(--defly-wallet-connect-modal-headline-family), sans-serif;\n}\n\n.defly-wallet-connect-modal-information-section__download-defly-button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 20px auto 0;\n  padding: 0;\n  color: #999999;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01px;\n  cursor: pointer;\n}\n.defly-wallet-connect-modal-information-section__download-defly-button:hover {\n  opacity: 0.8;\n}\n\n@media (max-width: 935px) {\n  .defly-wallet-connect-modal-information-section--desktop {\n    padding: 0;\n  }\n  .defly-wallet-connect-modal-information-section--desktop .defly-wallet-connect-modal-information-section__defly-icon {\n    max-width: 70px;\n    margin-bottom: 21px;\n  }\n  .defly-wallet-connect-modal-information-section--desktop .defly-wallet-connect-modal-information-section__title {\n    font-size: 34px;\n    line-height: 32px;\n  }\n  .defly-wallet-connect-modal-information-section__download-defly-button {\n    display: none;\n  }\n}";
  i(z);
  const H = document.createElement("template"), O = n.isMobile() ? "defly-wallet-connect-modal-information-section defly-wallet-connect-modal-information-section--mobile" : "defly-wallet-connect-modal-information-section defly-wallet-connect-modal-information-section--desktop";
  H.innerHTML = `
  <section class="${O}">
    <img src="${I}" class="defly-wallet-connect-modal-information-section__defly-icon" alt="Defly Wallet" />
    <h1 class="defly-wallet-connect-modal-information-section__title">Secure 
 wallet & 
 trading</h1>
 
    <button
        id="defly-wallet-connect-modal-information-section-download-defly-button"
        class="defly-wallet-connect-modal-information-section__download-defly-button">
        <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='2' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%23999999' stroke-width='1.5'/%3e%3crect x='2' y='9.33203' width='4.66667' height='4.66667' rx='1.2' stroke='%23999999' stroke-width='1.5'/%3e%3crect x='9.33325' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%23999999' stroke-width='1.5'/%3e%3cpath d='M8.70581 9.5293H10.9411' stroke='%23999999' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 12.668L14.6667 12.668' stroke='%23999999' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 14L14.6667 14' stroke='%23999999' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M11.686 14L13.1762 14' stroke='%23999999' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M12.4314 9.5293H14.6667' stroke='%23999999' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M8.70581 10.2754H12.4313' stroke='%23999999' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.7656H11.6862' stroke='%23999999' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 12.5117H11.6862' stroke='%23999999' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 13.2539H10.196' stroke='%23999999' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 14H10.196' stroke='%23999999' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.0195H12.4313' stroke='%23999999' stroke-width='1.25' stroke-linejoin='round'/%3e%3c/svg%3e" alt="QR Icon" />
        Download
      </button>
  </section>
`;
  class W extends HTMLElement {
    constructor() {
      var n2;
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const e3 = document.createElement("style");
        e3.textContent = z, this.shadowRoot.append(H.content.cloneNode(true), e3);
        const t2 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("defly-wallet-connect-modal-information-section-download-defly-button");
        t2 && t2.addEventListener("click", () => {
          this.onClickDownload();
        });
      }
    }
    onClickDownload() {
      if (this.shadowRoot) {
        const n2 = this.shadowRoot.host.parentElement;
        n2 && (n2.classList.remove("defly-wallet-connect-modal-desktop-mode--default"), n2.classList.add("defly-wallet-connect-modal-desktop-mode--download"));
      }
    }
  }
  var V = '@import url("https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;600&display=swap");\n@import url("https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;900&display=swap");\n.defly-wallet-modal {\n  --defly-wallet-modal-font-family: "Spline Sans", sans-serif;\n  --defly-wallet-connect-modal-headline-family: "Hanken Grotesk", sans-serif;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 999999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.defly-wallet-modal--select-account .defly-wallet-modal__body {\n  width: 480px;\n  height: 578px;\n}\n.defly-wallet-modal--mobile .defly-wallet-modal__body {\n  top: 40px;\n  bottom: 0;\n  left: 20px;\n  width: calc(100% - 40px);\n  max-width: unset;\n  height: calc(100 * var(--vh));\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);\n  border-radius: 20px 20px 0px 0px;\n  animation: 0.3s DeflyWalletConnectMobileSlideIn ease-out;\n  overflow-y: auto;\n  transform: unset;\n}\n.defly-wallet-modal--mobile .defly-wallet-modal__body::before {\n  background-image: unset;\n}\n.defly-wallet-modal * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: var(--defly-wallet-modal-font-family);\n  font-smooth: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.defly-wallet-modal ul,\n.defly-wallet-modal ol,\n.defly-wallet-modal li {\n  list-style-type: none;\n}\n\n.defly-wallet-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 48px;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--defly-wallet-modal-font-family);\n  font-size: 14px;\n}\n\n.defly-wallet-modal__logo img {\n  display: block;\n  width: 32px;\n}\n\n.defly-wallet-modal__body {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 979px;\n  max-width: calc(100vw - 80px);\n  padding: 28px;\n  background-color: #131313;\n  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);\n  border-radius: 40px;\n  animation: 0.3s DeflyWalletConnectSlideIn ease-out;\n  transform: translate(-50%, -50%);\n}\n\n@media (max-width: 935px) {\n  .defly-wallet-modal--desktop .defly-wallet-modal__body {\n    width: 100%;\n    max-width: calc(100vw - 32px);\n    padding: 24px;\n  }\n}\n@keyframes DeflyWalletConnectSlideIn {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, calc(-50% + 24px));\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes DeflyWalletConnectMobileSlideIn {\n  0% {\n    top: 30%;\n    opacity: 0;\n  }\n  100% {\n    top: 40px;\n    opacity: 1;\n  }\n}\n.defly-wallet-connect-modal-pending-message-section {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 48px;\n  gap: 56px;\n  height: 100%;\n  padding: 4px;\n  padding-bottom: 70px;\n}\n\n.defly-wallet-connect-modal-pending-message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.defly-wallet-connect-modal-pending-message--try-again-view {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 10px;\n}\n.defly-wallet-connect-modal-pending-message--try-again-view__image {\n  margin: 0 auto;\n  display: block;\n}\n.defly-wallet-connect-modal-pending-message--try-again-view__title {\n  margin: 16px 0 12px;\n  color: #ffffff;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.26px;\n}\n.defly-wallet-connect-modal-pending-message--try-again-view__description {\n  color: #999999;\n  font-size: 14px;\n  text-align: center;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: -0.01px;\n}\n.defly-wallet-connect-modal-pending-message--try-again-view__button {\n  display: block;\n  width: 100%;\n  padding: 14px;\n  border-radius: 12px;\n  text-decoration: none;\n  text-align: center;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.09px;\n  font-weight: 500;\n  color: #ffffff;\n  background-color: #6b46fe;\n  border: none;\n}\n.defly-wallet-connect-modal-pending-message--try-again-view__resolving-anchor {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 16px;\n  background: #ffffff;\n  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);\n  border-radius: 12px;\n  text-decoration: none;\n}\n.defly-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image {\n  width: 24px;\n  height: 24px;\n}\n.defly-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n.defly-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: -0.1px;\n  color: #3c3c49;\n}\n.defly-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description {\n  /* stylelint-disable value-no-vendor-prefix */\n  /* stylelint-disable  property-no-vendor-prefix */\n  display: -webkit-box;\n  max-width: 100%;\n  -webkit-line-clamp: 2;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  /* stylelint-enable value-no-vendor-prefix */\n  /* stylelint-enable property-no-vendor-prefix */\n  margin: 0;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0.01px;\n  color: #9d9dae;\n}\n\n.defly-wallet-connect-modal-pending-message__animation-wrapper {\n  width: 56px;\n  height: 56px;\n  background-color: #6b46fe;\n  border-radius: 50%;\n}\n\n.defly-wallet-connect-modal-pending-message__text {\n  max-width: 271px;\n  margin-top: 20px;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 28px;\n  letter-spacing: -0.26px;\n}\n\n.defly-wallet-connect-modal-pending-message__cancel-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 14px;\n  color: #6a6a81;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);\n  border-radius: 12px;\n  text-decoration: none;\n  text-align: center;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.09px;\n  font-weight: 500;\n  border: none;\n}';
  i(V);
  const G = document.createElement("template");
  G.innerHTML = `
  <div class="defly-wallet-connect-modal-pending-message-section">
    <div class="defly-wallet-connect-modal-pending-message">
      <img src="${I}" alt="Defly Wallet Logo" />

      <div class="defly-wallet-connect-modal-pending-message__text">
        Please wait while we connect you to Defly Wallet...
      </div>
    </div>

    <button
      id="defly-wallet-connect-modal-pending-message-cancel-button"
      class="defly-wallet-button defly-wallet-connect-modal-pending-message__cancel-button">
        Cancel
    </button>
  </div>

  <div id="defly-wallet-connect-modal-pending-message-audio-wrapper"></div>
`;
  const Z = `
  <div class="defly-wallet-connect-modal-pending-message--try-again-view">
    <div>
      <img class="defly-wallet-connect-modal-pending-message--try-again-view__image" src="${I}" alt="Defly Wallet" />

      <h1 class="defly-wallet-connect-modal-pending-message--try-again-view__title">
        Couldn’t establish connection
      </h1>

      <p class="defly-wallet-connect-modal-pending-message--try-again-view__description">
        Having issues? Before trying again, make sure to read the support article below and apply the possible solutions.
      </p>
    </div>

    <div>
      <a
        href=" https://docs.defly.app/app/dapp-browser"
        target="_blank"
        rel="noopener noreferrer"
        class="defly-wallet-connect-modal-pending-message--try-again-view__resolving-anchor">
        <img
          class="defly-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image"
          src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 22.3199C7.72 22.3199 7.42998 22.2499 7.16998 22.1099C6.59998 21.8099 6.25 21.2099 6.25 20.5699V19.15C3.23 18.84 1.25 16.6199 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.8799 20.44 19.1899 17 19.1899H13.23L8.96997 22.03C8.67997 22.22 8.34 22.3199 8 22.3199ZM7 3.17993C4.42 3.17993 2.75 4.84993 2.75 7.42993V13.43C2.75 16.01 4.42 17.68 7 17.68C7.41 17.68 7.75 18.02 7.75 18.43V20.56C7.75 20.69 7.83 20.75 7.88 20.78C7.93001 20.81 8.03001 20.84 8.14001 20.77L12.59 17.81C12.71 17.73 12.86 17.68 13.01 17.68H17.01C19.59 17.68 21.26 16.01 21.26 13.43V7.42993C21.26 4.84993 19.59 3.17993 17.01 3.17993H7ZM11.9998 12.11C11.5898 12.11 11.2498 11.77 11.2498 11.36V11.15C11.2498 10.0038 12.0798 9.4336 12.4082 9.20798L12.4198 9.20001C12.7898 8.95001 12.9098 8.78002 12.9098 8.52002C12.9098 8.02002 12.4998 7.60999 11.9998 7.60999C11.4998 7.60999 11.0898 8.02002 11.0898 8.52002C11.0898 8.93002 10.7498 9.27002 10.3398 9.27002C9.92984 9.27002 9.58984 8.93002 9.58984 8.52002C9.58984 7.19002 10.6698 6.10999 11.9998 6.10999C13.3298 6.10999 14.4098 7.19002 14.4098 8.52002C14.4098 9.66002 13.5698 10.23 13.2598 10.44C12.8698 10.7 12.7498 10.87 12.7498 11.15V11.36C12.7498 11.78 12.4098 12.11 11.9998 12.11ZM11.25 13.85C11.25 14.26 11.58 14.6 12 14.6C12.42 14.6 12.75 14.26 12.75 13.85C12.75 13.44 12.41 13.1 12 13.1C11.59 13.1 11.25 13.44 11.25 13.85Z' fill='%236B46FE'/%3e%3c/svg%3e"
          alt="Help Icon"
        />

        <div>
          <div
            class="defly-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper">
            <h1
              class="defly-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title">
                Resolving WalletConnect issues
            </h1>

            <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.3287 10.0983C10.9574 10.0983 10.6564 9.79734 10.6564 9.42604L10.6564 6.29525L5.14866 11.803C4.88611 12.0655 4.46044 12.0655 4.19789 11.803C3.93534 11.5404 3.93534 11.1147 4.19789 10.8522L9.70561 5.34447L6.57482 5.34447C6.20352 5.34447 5.90252 5.04347 5.90252 4.67218C5.90252 4.30088 6.20352 3.99988 6.57482 3.99988L11.3287 3.99988C11.507 3.99988 11.678 4.07071 11.8041 4.19679C11.9301 4.32287 12.001 4.49387 12.001 4.67218L12.001 9.42604C12.001 9.79734 11.7 10.0983 11.3287 10.0983Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Send Icon"/>
          </div>

          <p
            class="defly-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description">
            Unfortunately there are several known issues related to WalletConnect that our team is working on. Some of these issues are related to the WalletConnect JavaScript implementation on the dApp ...
          </p>
        </div>
      </a>

      <button id="defly-wallet-connect-modal-pending-message-try-again-button" class="defly-wallet-connect-button defly-wallet-connect-modal-pending-message--try-again-view__button">
        Close & Try Again
      </button>
    </div>
  </div>
  `;
  class N extends HTMLElement {
    constructor() {
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const n2 = document.createElement("style");
        n2.textContent = V, this.shadowRoot.append(G.content.cloneNode(true), n2);
      }
    }
    connectedCallback() {
      var n2;
      const e3 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("defly-wallet-connect-modal-pending-message-cancel-button");
      null == e3 || e3.addEventListener("click", () => {
        this.onClose();
      }), this.addAudioForConnection(), setTimeout(() => {
        var n3;
        if (G.innerHTML = Z, this.shadowRoot) {
          const e4 = document.createElement("style");
          e4.textContent = V, this.shadowRoot.innerHTML = "", this.shadowRoot.append(G.content.cloneNode(true), e4);
          const t2 = null === (n3 = this.shadowRoot) || void 0 === n3 ? void 0 : n3.getElementById("defly-wallet-connect-modal-pending-message-try-again-button");
          null == t2 || t2.addEventListener("click", () => {
            this.onClose();
          });
        }
      }, 3e4);
    }
    onClose() {
      n.removeModalWrapperFromDOM(n.DEFLY_WALLET_CONNECT_MODAL_ID);
    }
    addAudioForConnection() {
      var e3;
      if ("true" === this.getAttribute("should-use-sound") && n.isIOS()) {
        const n2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.getElementById("defly-wallet-connect-modal-pending-message-audio-wrapper"), t2 = document.createElement("audio");
        t2.src = "https://defly-walletconnect.s3.eu-central-1.amazonaws.com/audio.mp3", t2.autoplay = true, t2.loop = true, null == n2 || n2.appendChild(t2);
      }
    }
  }
  var j = { v: "5.7.1", fr: 25, ip: 0, op: 100, w: 1e3, h: 1e3, nm: "Animation", ddd: 0, assets: [], layers: [{ ddd: 0, ind: 1, ty: 1, nm: "Circle", sr: 1, ks: { o: { a: 0, k: 73, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 18, s: [724, 614, 0], to: [-35, 2.333, 0], ti: [35, -2.333, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 25, s: [514, 628, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 53, s: [514, 628, 0], to: [35, -2.333, 0], ti: [-35, 2.333, 0] }, { t: 62, s: [724, 614, 0] }], ix: 2 }, a: { a: 0, k: [608.861, 710.127, 0], ix: 1 }, s: { a: 0, k: [79, 79, 100], ix: 6 } }, ao: 0, hasMask: true, masksProperties: [{ inv: false, mode: "a", pt: { a: 0, k: { i: [[27.614, 0], [0, -27.614], [-27.614, 0], [0, 27.614]], o: [[-27.614, 0], [0, 27.614], [27.614, 0], [0, -27.614]], v: [[608, 662], [558, 712], [608, 762], [658, 712]], c: true }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 0, k: 0, ix: 4 }, nm: "Mask 1" }], ef: [{ ty: 21, nm: "Fill", np: 9, mn: "ADBE Fill", ix: 1, en: 1, ef: [{ ty: 10, nm: "Fill Mask", mn: "ADBE Fill-0001", ix: 1, v: { a: 0, k: 0, ix: 1 } }, { ty: 7, nm: "All Masks", mn: "ADBE Fill-0007", ix: 2, v: { a: 0, k: 0, ix: 2 } }, { ty: 2, nm: "Color", mn: "ADBE Fill-0002", ix: 3, v: { a: 0, k: [0.748628020287, 0.656362950802, 0.86274510622, 1], ix: 3 } }, { ty: 7, nm: "Invert", mn: "ADBE Fill-0006", ix: 4, v: { a: 0, k: 0, ix: 4 } }, { ty: 0, nm: "Horizontal Feather", mn: "ADBE Fill-0003", ix: 5, v: { a: 0, k: 0, ix: 5 } }, { ty: 0, nm: "Vertical Feather", mn: "ADBE Fill-0004", ix: 6, v: { a: 0, k: 0, ix: 6 } }, { ty: 0, nm: "Opacity", mn: "ADBE Fill-0005", ix: 7, v: { a: 0, k: 1, ix: 7 } }] }], sw: 1e3, sh: 1e3, sc: "#ffffff", ip: 0, op: 754, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 4, nm: "Layer 1 Outlines 2", parent: 9, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [511.524, 444, 0], ix: 2 }, a: { a: 0, k: [157.775, 147.25, 0], ix: 1 }, s: { a: 0, k: [46, 46, 100], ix: 6 } }, ao: 0, ef: [{ ty: 21, nm: "Fill", np: 9, mn: "ADBE Fill", ix: 1, en: 1, ef: [{ ty: 10, nm: "Fill Mask", mn: "ADBE Fill-0001", ix: 1, v: { a: 0, k: 0, ix: 1 } }, { ty: 7, nm: "All Masks", mn: "ADBE Fill-0007", ix: 2, v: { a: 0, k: 0, ix: 2 } }, { ty: 2, nm: "Color", mn: "ADBE Fill-0002", ix: 3, v: { a: 0, k: [0.054901964962, 0.050980396569, 0.06274510175, 1], ix: 3 } }, { ty: 7, nm: "Invert", mn: "ADBE Fill-0006", ix: 4, v: { a: 0, k: 0, ix: 4 } }, { ty: 0, nm: "Horizontal Feather", mn: "ADBE Fill-0003", ix: 5, v: { a: 0, k: 0, ix: 5 } }, { ty: 0, nm: "Vertical Feather", mn: "ADBE Fill-0004", ix: 6, v: { a: 0, k: 0, ix: 6 } }, { ty: 0, nm: "Opacity", mn: "ADBE Fill-0005", ix: 7, v: { a: 0, k: 1, ix: 7 } }] }], shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[157.525, 133.595], [0, -133.596], [-157.525, 133.595], [0, 42.488]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [157.775, 133.846], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }], ip: 0, op: 754, st: 0, bm: 0 }, { ddd: 0, ind: 3, ty: 4, nm: "Layer 1 Outlines", parent: 9, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [511.524, 444, 0], ix: 2 }, a: { a: 0, k: [157.775, 147.25, 0], ix: 1 }, s: { a: 0, k: [46, 46, 100], ix: 6 } }, ao: 0, ef: [{ ty: 21, nm: "Fill", np: 9, mn: "ADBE Fill", ix: 1, en: 1, ef: [{ ty: 10, nm: "Fill Mask", mn: "ADBE Fill-0001", ix: 1, v: { a: 0, k: 0, ix: 1 } }, { ty: 7, nm: "All Masks", mn: "ADBE Fill-0007", ix: 2, v: { a: 0, k: 0, ix: 2 } }, { ty: 2, nm: "Color", mn: "ADBE Fill-0002", ix: 3, v: { a: 0, k: [0.058823533356, 0.054901964962, 0.06274510175, 1], ix: 3 } }, { ty: 7, nm: "Invert", mn: "ADBE Fill-0006", ix: 4, v: { a: 0, k: 0, ix: 4 } }, { ty: 0, nm: "Horizontal Feather", mn: "ADBE Fill-0003", ix: 5, v: { a: 0, k: 0, ix: 5 } }, { ty: 0, nm: "Vertical Feather", mn: "ADBE Fill-0004", ix: 6, v: { a: 0, k: 0, ix: 6 } }, { ty: 0, nm: "Opacity", mn: "ADBE Fill-0005", ix: 7, v: { a: 0, k: 1, ix: 7 } }] }], shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[130.021, 34.263], [0, -34.264], [-130.021, 34.263], [0, -8.067]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [157.775, 259.986], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }], ip: 0, op: 754, st: 0, bm: 0 }, { ddd: 0, ind: 4, ty: 1, nm: "White Solid 2", parent: 9, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [512, 508, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, hasMask: true, masksProperties: [{ inv: false, mode: "a", pt: { a: 0, k: { i: [[11.046, 0], [0, 0], [0, -11.046], [0, 0], [-11.046, 0], [0, 0], [0, 11.046], [0, 0]], o: [[0, 0], [-11.046, 0], [0, 0], [0, 11.046], [0, 0], [11.046, 0], [0, 0], [0, -11.046]], v: [[648, 314], [344, 314], [324, 334], [324, 546], [344, 566], [648, 566], [668, 546], [668, 334]], c: true }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 0, k: 0, ix: 4 }, nm: "Mask 1" }], ef: [{ ty: 22, nm: "Stroke", np: 13, mn: "ADBE Stroke", ix: 1, en: 1, ef: [{ ty: 10, nm: "Path", mn: "ADBE Stroke-0001", ix: 1, v: { a: 0, k: 1, ix: 1 } }, { ty: 7, nm: "All Masks", mn: "ADBE Stroke-0010", ix: 2, v: { a: 0, k: 0, ix: 2 } }, { ty: 7, nm: "Stroke Sequentially", mn: "ADBE Stroke-0011", ix: 3, v: { a: 0, k: 1, ix: 3 } }, { ty: 2, nm: "Color", mn: "ADBE Stroke-0002", ix: 4, v: { a: 0, k: [0.525490224361, 0.231372565031, 0.972549080849, 1], ix: 4 } }, { ty: 0, nm: "Brush Size", mn: "ADBE Stroke-0003", ix: 5, v: { a: 0, k: 2, ix: 5 } }, { ty: 0, nm: "Brush Hardness", mn: "ADBE Stroke-0004", ix: 6, v: { a: 0, k: 0.75, ix: 6 } }, { ty: 0, nm: "Opacity", mn: "ADBE Stroke-0005", ix: 7, v: { a: 0, k: 1, ix: 7 } }, { ty: 0, nm: "Start", mn: "ADBE Stroke-0008", ix: 8, v: { a: 0, k: 0, ix: 8 } }, { ty: 0, nm: "End", mn: "ADBE Stroke-0009", ix: 9, v: { a: 0, k: 100, ix: 9 } }, { ty: 7, nm: "Spacing", mn: "ADBE Stroke-0006", ix: 10, v: { a: 0, k: 15, ix: 10 } }, { ty: 7, nm: "Paint Style", mn: "ADBE Stroke-0007", ix: 11, v: { a: 0, k: 1, ix: 11 } }] }], sw: 1e3, sh: 1e3, sc: "#ffffff", ip: 0, op: 754, st: 0, bm: 0 }, { ddd: 0, ind: 5, ty: 1, nm: "White Solid 2", parent: 9, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [512, 388, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, hasMask: true, masksProperties: [{ inv: false, mode: "a", pt: { a: 0, k: { i: [[11.046, 0], [0, 0], [0, -11.046], [0, 0], [-11.046, 0], [0, 0], [0, 11.046], [0, 0]], o: [[0, 0], [-11.046, 0], [0, 0], [0, 11.046], [0, 0], [11.046, 0], [0, 0], [0, -11.046]], v: [[648, 314], [344, 314], [324, 334], [324, 386], [344, 406], [648, 406], [668, 386], [668, 334]], c: true }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 0, k: 0, ix: 4 }, nm: "Mask 1" }], ef: [{ ty: 22, nm: "Stroke", np: 13, mn: "ADBE Stroke", ix: 1, en: 1, ef: [{ ty: 10, nm: "Path", mn: "ADBE Stroke-0001", ix: 1, v: { a: 0, k: 1, ix: 1 } }, { ty: 7, nm: "All Masks", mn: "ADBE Stroke-0010", ix: 2, v: { a: 0, k: 0, ix: 2 } }, { ty: 7, nm: "Stroke Sequentially", mn: "ADBE Stroke-0011", ix: 3, v: { a: 0, k: 1, ix: 3 } }, { ty: 2, nm: "Color", mn: "ADBE Stroke-0002", ix: 4, v: { a: 0, k: [0.525490224361, 0.231372565031, 0.972549080849, 1], ix: 4 } }, { ty: 0, nm: "Brush Size", mn: "ADBE Stroke-0003", ix: 5, v: { a: 0, k: 2, ix: 5 } }, { ty: 0, nm: "Brush Hardness", mn: "ADBE Stroke-0004", ix: 6, v: { a: 0, k: 0.75, ix: 6 } }, { ty: 0, nm: "Opacity", mn: "ADBE Stroke-0005", ix: 7, v: { a: 0, k: 1, ix: 7 } }, { ty: 0, nm: "Start", mn: "ADBE Stroke-0008", ix: 8, v: { a: 0, k: 0, ix: 8 } }, { ty: 0, nm: "End", mn: "ADBE Stroke-0009", ix: 9, v: { a: 0, k: 100, ix: 9 } }, { ty: 7, nm: "Spacing", mn: "ADBE Stroke-0006", ix: 10, v: { a: 0, k: 15, ix: 10 } }, { ty: 7, nm: "Paint Style", mn: "ADBE Stroke-0007", ix: 11, v: { a: 0, k: 1, ix: 11 } }] }], sw: 1e3, sh: 1e3, sc: "#ffffff", ip: 0, op: 754, st: 0, bm: 0 }, { ddd: 0, ind: 7, ty: 1, nm: "Button", parent: 9, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [510, 736, 0], ix: 2 }, a: { a: 0, k: [497.468, 353.165, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 32, s: [100, 100, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 35, s: [79, 79, 100] }, { t: 43, s: [100, 100, 100] }], ix: 6 } }, ao: 0, hasMask: true, masksProperties: [{ inv: false, mode: "a", pt: { a: 0, k: { i: [[11.046, 0], [0, 0], [0, -11.046], [0, 0], [-11.046, 0], [0, 0], [0, 11.046], [0, 0]], o: [[0, 0], [-11.046, 0], [0, 0], [0, 11.046], [0, 0], [11.046, 0], [0, 0], [0, -11.046]], v: [[648, 314], [344, 314], [324, 334], [324, 386], [344, 406], [648, 406], [668, 386], [668, 334]], c: true }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 0, k: 0, ix: 4 }, nm: "Mask 1" }], ef: [{ ty: 21, nm: "Fill", np: 9, mn: "ADBE Fill", ix: 1, en: 1, ef: [{ ty: 10, nm: "Fill Mask", mn: "ADBE Fill-0001", ix: 1, v: { a: 0, k: 0, ix: 1 } }, { ty: 7, nm: "All Masks", mn: "ADBE Fill-0007", ix: 2, v: { a: 0, k: 0, ix: 2 } }, { ty: 2, nm: "Color", mn: "ADBE Fill-0002", ix: 3, v: { a: 0, k: [0.686274528503, 0.290196090937, 0.937254965305, 1], ix: 3 } }, { ty: 7, nm: "Invert", mn: "ADBE Fill-0006", ix: 4, v: { a: 0, k: 0, ix: 4 } }, { ty: 0, nm: "Horizontal Feather", mn: "ADBE Fill-0003", ix: 5, v: { a: 0, k: 0, ix: 5 } }, { ty: 0, nm: "Vertical Feather", mn: "ADBE Fill-0004", ix: 6, v: { a: 0, k: 0, ix: 6 } }, { ty: 0, nm: "Opacity", mn: "ADBE Fill-0005", ix: 7, v: { a: 0, k: 1, ix: 7 } }] }], sw: 1e3, sh: 1e3, sc: "#ffffff", ip: 0, op: 754, st: 0, bm: 0 }, { ddd: 0, ind: 8, ty: 4, nm: "Shape Layer 1", parent: 9, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [500, 493.102, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, ef: [{ ty: 25, nm: "Drop Shadow", np: 8, mn: "ADBE Drop Shadow", ix: 1, en: 1, ef: [{ ty: 2, nm: "Shadow Color", mn: "ADBE Drop Shadow-0001", ix: 1, v: { a: 0, k: [0, 0, 0, 1], ix: 1 } }, { ty: 0, nm: "Opacity", mn: "ADBE Drop Shadow-0002", ix: 2, v: { a: 0, k: 87.5, ix: 2 } }, { ty: 0, nm: "Direction", mn: "ADBE Drop Shadow-0003", ix: 3, v: { a: 0, k: 173, ix: 3 } }, { ty: 0, nm: "Distance", mn: "ADBE Drop Shadow-0004", ix: 4, v: { a: 0, k: 8, ix: 4 } }, { ty: 0, nm: "Softness", mn: "ADBE Drop Shadow-0005", ix: 5, v: { a: 0, k: 125, ix: 5 } }, { ty: 7, nm: "Shadow Only", mn: "ADBE Drop Shadow-0006", ix: 6, v: { a: 0, k: 0, ix: 6 } }] }], shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [452, 730], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 20, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: false }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 0, ix: 5 }, lc: 1, lj: 1, ml: 4, bm: 0, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: false }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [6, -7], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }], ip: 0, op: 754, st: 0, bm: 0 }, { ddd: 0, ind: 9, ty: 1, nm: "White Solid 1", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 1, s: [500, 562, 0], to: [0, -23.333, 0], ti: [0, 23.333, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 13, s: [500, 422, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 65, s: [500, 422, 0], to: [0, 23.333, 0], ti: [0, -23.333, 0] }, { t: 79, s: [500, 562, 0] }], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, hasMask: true, masksProperties: [{ inv: false, mode: "a", pt: { a: 0, k: { i: [[11.046, 0], [0, 0], [0, -11.046], [0, 0], [-11.046, 0], [0, 0], [0, 11.046], [0, 0]], o: [[0, 0], [-11.046, 0], [0, 0], [0, 11.046], [0, 0], [11.046, 0], [0, 0], [0, -11.046]], v: [[712, 122], [302, 122], [282, 142], [282, 830], [302, 850], [712, 850], [732, 830], [732, 142]], c: true }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 0, k: 0, ix: 4 }, nm: "Mask 1" }], ef: [{ ty: 25, nm: "Drop Shadow", np: 8, mn: "ADBE Drop Shadow", ix: 1, en: 1, ef: [{ ty: 2, nm: "Shadow Color", mn: "ADBE Drop Shadow-0001", ix: 1, v: { a: 0, k: [0, 0, 0, 1], ix: 1 } }, { ty: 0, nm: "Opacity", mn: "ADBE Drop Shadow-0002", ix: 2, v: { a: 0, k: 87.5, ix: 2 } }, { ty: 0, nm: "Direction", mn: "ADBE Drop Shadow-0003", ix: 3, v: { a: 0, k: 173, ix: 3 } }, { ty: 0, nm: "Distance", mn: "ADBE Drop Shadow-0004", ix: 4, v: { a: 0, k: 8, ix: 4 } }, { ty: 0, nm: "Softness", mn: "ADBE Drop Shadow-0005", ix: 5, v: { a: 0, k: 125, ix: 5 } }, { ty: 7, nm: "Shadow Only", mn: "ADBE Drop Shadow-0006", ix: 6, v: { a: 0, k: 0, ix: 6 } }] }], sw: 1e3, sh: 1e3, sc: "#ffffff", ip: 0, op: 754, st: 0, bm: 0 }], markers: [] }, q = '.defly-wallet-sign-txn-toast {\n  --defly-wallet-sign-txn-toast-width: 422px;\n  --defly-wallet-sign-txn-toast-height: 134px;\n  --defly-wallet-sign-txn-toast-font-family: "Inter", sans-serif;\n  position: fixed;\n  bottom: 28px;\n  right: 35px;\n  z-index: 11;\n  overflow: hidden;\n  width: var(--defly-wallet-sign-txn-toast-width);\n  height: var(--defly-wallet-sign-txn-toast-height);\n  background: #edeffb;\n  border-radius: 8px;\n  animation: 0.2s DeflyWalletSignTxnToastSlideIn ease-out;\n}\n.defly-wallet-sign-txn-toast * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: var(--defly-wallet-sign-txn-toast-font-family);\n  font-smooth: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.defly-wallet-sign-txn-toast ul,\n.defly-wallet-sign-txn-toast ol,\n.defly-wallet-sign-txn-toast li {\n  list-style-type: none;\n}\n\n.defly-wallet-sign-txn-toast__header__close-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n.defly-wallet-sign-txn-toast__content__lottie-animation {\n  position: absolute;\n  top: -75px;\n  left: -100px;\n  width: 368px;\n  height: 368px;\n}\n\n.defly-wallet-sign-txn-toast__content__description {\n  position: absolute;\n  top: 40px;\n  right: 48px;\n  max-width: 197px;\n  color: #3c3c49;\n  font-size: 14px;\n  line-height: 22px;\n  letter-spacing: -0.1px;\n}\n\n@media (max-width: 935px) {\n  .defly-wallet-sign-txn-toast {\n    display: none;\n  }\n}\n@keyframes DeflyWalletSignTxnToastSlideIn {\n  0% {\n    bottom: 12px;\n    opacity: 0;\n  }\n  100% {\n    bottom: 26px;\n    opacity: 1;\n  }\n}';
  i(q);
  const $ = document.createElement("template");
  $.innerHTML = `
  <div class="defly-wallet-sign-txn-toast">
    <div class="defly-wallet-sign-txn-toast__header">
      <button
        id="defly-wallet-sign-txn-toast-close-button"
        class="defly-wallet-sign-txn-toast__header__close-button">
        <img src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14.4107 4.41074L9.41074 9.41074L10.5893 10.5893L15.5893 5.58926L14.4107 4.41074ZM9.41074 9.41074L4.41074 14.4107L5.58926 15.5893L10.5893 10.5893L9.41074 9.41074ZM15.5893 14.4107L10.5893 9.41074L9.41074 10.5893L14.4107 15.5893L15.5893 14.4107ZM10.5893 9.41074L5.58926 4.41074L4.41074 5.58926L9.41074 10.5893L10.5893 9.41074Z' fill='%239099BD'/%3e%3c/svg%3e" />
      </button>
    </div>
    <div class="defly-wallet-sign-txn-toast__content">
      <div id="defly-wallet-sign-txn-toast-lottie-animation" style="width:368;height:368" class="defly-wallet-sign-txn-toast__content__lottie-animation"></div>
      <p class="defly-wallet-sign-txn-toast__content__description">
        Please launch <b>Defly Wallet</b> on your iOS or Android device to sign this transaction.
      </p>
    </div>
  </div>
`;
  class U extends HTMLElement {
    constructor() {
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const e3 = document.createElement("style");
        e3.textContent = q, this.shadowRoot.append($.content.cloneNode(true), e3);
        const t2 = this.shadowRoot.getElementById("defly-wallet-sign-txn-toast-close-button");
        null == t2 || t2.addEventListener("click", () => {
          n.removeModalWrapperFromDOM(n.DEFLY_WALLET_SIGN_TXN_TOAST_ID);
        }), this.renderLottieAnimation();
      }
    }
    renderLottieAnimation() {
      var n2;
      const e3 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("defly-wallet-sign-txn-toast-lottie-animation");
      e3 && a.default.loadAnimation({ container: e3, renderer: "svg", loop: true, autoplay: true, animationData: j });
    }
  }
  var P = '@import url("https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;600&display=swap");\n@import url("https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;900&display=swap");\n.defly-wallet-modal {\n  --defly-wallet-modal-font-family: "Spline Sans", sans-serif;\n  --defly-wallet-connect-modal-headline-family: "Hanken Grotesk", sans-serif;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 999999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.defly-wallet-modal--select-account .defly-wallet-modal__body {\n  width: 480px;\n  height: 578px;\n}\n.defly-wallet-modal--mobile .defly-wallet-modal__body {\n  top: 40px;\n  bottom: 0;\n  left: 20px;\n  width: calc(100% - 40px);\n  max-width: unset;\n  height: calc(100 * var(--vh));\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);\n  border-radius: 20px 20px 0px 0px;\n  animation: 0.3s DeflyWalletConnectMobileSlideIn ease-out;\n  overflow-y: auto;\n  transform: unset;\n}\n.defly-wallet-modal--mobile .defly-wallet-modal__body::before {\n  background-image: unset;\n}\n.defly-wallet-modal * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: var(--defly-wallet-modal-font-family);\n  font-smooth: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.defly-wallet-modal ul,\n.defly-wallet-modal ol,\n.defly-wallet-modal li {\n  list-style-type: none;\n}\n\n.defly-wallet-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 48px;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--defly-wallet-modal-font-family);\n  font-size: 14px;\n}\n\n.defly-wallet-modal__logo img {\n  display: block;\n  width: 32px;\n}\n\n.defly-wallet-modal__body {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 979px;\n  max-width: calc(100vw - 80px);\n  padding: 28px;\n  background-color: #131313;\n  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);\n  border-radius: 40px;\n  animation: 0.3s DeflyWalletConnectSlideIn ease-out;\n  transform: translate(-50%, -50%);\n}\n\n@media (max-width: 935px) {\n  .defly-wallet-modal--desktop .defly-wallet-modal__body {\n    width: 100%;\n    max-width: calc(100vw - 32px);\n    padding: 24px;\n  }\n}\n@keyframes DeflyWalletConnectSlideIn {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, calc(-50% + 24px));\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes DeflyWalletConnectMobileSlideIn {\n  0% {\n    top: 30%;\n    opacity: 0;\n  }\n  100% {\n    top: 40px;\n    opacity: 1;\n  }\n}\n.defly-wallet-sign-txn-modal.defly-wallet-modal .defly-wallet-modal__body {\n  width: 480px;\n  height: 578px;\n  background-image: unset;\n  padding: 0;\n}\n.defly-wallet-sign-txn-modal.defly-wallet-modal .defly-wallet-modal__body .defly-wallet-sign-txn-modal__body__content {\n  width: 100%;\n  height: 100%;\n}\n.defly-wallet-sign-txn-modal.defly-wallet-modal .defly-wallet-modal__body #defly-wallet-iframe {\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  margin: 0 auto;\n  border: none;\n}';
  i(P);
  const Y = document.createElement("template");
  Y.innerHTML = `
  <div class="${n.DEFLY_WALLET_MODAL_CLASSNAME} defly-wallet-sign-txn-modal">
    <div class="defly-wallet-modal__body">
      <defly-wallet-modal-header modal-id="${n.DEFLY_WALLET_SIGN_TXN_MODAL_ID}"></defly-wallet-modal-header/>

      <div class="defly-wallet-sign-txn-modal__body__content" />
    </div>
  </div>
`;
  class Q extends HTMLElement {
    constructor() {
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const n2 = document.createElement("style");
        n2.textContent = P, this.shadowRoot.append(Y.content.cloneNode(true), n2);
      }
    }
  }
  window.addEventListener("DOMContentLoaded", () => {
    c();
  }), window.addEventListener("resize", () => {
    c();
  }), window.customElements.define("defly-wallet-connect-modal", B), window.customElements.define("defly-wallet-modal-desktop-mode", b), window.customElements.define("defly-wallet-modal-header", m), window.customElements.define("defly-wallet-modal-touch-screen-mode", D), window.customElements.define("defly-wallet-redirect-modal", T), window.customElements.define("defly-wallet-connect-modal-information-section", W), window.customElements.define("defly-wallet-connect-modal-pending-message-section", N), window.customElements.define("defly-wallet-sign-txn-toast", U), window.customElements.define("defly-wallet-sign-txn-modal", Q), window.customElements.define("defly-wallet-download-qr-code", h);
  return AppA86735fb;
}
var hasRequiredIndex9f980d8f;
function requireIndex9f980d8f() {
  if (hasRequiredIndex9f980d8f)
    return index9f980d8f;
  hasRequiredIndex9f980d8f = 1;
  var e2 = require$$1, t = algosdk_minExports, n = es5Exports;
  function o(e3) {
    return e3 && "object" == typeof e3 && "default" in e3 ? e3 : { default: e3 };
  }
  var r = o(e2), i = o(t), l = o(n);
  function s(e3, t2, n2, o2) {
    return new (n2 || (n2 = Promise))(function(r2, i2) {
      function l2(e4) {
        try {
          c2(o2.next(e4));
        } catch (e5) {
          i2(e5);
        }
      }
      function s2(e4) {
        try {
          c2(o2.throw(e4));
        } catch (e5) {
          i2(e5);
        }
      }
      function c2(e4) {
        var t3;
        e4.done ? r2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
          e5(t3);
        })).then(l2, s2);
      }
      c2((o2 = o2.apply(e3, t2 || [])).next());
    });
  }
  class c extends Error {
    constructor(e3, t2, ...n2) {
      super(...n2), Error.captureStackTrace && Error.captureStackTrace(this, c), this.name = "DeflyWalletConnectError", this.data = e3, this.message = t2;
    }
  }
  const d = "defly-wallet-connect-modal-wrapper", a = "defly-wallet-redirect-modal-wrapper", u = "defly-wallet-sign-txn-toast-wrapper", h = "defly-wallet-modal";
  function f(e3) {
    const t2 = document.createElement("div");
    return t2.setAttribute("id", e3), document.body.appendChild(t2), t2;
  }
  function v(e3) {
    const t2 = document.getElementById(e3);
    t2 && t2.remove();
  }
  const g = { WALLET: "DeflyWallet.Wallet", WALLETCONNECT: "walletconnect" };
  function m() {
    return "undefined" == typeof localStorage ? void 0 : localStorage;
  }
  function y() {
    const e3 = function() {
      var e4;
      const t3 = null === (e4 = m()) || void 0 === e4 ? void 0 : e4.getItem(g.WALLET);
      return t3 ? JSON.parse(t3) : null;
    }();
    let t2 = null;
    return "defly-wallet" === (null == e3 ? void 0 : e3.type) && (t2 = "mobile"), t2;
  }
  function w(e3) {
    const t2 = e3.slice();
    for (let e4 = t2.length - 1; e4 > 0; e4--) {
      const n2 = Math.floor(Math.random() * (e4 + 1));
      [t2[e4], t2[n2]] = [t2[n2], t2[e4]];
    }
    return t2;
  }
  const p = "https://static.defly.app/wc-bridge-servers.json";
  function T() {
    return function(e3, t2 = {}) {
      return fetch(e3, t2).then((e4) => e4.json()).then((e4) => e4);
    }(p, { cache: "no-store" });
  }
  function S() {
    return s(this, void 0, void 0, function* () {
      let e3 = { bridgeURL: "", shouldUseSound: true, silent: false };
      try {
        const t2 = yield T();
        void 0 !== t2.use_sound && (e3.shouldUseSound = t2.use_sound), void 0 !== t2.silent && (e3.silent = t2.silent), e3 = Object.assign(Object.assign({}, e3), { bridgeURL: w(t2.servers || [])[0] || "" });
      } catch (e4) {
        console.log(e4);
      }
      return e3;
    });
  }
  function L(e3) {
    return Uint8Array.from(window.atob(e3), (e4) => e4.charCodeAt(0));
  }
  function E() {
    return "undefined" != typeof navigator;
  }
  function A() {
    return E() && /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
  }
  function b({ shouldUseSound: e3 }) {
    return { open: (t2 = { shouldUseSound: e3 }, (e4) => {
      if (!document.getElementById(d)) {
        const n2 = f(d), o2 = `${e4}&algorand=true`, { shouldUseSound: r2 } = t2;
        n2.innerHTML = `<defly-wallet-connect-modal uri="${o2}" should-use-sound="${r2}"></defly-wallet-connect-modal>`;
      }
    }), close: () => v(d) };
    var t2;
  }
  "undefined" != typeof window && (window.global = window, window.Buffer = window.Buffer || buffer.Buffer, Promise.resolve().then(function() {
    return requireAppA86735fb();
  })), index9f980d8f.DEFLY_WALLET_CONNECT_MODAL_ID = d, index9f980d8f.DEFLY_WALLET_MODAL_CLASSNAME = h, index9f980d8f.DEFLY_WALLET_REDIRECT_MODAL_ID = a, index9f980d8f.DEFLY_WALLET_SIGN_TXN_MODAL_ID = "defly-wallet-sign-txn-modal-wrapper", index9f980d8f.DEFLY_WALLET_SIGN_TXN_TOAST_ID = u, index9f980d8f.DeflyWalletConnect = class {
    constructor(e3) {
      this.bridge = (null == e3 ? void 0 : e3.bridge) || "", this.connector = null, this.shouldShowSignTxnToast = void 0 === (null == e3 ? void 0 : e3.shouldShowSignTxnToast) || e3.shouldShowSignTxnToast, this.chainId = null == e3 ? void 0 : e3.chainId;
    }
    get platform() {
      return y();
    }
    get isConnected() {
      return "mobile" === this.platform && !!this.connector;
    }
    connect() {
      return new Promise((e3, t2) => s(this, void 0, void 0, function* () {
        var n2;
        try {
          if (null === (n2 = this.connector) || void 0 === n2 ? void 0 : n2.connected)
            try {
              yield this.connector.killSession();
            } catch (e4) {
            }
          const { bridgeURL: o2, shouldUseSound: i2 } = yield S();
          this.connector = new r.default({ bridge: this.bridge || o2 || "https://bridge.walletconnect.org", qrcodeModal: b({ shouldUseSound: i2 }) }), yield this.connector.createSession({ chainId: this.chainId || 4160 }), function(e4) {
            var t3, n3, o3, r2;
            const i3 = document.getElementById(d), l2 = null === (n3 = null === (t3 = null == i3 ? void 0 : i3.querySelector("defly-wallet-connect-modal")) || void 0 === t3 ? void 0 : t3.shadowRoot) || void 0 === n3 ? void 0 : n3.querySelector(`.${h}`), s2 = null === (r2 = null === (o3 = null == l2 ? void 0 : l2.querySelector("defly-wallet-modal-header")) || void 0 === o3 ? void 0 : o3.shadowRoot) || void 0 === r2 ? void 0 : r2.getElementById("defly-wallet-modal-header-close-button");
            null == s2 || s2.addEventListener("click", () => {
              e4(), v(d);
            });
          }(() => t2(new c({ type: "CONNECT_MODAL_CLOSED" }, "Connect modal is closed by user"))), this.connector.on("connect", (n3, o3) => {
            var r2, i3;
            n3 && t2(n3), e3((null === (r2 = this.connector) || void 0 === r2 ? void 0 : r2.accounts) || []), function(e4, t3) {
              var n4;
              null === (n4 = m()) || void 0 === n4 || n4.setItem(g.WALLET, JSON.stringify({ type: t3 || "defly-wallet", accounts: e4, selectedAccount: e4[0] }));
            }((null === (i3 = this.connector) || void 0 === i3 ? void 0 : i3.accounts) || []);
          });
        } catch (e4) {
          t2(new c({ type: "SESSION_CONNECT", detail: e4 }, e4.message || "There was an error while connecting to Defly Wallet"));
        }
      }));
    }
    reconnectSession() {
      return new Promise((e3, t2) => s(this, void 0, void 0, function* () {
        var n2, o2;
        try {
          this.connector && e3(this.connector.accounts || []), this.bridge = (null === (n2 = function() {
            var e4;
            const t3 = null === (e4 = m()) || void 0 === e4 ? void 0 : e4.getItem(g.WALLETCONNECT);
            return t3 ? JSON.parse(t3) : null;
          }()) || void 0 === n2 ? void 0 : n2.bridge) || "", this.bridge && (this.connector = new r.default({ bridge: this.bridge }), e3((null === (o2 = this.connector) || void 0 === o2 ? void 0 : o2.accounts) || [])), this.isConnected || e3([]);
        } catch (e4) {
          yield this.disconnect(), t2(new c({ type: "SESSION_RECONNECT", detail: e4 }, e4.message || "There was an error while reconnecting to Defly Wallet"));
        }
      }));
    }
    disconnect() {
      var e3;
      return s(this, void 0, void 0, function* () {
        let t2;
        this.isConnected && "mobile" === this.platform && (t2 = null === (e3 = this.connector) || void 0 === e3 ? void 0 : e3.killSession(), null == t2 || t2.then(() => {
          this.connector = null;
        })), yield new Promise((e4, t3) => {
          var n2, o2;
          try {
            null === (n2 = m()) || void 0 === n2 || n2.removeItem(g.WALLETCONNECT), null === (o2 = m()) || void 0 === o2 || o2.removeItem(g.WALLET), e4(void 0);
          } catch (e5) {
            t3(e5);
          }
        });
      });
    }
    signTransactionWithMobile(e3) {
      return s(this, void 0, void 0, function* () {
        const t2 = (n2 = "algo_signTxn", o2 = [e3], { id: Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3)), jsonrpc: "2.0", method: n2, params: o2 });
        var n2, o2;
        try {
          try {
            const { silent: e4 } = yield S(), n3 = (yield this.connector.sendCustomRequest(t2, { forcePushNotification: !e4 })).filter(Boolean);
            return "string" == typeof n3[0] ? n3.map(L) : n3.map((e5) => Uint8Array.from(e5));
          } catch (e4) {
            return yield Promise.reject(new c({ type: "SIGN_TRANSACTIONS", detail: e4 }, e4.message || "Failed to sign transaction"));
          }
        } finally {
          v(a), v(u);
        }
      });
    }
    signTransaction(e3, t2) {
      return s(this, void 0, void 0, function* () {
        if ("mobile" === this.platform && (A() ? f(a).innerHTML = "<defly-wallet-redirect-modal></defly-wallet-redirect-modal>" : !A() && this.shouldShowSignTxnToast && (f(u).innerHTML = "<defly-wallet-sign-txn-toast></defly-wallet-sign-txn-toast>"), !this.connector))
          throw new Error("DeflyWalletConnect was not initialized correctly.");
        const n2 = e3.flatMap((e4) => e4.map((e5) => function(e6, t3) {
          let n3;
          t3 && !(e6.signers || []).includes(t3) && (n3 = []);
          const o2 = { txn: (r2 = e6.txn, Buffer.from(i.default.encodeUnsignedTransaction(r2)).toString("base64")) };
          var r2;
          return Array.isArray(n3) && (o2.signers = n3), e6.authAddr && (o2.authAddr = e6.authAddr), e6.message && (o2.message = e6.message), e6.msig && (o2.msig = e6.msig), o2;
        }(e5, t2)));
        return this.signTransactionWithMobile(n2);
      });
    }
  }, index9f980d8f.closeDeflyWalletSignTxnToast = function() {
    v(u);
  }, index9f980d8f.detectBrowser = function() {
    if (!E())
      return null;
    const { userAgent: e3 } = navigator;
    let t2;
    return t2 = e3.match(/DuckDuckGo/i) ? "DuckDuckGo" : e3.match(/OPX/i) ? "Opera GX" : navigator.brave ? "Brave" : l.default.getParser(navigator.userAgent).getBrowserName(), t2;
  }, index9f980d8f.isAndroid = function() {
    return E() && /Android/i.test(navigator.userAgent);
  }, index9f980d8f.isIOS = function() {
    return E() && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }, index9f980d8f.isMobile = A, index9f980d8f.removeModalWrapperFromDOM = v;
  return index9f980d8f;
}
var closeDeflyWalletSignTxnToast;
var DeflyWalletConnect;
Object.defineProperty(dist, "__esModule", { value: true });
var e = requireIndex9f980d8f();
DeflyWalletConnect = dist.DeflyWalletConnect = e.DeflyWalletConnect, closeDeflyWalletSignTxnToast = dist.closeDeflyWalletSignTxnToast = e.closeDeflyWalletSignTxnToast;
const index = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get DeflyWalletConnect() {
    return DeflyWalletConnect;
  },
  get closeDeflyWalletSignTxnToast() {
    return closeDeflyWalletSignTxnToast;
  },
  default: dist
}, [dist]);
export {
  index as i
};
