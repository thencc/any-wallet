import { r as requireQrCodeStyling, a as require$$1, e as es5Exports } from "./qr-code-styling-87721598.js";
import { a as algosdk_minExports } from "./algosdk.min-e134c54c.js";
import { b as buffer } from "./index-76a79632.js";
import { r as requireLottieWebLight } from "./index-9c89cd5b.js";
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
var indexE9eae2a3 = {};
var App16459877 = {};
var hasRequiredApp16459877;
function requireApp16459877() {
  if (hasRequiredApp16459877)
    return App16459877;
  hasRequiredApp16459877 = 1;
  var e2 = requireIndexE9eae2a3(), n = requireQrCodeStyling(), t = requireLottieWebLight();
  function a(e3) {
    return e3 && "object" == typeof e3 && "default" in e3 ? e3 : { default: e3 };
  }
  var o = a(n), l = a(t);
  function i(n2 = true) {
    let t2 = e2.PERA_WALLET_APP_DEEP_LINK;
    const a2 = e2.detectBrowser();
    return n2 && a2 && (t2 = `${t2}?browser=${encodeURIComponent(a2)}`), t2;
  }
  function r(e3, n2) {
    void 0 === n2 && (n2 = {});
    var t2 = n2.insertAt;
    if (e3 && "undefined" != typeof document) {
      var a2 = document.head || document.getElementsByTagName("head")[0], o2 = document.createElement("style");
      o2.type = "text/css", "top" === t2 && a2.firstChild ? a2.insertBefore(o2, a2.firstChild) : a2.appendChild(o2), o2.styleSheet ? o2.styleSheet.cssText = e3 : o2.appendChild(document.createTextNode(e3));
    }
  }
  var d = ".pera-wallet-modal-header {\n  position: absolute;\n  top: -44px;\n  right: 0px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.pera-wallet-modal-header--mobile {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: static;\n}\n.pera-wallet-modal-header--mobile .pera-wallet-modal-header__close-button {\n  width: 24px;\n  height: 24px;\n  margin: 0;\n  padding: 0;\n  background: transparent;\n  border: unset;\n  box-shadow: unset;\n}\n\n.pera-wallet-modal-header__brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: -0.1px;\n  color: #ffffff;\n}\n\n.pera-wallet-modal-header__brand-text {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.pera-wallet-modal-header__version-number {\n  color: #9d9dae;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0.01;\n}\n\n.pera-wallet-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 48px;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--pera-wallet-modal-font-family);\n  font-size: 14px;\n}\n\n.pera-wallet-modal-header__close-button {\n  width: 32px;\n  height: 32px;\n  margin: 0;\n  padding: 0;\n  background: rgba(44, 53, 89, 0.1);\n  border-radius: 8px;\n}\n\n.pera-wallet-modal-header__close-button__close-icon {\n  width: 20px;\n  height: 20px;\n}";
  r(d);
  function c() {
    return document.documentElement.clientWidth <= 767;
  }
  function p() {
    document.documentElement.style.setProperty("--vh", 0.01 * window.innerHeight + "px");
  }
  const s = document.createElement("template"), m = e2.isMobile() ? "pera-wallet-modal-header pera-wallet-modal-header--mobile" : "pera-wallet-modal-header pera-wallet-modal-header--desktop";
  s.innerHTML = `
  <div class="${m}">
      ${c() && e2.isMobile() ? "" : `<div class="pera-wallet-modal-header__brand">
              <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='24' height='24' rx='4.8' fill='%23FFEE55'/%3e%3cpath d='M13.0408 5.92462C13.413 7.46693 13.2872 8.8236 12.7597 8.95482C12.2322 9.08605 11.5028 7.94214 11.1306 6.39983C10.7583 4.85752 10.8842 3.50085 11.4117 3.36963C11.9391 3.2384 12.6685 4.38231 13.0408 5.92462Z' fill='black'/%3e%3cpath d='M19.1876 7.25063C18.3632 6.37689 16.7231 6.61371 15.5243 7.77959C14.3254 8.94547 14.0219 10.5989 14.8463 11.4727C15.6707 12.3464 17.3108 12.1096 18.5097 10.9437C19.7085 9.77781 20.012 8.12438 19.1876 7.25063Z' fill='black'/%3e%3cpath d='M12.6308 20.6297C13.1583 20.4985 13.2656 19.0651 12.8705 17.4281C12.4754 15.7911 11.7275 14.5705 11.2 14.7017C10.6725 14.8329 10.5652 16.2663 10.9603 17.9033C11.3554 19.5403 12.1033 20.7609 12.6308 20.6297Z' fill='black'/%3e%3cpath d='M7.25371 8.05056C8.77551 8.49933 9.8875 9.28664 9.73741 9.80906C9.58731 10.3315 8.23197 10.3912 6.71016 9.94242C5.18836 9.49364 4.07637 8.70633 4.22646 8.18391C4.37656 7.66149 5.7319 7.60178 7.25371 8.05056Z' fill='black'/%3e%3cpath d='M17.1309 13.9497C18.7461 14.4261 19.9338 15.2357 19.7837 15.7581C19.6336 16.2806 18.2025 16.3179 16.5873 15.8416C14.9721 15.3653 13.7844 14.5556 13.9345 14.0332C14.0846 13.5108 15.5157 13.4734 17.1309 13.9497Z' fill='black'/%3e%3cpath d='M8.96609 12.8536C8.5887 12.4624 7.35088 13.0318 6.20133 14.1253C5.05177 15.2188 4.42581 16.4225 4.80319 16.8137C5.18058 17.2048 6.4184 16.6355 7.56796 15.542C8.71751 14.4484 9.34347 13.2448 8.96609 12.8536Z' fill='black'/%3e%3c/svg%3e" />

              <div class="pera-wallet-modal-header__brand-text">
                <span>Pera Connect</span>

                <span class="pera-wallet-modal-header__version-number">v1.3.2</span>
              </div>
            </div>
            `} 

      <button
        id="pera-wallet-modal-header-close-button"
        class="pera-wallet-button pera-wallet-modal-header__close-button">
        <img
          class="pera-wallet-modal-header__close-button__close-icon"
          src="${c() && e2.isMobile() ? "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='%232C3559' stroke-width='2'/%3e%3c/svg%3e" : "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='white' stroke-width='2'/%3e%3c/svg%3e"}"
        />
      </button>
    </div>
`;
  class w extends HTMLElement {
    constructor() {
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const e3 = document.createElement("style");
        e3.textContent = d, this.shadowRoot.append(s.content.cloneNode(true), e3), this.onClose();
      }
    }
    onClose() {
      var n2;
      const t2 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("pera-wallet-modal-header-close-button"), a2 = this.getAttribute("modal-id");
      t2 && a2 === e2.PERA_WALLET_REDIRECT_MODAL_ID && t2.addEventListener("click", () => {
        e2.removeModalWrapperFromDOM(e2.PERA_WALLET_REDIRECT_MODAL_ID);
      });
    }
  }
  var h = "data:image/svg+xml,%3csvg fill='none' height='80' width='80' xmlns='http://www.w3.org/2000/svg'%3e%3cpath clip-rule='evenodd' d='M39.9 80V68.99h-9.8V80h-.2V68.99h-3.5a6.503 6.503 0 0 1-6.247-4.7 6.514 6.514 0 0 1-4.445-4.444 6.503 6.503 0 0 1-4.695-6.246v-3.5H0v-.2h11.013v-9.8H0v-.2h11.013v-9.8H0v-.2h11.013v-3.5a6.503 6.503 0 0 1 4.694-6.246 6.513 6.513 0 0 1 4.447-4.447 6.503 6.503 0 0 1 6.246-4.696h3.5V0h.2v11.011h9.8V0h.2v11.011h9.8V0h.2v11.011h3.5a6.503 6.503 0 0 1 6.247 4.697 6.514 6.514 0 0 1 4.443 4.444 6.503 6.503 0 0 1 4.701 6.248v3.5H80v.2H68.991v9.8H80v.2H68.991v9.8H80v.2H68.991v3.5a6.503 6.503 0 0 1-4.701 6.248 6.514 6.514 0 0 1-4.443 4.442 6.503 6.503 0 0 1-6.247 4.7h-3.5V80h-.2V68.99h-9.8V80zm28.89-40.1a28.728 28.728 0 0 0-1.746-9.8h-2.5v9.8h4.247zm-4.246.2h4.247a28.729 28.729 0 0 1-1.747 9.8h-2.5zm-.2-.2v-9.8H60.1v9.8zm-4.244.2h4.244v9.8H60.1zm-.2-.2a19.807 19.807 0 0 0-2.633-9.8H50.1v9.8zm-9.8.2h9.8a19.807 19.807 0 0 1-2.633 9.8H50.1zm-.2-.2v-9.8h-9.8v9.8zm-9.8.2h9.8v9.8h-9.8zm-.2-.2v-9.8h-9.8v9.8zm-9.8.2h9.8v9.8h-9.8zm-.2-.2v-9.8h-7.167a19.807 19.807 0 0 0-2.633 9.8zm-9.8.2h9.8v9.8h-7.167a19.807 19.807 0 0 1-2.633-9.8zm-.2-.2v-9.8h-4.245v9.8zm-4.245.2H19.9v9.8h-4.245zm-.2-.2v-9.8H12.96a28.726 28.726 0 0 0-1.748 9.8h4.242zm-4.242.2h4.242v9.8H12.96a28.726 28.726 0 0 1-1.748-9.8zm0 13.5v-3.5h1.608a28.876 28.876 0 0 0 2.634 5.327v2.617c0 .543.066 1.07.192 1.575a6.303 6.303 0 0 1-4.434-6.019zm4.242 1.449a28.674 28.674 0 0 1-2.42-4.949h2.42zm.2.32V50.1H19.9v9.8h-.702a28.915 28.915 0 0 1-3.543-4.53zM20.1 59.9v-9.8h2.518a20.2 20.2 0 0 0 7.282 7.282V59.9zm0-10h2.403a19.966 19.966 0 0 1-2.403-7.053zm9.8 7.25a20 20 0 0 1-7.05-7.05h7.05zm.2.117V50.1h9.8v9.8a19.807 19.807 0 0 1-9.8-2.633zm10 2.633v-9.8h9.8v7.167a19.807 19.807 0 0 1-9.8 2.633zm10-2.75V50.1h7.05a20 20 0 0 1-7.05 7.05zm0 .232a20.2 20.2 0 0 0 7.282-7.282H59.9v9.8h-9.8zm7.397-7.482H59.9v-7.053a19.966 19.966 0 0 1-2.403 7.053zm2.603 10v-9.8h4.244v5.28a28.91 28.91 0 0 1-3.538 4.52zm4.444-4.841V50.1h2.426a28.67 28.67 0 0 1-2.426 4.959zm0 .378a28.881 28.881 0 0 0 2.64-5.337h1.607v3.5a6.303 6.303 0 0 1-4.44 6.021 6.514 6.514 0 0 0 .193-1.577zm2.713-5.537h1.534v-6.477a28.817 28.817 0 0 1-1.534 6.477zm-56.044 0h1.535a28.807 28.807 0 0 1-1.535-6.477zm57.578-20v-3.5a6.303 6.303 0 0 0-4.44-6.02c.126.504.193 1.031.193 1.575v2.608a28.877 28.877 0 0 1 2.639 5.337zm-1.534.2h1.534v6.477a28.815 28.815 0 0 0-1.534-6.477zm-.288-.2a28.673 28.673 0 0 0-2.425-4.958V29.9zm-2.625 0v-5.279a28.911 28.911 0 0 0-3.538-4.521H60.1v9.8zm-4.444 0v-9.8h-9.8v2.518a20.2 20.2 0 0 1 7.282 7.282zm-2.403.2H59.9v7.053a19.966 19.966 0 0 0-2.403-7.053zm-.347-.2a20 20 0 0 0-7.05-7.05v7.05zm-7.25 0v-7.167a19.807 19.807 0 0 0-9.8-2.633v9.8zm-10 0v-9.8a19.807 19.807 0 0 0-9.8 2.633V29.9zm-10 0v-7.05a20 20 0 0 0-7.05 7.05zm-7.282 0a20.2 20.2 0 0 1 7.282-7.282V20.1h-9.8v9.8zm-2.518.2h2.403a19.966 19.966 0 0 0-2.403 7.053zm-.2-.2v-9.8h-.701a28.915 28.915 0 0 0-3.544 4.53v5.27zm-4.445 0v-4.948a28.665 28.665 0 0 0-2.42 4.948zm-2.634 0a28.874 28.874 0 0 1 2.634-5.327v-2.618c0-.543.066-1.07.191-1.574a6.303 6.303 0 0 0-4.433 6.019v3.5zm-1.608.2h1.535a28.81 28.81 0 0 0-1.535 6.477zM36.58 68.79H30.1v-1.536c2.06.749 4.23 1.27 6.479 1.535zm3.321-.001a28.726 28.726 0 0 1-9.8-1.748v-2.497h9.8zm-10-1.822v-2.423h-4.953a28.678 28.678 0 0 0 4.953 2.423zm10-2.623h-9.8V60.1h9.8zm-10 0V60.1h-9.8v.702a28.915 28.915 0 0 0 4.526 3.542H29.9zm7.254-4.444H30.1v-2.403a19.966 19.966 0 0 0 7.053 2.403zm0-39.8a19.966 19.966 0 0 0-7.054 2.403V20.1h7.053zm2.746-.2h-9.8v-4.245h9.8zm-10 0v-4.245h-5.27a28.907 28.907 0 0 0-4.53 3.544v.701zm10-4.445h-9.8V12.96a28.729 28.729 0 0 1 9.8-1.749zm-10 0v-2.421a28.668 28.668 0 0 0-4.95 2.42h4.95zm6.679-4.244a28.81 28.81 0 0 0-6.479 1.536V11.21h6.479zm-6.679 1.61v-1.61h-3.5a6.303 6.303 0 0 0-6.02 4.436 6.514 6.514 0 0 1 1.575-.192h2.617A28.877 28.877 0 0 1 29.9 12.82zm0 55.968V67.18a28.878 28.878 0 0 1-5.331-2.636h-2.614c-.543 0-1.07-.067-1.575-.192a6.303 6.303 0 0 0 6.02 4.437zm20.2 0h3.5a6.303 6.303 0 0 0 6.02-4.438 6.513 6.513 0 0 1-1.576.193h-2.608a28.879 28.879 0 0 1-5.336 2.638zm-.2-1.534v1.534h-6.475a28.808 28.808 0 0 0 6.475-1.534zm.2-.287a28.671 28.671 0 0 0 4.957-2.424H50.1v2.424zm-.2-2.424v2.499a28.728 28.728 0 0 1-9.8 1.746v-4.245zm.2-.2h5.278a28.914 28.914 0 0 0 4.522-3.538V60.1h-9.8zm-.2-4.244v4.244h-9.8V60.1zm0-2.603V59.9h-7.053a19.966 19.966 0 0 0 7.053-2.403zm0-37.397v2.403a19.966 19.966 0 0 0-7.053-2.403H49.9zm.2-.2h9.8v-.705a28.911 28.911 0 0 0-4.526-3.54H50.1V19.9zm-.2-4.245V19.9h-9.8v-4.245h9.8zm.2-.2h4.954a28.676 28.676 0 0 0-4.954-2.423zm-.2-2.497v2.497h-9.8V11.21a28.75 28.75 0 0 1 9.8 1.747zm.2-.14a28.877 28.877 0 0 1 5.332 2.637h2.612c.543 0 1.071.066 1.576.192a6.303 6.303 0 0 0-6.02-4.436h-3.5zm-.2-1.607v1.534a28.812 28.812 0 0 0-6.475-1.534H49.9zm-34.245 44.53v2.303c0 .567.075 1.117.215 1.64a6.309 6.309 0 0 0 1.643.216h1.41a29.118 29.118 0 0 1-3.268-4.16zm3.458 4.359h-1.6a6.513 6.513 0 0 1-1.578-.193 6.315 6.315 0 0 0 4.157 4.157 6.517 6.517 0 0 1-.192-1.575v-1.602a29.35 29.35 0 0 1-.787-.787zm.787.509a29.029 29.029 0 0 1-.508-.509h.508zm.2.469v1.411c0 .567.075 1.117.215 1.64.523.14 1.073.215 1.64.215h2.3a29.118 29.118 0 0 1-4.155-3.266zm35.649 3.266h2.295c.567 0 1.117-.075 1.64-.216a6.286 6.286 0 0 0 .216-1.639v-1.407a29.116 29.116 0 0 1-4.151 3.262zm4.35-3.454v1.598a6.53 6.53 0 0 1-.192 1.574 6.314 6.314 0 0 0 4.155-4.154 6.509 6.509 0 0 1-1.572.191h-1.6a29.08 29.08 0 0 1-.791.791zm.982-.991h1.41c.565 0 1.114-.075 1.636-.215a6.31 6.31 0 0 0 .216-1.641V55.75a29.113 29.113 0 0 1-3.262 4.15zm3.262-35.65v-2.295c0-.568-.075-1.117-.216-1.64a6.307 6.307 0 0 0-1.637-.215h-1.41a29.112 29.112 0 0 1 3.263 4.15zM60.89 19.9h1.6c.542 0 1.069.066 1.573.192a6.314 6.314 0 0 0-4.156-4.157 6.51 6.51 0 0 1 .192 1.576v1.598c.269.259.532.522.79.791zm-.991-.981V17.51a6.31 6.31 0 0 0-.216-1.64 6.308 6.308 0 0 0-1.64-.216h-2.299a29.108 29.108 0 0 1 4.155 3.264zm-35.641-3.264h-2.304a6.31 6.31 0 0 0-1.639.215 6.306 6.306 0 0 0-.216 1.641v1.412a29.115 29.115 0 0 1 4.159-3.268zM19.9 19.113v-1.602c0-.543.067-1.072.193-1.577a6.315 6.315 0 0 0-4.159 4.16 6.518 6.518 0 0 1 1.58-.194h1.6c.257-.267.519-.53.786-.787zm-.508.787h.508v-.508c-.171.167-.34.337-.508.508zm-.47.2h-1.409a6.31 6.31 0 0 0-1.643.216 6.308 6.308 0 0 0-.215 1.639v2.305a29.107 29.107 0 0 1 3.268-4.16zm41.178-.712c.173.168.344.34.512.512H60.1zm.513 40.712c-.169.173-.34.344-.513.513V60.1z' fill='%2394a3b8' fill-rule='evenodd'/%3e%3crect fill='black' height='80' rx='16' width='80'/%3e%3cpath d='M43.47 19.752c1.24 5.14.821 9.663-.937 10.1-1.758.438-4.19-3.375-5.43-8.517-1.241-5.14-.822-9.663.936-10.1 1.759-.438 4.19 3.376 5.43 8.517zm20.49 4.42c-2.749-2.913-8.216-2.123-12.212 1.763s-5.008 9.398-2.26 12.31 8.215 2.123 12.211-1.763 5.008-9.398 2.26-12.31zM42.102 68.769c1.758-.438 2.116-5.216.8-10.673-1.318-5.456-3.81-9.525-5.57-9.088-1.757.438-2.115 5.216-.798 10.672 1.317 5.457 3.81 9.526 5.568 9.089zM24.18 26.838c5.073 1.496 8.78 4.12 8.28 5.862-.5 1.741-5.019 1.94-10.091.444-5.073-1.496-8.78-4.12-8.28-5.861.501-1.742 5.019-1.941 10.092-.445zm32.924 19.664c5.384 1.588 9.343 4.286 8.843 6.028-.5 1.741-5.27 1.866-10.654.278-5.385-1.588-9.343-4.286-8.843-6.028.5-1.741 5.27-1.866 10.654-.278zm-27.216-3.654c-1.258-1.304-5.384.594-9.215 4.24-3.832 3.644-5.919 7.656-4.66 8.96 1.257 1.304 5.383-.594 9.215-4.239s5.918-7.657 4.66-8.96z' fill='%23fe5'/%3e%3c/svg%3e", g = ".pera-wallet-download-qr-code-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n  margin: 26px auto 0;\n  padding: 10px;\n  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);\n  border-radius: 24px;\n}\n\n@media (max-width: 767px) {\n  .pera-wallet-download-qr-code-wrapper {\n    margin-top: 51px;\n  }\n}";
  r(g);
  const f = document.createElement("template");
  f.innerHTML = '\n  <div id="pera-wallet-download-qr-code-wrapper" class="pera-wallet-download-qr-code-wrapper"></div>  \n';
  class x extends HTMLElement {
    constructor() {
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const e3 = document.createElement("style");
        e3.textContent = g, this.shadowRoot.append(f.content.cloneNode(true), e3);
      }
    }
    connectedCallback() {
      var n2;
      const t2 = new o.default({ width: 205, height: 205, type: "svg", data: e2.PERA_DOWNLOAD_URL, image: h, dotsOptions: { color: "#000", type: "extra-rounded" }, imageOptions: { crossOrigin: "anonymous", margin: 10 }, cornersSquareOptions: { type: "extra-rounded" }, cornersDotOptions: { type: "dot" } }), a2 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("pera-wallet-download-qr-code-wrapper");
      a2 && t2.append(a2);
    }
  }
  var u = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.5 19L15.5 12L8.5 5' stroke='%233C3C49' stroke-width='2'/%3e%3c/svg%3e", _ = ".pera-wallet-connect-modal-desktop-mode {\n  display: grid;\n  grid-template-columns: 205px auto;\n  gap: 70px;\n}\n.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view {\n  display: block;\n}\n.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {\n  height: 364px;\n}\n.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item--web-wallet {\n  display: none;\n}\n.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-toggle {\n  padding: 26px 24px 12px;\n  border-radius: 24px 24px 0 0;\n  transition: all ease-in 0.2s;\n}\n.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-item__content {\n  height: 434px;\n  border-radius: 0 0 24px 24px;\n  transition: height ease-in 0.2s;\n}\n.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-icon {\n  transform: rotate(90deg);\n}\n.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-connect-modal-desktop-mode__download-pera-description {\n  margin-top: 50px;\n}\n.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__download-view {\n  display: none;\n}\n.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__default-view {\n  display: none;\n}\n.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__download-view {\n  display: block;\n}\n.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__download-view .pera-wallet-connect-modal-download-pera-view__footer a {\n  display: flex;\n  cursor: pointer;\n}\n.pera-wallet-connect-modal-desktop-mode--compact {\n  grid-template-columns: unset;\n  gap: unset;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet {\n  padding: 28px 40px;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper {\n  box-shadow: unset;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__description {\n  margin-bottom: 16px;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button {\n  width: 172px;\n  height: 40px;\n  margin: 0 auto;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {\n  height: 100%;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view {\n  overflow: hidden;\n  border-radius: 24px;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item {\n  margin-bottom: 0;\n  border-radius: 0;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item:not(:last-child) {\n  border-bottom: 1px solid #e6e8ee;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item #pera-wallet-iframe {\n  height: 100%;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle {\n  padding: 20px;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__text, .pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__content-with-label__text {\n  color: #626268;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.09px;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__bold-color {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {\n  height: 265px;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-container {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 14px;\n  padding: 0 20px;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-description,\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-button {\n  margin: 0;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-button {\n  font-weight: 500;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-qr-code-wrapper {\n  margin: 4px auto 0;\n  padding: 0;\n  box-shadow: unset;\n}\n.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-qr-code-wrapper svg {\n  padding: 8px;\n  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);\n  border-radius: 12px;\n}\n.pera-wallet-connect-modal-desktop-mode--select-account {\n  width: 100%;\n  height: 100%;\n}\n.pera-wallet-connect-modal-desktop-mode--select-account.pera-wallet-connect-modal-desktop-mode--default {\n  overflow: hidden;\n}\n.pera-wallet-connect-modal-desktop-mode--select-account .pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {\n  position: unset;\n}\n.pera-wallet-connect-modal-desktop-mode--select-account .pera-wallet-accordion {\n  overflow: hidden;\n}\n.pera-wallet-connect-modal-desktop-mode--select-account #pera-wallet-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n}\n\n.pera-wallet-connect-modal-desktop-mode__accordion__description,\n.pera-wallet-connect-modal-desktop-mode__connect-button-wrapper {\n  padding: 0 40px 20px 64px;\n}\n\n.pera-wallet-connect-modal-desktop-mode__web-wallet {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: calc(100% - 88px);\n  padding: 48px 52px 40px;\n  margin: 0 auto;\n}\n\n.pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 72px;\n  height: 72px;\n  margin: 0 auto 16px;\n  background: #ffffff;\n  border-radius: 50%;\n  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.1), 0px 10px 16px rgba(20, 37, 63, 0.06);\n}\n\n.pera-wallet-connect-modal-desktop-mode__web-wallet__description {\n  margin: 0 auto 32px;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.1px;\n  text-align: center;\n  color: #6a6a81;\n}\n\n.pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 14px 0;\n  color: #ffffff;\n  background-color: #6b46fe;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: -0.1;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n\n.pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {\n  position: relative;\n  width: fit-content;\n  margin: 0 auto;\n}\n\n.pera-wallet-connect-modal-desktop-mode__connect-button {\n  display: block;\n  width: 100%;\n  height: 48px;\n  border: unset;\n  border-radius: 6px;\n  background-color: #333333;\n  color: white;\n  cursor: pointer;\n  font-family: var(--pera-wallet-modal-font-family);\n  font-size: 13px;\n}\n\n.pera-wallet-connect-qr-code-wrapper {\n  width: fit-content;\n  margin: 24px auto 0;\n  padding: 10px;\n  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);\n  border-radius: 24px;\n}\n\n.pera-wallet-connect-modal-desktop-mode__download-pera-description {\n  color: #838aa6;\n  text-align: center;\n  margin: 32px 0 12px;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: -0.04px;\n}\n\n.pera-wallet-connect-modal-desktop-mode__download-pera-button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 auto;\n  padding: 0;\n  color: #6b46fe;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01px;\n  cursor: pointer;\n}\n\n.pera-wallet-connect-modal-download-pera-view__back-button {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 14px;\n  padding: 12px 24px;\n  color: #3c3c49;\n  background-color: #ffffff;\n  outline: none;\n  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);\n  border: unset;\n  border-radius: 24px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: -0.1px;\n  cursor: pointer;\n}\n\n.pera-wallet-connect-modal-download-pera-view {\n  padding: 32px 37px 28px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);\n  border-radius: 24px;\n}\n\n.pera-wallet-connect-modal-download-pera-view__title {\n  margin-bottom: 8px;\n  color: #3c3c49;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 18px;\n  text-align: center;\n  letter-spacing: -0.13px;\n}\n\n.pera-wallet-connect-modal-download-pera-view__footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 53px;\n}\n\n.pera-wallet-connect-modal-download-pera-view__footer__button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 16px;\n  color: #6a6a81;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);\n  text-decoration: none;\n  border-radius: 12px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 200%;\n  letter-spacing: -0.04px;\n  cursor: pointer;\n}\n\n#pera-wallet-iframe {\n  width: 285px;\n  height: 376px;\n  margin: 0 auto;\n  border: none;\n}\n\n@media (max-width: 767px) {\n  .pera-wallet-connect-modal-desktop-mode {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .pera-wallet-connect-qr-code-wrapper {\n    margin-top: 16px;\n  }\n  .pera-wallet-connect-modal-download-pera-view {\n    padding: 24px;\n  }\n  .pera-wallet-download-qr-code-wrapper {\n    margin-top: 32px;\n  }\n  .pera-wallet-connect-modal-download-pera-view__footer {\n    margin-top: 40px;\n  }\n}";
  r(_);
  var b = ".pera-wallet-accordion-item {\n  background-color: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.02), 0px 4px 12px rgba(0, 0, 0, 0.03);\n}\n.pera-wallet-accordion-item:not(:last-of-type) {\n  margin-bottom: 20px;\n}\n.pera-wallet-accordion-item:not(:last-of-type) .pera-wallet-accordion-panel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pera-wallet-accordion-item .pera-wallet-accordion-item__content {\n  height: 0;\n  overflow: hidden;\n  color: #69708d;\n  background-color: #ffffff;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: -0.04px;\n  transition: height ease-in 0.2s;\n}\n.pera-wallet-accordion-item--active .pera-wallet-accordion-toggle {\n  padding: 26px 24px 12px;\n  border-radius: 24px 24px 0 0;\n  transition: all ease-in 0.2s;\n}\n.pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {\n  border-radius: 0 0 24px 24px;\n  transition: height ease-in 0.2s;\n}\n.pera-wallet-accordion-item--active .pera-wallet-accordion-icon {\n  transform: rotate(90deg);\n}\n\n.pera-wallet-accordion-toggle {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 24px;\n  color: #2c3559;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 24px;\n  outline: none;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 18px;\n  letter-spacing: -0.1px;\n  font-weight: 600;\n  transition: all ease-in 0.2s;\n}\n.pera-wallet-accordion-toggle__text, .pera-wallet-accordion-toggle__content-with-label__text {\n  color: #626268;\n}\n\n.pera-wallet-accordion-icon {\n  transition: all ease-in 0.2s;\n}\n\n.pera-wallet-accordion-toggle__bold-color {\n  color: #1A1A1A;\n  font-weight: 600;\n}\n\n.pera-wallet-accordion-toggle__content-with-label {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.pera-wallet-accordion-toggle__label {\n  padding: 4px 9px;\n  color: #1C786C;\n  background: #E0FAEE;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0.01px;\n}\n\n.pera-wallet-accordion-toggle__button {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  cursor: pointer;\n}\n\n@media (max-width: 767px) {\n  .pera-wallet-accordion-toggle {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 24px;\n    letter-spacing: -0.1px;\n  }\n}";
  r(b);
  const v = document.createElement("template"), C = document.createElement("style"), L = document.createElement("style");
  C.textContent = _, L.textContent = b;
  v.innerHTML = `
  <div id="pera-wallet-connect-modal-desktop-mode" class="pera-wallet-connect-modal-desktop-mode pera-wallet-connect-modal-desktop-mode--default">
      <pera-wallet-connect-modal-information-section></pera-wallet-connect-modal-information-section>

      <div class="pera-wallet-connect-modal-desktop-mode__default-view"></div>
       

      <div class="pera-wallet-connect-modal-desktop-mode__download-view">
        <button
          id="pera-wallet-connect-modal-download-pera-view-back-button"
          class="pera-wallet-connect-modal-download-pera-view__back-button">
          <img
            src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.7071 6.29387C11.0976 6.68439 11.0976 7.31756 10.7071 7.70808L7.41421 11.001L19 11.001C19.5523 11.001 20 11.4487 20 12.001C20 12.5533 19.5523 13.001 19 13.001L7.41421 13.001L10.7071 16.2939C11.0976 16.6844 11.0976 17.3176 10.7071 17.7081C10.3166 18.0986 9.68342 18.0986 9.29289 17.7081L4.29289 12.7081C4.10536 12.5205 4 12.2662 4 12.001C4 11.7358 4.10536 11.4814 4.29289 11.2939L9.29289 6.29387C9.68342 5.90335 10.3166 5.90335 10.7071 6.29387Z' fill='%233C3C49'/%3e%3c/svg%3e"
            alt="Back Arrow"
          />

          Back
        </button>

        <div class="pera-wallet-connect-modal-download-pera-view">
          <h1 class="pera-wallet-connect-modal-download-pera-view__title">
            Download Pera Wallet
          </h1>

          <pera-wallet-download-qr-code></pera-wallet-download-qr-code>

          <div class="pera-wallet-connect-modal-download-pera-view__footer">
            <a
              href="https://apps.apple.com/us/app/algorand-wallet/id1459898525"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M25.6308 20.3011C25.6416 19.4664 25.8633 18.6481 26.2753 17.9221C26.6873 17.1962 27.2763 16.5863 27.9873 16.1491C27.5356 15.5039 26.9397 14.973 26.2469 14.5984C25.554 14.2239 24.7834 14.016 23.9963 13.9914C22.317 13.8151 20.6891 14.9962 19.8333 14.9962C18.9611 14.9962 17.6436 14.0089 16.2249 14.0381C15.3072 14.0677 14.4128 14.3346 13.6289 14.8126C12.8451 15.2906 12.1984 15.9636 11.7519 16.7659C9.81789 20.1144 11.2605 25.0354 13.1132 27.742C14.0401 29.0674 15.1233 30.5478 16.5408 30.4953C17.9278 30.4378 18.4458 29.6108 20.1202 29.6108C21.779 29.6108 22.265 30.4953 23.7112 30.4619C25.1995 30.4378 26.1372 29.1307 27.0316 27.7928C27.6976 26.8484 28.2101 25.8047 28.55 24.7003C27.6853 24.3345 26.9474 23.7224 26.4283 22.9401C25.9092 22.1578 25.6318 21.2399 25.6308 20.3011ZM22.8993 12.2113C23.7108 11.2371 24.1106 9.98492 24.0138 8.7207C22.7739 8.85092 21.6287 9.44347 20.8062 10.3803C20.404 10.838 20.096 11.3704 19.8998 11.9472C19.7035 12.5239 19.6229 13.1337 19.6625 13.7417C20.2826 13.7481 20.8961 13.6137 21.4568 13.3486C22.0175 13.0835 22.5107 12.6946 22.8993 12.2113Z' fill='white'/%3e%3c/svg%3e" alt="App Store icon" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.algorand.android"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M12.41 9.7719C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922V10.8671V29.1294V29.0091C11.9683 29.5202 12.1099 29.9149 12.3497 30.169L12.4109 30.2277V30.228C12.6051 30.4035 12.854 30.4966 13.1393 30.4963C13.418 30.4963 13.7316 30.4073 14.0626 30.2194L26.0264 23.4107L30.1359 21.0717C30.6578 20.7748 30.9508 20.3917 30.9998 20.0014V19.9998C30.9508 19.6087 30.6578 19.2259 30.1359 18.9289L26.0261 16.5902L14.0627 9.78154C13.731 9.59325 13.4171 9.50391 13.1376 9.50391C12.8527 9.50391 12.6041 9.59677 12.41 9.7719H12.41Z' fill='%2300C1FF'/%3e%3cpath d='M12.411 30.2285L12.3497 30.1698C12.1099 29.9157 11.9683 29.5209 11.9683 29.0098V29.1301V10.8724V10.993C11.9683 10.4396 12.1334 10.0226 12.41 9.77268L22.622 20.0009L12.411 30.2285Z' fill='url(%23paint0_linear_173_14441)'/%3e%3cpath d='M26.0256 23.4102L22.6211 19.9996L26.0253 16.5896L30.1351 18.9283C30.657 19.2253 30.95 19.6081 30.9989 19.9993V20.0008C30.95 20.3911 30.657 20.7742 30.1351 21.0712L26.0256 23.4101' fill='url(%23paint1_linear_173_14441)'/%3e%3cpath d='M13.1374 30.4961C12.8522 30.4964 12.6033 30.4032 12.4092 30.2277V30.2275L22.6202 19.9999L26.0246 23.4104L14.0608 30.2191C13.7298 30.4071 13.4162 30.4961 13.1374 30.4961Z' fill='url(%23paint2_linear_173_14441)'/%3e%3cpath d='M22.6212 20.002L12.4092 9.7737C12.6033 9.59858 12.8519 9.50571 13.1368 9.50571C13.4163 9.50571 13.7302 9.59501 14.0618 9.78335L26.0253 16.592L22.6212 20.002' fill='url(%23paint3_linear_173_14441)'/%3e%3cpath d='M13.1394 30.6172C12.8542 30.6172 12.6049 30.524 12.4108 30.3486L12.4105 30.3489C12.4097 30.3481 12.4088 30.3473 12.4079 30.3466L12.3548 30.2947C12.3531 30.2931 12.3516 30.2912 12.3496 30.2893L12.4108 30.2279C12.6049 30.4034 12.8538 30.4966 13.1392 30.4962C13.4179 30.4962 13.7315 30.4073 14.0625 30.2193L26.0263 23.4106L26.1029 23.4874L26.0253 23.5316L14.0625 30.3398C13.7608 30.5111 13.4739 30.6004 13.2147 30.6153C13.1896 30.6165 13.1645 30.6171 13.1394 30.6172' fill='url(%23paint4_linear_173_14441)'/%3e%3cpath d='M12.3497 30.2891C12.1099 30.0349 11.9683 29.6406 11.9683 29.1292V29.0089C11.9683 29.52 12.1099 29.9146 12.3497 30.1688L12.4109 30.2275L12.3497 30.2891Z' fill='url(%23paint5_linear_173_14441)'/%3e%3cpath d='M26.1025 23.4882L26.0259 23.4114L30.1349 21.0727C30.6568 20.7758 30.9498 20.3927 30.9987 20.0025C30.9987 20.1457 30.9668 20.2889 30.9035 20.4282C30.7756 20.7091 30.5194 20.9744 30.135 21.1934L26.1025 23.4883' fill='url(%23paint6_linear_173_14441)'/%3e%3cpath d='M30.9991 20C30.9501 19.6089 30.6571 19.2261 30.1353 18.9291L26.0259 16.5907L26.1025 16.5139H26.1029L30.1353 18.8088C30.7106 19.1365 30.9987 19.5682 30.9991 20Z' fill='url(%23paint7_linear_173_14441)'/%3e%3cpath d='M11.9683 10.9922V10.8661C11.9683 10.8206 11.9695 10.7761 11.9718 10.7329V10.7309C11.9718 10.7303 11.9718 10.7297 11.972 10.729V10.7242C11.9969 10.284 12.1334 9.94066 12.3497 9.71139L12.4099 9.77198C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922Z' fill='url(%23paint8_linear_173_14441)'/%3e%3cpath d='M26.026 16.5898L14.0625 9.78115C13.7308 9.59285 13.417 9.50355 13.1375 9.50355C12.8525 9.50355 12.6039 9.59642 12.4099 9.77154L12.3496 9.71091C12.3684 9.69096 12.388 9.67172 12.4082 9.65322C12.4089 9.65255 12.4099 9.65188 12.4105 9.65125C12.6031 9.47747 12.849 9.3846 13.1314 9.38293H13.1375C13.417 9.38293 13.7308 9.47227 14.0625 9.66064L26.1029 16.5128L26.1026 16.513L26.026 16.5898Z' fill='url(%23paint9_linear_173_14441)'/%3e%3cdefs%3e%3clinearGradient id='paint0_linear_173_14441' x1='18.4943' y1='10.6794' x2='9.69389' y2='19.494' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2300A0FF'/%3e%3cstop offset='0.00657' stop-color='%2300A1FF'/%3e%3cstop offset='0.2601' stop-color='%2300BEFF'/%3e%3cstop offset='0.5122' stop-color='%2300D2FF'/%3e%3cstop offset='0.7604' stop-color='%2300DFFF'/%3e%3cstop offset='1' stop-color='%2300E3FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_173_14441' x1='31.6348' y1='19.9407' x2='11.691' y2='19.9407' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE000'/%3e%3cstop offset='0.4087' stop-color='%23FFBD00'/%3e%3cstop offset='0.7754' stop-color='orange'/%3e%3cstop offset='1' stop-color='%23FF9C00'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_173_14441' x1='24.2172' y1='23.2425' x2='9.30414' y2='38.0705' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF3A44'/%3e%3cstop offset='1' stop-color='%23C31162'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_173_14441' x1='9.77725' y1='8.25731' x2='16.4237' y2='14.876' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2332A071'/%3e%3cstop offset='0.0685' stop-color='%232DA771'/%3e%3cstop offset='0.4762' stop-color='%2315CF74'/%3e%3cstop offset='0.8009' stop-color='%2306E775'/%3e%3cstop offset='1' stop-color='%2300F076'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear_173_14441' x1='24.2114' y1='25.6084' x2='12.2683' y2='37.5709' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23CC2E36'/%3e%3cstop offset='1' stop-color='%239C0E4E'/%3e%3c/linearGradient%3e%3clinearGradient id='paint5_linear_173_14441' x1='13.3285' y1='10.6804' x2='5.57625' y2='18.4453' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23008DE0'/%3e%3cstop offset='0.00657' stop-color='%23008DE0'/%3e%3cstop offset='0.2601' stop-color='%2300A7E0'/%3e%3cstop offset='0.5122' stop-color='%2300B8E0'/%3e%3cstop offset='0.7604' stop-color='%2300C4E0'/%3e%3cstop offset='1' stop-color='%2300C7E0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint6_linear_173_14441' x1='31.6346' y1='20.0018' x2='11.6929' y2='20.0018' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23E0C500'/%3e%3cstop offset='0.4087' stop-color='%23E0A600'/%3e%3cstop offset='0.7754' stop-color='%23E09100'/%3e%3cstop offset='1' stop-color='%23E08900'/%3e%3c/linearGradient%3e%3clinearGradient id='paint7_linear_173_14441' x1='31.6349' y1='20.0008' x2='11.6933' y2='20.0008' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE840'/%3e%3cstop offset='0.4087' stop-color='%23FFCE40'/%3e%3cstop offset='0.7754' stop-color='%23FFBC40'/%3e%3cstop offset='1' stop-color='%23FFB540'/%3e%3c/linearGradient%3e%3clinearGradient id='paint8_linear_173_14441' x1='13.3201' y1='10.6927' x2='5.8533' y2='17.8475' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2340B8FF'/%3e%3cstop offset='0.00657' stop-color='%2340B9FF'/%3e%3cstop offset='0.2601' stop-color='%2340CEFF'/%3e%3cstop offset='0.5122' stop-color='%2340DDFF'/%3e%3cstop offset='0.7604' stop-color='%2340E7FF'/%3e%3cstop offset='1' stop-color='%2340EAFF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint9_linear_173_14441' x1='9.76302' y1='10.4182' x2='15.0961' y2='15.76' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2365B895'/%3e%3cstop offset='0.0685' stop-color='%2362BD95'/%3e%3cstop offset='0.4762' stop-color='%2350DB97'/%3e%3cstop offset='0.8009' stop-color='%2344ED98'/%3e%3cstop offset='1' stop-color='%2340F498'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="Play Store icon" />
            </a>

            <a
              class="pera-wallet-connect-modal-download-pera-view__footer__button"
              href="https://perawallet.s3-eu-west-3.amazonaws.com/android-releases/app-pera-prod-release-bitrise-signed.apk"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 14V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V14' stroke='%232C3559' stroke-width='1.5'/%3e%3cpath d='M11.9998 16V3M11.9998 16L7.47803 11.4783M11.9998 16L16.5215 11.4783' stroke='%232C3559' stroke-width='1.5'/%3e%3c/svg%3e" alt="Download icon" />

              Download APK File
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  class k extends HTMLElement {
    constructor() {
      var e3;
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        this.shadowRoot.append(v.content.cloneNode(true), C, L), this.shadowRoot.addEventListener("click", (e4) => {
          this.handleAccordion(e4);
        });
        if ("true" === this.getAttribute("compact-mode")) {
          const e4 = this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");
          null == e4 || e4.classList.add("pera-wallet-connect-modal-desktop-mode--compact");
        }
        const n2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.querySelector(".pera-wallet-connect-modal-desktop-mode__default-view"), t2 = "true" === this.getAttribute("promote-mobile"), { webWalletOption: a2, mobileWalletOption: o2 } = function(e4) {
          const n3 = `
  <div id="web-wallet-option" class="pera-wallet-accordion-item ${e4 ? "" : "pera-wallet-accordion-item--active"}  pera-wallet-accordion-item--web-wallet">
            <a class="pera-wallet-accordion-toggle">
              <button class="pera-wallet-accordion-toggle__button"></button>
  
              <img src="${u}" class="pera-wallet-accordion-icon" />
  
              <div class="pera-wallet-accordion-toggle__content-with-label">
                <div class="pera-wallet-accordion-toggle__content-with-label__text">
                  Connect With
  
                  <span class="pera-wallet-accordion-toggle__bold-color">
                    Pera Web
                  </span>
                </div>
  
                <span id="pera-web-new-label" class="pera-wallet-accordion-toggle__label">NEW</span>
              </div>
            </a>
  
            <div class="pera-wallet-accordion-item__content">
              <div class="pera-wallet-connect-modal-desktop-mode__web-wallet"><div>
              
              <div
                class="pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper">
                <img src="data:image/svg+xml,%3csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='3.5' y='7.5' width='36' height='26' rx='5.5' stroke='%236B46FE' stroke-width='3'/%3e%3cpath d='M22.4973 14.5237C22.8556 16.041 22.7344 17.3757 22.2267 17.5048C21.719 17.6339 21.0169 16.5085 20.6586 14.9912C20.3003 13.4739 20.4214 12.1392 20.9292 12.0101C21.4369 11.881 22.1389 13.0064 22.4973 14.5237Z' fill='%236B46FE'/%3e%3cpath d='M28.4139 15.8282C27.6204 14.9686 26.0417 15.2016 24.8877 16.3486C23.7338 17.4956 23.4417 19.1222 24.2352 19.9818C25.0287 20.8414 26.6074 20.6084 27.7613 19.4614C28.9153 18.3144 29.2074 16.6878 28.4139 15.8282Z' fill='%236B46FE'/%3e%3cpath d='M22.1027 28.9905C22.6104 28.8614 22.7137 27.4512 22.3334 25.8407C21.9531 24.2303 21.2332 23.0294 20.7254 23.1585C20.2177 23.2876 20.1144 24.6978 20.4947 26.3083C20.875 27.9187 21.5949 29.1196 22.1027 28.9905Z' fill='%236B46FE'/%3e%3cpath d='M16.9269 16.6152C18.3917 17.0567 19.4621 17.8312 19.3176 18.3452C19.1731 18.8591 17.8686 18.9179 16.4037 18.4764C14.9389 18.0349 13.8686 17.2603 14.0131 16.7464C14.1575 16.2324 15.4621 16.1737 16.9269 16.6152Z' fill='%236B46FE'/%3e%3cpath d='M26.4342 22.4188C27.9889 22.8874 29.1322 23.6839 28.9877 24.1979C28.8432 24.7118 27.4657 24.7486 25.911 24.28C24.3563 23.8114 23.213 23.0148 23.3575 22.5009C23.502 21.9869 24.8795 21.9502 26.4342 22.4188Z' fill='%236B46FE'/%3e%3cpath d='M18.5752 21.3404C18.2119 20.9555 17.0205 21.5157 15.914 22.5915C14.8075 23.6673 14.2049 24.8514 14.5682 25.2363C14.9314 25.6211 16.1229 25.061 17.2294 23.9852C18.3359 22.9094 18.9384 21.7253 18.5752 21.3404Z' fill='%236B46FE'/%3e%3cpath d='M16 39C21 39.0001 23.5 39.0001 28 39' stroke='%236B46FE' stroke-width='3' stroke-linecap='round'/%3e%3c/svg%3e" />
              </div>
  
              <p
                class="pera-wallet-connect-modal-desktop-mode__web-wallet__description">
                Connect with Pera Web to continue
              </p>
            </div>
  
            <button
              id="pera-wallet-connect-web-wallet-launch-button"
              class="pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button">
              Launch Pera Web
  
              <img src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.0892 9.41009C13.4147 9.73553 13.4147 10.2632 13.0892 10.5886L8.08924 15.5886C7.7638 15.914 7.23616 15.914 6.91072 15.5886C6.58529 15.2632 6.58529 14.7355 6.91072 14.4101L11.3215 9.99935L6.91073 5.5886C6.58529 5.26317 6.58529 4.73553 6.91073 4.41009C7.23616 4.08466 7.7638 4.08466 8.08924 4.41009L13.0892 9.41009Z' fill='white'/%3e%3c/svg%3e" />
            </button>
          </div>`, t3 = `
  <div id="mobile-wallet-option" class="pera-wallet-accordion-item ${e4 ? "pera-wallet-accordion-item--active" : ""}">
            <a class="pera-wallet-accordion-toggle">
            <button class="pera-wallet-accordion-toggle__button"></button>
  
              <img src="${u}" class="pera-wallet-accordion-icon" />
  
              <div class="pera-wallet-accordion-toggle__text">
                Connect with
  
                <span class="pera-wallet-accordion-toggle__bold-color">
                  Pera Mobile
                </span>
              </div>
            </a>
  
            <div class="pera-wallet-accordion-item__content">
              <div id="pera-wallet-connect-modal-connect-qr-code" class="pera-wallet-connect-qr-code-wrapper"></div>
  
              <div class="pera-wallet-connect-modal-desktop-mode__download-pera-container">
                <p
                  class="pera-wallet-connect-modal-desktop-mode__download-pera-description">
                    Don’t have Pera Wallet app?
                </p>
  
                <button
                  id="pera-wallet-connect-modal-desktop-mode-download-pera-button"
                  class="pera-wallet-connect-modal-desktop-mode__download-pera-button">
                  <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='2' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3crect x='2' y='9.33203' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3crect x='9.33325' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3cpath d='M8.70581 9.5293H10.9411' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 12.668L14.6667 12.668' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 14L14.6667 14' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M11.686 14L13.1762 14' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M12.4314 9.5293H14.6667' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M8.70581 10.2754H12.4313' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.7656H11.6862' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 12.5117H11.6862' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 13.2539H10.196' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 14H10.196' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.0195H12.4313' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3c/svg%3e" alt="QR Icon" />
  
                  Download Pera Wallet
                </button>
              </div>
            </div>
          </div>`;
          return { mobileWalletOption: document.createRange().createContextualFragment(t3), webWalletOption: document.createRange().createContextualFragment(n3) };
        }(t2);
        t2 ? (null == n2 || n2.appendChild(o2), null == n2 || n2.appendChild(a2)) : (null == n2 || n2.appendChild(a2), null == n2 || n2.appendChild(o2));
      }
    }
    connectedCallback() {
      var e3;
      const n2 = this.getAttribute("should-display-new-badge"), t2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.getElementById("pera-web-new-label");
      "false" === n2 && (null == t2 || t2.setAttribute("style", "display:none")), this.handleChangeView();
    }
    handleChangeView() {
      var e3, n2, t2;
      const a2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.getElementById("pera-wallet-connect-modal-desktop-mode-download-pera-button"), o2 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("pera-wallet-connect-modal-download-pera-view-back-button"), l2 = null === (t2 = this.shadowRoot) || void 0 === t2 ? void 0 : t2.getElementById("pera-wallet-connect-web-wallet-launch-button");
      a2 && a2.addEventListener("click", () => {
        this.onClickDownload();
      }), o2 && o2.addEventListener("click", () => {
        this.onClickBack();
      }), l2 && l2.addEventListener("click", () => {
        this.webWalletConnect();
      }), this.renderQRCode(), this.checkWebWalletAvaliability();
    }
    webWalletConnect() {
      "true" === this.getAttribute("is-web-wallet-avaliable") && window.onWebWalletConnect();
    }
    handleAccordion(e3) {
      var n2, t2;
      if (e3.target instanceof Element) {
        if (!e3.target.classList.contains("pera-wallet-accordion-toggle__button"))
          return;
        if (this.shadowRoot && (null === (n2 = e3.target.parentElement) || void 0 === n2 ? void 0 : n2.parentElement)) {
          const n3 = null === (t2 = e3.target.parentElement) || void 0 === t2 ? void 0 : t2.parentElement;
          if (!n3)
            return;
          if (n3.classList.contains("pera-wallet-accordion-item--active"))
            return;
          const a2 = this.shadowRoot.querySelectorAll(".pera-wallet-accordion-item.pera-wallet-accordion-item--active");
          for (let e4 = 0; e4 < a2.length; e4++)
            a2[e4].classList.remove("pera-wallet-accordion-item--active");
          n3.classList.toggle("pera-wallet-accordion-item--active");
        }
      }
    }
    renderQRCode() {
      var e3;
      const n2 = this.getAttribute("uri");
      let t2 = "false" === this.getAttribute("is-web-wallet-avaliable") ? 250 : 205;
      if ("true" === this.getAttribute("compact-mode") && (t2 = 190), n2) {
        const a2 = new o.default({ width: t2, height: t2, type: "svg", data: n2, image: h, dotsOptions: { color: "#000", type: "extra-rounded" }, imageOptions: { crossOrigin: "anonymous", margin: 8 }, cornersSquareOptions: { type: "extra-rounded" }, cornersDotOptions: { type: "dot" } }), l2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.getElementById("pera-wallet-connect-modal-connect-qr-code");
        l2 && a2.append(l2);
      }
    }
    onClickDownload() {
      if (this.shadowRoot) {
        const e3 = this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");
        e3 && (e3.classList.remove("pera-wallet-connect-modal-desktop-mode--default"), e3.classList.add("pera-wallet-connect-modal-desktop-mode--download"));
      }
    }
    onClickBack() {
      if (this.shadowRoot) {
        const e3 = this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");
        e3 && (e3.classList.add("pera-wallet-connect-modal-desktop-mode--default"), e3.classList.remove("pera-wallet-connect-modal-desktop-mode--download"));
      }
    }
    checkWebWalletAvaliability() {
      var e3;
      if ("false" === this.getAttribute("is-web-wallet-avaliable")) {
        const n2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.querySelector(".pera-wallet-connect-modal-desktop-mode__default-view");
        null == n2 || n2.classList.add("pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable");
      }
    }
  }
  var y = ".pera-wallet-connect-modal-touch-screen-mode {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 46px;\n  padding: 4px;\n}\n\n.pera-wallet-connect-modal-touch-screen-mode--pending-message-view {\n  gap: 56px;\n  grid-template-rows: auto 48px;\n  height: 100%;\n  padding-bottom: 70px;\n}\n\n.pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button,\n.pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button {\n  display: block;\n  padding: 14px;\n  border-radius: 12px;\n  text-decoration: none;\n  text-align: center;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.09px;\n  font-weight: 500;\n}\n\n.pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button {\n  margin-bottom: 32px;\n  background-color: #6b46fe;\n  color: #ffffff;\n}\n\n.pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button {\n  margin-bottom: 20px;\n  color: #6a6a81;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);\n}\n\n.pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box {\n  position: relative;\n  margin-bottom: 32px;\n  border-top: 1px solid #e6e8ee;\n}\n\n.pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box__text {\n  position: absolute;\n  top: -25px;\n  right: calc(50% - 56px);\n  width: 116px;\n  color: #69708d;\n  background-color: #ffffff;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.04px;\n  text-align: center;\n}";
  r(y);
  const M = document.createElement("template");
  class E extends HTMLElement {
    constructor() {
      var n2;
      if (super(), this.attachShadow({ mode: "open" }), M.innerHTML = '\n  <div class="pera-wallet-connect-modal-touch-screen-mode">\n    <pera-wallet-connect-modal-information-section></pera-wallet-connect-modal-information-section>\n\n    <div>\n      <a\n        id="pera-wallet-connect-modal-touch-screen-mode-launch-pera-wallet-button"\n        class="pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button"\n        rel="noopener noreferrer"\n        target="_blank">\n        Launch Pera Wallet\n      </a>\n\n      <div\n        class="pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box">\n        <p\n          class="pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box__text"\n          >\n          New to Pera?\n        </p>\n      </div>\n\n      <a\n        href="https://perawallet.app/download/"\n        class="pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button"\n        rel="noopener noreferrer"\n        target="_blank">\n        Install Pera Wallet\n      </a>\n    </div>\n  </div>\n', this.shadowRoot) {
        const t2 = document.createElement("style");
        t2.textContent = y, this.shadowRoot.append(M.content.cloneNode(true), t2);
        const a2 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("pera-wallet-connect-modal-touch-screen-mode-launch-pera-wallet-button"), o2 = this.getAttribute("uri");
        a2 && o2 && (a2.setAttribute("href", function(n3) {
          let t3 = i(false);
          e2.isIOS() && !t3.includes("-wc") && (t3 = t3.replace("://", "-wc://"));
          let a3 = `${t3}wc?uri=${encodeURIComponent(n3)}`;
          const o3 = e2.detectBrowser();
          return e2.isAndroid() && (a3 = n3), o3 && (a3 = `${a3}&browser=${encodeURIComponent(o3)}`), a3;
        }(o2)), a2.addEventListener("click", () => {
          this.onClickLaunch();
        }));
      }
    }
    onClickLaunch() {
      if (M.innerHTML = `
    <div class="pera-wallet-connect-modal-touch-screen-mode pera-wallet-connect-modal-touch-screen-mode--pending-message-view">
      <pera-wallet-connect-modal-pending-message-section should-use-sound="${this.getAttribute("should-use-sound")}"></pera-wallet-connect-modal-pending-message-section>
    </div>
  `, this.shadowRoot) {
        const e3 = document.createElement("style");
        e3.textContent = y, this.shadowRoot.innerHTML = "", this.shadowRoot.append(M.content.cloneNode(true), e3);
      }
    }
  }
  var z = '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");\n.pera-wallet-modal {\n  --pera-wallet-modal-font-family: "Inter", sans-serif;\n  --pera-wallet-modal-compact-width: 380px;\n  --pera-wallet-modal-compact-height: 396px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 999999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.pera-wallet-modal--select-account .pera-wallet-modal__body {\n  width: 480px;\n  height: 578px;\n  background-color: #ffffff;\n}\n.pera-wallet-modal--mobile .pera-wallet-modal__body {\n  top: 40px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  max-width: unset;\n  height: calc(100 * var(--vh));\n  padding: 20px;\n  background-color: #ffffff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);\n  border-radius: 20px 20px 0px 0px;\n  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;\n  overflow-y: auto;\n  transform: unset;\n}\n.pera-wallet-modal--mobile .pera-wallet-modal__body::before {\n  background-image: unset;\n}\n.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {\n  width: var(--pera-wallet-modal-compact-width);\n  height: var(--pera-wallet-modal-compact-height);\n  padding: 0;\n}\n.pera-wallet-modal * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: var(--pera-wallet-modal-font-family);\n  font-smooth: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.pera-wallet-modal ul,\n.pera-wallet-modal ol,\n.pera-wallet-modal li {\n  list-style-type: none;\n}\n\n.pera-wallet-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 48px;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--pera-wallet-modal-font-family);\n  font-size: 14px;\n}\n\n.pera-wallet-modal__logo img {\n  display: block;\n  width: 32px;\n}\n\n.pera-wallet-modal__body {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 700px;\n  max-width: calc(100vw - 80px);\n  padding: 28px;\n  background-color: #f3f3f7;\n  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);\n  border-radius: 24px;\n  animation: 0.3s PeraWalletConnectSlideIn ease-out;\n  transform: translate(-50%, -50%);\n}\n.pera-wallet-modal__body::before {\n  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  content: "";\n  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));\n  background-size: 116px 116px;\n  mix-blend-mode: overlay;\n  border-radius: 24px;\n  opacity: 0.8;\n  pointer-events: none;\n}\n\n@media (max-width: 767px) {\n  .pera-wallet-modal--desktop .pera-wallet-modal__body {\n    width: 100%;\n    max-width: calc(100vw - 32px);\n    padding: 24px;\n  }\n}\n@keyframes PeraWalletConnectSlideIn {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, calc(-50% + 24px));\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes PeraWalletConnectMobileSlideIn {\n  0% {\n    top: 30%;\n    opacity: 0;\n  }\n  100% {\n    top: 40px;\n    opacity: 1;\n  }\n}';
  r(z);
  const A = document.createElement("template");
  let Z = e2.isMobile() ? `${e2.PERA_WALLET_MODAL_CLASSNAME} ${e2.PERA_WALLET_MODAL_CLASSNAME}--mobile` : `${e2.PERA_WALLET_MODAL_CLASSNAME} ${e2.PERA_WALLET_MODAL_CLASSNAME}--desktop`;
  class H extends HTMLElement {
    constructor() {
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const n2 = document.createElement("style");
        n2.textContent = z;
        "true" === this.getAttribute("compact-mode") && (Z = `${Z} ${e2.PERA_WALLET_MODAL_CLASSNAME}--compact`), c() && e2.isMobile() ? (A.innerHTML = `
        <div class="${Z}">
          <div class="pera-wallet-modal__body" part="body">
            <pera-wallet-modal-header modal-id="${e2.PERA_WALLET_CONNECT_MODAL_ID}"></pera-wallet-modal-header/>
      
            <pera-wallet-modal-touch-screen-mode uri="${this.getAttribute("uri")}" should-use-sound="${this.getAttribute("should-use-sound")}"></pera-wallet-modal-touch-screen-mode>
          </div>
        </div>
      `, this.shadowRoot.append(A.content.cloneNode(true), n2)) : (A.innerHTML = `
          <div class="${Z}">
            <div class="pera-wallet-modal__body">
              <pera-wallet-modal-header modal-id="${e2.PERA_WALLET_CONNECT_MODAL_ID}"></pera-wallet-modal-header/>
        
              <pera-wallet-modal-desktop-mode id="pera-wallet-modal-desktop-mode" uri="${this.getAttribute("uri")}" is-web-wallet-avaliable="${this.getAttribute("is-web-wallet-avaliable")}" should-display-new-badge="${this.getAttribute("should-display-new-badge")}" compact-mode="${this.getAttribute("compact-mode")}" promote-mobile="${this.getAttribute("promote-mobile")}"></pera-wallet-modal-desktop-mode>
            </div>
          </div>
        `, this.shadowRoot.append(A.content.cloneNode(true), n2));
      }
    }
  }
  var B = '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");\n.pera-wallet-modal {\n  --pera-wallet-modal-font-family: "Inter", sans-serif;\n  --pera-wallet-modal-compact-width: 380px;\n  --pera-wallet-modal-compact-height: 396px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 999999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.pera-wallet-modal--select-account .pera-wallet-modal__body {\n  width: 480px;\n  height: 578px;\n  background-color: #ffffff;\n}\n.pera-wallet-modal--mobile .pera-wallet-modal__body {\n  top: 40px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  max-width: unset;\n  height: calc(100 * var(--vh));\n  padding: 20px;\n  background-color: #ffffff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);\n  border-radius: 20px 20px 0px 0px;\n  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;\n  overflow-y: auto;\n  transform: unset;\n}\n.pera-wallet-modal--mobile .pera-wallet-modal__body::before {\n  background-image: unset;\n}\n.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {\n  width: var(--pera-wallet-modal-compact-width);\n  height: var(--pera-wallet-modal-compact-height);\n  padding: 0;\n}\n.pera-wallet-modal * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: var(--pera-wallet-modal-font-family);\n  font-smooth: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.pera-wallet-modal ul,\n.pera-wallet-modal ol,\n.pera-wallet-modal li {\n  list-style-type: none;\n}\n\n.pera-wallet-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 48px;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--pera-wallet-modal-font-family);\n  font-size: 14px;\n}\n\n.pera-wallet-modal__logo img {\n  display: block;\n  width: 32px;\n}\n\n.pera-wallet-modal__body {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 700px;\n  max-width: calc(100vw - 80px);\n  padding: 28px;\n  background-color: #f3f3f7;\n  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);\n  border-radius: 24px;\n  animation: 0.3s PeraWalletConnectSlideIn ease-out;\n  transform: translate(-50%, -50%);\n}\n.pera-wallet-modal__body::before {\n  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  content: "";\n  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));\n  background-size: 116px 116px;\n  mix-blend-mode: overlay;\n  border-radius: 24px;\n  opacity: 0.8;\n  pointer-events: none;\n}\n\n@media (max-width: 767px) {\n  .pera-wallet-modal--desktop .pera-wallet-modal__body {\n    width: 100%;\n    max-width: calc(100vw - 32px);\n    padding: 24px;\n  }\n}\n@keyframes PeraWalletConnectSlideIn {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, calc(-50% + 24px));\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes PeraWalletConnectMobileSlideIn {\n  0% {\n    top: 30%;\n    opacity: 0;\n  }\n  100% {\n    top: 40px;\n    opacity: 1;\n  }\n}\n.pera-wallet-redirect-modal {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 56px;\n  grid-template-rows: auto 48px;\n  height: 100%;\n  padding: 4px;\n  padding-bottom: 70px;\n}\n\n.pera-wallet-redirect-modal__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.pera-wallet-redirect-modal__content__title {\n  margin: 20px 0 8px;\n  color: #3c3c49;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: -0.26px;\n}\n\n.pera-wallet-redirect-modal__content__description,\n.pera-wallet-redirect-modal__content__install-pera-text {\n  color: #3c3c49;\n  max-width: 271px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: -0.09px;\n  text-align: center;\n}\n\n.pera-wallet-redirect-modal__content__description {\n  margin-bottom: 24px;\n}\n\n.pera-wallet-redirect-modal__content__install-pera-text__link {\n  color: #6b46fe;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: -0.09px;\n  text-align: center;\n}\n\n.pera-wallet-redirect-modal__launch-pera-wallet-button {\n  display: block;\n  padding: 14px;\n  color: #ffffff;\n  background-color: #6b46fe;\n  border-radius: 12px;\n  text-decoration: none;\n  text-align: center;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.09px;\n  font-weight: 500;\n}';
  r(B);
  const F = document.createElement("template");
  F.innerHTML = `
  <div class="pera-wallet-modal pera-wallet-modal--mobile">
    <div class="pera-wallet-modal__body">
      <pera-wallet-modal-header modal-id="${e2.PERA_WALLET_REDIRECT_MODAL_ID}"></pera-wallet-modal-header/>

      <div class="pera-wallet-redirect-modal">
        <div class="pera-wallet-redirect-modal__content">
          <img src="data:image/svg+xml,%3csvg width='120' height='38' viewBox='0 0 120 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_38844_290434)'%3e%3cpath d='M103.739 28.6746H109.565' stroke='%236B46FE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M112.25 37H100.75C97.5731 37 95 34.2336 95 30.8182V9.18182C95 5.76636 97.5731 3 100.75 3H112.25C115.427 3 118 5.76636 118 9.18182V30.8182C118 34.2336 115.427 37 112.25 37Z' fill='%236B46FE' fill-opacity='0.1' stroke='%236B46FE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3crect y='1' width='36' height='36' rx='7.76829' fill='%236B46FE' fill-opacity='0.1'/%3e%3cpath d='M19.6057 9.47351C20.1851 11.8819 19.9967 14.0022 19.1848 14.2093C18.373 14.4164 17.2452 12.6319 16.6658 10.2235C16.0864 7.81514 16.2748 5.69486 17.0867 5.48775C17.8985 5.28063 19.0263 7.06512 19.6057 9.47351Z' fill='%236B46FE'/%3e%3cpath d='M29.0775 11.5213C27.8045 10.1593 25.2795 10.5358 23.4378 12.3621C21.5961 14.1885 21.1352 16.7732 22.4083 18.1352C23.6814 19.4972 26.2064 19.1207 28.048 17.2943C29.8897 15.4679 30.3506 12.8832 29.0775 11.5213Z' fill='%236B46FE'/%3e%3cpath d='M19.0324 32.4518C19.8443 32.2446 20.0039 30.0045 19.3889 27.4483C18.774 24.8921 17.6173 22.9877 16.8055 23.1948C15.9937 23.402 15.834 25.6421 16.449 28.1983C17.064 30.7545 18.2206 32.6589 19.0324 32.4518Z' fill='%236B46FE'/%3e%3cpath d='M10.7016 12.818C13.0471 13.5132 14.7627 14.739 14.5336 15.5559C14.3045 16.3728 12.2175 16.4714 9.87199 15.7762C7.52653 15.0809 5.81087 13.8551 6.03996 13.0383C6.26906 12.2214 8.35615 12.1228 10.7016 12.818Z' fill='%236B46FE'/%3e%3cpath d='M25.9365 21.9967C28.4259 22.7346 30.2583 23.995 30.0292 24.8119C29.8001 25.6287 27.5963 25.6927 25.1069 24.9548C22.6174 24.2169 20.7851 22.9565 21.0141 22.1397C21.2432 21.3228 23.447 21.2588 25.9365 21.9967Z' fill='%236B46FE'/%3e%3cpath d='M13.3578 20.316C12.775 19.7063 10.8709 20.6007 9.10487 22.3139C7.33879 24.0271 6.37952 25.9102 6.96226 26.5199C7.54501 27.1297 9.4491 26.2352 11.2152 24.522C12.9813 22.8089 13.9405 20.9258 13.3578 20.316Z' fill='%236B46FE'/%3e%3cpath d='M70.2098 10L75.3049 15.0945L52 15.0945' stroke='%23D0CAE7' stroke-width='3'/%3e%3cpath d='M60.7902 29.5945L55.6951 24.5L79 24.5' stroke='%23D0CAE7' stroke-width='3'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_38844_290434'%3e%3crect width='120' height='38' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />

          <h1 class="pera-wallet-redirect-modal__content__title">
            Can't Launch Pera
          </h1>

          <p class="pera-wallet-redirect-modal__content__description">
            We couldn't redirect you to Pera Wallet automatically. Please try again.
          </p>

          <p class="pera-wallet-redirect-modal__content__install-pera-text">
            Don't have Pera Wallet installed yet?
            <br />
            
            <a
              id="pera-wallet-redirect-modal-download-pera-link"
              class="pera-wallet-redirect-modal__content__install-pera-text__link"
              href="https://perawallet.app/download/"
              rel="noopener noreferrer"
              target="_blank">
              Tap here to install.
            </a>
          </p>
        </div>

        <a
          id="pera-wallet-redirect-modal-launch-pera-link"
          class="pera-wallet-redirect-modal__launch-pera-wallet-button"
          rel="noopener noreferrer"
          target="_blank">
          Launch Pera Wallet
        </a>
      </div>
    </div>
  </div>
