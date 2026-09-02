/* @ds-bundle: {"format":4,"namespace":"BlankSpaceVenturesDesignSystem_8e9344","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"087bc2c039dc","components/core/Button.jsx":"5c03c05049ec","components/core/Card.jsx":"75f297ebadcb","components/core/Eyebrow.jsx":"3042a34ea8c7","components/core/Icon.jsx":"c340cce1da1a","components/core/IconButton.jsx":"a3e6a89e57f6","components/core/Logo.jsx":"729a18db3ec9","components/core/Stat.jsx":"69d03140259c","components/core/Tag.jsx":"146fa8650248","components/feedback/Dialog.jsx":"86e71528db51","components/feedback/Toast.jsx":"46b95ff3d831","components/feedback/Tooltip.jsx":"af312ffb544a","components/forms/Checkbox.jsx":"640c5f2be2a2","components/forms/Field.jsx":"b1f966a1b46f","components/forms/Input.jsx":"5cea45458cf7","components/forms/Radio.jsx":"cae3fc1e5a20","components/forms/Select.jsx":"a2d201f49471","components/forms/Switch.jsx":"0a2ea325a37d","components/forms/Textarea.jsx":"40f69d45db3a","components/navigation/NavItem.jsx":"c191b73db11a","components/navigation/Tabs.jsx":"a38bdc017ba4","ui_kits/dealflow/CompanyScreen.jsx":"f9bdea1bc638","ui_kits/dealflow/MemoScreen.jsx":"220e485442d7","ui_kits/dealflow/PipelineScreen.jsx":"c5a51a4892e7","ui_kits/dealflow/Shell.jsx":"2649a7e2b25a","ui_kits/dealflow/deals.jsx":"4a764064a842","ui_kits/dealflow/main.jsx":"49c7b9795318","ui_kits/website/Chrome.jsx":"7cf35e8ed8ce","ui_kits/website/ContactScreen.jsx":"fa3c8ed482c9","ui_kits/website/HomeScreen.jsx":"370a9e12fb83","ui_kits/website/PortfolioScreen.jsx":"bdca133414ff","ui_kits/website/ThesisScreen.jsx":"eb18d6ec9ff8","ui_kits/website/data.jsx":"abec27dfcc14","ui_kits/website/main.jsx":"d90b381447e2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BlankSpaceVenturesDesignSystem_8e9344 = window.BlankSpaceVenturesDesignSystem_8e9344 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--surface-inset)',
    color: 'var(--text-secondary)'
  },
  live: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--text-accent)'
  },
  brand: {
    background: 'var(--surface-brand-soft)',
    color: 'var(--text-brand)'
  },
  solid: {
    background: 'var(--bsv-near-black)',
    color: 'var(--bsv-white)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  dot,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--ui-note)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-note)',
      textTransform: 'uppercase',
      ...TONES[tone],
      ...style
    }
  }), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'currentColor'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  interactive,
  accent,
  padding = 'var(--space-6)',
  as: Tag = 'div',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      background: 'var(--surface-panel)',
      border: '1px solid ' + (hover && interactive ? 'var(--border-default)' : 'var(--border-hairline)'),
      borderTop: accent ? 'var(--keyline-accent-width) solid var(--bsv-amber)' : undefined,
      borderRadius: 'var(--radius-md)',
      padding,
      boxShadow: hover && interactive ? 'var(--shadow-md)' : 'none',
      transform: hover && interactive ? 'var(--hover-lift)' : 'none',
      transition: 'var(--transition-control), transform var(--duration-fast) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'muted',
  as: Tag = 'div',
  style,
  ...rest
}) {
  const colors = {
    muted: 'var(--text-muted)',
    primary: 'var(--text-primary)',
    accent: 'var(--text-accent)',
    inverse: 'var(--text-inverse-muted)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-label)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: colors[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Substituted icon set — the brand supplies no icon library (see readme.md, ICONOGRAPHY).
   Lucide v0.454.0 (ISC licence), 24px grid, drawn here at 1.5px stroke to sit closer to Söhne.
   Glyph paths are inlined so an icon needs no network request and no asset path; the same
   glyphs are on disk in assets/icons/ for use outside React. To adopt a real Blank Space set,
   replace GLYPHS — this file is the only place icon artwork lives. */
