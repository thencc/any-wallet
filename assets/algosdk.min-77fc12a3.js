import { c as commonjsRequire, r as require$$0 } from "./index-ba02b125.js";
var algosdk_min = { exports: {} };
/*! For license information please see algosdk.min.js.LICENSE.txt */
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(self, () => (() => {
    var e = { 406: function(e2) {
      e2.exports = function(e3) {
        var t2 = {};
        function r2(s2) {
          if (t2[s2])
            return t2[s2].exports;
          var n = t2[s2] = { i: s2, l: false, exports: {} };
          return e3[s2].call(n.exports, n, n.exports, r2), n.l = true, n.exports;
        }
        return r2.m = e3, r2.c = t2, r2.d = function(e4, t3, s2) {
          r2.o(e4, t3) || Object.defineProperty(e4, t3, { enumerable: true, get: s2 });
        }, r2.r = function(e4) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
        }, r2.t = function(e4, t3) {
          if (1 & t3 && (e4 = r2(e4)), 8 & t3)
            return e4;
          if (4 & t3 && "object" == typeof e4 && e4 && e4.__esModule)
            return e4;
          var s2 = /* @__PURE__ */ Object.create(null);
          if (r2.r(s2), Object.defineProperty(s2, "default", { enumerable: true, value: e4 }), 2 & t3 && "string" != typeof e4)
            for (var n in e4)
              r2.d(s2, n, (function(t4) {
                return e4[t4];
              }).bind(null, n));
          return s2;
        }, r2.n = function(e4) {
          var t3 = e4 && e4.__esModule ? function() {
            return e4.default;
          } : function() {
            return e4;
          };
          return r2.d(t3, "a", t3), t3;
        }, r2.o = function(e4, t3) {
          return Object.prototype.hasOwnProperty.call(e4, t3);
        }, r2.p = "", r2(r2.s = 0);
      }([function(e3, t2, r2) {
        r2.r(t2), r2.d(t2, "encode", function() {
          return k;
        }), r2.d(t2, "decode", function() {
          return N;
        }), r2.d(t2, "decodeAsync", function() {
          return H;
        }), r2.d(t2, "decodeArrayStream", function() {
          return Y;
        }), r2.d(t2, "decodeStream", function() {
          return J;
        }), r2.d(t2, "Decoder", function() {
          return L;
        }), r2.d(t2, "Encoder", function() {
          return S;
        }), r2.d(t2, "ExtensionCodec", function() {
          return _;
        }), r2.d(t2, "ExtData", function() {
          return p;
        }), r2.d(t2, "EXT_TIMESTAMP", function() {
          return m;
        }), r2.d(t2, "encodeDateToTimeSpec", function() {
          return w;
        }), r2.d(t2, "encodeTimeSpecToTimestamp", function() {
          return y;
        }), r2.d(t2, "decodeTimestampToTimeSpec", function() {
          return v;
        }), r2.d(t2, "encodeTimestampExtension", function() {
          return b;
        }), r2.d(t2, "decodeTimestampExtension", function() {
          return x;
        });
        var s2 = function(e4, t3) {
          var r3 = "function" == typeof Symbol && e4[Symbol.iterator];
          if (!r3)
            return e4;
          var s3, n2, i2 = r3.call(e4), o2 = [];
          try {
            for (; (void 0 === t3 || t3-- > 0) && !(s3 = i2.next()).done; )
              o2.push(s3.value);
          } catch (e5) {
            n2 = { error: e5 };
          } finally {
            try {
              s3 && !s3.done && (r3 = i2.return) && r3.call(i2);
            } finally {
              if (n2)
                throw n2.error;
            }
          }
          return o2;
        }, n = function() {
          for (var e4 = [], t3 = 0; t3 < arguments.length; t3++)
            e4 = e4.concat(s2(arguments[t3]));
          return e4;
        }, i = "undefined" != typeof process && "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder;
        function o(e4) {
          for (var t3 = e4.length, r3 = 0, s3 = 0; s3 < t3; ) {
            var n2 = e4.charCodeAt(s3++);
            if (0 != (4294967168 & n2))
              if (0 == (4294965248 & n2))
                r3 += 2;
              else {
                if (n2 >= 55296 && n2 <= 56319 && s3 < t3) {
                  var i2 = e4.charCodeAt(s3);
                  56320 == (64512 & i2) && (++s3, n2 = ((1023 & n2) << 10) + (1023 & i2) + 65536);
                }
                r3 += 0 == (4294901760 & n2) ? 3 : 4;
              }
            else
              r3++;
          }
          return r3;
        }
        var a = i ? new TextEncoder() : void 0, c = "undefined" != typeof process ? 200 : 0, u = (null == a ? void 0 : a.encodeInto) ? function(e4, t3, r3) {
          a.encodeInto(e4, t3.subarray(r3));
        } : function(e4, t3, r3) {
          t3.set(a.encode(e4), r3);
        };
        function l(e4, t3, r3) {
          for (var s3 = t3, i2 = s3 + r3, o2 = [], a2 = ""; s3 < i2; ) {
            var c2 = e4[s3++];
            if (0 == (128 & c2))
              o2.push(c2);
            else if (192 == (224 & c2)) {
              var u2 = 63 & e4[s3++];
              o2.push((31 & c2) << 6 | u2);
            } else if (224 == (240 & c2)) {
              u2 = 63 & e4[s3++];
              var l2 = 63 & e4[s3++];
              o2.push((31 & c2) << 12 | u2 << 6 | l2);
            } else if (240 == (248 & c2)) {
              var h2 = (7 & c2) << 18 | (u2 = 63 & e4[s3++]) << 12 | (l2 = 63 & e4[s3++]) << 6 | 63 & e4[s3++];
              h2 > 65535 && (h2 -= 65536, o2.push(h2 >>> 10 & 1023 | 55296), h2 = 56320 | 1023 & h2), o2.push(h2);
            } else
              o2.push(c2);
            o2.length >= 4096 && (a2 += String.fromCharCode.apply(String, n(o2)), o2.length = 0);
          }
          return o2.length > 0 && (a2 += String.fromCharCode.apply(String, n(o2))), a2;
        }
        var h = i ? new TextDecoder() : null, d = "undefined" != typeof process ? 200 : 0, p = function(e4, t3) {
          this.type = e4, this.data = t3;
        };
        function f(e4, t3, r3) {
          var s3 = Math.floor(r3 / 4294967296), n2 = r3;
          e4.setUint32(t3, s3), e4.setUint32(t3 + 4, n2);
        }
        function g(e4, t3) {
          var r3 = e4.getInt32(t3), s3 = e4.getUint32(t3 + 4), n2 = r3 < Math.floor(Number.MIN_SAFE_INTEGER / 4294967296) || r3 === Math.floor(Number.MIN_SAFE_INTEGER / 4294967296) && 0 === s3, i2 = r3 > Math.floor(Number.MAX_SAFE_INTEGER / 4294967296);
          return n2 || i2 ? BigInt(r3) * BigInt(4294967296) + BigInt(s3) : 4294967296 * r3 + s3;
        }
        var m = -1;
        function y(e4) {
          var t3, r3 = e4.sec, s3 = e4.nsec;
          if (r3 >= 0 && s3 >= 0 && r3 <= 17179869183) {
            if (0 === s3 && r3 <= 4294967295) {
              var n2 = new Uint8Array(4);
              return (t3 = new DataView(n2.buffer)).setUint32(0, r3), n2;
            }
            var i2 = r3 / 4294967296, o2 = 4294967295 & r3;
            return n2 = new Uint8Array(8), (t3 = new DataView(n2.buffer)).setUint32(0, s3 << 2 | 3 & i2), t3.setUint32(4, o2), n2;
          }
          return n2 = new Uint8Array(12), (t3 = new DataView(n2.buffer)).setUint32(0, s3), f(t3, 4, r3), n2;
        }
        function w(e4) {
          var t3 = e4.getTime(), r3 = Math.floor(t3 / 1e3), s3 = 1e6 * (t3 - 1e3 * r3), n2 = Math.floor(s3 / 1e9);
          return { sec: r3 + n2, nsec: s3 - 1e9 * n2 };
        }
        function b(e4) {
          return e4 instanceof Date ? y(w(e4)) : null;
        }
        function v(e4) {
          var t3 = new DataView(e4.buffer, e4.byteOffset, e4.byteLength);
          switch (e4.byteLength) {
            case 4:
              return { sec: t3.getUint32(0), nsec: 0 };
            case 8:
              var r3 = t3.getUint32(0);
              return { sec: 4294967296 * (3 & r3) + t3.getUint32(4), nsec: r3 >>> 2 };
            case 12:
              return { sec: g(t3, 4), nsec: t3.getUint32(0) };
            default:
              throw new Error("Unrecognized data size for timestamp: " + e4.length);
          }
        }
        function x(e4) {
          var t3 = v(e4);
          return new Date(1e3 * t3.sec + t3.nsec / 1e6);
        }
        var A = { type: m, encode: b, decode: x }, _ = function() {
          function e4() {
            this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(A);
          }
          return e4.prototype.register = function(e5) {
            var t3 = e5.type, r3 = e5.encode, s3 = e5.decode;
            if (t3 >= 0)
              this.encoders[t3] = r3, this.decoders[t3] = s3;
            else {
              var n2 = 1 + t3;
              this.builtInEncoders[n2] = r3, this.builtInDecoders[n2] = s3;
            }
          }, e4.prototype.tryToEncode = function(e5, t3) {
            for (var r3 = 0; r3 < this.builtInEncoders.length; r3++)
              if (null != (s3 = this.builtInEncoders[r3]) && null != (n2 = s3(e5, t3)))
                return new p(-1 - r3, n2);
            for (r3 = 0; r3 < this.encoders.length; r3++) {
              var s3, n2;
              if (null != (s3 = this.encoders[r3]) && null != (n2 = s3(e5, t3)))
                return new p(r3, n2);
            }
            return e5 instanceof p ? e5 : null;
          }, e4.prototype.decode = function(e5, t3, r3) {
            var s3 = t3 < 0 ? this.builtInDecoders[-1 - t3] : this.decoders[t3];
            return s3 ? s3(e5, t3, r3) : new p(t3, e5);
          }, e4.defaultCodec = new e4(), e4;
        }();
        function E(e4) {
          return e4 instanceof Uint8Array ? e4 : ArrayBuffer.isView(e4) ? new Uint8Array(e4.buffer, e4.byteOffset, e4.byteLength) : e4 instanceof ArrayBuffer ? new Uint8Array(e4) : Uint8Array.from(e4);
        }
        var T = function(e4) {
          var t3 = "function" == typeof Symbol && Symbol.iterator, r3 = t3 && e4[t3], s3 = 0;
          if (r3)
            return r3.call(e4);
          if (e4 && "number" == typeof e4.length)
            return { next: function() {
              return e4 && s3 >= e4.length && (e4 = void 0), { value: e4 && e4[s3++], done: !e4 };
            } };
          throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }, S = function() {
          function e4(e5, t3, r3, s3, n2, i2, o2, a2) {
            void 0 === e5 && (e5 = _.defaultCodec), void 0 === t3 && (t3 = void 0), void 0 === r3 && (r3 = 100), void 0 === s3 && (s3 = 2048), void 0 === n2 && (n2 = false), void 0 === i2 && (i2 = false), void 0 === o2 && (o2 = false), void 0 === a2 && (a2 = false), this.extensionCodec = e5, this.context = t3, this.maxDepth = r3, this.initialBufferSize = s3, this.sortKeys = n2, this.forceFloat32 = i2, this.ignoreUndefined = o2, this.forceIntegerToFloat = a2, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
          }
          return e4.prototype.getUint8Array = function() {
            return this.bytes.subarray(0, this.pos);
          }, e4.prototype.reinitializeState = function() {
            this.pos = 0;
          }, e4.prototype.encode = function(e5) {
            return this.reinitializeState(), this.doEncode(e5, 1), this.getUint8Array();
          }, e4.prototype.doEncode = function(e5, t3) {
            if (t3 > this.maxDepth)
              throw new Error("Too deep objects in depth " + t3);
            null == e5 ? this.encodeNil() : "boolean" == typeof e5 ? this.encodeBoolean(e5) : "number" == typeof e5 ? this.encodeNumber(e5) : "string" == typeof e5 ? this.encodeString(e5) : "bigint" == typeof e5 ? this.encodebigint(e5) : this.encodeObject(e5, t3);
          }, e4.prototype.ensureBufferSizeToWrite = function(e5) {
            var t3 = this.pos + e5;
            this.view.byteLength < t3 && this.resizeBuffer(2 * t3);
          }, e4.prototype.resizeBuffer = function(e5) {
            var t3 = new ArrayBuffer(e5), r3 = new Uint8Array(t3), s3 = new DataView(t3);
            r3.set(this.bytes), this.view = s3, this.bytes = r3;
          }, e4.prototype.encodeNil = function() {
            this.writeU8(192);
          }, e4.prototype.encodeBoolean = function(e5) {
            false === e5 ? this.writeU8(194) : this.writeU8(195);
          }, e4.prototype.encodeNumber = function(e5) {
            Number.isSafeInteger(e5) && !this.forceIntegerToFloat ? e5 >= 0 ? e5 < 128 ? this.writeU8(e5) : e5 < 256 ? (this.writeU8(204), this.writeU8(e5)) : e5 < 65536 ? (this.writeU8(205), this.writeU16(e5)) : e5 < 4294967296 ? (this.writeU8(206), this.writeU32(e5)) : (this.writeU8(207), this.writeU64(e5)) : e5 >= -32 ? this.writeU8(224 | e5 + 32) : e5 >= -128 ? (this.writeU8(208), this.writeI8(e5)) : e5 >= -32768 ? (this.writeU8(209), this.writeI16(e5)) : e5 >= -2147483648 ? (this.writeU8(210), this.writeI32(e5)) : (this.writeU8(211), this.writeI64(e5)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(e5)) : (this.writeU8(203), this.writeF64(e5));
          }, e4.prototype.encodebigint = function(e5) {
            e5 >= BigInt(0) ? e5 < BigInt(128) ? this.writeU8(Number(e5)) : e5 < BigInt(256) ? (this.writeU8(204), this.writeU8(Number(e5))) : e5 < BigInt(65536) ? (this.writeU8(205), this.writeU16(Number(e5))) : e5 < BigInt(4294967296) ? (this.writeU8(206), this.writeU32(Number(e5))) : (this.writeU8(207), this.writeBig64(e5)) : e5 >= BigInt(-32) ? this.writeU8(224 | Number(e5) + 32) : e5 >= BigInt(-128) ? (this.writeU8(208), this.writeI8(Number(e5))) : e5 >= BigInt(-32768) ? (this.writeU8(209), this.writeI16(Number(e5))) : e5 >= BigInt(-2147483648) ? (this.writeU8(210), this.writeI32(Number(e5))) : (this.writeU8(211), this.writeBig64(e5));
          }, e4.prototype.writeStringHeader = function(e5) {
            if (e5 < 32)
              this.writeU8(160 + e5);
            else if (e5 < 256)
              this.writeU8(217), this.writeU8(e5);
            else if (e5 < 65536)
              this.writeU8(218), this.writeU16(e5);
            else {
              if (!(e5 < 4294967296))
                throw new Error("Too long string: " + e5 + " bytes in UTF-8");
              this.writeU8(219), this.writeU32(e5);
            }
          }, e4.prototype.encodeString = function(e5) {
            var t3 = e5.length;
            if (i && t3 > c) {
              var r3 = o(e5);
              this.ensureBufferSizeToWrite(5 + r3), this.writeStringHeader(r3), u(e5, this.bytes, this.pos), this.pos += r3;
            } else
              r3 = o(e5), this.ensureBufferSizeToWrite(5 + r3), this.writeStringHeader(r3), function(e6, t4, r4) {
                for (var s3 = e6.length, n2 = r4, i2 = 0; i2 < s3; ) {
                  var o2 = e6.charCodeAt(i2++);
                  if (0 != (4294967168 & o2)) {
                    if (0 == (4294965248 & o2))
                      t4[n2++] = o2 >> 6 & 31 | 192;
                    else {
                      if (o2 >= 55296 && o2 <= 56319 && i2 < s3) {
                        var a2 = e6.charCodeAt(i2);
                        56320 == (64512 & a2) && (++i2, o2 = ((1023 & o2) << 10) + (1023 & a2) + 65536);
                      }
                      0 == (4294901760 & o2) ? (t4[n2++] = o2 >> 12 & 15 | 224, t4[n2++] = o2 >> 6 & 63 | 128) : (t4[n2++] = o2 >> 18 & 7 | 240, t4[n2++] = o2 >> 12 & 63 | 128, t4[n2++] = o2 >> 6 & 63 | 128);
                    }
                    t4[n2++] = 63 & o2 | 128;
                  } else
                    t4[n2++] = o2;
                }
              }(e5, this.bytes, this.pos), this.pos += r3;
          }, e4.prototype.encodeObject = function(e5, t3) {
            var r3 = this.extensionCodec.tryToEncode(e5, this.context);
            if (null != r3)
              this.encodeExtension(r3);
            else if (Array.isArray(e5))
              this.encodeArray(e5, t3);
            else if (ArrayBuffer.isView(e5))
              this.encodeBinary(e5);
            else {
              if ("object" != typeof e5)
                throw new Error("Unrecognized object: " + Object.prototype.toString.apply(e5));
              this.encodeMap(e5, t3);
            }
          }, e4.prototype.encodeBinary = function(e5) {
            var t3 = e5.byteLength;
            if (t3 < 256)
              this.writeU8(196), this.writeU8(t3);
            else if (t3 < 65536)
              this.writeU8(197), this.writeU16(t3);
            else {
              if (!(t3 < 4294967296))
                throw new Error("Too large binary: " + t3);
              this.writeU8(198), this.writeU32(t3);
            }
            var r3 = E(e5);
            this.writeU8a(r3);
          }, e4.prototype.encodeArray = function(e5, t3) {
            var r3, s3, n2 = e5.length;
            if (n2 < 16)
              this.writeU8(144 + n2);
            else if (n2 < 65536)
              this.writeU8(220), this.writeU16(n2);
            else {
              if (!(n2 < 4294967296))
                throw new Error("Too large array: " + n2);
              this.writeU8(221), this.writeU32(n2);
            }
            try {
              for (var i2 = T(e5), o2 = i2.next(); !o2.done; o2 = i2.next()) {
                var a2 = o2.value;
                this.doEncode(a2, t3 + 1);
              }
            } catch (e6) {
              r3 = { error: e6 };
            } finally {
              try {
                o2 && !o2.done && (s3 = i2.return) && s3.call(i2);
              } finally {
                if (r3)
                  throw r3.error;
              }
            }
          }, e4.prototype.countWithoutUndefined = function(e5, t3) {
            var r3, s3, n2 = 0;
            try {
              for (var i2 = T(t3), o2 = i2.next(); !o2.done; o2 = i2.next())
                void 0 !== e5[o2.value] && n2++;
            } catch (e6) {
              r3 = { error: e6 };
            } finally {
              try {
                o2 && !o2.done && (s3 = i2.return) && s3.call(i2);
              } finally {
                if (r3)
                  throw r3.error;
              }
            }
            return n2;
          }, e4.prototype.encodeMap = function(e5, t3) {
            var r3, s3, n2 = Object.keys(e5);
            this.sortKeys && n2.sort();
            var i2 = this.ignoreUndefined ? this.countWithoutUndefined(e5, n2) : n2.length;
            if (i2 < 16)
              this.writeU8(128 + i2);
            else if (i2 < 65536)
              this.writeU8(222), this.writeU16(i2);
            else {
              if (!(i2 < 4294967296))
                throw new Error("Too large map object: " + i2);
              this.writeU8(223), this.writeU32(i2);
            }
            try {
              for (var o2 = T(n2), a2 = o2.next(); !a2.done; a2 = o2.next()) {
                var c2 = a2.value, u2 = e5[c2];
                this.ignoreUndefined && void 0 === u2 || (this.encodeString(c2), this.doEncode(u2, t3 + 1));
              }
            } catch (e6) {
              r3 = { error: e6 };
            } finally {
              try {
                a2 && !a2.done && (s3 = o2.return) && s3.call(o2);
              } finally {
                if (r3)
                  throw r3.error;
              }
            }
          }, e4.prototype.encodeExtension = function(e5) {
            var t3 = e5.data.length;
            if (1 === t3)
              this.writeU8(212);
            else if (2 === t3)
              this.writeU8(213);
            else if (4 === t3)
              this.writeU8(214);
            else if (8 === t3)
              this.writeU8(215);
            else if (16 === t3)
              this.writeU8(216);
            else if (t3 < 256)
              this.writeU8(199), this.writeU8(t3);
            else if (t3 < 65536)
              this.writeU8(200), this.writeU16(t3);
            else {
              if (!(t3 < 4294967296))
                throw new Error("Too large extension object: " + t3);
              this.writeU8(201), this.writeU32(t3);
            }
            this.writeI8(e5.type), this.writeU8a(e5.data);
          }, e4.prototype.writeU8 = function(e5) {
            this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, e5), this.pos++;
          }, e4.prototype.writeU8a = function(e5) {
            var t3 = e5.length;
            this.ensureBufferSizeToWrite(t3), this.bytes.set(e5, this.pos), this.pos += t3;
          }, e4.prototype.writeI8 = function(e5) {
            this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e5), this.pos++;
          }, e4.prototype.writeU16 = function(e5) {
            this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, e5), this.pos += 2;
          }, e4.prototype.writeI16 = function(e5) {
            this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, e5), this.pos += 2;
          }, e4.prototype.writeU32 = function(e5) {
            this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, e5), this.pos += 4;
          }, e4.prototype.writeI32 = function(e5) {
            this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, e5), this.pos += 4;
          }, e4.prototype.writeF32 = function(e5) {
            this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, e5), this.pos += 4;
          }, e4.prototype.writeF64 = function(e5) {
            this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, e5), this.pos += 8;
          }, e4.prototype.writeU64 = function(e5) {
            this.ensureBufferSizeToWrite(8), function(e6, t3, r3) {
              var s3 = r3 / 4294967296, n2 = r3;
              e6.setUint32(t3, s3), e6.setUint32(t3 + 4, n2);
            }(this.view, this.pos, e5), this.pos += 8;
          }, e4.prototype.writeI64 = function(e5) {
            this.ensureBufferSizeToWrite(8), f(this.view, this.pos, e5), this.pos += 8;
          }, e4.prototype.writeBig64 = function(e5) {
            this.ensureBufferSizeToWrite(8), function(e6, t3, r3) {
              var s3 = Number(r3 / BigInt(4294967296)), n2 = Number(r3 % BigInt(4294967296));
              s3 < 0 && 0 !== n2 && (s3 -= 1), e6.setUint32(t3, s3), e6.setUint32(t3 + 4, n2);
            }(this.view, this.pos, e5), this.pos += 8;
          }, e4;
        }(), R = {};
        function k(e4, t3) {
          return void 0 === t3 && (t3 = R), new S(t3.extensionCodec, t3.context, t3.maxDepth, t3.initialBufferSize, t3.sortKeys, t3.forceFloat32, t3.ignoreUndefined, t3.forceIntegerToFloat).encode(e4);
        }
        function I(e4) {
          return (e4 < 0 ? "-" : "") + "0x" + Math.abs(e4).toString(16).padStart(2, "0");
        }
        var B = function() {
          function e4(e5, t3) {
            void 0 === e5 && (e5 = 16), void 0 === t3 && (t3 = 16), this.maxKeyLength = e5, this.maxLengthPerKey = t3, this.hit = 0, this.miss = 0, this.caches = [];
            for (var r3 = 0; r3 < this.maxKeyLength; r3++)
              this.caches.push([]);
          }
          return e4.prototype.canBeCached = function(e5) {
            return e5 > 0 && e5 <= this.maxKeyLength;
          }, e4.prototype.get = function(e5, t3, r3) {
            var s3 = this.caches[r3 - 1], n2 = s3.length;
            e:
              for (var i2 = 0; i2 < n2; i2++) {
                for (var o2 = s3[i2], a2 = o2.bytes, c2 = 0; c2 < r3; c2++)
                  if (a2[c2] !== e5[t3 + c2])
                    continue e;
                return o2.value;
              }
            return null;
          }, e4.prototype.store = function(e5, t3) {
            var r3 = this.caches[e5.length - 1], s3 = { bytes: e5, value: t3 };
            r3.length >= this.maxLengthPerKey ? r3[Math.random() * r3.length | 0] = s3 : r3.push(s3);
          }, e4.prototype.decode = function(e5, t3, r3) {
            var s3 = this.get(e5, t3, r3);
            if (null != s3)
              return this.hit++, s3;
            this.miss++;
            var n2 = l(e5, t3, r3), i2 = Uint8Array.prototype.slice.call(e5, t3, t3 + r3);
            return this.store(i2, n2), n2;
          }, e4;
        }(), U = function(e4, t3) {
          var r3, s3, n2, i2, o2 = { label: 0, sent: function() {
            if (1 & n2[0])
              throw n2[1];
            return n2[1];
          }, trys: [], ops: [] };
          return i2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function a2(i3) {
            return function(a3) {
              return function(i4) {
                if (r3)
                  throw new TypeError("Generator is already executing.");
                for (; o2; )
                  try {
                    if (r3 = 1, s3 && (n2 = 2 & i4[0] ? s3.return : i4[0] ? s3.throw || ((n2 = s3.return) && n2.call(s3), 0) : s3.next) && !(n2 = n2.call(s3, i4[1])).done)
                      return n2;
                    switch (s3 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                      case 0:
                      case 1:
                        n2 = i4;
                        break;
                      case 4:
                        return o2.label++, { value: i4[1], done: false };
                      case 5:
                        o2.label++, s3 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = o2.ops.pop(), o2.trys.pop();
                        continue;
                      default:
                        if (!((n2 = (n2 = o2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          o2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                          o2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && o2.label < n2[1]) {
                          o2.label = n2[1], n2 = i4;
                          break;
                        }
                        if (n2 && o2.label < n2[2]) {
                          o2.label = n2[2], o2.ops.push(i4);
                          break;
                        }
                        n2[2] && o2.ops.pop(), o2.trys.pop();
                        continue;
                    }
                    i4 = t3.call(e4, o2);
                  } catch (e5) {
                    i4 = [6, e5], s3 = 0;
                  } finally {
                    r3 = n2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, a3]);
            };
          }
        }, P = function(e4) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var t3, r3 = e4[Symbol.asyncIterator];
          return r3 ? r3.call(e4) : (e4 = "function" == typeof __values ? __values(e4) : e4[Symbol.iterator](), t3 = {}, s3("next"), s3("throw"), s3("return"), t3[Symbol.asyncIterator] = function() {
            return this;
          }, t3);
          function s3(r4) {
            t3[r4] = e4[r4] && function(t4) {
              return new Promise(function(s4, n2) {
                !function(e5, t5, r5, s5) {
                  Promise.resolve(s5).then(function(t6) {
                    e5({ value: t6, done: r5 });
                  }, t5);
                }(s4, n2, (t4 = e4[r4](t4)).done, t4.value);
              });
            };
          }
        }, j = function(e4) {
          return this instanceof j ? (this.v = e4, this) : new j(e4);
        }, q = new DataView(new ArrayBuffer(0)), D = new Uint8Array(q.buffer), $ = function() {
          try {
            q.getInt8(0);
          } catch (e4) {
            return e4.constructor;
          }
          throw new Error("never reached");
        }(), O = new $("Insufficient data"), C = new B(), L = function() {
          function e4(e5, t3, r3, s3, n2, i2, o2, a2) {
            void 0 === e5 && (e5 = _.defaultCodec), void 0 === t3 && (t3 = void 0), void 0 === r3 && (r3 = 4294967295), void 0 === s3 && (s3 = 4294967295), void 0 === n2 && (n2 = 4294967295), void 0 === i2 && (i2 = 4294967295), void 0 === o2 && (o2 = 4294967295), void 0 === a2 && (a2 = C), this.extensionCodec = e5, this.context = t3, this.maxStrLength = r3, this.maxBinLength = s3, this.maxArrayLength = n2, this.maxMapLength = i2, this.maxExtLength = o2, this.keyDecoder = a2, this.totalPos = 0, this.pos = 0, this.view = q, this.bytes = D, this.headByte = -1, this.stack = [];
          }
          return e4.prototype.reinitializeState = function() {
            this.totalPos = 0, this.headByte = -1;
          }, e4.prototype.setBuffer = function(e5) {
            this.bytes = E(e5), this.view = function(e6) {
              if (e6 instanceof ArrayBuffer)
                return new DataView(e6);
              var t3 = E(e6);
              return new DataView(t3.buffer, t3.byteOffset, t3.byteLength);
            }(this.bytes), this.pos = 0;
          }, e4.prototype.appendBuffer = function(e5) {
            if (-1 !== this.headByte || this.hasRemaining()) {
              var t3 = this.bytes.subarray(this.pos), r3 = E(e5), s3 = new Uint8Array(t3.length + r3.length);
              s3.set(t3), s3.set(r3, t3.length), this.setBuffer(s3);
            } else
              this.setBuffer(e5);
          }, e4.prototype.hasRemaining = function(e5) {
            return void 0 === e5 && (e5 = 1), this.view.byteLength - this.pos >= e5;
          }, e4.prototype.createNoExtraBytesError = function(e5) {
            var t3 = this.view, r3 = this.pos;
            return new RangeError("Extra " + (t3.byteLength - r3) + " of " + t3.byteLength + " byte(s) found at buffer[" + e5 + "]");
          }, e4.prototype.decode = function(e5) {
            return this.reinitializeState(), this.setBuffer(e5), this.doDecodeSingleSync();
          }, e4.prototype.doDecodeSingleSync = function() {
            var e5 = this.doDecodeSync();
            if (this.hasRemaining())
              throw this.createNoExtraBytesError(this.pos);
            return e5;
          }, e4.prototype.decodeAsync = function(e5) {
            var t3, r3, s3, n2;
            return function(e6, t4, r4, s4) {
              return new (r4 || (r4 = Promise))(function(n3, i2) {
                function o2(e7) {
                  try {
                    c2(s4.next(e7));
                  } catch (e8) {
                    i2(e8);
                  }
                }
                function a2(e7) {
                  try {
                    c2(s4.throw(e7));
                  } catch (e8) {
                    i2(e8);
                  }
                }
                function c2(e7) {
                  var t5;
                  e7.done ? n3(e7.value) : (t5 = e7.value, t5 instanceof r4 ? t5 : new r4(function(e8) {
                    e8(t5);
                  })).then(o2, a2);
                }
                c2((s4 = s4.apply(e6, t4 || [])).next());
              });
            }(this, void 0, void 0, function() {
              var i2, o2, a2, c2, u2, l2, h2, d2;
              return U(this, function(p2) {
                switch (p2.label) {
                  case 0:
                    i2 = false, p2.label = 1;
                  case 1:
                    p2.trys.push([1, 6, 7, 12]), t3 = P(e5), p2.label = 2;
                  case 2:
                    return [4, t3.next()];
                  case 3:
                    if ((r3 = p2.sent()).done)
                      return [3, 5];
                    if (a2 = r3.value, i2)
                      throw this.createNoExtraBytesError(this.totalPos);
                    this.appendBuffer(a2);
                    try {
                      o2 = this.doDecodeSync(), i2 = true;
                    } catch (e6) {
                      if (!(e6 instanceof $))
                        throw e6;
                    }
                    this.totalPos += this.pos, p2.label = 4;
                  case 4:
                    return [3, 2];
                  case 5:
                    return [3, 12];
                  case 6:
                    return c2 = p2.sent(), s3 = { error: c2 }, [3, 12];
                  case 7:
                    return p2.trys.push([7, , 10, 11]), r3 && !r3.done && (n2 = t3.return) ? [4, n2.call(t3)] : [3, 9];
                  case 8:
                    p2.sent(), p2.label = 9;
                  case 9:
                    return [3, 11];
                  case 10:
                    if (s3)
                      throw s3.error;
                    return [7];
                  case 11:
                    return [7];
                  case 12:
                    if (i2) {
                      if (this.hasRemaining())
                        throw this.createNoExtraBytesError(this.totalPos);
                      return [2, o2];
                    }
                    throw l2 = (u2 = this).headByte, h2 = u2.pos, d2 = u2.totalPos, new RangeError("Insufficient data in parcing " + I(l2) + " at " + d2 + " (" + h2 + " in the current buffer)");
                }
              });
            });
          }, e4.prototype.decodeArrayStream = function(e5) {
            return this.decodeMultiAsync(e5, true);
          }, e4.prototype.decodeStream = function(e5) {
            return this.decodeMultiAsync(e5, false);
          }, e4.prototype.decodeMultiAsync = function(e5, t3) {
            return function(e6, t4, r3) {
              if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
              var s3, n2 = r3.apply(e6, t4 || []), i2 = [];
              return s3 = {}, o2("next"), o2("throw"), o2("return"), s3[Symbol.asyncIterator] = function() {
                return this;
              }, s3;
              function o2(e7) {
                n2[e7] && (s3[e7] = function(t5) {
                  return new Promise(function(r4, s4) {
                    i2.push([e7, t5, r4, s4]) > 1 || a2(e7, t5);
                  });
                });
              }
              function a2(e7, t5) {
                try {
                  (r4 = n2[e7](t5)).value instanceof j ? Promise.resolve(r4.value.v).then(c2, u2) : l2(i2[0][2], r4);
                } catch (e8) {
                  l2(i2[0][3], e8);
                }
                var r4;
              }
              function c2(e7) {
                a2("next", e7);
              }
              function u2(e7) {
                a2("throw", e7);
              }
              function l2(e7, t5) {
                e7(t5), i2.shift(), i2.length && a2(i2[0][0], i2[0][1]);
              }
            }(this, arguments, function() {
              var r3, s3, n2, i2, o2, a2, c2, u2, l2;
              return U(this, function(h2) {
                switch (h2.label) {
                  case 0:
                    r3 = t3, s3 = -1, h2.label = 1;
                  case 1:
                    h2.trys.push([1, 13, 14, 19]), n2 = P(e5), h2.label = 2;
                  case 2:
                    return [4, j(n2.next())];
                  case 3:
                    if ((i2 = h2.sent()).done)
                      return [3, 12];
                    if (o2 = i2.value, t3 && 0 === s3)
                      throw this.createNoExtraBytesError(this.totalPos);
                    this.appendBuffer(o2), r3 && (s3 = this.readArraySize(), r3 = false, this.complete()), h2.label = 4;
                  case 4:
                    h2.trys.push([4, 9, , 10]), h2.label = 5;
                  case 5:
                    return [4, j(this.doDecodeSync())];
                  case 6:
                    return [4, h2.sent()];
                  case 7:
                    return h2.sent(), 0 == --s3 ? [3, 8] : [3, 5];
                  case 8:
                    return [3, 10];
                  case 9:
                    if (!((a2 = h2.sent()) instanceof $))
                      throw a2;
                    return [3, 10];
                  case 10:
                    this.totalPos += this.pos, h2.label = 11;
                  case 11:
                    return [3, 2];
                  case 12:
                    return [3, 19];
                  case 13:
                    return c2 = h2.sent(), u2 = { error: c2 }, [3, 19];
                  case 14:
                    return h2.trys.push([14, , 17, 18]), i2 && !i2.done && (l2 = n2.return) ? [4, j(l2.call(n2))] : [3, 16];
                  case 15:
                    h2.sent(), h2.label = 16;
                  case 16:
                    return [3, 18];
                  case 17:
                    if (u2)
                      throw u2.error;
                    return [7];
                  case 18:
                    return [7];
                  case 19:
                    return [2];
                }
              });
            });
          }, e4.prototype.doDecodeSync = function() {
            e:
              for (; ; ) {
                var e5 = this.readHeadByte(), t3 = void 0;
                if (e5 >= 224)
                  t3 = e5 - 256;
                else if (e5 < 192)
                  if (e5 < 128)
                    t3 = e5;
                  else if (e5 < 144) {
                    if (0 != (s3 = e5 - 128)) {
                      this.pushMapState(s3), this.complete();
                      continue e;
                    }
                    t3 = {};
                  } else if (e5 < 160) {
                    if (0 != (s3 = e5 - 144)) {
                      this.pushArrayState(s3), this.complete();
                      continue e;
                    }
                    t3 = [];
                  } else {
                    var r3 = e5 - 160;
                    t3 = this.decodeUtf8String(r3, 0);
                  }
                else if (192 === e5)
                  t3 = null;
                else if (194 === e5)
                  t3 = false;
                else if (195 === e5)
                  t3 = true;
                else if (202 === e5)
                  t3 = this.readF32();
                else if (203 === e5)
                  t3 = this.readF64();
                else if (204 === e5)
                  t3 = this.readU8();
                else if (205 === e5)
                  t3 = this.readU16();
                else if (206 === e5)
                  t3 = this.readU32();
                else if (207 === e5)
                  t3 = this.readU64();
                else if (208 === e5)
                  t3 = this.readI8();
                else if (209 === e5)
                  t3 = this.readI16();
                else if (210 === e5)
                  t3 = this.readI32();
                else if (211 === e5)
                  t3 = this.readI64();
                else if (217 === e5)
                  r3 = this.lookU8(), t3 = this.decodeUtf8String(r3, 1);
                else if (218 === e5)
                  r3 = this.lookU16(), t3 = this.decodeUtf8String(r3, 2);
                else if (219 === e5)
                  r3 = this.lookU32(), t3 = this.decodeUtf8String(r3, 4);
                else if (220 === e5) {
                  if (0 !== (s3 = this.readU16())) {
                    this.pushArrayState(s3), this.complete();
                    continue e;
                  }
                  t3 = [];
                } else if (221 === e5) {
                  if (0 !== (s3 = this.readU32())) {
                    this.pushArrayState(s3), this.complete();
                    continue e;
                  }
                  t3 = [];
                } else if (222 === e5) {
                  if (0 !== (s3 = this.readU16())) {
                    this.pushMapState(s3), this.complete();
                    continue e;
                  }
                  t3 = {};
                } else if (223 === e5) {
                  if (0 !== (s3 = this.readU32())) {
                    this.pushMapState(s3), this.complete();
                    continue e;
                  }
                  t3 = {};
                } else if (196 === e5) {
                  var s3 = this.lookU8();
                  t3 = this.decodeBinary(s3, 1);
                } else if (197 === e5)
                  s3 = this.lookU16(), t3 = this.decodeBinary(s3, 2);
                else if (198 === e5)
                  s3 = this.lookU32(), t3 = this.decodeBinary(s3, 4);
                else if (212 === e5)
                  t3 = this.decodeExtension(1, 0);
                else if (213 === e5)
                  t3 = this.decodeExtension(2, 0);
                else if (214 === e5)
                  t3 = this.decodeExtension(4, 0);
                else if (215 === e5)
                  t3 = this.decodeExtension(8, 0);
                else if (216 === e5)
                  t3 = this.decodeExtension(16, 0);
                else if (199 === e5)
                  s3 = this.lookU8(), t3 = this.decodeExtension(s3, 1);
                else if (200 === e5)
                  s3 = this.lookU16(), t3 = this.decodeExtension(s3, 2);
                else {
                  if (201 !== e5)
                    throw new Error("Unrecognized type byte: " + I(e5));
                  s3 = this.lookU32(), t3 = this.decodeExtension(s3, 4);
                }
                this.complete();
                for (var n2 = this.stack; n2.length > 0; ) {
                  var i2 = n2[n2.length - 1];
                  if (0 === i2.type) {
                    if (i2.array[i2.position] = t3, i2.position++, i2.position !== i2.size)
                      continue e;
                    n2.pop(), t3 = i2.array;
                  } else {
                    if (1 === i2.type) {
                      if ("string" != (o2 = typeof t3) && "number" !== o2)
                        throw new Error("The type of key must be string or number but " + typeof t3);
                      i2.key = t3, i2.type = 2;
                      continue e;
                    }
                    if (i2.map[i2.key] = t3, i2.readCount++, i2.readCount !== i2.size) {
                      i2.key = null, i2.type = 1;
                      continue e;
                    }
                    n2.pop(), t3 = i2.map;
                  }
                }
                return t3;
              }
            var o2;
          }, e4.prototype.readHeadByte = function() {
            return -1 === this.headByte && (this.headByte = this.readU8()), this.headByte;
          }, e4.prototype.complete = function() {
            this.headByte = -1;
          }, e4.prototype.readArraySize = function() {
            var e5 = this.readHeadByte();
            switch (e5) {
              case 220:
                return this.readU16();
              case 221:
                return this.readU32();
              default:
                if (e5 < 160)
                  return e5 - 144;
                throw new Error("Unrecognized array type byte: " + I(e5));
            }
          }, e4.prototype.pushMapState = function(e5) {
            if (e5 > this.maxMapLength)
              throw new Error("Max length exceeded: map length (" + e5 + ") > maxMapLengthLength (" + this.maxMapLength + ")");
            this.stack.push({ type: 1, size: e5, key: null, readCount: 0, map: {} });
          }, e4.prototype.pushArrayState = function(e5) {
            if (e5 > this.maxArrayLength)
              throw new Error("Max length exceeded: array length (" + e5 + ") > maxArrayLength (" + this.maxArrayLength + ")");
            this.stack.push({ type: 0, size: e5, array: new Array(e5), position: 0 });
          }, e4.prototype.decodeUtf8String = function(e5, t3) {
            var r3;
            if (e5 > this.maxStrLength)
              throw new Error("Max length exceeded: UTF-8 byte length (" + e5 + ") > maxStrLength (" + this.maxStrLength + ")");
            if (this.bytes.byteLength < this.pos + t3 + e5)
              throw O;
            var s3, n2 = this.pos + t3;
            return s3 = this.stateIsMapKey() && (null === (r3 = this.keyDecoder) || void 0 === r3 ? void 0 : r3.canBeCached(e5)) ? this.keyDecoder.decode(this.bytes, n2, e5) : i && e5 > d ? function(e6, t4, r4) {
              var s4 = e6.subarray(t4, t4 + r4);
              return h.decode(s4);
            }(this.bytes, n2, e5) : l(this.bytes, n2, e5), this.pos += t3 + e5, s3;
          }, e4.prototype.stateIsMapKey = function() {
            return this.stack.length > 0 && 1 === this.stack[this.stack.length - 1].type;
          }, e4.prototype.decodeBinary = function(e5, t3) {
            if (e5 > this.maxBinLength)
              throw new Error("Max length exceeded: bin length (" + e5 + ") > maxBinLength (" + this.maxBinLength + ")");
            if (!this.hasRemaining(e5 + t3))
              throw O;
            var r3 = this.pos + t3, s3 = this.bytes.subarray(r3, r3 + e5);
            return this.pos += t3 + e5, s3;
          }, e4.prototype.decodeExtension = function(e5, t3) {
            if (e5 > this.maxExtLength)
              throw new Error("Max length exceeded: ext length (" + e5 + ") > maxExtLength (" + this.maxExtLength + ")");
            var r3 = this.view.getInt8(this.pos + t3), s3 = this.decodeBinary(e5, t3 + 1);
            return this.extensionCodec.decode(s3, r3, this.context);
          }, e4.prototype.lookU8 = function() {
            return this.view.getUint8(this.pos);
          }, e4.prototype.lookU16 = function() {
            return this.view.getUint16(this.pos);
          }, e4.prototype.lookU32 = function() {
            return this.view.getUint32(this.pos);
          }, e4.prototype.readU8 = function() {
            var e5 = this.view.getUint8(this.pos);
            return this.pos++, e5;
          }, e4.prototype.readI8 = function() {
            var e5 = this.view.getInt8(this.pos);
            return this.pos++, e5;
          }, e4.prototype.readU16 = function() {
            var e5 = this.view.getUint16(this.pos);
            return this.pos += 2, e5;
          }, e4.prototype.readI16 = function() {
            var e5 = this.view.getInt16(this.pos);
            return this.pos += 2, e5;
          }, e4.prototype.readU32 = function() {
            var e5 = this.view.getUint32(this.pos);
            return this.pos += 4, e5;
          }, e4.prototype.readI32 = function() {
            var e5 = this.view.getInt32(this.pos);
            return this.pos += 4, e5;
          }, e4.prototype.readU64 = function() {
            var e5, t3, r3, s3, n2 = (e5 = this.view, t3 = this.pos, r3 = e5.getUint32(t3), s3 = e5.getUint32(t3 + 4), r3 > Math.floor(Number.MAX_SAFE_INTEGER / 4294967296) ? BigInt(r3) * BigInt(4294967296) + BigInt(s3) : 4294967296 * r3 + s3);
            return this.pos += 8, n2;
          }, e4.prototype.readI64 = function() {
            var e5 = g(this.view, this.pos);
            return this.pos += 8, e5;
          }, e4.prototype.readF32 = function() {
            var e5 = this.view.getFloat32(this.pos);
            return this.pos += 4, e5;
          }, e4.prototype.readF64 = function() {
            var e5 = this.view.getFloat64(this.pos);
            return this.pos += 8, e5;
          }, e4;
        }(), M = {};
        function N(e4, t3) {
          return void 0 === t3 && (t3 = M), new L(t3.extensionCodec, t3.context, t3.maxStrLength, t3.maxBinLength, t3.maxArrayLength, t3.maxMapLength, t3.maxExtLength).decode(e4);
        }
        var F = function(e4, t3) {
          var r3, s3, n2, i2, o2 = { label: 0, sent: function() {
            if (1 & n2[0])
              throw n2[1];
            return n2[1];
          }, trys: [], ops: [] };
          return i2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function a2(i3) {
            return function(a3) {
              return function(i4) {
                if (r3)
                  throw new TypeError("Generator is already executing.");
                for (; o2; )
                  try {
                    if (r3 = 1, s3 && (n2 = 2 & i4[0] ? s3.return : i4[0] ? s3.throw || ((n2 = s3.return) && n2.call(s3), 0) : s3.next) && !(n2 = n2.call(s3, i4[1])).done)
                      return n2;
                    switch (s3 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                      case 0:
                      case 1:
                        n2 = i4;
                        break;
                      case 4:
                        return o2.label++, { value: i4[1], done: false };
                      case 5:
                        o2.label++, s3 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = o2.ops.pop(), o2.trys.pop();
                        continue;
                      default:
                        if (!((n2 = (n2 = o2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          o2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                          o2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && o2.label < n2[1]) {
                          o2.label = n2[1], n2 = i4;
                          break;
                        }
                        if (n2 && o2.label < n2[2]) {
                          o2.label = n2[2], o2.ops.push(i4);
                          break;
                        }
                        n2[2] && o2.ops.pop(), o2.trys.pop();
                        continue;
                    }
                    i4 = t3.call(e4, o2);
                  } catch (e5) {
                    i4 = [6, e5], s3 = 0;
                  } finally {
                    r3 = n2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, a3]);
            };
          }
        }, W = function(e4) {
          return this instanceof W ? (this.v = e4, this) : new W(e4);
        }, K = function(e4, t3, r3) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var s3, n2 = r3.apply(e4, t3 || []), i2 = [];
          return s3 = {}, o2("next"), o2("throw"), o2("return"), s3[Symbol.asyncIterator] = function() {
            return this;
          }, s3;
          function o2(e5) {
            n2[e5] && (s3[e5] = function(t4) {
              return new Promise(function(r4, s4) {
                i2.push([e5, t4, r4, s4]) > 1 || a2(e5, t4);
              });
            });
          }
          function a2(e5, t4) {
            try {
              (r4 = n2[e5](t4)).value instanceof W ? Promise.resolve(r4.value.v).then(c2, u2) : l2(i2[0][2], r4);
            } catch (e6) {
              l2(i2[0][3], e6);
            }
            var r4;
          }
          function c2(e5) {
            a2("next", e5);
          }
          function u2(e5) {
            a2("throw", e5);
          }
          function l2(e5, t4) {
            e5(t4), i2.shift(), i2.length && a2(i2[0][0], i2[0][1]);
          }
        };
        function z(e4) {
          return null != e4[Symbol.asyncIterator] ? e4 : function(e5) {
            return K(this, arguments, function() {
              var t3, r3, s3, n2;
              return F(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    t3 = e5.getReader(), i2.label = 1;
                  case 1:
                    i2.trys.push([1, , 9, 10]), i2.label = 2;
                  case 2:
                    return [4, W(t3.read())];
                  case 3:
                    return r3 = i2.sent(), s3 = r3.done, n2 = r3.value, s3 ? [4, W(void 0)] : [3, 5];
                  case 4:
                    return [2, i2.sent()];
                  case 5:
                    return function(e6) {
                      if (null == e6)
                        throw new Error("Assertion Failure: value must not be null nor undefined");
                    }(n2), [4, W(n2)];
                  case 6:
                    return [4, i2.sent()];
                  case 7:
                    return i2.sent(), [3, 2];
                  case 8:
                    return [3, 10];
                  case 9:
                    return t3.releaseLock(), [7];
                  case 10:
                    return [2];
                }
              });
            });
          }(e4);
        }
        var V = function(e4, t3, r3, s3) {
          return new (r3 || (r3 = Promise))(function(n2, i2) {
            function o2(e5) {
              try {
                c2(s3.next(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function a2(e5) {
              try {
                c2(s3.throw(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function c2(e5) {
              var t4;
              e5.done ? n2(e5.value) : (t4 = e5.value, t4 instanceof r3 ? t4 : new r3(function(e6) {
                e6(t4);
              })).then(o2, a2);
            }
            c2((s3 = s3.apply(e4, t3 || [])).next());
          });
        }, G = function(e4, t3) {
          var r3, s3, n2, i2, o2 = { label: 0, sent: function() {
            if (1 & n2[0])
              throw n2[1];
            return n2[1];
          }, trys: [], ops: [] };
          return i2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function a2(i3) {
            return function(a3) {
              return function(i4) {
                if (r3)
                  throw new TypeError("Generator is already executing.");
                for (; o2; )
                  try {
                    if (r3 = 1, s3 && (n2 = 2 & i4[0] ? s3.return : i4[0] ? s3.throw || ((n2 = s3.return) && n2.call(s3), 0) : s3.next) && !(n2 = n2.call(s3, i4[1])).done)
                      return n2;
                    switch (s3 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                      case 0:
                      case 1:
                        n2 = i4;
                        break;
                      case 4:
                        return o2.label++, { value: i4[1], done: false };
                      case 5:
                        o2.label++, s3 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = o2.ops.pop(), o2.trys.pop();
                        continue;
                      default:
                        if (!((n2 = (n2 = o2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          o2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                          o2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && o2.label < n2[1]) {
                          o2.label = n2[1], n2 = i4;
                          break;
                        }
                        if (n2 && o2.label < n2[2]) {
                          o2.label = n2[2], o2.ops.push(i4);
                          break;
                        }
                        n2[2] && o2.ops.pop(), o2.trys.pop();
                        continue;
                    }
                    i4 = t3.call(e4, o2);
                  } catch (e5) {
                    i4 = [6, e5], s3 = 0;
                  } finally {
                    r3 = n2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, a3]);
            };
          }
        };
        function H(e4, t3) {
          return void 0 === t3 && (t3 = M), V(this, void 0, void 0, function() {
            var r3;
            return G(this, function(s3) {
              return r3 = z(e4), [2, new L(t3.extensionCodec, t3.context, t3.maxStrLength, t3.maxBinLength, t3.maxArrayLength, t3.maxMapLength, t3.maxExtLength).decodeAsync(r3)];
            });
          });
        }
        function Y(e4, t3) {
          void 0 === t3 && (t3 = M);
          var r3 = z(e4);
          return new L(t3.extensionCodec, t3.context, t3.maxStrLength, t3.maxBinLength, t3.maxArrayLength, t3.maxMapLength, t3.maxExtLength).decodeArrayStream(r3);
        }
        function J(e4, t3) {
          void 0 === t3 && (t3 = M);
          var r3 = z(e4);
          return new L(t3.extensionCodec, t3.context, t3.maxStrLength, t3.maxBinLength, t3.maxArrayLength, t3.maxMapLength, t3.maxExtLength).decodeStream(r3);
        }
      }]);
    }, 155: (e2, t2) => {
      t2.byteLength = function(e3) {
        var t3 = a(e3), r3 = t3[0], s3 = t3[1];
        return 3 * (r3 + s3) / 4 - s3;
      }, t2.toByteArray = function(e3) {
        var t3, r3, i2 = a(e3), o2 = i2[0], c2 = i2[1], u = new n(function(e4, t4, r4) {
          return 3 * (t4 + r4) / 4 - r4;
        }(0, o2, c2)), l = 0, h = c2 > 0 ? o2 - 4 : o2;
        for (r3 = 0; r3 < h; r3 += 4)
          t3 = s2[e3.charCodeAt(r3)] << 18 | s2[e3.charCodeAt(r3 + 1)] << 12 | s2[e3.charCodeAt(r3 + 2)] << 6 | s2[e3.charCodeAt(r3 + 3)], u[l++] = t3 >> 16 & 255, u[l++] = t3 >> 8 & 255, u[l++] = 255 & t3;
        return 2 === c2 && (t3 = s2[e3.charCodeAt(r3)] << 2 | s2[e3.charCodeAt(r3 + 1)] >> 4, u[l++] = 255 & t3), 1 === c2 && (t3 = s2[e3.charCodeAt(r3)] << 10 | s2[e3.charCodeAt(r3 + 1)] << 4 | s2[e3.charCodeAt(r3 + 2)] >> 2, u[l++] = t3 >> 8 & 255, u[l++] = 255 & t3), u;
      }, t2.fromByteArray = function(e3) {
        for (var t3, s3 = e3.length, n2 = s3 % 3, i2 = [], o2 = 16383, a2 = 0, u = s3 - n2; a2 < u; a2 += o2)
          i2.push(c(e3, a2, a2 + o2 > u ? u : a2 + o2));
        return 1 === n2 ? (t3 = e3[s3 - 1], i2.push(r2[t3 >> 2] + r2[t3 << 4 & 63] + "==")) : 2 === n2 && (t3 = (e3[s3 - 2] << 8) + e3[s3 - 1], i2.push(r2[t3 >> 10] + r2[t3 >> 4 & 63] + r2[t3 << 2 & 63] + "=")), i2.join("");
      };
      for (var r2 = [], s2 = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0; o < 64; ++o)
        r2[o] = i[o], s2[i.charCodeAt(o)] = o;
      function a(e3) {
        var t3 = e3.length;
        if (t3 % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var r3 = e3.indexOf("=");
        return -1 === r3 && (r3 = t3), [r3, r3 === t3 ? 0 : 4 - r3 % 4];
      }
      function c(e3, t3, s3) {
        for (var n2, i2, o2 = [], a2 = t3; a2 < s3; a2 += 3)
          n2 = (e3[a2] << 16 & 16711680) + (e3[a2 + 1] << 8 & 65280) + (255 & e3[a2 + 2]), o2.push(r2[(i2 = n2) >> 18 & 63] + r2[i2 >> 12 & 63] + r2[i2 >> 6 & 63] + r2[63 & i2]);
        return o2.join("");
      }
      s2["-".charCodeAt(0)] = 62, s2["_".charCodeAt(0)] = 63;
    }, 117: function(e2, t2, r2) {
      var s2;
      !function(n) {
        var i, o = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, a = Math.ceil, c = Math.floor, u = "[BigNumber Error] ", l = u + "Number primitive has more than 15 significant digits: ", h = 1e14, d = 14, p = 9007199254740991, f = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], g = 1e7, m = 1e9;
        function y(e3) {
          var t3 = 0 | e3;
          return e3 > 0 || e3 === t3 ? t3 : t3 - 1;
        }
        function w(e3) {
          for (var t3, r3, s3 = 1, n2 = e3.length, i2 = e3[0] + ""; s3 < n2; ) {
            for (t3 = e3[s3++] + "", r3 = d - t3.length; r3--; t3 = "0" + t3)
              ;
            i2 += t3;
          }
          for (n2 = i2.length; 48 === i2.charCodeAt(--n2); )
            ;
          return i2.slice(0, n2 + 1 || 1);
        }
        function b(e3, t3) {
          var r3, s3, n2 = e3.c, i2 = t3.c, o2 = e3.s, a2 = t3.s, c2 = e3.e, u2 = t3.e;
          if (!o2 || !a2)
            return null;
          if (r3 = n2 && !n2[0], s3 = i2 && !i2[0], r3 || s3)
            return r3 ? s3 ? 0 : -a2 : o2;
          if (o2 != a2)
            return o2;
          if (r3 = o2 < 0, s3 = c2 == u2, !n2 || !i2)
            return s3 ? 0 : !n2 ^ r3 ? 1 : -1;
          if (!s3)
            return c2 > u2 ^ r3 ? 1 : -1;
          for (a2 = (c2 = n2.length) < (u2 = i2.length) ? c2 : u2, o2 = 0; o2 < a2; o2++)
            if (n2[o2] != i2[o2])
              return n2[o2] > i2[o2] ^ r3 ? 1 : -1;
          return c2 == u2 ? 0 : c2 > u2 ^ r3 ? 1 : -1;
        }
        function v(e3, t3, r3, s3) {
          if (e3 < t3 || e3 > r3 || e3 !== c(e3))
            throw Error(u + (s3 || "Argument") + ("number" == typeof e3 ? e3 < t3 || e3 > r3 ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e3));
        }
        function x(e3) {
          var t3 = e3.c.length - 1;
          return y(e3.e / d) == t3 && e3.c[t3] % 2 != 0;
        }
        function A(e3, t3) {
          return (e3.length > 1 ? e3.charAt(0) + "." + e3.slice(1) : e3) + (t3 < 0 ? "e" : "e+") + t3;
        }
        function _(e3, t3, r3) {
          var s3, n2;
          if (t3 < 0) {
            for (n2 = r3 + "."; ++t3; n2 += r3)
              ;
            e3 = n2 + e3;
          } else if (++t3 > (s3 = e3.length)) {
            for (n2 = r3, t3 -= s3; --t3; n2 += r3)
              ;
            e3 += n2;
          } else
            t3 < s3 && (e3 = e3.slice(0, t3) + "." + e3.slice(t3));
          return e3;
        }
        i = function e3(t3) {
          var r3, s3, n2, i2, E, T, S, R, k, I, B = W.prototype = { constructor: W, toString: null, valueOf: null }, U = new W(1), P = 20, j = 4, q = -7, D = 21, $ = -1e7, O = 1e7, C = false, L = 1, M = 0, N = { prefix: "", groupSize: 3, secondaryGroupSize: 0, groupSeparator: ",", decimalSeparator: ".", fractionGroupSize: 0, fractionGroupSeparator: " ", suffix: "" }, F = "0123456789abcdefghijklmnopqrstuvwxyz";
          function W(e4, t4) {
            var r4, i3, a2, u2, h2, f2, g2, m2, y2 = this;
            if (!(y2 instanceof W))
              return new W(e4, t4);
            if (null == t4) {
              if (e4 && true === e4._isBigNumber)
                return y2.s = e4.s, void (!e4.c || e4.e > O ? y2.c = y2.e = null : e4.e < $ ? y2.c = [y2.e = 0] : (y2.e = e4.e, y2.c = e4.c.slice()));
              if ((f2 = "number" == typeof e4) && 0 * e4 == 0) {
                if (y2.s = 1 / e4 < 0 ? (e4 = -e4, -1) : 1, e4 === ~~e4) {
                  for (u2 = 0, h2 = e4; h2 >= 10; h2 /= 10, u2++)
                    ;
                  return void (u2 > O ? y2.c = y2.e = null : (y2.e = u2, y2.c = [e4]));
                }
                m2 = String(e4);
              } else {
                if (!o.test(m2 = String(e4)))
                  return n2(y2, m2, f2);
                y2.s = 45 == m2.charCodeAt(0) ? (m2 = m2.slice(1), -1) : 1;
              }
              (u2 = m2.indexOf(".")) > -1 && (m2 = m2.replace(".", "")), (h2 = m2.search(/e/i)) > 0 ? (u2 < 0 && (u2 = h2), u2 += +m2.slice(h2 + 1), m2 = m2.substring(0, h2)) : u2 < 0 && (u2 = m2.length);
            } else {
              if (v(t4, 2, F.length, "Base"), 10 == t4)
                return G(y2 = new W(e4), P + y2.e + 1, j);
              if (m2 = String(e4), f2 = "number" == typeof e4) {
                if (0 * e4 != 0)
                  return n2(y2, m2, f2, t4);
                if (y2.s = 1 / e4 < 0 ? (m2 = m2.slice(1), -1) : 1, W.DEBUG && m2.replace(/^0\.0*|\./, "").length > 15)
                  throw Error(l + e4);
              } else
                y2.s = 45 === m2.charCodeAt(0) ? (m2 = m2.slice(1), -1) : 1;
              for (r4 = F.slice(0, t4), u2 = h2 = 0, g2 = m2.length; h2 < g2; h2++)
                if (r4.indexOf(i3 = m2.charAt(h2)) < 0) {
                  if ("." == i3) {
                    if (h2 > u2) {
                      u2 = g2;
                      continue;
                    }
                  } else if (!a2 && (m2 == m2.toUpperCase() && (m2 = m2.toLowerCase()) || m2 == m2.toLowerCase() && (m2 = m2.toUpperCase()))) {
                    a2 = true, h2 = -1, u2 = 0;
                    continue;
                  }
                  return n2(y2, String(e4), f2, t4);
                }
              f2 = false, (u2 = (m2 = s3(m2, t4, 10, y2.s)).indexOf(".")) > -1 ? m2 = m2.replace(".", "") : u2 = m2.length;
            }
            for (h2 = 0; 48 === m2.charCodeAt(h2); h2++)
              ;
            for (g2 = m2.length; 48 === m2.charCodeAt(--g2); )
              ;
            if (m2 = m2.slice(h2, ++g2)) {
              if (g2 -= h2, f2 && W.DEBUG && g2 > 15 && (e4 > p || e4 !== c(e4)))
                throw Error(l + y2.s * e4);
              if ((u2 = u2 - h2 - 1) > O)
                y2.c = y2.e = null;
              else if (u2 < $)
                y2.c = [y2.e = 0];
              else {
                if (y2.e = u2, y2.c = [], h2 = (u2 + 1) % d, u2 < 0 && (h2 += d), h2 < g2) {
                  for (h2 && y2.c.push(+m2.slice(0, h2)), g2 -= d; h2 < g2; )
                    y2.c.push(+m2.slice(h2, h2 += d));
                  h2 = d - (m2 = m2.slice(h2)).length;
                } else
                  h2 -= g2;
                for (; h2--; m2 += "0")
                  ;
                y2.c.push(+m2);
              }
            } else
              y2.c = [y2.e = 0];
          }
          function K(e4, t4, r4, s4) {
            var n3, i3, o2, a2, c2;
            if (null == r4 ? r4 = j : v(r4, 0, 8), !e4.c)
              return e4.toString();
            if (n3 = e4.c[0], o2 = e4.e, null == t4)
              c2 = w(e4.c), c2 = 1 == s4 || 2 == s4 && (o2 <= q || o2 >= D) ? A(c2, o2) : _(c2, o2, "0");
            else if (i3 = (e4 = G(new W(e4), t4, r4)).e, a2 = (c2 = w(e4.c)).length, 1 == s4 || 2 == s4 && (t4 <= i3 || i3 <= q)) {
              for (; a2 < t4; c2 += "0", a2++)
                ;
              c2 = A(c2, i3);
            } else if (t4 -= o2, c2 = _(c2, i3, "0"), i3 + 1 > a2) {
              if (--t4 > 0)
                for (c2 += "."; t4--; c2 += "0")
                  ;
            } else if ((t4 += i3 - a2) > 0)
              for (i3 + 1 == a2 && (c2 += "."); t4--; c2 += "0")
                ;
            return e4.s < 0 && n3 ? "-" + c2 : c2;
          }
          function z(e4, t4) {
            for (var r4, s4 = 1, n3 = new W(e4[0]); s4 < e4.length; s4++) {
              if (!(r4 = new W(e4[s4])).s) {
                n3 = r4;
                break;
              }
              t4.call(n3, r4) && (n3 = r4);
            }
            return n3;
          }
          function V(e4, t4, r4) {
            for (var s4 = 1, n3 = t4.length; !t4[--n3]; t4.pop())
              ;
            for (n3 = t4[0]; n3 >= 10; n3 /= 10, s4++)
              ;
            return (r4 = s4 + r4 * d - 1) > O ? e4.c = e4.e = null : r4 < $ ? e4.c = [e4.e = 0] : (e4.e = r4, e4.c = t4), e4;
          }
          function G(e4, t4, r4, s4) {
            var n3, i3, o2, u2, l2, p2, g2, m2 = e4.c, y2 = f;
            if (m2) {
              e: {
                for (n3 = 1, u2 = m2[0]; u2 >= 10; u2 /= 10, n3++)
                  ;
                if ((i3 = t4 - n3) < 0)
                  i3 += d, o2 = t4, g2 = (l2 = m2[p2 = 0]) / y2[n3 - o2 - 1] % 10 | 0;
                else if ((p2 = a((i3 + 1) / d)) >= m2.length) {
                  if (!s4)
                    break e;
                  for (; m2.length <= p2; m2.push(0))
                    ;
                  l2 = g2 = 0, n3 = 1, o2 = (i3 %= d) - d + 1;
                } else {
                  for (l2 = u2 = m2[p2], n3 = 1; u2 >= 10; u2 /= 10, n3++)
                    ;
                  g2 = (o2 = (i3 %= d) - d + n3) < 0 ? 0 : l2 / y2[n3 - o2 - 1] % 10 | 0;
                }
                if (s4 = s4 || t4 < 0 || null != m2[p2 + 1] || (o2 < 0 ? l2 : l2 % y2[n3 - o2 - 1]), s4 = r4 < 4 ? (g2 || s4) && (0 == r4 || r4 == (e4.s < 0 ? 3 : 2)) : g2 > 5 || 5 == g2 && (4 == r4 || s4 || 6 == r4 && (i3 > 0 ? o2 > 0 ? l2 / y2[n3 - o2] : 0 : m2[p2 - 1]) % 10 & 1 || r4 == (e4.s < 0 ? 8 : 7)), t4 < 1 || !m2[0])
                  return m2.length = 0, s4 ? (t4 -= e4.e + 1, m2[0] = y2[(d - t4 % d) % d], e4.e = -t4 || 0) : m2[0] = e4.e = 0, e4;
                if (0 == i3 ? (m2.length = p2, u2 = 1, p2--) : (m2.length = p2 + 1, u2 = y2[d - i3], m2[p2] = o2 > 0 ? c(l2 / y2[n3 - o2] % y2[o2]) * u2 : 0), s4)
                  for (; ; ) {
                    if (0 == p2) {
                      for (i3 = 1, o2 = m2[0]; o2 >= 10; o2 /= 10, i3++)
                        ;
                      for (o2 = m2[0] += u2, u2 = 1; o2 >= 10; o2 /= 10, u2++)
                        ;
                      i3 != u2 && (e4.e++, m2[0] == h && (m2[0] = 1));
                      break;
                    }
                    if (m2[p2] += u2, m2[p2] != h)
                      break;
                    m2[p2--] = 0, u2 = 1;
                  }
                for (i3 = m2.length; 0 === m2[--i3]; m2.pop())
                  ;
              }
              e4.e > O ? e4.c = e4.e = null : e4.e < $ && (e4.c = [e4.e = 0]);
            }
            return e4;
          }
          function H(e4) {
            var t4, r4 = e4.e;
            return null === r4 ? e4.toString() : (t4 = w(e4.c), t4 = r4 <= q || r4 >= D ? A(t4, r4) : _(t4, r4, "0"), e4.s < 0 ? "-" + t4 : t4);
          }
          return W.clone = e3, W.ROUND_UP = 0, W.ROUND_DOWN = 1, W.ROUND_CEIL = 2, W.ROUND_FLOOR = 3, W.ROUND_HALF_UP = 4, W.ROUND_HALF_DOWN = 5, W.ROUND_HALF_EVEN = 6, W.ROUND_HALF_CEIL = 7, W.ROUND_HALF_FLOOR = 8, W.EUCLID = 9, W.config = W.set = function(e4) {
            var t4, r4;
            if (null != e4) {
              if ("object" != typeof e4)
                throw Error(u + "Object expected: " + e4);
              if (e4.hasOwnProperty(t4 = "DECIMAL_PLACES") && (v(r4 = e4[t4], 0, m, t4), P = r4), e4.hasOwnProperty(t4 = "ROUNDING_MODE") && (v(r4 = e4[t4], 0, 8, t4), j = r4), e4.hasOwnProperty(t4 = "EXPONENTIAL_AT") && ((r4 = e4[t4]) && r4.pop ? (v(r4[0], -m, 0, t4), v(r4[1], 0, m, t4), q = r4[0], D = r4[1]) : (v(r4, -m, m, t4), q = -(D = r4 < 0 ? -r4 : r4))), e4.hasOwnProperty(t4 = "RANGE"))
                if ((r4 = e4[t4]) && r4.pop)
                  v(r4[0], -m, -1, t4), v(r4[1], 1, m, t4), $ = r4[0], O = r4[1];
                else {
                  if (v(r4, -m, m, t4), !r4)
                    throw Error(u + t4 + " cannot be zero: " + r4);
                  $ = -(O = r4 < 0 ? -r4 : r4);
                }
              if (e4.hasOwnProperty(t4 = "CRYPTO")) {
                if ((r4 = e4[t4]) !== !!r4)
                  throw Error(u + t4 + " not true or false: " + r4);
                if (r4) {
                  if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes)
                    throw C = !r4, Error(u + "crypto unavailable");
                  C = r4;
                } else
                  C = r4;
              }
              if (e4.hasOwnProperty(t4 = "MODULO_MODE") && (v(r4 = e4[t4], 0, 9, t4), L = r4), e4.hasOwnProperty(t4 = "POW_PRECISION") && (v(r4 = e4[t4], 0, m, t4), M = r4), e4.hasOwnProperty(t4 = "FORMAT")) {
                if ("object" != typeof (r4 = e4[t4]))
                  throw Error(u + t4 + " not an object: " + r4);
                N = r4;
              }
              if (e4.hasOwnProperty(t4 = "ALPHABET")) {
                if ("string" != typeof (r4 = e4[t4]) || /^.?$|[+\-.\s]|(.).*\1/.test(r4))
                  throw Error(u + t4 + " invalid: " + r4);
                F = r4;
              }
            }
            return { DECIMAL_PLACES: P, ROUNDING_MODE: j, EXPONENTIAL_AT: [q, D], RANGE: [$, O], CRYPTO: C, MODULO_MODE: L, POW_PRECISION: M, FORMAT: N, ALPHABET: F };
          }, W.isBigNumber = function(e4) {
            if (!e4 || true !== e4._isBigNumber)
              return false;
            if (!W.DEBUG)
              return true;
            var t4, r4, s4 = e4.c, n3 = e4.e, i3 = e4.s;
            e:
              if ("[object Array]" == {}.toString.call(s4)) {
                if ((1 === i3 || -1 === i3) && n3 >= -m && n3 <= m && n3 === c(n3)) {
                  if (0 === s4[0]) {
                    if (0 === n3 && 1 === s4.length)
                      return true;
                    break e;
                  }
                  if ((t4 = (n3 + 1) % d) < 1 && (t4 += d), String(s4[0]).length == t4) {
                    for (t4 = 0; t4 < s4.length; t4++)
                      if ((r4 = s4[t4]) < 0 || r4 >= h || r4 !== c(r4))
                        break e;
                    if (0 !== r4)
                      return true;
                  }
                }
              } else if (null === s4 && null === n3 && (null === i3 || 1 === i3 || -1 === i3))
                return true;
            throw Error(u + "Invalid BigNumber: " + e4);
          }, W.maximum = W.max = function() {
            return z(arguments, B.lt);
          }, W.minimum = W.min = function() {
            return z(arguments, B.gt);
          }, W.random = (i2 = 9007199254740992, E = Math.random() * i2 & 2097151 ? function() {
            return c(Math.random() * i2);
          } : function() {
            return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0);
          }, function(e4) {
            var t4, r4, s4, n3, i3, o2 = 0, l2 = [], h2 = new W(U);
            if (null == e4 ? e4 = P : v(e4, 0, m), n3 = a(e4 / d), C)
              if (crypto.getRandomValues) {
                for (t4 = crypto.getRandomValues(new Uint32Array(n3 *= 2)); o2 < n3; )
                  (i3 = 131072 * t4[o2] + (t4[o2 + 1] >>> 11)) >= 9e15 ? (r4 = crypto.getRandomValues(new Uint32Array(2)), t4[o2] = r4[0], t4[o2 + 1] = r4[1]) : (l2.push(i3 % 1e14), o2 += 2);
                o2 = n3 / 2;
              } else {
                if (!crypto.randomBytes)
                  throw C = false, Error(u + "crypto unavailable");
                for (t4 = crypto.randomBytes(n3 *= 7); o2 < n3; )
                  (i3 = 281474976710656 * (31 & t4[o2]) + 1099511627776 * t4[o2 + 1] + 4294967296 * t4[o2 + 2] + 16777216 * t4[o2 + 3] + (t4[o2 + 4] << 16) + (t4[o2 + 5] << 8) + t4[o2 + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t4, o2) : (l2.push(i3 % 1e14), o2 += 7);
                o2 = n3 / 7;
              }
            if (!C)
              for (; o2 < n3; )
                (i3 = E()) < 9e15 && (l2[o2++] = i3 % 1e14);
            for (n3 = l2[--o2], e4 %= d, n3 && e4 && (i3 = f[d - e4], l2[o2] = c(n3 / i3) * i3); 0 === l2[o2]; l2.pop(), o2--)
              ;
            if (o2 < 0)
              l2 = [s4 = 0];
            else {
              for (s4 = -1; 0 === l2[0]; l2.splice(0, 1), s4 -= d)
                ;
              for (o2 = 1, i3 = l2[0]; i3 >= 10; i3 /= 10, o2++)
                ;
              o2 < d && (s4 -= d - o2);
            }
            return h2.e = s4, h2.c = l2, h2;
          }), W.sum = function() {
            for (var e4 = 1, t4 = arguments, r4 = new W(t4[0]); e4 < t4.length; )
              r4 = r4.plus(t4[e4++]);
            return r4;
          }, s3 = function() {
            var e4 = "0123456789";
            function t4(e5, t5, r4, s4) {
              for (var n3, i3, o2 = [0], a2 = 0, c2 = e5.length; a2 < c2; ) {
                for (i3 = o2.length; i3--; o2[i3] *= t5)
                  ;
                for (o2[0] += s4.indexOf(e5.charAt(a2++)), n3 = 0; n3 < o2.length; n3++)
                  o2[n3] > r4 - 1 && (null == o2[n3 + 1] && (o2[n3 + 1] = 0), o2[n3 + 1] += o2[n3] / r4 | 0, o2[n3] %= r4);
              }
              return o2.reverse();
            }
            return function(s4, n3, i3, o2, a2) {
              var c2, u2, l2, h2, d2, p2, f2, g2, m2 = s4.indexOf("."), y2 = P, b2 = j;
              for (m2 >= 0 && (h2 = M, M = 0, s4 = s4.replace(".", ""), p2 = (g2 = new W(n3)).pow(s4.length - m2), M = h2, g2.c = t4(_(w(p2.c), p2.e, "0"), 10, i3, e4), g2.e = g2.c.length), l2 = h2 = (f2 = t4(s4, n3, i3, a2 ? (c2 = F, e4) : (c2 = e4, F))).length; 0 == f2[--h2]; f2.pop())
                ;
              if (!f2[0])
                return c2.charAt(0);
              if (m2 < 0 ? --l2 : (p2.c = f2, p2.e = l2, p2.s = o2, f2 = (p2 = r3(p2, g2, y2, b2, i3)).c, d2 = p2.r, l2 = p2.e), m2 = f2[u2 = l2 + y2 + 1], h2 = i3 / 2, d2 = d2 || u2 < 0 || null != f2[u2 + 1], d2 = b2 < 4 ? (null != m2 || d2) && (0 == b2 || b2 == (p2.s < 0 ? 3 : 2)) : m2 > h2 || m2 == h2 && (4 == b2 || d2 || 6 == b2 && 1 & f2[u2 - 1] || b2 == (p2.s < 0 ? 8 : 7)), u2 < 1 || !f2[0])
                s4 = d2 ? _(c2.charAt(1), -y2, c2.charAt(0)) : c2.charAt(0);
              else {
                if (f2.length = u2, d2)
                  for (--i3; ++f2[--u2] > i3; )
                    f2[u2] = 0, u2 || (++l2, f2 = [1].concat(f2));
                for (h2 = f2.length; !f2[--h2]; )
                  ;
                for (m2 = 0, s4 = ""; m2 <= h2; s4 += c2.charAt(f2[m2++]))
                  ;
                s4 = _(s4, l2, c2.charAt(0));
              }
              return s4;
            };
          }(), r3 = function() {
            function e4(e5, t5, r5) {
              var s4, n3, i3, o2, a2 = 0, c2 = e5.length, u2 = t5 % g, l2 = t5 / g | 0;
              for (e5 = e5.slice(); c2--; )
                a2 = ((n3 = u2 * (i3 = e5[c2] % g) + (s4 = l2 * i3 + (o2 = e5[c2] / g | 0) * u2) % g * g + a2) / r5 | 0) + (s4 / g | 0) + l2 * o2, e5[c2] = n3 % r5;
              return a2 && (e5 = [a2].concat(e5)), e5;
            }
            function t4(e5, t5, r5, s4) {
              var n3, i3;
              if (r5 != s4)
                i3 = r5 > s4 ? 1 : -1;
              else
                for (n3 = i3 = 0; n3 < r5; n3++)
                  if (e5[n3] != t5[n3]) {
                    i3 = e5[n3] > t5[n3] ? 1 : -1;
                    break;
                  }
              return i3;
            }
            function r4(e5, t5, r5, s4) {
              for (var n3 = 0; r5--; )
                e5[r5] -= n3, n3 = e5[r5] < t5[r5] ? 1 : 0, e5[r5] = n3 * s4 + e5[r5] - t5[r5];
              for (; !e5[0] && e5.length > 1; e5.splice(0, 1))
                ;
            }
            return function(s4, n3, i3, o2, a2) {
              var u2, l2, p2, f2, g2, m2, w2, b2, v2, x2, A2, _2, E2, T2, S2, R2, k2, I2 = s4.s == n3.s ? 1 : -1, B2 = s4.c, U2 = n3.c;
              if (!(B2 && B2[0] && U2 && U2[0]))
                return new W(s4.s && n3.s && (B2 ? !U2 || B2[0] != U2[0] : U2) ? B2 && 0 == B2[0] || !U2 ? 0 * I2 : I2 / 0 : NaN);
              for (v2 = (b2 = new W(I2)).c = [], I2 = i3 + (l2 = s4.e - n3.e) + 1, a2 || (a2 = h, l2 = y(s4.e / d) - y(n3.e / d), I2 = I2 / d | 0), p2 = 0; U2[p2] == (B2[p2] || 0); p2++)
                ;
              if (U2[p2] > (B2[p2] || 0) && l2--, I2 < 0)
                v2.push(1), f2 = true;
              else {
                for (T2 = B2.length, R2 = U2.length, p2 = 0, I2 += 2, (g2 = c(a2 / (U2[0] + 1))) > 1 && (U2 = e4(U2, g2, a2), B2 = e4(B2, g2, a2), R2 = U2.length, T2 = B2.length), E2 = R2, A2 = (x2 = B2.slice(0, R2)).length; A2 < R2; x2[A2++] = 0)
                  ;
                k2 = U2.slice(), k2 = [0].concat(k2), S2 = U2[0], U2[1] >= a2 / 2 && S2++;
                do {
                  if (g2 = 0, (u2 = t4(U2, x2, R2, A2)) < 0) {
                    if (_2 = x2[0], R2 != A2 && (_2 = _2 * a2 + (x2[1] || 0)), (g2 = c(_2 / S2)) > 1)
                      for (g2 >= a2 && (g2 = a2 - 1), w2 = (m2 = e4(U2, g2, a2)).length, A2 = x2.length; 1 == t4(m2, x2, w2, A2); )
                        g2--, r4(m2, R2 < w2 ? k2 : U2, w2, a2), w2 = m2.length, u2 = 1;
                    else
                      0 == g2 && (u2 = g2 = 1), w2 = (m2 = U2.slice()).length;
                    if (w2 < A2 && (m2 = [0].concat(m2)), r4(x2, m2, A2, a2), A2 = x2.length, -1 == u2)
                      for (; t4(U2, x2, R2, A2) < 1; )
                        g2++, r4(x2, R2 < A2 ? k2 : U2, A2, a2), A2 = x2.length;
                  } else
                    0 === u2 && (g2++, x2 = [0]);
                  v2[p2++] = g2, x2[0] ? x2[A2++] = B2[E2] || 0 : (x2 = [B2[E2]], A2 = 1);
                } while ((E2++ < T2 || null != x2[0]) && I2--);
                f2 = null != x2[0], v2[0] || v2.splice(0, 1);
              }
              if (a2 == h) {
                for (p2 = 1, I2 = v2[0]; I2 >= 10; I2 /= 10, p2++)
                  ;
                G(b2, i3 + (b2.e = p2 + l2 * d - 1) + 1, o2, f2);
              } else
                b2.e = l2, b2.r = +f2;
              return b2;
            };
          }(), T = /^(-?)0([xbo])(?=\w[\w.]*$)/i, S = /^([^.]+)\.$/, R = /^\.([^.]+)$/, k = /^-?(Infinity|NaN)$/, I = /^\s*\+(?=[\w.])|^\s+|\s+$/g, n2 = function(e4, t4, r4, s4) {
            var n3, i3 = r4 ? t4 : t4.replace(I, "");
            if (k.test(i3))
              e4.s = isNaN(i3) ? null : i3 < 0 ? -1 : 1;
            else {
              if (!r4 && (i3 = i3.replace(T, function(e5, t5, r5) {
                return n3 = "x" == (r5 = r5.toLowerCase()) ? 16 : "b" == r5 ? 2 : 8, s4 && s4 != n3 ? e5 : t5;
              }), s4 && (n3 = s4, i3 = i3.replace(S, "$1").replace(R, "0.$1")), t4 != i3))
                return new W(i3, n3);
              if (W.DEBUG)
                throw Error(u + "Not a" + (s4 ? " base " + s4 : "") + " number: " + t4);
              e4.s = null;
            }
            e4.c = e4.e = null;
          }, B.absoluteValue = B.abs = function() {
            var e4 = new W(this);
            return e4.s < 0 && (e4.s = 1), e4;
          }, B.comparedTo = function(e4, t4) {
            return b(this, new W(e4, t4));
          }, B.decimalPlaces = B.dp = function(e4, t4) {
            var r4, s4, n3, i3 = this;
            if (null != e4)
              return v(e4, 0, m), null == t4 ? t4 = j : v(t4, 0, 8), G(new W(i3), e4 + i3.e + 1, t4);
            if (!(r4 = i3.c))
              return null;
            if (s4 = ((n3 = r4.length - 1) - y(this.e / d)) * d, n3 = r4[n3])
              for (; n3 % 10 == 0; n3 /= 10, s4--)
                ;
            return s4 < 0 && (s4 = 0), s4;
          }, B.dividedBy = B.div = function(e4, t4) {
            return r3(this, new W(e4, t4), P, j);
          }, B.dividedToIntegerBy = B.idiv = function(e4, t4) {
            return r3(this, new W(e4, t4), 0, 1);
          }, B.exponentiatedBy = B.pow = function(e4, t4) {
            var r4, s4, n3, i3, o2, l2, h2, p2, f2 = this;
            if ((e4 = new W(e4)).c && !e4.isInteger())
              throw Error(u + "Exponent not an integer: " + H(e4));
            if (null != t4 && (t4 = new W(t4)), o2 = e4.e > 14, !f2.c || !f2.c[0] || 1 == f2.c[0] && !f2.e && 1 == f2.c.length || !e4.c || !e4.c[0])
              return p2 = new W(Math.pow(+H(f2), o2 ? 2 - x(e4) : +H(e4))), t4 ? p2.mod(t4) : p2;
            if (l2 = e4.s < 0, t4) {
              if (t4.c ? !t4.c[0] : !t4.s)
                return new W(NaN);
              (s4 = !l2 && f2.isInteger() && t4.isInteger()) && (f2 = f2.mod(t4));
            } else {
              if (e4.e > 9 && (f2.e > 0 || f2.e < -1 || (0 == f2.e ? f2.c[0] > 1 || o2 && f2.c[1] >= 24e7 : f2.c[0] < 8e13 || o2 && f2.c[0] <= 9999975e7)))
                return i3 = f2.s < 0 && x(e4) ? -0 : 0, f2.e > -1 && (i3 = 1 / i3), new W(l2 ? 1 / i3 : i3);
              M && (i3 = a(M / d + 2));
            }
            for (o2 ? (r4 = new W(0.5), l2 && (e4.s = 1), h2 = x(e4)) : h2 = (n3 = Math.abs(+H(e4))) % 2, p2 = new W(U); ; ) {
              if (h2) {
                if (!(p2 = p2.times(f2)).c)
                  break;
                i3 ? p2.c.length > i3 && (p2.c.length = i3) : s4 && (p2 = p2.mod(t4));
              }
              if (n3) {
                if (0 === (n3 = c(n3 / 2)))
                  break;
                h2 = n3 % 2;
              } else if (G(e4 = e4.times(r4), e4.e + 1, 1), e4.e > 14)
                h2 = x(e4);
              else {
                if (0 == (n3 = +H(e4)))
                  break;
                h2 = n3 % 2;
              }
              f2 = f2.times(f2), i3 ? f2.c && f2.c.length > i3 && (f2.c.length = i3) : s4 && (f2 = f2.mod(t4));
            }
            return s4 ? p2 : (l2 && (p2 = U.div(p2)), t4 ? p2.mod(t4) : i3 ? G(p2, M, j, void 0) : p2);
          }, B.integerValue = function(e4) {
            var t4 = new W(this);
            return null == e4 ? e4 = j : v(e4, 0, 8), G(t4, t4.e + 1, e4);
          }, B.isEqualTo = B.eq = function(e4, t4) {
            return 0 === b(this, new W(e4, t4));
          }, B.isFinite = function() {
            return !!this.c;
          }, B.isGreaterThan = B.gt = function(e4, t4) {
            return b(this, new W(e4, t4)) > 0;
          }, B.isGreaterThanOrEqualTo = B.gte = function(e4, t4) {
            return 1 === (t4 = b(this, new W(e4, t4))) || 0 === t4;
          }, B.isInteger = function() {
            return !!this.c && y(this.e / d) > this.c.length - 2;
          }, B.isLessThan = B.lt = function(e4, t4) {
            return b(this, new W(e4, t4)) < 0;
          }, B.isLessThanOrEqualTo = B.lte = function(e4, t4) {
            return -1 === (t4 = b(this, new W(e4, t4))) || 0 === t4;
          }, B.isNaN = function() {
            return !this.s;
          }, B.isNegative = function() {
            return this.s < 0;
          }, B.isPositive = function() {
            return this.s > 0;
          }, B.isZero = function() {
            return !!this.c && 0 == this.c[0];
          }, B.minus = function(e4, t4) {
            var r4, s4, n3, i3, o2 = this, a2 = o2.s;
            if (t4 = (e4 = new W(e4, t4)).s, !a2 || !t4)
              return new W(NaN);
            if (a2 != t4)
              return e4.s = -t4, o2.plus(e4);
            var c2 = o2.e / d, u2 = e4.e / d, l2 = o2.c, p2 = e4.c;
            if (!c2 || !u2) {
              if (!l2 || !p2)
                return l2 ? (e4.s = -t4, e4) : new W(p2 ? o2 : NaN);
              if (!l2[0] || !p2[0])
                return p2[0] ? (e4.s = -t4, e4) : new W(l2[0] ? o2 : 3 == j ? -0 : 0);
            }
            if (c2 = y(c2), u2 = y(u2), l2 = l2.slice(), a2 = c2 - u2) {
              for ((i3 = a2 < 0) ? (a2 = -a2, n3 = l2) : (u2 = c2, n3 = p2), n3.reverse(), t4 = a2; t4--; n3.push(0))
                ;
              n3.reverse();
            } else
              for (s4 = (i3 = (a2 = l2.length) < (t4 = p2.length)) ? a2 : t4, a2 = t4 = 0; t4 < s4; t4++)
                if (l2[t4] != p2[t4]) {
                  i3 = l2[t4] < p2[t4];
                  break;
                }
            if (i3 && (n3 = l2, l2 = p2, p2 = n3, e4.s = -e4.s), (t4 = (s4 = p2.length) - (r4 = l2.length)) > 0)
              for (; t4--; l2[r4++] = 0)
                ;
            for (t4 = h - 1; s4 > a2; ) {
              if (l2[--s4] < p2[s4]) {
                for (r4 = s4; r4 && !l2[--r4]; l2[r4] = t4)
                  ;
                --l2[r4], l2[s4] += h;
              }
              l2[s4] -= p2[s4];
            }
            for (; 0 == l2[0]; l2.splice(0, 1), --u2)
              ;
            return l2[0] ? V(e4, l2, u2) : (e4.s = 3 == j ? -1 : 1, e4.c = [e4.e = 0], e4);
          }, B.modulo = B.mod = function(e4, t4) {
            var s4, n3, i3 = this;
            return e4 = new W(e4, t4), !i3.c || !e4.s || e4.c && !e4.c[0] ? new W(NaN) : !e4.c || i3.c && !i3.c[0] ? new W(i3) : (9 == L ? (n3 = e4.s, e4.s = 1, s4 = r3(i3, e4, 0, 3), e4.s = n3, s4.s *= n3) : s4 = r3(i3, e4, 0, L), (e4 = i3.minus(s4.times(e4))).c[0] || 1 != L || (e4.s = i3.s), e4);
          }, B.multipliedBy = B.times = function(e4, t4) {
            var r4, s4, n3, i3, o2, a2, c2, u2, l2, p2, f2, m2, w2, b2, v2, x2 = this, A2 = x2.c, _2 = (e4 = new W(e4, t4)).c;
            if (!(A2 && _2 && A2[0] && _2[0]))
              return !x2.s || !e4.s || A2 && !A2[0] && !_2 || _2 && !_2[0] && !A2 ? e4.c = e4.e = e4.s = null : (e4.s *= x2.s, A2 && _2 ? (e4.c = [0], e4.e = 0) : e4.c = e4.e = null), e4;
            for (s4 = y(x2.e / d) + y(e4.e / d), e4.s *= x2.s, (c2 = A2.length) < (p2 = _2.length) && (w2 = A2, A2 = _2, _2 = w2, n3 = c2, c2 = p2, p2 = n3), n3 = c2 + p2, w2 = []; n3--; w2.push(0))
              ;
            for (b2 = h, v2 = g, n3 = p2; --n3 >= 0; ) {
              for (r4 = 0, f2 = _2[n3] % v2, m2 = _2[n3] / v2 | 0, i3 = n3 + (o2 = c2); i3 > n3; )
                r4 = ((u2 = f2 * (u2 = A2[--o2] % v2) + (a2 = m2 * u2 + (l2 = A2[o2] / v2 | 0) * f2) % v2 * v2 + w2[i3] + r4) / b2 | 0) + (a2 / v2 | 0) + m2 * l2, w2[i3--] = u2 % b2;
              w2[i3] = r4;
            }
            return r4 ? ++s4 : w2.splice(0, 1), V(e4, w2, s4);
          }, B.negated = function() {
            var e4 = new W(this);
            return e4.s = -e4.s || null, e4;
          }, B.plus = function(e4, t4) {
            var r4, s4 = this, n3 = s4.s;
            if (t4 = (e4 = new W(e4, t4)).s, !n3 || !t4)
              return new W(NaN);
            if (n3 != t4)
              return e4.s = -t4, s4.minus(e4);
            var i3 = s4.e / d, o2 = e4.e / d, a2 = s4.c, c2 = e4.c;
            if (!i3 || !o2) {
              if (!a2 || !c2)
                return new W(n3 / 0);
              if (!a2[0] || !c2[0])
                return c2[0] ? e4 : new W(a2[0] ? s4 : 0 * n3);
            }
            if (i3 = y(i3), o2 = y(o2), a2 = a2.slice(), n3 = i3 - o2) {
              for (n3 > 0 ? (o2 = i3, r4 = c2) : (n3 = -n3, r4 = a2), r4.reverse(); n3--; r4.push(0))
                ;
              r4.reverse();
            }
            for ((n3 = a2.length) - (t4 = c2.length) < 0 && (r4 = c2, c2 = a2, a2 = r4, t4 = n3), n3 = 0; t4; )
              n3 = (a2[--t4] = a2[t4] + c2[t4] + n3) / h | 0, a2[t4] = h === a2[t4] ? 0 : a2[t4] % h;
            return n3 && (a2 = [n3].concat(a2), ++o2), V(e4, a2, o2);
          }, B.precision = B.sd = function(e4, t4) {
            var r4, s4, n3, i3 = this;
            if (null != e4 && e4 !== !!e4)
              return v(e4, 1, m), null == t4 ? t4 = j : v(t4, 0, 8), G(new W(i3), e4, t4);
            if (!(r4 = i3.c))
              return null;
            if (s4 = (n3 = r4.length - 1) * d + 1, n3 = r4[n3]) {
              for (; n3 % 10 == 0; n3 /= 10, s4--)
                ;
              for (n3 = r4[0]; n3 >= 10; n3 /= 10, s4++)
                ;
            }
            return e4 && i3.e + 1 > s4 && (s4 = i3.e + 1), s4;
          }, B.shiftedBy = function(e4) {
            return v(e4, -9007199254740991, p), this.times("1e" + e4);
          }, B.squareRoot = B.sqrt = function() {
            var e4, t4, s4, n3, i3, o2 = this, a2 = o2.c, c2 = o2.s, u2 = o2.e, l2 = P + 4, h2 = new W("0.5");
            if (1 !== c2 || !a2 || !a2[0])
              return new W(!c2 || c2 < 0 && (!a2 || a2[0]) ? NaN : a2 ? o2 : 1 / 0);
            if (0 == (c2 = Math.sqrt(+H(o2))) || c2 == 1 / 0 ? (((t4 = w(a2)).length + u2) % 2 == 0 && (t4 += "0"), c2 = Math.sqrt(+t4), u2 = y((u2 + 1) / 2) - (u2 < 0 || u2 % 2), s4 = new W(t4 = c2 == 1 / 0 ? "5e" + u2 : (t4 = c2.toExponential()).slice(0, t4.indexOf("e") + 1) + u2)) : s4 = new W(c2 + ""), s4.c[0]) {
              for ((c2 = (u2 = s4.e) + l2) < 3 && (c2 = 0); ; )
                if (i3 = s4, s4 = h2.times(i3.plus(r3(o2, i3, l2, 1))), w(i3.c).slice(0, c2) === (t4 = w(s4.c)).slice(0, c2)) {
                  if (s4.e < u2 && --c2, "9999" != (t4 = t4.slice(c2 - 3, c2 + 1)) && (n3 || "4999" != t4)) {
                    +t4 && (+t4.slice(1) || "5" != t4.charAt(0)) || (G(s4, s4.e + P + 2, 1), e4 = !s4.times(s4).eq(o2));
                    break;
                  }
                  if (!n3 && (G(i3, i3.e + P + 2, 0), i3.times(i3).eq(o2))) {
                    s4 = i3;
                    break;
                  }
                  l2 += 4, c2 += 4, n3 = 1;
                }
            }
            return G(s4, s4.e + P + 1, j, e4);
          }, B.toExponential = function(e4, t4) {
            return null != e4 && (v(e4, 0, m), e4++), K(this, e4, t4, 1);
          }, B.toFixed = function(e4, t4) {
            return null != e4 && (v(e4, 0, m), e4 = e4 + this.e + 1), K(this, e4, t4);
          }, B.toFormat = function(e4, t4, r4) {
            var s4, n3 = this;
            if (null == r4)
              null != e4 && t4 && "object" == typeof t4 ? (r4 = t4, t4 = null) : e4 && "object" == typeof e4 ? (r4 = e4, e4 = t4 = null) : r4 = N;
            else if ("object" != typeof r4)
              throw Error(u + "Argument not an object: " + r4);
            if (s4 = n3.toFixed(e4, t4), n3.c) {
              var i3, o2 = s4.split("."), a2 = +r4.groupSize, c2 = +r4.secondaryGroupSize, l2 = r4.groupSeparator || "", h2 = o2[0], d2 = o2[1], p2 = n3.s < 0, f2 = p2 ? h2.slice(1) : h2, g2 = f2.length;
              if (c2 && (i3 = a2, a2 = c2, c2 = i3, g2 -= i3), a2 > 0 && g2 > 0) {
                for (i3 = g2 % a2 || a2, h2 = f2.substr(0, i3); i3 < g2; i3 += a2)
                  h2 += l2 + f2.substr(i3, a2);
                c2 > 0 && (h2 += l2 + f2.slice(i3)), p2 && (h2 = "-" + h2);
              }
              s4 = d2 ? h2 + (r4.decimalSeparator || "") + ((c2 = +r4.fractionGroupSize) ? d2.replace(new RegExp("\\d{" + c2 + "}\\B", "g"), "$&" + (r4.fractionGroupSeparator || "")) : d2) : h2;
            }
            return (r4.prefix || "") + s4 + (r4.suffix || "");
          }, B.toFraction = function(e4) {
            var t4, s4, n3, i3, o2, a2, c2, l2, h2, p2, g2, m2, y2 = this, b2 = y2.c;
            if (null != e4 && (!(c2 = new W(e4)).isInteger() && (c2.c || 1 !== c2.s) || c2.lt(U)))
              throw Error(u + "Argument " + (c2.isInteger() ? "out of range: " : "not an integer: ") + H(c2));
            if (!b2)
              return new W(y2);
            for (t4 = new W(U), h2 = s4 = new W(U), n3 = l2 = new W(U), m2 = w(b2), o2 = t4.e = m2.length - y2.e - 1, t4.c[0] = f[(a2 = o2 % d) < 0 ? d + a2 : a2], e4 = !e4 || c2.comparedTo(t4) > 0 ? o2 > 0 ? t4 : h2 : c2, a2 = O, O = 1 / 0, c2 = new W(m2), l2.c[0] = 0; p2 = r3(c2, t4, 0, 1), 1 != (i3 = s4.plus(p2.times(n3))).comparedTo(e4); )
              s4 = n3, n3 = i3, h2 = l2.plus(p2.times(i3 = h2)), l2 = i3, t4 = c2.minus(p2.times(i3 = t4)), c2 = i3;
            return i3 = r3(e4.minus(s4), n3, 0, 1), l2 = l2.plus(i3.times(h2)), s4 = s4.plus(i3.times(n3)), l2.s = h2.s = y2.s, g2 = r3(h2, n3, o2 *= 2, j).minus(y2).abs().comparedTo(r3(l2, s4, o2, j).minus(y2).abs()) < 1 ? [h2, n3] : [l2, s4], O = a2, g2;
          }, B.toNumber = function() {
            return +H(this);
          }, B.toPrecision = function(e4, t4) {
            return null != e4 && v(e4, 1, m), K(this, e4, t4, 2);
          }, B.toString = function(e4) {
            var t4, r4 = this, n3 = r4.s, i3 = r4.e;
            return null === i3 ? n3 ? (t4 = "Infinity", n3 < 0 && (t4 = "-" + t4)) : t4 = "NaN" : (null == e4 ? t4 = i3 <= q || i3 >= D ? A(w(r4.c), i3) : _(w(r4.c), i3, "0") : 10 === e4 ? t4 = _(w((r4 = G(new W(r4), P + i3 + 1, j)).c), r4.e, "0") : (v(e4, 2, F.length, "Base"), t4 = s3(_(w(r4.c), i3, "0"), 10, e4, n3, true)), n3 < 0 && r4.c[0] && (t4 = "-" + t4)), t4;
          }, B.valueOf = B.toJSON = function() {
            return H(this);
          }, B._isBigNumber = true, null != t3 && W.set(t3), W;
        }(), i.default = i.BigNumber = i, void 0 === (s2 = (function() {
          return i;
        }).call(t2, r2, t2, e2)) || (e2.exports = s2);
      }();
    }, 486: (e2, t2, r2) => {
      const s2 = r2(155), n = r2(525), i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
      t2.lW = c, t2.h2 = 50;
      const o = 2147483647;
      function a(e3) {
        if (e3 > o)
          throw new RangeError('The value "' + e3 + '" is invalid for option "size"');
        const t3 = new Uint8Array(e3);
        return Object.setPrototypeOf(t3, c.prototype), t3;
      }
      function c(e3, t3, r3) {
        if ("number" == typeof e3) {
          if ("string" == typeof t3)
            throw new TypeError('The "string" argument must be of type string. Received type number');
          return h(e3);
        }
        return u(e3, t3, r3);
      }
      function u(e3, t3, r3) {
        if ("string" == typeof e3)
          return function(e4, t4) {
            if ("string" == typeof t4 && "" !== t4 || (t4 = "utf8"), !c.isEncoding(t4))
              throw new TypeError("Unknown encoding: " + t4);
            const r4 = 0 | g(e4, t4);
            let s4 = a(r4);
            const n3 = s4.write(e4, t4);
            return n3 !== r4 && (s4 = s4.slice(0, n3)), s4;
          }(e3, t3);
        if (ArrayBuffer.isView(e3))
          return function(e4) {
            if (Y(e4, Uint8Array)) {
              const t4 = new Uint8Array(e4);
              return p(t4.buffer, t4.byteOffset, t4.byteLength);
            }
            return d(e4);
          }(e3);
        if (null == e3)
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e3);
        if (Y(e3, ArrayBuffer) || e3 && Y(e3.buffer, ArrayBuffer))
          return p(e3, t3, r3);
        if ("undefined" != typeof SharedArrayBuffer && (Y(e3, SharedArrayBuffer) || e3 && Y(e3.buffer, SharedArrayBuffer)))
          return p(e3, t3, r3);
        if ("number" == typeof e3)
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        const s3 = e3.valueOf && e3.valueOf();
        if (null != s3 && s3 !== e3)
          return c.from(s3, t3, r3);
        const n2 = function(e4) {
          if (c.isBuffer(e4)) {
            const t4 = 0 | f(e4.length), r4 = a(t4);
            return 0 === r4.length || e4.copy(r4, 0, 0, t4), r4;
          }
          return void 0 !== e4.length ? "number" != typeof e4.length || J(e4.length) ? a(0) : d(e4) : "Buffer" === e4.type && Array.isArray(e4.data) ? d(e4.data) : void 0;
        }(e3);
        if (n2)
          return n2;
        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e3[Symbol.toPrimitive])
          return c.from(e3[Symbol.toPrimitive]("string"), t3, r3);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e3);
      }
      function l(e3) {
        if ("number" != typeof e3)
          throw new TypeError('"size" argument must be of type number');
        if (e3 < 0)
          throw new RangeError('The value "' + e3 + '" is invalid for option "size"');
      }
      function h(e3) {
        return l(e3), a(e3 < 0 ? 0 : 0 | f(e3));
      }
      function d(e3) {
        const t3 = e3.length < 0 ? 0 : 0 | f(e3.length), r3 = a(t3);
        for (let s3 = 0; s3 < t3; s3 += 1)
          r3[s3] = 255 & e3[s3];
        return r3;
      }
      function p(e3, t3, r3) {
        if (t3 < 0 || e3.byteLength < t3)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e3.byteLength < t3 + (r3 || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let s3;
        return s3 = void 0 === t3 && void 0 === r3 ? new Uint8Array(e3) : void 0 === r3 ? new Uint8Array(e3, t3) : new Uint8Array(e3, t3, r3), Object.setPrototypeOf(s3, c.prototype), s3;
      }
      function f(e3) {
        if (e3 >= o)
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
        return 0 | e3;
      }
      function g(e3, t3) {
        if (c.isBuffer(e3))
          return e3.length;
        if (ArrayBuffer.isView(e3) || Y(e3, ArrayBuffer))
          return e3.byteLength;
        if ("string" != typeof e3)
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e3);
        const r3 = e3.length, s3 = arguments.length > 2 && true === arguments[2];
        if (!s3 && 0 === r3)
          return 0;
        let n2 = false;
        for (; ; )
          switch (t3) {
            case "ascii":
            case "latin1":
            case "binary":
              return r3;
            case "utf8":
            case "utf-8":
              return V(e3).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r3;
            case "hex":
              return r3 >>> 1;
            case "base64":
              return G(e3).length;
            default:
              if (n2)
                return s3 ? -1 : V(e3).length;
              t3 = ("" + t3).toLowerCase(), n2 = true;
          }
      }
      function m(e3, t3, r3) {
        let s3 = false;
        if ((void 0 === t3 || t3 < 0) && (t3 = 0), t3 > this.length)
          return "";
        if ((void 0 === r3 || r3 > this.length) && (r3 = this.length), r3 <= 0)
          return "";
        if ((r3 >>>= 0) <= (t3 >>>= 0))
          return "";
        for (e3 || (e3 = "utf8"); ; )
          switch (e3) {
            case "hex":
              return B(this, t3, r3);
            case "utf8":
            case "utf-8":
              return S(this, t3, r3);
            case "ascii":
              return k(this, t3, r3);
            case "latin1":
            case "binary":
              return I(this, t3, r3);
            case "base64":
              return T(this, t3, r3);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return U(this, t3, r3);
            default:
              if (s3)
                throw new TypeError("Unknown encoding: " + e3);
              e3 = (e3 + "").toLowerCase(), s3 = true;
          }
      }
      function y(e3, t3, r3) {
        const s3 = e3[t3];
        e3[t3] = e3[r3], e3[r3] = s3;
      }
      function w(e3, t3, r3, s3, n2) {
        if (0 === e3.length)
          return -1;
        if ("string" == typeof r3 ? (s3 = r3, r3 = 0) : r3 > 2147483647 ? r3 = 2147483647 : r3 < -2147483648 && (r3 = -2147483648), J(r3 = +r3) && (r3 = n2 ? 0 : e3.length - 1), r3 < 0 && (r3 = e3.length + r3), r3 >= e3.length) {
          if (n2)
            return -1;
          r3 = e3.length - 1;
        } else if (r3 < 0) {
          if (!n2)
            return -1;
          r3 = 0;
        }
        if ("string" == typeof t3 && (t3 = c.from(t3, s3)), c.isBuffer(t3))
          return 0 === t3.length ? -1 : b(e3, t3, r3, s3, n2);
        if ("number" == typeof t3)
          return t3 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? n2 ? Uint8Array.prototype.indexOf.call(e3, t3, r3) : Uint8Array.prototype.lastIndexOf.call(e3, t3, r3) : b(e3, [t3], r3, s3, n2);
        throw new TypeError("val must be string, number or Buffer");
      }
      function b(e3, t3, r3, s3, n2) {
        let i2, o2 = 1, a2 = e3.length, c2 = t3.length;
        if (void 0 !== s3 && ("ucs2" === (s3 = String(s3).toLowerCase()) || "ucs-2" === s3 || "utf16le" === s3 || "utf-16le" === s3)) {
          if (e3.length < 2 || t3.length < 2)
            return -1;
          o2 = 2, a2 /= 2, c2 /= 2, r3 /= 2;
        }
        function u2(e4, t4) {
          return 1 === o2 ? e4[t4] : e4.readUInt16BE(t4 * o2);
        }
        if (n2) {
          let s4 = -1;
          for (i2 = r3; i2 < a2; i2++)
            if (u2(e3, i2) === u2(t3, -1 === s4 ? 0 : i2 - s4)) {
              if (-1 === s4 && (s4 = i2), i2 - s4 + 1 === c2)
                return s4 * o2;
            } else
              -1 !== s4 && (i2 -= i2 - s4), s4 = -1;
        } else
          for (r3 + c2 > a2 && (r3 = a2 - c2), i2 = r3; i2 >= 0; i2--) {
            let r4 = true;
            for (let s4 = 0; s4 < c2; s4++)
              if (u2(e3, i2 + s4) !== u2(t3, s4)) {
                r4 = false;
                break;
              }
            if (r4)
              return i2;
          }
        return -1;
      }
      function v(e3, t3, r3, s3) {
        r3 = Number(r3) || 0;
        const n2 = e3.length - r3;
        s3 ? (s3 = Number(s3)) > n2 && (s3 = n2) : s3 = n2;
        const i2 = t3.length;
        let o2;
        for (s3 > i2 / 2 && (s3 = i2 / 2), o2 = 0; o2 < s3; ++o2) {
          const s4 = parseInt(t3.substr(2 * o2, 2), 16);
          if (J(s4))
            return o2;
          e3[r3 + o2] = s4;
        }
        return o2;
      }
      function x(e3, t3, r3, s3) {
        return H(V(t3, e3.length - r3), e3, r3, s3);
      }
      function A(e3, t3, r3, s3) {
        return H(function(e4) {
          const t4 = [];
          for (let r4 = 0; r4 < e4.length; ++r4)
            t4.push(255 & e4.charCodeAt(r4));
          return t4;
        }(t3), e3, r3, s3);
      }
      function _(e3, t3, r3, s3) {
        return H(G(t3), e3, r3, s3);
      }
      function E(e3, t3, r3, s3) {
        return H(function(e4, t4) {
          let r4, s4, n2;
          const i2 = [];
          for (let o2 = 0; o2 < e4.length && !((t4 -= 2) < 0); ++o2)
            r4 = e4.charCodeAt(o2), s4 = r4 >> 8, n2 = r4 % 256, i2.push(n2), i2.push(s4);
          return i2;
        }(t3, e3.length - r3), e3, r3, s3);
      }
      function T(e3, t3, r3) {
        return 0 === t3 && r3 === e3.length ? s2.fromByteArray(e3) : s2.fromByteArray(e3.slice(t3, r3));
      }
      function S(e3, t3, r3) {
        r3 = Math.min(e3.length, r3);
        const s3 = [];
        let n2 = t3;
        for (; n2 < r3; ) {
          const t4 = e3[n2];
          let i2 = null, o2 = t4 > 239 ? 4 : t4 > 223 ? 3 : t4 > 191 ? 2 : 1;
          if (n2 + o2 <= r3) {
            let r4, s4, a2, c2;
            switch (o2) {
              case 1:
                t4 < 128 && (i2 = t4);
                break;
              case 2:
                r4 = e3[n2 + 1], 128 == (192 & r4) && (c2 = (31 & t4) << 6 | 63 & r4, c2 > 127 && (i2 = c2));
                break;
              case 3:
                r4 = e3[n2 + 1], s4 = e3[n2 + 2], 128 == (192 & r4) && 128 == (192 & s4) && (c2 = (15 & t4) << 12 | (63 & r4) << 6 | 63 & s4, c2 > 2047 && (c2 < 55296 || c2 > 57343) && (i2 = c2));
                break;
              case 4:
                r4 = e3[n2 + 1], s4 = e3[n2 + 2], a2 = e3[n2 + 3], 128 == (192 & r4) && 128 == (192 & s4) && 128 == (192 & a2) && (c2 = (15 & t4) << 18 | (63 & r4) << 12 | (63 & s4) << 6 | 63 & a2, c2 > 65535 && c2 < 1114112 && (i2 = c2));
            }
          }
          null === i2 ? (i2 = 65533, o2 = 1) : i2 > 65535 && (i2 -= 65536, s3.push(i2 >>> 10 & 1023 | 55296), i2 = 56320 | 1023 & i2), s3.push(i2), n2 += o2;
        }
        return function(e4) {
          const t4 = e4.length;
          if (t4 <= R)
            return String.fromCharCode.apply(String, e4);
          let r4 = "", s4 = 0;
          for (; s4 < t4; )
            r4 += String.fromCharCode.apply(String, e4.slice(s4, s4 += R));
          return r4;
        }(s3);
      }
      c.TYPED_ARRAY_SUPPORT = function() {
        try {
          const e3 = new Uint8Array(1), t3 = { foo: function() {
            return 42;
          } };
          return Object.setPrototypeOf(t3, Uint8Array.prototype), Object.setPrototypeOf(e3, t3), 42 === e3.foo();
        } catch (e3) {
          return false;
        }
      }(), c.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", { enumerable: true, get: function() {
        if (c.isBuffer(this))
          return this.buffer;
      } }), Object.defineProperty(c.prototype, "offset", { enumerable: true, get: function() {
        if (c.isBuffer(this))
          return this.byteOffset;
      } }), c.poolSize = 8192, c.from = function(e3, t3, r3) {
        return u(e3, t3, r3);
      }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(e3, t3, r3) {
        return function(e4, t4, r4) {
          return l(e4), e4 <= 0 ? a(e4) : void 0 !== t4 ? "string" == typeof r4 ? a(e4).fill(t4, r4) : a(e4).fill(t4) : a(e4);
        }(e3, t3, r3);
      }, c.allocUnsafe = function(e3) {
        return h(e3);
      }, c.allocUnsafeSlow = function(e3) {
        return h(e3);
      }, c.isBuffer = function(e3) {
        return null != e3 && true === e3._isBuffer && e3 !== c.prototype;
      }, c.compare = function(e3, t3) {
        if (Y(e3, Uint8Array) && (e3 = c.from(e3, e3.offset, e3.byteLength)), Y(t3, Uint8Array) && (t3 = c.from(t3, t3.offset, t3.byteLength)), !c.isBuffer(e3) || !c.isBuffer(t3))
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e3 === t3)
          return 0;
        let r3 = e3.length, s3 = t3.length;
        for (let n2 = 0, i2 = Math.min(r3, s3); n2 < i2; ++n2)
          if (e3[n2] !== t3[n2]) {
            r3 = e3[n2], s3 = t3[n2];
            break;
          }
        return r3 < s3 ? -1 : s3 < r3 ? 1 : 0;
      }, c.isEncoding = function(e3) {
        switch (String(e3).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      }, c.concat = function(e3, t3) {
        if (!Array.isArray(e3))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e3.length)
          return c.alloc(0);
        let r3;
        if (void 0 === t3)
          for (t3 = 0, r3 = 0; r3 < e3.length; ++r3)
            t3 += e3[r3].length;
        const s3 = c.allocUnsafe(t3);
        let n2 = 0;
        for (r3 = 0; r3 < e3.length; ++r3) {
          let t4 = e3[r3];
          if (Y(t4, Uint8Array))
            n2 + t4.length > s3.length ? (c.isBuffer(t4) || (t4 = c.from(t4)), t4.copy(s3, n2)) : Uint8Array.prototype.set.call(s3, t4, n2);
          else {
            if (!c.isBuffer(t4))
              throw new TypeError('"list" argument must be an Array of Buffers');
            t4.copy(s3, n2);
          }
          n2 += t4.length;
        }
        return s3;
      }, c.byteLength = g, c.prototype._isBuffer = true, c.prototype.swap16 = function() {
        const e3 = this.length;
        if (e3 % 2 != 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t3 = 0; t3 < e3; t3 += 2)
          y(this, t3, t3 + 1);
        return this;
      }, c.prototype.swap32 = function() {
        const e3 = this.length;
        if (e3 % 4 != 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t3 = 0; t3 < e3; t3 += 4)
          y(this, t3, t3 + 3), y(this, t3 + 1, t3 + 2);
        return this;
      }, c.prototype.swap64 = function() {
        const e3 = this.length;
        if (e3 % 8 != 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t3 = 0; t3 < e3; t3 += 8)
          y(this, t3, t3 + 7), y(this, t3 + 1, t3 + 6), y(this, t3 + 2, t3 + 5), y(this, t3 + 3, t3 + 4);
        return this;
      }, c.prototype.toString = function() {
        const e3 = this.length;
        return 0 === e3 ? "" : 0 === arguments.length ? S(this, 0, e3) : m.apply(this, arguments);
      }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(e3) {
        if (!c.isBuffer(e3))
          throw new TypeError("Argument must be a Buffer");
        return this === e3 || 0 === c.compare(this, e3);
      }, c.prototype.inspect = function() {
        let e3 = "";
        const r3 = t2.h2;
        return e3 = this.toString("hex", 0, r3).replace(/(.{2})/g, "$1 ").trim(), this.length > r3 && (e3 += " ... "), "<Buffer " + e3 + ">";
      }, i && (c.prototype[i] = c.prototype.inspect), c.prototype.compare = function(e3, t3, r3, s3, n2) {
        if (Y(e3, Uint8Array) && (e3 = c.from(e3, e3.offset, e3.byteLength)), !c.isBuffer(e3))
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e3);
        if (void 0 === t3 && (t3 = 0), void 0 === r3 && (r3 = e3 ? e3.length : 0), void 0 === s3 && (s3 = 0), void 0 === n2 && (n2 = this.length), t3 < 0 || r3 > e3.length || s3 < 0 || n2 > this.length)
          throw new RangeError("out of range index");
        if (s3 >= n2 && t3 >= r3)
          return 0;
        if (s3 >= n2)
          return -1;
        if (t3 >= r3)
          return 1;
        if (this === e3)
          return 0;
        let i2 = (n2 >>>= 0) - (s3 >>>= 0), o2 = (r3 >>>= 0) - (t3 >>>= 0);
        const a2 = Math.min(i2, o2), u2 = this.slice(s3, n2), l2 = e3.slice(t3, r3);
        for (let e4 = 0; e4 < a2; ++e4)
          if (u2[e4] !== l2[e4]) {
            i2 = u2[e4], o2 = l2[e4];
            break;
          }
        return i2 < o2 ? -1 : o2 < i2 ? 1 : 0;
      }, c.prototype.includes = function(e3, t3, r3) {
        return -1 !== this.indexOf(e3, t3, r3);
      }, c.prototype.indexOf = function(e3, t3, r3) {
        return w(this, e3, t3, r3, true);
      }, c.prototype.lastIndexOf = function(e3, t3, r3) {
        return w(this, e3, t3, r3, false);
      }, c.prototype.write = function(e3, t3, r3, s3) {
        if (void 0 === t3)
          s3 = "utf8", r3 = this.length, t3 = 0;
        else if (void 0 === r3 && "string" == typeof t3)
          s3 = t3, r3 = this.length, t3 = 0;
        else {
          if (!isFinite(t3))
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          t3 >>>= 0, isFinite(r3) ? (r3 >>>= 0, void 0 === s3 && (s3 = "utf8")) : (s3 = r3, r3 = void 0);
        }
        const n2 = this.length - t3;
        if ((void 0 === r3 || r3 > n2) && (r3 = n2), e3.length > 0 && (r3 < 0 || t3 < 0) || t3 > this.length)
          throw new RangeError("Attempt to write outside buffer bounds");
        s3 || (s3 = "utf8");
        let i2 = false;
        for (; ; )
          switch (s3) {
            case "hex":
              return v(this, e3, t3, r3);
            case "utf8":
            case "utf-8":
              return x(this, e3, t3, r3);
            case "ascii":
            case "latin1":
            case "binary":
              return A(this, e3, t3, r3);
            case "base64":
              return _(this, e3, t3, r3);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return E(this, e3, t3, r3);
            default:
              if (i2)
                throw new TypeError("Unknown encoding: " + s3);
              s3 = ("" + s3).toLowerCase(), i2 = true;
          }
      }, c.prototype.toJSON = function() {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };
      const R = 4096;
      function k(e3, t3, r3) {
        let s3 = "";
        r3 = Math.min(e3.length, r3);
        for (let n2 = t3; n2 < r3; ++n2)
          s3 += String.fromCharCode(127 & e3[n2]);
        return s3;
      }
      function I(e3, t3, r3) {
        let s3 = "";
        r3 = Math.min(e3.length, r3);
        for (let n2 = t3; n2 < r3; ++n2)
          s3 += String.fromCharCode(e3[n2]);
        return s3;
      }
      function B(e3, t3, r3) {
        const s3 = e3.length;
        (!t3 || t3 < 0) && (t3 = 0), (!r3 || r3 < 0 || r3 > s3) && (r3 = s3);
        let n2 = "";
        for (let s4 = t3; s4 < r3; ++s4)
          n2 += X[e3[s4]];
        return n2;
      }
      function U(e3, t3, r3) {
        const s3 = e3.slice(t3, r3);
        let n2 = "";
        for (let e4 = 0; e4 < s3.length - 1; e4 += 2)
          n2 += String.fromCharCode(s3[e4] + 256 * s3[e4 + 1]);
        return n2;
      }
      function P(e3, t3, r3) {
        if (e3 % 1 != 0 || e3 < 0)
          throw new RangeError("offset is not uint");
        if (e3 + t3 > r3)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function j(e3, t3, r3, s3, n2, i2) {
        if (!c.isBuffer(e3))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t3 > n2 || t3 < i2)
          throw new RangeError('"value" argument is out of bounds');
        if (r3 + s3 > e3.length)
          throw new RangeError("Index out of range");
      }
      function q(e3, t3, r3, s3, n2) {
        F(t3, s3, n2, e3, r3, 7);
        let i2 = Number(t3 & BigInt(4294967295));
        e3[r3++] = i2, i2 >>= 8, e3[r3++] = i2, i2 >>= 8, e3[r3++] = i2, i2 >>= 8, e3[r3++] = i2;
        let o2 = Number(t3 >> BigInt(32) & BigInt(4294967295));
        return e3[r3++] = o2, o2 >>= 8, e3[r3++] = o2, o2 >>= 8, e3[r3++] = o2, o2 >>= 8, e3[r3++] = o2, r3;
      }
      function D(e3, t3, r3, s3, n2) {
        F(t3, s3, n2, e3, r3, 7);
        let i2 = Number(t3 & BigInt(4294967295));
        e3[r3 + 7] = i2, i2 >>= 8, e3[r3 + 6] = i2, i2 >>= 8, e3[r3 + 5] = i2, i2 >>= 8, e3[r3 + 4] = i2;
        let o2 = Number(t3 >> BigInt(32) & BigInt(4294967295));
        return e3[r3 + 3] = o2, o2 >>= 8, e3[r3 + 2] = o2, o2 >>= 8, e3[r3 + 1] = o2, o2 >>= 8, e3[r3] = o2, r3 + 8;
      }
      function $(e3, t3, r3, s3, n2, i2) {
        if (r3 + s3 > e3.length)
          throw new RangeError("Index out of range");
        if (r3 < 0)
          throw new RangeError("Index out of range");
      }
      function O(e3, t3, r3, s3, i2) {
        return t3 = +t3, r3 >>>= 0, i2 || $(e3, 0, r3, 4), n.write(e3, t3, r3, s3, 23, 4), r3 + 4;
      }
      function C(e3, t3, r3, s3, i2) {
        return t3 = +t3, r3 >>>= 0, i2 || $(e3, 0, r3, 8), n.write(e3, t3, r3, s3, 52, 8), r3 + 8;
      }
      c.prototype.slice = function(e3, t3) {
        const r3 = this.length;
        (e3 = ~~e3) < 0 ? (e3 += r3) < 0 && (e3 = 0) : e3 > r3 && (e3 = r3), (t3 = void 0 === t3 ? r3 : ~~t3) < 0 ? (t3 += r3) < 0 && (t3 = 0) : t3 > r3 && (t3 = r3), t3 < e3 && (t3 = e3);
        const s3 = this.subarray(e3, t3);
        return Object.setPrototypeOf(s3, c.prototype), s3;
      }, c.prototype.readUintLE = c.prototype.readUIntLE = function(e3, t3, r3) {
        e3 >>>= 0, t3 >>>= 0, r3 || P(e3, t3, this.length);
        let s3 = this[e3], n2 = 1, i2 = 0;
        for (; ++i2 < t3 && (n2 *= 256); )
          s3 += this[e3 + i2] * n2;
        return s3;
      }, c.prototype.readUintBE = c.prototype.readUIntBE = function(e3, t3, r3) {
        e3 >>>= 0, t3 >>>= 0, r3 || P(e3, t3, this.length);
        let s3 = this[e3 + --t3], n2 = 1;
        for (; t3 > 0 && (n2 *= 256); )
          s3 += this[e3 + --t3] * n2;
        return s3;
      }, c.prototype.readUint8 = c.prototype.readUInt8 = function(e3, t3) {
        return e3 >>>= 0, t3 || P(e3, 1, this.length), this[e3];
      }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(e3, t3) {
        return e3 >>>= 0, t3 || P(e3, 2, this.length), this[e3] | this[e3 + 1] << 8;
      }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(e3, t3) {
        return e3 >>>= 0, t3 || P(e3, 2, this.length), this[e3] << 8 | this[e3 + 1];
      }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(e3, t3) {
        return e3 >>>= 0, t3 || P(e3, 4, this.length), (this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16) + 16777216 * this[e3 + 3];
      }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(e3, t3) {
        return e3 >>>= 0, t3 || P(e3, 4, this.length), 16777216 * this[e3] + (this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3]);
      }, c.prototype.readBigUInt64LE = Z(function(e3) {
        W(e3 >>>= 0, "offset");
        const t3 = this[e3], r3 = this[e3 + 7];
        void 0 !== t3 && void 0 !== r3 || K(e3, this.length - 8);
        const s3 = t3 + 256 * this[++e3] + 65536 * this[++e3] + this[++e3] * 2 ** 24, n2 = this[++e3] + 256 * this[++e3] + 65536 * this[++e3] + r3 * 2 ** 24;
        return BigInt(s3) + (BigInt(n2) << BigInt(32));
      }), c.prototype.readBigUInt64BE = Z(function(e3) {
        W(e3 >>>= 0, "offset");
        const t3 = this[e3], r3 = this[e3 + 7];
        void 0 !== t3 && void 0 !== r3 || K(e3, this.length - 8);
        const s3 = t3 * 2 ** 24 + 65536 * this[++e3] + 256 * this[++e3] + this[++e3], n2 = this[++e3] * 2 ** 24 + 65536 * this[++e3] + 256 * this[++e3] + r3;
        return (BigInt(s3) << BigInt(32)) + BigInt(n2);
      }), c.prototype.readIntLE = function(e3, t3, r3) {
        e3 >>>= 0, t3 >>>= 0, r3 || P(e3, t3, this.length);
        let s3 = this[e3], n2 = 1, i2 = 0;
        for (; ++i2 < t3 && (n2 *= 256); )
          s3 += this[e3 + i2] * n2;
        return n2 *= 128, s3 >= n2 && (s3 -= Math.pow(2, 8 * t3)), s3;
      }, c.prototype.readIntBE = function(e3, t3, r3) {
        e3 >>>= 0, t3 >>>= 0, r3 || P(e3, t3, this.length);
        let s3 = t3, n2 = 1, i2 = this[e3 + --s3];
        for (; s3 > 0 && (n2 *= 256); )
          i2 += this[e3 + --s3] * n2;
        return n2 *= 128, i2 >= n2 && (i2 -= Math.pow(2, 8 * t3)), i2;
      }, c.prototype.readInt8 = function(e3, t3) {
        return e3 >>>= 0, t3 || P(e3, 1, this.length), 128 & this[e3] ? -1 * (255 - this[e3] + 1) : this[e3];
      }, c.prototype.readInt16LE = function(e3, t3) {
        e3 >>>= 0, t3 || P(e3, 2, this.length);
        const r3 = this[e3] | this[e3 + 1] << 8;
        return 32768 & r3 ? 4294901760 | r3 : r3;
      }, c.prototype.readInt16BE = function(e3, t3) {
        e3 >>>= 0, t3 || P(e3, 2, this.length);
        const r3 = this[e3 + 1] | this[e3] << 8;
        return 32768 & r3 ? 4294901760 | r3 : r3;
      }, c.prototype.readInt32LE = function(e3, t3) {
        return e3 >>>= 0, t3 || P(e3, 4, this.length), this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16 | this[e3 + 3] << 24;
      }, c.prototype.readInt32BE = function(e3, t3) {
        return e3 >>>= 0, t3 || P(e3, 4, this.length), this[e3] << 24 | this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3];
      }, c.prototype.readBigInt64LE = Z(function(e3) {
        W(e3 >>>= 0, "offset");
        const t3 = this[e3], r3 = this[e3 + 7];
        void 0 !== t3 && void 0 !== r3 || K(e3, this.length - 8);
        const s3 = this[e3 + 4] + 256 * this[e3 + 5] + 65536 * this[e3 + 6] + (r3 << 24);
        return (BigInt(s3) << BigInt(32)) + BigInt(t3 + 256 * this[++e3] + 65536 * this[++e3] + this[++e3] * 2 ** 24);
      }), c.prototype.readBigInt64BE = Z(function(e3) {
        W(e3 >>>= 0, "offset");
        const t3 = this[e3], r3 = this[e3 + 7];
        void 0 !== t3 && void 0 !== r3 || K(e3, this.length - 8);
        const s3 = (t3 << 24) + 65536 * this[++e3] + 256 * this[++e3] + this[++e3];
        return (BigInt(s3) << BigInt(32)) + BigInt(this[++e3] * 2 ** 24 + 65536 * this[++e3] + 256 * this[++e3] + r3);
      }), c.prototype.readFloatLE = function(e3, t3) {
        return e3 >>>= 0, t3 || P(e3, 4, this.length), n.read(this, e3, true, 23, 4);
      }, c.prototype.readFloatBE = function(e3, t3) {
        return e3 >>>= 0, t3 || P(e3, 4, this.length), n.read(this, e3, false, 23, 4);
      }, c.prototype.readDoubleLE = function(e3, t3) {
        return e3 >>>= 0, t3 || P(e3, 8, this.length), n.read(this, e3, true, 52, 8);
      }, c.prototype.readDoubleBE = function(e3, t3) {
        return e3 >>>= 0, t3 || P(e3, 8, this.length), n.read(this, e3, false, 52, 8);
      }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function(e3, t3, r3, s3) {
        e3 = +e3, t3 >>>= 0, r3 >>>= 0, s3 || j(this, e3, t3, r3, Math.pow(2, 8 * r3) - 1, 0);
        let n2 = 1, i2 = 0;
        for (this[t3] = 255 & e3; ++i2 < r3 && (n2 *= 256); )
          this[t3 + i2] = e3 / n2 & 255;
        return t3 + r3;
      }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(e3, t3, r3, s3) {
        e3 = +e3, t3 >>>= 0, r3 >>>= 0, s3 || j(this, e3, t3, r3, Math.pow(2, 8 * r3) - 1, 0);
        let n2 = r3 - 1, i2 = 1;
        for (this[t3 + n2] = 255 & e3; --n2 >= 0 && (i2 *= 256); )
          this[t3 + n2] = e3 / i2 & 255;
        return t3 + r3;
      }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(e3, t3, r3) {
        return e3 = +e3, t3 >>>= 0, r3 || j(this, e3, t3, 1, 255, 0), this[t3] = 255 & e3, t3 + 1;
      }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(e3, t3, r3) {
        return e3 = +e3, t3 >>>= 0, r3 || j(this, e3, t3, 2, 65535, 0), this[t3] = 255 & e3, this[t3 + 1] = e3 >>> 8, t3 + 2;
      }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(e3, t3, r3) {
        return e3 = +e3, t3 >>>= 0, r3 || j(this, e3, t3, 2, 65535, 0), this[t3] = e3 >>> 8, this[t3 + 1] = 255 & e3, t3 + 2;
      }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(e3, t3, r3) {
        return e3 = +e3, t3 >>>= 0, r3 || j(this, e3, t3, 4, 4294967295, 0), this[t3 + 3] = e3 >>> 24, this[t3 + 2] = e3 >>> 16, this[t3 + 1] = e3 >>> 8, this[t3] = 255 & e3, t3 + 4;
      }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(e3, t3, r3) {
        return e3 = +e3, t3 >>>= 0, r3 || j(this, e3, t3, 4, 4294967295, 0), this[t3] = e3 >>> 24, this[t3 + 1] = e3 >>> 16, this[t3 + 2] = e3 >>> 8, this[t3 + 3] = 255 & e3, t3 + 4;
      }, c.prototype.writeBigUInt64LE = Z(function(e3, t3 = 0) {
        return q(this, e3, t3, BigInt(0), BigInt("0xffffffffffffffff"));
      }), c.prototype.writeBigUInt64BE = Z(function(e3, t3 = 0) {
        return D(this, e3, t3, BigInt(0), BigInt("0xffffffffffffffff"));
      }), c.prototype.writeIntLE = function(e3, t3, r3, s3) {
        if (e3 = +e3, t3 >>>= 0, !s3) {
          const s4 = Math.pow(2, 8 * r3 - 1);
          j(this, e3, t3, r3, s4 - 1, -s4);
        }
        let n2 = 0, i2 = 1, o2 = 0;
        for (this[t3] = 255 & e3; ++n2 < r3 && (i2 *= 256); )
          e3 < 0 && 0 === o2 && 0 !== this[t3 + n2 - 1] && (o2 = 1), this[t3 + n2] = (e3 / i2 >> 0) - o2 & 255;
        return t3 + r3;
      }, c.prototype.writeIntBE = function(e3, t3, r3, s3) {
        if (e3 = +e3, t3 >>>= 0, !s3) {
          const s4 = Math.pow(2, 8 * r3 - 1);
          j(this, e3, t3, r3, s4 - 1, -s4);
        }
        let n2 = r3 - 1, i2 = 1, o2 = 0;
        for (this[t3 + n2] = 255 & e3; --n2 >= 0 && (i2 *= 256); )
          e3 < 0 && 0 === o2 && 0 !== this[t3 + n2 + 1] && (o2 = 1), this[t3 + n2] = (e3 / i2 >> 0) - o2 & 255;
        return t3 + r3;
      }, c.prototype.writeInt8 = function(e3, t3, r3) {
        return e3 = +e3, t3 >>>= 0, r3 || j(this, e3, t3, 1, 127, -128), e3 < 0 && (e3 = 255 + e3 + 1), this[t3] = 255 & e3, t3 + 1;
      }, c.prototype.writeInt16LE = function(e3, t3, r3) {
        return e3 = +e3, t3 >>>= 0, r3 || j(this, e3, t3, 2, 32767, -32768), this[t3] = 255 & e3, this[t3 + 1] = e3 >>> 8, t3 + 2;
      }, c.prototype.writeInt16BE = function(e3, t3, r3) {
        return e3 = +e3, t3 >>>= 0, r3 || j(this, e3, t3, 2, 32767, -32768), this[t3] = e3 >>> 8, this[t3 + 1] = 255 & e3, t3 + 2;
      }, c.prototype.writeInt32LE = function(e3, t3, r3) {
        return e3 = +e3, t3 >>>= 0, r3 || j(this, e3, t3, 4, 2147483647, -2147483648), this[t3] = 255 & e3, this[t3 + 1] = e3 >>> 8, this[t3 + 2] = e3 >>> 16, this[t3 + 3] = e3 >>> 24, t3 + 4;
      }, c.prototype.writeInt32BE = function(e3, t3, r3) {
        return e3 = +e3, t3 >>>= 0, r3 || j(this, e3, t3, 4, 2147483647, -2147483648), e3 < 0 && (e3 = 4294967295 + e3 + 1), this[t3] = e3 >>> 24, this[t3 + 1] = e3 >>> 16, this[t3 + 2] = e3 >>> 8, this[t3 + 3] = 255 & e3, t3 + 4;
      }, c.prototype.writeBigInt64LE = Z(function(e3, t3 = 0) {
        return q(this, e3, t3, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      }), c.prototype.writeBigInt64BE = Z(function(e3, t3 = 0) {
        return D(this, e3, t3, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      }), c.prototype.writeFloatLE = function(e3, t3, r3) {
        return O(this, e3, t3, true, r3);
      }, c.prototype.writeFloatBE = function(e3, t3, r3) {
        return O(this, e3, t3, false, r3);
      }, c.prototype.writeDoubleLE = function(e3, t3, r3) {
        return C(this, e3, t3, true, r3);
      }, c.prototype.writeDoubleBE = function(e3, t3, r3) {
        return C(this, e3, t3, false, r3);
      }, c.prototype.copy = function(e3, t3, r3, s3) {
        if (!c.isBuffer(e3))
          throw new TypeError("argument should be a Buffer");
        if (r3 || (r3 = 0), s3 || 0 === s3 || (s3 = this.length), t3 >= e3.length && (t3 = e3.length), t3 || (t3 = 0), s3 > 0 && s3 < r3 && (s3 = r3), s3 === r3)
          return 0;
        if (0 === e3.length || 0 === this.length)
          return 0;
        if (t3 < 0)
          throw new RangeError("targetStart out of bounds");
        if (r3 < 0 || r3 >= this.length)
          throw new RangeError("Index out of range");
        if (s3 < 0)
          throw new RangeError("sourceEnd out of bounds");
        s3 > this.length && (s3 = this.length), e3.length - t3 < s3 - r3 && (s3 = e3.length - t3 + r3);
        const n2 = s3 - r3;
        return this === e3 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t3, r3, s3) : Uint8Array.prototype.set.call(e3, this.subarray(r3, s3), t3), n2;
      }, c.prototype.fill = function(e3, t3, r3, s3) {
        if ("string" == typeof e3) {
          if ("string" == typeof t3 ? (s3 = t3, t3 = 0, r3 = this.length) : "string" == typeof r3 && (s3 = r3, r3 = this.length), void 0 !== s3 && "string" != typeof s3)
            throw new TypeError("encoding must be a string");
          if ("string" == typeof s3 && !c.isEncoding(s3))
            throw new TypeError("Unknown encoding: " + s3);
          if (1 === e3.length) {
            const t4 = e3.charCodeAt(0);
            ("utf8" === s3 && t4 < 128 || "latin1" === s3) && (e3 = t4);
          }
        } else
          "number" == typeof e3 ? e3 &= 255 : "boolean" == typeof e3 && (e3 = Number(e3));
        if (t3 < 0 || this.length < t3 || this.length < r3)
          throw new RangeError("Out of range index");
        if (r3 <= t3)
          return this;
        let n2;
        if (t3 >>>= 0, r3 = void 0 === r3 ? this.length : r3 >>> 0, e3 || (e3 = 0), "number" == typeof e3)
          for (n2 = t3; n2 < r3; ++n2)
            this[n2] = e3;
        else {
          const i2 = c.isBuffer(e3) ? e3 : c.from(e3, s3), o2 = i2.length;
          if (0 === o2)
            throw new TypeError('The value "' + e3 + '" is invalid for argument "value"');
          for (n2 = 0; n2 < r3 - t3; ++n2)
            this[n2 + t3] = i2[n2 % o2];
        }
        return this;
      };
      const L = {};
      function M(e3, t3, r3) {
        L[e3] = class extends r3 {
          constructor() {
            super(), Object.defineProperty(this, "message", { value: t3.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e3}]`, this.stack, delete this.name;
          }
          get code() {
            return e3;
          }
          set code(e4) {
            Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: e4, writable: true });
          }
          toString() {
            return `${this.name} [${e3}]: ${this.message}`;
          }
        };
      }
      function N(e3) {
        let t3 = "", r3 = e3.length;
        const s3 = "-" === e3[0] ? 1 : 0;
        for (; r3 >= s3 + 4; r3 -= 3)
          t3 = `_${e3.slice(r3 - 3, r3)}${t3}`;
        return `${e3.slice(0, r3)}${t3}`;
      }
      function F(e3, t3, r3, s3, n2, i2) {
        if (e3 > r3 || e3 < t3) {
          const s4 = "bigint" == typeof t3 ? "n" : "";
          let n3;
          throw n3 = i2 > 3 ? 0 === t3 || t3 === BigInt(0) ? `>= 0${s4} and < 2${s4} ** ${8 * (i2 + 1)}${s4}` : `>= -(2${s4} ** ${8 * (i2 + 1) - 1}${s4}) and < 2 ** ${8 * (i2 + 1) - 1}${s4}` : `>= ${t3}${s4} and <= ${r3}${s4}`, new L.ERR_OUT_OF_RANGE("value", n3, e3);
        }
        !function(e4, t4, r4) {
          W(t4, "offset"), void 0 !== e4[t4] && void 0 !== e4[t4 + r4] || K(t4, e4.length - (r4 + 1));
        }(s3, n2, i2);
      }
      function W(e3, t3) {
        if ("number" != typeof e3)
          throw new L.ERR_INVALID_ARG_TYPE(t3, "number", e3);
      }
      function K(e3, t3, r3) {
        if (Math.floor(e3) !== e3)
          throw W(e3, r3), new L.ERR_OUT_OF_RANGE(r3 || "offset", "an integer", e3);
        if (t3 < 0)
          throw new L.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new L.ERR_OUT_OF_RANGE(r3 || "offset", `>= ${r3 ? 1 : 0} and <= ${t3}`, e3);
      }
      M("ERR_BUFFER_OUT_OF_BOUNDS", function(e3) {
        return e3 ? `${e3} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError), M("ERR_INVALID_ARG_TYPE", function(e3, t3) {
        return `The "${e3}" argument must be of type number. Received type ${typeof t3}`;
      }, TypeError), M("ERR_OUT_OF_RANGE", function(e3, t3, r3) {
        let s3 = `The value of "${e3}" is out of range.`, n2 = r3;
        return Number.isInteger(r3) && Math.abs(r3) > 2 ** 32 ? n2 = N(String(r3)) : "bigint" == typeof r3 && (n2 = String(r3), (r3 > BigInt(2) ** BigInt(32) || r3 < -(BigInt(2) ** BigInt(32))) && (n2 = N(n2)), n2 += "n"), s3 += ` It must be ${t3}. Received ${n2}`, s3;
      }, RangeError);
      const z = /[^+/0-9A-Za-z-_]/g;
      function V(e3, t3) {
        let r3;
        t3 = t3 || 1 / 0;
        const s3 = e3.length;
        let n2 = null;
        const i2 = [];
        for (let o2 = 0; o2 < s3; ++o2) {
          if (r3 = e3.charCodeAt(o2), r3 > 55295 && r3 < 57344) {
            if (!n2) {
              if (r3 > 56319) {
                (t3 -= 3) > -1 && i2.push(239, 191, 189);
                continue;
              }
              if (o2 + 1 === s3) {
                (t3 -= 3) > -1 && i2.push(239, 191, 189);
                continue;
              }
              n2 = r3;
              continue;
            }
            if (r3 < 56320) {
              (t3 -= 3) > -1 && i2.push(239, 191, 189), n2 = r3;
              continue;
            }
            r3 = 65536 + (n2 - 55296 << 10 | r3 - 56320);
          } else
            n2 && (t3 -= 3) > -1 && i2.push(239, 191, 189);
          if (n2 = null, r3 < 128) {
            if ((t3 -= 1) < 0)
              break;
            i2.push(r3);
          } else if (r3 < 2048) {
            if ((t3 -= 2) < 0)
              break;
            i2.push(r3 >> 6 | 192, 63 & r3 | 128);
          } else if (r3 < 65536) {
            if ((t3 -= 3) < 0)
              break;
            i2.push(r3 >> 12 | 224, r3 >> 6 & 63 | 128, 63 & r3 | 128);
          } else {
            if (!(r3 < 1114112))
              throw new Error("Invalid code point");
            if ((t3 -= 4) < 0)
              break;
            i2.push(r3 >> 18 | 240, r3 >> 12 & 63 | 128, r3 >> 6 & 63 | 128, 63 & r3 | 128);
          }
        }
        return i2;
      }
      function G(e3) {
        return s2.toByteArray(function(e4) {
          if ((e4 = (e4 = e4.split("=")[0]).trim().replace(z, "")).length < 2)
            return "";
          for (; e4.length % 4 != 0; )
            e4 += "=";
          return e4;
        }(e3));
      }
      function H(e3, t3, r3, s3) {
        let n2;
        for (n2 = 0; n2 < s3 && !(n2 + r3 >= t3.length || n2 >= e3.length); ++n2)
          t3[n2 + r3] = e3[n2];
        return n2;
      }
      function Y(e3, t3) {
        return e3 instanceof t3 || null != e3 && null != e3.constructor && null != e3.constructor.name && e3.constructor.name === t3.name;
      }
      function J(e3) {
        return e3 != e3;
      }
      const X = function() {
        const e3 = "0123456789abcdef", t3 = new Array(256);
        for (let r3 = 0; r3 < 16; ++r3) {
          const s3 = 16 * r3;
          for (let n2 = 0; n2 < 16; ++n2)
            t3[s3 + n2] = e3[r3] + e3[n2];
        }
        return t3;
      }();
      function Z(e3) {
        return "undefined" == typeof BigInt ? Q : e3;
      }
      function Q() {
        throw new Error("BigInt not supported");
      }
    }, 297: (e2, t2, r2) => {
      var s2 = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== r2.g && r2.g, n = function() {
        function e3() {
          this.fetch = false, this.DOMException = s2.DOMException;
        }
        return e3.prototype = s2, new e3();
      }();
      !function(e3) {
        !function(t3) {
          var r3 = void 0 !== e3 && e3 || "undefined" != typeof self && self || void 0 !== r3 && r3, s3 = { searchParams: "URLSearchParams" in r3, iterable: "Symbol" in r3 && "iterator" in Symbol, blob: "FileReader" in r3 && "Blob" in r3 && function() {
            try {
              return new Blob(), true;
            } catch (e4) {
              return false;
            }
          }(), formData: "FormData" in r3, arrayBuffer: "ArrayBuffer" in r3 };
          if (s3.arrayBuffer)
            var n2 = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], i2 = ArrayBuffer.isView || function(e4) {
              return e4 && n2.indexOf(Object.prototype.toString.call(e4)) > -1;
            };
          function o(e4) {
            if ("string" != typeof e4 && (e4 = String(e4)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e4) || "" === e4)
              throw new TypeError('Invalid character in header field name: "' + e4 + '"');
            return e4.toLowerCase();
          }
          function a(e4) {
            return "string" != typeof e4 && (e4 = String(e4)), e4;
          }
          function c(e4) {
            var t4 = { next: function() {
              var t5 = e4.shift();
              return { done: void 0 === t5, value: t5 };
            } };
            return s3.iterable && (t4[Symbol.iterator] = function() {
              return t4;
            }), t4;
          }
          function u(e4) {
            this.map = {}, e4 instanceof u ? e4.forEach(function(e5, t4) {
              this.append(t4, e5);
            }, this) : Array.isArray(e4) ? e4.forEach(function(e5) {
              this.append(e5[0], e5[1]);
            }, this) : e4 && Object.getOwnPropertyNames(e4).forEach(function(t4) {
              this.append(t4, e4[t4]);
            }, this);
          }
          function l(e4) {
            if (e4.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            e4.bodyUsed = true;
          }
          function h(e4) {
            return new Promise(function(t4, r4) {
              e4.onload = function() {
                t4(e4.result);
              }, e4.onerror = function() {
                r4(e4.error);
              };
            });
          }
          function d(e4) {
            var t4 = new FileReader(), r4 = h(t4);
            return t4.readAsArrayBuffer(e4), r4;
          }
          function p(e4) {
            if (e4.slice)
              return e4.slice(0);
            var t4 = new Uint8Array(e4.byteLength);
            return t4.set(new Uint8Array(e4)), t4.buffer;
          }
          function f() {
            return this.bodyUsed = false, this._initBody = function(e4) {
              var t4;
              this.bodyUsed = this.bodyUsed, this._bodyInit = e4, e4 ? "string" == typeof e4 ? this._bodyText = e4 : s3.blob && Blob.prototype.isPrototypeOf(e4) ? this._bodyBlob = e4 : s3.formData && FormData.prototype.isPrototypeOf(e4) ? this._bodyFormData = e4 : s3.searchParams && URLSearchParams.prototype.isPrototypeOf(e4) ? this._bodyText = e4.toString() : s3.arrayBuffer && s3.blob && (t4 = e4) && DataView.prototype.isPrototypeOf(t4) ? (this._bodyArrayBuffer = p(e4.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s3.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e4) || i2(e4)) ? this._bodyArrayBuffer = p(e4) : this._bodyText = e4 = Object.prototype.toString.call(e4) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e4 ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : s3.searchParams && URLSearchParams.prototype.isPrototypeOf(e4) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
            }, s3.blob && (this.blob = function() {
              var e4 = l(this);
              if (e4)
                return e4;
              if (this._bodyBlob)
                return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }, this.arrayBuffer = function() {
              return this._bodyArrayBuffer ? l(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(d);
            }), this.text = function() {
              var e4, t4, r4, s4 = l(this);
              if (s4)
                return s4;
              if (this._bodyBlob)
                return e4 = this._bodyBlob, r4 = h(t4 = new FileReader()), t4.readAsText(e4), r4;
              if (this._bodyArrayBuffer)
                return Promise.resolve(function(e5) {
                  for (var t5 = new Uint8Array(e5), r5 = new Array(t5.length), s5 = 0; s5 < t5.length; s5++)
                    r5[s5] = String.fromCharCode(t5[s5]);
                  return r5.join("");
                }(this._bodyArrayBuffer));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText);
            }, s3.formData && (this.formData = function() {
              return this.text().then(y);
            }), this.json = function() {
              return this.text().then(JSON.parse);
            }, this;
          }
          u.prototype.append = function(e4, t4) {
            e4 = o(e4), t4 = a(t4);
            var r4 = this.map[e4];
            this.map[e4] = r4 ? r4 + ", " + t4 : t4;
          }, u.prototype.delete = function(e4) {
            delete this.map[o(e4)];
          }, u.prototype.get = function(e4) {
            return e4 = o(e4), this.has(e4) ? this.map[e4] : null;
          }, u.prototype.has = function(e4) {
            return this.map.hasOwnProperty(o(e4));
          }, u.prototype.set = function(e4, t4) {
            this.map[o(e4)] = a(t4);
          }, u.prototype.forEach = function(e4, t4) {
            for (var r4 in this.map)
              this.map.hasOwnProperty(r4) && e4.call(t4, this.map[r4], r4, this);
          }, u.prototype.keys = function() {
            var e4 = [];
            return this.forEach(function(t4, r4) {
              e4.push(r4);
            }), c(e4);
          }, u.prototype.values = function() {
            var e4 = [];
            return this.forEach(function(t4) {
              e4.push(t4);
            }), c(e4);
          }, u.prototype.entries = function() {
            var e4 = [];
            return this.forEach(function(t4, r4) {
              e4.push([r4, t4]);
            }), c(e4);
          }, s3.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
          var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function m(e4, t4) {
            if (!(this instanceof m))
              throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var r4, s4, n3 = (t4 = t4 || {}).body;
            if (e4 instanceof m) {
              if (e4.bodyUsed)
                throw new TypeError("Already read");
              this.url = e4.url, this.credentials = e4.credentials, t4.headers || (this.headers = new u(e4.headers)), this.method = e4.method, this.mode = e4.mode, this.signal = e4.signal, n3 || null == e4._bodyInit || (n3 = e4._bodyInit, e4.bodyUsed = true);
            } else
              this.url = String(e4);
            if (this.credentials = t4.credentials || this.credentials || "same-origin", !t4.headers && this.headers || (this.headers = new u(t4.headers)), this.method = (s4 = (r4 = t4.method || this.method || "GET").toUpperCase(), g.indexOf(s4) > -1 ? s4 : r4), this.mode = t4.mode || this.mode || null, this.signal = t4.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n3)
              throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(n3), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t4.cache && "no-cache" !== t4.cache)) {
              var i3 = /([?&])_=[^&]*/;
              i3.test(this.url) ? this.url = this.url.replace(i3, "$1_=" + (/* @__PURE__ */ new Date()).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
            }
          }
          function y(e4) {
            var t4 = new FormData();
            return e4.trim().split("&").forEach(function(e5) {
              if (e5) {
                var r4 = e5.split("="), s4 = r4.shift().replace(/\+/g, " "), n3 = r4.join("=").replace(/\+/g, " ");
                t4.append(decodeURIComponent(s4), decodeURIComponent(n3));
              }
            }), t4;
          }
          function w(e4, t4) {
            if (!(this instanceof w))
              throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            t4 || (t4 = {}), this.type = "default", this.status = void 0 === t4.status ? 200 : t4.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t4.statusText ? "" : "" + t4.statusText, this.headers = new u(t4.headers), this.url = t4.url || "", this._initBody(e4);
          }
          m.prototype.clone = function() {
            return new m(this, { body: this._bodyInit });
          }, f.call(m.prototype), f.call(w.prototype), w.prototype.clone = function() {
            return new w(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new u(this.headers), url: this.url });
          }, w.error = function() {
            var e4 = new w(null, { status: 0, statusText: "" });
            return e4.type = "error", e4;
          };
          var b = [301, 302, 303, 307, 308];
          w.redirect = function(e4, t4) {
            if (-1 === b.indexOf(t4))
              throw new RangeError("Invalid status code");
            return new w(null, { status: t4, headers: { location: e4 } });
          }, t3.DOMException = r3.DOMException;
          try {
            new t3.DOMException();
          } catch (e4) {
            t3.DOMException = function(e5, t4) {
              this.message = e5, this.name = t4;
              var r4 = Error(e5);
              this.stack = r4.stack;
            }, t3.DOMException.prototype = Object.create(Error.prototype), t3.DOMException.prototype.constructor = t3.DOMException;
          }
          function v(e4, n3) {
            return new Promise(function(i3, o2) {
              var c2 = new m(e4, n3);
              if (c2.signal && c2.signal.aborted)
                return o2(new t3.DOMException("Aborted", "AbortError"));
              var l2 = new XMLHttpRequest();
              function h2() {
                l2.abort();
              }
              l2.onload = function() {
                var e5, t4, r4 = { status: l2.status, statusText: l2.statusText, headers: (e5 = l2.getAllResponseHeaders() || "", t4 = new u(), e5.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(e6) {
                  return 0 === e6.indexOf("\n") ? e6.substr(1, e6.length) : e6;
                }).forEach(function(e6) {
                  var r5 = e6.split(":"), s5 = r5.shift().trim();
                  if (s5) {
                    var n4 = r5.join(":").trim();
                    t4.append(s5, n4);
                  }
                }), t4) };
                r4.url = "responseURL" in l2 ? l2.responseURL : r4.headers.get("X-Request-URL");
                var s4 = "response" in l2 ? l2.response : l2.responseText;
                setTimeout(function() {
                  i3(new w(s4, r4));
                }, 0);
              }, l2.onerror = function() {
                setTimeout(function() {
                  o2(new TypeError("Network request failed"));
                }, 0);
              }, l2.ontimeout = function() {
                setTimeout(function() {
                  o2(new TypeError("Network request failed"));
                }, 0);
              }, l2.onabort = function() {
                setTimeout(function() {
                  o2(new t3.DOMException("Aborted", "AbortError"));
                }, 0);
              }, l2.open(c2.method, function(e5) {
                try {
                  return "" === e5 && r3.location.href ? r3.location.href : e5;
                } catch (t4) {
                  return e5;
                }
              }(c2.url), true), "include" === c2.credentials ? l2.withCredentials = true : "omit" === c2.credentials && (l2.withCredentials = false), "responseType" in l2 && (s3.blob ? l2.responseType = "blob" : s3.arrayBuffer && c2.headers.get("Content-Type") && -1 !== c2.headers.get("Content-Type").indexOf("application/octet-stream") && (l2.responseType = "arraybuffer")), !n3 || "object" != typeof n3.headers || n3.headers instanceof u ? c2.headers.forEach(function(e5, t4) {
                l2.setRequestHeader(t4, e5);
              }) : Object.getOwnPropertyNames(n3.headers).forEach(function(e5) {
                l2.setRequestHeader(e5, a(n3.headers[e5]));
              }), c2.signal && (c2.signal.addEventListener("abort", h2), l2.onreadystatechange = function() {
                4 === l2.readyState && c2.signal.removeEventListener("abort", h2);
              }), l2.send(void 0 === c2._bodyInit ? null : c2._bodyInit);
            });
          }
          v.polyfill = true, r3.fetch || (r3.fetch = v, r3.Headers = u, r3.Request = m, r3.Response = w), t3.Headers = u, t3.Request = m, t3.Response = w, t3.fetch = v;
        }({});
      }(n), n.fetch.ponyfill = true, delete n.fetch.polyfill;
      var i = s2.fetch ? s2 : n;
      (t2 = i.fetch).default = i.fetch, t2.fetch = i.fetch, t2.Headers = i.Headers, t2.Request = i.Request, t2.Response = i.Response, e2.exports = t2;
    }, 267: (e2, t2, r2) => {
      var s2;
      !function() {
        var t3 = "object" == typeof window ? window : {};
        !t3.HI_BASE32_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node && (t3 = r2.g);
        var n = !t3.HI_BASE32_NO_COMMON_JS && e2.exports, i = r2.amdO, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split(""), a = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25, 2: 26, 3: 27, 4: 28, 5: 29, 6: 30, 7: 31 }, c = [0, 0, 0, 0, 0, 0, 0, 0], u = function(e3, t4) {
          t4.length > 10 && (t4 = "..." + t4.substr(-10));
          var r3 = new Error("Decoded data is not valid UTF-8. Maybe try base32.decode.asBytes()? Partial data after reading " + e3 + " bytes: " + t4 + " <-");
          throw r3.position = e3, r3;
        }, l = function(e3) {
          if ("" === e3)
            return [];
          if (!/^[A-Z2-7=]+$/.test(e3))
            throw new Error("Invalid base32 characters");
          for (var t4, r3, s3, n2, i2, o2, c2, u2, l2 = [], h2 = 0, d2 = (e3 = e3.replace(/=/g, "")).length, p = 0, f = d2 >> 3 << 3; p < f; )
            t4 = a[e3.charAt(p++)], r3 = a[e3.charAt(p++)], s3 = a[e3.charAt(p++)], n2 = a[e3.charAt(p++)], i2 = a[e3.charAt(p++)], o2 = a[e3.charAt(p++)], c2 = a[e3.charAt(p++)], u2 = a[e3.charAt(p++)], l2[h2++] = 255 & (t4 << 3 | r3 >>> 2), l2[h2++] = 255 & (r3 << 6 | s3 << 1 | n2 >>> 4), l2[h2++] = 255 & (n2 << 4 | i2 >>> 1), l2[h2++] = 255 & (i2 << 7 | o2 << 2 | c2 >>> 3), l2[h2++] = 255 & (c2 << 5 | u2);
          var g = d2 - f;
          return 2 === g ? (t4 = a[e3.charAt(p++)], r3 = a[e3.charAt(p++)], l2[h2++] = 255 & (t4 << 3 | r3 >>> 2)) : 4 === g ? (t4 = a[e3.charAt(p++)], r3 = a[e3.charAt(p++)], s3 = a[e3.charAt(p++)], n2 = a[e3.charAt(p++)], l2[h2++] = 255 & (t4 << 3 | r3 >>> 2), l2[h2++] = 255 & (r3 << 6 | s3 << 1 | n2 >>> 4)) : 5 === g ? (t4 = a[e3.charAt(p++)], r3 = a[e3.charAt(p++)], s3 = a[e3.charAt(p++)], n2 = a[e3.charAt(p++)], i2 = a[e3.charAt(p++)], l2[h2++] = 255 & (t4 << 3 | r3 >>> 2), l2[h2++] = 255 & (r3 << 6 | s3 << 1 | n2 >>> 4), l2[h2++] = 255 & (n2 << 4 | i2 >>> 1)) : 7 === g && (t4 = a[e3.charAt(p++)], r3 = a[e3.charAt(p++)], s3 = a[e3.charAt(p++)], n2 = a[e3.charAt(p++)], i2 = a[e3.charAt(p++)], o2 = a[e3.charAt(p++)], c2 = a[e3.charAt(p++)], l2[h2++] = 255 & (t4 << 3 | r3 >>> 2), l2[h2++] = 255 & (r3 << 6 | s3 << 1 | n2 >>> 4), l2[h2++] = 255 & (n2 << 4 | i2 >>> 1), l2[h2++] = 255 & (i2 << 7 | o2 << 2 | c2 >>> 3)), l2;
        }, h = function(e3, t4) {
          if (!t4)
            return function(e4) {
              for (var t5, r4, s4 = "", n3 = e4.length, i3 = 0, o3 = 0; i3 < n3; )
                if ((t5 = e4[i3++]) <= 127)
                  s4 += String.fromCharCode(t5);
                else {
                  t5 > 191 && t5 <= 223 ? (r4 = 31 & t5, o3 = 1) : t5 <= 239 ? (r4 = 15 & t5, o3 = 2) : t5 <= 247 ? (r4 = 7 & t5, o3 = 3) : u(i3, s4);
                  for (var a2 = 0; a2 < o3; ++a2)
                    ((t5 = e4[i3++]) < 128 || t5 > 191) && u(i3, s4), r4 <<= 6, r4 += 63 & t5;
                  r4 >= 55296 && r4 <= 57343 && u(i3, s4), r4 > 1114111 && u(i3, s4), r4 <= 65535 ? s4 += String.fromCharCode(r4) : (r4 -= 65536, s4 += String.fromCharCode(55296 + (r4 >> 10)), s4 += String.fromCharCode(56320 + (1023 & r4)));
                }
              return s4;
            }(l(e3));
          if ("" === e3)
            return "";
          if (!/^[A-Z2-7=]+$/.test(e3))
            throw new Error("Invalid base32 characters");
          var r3, s3, n2, i2, o2, c2, h2, d2, p = "", f = e3.indexOf("=");
          -1 === f && (f = e3.length);
          for (var g = 0, m = f >> 3 << 3; g < m; )
            r3 = a[e3.charAt(g++)], s3 = a[e3.charAt(g++)], n2 = a[e3.charAt(g++)], i2 = a[e3.charAt(g++)], o2 = a[e3.charAt(g++)], c2 = a[e3.charAt(g++)], h2 = a[e3.charAt(g++)], d2 = a[e3.charAt(g++)], p += String.fromCharCode(255 & (r3 << 3 | s3 >>> 2)) + String.fromCharCode(255 & (s3 << 6 | n2 << 1 | i2 >>> 4)) + String.fromCharCode(255 & (i2 << 4 | o2 >>> 1)) + String.fromCharCode(255 & (o2 << 7 | c2 << 2 | h2 >>> 3)) + String.fromCharCode(255 & (h2 << 5 | d2));
          var y = f - m;
          return 2 === y ? (r3 = a[e3.charAt(g++)], s3 = a[e3.charAt(g++)], p += String.fromCharCode(255 & (r3 << 3 | s3 >>> 2))) : 4 === y ? (r3 = a[e3.charAt(g++)], s3 = a[e3.charAt(g++)], n2 = a[e3.charAt(g++)], i2 = a[e3.charAt(g++)], p += String.fromCharCode(255 & (r3 << 3 | s3 >>> 2)) + String.fromCharCode(255 & (s3 << 6 | n2 << 1 | i2 >>> 4))) : 5 === y ? (r3 = a[e3.charAt(g++)], s3 = a[e3.charAt(g++)], n2 = a[e3.charAt(g++)], i2 = a[e3.charAt(g++)], o2 = a[e3.charAt(g++)], p += String.fromCharCode(255 & (r3 << 3 | s3 >>> 2)) + String.fromCharCode(255 & (s3 << 6 | n2 << 1 | i2 >>> 4)) + String.fromCharCode(255 & (i2 << 4 | o2 >>> 1))) : 7 === y && (r3 = a[e3.charAt(g++)], s3 = a[e3.charAt(g++)], n2 = a[e3.charAt(g++)], i2 = a[e3.charAt(g++)], o2 = a[e3.charAt(g++)], c2 = a[e3.charAt(g++)], h2 = a[e3.charAt(g++)], p += String.fromCharCode(255 & (r3 << 3 | s3 >>> 2)) + String.fromCharCode(255 & (s3 << 6 | n2 << 1 | i2 >>> 4)) + String.fromCharCode(255 & (i2 << 4 | o2 >>> 1)) + String.fromCharCode(255 & (o2 << 7 | c2 << 2 | h2 >>> 3))), p;
        }, d = { encode: function(e3, t4) {
          var r3 = "string" != typeof e3;
          return r3 && e3.constructor === ArrayBuffer && (e3 = new Uint8Array(e3)), r3 ? function(e4) {
            for (var t5, r4, s3, n2, i2, a2 = "", c2 = e4.length, u2 = 0, l2 = 5 * parseInt(c2 / 5); u2 < l2; )
              t5 = e4[u2++], r4 = e4[u2++], s3 = e4[u2++], n2 = e4[u2++], i2 = e4[u2++], a2 += o[t5 >>> 3] + o[31 & (t5 << 2 | r4 >>> 6)] + o[r4 >>> 1 & 31] + o[31 & (r4 << 4 | s3 >>> 4)] + o[31 & (s3 << 1 | n2 >>> 7)] + o[n2 >>> 2 & 31] + o[31 & (n2 << 3 | i2 >>> 5)] + o[31 & i2];
            var h2 = c2 - l2;
            return 1 === h2 ? (t5 = e4[u2], a2 += o[t5 >>> 3] + o[t5 << 2 & 31] + "======") : 2 === h2 ? (t5 = e4[u2++], r4 = e4[u2], a2 += o[t5 >>> 3] + o[31 & (t5 << 2 | r4 >>> 6)] + o[r4 >>> 1 & 31] + o[r4 << 4 & 31] + "====") : 3 === h2 ? (t5 = e4[u2++], r4 = e4[u2++], s3 = e4[u2], a2 += o[t5 >>> 3] + o[31 & (t5 << 2 | r4 >>> 6)] + o[r4 >>> 1 & 31] + o[31 & (r4 << 4 | s3 >>> 4)] + o[s3 << 1 & 31] + "===") : 4 === h2 && (t5 = e4[u2++], r4 = e4[u2++], s3 = e4[u2++], n2 = e4[u2], a2 += o[t5 >>> 3] + o[31 & (t5 << 2 | r4 >>> 6)] + o[r4 >>> 1 & 31] + o[31 & (r4 << 4 | s3 >>> 4)] + o[31 & (s3 << 1 | n2 >>> 7)] + o[n2 >>> 2 & 31] + o[n2 << 3 & 31] + "="), a2;
          }(e3) : t4 ? function(e4) {
            for (var t5, r4, s3, n2, i2, a2 = "", c2 = e4.length, u2 = 0, l2 = 5 * parseInt(c2 / 5); u2 < l2; )
              t5 = e4.charCodeAt(u2++), r4 = e4.charCodeAt(u2++), s3 = e4.charCodeAt(u2++), n2 = e4.charCodeAt(u2++), i2 = e4.charCodeAt(u2++), a2 += o[t5 >>> 3] + o[31 & (t5 << 2 | r4 >>> 6)] + o[r4 >>> 1 & 31] + o[31 & (r4 << 4 | s3 >>> 4)] + o[31 & (s3 << 1 | n2 >>> 7)] + o[n2 >>> 2 & 31] + o[31 & (n2 << 3 | i2 >>> 5)] + o[31 & i2];
            var h2 = c2 - l2;
            return 1 === h2 ? (t5 = e4.charCodeAt(u2), a2 += o[t5 >>> 3] + o[t5 << 2 & 31] + "======") : 2 === h2 ? (t5 = e4.charCodeAt(u2++), r4 = e4.charCodeAt(u2), a2 += o[t5 >>> 3] + o[31 & (t5 << 2 | r4 >>> 6)] + o[r4 >>> 1 & 31] + o[r4 << 4 & 31] + "====") : 3 === h2 ? (t5 = e4.charCodeAt(u2++), r4 = e4.charCodeAt(u2++), s3 = e4.charCodeAt(u2), a2 += o[t5 >>> 3] + o[31 & (t5 << 2 | r4 >>> 6)] + o[r4 >>> 1 & 31] + o[31 & (r4 << 4 | s3 >>> 4)] + o[s3 << 1 & 31] + "===") : 4 === h2 && (t5 = e4.charCodeAt(u2++), r4 = e4.charCodeAt(u2++), s3 = e4.charCodeAt(u2++), n2 = e4.charCodeAt(u2), a2 += o[t5 >>> 3] + o[31 & (t5 << 2 | r4 >>> 6)] + o[r4 >>> 1 & 31] + o[31 & (r4 << 4 | s3 >>> 4)] + o[31 & (s3 << 1 | n2 >>> 7)] + o[n2 >>> 2 & 31] + o[n2 << 3 & 31] + "="), a2;
          }(e3) : function(e4) {
            var t5, r4, s3, n2, i2, a2, u2, l2 = false, h2 = "", d2 = 0, p = 0, f = e4.length;
            if ("" === e4)
              return h2;
            do {
              for (c[0] = c[5], c[1] = c[6], c[2] = c[7], u2 = p; d2 < f && u2 < 5; ++d2)
                (a2 = e4.charCodeAt(d2)) < 128 ? c[u2++] = a2 : a2 < 2048 ? (c[u2++] = 192 | a2 >> 6, c[u2++] = 128 | 63 & a2) : a2 < 55296 || a2 >= 57344 ? (c[u2++] = 224 | a2 >> 12, c[u2++] = 128 | a2 >> 6 & 63, c[u2++] = 128 | 63 & a2) : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & e4.charCodeAt(++d2)), c[u2++] = 240 | a2 >> 18, c[u2++] = 128 | a2 >> 12 & 63, c[u2++] = 128 | a2 >> 6 & 63, c[u2++] = 128 | 63 & a2);
              p = u2 - 5, d2 === f && ++d2, d2 > f && u2 < 6 && (l2 = true), t5 = c[0], u2 > 4 ? (r4 = c[1], s3 = c[2], n2 = c[3], i2 = c[4], h2 += o[t5 >>> 3] + o[31 & (t5 << 2 | r4 >>> 6)] + o[r4 >>> 1 & 31] + o[31 & (r4 << 4 | s3 >>> 4)] + o[31 & (s3 << 1 | n2 >>> 7)] + o[n2 >>> 2 & 31] + o[31 & (n2 << 3 | i2 >>> 5)] + o[31 & i2]) : 1 === u2 ? h2 += o[t5 >>> 3] + o[t5 << 2 & 31] + "======" : 2 === u2 ? (r4 = c[1], h2 += o[t5 >>> 3] + o[31 & (t5 << 2 | r4 >>> 6)] + o[r4 >>> 1 & 31] + o[r4 << 4 & 31] + "====") : 3 === u2 ? (r4 = c[1], s3 = c[2], h2 += o[t5 >>> 3] + o[31 & (t5 << 2 | r4 >>> 6)] + o[r4 >>> 1 & 31] + o[31 & (r4 << 4 | s3 >>> 4)] + o[s3 << 1 & 31] + "===") : (r4 = c[1], s3 = c[2], n2 = c[3], h2 += o[t5 >>> 3] + o[31 & (t5 << 2 | r4 >>> 6)] + o[r4 >>> 1 & 31] + o[31 & (r4 << 4 | s3 >>> 4)] + o[31 & (s3 << 1 | n2 >>> 7)] + o[n2 >>> 2 & 31] + o[n2 << 3 & 31] + "=");
            } while (!l2);
            return h2;
          }(e3);
        }, decode: h };
        h.asBytes = l, n ? e2.exports = d : (t3.base32 = d, i && (void 0 === (s2 = (function() {
          return d;
        }).call(d, r2, d, e2)) || (e2.exports = s2)));
      }();
    }, 525: (e2, t2) => {
      t2.read = function(e3, t3, r2, s2, n) {
        var i, o, a = 8 * n - s2 - 1, c = (1 << a) - 1, u = c >> 1, l = -7, h = r2 ? n - 1 : 0, d = r2 ? -1 : 1, p = e3[t3 + h];
        for (h += d, i = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; i = 256 * i + e3[t3 + h], h += d, l -= 8)
          ;
        for (o = i & (1 << -l) - 1, i >>= -l, l += s2; l > 0; o = 256 * o + e3[t3 + h], h += d, l -= 8)
          ;
        if (0 === i)
          i = 1 - u;
        else {
          if (i === c)
            return o ? NaN : 1 / 0 * (p ? -1 : 1);
          o += Math.pow(2, s2), i -= u;
        }
        return (p ? -1 : 1) * o * Math.pow(2, i - s2);
      }, t2.write = function(e3, t3, r2, s2, n, i) {
        var o, a, c, u = 8 * i - n - 1, l = (1 << u) - 1, h = l >> 1, d = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = s2 ? 0 : i - 1, f = s2 ? 1 : -1, g = t3 < 0 || 0 === t3 && 1 / t3 < 0 ? 1 : 0;
        for (t3 = Math.abs(t3), isNaN(t3) || t3 === 1 / 0 ? (a = isNaN(t3) ? 1 : 0, o = l) : (o = Math.floor(Math.log(t3) / Math.LN2), t3 * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), (t3 += o + h >= 1 ? d / c : d * Math.pow(2, 1 - h)) * c >= 2 && (o++, c /= 2), o + h >= l ? (a = 0, o = l) : o + h >= 1 ? (a = (t3 * c - 1) * Math.pow(2, n), o += h) : (a = t3 * Math.pow(2, h - 1) * Math.pow(2, n), o = 0)); n >= 8; e3[r2 + p] = 255 & a, p += f, a /= 256, n -= 8)
          ;
        for (o = o << n | a, u += n; u > 0; e3[r2 + p] = 255 & o, p += f, o /= 256, u -= 8)
          ;
        e3[r2 + p - f] |= 128 * g;
      };
    }, 757: (e2, t2, r2) => {
      var s2;
      !function() {
        var t3 = "input is invalid type", n = "object" == typeof window, i = n ? window : {};
        i.JS_SHA512_NO_WINDOW && (n = false);
        var o = !n && "object" == typeof self;
        !i.JS_SHA512_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? i = r2.g : o && (i = self);
        var a = !i.JS_SHA512_NO_COMMON_JS && e2.exports, c = r2.amdO, u = !i.JS_SHA512_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, l = "0123456789abcdef".split(""), h = [-2147483648, 8388608, 32768, 128], d = [24, 16, 8, 0], p = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591], f = ["hex", "array", "digest", "arrayBuffer"], g = [];
        !i.JS_SHA512_NO_NODE_JS && Array.isArray || (Array.isArray = function(e3) {
          return "[object Array]" === Object.prototype.toString.call(e3);
        }), !u || !i.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e3) {
          return "object" == typeof e3 && e3.buffer && e3.buffer.constructor === ArrayBuffer;
        });
        var m = function(e3, t4) {
          return function(r3) {
            return new v(t4, true).update(r3)[e3]();
          };
        }, y = function(e3) {
          var t4 = m("hex", e3);
          t4.create = function() {
            return new v(e3);
          }, t4.update = function(e4) {
            return t4.create().update(e4);
          };
          for (var r3 = 0; r3 < f.length; ++r3) {
            var s3 = f[r3];
            t4[s3] = m(s3, e3);
          }
          return t4;
        }, w = function(e3, t4) {
          return function(r3, s3) {
            return new x(r3, t4, true).update(s3)[e3]();
          };
        }, b = function(e3) {
          var t4 = w("hex", e3);
          t4.create = function(t5) {
            return new x(t5, e3);
          }, t4.update = function(e4, r4) {
            return t4.create(e4).update(r4);
          };
          for (var r3 = 0; r3 < f.length; ++r3) {
            var s3 = f[r3];
            t4[s3] = w(s3, e3);
          }
          return t4;
        };
        function v(e3, t4) {
          t4 ? (g[0] = g[1] = g[2] = g[3] = g[4] = g[5] = g[6] = g[7] = g[8] = g[9] = g[10] = g[11] = g[12] = g[13] = g[14] = g[15] = g[16] = g[17] = g[18] = g[19] = g[20] = g[21] = g[22] = g[23] = g[24] = g[25] = g[26] = g[27] = g[28] = g[29] = g[30] = g[31] = g[32] = 0, this.blocks = g) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 384 == e3 ? (this.h0h = 3418070365, this.h0l = 3238371032, this.h1h = 1654270250, this.h1l = 914150663, this.h2h = 2438529370, this.h2l = 812702999, this.h3h = 355462360, this.h3l = 4144912697, this.h4h = 1731405415, this.h4l = 4290775857, this.h5h = 2394180231, this.h5l = 1750603025, this.h6h = 3675008525, this.h6l = 1694076839, this.h7h = 1203062813, this.h7l = 3204075428) : 256 == e3 ? (this.h0h = 573645204, this.h0l = 4230739756, this.h1h = 2673172387, this.h1l = 3360449730, this.h2h = 596883563, this.h2l = 1867755857, this.h3h = 2520282905, this.h3l = 1497426621, this.h4h = 2519219938, this.h4l = 2827943907, this.h5h = 3193839141, this.h5l = 1401305490, this.h6h = 721525244, this.h6l = 746961066, this.h7h = 246885852, this.h7l = 2177182882) : 224 == e3 ? (this.h0h = 2352822216, this.h0l = 424955298, this.h1h = 1944164710, this.h1l = 2312950998, this.h2h = 502970286, this.h2l = 855612546, this.h3h = 1738396948, this.h3l = 1479516111, this.h4h = 258812777, this.h4l = 2077511080, this.h5h = 2011393907, this.h5l = 79989058, this.h6h = 1067287976, this.h6l = 1780299464, this.h7h = 286451373, this.h7l = 2446758561) : (this.h0h = 1779033703, this.h0l = 4089235720, this.h1h = 3144134277, this.h1l = 2227873595, this.h2h = 1013904242, this.h2l = 4271175723, this.h3h = 2773480762, this.h3l = 1595750129, this.h4h = 1359893119, this.h4l = 2917565137, this.h5h = 2600822924, this.h5l = 725511199, this.h6h = 528734635, this.h6l = 4215389547, this.h7h = 1541459225, this.h7l = 327033209), this.bits = e3, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = false;
        }
        function x(e3, r3, s3) {
          var n2, i2 = typeof e3;
          if ("string" !== i2) {
            if ("object" !== i2)
              throw new Error(t3);
            if (null === e3)
              throw new Error(t3);
            if (u && e3.constructor === ArrayBuffer)
              e3 = new Uint8Array(e3);
            else if (!(Array.isArray(e3) || u && ArrayBuffer.isView(e3)))
              throw new Error(t3);
            n2 = true;
          }
          var o2 = e3.length;
          if (!n2) {
            for (var a2, c2 = [], l2 = (o2 = e3.length, 0), h2 = 0; h2 < o2; ++h2)
              (a2 = e3.charCodeAt(h2)) < 128 ? c2[l2++] = a2 : a2 < 2048 ? (c2[l2++] = 192 | a2 >> 6, c2[l2++] = 128 | 63 & a2) : a2 < 55296 || a2 >= 57344 ? (c2[l2++] = 224 | a2 >> 12, c2[l2++] = 128 | a2 >> 6 & 63, c2[l2++] = 128 | 63 & a2) : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & e3.charCodeAt(++h2)), c2[l2++] = 240 | a2 >> 18, c2[l2++] = 128 | a2 >> 12 & 63, c2[l2++] = 128 | a2 >> 6 & 63, c2[l2++] = 128 | 63 & a2);
            e3 = c2;
          }
          e3.length > 128 && (e3 = new v(r3, true).update(e3).array());
          var d2 = [], p2 = [];
          for (h2 = 0; h2 < 128; ++h2) {
            var f2 = e3[h2] || 0;
            d2[h2] = 92 ^ f2, p2[h2] = 54 ^ f2;
          }
          v.call(this, r3, s3), this.update(p2), this.oKeyPad = d2, this.inner = true, this.sharedMemory = s3;
        }
        v.prototype.update = function(e3) {
          if (this.finalized)
            throw new Error("finalize already called");
          var r3, s3 = typeof e3;
          if ("string" !== s3) {
            if ("object" !== s3)
              throw new Error(t3);
            if (null === e3)
              throw new Error(t3);
            if (u && e3.constructor === ArrayBuffer)
              e3 = new Uint8Array(e3);
            else if (!(Array.isArray(e3) || u && ArrayBuffer.isView(e3)))
              throw new Error(t3);
            r3 = true;
          }
          for (var n2, i2, o2 = 0, a2 = e3.length, c2 = this.blocks; o2 < a2; ) {
            if (this.hashed && (this.hashed = false, c2[0] = this.block, c2[1] = c2[2] = c2[3] = c2[4] = c2[5] = c2[6] = c2[7] = c2[8] = c2[9] = c2[10] = c2[11] = c2[12] = c2[13] = c2[14] = c2[15] = c2[16] = c2[17] = c2[18] = c2[19] = c2[20] = c2[21] = c2[22] = c2[23] = c2[24] = c2[25] = c2[26] = c2[27] = c2[28] = c2[29] = c2[30] = c2[31] = c2[32] = 0), r3)
              for (i2 = this.start; o2 < a2 && i2 < 128; ++o2)
                c2[i2 >> 2] |= e3[o2] << d[3 & i2++];
            else
              for (i2 = this.start; o2 < a2 && i2 < 128; ++o2)
                (n2 = e3.charCodeAt(o2)) < 128 ? c2[i2 >> 2] |= n2 << d[3 & i2++] : n2 < 2048 ? (c2[i2 >> 2] |= (192 | n2 >> 6) << d[3 & i2++], c2[i2 >> 2] |= (128 | 63 & n2) << d[3 & i2++]) : n2 < 55296 || n2 >= 57344 ? (c2[i2 >> 2] |= (224 | n2 >> 12) << d[3 & i2++], c2[i2 >> 2] |= (128 | n2 >> 6 & 63) << d[3 & i2++], c2[i2 >> 2] |= (128 | 63 & n2) << d[3 & i2++]) : (n2 = 65536 + ((1023 & n2) << 10 | 1023 & e3.charCodeAt(++o2)), c2[i2 >> 2] |= (240 | n2 >> 18) << d[3 & i2++], c2[i2 >> 2] |= (128 | n2 >> 12 & 63) << d[3 & i2++], c2[i2 >> 2] |= (128 | n2 >> 6 & 63) << d[3 & i2++], c2[i2 >> 2] |= (128 | 63 & n2) << d[3 & i2++]);
            this.lastByteIndex = i2, this.bytes += i2 - this.start, i2 >= 128 ? (this.block = c2[32], this.start = i2 - 128, this.hash(), this.hashed = true) : this.start = i2;
          }
          return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
        }, v.prototype.finalize = function() {
          if (!this.finalized) {
            this.finalized = true;
            var e3 = this.blocks, t4 = this.lastByteIndex;
            e3[32] = this.block, e3[t4 >> 2] |= h[3 & t4], this.block = e3[32], t4 >= 112 && (this.hashed || this.hash(), e3[0] = this.block, e3[1] = e3[2] = e3[3] = e3[4] = e3[5] = e3[6] = e3[7] = e3[8] = e3[9] = e3[10] = e3[11] = e3[12] = e3[13] = e3[14] = e3[15] = e3[16] = e3[17] = e3[18] = e3[19] = e3[20] = e3[21] = e3[22] = e3[23] = e3[24] = e3[25] = e3[26] = e3[27] = e3[28] = e3[29] = e3[30] = e3[31] = e3[32] = 0), e3[30] = this.hBytes << 3 | this.bytes >>> 29, e3[31] = this.bytes << 3, this.hash();
          }
        }, v.prototype.hash = function() {
          var e3, t4, r3, s3, n2, i2, o2, a2, c2, u2, l2, h2, d2, f2, g2, m2, y2, w2, b2, v2, x2, A2, _, E, T, S = this.h0h, R = this.h0l, k = this.h1h, I = this.h1l, B = this.h2h, U = this.h2l, P = this.h3h, j = this.h3l, q = this.h4h, D = this.h4l, $ = this.h5h, O = this.h5l, C = this.h6h, L = this.h6l, M = this.h7h, N = this.h7l, F = this.blocks;
          for (e3 = 32; e3 < 160; e3 += 2)
            t4 = ((v2 = F[e3 - 30]) >>> 1 | (x2 = F[e3 - 29]) << 31) ^ (v2 >>> 8 | x2 << 24) ^ v2 >>> 7, r3 = (x2 >>> 1 | v2 << 31) ^ (x2 >>> 8 | v2 << 24) ^ (x2 >>> 7 | v2 << 25), s3 = ((v2 = F[e3 - 4]) >>> 19 | (x2 = F[e3 - 3]) << 13) ^ (x2 >>> 29 | v2 << 3) ^ v2 >>> 6, n2 = (x2 >>> 19 | v2 << 13) ^ (v2 >>> 29 | x2 << 3) ^ (x2 >>> 6 | v2 << 26), v2 = F[e3 - 32], x2 = F[e3 - 31], c2 = ((A2 = F[e3 - 14]) >>> 16) + (v2 >>> 16) + (t4 >>> 16) + (s3 >>> 16) + ((a2 = (65535 & A2) + (65535 & v2) + (65535 & t4) + (65535 & s3) + ((o2 = ((_ = F[e3 - 13]) >>> 16) + (x2 >>> 16) + (r3 >>> 16) + (n2 >>> 16) + ((i2 = (65535 & _) + (65535 & x2) + (65535 & r3) + (65535 & n2)) >>> 16)) >>> 16)) >>> 16), F[e3] = c2 << 16 | 65535 & a2, F[e3 + 1] = o2 << 16 | 65535 & i2;
          var W = S, K = R, z = k, V = I, G = B, H = U, Y = P, J = j, X = q, Z = D, Q = $, ee = O, te = C, re = L, se = M, ne = N;
          for (m2 = z & G, y2 = V & H, e3 = 0; e3 < 160; e3 += 8)
            t4 = (W >>> 28 | K << 4) ^ (K >>> 2 | W << 30) ^ (K >>> 7 | W << 25), r3 = (K >>> 28 | W << 4) ^ (W >>> 2 | K << 30) ^ (W >>> 7 | K << 25), s3 = (X >>> 14 | Z << 18) ^ (X >>> 18 | Z << 14) ^ (Z >>> 9 | X << 23), n2 = (Z >>> 14 | X << 18) ^ (Z >>> 18 | X << 14) ^ (X >>> 9 | Z << 23), w2 = (u2 = W & z) ^ W & G ^ m2, b2 = (l2 = K & V) ^ K & H ^ y2, E = X & Q ^ ~X & te, T = Z & ee ^ ~Z & re, v2 = F[e3], x2 = F[e3 + 1], v2 = (c2 = ((A2 = p[e3]) >>> 16) + (v2 >>> 16) + (E >>> 16) + (s3 >>> 16) + (se >>> 16) + ((a2 = (65535 & A2) + (65535 & v2) + (65535 & E) + (65535 & s3) + (65535 & se) + ((o2 = ((_ = p[e3 + 1]) >>> 16) + (x2 >>> 16) + (T >>> 16) + (n2 >>> 16) + (ne >>> 16) + ((i2 = (65535 & _) + (65535 & x2) + (65535 & T) + (65535 & n2) + (65535 & ne)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, x2 = o2 << 16 | 65535 & i2, A2 = (c2 = (w2 >>> 16) + (t4 >>> 16) + ((a2 = (65535 & w2) + (65535 & t4) + ((o2 = (b2 >>> 16) + (r3 >>> 16) + ((i2 = (65535 & b2) + (65535 & r3)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, _ = o2 << 16 | 65535 & i2, se = (c2 = (Y >>> 16) + (v2 >>> 16) + ((a2 = (65535 & Y) + (65535 & v2) + ((o2 = (J >>> 16) + (x2 >>> 16) + ((i2 = (65535 & J) + (65535 & x2)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, ne = o2 << 16 | 65535 & i2, t4 = ((Y = (c2 = (A2 >>> 16) + (v2 >>> 16) + ((a2 = (65535 & A2) + (65535 & v2) + ((o2 = (_ >>> 16) + (x2 >>> 16) + ((i2 = (65535 & _) + (65535 & x2)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2) >>> 28 | (J = o2 << 16 | 65535 & i2) << 4) ^ (J >>> 2 | Y << 30) ^ (J >>> 7 | Y << 25), r3 = (J >>> 28 | Y << 4) ^ (Y >>> 2 | J << 30) ^ (Y >>> 7 | J << 25), s3 = (se >>> 14 | ne << 18) ^ (se >>> 18 | ne << 14) ^ (ne >>> 9 | se << 23), n2 = (ne >>> 14 | se << 18) ^ (ne >>> 18 | se << 14) ^ (se >>> 9 | ne << 23), w2 = (h2 = Y & W) ^ Y & z ^ u2, b2 = (d2 = J & K) ^ J & V ^ l2, E = se & X ^ ~se & Q, T = ne & Z ^ ~ne & ee, v2 = F[e3 + 2], x2 = F[e3 + 3], v2 = (c2 = ((A2 = p[e3 + 2]) >>> 16) + (v2 >>> 16) + (E >>> 16) + (s3 >>> 16) + (te >>> 16) + ((a2 = (65535 & A2) + (65535 & v2) + (65535 & E) + (65535 & s3) + (65535 & te) + ((o2 = ((_ = p[e3 + 3]) >>> 16) + (x2 >>> 16) + (T >>> 16) + (n2 >>> 16) + (re >>> 16) + ((i2 = (65535 & _) + (65535 & x2) + (65535 & T) + (65535 & n2) + (65535 & re)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, x2 = o2 << 16 | 65535 & i2, A2 = (c2 = (w2 >>> 16) + (t4 >>> 16) + ((a2 = (65535 & w2) + (65535 & t4) + ((o2 = (b2 >>> 16) + (r3 >>> 16) + ((i2 = (65535 & b2) + (65535 & r3)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, _ = o2 << 16 | 65535 & i2, te = (c2 = (G >>> 16) + (v2 >>> 16) + ((a2 = (65535 & G) + (65535 & v2) + ((o2 = (H >>> 16) + (x2 >>> 16) + ((i2 = (65535 & H) + (65535 & x2)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, re = o2 << 16 | 65535 & i2, t4 = ((G = (c2 = (A2 >>> 16) + (v2 >>> 16) + ((a2 = (65535 & A2) + (65535 & v2) + ((o2 = (_ >>> 16) + (x2 >>> 16) + ((i2 = (65535 & _) + (65535 & x2)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2) >>> 28 | (H = o2 << 16 | 65535 & i2) << 4) ^ (H >>> 2 | G << 30) ^ (H >>> 7 | G << 25), r3 = (H >>> 28 | G << 4) ^ (G >>> 2 | H << 30) ^ (G >>> 7 | H << 25), s3 = (te >>> 14 | re << 18) ^ (te >>> 18 | re << 14) ^ (re >>> 9 | te << 23), n2 = (re >>> 14 | te << 18) ^ (re >>> 18 | te << 14) ^ (te >>> 9 | re << 23), w2 = (f2 = G & Y) ^ G & W ^ h2, b2 = (g2 = H & J) ^ H & K ^ d2, E = te & se ^ ~te & X, T = re & ne ^ ~re & Z, v2 = F[e3 + 4], x2 = F[e3 + 5], v2 = (c2 = ((A2 = p[e3 + 4]) >>> 16) + (v2 >>> 16) + (E >>> 16) + (s3 >>> 16) + (Q >>> 16) + ((a2 = (65535 & A2) + (65535 & v2) + (65535 & E) + (65535 & s3) + (65535 & Q) + ((o2 = ((_ = p[e3 + 5]) >>> 16) + (x2 >>> 16) + (T >>> 16) + (n2 >>> 16) + (ee >>> 16) + ((i2 = (65535 & _) + (65535 & x2) + (65535 & T) + (65535 & n2) + (65535 & ee)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, x2 = o2 << 16 | 65535 & i2, A2 = (c2 = (w2 >>> 16) + (t4 >>> 16) + ((a2 = (65535 & w2) + (65535 & t4) + ((o2 = (b2 >>> 16) + (r3 >>> 16) + ((i2 = (65535 & b2) + (65535 & r3)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, _ = o2 << 16 | 65535 & i2, Q = (c2 = (z >>> 16) + (v2 >>> 16) + ((a2 = (65535 & z) + (65535 & v2) + ((o2 = (V >>> 16) + (x2 >>> 16) + ((i2 = (65535 & V) + (65535 & x2)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, ee = o2 << 16 | 65535 & i2, t4 = ((z = (c2 = (A2 >>> 16) + (v2 >>> 16) + ((a2 = (65535 & A2) + (65535 & v2) + ((o2 = (_ >>> 16) + (x2 >>> 16) + ((i2 = (65535 & _) + (65535 & x2)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2) >>> 28 | (V = o2 << 16 | 65535 & i2) << 4) ^ (V >>> 2 | z << 30) ^ (V >>> 7 | z << 25), r3 = (V >>> 28 | z << 4) ^ (z >>> 2 | V << 30) ^ (z >>> 7 | V << 25), s3 = (Q >>> 14 | ee << 18) ^ (Q >>> 18 | ee << 14) ^ (ee >>> 9 | Q << 23), n2 = (ee >>> 14 | Q << 18) ^ (ee >>> 18 | Q << 14) ^ (Q >>> 9 | ee << 23), w2 = (m2 = z & G) ^ z & Y ^ f2, b2 = (y2 = V & H) ^ V & J ^ g2, E = Q & te ^ ~Q & se, T = ee & re ^ ~ee & ne, v2 = F[e3 + 6], x2 = F[e3 + 7], v2 = (c2 = ((A2 = p[e3 + 6]) >>> 16) + (v2 >>> 16) + (E >>> 16) + (s3 >>> 16) + (X >>> 16) + ((a2 = (65535 & A2) + (65535 & v2) + (65535 & E) + (65535 & s3) + (65535 & X) + ((o2 = ((_ = p[e3 + 7]) >>> 16) + (x2 >>> 16) + (T >>> 16) + (n2 >>> 16) + (Z >>> 16) + ((i2 = (65535 & _) + (65535 & x2) + (65535 & T) + (65535 & n2) + (65535 & Z)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, x2 = o2 << 16 | 65535 & i2, A2 = (c2 = (w2 >>> 16) + (t4 >>> 16) + ((a2 = (65535 & w2) + (65535 & t4) + ((o2 = (b2 >>> 16) + (r3 >>> 16) + ((i2 = (65535 & b2) + (65535 & r3)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, _ = o2 << 16 | 65535 & i2, X = (c2 = (W >>> 16) + (v2 >>> 16) + ((a2 = (65535 & W) + (65535 & v2) + ((o2 = (K >>> 16) + (x2 >>> 16) + ((i2 = (65535 & K) + (65535 & x2)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, Z = o2 << 16 | 65535 & i2, W = (c2 = (A2 >>> 16) + (v2 >>> 16) + ((a2 = (65535 & A2) + (65535 & v2) + ((o2 = (_ >>> 16) + (x2 >>> 16) + ((i2 = (65535 & _) + (65535 & x2)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & a2, K = o2 << 16 | 65535 & i2;
          c2 = (S >>> 16) + (W >>> 16) + ((a2 = (65535 & S) + (65535 & W) + ((o2 = (R >>> 16) + (K >>> 16) + ((i2 = (65535 & R) + (65535 & K)) >>> 16)) >>> 16)) >>> 16), this.h0h = c2 << 16 | 65535 & a2, this.h0l = o2 << 16 | 65535 & i2, c2 = (k >>> 16) + (z >>> 16) + ((a2 = (65535 & k) + (65535 & z) + ((o2 = (I >>> 16) + (V >>> 16) + ((i2 = (65535 & I) + (65535 & V)) >>> 16)) >>> 16)) >>> 16), this.h1h = c2 << 16 | 65535 & a2, this.h1l = o2 << 16 | 65535 & i2, c2 = (B >>> 16) + (G >>> 16) + ((a2 = (65535 & B) + (65535 & G) + ((o2 = (U >>> 16) + (H >>> 16) + ((i2 = (65535 & U) + (65535 & H)) >>> 16)) >>> 16)) >>> 16), this.h2h = c2 << 16 | 65535 & a2, this.h2l = o2 << 16 | 65535 & i2, c2 = (P >>> 16) + (Y >>> 16) + ((a2 = (65535 & P) + (65535 & Y) + ((o2 = (j >>> 16) + (J >>> 16) + ((i2 = (65535 & j) + (65535 & J)) >>> 16)) >>> 16)) >>> 16), this.h3h = c2 << 16 | 65535 & a2, this.h3l = o2 << 16 | 65535 & i2, c2 = (q >>> 16) + (X >>> 16) + ((a2 = (65535 & q) + (65535 & X) + ((o2 = (D >>> 16) + (Z >>> 16) + ((i2 = (65535 & D) + (65535 & Z)) >>> 16)) >>> 16)) >>> 16), this.h4h = c2 << 16 | 65535 & a2, this.h4l = o2 << 16 | 65535 & i2, c2 = ($ >>> 16) + (Q >>> 16) + ((a2 = (65535 & $) + (65535 & Q) + ((o2 = (O >>> 16) + (ee >>> 16) + ((i2 = (65535 & O) + (65535 & ee)) >>> 16)) >>> 16)) >>> 16), this.h5h = c2 << 16 | 65535 & a2, this.h5l = o2 << 16 | 65535 & i2, c2 = (C >>> 16) + (te >>> 16) + ((a2 = (65535 & C) + (65535 & te) + ((o2 = (L >>> 16) + (re >>> 16) + ((i2 = (65535 & L) + (65535 & re)) >>> 16)) >>> 16)) >>> 16), this.h6h = c2 << 16 | 65535 & a2, this.h6l = o2 << 16 | 65535 & i2, c2 = (M >>> 16) + (se >>> 16) + ((a2 = (65535 & M) + (65535 & se) + ((o2 = (N >>> 16) + (ne >>> 16) + ((i2 = (65535 & N) + (65535 & ne)) >>> 16)) >>> 16)) >>> 16), this.h7h = c2 << 16 | 65535 & a2, this.h7l = o2 << 16 | 65535 & i2;
        }, v.prototype.hex = function() {
          this.finalize();
          var e3 = this.h0h, t4 = this.h0l, r3 = this.h1h, s3 = this.h1l, n2 = this.h2h, i2 = this.h2l, o2 = this.h3h, a2 = this.h3l, c2 = this.h4h, u2 = this.h4l, h2 = this.h5h, d2 = this.h5l, p2 = this.h6h, f2 = this.h6l, g2 = this.h7h, m2 = this.h7l, y2 = this.bits, w2 = l[e3 >> 28 & 15] + l[e3 >> 24 & 15] + l[e3 >> 20 & 15] + l[e3 >> 16 & 15] + l[e3 >> 12 & 15] + l[e3 >> 8 & 15] + l[e3 >> 4 & 15] + l[15 & e3] + l[t4 >> 28 & 15] + l[t4 >> 24 & 15] + l[t4 >> 20 & 15] + l[t4 >> 16 & 15] + l[t4 >> 12 & 15] + l[t4 >> 8 & 15] + l[t4 >> 4 & 15] + l[15 & t4] + l[r3 >> 28 & 15] + l[r3 >> 24 & 15] + l[r3 >> 20 & 15] + l[r3 >> 16 & 15] + l[r3 >> 12 & 15] + l[r3 >> 8 & 15] + l[r3 >> 4 & 15] + l[15 & r3] + l[s3 >> 28 & 15] + l[s3 >> 24 & 15] + l[s3 >> 20 & 15] + l[s3 >> 16 & 15] + l[s3 >> 12 & 15] + l[s3 >> 8 & 15] + l[s3 >> 4 & 15] + l[15 & s3] + l[n2 >> 28 & 15] + l[n2 >> 24 & 15] + l[n2 >> 20 & 15] + l[n2 >> 16 & 15] + l[n2 >> 12 & 15] + l[n2 >> 8 & 15] + l[n2 >> 4 & 15] + l[15 & n2] + l[i2 >> 28 & 15] + l[i2 >> 24 & 15] + l[i2 >> 20 & 15] + l[i2 >> 16 & 15] + l[i2 >> 12 & 15] + l[i2 >> 8 & 15] + l[i2 >> 4 & 15] + l[15 & i2] + l[o2 >> 28 & 15] + l[o2 >> 24 & 15] + l[o2 >> 20 & 15] + l[o2 >> 16 & 15] + l[o2 >> 12 & 15] + l[o2 >> 8 & 15] + l[o2 >> 4 & 15] + l[15 & o2];
          return y2 >= 256 && (w2 += l[a2 >> 28 & 15] + l[a2 >> 24 & 15] + l[a2 >> 20 & 15] + l[a2 >> 16 & 15] + l[a2 >> 12 & 15] + l[a2 >> 8 & 15] + l[a2 >> 4 & 15] + l[15 & a2]), y2 >= 384 && (w2 += l[c2 >> 28 & 15] + l[c2 >> 24 & 15] + l[c2 >> 20 & 15] + l[c2 >> 16 & 15] + l[c2 >> 12 & 15] + l[c2 >> 8 & 15] + l[c2 >> 4 & 15] + l[15 & c2] + l[u2 >> 28 & 15] + l[u2 >> 24 & 15] + l[u2 >> 20 & 15] + l[u2 >> 16 & 15] + l[u2 >> 12 & 15] + l[u2 >> 8 & 15] + l[u2 >> 4 & 15] + l[15 & u2] + l[h2 >> 28 & 15] + l[h2 >> 24 & 15] + l[h2 >> 20 & 15] + l[h2 >> 16 & 15] + l[h2 >> 12 & 15] + l[h2 >> 8 & 15] + l[h2 >> 4 & 15] + l[15 & h2] + l[d2 >> 28 & 15] + l[d2 >> 24 & 15] + l[d2 >> 20 & 15] + l[d2 >> 16 & 15] + l[d2 >> 12 & 15] + l[d2 >> 8 & 15] + l[d2 >> 4 & 15] + l[15 & d2]), 512 == y2 && (w2 += l[p2 >> 28 & 15] + l[p2 >> 24 & 15] + l[p2 >> 20 & 15] + l[p2 >> 16 & 15] + l[p2 >> 12 & 15] + l[p2 >> 8 & 15] + l[p2 >> 4 & 15] + l[15 & p2] + l[f2 >> 28 & 15] + l[f2 >> 24 & 15] + l[f2 >> 20 & 15] + l[f2 >> 16 & 15] + l[f2 >> 12 & 15] + l[f2 >> 8 & 15] + l[f2 >> 4 & 15] + l[15 & f2] + l[g2 >> 28 & 15] + l[g2 >> 24 & 15] + l[g2 >> 20 & 15] + l[g2 >> 16 & 15] + l[g2 >> 12 & 15] + l[g2 >> 8 & 15] + l[g2 >> 4 & 15] + l[15 & g2] + l[m2 >> 28 & 15] + l[m2 >> 24 & 15] + l[m2 >> 20 & 15] + l[m2 >> 16 & 15] + l[m2 >> 12 & 15] + l[m2 >> 8 & 15] + l[m2 >> 4 & 15] + l[15 & m2]), w2;
        }, v.prototype.toString = v.prototype.hex, v.prototype.digest = function() {
          this.finalize();
          var e3 = this.h0h, t4 = this.h0l, r3 = this.h1h, s3 = this.h1l, n2 = this.h2h, i2 = this.h2l, o2 = this.h3h, a2 = this.h3l, c2 = this.h4h, u2 = this.h4l, l2 = this.h5h, h2 = this.h5l, d2 = this.h6h, p2 = this.h6l, f2 = this.h7h, g2 = this.h7l, m2 = this.bits, y2 = [e3 >> 24 & 255, e3 >> 16 & 255, e3 >> 8 & 255, 255 & e3, t4 >> 24 & 255, t4 >> 16 & 255, t4 >> 8 & 255, 255 & t4, r3 >> 24 & 255, r3 >> 16 & 255, r3 >> 8 & 255, 255 & r3, s3 >> 24 & 255, s3 >> 16 & 255, s3 >> 8 & 255, 255 & s3, n2 >> 24 & 255, n2 >> 16 & 255, n2 >> 8 & 255, 255 & n2, i2 >> 24 & 255, i2 >> 16 & 255, i2 >> 8 & 255, 255 & i2, o2 >> 24 & 255, o2 >> 16 & 255, o2 >> 8 & 255, 255 & o2];
          return m2 >= 256 && y2.push(a2 >> 24 & 255, a2 >> 16 & 255, a2 >> 8 & 255, 255 & a2), m2 >= 384 && y2.push(c2 >> 24 & 255, c2 >> 16 & 255, c2 >> 8 & 255, 255 & c2, u2 >> 24 & 255, u2 >> 16 & 255, u2 >> 8 & 255, 255 & u2, l2 >> 24 & 255, l2 >> 16 & 255, l2 >> 8 & 255, 255 & l2, h2 >> 24 & 255, h2 >> 16 & 255, h2 >> 8 & 255, 255 & h2), 512 == m2 && y2.push(d2 >> 24 & 255, d2 >> 16 & 255, d2 >> 8 & 255, 255 & d2, p2 >> 24 & 255, p2 >> 16 & 255, p2 >> 8 & 255, 255 & p2, f2 >> 24 & 255, f2 >> 16 & 255, f2 >> 8 & 255, 255 & f2, g2 >> 24 & 255, g2 >> 16 & 255, g2 >> 8 & 255, 255 & g2), y2;
        }, v.prototype.array = v.prototype.digest, v.prototype.arrayBuffer = function() {
          this.finalize();
          var e3 = this.bits, t4 = new ArrayBuffer(e3 / 8), r3 = new DataView(t4);
          return r3.setUint32(0, this.h0h), r3.setUint32(4, this.h0l), r3.setUint32(8, this.h1h), r3.setUint32(12, this.h1l), r3.setUint32(16, this.h2h), r3.setUint32(20, this.h2l), r3.setUint32(24, this.h3h), e3 >= 256 && r3.setUint32(28, this.h3l), e3 >= 384 && (r3.setUint32(32, this.h4h), r3.setUint32(36, this.h4l), r3.setUint32(40, this.h5h), r3.setUint32(44, this.h5l)), 512 == e3 && (r3.setUint32(48, this.h6h), r3.setUint32(52, this.h6l), r3.setUint32(56, this.h7h), r3.setUint32(60, this.h7l)), t4;
        }, v.prototype.clone = function() {
          var e3 = new v(this.bits, false);
          return this.copyTo(e3), e3;
        }, v.prototype.copyTo = function(e3) {
          var t4 = 0, r3 = ["h0h", "h0l", "h1h", "h1l", "h2h", "h2l", "h3h", "h3l", "h4h", "h4l", "h5h", "h5l", "h6h", "h6l", "h7h", "h7l", "start", "bytes", "hBytes", "finalized", "hashed", "lastByteIndex"];
          for (t4 = 0; t4 < r3.length; ++t4)
            e3[r3[t4]] = this[r3[t4]];
          for (t4 = 0; t4 < this.blocks.length; ++t4)
            e3.blocks[t4] = this.blocks[t4];
        }, x.prototype = new v(), x.prototype.finalize = function() {
          if (v.prototype.finalize.call(this), this.inner) {
            this.inner = false;
            var e3 = this.array();
            v.call(this, this.bits, this.sharedMemory), this.update(this.oKeyPad), this.update(e3), v.prototype.finalize.call(this);
          }
        }, x.prototype.clone = function() {
          var e3 = new x([], this.bits, false);
          this.copyTo(e3), e3.inner = this.inner;
          for (var t4 = 0; t4 < this.oKeyPad.length; ++t4)
            e3.oKeyPad[t4] = this.oKeyPad[t4];
          return e3;
        };
        var A = y(512);
        A.sha512 = A, A.sha384 = y(384), A.sha512_256 = y(256), A.sha512_224 = y(224), A.sha512.hmac = b(512), A.sha384.hmac = b(384), A.sha512_256.hmac = b(256), A.sha512_224.hmac = b(224), a ? e2.exports = A : (i.sha512 = A.sha512, i.sha384 = A.sha384, i.sha512_256 = A.sha512_256, i.sha512_224 = A.sha512_224, c && (void 0 === (s2 = (function() {
          return A;
        }).call(A, r2, A, e2)) || (e2.exports = s2)));
      }();
    }, 360: (e2, t2, r2) => {
      var s2 = r2(592).stringify, n = r2(385);
      e2.exports = function(e3) {
        return { parse: n(e3), stringify: s2 };
      }, e2.exports.parse = n(), e2.exports.stringify = s2;
    }, 385: (e2, t2, r2) => {
      var s2 = null;
      const n = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/, i = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;
      e2.exports = function(e3) {
        var t3 = { strict: false, storeAsString: false, alwaysParseAsBig: false, useNativeBigInt: false, protoAction: "error", constructorAction: "error" };
        if (null != e3) {
          if (true === e3.strict && (t3.strict = true), true === e3.storeAsString && (t3.storeAsString = true), t3.alwaysParseAsBig = true === e3.alwaysParseAsBig && e3.alwaysParseAsBig, t3.useNativeBigInt = true === e3.useNativeBigInt && e3.useNativeBigInt, void 0 !== e3.constructorAction) {
            if ("error" !== e3.constructorAction && "ignore" !== e3.constructorAction && "preserve" !== e3.constructorAction)
              throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${e3.constructorAction}`);
            t3.constructorAction = e3.constructorAction;
          }
          if (void 0 !== e3.protoAction) {
            if ("error" !== e3.protoAction && "ignore" !== e3.protoAction && "preserve" !== e3.protoAction)
              throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${e3.protoAction}`);
            t3.protoAction = e3.protoAction;
          }
        }
        var o, a, c, u, l = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "	" }, h = function(e4) {
          throw { name: "SyntaxError", message: e4, at: o, text: c };
        }, d = function(e4) {
          return e4 && e4 !== a && h("Expected '" + e4 + "' instead of '" + a + "'"), a = c.charAt(o), o += 1, a;
        }, p = function() {
          var e4, n2 = "";
          for ("-" === a && (n2 = "-", d("-")); a >= "0" && a <= "9"; )
            n2 += a, d();
          if ("." === a)
            for (n2 += "."; d() && a >= "0" && a <= "9"; )
              n2 += a;
          if ("e" === a || "E" === a)
            for (n2 += a, d(), "-" !== a && "+" !== a || (n2 += a, d()); a >= "0" && a <= "9"; )
              n2 += a, d();
          if (e4 = +n2, isFinite(e4))
            return null == s2 && (s2 = r2(117)), n2.length > 15 ? t3.storeAsString ? n2 : t3.useNativeBigInt ? BigInt(n2) : new s2(n2) : t3.alwaysParseAsBig ? t3.useNativeBigInt ? BigInt(e4) : new s2(e4) : e4;
          h("Bad number");
        }, f = function() {
          var e4, t4, r3, s3 = "";
          if ('"' === a)
            for (var n2 = o; d(); ) {
              if ('"' === a)
                return o - 1 > n2 && (s3 += c.substring(n2, o - 1)), d(), s3;
              if ("\\" === a) {
                if (o - 1 > n2 && (s3 += c.substring(n2, o - 1)), d(), "u" === a) {
                  for (r3 = 0, t4 = 0; t4 < 4 && (e4 = parseInt(d(), 16), isFinite(e4)); t4 += 1)
                    r3 = 16 * r3 + e4;
                  s3 += String.fromCharCode(r3);
                } else {
                  if ("string" != typeof l[a])
                    break;
                  s3 += l[a];
                }
                n2 = o;
              }
            }
          h("Bad string");
        }, g = function() {
          for (; a && a <= " "; )
            d();
        };
        return u = function() {
          switch (g(), a) {
            case "{":
              return function() {
                var e4, r3 = /* @__PURE__ */ Object.create(null);
                if ("{" === a) {
                  if (d("{"), g(), "}" === a)
                    return d("}"), r3;
                  for (; a; ) {
                    if (e4 = f(), g(), d(":"), true === t3.strict && Object.hasOwnProperty.call(r3, e4) && h('Duplicate key "' + e4 + '"'), true === n.test(e4) ? "error" === t3.protoAction ? h("Object contains forbidden prototype property") : "ignore" === t3.protoAction ? u() : r3[e4] = u() : true === i.test(e4) ? "error" === t3.constructorAction ? h("Object contains forbidden constructor property") : "ignore" === t3.constructorAction ? u() : r3[e4] = u() : r3[e4] = u(), g(), "}" === a)
                      return d("}"), r3;
                    d(","), g();
                  }
                }
                h("Bad object");
              }();
            case "[":
              return function() {
                var e4 = [];
                if ("[" === a) {
                  if (d("["), g(), "]" === a)
                    return d("]"), e4;
                  for (; a; ) {
                    if (e4.push(u()), g(), "]" === a)
                      return d("]"), e4;
                    d(","), g();
                  }
                }
                h("Bad array");
              }();
            case '"':
              return f();
            case "-":
              return p();
            default:
              return a >= "0" && a <= "9" ? p() : function() {
                switch (a) {
                  case "t":
                    return d("t"), d("r"), d("u"), d("e"), true;
                  case "f":
                    return d("f"), d("a"), d("l"), d("s"), d("e"), false;
                  case "n":
                    return d("n"), d("u"), d("l"), d("l"), null;
                }
                h("Unexpected '" + a + "'");
              }();
          }
        }, function(e4, t4) {
          var r3;
          return c = e4 + "", o = 0, a = " ", r3 = u(), g(), a && h("Syntax error"), "function" == typeof t4 ? function e5(r4, s3) {
            var n2, i2 = r4[s3];
            return i2 && "object" == typeof i2 && Object.keys(i2).forEach(function(t5) {
              void 0 !== (n2 = e5(i2, t5)) ? i2[t5] = n2 : delete i2[t5];
            }), t4.call(r4, s3, i2);
          }({ "": r3 }, "") : r3;
        };
      };
    }, 592: (e2, t2, r2) => {
      var s2 = r2(117), n = e2.exports;
      !function() {
        var e3, t3, r3, i = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, o = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" };
        function a(e4) {
          return i.lastIndex = 0, i.test(e4) ? '"' + e4.replace(i, function(e5) {
            var t4 = o[e5];
            return "string" == typeof t4 ? t4 : "\\u" + ("0000" + e5.charCodeAt(0).toString(16)).slice(-4);
          }) + '"' : '"' + e4 + '"';
        }
        function c(n2, i2) {
          var o2, u, l, h, d, p = e3, f = i2[n2], g = null != f && (f instanceof s2 || s2.isBigNumber(f));
          switch (f && "object" == typeof f && "function" == typeof f.toJSON && (f = f.toJSON(n2)), "function" == typeof r3 && (f = r3.call(i2, n2, f)), typeof f) {
            case "string":
              return g ? f : a(f);
            case "number":
              return isFinite(f) ? String(f) : "null";
            case "boolean":
            case "null":
            case "bigint":
              return String(f);
            case "object":
              if (!f)
                return "null";
              if (e3 += t3, d = [], "[object Array]" === Object.prototype.toString.apply(f)) {
                for (h = f.length, o2 = 0; o2 < h; o2 += 1)
                  d[o2] = c(o2, f) || "null";
                return l = 0 === d.length ? "[]" : e3 ? "[\n" + e3 + d.join(",\n" + e3) + "\n" + p + "]" : "[" + d.join(",") + "]", e3 = p, l;
              }
              if (r3 && "object" == typeof r3)
                for (h = r3.length, o2 = 0; o2 < h; o2 += 1)
                  "string" == typeof r3[o2] && (l = c(u = r3[o2], f)) && d.push(a(u) + (e3 ? ": " : ":") + l);
              else
                Object.keys(f).forEach(function(t4) {
                  var r4 = c(t4, f);
                  r4 && d.push(a(t4) + (e3 ? ": " : ":") + r4);
                });
              return l = 0 === d.length ? "{}" : e3 ? "{\n" + e3 + d.join(",\n" + e3) + "\n" + p + "}" : "{" + d.join(",") + "}", e3 = p, l;
          }
        }
        "function" != typeof n.stringify && (n.stringify = function(s3, n2, i2) {
          var o2;
          if (e3 = "", t3 = "", "number" == typeof i2)
            for (o2 = 0; o2 < i2; o2 += 1)
              t3 += " ";
          else
            "string" == typeof i2 && (t3 = i2);
          if (r3 = n2, n2 && "function" != typeof n2 && ("object" != typeof n2 || "number" != typeof n2.length))
            throw new Error("JSON.stringify");
          return c("", { "": s3 });
        });
      }();
    }, 765: function(e2, t2) {
      !function(e3) {
        var t3 = function(e4) {
          var t4, r3 = new Float64Array(16);
          if (e4)
            for (t4 = 0; t4 < e4.length; t4++)
              r3[t4] = e4[t4];
          return r3;
        }, r2 = function() {
          throw new Error("no PRNG");
        }, s2 = new Uint8Array(16), n = new Uint8Array(32);
        n[0] = 9;
        var i = t3(), o = t3([1]), a = t3([56129, 1]), c = t3([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), u = t3([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), l = t3([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), h = t3([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), d = t3([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function p(e4, t4, r3, s3) {
          e4[t4] = r3 >> 24 & 255, e4[t4 + 1] = r3 >> 16 & 255, e4[t4 + 2] = r3 >> 8 & 255, e4[t4 + 3] = 255 & r3, e4[t4 + 4] = s3 >> 24 & 255, e4[t4 + 5] = s3 >> 16 & 255, e4[t4 + 6] = s3 >> 8 & 255, e4[t4 + 7] = 255 & s3;
        }
        function f(e4, t4, r3, s3, n2) {
          var i2, o2 = 0;
          for (i2 = 0; i2 < n2; i2++)
            o2 |= e4[t4 + i2] ^ r3[s3 + i2];
          return (1 & o2 - 1 >>> 8) - 1;
        }
        function g(e4, t4, r3, s3) {
          return f(e4, t4, r3, s3, 16);
        }
        function m(e4, t4, r3, s3) {
          return f(e4, t4, r3, s3, 32);
        }
        function y(e4, t4, r3, s3) {
          !function(e5, t5, r4, s4) {
            for (var n2, i2 = 255 & s4[0] | (255 & s4[1]) << 8 | (255 & s4[2]) << 16 | (255 & s4[3]) << 24, o2 = 255 & r4[0] | (255 & r4[1]) << 8 | (255 & r4[2]) << 16 | (255 & r4[3]) << 24, a2 = 255 & r4[4] | (255 & r4[5]) << 8 | (255 & r4[6]) << 16 | (255 & r4[7]) << 24, c2 = 255 & r4[8] | (255 & r4[9]) << 8 | (255 & r4[10]) << 16 | (255 & r4[11]) << 24, u2 = 255 & r4[12] | (255 & r4[13]) << 8 | (255 & r4[14]) << 16 | (255 & r4[15]) << 24, l2 = 255 & s4[4] | (255 & s4[5]) << 8 | (255 & s4[6]) << 16 | (255 & s4[7]) << 24, h2 = 255 & t5[0] | (255 & t5[1]) << 8 | (255 & t5[2]) << 16 | (255 & t5[3]) << 24, d2 = 255 & t5[4] | (255 & t5[5]) << 8 | (255 & t5[6]) << 16 | (255 & t5[7]) << 24, p2 = 255 & t5[8] | (255 & t5[9]) << 8 | (255 & t5[10]) << 16 | (255 & t5[11]) << 24, f2 = 255 & t5[12] | (255 & t5[13]) << 8 | (255 & t5[14]) << 16 | (255 & t5[15]) << 24, g2 = 255 & s4[8] | (255 & s4[9]) << 8 | (255 & s4[10]) << 16 | (255 & s4[11]) << 24, m2 = 255 & r4[16] | (255 & r4[17]) << 8 | (255 & r4[18]) << 16 | (255 & r4[19]) << 24, y2 = 255 & r4[20] | (255 & r4[21]) << 8 | (255 & r4[22]) << 16 | (255 & r4[23]) << 24, w2 = 255 & r4[24] | (255 & r4[25]) << 8 | (255 & r4[26]) << 16 | (255 & r4[27]) << 24, b2 = 255 & r4[28] | (255 & r4[29]) << 8 | (255 & r4[30]) << 16 | (255 & r4[31]) << 24, v2 = 255 & s4[12] | (255 & s4[13]) << 8 | (255 & s4[14]) << 16 | (255 & s4[15]) << 24, x2 = i2, A2 = o2, _2 = a2, E2 = c2, T2 = u2, S2 = l2, R2 = h2, k2 = d2, I2 = p2, B2 = f2, U2 = g2, P2 = m2, j2 = y2, q2 = w2, D2 = b2, $2 = v2, O2 = 0; O2 < 20; O2 += 2)
              x2 ^= (n2 = (j2 ^= (n2 = (I2 ^= (n2 = (T2 ^= (n2 = x2 + j2 | 0) << 7 | n2 >>> 25) + x2 | 0) << 9 | n2 >>> 23) + T2 | 0) << 13 | n2 >>> 19) + I2 | 0) << 18 | n2 >>> 14, S2 ^= (n2 = (A2 ^= (n2 = (q2 ^= (n2 = (B2 ^= (n2 = S2 + A2 | 0) << 7 | n2 >>> 25) + S2 | 0) << 9 | n2 >>> 23) + B2 | 0) << 13 | n2 >>> 19) + q2 | 0) << 18 | n2 >>> 14, U2 ^= (n2 = (R2 ^= (n2 = (_2 ^= (n2 = (D2 ^= (n2 = U2 + R2 | 0) << 7 | n2 >>> 25) + U2 | 0) << 9 | n2 >>> 23) + D2 | 0) << 13 | n2 >>> 19) + _2 | 0) << 18 | n2 >>> 14, $2 ^= (n2 = (P2 ^= (n2 = (k2 ^= (n2 = (E2 ^= (n2 = $2 + P2 | 0) << 7 | n2 >>> 25) + $2 | 0) << 9 | n2 >>> 23) + E2 | 0) << 13 | n2 >>> 19) + k2 | 0) << 18 | n2 >>> 14, x2 ^= (n2 = (E2 ^= (n2 = (_2 ^= (n2 = (A2 ^= (n2 = x2 + E2 | 0) << 7 | n2 >>> 25) + x2 | 0) << 9 | n2 >>> 23) + A2 | 0) << 13 | n2 >>> 19) + _2 | 0) << 18 | n2 >>> 14, S2 ^= (n2 = (T2 ^= (n2 = (k2 ^= (n2 = (R2 ^= (n2 = S2 + T2 | 0) << 7 | n2 >>> 25) + S2 | 0) << 9 | n2 >>> 23) + R2 | 0) << 13 | n2 >>> 19) + k2 | 0) << 18 | n2 >>> 14, U2 ^= (n2 = (B2 ^= (n2 = (I2 ^= (n2 = (P2 ^= (n2 = U2 + B2 | 0) << 7 | n2 >>> 25) + U2 | 0) << 9 | n2 >>> 23) + P2 | 0) << 13 | n2 >>> 19) + I2 | 0) << 18 | n2 >>> 14, $2 ^= (n2 = (D2 ^= (n2 = (q2 ^= (n2 = (j2 ^= (n2 = $2 + D2 | 0) << 7 | n2 >>> 25) + $2 | 0) << 9 | n2 >>> 23) + j2 | 0) << 13 | n2 >>> 19) + q2 | 0) << 18 | n2 >>> 14;
            x2 = x2 + i2 | 0, A2 = A2 + o2 | 0, _2 = _2 + a2 | 0, E2 = E2 + c2 | 0, T2 = T2 + u2 | 0, S2 = S2 + l2 | 0, R2 = R2 + h2 | 0, k2 = k2 + d2 | 0, I2 = I2 + p2 | 0, B2 = B2 + f2 | 0, U2 = U2 + g2 | 0, P2 = P2 + m2 | 0, j2 = j2 + y2 | 0, q2 = q2 + w2 | 0, D2 = D2 + b2 | 0, $2 = $2 + v2 | 0, e5[0] = x2 >>> 0 & 255, e5[1] = x2 >>> 8 & 255, e5[2] = x2 >>> 16 & 255, e5[3] = x2 >>> 24 & 255, e5[4] = A2 >>> 0 & 255, e5[5] = A2 >>> 8 & 255, e5[6] = A2 >>> 16 & 255, e5[7] = A2 >>> 24 & 255, e5[8] = _2 >>> 0 & 255, e5[9] = _2 >>> 8 & 255, e5[10] = _2 >>> 16 & 255, e5[11] = _2 >>> 24 & 255, e5[12] = E2 >>> 0 & 255, e5[13] = E2 >>> 8 & 255, e5[14] = E2 >>> 16 & 255, e5[15] = E2 >>> 24 & 255, e5[16] = T2 >>> 0 & 255, e5[17] = T2 >>> 8 & 255, e5[18] = T2 >>> 16 & 255, e5[19] = T2 >>> 24 & 255, e5[20] = S2 >>> 0 & 255, e5[21] = S2 >>> 8 & 255, e5[22] = S2 >>> 16 & 255, e5[23] = S2 >>> 24 & 255, e5[24] = R2 >>> 0 & 255, e5[25] = R2 >>> 8 & 255, e5[26] = R2 >>> 16 & 255, e5[27] = R2 >>> 24 & 255, e5[28] = k2 >>> 0 & 255, e5[29] = k2 >>> 8 & 255, e5[30] = k2 >>> 16 & 255, e5[31] = k2 >>> 24 & 255, e5[32] = I2 >>> 0 & 255, e5[33] = I2 >>> 8 & 255, e5[34] = I2 >>> 16 & 255, e5[35] = I2 >>> 24 & 255, e5[36] = B2 >>> 0 & 255, e5[37] = B2 >>> 8 & 255, e5[38] = B2 >>> 16 & 255, e5[39] = B2 >>> 24 & 255, e5[40] = U2 >>> 0 & 255, e5[41] = U2 >>> 8 & 255, e5[42] = U2 >>> 16 & 255, e5[43] = U2 >>> 24 & 255, e5[44] = P2 >>> 0 & 255, e5[45] = P2 >>> 8 & 255, e5[46] = P2 >>> 16 & 255, e5[47] = P2 >>> 24 & 255, e5[48] = j2 >>> 0 & 255, e5[49] = j2 >>> 8 & 255, e5[50] = j2 >>> 16 & 255, e5[51] = j2 >>> 24 & 255, e5[52] = q2 >>> 0 & 255, e5[53] = q2 >>> 8 & 255, e5[54] = q2 >>> 16 & 255, e5[55] = q2 >>> 24 & 255, e5[56] = D2 >>> 0 & 255, e5[57] = D2 >>> 8 & 255, e5[58] = D2 >>> 16 & 255, e5[59] = D2 >>> 24 & 255, e5[60] = $2 >>> 0 & 255, e5[61] = $2 >>> 8 & 255, e5[62] = $2 >>> 16 & 255, e5[63] = $2 >>> 24 & 255;
          }(e4, t4, r3, s3);
        }
        function w(e4, t4, r3, s3) {
          !function(e5, t5, r4, s4) {
            for (var n2, i2 = 255 & s4[0] | (255 & s4[1]) << 8 | (255 & s4[2]) << 16 | (255 & s4[3]) << 24, o2 = 255 & r4[0] | (255 & r4[1]) << 8 | (255 & r4[2]) << 16 | (255 & r4[3]) << 24, a2 = 255 & r4[4] | (255 & r4[5]) << 8 | (255 & r4[6]) << 16 | (255 & r4[7]) << 24, c2 = 255 & r4[8] | (255 & r4[9]) << 8 | (255 & r4[10]) << 16 | (255 & r4[11]) << 24, u2 = 255 & r4[12] | (255 & r4[13]) << 8 | (255 & r4[14]) << 16 | (255 & r4[15]) << 24, l2 = 255 & s4[4] | (255 & s4[5]) << 8 | (255 & s4[6]) << 16 | (255 & s4[7]) << 24, h2 = 255 & t5[0] | (255 & t5[1]) << 8 | (255 & t5[2]) << 16 | (255 & t5[3]) << 24, d2 = 255 & t5[4] | (255 & t5[5]) << 8 | (255 & t5[6]) << 16 | (255 & t5[7]) << 24, p2 = 255 & t5[8] | (255 & t5[9]) << 8 | (255 & t5[10]) << 16 | (255 & t5[11]) << 24, f2 = 255 & t5[12] | (255 & t5[13]) << 8 | (255 & t5[14]) << 16 | (255 & t5[15]) << 24, g2 = 255 & s4[8] | (255 & s4[9]) << 8 | (255 & s4[10]) << 16 | (255 & s4[11]) << 24, m2 = 255 & r4[16] | (255 & r4[17]) << 8 | (255 & r4[18]) << 16 | (255 & r4[19]) << 24, y2 = 255 & r4[20] | (255 & r4[21]) << 8 | (255 & r4[22]) << 16 | (255 & r4[23]) << 24, w2 = 255 & r4[24] | (255 & r4[25]) << 8 | (255 & r4[26]) << 16 | (255 & r4[27]) << 24, b2 = 255 & r4[28] | (255 & r4[29]) << 8 | (255 & r4[30]) << 16 | (255 & r4[31]) << 24, v2 = 255 & s4[12] | (255 & s4[13]) << 8 | (255 & s4[14]) << 16 | (255 & s4[15]) << 24, x2 = 0; x2 < 20; x2 += 2)
              i2 ^= (n2 = (y2 ^= (n2 = (p2 ^= (n2 = (u2 ^= (n2 = i2 + y2 | 0) << 7 | n2 >>> 25) + i2 | 0) << 9 | n2 >>> 23) + u2 | 0) << 13 | n2 >>> 19) + p2 | 0) << 18 | n2 >>> 14, l2 ^= (n2 = (o2 ^= (n2 = (w2 ^= (n2 = (f2 ^= (n2 = l2 + o2 | 0) << 7 | n2 >>> 25) + l2 | 0) << 9 | n2 >>> 23) + f2 | 0) << 13 | n2 >>> 19) + w2 | 0) << 18 | n2 >>> 14, g2 ^= (n2 = (h2 ^= (n2 = (a2 ^= (n2 = (b2 ^= (n2 = g2 + h2 | 0) << 7 | n2 >>> 25) + g2 | 0) << 9 | n2 >>> 23) + b2 | 0) << 13 | n2 >>> 19) + a2 | 0) << 18 | n2 >>> 14, v2 ^= (n2 = (m2 ^= (n2 = (d2 ^= (n2 = (c2 ^= (n2 = v2 + m2 | 0) << 7 | n2 >>> 25) + v2 | 0) << 9 | n2 >>> 23) + c2 | 0) << 13 | n2 >>> 19) + d2 | 0) << 18 | n2 >>> 14, i2 ^= (n2 = (c2 ^= (n2 = (a2 ^= (n2 = (o2 ^= (n2 = i2 + c2 | 0) << 7 | n2 >>> 25) + i2 | 0) << 9 | n2 >>> 23) + o2 | 0) << 13 | n2 >>> 19) + a2 | 0) << 18 | n2 >>> 14, l2 ^= (n2 = (u2 ^= (n2 = (d2 ^= (n2 = (h2 ^= (n2 = l2 + u2 | 0) << 7 | n2 >>> 25) + l2 | 0) << 9 | n2 >>> 23) + h2 | 0) << 13 | n2 >>> 19) + d2 | 0) << 18 | n2 >>> 14, g2 ^= (n2 = (f2 ^= (n2 = (p2 ^= (n2 = (m2 ^= (n2 = g2 + f2 | 0) << 7 | n2 >>> 25) + g2 | 0) << 9 | n2 >>> 23) + m2 | 0) << 13 | n2 >>> 19) + p2 | 0) << 18 | n2 >>> 14, v2 ^= (n2 = (b2 ^= (n2 = (w2 ^= (n2 = (y2 ^= (n2 = v2 + b2 | 0) << 7 | n2 >>> 25) + v2 | 0) << 9 | n2 >>> 23) + y2 | 0) << 13 | n2 >>> 19) + w2 | 0) << 18 | n2 >>> 14;
            e5[0] = i2 >>> 0 & 255, e5[1] = i2 >>> 8 & 255, e5[2] = i2 >>> 16 & 255, e5[3] = i2 >>> 24 & 255, e5[4] = l2 >>> 0 & 255, e5[5] = l2 >>> 8 & 255, e5[6] = l2 >>> 16 & 255, e5[7] = l2 >>> 24 & 255, e5[8] = g2 >>> 0 & 255, e5[9] = g2 >>> 8 & 255, e5[10] = g2 >>> 16 & 255, e5[11] = g2 >>> 24 & 255, e5[12] = v2 >>> 0 & 255, e5[13] = v2 >>> 8 & 255, e5[14] = v2 >>> 16 & 255, e5[15] = v2 >>> 24 & 255, e5[16] = h2 >>> 0 & 255, e5[17] = h2 >>> 8 & 255, e5[18] = h2 >>> 16 & 255, e5[19] = h2 >>> 24 & 255, e5[20] = d2 >>> 0 & 255, e5[21] = d2 >>> 8 & 255, e5[22] = d2 >>> 16 & 255, e5[23] = d2 >>> 24 & 255, e5[24] = p2 >>> 0 & 255, e5[25] = p2 >>> 8 & 255, e5[26] = p2 >>> 16 & 255, e5[27] = p2 >>> 24 & 255, e5[28] = f2 >>> 0 & 255, e5[29] = f2 >>> 8 & 255, e5[30] = f2 >>> 16 & 255, e5[31] = f2 >>> 24 & 255;
          }(e4, t4, r3, s3);
        }
        var b = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
        function v(e4, t4, r3, s3, n2, i2, o2) {
          var a2, c2, u2 = new Uint8Array(16), l2 = new Uint8Array(64);
          for (c2 = 0; c2 < 16; c2++)
            u2[c2] = 0;
          for (c2 = 0; c2 < 8; c2++)
            u2[c2] = i2[c2];
          for (; n2 >= 64; ) {
            for (y(l2, u2, o2, b), c2 = 0; c2 < 64; c2++)
              e4[t4 + c2] = r3[s3 + c2] ^ l2[c2];
            for (a2 = 1, c2 = 8; c2 < 16; c2++)
              a2 = a2 + (255 & u2[c2]) | 0, u2[c2] = 255 & a2, a2 >>>= 8;
            n2 -= 64, t4 += 64, s3 += 64;
          }
          if (n2 > 0)
            for (y(l2, u2, o2, b), c2 = 0; c2 < n2; c2++)
              e4[t4 + c2] = r3[s3 + c2] ^ l2[c2];
          return 0;
        }
        function x(e4, t4, r3, s3, n2) {
          var i2, o2, a2 = new Uint8Array(16), c2 = new Uint8Array(64);
          for (o2 = 0; o2 < 16; o2++)
            a2[o2] = 0;
          for (o2 = 0; o2 < 8; o2++)
            a2[o2] = s3[o2];
          for (; r3 >= 64; ) {
            for (y(c2, a2, n2, b), o2 = 0; o2 < 64; o2++)
              e4[t4 + o2] = c2[o2];
            for (i2 = 1, o2 = 8; o2 < 16; o2++)
              i2 = i2 + (255 & a2[o2]) | 0, a2[o2] = 255 & i2, i2 >>>= 8;
            r3 -= 64, t4 += 64;
          }
          if (r3 > 0)
            for (y(c2, a2, n2, b), o2 = 0; o2 < r3; o2++)
              e4[t4 + o2] = c2[o2];
          return 0;
        }
        function A(e4, t4, r3, s3, n2) {
          var i2 = new Uint8Array(32);
          w(i2, s3, n2, b);
          for (var o2 = new Uint8Array(8), a2 = 0; a2 < 8; a2++)
            o2[a2] = s3[a2 + 16];
          return x(e4, t4, r3, o2, i2);
        }
        function _(e4, t4, r3, s3, n2, i2, o2) {
          var a2 = new Uint8Array(32);
          w(a2, i2, o2, b);
          for (var c2 = new Uint8Array(8), u2 = 0; u2 < 8; u2++)
            c2[u2] = i2[u2 + 16];
          return v(e4, t4, r3, s3, n2, c2, a2);
        }
        var E = function(e4) {
          var t4, r3, s3, n2, i2, o2, a2, c2;
          this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, t4 = 255 & e4[0] | (255 & e4[1]) << 8, this.r[0] = 8191 & t4, r3 = 255 & e4[2] | (255 & e4[3]) << 8, this.r[1] = 8191 & (t4 >>> 13 | r3 << 3), s3 = 255 & e4[4] | (255 & e4[5]) << 8, this.r[2] = 7939 & (r3 >>> 10 | s3 << 6), n2 = 255 & e4[6] | (255 & e4[7]) << 8, this.r[3] = 8191 & (s3 >>> 7 | n2 << 9), i2 = 255 & e4[8] | (255 & e4[9]) << 8, this.r[4] = 255 & (n2 >>> 4 | i2 << 12), this.r[5] = i2 >>> 1 & 8190, o2 = 255 & e4[10] | (255 & e4[11]) << 8, this.r[6] = 8191 & (i2 >>> 14 | o2 << 2), a2 = 255 & e4[12] | (255 & e4[13]) << 8, this.r[7] = 8065 & (o2 >>> 11 | a2 << 5), c2 = 255 & e4[14] | (255 & e4[15]) << 8, this.r[8] = 8191 & (a2 >>> 8 | c2 << 8), this.r[9] = c2 >>> 5 & 127, this.pad[0] = 255 & e4[16] | (255 & e4[17]) << 8, this.pad[1] = 255 & e4[18] | (255 & e4[19]) << 8, this.pad[2] = 255 & e4[20] | (255 & e4[21]) << 8, this.pad[3] = 255 & e4[22] | (255 & e4[23]) << 8, this.pad[4] = 255 & e4[24] | (255 & e4[25]) << 8, this.pad[5] = 255 & e4[26] | (255 & e4[27]) << 8, this.pad[6] = 255 & e4[28] | (255 & e4[29]) << 8, this.pad[7] = 255 & e4[30] | (255 & e4[31]) << 8;
        };
        function T(e4, t4, r3, s3, n2, i2) {
          var o2 = new E(i2);
          return o2.update(r3, s3, n2), o2.finish(e4, t4), 0;
        }
        function S(e4, t4, r3, s3, n2, i2) {
          var o2 = new Uint8Array(16);
          return T(o2, 0, r3, s3, n2, i2), g(e4, t4, o2, 0);
        }
        function R(e4, t4, r3, s3, n2) {
          var i2;
          if (r3 < 32)
            return -1;
          for (_(e4, 0, t4, 0, r3, s3, n2), T(e4, 16, e4, 32, r3 - 32, e4), i2 = 0; i2 < 16; i2++)
            e4[i2] = 0;
          return 0;
        }
        function k(e4, t4, r3, s3, n2) {
          var i2, o2 = new Uint8Array(32);
          if (r3 < 32)
            return -1;
          if (A(o2, 0, 32, s3, n2), 0 !== S(t4, 16, t4, 32, r3 - 32, o2))
            return -1;
          for (_(e4, 0, t4, 0, r3, s3, n2), i2 = 0; i2 < 32; i2++)
            e4[i2] = 0;
          return 0;
        }
        function I(e4, t4) {
          var r3;
          for (r3 = 0; r3 < 16; r3++)
            e4[r3] = 0 | t4[r3];
        }
        function B(e4) {
          var t4, r3, s3 = 1;
          for (t4 = 0; t4 < 16; t4++)
            r3 = e4[t4] + s3 + 65535, s3 = Math.floor(r3 / 65536), e4[t4] = r3 - 65536 * s3;
          e4[0] += s3 - 1 + 37 * (s3 - 1);
        }
        function U(e4, t4, r3) {
          for (var s3, n2 = ~(r3 - 1), i2 = 0; i2 < 16; i2++)
            s3 = n2 & (e4[i2] ^ t4[i2]), e4[i2] ^= s3, t4[i2] ^= s3;
        }
        function P(e4, r3) {
          var s3, n2, i2, o2 = t3(), a2 = t3();
          for (s3 = 0; s3 < 16; s3++)
            a2[s3] = r3[s3];
          for (B(a2), B(a2), B(a2), n2 = 0; n2 < 2; n2++) {
            for (o2[0] = a2[0] - 65517, s3 = 1; s3 < 15; s3++)
              o2[s3] = a2[s3] - 65535 - (o2[s3 - 1] >> 16 & 1), o2[s3 - 1] &= 65535;
            o2[15] = a2[15] - 32767 - (o2[14] >> 16 & 1), i2 = o2[15] >> 16 & 1, o2[14] &= 65535, U(a2, o2, 1 - i2);
          }
          for (s3 = 0; s3 < 16; s3++)
            e4[2 * s3] = 255 & a2[s3], e4[2 * s3 + 1] = a2[s3] >> 8;
        }
        function j(e4, t4) {
          var r3 = new Uint8Array(32), s3 = new Uint8Array(32);
          return P(r3, e4), P(s3, t4), m(r3, 0, s3, 0);
        }
        function q(e4) {
          var t4 = new Uint8Array(32);
          return P(t4, e4), 1 & t4[0];
        }
        function D(e4, t4) {
          var r3;
          for (r3 = 0; r3 < 16; r3++)
            e4[r3] = t4[2 * r3] + (t4[2 * r3 + 1] << 8);
          e4[15] &= 32767;
        }
        function $(e4, t4, r3) {
          for (var s3 = 0; s3 < 16; s3++)
            e4[s3] = t4[s3] + r3[s3];
        }
        function O(e4, t4, r3) {
          for (var s3 = 0; s3 < 16; s3++)
            e4[s3] = t4[s3] - r3[s3];
        }
        function C(e4, t4, r3) {
          var s3, n2, i2 = 0, o2 = 0, a2 = 0, c2 = 0, u2 = 0, l2 = 0, h2 = 0, d2 = 0, p2 = 0, f2 = 0, g2 = 0, m2 = 0, y2 = 0, w2 = 0, b2 = 0, v2 = 0, x2 = 0, A2 = 0, _2 = 0, E2 = 0, T2 = 0, S2 = 0, R2 = 0, k2 = 0, I2 = 0, B2 = 0, U2 = 0, P2 = 0, j2 = 0, q2 = 0, D2 = 0, $2 = r3[0], O2 = r3[1], C2 = r3[2], L2 = r3[3], M2 = r3[4], N2 = r3[5], F2 = r3[6], W2 = r3[7], K2 = r3[8], z2 = r3[9], V2 = r3[10], G2 = r3[11], H2 = r3[12], Y2 = r3[13], J2 = r3[14], X2 = r3[15];
          i2 += (s3 = t4[0]) * $2, o2 += s3 * O2, a2 += s3 * C2, c2 += s3 * L2, u2 += s3 * M2, l2 += s3 * N2, h2 += s3 * F2, d2 += s3 * W2, p2 += s3 * K2, f2 += s3 * z2, g2 += s3 * V2, m2 += s3 * G2, y2 += s3 * H2, w2 += s3 * Y2, b2 += s3 * J2, v2 += s3 * X2, o2 += (s3 = t4[1]) * $2, a2 += s3 * O2, c2 += s3 * C2, u2 += s3 * L2, l2 += s3 * M2, h2 += s3 * N2, d2 += s3 * F2, p2 += s3 * W2, f2 += s3 * K2, g2 += s3 * z2, m2 += s3 * V2, y2 += s3 * G2, w2 += s3 * H2, b2 += s3 * Y2, v2 += s3 * J2, x2 += s3 * X2, a2 += (s3 = t4[2]) * $2, c2 += s3 * O2, u2 += s3 * C2, l2 += s3 * L2, h2 += s3 * M2, d2 += s3 * N2, p2 += s3 * F2, f2 += s3 * W2, g2 += s3 * K2, m2 += s3 * z2, y2 += s3 * V2, w2 += s3 * G2, b2 += s3 * H2, v2 += s3 * Y2, x2 += s3 * J2, A2 += s3 * X2, c2 += (s3 = t4[3]) * $2, u2 += s3 * O2, l2 += s3 * C2, h2 += s3 * L2, d2 += s3 * M2, p2 += s3 * N2, f2 += s3 * F2, g2 += s3 * W2, m2 += s3 * K2, y2 += s3 * z2, w2 += s3 * V2, b2 += s3 * G2, v2 += s3 * H2, x2 += s3 * Y2, A2 += s3 * J2, _2 += s3 * X2, u2 += (s3 = t4[4]) * $2, l2 += s3 * O2, h2 += s3 * C2, d2 += s3 * L2, p2 += s3 * M2, f2 += s3 * N2, g2 += s3 * F2, m2 += s3 * W2, y2 += s3 * K2, w2 += s3 * z2, b2 += s3 * V2, v2 += s3 * G2, x2 += s3 * H2, A2 += s3 * Y2, _2 += s3 * J2, E2 += s3 * X2, l2 += (s3 = t4[5]) * $2, h2 += s3 * O2, d2 += s3 * C2, p2 += s3 * L2, f2 += s3 * M2, g2 += s3 * N2, m2 += s3 * F2, y2 += s3 * W2, w2 += s3 * K2, b2 += s3 * z2, v2 += s3 * V2, x2 += s3 * G2, A2 += s3 * H2, _2 += s3 * Y2, E2 += s3 * J2, T2 += s3 * X2, h2 += (s3 = t4[6]) * $2, d2 += s3 * O2, p2 += s3 * C2, f2 += s3 * L2, g2 += s3 * M2, m2 += s3 * N2, y2 += s3 * F2, w2 += s3 * W2, b2 += s3 * K2, v2 += s3 * z2, x2 += s3 * V2, A2 += s3 * G2, _2 += s3 * H2, E2 += s3 * Y2, T2 += s3 * J2, S2 += s3 * X2, d2 += (s3 = t4[7]) * $2, p2 += s3 * O2, f2 += s3 * C2, g2 += s3 * L2, m2 += s3 * M2, y2 += s3 * N2, w2 += s3 * F2, b2 += s3 * W2, v2 += s3 * K2, x2 += s3 * z2, A2 += s3 * V2, _2 += s3 * G2, E2 += s3 * H2, T2 += s3 * Y2, S2 += s3 * J2, R2 += s3 * X2, p2 += (s3 = t4[8]) * $2, f2 += s3 * O2, g2 += s3 * C2, m2 += s3 * L2, y2 += s3 * M2, w2 += s3 * N2, b2 += s3 * F2, v2 += s3 * W2, x2 += s3 * K2, A2 += s3 * z2, _2 += s3 * V2, E2 += s3 * G2, T2 += s3 * H2, S2 += s3 * Y2, R2 += s3 * J2, k2 += s3 * X2, f2 += (s3 = t4[9]) * $2, g2 += s3 * O2, m2 += s3 * C2, y2 += s3 * L2, w2 += s3 * M2, b2 += s3 * N2, v2 += s3 * F2, x2 += s3 * W2, A2 += s3 * K2, _2 += s3 * z2, E2 += s3 * V2, T2 += s3 * G2, S2 += s3 * H2, R2 += s3 * Y2, k2 += s3 * J2, I2 += s3 * X2, g2 += (s3 = t4[10]) * $2, m2 += s3 * O2, y2 += s3 * C2, w2 += s3 * L2, b2 += s3 * M2, v2 += s3 * N2, x2 += s3 * F2, A2 += s3 * W2, _2 += s3 * K2, E2 += s3 * z2, T2 += s3 * V2, S2 += s3 * G2, R2 += s3 * H2, k2 += s3 * Y2, I2 += s3 * J2, B2 += s3 * X2, m2 += (s3 = t4[11]) * $2, y2 += s3 * O2, w2 += s3 * C2, b2 += s3 * L2, v2 += s3 * M2, x2 += s3 * N2, A2 += s3 * F2, _2 += s3 * W2, E2 += s3 * K2, T2 += s3 * z2, S2 += s3 * V2, R2 += s3 * G2, k2 += s3 * H2, I2 += s3 * Y2, B2 += s3 * J2, U2 += s3 * X2, y2 += (s3 = t4[12]) * $2, w2 += s3 * O2, b2 += s3 * C2, v2 += s3 * L2, x2 += s3 * M2, A2 += s3 * N2, _2 += s3 * F2, E2 += s3 * W2, T2 += s3 * K2, S2 += s3 * z2, R2 += s3 * V2, k2 += s3 * G2, I2 += s3 * H2, B2 += s3 * Y2, U2 += s3 * J2, P2 += s3 * X2, w2 += (s3 = t4[13]) * $2, b2 += s3 * O2, v2 += s3 * C2, x2 += s3 * L2, A2 += s3 * M2, _2 += s3 * N2, E2 += s3 * F2, T2 += s3 * W2, S2 += s3 * K2, R2 += s3 * z2, k2 += s3 * V2, I2 += s3 * G2, B2 += s3 * H2, U2 += s3 * Y2, P2 += s3 * J2, j2 += s3 * X2, b2 += (s3 = t4[14]) * $2, v2 += s3 * O2, x2 += s3 * C2, A2 += s3 * L2, _2 += s3 * M2, E2 += s3 * N2, T2 += s3 * F2, S2 += s3 * W2, R2 += s3 * K2, k2 += s3 * z2, I2 += s3 * V2, B2 += s3 * G2, U2 += s3 * H2, P2 += s3 * Y2, j2 += s3 * J2, q2 += s3 * X2, v2 += (s3 = t4[15]) * $2, o2 += 38 * (A2 += s3 * C2), a2 += 38 * (_2 += s3 * L2), c2 += 38 * (E2 += s3 * M2), u2 += 38 * (T2 += s3 * N2), l2 += 38 * (S2 += s3 * F2), h2 += 38 * (R2 += s3 * W2), d2 += 38 * (k2 += s3 * K2), p2 += 38 * (I2 += s3 * z2), f2 += 38 * (B2 += s3 * V2), g2 += 38 * (U2 += s3 * G2), m2 += 38 * (P2 += s3 * H2), y2 += 38 * (j2 += s3 * Y2), w2 += 38 * (q2 += s3 * J2), b2 += 38 * (D2 += s3 * X2), i2 = (s3 = (i2 += 38 * (x2 += s3 * O2)) + (n2 = 1) + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), o2 = (s3 = o2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), a2 = (s3 = a2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), c2 = (s3 = c2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), u2 = (s3 = u2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), l2 = (s3 = l2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), h2 = (s3 = h2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), d2 = (s3 = d2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), p2 = (s3 = p2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), f2 = (s3 = f2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), g2 = (s3 = g2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), m2 = (s3 = m2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), y2 = (s3 = y2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), w2 = (s3 = w2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), b2 = (s3 = b2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), v2 = (s3 = v2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), i2 = (s3 = (i2 += n2 - 1 + 37 * (n2 - 1)) + (n2 = 1) + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), o2 = (s3 = o2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), a2 = (s3 = a2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), c2 = (s3 = c2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), u2 = (s3 = u2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), l2 = (s3 = l2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), h2 = (s3 = h2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), d2 = (s3 = d2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), p2 = (s3 = p2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), f2 = (s3 = f2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), g2 = (s3 = g2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), m2 = (s3 = m2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), y2 = (s3 = y2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), w2 = (s3 = w2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), b2 = (s3 = b2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), v2 = (s3 = v2 + n2 + 65535) - 65536 * (n2 = Math.floor(s3 / 65536)), i2 += n2 - 1 + 37 * (n2 - 1), e4[0] = i2, e4[1] = o2, e4[2] = a2, e4[3] = c2, e4[4] = u2, e4[5] = l2, e4[6] = h2, e4[7] = d2, e4[8] = p2, e4[9] = f2, e4[10] = g2, e4[11] = m2, e4[12] = y2, e4[13] = w2, e4[14] = b2, e4[15] = v2;
        }
        function L(e4, t4) {
          C(e4, t4, t4);
        }
        function M(e4, r3) {
          var s3, n2 = t3();
          for (s3 = 0; s3 < 16; s3++)
            n2[s3] = r3[s3];
          for (s3 = 253; s3 >= 0; s3--)
            L(n2, n2), 2 !== s3 && 4 !== s3 && C(n2, n2, r3);
          for (s3 = 0; s3 < 16; s3++)
            e4[s3] = n2[s3];
        }
        function N(e4, r3) {
          var s3, n2 = t3();
          for (s3 = 0; s3 < 16; s3++)
            n2[s3] = r3[s3];
          for (s3 = 250; s3 >= 0; s3--)
            L(n2, n2), 1 !== s3 && C(n2, n2, r3);
          for (s3 = 0; s3 < 16; s3++)
            e4[s3] = n2[s3];
        }
        function F(e4, r3, s3) {
          var n2, i2, o2 = new Uint8Array(32), c2 = new Float64Array(80), u2 = t3(), l2 = t3(), h2 = t3(), d2 = t3(), p2 = t3(), f2 = t3();
          for (i2 = 0; i2 < 31; i2++)
            o2[i2] = r3[i2];
          for (o2[31] = 127 & r3[31] | 64, o2[0] &= 248, D(c2, s3), i2 = 0; i2 < 16; i2++)
            l2[i2] = c2[i2], d2[i2] = u2[i2] = h2[i2] = 0;
          for (u2[0] = d2[0] = 1, i2 = 254; i2 >= 0; --i2)
            U(u2, l2, n2 = o2[i2 >>> 3] >>> (7 & i2) & 1), U(h2, d2, n2), $(p2, u2, h2), O(u2, u2, h2), $(h2, l2, d2), O(l2, l2, d2), L(d2, p2), L(f2, u2), C(u2, h2, u2), C(h2, l2, p2), $(p2, u2, h2), O(u2, u2, h2), L(l2, u2), O(h2, d2, f2), C(u2, h2, a), $(u2, u2, d2), C(h2, h2, u2), C(u2, d2, f2), C(d2, l2, c2), L(l2, p2), U(u2, l2, n2), U(h2, d2, n2);
          for (i2 = 0; i2 < 16; i2++)
            c2[i2 + 16] = u2[i2], c2[i2 + 32] = h2[i2], c2[i2 + 48] = l2[i2], c2[i2 + 64] = d2[i2];
          var g2 = c2.subarray(32), m2 = c2.subarray(16);
          return M(g2, g2), C(m2, m2, g2), P(e4, m2), 0;
        }
        function W(e4, t4) {
          return F(e4, t4, n);
        }
        function K(e4, t4) {
          return r2(t4, 32), W(e4, t4);
        }
        function z(e4, t4, r3) {
          var n2 = new Uint8Array(32);
          return F(n2, r3, t4), w(e4, s2, n2, b);
        }
        E.prototype.blocks = function(e4, t4, r3) {
          for (var s3, n2, i2, o2, a2, c2, u2, l2, h2, d2, p2, f2, g2, m2, y2, w2, b2, v2, x2, A2 = this.fin ? 0 : 2048, _2 = this.h[0], E2 = this.h[1], T2 = this.h[2], S2 = this.h[3], R2 = this.h[4], k2 = this.h[5], I2 = this.h[6], B2 = this.h[7], U2 = this.h[8], P2 = this.h[9], j2 = this.r[0], q2 = this.r[1], D2 = this.r[2], $2 = this.r[3], O2 = this.r[4], C2 = this.r[5], L2 = this.r[6], M2 = this.r[7], N2 = this.r[8], F2 = this.r[9]; r3 >= 16; )
            d2 = h2 = 0, d2 += (_2 += 8191 & (s3 = 255 & e4[t4 + 0] | (255 & e4[t4 + 1]) << 8)) * j2, d2 += (E2 += 8191 & (s3 >>> 13 | (n2 = 255 & e4[t4 + 2] | (255 & e4[t4 + 3]) << 8) << 3)) * (5 * F2), d2 += (T2 += 8191 & (n2 >>> 10 | (i2 = 255 & e4[t4 + 4] | (255 & e4[t4 + 5]) << 8) << 6)) * (5 * N2), d2 += (S2 += 8191 & (i2 >>> 7 | (o2 = 255 & e4[t4 + 6] | (255 & e4[t4 + 7]) << 8) << 9)) * (5 * M2), h2 = (d2 += (R2 += 8191 & (o2 >>> 4 | (a2 = 255 & e4[t4 + 8] | (255 & e4[t4 + 9]) << 8) << 12)) * (5 * L2)) >>> 13, d2 &= 8191, d2 += (k2 += a2 >>> 1 & 8191) * (5 * C2), d2 += (I2 += 8191 & (a2 >>> 14 | (c2 = 255 & e4[t4 + 10] | (255 & e4[t4 + 11]) << 8) << 2)) * (5 * O2), d2 += (B2 += 8191 & (c2 >>> 11 | (u2 = 255 & e4[t4 + 12] | (255 & e4[t4 + 13]) << 8) << 5)) * (5 * $2), d2 += (U2 += 8191 & (u2 >>> 8 | (l2 = 255 & e4[t4 + 14] | (255 & e4[t4 + 15]) << 8) << 8)) * (5 * D2), p2 = h2 += (d2 += (P2 += l2 >>> 5 | A2) * (5 * q2)) >>> 13, p2 += _2 * q2, p2 += E2 * j2, p2 += T2 * (5 * F2), p2 += S2 * (5 * N2), h2 = (p2 += R2 * (5 * M2)) >>> 13, p2 &= 8191, p2 += k2 * (5 * L2), p2 += I2 * (5 * C2), p2 += B2 * (5 * O2), p2 += U2 * (5 * $2), h2 += (p2 += P2 * (5 * D2)) >>> 13, p2 &= 8191, f2 = h2, f2 += _2 * D2, f2 += E2 * q2, f2 += T2 * j2, f2 += S2 * (5 * F2), h2 = (f2 += R2 * (5 * N2)) >>> 13, f2 &= 8191, f2 += k2 * (5 * M2), f2 += I2 * (5 * L2), f2 += B2 * (5 * C2), f2 += U2 * (5 * O2), g2 = h2 += (f2 += P2 * (5 * $2)) >>> 13, g2 += _2 * $2, g2 += E2 * D2, g2 += T2 * q2, g2 += S2 * j2, h2 = (g2 += R2 * (5 * F2)) >>> 13, g2 &= 8191, g2 += k2 * (5 * N2), g2 += I2 * (5 * M2), g2 += B2 * (5 * L2), g2 += U2 * (5 * C2), m2 = h2 += (g2 += P2 * (5 * O2)) >>> 13, m2 += _2 * O2, m2 += E2 * $2, m2 += T2 * D2, m2 += S2 * q2, h2 = (m2 += R2 * j2) >>> 13, m2 &= 8191, m2 += k2 * (5 * F2), m2 += I2 * (5 * N2), m2 += B2 * (5 * M2), m2 += U2 * (5 * L2), y2 = h2 += (m2 += P2 * (5 * C2)) >>> 13, y2 += _2 * C2, y2 += E2 * O2, y2 += T2 * $2, y2 += S2 * D2, h2 = (y2 += R2 * q2) >>> 13, y2 &= 8191, y2 += k2 * j2, y2 += I2 * (5 * F2), y2 += B2 * (5 * N2), y2 += U2 * (5 * M2), w2 = h2 += (y2 += P2 * (5 * L2)) >>> 13, w2 += _2 * L2, w2 += E2 * C2, w2 += T2 * O2, w2 += S2 * $2, h2 = (w2 += R2 * D2) >>> 13, w2 &= 8191, w2 += k2 * q2, w2 += I2 * j2, w2 += B2 * (5 * F2), w2 += U2 * (5 * N2), b2 = h2 += (w2 += P2 * (5 * M2)) >>> 13, b2 += _2 * M2, b2 += E2 * L2, b2 += T2 * C2, b2 += S2 * O2, h2 = (b2 += R2 * $2) >>> 13, b2 &= 8191, b2 += k2 * D2, b2 += I2 * q2, b2 += B2 * j2, b2 += U2 * (5 * F2), v2 = h2 += (b2 += P2 * (5 * N2)) >>> 13, v2 += _2 * N2, v2 += E2 * M2, v2 += T2 * L2, v2 += S2 * C2, h2 = (v2 += R2 * O2) >>> 13, v2 &= 8191, v2 += k2 * $2, v2 += I2 * D2, v2 += B2 * q2, v2 += U2 * j2, x2 = h2 += (v2 += P2 * (5 * F2)) >>> 13, x2 += _2 * F2, x2 += E2 * N2, x2 += T2 * M2, x2 += S2 * L2, h2 = (x2 += R2 * C2) >>> 13, x2 &= 8191, x2 += k2 * O2, x2 += I2 * $2, x2 += B2 * D2, x2 += U2 * q2, _2 = d2 = 8191 & (h2 = (h2 = ((h2 += (x2 += P2 * j2) >>> 13) << 2) + h2 | 0) + (d2 &= 8191) | 0), E2 = p2 += h2 >>>= 13, T2 = f2 &= 8191, S2 = g2 &= 8191, R2 = m2 &= 8191, k2 = y2 &= 8191, I2 = w2 &= 8191, B2 = b2 &= 8191, U2 = v2 &= 8191, P2 = x2 &= 8191, t4 += 16, r3 -= 16;
          this.h[0] = _2, this.h[1] = E2, this.h[2] = T2, this.h[3] = S2, this.h[4] = R2, this.h[5] = k2, this.h[6] = I2, this.h[7] = B2, this.h[8] = U2, this.h[9] = P2;
        }, E.prototype.finish = function(e4, t4) {
          var r3, s3, n2, i2, o2 = new Uint16Array(10);
          if (this.leftover) {
            for (i2 = this.leftover, this.buffer[i2++] = 1; i2 < 16; i2++)
              this.buffer[i2] = 0;
            this.fin = 1, this.blocks(this.buffer, 0, 16);
          }
          for (r3 = this.h[1] >>> 13, this.h[1] &= 8191, i2 = 2; i2 < 10; i2++)
            this.h[i2] += r3, r3 = this.h[i2] >>> 13, this.h[i2] &= 8191;
          for (this.h[0] += 5 * r3, r3 = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += r3, r3 = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += r3, o2[0] = this.h[0] + 5, r3 = o2[0] >>> 13, o2[0] &= 8191, i2 = 1; i2 < 10; i2++)
            o2[i2] = this.h[i2] + r3, r3 = o2[i2] >>> 13, o2[i2] &= 8191;
          for (o2[9] -= 8192, s3 = (1 ^ r3) - 1, i2 = 0; i2 < 10; i2++)
            o2[i2] &= s3;
          for (s3 = ~s3, i2 = 0; i2 < 10; i2++)
            this.h[i2] = this.h[i2] & s3 | o2[i2];
          for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), n2 = this.h[0] + this.pad[0], this.h[0] = 65535 & n2, i2 = 1; i2 < 8; i2++)
            n2 = (this.h[i2] + this.pad[i2] | 0) + (n2 >>> 16) | 0, this.h[i2] = 65535 & n2;
          e4[t4 + 0] = this.h[0] >>> 0 & 255, e4[t4 + 1] = this.h[0] >>> 8 & 255, e4[t4 + 2] = this.h[1] >>> 0 & 255, e4[t4 + 3] = this.h[1] >>> 8 & 255, e4[t4 + 4] = this.h[2] >>> 0 & 255, e4[t4 + 5] = this.h[2] >>> 8 & 255, e4[t4 + 6] = this.h[3] >>> 0 & 255, e4[t4 + 7] = this.h[3] >>> 8 & 255, e4[t4 + 8] = this.h[4] >>> 0 & 255, e4[t4 + 9] = this.h[4] >>> 8 & 255, e4[t4 + 10] = this.h[5] >>> 0 & 255, e4[t4 + 11] = this.h[5] >>> 8 & 255, e4[t4 + 12] = this.h[6] >>> 0 & 255, e4[t4 + 13] = this.h[6] >>> 8 & 255, e4[t4 + 14] = this.h[7] >>> 0 & 255, e4[t4 + 15] = this.h[7] >>> 8 & 255;
        }, E.prototype.update = function(e4, t4, r3) {
          var s3, n2;
          if (this.leftover) {
            for ((n2 = 16 - this.leftover) > r3 && (n2 = r3), s3 = 0; s3 < n2; s3++)
              this.buffer[this.leftover + s3] = e4[t4 + s3];
            if (r3 -= n2, t4 += n2, this.leftover += n2, this.leftover < 16)
              return;
            this.blocks(this.buffer, 0, 16), this.leftover = 0;
          }
          if (r3 >= 16 && (n2 = r3 - r3 % 16, this.blocks(e4, t4, n2), t4 += n2, r3 -= n2), r3) {
            for (s3 = 0; s3 < r3; s3++)
              this.buffer[this.leftover + s3] = e4[t4 + s3];
            this.leftover += r3;
          }
        };
        var V = R, G = k, H = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
        function Y(e4, t4, r3, s3) {
          for (var n2, i2, o2, a2, c2, u2, l2, h2, d2, p2, f2, g2, m2, y2, w2, b2, v2, x2, A2, _2, E2, T2, S2, R2, k2, I2, B2 = new Int32Array(16), U2 = new Int32Array(16), P2 = e4[0], j2 = e4[1], q2 = e4[2], D2 = e4[3], $2 = e4[4], O2 = e4[5], C2 = e4[6], L2 = e4[7], M2 = t4[0], N2 = t4[1], F2 = t4[2], W2 = t4[3], K2 = t4[4], z2 = t4[5], V2 = t4[6], G2 = t4[7], Y2 = 0; s3 >= 128; ) {
            for (A2 = 0; A2 < 16; A2++)
              _2 = 8 * A2 + Y2, B2[A2] = r3[_2 + 0] << 24 | r3[_2 + 1] << 16 | r3[_2 + 2] << 8 | r3[_2 + 3], U2[A2] = r3[_2 + 4] << 24 | r3[_2 + 5] << 16 | r3[_2 + 6] << 8 | r3[_2 + 7];
            for (A2 = 0; A2 < 80; A2++)
              if (n2 = P2, i2 = j2, o2 = q2, a2 = D2, c2 = $2, u2 = O2, l2 = C2, d2 = M2, p2 = N2, f2 = F2, g2 = W2, m2 = K2, y2 = z2, w2 = V2, S2 = 65535 & (T2 = G2), R2 = T2 >>> 16, k2 = 65535 & (E2 = L2), I2 = E2 >>> 16, S2 += 65535 & (T2 = (K2 >>> 14 | $2 << 18) ^ (K2 >>> 18 | $2 << 14) ^ ($2 >>> 9 | K2 << 23)), R2 += T2 >>> 16, k2 += 65535 & (E2 = ($2 >>> 14 | K2 << 18) ^ ($2 >>> 18 | K2 << 14) ^ (K2 >>> 9 | $2 << 23)), I2 += E2 >>> 16, S2 += 65535 & (T2 = K2 & z2 ^ ~K2 & V2), R2 += T2 >>> 16, k2 += 65535 & (E2 = $2 & O2 ^ ~$2 & C2), I2 += E2 >>> 16, E2 = H[2 * A2], S2 += 65535 & (T2 = H[2 * A2 + 1]), R2 += T2 >>> 16, k2 += 65535 & E2, I2 += E2 >>> 16, E2 = B2[A2 % 16], R2 += (T2 = U2[A2 % 16]) >>> 16, k2 += 65535 & E2, I2 += E2 >>> 16, k2 += (R2 += (S2 += 65535 & T2) >>> 16) >>> 16, S2 = 65535 & (T2 = x2 = 65535 & S2 | R2 << 16), R2 = T2 >>> 16, k2 = 65535 & (E2 = v2 = 65535 & k2 | (I2 += k2 >>> 16) << 16), I2 = E2 >>> 16, S2 += 65535 & (T2 = (M2 >>> 28 | P2 << 4) ^ (P2 >>> 2 | M2 << 30) ^ (P2 >>> 7 | M2 << 25)), R2 += T2 >>> 16, k2 += 65535 & (E2 = (P2 >>> 28 | M2 << 4) ^ (M2 >>> 2 | P2 << 30) ^ (M2 >>> 7 | P2 << 25)), I2 += E2 >>> 16, R2 += (T2 = M2 & N2 ^ M2 & F2 ^ N2 & F2) >>> 16, k2 += 65535 & (E2 = P2 & j2 ^ P2 & q2 ^ j2 & q2), I2 += E2 >>> 16, h2 = 65535 & (k2 += (R2 += (S2 += 65535 & T2) >>> 16) >>> 16) | (I2 += k2 >>> 16) << 16, b2 = 65535 & S2 | R2 << 16, S2 = 65535 & (T2 = g2), R2 = T2 >>> 16, k2 = 65535 & (E2 = a2), I2 = E2 >>> 16, R2 += (T2 = x2) >>> 16, k2 += 65535 & (E2 = v2), I2 += E2 >>> 16, j2 = n2, q2 = i2, D2 = o2, $2 = a2 = 65535 & (k2 += (R2 += (S2 += 65535 & T2) >>> 16) >>> 16) | (I2 += k2 >>> 16) << 16, O2 = c2, C2 = u2, L2 = l2, P2 = h2, N2 = d2, F2 = p2, W2 = f2, K2 = g2 = 65535 & S2 | R2 << 16, z2 = m2, V2 = y2, G2 = w2, M2 = b2, A2 % 16 == 15)
                for (_2 = 0; _2 < 16; _2++)
                  E2 = B2[_2], S2 = 65535 & (T2 = U2[_2]), R2 = T2 >>> 16, k2 = 65535 & E2, I2 = E2 >>> 16, E2 = B2[(_2 + 9) % 16], S2 += 65535 & (T2 = U2[(_2 + 9) % 16]), R2 += T2 >>> 16, k2 += 65535 & E2, I2 += E2 >>> 16, v2 = B2[(_2 + 1) % 16], S2 += 65535 & (T2 = ((x2 = U2[(_2 + 1) % 16]) >>> 1 | v2 << 31) ^ (x2 >>> 8 | v2 << 24) ^ (x2 >>> 7 | v2 << 25)), R2 += T2 >>> 16, k2 += 65535 & (E2 = (v2 >>> 1 | x2 << 31) ^ (v2 >>> 8 | x2 << 24) ^ v2 >>> 7), I2 += E2 >>> 16, v2 = B2[(_2 + 14) % 16], R2 += (T2 = ((x2 = U2[(_2 + 14) % 16]) >>> 19 | v2 << 13) ^ (v2 >>> 29 | x2 << 3) ^ (x2 >>> 6 | v2 << 26)) >>> 16, k2 += 65535 & (E2 = (v2 >>> 19 | x2 << 13) ^ (x2 >>> 29 | v2 << 3) ^ v2 >>> 6), I2 += E2 >>> 16, I2 += (k2 += (R2 += (S2 += 65535 & T2) >>> 16) >>> 16) >>> 16, B2[_2] = 65535 & k2 | I2 << 16, U2[_2] = 65535 & S2 | R2 << 16;
            S2 = 65535 & (T2 = M2), R2 = T2 >>> 16, k2 = 65535 & (E2 = P2), I2 = E2 >>> 16, E2 = e4[0], R2 += (T2 = t4[0]) >>> 16, k2 += 65535 & E2, I2 += E2 >>> 16, I2 += (k2 += (R2 += (S2 += 65535 & T2) >>> 16) >>> 16) >>> 16, e4[0] = P2 = 65535 & k2 | I2 << 16, t4[0] = M2 = 65535 & S2 | R2 << 16, S2 = 65535 & (T2 = N2), R2 = T2 >>> 16, k2 = 65535 & (E2 = j2), I2 = E2 >>> 16, E2 = e4[1], R2 += (T2 = t4[1]) >>> 16, k2 += 65535 & E2, I2 += E2 >>> 16, I2 += (k2 += (R2 += (S2 += 65535 & T2) >>> 16) >>> 16) >>> 16, e4[1] = j2 = 65535 & k2 | I2 << 16, t4[1] = N2 = 65535 & S2 | R2 << 16, S2 = 65535 & (T2 = F2), R2 = T2 >>> 16, k2 = 65535 & (E2 = q2), I2 = E2 >>> 16, E2 = e4[2], R2 += (T2 = t4[2]) >>> 16, k2 += 65535 & E2, I2 += E2 >>> 16, I2 += (k2 += (R2 += (S2 += 65535 & T2) >>> 16) >>> 16) >>> 16, e4[2] = q2 = 65535 & k2 | I2 << 16, t4[2] = F2 = 65535 & S2 | R2 << 16, S2 = 65535 & (T2 = W2), R2 = T2 >>> 16, k2 = 65535 & (E2 = D2), I2 = E2 >>> 16, E2 = e4[3], R2 += (T2 = t4[3]) >>> 16, k2 += 65535 & E2, I2 += E2 >>> 16, I2 += (k2 += (R2 += (S2 += 65535 & T2) >>> 16) >>> 16) >>> 16, e4[3] = D2 = 65535 & k2 | I2 << 16, t4[3] = W2 = 65535 & S2 | R2 << 16, S2 = 65535 & (T2 = K2), R2 = T2 >>> 16, k2 = 65535 & (E2 = $2), I2 = E2 >>> 16, E2 = e4[4], R2 += (T2 = t4[4]) >>> 16, k2 += 65535 & E2, I2 += E2 >>> 16, I2 += (k2 += (R2 += (S2 += 65535 & T2) >>> 16) >>> 16) >>> 16, e4[4] = $2 = 65535 & k2 | I2 << 16, t4[4] = K2 = 65535 & S2 | R2 << 16, S2 = 65535 & (T2 = z2), R2 = T2 >>> 16, k2 = 65535 & (E2 = O2), I2 = E2 >>> 16, E2 = e4[5], R2 += (T2 = t4[5]) >>> 16, k2 += 65535 & E2, I2 += E2 >>> 16, I2 += (k2 += (R2 += (S2 += 65535 & T2) >>> 16) >>> 16) >>> 16, e4[5] = O2 = 65535 & k2 | I2 << 16, t4[5] = z2 = 65535 & S2 | R2 << 16, S2 = 65535 & (T2 = V2), R2 = T2 >>> 16, k2 = 65535 & (E2 = C2), I2 = E2 >>> 16, E2 = e4[6], R2 += (T2 = t4[6]) >>> 16, k2 += 65535 & E2, I2 += E2 >>> 16, I2 += (k2 += (R2 += (S2 += 65535 & T2) >>> 16) >>> 16) >>> 16, e4[6] = C2 = 65535 & k2 | I2 << 16, t4[6] = V2 = 65535 & S2 | R2 << 16, S2 = 65535 & (T2 = G2), R2 = T2 >>> 16, k2 = 65535 & (E2 = L2), I2 = E2 >>> 16, E2 = e4[7], R2 += (T2 = t4[7]) >>> 16, k2 += 65535 & E2, I2 += E2 >>> 16, I2 += (k2 += (R2 += (S2 += 65535 & T2) >>> 16) >>> 16) >>> 16, e4[7] = L2 = 65535 & k2 | I2 << 16, t4[7] = G2 = 65535 & S2 | R2 << 16, Y2 += 128, s3 -= 128;
          }
          return s3;
        }
        function J(e4, t4, r3) {
          var s3, n2 = new Int32Array(8), i2 = new Int32Array(8), o2 = new Uint8Array(256), a2 = r3;
          for (n2[0] = 1779033703, n2[1] = 3144134277, n2[2] = 1013904242, n2[3] = 2773480762, n2[4] = 1359893119, n2[5] = 2600822924, n2[6] = 528734635, n2[7] = 1541459225, i2[0] = 4089235720, i2[1] = 2227873595, i2[2] = 4271175723, i2[3] = 1595750129, i2[4] = 2917565137, i2[5] = 725511199, i2[6] = 4215389547, i2[7] = 327033209, Y(n2, i2, t4, r3), r3 %= 128, s3 = 0; s3 < r3; s3++)
            o2[s3] = t4[a2 - r3 + s3];
          for (o2[r3] = 128, o2[(r3 = 256 - 128 * (r3 < 112 ? 1 : 0)) - 9] = 0, p(o2, r3 - 8, a2 / 536870912 | 0, a2 << 3), Y(n2, i2, o2, r3), s3 = 0; s3 < 8; s3++)
            p(e4, 8 * s3, n2[s3], i2[s3]);
          return 0;
        }
        function X(e4, r3) {
          var s3 = t3(), n2 = t3(), i2 = t3(), o2 = t3(), a2 = t3(), c2 = t3(), l2 = t3(), h2 = t3(), d2 = t3();
          O(s3, e4[1], e4[0]), O(d2, r3[1], r3[0]), C(s3, s3, d2), $(n2, e4[0], e4[1]), $(d2, r3[0], r3[1]), C(n2, n2, d2), C(i2, e4[3], r3[3]), C(i2, i2, u), C(o2, e4[2], r3[2]), $(o2, o2, o2), O(a2, n2, s3), O(c2, o2, i2), $(l2, o2, i2), $(h2, n2, s3), C(e4[0], a2, c2), C(e4[1], h2, l2), C(e4[2], l2, c2), C(e4[3], a2, h2);
        }
        function Z(e4, t4, r3) {
          var s3;
          for (s3 = 0; s3 < 4; s3++)
            U(e4[s3], t4[s3], r3);
        }
        function Q(e4, r3) {
          var s3 = t3(), n2 = t3(), i2 = t3();
          M(i2, r3[2]), C(s3, r3[0], i2), C(n2, r3[1], i2), P(e4, n2), e4[31] ^= q(s3) << 7;
        }
        function ee(e4, t4, r3) {
          var s3, n2;
          for (I(e4[0], i), I(e4[1], o), I(e4[2], o), I(e4[3], i), n2 = 255; n2 >= 0; --n2)
            Z(e4, t4, s3 = r3[n2 / 8 | 0] >> (7 & n2) & 1), X(t4, e4), X(e4, e4), Z(e4, t4, s3);
        }
        function te(e4, r3) {
          var s3 = [t3(), t3(), t3(), t3()];
          I(s3[0], l), I(s3[1], h), I(s3[2], o), C(s3[3], l, h), ee(e4, s3, r3);
        }
        function re(e4, s3, n2) {
          var i2, o2 = new Uint8Array(64), a2 = [t3(), t3(), t3(), t3()];
          for (n2 || r2(s3, 32), J(o2, s3, 32), o2[0] &= 248, o2[31] &= 127, o2[31] |= 64, te(a2, o2), Q(e4, a2), i2 = 0; i2 < 32; i2++)
            s3[i2 + 32] = e4[i2];
          return 0;
        }
        var se = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function ne(e4, t4) {
          var r3, s3, n2, i2;
          for (s3 = 63; s3 >= 32; --s3) {
            for (r3 = 0, n2 = s3 - 32, i2 = s3 - 12; n2 < i2; ++n2)
              t4[n2] += r3 - 16 * t4[s3] * se[n2 - (s3 - 32)], r3 = Math.floor((t4[n2] + 128) / 256), t4[n2] -= 256 * r3;
            t4[n2] += r3, t4[s3] = 0;
          }
          for (r3 = 0, n2 = 0; n2 < 32; n2++)
            t4[n2] += r3 - (t4[31] >> 4) * se[n2], r3 = t4[n2] >> 8, t4[n2] &= 255;
          for (n2 = 0; n2 < 32; n2++)
            t4[n2] -= r3 * se[n2];
          for (s3 = 0; s3 < 32; s3++)
            t4[s3 + 1] += t4[s3] >> 8, e4[s3] = 255 & t4[s3];
        }
        function ie(e4) {
          var t4, r3 = new Float64Array(64);
          for (t4 = 0; t4 < 64; t4++)
            r3[t4] = e4[t4];
          for (t4 = 0; t4 < 64; t4++)
            e4[t4] = 0;
          ne(e4, r3);
        }
        function oe(e4, r3, s3, n2) {
          var i2, o2, a2 = new Uint8Array(64), c2 = new Uint8Array(64), u2 = new Uint8Array(64), l2 = new Float64Array(64), h2 = [t3(), t3(), t3(), t3()];
          J(a2, n2, 32), a2[0] &= 248, a2[31] &= 127, a2[31] |= 64;
          var d2 = s3 + 64;
          for (i2 = 0; i2 < s3; i2++)
            e4[64 + i2] = r3[i2];
          for (i2 = 0; i2 < 32; i2++)
            e4[32 + i2] = a2[32 + i2];
          for (J(u2, e4.subarray(32), s3 + 32), ie(u2), te(h2, u2), Q(e4, h2), i2 = 32; i2 < 64; i2++)
            e4[i2] = n2[i2];
          for (J(c2, e4, s3 + 64), ie(c2), i2 = 0; i2 < 64; i2++)
            l2[i2] = 0;
          for (i2 = 0; i2 < 32; i2++)
            l2[i2] = u2[i2];
          for (i2 = 0; i2 < 32; i2++)
            for (o2 = 0; o2 < 32; o2++)
              l2[i2 + o2] += c2[i2] * a2[o2];
          return ne(e4.subarray(32), l2), d2;
        }
        function ae(e4, r3, s3, n2) {
          var a2, u2 = new Uint8Array(32), l2 = new Uint8Array(64), h2 = [t3(), t3(), t3(), t3()], p2 = [t3(), t3(), t3(), t3()];
          if (s3 < 64)
            return -1;
          if (function(e5, r4) {
            var s4 = t3(), n3 = t3(), a3 = t3(), u3 = t3(), l3 = t3(), h3 = t3(), p3 = t3();
            return I(e5[2], o), D(e5[1], r4), L(a3, e5[1]), C(u3, a3, c), O(a3, a3, e5[2]), $(u3, e5[2], u3), L(l3, u3), L(h3, l3), C(p3, h3, l3), C(s4, p3, a3), C(s4, s4, u3), N(s4, s4), C(s4, s4, a3), C(s4, s4, u3), C(s4, s4, u3), C(e5[0], s4, u3), L(n3, e5[0]), C(n3, n3, u3), j(n3, a3) && C(e5[0], e5[0], d), L(n3, e5[0]), C(n3, n3, u3), j(n3, a3) ? -1 : (q(e5[0]) === r4[31] >> 7 && O(e5[0], i, e5[0]), C(e5[3], e5[0], e5[1]), 0);
          }(p2, n2))
            return -1;
          for (a2 = 0; a2 < s3; a2++)
            e4[a2] = r3[a2];
          for (a2 = 0; a2 < 32; a2++)
            e4[a2 + 32] = n2[a2];
          if (J(l2, e4, s3), ie(l2), ee(h2, p2, l2), te(p2, r3.subarray(32)), X(h2, p2), Q(u2, h2), s3 -= 64, m(r3, 0, u2, 0)) {
            for (a2 = 0; a2 < s3; a2++)
              e4[a2] = 0;
            return -1;
          }
          for (a2 = 0; a2 < s3; a2++)
            e4[a2] = r3[a2 + 64];
          return s3;
        }
        var ce = 32, ue = 24, le = ue, he = 64, de = 32, pe = 64;
        function fe(e4, t4) {
          if (e4.length !== ce)
            throw new Error("bad key size");
          if (t4.length !== ue)
            throw new Error("bad nonce size");
        }
        function ge() {
          for (var e4 = 0; e4 < arguments.length; e4++)
            if (!(arguments[e4] instanceof Uint8Array))
              throw new TypeError("unexpected type, use Uint8Array");
        }
        function me(e4) {
          for (var t4 = 0; t4 < e4.length; t4++)
            e4[t4] = 0;
        }
        e3.lowlevel = { crypto_core_hsalsa20: w, crypto_stream_xor: _, crypto_stream: A, crypto_stream_salsa20_xor: v, crypto_stream_salsa20: x, crypto_onetimeauth: T, crypto_onetimeauth_verify: S, crypto_verify_16: g, crypto_verify_32: m, crypto_secretbox: R, crypto_secretbox_open: k, crypto_scalarmult: F, crypto_scalarmult_base: W, crypto_box_beforenm: z, crypto_box_afternm: V, crypto_box: function(e4, t4, r3, s3, n2, i2) {
          var o2 = new Uint8Array(32);
          return z(o2, n2, i2), V(e4, t4, r3, s3, o2);
        }, crypto_box_open: function(e4, t4, r3, s3, n2, i2) {
          var o2 = new Uint8Array(32);
          return z(o2, n2, i2), G(e4, t4, r3, s3, o2);
        }, crypto_box_keypair: K, crypto_hash: J, crypto_sign: oe, crypto_sign_keypair: re, crypto_sign_open: ae, crypto_secretbox_KEYBYTES: ce, crypto_secretbox_NONCEBYTES: ue, crypto_secretbox_ZEROBYTES: 32, crypto_secretbox_BOXZEROBYTES: 16, crypto_scalarmult_BYTES: 32, crypto_scalarmult_SCALARBYTES: 32, crypto_box_PUBLICKEYBYTES: 32, crypto_box_SECRETKEYBYTES: 32, crypto_box_BEFORENMBYTES: 32, crypto_box_NONCEBYTES: le, crypto_box_ZEROBYTES: 32, crypto_box_BOXZEROBYTES: 16, crypto_sign_BYTES: he, crypto_sign_PUBLICKEYBYTES: de, crypto_sign_SECRETKEYBYTES: pe, crypto_sign_SEEDBYTES: 32, crypto_hash_BYTES: 64, gf: t3, D: c, L: se, pack25519: P, unpack25519: D, M: C, A: $, S: L, Z: O, pow2523: N, add: X, set25519: I, modL: ne, scalarmult: ee, scalarbase: te }, e3.randomBytes = function(e4) {
          var t4 = new Uint8Array(e4);
          return r2(t4, e4), t4;
        }, e3.secretbox = function(e4, t4, r3) {
          ge(e4, t4, r3), fe(r3, t4);
          for (var s3 = new Uint8Array(32 + e4.length), n2 = new Uint8Array(s3.length), i2 = 0; i2 < e4.length; i2++)
            s3[i2 + 32] = e4[i2];
          return R(n2, s3, s3.length, t4, r3), n2.subarray(16);
        }, e3.secretbox.open = function(e4, t4, r3) {
          ge(e4, t4, r3), fe(r3, t4);
          for (var s3 = new Uint8Array(16 + e4.length), n2 = new Uint8Array(s3.length), i2 = 0; i2 < e4.length; i2++)
            s3[i2 + 16] = e4[i2];
          return s3.length < 32 || 0 !== k(n2, s3, s3.length, t4, r3) ? null : n2.subarray(32);
        }, e3.secretbox.keyLength = ce, e3.secretbox.nonceLength = ue, e3.secretbox.overheadLength = 16, e3.scalarMult = function(e4, t4) {
          if (ge(e4, t4), 32 !== e4.length)
            throw new Error("bad n size");
          if (32 !== t4.length)
            throw new Error("bad p size");
          var r3 = new Uint8Array(32);
          return F(r3, e4, t4), r3;
        }, e3.scalarMult.base = function(e4) {
          if (ge(e4), 32 !== e4.length)
            throw new Error("bad n size");
          var t4 = new Uint8Array(32);
          return W(t4, e4), t4;
        }, e3.scalarMult.scalarLength = 32, e3.scalarMult.groupElementLength = 32, e3.box = function(t4, r3, s3, n2) {
          var i2 = e3.box.before(s3, n2);
          return e3.secretbox(t4, r3, i2);
        }, e3.box.before = function(e4, t4) {
          ge(e4, t4), function(e5, t5) {
            if (32 !== e5.length)
              throw new Error("bad public key size");
            if (32 !== t5.length)
              throw new Error("bad secret key size");
          }(e4, t4);
          var r3 = new Uint8Array(32);
          return z(r3, e4, t4), r3;
        }, e3.box.after = e3.secretbox, e3.box.open = function(t4, r3, s3, n2) {
          var i2 = e3.box.before(s3, n2);
          return e3.secretbox.open(t4, r3, i2);
        }, e3.box.open.after = e3.secretbox.open, e3.box.keyPair = function() {
          var e4 = new Uint8Array(32), t4 = new Uint8Array(32);
          return K(e4, t4), { publicKey: e4, secretKey: t4 };
        }, e3.box.keyPair.fromSecretKey = function(e4) {
          if (ge(e4), 32 !== e4.length)
            throw new Error("bad secret key size");
          var t4 = new Uint8Array(32);
          return W(t4, e4), { publicKey: t4, secretKey: new Uint8Array(e4) };
        }, e3.box.publicKeyLength = 32, e3.box.secretKeyLength = 32, e3.box.sharedKeyLength = 32, e3.box.nonceLength = le, e3.box.overheadLength = e3.secretbox.overheadLength, e3.sign = function(e4, t4) {
          if (ge(e4, t4), t4.length !== pe)
            throw new Error("bad secret key size");
          var r3 = new Uint8Array(he + e4.length);
          return oe(r3, e4, e4.length, t4), r3;
        }, e3.sign.open = function(e4, t4) {
          if (ge(e4, t4), t4.length !== de)
            throw new Error("bad public key size");
          var r3 = new Uint8Array(e4.length), s3 = ae(r3, e4, e4.length, t4);
          if (s3 < 0)
            return null;
          for (var n2 = new Uint8Array(s3), i2 = 0; i2 < n2.length; i2++)
            n2[i2] = r3[i2];
          return n2;
        }, e3.sign.detached = function(t4, r3) {
          for (var s3 = e3.sign(t4, r3), n2 = new Uint8Array(he), i2 = 0; i2 < n2.length; i2++)
            n2[i2] = s3[i2];
          return n2;
        }, e3.sign.detached.verify = function(e4, t4, r3) {
          if (ge(e4, t4, r3), t4.length !== he)
            throw new Error("bad signature size");
          if (r3.length !== de)
            throw new Error("bad public key size");
          var s3, n2 = new Uint8Array(he + e4.length), i2 = new Uint8Array(he + e4.length);
          for (s3 = 0; s3 < he; s3++)
            n2[s3] = t4[s3];
          for (s3 = 0; s3 < e4.length; s3++)
            n2[s3 + he] = e4[s3];
          return ae(i2, n2, n2.length, r3) >= 0;
        }, e3.sign.keyPair = function() {
          var e4 = new Uint8Array(de), t4 = new Uint8Array(pe);
          return re(e4, t4), { publicKey: e4, secretKey: t4 };
        }, e3.sign.keyPair.fromSecretKey = function(e4) {
          if (ge(e4), e4.length !== pe)
            throw new Error("bad secret key size");
          for (var t4 = new Uint8Array(de), r3 = 0; r3 < t4.length; r3++)
            t4[r3] = e4[32 + r3];
          return { publicKey: t4, secretKey: new Uint8Array(e4) };
        }, e3.sign.keyPair.fromSeed = function(e4) {
          if (ge(e4), 32 !== e4.length)
            throw new Error("bad seed size");
          for (var t4 = new Uint8Array(de), r3 = new Uint8Array(pe), s3 = 0; s3 < 32; s3++)
            r3[s3] = e4[s3];
          return re(t4, r3, true), { publicKey: t4, secretKey: r3 };
        }, e3.sign.publicKeyLength = de, e3.sign.secretKeyLength = pe, e3.sign.seedLength = 32, e3.sign.signatureLength = he, e3.hash = function(e4) {
          ge(e4);
          var t4 = new Uint8Array(64);
          return J(t4, e4, e4.length), t4;
        }, e3.hash.hashLength = 64, e3.verify = function(e4, t4) {
          return ge(e4, t4), 0 !== e4.length && 0 !== t4.length && e4.length === t4.length && 0 === f(e4, 0, t4, 0, e4.length);
        }, e3.setPRNG = function(e4) {
          r2 = e4;
        }, function() {
          var t4 = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
          t4 && t4.getRandomValues ? e3.setPRNG(function(e4, r3) {
            var s3, n2 = new Uint8Array(r3);
            for (s3 = 0; s3 < r3; s3 += 65536)
              t4.getRandomValues(n2.subarray(s3, s3 + Math.min(r3 - s3, 65536)));
            for (s3 = 0; s3 < r3; s3++)
              e4[s3] = n2[s3];
            me(n2);
          }) : "undefined" != typeof commonjsRequire && (t4 = require$$0) && t4.randomBytes && e3.setPRNG(function(e4, r3) {
            var s3, n2 = t4.randomBytes(r3);
            for (s3 = 0; s3 < r3; s3++)
              e4[s3] = n2[s3];
            me(n2);
          });
        }();
      }(void 0 !== e2 && e2.exports ? e2.exports : self.nacl = self.nacl || {});
    } }, t = {};
    function r(s2) {
      var n = t[s2];
      if (void 0 !== n)
        return n.exports;
      var i = t[s2] = { exports: {} };
      return e[s2].call(i.exports, i, i.exports, r), i.exports;
    }
    r.amdO = {}, r.n = (e2) => {
      var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
      return r.d(t2, { a: t2 }), t2;
    }, r.d = (e2, t2) => {
      for (var s2 in t2)
        r.o(t2, s2) && !r.o(e2, s2) && Object.defineProperty(e2, s2, { enumerable: true, get: t2[s2] });
    }, r.g = function() {
      if ("object" == typeof globalThis)
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e2) {
        if ("object" == typeof window)
          return window;
      }
    }(), r.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r.r = (e2) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    };
    var s = {};
    return (() => {
      r.r(s), r.d(s, { ABIAddressType: () => Ui, ABIArrayDynamicType: () => $i, ABIArrayStaticType: () => Di, ABIBoolType: () => Pi, ABIByteType: () => ji, ABIContract: () => Gi, ABIInterface: () => Hi, ABIMethod: () => zi, ABIReferenceType: () => Ni, ABIStringType: () => qi, ABITransactionType: () => Mi, ABITupleType: () => Oi, ABIType: () => ki, ABIUfixedType: () => Bi, ABIUintType: () => Ii, ADDR_BYTE_SIZE: () => Ai, ALGORAND_MIN_TX_FEE: () => te, Algodv2: () => ir, AtomicTransactionComposer: () => Zi, AtomicTransactionComposerStatus: () => Ji, DryrunResult: () => Mn, ERROR_INVALID_MICROALGOS: () => co, ERROR_MULTISIG_BAD_SENDER: () => ao, INVALID_MICROALGOS_ERROR_MSG: () => he, Indexer: () => Ds, IntDecoding: () => T, Kmd: () => or, LENGTH_ENCODE_BYTE_SIZE: () => Ti, LogicSig: () => wn, LogicSigAccount: () => bn, MAX_LEN: () => xi, MULTISIG_BAD_SENDER_ERROR_MSG: () => eo, OnApplicationComplete: () => ee, SINGLE_BOOL_SIZE: () => Ei, SINGLE_BYTE_SIZE: () => _i, SourceMap: () => In, Transaction: () => se, TransactionType: () => Q, abiCheckTransactionType: () => Wi, abiTypeIsReference: () => Ki, abiTypeIsTransaction: () => Fi, algosToMicroalgos: () => pe, appendSignMultisigTransaction: () => fn, appendSignRawMultisigSignature: () => gn, assignGroupID: () => en, bigIntToBytes: () => Os, bytesToBigInt: () => Cs, computeGroupID: () => Qs, createDryrun: () => Pn, createMultisigTransaction: () => cn, decodeAddress: () => F, decodeObj: () => oo, decodeSignedTransaction: () => ae, decodeUint64: () => B, decodeUnsignedTransaction: () => oe, default: () => uo, encodeAddress: () => K, encodeObj: () => io, encodeUint64: () => I, encodeUnsignedSimulateTransaction: () => ne, encodeUnsignedTransaction: () => ie, generateAccount: () => Ls, getApplicationAddress: () => G, getMethodByName: () => Vi, indexerModels: () => t2, instantiateTxnIfNeeded: () => ce, isTransactionWithSigner: () => vi, isValidAddress: () => W, logicSigFromByte: () => An, makeApplicationCallTxnFromObject: () => gi, makeApplicationClearStateTxn: () => hi, makeApplicationClearStateTxnFromObject: () => di, makeApplicationCloseOutTxn: () => ui, makeApplicationCloseOutTxnFromObject: () => li, makeApplicationCreateTxn: () => ti, makeApplicationCreateTxnFromObject: () => ri, makeApplicationDeleteTxn: () => ii, makeApplicationDeleteTxnFromObject: () => oi, makeApplicationNoOpTxn: () => pi, makeApplicationNoOpTxnFromObject: () => fi, makeApplicationOptInTxn: () => ai, makeApplicationOptInTxnFromObject: () => ci, makeApplicationUpdateTxn: () => si, makeApplicationUpdateTxnFromObject: () => ni, makeAssetConfigTxnWithSuggestedParams: () => Gn, makeAssetConfigTxnWithSuggestedParamsFromObject: () => Hn, makeAssetCreateTxnWithSuggestedParams: () => zn, makeAssetCreateTxnWithSuggestedParamsFromObject: () => Vn, makeAssetDestroyTxnWithSuggestedParams: () => Yn, makeAssetDestroyTxnWithSuggestedParamsFromObject: () => Jn, makeAssetFreezeTxnWithSuggestedParams: () => Xn, makeAssetFreezeTxnWithSuggestedParamsFromObject: () => Zn, makeAssetTransferTxnWithSuggestedParams: () => Qn, makeAssetTransferTxnWithSuggestedParamsFromObject: () => ei, makeBasicAccountTransactionSigner: () => mi, makeEmptyTransactionSigner: () => bi, makeKeyRegistrationTxnWithSuggestedParams: () => Wn, makeKeyRegistrationTxnWithSuggestedParamsFromObject: () => Kn, makeLogicSigAccountTransactionSigner: () => yi, makeMultiSigAccountTransactionSigner: () => wi, makePaymentTxnWithSuggestedParams: () => Nn, makePaymentTxnWithSuggestedParamsFromObject: () => Fn, masterDerivationKeyToMnemonic: () => Xs, mergeMultisigTransactions: () => hn, microalgosToAlgos: () => de, mnemonicFromSeed: () => Vs, mnemonicToMasterDerivationKey: () => Js, mnemonicToSecretKey: () => Hs, modelsv2: () => e2, multisigAddress: () => mn, secretKeyToMnemonic: () => Ys, seedFromMnemonic: () => Gs, signBid: () => ro, signBytes: () => so, signLogicSigTransaction: () => xn, signLogicSigTransactionObject: () => vn, signMultisigTransaction: () => pn, signTransaction: () => to, tealSign: () => En, tealSignFromProgram: () => Sn, verifyBytes: () => no, verifyMultisig: () => dn, verifyTealSign: () => Tn, waitForConfirmation: () => $s });
      var e2 = {};
      r.r(e2), r.d(e2, { Account: () => Ae, AccountApplicationResponse: () => _e, AccountAssetResponse: () => Ee, AccountParticipation: () => Te, AccountStateDelta: () => Se, Application: () => Re, ApplicationLocalState: () => ke, ApplicationParams: () => Ie, ApplicationStateSchema: () => Be, Asset: () => Ue, AssetHolding: () => Pe, AssetParams: () => je, BlockHashResponse: () => qe, BlockResponse: () => De, Box: () => $e, BoxDescriptor: () => Oe, BoxesResponse: () => Ce, BuildVersion: () => Le, CompileResponse: () => Me, DisassembleResponse: () => Ne, DryrunRequest: () => Fe, DryrunResponse: () => We, DryrunSource: () => Ke, DryrunState: () => ze, DryrunTxnResult: () => Ve, ErrorResponse: () => Ge, EvalDelta: () => He, EvalDeltaKeyValue: () => Ye, GetBlockTimeStampOffsetResponse: () => Je, GetSyncRoundResponse: () => Xe, KvDelta: () => Ze, LedgerStateDeltaForTransactionGroup: () => Qe, LightBlockHeaderProof: () => et, NodeStatusResponse: () => tt, PendingTransactionResponse: () => rt, PendingTransactionsResponse: () => st, PostTransactionsResponse: () => nt, SimulateRequest: () => it, SimulateRequestTransactionGroup: () => ot, SimulateResponse: () => at, SimulateTransactionGroupResult: () => ct, SimulateTransactionResult: () => ut, SimulationEvalOverrides: () => lt, StateProof: () => ht, StateProofMessage: () => dt, SupplyResponse: () => pt, TealKeyValue: () => ft, TealValue: () => gt, TransactionGroupLedgerStateDeltasForRoundResponse: () => mt, TransactionParametersResponse: () => yt, TransactionProofResponse: () => wt, Version: () => bt });
      var t2 = {};
      r.r(t2), r.d(t2, { Account: () => Ar, AccountParticipation: () => _r, AccountResponse: () => Er, AccountStateDelta: () => Tr, AccountsResponse: () => Sr, Application: () => Rr, ApplicationLocalState: () => kr, ApplicationLocalStatesResponse: () => Ir, ApplicationLogData: () => Br, ApplicationLogsResponse: () => Ur, ApplicationParams: () => Pr, ApplicationResponse: () => jr, ApplicationStateSchema: () => qr, ApplicationsResponse: () => Dr, Asset: () => $r, AssetBalancesResponse: () => Or, AssetHolding: () => Cr, AssetHoldingsResponse: () => Lr, AssetParams: () => Mr, AssetResponse: () => Nr, AssetsResponse: () => Fr, Block: () => Wr, BlockRewards: () => Kr, BlockUpgradeState: () => zr, BlockUpgradeVote: () => Vr, Box: () => Gr, BoxDescriptor: () => Hr, BoxesResponse: () => Yr, ErrorResponse: () => Jr, EvalDelta: () => Xr, EvalDeltaKeyValue: () => Zr, HashFactory: () => Qr, HealthCheck: () => es, IndexerStateProofMessage: () => ts, MerkleArrayProof: () => rs, MiniAssetHolding: () => ss, ParticipationUpdates: () => ns, StateProofFields: () => is, StateProofParticipant: () => os, StateProofReveal: () => as, StateProofSigSlot: () => cs, StateProofSignature: () => us, StateProofTracking: () => ls, StateProofVerifier: () => hs, StateSchema: () => ds, TealKeyValue: () => ps, TealValue: () => fs, Transaction: () => gs, TransactionApplication: () => ms, TransactionAssetConfig: () => ys, TransactionAssetFreeze: () => ws, TransactionAssetTransfer: () => bs, TransactionKeyreg: () => vs, TransactionPayment: () => xs, TransactionResponse: () => As, TransactionSignature: () => _s, TransactionSignatureLogicsig: () => Es, TransactionSignatureMultisig: () => Ts, TransactionSignatureMultisigSubsignature: () => Ss, TransactionStateProof: () => Rs, TransactionsResponse: () => ks });
      var n = {};
      r.r(n), r.d(n, { ABIAddressType: () => Ui, ABIArrayDynamicType: () => $i, ABIArrayStaticType: () => Di, ABIBoolType: () => Pi, ABIByteType: () => ji, ABIContract: () => Gi, ABIInterface: () => Hi, ABIMethod: () => zi, ABIReferenceType: () => Ni, ABIStringType: () => qi, ABITransactionType: () => Mi, ABITupleType: () => Oi, ABIType: () => ki, ABIUfixedType: () => Bi, ABIUintType: () => Ii, ADDR_BYTE_SIZE: () => Ai, ALGORAND_MIN_TX_FEE: () => te, Algodv2: () => ir, AtomicTransactionComposer: () => Zi, AtomicTransactionComposerStatus: () => Ji, DryrunResult: () => Mn, ERROR_INVALID_MICROALGOS: () => co, ERROR_MULTISIG_BAD_SENDER: () => ao, INVALID_MICROALGOS_ERROR_MSG: () => he, Indexer: () => Ds, IntDecoding: () => T, Kmd: () => or, LENGTH_ENCODE_BYTE_SIZE: () => Ti, LogicSig: () => wn, LogicSigAccount: () => bn, MAX_LEN: () => xi, MULTISIG_BAD_SENDER_ERROR_MSG: () => eo, OnApplicationComplete: () => ee, SINGLE_BOOL_SIZE: () => Ei, SINGLE_BYTE_SIZE: () => _i, SourceMap: () => In, Transaction: () => se, TransactionType: () => Q, abiCheckTransactionType: () => Wi, abiTypeIsReference: () => Ki, abiTypeIsTransaction: () => Fi, algosToMicroalgos: () => pe, appendSignMultisigTransaction: () => fn, appendSignRawMultisigSignature: () => gn, assignGroupID: () => en, bigIntToBytes: () => Os, bytesToBigInt: () => Cs, computeGroupID: () => Qs, createDryrun: () => Pn, createMultisigTransaction: () => cn, decodeAddress: () => F, decodeObj: () => oo, decodeSignedTransaction: () => ae, decodeUint64: () => B, decodeUnsignedTransaction: () => oe, encodeAddress: () => K, encodeObj: () => io, encodeUint64: () => I, encodeUnsignedSimulateTransaction: () => ne, encodeUnsignedTransaction: () => ie, generateAccount: () => Ls, getApplicationAddress: () => G, getMethodByName: () => Vi, indexerModels: () => t2, instantiateTxnIfNeeded: () => ce, isTransactionWithSigner: () => vi, isValidAddress: () => W, logicSigFromByte: () => An, makeApplicationCallTxnFromObject: () => gi, makeApplicationClearStateTxn: () => hi, makeApplicationClearStateTxnFromObject: () => di, makeApplicationCloseOutTxn: () => ui, makeApplicationCloseOutTxnFromObject: () => li, makeApplicationCreateTxn: () => ti, makeApplicationCreateTxnFromObject: () => ri, makeApplicationDeleteTxn: () => ii, makeApplicationDeleteTxnFromObject: () => oi, makeApplicationNoOpTxn: () => pi, makeApplicationNoOpTxnFromObject: () => fi, makeApplicationOptInTxn: () => ai, makeApplicationOptInTxnFromObject: () => ci, makeApplicationUpdateTxn: () => si, makeApplicationUpdateTxnFromObject: () => ni, makeAssetConfigTxnWithSuggestedParams: () => Gn, makeAssetConfigTxnWithSuggestedParamsFromObject: () => Hn, makeAssetCreateTxnWithSuggestedParams: () => zn, makeAssetCreateTxnWithSuggestedParamsFromObject: () => Vn, makeAssetDestroyTxnWithSuggestedParams: () => Yn, makeAssetDestroyTxnWithSuggestedParamsFromObject: () => Jn, makeAssetFreezeTxnWithSuggestedParams: () => Xn, makeAssetFreezeTxnWithSuggestedParamsFromObject: () => Zn, makeAssetTransferTxnWithSuggestedParams: () => Qn, makeAssetTransferTxnWithSuggestedParamsFromObject: () => ei, makeBasicAccountTransactionSigner: () => mi, makeEmptyTransactionSigner: () => bi, makeKeyRegistrationTxnWithSuggestedParams: () => Wn, makeKeyRegistrationTxnWithSuggestedParamsFromObject: () => Kn, makeLogicSigAccountTransactionSigner: () => yi, makeMultiSigAccountTransactionSigner: () => wi, makePaymentTxnWithSuggestedParams: () => Nn, makePaymentTxnWithSuggestedParamsFromObject: () => Fn, masterDerivationKeyToMnemonic: () => Xs, mergeMultisigTransactions: () => hn, microalgosToAlgos: () => de, mnemonicFromSeed: () => Vs, mnemonicToMasterDerivationKey: () => Js, mnemonicToSecretKey: () => Hs, modelsv2: () => e2, multisigAddress: () => mn, secretKeyToMnemonic: () => Ys, seedFromMnemonic: () => Gs, signBid: () => ro, signBytes: () => so, signLogicSigTransaction: () => xn, signLogicSigTransactionObject: () => vn, signMultisigTransaction: () => pn, signTransaction: () => to, tealSign: () => En, tealSignFromProgram: () => Sn, verifyBytes: () => no, verifyMultisig: () => dn, verifyTealSign: () => Tn, waitForConfirmation: () => $s });
      var i = r(486), o = r(765), a = r.n(o), c = r(757), u = r.n(c);
      function l(e3) {
        return u().sha512_256.array(e3);
      }
      function h(e3) {
        return a().sign.keyPair.fromSeed(e3);
      }
      function d(e3) {
        return e3 === a().sign.signatureLength;
      }
      function p(e3) {
        return a().sign.keyPair.fromSecretKey(e3);
      }
      function f(e3, t3) {
        return a().sign.detached(e3, t3);
      }
      function g(e3, t3) {
        return a().verify(e3, t3);
      }
      function m(e3, t3, r2) {
        return a().sign.detached.verify(e3, t3, r2);
      }
      const y = a().sign.publicKeyLength, w = (a().sign.secretKeyLength, 32), b = 32;
      var v, x = r(267), A = r.n(x), _ = r(360), E = r.n(_);
      !function(e3) {
        e3.DEFAULT = "default", e3.SAFE = "safe", e3.MIXED = "mixed", e3.BIGINT = "bigint";
      }(v || (v = {}));
      const T = v, S = E()({ useNativeBigInt: true, strict: true });
      function R(e3, t3) {
        return e3.length === t3.length && Array.from(e3).every((e4, r2) => e4 === t3[r2]);
      }
      function k(...e3) {
        const t3 = e3.reduce((e4, t4) => e4 + t4.length, 0), r2 = new Uint8Array(t3);
        let s2 = 0;
        for (let t4 = 0; t4 < e3.length; t4++)
          r2.set(e3[t4], s2), s2 += e3[t4].length;
        return r2;
      }
      function I(e3) {
        if ("bigint" != typeof e3 && !Number.isInteger(e3) || e3 < 0 || e3 > BigInt("0xffffffffffffffff"))
          throw new Error("Input is not a 64-bit unsigned integer");
        const t3 = new Uint8Array(8);
        return new DataView(t3.buffer).setBigUint64(0, BigInt(e3)), t3;
      }
      function B(e3, t3 = "safe") {
        if ("safe" !== t3 && "mixed" !== t3 && "bigint" !== t3)
          throw new Error(`Unknown decodingMode option: ${t3}`);
        if (0 === e3.byteLength || e3.byteLength > 8)
          throw new Error(`Data has unacceptable length. Expected length is between 1 and 8, got ${e3.byteLength}`);
        const r2 = k(new Uint8Array(8 - e3.byteLength), e3), s2 = new DataView(r2.buffer).getBigUint64(0), n2 = s2 > BigInt(Number.MAX_SAFE_INTEGER);
        if ("safe" === t3) {
          if (n2)
            throw new Error(`Integer exceeds maximum safe integer: ${s2.toString()}. Try decoding with "mixed" or "safe" decodingMode.`);
          return Number(s2);
        }
        return "mixed" !== t3 || n2 ? s2 : Number(s2);
      }
      const U = 36, P = 4, j = 58, q = new Uint8Array([77, 117, 108, 116, 105, 115, 105, 103, 65, 100, 100, 114]), D = i.lW.from("appID"), $ = "address seems to be malformed", O = "wrong checksum for address", C = "invalid multisig version", L = "bad multisig threshold", M = "bad multisig public key - wrong length", N = "nacl public key length is not 32 bytes";
      function F(e3) {
        if ("string" != typeof e3 || e3.length !== j)
          throw new Error($);
        const t3 = A().decode.asBytes(e3.toString());
        if (t3.length !== U)
          throw new Error($);
        const r2 = new Uint8Array(t3.slice(0, U - P)), s2 = new Uint8Array(t3.slice(y, U));
        if (!R(l(r2).slice(w - P, w), s2))
          throw new Error(O);
        return { publicKey: r2, checksum: s2 };
      }
      function W(e3) {
        try {
          F(e3);
        } catch (e4) {
          return false;
        }
        return true;
      }
      function K(e3) {
        const t3 = l(e3).slice(y - P, y);
        return A().encode(k(e3, t3)).toString().slice(0, j);
      }
      function z({ version: e3, threshold: t3, pks: r2 }) {
        if (1 !== e3 || e3 > 255 || e3 < 0)
          throw new Error(C);
        if (0 === t3 || 0 === r2.length || t3 > r2.length || t3 > 255)
          throw new Error(L);
        const s2 = U - P;
        if (s2 !== y)
          throw new Error(N);
        const n2 = new Uint8Array(q.length + 2 + s2 * r2.length);
        n2.set(q, 0), n2.set([e3], q.length), n2.set([t3], q.length + 1);
        for (let e4 = 0; e4 < r2.length; e4++) {
          if (r2[e4].length !== s2)
            throw new Error(M);
          n2.set(r2[e4], q.length + 2 + e4 * s2);
        }
        return new Uint8Array(l(n2));
      }
      function V({ version: e3, threshold: t3, addrs: r2 }) {
        return K(z({ version: e3, threshold: t3, pks: r2.map((e4) => F(e4).publicKey) }));
      }
      function G(e3) {
        const t3 = l(k(D, I(e3)));
        return K(new Uint8Array(t3));
      }
      var H = r(406);
      const Y = "The object contains empty or 0 values. First empty or 0 value encountered during encoding: ";
      function J(e3) {
        return H.encode(e3, { sortKeys: true });
      }
      function X(e3) {
        const t3 = function(e4) {
          for (const t4 in e4)
            if (Object.prototype.hasOwnProperty.call(e4, t4) && (!e4[t4] || 0 === e4[t4].length))
              return { containsEmpty: true, firstEmptyKey: t4 };
          return { containsEmpty: false, firstEmptyKey: void 0 };
        }(e3);
        if (t3.containsEmpty)
          throw new Error(Y + t3.firstEmptyKey);
        return J(e3);
      }
      function Z(e3) {
        return H.decode(e3);
      }
      var Q, ee;
      !function(e3) {
        e3.pay = "pay", e3.keyreg = "keyreg", e3.acfg = "acfg", e3.axfer = "axfer", e3.afrz = "afrz", e3.appl = "appl", e3.stpf = "stpf";
      }(Q || (Q = {})), function(e3) {
        e3[e3.NoOpOC = 0] = "NoOpOC", e3[e3.OptInOC = 1] = "OptInOC", e3[e3.CloseOutOC = 2] = "CloseOutOC", e3[e3.ClearStateOC = 3] = "ClearStateOC", e3[e3.UpdateApplicationOC = 4] = "UpdateApplicationOC", e3[e3.DeleteApplicationOC = 5] = "DeleteApplicationOC";
      }(ee || (ee = {}));
      const te = 1e3;
      function re(e3, t3, r2) {
        if (null == e3)
          return;
        let s2;
        if ("string" == typeof e3 ? s2 = i.lW.from(e3, "base64") : e3.constructor === Uint8Array ? s2 = i.lW.from(e3) : i.lW.isBuffer(e3) && (s2 = e3), null == s2 || s2.byteLength !== r2)
          throw Error(`${t3} must be a ${r2} byte Uint8Array or Buffer or base64 string.`);
        return s2;
      }
      class se {
        constructor({ ...e3 }) {
          this.name = "Transaction", this.tag = i.lW.from("TX");
          const t3 = { type: Q.pay, flatFee: false, nonParticipation: false };
          if (void 0 === e3.type && (e3.type = t3.type), void 0 === e3.flatFee && (e3.flatFee = t3.flatFee), e3.type === Q.keyreg && void 0 !== e3.voteKey && void 0 === e3.nonParticipation && (e3.nonParticipation = t3.nonParticipation), void 0 !== e3.suggestedParams) {
            const t4 = e3;
            t4.genesisHash = t4.suggestedParams.genesisHash, t4.fee = t4.suggestedParams.fee, void 0 !== t4.suggestedParams.flatFee && (t4.flatFee = t4.suggestedParams.flatFee), t4.firstRound = t4.suggestedParams.firstRound, t4.lastRound = t4.suggestedParams.lastRound, t4.genesisID = t4.suggestedParams.genesisID;
          }
          const r2 = e3;
          if (r2.from = F(r2.from), void 0 !== r2.to && (r2.to = F(r2.to)), void 0 !== r2.closeRemainderTo && (r2.closeRemainderTo = F(r2.closeRemainderTo)), void 0 !== r2.assetManager && (r2.assetManager = F(r2.assetManager)), void 0 !== r2.assetReserve && (r2.assetReserve = F(r2.assetReserve)), void 0 !== r2.assetFreeze && (r2.assetFreeze = F(r2.assetFreeze)), void 0 !== r2.assetClawback && (r2.assetClawback = F(r2.assetClawback)), void 0 !== r2.assetRevocationTarget && (r2.assetRevocationTarget = F(r2.assetRevocationTarget)), void 0 !== r2.freezeAccount && (r2.freezeAccount = F(r2.freezeAccount)), void 0 !== r2.reKeyTo && (r2.reKeyTo = F(r2.reKeyTo)), void 0 === r2.genesisHash)
            throw Error("genesis hash must be specified and in a base64 string.");
          if (r2.genesisHash = i.lW.from(r2.genesisHash, "base64"), void 0 !== r2.amount && (!(Number.isSafeInteger(r2.amount) || "bigint" == typeof r2.amount && r2.amount <= BigInt("0xffffffffffffffff")) || r2.amount < 0))
            throw Error("Amount must be a positive number and smaller than 2^64-1. If the number is larger than 2^53-1, use bigint.");
          if (!Number.isSafeInteger(r2.fee) || r2.fee < 0)
            throw Error("fee must be a positive number and smaller than 2^53-1");
          if (!Number.isSafeInteger(r2.firstRound) || r2.firstRound < 0)
            throw Error("firstRound must be a positive number");
          if (!Number.isSafeInteger(r2.lastRound) || r2.lastRound < 0)
            throw Error("lastRound must be a positive number");
          if (void 0 !== r2.extraPages && (!Number.isInteger(r2.extraPages) || r2.extraPages < 0 || r2.extraPages > 3))
            throw Error("extraPages must be an Integer between and including 0 to 3");
          if (void 0 !== r2.assetTotal && (!(Number.isSafeInteger(r2.assetTotal) || "bigint" == typeof r2.assetTotal && r2.assetTotal <= BigInt("0xffffffffffffffff")) || r2.assetTotal < 0))
            throw Error("Total asset issuance must be a positive number and smaller than 2^64-1. If the number is larger than 2^53-1, use bigint.");
          if (void 0 !== r2.assetDecimals && (!Number.isSafeInteger(r2.assetDecimals) || r2.assetDecimals < 0 || r2.assetDecimals > 19))
            throw Error(`assetDecimals must be a positive number and smaller than ${19 .toString()}`);
          if (void 0 !== r2.assetIndex && (!Number.isSafeInteger(r2.assetIndex) || r2.assetIndex < 0))
            throw Error("Asset index must be a positive number and smaller than 2^53-1");
          if (void 0 !== r2.appIndex && (!Number.isSafeInteger(r2.appIndex) || r2.appIndex < 0))
            throw Error("Application index must be a positive number and smaller than 2^53-1");
          if (void 0 !== r2.appLocalInts && (!Number.isSafeInteger(r2.appLocalInts) || r2.appLocalInts < 0))
            throw Error("Application local ints count must be a positive number and smaller than 2^53-1");
          if (void 0 !== r2.appLocalByteSlices && (!Number.isSafeInteger(r2.appLocalByteSlices) || r2.appLocalByteSlices < 0))
            throw Error("Application local byte slices count must be a positive number and smaller than 2^53-1");
          if (void 0 !== r2.appGlobalInts && (!Number.isSafeInteger(r2.appGlobalInts) || r2.appGlobalInts < 0))
            throw Error("Application global ints count must be a positive number and smaller than 2^53-1");
          if (void 0 !== r2.appGlobalByteSlices && (!Number.isSafeInteger(r2.appGlobalByteSlices) || r2.appGlobalByteSlices < 0))
            throw Error("Application global byte slices count must be a positive number and smaller than 2^53-1");
          if (void 0 !== r2.appApprovalProgram && r2.appApprovalProgram.constructor !== Uint8Array)
            throw Error("appApprovalProgram must be a Uint8Array.");
          if (void 0 !== r2.appClearProgram && r2.appClearProgram.constructor !== Uint8Array)
            throw Error("appClearProgram must be a Uint8Array.");
          if (void 0 !== r2.appArgs) {
            if (!Array.isArray(r2.appArgs))
              throw Error("appArgs must be an Array of Uint8Array.");
            r2.appArgs = r2.appArgs.slice(), r2.appArgs.forEach((e4) => {
              if (e4.constructor !== Uint8Array)
                throw Error("each element of AppArgs must be a Uint8Array.");
            });
          } else
            r2.appArgs = [];
          if (void 0 !== r2.appAccounts) {
            if (!Array.isArray(r2.appAccounts))
              throw Error("appAccounts must be an Array of addresses.");
            r2.appAccounts = r2.appAccounts.map((e4) => F(e4));
          }
          if (void 0 !== r2.appForeignApps) {
            if (!Array.isArray(r2.appForeignApps))
              throw Error("appForeignApps must be an Array of integers.");
            r2.appForeignApps = r2.appForeignApps.slice(), r2.appForeignApps.forEach((e4) => {
              if (!Number.isSafeInteger(e4) || e4 < 0)
                throw Error("each foreign application index must be a positive number and smaller than 2^53-1");
            });
          }
          if (void 0 !== r2.appForeignAssets) {
            if (!Array.isArray(r2.appForeignAssets))
              throw Error("appForeignAssets must be an Array of integers.");
            r2.appForeignAssets = r2.appForeignAssets.slice(), r2.appForeignAssets.forEach((e4) => {
              if (!Number.isSafeInteger(e4) || e4 < 0)
                throw Error("each foreign asset index must be a positive number and smaller than 2^53-1");
            });
          }
          if (void 0 !== r2.boxes) {
            if (!Array.isArray(r2.boxes))
              throw Error("boxes must be an Array of BoxReference.");
            r2.boxes = r2.boxes.slice(), r2.boxes.forEach((e4) => {
              if (!Number.isSafeInteger(e4.appIndex) || e4.name.constructor !== Uint8Array)
                throw Error("box app index must be a number and name must be an Uint8Array.");
            });
          }
          if (void 0 !== r2.assetMetadataHash && 0 !== r2.assetMetadataHash.length) {
            if ("string" == typeof r2.assetMetadataHash && (r2.assetMetadataHash = new Uint8Array(i.lW.from(r2.assetMetadataHash))), r2.assetMetadataHash.constructor !== Uint8Array || 32 !== r2.assetMetadataHash.byteLength)
              throw Error("assetMetadataHash must be a 32 byte Uint8Array or string.");
            r2.assetMetadataHash.every((e4) => 0 === e4) && (r2.assetMetadataHash = void 0);
          } else
            r2.assetMetadataHash = void 0;
          if (void 0 !== r2.note) {
            if (r2.note.constructor !== Uint8Array)
              throw Error("note must be a Uint8Array.");
          } else
            r2.note = new Uint8Array(0);
          if (void 0 !== r2.lease) {
            if (r2.lease.constructor !== Uint8Array)
              throw Error("lease must be a Uint8Array.");
            if (32 !== r2.lease.length)
              throw Error(`lease must be of length ${32 .toString()}.`);
            r2.lease.every((e4) => 0 === e4) && (r2.lease = new Uint8Array(0));
          } else
            r2.lease = new Uint8Array(0);
          if (r2.voteKey = re(r2.voteKey, "voteKey", 32), r2.selectionKey = re(r2.selectionKey, "selectionKey", 32), r2.stateProofKey = re(r2.stateProofKey, "stateProofKey", 64), r2.nonParticipation && (r2.voteKey || r2.selectionKey || r2.voteFirst || r2.stateProofKey || r2.voteLast || r2.voteKeyDilution))
            throw new Error("nonParticipation is true but participation params are present.");
          if (!r2.nonParticipation && (r2.voteKey || r2.selectionKey || r2.stateProofKey || r2.voteFirst || r2.voteLast || r2.voteKeyDilution) && !(r2.voteKey && r2.selectionKey && r2.voteFirst && r2.voteLast && r2.voteKeyDilution))
            throw new Error("online key registration missing at least one of the following fields: voteKey, selectionKey, voteFirst, voteLast, voteKeyDilution");
          if (delete r2.suggestedParams, Object.assign(this, function(e4) {
            const t4 = { ...e4 };
            return Object.keys(t4).forEach((e5) => {
              void 0 === t4[e5] && delete t4[e5];
            }), t4;
          }(r2)), r2.flatFee || (this.fee *= this.estimateSize(), this.fee < te && (this.fee = te)), this.group = void 0, void 0 !== r2.stateProofType && (!Number.isSafeInteger(r2.stateProofType) || r2.stateProofType < 0))
            throw Error("State Proof type must be a positive number and smaller than 2^53-1");
          if (void 0 !== r2.stateProofMessage) {
            if (r2.stateProofMessage.constructor !== Uint8Array)
              throw Error("stateProofMessage must be a Uint8Array.");
          } else
            r2.stateProofMessage = new Uint8Array(0);
          if (void 0 !== r2.stateProof) {
            if (r2.stateProof.constructor !== Uint8Array)
              throw Error("stateProof must be a Uint8Array.");
          } else
            r2.stateProof = new Uint8Array(0);
        }
        get_obj_for_encoding() {
          if ("pay" === this.type) {
            const e4 = { amt: this.amount, fee: this.fee, fv: this.firstRound, lv: this.lastRound, note: i.lW.from(this.note), snd: i.lW.from(this.from.publicKey), type: "pay", gen: this.genesisID, gh: this.genesisHash, lx: i.lW.from(this.lease), grp: this.group };
            return void 0 !== this.closeRemainderTo && "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ" !== K(this.closeRemainderTo.publicKey) && (e4.close = i.lW.from(this.closeRemainderTo.publicKey)), void 0 !== this.reKeyTo && (e4.rekey = i.lW.from(this.reKeyTo.publicKey)), void 0 !== this.to && (e4.rcv = i.lW.from(this.to.publicKey)), e4.note.length || delete e4.note, e4.amt || delete e4.amt, e4.fee || delete e4.fee, e4.fv || delete e4.fv, e4.gen || delete e4.gen, void 0 === e4.grp && delete e4.grp, e4.lx.length || delete e4.lx, e4.rekey || delete e4.rekey, e4;
          }
          if ("keyreg" === this.type) {
            const e4 = { fee: this.fee, fv: this.firstRound, lv: this.lastRound, note: i.lW.from(this.note), snd: i.lW.from(this.from.publicKey), type: this.type, gen: this.genesisID, gh: this.genesisHash, lx: i.lW.from(this.lease), grp: this.group, votekey: this.voteKey, selkey: this.selectionKey, sprfkey: this.stateProofKey, votefst: this.voteFirst, votelst: this.voteLast, votekd: this.voteKeyDilution };
            return e4.note.length || delete e4.note, e4.lx.length || delete e4.lx, e4.fee || delete e4.fee, e4.fv || delete e4.fv, e4.gen || delete e4.gen, void 0 === e4.grp && delete e4.grp, void 0 !== this.reKeyTo && (e4.rekey = i.lW.from(this.reKeyTo.publicKey)), this.nonParticipation && (e4.nonpart = true), e4.selkey || delete e4.selkey, e4.votekey || delete e4.votekey, e4.sprfkey || delete e4.sprfkey, e4.votefst || delete e4.votefst, e4.votelst || delete e4.votelst, e4.votekd || delete e4.votekd, e4;
          }
          if ("acfg" === this.type) {
            const e4 = { fee: this.fee, fv: this.firstRound, lv: this.lastRound, note: i.lW.from(this.note), snd: i.lW.from(this.from.publicKey), type: this.type, gen: this.genesisID, gh: this.genesisHash, lx: i.lW.from(this.lease), grp: this.group, caid: this.assetIndex, apar: { t: this.assetTotal, df: this.assetDefaultFrozen, dc: this.assetDecimals } };
            return void 0 !== this.assetManager && (e4.apar.m = i.lW.from(this.assetManager.publicKey)), void 0 !== this.assetReserve && (e4.apar.r = i.lW.from(this.assetReserve.publicKey)), void 0 !== this.assetFreeze && (e4.apar.f = i.lW.from(this.assetFreeze.publicKey)), void 0 !== this.assetClawback && (e4.apar.c = i.lW.from(this.assetClawback.publicKey)), void 0 !== this.assetName && (e4.apar.an = this.assetName), void 0 !== this.assetUnitName && (e4.apar.un = this.assetUnitName), void 0 !== this.assetURL && (e4.apar.au = this.assetURL), void 0 !== this.assetMetadataHash && (e4.apar.am = i.lW.from(this.assetMetadataHash)), e4.note.length || delete e4.note, e4.lx.length || delete e4.lx, e4.amt || delete e4.amt, e4.fee || delete e4.fee, e4.fv || delete e4.fv, e4.gen || delete e4.gen, void 0 !== this.reKeyTo && (e4.rekey = i.lW.from(this.reKeyTo.publicKey)), e4.caid || delete e4.caid, e4.apar.t || e4.apar.un || e4.apar.an || e4.apar.df || e4.apar.m || e4.apar.r || e4.apar.f || e4.apar.c || e4.apar.au || e4.apar.am || e4.apar.dc ? (e4.apar.t || delete e4.apar.t, e4.apar.dc || delete e4.apar.dc, e4.apar.un || delete e4.apar.un, e4.apar.an || delete e4.apar.an, e4.apar.df || delete e4.apar.df, e4.apar.m || delete e4.apar.m, e4.apar.r || delete e4.apar.r, e4.apar.f || delete e4.apar.f, e4.apar.c || delete e4.apar.c, e4.apar.au || delete e4.apar.au, e4.apar.am || delete e4.apar.am) : delete e4.apar, void 0 === e4.grp && delete e4.grp, e4;
          }
          if ("axfer" === this.type) {
            const e4 = { aamt: this.amount, fee: this.fee, fv: this.firstRound, lv: this.lastRound, note: i.lW.from(this.note), snd: i.lW.from(this.from.publicKey), arcv: i.lW.from(this.to.publicKey), type: this.type, gen: this.genesisID, gh: this.genesisHash, lx: i.lW.from(this.lease), grp: this.group, xaid: this.assetIndex };
            return void 0 !== this.closeRemainderTo && (e4.aclose = i.lW.from(this.closeRemainderTo.publicKey)), void 0 !== this.assetRevocationTarget && (e4.asnd = i.lW.from(this.assetRevocationTarget.publicKey)), e4.note.length || delete e4.note, e4.lx.length || delete e4.lx, e4.aamt || delete e4.aamt, e4.amt || delete e4.amt, e4.fee || delete e4.fee, e4.fv || delete e4.fv, e4.gen || delete e4.gen, void 0 === e4.grp && delete e4.grp, e4.aclose || delete e4.aclose, e4.asnd || delete e4.asnd, e4.rekey || delete e4.rekey, void 0 !== this.reKeyTo && (e4.rekey = i.lW.from(this.reKeyTo.publicKey)), e4;
          }
          if ("afrz" === this.type) {
            const e4 = { fee: this.fee, fv: this.firstRound, lv: this.lastRound, note: i.lW.from(this.note), snd: i.lW.from(this.from.publicKey), type: this.type, gen: this.genesisID, gh: this.genesisHash, lx: i.lW.from(this.lease), grp: this.group, faid: this.assetIndex, afrz: this.freezeState };
            return void 0 !== this.freezeAccount && (e4.fadd = i.lW.from(this.freezeAccount.publicKey)), e4.note.length || delete e4.note, e4.lx.length || delete e4.lx, e4.amt || delete e4.amt, e4.fee || delete e4.fee, e4.fv || delete e4.fv, e4.gen || delete e4.gen, e4.afrz || delete e4.afrz, void 0 === e4.grp && delete e4.grp, void 0 !== this.reKeyTo && (e4.rekey = i.lW.from(this.reKeyTo.publicKey)), e4;
          }
          if ("appl" === this.type) {
            const s2 = { fee: this.fee, fv: this.firstRound, lv: this.lastRound, note: i.lW.from(this.note), snd: i.lW.from(this.from.publicKey), type: this.type, gen: this.genesisID, gh: this.genesisHash, lx: i.lW.from(this.lease), grp: this.group, apid: this.appIndex, apan: this.appOnComplete, apls: { nui: this.appLocalInts, nbs: this.appLocalByteSlices }, apgs: { nui: this.appGlobalInts, nbs: this.appGlobalByteSlices }, apfa: this.appForeignApps, apas: this.appForeignAssets, apep: this.extraPages, apbx: (e3 = this.boxes, t3 = this.appForeignApps, r2 = this.appIndex, null == e3 ? [] : e3.map((e4) => function(e5, t4, r3) {
              const s3 = e5.appIndex, n2 = e5.name, i2 = 0 === s3 || s3 === r3;
              let o2 = 0;
              if (null != t4 && (o2 = t4.indexOf(s3) + 1), 0 === o2 && !i2)
                throw new Error(`Box ref with appId ${s3} not in foreign-apps`);
              return { i: o2, n: n2 };
            }(e4, t3, r2))) };
            void 0 !== this.reKeyTo && (s2.rekey = i.lW.from(this.reKeyTo.publicKey)), void 0 !== this.appApprovalProgram && (s2.apap = i.lW.from(this.appApprovalProgram)), void 0 !== this.appClearProgram && (s2.apsu = i.lW.from(this.appClearProgram)), void 0 !== this.appArgs && (s2.apaa = this.appArgs.map((e4) => i.lW.from(e4))), void 0 !== this.appAccounts && (s2.apat = this.appAccounts.map((e4) => i.lW.from(e4.publicKey))), s2.note.length || delete s2.note, s2.lx.length || delete s2.lx, s2.amt || delete s2.amt, s2.fee || delete s2.fee, s2.fv || delete s2.fv, s2.gen || delete s2.gen, s2.apid || delete s2.apid, s2.apls.nui || delete s2.apls.nui, s2.apls.nbs || delete s2.apls.nbs, s2.apls.nui || s2.apls.nbs || delete s2.apls, s2.apgs.nui || delete s2.apgs.nui, s2.apgs.nbs || delete s2.apgs.nbs, s2.apaa && s2.apaa.length || delete s2.apaa, s2.apgs.nui || s2.apgs.nbs || delete s2.apgs, s2.apap || delete s2.apap, s2.apsu || delete s2.apsu, s2.apan || delete s2.apan, s2.apfa && s2.apfa.length || delete s2.apfa, s2.apas && s2.apas.length || delete s2.apas;
            for (const e4 of s2.apbx)
              e4.i || delete e4.i, e4.n && e4.n.length || delete e4.n;
            return s2.apbx && s2.apbx.length || delete s2.apbx, s2.apat && s2.apat.length || delete s2.apat, s2.apep || delete s2.apep, void 0 === s2.grp && delete s2.grp, s2;
          }
          var e3, t3, r2;
          if ("stpf" === this.type) {
            const e4 = { fee: this.fee, fv: this.firstRound, lv: this.lastRound, note: i.lW.from(this.note), snd: i.lW.from(this.from.publicKey), type: this.type, gen: this.genesisID, gh: this.genesisHash, lx: i.lW.from(this.lease), sptype: this.stateProofType, spmsg: i.lW.from(this.stateProofMessage), sp: i.lW.from(this.stateProof) };
            return e4.sptype || delete e4.sptype, e4.note.length || delete e4.note, e4.lx.length || delete e4.lx, e4.amt || delete e4.amt, e4.fee || delete e4.fee, e4.fv || delete e4.fv, e4.gen || delete e4.gen, e4.apid || delete e4.apid, e4.apaa && e4.apaa.length || delete e4.apaa, e4.apap || delete e4.apap, e4.apsu || delete e4.apsu, e4.apan || delete e4.apan, e4.apfa && e4.apfa.length || delete e4.apfa, e4.apas && e4.apas.length || delete e4.apas, e4.apat && e4.apat.length || delete e4.apat, e4.apep || delete e4.apep, void 0 === e4.grp && delete e4.grp, e4;
          }
        }
        static from_obj_for_encoding(e3) {
          const t3 = Object.create(this.prototype);
          if (t3.name = "Transaction", t3.tag = i.lW.from("TX"), t3.genesisID = e3.gen, t3.genesisHash = i.lW.from(e3.gh), (r2 = e3.type) !== Q.pay && r2 !== Q.keyreg && r2 !== Q.acfg && r2 !== Q.axfer && r2 !== Q.afrz && r2 !== Q.appl && r2 !== Q.stpf)
            throw new Error(`Unrecognized transaction type: ${e3.type}`);
          var r2;
          return t3.type = e3.type, t3.fee = e3.fee, t3.firstRound = e3.fv, t3.lastRound = e3.lv, t3.note = new Uint8Array(e3.note), t3.lease = new Uint8Array(e3.lx), t3.from = F(K(new Uint8Array(e3.snd))), void 0 !== e3.grp && (t3.group = i.lW.from(e3.grp)), void 0 !== e3.rekey && (t3.reKeyTo = F(K(new Uint8Array(e3.rekey)))), "pay" === e3.type ? (t3.amount = e3.amt, t3.to = F(K(new Uint8Array(e3.rcv))), void 0 !== e3.close && (t3.closeRemainderTo = F(K(e3.close)))) : "keyreg" === e3.type ? (void 0 !== e3.votekey && (t3.voteKey = i.lW.from(e3.votekey)), void 0 !== e3.selkey && (t3.selectionKey = i.lW.from(e3.selkey)), void 0 !== e3.sprfkey && (t3.stateProofKey = i.lW.from(e3.sprfkey)), void 0 !== e3.votekd && (t3.voteKeyDilution = e3.votekd), void 0 !== e3.votefst && (t3.voteFirst = e3.votefst), void 0 !== e3.votelst && (t3.voteLast = e3.votelst), void 0 !== e3.nonpart && (t3.nonParticipation = e3.nonpart)) : "acfg" === e3.type ? (void 0 !== e3.caid && (t3.assetIndex = e3.caid), void 0 !== e3.apar && (t3.assetTotal = e3.apar.t, t3.assetDefaultFrozen = e3.apar.df, void 0 !== e3.apar.dc && (t3.assetDecimals = e3.apar.dc), void 0 !== e3.apar.m && (t3.assetManager = F(K(new Uint8Array(e3.apar.m)))), void 0 !== e3.apar.r && (t3.assetReserve = F(K(new Uint8Array(e3.apar.r)))), void 0 !== e3.apar.f && (t3.assetFreeze = F(K(new Uint8Array(e3.apar.f)))), void 0 !== e3.apar.c && (t3.assetClawback = F(K(new Uint8Array(e3.apar.c)))), void 0 !== e3.apar.un && (t3.assetUnitName = e3.apar.un), void 0 !== e3.apar.an && (t3.assetName = e3.apar.an), void 0 !== e3.apar.au && (t3.assetURL = e3.apar.au), void 0 !== e3.apar.am && (t3.assetMetadataHash = e3.apar.am))) : "axfer" === e3.type ? (void 0 !== e3.xaid && (t3.assetIndex = e3.xaid), void 0 !== e3.aamt && (t3.amount = e3.aamt), void 0 !== e3.aclose && (t3.closeRemainderTo = F(K(new Uint8Array(e3.aclose)))), void 0 !== e3.asnd && (t3.assetRevocationTarget = F(K(new Uint8Array(e3.asnd)))), t3.to = F(K(new Uint8Array(e3.arcv)))) : "afrz" === e3.type ? (void 0 !== e3.afrz && (t3.freezeState = e3.afrz), void 0 !== e3.faid && (t3.assetIndex = e3.faid), t3.freezeAccount = F(K(new Uint8Array(e3.fadd)))) : "appl" === e3.type ? (void 0 !== e3.apid && (t3.appIndex = e3.apid), void 0 !== e3.apan && (t3.appOnComplete = e3.apan), void 0 !== e3.apls && (void 0 !== e3.apls.nui && (t3.appLocalInts = e3.apls.nui), void 0 !== e3.apls.nbs && (t3.appLocalByteSlices = e3.apls.nbs)), void 0 !== e3.apgs && (void 0 !== e3.apgs.nui && (t3.appGlobalInts = e3.apgs.nui), void 0 !== e3.apgs.nbs && (t3.appGlobalByteSlices = e3.apgs.nbs)), void 0 !== e3.apep && (t3.extraPages = e3.apep), void 0 !== e3.apap && (t3.appApprovalProgram = new Uint8Array(e3.apap)), void 0 !== e3.apsu && (t3.appClearProgram = new Uint8Array(e3.apsu)), void 0 !== e3.apaa && (t3.appArgs = e3.apaa.map((e4) => new Uint8Array(e4))), void 0 !== e3.apat && (t3.appAccounts = e3.apat.map((e4) => F(K(new Uint8Array(e4))))), void 0 !== e3.apfa && (t3.appForeignApps = e3.apfa), void 0 !== e3.apas && (t3.appForeignAssets = e3.apas), void 0 !== e3.apbx && (t3.boxes = e3.apbx.map((e4) => ({ appIndex: e4.i ? t3.appForeignApps[e4.i - 1] : 0, name: e4.n })))) : "stpf" === e3.type && (void 0 !== e3.sptype && (t3.stateProofType = e3.sptype), void 0 !== e3.sp && (t3.stateProof = e3.sp), void 0 !== e3.spmsg && (t3.stateProofMessage = e3.spmsg)), t3;
        }
        estimateSize() {
          return this.toByte().length + 75;
        }
        bytesToSign() {
          const e3 = this.toByte();
          return i.lW.from(k(this.tag, e3));
        }
        toByte() {
          return X(this.get_obj_for_encoding());
        }
        rawSignTxn(e3) {
          const t3 = f(this.bytesToSign(), e3);
          return i.lW.from(t3);
        }
        signTxn(e3) {
          const t3 = { sig: this.rawSignTxn(e3), txn: this.get_obj_for_encoding() }, r2 = p(e3).publicKey;
          return K(r2) !== K(this.from.publicKey) && (t3.sgnr = i.lW.from(r2)), new Uint8Array(X(t3));
        }
        attachSignature(e3, t3) {
          if (!d(t3.length))
            throw new Error("Invalid signature length");
          const r2 = { sig: i.lW.from(t3), txn: this.get_obj_for_encoding() };
          if (e3 !== K(this.from.publicKey)) {
            const t4 = F(e3).publicKey;
            r2.sgnr = i.lW.from(t4);
          }
          return new Uint8Array(X(r2));
        }
        rawTxID() {
          const e3 = this.toByte(), t3 = i.lW.from(k(this.tag, e3));
          return i.lW.from(l(t3));
        }
        txID() {
          const e3 = this.rawTxID();
          return A().encode(e3).slice(0, 52);
        }
        addLease(e3, t3 = 0) {
          let r2;
          if (void 0 !== e3) {
            if (e3.constructor !== Uint8Array)
              throw Error("lease must be a Uint8Array.");
            if (32 !== e3.length)
              throw Error(`lease must be of length ${32 .toString()}.`);
            r2 = new Uint8Array(e3);
          } else
            r2 = new Uint8Array(0);
          this.lease = r2, 0 !== t3 && (this.fee += 37 * t3);
        }
        addRekey(e3, t3 = 0) {
          void 0 !== e3 && (this.reKeyTo = F(e3)), 0 !== t3 && (this.fee += 37 * t3);
        }
        _getDictForDisplay() {
          const e3 = { ...this };
          return e3.tag = e3.tag.toString(), e3.from = K(e3.from.publicKey), void 0 !== e3.to && (e3.to = K(e3.to.publicKey)), void 0 !== e3.freezeAccount && (e3.freezeAccount = K(e3.freezeAccount.publicKey)), void 0 !== e3.closeRemainderTo && (e3.closeRemainderTo = K(e3.closeRemainderTo.publicKey)), void 0 !== e3.assetManager && (e3.assetManager = K(e3.assetManager.publicKey)), void 0 !== e3.assetReserve && (e3.assetReserve = K(e3.assetReserve.publicKey)), void 0 !== e3.assetFreeze && (e3.assetFreeze = K(e3.assetFreeze.publicKey)), void 0 !== e3.assetClawback && (e3.assetClawback = K(e3.assetClawback.publicKey)), void 0 !== e3.assetRevocationTarget && (e3.assetRevocationTarget = K(e3.assetRevocationTarget.publicKey)), void 0 !== e3.reKeyTo && (e3.reKeyTo = K(e3.reKeyTo.publicKey)), e3.genesisHash = e3.genesisHash.toString("base64"), e3;
        }
        prettyPrint() {
          console.log(this._getDictForDisplay());
        }
        toString() {
          return JSON.stringify(this._getDictForDisplay());
        }
      }
      function ne(e3) {
        return X({ txn: e3.get_obj_for_encoding() });
      }
      function ie(e3) {
        return X(e3.get_obj_for_encoding());
      }
      function oe(e3) {
        const t3 = Z(e3);
        return se.from_obj_for_encoding(t3);
      }
      function ae(e3) {
        const t3 = Z(e3);
        return { ...t3, txn: se.from_obj_for_encoding(t3.txn) };
      }
      function ce(e3) {
        return e3 instanceof se ? e3 : new se(e3);
      }
      class ue {
        constructor({ bidderKey: e3, bidAmount: t3, bidID: r2, auctionKey: s2, auctionID: n2, maxPrice: o2 }) {
          this.name = "Bid", this.tag = i.lW.from([97, 66]);
          const a2 = F(e3), c2 = F(s2);
          if (!Number.isSafeInteger(t3) || t3 < 0)
            throw Error("Bid amount must be positive and 2^53-1");
          if (!Number.isSafeInteger(r2) || r2 < 0)
            throw Error("BidID must be positive and 2^53-1");
          if (!Number.isSafeInteger(n2) || n2 < 0)
            throw Error("auctionID must be positive");
          Object.assign(this, { bidderKey: a2, bidAmount: t3, bidID: r2, auctionKey: c2, auctionID: n2, maxPrice: o2 });
        }
        get_obj_for_encoding() {
          return { bidder: i.lW.from(this.bidderKey.publicKey), cur: this.bidAmount, price: this.maxPrice, id: this.bidID, auc: i.lW.from(this.auctionKey.publicKey), aid: this.auctionID };
        }
        signBid(e3) {
          const t3 = X(this.get_obj_for_encoding()), r2 = f(i.lW.from(k(this.tag, t3)), e3), s2 = { sig: i.lW.from(r2), bid: this.get_obj_for_encoding() };
          return new Uint8Array(X({ t: "b", b: s2 }));
        }
      }
      const le = 1e6, he = "Microalgos should be positive and less than 2^53 - 1.";
      function de(e3) {
        if (e3 < 0 || !Number.isSafeInteger(e3))
          throw new Error(he);
        return e3 / le;
      }
      function pe(e3) {
        const t3 = e3 * le;
        return Math.round(t3);
      }
      var fe = r(297);
      class ge extends Error {
        constructor(e3, t3) {
          super(e3), this.response = t3, this.name = "URLTokenBaseHTTPError", this.response = t3;
        }
      }
      class me {
        constructor(e3, t3, r2, s2 = {}) {
          this.defaultHeaders = s2;
          const n2 = t3.endsWith("/") ? t3 : `${t3}/`, i2 = new URL(n2);
          if (void 0 !== r2 && (i2.port = r2.toString()), 0 === i2.protocol.length)
            throw new Error("Invalid base server URL, protocol must be defined.");
          this.baseURL = i2, this.tokenHeader = e3;
        }
        getURL(e3, t3) {
          let r2;
          r2 = e3.startsWith("./") ? e3 : e3.startsWith("/") ? `.${e3}` : `./${e3}`;
          const s2 = new URL(r2, this.baseURL);
          if (t3)
            for (const [e4, r3] of Object.entries(t3))
              s2.searchParams.set(e4, r3);
          return s2.toString();
        }
        static formatFetchResponseHeaders(e3) {
          const t3 = {};
          return e3.forEach((e4, r2) => {
            t3[e4] = r2;
          }), t3;
        }
        static async checkHttpError(e3) {
          if (e3.ok)
            return;
          let t3 = null, r2 = null;
          try {
            t3 = new Uint8Array(await e3.arrayBuffer());
            const s3 = JSON.parse(i.lW.from(t3).toString());
            s3.message && (r2 = s3.message);
          } catch (e4) {
          }
          let s2 = `Network request error. Received status ${e3.status} (${e3.statusText})`;
          throw r2 && (s2 += `: ${r2}`), new ge(s2, { body: t3, status: e3.status, headers: me.formatFetchResponseHeaders(e3.headers) });
        }
        static async formatFetchResponse(e3) {
          return await this.checkHttpError(e3), { body: new Uint8Array(await e3.arrayBuffer()), status: e3.status, headers: me.formatFetchResponseHeaders(e3.headers) };
        }
        async get(e3, t3, r2 = {}) {
          const s2 = { ...this.tokenHeader, ...this.defaultHeaders, ...r2 }, n2 = await (0, fe.fetch)(this.getURL(e3, t3), { headers: s2 });
          return me.formatFetchResponse(n2);
        }
        async post(e3, t3, r2, s2 = {}) {
          const n2 = { ...this.tokenHeader, ...this.defaultHeaders, ...s2 }, i2 = await (0, fe.fetch)(this.getURL(e3, r2), { method: "POST", body: t3, headers: n2 });
          return me.formatFetchResponse(i2);
        }
        async delete(e3, t3, r2, s2 = {}) {
          const n2 = { ...this.tokenHeader, ...this.defaultHeaders, ...s2 }, i2 = await (0, fe.fetch)(this.getURL(e3, r2), { method: "DELETE", body: t3, headers: n2 });
          return me.formatFetchResponse(i2);
        }
      }
      function ye(e3) {
        return Object.keys(e3).reduce((t3, r2) => (t3[r2.toLowerCase()] = e3[r2], t3), {});
      }
      class we {
        constructor(e3, t3, r2, s2 = {}) {
          this.bc = void 0 !== t3 ? new me(e3, t3, r2, s2) : e3;
        }
        static parseJSON(e3, t3, r2 = {}) {
          try {
            return 0 === Object.keys(r2).length ? e3 && JSON.parse(e3) : e3 && function(e4, t4) {
              const r3 = t4 && t4.intDecoding ? t4.intDecoding : T.DEFAULT;
              return S.parse(e4, (e5, t5) => {
                if (null != t5 && "object" == typeof t5 && null == Object.getPrototypeOf(t5) && Object.setPrototypeOf(t5, Object.prototype), "bigint" == typeof t5) {
                  if ("safe" === r3 && t5 > Number.MAX_SAFE_INTEGER)
                    throw new Error(`Integer exceeds maximum safe integer: ${t5.toString()}. Try parsing with a different intDecoding option.`);
                  return "bigint" === r3 || "mixed" === r3 && t5 > Number.MAX_SAFE_INTEGER ? t5 : Number(t5);
                }
                return "number" == typeof t5 && "bigint" === r3 && Number.isInteger(t5) ? BigInt(t5) : t5;
              });
            }(e3, r2);
          } catch (r3) {
            const s2 = r3;
            throw s2.rawResponse = e3 || null, s2.statusCode = t3, s2;
          }
        }
        static serializeData(e3, t3) {
          if (!e3)
            return new Uint8Array(0);
          if ("application/json" === t3["content-type"])
            return new Uint8Array(i.lW.from(JSON.stringify(e3)));
          if ("string" == typeof e3)
            return new Uint8Array(i.lW.from(e3));
          if (e3 instanceof Uint8Array)
            return e3;
          throw new Error("provided data is neither a string nor a Uint8Array and content-type is not application/json");
        }
        static prepareResponse(e3, t3, r2, s2 = {}) {
          let n2, { body: o2 } = e3;
          return "application/msgpack" !== t3 && (n2 = o2 && i.lW.from(o2).toString() || ""), r2 && "application/json" === t3 && (o2 = we.parseJSON(n2, e3.status, s2)), { ...e3, body: o2, text: n2, ok: 2 === Math.trunc(e3.status / 100) };
        }
        static prepareResponseError(e3) {
          return e3.response && (e3.response = we.prepareResponse(e3.response, "application/json", true), e3.status = e3.response.status), e3;
        }
        async get(e3, t3, r2 = {}, s2 = {}, n2 = true) {
          const i2 = function(e4) {
            return void 0 !== e4 && Object.prototype.hasOwnProperty.call(e4, "format") && "msgpack" === e4.format ? "application/msgpack" : "application/json";
          }(t3), o2 = { ...r2, accept: i2 };
          try {
            const r3 = await this.bc.get(e3, function(e4) {
              for (const t4 in e4)
                Object.prototype.hasOwnProperty.call(e4, t4) && (e4[t4] && 0 !== e4[t4].length || delete e4[t4]);
              return e4;
            }(t3), o2);
            return we.prepareResponse(r3, i2, n2, s2);
          } catch (e4) {
            throw we.prepareResponseError(e4);
          }
        }
        async post(e3, t3, r2 = {}, s2, n2 = true) {
          const i2 = { "content-type": "application/json", ...ye(r2) };
          try {
            const r3 = await this.bc.post(e3, we.serializeData(t3, i2), s2, i2);
            return we.prepareResponse(r3, "application/json", n2);
          } catch (e4) {
            throw we.prepareResponseError(e4);
          }
        }
        async delete(e3, t3, r2 = {}, s2 = true) {
          const n2 = { "content-type": "application/json", ...ye(r2) }, i2 = await this.bc.delete(e3, we.serializeData(t3, n2), void 0, n2);
          return we.prepareResponse(i2, "application/json", s2);
        }
      }
      class be {
        constructor(e3, t3, r2, s2, n2 = {}) {
          if ("function" == typeof t3.get)
            this.c = new we(t3);
          else {
            let i2;
            i2 = "string" == typeof t3 ? function(e4 = "", t4) {
              const r3 = {};
              return "" === e4 || (r3[t4] = e4), r3;
            }(t3, e3) : t3, this.c = new we(i2, r2, s2, n2);
          }
          this.intDecoding = T.DEFAULT;
        }
        setIntEncoding(e3) {
          this.intDecoding = e3;
        }
        getIntEncoding() {
          return this.intDecoding;
        }
      }
      function ve(e3, t3) {
        let r2;
        if (e3 instanceof Uint8Array)
          r2 = t3 ? e3 : i.lW.from(e3).toString("base64");
        else if ("function" == typeof e3.get_obj_for_encoding)
          r2 = e3.get_obj_for_encoding(t3);
        else if (Array.isArray(e3)) {
          r2 = [];
          for (const s2 of e3)
            r2.push(ve(s2, t3));
        } else if ("object" == typeof e3) {
          const s2 = {};
          for (const r3 of Object.keys(e3))
            s2[r3] = ve(e3[r3], t3);
          r2 = s2;
        } else {
          if (!function(e4) {
            return void 0 === e4 || null == e4 || "object" != typeof e4 && "function" != typeof e4;
          }(e3))
            throw new Error(`Unsupported value: ${String(e3)}`);
          r2 = e3;
        }
        return r2;
      }
      class xe {
        get_obj_for_encoding(e3 = false) {
          const t3 = {};
          for (const r2 of Object.keys(this.attribute_map)) {
            const s2 = this.attribute_map[r2], n2 = this[r2];
            void 0 !== n2 && (t3[s2] = null === n2 ? null : ve(n2, e3));
          }
          return t3;
        }
      }
      class Ae extends xe {
        constructor({ address: e3, amount: t3, amountWithoutPendingRewards: r2, minBalance: s2, pendingRewards: n2, rewards: i2, round: o2, status: a2, totalAppsOptedIn: c2, totalAssetsOptedIn: u2, totalCreatedApps: l2, totalCreatedAssets: h2, appsLocalState: d2, appsTotalExtraPages: p2, appsTotalSchema: f2, assets: g2, authAddr: m2, createdApps: y2, createdAssets: w2, participation: b2, rewardBase: v2, sigType: x2, totalBoxBytes: A2, totalBoxes: _2 }) {
          super(), this.address = e3, this.amount = t3, this.amountWithoutPendingRewards = r2, this.minBalance = s2, this.pendingRewards = n2, this.rewards = i2, this.round = o2, this.status = a2, this.totalAppsOptedIn = c2, this.totalAssetsOptedIn = u2, this.totalCreatedApps = l2, this.totalCreatedAssets = h2, this.appsLocalState = d2, this.appsTotalExtraPages = p2, this.appsTotalSchema = f2, this.assets = g2, this.authAddr = m2, this.createdApps = y2, this.createdAssets = w2, this.participation = b2, this.rewardBase = v2, this.sigType = x2, this.totalBoxBytes = A2, this.totalBoxes = _2, this.attribute_map = { address: "address", amount: "amount", amountWithoutPendingRewards: "amount-without-pending-rewards", minBalance: "min-balance", pendingRewards: "pending-rewards", rewards: "rewards", round: "round", status: "status", totalAppsOptedIn: "total-apps-opted-in", totalAssetsOptedIn: "total-assets-opted-in", totalCreatedApps: "total-created-apps", totalCreatedAssets: "total-created-assets", appsLocalState: "apps-local-state", appsTotalExtraPages: "apps-total-extra-pages", appsTotalSchema: "apps-total-schema", assets: "assets", authAddr: "auth-addr", createdApps: "created-apps", createdAssets: "created-assets", participation: "participation", rewardBase: "reward-base", sigType: "sig-type", totalBoxBytes: "total-box-bytes", totalBoxes: "total-boxes" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.address)
            throw new Error(`Response is missing required field 'address': ${e3}`);
          if (void 0 === e3.amount)
            throw new Error(`Response is missing required field 'amount': ${e3}`);
          if (void 0 === e3["amount-without-pending-rewards"])
            throw new Error(`Response is missing required field 'amount-without-pending-rewards': ${e3}`);
          if (void 0 === e3["min-balance"])
            throw new Error(`Response is missing required field 'min-balance': ${e3}`);
          if (void 0 === e3["pending-rewards"])
            throw new Error(`Response is missing required field 'pending-rewards': ${e3}`);
          if (void 0 === e3.rewards)
            throw new Error(`Response is missing required field 'rewards': ${e3}`);
          if (void 0 === e3.round)
            throw new Error(`Response is missing required field 'round': ${e3}`);
          if (void 0 === e3.status)
            throw new Error(`Response is missing required field 'status': ${e3}`);
          if (void 0 === e3["total-apps-opted-in"])
            throw new Error(`Response is missing required field 'total-apps-opted-in': ${e3}`);
          if (void 0 === e3["total-assets-opted-in"])
            throw new Error(`Response is missing required field 'total-assets-opted-in': ${e3}`);
          if (void 0 === e3["total-created-apps"])
            throw new Error(`Response is missing required field 'total-created-apps': ${e3}`);
          if (void 0 === e3["total-created-assets"])
            throw new Error(`Response is missing required field 'total-created-assets': ${e3}`);
          return new Ae({ address: e3.address, amount: e3.amount, amountWithoutPendingRewards: e3["amount-without-pending-rewards"], minBalance: e3["min-balance"], pendingRewards: e3["pending-rewards"], rewards: e3.rewards, round: e3.round, status: e3.status, totalAppsOptedIn: e3["total-apps-opted-in"], totalAssetsOptedIn: e3["total-assets-opted-in"], totalCreatedApps: e3["total-created-apps"], totalCreatedAssets: e3["total-created-assets"], appsLocalState: void 0 !== e3["apps-local-state"] ? e3["apps-local-state"].map(ke.from_obj_for_encoding) : void 0, appsTotalExtraPages: e3["apps-total-extra-pages"], appsTotalSchema: void 0 !== e3["apps-total-schema"] ? Be.from_obj_for_encoding(e3["apps-total-schema"]) : void 0, assets: void 0 !== e3.assets ? e3.assets.map(Pe.from_obj_for_encoding) : void 0, authAddr: e3["auth-addr"], createdApps: void 0 !== e3["created-apps"] ? e3["created-apps"].map(Re.from_obj_for_encoding) : void 0, createdAssets: void 0 !== e3["created-assets"] ? e3["created-assets"].map(Ue.from_obj_for_encoding) : void 0, participation: void 0 !== e3.participation ? Te.from_obj_for_encoding(e3.participation) : void 0, rewardBase: e3["reward-base"], sigType: e3["sig-type"], totalBoxBytes: e3["total-box-bytes"], totalBoxes: e3["total-boxes"] });
        }
      }
      class _e extends xe {
        constructor({ round: e3, appLocalState: t3, createdApp: r2 }) {
          super(), this.round = e3, this.appLocalState = t3, this.createdApp = r2, this.attribute_map = { round: "round", appLocalState: "app-local-state", createdApp: "created-app" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.round)
            throw new Error(`Response is missing required field 'round': ${e3}`);
          return new _e({ round: e3.round, appLocalState: void 0 !== e3["app-local-state"] ? ke.from_obj_for_encoding(e3["app-local-state"]) : void 0, createdApp: void 0 !== e3["created-app"] ? Ie.from_obj_for_encoding(e3["created-app"]) : void 0 });
        }
      }
      class Ee extends xe {
        constructor({ round: e3, assetHolding: t3, createdAsset: r2 }) {
          super(), this.round = e3, this.assetHolding = t3, this.createdAsset = r2, this.attribute_map = { round: "round", assetHolding: "asset-holding", createdAsset: "created-asset" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.round)
            throw new Error(`Response is missing required field 'round': ${e3}`);
          return new Ee({ round: e3.round, assetHolding: void 0 !== e3["asset-holding"] ? Pe.from_obj_for_encoding(e3["asset-holding"]) : void 0, createdAsset: void 0 !== e3["created-asset"] ? je.from_obj_for_encoding(e3["created-asset"]) : void 0 });
        }
      }
      class Te extends xe {
        constructor({ selectionParticipationKey: e3, voteFirstValid: t3, voteKeyDilution: r2, voteLastValid: s2, voteParticipationKey: n2, stateProofKey: o2 }) {
          super(), this.selectionParticipationKey = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.voteFirstValid = t3, this.voteKeyDilution = r2, this.voteLastValid = s2, this.voteParticipationKey = "string" == typeof n2 ? new Uint8Array(i.lW.from(n2, "base64")) : n2, this.stateProofKey = "string" == typeof o2 ? new Uint8Array(i.lW.from(o2, "base64")) : o2, this.attribute_map = { selectionParticipationKey: "selection-participation-key", voteFirstValid: "vote-first-valid", voteKeyDilution: "vote-key-dilution", voteLastValid: "vote-last-valid", voteParticipationKey: "vote-participation-key", stateProofKey: "state-proof-key" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["selection-participation-key"])
            throw new Error(`Response is missing required field 'selection-participation-key': ${e3}`);
          if (void 0 === e3["vote-first-valid"])
            throw new Error(`Response is missing required field 'vote-first-valid': ${e3}`);
          if (void 0 === e3["vote-key-dilution"])
            throw new Error(`Response is missing required field 'vote-key-dilution': ${e3}`);
          if (void 0 === e3["vote-last-valid"])
            throw new Error(`Response is missing required field 'vote-last-valid': ${e3}`);
          if (void 0 === e3["vote-participation-key"])
            throw new Error(`Response is missing required field 'vote-participation-key': ${e3}`);
          return new Te({ selectionParticipationKey: e3["selection-participation-key"], voteFirstValid: e3["vote-first-valid"], voteKeyDilution: e3["vote-key-dilution"], voteLastValid: e3["vote-last-valid"], voteParticipationKey: e3["vote-participation-key"], stateProofKey: e3["state-proof-key"] });
        }
      }
      class Se extends xe {
        constructor({ address: e3, delta: t3 }) {
          super(), this.address = e3, this.delta = t3, this.attribute_map = { address: "address", delta: "delta" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.address)
            throw new Error(`Response is missing required field 'address': ${e3}`);
          if (!Array.isArray(e3.delta))
            throw new Error(`Response is missing required array field 'delta': ${e3}`);
          return new Se({ address: e3.address, delta: e3.delta.map(Ye.from_obj_for_encoding) });
        }
      }
      class Re extends xe {
        constructor({ id: e3, params: t3 }) {
          super(), this.id = e3, this.params = t3, this.attribute_map = { id: "id", params: "params" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.id)
            throw new Error(`Response is missing required field 'id': ${e3}`);
          if (void 0 === e3.params)
            throw new Error(`Response is missing required field 'params': ${e3}`);
          return new Re({ id: e3.id, params: Ie.from_obj_for_encoding(e3.params) });
        }
      }
      class ke extends xe {
        constructor({ id: e3, schema: t3, keyValue: r2 }) {
          super(), this.id = e3, this.schema = t3, this.keyValue = r2, this.attribute_map = { id: "id", schema: "schema", keyValue: "key-value" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.id)
            throw new Error(`Response is missing required field 'id': ${e3}`);
          if (void 0 === e3.schema)
            throw new Error(`Response is missing required field 'schema': ${e3}`);
          return new ke({ id: e3.id, schema: Be.from_obj_for_encoding(e3.schema), keyValue: void 0 !== e3["key-value"] ? e3["key-value"].map(ft.from_obj_for_encoding) : void 0 });
        }
      }
      class Ie extends xe {
        constructor({ approvalProgram: e3, clearStateProgram: t3, creator: r2, extraProgramPages: s2, globalState: n2, globalStateSchema: o2, localStateSchema: a2 }) {
          super(), this.approvalProgram = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.clearStateProgram = "string" == typeof t3 ? new Uint8Array(i.lW.from(t3, "base64")) : t3, this.creator = r2, this.extraProgramPages = s2, this.globalState = n2, this.globalStateSchema = o2, this.localStateSchema = a2, this.attribute_map = { approvalProgram: "approval-program", clearStateProgram: "clear-state-program", creator: "creator", extraProgramPages: "extra-program-pages", globalState: "global-state", globalStateSchema: "global-state-schema", localStateSchema: "local-state-schema" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["approval-program"])
            throw new Error(`Response is missing required field 'approval-program': ${e3}`);
          if (void 0 === e3["clear-state-program"])
            throw new Error(`Response is missing required field 'clear-state-program': ${e3}`);
          if (void 0 === e3.creator)
            throw new Error(`Response is missing required field 'creator': ${e3}`);
          return new Ie({ approvalProgram: e3["approval-program"], clearStateProgram: e3["clear-state-program"], creator: e3.creator, extraProgramPages: e3["extra-program-pages"], globalState: void 0 !== e3["global-state"] ? e3["global-state"].map(ft.from_obj_for_encoding) : void 0, globalStateSchema: void 0 !== e3["global-state-schema"] ? Be.from_obj_for_encoding(e3["global-state-schema"]) : void 0, localStateSchema: void 0 !== e3["local-state-schema"] ? Be.from_obj_for_encoding(e3["local-state-schema"]) : void 0 });
        }
      }
      class Be extends xe {
        constructor({ numUint: e3, numByteSlice: t3 }) {
          super(), this.numUint = e3, this.numByteSlice = t3, this.attribute_map = { numUint: "num-uint", numByteSlice: "num-byte-slice" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["num-uint"])
            throw new Error(`Response is missing required field 'num-uint': ${e3}`);
          if (void 0 === e3["num-byte-slice"])
            throw new Error(`Response is missing required field 'num-byte-slice': ${e3}`);
          return new Be({ numUint: e3["num-uint"], numByteSlice: e3["num-byte-slice"] });
        }
      }
      class Ue extends xe {
        constructor({ index: e3, params: t3 }) {
          super(), this.index = e3, this.params = t3, this.attribute_map = { index: "index", params: "params" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.index)
            throw new Error(`Response is missing required field 'index': ${e3}`);
          if (void 0 === e3.params)
            throw new Error(`Response is missing required field 'params': ${e3}`);
          return new Ue({ index: e3.index, params: je.from_obj_for_encoding(e3.params) });
        }
      }
      class Pe extends xe {
        constructor({ amount: e3, assetId: t3, isFrozen: r2 }) {
          super(), this.amount = e3, this.assetId = t3, this.isFrozen = r2, this.attribute_map = { amount: "amount", assetId: "asset-id", isFrozen: "is-frozen" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.amount)
            throw new Error(`Response is missing required field 'amount': ${e3}`);
          if (void 0 === e3["asset-id"])
            throw new Error(`Response is missing required field 'asset-id': ${e3}`);
          if (void 0 === e3["is-frozen"])
            throw new Error(`Response is missing required field 'is-frozen': ${e3}`);
          return new Pe({ amount: e3.amount, assetId: e3["asset-id"], isFrozen: e3["is-frozen"] });
        }
      }
      class je extends xe {
        constructor({ creator: e3, decimals: t3, total: r2, clawback: s2, defaultFrozen: n2, freeze: o2, manager: a2, metadataHash: c2, name: u2, nameB64: l2, reserve: h2, unitName: d2, unitNameB64: p2, url: f2, urlB64: g2 }) {
          super(), this.creator = e3, this.decimals = t3, this.total = r2, this.clawback = s2, this.defaultFrozen = n2, this.freeze = o2, this.manager = a2, this.metadataHash = "string" == typeof c2 ? new Uint8Array(i.lW.from(c2, "base64")) : c2, this.name = u2, this.nameB64 = "string" == typeof l2 ? new Uint8Array(i.lW.from(l2, "base64")) : l2, this.reserve = h2, this.unitName = d2, this.unitNameB64 = "string" == typeof p2 ? new Uint8Array(i.lW.from(p2, "base64")) : p2, this.url = f2, this.urlB64 = "string" == typeof g2 ? new Uint8Array(i.lW.from(g2, "base64")) : g2, this.attribute_map = { creator: "creator", decimals: "decimals", total: "total", clawback: "clawback", defaultFrozen: "default-frozen", freeze: "freeze", manager: "manager", metadataHash: "metadata-hash", name: "name", nameB64: "name-b64", reserve: "reserve", unitName: "unit-name", unitNameB64: "unit-name-b64", url: "url", urlB64: "url-b64" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.creator)
            throw new Error(`Response is missing required field 'creator': ${e3}`);
          if (void 0 === e3.decimals)
            throw new Error(`Response is missing required field 'decimals': ${e3}`);
          if (void 0 === e3.total)
            throw new Error(`Response is missing required field 'total': ${e3}`);
          return new je({ creator: e3.creator, decimals: e3.decimals, total: e3.total, clawback: e3.clawback, defaultFrozen: e3["default-frozen"], freeze: e3.freeze, manager: e3.manager, metadataHash: e3["metadata-hash"], name: e3.name, nameB64: e3["name-b64"], reserve: e3.reserve, unitName: e3["unit-name"], unitNameB64: e3["unit-name-b64"], url: e3.url, urlB64: e3["url-b64"] });
        }
      }
      class qe extends xe {
        constructor({ blockhash: e3 }) {
          super(), this.blockhash = e3, this.attribute_map = { blockhash: "blockHash" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.blockHash)
            throw new Error(`Response is missing required field 'blockHash': ${e3}`);
          return new qe({ blockhash: e3.blockHash });
        }
      }
      class De extends xe {
        constructor({ block: e3, cert: t3 }) {
          super(), this.block = e3, this.cert = t3, this.attribute_map = { block: "block", cert: "cert" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.block)
            throw new Error(`Response is missing required field 'block': ${e3}`);
          return new De({ block: e3.block, cert: e3.cert });
        }
      }
      class $e extends xe {
        constructor({ name: e3, value: t3 }) {
          super(), this.name = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.value = "string" == typeof t3 ? new Uint8Array(i.lW.from(t3, "base64")) : t3, this.attribute_map = { name: "name", value: "value" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.name)
            throw new Error(`Response is missing required field 'name': ${e3}`);
          if (void 0 === e3.value)
            throw new Error(`Response is missing required field 'value': ${e3}`);
          return new $e({ name: e3.name, value: e3.value });
        }
      }
      class Oe extends xe {
        constructor({ name: e3 }) {
          super(), this.name = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.attribute_map = { name: "name" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.name)
            throw new Error(`Response is missing required field 'name': ${e3}`);
          return new Oe({ name: e3.name });
        }
      }
      class Ce extends xe {
        constructor({ boxes: e3 }) {
          super(), this.boxes = e3, this.attribute_map = { boxes: "boxes" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3.boxes))
            throw new Error(`Response is missing required array field 'boxes': ${e3}`);
          return new Ce({ boxes: e3.boxes.map(Oe.from_obj_for_encoding) });
        }
      }
      class Le extends xe {
        constructor({ branch: e3, buildNumber: t3, channel: r2, commitHash: s2, major: n2, minor: i2 }) {
          super(), this.branch = e3, this.buildNumber = t3, this.channel = r2, this.commitHash = s2, this.major = n2, this.minor = i2, this.attribute_map = { branch: "branch", buildNumber: "build_number", channel: "channel", commitHash: "commit_hash", major: "major", minor: "minor" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.branch)
            throw new Error(`Response is missing required field 'branch': ${e3}`);
          if (void 0 === e3.build_number)
            throw new Error(`Response is missing required field 'build_number': ${e3}`);
          if (void 0 === e3.channel)
            throw new Error(`Response is missing required field 'channel': ${e3}`);
          if (void 0 === e3.commit_hash)
            throw new Error(`Response is missing required field 'commit_hash': ${e3}`);
          if (void 0 === e3.major)
            throw new Error(`Response is missing required field 'major': ${e3}`);
          if (void 0 === e3.minor)
            throw new Error(`Response is missing required field 'minor': ${e3}`);
          return new Le({ branch: e3.branch, buildNumber: e3.build_number, channel: e3.channel, commitHash: e3.commit_hash, major: e3.major, minor: e3.minor });
        }
      }
      class Me extends xe {
        constructor({ hash: e3, result: t3, sourcemap: r2 }) {
          super(), this.hash = e3, this.result = t3, this.sourcemap = r2, this.attribute_map = { hash: "hash", result: "result", sourcemap: "sourcemap" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.hash)
            throw new Error(`Response is missing required field 'hash': ${e3}`);
          if (void 0 === e3.result)
            throw new Error(`Response is missing required field 'result': ${e3}`);
          return new Me({ hash: e3.hash, result: e3.result, sourcemap: e3.sourcemap });
        }
      }
      class Ne extends xe {
        constructor({ result: e3 }) {
          super(), this.result = e3, this.attribute_map = { result: "result" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.result)
            throw new Error(`Response is missing required field 'result': ${e3}`);
          return new Ne({ result: e3.result });
        }
      }
      class Fe extends xe {
        constructor({ accounts: e3, apps: t3, latestTimestamp: r2, protocolVersion: s2, round: n2, sources: i2, txns: o2 }) {
          super(), this.accounts = e3, this.apps = t3, this.latestTimestamp = r2, this.protocolVersion = s2, this.round = n2, this.sources = i2, this.txns = o2, this.attribute_map = { accounts: "accounts", apps: "apps", latestTimestamp: "latest-timestamp", protocolVersion: "protocol-version", round: "round", sources: "sources", txns: "txns" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3.accounts))
            throw new Error(`Response is missing required array field 'accounts': ${e3}`);
          if (!Array.isArray(e3.apps))
            throw new Error(`Response is missing required array field 'apps': ${e3}`);
          if (void 0 === e3["latest-timestamp"])
            throw new Error(`Response is missing required field 'latest-timestamp': ${e3}`);
          if (void 0 === e3["protocol-version"])
            throw new Error(`Response is missing required field 'protocol-version': ${e3}`);
          if (void 0 === e3.round)
            throw new Error(`Response is missing required field 'round': ${e3}`);
          if (!Array.isArray(e3.sources))
            throw new Error(`Response is missing required array field 'sources': ${e3}`);
          if (!Array.isArray(e3.txns))
            throw new Error(`Response is missing required array field 'txns': ${e3}`);
          return new Fe({ accounts: e3.accounts.map(Ae.from_obj_for_encoding), apps: e3.apps.map(Re.from_obj_for_encoding), latestTimestamp: e3["latest-timestamp"], protocolVersion: e3["protocol-version"], round: e3.round, sources: e3.sources.map(Ke.from_obj_for_encoding), txns: e3.txns });
        }
      }
      class We extends xe {
        constructor({ error: e3, protocolVersion: t3, txns: r2 }) {
          super(), this.error = e3, this.protocolVersion = t3, this.txns = r2, this.attribute_map = { error: "error", protocolVersion: "protocol-version", txns: "txns" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.error)
            throw new Error(`Response is missing required field 'error': ${e3}`);
          if (void 0 === e3["protocol-version"])
            throw new Error(`Response is missing required field 'protocol-version': ${e3}`);
          if (!Array.isArray(e3.txns))
            throw new Error(`Response is missing required array field 'txns': ${e3}`);
          return new We({ error: e3.error, protocolVersion: e3["protocol-version"], txns: e3.txns.map(Ve.from_obj_for_encoding) });
        }
      }
      class Ke extends xe {
        constructor({ fieldName: e3, source: t3, txnIndex: r2, appIndex: s2 }) {
          super(), this.fieldName = e3, this.source = t3, this.txnIndex = r2, this.appIndex = s2, this.attribute_map = { fieldName: "field-name", source: "source", txnIndex: "txn-index", appIndex: "app-index" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["field-name"])
            throw new Error(`Response is missing required field 'field-name': ${e3}`);
          if (void 0 === e3.source)
            throw new Error(`Response is missing required field 'source': ${e3}`);
          if (void 0 === e3["txn-index"])
            throw new Error(`Response is missing required field 'txn-index': ${e3}`);
          if (void 0 === e3["app-index"])
            throw new Error(`Response is missing required field 'app-index': ${e3}`);
          return new Ke({ fieldName: e3["field-name"], source: e3.source, txnIndex: e3["txn-index"], appIndex: e3["app-index"] });
        }
      }
      class ze extends xe {
        constructor({ line: e3, pc: t3, stack: r2, error: s2, scratch: n2 }) {
          super(), this.line = e3, this.pc = t3, this.stack = r2, this.error = s2, this.scratch = n2, this.attribute_map = { line: "line", pc: "pc", stack: "stack", error: "error", scratch: "scratch" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.line)
            throw new Error(`Response is missing required field 'line': ${e3}`);
          if (void 0 === e3.pc)
            throw new Error(`Response is missing required field 'pc': ${e3}`);
          if (!Array.isArray(e3.stack))
            throw new Error(`Response is missing required array field 'stack': ${e3}`);
          return new ze({ line: e3.line, pc: e3.pc, stack: e3.stack.map(gt.from_obj_for_encoding), error: e3.error, scratch: void 0 !== e3.scratch ? e3.scratch.map(gt.from_obj_for_encoding) : void 0 });
        }
      }
      class Ve extends xe {
        constructor({ disassembly: e3, appCallMessages: t3, appCallTrace: r2, budgetAdded: s2, budgetConsumed: n2, globalDelta: i2, localDeltas: o2, logicSigDisassembly: a2, logicSigMessages: c2, logicSigTrace: u2, logs: l2 }) {
          super(), this.disassembly = e3, this.appCallMessages = t3, this.appCallTrace = r2, this.budgetAdded = s2, this.budgetConsumed = n2, this.globalDelta = i2, this.localDeltas = o2, this.logicSigDisassembly = a2, this.logicSigMessages = c2, this.logicSigTrace = u2, this.logs = l2, this.attribute_map = { disassembly: "disassembly", appCallMessages: "app-call-messages", appCallTrace: "app-call-trace", budgetAdded: "budget-added", budgetConsumed: "budget-consumed", globalDelta: "global-delta", localDeltas: "local-deltas", logicSigDisassembly: "logic-sig-disassembly", logicSigMessages: "logic-sig-messages", logicSigTrace: "logic-sig-trace", logs: "logs" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3.disassembly))
            throw new Error(`Response is missing required array field 'disassembly': ${e3}`);
          return new Ve({ disassembly: e3.disassembly, appCallMessages: e3["app-call-messages"], appCallTrace: void 0 !== e3["app-call-trace"] ? e3["app-call-trace"].map(ze.from_obj_for_encoding) : void 0, budgetAdded: e3["budget-added"], budgetConsumed: e3["budget-consumed"], globalDelta: void 0 !== e3["global-delta"] ? e3["global-delta"].map(Ye.from_obj_for_encoding) : void 0, localDeltas: void 0 !== e3["local-deltas"] ? e3["local-deltas"].map(Se.from_obj_for_encoding) : void 0, logicSigDisassembly: e3["logic-sig-disassembly"], logicSigMessages: e3["logic-sig-messages"], logicSigTrace: void 0 !== e3["logic-sig-trace"] ? e3["logic-sig-trace"].map(ze.from_obj_for_encoding) : void 0, logs: e3.logs });
        }
      }
      class Ge extends xe {
        constructor({ message: e3, data: t3 }) {
          super(), this.message = e3, this.data = t3, this.attribute_map = { message: "message", data: "data" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.message)
            throw new Error(`Response is missing required field 'message': ${e3}`);
          return new Ge({ message: e3.message, data: e3.data });
        }
      }
      class He extends xe {
        constructor({ action: e3, bytes: t3, uint: r2 }) {
          super(), this.action = e3, this.bytes = t3, this.uint = r2, this.attribute_map = { action: "action", bytes: "bytes", uint: "uint" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.action)
            throw new Error(`Response is missing required field 'action': ${e3}`);
          return new He({ action: e3.action, bytes: e3.bytes, uint: e3.uint });
        }
      }
      class Ye extends xe {
        constructor({ key: e3, value: t3 }) {
          super(), this.key = e3, this.value = t3, this.attribute_map = { key: "key", value: "value" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.key)
            throw new Error(`Response is missing required field 'key': ${e3}`);
          if (void 0 === e3.value)
            throw new Error(`Response is missing required field 'value': ${e3}`);
          return new Ye({ key: e3.key, value: He.from_obj_for_encoding(e3.value) });
        }
      }
      class Je extends xe {
        constructor({ offset: e3 }) {
          super(), this.offset = e3, this.attribute_map = { offset: "offset" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.offset)
            throw new Error(`Response is missing required field 'offset': ${e3}`);
          return new Je({ offset: e3.offset });
        }
      }
      class Xe extends xe {
        constructor({ round: e3 }) {
          super(), this.round = e3, this.attribute_map = { round: "round" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.round)
            throw new Error(`Response is missing required field 'round': ${e3}`);
          return new Xe({ round: e3.round });
        }
      }
      class Ze extends xe {
        constructor({ key: e3, value: t3 }) {
          super(), this.key = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.value = "string" == typeof t3 ? new Uint8Array(i.lW.from(t3, "base64")) : t3, this.attribute_map = { key: "key", value: "value" };
        }
        static from_obj_for_encoding(e3) {
          return new Ze({ key: e3.key, value: e3.value });
        }
      }
      class Qe extends xe {
        constructor({ delta: e3, ids: t3 }) {
          super(), this.delta = e3, this.ids = t3, this.attribute_map = { delta: "delta", ids: "ids" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.delta)
            throw new Error(`Response is missing required field 'delta': ${e3}`);
          if (!Array.isArray(e3.ids))
            throw new Error(`Response is missing required array field 'ids': ${e3}`);
          return new Qe({ delta: e3.delta, ids: e3.ids });
        }
      }
      class et extends xe {
        constructor({ index: e3, proof: t3, treedepth: r2 }) {
          super(), this.index = e3, this.proof = "string" == typeof t3 ? new Uint8Array(i.lW.from(t3, "base64")) : t3, this.treedepth = r2, this.attribute_map = { index: "index", proof: "proof", treedepth: "treedepth" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.index)
            throw new Error(`Response is missing required field 'index': ${e3}`);
          if (void 0 === e3.proof)
            throw new Error(`Response is missing required field 'proof': ${e3}`);
          if (void 0 === e3.treedepth)
            throw new Error(`Response is missing required field 'treedepth': ${e3}`);
          return new et({ index: e3.index, proof: e3.proof, treedepth: e3.treedepth });
        }
      }
      class tt extends xe {
        constructor({ catchupTime: e3, lastRound: t3, lastVersion: r2, nextVersion: s2, nextVersionRound: n2, nextVersionSupported: i2, stoppedAtUnsupportedRound: o2, timeSinceLastRound: a2, catchpoint: c2, catchpointAcquiredBlocks: u2, catchpointProcessedAccounts: l2, catchpointProcessedKvs: h2, catchpointTotalAccounts: d2, catchpointTotalBlocks: p2, catchpointTotalKvs: f2, catchpointVerifiedAccounts: g2, catchpointVerifiedKvs: m2, lastCatchpoint: y2, upgradeDelay: w2, upgradeNextProtocolVoteBefore: b2, upgradeNoVotes: v2, upgradeNodeVote: x2, upgradeVoteRounds: A2, upgradeVotes: _2, upgradeVotesRequired: E2, upgradeYesVotes: T2 }) {
          super(), this.catchupTime = e3, this.lastRound = t3, this.lastVersion = r2, this.nextVersion = s2, this.nextVersionRound = n2, this.nextVersionSupported = i2, this.stoppedAtUnsupportedRound = o2, this.timeSinceLastRound = a2, this.catchpoint = c2, this.catchpointAcquiredBlocks = u2, this.catchpointProcessedAccounts = l2, this.catchpointProcessedKvs = h2, this.catchpointTotalAccounts = d2, this.catchpointTotalBlocks = p2, this.catchpointTotalKvs = f2, this.catchpointVerifiedAccounts = g2, this.catchpointVerifiedKvs = m2, this.lastCatchpoint = y2, this.upgradeDelay = w2, this.upgradeNextProtocolVoteBefore = b2, this.upgradeNoVotes = v2, this.upgradeNodeVote = x2, this.upgradeVoteRounds = A2, this.upgradeVotes = _2, this.upgradeVotesRequired = E2, this.upgradeYesVotes = T2, this.attribute_map = { catchupTime: "catchup-time", lastRound: "last-round", lastVersion: "last-version", nextVersion: "next-version", nextVersionRound: "next-version-round", nextVersionSupported: "next-version-supported", stoppedAtUnsupportedRound: "stopped-at-unsupported-round", timeSinceLastRound: "time-since-last-round", catchpoint: "catchpoint", catchpointAcquiredBlocks: "catchpoint-acquired-blocks", catchpointProcessedAccounts: "catchpoint-processed-accounts", catchpointProcessedKvs: "catchpoint-processed-kvs", catchpointTotalAccounts: "catchpoint-total-accounts", catchpointTotalBlocks: "catchpoint-total-blocks", catchpointTotalKvs: "catchpoint-total-kvs", catchpointVerifiedAccounts: "catchpoint-verified-accounts", catchpointVerifiedKvs: "catchpoint-verified-kvs", lastCatchpoint: "last-catchpoint", upgradeDelay: "upgrade-delay", upgradeNextProtocolVoteBefore: "upgrade-next-protocol-vote-before", upgradeNoVotes: "upgrade-no-votes", upgradeNodeVote: "upgrade-node-vote", upgradeVoteRounds: "upgrade-vote-rounds", upgradeVotes: "upgrade-votes", upgradeVotesRequired: "upgrade-votes-required", upgradeYesVotes: "upgrade-yes-votes" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["catchup-time"])
            throw new Error(`Response is missing required field 'catchup-time': ${e3}`);
          if (void 0 === e3["last-round"])
            throw new Error(`Response is missing required field 'last-round': ${e3}`);
          if (void 0 === e3["last-version"])
            throw new Error(`Response is missing required field 'last-version': ${e3}`);
          if (void 0 === e3["next-version"])
            throw new Error(`Response is missing required field 'next-version': ${e3}`);
          if (void 0 === e3["next-version-round"])
            throw new Error(`Response is missing required field 'next-version-round': ${e3}`);
          if (void 0 === e3["next-version-supported"])
            throw new Error(`Response is missing required field 'next-version-supported': ${e3}`);
          if (void 0 === e3["stopped-at-unsupported-round"])
            throw new Error(`Response is missing required field 'stopped-at-unsupported-round': ${e3}`);
          if (void 0 === e3["time-since-last-round"])
            throw new Error(`Response is missing required field 'time-since-last-round': ${e3}`);
          return new tt({ catchupTime: e3["catchup-time"], lastRound: e3["last-round"], lastVersion: e3["last-version"], nextVersion: e3["next-version"], nextVersionRound: e3["next-version-round"], nextVersionSupported: e3["next-version-supported"], stoppedAtUnsupportedRound: e3["stopped-at-unsupported-round"], timeSinceLastRound: e3["time-since-last-round"], catchpoint: e3.catchpoint, catchpointAcquiredBlocks: e3["catchpoint-acquired-blocks"], catchpointProcessedAccounts: e3["catchpoint-processed-accounts"], catchpointProcessedKvs: e3["catchpoint-processed-kvs"], catchpointTotalAccounts: e3["catchpoint-total-accounts"], catchpointTotalBlocks: e3["catchpoint-total-blocks"], catchpointTotalKvs: e3["catchpoint-total-kvs"], catchpointVerifiedAccounts: e3["catchpoint-verified-accounts"], catchpointVerifiedKvs: e3["catchpoint-verified-kvs"], lastCatchpoint: e3["last-catchpoint"], upgradeDelay: e3["upgrade-delay"], upgradeNextProtocolVoteBefore: e3["upgrade-next-protocol-vote-before"], upgradeNoVotes: e3["upgrade-no-votes"], upgradeNodeVote: e3["upgrade-node-vote"], upgradeVoteRounds: e3["upgrade-vote-rounds"], upgradeVotes: e3["upgrade-votes"], upgradeVotesRequired: e3["upgrade-votes-required"], upgradeYesVotes: e3["upgrade-yes-votes"] });
        }
      }
      class rt extends xe {
        constructor({ poolError: e3, txn: t3, applicationIndex: r2, assetClosingAmount: s2, assetIndex: n2, closeRewards: i2, closingAmount: o2, confirmedRound: a2, globalStateDelta: c2, innerTxns: u2, localStateDelta: l2, logs: h2, receiverRewards: d2, senderRewards: p2 }) {
          super(), this.poolError = e3, this.txn = t3, this.applicationIndex = r2, this.assetClosingAmount = s2, this.assetIndex = n2, this.closeRewards = i2, this.closingAmount = o2, this.confirmedRound = a2, this.globalStateDelta = c2, this.innerTxns = u2, this.localStateDelta = l2, this.logs = h2, this.receiverRewards = d2, this.senderRewards = p2, this.attribute_map = { poolError: "pool-error", txn: "txn", applicationIndex: "application-index", assetClosingAmount: "asset-closing-amount", assetIndex: "asset-index", closeRewards: "close-rewards", closingAmount: "closing-amount", confirmedRound: "confirmed-round", globalStateDelta: "global-state-delta", innerTxns: "inner-txns", localStateDelta: "local-state-delta", logs: "logs", receiverRewards: "receiver-rewards", senderRewards: "sender-rewards" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["pool-error"])
            throw new Error(`Response is missing required field 'pool-error': ${e3}`);
          if (void 0 === e3.txn)
            throw new Error(`Response is missing required field 'txn': ${e3}`);
          return new rt({ poolError: e3["pool-error"], txn: e3.txn, applicationIndex: e3["application-index"], assetClosingAmount: e3["asset-closing-amount"], assetIndex: e3["asset-index"], closeRewards: e3["close-rewards"], closingAmount: e3["closing-amount"], confirmedRound: e3["confirmed-round"], globalStateDelta: void 0 !== e3["global-state-delta"] ? e3["global-state-delta"].map(Ye.from_obj_for_encoding) : void 0, innerTxns: void 0 !== e3["inner-txns"] ? e3["inner-txns"].map(rt.from_obj_for_encoding) : void 0, localStateDelta: void 0 !== e3["local-state-delta"] ? e3["local-state-delta"].map(Se.from_obj_for_encoding) : void 0, logs: e3.logs, receiverRewards: e3["receiver-rewards"], senderRewards: e3["sender-rewards"] });
        }
      }
      class st extends xe {
        constructor({ topTransactions: e3, totalTransactions: t3 }) {
          super(), this.topTransactions = e3, this.totalTransactions = t3, this.attribute_map = { topTransactions: "top-transactions", totalTransactions: "total-transactions" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3["top-transactions"]))
            throw new Error(`Response is missing required array field 'top-transactions': ${e3}`);
          if (void 0 === e3["total-transactions"])
            throw new Error(`Response is missing required field 'total-transactions': ${e3}`);
          return new st({ topTransactions: e3["top-transactions"], totalTransactions: e3["total-transactions"] });
        }
      }
      class nt extends xe {
        constructor({ txid: e3 }) {
          super(), this.txid = e3, this.attribute_map = { txid: "txId" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.txId)
            throw new Error(`Response is missing required field 'txId': ${e3}`);
          return new nt({ txid: e3.txId });
        }
      }
      class it extends xe {
        constructor({ txnGroups: e3, allowEmptySignatures: t3, allowMoreLogging: r2, extraOpcodeBudget: s2 }) {
          super(), this.txnGroups = e3, this.allowEmptySignatures = t3, this.allowMoreLogging = r2, this.extraOpcodeBudget = s2, this.attribute_map = { txnGroups: "txn-groups", allowEmptySignatures: "allow-empty-signatures", allowMoreLogging: "allow-more-logging", extraOpcodeBudget: "extra-opcode-budget" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3["txn-groups"]))
            throw new Error(`Response is missing required array field 'txn-groups': ${e3}`);
          return new it({ txnGroups: e3["txn-groups"].map(ot.from_obj_for_encoding), allowEmptySignatures: e3["allow-empty-signatures"], allowMoreLogging: e3["allow-more-logging"], extraOpcodeBudget: e3["extra-opcode-budget"] });
        }
      }
      class ot extends xe {
        constructor({ txns: e3 }) {
          super(), this.txns = e3, this.attribute_map = { txns: "txns" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3.txns))
            throw new Error(`Response is missing required array field 'txns': ${e3}`);
          return new ot({ txns: e3.txns });
        }
      }
      class at extends xe {
        constructor({ lastRound: e3, txnGroups: t3, version: r2, evalOverrides: s2 }) {
          super(), this.lastRound = e3, this.txnGroups = t3, this.version = r2, this.evalOverrides = s2, this.attribute_map = { lastRound: "last-round", txnGroups: "txn-groups", version: "version", evalOverrides: "eval-overrides" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["last-round"])
            throw new Error(`Response is missing required field 'last-round': ${e3}`);
          if (!Array.isArray(e3["txn-groups"]))
            throw new Error(`Response is missing required array field 'txn-groups': ${e3}`);
          if (void 0 === e3.version)
            throw new Error(`Response is missing required field 'version': ${e3}`);
          return new at({ lastRound: e3["last-round"], txnGroups: e3["txn-groups"].map(ct.from_obj_for_encoding), version: e3.version, evalOverrides: void 0 !== e3["eval-overrides"] ? lt.from_obj_for_encoding(e3["eval-overrides"]) : void 0 });
        }
      }
      class ct extends xe {
        constructor({ txnResults: e3, appBudgetAdded: t3, appBudgetConsumed: r2, failedAt: s2, failureMessage: n2 }) {
          super(), this.txnResults = e3, this.appBudgetAdded = t3, this.appBudgetConsumed = r2, this.failedAt = s2, this.failureMessage = n2, this.attribute_map = { txnResults: "txn-results", appBudgetAdded: "app-budget-added", appBudgetConsumed: "app-budget-consumed", failedAt: "failed-at", failureMessage: "failure-message" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3["txn-results"]))
            throw new Error(`Response is missing required array field 'txn-results': ${e3}`);
          return new ct({ txnResults: e3["txn-results"].map(ut.from_obj_for_encoding), appBudgetAdded: e3["app-budget-added"], appBudgetConsumed: e3["app-budget-consumed"], failedAt: e3["failed-at"], failureMessage: e3["failure-message"] });
        }
      }
      class ut extends xe {
        constructor({ txnResult: e3, appBudgetConsumed: t3, logicSigBudgetConsumed: r2 }) {
          super(), this.txnResult = e3, this.appBudgetConsumed = t3, this.logicSigBudgetConsumed = r2, this.attribute_map = { txnResult: "txn-result", appBudgetConsumed: "app-budget-consumed", logicSigBudgetConsumed: "logic-sig-budget-consumed" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["txn-result"])
            throw new Error(`Response is missing required field 'txn-result': ${e3}`);
          return new ut({ txnResult: rt.from_obj_for_encoding(e3["txn-result"]), appBudgetConsumed: e3["app-budget-consumed"], logicSigBudgetConsumed: e3["logic-sig-budget-consumed"] });
        }
      }
      class lt extends xe {
        constructor({ allowEmptySignatures: e3, extraOpcodeBudget: t3, maxLogCalls: r2, maxLogSize: s2 }) {
          super(), this.allowEmptySignatures = e3, this.extraOpcodeBudget = t3, this.maxLogCalls = r2, this.maxLogSize = s2, this.attribute_map = { allowEmptySignatures: "allow-empty-signatures", extraOpcodeBudget: "extra-opcode-budget", maxLogCalls: "max-log-calls", maxLogSize: "max-log-size" };
        }
        static from_obj_for_encoding(e3) {
          return new lt({ allowEmptySignatures: e3["allow-empty-signatures"], extraOpcodeBudget: e3["extra-opcode-budget"], maxLogCalls: e3["max-log-calls"], maxLogSize: e3["max-log-size"] });
        }
      }
      class ht extends xe {
        constructor({ message: e3, stateproof: t3 }) {
          super(), this.message = e3, this.stateproof = "string" == typeof t3 ? new Uint8Array(i.lW.from(t3, "base64")) : t3, this.attribute_map = { message: "Message", stateproof: "StateProof" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.Message)
            throw new Error(`Response is missing required field 'Message': ${e3}`);
          if (void 0 === e3.StateProof)
            throw new Error(`Response is missing required field 'StateProof': ${e3}`);
          return new ht({ message: dt.from_obj_for_encoding(e3.Message), stateproof: e3.StateProof });
        }
      }
      class dt extends xe {
        constructor({ blockheaderscommitment: e3, firstattestedround: t3, lastattestedround: r2, lnprovenweight: s2, voterscommitment: n2 }) {
          super(), this.blockheaderscommitment = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.firstattestedround = t3, this.lastattestedround = r2, this.lnprovenweight = s2, this.voterscommitment = "string" == typeof n2 ? new Uint8Array(i.lW.from(n2, "base64")) : n2, this.attribute_map = { blockheaderscommitment: "BlockHeadersCommitment", firstattestedround: "FirstAttestedRound", lastattestedround: "LastAttestedRound", lnprovenweight: "LnProvenWeight", voterscommitment: "VotersCommitment" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.BlockHeadersCommitment)
            throw new Error(`Response is missing required field 'BlockHeadersCommitment': ${e3}`);
          if (void 0 === e3.FirstAttestedRound)
            throw new Error(`Response is missing required field 'FirstAttestedRound': ${e3}`);
          if (void 0 === e3.LastAttestedRound)
            throw new Error(`Response is missing required field 'LastAttestedRound': ${e3}`);
          if (void 0 === e3.LnProvenWeight)
            throw new Error(`Response is missing required field 'LnProvenWeight': ${e3}`);
          if (void 0 === e3.VotersCommitment)
            throw new Error(`Response is missing required field 'VotersCommitment': ${e3}`);
          return new dt({ blockheaderscommitment: e3.BlockHeadersCommitment, firstattestedround: e3.FirstAttestedRound, lastattestedround: e3.LastAttestedRound, lnprovenweight: e3.LnProvenWeight, voterscommitment: e3.VotersCommitment });
        }
      }
      class pt extends xe {
        constructor({ currentRound: e3, onlineMoney: t3, totalMoney: r2 }) {
          super(), this.currentRound = e3, this.onlineMoney = t3, this.totalMoney = r2, this.attribute_map = { currentRound: "current_round", onlineMoney: "online-money", totalMoney: "total-money" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.current_round)
            throw new Error(`Response is missing required field 'current_round': ${e3}`);
          if (void 0 === e3["online-money"])
            throw new Error(`Response is missing required field 'online-money': ${e3}`);
          if (void 0 === e3["total-money"])
            throw new Error(`Response is missing required field 'total-money': ${e3}`);
          return new pt({ currentRound: e3.current_round, onlineMoney: e3["online-money"], totalMoney: e3["total-money"] });
        }
      }
      class ft extends xe {
        constructor({ key: e3, value: t3 }) {
          super(), this.key = e3, this.value = t3, this.attribute_map = { key: "key", value: "value" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.key)
            throw new Error(`Response is missing required field 'key': ${e3}`);
          if (void 0 === e3.value)
            throw new Error(`Response is missing required field 'value': ${e3}`);
          return new ft({ key: e3.key, value: gt.from_obj_for_encoding(e3.value) });
        }
      }
      class gt extends xe {
        constructor({ type: e3, bytes: t3, uint: r2 }) {
          super(), this.type = e3, this.bytes = t3, this.uint = r2, this.attribute_map = { type: "type", bytes: "bytes", uint: "uint" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.type)
            throw new Error(`Response is missing required field 'type': ${e3}`);
          if (void 0 === e3.bytes)
            throw new Error(`Response is missing required field 'bytes': ${e3}`);
          if (void 0 === e3.uint)
            throw new Error(`Response is missing required field 'uint': ${e3}`);
          return new gt({ type: e3.type, bytes: e3.bytes, uint: e3.uint });
        }
      }
      class mt extends xe {
        constructor({ deltas: e3 }) {
          super(), this.deltas = e3, this.attribute_map = { deltas: "deltas" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3.Deltas))
            throw new Error(`Response is missing required array field 'Deltas': ${e3}`);
          return new mt({ deltas: e3.Deltas.map(Qe.from_obj_for_encoding) });
        }
      }
      class yt extends xe {
        constructor({ consensusVersion: e3, fee: t3, genesisHash: r2, genesisId: s2, lastRound: n2, minFee: o2 }) {
          super(), this.consensusVersion = e3, this.fee = t3, this.genesisHash = "string" == typeof r2 ? new Uint8Array(i.lW.from(r2, "base64")) : r2, this.genesisId = s2, this.lastRound = n2, this.minFee = o2, this.attribute_map = { consensusVersion: "consensus-version", fee: "fee", genesisHash: "genesis-hash", genesisId: "genesis-id", lastRound: "last-round", minFee: "min-fee" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["consensus-version"])
            throw new Error(`Response is missing required field 'consensus-version': ${e3}`);
          if (void 0 === e3.fee)
            throw new Error(`Response is missing required field 'fee': ${e3}`);
          if (void 0 === e3["genesis-hash"])
            throw new Error(`Response is missing required field 'genesis-hash': ${e3}`);
          if (void 0 === e3["genesis-id"])
            throw new Error(`Response is missing required field 'genesis-id': ${e3}`);
          if (void 0 === e3["last-round"])
            throw new Error(`Response is missing required field 'last-round': ${e3}`);
          if (void 0 === e3["min-fee"])
            throw new Error(`Response is missing required field 'min-fee': ${e3}`);
          return new yt({ consensusVersion: e3["consensus-version"], fee: e3.fee, genesisHash: e3["genesis-hash"], genesisId: e3["genesis-id"], lastRound: e3["last-round"], minFee: e3["min-fee"] });
        }
      }
      class wt extends xe {
        constructor({ idx: e3, proof: t3, stibhash: r2, treedepth: s2, hashtype: n2 }) {
          super(), this.idx = e3, this.proof = "string" == typeof t3 ? new Uint8Array(i.lW.from(t3, "base64")) : t3, this.stibhash = "string" == typeof r2 ? new Uint8Array(i.lW.from(r2, "base64")) : r2, this.treedepth = s2, this.hashtype = n2, this.attribute_map = { idx: "idx", proof: "proof", stibhash: "stibhash", treedepth: "treedepth", hashtype: "hashtype" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.idx)
            throw new Error(`Response is missing required field 'idx': ${e3}`);
          if (void 0 === e3.proof)
            throw new Error(`Response is missing required field 'proof': ${e3}`);
          if (void 0 === e3.stibhash)
            throw new Error(`Response is missing required field 'stibhash': ${e3}`);
          if (void 0 === e3.treedepth)
            throw new Error(`Response is missing required field 'treedepth': ${e3}`);
          return new wt({ idx: e3.idx, proof: e3.proof, stibhash: e3.stibhash, treedepth: e3.treedepth, hashtype: e3.hashtype });
        }
      }
      class bt extends xe {
        constructor({ build: e3, genesisHashB64: t3, genesisId: r2, versions: s2 }) {
          super(), this.build = e3, this.genesisHashB64 = "string" == typeof t3 ? new Uint8Array(i.lW.from(t3, "base64")) : t3, this.genesisId = r2, this.versions = s2, this.attribute_map = { build: "build", genesisHashB64: "genesis_hash_b64", genesisId: "genesis_id", versions: "versions" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.build)
            throw new Error(`Response is missing required field 'build': ${e3}`);
          if (void 0 === e3.genesis_hash_b64)
            throw new Error(`Response is missing required field 'genesis_hash_b64': ${e3}`);
          if (void 0 === e3.genesis_id)
            throw new Error(`Response is missing required field 'genesis_id': ${e3}`);
          if (!Array.isArray(e3.versions))
            throw new Error(`Response is missing required array field 'versions': ${e3}`);
          return new bt({ build: Le.from_obj_for_encoding(e3.build), genesisHashB64: e3.genesis_hash_b64, genesisId: e3.genesis_id, versions: e3.versions });
        }
      }
      class vt {
        constructor(e3, t3) {
          this.c = e3, this.query = {}, this.intDecoding = t3 || T.DEFAULT;
        }
        prepare(e3) {
          return e3;
        }
        async do(e3 = {}) {
          const t3 = {};
          "default" !== this.intDecoding && (t3.intDecoding = this.intDecoding);
          const r2 = await this.c.get(this.path(), this.query, e3, t3);
          return this.prepare(r2.body);
        }
        async doRaw(e3 = {}) {
          return (await this.c.get(this.path(), this.query, e3, {}, false)).body;
        }
        setIntDecoding(e3) {
          if ("default" !== e3 && "safe" !== e3 && "mixed" !== e3 && "bigint" !== e3)
            throw new Error(`Invalid method for int decoding: ${e3}`);
          return this.intDecoding = e3, this;
        }
      }
      class xt extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.account = r2, this.account = r2;
        }
        path() {
          return `/v2/accounts/${this.account}`;
        }
        exclude(e3) {
          return this.query.exclude = e3, this;
        }
      }
      class At extends vt {
        constructor(e3, t3, r2, s2) {
          super(e3, t3), this.account = r2, this.assetID = s2, this.account = r2, this.assetID = s2;
        }
        path() {
          return `/v2/accounts/${this.account}/assets/${this.assetID}`;
        }
      }
      class _t extends vt {
        constructor(e3, t3, r2, s2) {
          super(e3, t3), this.account = r2, this.applicationID = s2, this.account = r2, this.applicationID = s2;
        }
        path() {
          return `/v2/accounts/${this.account}/applications/${this.applicationID}`;
        }
      }
      class Et extends vt {
        constructor(e3, t3) {
          if (super(e3), !Number.isInteger(t3))
            throw Error("roundNumber should be an integer");
          this.round = t3, this.query = { format: "msgpack" };
        }
        path() {
          return `/v2/blocks/${this.round}`;
        }
        prepare(e3) {
          if (e3 && e3.byteLength > 0)
            return Z(e3);
        }
      }
      function Tt(e3 = {}) {
        let t3 = e3;
        return Object.keys(t3).every((e4) => "content-type" !== e4.toLowerCase()) && (t3 = { ...e3 }, t3["Content-Type"] = "text/plain"), t3;
      }
      class St extends vt {
        constructor(e3, t3) {
          super(e3), this.source = t3, this.source = t3;
        }
        path() {
          return "/v2/teal/compile";
        }
        sourcemap(e3 = true) {
          return this.query.sourcemap = e3, this;
        }
        async do(e3 = {}) {
          const t3 = Tt(e3);
          return (await this.c.post(this.path(), i.lW.from(this.source), t3, this.query)).body;
        }
      }
      class Rt extends vt {
        constructor(e3, t3) {
          super(e3), this.blob = X(t3.get_obj_for_encoding(true));
        }
        path() {
          return "/v2/teal/dryrun";
        }
        async do(e3 = {}) {
          const t3 = Tt(e3);
          return (await this.c.post(this.path(), i.lW.from(this.blob), t3)).body;
        }
      }
      class kt extends vt {
        path() {
          return "/genesis";
        }
      }
      class It extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.index = r2, this.index = r2;
        }
        path() {
          return `/v2/assets/${this.index}`;
        }
      }
      class Bt extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.index = r2, this.index = r2;
        }
        path() {
          return `/v2/applications/${this.index}`;
        }
      }
      class Ut extends vt {
        constructor(e3, t3, r2) {
          if (super(e3, t3), !Number.isInteger(r2))
            throw Error("roundNumber should be an integer");
          this.round = r2;
        }
        path() {
          return `/v2/blocks/${this.round}/hash`;
        }
      }
      class Pt extends vt {
        constructor(e3, t3, r2, s2) {
          super(e3, t3), this.index = r2, this.index = r2;
          const n2 = i.lW.from(s2).toString("base64");
          this.query.name = encodeURI(`b64:${n2}`);
        }
        path() {
          return `/v2/applications/${this.index}/box`;
        }
        prepare(e3) {
          return $e.from_obj_for_encoding(e3);
        }
      }
      class jt extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.index = r2, this.index = r2, this.query.max = 0;
        }
        path() {
          return `/v2/applications/${this.index}/boxes`;
        }
        max(e3) {
          return this.query.max = e3, this;
        }
        prepare(e3) {
          return Ce.from_obj_for_encoding(e3);
        }
      }
      class qt extends vt {
        path() {
          return "/health";
        }
        async do(e3 = {}) {
          const t3 = await this.c.get(this.path(), {}, e3);
          if (!t3.ok)
            throw new Error(`Health response: ${t3.status}`);
          return {};
        }
      }
      class Dt extends vt {
        constructor(e3, t3) {
          super(e3), this.txid = t3, this.txid = t3, this.query.format = "msgpack";
        }
        prepare(e3) {
          if (e3 && e3.byteLength > 0)
            return Z(e3);
        }
        path() {
          return `/v2/transactions/pending/${this.txid}`;
        }
        max(e3) {
          return this.query.max = e3, this;
        }
      }
      class $t extends vt {
        constructor(e3) {
          super(e3), this.query.format = "msgpack";
        }
        path() {
          return "/v2/transactions/pending";
        }
        prepare(e3) {
          if (e3 && e3.byteLength > 0)
            return Z(e3);
        }
        max(e3) {
          return this.query.max = e3, this;
        }
      }
      class Ot extends vt {
        constructor(e3, t3) {
          super(e3), this.address = t3, this.address = t3, this.query.format = "msgpack";
        }
        prepare(e3) {
          if (e3 && e3.byteLength > 0)
            return Z(e3);
        }
        path() {
          return `/v2/accounts/${this.address}/transactions/pending`;
        }
        max(e3) {
          return this.query.max = e3, this;
        }
      }
      class Ct extends vt {
        constructor(e3, t3, r2, s2) {
          super(e3, t3), this.round = r2, this.txID = s2, this.round = r2, this.txID = s2;
        }
        path() {
          return `/v2/blocks/${this.round}/transactions/${this.txID}/proof`;
        }
        hashType(e3) {
          return this.query.hashtype = e3, this;
        }
      }
      function Lt(e3) {
        return e3 && void 0 !== e3.byteLength;
      }
      class Mt extends vt {
        constructor(e3, t3) {
          super(e3);
          let r2 = t3;
          if (Array.isArray(t3)) {
            if (!t3.every(Lt))
              throw new TypeError("Array elements must be byte arrays");
            r2 = k(...t3);
          } else if (!Lt(r2))
            throw new TypeError("Argument must be byte array");
          this.txnBytesToPost = r2;
        }
        path() {
          return "/v2/transactions";
        }
        async do(e3 = {}) {
          const t3 = function(e4 = {}) {
            let t4 = e4;
            return Object.keys(t4).every((e5) => "content-type" !== e5.toLowerCase()) && (t4 = { ...e4 }, t4["Content-Type"] = "application/x-binary"), t4;
          }(e3);
          return (await this.c.post(this.path(), i.lW.from(this.txnBytesToPost), t3)).body;
        }
      }
      class Nt extends vt {
        path() {
          return "/v2/status";
        }
      }
      class Ft extends vt {
        constructor(e3, t3, r2) {
          if (super(e3, t3), this.round = r2, !Number.isInteger(r2))
            throw Error("round should be an integer");
          this.round = r2;
        }
        path() {
          return `/v2/status/wait-for-block-after/${this.round}`;
        }
      }
      class Wt extends vt {
        path() {
          return "/v2/transactions/params";
        }
        prepare(e3) {
          return { flatFee: false, fee: e3.fee, firstRound: e3["last-round"], lastRound: e3["last-round"] + 1e3, genesisID: e3["genesis-id"], genesisHash: e3["genesis-hash"], minFee: e3["min-fee"] };
        }
      }
      class Kt extends vt {
        path() {
          return "/v2/ledger/supply";
        }
      }
      class zt extends vt {
        path() {
          return "/versions";
        }
      }
      class Vt extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.round = r2, this.round = r2;
        }
        path() {
          return `/v2/blocks/${this.round}/lightheader/proof`;
        }
      }
      class Gt extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.round = r2, this.round = r2;
        }
        path() {
          return `/v2/stateproofs/${this.round}`;
        }
      }
      class Ht extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.round = r2, this.round = r2;
        }
        path() {
          return `/v2/ledger/sync/${this.round}`;
        }
        async do(e3 = {}) {
          return (await this.c.post(this.path(), e3)).body;
        }
      }
      class Yt extends vt {
        path() {
          return "/v2/ledger/sync";
        }
        prepare(e3) {
          return Xe.from_obj_for_encoding(e3);
        }
      }
      class Jt extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.offset = r2, this.offset = r2;
        }
        path() {
          return `/v2/devmode/blocks/offset/${this.offset}`;
        }
        async do(e3 = {}) {
          return (await this.c.post(this.path(), e3)).body;
        }
      }
      class Xt extends vt {
        path() {
          return "/v2/devmode/blocks/offset";
        }
        prepare(e3) {
          return Je.from_obj_for_encoding(e3);
        }
      }
      class Zt extends vt {
        constructor(e3, t3) {
          super(e3), this.source = t3, this.source = t3;
        }
        path() {
          return "/v2/teal/disassemble";
        }
        async do(e3 = {}) {
          const t3 = function(e4 = {}) {
            let t4 = e4;
            return Object.keys(t4).every((e5) => "content-type" !== e5.toLowerCase()) && (t4 = { ...e4 }, t4["Content-Type"] = "text/plain"), t4;
          }(e3);
          return (await this.c.post(this.path(), i.lW.from(this.source), t3, this.query)).body;
        }
      }
      class Qt extends vt {
        constructor(e3, t3) {
          super(e3), this.query.format = "msgpack", this.requestBytes = J(t3.get_obj_for_encoding(true));
        }
        path() {
          return "/v2/transactions/simulate";
        }
        async do(e3 = {}) {
          const t3 = function(e4 = {}) {
            let t4 = e4;
            return Object.keys(t4).every((e5) => "content-type" !== e5.toLowerCase()) && (t4 = { ...e4 }, t4["Content-Type"] = "application/msgpack"), t4;
          }(e3), r2 = await this.c.post(this.path(), i.lW.from(this.requestBytes), t3, this.query, false);
          return this.prepare(r2.body);
        }
        prepare(e3) {
          const t3 = Z(e3);
          return at.from_obj_for_encoding(t3);
        }
      }
      class er extends vt {
        path() {
          return "/ready";
        }
      }
      class tr extends vt {
        path() {
          return "/v2/ledger/sync";
        }
        async do(e3 = {}) {
          return (await this.c.delete(this.path(), e3)).body;
        }
      }
      class rr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.id = r2, this.id = r2;
        }
        path() {
          return `/v2/deltas/txn/group/${this.id}`;
        }
      }
      class sr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.round = r2, this.round = r2;
        }
        path() {
          return `/v2/deltas/${this.round}`;
        }
      }
      class nr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.round = r2, this.round = r2;
        }
        path() {
          return `/v2/deltas/${this.round}/txn/group`;
        }
        prepare(e3) {
          return mt.from_obj_for_encoding(e3);
        }
      }
      class ir extends be {
        constructor(e3, t3, r2, s2 = {}) {
          super("X-Algo-API-Token", e3, t3, r2, s2);
        }
        healthCheck() {
          return new qt(this.c);
        }
        versionsCheck() {
          return new zt(this.c);
        }
        sendRawTransaction(e3) {
          return new Mt(this.c, e3);
        }
        accountInformation(e3) {
          return new xt(this.c, this.intDecoding, e3);
        }
        accountAssetInformation(e3, t3) {
          return new At(this.c, this.intDecoding, e3, t3);
        }
        accountApplicationInformation(e3, t3) {
          return new _t(this.c, this.intDecoding, e3, t3);
        }
        block(e3) {
          return new Et(this.c, e3);
        }
        getBlockHash(e3) {
          return new Ut(this.c, this.intDecoding, e3);
        }
        pendingTransactionInformation(e3) {
          return new Dt(this.c, e3);
        }
        pendingTransactionsInformation() {
          return new $t(this.c);
        }
        pendingTransactionByAddress(e3) {
          return new Ot(this.c, e3);
        }
        status() {
          return new Nt(this.c, this.intDecoding);
        }
        statusAfterBlock(e3) {
          return new Ft(this.c, this.intDecoding, e3);
        }
        getTransactionParams() {
          return new Wt(this.c);
        }
        supply() {
          return new Kt(this.c, this.intDecoding);
        }
        compile(e3) {
          return new St(this.c, e3);
        }
        disassemble(e3) {
          return new Zt(this.c, e3);
        }
        dryrun(e3) {
          return new Rt(this.c, e3);
        }
        getAssetByID(e3) {
          return new It(this.c, this.intDecoding, e3);
        }
        getApplicationByID(e3) {
          return new Bt(this.c, this.intDecoding, e3);
        }
        getApplicationBoxByName(e3, t3) {
          return new Pt(this.c, this.intDecoding, e3, t3);
        }
        getApplicationBoxes(e3) {
          return new jt(this.c, this.intDecoding, e3);
        }
        genesis() {
          return new kt(this.c, this.intDecoding);
        }
        getTransactionProof(e3, t3) {
          return new Ct(this.c, this.intDecoding, e3, t3);
        }
        getLightBlockHeaderProof(e3) {
          return new Vt(this.c, this.intDecoding, e3);
        }
        getStateProof(e3) {
          return new Gt(this.c, this.intDecoding, e3);
        }
        simulateRawTransactions(e3) {
          const t3 = [];
          if (Array.isArray(e3))
            for (const r3 of e3)
              t3.push(Z(r3));
          else
            t3.push(Z(e3));
          const r2 = new it({ txnGroups: [new ot({ txns: t3 })] });
          return this.simulateTransactions(r2);
        }
        simulateTransactions(e3) {
          return new Qt(this.c, e3);
        }
        setBlockOffsetTimestamp(e3) {
          return new Jt(this.c, this.intDecoding, e3);
        }
        getBlockOffsetTimestamp() {
          return new Xt(this.c, this.intDecoding);
        }
        setSyncRound(e3) {
          return new Ht(this.c, this.intDecoding, e3);
        }
        unsetSyncRound() {
          return new tr(this.c, this.intDecoding);
        }
        getSyncRound() {
          return new Yt(this.c, this.intDecoding);
        }
        ready() {
          return new er(this.c, this.intDecoding);
        }
        getLedgerStateDeltaForTransactionGroup(e3) {
          return new rr(this.c, this.intDecoding, e3);
        }
        getLedgerStateDelta(e3) {
          return new sr(this.c, this.intDecoding, e3);
        }
        getTransactionGroupLedgerStateDeltasForRound(e3) {
          return new nr(this.c, this.intDecoding, e3);
        }
      }
      class or extends be {
        constructor(e3, t3 = "http://127.0.0.1", r2 = 7833, s2 = {}) {
          super("X-KMD-API-Token", e3, t3, r2, s2);
        }
        async versions() {
          return (await this.c.get("/versions")).body;
        }
        async listWallets() {
          return (await this.c.get("/v1/wallets")).body;
        }
        async createWallet(e3, t3, r2 = new Uint8Array(), s2 = "sqlite") {
          const n2 = { wallet_name: e3, wallet_driver_name: s2, wallet_password: t3, master_derivation_key: i.lW.from(r2).toString("base64") };
          return (await this.c.post("/v1/wallet", n2)).body;
        }
        async initWalletHandle(e3, t3) {
          const r2 = { wallet_id: e3, wallet_password: t3 };
          return (await this.c.post("/v1/wallet/init", r2)).body;
        }
        async releaseWalletHandle(e3) {
          const t3 = { wallet_handle_token: e3 };
          return (await this.c.post("/v1/wallet/release", t3)).body;
        }
        async renewWalletHandle(e3) {
          const t3 = { wallet_handle_token: e3 };
          return (await this.c.post("/v1/wallet/renew", t3)).body;
        }
        async renameWallet(e3, t3, r2) {
          const s2 = { wallet_id: e3, wallet_password: t3, wallet_name: r2 };
          return (await this.c.post("/v1/wallet/rename", s2)).body;
        }
        async getWallet(e3) {
          const t3 = { wallet_handle_token: e3 };
          return (await this.c.post("/v1/wallet/info", t3)).body;
        }
        async exportMasterDerivationKey(e3, t3) {
          const r2 = { wallet_handle_token: e3, wallet_password: t3 }, s2 = await this.c.post("/v1/master-key/export", r2);
          return { master_derivation_key: i.lW.from(s2.body.master_derivation_key, "base64") };
        }
        async importKey(e3, t3) {
          const r2 = { wallet_handle_token: e3, private_key: i.lW.from(t3).toString("base64") };
          return (await this.c.post("/v1/key/import", r2)).body;
        }
        async exportKey(e3, t3, r2) {
          const s2 = { wallet_handle_token: e3, address: r2, wallet_password: t3 }, n2 = await this.c.post("/v1/key/export", s2);
          return { private_key: i.lW.from(n2.body.private_key, "base64") };
        }
        async generateKey(e3) {
          const t3 = { wallet_handle_token: e3, display_mnemonic: false };
          return (await this.c.post("/v1/key", t3)).body;
        }
        async deleteKey(e3, t3, r2) {
          const s2 = { wallet_handle_token: e3, address: r2, wallet_password: t3 };
          return (await this.c.delete("/v1/key", s2)).body;
        }
        async listKeys(e3) {
          const t3 = { wallet_handle_token: e3 };
          return (await this.c.post("/v1/key/list", t3)).body;
        }
        async signTransaction(e3, t3, r2) {
          const s2 = ce(r2), n2 = { wallet_handle_token: e3, wallet_password: t3, transaction: i.lW.from(s2.toByte()).toString("base64") }, o2 = await this.c.post("/v1/transaction/sign", n2);
          return 200 === o2.status ? i.lW.from(o2.body.signed_transaction, "base64") : o2.body;
        }
        async signTransactionWithSpecificPublicKey(e3, t3, r2, s2) {
          const n2 = ce(r2), o2 = { wallet_handle_token: e3, wallet_password: t3, transaction: i.lW.from(n2.toByte()).toString("base64"), public_key: i.lW.from(s2).toString("base64") }, a2 = await this.c.post("/v1/transaction/sign", o2);
          return 200 === a2.status ? i.lW.from(a2.body.signed_transaction, "base64") : a2.body;
        }
        async listMultisig(e3) {
          const t3 = { wallet_handle_token: e3 };
          return (await this.c.post("/v1/multisig/list", t3)).body;
        }
        async importMultisig(e3, t3, r2, s2) {
          const n2 = { wallet_handle_token: e3, multisig_version: t3, threshold: r2, pks: s2 };
          return (await this.c.post("/v1/multisig/import", n2)).body;
        }
        async exportMultisig(e3, t3) {
          const r2 = { wallet_handle_token: e3, address: t3 };
          return (await this.c.post("/v1/multisig/export", r2)).body;
        }
        async signMultisigTransaction(e3, t3, r2, s2, n2) {
          const o2 = ce(r2), a2 = { wallet_handle_token: e3, transaction: i.lW.from(o2.toByte()).toString("base64"), public_key: i.lW.from(s2).toString("base64"), partial_multisig: n2, wallet_password: t3 };
          return (await this.c.post("/v1/multisig/sign", a2)).body;
        }
        async deleteMultisig(e3, t3, r2) {
          const s2 = { wallet_handle_token: e3, address: r2, wallet_password: t3 };
          return (await this.c.delete("/v1/multisig", s2)).body;
        }
      }
      class ar extends vt {
        path() {
          return "/health";
        }
      }
      class cr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.index = r2, this.index = r2;
        }
        path() {
          return `/v2/assets/${this.index}/balances`;
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        currencyGreaterThan(e3) {
          return this.query["currency-greater-than"] = e3, this;
        }
        currencyLessThan(e3) {
          return this.query["currency-less-than"] = e3, this;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        includeAll(e3 = true) {
          return this.query["include-all"] = e3, this;
        }
      }
      function ur(e3) {
        return "string" == typeof e3 ? e3 : i.lW.from(e3).toString("base64");
      }
      class lr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.account = r2, this.account = r2;
        }
        path() {
          return `/v2/accounts/${this.account}/transactions`;
        }
        notePrefix(e3) {
          return this.query["note-prefix"] = ur(e3), this;
        }
        txType(e3) {
          return this.query["tx-type"] = e3, this;
        }
        sigType(e3) {
          return this.query["sig-type"] = e3, this;
        }
        txid(e3) {
          return this.query.txid = e3, this;
        }
        round(e3) {
          return this.query.round = e3, this;
        }
        minRound(e3) {
          return this.query["min-round"] = e3, this;
        }
        maxRound(e3) {
          return this.query["max-round"] = e3, this;
        }
        assetID(e3) {
          return this.query["asset-id"] = e3, this;
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        beforeTime(e3) {
          return this.query["before-time"] = e3, this;
        }
        afterTime(e3) {
          return this.query["after-time"] = e3, this;
        }
        currencyGreaterThan(e3) {
          return this.query["currency-greater-than"] = e3, this;
        }
        currencyLessThan(e3) {
          return this.query["currency-less-than"] = e3, this;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        rekeyTo(e3) {
          return this.query["rekey-to"] = e3, this;
        }
      }
      class hr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.index = r2, this.index = r2;
        }
        path() {
          return `/v2/assets/${this.index}/transactions`;
        }
        notePrefix(e3) {
          return this.query["note-prefix"] = ur(e3), this;
        }
        txType(e3) {
          return this.query["tx-type"] = e3, this;
        }
        sigType(e3) {
          return this.query["sig-type"] = e3, this;
        }
        txid(e3) {
          return this.query.txid = e3, this;
        }
        round(e3) {
          return this.query.round = e3, this;
        }
        minRound(e3) {
          return this.query["min-round"] = e3, this;
        }
        maxRound(e3) {
          return this.query["max-round"] = e3, this;
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        beforeTime(e3) {
          return this.query["before-time"] = e3, this;
        }
        afterTime(e3) {
          return this.query["after-time"] = e3, this;
        }
        currencyGreaterThan(e3) {
          return this.query["currency-greater-than"] = e3, this;
        }
        currencyLessThan(e3) {
          return this.query["currency-less-than"] = e3, this;
        }
        addressRole(e3) {
          return this.query["address-role"] = e3, this;
        }
        address(e3) {
          return this.query.address = e3, this;
        }
        excludeCloseTo(e3) {
          return this.query["exclude-close-to"] = e3, this;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        rekeyTo(e3) {
          return this.query["rekey-to"] = e3, this;
        }
      }
      class dr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.round = r2, this.round = r2;
        }
        path() {
          return `/v2/blocks/${this.round}`;
        }
        headerOnly(e3) {
          return this.query["header-only"] = e3, this;
        }
      }
      class pr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.txID = r2, this.txID = r2;
        }
        path() {
          return `/v2/transactions/${this.txID}`;
        }
      }
      class fr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.account = r2, this.account = r2;
        }
        path() {
          return `/v2/accounts/${this.account}`;
        }
        round(e3) {
          return this.query.round = e3, this;
        }
        includeAll(e3 = true) {
          return this.query["include-all"] = e3, this;
        }
        exclude(e3) {
          return this.query.exclude = e3, this;
        }
      }
      class gr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.account = r2, this.account = r2;
        }
        path() {
          return `/v2/accounts/${this.account}/assets`;
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        round(e3) {
          return this.query.round = e3, this;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        includeAll(e3 = true) {
          return this.query["include-all"] = e3, this;
        }
        assetId(e3) {
          return this.query["asset-id"] = e3, this;
        }
      }
      class mr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.account = r2, this.account = r2;
        }
        path() {
          return `/v2/accounts/${this.account}/created-assets`;
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        round(e3) {
          return this.query.round = e3, this;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        includeAll(e3 = true) {
          return this.query["include-all"] = e3, this;
        }
        assetID(e3) {
          return this.query["asset-id"] = e3, this;
        }
      }
      class yr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.account = r2, this.account = r2;
        }
        path() {
          return `/v2/accounts/${this.account}/apps-local-state`;
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        round(e3) {
          return this.query.round = e3, this;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        includeAll(e3 = true) {
          return this.query["include-all"] = e3, this;
        }
        applicationID(e3) {
          return this.query["application-id"] = e3, this;
        }
      }
      class wr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.account = r2, this.account = r2;
        }
        path() {
          return `/v2/accounts/${this.account}/created-applications`;
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        round(e3) {
          return this.query.round = e3, this;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        includeAll(e3 = true) {
          return this.query["include-all"] = e3, this;
        }
        applicationID(e3) {
          return this.query["application-id"] = e3, this;
        }
      }
      class br extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.index = r2, this.index = r2;
        }
        path() {
          return `/v2/assets/${this.index}`;
        }
        includeAll(e3 = true) {
          return this.query["include-all"] = e3, this;
        }
      }
      class vr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.index = r2, this.index = r2;
        }
        path() {
          return `/v2/applications/${this.index}`;
        }
        includeAll(e3 = true) {
          return this.query["include-all"] = e3, this;
        }
      }
      class xr extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.appID = r2, this.appID = r2;
        }
        path() {
          return `/v2/applications/${this.appID}/logs`;
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        minRound(e3) {
          return this.query["min-round"] = e3, this;
        }
        maxRound(e3) {
          return this.query["max-round"] = e3, this;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        sender(e3) {
          return this.query["sender-address"] = e3, this;
        }
        txid(e3) {
          return this.query.txid = e3, this;
        }
      }
      class Ar extends xe {
        constructor({ address: e3, amount: t3, amountWithoutPendingRewards: r2, pendingRewards: s2, rewards: n2, round: i2, status: o2, totalAppsOptedIn: a2, totalAssetsOptedIn: c2, totalBoxBytes: u2, totalBoxes: l2, totalCreatedApps: h2, totalCreatedAssets: d2, appsLocalState: p2, appsTotalExtraPages: f2, appsTotalSchema: g2, assets: m2, authAddr: y2, closedAtRound: w2, createdApps: b2, createdAssets: v2, createdAtRound: x2, deleted: A2, participation: _2, rewardBase: E2, sigType: T2 }) {
          super(), this.address = e3, this.amount = t3, this.amountWithoutPendingRewards = r2, this.pendingRewards = s2, this.rewards = n2, this.round = i2, this.status = o2, this.totalAppsOptedIn = a2, this.totalAssetsOptedIn = c2, this.totalBoxBytes = u2, this.totalBoxes = l2, this.totalCreatedApps = h2, this.totalCreatedAssets = d2, this.appsLocalState = p2, this.appsTotalExtraPages = f2, this.appsTotalSchema = g2, this.assets = m2, this.authAddr = y2, this.closedAtRound = w2, this.createdApps = b2, this.createdAssets = v2, this.createdAtRound = x2, this.deleted = A2, this.participation = _2, this.rewardBase = E2, this.sigType = T2, this.attribute_map = { address: "address", amount: "amount", amountWithoutPendingRewards: "amount-without-pending-rewards", pendingRewards: "pending-rewards", rewards: "rewards", round: "round", status: "status", totalAppsOptedIn: "total-apps-opted-in", totalAssetsOptedIn: "total-assets-opted-in", totalBoxBytes: "total-box-bytes", totalBoxes: "total-boxes", totalCreatedApps: "total-created-apps", totalCreatedAssets: "total-created-assets", appsLocalState: "apps-local-state", appsTotalExtraPages: "apps-total-extra-pages", appsTotalSchema: "apps-total-schema", assets: "assets", authAddr: "auth-addr", closedAtRound: "closed-at-round", createdApps: "created-apps", createdAssets: "created-assets", createdAtRound: "created-at-round", deleted: "deleted", participation: "participation", rewardBase: "reward-base", sigType: "sig-type" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.address)
            throw new Error(`Response is missing required field 'address': ${e3}`);
          if (void 0 === e3.amount)
            throw new Error(`Response is missing required field 'amount': ${e3}`);
          if (void 0 === e3["amount-without-pending-rewards"])
            throw new Error(`Response is missing required field 'amount-without-pending-rewards': ${e3}`);
          if (void 0 === e3["pending-rewards"])
            throw new Error(`Response is missing required field 'pending-rewards': ${e3}`);
          if (void 0 === e3.rewards)
            throw new Error(`Response is missing required field 'rewards': ${e3}`);
          if (void 0 === e3.round)
            throw new Error(`Response is missing required field 'round': ${e3}`);
          if (void 0 === e3.status)
            throw new Error(`Response is missing required field 'status': ${e3}`);
          if (void 0 === e3["total-apps-opted-in"])
            throw new Error(`Response is missing required field 'total-apps-opted-in': ${e3}`);
          if (void 0 === e3["total-assets-opted-in"])
            throw new Error(`Response is missing required field 'total-assets-opted-in': ${e3}`);
          if (void 0 === e3["total-box-bytes"])
            throw new Error(`Response is missing required field 'total-box-bytes': ${e3}`);
          if (void 0 === e3["total-boxes"])
            throw new Error(`Response is missing required field 'total-boxes': ${e3}`);
          if (void 0 === e3["total-created-apps"])
            throw new Error(`Response is missing required field 'total-created-apps': ${e3}`);
          if (void 0 === e3["total-created-assets"])
            throw new Error(`Response is missing required field 'total-created-assets': ${e3}`);
          return new Ar({ address: e3.address, amount: e3.amount, amountWithoutPendingRewards: e3["amount-without-pending-rewards"], pendingRewards: e3["pending-rewards"], rewards: e3.rewards, round: e3.round, status: e3.status, totalAppsOptedIn: e3["total-apps-opted-in"], totalAssetsOptedIn: e3["total-assets-opted-in"], totalBoxBytes: e3["total-box-bytes"], totalBoxes: e3["total-boxes"], totalCreatedApps: e3["total-created-apps"], totalCreatedAssets: e3["total-created-assets"], appsLocalState: void 0 !== e3["apps-local-state"] ? e3["apps-local-state"].map(kr.from_obj_for_encoding) : void 0, appsTotalExtraPages: e3["apps-total-extra-pages"], appsTotalSchema: void 0 !== e3["apps-total-schema"] ? qr.from_obj_for_encoding(e3["apps-total-schema"]) : void 0, assets: void 0 !== e3.assets ? e3.assets.map(Cr.from_obj_for_encoding) : void 0, authAddr: e3["auth-addr"], closedAtRound: e3["closed-at-round"], createdApps: void 0 !== e3["created-apps"] ? e3["created-apps"].map(Rr.from_obj_for_encoding) : void 0, createdAssets: void 0 !== e3["created-assets"] ? e3["created-assets"].map($r.from_obj_for_encoding) : void 0, createdAtRound: e3["created-at-round"], deleted: e3.deleted, participation: void 0 !== e3.participation ? _r.from_obj_for_encoding(e3.participation) : void 0, rewardBase: e3["reward-base"], sigType: e3["sig-type"] });
        }
      }
      class _r extends xe {
        constructor({ selectionParticipationKey: e3, voteFirstValid: t3, voteKeyDilution: r2, voteLastValid: s2, voteParticipationKey: n2, stateProofKey: o2 }) {
          super(), this.selectionParticipationKey = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.voteFirstValid = t3, this.voteKeyDilution = r2, this.voteLastValid = s2, this.voteParticipationKey = "string" == typeof n2 ? new Uint8Array(i.lW.from(n2, "base64")) : n2, this.stateProofKey = "string" == typeof o2 ? new Uint8Array(i.lW.from(o2, "base64")) : o2, this.attribute_map = { selectionParticipationKey: "selection-participation-key", voteFirstValid: "vote-first-valid", voteKeyDilution: "vote-key-dilution", voteLastValid: "vote-last-valid", voteParticipationKey: "vote-participation-key", stateProofKey: "state-proof-key" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["selection-participation-key"])
            throw new Error(`Response is missing required field 'selection-participation-key': ${e3}`);
          if (void 0 === e3["vote-first-valid"])
            throw new Error(`Response is missing required field 'vote-first-valid': ${e3}`);
          if (void 0 === e3["vote-key-dilution"])
            throw new Error(`Response is missing required field 'vote-key-dilution': ${e3}`);
          if (void 0 === e3["vote-last-valid"])
            throw new Error(`Response is missing required field 'vote-last-valid': ${e3}`);
          if (void 0 === e3["vote-participation-key"])
            throw new Error(`Response is missing required field 'vote-participation-key': ${e3}`);
          return new _r({ selectionParticipationKey: e3["selection-participation-key"], voteFirstValid: e3["vote-first-valid"], voteKeyDilution: e3["vote-key-dilution"], voteLastValid: e3["vote-last-valid"], voteParticipationKey: e3["vote-participation-key"], stateProofKey: e3["state-proof-key"] });
        }
      }
      class Er extends xe {
        constructor({ account: e3, currentRound: t3 }) {
          super(), this.account = e3, this.currentRound = t3, this.attribute_map = { account: "account", currentRound: "current-round" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.account)
            throw new Error(`Response is missing required field 'account': ${e3}`);
          if (void 0 === e3["current-round"])
            throw new Error(`Response is missing required field 'current-round': ${e3}`);
          return new Er({ account: Ar.from_obj_for_encoding(e3.account), currentRound: e3["current-round"] });
        }
      }
      class Tr extends xe {
        constructor({ address: e3, delta: t3 }) {
          super(), this.address = e3, this.delta = t3, this.attribute_map = { address: "address", delta: "delta" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.address)
            throw new Error(`Response is missing required field 'address': ${e3}`);
          if (!Array.isArray(e3.delta))
            throw new Error(`Response is missing required array field 'delta': ${e3}`);
          return new Tr({ address: e3.address, delta: e3.delta.map(Zr.from_obj_for_encoding) });
        }
      }
      class Sr extends xe {
        constructor({ accounts: e3, currentRound: t3, nextToken: r2 }) {
          super(), this.accounts = e3, this.currentRound = t3, this.nextToken = r2, this.attribute_map = { accounts: "accounts", currentRound: "current-round", nextToken: "next-token" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3.accounts))
            throw new Error(`Response is missing required array field 'accounts': ${e3}`);
          if (void 0 === e3["current-round"])
            throw new Error(`Response is missing required field 'current-round': ${e3}`);
          return new Sr({ accounts: e3.accounts.map(Ar.from_obj_for_encoding), currentRound: e3["current-round"], nextToken: e3["next-token"] });
        }
      }
      class Rr extends xe {
        constructor({ id: e3, params: t3, createdAtRound: r2, deleted: s2, deletedAtRound: n2 }) {
          super(), this.id = e3, this.params = t3, this.createdAtRound = r2, this.deleted = s2, this.deletedAtRound = n2, this.attribute_map = { id: "id", params: "params", createdAtRound: "created-at-round", deleted: "deleted", deletedAtRound: "deleted-at-round" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.id)
            throw new Error(`Response is missing required field 'id': ${e3}`);
          if (void 0 === e3.params)
            throw new Error(`Response is missing required field 'params': ${e3}`);
          return new Rr({ id: e3.id, params: Pr.from_obj_for_encoding(e3.params), createdAtRound: e3["created-at-round"], deleted: e3.deleted, deletedAtRound: e3["deleted-at-round"] });
        }
      }
      class kr extends xe {
        constructor({ id: e3, schema: t3, closedOutAtRound: r2, deleted: s2, keyValue: n2, optedInAtRound: i2 }) {
          super(), this.id = e3, this.schema = t3, this.closedOutAtRound = r2, this.deleted = s2, this.keyValue = n2, this.optedInAtRound = i2, this.attribute_map = { id: "id", schema: "schema", closedOutAtRound: "closed-out-at-round", deleted: "deleted", keyValue: "key-value", optedInAtRound: "opted-in-at-round" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.id)
            throw new Error(`Response is missing required field 'id': ${e3}`);
          if (void 0 === e3.schema)
            throw new Error(`Response is missing required field 'schema': ${e3}`);
          return new kr({ id: e3.id, schema: qr.from_obj_for_encoding(e3.schema), closedOutAtRound: e3["closed-out-at-round"], deleted: e3.deleted, keyValue: void 0 !== e3["key-value"] ? e3["key-value"].map(ps.from_obj_for_encoding) : void 0, optedInAtRound: e3["opted-in-at-round"] });
        }
      }
      class Ir extends xe {
        constructor({ appsLocalStates: e3, currentRound: t3, nextToken: r2 }) {
          super(), this.appsLocalStates = e3, this.currentRound = t3, this.nextToken = r2, this.attribute_map = { appsLocalStates: "apps-local-states", currentRound: "current-round", nextToken: "next-token" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3["apps-local-states"]))
            throw new Error(`Response is missing required array field 'apps-local-states': ${e3}`);
          if (void 0 === e3["current-round"])
            throw new Error(`Response is missing required field 'current-round': ${e3}`);
          return new Ir({ appsLocalStates: e3["apps-local-states"].map(kr.from_obj_for_encoding), currentRound: e3["current-round"], nextToken: e3["next-token"] });
        }
      }
      class Br extends xe {
        constructor({ logs: e3, txid: t3 }) {
          super(), this.logs = e3, this.txid = t3, this.attribute_map = { logs: "logs", txid: "txid" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3.logs))
            throw new Error(`Response is missing required array field 'logs': ${e3}`);
          if (void 0 === e3.txid)
            throw new Error(`Response is missing required field 'txid': ${e3}`);
          return new Br({ logs: e3.logs, txid: e3.txid });
        }
      }
      class Ur extends xe {
        constructor({ applicationId: e3, currentRound: t3, logData: r2, nextToken: s2 }) {
          super(), this.applicationId = e3, this.currentRound = t3, this.logData = r2, this.nextToken = s2, this.attribute_map = { applicationId: "application-id", currentRound: "current-round", logData: "log-data", nextToken: "next-token" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["application-id"])
            throw new Error(`Response is missing required field 'application-id': ${e3}`);
          if (void 0 === e3["current-round"])
            throw new Error(`Response is missing required field 'current-round': ${e3}`);
          return new Ur({ applicationId: e3["application-id"], currentRound: e3["current-round"], logData: void 0 !== e3["log-data"] ? e3["log-data"].map(Br.from_obj_for_encoding) : void 0, nextToken: e3["next-token"] });
        }
      }
      class Pr extends xe {
        constructor({ approvalProgram: e3, clearStateProgram: t3, creator: r2, extraProgramPages: s2, globalState: n2, globalStateSchema: o2, localStateSchema: a2 }) {
          super(), this.approvalProgram = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.clearStateProgram = "string" == typeof t3 ? new Uint8Array(i.lW.from(t3, "base64")) : t3, this.creator = r2, this.extraProgramPages = s2, this.globalState = n2, this.globalStateSchema = o2, this.localStateSchema = a2, this.attribute_map = { approvalProgram: "approval-program", clearStateProgram: "clear-state-program", creator: "creator", extraProgramPages: "extra-program-pages", globalState: "global-state", globalStateSchema: "global-state-schema", localStateSchema: "local-state-schema" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["approval-program"])
            throw new Error(`Response is missing required field 'approval-program': ${e3}`);
          if (void 0 === e3["clear-state-program"])
            throw new Error(`Response is missing required field 'clear-state-program': ${e3}`);
          return new Pr({ approvalProgram: e3["approval-program"], clearStateProgram: e3["clear-state-program"], creator: e3.creator, extraProgramPages: e3["extra-program-pages"], globalState: void 0 !== e3["global-state"] ? e3["global-state"].map(ps.from_obj_for_encoding) : void 0, globalStateSchema: void 0 !== e3["global-state-schema"] ? qr.from_obj_for_encoding(e3["global-state-schema"]) : void 0, localStateSchema: void 0 !== e3["local-state-schema"] ? qr.from_obj_for_encoding(e3["local-state-schema"]) : void 0 });
        }
      }
      class jr extends xe {
        constructor({ currentRound: e3, application: t3 }) {
          super(), this.currentRound = e3, this.application = t3, this.attribute_map = { currentRound: "current-round", application: "application" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["current-round"])
            throw new Error(`Response is missing required field 'current-round': ${e3}`);
          return new jr({ currentRound: e3["current-round"], application: void 0 !== e3.application ? Rr.from_obj_for_encoding(e3.application) : void 0 });
        }
      }
      class qr extends xe {
        constructor({ numByteSlice: e3, numUint: t3 }) {
          super(), this.numByteSlice = e3, this.numUint = t3, this.attribute_map = { numByteSlice: "num-byte-slice", numUint: "num-uint" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["num-byte-slice"])
            throw new Error(`Response is missing required field 'num-byte-slice': ${e3}`);
          if (void 0 === e3["num-uint"])
            throw new Error(`Response is missing required field 'num-uint': ${e3}`);
          return new qr({ numByteSlice: e3["num-byte-slice"], numUint: e3["num-uint"] });
        }
      }
      class Dr extends xe {
        constructor({ applications: e3, currentRound: t3, nextToken: r2 }) {
          super(), this.applications = e3, this.currentRound = t3, this.nextToken = r2, this.attribute_map = { applications: "applications", currentRound: "current-round", nextToken: "next-token" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3.applications))
            throw new Error(`Response is missing required array field 'applications': ${e3}`);
          if (void 0 === e3["current-round"])
            throw new Error(`Response is missing required field 'current-round': ${e3}`);
          return new Dr({ applications: e3.applications.map(Rr.from_obj_for_encoding), currentRound: e3["current-round"], nextToken: e3["next-token"] });
        }
      }
      class $r extends xe {
        constructor({ index: e3, params: t3, createdAtRound: r2, deleted: s2, destroyedAtRound: n2 }) {
          super(), this.index = e3, this.params = t3, this.createdAtRound = r2, this.deleted = s2, this.destroyedAtRound = n2, this.attribute_map = { index: "index", params: "params", createdAtRound: "created-at-round", deleted: "deleted", destroyedAtRound: "destroyed-at-round" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.index)
            throw new Error(`Response is missing required field 'index': ${e3}`);
          if (void 0 === e3.params)
            throw new Error(`Response is missing required field 'params': ${e3}`);
          return new $r({ index: e3.index, params: Mr.from_obj_for_encoding(e3.params), createdAtRound: e3["created-at-round"], deleted: e3.deleted, destroyedAtRound: e3["destroyed-at-round"] });
        }
      }
      class Or extends xe {
        constructor({ balances: e3, currentRound: t3, nextToken: r2 }) {
          super(), this.balances = e3, this.currentRound = t3, this.nextToken = r2, this.attribute_map = { balances: "balances", currentRound: "current-round", nextToken: "next-token" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3.balances))
            throw new Error(`Response is missing required array field 'balances': ${e3}`);
          if (void 0 === e3["current-round"])
            throw new Error(`Response is missing required field 'current-round': ${e3}`);
          return new Or({ balances: e3.balances.map(ss.from_obj_for_encoding), currentRound: e3["current-round"], nextToken: e3["next-token"] });
        }
      }
      class Cr extends xe {
        constructor({ amount: e3, assetId: t3, isFrozen: r2, deleted: s2, optedInAtRound: n2, optedOutAtRound: i2 }) {
          super(), this.amount = e3, this.assetId = t3, this.isFrozen = r2, this.deleted = s2, this.optedInAtRound = n2, this.optedOutAtRound = i2, this.attribute_map = { amount: "amount", assetId: "asset-id", isFrozen: "is-frozen", deleted: "deleted", optedInAtRound: "opted-in-at-round", optedOutAtRound: "opted-out-at-round" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.amount)
            throw new Error(`Response is missing required field 'amount': ${e3}`);
          if (void 0 === e3["asset-id"])
            throw new Error(`Response is missing required field 'asset-id': ${e3}`);
          if (void 0 === e3["is-frozen"])
            throw new Error(`Response is missing required field 'is-frozen': ${e3}`);
          return new Cr({ amount: e3.amount, assetId: e3["asset-id"], isFrozen: e3["is-frozen"], deleted: e3.deleted, optedInAtRound: e3["opted-in-at-round"], optedOutAtRound: e3["opted-out-at-round"] });
        }
      }
      class Lr extends xe {
        constructor({ assets: e3, currentRound: t3, nextToken: r2 }) {
          super(), this.assets = e3, this.currentRound = t3, this.nextToken = r2, this.attribute_map = { assets: "assets", currentRound: "current-round", nextToken: "next-token" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3.assets))
            throw new Error(`Response is missing required array field 'assets': ${e3}`);
          if (void 0 === e3["current-round"])
            throw new Error(`Response is missing required field 'current-round': ${e3}`);
          return new Lr({ assets: e3.assets.map(Cr.from_obj_for_encoding), currentRound: e3["current-round"], nextToken: e3["next-token"] });
        }
      }
      class Mr extends xe {
        constructor({ creator: e3, decimals: t3, total: r2, clawback: s2, defaultFrozen: n2, freeze: o2, manager: a2, metadataHash: c2, name: u2, nameB64: l2, reserve: h2, unitName: d2, unitNameB64: p2, url: f2, urlB64: g2 }) {
          super(), this.creator = e3, this.decimals = t3, this.total = r2, this.clawback = s2, this.defaultFrozen = n2, this.freeze = o2, this.manager = a2, this.metadataHash = "string" == typeof c2 ? new Uint8Array(i.lW.from(c2, "base64")) : c2, this.name = u2, this.nameB64 = "string" == typeof l2 ? new Uint8Array(i.lW.from(l2, "base64")) : l2, this.reserve = h2, this.unitName = d2, this.unitNameB64 = "string" == typeof p2 ? new Uint8Array(i.lW.from(p2, "base64")) : p2, this.url = f2, this.urlB64 = "string" == typeof g2 ? new Uint8Array(i.lW.from(g2, "base64")) : g2, this.attribute_map = { creator: "creator", decimals: "decimals", total: "total", clawback: "clawback", defaultFrozen: "default-frozen", freeze: "freeze", manager: "manager", metadataHash: "metadata-hash", name: "name", nameB64: "name-b64", reserve: "reserve", unitName: "unit-name", unitNameB64: "unit-name-b64", url: "url", urlB64: "url-b64" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.creator)
            throw new Error(`Response is missing required field 'creator': ${e3}`);
          if (void 0 === e3.decimals)
            throw new Error(`Response is missing required field 'decimals': ${e3}`);
          if (void 0 === e3.total)
            throw new Error(`Response is missing required field 'total': ${e3}`);
          return new Mr({ creator: e3.creator, decimals: e3.decimals, total: e3.total, clawback: e3.clawback, defaultFrozen: e3["default-frozen"], freeze: e3.freeze, manager: e3.manager, metadataHash: e3["metadata-hash"], name: e3.name, nameB64: e3["name-b64"], reserve: e3.reserve, unitName: e3["unit-name"], unitNameB64: e3["unit-name-b64"], url: e3.url, urlB64: e3["url-b64"] });
        }
      }
      class Nr extends xe {
        constructor({ asset: e3, currentRound: t3 }) {
          super(), this.asset = e3, this.currentRound = t3, this.attribute_map = { asset: "asset", currentRound: "current-round" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.asset)
            throw new Error(`Response is missing required field 'asset': ${e3}`);
          if (void 0 === e3["current-round"])
            throw new Error(`Response is missing required field 'current-round': ${e3}`);
          return new Nr({ asset: $r.from_obj_for_encoding(e3.asset), currentRound: e3["current-round"] });
        }
      }
      class Fr extends xe {
        constructor({ assets: e3, currentRound: t3, nextToken: r2 }) {
          super(), this.assets = e3, this.currentRound = t3, this.nextToken = r2, this.attribute_map = { assets: "assets", currentRound: "current-round", nextToken: "next-token" };
        }
        static from_obj_for_encoding(e3) {
          if (!Array.isArray(e3.assets))
            throw new Error(`Response is missing required array field 'assets': ${e3}`);
          if (void 0 === e3["current-round"])
            throw new Error(`Response is missing required field 'current-round': ${e3}`);
          return new Fr({ assets: e3.assets.map($r.from_obj_for_encoding), currentRound: e3["current-round"], nextToken: e3["next-token"] });
        }
      }
      class Wr extends xe {
        constructor({ genesisHash: e3, genesisId: t3, previousBlockHash: r2, round: s2, seed: n2, timestamp: o2, transactionsRoot: a2, transactionsRootSha256: c2, participationUpdates: u2, rewards: l2, stateProofTracking: h2, transactions: d2, txnCounter: p2, upgradeState: f2, upgradeVote: g2 }) {
          super(), this.genesisHash = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.genesisId = t3, this.previousBlockHash = "string" == typeof r2 ? new Uint8Array(i.lW.from(r2, "base64")) : r2, this.round = s2, this.seed = "string" == typeof n2 ? new Uint8Array(i.lW.from(n2, "base64")) : n2, this.timestamp = o2, this.transactionsRoot = "string" == typeof a2 ? new Uint8Array(i.lW.from(a2, "base64")) : a2, this.transactionsRootSha256 = "string" == typeof c2 ? new Uint8Array(i.lW.from(c2, "base64")) : c2, this.participationUpdates = u2, this.rewards = l2, this.stateProofTracking = h2, this.transactions = d2, this.txnCounter = p2, this.upgradeState = f2, this.upgradeVote = g2, this.attribute_map = { genesisHash: "genesis-hash", genesisId: "genesis-id", previousBlockHash: "previous-block-hash", round: "round", seed: "seed", timestamp: "timestamp", transactionsRoot: "transactions-root", transactionsRootSha256: "transactions-root-sha256", participationUpdates: "participation-updates", rewards: "rewards", stateProofTracking: "state-proof-tracking", transactions: "transactions", txnCounter: "txn-counter", upgradeState: "upgrade-state", upgradeVote: "upgrade-vote" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["genesis-hash"])
            throw new Error(`Response is missing required field 'genesis-hash': ${e3}`);
          if (void 0 === e3["genesis-id"])
            throw new Error(`Response is missing required field 'genesis-id': ${e3}`);
          if (void 0 === e3["previous-block-hash"])
            throw new Error(`Response is missing required field 'previous-block-hash': ${e3}`);
          if (void 0 === e3.round)
            throw new Error(`Response is missing required field 'round': ${e3}`);
          if (void 0 === e3.seed)
            throw new Error(`Response is missing required field 'seed': ${e3}`);
          if (void 0 === e3.timestamp)
            throw new Error(`Response is missing required field 'timestamp': ${e3}`);
          if (void 0 === e3["transactions-root"])
            throw new Error(`Response is missing required field 'transactions-root': ${e3}`);
          if (void 0 === e3["transactions-root-sha256"])
            throw new Error(`Response is missing required field 'transactions-root-sha256': ${e3}`);
          return new Wr({ genesisHash: e3["genesis-hash"], genesisId: e3["genesis-id"], previousBlockHash: e3["previous-block-hash"], round: e3.round, seed: e3.seed, timestamp: e3.timestamp, transactionsRoot: e3["transactions-root"], transactionsRootSha256: e3["transactions-root-sha256"], participationUpdates: void 0 !== e3["participation-updates"] ? ns.from_obj_for_encoding(e3["participation-updates"]) : void 0, rewards: void 0 !== e3.rewards ? Kr.from_obj_for_encoding(e3.rewards) : void 0, stateProofTracking: void 0 !== e3["state-proof-tracking"] ? e3["state-proof-tracking"].map(ls.from_obj_for_encoding) : void 0, transactions: void 0 !== e3.transactions ? e3.transactions.map(gs.from_obj_for_encoding) : void 0, txnCounter: e3["txn-counter"], upgradeState: void 0 !== e3["upgrade-state"] ? zr.from_obj_for_encoding(e3["upgrade-state"]) : void 0, upgradeVote: void 0 !== e3["upgrade-vote"] ? Vr.from_obj_for_encoding(e3["upgrade-vote"]) : void 0 });
        }
      }
      class Kr extends xe {
        constructor({ feeSink: e3, rewardsCalculationRound: t3, rewardsLevel: r2, rewardsPool: s2, rewardsRate: n2, rewardsResidue: i2 }) {
          super(), this.feeSink = e3, this.rewardsCalculationRound = t3, this.rewardsLevel = r2, this.rewardsPool = s2, this.rewardsRate = n2, this.rewardsResidue = i2, this.attribute_map = { feeSink: "fee-sink", rewardsCalculationRound: "rewards-calculation-round", rewardsLevel: "rewards-level", rewardsPool: "rewards-pool", rewardsRate: "rewards-rate", rewardsResidue: "rewards-residue" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["fee-sink"])
            throw new Error(`Response is missing required field 'fee-sink': ${e3}`);
          if (void 0 === e3["rewards-calculation-round"])
            throw new Error(`Response is missing required field 'rewards-calculation-round': ${e3}`);
          if (void 0 === e3["rewards-level"])
            throw new Error(`Response is missing required field 'rewards-level': ${e3}`);
          if (void 0 === e3["rewards-pool"])
            throw new Error(`Response is missing required field 'rewards-pool': ${e3}`);
          if (void 0 === e3["rewards-rate"])
            throw new Error(`Response is missing required field 'rewards-rate': ${e3}`);
          if (void 0 === e3["rewards-residue"])
            throw new Error(`Response is missing required field 'rewards-residue': ${e3}`);
          return new Kr({ feeSink: e3["fee-sink"], rewardsCalculationRound: e3["rewards-calculation-round"], rewardsLevel: e3["rewards-level"], rewardsPool: e3["rewards-pool"], rewardsRate: e3["rewards-rate"], rewardsResidue: e3["rewards-residue"] });
        }
      }
      class zr extends xe {
        constructor({ currentProtocol: e3, nextProtocol: t3, nextProtocolApprovals: r2, nextProtocolSwitchOn: s2, nextProtocolVoteBefore: n2 }) {
          super(), this.currentProtocol = e3, this.nextProtocol = t3, this.nextProtocolApprovals = r2, this.nextProtocolSwitchOn = s2, this.nextProtocolVoteBefore = n2, this.attribute_map = { currentProtocol: "current-protocol", nextProtocol: "next-protocol", nextProtocolApprovals: "next-protocol-approvals", nextProtocolSwitchOn: "next-protocol-switch-on", nextProtocolVoteBefore: "next-protocol-vote-before" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["current-protocol"])
            throw new Error(`Response is missing required field 'current-protocol': ${e3}`);
          return new zr({ currentProtocol: e3["current-protocol"], nextProtocol: e3["next-protocol"], nextProtocolApprovals: e3["next-protocol-approvals"], nextProtocolSwitchOn: e3["next-protocol-switch-on"], nextProtocolVoteBefore: e3["next-protocol-vote-before"] });
        }
      }
      class Vr extends xe {
        constructor({ upgradeApprove: e3, upgradeDelay: t3, upgradePropose: r2 }) {
          super(), this.upgradeApprove = e3, this.upgradeDelay = t3, this.upgradePropose = r2, this.attribute_map = { upgradeApprove: "upgrade-approve", upgradeDelay: "upgrade-delay", upgradePropose: "upgrade-propose" };
        }
        static from_obj_for_encoding(e3) {
          return new Vr({ upgradeApprove: e3["upgrade-approve"], upgradeDelay: e3["upgrade-delay"], upgradePropose: e3["upgrade-propose"] });
        }
      }
      class Gr extends xe {
        constructor({ name: e3, value: t3 }) {
          super(), this.name = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.value = "string" == typeof t3 ? new Uint8Array(i.lW.from(t3, "base64")) : t3, this.attribute_map = { name: "name", value: "value" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.name)
            throw new Error(`Response is missing required field 'name': ${e3}`);
          if (void 0 === e3.value)
            throw new Error(`Response is missing required field 'value': ${e3}`);
          return new Gr({ name: e3.name, value: e3.value });
        }
      }
      class Hr extends xe {
        constructor({ name: e3 }) {
          super(), this.name = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.attribute_map = { name: "name" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.name)
            throw new Error(`Response is missing required field 'name': ${e3}`);
          return new Hr({ name: e3.name });
        }
      }
      class Yr extends xe {
        constructor({ applicationId: e3, boxes: t3, nextToken: r2 }) {
          super(), this.applicationId = e3, this.boxes = t3, this.nextToken = r2, this.attribute_map = { applicationId: "application-id", boxes: "boxes", nextToken: "next-token" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["application-id"])
            throw new Error(`Response is missing required field 'application-id': ${e3}`);
          if (!Array.isArray(e3.boxes))
            throw new Error(`Response is missing required array field 'boxes': ${e3}`);
          return new Yr({ applicationId: e3["application-id"], boxes: e3.boxes.map(Hr.from_obj_for_encoding), nextToken: e3["next-token"] });
        }
      }
      class Jr extends xe {
        constructor({ message: e3, data: t3 }) {
          super(), this.message = e3, this.data = t3, this.attribute_map = { message: "message", data: "data" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.message)
            throw new Error(`Response is missing required field 'message': ${e3}`);
          return new Jr({ message: e3.message, data: e3.data });
        }
      }
      class Xr extends xe {
        constructor({ action: e3, bytes: t3, uint: r2 }) {
          super(), this.action = e3, this.bytes = t3, this.uint = r2, this.attribute_map = { action: "action", bytes: "bytes", uint: "uint" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.action)
            throw new Error(`Response is missing required field 'action': ${e3}`);
          return new Xr({ action: e3.action, bytes: e3.bytes, uint: e3.uint });
        }
      }
      class Zr extends xe {
        constructor({ key: e3, value: t3 }) {
          super(), this.key = e3, this.value = t3, this.attribute_map = { key: "key", value: "value" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.key)
            throw new Error(`Response is missing required field 'key': ${e3}`);
          if (void 0 === e3.value)
            throw new Error(`Response is missing required field 'value': ${e3}`);
          return new Zr({ key: e3.key, value: Xr.from_obj_for_encoding(e3.value) });
        }
      }
      class Qr extends xe {
        constructor({ hashType: e3 }) {
          super(), this.hashType = e3, this.attribute_map = { hashType: "hash-type" };
        }
        static from_obj_for_encoding(e3) {
          return new Qr({ hashType: e3["hash-type"] });
        }
      }
      class es extends xe {
        constructor({ dbAvailable: e3, isMigrating: t3, message: r2, round: s2, version: n2, data: i2, errors: o2 }) {
          super(), this.dbAvailable = e3, this.isMigrating = t3, this.message = r2, this.round = s2, this.version = n2, this.data = i2, this.errors = o2, this.attribute_map = { dbAvailable: "db-available", isMigrating: "is-migrating", message: "message", round: "round", version: "version", data: "data", errors: "errors" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["db-available"])
            throw new Error(`Response is missing required field 'db-available': ${e3}`);
          if (void 0 === e3["is-migrating"])
            throw new Error(`Response is missing required field 'is-migrating': ${e3}`);
          if (void 0 === e3.message)
            throw new Error(`Response is missing required field 'message': ${e3}`);
          if (void 0 === e3.round)
            throw new Error(`Response is missing required field 'round': ${e3}`);
          if (void 0 === e3.version)
            throw new Error(`Response is missing required field 'version': ${e3}`);
          return new es({ dbAvailable: e3["db-available"], isMigrating: e3["is-migrating"], message: e3.message, round: e3.round, version: e3.version, data: e3.data, errors: e3.errors });
        }
      }
      class ts extends xe {
        constructor({ blockHeadersCommitment: e3, firstAttestedRound: t3, latestAttestedRound: r2, lnProvenWeight: s2, votersCommitment: n2 }) {
          super(), this.blockHeadersCommitment = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.firstAttestedRound = t3, this.latestAttestedRound = r2, this.lnProvenWeight = s2, this.votersCommitment = "string" == typeof n2 ? new Uint8Array(i.lW.from(n2, "base64")) : n2, this.attribute_map = { blockHeadersCommitment: "block-headers-commitment", firstAttestedRound: "first-attested-round", latestAttestedRound: "latest-attested-round", lnProvenWeight: "ln-proven-weight", votersCommitment: "voters-commitment" };
        }
        static from_obj_for_encoding(e3) {
          return new ts({ blockHeadersCommitment: e3["block-headers-commitment"], firstAttestedRound: e3["first-attested-round"], latestAttestedRound: e3["latest-attested-round"], lnProvenWeight: e3["ln-proven-weight"], votersCommitment: e3["voters-commitment"] });
        }
      }
      class rs extends xe {
        constructor({ hashFactory: e3, path: t3, treeDepth: r2 }) {
          super(), this.hashFactory = e3, this.path = t3, this.treeDepth = r2, this.attribute_map = { hashFactory: "hash-factory", path: "path", treeDepth: "tree-depth" };
        }
        static from_obj_for_encoding(e3) {
          return new rs({ hashFactory: void 0 !== e3["hash-factory"] ? Qr.from_obj_for_encoding(e3["hash-factory"]) : void 0, path: e3.path, treeDepth: e3["tree-depth"] });
        }
      }
      class ss extends xe {
        constructor({ address: e3, amount: t3, isFrozen: r2, deleted: s2, optedInAtRound: n2, optedOutAtRound: i2 }) {
          super(), this.address = e3, this.amount = t3, this.isFrozen = r2, this.deleted = s2, this.optedInAtRound = n2, this.optedOutAtRound = i2, this.attribute_map = { address: "address", amount: "amount", isFrozen: "is-frozen", deleted: "deleted", optedInAtRound: "opted-in-at-round", optedOutAtRound: "opted-out-at-round" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.address)
            throw new Error(`Response is missing required field 'address': ${e3}`);
          if (void 0 === e3.amount)
            throw new Error(`Response is missing required field 'amount': ${e3}`);
          if (void 0 === e3["is-frozen"])
            throw new Error(`Response is missing required field 'is-frozen': ${e3}`);
          return new ss({ address: e3.address, amount: e3.amount, isFrozen: e3["is-frozen"], deleted: e3.deleted, optedInAtRound: e3["opted-in-at-round"], optedOutAtRound: e3["opted-out-at-round"] });
        }
      }
      class ns extends xe {
        constructor({ expiredParticipationAccounts: e3 }) {
          super(), this.expiredParticipationAccounts = e3, this.attribute_map = { expiredParticipationAccounts: "expired-participation-accounts" };
        }
        static from_obj_for_encoding(e3) {
          return new ns({ expiredParticipationAccounts: e3["expired-participation-accounts"] });
        }
      }
      class is extends xe {
        constructor({ partProofs: e3, positionsToReveal: t3, reveals: r2, saltVersion: s2, sigCommit: n2, sigProofs: o2, signedWeight: a2 }) {
          super(), this.partProofs = e3, this.positionsToReveal = t3, this.reveals = r2, this.saltVersion = s2, this.sigCommit = "string" == typeof n2 ? new Uint8Array(i.lW.from(n2, "base64")) : n2, this.sigProofs = o2, this.signedWeight = a2, this.attribute_map = { partProofs: "part-proofs", positionsToReveal: "positions-to-reveal", reveals: "reveals", saltVersion: "salt-version", sigCommit: "sig-commit", sigProofs: "sig-proofs", signedWeight: "signed-weight" };
        }
        static from_obj_for_encoding(e3) {
          return new is({ partProofs: void 0 !== e3["part-proofs"] ? rs.from_obj_for_encoding(e3["part-proofs"]) : void 0, positionsToReveal: e3["positions-to-reveal"], reveals: void 0 !== e3.reveals ? e3.reveals.map(as.from_obj_for_encoding) : void 0, saltVersion: e3["salt-version"], sigCommit: e3["sig-commit"], sigProofs: void 0 !== e3["sig-proofs"] ? rs.from_obj_for_encoding(e3["sig-proofs"]) : void 0, signedWeight: e3["signed-weight"] });
        }
      }
      class os extends xe {
        constructor({ verifier: e3, weight: t3 }) {
          super(), this.verifier = e3, this.weight = t3, this.attribute_map = { verifier: "verifier", weight: "weight" };
        }
        static from_obj_for_encoding(e3) {
          return new os({ verifier: void 0 !== e3.verifier ? hs.from_obj_for_encoding(e3.verifier) : void 0, weight: e3.weight });
        }
      }
      class as extends xe {
        constructor({ participant: e3, position: t3, sigSlot: r2 }) {
          super(), this.participant = e3, this.position = t3, this.sigSlot = r2, this.attribute_map = { participant: "participant", position: "position", sigSlot: "sig-slot" };
        }
        static from_obj_for_encoding(e3) {
          return new as({ participant: void 0 !== e3.participant ? os.from_obj_for_encoding(e3.participant) : void 0, position: e3.position, sigSlot: void 0 !== e3["sig-slot"] ? cs.from_obj_for_encoding(e3["sig-slot"]) : void 0 });
        }
      }
      class cs extends xe {
        constructor({ lowerSigWeight: e3, signature: t3 }) {
          super(), this.lowerSigWeight = e3, this.signature = t3, this.attribute_map = { lowerSigWeight: "lower-sig-weight", signature: "signature" };
        }
        static from_obj_for_encoding(e3) {
          return new cs({ lowerSigWeight: e3["lower-sig-weight"], signature: void 0 !== e3.signature ? us.from_obj_for_encoding(e3.signature) : void 0 });
        }
      }
      class us extends xe {
        constructor({ falconSignature: e3, merkleArrayIndex: t3, proof: r2, verifyingKey: s2 }) {
          super(), this.falconSignature = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.merkleArrayIndex = t3, this.proof = r2, this.verifyingKey = "string" == typeof s2 ? new Uint8Array(i.lW.from(s2, "base64")) : s2, this.attribute_map = { falconSignature: "falcon-signature", merkleArrayIndex: "merkle-array-index", proof: "proof", verifyingKey: "verifying-key" };
        }
        static from_obj_for_encoding(e3) {
          return new us({ falconSignature: e3["falcon-signature"], merkleArrayIndex: e3["merkle-array-index"], proof: void 0 !== e3.proof ? rs.from_obj_for_encoding(e3.proof) : void 0, verifyingKey: e3["verifying-key"] });
        }
      }
      class ls extends xe {
        constructor({ nextRound: e3, onlineTotalWeight: t3, type: r2, votersCommitment: s2 }) {
          super(), this.nextRound = e3, this.onlineTotalWeight = t3, this.type = r2, this.votersCommitment = "string" == typeof s2 ? new Uint8Array(i.lW.from(s2, "base64")) : s2, this.attribute_map = { nextRound: "next-round", onlineTotalWeight: "online-total-weight", type: "type", votersCommitment: "voters-commitment" };
        }
        static from_obj_for_encoding(e3) {
          return new ls({ nextRound: e3["next-round"], onlineTotalWeight: e3["online-total-weight"], type: e3.type, votersCommitment: e3["voters-commitment"] });
        }
      }
      class hs extends xe {
        constructor({ commitment: e3, keyLifetime: t3 }) {
          super(), this.commitment = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.keyLifetime = t3, this.attribute_map = { commitment: "commitment", keyLifetime: "key-lifetime" };
        }
        static from_obj_for_encoding(e3) {
          return new hs({ commitment: e3.commitment, keyLifetime: e3["key-lifetime"] });
        }
      }
      class ds extends xe {
        constructor({ numByteSlice: e3, numUint: t3 }) {
          super(), this.numByteSlice = e3, this.numUint = t3, this.attribute_map = { numByteSlice: "num-byte-slice", numUint: "num-uint" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["num-byte-slice"])
            throw new Error(`Response is missing required field 'num-byte-slice': ${e3}`);
          if (void 0 === e3["num-uint"])
            throw new Error(`Response is missing required field 'num-uint': ${e3}`);
          return new ds({ numByteSlice: e3["num-byte-slice"], numUint: e3["num-uint"] });
        }
      }
      class ps extends xe {
        constructor({ key: e3, value: t3 }) {
          super(), this.key = e3, this.value = t3, this.attribute_map = { key: "key", value: "value" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.key)
            throw new Error(`Response is missing required field 'key': ${e3}`);
          if (void 0 === e3.value)
            throw new Error(`Response is missing required field 'value': ${e3}`);
          return new ps({ key: e3.key, value: fs.from_obj_for_encoding(e3.value) });
        }
      }
      class fs extends xe {
        constructor({ bytes: e3, type: t3, uint: r2 }) {
          super(), this.bytes = e3, this.type = t3, this.uint = r2, this.attribute_map = { bytes: "bytes", type: "type", uint: "uint" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.bytes)
            throw new Error(`Response is missing required field 'bytes': ${e3}`);
          if (void 0 === e3.type)
            throw new Error(`Response is missing required field 'type': ${e3}`);
          if (void 0 === e3.uint)
            throw new Error(`Response is missing required field 'uint': ${e3}`);
          return new fs({ bytes: e3.bytes, type: e3.type, uint: e3.uint });
        }
      }
      class gs extends xe {
        constructor({ fee: e3, firstValid: t3, lastValid: r2, sender: s2, applicationTransaction: n2, assetConfigTransaction: o2, assetFreezeTransaction: a2, assetTransferTransaction: c2, authAddr: u2, closeRewards: l2, closingAmount: h2, confirmedRound: d2, createdApplicationIndex: p2, createdAssetIndex: f2, genesisHash: g2, genesisId: m2, globalStateDelta: y2, group: w2, id: b2, innerTxns: v2, intraRoundOffset: x2, keyregTransaction: A2, lease: _2, localStateDelta: E2, logs: T2, note: S2, paymentTransaction: R2, receiverRewards: k2, rekeyTo: I2, roundTime: B2, senderRewards: U2, signature: P2, stateProofTransaction: j2, txType: q2 }) {
          super(), this.fee = e3, this.firstValid = t3, this.lastValid = r2, this.sender = s2, this.applicationTransaction = n2, this.assetConfigTransaction = o2, this.assetFreezeTransaction = a2, this.assetTransferTransaction = c2, this.authAddr = u2, this.closeRewards = l2, this.closingAmount = h2, this.confirmedRound = d2, this.createdApplicationIndex = p2, this.createdAssetIndex = f2, this.genesisHash = "string" == typeof g2 ? new Uint8Array(i.lW.from(g2, "base64")) : g2, this.genesisId = m2, this.globalStateDelta = y2, this.group = "string" == typeof w2 ? new Uint8Array(i.lW.from(w2, "base64")) : w2, this.id = b2, this.innerTxns = v2, this.intraRoundOffset = x2, this.keyregTransaction = A2, this.lease = "string" == typeof _2 ? new Uint8Array(i.lW.from(_2, "base64")) : _2, this.localStateDelta = E2, this.logs = T2, this.note = "string" == typeof S2 ? new Uint8Array(i.lW.from(S2, "base64")) : S2, this.paymentTransaction = R2, this.receiverRewards = k2, this.rekeyTo = I2, this.roundTime = B2, this.senderRewards = U2, this.signature = P2, this.stateProofTransaction = j2, this.txType = q2, this.attribute_map = { fee: "fee", firstValid: "first-valid", lastValid: "last-valid", sender: "sender", applicationTransaction: "application-transaction", assetConfigTransaction: "asset-config-transaction", assetFreezeTransaction: "asset-freeze-transaction", assetTransferTransaction: "asset-transfer-transaction", authAddr: "auth-addr", closeRewards: "close-rewards", closingAmount: "closing-amount", confirmedRound: "confirmed-round", createdApplicationIndex: "created-application-index", createdAssetIndex: "created-asset-index", genesisHash: "genesis-hash", genesisId: "genesis-id", globalStateDelta: "global-state-delta", group: "group", id: "id", innerTxns: "inner-txns", intraRoundOffset: "intra-round-offset", keyregTransaction: "keyreg-transaction", lease: "lease", localStateDelta: "local-state-delta", logs: "logs", note: "note", paymentTransaction: "payment-transaction", receiverRewards: "receiver-rewards", rekeyTo: "rekey-to", roundTime: "round-time", senderRewards: "sender-rewards", signature: "signature", stateProofTransaction: "state-proof-transaction", txType: "tx-type" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.fee)
            throw new Error(`Response is missing required field 'fee': ${e3}`);
          if (void 0 === e3["first-valid"])
            throw new Error(`Response is missing required field 'first-valid': ${e3}`);
          if (void 0 === e3["last-valid"])
            throw new Error(`Response is missing required field 'last-valid': ${e3}`);
          if (void 0 === e3.sender)
            throw new Error(`Response is missing required field 'sender': ${e3}`);
          return new gs({ fee: e3.fee, firstValid: e3["first-valid"], lastValid: e3["last-valid"], sender: e3.sender, applicationTransaction: void 0 !== e3["application-transaction"] ? ms.from_obj_for_encoding(e3["application-transaction"]) : void 0, assetConfigTransaction: void 0 !== e3["asset-config-transaction"] ? ys.from_obj_for_encoding(e3["asset-config-transaction"]) : void 0, assetFreezeTransaction: void 0 !== e3["asset-freeze-transaction"] ? ws.from_obj_for_encoding(e3["asset-freeze-transaction"]) : void 0, assetTransferTransaction: void 0 !== e3["asset-transfer-transaction"] ? bs.from_obj_for_encoding(e3["asset-transfer-transaction"]) : void 0, authAddr: e3["auth-addr"], closeRewards: e3["close-rewards"], closingAmount: e3["closing-amount"], confirmedRound: e3["confirmed-round"], createdApplicationIndex: e3["created-application-index"], createdAssetIndex: e3["created-asset-index"], genesisHash: e3["genesis-hash"], genesisId: e3["genesis-id"], globalStateDelta: void 0 !== e3["global-state-delta"] ? e3["global-state-delta"].map(Zr.from_obj_for_encoding) : void 0, group: e3.group, id: e3.id, innerTxns: void 0 !== e3["inner-txns"] ? e3["inner-txns"].map(gs.from_obj_for_encoding) : void 0, intraRoundOffset: e3["intra-round-offset"], keyregTransaction: void 0 !== e3["keyreg-transaction"] ? vs.from_obj_for_encoding(e3["keyreg-transaction"]) : void 0, lease: e3.lease, localStateDelta: void 0 !== e3["local-state-delta"] ? e3["local-state-delta"].map(Tr.from_obj_for_encoding) : void 0, logs: e3.logs, note: e3.note, paymentTransaction: void 0 !== e3["payment-transaction"] ? xs.from_obj_for_encoding(e3["payment-transaction"]) : void 0, receiverRewards: e3["receiver-rewards"], rekeyTo: e3["rekey-to"], roundTime: e3["round-time"], senderRewards: e3["sender-rewards"], signature: void 0 !== e3.signature ? _s.from_obj_for_encoding(e3.signature) : void 0, stateProofTransaction: void 0 !== e3["state-proof-transaction"] ? Rs.from_obj_for_encoding(e3["state-proof-transaction"]) : void 0, txType: e3["tx-type"] });
        }
      }
      class ms extends xe {
        constructor({ applicationId: e3, accounts: t3, applicationArgs: r2, approvalProgram: s2, clearStateProgram: n2, extraProgramPages: o2, foreignApps: a2, foreignAssets: c2, globalStateSchema: u2, localStateSchema: l2, onCompletion: h2 }) {
          super(), this.applicationId = e3, this.accounts = t3, this.applicationArgs = r2, this.approvalProgram = "string" == typeof s2 ? new Uint8Array(i.lW.from(s2, "base64")) : s2, this.clearStateProgram = "string" == typeof n2 ? new Uint8Array(i.lW.from(n2, "base64")) : n2, this.extraProgramPages = o2, this.foreignApps = a2, this.foreignAssets = c2, this.globalStateSchema = u2, this.localStateSchema = l2, this.onCompletion = h2, this.attribute_map = { applicationId: "application-id", accounts: "accounts", applicationArgs: "application-args", approvalProgram: "approval-program", clearStateProgram: "clear-state-program", extraProgramPages: "extra-program-pages", foreignApps: "foreign-apps", foreignAssets: "foreign-assets", globalStateSchema: "global-state-schema", localStateSchema: "local-state-schema", onCompletion: "on-completion" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["application-id"])
            throw new Error(`Response is missing required field 'application-id': ${e3}`);
          return new ms({ applicationId: e3["application-id"], accounts: e3.accounts, applicationArgs: e3["application-args"], approvalProgram: e3["approval-program"], clearStateProgram: e3["clear-state-program"], extraProgramPages: e3["extra-program-pages"], foreignApps: e3["foreign-apps"], foreignAssets: e3["foreign-assets"], globalStateSchema: void 0 !== e3["global-state-schema"] ? ds.from_obj_for_encoding(e3["global-state-schema"]) : void 0, localStateSchema: void 0 !== e3["local-state-schema"] ? ds.from_obj_for_encoding(e3["local-state-schema"]) : void 0, onCompletion: e3["on-completion"] });
        }
      }
      class ys extends xe {
        constructor({ assetId: e3, params: t3 }) {
          super(), this.assetId = e3, this.params = t3, this.attribute_map = { assetId: "asset-id", params: "params" };
        }
        static from_obj_for_encoding(e3) {
          return new ys({ assetId: e3["asset-id"], params: void 0 !== e3.params ? Mr.from_obj_for_encoding(e3.params) : void 0 });
        }
      }
      class ws extends xe {
        constructor({ address: e3, assetId: t3, newFreezeStatus: r2 }) {
          super(), this.address = e3, this.assetId = t3, this.newFreezeStatus = r2, this.attribute_map = { address: "address", assetId: "asset-id", newFreezeStatus: "new-freeze-status" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.address)
            throw new Error(`Response is missing required field 'address': ${e3}`);
          if (void 0 === e3["asset-id"])
            throw new Error(`Response is missing required field 'asset-id': ${e3}`);
          if (void 0 === e3["new-freeze-status"])
            throw new Error(`Response is missing required field 'new-freeze-status': ${e3}`);
          return new ws({ address: e3.address, assetId: e3["asset-id"], newFreezeStatus: e3["new-freeze-status"] });
        }
      }
      class bs extends xe {
        constructor({ amount: e3, assetId: t3, receiver: r2, closeAmount: s2, closeTo: n2, sender: i2 }) {
          super(), this.amount = e3, this.assetId = t3, this.receiver = r2, this.closeAmount = s2, this.closeTo = n2, this.sender = i2, this.attribute_map = { amount: "amount", assetId: "asset-id", receiver: "receiver", closeAmount: "close-amount", closeTo: "close-to", sender: "sender" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.amount)
            throw new Error(`Response is missing required field 'amount': ${e3}`);
          if (void 0 === e3["asset-id"])
            throw new Error(`Response is missing required field 'asset-id': ${e3}`);
          if (void 0 === e3.receiver)
            throw new Error(`Response is missing required field 'receiver': ${e3}`);
          return new bs({ amount: e3.amount, assetId: e3["asset-id"], receiver: e3.receiver, closeAmount: e3["close-amount"], closeTo: e3["close-to"], sender: e3.sender });
        }
      }
      class vs extends xe {
        constructor({ nonParticipation: e3, selectionParticipationKey: t3, stateProofKey: r2, voteFirstValid: s2, voteKeyDilution: n2, voteLastValid: o2, voteParticipationKey: a2 }) {
          super(), this.nonParticipation = e3, this.selectionParticipationKey = "string" == typeof t3 ? new Uint8Array(i.lW.from(t3, "base64")) : t3, this.stateProofKey = "string" == typeof r2 ? new Uint8Array(i.lW.from(r2, "base64")) : r2, this.voteFirstValid = s2, this.voteKeyDilution = n2, this.voteLastValid = o2, this.voteParticipationKey = "string" == typeof a2 ? new Uint8Array(i.lW.from(a2, "base64")) : a2, this.attribute_map = { nonParticipation: "non-participation", selectionParticipationKey: "selection-participation-key", stateProofKey: "state-proof-key", voteFirstValid: "vote-first-valid", voteKeyDilution: "vote-key-dilution", voteLastValid: "vote-last-valid", voteParticipationKey: "vote-participation-key" };
        }
        static from_obj_for_encoding(e3) {
          return new vs({ nonParticipation: e3["non-participation"], selectionParticipationKey: e3["selection-participation-key"], stateProofKey: e3["state-proof-key"], voteFirstValid: e3["vote-first-valid"], voteKeyDilution: e3["vote-key-dilution"], voteLastValid: e3["vote-last-valid"], voteParticipationKey: e3["vote-participation-key"] });
        }
      }
      class xs extends xe {
        constructor({ amount: e3, receiver: t3, closeAmount: r2, closeRemainderTo: s2 }) {
          super(), this.amount = e3, this.receiver = t3, this.closeAmount = r2, this.closeRemainderTo = s2, this.attribute_map = { amount: "amount", receiver: "receiver", closeAmount: "close-amount", closeRemainderTo: "close-remainder-to" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.amount)
            throw new Error(`Response is missing required field 'amount': ${e3}`);
          if (void 0 === e3.receiver)
            throw new Error(`Response is missing required field 'receiver': ${e3}`);
          return new xs({ amount: e3.amount, receiver: e3.receiver, closeAmount: e3["close-amount"], closeRemainderTo: e3["close-remainder-to"] });
        }
      }
      class As extends xe {
        constructor({ currentRound: e3, transaction: t3 }) {
          super(), this.currentRound = e3, this.transaction = t3, this.attribute_map = { currentRound: "current-round", transaction: "transaction" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["current-round"])
            throw new Error(`Response is missing required field 'current-round': ${e3}`);
          if (void 0 === e3.transaction)
            throw new Error(`Response is missing required field 'transaction': ${e3}`);
          return new As({ currentRound: e3["current-round"], transaction: gs.from_obj_for_encoding(e3.transaction) });
        }
      }
      class _s extends xe {
        constructor({ logicsig: e3, multisig: t3, sig: r2 }) {
          super(), this.logicsig = e3, this.multisig = t3, this.sig = "string" == typeof r2 ? new Uint8Array(i.lW.from(r2, "base64")) : r2, this.attribute_map = { logicsig: "logicsig", multisig: "multisig", sig: "sig" };
        }
        static from_obj_for_encoding(e3) {
          return new _s({ logicsig: void 0 !== e3.logicsig ? Es.from_obj_for_encoding(e3.logicsig) : void 0, multisig: void 0 !== e3.multisig ? Ts.from_obj_for_encoding(e3.multisig) : void 0, sig: e3.sig });
        }
      }
      class Es extends xe {
        constructor({ logic: e3, args: t3, multisigSignature: r2, signature: s2 }) {
          super(), this.logic = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.args = t3, this.multisigSignature = r2, this.signature = "string" == typeof s2 ? new Uint8Array(i.lW.from(s2, "base64")) : s2, this.attribute_map = { logic: "logic", args: "args", multisigSignature: "multisig-signature", signature: "signature" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3.logic)
            throw new Error(`Response is missing required field 'logic': ${e3}`);
          return new Es({ logic: e3.logic, args: e3.args, multisigSignature: void 0 !== e3["multisig-signature"] ? Ts.from_obj_for_encoding(e3["multisig-signature"]) : void 0, signature: e3.signature });
        }
      }
      class Ts extends xe {
        constructor({ subsignature: e3, threshold: t3, version: r2 }) {
          super(), this.subsignature = e3, this.threshold = t3, this.version = r2, this.attribute_map = { subsignature: "subsignature", threshold: "threshold", version: "version" };
        }
        static from_obj_for_encoding(e3) {
          return new Ts({ subsignature: void 0 !== e3.subsignature ? e3.subsignature.map(Ss.from_obj_for_encoding) : void 0, threshold: e3.threshold, version: e3.version });
        }
      }
      class Ss extends xe {
        constructor({ publicKey: e3, signature: t3 }) {
          super(), this.publicKey = "string" == typeof e3 ? new Uint8Array(i.lW.from(e3, "base64")) : e3, this.signature = "string" == typeof t3 ? new Uint8Array(i.lW.from(t3, "base64")) : t3, this.attribute_map = { publicKey: "public-key", signature: "signature" };
        }
        static from_obj_for_encoding(e3) {
          return new Ss({ publicKey: e3["public-key"], signature: e3.signature });
        }
      }
      class Rs extends xe {
        constructor({ message: e3, stateProof: t3, stateProofType: r2 }) {
          super(), this.message = e3, this.stateProof = t3, this.stateProofType = r2, this.attribute_map = { message: "message", stateProof: "state-proof", stateProofType: "state-proof-type" };
        }
        static from_obj_for_encoding(e3) {
          return new Rs({ message: void 0 !== e3.message ? ts.from_obj_for_encoding(e3.message) : void 0, stateProof: void 0 !== e3["state-proof"] ? is.from_obj_for_encoding(e3["state-proof"]) : void 0, stateProofType: e3["state-proof-type"] });
        }
      }
      class ks extends xe {
        constructor({ currentRound: e3, transactions: t3, nextToken: r2 }) {
          super(), this.currentRound = e3, this.transactions = t3, this.nextToken = r2, this.attribute_map = { currentRound: "current-round", transactions: "transactions", nextToken: "next-token" };
        }
        static from_obj_for_encoding(e3) {
          if (void 0 === e3["current-round"])
            throw new Error(`Response is missing required field 'current-round': ${e3}`);
          if (!Array.isArray(e3.transactions))
            throw new Error(`Response is missing required array field 'transactions': ${e3}`);
          return new ks({ currentRound: e3["current-round"], transactions: e3.transactions.map(gs.from_obj_for_encoding), nextToken: e3["next-token"] });
        }
      }
      class Is extends vt {
        constructor(e3, t3, r2, s2) {
          super(e3, t3), this.index = r2, this.index = r2;
          const n2 = i.lW.from(s2).toString("base64");
          this.query.name = encodeURI(`b64:${n2}`);
        }
        path() {
          return `/v2/applications/${this.index}/box`;
        }
        prepare(e3) {
          return Gr.from_obj_for_encoding(e3);
        }
      }
      class Bs extends vt {
        path() {
          return "/v2/accounts";
        }
        currencyGreaterThan(e3) {
          return this.query["currency-greater-than"] = e3, this;
        }
        currencyLessThan(e3) {
          return this.query["currency-less-than"] = e3, this;
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        assetID(e3) {
          return this.query["asset-id"] = e3, this;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        round(e3) {
          return this.query.round = e3, this;
        }
        authAddr(e3) {
          return this.query["auth-addr"] = e3, this;
        }
        applicationID(e3) {
          return this.query["application-id"] = e3, this;
        }
        includeAll(e3 = true) {
          return this.query["include-all"] = e3, this;
        }
        exclude(e3) {
          return this.query.exclude = e3, this;
        }
      }
      class Us extends vt {
        path() {
          return "/v2/transactions";
        }
        notePrefix(e3) {
          return this.query["note-prefix"] = ur(e3), this;
        }
        txType(e3) {
          return this.query["tx-type"] = e3, this;
        }
        sigType(e3) {
          return this.query["sig-type"] = e3, this;
        }
        txid(e3) {
          return this.query.txid = e3, this;
        }
        round(e3) {
          return this.query.round = e3, this;
        }
        minRound(e3) {
          return this.query["min-round"] = e3, this;
        }
        maxRound(e3) {
          return this.query["max-round"] = e3, this;
        }
        assetID(e3) {
          return this.query["asset-id"] = e3, this;
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        beforeTime(e3) {
          return this.query["before-time"] = e3, this;
        }
        afterTime(e3) {
          return this.query["after-time"] = e3, this;
        }
        currencyGreaterThan(e3) {
          return this.query["currency-greater-than"] = e3, this;
        }
        currencyLessThan(e3) {
          return this.query["currency-less-than"] = e3, this;
        }
        addressRole(e3) {
          return this.query["address-role"] = e3, this;
        }
        address(e3) {
          return this.query.address = e3, this;
        }
        excludeCloseTo(e3) {
          return this.query["exclude-close-to"] = e3, this;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        rekeyTo(e3) {
          return this.query["rekey-to"] = e3, this;
        }
        applicationID(e3) {
          return this.query["application-id"] = e3, this;
        }
      }
      class Ps extends vt {
        path() {
          return "/v2/assets";
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        creator(e3) {
          return this.query.creator = e3, this;
        }
        name(e3) {
          return this.query.name = e3, this;
        }
        unit(e3) {
          return this.query.unit = e3, this;
        }
        index(e3) {
          return this.query["asset-id"] = e3, this;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        includeAll(e3 = true) {
          return this.query["include-all"] = e3, this;
        }
      }
      class js extends vt {
        path() {
          return "/v2/applications";
        }
        index(e3) {
          return this.query["application-id"] = e3, this;
        }
        creator(e3) {
          return this.query.creator = e3, this;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        includeAll(e3 = true) {
          return this.query["include-all"] = e3, this;
        }
      }
      class qs extends vt {
        constructor(e3, t3, r2) {
          super(e3, t3), this.index = r2, this.index = r2;
        }
        path() {
          return `/v2/applications/${this.index}/boxes`;
        }
        nextToken(e3) {
          return this.query.next = e3, this;
        }
        limit(e3) {
          return this.query.limit = e3, this;
        }
        prepare(e3) {
          return Yr.from_obj_for_encoding(e3);
        }
      }
      class Ds extends be {
        constructor(e3, t3 = "http://127.0.0.1", r2 = 8080, s2 = {}) {
          super("X-Indexer-API-Token", e3, t3, r2, s2);
        }
        makeHealthCheck() {
          return new ar(this.c, this.intDecoding);
        }
        lookupAssetBalances(e3) {
          return new cr(this.c, this.intDecoding, e3);
        }
        lookupAssetTransactions(e3) {
          return new hr(this.c, this.intDecoding, e3);
        }
        lookupAccountTransactions(e3) {
          return new lr(this.c, this.intDecoding, e3);
        }
        lookupBlock(e3) {
          return new dr(this.c, this.intDecoding, e3);
        }
        lookupTransactionByID(e3) {
          return new pr(this.c, this.intDecoding, e3);
        }
        lookupAccountByID(e3) {
          return new fr(this.c, this.intDecoding, e3);
        }
        lookupAccountAssets(e3) {
          return new gr(this.c, this.intDecoding, e3);
        }
        lookupAccountCreatedAssets(e3) {
          return new mr(this.c, this.intDecoding, e3);
        }
        lookupAccountAppLocalStates(e3) {
          return new yr(this.c, this.intDecoding, e3);
        }
        lookupAccountCreatedApplications(e3) {
          return new wr(this.c, this.intDecoding, e3);
        }
        lookupAssetByID(e3) {
          return new br(this.c, this.intDecoding, e3);
        }
        lookupApplications(e3) {
          return new vr(this.c, this.intDecoding, e3);
        }
        lookupApplicationLogs(e3) {
          return new xr(this.c, this.intDecoding, e3);
        }
        searchAccounts() {
          return new Bs(this.c, this.intDecoding);
        }
        searchForTransactions() {
          return new Us(this.c, this.intDecoding);
        }
        searchForAssets() {
          return new Ps(this.c, this.intDecoding);
        }
        searchForApplications() {
          return new js(this.c, this.intDecoding);
        }
        searchForApplicationBoxes(e3) {
          return new qs(this.c, this.intDecoding, e3);
        }
        lookupApplicationBoxByIDandName(e3, t3) {
          return new Is(this.c, this.intDecoding, e3, t3);
        }
      }
      async function $s(e3, t3, r2) {
        const s2 = await e3.status().do();
        if (void 0 === s2)
          throw new Error("Unable to get node status");
        const n2 = s2["last-round"] + 1;
        let i2 = n2;
        for (; i2 < n2 + r2; ) {
          let r3 = false;
          try {
            const s3 = await e3.pendingTransactionInformation(t3).do();
            if (s3["confirmed-round"])
              return s3;
            if (s3["pool-error"])
              throw r3 = true, new Error(`Transaction Rejected: ${s3["pool-error"]}`);
          } catch (e4) {
            if (r3)
              throw e4;
          }
          await e3.statusAfterBlock(i2).do(), i2 += 1;
        }
        throw new Error(`Transaction not confirmed after ${r2} rounds`);
      }
      function Os(e3, t3) {
        let r2 = e3.toString(16);
        r2.length !== 2 * t3 && (r2 = r2.padStart(2 * t3, "0"));
        const s2 = new Uint8Array(r2.length / 2);
        for (let e4 = 0, t4 = 0; e4 < r2.length / 2; e4++, t4 += 2)
          s2[e4] = parseInt(r2.slice(t4, t4 + 2), 16);
        return s2;
      }
      function Cs(e3) {
        let t3 = BigInt(0);
        const r2 = i.lW.from(e3);
        for (let s2 = 0; s2 < e3.length; s2++)
          t3 = BigInt(Number(r2.readUIntBE(s2, 1))) + t3 * BigInt(256);
        return t3;
      }
      function Ls() {
        const e3 = h((t3 = a().box.secretKeyLength, a().randomBytes(t3)));
        var t3;
        return { addr: K(e3.publicKey), sk: e3.secretKey };
      }
      const Ms = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"], Ns = "failed to decode mnemonic", Fs = "the mnemonic contains a word that is not in the wordlist";
      function Ws(e3) {
        const t3 = [];
        let r2 = 0, s2 = 0;
        return e3.forEach(function(e4) {
          r2 |= e4 << s2, s2 += 8, s2 >= 11 && (t3.push(2047 & r2), r2 >>= 11, s2 -= 11);
        }), s2 && t3.push(r2), t3;
      }
      function Ks(e3) {
        return e3.map((e4) => Ms[e4]);
      }
      function zs(e3) {
        return Ks(Ws(l(e3)))[0];
      }
      function Vs(e3) {
        if (e3.length !== b)
          throw new RangeError(`Seed length must be ${b}`);
        const t3 = Ks(Ws(e3)), r2 = zs(e3);
        return `${t3.join(" ")} ${r2}`;
      }
      function Gs(e3) {
        const t3 = e3.split(" "), r2 = t3.slice(0, 24);
        for (const e4 of r2)
          if (-1 === Ms.indexOf(e4))
            throw new Error(Fs);
        const s2 = t3[t3.length - 1];
        let n2 = function(e4) {
          const t4 = [];
          let r3 = 0, s3 = 0;
          return e4.forEach(function(e5) {
            for (r3 |= e5 << s3, s3 += 11; s3 >= 8; )
              t4.push(255 & r3), r3 >>= 8, s3 -= 8;
          }), s3 && t4.push(r3), new Uint8Array(t4);
        }(r2.map((e4) => Ms.indexOf(e4)));
        if (33 !== n2.length)
          throw new Error(Ns);
        if (0 !== n2[n2.length - 1])
          throw new Error(Ns);
        if (n2 = n2.slice(0, n2.length - 1), zs(n2) === s2)
          return n2;
        throw new Error(Ns);
      }
      function Hs(e3) {
        const t3 = h(Gs(e3));
        return { addr: K(t3.publicKey), sk: t3.secretKey };
      }
      function Ys(e3) {
        return Vs(e3.slice(0, b));
      }
      function Js(e3) {
        return Gs(e3);
      }
      function Xs(e3) {
        return Vs(e3);
      }
      class Zs {
        constructor(e3) {
          if (this.name = "Transaction group", this.tag = i.lW.from("TG"), e3.length > 16) {
            const t3 = `${e3.length.toString()} transactions grouped together but max group size is ${16 .toString()}`;
            throw Error(t3);
          }
          this.txGroupHashes = e3;
        }
        get_obj_for_encoding() {
          return { txlist: this.txGroupHashes };
        }
        static from_obj_for_encoding(e3) {
          const t3 = Object.create(this.prototype);
          t3.name = "Transaction group", t3.tag = i.lW.from("TG"), t3.txGroupHashes = [];
          for (const r2 of e3.txlist)
            t3.txGroupHashes.push(i.lW.from(r2));
          return t3;
        }
        toByte() {
          return X(this.get_obj_for_encoding());
        }
      }
      function Qs(e3) {
        const t3 = [];
        for (const r3 of e3) {
          const e4 = ce(r3);
          t3.push(e4.rawTxID());
        }
        const r2 = new Zs(t3), s2 = r2.toByte(), n2 = l(i.lW.from(k(r2.tag, s2)));
        return i.lW.from(n2);
      }
      function en(e3, t3) {
        const r2 = Qs(e3), s2 = [];
        for (const n2 of e3) {
          const e4 = ce(n2);
          t3 && K(e4.from.publicKey) !== t3 || (e4.group = r2, s2.push(e4));
        }
        return s2;
      }
      const tn = "Not enough multisig transactions to merge. Need at least two", rn = "Cannot merge txs. txIDs differ", sn = "Cannot merge txs. Auth addrs differ", nn = "Cannot merge txs. Multisig preimages differ", on = "Cannot merge txs. subsigs are mismatched.", an = "Cannot mutate a multisig field as it would invalidate all existing signatures.";
      function cn(e3, { version: t3, threshold: r2, addrs: s2 }) {
        const n2 = s2.map((e4) => F(e4).publicKey), o2 = { v: t3, thr: r2, subsig: n2.map((e4) => ({ pk: i.lW.from(e4) })) }, a2 = e3.get_obj_for_encoding(), c2 = { msig: o2, txn: a2 }, u2 = z({ version: t3, threshold: r2, pks: n2 });
        return K(a2.snd) !== K(u2) && (c2.sgnr = i.lW.from(u2)), new Uint8Array(X(c2));
      }
      function un(e3, { rawSig: t3, myPk: r2 }, { version: s2, threshold: n2, pks: o2 }) {
        const a2 = Z(cn(e3, { version: s2, threshold: n2, addrs: o2.map((e4) => K(e4)) }));
        let c2 = false;
        if (a2.msig.subsig.forEach((e4, s3) => {
          g(e4.pk, r2) && (c2 = true, a2.msig.subsig[s3].s = t3);
        }), false === c2)
          throw new Error("Key does not exist");
        const u2 = z({ version: s2, threshold: n2, pks: o2 });
        return K(a2.txn.snd) !== K(u2) && (a2.sgnr = i.lW.from(u2)), new Uint8Array(X(a2));
      }
      class ln extends se {
        addLease() {
          throw new Error(an);
        }
        addRekey() {
          throw new Error(an);
        }
        signTxn(e3) {
          throw new Error("Cannot sign a multisig transaction using `signTxn`. Use `partialSignTxn` instead.");
        }
        partialSignTxn({ version: e3, threshold: t3, pks: r2 }, s2) {
          const n2 = p(s2).publicKey;
          return un(this, { rawSig: this.rawSignTxn(s2), myPk: n2 }, { version: e3, threshold: t3, pks: r2 });
        }
        partialSignWithMultisigSignature(e3, t3, r2) {
          if (!d(r2.length))
            throw new Error("Cannot add multisig signature. Signature is not of the correct length.");
          return un(this, { rawSig: r2, myPk: F(t3).publicKey }, e3);
        }
        static from_obj_for_encoding(e3) {
          return super.from_obj_for_encoding(e3);
        }
      }
      function hn(e3) {
        if (e3.length < 2)
          throw new Error(tn);
        const t3 = Z(e3[0]), r2 = ln.from_obj_for_encoding(t3.txn).txID(), s2 = t3.sgnr ? K(t3.sgnr) : void 0, n2 = K(z({ version: t3.msig.v, threshold: t3.msig.thr, pks: t3.msig.subsig.map((e4) => e4.pk) })), o2 = t3.msig.subsig.map((e4) => ({ ...e4 }));
        for (let a3 = 1; a3 < e3.length; a3++) {
          const c2 = Z(e3[a3]);
          if (ln.from_obj_for_encoding(c2.txn).txID() !== r2)
            throw new Error(rn);
          if (s2 !== (c2.sgnr ? K(c2.sgnr) : void 0))
            throw new Error(sn);
          if (c2.msig.subsig.length !== t3.msig.subsig.length)
            throw new Error(nn);
          if (n2 !== K(z({ version: c2.msig.v, threshold: c2.msig.thr, pks: c2.msig.subsig.map((e4) => e4.pk) })))
            throw new Error(nn);
          c2.msig.subsig.forEach((e4, t4) => {
            if (!e4.s)
              return;
            const r3 = o2[t4];
            if (r3.s && 0 !== i.lW.compare(i.lW.from(e4.s), i.lW.from(r3.s)))
              throw new Error(on);
            r3.s = e4.s;
          });
        }
        const a2 = { msig: { v: t3.msig.v, thr: t3.msig.thr, subsig: o2 }, txn: t3.txn };
        return void 0 !== s2 && (a2.sgnr = i.lW.from(F(s2).publicKey)), new Uint8Array(X(a2));
      }
      function dn(e3, t3, r2) {
        const s2 = t3.v, n2 = t3.thr, i2 = t3.subsig, o2 = i2.map((e4) => e4.pk);
        if (t3.subsig.length < n2)
          return false;
        let a2;
        try {
          a2 = z({ version: s2, threshold: n2, pks: o2 });
        } catch (e4) {
          return false;
        }
        if (!R(a2, r2))
          return false;
        let c2 = 0;
        for (const e4 of i2)
          void 0 !== e4.s && (c2 += 1);
        if (c2 < n2)
          return false;
        let u2 = 0;
        for (const t4 of i2)
          void 0 !== t4.s && m(e3, t4.s, t4.pk) && (u2 += 1);
        return !(u2 < n2);
      }
      function pn(e3, { version: t3, threshold: r2, addrs: s2 }, n2) {
        const i2 = V({ version: t3, threshold: r2, addrs: s2 });
        Object.prototype.hasOwnProperty.call(e3, "from") || (e3.from = i2);
        const o2 = s2.map((e4) => F(e4).publicKey);
        let a2, c2;
        return e3 instanceof se ? (a2 = e3, c2 = ln.prototype.partialSignTxn.call(a2, { version: t3, threshold: r2, pks: o2 }, n2)) : (a2 = new ln(e3), c2 = a2.partialSignTxn({ version: t3, threshold: r2, pks: o2 }, n2)), { txID: a2.txID().toString(), blob: c2 };
      }
      function fn(e3, { version: t3, threshold: r2, addrs: s2 }, n2) {
        const i2 = s2.map((e4) => F(e4).publicKey), o2 = Z(e3), a2 = ln.from_obj_for_encoding(o2.txn), c2 = a2.partialSignTxn({ version: t3, threshold: r2, pks: i2 }, n2);
        return { txID: a2.txID().toString(), blob: hn([e3, c2]) };
      }
      function gn(e3, { version: t3, threshold: r2, addrs: s2 }, n2, i2) {
        const o2 = s2.map((e4) => F(e4).publicKey), a2 = Z(e3), c2 = ln.from_obj_for_encoding(a2.txn), u2 = c2.partialSignWithMultisigSignature({ version: t3, threshold: r2, pks: o2 }, n2, i2);
        return { txID: c2.txID().toString(), blob: hn([e3, u2]) };
      }
      function mn({ version: e3, threshold: t3, addrs: r2 }) {
        return V({ version: e3, threshold: t3, addrs: r2 });
      }
      function yn(e3) {
        if (!e3 || 0 === e3.length)
          throw new Error("empty program");
        const t3 = "\n".charCodeAt(0), r2 = " ".charCodeAt(0), s2 = "~".charCodeAt(0);
        if (e3.every((e4) => e4 === t3 || ((e5) => r2 <= e5 && e5 <= s2)(e4))) {
          const t4 = i.lW.from(e3).toString();
          if (W(t4))
            throw new Error("requesting program bytes, get Algorand address");
          if (i.lW.from(t4, "base64").toString("base64") === t4)
            throw new Error("program should not be b64 encoded");
          throw new Error("program bytes are all ASCII printable characters, not looking like Teal byte code");
        }
      }
      class wn {
        constructor(e3, t3) {
          if (this.tag = i.lW.from("Program"), t3 && (!Array.isArray(t3) || !t3.every((e4) => e4.constructor === Uint8Array || i.lW.isBuffer(e4))))
            throw new TypeError("Invalid arguments");
          let r2;
          null != t3 && (r2 = t3.map((e4) => new Uint8Array(e4))), yn(e3), this.logic = e3, this.args = r2, this.sig = void 0, this.msig = void 0;
        }
        get_obj_for_encoding() {
          const e3 = { l: this.logic };
          return this.args && (e3.arg = this.args), this.sig ? e3.sig = this.sig : this.msig && (e3.msig = this.msig), e3;
        }
        static from_obj_for_encoding(e3) {
          const t3 = new wn(e3.l, e3.arg);
          return t3.sig = e3.sig, t3.msig = e3.msig, t3;
        }
        verify(e3) {
          if (this.sig && this.msig)
            return false;
          try {
            yn(this.logic);
          } catch (e4) {
            return false;
          }
          const t3 = k(this.tag, this.logic);
          return this.sig || this.msig ? this.sig ? m(t3, this.sig, e3) : dn(t3, this.msig, e3) : R(l(t3), e3);
        }
        address() {
          const e3 = l(k(this.tag, this.logic));
          return K(new Uint8Array(e3));
        }
        sign(e3, t3) {
          if (null == t3)
            this.sig = this.signProgram(e3);
          else {
            const r2 = t3.addrs.map((e4) => ({ pk: F(e4).publicKey }));
            this.msig = { v: t3.version, thr: t3.threshold, subsig: r2 };
            const [s2, n2] = this.singleSignMultisig(e3, this.msig);
            this.msig.subsig[n2].s = s2;
          }
        }
        appendToMultisig(e3) {
          if (void 0 === this.msig)
            throw new Error("no multisig present");
          const [t3, r2] = this.singleSignMultisig(e3, this.msig);
          this.msig.subsig[r2].s = t3;
        }
        signProgram(e3) {
          return f(k(this.tag, this.logic), e3);
        }
        singleSignMultisig(e3, t3) {
          let r2 = -1;
          const s2 = p(e3).publicKey;
          for (let e4 = 0; e4 < t3.subsig.length; e4++) {
            const { pk: n2 } = t3.subsig[e4];
            if (R(n2, s2)) {
              r2 = e4;
              break;
            }
          }
          if (-1 === r2)
            throw new Error("invalid secret key");
          return [this.signProgram(e3), r2];
        }
        toByte() {
          return X(this.get_obj_for_encoding());
        }
        static fromByte(e3) {
          const t3 = Z(e3);
          return wn.from_obj_for_encoding(t3);
        }
      }
      class bn {
        constructor(e3, t3) {
          this.lsig = new wn(e3, t3), this.sigkey = void 0;
        }
        get_obj_for_encoding() {
          const e3 = { lsig: this.lsig.get_obj_for_encoding() };
          return this.sigkey && (e3.sigkey = this.sigkey), e3;
        }
        static from_obj_for_encoding(e3) {
          const t3 = new bn(e3.lsig.l, e3.lsig.arg);
          return t3.lsig = wn.from_obj_for_encoding(e3.lsig), t3.sigkey = e3.sigkey, t3;
        }
        toByte() {
          return X(this.get_obj_for_encoding());
        }
        static fromByte(e3) {
          const t3 = Z(e3);
          return bn.from_obj_for_encoding(t3);
        }
        isDelegated() {
          return !(!this.lsig.sig && !this.lsig.msig);
        }
        verify() {
          const e3 = this.address();
          return this.lsig.verify(F(e3).publicKey);
        }
        address() {
          if (this.lsig.sig && this.lsig.msig)
            throw new Error("LogicSig has too many signatures. At most one of sig or msig may be present");
          if (this.lsig.sig) {
            if (!this.sigkey)
              throw new Error("Signing key for delegated account is missing");
            return K(this.sigkey);
          }
          return this.lsig.msig ? K(z({ version: this.lsig.msig.v, threshold: this.lsig.msig.thr, pks: this.lsig.msig.subsig.map((e3) => e3.pk) })) : this.lsig.address();
        }
        signMultisig(e3, t3) {
          this.lsig.sign(t3, e3);
        }
        appendToMultisig(e3) {
          this.lsig.appendToMultisig(e3);
        }
        sign(e3) {
          this.lsig.sign(e3), this.sigkey = p(e3).publicKey;
        }
      }
      function vn(e3, t3) {
        let r2, s2;
        return t3 instanceof bn ? (r2 = t3.lsig, s2 = F(t3.address()).publicKey) : (r2 = t3, s2 = r2.sig ? e3.from.publicKey : r2.msig ? z({ version: r2.msig.v, threshold: r2.msig.thr, pks: r2.msig.subsig.map((e4) => e4.pk) }) : F(r2.address()).publicKey), function(e4, t4, r3) {
          if (!t4.verify(r3))
            throw new Error("Logic signature verification failed. Ensure the program and signature are valid.");
          const s3 = { lsig: t4.get_obj_for_encoding(), txn: e4.get_obj_for_encoding() };
          return g(r3, e4.from.publicKey) || (s3.sgnr = i.lW.from(r3)), { txID: e4.txID().toString(), blob: X(s3) };
        }(e3, r2, s2);
      }
      function xn(e3, t3) {
        return vn(ce(e3), t3);
      }
      function An(e3) {
        return wn.fromByte(e3);
      }
      const _n = i.lW.from("ProgData");
      function En(e3, t3, r2) {
        const s2 = k(F(r2).publicKey, t3);
        return f(i.lW.from(k(_n, s2)), e3);
      }
      function Tn(e3, t3, r2, s2) {
        const n2 = k(F(t3).publicKey, e3);
        return m(i.lW.from(k(_n, n2)), r2, s2);
      }
      function Sn(e3, t3, r2) {
        return En(e3, t3, new wn(r2).address());
      }
      let Rn = {};
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").forEach(function(e3, t3) {
        Rn[e3] = t3;
      });
      class In {
        constructor({ version: e3, sources: t3, names: r2, mappings: s2 }) {
          if (this.version = e3, this.sources = t3, this.names = r2, this.mappings = s2, 3 !== this.version)
            throw new Error(`Only version 3 is supported, got ${this.version}`);
          if (void 0 === this.mappings)
            throw new Error("mapping undefined, cannot build source map without `mapping`");
          const n2 = this.mappings.split(";").map((e4) => {
            const t4 = function(e5) {
              let t5 = [], r3 = 0, s3 = 0;
              for (let n3 = 0; n3 < e5.length; n3 += 1) {
                let i3 = Rn[e5[n3]];
                if (void 0 === i3)
                  throw new Error("Invalid character (" + e5[n3] + ")");
                const o2 = 32 & i3;
                if (i3 &= 31, s3 += i3 << r3, o2)
                  r3 += 5;
                else {
                  const e6 = 1 & s3;
                  s3 >>>= 1, e6 ? t5.push(0 === s3 ? -2147483648 : -s3) : t5.push(s3), s3 = r3 = 0;
                }
              }
              return t5;
            }(e4);
            if (t4.length > 2)
              return t4[2];
          });
          this.pcToLine = {}, this.lineToPc = {};
          let i2 = 0;
          for (const [e4, t4] of n2.entries())
            void 0 !== t4 && (i2 += t4), i2 in this.lineToPc || (this.lineToPc[i2] = []), this.lineToPc[i2].push(e4), this.pcToLine[e4] = i2;
        }
        getLineForPc(e3) {
          return this.pcToLine[e3];
        }
        getPcsForLine(e3) {
          return this.lineToPc[e3];
        }
      }
      const Bn = 1380011588;
      function Un(e3) {
        return e3.params["approval-program"] = i.lW.from(e3.params["approval-program"].toString(), "base64"), e3.params["clear-state-program"] = i.lW.from(e3.params["clear-state-program"].toString(), "base64"), e3;
      }
      async function Pn({ client: e3, txns: t3, protocolVersion: r2, latestTimestamp: s2, round: n2, sources: i2 }) {
        const o2 = [], a2 = [], c2 = [], u2 = [], l2 = [];
        for (const e4 of t3)
          e4.txn.type === Q.appl && (l2.push(K(e4.txn.from.publicKey)), e4.txn.appAccounts && l2.push(...e4.txn.appAccounts.map((e5) => K(e5.publicKey))), e4.txn.appForeignApps && (c2.push(...e4.txn.appForeignApps), l2.push(...e4.txn.appForeignApps.map((e5) => G(e5)))), e4.txn.appForeignAssets && u2.push(...e4.txn.appForeignAssets), void 0 === e4.txn.appIndex || 0 === e4.txn.appIndex ? o2.push(new Re({ id: Bn, params: new Ie({ creator: K(e4.txn.from.publicKey), approvalProgram: e4.txn.appApprovalProgram, clearStateProgram: e4.txn.appClearProgram, localStateSchema: new Be({ numUint: e4.txn.appLocalInts, numByteSlice: e4.txn.appLocalByteSlices }), globalStateSchema: new Be({ numUint: e4.txn.appGlobalInts, numByteSlice: e4.txn.appGlobalByteSlices }) }) })) : (c2.push(e4.txn.appIndex), l2.push(G(e4.txn.appIndex))));
        const h2 = [];
        for (const t4 of [...new Set(u2)])
          h2.push(e3.getAssetByID(t4).do().then((e4) => {
            l2.push(e4.params.creator);
          }));
        await Promise.all(h2);
        const d2 = [];
        for (const t4 of [...new Set(c2)])
          d2.push(e3.getApplicationByID(t4).do().then((e4) => {
            const t5 = Un(e4);
            o2.push(t5), l2.push(t5.params.creator);
          }));
        await Promise.all(d2);
        const p2 = [];
        for (const t4 of [...new Set(l2)])
          p2.push(e3.accountInformation(t4).do().then((e4) => {
            "created-apps" in e4 && (e4["created-apps"] = e4["created-apps"].map((e5) => Un(e5))), a2.push(e4);
          }));
        return await Promise.all(p2), new Fe({ txns: t3.map((e4) => ({ ...e4, txn: e4.txn.get_obj_for_encoding() })), accounts: a2, apps: o2, latestTimestamp: s2, round: n2, protocolVersion: r2, sources: i2 });
      }
      class jn {
        constructor(e3) {
          this.type = 0, this.bytes = "", this.uint = 0, this.type = e3.type, this.bytes = e3.bytes, this.uint = e3.uint;
        }
        toString() {
          return 1 === this.type ? `0x${i.lW.from(this.bytes, "base64").toString("hex")}` : this.uint.toString();
        }
      }
      class qn {
        constructor(e3) {
          this.error = "", this.line = 0, this.pc = 0, this.scratch = [], this.stack = [], this.error = void 0 === e3.error ? "" : e3.error, this.line = e3.line, this.pc = e3.pc, this.scratch = e3.scratch, this.stack = e3.stack.map((e4) => new jn(e4));
        }
      }
      class Dn {
        constructor(e3) {
          this.trace = [], null != e3 && (this.trace = e3.map((e4) => new qn(e4)));
        }
      }
      function $n(e3, t3) {
        return e3.length > t3 && t3 > 0 ? `${e3.slice(0, t3)}...` : e3;
      }
      function On(e3, t3) {
        if (0 === t3.length)
          return "";
        let r2 = null;
        for (let s3 = 0; s3 < t3.length; s3++)
          (s3 > e3.length || JSON.stringify(e3[s3]) !== JSON.stringify(t3[s3])) && (r2 = s3);
        if (null == r2)
          return "";
        const s2 = t3[r2];
        return s2.bytes.length > 0 ? `${r2} = 0x${i.lW.from(s2.bytes, "base64").toString("hex")}` : `${r2} = ${s2.uint.toString()}`;
      }
      function Cn(e3, t3) {
        return `[${(t3 ? e3.reverse() : e3).map((e4) => {
          switch (e4.type) {
            case 1:
              return `0x${i.lW.from(e4.bytes, "base64").toString("hex")}`;
            case 2:
              return `${e4.uint.toString()}`;
            default:
              return "";
          }
        }).join(", ")}]`;
      }
      class Ln {
        constructor(e3) {
          this.disassembly = [], this.appCallMessages = [], this.localDeltas = [], this.globalDelta = [], this.cost = 0, this.logicSigMessages = [], this.logicSigDisassembly = [], this.logs = [], this.appCallTrace = void 0, this.logicSigTrace = void 0, this.required = ["disassembly"], this.optionals = ["app-call-messages", "local-deltas", "global-delta", "cost", "logic-sig-messages", "logic-sig-disassembly", "logs"], this.traces = ["app-call-trace", "logic-sig-trace"], this.disassembly = e3.disassembly, this.appCallMessages = e3["app-call-messages"], this.localDeltas = e3["local-deltas"], this.globalDelta = e3["global-delta"], this.cost = e3.cost, this.logicSigMessages = e3["logic-sig-messages"], this.logicSigDisassembly = e3["logic-sig-disassembly"], this.logs = e3.logs, this.appCallTrace = new Dn(e3["app-call-trace"]), this.logicSigTrace = new Dn(e3["logic-sig-trace"]);
        }
        appCallRejected() {
          return void 0 !== this.appCallMessages && this.appCallMessages.includes("REJECT");
        }
        logicSigRejected() {
          return void 0 !== this.logicSigMessages && this.logicSigMessages.includes("REJECT");
        }
        static trace(e3, t3, r2) {
          const s2 = r2.maxValueWidth || 30, n2 = [["pc#", "ln#", "source", "scratch", "stack"]];
          for (let i3 = 0; i3 < e3.trace.length; i3++) {
            const { line: o2, error: a2, pc: c2, scratch: u2, stack: l2 } = e3.trace[i3], h2 = void 0 !== u2 ? u2 : [], d2 = i3 > 0 && void 0 !== e3.trace[i3 - 1].scratch ? e3.trace[i3 - 1].scratch : [], p2 = "" === a2 ? t3[o2] : `!! ${a2} !!`;
            n2.push([c2.toString().padEnd(3, " "), o2.toString().padEnd(3, " "), $n(p2, s2), $n(On(d2, h2), s2), $n(Cn(l2, r2.topOfStackFirst), s2)]);
          }
          const i2 = n2.reduce((e4, t4) => {
            const r3 = new Array(n2[0].length).fill(0);
            for (let s3 = 0; s3 < e4.length; s3++)
              r3[s3] = t4[s3].length > e4[s3] ? t4[s3].length : e4[s3];
            return r3;
          }, new Array(n2[0].length).fill(0));
          return `${n2.map((e4) => e4.map((e5, t4) => e5.padEnd(i2[t4] + 1, " ")).join("|").trim()).join("\n")}
`;
        }
        appTrace(e3) {
          if (void 0 === this.appCallTrace || !this.disassembly)
            return "";
          let t3 = e3;
          return void 0 === e3 && (t3 = { maxValueWidth: 30, topOfStackFirst: false }), Ln.trace(this.appCallTrace, this.disassembly, t3);
        }
        lsigTrace(e3) {
          if (void 0 === this.logicSigTrace || void 0 === this.logicSigDisassembly)
            return "";
          let t3 = e3;
          return void 0 === e3 && (t3 = { maxValueWidth: 30, topOfStackFirst: true }), Ln.trace(this.logicSigTrace, this.logicSigDisassembly, t3);
        }
      }
      class Mn {
        constructor(e3) {
          this.error = "", this.protocolVersion = "", this.txns = [], this.error = e3.error, this.protocolVersion = e3["protocol-version"], this.txns = e3.txns.map((e4) => new Ln(e4));
        }
      }
      function Nn(e3, t3, r2, s2, n2, i2, o2) {
        const a2 = { from: e3, to: t3, amount: r2, closeRemainderTo: s2, note: n2, suggestedParams: i2, type: Q.pay, reKeyTo: o2 };
        return new se(a2);
      }
      function Fn(e3) {
        return Nn(e3.from, e3.to, e3.amount, e3.closeRemainderTo, e3.note, e3.suggestedParams, e3.rekeyTo);
      }
      function Wn(e3, t3, r2, s2, n2, i2, o2, a2, c2, u2 = false, l2 = void 0) {
        const h2 = { from: e3, note: t3, voteKey: r2, selectionKey: s2, voteFirst: n2, voteLast: i2, voteKeyDilution: o2, suggestedParams: a2, type: Q.keyreg, reKeyTo: c2, nonParticipation: u2, stateProofKey: l2 };
        return new se(h2);
      }
      function Kn(e3) {
        return Wn(e3.from, e3.note, e3.voteKey, e3.selectionKey, e3.voteFirst, e3.voteLast, e3.voteKeyDilution, e3.suggestedParams, e3.rekeyTo, e3.nonParticipation, e3.stateProofKey);
      }
      function zn(e3, t3, r2, s2, n2, i2, o2, a2, c2, u2, l2, h2, d2, p2, f2) {
        const g2 = { from: e3, note: t3, suggestedParams: p2, assetTotal: r2, assetDecimals: s2, assetDefaultFrozen: n2, assetUnitName: u2, assetName: l2, assetURL: h2, assetMetadataHash: d2, assetManager: i2, assetReserve: o2, assetFreeze: a2, assetClawback: c2, type: Q.acfg, reKeyTo: f2 };
        return new se(g2);
      }
      function Vn(e3) {
        return zn(e3.from, e3.note, e3.total, e3.decimals, e3.defaultFrozen, e3.manager, e3.reserve, e3.freeze, e3.clawback, e3.unitName, e3.assetName, e3.assetURL, e3.assetMetadataHash, e3.suggestedParams, e3.rekeyTo);
      }
      function Gn(e3, t3, r2, s2, n2, i2, o2, a2, c2 = true, u2) {
        if (c2 && (void 0 === s2 || void 0 === n2 || void 0 === i2 || void 0 === o2))
          throw Error("strict empty address checking was turned on, but at least one empty address was provided");
        const l2 = { from: e3, suggestedParams: a2, assetIndex: r2, assetManager: s2, assetReserve: n2, assetFreeze: i2, assetClawback: o2, type: Q.acfg, note: t3, reKeyTo: u2 };
        return new se(l2);
      }
      function Hn(e3) {
        return Gn(e3.from, e3.note, e3.assetIndex, e3.manager, e3.reserve, e3.freeze, e3.clawback, e3.suggestedParams, e3.strictEmptyAddressChecking, e3.rekeyTo);
      }
      function Yn(e3, t3, r2, s2, n2) {
        const i2 = { from: e3, suggestedParams: s2, assetIndex: r2, type: Q.acfg, note: t3, reKeyTo: n2 };
        return new se(i2);
      }
      function Jn(e3) {
        return Yn(e3.from, e3.note, e3.assetIndex, e3.suggestedParams, e3.rekeyTo);
      }
      function Xn(e3, t3, r2, s2, n2, i2, o2) {
        const a2 = { from: e3, type: Q.afrz, freezeAccount: s2, assetIndex: r2, freezeState: n2, note: t3, suggestedParams: i2, reKeyTo: o2 };
        return new se(a2);
      }
      function Zn(e3) {
        return Xn(e3.from, e3.note, e3.assetIndex, e3.freezeTarget, e3.freezeState, e3.suggestedParams, e3.rekeyTo);
      }
      function Qn(e3, t3, r2, s2, n2, i2, o2, a2, c2) {
        const u2 = { type: Q.axfer, from: e3, to: t3, amount: n2, suggestedParams: a2, assetIndex: o2, note: i2, assetRevocationTarget: s2, closeRemainderTo: r2, reKeyTo: c2 };
        return new se(u2);
      }
      function ei(e3) {
        return Qn(e3.from, e3.to, e3.closeRemainderTo, e3.revocationTarget, e3.amount, e3.note, e3.assetIndex, e3.suggestedParams, e3.rekeyTo);
      }
      function ti(e3, t3, r2, s2, n2, i2, o2, a2, c2, u2, l2, h2, d2, p2, f2, g2, m2, y2) {
        const w2 = { type: Q.appl, from: e3, suggestedParams: t3, appIndex: 0, appOnComplete: r2, appLocalInts: i2, appLocalByteSlices: o2, appGlobalInts: a2, appGlobalByteSlices: c2, appApprovalProgram: s2, appClearProgram: n2, appArgs: u2, appAccounts: l2, appForeignApps: h2, appForeignAssets: d2, boxes: y2, note: p2, lease: f2, reKeyTo: g2, extraPages: m2 };
        return new se(w2);
      }
      function ri(e3) {
        return ti(e3.from, e3.suggestedParams, e3.onComplete, e3.approvalProgram, e3.clearProgram, e3.numLocalInts, e3.numLocalByteSlices, e3.numGlobalInts, e3.numGlobalByteSlices, e3.appArgs, e3.accounts, e3.foreignApps, e3.foreignAssets, e3.note, e3.lease, e3.rekeyTo, e3.extraPages, e3.boxes);
      }
      function si(e3, t3, r2, s2, n2, i2, o2, a2, c2, u2, l2, h2, d2) {
        const p2 = { type: Q.appl, from: e3, suggestedParams: t3, appIndex: r2, appApprovalProgram: s2, appOnComplete: ee.UpdateApplicationOC, appClearProgram: n2, appArgs: i2, appAccounts: o2, appForeignApps: a2, appForeignAssets: c2, boxes: d2, note: u2, lease: l2, reKeyTo: h2 };
        return new se(p2);
      }
      function ni(e3) {
        return si(e3.from, e3.suggestedParams, e3.appIndex, e3.approvalProgram, e3.clearProgram, e3.appArgs, e3.accounts, e3.foreignApps, e3.foreignAssets, e3.note, e3.lease, e3.rekeyTo, e3.boxes);
      }
      function ii(e3, t3, r2, s2, n2, i2, o2, a2, c2, u2, l2) {
        const h2 = { type: Q.appl, from: e3, suggestedParams: t3, appIndex: r2, appOnComplete: ee.DeleteApplicationOC, appArgs: s2, appAccounts: n2, appForeignApps: i2, appForeignAssets: o2, boxes: l2, note: a2, lease: c2, reKeyTo: u2 };
        return new se(h2);
      }
      function oi(e3) {
        return ii(e3.from, e3.suggestedParams, e3.appIndex, e3.appArgs, e3.accounts, e3.foreignApps, e3.foreignAssets, e3.note, e3.lease, e3.rekeyTo, e3.boxes);
      }
      function ai(e3, t3, r2, s2, n2, i2, o2, a2, c2, u2, l2) {
        const h2 = { type: Q.appl, from: e3, suggestedParams: t3, appIndex: r2, appOnComplete: ee.OptInOC, appArgs: s2, appAccounts: n2, appForeignApps: i2, appForeignAssets: o2, boxes: l2, note: a2, lease: c2, reKeyTo: u2 };
        return new se(h2);
      }
      function ci(e3) {
        return ai(e3.from, e3.suggestedParams, e3.appIndex, e3.appArgs, e3.accounts, e3.foreignApps, e3.foreignAssets, e3.note, e3.lease, e3.rekeyTo, e3.boxes);
      }
      function ui(e3, t3, r2, s2, n2, i2, o2, a2, c2, u2, l2) {
        const h2 = { type: Q.appl, from: e3, suggestedParams: t3, appIndex: r2, appOnComplete: ee.CloseOutOC, appArgs: s2, appAccounts: n2, appForeignApps: i2, appForeignAssets: o2, boxes: l2, note: a2, lease: c2, reKeyTo: u2 };
        return new se(h2);
      }
      function li(e3) {
        return ui(e3.from, e3.suggestedParams, e3.appIndex, e3.appArgs, e3.accounts, e3.foreignApps, e3.foreignAssets, e3.note, e3.lease, e3.rekeyTo, e3.boxes);
      }
      function hi(e3, t3, r2, s2, n2, i2, o2, a2, c2, u2, l2) {
        const h2 = { type: Q.appl, from: e3, suggestedParams: t3, appIndex: r2, appOnComplete: ee.ClearStateOC, appArgs: s2, appAccounts: n2, appForeignApps: i2, appForeignAssets: o2, boxes: l2, note: a2, lease: c2, reKeyTo: u2 };
        return new se(h2);
      }
      function di(e3) {
        return hi(e3.from, e3.suggestedParams, e3.appIndex, e3.appArgs, e3.accounts, e3.foreignApps, e3.foreignAssets, e3.note, e3.lease, e3.rekeyTo, e3.boxes);
      }
      function pi(e3, t3, r2, s2, n2, i2, o2, a2, c2, u2, l2) {
        const h2 = { type: Q.appl, from: e3, suggestedParams: t3, appIndex: r2, appOnComplete: ee.NoOpOC, appArgs: s2, appAccounts: n2, appForeignApps: i2, appForeignAssets: o2, boxes: l2, note: a2, lease: c2, reKeyTo: u2 };
        return new se(h2);
      }
      function fi(e3) {
        return pi(e3.from, e3.suggestedParams, e3.appIndex, e3.appArgs, e3.accounts, e3.foreignApps, e3.foreignAssets, e3.note, e3.lease, e3.rekeyTo, e3.boxes);
      }
      function gi(e3) {
        const t3 = { type: Q.appl, from: e3.from, suggestedParams: e3.suggestedParams, appIndex: e3.appIndex, appOnComplete: e3.onComplete, appLocalInts: e3.numLocalInts, appLocalByteSlices: e3.numLocalByteSlices, appGlobalInts: e3.numGlobalInts, appGlobalByteSlices: e3.numGlobalByteSlices, appApprovalProgram: e3.approvalProgram, appClearProgram: e3.clearProgram, appArgs: e3.appArgs, appAccounts: e3.accounts, appForeignApps: e3.foreignApps, appForeignAssets: e3.foreignAssets, boxes: e3.boxes, note: e3.note, lease: e3.lease, reKeyTo: e3.rekeyTo, extraPages: e3.extraPages };
        return new se(t3);
      }
      function mi(e3) {
        return (t3, r2) => {
          const s2 = [];
          for (const n2 of r2)
            s2.push(t3[n2].signTxn(e3.sk));
          return Promise.resolve(s2);
        };
      }
      function yi(e3) {
        return (t3, r2) => {
          const s2 = [];
          for (const n2 of r2) {
            const { blob: r3 } = vn(t3[n2], e3);
            s2.push(r3);
          }
          return Promise.resolve(s2);
        };
      }
      function wi(e3, t3) {
        return (r2, s2) => {
          const n2 = [];
          for (const i2 of s2) {
            const s3 = r2[i2], o2 = [];
            for (const r3 of t3) {
              const { blob: t4 } = pn(s3, e3, r3);
              o2.push(t4);
            }
            n2.push(hn(o2));
          }
          return Promise.resolve(n2);
        };
      }
      function bi() {
        return (e3, t3) => {
          const r2 = [];
          for (const s2 of t3)
            r2.push(ne(e3[s2]));
          return Promise.resolve(r2);
        };
      }
      function vi(e3) {
        return "object" == typeof e3 && 2 === Object.keys(e3).length && "object" == typeof e3.txn && "function" == typeof e3.signer;
      }
      const xi = 65535, Ai = 32, _i = 1, Ei = 1, Ti = 2, Si = /^([a-z\d[\](),]+)\[(0|[1-9][\d]*)]$/, Ri = /^ufixed([1-9][\d]*)x([1-9][\d]*)$/;
      class ki {
        static from(e3) {
          if (e3.endsWith("[]")) {
            const t3 = ki.from(e3.slice(0, e3.length - 2));
            return new $i(t3);
          }
          if (e3.endsWith("]")) {
            const t3 = e3.match(Si);
            if (3 !== t3.length)
              throw new Error(`malformed static array string: ${e3}`);
            const r2 = t3[2], s2 = parseInt(r2, 10);
            if (s2 > xi)
              throw new Error(`array length exceeds limit ${xi}`);
            const n2 = ki.from(t3[1]);
            return new Di(n2, s2);
          }
          if (e3.startsWith("uint")) {
            const t3 = (e4) => [...e4].every((e5) => "0123456789".includes(e5)), r2 = e3.slice(4, e3.length);
            if (!t3(r2))
              throw new Error(`malformed uint string: ${r2}`);
            const s2 = parseInt(r2, 10);
            if (s2 > xi)
              throw new Error(`malformed uint string: ${s2}`);
            return new Ii(s2);
          }
          if ("byte" === e3)
            return new ji();
          if (e3.startsWith("ufixed")) {
            const t3 = e3.match(Ri);
            if (3 !== t3.length)
              throw new Error(`malformed ufixed type: ${e3}`);
            const r2 = parseInt(t3[1], 10), s2 = parseInt(t3[2], 10);
            return new Bi(r2, s2);
          }
          if ("bool" === e3)
            return new Pi();
          if ("address" === e3)
            return new Ui();
          if ("string" === e3)
            return new qi();
          if (e3.length >= 2 && "(" === e3[0] && ")" === e3[e3.length - 1]) {
            const t3 = Oi.parseTupleContent(e3.slice(1, e3.length - 1)), r2 = [];
            for (let e4 = 0; e4 < t3.length; e4++) {
              const s2 = ki.from(t3[e4]);
              r2.push(s2);
            }
            return new Oi(r2);
          }
          throw new Error(`cannot convert a string ${e3} to an ABI type`);
        }
      }
      class Ii extends ki {
        constructor(e3) {
          if (super(), e3 % 8 != 0 || e3 < 8 || e3 > 512)
            throw new Error(`unsupported uint type bitSize: ${e3}`);
          this.bitSize = e3;
        }
        toString() {
          return `uint${this.bitSize}`;
        }
        equals(e3) {
          return e3 instanceof Ii && this.bitSize === e3.bitSize;
        }
        isDynamic() {
          return false;
        }
        byteLen() {
          return this.bitSize / 8;
        }
        encode(e3) {
          if ("bigint" != typeof e3 && "number" != typeof e3)
            throw new Error(`Cannot encode value as uint${this.bitSize}: ${e3}`);
          if (e3 >= BigInt(2 ** this.bitSize) || e3 < BigInt(0))
            throw new Error(`${e3} is not a non-negative int or too big to fit in size uint${this.bitSize}`);
          if ("number" == typeof e3 && !Number.isSafeInteger(e3))
            throw new Error(`${e3} should be converted into a BigInt before it is encoded`);
          return Os(e3, this.bitSize / 8);
        }
        decode(e3) {
          if (e3.length !== this.bitSize / 8)
            throw new Error(`byte string must correspond to a uint${this.bitSize}`);
          return Cs(e3);
        }
      }
      class Bi extends ki {
        constructor(e3, t3) {
          if (super(), e3 % 8 != 0 || e3 < 8 || e3 > 512)
            throw new Error(`unsupported ufixed type bitSize: ${e3}`);
          if (t3 > 160 || t3 < 1)
            throw new Error(`unsupported ufixed type precision: ${t3}`);
          this.bitSize = e3, this.precision = t3;
        }
        toString() {
          return `ufixed${this.bitSize}x${this.precision}`;
        }
        equals(e3) {
          return e3 instanceof Bi && this.bitSize === e3.bitSize && this.precision === e3.precision;
        }
        isDynamic() {
          return false;
        }
        byteLen() {
          return this.bitSize / 8;
        }
        encode(e3) {
          if ("bigint" != typeof e3 && "number" != typeof e3)
            throw new Error(`Cannot encode value as ${this.toString()}: ${e3}`);
          if (e3 >= BigInt(2 ** this.bitSize) || e3 < BigInt(0))
            throw new Error(`${e3} is not a non-negative int or too big to fit in size ${this.toString()}`);
          if ("number" == typeof e3 && !Number.isSafeInteger(e3))
            throw new Error(`${e3} should be converted into a BigInt before it is encoded`);
          return Os(e3, this.bitSize / 8);
        }
        decode(e3) {
          if (e3.length !== this.bitSize / 8)
            throw new Error(`byte string must correspond to a ${this.toString()}`);
          return Cs(e3);
        }
      }
      class Ui extends ki {
        toString() {
          return "address";
        }
        equals(e3) {
          return e3 instanceof Ui;
        }
        isDynamic() {
          return false;
        }
        byteLen() {
          return Ai;
        }
        encode(e3) {
          if ("string" != typeof e3 && !(e3 instanceof Uint8Array))
            throw new Error(`Cannot encode value as ${this.toString()}: ${e3}`);
          if ("string" == typeof e3)
            return F(e3).publicKey;
          if (32 !== e3.byteLength)
            throw new Error("byte string must be 32 bytes long for an address");
          return e3;
        }
        decode(e3) {
          if (32 !== e3.byteLength)
            throw new Error("byte string must be 32 bytes long for an address");
          return K(e3);
        }
      }
      class Pi extends ki {
        toString() {
          return "bool";
        }
        equals(e3) {
          return e3 instanceof Pi;
        }
        isDynamic() {
          return false;
        }
        byteLen() {
          return Ei;
        }
        encode(e3) {
          if ("boolean" != typeof e3)
            throw new Error(`Cannot encode value as bool: ${e3}`);
          return e3 ? new Uint8Array([128]) : new Uint8Array([0]);
        }
        decode(e3) {
          if (1 !== e3.byteLength)
            throw new Error("bool string must be 1 byte long");
          const t3 = e3[0];
          if (128 === t3)
            return true;
          if (0 === t3)
            return false;
          throw new Error("boolean could not be decoded from the byte string");
        }
      }
      class ji extends ki {
        toString() {
          return "byte";
        }
        equals(e3) {
          return e3 instanceof ji;
        }
        isDynamic() {
          return false;
        }
        byteLen() {
          return _i;
        }
        encode(e3) {
          if ("number" != typeof e3 && "bigint" != typeof e3)
            throw new Error(`Cannot encode value as byte: ${e3}`);
          if ("bigint" == typeof e3 && (e3 = Number(e3)), e3 < 0 || e3 > 255)
            throw new Error(`${e3} cannot be encoded into a byte`);
          return new Uint8Array([e3]);
        }
        decode(e3) {
          if (1 !== e3.byteLength)
            throw new Error("byte string must be 1 byte long");
          return e3[0];
        }
      }
      class qi extends ki {
        toString() {
          return "string";
        }
        equals(e3) {
          return e3 instanceof qi;
        }
        isDynamic() {
          return true;
        }
        byteLen() {
          throw new Error(`${this.toString()} is a dynamic type`);
        }
        encode(e3) {
          if ("string" != typeof e3 && !(e3 instanceof Uint8Array))
            throw new Error(`Cannot encode value as string: ${e3}`);
          const t3 = i.lW.from(e3), r2 = Os(t3.length, Ti), s2 = new Uint8Array(t3.length + Ti);
          return s2.set(r2), s2.set(t3, Ti), s2;
        }
        decode(e3) {
          if (e3.length < Ti)
            throw new Error(`byte string is too short to be decoded. Actual length is ${e3.length}, but expected at least ${Ti}`);
          const t3 = i.lW.from(e3).readUIntBE(0, Ti), r2 = e3.slice(Ti, e3.length);
          if (t3 !== r2.length)
            throw new Error(`string length bytes do not match the actual length of string. Expected ${t3}, got ${r2.length}`);
          return i.lW.from(r2).toString("utf-8");
        }
      }
      class Di extends ki {
        constructor(e3, t3) {
          if (super(), t3 < 0)
            throw new Error(`static array must have a non negative length: ${t3}`);
          this.childType = e3, this.staticLength = t3;
        }
        toString() {
          return `${this.childType.toString()}[${this.staticLength}]`;
        }
        equals(e3) {
          return e3 instanceof Di && this.staticLength === e3.staticLength && this.childType.equals(e3.childType);
        }
        isDynamic() {
          return this.childType.isDynamic();
        }
        byteLen() {
          return this.childType.constructor === Pi ? Math.ceil(this.staticLength / 8) : this.staticLength * this.childType.byteLen();
        }
        encode(e3) {
          if (!(Array.isArray(e3) || e3 instanceof Uint8Array))
            throw new Error(`Cannot encode value as ${this.toString()}: ${e3}`);
          if (e3.length !== this.staticLength)
            throw new Error(`Value array does not match static array length. Expected ${this.staticLength}, got ${e3.length}`);
          return this.toABITupleType().encode(e3);
        }
        decode(e3) {
          return this.toABITupleType().decode(e3);
        }
        toABITupleType() {
          return new Oi(Array(this.staticLength).fill(this.childType));
        }
      }
      class $i extends ki {
        constructor(e3) {
          super(), this.childType = e3;
        }
        toString() {
          return `${this.childType.toString()}[]`;
        }
        equals(e3) {
          return e3 instanceof $i && this.childType.equals(e3.childType);
        }
        isDynamic() {
          return true;
        }
        byteLen() {
          throw new Error(`${this.toString()} is a dynamic type`);
        }
        encode(e3) {
          if (!(Array.isArray(e3) || e3 instanceof Uint8Array))
            throw new Error(`Cannot encode value as ${this.toString()}: ${e3}`);
          const t3 = this.toABITupleType(e3.length), r2 = t3.encode(e3);
          return k(Os(t3.childTypes.length, Ti), r2);
        }
        decode(e3) {
          const t3 = i.lW.from(e3).readUIntBE(0, Ti);
          return this.toABITupleType(t3).decode(e3.slice(Ti, e3.length));
        }
        toABITupleType(e3) {
          return new Oi(Array(e3).fill(this.childType));
        }
      }
      class Oi extends ki {
        constructor(e3) {
          if (super(), e3.length >= xi)
            throw new Error("tuple type child type number larger than maximum uint16 error");
          this.childTypes = e3;
        }
        toString() {
          const e3 = [];
          for (let t3 = 0; t3 < this.childTypes.length; t3++)
            e3[t3] = this.childTypes[t3].toString();
          return `(${e3.join(",")})`;
        }
        equals(e3) {
          return e3 instanceof Oi && this.childTypes.length === e3.childTypes.length && this.childTypes.every((t3, r2) => t3.equals(e3.childTypes[r2]));
        }
        isDynamic() {
          return this.childTypes.some((e3) => e3.isDynamic());
        }
        byteLen() {
          let e3 = 0;
          for (let t3 = 0; t3 < this.childTypes.length; t3++)
            if (this.childTypes[t3].constructor === Pi) {
              const r2 = Li(this.childTypes, t3, 1), s2 = r2 + 1;
              t3 += r2, e3 += Math.trunc((s2 + 7) / 8);
            } else
              e3 += this.childTypes[t3].byteLen();
          return e3;
        }
        encode(e3) {
          if (!(Array.isArray(e3) || e3 instanceof Uint8Array))
            throw new Error(`Cannot encode value as ${this.toString()}: ${e3}`);
          const t3 = Array.from(e3);
          if (e3.length > xi)
            throw new Error("length of tuple array should not exceed a uint16");
          const r2 = this.childTypes, s2 = [], n2 = [], i2 = /* @__PURE__ */ new Map();
          let o2 = 0;
          for (; o2 < r2.length; ) {
            const e4 = r2[o2];
            if (e4.isDynamic())
              i2.set(s2.length, true), s2.push(new Uint8Array([0, 0])), n2.push(e4.encode(t3[o2]));
            else {
              if (e4.constructor === Pi) {
                const e5 = Li(r2, o2, -1);
                let n3 = Li(r2, o2, 1);
                if (e5 % 8 != 0)
                  throw new Error("expected before index should have number of bool mod 8 equal 0");
                n3 = Math.min(7, n3);
                const i3 = Ci(t3.slice(o2, o2 + n3 + 1));
                s2.push(Os(i3, 1)), o2 += n3;
              } else {
                const r3 = e4.encode(t3[o2]);
                s2.push(r3);
              }
              i2.set(o2, false), n2.push(new Uint8Array());
            }
            o2 += 1;
          }
          let a2 = 0;
          for (const e4 of s2)
            a2 += e4.length;
          let c2 = 0;
          for (let e4 = 0; e4 < s2.length; e4++) {
            if (i2.get(e4)) {
              const t4 = a2 + c2;
              if (t4 > xi)
                throw new Error(`byte length of ${t4} should not exceed a uint16`);
              s2[e4] = Os(t4, Ti);
            }
            c2 += n2[e4].length;
          }
          return k(...s2, ...n2);
        }
        decode(e3) {
          const t3 = this.childTypes, r2 = [], s2 = [];
          let n2 = 0, o2 = 0;
          const a2 = i.lW.from(e3);
          for (; n2 < t3.length; ) {
            const i2 = t3[n2];
            if (i2.isDynamic()) {
              if (e3.slice(o2, e3.length).length < Ti)
                throw new Error("dynamic type in tuple is too short to be decoded");
              const t4 = a2.readUIntBE(o2, Ti);
              if (r2.length > 0 && (r2[r2.length - 1].right = t4, t4 < r2[r2.length - 1].left))
                throw new Error("dynamic index segment miscalculation: left is greater than right index");
              const n3 = { left: t4, right: -1 };
              r2.push(n3), s2.push(null), o2 += Ti;
            } else if (i2.constructor === Pi) {
              const t4 = Li(this.childTypes, n2, -1);
              let r3 = Li(this.childTypes, n2, 1);
              if (t4 % 8 != 0)
                throw new Error("expected before bool number mod 8 === 0");
              r3 = Math.min(7, r3);
              for (let t5 = 0; t5 <= r3; t5++) {
                const r4 = 128 >> t5;
                (e3[o2] & r4) > 0 ? s2.push(new Uint8Array([128])) : s2.push(new Uint8Array([0]));
              }
              n2 += r3, o2 += 1;
            } else {
              const t4 = i2.byteLen();
              s2.push(e3.slice(o2, o2 + t4)), o2 += t4;
            }
            if (n2 !== t3.length - 1 && o2 >= e3.length)
              throw new Error("input byte not enough to decode");
            n2 += 1;
          }
          if (r2.length > 0 && (r2[r2.length - 1].right = e3.length, o2 = e3.length), o2 < e3.length)
            throw new Error("input byte not fully consumed");
          for (let e4 = 0; e4 < r2.length; e4++) {
            const t4 = r2[e4];
            if (t4.left > t4.right)
              throw new Error("dynamic segment should display a [l, r] space with l <= r");
            if (e4 !== r2.length - 1 && t4.right !== r2[e4 + 1].left)
              throw new Error("dynamic segment should be consecutive");
          }
          let c2 = 0;
          for (let n3 = 0; n3 < t3.length; n3++)
            t3[n3].isDynamic() && (s2[n3] = e3.slice(r2[c2].left, r2[c2].right), c2 += 1);
          const u2 = [];
          for (let e4 = 0; e4 < t3.length; e4++) {
            const r3 = t3[e4].decode(s2[e4]);
            u2.push(r3);
          }
          return u2;
        }
        static parseTupleContent(e3) {
          if (0 === e3.length)
            return [];
          if (e3.endsWith(",") || e3.startsWith(","))
            throw new Error("tuple string should not start with comma");
          if (e3.includes(",,"))
            throw new Error("tuple string should not have consecutive commas");
          const t3 = [];
          let r2 = 0, s2 = "";
          for (const n2 of e3)
            s2 += n2, "(" === n2 ? r2 += 1 : ")" === n2 ? r2 -= 1 : "," === n2 && 0 === r2 && (t3.push(s2.slice(0, s2.length - 1)), s2 = "");
          if (0 !== s2.length && t3.push(s2), 0 !== r2)
            throw new Error("tuple string has mismatched parentheses");
          return t3;
        }
      }
      function Ci(e3) {
        let t3 = 0;
        if (e3.length > 8)
          throw new Error("value list passed in should be no greater than length 8");
        for (let r2 = 0; r2 < e3.length; r2++) {
          const s2 = e3[r2];
          if ("boolean" != typeof s2)
            throw new Error("non-boolean values cannot be compressed into a byte");
          s2 && (t3 |= 1 << 7 - r2);
        }
        return t3;
      }
      function Li(e3, t3, r2) {
        let s2 = 0;
        for (; ; ) {
          const n2 = t3 + r2 * s2;
          if (e3[n2].constructor !== Pi) {
            s2 -= 1;
            break;
          }
          if (n2 !== e3.length - 1 && 1 === r2)
            s2 += 1;
          else {
            if (!(n2 > 0 && -1 === r2))
              break;
            s2 += 1;
          }
        }
        return s2;
      }
      var Mi, Ni;
      function Fi(e3) {
        return e3 === Mi.any || e3 === Mi.pay || e3 === Mi.keyreg || e3 === Mi.acfg || e3 === Mi.axfer || e3 === Mi.afrz || e3 === Mi.appl;
      }
      function Wi(e3, t3) {
        return e3 === Mi.any || t3.type && t3.type.toString() === e3.toString();
      }
      function Ki(e3) {
        return e3 === Ni.account || e3 === Ni.application || e3 === Ni.asset;
      }
      !function(e3) {
        e3.any = "txn", e3.pay = "pay", e3.keyreg = "keyreg", e3.acfg = "acfg", e3.axfer = "axfer", e3.afrz = "afrz", e3.appl = "appl";
      }(Mi || (Mi = {})), function(e3) {
        e3.account = "account", e3.application = "application", e3.asset = "asset";
      }(Ni || (Ni = {}));
      class zi {
        constructor(e3) {
          if ("string" != typeof e3.name || "object" != typeof e3.returns || !Array.isArray(e3.args))
            throw new Error("Invalid ABIMethod parameters");
          this.name = e3.name, this.description = e3.desc, this.args = e3.args.map(({ type: e4, name: t3, desc: r2 }) => Fi(e4) || Ki(e4) ? { type: e4, name: t3, description: r2 } : { type: ki.from(e4), name: t3, description: r2 }), this.returns = { type: "void" === e3.returns.type ? e3.returns.type : ki.from(e3.returns.type), description: e3.returns.desc };
        }
        getSignature() {
          const e3 = this.args.map((e4) => e4.type.toString()).join(","), t3 = this.returns.type.toString();
          return `${this.name}(${e3})${t3}`;
        }
        getSelector() {
          const e3 = l(this.getSignature());
          return new Uint8Array(e3.slice(0, 4));
        }
        txnCount() {
          let e3 = 1;
          for (const t3 of this.args)
            "string" == typeof t3.type && Fi(t3.type) && (e3 += 1);
          return e3;
        }
        toJSON() {
          return { name: this.name, desc: this.description, args: this.args.map(({ type: e3, name: t3, description: r2 }) => ({ type: e3.toString(), name: t3, desc: r2 })), returns: { type: this.returns.type.toString(), desc: this.returns.description } };
        }
        static fromSignature(e3) {
          const { name: t3, args: r2, returns: s2 } = function(e4) {
            const t4 = e4.indexOf("(");
            if (-1 === t4)
              throw new Error(`Invalid method signature: ${e4}`);
            let r3 = -1, s3 = 0;
            for (let n2 = t4; n2 < e4.length; n2++) {
              const t5 = e4[n2];
              if ("(" === t5)
                s3 += 1;
              else if (")" === t5) {
                if (0 === s3)
                  break;
                if (s3 -= 1, 0 === s3) {
                  r3 = n2;
                  break;
                }
              }
            }
            if (-1 === r3)
              throw new Error(`Invalid method signature: ${e4}`);
            return { name: e4.slice(0, t4), args: Oi.parseTupleContent(e4.slice(t4 + 1, r3)), returns: e4.slice(r3 + 1) };
          }(e3);
          return new zi({ name: t3, args: r2.map((e4) => ({ type: e4 })), returns: { type: s2 } });
        }
      }
      function Vi(e3, t3) {
        if (null === e3 || !Array.isArray(e3) || !e3.every((e4) => e4 instanceof zi))
          throw new Error("Methods list provided is null or not the correct type");
        const r2 = e3.filter((e4) => e4.name === t3);
        if (r2.length > 1)
          throw new Error(`found ${r2.length} methods with the same name ${r2.map((e4) => e4.getSignature()).join(",")}`);
        if (0 === r2.length)
          throw new Error(`found 0 methods with the name ${t3}`);
        return r2[0];
      }
      class Gi {
        constructor(e3) {
          if ("string" != typeof e3.name || !Array.isArray(e3.methods) || e3.networks && "object" != typeof e3.networks)
            throw new Error("Invalid ABIContract parameters");
          this.name = e3.name, this.description = e3.desc, this.networks = e3.networks ? { ...e3.networks } : {}, this.methods = e3.methods.map((e4) => new zi(e4));
        }
        toJSON() {
          return { name: this.name, desc: this.description, networks: this.networks, methods: this.methods.map((e3) => e3.toJSON()) };
        }
        getMethodByName(e3) {
          return Vi(this.methods, e3);
        }
      }
      class Hi {
        constructor(e3) {
          if ("string" != typeof e3.name || !Array.isArray(e3.methods))
            throw new Error("Invalid ABIInterface parameters");
          this.name = e3.name, this.description = e3.desc, this.methods = e3.methods.map((e4) => new zi(e4));
        }
        toJSON() {
          return { name: this.name, desc: this.description, methods: this.methods.map((e3) => e3.toJSON()) };
        }
        getMethodByName(e3) {
          return Vi(this.methods, e3);
        }
      }
      const Yi = i.lW.from([21, 31, 124, 117]);
      var Ji;
      function Xi(e3, t3, r2) {
        if (null != r2 && e3 === r2)
          return 0;
        const s2 = null == r2 ? 0 : 1;
        for (let r3 = 0; r3 < t3.length; r3++)
          if (e3 === t3[r3])
            return r3 + s2;
        return t3.push(e3), t3.length - 1 + s2;
      }
      !function(e3) {
        e3[e3.BUILDING = 0] = "BUILDING", e3[e3.BUILT = 1] = "BUILT", e3[e3.SIGNED = 2] = "SIGNED", e3[e3.SUBMITTED = 3] = "SUBMITTED", e3[e3.COMMITTED = 4] = "COMMITTED";
      }(Ji || (Ji = {}));
      class Zi {
        constructor() {
          this.status = Ji.BUILDING, this.transactions = [], this.methodCalls = /* @__PURE__ */ new Map(), this.signedTxns = [], this.txIDs = [];
        }
        getStatus() {
          return this.status;
        }
        count() {
          return this.transactions.length;
        }
        clone() {
          const e3 = new Zi();
          return e3.transactions = this.transactions.map(({ txn: e4, signer: t3 }) => ({ txn: se.from_obj_for_encoding({ ...e4.get_obj_for_encoding(), grp: void 0 }), signer: t3 })), e3.methodCalls = new Map(this.methodCalls), e3;
        }
        addTransaction(e3) {
          if (this.status !== Ji.BUILDING)
            throw new Error("Cannot add transactions when composer status is not BUILDING");
          if (this.transactions.length === Zi.MAX_GROUP_SIZE)
            throw new Error(`Adding an additional transaction exceeds the maximum atomic group size of ${Zi.MAX_GROUP_SIZE}`);
          if (e3.txn.group && e3.txn.group.some((e4) => 0 !== e4))
            throw new Error("Cannot add a transaction with nonzero group ID");
          this.transactions.push(e3);
        }
        addMethodCall({ appID: e3, method: t3, methodArgs: r2, sender: s2, suggestedParams: n2, onComplete: i2, approvalProgram: o2, clearProgram: a2, numGlobalInts: c2, numGlobalByteSlices: u2, numLocalInts: l2, numLocalByteSlices: h2, extraPages: d2, appAccounts: p2, appForeignApps: f2, appForeignAssets: g2, boxes: m2, note: y2, lease: w2, rekeyTo: b2, signer: v2 }) {
          if (this.status !== Ji.BUILDING)
            throw new Error("Cannot add transactions when composer status is not BUILDING");
          if (this.transactions.length + t3.txnCount() > Zi.MAX_GROUP_SIZE)
            throw new Error(`Adding additional transactions exceeds the maximum atomic group size of ${Zi.MAX_GROUP_SIZE}`);
          if (0 === e3) {
            if (null == o2 || null == a2 || null == c2 || null == u2 || null == l2 || null == h2)
              throw new Error("One of the following required parameters for application creation is missing: approvalProgram, clearProgram, numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices");
          } else if (i2 === ee.UpdateApplicationOC) {
            if (null == o2 || null == a2)
              throw new Error("One of the following required parameters for OnApplicationComplete.UpdateApplicationOC is missing: approvalProgram, clearProgram");
            if (null != c2 || null != u2 || null != l2 || null != h2 || null != d2)
              throw new Error("One of the following application creation parameters were set on a non-creation call: numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices, extraPages");
          } else if (null != o2 || null != a2 || null != c2 || null != u2 || null != l2 || null != h2 || null != d2)
            throw new Error("One of the following application creation parameters were set on a non-creation call: approvalProgram, clearProgram, numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices, extraPages");
          if (null == r2 && (r2 = []), r2.length !== t3.args.length)
            throw new Error(`Incorrect number of method arguments. Expected ${t3.args.length}, got ${r2.length}`);
          let x2 = [], A2 = [];
          const _2 = [], E2 = [], T2 = [], S2 = /* @__PURE__ */ new Map(), R2 = m2 || [];
          for (let e4 = 0; e4 < r2.length; e4++) {
            let s3 = t3.args[e4].type;
            const n3 = r2[e4];
            if (Fi(s3)) {
              if (!vi(n3) || !Wi(s3, n3.txn))
                throw new Error(`Expected ${s3} TransactionWithSigner for argument at index ${e4}`);
              if (n3.txn.group && n3.txn.group.some((e5) => 0 !== e5))
                throw new Error("Cannot add a transaction with nonzero group ID");
              _2.push(n3);
            } else {
              if (vi(n3))
                throw new Error(`Expected non-transaction value for argument at index ${e4}`);
              if (Ki(s3) && (S2.set(E2.length, x2.length), E2.push(s3), T2.push(n3), s3 = new Ii(8)), "string" == typeof s3)
                throw new Error(`Unknown ABI type: ${s3}`);
              x2.push(s3), A2.push(n3);
            }
          }
          const k2 = [], I2 = null == p2 ? [] : p2.slice(), B2 = null == f2 ? [] : f2.slice(), U2 = null == g2 ? [] : g2.slice();
          for (let t4 = 0; t4 < E2.length; t4++) {
            const r3 = E2[t4], n3 = T2[t4];
            let i3 = 0;
            switch (r3) {
              case Ni.account: {
                const e4 = new Ui();
                i3 = Xi(e4.decode(e4.encode(n3)), I2, s2);
                break;
              }
              case Ni.application: {
                const t5 = new Ii(64), r4 = t5.decode(t5.encode(n3));
                if (r4 > Number.MAX_SAFE_INTEGER)
                  throw new Error(`Expected safe integer for application value, got ${r4}`);
                i3 = Xi(Number(r4), B2, e3);
                break;
              }
              case Ni.asset: {
                const e4 = new Ii(64), t5 = e4.decode(e4.encode(n3));
                if (t5 > Number.MAX_SAFE_INTEGER)
                  throw new Error(`Expected safe integer for asset value, got ${t5}`);
                i3 = Xi(Number(t5), U2);
                break;
              }
              default:
                throw new Error(`Unknown reference type: ${r3}`);
            }
            k2.push(i3);
          }
          for (let e4 = 0; e4 < k2.length; e4++)
            A2[S2.get(e4)] = k2[e4];
          if (x2.length > 15) {
            const e4 = x2.slice(14), t4 = A2.slice(14);
            x2 = x2.slice(0, 14), A2 = A2.slice(0, 14), x2.push(new Oi(e4)), A2.push(t4);
          }
          const P2 = [t3.getSelector()];
          for (let e4 = 0; e4 < x2.length; e4++)
            P2.push(x2[e4].encode(A2[e4]));
          const j2 = { txn: gi({ from: s2, appIndex: e3, appArgs: P2, accounts: I2, foreignApps: B2, foreignAssets: U2, boxes: R2, onComplete: null == i2 ? ee.NoOpOC : i2, approvalProgram: o2, clearProgram: a2, numGlobalInts: c2, numGlobalByteSlices: u2, numLocalInts: l2, numLocalByteSlices: h2, extraPages: d2, lease: w2, note: y2, rekeyTo: b2, suggestedParams: n2 }), signer: v2 };
          this.transactions.push(..._2, j2), this.methodCalls.set(this.transactions.length - 1, t3);
        }
        buildGroup() {
          if (this.status === Ji.BUILDING) {
            if (0 === this.transactions.length)
              throw new Error("Cannot build a group with 0 transactions");
            this.transactions.length > 1 && en(this.transactions.map((e3) => e3.txn)), this.status = Ji.BUILT;
          }
          return this.transactions;
        }
        async gatherSignatures() {
          if (this.status >= Ji.SIGNED)
            return this.signedTxns;
          const e3 = this.buildGroup(), t3 = e3.map((e4) => e4.txn), r2 = /* @__PURE__ */ new Map();
          for (let t4 = 0; t4 < e3.length; t4++) {
            const { signer: s3 } = e3[t4];
            r2.has(s3) || r2.set(s3, []), r2.get(s3).push(t4);
          }
          const s2 = Array.from(r2), n2 = await Promise.all(s2.map(([e4, r3]) => e4(t3, r3))), i2 = e3.map(() => null);
          for (let e4 = 0; e4 < s2.length; e4++) {
            const t4 = s2[e4][1], r3 = n2[e4];
            for (let e5 = 0; e5 < t4.length; e5++)
              i2[t4[e5]] = r3[e5];
          }
          if (!i2.every((e4) => null != e4))
            throw new Error(`Missing signatures. Got ${i2}`);
          const o2 = i2.map((e4, t4) => {
            try {
              return ae(e4).txn.txID();
            } catch (e5) {
              throw new Error(`Cannot decode signed transaction at index ${t4}. ${e5}`);
            }
          });
          return this.signedTxns = i2, this.txIDs = o2, this.status = Ji.SIGNED, i2;
        }
        async submit(e3) {
          if (this.status > Ji.SUBMITTED)
            throw new Error("Transaction group cannot be resubmitted");
          const t3 = await this.gatherSignatures();
          return await e3.sendRawTransaction(t3).do(), this.status = Ji.SUBMITTED, this.txIDs;
        }
        async simulate(e3, t3) {
          if (this.status > Ji.SUBMITTED)
            throw new Error("Simulated Transaction group has already been submitted to the network");
          const r2 = (await this.gatherSignatures()).map((e4) => Z(e4)), s2 = null == t3 ? new it({ txnGroups: [] }) : t3;
          s2.txnGroups = [new ot({ txns: r2 })];
          const n2 = await e3.simulateTransactions(s2).do(), i2 = [];
          for (const [e4, t4] of this.methodCalls) {
            const r3 = this.txIDs[e4], s3 = n2.txnGroups[0].txnResults[e4].txnResult, o2 = { txID: r3, rawReturnValue: new Uint8Array(), method: t4 };
            i2.push(Zi.parseMethodResponse(t4, o2, s3.get_obj_for_encoding()));
          }
          return { methodResults: i2, simulateResponse: n2 };
        }
        async execute(e3, t3) {
          if (this.status === Ji.COMMITTED)
            throw new Error("Transaction group has already been executed successfully");
          const r2 = await this.submit(e3);
          this.status = Ji.SUBMITTED;
          const s2 = this.transactions.findIndex((e4, t4) => this.methodCalls.has(t4)), n2 = -1 === s2 ? 0 : s2, i2 = await $s(e3, r2[n2], t3);
          this.status = Ji.COMMITTED;
          const o2 = i2["confirmed-round"], a2 = [];
          for (const [t4, n3] of this.methodCalls) {
            const o3 = r2[t4];
            let c2 = { txID: o3, rawReturnValue: new Uint8Array(), method: n3 };
            try {
              const r3 = t4 === s2 ? i2 : await e3.pendingTransactionInformation(o3).do();
              c2 = Zi.parseMethodResponse(n3, c2, r3);
            } catch (e4) {
              c2.decodeError = e4;
            }
            a2.push(c2);
          }
          return { confirmedRound: o2, txIDs: r2, methodResults: a2 };
        }
        static parseMethodResponse(e3, t3, r2) {
          const s2 = t3;
          try {
            if (s2.txInfo = r2, "void" !== e3.returns.type) {
              const n2 = r2.logs || [];
              if (0 === n2.length)
                throw new Error("App call transaction did not log a return value");
              const o2 = i.lW.from(n2[n2.length - 1], "base64");
              if (o2.byteLength < 4 || !o2.slice(0, 4).equals(Yi))
                throw new Error("App call transaction did not log a return value");
              s2.rawReturnValue = new Uint8Array(o2.slice(4)), s2.returnValue = e3.returns.type.decode(t3.rawReturnValue);
            }
          } catch (e4) {
            s2.decodeError = e4;
          }
          return s2;
        }
      }
      Zi.MAX_GROUP_SIZE = 16;
      const Qi = i.lW.from([77, 88]), eo = "The transaction sender address and multisig preimage do not match.";
      function to(e3, t3) {
        if (void 0 === e3.from) {
          const r3 = p(t3);
          e3.from = K(r3.publicKey);
        }
        const r2 = ce(e3);
        return { txID: r2.txID().toString(), blob: r2.signTxn(t3) };
      }
      function ro(e3, t3) {
        return new ue(e3).signBid(t3);
      }
      function so(e3, t3) {
        return f(i.lW.from(k(Qi, e3)), t3);
      }
      function no(e3, t3, r2) {
        return m(i.lW.from(k(Qi, e3)), t3, F(r2).publicKey);
      }
      function io(e3) {
        return new Uint8Array(X(e3));
      }
      function oo(e3) {
        return Z(e3);
      }
      const ao = new Error(eo), co = new Error(he), uo = n;
    })(), s;
  })());
})(algosdk_min);
var algosdk_minExports = algosdk_min.exports;
export {
  algosdk_minExports as a
};