`;
  class R extends HTMLElement {
    constructor() {
      var e3, n2;
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const t2 = document.createElement("style");
        t2.textContent = B, this.shadowRoot.append(F.content.cloneNode(true), t2);
        const a2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.getElementById("pera-wallet-redirect-modal-download-pera-link");
        null == a2 || a2.addEventListener("click", () => {
          this.onClose();
        });
        const o2 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("pera-wallet-redirect-modal-launch-pera-link");
        null == o2 || o2.addEventListener("click", () => {
          this.onClose(), window.open(i(), "_blank");
        });
      }
    }
    connectedCallback() {
      const e3 = window.open(i(), "_blank");
      e3 && !e3.closed && this.onClose();
    }
    onClose() {
      e2.removeModalWrapperFromDOM(e2.PERA_WALLET_REDIRECT_MODAL_ID);
    }
  }
  var I = "data:image/svg+xml,%3csvg width='32' height='35' viewBox='0 0 32 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.2837 5.09271C19.0234 8.12325 18.7827 10.7913 17.7463 11.0519C16.7098 11.3126 15.27 9.06712 14.5304 6.03657C13.7908 3.00603 14.0315 0.337996 15.0679 0.0773547C16.1044 -0.183287 17.5441 2.06216 18.2837 5.09271Z' fill='%233C3C49'/%3e%3cpath d='M30.376 7.66915C28.7507 5.95537 25.5271 6.42918 23.1759 8.72745C20.8247 11.0257 20.2361 14.2781 21.8614 15.9919C23.4866 17.7057 26.7102 17.2319 29.0614 14.9336C31.4127 12.6354 32.0012 9.38294 30.376 7.66915Z' fill='%233C3C49'/%3e%3cpath d='M17.5511 34.0071C18.5876 33.7465 18.7914 30.9276 18.0064 27.711C17.2214 24.4945 15.7448 22.0982 14.7084 22.3589C13.6719 22.6195 13.4681 25.4383 14.2531 28.6549C15.0381 31.8715 16.5147 34.2677 17.5511 34.0071Z' fill='%233C3C49'/%3e%3cpath d='M6.91617 9.3015C9.9105 10.1763 12.1008 11.7187 11.8083 12.7466C11.5158 13.7745 8.85126 13.8986 5.85693 13.0239C2.8626 12.1491 0.672334 10.6067 0.964835 9.57881C1.25734 8.5509 3.92184 8.42674 6.91617 9.3015Z' fill='%233C3C49'/%3e%3cpath d='M26.3656 20.8508C29.5437 21.7793 31.883 23.3652 31.5905 24.3932C31.298 25.4211 28.4845 25.5017 25.3063 24.5732C22.1282 23.6448 19.7889 22.0588 20.0814 21.0309C20.3739 20.003 23.1874 19.9224 26.3656 20.8508Z' fill='%233C3C49'/%3e%3cpath d='M10.3069 18.7365C9.56299 17.9692 7.13209 19.0948 4.87736 21.2506C2.62264 23.4064 1.39791 25.776 2.14185 26.5432C2.8858 27.3105 5.3167 26.1849 7.57143 24.0291C9.82615 21.8733 11.0509 19.5037 10.3069 18.7365Z' fill='%233C3C49'/%3e%3c/svg%3e", V = ".pera-wallet-connect-modal-information-section {\n  padding: 12px;\n  padding-right: 0;\n}\n.pera-wallet-connect-modal-information-section--mobile {\n  padding: 0;\n}\n.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__pera-icon {\n  margin-bottom: 16px;\n}\n.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__connect-pera-title {\n  margin-bottom: 8px;\n  color: #3c3c49;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: -0.2px;\n}\n.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__title {\n  margin-bottom: 24px;\n  color: #3c3c49;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.09px;\n  font-weight: 400;\n}\n.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__features-item__icon-wrapper {\n  background-color: #f2f3f8;\n}\n.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__features-item__description {\n  color: #6a6a81;\n}\n.pera-wallet-connect-modal-information-section * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: var(--pera-wallet-modal-font-family);\n  font-smooth: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.pera-wallet-connect-modal-information-section__pera-icon {\n  margin-bottom: 32px;\n}\n\n.pera-wallet-connect-modal-information-section__title {\n  margin-bottom: 148px;\n  color: #3c3c49;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.5px;\n}\n\n.pera-wallet-connect-modal-information-section__secondary-title {\n  margin-bottom: 20px;\n  color: #9d9dae;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0.06px;\n  text-transform: uppercase;\n}\n\n.pera-wallet-connect-modal-information-section__features-item {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 36px auto;\n  gap: 16px;\n}\n.pera-wallet-connect-modal-information-section__features-item:not(:last-of-type) {\n  margin-bottom: 24px;\n}\n\n.pera-wallet-connect-modal-information-section__features-item__icon-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background-color: #ffffff;\n  border-radius: 50%;\n}\n\n.pera-wallet-connect-modal-information-section__features-item__description {\n  color: #6a6a81;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0.01px;\n}\n\n@media (max-width: 767px) {\n  .pera-wallet-connect-modal-information-section--desktop {\n    padding: 0;\n  }\n  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__pera-icon {\n    margin-bottom: 12px;\n  }\n  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__title {\n    margin-bottom: 24px;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 24px;\n    letter-spacing: -0.26px;\n  }\n  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__features-item {\n    display: none;\n  }\n  .pera-wallet-connect-modal-information-section__secondary-title {\n    display: none;\n  }\n}";
  r(V);
  const W = document.createElement("template"), S = e2.isMobile() ? "pera-wallet-connect-modal-information-section pera-wallet-connect-modal-information-section--mobile" : "pera-wallet-connect-modal-information-section pera-wallet-connect-modal-information-section--desktop";
  W.innerHTML = `
  <section class="${S}">
    <img
      id="pera-wallet-connect-modal-information-section-pera-icon"
      src="${I}"
      class="pera-wallet-connect-modal-information-section__pera-icon"
      alt="Pera Wallet Logo"
    />

    <h1 id="pera-wallet-connect-modal-information-section-connect-pera-mobile" class="pera-wallet-connect-modal-information-section__connect-pera-title">
        Connect to Pera Wallet
    </h1>

    <h1 class="pera-wallet-connect-modal-information-section__title">
      Simply the best Algorand wallet.
    </h1>

    <h2 id="pera-wallet-connect-modal-information-section-secondary-title" class="pera-wallet-connect-modal-information-section__secondary-title">
      Features
    </h2>

    <ul>
      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.5 10.1378C2.5 10.8378 3.025 11.6461 3.66667 11.9294L9.325 14.4461C9.75833 14.6378 10.25 14.6378 10.675 14.4461L16.3333 11.9294C16.975 11.6461 17.5 10.8378 17.5 10.1378M2.5 14.3044C2.5 15.0794 2.95833 15.7794 3.66667 16.0961L9.325 18.6128C9.75833 18.8044 10.25 18.8044 10.675 18.6128L16.3333 16.0961C17.0417 15.7794 17.5 15.0794 17.5 14.3044M10.8417 3.4043L15.7583 5.58763C17.175 6.21263 17.175 7.24596 15.7583 7.87096L10.8417 10.0543C10.2833 10.3043 9.36668 10.3043 8.80835 10.0543L3.89168 7.87096C2.47502 7.24596 2.47502 6.21263 3.89168 5.58763L8.80835 3.4043C9.36668 3.1543 10.2833 3.1543 10.8417 3.4043Z' stroke='%239D9DAE' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e" alt="Layer Icon" />
        </div>
        
        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          Connect to any Algorand dApp securely
        </p>
      </li>

      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div
          class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.58033 12.3109C9.28744 12.018 8.81257 12.018 8.51967 12.3109C8.22678 12.6038 8.22678 13.0787 8.51967 13.3716L9.58033 12.3109ZM10.66 14.4512L10.1297 14.9816C10.4226 15.2745 10.8974 15.2745 11.1903 14.9816L10.66 14.4512ZM15.4903 10.6816C15.7832 10.3887 15.7832 9.91381 15.4903 9.62092C15.1974 9.32803 14.7226 9.32803 14.4297 9.62092L15.4903 10.6816ZM19.84 8.09125C19.84 8.50546 20.1758 8.84125 20.59 8.84125C21.0042 8.84125 21.34 8.50546 21.34 8.09125H19.84ZM18.5 5.07125L18.2368 5.77355L18.2373 5.77375L18.5 5.07125ZM13.51 3.20125L13.7732 2.49894L13.7724 2.49866L13.51 3.20125ZM10.49 3.20125L10.2276 2.49865L10.2256 2.49941L10.49 3.20125ZM5.5 5.08125L5.76268 5.78375L5.76442 5.78309L5.5 5.08125ZM5.14 18.9612L4.69102 19.562L4.69135 19.5623L5.14 18.9612ZM9.44 22.1713L9.89069 21.5718L9.88866 21.5702L9.44 22.1713ZM14.58 22.1713L14.1313 21.5702L14.1293 21.5718L14.58 22.1713ZM18.88 18.9612L19.3287 19.5623L19.329 19.562L18.88 18.9612ZM21.36 8.09125C21.36 7.67704 21.0242 7.34125 20.61 7.34125C20.1958 7.34125 19.86 7.67704 19.86 8.09125H21.36ZM8.51967 13.3716L10.1297 14.9816L11.1903 13.9209L9.58033 12.3109L8.51967 13.3716ZM11.1903 14.9816L15.4903 10.6816L14.4297 9.62092L10.1297 13.9209L11.1903 14.9816ZM21.34 8.09125C21.34 7.29392 21.0398 6.50041 20.5931 5.85456C20.1463 5.20881 19.5097 4.64807 18.7627 4.36875L18.2373 5.77375C18.6403 5.92443 19.0487 6.25869 19.3595 6.70794C19.6702 7.15709 19.84 7.65858 19.84 8.09125H21.34ZM18.7632 4.36895L13.7732 2.49895L13.2468 3.90355L18.2368 5.77355L18.7632 4.36895ZM13.7724 2.49866C13.2479 2.30277 12.6051 2.21875 12 2.21875C11.3949 2.21875 10.7521 2.30277 10.2276 2.49866L10.7524 3.90384C11.0579 3.78973 11.5101 3.71875 12 3.71875C12.4899 3.71875 12.9421 3.78973 13.2476 3.90384L13.7724 2.49866ZM10.2256 2.49941L5.23558 4.37941L5.76442 5.78309L10.7544 3.90309L10.2256 2.49941ZM5.23733 4.37875C4.49043 4.65803 3.85398 5.2186 3.40741 5.86265C2.96095 6.50656 2.66 7.2978 2.66 8.09125H4.16C4.16 7.6647 4.32906 7.16594 4.64009 6.71735C4.95103 6.2689 5.35957 5.93447 5.76268 5.78375L5.23733 4.37875ZM2.66 8.09125V15.5212H4.16V8.09125H2.66ZM2.66 15.5212C2.66 16.2602 2.8989 17.059 3.24874 17.7545C3.59871 18.4503 4.09802 19.1188 4.69102 19.562L5.58899 18.3605C5.23198 18.0937 4.86629 17.6322 4.58877 17.0805C4.31111 16.5285 4.16 15.9623 4.16 15.5212H2.66ZM4.69135 19.5623L8.99135 22.7723L9.88866 21.5702L5.58866 18.3602L4.69135 19.5623ZM8.98932 22.7707C9.84721 23.4157 10.9462 23.7163 12.01 23.7163C13.0738 23.7163 14.1728 23.4157 15.0307 22.7707L14.1293 21.5718C13.5772 21.9868 12.8112 22.2163 12.01 22.2163C11.2088 22.2163 10.4428 21.9868 9.89068 21.5718L8.98932 22.7707ZM15.0287 22.7723L19.3287 19.5623L18.4313 18.3602L14.1313 21.5702L15.0287 22.7723ZM19.329 19.562C19.922 19.1188 20.4213 18.4503 20.7713 17.7545C21.1211 17.059 21.36 16.2602 21.36 15.5212H19.86C19.86 15.9623 19.7089 16.5285 19.4312 17.0805C19.1537 17.6322 18.788 18.0937 18.431 18.3605L19.329 19.562ZM21.36 15.5212V8.09125H19.86V15.5212H21.36Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Tick Icon" />
        </div>

        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          Your private keys are safely stored locally
        </p>
      </li>

      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div
          class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.05 9.67014L17.3198 9.49894L18.05 9.67014ZM17.2333 13.1535L16.5031 12.9823L16.5029 12.9835L17.2333 13.1535ZM12.55 17.1285L12.6218 16.3818L12.6098 16.3809L12.55 17.1285ZM11.2 16.9035L11.376 16.1744L11.3737 16.1739L11.2 16.9035ZM9.8 16.5701L9.97372 15.8405L9.97324 15.8404L9.8 16.5701ZM6.06667 10.5451L6.79687 10.7163L6.79696 10.7159L6.06667 10.5451ZM6.88334 7.05347L6.15327 6.88169L6.15304 6.88267L6.88334 7.05347ZM7.5 5.22014L8.17303 5.55114L8.17523 5.54659L7.5 5.22014ZM12.9167 3.32014L12.744 4.05L12.7461 4.05049L12.9167 3.32014ZM14.3083 3.64514L14.4791 2.91485L14.4789 2.91479L14.3083 3.64514ZM10.5917 18.0285L10.359 17.3155L10.3572 17.3161L10.5917 18.0285ZM9.27501 18.4618L9.50516 19.1756L9.50947 19.1742L9.27501 18.4618ZM3.15001 15.3285L2.43654 15.5597L2.43672 15.5603L3.15001 15.3285ZM2.08334 12.0368L1.36953 12.267L1.36987 12.268L2.08334 12.0368ZM5.20834 5.91182L5.43849 6.62565L5.44281 6.62423L5.20834 5.91182ZM6.52501 5.47848L6.29831 4.76352L6.29055 4.76608L6.52501 5.47848ZM10.7177 7.35149C10.3162 7.24967 9.90818 7.49261 9.80635 7.89411C9.70453 8.29561 9.94746 8.70364 10.349 8.80546L10.7177 7.35149ZM14.3906 9.83046C14.7921 9.93229 15.2002 9.68935 15.302 9.28785C15.4038 8.88635 15.1609 8.47832 14.7594 8.37649L14.3906 9.83046ZM9.90211 10.5768C9.50076 10.4743 9.09238 10.7167 8.98996 11.118C8.88755 11.5194 9.12988 11.9278 9.53124 12.0302L9.90211 10.5768ZM11.9479 12.6469C12.3493 12.7493 12.7576 12.5069 12.8601 12.1056C12.9625 11.7042 12.7201 11.2958 12.3188 11.1934L11.9479 12.6469ZM17.3198 9.49894L16.5031 12.9823L17.9635 13.3247L18.7802 9.84133L17.3198 9.49894ZM16.5029 12.9835C16.168 14.4224 15.6979 15.2955 15.1165 15.793C14.5605 16.2688 13.7912 16.4944 12.6218 16.3819L12.4782 17.875C13.9088 18.0126 15.1312 17.7548 16.0918 16.9327C17.0271 16.1323 17.5986 14.8928 17.9638 13.3234L16.5029 12.9835ZM12.6098 16.3809C12.2388 16.3512 11.8281 16.2835 11.376 16.1744L11.024 17.6325C11.5386 17.7567 12.0279 17.8391 12.4902 17.8761L12.6098 16.3809ZM11.3737 16.1739L9.97372 15.8405L9.62629 17.2997L11.0263 17.6331L11.3737 16.1739ZM9.97324 15.8404C8.30732 15.4449 7.40652 14.876 6.96107 14.1588C6.51616 13.4425 6.40566 12.385 6.79687 10.7163L5.33647 10.3739C4.91101 12.1887 4.92968 13.7311 5.68685 14.9502C6.44349 16.1685 7.81769 16.8704 9.62676 17.2999L9.97324 15.8404ZM6.79696 10.7159L7.61363 7.22428L6.15304 6.88267L5.33638 10.3743L6.79696 10.7159ZM7.6134 7.22525C7.77277 6.54795 7.95691 5.99053 8.17301 5.55113L6.82699 4.88915C6.54309 5.46641 6.32724 6.14234 6.15327 6.88169L7.6134 7.22525ZM8.17523 5.54659C8.59604 4.67619 9.11898 4.20234 9.77488 3.97598C10.4657 3.73759 11.4133 3.73525 12.744 4.05L13.0893 2.59028C11.6367 2.2467 10.3635 2.18603 9.28554 2.55805C8.17269 2.94211 7.37896 3.74743 6.82478 4.89369L8.17523 5.54659ZM12.7461 4.05049L14.1378 4.37549L14.4789 2.91479L13.0872 2.58979L12.7461 4.05049ZM14.1375 4.37543C15.8111 4.76687 16.7126 5.33603 17.1575 6.05304C17.6023 6.77006 17.7112 7.82942 17.3198 9.49894L18.7802 9.84133C19.2054 8.02753 19.1893 6.48272 18.4321 5.26224C17.6749 4.04175 16.2972 3.34008 14.4791 2.91485L14.1375 4.37543ZM12.1294 16.5075C11.6911 16.8045 11.1123 17.0697 10.359 17.3155L10.8243 18.7415C11.6544 18.4706 12.3756 18.1525 12.9706 17.7494L12.1294 16.5075ZM10.3572 17.3161L9.04055 17.7494L9.50947 19.1742L10.8261 18.7409L10.3572 17.3161ZM9.04486 17.748C7.46037 18.2589 6.43607 18.2362 5.71663 17.8681C4.99693 17.4999 4.37829 16.6816 3.8633 15.0967L2.43672 15.5603C2.99673 17.2837 3.78642 18.5654 5.03339 19.2035C6.28062 19.8416 7.78131 19.7314 9.50516 19.1756L9.04486 17.748ZM3.86348 15.0973L2.79682 11.8056L1.36987 12.268L2.43654 15.5597L3.86348 15.0973ZM2.79716 11.8067C2.28607 10.2215 2.3068 9.19457 2.67362 8.4739C3.03983 7.75443 3.85506 7.13616 5.43849 6.62563L4.9782 5.198C3.25329 5.75414 1.97269 6.54421 1.33682 7.79348C0.701551 9.04157 0.813948 10.5438 1.36953 12.267L2.79716 11.8067ZM5.44281 6.62423L6.75947 6.19089L6.29055 4.76608L4.97388 5.19941L5.44281 6.62423ZM6.75169 6.19341C7.08205 6.08866 7.37424 6.00724 7.63942 5.95707L7.36058 4.48321C7.00909 4.54971 6.6513 4.65164 6.29833 4.76356L6.75169 6.19341ZM10.349 8.80546L14.3906 9.83046L14.7594 8.37649L10.7177 7.35149L10.349 8.80546ZM9.53124 12.0302L11.9479 12.6469L12.3188 11.1934L9.90211 10.5768L9.53124 12.0302Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Note Icon" />
        </div>

        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          View NFTs, buy and swap crypto and more
        </p>
      </li>
    </ul>
  </section>