const GLYPHS = {
  'arrow-right': '<path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />',
  'arrow-up-right': '<path d="M7 7h10v10" /> <path d="M7 17 17 7" />',
  'plus': '<path d="M5 12h14" /> <path d="M12 5v14" />',
  'x': '<path d="M18 6 6 18" /> <path d="m6 6 12 12" />',
  'check': '<path d="M20 6 9 17l-5-5" />',
  'search': '<circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" />',
  'filter': '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />',
  'chevron-down': '<path d="m6 9 6 6 6-6" />',
  'bell': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /> <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />',
  'clock': '<circle cx="12" cy="12" r="10" /> <polyline points="12 6 12 12 16 14" />',
  'arrow-left': '<path d="m12 19-7-7 7-7" /> <path d="M19 12H5" />',
  'chevron-right': '<path d="m9 18 6-6-6-6" />',
  'inbox': '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /> <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />',
  'layout-grid': '<rect width="7" height="7" x="3" y="3" rx="1" /> <rect width="7" height="7" x="14" y="3" rx="1" /> <rect width="7" height="7" x="14" y="14" rx="1" /> <rect width="7" height="7" x="3" y="14" rx="1" />',
  'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /> <path d="M14 2v4a2 2 0 0 0 2 2h4" /> <path d="M10 9H8" /> <path d="M16 13H8" /> <path d="M16 17H8" />',
  'settings': '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /> <circle cx="12" cy="12" r="3" />',
  'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <path d="M22 21v-2a4 4 0 0 0-3-3.87" /> <path d="M16 3.13a4 4 0 0 1 0 7.75" />',
  'building-2': '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /> <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /> <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /> <path d="M10 6h4" /> <path d="M10 10h4" /> <path d="M10 14h4" /> <path d="M10 18h4" />',
  'mail': '<rect width="20" height="16" x="2" y="4" rx="2" /> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />',
  'calendar': '<path d="M8 2v4" /> <path d="M16 2v4" /> <rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M3 10h18" />',
  'external-link': '<path d="M15 3h6v6" /> <path d="M10 14 21 3" /> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />',
  'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /> <polyline points="7 10 12 15 17 10" /> <line x1="12" x2="12" y1="15" y2="3" />',
  'pencil': '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /> <path d="m15 5 4 4" />',
  'trash-2': '<path d="M3 6h18" /> <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /> <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /> <line x1="10" x2="10" y1="11" y2="17" /> <line x1="14" x2="14" y1="11" y2="17" />',
  'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /> <circle cx="12" cy="10" r="3" />',
  'menu': '<line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /> <line x1="4" x2="20" y1="18" y2="18" />',
  'ellipsis': '<circle cx="12" cy="12" r="1" /> <circle cx="19" cy="12" r="1" /> <circle cx="5" cy="12" r="1" />',
  'circle-check': '<circle cx="12" cy="12" r="10" /> <path d="m9 12 2 2 4-4" />',
  'chart-line': '<path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="m19 9-5 5-4-4-3 3" />',
  'triangle-alert': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /> <path d="M12 9v4" /> <path d="M12 17h.01" />'
};
Object.assign(GLYPHS, {
  'line-chart': GLYPHS['chart-line'],
  'alert-triangle': GLYPHS['triangle-alert'],
  'more-horizontal': GLYPHS['ellipsis']
});
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  style,
  ...rest
}) {
  const glyph = GLYPHS[name];
  if (!glyph) return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("svg", _extends({
    "aria-hidden": "true",
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest, {
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: glyph
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 12px',
    font: 'var(--ui-note)'
  },
  md: {
    height: 'var(--control-h)',
    padding: '0 18px',
    font: 'var(--ui-label)'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 26px',
    font: 'var(--ui-body-sm)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--bsv-near-black)',
    color: 'var(--bsv-white)',
    border: '1px solid var(--bsv-near-black)'
  },
  accent: {
    background: 'var(--bsv-amber)',
    color: 'var(--bsv-near-black)',
    border: '1px solid var(--bsv-amber)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent'
  },
  link: {
    background: 'transparent',
    color: 'var(--text-accent)',
    border: '1px solid transparent',
    padding: 0,
    height: 'auto'
  }
};
const HOVER = {
  primary: {
    background: 'var(--bsv-near-black-90)'
  },
  accent: {
    background: 'var(--bsv-amber-dark)',
    borderColor: 'var(--bsv-amber-dark)'
  },
  secondary: {
    background: 'var(--surface-inset)'
  },
  ghost: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--text-primary)'
  },
  link: {
    color: 'var(--bsv-amber)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  disabled,
  fullWidth,
  children,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      height: v.height || s.height,
      padding: v.padding !== undefined ? v.padding : s.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: s.font,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control), transform var(--duration-instant) var(--ease-standard)',
      transform: press && !disabled ? 'var(--press-scale)' : 'none',
      ...v,
      ...(hover && !disabled ? HOVER[variant] : null),
      ...(disabled ? {
        background: variant === 'ghost' || variant === 'link' ? 'transparent' : 'var(--surface-inset)',
        color: 'var(--text-muted)',
        borderColor: 'transparent'
      } : null),
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 18 : 15
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: size === 'lg' ? 18 : 15
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  const tones = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    solid: {
      background: 'var(--bsv-near-black)',
      color: 'var(--bsv-white)',
      border: '1px solid var(--bsv-near-black)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...tones[variant],
      ...(hover && !disabled ? variant === 'solid' ? {
        background: 'var(--bsv-near-black-90)'
      } : {
        background: 'var(--surface-accent-soft)',
        color: 'var(--text-primary)'
      } : null),
      ...(disabled ? {
        color: 'var(--text-muted)',
        background: 'transparent'
      } : null),
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : size === 'lg' ? 22 : 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  'iconleft:nearblack': 'blankspace-logotype-iconleft-nearblack.svg',
  'iconleft:white': 'blankspace-logotype-iconleft-white.svg',
  'iconleft:burgundy': 'blankspace-logotype-iconleft-burgundy.svg',
  'iconleft:currentcolor': 'blankspace-logotype-iconleft-currentcolor.svg',
  'icontop:nearblack': 'blankspace-logotype-icontop-nearblack.svg',
  'icontop:white': 'blankspace-logotype-icontop-white.svg',
  'icontop:burgundy': 'blankspace-logotype-icontop-burgundy.svg',
  'icontop:currentcolor': 'blankspace-logotype-icontop-currentcolor.svg',
  'icon:nearblack': 'blankspace-icon-nearblack.svg',
  'icon:white': 'blankspace-icon-white.svg',
  'icon:burgundy': 'blankspace-icon-burgundy.svg',
  'icon:amber': 'blankspace-icon-amber.svg',
  'icon:currentcolor': 'blankspace-icon-currentcolor.svg'
};
function Logo({
  lockup = 'iconleft',
  tone = 'nearblack',
  height,
  width,
  assetBase = '/assets/logos/',
  style,
  ...rest
}) {
  const file = SRC[lockup + ':' + tone] || SRC[lockup + ':nearblack'];
  const size = width ? {
    width
  } : {
    height: height || (lockup === 'icon' ? 24 : lockup === 'icontop' ? 64 : 28)
  };
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetBase + file,
    alt: "Blank Space Ventures",
    style: {
      display: 'block',
      width: 'auto',
      flex: 'none',
      maxWidth: 'max-content',
      ...size,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  note,
  size = 'md',
  tone = 'primary',
  align = 'left',
  style,
  ...rest
}) {
  const sizes = {
    sm: 'var(--ui-title)',
    md: 'var(--ui-display)',
    lg: '72px'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      textAlign: align,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: sizes[size],
      fontWeight: 'var(--fw-light)',
      letterSpacing: '-0.035em',
      lineHeight: 1,
      color: tone === 'accent' ? 'var(--text-accent)' : 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--ui-label)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, note ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-normal)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  selected,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 26,
      padding: '0 10px',
      border: '1px solid ' + (selected ? 'var(--border-strong)' : 'var(--border-default)'),
      background: selected ? 'var(--bsv-near-black)' : hover && onClick ? 'var(--surface-inset)' : 'transparent',
      color: selected ? 'var(--bsv-white)' : 'var(--text-secondary)',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--ui-body-sm)',
      fontWeight: 'var(--fw-regular)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    }
  }), children, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'color-mix(in srgb, var(--bsv-near-black) 62%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true"
  }, rest, {
    style: {
      position: 'relative',
      width,
      maxWidth: '100%',
      background: 'var(--surface-panel)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-6) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-heading)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-primary)'
    }
  }, title), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-6)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-body)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-secondary)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-6)'
    }
  }, footer) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--space-6)'
    }
  })));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    icon: 'check',
    color: 'var(--text-primary)'
  },
  accent: {
    icon: 'bell',
    color: 'var(--text-accent)'
  },
  alert: {
    icon: 'alert-triangle',
    color: 'var(--bsv-burgundy)'
  }
};
function Toast({
  children,
  tone = 'neutral',
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minWidth: 280,
      padding: '12px 14px',
      background: 'var(--surface-panel)',
      border: '1px solid var(--border-hairline)',
      borderLeft: 'var(--keyline-accent-width) solid ' + t.color,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-primary)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onDismiss ? /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  placement = 'top',
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 6px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : {
    bottom: 'calc(100% + 6px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }), children, open ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 30,
      whiteSpace: 'nowrap',
      padding: '6px 9px',
      background: 'var(--bsv-near-black)',
      color: 'var(--bsv-white)',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-note)',
      letterSpacing: 'var(--ls-note)',
      boxShadow: 'var(--shadow-md)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-body)',
      color: disabled ? 'var(--text-muted)' : 'var(--text-primary)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (checked ? 'var(--bsv-near-black)' : 'var(--border-default)'),
      background: checked ? 'var(--bsv-near-black)' : 'var(--surface-page)',
      color: 'var(--bsv-white)',
      transition: 'var(--transition-control)'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Shared label / hint / error frame for every form control. */
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-label)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--bsv-burgundy)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  error,
  disabled,
  size = 'md',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      display: 'flex',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })) : null, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: '100%',
      height: h,
      padding: icon ? '0 12px 0 36px' : '0 12px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-body)',
      color: 'var(--text-primary)',
      background: 'var(--surface-page)',
      border: '1px solid ' + (error ? 'var(--bsv-burgundy)' : focus ? 'var(--bsv-amber)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--transition-control)',
      ...(disabled ? {
        background: 'var(--surface-inset)',
        color: 'var(--text-muted)',
        cursor: 'not-allowed'
      } : null),
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  onChange,
  name,
  value,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-body)',
      color: disabled ? 'var(--text-muted)' : 'var(--text-primary)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (checked ? 'var(--bsv-near-black)' : 'var(--border-default)'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-control)'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--bsv-near-black)'
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  error,
  disabled,
  size = 'md',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: '100%',
      height: h,
      padding: '0 34px 0 12px',
      boxSizing: 'border-box',
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-body)',
      color: 'var(--text-primary)',
      background: 'var(--surface-page)',
      border: '1px solid ' + (error ? 'var(--bsv-burgundy)' : focus ? 'var(--bsv-amber)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--transition-control)',
      ...(disabled ? {
        background: 'var(--surface-inset)',
        color: 'var(--text-muted)'
      } : null),
      ...style
    }
  }), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      color: 'var(--text-muted)',
      pointerEvents: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-body)',
      color: disabled ? 'var(--text-muted)' : 'var(--text-primary)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--bsv-amber)' : 'var(--border-default)',
      position: 'relative',
      transition: 'background-color var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 16,
      height: 16,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--bsv-white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-fast) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  error,
  disabled,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: '100%',
      padding: '10px 12px',
      boxSizing: 'border-box',
      resize: 'vertical',
      lineHeight: 'var(--lh-normal)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-body)',
      color: 'var(--text-primary)',
      background: 'var(--surface-page)',
      border: '1px solid ' + (error ? 'var(--bsv-burgundy)' : focus ? 'var(--bsv-amber)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--transition-control)',
      ...(disabled ? {
        background: 'var(--surface-inset)',
        color: 'var(--text-muted)'
      } : null),
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavItem({
  icon,
  label,
  active,
  count,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      width: '100%',
      height: 36,
      padding: '0 10px',
      appearance: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      border: 'none',
      borderLeft: 'var(--keyline-accent-width) solid ' + (active ? 'var(--bsv-amber)' : 'transparent'),
      background: active ? 'var(--surface-inset)' : hover ? 'var(--surface-accent-soft)' : 'transparent',
      color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-body-sm)',
      fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-regular)',
      transition: 'var(--transition-control)',
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ui-note)',
      color: 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, count) : null);
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }), items.map(it => {
    const id = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      style: {
        appearance: 'none',
        background: 'none',
        border: 'none',
        padding: '0 0 12px',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--ui-label)',
        fontWeight: 'var(--fw-bold)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        color: active ? 'var(--text-primary)' : 'var(--text-muted)',
        boxShadow: active ? 'inset 0 -2px 0 var(--bsv-amber)' : 'none',
        transition: 'var(--transition-control)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dealflow/CompanyScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Tabs,
  Eyebrow,
  Stat,
  Dialog,
  Toast,
  IconButton,
  Tag,
  Tooltip
} = window.BlankSpaceVenturesDesignSystem_8e9344;
function CompanyScreen({
  deal,
  onMemo
}) {
  const d = deal || DEALS[0];
  const [tab, setTab] = React.useState('Overview');
  const [confirm, setConfirm] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: statusTone(d.status),
    dot: d.status === 'Committee'
  }, d.status), /*#__PURE__*/React.createElement(Badge, null, d.stage), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ui-note)',
      letterSpacing: 'var(--ls-note)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Touched ", d.touched, " ago")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 8px',
      fontSize: 34,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '-0.025em'
    }
  }, d.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ui-body)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-normal)'
    }
  }, d.note)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => setConfirm(true)
  }, "Pass"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    iconAfter: "arrow-right",
    onClick: onMemo
  }, "Write memo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24,
      marginTop: 28,
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: d.ask,
    label: "Ask"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "$12M",
    label: "Post-money"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "8.5%",
    label: "Target"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: d.score,
    label: "Conviction",
    tone: d.score === 'High' ? 'accent' : 'primary'
  }))), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Overview', 'Data room', 'Activity', 'References'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 16
    }
  }, "Activity"), /*#__PURE__*/React.createElement("div", null, ACTIVITY.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 110px 1fr',
      gap: 16,
      padding: '14px 0',
      borderTop: i ? '1px solid var(--border-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-muted)'
    }
  }, a.when, " ago"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      fontWeight: 'var(--fw-bold)'
    }
  }, a.who), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, a.what)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accent: true
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, "Decision"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-normal)',
      marginBottom: 18
    }
  }, "Committee meets Thursday. Memo due Wednesday 18:00."), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    iconAfter: "arrow-right",
    onClick: onMemo
  }, "Open memo")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, "Details"), [['Sector', d.sector], ['Owner', d.owner], ['Source', 'Inbound, no introduction'], ['Location', 'Rotterdam'], ['Founded', '2023'], ['Team', '11']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '9px 0',
      borderBottom: '1px solid var(--border-hairline)',
      fontSize: 'var(--ui-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", null, v)))), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      backgroundImage: 'url(' + ASSETS + 'imagery/cartographic-amber-grid.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 10
    }
  }, "Coverage"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Rotterdam"), /*#__PURE__*/React.createElement(Tag, null, "Antwerp"), /*#__PURE__*/React.createElement(Tag, null, "Gdansk")))))), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    title: 'Pass on ' + d.name + '?',
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setConfirm(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setConfirm(false);
        setToast('Passed on ' + d.name + '. Removed from the active pipeline.');
      }
    }, "Pass"))
  }, "The company moves to Passed and drops out of the pipeline view. Activity and memos are kept."), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 24,
      bottom: 24,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    onDismiss: () => setToast(null)
  }, toast)) : null);
}
Object.assign(window, {
  CompanyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dealflow/CompanyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dealflow/MemoScreen.jsx
try { (() => {
const {
  Card,
  Field,
  Input,
  Textarea,
  Select,
  Radio,
  Checkbox,
  Button,
  Eyebrow,
  Badge,
  Toast
} = window.BlankSpaceVenturesDesignSystem_8e9344;
function MemoScreen({
  deal,
  onBack
}) {
  const d = deal || DEALS[0];
  const [rec, setRec] = React.useState('invest');
  const [saved, setSaved] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Investment memo"), /*#__PURE__*/React.createElement(Badge, null, "Draft"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 'var(--ui-note)',
      letterSpacing: 'var(--ls-note)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Due Wednesday 18:00")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 28px',
      fontSize: 34,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '-0.025em'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Round"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: d.ask + ' at $12M post'
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Stage"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Pre-seed', 'Seed', 'Series A'],
    defaultValue: d.stage
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What we saw",
    hint: "Three sentences. Operational, not narrative.",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    defaultValue: 'Berth turnaround improved 18% across three pilot ports. The scheduling engine is the only part customers cannot rebuild internally. Founders came out of port operations, not software.'
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What would have to be true",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    defaultValue: 'Two of the three pilots convert to paid within six months.'
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Recommendation",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "rec",
    label: "Invest",
    checked: rec === 'invest',
    onChange: () => setRec('invest')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "rec",
    label: "Hold and watch",
    checked: rec === 'hold',
    onChange: () => setRec('hold')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "rec",
    label: "Pass",
    checked: rec === 'pass',
    onChange: () => setRec('pass')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Circulate to committee on save"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onBack
  }, "Back to record"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => setSaved(true)
  }, "Save memo"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, "Checklist"), ['Operating model', 'Two reference calls', 'Cap table', 'Pilot contracts', 'Founder background'].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: c,
    defaultChecked: i < 3
  })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, "Committee"), [['Ada Beaumont', 'Lead'], ['Jo Rivera', 'Second'], ['Tomas Silva', 'Reader']].map(([n, r]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '9px 0',
      borderBottom: '1px solid var(--border-hairline)',
      fontSize: 'var(--ui-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", null, n), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, r))))), saved ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 24,
      bottom: 24,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "accent",
    onDismiss: () => setSaved(false)
  }, "Memo saved to ", d.name, ".")) : null);
}
Object.assign(window, {
  MemoScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dealflow/MemoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dealflow/PipelineScreen.jsx
try { (() => {
const {
  Tabs,
  Tag,
  Badge,
  Button,
  Switch,
  Select,
  Card,
  Stat,
  IconButton,
  Eyebrow,
  Tooltip
} = window.BlankSpaceVenturesDesignSystem_8e9344;
function PipelineScreen({
  onOpen
}) {
  const [tab, setTab] = React.useState('Active');
  const [showPassed, setShowPassed] = React.useState(false);
  const [sector, setSector] = React.useState('All');
  const rows = DEALS.filter(d => showPassed || d.status !== 'Passed').filter(d => sector === 'All' || d.sector === sector);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginBottom: 24
    }
  }, [['7', 'In pipeline', 'accent'], ['2', 'At committee'], ['$14.6M', 'Asked this quarter'], ['11 days', 'Median to decision']].map(([v, l, tone]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    padding: "var(--space-5)",
    accent: tone === 'accent'
  }, /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: v,
    label: l,
    tone: tone === 'accent' ? 'accent' : 'primary'
  })))), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Active', 'Mine', 'Committee', 'Passed'],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, ['All', 'Infrastructure', 'Energy', 'Fintech', 'Hardware', 'Logistics', 'Climate', 'Security'].map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: s === sector,
    onClick: () => setSector(s)
  }, s)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Show passed",
    checked: showPassed,
    onChange: e => setShowPassed(e.target.checked)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ['Last touched', 'Ask size', 'Stage']
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2.2fr 1.1fr 0.9fr 0.9fr 1.1fr 0.9fr 40px',
      gap: 16,
      padding: '12px 20px',
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--surface-sunken)'
    }
  }, ['Company', 'Sector', 'Stage', 'Ask', 'Status', 'Touched', ''].map((h, i) => /*#__PURE__*/React.createElement(Eyebrow, {
    key: i,
    style: {
      fontSize: 'var(--ui-note)'
    }
  }, h))), rows.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    onClick: () => onOpen(d),
    style: {
      display: 'grid',
      gridTemplateColumns: '2.2fr 1.1fr 0.9fr 0.9fr 1.1fr 0.9fr 40px',
      gap: 16,
      alignItems: 'center',
      padding: '14px 20px',
      borderBottom: '1px solid var(--border-hairline)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-note)',
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, d.note)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, d.sector), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, d.stage), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, d.ask), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: statusTone(d.status),
    dot: d.status === 'Committee'
  }, d.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-muted)'
    }
  }, d.touched), /*#__PURE__*/React.createElement(Tooltip, {
    label: 'Owner ' + d.owner
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-inset)',
      color: 'var(--text-secondary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'var(--ui-note)',
      fontWeight: 'var(--fw-bold)'
    }
  }, d.owner))))));
}
Object.assign(window, {
  PipelineScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dealflow/PipelineScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dealflow/Shell.jsx
try { (() => {
const {
  Logo,
  NavItem,
  Input,
  IconButton,
  Eyebrow,
  Tooltip,
  Badge
} = window.BlankSpaceVenturesDesignSystem_8e9344;
function Sidebar({
  view,
  onView
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-w)',
      flex: 'none',
      borderRight: '1px solid var(--border-hairline)',
      background: 'var(--surface-panel)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--topbar-h)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "iconleft",
    height: 20,
    assetBase: ASSETS + 'logos/'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 6px 8px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      padding: '0 12px',
      marginBottom: 10
    }
  }, "Deals"), /*#__PURE__*/React.createElement(NavItem, {
    icon: "inbox",
    label: "Pipeline",
    count: 7,
    active: view === 'pipeline',
    onClick: () => onView('pipeline')
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "building-2",
    label: "Company record",
    active: view === 'company',
    onClick: () => onView('company')
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "file-text",
    label: "Memo",
    active: view === 'memo',
    onClick: () => onView('memo')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 6px 8px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      padding: '0 12px',
      marginBottom: 10
    }
  }, "Fund"), /*#__PURE__*/React.createElement(NavItem, {
    icon: "layout-grid",
    label: "Portfolio",
    count: 14
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "line-chart",
    label: "Reporting"
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "users",
    label: "LPs"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 16,
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--bsv-burgundy)',
      color: 'var(--bsv-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'var(--ui-note)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "AB"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, "Ada Beaumont")));
}
function TopBar({
  title,
  breadcrumb,
  right
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      height: 'var(--topbar-h)',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px',
      background: 'color-mix(in srgb, var(--surface-page) 90%, transparent)',
      backdropFilter: 'var(--blur-panel)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, breadcrumb ? /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 2
    }
  }, breadcrumb) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-subheading)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search deals"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Notifications"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications",
    size: "sm"
  })), right));
}
function statusTone(status) {
  if (status === 'Committee' || status === 'Diligence') return 'live';
  if (status === 'Passed') return 'brand';
  return 'neutral';
}
Object.assign(window, {
  Sidebar,
  TopBar,
  statusTone
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dealflow/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dealflow/deals.jsx
try { (() => {
const ASSETS = '../../assets/';
const DEALS = [{
  id: 1,
  name: 'Meridian Systems',
  sector: 'Infrastructure',
  stage: 'Seed',
  ask: '$3.0M',
  owner: 'AB',
  status: 'Diligence',
  touched: '2 days',
  score: 'High',
  note: 'Routing layer for private freight networks.'
}, {
  id: 2,
  name: 'Halden',
  sector: 'Energy',
  stage: 'Pre-seed',
  ask: '$1.2M',
  owner: 'JR',
  status: 'First call',
  touched: '4 days',
  score: 'Medium',
  note: 'Grid balancing for industrial loads.'
}, {
  id: 3,
  name: 'Anvil Optics',
  sector: 'Hardware',
  stage: 'Pre-seed',
  ask: '$0.9M',
  owner: 'AB',
  status: 'Diligence',
  touched: '1 day',
  score: 'High',
  note: 'Metrology for sub-micron assembly.'
}, {
  id: 4,
  name: 'Quiet Harbour',
  sector: 'Logistics',
  stage: 'Seed',
  ask: '$2.5M',
  owner: 'TS',
  status: 'Committee',
  touched: '6 hours',
  score: 'High',
  note: 'Berth scheduling for secondary ports.'
}, {
  id: 5,
  name: 'Ledgerline',
  sector: 'Fintech',
  stage: 'Seed',
  ask: '$2.0M',
  owner: 'JR',
  status: 'Watching',
  touched: '12 days',
  score: 'Low',
  note: 'Reconciliation for cross-border payroll.'
}, {
  id: 6,
  name: 'Terrafix',
  sector: 'Climate',
  stage: 'Seed',
  ask: '$4.0M',
  owner: 'TS',
  status: 'First call',
  touched: '3 days',
  score: 'Medium',
  note: 'Soil carbon measurement at survey scale.'
}, {
  id: 7,
  name: 'Corvid Labs',
  sector: 'Security',
  stage: 'Series A',
  ask: '$8.0M',
  owner: 'AB',
  status: 'Passed',
  touched: '21 days',
  score: 'Low',
  note: 'Attestation for machine identity.'
}];
const ACTIVITY = [{
  when: '6 hours',
  who: 'Tomas S.',
  what: 'Added the operating model from the data room.'
}, {
  when: '2 days',
  who: 'Ada B.',
  what: 'Second call with the founders. Throughput numbers hold.'
}, {
  when: '5 days',
  who: 'Jo R.',
  what: 'Reference call with a pilot customer in Rotterdam.'
}, {
  when: '9 days',
  who: 'Ada B.',
  what: 'Inbound deck. No introduction.'
}];
Object.assign(window, {
  ASSETS,
  DEALS,
  ACTIVITY
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dealflow/deals.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dealflow/main.jsx
try { (() => {
const {
  Button
} = window.BlankSpaceVenturesDesignSystem_8e9344;
function App() {
  const [view, setView] = React.useState('pipeline');
  const [deal, setDeal] = React.useState(DEALS[3]);
  const titles = {
    pipeline: ['Deal flow', 'Q1 2026'],
    company: [deal.name, 'Pipeline'],
    memo: ['Memo — ' + deal.name, 'Pipeline']
  };
  const [title, crumb] = titles[view];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    onView: setView
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: title,
    breadcrumb: crumb,
    right: view === 'pipeline' ? /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "plus"
    }, "Add deal") : /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => setView('pipeline')
    }, "Back to pipeline")
  }), view === 'pipeline' ? /*#__PURE__*/React.createElement(PipelineScreen, {
    onOpen: d => {
      setDeal(d);
      setView('company');
    }
  }) : null, view === 'company' ? /*#__PURE__*/React.createElement(CompanyScreen, {
    deal: deal,
    onMemo: () => setView('memo')
  }) : null, view === 'memo' ? /*#__PURE__*/React.createElement(MemoScreen, {
    deal: deal,
    onBack: () => setView('company')
  }) : null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dealflow/main.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Logo,
  Button,
  Eyebrow,
  Icon
} = window.BlankSpaceVenturesDesignSystem_8e9344;
function SiteHeader({
  page,
  onNav
}) {
  const items = [['home', 'Firm'], ['portfolio', 'Portfolio'], ['thesis', 'Thesis'], ['contact', 'Contact']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      height: 72,
      padding: '0 48px',
      background: 'color-mix(in srgb, var(--bsv-near-black) 88%, transparent)',
      backdropFilter: 'var(--blur-panel)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "iconleft",
    tone: "white",
    height: 22,
    assetBase: ASSETS + 'logos/'
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 'auto'
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontSize: 'var(--ui-label)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: page === id ? 'var(--bsv-white)' : 'var(--text-secondary)',
      paddingBottom: 2,
      borderBottom: '2px solid ' + (page === id ? 'var(--bsv-amber)' : 'transparent')
    }
  }, label))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconAfter: "arrow-right",
    onClick: () => onNav('contact')
  }, "Send a deck"));
}
function SiteFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      padding: '56px 48px 40px',
      display: 'flex',
      gap: 64,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "icontop",
    tone: "white",
    height: 64,
    assetBase: ASSETS + 'logos/'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300,
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      lineHeight: 1.4,
      color: 'var(--bsv-stone)'
    }
  }, "Backing what's next, before it's noticed"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    style: {
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Firm"), [['portfolio', 'Portfolio'], ['thesis', 'Thesis'], ['contact', 'Contact']].map(([id, l]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-secondary)',
      marginBottom: 8
    }
  }, "hello@blankspace.vc"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, "London \xB7 New York"))));
}
function SectionRule({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 16,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, children));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  SectionRule
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  Eyebrow,
  Card,
  Toast,
  Logo
} = window.BlankSpaceVenturesDesignSystem_8e9344;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [company, setCompany] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '72px 48px 96px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 72,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: 24
    }
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 20px',
      fontSize: 52,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '-0.03em',
      lineHeight: 1.06,
      color: 'var(--text-primary)'
    }
  }, "Send a deck"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 40px',
      maxWidth: 460,
      fontSize: 18,
      fontWeight: 'var(--fw-light)',
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, "No warm introduction required. Every deck is read. We reply within a week, either way."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 24,
      display: 'flex',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 10
    }
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body)',
      color: 'var(--text-secondary)'
    }
  }, "hello@blankspace.vc")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 10
    }
  }, "Offices"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body)',
      color: 'var(--text-secondary)'
    }
  }, "London \xB7 New York"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "icon",
    tone: "white",
    height: 30,
    assetBase: ASSETS + 'logos/'
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Ada Beaumont"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Company"
  }, /*#__PURE__*/React.createElement(Input, {
    value: company,
    onChange: e => setCompany(e.target.value),
    placeholder: "Meridian Systems"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Stage"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Pre-seed', 'Seed', 'Series A']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "ada@meridian.systems"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What are you building?",
    hint: "Three sentences is plenty.",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Add me to the quarterly note"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ui-note)',
      letterSpacing: 'var(--ls-note)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "We reply within a week"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconAfter: "arrow-right",
    onClick: () => setSent(true)
  }, "Send")))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 32,
      bottom: 32,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "accent",
    onDismiss: () => setSent(false)
  }, "Deck received", company ? ' from ' + company : '', ". We reply within a week.")) : null);
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Eyebrow,
  Stat,
  Badge,
  Icon
} = window.BlankSpaceVenturesDesignSystem_8e9344;
function HomeScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 560,
      display: 'flex',
      alignItems: 'flex-end',
      padding: '0 48px 72px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + ASSETS + 'imagery/gradient-mesh-amber.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(105deg, color-mix(in srgb, var(--bsv-near-black) 92%, transparent) 30%, transparent 78%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--bsv-amber)',
      marginBottom: 28
    }
  }, "Early stage \xB7 Pre-seed and seed"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 76,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '-0.03em',
      lineHeight: 1.02,
      color: 'var(--bsv-white)'
    }
  }, "Backing what\u2019s next,", /*#__PURE__*/React.createElement("br", null), "before it\u2019s noticed"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 36px',
      maxWidth: 560,
      fontSize: 20,
      fontWeight: 'var(--fw-light)',
      lineHeight: 1.45,
      color: 'var(--bsv-stone)'
    }
  }, "We take first positions in infrastructure that is still unmarked. Fourteen companies, nine of them before the round was public."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconAfter: "arrow-right",
    onClick: () => onNav('thesis')
  }, "Read the thesis"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('portfolio')
  }, "See the portfolio")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 48,
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "$40M",
    label: "Fund II",
    note: "Closed 2025."
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "14",
    label: "Companies",
    note: "Across seven sectors."
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "9",
    label: "First cheques",
    note: "Written pre-announcement."
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2019",
    label: "Founded",
    note: "London and New York."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 48px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, null, "The thesis, in short"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, [['Unmarked space', 'The interesting infrastructure has no category yet. We look where the map is still blank.'], ['Shadows and thresholds', 'Change shows up at the edges first — in throughput, in latency, in who is allowed through.'], ['One cheque, early', 'A single position, taken before the round is public, held through the next two.']].map(([t, d], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    accent: i === 0,
    interactive: true
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, '0' + (i + 1)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontSize: 22,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ui-body)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-secondary)'
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 48px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, null, "Recent positions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, PORTFOLIO.slice(0, 3).map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.name,
    interactive: true,
    onClick: () => onNav('portfolio')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "live",
    dot: true
  }, c.stage), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ui-note)',
      letterSpacing: 'var(--ls-note)',
      color: 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, c.year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px',
      fontSize: 24,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, c.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ui-body-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-secondary)'
    }
  }, c.note))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 380,
      backgroundImage: 'url(' + ASSETS + 'imagery/runway-approach-lights.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center 35%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      bottom: 40,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--bsv-amber)',
      marginBottom: 16
    }
  }, "Where we look"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 'var(--fw-light)',
      letterSpacing: '-0.025em',
      lineHeight: 1.15,
      color: 'var(--bsv-white)'
    }
  }, "Shadows, thresholds, and the geometry of things moving through unmarked space.")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PortfolioScreen.jsx
