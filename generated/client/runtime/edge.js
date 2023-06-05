'use strict';
var mc = Object.create;
var sn = Object.defineProperty;
var dc = Object.getOwnPropertyDescriptor;
var gc = Object.getOwnPropertyNames;
var yc = Object.getPrototypeOf, hc = Object.prototype.hasOwnProperty;
var an = (e, t) => () => (e && (t = e(e = 0)), t);
var ee = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
	un = (e, t) => {
		for (var r in t) sn(e, r, { get: t[r], enumerable: !0 });
	},
	ds = (e, t, r, n) => {
		if (t && typeof t == 'object' || typeof t == 'function') {
			for (let o of gc(t)) {
				!hc.call(e, o) && o !== r && sn(e, o, {
					get: () => t[o],
					enumerable: !(n = dc(t, o)) || n.enumerable,
				});
			}
		}
		return e;
	};
var ue = (
		e,
		t,
		r,
	) => (r = e != null ? mc(yc(e)) : {},
		ds(
			t || !e || !e.__esModule
				? sn(r, 'default', { value: e, enumerable: !0 })
				: r,
			e,
		)),
	bc = (e) => ds(sn({}, '__esModule', { value: !0 }), e);
function q(e) {
	return () => e;
}
function ze() {
	return w;
}
var wc,
	w,
	f = an(() => {
		'use strict';
		wc = Promise.resolve();
		w = {
			abort: q(void 0),
			addListener: q(ze()),
			allowedNodeEnvironmentFlags: new Set(),
			arch: 'x64',
			argv: ['/bin/node'],
			argv0: 'node',
			chdir: q(void 0),
			config: {
				target_defaults: {
					cflags: [],
					default_configuration: '',
					defines: [],
					include_dirs: [],
					libraries: [],
				},
				variables: {
					clang: 0,
					host_arch: 'x64',
					node_install_npm: !1,
					node_install_waf: !1,
					node_prefix: '',
					node_shared_openssl: !1,
					node_shared_v8: !1,
					node_shared_zlib: !1,
					node_use_dtrace: !1,
					node_use_etw: !1,
					node_use_openssl: !1,
					target_arch: 'x64',
					v8_no_strict_aliasing: 0,
					v8_use_snapshot: !1,
					visibility: '',
				},
			},
			connected: !1,
			cpuUsage: () => ({ user: 0, system: 0 }),
			cwd: () => '/',
			debugPort: 0,
			disconnect: q(void 0),
			domain: {
				run: q(void 0),
				add: q(void 0),
				remove: q(void 0),
				bind: q(void 0),
				intercept: q(void 0),
				...ze(),
			},
			emit: q(ze()),
			emitWarning: q(void 0),
			env: {},
			eventNames: () => [],
			execArgv: [],
			execPath: '/',
			exit: q(void 0),
			features: {
				inspector: !1,
				debug: !1,
				uv: !1,
				ipv6: !1,
				tls_alpn: !1,
				tls_sni: !1,
				tls_ocsp: !1,
				tls: !1,
			},
			getMaxListeners: q(0),
			getegid: q(0),
			geteuid: q(0),
			getgid: q(0),
			getgroups: q([]),
			getuid: q(0),
			hasUncaughtExceptionCaptureCallback: q(!1),
			hrtime: q([0, 0]),
			platform: 'linux',
			kill: q(!0),
			listenerCount: q(0),
			listeners: q([]),
			memoryUsage: q({
				arrayBuffers: 0,
				external: 0,
				heapTotal: 0,
				heapUsed: 0,
				rss: 0,
			}),
			nextTick: (e, ...t) => {
				wc.then(() => e(...t)).catch((r) => {
					setTimeout(() => {
						throw r;
					}, 0);
				});
			},
			off: q(ze()),
			on: q(ze()),
			once: q(ze()),
			openStdin: q({}),
			pid: 0,
			ppid: 0,
			prependListener: q(ze()),
			prependOnceListener: q(ze()),
			rawListeners: q([]),
			release: { name: 'node' },
			removeAllListeners: q(ze()),
			removeListener: q(ze()),
			resourceUsage: q({
				fsRead: 0,
				fsWrite: 0,
				involuntaryContextSwitches: 0,
				ipcReceived: 0,
				ipcSent: 0,
				majorPageFault: 0,
				maxRSS: 0,
				minorPageFault: 0,
				sharedMemorySize: 0,
				signalsCount: 0,
				swappedOut: 0,
				systemCPUTime: 0,
				unsharedDataSize: 0,
				unsharedStackSize: 0,
				userCPUTime: 0,
				voluntaryContextSwitches: 0,
			}),
			setMaxListeners: q(ze()),
			setUncaughtExceptionCaptureCallback: q(void 0),
			setegid: q(void 0),
			seteuid: q(void 0),
			setgid: q(void 0),
			setgroups: q(void 0),
			setuid: q(void 0),
			stderr: { fd: 2 },
			stdin: { fd: 0 },
			stdout: { fd: 1 },
			title: 'node',
			traceDeprecation: !1,
			umask: q(0),
			uptime: q(0),
			version: '',
			versions: {
				http_parser: '',
				node: '',
				v8: '',
				ares: '',
				uv: '',
				zlib: '',
				modules: '',
				openssl: '',
			},
		};
	});
var E,
	m = an(() => {
		'use strict';
		E = () => {};
		E.prototype = E;
	});
var Ds = ee((Kt) => {
	'use strict';
	d();
	f();
	m();
	var ws =
			(e, t) =>
			() => (t || e((t = { exports: {} }).exports, t), t.exports),
		Ec = ws((e) => {
			'use strict';
			e.byteLength = u, e.toByteArray = c, e.fromByteArray = h;
			var t = [],
				r = [],
				n = typeof Uint8Array < 'u' ? Uint8Array : Array,
				o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
			for (i = 0, s = o.length; i < s; ++i) {
				t[i] = o[i], r[o.charCodeAt(i)] = i;
			}
			var i, s;
			r['-'.charCodeAt(0)] = 62, r['_'.charCodeAt(0)] = 63;
			function a(b) {
				var y = b.length;
				if (y % 4 > 0) {
					throw new Error(
						'Invalid string. Length must be a multiple of 4',
					);
				}
				var P = b.indexOf('=');
				P === -1 && (P = y);
				var S = P === y ? 0 : 4 - P % 4;
				return [P, S];
			}
			function u(b) {
				var y = a(b), P = y[0], S = y[1];
				return (P + S) * 3 / 4 - S;
			}
			function l(b, y, P) {
				return (y + P) * 3 / 4 - P;
			}
			function c(b) {
				var y,
					P = a(b),
					S = P[0],
					v = P[1],
					T = new n(l(b, S, v)),
					A = 0,
					F = v > 0 ? S - 4 : S,
					C;
				for (C = 0; C < F; C += 4) {
					y = r[b.charCodeAt(C)] << 18 |
						r[b.charCodeAt(C + 1)] << 12 |
						r[b.charCodeAt(C + 2)] << 6 | r[b.charCodeAt(C + 3)],
						T[A++] = y >> 16 & 255,
						T[A++] = y >> 8 & 255,
						T[A++] = y & 255;
				}
				return v === 2 &&
					(y = r[b.charCodeAt(C)] << 2 | r[b.charCodeAt(C + 1)] >> 4,
						T[A++] = y & 255),
					v === 1 &&
					(y = r[b.charCodeAt(C)] << 10 |
						r[b.charCodeAt(C + 1)] << 4 |
						r[b.charCodeAt(C + 2)] >> 2,
						T[A++] = y >> 8 & 255,
						T[A++] = y & 255),
					T;
			}
			function p(b) {
				return t[b >> 18 & 63] + t[b >> 12 & 63] + t[b >> 6 & 63] +
					t[b & 63];
			}
			function g(b, y, P) {
				for (var S, v = [], T = y; T < P; T += 3) {
					S = (b[T] << 16 & 16711680) + (b[T + 1] << 8 & 65280) +
						(b[T + 2] & 255), v.push(p(S));
				}
				return v.join('');
			}
			function h(b) {
				for (
					var y,
						P = b.length,
						S = P % 3,
						v = [],
						T = 16383,
						A = 0,
						F = P - S;
					A < F;
					A += T
				) v.push(g(b, A, A + T > F ? F : A + T));
				return S === 1
					? (y = b[P - 1], v.push(t[y >> 2] + t[y << 4 & 63] + '=='))
					: S === 2 &&
						(y = (b[P - 2] << 8) + b[P - 1],
							v.push(
								t[y >> 10] + t[y >> 4 & 63] + t[y << 2 & 63] +
									'=',
							)),
					v.join('');
			}
		}),
		xc = ws((e) => {
			e.read = function (t, r, n, o, i) {
				var s,
					a,
					u = i * 8 - o - 1,
					l = (1 << u) - 1,
					c = l >> 1,
					p = -7,
					g = n ? i - 1 : 0,
					h = n ? -1 : 1,
					b = t[r + g];
				for (
					g += h, s = b & (1 << -p) - 1, b >>= -p, p += u;
					p > 0;
					s = s * 256 + t[r + g], g += h, p -= 8
				);
				for (
					a = s & (1 << -p) - 1, s >>= -p, p += o;
					p > 0;
					a = a * 256 + t[r + g], g += h, p -= 8
				);
				if (s === 0) s = 1 - c;
				else {
					if (s === l) return a ? NaN : (b ? -1 : 1) * (1 / 0);
					a = a + Math.pow(2, o), s = s - c;
				}
				return (b ? -1 : 1) * a * Math.pow(2, s - o);
			},
				e.write = function (t, r, n, o, i, s) {
					var a,
						u,
						l,
						c = s * 8 - i - 1,
						p = (1 << c) - 1,
						g = p >> 1,
						h = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						b = o ? 0 : s - 1,
						y = o ? 1 : -1,
						P = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
					for (
						r = Math.abs(r),
							isNaN(r) || r === 1 / 0
								? (u = isNaN(r) ? 1 : 0, a = p)
								: (a = Math.floor(Math.log(r) / Math.LN2),
									r * (l = Math.pow(2, -a)) < 1 &&
									(a--, l *= 2),
									a + g >= 1
										? r += h / l
										: r += h * Math.pow(2, 1 - g),
									r * l >= 2 && (a++, l /= 2),
									a + g >= p
										? (u = 0, a = p)
										: a + g >= 1
										? (u = (r * l - 1) * Math.pow(2, i),
											a = a + g)
										: (u = r * Math.pow(2, g - 1) *
											Math.pow(2, i),
											a = 0));
						i >= 8;
						t[n + b] = u & 255, b += y, u /= 256, i -= 8
					);
					for (
						a = a << i | u, c += i;
						c > 0;
						t[n + b] = a & 255, b += y, a /= 256, c -= 8
					);
					t[n + b - y] |= P * 128;
				};
		}),
		Oo = Ec(),
		Gt = xc(),
		gs = typeof Symbol == 'function' && typeof Symbol.for == 'function'
			? Symbol.for('nodejs.util.inspect.custom')
			: null;
	Kt.Buffer = M;
	Kt.SlowBuffer = Mc;
	Kt.INSPECT_MAX_BYTES = 50;
	var ln = 2147483647;
	Kt.kMaxLength = ln;
	M.TYPED_ARRAY_SUPPORT = Ac();
	!M.TYPED_ARRAY_SUPPORT && typeof console < 'u' &&
		typeof console.error == 'function' &&
		console.error(
			'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
		);
	function Ac() {
		try {
			let e = new Uint8Array(1),
				t = {
					foo: function () {
						return 42;
					},
				};
			return Object.setPrototypeOf(t, Uint8Array.prototype),
				Object.setPrototypeOf(e, t),
				e.foo() === 42;
		} catch (e) {
			return !1;
		}
	}
	Object.defineProperty(M.prototype, 'parent', {
		enumerable: !0,
		get: function () {
			if (M.isBuffer(this)) return this.buffer;
		},
	});
	Object.defineProperty(M.prototype, 'offset', {
		enumerable: !0,
		get: function () {
			if (M.isBuffer(this)) return this.byteOffset;
		},
	});
	function pt(e) {
		if (e > ln) {
			throw new RangeError(
				'The value "' + e + '" is invalid for option "size"',
			);
		}
		let t = new Uint8Array(e);
		return Object.setPrototypeOf(t, M.prototype), t;
	}
	function M(e, t, r) {
		if (typeof e == 'number') {
			if (typeof t == 'string') {
				throw new TypeError(
					'The "string" argument must be of type string. Received type number',
				);
			}
			return Io(e);
		}
		return Es(e, t, r);
	}
	M.poolSize = 8192;
	function Es(e, t, r) {
		if (typeof e == 'string') return vc(e, t);
		if (ArrayBuffer.isView(e)) return Tc(e);
		if (e == null) {
			throw new TypeError(
				'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
					typeof e,
			);
		}
		if (
			rt(e, ArrayBuffer) || e && rt(e.buffer, ArrayBuffer) ||
			typeof SharedArrayBuffer < 'u' &&
				(rt(e, SharedArrayBuffer) ||
					e && rt(e.buffer, SharedArrayBuffer))
		) return As(e, t, r);
		if (typeof e == 'number') {
			throw new TypeError(
				'The "value" argument must not be of type number. Received type number',
			);
		}
		let n = e.valueOf && e.valueOf();
		if (n != null && n !== e) return M.from(n, t, r);
		let o = Sc(e);
		if (o) return o;
		if (
			typeof Symbol < 'u' && Symbol.toPrimitive != null &&
			typeof e[Symbol.toPrimitive] == 'function'
		) return M.from(e[Symbol.toPrimitive]('string'), t, r);
		throw new TypeError(
			'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
				typeof e,
		);
	}
	M.from = function (e, t, r) {
		return Es(e, t, r);
	};
	Object.setPrototypeOf(M.prototype, Uint8Array.prototype);
	Object.setPrototypeOf(M, Uint8Array);
	function xs(e) {
		if (typeof e != 'number') {
			throw new TypeError('"size" argument must be of type number');
		}
		if (e < 0) {
			throw new RangeError(
				'The value "' + e + '" is invalid for option "size"',
			);
		}
	}
	function Pc(e, t, r) {
		return xs(e),
			e <= 0
				? pt(e)
				: t !== void 0
				? typeof r == 'string' ? pt(e).fill(t, r) : pt(e).fill(t)
				: pt(e);
	}
	M.alloc = function (e, t, r) {
		return Pc(e, t, r);
	};
	function Io(e) {
		return xs(e), pt(e < 0 ? 0 : Do(e) | 0);
	}
	M.allocUnsafe = function (e) {
		return Io(e);
	};
	M.allocUnsafeSlow = function (e) {
		return Io(e);
	};
	function vc(e, t) {
		if (
			(typeof t != 'string' || t === '') && (t = 'utf8'), !M.isEncoding(t)
		) throw new TypeError('Unknown encoding: ' + t);
		let r = Ps(e, t) | 0, n = pt(r), o = n.write(e, t);
		return o !== r && (n = n.slice(0, o)), n;
	}
	function Ro(e) {
		let t = e.length < 0 ? 0 : Do(e.length) | 0, r = pt(t);
		for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
		return r;
	}
	function Tc(e) {
		if (rt(e, Uint8Array)) {
			let t = new Uint8Array(e);
			return As(t.buffer, t.byteOffset, t.byteLength);
		}
		return Ro(e);
	}
	function As(e, t, r) {
		if (t < 0 || e.byteLength < t) {
			throw new RangeError('"offset" is outside of buffer bounds');
		}
		if (e.byteLength < t + (r || 0)) {
			throw new RangeError('"length" is outside of buffer bounds');
		}
		let n;
		return t === void 0 && r === void 0
			? n = new Uint8Array(e)
			: r === void 0
			? n = new Uint8Array(e, t)
			: n = new Uint8Array(e, t, r),
			Object.setPrototypeOf(n, M.prototype),
			n;
	}
	function Sc(e) {
		if (M.isBuffer(e)) {
			let t = Do(e.length) | 0, r = pt(t);
			return r.length === 0 || e.copy(r, 0, 0, t), r;
		}
		if (e.length !== void 0) {
			return typeof e.length != 'number' || No(e.length) ? pt(0) : Ro(e);
		}
		if (e.type === 'Buffer' && Array.isArray(e.data)) return Ro(e.data);
	}
	function Do(e) {
		if (e >= ln) {
			throw new RangeError(
				'Attempt to allocate Buffer larger than maximum size: 0x' +
					ln.toString(16) + ' bytes',
			);
		}
		return e | 0;
	}
	function Mc(e) {
		return +e != e && (e = 0), M.alloc(+e);
	}
	M.isBuffer = function (e) {
		return e != null && e._isBuffer === !0 && e !== M.prototype;
	};
	M.compare = function (e, t) {
		if (
			rt(e, Uint8Array) && (e = M.from(e, e.offset, e.byteLength)),
				rt(t, Uint8Array) && (t = M.from(t, t.offset, t.byteLength)),
				!M.isBuffer(e) || !M.isBuffer(t)
		) {
			throw new TypeError(
				'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
			);
		}
		if (e === t) return 0;
		let r = e.length, n = t.length;
		for (let o = 0, i = Math.min(r, n); o < i; ++o) {
			if (e[o] !== t[o]) {
				r = e[o], n = t[o];
				break;
			}
		}
		return r < n ? -1 : n < r ? 1 : 0;
	};
	M.isEncoding = function (e) {
		switch (String(e).toLowerCase()) {
			case 'hex':
			case 'utf8':
			case 'utf-8':
			case 'ascii':
			case 'latin1':
			case 'binary':
			case 'base64':
			case 'ucs2':
			case 'ucs-2':
			case 'utf16le':
			case 'utf-16le':
				return !0;
			default:
				return !1;
		}
	};
	M.concat = function (e, t) {
		if (!Array.isArray(e)) {
			throw new TypeError('"list" argument must be an Array of Buffers');
		}
		if (e.length === 0) return M.alloc(0);
		let r;
		if (t === void 0) {
			for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
		}
		let n = M.allocUnsafe(t), o = 0;
		for (r = 0; r < e.length; ++r) {
			let i = e[r];
			if (rt(i, Uint8Array)) {
				o + i.length > n.length
					? (M.isBuffer(i) || (i = M.from(i)), i.copy(n, o))
					: Uint8Array.prototype.set.call(n, i, o);
			} else if (M.isBuffer(i)) i.copy(n, o);
			else {throw new TypeError(
					'"list" argument must be an Array of Buffers',
				);}
			o += i.length;
		}
		return n;
	};
	function Ps(e, t) {
		if (M.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || rt(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != 'string') {
			throw new TypeError(
				'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
					typeof e,
			);
		}
		let r = e.length, n = arguments.length > 2 && arguments[2] === !0;
		if (!n && r === 0) return 0;
		let o = !1;
		for (;;) {
			switch (t) {
				case 'ascii':
				case 'latin1':
				case 'binary':
					return r;
				case 'utf8':
				case 'utf-8':
					return Co(e).length;
				case 'ucs2':
				case 'ucs-2':
				case 'utf16le':
				case 'utf-16le':
					return r * 2;
				case 'hex':
					return r >>> 1;
				case 'base64':
					return Is(e).length;
				default:
					if (o) return n ? -1 : Co(e).length;
					t = ('' + t).toLowerCase(), o = !0;
			}
		}
	}
	M.byteLength = Ps;
	function Fc(e, t, r) {
		let n = !1;
		if (
			(t === void 0 || t < 0) && (t = 0),
				t > this.length ||
				((r === void 0 || r > this.length) && (r = this.length),
					r <= 0) ||
				(r >>>= 0, t >>>= 0, r <= t)
		) return '';
		for (e || (e = 'utf8');;) {
			switch (e) {
				case 'hex':
					return jc(this, t, r);
				case 'utf8':
				case 'utf-8':
					return Ts(this, t, r);
				case 'ascii':
					return _c(this, t, r);
				case 'latin1':
				case 'binary':
					return $c(this, t, r);
				case 'base64':
					return kc(this, t, r);
				case 'ucs2':
				case 'ucs-2':
				case 'utf16le':
				case 'utf-16le':
					return Lc(this, t, r);
				default:
					if (n) throw new TypeError('Unknown encoding: ' + e);
					e = (e + '').toLowerCase(), n = !0;
			}
		}
	}
	M.prototype._isBuffer = !0;
	function Dt(e, t, r) {
		let n = e[t];
		e[t] = e[r], e[r] = n;
	}
	M.prototype.swap16 = function () {
		let e = this.length;
		if (e % 2 !== 0) {
			throw new RangeError('Buffer size must be a multiple of 16-bits');
		}
		for (let t = 0; t < e; t += 2) Dt(this, t, t + 1);
		return this;
	};
	M.prototype.swap32 = function () {
		let e = this.length;
		if (e % 4 !== 0) {
			throw new RangeError('Buffer size must be a multiple of 32-bits');
		}
		for (let t = 0; t < e; t += 4) {
			Dt(this, t, t + 3), Dt(this, t + 1, t + 2);
		}
		return this;
	};
	M.prototype.swap64 = function () {
		let e = this.length;
		if (e % 8 !== 0) {
			throw new RangeError('Buffer size must be a multiple of 64-bits');
		}
		for (let t = 0; t < e; t += 8) {
			Dt(this, t, t + 7),
				Dt(this, t + 1, t + 6),
				Dt(this, t + 2, t + 5),
				Dt(this, t + 3, t + 4);
		}
		return this;
	};
	M.prototype.toString = function () {
		let e = this.length;
		return e === 0
			? ''
			: arguments.length === 0
			? Ts(this, 0, e)
			: Fc.apply(this, arguments);
	};
	M.prototype.toLocaleString = M.prototype.toString;
	M.prototype.equals = function (e) {
		if (!M.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
		return this === e ? !0 : M.compare(this, e) === 0;
	};
	M.prototype.inspect = function () {
		let e = '', t = Kt.INSPECT_MAX_BYTES;
		return e = this.toString('hex', 0, t).replace(/(.{2})/g, '$1 ').trim(),
			this.length > t && (e += ' ... '),
			'<Buffer ' + e + '>';
	};
	gs && (M.prototype[gs] = M.prototype.inspect);
	M.prototype.compare = function (e, t, r, n, o) {
		if (
			rt(e, Uint8Array) && (e = M.from(e, e.offset, e.byteLength)),
				!M.isBuffer(e)
		) {
			throw new TypeError(
				'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
					typeof e,
			);
		}
		if (
			t === void 0 && (t = 0),
				r === void 0 && (r = e ? e.length : 0),
				n === void 0 && (n = 0),
				o === void 0 && (o = this.length),
				t < 0 || r > e.length || n < 0 || o > this.length
		) throw new RangeError('out of range index');
		if (n >= o && t >= r) return 0;
		if (n >= o) return -1;
		if (t >= r) return 1;
		if (t >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === e) return 0;
		let i = o - n,
			s = r - t,
			a = Math.min(i, s),
			u = this.slice(n, o),
			l = e.slice(t, r);
		for (let c = 0; c < a; ++c) {
			if (u[c] !== l[c]) {
				i = u[c], s = l[c];
				break;
			}
		}
		return i < s ? -1 : s < i ? 1 : 0;
	};
	function vs(e, t, r, n, o) {
		if (e.length === 0) return -1;
		if (
			typeof r == 'string'
				? (n = r, r = 0)
				: r > 2147483647
				? r = 2147483647
				: r < -2147483648 && (r = -2147483648),
				r = +r,
				No(r) && (r = o ? 0 : e.length - 1),
				r < 0 && (r = e.length + r),
				r >= e.length
		) {
			if (o) return -1;
			r = e.length - 1;
		} else if (r < 0) {
			if (o) r = 0;
			else return -1;
		}
		if (typeof t == 'string' && (t = M.from(t, n)), M.isBuffer(t)) {
			return t.length === 0 ? -1 : ys(e, t, r, n, o);
		}
		if (typeof t == 'number') {
			return t = t & 255,
				typeof Uint8Array.prototype.indexOf == 'function'
					? o
						? Uint8Array.prototype.indexOf.call(e, t, r)
						: Uint8Array.prototype.lastIndexOf.call(e, t, r)
					: ys(e, [t], r, n, o);
		}
		throw new TypeError('val must be string, number or Buffer');
	}
	function ys(e, t, r, n, o) {
		let i = 1, s = e.length, a = t.length;
		if (
			n !== void 0 &&
			(n = String(n).toLowerCase(),
				n === 'ucs2' || n === 'ucs-2' || n === 'utf16le' ||
				n === 'utf-16le')
		) {
			if (e.length < 2 || t.length < 2) return -1;
			i = 2, s /= 2, a /= 2, r /= 2;
		}
		function u(c, p) {
			return i === 1 ? c[p] : c.readUInt16BE(p * i);
		}
		let l;
		if (o) {
			let c = -1;
			for (l = r; l < s; l++) {
				if (u(e, l) === u(t, c === -1 ? 0 : l - c)) {
					if (
						c === -1 && (c = l), l - c + 1 === a
					) return c * i;
				} else c !== -1 && (l -= l - c), c = -1;
			}
		} else {for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
				let c = !0;
				for (let p = 0; p < a; p++) {
					if (u(e, l + p) !== u(t, p)) {
						c = !1;
						break;
					}
				}
				if (c) return l;
			}}
		return -1;
	}
	M.prototype.includes = function (e, t, r) {
		return this.indexOf(e, t, r) !== -1;
	};
	M.prototype.indexOf = function (e, t, r) {
		return vs(this, e, t, r, !0);
	};
	M.prototype.lastIndexOf = function (e, t, r) {
		return vs(this, e, t, r, !1);
	};
	function Oc(e, t, r, n) {
		r = Number(r) || 0;
		let o = e.length - r;
		n ? (n = Number(n), n > o && (n = o)) : n = o;
		let i = t.length;
		n > i / 2 && (n = i / 2);
		let s;
		for (s = 0; s < n; ++s) {
			let a = parseInt(t.substr(s * 2, 2), 16);
			if (No(a)) return s;
			e[r + s] = a;
		}
		return s;
	}
	function Rc(e, t, r, n) {
		return cn(Co(t, e.length - r), e, r, n);
	}
	function Cc(e, t, r, n) {
		return cn(Vc(t), e, r, n);
	}
	function Ic(e, t, r, n) {
		return cn(Is(t), e, r, n);
	}
	function Dc(e, t, r, n) {
		return cn(Gc(t, e.length - r), e, r, n);
	}
	M.prototype.write = function (e, t, r, n) {
		if (t === void 0) n = 'utf8', r = this.length, t = 0;
		else if (r === void 0 && typeof t == 'string') {
			n = t, r = this.length, t = 0;
		} else if (isFinite(t)) {
			t = t >>> 0,
				isFinite(r)
					? (r = r >>> 0, n === void 0 && (n = 'utf8'))
					: (n = r, r = void 0);
		} else {throw new Error(
				'Buffer.write(string, encoding, offset[, length]) is no longer supported',
			);}
		let o = this.length - t;
		if (
			(r === void 0 || r > o) && (r = o),
				e.length > 0 && (r < 0 || t < 0) || t > this.length
		) throw new RangeError('Attempt to write outside buffer bounds');
		n || (n = 'utf8');
		let i = !1;
		for (;;) {
			switch (n) {
				case 'hex':
					return Oc(this, e, t, r);
				case 'utf8':
				case 'utf-8':
					return Rc(this, e, t, r);
				case 'ascii':
				case 'latin1':
				case 'binary':
					return Cc(this, e, t, r);
				case 'base64':
					return Ic(this, e, t, r);
				case 'ucs2':
				case 'ucs-2':
				case 'utf16le':
				case 'utf-16le':
					return Dc(this, e, t, r);
				default:
					if (i) throw new TypeError('Unknown encoding: ' + n);
					n = ('' + n).toLowerCase(), i = !0;
			}
		}
	};
	M.prototype.toJSON = function () {
		return {
			type: 'Buffer',
			data: Array.prototype.slice.call(this._arr || this, 0),
		};
	};
	function kc(e, t, r) {
		return t === 0 && r === e.length
			? Oo.fromByteArray(e)
			: Oo.fromByteArray(e.slice(t, r));
	}
	function Ts(e, t, r) {
		r = Math.min(e.length, r);
		let n = [], o = t;
		for (; o < r;) {
			let i = e[o],
				s = null,
				a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
			if (o + a <= r) {
				let u, l, c, p;
				switch (a) {
					case 1:
						i < 128 && (s = i);
						break;
					case 2:
						u = e[o + 1],
							(u & 192) === 128 &&
							(p = (i & 31) << 6 | u & 63, p > 127 && (s = p));
						break;
					case 3:
						u = e[o + 1],
							l = e[o + 2],
							(u & 192) === 128 && (l & 192) === 128 &&
							(p = (i & 15) << 12 | (u & 63) << 6 | l & 63,
								p > 2047 && (p < 55296 || p > 57343) &&
								(s = p));
						break;
					case 4:
						u = e[o + 1],
							l = e[o + 2],
							c = e[o + 3],
							(u & 192) === 128 && (l & 192) === 128 &&
							(c & 192) === 128 &&
							(p = (i & 15) << 18 | (u & 63) << 12 |
								(l & 63) << 6 | c & 63,
								p > 65535 && p < 1114112 && (s = p));
				}
			}
			s === null ? (s = 65533, a = 1) : s > 65535 &&
				(s -= 65536,
					n.push(s >>> 10 & 1023 | 55296),
					s = 56320 | s & 1023),
				n.push(s),
				o += a;
		}
		return Nc(n);
	}
	var hs = 4096;
	function Nc(e) {
		let t = e.length;
		if (t <= hs) return String.fromCharCode.apply(String, e);
		let r = '', n = 0;
		for (; n < t;) {
			r += String.fromCharCode.apply(String, e.slice(n, n += hs));
		}
		return r;
	}
	function _c(e, t, r) {
		let n = '';
		r = Math.min(e.length, r);
		for (let o = t; o < r; ++o) n += String.fromCharCode(e[o] & 127);
		return n;
	}
	function $c(e, t, r) {
		let n = '';
		r = Math.min(e.length, r);
		for (let o = t; o < r; ++o) n += String.fromCharCode(e[o]);
		return n;
	}
	function jc(e, t, r) {
		let n = e.length;
		(!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
		let o = '';
		for (let i = t; i < r; ++i) o += Jc[e[i]];
		return o;
	}
	function Lc(e, t, r) {
		let n = e.slice(t, r), o = '';
		for (let i = 0; i < n.length - 1; i += 2) {
			o += String.fromCharCode(n[i] + n[i + 1] * 256);
		}
		return o;
	}
	M.prototype.slice = function (e, t) {
		let r = this.length;
		e = ~~e,
			t = t === void 0 ? r : ~~t,
			e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r),
			t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r),
			t < e && (t = e);
		let n = this.subarray(e, t);
		return Object.setPrototypeOf(n, M.prototype), n;
	};
	function ge(e, t, r) {
		if (e % 1 !== 0 || e < 0) throw new RangeError('offset is not uint');
		if (e + t > r) {
			throw new RangeError('Trying to access beyond buffer length');
		}
	}
	M.prototype.readUintLE = M.prototype.readUIntLE = function (e, t, r) {
		e = e >>> 0, t = t >>> 0, r || ge(e, t, this.length);
		let n = this[e], o = 1, i = 0;
		for (; ++i < t && (o *= 256);) n += this[e + i] * o;
		return n;
	};
	M.prototype.readUintBE = M.prototype.readUIntBE = function (e, t, r) {
		e = e >>> 0, t = t >>> 0, r || ge(e, t, this.length);
		let n = this[e + --t], o = 1;
		for (; t > 0 && (o *= 256);) n += this[e + --t] * o;
		return n;
	};
	M.prototype.readUint8 = M.prototype.readUInt8 = function (e, t) {
		return e = e >>> 0, t || ge(e, 1, this.length), this[e];
	};
	M.prototype.readUint16LE = M.prototype.readUInt16LE = function (e, t) {
		return e = e >>> 0,
			t || ge(e, 2, this.length),
			this[e] | this[e + 1] << 8;
	};
	M.prototype.readUint16BE = M.prototype.readUInt16BE = function (e, t) {
		return e = e >>> 0,
			t || ge(e, 2, this.length),
			this[e] << 8 | this[e + 1];
	};
	M.prototype.readUint32LE = M.prototype.readUInt32LE = function (e, t) {
		return e = e >>> 0,
			t || ge(e, 4, this.length),
			(this[e] | this[e + 1] << 8 | this[e + 2] << 16) +
			this[e + 3] * 16777216;
	};
	M.prototype.readUint32BE = M.prototype.readUInt32BE = function (e, t) {
		return e = e >>> 0,
			t || ge(e, 4, this.length),
			this[e] * 16777216 +
			(this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	};
	M.prototype.readBigUInt64LE = bt(function (e) {
		e = e >>> 0, Jt(e, 'offset');
		let t = this[e], r = this[e + 7];
		(t === void 0 || r === void 0) && wr(e, this.length - 8);
		let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 +
				this[++e] * 2 ** 24,
			o = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 +
				r * 2 ** 24;
		return BigInt(n) + (BigInt(o) << BigInt(32));
	});
	M.prototype.readBigUInt64BE = bt(function (e) {
		e = e >>> 0, Jt(e, 'offset');
		let t = this[e], r = this[e + 7];
		(t === void 0 || r === void 0) && wr(e, this.length - 8);
		let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 +
				this[++e],
			o = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 +
				r;
		return (BigInt(n) << BigInt(32)) + BigInt(o);
	});
	M.prototype.readIntLE = function (e, t, r) {
		e = e >>> 0, t = t >>> 0, r || ge(e, t, this.length);
		let n = this[e], o = 1, i = 0;
		for (; ++i < t && (o *= 256);) n += this[e + i] * o;
		return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n;
	};
	M.prototype.readIntBE = function (e, t, r) {
		e = e >>> 0, t = t >>> 0, r || ge(e, t, this.length);
		let n = t, o = 1, i = this[e + --n];
		for (; n > 0 && (o *= 256);) i += this[e + --n] * o;
		return o *= 128, i >= o && (i -= Math.pow(2, 8 * t)), i;
	};
	M.prototype.readInt8 = function (e, t) {
		return e = e >>> 0,
			t || ge(e, 1, this.length),
			this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	};
	M.prototype.readInt16LE = function (e, t) {
		e = e >>> 0, t || ge(e, 2, this.length);
		let r = this[e] | this[e + 1] << 8;
		return r & 32768 ? r | 4294901760 : r;
	};
	M.prototype.readInt16BE = function (e, t) {
		e = e >>> 0, t || ge(e, 2, this.length);
		let r = this[e + 1] | this[e] << 8;
		return r & 32768 ? r | 4294901760 : r;
	};
	M.prototype.readInt32LE = function (e, t) {
		return e = e >>> 0,
			t || ge(e, 4, this.length),
			this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	};
	M.prototype.readInt32BE = function (e, t) {
		return e = e >>> 0,
			t || ge(e, 4, this.length),
			this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	};
	M.prototype.readBigInt64LE = bt(function (e) {
		e = e >>> 0, Jt(e, 'offset');
		let t = this[e], r = this[e + 7];
		(t === void 0 || r === void 0) && wr(e, this.length - 8);
		let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 +
			(r << 24);
		return (BigInt(n) << BigInt(32)) +
			BigInt(
				t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 +
					this[++e] * 2 ** 24,
			);
	});
	M.prototype.readBigInt64BE = bt(function (e) {
		e = e >>> 0, Jt(e, 'offset');
		let t = this[e], r = this[e + 7];
		(t === void 0 || r === void 0) && wr(e, this.length - 8);
		let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 +
			this[++e];
		return (BigInt(n) << BigInt(32)) +
			BigInt(
				this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 +
					r,
			);
	});
	M.prototype.readFloatLE = function (e, t) {
		return e = e >>> 0,
			t || ge(e, 4, this.length),
			Gt.read(this, e, !0, 23, 4);
	};
	M.prototype.readFloatBE = function (e, t) {
		return e = e >>> 0,
			t || ge(e, 4, this.length),
			Gt.read(this, e, !1, 23, 4);
	};
	M.prototype.readDoubleLE = function (e, t) {
		return e = e >>> 0,
			t || ge(e, 8, this.length),
			Gt.read(this, e, !0, 52, 8);
	};
	M.prototype.readDoubleBE = function (e, t) {
		return e = e >>> 0,
			t || ge(e, 8, this.length),
			Gt.read(this, e, !1, 52, 8);
	};
	function Ce(e, t, r, n, o, i) {
		if (!M.isBuffer(e)) {
			throw new TypeError('"buffer" argument must be a Buffer instance');
		}
		if (t > o || t < i) {
			throw new RangeError('"value" argument is out of bounds');
		}
		if (r + n > e.length) throw new RangeError('Index out of range');
	}
	M.prototype.writeUintLE = M.prototype.writeUIntLE = function (e, t, r, n) {
		if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
			let s = Math.pow(2, 8 * r) - 1;
			Ce(this, e, t, r, s, 0);
		}
		let o = 1, i = 0;
		for (this[t] = e & 255; ++i < r && (o *= 256);) {
			this[t + i] = e / o & 255;
		}
		return t + r;
	};
	M.prototype.writeUintBE = M.prototype.writeUIntBE = function (e, t, r, n) {
		if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
			let s = Math.pow(2, 8 * r) - 1;
			Ce(this, e, t, r, s, 0);
		}
		let o = r - 1, i = 1;
		for (this[t + o] = e & 255; --o >= 0 && (i *= 256);) {
			this[t + o] = e / i & 255;
		}
		return t + r;
	};
	M.prototype.writeUint8 = M.prototype.writeUInt8 = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || Ce(this, e, t, 1, 255, 0),
			this[t] = e & 255,
			t + 1;
	};
	M.prototype.writeUint16LE = M.prototype.writeUInt16LE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || Ce(this, e, t, 2, 65535, 0),
			this[t] = e & 255,
			this[t + 1] = e >>> 8,
			t + 2;
	};
	M.prototype.writeUint16BE = M.prototype.writeUInt16BE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || Ce(this, e, t, 2, 65535, 0),
			this[t] = e >>> 8,
			this[t + 1] = e & 255,
			t + 2;
	};
	M.prototype.writeUint32LE = M.prototype.writeUInt32LE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || Ce(this, e, t, 4, 4294967295, 0),
			this[t + 3] = e >>> 24,
			this[t + 2] = e >>> 16,
			this[t + 1] = e >>> 8,
			this[t] = e & 255,
			t + 4;
	};
	M.prototype.writeUint32BE = M.prototype.writeUInt32BE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || Ce(this, e, t, 4, 4294967295, 0),
			this[t] = e >>> 24,
			this[t + 1] = e >>> 16,
			this[t + 2] = e >>> 8,
			this[t + 3] = e & 255,
			t + 4;
	};
	function Ss(e, t, r, n, o) {
		Cs(t, n, o, e, r, 7);
		let i = Number(t & BigInt(4294967295));
		e[r++] = i,
			i = i >> 8,
			e[r++] = i,
			i = i >> 8,
			e[r++] = i,
			i = i >> 8,
			e[r++] = i;
		let s = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[r++] = s,
			s = s >> 8,
			e[r++] = s,
			s = s >> 8,
			e[r++] = s,
			s = s >> 8,
			e[r++] = s,
			r;
	}
	function Ms(e, t, r, n, o) {
		Cs(t, n, o, e, r, 7);
		let i = Number(t & BigInt(4294967295));
		e[r + 7] = i,
			i = i >> 8,
			e[r + 6] = i,
			i = i >> 8,
			e[r + 5] = i,
			i = i >> 8,
			e[r + 4] = i;
		let s = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[r + 3] = s,
			s = s >> 8,
			e[r + 2] = s,
			s = s >> 8,
			e[r + 1] = s,
			s = s >> 8,
			e[r] = s,
			r + 8;
	}
	M.prototype.writeBigUInt64LE = bt(function (e, t = 0) {
		return Ss(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
	});
	M.prototype.writeBigUInt64BE = bt(function (e, t = 0) {
		return Ms(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
	});
	M.prototype.writeIntLE = function (e, t, r, n) {
		if (e = +e, t = t >>> 0, !n) {
			let a = Math.pow(2, 8 * r - 1);
			Ce(this, e, t, r, a - 1, -a);
		}
		let o = 0, i = 1, s = 0;
		for (this[t] = e & 255; ++o < r && (i *= 256);) {
			e < 0 && s === 0 && this[t + o - 1] !== 0 && (s = 1),
				this[t + o] = (e / i >> 0) - s & 255;
		}
		return t + r;
	};
	M.prototype.writeIntBE = function (e, t, r, n) {
		if (e = +e, t = t >>> 0, !n) {
			let a = Math.pow(2, 8 * r - 1);
			Ce(this, e, t, r, a - 1, -a);
		}
		let o = r - 1, i = 1, s = 0;
		for (this[t + o] = e & 255; --o >= 0 && (i *= 256);) {
			e < 0 && s === 0 && this[t + o + 1] !== 0 && (s = 1),
				this[t + o] = (e / i >> 0) - s & 255;
		}
		return t + r;
	};
	M.prototype.writeInt8 = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || Ce(this, e, t, 1, 127, -128),
			e < 0 && (e = 255 + e + 1),
			this[t] = e & 255,
			t + 1;
	};
	M.prototype.writeInt16LE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || Ce(this, e, t, 2, 32767, -32768),
			this[t] = e & 255,
			this[t + 1] = e >>> 8,
			t + 2;
	};
	M.prototype.writeInt16BE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || Ce(this, e, t, 2, 32767, -32768),
			this[t] = e >>> 8,
			this[t + 1] = e & 255,
			t + 2;
	};
	M.prototype.writeInt32LE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || Ce(this, e, t, 4, 2147483647, -2147483648),
			this[t] = e & 255,
			this[t + 1] = e >>> 8,
			this[t + 2] = e >>> 16,
			this[t + 3] = e >>> 24,
			t + 4;
	};
	M.prototype.writeInt32BE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || Ce(this, e, t, 4, 2147483647, -2147483648),
			e < 0 && (e = 4294967295 + e + 1),
			this[t] = e >>> 24,
			this[t + 1] = e >>> 16,
			this[t + 2] = e >>> 8,
			this[t + 3] = e & 255,
			t + 4;
	};
	M.prototype.writeBigInt64LE = bt(function (e, t = 0) {
		return Ss(
			this,
			e,
			t,
			-BigInt('0x8000000000000000'),
			BigInt('0x7fffffffffffffff'),
		);
	});
	M.prototype.writeBigInt64BE = bt(function (e, t = 0) {
		return Ms(
			this,
			e,
			t,
			-BigInt('0x8000000000000000'),
			BigInt('0x7fffffffffffffff'),
		);
	});
	function Fs(e, t, r, n, o, i) {
		if (r + n > e.length) throw new RangeError('Index out of range');
		if (r < 0) throw new RangeError('Index out of range');
	}
	function Os(e, t, r, n, o) {
		return t = +t,
			r = r >>> 0,
			o || Fs(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
			Gt.write(e, t, r, n, 23, 4),
			r + 4;
	}
	M.prototype.writeFloatLE = function (e, t, r) {
		return Os(this, e, t, !0, r);
	};
	M.prototype.writeFloatBE = function (e, t, r) {
		return Os(this, e, t, !1, r);
	};
	function Rs(e, t, r, n, o) {
		return t = +t,
			r = r >>> 0,
			o || Fs(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
			Gt.write(e, t, r, n, 52, 8),
			r + 8;
	}
	M.prototype.writeDoubleLE = function (e, t, r) {
		return Rs(this, e, t, !0, r);
	};
	M.prototype.writeDoubleBE = function (e, t, r) {
		return Rs(this, e, t, !1, r);
	};
	M.prototype.copy = function (e, t, r, n) {
		if (!M.isBuffer(e)) throw new TypeError('argument should be a Buffer');
		if (
			r || (r = 0),
				!n && n !== 0 && (n = this.length),
				t >= e.length && (t = e.length),
				t || (t = 0),
				n > 0 && n < r && (n = r),
				n === r || e.length === 0 || this.length === 0
		) return 0;
		if (t < 0) throw new RangeError('targetStart out of bounds');
		if (r < 0 || r >= this.length) {
			throw new RangeError('Index out of range');
		}
		if (n < 0) throw new RangeError('sourceEnd out of bounds');
		n > this.length && (n = this.length),
			e.length - t < n - r && (n = e.length - t + r);
		let o = n - r;
		return this === e &&
				typeof Uint8Array.prototype.copyWithin == 'function'
			? this.copyWithin(t, r, n)
			: Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
			o;
	};
	M.prototype.fill = function (e, t, r, n) {
		if (typeof e == 'string') {
			if (
				typeof t == 'string'
					? (n = t, t = 0, r = this.length)
					: typeof r == 'string' && (n = r, r = this.length),
					n !== void 0 && typeof n != 'string'
			) throw new TypeError('encoding must be a string');
			if (typeof n == 'string' && !M.isEncoding(n)) {
				throw new TypeError('Unknown encoding: ' + n);
			}
			if (e.length === 1) {
				let i = e.charCodeAt(0);
				(n === 'utf8' && i < 128 || n === 'latin1') && (e = i);
			}
		} else {typeof e == 'number'
				? e = e & 255
				: typeof e == 'boolean' && (e = Number(e));}
		if (t < 0 || this.length < t || this.length < r) {
			throw new RangeError('Out of range index');
		}
		if (r <= t) return this;
		t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
		let o;
		if (typeof e == 'number') for (o = t; o < r; ++o) this[o] = e;
		else {
			let i = M.isBuffer(e) ? e : M.from(e, n), s = i.length;
			if (s === 0) {
				throw new TypeError(
					'The value "' + e + '" is invalid for argument "value"',
				);
			}
			for (o = 0; o < r - t; ++o) this[o + t] = i[o % s];
		}
		return this;
	};
	var Vt = {};
	function ko(e, t, r) {
		Vt[e] = class extends r {
			constructor() {
				super(),
					Object.defineProperty(this, 'message', {
						value: t.apply(this, arguments),
						writable: !0,
						configurable: !0,
					}),
					this.name = `${this.name} [${e}]`,
					this.stack,
					delete this.name;
			}
			get code() {
				return e;
			}
			set code(n) {
				Object.defineProperty(this, 'code', {
					configurable: !0,
					enumerable: !0,
					value: n,
					writable: !0,
				});
			}
			toString() {
				return `${this.name} [${e}]: ${this.message}`;
			}
		};
	}
	ko('ERR_BUFFER_OUT_OF_BOUNDS', function (e) {
		return e
			? `${e} is outside of buffer bounds`
			: 'Attempt to access memory outside buffer bounds';
	}, RangeError);
	ko('ERR_INVALID_ARG_TYPE', function (e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError);
	ko('ERR_OUT_OF_RANGE', function (e, t, r) {
		let n = `The value of "${e}" is out of range.`, o = r;
		return Number.isInteger(r) && Math.abs(r) > 2 ** 32
			? o = bs(String(r))
			: typeof r == 'bigint' &&
				(o = String(r),
					(r > BigInt(2) ** BigInt(32) ||
						r < -(BigInt(2) ** BigInt(32))) && (o = bs(o)),
					o += 'n'),
			n += ` It must be ${t}. Received ${o}`,
			n;
	}, RangeError);
	function bs(e) {
		let t = '', r = e.length, n = e[0] === '-' ? 1 : 0;
		for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
		return `${e.slice(0, r)}${t}`;
	}
	function Bc(e, t, r) {
		Jt(t, 'offset'),
			(e[t] === void 0 || e[t + r] === void 0) &&
			wr(t, e.length - (r + 1));
	}
	function Cs(e, t, r, n, o, i) {
		if (e > r || e < t) {
			let s = typeof t == 'bigint' ? 'n' : '', a;
			throw i > 3
				? t === 0 || t === BigInt(0)
					? a = `>= 0${s} and < 2${s} ** ${(i + 1) * 8}${s}`
					: a = `>= -(2${s} ** ${(i + 1) * 8 - 1}${s}) and < 2 ** ${
						(i + 1) * 8 - 1
					}${s}`
				: a = `>= ${t}${s} and <= ${r}${s}`,
				new Vt.ERR_OUT_OF_RANGE('value', a, e);
		}
		Bc(n, o, i);
	}
	function Jt(e, t) {
		if (typeof e != 'number') {
			throw new Vt.ERR_INVALID_ARG_TYPE(t, 'number', e);
		}
	}
	function wr(e, t, r) {
		throw Math.floor(e) !== e
			? (Jt(e, r),
				new Vt.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', e))
			: t < 0
			? new Vt.ERR_BUFFER_OUT_OF_BOUNDS()
			: new Vt.ERR_OUT_OF_RANGE(
				r || 'offset',
				`>= ${r ? 1 : 0} and <= ${t}`,
				e,
			);
	}
	var Uc = /[^+/0-9A-Za-z-_]/g;
	function qc(e) {
		if (e = e.split('=')[0], e = e.trim().replace(Uc, ''), e.length < 2) {
			return '';
		}
		for (; e.length % 4 !== 0;) e = e + '=';
		return e;
	}
	function Co(e, t) {
		t = t || 1 / 0;
		let r, n = e.length, o = null, i = [];
		for (let s = 0; s < n; ++s) {
			if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
				if (!o) {
					if (r > 56319) {
						(t -= 3) > -1 && i.push(239, 191, 189);
						continue;
					} else if (s + 1 === n) {
						(t -= 3) > -1 && i.push(239, 191, 189);
						continue;
					}
					o = r;
					continue;
				}
				if (r < 56320) {
					(t -= 3) > -1 && i.push(239, 191, 189), o = r;
					continue;
				}
				r = (o - 55296 << 10 | r - 56320) + 65536;
			} else o && (t -= 3) > -1 && i.push(239, 191, 189);
			if (o = null, r < 128) {
				if ((t -= 1) < 0) break;
				i.push(r);
			} else if (r < 2048) {
				if ((t -= 2) < 0) break;
				i.push(r >> 6 | 192, r & 63 | 128);
			} else if (r < 65536) {
				if ((t -= 3) < 0) break;
				i.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
			} else if (r < 1114112) {
				if ((t -= 4) < 0) break;
				i.push(
					r >> 18 | 240,
					r >> 12 & 63 | 128,
					r >> 6 & 63 | 128,
					r & 63 | 128,
				);
			} else throw new Error('Invalid code point');
		}
		return i;
	}
	function Vc(e) {
		let t = [];
		for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
		return t;
	}
	function Gc(e, t) {
		let r, n, o, i = [];
		for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) {
			r = e.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
		}
		return i;
	}
	function Is(e) {
		return Oo.toByteArray(qc(e));
	}
	function cn(e, t, r, n) {
		let o;
		for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) {
			t[o + r] = e[o];
		}
		return o;
	}
	function rt(e, t) {
		return e instanceof t ||
			e != null && e.constructor != null && e.constructor.name != null &&
				e.constructor.name === t.name;
	}
	function No(e) {
		return e !== e;
	}
	var Jc = function () {
		let e = '0123456789abcdef', t = new Array(256);
		for (let r = 0; r < 16; ++r) {
			let n = r * 16;
			for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
		}
		return t;
	}();
	function bt(e) {
		return typeof BigInt > 'u' ? Kc : e;
	}
	function Kc() {
		throw new Error('BigInt not supported');
	}
});
var x,
	d = an(() => {
		'use strict';
		x = ue(Ds());
	});
function Wc() {
	return !1;
}
var Qc,
	Hc,
	pn,
	jo = an(() => {
		d();
		f();
		m();
		Qc = {}, Hc = { existsSync: Wc, promises: Qc }, pn = Hc;
	});
var Js = ee((Cy, Gs) => {
	d();
	f();
	m();
	var Qt = 1e3,
		Ht = Qt * 60,
		zt = Ht * 60,
		kt = zt * 24,
		Yc = kt * 7,
		Zc = kt * 365.25;
	Gs.exports = function (e, t) {
		t = t || {};
		var r = typeof e;
		if (r === 'string' && e.length > 0) return Xc(e);
		if (r === 'number' && isFinite(e)) return t.long ? tp(e) : ep(e);
		throw new Error(
			'val is not a non-empty string or a valid number. val=' +
				JSON.stringify(e),
		);
	};
	function Xc(e) {
		if (e = String(e), !(e.length > 100)) {
			var t =
				/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i
					.exec(e);
			if (!!t) {
				var r = parseFloat(t[1]), n = (t[2] || 'ms').toLowerCase();
				switch (n) {
					case 'years':
					case 'year':
					case 'yrs':
					case 'yr':
					case 'y':
						return r * Zc;
					case 'weeks':
					case 'week':
					case 'w':
						return r * Yc;
					case 'days':
					case 'day':
					case 'd':
						return r * kt;
					case 'hours':
					case 'hour':
					case 'hrs':
					case 'hr':
					case 'h':
						return r * zt;
					case 'minutes':
					case 'minute':
					case 'mins':
					case 'min':
					case 'm':
						return r * Ht;
					case 'seconds':
					case 'second':
					case 'secs':
					case 'sec':
					case 's':
						return r * Qt;
					case 'milliseconds':
					case 'millisecond':
					case 'msecs':
					case 'msec':
					case 'ms':
						return r;
					default:
						return;
				}
			}
		}
	}
	function ep(e) {
		var t = Math.abs(e);
		return t >= kt
			? Math.round(e / kt) + 'd'
			: t >= zt
			? Math.round(e / zt) + 'h'
			: t >= Ht
			? Math.round(e / Ht) + 'm'
			: t >= Qt
			? Math.round(e / Qt) + 's'
			: e + 'ms';
	}
	function tp(e) {
		var t = Math.abs(e);
		return t >= kt
			? dn(e, t, kt, 'day')
			: t >= zt
			? dn(e, t, zt, 'hour')
			: t >= Ht
			? dn(e, t, Ht, 'minute')
			: t >= Qt
			? dn(e, t, Qt, 'second')
			: e + ' ms';
	}
	function dn(e, t, r, n) {
		var o = t >= r * 1.5;
		return Math.round(e / r) + ' ' + n + (o ? 's' : '');
	}
});
var Bo = ee((Ny, Ks) => {
	d();
	f();
	m();
	function rp(e) {
		r.debug = r,
			r.default = r,
			r.coerce = u,
			r.disable = i,
			r.enable = o,
			r.enabled = s,
			r.humanize = Js(),
			r.destroy = l,
			Object.keys(e).forEach((c) => {
				r[c] = e[c];
			}),
			r.names = [],
			r.skips = [],
			r.formatters = {};
		function t(c) {
			let p = 0;
			for (let g = 0; g < c.length; g++) {
				p = (p << 5) - p + c.charCodeAt(g), p |= 0;
			}
			return r.colors[Math.abs(p) % r.colors.length];
		}
		r.selectColor = t;
		function r(c) {
			let p, g = null, h, b;
			function y(...P) {
				if (!y.enabled) return;
				let S = y, v = Number(new Date()), T = v - (p || v);
				S.diff = T,
					S.prev = p,
					S.curr = v,
					p = v,
					P[0] = r.coerce(P[0]),
					typeof P[0] != 'string' && P.unshift('%O');
				let A = 0;
				P[0] = P[0].replace(/%([a-zA-Z%])/g, (C, I) => {
					if (C === '%%') return '%';
					A++;
					let G = r.formatters[I];
					if (typeof G == 'function') {
						let z = P[A];
						C = G.call(S, z), P.splice(A, 1), A--;
					}
					return C;
				}),
					r.formatArgs.call(S, P),
					(S.log || r.log).apply(S, P);
			}
			return y.namespace = c,
				y.useColors = r.useColors(),
				y.color = r.selectColor(c),
				y.extend = n,
				y.destroy = r.destroy,
				Object.defineProperty(y, 'enabled', {
					enumerable: !0,
					configurable: !1,
					get: () =>
						g !== null ? g : (h !== r.namespaces &&
							(h = r.namespaces, b = r.enabled(c)),
							b),
					set: (P) => {
						g = P;
					},
				}),
				typeof r.init == 'function' && r.init(y),
				y;
		}
		function n(c, p) {
			let g = r(this.namespace + (typeof p == 'undefined' ? ':' : p) + c);
			return g.log = this.log, g;
		}
		function o(c) {
			r.save(c), r.namespaces = c, r.names = [], r.skips = [];
			let p,
				g = (typeof c == 'string' ? c : '').split(/[\s,]+/),
				h = g.length;
			for (p = 0; p < h; p++) {
				!g[p] ||
					(c = g[p].replace(/\*/g, '.*?'),
						c[0] === '-'
							? r.skips.push(new RegExp('^' + c.slice(1) + '$'))
							: r.names.push(new RegExp('^' + c + '$')));
			}
		}
		function i() {
			let c = [...r.names.map(a), ...r.skips.map(a).map((p) => '-' + p)]
				.join(',');
			return r.enable(''), c;
		}
		function s(c) {
			if (c[c.length - 1] === '*') return !0;
			let p, g;
			for (p = 0, g = r.skips.length; p < g; p++) {
				if (r.skips[p].test(c)) return !1;
			}
			for (p = 0, g = r.names.length; p < g; p++) {
				if (r.names[p].test(c)) return !0;
			}
			return !1;
		}
		function a(c) {
			return c.toString().substring(2, c.toString().length - 2).replace(
				/\.\*\?$/,
				'*',
			);
		}
		function u(c) {
			return c instanceof Error ? c.stack || c.message : c;
		}
		function l() {
			console.warn(
				'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
			);
		}
		return r.enable(r.load()), r;
	}
	Ks.exports = rp;
});
var Ws = ee((je, gn) => {
	d();
	f();
	m();
	je.formatArgs = op;
	je.save = ip;
	je.load = sp;
	je.useColors = np;
	je.storage = ap();
	je.destroy = (() => {
		let e = !1;
		return () => {
			e ||
				(e = !0,
					console.warn(
						'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
					));
		};
	})();
	je.colors = [
		'#0000CC',
		'#0000FF',
		'#0033CC',
		'#0033FF',
		'#0066CC',
		'#0066FF',
		'#0099CC',
		'#0099FF',
		'#00CC00',
		'#00CC33',
		'#00CC66',
		'#00CC99',
		'#00CCCC',
		'#00CCFF',
		'#3300CC',
		'#3300FF',
		'#3333CC',
		'#3333FF',
		'#3366CC',
		'#3366FF',
		'#3399CC',
		'#3399FF',
		'#33CC00',
		'#33CC33',
		'#33CC66',
		'#33CC99',
		'#33CCCC',
		'#33CCFF',
		'#6600CC',
		'#6600FF',
		'#6633CC',
		'#6633FF',
		'#66CC00',
		'#66CC33',
		'#9900CC',
		'#9900FF',
		'#9933CC',
		'#9933FF',
		'#99CC00',
		'#99CC33',
		'#CC0000',
		'#CC0033',
		'#CC0066',
		'#CC0099',
		'#CC00CC',
		'#CC00FF',
		'#CC3300',
		'#CC3333',
		'#CC3366',
		'#CC3399',
		'#CC33CC',
		'#CC33FF',
		'#CC6600',
		'#CC6633',
		'#CC9900',
		'#CC9933',
		'#CCCC00',
		'#CCCC33',
		'#FF0000',
		'#FF0033',
		'#FF0066',
		'#FF0099',
		'#FF00CC',
		'#FF00FF',
		'#FF3300',
		'#FF3333',
		'#FF3366',
		'#FF3399',
		'#FF33CC',
		'#FF33FF',
		'#FF6600',
		'#FF6633',
		'#FF9900',
		'#FF9933',
		'#FFCC00',
		'#FFCC33',
	];
	function np() {
		return typeof window != 'undefined' && window.process &&
				(window.process.type === 'renderer' || window.process.__nwjs)
			? !0
			: typeof navigator != 'undefined' && navigator.userAgent &&
					navigator.userAgent.toLowerCase().match(
						/(edge|trident)\/(\d+)/,
					)
			? !1
			: typeof document != 'undefined' && document.documentElement &&
					document.documentElement.style &&
					document.documentElement.style.WebkitAppearance ||
				typeof window != 'undefined' && window.console &&
					(window.console.firebug ||
						window.console.exception && window.console.table) ||
				typeof navigator != 'undefined' && navigator.userAgent &&
					navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
					parseInt(RegExp.$1, 10) >= 31 ||
				typeof navigator != 'undefined' && navigator.userAgent &&
					navigator.userAgent.toLowerCase().match(
						/applewebkit\/(\d+)/,
					);
	}
	function op(e) {
		if (
			e[0] = (this.useColors ? '%c' : '') + this.namespace +
				(this.useColors ? ' %c' : ' ') + e[0] +
				(this.useColors ? '%c ' : ' ') + '+' +
				gn.exports.humanize(this.diff), !this.useColors
		) return;
		let t = 'color: ' + this.color;
		e.splice(1, 0, t, 'color: inherit');
		let r = 0, n = 0;
		e[0].replace(/%[a-zA-Z%]/g, (o) => {
			o !== '%%' && (r++, o === '%c' && (n = r));
		}), e.splice(n, 0, t);
	}
	je.log = console.debug || console.log || (() => {});
	function ip(e) {
		try {
			e ? je.storage.setItem('debug', e) : je.storage.removeItem('debug');
		} catch (t) {}
	}
	function sp() {
		let e;
		try {
			e = je.storage.getItem('debug');
		} catch (t) {}
		return !e && typeof w != 'undefined' && 'env' in w && (e = w.env.DEBUG),
			e;
	}
	function ap() {
		try {
			return localStorage;
		} catch (e) {}
	}
	gn.exports = Bo()(je);
	var { formatters: up } = gn.exports;
	up.j = function (e) {
		try {
			return JSON.stringify(e);
		} catch (t) {
			return '[UnexpectedJSONParseError]: ' + t.message;
		}
	};
});
var Uo = ee((yn) => {
	d();
	f();
	m();
	yn.isatty = function () {
		return !1;
	};
	function lp() {
		throw new Error('tty.ReadStream is not implemented');
	}
	yn.ReadStream = lp;
	function cp() {
		throw new Error('tty.WriteStream is not implemented');
	}
	yn.WriteStream = cp;
});
var Qo = ee((W) => {
	d();
	f();
	m();
	var le =
			(e, t) =>
			() => (t || e((t = { exports: {} }).exports, t), t.exports),
		Qs = le((e, t) => {
			'use strict';
			t.exports = function () {
				if (
					typeof Symbol != 'function' ||
					typeof Object.getOwnPropertySymbols != 'function'
				) return !1;
				if (typeof Symbol.iterator == 'symbol') return !0;
				var r = {}, n = Symbol('test'), o = Object(n);
				if (
					typeof n == 'string' ||
					Object.prototype.toString.call(n) !== '[object Symbol]' ||
					Object.prototype.toString.call(o) !== '[object Symbol]'
				) return !1;
				var i = 42;
				r[n] = i;
				for (n in r) return !1;
				if (
					typeof Object.keys == 'function' &&
						Object.keys(r).length !== 0 ||
					typeof Object.getOwnPropertyNames == 'function' &&
						Object.getOwnPropertyNames(r).length !== 0
				) return !1;
				var s = Object.getOwnPropertySymbols(r);
				if (
					s.length !== 1 || s[0] !== n ||
					!Object.prototype.propertyIsEnumerable.call(r, n)
				) return !1;
				if (typeof Object.getOwnPropertyDescriptor == 'function') {
					var a = Object.getOwnPropertyDescriptor(r, n);
					if (a.value !== i || a.enumerable !== !0) return !1;
				}
				return !0;
			};
		}),
		An = le((e, t) => {
			'use strict';
			var r = Qs();
			t.exports = function () {
				return r() && !!Symbol.toStringTag;
			};
		}),
		Hs = le((e, t) => {
			'use strict';
			var r = typeof Symbol < 'u' && Symbol, n = Qs();
			t.exports = function () {
				return typeof r != 'function' || typeof Symbol != 'function' ||
						typeof r('foo') != 'symbol' ||
						typeof Symbol('bar') != 'symbol'
					? !1
					: n();
			};
		}),
		pp = le((e, t) => {
			'use strict';
			var r = 'Function.prototype.bind called on incompatible ',
				n = Array.prototype.slice,
				o = Object.prototype.toString,
				i = '[object Function]';
			t.exports = function (s) {
				var a = this;
				if (typeof a != 'function' || o.call(a) !== i) {
					throw new TypeError(r + a);
				}
				for (
					var u = n.call(arguments, 1),
						l,
						c = function () {
							if (this instanceof l) {
								var y = a.apply(
									this,
									u.concat(n.call(arguments)),
								);
								return Object(y) === y ? y : this;
							} else {return a.apply(
									s,
									u.concat(n.call(arguments)),
								);}
						},
						p = Math.max(0, a.length - u.length),
						g = [],
						h = 0;
					h < p;
					h++
				) g.push('$' + h);
				if (
					l = E(
						'binder',
						'return function (' + g.join(',') +
							'){ return binder.apply(this,arguments); }',
					)(c), a.prototype
				) {
					var b = function () {};
					b.prototype = a.prototype,
						l.prototype = new b(),
						b.prototype = null;
				}
				return l;
			};
		}),
		Pn = le((e, t) => {
			'use strict';
			var r = pp();
			t.exports = E.prototype.bind || r;
		}),
		zs = le((e, t) => {
			'use strict';
			var r = Pn();
			t.exports = r.call(E.call, Object.prototype.hasOwnProperty);
		}),
		Ys = le((e, t) => {
			'use strict';
			var r,
				n = SyntaxError,
				o = E,
				i = TypeError,
				s = function (J) {
					try {
						return o(
							'"use strict"; return (' + J + ').constructor;',
						)();
					} catch (_) {}
				},
				a = Object.getOwnPropertyDescriptor;
			if (a) {
				try {
					a({}, '');
				} catch (J) {
					a = null;
				}
			}
			var u = function () {
					throw new i();
				},
				l = a
					? function () {
						try {
							return arguments.callee, u;
						} catch (J) {
							try {
								return a(arguments, 'callee').get;
							} catch (_) {
								return u;
							}
						}
					}()
					: u,
				c = Hs()(),
				p = Object.getPrototypeOf || function (J) {
					return J.__proto__;
				},
				g = {},
				h = typeof Uint8Array > 'u' ? r : p(Uint8Array),
				b = {
					'%AggregateError%': typeof AggregateError > 'u'
						? r
						: AggregateError,
					'%Array%': Array,
					'%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
					'%ArrayIteratorPrototype%': c
						? p([][Symbol.iterator]())
						: r,
					'%AsyncFromSyncIteratorPrototype%': r,
					'%AsyncFunction%': g,
					'%AsyncGenerator%': g,
					'%AsyncGeneratorFunction%': g,
					'%AsyncIteratorPrototype%': g,
					'%Atomics%': typeof Atomics > 'u' ? r : Atomics,
					'%BigInt%': typeof BigInt > 'u' ? r : BigInt,
					'%Boolean%': Boolean,
					'%DataView%': typeof DataView > 'u' ? r : DataView,
					'%Date%': Date,
					'%decodeURI%': decodeURI,
					'%decodeURIComponent%': decodeURIComponent,
					'%encodeURI%': encodeURI,
					'%encodeURIComponent%': encodeURIComponent,
					'%Error%': Error,
					'%eval%': void 0,
					'%EvalError%': EvalError,
					'%Float32Array%': typeof Float32Array > 'u'
						? r
						: Float32Array,
					'%Float64Array%': typeof Float64Array > 'u'
						? r
						: Float64Array,
					'%FinalizationRegistry%': typeof FinalizationRegistry > 'u'
						? r
						: FinalizationRegistry,
					'%Function%': o,
					'%GeneratorFunction%': g,
					'%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
					'%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
					'%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
					'%isFinite%': isFinite,
					'%isNaN%': isNaN,
					'%IteratorPrototype%': c ? p(p([][Symbol.iterator]())) : r,
					'%JSON%': typeof JSON == 'object' ? JSON : r,
					'%Map%': typeof Map > 'u' ? r : Map,
					'%MapIteratorPrototype%': typeof Map > 'u' || !c
						? r
						: p(new Map()[Symbol.iterator]()),
					'%Math%': Math,
					'%Number%': Number,
					'%Object%': Object,
					'%parseFloat%': parseFloat,
					'%parseInt%': parseInt,
					'%Promise%': typeof Promise > 'u' ? r : Promise,
					'%Proxy%': typeof Proxy > 'u' ? r : Proxy,
					'%RangeError%': RangeError,
					'%ReferenceError%': ReferenceError,
					'%Reflect%': typeof Reflect > 'u' ? r : Reflect,
					'%RegExp%': RegExp,
					'%Set%': typeof Set > 'u' ? r : Set,
					'%SetIteratorPrototype%': typeof Set > 'u' || !c
						? r
						: p(new Set()[Symbol.iterator]()),
					'%SharedArrayBuffer%': typeof SharedArrayBuffer > 'u'
						? r
						: SharedArrayBuffer,
					'%String%': String,
					'%StringIteratorPrototype%': c
						? p(''[Symbol.iterator]())
						: r,
					'%Symbol%': c ? Symbol : r,
					'%SyntaxError%': n,
					'%ThrowTypeError%': l,
					'%TypedArray%': h,
					'%TypeError%': i,
					'%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
					'%Uint8ClampedArray%': typeof Uint8ClampedArray > 'u'
						? r
						: Uint8ClampedArray,
					'%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
					'%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
					'%URIError%': URIError,
					'%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
					'%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
					'%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
				},
				y = function J(_) {
					var $;
					if (_ === '%AsyncFunction%') $ = s('async function () {}');
					else if (_ === '%GeneratorFunction%') {
						$ = s('function* () {}');
					} else if (_ === '%AsyncGeneratorFunction%') {
						$ = s('async function* () {}');
					} else if (_ === '%AsyncGenerator%') {
						var k = J('%AsyncGeneratorFunction%');
						k && ($ = k.prototype);
					} else if (_ === '%AsyncIteratorPrototype%') {
						var D = J('%AsyncGenerator%');
						D && ($ = p(D.prototype));
					}
					return b[_] = $, $;
				},
				P = {
					'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
					'%ArrayPrototype%': ['Array', 'prototype'],
					'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
					'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
					'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
					'%ArrayProto_values%': ['Array', 'prototype', 'values'],
					'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
					'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
					'%AsyncGeneratorPrototype%': [
						'AsyncGeneratorFunction',
						'prototype',
						'prototype',
					],
					'%BooleanPrototype%': ['Boolean', 'prototype'],
					'%DataViewPrototype%': ['DataView', 'prototype'],
					'%DatePrototype%': ['Date', 'prototype'],
					'%ErrorPrototype%': ['Error', 'prototype'],
					'%EvalErrorPrototype%': ['EvalError', 'prototype'],
					'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
					'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
					'%FunctionPrototype%': ['Function', 'prototype'],
					'%Generator%': ['GeneratorFunction', 'prototype'],
					'%GeneratorPrototype%': [
						'GeneratorFunction',
						'prototype',
						'prototype',
					],
					'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
					'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
					'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
					'%JSONParse%': ['JSON', 'parse'],
					'%JSONStringify%': ['JSON', 'stringify'],
					'%MapPrototype%': ['Map', 'prototype'],
					'%NumberPrototype%': ['Number', 'prototype'],
					'%ObjectPrototype%': ['Object', 'prototype'],
					'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
					'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
					'%PromisePrototype%': ['Promise', 'prototype'],
					'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
					'%Promise_all%': ['Promise', 'all'],
					'%Promise_reject%': ['Promise', 'reject'],
					'%Promise_resolve%': ['Promise', 'resolve'],
					'%RangeErrorPrototype%': ['RangeError', 'prototype'],
					'%ReferenceErrorPrototype%': [
						'ReferenceError',
						'prototype',
					],
					'%RegExpPrototype%': ['RegExp', 'prototype'],
					'%SetPrototype%': ['Set', 'prototype'],
					'%SharedArrayBufferPrototype%': [
						'SharedArrayBuffer',
						'prototype',
					],
					'%StringPrototype%': ['String', 'prototype'],
					'%SymbolPrototype%': ['Symbol', 'prototype'],
					'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
					'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
					'%TypeErrorPrototype%': ['TypeError', 'prototype'],
					'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
					'%Uint8ClampedArrayPrototype%': [
						'Uint8ClampedArray',
						'prototype',
					],
					'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
					'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
					'%URIErrorPrototype%': ['URIError', 'prototype'],
					'%WeakMapPrototype%': ['WeakMap', 'prototype'],
					'%WeakSetPrototype%': ['WeakSet', 'prototype'],
				},
				S = Pn(),
				v = zs(),
				T = S.call(E.call, Array.prototype.concat),
				A = S.call(E.apply, Array.prototype.splice),
				F = S.call(E.call, String.prototype.replace),
				C = S.call(E.call, String.prototype.slice),
				I = S.call(E.call, RegExp.prototype.exec),
				G = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
				z = /\\(\\)?/g,
				H = function (J) {
					var _ = C(J, 0, 1), $ = C(J, -1);
					if (_ === '%' && $ !== '%') {
						throw new n(
							'invalid intrinsic syntax, expected closing `%`',
						);
					}
					if ($ === '%' && _ !== '%') {
						throw new n(
							'invalid intrinsic syntax, expected opening `%`',
						);
					}
					var k = [];
					return F(J, G, function (D, se, oe, ae) {
						k[k.length] = oe ? F(ae, z, '$1') : se || D;
					}),
						k;
				},
				U = function (J, _) {
					var $ = J, k;
					if (v(P, $) && (k = P[$], $ = '%' + k[0] + '%'), v(b, $)) {
						var D = b[$];
						if (D === g && (D = y($)), typeof D > 'u' && !_) {
							throw new i(
								'intrinsic ' + J +
									' exists, but is not available. Please file an issue!',
							);
						}
						return { alias: k, name: $, value: D };
					}
					throw new n('intrinsic ' + J + ' does not exist!');
				};
			t.exports = function (J, _) {
				if (typeof J != 'string' || J.length === 0) {
					throw new i('intrinsic name must be a non-empty string');
				}
				if (arguments.length > 1 && typeof _ != 'boolean') {
					throw new i('"allowMissing" argument must be a boolean');
				}
				if (I(/^%?[^%]*%?$/, J) === null) {
					throw new n(
						'`%` may not be present anywhere but at the beginning and end of the intrinsic name',
					);
				}
				var $ = H(J),
					k = $.length > 0 ? $[0] : '',
					D = U('%' + k + '%', _),
					se = D.name,
					oe = D.value,
					ae = !1,
					$e = D.alias;
				$e && (k = $e[0], A($, T([0, 1], $e)));
				for (var He = 1, Me = !0; He < $.length; He += 1) {
					var me = $[He], de = C(me, 0, 1), Fe = C(me, -1);
					if (
						(de === '"' || de === '\'' || de === '`' ||
							Fe === '"' || Fe === '\'' || Fe === '`') &&
						de !== Fe
					) {
						throw new n(
							'property names with quotes must have matching quotes',
						);
					}
					if (
						(me === 'constructor' || !Me) && (ae = !0),
							k += '.' + me,
							se = '%' + k + '%',
							v(b, se)
					) oe = b[se];
					else if (oe != null) {
						if (!(me in oe)) {
							if (!_) {
								throw new i(
									'base intrinsic for ' + J +
										' exists, but the property is not available.',
								);
							}
							return;
						}
						if (a && He + 1 >= $.length) {
							var qe = a(oe, me);
							Me = !!qe,
								Me && 'get' in qe &&
									!('originalValue' in qe.get)
									? oe = qe.get
									: oe = oe[me];
						} else Me = v(oe, me), oe = oe[me];
						Me && !ae && (b[se] = oe);
					}
				}
				return oe;
			};
		}),
		fp = le((e, t) => {
			'use strict';
			var r = Pn(),
				n = Ys(),
				o = n('%Function.prototype.apply%'),
				i = n('%Function.prototype.call%'),
				s = n('%Reflect.apply%', !0) || r.call(i, o),
				a = n('%Object.getOwnPropertyDescriptor%', !0),
				u = n('%Object.defineProperty%', !0),
				l = n('%Math.max%');
			if (u) {
				try {
					u({}, 'a', { value: 1 });
				} catch (p) {
					u = null;
				}
			}
			t.exports = function (p) {
				var g = s(r, i, arguments);
				if (a && u) {
					var h = a(g, 'length');
					h.configurable &&
						u(g, 'length', {
							value: 1 + l(0, p.length - (arguments.length - 1)),
						});
				}
				return g;
			};
			var c = function () {
				return s(r, o, arguments);
			};
			u ? u(t.exports, 'apply', { value: c }) : t.exports.apply = c;
		}),
		Jo = le((e, t) => {
			'use strict';
			var r = Ys(), n = fp(), o = n(r('String.prototype.indexOf'));
			t.exports = function (i, s) {
				var a = r(i, !!s);
				return typeof a == 'function' && o(i, '.prototype.') > -1
					? n(a)
					: a;
			};
		}),
		mp = le((e, t) => {
			'use strict';
			var r = An()(),
				n = Jo(),
				o = n('Object.prototype.toString'),
				i = function (u) {
					return r && u && typeof u == 'object' &&
							Symbol.toStringTag in u
						? !1
						: o(u) === '[object Arguments]';
				},
				s = function (u) {
					return i(u) ? !0 : u !== null && typeof u == 'object' &&
						typeof u.length == 'number' && u.length >= 0 &&
						o(u) !== '[object Array]' &&
						o(u.callee) === '[object Function]';
				},
				a = function () {
					return i(arguments);
				}();
			i.isLegacyArguments = s, t.exports = a ? i : s;
		}),
		dp = le((e, t) => {
			'use strict';
			var r = Object.prototype.toString,
				n = E.prototype.toString,
				o = /^\s*(?:function)?\*/,
				i = An()(),
				s = Object.getPrototypeOf,
				a = function () {
					if (!i) return !1;
					try {
						return E('return function*() {}')();
					} catch (l) {}
				},
				u;
			t.exports = function (l) {
				if (typeof l != 'function') return !1;
				if (o.test(n.call(l))) return !0;
				if (!i) {
					var c = r.call(l);
					return c === '[object GeneratorFunction]';
				}
				if (!s) return !1;
				if (typeof u > 'u') {
					var p = a();
					u = p ? s(p) : !1;
				}
				return s(l) === u;
			};
		}),
		gp = le((e, t) => {
			'use strict';
			var r = E.prototype.toString,
				n = typeof Reflect == 'object' && Reflect !== null &&
					Reflect.apply,
				o,
				i;
			if (
				typeof n == 'function' &&
				typeof Object.defineProperty == 'function'
			) {
				try {
					o = Object.defineProperty({}, 'length', {
						get: function () {
							throw i;
						},
					}),
						i = {},
						n(
							function () {
								throw 42;
							},
							null,
							o,
						);
				} catch (A) {
					A !== i && (n = null);
				}
			} else n = null;
			var s = /^\s*class\b/,
				a = function (A) {
					try {
						var F = r.call(A);
						return s.test(F);
					} catch (C) {
						return !1;
					}
				},
				u = function (A) {
					try {
						return a(A) ? !1 : (r.call(A), !0);
					} catch (F) {
						return !1;
					}
				},
				l = Object.prototype.toString,
				c = '[object Object]',
				p = '[object Function]',
				g = '[object GeneratorFunction]',
				h = '[object HTMLAllCollection]',
				b = '[object HTML document.all class]',
				y = '[object HTMLCollection]',
				P = typeof Symbol == 'function' && !!Symbol.toStringTag,
				S = !(0 in [,]),
				v = function () {
					return !1;
				};
			typeof document == 'object' &&
				(T = document.all,
					l.call(T) === l.call(document.all) && (v = function (A) {
						if (
							(S || !A) &&
							(typeof A > 'u' || typeof A == 'object')
						) {
							try {
								var F = l.call(A);
								return (F === h || F === b || F === y ||
									F === c) &&
									A('') == null;
							} catch (C) {}
						}
						return !1;
					}));
			var T;
			t.exports = n
				? function (A) {
					if (v(A)) return !0;
					if (
						!A || typeof A != 'function' && typeof A != 'object'
					) return !1;
					try {
						n(A, null, o);
					} catch (F) {
						if (F !== i) return !1;
					}
					return !a(A) && u(A);
				}
				: function (A) {
					if (v(A)) return !0;
					if (!A || typeof A != 'function' && typeof A != 'object') {
						return !1;
					}
					if (P) return u(A);
					if (a(A)) return !1;
					var F = l.call(A);
					return F !== p && F !== g && !/^\[object HTML/.test(F)
						? !1
						: u(A);
				};
		}),
		Zs = le((e, t) => {
			'use strict';
			var r = gp(),
				n = Object.prototype.toString,
				o = Object.prototype.hasOwnProperty,
				i = function (l, c, p) {
					for (var g = 0, h = l.length; g < h; g++) {
						o.call(l, g) &&
							(p == null ? c(l[g], g, l) : c.call(p, l[g], g, l));
					}
				},
				s = function (l, c, p) {
					for (var g = 0, h = l.length; g < h; g++) {
						p == null
							? c(l.charAt(g), g, l)
							: c.call(p, l.charAt(g), g, l);
					}
				},
				a = function (l, c, p) {
					for (var g in l) {
						o.call(l, g) &&
							(p == null ? c(l[g], g, l) : c.call(p, l[g], g, l));
					}
				},
				u = function (l, c, p) {
					if (!r(c)) {
						throw new TypeError('iterator must be a function');
					}
					var g;
					arguments.length >= 3 && (g = p),
						n.call(l) === '[object Array]'
							? i(l, c, g)
							: typeof l == 'string'
							? s(l, c, g)
							: a(l, c, g);
				};
			t.exports = u;
		}),
		Xs = le((e, t) => {
			'use strict';
			var r = [
					'BigInt64Array',
					'BigUint64Array',
					'Float32Array',
					'Float64Array',
					'Int16Array',
					'Int32Array',
					'Int8Array',
					'Uint16Array',
					'Uint32Array',
					'Uint8Array',
					'Uint8ClampedArray',
				],
				n = typeof globalThis > 'u' ? global : globalThis;
			t.exports = function () {
				for (var o = [], i = 0; i < r.length; i++) {
					typeof n[r[i]] == 'function' && (o[o.length] = r[i]);
				}
				return o;
			};
		}),
		yp = le((e, t) => {
			'use strict';
			var r,
				n = SyntaxError,
				o = E,
				i = TypeError,
				s = function (_) {
					try {
						return o(
							'"use strict"; return (' + _ + ').constructor;',
						)();
					} catch ($) {}
				},
				a = Object.getOwnPropertyDescriptor;
			if (a) {
				try {
					a({}, '');
				} catch (_) {
					a = null;
				}
			}
			var u = function () {
					throw new i();
				},
				l = a
					? function () {
						try {
							return arguments.callee, u;
						} catch (_) {
							try {
								return a(arguments, 'callee').get;
							} catch ($) {
								return u;
							}
						}
					}()
					: u,
				c = Hs()(),
				p = Object.getPrototypeOf || function (_) {
					return _.__proto__;
				},
				g = {},
				h = typeof Uint8Array > 'u' ? r : p(Uint8Array),
				b = {
					'%AggregateError%': typeof AggregateError > 'u'
						? r
						: AggregateError,
					'%Array%': Array,
					'%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
					'%ArrayIteratorPrototype%': c
						? p([][Symbol.iterator]())
						: r,
					'%AsyncFromSyncIteratorPrototype%': r,
					'%AsyncFunction%': g,
					'%AsyncGenerator%': g,
					'%AsyncGeneratorFunction%': g,
					'%AsyncIteratorPrototype%': g,
					'%Atomics%': typeof Atomics > 'u' ? r : Atomics,
					'%BigInt%': typeof BigInt > 'u' ? r : BigInt,
					'%BigInt64Array%': typeof BigInt64Array > 'u'
						? r
						: BigInt64Array,
					'%BigUint64Array%': typeof BigUint64Array > 'u'
						? r
						: BigUint64Array,
					'%Boolean%': Boolean,
					'%DataView%': typeof DataView > 'u' ? r : DataView,
					'%Date%': Date,
					'%decodeURI%': decodeURI,
					'%decodeURIComponent%': decodeURIComponent,
					'%encodeURI%': encodeURI,
					'%encodeURIComponent%': encodeURIComponent,
					'%Error%': Error,
					'%eval%': void 0,
					'%EvalError%': EvalError,
					'%Float32Array%': typeof Float32Array > 'u'
						? r
						: Float32Array,
					'%Float64Array%': typeof Float64Array > 'u'
						? r
						: Float64Array,
					'%FinalizationRegistry%': typeof FinalizationRegistry > 'u'
						? r
						: FinalizationRegistry,
					'%Function%': o,
					'%GeneratorFunction%': g,
					'%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
					'%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
					'%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
					'%isFinite%': isFinite,
					'%isNaN%': isNaN,
					'%IteratorPrototype%': c ? p(p([][Symbol.iterator]())) : r,
					'%JSON%': typeof JSON == 'object' ? JSON : r,
					'%Map%': typeof Map > 'u' ? r : Map,
					'%MapIteratorPrototype%': typeof Map > 'u' || !c
						? r
						: p(new Map()[Symbol.iterator]()),
					'%Math%': Math,
					'%Number%': Number,
					'%Object%': Object,
					'%parseFloat%': parseFloat,
					'%parseInt%': parseInt,
					'%Promise%': typeof Promise > 'u' ? r : Promise,
					'%Proxy%': typeof Proxy > 'u' ? r : Proxy,
					'%RangeError%': RangeError,
					'%ReferenceError%': ReferenceError,
					'%Reflect%': typeof Reflect > 'u' ? r : Reflect,
					'%RegExp%': RegExp,
					'%Set%': typeof Set > 'u' ? r : Set,
					'%SetIteratorPrototype%': typeof Set > 'u' || !c
						? r
						: p(new Set()[Symbol.iterator]()),
					'%SharedArrayBuffer%': typeof SharedArrayBuffer > 'u'
						? r
						: SharedArrayBuffer,
					'%String%': String,
					'%StringIteratorPrototype%': c
						? p(''[Symbol.iterator]())
						: r,
					'%Symbol%': c ? Symbol : r,
					'%SyntaxError%': n,
					'%ThrowTypeError%': l,
					'%TypedArray%': h,
					'%TypeError%': i,
					'%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
					'%Uint8ClampedArray%': typeof Uint8ClampedArray > 'u'
						? r
						: Uint8ClampedArray,
					'%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
					'%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
					'%URIError%': URIError,
					'%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
					'%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
					'%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
				};
			try {
				null.error;
			} catch (_) {
				y = p(p(_)), b['%Error.prototype%'] = y;
			}
			var y,
				P = function _($) {
					var k;
					if ($ === '%AsyncFunction%') k = s('async function () {}');
					else if ($ === '%GeneratorFunction%') {
						k = s('function* () {}');
					} else if ($ === '%AsyncGeneratorFunction%') {
						k = s('async function* () {}');
					} else if ($ === '%AsyncGenerator%') {
						var D = _('%AsyncGeneratorFunction%');
						D && (k = D.prototype);
					} else if ($ === '%AsyncIteratorPrototype%') {
						var se = _('%AsyncGenerator%');
						se && (k = p(se.prototype));
					}
					return b[$] = k, k;
				},
				S = {
					'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
					'%ArrayPrototype%': ['Array', 'prototype'],
					'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
					'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
					'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
					'%ArrayProto_values%': ['Array', 'prototype', 'values'],
					'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
					'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
					'%AsyncGeneratorPrototype%': [
						'AsyncGeneratorFunction',
						'prototype',
						'prototype',
					],
					'%BooleanPrototype%': ['Boolean', 'prototype'],
					'%DataViewPrototype%': ['DataView', 'prototype'],
					'%DatePrototype%': ['Date', 'prototype'],
					'%ErrorPrototype%': ['Error', 'prototype'],
					'%EvalErrorPrototype%': ['EvalError', 'prototype'],
					'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
					'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
					'%FunctionPrototype%': ['Function', 'prototype'],
					'%Generator%': ['GeneratorFunction', 'prototype'],
					'%GeneratorPrototype%': [
						'GeneratorFunction',
						'prototype',
						'prototype',
					],
					'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
					'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
					'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
					'%JSONParse%': ['JSON', 'parse'],
					'%JSONStringify%': ['JSON', 'stringify'],
					'%MapPrototype%': ['Map', 'prototype'],
					'%NumberPrototype%': ['Number', 'prototype'],
					'%ObjectPrototype%': ['Object', 'prototype'],
					'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
					'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
					'%PromisePrototype%': ['Promise', 'prototype'],
					'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
					'%Promise_all%': ['Promise', 'all'],
					'%Promise_reject%': ['Promise', 'reject'],
					'%Promise_resolve%': ['Promise', 'resolve'],
					'%RangeErrorPrototype%': ['RangeError', 'prototype'],
					'%ReferenceErrorPrototype%': [
						'ReferenceError',
						'prototype',
					],
					'%RegExpPrototype%': ['RegExp', 'prototype'],
					'%SetPrototype%': ['Set', 'prototype'],
					'%SharedArrayBufferPrototype%': [
						'SharedArrayBuffer',
						'prototype',
					],
					'%StringPrototype%': ['String', 'prototype'],
					'%SymbolPrototype%': ['Symbol', 'prototype'],
					'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
					'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
					'%TypeErrorPrototype%': ['TypeError', 'prototype'],
					'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
					'%Uint8ClampedArrayPrototype%': [
						'Uint8ClampedArray',
						'prototype',
					],
					'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
					'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
					'%URIErrorPrototype%': ['URIError', 'prototype'],
					'%WeakMapPrototype%': ['WeakMap', 'prototype'],
					'%WeakSetPrototype%': ['WeakSet', 'prototype'],
				},
				v = Pn(),
				T = zs(),
				A = v.call(E.call, Array.prototype.concat),
				F = v.call(E.apply, Array.prototype.splice),
				C = v.call(E.call, String.prototype.replace),
				I = v.call(E.call, String.prototype.slice),
				G = v.call(E.call, RegExp.prototype.exec),
				z = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
				H = /\\(\\)?/g,
				U = function (_) {
					var $ = I(_, 0, 1), k = I(_, -1);
					if ($ === '%' && k !== '%') {
						throw new n(
							'invalid intrinsic syntax, expected closing `%`',
						);
					}
					if (k === '%' && $ !== '%') {
						throw new n(
							'invalid intrinsic syntax, expected opening `%`',
						);
					}
					var D = [];
					return C(_, z, function (se, oe, ae, $e) {
						D[D.length] = ae ? C($e, H, '$1') : oe || se;
					}),
						D;
				},
				J = function (_, $) {
					var k = _, D;
					if (T(S, k) && (D = S[k], k = '%' + D[0] + '%'), T(b, k)) {
						var se = b[k];
						if (se === g && (se = P(k)), typeof se > 'u' && !$) {
							throw new i(
								'intrinsic ' + _ +
									' exists, but is not available. Please file an issue!',
							);
						}
						return { alias: D, name: k, value: se };
					}
					throw new n('intrinsic ' + _ + ' does not exist!');
				};
			t.exports = function (_, $) {
				if (typeof _ != 'string' || _.length === 0) {
					throw new i('intrinsic name must be a non-empty string');
				}
				if (arguments.length > 1 && typeof $ != 'boolean') {
					throw new i('"allowMissing" argument must be a boolean');
				}
				if (G(/^%?[^%]*%?$/, _) === null) {
					throw new n(
						'`%` may not be present anywhere but at the beginning and end of the intrinsic name',
					);
				}
				var k = U(_),
					D = k.length > 0 ? k[0] : '',
					se = J('%' + D + '%', $),
					oe = se.name,
					ae = se.value,
					$e = !1,
					He = se.alias;
				He && (D = He[0], F(k, A([0, 1], He)));
				for (var Me = 1, me = !0; Me < k.length; Me += 1) {
					var de = k[Me], Fe = I(de, 0, 1), qe = I(de, -1);
					if (
						(Fe === '"' || Fe === '\'' || Fe === '`' ||
							qe === '"' || qe === '\'' || qe === '`') &&
						Fe !== qe
					) {
						throw new n(
							'property names with quotes must have matching quotes',
						);
					}
					if (
						(de === 'constructor' || !me) && ($e = !0),
							D += '.' + de,
							oe = '%' + D + '%',
							T(b, oe)
					) ae = b[oe];
					else if (ae != null) {
						if (!(de in ae)) {
							if (!$) {
								throw new i(
									'base intrinsic for ' + _ +
										' exists, but the property is not available.',
								);
							}
							return;
						}
						if (a && Me + 1 >= k.length) {
							var qt = a(ae, de);
							me = !!qt,
								me && 'get' in qt &&
									!('originalValue' in qt.get)
									? ae = qt.get
									: ae = ae[de];
						} else me = T(ae, de), ae = ae[de];
						me && !$e && (b[oe] = ae);
					}
				}
				return ae;
			};
		}),
		ea = le((e, t) => {
			'use strict';
			var r = yp(), n = r('%Object.getOwnPropertyDescriptor%', !0);
			if (n) {
				try {
					n([], 'length');
				} catch (o) {
					n = null;
				}
			}
			t.exports = n;
		}),
		ta = le((e, t) => {
			'use strict';
			var r = Zs(),
				n = Xs(),
				o = Jo(),
				i = o('Object.prototype.toString'),
				s = An()(),
				a = ea(),
				u = typeof globalThis > 'u' ? global : globalThis,
				l = n(),
				c = o('Array.prototype.indexOf', !0) || function (y, P) {
					for (var S = 0; S < y.length; S += 1) {
						if (y[S] === P) return S;
					}
					return -1;
				},
				p = o('String.prototype.slice'),
				g = {},
				h = Object.getPrototypeOf;
			s && a && h && r(l, function (y) {
				var P = new u[y]();
				if (Symbol.toStringTag in P) {
					var S = h(P), v = a(S, Symbol.toStringTag);
					if (!v) {
						var T = h(S);
						v = a(T, Symbol.toStringTag);
					}
					g[y] = v.get;
				}
			});
			var b = function (y) {
				var P = !1;
				return r(g, function (S, v) {
					if (!P) {
						try {
							P = S.call(y) === v;
						} catch (T) {}
					}
				}),
					P;
			};
			t.exports = function (y) {
				if (!y || typeof y != 'object') return !1;
				if (!s || !(Symbol.toStringTag in y)) {
					var P = p(i(y), 8, -1);
					return c(l, P) > -1;
				}
				return a ? b(y) : !1;
			};
		}),
		hp = le((e, t) => {
			'use strict';
			var r = Zs(),
				n = Xs(),
				o = Jo(),
				i = ea(),
				s = o('Object.prototype.toString'),
				a = An()(),
				u = typeof globalThis > 'u' ? global : globalThis,
				l = n(),
				c = o('String.prototype.slice'),
				p = {},
				g = Object.getPrototypeOf;
			a && i && g && r(l, function (y) {
				if (typeof u[y] == 'function') {
					var P = new u[y]();
					if (Symbol.toStringTag in P) {
						var S = g(P), v = i(S, Symbol.toStringTag);
						if (!v) {
							var T = g(S);
							v = i(T, Symbol.toStringTag);
						}
						p[y] = v.get;
					}
				}
			});
			var h = function (y) {
					var P = !1;
					return r(p, function (S, v) {
						if (!P) {
							try {
								var T = S.call(y);
								T === v && (P = T);
							} catch (A) {}
						}
					}),
						P;
				},
				b = ta();
			t.exports = function (y) {
				return b(y)
					? !a || !(Symbol.toStringTag in y) ? c(s(y), 8, -1) : h(y)
					: !1;
			};
		}),
		bp = le((e) => {
			'use strict';
			var t = mp(), r = dp(), n = hp(), o = ta();
			function i(R) {
				return R.call.bind(R);
			}
			var s = typeof BigInt < 'u',
				a = typeof Symbol < 'u',
				u = i(Object.prototype.toString),
				l = i(Number.prototype.valueOf),
				c = i(String.prototype.valueOf),
				p = i(Boolean.prototype.valueOf);
			s && (g = i(BigInt.prototype.valueOf));
			var g;
			a && (h = i(Symbol.prototype.valueOf));
			var h;
			function b(R, fc) {
				if (typeof R != 'object') return !1;
				try {
					return fc(R), !0;
				} catch (Sg) {
					return !1;
				}
			}
			e.isArgumentsObject = t,
				e.isGeneratorFunction = r,
				e.isTypedArray = o;
			function y(R) {
				return typeof Promise < 'u' && R instanceof Promise ||
					R !== null && typeof R == 'object' &&
						typeof R.then == 'function' &&
						typeof R.catch == 'function';
			}
			e.isPromise = y;
			function P(R) {
				return typeof ArrayBuffer < 'u' && ArrayBuffer.isView
					? ArrayBuffer.isView(R)
					: o(R) || me(R);
			}
			e.isArrayBufferView = P;
			function S(R) {
				return n(R) === 'Uint8Array';
			}
			e.isUint8Array = S;
			function v(R) {
				return n(R) === 'Uint8ClampedArray';
			}
			e.isUint8ClampedArray = v;
			function T(R) {
				return n(R) === 'Uint16Array';
			}
			e.isUint16Array = T;
			function A(R) {
				return n(R) === 'Uint32Array';
			}
			e.isUint32Array = A;
			function F(R) {
				return n(R) === 'Int8Array';
			}
			e.isInt8Array = F;
			function C(R) {
				return n(R) === 'Int16Array';
			}
			e.isInt16Array = C;
			function I(R) {
				return n(R) === 'Int32Array';
			}
			e.isInt32Array = I;
			function G(R) {
				return n(R) === 'Float32Array';
			}
			e.isFloat32Array = G;
			function z(R) {
				return n(R) === 'Float64Array';
			}
			e.isFloat64Array = z;
			function H(R) {
				return n(R) === 'BigInt64Array';
			}
			e.isBigInt64Array = H;
			function U(R) {
				return n(R) === 'BigUint64Array';
			}
			e.isBigUint64Array = U;
			function J(R) {
				return u(R) === '[object Map]';
			}
			J.working = typeof Map < 'u' && J(new Map());
			function _(R) {
				return typeof Map > 'u'
					? !1
					: J.working
					? J(R)
					: R instanceof Map;
			}
			e.isMap = _;
			function $(R) {
				return u(R) === '[object Set]';
			}
			$.working = typeof Set < 'u' && $(new Set());
			function k(R) {
				return typeof Set > 'u'
					? !1
					: $.working
					? $(R)
					: R instanceof Set;
			}
			e.isSet = k;
			function D(R) {
				return u(R) === '[object WeakMap]';
			}
			D.working = typeof WeakMap < 'u' && D(new WeakMap());
			function se(R) {
				return typeof WeakMap > 'u'
					? !1
					: D.working
					? D(R)
					: R instanceof WeakMap;
			}
			e.isWeakMap = se;
			function oe(R) {
				return u(R) === '[object WeakSet]';
			}
			oe.working = typeof WeakSet < 'u' && oe(new WeakSet());
			function ae(R) {
				return oe(R);
			}
			e.isWeakSet = ae;
			function $e(R) {
				return u(R) === '[object ArrayBuffer]';
			}
			$e.working = typeof ArrayBuffer < 'u' && $e(new ArrayBuffer());
			function He(R) {
				return typeof ArrayBuffer > 'u'
					? !1
					: $e.working
					? $e(R)
					: R instanceof ArrayBuffer;
			}
			e.isArrayBuffer = He;
			function Me(R) {
				return u(R) === '[object DataView]';
			}
			Me.working = typeof ArrayBuffer < 'u' && typeof DataView < 'u' &&
				Me(new DataView(new ArrayBuffer(1), 0, 1));
			function me(R) {
				return typeof DataView > 'u'
					? !1
					: Me.working
					? Me(R)
					: R instanceof DataView;
			}
			e.isDataView = me;
			var de = typeof SharedArrayBuffer < 'u'
				? SharedArrayBuffer
				: void 0;
			function Fe(R) {
				return u(R) === '[object SharedArrayBuffer]';
			}
			function qe(R) {
				return typeof de > 'u'
					? !1
					: (typeof Fe.working > 'u' && (Fe.working = Fe(new de())),
						Fe.working ? Fe(R) : R instanceof de);
			}
			e.isSharedArrayBuffer = qe;
			function qt(R) {
				return u(R) === '[object AsyncFunction]';
			}
			e.isAsyncFunction = qt;
			function sc(R) {
				return u(R) === '[object Map Iterator]';
			}
			e.isMapIterator = sc;
			function ac(R) {
				return u(R) === '[object Set Iterator]';
			}
			e.isSetIterator = ac;
			function uc(R) {
				return u(R) === '[object Generator]';
			}
			e.isGeneratorObject = uc;
			function lc(R) {
				return u(R) === '[object WebAssembly.Module]';
			}
			e.isWebAssemblyCompiledModule = lc;
			function ls(R) {
				return b(R, l);
			}
			e.isNumberObject = ls;
			function cs(R) {
				return b(R, c);
			}
			e.isStringObject = cs;
			function ps(R) {
				return b(R, p);
			}
			e.isBooleanObject = ps;
			function fs(R) {
				return s && b(R, g);
			}
			e.isBigIntObject = fs;
			function ms(R) {
				return a && b(R, h);
			}
			e.isSymbolObject = ms;
			function cc(R) {
				return ls(R) || cs(R) || ps(R) || fs(R) || ms(R);
			}
			e.isBoxedPrimitive = cc;
			function pc(R) {
				return typeof Uint8Array < 'u' && (He(R) || qe(R));
			}
			e.isAnyArrayBuffer = pc,
				['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(
					function (R) {
						Object.defineProperty(e, R, {
							enumerable: !1,
							value: function () {
								throw new Error(
									R + ' is not supported in userland',
								);
							},
						});
					},
				);
		}),
		wp = le((e, t) => {
			t.exports = function (r) {
				return r instanceof x.Buffer;
			};
		}),
		Ep = le((e, t) => {
			typeof Object.create == 'function'
				? t.exports = function (r, n) {
					n &&
						(r.super_ = n,
							r.prototype = Object.create(n.prototype, {
								constructor: {
									value: r,
									enumerable: !1,
									writable: !0,
									configurable: !0,
								},
							}));
				}
				: t.exports = function (r, n) {
					if (n) {
						r.super_ = n;
						var o = function () {};
						o.prototype = n.prototype,
							r.prototype = new o(),
							r.prototype.constructor = r;
					}
				};
		}),
		ra = Object.getOwnPropertyDescriptors || function (e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
			}
			return r;
		},
		xp = /%[sdj%]/g;
	W.format = function (e) {
		if (!Tn(e)) {
			for (var t = [], r = 0; r < arguments.length; r++) {
				t.push(Et(arguments[r]));
			}
			return t.join(' ');
		}
		for (
			var r = 1,
				n = arguments,
				o = n.length,
				i = String(e).replace(xp, function (u) {
					if (u === '%%') return '%';
					if (r >= o) return u;
					switch (u) {
						case '%s':
							return String(n[r++]);
						case '%d':
							return Number(n[r++]);
						case '%j':
							try {
								return JSON.stringify(n[r++]);
							} catch (l) {
								return '[Circular]';
							}
						default:
							return u;
					}
				}),
				s = n[r];
			r < o;
			s = n[++r]
		) vn(s) || !Yt(s) ? i += ' ' + s : i += ' ' + Et(s);
		return i;
	};
	W.deprecate = function (e, t) {
		if (typeof w < 'u' && w.noDeprecation === !0) return e;
		if (typeof w > 'u') {
			return function () {
				return W.deprecate(e, t).apply(this, arguments);
			};
		}
		var r = !1;
		function n() {
			if (!r) {
				if (w.throwDeprecation) throw new Error(t);
				w.traceDeprecation ? console.trace(t) : console.error(t),
					r = !0;
			}
			return e.apply(this, arguments);
		}
		return n;
	};
	var hn = {}, na = /^$/;
	w.env.NODE_DEBUG &&
		(bn = w.env.NODE_DEBUG,
			bn = bn.replace(/[|\\{}()[\]^$+?.]/g, '\\$&').replace(/\*/g, '.*')
				.replace(/,/g, '$|^').toUpperCase(),
			na = new RegExp('^' + bn + '$', 'i'));
	var bn;
	W.debuglog = function (e) {
		if (e = e.toUpperCase(), !hn[e]) {
			if (na.test(e)) {
				var t = w.pid;
				hn[e] = function () {
					var r = W.format.apply(W, arguments);
					console.error('%s %d: %s', e, t, r);
				};
			} else hn[e] = function () {};
		}
		return hn[e];
	};
	function Et(e, t) {
		var r = { seen: [], stylize: Pp };
		return arguments.length >= 3 && (r.depth = arguments[2]),
			arguments.length >= 4 && (r.colors = arguments[3]),
			Ko(t) ? r.showHidden = t : t && W._extend(r, t),
			_t(r.showHidden) && (r.showHidden = !1),
			_t(r.depth) && (r.depth = 2),
			_t(r.colors) && (r.colors = !1),
			_t(r.customInspect) && (r.customInspect = !0),
			r.colors && (r.stylize = Ap),
			En(r, e, r.depth);
	}
	W.inspect = Et;
	Et.colors = {
		bold: [1, 22],
		italic: [3, 23],
		underline: [4, 24],
		inverse: [7, 27],
		white: [37, 39],
		grey: [90, 39],
		black: [30, 39],
		blue: [34, 39],
		cyan: [36, 39],
		green: [32, 39],
		magenta: [35, 39],
		red: [31, 39],
		yellow: [33, 39],
	};
	Et.styles = {
		special: 'cyan',
		number: 'yellow',
		boolean: 'yellow',
		undefined: 'grey',
		null: 'bold',
		string: 'green',
		date: 'magenta',
		regexp: 'red',
	};
	function Ap(e, t) {
		var r = Et.styles[t];
		return r
			? '\x1B[' + Et.colors[r][0] + 'm' + e + '\x1B[' + Et.colors[r][1] +
				'm'
			: e;
	}
	function Pp(e, t) {
		return e;
	}
	function vp(e) {
		var t = {};
		return e.forEach(function (r, n) {
			t[r] = !0;
		}),
			t;
	}
	function En(e, t, r) {
		if (
			e.customInspect && t && wn(t.inspect) && t.inspect !== W.inspect &&
			!(t.constructor && t.constructor.prototype === t)
		) {
			var n = t.inspect(r, e);
			return Tn(n) || (n = En(e, n, r)), n;
		}
		var o = Tp(e, t);
		if (o) return o;
		var i = Object.keys(t), s = vp(i);
		if (
			e.showHidden && (i = Object.getOwnPropertyNames(t)),
				Ar(t) &&
				(i.indexOf('message') >= 0 || i.indexOf('description') >= 0)
		) return qo(t);
		if (i.length === 0) {
			if (wn(t)) {
				var a = t.name ? ': ' + t.name : '';
				return e.stylize('[Function' + a + ']', 'special');
			}
			if (xr(t)) {
				return e.stylize(RegExp.prototype.toString.call(t), 'regexp');
			}
			if (xn(t)) {
				return e.stylize(Date.prototype.toString.call(t), 'date');
			}
			if (Ar(t)) return qo(t);
		}
		var u = '', l = !1, c = ['{', '}'];
		if (oa(t) && (l = !0, c = ['[', ']']), wn(t)) {
			var p = t.name ? ': ' + t.name : '';
			u = ' [Function' + p + ']';
		}
		if (
			xr(t) && (u = ' ' + RegExp.prototype.toString.call(t)),
				xn(t) && (u = ' ' + Date.prototype.toUTCString.call(t)),
				Ar(t) && (u = ' ' + qo(t)),
				i.length === 0 && (!l || t.length == 0)
		) return c[0] + u + c[1];
		if (r < 0) {
			return xr(t)
				? e.stylize(RegExp.prototype.toString.call(t), 'regexp')
				: e.stylize('[Object]', 'special');
		}
		e.seen.push(t);
		var g;
		return l ? g = Sp(e, t, r, s, i) : g = i.map(function (h) {
			return Go(e, t, r, s, h, l);
		}),
			e.seen.pop(),
			Mp(g, u, c);
	}
	function Tp(e, t) {
		if (_t(t)) return e.stylize('undefined', 'undefined');
		if (Tn(t)) {
			var r = '\'' +
				JSON.stringify(t).replace(/^"|"$/g, '').replace(/'/g, '\\\'')
					.replace(/\\"/g, '"') +
				'\'';
			return e.stylize(r, 'string');
		}
		if (ia(t)) return e.stylize('' + t, 'number');
		if (Ko(t)) return e.stylize('' + t, 'boolean');
		if (vn(t)) return e.stylize('null', 'null');
	}
	function qo(e) {
		return '[' + Error.prototype.toString.call(e) + ']';
	}
	function Sp(e, t, r, n, o) {
		for (var i = [], s = 0, a = t.length; s < a; ++s) {
			sa(t, String(s))
				? i.push(Go(e, t, r, n, String(s), !0))
				: i.push('');
		}
		return o.forEach(function (u) {
			u.match(/^\d+$/) || i.push(Go(e, t, r, n, u, !0));
		}),
			i;
	}
	function Go(e, t, r, n, o, i) {
		var s, a, u;
		if (
			u = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] },
				u.get
					? u.set
						? a = e.stylize('[Getter/Setter]', 'special')
						: a = e.stylize('[Getter]', 'special')
					: u.set && (a = e.stylize('[Setter]', 'special')),
				sa(n, o) || (s = '[' + o + ']'),
				a ||
				(e.seen.indexOf(u.value) < 0
					? (vn(r)
						? a = En(e, u.value, null)
						: a = En(e, u.value, r - 1),
						a.indexOf(`
`) > -1 && (i
								? a = a.split(`
`).map(function (l) {
									return '  ' + l;
								}).join(`
`).slice(2)
								: a = `
` + a.split(`
`).map(function (l) {
									return '   ' + l;
								}).join(`
`)))
					: a = e.stylize('[Circular]', 'special')),
				_t(s)
		) {
			if (i && o.match(/^\d+$/)) return a;
			s = JSON.stringify('' + o),
				s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
					? (s = s.slice(1, -1), s = e.stylize(s, 'name'))
					: (s = s.replace(/'/g, '\\\'').replace(/\\"/g, '"').replace(
						/(^"|"$)/g,
						'\'',
					),
						s = e.stylize(s, 'string'));
		}
		return s + ': ' + a;
	}
	function Mp(e, t, r) {
		var n = 0,
			o = e.reduce(function (i, s) {
				return n++,
					s.indexOf(`
`) >= 0 && n++,
					i + s.replace(/\u001b\[\d\d?m/g, '').length + 1;
			}, 0);
		return o > 60
			? r[0] + (t === '' ? '' : t + `
 `) + ' ' + e.join(`,
  `) +
				' ' + r[1]
			: r[0] + t + ' ' + e.join(', ') + ' ' + r[1];
	}
	W.types = bp();
	function oa(e) {
		return Array.isArray(e);
	}
	W.isArray = oa;
	function Ko(e) {
		return typeof e == 'boolean';
	}
	W.isBoolean = Ko;
	function vn(e) {
		return e === null;
	}
	W.isNull = vn;
	function Fp(e) {
		return e == null;
	}
	W.isNullOrUndefined = Fp;
	function ia(e) {
		return typeof e == 'number';
	}
	W.isNumber = ia;
	function Tn(e) {
		return typeof e == 'string';
	}
	W.isString = Tn;
	function Op(e) {
		return typeof e == 'symbol';
	}
	W.isSymbol = Op;
	function _t(e) {
		return e === void 0;
	}
	W.isUndefined = _t;
	function xr(e) {
		return Yt(e) && Wo(e) === '[object RegExp]';
	}
	W.isRegExp = xr;
	W.types.isRegExp = xr;
	function Yt(e) {
		return typeof e == 'object' && e !== null;
	}
	W.isObject = Yt;
	function xn(e) {
		return Yt(e) && Wo(e) === '[object Date]';
	}
	W.isDate = xn;
	W.types.isDate = xn;
	function Ar(e) {
		return Yt(e) && (Wo(e) === '[object Error]' || e instanceof Error);
	}
	W.isError = Ar;
	W.types.isNativeError = Ar;
	function wn(e) {
		return typeof e == 'function';
	}
	W.isFunction = wn;
	function Rp(e) {
		return e === null || typeof e == 'boolean' || typeof e == 'number' ||
			typeof e == 'string' || typeof e == 'symbol' || typeof e > 'u';
	}
	W.isPrimitive = Rp;
	W.isBuffer = wp();
	function Wo(e) {
		return Object.prototype.toString.call(e);
	}
	function Vo(e) {
		return e < 10 ? '0' + e.toString(10) : e.toString(10);
	}
	var Cp = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	function Ip() {
		var e = new Date(),
			t = [Vo(e.getHours()), Vo(e.getMinutes()), Vo(e.getSeconds())].join(
				':',
			);
		return [e.getDate(), Cp[e.getMonth()], t].join(' ');
	}
	W.log = function () {
		console.log('%s - %s', Ip(), W.format.apply(W, arguments));
	};
	W.inherits = Ep();
	W._extend = function (e, t) {
		if (!t || !Yt(t)) return e;
		for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
		return e;
	};
	function sa(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	var Nt = typeof Symbol < 'u' ? Symbol('util.promisify.custom') : void 0;
	W.promisify = function (e) {
		if (typeof e != 'function') {
			throw new TypeError(
				'The "original" argument must be of type Function',
			);
		}
		if (Nt && e[Nt]) {
			var t = e[Nt];
			if (typeof t != 'function') {
				throw new TypeError(
					'The "util.promisify.custom" argument must be of type Function',
				);
			}
			return Object.defineProperty(t, Nt, {
				value: t,
				enumerable: !1,
				writable: !1,
				configurable: !0,
			}),
				t;
		}
		function t() {
			for (
				var r,
					n,
					o = new Promise(function (a, u) {
						r = a, n = u;
					}),
					i = [],
					s = 0;
				s < arguments.length;
				s++
			) i.push(arguments[s]);
			i.push(function (a, u) {
				a ? n(a) : r(u);
			});
			try {
				e.apply(this, i);
			} catch (a) {
				n(a);
			}
			return o;
		}
		return Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
			Nt &&
			Object.defineProperty(t, Nt, {
				value: t,
				enumerable: !1,
				writable: !1,
				configurable: !0,
			}),
			Object.defineProperties(t, ra(e));
	};
	W.promisify.custom = Nt;
	function Dp(e, t) {
		if (!e) {
			var r = new Error('Promise was rejected with a falsy value');
			r.reason = e, e = r;
		}
		return t(e);
	}
	function kp(e) {
		if (typeof e != 'function') {
			throw new TypeError(
				'The "original" argument must be of type Function',
			);
		}
		function t() {
			for (var r = [], n = 0; n < arguments.length; n++) {
				r.push(arguments[n]);
			}
			var o = r.pop();
			if (typeof o != 'function') {
				throw new TypeError(
					'The last argument must be of type Function',
				);
			}
			var i = this,
				s = function () {
					return o.apply(i, arguments);
				};
			e.apply(this, r).then(function (a) {
				w.nextTick(s.bind(null, null, a));
			}, function (a) {
				w.nextTick(Dp.bind(null, a, s));
			});
		}
		return Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
			Object.defineProperties(t, ra(e)),
			t;
	}
	W.callbackify = kp;
});
var aa = ee(() => {
	d();
	f();
	m();
});
var la = ee((th, ua) => {
	'use strict';
	d();
	f();
	m();
	ua.exports = (e, t = w.argv) => {
		let r = e.startsWith('-') ? '' : e.length === 1 ? '-' : '--',
			n = t.indexOf(r + e),
			o = t.indexOf('--');
		return n !== -1 && (o === -1 || n < o);
	};
});
var fa = ee((ih, pa) => {
	'use strict';
	d();
	f();
	m();
	var Np = aa(), ca = Uo(), Ve = la(), { env: ye } = w, xt;
	Ve('no-color') || Ve('no-colors') || Ve('color=false') || Ve('color=never')
		? xt = 0
		: (Ve('color') || Ve('colors') || Ve('color=true') ||
			Ve('color=always')) && (xt = 1);
	'FORCE_COLOR' in ye &&
		(ye.FORCE_COLOR === 'true'
			? xt = 1
			: ye.FORCE_COLOR === 'false'
			? xt = 0
			: xt = ye.FORCE_COLOR.length === 0
				? 1
				: Math.min(parseInt(ye.FORCE_COLOR, 10), 3));
	function Ho(e) {
		return e === 0
			? !1
			: { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
	}
	function zo(e, t) {
		if (xt === 0) return 0;
		if (Ve('color=16m') || Ve('color=full') || Ve('color=truecolor')) {
			return 3;
		}
		if (Ve('color=256')) return 2;
		if (e && !t && xt === void 0) return 0;
		let r = xt || 0;
		if (ye.TERM === 'dumb') return r;
		if (w.platform === 'win32') {
			let n = Np.release().split('.');
			return Number(n[0]) >= 10 && Number(n[2]) >= 10586
				? Number(n[2]) >= 14931 ? 3 : 2
				: 1;
		}
		if ('CI' in ye) {
			return [
					'TRAVIS',
					'CIRCLECI',
					'APPVEYOR',
					'GITLAB_CI',
					'GITHUB_ACTIONS',
					'BUILDKITE',
				].some((n) => n in ye) || ye.CI_NAME === 'codeship'
				? 1
				: r;
		}
		if ('TEAMCITY_VERSION' in ye) {
			return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(ye.TEAMCITY_VERSION)
				? 1
				: 0;
		}
		if (ye.COLORTERM === 'truecolor') return 3;
		if ('TERM_PROGRAM' in ye) {
			let n = parseInt((ye.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
			switch (ye.TERM_PROGRAM) {
				case 'iTerm.app':
					return n >= 3 ? 3 : 2;
				case 'Apple_Terminal':
					return 2;
			}
		}
		return /-256(color)?$/i.test(ye.TERM)
			? 2
			: /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i
					.test(ye.TERM) || 'COLORTERM' in ye
			? 1
			: r;
	}
	function _p(e) {
		let t = zo(e, e && e.isTTY);
		return Ho(t);
	}
	pa.exports = {
		supportsColor: _p,
		stdout: Ho(zo(!0, ca.isatty(1))),
		stderr: Ho(zo(!0, ca.isatty(2))),
	};
});
var da = ee((he, Mn) => {
	d();
	f();
	m();
	var $p = Uo(), Sn = Qo();
	he.init = Gp;
	he.log = Up;
	he.formatArgs = Lp;
	he.save = qp;
	he.load = Vp;
	he.useColors = jp;
	he.destroy = Sn.deprecate(
		() => {},
		'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
	);
	he.colors = [6, 2, 3, 4, 5, 1];
	try {
		let e = fa();
		e && (e.stderr || e).level >= 2 &&
			(he.colors = [
				20,
				21,
				26,
				27,
				32,
				33,
				38,
				39,
				40,
				41,
				42,
				43,
				44,
				45,
				56,
				57,
				62,
				63,
				68,
				69,
				74,
				75,
				76,
				77,
				78,
				79,
				80,
				81,
				92,
				93,
				98,
				99,
				112,
				113,
				128,
				129,
				134,
				135,
				148,
				149,
				160,
				161,
				162,
				163,
				164,
				165,
				166,
				167,
				168,
				169,
				170,
				171,
				172,
				173,
				178,
				179,
				184,
				185,
				196,
				197,
				198,
				199,
				200,
				201,
				202,
				203,
				204,
				205,
				206,
				207,
				208,
				209,
				214,
				215,
				220,
				221,
			]);
	} catch (e) {}
	he.inspectOpts = Object.keys(w.env).filter((e) => /^debug_/i.test(e))
		.reduce((e, t) => {
			let r = t.substring(6).toLowerCase().replace(
					/_([a-z])/g,
					(o, i) => i.toUpperCase(),
				),
				n = w.env[t];
			return /^(yes|on|true|enabled)$/i.test(n)
				? n = !0
				: /^(no|off|false|disabled)$/i.test(n)
				? n = !1
				: n === 'null'
				? n = null
				: n = Number(n),
				e[r] = n,
				e;
		}, {});
	function jp() {
		return 'colors' in he.inspectOpts
			? Boolean(he.inspectOpts.colors)
			: $p.isatty(w.stderr.fd);
	}
	function Lp(e) {
		let { namespace: t, useColors: r } = this;
		if (r) {
			let n = this.color,
				o = '\x1B[3' + (n < 8 ? n : '8;5;' + n),
				i = `  ${o};1m${t} \x1B[0m`;
			e[0] = i + e[0].split(`
`).join(
				`
` + i,
			), e.push(o + 'm+' + Mn.exports.humanize(this.diff) + '\x1B[0m');
		} else e[0] = Bp() + t + ' ' + e[0];
	}
	function Bp() {
		return he.inspectOpts.hideDate ? '' : new Date().toISOString() + ' ';
	}
	function Up(...e) {
		return w.stderr.write(
			Sn.format(...e) + `
`,
		);
	}
	function qp(e) {
		e ? w.env.DEBUG = e : delete w.env.DEBUG;
	}
	function Vp() {
		return w.env.DEBUG;
	}
	function Gp(e) {
		e.inspectOpts = {};
		let t = Object.keys(he.inspectOpts);
		for (let r = 0; r < t.length; r++) {
			e.inspectOpts[t[r]] = he.inspectOpts[t[r]];
		}
	}
	Mn.exports = Bo()(he);
	var { formatters: ma } = Mn.exports;
	ma.o = function (e) {
		return this.inspectOpts.colors = this.useColors,
			Sn.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(' ');
	};
	ma.O = function (e) {
		return this.inspectOpts.colors = this.useColors,
			Sn.inspect(e, this.inspectOpts);
	};
});
var ga = ee((fh, Yo) => {
	d();
	f();
	m();
	typeof w == 'undefined' || w.type === 'renderer' || w.browser === !0 ||
		w.__nwjs
		? Yo.exports = Ws()
		: Yo.exports = da();
});
var Xo = ee((Eh, Ea) => {
	'use strict';
	d();
	f();
	m();
	function nt(e) {
		if (typeof e != 'string') {
			throw new TypeError(
				'Path must be a string. Received ' + JSON.stringify(e),
			);
		}
	}
	function wa(e, t) {
		for (var r = '', n = 0, o = -1, i = 0, s, a = 0; a <= e.length; ++a) {
			if (a < e.length) s = e.charCodeAt(a);
			else {
				if (s === 47) break;
				s = 47;
			}
			if (s === 47) {
				if (!(o === a - 1 || i === 1)) {
					if (o !== a - 1 && i === 2) {
						if (
							r.length < 2 || n !== 2 ||
							r.charCodeAt(r.length - 1) !== 46 ||
							r.charCodeAt(r.length - 2) !== 46
						) {
							if (r.length > 2) {
								var u = r.lastIndexOf('/');
								if (u !== r.length - 1) {
									u === -1
										? (r = '', n = 0)
										: (r = r.slice(0, u),
											n = r.length - 1 -
												r.lastIndexOf('/')),
										o = a,
										i = 0;
									continue;
								}
							} else if (r.length === 2 || r.length === 1) {
								r = '', n = 0, o = a, i = 0;
								continue;
							}
						}
						t && (r.length > 0 ? r += '/..' : r = '..', n = 2);
					} else {r.length > 0
							? r += '/' + e.slice(o + 1, a)
							: r = e.slice(o + 1, a),
							n = a - o - 1;}
				}
				o = a, i = 0;
			} else s === 46 && i !== -1 ? ++i : i = -1;
		}
		return r;
	}
	function Wp(e, t) {
		var r = t.dir || t.root, n = t.base || (t.name || '') + (t.ext || '');
		return r ? r === t.root ? r + n : r + e + n : n;
	}
	var Zt = {
		resolve: function () {
			for (
				var e = '', t = !1, r, n = arguments.length - 1;
				n >= -1 && !t;
				n--
			) {
				var o;
				n >= 0
					? o = arguments[n]
					: (r === void 0 && (r = w.cwd()), o = r),
					nt(o),
					o.length !== 0 &&
					(e = o + '/' + e, t = o.charCodeAt(0) === 47);
			}
			return e = wa(e, !t),
				t ? e.length > 0 ? '/' + e : '/' : e.length > 0 ? e : '.';
		},
		normalize: function (e) {
			if (nt(e), e.length === 0) return '.';
			var t = e.charCodeAt(0) === 47,
				r = e.charCodeAt(e.length - 1) === 47;
			return e = wa(e, !t),
				e.length === 0 && !t && (e = '.'),
				e.length > 0 && r && (e += '/'),
				t ? '/' + e : e;
		},
		isAbsolute: function (e) {
			return nt(e), e.length > 0 && e.charCodeAt(0) === 47;
		},
		join: function () {
			if (arguments.length === 0) return '.';
			for (var e, t = 0; t < arguments.length; ++t) {
				var r = arguments[t];
				nt(r), r.length > 0 && (e === void 0 ? e = r : e += '/' + r);
			}
			return e === void 0 ? '.' : Zt.normalize(e);
		},
		relative: function (e, t) {
			if (
				nt(e),
					nt(t),
					e === t || (e = Zt.resolve(e), t = Zt.resolve(t), e === t)
			) return '';
			for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r);
			for (
				var n = e.length, o = n - r, i = 1;
				i < t.length && t.charCodeAt(i) === 47;
				++i
			);
			for (
				var s = t.length, a = s - i, u = o < a ? o : a, l = -1, c = 0;
				c <= u;
				++c
			) {
				if (c === u) {
					if (a > u) {
						if (t.charCodeAt(i + c) === 47) {
							return t.slice(i + c + 1);
						}
						if (c === 0) return t.slice(i + c);
					} else {o > u && (e.charCodeAt(r + c) === 47
							? l = c
							: c === 0 && (l = 0));}
					break;
				}
				var p = e.charCodeAt(r + c), g = t.charCodeAt(i + c);
				if (p !== g) break;
				p === 47 && (l = c);
			}
			var h = '';
			for (c = r + l + 1; c <= n; ++c) {
				(c === n || e.charCodeAt(c) === 47) &&
					(h.length === 0 ? h += '..' : h += '/..');
			}
			return h.length > 0
				? h + t.slice(i + l)
				: (i += l, t.charCodeAt(i) === 47 && ++i, t.slice(i));
		},
		_makeLong: function (e) {
			return e;
		},
		dirname: function (e) {
			if (nt(e), e.length === 0) return '.';
			for (
				var t = e.charCodeAt(0),
					r = t === 47,
					n = -1,
					o = !0,
					i = e.length - 1;
				i >= 1;
				--i
			) {
				if (t = e.charCodeAt(i), t === 47) {
					if (!o) {
						n = i;
						break;
					}
				} else o = !1;
			}
			return n === -1
				? r ? '/' : '.'
				: r && n === 1
				? '//'
				: e.slice(0, n);
		},
		basename: function (e, t) {
			if (t !== void 0 && typeof t != 'string') {
				throw new TypeError('"ext" argument must be a string');
			}
			nt(e);
			var r = 0, n = -1, o = !0, i;
			if (t !== void 0 && t.length > 0 && t.length <= e.length) {
				if (t.length === e.length && t === e) return '';
				var s = t.length - 1, a = -1;
				for (i = e.length - 1; i >= 0; --i) {
					var u = e.charCodeAt(i);
					if (u === 47) {
						if (!o) {
							r = i + 1;
							break;
						}
					} else {a === -1 && (o = !1, a = i + 1),
							s >= 0 && (u === t.charCodeAt(s)
								? --s === -1 && (n = i)
								: (s = -1, n = a));}
				}
				return r === n ? n = a : n === -1 && (n = e.length),
					e.slice(r, n);
			} else {
				for (i = e.length - 1; i >= 0; --i) {
					if (e.charCodeAt(i) === 47) {
						if (!o) {
							r = i + 1;
							break;
						}
					} else n === -1 && (o = !1, n = i + 1);
				}
				return n === -1 ? '' : e.slice(r, n);
			}
		},
		extname: function (e) {
			nt(e);
			for (
				var t = -1, r = 0, n = -1, o = !0, i = 0, s = e.length - 1;
				s >= 0;
				--s
			) {
				var a = e.charCodeAt(s);
				if (a === 47) {
					if (!o) {
						r = s + 1;
						break;
					}
					continue;
				}
				n === -1 && (o = !1, n = s + 1),
					a === 46
						? t === -1 ? t = s : i !== 1 && (i = 1)
						: t !== -1 && (i = -1);
			}
			return t === -1 || n === -1 || i === 0 ||
					i === 1 && t === n - 1 && t === r + 1
				? ''
				: e.slice(t, n);
		},
		format: function (e) {
			if (e === null || typeof e != 'object') {
				throw new TypeError(
					'The "pathObject" argument must be of type Object. Received type ' +
						typeof e,
				);
			}
			return Wp('/', e);
		},
		parse: function (e) {
			nt(e);
			var t = { root: '', dir: '', base: '', ext: '', name: '' };
			if (e.length === 0) return t;
			var r = e.charCodeAt(0), n = r === 47, o;
			n ? (t.root = '/', o = 1) : o = 0;
			for (
				var i = -1, s = 0, a = -1, u = !0, l = e.length - 1, c = 0;
				l >= o;
				--l
			) {
				if (r = e.charCodeAt(l), r === 47) {
					if (!u) {
						s = l + 1;
						break;
					}
					continue;
				}
				a === -1 && (u = !1, a = l + 1),
					r === 46
						? i === -1 ? i = l : c !== 1 && (c = 1)
						: i !== -1 && (c = -1);
			}
			return i === -1 || a === -1 || c === 0 ||
					c === 1 && i === a - 1 && i === s + 1
				? a !== -1 &&
					(s === 0 && n
						? t.base = t.name = e.slice(1, a)
						: t.base = t.name = e.slice(s, a))
				: (s === 0 && n
					? (t.name = e.slice(1, i), t.base = e.slice(1, a))
					: (t.name = e.slice(s, i), t.base = e.slice(s, a)),
					t.ext = e.slice(i, a)),
				s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = '/'),
				t;
		},
		sep: '/',
		delimiter: ':',
		win32: null,
		posix: null,
	};
	Zt.posix = Zt;
	Ea.exports = Zt;
});
var Pa = ee((Fh, Aa) => {
	d();
	f();
	m();
	var ti = Symbol('arg flag'),
		De = class extends Error {
			constructor(t, r) {
				super(t),
					this.name = 'ArgError',
					this.code = r,
					Object.setPrototypeOf(this, De.prototype);
			}
		};
	function Pr(
		e,
		{
			argv: t = w.argv.slice(2),
			permissive: r = !1,
			stopAtPositional: n = !1,
		} = {},
	) {
		if (!e) {
			throw new De(
				'argument specification object is required',
				'ARG_CONFIG_NO_SPEC',
			);
		}
		let o = { _: [] }, i = {}, s = {};
		for (let a of Object.keys(e)) {
			if (!a) {
				throw new De(
					'argument key cannot be an empty string',
					'ARG_CONFIG_EMPTY_KEY',
				);
			}
			if (a[0] !== '-') {
				throw new De(
					`argument key must start with '-' but found: '${a}'`,
					'ARG_CONFIG_NONOPT_KEY',
				);
			}
			if (a.length === 1) {
				throw new De(
					`argument key must have a name; singular '-' keys are not allowed: ${a}`,
					'ARG_CONFIG_NONAME_KEY',
				);
			}
			if (typeof e[a] == 'string') {
				i[a] = e[a];
				continue;
			}
			let u = e[a], l = !1;
			if (
				Array.isArray(u) && u.length === 1 && typeof u[0] == 'function'
			) {
				let [c] = u;
				u = (p, g, h = []) => (h.push(c(p, g, h[h.length - 1])), h),
					l = c === Boolean || c[ti] === !0;
			} else if (typeof u == 'function') {
				l = u === Boolean || u[ti] === !0;
			} else {throw new De(
					`type missing or not a function or valid array type: ${a}`,
					'ARG_CONFIG_VAD_TYPE',
				);}
			if (a[1] !== '-' && a.length > 2) {
				throw new De(
					`short argument keys (with a single hyphen) must have only one character: ${a}`,
					'ARG_CONFIG_SHORTOPT_TOOLONG',
				);
			}
			s[a] = [u, l];
		}
		for (let a = 0, u = t.length; a < u; a++) {
			let l = t[a];
			if (n && o._.length > 0) {
				o._ = o._.concat(t.slice(a));
				break;
			}
			if (l === '--') {
				o._ = o._.concat(t.slice(a + 1));
				break;
			}
			if (l.length > 1 && l[0] === '-') {
				let c = l[1] === '-' || l.length === 2
					? [l]
					: l.slice(1).split('').map((p) => `-${p}`);
				for (let p = 0; p < c.length; p++) {
					let g = c[p],
						[h, b] = g[1] === '-'
							? g.split(/=(.*)/, 2)
							: [g, void 0],
						y = h;
					for (; y in i;) y = i[y];
					if (!(y in s)) {
						if (r) {
							o._.push(g);
							continue;
						} else {throw new De(
								`unknown or unexpected option: ${h}`,
								'ARG_UNKNOWN_OPTION',
							);}
					}
					let [P, S] = s[y];
					if (!S && p + 1 < c.length) {
						throw new De(
							`option requires argument (but was followed by another short argument): ${h}`,
							'ARG_MISSING_REQUIRED_SHORTARG',
						);
					}
					if (S) o[y] = P(!0, y, o[y]);
					else if (b === void 0) {
						if (
							t.length < a + 2 ||
							t[a + 1].length > 1 && t[a + 1][0] === '-' &&
								!(t[a + 1].match(/^-?\d*(\.(?=\d))?\d*$/) &&
									(P === Number ||
										typeof BigInt != 'undefined' &&
											P === BigInt))
						) {
							let v = h === y ? '' : ` (alias for ${y})`;
							throw new De(
								`option requires argument: ${h}${v}`,
								'ARG_MISSING_REQUIRED_LONGARG',
							);
						}
						o[y] = P(t[a + 1], y, o[y]), ++a;
					} else o[y] = P(b, y, o[y]);
				}
			} else o._.push(l);
		}
		return o;
	}
	Pr.flag = (e) => (e[ti] = !0, e);
	Pr.COUNT = Pr.flag((e, t, r) => (r || 0) + 1);
	Pr.ArgError = De;
	Aa.exports = Pr;
});
var Ta = ee((Ih, va) => {
	'use strict';
	d();
	f();
	m();
	va.exports = (e) => {
		let t = e.match(/^[ \t]*(?=\S)/gm);
		return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
	};
});
var ri = ee((_h, Sa) => {
	'use strict';
	d();
	f();
	m();
	var Hp = Ta();
	Sa.exports = (e) => {
		let t = Hp(e);
		if (t === 0) return e;
		let r = new RegExp(`^[ \\t]{${t}}`, 'gm');
		return e.replace(r, '');
	};
});
var Rn = ee((t0, Ma) => {
	'use strict';
	d();
	f();
	m();
	Ma.exports = (e, t = 1, r) => {
		if (
			r = { indent: ' ', includeEmptyLines: !1, ...r },
				typeof e != 'string'
		) {
			throw new TypeError(
				`Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
			);
		}
		if (typeof t != 'number') {
			throw new TypeError(
				`Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
			);
		}
		if (typeof r.indent != 'string') {
			throw new TypeError(
				`Expected \`options.indent\` to be a \`string\`, got \`${typeof r
					.indent}\``,
			);
		}
		if (t === 0) return e;
		let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
		return e.replace(n, r.indent.repeat(t));
	};
});
var Ra = ee((l0, Oa) => {
	'use strict';
	d();
	f();
	m();
	Oa.exports = ({ onlyFirst: e = !1 } = {}) => {
		let t = [
			'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
			'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
		].join('|');
		return new RegExp(t, e ? void 0 : 'g');
	};
});
var Cn = ee((m0, Ca) => {
	'use strict';
	d();
	f();
	m();
	var rf = Ra();
	Ca.exports = (e) => typeof e == 'string' ? e.replace(rf(), '') : e;
});
var Un = ee((aw, Ya) => {
	'use strict';
	d();
	f();
	m();
	Ya.exports = function () {
		function e(t, r, n, o, i) {
			return t < r || n < r ? t > n ? n + 1 : t + 1 : o === i ? r : r + 1;
		}
		return function (t, r) {
			if (t === r) return 0;
			if (t.length > r.length) {
				var n = t;
				t = r, r = n;
			}
			for (
				var o = t.length, i = r.length;
				o > 0 && t.charCodeAt(o - 1) === r.charCodeAt(i - 1);
			) o--, i--;
			for (var s = 0; s < o && t.charCodeAt(s) === r.charCodeAt(s);) s++;
			if (o -= s, i -= s, o === 0 || i < 3) return i;
			var a = 0, u, l, c, p, g, h, b, y, P, S, v, T, A = [];
			for (u = 0; u < o; u++) A.push(u + 1), A.push(t.charCodeAt(s + u));
			for (var F = A.length - 1; a < i - 3;) {
				for (
					P = r.charCodeAt(s + (l = a)),
						S = r.charCodeAt(s + (c = a + 1)),
						v = r.charCodeAt(s + (p = a + 2)),
						T = r.charCodeAt(s + (g = a + 3)),
						h = a += 4,
						u = 0;
					u < F;
					u += 2
				) {
					b = A[u],
						y = A[u + 1],
						l = e(b, l, c, P, y),
						c = e(l, c, p, S, y),
						p = e(c, p, g, v, y),
						h = e(p, g, h, T, y),
						A[u] = h,
						g = p,
						p = c,
						c = l,
						l = b;
				}
			}
			for (; a < i;) {
				for (
					P = r.charCodeAt(s + (l = a)), h = ++a, u = 0;
					u < F;
					u += 2
				) b = A[u], A[u] = h = e(b, l, h, P, A[u + 1]), l = b;
			}
			return h;
		};
	}();
});
var ru = ee(() => {
	d();
	f();
	m();
});
var ou = ee((eE, xi) => {
	'use strict';
	d();
	f();
	m();
	var im = Object.prototype.hasOwnProperty, Oe = '~';
	function _r() {}
	Object.create &&
		(_r.prototype = Object.create(null), new _r().__proto__ || (Oe = !1));
	function sm(e, t, r) {
		this.fn = e, this.context = t, this.once = r || !1;
	}
	function nu(e, t, r, n, o) {
		if (typeof r != 'function') {
			throw new TypeError('The listener must be a function');
		}
		var i = new sm(r, n || e, o), s = Oe ? Oe + t : t;
		return e._events[s]
			? e._events[s].fn
				? e._events[s] = [e._events[s], i]
				: e._events[s].push(i)
			: (e._events[s] = i, e._eventsCount++),
			e;
	}
	function Qn(e, t) {
		--e._eventsCount === 0 ? e._events = new _r() : delete e._events[t];
	}
	function ve() {
		this._events = new _r(), this._eventsCount = 0;
	}
	ve.prototype.eventNames = function () {
		var e = [], t, r;
		if (this._eventsCount === 0) return e;
		for (r in t = this._events) {
			im.call(t, r) && e.push(Oe ? r.slice(1) : r);
		}
		return Object.getOwnPropertySymbols
			? e.concat(Object.getOwnPropertySymbols(t))
			: e;
	};
	ve.prototype.listeners = function (e) {
		var t = Oe ? Oe + e : e, r = this._events[t];
		if (!r) return [];
		if (r.fn) return [r.fn];
		for (var n = 0, o = r.length, i = new Array(o); n < o; n++) {
			i[n] = r[n].fn;
		}
		return i;
	};
	ve.prototype.listenerCount = function (e) {
		var t = Oe ? Oe + e : e, r = this._events[t];
		return r ? r.fn ? 1 : r.length : 0;
	};
	ve.prototype.emit = function (e, t, r, n, o, i) {
		var s = Oe ? Oe + e : e;
		if (!this._events[s]) return !1;
		var a = this._events[s], u = arguments.length, l, c;
		if (a.fn) {
			switch (a.once && this.removeListener(e, a.fn, void 0, !0), u) {
				case 1:
					return a.fn.call(a.context), !0;
				case 2:
					return a.fn.call(a.context, t), !0;
				case 3:
					return a.fn.call(a.context, t, r), !0;
				case 4:
					return a.fn.call(a.context, t, r, n), !0;
				case 5:
					return a.fn.call(a.context, t, r, n, o), !0;
				case 6:
					return a.fn.call(a.context, t, r, n, o, i), !0;
			}
			for (c = 1, l = new Array(u - 1); c < u; c++) {
				l[c - 1] = arguments[c];
			}
			a.fn.apply(a.context, l);
		} else {
			var p = a.length, g;
			for (c = 0; c < p; c++) {
				switch (
					a[c].once && this.removeListener(e, a[c].fn, void 0, !0), u
				) {
					case 1:
						a[c].fn.call(a[c].context);
						break;
					case 2:
						a[c].fn.call(a[c].context, t);
						break;
					case 3:
						a[c].fn.call(a[c].context, t, r);
						break;
					case 4:
						a[c].fn.call(a[c].context, t, r, n);
						break;
					default:
						if (!l) {
							for (
								g = 1, l = new Array(u - 1);
								g < u;
								g++
							) l[g - 1] = arguments[g];
						}
						a[c].fn.apply(a[c].context, l);
				}
			}
		}
		return !0;
	};
	ve.prototype.on = function (e, t, r) {
		return nu(this, e, t, r, !1);
	};
	ve.prototype.once = function (e, t, r) {
		return nu(this, e, t, r, !0);
	};
	ve.prototype.removeListener = function (e, t, r, n) {
		var o = Oe ? Oe + e : e;
		if (!this._events[o]) return this;
		if (!t) return Qn(this, o), this;
		var i = this._events[o];
		if (i.fn) {
			i.fn === t && (!n || i.once) && (!r || i.context === r) &&
				Qn(this, o);
		} else {
			for (var s = 0, a = [], u = i.length; s < u; s++) {
				(i[s].fn !== t || n && !i[s].once || r && i[s].context !== r) &&
					a.push(i[s]);
			}
			a.length
				? this._events[o] = a.length === 1 ? a[0] : a
				: Qn(this, o);
		}
		return this;
	};
	ve.prototype.removeAllListeners = function (e) {
		var t;
		return e
			? (t = Oe ? Oe + e : e, this._events[t] && Qn(this, t))
			: (this._events = new _r(), this._eventsCount = 0),
			this;
	};
	ve.prototype.off = ve.prototype.removeListener;
	ve.prototype.addListener = ve.prototype.on;
	ve.prefixed = Oe;
	ve.EventEmitter = ve;
	typeof xi < 'u' && (xi.exports = ve);
});
var iu = ee((Ai, Pi) => {
	d();
	f();
	m();
	(function (e, t) {
		typeof require == 'function' && typeof Ai == 'object' &&
			typeof Pi == 'object'
			? Pi.exports = t()
			: e.pluralize = t();
	})(Ai, function () {
		var e = [], t = [], r = {}, n = {}, o = {};
		function i(h) {
			return typeof h == 'string' ? new RegExp('^' + h + '$', 'i') : h;
		}
		function s(h, b) {
			return h === b
				? b
				: h === h.toLowerCase()
				? b.toLowerCase()
				: h === h.toUpperCase()
				? b.toUpperCase()
				: h[0] === h[0].toUpperCase()
				? b.charAt(0).toUpperCase() + b.substr(1).toLowerCase()
				: b.toLowerCase();
		}
		function a(h, b) {
			return h.replace(/\$(\d{1,2})/g, function (y, P) {
				return b[P] || '';
			});
		}
		function u(h, b) {
			return h.replace(b[0], function (y, P) {
				var S = a(b[1], arguments);
				return s(y === '' ? h[P - 1] : y, S);
			});
		}
		function l(h, b, y) {
			if (!h.length || r.hasOwnProperty(h)) return b;
			for (var P = y.length; P--;) {
				var S = y[P];
				if (S[0].test(b)) return u(b, S);
			}
			return b;
		}
		function c(h, b, y) {
			return function (P) {
				var S = P.toLowerCase();
				return b.hasOwnProperty(S)
					? s(P, S)
					: h.hasOwnProperty(S)
					? s(P, h[S])
					: l(S, P, y);
			};
		}
		function p(h, b, y, P) {
			return function (S) {
				var v = S.toLowerCase();
				return b.hasOwnProperty(v)
					? !0
					: h.hasOwnProperty(v)
					? !1
					: l(v, v, y) === v;
			};
		}
		function g(h, b, y) {
			var P = b === 1 ? g.singular(h) : g.plural(h);
			return (y ? b + ' ' : '') + P;
		}
		return g.plural = c(o, n, e),
			g.isPlural = p(o, n, e),
			g.singular = c(n, o, t),
			g.isSingular = p(n, o, t),
			g.addPluralRule = function (h, b) {
				e.push([i(h), b]);
			},
			g.addSingularRule = function (h, b) {
				t.push([i(h), b]);
			},
			g.addUncountableRule = function (h) {
				if (typeof h == 'string') {
					r[h.toLowerCase()] = !0;
					return;
				}
				g.addPluralRule(h, '$0'), g.addSingularRule(h, '$0');
			},
			g.addIrregularRule = function (h, b) {
				b = b.toLowerCase(), h = h.toLowerCase(), o[h] = b, n[b] = h;
			},
			[
				['I', 'we'],
				['me', 'us'],
				['he', 'they'],
				['she', 'they'],
				['them', 'them'],
				['myself', 'ourselves'],
				['yourself', 'yourselves'],
				['itself', 'themselves'],
				['herself', 'themselves'],
				['himself', 'themselves'],
				['themself', 'themselves'],
				['is', 'are'],
				['was', 'were'],
				['has', 'have'],
				['this', 'these'],
				['that', 'those'],
				['echo', 'echoes'],
				['dingo', 'dingoes'],
				['volcano', 'volcanoes'],
				['tornado', 'tornadoes'],
				['torpedo', 'torpedoes'],
				['genus', 'genera'],
				['viscus', 'viscera'],
				['stigma', 'stigmata'],
				['stoma', 'stomata'],
				['dogma', 'dogmata'],
				['lemma', 'lemmata'],
				['schema', 'schemata'],
				['anathema', 'anathemata'],
				['ox', 'oxen'],
				['axe', 'axes'],
				['die', 'dice'],
				['yes', 'yeses'],
				['foot', 'feet'],
				['eave', 'eaves'],
				['goose', 'geese'],
				['tooth', 'teeth'],
				['quiz', 'quizzes'],
				['human', 'humans'],
				['proof', 'proofs'],
				['carve', 'carves'],
				['valve', 'valves'],
				['looey', 'looies'],
				['thief', 'thieves'],
				['groove', 'grooves'],
				['pickaxe', 'pickaxes'],
				['passerby', 'passersby'],
			].forEach(function (h) {
				return g.addIrregularRule(h[0], h[1]);
			}),
			[
				[/s?$/i, 's'],
				[/[^\u0000-\u007F]$/i, '$0'],
				[/([^aeiou]ese)$/i, '$1'],
				[/(ax|test)is$/i, '$1es'],
				[/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
				[/(e[mn]u)s?$/i, '$1s'],
				[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
				[
					/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
					'$1i',
				],
				[/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
				[/(seraph|cherub)(?:im)?$/i, '$1im'],
				[/(her|at|gr)o$/i, '$1oes'],
				[
					/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
					'$1a',
				],
				[
					/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
					'$1a',
				],
				[/sis$/i, 'ses'],
				[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
				[/([^aeiouy]|qu)y$/i, '$1ies'],
				[/([^ch][ieo][ln])ey$/i, '$1ies'],
				[/(x|ch|ss|sh|zz)$/i, '$1es'],
				[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
				[/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
				[/(pe)(?:rson|ople)$/i, '$1ople'],
				[/(child)(?:ren)?$/i, '$1ren'],
				[/eaux$/i, '$0'],
				[/m[ae]n$/i, 'men'],
				['thou', 'you'],
			].forEach(function (h) {
				return g.addPluralRule(h[0], h[1]);
			}),
			[
				[/s$/i, ''],
				[/(ss)$/i, '$1'],
				[
					/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,
					'$1fe',
				],
				[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
				[/ies$/i, 'y'],
				[
					/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
					'$1ie',
				],
				[/\b(mon|smil)ies$/i, '$1ey'],
				[/\b((?:tit)?m|l)ice$/i, '$1ouse'],
				[/(seraph|cherub)im$/i, '$1'],
				[
					/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
					'$1',
				],
				[
					/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,
					'$1sis',
				],
				[/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
				[/(test)(?:is|es)$/i, '$1is'],
				[
					/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
					'$1us',
				],
				[
					/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
					'$1um',
				],
				[
					/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
					'$1on',
				],
				[/(alumn|alg|vertebr)ae$/i, '$1a'],
				[/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
				[/(matr|append)ices$/i, '$1ix'],
				[/(pe)(rson|ople)$/i, '$1rson'],
				[/(child)ren$/i, '$1'],
				[/(eau)x?$/i, '$1'],
				[/men$/i, 'man'],
			].forEach(function (h) {
				return g.addSingularRule(h[0], h[1]);
			}),
			[
				'adulthood',
				'advice',
				'agenda',
				'aid',
				'aircraft',
				'alcohol',
				'ammo',
				'analytics',
				'anime',
				'athletics',
				'audio',
				'bison',
				'blood',
				'bream',
				'buffalo',
				'butter',
				'carp',
				'cash',
				'chassis',
				'chess',
				'clothing',
				'cod',
				'commerce',
				'cooperation',
				'corps',
				'debris',
				'diabetes',
				'digestion',
				'elk',
				'energy',
				'equipment',
				'excretion',
				'expertise',
				'firmware',
				'flounder',
				'fun',
				'gallows',
				'garbage',
				'graffiti',
				'hardware',
				'headquarters',
				'health',
				'herpes',
				'highjinks',
				'homework',
				'housework',
				'information',
				'jeans',
				'justice',
				'kudos',
				'labour',
				'literature',
				'machinery',
				'mackerel',
				'mail',
				'media',
				'mews',
				'moose',
				'music',
				'mud',
				'manga',
				'news',
				'only',
				'personnel',
				'pike',
				'plankton',
				'pliers',
				'police',
				'pollution',
				'premises',
				'rain',
				'research',
				'rice',
				'salmon',
				'scissors',
				'series',
				'sewage',
				'shambles',
				'shrimp',
				'software',
				'species',
				'staff',
				'swine',
				'tennis',
				'traffic',
				'transportation',
				'trout',
				'tuna',
				'wealth',
				'welfare',
				'whiting',
				'wildebeest',
				'wildlife',
				'you',
				/pok[eé]mon$/i,
				/[^aeiou]ese$/i,
				/deer$/i,
				/fish$/i,
				/measles$/i,
				/o[iu]s$/i,
				/pox$/i,
				/sheep$/i,
			].forEach(g.addUncountableRule),
			g;
	});
});
var Iu = ee((Mv, Cu) => {
	'use strict';
	d();
	f();
	m();
	Cu.exports = (e) => Object.prototype.toString.call(e) === '[object RegExp]';
});
var ku = ee((Cv, Du) => {
	'use strict';
	d();
	f();
	m();
	Du.exports = (e) => {
		let t = typeof e;
		return e !== null && (t === 'object' || t === 'function');
	};
});
var Nu = ee((ki) => {
	'use strict';
	d();
	f();
	m();
	Object.defineProperty(ki, '__esModule', { value: !0 });
	ki.default = (e) =>
		Object.getOwnPropertySymbols(e).filter((t) =>
			Object.prototype.propertyIsEnumerable.call(e, t)
		);
});
var Xu = ee((rM, xd) => {
	xd.exports = {
		name: '@prisma/client',
		version: '4.15.0',
		description:
			'Prisma Client is an auto-generated, type-safe and modern JavaScript/TypeScript ORM for Node.js that\'s tailored to your data. Supports MySQL, PostgreSQL, MariaDB, SQLite databases.',
		keywords: [
			'orm',
			'prisma2',
			'prisma',
			'client',
			'query',
			'database',
			'sql',
			'postgres',
			'postgresql',
			'mysql',
			'sqlite',
			'mariadb',
			'mssql',
			'typescript',
			'query-builder',
		],
		main: 'index.js',
		browser: 'index-browser.js',
		types: 'index.d.ts',
		license: 'Apache-2.0',
		engines: { node: '>=14.17' },
		homepage: 'https://www.prisma.io',
		repository: {
			type: 'git',
			url: 'https://github.com/prisma/prisma.git',
			directory: 'packages/client',
		},
		author: 'Tim Suchanek <suchanek@prisma.io>',
		bugs: 'https://github.com/prisma/prisma/issues',
		scripts: {
			dev: 'DEV=true node -r esbuild-register helpers/build.ts',
			build: 'node -r esbuild-register helpers/build.ts',
			test: 'jest --silent',
			'test:e2e': 'node -r esbuild-register tests/e2e/_utils/run.ts',
			'test:functional':
				'node -r esbuild-register helpers/functional-test/run-tests.ts',
			'test:memory': 'node -r esbuild-register helpers/memory-tests.ts',
			'test:functional:code':
				'node -r esbuild-register helpers/functional-test/run-tests.ts --no-types',
			'test:functional:types':
				'node -r esbuild-register helpers/functional-test/run-tests.ts --types-only',
			'test-notypes':
				'jest --silent --testPathIgnorePatterns src/__tests__/types/types.test.ts',
			generate: 'node scripts/postinstall.js',
			postinstall: 'node scripts/postinstall.js',
			prepublishOnly: 'pnpm run build',
			'new-test':
				'NODE_OPTIONS=\'-r ts-node/register\' yo ./helpers/generator-test/index.ts',
		},
		files: [
			'README.md',
			'runtime',
			'!runtime/*.map',
			'scripts',
			'generator-build',
			'edge.js',
			'edge.d.ts',
			'index.js',
			'index.d.ts',
			'index-browser.js',
		],
		devDependencies: {
			'@codspeed/benchmark.js-plugin': '1.1.0',
			'@faker-js/faker': '8.0.1',
			'@fast-check/jest': '1.6.2',
			'@jest/create-cache-key-function': '29.5.0',
			'@jest/globals': '29.5.0',
			'@jest/test-sequencer': '29.5.0',
			'@opentelemetry/api': '1.4.1',
			'@opentelemetry/context-async-hooks': '1.13.0',
			'@opentelemetry/instrumentation': '0.39.1',
			'@opentelemetry/resources': '1.13.0',
			'@opentelemetry/sdk-trace-base': '1.13.0',
			'@opentelemetry/semantic-conventions': '1.13.0',
			'@prisma/debug': 'workspace:*',
			'@prisma/engines': 'workspace:*',
			'@prisma/fetch-engine': 'workspace:*',
			'@prisma/generator-helper': 'workspace:*',
			'@prisma/get-platform': 'workspace:*',
			'@prisma/instrumentation': 'workspace:*',
			'@prisma/internals': 'workspace:*',
			'@prisma/migrate': 'workspace:*',
			'@prisma/mini-proxy': '0.7.0',
			'@swc-node/register': '1.6.5',
			'@swc/core': '1.3.32',
			'@swc/jest': '0.2.26',
			'@timsuchanek/copy': '1.4.5',
			'@types/debug': '4.1.8',
			'@types/fs-extra': '9.0.13',
			'@types/jest': '29.5.1',
			'@types/js-levenshtein': '1.1.1',
			'@types/mssql': '8.1.2',
			'@types/node': '18.16.14',
			'@types/pg': '8.10.1',
			'@types/yeoman-generator': '5.2.11',
			arg: '5.0.2',
			benchmark: '2.1.4',
			'ci-info': '3.8.0',
			'decimal.js': '10.4.3',
			'env-paths': '2.2.1',
			esbuild: '0.15.13',
			execa: '5.1.1',
			'expect-type': '0.15.0',
			'flat-map-polyfill': '0.3.8',
			'fs-extra': '11.1.0',
			'get-own-enumerable-property-symbols': '3.0.2',
			'get-stream': '6.0.1',
			globby: '11.1.0',
			'indent-string': '4.0.0',
			'is-obj': '2.0.0',
			'is-regexp': '2.1.0',
			jest: '29.5.0',
			'jest-junit': '16.0.0',
			'jest-serializer-ansi-escapes': '2.0.1',
			'jest-snapshot': '29.5.0',
			'js-levenshtein': '1.1.6',
			kleur: '4.1.5',
			klona: '2.0.6',
			'lz-string': '1.5.0',
			mariadb: '3.0.2',
			memfs: '3.5.1',
			mssql: '9.1.1',
			'new-github-issue-url': '0.2.1',
			'node-fetch': '2.6.11',
			'p-retry': '4.6.2',
			pg: '8.9.0',
			'pkg-up': '3.1.0',
			pluralize: '8.0.0',
			resolve: '1.22.1',
			rimraf: '3.0.2',
			'simple-statistics': '7.8.2',
			'sort-keys': '4.2.0',
			'source-map-support': '0.5.21',
			'sql-template-tag': '5.0.3',
			'stacktrace-parser': '0.1.10',
			'strip-ansi': '6.0.1',
			'strip-indent': '3.0.0',
			'ts-node': '10.9.1',
			'ts-pattern': '4.3.0',
			tsd: '0.28.1',
			typescript: '4.9.5',
			undici: '5.22.0',
			'yeoman-generator': '5.9.0',
			yo: '4.3.1',
			zx: '7.2.2',
		},
		peerDependencies: { prisma: '*' },
		peerDependenciesMeta: { prisma: { optional: !0 } },
		dependencies: {
			'@prisma/engines-version':
				'4.15.0-28.8fbc245156db7124f997f4cecdd8d1219e360944',
		},
		sideEffects: !1,
	};
});
var rc = ee((I2, Fo) => {
	d();
	f();
	m();
	var tc = function () {
		var e = String.fromCharCode,
			t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
			r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
			n = {};
		function o(s, a) {
			if (!n[s]) {
				n[s] = {};
				for (var u = 0; u < s.length; u++) n[s][s.charAt(u)] = u;
			}
			return n[s][a];
		}
		var i = {
			compressToBase64: function (s) {
				if (s == null) return '';
				var a = i._compress(s, 6, function (u) {
					return t.charAt(u);
				});
				switch (a.length % 4) {
					default:
					case 0:
						return a;
					case 1:
						return a + '===';
					case 2:
						return a + '==';
					case 3:
						return a + '=';
				}
			},
			decompressFromBase64: function (s) {
				return s == null
					? ''
					: s == ''
					? null
					: i._decompress(s.length, 32, function (a) {
						return o(t, s.charAt(a));
					});
			},
			compressToUTF16: function (s) {
				return s == null ? '' : i._compress(s, 15, function (a) {
					return e(a + 32);
				}) + ' ';
			},
			decompressFromUTF16: function (s) {
				return s == null
					? ''
					: s == ''
					? null
					: i._decompress(s.length, 16384, function (a) {
						return s.charCodeAt(a) - 32;
					});
			},
			compressToUint8Array: function (s) {
				for (
					var a = i.compress(s),
						u = new Uint8Array(a.length * 2),
						l = 0,
						c = a.length;
					l < c;
					l++
				) {
					var p = a.charCodeAt(l);
					u[l * 2] = p >>> 8, u[l * 2 + 1] = p % 256;
				}
				return u;
			},
			decompressFromUint8Array: function (s) {
				if (s == null) return i.decompress(s);
				for (
					var a = new Array(s.length / 2), u = 0, l = a.length;
					u < l;
					u++
				) a[u] = s[u * 2] * 256 + s[u * 2 + 1];
				var c = [];
				return a.forEach(function (p) {
					c.push(e(p));
				}),
					i.decompress(c.join(''));
			},
			compressToEncodedURIComponent: function (s) {
				return s == null ? '' : i._compress(s, 6, function (a) {
					return r.charAt(a);
				});
			},
			decompressFromEncodedURIComponent: function (s) {
				return s == null
					? ''
					: s == ''
					? null
					: (s = s.replace(/ /g, '+'),
						i._decompress(s.length, 32, function (a) {
							return o(r, s.charAt(a));
						}));
			},
			compress: function (s) {
				return i._compress(s, 16, function (a) {
					return e(a);
				});
			},
			_compress: function (s, a, u) {
				if (s == null) return '';
				var l,
					c,
					p = {},
					g = {},
					h = '',
					b = '',
					y = '',
					P = 2,
					S = 3,
					v = 2,
					T = [],
					A = 0,
					F = 0,
					C;
				for (C = 0; C < s.length; C += 1) {
					if (
						h = s.charAt(C),
							Object.prototype.hasOwnProperty.call(p, h) ||
							(p[h] = S++, g[h] = !0),
							b = y + h,
							Object.prototype.hasOwnProperty.call(p, b)
					) y = b;
					else {
						if (Object.prototype.hasOwnProperty.call(g, y)) {
							if (y.charCodeAt(0) < 256) {
								for (l = 0; l < v; l++) {
									A = A << 1,
										F == a - 1
											? (F = 0, T.push(u(A)), A = 0)
											: F++;
								}
								for (c = y.charCodeAt(0), l = 0; l < 8; l++) {
									A = A << 1 | c & 1,
										F == a - 1
											? (F = 0, T.push(u(A)), A = 0)
											: F++,
										c = c >> 1;
								}
							} else {
								for (c = 1, l = 0; l < v; l++) {
									A = A << 1 | c,
										F == a - 1
											? (F = 0, T.push(u(A)), A = 0)
											: F++,
										c = 0;
								}
								for (c = y.charCodeAt(0), l = 0; l < 16; l++) {
									A = A << 1 | c & 1,
										F == a - 1
											? (F = 0, T.push(u(A)), A = 0)
											: F++,
										c = c >> 1;
								}
							}
							P--,
								P == 0 && (P = Math.pow(2, v), v++),
								delete g[y];
						} else {for (c = p[y], l = 0; l < v; l++) {
								A = A << 1 | c & 1,
									F == a - 1
										? (F = 0, T.push(u(A)), A = 0)
										: F++,
									c = c >> 1;
							}}
						P--,
							P == 0 && (P = Math.pow(2, v), v++),
							p[b] = S++,
							y = String(h);
					}
				}
				if (y !== '') {
					if (Object.prototype.hasOwnProperty.call(g, y)) {
						if (y.charCodeAt(0) < 256) {
							for (l = 0; l < v; l++) {
								A = A << 1,
									F == a - 1
										? (F = 0, T.push(u(A)), A = 0)
										: F++;
							}
							for (c = y.charCodeAt(0), l = 0; l < 8; l++) {
								A = A << 1 | c & 1,
									F == a - 1
										? (F = 0, T.push(u(A)), A = 0)
										: F++,
									c = c >> 1;
							}
						} else {
							for (c = 1, l = 0; l < v; l++) {
								A = A << 1 | c,
									F == a - 1
										? (F = 0, T.push(u(A)), A = 0)
										: F++,
									c = 0;
							}
							for (c = y.charCodeAt(0), l = 0; l < 16; l++) {
								A = A << 1 | c & 1,
									F == a - 1
										? (F = 0, T.push(u(A)), A = 0)
										: F++,
									c = c >> 1;
							}
						}
						P--, P == 0 && (P = Math.pow(2, v), v++), delete g[y];
					} else {for (c = p[y], l = 0; l < v; l++) {
							A = A << 1 | c & 1,
								F == a - 1 ? (F = 0, T.push(u(A)), A = 0) : F++,
								c = c >> 1;
						}}
					P--, P == 0 && (P = Math.pow(2, v), v++);
				}
				for (c = 2, l = 0; l < v; l++) {
					A = A << 1 | c & 1,
						F == a - 1 ? (F = 0, T.push(u(A)), A = 0) : F++,
						c = c >> 1;
				}
				for (;;) {
					if (A = A << 1, F == a - 1) {
						T.push(u(A));
						break;
					} else F++;
				}
				return T.join('');
			},
			decompress: function (s) {
				return s == null
					? ''
					: s == ''
					? null
					: i._decompress(s.length, 32768, function (a) {
						return s.charCodeAt(a);
					});
			},
			_decompress: function (s, a, u) {
				var l = [],
					c,
					p = 4,
					g = 4,
					h = 3,
					b = '',
					y = [],
					P,
					S,
					v,
					T,
					A,
					F,
					C,
					I = { val: u(0), position: a, index: 1 };
				for (P = 0; P < 3; P += 1) l[P] = P;
				for (v = 0, A = Math.pow(2, 2), F = 1; F != A;) {
					T = I.val & I.position,
						I.position >>= 1,
						I.position == 0 &&
						(I.position = a, I.val = u(I.index++)),
						v |= (T > 0 ? 1 : 0) * F,
						F <<= 1;
				}
				switch (c = v) {
					case 0:
						for (v = 0, A = Math.pow(2, 8), F = 1; F != A;) {
							T = I.val & I.position,
								I.position >>= 1,
								I.position == 0 &&
								(I.position = a, I.val = u(I.index++)),
								v |= (T > 0 ? 1 : 0) * F,
								F <<= 1;
						}
						C = e(v);
						break;
					case 1:
						for (v = 0, A = Math.pow(2, 16), F = 1; F != A;) {
							T = I.val & I.position,
								I.position >>= 1,
								I.position == 0 &&
								(I.position = a, I.val = u(I.index++)),
								v |= (T > 0 ? 1 : 0) * F,
								F <<= 1;
						}
						C = e(v);
						break;
					case 2:
						return '';
				}
				for (l[3] = C, S = C, y.push(C);;) {
					if (I.index > s) return '';
					for (v = 0, A = Math.pow(2, h), F = 1; F != A;) {
						T = I.val & I.position,
							I.position >>= 1,
							I.position == 0 &&
							(I.position = a, I.val = u(I.index++)),
							v |= (T > 0 ? 1 : 0) * F,
							F <<= 1;
					}
					switch (C = v) {
						case 0:
							for (v = 0, A = Math.pow(2, 8), F = 1; F != A;) {
								T = I.val & I.position,
									I.position >>= 1,
									I.position == 0 &&
									(I.position = a, I.val = u(I.index++)),
									v |= (T > 0 ? 1 : 0) * F,
									F <<= 1;
							}
							l[g++] = e(v), C = g - 1, p--;
							break;
						case 1:
							for (v = 0, A = Math.pow(2, 16), F = 1; F != A;) {
								T = I.val & I.position,
									I.position >>= 1,
									I.position == 0 &&
									(I.position = a, I.val = u(I.index++)),
									v |= (T > 0 ? 1 : 0) * F,
									F <<= 1;
							}
							l[g++] = e(v), C = g - 1, p--;
							break;
						case 2:
							return y.join('');
					}
					if (p == 0 && (p = Math.pow(2, h), h++), l[C]) b = l[C];
					else if (C === g) b = S + S.charAt(0);
					else return null;
					y.push(b),
						l[g++] = S + b.charAt(0),
						p--,
						S = b,
						p == 0 && (p = Math.pow(2, h), h++);
				}
			},
		};
		return i;
	}();
	typeof Fo != 'undefined' && Fo != null
		? Fo.exports = tc
		: typeof angular != 'undefined' && angular != null &&
			angular.module('LZString', []).factory('LZString', function () {
				return tc;
			});
});
var Tg = {};
un(Tg, {
	DMMF: () => Ge,
	DMMFClass: () => Mt,
	Debug: () => Zo,
	Decimal: () => Le,
	Extensions: () => _o,
	MetricsClient: () => tr,
	NotFoundError: () => Qe,
	PrismaClientInitializationError: () => ke,
	PrismaClientKnownRequestError: () => Ee,
	PrismaClientRustPanicError: () => mt,
	PrismaClientUnknownRequestError: () => Je,
	PrismaClientValidationError: () => ce,
	Sql: () => Ue,
	Types: () => $o,
	decompressFromBase64: () => oc,
	defineDmmfProperty: () => Na,
	empty: () => Ml,
	getPrismaClient: () => Xl,
	join: () => Sl,
	makeDocument: () => no,
	makeStrictEnum: () => ec,
	objectEnumValues: () => or,
	raw: () => rs,
	sqltag: () => ns,
	transformDocument: () => ju,
	unpack: () => oo,
	warnEnvConflicts: () => void 0,
	warnOnce: () => Mr,
});
module.exports = bc(Tg);
d();
f();
m();
var _o = {};
un(_o, { defineExtension: () => ks, getExtensionContext: () => Ns });
d();
f();
m();
d();
f();
m();
function ks(e) {
	return typeof e == 'function' ? e : (t) => t.$extends(e);
}
d();
f();
m();
function Ns(e) {
	return e;
}
var $o = {};
un($o, { Extensions: () => _s, Public: () => $s, Utils: () => js });
d();
f();
m();
var _s = {};
d();
f();
m();
var $s = {};
d();
f();
m();
var js = {};
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
var Lo, Ls, Bs, Us, qs = !0;
typeof w != 'undefined' &&
	({ FORCE_COLOR: Lo, NODE_DISABLE_COLORS: Ls, NO_COLOR: Bs, TERM: Us } =
		w.env || {},
		qs = w.stdout && w.stdout.isTTY);
var zc = {
	enabled: !Ls && Bs == null && Us !== 'dumb' &&
		(Lo != null && Lo !== '0' || qs),
};
function re(e, t) {
	let r = new RegExp(`\\x1b\\[${t}m`, 'g'),
		n = `\x1B[${e}m`,
		o = `\x1B[${t}m`;
	return function (i) {
		return !zc.enabled || i == null
			? i
			: n + (~('' + i).indexOf(o) ? i.replace(r, o + n) : i) + o;
	};
}
var py = re(0, 0),
	K = re(1, 22),
	X = re(2, 22),
	fy = re(3, 23),
	Vs = re(4, 24),
	my = re(7, 27),
	dy = re(8, 28),
	gy = re(9, 29),
	yy = re(30, 39),
	Z = re(31, 39),
	Q = re(32, 39),
	fn = re(33, 39),
	Wt = re(34, 39),
	hy = re(35, 39),
	wt = re(36, 39),
	Er = re(37, 39),
	mn = re(90, 39),
	by = re(90, 39),
	wy = re(40, 49),
	Ey = re(41, 49),
	xy = re(42, 49),
	Ay = re(43, 49),
	Py = re(44, 49),
	vy = re(45, 49),
	Ty = re(46, 49),
	Sy = re(47, 49);
d();
f();
m();
var On = ue(ga()), Jp = 100, Fn = [], ya, ha;
typeof w != 'undefined' &&
	typeof ((ya = w.stderr) == null ? void 0 : ya.write) != 'function' &&
	(On.default.log = (ha = console.debug) != null ? ha : console.log);
function Kp(e) {
	let t = (0, On.default)(e),
		r = Object.assign(
			(
				...n
			) => (t.log = r.log,
				n.length !== 0 && Fn.push([e, ...n]),
				Fn.length > Jp && Fn.shift(),
				t('', ...n)),
			t,
		);
	return r;
}
var Zo = Object.assign(Kp, On.default);
function ba() {
	Fn.length = 0;
}
var Ie = Zo;
d();
f();
m();
var xa = 'library';
function ei(e) {
	let t = Qp();
	return t ||
		((e == null ? void 0 : e.config.engineType) === 'library'
			? 'library'
			: (e == null ? void 0 : e.config.engineType) === 'binary'
			? 'binary'
			: xa);
}
function Qp() {
	let e = w.env.PRISMA_CLIENT_ENGINE_TYPE;
	return e === 'library' ? 'library' : e === 'binary' ? 'binary' : void 0;
}
d();
f();
m();
var zp = ue(Pa()), Yp = ue(ri());
function vr(e) {
	return e instanceof Error;
}
d();
f();
m();
function ni(e) {
	var r;
	let t = w.env.PRISMA_ENGINE_PROTOCOL;
	if (t === 'json' || t == 'graphql') return t;
	if (t !== void 0) {
		throw new Error(
			`Invalid PRISMA_ENGINE_PROTOCOL env variable value. Expected 'graphql' or 'json', got '${t}'`,
		);
	}
	return (r = e == null ? void 0 : e.previewFeatures) != null &&
			r.includes('jsonProtocol')
		? 'json'
		: 'graphql';
}
d();
f();
m();
d();
f();
m();
var Ge;
((t) => {
	let e;
	((
		T,
	) => (T.findUnique = 'findUnique',
		T.findUniqueOrThrow = 'findUniqueOrThrow',
		T.findFirst = 'findFirst',
		T.findFirstOrThrow = 'findFirstOrThrow',
		T.findMany = 'findMany',
		T.create = 'create',
		T.createMany = 'createMany',
		T.update = 'update',
		T.updateMany = 'updateMany',
		T.upsert = 'upsert',
		T.delete = 'delete',
		T.deleteMany = 'deleteMany',
		T.groupBy = 'groupBy',
		T.count = 'count',
		T.aggregate = 'aggregate',
		T.findRaw = 'findRaw',
		T.aggregateRaw = 'aggregateRaw'))(
			e = t.ModelAction || (t.ModelAction = {}),
		);
})(Ge || (Ge = {}));
var Xt = {};
un(Xt, {
	error: () => ef,
	info: () => Xp,
	log: () => Zp,
	query: () => tf,
	should: () => Fa,
	tags: () => Tr,
	warn: () => oi,
});
d();
f();
m();
var Tr = {
		error: Z('prisma:error'),
		warn: fn('prisma:warn'),
		info: wt('prisma:info'),
		query: Wt('prisma:query'),
	},
	Fa = { warn: () => !w.env.PRISMA_DISABLE_WARNINGS };
function Zp(...e) {
	console.log(...e);
}
function oi(e, ...t) {
	Fa.warn() && console.warn(`${Tr.warn} ${e}`, ...t);
}
function Xp(e, ...t) {
	console.info(`${Tr.info} ${e}`, ...t);
}
function ef(e, ...t) {
	console.error(`${Tr.error} ${e}`, ...t);
}
function tf(e, ...t) {
	console.log(`${Tr.query} ${e}`, ...t);
}
d();
f();
m();
function ft(e, t) {
	throw new Error(t);
}
d();
f();
m();
function In(e) {
	let t;
	return (...r) =>
		t || (t = e(...r).catch((n) => {
			throw t = void 0, n;
		}),
			t);
}
d();
f();
m();
var Sr = ue(Xo());
function ii(e) {
	return Sr.default.sep === Sr.default.posix.sep
		? e
		: e.split(Sr.default.sep).join(Sr.default.posix.sep);
}
d();
f();
m();
function si(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
d();
f();
m();
var ai = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
d();
f();
m();
function er(e, t) {
	let r = {};
	for (let n of Object.keys(e)) r[n] = t(e[n], n);
	return r;
}
d();
f();
m();
function ui(e, t) {
	if (e.length === 0) return;
	let r = e[0], n = t(e[0]);
	for (let o = 1; o < e.length; o++) {
		let i = t(e[o]);
		i > n && (n = i, r = e[o]);
	}
	return r;
}
d();
f();
m();
function L(e, t) {
	Object.defineProperty(e, 'name', { value: t, configurable: !0 });
}
d();
f();
m();
var Ia = new Set(),
	Mr = (e, t, ...r) => {
		Ia.has(e) || (Ia.add(e), oi(t, ...r));
	};
var ke = class extends Error {
	constructor(r, n, o) {
		super(r);
		this.clientVersion = n, this.errorCode = o, Error.captureStackTrace(ke);
	}
	get [Symbol.toStringTag]() {
		return 'PrismaClientInitializationError';
	}
};
L(ke, 'PrismaClientInitializationError');
d();
f();
m();
var Ee = class extends Error {
	constructor(r, { code: n, clientVersion: o, meta: i, batchRequestIdx: s }) {
		super(r);
		this.code = n,
			this.clientVersion = o,
			this.meta = i,
			Object.defineProperty(this, 'batchRequestIdx', {
				value: s,
				enumerable: !1,
				writable: !0,
			});
	}
	get [Symbol.toStringTag]() {
		return 'PrismaClientKnownRequestError';
	}
};
L(Ee, 'PrismaClientKnownRequestError');
d();
f();
m();
var mt = class extends Error {
	constructor(r, n) {
		super(r);
		this.clientVersion = n;
	}
	get [Symbol.toStringTag]() {
		return 'PrismaClientRustPanicError';
	}
};
L(mt, 'PrismaClientRustPanicError');
d();
f();
m();
var Je = class extends Error {
	constructor(r, { clientVersion: n, batchRequestIdx: o }) {
		super(r);
		this.name = 'PrismaClientUnknownRequestError',
			this.clientVersion = n,
			Object.defineProperty(this, 'batchRequestIdx', {
				value: o,
				writable: !0,
				enumerable: !1,
			});
	}
	get [Symbol.toStringTag]() {
		return 'PrismaClientUnknownRequestError';
	}
};
L(Je, 'PrismaClientUnknownRequestError');
d();
f();
m();
var tr = class {
	constructor(t) {
		this._engine = t;
	}
	prometheus(t) {
		return this._engine.metrics({ format: 'prometheus', ...t });
	}
	json(t) {
		return this._engine.metrics({ format: 'json', ...t });
	}
};
d();
f();
m();
d();
f();
m();
function Dn(e) {
	let t;
	return {
		get() {
			return t || (t = { value: e() }), t.value;
		},
	};
}
function ka(e) {
	return { models: li(e.models), enums: li(e.enums), types: li(e.types) };
}
function li(e) {
	let t = {};
	for (let { name: r, ...n } of e) t[r] = n;
	return t;
}
function Na(e, t) {
	let r = Dn(() => of(t));
	Object.defineProperty(e, 'dmmf', { get: () => r.get() });
}
function of(e) {
	return {
		datamodel: {
			models: ci(e.models),
			enums: ci(e.enums),
			types: ci(e.types),
		},
	};
}
function ci(e) {
	return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
d();
f();
m();
d();
f();
m();
function _a(e, t) {
	var r;
	for (let n of t) {
		for (let o of Object.getOwnPropertyNames(n.prototype)) {
			Object.defineProperty(
				e.prototype,
				o,
				(r = Object.getOwnPropertyDescriptor(n.prototype, o)) != null
					? r
					: Object.create(null),
			);
		}
	}
}
d();
f();
m();
d();
f();
m();
var rr = 9e15,
	Tt = 1e9,
	pi = '0123456789abcdef',
	Nn = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
	_n = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
	fi = {
		precision: 20,
		rounding: 4,
		modulo: 1,
		toExpNeg: -7,
		toExpPos: 21,
		minE: -rr,
		maxE: rr,
		crypto: !1,
	},
	Ba,
	dt,
	B = !0,
	jn = '[DecimalError] ',
	vt = jn + 'Invalid argument: ',
	Ua = jn + 'Precision limit exceeded',
	qa = jn + 'crypto unavailable',
	Va = '[object Decimal]',
	xe = Math.floor,
	pe = Math.pow,
	sf = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
	af = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
	uf = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
	Ga = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
	Ze = 1e7,
	j = 7,
	lf = 9007199254740991,
	cf = Nn.length - 1,
	mi = _n.length - 1,
	O = { toStringTag: Va };
O.absoluteValue = O.abs = function () {
	var e = new this.constructor(this);
	return e.s < 0 && (e.s = 1), N(e);
};
O.ceil = function () {
	return N(new this.constructor(this), this.e + 1, 2);
};
O.clampedTo = O.clamp = function (e, t) {
	var r, n = this, o = n.constructor;
	if (e = new o(e), t = new o(t), !e.s || !t.s) return new o(NaN);
	if (e.gt(t)) throw Error(vt + t);
	return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new o(n);
};
O.comparedTo = O.cmp = function (e) {
	var t,
		r,
		n,
		o,
		i = this,
		s = i.d,
		a = (e = new i.constructor(e)).d,
		u = i.s,
		l = e.s;
	if (!s || !a) {
		return !u || !l ? NaN : u !== l ? u : s === a ? 0 : !s ^ u < 0 ? 1 : -1;
	}
	if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -l : 0;
	if (u !== l) return u;
	if (i.e !== e.e) return i.e > e.e ^ u < 0 ? 1 : -1;
	for (n = s.length, o = a.length, t = 0, r = n < o ? n : o; t < r; ++t) {
		if (s[t] !== a[t]) return s[t] > a[t] ^ u < 0 ? 1 : -1;
	}
	return n === o ? 0 : n > o ^ u < 0 ? 1 : -1;
};
O.cosine = O.cos = function () {
	var e, t, r = this, n = r.constructor;
	return r.d
		? r.d[0]
			? (e = n.precision,
				t = n.rounding,
				n.precision = e + Math.max(r.e, r.sd()) + j,
				n.rounding = 1,
				r = pf(n, Ha(n, r)),
				n.precision = e,
				n.rounding = t,
				N(dt == 2 || dt == 3 ? r.neg() : r, e, t, !0))
			: new n(1)
		: new n(NaN);
};
O.cubeRoot = O.cbrt = function () {
	var e, t, r, n, o, i, s, a, u, l, c = this, p = c.constructor;
	if (!c.isFinite() || c.isZero()) return new p(c);
	for (
		B = !1,
			i = c.s * pe(c.s * c, 1 / 3),
			!i || Math.abs(i) == 1 / 0
				? (r = be(c.d),
					e = c.e,
					(i = (e - r.length + 1) % 3) &&
					(r += i == 1 || i == -2 ? '0' : '00'),
					i = pe(r, 1 / 3),
					e = xe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)),
					i == 1 / 0
						? r = '5e' + e
						: (r = i.toExponential(),
							r = r.slice(0, r.indexOf('e') + 1) + e),
					n = new p(r),
					n.s = c.s)
				: n = new p(i.toString()),
			s = (e = p.precision) + 3;;
	) {
		if (
			a = n,
				u = a.times(a).times(a),
				l = u.plus(c),
				n = te(l.plus(c).times(a), l.plus(u), s + 2, 1),
				be(a.d).slice(0, s) === (r = be(n.d)).slice(0, s)
		) {
			if (r = r.slice(s - 3, s + 1), r == '9999' || !o && r == '4999') {
				if (!o && (N(a, e + 1, 0), a.times(a).times(a).eq(c))) {
					n = a;
					break;
				}
				s += 4, o = 1;
			} else {
				(!+r || !+r.slice(1) && r.charAt(0) == '5') &&
					(N(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
				break;
			}
		}
	}
	return B = !0, N(n, e, p.rounding, t);
};
O.decimalPlaces = O.dp = function () {
	var e, t = this.d, r = NaN;
	if (t) {
		if (e = t.length - 1, r = (e - xe(this.e / j)) * j, e = t[e], e) {
			for (; e % 10 == 0; e /= 10) {
				r--;
			}
		}
		r < 0 && (r = 0);
	}
	return r;
};
O.dividedBy = O.div = function (e) {
	return te(this, new this.constructor(e));
};
O.dividedToIntegerBy = O.divToInt = function (e) {
	var t = this, r = t.constructor;
	return N(te(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
O.equals = O.eq = function (e) {
	return this.cmp(e) === 0;
};
O.floor = function () {
	return N(new this.constructor(this), this.e + 1, 3);
};
O.greaterThan = O.gt = function (e) {
	return this.cmp(e) > 0;
};
O.greaterThanOrEqualTo = O.gte = function (e) {
	var t = this.cmp(e);
	return t == 1 || t === 0;
};
O.hyperbolicCosine = O.cosh = function () {
	var e, t, r, n, o, i = this, s = i.constructor, a = new s(1);
	if (!i.isFinite()) return new s(i.s ? 1 / 0 : NaN);
	if (i.isZero()) return a;
	r = s.precision,
		n = s.rounding,
		s.precision = r + Math.max(i.e, i.sd()) + 4,
		s.rounding = 1,
		o = i.d.length,
		o < 32
			? (e = Math.ceil(o / 3), t = (1 / Bn(4, e)).toString())
			: (e = 16, t = '2.3283064365386962890625e-10'),
		i = nr(s, 1, i.times(t), new s(1), !0);
	for (var u, l = e, c = new s(8); l--;) {
		u = i.times(i), i = a.minus(u.times(c.minus(u.times(c))));
	}
	return N(i, s.precision = r, s.rounding = n, !0);
};
O.hyperbolicSine = O.sinh = function () {
	var e, t, r, n, o = this, i = o.constructor;
	if (!o.isFinite() || o.isZero()) return new i(o);
	if (
		t = i.precision,
			r = i.rounding,
			i.precision = t + Math.max(o.e, o.sd()) + 4,
			i.rounding = 1,
			n = o.d.length,
			n < 3
	) o = nr(i, 2, o, o, !0);
	else {
		e = 1.4 * Math.sqrt(n),
			e = e > 16 ? 16 : e | 0,
			o = o.times(1 / Bn(5, e)),
			o = nr(i, 2, o, o, !0);
		for (var s, a = new i(5), u = new i(16), l = new i(20); e--;) {
			s = o.times(o), o = o.times(a.plus(s.times(u.times(s).plus(l))));
		}
	}
	return i.precision = t, i.rounding = r, N(o, t, r, !0);
};
O.hyperbolicTangent = O.tanh = function () {
	var e, t, r = this, n = r.constructor;
	return r.isFinite()
		? r.isZero()
			? new n(r)
			: (e = n.precision,
				t = n.rounding,
				n.precision = e + 7,
				n.rounding = 1,
				te(r.sinh(), r.cosh(), n.precision = e, n.rounding = t))
		: new n(r.s);
};
O.inverseCosine = O.acos = function () {
	var e,
		t = this,
		r = t.constructor,
		n = t.abs().cmp(1),
		o = r.precision,
		i = r.rounding;
	return n !== -1
		? n === 0 ? t.isNeg() ? Ye(r, o, i) : new r(0) : new r(NaN)
		: t.isZero()
		? Ye(r, o + 4, i).times(.5)
		: (r.precision = o + 6,
			r.rounding = 1,
			t = t.asin(),
			e = Ye(r, o + 4, i).times(.5),
			r.precision = o,
			r.rounding = i,
			e.minus(t));
};
O.inverseHyperbolicCosine = O.acosh = function () {
	var e, t, r = this, n = r.constructor;
	return r.lte(1)
		? new n(r.eq(1) ? 0 : NaN)
		: r.isFinite()
		? (e = n.precision,
			t = n.rounding,
			n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4,
			n.rounding = 1,
			B = !1,
			r = r.times(r).minus(1).sqrt().plus(r),
			B = !0,
			n.precision = e,
			n.rounding = t,
			r.ln())
		: new n(r);
};
O.inverseHyperbolicSine = O.asinh = function () {
	var e, t, r = this, n = r.constructor;
	return !r.isFinite() || r.isZero()
		? new n(r)
		: (e = n.precision,
			t = n.rounding,
			n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6,
			n.rounding = 1,
			B = !1,
			r = r.times(r).plus(1).sqrt().plus(r),
			B = !0,
			n.precision = e,
			n.rounding = t,
			r.ln());
};
O.inverseHyperbolicTangent = O.atanh = function () {
	var e, t, r, n, o = this, i = o.constructor;
	return o.isFinite()
		? o.e >= 0
			? new i(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN)
			: (e = i.precision,
				t = i.rounding,
				n = o.sd(),
				Math.max(n, e) < 2 * -o.e - 1
					? N(new i(o), e, t, !0)
					: (i.precision = r = n - o.e,
						o = te(o.plus(1), new i(1).minus(o), r + e, 1),
						i.precision = e + 4,
						i.rounding = 1,
						o = o.ln(),
						i.precision = e,
						i.rounding = t,
						o.times(.5)))
		: new i(NaN);
};
O.inverseSine = O.asin = function () {
	var e, t, r, n, o = this, i = o.constructor;
	return o.isZero()
		? new i(o)
		: (t = o.abs().cmp(1),
			r = i.precision,
			n = i.rounding,
			t !== -1
				? t === 0
					? (e = Ye(i, r + 4, n).times(.5), e.s = o.s, e)
					: new i(NaN)
				: (i.precision = r + 6,
					i.rounding = 1,
					o = o.div(new i(1).minus(o.times(o)).sqrt().plus(1)).atan(),
					i.precision = r,
					i.rounding = n,
					o.times(2)));
};
O.inverseTangent = O.atan = function () {
	var e,
		t,
		r,
		n,
		o,
		i,
		s,
		a,
		u,
		l = this,
		c = l.constructor,
		p = c.precision,
		g = c.rounding;
	if (l.isFinite()) {
		if (l.isZero()) return new c(l);
		if (l.abs().eq(1) && p + 4 <= mi) {
			return s = Ye(c, p + 4, g).times(.25), s.s = l.s, s;
		}
	} else {
		if (!l.s) return new c(NaN);
		if (p + 4 <= mi) return s = Ye(c, p + 4, g).times(.5), s.s = l.s, s;
	}
	for (
		c.precision = a = p + 10,
			c.rounding = 1,
			r = Math.min(28, a / j + 2 | 0),
			e = r;
		e;
		--e
	) l = l.div(l.times(l).plus(1).sqrt().plus(1));
	for (
		B = !1,
			t = Math.ceil(a / j),
			n = 1,
			u = l.times(l),
			s = new c(l),
			o = l;
		e !== -1;
	) {
		if (
			o = o.times(u),
				i = s.minus(o.div(n += 2)),
				o = o.times(u),
				s = i.plus(o.div(n += 2)),
				s.d[t] !== void 0
		) for (e = t; s.d[e] === i.d[e] && e--;);
	}
	return r && (s = s.times(2 << r - 1)),
		B = !0,
		N(s, c.precision = p, c.rounding = g, !0);
};
O.isFinite = function () {
	return !!this.d;
};
O.isInteger = O.isInt = function () {
	return !!this.d && xe(this.e / j) > this.d.length - 2;
};
O.isNaN = function () {
	return !this.s;
};
O.isNegative = O.isNeg = function () {
	return this.s < 0;
};
O.isPositive = O.isPos = function () {
	return this.s > 0;
};
O.isZero = function () {
	return !!this.d && this.d[0] === 0;
};
O.lessThan = O.lt = function (e) {
	return this.cmp(e) < 0;
};
O.lessThanOrEqualTo = O.lte = function (e) {
	return this.cmp(e) < 1;
};
O.logarithm = O.log = function (e) {
	var t,
		r,
		n,
		o,
		i,
		s,
		a,
		u,
		l = this,
		c = l.constructor,
		p = c.precision,
		g = c.rounding,
		h = 5;
	if (e == null) e = new c(10), t = !0;
	else {
		if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) {
			return new c(NaN);
		}
		t = e.eq(10);
	}
	if (r = l.d, l.s < 0 || !r || !r[0] || l.eq(1)) {
		return new c(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
	}
	if (t) {
		if (r.length > 1) i = !0;
		else {
			for (o = r[0]; o % 10 === 0;) o /= 10;
			i = o !== 1;
		}
	}
	if (
		B = !1,
			a = p + h,
			s = Pt(l, a),
			n = t ? $n(c, a + 10) : Pt(e, a),
			u = te(s, n, a, 1),
			Fr(u.d, o = p, g)
	) {
		do if (
			a += 10,
				s = Pt(l, a),
				n = t ? $n(c, a + 10) : Pt(e, a),
				u = te(s, n, a, 1),
				!i
		) {
			+be(u.d).slice(o + 1, o + 15) + 1 == 1e14 && (u = N(u, p + 1, 0));
			break;
		} while (Fr(u.d, o += 10, g));
	}
	return B = !0, N(u, p, g);
};
O.minus = O.sub = function (e) {
	var t, r, n, o, i, s, a, u, l, c, p, g, h = this, b = h.constructor;
	if (e = new b(e), !h.d || !e.d) {
		return !h.s || !e.s
			? e = new b(NaN)
			: h.d
			? e.s = -e.s
			: e = new b(e.d || h.s !== e.s ? h : NaN),
			e;
	}
	if (h.s != e.s) return e.s = -e.s, h.plus(e);
	if (l = h.d, g = e.d, a = b.precision, u = b.rounding, !l[0] || !g[0]) {
		if (g[0]) e.s = -e.s;
		else if (l[0]) e = new b(h);
		else return new b(u === 3 ? -0 : 0);
		return B ? N(e, a, u) : e;
	}
	if (r = xe(e.e / j), c = xe(h.e / j), l = l.slice(), i = c - r, i) {
		for (
			p = i < 0,
				p
					? (t = l, i = -i, s = g.length)
					: (t = g, r = c, s = l.length),
				n = Math.max(Math.ceil(a / j), s) + 2,
				i > n && (i = n, t.length = 1),
				t.reverse(),
				n = i;
			n--;
		) t.push(0);
		t.reverse();
	} else {
		for (
			n = l.length, s = g.length, p = n < s, p && (s = n), n = 0;
			n < s;
			n++
		) {
			if (l[n] != g[n]) {
				p = l[n] < g[n];
				break;
			}
		}
		i = 0;
	}
	for (
		p && (t = l, l = g, g = t, e.s = -e.s), s = l.length, n = g.length - s;
		n > 0;
		--n
	) l[s++] = 0;
	for (n = g.length; n > i;) {
		if (l[--n] < g[n]) {
			for (o = n; o && l[--o] === 0;) l[o] = Ze - 1;
			--l[o], l[n] += Ze;
		}
		l[n] -= g[n];
	}
	for (; l[--s] === 0;) l.pop();
	for (; l[0] === 0; l.shift()) --r;
	return l[0]
		? (e.d = l, e.e = Ln(l, r), B ? N(e, a, u) : e)
		: new b(u === 3 ? -0 : 0);
};
O.modulo = O.mod = function (e) {
	var t, r = this, n = r.constructor;
	return e = new n(e),
		!r.d || !e.s || e.d && !e.d[0]
			? new n(NaN)
			: !e.d || r.d && !r.d[0]
			? N(new n(r), n.precision, n.rounding)
			: (B = !1,
				n.modulo == 9
					? (t = te(r, e.abs(), 0, 3, 1), t.s *= e.s)
					: t = te(r, e, 0, n.modulo, 1),
				t = t.times(e),
				B = !0,
				r.minus(t));
};
O.naturalExponential = O.exp = function () {
	return di(this);
};
O.naturalLogarithm = O.ln = function () {
	return Pt(this);
};
O.negated = O.neg = function () {
	var e = new this.constructor(this);
	return e.s = -e.s, N(e);
};
O.plus = O.add = function (e) {
	var t, r, n, o, i, s, a, u, l, c, p = this, g = p.constructor;
	if (e = new g(e), !p.d || !e.d) {
		return !p.s || !e.s
			? e = new g(NaN)
			: p.d || (e = new g(e.d || p.s === e.s ? p : NaN)),
			e;
	}
	if (p.s != e.s) return e.s = -e.s, p.minus(e);
	if (l = p.d, c = e.d, a = g.precision, u = g.rounding, !l[0] || !c[0]) {
		return c[0] || (e = new g(p)), B ? N(e, a, u) : e;
	}
	if (i = xe(p.e / j), n = xe(e.e / j), l = l.slice(), o = i - n, o) {
		for (
			o < 0
				? (r = l, o = -o, s = c.length)
				: (r = c, n = i, s = l.length),
				i = Math.ceil(a / j),
				s = i > s ? i + 1 : s + 1,
				o > s && (o = s, r.length = 1),
				r.reverse();
			o--;
		) r.push(0);
		r.reverse();
	}
	for (
		s = l.length,
			o = c.length,
			s - o < 0 && (o = s, r = c, c = l, l = r),
			t = 0;
		o;
	) t = (l[--o] = l[o] + c[o] + t) / Ze | 0, l[o] %= Ze;
	for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0;) l.pop();
	return e.d = l, e.e = Ln(l, n), B ? N(e, a, u) : e;
};
O.precision = O.sd = function (e) {
	var t, r = this;
	if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(vt + e);
	return r.d ? (t = Ja(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
O.round = function () {
	var e = this, t = e.constructor;
	return N(new t(e), e.e + 1, t.rounding);
};
O.sine = O.sin = function () {
	var e, t, r = this, n = r.constructor;
	return r.isFinite()
		? r.isZero()
			? new n(r)
			: (e = n.precision,
				t = n.rounding,
				n.precision = e + Math.max(r.e, r.sd()) + j,
				n.rounding = 1,
				r = mf(n, Ha(n, r)),
				n.precision = e,
				n.rounding = t,
				N(dt > 2 ? r.neg() : r, e, t, !0))
		: new n(NaN);
};
O.squareRoot = O.sqrt = function () {
	var e,
		t,
		r,
		n,
		o,
		i,
		s = this,
		a = s.d,
		u = s.e,
		l = s.s,
		c = s.constructor;
	if (l !== 1 || !a || !a[0]) {
		return new c(!l || l < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
	}
	for (
		B = !1,
			l = Math.sqrt(+s),
			l == 0 || l == 1 / 0
				? (t = be(a),
					(t.length + u) % 2 == 0 && (t += '0'),
					l = Math.sqrt(t),
					u = xe((u + 1) / 2) - (u < 0 || u % 2),
					l == 1 / 0
						? t = '5e' + u
						: (t = l.toExponential(),
							t = t.slice(0, t.indexOf('e') + 1) + u),
					n = new c(t))
				: n = new c(l.toString()),
			r = (u = c.precision) + 3;;
	) {
		if (
			i = n,
				n = i.plus(te(s, i, r + 2, 1)).times(.5),
				be(i.d).slice(0, r) === (t = be(n.d)).slice(0, r)
		) {
			if (t = t.slice(r - 3, r + 1), t == '9999' || !o && t == '4999') {
				if (!o && (N(i, u + 1, 0), i.times(i).eq(s))) {
					n = i;
					break;
				}
				r += 4, o = 1;
			} else {
				(!+t || !+t.slice(1) && t.charAt(0) == '5') &&
					(N(n, u + 1, 1), e = !n.times(n).eq(s));
				break;
			}
		}
	}
	return B = !0, N(n, u, c.rounding, e);
};
O.tangent = O.tan = function () {
	var e, t, r = this, n = r.constructor;
	return r.isFinite()
		? r.isZero()
			? new n(r)
			: (e = n.precision,
				t = n.rounding,
				n.precision = e + 10,
				n.rounding = 1,
				r = r.sin(),
				r.s = 1,
				r = te(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0),
				n.precision = e,
				n.rounding = t,
				N(dt == 2 || dt == 4 ? r.neg() : r, e, t, !0))
		: new n(NaN);
};
O.times = O.mul = function (e) {
	var t,
		r,
		n,
		o,
		i,
		s,
		a,
		u,
		l,
		c = this,
		p = c.constructor,
		g = c.d,
		h = (e = new p(e)).d;
	if (e.s *= c.s, !g || !g[0] || !h || !h[0]) {
		return new p(
			!e.s || g && !g[0] && !h || h && !h[0] && !g
				? NaN
				: !g || !h
				? e.s / 0
				: e.s * 0,
		);
	}
	for (
		r = xe(c.e / j) + xe(e.e / j),
			u = g.length,
			l = h.length,
			u < l && (i = g, g = h, h = i, s = u, u = l, l = s),
			i = [],
			s = u + l,
			n = s;
		n--;
	) i.push(0);
	for (n = l; --n >= 0;) {
		for (t = 0, o = u + n; o > n;) {
			a = i[o] + h[n] * g[o - n - 1] + t,
				i[o--] = a % Ze | 0,
				t = a / Ze | 0;
		}
		i[o] = (i[o] + t) % Ze | 0;
	}
	for (; !i[--s];) i.pop();
	return t ? ++r : i.shift(),
		e.d = i,
		e.e = Ln(i, r),
		B ? N(e, p.precision, p.rounding) : e;
};
O.toBinary = function (e, t) {
	return yi(this, 2, e, t);
};
O.toDecimalPlaces = O.toDP = function (e, t) {
	var r = this, n = r.constructor;
	return r = new n(r),
		e === void 0
			? r
			: (Ne(e, 0, Tt),
				t === void 0 ? t = n.rounding : Ne(t, 0, 8),
				N(r, e + r.e + 1, t));
};
O.toExponential = function (e, t) {
	var r, n = this, o = n.constructor;
	return e === void 0
		? r = ot(n, !0)
		: (Ne(e, 0, Tt),
			t === void 0 ? t = o.rounding : Ne(t, 0, 8),
			n = N(new o(n), e + 1, t),
			r = ot(n, !0, e + 1)),
		n.isNeg() && !n.isZero() ? '-' + r : r;
};
O.toFixed = function (e, t) {
	var r, n, o = this, i = o.constructor;
	return e === void 0
		? r = ot(o)
		: (Ne(e, 0, Tt),
			t === void 0 ? t = i.rounding : Ne(t, 0, 8),
			n = N(new i(o), e + o.e + 1, t),
			r = ot(n, !1, e + n.e + 1)),
		o.isNeg() && !o.isZero() ? '-' + r : r;
};
O.toFraction = function (e) {
	var t,
		r,
		n,
		o,
		i,
		s,
		a,
		u,
		l,
		c,
		p,
		g,
		h = this,
		b = h.d,
		y = h.constructor;
	if (!b) return new y(h);
	if (
		l = r = new y(1),
			n = u = new y(0),
			t = new y(n),
			i = t.e = Ja(b) - h.e - 1,
			s = i % j,
			t.d[0] = pe(10, s < 0 ? j + s : s),
			e == null
	) e = i > 0 ? t : l;
	else {
		if (a = new y(e), !a.isInt() || a.lt(l)) throw Error(vt + a);
		e = a.gt(t) ? i > 0 ? t : l : a;
	}
	for (
		B = !1,
			a = new y(be(b)),
			c = y.precision,
			y.precision = i = b.length * j * 2;
		p = te(a, t, 0, 1, 1), o = r.plus(p.times(n)), o.cmp(e) != 1;
	) {
		r = n,
			n = o,
			o = l,
			l = u.plus(p.times(o)),
			u = o,
			o = t,
			t = a.minus(p.times(o)),
			a = o;
	}
	return o = te(e.minus(r), n, 0, 1, 1),
		u = u.plus(o.times(l)),
		r = r.plus(o.times(n)),
		u.s = l.s = h.s,
		g = te(l, n, i, 1).minus(h).abs().cmp(te(u, r, i, 1).minus(h).abs()) < 1
			? [l, n]
			: [u, r],
		y.precision = c,
		B = !0,
		g;
};
O.toHexadecimal = O.toHex = function (e, t) {
	return yi(this, 16, e, t);
};
O.toNearest = function (e, t) {
	var r = this, n = r.constructor;
	if (r = new n(r), e == null) {
		if (!r.d) return r;
		e = new n(1), t = n.rounding;
	} else {
		if (e = new n(e), t === void 0 ? t = n.rounding : Ne(t, 0, 8), !r.d) {
			return e.s ? r : e;
		}
		if (!e.d) return e.s && (e.s = r.s), e;
	}
	return e.d[0]
		? (B = !1, r = te(r, e, 0, t, 1).times(e), B = !0, N(r))
		: (e.s = r.s, r = e),
		r;
};
O.toNumber = function () {
	return +this;
};
O.toOctal = function (e, t) {
	return yi(this, 8, e, t);
};
O.toPower = O.pow = function (e) {
	var t, r, n, o, i, s, a = this, u = a.constructor, l = +(e = new u(e));
	if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(pe(+a, l));
	if (a = new u(a), a.eq(1)) return a;
	if (n = u.precision, i = u.rounding, e.eq(1)) return N(a, n, i);
	if (t = xe(e.e / j), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= lf) {
		return o = Ka(u, a, r, n), e.s < 0 ? new u(1).div(o) : N(o, n, i);
	}
	if (s = a.s, s < 0) {
		if (t < e.d.length - 1) return new u(NaN);
		if (
			(e.d[t] & 1) == 0 && (s = 1),
				a.e == 0 && a.d[0] == 1 && a.d.length == 1
		) return a.s = s, a;
	}
	return r = pe(+a, l),
		t = r == 0 || !isFinite(r)
			? xe(l * (Math.log('0.' + be(a.d)) / Math.LN10 + a.e + 1))
			: new u(r + '').e,
		t > u.maxE + 1 || t < u.minE - 1
			? new u(t > 0 ? s / 0 : 0)
			: (B = !1,
				u.rounding = a.s = 1,
				r = Math.min(12, (t + '').length),
				o = di(e.times(Pt(a, n + r)), n),
				o.d &&
				(o = N(o, n + 5, 1),
					Fr(o.d, n, i) &&
					(t = n + 10,
						o = N(di(e.times(Pt(a, t + r)), t), t + 5, 1),
						+be(o.d).slice(n + 1, n + 15) + 1 == 1e14 &&
						(o = N(o, n + 1, 0)))),
				o.s = s,
				B = !0,
				u.rounding = i,
				N(o, n, i));
};
O.toPrecision = function (e, t) {
	var r, n = this, o = n.constructor;
	return e === void 0
		? r = ot(n, n.e <= o.toExpNeg || n.e >= o.toExpPos)
		: (Ne(e, 1, Tt),
			t === void 0 ? t = o.rounding : Ne(t, 0, 8),
			n = N(new o(n), e, t),
			r = ot(n, e <= n.e || n.e <= o.toExpNeg, e)),
		n.isNeg() && !n.isZero() ? '-' + r : r;
};
O.toSignificantDigits = O.toSD = function (e, t) {
	var r = this, n = r.constructor;
	return e === void 0
		? (e = n.precision, t = n.rounding)
		: (Ne(e, 1, Tt), t === void 0 ? t = n.rounding : Ne(t, 0, 8)),
		N(new n(r), e, t);
};
O.toString = function () {
	var e = this,
		t = e.constructor,
		r = ot(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
	return e.isNeg() && !e.isZero() ? '-' + r : r;
};
O.truncated = O.trunc = function () {
	return N(new this.constructor(this), this.e + 1, 1);
};
O.valueOf = O.toJSON = function () {
	var e = this,
		t = e.constructor,
		r = ot(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
	return e.isNeg() ? '-' + r : r;
};
function be(e) {
	var t, r, n, o = e.length - 1, i = '', s = e[0];
	if (o > 0) {
		for (i += s, t = 1; t < o; t++) {
			n = e[t] + '', r = j - n.length, r && (i += At(r)), i += n;
		}
		s = e[t], n = s + '', r = j - n.length, r && (i += At(r));
	} else if (s === 0) return '0';
	for (; s % 10 === 0;) s /= 10;
	return i + s;
}
function Ne(e, t, r) {
	if (e !== ~~e || e < t || e > r) throw Error(vt + e);
}
function Fr(e, t, r, n) {
	var o, i, s, a;
	for (i = e[0]; i >= 10; i /= 10) --t;
	return --t < 0 ? (t += j, o = 0) : (o = Math.ceil((t + 1) / j), t %= j),
		i = pe(10, j - t),
		a = e[o] % i | 0,
		n == null
			? t < 3
				? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0),
					s = r < 4 && a == 99999 || r > 3 && a == 49999 ||
						a == 5e4 || a == 0)
				: s = (r < 4 && a + 1 == i || r > 3 && a + 1 == i / 2) &&
						(e[o + 1] / i / 100 | 0) == pe(10, t - 2) - 1 ||
					(a == i / 2 || a == 0) && (e[o + 1] / i / 100 | 0) == 0
			: t < 4
			? (t == 0
				? a = a / 1e3 | 0
				: t == 1
				? a = a / 100 | 0
				: t == 2 && (a = a / 10 | 0),
				s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999)
			: s =
				((n || r < 4) && a + 1 == i || !n && r > 3 && a + 1 == i / 2) &&
				(e[o + 1] / i / 1e3 | 0) == pe(10, t - 3) - 1,
		s;
}
function kn(e, t, r) {
	for (var n, o = [0], i, s = 0, a = e.length; s < a;) {
		for (i = o.length; i--;) o[i] *= t;
		for (o[0] += pi.indexOf(e.charAt(s++)), n = 0; n < o.length; n++) {
			o[n] > r - 1 &&
				(o[n + 1] === void 0 && (o[n + 1] = 0),
					o[n + 1] += o[n] / r | 0,
					o[n] %= r);
		}
	}
	return o.reverse();
}
function pf(e, t) {
	var r, n, o;
	if (t.isZero()) return t;
	n = t.d.length,
		n < 32
			? (r = Math.ceil(n / 3), o = (1 / Bn(4, r)).toString())
			: (r = 16, o = '2.3283064365386962890625e-10'),
		e.precision += r,
		t = nr(e, 1, t.times(o), new e(1));
	for (var i = r; i--;) {
		var s = t.times(t);
		t = s.times(s).minus(s).times(8).plus(1);
	}
	return e.precision -= r, t;
}
var te = function () {
	function e(n, o, i) {
		var s, a = 0, u = n.length;
		for (n = n.slice(); u--;) {
			s = n[u] * o + a, n[u] = s % i | 0, a = s / i | 0;
		}
		return a && n.unshift(a), n;
	}
	function t(n, o, i, s) {
		var a, u;
		if (i != s) u = i > s ? 1 : -1;
		else {for (a = u = 0; a < i; a++) {
				if (n[a] != o[a]) {
					u = n[a] > o[a] ? 1 : -1;
					break;
				}
			}}
		return u;
	}
	function r(n, o, i, s) {
		for (var a = 0; i--;) {
			n[i] -= a, a = n[i] < o[i] ? 1 : 0, n[i] = a * s + n[i] - o[i];
		}
		for (; !n[0] && n.length > 1;) n.shift();
	}
	return function (n, o, i, s, a, u) {
		var l,
			c,
			p,
			g,
			h,
			b,
			y,
			P,
			S,
			v,
			T,
			A,
			F,
			C,
			I,
			G,
			z,
			H,
			U,
			J,
			_ = n.constructor,
			$ = n.s == o.s ? 1 : -1,
			k = n.d,
			D = o.d;
		if (!k || !k[0] || !D || !D[0]) {
			return new _(
				!n.s || !o.s || (k ? D && k[0] == D[0] : !D)
					? NaN
					: k && k[0] == 0 || !D
					? $ * 0
					: $ / 0,
			);
		}
		for (
			u
				? (h = 1, c = n.e - o.e)
				: (u = Ze, h = j, c = xe(n.e / h) - xe(o.e / h)),
				U = D.length,
				z = k.length,
				S = new _($),
				v = S.d = [],
				p = 0;
			D[p] == (k[p] || 0);
			p++
		);
		if (
			D[p] > (k[p] || 0) && c--,
				i == null
					? (C = i = _.precision, s = _.rounding)
					: a
					? C = i + (n.e - o.e) + 1
					: C = i,
				C < 0
		) v.push(1), b = !0;
		else {
			if (C = C / h + 2 | 0, p = 0, U == 1) {
				for (g = 0, D = D[0], C++; (p < z || g) && C--; p++) {
					I = g * u + (k[p] || 0), v[p] = I / D | 0, g = I % D | 0;
				}
				b = g || p < z;
			} else {
				for (
					g = u / (D[0] + 1) | 0,
						g > 1 &&
						(D = e(D, g, u),
							k = e(k, g, u),
							U = D.length,
							z = k.length),
						G = U,
						T = k.slice(0, U),
						A = T.length;
					A < U;
				) T[A++] = 0;
				J = D.slice(), J.unshift(0), H = D[0], D[1] >= u / 2 && ++H;
				do g = 0,
					l = t(D, T, U, A),
					l < 0
						? (F = T[0],
							U != A && (F = F * u + (T[1] || 0)),
							g = F / H | 0,
							g > 1
								? (g >= u && (g = u - 1),
									y = e(D, g, u),
									P = y.length,
									A = T.length,
									l = t(y, T, P, A),
									l == 1 && (g--, r(y, U < P ? J : D, P, u)))
								: (g == 0 && (l = g = 1), y = D.slice()),
							P = y.length,
							P < A && y.unshift(0),
							r(T, y, A, u),
							l == -1 &&
							(A = T.length,
								l = t(D, T, U, A),
								l < 1 && (g++, r(T, U < A ? J : D, A, u))),
							A = T.length)
						: l === 0 && (g++, T = [0]),
					v[p++] = g,
					l && T[0]
						? T[A++] = k[G] || 0
						: (T = [k[G]], A = 1); while (
					(G++ < z || T[0] !== void 0) && C--
				);
				b = T[0] !== void 0;
			}
			v[0] || v.shift();
		}
		if (h == 1) S.e = c, Ba = b;
		else {
			for (p = 1, g = v[0]; g >= 10; g /= 10) p++;
			S.e = p + c * h - 1, N(S, a ? i + S.e + 1 : i, s, b);
		}
		return S;
	};
}();
function N(e, t, r, n) {
	var o, i, s, a, u, l, c, p, g, h = e.constructor;
	e:
	if (t != null) {
		if (p = e.d, !p) return e;
		for (o = 1, a = p[0]; a >= 10; a /= 10) o++;
		if (i = t - o, i < 0) {
			i += j, s = t, c = p[g = 0], u = c / pe(10, o - s - 1) % 10 | 0;
		} else if (g = Math.ceil((i + 1) / j), a = p.length, g >= a) {
			if (n) {
				for (; a++ <= g;) p.push(0);
				c = u = 0, o = 1, i %= j, s = i - j + 1;
			} else break e;
		} else {
			for (c = a = p[g], o = 1; a >= 10; a /= 10) o++;
			i %= j,
				s = i - j + o,
				u = s < 0 ? 0 : c / pe(10, o - s - 1) % 10 | 0;
		}
		if (
			n = n || t < 0 || p[g + 1] !== void 0 ||
				(s < 0 ? c : c % pe(10, o - s - 1)),
				l = r < 4
					? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
					: u > 5 || u == 5 && (r == 4 || n || r == 6 && (i > 0
													? s > 0
														? c / pe(10, o - s)
														: 0
													: p[g - 1]) % 10 & 1 ||
								r == (e.s < 0 ? 8 : 7)),
				t < 1 || !p[0]
		) {
			return p.length = 0,
				l
					? (t -= e.e + 1,
						p[0] = pe(10, (j - t % j) % j),
						e.e = -t || 0)
					: p[0] = e.e = 0,
				e;
		}
		if (
			i == 0
				? (p.length = g, a = 1, g--)
				: (p.length = g + 1,
					a = pe(10, j - i),
					p[g] = s > 0 ? (c / pe(10, o - s) % pe(10, s) | 0) * a : 0),
				l
		) {
			for (;;) {
				if (g == 0) {
					for (i = 1, s = p[0]; s >= 10; s /= 10) i++;
					for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
					i != a && (e.e++, p[0] == Ze && (p[0] = 1));
					break;
				} else {
					if (p[g] += a, p[g] != Ze) break;
					p[g--] = 0, a = 1;
				}
			}
		}
		for (i = p.length; p[--i] === 0;) p.pop();
	}
	return B &&
		(e.e > h.maxE
			? (e.d = null, e.e = NaN)
			: e.e < h.minE && (e.e = 0, e.d = [0])),
		e;
}
function ot(e, t, r) {
	if (!e.isFinite()) return Qa(e);
	var n, o = e.e, i = be(e.d), s = i.length;
	return t
		? (r && (n = r - s) > 0
			? i = i.charAt(0) + '.' + i.slice(1) + At(n)
			: s > 1 && (i = i.charAt(0) + '.' + i.slice(1)),
			i = i + (e.e < 0 ? 'e' : 'e+') + e.e)
		: o < 0
		? (i = '0.' + At(-o - 1) + i, r && (n = r - s) > 0 && (i += At(n)))
		: o >= s
		? (i += At(o + 1 - s),
			r && (n = r - o - 1) > 0 && (i = i + '.' + At(n)))
		: ((n = o + 1) < s && (i = i.slice(0, n) + '.' + i.slice(n)),
			r && (n = r - s) > 0 && (o + 1 === s && (i += '.'), i += At(n))),
		i;
}
function Ln(e, t) {
	var r = e[0];
	for (t *= j; r >= 10; r /= 10) t++;
	return t;
}
function $n(e, t, r) {
	if (t > cf) throw B = !0, r && (e.precision = r), Error(Ua);
	return N(new e(Nn), t, 1, !0);
}
function Ye(e, t, r) {
	if (t > mi) throw Error(Ua);
	return N(new e(_n), t, r, !0);
}
function Ja(e) {
	var t = e.length - 1, r = t * j + 1;
	if (t = e[t], t) {
		for (; t % 10 == 0; t /= 10) r--;
		for (t = e[0]; t >= 10; t /= 10) r++;
	}
	return r;
}
function At(e) {
	for (var t = ''; e--;) t += '0';
	return t;
}
function Ka(e, t, r, n) {
	var o, i = new e(1), s = Math.ceil(n / j + 4);
	for (B = !1;;) {
		if (
			r % 2 && (i = i.times(t), ja(i.d, s) && (o = !0)),
				r = xe(r / 2),
				r === 0
		) {
			r = i.d.length - 1, o && i.d[r] === 0 && ++i.d[r];
			break;
		}
		t = t.times(t), ja(t.d, s);
	}
	return B = !0, i;
}
function $a(e) {
	return e.d[e.d.length - 1] & 1;
}
function Wa(e, t, r) {
	for (var n, o = new e(t[0]), i = 0; ++i < t.length;) {
		if (n = new e(t[i]), n.s) o[r](n) && (o = n);
		else {
			o = n;
			break;
		}
	}
	return o;
}
function di(e, t) {
	var r,
		n,
		o,
		i,
		s,
		a,
		u,
		l = 0,
		c = 0,
		p = 0,
		g = e.constructor,
		h = g.rounding,
		b = g.precision;
	if (!e.d || !e.d[0] || e.e > 17) {
		return new g(
			e.d
				? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1
				: e.s
				? e.s < 0 ? 0 : e
				: 0 / 0,
		);
	}
	for (t == null ? (B = !1, u = b) : u = t, a = new g(.03125); e.e > -2;) {
		e = e.times(a), p += 5;
	}
	for (
		n = Math.log(pe(2, p)) / Math.LN10 * 2 + 5 | 0,
			u += n,
			r = i = s = new g(1),
			g.precision = u;;
	) {
		if (
			i = N(i.times(e), u, 1),
				r = r.times(++c),
				a = s.plus(te(i, r, u, 1)),
				be(a.d).slice(0, u) === be(s.d).slice(0, u)
		) {
			for (o = p; o--;) s = N(s.times(s), u, 1);
			if (t == null) {
				if (l < 3 && Fr(s.d, u - n, h, l)) {
					g.precision = u += 10, r = i = a = new g(1), c = 0, l++;
				} else return N(s, g.precision = b, h, B = !0);
			} else return g.precision = b, s;
		}
		s = a;
	}
}
function Pt(e, t) {
	var r,
		n,
		o,
		i,
		s,
		a,
		u,
		l,
		c,
		p,
		g,
		h = 1,
		b = 10,
		y = e,
		P = y.d,
		S = y.constructor,
		v = S.rounding,
		T = S.precision;
	if (y.s < 0 || !P || !P[0] || !y.e && P[0] == 1 && P.length == 1) {
		return new S(P && !P[0] ? -1 / 0 : y.s != 1 ? NaN : P ? 0 : y);
	}
	if (
		t == null ? (B = !1, c = T) : c = t,
			S.precision = c += b,
			r = be(P),
			n = r.charAt(0),
			Math.abs(i = y.e) < 15e14
	) {
		for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;) {
			y = y.times(e), r = be(y.d), n = r.charAt(0), h++;
		}
		i = y.e,
			n > 1
				? (y = new S('0.' + r), i++)
				: y = new S(n + '.' + r.slice(1));
	} else {return l = $n(S, c + 2, T).times(i + ''),
			y = Pt(new S(n + '.' + r.slice(1)), c - b).plus(l),
			S.precision = T,
			t == null ? N(y, T, v, B = !0) : y;}
	for (
		p = y,
			u = s = y = te(y.minus(1), y.plus(1), c, 1),
			g = N(y.times(y), c, 1),
			o = 3;;
	) {
		if (
			s = N(s.times(g), c, 1),
				l = u.plus(te(s, new S(o), c, 1)),
				be(l.d).slice(0, c) === be(u.d).slice(0, c)
		) {
			if (
				u = u.times(2),
					i !== 0 && (u = u.plus($n(S, c + 2, T).times(i + ''))),
					u = te(u, new S(h), c, 1),
					t == null
			) {
				if (Fr(u.d, c - b, v, a)) {
					S.precision = c += b,
						l = s = y = te(p.minus(1), p.plus(1), c, 1),
						g = N(y.times(y), c, 1),
						o = a = 1;
				} else return N(u, S.precision = T, v, B = !0);
			} else return S.precision = T, u;
		}
		u = l, o += 2;
	}
}
function Qa(e) {
	return String(e.s * e.s / 0);
}
function gi(e, t) {
	var r, n, o;
	for (
		(r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
			(n = t.search(/e/i)) > 0
				? (r < 0 && (r = n),
					r += +t.slice(n + 1),
					t = t.substring(0, n))
				: r < 0 && (r = t.length),
			n = 0;
		t.charCodeAt(n) === 48;
		n++
	);
	for (o = t.length; t.charCodeAt(o - 1) === 48; --o);
	if (t = t.slice(n, o), t) {
		if (
			o -= n,
				e.e = r = r - n - 1,
				e.d = [],
				n = (r + 1) % j,
				r < 0 && (n += j),
				n < o
		) {
			for (n && e.d.push(+t.slice(0, n)), o -= j; n < o;) {
				e.d.push(+t.slice(n, n += j));
			}
			t = t.slice(n), n = j - t.length;
		} else n -= o;
		for (; n--;) t += '0';
		e.d.push(+t),
			B &&
			(e.e > e.constructor.maxE
				? (e.d = null, e.e = NaN)
				: e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
	} else e.e = 0, e.d = [0];
	return e;
}
function ff(e, t) {
	var r, n, o, i, s, a, u, l, c;
	if (t.indexOf('_') > -1) {
		if (t = t.replace(/(\d)_(?=\d)/g, '$1'), Ga.test(t)) return gi(e, t);
	} else if (t === 'Infinity' || t === 'NaN') {
		return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
	}
	if (af.test(t)) r = 16, t = t.toLowerCase();
	else if (sf.test(t)) r = 2;
	else if (uf.test(t)) r = 8;
	else throw Error(vt + t);
	for (
		i = t.search(/p/i),
			i > 0
				? (u = +t.slice(i + 1), t = t.substring(2, i))
				: t = t.slice(2),
			i = t.indexOf('.'),
			s = i >= 0,
			n = e.constructor,
			s &&
			(t = t.replace('.', ''),
				a = t.length,
				i = a - i,
				o = Ka(n, new n(r), i, i * 2)),
			l = kn(t, r, Ze),
			c = l.length - 1,
			i = c;
		l[i] === 0;
		--i
	) l.pop();
	return i < 0
		? new n(e.s * 0)
		: (e.e = Ln(l, c),
			e.d = l,
			B = !1,
			s && (e = te(e, o, a * 4)),
			u && (e = e.times(Math.abs(u) < 54 ? pe(2, u) : $t.pow(2, u))),
			B = !0,
			e);
}
function mf(e, t) {
	var r, n = t.d.length;
	if (n < 3) return t.isZero() ? t : nr(e, 2, t, t);
	r = 1.4 * Math.sqrt(n),
		r = r > 16 ? 16 : r | 0,
		t = t.times(1 / Bn(5, r)),
		t = nr(e, 2, t, t);
	for (var o, i = new e(5), s = new e(16), a = new e(20); r--;) {
		o = t.times(t), t = t.times(i.plus(o.times(s.times(o).minus(a))));
	}
	return t;
}
function nr(e, t, r, n, o) {
	var i, s, a, u, l = 1, c = e.precision, p = Math.ceil(c / j);
	for (B = !1, u = r.times(r), a = new e(n);;) {
		if (
			s = te(a.times(u), new e(t++ * t++), c, 1),
				a = o ? n.plus(s) : n.minus(s),
				n = te(s.times(u), new e(t++ * t++), c, 1),
				s = a.plus(n),
				s.d[p] !== void 0
		) {
			for (i = p; s.d[i] === a.d[i] && i--;);
			if (i == -1) break;
		}
		i = a, a = n, n = s, s = i, l++;
	}
	return B = !0, s.d.length = p + 1, s;
}
function Bn(e, t) {
	for (var r = e; --t;) r *= e;
	return r;
}
function Ha(e, t) {
	var r, n = t.s < 0, o = Ye(e, e.precision, 1), i = o.times(.5);
	if (t = t.abs(), t.lte(i)) return dt = n ? 4 : 1, t;
	if (r = t.divToInt(o), r.isZero()) dt = n ? 3 : 2;
	else {
		if (t = t.minus(r.times(o)), t.lte(i)) {
			return dt = $a(r) ? n ? 2 : 3 : n ? 4 : 1, t;
		}
		dt = $a(r) ? n ? 1 : 4 : n ? 3 : 2;
	}
	return t.minus(o).abs();
}
function yi(e, t, r, n) {
	var o, i, s, a, u, l, c, p, g, h = e.constructor, b = r !== void 0;
	if (
		b
			? (Ne(r, 1, Tt), n === void 0 ? n = h.rounding : Ne(n, 0, 8))
			: (r = h.precision, n = h.rounding), !e.isFinite()
	) c = Qa(e);
	else {
		for (
			c = ot(e),
				s = c.indexOf('.'),
				b
					? (o = 2,
						t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2))
					: o = t,
				s >= 0 &&
				(c = c.replace('.', ''),
					g = new h(1),
					g.e = c.length - s,
					g.d = kn(ot(g), 10, o),
					g.e = g.d.length),
				p = kn(c, 10, o),
				i = u = p.length;
			p[--u] == 0;
		) p.pop();
		if (!p[0]) c = b ? '0p+0' : '0';
		else {
			if (
				s < 0
					? i--
					: (e = new h(e),
						e.d = p,
						e.e = i,
						e = te(e, g, r, n, 0, o),
						p = e.d,
						i = e.e,
						l = Ba),
					s = p[r],
					a = o / 2,
					l = l || p[r + 1] !== void 0,
					l = n < 4
						? (s !== void 0 || l) &&
							(n === 0 || n === (e.s < 0 ? 3 : 2))
						: s > a ||
							s === a &&
								(n === 4 || l || n === 6 && p[r - 1] & 1 ||
									n === (e.s < 0 ? 8 : 7)),
					p.length = r,
					l
			) for (; ++p[--r] > o - 1;) p[r] = 0, r || (++i, p.unshift(1));
			for (u = p.length; !p[u - 1]; --u);
			for (s = 0, c = ''; s < u; s++) c += pi.charAt(p[s]);
			if (b) {
				if (u > 1) {
					if (t == 16 || t == 8) {
						for (s = t == 16 ? 4 : 3, --u; u % s; u++) c += '0';
						for (p = kn(c, o, t), u = p.length; !p[u - 1]; --u);
						for (s = 1, c = '1.'; s < u; s++) c += pi.charAt(p[s]);
					} else c = c.charAt(0) + '.' + c.slice(1);
				}
				c = c + (i < 0 ? 'p' : 'p+') + i;
			} else if (i < 0) {
				for (; ++i;) c = '0' + c;
				c = '0.' + c;
			} else if (++i > u) for (i -= u; i--;) c += '0';
			else i < u && (c = c.slice(0, i) + '.' + c.slice(i));
		}
		c = (t == 16 ? '0x' : t == 2 ? '0b' : t == 8 ? '0o' : '') + c;
	}
	return e.s < 0 ? '-' + c : c;
}
function ja(e, t) {
	if (e.length > t) return e.length = t, !0;
}
function df(e) {
	return new this(e).abs();
}
function gf(e) {
	return new this(e).acos();
}
function yf(e) {
	return new this(e).acosh();
}
function hf(e, t) {
	return new this(e).plus(t);
}
function bf(e) {
	return new this(e).asin();
}
function wf(e) {
	return new this(e).asinh();
}
function Ef(e) {
	return new this(e).atan();
}
function xf(e) {
	return new this(e).atanh();
}
function Af(e, t) {
	e = new this(e), t = new this(t);
	var r, n = this.precision, o = this.rounding, i = n + 4;
	return !e.s || !t.s
		? r = new this(NaN)
		: !e.d && !t.d
		? (r = Ye(this, i, 1).times(t.s > 0 ? .25 : .75), r.s = e.s)
		: !t.d || e.isZero()
		? (r = t.s < 0 ? Ye(this, n, o) : new this(0), r.s = e.s)
		: !e.d || t.isZero()
		? (r = Ye(this, i, 1).times(.5), r.s = e.s)
		: t.s < 0
		? (this.precision = i,
			this.rounding = 1,
			r = this.atan(te(e, t, i, 1)),
			t = Ye(this, i, 1),
			this.precision = n,
			this.rounding = o,
			r = e.s < 0 ? r.minus(t) : r.plus(t))
		: r = this.atan(te(e, t, i, 1)),
		r;
}
function Pf(e) {
	return new this(e).cbrt();
}
function vf(e) {
	return N(e = new this(e), e.e + 1, 2);
}
function Tf(e, t, r) {
	return new this(e).clamp(t, r);
}
function Sf(e) {
	if (!e || typeof e != 'object') throw Error(jn + 'Object expected');
	var t,
		r,
		n,
		o = e.defaults === !0,
		i = [
			'precision',
			1,
			Tt,
			'rounding',
			0,
			8,
			'toExpNeg',
			-rr,
			0,
			'toExpPos',
			0,
			rr,
			'maxE',
			0,
			rr,
			'minE',
			-rr,
			0,
			'modulo',
			0,
			9,
		];
	for (t = 0; t < i.length; t += 3) {
		if (r = i[t], o && (this[r] = fi[r]), (n = e[r]) !== void 0) {
			if (xe(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
			else throw Error(vt + r + ': ' + n);
		}
	}
	if (r = 'crypto', o && (this[r] = fi[r]), (n = e[r]) !== void 0) {
		if (n === !0 || n === !1 || n === 0 || n === 1) {
			if (n) {
				if (
					typeof crypto != 'undefined' && crypto &&
					(crypto.getRandomValues || crypto.randomBytes)
				) this[r] = !0;
				else throw Error(qa);
			} else this[r] = !1;
		} else throw Error(vt + r + ': ' + n);
	}
	return this;
}
function Mf(e) {
	return new this(e).cos();
}
function Ff(e) {
	return new this(e).cosh();
}
function za(e) {
	var t, r, n;
	function o(i) {
		var s, a, u, l = this;
		if (!(l instanceof o)) return new o(i);
		if (l.constructor = o, La(i)) {
			l.s = i.s,
				B
					? !i.d || i.e > o.maxE
						? (l.e = NaN, l.d = null)
						: i.e < o.minE
						? (l.e = 0, l.d = [0])
						: (l.e = i.e, l.d = i.d.slice())
					: (l.e = i.e, l.d = i.d ? i.d.slice() : i.d);
			return;
		}
		if (u = typeof i, u === 'number') {
			if (i === 0) {
				l.s = 1 / i < 0 ? -1 : 1, l.e = 0, l.d = [0];
				return;
			}
			if (i < 0 ? (i = -i, l.s = -1) : l.s = 1, i === ~~i && i < 1e7) {
				for (s = 0, a = i; a >= 10; a /= 10) s++;
				B
					? s > o.maxE
						? (l.e = NaN, l.d = null)
						: s < o.minE
						? (l.e = 0, l.d = [0])
						: (l.e = s, l.d = [i])
					: (l.e = s, l.d = [i]);
				return;
			} else if (i * 0 !== 0) {
				i || (l.s = NaN), l.e = NaN, l.d = null;
				return;
			}
			return gi(l, i.toString());
		} else if (u !== 'string') throw Error(vt + i);
		return (a = i.charCodeAt(0)) === 45
			? (i = i.slice(1), l.s = -1)
			: (a === 43 && (i = i.slice(1)), l.s = 1),
			Ga.test(i) ? gi(l, i) : ff(l, i);
	}
	if (
		o.prototype = O,
			o.ROUND_UP = 0,
			o.ROUND_DOWN = 1,
			o.ROUND_CEIL = 2,
			o.ROUND_FLOOR = 3,
			o.ROUND_HALF_UP = 4,
			o.ROUND_HALF_DOWN = 5,
			o.ROUND_HALF_EVEN = 6,
			o.ROUND_HALF_CEIL = 7,
			o.ROUND_HALF_FLOOR = 8,
			o.EUCLID = 9,
			o.config = o.set = Sf,
			o.clone = za,
			o.isDecimal = La,
			o.abs = df,
			o.acos = gf,
			o.acosh = yf,
			o.add = hf,
			o.asin = bf,
			o.asinh = wf,
			o.atan = Ef,
			o.atanh = xf,
			o.atan2 = Af,
			o.cbrt = Pf,
			o.ceil = vf,
			o.clamp = Tf,
			o.cos = Mf,
			o.cosh = Ff,
			o.div = Of,
			o.exp = Rf,
			o.floor = Cf,
			o.hypot = If,
			o.ln = Df,
			o.log = kf,
			o.log10 = _f,
			o.log2 = Nf,
			o.max = $f,
			o.min = jf,
			o.mod = Lf,
			o.mul = Bf,
			o.pow = Uf,
			o.random = qf,
			o.round = Vf,
			o.sign = Gf,
			o.sin = Jf,
			o.sinh = Kf,
			o.sqrt = Wf,
			o.sub = Qf,
			o.sum = Hf,
			o.tan = zf,
			o.tanh = Yf,
			o.trunc = Zf,
			e === void 0 && (e = {}),
			e && e.defaults !== !0
	) {
		for (
			n = [
				'precision',
				'rounding',
				'toExpNeg',
				'toExpPos',
				'maxE',
				'minE',
				'modulo',
				'crypto',
			], t = 0;
			t < n.length;
		) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
	}
	return o.config(e), o;
}
function Of(e, t) {
	return new this(e).div(t);
}
function Rf(e) {
	return new this(e).exp();
}
function Cf(e) {
	return N(e = new this(e), e.e + 1, 3);
}
function If() {
	var e, t, r = new this(0);
	for (B = !1, e = 0; e < arguments.length;) {
		if (t = new this(arguments[e++]), t.d) r.d && (r = r.plus(t.times(t)));
		else {
			if (t.s) return B = !0, new this(1 / 0);
			r = t;
		}
	}
	return B = !0, r.sqrt();
}
function La(e) {
	return e instanceof $t || e && e.toStringTag === Va || !1;
}
function Df(e) {
	return new this(e).ln();
}
function kf(e, t) {
	return new this(e).log(t);
}
function Nf(e) {
	return new this(e).log(2);
}
function _f(e) {
	return new this(e).log(10);
}
function $f() {
	return Wa(this, arguments, 'lt');
}
function jf() {
	return Wa(this, arguments, 'gt');
}
function Lf(e, t) {
	return new this(e).mod(t);
}
function Bf(e, t) {
	return new this(e).mul(t);
}
function Uf(e, t) {
	return new this(e).pow(t);
}
function qf(e) {
	var t, r, n, o, i = 0, s = new this(1), a = [];
	if (
		e === void 0 ? e = this.precision : Ne(e, 1, Tt),
			n = Math.ceil(e / j),
			this.crypto
	) {
		if (crypto.getRandomValues) {
			for (t = crypto.getRandomValues(new Uint32Array(n)); i < n;) {
				o = t[i],
					o >= 429e7
						? t[i] = crypto.getRandomValues(new Uint32Array(1))[0]
						: a[i++] = o % 1e7;
			}
		} else if (crypto.randomBytes) {
			for (t = crypto.randomBytes(n *= 4); i < n;) {
				o = t[i] + (t[i + 1] << 8) + (t[i + 2] << 16) +
					((t[i + 3] & 127) << 24),
					o >= 214e7
						? crypto.randomBytes(4).copy(t, i)
						: (a.push(o % 1e7), i += 4);
			}
			i = n / 4;
		} else throw Error(qa);
	} else for (; i < n;) a[i++] = Math.random() * 1e7 | 0;
	for (
		n = a[--i],
			e %= j,
			n && e && (o = pe(10, j - e), a[i] = (n / o | 0) * o);
		a[i] === 0;
		i--
	) a.pop();
	if (i < 0) r = 0, a = [0];
	else {
		for (r = -1; a[0] === 0; r -= j) a.shift();
		for (n = 1, o = a[0]; o >= 10; o /= 10) n++;
		n < j && (r -= j - n);
	}
	return s.e = r, s.d = a, s;
}
function Vf(e) {
	return N(e = new this(e), e.e + 1, this.rounding);
}
function Gf(e) {
	return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Jf(e) {
	return new this(e).sin();
}
function Kf(e) {
	return new this(e).sinh();
}
function Wf(e) {
	return new this(e).sqrt();
}
function Qf(e, t) {
	return new this(e).sub(t);
}
function Hf() {
	var e = 0, t = arguments, r = new this(t[e]);
	for (B = !1; r.s && ++e < t.length;) r = r.plus(t[e]);
	return B = !0, N(r, this.precision, this.rounding);
}
function zf(e) {
	return new this(e).tan();
}
function Yf(e) {
	return new this(e).tanh();
}
function Zf(e) {
	return N(e = new this(e), e.e + 1, 1);
}
O[Symbol.for('nodejs.util.inspect.custom')] = O.toString;
O[Symbol.toStringTag] = 'Decimal';
var $t = O.constructor = za(fi);
Nn = new $t(Nn);
_n = new $t(_n);
var Le = $t;
var wi = ue(Rn()), Xa = ue(Un());
d();
f();
m();
var Ke = class {
	constructor(t, r, n, o, i) {
		this.modelName = t,
			this.name = r,
			this.typeName = n,
			this.isList = o,
			this.isEnum = i;
	}
	_toGraphQLInputType() {
		let t = this.isList ? 'List' : '', r = this.isEnum ? 'Enum' : '';
		return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
	}
};
function qn(e) {
	return e instanceof Ke;
}
d();
f();
m();
var Za = [
		'JsonNullValueInput',
		'NullableJsonNullValueInput',
		'JsonNullValueFilter',
	],
	Vn = Symbol(),
	hi = new WeakMap(),
	Ae = class {
		constructor(t) {
			t === Vn ? hi.set(this, `Prisma.${this._getName()}`) : hi.set(
				this,
				`new Prisma.${this._getNamespace()}.${this._getName()}()`,
			);
		}
		_getName() {
			return this.constructor.name;
		}
		toString() {
			return hi.get(this);
		}
	},
	Or = class extends Ae {
		_getNamespace() {
			return 'NullTypes';
		}
	},
	Rr = class extends Or {};
bi(Rr, 'DbNull');
var Cr = class extends Or {};
bi(Cr, 'JsonNull');
var Ir = class extends Or {};
bi(Ir, 'AnyNull');
var or = {
	classes: { DbNull: Rr, JsonNull: Cr, AnyNull: Ir },
	instances: {
		DbNull: new Rr(Vn),
		JsonNull: new Cr(Vn),
		AnyNull: new Ir(Vn),
	},
};
function bi(e, t) {
	Object.defineProperty(e, 'name', { value: t, configurable: !0 });
}
d();
f();
m();
function Be(e) {
	return e instanceof Date ||
		Object.prototype.toString.call(e) === '[object Date]';
}
function it(e) {
	return e.toString() !== 'Invalid Date';
}
d();
f();
m();
function St(e) {
	return $t.isDecimal(e)
		? !0
		: e !== null && typeof e == 'object' && typeof e.s == 'number' &&
			typeof e.e == 'number' && typeof e.toFixed == 'function' &&
			Array.isArray(e.d);
}
var Pe = (e, t) => {
		let r = {};
		for (let n of e) {
			let o = n[t];
			r[o] = n;
		}
		return r;
	},
	ir = {
		String: !0,
		Int: !0,
		Float: !0,
		Boolean: !0,
		Long: !0,
		DateTime: !0,
		ID: !0,
		UUID: !0,
		Json: !0,
		Bytes: !0,
		Decimal: !0,
		BigInt: !0,
	};
var Xf = {
	string: 'String',
	boolean: 'Boolean',
	object: 'Json',
	symbol: 'Symbol',
};
function sr(e) {
	return typeof e == 'string' ? e : e.name;
}
function kr(e, t) {
	return t ? `List<${e}>` : e;
}
var em =
		/^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/,
	tm = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function ar(e, t) {
	let r = t == null ? void 0 : t.type;
	if (e === null) return 'null';
	if (Object.prototype.toString.call(e) === '[object BigInt]') {
		return 'BigInt';
	}
	if (Le.isDecimal(e) || r === 'Decimal' && St(e)) return 'Decimal';
	if (x.Buffer.isBuffer(e)) return 'Bytes';
	if (rm(e, t)) return r.name;
	if (e instanceof Ae) return e._getName();
	if (e instanceof Ke) return e._toGraphQLInputType();
	if (Array.isArray(e)) {
		let o = e.reduce((i, s) => {
			let a = ar(s, t);
			return i.includes(a) || i.push(a), i;
		}, []);
		return o.includes('Float') && o.includes('Int') && (o = ['Float']),
			`List<${o.join(' | ')}>`;
	}
	let n = typeof e;
	if (n === 'number') return Math.trunc(e) === e ? 'Int' : 'Float';
	if (Be(e)) return 'DateTime';
	if (n === 'string') {
		if (tm.test(e)) return 'UUID';
		if (new Date(e).toString() === 'Invalid Date') return 'String';
		if (em.test(e)) return 'DateTime';
	}
	return Xf[n];
}
function rm(e, t) {
	var n;
	let r = t == null ? void 0 : t.type;
	if (!om(r)) return !1;
	if (
		(t == null ? void 0 : t.namespace) === 'prisma' && Za.includes(r.name)
	) {
		let o = (n = e == null ? void 0 : e.constructor) == null
			? void 0
			: n.name;
		return typeof o == 'string' && or.instances[o] === e &&
			r.values.includes(o);
	}
	return typeof e == 'string' && r.values.includes(e);
}
function Gn(e, t) {
	return t.reduce((n, o) => {
		let i = (0, Xa.default)(e, o);
		return i < n.distance ? { distance: i, str: o } : n;
	}, {
		distance: Math.min(
			Math.floor(e.length) * 1.1,
			...t.map((n) => n.length * 3),
		),
		str: null,
	}).str;
}
function ur(e, t = !1) {
	if (typeof e == 'string') return e;
	if (e.values) {
		return `enum ${e.name} {
${(0, wi.default)(e.values.join(', '), 2)}
}`;
	}
	{
		let r = (0, wi.default)(
			e.fields.map((n) => {
				let o = `${n.name}`,
					i = `${t ? Q(o) : o}${n.isRequired ? '' : '?'}: ${
						Er(
							n.inputTypes.map((s) =>
								kr(
									nm(s.type) ? s.type.name : sr(s.type),
									s.isList,
								)
							).join(' | '),
						)
					}`;
				return n.isRequired ? i : X(i);
			}).join(`
`),
			2,
		);
		return `${X('type')} ${K(X(e.name))} ${X('{')}
${r}
${X('}')}`;
	}
}
function nm(e) {
	return typeof e != 'string';
}
function Dr(e) {
	return typeof e == 'string' ? e === 'Null' ? 'null' : e : e.name;
}
function Nr(e) {
	return typeof e == 'string' ? e : e.name;
}
function Ei(e, t, r = !1) {
	if (typeof e == 'string') return e === 'Null' ? 'null' : e;
	if (e.values) return e.values.join(' | ');
	let n = e,
		o = t && n.fields.every((i) => {
			var s;
			return i.inputTypes[0].location === 'inputObjectTypes' ||
				((s = i.inputTypes[1]) == null ? void 0 : s.location) ===
					'inputObjectTypes';
		});
	return r ? Dr(e) : n.fields.reduce((i, s) => {
		let a = '';
		return !o && !s.isRequired
			? a = s.inputTypes.map((u) => Dr(u.type)).join(' | ')
			: a = s.inputTypes.map((u) => Ei(u.type, s.isRequired, !0)).join(
				' | ',
			),
			i[s.name + (s.isRequired ? '' : '?')] = a,
			i;
	}, {});
}
function eu(e, t, r) {
	let n = {};
	for (let o of e) n[r(o)] = o;
	for (let o of t) {
		let i = r(o);
		n[i] || (n[i] = o);
	}
	return Object.values(n);
}
function lr(e) {
	return e.substring(0, 1).toLowerCase() + e.substring(1);
}
function tu(e) {
	return e.endsWith('GroupByOutputType');
}
function om(e) {
	return typeof e == 'object' && e !== null && typeof e.name == 'string' &&
		Array.isArray(e.values);
}
var Jn = class {
		constructor({ datamodel: t }) {
			this.datamodel = t,
				this.datamodelEnumMap = this.getDatamodelEnumMap(),
				this.modelMap = this.getModelMap(),
				this.typeMap = this.getTypeMap(),
				this.typeAndModelMap = this.getTypeModelMap();
		}
		getDatamodelEnumMap() {
			return Pe(this.datamodel.enums, 'name');
		}
		getModelMap() {
			return { ...Pe(this.datamodel.models, 'name') };
		}
		getTypeMap() {
			return { ...Pe(this.datamodel.types, 'name') };
		}
		getTypeModelMap() {
			return { ...this.getTypeMap(), ...this.getModelMap() };
		}
	},
	Kn = class {
		constructor({ mappings: t }) {
			this.mappings = t, this.mappingsMap = this.getMappingsMap();
		}
		getMappingsMap() {
			return Pe(this.mappings.modelOperations, 'model');
		}
		getOtherOperationNames() {
			return [
				Object.values(this.mappings.otherOperations.write),
				Object.values(this.mappings.otherOperations.read),
			].flat();
		}
	},
	Wn = class {
		constructor({ schema: t }) {
			this.outputTypeToMergedOutputType = (t) => ({
				...t,
				fields: t.fields,
			});
			this.schema = t,
				this.enumMap = this.getEnumMap(),
				this.queryType = this.getQueryType(),
				this.mutationType = this.getMutationType(),
				this.outputTypes = this.getOutputTypes(),
				this.outputTypeMap = this.getMergedOutputTypeMap(),
				this.resolveOutputTypes(),
				this.inputObjectTypes = this.schema.inputObjectTypes,
				this.inputTypeMap = this.getInputTypeMap(),
				this.resolveInputTypes(),
				this.resolveFieldArgumentTypes(),
				this.queryType = this.outputTypeMap.Query,
				this.mutationType = this.outputTypeMap.Mutation,
				this.rootFieldMap = this.getRootFieldMap();
		}
		get [Symbol.toStringTag]() {
			return 'DMMFClass';
		}
		resolveOutputTypes() {
			for (let t of this.outputTypes.model) {
				for (let r of t.fields) {
					typeof r.outputType.type == 'string' &&
						!ir[r.outputType.type] &&
						(r.outputType.type =
							this.outputTypeMap[r.outputType.type] ||
							this.outputTypeMap[r.outputType.type] ||
							this.enumMap[r.outputType.type] ||
							r.outputType.type);
				}
				t.fieldMap = Pe(t.fields, 'name');
			}
			for (let t of this.outputTypes.prisma) {
				for (let r of t.fields) {
					typeof r.outputType.type == 'string' &&
						!ir[r.outputType.type] &&
						(r.outputType.type =
							this.outputTypeMap[r.outputType.type] ||
							this.outputTypeMap[r.outputType.type] ||
							this.enumMap[r.outputType.type] ||
							r.outputType.type);
				}
				t.fieldMap = Pe(t.fields, 'name');
			}
		}
		resolveInputTypes() {
			let t = this.inputObjectTypes.prisma;
			this.inputObjectTypes.model &&
				t.push(...this.inputObjectTypes.model);
			for (let r of t) {
				for (let n of r.fields) {
					for (let o of n.inputTypes) {
						let i = o.type;
						typeof i == 'string' && !ir[i] &&
							(this.inputTypeMap[i] || this.enumMap[i]) &&
							(o.type = this.inputTypeMap[i] || this.enumMap[i] ||
								i);
					}
				}
				r.fieldMap = Pe(r.fields, 'name');
			}
		}
		resolveFieldArgumentTypes() {
			for (let t of this.outputTypes.prisma) {
				for (let r of t.fields) {
					for (let n of r.args) {
						for (let o of n.inputTypes) {
							let i = o.type;
							typeof i == 'string' && !ir[i] &&
								(o.type = this.inputTypeMap[i] ||
									this.enumMap[i] || i);
						}
					}
				}
			}
			for (let t of this.outputTypes.model) {
				for (let r of t.fields) {
					for (let n of r.args) {
						for (let o of n.inputTypes) {
							let i = o.type;
							typeof i == 'string' && !ir[i] &&
								(o.type = this.inputTypeMap[i] ||
									this.enumMap[i] || o.type);
						}
					}
				}
			}
		}
		getQueryType() {
			return this.schema.outputObjectTypes.prisma.find((t) =>
				t.name === 'Query'
			);
		}
		getMutationType() {
			return this.schema.outputObjectTypes.prisma.find((t) =>
				t.name === 'Mutation'
			);
		}
		getOutputTypes() {
			return {
				model: this.schema.outputObjectTypes.model.map(
					this.outputTypeToMergedOutputType,
				),
				prisma: this.schema.outputObjectTypes.prisma.map(
					this.outputTypeToMergedOutputType,
				),
			};
		}
		getEnumMap() {
			return {
				...Pe(this.schema.enumTypes.prisma, 'name'),
				...this.schema.enumTypes.model
					? Pe(this.schema.enumTypes.model, 'name')
					: void 0,
			};
		}
		hasEnumInNamespace(t, r) {
			var n;
			return ((n = this.schema.enumTypes[r]) == null
				? void 0
				: n.find((o) => o.name === t)) !== void 0;
		}
		getMergedOutputTypeMap() {
			return {
				...Pe(this.outputTypes.model, 'name'),
				...Pe(this.outputTypes.prisma, 'name'),
			};
		}
		getInputTypeMap() {
			return {
				...this.schema.inputObjectTypes.model
					? Pe(this.schema.inputObjectTypes.model, 'name')
					: void 0,
				...Pe(this.schema.inputObjectTypes.prisma, 'name'),
			};
		}
		getRootFieldMap() {
			return {
				...Pe(this.queryType.fields, 'name'),
				...Pe(this.mutationType.fields, 'name'),
			};
		}
	},
	Mt = class {
		constructor(t) {
			return Object.assign(this, new Jn(t), new Kn(t), new Wn(t));
		}
	};
_a(Mt, [Jn, Kn, Wn]);
d();
f();
m();
d();
f();
m();
var NI = ue(ru()), Zl = ue(ou());
jo();
var on = ue(Xo());
d();
f();
m();
d();
f();
m();
var su = ue(iu());
function au(e) {
	return { ...e, mappings: am(e.mappings, e.datamodel) };
}
function am(e, t) {
	return {
		modelOperations: e.modelOperations.filter((n) => {
			let o = t.models.find((i) => i.name === n.model);
			if (!o) throw new Error(`Mapping without model ${n.model}`);
			return o.fields.some((i) => i.kind !== 'object');
		}).map((n) => ({
			model: n.model,
			plural: (0, su.default)(lr(n.model)),
			findUnique: n.findUnique || n.findSingle,
			findUniqueOrThrow: n.findUniqueOrThrow,
			findFirst: n.findFirst,
			findFirstOrThrow: n.findFirstOrThrow,
			findMany: n.findMany,
			create: n.createOne || n.createSingle || n.create,
			createMany: n.createMany,
			delete: n.deleteOne || n.deleteSingle || n.delete,
			update: n.updateOne || n.updateSingle || n.update,
			deleteMany: n.deleteMany,
			updateMany: n.updateMany,
			upsert: n.upsertOne || n.upsertSingle || n.upsert,
			aggregate: n.aggregate,
			groupBy: n.groupBy,
			findRaw: n.findRaw,
			aggregateRaw: n.aggregateRaw,
		})),
		otherOperations: e.otherOperations,
	};
}
function uu(e) {
	return au(e);
}
d();
f();
m();
d();
f();
m();
function vi({ error: e, user_facing_error: t }, r) {
	return t.error_code
		? new Ee(t.message, {
			code: t.error_code,
			clientVersion: r,
			meta: t.meta,
			batchRequestIdx: t.batch_request_idx,
		})
		: new Je(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
d();
f();
m();
var Hn = class {};
d();
f();
m();
function lu(e, t) {
	return um(e)
		? !t || t.kind === 'itx' ? { batch: e, transaction: !1 } : {
			batch: e,
			transaction: !0,
			isolationLevel: t.options.isolationLevel,
		}
		: {
			batch: e,
			transaction: (t == null ? void 0 : t.kind) === 'batch'
				? { isolationLevel: t.options.isolationLevel }
				: void 0,
		};
}
function um(e) {
	return typeof e[0].query == 'string';
}
d();
f();
m();
d();
f();
m();
d();
f();
m();
var zn = class extends Error {
	constructor(r, n) {
		super(r);
		this.clientVersion = n.clientVersion, this.cause = n.cause;
	}
	get [Symbol.toStringTag]() {
		return this.name;
	}
};
var _e = class extends zn {
	constructor(r, n) {
		var o;
		super(r, n);
		this.isRetryable = (o = n.isRetryable) != null ? o : !0;
	}
};
d();
f();
m();
d();
f();
m();
function Y(e, t) {
	return { ...e, isRetryable: t };
}
var cr = class extends _e {
	constructor(r) {
		super('This request must be retried', Y(r, !0));
		this.name = 'ForcedRetryError';
		this.code = 'P5001';
	}
};
L(cr, 'ForcedRetryError');
d();
f();
m();
var gt = class extends _e {
	constructor(r, n) {
		super(r, Y(n, !1));
		this.name = 'InvalidDatasourceError';
		this.code = 'P5002';
	}
};
L(gt, 'InvalidDatasourceError');
d();
f();
m();
var yt = class extends _e {
	constructor(r, n) {
		super(r, Y(n, !1));
		this.name = 'NotImplementedYetError';
		this.code = 'P5004';
	}
};
L(yt, 'NotImplementedYetError');
d();
f();
m();
d();
f();
m();
var ne = class extends _e {
	constructor(r, n) {
		var i;
		super(r, n);
		this.response = n.response;
		let o = (i = this.response.headers) == null
			? void 0
			: i['prisma-request-id'];
		if (o) {
			let s = `(The request id was: ${o})`;
			this.message = this.message + ' ' + s;
		}
	}
};
var jt = class extends ne {
	constructor(r) {
		super('Schema needs to be uploaded', Y(r, !0));
		this.name = 'SchemaMissingError';
		this.code = 'P5005';
	}
};
L(jt, 'SchemaMissingError');
d();
f();
m();
d();
f();
m();
var Ti = 'This request could not be understood by the server',
	$r = class extends ne {
		constructor(r, n, o) {
			super(n || Ti, Y(r, !1));
			this.name = 'BadRequestError';
			this.code = 'P5000';
			o && (this.code = o);
		}
	};
L($r, 'BadRequestError');
d();
f();
m();
var jr = class extends ne {
	constructor(r, n) {
		super('Engine not started: healthcheck timeout', Y(r, !0));
		this.name = 'HealthcheckTimeoutError';
		this.code = 'P5013';
		this.logs = n;
	}
};
L(jr, 'HealthcheckTimeoutError');
d();
f();
m();
var Lr = class extends ne {
	constructor(r, n, o) {
		super(n, Y(r, !0));
		this.name = 'EngineStartupError';
		this.code = 'P5014';
		this.logs = o;
	}
};
L(Lr, 'EngineStartupError');
d();
f();
m();
var Br = class extends ne {
	constructor(r) {
		super('Engine version is not supported', Y(r, !1));
		this.name = 'EngineVersionNotSupportedError';
		this.code = 'P5012';
	}
};
L(Br, 'EngineVersionNotSupportedError');
d();
f();
m();
var Si = 'Request timed out',
	Ur = class extends ne {
		constructor(r, n = Si) {
			super(n, Y(r, !1));
			this.name = 'GatewayTimeoutError';
			this.code = 'P5009';
		}
	};
L(Ur, 'GatewayTimeoutError');
d();
f();
m();
var lm = 'Interactive transaction error',
	qr = class extends ne {
		constructor(r, n = lm) {
			super(n, Y(r, !1));
			this.name = 'InteractiveTransactionError';
			this.code = 'P5015';
		}
	};
L(qr, 'InteractiveTransactionError');
d();
f();
m();
var cm = 'Request parameters are invalid',
	Vr = class extends ne {
		constructor(r, n = cm) {
			super(n, Y(r, !1));
			this.name = 'InvalidRequestError';
			this.code = 'P5011';
		}
	};
L(Vr, 'InvalidRequestError');
d();
f();
m();
var Mi = 'Requested resource does not exist',
	Gr = class extends ne {
		constructor(r, n = Mi) {
			super(n, Y(r, !1));
			this.name = 'NotFoundError';
			this.code = 'P5003';
		}
	};
L(Gr, 'NotFoundError');
d();
f();
m();
var Fi = 'Unknown server error',
	pr = class extends ne {
		constructor(r, n, o) {
			super(n || Fi, Y(r, !0));
			this.name = 'ServerError';
			this.code = 'P5006';
			this.logs = o;
		}
	};
L(pr, 'ServerError');
d();
f();
m();
var Oi = 'Unauthorized, check your connection string',
	Jr = class extends ne {
		constructor(r, n = Oi) {
			super(n, Y(r, !1));
			this.name = 'UnauthorizedError';
			this.code = 'P5007';
		}
	};
L(Jr, 'UnauthorizedError');
d();
f();
m();
var Ri = 'Usage exceeded, retry again later',
	Kr = class extends ne {
		constructor(r, n = Ri) {
			super(n, Y(r, !0));
			this.name = 'UsageExceededError';
			this.code = 'P5008';
		}
	};
L(Kr, 'UsageExceededError');
async function pm(e) {
	let t;
	try {
		t = await e.text();
	} catch (r) {
		return { type: 'EmptyError' };
	}
	try {
		let r = JSON.parse(t);
		if (typeof r == 'string') {
			switch (r) {
				case 'InternalDataProxyError':
					return { type: 'DataProxyError', body: r };
				default:
					return { type: 'UnknownTextError', body: r };
			}
		}
		if (typeof r == 'object' && r !== null) {
			if ('is_panic' in r && 'message' in r && 'error_code' in r) {
				return { type: 'QueryEngineError', body: r };
			}
			if (
				'EngineNotStarted' in r ||
				'InteractiveTransactionMisrouted' in r ||
				'InvalidRequestError' in r
			) {
				let n = Object.values(r)[0].reason;
				return typeof n == 'string' &&
						!['SchemaMissing', 'EngineVersionNotSupported']
							.includes(n)
					? { type: 'UnknownJsonError', body: r }
					: { type: 'DataProxyError', body: r };
			}
		}
		return { type: 'UnknownJsonError', body: r };
	} catch (r) {
		return t === ''
			? { type: 'EmptyError' }
			: { type: 'UnknownTextError', body: t };
	}
}
async function Wr(e, t) {
	if (e.ok) return;
	let r = { clientVersion: t, response: e }, n = await pm(e);
	if (n.type === 'QueryEngineError') {
		throw new Ee(n.body.message, {
			code: n.body.error_code,
			clientVersion: t,
		});
	}
	if (n.type === 'DataProxyError') {
		if (n.body === 'InternalDataProxyError') {
			throw new pr(r, 'Internal Data Proxy error');
		}
		if ('EngineNotStarted' in n.body) {
			if (n.body.EngineNotStarted.reason === 'SchemaMissing') {
				return new jt(r);
			}
			if (
				n.body.EngineNotStarted.reason === 'EngineVersionNotSupported'
			) throw new Br(r);
			if ('EngineStartupError' in n.body.EngineNotStarted.reason) {
				let { msg: o, logs: i } =
					n.body.EngineNotStarted.reason.EngineStartupError;
				throw new Lr(r, o, i);
			}
			if ('KnownEngineStartupError' in n.body.EngineNotStarted.reason) {
				let { msg: o, error_code: i } =
					n.body.EngineNotStarted.reason.KnownEngineStartupError;
				throw new ke(o, t, i);
			}
			if ('HealthcheckTimeout' in n.body.EngineNotStarted.reason) {
				let { logs: o } =
					n.body.EngineNotStarted.reason.HealthcheckTimeout;
				throw new jr(r, o);
			}
		}
		if ('InteractiveTransactionMisrouted' in n.body) {
			let o = {
				IDParseError: 'Could not parse interactive transaction ID',
				NoQueryEngineFoundError:
					'Could not find Query Engine for the specified host and transaction ID',
				TransactionStartError:
					'Could not start interactive transaction',
			};
			throw new qr(r, o[n.body.InteractiveTransactionMisrouted.reason]);
		}
		if ('InvalidRequestError' in n.body) {
			throw new Vr(r, n.body.InvalidRequestError.reason);
		}
	}
	if (e.status === 401 || e.status === 403) throw new Jr(r, fr(Oi, n));
	if (e.status === 404) return new Gr(r, fr(Mi, n));
	if (e.status === 429) throw new Kr(r, fr(Ri, n));
	if (e.status === 504) throw new Ur(r, fr(Si, n));
	if (e.status >= 500) throw new pr(r, fr(Fi, n));
	if (e.status >= 400) throw new $r(r, fr(Ti, n));
}
function fr(e, t) {
	return t.type === 'EmptyError' ? e : `${e}: ${JSON.stringify(t)}`;
}
d();
f();
m();
function cu(e) {
	let t = Math.pow(2, e) * 50,
		r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
		n = t + r;
	return new Promise((o) => setTimeout(() => o(n), n));
}
d();
f();
m();
var pu = {
	'@prisma/debug': 'workspace:*',
	'@prisma/engines-version':
		'4.15.0-28.8fbc245156db7124f997f4cecdd8d1219e360944',
	'@prisma/fetch-engine': 'workspace:*',
	'@prisma/get-platform': 'workspace:*',
	'@swc/core': '1.3.32',
	'@swc/jest': '0.2.26',
	'@types/jest': '29.5.1',
	'@types/node': '18.16.14',
	execa: '5.1.1',
	jest: '29.5.0',
	typescript: '4.9.5',
};
d();
f();
m();
d();
f();
m();
var Qr = class extends _e {
	constructor(r, n) {
		super(
			`Cannot fetch data from service:
${r}`,
			Y(n, !0),
		);
		this.name = 'RequestError';
		this.code = 'P5010';
	}
};
L(Qr, 'RequestError');
d();
f();
m();
function fu() {
	return typeof self == 'undefined' ? 'node' : 'browser';
}
async function Lt(e, t, r = (n) => n) {
	var i;
	let n = t.clientVersion, o = fu();
	try {
		return o === 'browser' ? await r(fetch)(e, t) : await r(Ci)(e, t);
	} catch (s) {
		let a = (i = s.message) != null ? i : 'Unknown error';
		throw new Qr(a, { clientVersion: n });
	}
}
function mm(e) {
	return { ...e.headers, 'Content-Type': 'application/json' };
}
function dm(e) {
	return { method: e.method, headers: mm(e) };
}
function gm(e, t) {
	return {
		text: () => Promise.resolve(x.Buffer.concat(e).toString()),
		json: () => Promise.resolve(JSON.parse(x.Buffer.concat(e).toString())),
		ok: t.statusCode >= 200 && t.statusCode <= 299,
		status: t.statusCode,
		url: t.url,
		headers: t.headers,
	};
}
async function Ci(e, t = {}) {
	let r = ym('https'), n = dm(t), o = [], { origin: i } = new URL(e);
	return new Promise((s, a) => {
		var l;
		let u = r.request(e, n, (c) => {
			let { statusCode: p, headers: { location: g } } = c;
			p >= 301 && p <= 399 && g &&
			(g.startsWith('http') === !1 ? s(Ci(`${i}${g}`, t)) : s(Ci(g, t))),
				c.on('data', (h) => o.push(h)),
				c.on('end', () => s(gm(o, c))),
				c.on('error', a);
		});
		u.on('error', a), u.end((l = t.body) != null ? l : '');
	});
}
var ym = typeof require != 'undefined' ? require : () => {};
var hm = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
	mu = Ie('prisma:client:dataproxyEngine');
async function bm(e) {
	var i, s, a;
	let t = pu['@prisma/engines-version'],
		r = (i = e.clientVersion) != null ? i : 'unknown';
	if (w.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) {
		return w.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
	}
	let [n, o] = (s = r == null ? void 0 : r.split('-')) != null ? s : [];
	if (o === void 0 && hm.test(n)) return n;
	if (o !== void 0 || r === '0.0.0') {
		if (w.env.TEST_DATA_PROXY !== void 0) return '0.0.0';
		let [u] = (a = t.split('-')) != null ? a : [],
			[l, c, p] = u.split('.'),
			g = wm(`<=${l}.${c}.${p}`),
			h = await Lt(g, { clientVersion: r });
		if (!h.ok) {
			throw new Error(
				`Failed to fetch stable Prisma version, unpkg.com status ${h.status} ${h.statusText}, response body: ${
					await h.text() || '<empty body>'
				}`,
			);
		}
		let b = await h.text();
		mu('length of body fetched from unpkg.com', b.length);
		let y;
		try {
			y = JSON.parse(b);
		} catch (P) {
			throw console.error(
				'JSON.parse error: body fetched from unpkg.com: ',
				b,
			),
				P;
		}
		return y.version;
	}
	throw new yt(
		'Only `major.minor.patch` versions are supported by Prisma Data Proxy.',
		{ clientVersion: r },
	);
}
async function du(e) {
	let t = await bm(e);
	return mu('version', t), t;
}
function wm(e) {
	return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var gu = 3,
	Em = Promise.resolve(),
	Ii = Ie('prisma:client:dataproxyEngine'),
	Di = class {
		constructor(
			{ apiKey: t, tracingHelper: r, logLevel: n, logQueries: o },
		) {
			this.apiKey = t,
				this.tracingHelper = r,
				this.logLevel = n,
				this.logQueries = o;
		}
		build({ traceparent: t, interactiveTransaction: r } = {}) {
			let n = { Authorization: `Bearer ${this.apiKey}` };
			this.tracingHelper.isEnabled() &&
			(n.traceparent = t != null
				? t
				: this.tracingHelper.getTraceParent()),
				r && (n['X-transaction-id'] = r.id);
			let o = this.buildCaptureSettings();
			return o.length > 0 && (n['X-capture-telemetry'] = o.join(', ')), n;
		}
		buildCaptureSettings() {
			let t = [];
			return this.tracingHelper.isEnabled() && t.push('tracing'),
				this.logLevel && t.push(this.logLevel),
				this.logQueries && t.push('query'),
				t;
		}
	},
	Hr = class extends Hn {
		constructor(r) {
			var i, s, a, u;
			super();
			this.config = r,
				this.env = { ...this.config.env, ...w.env },
				this.inlineSchema = (i = r.inlineSchema) != null ? i : '',
				this.inlineDatasources = (s = r.inlineDatasources) != null
					? s
					: {},
				this.inlineSchemaHash = (a = r.inlineSchemaHash) != null
					? a
					: '',
				this.clientVersion = (u = r.clientVersion) != null
					? u
					: 'unknown',
				this.logEmitter = r.logEmitter,
				this.tracingHelper = this.config.tracingHelper;
			let [n, o] = this.extractHostAndApiKey();
			this.host = n,
				this.headerBuilder = new Di({
					apiKey: o,
					tracingHelper: this.tracingHelper,
					logLevel: r.logLevel,
					logQueries: r.logQueries,
				}),
				this.remoteClientVersion = Em.then(() => du(this.config)),
				Ii('host', this.host);
		}
		apiKey() {
			return this.headerBuilder.apiKey;
		}
		version() {
			return 'unknown';
		}
		async start() {}
		async stop() {}
		propagateResponseExtensions(r) {
			var n, o;
			(n = r == null ? void 0 : r.logs) != null && n.length &&
			r.logs.forEach((i) => {
				switch (i.level) {
					case 'debug':
					case 'error':
					case 'trace':
					case 'warn':
					case 'info':
						break;
					case 'query': {
						let s = typeof i.attributes.query == 'string'
							? i.attributes.query
							: '';
						if (!this.tracingHelper.isEnabled()) {
							let [a] = s.split('/* traceparent');
							s = a;
						}
						this.logEmitter.emit('query', {
							query: s,
							timestamp: i.timestamp,
							duration: i.attributes.duration_ms,
							params: i.attributes.params,
							target: i.attributes.target,
						});
					}
				}
			}),
				(o = r == null ? void 0 : r.traces) != null && o.length &&
				this.tracingHelper.createEngineSpan({
					span: !0,
					spans: r.traces,
				});
		}
		on(r, n) {
			if (r === 'beforeExit') {
				throw new yt('beforeExit event is not yet supported', {
					clientVersion: this.clientVersion,
				});
			}
			this.logEmitter.on(r, n);
		}
		async url(r) {
			return `https://${this.host}/${await this
				.remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
		}
		getDmmf() {
			throw new yt('getDmmf is not yet supported', {
				clientVersion: this.clientVersion,
			});
		}
		async uploadSchema() {
			let r = { name: 'schemaUpload', internal: !0 };
			return this.tracingHelper.runInChildSpan(r, async () => {
				let n = await Lt(await this.url('schema'), {
					method: 'PUT',
					headers: this.headerBuilder.build(),
					body: this.inlineSchema,
					clientVersion: this.clientVersion,
				});
				n.ok || Ii('schema response status', n.status);
				let o = await Wr(n, this.clientVersion);
				if (o) {
					throw this.logEmitter.emit('warn', {
						message: `Error while uploading schema: ${o.message}`,
					}),
						o;
				}
				this.logEmitter.emit('info', {
					message:
						`Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
				});
			});
		}
		request(
			r,
			{
				traceparent: n,
				interactiveTransaction: o,
				customDataProxyFetch: i,
			},
		) {
			return this.requestInternal({
				body: r,
				traceparent: n,
				interactiveTransaction: o,
				customDataProxyFetch: i,
			});
		}
		async requestBatch(
			r,
			{ traceparent: n, transaction: o, customDataProxyFetch: i },
		) {
			let s = (o == null ? void 0 : o.kind) === 'itx'
					? o.options
					: void 0,
				a = lu(r, o),
				{ batchResult: u, elapsed: l } = await this.requestInternal({
					body: a,
					customDataProxyFetch: i,
					interactiveTransaction: s,
					traceparent: n,
				});
			return u.map((c) =>
				'errors' in c && c.errors.length > 0
					? vi(c.errors[0], this.clientVersion)
					: { data: c, elapsed: l }
			);
		}
		requestInternal(
			{
				body: r,
				traceparent: n,
				customDataProxyFetch: o,
				interactiveTransaction: i,
			},
		) {
			return this.withRetry({
				actionGerund: 'querying',
				callback: async ({ logHttpCall: s }) => {
					let a = i
						? `${i.payload.endpoint}/graphql`
						: await this.url('graphql');
					s(a);
					let u = await Lt(a, {
						method: 'POST',
						headers: this.headerBuilder.build({
							traceparent: n,
							interactiveTransaction: i,
						}),
						body: JSON.stringify(r),
						clientVersion: this.clientVersion,
					}, o);
					u.ok || Ii('graphql response status', u.status);
					let l = await Wr(u, this.clientVersion);
					await this.handleError(l);
					let c = await u.json(), p = c.extensions;
					if (p && this.propagateResponseExtensions(p), c.errors) {
						throw c.errors.length === 1
							? vi(c.errors[0], this.config.clientVersion)
							: new Je(c.errors, {
								clientVersion: this.config.clientVersion,
							});
					}
					return c;
				},
			});
		}
		async transaction(r, n, o) {
			let i = {
				start: 'starting',
				commit: 'committing',
				rollback: 'rolling back',
			};
			return this.withRetry({
				actionGerund: `${i[r]} transaction`,
				callback: async ({ logHttpCall: s }) => {
					var a, u;
					if (r === 'start') {
						let l = JSON.stringify({
								max_wait:
									(a = o == null ? void 0 : o.maxWait) != null
										? a
										: 2e3,
								timeout:
									(u = o == null ? void 0 : o.timeout) != null
										? u
										: 5e3,
								isolation_level: o == null
									? void 0
									: o.isolationLevel,
							}),
							c = await this.url('transaction/start');
						s(c);
						let p = await Lt(c, {
								method: 'POST',
								headers: this.headerBuilder.build({
									traceparent: n.traceparent,
								}),
								body: l,
								clientVersion: this.clientVersion,
							}),
							g = await Wr(p, this.clientVersion);
						await this.handleError(g);
						let h = await p.json(), b = h.extensions;
						b && this.propagateResponseExtensions(b);
						let y = h.id, P = h['data-proxy'].endpoint;
						return { id: y, payload: { endpoint: P } };
					} else {
						let l = `${o.payload.endpoint}/${r}`;
						s(l);
						let c = await Lt(l, {
								method: 'POST',
								headers: this.headerBuilder.build({
									traceparent: n.traceparent,
								}),
								clientVersion: this.clientVersion,
							}),
							g = (await c.json()).extensions;
						g && this.propagateResponseExtensions(g);
						let h = await Wr(c, this.clientVersion);
						await this.handleError(h);
						return;
					}
				},
			});
		}
		extractHostAndApiKey() {
			let r = this.mergeOverriddenDatasources(),
				n = Object.keys(r)[0],
				o = r[n],
				i = this.resolveDatasourceURL(n, o),
				s;
			try {
				s = new URL(i);
			} catch (p) {
				throw new gt('Could not parse URL of the datasource', {
					clientVersion: this.clientVersion,
				});
			}
			let { protocol: a, host: u, searchParams: l } = s;
			if (a !== 'prisma:') {
				throw new gt(
					'Datasource URL must use prisma:// protocol when --data-proxy is used',
					{ clientVersion: this.clientVersion },
				);
			}
			let c = l.get('api_key');
			if (c === null || c.length < 1) {
				throw new gt('No valid API key found in the datasource URL', {
					clientVersion: this.clientVersion,
				});
			}
			return [u, c];
		}
		mergeOverriddenDatasources() {
			if (this.config.datasources === void 0) {
				return this.inlineDatasources;
			}
			let r = { ...this.inlineDatasources };
			for (let n of this.config.datasources) {
				if (!this.inlineDatasources[n.name]) {
					throw new Error(`Unknown datasource: ${n.name}`);
				}
				r[n.name] = { url: { fromEnvVar: null, value: n.url } };
			}
			return r;
		}
		resolveDatasourceURL(r, n) {
			if (n.url.value) return n.url.value;
			if (n.url.fromEnvVar) {
				let o = n.url.fromEnvVar, i = this.env[o];
				if (i === void 0) {
					throw new gt(
						`Datasource "${r}" references an environment variable "${o}" that is not set`,
						{ clientVersion: this.clientVersion },
					);
				}
				return i;
			}
			throw new gt(
				`Datasource "${r}" specification is invalid: both value and fromEnvVar are null`,
				{ clientVersion: this.clientVersion },
			);
		}
		metrics() {
			throw new yt('Metric are not yet supported for Data Proxy', {
				clientVersion: this.clientVersion,
			});
		}
		async withRetry(r) {
			var n;
			for (let o = 0;; o++) {
				let i = (s) => {
					this.logEmitter.emit('info', {
						message: `Calling ${s} (n=${o})`,
					});
				};
				try {
					return await r.callback({ logHttpCall: i });
				} catch (s) {
					if (!(s instanceof _e) || !s.isRetryable) throw s;
					if (o >= gu) throw s instanceof cr ? s.cause : s;
					this.logEmitter.emit('warn', {
						message: `Attempt ${
							o + 1
						}/${gu} failed for ${r.actionGerund}: ${
							(n = s.message) != null ? n : '(unknown)'
						}`,
					});
					let a = await cu(o);
					this.logEmitter.emit('warn', {
						message: `Retrying after ${a}ms`,
					});
				}
			}
		}
		async handleError(r) {
			if (r instanceof jt) {
				throw await this.uploadSchema(),
					new cr({ clientVersion: this.clientVersion, cause: r });
			}
			if (r) throw r;
		}
	};
d();
f();
m();
d();
f();
m();
var Bt = ue(Rn());
var Li = ue(Cn());
d();
f();
m();
d();
f();
m();
var st = class {
	constructor() {
		this._map = new Map();
	}
	get(t) {
		var r;
		return (r = this._map.get(t)) == null ? void 0 : r.value;
	}
	set(t, r) {
		this._map.set(t, { value: r });
	}
	getOrCreate(t, r) {
		let n = this._map.get(t);
		if (n) return n.value;
		let o = r();
		return this.set(t, o), o;
	}
};
d();
f();
m();
function We(e) {
	return e.replace(/^./, (t) => t.toLowerCase());
}
function hu(e, t, r) {
	let n = We(r);
	return !t.result || !(t.result.$allModels || t.result[n]) ? e : xm({
		...e,
		...yu(t.name, e, t.result.$allModels),
		...yu(t.name, e, t.result[n]),
	});
}
function xm(e) {
	let t = new st(),
		r = (n, o) =>
			t.getOrCreate(
				n,
				() =>
					o.has(n)
						? [n]
						: (o.add(n),
							e[n] ? e[n].needs.flatMap((i) => r(i, o)) : [n]),
			);
	return er(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function yu(e, t, r) {
	return r
		? er(
			r,
			({ needs: n, compute: o }, i) => ({
				name: i,
				needs: n ? Object.keys(n).filter((s) => n[s]) : [],
				compute: Am(t, i, o),
			}),
		)
		: {};
}
function Am(e, t, r) {
	var o;
	let n = (o = e == null ? void 0 : e[t]) == null ? void 0 : o.compute;
	return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function Yn(e, t) {
	if (!t) return e;
	let r = { ...e };
	for (let n of Object.values(t)) {
		if (!!e[n.name]) for (let o of n.needs) r[o] = !0;
	}
	return r;
}
d();
f();
m();
var Au = ue(Rn());
d();
f();
m();
jo();
d();
f();
m();
d();
f();
m();
d();
f();
m();
var bu = {
	keyword: wt,
	entity: wt,
	value: (e) => K(Wt(e)),
	punctuation: Wt,
	directive: wt,
	function: wt,
	variable: (e) => K(Wt(e)),
	string: (e) => K(Q(e)),
	boolean: fn,
	number: wt,
	comment: mn,
};
var Pm = (e) => e,
	Zn = {},
	vm = 0,
	V = {
		manual: Zn.Prism && Zn.Prism.manual,
		disableWorkerMessageHandler: Zn.Prism &&
			Zn.Prism.disableWorkerMessageHandler,
		util: {
			encode: function (e) {
				if (e instanceof Xe) {
					let t = e;
					return new Xe(t.type, V.util.encode(t.content), t.alias);
				} else {return Array.isArray(e)
						? e.map(V.util.encode)
						: e.replace(/&/g, '&amp;').replace(/</g, '&lt;')
							.replace(/\u00a0/g, ' ');}
			},
			type: function (e) {
				return Object.prototype.toString.call(e).slice(8, -1);
			},
			objId: function (e) {
				return e.__id ||
					Object.defineProperty(e, '__id', { value: ++vm }),
					e.__id;
			},
			clone: function e(t, r) {
				let n, o, i = V.util.type(t);
				switch (r = r || {}, i) {
					case 'Object':
						if (o = V.util.objId(t), r[o]) return r[o];
						n = {}, r[o] = n;
						for (let s in t) {
							t.hasOwnProperty(s) && (n[s] = e(t[s], r));
						}
						return n;
					case 'Array':
						return o = V.util.objId(t),
							r[o]
								? r[o]
								: (n = [],
									r[o] = n,
									t.forEach(function (s, a) {
										n[a] = e(s, r);
									}),
									n);
					default:
						return t;
				}
			},
		},
		languages: {
			extend: function (e, t) {
				let r = V.util.clone(V.languages[e]);
				for (let n in t) r[n] = t[n];
				return r;
			},
			insertBefore: function (e, t, r, n) {
				n = n || V.languages;
				let o = n[e], i = {};
				for (let a in o) {
					if (o.hasOwnProperty(a)) {
						if (a == t) {
							for (let u in r) {
								r.hasOwnProperty(u) && (i[u] = r[u]);
							}
						}
						r.hasOwnProperty(a) || (i[a] = o[a]);
					}
				}
				let s = n[e];
				return n[e] = i,
					V.languages.DFS(V.languages, function (a, u) {
						u === s && a != e && (this[a] = i);
					}),
					i;
			},
			DFS: function e(t, r, n, o) {
				o = o || {};
				let i = V.util.objId;
				for (let s in t) {
					if (t.hasOwnProperty(s)) {
						r.call(t, s, t[s], n || s);
						let a = t[s], u = V.util.type(a);
						u === 'Object' && !o[i(a)]
							? (o[i(a)] = !0, e(a, r, null, o))
							: u === 'Array' && !o[i(a)] &&
								(o[i(a)] = !0, e(a, r, s, o));
					}
				}
			},
		},
		plugins: {},
		highlight: function (e, t, r) {
			let n = { code: e, grammar: t, language: r };
			return V.hooks.run('before-tokenize', n),
				n.tokens = V.tokenize(n.code, n.grammar),
				V.hooks.run('after-tokenize', n),
				Xe.stringify(V.util.encode(n.tokens), n.language);
		},
		matchGrammar: function (e, t, r, n, o, i, s) {
			for (let y in r) {
				if (!r.hasOwnProperty(y) || !r[y]) continue;
				if (y == s) return;
				let P = r[y];
				P = V.util.type(P) === 'Array' ? P : [P];
				for (let S = 0; S < P.length; ++S) {
					let v = P[S],
						T = v.inside,
						A = !!v.lookbehind,
						F = !!v.greedy,
						C = 0,
						I = v.alias;
					if (F && !v.pattern.global) {
						let G = v.pattern.toString().match(/[imuy]*$/)[0];
						v.pattern = RegExp(v.pattern.source, G + 'g');
					}
					v = v.pattern || v;
					for (
						let G = n, z = o;
						G < t.length;
						z += t[G].length, ++G
					) {
						let H = t[G];
						if (t.length > e.length) return;
						if (H instanceof Xe) continue;
						if (F && G != t.length - 1) {
							v.lastIndex = z;
							var p = v.exec(e);
							if (!p) break;
							var c = p.index + (A ? p[1].length : 0),
								g = p.index + p[0].length,
								a = G,
								u = z;
							for (
								let D = t.length;
								a < D &&
								(u < g || !t[a].type && !t[a - 1].greedy);
								++a
							) u += t[a].length, c >= u && (++G, z = u);
							if (t[G] instanceof Xe) continue;
							l = a - G, H = e.slice(z, u), p.index -= z;
						} else {
							v.lastIndex = 0;
							var p = v.exec(H), l = 1;
						}
						if (!p) {
							if (i) break;
							continue;
						}
						A && (C = p[1] ? p[1].length : 0);
						var c = p.index + C,
							p = p[0].slice(C),
							g = c + p.length,
							h = H.slice(0, c),
							b = H.slice(g);
						let U = [G, l];
						h && (++G, z += h.length, U.push(h));
						let J = new Xe(y, T ? V.tokenize(p, T) : p, I, p, F);
						if (
							U.push(J),
								b && U.push(b),
								Array.prototype.splice.apply(t, U),
								l != 1 && V.matchGrammar(e, t, r, G, z, !0, y),
								i
						) break;
					}
				}
			}
		},
		tokenize: function (e, t) {
			let r = [e], n = t.rest;
			if (n) {
				for (let o in n) t[o] = n[o];
				delete t.rest;
			}
			return V.matchGrammar(e, r, t, 0, 0, !1), r;
		},
		hooks: {
			all: {},
			add: function (e, t) {
				let r = V.hooks.all;
				r[e] = r[e] || [], r[e].push(t);
			},
			run: function (e, t) {
				let r = V.hooks.all[e];
				if (!(!r || !r.length)) for (var n = 0, o; o = r[n++];) o(t);
			},
		},
		Token: Xe,
	};
V.languages.clike = {
	comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, {
		pattern: /(^|[^\\:])\/\/.*/,
		lookbehind: !0,
		greedy: !0,
	}],
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0,
	},
	'class-name': {
		pattern:
			/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: !0,
		inside: { punctuation: /[.\\]/ },
	},
	keyword:
		/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	boolean: /\b(?:true|false)\b/,
	function: /\w+(?=\()/,
	number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	punctuation: /[{}[\];(),.:]/,
};
V.languages.javascript = V.languages.extend('clike', {
	'class-name': [V.languages.clike['class-name'], {
		pattern:
			/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
		lookbehind: !0,
	}],
	keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, {
		pattern:
			/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
		lookbehind: !0,
	}],
	number:
		/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	function:
		/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	operator:
		/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
V.languages.javascript['class-name'][0].pattern =
	/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
V.languages.insertBefore('javascript', 'keyword', {
	regex: {
		pattern:
			/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
		lookbehind: !0,
		greedy: !0,
	},
	'function-variable': {
		pattern:
			/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function',
	},
	parameter: [{
		pattern:
			/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
		lookbehind: !0,
		inside: V.languages.javascript,
	}, {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
		inside: V.languages.javascript,
	}, {
		pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
		lookbehind: !0,
		inside: V.languages.javascript,
	}, {
		pattern:
			/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
		lookbehind: !0,
		inside: V.languages.javascript,
	}],
	constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
V.languages.markup && V.languages.markup.tag.addInlined('script', 'javascript');
V.languages.js = V.languages.javascript;
V.languages.typescript = V.languages.extend('javascript', {
	keyword:
		/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
	builtin:
		/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
V.languages.ts = V.languages.typescript;
function Xe(e, t, r, n, o) {
	this.type = e,
		this.content = t,
		this.alias = r,
		this.length = (n || '').length | 0,
		this.greedy = !!o;
}
Xe.stringify = function (e, t) {
	return typeof e == 'string' ? e : Array.isArray(e)
		? e.map(function (r) {
			return Xe.stringify(r, t);
		}).join('')
		: Tm(e.type)(e.content);
};
function Tm(e) {
	return bu[e] || Pm;
}
function wu(e) {
	return Sm(e, V.languages.javascript);
}
function Sm(e, t) {
	return V.tokenize(e, t).map((n) => Xe.stringify(n)).join('');
}
d();
f();
m();
var Eu = ue(ri());
function xu(e) {
	return (0, Eu.default)(e);
}
var et = class {
	static read(t) {
		let r;
		try {
			r = pn.readFileSync(t, 'utf-8');
		} catch (n) {
			return null;
		}
		return et.fromContent(r);
	}
	static fromContent(t) {
		let r = t.split(/\r?\n/);
		return new et(1, r);
	}
	constructor(t, r) {
		this.firstLineNumber = t, this.lines = r;
	}
	get lastLineNumber() {
		return this.firstLineNumber + this.lines.length - 1;
	}
	mapLineAt(t, r) {
		if (
			t < this.firstLineNumber ||
			t > this.lines.length + this.firstLineNumber
		) return this;
		let n = t - this.firstLineNumber, o = [...this.lines];
		return o[n] = r(o[n]), new et(this.firstLineNumber, o);
	}
	mapLines(t) {
		return new et(
			this.firstLineNumber,
			this.lines.map((r, n) => t(r, this.firstLineNumber + n)),
		);
	}
	lineAt(t) {
		return this.lines[t - this.firstLineNumber];
	}
	prependSymbolAt(t, r) {
		return this.mapLines((n, o) => o === t ? `${r} ${n}` : `  ${n}`);
	}
	slice(t, r) {
		let n = this.lines.slice(t - 1, r).join(`
`);
		return new et(
			t,
			xu(n).split(`
`),
		);
	}
	highlight() {
		let t = wu(this.toString());
		return new et(
			this.firstLineNumber,
			t.split(`
`),
		);
	}
	toString() {
		return this.lines.join(`
`);
	}
};
var Mm = {
		red: Z,
		gray: mn,
		dim: X,
		bold: K,
		underline: Vs,
		highlightSource: (e) => e.highlight(),
	},
	Fm = {
		red: (e) => e,
		gray: (e) => e,
		dim: (e) => e,
		bold: (e) => e,
		underline: (e) => e,
		highlightSource: (e) => e,
	};
function Om(
	{
		callsite: e,
		message: t,
		originalMethod: r,
		isPanic: n,
		callArguments: o,
	},
	i,
) {
	var p;
	let s = {
		functionName: `prisma.${r}()`,
		message: t,
		isPanic: n != null ? n : !1,
		callArguments: o,
	};
	if (!e || typeof window != 'undefined' || w.env.NODE_ENV === 'production') {
		return s;
	}
	let a = e.getLocation();
	if (!a || !a.lineNumber || !a.columnNumber) return s;
	let u = Math.max(1, a.lineNumber - 3),
		l = (p = et.read(a.fileName)) == null
			? void 0
			: p.slice(u, a.lineNumber),
		c = l == null ? void 0 : l.lineAt(a.lineNumber);
	if (l && c) {
		let g = Cm(c), h = Rm(c);
		if (!h) return s;
		s.functionName = `${h.code})`,
			s.location = a,
			n || (l = l.mapLineAt(a.lineNumber, (y) =>
				y.slice(0, h.openingBraceIndex))),
			l = i.highlightSource(l);
		let b = String(l.lastLineNumber).length;
		if (
			s.contextLines = l.mapLines((y, P) =>
				i.gray(String(P).padStart(b)) + ' ' + y
			).mapLines((y) => i.dim(y)).prependSymbolAt(
				a.lineNumber,
				i.bold(i.red('\u2192')),
			), o
		) {
			let y = g + b + 1;
			y += 2, s.callArguments = (0, Au.default)(o, y).slice(y);
		}
	}
	return s;
}
function Rm(e) {
	let t = Object.keys(Ge.ModelAction).join('|'),
		n = new RegExp(String.raw`\.(${t})\(`).exec(e);
	if (n) {
		let o = n.index + n[0].length, i = e.lastIndexOf(' ', n.index) + 1;
		return { code: e.slice(i, o), openingBraceIndex: o };
	}
	return null;
}
function Cm(e) {
	let t = 0;
	for (let r = 0; r < e.length; r++) {
		if (e.charAt(r) !== ' ') return t;
		t++;
	}
	return t;
}
function Im(
	{
		functionName: e,
		location: t,
		message: r,
		isPanic: n,
		contextLines: o,
		callArguments: i,
	},
	s,
) {
	let a = [''], u = t ? ' in' : ':';
	if (
		n
			? (a.push(
				s.red(
					`Oops, an unknown error occurred! This is ${
						s.bold('on us')
					}, you did nothing wrong.`,
				),
			),
				a.push(
					s.red(
						`It occurred in the ${
							s.bold(`\`${e}\``)
						} invocation${u}`,
					),
				))
			: a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)),
			t && a.push(s.underline(Dm(t))),
			o
	) {
		a.push('');
		let l = [o.toString()];
		i && (l.push(i), l.push(s.dim(')'))),
			a.push(l.join('')),
			i && a.push('');
	} else a.push(''), i && a.push(i), a.push('');
	return a.push(r),
		a.join(`
`);
}
function Dm(e) {
	let t = [e.fileName];
	return e.lineNumber && t.push(String(e.lineNumber)),
		e.columnNumber && t.push(String(e.columnNumber)),
		t.join(':');
}
function at(e) {
	let t = e.showColors ? Mm : Fm, r = Om(e, t);
	return Im(r, t);
}
d();
f();
m();
function vu(e) {
	return e instanceof x.Buffer || e instanceof Date || e instanceof RegExp;
}
function Tu(e) {
	if (e instanceof x.Buffer) {
		let t = x.Buffer.alloc
			? x.Buffer.alloc(e.length)
			: new x.Buffer(e.length);
		return e.copy(t), t;
	} else {
		if (e instanceof Date) return new Date(e.getTime());
		if (e instanceof RegExp) return new RegExp(e);
		throw new Error('Unexpected situation');
	}
}
function Su(e) {
	let t = [];
	return e.forEach(function (r, n) {
		typeof r == 'object' && r !== null
			? Array.isArray(r)
				? t[n] = Su(r)
				: vu(r)
				? t[n] = Tu(r)
				: t[n] = zr({}, r)
			: t[n] = r;
	}),
		t;
}
function Pu(e, t) {
	return t === '__proto__' ? void 0 : e[t];
}
var zr = function (e, ...t) {
	if (!e || typeof e != 'object') return !1;
	if (t.length === 0) return e;
	let r, n;
	for (let o of t) {
		if (!(typeof o != 'object' || o === null || Array.isArray(o))) {
			for (let i of Object.keys(o)) {
				if (n = Pu(e, i), r = Pu(o, i), r !== e) {
					if (typeof r != 'object' || r === null) {
						e[i] = r;
						continue;
					} else if (Array.isArray(r)) {
						e[i] = Su(r);
						continue;
					} else if (vu(r)) {
						e[i] = Tu(r);
						continue;
					} else if (
						typeof n != 'object' || n === null || Array.isArray(n)
					) {
						e[i] = zr({}, r);
						continue;
					} else {
						e[i] = zr(n, r);
						continue;
					}
				}
			}
		}
	}
	return e;
};
d();
f();
m();
var Mu = (e) => Array.isArray(e) ? e : e.split('.'),
	Yr = (e, t) => Mu(t).reduce((r, n) => r && r[n], e),
	Xn = (e, t, r) =>
		Mu(t).reduceRight(
			(n, o, i, s) => Object.assign({}, Yr(e, s.slice(0, i)), { [o]: n }),
			r,
		);
d();
f();
m();
function Fu(e, t) {
	if (!e || typeof e != 'object' || typeof e.hasOwnProperty != 'function') {
		return e;
	}
	let r = {};
	for (let n in e) {
		let o = e[n];
		Object.hasOwnProperty.call(e, n) && t(n, o) && (r[n] = o);
	}
	return r;
}
d();
f();
m();
var km = {
	'[object Date]': !0,
	'[object Uint8Array]': !0,
	'[object Decimal]': !0,
};
function Ou(e) {
	return e
		? typeof e == 'object' && !km[Object.prototype.toString.call(e)]
		: !1;
}
d();
f();
m();
function Ru(e, t) {
	let r = {}, n = Array.isArray(t) ? t : [t];
	for (let o in e) {
		Object.hasOwnProperty.call(e, o) && !n.includes(o) && (r[o] = e[o]);
	}
	return r;
}
d();
f();
m();
var _i = ue(Cn());
d();
f();
m();
var Nm = Iu(),
	_m = ku(),
	$m = Nu().default,
	jm = (e, t, r) => {
		let n = [];
		return function o(i, s = {}, a = '', u = []) {
			s.indent = s.indent || '	';
			let l;
			s.inlineCharacterLimit === void 0
				? l = {
					newLine: `
`,
					newLineOrSpace: `
`,
					pad: a,
					indent: a + s.indent,
				}
				: l = {
					newLine: '@@__STRINGIFY_OBJECT_NEW_LINE__@@',
					newLineOrSpace:
						'@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@',
					pad: '@@__STRINGIFY_OBJECT_PAD__@@',
					indent: '@@__STRINGIFY_OBJECT_INDENT__@@',
				};
			let c = (p) => {
				if (s.inlineCharacterLimit === void 0) return p;
				let g = p.replace(new RegExp(l.newLine, 'g'), '').replace(
					new RegExp(l.newLineOrSpace, 'g'),
					' ',
				).replace(new RegExp(l.pad + '|' + l.indent, 'g'), '');
				return g.length <= s.inlineCharacterLimit ? g : p.replace(
					new RegExp(l.newLine + '|' + l.newLineOrSpace, 'g'),
					`
`,
				).replace(new RegExp(l.pad, 'g'), a).replace(
					new RegExp(l.indent, 'g'),
					a + s.indent,
				);
			};
			if (n.indexOf(i) !== -1) return '"[Circular]"';
			if (x.Buffer.isBuffer(i)) return `Buffer(${x.Buffer.length})`;
			if (
				i == null || typeof i == 'number' || typeof i == 'boolean' ||
				typeof i == 'function' || typeof i == 'symbol' ||
				i instanceof Ae || Nm(i)
			) return String(i);
			if (Be(i)) {
				return `new Date('${
					it(i) ? i.toISOString() : 'Invalid Date'
				}')`;
			}
			if (i instanceof Ke) {
				return `prisma.${lr(i.modelName)}.fields.${i.name}`;
			}
			if (Array.isArray(i)) {
				if (i.length === 0) return '[]';
				n.push(i);
				let p = '[' + l.newLine + i.map((g, h) => {
					let b = i.length - 1 === h
							? l.newLine
							: ',' + l.newLineOrSpace,
						y = o(g, s, a + s.indent, [...u, h]);
					s.transformValue && (y = s.transformValue(i, h, y));
					let P = l.indent + y + b;
					return s.transformLine &&
						(P = s.transformLine({
							obj: i,
							indent: l.indent,
							key: h,
							stringifiedValue: y,
							value: i[h],
							eol: b,
							originalLine: P,
							path: u.concat(h),
						})),
						P;
				}).join('') + l.pad + ']';
				return n.pop(), c(p);
			}
			if (_m(i)) {
				let p = Object.keys(i).concat($m(i));
				if (
					s.filter && (p = p.filter((h) => s.filter(i, h))),
						p.length === 0
				) return '{}';
				n.push(i);
				let g = '{' + l.newLine + p.map((h, b) => {
					let y = p.length - 1 === b
							? l.newLine
							: ',' + l.newLineOrSpace,
						P = typeof h == 'symbol',
						S = !P && /^[a-z$_][a-z$_0-9]*$/i.test(h),
						v = P || S ? h : o(h, s, void 0, [...u, h]),
						T = o(i[h], s, a + s.indent, [...u, h]);
					s.transformValue && (T = s.transformValue(i, h, T));
					let A = l.indent + String(v) + ': ' + T + y;
					return s.transformLine &&
						(A = s.transformLine({
							obj: i,
							indent: l.indent,
							key: v,
							stringifiedValue: T,
							value: i[h],
							eol: y,
							originalLine: A,
							path: u.concat(v),
						})),
						A;
				}).join('') + l.pad + '}';
				return n.pop(), c(g);
			}
			return i = String(i).replace(/[\r\n]/g, (p) =>
				p === `
`
					? '\\n'
					: '\\r'),
				s.singleQuotes === !1
					? (i = i.replace(/"/g, '\\"'), `"${i}"`)
					: (i = i.replace(/\\?'/g, '\\\''), `'${i}'`);
		}(e, t, r);
	},
	Zr = jm;
var Ni = '@@__DIM_POINTER__@@';
function eo({ ast: e, keyPaths: t, valuePaths: r, missingItems: n }) {
	let o = e;
	for (let { path: i, type: s } of n) o = Xn(o, i, s);
	return Zr(o, {
		indent: '  ',
		transformLine: (
			{
				indent: i,
				key: s,
				value: a,
				stringifiedValue: u,
				eol: l,
				path: c,
			},
		) => {
			let p = c.join('.'),
				g = t.includes(p),
				h = r.includes(p),
				b = n.find((P) => P.path === p),
				y = u;
			if (b) {
				typeof a == 'string' && (y = y.slice(1, y.length - 1));
				let P = b.isRequired ? '' : '?',
					S = b.isRequired ? '+' : '?',
					T = (b.isRequired ? (A) => K(Q(A)) : Q)(
						Um(s + P + ': ' + y + l, i, S),
					);
				return b.isRequired || (T = X(T)), T;
			} else {
				let P = n.some((A) => p.startsWith(A.path)),
					S = s[s.length - 2] === '?';
				S && (s = s.slice(1, s.length - 1)),
					S && typeof a == 'object' && a !== null && (y = y.split(`
`).map((A, F, C) => F === C.length - 1 ? A + Ni : A).join(`
`)),
					P && typeof a == 'string' &&
					(y = y.slice(1, y.length - 1), S || (y = K(y))),
					(typeof a != 'object' || a === null) && !h && !P &&
					(y = X(y));
				let v = '';
				typeof s == 'string' && (v = (g ? Z(s) : s) + ': '),
					y = h ? Z(y) : y;
				let T = i + v + y + (P ? l : X(l));
				if (g || h) {
					let A = T.split(`
`),
						F = String(s).length,
						C = g ? Z('~'.repeat(F)) : ' '.repeat(F),
						I = h ? Lm(i, s, a, u) : 0,
						G = h && _u(a),
						z = h ? '  ' + Z('~'.repeat(I)) : '';
					C && C.length > 0 && !G && A.splice(1, 0, i + C + z),
						C && C.length > 0 && G &&
						A.splice(A.length - 1, 0, i.slice(0, i.length - 2) + z),
						T = A.join(`
`);
				}
				return T;
			}
		},
	});
}
function Lm(e, t, r, n) {
	return r === null
		? 4
		: typeof r == 'string'
		? r.length + 2
		: Array.isArray(r) && r.length == 0
		? 2
		: _u(r)
		? Math.abs(Bm(`${t}: ${(0, _i.default)(n)}`) - e.length)
		: Be(r)
		? it(r) ? `new Date('${r.toISOString()}')`.length : 24
		: String(r).length;
}
function _u(e) {
	return typeof e == 'object' && e !== null && !(e instanceof Ae) && !Be(e);
}
function Bm(e) {
	return e.split(`
`).reduce((t, r) => r.length > t ? r.length : t, 0);
}
function Um(e, t, r) {
	return e.split(`
`).map((n, o, i) =>
		o === 0 ? r + t.slice(1) + n : o < i.length - 1 ? r + n.slice(1) : n
	).map((n) =>
		(0, _i.default)(n).includes(Ni)
			? X(n.replace(Ni, ''))
			: n.includes('?')
			? X(n)
			: n
	).join(`
`);
}
var Xr = 2,
	Bi = class {
		constructor(t, r) {
			this.type = t;
			this.children = r;
			this.printFieldError = ({ error: t }, r, n) => {
				if (t.type === 'emptySelect') {
					let o = n
						? ''
						: ` Available options are listed in ${X(Q('green'))}.`;
					return `The ${Z('`select`')} statement for type ${
						K(Nr(t.field.outputType.type))
					} must not be empty.${o}`;
				}
				if (t.type === 'emptyInclude') {
					if (r.length === 0) {
						return `${
							K(Nr(t.field.outputType.type))
						} does not have any relation and therefore can't have an ${
							Z('`include`')
						} statement.`;
					}
					let o = n
						? ''
						: ` Available options are listed in ${X(Q('green'))}.`;
					return `The ${Z('`include`')} statement for type ${
						Z(Nr(t.field.outputType.type))
					} must not be empty.${o}`;
				}
				if (t.type === 'noTrueSelect') {
					return `The ${Z('`select`')} statement for type ${
						Z(Nr(t.field.outputType.type))
					} needs ${Z('at least one truthy value')}.`;
				}
				if (t.type === 'includeAndSelect') {
					return `Please ${K('either')} use ${Q('`include`')} or ${
						Q('`select`')
					}, but ${Z('not both')} at the same time.`;
				}
				if (t.type === 'invalidFieldName') {
					let o = t.isInclude ? 'include' : 'select',
						i = t.isIncludeScalar ? 'Invalid scalar' : 'Unknown',
						s = n ? '' : t.isInclude && r.length === 0
							? `
This model has no relations, so you can't use ${Z('include')} with it.`
							: ` Available options are listed in ${
								X(Q('green'))
							}.`,
						a = `${i} field ${Z(`\`${t.providedName}\``)} for ${
							Z(o)
						} statement on model ${K(Er(t.modelName))}.${s}`;
					return t.didYouMean &&
						(a += ` Did you mean ${Q(`\`${t.didYouMean}\``)}?`),
						t.isIncludeScalar && (a += `
Note, that ${K('include')} statements only accept relation fields.`),
						a;
				}
				if (t.type === 'invalidFieldType') {
					return `Invalid value ${
						Z(`${Zr(t.providedValue)}`)
					} of type ${Z(ar(t.providedValue, void 0))} for field ${
						K(`${t.fieldName}`)
					} on model ${K(Er(t.modelName))}. Expected either ${
						Q('true')
					} or ${Q('false')}.`;
				}
			};
			this.printArgError = ({ error: t, path: r }, n, o) => {
				if (t.type === 'invalidName') {
					let i = `Unknown arg ${Z(`\`${t.providedName}\``)} in ${
						K(r.join('.'))
					} for type ${
						K(t.outputType ? t.outputType.name : Dr(t.originalType))
					}.`;
					return t.didYouMeanField
						? i += `
\u2192 Did you forget to wrap it with \`${Q('select')}\`? ${
							X(
								'e.g. ' +
									Q(`{ select: { ${t.providedName}: ${t.providedValue} } }`),
							)
						}`
						: t.didYouMeanArg
						? (i += ` Did you mean \`${Q(t.didYouMeanArg)}\`?`,
							!n && !o && (i += ` ${X('Available args:')}
` + ur(t.originalType, !0)))
						: t.originalType.fields.length === 0
						? i += ` The field ${
							K(t.originalType.name)
						} has no arguments.`
						: !n && !o && (i += ` Available args:

` + ur(t.originalType, !0)),
						i;
				}
				if (t.type === 'invalidType') {
					let i = Zr(t.providedValue, { indent: '  ' }),
						s = i.split(`
`).length > 1;
					if (
						s && (i = `
${i}
`), t.requiredType.bestFittingType.location === 'enumTypes'
					) {
						return `Argument ${K(t.argName)}: Provided value ${
							Z(i)
						}${s ? '' : ' '}of type ${Z(ar(t.providedValue))} on ${
							K(`prisma.${this.children[0].name}`)
						} is not a ${
							Q(kr(
								sr(t.requiredType.bestFittingType.type),
								t.requiredType.bestFittingType.isList,
							))
						}.
\u2192 Possible values: ${
							t.requiredType.bestFittingType.type.values.map(
								(c) =>
									Q(`${
										sr(t.requiredType.bestFittingType.type)
									}.${c}`),
							).join(', ')
						}`;
					}
					let a = '.';
					mr(t.requiredType.bestFittingType.type) && (a = `:
` + ur(t.requiredType.bestFittingType.type));
					let u = `${
							t.requiredType.inputType.map((c) =>
								Q(kr(
									sr(c.type),
									t.requiredType.bestFittingType.isList,
								))
							).join(' or ')
						}${a}`,
						l = t.requiredType.inputType.length === 2 &&
								t.requiredType.inputType.find((c) =>
									mr(c.type)
								) || null;
					return l && (u += `
` + ur(l.type, !0)),
						`Argument ${K(t.argName)}: Got invalid value ${Z(i)}${
							s ? '' : ' '
						}on ${K(`prisma.${this.children[0].name}`)}. Provided ${
							Z(ar(t.providedValue))
						}, expected ${u}`;
				}
				if (t.type === 'invalidNullArg') {
					let i = r.length === 1 && r[0] === t.name
							? ''
							: ` for ${K(`${r.join('.')}`)}`,
						s = ` Please use ${K(Q('undefined'))} instead.`;
					return `Argument ${Q(t.name)}${i} must not be ${
						K('null')
					}.${s}`;
				}
				if (t.type === 'invalidDateArg') {
					let i = r.length === 1 && r[0] === t.argName
						? ''
						: ` for ${K(`${r.join('.')}`)}`;
					return `Argument ${
						Q(t.argName)
					}${i} is not a valid Date object.`;
				}
				if (t.type === 'missingArg') {
					let i = r.length === 1 && r[0] === t.missingName
						? ''
						: ` for ${K(`${r.join('.')}`)}`;
					return `Argument ${Q(t.missingName)}${i} is missing.`;
				}
				if (t.type === 'atLeastOne') {
					let i = o
							? ''
							: ` Available args are listed in ${X(Q('green'))}.`,
						s = t.atLeastFields
							? ` and at least one argument for ${
								t.atLeastFields.map((a) => K(a)).join(', or ')
							}`
							: '';
					return `Argument ${K(r.join('.'))} of type ${
						K(t.inputType.name)
					} needs ${Q('at least one')} argument${K(s)}.${i}`;
				}
				if (t.type === 'atMostOne') {
					let i = o
						? ''
						: ` Please choose one. ${X('Available args:')} 
${ur(t.inputType, !0)}`;
					return `Argument ${K(r.join('.'))} of type ${
						K(t.inputType.name)
					} needs ${Q('exactly one')} argument, but you provided ${
						t.providedKeys.map((s) => Z(s)).join(' and ')
					}.${i}`;
				}
			};
			this.type = t, this.children = r;
		}
		get [Symbol.toStringTag]() {
			return 'Document';
		}
		toString() {
			return `${this.type} {
${
				(0, Bt.default)(
					this.children.map(String).join(`
`),
					Xr,
				)
			}
}`;
		}
		validate(t, r = !1, n, o, i) {
			var S;
			t || (t = {});
			let s = this.children.filter((v) =>
				v.hasInvalidChild || v.hasInvalidArg
			);
			if (s.length === 0) return;
			let a = [],
				u = [],
				l = t && t.select ? 'select' : t.include ? 'include' : void 0;
			for (let v of s) {
				let T = v.collectErrors(l);
				a.push(
					...T.fieldErrors.map((A) => ({
						...A,
						path: r ? A.path : A.path.slice(1),
					})),
				),
					u.push(
						...T.argErrors.map((A) => ({
							...A,
							path: r ? A.path : A.path.slice(1),
						})),
					);
			}
			let c = this.children[0].name,
				p = r ? this.type : c,
				g = [],
				h = [],
				b = [];
			for (let v of a) {
				let T = this.normalizePath(v.path, t).join('.');
				if (v.error.type === 'invalidFieldName') {
					g.push(T);
					let A = v.error.outputType, { isInclude: F } = v.error;
					A.fields.filter((C) =>
						F ? C.outputType.location === 'outputObjectTypes' : !0
					).forEach((C) => {
						let I = T.split('.');
						b.push({
							path: `${
								I.slice(0, I.length - 1).join('.')
							}.${C.name}`,
							type: 'true',
							isRequired: !1,
						});
					});
				} else {v.error.type === 'includeAndSelect'
						? (g.push('select'), g.push('include'))
						: h.push(T);}
				if (
					v.error.type === 'emptySelect' ||
					v.error.type === 'noTrueSelect' ||
					v.error.type === 'emptyInclude'
				) {
					let A = this.normalizePath(v.path, t),
						F = A.slice(0, A.length - 1).join('.');
					(S = v.error.field.outputType.type.fields) == null ||
						S.filter((I) =>
							v.error.type === 'emptyInclude'
								? I.outputType.location === 'outputObjectTypes'
								: !0
						).forEach((I) => {
							b.push({
								path: `${F}.${I.name}`,
								type: 'true',
								isRequired: !1,
							});
						});
				}
			}
			for (let v of u) {
				let T = this.normalizePath(v.path, t).join('.');
				if (v.error.type === 'invalidName') g.push(T);
				else if (
					v.error.type !== 'missingArg' &&
					v.error.type !== 'atLeastOne'
				) h.push(T);
				else if (v.error.type === 'missingArg') {
					let A = v.error.missingArg.inputTypes.length === 1
						? v.error.missingArg.inputTypes[0].type
						: v.error.missingArg.inputTypes.map((F) => {
							let C = Dr(F.type);
							return C === 'Null'
								? 'null'
								: F.isList
								? C + '[]'
								: C;
						}).join(' | ');
					b.push({
						path: T,
						type: Ei(A, !0, T.split('where.').length === 2),
						isRequired: v.error.missingArg.isRequired,
					});
				}
			}
			let y = (v) => {
					let T = u.some((U) =>
							U.error.type === 'missingArg' &&
							U.error.missingArg.isRequired
						),
						A = Boolean(
							u.find((U) =>
								U.error.type === 'missingArg' &&
								!U.error.missingArg.isRequired
							),
						),
						F = A || T,
						C = '';
					T && (C += `
${X('Note: Lines with ')}${Q('+')} ${X('are required')}`),
						A && (C.length === 0 && (C = `
`),
							T
								? C += X(`, lines with ${Q('?')} are optional`)
								: C += X(
									`Note: Lines with ${Q('?')} are optional`,
								),
							C += X('.'));
					let G = u.filter((U) =>
						U.error.type !== 'missingArg' ||
						U.error.missingArg.isRequired
					).map((U) => this.printArgError(U, F, o === 'minimal'))
						.join(`
`);
					if (
						G += `
${
							a.map((U) =>
								this.printFieldError(U, b, o === 'minimal')
							).join(`
`)
						}`, o === 'minimal'
					) return (0, Li.default)(G);
					let z = {
						ast: r ? { [c]: t } : t,
						keyPaths: g,
						valuePaths: h,
						missingItems: b,
					};
					n != null && n.endsWith('aggregate') && (z = Zm(z));
					let H = at({
						callsite: v,
						originalMethod: n || p,
						showColors: o && o === 'pretty',
						callArguments: eo(z),
						message: `${G}${C}
`,
					});
					return w.env.NO_COLOR || o === 'colorless'
						? (0, Li.default)(H)
						: H;
				},
				P = new ce(y(i));
			throw w.env.NODE_ENV !== 'production' &&
				Object.defineProperty(P, 'render', {
					get: () => y,
					enumerable: !1,
				}),
				P;
		}
		normalizePath(t, r) {
			let n = t.slice(), o = [], i, s = r;
			for (; (i = n.shift()) !== void 0;) {
				!Array.isArray(s) && i === 0 ||
					(i === 'select'
						? s[i] ? s = s[i] : s = s.include
						: s && s[i] && (s = s[i]),
						o.push(i));
			}
			return o;
		}
	},
	ce = class extends Error {
		get [Symbol.toStringTag]() {
			return 'PrismaClientValidationError';
		}
	};
L(ce, 'PrismaClientValidationError');
var fe = class extends Error {
	constructor(t) {
		super(
			t + `
Read more at https://pris.ly/d/client-constructor`,
		), this.name = 'PrismaClientConstructorValidationError';
	}
	get [Symbol.toStringTag]() {
		return 'PrismaClientConstructorValidationError';
	}
};
L(fe, 'PrismaClientConstructorValidationError');
var Re = class {
		constructor(
			{ name: t, args: r, children: n, error: o, schemaField: i },
		) {
			this.name = t,
				this.args = r,
				this.children = n,
				this.error = o,
				this.schemaField = i,
				this.hasInvalidChild = n
					? n.some((s) =>
						Boolean(s.error || s.hasInvalidArg || s.hasInvalidChild)
					)
					: !1,
				this.hasInvalidArg = r ? r.hasInvalidArg : !1;
		}
		get [Symbol.toStringTag]() {
			return 'Field';
		}
		toString() {
			let t = this.name;
			return this.error
				? t + ' # INVALID_FIELD'
				: (this.args && this.args.args && this.args.args.length > 0 &&
					(this.args.args.length === 1
						? t += `(${this.args.toString()})`
						: t += `(
${(0, Bt.default)(this.args.toString(), Xr)}
)`),
					this.children && (t += ` {
${
						(0, Bt.default)(
							this.children.map(String).join(`
`),
							Xr,
						)
					}
}`),
					t);
		}
		collectErrors(t = 'select') {
			let r = [], n = [];
			if (
				this.error && r.push({ path: [this.name], error: this.error }),
					this.children
			) {
				for (let o of this.children) {
					let i = o.collectErrors(t);
					r.push(
						...i.fieldErrors.map((s) => ({
							...s,
							path: [this.name, t, ...s.path],
						})),
					),
						n.push(
							...i.argErrors.map((s) => ({
								...s,
								path: [this.name, t, ...s.path],
							})),
						);
				}
			}
			return this.args &&
				n.push(
					...this.args.collectErrors().map((o) => ({
						...o,
						path: [this.name, ...o.path],
					})),
				),
				{ fieldErrors: r, argErrors: n };
		}
	},
	Te = class {
		constructor(t = []) {
			this.args = t,
				this.hasInvalidArg = t
					? t.some((r) => Boolean(r.hasError))
					: !1;
		}
		get [Symbol.toStringTag]() {
			return 'Args';
		}
		toString() {
			return this.args.length === 0
				? ''
				: `${
					this.args.map((t) => t.toString()).filter((t) => t).join(`
`)
				}`;
		}
		collectErrors() {
			return this.hasInvalidArg
				? this.args.flatMap((t) => t.collectErrors())
				: [];
		}
	};
function $i(e, t) {
	return x.Buffer.isBuffer(e)
		? JSON.stringify(e.toString('base64'))
		: e instanceof Ke
		? `{ _ref: ${JSON.stringify(e.name)}}`
		: Object.prototype.toString.call(e) === '[object BigInt]'
		? e.toString()
		: typeof (t == null ? void 0 : t.type) == 'string' && t.type === 'Json'
		? e === null
			? 'null'
			: e && e.values && e.__prismaRawParameters__
			? JSON.stringify(e.values)
			: (t == null ? void 0 : t.isList) && Array.isArray(e)
			? JSON.stringify(e.map((r) => JSON.stringify(r)))
			: JSON.stringify(JSON.stringify(e))
		: e === void 0
		? null
		: e === null
		? 'null'
		: Le.isDecimal(e) ||
				(t == null ? void 0 : t.type) === 'Decimal' && St(e)
		? JSON.stringify(e.toFixed())
		: (t == null ? void 0 : t.location) === 'enumTypes' &&
				typeof e == 'string'
		? Array.isArray(e) ? `[${e.join(', ')}]` : e
		: typeof e == 'number' && (t == null ? void 0 : t.type) === 'Float'
		? e.toExponential()
		: JSON.stringify(e, null, 2);
}
var Se = class {
	constructor(
		{
			key: t,
			value: r,
			isEnum: n = !1,
			error: o,
			schemaArg: i,
			inputType: s,
		},
	) {
		this.inputType = s,
			this.key = t,
			this.value = r instanceof Ae ? r._getName() : r,
			this.isEnum = n,
			this.error = o,
			this.schemaArg = i,
			this.isNullable = (i == null
				? void 0
				: i.inputTypes.reduce((a) => a && i.isNullable, !0)) || !1,
			this.hasError = Boolean(o) ||
				(r instanceof Te ? r.hasInvalidArg : !1) ||
				Array.isArray(r) && r.some((a) =>
						a instanceof Te
							? a.hasInvalidArg
							: a instanceof Se
							? a.hasError
							: !1
					);
	}
	get [Symbol.toStringTag]() {
		return 'Arg';
	}
	_toString(t, r) {
		let n = this.stringifyValue(t);
		if (typeof n != 'undefined') return `${r}: ${n}`;
	}
	stringifyValue(t) {
		var r;
		if (typeof t != 'undefined') {
			if (t instanceof Te) {
				return `{
${(0, Bt.default)(t.toString(), 2)}
}`;
			}
			if (Array.isArray(t)) {
				if (
					((r = this.inputType) == null ? void 0 : r.type) === 'Json'
				) return $i(t, this.inputType);
				let n = !t.some((o) => typeof o == 'object');
				return `[${
					n ? '' : `
`
				}${
					(0, Bt.default)(
						t.map((o) =>
							o instanceof Te
								? `{
${
									(0, Bt.default)(o.toString(), Xr)
								}
}`
								: o instanceof Se
								? o.stringifyValue(o.value)
								: $i(o, this.inputType)
						).join(`,${
							n ? ' ' : `
`
						}`),
						n ? 0 : Xr,
					)
				}${
					n ? '' : `
`
				}]`;
			}
			return $i(t, this.inputType);
		}
	}
	toString() {
		return this._toString(this.value, this.key);
	}
	collectErrors() {
		var r;
		if (!this.hasError) return [];
		let t = [];
		if (this.error) {
			let n = typeof ((r = this.inputType) == null ? void 0 : r.type) ==
					'object'
				? `${this.inputType.type.name}${
					this.inputType.isList ? '[]' : ''
				}`
				: void 0;
			t.push({ error: this.error, path: [this.key], id: n });
		}
		return Array.isArray(this.value)
			? t.concat(
				this.value.flatMap((n, o) =>
					n instanceof Te
						? n.collectErrors().map((i) => ({
							...i,
							path: [this.key, String(o), ...i.path],
						}))
						: n instanceof Se
						? n.collectErrors().map((i) => ({
							...i,
							path: [this.key, ...i.path],
						}))
						: []
				),
			)
			: this.value instanceof Te
			? t.concat(
				this.value.collectErrors().map((n) => ({
					...n,
					path: [this.key, ...n.path],
				})),
			)
			: t;
	}
};
function no(
	{
		dmmf: e,
		rootTypeName: t,
		rootField: r,
		select: n,
		modelName: o,
		extensions: i,
	},
) {
	n || (n = {});
	let s = t === 'query' ? e.queryType : e.mutationType,
		a = {
			args: [],
			outputType: { isList: !1, type: s, location: 'outputObjectTypes' },
			name: t,
		},
		u = { modelName: o },
		l = Lu({
			dmmf: e,
			selection: { [r]: n },
			schemaField: a,
			path: [t],
			context: u,
			extensions: i,
		});
	return new Bi(t, l);
}
function ju(e) {
	return e;
}
function Lu(
	{
		dmmf: e,
		selection: t,
		schemaField: r,
		path: n,
		context: o,
		extensions: i,
	},
) {
	let s = r.outputType.type,
		a = o.modelName ? i.getAllComputedFields(o.modelName) : {};
	return t = Yn(t, a),
		Object.entries(t).reduce((u, [l, c]) => {
			let p = s.fieldMap
				? s.fieldMap[l]
				: s.fields.find((T) => T.name === l);
			if (!p) {
				return a != null && a[l] || u.push(
					new Re({
						name: l,
						children: [],
						error: {
							type: 'invalidFieldName',
							modelName: s.name,
							providedName: l,
							didYouMean: Gn(
								l,
								s.fields.map((T) => T.name).concat(
									Object.keys(a != null ? a : {}),
								),
							),
							outputType: s,
						},
					}),
				),
					u;
			}
			if (
				p.outputType.location === 'scalar' && p.args.length === 0 &&
				typeof c != 'boolean'
			) {
				return u.push(
					new Re({
						name: l,
						children: [],
						error: {
							type: 'invalidFieldType',
							modelName: s.name,
							fieldName: l,
							providedValue: c,
						},
					}),
				),
					u;
			}
			if (c === !1) return u;
			let g = {
					name: p.name,
					fields: p.args,
					constraints: { minNumFields: null, maxNumFields: null },
				},
				h = typeof c == 'object'
					? Ru(c, ['include', 'select'])
					: void 0,
				b = h
					? ro(
						h,
						g,
						o,
						[],
						typeof p == 'string' ? void 0 : p.outputType.type,
					)
					: void 0,
				y = p.outputType.location === 'outputObjectTypes';
			if (c) {
				if (c.select && c.include) {
					u.push(
						new Re({
							name: l,
							children: [
								new Re({
									name: 'include',
									args: new Te(),
									error: {
										type: 'includeAndSelect',
										field: p,
									},
								}),
							],
						}),
					);
				} else if (c.include) {
					let T = Object.keys(c.include);
					if (T.length === 0) {
						return u.push(
							new Re({
								name: l,
								children: [
									new Re({
										name: 'include',
										args: new Te(),
										error: {
											type: 'emptyInclude',
											field: p,
										},
									}),
								],
							}),
						),
							u;
					}
					if (p.outputType.location === 'outputObjectTypes') {
						let A = p.outputType.type,
							F = A.fields.filter((I) =>
								I.outputType.location === 'outputObjectTypes'
							).map((I) => I.name),
							C = T.filter((I) => !F.includes(I));
						if (C.length > 0) {
							return u.push(...C.map((I) =>
								new Re({
									name: I,
									children: [
										new Re({
											name: I,
											args: new Te(),
											error: {
												type: 'invalidFieldName',
												modelName: A.name,
												outputType: A,
												providedName: I,
												didYouMean: Gn(I, F) || void 0,
												isInclude: !0,
												isIncludeScalar: A.fields.some(
													(G) => G.name === I,
												),
											},
										}),
									],
								})
							)),
								u;
						}
					}
				} else if (c.select) {
					let T = Object.values(c.select);
					if (T.length === 0) {
						return u.push(
							new Re({
								name: l,
								children: [
									new Re({
										name: 'select',
										args: new Te(),
										error: {
											type: 'emptySelect',
											field: p,
										},
									}),
								],
							}),
						),
							u;
					}
					if (T.filter((F) => F).length === 0) {
						return u.push(
							new Re({
								name: l,
								children: [
									new Re({
										name: 'select',
										args: new Te(),
										error: {
											type: 'noTrueSelect',
											field: p,
										},
									}),
								],
							}),
						),
							u;
					}
				}
			}
			let P = y ? Vm(e, p.outputType.type) : null, S = P;
			c &&
				(c.select
					? S = c.select
					: c.include
					? S = zr(P, c.include)
					: c.by && Array.isArray(c.by) &&
						p.outputType.namespace === 'prisma' &&
						p.outputType.location === 'outputObjectTypes' &&
						tu(p.outputType.type.name) && (S = qm(c.by)));
			let v;
			if (S !== !1 && y) {
				let T = o.modelName;
				typeof p.outputType.type == 'object' &&
				p.outputType.namespace === 'model' &&
				p.outputType.location === 'outputObjectTypes' &&
				(T = p.outputType.type.name),
					v = Lu({
						dmmf: e,
						selection: S,
						schemaField: p,
						path: [...n, l],
						context: { modelName: T },
						extensions: i,
					});
			}
			return u.push(
				new Re({ name: l, args: b, children: v, schemaField: p }),
			),
				u;
		}, []);
}
function qm(e) {
	let t = Object.create(null);
	for (let r of e) t[r] = !0;
	return t;
}
function Vm(e, t) {
	let r = Object.create(null);
	for (let n of t.fields) {
		e.typeMap[n.outputType.type.name] !== void 0 && (r[n.name] = !0),
			(n.outputType.location === 'scalar' ||
				n.outputType.location === 'enumTypes') && (r[n.name] = !0);
	}
	return r;
}
function Ui(e, t, r, n) {
	return new Se({
		key: e,
		value: t,
		isEnum: n.location === 'enumTypes',
		inputType: n,
		error: {
			type: 'invalidType',
			providedValue: t,
			argName: e,
			requiredType: { inputType: r.inputTypes, bestFittingType: n },
		},
	});
}
function Bu(e, t, r) {
	let { isList: n } = t, o = Gm(t, r), i = ar(e, t);
	return i === o || n && i === 'List<>' ||
			o === 'Json' && i !== 'Symbol' && !(e instanceof Ae) &&
				!(e instanceof Ke) ||
			i === 'Int' && o === 'BigInt' ||
			(i === 'Int' || i === 'Float') && o === 'Decimal' ||
			i === 'DateTime' && o === 'String' ||
			i === 'UUID' && o === 'String' || i === 'String' && o === 'ID' ||
			i === 'Int' && o === 'Float' || i === 'Int' && o === 'Long' ||
			i === 'String' && o === 'Decimal' && Jm(e) || e === null
		? !0
		: t.isList && Array.isArray(e)
		? e.every((s) => Bu(s, { ...t, isList: !1 }, r))
		: !1;
}
function Gm(e, t, r = e.isList) {
	let n = sr(e.type);
	return e.location === 'fieldRefTypes' && t.modelName &&
		(n += `<${t.modelName}>`),
		kr(n, r);
}
var to = (e) => Fu(e, (t, r) => r !== void 0);
function Jm(e) {
	return /^\-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i.test(e);
}
function Km(e, t, r, n) {
	let o = null, i = [];
	for (let s of r.inputTypes) {
		if (
			o = Qm(e, t, r, s, n),
				(o == null ? void 0 : o.collectErrors().length) === 0
		) return o;
		if (o && (o == null ? void 0 : o.collectErrors())) {
			let a = o == null ? void 0 : o.collectErrors();
			a && a.length > 0 && i.push({ arg: o, errors: a });
		}
	}
	if ((o == null ? void 0 : o.hasError) && i.length > 0) {
		let s = i.map(({ arg: a, errors: u }) => {
			let l = u.map((c) => {
				let p = 1;
				return c.error.type === 'invalidType' &&
					(p = 2 * Math.exp(Uu(c.error.providedValue)) + 1),
					p += Math.log(c.path.length),
					c.error.type === 'missingArg' && a.inputType &&
					mr(a.inputType.type) &&
					a.inputType.type.name.includes('Unchecked') && (p *= 2),
					c.error.type === 'invalidName' &&
					mr(c.error.originalType) &&
					c.error.originalType.name.includes('Unchecked') && (p *= 2),
					p;
			});
			return { score: u.length + Wm(l), arg: a, errors: u };
		});
		return s.sort((a, u) => a.score < u.score ? -1 : 1), s[0].arg;
	}
	return o;
}
function Uu(e) {
	let t = 1;
	if (!e || typeof e != 'object') return t;
	for (let r in e) {
		if (
			!!Object.prototype.hasOwnProperty.call(e, r) &&
			typeof e[r] == 'object'
		) {
			let n = Uu(e[r]) + 1;
			t = Math.max(n, t);
		}
	}
	return t;
}
function Wm(e) {
	return e.reduce((t, r) => t + r, 0);
}
function Qm(e, t, r, n, o) {
	var c, p, g, h, b;
	if (typeof t == 'undefined') {
		return r.isRequired
			? new Se({
				key: e,
				value: t,
				isEnum: n.location === 'enumTypes',
				inputType: n,
				error: {
					type: 'missingArg',
					missingName: e,
					missingArg: r,
					atLeastOne: !1,
					atMostOne: !1,
				},
			})
			: null;
	}
	let { isNullable: i, isRequired: s } = r;
	if (
		t === null && !i && !s &&
		!(mr(n.type)
			? n.type.constraints.minNumFields !== null &&
				n.type.constraints.minNumFields > 0
			: !1)
	) {
		return new Se({
			key: e,
			value: t,
			isEnum: n.location === 'enumTypes',
			inputType: n,
			error: {
				type: 'invalidNullArg',
				name: e,
				invalidType: r.inputTypes,
				atLeastOne: !1,
				atMostOne: !1,
			},
		});
	}
	if (!n.isList) {
		if (mr(n.type)) {
			if (
				typeof t != 'object' || Array.isArray(t) ||
				n.location === 'inputObjectTypes' && !Ou(t)
			) return Ui(e, t, r, n);
			{
				let y = to(t), P, S = Object.keys(y || {}), v = S.length;
				return v === 0 &&
							typeof n.type.constraints.minNumFields ==
								'number' &&
							n.type.constraints.minNumFields > 0 ||
						((c = n.type.constraints.fields) == null
								? void 0
								: c.some((T) => S.includes(T))) === !1
					? P = {
						type: 'atLeastOne',
						key: e,
						inputType: n.type,
						atLeastFields: n.type.constraints.fields,
					}
					: v > 1 &&
						typeof n.type.constraints.maxNumFields == 'number' &&
						n.type.constraints.maxNumFields < 2 &&
						(P = {
							type: 'atMostOne',
							key: e,
							inputType: n.type,
							providedKeys: S,
						}),
					new Se({
						key: e,
						value: y === null
							? null
							: ro(y, n.type, o, r.inputTypes),
						isEnum: n.location === 'enumTypes',
						error: P,
						inputType: n,
						schemaArg: r,
					});
			}
		} else return $u(e, t, r, n, o);
	}
	if (
		!Array.isArray(t) && n.isList && e !== 'updateMany' && (t = [t]),
			n.location === 'enumTypes' || n.location === 'scalar'
	) return $u(e, t, r, n, o);
	let a = n.type,
		l = (typeof ((p = a.constraints) == null ? void 0 : p.minNumFields) ==
						'number' &&
					((g = a.constraints) == null ? void 0 : g.minNumFields) > 0
				? Array.isArray(t) &&
					t.some((y) => !y || Object.keys(to(y)).length === 0)
				: !1)
			? { inputType: a, key: e, type: 'atLeastOne' }
			: void 0;
	if (!l) {
		let y =
			typeof ((h = a.constraints) == null ? void 0 : h.maxNumFields) ==
					'number' &&
				((b = a.constraints) == null ? void 0 : b.maxNumFields) < 2
				? Array.isArray(t) &&
					t.find((P) => !P || Object.keys(to(P)).length !== 1)
				: !1;
		y &&
			(l = {
				inputType: a,
				key: e,
				type: 'atMostOne',
				providedKeys: Object.keys(y),
			});
	}
	if (!Array.isArray(t)) {
		for (let y of r.inputTypes) {
			let P = ro(t, y.type, o);
			if (P.collectErrors().length === 0) {
				return new Se({
					key: e,
					value: P,
					isEnum: !1,
					schemaArg: r,
					inputType: y,
				});
			}
		}
	}
	return new Se({
		key: e,
		value: t.map((y, P) =>
			n.isList && typeof y != 'object'
				? y
				: typeof y != 'object' || !t || Array.isArray(y)
				? Ui(String(P), y, zm(r), Hm(n))
				: ro(y, a, o)
		),
		isEnum: !1,
		inputType: n,
		schemaArg: r,
		error: l,
	});
}
function Hm(e) {
	return { ...e, isList: !1 };
}
function zm(e) {
	return { ...e, inputTypes: e.inputTypes.filter((t) => !t.isList) };
}
function mr(e) {
	return !(typeof e == 'string' || Object.hasOwnProperty.call(e, 'values'));
}
function $u(e, t, r, n, o) {
	return Be(t) && !it(t)
		? new Se({
			key: e,
			value: t,
			schemaArg: r,
			inputType: n,
			error: { type: 'invalidDateArg', argName: e },
		})
		: Bu(t, n, o)
		? new Se({
			key: e,
			value: t,
			isEnum: n.location === 'enumTypes',
			schemaArg: r,
			inputType: n,
		})
		: Ui(e, t, r, n);
}
function ro(e, t, r, n, o) {
	var g;
	(g = t.meta) != null && g.source && (r = { modelName: t.meta.source });
	let i = to(e),
		{ fields: s, fieldMap: a } = t,
		u = s.map((h) => [h.name, void 0]),
		l = Object.entries(i || {}),
		p = eu(l, u, (h) => h[0]).reduce((h, [b, y]) => {
			let P = a ? a[b] : s.find((v) => v.name === b);
			if (!P) {
				let v = typeof y == 'boolean' && o && o.fields.some((T) =>
						T.name === b
					)
					? b
					: null;
				return h.push(
					new Se({
						key: b,
						value: y,
						error: {
							type: 'invalidName',
							providedName: b,
							providedValue: y,
							didYouMeanField: v,
							didYouMeanArg: !v && Gn(b, [
										...s.map((T) => T.name),
										'select',
									]) || void 0,
							originalType: t,
							possibilities: n,
							outputType: o,
						},
					}),
				),
					h;
			}
			let S = Km(b, y, P, r);
			return S && h.push(S), h;
		}, []);
	if (
		typeof t.constraints.minNumFields == 'number' &&
			l.length < t.constraints.minNumFields || p.find((h) => {
				var b, y;
				return ((b = h.error) == null ? void 0 : b.type) ===
						'missingArg' ||
					((y = h.error) == null ? void 0 : y.type) === 'atLeastOne';
			})
	) {
		let h = t.fields.filter((b) =>
			!b.isRequired && i &&
			(typeof i[b.name] == 'undefined' || i[b.name] === null)
		);
		p.push(...h.map((b) => {
			let y = b.inputTypes[0];
			return new Se({
				key: b.name,
				value: void 0,
				isEnum: y.location === 'enumTypes',
				error: {
					type: 'missingArg',
					missingName: b.name,
					missingArg: b,
					atLeastOne: Boolean(t.constraints.minNumFields) || !1,
					atMostOne: t.constraints.maxNumFields === 1 || !1,
				},
				inputType: y,
			});
		}));
	}
	return new Te(p);
}
function oo({ document: e, path: t, data: r }) {
	let n = Yr(r, t);
	if (n === 'undefined') return null;
	if (typeof n != 'object') return n;
	let o = Ym(e, t);
	return qi({ field: o, data: n });
}
function qi({ field: e, data: t }) {
	var n;
	if (!t || typeof t != 'object' || !e.children || !e.schemaField) return t;
	let r = {
		DateTime: (o) => new Date(o),
		Json: (o) => JSON.parse(o),
		Bytes: (o) => x.Buffer.from(o, 'base64'),
		Decimal: (o) => new Le(o),
		BigInt: (o) => BigInt(o),
	};
	for (let o of e.children) {
		let i = (n = o.schemaField) == null ? void 0 : n.outputType.type;
		if (i && typeof i == 'string') {
			let s = r[i];
			if (s) {
				if (Array.isArray(t)) {
					for (let a of t) {
						typeof a[o.name] != 'undefined' && a[o.name] !== null &&
							(Array.isArray(a[o.name])
								? a[o.name] = a[o.name].map(s)
								: a[o.name] = s(a[o.name]));
					}
				} else {typeof t[o.name] != 'undefined' && t[o.name] !== null &&
						(Array.isArray(t[o.name])
							? t[o.name] = t[o.name].map(s)
							: t[o.name] = s(t[o.name]));}
			}
		}
		if (
			o.schemaField &&
			o.schemaField.outputType.location === 'outputObjectTypes'
		) {
			if (Array.isArray(t)) {
				for (let s of t) qi({ field: o, data: s[o.name] });
			} else qi({ field: o, data: t[o.name] });
		}
	}
	return t;
}
function Ym(e, t) {
	let r = t.slice(), n = r.shift(), o = e.children.find((i) => i.name === n);
	if (!o) throw new Error(`Could not find field ${n} in document ${e}`);
	for (; r.length > 0;) {
		let i = r.shift();
		if (!o.children) {
			throw new Error(
				`Can't get children for field ${o} with child ${i}`,
			);
		}
		let s = o.children.find((a) => a.name === i);
		if (!s) throw new Error(`Can't find child ${i} of field ${o}`);
		o = s;
	}
	return o;
}
function ji(e) {
	return e.split('.').filter((t) => t !== 'select').join('.');
}
function Vi(e) {
	if (Object.prototype.toString.call(e) === '[object Object]') {
		let r = {};
		for (let n in e) {
			if (n === 'select') {
				for (let o in e.select) r[o] = Vi(e.select[o]);
			} else r[n] = Vi(e[n]);
		}
		return r;
	}
	return e;
}
function Zm({ ast: e, keyPaths: t, missingItems: r, valuePaths: n }) {
	let o = t.map(ji),
		i = n.map(ji),
		s = r.map((u) => ({
			path: ji(u.path),
			isRequired: u.isRequired,
			type: u.type,
		}));
	return { ast: Vi(e), keyPaths: o, missingItems: s, valuePaths: i };
}
d();
f();
m();
d();
f();
m();
d();
f();
m();
function en(e) {
	return {
		getKeys() {
			return Object.keys(e);
		},
		getPropertyValue(t) {
			return e[t];
		},
	};
}
d();
f();
m();
function Ft(e, t) {
	return {
		getKeys() {
			return [e];
		},
		getPropertyValue() {
			return t();
		},
	};
}
d();
f();
m();
function Ut(e) {
	let t = new st();
	return {
		getKeys() {
			return e.getKeys();
		},
		getPropertyValue(r) {
			return t.getOrCreate(r, () => e.getPropertyValue(r));
		},
		getPropertyDescriptor(r) {
			var n;
			return (n = e.getPropertyDescriptor) == null
				? void 0
				: n.call(e, r);
		},
	};
}
d();
f();
m();
var Gu = ue(Qo());
d();
f();
m();
var io = { enumerable: !0, configurable: !0, writable: !0 };
function so(e) {
	let t = new Set(e);
	return {
		getOwnPropertyDescriptor: () => io,
		has: (r, n) => t.has(n),
		set: (r, n, o) => t.add(n) && Reflect.set(r, n, o),
		ownKeys: () => [...t],
	};
}
var qu = Symbol.for('nodejs.util.inspect.custom');
function Ot(e, t) {
	let r = Xm(t),
		n = new Set(),
		o = new Proxy(e, {
			get(i, s) {
				if (n.has(s)) return i[s];
				let a = r.get(s);
				return a ? a.getPropertyValue(s) : i[s];
			},
			has(i, s) {
				var u, l;
				if (n.has(s)) return !0;
				let a = r.get(s);
				return a
					? (l = (u = a.has) == null ? void 0 : u.call(a, s)) != null
						? l
						: !0
					: Reflect.has(i, s);
			},
			ownKeys(i) {
				let s = Vu(Reflect.ownKeys(i), r),
					a = Vu(Array.from(r.keys()), r);
				return [...new Set([...s, ...a, ...n])];
			},
			set(i, s, a) {
				var l, c;
				let u = r.get(s);
				return ((c = (l = u == null
								? void 0
								: u.getPropertyDescriptor) == null
							? void 0
							: l.call(u, s)) == null
						? void 0
						: c.writable) === !1
					? !1
					: (n.add(s), Reflect.set(i, s, a));
			},
			getOwnPropertyDescriptor(i, s) {
				let a = r.get(s);
				return a
					? a.getPropertyDescriptor
						? {
							...io,
							...a == null ? void 0 : a.getPropertyDescriptor(s),
						}
						: io
					: Reflect.getOwnPropertyDescriptor(i, s);
			},
			defineProperty(i, s, a) {
				return n.add(s), Reflect.defineProperty(i, s, a);
			},
		});
	return o[qu] = function (i, s, a = Gu.inspect) {
		let u = { ...this };
		return delete u[qu], a(u, s);
	},
		o;
}
function Xm(e) {
	let t = new Map();
	for (let r of e) {
		let n = r.getKeys();
		for (let o of n) t.set(o, r);
	}
	return t;
}
function Vu(e, t) {
	return e.filter((r) => {
		var o, i;
		let n = t.get(r);
		return (i = (o = n == null ? void 0 : n.has) == null
				? void 0
				: o.call(n, r)) != null
			? i
			: !0;
	});
}
d();
f();
m();
function Gi(e) {
	return {
		getKeys() {
			return e;
		},
		has() {
			return !1;
		},
		getPropertyValue() {},
	};
}
d();
f();
m();
d();
f();
m();
d();
f();
m();
var tn = '<unknown>';
function Ju(e) {
	var t = e.split(`
`);
	return t.reduce(function (r, n) {
		var o = rd(n) || od(n) || ad(n) || pd(n) || ld(n);
		return o && r.push(o), r;
	}, []);
}
var ed =
		/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
	td = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function rd(e) {
	var t = ed.exec(e);
	if (!t) return null;
	var r = t[2] && t[2].indexOf('native') === 0,
		n = t[2] && t[2].indexOf('eval') === 0,
		o = td.exec(t[2]);
	return n && o != null && (t[2] = o[1], t[3] = o[2], t[4] = o[3]), {
		file: r ? null : t[2],
		methodName: t[1] || tn,
		arguments: r ? [t[2]] : [],
		lineNumber: t[3] ? +t[3] : null,
		column: t[4] ? +t[4] : null,
	};
}
var nd =
	/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function od(e) {
	var t = nd.exec(e);
	return t
		? {
			file: t[2],
			methodName: t[1] || tn,
			arguments: [],
			lineNumber: +t[3],
			column: t[4] ? +t[4] : null,
		}
		: null;
}
var id =
		/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
	sd = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function ad(e) {
	var t = id.exec(e);
	if (!t) return null;
	var r = t[3] && t[3].indexOf(' > eval') > -1, n = sd.exec(t[3]);
	return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), {
		file: t[3],
		methodName: t[1] || tn,
		arguments: t[2] ? t[2].split(',') : [],
		lineNumber: t[4] ? +t[4] : null,
		column: t[5] ? +t[5] : null,
	};
}
var ud = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function ld(e) {
	var t = ud.exec(e);
	return t
		? {
			file: t[3],
			methodName: t[1] || tn,
			arguments: [],
			lineNumber: +t[4],
			column: t[5] ? +t[5] : null,
		}
		: null;
}
var cd =
	/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function pd(e) {
	var t = cd.exec(e);
	return t
		? {
			file: t[2],
			methodName: t[1] || tn,
			arguments: [],
			lineNumber: +t[3],
			column: t[4] ? +t[4] : null,
		}
		: null;
}
var Ji = class {
		getLocation() {
			return null;
		}
	},
	Ki = class {
		constructor() {
			this._error = new Error();
		}
		getLocation() {
			let t = this._error.stack;
			if (!t) return null;
			let n = Ju(t).find((o) => {
				if (!o.file) return !1;
				let i = ii(o.file);
				return i !== '<anonymous>' && !i.includes('@prisma') &&
					!i.includes('/packages/client/src/runtime/') &&
					!i.endsWith('/runtime/binary.js') &&
					!i.endsWith('/runtime/library.js') &&
					!i.endsWith('/runtime/data-proxy.js') &&
					!i.endsWith('/runtime/edge.js') &&
					!i.endsWith('/runtime/edge-esm.js') &&
					!i.startsWith('internal/') &&
					!o.methodName.includes('new ') &&
					!o.methodName.includes('getCallSite') &&
					!o.methodName.includes('Proxy.') &&
					o.methodName.split('.').length < 4;
			});
			return !n || !n.file ? null : {
				fileName: n.file,
				lineNumber: n.lineNumber,
				columnNumber: n.column,
			};
		}
	};
function Rt(e) {
	return e === 'minimal' ? new Ji() : new Ki();
}
d();
f();
m();
function ut(e) {
	let t,
		r = (n) => {
			try {
				return n === void 0 || (n == null ? void 0 : n.kind) === 'itx'
					? t != null ? t : t = Ku(e(n))
					: Ku(e(n));
			} catch (o) {
				return Promise.reject(o);
			}
		};
	return {
		then(n, o, i) {
			return r(i).then(n, o, i);
		},
		catch(n, o) {
			return r(o).catch(n, o);
		},
		finally(n, o) {
			return r(o).finally(n, o);
		},
		requestTransaction(n) {
			let o = r(n);
			return o.requestTransaction ? o.requestTransaction(n) : o;
		},
		[Symbol.toStringTag]: 'PrismaPromise',
	};
}
function Ku(e) {
	return typeof e.then == 'function' ? e : Promise.resolve(e);
}
d();
f();
m();
d();
f();
m();
d();
f();
m();
var Wu = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function dr(e = {}) {
	let t = md(e);
	return Object.entries(t).reduce(
		(
			n,
			[o, i],
		) => (Wu[o] !== void 0 ? n.select[o] = { select: i } : n[o] = i, n),
		{ select: {} },
	);
}
function md(e = {}) {
	return typeof e._count == 'boolean'
		? { ...e, _count: { _all: e._count } }
		: e;
}
function ao(e = {}) {
	return (
		t,
	) => (typeof e._count == 'boolean' && (t._count = t._count._all), t);
}
function Qu(e, t) {
	let r = ao(e);
	return t({ action: 'aggregate', unpacker: r, argsMapper: dr })(e);
}
d();
f();
m();
function dd(e = {}) {
	let { select: t, ...r } = e;
	return typeof t == 'object'
		? dr({ ...r, _count: t })
		: dr({ ...r, _count: { _all: !0 } });
}
function gd(e = {}) {
	return typeof e.select == 'object'
		? (t) => ao(e)(t)._count
		: (t) => ao(e)(t)._count._all;
}
function Hu(e, t) {
	return t({ action: 'count', unpacker: gd(e), argsMapper: dd })(e);
}
d();
f();
m();
function yd(e = {}) {
	let t = dr(e);
	if (Array.isArray(t.by)) {
		for (let r of t.by) typeof r == 'string' && (t.select[r] = !0);
	}
	return t;
}
function hd(e = {}) {
	return (t) => (typeof (e == null ? void 0 : e._count) == 'boolean' &&
		t.forEach((r) => {
			r._count = r._count._all;
		}),
		t);
}
function zu(e, t) {
	return t({ action: 'groupBy', unpacker: hd(e), argsMapper: yd })(e);
}
function Yu(e, t, r) {
	if (t === 'aggregate') return (n) => Qu(n, r);
	if (t === 'count') return (n) => Hu(n, r);
	if (t === 'groupBy') return (n) => zu(n, r);
}
d();
f();
m();
function Zu(e, t) {
	let r = t.fields.filter((o) => !o.relationName), n = ai(r, (o) => o.name);
	return new Proxy({}, {
		get(o, i) {
			if (i in o || typeof i == 'symbol') return o[i];
			let s = n[i];
			if (s) return new Ke(e, i, s.type, s.isList, s.kind === 'enum');
		},
		...so(Object.keys(n)),
	});
}
d();
f();
m();
function bd(e, t) {
	return e === void 0 || t === void 0 ? [] : [...t, 'select', e];
}
function wd(e, t, r) {
	return t === void 0 ? e != null ? e : {} : Xn(t, r, e || !0);
}
function Wi(e, t, r, n, o, i) {
	let a = e._runtimeDataModel.models[t].fields.reduce(
		(u, l) => ({ ...u, [l.name]: l }),
		{},
	);
	return (u) => {
		let l = Rt(e._errorFormat),
			c = bd(n, o),
			p = wd(u, i, c),
			g = r({ dataPath: c, callsite: l })(p),
			h = Ed(e, t);
		return new Proxy(g, {
			get(b, y) {
				if (!h.includes(y)) return b[y];
				let S = [a[y].type, r, y], v = [c, p];
				return Wi(e, ...S, ...v);
			},
			...so([...h, ...Object.getOwnPropertyNames(g)]),
		});
	};
}
function Ed(e, t) {
	return e._runtimeDataModel.models[t].fields.filter((r) =>
		r.kind === 'object'
	).map((r) => r.name);
}
d();
f();
m();
d();
f();
m();
d();
f();
m();
var uo = Xu().version;
var Qe = class extends Ee {
	constructor(t) {
		super(t, { code: 'P2025', clientVersion: uo }),
			this.name = 'NotFoundError';
	}
};
L(Qe, 'NotFoundError');
function Qi(e, t, r, n) {
	let o;
	if (
		r && typeof r == 'object' && 'rejectOnNotFound' in r &&
		r.rejectOnNotFound !== void 0
	) o = r.rejectOnNotFound, delete r.rejectOnNotFound;
	else if (typeof n == 'boolean') o = n;
	else if (n && typeof n == 'object' && e in n) {
		let i = n[e];
		if (i && typeof i == 'object') return t in i ? i[t] : void 0;
		o = Qi(e, t, r, i);
	} else typeof n == 'function' ? o = n : o = !1;
	return o;
}
var Ad = /(findUnique|findFirst)/;
function el(e, t, r, n) {
	if (r != null || (r = 'record'), n && !e && Ad.exec(t)) {
		throw typeof n == 'boolean' && n
			? new Qe(`No ${r} found`)
			: typeof n == 'function'
			? n(new Qe(`No ${r} found`))
			: vr(n)
			? n
			: new Qe(`No ${r} found`);
	}
}
function tl(e, t, r) {
	return e === Ge.ModelAction.findFirstOrThrow ||
			e === Ge.ModelAction.findUniqueOrThrow
		? Pd(t, r)
		: r;
}
function Pd(e, t) {
	return async (r) => {
		if ('rejectOnNotFound' in r.args) {
			let o = at({
				originalMethod: r.clientMethod,
				callsite: r.callsite,
				message: '\'rejectOnNotFound\' option is not supported',
			});
			throw new ce(o);
		}
		return await t(r).catch((o) => {
			throw o instanceof Ee && o.code === 'P2025'
				? new Qe(`No ${e} found`)
				: o;
		});
	};
}
var vd = [
		'findUnique',
		'findUniqueOrThrow',
		'findFirst',
		'findFirstOrThrow',
		'create',
		'update',
		'upsert',
		'delete',
	],
	Td = ['aggregate', 'count', 'groupBy'];
function Hi(e, t) {
	var o;
	let r = [Md(e, t), Sd(t)];
	(o = e._engineConfig.previewFeatures) != null &&
		o.includes('fieldReference') && r.push(Od(e, t));
	let n = e._extensions.getAllModelExtensions(t);
	return n && r.push(en(n)), Ot({}, r);
}
function Sd(e) {
	return Ft('name', () => e);
}
function Md(e, t) {
	let r = We(t), n = Object.keys(Ge.ModelAction).concat('count');
	return {
		getKeys() {
			return n;
		},
		getPropertyValue(o) {
			let i = o, s = (u) => e._request(u);
			s = tl(i, t, s);
			let a = (u) => (l) => {
				let c = Rt(e._errorFormat);
				return ut((p) => {
					let g = {
						args: l,
						dataPath: [],
						action: i,
						model: t,
						clientMethod: `${r}.${o}`,
						jsModelName: r,
						transaction: p,
						callsite: c,
					};
					return s({ ...g, ...u });
				});
			};
			return vd.includes(i) ? Wi(e, t, a) : Fd(o) ? Yu(e, o, a) : a({});
		},
	};
}
function Fd(e) {
	return Td.includes(e);
}
function Od(e, t) {
	return Ut(Ft('fields', () => {
		let r = e._runtimeDataModel.models[t];
		return Zu(t, r);
	}));
}
d();
f();
m();
function rl(e) {
	return e.replace(/^./, (t) => t.toUpperCase());
}
var zi = Symbol();
function lo(e) {
	let t = [Rd(e), Ft(zi, () => e)],
		r = e._extensions.getAllClientExtensions();
	return r && t.push(en(r)), Ot(e, t);
}
function Rd(e) {
	let t = Object.keys(e._runtimeDataModel.models),
		r = t.map(We),
		n = [...new Set(t.concat(r))];
	return Ut({
		getKeys() {
			return n;
		},
		getPropertyValue(o) {
			let i = rl(o);
			if (e._runtimeDataModel.models[i] !== void 0) return Hi(e, i);
			if (e._runtimeDataModel.models[o] !== void 0) return Hi(e, o);
		},
		getPropertyDescriptor(o) {
			if (!r.includes(o)) return { enumerable: !1 };
		},
	});
}
function nl(e) {
	return e[zi] ? e[zi] : e;
}
function ol(e) {
	if (!this._hasPreviewFlag('clientExtensions')) {
		throw new ce(
			'Extensions are not yet generally available, please add `clientExtensions` to the `previewFeatures` field in the `generator` block in the `schema.prisma` file.',
		);
	}
	if (typeof e == 'function') return e(this);
	let t = nl(this),
		r = Object.create(t, {
			_extensions: { value: this._extensions.append(e) },
		});
	return lo(r);
}
d();
f();
m();
d();
f();
m();
function lt(e) {
	if (typeof e != 'object') return e;
	var t, r, n = Object.prototype.toString.call(e);
	if (n === '[object Object]') {
		if (e.constructor !== Object && typeof e.constructor == 'function') {
			r = new e.constructor();
			for (t in e) {
				e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = lt(e[t]));
			}
		} else {
			r = {};
			for (t in e) {
				t === '__proto__'
					? Object.defineProperty(r, t, {
						value: lt(e[t]),
						configurable: !0,
						enumerable: !0,
						writable: !0,
					})
					: r[t] = lt(e[t]);
			}
		}
		return r;
	}
	if (n === '[object Array]') {
		for (t = e.length, r = Array(t); t--;) r[t] = lt(e[t]);
		return r;
	}
	return n === '[object Set]'
		? (r = new Set(),
			e.forEach(function (o) {
				r.add(lt(o));
			}),
			r)
		: n === '[object Map]'
		? (r = new Map(),
			e.forEach(function (o, i) {
				r.set(lt(i), lt(o));
			}),
			r)
		: n === '[object Date]'
		? new Date(+e)
		: n === '[object RegExp]'
		? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r)
		: n === '[object DataView]'
		? new e.constructor(lt(e.buffer))
		: n === '[object ArrayBuffer]'
		? e.slice(0)
		: n.slice(-6) === 'Array]'
		? new e.constructor(e)
		: e;
}
function il(e, t, r, n = 0) {
	return ut((o) => {
		var s, a, u;
		let i = (s = t.customDataProxyFetch) != null ? s : (l) => l;
		return o !== void 0 &&
			(((a = t.transaction) == null ? void 0 : a.kind) === 'batch' &&
				t.transaction.lock.then(),
				t.transaction = o),
			n === r.length ? e._executeRequest(t) : r[n]({
				model: t.model,
				operation: t.model ? t.action : t.clientMethod,
				args: lt((u = t.args) != null ? u : {}),
				__internalParams: t,
				query: (l, c = t) => {
					var g;
					let p = (g = c.customDataProxyFetch) != null ? g : (h) => h;
					return c.customDataProxyFetch = (h) => i(p(h)),
						c.args = l,
						il(e, c, r, n + 1);
				},
			});
	});
}
function sl(e, t) {
	let { jsModelName: r, action: n, clientMethod: o } = t, i = r ? n : o;
	if (e._extensions.isEmpty()) return e._executeRequest(t);
	let s = e._extensions.getAllQueryCallbacks(r != null ? r : '*', i);
	return il(e, t, s);
}
d();
f();
m();
var co = class {
		constructor(t, r) {
			this.extension = t;
			this.previous = r;
			this.computedFieldsCache = new st();
			this.modelExtensionsCache = new st();
			this.queryCallbacksCache = new st();
			this.clientExtensions = Dn(() => {
				var t, r;
				return this.extension.client
					? {
						...(r = this.previous) == null
							? void 0
							: r.getAllClientExtensions(),
						...this.extension.client,
					}
					: (t = this.previous) == null
					? void 0
					: t.getAllClientExtensions();
			});
		}
		getAllComputedFields(t) {
			return this.computedFieldsCache.getOrCreate(t, () => {
				var r;
				return hu(
					(r = this.previous) == null
						? void 0
						: r.getAllComputedFields(t),
					this.extension,
					t,
				);
			});
		}
		getAllClientExtensions() {
			return this.clientExtensions.get();
		}
		getAllModelExtensions(t) {
			return this.modelExtensionsCache.getOrCreate(t, () => {
				var n, o;
				let r = We(t);
				return !this.extension.model ||
						!(this.extension.model[r] ||
							this.extension.model.$allModels)
					? (n = this.previous) == null
						? void 0
						: n.getAllModelExtensions(t)
					: {
						...(o = this.previous) == null
							? void 0
							: o.getAllModelExtensions(t),
						...this.extension.model.$allModels,
						...this.extension.model[r],
					};
			});
		}
		getAllQueryCallbacks(t, r) {
			return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
				var s, a;
				let n = (a = (s = this.previous) == null
							? void 0
							: s.getAllQueryCallbacks(t, r)) != null
						? a
						: [],
					o = [],
					i = this.extension.query;
				return !i || !(i[t] || i.$allModels || i[r])
					? n
					: (i[t] !== void 0 &&
						(i[t][r] !== void 0 && o.push(i[t][r]),
							i[t].$allOperations !== void 0 &&
							o.push(i[t].$allOperations)),
						i.$allModels !== void 0 &&
						(i.$allModels[r] !== void 0 && o.push(i.$allModels[r]),
							i.$allModels.$allOperations !== void 0 &&
							o.push(i.$allModels.$allOperations)),
						i[r] !== void 0 && o.push(i[r]),
						n.concat(o));
			});
		}
	},
	Ct = class {
		constructor(t) {
			this.head = t;
		}
		static empty() {
			return new Ct();
		}
		static single(t) {
			return new Ct(new co(t));
		}
		isEmpty() {
			return this.head === void 0;
		}
		append(t) {
			return new Ct(new co(t, this.head));
		}
		getAllComputedFields(t) {
			var r;
			return (r = this.head) == null ? void 0 : r.getAllComputedFields(t);
		}
		getAllClientExtensions() {
			var t;
			return (t = this.head) == null
				? void 0
				: t.getAllClientExtensions();
		}
		getAllModelExtensions(t) {
			var r;
			return (r = this.head) == null
				? void 0
				: r.getAllModelExtensions(t);
		}
		getAllQueryCallbacks(t, r) {
			var n, o;
			return (o = (n = this.head) == null
					? void 0
					: n.getAllQueryCallbacks(t, r)) != null
				? o
				: [];
		}
	};
d();
f();
m();
var al = Ie('prisma:client'),
	ul = { Vercel: 'vercel', 'Netlify CI': 'netlify' };
function ll({ postinstall: e, ciName: t, clientVersion: r }) {
	if (
		al('checkPlatformCaching:postinstall', e),
			al('checkPlatformCaching:ciName', t),
			e === !0 && t && t in ul
	) {
		let n =
			`Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ul[t]}-build`;
		throw console.error(n), new ke(n, r);
	}
}
d();
f();
m();
var Cd = {
		findUnique: 'query',
		findUniqueOrThrow: 'query',
		findFirst: 'query',
		findFirstOrThrow: 'query',
		findMany: 'query',
		count: 'query',
		create: 'mutation',
		createMany: 'mutation',
		update: 'mutation',
		updateMany: 'mutation',
		upsert: 'mutation',
		delete: 'mutation',
		deleteMany: 'mutation',
		executeRaw: 'mutation',
		queryRaw: 'mutation',
		aggregate: 'query',
		groupBy: 'query',
		runCommandRaw: 'mutation',
		findRaw: 'query',
		aggregateRaw: 'query',
	},
	po = class {
		constructor(t, r) {
			this.dmmf = t;
			this.errorFormat = r;
		}
		createMessage(
			{
				action: t,
				modelName: r,
				args: n,
				extensions: o,
				clientMethod: i,
				callsite: s,
			},
		) {
			var g, h;
			let a, u = Cd[t];
			(t === 'executeRaw' || t === 'queryRaw' || t === 'runCommandRaw') &&
				(a = t);
			let l;
			if (r !== void 0) {
				if (
					l = (g = this.dmmf) == null ? void 0 : g.mappingsMap[r],
						l === void 0
				) throw new Error(`Could not find mapping for model ${r}`);
				if (a = l[t === 'count' ? 'aggregate' : t], !a) {
					let b = at({
						message:
							`Model \`${r}\` does not support \`${t}\` action.`,
						originalMethod: i,
						callsite: s,
					});
					throw new ce(b);
				}
			}
			if (u !== 'query' && u !== 'mutation') {
				throw new Error(`Invalid operation ${u} for action ${t}`);
			}
			if (
				((h = this.dmmf) == null ? void 0 : h.rootFieldMap[a]) ===
					void 0
			) {
				throw new Error(
					`Could not find rootField ${a} for action ${t} for model ${r} on rootType ${u}`,
				);
			}
			let p = no({
				dmmf: this.dmmf,
				rootField: a,
				rootTypeName: u,
				select: n,
				modelName: r,
				extensions: o,
			});
			return p.validate(n, !1, i, this.errorFormat, s), new Yi(p);
		}
		createBatch(t) {
			return t.map((r) => r.toEngineQuery());
		}
	},
	Yi = class {
		constructor(t) {
			this.document = t;
		}
		isWrite() {
			return this.document.type === 'mutation';
		}
		getBatchId() {
			var n;
			if (!this.getRootField().startsWith('findUnique')) return;
			let t = (n = this.document.children[0].args) == null
					? void 0
					: n.args.map((o) =>
						o.value instanceof Te
							? `${o.key}-${
								o.value.args.map((i) => i.key).join(',')
							}`
							: o.key
					).join(','),
				r = this.document.children[0].children.join(',');
			return `${this.document.children[0].name}|${t}|${r}`;
		}
		toDebugString() {
			return String(this.document);
		}
		toEngineQuery() {
			return { query: String(this.document), variables: {} };
		}
		deserializeResponse(t, r) {
			let n = this.getRootField(), o = [];
			return n && o.push(n),
				o.push(...r.filter((i) => i !== 'select' && i !== 'include')),
				oo({ document: this.document, path: o, data: t });
		}
		getRootField() {
			return this.document.children[0].name;
		}
	};
d();
f();
m();
d();
f();
m();
d();
f();
m();
function fo(e) {
	return e === null
		? e
		: Array.isArray(e)
		? e.map(fo)
		: typeof e == 'object'
		? Id(e) ? Dd(e) : er(e, fo)
		: e;
}
function Id(e) {
	return e !== null && typeof e == 'object' && typeof e.$type == 'string';
}
function Dd({ $type: e, value: t }) {
	switch (e) {
		case 'BigInt':
			return BigInt(t);
		case 'Bytes':
			return x.Buffer.from(t, 'base64');
		case 'DateTime':
			return new Date(t);
		case 'Decimal':
			return new Le(t);
		case 'Json':
			return JSON.parse(t);
		default:
			ft(t, 'Unknown tagged value');
	}
}
d();
f();
m();
d();
f();
m();
d();
f();
m();
var mo = class {
	constructor(t = 0, r) {
		this.context = r;
		this.lines = [];
		this.currentLine = '';
		this.currentIndent = 0;
		this.currentIndent = t;
	}
	write(t) {
		return typeof t == 'string' ? this.currentLine += t : t.write(this),
			this;
	}
	writeJoined(t, r) {
		let n = r.length - 1;
		for (let o = 0; o < r.length; o++) {
			this.write(r[o]), o !== n && this.write(t);
		}
		return this;
	}
	writeLine(t) {
		return this.write(t).newLine();
	}
	newLine() {
		this.lines.push(this.indentedCurrentLine()),
			this.currentLine = '',
			this.marginSymbol = void 0;
		let t = this.afterNextNewLineCallback;
		return this.afterNextNewLineCallback = void 0, t == null || t(), this;
	}
	withIndent(t) {
		return this.indent(), t(this), this.unindent(), this;
	}
	afterNextNewline(t) {
		return this.afterNextNewLineCallback = t, this;
	}
	indent() {
		return this.currentIndent++, this;
	}
	unindent() {
		return this.currentIndent > 0 && this.currentIndent--, this;
	}
	addMarginSymbol(t) {
		return this.marginSymbol = t, this;
	}
	toString() {
		return this.lines.concat(this.indentedCurrentLine()).join(`
`);
	}
	getCurrentLineLength() {
		return this.currentLine.length;
	}
	indentedCurrentLine() {
		let t = this.currentLine.padStart(
			this.currentLine.length + 2 * this.currentIndent,
		);
		return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
	}
};
d();
f();
m();
var ml = ue(Un());
d();
f();
m();
var ht = class {
	constructor(t, r) {
		this.name = t;
		this.value = r;
		this.isRequired = !1;
	}
	makeRequired() {
		return this.isRequired = !0, this;
	}
	write(t) {
		let { colors: { green: r } } = t.context;
		t.addMarginSymbol(r(this.isRequired ? '+' : '?')),
			t.write(r(this.name)),
			this.isRequired || t.write(r('?')),
			t.write(r(': ')),
			typeof this.value == 'string'
				? t.write(r(this.value))
				: t.write(this.value);
	}
};
d();
f();
m();
d();
f();
m();
var go = (e) => e,
	cl = { bold: go, red: go, green: go, dim: go },
	pl = { bold: K, red: Z, green: Q, dim: X },
	gr = {
		write(e) {
			e.writeLine(',');
		},
	};
d();
f();
m();
var ct = class {
	constructor(t) {
		this.contents = t;
		this.isUnderlined = !1;
		this.color = (t) => t;
	}
	underline() {
		return this.isUnderlined = !0, this;
	}
	setColor(t) {
		return this.color = t, this;
	}
	write(t) {
		let r = t.getCurrentLineLength();
		t.write(this.color(this.contents)),
			this.isUnderlined && t.afterNextNewline(() => {
				t.write(' '.repeat(r)).writeLine(
					this.color('~'.repeat(this.contents.length)),
				);
			});
	}
};
d();
f();
m();
var It = class {
	constructor() {
		this.hasError = !1;
	}
	markAsError() {
		return this.hasError = !0, this;
	}
};
var ie = class extends It {
	constructor() {
		super(...arguments);
		this.fields = {};
		this.suggestions = [];
	}
	addField(r) {
		this.fields[r.name] = r;
	}
	addSuggestion(r) {
		this.suggestions.push(r);
	}
	getField(r) {
		return this.fields[r];
	}
	getDeepField(r) {
		let [n, ...o] = r, i = this.getField(n);
		if (!i) return;
		let s = i;
		for (let a of o) {
			if (!(s.value instanceof ie)) return;
			let u = s.value.getField(a);
			if (!u) return;
			s = u;
		}
		return s;
	}
	getDeepFieldValue(r) {
		var n;
		return r.length === 0
			? this
			: (n = this.getDeepField(r)) == null
			? void 0
			: n.value;
	}
	hasField(r) {
		return Boolean(this.getField(r));
	}
	removeAllFields() {
		this.fields = {};
	}
	removeField(r) {
		delete this.fields[r];
	}
	getFields() {
		return this.fields;
	}
	isEmpty() {
		return Object.keys(this.fields).length === 0;
	}
	getFieldValue(r) {
		var n;
		return (n = this.getField(r)) == null ? void 0 : n.value;
	}
	getDeepSubSelectionValue(r) {
		let n = this;
		for (let o of r) {
			if (!(n instanceof ie)) return;
			let i = n.getSubSelectionValue(o);
			if (!i) return;
			n = i;
		}
		return n;
	}
	getDeepSelectionParent(r) {
		let n = this.getSelectionParent();
		if (!n) return;
		let o = n;
		for (let i of r) {
			let s = o.value.getFieldValue(i);
			if (!s || !(s instanceof ie)) return;
			let a = s.getSelectionParent();
			if (!a) return;
			o = a;
		}
		return o;
	}
	getSelectionParent() {
		let r = this.getField('select');
		if ((r == null ? void 0 : r.value) instanceof ie) {
			return { kind: 'select', value: r.value };
		}
		let n = this.getField('include');
		if ((n == null ? void 0 : n.value) instanceof ie) {
			return { kind: 'include', value: n.value };
		}
	}
	getSubSelectionValue(r) {
		var n;
		return (n = this.getSelectionParent()) == null
			? void 0
			: n.value.fields[r].value;
	}
	getPrintWidth() {
		let r = Object.values(this.fields);
		return r.length == 0
			? 2
			: Math.max(...r.map((o) => o.getPrintWidth())) + 2;
	}
	write(r) {
		let n = Object.values(this.fields);
		if (n.length === 0 && this.suggestions.length === 0) {
			this.writeEmpty(r);
			return;
		}
		this.writeWithContents(r, n);
	}
	writeEmpty(r) {
		let n = new ct('{}');
		this.hasError && n.setColor(r.context.colors.red).underline(),
			r.write(n);
	}
	writeWithContents(r, n) {
		r.writeLine('{').withIndent(() => {
			r.writeJoined(gr, [...n, ...this.suggestions]).newLine();
		}),
			r.write('}'),
			this.hasError && r.afterNextNewline(() => {
				r.writeLine(
					r.context.colors.red('~'.repeat(this.getPrintWidth())),
				);
			});
	}
};
d();
f();
m();
var we = class extends It {
	constructor(r) {
		super();
		this.text = r;
	}
	getPrintWidth() {
		return this.text.length;
	}
	write(r) {
		let n = new ct(this.text);
		this.hasError && n.underline().setColor(r.context.colors.red),
			r.write(n);
	}
};
d();
f();
m();
var yo = class {
	constructor() {
		this.fields = [];
	}
	addField(t, r) {
		return this.fields.push({
			write(n) {
				let { green: o, dim: i } = n.context.colors;
				n.write(o(i(`${t}: ${r}`))).addMarginSymbol(o(i('+')));
			},
		}),
			this;
	}
	write(t) {
		let { colors: { green: r } } = t.context;
		t.writeLine(r('{')).withIndent(() => {
			t.writeJoined(gr, this.fields).newLine();
		}).write(r('}')).addMarginSymbol(r('+'));
	}
};
function Zi(e, t) {
	switch (e.kind) {
		case 'IncludeAndSelect':
			Nd(e, t);
			break;
		case 'IncludeOnScalar':
			_d(e, t);
			break;
		case 'EmptySelection':
			$d(e, t);
			break;
		case 'UnknownSelectionField':
			jd(e, t);
			break;
		case 'UnknownArgument':
			Ld(e, t);
			break;
		case 'UnknownInputField':
			Bd(e, t);
			break;
		case 'RequiredArgumentMissing':
			Ud(e, t);
			break;
		case 'InvalidArgumentType':
			qd(e, t);
			break;
		case 'InvalidArgumentValue':
			Vd(e, t);
			break;
		case 'ValueTooLarge':
			Gd(e, t);
			break;
		case 'SomeFieldsMissing':
			Jd(e, t);
			break;
		case 'TooManyFieldsGiven':
			Kd(e, t);
			break;
		case 'Union':
			Wd(e, t);
			break;
		default:
			throw new Error('not implemented: ' + e.kind);
	}
}
function Nd(e, t) {
	var n, o;
	let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	r && r instanceof ie &&
	((n = r.getField('include')) == null || n.markAsError(),
		(o = r.getField('select')) == null || o.markAsError()),
		t.addErrorMessage((i) =>
			`Please ${i.bold('either')} use ${i.green('`include`')} or ${
				i.green('`select`')
			}, but ${i.red('not both')} at the same time.`
		);
}
function _d(e, t) {
	var s, a;
	let [r, n] = ho(e.selectionPath),
		o = e.outputType,
		i = (s = t.arguments.getDeepSelectionParent(r)) == null
			? void 0
			: s.value;
	if (i && ((a = i.getField(n)) == null || a.markAsError(), o)) {
		for (let u of o.fields) {
			u.isRelation && i.addSuggestion(new ht(u.name, 'true'));
		}
	}
	t.addErrorMessage((u) => {
		let l = `Invalid scalar field ${u.red(`\`${n}\``)} for ${
			u.bold('include')
		} statement`;
		return o ? l += ` on model ${u.bold(o.name)}. ${rn(u)}` : l += '.',
			l += `
Note that ${u.bold('include')} statements only accept relation fields.`,
			l;
	});
}
function $d(e, t) {
	var i, s;
	let r = e.outputType,
		n = (i = t.arguments.getDeepSelectionParent(e.selectionPath)) == null
			? void 0
			: i.value,
		o = (s = n == null ? void 0 : n.isEmpty()) != null ? s : !1;
	n && (n.removeAllFields(), hl(n, r)),
		t.addErrorMessage((a) =>
			o
				? `The ${a.red('`select`')} statement for type ${
					a.bold(r.name)
				} must not be empty. ${rn(a)}`
				: `The ${a.red('`select`')} statement for type ${
					a.bold(r.name)
				} needs ${a.bold('at least one truthy value')}.`
		);
}
function jd(e, t) {
	var i;
	let [r, n] = ho(e.selectionPath), o = t.arguments.getDeepSelectionParent(r);
	o &&
	((i = o.value.getField(n)) == null || i.markAsError(),
		hl(o.value, e.outputType)),
		t.addErrorMessage((s) => {
			let a = [`Unknown field ${s.red(`\`${n}\``)}`];
			return o && a.push(`for ${s.bold(o.kind)} statement`),
				a.push(`on model ${s.bold(`\`${e.outputType.name}\``)}.`),
				a.push(rn(s)),
				a.join(' ');
		});
}
function Ld(e, t) {
	var o;
	let r = e.argumentPath[0],
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	n instanceof ie &&
	((o = n.getField(r)) == null || o.markAsError(), zd(n, e.arguments)),
		t.addErrorMessage((i) => dl(i, r, e.arguments.map((s) => s.name)));
}
function Bd(e, t) {
	var i;
	let [r, n] = ho(e.argumentPath),
		o = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	if (o instanceof ie) {
		(i = o.getDeepField(e.argumentPath)) == null || i.markAsError();
		let s = o.getDeepFieldValue(r);
		s instanceof ie && bl(s, e.inputType);
	}
	t.addErrorMessage((s) => dl(s, n, e.inputType.fields.map((a) => a.name)));
}
function dl(e, t, r) {
	let n = [`Unknown argument \`${e.red(t)}\`.`], o = Zd(t, r);
	return o && n.push(`Did you mean \`${e.green(o)}\`?`),
		r.length > 0 && n.push(rn(e)),
		n.join(' ');
}
function Ud(e, t) {
	let r;
	t.addErrorMessage((u) =>
		(r == null ? void 0 : r.value) instanceof we && r.value.text === 'null'
			? `Argument \`${u.green(i)}\` must not be ${u.red('null')}.`
			: `Argument \`${u.green(i)}\` is missing.`
	);
	let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	if (!(n instanceof ie)) return;
	let [o, i] = ho(e.argumentPath), s = new yo(), a = n.getDeepFieldValue(o);
	if (a instanceof ie) {
		if (
			r = a.getField(i),
				r && a.removeField(i),
				e.inputTypes.length === 1 && e.inputTypes[0].kind === 'object'
		) {
			for (let u of e.inputTypes[0].fields) {
				s.addField(u.name, u.typeNames.join(' | '));
			}
			a.addSuggestion(new ht(i, s).makeRequired());
		} else {
			let u = e.inputTypes.map(gl).join(' | ');
			a.addSuggestion(new ht(i, u).makeRequired());
		}
	}
}
function gl(e) {
	return e.kind === 'list' ? `${gl(e.elementType)}[]` : e.name;
}
function qd(e, t) {
	var o;
	let r = e.argument.name,
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	n instanceof ie &&
	((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()),
		t.addErrorMessage((i) => {
			let s = bo('or', e.argument.typeNames.map((a) => i.green(a)));
			return `Argument \`${
				i.bold(r)
			}\`: Invalid value provided. Expected ${s}, provided ${
				i.red(e.inferredType)
			}.`;
		});
}
function Vd(e, t) {
	var o;
	let r = e.argument.name,
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	n instanceof ie &&
	((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()),
		t.addErrorMessage((i) => {
			let s = bo('or', e.argument.typeNames.map((u) => i.green(u))),
				a = [`Invalid value for argument \`${i.bold(r)}\``];
			return e.underlyingError && a.push(`: ${e.underlyingError}`),
				a.push(`. Expected ${s}.`),
				a.join('');
		});
}
function Gd(e, t) {
	let r = e.argument.name,
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
		o;
	if (n instanceof ie) {
		let i = n.getDeepField(e.argumentPath),
			s = i == null ? void 0 : i.value;
		s == null || s.markAsError(), s instanceof we && (o = s.text);
	}
	t.addErrorMessage((i) => {
		let s = ['Unable to fit value'];
		return o && s.push(i.red(o)),
			s.push(`into a 64-bit signed integer for field \`${i.bold(r)}\``),
			s.join(' ');
	});
}
function Jd(e, t) {
	let r = e.argumentPath[e.argumentPath.length - 1],
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	if (n instanceof ie) {
		let o = n.getDeepFieldValue(e.argumentPath);
		o instanceof ie && bl(o, e.inputType);
	}
	t.addErrorMessage((o) => {
		let i = [
			`Argument \`${o.bold(r)}\` of type ${
				o.bold(e.inputType.name)
			} needs`,
		];
		return e.constraints.minFieldCount === 1
			? e.constraints.requiredFields
				? i.push(
					`${o.green('at least one of')} ${
						bo(
							'or',
							e.constraints.requiredFields.map((s) =>
								`\`${o.bold(s)}\``
							),
						)
					} arguments.`,
				)
				: i.push(`${o.green('at least one')} argument.`)
			: i.push(
				`${
					o.green(`at least ${e.constraints.minFieldCount}`)
				} arguments.`,
			),
			i.push(rn(o)),
			i.join(' ');
	});
}
function Kd(e, t) {
	let r = e.argumentPath[e.argumentPath.length - 1],
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
		o = [];
	if (n instanceof ie) {
		let i = n.getDeepFieldValue(e.argumentPath);
		i instanceof ie && (i.markAsError(), o = Object.keys(i.getFields()));
	}
	t.addErrorMessage((i) => {
		let s = [
			`Argument \`${i.bold(r)}\` of type ${
				i.bold(e.inputType.name)
			} needs`,
		];
		return e.constraints.minFieldCount === 1 &&
				e.constraints.maxFieldCount == 1
			? s.push(`${i.green('exactly one')} argument,`)
			: e.constraints.maxFieldCount == 1
			? s.push(`${i.green('at most one')} argument,`)
			: s.push(
				`${
					i.green(`at most ${e.constraints.maxFieldCount}`)
				} arguments,`,
			),
			s.push(
				`but you provided ${
					bo(
						'and',
						o.map((a) => i.red(a)),
					)
				}. Please choose`,
			),
			e.constraints.maxFieldCount === 1
				? s.push('one.')
				: s.push(`${e.constraints.maxFieldCount}.`),
			s.join(' ');
	});
}
function Wd(e, t) {
	let r = yl(e);
	r ? Zi(r, t) : t.addErrorMessage(() => 'Unknown error');
}
function yl(e) {
	var t;
	return (t = Qd(e)) != null ? t : Hd(e);
}
function Qd({ errors: e }) {
	if (e.length === 0 || e[0].kind !== 'InvalidArgumentType') return;
	let t = { ...e[0], argument: { ...e[0].argument } };
	for (let r = 1; r < e.length; r++) {
		let n = e[r];
		if (
			n.kind !== 'InvalidArgumentType' ||
			!fl(n.selectionPath, t.selectionPath) ||
			!fl(n.argumentPath, t.argumentPath)
		) return;
		t.argument.typeNames = t.argument.typeNames.concat(
			n.argument.typeNames,
		);
	}
	return t;
}
function fl(e, t) {
	if (e.length !== t.length) return !1;
	for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
	return !0;
}
function Hd(e) {
	return ui(e.errors, (t) => {
		var n;
		t.kind === 'Union' && (t = (n = yl(t)) != null ? n : t);
		let r = 0;
		return Array.isArray(t.selectionPath) && (r += t.selectionPath.length),
			Array.isArray(t.argumentPath) && (r += t.argumentPath.length),
			r;
	});
}
function hl(e, t) {
	for (let r of t.fields) {
		e.hasField(r.name) || e.addSuggestion(new ht(r.name, 'true'));
	}
}
function zd(e, t) {
	for (let r of t) {
		e.hasField(r.name) ||
			e.addSuggestion(new ht(r.name, r.typeNames.join(' | ')));
	}
}
function bl(e, t) {
	if (t.kind === 'object') {
		for (let r of t.fields) {
			e.hasField(r.name) ||
				e.addSuggestion(new ht(r.name, r.typeNames.join(' | ')));
		}
	}
}
function ho(e) {
	let t = [...e], r = t.pop();
	if (!r) throw new Error('unexpected empty path');
	return [t, r];
}
function rn({ green: e }) {
	return `Available options are listed in ${e('green')}.`;
}
function bo(e, t) {
	if (t.length === 1) return t[0];
	let r = [...t], n = r.pop();
	return `${r.join(', ')} ${e} ${n}`;
}
var Yd = 3;
function Zd(e, t) {
	let r = 1 / 0, n;
	for (let o of t) {
		let i = (0, ml.default)(e, o);
		i > Yd || i < r && (r = i, n = o);
	}
	return n;
}
d();
f();
m();
d();
f();
m();
var wo = class extends It {
	constructor() {
		super(...arguments);
		this.items = [];
	}
	addItem(r) {
		return this.items.push(r), this;
	}
	getPrintWidth() {
		return this.items.length === 0
			? 2
			: Math.max(...this.items.map((n) => n.getPrintWidth())) + 2;
	}
	write(r) {
		if (this.items.length === 0) {
			this.writeEmpty(r);
			return;
		}
		this.writeWithItems(r);
	}
	writeEmpty(r) {
		let n = new ct('[]');
		this.hasError && n.setColor(r.context.colors.red).underline(),
			r.write(n);
	}
	writeWithItems(r) {
		let { colors: n } = r.context;
		r.writeLine('[').withIndent(() =>
			r.writeJoined(gr, this.items).newLine()
		).write(']'),
			this.hasError && r.afterNextNewline(() => {
				r.writeLine(n.red('~'.repeat(this.getPrintWidth())));
			});
	}
};
d();
f();
m();
var wl = ': ',
	Eo = class {
		constructor(t, r) {
			this.name = t;
			this.value = r;
			this.hasError = !1;
		}
		markAsError() {
			this.hasError = !0;
		}
		getPrintWidth() {
			return this.name.length + this.value.getPrintWidth() + wl.length;
		}
		write(t) {
			let r = new ct(this.name);
			this.hasError && r.underline().setColor(t.context.colors.red),
				t.write(r).write(wl).write(this.value);
		}
	};
var Xi = class {
	constructor(t) {
		this.errorMessages = [];
		this.arguments = t;
	}
	write(t) {
		t.write(this.arguments);
	}
	addErrorMessage(t) {
		this.errorMessages.push(t);
	}
	renderAllMessages(t) {
		return this.errorMessages.map((r) => r(t)).join(`
`);
	}
};
function El(e) {
	return new Xi(xl(e));
}
function xl(e) {
	let t = new ie();
	for (let [r, n] of Object.entries(e)) {
		let o = new Eo(r, Al(n));
		t.addField(o);
	}
	return t;
}
function Al(e) {
	if (typeof e == 'string') return new we(JSON.stringify(e));
	if (typeof e == 'number' || typeof e == 'boolean') return new we(String(e));
	if (typeof e == 'bigint') return new we(`${e}n`);
	if (e === null) return new we('null');
	if (e === void 0) return new we('undefined');
	if (St(e)) return new we(`new Prisma.Decimal("${e.toFixed()}")`);
	if (e instanceof Uint8Array) {
		return x.Buffer.isBuffer(e)
			? new we(`Buffer.alloc(${e.byteLength})`)
			: new we(`new Uint8Array(${e.byteLength})`);
	}
	if (e instanceof Date) {
		let t = it(e) ? e.toISOString() : 'Invalid Date';
		return new we(`new Date("${t}")`);
	}
	if (e instanceof Ae) return new we(`Prisma.${e._getName()}`);
	if (qn(e)) return new we(`prisma.${lr(e.modelName)}.$fields.${e.name}`);
	if (Array.isArray(e)) return Xd(e);
	if (typeof e == 'object') return xl(e);
	ft(e, 'Unknown value type');
}
function Xd(e) {
	let t = new wo();
	for (let r of e) t.addItem(Al(r));
	return t;
}
function xo(
	{ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: o },
) {
	let i = El(e);
	for (let c of t) Zi(c, i);
	let s = r === 'pretty' ? pl : cl,
		a = i.renderAllMessages(s),
		u = new mo(0, { colors: s }).write(i).toString(),
		l = at({
			message: a,
			callsite: n,
			originalMethod: o,
			showColors: r === 'pretty',
			callArguments: u,
		});
	throw new ce(l);
}
var eg = {
	findUnique: 'findUnique',
	findUniqueOrThrow: 'findUniqueOrThrow',
	findFirst: 'findFirst',
	findFirstOrThrow: 'findFirstOrThrow',
	findMany: 'findMany',
	count: 'aggregate',
	create: 'createOne',
	createMany: 'createMany',
	update: 'updateOne',
	updateMany: 'updateMany',
	upsert: 'upsertOne',
	delete: 'deleteOne',
	deleteMany: 'deleteMany',
	executeRaw: 'executeRaw',
	queryRaw: 'queryRaw',
	aggregate: 'aggregate',
	groupBy: 'groupBy',
	runCommandRaw: 'runCommandRaw',
	findRaw: 'findRaw',
	aggregateRaw: 'aggregateRaw',
};
function Pl(
	{
		modelName: e,
		action: t,
		args: r,
		runtimeDataModel: n,
		extensions: o,
		callsite: i,
		clientMethod: s,
		errorFormat: a,
	},
) {
	let u = new yr({
		runtimeDataModel: n,
		modelName: e,
		action: t,
		rootArgs: r,
		callsite: i,
		extensions: o,
		selectionPath: [],
		argumentPath: [],
		originalMethod: s,
		errorFormat: a,
	});
	return { modelName: e, action: eg[t], query: es(r, u) };
}
function es({ select: e, include: t, ...r } = {}, n) {
	return { arguments: Tl(r, n), selection: tg(e, t, n) };
}
function tg(e, t, r) {
	return e && t &&
		r.throwValidationError({
			kind: 'IncludeAndSelect',
			selectionPath: r.getSelectionPath(),
		}),
		e ? og(e, r) : rg(r, t);
}
function rg(e, t) {
	let r = {};
	return e.model && !e.isRawAction() && (r.$composites = !0, r.$scalars = !0),
		t && ng(r, t, e),
		r;
}
function ng(e, t, r) {
	for (let [n, o] of Object.entries(t)) {
		let i = r.findField(n);
		i && (i == null ? void 0 : i.kind) !== 'object' &&
		r.throwValidationError({
			kind: 'IncludeOnScalar',
			selectionPath: r.getSelectionPath().concat(n),
			outputType: r.getOutputTypeDescription(),
		}),
			o === !0
				? e[n] = !0
				: typeof o == 'object' && (e[n] = es(o, r.nestSelection(n)));
	}
}
function og(e, t) {
	let r = {}, n = t.getComputedFields(), o = Yn(e, n);
	for (let [i, s] of Object.entries(o)) {
		let a = t.findField(i);
		(n == null ? void 0 : n[i]) && !a ||
			(s === !0
				? r[i] = !0
				: typeof s == 'object' && (r[i] = es(s, t.nestSelection(i))));
	}
	return r;
}
function vl(e, t) {
	if (e === null) return null;
	if (typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean') {
		return e;
	}
	if (typeof e == 'bigint') return { $type: 'BigInt', value: String(e) };
	if (Be(e)) {
		if (it(e)) return { $type: 'DateTime', value: e.toISOString() };
		t.throwValidationError({
			kind: 'InvalidArgumentValue',
			selectionPath: t.getSelectionPath(),
			argumentPath: t.getArgumentPath(),
			argument: { name: t.getArgumentName(), typeNames: ['Date'] },
			underlyingError: 'Provided Date object is invalid',
		});
	}
	if (qn(e)) return { $type: 'FieldRef', value: { _ref: e.name } };
	if (Array.isArray(e)) return ig(e, t);
	if (ArrayBuffer.isView(e)) {
		return { $type: 'Bytes', value: x.Buffer.from(e).toString('base64') };
	}
	if (sg(e)) return e.values;
	if (St(e)) return { $type: 'Decimal', value: e.toFixed() };
	if (e instanceof Ae) {
		if (e !== or.instances[e._getName()]) {
			throw new Error('Invalid ObjectEnumValue');
		}
		return { $type: 'Enum', value: e._getName() };
	}
	if (typeof e == 'object') return Tl(e, t);
	ft(e, 'Unknown value type');
}
function Tl(e, t) {
	if (e.$type) return { $type: 'Json', value: JSON.stringify(e) };
	let r = {};
	for (let n in e) {
		let o = e[n];
		o !== void 0 && (r[n] = vl(o, t.nestArgument(n)));
	}
	return r;
}
function ig(e, t) {
	let r = [];
	for (let n = 0; n < e.length; n++) {
		let o = e[n];
		o !== void 0 && r.push(vl(o, t.nestArgument(String(n))));
	}
	return r;
}
function sg(e) {
	return typeof e == 'object' && e !== null &&
		e.__prismaRawParameters__ === !0;
}
var yr = class {
	constructor(t) {
		this.params = t;
		this.params.modelName &&
			(this.model =
				this.params.runtimeDataModel.models[this.params.modelName]);
	}
	throwValidationError(t) {
		var r;
		xo({
			errors: [t],
			originalMethod: this.params.originalMethod,
			args: (r = this.params.rootArgs) != null ? r : {},
			callsite: this.params.callsite,
			errorFormat: this.params.errorFormat,
		});
	}
	getSelectionPath() {
		return this.params.selectionPath;
	}
	getArgumentPath() {
		return this.params.argumentPath;
	}
	getArgumentName() {
		return this.params.argumentPath[this.params.argumentPath.length - 1];
	}
	getOutputTypeDescription() {
		if (!(!this.params.modelName || !this.model)) {
			return {
				name: this.params.modelName,
				fields: this.model.fields.map((t) => ({
					name: t.name,
					typeName: 'boolean',
					isRelation: t.kind === 'object',
				})),
			};
		}
	}
	isRawAction() {
		return [
			'executeRaw',
			'queryRaw',
			'runCommandRaw',
			'findRaw',
			'aggregateRaw',
		].includes(this.params.action);
	}
	getComputedFields() {
		if (!!this.params.modelName) {
			return this.params.extensions.getAllComputedFields(
				this.params.modelName,
			);
		}
	}
	findField(t) {
		var r;
		return (r = this.model) == null
			? void 0
			: r.fields.find((n) => n.name === t);
	}
	nestSelection(t) {
		let r = this.findField(t),
			n = (r == null ? void 0 : r.kind) === 'object' ? r.type : void 0;
		return new yr({
			...this.params,
			modelName: n,
			selectionPath: this.params.selectionPath.concat(t),
		});
	}
	nestArgument(t) {
		return new yr({
			...this.params,
			argumentPath: this.params.argumentPath.concat(t),
		});
	}
};
var nn = class {
		constructor(t, r) {
			this.runtimeDataModel = t;
			this.errorFormat = r;
		}
		createMessage(t) {
			let r = Pl({
				...t,
				runtimeDataModel: this.runtimeDataModel,
				errorFormat: this.errorFormat,
			});
			return new Ao(r);
		}
		createBatch(t) {
			return t.map((r) => r.toEngineQuery());
		}
	},
	ag = {
		aggregate: !1,
		aggregateRaw: !1,
		createMany: !0,
		createOne: !0,
		deleteMany: !0,
		deleteOne: !0,
		executeRaw: !0,
		findFirst: !1,
		findFirstOrThrow: !1,
		findMany: !1,
		findRaw: !1,
		findUnique: !1,
		findUniqueOrThrow: !1,
		groupBy: !1,
		queryRaw: !1,
		runCommandRaw: !0,
		updateMany: !0,
		updateOne: !0,
		upsertOne: !0,
	},
	Ao = class {
		constructor(t) {
			this.query = t;
		}
		isWrite() {
			return ag[this.query.action];
		}
		getBatchId() {
			if (this.query.action !== 'findUnique') return;
			let t = [];
			return this.query.modelName && t.push(this.query.modelName),
				this.query.query.arguments &&
				t.push(ts(this.query.query.arguments)),
				t.push(ts(this.query.query.selection)),
				t.join('');
		}
		toDebugString() {
			return JSON.stringify(this.query, null, 2);
		}
		toEngineQuery() {
			return this.query;
		}
		deserializeResponse(t, r) {
			if (!t) return t;
			let n = Object.values(t)[0],
				o = r.filter((i) => i !== 'select' && i !== 'include');
			return fo(Yr(n, o));
		}
	};
function ts(e) {
	return `(${
		Object.keys(e).sort().map((r) => {
			let n = e[r];
			return typeof n == 'object' && n !== null ? `(${r} ${ts(n)})` : r;
		}).join(' ')
	})`;
}
d();
f();
m();
d();
f();
m();
var Ue = class {
	constructor(t, r) {
		if (t.length - 1 !== r.length) {
			throw t.length === 0
				? new TypeError('Expected at least 1 string')
				: new TypeError(
					`Expected ${t.length} strings to have ${
						t.length - 1
					} values`,
				);
		}
		let n = r.reduce(
			(s, a) => s + (a instanceof Ue ? a.values.length : 1),
			0,
		);
		this.values = new Array(n),
			this.strings = new Array(n + 1),
			this.strings[0] = t[0];
		let o = 0, i = 0;
		for (; o < r.length;) {
			let s = r[o++], a = t[o];
			if (s instanceof Ue) {
				this.strings[i] += s.strings[0];
				let u = 0;
				for (; u < s.values.length;) {
					this.values[i++] = s.values[u++],
						this.strings[i] = s.strings[u];
				}
				this.strings[i] += a;
			} else this.values[i++] = s, this.strings[i] = a;
		}
	}
	get text() {
		let t = 1, r = this.strings[0];
		for (; t < this.strings.length;) r += `$${t}${this.strings[t++]}`;
		return r;
	}
	get sql() {
		let t = 1, r = this.strings[0];
		for (; t < this.strings.length;) r += `?${this.strings[t++]}`;
		return r;
	}
	inspect() {
		return { text: this.text, sql: this.sql, values: this.values };
	}
};
function Sl(e, t = ',', r = '', n = '') {
	if (e.length === 0) {
		throw new TypeError(
			'Expected `join([])` to be called with an array of multiple elements, but got an empty array',
		);
	}
	return new Ue([r, ...Array(e.length - 1).fill(t), n], e);
}
function rs(e) {
	return new Ue([e], []);
}
var Ml = rs('');
function ns(e, ...t) {
	return new Ue(e, t);
}
d();
f();
m();
var os = (e) => e.reduce((t, r, n) => `${t}@P${n}${r}`);
d();
f();
m();
function hr(e) {
	try {
		return Fl(e, 'fast');
	} catch (t) {
		return Fl(e, 'slow');
	}
}
function Fl(e, t) {
	return JSON.stringify(e.map((r) => ug(r, t)));
}
function ug(e, t) {
	return typeof e == 'bigint'
		? { prisma__type: 'bigint', prisma__value: e.toString() }
		: Be(e)
		? { prisma__type: 'date', prisma__value: e.toJSON() }
		: Le.isDecimal(e)
		? { prisma__type: 'decimal', prisma__value: e.toJSON() }
		: x.Buffer.isBuffer(e)
		? { prisma__type: 'bytes', prisma__value: e.toString('base64') }
		: lg(e) || ArrayBuffer.isView(e)
		? {
			prisma__type: 'bytes',
			prisma__value: x.Buffer.from(e).toString('base64'),
		}
		: typeof e == 'object' && t === 'slow'
		? Rl(e)
		: e;
}
function lg(e) {
	return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
		? !0
		: typeof e == 'object' && e !== null
		? e[Symbol.toStringTag] === 'ArrayBuffer' ||
			e[Symbol.toStringTag] === 'SharedArrayBuffer'
		: !1;
}
function Rl(e) {
	if (typeof e != 'object' || e === null) return e;
	if (typeof e.toJSON == 'function') return e.toJSON();
	if (Array.isArray(e)) return e.map(Ol);
	let t = {};
	for (let r of Object.keys(e)) t[r] = Ol(e[r]);
	return t;
}
function Ol(e) {
	return typeof e == 'bigint' ? e.toString() : Rl(e);
}
var cg = /^(\s*alter\s)/i, Cl = Ie('prisma:client');
function is(e, t, r) {
	if (t.length > 0 && cg.exec(e)) {
		throw new Error(`Running ALTER using ${r} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
	}
}
function pg(e) {
	return Array.isArray(e);
}
var ss = (e, t) => ([r, ...n]) => {
	let o = '', i;
	if (typeof r == 'string') {
		o = r,
			i = { values: hr(n || []), __prismaRawParameters__: !0 },
			t.includes('executeRaw') &&
			is(o, n, 'prisma.$executeRawUnsafe(<SQL>, [...values])');
	} else if (pg(r)) {
		switch (e._activeProvider) {
			case 'sqlite':
			case 'mysql': {
				let s = new Ue(r, n);
				o = s.sql,
					i = { values: hr(s.values), __prismaRawParameters__: !0 };
				break;
			}
			case 'cockroachdb':
			case 'postgresql': {
				let s = new Ue(r, n);
				o = s.text,
					t.includes('executeRaw') &&
					is(o, s.values, 'prisma.$executeRaw`<SQL>`'),
					i = { values: hr(s.values), __prismaRawParameters__: !0 };
				break;
			}
			case 'sqlserver': {
				o = os(r), i = { values: hr(n), __prismaRawParameters__: !0 };
				break;
			}
			default:
				throw new Error(
					`The ${e._activeProvider} provider does not support ${t}`,
				);
		}
	} else {
		switch (e._activeProvider) {
			case 'sqlite':
			case 'mysql':
				o = r.sql;
				break;
			case 'cockroachdb':
			case 'postgresql':
				o = r.text,
					t.includes('executeRaw') &&
					is(o, r.values, 'prisma.$executeRaw(sql`<SQL>`)');
				break;
			case 'sqlserver':
				o = os(r.strings);
				break;
			default:
				throw new Error(
					`The ${e._activeProvider} provider does not support ${t}`,
				);
		}
		i = { values: hr(r.values), __prismaRawParameters__: !0 };
	}
	return i != null && i.values
		? Cl(`prisma.${t}(${o}, ${i.values})`)
		: Cl(`prisma.${t}(${o})`),
		{ query: o, parameters: i };
};
d();
f();
m();
var Il = {
		isEnabled() {
			return !1;
		},
		getTraceParent() {
			return '00-10-10-00';
		},
		async createEngineSpan() {},
		getActiveContext() {},
		runInChildSpan(e, t) {
			return t();
		},
	},
	as = class {
		isEnabled() {
			return this.getGlobalTracingHelper().isEnabled();
		}
		getTraceParent(t) {
			return this.getGlobalTracingHelper().getTraceParent(t);
		}
		createEngineSpan(t) {
			return this.getGlobalTracingHelper().createEngineSpan(t);
		}
		getActiveContext() {
			return this.getGlobalTracingHelper().getActiveContext();
		}
		runInChildSpan(t, r) {
			return this.getGlobalTracingHelper().runInChildSpan(t, r);
		}
		getGlobalTracingHelper() {
			var t, r;
			return (r = (t = globalThis.PRISMA_INSTRUMENTATION) == null
					? void 0
					: t.helper) != null
				? r
				: Il;
		}
	};
function Dl(e) {
	return e.includes('tracing') ? new as() : Il;
}
d();
f();
m();
function kl(e, t = () => {}) {
	let r, n = new Promise((o) => r = o);
	return {
		then(o) {
			return --e === 0 && r(t()), o == null ? void 0 : o(n);
		},
	};
}
d();
f();
m();
function Nl(e) {
	return typeof e == 'string' ? e : e.reduce((t, r) => {
		let n = typeof r == 'string' ? r : r.level;
		return n === 'query'
			? t
			: t && (r === 'info' || t === 'info')
			? 'info'
			: n;
	}, void 0);
}
d();
f();
m();
function $l(e, t, r) {
	let n = _l(e, r),
		o = _l(t, r),
		i = Object.values(o).map((a) => a[a.length - 1]),
		s = Object.keys(o);
	return Object.entries(n).forEach(([a, u]) => {
		s.includes(a) || i.push(u[u.length - 1]);
	}),
		i;
}
var _l = (e, t) =>
	e.reduce((r, n) => {
		let o = t(n);
		return r[o] || (r[o] = []), r[o].push(n), r;
	}, {});
d();
f();
m();
var Po = class {
	constructor() {
		this._middlewares = [];
	}
	use(t) {
		this._middlewares.push(t);
	}
	get(t) {
		return this._middlewares[t];
	}
	has(t) {
		return !!this._middlewares[t];
	}
	length() {
		return this._middlewares.length;
	}
};
d();
f();
m();
var Bl = ue(Cn());
d();
f();
m();
function vo(e) {
	return typeof e.batchRequestIdx == 'number';
}
d();
f();
m();
function jl({ result: e, modelName: t, select: r, extensions: n }) {
	let o = n.getAllComputedFields(t);
	if (!o) return e;
	let i = [], s = [];
	for (let a of Object.values(o)) {
		if (r) {
			if (!r[a.name]) continue;
			let u = a.needs.filter((l) => !r[l]);
			u.length > 0 && s.push(Gi(u));
		}
		fg(e, a.needs) && i.push(mg(a, Ot(e, i)));
	}
	return i.length > 0 || s.length > 0 ? Ot(e, [...i, ...s]) : e;
}
function fg(e, t) {
	return t.every((r) => si(e, r));
}
function mg(e, t) {
	return Ut(Ft(e.name, () => e.compute(t)));
}
d();
f();
m();
function To(
	{ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: o },
) {
	var s;
	if (Array.isArray(t)) {
		for (let a = 0; a < t.length; a++) {
			t[a] = To({
				result: t[a],
				args: r,
				modelName: o,
				runtimeDataModel: n,
				visitor: e,
			});
		}
		return t;
	}
	let i = (s = e(t, o, r)) != null ? s : t;
	return r.include &&
		Ll({
			includeOrSelect: r.include,
			result: i,
			parentModelName: o,
			runtimeDataModel: n,
			visitor: e,
		}),
		r.select &&
		Ll({
			includeOrSelect: r.select,
			result: i,
			parentModelName: o,
			runtimeDataModel: n,
			visitor: e,
		}),
		i;
}
function Ll(
	{
		includeOrSelect: e,
		result: t,
		parentModelName: r,
		runtimeDataModel: n,
		visitor: o,
	},
) {
	for (let [i, s] of Object.entries(e)) {
		if (!s || t[i] == null) continue;
		let u = n.models[r].fields.find((c) => c.name === i);
		if (!u || u.kind !== 'object' || !u.relationName) continue;
		let l = typeof s == 'object' ? s : {};
		t[i] = To({
			visitor: o,
			result: t[i],
			args: l,
			modelName: u.type,
			runtimeDataModel: n,
		});
	}
}
d();
f();
m();
var So = class {
	constructor(t) {
		this.options = t;
		this.tickActive = !1;
		this.batches = {};
	}
	request(t) {
		let r = this.options.batchBy(t);
		return r
			? (this.batches[r] ||
				(this.batches[r] = [],
					this.tickActive || (this.tickActive = !0,
						w.nextTick(() => {
							this.dispatchBatches(), this.tickActive = !1;
						}))),
				new Promise((n, o) => {
					this.batches[r].push({ request: t, resolve: n, reject: o });
				}))
			: this.options.singleLoader(t);
	}
	dispatchBatches() {
		for (let t in this.batches) {
			let r = this.batches[t];
			delete this.batches[t],
				r.length === 1
					? this.options.singleLoader(r[0].request).then((n) => {
						n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
					}).catch((n) => {
						r[0].reject(n);
					})
					: this.options.batchLoader(r.map((n) => n.request)).then(
						(n) => {
							if (n instanceof Error) {
								for (let o = 0; o < r.length; o++) {
									r[o].reject(n);
								}
							} else {for (let o = 0; o < r.length; o++) {
									let i = n[o];
									i instanceof Error
										? r[o].reject(i)
										: r[o].resolve(i);
								}}
						},
					).catch((n) => {
						for (let o = 0; o < r.length; o++) r[o].reject(n);
					});
		}
	}
	get [Symbol.toStringTag]() {
		return 'DataLoader';
	}
};
var dg = Ie('prisma:client:request_handler'),
	Mo = class {
		constructor(t, r) {
			this.logEmitter = r,
				this.client = t,
				this.dataloader = new So({
					batchLoader: (n) => {
						let {
								transaction: o,
								protocolEncoder: i,
								otelParentCtx: s,
							} = n[0],
							a = i.createBatch(n.map((c) => c.protocolMessage)),
							u = this.client._tracingHelper.getTraceParent(s),
							l = n.some((c) => c.protocolMessage.isWrite());
						return this.client._engine.requestBatch(a, {
							traceparent: u,
							transaction: gg(o),
							containsWrite: l,
							customDataProxyFetch: n[0].customDataProxyFetch,
						});
					},
					singleLoader: (n) => {
						var i;
						let o =
							((i = n.transaction) == null ? void 0 : i.kind) ===
									'itx'
								? Ul(n.transaction)
								: void 0;
						return this.client._engine.request(
							n.protocolMessage.toEngineQuery(),
							{
								traceparent: this.client._tracingHelper
									.getTraceParent(),
								interactiveTransaction: o,
								isWrite: n.protocolMessage.isWrite(),
								customDataProxyFetch: n.customDataProxyFetch,
							},
						);
					},
					batchBy: (n) => {
						var o;
						return (o = n.transaction) != null && o.id
							? `transaction-${n.transaction.id}`
							: n.protocolMessage.getBatchId();
					},
				});
		}
		async request({
			protocolMessage: t,
			protocolEncoder: r,
			dataPath: n = [],
			callsite: o,
			modelName: i,
			rejectOnNotFound: s,
			clientMethod: a,
			args: u,
			transaction: l,
			unpacker: c,
			extensions: p,
			otelParentCtx: g,
			otelChildCtx: h,
			customDataProxyFetch: b,
		}) {
			try {
				let y = await this.dataloader.request({
						protocolMessage: t,
						protocolEncoder: r,
						transaction: l,
						otelParentCtx: g,
						otelChildCtx: h,
						customDataProxyFetch: b,
					}),
					P = y == null ? void 0 : y.data,
					S = y == null ? void 0 : y.elapsed,
					v = this.unpack(t, P, n, c);
				return el(v, a, i, s),
					i &&
					(v = this.applyResultExtensions({
						result: v,
						modelName: i,
						args: u,
						extensions: p,
					})),
					w.env.PRISMA_CLIENT_GET_TIME ? { data: v, elapsed: S } : v;
			} catch (y) {
				this.handleAndLogRequestError({
					error: y,
					clientMethod: a,
					callsite: o,
					transaction: l,
					args: u,
				});
			}
		}
		handleAndLogRequestError(t) {
			try {
				this.handleRequestError(t);
			} catch (r) {
				throw this.logEmitter &&
					this.logEmitter.emit('error', {
						message: r.message,
						target: t.clientMethod,
						timestamp: new Date(),
					}),
					r;
			}
		}
		handleRequestError(
			{ error: t, clientMethod: r, callsite: n, transaction: o, args: i },
		) {
			if (dg(t), yg(t, o) || t instanceof Qe) throw t;
			if (t instanceof Ee && hg(t)) {
				let a = ql(t.meta);
				xo({
					args: i,
					errors: [a],
					callsite: n,
					errorFormat: this.client._errorFormat,
					originalMethod: r,
				});
			}
			let s = t.message;
			throw n &&
				(s = at({
					callsite: n,
					originalMethod: r,
					isPanic: t.isPanic,
					showColors: this.client._errorFormat === 'pretty',
					message: s,
				})),
				s = this.sanitizeMessage(s),
				t.code
					? new Ee(s, {
						code: t.code,
						clientVersion: this.client._clientVersion,
						meta: t.meta,
						batchRequestIdx: t.batchRequestIdx,
					})
					: t.isPanic
					? new mt(s, this.client._clientVersion)
					: t instanceof Je
					? new Je(s, {
						clientVersion: this.client._clientVersion,
						batchRequestIdx: t.batchRequestIdx,
					})
					: t instanceof ke
					? new ke(s, this.client._clientVersion)
					: t instanceof mt
					? new mt(s, this.client._clientVersion)
					: (t.clientVersion = this.client._clientVersion, t);
		}
		sanitizeMessage(t) {
			return this.client._errorFormat &&
					this.client._errorFormat !== 'pretty'
				? (0, Bl.default)(t)
				: t;
		}
		unpack(t, r, n, o) {
			if (!r) return r;
			r.data && (r = r.data);
			let i = t.deserializeResponse(r, n);
			return o ? o(i) : i;
		}
		applyResultExtensions(
			{ result: t, modelName: r, args: n, extensions: o },
		) {
			return o.isEmpty() || t == null ||
					!this.client._runtimeDataModel.models[r]
				? t
				: To({
					result: t,
					args: n != null ? n : {},
					modelName: r,
					runtimeDataModel: this.client._runtimeDataModel,
					visitor(s, a, u) {
						let l = We(a);
						return jl({
							result: s,
							modelName: l,
							select: u.select,
							extensions: o,
						});
					},
				});
		}
		get [Symbol.toStringTag]() {
			return 'RequestHandler';
		}
	};
function gg(e) {
	if (!!e) {
		if (e.kind === 'batch') {
			return {
				kind: 'batch',
				options: { isolationLevel: e.isolationLevel },
			};
		}
		if (e.kind === 'itx') return { kind: 'itx', options: Ul(e) };
		ft(e, 'Unknown transaction kind');
	}
}
function Ul(e) {
	return { id: e.id, payload: e.payload };
}
function yg(e, t) {
	return vo(e) && (t == null ? void 0 : t.kind) === 'batch' &&
		e.batchRequestIdx !== t.index;
}
function hg(e) {
	return e.code === 'P2009' || e.code === 'P2012';
}
function ql(e) {
	if (e.kind === 'Union') return { kind: 'Union', errors: e.errors.map(ql) };
	if (Array.isArray(e.selectionPath)) {
		let [, ...t] = e.selectionPath;
		return { ...e, selectionPath: t };
	}
	return e;
}
d();
f();
m();
function Vl(e) {
	return e.map((t) => {
		let r = {};
		for (let n of Object.keys(t)) r[n] = Gl(t[n]);
		return r;
	});
}
function Gl({ prisma__type: e, prisma__value: t }) {
	switch (e) {
		case 'bigint':
			return BigInt(t);
		case 'bytes':
			return x.Buffer.from(t, 'base64');
		case 'decimal':
			return new Le(t);
		case 'datetime':
		case 'date':
			return new Date(t);
		case 'time':
			return new Date(`1970-01-01T${t}Z`);
		case 'array':
			return t.map(Gl);
		default:
			return t;
	}
}
d();
f();
m();
var Ql = ue(Un());
var Jl = [
		'datasources',
		'errorFormat',
		'log',
		'__internal',
		'rejectOnNotFound',
	],
	Kl = ['pretty', 'colorless', 'minimal'],
	Wl = ['info', 'query', 'warn', 'error'],
	bg = {
		datasources: (e, t) => {
			if (!!e) {
				if (typeof e != 'object' || Array.isArray(e)) {
					throw new fe(
						`Invalid value ${
							JSON.stringify(e)
						} for "datasources" provided to PrismaClient constructor`,
					);
				}
				for (let [r, n] of Object.entries(e)) {
					if (!t.includes(r)) {
						let o = br(r, t) ||
							`Available datasources: ${t.join(', ')}`;
						throw new fe(
							`Unknown datasource ${r} provided to PrismaClient constructor.${o}`,
						);
					}
					if (typeof n != 'object' || Array.isArray(n)) {
						throw new fe(
							`Invalid value ${
								JSON.stringify(e)
							} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
						);
					}
					if (n && typeof n == 'object') {
						for (let [o, i] of Object.entries(n)) {
							if (o !== 'url') {
								throw new fe(
									`Invalid value ${
										JSON.stringify(e)
									} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
								);
							}
							if (typeof i != 'string') {
								throw new fe(
									`Invalid value ${
										JSON.stringify(i)
									} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
								);
							}
						}
					}
				}
			}
		},
		errorFormat: (e) => {
			if (!!e) {
				if (typeof e != 'string') {
					throw new fe(
						`Invalid value ${
							JSON.stringify(e)
						} for "errorFormat" provided to PrismaClient constructor.`,
					);
				}
				if (!Kl.includes(e)) {
					let t = br(e, Kl);
					throw new fe(
						`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
					);
				}
			}
		},
		log: (e) => {
			if (!e) return;
			if (!Array.isArray(e)) {
				throw new fe(
					`Invalid value ${
						JSON.stringify(e)
					} for "log" provided to PrismaClient constructor.`,
				);
			}
			function t(r) {
				if (typeof r == 'string' && !Wl.includes(r)) {
					let n = br(r, Wl);
					throw new fe(
						`Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
					);
				}
			}
			for (let r of e) {
				t(r);
				let n = {
					level: t,
					emit: (o) => {
						let i = ['stdout', 'event'];
						if (!i.includes(o)) {
							let s = br(o, i);
							throw new fe(
								`Invalid value ${
									JSON.stringify(o)
								} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
							);
						}
					},
				};
				if (r && typeof r == 'object') {
					for (let [o, i] of Object.entries(r)) {
						if (n[o]) {
							n[o](i);
						} else {throw new fe(
								`Invalid property ${o} for "log" provided to PrismaClient constructor`,
							);}
					}
				}
			}
		},
		__internal: (e) => {
			if (!e) return;
			let t = ['debug', 'hooks', 'engine', 'measurePerformance'];
			if (typeof e != 'object') {
				throw new fe(
					`Invalid value ${
						JSON.stringify(e)
					} for "__internal" to PrismaClient constructor`,
				);
			}
			for (let [r] of Object.entries(e)) {
				if (!t.includes(r)) {
					let n = br(r, t);
					throw new fe(
						`Invalid property ${
							JSON.stringify(r)
						} for "__internal" provided to PrismaClient constructor.${n}`,
					);
				}
			}
		},
		rejectOnNotFound: (e) => {
			if (!!e) {
				if (
					vr(e) || typeof e == 'boolean' || typeof e == 'object' ||
					typeof e == 'function'
				) return e;
				throw new fe(
					`Invalid rejectOnNotFound expected a boolean/Error/{[modelName: Error | boolean]} but received ${
						JSON.stringify(e)
					}`,
				);
			}
		},
	};
function Hl(e, t) {
	for (let [r, n] of Object.entries(e)) {
		if (!Jl.includes(r)) {
			let o = br(r, Jl);
			throw new fe(
				`Unknown property ${r} provided to PrismaClient constructor.${o}`,
			);
		}
		bg[r](n, t);
	}
}
function br(e, t) {
	if (t.length === 0 || typeof e != 'string') return '';
	let r = wg(e, t);
	return r ? ` Did you mean "${r}"?` : '';
}
function wg(e, t) {
	if (t.length === 0) return null;
	let r = t.map((o) => ({ value: o, distance: (0, Ql.default)(e, o) }));
	r.sort((o, i) => o.distance < i.distance ? -1 : 1);
	let n = r[0];
	return n.distance < 3 ? n.value : null;
}
d();
f();
m();
function zl(e) {
	return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
		let n = new Array(e.length),
			o = null,
			i = !1,
			s = 0,
			a = () => {
				i || (s++, s === e.length && (i = !0, o ? r(o) : t(n)));
			},
			u = (l) => {
				i || (i = !0, r(l));
			};
		for (let l = 0; l < e.length; l++) {
			e[l].then((c) => {
				n[l] = c, a();
			}, (c) => {
				if (!vo(c)) {
					u(c);
					return;
				}
				c.batchRequestIdx === l ? u(c) : (o || (o = c), a());
			});
		}
	});
}
var tt = Ie('prisma:client');
typeof globalThis == 'object' && (globalThis.NODE_CLIENT = !0);
var Eg = Symbol.for('prisma.client.transaction.id'),
	xg = {
		id: 0,
		nextId() {
			return ++this.id;
		},
	};
function Xl(e) {
	class t {
		constructor(n) {
			this._middlewares = new Po();
			this._getDmmf = In(async (n) => {
				try {
					let o = await this._tracingHelper.runInChildSpan({
						name: 'getDmmf',
						internal: !0,
					}, () => this._engine.getDmmf());
					return this._tracingHelper.runInChildSpan({
						name: 'processDmmf',
						internal: !0,
					}, () => new Mt(uu(o)));
				} catch (o) {
					this._fetcher.handleAndLogRequestError({
						...n,
						args: {},
						error: o,
					});
				}
			});
			this._getProtocolEncoder = In(async (n) =>
				this._engineConfig.engineProtocol === 'json'
					? new nn(this._runtimeDataModel, this._errorFormat)
					: (this._dmmf === void 0 &&
						(this._dmmf = await this._getDmmf(n)),
						new po(this._dmmf, this._errorFormat))
			);
			this.$extends = ol;
			var a, u, l, c, p, g, h, b, y, P;
			ll(e), n && Hl(n, e.datasourceNames);
			let o = new Zl.EventEmitter().on('error', () => {});
			this._extensions = Ct.empty(),
				this._previewFeatures = (u = (a = e.generator) == null
						? void 0
						: a.previewFeatures) != null
					? u
					: [],
				this._rejectOnNotFound = n == null
					? void 0
					: n.rejectOnNotFound,
				this._clientVersion = (l = e.clientVersion) != null ? l : uo,
				this._activeProvider = e.activeProvider,
				this._dataProxy = e.dataProxy,
				this._tracingHelper = Dl(this._previewFeatures),
				this._clientEngineType = ei(e.generator);
			let i = {
					rootEnvPath: e.relativeEnvPaths.rootEnvPath &&
						on.default.resolve(
							e.dirname,
							e.relativeEnvPaths.rootEnvPath,
						),
					schemaEnvPath: e.relativeEnvPaths.schemaEnvPath &&
						on.default.resolve(
							e.dirname,
							e.relativeEnvPaths.schemaEnvPath,
						),
				},
				s = !1;
			try {
				let S = n != null ? n : {},
					v = (c = S.__internal) != null ? c : {},
					T = v.debug === !0;
				T && Ie.enable('prisma:client');
				let A = on.default.resolve(e.dirname, e.relativePath);
				pn.existsSync(A) || (A = e.dirname),
					tt('dirname', e.dirname),
					tt('relativePath', e.relativePath),
					tt('cwd', A);
				let F = S.datasources || {},
					C = Object.entries(F).filter(([H, U]) => U && U.url).map((
						[H, { url: U }],
					) => ({ name: H, url: U })),
					I = $l([], C, (H) => H.name),
					G = v.engine || {};
				S.errorFormat
					? this._errorFormat = S.errorFormat
					: w.env.NODE_ENV === 'production'
					? this._errorFormat = 'minimal'
					: w.env.NO_COLOR
					? this._errorFormat = 'colorless'
					: this._errorFormat = 'colorless',
					e.runtimeDataModel
						? this._runtimeDataModel = e.runtimeDataModel
						: this._runtimeDataModel = ka(e.document.datamodel);
				let z = (p = e.edgeClientProtocol) != null
					? p
					: ni(e.generator);
				if (
					tt('protocol', z),
						e.document && (this._dmmf = new Mt(e.document)),
						this._engineConfig = {
							cwd: A,
							dirname: e.dirname,
							enableDebugLogs: T,
							allowTriggerPanic: G.allowTriggerPanic,
							datamodelPath: on.default.join(
								e.dirname,
								(g = e.filename) != null ? g : 'schema.prisma',
							),
							prismaPath: (h = G.binaryPath) != null ? h : void 0,
							engineEndpoint: G.endpoint,
							datasources: I,
							generator: e.generator,
							showColors: this._errorFormat === 'pretty',
							logLevel: S.log && Nl(S.log),
							logQueries: S.log &&
								Boolean(
									typeof S.log == 'string'
										? S.log === 'query'
										: S.log.find((H) =>
											typeof H == 'string'
												? H === 'query'
												: H.level === 'query'
										),
								),
							env: (P =
									(y = s == null ? void 0 : s.parsed) != null
										? y
										: (b = e.injectableEdgeEnv) == null
										? void 0
										: b.parsed) != null
								? P
								: {},
							flags: [],
							clientVersion: e.clientVersion,
							previewFeatures: this._previewFeatures,
							activeProvider: e.activeProvider,
							inlineSchema: e.inlineSchema,
							inlineDatasources: e.inlineDatasources,
							inlineSchemaHash: e.inlineSchemaHash,
							tracingHelper: this._tracingHelper,
							logEmitter: o,
							engineProtocol: z,
							isBundled: e.isBundled,
						},
						tt('clientVersion', e.clientVersion),
						tt(
							'clientEngineType',
							this._dataProxy
								? 'dataproxy'
								: this._clientEngineType,
						),
						this._dataProxy &&
						tt('using Data Proxy with edge runtime'),
						this._engine = this.getEngine(),
						this._fetcher = new Mo(this, o),
						S.log
				) {
					for (let H of S.log) {
						let U = typeof H == 'string'
							? H
							: H.emit === 'stdout'
							? H.level
							: null;
						U && this.$on(U, (J) => {
							var _;
							Xt.log(
								`${(_ = Xt.tags[U]) != null ? _ : ''}`,
								J.message || J.query,
							);
						});
					}
				}
				this._metrics = new tr(this._engine);
			} catch (S) {
				throw S.clientVersion = this._clientVersion, S;
			}
			return lo(this);
		}
		get [Symbol.toStringTag]() {
			return 'PrismaClient';
		}
		getEngine() {
			if (this._dataProxy === !0) return new Hr(this._engineConfig);
			throw this._clientEngineType,
				'library',
				this._clientEngineType,
				'binary',
				new ce(
					'Invalid client engine type, please use `library` or `binary`',
				);
		}
		$use(n) {
			this._middlewares.use(n);
		}
		$on(n, o) {
			n === 'beforeExit'
				? this._engine.on('beforeExit', o)
				: this._engine.on(n, (i) => {
					var a, u, l, c;
					let s = i.fields;
					return o(
						n === 'query'
							? {
								timestamp: i.timestamp,
								query:
									(a = s == null ? void 0 : s.query) != null
										? a
										: i.query,
								params:
									(u = s == null ? void 0 : s.params) != null
										? u
										: i.params,
								duration:
									(l = s == null ? void 0 : s.duration_ms) !=
											null
										? l
										: i.duration,
								target: i.target,
							}
							: {
								timestamp: i.timestamp,
								message:
									(c = s == null ? void 0 : s.message) != null
										? c
										: i.message,
								target: i.target,
							},
					);
				});
		}
		$connect() {
			try {
				return this._engine.start();
			} catch (n) {
				throw n.clientVersion = this._clientVersion, n;
			}
		}
		async _runDisconnect() {
			await this._engine.stop(),
				delete this._connectionPromise,
				this._engine = this.getEngine(),
				delete this._disconnectionPromise;
		}
		async $disconnect() {
			try {
				await this._engine.stop();
			} catch (n) {
				throw n.clientVersion = this._clientVersion, n;
			} finally {
				ba(), this._dataProxy || (this._dmmf = void 0);
			}
		}
		$executeRawInternal(n, o, i) {
			return this._request({
				action: 'executeRaw',
				args: i,
				transaction: n,
				clientMethod: o,
				argsMapper: ss(this, o),
				callsite: Rt(this._errorFormat),
				dataPath: [],
			});
		}
		$executeRaw(n, ...o) {
			return ut((i) => {
				if (n.raw !== void 0 || n.sql !== void 0) {
					return this.$executeRawInternal(i, '$executeRaw', [
						n,
						...o,
					]);
				}
				throw new ce(
					'`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${\'user@email.com\'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n',
				);
			});
		}
		$executeRawUnsafe(n, ...o) {
			return ut((i) =>
				this.$executeRawInternal(i, '$executeRawUnsafe', [n, ...o])
			);
		}
		$runCommandRaw(n) {
			if (e.activeProvider !== 'mongodb') {
				throw new ce(
					`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
				);
			}
			return ut((o) =>
				this._request({
					args: { command: n },
					clientMethod: '$runCommandRaw',
					dataPath: [],
					action: 'runCommandRaw',
					callsite: Rt(this._errorFormat),
					transaction: o,
				})
			);
		}
		async $queryRawInternal(n, o, i) {
			return this._request({
				action: 'queryRaw',
				args: i,
				transaction: n,
				clientMethod: o,
				argsMapper: ss(this, o),
				callsite: Rt(this._errorFormat),
				dataPath: [],
			}).then(Vl);
		}
		$queryRaw(n, ...o) {
			return ut((i) => {
				if (n.raw !== void 0 || n.sql !== void 0) {
					return this.$queryRawInternal(i, '$queryRaw', [n, ...o]);
				}
				throw new ce(
					'`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${\'user@email.com\'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n',
				);
			});
		}
		$queryRawUnsafe(n, ...o) {
			return ut((i) =>
				this.$queryRawInternal(i, '$queryRawUnsafe', [n, ...o])
			);
		}
		_transactionWithArray({ promises: n, options: o }) {
			let i = xg.nextId(),
				s = kl(n.length),
				a = n.map((u, l) => {
					var g, h;
					if (
						(u == null ? void 0 : u[Symbol.toStringTag]) !==
							'PrismaPromise'
					) {
						throw new Error(
							'All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.',
						);
					}
					let c = o == null ? void 0 : o.isolationLevel,
						p = {
							kind: 'batch',
							id: i,
							index: l,
							isolationLevel: c,
							lock: s,
						};
					return (h = (g = u.requestTransaction) == null
							? void 0
							: g.call(u, p)) != null
						? h
						: u;
				});
			return zl(a);
		}
		async _transactionWithCallback({ callback: n, options: o }) {
			let i = { traceparent: this._tracingHelper.getTraceParent() },
				s = await this._engine.transaction('start', i, o),
				a;
			try {
				let u = { kind: 'itx', ...s };
				a = await n(us(this, u)),
					await this._engine.transaction('commit', i, s);
			} catch (u) {
				throw await this._engine.transaction('rollback', i, s).catch(
					() => {},
				),
					u;
			}
			return a;
		}
		$transaction(n, o) {
			let i;
			typeof n == 'function'
				? i = () =>
					this._transactionWithCallback({ callback: n, options: o })
				: i = () =>
					this._transactionWithArray({ promises: n, options: o });
			let s = {
				name: 'transaction',
				attributes: { method: '$transaction' },
			};
			return this._tracingHelper.runInChildSpan(s, i);
		}
		_request(n) {
			n.otelParentCtx = this._tracingHelper.getActiveContext();
			let o = {
					args: n.args,
					dataPath: n.dataPath,
					runInTransaction: Boolean(n.transaction),
					action: n.action,
					model: n.model,
				},
				i = {
					middleware: {
						name: 'middleware',
						middleware: !0,
						attributes: { method: '$use' },
						active: !1,
					},
					operation: {
						name: 'operation',
						attributes: {
							method: o.action,
							model: o.model,
							name: `${o.model}.${o.action}`,
						},
					},
				},
				s = -1,
				a = (u) => {
					let l = this._middlewares.get(++s);
					if (l) {
						return this._tracingHelper.runInChildSpan(
							i.middleware,
							(h) => l(u, (b) => (h == null || h.end(), a(b))),
						);
					}
					let { runInTransaction: c, ...p } = u, g = { ...n, ...p };
					return c || (g.transaction = void 0), sl(this, g);
				};
			return this._tracingHelper.runInChildSpan(i.operation, () => a(o));
		}
		async _executeRequest(
			{
				args: n,
				clientMethod: o,
				dataPath: i,
				callsite: s,
				action: a,
				model: u,
				argsMapper: l,
				transaction: c,
				unpacker: p,
				otelParentCtx: g,
				customDataProxyFetch: h,
			},
		) {
			try {
				let b = await this._getProtocolEncoder({
					clientMethod: o,
					callsite: s,
				});
				n = l ? l(n) : n;
				let y = { name: 'serialize' }, P;
				u && (P = Qi(a, u, n, this._rejectOnNotFound), Pg(P, u, a));
				let S = this._tracingHelper.runInChildSpan(
					y,
					() =>
						b.createMessage({
							modelName: u,
							action: a,
							args: n,
							clientMethod: o,
							callsite: s,
							extensions: this._extensions,
						}),
				);
				return Ie.enabled('prisma:client') &&
					(tt('Prisma Client call:'),
						tt(`prisma.${o}(${
							eo({
								ast: n,
								keyPaths: [],
								valuePaths: [],
								missingItems: [],
							})
						})`),
						tt('Generated request:'),
						tt(
							S.toDebugString() + `
`,
						)),
					(c == null ? void 0 : c.kind) === 'batch' && await c.lock,
					this._fetcher.request({
						protocolMessage: S,
						protocolEncoder: b,
						modelName: u,
						clientMethod: o,
						dataPath: i,
						rejectOnNotFound: P,
						callsite: s,
						args: n,
						extensions: this._extensions,
						transaction: c,
						unpacker: p,
						otelParentCtx: g,
						otelChildCtx: this._tracingHelper.getActiveContext(),
						customDataProxyFetch: h,
					});
			} catch (b) {
				throw b.clientVersion = this._clientVersion, b;
			}
		}
		get $metrics() {
			if (!this._hasPreviewFlag('metrics')) {
				throw new ce(
					'`metrics` preview feature must be enabled in order to access metrics API',
				);
			}
			return this._metrics;
		}
		_hasPreviewFlag(n) {
			var o;
			return !!((o = this._engineConfig.previewFeatures) != null &&
				o.includes(n));
		}
	}
	return t;
}
var Yl = ['$connect', '$disconnect', '$on', '$transaction', '$use', '$extends'];
function us(e, t) {
	return typeof e != 'object' ? e : new Proxy(e, {
		get: (r, n) => {
			if (!Yl.includes(n)) {
				return n === Eg
					? t == null ? void 0 : t.id
					: typeof r[n] == 'function'
					? (...o) =>
						n === 'then'
							? r[n](o[0], o[1], t)
							: n === 'catch' || n === 'finally'
							? r[n](o[0], t)
							: us(r[n](...o), t)
					: us(r[n], t);
			}
		},
		has(r, n) {
			return Yl.includes(n) ? !1 : Reflect.has(r, n);
		},
	});
}
var Ag = { findUnique: 'findUniqueOrThrow', findFirst: 'findFirstOrThrow' };
function Pg(e, t, r) {
	if (e) {
		let n = Ag[r],
			o = t ? `prisma.${We(t)}.${n}` : `prisma.${n}`,
			i = `rejectOnNotFound.${t != null ? t : ''}.${r}`;
		Mr(
			i,
			`\`rejectOnNotFound\` option is deprecated and will be removed in Prisma 5. Please use \`${o}\` method instead`,
		);
	}
}
d();
f();
m();
var vg = new Set([
	'toJSON',
	'$$typeof',
	'asymmetricMatch',
	Symbol.iterator,
	Symbol.toStringTag,
	Symbol.isConcatSpreadable,
	Symbol.toPrimitive,
]);
function ec(e) {
	return new Proxy(e, {
		get(t, r) {
			if (r in t) return t[r];
			if (!vg.has(r)) {
				throw new TypeError(`Invalid enum value: ${String(r)}`);
			}
		},
	});
}
d();
f();
m();
var nc = ue(rc()), oc = (e) => nc.decompressFromBase64(e);
d();
f();
m();
0 && (module.exports = {
	DMMF,
	DMMFClass,
	Debug,
	Decimal,
	Extensions,
	MetricsClient,
	NotFoundError,
	PrismaClientInitializationError,
	PrismaClientKnownRequestError,
	PrismaClientRustPanicError,
	PrismaClientUnknownRequestError,
	PrismaClientValidationError,
	Sql,
	Types,
	decompressFromBase64,
	defineDmmfProperty,
	empty,
	getPrismaClient,
	join,
	makeDocument,
	makeStrictEnum,
	objectEnumValues,
	raw,
	sqltag,
	transformDocument,
	unpack,
	warnEnvConflicts,
	warnOnce,
});
//# sourceMappingURL=edge.js.map