`;
  class D extends HTMLElement {
    constructor() {
      var n2, t2, a2, o2;
      super(), this.attachShadow({ mode: "open" });
      const l2 = "true" === (null === (n2 = document.querySelector("pera-wallet-connect-modal")) || void 0 === n2 ? void 0 : n2.getAttribute("compact-mode"));
      if (this.shadowRoot && (!l2 && !e2.isMobile() || e2.isMobile())) {
        const n3 = document.createElement("style");
        n3.textContent = V, this.shadowRoot.append(W.content.cloneNode(true), n3), c() && e2.isMobile() ? null === (t2 = this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-title")) || void 0 === t2 || t2.setAttribute("style", "display: none;") : (null === (a2 = this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-pera-icon")) || void 0 === a2 || a2.setAttribute("src", "data:image/svg+xml,%3csvg width='84' height='38' viewBox='0 0 84 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M19.806 8.62773C20.4416 11.2609 20.2268 13.5772 19.3262 13.8012C18.4256 14.0253 17.1803 12.0723 16.5448 9.43906C15.9092 6.80585 16.1241 4.48959 17.0246 4.26555C17.9252 4.04151 19.1705 5.99452 19.806 8.62773Z' fill='%233C3C49'/%3e%3cpath d='M30.3007 10.8917C28.8932 9.3999 26.0929 9.80424 24.0461 11.7948C21.9994 13.7853 21.4812 16.6082 22.8887 18.1C24.2962 19.5917 27.0964 19.1874 29.1432 17.1969C31.1899 15.2064 31.7082 12.3834 30.3007 10.8917Z' fill='%233C3C49'/%3e%3cpath d='M19.1061 33.734C20.0067 33.5099 20.1899 31.0627 19.5153 28.2678C18.8408 25.473 17.5639 23.3889 16.6633 23.613C15.7627 23.837 15.5795 26.2843 16.2541 29.0791C16.9286 31.874 18.2056 33.958 19.1061 33.734Z' fill='%233C3C49'/%3e%3cpath d='M9.92571 12.2574C12.5239 13.0236 14.4224 14.3678 14.1662 15.2597C13.9099 16.1517 11.5959 16.2536 8.99771 15.4874C6.3995 14.7212 4.50098 13.377 4.75724 12.4851C5.0135 11.5931 7.3275 11.4912 9.92571 12.2574Z' fill='%233C3C49'/%3e%3cpath d='M26.7892 22.3292C29.5469 23.1424 31.5747 24.5247 31.3184 25.4167C31.0621 26.3086 28.6189 26.3724 25.8612 25.5592C23.1035 24.7459 21.0757 23.3636 21.3319 22.4717C21.5882 21.5797 24.0315 21.5159 26.7892 22.3292Z' fill='%233C3C49'/%3e%3cpath d='M12.8493 20.4577C12.205 19.7898 10.0916 20.7619 8.12896 22.6289C6.16631 24.4959 5.09759 26.5509 5.7419 27.2188C6.38622 27.8867 8.49958 26.9146 10.4622 25.0476C12.4249 23.1806 13.4936 21.1256 12.8493 20.4577Z' fill='%233C3C49'/%3e%3cpath d='M41.691 12.5347V11.9635H39.3366V27.1957H41.691V23.0915C41.691 22.6472 41.691 22.2876 41.6482 21.801H41.691C42.5471 23.1973 44.0026 23.9377 45.7148 23.9377C48.6043 23.9377 51.1299 21.7587 51.1299 17.7179C51.1299 13.7617 48.6043 11.625 45.7148 11.625C44.0668 11.625 42.6113 12.3443 41.691 13.7617H41.6482C41.691 13.2963 41.691 12.9578 41.691 12.5347ZM45.1155 21.9279C42.9324 21.9068 41.6696 20.0662 41.6696 17.6967C41.6696 15.4542 42.9324 13.656 45.1155 13.6348C47.2559 13.6137 48.6685 15.2638 48.6685 17.7179C48.6685 20.2354 47.2559 21.9491 45.1155 21.9279Z' fill='%233C3C49'/%3e%3cpath d='M63.4932 16.7236C63.4932 13.8041 61.1388 11.625 57.9283 11.625C54.5037 11.625 52.1279 13.931 52.1279 17.7814C52.1279 21.4836 54.4609 23.9377 57.9283 23.9377C60.7749 23.9377 62.8939 22.2876 63.3862 20.0239H60.8177C60.4111 21.1663 59.2981 21.9279 57.9283 21.9279C56.1732 21.9279 54.889 20.6797 54.6107 18.6064H63.4932V16.7236ZM57.9283 13.6348C59.662 13.6348 60.8606 14.8195 61.1174 16.5332H54.6321C54.9318 14.883 56.1518 13.6348 57.9283 13.6348Z' fill='%233C3C49'/%3e%3cpath d='M65.224 23.5992H67.5784V17.0409C67.5784 14.7984 68.8198 13.6348 70.7462 13.6348H72.009V11.625H71.003C69.2693 11.625 68.1991 12.7674 67.5784 13.7617H67.5356V11.9635H65.224V23.5992Z' fill='%233C3C49'/%3e%3cpath d='M83.0154 21.5683C82.6944 21.5683 82.5445 21.3779 82.5445 20.9971V15.8773C82.5445 13.4233 81.3459 11.625 77.8144 11.625C74.3898 11.625 72.8273 13.3175 72.6561 15.7292H75.0105C75.1603 14.4176 76.2091 13.6348 77.8144 13.6348C79.1842 13.6348 80.1259 14.2272 80.1259 15.158C80.1259 15.9196 79.5909 16.3851 77.8358 16.3851H76.894C74.0901 16.3851 72.2066 17.5063 72.2066 20.0662C72.2066 22.753 74.1972 23.98 76.5301 23.98C78.2638 23.98 79.7407 23.2184 80.3186 21.5894C80.3828 22.7742 81.1747 23.5992 82.673 23.5992H84V21.5683H83.0154ZM80.1902 18.1833C80.1902 20.8067 78.7561 21.9491 76.9154 21.9491C75.3101 21.9491 74.668 21.0182 74.668 20.0662C74.668 19.1565 75.2245 18.416 76.9368 18.416H77.2793C78.9273 18.416 79.9547 17.8448 80.1688 16.8505H80.1902V18.1833Z' fill='%233C3C49'/%3e%3c/svg%3e"), null === (o2 = this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-connect-pera-mobile")) || void 0 === o2 || o2.setAttribute("style", "display: none;"));
      }
    }
  }
  var P = '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");\n.pera-wallet-modal {\n  --pera-wallet-modal-font-family: "Inter", sans-serif;\n  --pera-wallet-modal-compact-width: 380px;\n  --pera-wallet-modal-compact-height: 396px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 999999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.pera-wallet-modal--select-account .pera-wallet-modal__body {\n  width: 480px;\n  height: 578px;\n  background-color: #ffffff;\n}\n.pera-wallet-modal--mobile .pera-wallet-modal__body {\n  top: 40px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  max-width: unset;\n  height: calc(100 * var(--vh));\n  padding: 20px;\n  background-color: #ffffff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);\n  border-radius: 20px 20px 0px 0px;\n  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;\n  overflow-y: auto;\n  transform: unset;\n}\n.pera-wallet-modal--mobile .pera-wallet-modal__body::before {\n  background-image: unset;\n}\n.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {\n  width: var(--pera-wallet-modal-compact-width);\n  height: var(--pera-wallet-modal-compact-height);\n  padding: 0;\n}\n.pera-wallet-modal * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: var(--pera-wallet-modal-font-family);\n  font-smooth: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.pera-wallet-modal ul,\n.pera-wallet-modal ol,\n.pera-wallet-modal li {\n  list-style-type: none;\n}\n\n.pera-wallet-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 48px;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--pera-wallet-modal-font-family);\n  font-size: 14px;\n}\n\n.pera-wallet-modal__logo img {\n  display: block;\n  width: 32px;\n}\n\n.pera-wallet-modal__body {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 700px;\n  max-width: calc(100vw - 80px);\n  padding: 28px;\n  background-color: #f3f3f7;\n  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);\n  border-radius: 24px;\n  animation: 0.3s PeraWalletConnectSlideIn ease-out;\n  transform: translate(-50%, -50%);\n}\n.pera-wallet-modal__body::before {\n  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  content: "";\n  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));\n  background-size: 116px 116px;\n  mix-blend-mode: overlay;\n  border-radius: 24px;\n  opacity: 0.8;\n  pointer-events: none;\n}\n\n@media (max-width: 767px) {\n  .pera-wallet-modal--desktop .pera-wallet-modal__body {\n    width: 100%;\n    max-width: calc(100vw - 32px);\n    padding: 24px;\n  }\n}\n@keyframes PeraWalletConnectSlideIn {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, calc(-50% + 24px));\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes PeraWalletConnectMobileSlideIn {\n  0% {\n    top: 30%;\n    opacity: 0;\n  }\n  100% {\n    top: 40px;\n    opacity: 1;\n  }\n}\n.pera-wallet-connect-modal-pending-message-section {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 48px;\n  gap: 56px;\n  height: 100%;\n  padding: 4px;\n  padding-bottom: 70px;\n}\n\n.pera-wallet-connect-modal-pending-message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.pera-wallet-connect-modal-pending-message--try-again-view {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 10px;\n}\n.pera-wallet-connect-modal-pending-message--try-again-view__title {\n  margin: 16px 0 12px;\n  color: #3c3c49;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.26px;\n}\n.pera-wallet-connect-modal-pending-message--try-again-view__description {\n  color: #6a6a81;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: -0.01px;\n}\n.pera-wallet-connect-modal-pending-message--try-again-view__button {\n  display: block;\n  width: 100%;\n  padding: 14px;\n  border-radius: 12px;\n  text-decoration: none;\n  text-align: center;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.09px;\n  font-weight: 500;\n  color: #ffffff;\n  background-color: #6b46fe;\n  border: none;\n}\n.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 16px;\n  background: #ffffff;\n  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);\n  border-radius: 12px;\n  text-decoration: none;\n}\n.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image {\n  width: 24px;\n  height: 24px;\n}\n.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: -0.1px;\n  color: #3c3c49;\n}\n.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description {\n  /* stylelint-disable value-no-vendor-prefix */\n  /* stylelint-disable  property-no-vendor-prefix */\n  display: -webkit-box;\n  max-width: 100%;\n  -webkit-line-clamp: 2;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  /* stylelint-enable value-no-vendor-prefix */\n  /* stylelint-enable property-no-vendor-prefix */\n  margin: 0;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0.01px;\n  color: #9d9dae;\n}\n\n.pera-wallet-connect-modal-pending-message__animation-wrapper {\n  width: 56px;\n  height: 56px;\n  background-color: #6b46fe;\n  border-radius: 50%;\n}\n\n.pera-wallet-connect-modal-pending-message__text {\n  max-width: 271px;\n  margin-top: 24px;\n  color: #3c3c49;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 28px;\n  letter-spacing: -0.26px;\n}\n\n.pera-wallet-connect-modal-pending-message__cancel-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 14px;\n  color: #6a6a81;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);\n  border-radius: 12px;\n  text-decoration: none;\n  text-align: center;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.09px;\n  font-weight: 500;\n  border: none;\n}';
  r(P);
  const T = document.createElement("template");
  T.innerHTML = '\n  <div class="pera-wallet-connect-modal-pending-message-section">\n    <div class="pera-wallet-connect-modal-pending-message">\n      <div id="pera-wallet-connect-modal-pending-message-animation-wrapper" class="pera-wallet-connect-modal-pending-message__animation-wrapper"></div>\n\n      <div class="pera-wallet-connect-modal-pending-message__text">\n        Please wait while we connect you to Pera Wallet\n      </div>\n    </div>\n\n    <button\n      id="pera-wallet-connect-modal-pending-message-cancel-button"\n      class="pera-wallet-button pera-wallet-connect-modal-pending-message__cancel-button">\n        Cancel\n    </button>\n  </div>\n\n  <div id="pera-wallet-connect-modal-pending-message-audio-wrapper"></div>\n';
  const O = `
  <div class="pera-wallet-connect-modal-pending-message--try-again-view">
    <div>
      <img src="${I}" alt="Pera Wallet Logo" />

      <h1 class="pera-wallet-connect-modal-pending-message--try-again-view__title">
        Couldn’t establish connection
      </h1>

      <p class="pera-wallet-connect-modal-pending-message--try-again-view__description">
        Having issues? Before trying again, make sure to read the support article below and apply the possible solutions.
      </p>
    </div>

    <div>
      <a
        href="https://support.perawallet.app/en/article/resolving-walletconnect-issues-1tolptm/"
        target="_blank"
        rel="noopener noreferrer"
        class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor">
        <img
          class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image"
          src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 22.3199C7.72 22.3199 7.42998 22.2499 7.16998 22.1099C6.59998 21.8099 6.25 21.2099 6.25 20.5699V19.15C3.23 18.84 1.25 16.6199 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.8799 20.44 19.1899 17 19.1899H13.23L8.96997 22.03C8.67997 22.22 8.34 22.3199 8 22.3199ZM7 3.17993C4.42 3.17993 2.75 4.84993 2.75 7.42993V13.43C2.75 16.01 4.42 17.68 7 17.68C7.41 17.68 7.75 18.02 7.75 18.43V20.56C7.75 20.69 7.83 20.75 7.88 20.78C7.93001 20.81 8.03001 20.84 8.14001 20.77L12.59 17.81C12.71 17.73 12.86 17.68 13.01 17.68H17.01C19.59 17.68 21.26 16.01 21.26 13.43V7.42993C21.26 4.84993 19.59 3.17993 17.01 3.17993H7ZM11.9998 12.11C11.5898 12.11 11.2498 11.77 11.2498 11.36V11.15C11.2498 10.0038 12.0798 9.4336 12.4082 9.20798L12.4198 9.20001C12.7898 8.95001 12.9098 8.78002 12.9098 8.52002C12.9098 8.02002 12.4998 7.60999 11.9998 7.60999C11.4998 7.60999 11.0898 8.02002 11.0898 8.52002C11.0898 8.93002 10.7498 9.27002 10.3398 9.27002C9.92984 9.27002 9.58984 8.93002 9.58984 8.52002C9.58984 7.19002 10.6698 6.10999 11.9998 6.10999C13.3298 6.10999 14.4098 7.19002 14.4098 8.52002C14.4098 9.66002 13.5698 10.23 13.2598 10.44C12.8698 10.7 12.7498 10.87 12.7498 11.15V11.36C12.7498 11.78 12.4098 12.11 11.9998 12.11ZM11.25 13.85C11.25 14.26 11.58 14.6 12 14.6C12.42 14.6 12.75 14.26 12.75 13.85C12.75 13.44 12.41 13.1 12 13.1C11.59 13.1 11.25 13.44 11.25 13.85Z' fill='%236B46FE'/%3e%3c/svg%3e"
          alt="Help Icon"
        />

        <div>
          <div
            class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper">
            <h1
              class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title">
                Resolving WalletConnect issues
            </h1>

            <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.3287 10.0983C10.9574 10.0983 10.6564 9.79734 10.6564 9.42604L10.6564 6.29525L5.14866 11.803C4.88611 12.0655 4.46044 12.0655 4.19789 11.803C3.93534 11.5404 3.93534 11.1147 4.19789 10.8522L9.70561 5.34447L6.57482 5.34447C6.20352 5.34447 5.90252 5.04347 5.90252 4.67218C5.90252 4.30088 6.20352 3.99988 6.57482 3.99988L11.3287 3.99988C11.507 3.99988 11.678 4.07071 11.8041 4.19679C11.9301 4.32287 12.001 4.49387 12.001 4.67218L12.001 9.42604C12.001 9.79734 11.7 10.0983 11.3287 10.0983Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Send Icon"/>
          </div>

          <p
            class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description">
            Unfortunately there are several known issues related to WalletConnect that our team is working on. Some of these issues are related to the WalletConnect JavaScript implementation on the dApp ...
          </p>
        </div>
      </a>

      <button id="pera-wallet-connect-modal-pending-message-try-again-button" class="pera-wallet-connect-button pera-wallet-connect-modal-pending-message--try-again-view__button">
        Close & Try Again
      </button>
    </div>
  </div>
  `;
  class j extends HTMLElement {
    constructor() {
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const e3 = document.createElement("style");
        e3.textContent = P, this.shadowRoot.append(T.content.cloneNode(true), e3);
      }
    }
    connectedCallback() {
      var e3;
      const n2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.getElementById("pera-wallet-connect-modal-pending-message-cancel-button");
      null == n2 || n2.addEventListener("click", () => {
        this.onClose();
      }), this.addAudioForConnection(), this.renderLottieAnimation(), setTimeout(() => {
        var e4;
        if (T.innerHTML = O, this.shadowRoot) {
          const n3 = document.createElement("style");
          n3.textContent = P, this.shadowRoot.innerHTML = "", this.shadowRoot.append(T.content.cloneNode(true), n3);
          const t2 = null === (e4 = this.shadowRoot) || void 0 === e4 ? void 0 : e4.getElementById("pera-wallet-connect-modal-pending-message-try-again-button");
          null == t2 || t2.addEventListener("click", () => {
            this.onClose();
          });
        }
      }, 3e4);
    }
    onClose() {
      e2.removeModalWrapperFromDOM(e2.PERA_WALLET_CONNECT_MODAL_ID);
    }
    addAudioForConnection() {
      var n2;
      if ("true" === this.getAttribute("should-use-sound") && e2.isIOS()) {
        const e3 = null === (n2 = this.shadowRoot) || void 0 === n2 ? void 0 : n2.getElementById("pera-wallet-connect-modal-pending-message-audio-wrapper"), t2 = document.createElement("audio");
        t2.src = "https://s3.amazonaws.com/wc.perawallet.app/audio.mp3", t2.autoplay = true, t2.loop = true, null == e3 || e3.appendChild(t2);
      }
    }
    renderLottieAnimation() {
      var e3;
      const n2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.getElementById("pera-wallet-connect-modal-pending-message-animation-wrapper");
      n2 && l.default.loadAnimation({ container: n2, renderer: "svg", loop: true, autoplay: true, path: "https://s3.amazonaws.com/wc.perawallet.app/static/pera-loader-animation.json" });
    }
  }
  var N = '.pera-wallet-sign-txn-toast {\n  --pera-wallet-sign-txn-toast-width: 422px;\n  --pera-wallet-sign-txn-toast-height: 134px;\n  --pera-wallet-sign-txn-toast-font-family: "Inter", sans-serif;\n  position: fixed;\n  bottom: 28px;\n  right: 35px;\n  z-index: 11;\n  overflow: hidden;\n  width: var(--pera-wallet-sign-txn-toast-width);\n  height: var(--pera-wallet-sign-txn-toast-height);\n  background: #edeffb;\n  border-radius: 8px;\n  animation: 0.2s PeraWalletSignTxnToastSlideIn ease-out;\n}\n.pera-wallet-sign-txn-toast * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: var(--pera-wallet-sign-txn-toast-font-family);\n  font-smooth: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.pera-wallet-sign-txn-toast ul,\n.pera-wallet-sign-txn-toast ol,\n.pera-wallet-sign-txn-toast li {\n  list-style-type: none;\n}\n\n.pera-wallet-sign-txn-toast__header__close-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n.pera-wallet-sign-txn-toast__content__lottie-animation {\n  position: absolute;\n  top: -75px;\n  left: -100px;\n  width: 368px;\n  height: 368px;\n}\n\n.pera-wallet-sign-txn-toast__content__description {\n  position: absolute;\n  top: 40px;\n  right: 48px;\n  max-width: 197px;\n  color: #3c3c49;\n  font-size: 14px;\n  line-height: 22px;\n  letter-spacing: -0.1px;\n}\n\n@media (max-width: 767px) {\n  .pera-wallet-sign-txn-toast {\n    display: none;\n  }\n}\n@keyframes PeraWalletSignTxnToastSlideIn {\n  0% {\n    bottom: 12px;\n    opacity: 0;\n  }\n  100% {\n    bottom: 26px;\n    opacity: 1;\n  }\n}';
  r(N);
  const $ = document.createElement("template");
  $.innerHTML = `
  <div class="pera-wallet-sign-txn-toast">
    <div class="pera-wallet-sign-txn-toast__header">
      <button
        id="pera-wallet-sign-txn-toast-close-button"
        class="pera-wallet-sign-txn-toast__header__close-button">
        <img src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14.4107 4.41074L9.41074 9.41074L10.5893 10.5893L15.5893 5.58926L14.4107 4.41074ZM9.41074 9.41074L4.41074 14.4107L5.58926 15.5893L10.5893 10.5893L9.41074 9.41074ZM15.5893 14.4107L10.5893 9.41074L9.41074 10.5893L14.4107 15.5893L15.5893 14.4107ZM10.5893 9.41074L5.58926 4.41074L4.41074 5.58926L9.41074 10.5893L10.5893 9.41074Z' fill='%239099BD'/%3e%3c/svg%3e" />
      </button>
    </div>
    <div class="pera-wallet-sign-txn-toast__content">
      <div id="pera-wallet-sign-txn-toast-lottie-animation" style="width:368;height:368" class="pera-wallet-sign-txn-toast__content__lottie-animation"></div>
      <p class="pera-wallet-sign-txn-toast__content__description">
        Please launch <b>Pera Wallet</b> on your iOS or Android device to sign this transaction.
      </p>
    </div>
  </div>
