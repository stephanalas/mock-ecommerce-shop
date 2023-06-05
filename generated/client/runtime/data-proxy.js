'use strict';
var ru = Object.create;
var gr = Object.defineProperty;
var nu = Object.getOwnPropertyDescriptor;
var iu = Object.getOwnPropertyNames;
var ou = Object.getPrototypeOf, su = Object.prototype.hasOwnProperty;
var U = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
	yr = (e, t) => {
		for (var r in t) gr(e, r, { get: t[r], enumerable: !0 });
	},
	Ki = (e, t, r, n) => {
		if (t && typeof t == 'object' || typeof t == 'function') {
			for (let i of iu(t)) {
				!su.call(e, i) && i !== r && gr(e, i, {
					get: () => t[i],
					enumerable: !(n = nu(t, i)) || n.enumerable,
				});
			}
		}
		return e;
	};
var K = (
		e,
		t,
		r,
	) => (r = e != null ? ru(ou(e)) : {},
		Ki(
			t || !e || !e.__esModule
				? gr(r, 'default', { value: e, enumerable: !0 })
				: r,
			e,
		)),
	au = (e) => Ki(gr({}, '__esModule', { value: !0 }), e);
var to = U((Bf, eo) => {
	var ut = 1e3,
		lt = ut * 60,
		ct = lt * 60,
		Xe = ct * 24,
		lu = Xe * 7,
		cu = Xe * 365.25;
	eo.exports = function (e, t) {
		t = t || {};
		var r = typeof e;
		if (r === 'string' && e.length > 0) return pu(e);
		if (r === 'number' && isFinite(e)) return t.long ? du(e) : fu(e);
		throw new Error(
			'val is not a non-empty string or a valid number. val=' +
				JSON.stringify(e),
		);
	};
	function pu(e) {
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
						return r * cu;
					case 'weeks':
					case 'week':
					case 'w':
						return r * lu;
					case 'days':
					case 'day':
					case 'd':
						return r * Xe;
					case 'hours':
					case 'hour':
					case 'hrs':
					case 'hr':
					case 'h':
						return r * ct;
					case 'minutes':
					case 'minute':
					case 'mins':
					case 'min':
					case 'm':
						return r * lt;
					case 'seconds':
					case 'second':
					case 'secs':
					case 'sec':
					case 's':
						return r * ut;
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
	function fu(e) {
		var t = Math.abs(e);
		return t >= Xe
			? Math.round(e / Xe) + 'd'
			: t >= ct
			? Math.round(e / ct) + 'h'
			: t >= lt
			? Math.round(e / lt) + 'm'
			: t >= ut
			? Math.round(e / ut) + 's'
			: e + 'ms';
	}
	function du(e) {
		var t = Math.abs(e);
		return t >= Xe
			? Er(e, t, Xe, 'day')
			: t >= ct
			? Er(e, t, ct, 'hour')
			: t >= lt
			? Er(e, t, lt, 'minute')
			: t >= ut
			? Er(e, t, ut, 'second')
			: e + ' ms';
	}
	function Er(e, t, r, n) {
		var i = t >= r * 1.5;
		return Math.round(e / r) + ' ' + n + (i ? 's' : '');
	}
});
var Rn = U((Vf, ro) => {
	function mu(e) {
		r.debug = r,
			r.default = r,
			r.coerce = u,
			r.disable = o,
			r.enable = i,
			r.enabled = s,
			r.humanize = to(),
			r.destroy = l,
			Object.keys(e).forEach((c) => {
				r[c] = e[c];
			}),
			r.names = [],
			r.skips = [],
			r.formatters = {};
		function t(c) {
			let p = 0;
			for (let f = 0; f < c.length; f++) {
				p = (p << 5) - p + c.charCodeAt(f), p |= 0;
			}
			return r.colors[Math.abs(p) % r.colors.length];
		}
		r.selectColor = t;
		function r(c) {
			let p, f = null, d, g;
			function m(...b) {
				if (!m.enabled) return;
				let h = m, x = Number(new Date()), E = x - (p || x);
				h.diff = E,
					h.prev = p,
					h.curr = x,
					p = x,
					b[0] = r.coerce(b[0]),
					typeof b[0] != 'string' && b.unshift('%O');
				let y = 0;
				b[0] = b[0].replace(/%([a-zA-Z%])/g, (M, P) => {
					if (M === '%%') return '%';
					y++;
					let k = r.formatters[P];
					if (typeof k == 'function') {
						let B = b[y];
						M = k.call(h, B), b.splice(y, 1), y--;
					}
					return M;
				}),
					r.formatArgs.call(h, b),
					(h.log || r.log).apply(h, b);
			}
			return m.namespace = c,
				m.useColors = r.useColors(),
				m.color = r.selectColor(c),
				m.extend = n,
				m.destroy = r.destroy,
				Object.defineProperty(m, 'enabled', {
					enumerable: !0,
					configurable: !1,
					get: () =>
						f !== null ? f : (d !== r.namespaces &&
							(d = r.namespaces, g = r.enabled(c)),
							g),
					set: (b) => {
						f = b;
					},
				}),
				typeof r.init == 'function' && r.init(m),
				m;
		}
		function n(c, p) {
			let f = r(this.namespace + (typeof p > 'u' ? ':' : p) + c);
			return f.log = this.log, f;
		}
		function i(c) {
			r.save(c), r.namespaces = c, r.names = [], r.skips = [];
			let p,
				f = (typeof c == 'string' ? c : '').split(/[\s,]+/),
				d = f.length;
			for (p = 0; p < d; p++) {
				!f[p] ||
					(c = f[p].replace(/\*/g, '.*?'),
						c[0] === '-'
							? r.skips.push(new RegExp('^' + c.slice(1) + '$'))
							: r.names.push(new RegExp('^' + c + '$')));
			}
		}
		function o() {
			let c = [...r.names.map(a), ...r.skips.map(a).map((p) => '-' + p)]
				.join(',');
			return r.enable(''), c;
		}
		function s(c) {
			if (c[c.length - 1] === '*') return !0;
			let p, f;
			for (p = 0, f = r.skips.length; p < f; p++) {
				if (r.skips[p].test(c)) return !1;
			}
			for (p = 0, f = r.names.length; p < f; p++) {
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
	ro.exports = mu;
});
var no = U((pe, br) => {
	pe.formatArgs = yu;
	pe.save = hu;
	pe.load = Eu;
	pe.useColors = gu;
	pe.storage = bu();
	pe.destroy = (() => {
		let e = !1;
		return () => {
			e ||
				(e = !0,
					console.warn(
						'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
					));
		};
	})();
	pe.colors = [
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
	function gu() {
		return typeof window < 'u' && window.process &&
				(window.process.type === 'renderer' || window.process.__nwjs)
			? !0
			: typeof navigator < 'u' && navigator.userAgent &&
					navigator.userAgent.toLowerCase().match(
						/(edge|trident)\/(\d+)/,
					)
			? !1
			: typeof document < 'u' && document.documentElement &&
					document.documentElement.style &&
					document.documentElement.style.WebkitAppearance ||
				typeof window < 'u' && window.console &&
					(window.console.firebug ||
						window.console.exception && window.console.table) ||
				typeof navigator < 'u' && navigator.userAgent &&
					navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
					parseInt(RegExp.$1, 10) >= 31 ||
				typeof navigator < 'u' && navigator.userAgent &&
					navigator.userAgent.toLowerCase().match(
						/applewebkit\/(\d+)/,
					);
	}
	function yu(e) {
		if (
			e[0] = (this.useColors ? '%c' : '') + this.namespace +
				(this.useColors ? ' %c' : ' ') + e[0] +
				(this.useColors ? '%c ' : ' ') + '+' +
				br.exports.humanize(this.diff), !this.useColors
		) return;
		let t = 'color: ' + this.color;
		e.splice(1, 0, t, 'color: inherit');
		let r = 0, n = 0;
		e[0].replace(/%[a-zA-Z%]/g, (i) => {
			i !== '%%' && (r++, i === '%c' && (n = r));
		}), e.splice(n, 0, t);
	}
	pe.log = console.debug || console.log || (() => {});
	function hu(e) {
		try {
			e ? pe.storage.setItem('debug', e) : pe.storage.removeItem('debug');
		} catch {}
	}
	function Eu() {
		let e;
		try {
			e = pe.storage.getItem('debug');
		} catch {}
		return !e && typeof process < 'u' && 'env' in process &&
			(e = process.env.DEBUG),
			e;
	}
	function bu() {
		try {
			return localStorage;
		} catch {}
	}
	br.exports = Rn()(pe);
	var { formatters: xu } = br.exports;
	xu.j = function (e) {
		try {
			return JSON.stringify(e);
		} catch (t) {
			return '[UnexpectedJSONParseError]: ' + t.message;
		}
	};
});
var oo = U((Uf, io) => {
	'use strict';
	io.exports = (e, t = process.argv) => {
		let r = e.startsWith('-') ? '' : e.length === 1 ? '-' : '--',
			n = t.indexOf(r + e),
			i = t.indexOf('--');
		return n !== -1 && (i === -1 || n < i);
	};
});
var uo = U((Kf, ao) => {
	'use strict';
	var wu = require('os'),
		so = require('tty'),
		ge = oo(),
		{ env: W } = process,
		Be;
	ge('no-color') || ge('no-colors') || ge('color=false') || ge('color=never')
		? Be = 0
		: (ge('color') || ge('colors') || ge('color=true') ||
			ge('color=always')) && (Be = 1);
	'FORCE_COLOR' in W &&
		(W.FORCE_COLOR === 'true'
			? Be = 1
			: W.FORCE_COLOR === 'false'
			? Be = 0
			: Be = W.FORCE_COLOR.length === 0
				? 1
				: Math.min(parseInt(W.FORCE_COLOR, 10), 3));
	function Sn(e) {
		return e === 0
			? !1
			: { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
	}
	function Dn(e, t) {
		if (Be === 0) return 0;
		if (ge('color=16m') || ge('color=full') || ge('color=truecolor')) {
			return 3;
		}
		if (ge('color=256')) return 2;
		if (e && !t && Be === void 0) return 0;
		let r = Be || 0;
		if (W.TERM === 'dumb') return r;
		if (process.platform === 'win32') {
			let n = wu.release().split('.');
			return Number(n[0]) >= 10 && Number(n[2]) >= 10586
				? Number(n[2]) >= 14931 ? 3 : 2
				: 1;
		}
		if ('CI' in W) {
			return [
					'TRAVIS',
					'CIRCLECI',
					'APPVEYOR',
					'GITLAB_CI',
					'GITHUB_ACTIONS',
					'BUILDKITE',
				].some((n) => n in W) || W.CI_NAME === 'codeship'
				? 1
				: r;
		}
		if ('TEAMCITY_VERSION' in W) {
			return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(W.TEAMCITY_VERSION)
				? 1
				: 0;
		}
		if (W.COLORTERM === 'truecolor') return 3;
		if ('TERM_PROGRAM' in W) {
			let n = parseInt((W.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
			switch (W.TERM_PROGRAM) {
				case 'iTerm.app':
					return n >= 3 ? 3 : 2;
				case 'Apple_Terminal':
					return 2;
			}
		}
		return /-256(color)?$/i.test(W.TERM)
			? 2
			: /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i
					.test(W.TERM) || 'COLORTERM' in W
			? 1
			: r;
	}
	function Tu(e) {
		let t = Dn(e, e && e.isTTY);
		return Sn(t);
	}
	ao.exports = {
		supportsColor: Tu,
		stdout: Sn(Dn(!0, so.isatty(1))),
		stderr: Sn(Dn(!0, so.isatty(2))),
	};
});
var co = U((H, wr) => {
	var Pu = require('tty'), xr = require('util');
	H.init = Su;
	H.log = Fu;
	H.formatArgs = Mu;
	H.save = Cu;
	H.load = Ru;
	H.useColors = vu;
	H.destroy = xr.deprecate(
		() => {},
		'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
	);
	H.colors = [6, 2, 3, 4, 5, 1];
	try {
		let e = uo();
		e && (e.stderr || e).level >= 2 &&
			(H.colors = [
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
	} catch {}
	H.inspectOpts = Object.keys(process.env).filter((e) => /^debug_/i.test(e))
		.reduce((e, t) => {
			let r = t.substring(6).toLowerCase().replace(
					/_([a-z])/g,
					(i, o) => o.toUpperCase(),
				),
				n = process.env[t];
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
	function vu() {
		return 'colors' in H.inspectOpts
			? Boolean(H.inspectOpts.colors)
			: Pu.isatty(process.stderr.fd);
	}
	function Mu(e) {
		let { namespace: t, useColors: r } = this;
		if (r) {
			let n = this.color,
				i = '\x1B[3' + (n < 8 ? n : '8;5;' + n),
				o = `  ${i};1m${t} \x1B[0m`;
			e[0] = o + e[0].split(`
`).join(
				`
` + o,
			), e.push(i + 'm+' + wr.exports.humanize(this.diff) + '\x1B[0m');
		} else e[0] = Au() + t + ' ' + e[0];
	}
	function Au() {
		return H.inspectOpts.hideDate ? '' : new Date().toISOString() + ' ';
	}
	function Fu(...e) {
		return process.stderr.write(
			xr.format(...e) + `
`,
		);
	}
	function Cu(e) {
		e ? process.env.DEBUG = e : delete process.env.DEBUG;
	}
	function Ru() {
		return process.env.DEBUG;
	}
	function Su(e) {
		e.inspectOpts = {};
		let t = Object.keys(H.inspectOpts);
		for (let r = 0; r < t.length; r++) {
			e.inspectOpts[t[r]] = H.inspectOpts[t[r]];
		}
	}
	wr.exports = Rn()(H);
	var { formatters: lo } = wr.exports;
	lo.o = function (e) {
		return this.inspectOpts.colors = this.useColors,
			xr.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(' ');
	};
	lo.O = function (e) {
		return this.inspectOpts.colors = this.useColors,
			xr.inspect(e, this.inspectOpts);
	};
});
var po = U((Jf, On) => {
	typeof process > 'u' || process.type === 'renderer' ||
		process.browser === !0 || process.__nwjs
		? On.exports = no()
		: On.exports = co();
});
var mo = U((Gf, Iu) => {
	Iu.exports = {
		name: 'dotenv',
		version: '16.0.3',
		description: 'Loads environment variables from .env file',
		main: 'lib/main.js',
		types: 'lib/main.d.ts',
		exports: {
			'.': {
				require: './lib/main.js',
				types: './lib/main.d.ts',
				default: './lib/main.js',
			},
			'./config': './config.js',
			'./config.js': './config.js',
			'./lib/env-options': './lib/env-options.js',
			'./lib/env-options.js': './lib/env-options.js',
			'./lib/cli-options': './lib/cli-options.js',
			'./lib/cli-options.js': './lib/cli-options.js',
			'./package.json': './package.json',
		},
		scripts: {
			'dts-check': 'tsc --project tests/types/tsconfig.json',
			lint: 'standard',
			'lint-readme': 'standard-markdown',
			pretest: 'npm run lint && npm run dts-check',
			test: 'tap tests/*.js --100 -Rspec',
			prerelease: 'npm test',
			release: 'standard-version',
		},
		repository: {
			type: 'git',
			url: 'git://github.com/motdotla/dotenv.git',
		},
		keywords: [
			'dotenv',
			'env',
			'.env',
			'environment',
			'variables',
			'config',
			'settings',
		],
		readmeFilename: 'README.md',
		license: 'BSD-2-Clause',
		devDependencies: {
			'@types/node': '^17.0.9',
			decache: '^4.6.1',
			dtslint: '^3.7.0',
			sinon: '^12.0.1',
			standard: '^16.0.4',
			'standard-markdown': '^7.1.0',
			'standard-version': '^9.3.2',
			tap: '^15.1.6',
			tar: '^6.1.11',
			typescript: '^4.5.4',
		},
		engines: { node: '>=12' },
	};
});
var yo = U((Wf, Mr) => {
	var ku = require('fs'),
		go = require('path'),
		Nu = require('os'),
		$u = mo(),
		_u = $u.version,
		Lu = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
	function ju(e) {
		let t = {}, r = e.toString();
		r = r.replace(
			/\r\n?/mg,
			`
`,
		);
		let n;
		for (; (n = Lu.exec(r)) != null;) {
			let i = n[1], o = n[2] || '';
			o = o.trim();
			let s = o[0];
			o = o.replace(/^(['"`])([\s\S]*)\1$/mg, '$2'),
				s === '"' && (o = o.replace(
					/\\n/g,
					`
`,
				),
					o = o.replace(/\\r/g, '\r')),
				t[i] = o;
		}
		return t;
	}
	function kn(e) {
		console.log(`[dotenv@${_u}][DEBUG] ${e}`);
	}
	function qu(e) {
		return e[0] === '~' ? go.join(Nu.homedir(), e.slice(1)) : e;
	}
	function Bu(e) {
		let t = go.resolve(process.cwd(), '.env'),
			r = 'utf8',
			n = Boolean(e && e.debug),
			i = Boolean(e && e.override);
		e &&
			(e.path != null && (t = qu(e.path)),
				e.encoding != null && (r = e.encoding));
		try {
			let o = vr.parse(ku.readFileSync(t, { encoding: r }));
			return Object.keys(o).forEach(function (s) {
				Object.prototype.hasOwnProperty.call(process.env, s)
					? (i === !0 && (process.env[s] = o[s]),
						n &&
						kn(
							i === !0
								? `"${s}" is already defined in \`process.env\` and WAS overwritten`
								: `"${s}" is already defined in \`process.env\` and was NOT overwritten`,
						))
					: process.env[s] = o[s];
			}),
				{ parsed: o };
		} catch (o) {
			return n && kn(`Failed to load ${t} ${o.message}`), { error: o };
		}
	}
	var vr = { config: Bu, parse: ju };
	Mr.exports.config = vr.config;
	Mr.exports.parse = vr.parse;
	Mr.exports = vr;
});
var To = U((td, wo) => {
	'use strict';
	wo.exports = (e) => {
		let t = e.match(/^[ \t]*(?=\S)/gm);
		return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
	};
});
var Ln = U((rd, Po) => {
	'use strict';
	var Ju = To();
	Po.exports = (e) => {
		let t = Ju(e);
		if (t === 0) return e;
		let r = new RegExp(`^[ \\t]{${t}}`, 'gm');
		return e.replace(r, '');
	};
});
var Fr = U((sd, vo) => {
	'use strict';
	vo.exports = (e, t = 1, r) => {
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
var Fo = U((ud, Ao) => {
	'use strict';
	Ao.exports = ({ onlyFirst: e = !1 } = {}) => {
		let t = [
			'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
			'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
		].join('|');
		return new RegExp(t, e ? void 0 : 'g');
	};
});
var Cr = U((ld, Co) => {
	'use strict';
	var Yu = Fo();
	Co.exports = (e) => typeof e == 'string' ? e.replace(Yu(), '') : e;
});
var Lr = U((tm, Go) => {
	'use strict';
	Go.exports = function () {
		function e(t, r, n, i, o) {
			return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
		}
		return function (t, r) {
			if (t === r) return 0;
			if (t.length > r.length) {
				var n = t;
				t = r, r = n;
			}
			for (
				var i = t.length, o = r.length;
				i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);
			) i--, o--;
			for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s);) s++;
			if (i -= s, o -= s, i === 0 || o < 3) return o;
			var a = 0, u, l, c, p, f, d, g, m, b, h, x, E, y = [];
			for (u = 0; u < i; u++) y.push(u + 1), y.push(t.charCodeAt(s + u));
			for (var T = y.length - 1; a < o - 3;) {
				for (
					b = r.charCodeAt(s + (l = a)),
						h = r.charCodeAt(s + (c = a + 1)),
						x = r.charCodeAt(s + (p = a + 2)),
						E = r.charCodeAt(s + (f = a + 3)),
						d = a += 4,
						u = 0;
					u < T;
					u += 2
				) {
					g = y[u],
						m = y[u + 1],
						l = e(g, l, c, b, m),
						c = e(l, c, p, h, m),
						p = e(c, p, f, x, m),
						d = e(p, f, d, E, m),
						y[u] = d,
						f = p,
						p = c,
						c = l,
						l = g;
				}
			}
			for (; a < o;) {
				for (
					b = r.charCodeAt(s + (l = a)), d = ++a, u = 0;
					u < T;
					u += 2
				) g = y[u], y[u] = d = e(g, l, d, b, y[u + 1]), l = g;
			}
			return d;
		};
	}();
});
var Zo = U((ni, ii) => {
	(function (e, t) {
		typeof require == 'function' && typeof ni == 'object' &&
			typeof ii == 'object'
			? ii.exports = t()
			: e.pluralize = t();
	})(ni, function () {
		var e = [], t = [], r = {}, n = {}, i = {};
		function o(d) {
			return typeof d == 'string' ? new RegExp('^' + d + '$', 'i') : d;
		}
		function s(d, g) {
			return d === g
				? g
				: d === d.toLowerCase()
				? g.toLowerCase()
				: d === d.toUpperCase()
				? g.toUpperCase()
				: d[0] === d[0].toUpperCase()
				? g.charAt(0).toUpperCase() + g.substr(1).toLowerCase()
				: g.toLowerCase();
		}
		function a(d, g) {
			return d.replace(/\$(\d{1,2})/g, function (m, b) {
				return g[b] || '';
			});
		}
		function u(d, g) {
			return d.replace(g[0], function (m, b) {
				var h = a(g[1], arguments);
				return s(m === '' ? d[b - 1] : m, h);
			});
		}
		function l(d, g, m) {
			if (!d.length || r.hasOwnProperty(d)) return g;
			for (var b = m.length; b--;) {
				var h = m[b];
				if (h[0].test(g)) return u(g, h);
			}
			return g;
		}
		function c(d, g, m) {
			return function (b) {
				var h = b.toLowerCase();
				return g.hasOwnProperty(h)
					? s(b, h)
					: d.hasOwnProperty(h)
					? s(b, d[h])
					: l(h, b, m);
			};
		}
		function p(d, g, m, b) {
			return function (h) {
				var x = h.toLowerCase();
				return g.hasOwnProperty(x)
					? !0
					: d.hasOwnProperty(x)
					? !1
					: l(x, x, m) === x;
			};
		}
		function f(d, g, m) {
			var b = g === 1 ? f.singular(d) : f.plural(d);
			return (m ? g + ' ' : '') + b;
		}
		return f.plural = c(i, n, e),
			f.isPlural = p(i, n, e),
			f.singular = c(n, i, t),
			f.isSingular = p(n, i, t),
			f.addPluralRule = function (d, g) {
				e.push([o(d), g]);
			},
			f.addSingularRule = function (d, g) {
				t.push([o(d), g]);
			},
			f.addUncountableRule = function (d) {
				if (typeof d == 'string') {
					r[d.toLowerCase()] = !0;
					return;
				}
				f.addPluralRule(d, '$0'), f.addSingularRule(d, '$0');
			},
			f.addIrregularRule = function (d, g) {
				g = g.toLowerCase(), d = d.toLowerCase(), i[d] = g, n[g] = d;
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
			].forEach(function (d) {
				return f.addIrregularRule(d[0], d[1]);
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
			].forEach(function (d) {
				return f.addPluralRule(d[0], d[1]);
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
			].forEach(function (d) {
				return f.addSingularRule(d[0], d[1]);
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
			].forEach(f.addUncountableRule),
			f;
	});
});
var As = U((lh, Ms) => {
	'use strict';
	Ms.exports = (e) => Object.prototype.toString.call(e) === '[object RegExp]';
});
var Cs = U((ch, Fs) => {
	'use strict';
	Fs.exports = (e) => {
		let t = typeof e;
		return e !== null && (t === 'object' || t === 'function');
	};
});
var Rs = U((gi) => {
	'use strict';
	Object.defineProperty(gi, '__esModule', { value: !0 });
	gi.default = (e) =>
		Object.getOwnPropertySymbols(e).filter((t) =>
			Object.prototype.propertyIsEnumerable.call(e, t)
		);
});
var Gs = U((PE, dp) => {
	dp.exports = {
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
var Za = U((dw, vn) => {
	var Ya = function () {
		var e = String.fromCharCode,
			t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
			r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
			n = {};
		function i(s, a) {
			if (!n[s]) {
				n[s] = {};
				for (var u = 0; u < s.length; u++) n[s][s.charAt(u)] = u;
			}
			return n[s][a];
		}
		var o = {
			compressToBase64: function (s) {
				if (s == null) return '';
				var a = o._compress(s, 6, function (u) {
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
					: o._decompress(s.length, 32, function (a) {
						return i(t, s.charAt(a));
					});
			},
			compressToUTF16: function (s) {
				return s == null ? '' : o._compress(s, 15, function (a) {
					return e(a + 32);
				}) + ' ';
			},
			decompressFromUTF16: function (s) {
				return s == null
					? ''
					: s == ''
					? null
					: o._decompress(s.length, 16384, function (a) {
						return s.charCodeAt(a) - 32;
					});
			},
			compressToUint8Array: function (s) {
				for (
					var a = o.compress(s),
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
				if (s == null) return o.decompress(s);
				for (
					var a = new Array(s.length / 2), u = 0, l = a.length;
					u < l;
					u++
				) a[u] = s[u * 2] * 256 + s[u * 2 + 1];
				var c = [];
				return a.forEach(function (p) {
					c.push(e(p));
				}),
					o.decompress(c.join(''));
			},
			compressToEncodedURIComponent: function (s) {
				return s == null ? '' : o._compress(s, 6, function (a) {
					return r.charAt(a);
				});
			},
			decompressFromEncodedURIComponent: function (s) {
				return s == null
					? ''
					: s == ''
					? null
					: (s = s.replace(/ /g, '+'),
						o._decompress(s.length, 32, function (a) {
							return i(r, s.charAt(a));
						}));
			},
			compress: function (s) {
				return o._compress(s, 16, function (a) {
					return e(a);
				});
			},
			_compress: function (s, a, u) {
				if (s == null) return '';
				var l,
					c,
					p = {},
					f = {},
					d = '',
					g = '',
					m = '',
					b = 2,
					h = 3,
					x = 2,
					E = [],
					y = 0,
					T = 0,
					M;
				for (M = 0; M < s.length; M += 1) {
					if (
						d = s.charAt(M),
							Object.prototype.hasOwnProperty.call(p, d) ||
							(p[d] = h++, f[d] = !0),
							g = m + d,
							Object.prototype.hasOwnProperty.call(p, g)
					) m = g;
					else {
						if (Object.prototype.hasOwnProperty.call(f, m)) {
							if (m.charCodeAt(0) < 256) {
								for (l = 0; l < x; l++) {
									y = y << 1,
										T == a - 1
											? (T = 0, E.push(u(y)), y = 0)
											: T++;
								}
								for (c = m.charCodeAt(0), l = 0; l < 8; l++) {
									y = y << 1 | c & 1,
										T == a - 1
											? (T = 0, E.push(u(y)), y = 0)
											: T++,
										c = c >> 1;
								}
							} else {
								for (c = 1, l = 0; l < x; l++) {
									y = y << 1 | c,
										T == a - 1
											? (T = 0, E.push(u(y)), y = 0)
											: T++,
										c = 0;
								}
								for (c = m.charCodeAt(0), l = 0; l < 16; l++) {
									y = y << 1 | c & 1,
										T == a - 1
											? (T = 0, E.push(u(y)), y = 0)
											: T++,
										c = c >> 1;
								}
							}
							b--,
								b == 0 && (b = Math.pow(2, x), x++),
								delete f[m];
						} else {for (c = p[m], l = 0; l < x; l++) {
								y = y << 1 | c & 1,
									T == a - 1
										? (T = 0, E.push(u(y)), y = 0)
										: T++,
									c = c >> 1;
							}}
						b--,
							b == 0 && (b = Math.pow(2, x), x++),
							p[g] = h++,
							m = String(d);
					}
				}
				if (m !== '') {
					if (Object.prototype.hasOwnProperty.call(f, m)) {
						if (m.charCodeAt(0) < 256) {
							for (l = 0; l < x; l++) {
								y = y << 1,
									T == a - 1
										? (T = 0, E.push(u(y)), y = 0)
										: T++;
							}
							for (c = m.charCodeAt(0), l = 0; l < 8; l++) {
								y = y << 1 | c & 1,
									T == a - 1
										? (T = 0, E.push(u(y)), y = 0)
										: T++,
									c = c >> 1;
							}
						} else {
							for (c = 1, l = 0; l < x; l++) {
								y = y << 1 | c,
									T == a - 1
										? (T = 0, E.push(u(y)), y = 0)
										: T++,
									c = 0;
							}
							for (c = m.charCodeAt(0), l = 0; l < 16; l++) {
								y = y << 1 | c & 1,
									T == a - 1
										? (T = 0, E.push(u(y)), y = 0)
										: T++,
									c = c >> 1;
							}
						}
						b--, b == 0 && (b = Math.pow(2, x), x++), delete f[m];
					} else {for (c = p[m], l = 0; l < x; l++) {
							y = y << 1 | c & 1,
								T == a - 1 ? (T = 0, E.push(u(y)), y = 0) : T++,
								c = c >> 1;
						}}
					b--, b == 0 && (b = Math.pow(2, x), x++);
				}
				for (c = 2, l = 0; l < x; l++) {
					y = y << 1 | c & 1,
						T == a - 1 ? (T = 0, E.push(u(y)), y = 0) : T++,
						c = c >> 1;
				}
				for (;;) {
					if (y = y << 1, T == a - 1) {
						E.push(u(y));
						break;
					} else T++;
				}
				return E.join('');
			},
			decompress: function (s) {
				return s == null
					? ''
					: s == ''
					? null
					: o._decompress(s.length, 32768, function (a) {
						return s.charCodeAt(a);
					});
			},
			_decompress: function (s, a, u) {
				var l = [],
					c,
					p = 4,
					f = 4,
					d = 3,
					g = '',
					m = [],
					b,
					h,
					x,
					E,
					y,
					T,
					M,
					P = { val: u(0), position: a, index: 1 };
				for (b = 0; b < 3; b += 1) l[b] = b;
				for (x = 0, y = Math.pow(2, 2), T = 1; T != y;) {
					E = P.val & P.position,
						P.position >>= 1,
						P.position == 0 &&
						(P.position = a, P.val = u(P.index++)),
						x |= (E > 0 ? 1 : 0) * T,
						T <<= 1;
				}
				switch (c = x) {
					case 0:
						for (x = 0, y = Math.pow(2, 8), T = 1; T != y;) {
							E = P.val & P.position,
								P.position >>= 1,
								P.position == 0 &&
								(P.position = a, P.val = u(P.index++)),
								x |= (E > 0 ? 1 : 0) * T,
								T <<= 1;
						}
						M = e(x);
						break;
					case 1:
						for (x = 0, y = Math.pow(2, 16), T = 1; T != y;) {
							E = P.val & P.position,
								P.position >>= 1,
								P.position == 0 &&
								(P.position = a, P.val = u(P.index++)),
								x |= (E > 0 ? 1 : 0) * T,
								T <<= 1;
						}
						M = e(x);
						break;
					case 2:
						return '';
				}
				for (l[3] = M, h = M, m.push(M);;) {
					if (P.index > s) return '';
					for (x = 0, y = Math.pow(2, d), T = 1; T != y;) {
						E = P.val & P.position,
							P.position >>= 1,
							P.position == 0 &&
							(P.position = a, P.val = u(P.index++)),
							x |= (E > 0 ? 1 : 0) * T,
							T <<= 1;
					}
					switch (M = x) {
						case 0:
							for (x = 0, y = Math.pow(2, 8), T = 1; T != y;) {
								E = P.val & P.position,
									P.position >>= 1,
									P.position == 0 &&
									(P.position = a, P.val = u(P.index++)),
									x |= (E > 0 ? 1 : 0) * T,
									T <<= 1;
							}
							l[f++] = e(x), M = f - 1, p--;
							break;
						case 1:
							for (x = 0, y = Math.pow(2, 16), T = 1; T != y;) {
								E = P.val & P.position,
									P.position >>= 1,
									P.position == 0 &&
									(P.position = a, P.val = u(P.index++)),
									x |= (E > 0 ? 1 : 0) * T,
									T <<= 1;
							}
							l[f++] = e(x), M = f - 1, p--;
							break;
						case 2:
							return m.join('');
					}
					if (p == 0 && (p = Math.pow(2, d), d++), l[M]) g = l[M];
					else if (M === f) g = h + h.charAt(0);
					else return null;
					m.push(g),
						l[f++] = h + g.charAt(0),
						p--,
						h = g,
						p == 0 && (p = Math.pow(2, d), d++);
				}
			},
		};
		return o;
	}();
	typeof vn < 'u' && vn != null
		? vn.exports = Ya
		: typeof angular < 'u' && angular != null &&
			angular.module('LZString', []).factory('LZString', function () {
				return Ya;
			});
});
var Ef = {};
yr(Ef, {
	DMMF: () => ye,
	DMMFClass: () => Ge,
	Debug: () => In,
	Decimal: () => fe,
	Extensions: () => An,
	MetricsClient: () => dt,
	NotFoundError: () => xe,
	PrismaClientInitializationError: () => ue,
	PrismaClientKnownRequestError: () => te,
	PrismaClientRustPanicError: () => Ne,
	PrismaClientUnknownRequestError: () => he,
	PrismaClientValidationError: () => J,
	Sql: () => me,
	Types: () => Fn,
	decompressFromBase64: () => eu,
	defineDmmfProperty: () => Do,
	empty: () => wa,
	getPrismaClient: () => Ha,
	join: () => xa,
	makeDocument: () => Xr,
	makeStrictEnum: () => za,
	objectEnumValues: () => yt,
	raw: () => _i,
	sqltag: () => Li,
	transformDocument: () => Os,
	unpack: () => en,
	warnEnvConflicts: () => tu,
	warnOnce: () => _t,
});
module.exports = au(Ef);
var An = {};
yr(An, { defineExtension: () => Ji, getExtensionContext: () => Qi });
function Ji(e) {
	return typeof e == 'function' ? e : (t) => t.$extends(e);
}
function Qi(e) {
	return e;
}
var Fn = {};
yr(Fn, { Extensions: () => Gi, Public: () => Wi, Utils: () => Hi });
var Gi = {};
var Wi = {};
var Hi = {};
var Cn, zi, Yi, Zi, Xi = !0;
typeof process < 'u' &&
	({ FORCE_COLOR: Cn, NODE_DISABLE_COLORS: zi, NO_COLOR: Yi, TERM: Zi } =
		process.env || {},
		Xi = process.stdout && process.stdout.isTTY);
var uu = {
	enabled: !zi && Yi == null && Zi !== 'dumb' &&
		(Cn != null && Cn !== '0' || Xi),
};
function L(e, t) {
	let r = new RegExp(`\\x1b\\[${t}m`, 'g'),
		n = `\x1B[${e}m`,
		i = `\x1B[${t}m`;
	return function (o) {
		return !uu.enabled || o == null
			? o
			: n + (~('' + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
	};
}
var vf = L(0, 0),
	R = L(1, 22),
	N = L(2, 22),
	Mf = L(3, 23),
	we = L(4, 24),
	Af = L(7, 27),
	Ff = L(8, 28),
	Cf = L(9, 29),
	Rf = L(30, 39),
	O = L(31, 39),
	D = L(32, 39),
	st = L(33, 39),
	at = L(34, 39),
	Sf = L(35, 39),
	qe = L(36, 39),
	Dt = L(37, 39),
	hr = L(90, 39),
	Df = L(90, 39),
	Of = L(40, 49),
	If = L(41, 49),
	kf = L(42, 49),
	Nf = L(43, 49),
	$f = L(44, 49),
	_f = L(45, 49),
	Lf = L(46, 49),
	jf = L(47, 49);
var Pr = K(po()), Du = 100, Tr = [];
typeof process < 'u' && typeof process.stderr?.write != 'function' &&
	(Pr.default.log = console.debug ?? console.log);
function Ou(e) {
	let t = (0, Pr.default)(e),
		r = Object.assign(
			(
				...n
			) => (t.log = r.log,
				n.length !== 0 && Tr.push([e, ...n]),
				Tr.length > Du && Tr.shift(),
				t('', ...n)),
			t,
		);
	return r;
}
var In = Object.assign(Ou, Pr.default);
function fo() {
	Tr.length = 0;
}
var ee = In;
var $n = K(yo()), Ar = K(require('fs'));
var pt = K(require('path'));
function ho(e) {
	let t = e.ignoreProcessEnv ? {} : process.env,
		r = (n) =>
			n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function (o, s) {
				let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
				if (!a) return o;
				let u = a[1], l, c;
				if (u === '\\') c = a[0], l = c.replace('\\$', '$');
				else {
					let p = a[2];
					c = a[0].substring(u.length),
						l = Object.hasOwnProperty.call(t, p)
							? t[p]
							: e.parsed[p] || '',
						l = r(l);
				}
				return o.replace(c, l);
			}, n) ?? n;
	for (let n in e.parsed) {
		let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
		e.parsed[n] = r(i);
	}
	for (let n in e.parsed) t[n] = e.parsed[n];
	return e;
}
var Nn = ee('prisma:tryLoadEnv');
function Ot(
	{ rootEnvPath: e, schemaEnvPath: t },
	r = { conflictCheck: 'none' },
) {
	let n = Eo(e);
	r.conflictCheck !== 'none' && Vu(n, t, r.conflictCheck);
	let i = null;
	return bo(n?.path, t) || (i = Eo(t)),
		!n && !i && Nn('No Environment variables loaded'),
		i?.dotenvResult.error
			? console.error(O(R('Schema Env Error: ')) + i.dotenvResult.error)
			: {
				message: [n?.message, i?.message].filter(Boolean).join(`
`),
				parsed: {
					...n?.dotenvResult?.parsed,
					...i?.dotenvResult?.parsed,
				},
			};
}
function Vu(e, t, r) {
	let n = e?.dotenvResult.parsed, i = !bo(e?.path, t);
	if (n && t && i && Ar.default.existsSync(t)) {
		let o = $n.default.parse(Ar.default.readFileSync(t)), s = [];
		for (let a in o) n[a] === o[a] && s.push(a);
		if (s.length > 0) {
			let a = pt.default.relative(process.cwd(), e.path),
				u = pt.default.relative(process.cwd(), t);
			if (r === 'error') {
				let l = `There is a conflict between env var${
					s.length > 1 ? 's' : ''
				} in ${we(a)} and ${we(u)}
Conflicting env vars:
${
					s.map((c) => `  ${R(c)}`).join(`
`)
				}

We suggest to move the contents of ${we(u)} to ${
					we(a)
				} to consolidate your env vars.
`;
				throw new Error(l);
			} else if (r === 'warn') {
				let l = `Conflict for env var${s.length > 1 ? 's' : ''} ${
					s.map((c) => R(c)).join(', ')
				} in ${we(a)} and ${we(u)}
Env vars from ${we(u)} overwrite the ones from ${we(a)}
      `;
				console.warn(`${st('warn(prisma)')} ${l}`);
			}
		}
	}
}
function Eo(e) {
	return Uu(e)
		? (Nn(`Environment variables loaded from ${e}`), {
			dotenvResult: ho(
				$n.default.config({
					path: e,
					debug: process.env.DOTENV_CONFIG_DEBUG ? !0 : void 0,
				}),
			),
			message: N(
				`Environment variables loaded from ${
					pt.default.relative(process.cwd(), e)
				}`,
			),
			path: e,
		})
		: (Nn(`Environment variables not found at ${e}`), null);
}
function bo(e, t) {
	return e && t && pt.default.resolve(e) === pt.default.resolve(t);
}
function Uu(e) {
	return Boolean(e && Ar.default.existsSync(e));
}
var xo = 'library';
function _n(e) {
	let t = Ku();
	return t ||
		(e?.config.engineType === 'library'
			? 'library'
			: e?.config.engineType === 'binary'
			? 'binary'
			: xo);
}
function Ku() {
	let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
	return e === 'library' ? 'library' : e === 'binary' ? 'binary' : void 0;
}
var Qu = K(Ln());
function It(e) {
	return e instanceof Error;
}
function jn(e) {
	let t = process.env.PRISMA_ENGINE_PROTOCOL;
	if (t === 'json' || t == 'graphql') return t;
	if (t !== void 0) {
		throw new Error(
			`Invalid PRISMA_ENGINE_PROTOCOL env variable value. Expected 'graphql' or 'json', got '${t}'`,
		);
	}
	return e?.previewFeatures?.includes('jsonProtocol') ? 'json' : 'graphql';
}
var ye;
((t) => {
	let e;
	((
		E,
	) => (E.findUnique = 'findUnique',
		E.findUniqueOrThrow = 'findUniqueOrThrow',
		E.findFirst = 'findFirst',
		E.findFirstOrThrow = 'findFirstOrThrow',
		E.findMany = 'findMany',
		E.create = 'create',
		E.createMany = 'createMany',
		E.update = 'update',
		E.updateMany = 'updateMany',
		E.upsert = 'upsert',
		E.delete = 'delete',
		E.deleteMany = 'deleteMany',
		E.groupBy = 'groupBy',
		E.count = 'count',
		E.aggregate = 'aggregate',
		E.findRaw = 'findRaw',
		E.aggregateRaw = 'aggregateRaw'))(
			e = t.ModelAction || (t.ModelAction = {}),
		);
})(ye || (ye = {}));
var Nt = {};
yr(Nt, {
	error: () => Hu,
	info: () => Wu,
	log: () => Gu,
	query: () => zu,
	should: () => Mo,
	tags: () => kt,
	warn: () => qn,
});
var kt = {
		error: O('prisma:error'),
		warn: st('prisma:warn'),
		info: qe('prisma:info'),
		query: at('prisma:query'),
	},
	Mo = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
function Gu(...e) {
	console.log(...e);
}
function qn(e, ...t) {
	Mo.warn() && console.warn(`${kt.warn} ${e}`, ...t);
}
function Wu(e, ...t) {
	console.info(`${kt.info} ${e}`, ...t);
}
function Hu(e, ...t) {
	console.error(`${kt.error} ${e}`, ...t);
}
function zu(e, ...t) {
	console.log(`${kt.query} ${e}`, ...t);
}
function ke(e, t) {
	throw new Error(t);
}
function Rr(e) {
	let t;
	return (...r) =>
		t || (t = e(...r).catch((n) => {
			throw t = void 0, n;
		}),
			t);
}
var $t = K(require('path'));
function Bn(e) {
	return $t.default.sep === $t.default.posix.sep
		? e
		: e.split($t.default.sep).join($t.default.posix.sep);
}
function Vn(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
var Un = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
function ft(e, t) {
	let r = {};
	for (let n of Object.keys(e)) r[n] = t(e[n], n);
	return r;
}
function Kn(e, t) {
	if (e.length === 0) return;
	let r = e[0], n = t(e[0]);
	for (let i = 1; i < e.length; i++) {
		let o = t(e[i]);
		o > n && (n = o, r = e[i]);
	}
	return r;
}
function F(e, t) {
	Object.defineProperty(e, 'name', { value: t, configurable: !0 });
}
var Ro = new Set(),
	_t = (e, t, ...r) => {
		Ro.has(e) || (Ro.add(e), qn(t, ...r));
	};
var ue = class extends Error {
	constructor(r, n, i) {
		super(r);
		this.clientVersion = n, this.errorCode = i, Error.captureStackTrace(ue);
	}
	get [Symbol.toStringTag]() {
		return 'PrismaClientInitializationError';
	}
};
F(ue, 'PrismaClientInitializationError');
var te = class extends Error {
	constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) {
		super(r);
		this.code = n,
			this.clientVersion = i,
			this.meta = o,
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
F(te, 'PrismaClientKnownRequestError');
var Ne = class extends Error {
	constructor(r, n) {
		super(r);
		this.clientVersion = n;
	}
	get [Symbol.toStringTag]() {
		return 'PrismaClientRustPanicError';
	}
};
F(Ne, 'PrismaClientRustPanicError');
var he = class extends Error {
	constructor(r, { clientVersion: n, batchRequestIdx: i }) {
		super(r);
		this.name = 'PrismaClientUnknownRequestError',
			this.clientVersion = n,
			Object.defineProperty(this, 'batchRequestIdx', {
				value: i,
				writable: !0,
				enumerable: !1,
			});
	}
	get [Symbol.toStringTag]() {
		return 'PrismaClientUnknownRequestError';
	}
};
F(he, 'PrismaClientUnknownRequestError');
var dt = class {
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
function Sr(e) {
	let t;
	return {
		get() {
			return t || (t = { value: e() }), t.value;
		},
	};
}
function So(e) {
	return { models: Jn(e.models), enums: Jn(e.enums), types: Jn(e.types) };
}
function Jn(e) {
	let t = {};
	for (let { name: r, ...n } of e) t[r] = n;
	return t;
}
function Do(e, t) {
	let r = Sr(() => Xu(t));
	Object.defineProperty(e, 'dmmf', { get: () => r.get() });
}
function Xu(e) {
	return {
		datamodel: {
			models: Qn(e.models),
			enums: Qn(e.enums),
			types: Qn(e.types),
		},
	};
}
function Qn(e) {
	return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
function Oo(e, t) {
	for (let r of t) {
		for (let n of Object.getOwnPropertyNames(r.prototype)) {
			Object.defineProperty(
				e.prototype,
				n,
				Object.getOwnPropertyDescriptor(r.prototype, n) ??
					Object.create(null),
			);
		}
	}
}
var mt = 9e15,
	Je = 1e9,
	Gn = '0123456789abcdef',
	Or = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
	Ir = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
	Wn = {
		precision: 20,
		rounding: 4,
		modulo: 1,
		toExpNeg: -7,
		toExpPos: 21,
		minE: -mt,
		maxE: mt,
		crypto: !1,
	},
	$o,
	$e,
	C = !0,
	Nr = '[DecimalError] ',
	Ke = Nr + 'Invalid argument: ',
	_o = Nr + 'Precision limit exceeded',
	Lo = Nr + 'crypto unavailable',
	jo = '[object Decimal]',
	re = Math.floor,
	Q = Math.pow,
	el = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
	tl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
	rl = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
	qo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
	Pe = 1e7,
	A = 7,
	nl = 9007199254740991,
	il = Or.length - 1,
	Hn = Ir.length - 1,
	w = { toStringTag: jo };
w.absoluteValue = w.abs = function () {
	var e = new this.constructor(this);
	return e.s < 0 && (e.s = 1), v(e);
};
w.ceil = function () {
	return v(new this.constructor(this), this.e + 1, 2);
};
w.clampedTo = w.clamp = function (e, t) {
	var r, n = this, i = n.constructor;
	if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
	if (e.gt(t)) throw Error(Ke + t);
	return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
w.comparedTo = w.cmp = function (e) {
	var t,
		r,
		n,
		i,
		o = this,
		s = o.d,
		a = (e = new o.constructor(e)).d,
		u = o.s,
		l = e.s;
	if (!s || !a) {
		return !u || !l ? NaN : u !== l ? u : s === a ? 0 : !s ^ u < 0 ? 1 : -1;
	}
	if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -l : 0;
	if (u !== l) return u;
	if (o.e !== e.e) return o.e > e.e ^ u < 0 ? 1 : -1;
	for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t) {
		if (s[t] !== a[t]) return s[t] > a[t] ^ u < 0 ? 1 : -1;
	}
	return n === i ? 0 : n > i ^ u < 0 ? 1 : -1;
};
w.cosine = w.cos = function () {
	var e, t, r = this, n = r.constructor;
	return r.d
		? r.d[0]
			? (e = n.precision,
				t = n.rounding,
				n.precision = e + Math.max(r.e, r.sd()) + A,
				n.rounding = 1,
				r = ol(n, Jo(n, r)),
				n.precision = e,
				n.rounding = t,
				v($e == 2 || $e == 3 ? r.neg() : r, e, t, !0))
			: new n(1)
		: new n(NaN);
};
w.cubeRoot = w.cbrt = function () {
	var e, t, r, n, i, o, s, a, u, l, c = this, p = c.constructor;
	if (!c.isFinite() || c.isZero()) return new p(c);
	for (
		C = !1,
			o = c.s * Q(c.s * c, 1 / 3),
			!o || Math.abs(o) == 1 / 0
				? (r = z(c.d),
					e = c.e,
					(o = (e - r.length + 1) % 3) &&
					(r += o == 1 || o == -2 ? '0' : '00'),
					o = Q(r, 1 / 3),
					e = re((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)),
					o == 1 / 0
						? r = '5e' + e
						: (r = o.toExponential(),
							r = r.slice(0, r.indexOf('e') + 1) + e),
					n = new p(r),
					n.s = c.s)
				: n = new p(o.toString()),
			s = (e = p.precision) + 3;;
	) {
		if (
			a = n,
				u = a.times(a).times(a),
				l = u.plus(c),
				n = _(l.plus(c).times(a), l.plus(u), s + 2, 1),
				z(a.d).slice(0, s) === (r = z(n.d)).slice(0, s)
		) {
			if (r = r.slice(s - 3, s + 1), r == '9999' || !i && r == '4999') {
				if (!i && (v(a, e + 1, 0), a.times(a).times(a).eq(c))) {
					n = a;
					break;
				}
				s += 4, i = 1;
			} else {
				(!+r || !+r.slice(1) && r.charAt(0) == '5') &&
					(v(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
				break;
			}
		}
	}
	return C = !0, v(n, e, p.rounding, t);
};
w.decimalPlaces = w.dp = function () {
	var e, t = this.d, r = NaN;
	if (t) {
		if (e = t.length - 1, r = (e - re(this.e / A)) * A, e = t[e], e) {
			for (; e % 10 == 0; e /= 10) {
				r--;
			}
		}
		r < 0 && (r = 0);
	}
	return r;
};
w.dividedBy = w.div = function (e) {
	return _(this, new this.constructor(e));
};
w.dividedToIntegerBy = w.divToInt = function (e) {
	var t = this, r = t.constructor;
	return v(_(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
w.equals = w.eq = function (e) {
	return this.cmp(e) === 0;
};
w.floor = function () {
	return v(new this.constructor(this), this.e + 1, 3);
};
w.greaterThan = w.gt = function (e) {
	return this.cmp(e) > 0;
};
w.greaterThanOrEqualTo = w.gte = function (e) {
	var t = this.cmp(e);
	return t == 1 || t === 0;
};
w.hyperbolicCosine = w.cosh = function () {
	var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
	if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
	if (o.isZero()) return a;
	r = s.precision,
		n = s.rounding,
		s.precision = r + Math.max(o.e, o.sd()) + 4,
		s.rounding = 1,
		i = o.d.length,
		i < 32
			? (e = Math.ceil(i / 3), t = (1 / _r(4, e)).toString())
			: (e = 16, t = '2.3283064365386962890625e-10'),
		o = gt(s, 1, o.times(t), new s(1), !0);
	for (var u, l = e, c = new s(8); l--;) {
		u = o.times(o), o = a.minus(u.times(c.minus(u.times(c))));
	}
	return v(o, s.precision = r, s.rounding = n, !0);
};
w.hyperbolicSine = w.sinh = function () {
	var e, t, r, n, i = this, o = i.constructor;
	if (!i.isFinite() || i.isZero()) return new o(i);
	if (
		t = o.precision,
			r = o.rounding,
			o.precision = t + Math.max(i.e, i.sd()) + 4,
			o.rounding = 1,
			n = i.d.length,
			n < 3
	) i = gt(o, 2, i, i, !0);
	else {
		e = 1.4 * Math.sqrt(n),
			e = e > 16 ? 16 : e | 0,
			i = i.times(1 / _r(5, e)),
			i = gt(o, 2, i, i, !0);
		for (var s, a = new o(5), u = new o(16), l = new o(20); e--;) {
			s = i.times(i), i = i.times(a.plus(s.times(u.times(s).plus(l))));
		}
	}
	return o.precision = t, o.rounding = r, v(i, t, r, !0);
};
w.hyperbolicTangent = w.tanh = function () {
	var e, t, r = this, n = r.constructor;
	return r.isFinite()
		? r.isZero()
			? new n(r)
			: (e = n.precision,
				t = n.rounding,
				n.precision = e + 7,
				n.rounding = 1,
				_(r.sinh(), r.cosh(), n.precision = e, n.rounding = t))
		: new n(r.s);
};
w.inverseCosine = w.acos = function () {
	var e,
		t = this,
		r = t.constructor,
		n = t.abs().cmp(1),
		i = r.precision,
		o = r.rounding;
	return n !== -1
		? n === 0 ? t.isNeg() ? Te(r, i, o) : new r(0) : new r(NaN)
		: t.isZero()
		? Te(r, i + 4, o).times(.5)
		: (r.precision = i + 6,
			r.rounding = 1,
			t = t.asin(),
			e = Te(r, i + 4, o).times(.5),
			r.precision = i,
			r.rounding = o,
			e.minus(t));
};
w.inverseHyperbolicCosine = w.acosh = function () {
	var e, t, r = this, n = r.constructor;
	return r.lte(1)
		? new n(r.eq(1) ? 0 : NaN)
		: r.isFinite()
		? (e = n.precision,
			t = n.rounding,
			n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4,
			n.rounding = 1,
			C = !1,
			r = r.times(r).minus(1).sqrt().plus(r),
			C = !0,
			n.precision = e,
			n.rounding = t,
			r.ln())
		: new n(r);
};
w.inverseHyperbolicSine = w.asinh = function () {
	var e, t, r = this, n = r.constructor;
	return !r.isFinite() || r.isZero()
		? new n(r)
		: (e = n.precision,
			t = n.rounding,
			n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6,
			n.rounding = 1,
			C = !1,
			r = r.times(r).plus(1).sqrt().plus(r),
			C = !0,
			n.precision = e,
			n.rounding = t,
			r.ln());
};
w.inverseHyperbolicTangent = w.atanh = function () {
	var e, t, r, n, i = this, o = i.constructor;
	return i.isFinite()
		? i.e >= 0
			? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
			: (e = o.precision,
				t = o.rounding,
				n = i.sd(),
				Math.max(n, e) < 2 * -i.e - 1
					? v(new o(i), e, t, !0)
					: (o.precision = r = n - i.e,
						i = _(i.plus(1), new o(1).minus(i), r + e, 1),
						o.precision = e + 4,
						o.rounding = 1,
						i = i.ln(),
						o.precision = e,
						o.rounding = t,
						i.times(.5)))
		: new o(NaN);
};
w.inverseSine = w.asin = function () {
	var e, t, r, n, i = this, o = i.constructor;
	return i.isZero()
		? new o(i)
		: (t = i.abs().cmp(1),
			r = o.precision,
			n = o.rounding,
			t !== -1
				? t === 0
					? (e = Te(o, r + 4, n).times(.5), e.s = i.s, e)
					: new o(NaN)
				: (o.precision = r + 6,
					o.rounding = 1,
					i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(),
					o.precision = r,
					o.rounding = n,
					i.times(2)));
};
w.inverseTangent = w.atan = function () {
	var e,
		t,
		r,
		n,
		i,
		o,
		s,
		a,
		u,
		l = this,
		c = l.constructor,
		p = c.precision,
		f = c.rounding;
	if (l.isFinite()) {
		if (l.isZero()) return new c(l);
		if (l.abs().eq(1) && p + 4 <= Hn) {
			return s = Te(c, p + 4, f).times(.25), s.s = l.s, s;
		}
	} else {
		if (!l.s) return new c(NaN);
		if (p + 4 <= Hn) return s = Te(c, p + 4, f).times(.5), s.s = l.s, s;
	}
	for (
		c.precision = a = p + 10,
			c.rounding = 1,
			r = Math.min(28, a / A + 2 | 0),
			e = r;
		e;
		--e
	) l = l.div(l.times(l).plus(1).sqrt().plus(1));
	for (
		C = !1,
			t = Math.ceil(a / A),
			n = 1,
			u = l.times(l),
			s = new c(l),
			i = l;
		e !== -1;
	) {
		if (
			i = i.times(u),
				o = s.minus(i.div(n += 2)),
				i = i.times(u),
				s = o.plus(i.div(n += 2)),
				s.d[t] !== void 0
		) for (e = t; s.d[e] === o.d[e] && e--;);
	}
	return r && (s = s.times(2 << r - 1)),
		C = !0,
		v(s, c.precision = p, c.rounding = f, !0);
};
w.isFinite = function () {
	return !!this.d;
};
w.isInteger = w.isInt = function () {
	return !!this.d && re(this.e / A) > this.d.length - 2;
};
w.isNaN = function () {
	return !this.s;
};
w.isNegative = w.isNeg = function () {
	return this.s < 0;
};
w.isPositive = w.isPos = function () {
	return this.s > 0;
};
w.isZero = function () {
	return !!this.d && this.d[0] === 0;
};
w.lessThan = w.lt = function (e) {
	return this.cmp(e) < 0;
};
w.lessThanOrEqualTo = w.lte = function (e) {
	return this.cmp(e) < 1;
};
w.logarithm = w.log = function (e) {
	var t,
		r,
		n,
		i,
		o,
		s,
		a,
		u,
		l = this,
		c = l.constructor,
		p = c.precision,
		f = c.rounding,
		d = 5;
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
		if (r.length > 1) o = !0;
		else {
			for (i = r[0]; i % 10 === 0;) i /= 10;
			o = i !== 1;
		}
	}
	if (
		C = !1,
			a = p + d,
			s = Ue(l, a),
			n = t ? kr(c, a + 10) : Ue(e, a),
			u = _(s, n, a, 1),
			Lt(u.d, i = p, f)
	) {
		do if (
			a += 10,
				s = Ue(l, a),
				n = t ? kr(c, a + 10) : Ue(e, a),
				u = _(s, n, a, 1),
				!o
		) {
			+z(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = v(u, p + 1, 0));
			break;
		} while (Lt(u.d, i += 10, f));
	}
	return C = !0, v(u, p, f);
};
w.minus = w.sub = function (e) {
	var t, r, n, i, o, s, a, u, l, c, p, f, d = this, g = d.constructor;
	if (e = new g(e), !d.d || !e.d) {
		return !d.s || !e.s
			? e = new g(NaN)
			: d.d
			? e.s = -e.s
			: e = new g(e.d || d.s !== e.s ? d : NaN),
			e;
	}
	if (d.s != e.s) return e.s = -e.s, d.plus(e);
	if (l = d.d, f = e.d, a = g.precision, u = g.rounding, !l[0] || !f[0]) {
		if (f[0]) e.s = -e.s;
		else if (l[0]) e = new g(d);
		else return new g(u === 3 ? -0 : 0);
		return C ? v(e, a, u) : e;
	}
	if (r = re(e.e / A), c = re(d.e / A), l = l.slice(), o = c - r, o) {
		for (
			p = o < 0,
				p
					? (t = l, o = -o, s = f.length)
					: (t = f, r = c, s = l.length),
				n = Math.max(Math.ceil(a / A), s) + 2,
				o > n && (o = n, t.length = 1),
				t.reverse(),
				n = o;
			n--;
		) t.push(0);
		t.reverse();
	} else {
		for (
			n = l.length, s = f.length, p = n < s, p && (s = n), n = 0;
			n < s;
			n++
		) {
			if (l[n] != f[n]) {
				p = l[n] < f[n];
				break;
			}
		}
		o = 0;
	}
	for (
		p && (t = l, l = f, f = t, e.s = -e.s), s = l.length, n = f.length - s;
		n > 0;
		--n
	) l[s++] = 0;
	for (n = f.length; n > o;) {
		if (l[--n] < f[n]) {
			for (i = n; i && l[--i] === 0;) l[i] = Pe - 1;
			--l[i], l[n] += Pe;
		}
		l[n] -= f[n];
	}
	for (; l[--s] === 0;) l.pop();
	for (; l[0] === 0; l.shift()) --r;
	return l[0]
		? (e.d = l, e.e = $r(l, r), C ? v(e, a, u) : e)
		: new g(u === 3 ? -0 : 0);
};
w.modulo = w.mod = function (e) {
	var t, r = this, n = r.constructor;
	return e = new n(e),
		!r.d || !e.s || e.d && !e.d[0]
			? new n(NaN)
			: !e.d || r.d && !r.d[0]
			? v(new n(r), n.precision, n.rounding)
			: (C = !1,
				n.modulo == 9
					? (t = _(r, e.abs(), 0, 3, 1), t.s *= e.s)
					: t = _(r, e, 0, n.modulo, 1),
				t = t.times(e),
				C = !0,
				r.minus(t));
};
w.naturalExponential = w.exp = function () {
	return zn(this);
};
w.naturalLogarithm = w.ln = function () {
	return Ue(this);
};
w.negated = w.neg = function () {
	var e = new this.constructor(this);
	return e.s = -e.s, v(e);
};
w.plus = w.add = function (e) {
	var t, r, n, i, o, s, a, u, l, c, p = this, f = p.constructor;
	if (e = new f(e), !p.d || !e.d) {
		return !p.s || !e.s
			? e = new f(NaN)
			: p.d || (e = new f(e.d || p.s === e.s ? p : NaN)),
			e;
	}
	if (p.s != e.s) return e.s = -e.s, p.minus(e);
	if (l = p.d, c = e.d, a = f.precision, u = f.rounding, !l[0] || !c[0]) {
		return c[0] || (e = new f(p)), C ? v(e, a, u) : e;
	}
	if (o = re(p.e / A), n = re(e.e / A), l = l.slice(), i = o - n, i) {
		for (
			i < 0
				? (r = l, i = -i, s = c.length)
				: (r = c, n = o, s = l.length),
				o = Math.ceil(a / A),
				s = o > s ? o + 1 : s + 1,
				i > s && (i = s, r.length = 1),
				r.reverse();
			i--;
		) r.push(0);
		r.reverse();
	}
	for (
		s = l.length,
			i = c.length,
			s - i < 0 && (i = s, r = c, c = l, l = r),
			t = 0;
		i;
	) t = (l[--i] = l[i] + c[i] + t) / Pe | 0, l[i] %= Pe;
	for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0;) l.pop();
	return e.d = l, e.e = $r(l, n), C ? v(e, a, u) : e;
};
w.precision = w.sd = function (e) {
	var t, r = this;
	if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ke + e);
	return r.d ? (t = Bo(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
w.round = function () {
	var e = this, t = e.constructor;
	return v(new t(e), e.e + 1, t.rounding);
};
w.sine = w.sin = function () {
	var e, t, r = this, n = r.constructor;
	return r.isFinite()
		? r.isZero()
			? new n(r)
			: (e = n.precision,
				t = n.rounding,
				n.precision = e + Math.max(r.e, r.sd()) + A,
				n.rounding = 1,
				r = al(n, Jo(n, r)),
				n.precision = e,
				n.rounding = t,
				v($e > 2 ? r.neg() : r, e, t, !0))
		: new n(NaN);
};
w.squareRoot = w.sqrt = function () {
	var e,
		t,
		r,
		n,
		i,
		o,
		s = this,
		a = s.d,
		u = s.e,
		l = s.s,
		c = s.constructor;
	if (l !== 1 || !a || !a[0]) {
		return new c(!l || l < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
	}
	for (
		C = !1,
			l = Math.sqrt(+s),
			l == 0 || l == 1 / 0
				? (t = z(a),
					(t.length + u) % 2 == 0 && (t += '0'),
					l = Math.sqrt(t),
					u = re((u + 1) / 2) - (u < 0 || u % 2),
					l == 1 / 0
						? t = '5e' + u
						: (t = l.toExponential(),
							t = t.slice(0, t.indexOf('e') + 1) + u),
					n = new c(t))
				: n = new c(l.toString()),
			r = (u = c.precision) + 3;;
	) {
		if (
			o = n,
				n = o.plus(_(s, o, r + 2, 1)).times(.5),
				z(o.d).slice(0, r) === (t = z(n.d)).slice(0, r)
		) {
			if (t = t.slice(r - 3, r + 1), t == '9999' || !i && t == '4999') {
				if (!i && (v(o, u + 1, 0), o.times(o).eq(s))) {
					n = o;
					break;
				}
				r += 4, i = 1;
			} else {
				(!+t || !+t.slice(1) && t.charAt(0) == '5') &&
					(v(n, u + 1, 1), e = !n.times(n).eq(s));
				break;
			}
		}
	}
	return C = !0, v(n, u, c.rounding, e);
};
w.tangent = w.tan = function () {
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
				r = _(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0),
				n.precision = e,
				n.rounding = t,
				v($e == 2 || $e == 4 ? r.neg() : r, e, t, !0))
		: new n(NaN);
};
w.times = w.mul = function (e) {
	var t,
		r,
		n,
		i,
		o,
		s,
		a,
		u,
		l,
		c = this,
		p = c.constructor,
		f = c.d,
		d = (e = new p(e)).d;
	if (e.s *= c.s, !f || !f[0] || !d || !d[0]) {
		return new p(
			!e.s || f && !f[0] && !d || d && !d[0] && !f
				? NaN
				: !f || !d
				? e.s / 0
				: e.s * 0,
		);
	}
	for (
		r = re(c.e / A) + re(e.e / A),
			u = f.length,
			l = d.length,
			u < l && (o = f, f = d, d = o, s = u, u = l, l = s),
			o = [],
			s = u + l,
			n = s;
		n--;
	) o.push(0);
	for (n = l; --n >= 0;) {
		for (t = 0, i = u + n; i > n;) {
			a = o[i] + d[n] * f[i - n - 1] + t,
				o[i--] = a % Pe | 0,
				t = a / Pe | 0;
		}
		o[i] = (o[i] + t) % Pe | 0;
	}
	for (; !o[--s];) o.pop();
	return t ? ++r : o.shift(),
		e.d = o,
		e.e = $r(o, r),
		C ? v(e, p.precision, p.rounding) : e;
};
w.toBinary = function (e, t) {
	return Zn(this, 2, e, t);
};
w.toDecimalPlaces = w.toDP = function (e, t) {
	var r = this, n = r.constructor;
	return r = new n(r),
		e === void 0
			? r
			: (le(e, 0, Je),
				t === void 0 ? t = n.rounding : le(t, 0, 8),
				v(r, e + r.e + 1, t));
};
w.toExponential = function (e, t) {
	var r, n = this, i = n.constructor;
	return e === void 0
		? r = Fe(n, !0)
		: (le(e, 0, Je),
			t === void 0 ? t = i.rounding : le(t, 0, 8),
			n = v(new i(n), e + 1, t),
			r = Fe(n, !0, e + 1)),
		n.isNeg() && !n.isZero() ? '-' + r : r;
};
w.toFixed = function (e, t) {
	var r, n, i = this, o = i.constructor;
	return e === void 0
		? r = Fe(i)
		: (le(e, 0, Je),
			t === void 0 ? t = o.rounding : le(t, 0, 8),
			n = v(new o(i), e + i.e + 1, t),
			r = Fe(n, !1, e + n.e + 1)),
		i.isNeg() && !i.isZero() ? '-' + r : r;
};
w.toFraction = function (e) {
	var t,
		r,
		n,
		i,
		o,
		s,
		a,
		u,
		l,
		c,
		p,
		f,
		d = this,
		g = d.d,
		m = d.constructor;
	if (!g) return new m(d);
	if (
		l = r = new m(1),
			n = u = new m(0),
			t = new m(n),
			o = t.e = Bo(g) - d.e - 1,
			s = o % A,
			t.d[0] = Q(10, s < 0 ? A + s : s),
			e == null
	) e = o > 0 ? t : l;
	else {
		if (a = new m(e), !a.isInt() || a.lt(l)) throw Error(Ke + a);
		e = a.gt(t) ? o > 0 ? t : l : a;
	}
	for (
		C = !1,
			a = new m(z(g)),
			c = m.precision,
			m.precision = o = g.length * A * 2;
		p = _(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1;
	) {
		r = n,
			n = i,
			i = l,
			l = u.plus(p.times(i)),
			u = i,
			i = t,
			t = a.minus(p.times(i)),
			a = i;
	}
	return i = _(e.minus(r), n, 0, 1, 1),
		u = u.plus(i.times(l)),
		r = r.plus(i.times(n)),
		u.s = l.s = d.s,
		f = _(l, n, o, 1).minus(d).abs().cmp(_(u, r, o, 1).minus(d).abs()) < 1
			? [l, n]
			: [u, r],
		m.precision = c,
		C = !0,
		f;
};
w.toHexadecimal = w.toHex = function (e, t) {
	return Zn(this, 16, e, t);
};
w.toNearest = function (e, t) {
	var r = this, n = r.constructor;
	if (r = new n(r), e == null) {
		if (!r.d) return r;
		e = new n(1), t = n.rounding;
	} else {
		if (e = new n(e), t === void 0 ? t = n.rounding : le(t, 0, 8), !r.d) {
			return e.s ? r : e;
		}
		if (!e.d) return e.s && (e.s = r.s), e;
	}
	return e.d[0]
		? (C = !1, r = _(r, e, 0, t, 1).times(e), C = !0, v(r))
		: (e.s = r.s, r = e),
		r;
};
w.toNumber = function () {
	return +this;
};
w.toOctal = function (e, t) {
	return Zn(this, 8, e, t);
};
w.toPower = w.pow = function (e) {
	var t, r, n, i, o, s, a = this, u = a.constructor, l = +(e = new u(e));
	if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(Q(+a, l));
	if (a = new u(a), a.eq(1)) return a;
	if (n = u.precision, o = u.rounding, e.eq(1)) return v(a, n, o);
	if (t = re(e.e / A), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= nl) {
		return i = Vo(u, a, r, n), e.s < 0 ? new u(1).div(i) : v(i, n, o);
	}
	if (s = a.s, s < 0) {
		if (t < e.d.length - 1) return new u(NaN);
		if (
			(e.d[t] & 1) == 0 && (s = 1),
				a.e == 0 && a.d[0] == 1 && a.d.length == 1
		) return a.s = s, a;
	}
	return r = Q(+a, l),
		t = r == 0 || !isFinite(r)
			? re(l * (Math.log('0.' + z(a.d)) / Math.LN10 + a.e + 1))
			: new u(r + '').e,
		t > u.maxE + 1 || t < u.minE - 1
			? new u(t > 0 ? s / 0 : 0)
			: (C = !1,
				u.rounding = a.s = 1,
				r = Math.min(12, (t + '').length),
				i = zn(e.times(Ue(a, n + r)), n),
				i.d &&
				(i = v(i, n + 5, 1),
					Lt(i.d, n, o) &&
					(t = n + 10,
						i = v(zn(e.times(Ue(a, t + r)), t), t + 5, 1),
						+z(i.d).slice(n + 1, n + 15) + 1 == 1e14 &&
						(i = v(i, n + 1, 0)))),
				i.s = s,
				C = !0,
				u.rounding = o,
				v(i, n, o));
};
w.toPrecision = function (e, t) {
	var r, n = this, i = n.constructor;
	return e === void 0
		? r = Fe(n, n.e <= i.toExpNeg || n.e >= i.toExpPos)
		: (le(e, 1, Je),
			t === void 0 ? t = i.rounding : le(t, 0, 8),
			n = v(new i(n), e, t),
			r = Fe(n, e <= n.e || n.e <= i.toExpNeg, e)),
		n.isNeg() && !n.isZero() ? '-' + r : r;
};
w.toSignificantDigits = w.toSD = function (e, t) {
	var r = this, n = r.constructor;
	return e === void 0
		? (e = n.precision, t = n.rounding)
		: (le(e, 1, Je), t === void 0 ? t = n.rounding : le(t, 0, 8)),
		v(new n(r), e, t);
};
w.toString = function () {
	var e = this,
		t = e.constructor,
		r = Fe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
	return e.isNeg() && !e.isZero() ? '-' + r : r;
};
w.truncated = w.trunc = function () {
	return v(new this.constructor(this), this.e + 1, 1);
};
w.valueOf = w.toJSON = function () {
	var e = this,
		t = e.constructor,
		r = Fe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
	return e.isNeg() ? '-' + r : r;
};
function z(e) {
	var t, r, n, i = e.length - 1, o = '', s = e[0];
	if (i > 0) {
		for (o += s, t = 1; t < i; t++) {
			n = e[t] + '', r = A - n.length, r && (o += Ve(r)), o += n;
		}
		s = e[t], n = s + '', r = A - n.length, r && (o += Ve(r));
	} else if (s === 0) return '0';
	for (; s % 10 === 0;) s /= 10;
	return o + s;
}
function le(e, t, r) {
	if (e !== ~~e || e < t || e > r) throw Error(Ke + e);
}
function Lt(e, t, r, n) {
	var i, o, s, a;
	for (o = e[0]; o >= 10; o /= 10) --t;
	return --t < 0 ? (t += A, i = 0) : (i = Math.ceil((t + 1) / A), t %= A),
		o = Q(10, A - t),
		a = e[i] % o | 0,
		n == null
			? t < 3
				? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0),
					s = r < 4 && a == 99999 || r > 3 && a == 49999 ||
						a == 5e4 || a == 0)
				: s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) &&
						(e[i + 1] / o / 100 | 0) == Q(10, t - 2) - 1 ||
					(a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0
			: t < 4
			? (t == 0
				? a = a / 1e3 | 0
				: t == 1
				? a = a / 100 | 0
				: t == 2 && (a = a / 10 | 0),
				s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999)
			: s =
				((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) &&
				(e[i + 1] / o / 1e3 | 0) == Q(10, t - 3) - 1,
		s;
}
function Dr(e, t, r) {
	for (var n, i = [0], o, s = 0, a = e.length; s < a;) {
		for (o = i.length; o--;) i[o] *= t;
		for (i[0] += Gn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++) {
			i[n] > r - 1 &&
				(i[n + 1] === void 0 && (i[n + 1] = 0),
					i[n + 1] += i[n] / r | 0,
					i[n] %= r);
		}
	}
	return i.reverse();
}
function ol(e, t) {
	var r, n, i;
	if (t.isZero()) return t;
	n = t.d.length,
		n < 32
			? (r = Math.ceil(n / 3), i = (1 / _r(4, r)).toString())
			: (r = 16, i = '2.3283064365386962890625e-10'),
		e.precision += r,
		t = gt(e, 1, t.times(i), new e(1));
	for (var o = r; o--;) {
		var s = t.times(t);
		t = s.times(s).minus(s).times(8).plus(1);
	}
	return e.precision -= r, t;
}
var _ = function () {
	function e(n, i, o) {
		var s, a = 0, u = n.length;
		for (n = n.slice(); u--;) {
			s = n[u] * i + a, n[u] = s % o | 0, a = s / o | 0;
		}
		return a && n.unshift(a), n;
	}
	function t(n, i, o, s) {
		var a, u;
		if (o != s) u = o > s ? 1 : -1;
		else {for (a = u = 0; a < o; a++) {
				if (n[a] != i[a]) {
					u = n[a] > i[a] ? 1 : -1;
					break;
				}
			}}
		return u;
	}
	function r(n, i, o, s) {
		for (var a = 0; o--;) {
			n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
		}
		for (; !n[0] && n.length > 1;) n.shift();
	}
	return function (n, i, o, s, a, u) {
		var l,
			c,
			p,
			f,
			d,
			g,
			m,
			b,
			h,
			x,
			E,
			y,
			T,
			M,
			P,
			k,
			B,
			V,
			Z,
			ot,
			mr = n.constructor,
			Mn = n.s == i.s ? 1 : -1,
			X = n.d,
			$ = i.d;
		if (!X || !X[0] || !$ || !$[0]) {
			return new mr(
				!n.s || !i.s || (X ? $ && X[0] == $[0] : !$)
					? NaN
					: X && X[0] == 0 || !$
					? Mn * 0
					: Mn / 0,
			);
		}
		for (
			u
				? (d = 1, c = n.e - i.e)
				: (u = Pe, d = A, c = re(n.e / d) - re(i.e / d)),
				Z = $.length,
				B = X.length,
				h = new mr(Mn),
				x = h.d = [],
				p = 0;
			$[p] == (X[p] || 0);
			p++
		);
		if (
			$[p] > (X[p] || 0) && c--,
				o == null
					? (M = o = mr.precision, s = mr.rounding)
					: a
					? M = o + (n.e - i.e) + 1
					: M = o,
				M < 0
		) x.push(1), g = !0;
		else {
			if (M = M / d + 2 | 0, p = 0, Z == 1) {
				for (f = 0, $ = $[0], M++; (p < B || f) && M--; p++) {
					P = f * u + (X[p] || 0), x[p] = P / $ | 0, f = P % $ | 0;
				}
				g = f || p < B;
			} else {
				for (
					f = u / ($[0] + 1) | 0,
						f > 1 &&
						($ = e($, f, u),
							X = e(X, f, u),
							Z = $.length,
							B = X.length),
						k = Z,
						E = X.slice(0, Z),
						y = E.length;
					y < Z;
				) E[y++] = 0;
				ot = $.slice(), ot.unshift(0), V = $[0], $[1] >= u / 2 && ++V;
				do f = 0,
					l = t($, E, Z, y),
					l < 0
						? (T = E[0],
							Z != y && (T = T * u + (E[1] || 0)),
							f = T / V | 0,
							f > 1
								? (f >= u && (f = u - 1),
									m = e($, f, u),
									b = m.length,
									y = E.length,
									l = t(m, E, b, y),
									l == 1 && (f--, r(m, Z < b ? ot : $, b, u)))
								: (f == 0 && (l = f = 1), m = $.slice()),
							b = m.length,
							b < y && m.unshift(0),
							r(E, m, y, u),
							l == -1 &&
							(y = E.length,
								l = t($, E, Z, y),
								l < 1 && (f++, r(E, Z < y ? ot : $, y, u))),
							y = E.length)
						: l === 0 && (f++, E = [0]),
					x[p++] = f,
					l && E[0]
						? E[y++] = X[k] || 0
						: (E = [X[k]], y = 1); while (
					(k++ < B || E[0] !== void 0) && M--
				);
				g = E[0] !== void 0;
			}
			x[0] || x.shift();
		}
		if (d == 1) h.e = c, $o = g;
		else {
			for (p = 1, f = x[0]; f >= 10; f /= 10) p++;
			h.e = p + c * d - 1, v(h, a ? o + h.e + 1 : o, s, g);
		}
		return h;
	};
}();
function v(e, t, r, n) {
	var i, o, s, a, u, l, c, p, f, d = e.constructor;
	e:
	if (t != null) {
		if (p = e.d, !p) return e;
		for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
		if (o = t - i, o < 0) {
			o += A, s = t, c = p[f = 0], u = c / Q(10, i - s - 1) % 10 | 0;
		} else if (f = Math.ceil((o + 1) / A), a = p.length, f >= a) {
			if (n) {
				for (; a++ <= f;) p.push(0);
				c = u = 0, i = 1, o %= A, s = o - A + 1;
			} else break e;
		} else {
			for (c = a = p[f], i = 1; a >= 10; a /= 10) i++;
			o %= A,
				s = o - A + i,
				u = s < 0 ? 0 : c / Q(10, i - s - 1) % 10 | 0;
		}
		if (
			n = n || t < 0 || p[f + 1] !== void 0 ||
				(s < 0 ? c : c % Q(10, i - s - 1)),
				l = r < 4
					? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
					: u > 5 || u == 5 && (r == 4 || n || r == 6 && (o > 0
													? s > 0
														? c / Q(10, i - s)
														: 0
													: p[f - 1]) % 10 & 1 ||
								r == (e.s < 0 ? 8 : 7)),
				t < 1 || !p[0]
		) {
			return p.length = 0,
				l
					? (t -= e.e + 1,
						p[0] = Q(10, (A - t % A) % A),
						e.e = -t || 0)
					: p[0] = e.e = 0,
				e;
		}
		if (
			o == 0
				? (p.length = f, a = 1, f--)
				: (p.length = f + 1,
					a = Q(10, A - o),
					p[f] = s > 0 ? (c / Q(10, i - s) % Q(10, s) | 0) * a : 0), l
		) {
			for (;;) {
				if (f == 0) {
					for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
					for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
					o != a && (e.e++, p[0] == Pe && (p[0] = 1));
					break;
				} else {
					if (p[f] += a, p[f] != Pe) break;
					p[f--] = 0, a = 1;
				}
			}
		}
		for (o = p.length; p[--o] === 0;) p.pop();
	}
	return C &&
		(e.e > d.maxE
			? (e.d = null, e.e = NaN)
			: e.e < d.minE && (e.e = 0, e.d = [0])),
		e;
}
function Fe(e, t, r) {
	if (!e.isFinite()) return Ko(e);
	var n, i = e.e, o = z(e.d), s = o.length;
	return t
		? (r && (n = r - s) > 0
			? o = o.charAt(0) + '.' + o.slice(1) + Ve(n)
			: s > 1 && (o = o.charAt(0) + '.' + o.slice(1)),
			o = o + (e.e < 0 ? 'e' : 'e+') + e.e)
		: i < 0
		? (o = '0.' + Ve(-i - 1) + o, r && (n = r - s) > 0 && (o += Ve(n)))
		: i >= s
		? (o += Ve(i + 1 - s),
			r && (n = r - i - 1) > 0 && (o = o + '.' + Ve(n)))
		: ((n = i + 1) < s && (o = o.slice(0, n) + '.' + o.slice(n)),
			r && (n = r - s) > 0 && (i + 1 === s && (o += '.'), o += Ve(n))),
		o;
}
function $r(e, t) {
	var r = e[0];
	for (t *= A; r >= 10; r /= 10) t++;
	return t;
}
function kr(e, t, r) {
	if (t > il) throw C = !0, r && (e.precision = r), Error(_o);
	return v(new e(Or), t, 1, !0);
}
function Te(e, t, r) {
	if (t > Hn) throw Error(_o);
	return v(new e(Ir), t, r, !0);
}
function Bo(e) {
	var t = e.length - 1, r = t * A + 1;
	if (t = e[t], t) {
		for (; t % 10 == 0; t /= 10) r--;
		for (t = e[0]; t >= 10; t /= 10) r++;
	}
	return r;
}
function Ve(e) {
	for (var t = ''; e--;) t += '0';
	return t;
}
function Vo(e, t, r, n) {
	var i, o = new e(1), s = Math.ceil(n / A + 4);
	for (C = !1;;) {
		if (
			r % 2 && (o = o.times(t), ko(o.d, s) && (i = !0)),
				r = re(r / 2),
				r === 0
		) {
			r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
			break;
		}
		t = t.times(t), ko(t.d, s);
	}
	return C = !0, o;
}
function Io(e) {
	return e.d[e.d.length - 1] & 1;
}
function Uo(e, t, r) {
	for (var n, i = new e(t[0]), o = 0; ++o < t.length;) {
		if (n = new e(t[o]), n.s) i[r](n) && (i = n);
		else {
			i = n;
			break;
		}
	}
	return i;
}
function zn(e, t) {
	var r,
		n,
		i,
		o,
		s,
		a,
		u,
		l = 0,
		c = 0,
		p = 0,
		f = e.constructor,
		d = f.rounding,
		g = f.precision;
	if (!e.d || !e.d[0] || e.e > 17) {
		return new f(
			e.d
				? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1
				: e.s
				? e.s < 0 ? 0 : e
				: 0 / 0,
		);
	}
	for (t == null ? (C = !1, u = g) : u = t, a = new f(.03125); e.e > -2;) {
		e = e.times(a), p += 5;
	}
	for (
		n = Math.log(Q(2, p)) / Math.LN10 * 2 + 5 | 0,
			u += n,
			r = o = s = new f(1),
			f.precision = u;;
	) {
		if (
			o = v(o.times(e), u, 1),
				r = r.times(++c),
				a = s.plus(_(o, r, u, 1)),
				z(a.d).slice(0, u) === z(s.d).slice(0, u)
		) {
			for (i = p; i--;) s = v(s.times(s), u, 1);
			if (t == null) {
				if (l < 3 && Lt(s.d, u - n, d, l)) {
					f.precision = u += 10, r = o = a = new f(1), c = 0, l++;
				} else return v(s, f.precision = g, d, C = !0);
			} else return f.precision = g, s;
		}
		s = a;
	}
}
function Ue(e, t) {
	var r,
		n,
		i,
		o,
		s,
		a,
		u,
		l,
		c,
		p,
		f,
		d = 1,
		g = 10,
		m = e,
		b = m.d,
		h = m.constructor,
		x = h.rounding,
		E = h.precision;
	if (m.s < 0 || !b || !b[0] || !m.e && b[0] == 1 && b.length == 1) {
		return new h(b && !b[0] ? -1 / 0 : m.s != 1 ? NaN : b ? 0 : m);
	}
	if (
		t == null ? (C = !1, c = E) : c = t,
			h.precision = c += g,
			r = z(b),
			n = r.charAt(0),
			Math.abs(o = m.e) < 15e14
	) {
		for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;) {
			m = m.times(e), r = z(m.d), n = r.charAt(0), d++;
		}
		o = m.e,
			n > 1
				? (m = new h('0.' + r), o++)
				: m = new h(n + '.' + r.slice(1));
	} else {return l = kr(h, c + 2, E).times(o + ''),
			m = Ue(new h(n + '.' + r.slice(1)), c - g).plus(l),
			h.precision = E,
			t == null ? v(m, E, x, C = !0) : m;}
	for (
		p = m,
			u = s = m = _(m.minus(1), m.plus(1), c, 1),
			f = v(m.times(m), c, 1),
			i = 3;;
	) {
		if (
			s = v(s.times(f), c, 1),
				l = u.plus(_(s, new h(i), c, 1)),
				z(l.d).slice(0, c) === z(u.d).slice(0, c)
		) {
			if (
				u = u.times(2),
					o !== 0 && (u = u.plus(kr(h, c + 2, E).times(o + ''))),
					u = _(u, new h(d), c, 1),
					t == null
			) {
				if (Lt(u.d, c - g, x, a)) {
					h.precision = c += g,
						l = s = m = _(p.minus(1), p.plus(1), c, 1),
						f = v(m.times(m), c, 1),
						i = a = 1;
				} else return v(u, h.precision = E, x, C = !0);
			} else return h.precision = E, u;
		}
		u = l, i += 2;
	}
}
function Ko(e) {
	return String(e.s * e.s / 0);
}
function Yn(e, t) {
	var r, n, i;
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
	for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
	if (t = t.slice(n, i), t) {
		if (
			i -= n,
				e.e = r = r - n - 1,
				e.d = [],
				n = (r + 1) % A,
				r < 0 && (n += A),
				n < i
		) {
			for (n && e.d.push(+t.slice(0, n)), i -= A; n < i;) {
				e.d.push(+t.slice(n, n += A));
			}
			t = t.slice(n), n = A - t.length;
		} else n -= i;
		for (; n--;) t += '0';
		e.d.push(+t),
			C &&
			(e.e > e.constructor.maxE
				? (e.d = null, e.e = NaN)
				: e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
	} else e.e = 0, e.d = [0];
	return e;
}
function sl(e, t) {
	var r, n, i, o, s, a, u, l, c;
	if (t.indexOf('_') > -1) {
		if (t = t.replace(/(\d)_(?=\d)/g, '$1'), qo.test(t)) return Yn(e, t);
	} else if (t === 'Infinity' || t === 'NaN') {
		return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
	}
	if (tl.test(t)) r = 16, t = t.toLowerCase();
	else if (el.test(t)) r = 2;
	else if (rl.test(t)) r = 8;
	else throw Error(Ke + t);
	for (
		o = t.search(/p/i),
			o > 0
				? (u = +t.slice(o + 1), t = t.substring(2, o))
				: t = t.slice(2),
			o = t.indexOf('.'),
			s = o >= 0,
			n = e.constructor,
			s &&
			(t = t.replace('.', ''),
				a = t.length,
				o = a - o,
				i = Vo(n, new n(r), o, o * 2)),
			l = Dr(t, r, Pe),
			c = l.length - 1,
			o = c;
		l[o] === 0;
		--o
	) l.pop();
	return o < 0
		? new n(e.s * 0)
		: (e.e = $r(l, c),
			e.d = l,
			C = !1,
			s && (e = _(e, i, a * 4)),
			u && (e = e.times(Math.abs(u) < 54 ? Q(2, u) : et.pow(2, u))),
			C = !0,
			e);
}
function al(e, t) {
	var r, n = t.d.length;
	if (n < 3) return t.isZero() ? t : gt(e, 2, t, t);
	r = 1.4 * Math.sqrt(n),
		r = r > 16 ? 16 : r | 0,
		t = t.times(1 / _r(5, r)),
		t = gt(e, 2, t, t);
	for (var i, o = new e(5), s = new e(16), a = new e(20); r--;) {
		i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
	}
	return t;
}
function gt(e, t, r, n, i) {
	var o, s, a, u, l = 1, c = e.precision, p = Math.ceil(c / A);
	for (C = !1, u = r.times(r), a = new e(n);;) {
		if (
			s = _(a.times(u), new e(t++ * t++), c, 1),
				a = i ? n.plus(s) : n.minus(s),
				n = _(s.times(u), new e(t++ * t++), c, 1),
				s = a.plus(n),
				s.d[p] !== void 0
		) {
			for (o = p; s.d[o] === a.d[o] && o--;);
			if (o == -1) break;
		}
		o = a, a = n, n = s, s = o, l++;
	}
	return C = !0, s.d.length = p + 1, s;
}
function _r(e, t) {
	for (var r = e; --t;) r *= e;
	return r;
}
function Jo(e, t) {
	var r, n = t.s < 0, i = Te(e, e.precision, 1), o = i.times(.5);
	if (t = t.abs(), t.lte(o)) return $e = n ? 4 : 1, t;
	if (r = t.divToInt(i), r.isZero()) $e = n ? 3 : 2;
	else {
		if (t = t.minus(r.times(i)), t.lte(o)) {
			return $e = Io(r) ? n ? 2 : 3 : n ? 4 : 1, t;
		}
		$e = Io(r) ? n ? 1 : 4 : n ? 3 : 2;
	}
	return t.minus(i).abs();
}
function Zn(e, t, r, n) {
	var i, o, s, a, u, l, c, p, f, d = e.constructor, g = r !== void 0;
	if (
		g
			? (le(r, 1, Je), n === void 0 ? n = d.rounding : le(n, 0, 8))
			: (r = d.precision, n = d.rounding), !e.isFinite()
	) c = Ko(e);
	else {
		for (
			c = Fe(e),
				s = c.indexOf('.'),
				g
					? (i = 2,
						t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2))
					: i = t,
				s >= 0 &&
				(c = c.replace('.', ''),
					f = new d(1),
					f.e = c.length - s,
					f.d = Dr(Fe(f), 10, i),
					f.e = f.d.length),
				p = Dr(c, 10, i),
				o = u = p.length;
			p[--u] == 0;
		) p.pop();
		if (!p[0]) c = g ? '0p+0' : '0';
		else {
			if (
				s < 0
					? o--
					: (e = new d(e),
						e.d = p,
						e.e = o,
						e = _(e, f, r, n, 0, i),
						p = e.d,
						o = e.e,
						l = $o),
					s = p[r],
					a = i / 2,
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
			) for (; ++p[--r] > i - 1;) p[r] = 0, r || (++o, p.unshift(1));
			for (u = p.length; !p[u - 1]; --u);
			for (s = 0, c = ''; s < u; s++) c += Gn.charAt(p[s]);
			if (g) {
				if (u > 1) {
					if (t == 16 || t == 8) {
						for (s = t == 16 ? 4 : 3, --u; u % s; u++) c += '0';
						for (p = Dr(c, i, t), u = p.length; !p[u - 1]; --u);
						for (s = 1, c = '1.'; s < u; s++) c += Gn.charAt(p[s]);
					} else c = c.charAt(0) + '.' + c.slice(1);
				}
				c = c + (o < 0 ? 'p' : 'p+') + o;
			} else if (o < 0) {
				for (; ++o;) c = '0' + c;
				c = '0.' + c;
			} else if (++o > u) for (o -= u; o--;) c += '0';
			else o < u && (c = c.slice(0, o) + '.' + c.slice(o));
		}
		c = (t == 16 ? '0x' : t == 2 ? '0b' : t == 8 ? '0o' : '') + c;
	}
	return e.s < 0 ? '-' + c : c;
}
function ko(e, t) {
	if (e.length > t) return e.length = t, !0;
}
function ul(e) {
	return new this(e).abs();
}
function ll(e) {
	return new this(e).acos();
}
function cl(e) {
	return new this(e).acosh();
}
function pl(e, t) {
	return new this(e).plus(t);
}
function fl(e) {
	return new this(e).asin();
}
function dl(e) {
	return new this(e).asinh();
}
function ml(e) {
	return new this(e).atan();
}
function gl(e) {
	return new this(e).atanh();
}
function yl(e, t) {
	e = new this(e), t = new this(t);
	var r, n = this.precision, i = this.rounding, o = n + 4;
	return !e.s || !t.s
		? r = new this(NaN)
		: !e.d && !t.d
		? (r = Te(this, o, 1).times(t.s > 0 ? .25 : .75), r.s = e.s)
		: !t.d || e.isZero()
		? (r = t.s < 0 ? Te(this, n, i) : new this(0), r.s = e.s)
		: !e.d || t.isZero()
		? (r = Te(this, o, 1).times(.5), r.s = e.s)
		: t.s < 0
		? (this.precision = o,
			this.rounding = 1,
			r = this.atan(_(e, t, o, 1)),
			t = Te(this, o, 1),
			this.precision = n,
			this.rounding = i,
			r = e.s < 0 ? r.minus(t) : r.plus(t))
		: r = this.atan(_(e, t, o, 1)),
		r;
}
function hl(e) {
	return new this(e).cbrt();
}
function El(e) {
	return v(e = new this(e), e.e + 1, 2);
}
function bl(e, t, r) {
	return new this(e).clamp(t, r);
}
function xl(e) {
	if (!e || typeof e != 'object') throw Error(Nr + 'Object expected');
	var t,
		r,
		n,
		i = e.defaults === !0,
		o = [
			'precision',
			1,
			Je,
			'rounding',
			0,
			8,
			'toExpNeg',
			-mt,
			0,
			'toExpPos',
			0,
			mt,
			'maxE',
			0,
			mt,
			'minE',
			-mt,
			0,
			'modulo',
			0,
			9,
		];
	for (t = 0; t < o.length; t += 3) {
		if (r = o[t], i && (this[r] = Wn[r]), (n = e[r]) !== void 0) {
			if (re(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
			else throw Error(Ke + r + ': ' + n);
		}
	}
	if (r = 'crypto', i && (this[r] = Wn[r]), (n = e[r]) !== void 0) {
		if (n === !0 || n === !1 || n === 0 || n === 1) {
			if (n) {
				if (
					typeof crypto < 'u' && crypto &&
					(crypto.getRandomValues || crypto.randomBytes)
				) this[r] = !0;
				else throw Error(Lo);
			} else this[r] = !1;
		} else throw Error(Ke + r + ': ' + n);
	}
	return this;
}
function wl(e) {
	return new this(e).cos();
}
function Tl(e) {
	return new this(e).cosh();
}
function Qo(e) {
	var t, r, n;
	function i(o) {
		var s, a, u, l = this;
		if (!(l instanceof i)) return new i(o);
		if (l.constructor = i, No(o)) {
			l.s = o.s,
				C
					? !o.d || o.e > i.maxE
						? (l.e = NaN, l.d = null)
						: o.e < i.minE
						? (l.e = 0, l.d = [0])
						: (l.e = o.e, l.d = o.d.slice())
					: (l.e = o.e, l.d = o.d ? o.d.slice() : o.d);
			return;
		}
		if (u = typeof o, u === 'number') {
			if (o === 0) {
				l.s = 1 / o < 0 ? -1 : 1, l.e = 0, l.d = [0];
				return;
			}
			if (o < 0 ? (o = -o, l.s = -1) : l.s = 1, o === ~~o && o < 1e7) {
				for (s = 0, a = o; a >= 10; a /= 10) s++;
				C
					? s > i.maxE
						? (l.e = NaN, l.d = null)
						: s < i.minE
						? (l.e = 0, l.d = [0])
						: (l.e = s, l.d = [o])
					: (l.e = s, l.d = [o]);
				return;
			} else if (o * 0 !== 0) {
				o || (l.s = NaN), l.e = NaN, l.d = null;
				return;
			}
			return Yn(l, o.toString());
		} else if (u !== 'string') throw Error(Ke + o);
		return (a = o.charCodeAt(0)) === 45
			? (o = o.slice(1), l.s = -1)
			: (a === 43 && (o = o.slice(1)), l.s = 1),
			qo.test(o) ? Yn(l, o) : sl(l, o);
	}
	if (
		i.prototype = w,
			i.ROUND_UP = 0,
			i.ROUND_DOWN = 1,
			i.ROUND_CEIL = 2,
			i.ROUND_FLOOR = 3,
			i.ROUND_HALF_UP = 4,
			i.ROUND_HALF_DOWN = 5,
			i.ROUND_HALF_EVEN = 6,
			i.ROUND_HALF_CEIL = 7,
			i.ROUND_HALF_FLOOR = 8,
			i.EUCLID = 9,
			i.config = i.set = xl,
			i.clone = Qo,
			i.isDecimal = No,
			i.abs = ul,
			i.acos = ll,
			i.acosh = cl,
			i.add = pl,
			i.asin = fl,
			i.asinh = dl,
			i.atan = ml,
			i.atanh = gl,
			i.atan2 = yl,
			i.cbrt = hl,
			i.ceil = El,
			i.clamp = bl,
			i.cos = wl,
			i.cosh = Tl,
			i.div = Pl,
			i.exp = vl,
			i.floor = Ml,
			i.hypot = Al,
			i.ln = Fl,
			i.log = Cl,
			i.log10 = Sl,
			i.log2 = Rl,
			i.max = Dl,
			i.min = Ol,
			i.mod = Il,
			i.mul = kl,
			i.pow = Nl,
			i.random = $l,
			i.round = _l,
			i.sign = Ll,
			i.sin = jl,
			i.sinh = ql,
			i.sqrt = Bl,
			i.sub = Vl,
			i.sum = Ul,
			i.tan = Kl,
			i.tanh = Jl,
			i.trunc = Ql,
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
	return i.config(e), i;
}
function Pl(e, t) {
	return new this(e).div(t);
}
function vl(e) {
	return new this(e).exp();
}
function Ml(e) {
	return v(e = new this(e), e.e + 1, 3);
}
function Al() {
	var e, t, r = new this(0);
	for (C = !1, e = 0; e < arguments.length;) {
		if (t = new this(arguments[e++]), t.d) r.d && (r = r.plus(t.times(t)));
		else {
			if (t.s) return C = !0, new this(1 / 0);
			r = t;
		}
	}
	return C = !0, r.sqrt();
}
function No(e) {
	return e instanceof et || e && e.toStringTag === jo || !1;
}
function Fl(e) {
	return new this(e).ln();
}
function Cl(e, t) {
	return new this(e).log(t);
}
function Rl(e) {
	return new this(e).log(2);
}
function Sl(e) {
	return new this(e).log(10);
}
function Dl() {
	return Uo(this, arguments, 'lt');
}
function Ol() {
	return Uo(this, arguments, 'gt');
}
function Il(e, t) {
	return new this(e).mod(t);
}
function kl(e, t) {
	return new this(e).mul(t);
}
function Nl(e, t) {
	return new this(e).pow(t);
}
function $l(e) {
	var t, r, n, i, o = 0, s = new this(1), a = [];
	if (
		e === void 0 ? e = this.precision : le(e, 1, Je),
			n = Math.ceil(e / A),
			this.crypto
	) {
		if (crypto.getRandomValues) {
			for (t = crypto.getRandomValues(new Uint32Array(n)); o < n;) {
				i = t[o],
					i >= 429e7
						? t[o] = crypto.getRandomValues(new Uint32Array(1))[0]
						: a[o++] = i % 1e7;
			}
		} else if (crypto.randomBytes) {
			for (t = crypto.randomBytes(n *= 4); o < n;) {
				i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) +
					((t[o + 3] & 127) << 24),
					i >= 214e7
						? crypto.randomBytes(4).copy(t, o)
						: (a.push(i % 1e7), o += 4);
			}
			o = n / 4;
		} else throw Error(Lo);
	} else for (; o < n;) a[o++] = Math.random() * 1e7 | 0;
	for (
		n = a[--o],
			e %= A,
			n && e && (i = Q(10, A - e), a[o] = (n / i | 0) * i);
		a[o] === 0;
		o--
	) a.pop();
	if (o < 0) r = 0, a = [0];
	else {
		for (r = -1; a[0] === 0; r -= A) a.shift();
		for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
		n < A && (r -= A - n);
	}
	return s.e = r, s.d = a, s;
}
function _l(e) {
	return v(e = new this(e), e.e + 1, this.rounding);
}
function Ll(e) {
	return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function jl(e) {
	return new this(e).sin();
}
function ql(e) {
	return new this(e).sinh();
}
function Bl(e) {
	return new this(e).sqrt();
}
function Vl(e, t) {
	return new this(e).sub(t);
}
function Ul() {
	var e = 0, t = arguments, r = new this(t[e]);
	for (C = !1; r.s && ++e < t.length;) r = r.plus(t[e]);
	return C = !0, v(r, this.precision, this.rounding);
}
function Kl(e) {
	return new this(e).tan();
}
function Jl(e) {
	return new this(e).tanh();
}
function Ql(e) {
	return v(e = new this(e), e.e + 1, 1);
}
w[Symbol.for('nodejs.util.inspect.custom')] = w.toString;
w[Symbol.toStringTag] = 'Decimal';
var et = w.constructor = Qo(Wn);
Or = new et(Or);
Ir = new et(Ir);
var fe = et;
var ti = K(Fr()), Ho = K(Lr());
var Ee = class {
	constructor(t, r, n, i, o) {
		this.modelName = t,
			this.name = r,
			this.typeName = n,
			this.isList = i,
			this.isEnum = o;
	}
	_toGraphQLInputType() {
		let t = this.isList ? 'List' : '', r = this.isEnum ? 'Enum' : '';
		return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
	}
};
function jr(e) {
	return e instanceof Ee;
}
var Wo = [
		'JsonNullValueInput',
		'NullableJsonNullValueInput',
		'JsonNullValueFilter',
	],
	qr = Symbol(),
	Xn = new WeakMap(),
	ne = class {
		constructor(t) {
			t === qr ? Xn.set(this, `Prisma.${this._getName()}`) : Xn.set(
				this,
				`new Prisma.${this._getNamespace()}.${this._getName()}()`,
			);
		}
		_getName() {
			return this.constructor.name;
		}
		toString() {
			return Xn.get(this);
		}
	},
	jt = class extends ne {
		_getNamespace() {
			return 'NullTypes';
		}
	},
	qt = class extends jt {};
ei(qt, 'DbNull');
var Bt = class extends jt {};
ei(Bt, 'JsonNull');
var Vt = class extends jt {};
ei(Vt, 'AnyNull');
var yt = {
	classes: { DbNull: qt, JsonNull: Bt, AnyNull: Vt },
	instances: {
		DbNull: new qt(qr),
		JsonNull: new Bt(qr),
		AnyNull: new Vt(qr),
	},
};
function ei(e, t) {
	Object.defineProperty(e, 'name', { value: t, configurable: !0 });
}
function de(e) {
	return e instanceof Date ||
		Object.prototype.toString.call(e) === '[object Date]';
}
function Ce(e) {
	return e.toString() !== 'Invalid Date';
}
function Qe(e) {
	return et.isDecimal(e)
		? !0
		: e !== null && typeof e == 'object' && typeof e.s == 'number' &&
			typeof e.e == 'number' && typeof e.toFixed == 'function' &&
			Array.isArray(e.d);
}
var ie = (e, t) => {
		let r = {};
		for (let n of e) {
			let i = n[t];
			r[i] = n;
		}
		return r;
	},
	ht = {
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
var Gl = {
	string: 'String',
	boolean: 'Boolean',
	object: 'Json',
	symbol: 'Symbol',
};
function Et(e) {
	return typeof e == 'string' ? e : e.name;
}
function Kt(e, t) {
	return t ? `List<${e}>` : e;
}
var Wl =
		/^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/,
	Hl = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function bt(e, t) {
	let r = t?.type;
	if (e === null) return 'null';
	if (Object.prototype.toString.call(e) === '[object BigInt]') {
		return 'BigInt';
	}
	if (fe.isDecimal(e) || r === 'Decimal' && Qe(e)) return 'Decimal';
	if (Buffer.isBuffer(e)) return 'Bytes';
	if (zl(e, t)) return r.name;
	if (e instanceof ne) return e._getName();
	if (e instanceof Ee) return e._toGraphQLInputType();
	if (Array.isArray(e)) {
		let i = e.reduce((o, s) => {
			let a = bt(s, t);
			return o.includes(a) || o.push(a), o;
		}, []);
		return i.includes('Float') && i.includes('Int') && (i = ['Float']),
			`List<${i.join(' | ')}>`;
	}
	let n = typeof e;
	if (n === 'number') return Math.trunc(e) === e ? 'Int' : 'Float';
	if (de(e)) return 'DateTime';
	if (n === 'string') {
		if (Hl.test(e)) return 'UUID';
		if (new Date(e).toString() === 'Invalid Date') return 'String';
		if (Wl.test(e)) return 'DateTime';
	}
	return Gl[n];
}
function zl(e, t) {
	let r = t?.type;
	if (!Zl(r)) return !1;
	if (t?.namespace === 'prisma' && Wo.includes(r.name)) {
		let n = e?.constructor?.name;
		return typeof n == 'string' && yt.instances[n] === e &&
			r.values.includes(n);
	}
	return typeof e == 'string' && r.values.includes(e);
}
function Br(e, t) {
	return t.reduce((n, i) => {
		let o = (0, Ho.default)(e, i);
		return o < n.distance ? { distance: o, str: i } : n;
	}, {
		distance: Math.min(
			Math.floor(e.length) * 1.1,
			...t.map((n) => n.length * 3),
		),
		str: null,
	}).str;
}
function xt(e, t = !1) {
	if (typeof e == 'string') return e;
	if (e.values) {
		return `enum ${e.name} {
${(0, ti.default)(e.values.join(', '), 2)}
}`;
	}
	{
		let r = (0, ti.default)(
			e.fields.map((n) => {
				let i = `${n.name}`,
					o = `${t ? D(i) : i}${n.isRequired ? '' : '?'}: ${
						Dt(
							n.inputTypes.map((s) =>
								Kt(
									Yl(s.type) ? s.type.name : Et(s.type),
									s.isList,
								)
							).join(' | '),
						)
					}`;
				return n.isRequired ? o : N(o);
			}).join(`
`),
			2,
		);
		return `${N('type')} ${R(N(e.name))} ${N('{')}
${r}
${N('}')}`;
	}
}
function Yl(e) {
	return typeof e != 'string';
}
function Ut(e) {
	return typeof e == 'string' ? e === 'Null' ? 'null' : e : e.name;
}
function Jt(e) {
	return typeof e == 'string' ? e : e.name;
}
function ri(e, t, r = !1) {
	if (typeof e == 'string') return e === 'Null' ? 'null' : e;
	if (e.values) return e.values.join(' | ');
	let n = e,
		i = t &&
			n.fields.every((o) =>
				o.inputTypes[0].location === 'inputObjectTypes' ||
				o.inputTypes[1]?.location === 'inputObjectTypes'
			);
	return r ? Ut(e) : n.fields.reduce((o, s) => {
		let a = '';
		return !i && !s.isRequired
			? a = s.inputTypes.map((u) => Ut(u.type)).join(' | ')
			: a = s.inputTypes.map((u) => ri(u.type, s.isRequired, !0)).join(
				' | ',
			),
			o[s.name + (s.isRequired ? '' : '?')] = a,
			o;
	}, {});
}
function zo(e, t, r) {
	let n = {};
	for (let i of e) n[r(i)] = i;
	for (let i of t) {
		let o = r(i);
		n[o] || (n[o] = i);
	}
	return Object.values(n);
}
function wt(e) {
	return e.substring(0, 1).toLowerCase() + e.substring(1);
}
function Yo(e) {
	return e.endsWith('GroupByOutputType');
}
function Zl(e) {
	return typeof e == 'object' && e !== null && typeof e.name == 'string' &&
		Array.isArray(e.values);
}
var Vr = class {
		constructor({ datamodel: t }) {
			this.datamodel = t,
				this.datamodelEnumMap = this.getDatamodelEnumMap(),
				this.modelMap = this.getModelMap(),
				this.typeMap = this.getTypeMap(),
				this.typeAndModelMap = this.getTypeModelMap();
		}
		getDatamodelEnumMap() {
			return ie(this.datamodel.enums, 'name');
		}
		getModelMap() {
			return { ...ie(this.datamodel.models, 'name') };
		}
		getTypeMap() {
			return { ...ie(this.datamodel.types, 'name') };
		}
		getTypeModelMap() {
			return { ...this.getTypeMap(), ...this.getModelMap() };
		}
	},
	Ur = class {
		constructor({ mappings: t }) {
			this.mappings = t, this.mappingsMap = this.getMappingsMap();
		}
		getMappingsMap() {
			return ie(this.mappings.modelOperations, 'model');
		}
		getOtherOperationNames() {
			return [
				Object.values(this.mappings.otherOperations.write),
				Object.values(this.mappings.otherOperations.read),
			].flat();
		}
	},
	Kr = class {
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
						!ht[r.outputType.type] &&
						(r.outputType.type =
							this.outputTypeMap[r.outputType.type] ||
							this.outputTypeMap[r.outputType.type] ||
							this.enumMap[r.outputType.type] ||
							r.outputType.type);
				}
				t.fieldMap = ie(t.fields, 'name');
			}
			for (let t of this.outputTypes.prisma) {
				for (let r of t.fields) {
					typeof r.outputType.type == 'string' &&
						!ht[r.outputType.type] &&
						(r.outputType.type =
							this.outputTypeMap[r.outputType.type] ||
							this.outputTypeMap[r.outputType.type] ||
							this.enumMap[r.outputType.type] ||
							r.outputType.type);
				}
				t.fieldMap = ie(t.fields, 'name');
			}
		}
		resolveInputTypes() {
			let t = this.inputObjectTypes.prisma;
			this.inputObjectTypes.model &&
				t.push(...this.inputObjectTypes.model);
			for (let r of t) {
				for (let n of r.fields) {
					for (let i of n.inputTypes) {
						let o = i.type;
						typeof o == 'string' && !ht[o] &&
							(this.inputTypeMap[o] || this.enumMap[o]) &&
							(i.type = this.inputTypeMap[o] || this.enumMap[o] ||
								o);
					}
				}
				r.fieldMap = ie(r.fields, 'name');
			}
		}
		resolveFieldArgumentTypes() {
			for (let t of this.outputTypes.prisma) {
				for (let r of t.fields) {
					for (let n of r.args) {
						for (let i of n.inputTypes) {
							let o = i.type;
							typeof o == 'string' && !ht[o] &&
								(i.type = this.inputTypeMap[o] ||
									this.enumMap[o] || o);
						}
					}
				}
			}
			for (let t of this.outputTypes.model) {
				for (let r of t.fields) {
					for (let n of r.args) {
						for (let i of n.inputTypes) {
							let o = i.type;
							typeof o == 'string' && !ht[o] &&
								(i.type = this.inputTypeMap[o] ||
									this.enumMap[o] || i.type);
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
				...ie(this.schema.enumTypes.prisma, 'name'),
				...this.schema.enumTypes.model
					? ie(this.schema.enumTypes.model, 'name')
					: void 0,
			};
		}
		hasEnumInNamespace(t, r) {
			return this.schema.enumTypes[r]?.find((n) => n.name === t) !==
				void 0;
		}
		getMergedOutputTypeMap() {
			return {
				...ie(this.outputTypes.model, 'name'),
				...ie(this.outputTypes.prisma, 'name'),
			};
		}
		getInputTypeMap() {
			return {
				...this.schema.inputObjectTypes.model
					? ie(this.schema.inputObjectTypes.model, 'name')
					: void 0,
				...ie(this.schema.inputObjectTypes.prisma, 'name'),
			};
		}
		getRootFieldMap() {
			return {
				...ie(this.queryType.fields, 'name'),
				...ie(this.mutationType.fields, 'name'),
			};
		}
	},
	Ge = class {
		constructor(t) {
			return Object.assign(this, new Vr(t), new Ur(t), new Kr(t));
		}
	};
Oo(Ge, [Vr, Ur, Kr]);
var Qa = require('async_hooks'),
	Ga = require('events'),
	Wa = K(require('fs')),
	dr = K(require('path'));
var Xo = K(Zo());
function es(e) {
	return { ...e, mappings: Xl(e.mappings, e.datamodel) };
}
function Xl(e, t) {
	return {
		modelOperations: e.modelOperations.filter((n) => {
			let i = t.models.find((o) => o.name === n.model);
			if (!i) throw new Error(`Mapping without model ${n.model}`);
			return i.fields.some((o) => o.kind !== 'object');
		}).map((n) => ({
			model: n.model,
			plural: (0, Xo.default)(wt(n.model)),
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
function ts(e) {
	return es(e);
}
function oi({ error: e, user_facing_error: t }, r) {
	return t.error_code
		? new te(t.message, {
			code: t.error_code,
			clientVersion: r,
			meta: t.meta,
			batchRequestIdx: t.batch_request_idx,
		})
		: new he(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
var Jr = class {};
function rs(e, t) {
	return ec(e)
		? !t || t.kind === 'itx' ? { batch: e, transaction: !1 } : {
			batch: e,
			transaction: !0,
			isolationLevel: t.options.isolationLevel,
		}
		: {
			batch: e,
			transaction: t?.kind === 'batch'
				? { isolationLevel: t.options.isolationLevel }
				: void 0,
		};
}
function ec(e) {
	return typeof e[0].query == 'string';
}
var Qr = class extends Error {
	constructor(r, n) {
		super(r);
		this.clientVersion = n.clientVersion, this.cause = n.cause;
	}
	get [Symbol.toStringTag]() {
		return this.name;
	}
};
var ce = class extends Qr {
	constructor(r, n) {
		super(r, n);
		this.isRetryable = n.isRetryable ?? !0;
	}
};
function I(e, t) {
	return { ...e, isRetryable: t };
}
var Tt = class extends ce {
	constructor(r) {
		super('This request must be retried', I(r, !0));
		this.name = 'ForcedRetryError';
		this.code = 'P5001';
	}
};
F(Tt, 'ForcedRetryError');
var _e = class extends ce {
	constructor(r, n) {
		super(r, I(n, !1));
		this.name = 'InvalidDatasourceError';
		this.code = 'P5002';
	}
};
F(_e, 'InvalidDatasourceError');
var Le = class extends ce {
	constructor(r, n) {
		super(r, I(n, !1));
		this.name = 'NotImplementedYetError';
		this.code = 'P5004';
	}
};
F(Le, 'NotImplementedYetError');
var j = class extends ce {
	constructor(r, n) {
		super(r, n);
		this.response = n.response;
		let i = this.response.headers?.['prisma-request-id'];
		if (i) {
			let o = `(The request id was: ${i})`;
			this.message = this.message + ' ' + o;
		}
	}
};
var tt = class extends j {
	constructor(r) {
		super('Schema needs to be uploaded', I(r, !0));
		this.name = 'SchemaMissingError';
		this.code = 'P5005';
	}
};
F(tt, 'SchemaMissingError');
var si = 'This request could not be understood by the server',
	Qt = class extends j {
		constructor(r, n, i) {
			super(n || si, I(r, !1));
			this.name = 'BadRequestError';
			this.code = 'P5000';
			i && (this.code = i);
		}
	};
F(Qt, 'BadRequestError');
var Gt = class extends j {
	constructor(r, n) {
		super('Engine not started: healthcheck timeout', I(r, !0));
		this.name = 'HealthcheckTimeoutError';
		this.code = 'P5013';
		this.logs = n;
	}
};
F(Gt, 'HealthcheckTimeoutError');
var Wt = class extends j {
	constructor(r, n, i) {
		super(n, I(r, !0));
		this.name = 'EngineStartupError';
		this.code = 'P5014';
		this.logs = i;
	}
};
F(Wt, 'EngineStartupError');
var Ht = class extends j {
	constructor(r) {
		super('Engine version is not supported', I(r, !1));
		this.name = 'EngineVersionNotSupportedError';
		this.code = 'P5012';
	}
};
F(Ht, 'EngineVersionNotSupportedError');
var ai = 'Request timed out',
	zt = class extends j {
		constructor(r, n = ai) {
			super(n, I(r, !1));
			this.name = 'GatewayTimeoutError';
			this.code = 'P5009';
		}
	};
F(zt, 'GatewayTimeoutError');
var tc = 'Interactive transaction error',
	Yt = class extends j {
		constructor(r, n = tc) {
			super(n, I(r, !1));
			this.name = 'InteractiveTransactionError';
			this.code = 'P5015';
		}
	};
F(Yt, 'InteractiveTransactionError');
var rc = 'Request parameters are invalid',
	Zt = class extends j {
		constructor(r, n = rc) {
			super(n, I(r, !1));
			this.name = 'InvalidRequestError';
			this.code = 'P5011';
		}
	};
F(Zt, 'InvalidRequestError');
var ui = 'Requested resource does not exist',
	Xt = class extends j {
		constructor(r, n = ui) {
			super(n, I(r, !1));
			this.name = 'NotFoundError';
			this.code = 'P5003';
		}
	};
F(Xt, 'NotFoundError');
var li = 'Unknown server error',
	Pt = class extends j {
		constructor(r, n, i) {
			super(n || li, I(r, !0));
			this.name = 'ServerError';
			this.code = 'P5006';
			this.logs = i;
		}
	};
F(Pt, 'ServerError');
var ci = 'Unauthorized, check your connection string',
	er = class extends j {
		constructor(r, n = ci) {
			super(n, I(r, !1));
			this.name = 'UnauthorizedError';
			this.code = 'P5007';
		}
	};
F(er, 'UnauthorizedError');
var pi = 'Usage exceeded, retry again later',
	tr = class extends j {
		constructor(r, n = pi) {
			super(n, I(r, !0));
			this.name = 'UsageExceededError';
			this.code = 'P5008';
		}
	};
F(tr, 'UsageExceededError');
async function nc(e) {
	let t;
	try {
		t = await e.text();
	} catch {
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
	} catch {
		return t === ''
			? { type: 'EmptyError' }
			: { type: 'UnknownTextError', body: t };
	}
}
async function rr(e, t) {
	if (e.ok) return;
	let r = { clientVersion: t, response: e }, n = await nc(e);
	if (n.type === 'QueryEngineError') {
		throw new te(n.body.message, {
			code: n.body.error_code,
			clientVersion: t,
		});
	}
	if (n.type === 'DataProxyError') {
		if (n.body === 'InternalDataProxyError') {
			throw new Pt(r, 'Internal Data Proxy error');
		}
		if ('EngineNotStarted' in n.body) {
			if (n.body.EngineNotStarted.reason === 'SchemaMissing') {
				return new tt(r);
			}
			if (
				n.body.EngineNotStarted.reason === 'EngineVersionNotSupported'
			) throw new Ht(r);
			if ('EngineStartupError' in n.body.EngineNotStarted.reason) {
				let { msg: i, logs: o } =
					n.body.EngineNotStarted.reason.EngineStartupError;
				throw new Wt(r, i, o);
			}
			if ('KnownEngineStartupError' in n.body.EngineNotStarted.reason) {
				let { msg: i, error_code: o } =
					n.body.EngineNotStarted.reason.KnownEngineStartupError;
				throw new ue(i, t, o);
			}
			if ('HealthcheckTimeout' in n.body.EngineNotStarted.reason) {
				let { logs: i } =
					n.body.EngineNotStarted.reason.HealthcheckTimeout;
				throw new Gt(r, i);
			}
		}
		if ('InteractiveTransactionMisrouted' in n.body) {
			let i = {
				IDParseError: 'Could not parse interactive transaction ID',
				NoQueryEngineFoundError:
					'Could not find Query Engine for the specified host and transaction ID',
				TransactionStartError:
					'Could not start interactive transaction',
			};
			throw new Yt(r, i[n.body.InteractiveTransactionMisrouted.reason]);
		}
		if ('InvalidRequestError' in n.body) {
			throw new Zt(r, n.body.InvalidRequestError.reason);
		}
	}
	if (e.status === 401 || e.status === 403) throw new er(r, vt(ci, n));
	if (e.status === 404) return new Xt(r, vt(ui, n));
	if (e.status === 429) throw new tr(r, vt(pi, n));
	if (e.status === 504) throw new zt(r, vt(ai, n));
	if (e.status >= 500) throw new Pt(r, vt(li, n));
	if (e.status >= 400) throw new Qt(r, vt(si, n));
}
function vt(e, t) {
	return t.type === 'EmptyError' ? e : `${e}: ${JSON.stringify(t)}`;
}
function ns(e) {
	let t = Math.pow(2, e) * 50,
		r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
		n = t + r;
	return new Promise((i) => setTimeout(() => i(n), n));
}
var is = {
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
var nr = class extends ce {
	constructor(r, n) {
		super(
			`Cannot fetch data from service:
${r}`,
			I(n, !0),
		);
		this.name = 'RequestError';
		this.code = 'P5010';
	}
};
F(nr, 'RequestError');
function os() {
	return typeof self > 'u' ? 'node' : 'browser';
}
async function rt(e, t, r = (n) => n) {
	let n = t.clientVersion, i = os();
	try {
		return i === 'browser' ? await r(fetch)(e, t) : await r(fi)(e, t);
	} catch (o) {
		let s = o.message ?? 'Unknown error';
		throw new nr(s, { clientVersion: n });
	}
}
function oc(e) {
	return { ...e.headers, 'Content-Type': 'application/json' };
}
function sc(e) {
	return { method: e.method, headers: oc(e) };
}
function ac(e, t) {
	return {
		text: () => Promise.resolve(Buffer.concat(e).toString()),
		json: () => Promise.resolve(JSON.parse(Buffer.concat(e).toString())),
		ok: t.statusCode >= 200 && t.statusCode <= 299,
		status: t.statusCode,
		url: t.url,
		headers: t.headers,
	};
}
async function fi(e, t = {}) {
	let r = uc('https'), n = sc(t), i = [], { origin: o } = new URL(e);
	return new Promise((s, a) => {
		let u = r.request(e, n, (l) => {
			let { statusCode: c, headers: { location: p } } = l;
			c >= 301 && c <= 399 && p &&
			(p.startsWith('http') === !1 ? s(fi(`${o}${p}`, t)) : s(fi(p, t))),
				l.on('data', (f) => i.push(f)),
				l.on('end', () => s(ac(i, l))),
				l.on('error', a);
		});
		u.on('error', a), u.end(t.body ?? '');
	});
}
var uc = typeof require < 'u' ? require : () => {};
var lc = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
	ss = ee('prisma:client:dataproxyEngine');
async function cc(e) {
	let t = is['@prisma/engines-version'], r = e.clientVersion ?? 'unknown';
	if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) {
		return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
	}
	let [n, i] = r?.split('-') ?? [];
	if (i === void 0 && lc.test(n)) return n;
	if (i !== void 0 || r === '0.0.0') {
		if (process.env.TEST_DATA_PROXY !== void 0) return '0.0.0';
		let [o] = t.split('-') ?? [],
			[s, a, u] = o.split('.'),
			l = pc(`<=${s}.${a}.${u}`),
			c = await rt(l, { clientVersion: r });
		if (!c.ok) {
			throw new Error(
				`Failed to fetch stable Prisma version, unpkg.com status ${c.status} ${c.statusText}, response body: ${
					await c.text() || '<empty body>'
				}`,
			);
		}
		let p = await c.text();
		ss('length of body fetched from unpkg.com', p.length);
		let f;
		try {
			f = JSON.parse(p);
		} catch (d) {
			throw console.error(
				'JSON.parse error: body fetched from unpkg.com: ',
				p,
			),
				d;
		}
		return f.version;
	}
	throw new Le(
		'Only `major.minor.patch` versions are supported by Prisma Data Proxy.',
		{ clientVersion: r },
	);
}
async function as(e) {
	let t = await cc(e);
	return ss('version', t), t;
}
function pc(e) {
	return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var us = 3,
	fc = Promise.resolve(),
	di = ee('prisma:client:dataproxyEngine'),
	mi = class {
		constructor(
			{ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i },
		) {
			this.apiKey = t,
				this.tracingHelper = r,
				this.logLevel = n,
				this.logQueries = i;
		}
		build({ traceparent: t, interactiveTransaction: r } = {}) {
			let n = { Authorization: `Bearer ${this.apiKey}` };
			this.tracingHelper.isEnabled() &&
			(n.traceparent = t ?? this.tracingHelper.getTraceParent()),
				r && (n['X-transaction-id'] = r.id);
			let i = this.buildCaptureSettings();
			return i.length > 0 && (n['X-capture-telemetry'] = i.join(', ')), n;
		}
		buildCaptureSettings() {
			let t = [];
			return this.tracingHelper.isEnabled() && t.push('tracing'),
				this.logLevel && t.push(this.logLevel),
				this.logQueries && t.push('query'),
				t;
		}
	},
	ir = class extends Jr {
		constructor(r) {
			super();
			this.config = r,
				this.env = { ...this.config.env, ...process.env },
				this.inlineSchema = r.inlineSchema ?? '',
				this.inlineDatasources = r.inlineDatasources ?? {},
				this.inlineSchemaHash = r.inlineSchemaHash ?? '',
				this.clientVersion = r.clientVersion ?? 'unknown',
				this.logEmitter = r.logEmitter,
				this.tracingHelper = this.config.tracingHelper;
			let [n, i] = this.extractHostAndApiKey();
			this.host = n,
				this.headerBuilder = new mi({
					apiKey: i,
					tracingHelper: this.tracingHelper,
					logLevel: r.logLevel,
					logQueries: r.logQueries,
				}),
				this.remoteClientVersion = fc.then(() => as(this.config)),
				di('host', this.host);
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
			r?.logs?.length && r.logs.forEach((n) => {
				switch (n.level) {
					case 'debug':
					case 'error':
					case 'trace':
					case 'warn':
					case 'info':
						break;
					case 'query': {
						let i = typeof n.attributes.query == 'string'
							? n.attributes.query
							: '';
						if (!this.tracingHelper.isEnabled()) {
							let [o] = i.split('/* traceparent');
							i = o;
						}
						this.logEmitter.emit('query', {
							query: i,
							timestamp: n.timestamp,
							duration: n.attributes.duration_ms,
							params: n.attributes.params,
							target: n.attributes.target,
						});
					}
				}
			}),
				r?.traces?.length &&
				this.tracingHelper.createEngineSpan({
					span: !0,
					spans: r.traces,
				});
		}
		on(r, n) {
			if (r === 'beforeExit') {
				throw new Le('beforeExit event is not yet supported', {
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
			throw new Le('getDmmf is not yet supported', {
				clientVersion: this.clientVersion,
			});
		}
		async uploadSchema() {
			let r = { name: 'schemaUpload', internal: !0 };
			return this.tracingHelper.runInChildSpan(r, async () => {
				let n = await rt(await this.url('schema'), {
					method: 'PUT',
					headers: this.headerBuilder.build(),
					body: this.inlineSchema,
					clientVersion: this.clientVersion,
				});
				n.ok || di('schema response status', n.status);
				let i = await rr(n, this.clientVersion);
				if (i) {
					throw this.logEmitter.emit('warn', {
						message: `Error while uploading schema: ${i.message}`,
					}),
						i;
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
				interactiveTransaction: i,
				customDataProxyFetch: o,
			},
		) {
			return this.requestInternal({
				body: r,
				traceparent: n,
				interactiveTransaction: i,
				customDataProxyFetch: o,
			});
		}
		async requestBatch(
			r,
			{ traceparent: n, transaction: i, customDataProxyFetch: o },
		) {
			let s = i?.kind === 'itx' ? i.options : void 0,
				a = rs(r, i),
				{ batchResult: u, elapsed: l } = await this.requestInternal({
					body: a,
					customDataProxyFetch: o,
					interactiveTransaction: s,
					traceparent: n,
				});
			return u.map((c) =>
				'errors' in c && c.errors.length > 0
					? oi(c.errors[0], this.clientVersion)
					: { data: c, elapsed: l }
			);
		}
		requestInternal(
			{
				body: r,
				traceparent: n,
				customDataProxyFetch: i,
				interactiveTransaction: o,
			},
		) {
			return this.withRetry({
				actionGerund: 'querying',
				callback: async ({ logHttpCall: s }) => {
					let a = o
						? `${o.payload.endpoint}/graphql`
						: await this.url('graphql');
					s(a);
					let u = await rt(a, {
						method: 'POST',
						headers: this.headerBuilder.build({
							traceparent: n,
							interactiveTransaction: o,
						}),
						body: JSON.stringify(r),
						clientVersion: this.clientVersion,
					}, i);
					u.ok || di('graphql response status', u.status);
					let l = await rr(u, this.clientVersion);
					await this.handleError(l);
					let c = await u.json(), p = c.extensions;
					if (p && this.propagateResponseExtensions(p), c.errors) {
						throw c.errors.length === 1
							? oi(c.errors[0], this.config.clientVersion)
							: new he(c.errors, {
								clientVersion: this.config.clientVersion,
							});
					}
					return c;
				},
			});
		}
		async transaction(r, n, i) {
			let o = {
				start: 'starting',
				commit: 'committing',
				rollback: 'rolling back',
			};
			return this.withRetry({
				actionGerund: `${o[r]} transaction`,
				callback: async ({ logHttpCall: s }) => {
					if (r === 'start') {
						let a = JSON.stringify({
								max_wait: i?.maxWait ?? 2e3,
								timeout: i?.timeout ?? 5e3,
								isolation_level: i?.isolationLevel,
							}),
							u = await this.url('transaction/start');
						s(u);
						let l = await rt(u, {
								method: 'POST',
								headers: this.headerBuilder.build({
									traceparent: n.traceparent,
								}),
								body: a,
								clientVersion: this.clientVersion,
							}),
							c = await rr(l, this.clientVersion);
						await this.handleError(c);
						let p = await l.json(), f = p.extensions;
						f && this.propagateResponseExtensions(f);
						let d = p.id, g = p['data-proxy'].endpoint;
						return { id: d, payload: { endpoint: g } };
					} else {
						let a = `${i.payload.endpoint}/${r}`;
						s(a);
						let u = await rt(a, {
								method: 'POST',
								headers: this.headerBuilder.build({
									traceparent: n.traceparent,
								}),
								clientVersion: this.clientVersion,
							}),
							c = (await u.json()).extensions;
						c && this.propagateResponseExtensions(c);
						let p = await rr(u, this.clientVersion);
						await this.handleError(p);
						return;
					}
				},
			});
		}
		extractHostAndApiKey() {
			let r = this.mergeOverriddenDatasources(),
				n = Object.keys(r)[0],
				i = r[n],
				o = this.resolveDatasourceURL(n, i),
				s;
			try {
				s = new URL(o);
			} catch {
				throw new _e('Could not parse URL of the datasource', {
					clientVersion: this.clientVersion,
				});
			}
			let { protocol: a, host: u, searchParams: l } = s;
			if (a !== 'prisma:') {
				throw new _e(
					'Datasource URL must use prisma:// protocol when --data-proxy is used',
					{ clientVersion: this.clientVersion },
				);
			}
			let c = l.get('api_key');
			if (c === null || c.length < 1) {
				throw new _e('No valid API key found in the datasource URL', {
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
				let i = n.url.fromEnvVar, o = this.env[i];
				if (o === void 0) {
					throw new _e(
						`Datasource "${r}" references an environment variable "${i}" that is not set`,
						{ clientVersion: this.clientVersion },
					);
				}
				return o;
			}
			throw new _e(
				`Datasource "${r}" specification is invalid: both value and fromEnvVar are null`,
				{ clientVersion: this.clientVersion },
			);
		}
		metrics() {
			throw new Le('Metric are not yet supported for Data Proxy', {
				clientVersion: this.clientVersion,
			});
		}
		async withRetry(r) {
			for (let n = 0;; n++) {
				let i = (o) => {
					this.logEmitter.emit('info', {
						message: `Calling ${o} (n=${n})`,
					});
				};
				try {
					return await r.callback({ logHttpCall: i });
				} catch (o) {
					if (!(o instanceof ce) || !o.isRetryable) throw o;
					if (n >= us) throw o instanceof Tt ? o.cause : o;
					this.logEmitter.emit('warn', {
						message: `Attempt ${
							n + 1
						}/${us} failed for ${r.actionGerund}: ${
							o.message ?? '(unknown)'
						}`,
					});
					let s = await ns(n);
					this.logEmitter.emit('warn', {
						message: `Retrying after ${s}ms`,
					});
				}
			}
		}
		async handleError(r) {
			if (r instanceof tt) {
				throw await this.uploadSchema(),
					new Tt({ clientVersion: this.clientVersion, cause: r });
			}
			if (r) throw r;
		}
	};
var nt = K(Fr());
var xi = K(Cr());
var Re = class {
	constructor() {
		this._map = new Map();
	}
	get(t) {
		return this._map.get(t)?.value;
	}
	set(t, r) {
		this._map.set(t, { value: r });
	}
	getOrCreate(t, r) {
		let n = this._map.get(t);
		if (n) return n.value;
		let i = r();
		return this.set(t, i), i;
	}
};
function be(e) {
	return e.replace(/^./, (t) => t.toLowerCase());
}
function cs(e, t, r) {
	let n = be(r);
	return !t.result || !(t.result.$allModels || t.result[n]) ? e : dc({
		...e,
		...ls(t.name, e, t.result.$allModels),
		...ls(t.name, e, t.result[n]),
	});
}
function dc(e) {
	let t = new Re(),
		r = (n, i) =>
			t.getOrCreate(
				n,
				() =>
					i.has(n)
						? [n]
						: (i.add(n),
							e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]),
			);
	return ft(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function ls(e, t, r) {
	return r
		? ft(
			r,
			({ needs: n, compute: i }, o) => ({
				name: o,
				needs: n ? Object.keys(n).filter((s) => n[s]) : [],
				compute: mc(t, o, i),
			}),
		)
		: {};
}
function mc(e, t, r) {
	let n = e?.[t]?.compute;
	return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function Gr(e, t) {
	if (!t) return e;
	let r = { ...e };
	for (let n of Object.values(t)) {
		if (!!e[n.name]) for (let i of n.needs) r[i] = !0;
	}
	return r;
}
var ys = K(Fr());
var gs = K(require('fs'));
var ps = {
	keyword: qe,
	entity: qe,
	value: (e) => R(at(e)),
	punctuation: at,
	directive: qe,
	function: qe,
	variable: (e) => R(at(e)),
	string: (e) => R(D(e)),
	boolean: st,
	number: qe,
	comment: hr,
};
var gc = (e) => e,
	Wr = {},
	yc = 0,
	S = {
		manual: Wr.Prism && Wr.Prism.manual,
		disableWorkerMessageHandler: Wr.Prism &&
			Wr.Prism.disableWorkerMessageHandler,
		util: {
			encode: function (e) {
				if (e instanceof ve) {
					let t = e;
					return new ve(t.type, S.util.encode(t.content), t.alias);
				} else {return Array.isArray(e)
						? e.map(S.util.encode)
						: e.replace(/&/g, '&amp;').replace(/</g, '&lt;')
							.replace(/\u00a0/g, ' ');}
			},
			type: function (e) {
				return Object.prototype.toString.call(e).slice(8, -1);
			},
			objId: function (e) {
				return e.__id ||
					Object.defineProperty(e, '__id', { value: ++yc }),
					e.__id;
			},
			clone: function e(t, r) {
				let n, i, o = S.util.type(t);
				switch (r = r || {}, o) {
					case 'Object':
						if (i = S.util.objId(t), r[i]) return r[i];
						n = {}, r[i] = n;
						for (let s in t) {
							t.hasOwnProperty(s) && (n[s] = e(t[s], r));
						}
						return n;
					case 'Array':
						return i = S.util.objId(t),
							r[i]
								? r[i]
								: (n = [],
									r[i] = n,
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
				let r = S.util.clone(S.languages[e]);
				for (let n in t) r[n] = t[n];
				return r;
			},
			insertBefore: function (e, t, r, n) {
				n = n || S.languages;
				let i = n[e], o = {};
				for (let a in i) {
					if (i.hasOwnProperty(a)) {
						if (a == t) {
							for (let u in r) {
								r.hasOwnProperty(u) && (o[u] = r[u]);
							}
						}
						r.hasOwnProperty(a) || (o[a] = i[a]);
					}
				}
				let s = n[e];
				return n[e] = o,
					S.languages.DFS(S.languages, function (a, u) {
						u === s && a != e && (this[a] = o);
					}),
					o;
			},
			DFS: function e(t, r, n, i) {
				i = i || {};
				let o = S.util.objId;
				for (let s in t) {
					if (t.hasOwnProperty(s)) {
						r.call(t, s, t[s], n || s);
						let a = t[s], u = S.util.type(a);
						u === 'Object' && !i[o(a)]
							? (i[o(a)] = !0, e(a, r, null, i))
							: u === 'Array' && !i[o(a)] &&
								(i[o(a)] = !0, e(a, r, s, i));
					}
				}
			},
		},
		plugins: {},
		highlight: function (e, t, r) {
			let n = { code: e, grammar: t, language: r };
			return S.hooks.run('before-tokenize', n),
				n.tokens = S.tokenize(n.code, n.grammar),
				S.hooks.run('after-tokenize', n),
				ve.stringify(S.util.encode(n.tokens), n.language);
		},
		matchGrammar: function (e, t, r, n, i, o, s) {
			for (let m in r) {
				if (!r.hasOwnProperty(m) || !r[m]) continue;
				if (m == s) return;
				let b = r[m];
				b = S.util.type(b) === 'Array' ? b : [b];
				for (let h = 0; h < b.length; ++h) {
					let x = b[h],
						E = x.inside,
						y = !!x.lookbehind,
						T = !!x.greedy,
						M = 0,
						P = x.alias;
					if (T && !x.pattern.global) {
						let k = x.pattern.toString().match(/[imuy]*$/)[0];
						x.pattern = RegExp(x.pattern.source, k + 'g');
					}
					x = x.pattern || x;
					for (
						let k = n, B = i;
						k < t.length;
						B += t[k].length, ++k
					) {
						let V = t[k];
						if (t.length > e.length) return;
						if (V instanceof ve) continue;
						if (T && k != t.length - 1) {
							x.lastIndex = B;
							var p = x.exec(e);
							if (!p) break;
							var c = p.index + (y ? p[1].length : 0),
								f = p.index + p[0].length,
								a = k,
								u = B;
							for (
								let $ = t.length;
								a < $ &&
								(u < f || !t[a].type && !t[a - 1].greedy);
								++a
							) u += t[a].length, c >= u && (++k, B = u);
							if (t[k] instanceof ve) continue;
							l = a - k, V = e.slice(B, u), p.index -= B;
						} else {
							x.lastIndex = 0;
							var p = x.exec(V), l = 1;
						}
						if (!p) {
							if (o) break;
							continue;
						}
						y && (M = p[1] ? p[1].length : 0);
						var c = p.index + M,
							p = p[0].slice(M),
							f = c + p.length,
							d = V.slice(0, c),
							g = V.slice(f);
						let Z = [k, l];
						d && (++k, B += d.length, Z.push(d));
						let ot = new ve(m, E ? S.tokenize(p, E) : p, P, p, T);
						if (
							Z.push(ot),
								g && Z.push(g),
								Array.prototype.splice.apply(t, Z),
								l != 1 && S.matchGrammar(e, t, r, k, B, !0, m),
								o
						) break;
					}
				}
			}
		},
		tokenize: function (e, t) {
			let r = [e], n = t.rest;
			if (n) {
				for (let i in n) t[i] = n[i];
				delete t.rest;
			}
			return S.matchGrammar(e, r, t, 0, 0, !1), r;
		},
		hooks: {
			all: {},
			add: function (e, t) {
				let r = S.hooks.all;
				r[e] = r[e] || [], r[e].push(t);
			},
			run: function (e, t) {
				let r = S.hooks.all[e];
				if (!(!r || !r.length)) for (var n = 0, i; i = r[n++];) i(t);
			},
		},
		Token: ve,
	};
S.languages.clike = {
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
S.languages.javascript = S.languages.extend('clike', {
	'class-name': [S.languages.clike['class-name'], {
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
S.languages.javascript['class-name'][0].pattern =
	/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
S.languages.insertBefore('javascript', 'keyword', {
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
		inside: S.languages.javascript,
	}, {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
		inside: S.languages.javascript,
	}, {
		pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
		lookbehind: !0,
		inside: S.languages.javascript,
	}, {
		pattern:
			/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
		lookbehind: !0,
		inside: S.languages.javascript,
	}],
	constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
S.languages.markup && S.languages.markup.tag.addInlined('script', 'javascript');
S.languages.js = S.languages.javascript;
S.languages.typescript = S.languages.extend('javascript', {
	keyword:
		/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
	builtin:
		/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
S.languages.ts = S.languages.typescript;
function ve(e, t, r, n, i) {
	this.type = e,
		this.content = t,
		this.alias = r,
		this.length = (n || '').length | 0,
		this.greedy = !!i;
}
ve.stringify = function (e, t) {
	return typeof e == 'string' ? e : Array.isArray(e)
		? e.map(function (r) {
			return ve.stringify(r, t);
		}).join('')
		: hc(e.type)(e.content);
};
function hc(e) {
	return ps[e] || gc;
}
function fs(e) {
	return Ec(e, S.languages.javascript);
}
function Ec(e, t) {
	return S.tokenize(e, t).map((n) => ve.stringify(n)).join('');
}
var ds = K(Ln());
function ms(e) {
	return (0, ds.default)(e);
}
var Me = class {
	static read(t) {
		let r;
		try {
			r = gs.default.readFileSync(t, 'utf-8');
		} catch {
			return null;
		}
		return Me.fromContent(r);
	}
	static fromContent(t) {
		let r = t.split(/\r?\n/);
		return new Me(1, r);
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
		let n = t - this.firstLineNumber, i = [...this.lines];
		return i[n] = r(i[n]), new Me(this.firstLineNumber, i);
	}
	mapLines(t) {
		return new Me(
			this.firstLineNumber,
			this.lines.map((r, n) => t(r, this.firstLineNumber + n)),
		);
	}
	lineAt(t) {
		return this.lines[t - this.firstLineNumber];
	}
	prependSymbolAt(t, r) {
		return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
	}
	slice(t, r) {
		let n = this.lines.slice(t - 1, r).join(`
`);
		return new Me(
			t,
			ms(n).split(`
`),
		);
	}
	highlight() {
		let t = fs(this.toString());
		return new Me(
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
var bc = {
		red: O,
		gray: hr,
		dim: N,
		bold: R,
		underline: we,
		highlightSource: (e) => e.highlight(),
	},
	xc = {
		red: (e) => e,
		gray: (e) => e,
		dim: (e) => e,
		bold: (e) => e,
		underline: (e) => e,
		highlightSource: (e) => e,
	};
function wc(
	{
		callsite: e,
		message: t,
		originalMethod: r,
		isPanic: n,
		callArguments: i,
	},
	o,
) {
	let s = {
		functionName: `prisma.${r}()`,
		message: t,
		isPanic: n ?? !1,
		callArguments: i,
	};
	if (!e || typeof window < 'u' || process.env.NODE_ENV === 'production') {
		return s;
	}
	let a = e.getLocation();
	if (!a || !a.lineNumber || !a.columnNumber) return s;
	let u = Math.max(1, a.lineNumber - 3),
		l = Me.read(a.fileName)?.slice(u, a.lineNumber),
		c = l?.lineAt(a.lineNumber);
	if (l && c) {
		let p = Pc(c), f = Tc(c);
		if (!f) return s;
		s.functionName = `${f.code})`,
			s.location = a,
			n || (l = l.mapLineAt(a.lineNumber, (g) =>
				g.slice(0, f.openingBraceIndex))),
			l = o.highlightSource(l);
		let d = String(l.lastLineNumber).length;
		if (
			s.contextLines = l.mapLines((g, m) =>
				o.gray(String(m).padStart(d)) + ' ' + g
			).mapLines((g) => o.dim(g)).prependSymbolAt(
				a.lineNumber,
				o.bold(o.red('\u2192')),
			), i
		) {
			let g = p + d + 1;
			g += 2, s.callArguments = (0, ys.default)(i, g).slice(g);
		}
	}
	return s;
}
function Tc(e) {
	let t = Object.keys(ye.ModelAction).join('|'),
		n = new RegExp(String.raw`\.(${t})\(`).exec(e);
	if (n) {
		let i = n.index + n[0].length, o = e.lastIndexOf(' ', n.index) + 1;
		return { code: e.slice(o, i), openingBraceIndex: i };
	}
	return null;
}
function Pc(e) {
	let t = 0;
	for (let r = 0; r < e.length; r++) {
		if (e.charAt(r) !== ' ') return t;
		t++;
	}
	return t;
}
function vc(
	{
		functionName: e,
		location: t,
		message: r,
		isPanic: n,
		contextLines: i,
		callArguments: o,
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
			t && a.push(s.underline(Mc(t))),
			i
	) {
		a.push('');
		let l = [i.toString()];
		o && (l.push(o), l.push(s.dim(')'))),
			a.push(l.join('')),
			o && a.push('');
	} else a.push(''), o && a.push(o), a.push('');
	return a.push(r),
		a.join(`
`);
}
function Mc(e) {
	let t = [e.fileName];
	return e.lineNumber && t.push(String(e.lineNumber)),
		e.columnNumber && t.push(String(e.columnNumber)),
		t.join(':');
}
function Se(e) {
	let t = e.showColors ? bc : xc, r = wc(e, t);
	return vc(r, t);
}
function Es(e) {
	return e instanceof Buffer || e instanceof Date || e instanceof RegExp;
}
function bs(e) {
	if (e instanceof Buffer) {
		let t = Buffer.alloc ? Buffer.alloc(e.length) : new Buffer(e.length);
		return e.copy(t), t;
	} else {
		if (e instanceof Date) return new Date(e.getTime());
		if (e instanceof RegExp) return new RegExp(e);
		throw new Error('Unexpected situation');
	}
}
function xs(e) {
	let t = [];
	return e.forEach(function (r, n) {
		typeof r == 'object' && r !== null
			? Array.isArray(r)
				? t[n] = xs(r)
				: Es(r)
				? t[n] = bs(r)
				: t[n] = or({}, r)
			: t[n] = r;
	}),
		t;
}
function hs(e, t) {
	return t === '__proto__' ? void 0 : e[t];
}
var or = function (e, ...t) {
	if (!e || typeof e != 'object') return !1;
	if (t.length === 0) return e;
	let r, n;
	for (let i of t) {
		if (!(typeof i != 'object' || i === null || Array.isArray(i))) {
			for (let o of Object.keys(i)) {
				if (n = hs(e, o), r = hs(i, o), r !== e) {
					if (typeof r != 'object' || r === null) {
						e[o] = r;
						continue;
					} else if (Array.isArray(r)) {
						e[o] = xs(r);
						continue;
					} else if (Es(r)) {
						e[o] = bs(r);
						continue;
					} else if (
						typeof n != 'object' || n === null || Array.isArray(n)
					) {
						e[o] = or({}, r);
						continue;
					} else {
						e[o] = or(n, r);
						continue;
					}
				}
			}
		}
	}
	return e;
};
var ws = (e) => Array.isArray(e) ? e : e.split('.'),
	sr = (e, t) => ws(t).reduce((r, n) => r && r[n], e),
	Hr = (e, t, r) =>
		ws(t).reduceRight(
			(n, i, o, s) => Object.assign({}, sr(e, s.slice(0, o)), { [i]: n }),
			r,
		);
function Ts(e, t) {
	if (!e || typeof e != 'object' || typeof e.hasOwnProperty != 'function') {
		return e;
	}
	let r = {};
	for (let n in e) {
		let i = e[n];
		Object.hasOwnProperty.call(e, n) && t(n, i) && (r[n] = i);
	}
	return r;
}
var Ac = {
	'[object Date]': !0,
	'[object Uint8Array]': !0,
	'[object Decimal]': !0,
};
function Ps(e) {
	return e
		? typeof e == 'object' && !Ac[Object.prototype.toString.call(e)]
		: !1;
}
function vs(e, t) {
	let r = {}, n = Array.isArray(t) ? t : [t];
	for (let i in e) {
		Object.hasOwnProperty.call(e, i) && !n.includes(i) && (r[i] = e[i]);
	}
	return r;
}
var hi = K(Cr());
var Fc = As(),
	Cc = Cs(),
	Rc = Rs().default,
	Sc = (e, t, r) => {
		let n = [];
		return function i(o, s = {}, a = '', u = []) {
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
				let f = p.replace(new RegExp(l.newLine, 'g'), '').replace(
					new RegExp(l.newLineOrSpace, 'g'),
					' ',
				).replace(new RegExp(l.pad + '|' + l.indent, 'g'), '');
				return f.length <= s.inlineCharacterLimit ? f : p.replace(
					new RegExp(l.newLine + '|' + l.newLineOrSpace, 'g'),
					`
`,
				).replace(new RegExp(l.pad, 'g'), a).replace(
					new RegExp(l.indent, 'g'),
					a + s.indent,
				);
			};
			if (n.indexOf(o) !== -1) return '"[Circular]"';
			if (Buffer.isBuffer(o)) return `Buffer(${Buffer.length})`;
			if (
				o == null || typeof o == 'number' || typeof o == 'boolean' ||
				typeof o == 'function' || typeof o == 'symbol' ||
				o instanceof ne || Fc(o)
			) return String(o);
			if (de(o)) {
				return `new Date('${
					Ce(o) ? o.toISOString() : 'Invalid Date'
				}')`;
			}
			if (o instanceof Ee) {
				return `prisma.${wt(o.modelName)}.fields.${o.name}`;
			}
			if (Array.isArray(o)) {
				if (o.length === 0) return '[]';
				n.push(o);
				let p = '[' + l.newLine + o.map((f, d) => {
					let g = o.length - 1 === d
							? l.newLine
							: ',' + l.newLineOrSpace,
						m = i(f, s, a + s.indent, [...u, d]);
					s.transformValue && (m = s.transformValue(o, d, m));
					let b = l.indent + m + g;
					return s.transformLine &&
						(b = s.transformLine({
							obj: o,
							indent: l.indent,
							key: d,
							stringifiedValue: m,
							value: o[d],
							eol: g,
							originalLine: b,
							path: u.concat(d),
						})),
						b;
				}).join('') + l.pad + ']';
				return n.pop(), c(p);
			}
			if (Cc(o)) {
				let p = Object.keys(o).concat(Rc(o));
				if (
					s.filter && (p = p.filter((d) => s.filter(o, d))),
						p.length === 0
				) return '{}';
				n.push(o);
				let f = '{' + l.newLine + p.map((d, g) => {
					let m = p.length - 1 === g
							? l.newLine
							: ',' + l.newLineOrSpace,
						b = typeof d == 'symbol',
						h = !b && /^[a-z$_][a-z$_0-9]*$/i.test(d),
						x = b || h ? d : i(d, s, void 0, [...u, d]),
						E = i(o[d], s, a + s.indent, [...u, d]);
					s.transformValue && (E = s.transformValue(o, d, E));
					let y = l.indent + String(x) + ': ' + E + m;
					return s.transformLine &&
						(y = s.transformLine({
							obj: o,
							indent: l.indent,
							key: x,
							stringifiedValue: E,
							value: o[d],
							eol: m,
							originalLine: y,
							path: u.concat(x),
						})),
						y;
				}).join('') + l.pad + '}';
				return n.pop(), c(f);
			}
			return o = String(o).replace(/[\r\n]/g, (p) =>
				p === `
`
					? '\\n'
					: '\\r'),
				s.singleQuotes === !1
					? (o = o.replace(/"/g, '\\"'), `"${o}"`)
					: (o = o.replace(/\\?'/g, '\\\''), `'${o}'`);
		}(e, t, r);
	},
	ar = Sc;
var yi = '@@__DIM_POINTER__@@';
function zr({ ast: e, keyPaths: t, valuePaths: r, missingItems: n }) {
	let i = e;
	for (let { path: o, type: s } of n) i = Hr(i, o, s);
	return ar(i, {
		indent: '  ',
		transformLine: (
			{
				indent: o,
				key: s,
				value: a,
				stringifiedValue: u,
				eol: l,
				path: c,
			},
		) => {
			let p = c.join('.'),
				f = t.includes(p),
				d = r.includes(p),
				g = n.find((b) => b.path === p),
				m = u;
			if (g) {
				typeof a == 'string' && (m = m.slice(1, m.length - 1));
				let b = g.isRequired ? '' : '?',
					h = g.isRequired ? '+' : '?',
					E = (g.isRequired ? (y) => R(D(y)) : D)(
						Ic(s + b + ': ' + m + l, o, h),
					);
				return g.isRequired || (E = N(E)), E;
			} else {
				let b = n.some((y) => p.startsWith(y.path)),
					h = s[s.length - 2] === '?';
				h && (s = s.slice(1, s.length - 1)),
					h && typeof a == 'object' && a !== null && (m = m.split(`
`).map((y, T, M) => T === M.length - 1 ? y + yi : y).join(`
`)),
					b && typeof a == 'string' &&
					(m = m.slice(1, m.length - 1), h || (m = R(m))),
					(typeof a != 'object' || a === null) && !d && !b &&
					(m = N(m));
				let x = '';
				typeof s == 'string' && (x = (f ? O(s) : s) + ': '),
					m = d ? O(m) : m;
				let E = o + x + m + (b ? l : N(l));
				if (f || d) {
					let y = E.split(`
`),
						T = String(s).length,
						M = f ? O('~'.repeat(T)) : ' '.repeat(T),
						P = d ? Dc(o, s, a, u) : 0,
						k = d && Ss(a),
						B = d ? '  ' + O('~'.repeat(P)) : '';
					M && M.length > 0 && !k && y.splice(1, 0, o + M + B),
						M && M.length > 0 && k &&
						y.splice(y.length - 1, 0, o.slice(0, o.length - 2) + B),
						E = y.join(`
`);
				}
				return E;
			}
		},
	});
}
function Dc(e, t, r, n) {
	return r === null
		? 4
		: typeof r == 'string'
		? r.length + 2
		: Array.isArray(r) && r.length == 0
		? 2
		: Ss(r)
		? Math.abs(Oc(`${t}: ${(0, hi.default)(n)}`) - e.length)
		: de(r)
		? Ce(r) ? `new Date('${r.toISOString()}')`.length : 24
		: String(r).length;
}
function Ss(e) {
	return typeof e == 'object' && e !== null && !(e instanceof ne) && !de(e);
}
function Oc(e) {
	return e.split(`
`).reduce((t, r) => r.length > t ? r.length : t, 0);
}
function Ic(e, t, r) {
	return e.split(`
`).map((n, i, o) =>
		i === 0 ? r + t.slice(1) + n : i < o.length - 1 ? r + n.slice(1) : n
	).map((n) =>
		(0, hi.default)(n).includes(yi)
			? N(n.replace(yi, ''))
			: n.includes('?')
			? N(n)
			: n
	).join(`
`);
}
var ur = 2,
	wi = class {
		constructor(t, r) {
			this.type = t;
			this.children = r;
			this.printFieldError = ({ error: t }, r, n) => {
				if (t.type === 'emptySelect') {
					let i = n
						? ''
						: ` Available options are listed in ${N(D('green'))}.`;
					return `The ${O('`select`')} statement for type ${
						R(Jt(t.field.outputType.type))
					} must not be empty.${i}`;
				}
				if (t.type === 'emptyInclude') {
					if (r.length === 0) {
						return `${
							R(Jt(t.field.outputType.type))
						} does not have any relation and therefore can't have an ${
							O('`include`')
						} statement.`;
					}
					let i = n
						? ''
						: ` Available options are listed in ${N(D('green'))}.`;
					return `The ${O('`include`')} statement for type ${
						O(Jt(t.field.outputType.type))
					} must not be empty.${i}`;
				}
				if (t.type === 'noTrueSelect') {
					return `The ${O('`select`')} statement for type ${
						O(Jt(t.field.outputType.type))
					} needs ${O('at least one truthy value')}.`;
				}
				if (t.type === 'includeAndSelect') {
					return `Please ${R('either')} use ${D('`include`')} or ${
						D('`select`')
					}, but ${O('not both')} at the same time.`;
				}
				if (t.type === 'invalidFieldName') {
					let i = t.isInclude ? 'include' : 'select',
						o = t.isIncludeScalar ? 'Invalid scalar' : 'Unknown',
						s = n ? '' : t.isInclude && r.length === 0
							? `
This model has no relations, so you can't use ${O('include')} with it.`
							: ` Available options are listed in ${
								N(D('green'))
							}.`,
						a = `${o} field ${O(`\`${t.providedName}\``)} for ${
							O(i)
						} statement on model ${R(Dt(t.modelName))}.${s}`;
					return t.didYouMean &&
						(a += ` Did you mean ${D(`\`${t.didYouMean}\``)}?`),
						t.isIncludeScalar && (a += `
Note, that ${R('include')} statements only accept relation fields.`),
						a;
				}
				if (t.type === 'invalidFieldType') {
					return `Invalid value ${
						O(`${ar(t.providedValue)}`)
					} of type ${O(bt(t.providedValue, void 0))} for field ${
						R(`${t.fieldName}`)
					} on model ${R(Dt(t.modelName))}. Expected either ${
						D('true')
					} or ${D('false')}.`;
				}
			};
			this.printArgError = ({ error: t, path: r }, n, i) => {
				if (t.type === 'invalidName') {
					let o = `Unknown arg ${O(`\`${t.providedName}\``)} in ${
						R(r.join('.'))
					} for type ${
						R(t.outputType ? t.outputType.name : Ut(t.originalType))
					}.`;
					return t.didYouMeanField
						? o += `
\u2192 Did you forget to wrap it with \`${D('select')}\`? ${
							N(
								'e.g. ' +
									D(`{ select: { ${t.providedName}: ${t.providedValue} } }`),
							)
						}`
						: t.didYouMeanArg
						? (o += ` Did you mean \`${D(t.didYouMeanArg)}\`?`,
							!n && !i && (o += ` ${N('Available args:')}
` + xt(t.originalType, !0)))
						: t.originalType.fields.length === 0
						? o += ` The field ${
							R(t.originalType.name)
						} has no arguments.`
						: !n && !i && (o += ` Available args:

` + xt(t.originalType, !0)),
						o;
				}
				if (t.type === 'invalidType') {
					let o = ar(t.providedValue, { indent: '  ' }),
						s = o.split(`
`).length > 1;
					if (
						s && (o = `
${o}
`), t.requiredType.bestFittingType.location === 'enumTypes'
					) {
						return `Argument ${R(t.argName)}: Provided value ${
							O(o)
						}${s ? '' : ' '}of type ${O(bt(t.providedValue))} on ${
							R(`prisma.${this.children[0].name}`)
						} is not a ${
							D(Kt(
								Et(t.requiredType.bestFittingType.type),
								t.requiredType.bestFittingType.isList,
							))
						}.
\u2192 Possible values: ${
							t.requiredType.bestFittingType.type.values.map(
								(c) =>
									D(`${
										Et(t.requiredType.bestFittingType.type)
									}.${c}`),
							).join(', ')
						}`;
					}
					let a = '.';
					Mt(t.requiredType.bestFittingType.type) && (a = `:
` + xt(t.requiredType.bestFittingType.type));
					let u = `${
							t.requiredType.inputType.map((c) =>
								D(Kt(
									Et(c.type),
									t.requiredType.bestFittingType.isList,
								))
							).join(' or ')
						}${a}`,
						l = t.requiredType.inputType.length === 2 &&
								t.requiredType.inputType.find((c) =>
									Mt(c.type)
								) || null;
					return l && (u += `
` + xt(l.type, !0)),
						`Argument ${R(t.argName)}: Got invalid value ${O(o)}${
							s ? '' : ' '
						}on ${R(`prisma.${this.children[0].name}`)}. Provided ${
							O(bt(t.providedValue))
						}, expected ${u}`;
				}
				if (t.type === 'invalidNullArg') {
					let o = r.length === 1 && r[0] === t.name
							? ''
							: ` for ${R(`${r.join('.')}`)}`,
						s = ` Please use ${R(D('undefined'))} instead.`;
					return `Argument ${D(t.name)}${o} must not be ${
						R('null')
					}.${s}`;
				}
				if (t.type === 'invalidDateArg') {
					let o = r.length === 1 && r[0] === t.argName
						? ''
						: ` for ${R(`${r.join('.')}`)}`;
					return `Argument ${
						D(t.argName)
					}${o} is not a valid Date object.`;
				}
				if (t.type === 'missingArg') {
					let o = r.length === 1 && r[0] === t.missingName
						? ''
						: ` for ${R(`${r.join('.')}`)}`;
					return `Argument ${D(t.missingName)}${o} is missing.`;
				}
				if (t.type === 'atLeastOne') {
					let o = i
							? ''
							: ` Available args are listed in ${N(D('green'))}.`,
						s = t.atLeastFields
							? ` and at least one argument for ${
								t.atLeastFields.map((a) => R(a)).join(', or ')
							}`
							: '';
					return `Argument ${R(r.join('.'))} of type ${
						R(t.inputType.name)
					} needs ${D('at least one')} argument${R(s)}.${o}`;
				}
				if (t.type === 'atMostOne') {
					let o = i
						? ''
						: ` Please choose one. ${N('Available args:')} 
${xt(t.inputType, !0)}`;
					return `Argument ${R(r.join('.'))} of type ${
						R(t.inputType.name)
					} needs ${D('exactly one')} argument, but you provided ${
						t.providedKeys.map((s) => O(s)).join(' and ')
					}.${o}`;
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
				(0, nt.default)(
					this.children.map(String).join(`
`),
					ur,
				)
			}
}`;
		}
		validate(t, r = !1, n, i, o) {
			t || (t = {});
			let s = this.children.filter((h) =>
				h.hasInvalidChild || h.hasInvalidArg
			);
			if (s.length === 0) return;
			let a = [],
				u = [],
				l = t && t.select ? 'select' : t.include ? 'include' : void 0;
			for (let h of s) {
				let x = h.collectErrors(l);
				a.push(
					...x.fieldErrors.map((E) => ({
						...E,
						path: r ? E.path : E.path.slice(1),
					})),
				),
					u.push(
						...x.argErrors.map((E) => ({
							...E,
							path: r ? E.path : E.path.slice(1),
						})),
					);
			}
			let c = this.children[0].name,
				p = r ? this.type : c,
				f = [],
				d = [],
				g = [];
			for (let h of a) {
				let x = this.normalizePath(h.path, t).join('.');
				if (h.error.type === 'invalidFieldName') {
					f.push(x);
					let E = h.error.outputType, { isInclude: y } = h.error;
					E.fields.filter((T) =>
						y ? T.outputType.location === 'outputObjectTypes' : !0
					).forEach((T) => {
						let M = x.split('.');
						g.push({
							path: `${
								M.slice(0, M.length - 1).join('.')
							}.${T.name}`,
							type: 'true',
							isRequired: !1,
						});
					});
				} else {h.error.type === 'includeAndSelect'
						? (f.push('select'), f.push('include'))
						: d.push(x);}
				if (
					h.error.type === 'emptySelect' ||
					h.error.type === 'noTrueSelect' ||
					h.error.type === 'emptyInclude'
				) {
					let E = this.normalizePath(h.path, t),
						y = E.slice(0, E.length - 1).join('.');
					h.error.field.outputType.type.fields?.filter((M) =>
						h.error.type === 'emptyInclude'
							? M.outputType.location === 'outputObjectTypes'
							: !0
					).forEach((M) => {
						g.push({
							path: `${y}.${M.name}`,
							type: 'true',
							isRequired: !1,
						});
					});
				}
			}
			for (let h of u) {
				let x = this.normalizePath(h.path, t).join('.');
				if (h.error.type === 'invalidName') f.push(x);
				else if (
					h.error.type !== 'missingArg' &&
					h.error.type !== 'atLeastOne'
				) d.push(x);
				else if (h.error.type === 'missingArg') {
					let E = h.error.missingArg.inputTypes.length === 1
						? h.error.missingArg.inputTypes[0].type
						: h.error.missingArg.inputTypes.map((y) => {
							let T = Ut(y.type);
							return T === 'Null'
								? 'null'
								: y.isList
								? T + '[]'
								: T;
						}).join(' | ');
					g.push({
						path: x,
						type: ri(E, !0, x.split('where.').length === 2),
						isRequired: h.error.missingArg.isRequired,
					});
				}
			}
			let m = (h) => {
					let x = u.some((V) =>
							V.error.type === 'missingArg' &&
							V.error.missingArg.isRequired
						),
						E = Boolean(
							u.find((V) =>
								V.error.type === 'missingArg' &&
								!V.error.missingArg.isRequired
							),
						),
						y = E || x,
						T = '';
					x && (T += `
${N('Note: Lines with ')}${D('+')} ${N('are required')}`),
						E && (T.length === 0 && (T = `
`),
							x
								? T += N(`, lines with ${D('?')} are optional`)
								: T += N(
									`Note: Lines with ${D('?')} are optional`,
								),
							T += N('.'));
					let P = u.filter((V) =>
						V.error.type !== 'missingArg' ||
						V.error.missingArg.isRequired
					).map((V) => this.printArgError(V, y, i === 'minimal'))
						.join(`
`);
					if (
						P += `
${
							a.map((V) =>
								this.printFieldError(V, g, i === 'minimal')
							).join(`
`)
						}`, i === 'minimal'
					) return (0, xi.default)(P);
					let k = {
						ast: r ? { [c]: t } : t,
						keyPaths: f,
						valuePaths: d,
						missingItems: g,
					};
					n?.endsWith('aggregate') && (k = Kc(k));
					let B = Se({
						callsite: h,
						originalMethod: n || p,
						showColors: i && i === 'pretty',
						callArguments: zr(k),
						message: `${P}${T}
`,
					});
					return process.env.NO_COLOR || i === 'colorless'
						? (0, xi.default)(B)
						: B;
				},
				b = new J(m(o));
			throw process.env.NODE_ENV !== 'production' &&
				Object.defineProperty(b, 'render', {
					get: () => m,
					enumerable: !1,
				}),
				b;
		}
		normalizePath(t, r) {
			let n = t.slice(), i = [], o, s = r;
			for (; (o = n.shift()) !== void 0;) {
				!Array.isArray(s) && o === 0 ||
					(o === 'select'
						? s[o] ? s = s[o] : s = s.include
						: s && s[o] && (s = s[o]),
						i.push(o));
			}
			return i;
		}
	},
	J = class extends Error {
		get [Symbol.toStringTag]() {
			return 'PrismaClientValidationError';
		}
	};
F(J, 'PrismaClientValidationError');
var G = class extends Error {
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
F(G, 'PrismaClientConstructorValidationError');
var ae = class {
		constructor(
			{ name: t, args: r, children: n, error: i, schemaField: o },
		) {
			this.name = t,
				this.args = r,
				this.children = n,
				this.error = i,
				this.schemaField = o,
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
${(0, nt.default)(this.args.toString(), ur)}
)`),
					this.children && (t += ` {
${
						(0, nt.default)(
							this.children.map(String).join(`
`),
							ur,
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
				for (let i of this.children) {
					let o = i.collectErrors(t);
					r.push(
						...o.fieldErrors.map((s) => ({
							...s,
							path: [this.name, t, ...s.path],
						})),
					),
						n.push(
							...o.argErrors.map((s) => ({
								...s,
								path: [this.name, t, ...s.path],
							})),
						);
				}
			}
			return this.args &&
				n.push(
					...this.args.collectErrors().map((i) => ({
						...i,
						path: [this.name, ...i.path],
					})),
				),
				{ fieldErrors: r, argErrors: n };
		}
	},
	oe = class {
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
function Ei(e, t) {
	return Buffer.isBuffer(e)
		? JSON.stringify(e.toString('base64'))
		: e instanceof Ee
		? `{ _ref: ${JSON.stringify(e.name)}}`
		: Object.prototype.toString.call(e) === '[object BigInt]'
		? e.toString()
		: typeof t?.type == 'string' && t.type === 'Json'
		? e === null
			? 'null'
			: e && e.values && e.__prismaRawParameters__
			? JSON.stringify(e.values)
			: t?.isList && Array.isArray(e)
			? JSON.stringify(e.map((r) => JSON.stringify(r)))
			: JSON.stringify(JSON.stringify(e))
		: e === void 0
		? null
		: e === null
		? 'null'
		: fe.isDecimal(e) || t?.type === 'Decimal' && Qe(e)
		? JSON.stringify(e.toFixed())
		: t?.location === 'enumTypes' && typeof e == 'string'
		? Array.isArray(e) ? `[${e.join(', ')}]` : e
		: typeof e == 'number' && t?.type === 'Float'
		? e.toExponential()
		: JSON.stringify(e, null, 2);
}
var se = class {
	constructor(
		{
			key: t,
			value: r,
			isEnum: n = !1,
			error: i,
			schemaArg: o,
			inputType: s,
		},
	) {
		this.inputType = s,
			this.key = t,
			this.value = r instanceof ne ? r._getName() : r,
			this.isEnum = n,
			this.error = i,
			this.schemaArg = o,
			this.isNullable =
				o?.inputTypes.reduce((a) => a && o.isNullable, !0) || !1,
			this.hasError = Boolean(i) ||
				(r instanceof oe ? r.hasInvalidArg : !1) ||
				Array.isArray(r) && r.some((a) =>
						a instanceof oe
							? a.hasInvalidArg
							: a instanceof se
							? a.hasError
							: !1
					);
	}
	get [Symbol.toStringTag]() {
		return 'Arg';
	}
	_toString(t, r) {
		let n = this.stringifyValue(t);
		if (!(typeof n > 'u')) return `${r}: ${n}`;
	}
	stringifyValue(t) {
		if (!(typeof t > 'u')) {
			if (t instanceof oe) {
				return `{
${(0, nt.default)(t.toString(), 2)}
}`;
			}
			if (Array.isArray(t)) {
				if (this.inputType?.type === 'Json') {
					return Ei(t, this.inputType);
				}
				let r = !t.some((n) => typeof n == 'object');
				return `[${
					r ? '' : `
`
				}${
					(0, nt.default)(
						t.map((n) =>
							n instanceof oe
								? `{
${
									(0, nt.default)(n.toString(), ur)
								}
}`
								: n instanceof se
								? n.stringifyValue(n.value)
								: Ei(n, this.inputType)
						).join(`,${
							r ? ' ' : `
`
						}`),
						r ? 0 : ur,
					)
				}${
					r ? '' : `
`
				}]`;
			}
			return Ei(t, this.inputType);
		}
	}
	toString() {
		return this._toString(this.value, this.key);
	}
	collectErrors() {
		if (!this.hasError) return [];
		let t = [];
		if (this.error) {
			let r = typeof this.inputType?.type == 'object'
				? `${this.inputType.type.name}${
					this.inputType.isList ? '[]' : ''
				}`
				: void 0;
			t.push({ error: this.error, path: [this.key], id: r });
		}
		return Array.isArray(this.value)
			? t.concat(
				this.value.flatMap((r, n) =>
					r instanceof oe
						? r.collectErrors().map((i) => ({
							...i,
							path: [this.key, String(n), ...i.path],
						}))
						: r instanceof se
						? r.collectErrors().map((i) => ({
							...i,
							path: [this.key, ...i.path],
						}))
						: []
				),
			)
			: this.value instanceof oe
			? t.concat(
				this.value.collectErrors().map((r) => ({
					...r,
					path: [this.key, ...r.path],
				})),
			)
			: t;
	}
};
function Xr(
	{
		dmmf: e,
		rootTypeName: t,
		rootField: r,
		select: n,
		modelName: i,
		extensions: o,
	},
) {
	n || (n = {});
	let s = t === 'query' ? e.queryType : e.mutationType,
		a = {
			args: [],
			outputType: { isList: !1, type: s, location: 'outputObjectTypes' },
			name: t,
		},
		u = { modelName: i },
		l = Is({
			dmmf: e,
			selection: { [r]: n },
			schemaField: a,
			path: [t],
			context: u,
			extensions: o,
		});
	return new wi(t, l);
}
function Os(e) {
	return e;
}
function Is(
	{
		dmmf: e,
		selection: t,
		schemaField: r,
		path: n,
		context: i,
		extensions: o,
	},
) {
	let s = r.outputType.type,
		a = i.modelName ? o.getAllComputedFields(i.modelName) : {};
	return t = Gr(t, a),
		Object.entries(t).reduce((u, [l, c]) => {
			let p = s.fieldMap
				? s.fieldMap[l]
				: s.fields.find((E) => E.name === l);
			if (!p) {
				return a?.[l] || u.push(
					new ae({
						name: l,
						children: [],
						error: {
							type: 'invalidFieldName',
							modelName: s.name,
							providedName: l,
							didYouMean: Br(
								l,
								s.fields.map((E) => E.name).concat(
									Object.keys(a ?? {}),
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
					new ae({
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
			let f = {
					name: p.name,
					fields: p.args,
					constraints: { minNumFields: null, maxNumFields: null },
				},
				d = typeof c == 'object'
					? vs(c, ['include', 'select'])
					: void 0,
				g = d
					? Zr(
						d,
						f,
						i,
						[],
						typeof p == 'string' ? void 0 : p.outputType.type,
					)
					: void 0,
				m = p.outputType.location === 'outputObjectTypes';
			if (c) {
				if (c.select && c.include) {
					u.push(
						new ae({
							name: l,
							children: [
								new ae({
									name: 'include',
									args: new oe(),
									error: {
										type: 'includeAndSelect',
										field: p,
									},
								}),
							],
						}),
					);
				} else if (c.include) {
					let E = Object.keys(c.include);
					if (E.length === 0) {
						return u.push(
							new ae({
								name: l,
								children: [
									new ae({
										name: 'include',
										args: new oe(),
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
						let y = p.outputType.type,
							T = y.fields.filter((P) =>
								P.outputType.location === 'outputObjectTypes'
							).map((P) => P.name),
							M = E.filter((P) => !T.includes(P));
						if (M.length > 0) {
							return u.push(...M.map((P) =>
								new ae({
									name: P,
									children: [
										new ae({
											name: P,
											args: new oe(),
											error: {
												type: 'invalidFieldName',
												modelName: y.name,
												outputType: y,
												providedName: P,
												didYouMean: Br(P, T) || void 0,
												isInclude: !0,
												isIncludeScalar: y.fields.some(
													(k) => k.name === P,
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
					let E = Object.values(c.select);
					if (E.length === 0) {
						return u.push(
							new ae({
								name: l,
								children: [
									new ae({
										name: 'select',
										args: new oe(),
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
					if (E.filter((T) => T).length === 0) {
						return u.push(
							new ae({
								name: l,
								children: [
									new ae({
										name: 'select',
										args: new oe(),
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
			let b = m ? Nc(e, p.outputType.type) : null, h = b;
			c &&
				(c.select
					? h = c.select
					: c.include
					? h = or(b, c.include)
					: c.by && Array.isArray(c.by) &&
						p.outputType.namespace === 'prisma' &&
						p.outputType.location === 'outputObjectTypes' &&
						Yo(p.outputType.type.name) && (h = kc(c.by)));
			let x;
			if (h !== !1 && m) {
				let E = i.modelName;
				typeof p.outputType.type == 'object' &&
				p.outputType.namespace === 'model' &&
				p.outputType.location === 'outputObjectTypes' &&
				(E = p.outputType.type.name),
					x = Is({
						dmmf: e,
						selection: h,
						schemaField: p,
						path: [...n, l],
						context: { modelName: E },
						extensions: o,
					});
			}
			return u.push(
				new ae({ name: l, args: g, children: x, schemaField: p }),
			),
				u;
		}, []);
}
function kc(e) {
	let t = Object.create(null);
	for (let r of e) t[r] = !0;
	return t;
}
function Nc(e, t) {
	let r = Object.create(null);
	for (let n of t.fields) {
		e.typeMap[n.outputType.type.name] !== void 0 && (r[n.name] = !0),
			(n.outputType.location === 'scalar' ||
				n.outputType.location === 'enumTypes') && (r[n.name] = !0);
	}
	return r;
}
function Ti(e, t, r, n) {
	return new se({
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
function ks(e, t, r) {
	let { isList: n } = t, i = $c(t, r), o = bt(e, t);
	return o === i || n && o === 'List<>' ||
			i === 'Json' && o !== 'Symbol' && !(e instanceof ne) &&
				!(e instanceof Ee) ||
			o === 'Int' && i === 'BigInt' ||
			(o === 'Int' || o === 'Float') && i === 'Decimal' ||
			o === 'DateTime' && i === 'String' ||
			o === 'UUID' && i === 'String' || o === 'String' && i === 'ID' ||
			o === 'Int' && i === 'Float' || o === 'Int' && i === 'Long' ||
			o === 'String' && i === 'Decimal' && _c(e) || e === null
		? !0
		: t.isList && Array.isArray(e)
		? e.every((s) => ks(s, { ...t, isList: !1 }, r))
		: !1;
}
function $c(e, t, r = e.isList) {
	let n = Et(e.type);
	return e.location === 'fieldRefTypes' && t.modelName &&
		(n += `<${t.modelName}>`),
		Kt(n, r);
}
var Yr = (e) => Ts(e, (t, r) => r !== void 0);
function _c(e) {
	return /^\-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i.test(e);
}
function Lc(e, t, r, n) {
	let i = null, o = [];
	for (let s of r.inputTypes) {
		if (i = qc(e, t, r, s, n), i?.collectErrors().length === 0) return i;
		if (i && i?.collectErrors()) {
			let a = i?.collectErrors();
			a && a.length > 0 && o.push({ arg: i, errors: a });
		}
	}
	if (i?.hasError && o.length > 0) {
		let s = o.map(({ arg: a, errors: u }) => {
			let l = u.map((c) => {
				let p = 1;
				return c.error.type === 'invalidType' &&
					(p = 2 * Math.exp(Ns(c.error.providedValue)) + 1),
					p += Math.log(c.path.length),
					c.error.type === 'missingArg' && a.inputType &&
					Mt(a.inputType.type) &&
					a.inputType.type.name.includes('Unchecked') && (p *= 2),
					c.error.type === 'invalidName' &&
					Mt(c.error.originalType) &&
					c.error.originalType.name.includes('Unchecked') && (p *= 2),
					p;
			});
			return { score: u.length + jc(l), arg: a, errors: u };
		});
		return s.sort((a, u) => a.score < u.score ? -1 : 1), s[0].arg;
	}
	return i;
}
function Ns(e) {
	let t = 1;
	if (!e || typeof e != 'object') return t;
	for (let r in e) {
		if (
			!!Object.prototype.hasOwnProperty.call(e, r) &&
			typeof e[r] == 'object'
		) {
			let n = Ns(e[r]) + 1;
			t = Math.max(n, t);
		}
	}
	return t;
}
function jc(e) {
	return e.reduce((t, r) => t + r, 0);
}
function qc(e, t, r, n, i) {
	if (typeof t > 'u') {
		return r.isRequired
			? new se({
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
	let { isNullable: o, isRequired: s } = r;
	if (
		t === null && !o && !s &&
		!(Mt(n.type)
			? n.type.constraints.minNumFields !== null &&
				n.type.constraints.minNumFields > 0
			: !1)
	) {
		return new se({
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
		if (Mt(n.type)) {
			if (
				typeof t != 'object' || Array.isArray(t) ||
				n.location === 'inputObjectTypes' && !Ps(t)
			) return Ti(e, t, r, n);
			{
				let c = Yr(t), p, f = Object.keys(c || {}), d = f.length;
				return d === 0 &&
							typeof n.type.constraints.minNumFields ==
								'number' &&
							n.type.constraints.minNumFields > 0 ||
						n.type.constraints.fields?.some((g) =>
								f.includes(g)
							) === !1
					? p = {
						type: 'atLeastOne',
						key: e,
						inputType: n.type,
						atLeastFields: n.type.constraints.fields,
					}
					: d > 1 &&
						typeof n.type.constraints.maxNumFields == 'number' &&
						n.type.constraints.maxNumFields < 2 &&
						(p = {
							type: 'atMostOne',
							key: e,
							inputType: n.type,
							providedKeys: f,
						}),
					new se({
						key: e,
						value: c === null
							? null
							: Zr(c, n.type, i, r.inputTypes),
						isEnum: n.location === 'enumTypes',
						error: p,
						inputType: n,
						schemaArg: r,
					});
			}
		} else return Ds(e, t, r, n, i);
	}
	if (
		!Array.isArray(t) && n.isList && e !== 'updateMany' && (t = [t]),
			n.location === 'enumTypes' || n.location === 'scalar'
	) return Ds(e, t, r, n, i);
	let a = n.type,
		l = (typeof a.constraints?.minNumFields == 'number' &&
					a.constraints?.minNumFields > 0
				? Array.isArray(t) &&
					t.some((c) => !c || Object.keys(Yr(c)).length === 0)
				: !1)
			? { inputType: a, key: e, type: 'atLeastOne' }
			: void 0;
	if (!l) {
		let c = typeof a.constraints?.maxNumFields == 'number' &&
				a.constraints?.maxNumFields < 2
			? Array.isArray(t) &&
				t.find((p) => !p || Object.keys(Yr(p)).length !== 1)
			: !1;
		c &&
			(l = {
				inputType: a,
				key: e,
				type: 'atMostOne',
				providedKeys: Object.keys(c),
			});
	}
	if (!Array.isArray(t)) {
		for (let c of r.inputTypes) {
			let p = Zr(t, c.type, i);
			if (p.collectErrors().length === 0) {
				return new se({
					key: e,
					value: p,
					isEnum: !1,
					schemaArg: r,
					inputType: c,
				});
			}
		}
	}
	return new se({
		key: e,
		value: t.map((c, p) =>
			n.isList && typeof c != 'object'
				? c
				: typeof c != 'object' || !t || Array.isArray(c)
				? Ti(String(p), c, Vc(r), Bc(n))
				: Zr(c, a, i)
		),
		isEnum: !1,
		inputType: n,
		schemaArg: r,
		error: l,
	});
}
function Bc(e) {
	return { ...e, isList: !1 };
}
function Vc(e) {
	return { ...e, inputTypes: e.inputTypes.filter((t) => !t.isList) };
}
function Mt(e) {
	return !(typeof e == 'string' || Object.hasOwnProperty.call(e, 'values'));
}
function Ds(e, t, r, n, i) {
	return de(t) && !Ce(t)
		? new se({
			key: e,
			value: t,
			schemaArg: r,
			inputType: n,
			error: { type: 'invalidDateArg', argName: e },
		})
		: ks(t, n, i)
		? new se({
			key: e,
			value: t,
			isEnum: n.location === 'enumTypes',
			schemaArg: r,
			inputType: n,
		})
		: Ti(e, t, r, n);
}
function Zr(e, t, r, n, i) {
	t.meta?.source && (r = { modelName: t.meta.source });
	let o = Yr(e),
		{ fields: s, fieldMap: a } = t,
		u = s.map((f) => [f.name, void 0]),
		l = Object.entries(o || {}),
		p = zo(l, u, (f) => f[0]).reduce((f, [d, g]) => {
			let m = a ? a[d] : s.find((h) => h.name === d);
			if (!m) {
				let h = typeof g == 'boolean' && i && i.fields.some((x) =>
						x.name === d
					)
					? d
					: null;
				return f.push(
					new se({
						key: d,
						value: g,
						error: {
							type: 'invalidName',
							providedName: d,
							providedValue: g,
							didYouMeanField: h,
							didYouMeanArg: !h && Br(d, [
										...s.map((x) => x.name),
										'select',
									]) || void 0,
							originalType: t,
							possibilities: n,
							outputType: i,
						},
					}),
				),
					f;
			}
			let b = Lc(d, g, m, r);
			return b && f.push(b), f;
		}, []);
	if (
		typeof t.constraints.minNumFields == 'number' &&
			l.length < t.constraints.minNumFields ||
		p.find((f) =>
			f.error?.type === 'missingArg' || f.error?.type === 'atLeastOne'
		)
	) {
		let f = t.fields.filter((d) =>
			!d.isRequired && o && (typeof o[d.name] > 'u' || o[d.name] === null)
		);
		p.push(...f.map((d) => {
			let g = d.inputTypes[0];
			return new se({
				key: d.name,
				value: void 0,
				isEnum: g.location === 'enumTypes',
				error: {
					type: 'missingArg',
					missingName: d.name,
					missingArg: d,
					atLeastOne: Boolean(t.constraints.minNumFields) || !1,
					atMostOne: t.constraints.maxNumFields === 1 || !1,
				},
				inputType: g,
			});
		}));
	}
	return new oe(p);
}
function en({ document: e, path: t, data: r }) {
	let n = sr(r, t);
	if (n === 'undefined') return null;
	if (typeof n != 'object') return n;
	let i = Uc(e, t);
	return Pi({ field: i, data: n });
}
function Pi({ field: e, data: t }) {
	if (!t || typeof t != 'object' || !e.children || !e.schemaField) return t;
	let r = {
		DateTime: (n) => new Date(n),
		Json: (n) => JSON.parse(n),
		Bytes: (n) => Buffer.from(n, 'base64'),
		Decimal: (n) => new fe(n),
		BigInt: (n) => BigInt(n),
	};
	for (let n of e.children) {
		let i = n.schemaField?.outputType.type;
		if (i && typeof i == 'string') {
			let o = r[i];
			if (o) {
				if (Array.isArray(t)) {
					for (let s of t) {
						typeof s[n.name] < 'u' && s[n.name] !== null &&
							(Array.isArray(s[n.name])
								? s[n.name] = s[n.name].map(o)
								: s[n.name] = o(s[n.name]));
					}
				} else {typeof t[n.name] < 'u' && t[n.name] !== null &&
						(Array.isArray(t[n.name])
							? t[n.name] = t[n.name].map(o)
							: t[n.name] = o(t[n.name]));}
			}
		}
		if (
			n.schemaField &&
			n.schemaField.outputType.location === 'outputObjectTypes'
		) {
			if (Array.isArray(t)) {
				for (let o of t) Pi({ field: n, data: o[n.name] });
			} else Pi({ field: n, data: t[n.name] });
		}
	}
	return t;
}
function Uc(e, t) {
	let r = t.slice(), n = r.shift(), i = e.children.find((o) => o.name === n);
	if (!i) throw new Error(`Could not find field ${n} in document ${e}`);
	for (; r.length > 0;) {
		let o = r.shift();
		if (!i.children) {
			throw new Error(
				`Can't get children for field ${i} with child ${o}`,
			);
		}
		let s = i.children.find((a) => a.name === o);
		if (!s) throw new Error(`Can't find child ${o} of field ${i}`);
		i = s;
	}
	return i;
}
function bi(e) {
	return e.split('.').filter((t) => t !== 'select').join('.');
}
function vi(e) {
	if (Object.prototype.toString.call(e) === '[object Object]') {
		let r = {};
		for (let n in e) {
			if (n === 'select') {
				for (let i in e.select) r[i] = vi(e.select[i]);
			} else r[n] = vi(e[n]);
		}
		return r;
	}
	return e;
}
function Kc({ ast: e, keyPaths: t, missingItems: r, valuePaths: n }) {
	let i = t.map(bi),
		o = n.map(bi),
		s = r.map((u) => ({
			path: bi(u.path),
			isRequired: u.isRequired,
			type: u.type,
		}));
	return { ast: vi(e), keyPaths: i, missingItems: s, valuePaths: o };
}
function lr(e) {
	return {
		getKeys() {
			return Object.keys(e);
		},
		getPropertyValue(t) {
			return e[t];
		},
	};
}
function We(e, t) {
	return {
		getKeys() {
			return [e];
		},
		getPropertyValue() {
			return t();
		},
	};
}
function it(e) {
	let t = new Re();
	return {
		getKeys() {
			return e.getKeys();
		},
		getPropertyValue(r) {
			return t.getOrCreate(r, () => e.getPropertyValue(r));
		},
		getPropertyDescriptor(r) {
			return e.getPropertyDescriptor?.(r);
		},
	};
}
var Ls = require('util');
var tn = { enumerable: !0, configurable: !0, writable: !0 };
function rn(e) {
	let t = new Set(e);
	return {
		getOwnPropertyDescriptor: () => tn,
		has: (r, n) => t.has(n),
		set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
		ownKeys: () => [...t],
	};
}
var $s = Symbol.for('nodejs.util.inspect.custom');
function He(e, t) {
	let r = Jc(t),
		n = new Set(),
		i = new Proxy(e, {
			get(o, s) {
				if (n.has(s)) return o[s];
				let a = r.get(s);
				return a ? a.getPropertyValue(s) : o[s];
			},
			has(o, s) {
				if (n.has(s)) return !0;
				let a = r.get(s);
				return a ? a.has?.(s) ?? !0 : Reflect.has(o, s);
			},
			ownKeys(o) {
				let s = _s(Reflect.ownKeys(o), r),
					a = _s(Array.from(r.keys()), r);
				return [...new Set([...s, ...a, ...n])];
			},
			set(o, s, a) {
				return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1
					? !1
					: (n.add(s), Reflect.set(o, s, a));
			},
			getOwnPropertyDescriptor(o, s) {
				let a = r.get(s);
				return a
					? a.getPropertyDescriptor
						? { ...tn, ...a?.getPropertyDescriptor(s) }
						: tn
					: Reflect.getOwnPropertyDescriptor(o, s);
			},
			defineProperty(o, s, a) {
				return n.add(s), Reflect.defineProperty(o, s, a);
			},
		});
	return i[$s] = function (o, s, a = Ls.inspect) {
		let u = { ...this };
		return delete u[$s], a(u, s);
	},
		i;
}
function Jc(e) {
	let t = new Map();
	for (let r of e) {
		let n = r.getKeys();
		for (let i of n) t.set(i, r);
	}
	return t;
}
function _s(e, t) {
	return e.filter((r) => t.get(r)?.has?.(r) ?? !0);
}
function Mi(e) {
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
var cr = '<unknown>';
function js(e) {
	var t = e.split(`
`);
	return t.reduce(function (r, n) {
		var i = Wc(n) || zc(n) || Xc(n) || np(n) || tp(n);
		return i && r.push(i), r;
	}, []);
}
var Qc =
		/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
	Gc = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function Wc(e) {
	var t = Qc.exec(e);
	if (!t) return null;
	var r = t[2] && t[2].indexOf('native') === 0,
		n = t[2] && t[2].indexOf('eval') === 0,
		i = Gc.exec(t[2]);
	return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), {
		file: r ? null : t[2],
		methodName: t[1] || cr,
		arguments: r ? [t[2]] : [],
		lineNumber: t[3] ? +t[3] : null,
		column: t[4] ? +t[4] : null,
	};
}
var Hc =
	/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function zc(e) {
	var t = Hc.exec(e);
	return t
		? {
			file: t[2],
			methodName: t[1] || cr,
			arguments: [],
			lineNumber: +t[3],
			column: t[4] ? +t[4] : null,
		}
		: null;
}
var Yc =
		/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
	Zc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function Xc(e) {
	var t = Yc.exec(e);
	if (!t) return null;
	var r = t[3] && t[3].indexOf(' > eval') > -1, n = Zc.exec(t[3]);
	return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), {
		file: t[3],
		methodName: t[1] || cr,
		arguments: t[2] ? t[2].split(',') : [],
		lineNumber: t[4] ? +t[4] : null,
		column: t[5] ? +t[5] : null,
	};
}
var ep = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function tp(e) {
	var t = ep.exec(e);
	return t
		? {
			file: t[3],
			methodName: t[1] || cr,
			arguments: [],
			lineNumber: +t[4],
			column: t[5] ? +t[5] : null,
		}
		: null;
}
var rp =
	/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function np(e) {
	var t = rp.exec(e);
	return t
		? {
			file: t[2],
			methodName: t[1] || cr,
			arguments: [],
			lineNumber: +t[3],
			column: t[4] ? +t[4] : null,
		}
		: null;
}
var Ai = class {
		getLocation() {
			return null;
		}
	},
	Fi = class {
		constructor() {
			this._error = new Error();
		}
		getLocation() {
			let t = this._error.stack;
			if (!t) return null;
			let n = js(t).find((i) => {
				if (!i.file) return !1;
				let o = Bn(i.file);
				return o !== '<anonymous>' && !o.includes('@prisma') &&
					!o.includes('/packages/client/src/runtime/') &&
					!o.endsWith('/runtime/binary.js') &&
					!o.endsWith('/runtime/library.js') &&
					!o.endsWith('/runtime/data-proxy.js') &&
					!o.endsWith('/runtime/edge.js') &&
					!o.endsWith('/runtime/edge-esm.js') &&
					!o.startsWith('internal/') &&
					!i.methodName.includes('new ') &&
					!i.methodName.includes('getCallSite') &&
					!i.methodName.includes('Proxy.') &&
					i.methodName.split('.').length < 4;
			});
			return !n || !n.file ? null : {
				fileName: n.file,
				lineNumber: n.lineNumber,
				columnNumber: n.column,
			};
		}
	};
function ze(e) {
	return e === 'minimal' ? new Ai() : new Fi();
}
function De(e) {
	let t,
		r = (n) => {
			try {
				return n === void 0 || n?.kind === 'itx'
					? t ?? (t = qs(e(n)))
					: qs(e(n));
			} catch (i) {
				return Promise.reject(i);
			}
		};
	return {
		then(n, i, o) {
			return r(o).then(n, i, o);
		},
		catch(n, i) {
			return r(i).catch(n, i);
		},
		finally(n, i) {
			return r(i).finally(n, i);
		},
		requestTransaction(n) {
			let i = r(n);
			return i.requestTransaction ? i.requestTransaction(n) : i;
		},
		[Symbol.toStringTag]: 'PrismaPromise',
	};
}
function qs(e) {
	return typeof e.then == 'function' ? e : Promise.resolve(e);
}
var Bs = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function At(e = {}) {
	let t = op(e);
	return Object.entries(t).reduce(
		(
			n,
			[i, o],
		) => (Bs[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n),
		{ select: {} },
	);
}
function op(e = {}) {
	return typeof e._count == 'boolean'
		? { ...e, _count: { _all: e._count } }
		: e;
}
function nn(e = {}) {
	return (
		t,
	) => (typeof e._count == 'boolean' && (t._count = t._count._all), t);
}
function Vs(e, t) {
	let r = nn(e);
	return t({ action: 'aggregate', unpacker: r, argsMapper: At })(e);
}
function sp(e = {}) {
	let { select: t, ...r } = e;
	return typeof t == 'object'
		? At({ ...r, _count: t })
		: At({ ...r, _count: { _all: !0 } });
}
function ap(e = {}) {
	return typeof e.select == 'object'
		? (t) => nn(e)(t)._count
		: (t) => nn(e)(t)._count._all;
}
function Us(e, t) {
	return t({ action: 'count', unpacker: ap(e), argsMapper: sp })(e);
}
function up(e = {}) {
	let t = At(e);
	if (Array.isArray(t.by)) {
		for (let r of t.by) typeof r == 'string' && (t.select[r] = !0);
	}
	return t;
}
function lp(e = {}) {
	return (t) => (typeof e?._count == 'boolean' && t.forEach((r) => {
		r._count = r._count._all;
	}),
		t);
}
function Ks(e, t) {
	return t({ action: 'groupBy', unpacker: lp(e), argsMapper: up })(e);
}
function Js(e, t, r) {
	if (t === 'aggregate') return (n) => Vs(n, r);
	if (t === 'count') return (n) => Us(n, r);
	if (t === 'groupBy') return (n) => Ks(n, r);
}
function Qs(e, t) {
	let r = t.fields.filter((i) => !i.relationName), n = Un(r, (i) => i.name);
	return new Proxy({}, {
		get(i, o) {
			if (o in i || typeof o == 'symbol') return i[o];
			let s = n[o];
			if (s) return new Ee(e, o, s.type, s.isList, s.kind === 'enum');
		},
		...rn(Object.keys(n)),
	});
}
function cp(e, t) {
	return e === void 0 || t === void 0 ? [] : [...t, 'select', e];
}
function pp(e, t, r) {
	return t === void 0 ? e ?? {} : Hr(t, r, e || !0);
}
function Ci(e, t, r, n, i, o) {
	let a = e._runtimeDataModel.models[t].fields.reduce(
		(u, l) => ({ ...u, [l.name]: l }),
		{},
	);
	return (u) => {
		let l = ze(e._errorFormat),
			c = cp(n, i),
			p = pp(u, o, c),
			f = r({ dataPath: c, callsite: l })(p),
			d = fp(e, t);
		return new Proxy(f, {
			get(g, m) {
				if (!d.includes(m)) return g[m];
				let h = [a[m].type, r, m], x = [c, p];
				return Ci(e, ...h, ...x);
			},
			...rn([...d, ...Object.getOwnPropertyNames(f)]),
		});
	};
}
function fp(e, t) {
	return e._runtimeDataModel.models[t].fields.filter((r) =>
		r.kind === 'object'
	).map((r) => r.name);
}
var on = Gs().version;
var xe = class extends te {
	constructor(t) {
		super(t, { code: 'P2025', clientVersion: on }),
			this.name = 'NotFoundError';
	}
};
F(xe, 'NotFoundError');
function Ri(e, t, r, n) {
	let i;
	if (
		r && typeof r == 'object' && 'rejectOnNotFound' in r &&
		r.rejectOnNotFound !== void 0
	) i = r.rejectOnNotFound, delete r.rejectOnNotFound;
	else if (typeof n == 'boolean') i = n;
	else if (n && typeof n == 'object' && e in n) {
		let o = n[e];
		if (o && typeof o == 'object') return t in o ? o[t] : void 0;
		i = Ri(e, t, r, o);
	} else typeof n == 'function' ? i = n : i = !1;
	return i;
}
var mp = /(findUnique|findFirst)/;
function Ws(e, t, r, n) {
	if (r ?? (r = 'record'), n && !e && mp.exec(t)) {
		throw typeof n == 'boolean' && n
			? new xe(`No ${r} found`)
			: typeof n == 'function'
			? n(new xe(`No ${r} found`))
			: It(n)
			? n
			: new xe(`No ${r} found`);
	}
}
function Hs(e, t, r) {
	return e === ye.ModelAction.findFirstOrThrow ||
			e === ye.ModelAction.findUniqueOrThrow
		? gp(t, r)
		: r;
}
function gp(e, t) {
	return async (r) => {
		if ('rejectOnNotFound' in r.args) {
			let i = Se({
				originalMethod: r.clientMethod,
				callsite: r.callsite,
				message: '\'rejectOnNotFound\' option is not supported',
			});
			throw new J(i);
		}
		return await t(r).catch((i) => {
			throw i instanceof te && i.code === 'P2025'
				? new xe(`No ${e} found`)
				: i;
		});
	};
}
var yp = [
		'findUnique',
		'findUniqueOrThrow',
		'findFirst',
		'findFirstOrThrow',
		'create',
		'update',
		'upsert',
		'delete',
	],
	hp = ['aggregate', 'count', 'groupBy'];
function Si(e, t) {
	let r = [bp(e, t), Ep(t)];
	e._engineConfig.previewFeatures?.includes('fieldReference') &&
		r.push(wp(e, t));
	let n = e._extensions.getAllModelExtensions(t);
	return n && r.push(lr(n)), He({}, r);
}
function Ep(e) {
	return We('name', () => e);
}
function bp(e, t) {
	let r = be(t), n = Object.keys(ye.ModelAction).concat('count');
	return {
		getKeys() {
			return n;
		},
		getPropertyValue(i) {
			let o = i, s = (u) => e._request(u);
			s = Hs(o, t, s);
			let a = (u) => (l) => {
				let c = ze(e._errorFormat);
				return De((p) => {
					let f = {
						args: l,
						dataPath: [],
						action: o,
						model: t,
						clientMethod: `${r}.${i}`,
						jsModelName: r,
						transaction: p,
						callsite: c,
					};
					return s({ ...f, ...u });
				});
			};
			return yp.includes(o) ? Ci(e, t, a) : xp(i) ? Js(e, i, a) : a({});
		},
	};
}
function xp(e) {
	return hp.includes(e);
}
function wp(e, t) {
	return it(We('fields', () => {
		let r = e._runtimeDataModel.models[t];
		return Qs(t, r);
	}));
}
function zs(e) {
	return e.replace(/^./, (t) => t.toUpperCase());
}
var Di = Symbol();
function sn(e) {
	let t = [Tp(e), We(Di, () => e)],
		r = e._extensions.getAllClientExtensions();
	return r && t.push(lr(r)), He(e, t);
}
function Tp(e) {
	let t = Object.keys(e._runtimeDataModel.models),
		r = t.map(be),
		n = [...new Set(t.concat(r))];
	return it({
		getKeys() {
			return n;
		},
		getPropertyValue(i) {
			let o = zs(i);
			if (e._runtimeDataModel.models[o] !== void 0) return Si(e, o);
			if (e._runtimeDataModel.models[i] !== void 0) return Si(e, i);
		},
		getPropertyDescriptor(i) {
			if (!r.includes(i)) return { enumerable: !1 };
		},
	});
}
function Ys(e) {
	return e[Di] ? e[Di] : e;
}
function Zs(e) {
	if (!this._hasPreviewFlag('clientExtensions')) {
		throw new J(
			'Extensions are not yet generally available, please add `clientExtensions` to the `previewFeatures` field in the `generator` block in the `schema.prisma` file.',
		);
	}
	if (typeof e == 'function') return e(this);
	let t = Ys(this),
		r = Object.create(t, {
			_extensions: { value: this._extensions.append(e) },
		});
	return sn(r);
}
function Oe(e) {
	if (typeof e != 'object') return e;
	var t, r, n = Object.prototype.toString.call(e);
	if (n === '[object Object]') {
		if (e.constructor !== Object && typeof e.constructor == 'function') {
			r = new e.constructor();
			for (t in e) {
				e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = Oe(e[t]));
			}
		} else {
			r = {};
			for (t in e) {
				t === '__proto__'
					? Object.defineProperty(r, t, {
						value: Oe(e[t]),
						configurable: !0,
						enumerable: !0,
						writable: !0,
					})
					: r[t] = Oe(e[t]);
			}
		}
		return r;
	}
	if (n === '[object Array]') {
		for (t = e.length, r = Array(t); t--;) r[t] = Oe(e[t]);
		return r;
	}
	return n === '[object Set]'
		? (r = new Set(),
			e.forEach(function (i) {
				r.add(Oe(i));
			}),
			r)
		: n === '[object Map]'
		? (r = new Map(),
			e.forEach(function (i, o) {
				r.set(Oe(o), Oe(i));
			}),
			r)
		: n === '[object Date]'
		? new Date(+e)
		: n === '[object RegExp]'
		? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r)
		: n === '[object DataView]'
		? new e.constructor(Oe(e.buffer))
		: n === '[object ArrayBuffer]'
		? e.slice(0)
		: n.slice(-6) === 'Array]'
		? new e.constructor(e)
		: e;
}
function Xs(e, t, r, n = 0) {
	return De((i) => {
		let o = t.customDataProxyFetch ?? ((s) => s);
		return i !== void 0 &&
			(t.transaction?.kind === 'batch' && t.transaction.lock.then(),
				t.transaction = i),
			n === r.length ? e._executeRequest(t) : r[n]({
				model: t.model,
				operation: t.model ? t.action : t.clientMethod,
				args: Oe(t.args ?? {}),
				__internalParams: t,
				query: (s, a = t) => {
					let u = a.customDataProxyFetch ?? ((l) => l);
					return a.customDataProxyFetch = (l) => o(u(l)),
						a.args = s,
						Xs(e, a, r, n + 1);
				},
			});
	});
}
function ea(e, t) {
	let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
	if (e._extensions.isEmpty()) return e._executeRequest(t);
	let s = e._extensions.getAllQueryCallbacks(r ?? '*', o);
	return Xs(e, t, s);
}
var an = class {
		constructor(t, r) {
			this.extension = t;
			this.previous = r;
			this.computedFieldsCache = new Re();
			this.modelExtensionsCache = new Re();
			this.queryCallbacksCache = new Re();
			this.clientExtensions = Sr(() =>
				this.extension.client
					? {
						...this.previous?.getAllClientExtensions(),
						...this.extension.client,
					}
					: this.previous?.getAllClientExtensions()
			);
		}
		getAllComputedFields(t) {
			return this.computedFieldsCache.getOrCreate(
				t,
				() =>
					cs(
						this.previous?.getAllComputedFields(t),
						this.extension,
						t,
					),
			);
		}
		getAllClientExtensions() {
			return this.clientExtensions.get();
		}
		getAllModelExtensions(t) {
			return this.modelExtensionsCache.getOrCreate(t, () => {
				let r = be(t);
				return !this.extension.model ||
						!(this.extension.model[r] ||
							this.extension.model.$allModels)
					? this.previous?.getAllModelExtensions(t)
					: {
						...this.previous?.getAllModelExtensions(t),
						...this.extension.model.$allModels,
						...this.extension.model[r],
					};
			});
		}
		getAllQueryCallbacks(t, r) {
			return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
				let n = this.previous?.getAllQueryCallbacks(t, r) ?? [],
					i = [],
					o = this.extension.query;
				return !o || !(o[t] || o.$allModels || o[r])
					? n
					: (o[t] !== void 0 &&
						(o[t][r] !== void 0 && i.push(o[t][r]),
							o[t].$allOperations !== void 0 &&
							i.push(o[t].$allOperations)),
						o.$allModels !== void 0 &&
						(o.$allModels[r] !== void 0 && i.push(o.$allModels[r]),
							o.$allModels.$allOperations !== void 0 &&
							i.push(o.$allModels.$allOperations)),
						o[r] !== void 0 && i.push(o[r]),
						n.concat(i));
			});
		}
	},
	Ye = class {
		constructor(t) {
			this.head = t;
		}
		static empty() {
			return new Ye();
		}
		static single(t) {
			return new Ye(new an(t));
		}
		isEmpty() {
			return this.head === void 0;
		}
		append(t) {
			return new Ye(new an(t, this.head));
		}
		getAllComputedFields(t) {
			return this.head?.getAllComputedFields(t);
		}
		getAllClientExtensions() {
			return this.head?.getAllClientExtensions();
		}
		getAllModelExtensions(t) {
			return this.head?.getAllModelExtensions(t);
		}
		getAllQueryCallbacks(t, r) {
			return this.head?.getAllQueryCallbacks(t, r) ?? [];
		}
	};
var ta = ee('prisma:client'),
	ra = { Vercel: 'vercel', 'Netlify CI': 'netlify' };
function na({ postinstall: e, ciName: t, clientVersion: r }) {
	if (
		ta('checkPlatformCaching:postinstall', e),
			ta('checkPlatformCaching:ciName', t),
			e === !0 && t && t in ra
	) {
		let n =
			`Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ra[t]}-build`;
		throw console.error(n), new ue(n, r);
	}
}
var Pp = {
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
	un = class {
		constructor(t, r) {
			this.dmmf = t;
			this.errorFormat = r;
		}
		createMessage(
			{
				action: t,
				modelName: r,
				args: n,
				extensions: i,
				clientMethod: o,
				callsite: s,
			},
		) {
			let a, u = Pp[t];
			(t === 'executeRaw' || t === 'queryRaw' || t === 'runCommandRaw') &&
				(a = t);
			let l;
			if (r !== void 0) {
				if (l = this.dmmf?.mappingsMap[r], l === void 0) {
					throw new Error(`Could not find mapping for model ${r}`);
				}
				if (a = l[t === 'count' ? 'aggregate' : t], !a) {
					let f = Se({
						message:
							`Model \`${r}\` does not support \`${t}\` action.`,
						originalMethod: o,
						callsite: s,
					});
					throw new J(f);
				}
			}
			if (u !== 'query' && u !== 'mutation') {
				throw new Error(`Invalid operation ${u} for action ${t}`);
			}
			if (this.dmmf?.rootFieldMap[a] === void 0) {
				throw new Error(
					`Could not find rootField ${a} for action ${t} for model ${r} on rootType ${u}`,
				);
			}
			let p = Xr({
				dmmf: this.dmmf,
				rootField: a,
				rootTypeName: u,
				select: n,
				modelName: r,
				extensions: i,
			});
			return p.validate(n, !1, o, this.errorFormat, s), new Oi(p);
		}
		createBatch(t) {
			return t.map((r) => r.toEngineQuery());
		}
	},
	Oi = class {
		constructor(t) {
			this.document = t;
		}
		isWrite() {
			return this.document.type === 'mutation';
		}
		getBatchId() {
			if (!this.getRootField().startsWith('findUnique')) return;
			let t = this.document.children[0].args?.args.map((n) =>
					n.value instanceof oe
						? `${n.key}-${n.value.args.map((i) => i.key).join(',')}`
						: n.key
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
			let n = this.getRootField(), i = [];
			return n && i.push(n),
				i.push(...r.filter((o) => o !== 'select' && o !== 'include')),
				en({ document: this.document, path: i, data: t });
		}
		getRootField() {
			return this.document.children[0].name;
		}
	};
function ln(e) {
	return e === null
		? e
		: Array.isArray(e)
		? e.map(ln)
		: typeof e == 'object'
		? vp(e) ? Mp(e) : ft(e, ln)
		: e;
}
function vp(e) {
	return e !== null && typeof e == 'object' && typeof e.$type == 'string';
}
function Mp({ $type: e, value: t }) {
	switch (e) {
		case 'BigInt':
			return BigInt(t);
		case 'Bytes':
			return Buffer.from(t, 'base64');
		case 'DateTime':
			return new Date(t);
		case 'Decimal':
			return new fe(t);
		case 'Json':
			return JSON.parse(t);
		default:
			ke(t, 'Unknown tagged value');
	}
}
var cn = class {
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
		for (let i = 0; i < r.length; i++) {
			this.write(r[i]), i !== n && this.write(t);
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
		return this.afterNextNewLineCallback = void 0, t?.(), this;
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
var aa = K(Lr());
var je = class {
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
var pn = (e) => e,
	ia = { bold: pn, red: pn, green: pn, dim: pn },
	oa = { bold: R, red: O, green: D, dim: N },
	Ft = {
		write(e) {
			e.writeLine(',');
		},
	};
var Ie = class {
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
var Ze = class {
	constructor() {
		this.hasError = !1;
	}
	markAsError() {
		return this.hasError = !0, this;
	}
};
var q = class extends Ze {
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
		let [n, ...i] = r, o = this.getField(n);
		if (!o) return;
		let s = o;
		for (let a of i) {
			if (!(s.value instanceof q)) return;
			let u = s.value.getField(a);
			if (!u) return;
			s = u;
		}
		return s;
	}
	getDeepFieldValue(r) {
		return r.length === 0 ? this : this.getDeepField(r)?.value;
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
		return this.getField(r)?.value;
	}
	getDeepSubSelectionValue(r) {
		let n = this;
		for (let i of r) {
			if (!(n instanceof q)) return;
			let o = n.getSubSelectionValue(i);
			if (!o) return;
			n = o;
		}
		return n;
	}
	getDeepSelectionParent(r) {
		let n = this.getSelectionParent();
		if (!n) return;
		let i = n;
		for (let o of r) {
			let s = i.value.getFieldValue(o);
			if (!s || !(s instanceof q)) return;
			let a = s.getSelectionParent();
			if (!a) return;
			i = a;
		}
		return i;
	}
	getSelectionParent() {
		let r = this.getField('select');
		if (r?.value instanceof q) return { kind: 'select', value: r.value };
		let n = this.getField('include');
		if (n?.value instanceof q) return { kind: 'include', value: n.value };
	}
	getSubSelectionValue(r) {
		return this.getSelectionParent()?.value.fields[r].value;
	}
	getPrintWidth() {
		let r = Object.values(this.fields);
		return r.length == 0
			? 2
			: Math.max(...r.map((i) => i.getPrintWidth())) + 2;
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
		let n = new Ie('{}');
		this.hasError && n.setColor(r.context.colors.red).underline(),
			r.write(n);
	}
	writeWithContents(r, n) {
		r.writeLine('{').withIndent(() => {
			r.writeJoined(Ft, [...n, ...this.suggestions]).newLine();
		}),
			r.write('}'),
			this.hasError && r.afterNextNewline(() => {
				r.writeLine(
					r.context.colors.red('~'.repeat(this.getPrintWidth())),
				);
			});
	}
};
var Y = class extends Ze {
	constructor(r) {
		super();
		this.text = r;
	}
	getPrintWidth() {
		return this.text.length;
	}
	write(r) {
		let n = new Ie(this.text);
		this.hasError && n.underline().setColor(r.context.colors.red),
			r.write(n);
	}
};
var fn = class {
	constructor() {
		this.fields = [];
	}
	addField(t, r) {
		return this.fields.push({
			write(n) {
				let { green: i, dim: o } = n.context.colors;
				n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o('+')));
			},
		}),
			this;
	}
	write(t) {
		let { colors: { green: r } } = t.context;
		t.writeLine(r('{')).withIndent(() => {
			t.writeJoined(Ft, this.fields).newLine();
		}).write(r('}')).addMarginSymbol(r('+'));
	}
};
function Ii(e, t) {
	switch (e.kind) {
		case 'IncludeAndSelect':
			Fp(e, t);
			break;
		case 'IncludeOnScalar':
			Cp(e, t);
			break;
		case 'EmptySelection':
			Rp(e, t);
			break;
		case 'UnknownSelectionField':
			Sp(e, t);
			break;
		case 'UnknownArgument':
			Dp(e, t);
			break;
		case 'UnknownInputField':
			Op(e, t);
			break;
		case 'RequiredArgumentMissing':
			Ip(e, t);
			break;
		case 'InvalidArgumentType':
			kp(e, t);
			break;
		case 'InvalidArgumentValue':
			Np(e, t);
			break;
		case 'ValueTooLarge':
			$p(e, t);
			break;
		case 'SomeFieldsMissing':
			_p(e, t);
			break;
		case 'TooManyFieldsGiven':
			Lp(e, t);
			break;
		case 'Union':
			jp(e, t);
			break;
		default:
			throw new Error('not implemented: ' + e.kind);
	}
}
function Fp(e, t) {
	let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	r && r instanceof q &&
	(r.getField('include')?.markAsError(), r.getField('select')?.markAsError()),
		t.addErrorMessage((n) =>
			`Please ${n.bold('either')} use ${n.green('`include`')} or ${
				n.green('`select`')
			}, but ${n.red('not both')} at the same time.`
		);
}
function Cp(e, t) {
	let [r, n] = dn(e.selectionPath),
		i = e.outputType,
		o = t.arguments.getDeepSelectionParent(r)?.value;
	if (o && (o.getField(n)?.markAsError(), i)) {
		for (let s of i.fields) {
			s.isRelation && o.addSuggestion(new je(s.name, 'true'));
		}
	}
	t.addErrorMessage((s) => {
		let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${
			s.bold('include')
		} statement`;
		return i ? a += ` on model ${s.bold(i.name)}. ${pr(s)}` : a += '.',
			a += `
Note that ${s.bold('include')} statements only accept relation fields.`,
			a;
	});
}
function Rp(e, t) {
	let r = e.outputType,
		n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value,
		i = n?.isEmpty() ?? !1;
	n && (n.removeAllFields(), pa(n, r)),
		t.addErrorMessage((o) =>
			i
				? `The ${o.red('`select`')} statement for type ${
					o.bold(r.name)
				} must not be empty. ${pr(o)}`
				: `The ${o.red('`select`')} statement for type ${
					o.bold(r.name)
				} needs ${o.bold('at least one truthy value')}.`
		);
}
function Sp(e, t) {
	let [r, n] = dn(e.selectionPath), i = t.arguments.getDeepSelectionParent(r);
	i && (i.value.getField(n)?.markAsError(), pa(i.value, e.outputType)),
		t.addErrorMessage((o) => {
			let s = [`Unknown field ${o.red(`\`${n}\``)}`];
			return i && s.push(`for ${o.bold(i.kind)} statement`),
				s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`),
				s.push(pr(o)),
				s.join(' ');
		});
}
function Dp(e, t) {
	let r = e.argumentPath[0],
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	n instanceof q && (n.getField(r)?.markAsError(), Vp(n, e.arguments)),
		t.addErrorMessage((i) => ua(i, r, e.arguments.map((o) => o.name)));
}
function Op(e, t) {
	let [r, n] = dn(e.argumentPath),
		i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	if (i instanceof q) {
		i.getDeepField(e.argumentPath)?.markAsError();
		let o = i.getDeepFieldValue(r);
		o instanceof q && fa(o, e.inputType);
	}
	t.addErrorMessage((o) => ua(o, n, e.inputType.fields.map((s) => s.name)));
}
function ua(e, t, r) {
	let n = [`Unknown argument \`${e.red(t)}\`.`], i = Kp(t, r);
	return i && n.push(`Did you mean \`${e.green(i)}\`?`),
		r.length > 0 && n.push(pr(e)),
		n.join(' ');
}
function Ip(e, t) {
	let r;
	t.addErrorMessage((u) =>
		r?.value instanceof Y && r.value.text === 'null'
			? `Argument \`${u.green(o)}\` must not be ${u.red('null')}.`
			: `Argument \`${u.green(o)}\` is missing.`
	);
	let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	if (!(n instanceof q)) return;
	let [i, o] = dn(e.argumentPath), s = new fn(), a = n.getDeepFieldValue(i);
	if (a instanceof q) {
		if (
			r = a.getField(o),
				r && a.removeField(o),
				e.inputTypes.length === 1 && e.inputTypes[0].kind === 'object'
		) {
			for (let u of e.inputTypes[0].fields) {
				s.addField(u.name, u.typeNames.join(' | '));
			}
			a.addSuggestion(new je(o, s).makeRequired());
		} else {
			let u = e.inputTypes.map(la).join(' | ');
			a.addSuggestion(new je(o, u).makeRequired());
		}
	}
}
function la(e) {
	return e.kind === 'list' ? `${la(e.elementType)}[]` : e.name;
}
function kp(e, t) {
	let r = e.argument.name,
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	n instanceof q && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
		t.addErrorMessage((i) => {
			let o = mn('or', e.argument.typeNames.map((s) => i.green(s)));
			return `Argument \`${
				i.bold(r)
			}\`: Invalid value provided. Expected ${o}, provided ${
				i.red(e.inferredType)
			}.`;
		});
}
function Np(e, t) {
	let r = e.argument.name,
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	n instanceof q && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
		t.addErrorMessage((i) => {
			let o = mn('or', e.argument.typeNames.map((a) => i.green(a))),
				s = [`Invalid value for argument \`${i.bold(r)}\``];
			return e.underlyingError && s.push(`: ${e.underlyingError}`),
				s.push(`. Expected ${o}.`),
				s.join('');
		});
}
function $p(e, t) {
	let r = e.argument.name,
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
		i;
	if (n instanceof q) {
		let s = n.getDeepField(e.argumentPath)?.value;
		s?.markAsError(), s instanceof Y && (i = s.text);
	}
	t.addErrorMessage((o) => {
		let s = ['Unable to fit value'];
		return i && s.push(o.red(i)),
			s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),
			s.join(' ');
	});
}
function _p(e, t) {
	let r = e.argumentPath[e.argumentPath.length - 1],
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	if (n instanceof q) {
		let i = n.getDeepFieldValue(e.argumentPath);
		i instanceof q && fa(i, e.inputType);
	}
	t.addErrorMessage((i) => {
		let o = [
			`Argument \`${i.bold(r)}\` of type ${
				i.bold(e.inputType.name)
			} needs`,
		];
		return e.constraints.minFieldCount === 1
			? e.constraints.requiredFields
				? o.push(
					`${i.green('at least one of')} ${
						mn(
							'or',
							e.constraints.requiredFields.map((s) =>
								`\`${i.bold(s)}\``
							),
						)
					} arguments.`,
				)
				: o.push(`${i.green('at least one')} argument.`)
			: o.push(
				`${
					i.green(`at least ${e.constraints.minFieldCount}`)
				} arguments.`,
			),
			o.push(pr(i)),
			o.join(' ');
	});
}
function Lp(e, t) {
	let r = e.argumentPath[e.argumentPath.length - 1],
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
		i = [];
	if (n instanceof q) {
		let o = n.getDeepFieldValue(e.argumentPath);
		o instanceof q && (o.markAsError(), i = Object.keys(o.getFields()));
	}
	t.addErrorMessage((o) => {
		let s = [
			`Argument \`${o.bold(r)}\` of type ${
				o.bold(e.inputType.name)
			} needs`,
		];
		return e.constraints.minFieldCount === 1 &&
				e.constraints.maxFieldCount == 1
			? s.push(`${o.green('exactly one')} argument,`)
			: e.constraints.maxFieldCount == 1
			? s.push(`${o.green('at most one')} argument,`)
			: s.push(
				`${
					o.green(`at most ${e.constraints.maxFieldCount}`)
				} arguments,`,
			),
			s.push(
				`but you provided ${
					mn(
						'and',
						i.map((a) => o.red(a)),
					)
				}. Please choose`,
			),
			e.constraints.maxFieldCount === 1
				? s.push('one.')
				: s.push(`${e.constraints.maxFieldCount}.`),
			s.join(' ');
	});
}
function jp(e, t) {
	let r = ca(e);
	r ? Ii(r, t) : t.addErrorMessage(() => 'Unknown error');
}
function ca(e) {
	return qp(e) ?? Bp(e);
}
function qp({ errors: e }) {
	if (e.length === 0 || e[0].kind !== 'InvalidArgumentType') return;
	let t = { ...e[0], argument: { ...e[0].argument } };
	for (let r = 1; r < e.length; r++) {
		let n = e[r];
		if (
			n.kind !== 'InvalidArgumentType' ||
			!sa(n.selectionPath, t.selectionPath) ||
			!sa(n.argumentPath, t.argumentPath)
		) return;
		t.argument.typeNames = t.argument.typeNames.concat(
			n.argument.typeNames,
		);
	}
	return t;
}
function sa(e, t) {
	if (e.length !== t.length) return !1;
	for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
	return !0;
}
function Bp(e) {
	return Kn(e.errors, (t) => {
		t.kind === 'Union' && (t = ca(t) ?? t);
		let r = 0;
		return Array.isArray(t.selectionPath) && (r += t.selectionPath.length),
			Array.isArray(t.argumentPath) && (r += t.argumentPath.length),
			r;
	});
}
function pa(e, t) {
	for (let r of t.fields) {
		e.hasField(r.name) || e.addSuggestion(new je(r.name, 'true'));
	}
}
function Vp(e, t) {
	for (let r of t) {
		e.hasField(r.name) ||
			e.addSuggestion(new je(r.name, r.typeNames.join(' | ')));
	}
}
function fa(e, t) {
	if (t.kind === 'object') {
		for (let r of t.fields) {
			e.hasField(r.name) ||
				e.addSuggestion(new je(r.name, r.typeNames.join(' | ')));
		}
	}
}
function dn(e) {
	let t = [...e], r = t.pop();
	if (!r) throw new Error('unexpected empty path');
	return [t, r];
}
function pr({ green: e }) {
	return `Available options are listed in ${e('green')}.`;
}
function mn(e, t) {
	if (t.length === 1) return t[0];
	let r = [...t], n = r.pop();
	return `${r.join(', ')} ${e} ${n}`;
}
var Up = 3;
function Kp(e, t) {
	let r = 1 / 0, n;
	for (let i of t) {
		let o = (0, aa.default)(e, i);
		o > Up || o < r && (r = o, n = i);
	}
	return n;
}
var gn = class extends Ze {
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
		let n = new Ie('[]');
		this.hasError && n.setColor(r.context.colors.red).underline(),
			r.write(n);
	}
	writeWithItems(r) {
		let { colors: n } = r.context;
		r.writeLine('[').withIndent(() =>
			r.writeJoined(Ft, this.items).newLine()
		).write(']'),
			this.hasError && r.afterNextNewline(() => {
				r.writeLine(n.red('~'.repeat(this.getPrintWidth())));
			});
	}
};
var da = ': ',
	yn = class {
		constructor(t, r) {
			this.name = t;
			this.value = r;
			this.hasError = !1;
		}
		markAsError() {
			this.hasError = !0;
		}
		getPrintWidth() {
			return this.name.length + this.value.getPrintWidth() + da.length;
		}
		write(t) {
			let r = new Ie(this.name);
			this.hasError && r.underline().setColor(t.context.colors.red),
				t.write(r).write(da).write(this.value);
		}
	};
var ki = class {
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
function ma(e) {
	return new ki(ga(e));
}
function ga(e) {
	let t = new q();
	for (let [r, n] of Object.entries(e)) {
		let i = new yn(r, ya(n));
		t.addField(i);
	}
	return t;
}
function ya(e) {
	if (typeof e == 'string') return new Y(JSON.stringify(e));
	if (typeof e == 'number' || typeof e == 'boolean') return new Y(String(e));
	if (typeof e == 'bigint') return new Y(`${e}n`);
	if (e === null) return new Y('null');
	if (e === void 0) return new Y('undefined');
	if (Qe(e)) return new Y(`new Prisma.Decimal("${e.toFixed()}")`);
	if (e instanceof Uint8Array) {
		return Buffer.isBuffer(e)
			? new Y(`Buffer.alloc(${e.byteLength})`)
			: new Y(`new Uint8Array(${e.byteLength})`);
	}
	if (e instanceof Date) {
		let t = Ce(e) ? e.toISOString() : 'Invalid Date';
		return new Y(`new Date("${t}")`);
	}
	if (e instanceof ne) return new Y(`Prisma.${e._getName()}`);
	if (jr(e)) return new Y(`prisma.${wt(e.modelName)}.$fields.${e.name}`);
	if (Array.isArray(e)) return Jp(e);
	if (typeof e == 'object') return ga(e);
	ke(e, 'Unknown value type');
}
function Jp(e) {
	let t = new gn();
	for (let r of e) t.addItem(ya(r));
	return t;
}
function hn(
	{ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i },
) {
	let o = ma(e);
	for (let c of t) Ii(c, o);
	let s = r === 'pretty' ? oa : ia,
		a = o.renderAllMessages(s),
		u = new cn(0, { colors: s }).write(o).toString(),
		l = Se({
			message: a,
			callsite: n,
			originalMethod: i,
			showColors: r === 'pretty',
			callArguments: u,
		});
	throw new J(l);
}
var Qp = {
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
function ha(
	{
		modelName: e,
		action: t,
		args: r,
		runtimeDataModel: n,
		extensions: i,
		callsite: o,
		clientMethod: s,
		errorFormat: a,
	},
) {
	let u = new Ct({
		runtimeDataModel: n,
		modelName: e,
		action: t,
		rootArgs: r,
		callsite: o,
		extensions: i,
		selectionPath: [],
		argumentPath: [],
		originalMethod: s,
		errorFormat: a,
	});
	return { modelName: e, action: Qp[t], query: Ni(r, u) };
}
function Ni({ select: e, include: t, ...r } = {}, n) {
	return { arguments: ba(r, n), selection: Gp(e, t, n) };
}
function Gp(e, t, r) {
	return e && t &&
		r.throwValidationError({
			kind: 'IncludeAndSelect',
			selectionPath: r.getSelectionPath(),
		}),
		e ? zp(e, r) : Wp(r, t);
}
function Wp(e, t) {
	let r = {};
	return e.model && !e.isRawAction() && (r.$composites = !0, r.$scalars = !0),
		t && Hp(r, t, e),
		r;
}
function Hp(e, t, r) {
	for (let [n, i] of Object.entries(t)) {
		let o = r.findField(n);
		o && o?.kind !== 'object' &&
		r.throwValidationError({
			kind: 'IncludeOnScalar',
			selectionPath: r.getSelectionPath().concat(n),
			outputType: r.getOutputTypeDescription(),
		}),
			i === !0
				? e[n] = !0
				: typeof i == 'object' && (e[n] = Ni(i, r.nestSelection(n)));
	}
}
function zp(e, t) {
	let r = {}, n = t.getComputedFields(), i = Gr(e, n);
	for (let [o, s] of Object.entries(i)) {
		let a = t.findField(o);
		n?.[o] && !a ||
			(s === !0
				? r[o] = !0
				: typeof s == 'object' && (r[o] = Ni(s, t.nestSelection(o))));
	}
	return r;
}
function Ea(e, t) {
	if (e === null) return null;
	if (typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean') {
		return e;
	}
	if (typeof e == 'bigint') return { $type: 'BigInt', value: String(e) };
	if (de(e)) {
		if (Ce(e)) return { $type: 'DateTime', value: e.toISOString() };
		t.throwValidationError({
			kind: 'InvalidArgumentValue',
			selectionPath: t.getSelectionPath(),
			argumentPath: t.getArgumentPath(),
			argument: { name: t.getArgumentName(), typeNames: ['Date'] },
			underlyingError: 'Provided Date object is invalid',
		});
	}
	if (jr(e)) return { $type: 'FieldRef', value: { _ref: e.name } };
	if (Array.isArray(e)) return Yp(e, t);
	if (ArrayBuffer.isView(e)) {
		return { $type: 'Bytes', value: Buffer.from(e).toString('base64') };
	}
	if (Zp(e)) return e.values;
	if (Qe(e)) return { $type: 'Decimal', value: e.toFixed() };
	if (e instanceof ne) {
		if (e !== yt.instances[e._getName()]) {
			throw new Error('Invalid ObjectEnumValue');
		}
		return { $type: 'Enum', value: e._getName() };
	}
	if (typeof e == 'object') return ba(e, t);
	ke(e, 'Unknown value type');
}
function ba(e, t) {
	if (e.$type) return { $type: 'Json', value: JSON.stringify(e) };
	let r = {};
	for (let n in e) {
		let i = e[n];
		i !== void 0 && (r[n] = Ea(i, t.nestArgument(n)));
	}
	return r;
}
function Yp(e, t) {
	let r = [];
	for (let n = 0; n < e.length; n++) {
		let i = e[n];
		i !== void 0 && r.push(Ea(i, t.nestArgument(String(n))));
	}
	return r;
}
function Zp(e) {
	return typeof e == 'object' && e !== null &&
		e.__prismaRawParameters__ === !0;
}
var Ct = class {
	constructor(t) {
		this.params = t;
		this.params.modelName &&
			(this.model =
				this.params.runtimeDataModel.models[this.params.modelName]);
	}
	throwValidationError(t) {
		hn({
			errors: [t],
			originalMethod: this.params.originalMethod,
			args: this.params.rootArgs ?? {},
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
		return this.model?.fields.find((r) => r.name === t);
	}
	nestSelection(t) {
		let r = this.findField(t), n = r?.kind === 'object' ? r.type : void 0;
		return new Ct({
			...this.params,
			modelName: n,
			selectionPath: this.params.selectionPath.concat(t),
		});
	}
	nestArgument(t) {
		return new Ct({
			...this.params,
			argumentPath: this.params.argumentPath.concat(t),
		});
	}
};
var fr = class {
		constructor(t, r) {
			this.runtimeDataModel = t;
			this.errorFormat = r;
		}
		createMessage(t) {
			let r = ha({
				...t,
				runtimeDataModel: this.runtimeDataModel,
				errorFormat: this.errorFormat,
			});
			return new En(r);
		}
		createBatch(t) {
			return t.map((r) => r.toEngineQuery());
		}
	},
	Xp = {
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
	En = class {
		constructor(t) {
			this.query = t;
		}
		isWrite() {
			return Xp[this.query.action];
		}
		getBatchId() {
			if (this.query.action !== 'findUnique') return;
			let t = [];
			return this.query.modelName && t.push(this.query.modelName),
				this.query.query.arguments &&
				t.push($i(this.query.query.arguments)),
				t.push($i(this.query.query.selection)),
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
				i = r.filter((o) => o !== 'select' && o !== 'include');
			return ln(sr(n, i));
		}
	};
function $i(e) {
	return `(${
		Object.keys(e).sort().map((r) => {
			let n = e[r];
			return typeof n == 'object' && n !== null ? `(${r} ${$i(n)})` : r;
		}).join(' ')
	})`;
}
var me = class {
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
			(s, a) => s + (a instanceof me ? a.values.length : 1),
			0,
		);
		this.values = new Array(n),
			this.strings = new Array(n + 1),
			this.strings[0] = t[0];
		let i = 0, o = 0;
		for (; i < r.length;) {
			let s = r[i++], a = t[i];
			if (s instanceof me) {
				this.strings[o] += s.strings[0];
				let u = 0;
				for (; u < s.values.length;) {
					this.values[o++] = s.values[u++],
						this.strings[o] = s.strings[u];
				}
				this.strings[o] += a;
			} else this.values[o++] = s, this.strings[o] = a;
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
function xa(e, t = ',', r = '', n = '') {
	if (e.length === 0) {
		throw new TypeError(
			'Expected `join([])` to be called with an array of multiple elements, but got an empty array',
		);
	}
	return new me([r, ...Array(e.length - 1).fill(t), n], e);
}
function _i(e) {
	return new me([e], []);
}
var wa = _i('');
function Li(e, ...t) {
	return new me(e, t);
}
var ji = (e) => e.reduce((t, r, n) => `${t}@P${n}${r}`);
function Rt(e) {
	try {
		return Ta(e, 'fast');
	} catch {
		return Ta(e, 'slow');
	}
}
function Ta(e, t) {
	return JSON.stringify(e.map((r) => ef(r, t)));
}
function ef(e, t) {
	return typeof e == 'bigint'
		? { prisma__type: 'bigint', prisma__value: e.toString() }
		: de(e)
		? { prisma__type: 'date', prisma__value: e.toJSON() }
		: fe.isDecimal(e)
		? { prisma__type: 'decimal', prisma__value: e.toJSON() }
		: Buffer.isBuffer(e)
		? { prisma__type: 'bytes', prisma__value: e.toString('base64') }
		: tf(e) || ArrayBuffer.isView(e)
		? {
			prisma__type: 'bytes',
			prisma__value: Buffer.from(e).toString('base64'),
		}
		: typeof e == 'object' && t === 'slow'
		? va(e)
		: e;
}
function tf(e) {
	return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
		? !0
		: typeof e == 'object' && e !== null
		? e[Symbol.toStringTag] === 'ArrayBuffer' ||
			e[Symbol.toStringTag] === 'SharedArrayBuffer'
		: !1;
}
function va(e) {
	if (typeof e != 'object' || e === null) return e;
	if (typeof e.toJSON == 'function') return e.toJSON();
	if (Array.isArray(e)) return e.map(Pa);
	let t = {};
	for (let r of Object.keys(e)) t[r] = Pa(e[r]);
	return t;
}
function Pa(e) {
	return typeof e == 'bigint' ? e.toString() : va(e);
}
var rf = /^(\s*alter\s)/i, Ma = ee('prisma:client');
function qi(e, t, r) {
	if (t.length > 0 && rf.exec(e)) {
		throw new Error(`Running ALTER using ${r} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
	}
}
function nf(e) {
	return Array.isArray(e);
}
var Bi = (e, t) => ([r, ...n]) => {
	let i = '', o;
	if (typeof r == 'string') {
		i = r,
			o = { values: Rt(n || []), __prismaRawParameters__: !0 },
			t.includes('executeRaw') &&
			qi(i, n, 'prisma.$executeRawUnsafe(<SQL>, [...values])');
	} else if (nf(r)) {
		switch (e._activeProvider) {
			case 'sqlite':
			case 'mysql': {
				let s = new me(r, n);
				i = s.sql,
					o = { values: Rt(s.values), __prismaRawParameters__: !0 };
				break;
			}
			case 'cockroachdb':
			case 'postgresql': {
				let s = new me(r, n);
				i = s.text,
					t.includes('executeRaw') &&
					qi(i, s.values, 'prisma.$executeRaw`<SQL>`'),
					o = { values: Rt(s.values), __prismaRawParameters__: !0 };
				break;
			}
			case 'sqlserver': {
				i = ji(r), o = { values: Rt(n), __prismaRawParameters__: !0 };
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
				i = r.sql;
				break;
			case 'cockroachdb':
			case 'postgresql':
				i = r.text,
					t.includes('executeRaw') &&
					qi(i, r.values, 'prisma.$executeRaw(sql`<SQL>`)');
				break;
			case 'sqlserver':
				i = ji(r.strings);
				break;
			default:
				throw new Error(
					`The ${e._activeProvider} provider does not support ${t}`,
				);
		}
		o = { values: Rt(r.values), __prismaRawParameters__: !0 };
	}
	return o?.values
		? Ma(`prisma.${t}(${i}, ${o.values})`)
		: Ma(`prisma.${t}(${i})`),
		{ query: i, parameters: o };
};
var Aa = {
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
	Vi = class {
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
			return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Aa;
		}
	};
function Fa(e) {
	return e.includes('tracing') ? new Vi() : Aa;
}
function Ca(e, t = () => {}) {
	let r, n = new Promise((i) => r = i);
	return {
		then(i) {
			return --e === 0 && r(t()), i?.(n);
		},
	};
}
function Ra(e) {
	return typeof e == 'string' ? e : e.reduce((t, r) => {
		let n = typeof r == 'string' ? r : r.level;
		return n === 'query'
			? t
			: t && (r === 'info' || t === 'info')
			? 'info'
			: n;
	}, void 0);
}
function Da(e, t, r) {
	let n = Sa(e, r),
		i = Sa(t, r),
		o = Object.values(i).map((a) => a[a.length - 1]),
		s = Object.keys(i);
	return Object.entries(n).forEach(([a, u]) => {
		s.includes(a) || o.push(u[u.length - 1]);
	}),
		o;
}
var Sa = (e, t) =>
	e.reduce((r, n) => {
		let i = t(n);
		return r[i] || (r[i] = []), r[i].push(n), r;
	}, {});
var bn = class {
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
var ka = K(Cr());
function xn(e) {
	return typeof e.batchRequestIdx == 'number';
}
function Oa({ result: e, modelName: t, select: r, extensions: n }) {
	let i = n.getAllComputedFields(t);
	if (!i) return e;
	let o = [], s = [];
	for (let a of Object.values(i)) {
		if (r) {
			if (!r[a.name]) continue;
			let u = a.needs.filter((l) => !r[l]);
			u.length > 0 && s.push(Mi(u));
		}
		of(e, a.needs) && o.push(sf(a, He(e, o)));
	}
	return o.length > 0 || s.length > 0 ? He(e, [...o, ...s]) : e;
}
function of(e, t) {
	return t.every((r) => Vn(e, r));
}
function sf(e, t) {
	return it(We(e.name, () => e.compute(t)));
}
function wn(
	{ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i },
) {
	if (Array.isArray(t)) {
		for (let s = 0; s < t.length; s++) {
			t[s] = wn({
				result: t[s],
				args: r,
				modelName: i,
				runtimeDataModel: n,
				visitor: e,
			});
		}
		return t;
	}
	let o = e(t, i, r) ?? t;
	return r.include &&
		Ia({
			includeOrSelect: r.include,
			result: o,
			parentModelName: i,
			runtimeDataModel: n,
			visitor: e,
		}),
		r.select &&
		Ia({
			includeOrSelect: r.select,
			result: o,
			parentModelName: i,
			runtimeDataModel: n,
			visitor: e,
		}),
		o;
}
function Ia(
	{
		includeOrSelect: e,
		result: t,
		parentModelName: r,
		runtimeDataModel: n,
		visitor: i,
	},
) {
	for (let [o, s] of Object.entries(e)) {
		if (!s || t[o] == null) continue;
		let u = n.models[r].fields.find((c) => c.name === o);
		if (!u || u.kind !== 'object' || !u.relationName) continue;
		let l = typeof s == 'object' ? s : {};
		t[o] = wn({
			visitor: i,
			result: t[o],
			args: l,
			modelName: u.type,
			runtimeDataModel: n,
		});
	}
}
var Tn = class {
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
					this.tickActive ||
					(this.tickActive = !0,
						process.nextTick(() => {
							this.dispatchBatches(), this.tickActive = !1;
						}))),
				new Promise((n, i) => {
					this.batches[r].push({ request: t, resolve: n, reject: i });
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
								for (let i = 0; i < r.length; i++) {
									r[i].reject(n);
								}
							} else {for (let i = 0; i < r.length; i++) {
									let o = n[i];
									o instanceof Error
										? r[i].reject(o)
										: r[i].resolve(o);
								}}
						},
					).catch((n) => {
						for (let i = 0; i < r.length; i++) r[i].reject(n);
					});
		}
	}
	get [Symbol.toStringTag]() {
		return 'DataLoader';
	}
};
var af = ee('prisma:client:request_handler'),
	Pn = class {
		constructor(t, r) {
			this.logEmitter = r,
				this.client = t,
				this.dataloader = new Tn({
					batchLoader: (n) => {
						let {
								transaction: i,
								protocolEncoder: o,
								otelParentCtx: s,
							} = n[0],
							a = o.createBatch(n.map((c) => c.protocolMessage)),
							u = this.client._tracingHelper.getTraceParent(s),
							l = n.some((c) => c.protocolMessage.isWrite());
						return this.client._engine.requestBatch(a, {
							traceparent: u,
							transaction: uf(i),
							containsWrite: l,
							customDataProxyFetch: n[0].customDataProxyFetch,
						});
					},
					singleLoader: (n) => {
						let i = n.transaction?.kind === 'itx'
							? Na(n.transaction)
							: void 0;
						return this.client._engine.request(
							n.protocolMessage.toEngineQuery(),
							{
								traceparent: this.client._tracingHelper
									.getTraceParent(),
								interactiveTransaction: i,
								isWrite: n.protocolMessage.isWrite(),
								customDataProxyFetch: n.customDataProxyFetch,
							},
						);
					},
					batchBy: (n) =>
						n.transaction?.id
							? `transaction-${n.transaction.id}`
							: n.protocolMessage.getBatchId(),
				});
		}
		async request({
			protocolMessage: t,
			protocolEncoder: r,
			dataPath: n = [],
			callsite: i,
			modelName: o,
			rejectOnNotFound: s,
			clientMethod: a,
			args: u,
			transaction: l,
			unpacker: c,
			extensions: p,
			otelParentCtx: f,
			otelChildCtx: d,
			customDataProxyFetch: g,
		}) {
			try {
				let m = await this.dataloader.request({
						protocolMessage: t,
						protocolEncoder: r,
						transaction: l,
						otelParentCtx: f,
						otelChildCtx: d,
						customDataProxyFetch: g,
					}),
					b = m?.data,
					h = m?.elapsed,
					x = this.unpack(t, b, n, c);
				return Ws(x, a, o, s),
					o &&
					(x = this.applyResultExtensions({
						result: x,
						modelName: o,
						args: u,
						extensions: p,
					})),
					process.env.PRISMA_CLIENT_GET_TIME
						? { data: x, elapsed: h }
						: x;
			} catch (m) {
				this.handleAndLogRequestError({
					error: m,
					clientMethod: a,
					callsite: i,
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
			{ error: t, clientMethod: r, callsite: n, transaction: i, args: o },
		) {
			if (af(t), lf(t, i) || t instanceof xe) throw t;
			if (t instanceof te && cf(t)) {
				let a = $a(t.meta);
				hn({
					args: o,
					errors: [a],
					callsite: n,
					errorFormat: this.client._errorFormat,
					originalMethod: r,
				});
			}
			let s = t.message;
			throw n &&
				(s = Se({
					callsite: n,
					originalMethod: r,
					isPanic: t.isPanic,
					showColors: this.client._errorFormat === 'pretty',
					message: s,
				})),
				s = this.sanitizeMessage(s),
				t.code
					? new te(s, {
						code: t.code,
						clientVersion: this.client._clientVersion,
						meta: t.meta,
						batchRequestIdx: t.batchRequestIdx,
					})
					: t.isPanic
					? new Ne(s, this.client._clientVersion)
					: t instanceof he
					? new he(s, {
						clientVersion: this.client._clientVersion,
						batchRequestIdx: t.batchRequestIdx,
					})
					: t instanceof ue
					? new ue(s, this.client._clientVersion)
					: t instanceof Ne
					? new Ne(s, this.client._clientVersion)
					: (t.clientVersion = this.client._clientVersion, t);
		}
		sanitizeMessage(t) {
			return this.client._errorFormat &&
					this.client._errorFormat !== 'pretty'
				? (0, ka.default)(t)
				: t;
		}
		unpack(t, r, n, i) {
			if (!r) return r;
			r.data && (r = r.data);
			let o = t.deserializeResponse(r, n);
			return i ? i(o) : o;
		}
		applyResultExtensions(
			{ result: t, modelName: r, args: n, extensions: i },
		) {
			return i.isEmpty() || t == null ||
					!this.client._runtimeDataModel.models[r]
				? t
				: wn({
					result: t,
					args: n ?? {},
					modelName: r,
					runtimeDataModel: this.client._runtimeDataModel,
					visitor(s, a, u) {
						let l = be(a);
						return Oa({
							result: s,
							modelName: l,
							select: u.select,
							extensions: i,
						});
					},
				});
		}
		get [Symbol.toStringTag]() {
			return 'RequestHandler';
		}
	};
function uf(e) {
	if (!!e) {
		if (e.kind === 'batch') {
			return {
				kind: 'batch',
				options: { isolationLevel: e.isolationLevel },
			};
		}
		if (e.kind === 'itx') return { kind: 'itx', options: Na(e) };
		ke(e, 'Unknown transaction kind');
	}
}
function Na(e) {
	return { id: e.id, payload: e.payload };
}
function lf(e, t) {
	return xn(e) && t?.kind === 'batch' && e.batchRequestIdx !== t.index;
}
function cf(e) {
	return e.code === 'P2009' || e.code === 'P2012';
}
function $a(e) {
	if (e.kind === 'Union') return { kind: 'Union', errors: e.errors.map($a) };
	if (Array.isArray(e.selectionPath)) {
		let [, ...t] = e.selectionPath;
		return { ...e, selectionPath: t };
	}
	return e;
}
function _a(e) {
	return e.map((t) => {
		let r = {};
		for (let n of Object.keys(t)) r[n] = La(t[n]);
		return r;
	});
}
function La({ prisma__type: e, prisma__value: t }) {
	switch (e) {
		case 'bigint':
			return BigInt(t);
		case 'bytes':
			return Buffer.from(t, 'base64');
		case 'decimal':
			return new fe(t);
		case 'datetime':
		case 'date':
			return new Date(t);
		case 'time':
			return new Date(`1970-01-01T${t}Z`);
		case 'array':
			return t.map(La);
		default:
			return t;
	}
}
var Va = K(Lr());
var ja = [
		'datasources',
		'errorFormat',
		'log',
		'__internal',
		'rejectOnNotFound',
	],
	qa = ['pretty', 'colorless', 'minimal'],
	Ba = ['info', 'query', 'warn', 'error'],
	pf = {
		datasources: (e, t) => {
			if (!!e) {
				if (typeof e != 'object' || Array.isArray(e)) {
					throw new G(
						`Invalid value ${
							JSON.stringify(e)
						} for "datasources" provided to PrismaClient constructor`,
					);
				}
				for (let [r, n] of Object.entries(e)) {
					if (!t.includes(r)) {
						let i = St(r, t) ||
							`Available datasources: ${t.join(', ')}`;
						throw new G(
							`Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
						);
					}
					if (typeof n != 'object' || Array.isArray(n)) {
						throw new G(
							`Invalid value ${
								JSON.stringify(e)
							} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
						);
					}
					if (n && typeof n == 'object') {
						for (let [i, o] of Object.entries(n)) {
							if (i !== 'url') {
								throw new G(
									`Invalid value ${
										JSON.stringify(e)
									} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
								);
							}
							if (typeof o != 'string') {
								throw new G(
									`Invalid value ${
										JSON.stringify(o)
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
					throw new G(
						`Invalid value ${
							JSON.stringify(e)
						} for "errorFormat" provided to PrismaClient constructor.`,
					);
				}
				if (!qa.includes(e)) {
					let t = St(e, qa);
					throw new G(
						`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
					);
				}
			}
		},
		log: (e) => {
			if (!e) return;
			if (!Array.isArray(e)) {
				throw new G(
					`Invalid value ${
						JSON.stringify(e)
					} for "log" provided to PrismaClient constructor.`,
				);
			}
			function t(r) {
				if (typeof r == 'string' && !Ba.includes(r)) {
					let n = St(r, Ba);
					throw new G(
						`Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
					);
				}
			}
			for (let r of e) {
				t(r);
				let n = {
					level: t,
					emit: (i) => {
						let o = ['stdout', 'event'];
						if (!o.includes(i)) {
							let s = St(i, o);
							throw new G(
								`Invalid value ${
									JSON.stringify(i)
								} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
							);
						}
					},
				};
				if (r && typeof r == 'object') {
					for (let [i, o] of Object.entries(r)) {
						if (n[i]) {
							n[i](o);
						} else {throw new G(
								`Invalid property ${i} for "log" provided to PrismaClient constructor`,
							);}
					}
				}
			}
		},
		__internal: (e) => {
			if (!e) return;
			let t = ['debug', 'hooks', 'engine', 'measurePerformance'];
			if (typeof e != 'object') {
				throw new G(
					`Invalid value ${
						JSON.stringify(e)
					} for "__internal" to PrismaClient constructor`,
				);
			}
			for (let [r] of Object.entries(e)) {
				if (!t.includes(r)) {
					let n = St(r, t);
					throw new G(
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
					It(e) || typeof e == 'boolean' || typeof e == 'object' ||
					typeof e == 'function'
				) return e;
				throw new G(
					`Invalid rejectOnNotFound expected a boolean/Error/{[modelName: Error | boolean]} but received ${
						JSON.stringify(e)
					}`,
				);
			}
		},
	};
function Ua(e, t) {
	for (let [r, n] of Object.entries(e)) {
		if (!ja.includes(r)) {
			let i = St(r, ja);
			throw new G(
				`Unknown property ${r} provided to PrismaClient constructor.${i}`,
			);
		}
		pf[r](n, t);
	}
}
function St(e, t) {
	if (t.length === 0 || typeof e != 'string') return '';
	let r = ff(e, t);
	return r ? ` Did you mean "${r}"?` : '';
}
function ff(e, t) {
	if (t.length === 0) return null;
	let r = t.map((i) => ({ value: i, distance: (0, Va.default)(e, i) }));
	r.sort((i, o) => i.distance < o.distance ? -1 : 1);
	let n = r[0];
	return n.distance < 3 ? n.value : null;
}
function Ka(e) {
	return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
		let n = new Array(e.length),
			i = null,
			o = !1,
			s = 0,
			a = () => {
				o || (s++, s === e.length && (o = !0, i ? r(i) : t(n)));
			},
			u = (l) => {
				o || (o = !0, r(l));
			};
		for (let l = 0; l < e.length; l++) {
			e[l].then((c) => {
				n[l] = c, a();
			}, (c) => {
				if (!xn(c)) {
					u(c);
					return;
				}
				c.batchRequestIdx === l ? u(c) : (i || (i = c), a());
			});
		}
	});
}
var Ae = ee('prisma:client');
typeof globalThis == 'object' && (globalThis.NODE_CLIENT = !0);
var df = Symbol.for('prisma.client.transaction.id'),
	mf = {
		id: 0,
		nextId() {
			return ++this.id;
		},
	};
function Ha(e) {
	class t {
		constructor(n) {
			this._middlewares = new bn();
			this._getDmmf = Rr(async (n) => {
				try {
					let i = await this._tracingHelper.runInChildSpan({
						name: 'getDmmf',
						internal: !0,
					}, () => this._engine.getDmmf());
					return this._tracingHelper.runInChildSpan({
						name: 'processDmmf',
						internal: !0,
					}, () => new Ge(ts(i)));
				} catch (i) {
					this._fetcher.handleAndLogRequestError({
						...n,
						args: {},
						error: i,
					});
				}
			});
			this._getProtocolEncoder = Rr(async (n) =>
				this._engineConfig.engineProtocol === 'json'
					? new fr(this._runtimeDataModel, this._errorFormat)
					: (this._dmmf === void 0 &&
						(this._dmmf = await this._getDmmf(n)),
						new un(this._dmmf, this._errorFormat))
			);
			this.$extends = Zs;
			na(e), n && Ua(n, e.datasourceNames);
			let i = new Ga.EventEmitter().on('error', () => {});
			this._extensions = Ye.empty(),
				this._previewFeatures = e.generator?.previewFeatures ?? [],
				this._rejectOnNotFound = n?.rejectOnNotFound,
				this._clientVersion = e.clientVersion ?? on,
				this._activeProvider = e.activeProvider,
				this._dataProxy = e.dataProxy,
				this._tracingHelper = Fa(this._previewFeatures),
				this._clientEngineType = _n(e.generator);
			let o = {
					rootEnvPath: e.relativeEnvPaths.rootEnvPath &&
						dr.default.resolve(
							e.dirname,
							e.relativeEnvPaths.rootEnvPath,
						),
					schemaEnvPath: e.relativeEnvPaths.schemaEnvPath &&
						dr.default.resolve(
							e.dirname,
							e.relativeEnvPaths.schemaEnvPath,
						),
				},
				s = Ot(o, { conflictCheck: 'none' });
			try {
				let a = n ?? {}, u = a.__internal ?? {}, l = u.debug === !0;
				l && ee.enable('prisma:client');
				let c = dr.default.resolve(e.dirname, e.relativePath);
				Wa.default.existsSync(c) || (c = e.dirname),
					Ae('dirname', e.dirname),
					Ae('relativePath', e.relativePath),
					Ae('cwd', c);
				let p = a.datasources || {},
					f = Object.entries(p).filter(([b, h]) => h && h.url).map((
						[b, { url: h }],
					) => ({ name: b, url: h })),
					d = Da([], f, (b) => b.name),
					g = u.engine || {};
				a.errorFormat
					? this._errorFormat = a.errorFormat
					: process.env.NODE_ENV === 'production'
					? this._errorFormat = 'minimal'
					: process.env.NO_COLOR
					? this._errorFormat = 'colorless'
					: this._errorFormat = 'colorless',
					e.runtimeDataModel
						? this._runtimeDataModel = e.runtimeDataModel
						: this._runtimeDataModel = So(e.document.datamodel);
				let m = jn(e.generator);
				if (
					Ae('protocol', m),
						e.document && (this._dmmf = new Ge(e.document)),
						this._engineConfig = {
							cwd: c,
							dirname: e.dirname,
							enableDebugLogs: l,
							allowTriggerPanic: g.allowTriggerPanic,
							datamodelPath: dr.default.join(
								e.dirname,
								e.filename ?? 'schema.prisma',
							),
							prismaPath: g.binaryPath ?? void 0,
							engineEndpoint: g.endpoint,
							datasources: d,
							generator: e.generator,
							showColors: this._errorFormat === 'pretty',
							logLevel: a.log && Ra(a.log),
							logQueries: a.log &&
								Boolean(
									typeof a.log == 'string'
										? a.log === 'query'
										: a.log.find((b) =>
											typeof b == 'string'
												? b === 'query'
												: b.level === 'query'
										),
								),
							env: s?.parsed ?? e.injectableEdgeEnv?.parsed ?? {},
							flags: [],
							clientVersion: e.clientVersion,
							previewFeatures: this._previewFeatures,
							activeProvider: e.activeProvider,
							inlineSchema: e.inlineSchema,
							inlineDatasources: e.inlineDatasources,
							inlineSchemaHash: e.inlineSchemaHash,
							tracingHelper: this._tracingHelper,
							logEmitter: i,
							engineProtocol: m,
							isBundled: e.isBundled,
						},
						Ae('clientVersion', e.clientVersion),
						Ae(
							'clientEngineType',
							this._dataProxy
								? 'dataproxy'
								: this._clientEngineType,
						),
						this._dataProxy &&
						Ae('using Data Proxy with Node.js runtime'),
						this._engine = this.getEngine(),
						this._fetcher = new Pn(this, i),
						a.log
				) {
					for (let b of a.log) {
						let h = typeof b == 'string'
							? b
							: b.emit === 'stdout'
							? b.level
							: null;
						h && this.$on(h, (x) => {
							Nt.log(`${Nt.tags[h] ?? ''}`, x.message || x.query);
						});
					}
				}
				this._metrics = new dt(this._engine);
			} catch (a) {
				throw a.clientVersion = this._clientVersion, a;
			}
			return sn(this);
		}
		get [Symbol.toStringTag]() {
			return 'PrismaClient';
		}
		getEngine() {
			if (this._dataProxy === !0) return new ir(this._engineConfig);
			throw this._clientEngineType,
				'library',
				this._clientEngineType,
				'binary',
				new J(
					'Invalid client engine type, please use `library` or `binary`',
				);
		}
		$use(n) {
			this._middlewares.use(n);
		}
		$on(n, i) {
			n === 'beforeExit'
				? this._engine.on('beforeExit', i)
				: this._engine.on(n, (o) => {
					let s = o.fields;
					return i(
						n === 'query'
							? {
								timestamp: o.timestamp,
								query: s?.query ?? o.query,
								params: s?.params ?? o.params,
								duration: s?.duration_ms ?? o.duration,
								target: o.target,
							}
							: {
								timestamp: o.timestamp,
								message: s?.message ?? o.message,
								target: o.target,
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
				fo(), this._dataProxy || (this._dmmf = void 0);
			}
		}
		$executeRawInternal(n, i, o) {
			return this._request({
				action: 'executeRaw',
				args: o,
				transaction: n,
				clientMethod: i,
				argsMapper: Bi(this, i),
				callsite: ze(this._errorFormat),
				dataPath: [],
			});
		}
		$executeRaw(n, ...i) {
			return De((o) => {
				if (n.raw !== void 0 || n.sql !== void 0) {
					return this.$executeRawInternal(o, '$executeRaw', [
						n,
						...i,
					]);
				}
				throw new J(
					'`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${\'user@email.com\'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n',
				);
			});
		}
		$executeRawUnsafe(n, ...i) {
			return De((o) =>
				this.$executeRawInternal(o, '$executeRawUnsafe', [n, ...i])
			);
		}
		$runCommandRaw(n) {
			if (e.activeProvider !== 'mongodb') {
				throw new J(
					`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
				);
			}
			return De((i) =>
				this._request({
					args: { command: n },
					clientMethod: '$runCommandRaw',
					dataPath: [],
					action: 'runCommandRaw',
					callsite: ze(this._errorFormat),
					transaction: i,
				})
			);
		}
		async $queryRawInternal(n, i, o) {
			return this._request({
				action: 'queryRaw',
				args: o,
				transaction: n,
				clientMethod: i,
				argsMapper: Bi(this, i),
				callsite: ze(this._errorFormat),
				dataPath: [],
			}).then(_a);
		}
		$queryRaw(n, ...i) {
			return De((o) => {
				if (n.raw !== void 0 || n.sql !== void 0) {
					return this.$queryRawInternal(o, '$queryRaw', [n, ...i]);
				}
				throw new J(
					'`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${\'user@email.com\'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n',
				);
			});
		}
		$queryRawUnsafe(n, ...i) {
			return De((o) =>
				this.$queryRawInternal(o, '$queryRawUnsafe', [n, ...i])
			);
		}
		_transactionWithArray({ promises: n, options: i }) {
			let o = mf.nextId(),
				s = Ca(n.length),
				a = n.map((u, l) => {
					if (u?.[Symbol.toStringTag] !== 'PrismaPromise') {
						throw new Error(
							'All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.',
						);
					}
					let c = i?.isolationLevel,
						p = {
							kind: 'batch',
							id: o,
							index: l,
							isolationLevel: c,
							lock: s,
						};
					return u.requestTransaction?.(p) ?? u;
				});
			return Ka(a);
		}
		async _transactionWithCallback({ callback: n, options: i }) {
			let o = { traceparent: this._tracingHelper.getTraceParent() },
				s = await this._engine.transaction('start', o, i),
				a;
			try {
				let u = { kind: 'itx', ...s };
				a = await n(Ui(this, u)),
					await this._engine.transaction('commit', o, s);
			} catch (u) {
				throw await this._engine.transaction('rollback', o, s).catch(
					() => {},
				),
					u;
			}
			return a;
		}
		$transaction(n, i) {
			let o;
			typeof n == 'function'
				? o = () =>
					this._transactionWithCallback({ callback: n, options: i })
				: o = () =>
					this._transactionWithArray({ promises: n, options: i });
			let s = {
				name: 'transaction',
				attributes: { method: '$transaction' },
			};
			return this._tracingHelper.runInChildSpan(s, o);
		}
		_request(n) {
			n.otelParentCtx = this._tracingHelper.getActiveContext();
			let i = {
					args: n.args,
					dataPath: n.dataPath,
					runInTransaction: Boolean(n.transaction),
					action: n.action,
					model: n.model,
				},
				o = {
					middleware: {
						name: 'middleware',
						middleware: !0,
						attributes: { method: '$use' },
						active: !1,
					},
					operation: {
						name: 'operation',
						attributes: {
							method: i.action,
							model: i.model,
							name: `${i.model}.${i.action}`,
						},
					},
				},
				s = -1,
				a = (u) => {
					let l = this._middlewares.get(++s);
					if (l) {
						return this._tracingHelper.runInChildSpan(
							o.middleware,
							(d) => l(u, (g) => (d?.end(), a(g))),
						);
					}
					let { runInTransaction: c, ...p } = u, f = { ...n, ...p };
					return c || (f.transaction = void 0), ea(this, f);
				};
			return this._tracingHelper.runInChildSpan(
				o.operation,
				() =>
					new Qa.AsyncResource('prisma-client-request')
						.runInAsyncScope(() => a(i)),
			);
		}
		async _executeRequest(
			{
				args: n,
				clientMethod: i,
				dataPath: o,
				callsite: s,
				action: a,
				model: u,
				argsMapper: l,
				transaction: c,
				unpacker: p,
				otelParentCtx: f,
				customDataProxyFetch: d,
			},
		) {
			try {
				let g = await this._getProtocolEncoder({
					clientMethod: i,
					callsite: s,
				});
				n = l ? l(n) : n;
				let m = { name: 'serialize' }, b;
				u && (b = Ri(a, u, n, this._rejectOnNotFound), yf(b, u, a));
				let h = this._tracingHelper.runInChildSpan(
					m,
					() =>
						g.createMessage({
							modelName: u,
							action: a,
							args: n,
							clientMethod: i,
							callsite: s,
							extensions: this._extensions,
						}),
				);
				return ee.enabled('prisma:client') &&
					(Ae('Prisma Client call:'),
						Ae(`prisma.${i}(${
							zr({
								ast: n,
								keyPaths: [],
								valuePaths: [],
								missingItems: [],
							})
						})`),
						Ae('Generated request:'),
						Ae(
							h.toDebugString() + `
`,
						)),
					c?.kind === 'batch' && await c.lock,
					this._fetcher.request({
						protocolMessage: h,
						protocolEncoder: g,
						modelName: u,
						clientMethod: i,
						dataPath: o,
						rejectOnNotFound: b,
						callsite: s,
						args: n,
						extensions: this._extensions,
						transaction: c,
						unpacker: p,
						otelParentCtx: f,
						otelChildCtx: this._tracingHelper.getActiveContext(),
						customDataProxyFetch: d,
					});
			} catch (g) {
				throw g.clientVersion = this._clientVersion, g;
			}
		}
		get $metrics() {
			if (!this._hasPreviewFlag('metrics')) {
				throw new J(
					'`metrics` preview feature must be enabled in order to access metrics API',
				);
			}
			return this._metrics;
		}
		_hasPreviewFlag(n) {
			return !!this._engineConfig.previewFeatures?.includes(n);
		}
	}
	return t;
}
var Ja = ['$connect', '$disconnect', '$on', '$transaction', '$use', '$extends'];
function Ui(e, t) {
	return typeof e != 'object' ? e : new Proxy(e, {
		get: (r, n) => {
			if (!Ja.includes(n)) {
				return n === df
					? t?.id
					: typeof r[n] == 'function'
					? (...i) =>
						n === 'then'
							? r[n](i[0], i[1], t)
							: n === 'catch' || n === 'finally'
							? r[n](i[0], t)
							: Ui(r[n](...i), t)
					: Ui(r[n], t);
			}
		},
		has(r, n) {
			return Ja.includes(n) ? !1 : Reflect.has(r, n);
		},
	});
}
var gf = { findUnique: 'findUniqueOrThrow', findFirst: 'findFirstOrThrow' };
function yf(e, t, r) {
	if (e) {
		let n = gf[r],
			i = t ? `prisma.${be(t)}.${n}` : `prisma.${n}`,
			o = `rejectOnNotFound.${t ?? ''}.${r}`;
		_t(
			o,
			`\`rejectOnNotFound\` option is deprecated and will be removed in Prisma 5. Please use \`${i}\` method instead`,
		);
	}
}
var hf = new Set([
	'toJSON',
	'$$typeof',
	'asymmetricMatch',
	Symbol.iterator,
	Symbol.toStringTag,
	Symbol.isConcatSpreadable,
	Symbol.toPrimitive,
]);
function za(e) {
	return new Proxy(e, {
		get(t, r) {
			if (r in t) return t[r];
			if (!hf.has(r)) {
				throw new TypeError(`Invalid enum value: ${String(r)}`);
			}
		},
	});
}
var Xa = K(Za()), eu = (e) => Xa.decompressFromBase64(e);
function tu(e) {
	Ot(e, { conflictCheck: 'warn' });
}
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
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
/*!
 * @description Recursive object extending
 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
 * @license MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2018 Viacheslav Lotsmanov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
//# sourceMappingURL=data-proxy.js.map