try { (() => {
const {
  Card,
  Tag,
  Eyebrow,
  Badge,
  Button,
  Icon
} = window.BlankSpaceVenturesDesignSystem_8e9344;
function PortfolioScreen({
  onNav
}) {
  const [sector, setSector] = React.useState('All');
  const rows = PORTFOLIO.filter(c => sector === 'All' || c.sector === sector);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '72px 48px 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: 24
    }
  }, "Portfolio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 20px',
      fontSize: 56,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
      color: 'var(--text-primary)'
    }
  }, "Fourteen positions"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 40px',
      maxWidth: 560,
      fontSize: 18,
      fontWeight: 'var(--fw-light)',
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, "Nine were first cheques. We hold through the next two rounds and rarely lead more than one round in the same company."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, SECTORS.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: s === sector,
    onClick: () => setSector(s)
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, rows.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      display: 'grid',
      gridTemplateColumns: '260px 1fr 160px 110px 80px',
      alignItems: 'center',
      gap: 24,
      padding: '22px 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, c.note), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-muted)'
    }
  }, c.sector), /*#__PURE__*/React.createElement(Badge, null, c.stage), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-body-sm)',
      color: 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums',
      textAlign: 'right'
    }
  }, c.year)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconAfter: "arrow-right",
    onClick: () => onNav('contact')
  }, "Send us a deck")));
}
Object.assign(window, {
  PortfolioScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PortfolioScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ThesisScreen.jsx
try { (() => {
const {
  Eyebrow,
  Button,
  Card,
  Stat
} = window.BlankSpaceVenturesDesignSystem_8e9344;
function ThesisScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '72px 48px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 72,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: 24
    }
  }, "Thesis \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 28px',
      fontSize: 52,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '-0.03em',
      lineHeight: 1.06,
      color: 'var(--text-primary)'
    }
  }, "The map is drawn after the traffic"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 26,
      lineHeight: 1.4,
      color: 'var(--text-primary)',
      margin: '0 0 32px'
    }
  }, "Backing what\u2019s next, before it\u2019s noticed"), [['Categories arrive late', 'A category is a description of something that already happened. By the time a sector has a name, the position is priced. We read throughput, latency and permission — the measurements that move before the label does.'], ['Infrastructure is legible', 'Unlike consumer behaviour, infrastructure leaves a trace. Load curves, berth schedules, settlement windows. We spend most of our diligence in operational data rather than in narrative.'], ['One cheque, held', 'We take a single early position, usually the first institutional cheque, and hold it through the next two rounds. We do not build ownership by re-leading.']].map(([h, b]) => /*#__PURE__*/React.createElement("section", {
    key: h,
    style: {
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 12px',
      fontSize: 26,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, b))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconAfter: "arrow-right",
    onClick: () => onNav('contact')
  }, "Get in touch")), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 104,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 260,
      backgroundImage: 'url(' + ASSETS + 'imagery/cartographic-amber-grid.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 'var(--radius-md)'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    accent: true
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 16
    }
  }, "Where the fund sits"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "$0.5\u20132M",
    label: "First cheque"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "7\u201312%",
    label: "Target ownership"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "6 weeks",
    label: "Decision to wire"
  }))))));
}
Object.assign(window, {
  ThesisScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ThesisScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
const ASSETS = '../../assets/';
const PORTFOLIO = [{
  name: 'Meridian Systems',
  sector: 'Infrastructure',
  stage: 'Seed',
  year: '2024',
  note: 'Routing layer for private freight networks.'
}, {
  name: 'Halden',
  sector: 'Energy',
  stage: 'Pre-seed',
  year: '2025',
  note: 'Grid balancing for industrial loads.'
}, {
  name: 'Corvid Labs',
  sector: 'Security',
  stage: 'Seed',
  year: '2023',
  note: 'Attestation for machine identity.'
}, {
  name: 'Northfield',
  sector: 'Fintech',
  stage: 'Series A',
  year: '2022',
  note: 'Settlement rails for regional banks.'
}, {
  name: 'Terrafix',
  sector: 'Climate',
  stage: 'Seed',
  year: '2024',
  note: 'Soil carbon measurement at survey scale.'
}, {
  name: 'Anvil Optics',
  sector: 'Hardware',
  stage: 'Pre-seed',
  year: '2025',
  note: 'Metrology for sub-micron assembly.'
}, {
  name: 'Quiet Harbour',
  sector: 'Logistics',
  stage: 'Seed',
  year: '2023',
  note: 'Berth scheduling for secondary ports.'
}, {
  name: 'Ledgerline',
  sector: 'Fintech',
  stage: 'Seed',
  year: '2022',
  note: 'Reconciliation for cross-border payroll.'
}, {
  name: 'Vantage Nine',
  sector: 'Infrastructure',
  stage: 'Series A',
  year: '2021',
  note: 'Observability for edge deployments.'
}];
const SECTORS = ['All', 'Infrastructure', 'Fintech', 'Energy', 'Security', 'Climate', 'Hardware', 'Logistics'];
Object.assign(window, {
  ASSETS,
  PORTFOLIO,
  SECTORS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/main.jsx
try { (() => {
function App() {
  const [page, setPage] = React.useState('home');
  const onNav = p => {
    setPage(p);
    window.scrollTo({
      top: 0
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bsv-near-black)'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    page: page,
    onNav: onNav
  }), page === 'home' ? /*#__PURE__*/React.createElement(HomeScreen, {
    onNav: onNav
  }) : null, page === 'portfolio' ? /*#__PURE__*/React.createElement(PortfolioScreen, {
    onNav: onNav
  }) : null, page === 'thesis' ? /*#__PURE__*/React.createElement(ThesisScreen, {
    onNav: onNav
  }) : null, page === 'contact' ? /*#__PURE__*/React.createElement(ContactScreen, null) : null, /*#__PURE__*/React.createElement(SiteFooter, {
    onNav: onNav
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/main.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