`;
  class q extends HTMLElement {
    constructor() {
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const n2 = document.createElement("style");
        n2.textContent = N, this.shadowRoot.append($.content.cloneNode(true), n2);
        const t2 = this.shadowRoot.getElementById("pera-wallet-sign-txn-toast-close-button");
        null == t2 || t2.addEventListener("click", () => {
          e2.removeModalWrapperFromDOM(e2.PERA_WALLET_SIGN_TXN_TOAST_ID);
        }), this.renderLottieAnimation();
      }
    }
    renderLottieAnimation() {
      var e3;
      const n2 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.getElementById("pera-wallet-sign-txn-toast-lottie-animation");
      n2 && l.default.loadAnimation({ container: n2, renderer: "svg", loop: true, autoplay: true, path: "https://s3.amazonaws.com/wc.perawallet.app/static/sign-toast-animation.json" });
    }
  }
  var U = '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");\n.pera-wallet-modal {\n  --pera-wallet-modal-font-family: "Inter", sans-serif;\n  --pera-wallet-modal-compact-width: 380px;\n  --pera-wallet-modal-compact-height: 396px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 999999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.pera-wallet-modal--select-account .pera-wallet-modal__body {\n  width: 480px;\n  height: 578px;\n  background-color: #ffffff;\n}\n.pera-wallet-modal--mobile .pera-wallet-modal__body {\n  top: 40px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  max-width: unset;\n  height: calc(100 * var(--vh));\n  padding: 20px;\n  background-color: #ffffff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);\n  border-radius: 20px 20px 0px 0px;\n  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;\n  overflow-y: auto;\n  transform: unset;\n}\n.pera-wallet-modal--mobile .pera-wallet-modal__body::before {\n  background-image: unset;\n}\n.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {\n  width: var(--pera-wallet-modal-compact-width);\n  height: var(--pera-wallet-modal-compact-height);\n  padding: 0;\n}\n.pera-wallet-modal * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: var(--pera-wallet-modal-font-family);\n  font-smooth: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.pera-wallet-modal ul,\n.pera-wallet-modal ol,\n.pera-wallet-modal li {\n  list-style-type: none;\n}\n\n.pera-wallet-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 48px;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--pera-wallet-modal-font-family);\n  font-size: 14px;\n}\n\n.pera-wallet-modal__logo img {\n  display: block;\n  width: 32px;\n}\n\n.pera-wallet-modal__body {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  width: 700px;\n  max-width: calc(100vw - 80px);\n  padding: 28px;\n  background-color: #f3f3f7;\n  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);\n  border-radius: 24px;\n  animation: 0.3s PeraWalletConnectSlideIn ease-out;\n  transform: translate(-50%, -50%);\n}\n.pera-wallet-modal__body::before {\n  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  content: "";\n  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));\n  background-size: 116px 116px;\n  mix-blend-mode: overlay;\n  border-radius: 24px;\n  opacity: 0.8;\n  pointer-events: none;\n}\n\n@media (max-width: 767px) {\n  .pera-wallet-modal--desktop .pera-wallet-modal__body {\n    width: 100%;\n    max-width: calc(100vw - 32px);\n    padding: 24px;\n  }\n}\n@keyframes PeraWalletConnectSlideIn {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, calc(-50% + 24px));\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes PeraWalletConnectMobileSlideIn {\n  0% {\n    top: 30%;\n    opacity: 0;\n  }\n  100% {\n    top: 40px;\n    opacity: 1;\n  }\n}\n.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body {\n  width: 480px;\n  height: 578px;\n  background-color: #ffffff;\n  background-image: unset;\n  padding: 0;\n}\n.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body .pera-wallet-sign-txn-modal__body__content {\n  width: 100%;\n  height: 100%;\n}\n.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body #pera-wallet-iframe {\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  margin: 0 auto;\n  border: none;\n}\n\n.pera-wallet-sign-txn-modal--compact.pera-wallet-modal .pera-wallet-modal__body {\n  width: var(--pera-wallet-modal-compact-width);\n  height: var(--pera-wallet-modal-compact-height);\n}';
  r(U);
  const G = document.createElement("template");
  G.innerHTML = `
  <div id="pera-wallet-sign-txn-modal" class="${e2.PERA_WALLET_MODAL_CLASSNAME} pera-wallet-sign-txn-modal">
    <div class="pera-wallet-modal__body">
      <pera-wallet-modal-header modal-id="${e2.PERA_WALLET_SIGN_TXN_MODAL_ID}"></pera-wallet-modal-header/>

      <div class="pera-wallet-sign-txn-modal__body__content" />
    </div>
  </div>
`;
  class Q extends HTMLElement {
    constructor() {
      if (super(), this.attachShadow({ mode: "open" }), this.shadowRoot) {
        const e3 = document.createElement("style");
        e3.textContent = U, this.shadowRoot.append(G.content.cloneNode(true), e3);
        if ("true" === this.getAttribute("compact-mode")) {
          const e4 = this.shadowRoot.getElementById("pera-wallet-sign-txn-modal");
          null == e4 || e4.classList.add("pera-wallet-sign-txn-modal--compact");
        }
      }
    }
  }
  window.addEventListener("DOMContentLoaded", () => {
    p();
  }), window.addEventListener("resize", () => {
    p();
  }), window.customElements.define("pera-wallet-connect-modal", H), window.customElements.define("pera-wallet-modal-desktop-mode", k), window.customElements.define("pera-wallet-modal-header", w), window.customElements.define("pera-wallet-modal-touch-screen-mode", E), window.customElements.define("pera-wallet-redirect-modal", R), window.customElements.define("pera-wallet-connect-modal-information-section", D), window.customElements.define("pera-wallet-connect-modal-pending-message-section", j), window.customElements.define("pera-wallet-sign-txn-toast", q), window.customElements.define("pera-wallet-sign-txn-modal", Q), window.customElements.define("pera-wallet-download-qr-code", x);
  return App16459877;
}
var hasRequiredIndexE9eae2a3;
function requireIndexE9eae2a3() {
  if (hasRequiredIndexE9eae2a3)
    return indexE9eae2a3;
  hasRequiredIndexE9eae2a3 = 1;
  var e2 = require$$1, t = algosdk_minExports, n = es5Exports;
  function o(e3) {
    return e3 && "object" == typeof e3 && "default" in e3 ? e3 : { default: e3 };
  }
  var a = o(e2), r = o(t), i = o(n);
  function l(e3, t2, n2, o2) {
    return new (n2 || (n2 = Promise))(function(a2, r2) {
      function i2(e4) {
        try {
          s2(o2.next(e4));
        } catch (e5) {
          r2(e5);
        }
      }
      function l2(e4) {
        try {
          s2(o2.throw(e4));
        } catch (e5) {
          r2(e5);
        }
      }
      function s2(e4) {
        var t3;
        e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
          e5(t3);
        })).then(i2, l2);
      }
      s2((o2 = o2.apply(e3, t2 || [])).next());
    });
  }
  class s extends Error {
    constructor(e3, t2, ...n2) {
      super(...n2), Error.captureStackTrace && Error.captureStackTrace(this, s), this.name = "PeraWalletConnectError", this.data = e3, this.message = t2;
    }
  }
  const c = new class {
    constructor(e3) {
      this.listener = void 0, this.channel = e3.channel;
    }
    setupListener({ onReceiveMessage: e3 }) {
      this.close(), this.listener = (t2) => {
        if ("object" == typeof t2.data)
          try {
            t2.data.channel === this.channel && e3(t2);
          } catch (e4) {
            console.error(e4);
          }
      }, window.addEventListener("message", this.listener);
    }
    sendMessage({ message: e3, targetWindow: t2, origin: n2, timeout: o2 = 1e3 }) {
      setTimeout(() => {
        const o3 = { channel: this.channel, message: e3 };
        t2.postMessage(o3, { targetOrigin: n2 || "*" });
      }, o2);
    }
    close() {
      this.listener && (window.removeEventListener("message", this.listener), this.listener = void 0);
    }
  }({ channel: "pera-web-wallet" });
  function d() {
    const e3 = document.querySelector('meta[name="name"]'), t2 = document.querySelector('meta[name="description"]');
    let { title: n2 } = document, o2 = "";
    return e3 instanceof HTMLMetaElement && (n2 = e3.content), t2 instanceof HTMLMetaElement && (o2 = t2.content), { title: n2, description: o2, url: window.location.origin, favicon: u()[0] };
  }
  function u() {
    const e3 = document.getElementsByTagName("link"), t2 = [];
    for (let n2 = 0; n2 < e3.length; n2++) {
      const o2 = e3[n2], a2 = o2.getAttribute("rel");
      if (a2 && a2.toLowerCase().indexOf("icon") > -1) {
        const e4 = o2.getAttribute("href");
        if (e4 && -1 === e4.toLowerCase().indexOf("https:") && -1 === e4.toLowerCase().indexOf("http:") && 0 !== e4.indexOf("//")) {
          let n3 = `${window.location.protocol}//${window.location.host}`;
          if (0 === e4.indexOf("/"))
            n3 += e4;
          else {
            const t3 = window.location.pathname.split("/");
            t3.pop();
            n3 += `${t3.join("/")}/${e4}`;
          }
          t2.push(n3);
        } else if (0 === (null == e4 ? void 0 : e4.indexOf("//"))) {
          const n3 = window.location.protocol + e4;
          t2.push(n3);
        } else
          e4 && t2.push(e4);
      }
    }
    return t2;
  }
  function p(e3) {
    return new Promise((t2, n2) => {
      try {
        const o2 = window.open(e3, "_blank");
        let a2 = 0;
        const r2 = setInterval(() => {
          if (a2 += 1, 50 === a2)
            return clearInterval(r2), void n2(new s({ type: "MESSAGE_NOT_RECEIVED" }, "Couldn't open Pera Wallet, please try again."));
          o2 && (true === o2.closed && (clearInterval(r2), n2(new s({ type: "OPERATION_CANCELLED" }, "Operation cancelled by user"))), c.sendMessage({ message: { type: "TAB_OPEN" }, origin: e3, targetWindow: o2 }));
        }, 700);
        c.setupListener({ onReceiveMessage: (e4) => {
          "TAB_OPEN_RECEIVED" === e4.data.message.type && (clearInterval(r2), t2(o2));
        } });
      } catch (e4) {
        n2(e4);
      }
    });
  }
  function h(e3) {
    const t2 = document.createElement("div");
    return t2.setAttribute("id", e3), document.body.appendChild(t2), t2;
  }
  function w() {
    h("pera-wallet-redirect-modal-wrapper").innerHTML = "<pera-wallet-redirect-modal></pera-wallet-redirect-modal>";
  }
  function g() {
    h("pera-wallet-sign-txn-toast-wrapper").innerHTML = "<pera-wallet-sign-txn-toast></pera-wallet-sign-txn-toast>";
  }
  function m(e3) {
    const t2 = document.getElementById(e3);
    t2 && t2.remove();
  }
  const v = "PeraWallet.Wallet", f = "walletconnect";
  function b() {
    return "undefined" == typeof localStorage ? void 0 : localStorage;
  }
  function y(e3, t2) {
    var n2;
    null === (n2 = b()) || void 0 === n2 || n2.setItem(v, JSON.stringify({ type: t2 || "pera-wallet", accounts: e3, selectedAccount: e3[0] }));
  }
  function N() {
    var e3;
    const t2 = null === (e3 = b()) || void 0 === e3 ? void 0 : e3.getItem(v);
    return t2 ? JSON.parse(t2) : null;
  }
  function T() {
    return new Promise((e3, t2) => {
      var n2, o2;
      try {
        null === (n2 = b()) || void 0 === n2 || n2.removeItem(f), null === (o2 = b()) || void 0 === o2 || o2.removeItem(v), e3(void 0);
      } catch (e4) {
        t2(e4);
      }
    });
  }
  function A(e3) {
    const t2 = e3.slice();
    for (let e4 = t2.length - 1; e4 > 0; e4--) {
      const n2 = Math.floor(Math.random() * (e4 + 1));
      [t2[e4], t2[n2]] = [t2[n2], t2[e4]];
    }
    return t2;
  }
  function _() {
    return function(e3, t2 = {}) {
      return fetch(e3, t2).then((e4) => e4.json()).then((e4) => e4);
    }("https://wc.perawallet.app/config.json", { cache: "no-store" });
  }
  function S() {
    return l(this, void 0, void 0, function* () {
      let e3 = { bridgeURL: "", webWalletURL: "", isWebWalletAvailable: false, shouldDisplayNewBadge: false, shouldUseSound: true, silent: false, promoteMobile: false };
      try {
        const t2 = yield _();
        void 0 !== t2.web_wallet && t2.web_wallet_url && (e3.isWebWalletAvailable = t2.web_wallet), void 0 !== t2.display_new_badge && (e3.shouldDisplayNewBadge = t2.display_new_badge), void 0 !== t2.use_sound && (e3.shouldUseSound = t2.use_sound), void 0 !== t2.silent && (e3.silent = t2.silent), void 0 !== t2.promote_mobile && (e3.promoteMobile = t2.promote_mobile), e3 = Object.assign(Object.assign({}, e3), { bridgeURL: A(t2.servers || [])[0] || "", webWalletURL: t2.web_wallet_url || "" });
      } catch (e4) {
        console.log(e4);
      }
      return e3;
    });
  }
  function E(e3) {
    return Uint8Array.from(window.atob(e3), (e4) => e4.charCodeAt(0));
  }
  function C(e3, t2) {
    return { id: Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3)), jsonrpc: "2.0", method: e3, params: t2 };
  }
  function I() {
    return "undefined" != typeof navigator;
  }
  function W() {
    return I() && /Android/i.test(navigator.userAgent);
  }
  function L() {
    return I() && /iPhone|iPod|Android/i.test(navigator.userAgent);
  }
  const O = W() ? "algorand://" : "perawallet-wc://";
  function M(e3) {
    return { ROOT: `https://${e3}`, CONNECT: `https://${e3}/connect`, TRANSACTION_SIGN: `https://${e3}/transaction/sign` };
  }
  function R({ method: e3, signTxnRequestParams: t2, signer: n2, chainId: o2, webWalletURL: a2, resolve: r2, reject: i2 }) {
    const d2 = M(a2);
    !function() {
      l(this, void 0, void 0, function* () {
        try {
          const a3 = yield p(d2.TRANSACTION_SIGN);
          if (a3) {
            let r3;
            "SIGN_TXN" === e3 ? r3 = { type: "SIGN_TXN", txn: t2 } : "SIGN_DATA" === e3 && n2 && o2 && (r3 = { type: "SIGN_DATA", data: t2, signer: n2, chainId: o2 }), r3 && c.sendMessage({ message: r3, origin: d2.TRANSACTION_SIGN, targetWindow: a3 });
          }
          const l2 = setInterval(() => {
            true === (null == a3 ? void 0 : a3.closed) && (i2(new s({ type: `${e3}_CANCELLED` }, "Transaction signing is cancelled by user.")), clearInterval(l2));
          }, 2e3);
          c.setupListener({ onReceiveMessage: (t3) => function({ event: e4, newPeraWalletTab: t4, method: n3, resolve: o3, reject: a4 }) {
            switch (e4.data.message.type) {
              case "SIGN_TXN_CALLBACK":
                null == t4 || t4.close(), o3(e4.data.message.signedTxns.map((e5) => E(e5.signedTxn)));
                break;
              case "SIGN_DATA_CALLBACK":
                null == t4 || t4.close(), o3(e4.data.message.signedData.map((e5) => E(e5.signedData)));
                break;
              case "SIGN_TXN_NETWORK_MISMATCH":
                a4(new s({ type: `${n3}_NETWORK_MISMATCH`, detail: e4.data.message.error }, e4.data.message.error || "Network mismatch"));
                break;
              case "SIGN_TXN_CALLBACK_ERROR":
                null == t4 || t4.close(), a4(new s({ type: `${n3}_CANCELLED` }, e4.data.message.error));
                break;
              case "SESSION_DISCONNECTED":
                null == t4 || t4.close(), T(), a4(new s({ type: "SESSION_DISCONNECTED", detail: e4.data.message.error }, e4.data.message.error));
            }
          }({ event: t3, newPeraWalletTab: a3, method: e3, resolve: r2, reject: i2 }) });
        } catch (e4) {
          i2(e4);
        }
      });
    }();
  }
  function P({ webWalletURL: e3, chainId: t2, resolve: n2, reject: o2 }) {
    const a2 = M(e3);
    return function() {
      return l(this, void 0, void 0, function* () {
        try {
          const e4 = yield p(a2.CONNECT);
          e4 && c.sendMessage({ message: { type: "CONNECT", data: Object.assign(Object.assign({}, d()), { chainId: t2 }) }, origin: a2.CONNECT, targetWindow: e4 });
          const i2 = setInterval(() => {
            true === (null == e4 ? void 0 : e4.closed) && (o2(new s({ type: "CONNECT_CANCELLED" }, "Connect is cancelled by user")), clearInterval(i2), r2());
          }, 2e3);
          c.setupListener({ onReceiveMessage: (t3) => function({ event: e5, newPeraWalletTab: t4, resolve: n3, reject: o3 }) {
            if (n3 && "CONNECT_CALLBACK" === e5.data.message.type) {
              const o4 = e5.data.message.data.addresses;
              y(o4, "pera-wallet-web"), n3(o4), m("pera-wallet-connect-modal-wrapper"), null == t4 || t4.close();
            } else
              "CONNECT_NETWORK_MISMATCH" === e5.data.message.type && (o3(new s({ type: "CONNECT_NETWORK_MISMATCH", detail: e5.data.message.error }, e5.data.message.error || "Your wallet is connected to a different network to this dApp. Update your wallet to the correct network (MainNet or TestNet) to continue.")), m("pera-wallet-connect-modal-wrapper"), null == t4 || t4.close());
          }({ event: t3, newPeraWalletTab: e4, resolve: n2, reject: o2 }) });
        } catch (e4) {
          r2(), o2(e4);
        }
      });
    };
    function r2() {
      m("pera-wallet-connect-modal-wrapper");
    }
  }
  function D({ isWebWalletAvailable: e3, shouldDisplayNewBadge: t2, shouldUseSound: n2, compactMode: o2, promoteMobile: a2 }) {
    return { open: (r2 = { isWebWalletAvailable: e3, shouldDisplayNewBadge: t2, shouldUseSound: n2, compactMode: o2, promoteMobile: a2 }, (e4) => {
      if (!document.getElementById("pera-wallet-connect-modal-wrapper")) {
        const t3 = h("pera-wallet-connect-modal-wrapper"), n3 = `${e4}&algorand=true`, { isWebWalletAvailable: o3, shouldDisplayNewBadge: a3, shouldUseSound: i2, compactMode: l2, promoteMobile: s2 } = r2;
        t3.innerHTML = `<pera-wallet-connect-modal uri="${n3}" is-web-wallet-avaliable="${o3}" should-display-new-badge="${a3}" should-use-sound="${i2}" compact-mode="${l2}" promote-mobile="${s2}"></pera-wallet-connect-modal>`;
      }
    }), close: () => m("pera-wallet-connect-modal-wrapper") };
    var r2;
  }
  "undefined" != typeof window && (window.global = window, window.Buffer = window.Buffer || buffer.Buffer, Promise.resolve().then(function() {
    return requireApp16459877();
  })), indexE9eae2a3.PERA_DOWNLOAD_URL = "https://perawallet.app/download/", indexE9eae2a3.PERA_WALLET_APP_DEEP_LINK = O, indexE9eae2a3.PERA_WALLET_CONNECT_MODAL_ID = "pera-wallet-connect-modal-wrapper", indexE9eae2a3.PERA_WALLET_MODAL_CLASSNAME = "pera-wallet-modal", indexE9eae2a3.PERA_WALLET_REDIRECT_MODAL_ID = "pera-wallet-redirect-modal-wrapper", indexE9eae2a3.PERA_WALLET_SIGN_TXN_MODAL_ID = "pera-wallet-sign-txn-modal-wrapper", indexE9eae2a3.PERA_WALLET_SIGN_TXN_TOAST_ID = "pera-wallet-sign-txn-toast-wrapper", indexE9eae2a3.PeraWalletConnect = class {
    constructor(e3) {
      this.bridge = (null == e3 ? void 0 : e3.bridge) || "", this.connector = null, this.shouldShowSignTxnToast = void 0 === (null == e3 ? void 0 : e3.shouldShowSignTxnToast) || e3.shouldShowSignTxnToast, this.chainId = null == e3 ? void 0 : e3.chainId, this.compactMode = (null == e3 ? void 0 : e3.compactMode) || false;
    }
    get platform() {
      return function() {
        const e3 = N();
        let t2 = null;
        return "pera-wallet" === (null == e3 ? void 0 : e3.type) ? t2 = "mobile" : "pera-wallet-web" === (null == e3 ? void 0 : e3.type) && (t2 = "web"), t2;
      }();
    }
    get isConnected() {
      var e3;
      return "mobile" === this.platform ? !!this.connector : "web" === this.platform && !!(null === (e3 = N()) || void 0 === e3 ? void 0 : e3.accounts.length);
    }
    connect() {
      return new Promise((e3, t2) => l(this, void 0, void 0, function* () {
        var n2;
        try {
          if (null === (n2 = this.connector) || void 0 === n2 ? void 0 : n2.connected)
            try {
              yield this.connector.killSession();
            } catch (e4) {
            }
          const { isWebWalletAvailable: o2, bridgeURL: r2, webWalletURL: i2, shouldDisplayNewBadge: l2, shouldUseSound: c2, promoteMobile: d2 } = yield S(), u2 = P({ resolve: e3, reject: t2, webWalletURL: i2, chainId: this.chainId, isCompactMode: this.compactMode });
          o2 && (window.onWebWalletConnect = u2), this.connector = new a.default({ bridge: this.bridge || r2 || "https://bridge.walletconnect.org", qrcodeModal: D({ isWebWalletAvailable: o2, shouldDisplayNewBadge: l2, shouldUseSound: c2, compactMode: this.compactMode, promoteMobile: d2 }) }), yield this.connector.createSession({ chainId: this.chainId || 4160 }), function(e4, t3) {
            var n3, o3, a2, r3;
            const i3 = document.getElementById(e4), l3 = null === (o3 = null === (n3 = null == i3 ? void 0 : i3.querySelector(e4.replace("-wrapper", ""))) || void 0 === n3 ? void 0 : n3.shadowRoot) || void 0 === o3 ? void 0 : o3.querySelector(".pera-wallet-modal"), s2 = null === (r3 = null === (a2 = null == l3 ? void 0 : l3.querySelector("pera-wallet-modal-header")) || void 0 === a2 ? void 0 : a2.shadowRoot) || void 0 === r3 ? void 0 : r3.getElementById("pera-wallet-modal-header-close-button");
            null == s2 || s2.addEventListener("click", () => {
              t3(), m(e4);
            });
          }("pera-wallet-connect-modal-wrapper", () => t2(new s({ type: "CONNECT_MODAL_CLOSED" }, "Connect modal is closed by user"))), this.connector.on("connect", (n3, o3) => {
            var a2, r3;
            n3 && t2(n3), e3((null === (a2 = this.connector) || void 0 === a2 ? void 0 : a2.accounts) || []), y((null === (r3 = this.connector) || void 0 === r3 ? void 0 : r3.accounts) || []);
          });
        } catch (e4) {
          console.log(e4), t2(new s({ type: "SESSION_CONNECT", detail: e4 }, e4.message || "There was an error while connecting to Pera Wallet"));
        }
      }));
    }
    reconnectSession() {
      return new Promise((e3, t2) => l(this, void 0, void 0, function* () {
        var n2, o2;
        try {
          const r2 = N();
          if (!r2)
            return void e3([]);
          if ("pera-wallet-web" === (null == r2 ? void 0 : r2.type)) {
            const { isWebWalletAvailable: n3 } = yield S();
            n3 ? e3(r2.accounts || []) : t2(new s({ type: "SESSION_RECONNECT", detail: "Pera Web is not available" }, "Pera Web is not available"));
          }
          this.connector && e3(this.connector.accounts || []), this.bridge = (null === (n2 = function() {
            var e4;
            const t3 = null === (e4 = b()) || void 0 === e4 ? void 0 : e4.getItem(f);
            return t3 ? JSON.parse(t3) : null;
          }()) || void 0 === n2 ? void 0 : n2.bridge) || "", this.bridge && (this.connector = new a.default({ bridge: this.bridge }), e3((null === (o2 = this.connector) || void 0 === o2 ? void 0 : o2.accounts) || [])), this.isConnected || e3([]);
        } catch (e4) {
          yield this.disconnect(), t2(new s({ type: "SESSION_RECONNECT", detail: e4 }, e4.message || "There was an error while reconnecting to Pera Wallet"));
        }
      }));
    }
    disconnect() {
      var e3;
      return l(this, void 0, void 0, function* () {
        let t2;
        this.isConnected && "mobile" === this.platform && (t2 = null === (e3 = this.connector) || void 0 === e3 ? void 0 : e3.killSession(), null == t2 || t2.then(() => {
          this.connector = null;
        })), yield T();
      });
    }
    signTransactionWithMobile(e3) {
      return l(this, void 0, void 0, function* () {
        const t2 = C("algo_signTxn", [e3]);
        try {
          try {
            const { silent: e4 } = yield S(), n2 = (yield this.connector.sendCustomRequest(t2, { forcePushNotification: !e4 })).filter(Boolean);
            return "string" == typeof n2[0] ? n2.map(E) : n2.map((e5) => Uint8Array.from(e5));
          } catch (e4) {
            return yield Promise.reject(new s({ type: "SIGN_TRANSACTIONS", detail: e4 }, e4.message || "Failed to sign transaction"));
          }
        } finally {
          m("pera-wallet-redirect-modal-wrapper"), m("pera-wallet-sign-txn-toast-wrapper");
        }
      });
    }
    signTransactionWithWeb(e3, t2) {
      return new Promise((n2, o2) => R({ signTxnRequestParams: e3, webWalletURL: t2, method: "SIGN_TXN", resolve: n2, reject: o2 }));
    }
    signDataWithMobile({ data: e3, signer: t2, chainId: n2 }) {
      return l(this, void 0, void 0, function* () {
        const o2 = C("algo_signData", e3.map((e4) => Object.assign(Object.assign({}, e4), { signer: t2, chainId: n2 })));
        try {
          try {
            const { silent: e4 } = yield S(), t3 = (yield this.connector.sendCustomRequest(o2, { forcePushNotification: !e4 })).filter(Boolean);
            return "string" == typeof t3[0] ? t3.map(E) : t3.map((e5) => Uint8Array.from(e5));
          } catch (e4) {
            return yield Promise.reject(new s({ type: "SIGN_TRANSACTIONS", detail: e4 }, e4.message || "Failed to sign transaction"));
          }
        } finally {
          m("pera-wallet-redirect-modal-wrapper"), m("pera-wallet-sign-txn-toast-wrapper");
        }
      });
    }
    signDataWithWeb({ data: e3, signer: t2, chainId: n2, webWalletURL: o2 }) {
      return new Promise((a2, r2) => R({ method: "SIGN_DATA", signTxnRequestParams: e3, signer: t2, chainId: n2, webWalletURL: o2, resolve: a2, reject: r2 }));
    }
    signTransaction(e3, t2) {
      return l(this, void 0, void 0, function* () {
        if ("mobile" === this.platform && (L() ? w() : !L() && this.shouldShowSignTxnToast && g(), !this.connector))
          throw new Error("PeraWalletConnect was not initialized correctly.");
        const n2 = e3.flatMap((e4) => e4.map((e5) => function(e6, t3) {
          let n3;
          t3 && !(e6.signers || []).includes(t3) && (n3 = []);
          const o2 = { txn: (a2 = e6.txn, Buffer.from(r.default.encodeUnsignedTransaction(a2)).toString("base64")) };
          var a2;
          return Array.isArray(n3) && (o2.signers = n3), e6.authAddr && (o2.authAddr = e6.authAddr), e6.message && (o2.message = e6.message), e6.msig && (o2.msig = e6.msig), o2;
        }(e5, t2)));
        if ("web" === this.platform) {
          const { webWalletURL: e4 } = yield S();
          return this.signTransactionWithWeb(n2, e4);
        }
        return this.signTransactionWithMobile(n2);
      });
    }
    signData(e3, t2) {
      return l(this, void 0, void 0, function* () {
        const n2 = this.chainId || 4160;
        if ("mobile" === this.platform && (L() ? w() : !L() && this.shouldShowSignTxnToast && g(), !this.connector))
          throw new Error("PeraWalletConnect was not initialized correctly.");
        if ("web" === this.platform) {
          const { webWalletURL: o2 } = yield S();
          return this.signDataWithWeb({ data: e3, signer: t2, chainId: n2, webWalletURL: o2 });
        }
        return this.signDataWithMobile({ data: e3, signer: t2, chainId: n2 });
      });
    }
  }, indexE9eae2a3.closePeraWalletSignTxnToast = function() {
    m("pera-wallet-sign-txn-toast-wrapper");
  }, indexE9eae2a3.detectBrowser = function() {
    if (!I())
      return null;
    const { userAgent: e3 } = navigator;
    let t2;
    return t2 = e3.match(/DuckDuckGo/i) ? "DuckDuckGo" : e3.match(/OPX/i) ? "Opera GX" : navigator.brave ? "Brave" : i.default.getParser(navigator.userAgent).getBrowserName(), t2;
  }, indexE9eae2a3.isAndroid = W, indexE9eae2a3.isIOS = function() {
    return I() && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }, indexE9eae2a3.isMobile = L, indexE9eae2a3.removeModalWrapperFromDOM = m;
  return indexE9eae2a3;
}
var closePeraWalletSignTxnToast;
var PeraWalletConnect;
Object.defineProperty(dist, "__esModule", { value: true });
var e = requireIndexE9eae2a3();
PeraWalletConnect = dist.PeraWalletConnect = e.PeraWalletConnect, closePeraWalletSignTxnToast = dist.closePeraWalletSignTxnToast = e.closePeraWalletSignTxnToast;
const index = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get PeraWalletConnect() {
    return PeraWalletConnect;
  },
  get closePeraWalletSignTxnToast() {
    return closePeraWalletSignTxnToast;
  },
  default: dist
}, [dist]);
export {
  index as i
};
