'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Link = require('next/link');
var React = require('react');
var solid = require('@heroicons/react/24/solid');
var SimplyCarousel = require('react-simply-carousel');
var outline = require('@heroicons/react/24/outline');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Link__default = /*#__PURE__*/_interopDefaultLegacy(Link);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var SimplyCarousel__default = /*#__PURE__*/_interopDefaultLegacy(SimplyCarousel);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}:root{--font-primary:\"Poppins\";--header-font:\"Poppins\";--color-creme:#ffe3c8;--color-cremeLight:#fbf7f3;--color-candyPink:#ffb1ca;--color-vibrantRed:red;--color-coral:#ff3c37;--color-bruntOrange:#ff510d;--color-text-dark:#002c52;--color-primary:#ffae00;--input-round:6px;--button-round:8px;--paragraph-small:14px;--paragraph-medium:20px;--paragraph-large:32px;--h1:94px;--h2:48px;--h3:38px;--h4:21px}*{font-family:var(--font-primary)}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.button-main{align-items:center;display:flex;justify-content:center}.btn-open-mobile-menu{--tw-text-opacity:1;border-radius:.375rem;color:rgb(107 114 128/var(--tw-text-opacity));padding:.5rem;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn-open-mobile-menu:hover{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity));color:rgb(107 114 128/var(--tw-text-opacity))}.btn-open-mobile-menu:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);outline:2px solid #0000;outline-offset:2px}.btn-dashboard-open-mobile-menu{--tw-text-opacity:1;border-radius:.375rem;color:rgb(241 245 249/var(--tw-text-opacity));padding:.5rem;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn-dashboard-open-mobile-menu:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);outline:2px solid #0000;outline-offset:2px}.btn-dashboard-open-mobile-menu:active{background-color:initial}.btn-primary{background-color:var(--color-primary);border-color:var(--color-primary);border-radius:var(--button-round);border-width:2px;font-size:.875rem;font-weight:600;line-height:1.25rem;padding:.5rem 1.25rem;text-align:center;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.btn-primary,.btn-primary:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.btn-primary:hover{opacity:.8}.btn-primary:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}@media (min-width:640px){.btn-primary{width:auto}}.btn-primary-stroke-only{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:var(--color-primary);border-radius:var(--button-round);border-width:2px;color:var(--color-primary);font-size:.875rem;font-weight:600;line-height:1.25rem;padding:.5rem 1.25rem;text-align:center;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.btn-primary-stroke-only:hover{color:var(--color-primary);opacity:.8}.btn-primary-stroke-only:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}@media (min-width:640px){.btn-primary-stroke-only{width:auto}}.btn-danger{--tw-text-opacity:1;background-color:var(--color-vibrantRed);border-color:var(--color-vibrantRed);border-radius:var(--button-round);border-width:2px;color:rgb(255 255 255/var(--tw-text-opacity));font-size:.875rem;font-weight:600;line-height:1.25rem;padding:.5rem 1.25rem;text-align:center;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.btn-danger:hover{--tw-bg-opacity:0.8;--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.btn-danger:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}@media (min-width:640px){.btn-danger{width:auto}}.btn-stone{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(231 229 228/var(--tw-border-opacity));border-radius:var(--button-round);border-width:1px;color:rgb(87 83 78/var(--tw-text-opacity));font-size:.875rem;font-weight:600;line-height:1.25rem;padding:.5rem 1.25rem;text-align:center;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.btn-stone:hover{--tw-text-opacity:1;color:rgb(41 37 36/var(--tw-text-opacity));opacity:.7}.btn-stone:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}@media (min-width:640px){.btn-stone{width:auto}}.btn-outline{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-gradient-from:#fff var(--tw-gradient-from-position);--tw-gradient-to:#fff0 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);--tw-gradient-to:#f5f5f4 var(--tw-gradient-to-position);--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));background-image:linear-gradient(to bottom,var(--tw-gradient-stops));border-color:rgb(231 229 228/var(--tw-border-opacity));border-radius:var(--button-round);border-width:1px;color:rgb(68 64 60/var(--tw-text-opacity));font-size:.875rem;font-weight:600;line-height:1.25rem;padding:.5rem 1.25rem;text-align:center;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.btn-outline:hover{--tw-text-opacity:1;--tw-shadow:inset 0 2px 4px 0 #0000000d;--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:rgb(41 37 36/var(--tw-text-opacity))}.btn-outline:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}@media (min-width:640px){.btn-outline{width:auto}}.btn-selected{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity));border-radius:var(--button-round);color:rgb(17 24 39/var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem;padding:.75rem 1.25rem;text-align:center;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.btn-selected:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}@media (min-width:640px){.btn-selected{width:auto}}.disclosure-button{--tw-text-opacity:1;border-radius:var(--button-round);color:rgb(15 23 42/var(--tw-text-opacity));display:flex;font-size:1rem;font-weight:500;justify-content:space-between;line-height:1.5rem;padding:.5rem .25rem;text-align:left;width:100%}.disclosure-button:hover{opacity:.75}.disclosure-button:focus{outline:2px solid #0000;outline-offset:2px}.form-label{--tw-text-opacity:1;color:rgb(87 83 78/var(--tw-text-opacity));display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;margin-bottom:.25rem}.form-input{--tw-border-opacity:1;align-items:center;border-color:rgb(214 211 209/var(--tw-border-opacity));border-radius:var(--input-round);border-width:1px;display:flex;font-size:.875rem;line-height:1.25rem;padding:.25rem .5rem;width:100%}.form-input::placeholder{--tw-placeholder-opacity:1;color:rgb(168 162 158/var(--tw-placeholder-opacity))}.form-input:focus{--tw-border-opacity:1;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:rgb(168 162 158/var(--tw-border-opacity));box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);outline:2px solid #0000;outline-offset:2px}.form-input:disabled{opacity:.5}#react-select-2-placeholder{--tw-text-opacity:1;color:rgb(168 162 158/var(--tw-text-opacity))}.form-checkbox,[type=checkbox]{--tw-border-opacity:1;--tw-shadow:inset 0 2px 4px 0 #0000000d;--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);accent-color:#e7e5e4;appearance:none;border-color:rgb(214 211 209/var(--tw-border-opacity));border-radius:.125rem;border-width:1px;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);cursor:pointer;display:flex;font-size:.875rem;line-height:1.25rem;outline:2px solid #0000;outline-offset:2px;padding:.625rem;position:relative;width:auto}.form-checkbox:focus,[type=checkbox]:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.form-checkbox:checked,[type=checkbox]:checked{background-color:var(--color-primary);border-color:var(--color-primary)}.form-input-error{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(254 242 242/var(--tw-bg-opacity));border-color:rgb(239 68 68/var(--tw-border-opacity));border-radius:.5rem;border-width:1px;color:rgb(127 29 29/var(--tw-text-opacity));display:block;font-size:.875rem;line-height:1.25rem;padding:.5rem;width:100%}.form-input-error::placeholder{--tw-placeholder-opacity:1;color:rgb(185 28 28/var(--tw-placeholder-opacity))}.form-input-error:focus{--tw-border-opacity:1;--tw-ring-opacity:1;--tw-ring-color:rgb(239 68 68/var(--tw-ring-opacity));border-color:rgb(239 68 68/var(--tw-border-opacity))}.form-error{--tw-text-opacity:1;color:rgb(220 38 38/var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem;margin-top:.5rem}.spinner{aspect-ratio:1/1;width:1rem}@keyframes spin{to{transform:rotate(1turn)}}.spinner{--tw-border-opacity:1;animation:spin 1s linear infinite;border-color:rgb(229 231 235/var(--tw-border-opacity));border-radius:9999px;border-top-color:var(--color-primary);border-width:2px}.modalContainer{--tw-translate-x:-50%;--tw-translate-y:-50%;--tw-bg-opacity:1;--tw-shadow:0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);align-items:center;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-radius:.5rem;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);display:flex;justify-content:center;left:50%;min-height:4rem;min-width:24rem;overflow:hidden;position:fixed;top:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:max-content;z-index:110}.modalCloseBtn{cursor:pointer;font-size:1.125rem;left:.75rem;line-height:1.75rem;position:absolute;top:.75rem}.accordionMain{width:100%}.accordionTitle{align-items:center;cursor:pointer;display:flex;padding-bottom:.5rem;padding-top:.5rem;width:100%}.accordionContainer,.accordionTitle{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(229 231 235/var(--tw-border-opacity))}.accordionContainer{padding:.75rem}.accordionIcon{margin-left:auto;width:1.25rem}.carouselControl{--tw-translate-y:-50%;--tw-border-opacity:1;align-items:center;border-color:rgb(156 163 175/var(--tw-border-opacity));border-radius:9999px;border-width:1px;display:flex;height:2rem;justify-content:center;position:absolute;top:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:2rem;z-index:10}.carouselControl:focus{outline:2px solid #0000;outline-offset:2px}.carouselControlIcon{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity));width:1.25rem}.carouselContainer{position:relative;width:100%}.switchButtonContainer{border-radius:9999px;display:inline-block;height:1.25rem;position:relative;width:2.5rem}.switchButtonBubble{border-radius:9999px;bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0;transition-duration:.2s}.switchButtonBubble:before{--tw-translate-y:-50%;--tw-bg-opacity:1;--tw-content:\"\";background-color:rgb(255 255 255/var(--tw-bg-opacity));border-radius:9999px;content:var(--tw-content);height:.75rem;left:.25rem;position:absolute;top:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.2s;width:.75rem}.dropdownItem{cursor:pointer;padding:.25rem .75rem;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dropdownItem:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.ratingFillStar{fill:#eab308;width:1.5rem}.ratingEmptyStar{stroke:#4b5563;width:1.5rem}.scrollContainer{align-items:flex-start;display:flex;justify-content:flex-start;margin-left:auto;margin-right:auto;max-width:100%;overflow-x:auto;scroll-snap-align:center}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.header{color:var(--color-text-dark);font-family:var(--header-font);font-weight:600}.header-h1{font-size:var(--h1)}.header-h2{font-size:var(--h2)}.header-h3{font-size:var(--h3)}.header-h4{font-size:var(--h4)}.tab{--tw-shadow:0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);align-items:stretch;border-radius:9999px;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);display:flex;justify-content:space-between;overflow:hidden;position:relative;width:100%}.tabViewer{background-color:var(--color-primary);border-radius:9999px;height:100%;left:0;position:absolute;top:0;transition-duration:.2s;z-index:10}.tabItem{color:var(--color-primary);cursor:pointer;flex:1 1 0%;font-size:.875rem;font-weight:400;line-height:1.25rem;padding:1rem 2.5rem;text-align:center;transition-duration:.2s;z-index:20}.tabItemActive{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.breadcrumb{align-items:center;display:flex}.breadcrumbItem{color:var(--color-text-dark);font-family:var(--font-primary);font-size:.875rem;font-weight:400;line-height:1.25rem;margin-left:.25rem;margin-right:.25rem}@media (min-width:768px){.breadcrumbItem{font-size:1rem;line-height:1.5rem}}.paragraph{color:var(--color-text-dark);font-family:var(--font-primary);font-weight:400}.paragraph-small{font-size:var(--paragraph-small)}.paragraph-medium{font-size:var( --paragraph-medium)}.paragraph-large{font-size:var(--paragraph-large)}.cardData{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity));border-radius:.375rem;border-width:1px;display:flex;flex-direction:column}.cardData__dataContainer{display:flex;flex-direction:column;padding:1.5rem}.cardData__description,.cardData__title{margin-bottom:.5rem}.cardData__title--top{padding:1.5rem}.avatar{align-items:center;display:flex;justify-content:center}.avatarDataContainer{margin-left:.75rem}.avatarImage{aspect-ratio:1/1;border-radius:9999px;overflow:hidden;width:3.5rem}.avatarImage--square{border-radius:.375rem}.avatarImage img{height:100%;width:100%}.avatarName{font-family:var(--font-primary);font-size:.875rem;font-weight:500;line-height:1.25rem}@media (min-width:768px){.avatarName{font-size:1rem;line-height:1.5rem}}.avatarDescription{font-family:var(--font-primary);font-size:.75rem;font-weight:400;line-height:1rem}@media (min-width:768px){.avatarDescription{font-size:.875rem;line-height:1.25rem}}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.left-0{left:0}.left-1\\/2{left:50%}.right-0{right:0}.top-0{top:0}.top-1\\/2{top:50%}.top-full{top:100%}.z-40{z-index:40}.z-50{z-index:50}.z-\\[100\\]{z-index:100}.m-0{margin:0}.my-auto{margin-bottom:auto;margin-top:auto}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.mt-2{margin-top:.5rem}.flex{display:flex}.h-0{height:0}.h-40{height:10rem}.h-5{height:1.25rem}.h-full{height:100%}.h-screen{height:100vh}.max-h-0{max-height:0}.max-h-screen{max-height:100vh}.w-0{width:0}.w-10{width:2.5rem}.w-12{width:3rem}.w-4{width:1rem}.w-40{width:10rem}.w-5{width:1.25rem}.w-80{width:20rem}.w-96{width:24rem}.w-\\[800px\\]{width:800px}.w-full{width:100%}.w-screen{width:100vw}.\\!max-w-full{max-width:100%!important}.max-w-3xl{max-width:48rem}.max-w-96{max-width:24rem}.flex-1{flex:1 1 0%}.-translate-x-1\\/2{--tw-translate-x:-50%}.-translate-x-1\\/2,.-translate-y-1\\/2{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.overflow-hidden{overflow:hidden}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-l{border-left-width:1px}.border-none{border-style:none}.border-creme{border-color:var(--color-creme)}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-gray-500{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity))}.border-slate-600{--tw-border-opacity:1;border-color:rgb(71 85 105/var(--tw-border-opacity))}.bg-black\\/20{background-color:#0003}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}.bg-cremeLight{background-color:var(--color-cremeLight)}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-gray-600{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity))}.bg-primary{background-color:var(--color-primary)}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.bg-transparent{background-color:initial}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.object-cover{object-fit:cover}.p-0{padding:0}.p-2{padding:.5rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.text-text-dark{color:var(--color-text-dark)}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.opacity-0{opacity:0}.shadow-lg{--tw-shadow:0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid #0000;outline-offset:2px}.outline{outline-style:solid}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}@font-face{font-family:Poppins;font-weight:700;src:url(font/Poppins-Bold.ttf)}@font-face{font-family:Poppins;font-weight:600;src:url(font/Poppins-SemiBold.ttf) format(\"opentype\")}@font-face{font-family:Poppins;font-weight:800;src:url(font/Poppins-ExtraBold.ttf) format(\"opentype\")}@font-face{font-family:Poppins;font-weight:200;src:url(font/Poppins-ExtraLight.ttf) format(\"opentype\")}@font-face{font-family:Poppins;font-weight:300;src:url(font/Poppins-Light.ttf) format(\"opentype\")}@font-face{font-family:Poppins;font-weight:400;src:url(font/Poppins-Regular.ttf) format(\"opentype\")}@font-face{font-family:Poppins;font-weight:100;src:url(font/Poppins-Thin.ttf) format(\"opentype\")}@font-face{font-family:Poppins;font-weight:500;src:url(font/Poppins-Medium.ttf) format(\"opentype\")}@font-face{font-family:Poppins;font-weight:900;src:url(font/Poppins-Black.ttf) format(\"opentype\")}.before\\:translate-x-5:before{--tw-translate-x:1.25rem;content:var(--tw-content);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.focus\\:outline-none:focus{outline:2px solid #0000;outline-offset:2px}";
styleInject(css_248z,{"insertAt":"top"});

/******************************************************************************
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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Spinner = function (_a) {
    var props = __rest(_a, []);
    var className = props.className;
    return (jsxRuntime.jsx("div", { className: "".concat(className, " spinner") }));
};

var buttonType;
(function (buttonType) {
    buttonType["openMobileMenu"] = "openMobileMenu";
    buttonType["dashboardOpenMobileMenu"] = "dashboardOpenMobileMenu";
    buttonType["primary"] = "primary";
    buttonType["primaryStrokeOnly"] = "primaryStrokeOnly";
    buttonType["danger"] = "danger";
    buttonType["stone"] = "stone";
    buttonType["outline"] = "outline";
    buttonType["selected"] = "selected";
    buttonType["disclosure"] = "disclosure";
})(buttonType || (buttonType = {}));
var Button = function (_a) {
    var _b;
    var label = _a.label, btnType = _a.btnType, parentClassName = _a.parentClassName, child = _a.child, _c = _a.errors, errors = _c === void 0 ? [] : _c, link = _a.link, onClick = _a.onClick, className = _a.className, loading = _a.loading, loadingClassName = _a.loadingClassName;
    var classMap = (_b = {},
        _b[buttonType.openMobileMenu] = "btn-open-mobile-menu",
        _b[buttonType.dashboardOpenMobileMenu] = "btn-dashboard-open-mobile-menu",
        _b[buttonType.primary] = "btn-primary",
        _b[buttonType.primaryStrokeOnly] = "btn-primary-stroke-only",
        _b[buttonType.danger] = "btn-danger",
        _b[buttonType.outline] = "btn-outline",
        _b[buttonType.selected] = "btn-selected",
        _b[buttonType.stone] = "btn-stone",
        _b[buttonType.disclosure] = "disclosure-button",
        _b);
    return (jsxRuntime.jsxs("div", __assign({ className: "flex flex-col ".concat(parentClassName) }, { children: [link ? (jsxRuntime.jsxs(Link__default["default"], __assign({ href: link, className: "button-main ".concat(classMap[btnType] || classMap[buttonType.primary], " ").concat(className), onClick: onClick }, { children: [label, child && child, loading && jsxRuntime.jsx(Spinner, { className: "ml-1 ".concat(loadingClassName) })] }))) : (jsxRuntime.jsxs("button", __assign({ className: "button-main ".concat(classMap[btnType] || classMap[buttonType.primary], " ").concat(className), onClick: onClick }, { children: [label, child && child, loading && jsxRuntime.jsx(Spinner, { className: "ml-1 ".concat(loadingClassName) })] }))), (errors === null || errors === void 0 ? void 0 : errors.length) > 0 && jsxRuntime.jsx("div", __assign({ className: "form-error" }, { children: errors }))] })));
};

function UseTheme (theme, classData) {
    React.useEffect(function () {
        var _a;
        var r = document.querySelector(":root");
        if (r.style) {
            for (var i in theme) {
                r.style.setProperty(i, theme[i]);
            }
        }
        if (classData)
            for (var i in classData) {
                var el = document.getElementsByClassName(i);
                if (el)
                    for (var j = 0; j < el.length; j++)
                        (_a = el[j].classList) === null || _a === void 0 ? void 0 : _a.add(classData[i]);
            }
    }, []);
}

var Checkbox = function (_a) {
    var label = _a.label, name = _a.name, className = _a.className, inputClassName = _a.inputClassName, labelClassName = _a.labelClassName, child = _a.child, _b = _a.errors, errors = _b === void 0 ? [] : _b, checked = _a.checked, icon = _a.icon, props = __rest(_a, ["label", "name", "className", "inputClassName", "labelClassName", "child", "errors", "checked", "icon"]);
    var _c = React.useState(!!checked), inChecked = _c[0], setInChecked = _c[1];
    if (props.value === undefined || props.value === null) {
        props.value = "";
    }
    var changeCheck = function (e) {
        if (props.onChange)
            props.onChange(e);
        setInChecked(e.target.checked);
    };
    return (jsxRuntime.jsxs("div", __assign({ className: "flex items-center ".concat(className) }, { children: [jsxRuntime.jsxs("div", __assign({ className: "relative" }, { children: [jsxRuntime.jsx("input", __assign({ id: name, name: name, placeholder: label, type: "checkbox", checked: inChecked, onChange: changeCheck }, props, { className: "form-checkbox ".concat(inputClassName, " ").concat(errors.length ? "form-input-error" : "") })), inChecked && (jsxRuntime.jsx("label", __assign({ htmlFor: name }, { children: icon || (jsxRuntime.jsx(solid.CheckIcon, { className: "absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-4 font-bold" })) })))] })), label && (jsxRuntime.jsx("label", __assign({ className: "form-label ml-2 ".concat(labelClassName), htmlFor: name }, { children: label }))), child && child, errors.length > 0 && jsxRuntime.jsx("div", __assign({ className: "form-error" }, { children: errors }))] })));
};

var Input = function (_a) {
    var label = _a.label, className = _a.className, inputClassName = _a.inputClassName, child = _a.child, name = _a.name, _b = _a.errors, errors = _b === void 0 ? [] : _b, icon = _a.icon, iconPosition = _a.iconPosition, props = __rest(_a, ["label", "className", "inputClassName", "child", "name", "errors", "icon", "iconPosition"]);
    if (props.value === undefined || props.value === null) {
        props.value = "";
    }
    var _c = React.useState(props.value), inValue = _c[0], setInValue = _c[1];
    var changeEvent = function (e) {
        setInValue(e.target.value);
        if (props.onChange)
            props.onChange(e);
    };
    return (jsxRuntime.jsxs("div", __assign({ className: className }, { children: [label && (jsxRuntime.jsx("label", __assign({ className: "form-label", htmlFor: name }, { children: label }))), jsxRuntime.jsxs("div", __assign({ className: "form-input ".concat(inputClassName, " ").concat(errors.length ? "form-input-error" : "") }, { children: [iconPosition !== 'right' && icon, jsxRuntime.jsx("input", __assign({}, props, { value: inValue, id: name, onChange: changeEvent, className: "border-none outline-none focus:outline-none flex-1 p-0 m-0" })), iconPosition === 'right' && icon] })), child && child, errors.length > 0 && jsxRuntime.jsx("div", __assign({ className: "form-error" }, { children: errors }))] })));
};

var Carousel = function (_a) {
    var props = __rest(_a, []);
    var items = props.items, itemsToShow = props.itemsToShow, speed = props.speed, showDotsNav = props.showDotsNav, controlClass = props.controlClass, leftControlClass = props.leftControlClass, rightControlClass = props.rightControlClass, leftControlIconClass = props.leftControlIconClass, rightControlIconClass = props.rightControlIconClass, controlIcon = props.controlIcon, containerClassName = props.containerClassName, activeSlideClassName = props.activeSlideClassName, dotsNavActiveItemClassName = props.dotsNavActiveItemClassName, dotsNavContainerClassName = props.dotsNavContainerClassName, dotsNavItemsClassName = props.dotsNavItemsClassName, centerMode = props.centerMode;
    var _b = React.useState(0), activeSlide = _b[0], setActiveSlide = _b[1];
    return (jsxRuntime.jsx("div", __assign({ className: "carouselContainer ".concat(containerClassName) }, { children: jsxRuntime.jsx(SimplyCarousel__default["default"], __assign({ preventScrollOnSwipe: true, swipeTreshold: 60, activeSlideIndex: activeSlide, centerMode: centerMode, onRequestChange: setActiveSlide, containerProps: {
                className: "w-full justify-between",
            }, innerProps: {
                className: "w-full !max-w-full",
            }, itemsListProps: {
                className: "",
            }, activeSlideProps: {
                className: activeSlideClassName,
            }, forwardBtnProps: {
                children: controlIcon ? (controlIcon) : (jsxRuntime.jsx(solid.ArrowLeftIcon, { className: " carouselControlIcon ".concat(rightControlIconClass) })),
                className: "carouselControl rotate-180 ".concat(controlClass, " right-0 ").concat(rightControlClass),
            }, backwardBtnProps: {
                children: controlIcon ? (controlIcon) : (jsxRuntime.jsx(solid.ArrowLeftIcon, { className: "carouselControlIcon ".concat(leftControlIconClass, " ") })),
                className: "carouselControl ".concat(controlClass, " left-0 ").concat(leftControlClass),
            }, dotsNav: {
                show: !!showDotsNav,
                activeItemBtnProps: {
                    className: dotsNavActiveItemClassName,
                },
                containerProps: {
                    className: dotsNavContainerClassName,
                },
                itemBtnProps: {
                    className: dotsNavItemsClassName,
                },
            }, itemsToShow: itemsToShow || 3, speed: speed || 400 }, { children: items.map(function (item) { return item; }) })) })));
};

var Dropdown = function (_a) {
    var label = _a.label, inputClassName = _a.inputClassName, _b = _a.errors, errors = _b === void 0 ? null : _b, items = _a.items, placeholder = _a.placeholder, value = _a.value, clearable = _a.clearable, _c = _a.editable, editable = _c === void 0 ? true : _c, itemLabel = _a.itemLabel, hideDropdownBtn = _a.hideDropdownBtn, itemTemplate = _a.itemTemplate, itemClassName = _a.itemClassName, onChange = _a.onChange, className = _a.className, containerClassName = _a.containerClassName, dropdownIconContainerClassName = _a.dropdownIconContainerClassName, dropdownIconClassName = _a.dropdownIconClassName;
    var _d = React.useState(value), selected = _d[0], setSelected = _d[1];
    var _e = React.useState(null), inputValue = _e[0], setInputValue = _e[1];
    var _f = React.useState(false), visible = _f[0], setVisible = _f[1];
    var changeValue = function (e) {
        setVisible(true);
        setSelected(null);
        setInputValue(e.target.value);
        if (onChange)
            onChange(e);
    };
    var selectValue = function (data) {
        setSelected(itemLabel ? data[itemLabel] : data);
        setInputValue(null);
        setVisible(false);
        if (onChange)
            onChange(data);
    };
    var generateList = function () {
        var data = [];
        items === null || items === void 0 ? void 0 : items.forEach(function (item, index) {
            return (!inputValue ||
                (itemLabel ? item[itemLabel] : item).includes(inputValue)) &&
                data.push(jsxRuntime.jsx("li", __assign({ onClick: function () { return selectValue(item); }, className: "dropdownItem ".concat(itemClassName) }, { children: itemTemplate
                        ? itemTemplate(item)
                        : itemLabel
                            ? item[itemLabel]
                            : item }), index));
        });
        return data.length > 0 ? (data) : (jsxRuntime.jsx("div", __assign({ className: "p-2 flex items-center justify-center font-semibold" }, { children: "Not found" })));
    };
    return (jsxRuntime.jsxs("div", __assign({ className: "relative ".concat(containerClassName) }, { children: [label && jsxRuntime.jsx("label", __assign({ className: "form-label" }, { children: label })), jsxRuntime.jsxs("div", __assign({ className: "relative" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "flex items-stretch  border border-gray-500 rounded-md overflow-hidden z-50 relative bg-white ".concat(className) }, { children: [jsxRuntime.jsx("input", { disabled: !editable, className: "flex-1 p-2 focus:outline-none ".concat(inputClassName), placeholder: placeholder, onChange: changeValue, value: inputValue || selected || "" }), clearable && (jsxRuntime.jsx("div", __assign({ className: "w-5 h-5 cursor-pointer flex items-center justify-center rounded-full bg-gray-300 text-white my-auto mr-2" }, { children: jsxRuntime.jsx(solid.XMarkIcon, { className: "w-4" }) }))), !hideDropdownBtn && (jsxRuntime.jsx("div", __assign({ onClick: function () { return setVisible(function (pre) { return !pre; }); }, className: "w-12 flex items-center justify-center cursor-pointer border-l border-gray-300 ".concat(dropdownIconContainerClassName) }, { children: jsxRuntime.jsx(solid.ChevronDownIcon, { className: "w-5 ".concat(dropdownIconClassName) }) })))] })), jsxRuntime.jsx("ul", __assign({ className: "absolute top-full left-0 w-full shadow-lg bg-white transition-all duration-200 max-h-0 overflow-hidden ".concat(visible && "max-h-screen z-50") }, { children: generateList() })), visible && (jsxRuntime.jsx("div", { className: "w-screen h-screen fixed top-0 left-0 bg-transparent z-40", onClick: function () { return setVisible(false); } }))] })), errors && jsxRuntime.jsx("div", __assign({ className: "form-error" }, { children: errors }))] })));
};

var SwitchButton = function (props) {
    var checked = props.checked, onChange = props.onChange, className = props.className, bubbleClassName = props.bubbleClassName;
    return (jsxRuntime.jsxs("label", __assign({ className: "switchButtonContainer ".concat(checked ? "bg-primary " : "bg-gray-600", " ").concat(className) }, { children: [jsxRuntime.jsx("input", { type: "checkbox", className: "opacity-0 w-0 h-0", checked: checked, onChange: onChange }), jsxRuntime.jsx("span", { className: "switchButtonBubble  ".concat(checked && "before:translate-x-5", " ").concat(bubbleClassName) })] })));
};

var Accordion = function (_a) {
    var items = _a.items, className = _a.className, titleClassName = _a.titleClassName, dropDownIconClassName = _a.dropDownIconClassName, contentClassName = _a.contentClassName, dropDownBtnTemplate = _a.dropDownBtnTemplate, contentOpenClassName = _a.contentOpenClassName, containerClassName = _a.containerClassName, titleOpenClassName = _a.titleOpenClassName, containerOpenClassName = _a.containerOpenClassName, changeActiveIndex = _a.changeActiveIndex, dropDownIconOpenClassName = _a.dropDownIconOpenClassName;
    var _b = React.useState(null), activeIndex = _b[0], setActiveIndex = _b[1];
    var changeIndex = function (index) {
        setActiveIndex(index === activeIndex ? null : index);
        if (changeActiveIndex)
            changeActiveIndex(index === activeIndex ? null : index);
    };
    return (jsxRuntime.jsx("div", __assign({ className: "accordionMain ".concat(className) }, { children: items.map(function (item, index) { return (jsxRuntime.jsxs("div", __assign({ className: "w-full \n          ".concat(containerClassName, "\n          ").concat(index === activeIndex && containerOpenClassName) }, { children: [jsxRuntime.jsxs("div", __assign({ onClick: function () { return changeIndex(index); }, className: "accordionTitle ".concat(titleClassName, " ").concat(index === activeIndex && titleOpenClassName) }, { children: [item.title, dropDownBtnTemplate ? (dropDownBtnTemplate(index === activeIndex)) : (jsxRuntime.jsx(solid.ChevronDownIcon, { className: "accordionIcon ".concat(dropDownIconClassName, " ").concat(index === activeIndex && dropDownIconOpenClassName) }))] })), jsxRuntime.jsx("div", __assign({ className: "max-h-0 w-full overflow-hidden transition-all duration-200 ".concat(index === activeIndex && "max-h-screen") }, { children: jsxRuntime.jsx("div", __assign({ className: "accordionContainer ".concat(contentClassName, " ").concat(index === activeIndex && contentOpenClassName) }, { children: item.content })) }))] }), index)); }) })));
};

var Modal = function (_a) {
    var props = __rest(_a, []);
    var hide = props.hide, visible = props.visible, children = props.children, className = props.className, closeBtnClassName = props.closeBtnClassName;
    return visible ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { onClick: hide, className: "fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-[100] bg-black/20" }), jsxRuntime.jsxs("div", __assign({ className: "modalContainer ".concat(className) }, { children: [jsxRuntime.jsx("div", __assign({ className: "modalCloseBtn ".concat(closeBtnClassName), onClick: hide }, { children: jsxRuntime.jsx(solid.XMarkIcon, { className: "w-4" }) })), children] }))] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, {}));
};

var Paragraph = function (_a) {
    var text = _a.text, className = _a.className, paragraphSize = _a.paragraphSize;
    var paragraphClass = paragraphSize === "small"
        ? "paragraph-small"
        : paragraphSize === "medium"
            ? "paragraph-medium"
            : "paragraph-large";
    return jsxRuntime.jsx("p", __assign({ className: "paragraph ".concat(paragraphClass, " ").concat(className) }, { children: text }));
};

var HeaderLevel;
(function (HeaderLevel) {
    HeaderLevel["h1"] = "h1";
    HeaderLevel["h2"] = "h2";
    HeaderLevel["h3"] = "h3";
    HeaderLevel["h4"] = "h4";
})(HeaderLevel || (HeaderLevel = {}));
var Header = function (_a) {
    var level = _a.level, text = _a.text, className = _a.className;
    var finalClass = "".concat(className, " header");
    return level === HeaderLevel.h1 ? (jsxRuntime.jsx("h1", __assign({ className: "".concat(finalClass, " header-h1") }, { children: text }))) : level === HeaderLevel.h2 ? (jsxRuntime.jsx("h2", __assign({ className: "".concat(finalClass, " header-h2") }, { children: text }))) : level === HeaderLevel.h3 ? (jsxRuntime.jsx("h3", __assign({ className: "".concat(finalClass, " header-h3") }, { children: text }))) : (jsxRuntime.jsx("h4", __assign({ className: "".concat(finalClass, " header-h4") }, { children: text })));
};

var Textarea = function (_a) {
    var label = _a.label, className = _a.className, inputClassName = _a.inputClassName, child = _a.child, name = _a.name, _b = _a.errors, errors = _b === void 0 ? [] : _b, props = __rest(_a, ["label", "className", "inputClassName", "child", "name", "errors"]);
    if (props.value === undefined || props.value === null) {
        props.value = "";
    }
    var _c = React.useState(props.value), inValue = _c[0], setInValue = _c[1];
    var changeEvent = function (e) {
        setInValue(e.target.value);
        if (props.onChange)
            props.onChange(e);
    };
    return (jsxRuntime.jsxs("div", __assign({ className: className }, { children: [label && (jsxRuntime.jsx("label", __assign({ className: "form-label", htmlFor: name }, { children: label }))), jsxRuntime.jsx("textarea", __assign({}, props, { value: inValue, id: name, className: "form-input ".concat(inputClassName, " ").concat(errors.length ? "form-input-error" : ""), onChange: changeEvent })), child && child, errors.length > 0 && jsxRuntime.jsx("div", __assign({ className: "form-error" }, { children: errors }))] })));
};

var ScrollList = function (_a) {
    var list = _a.list, containerClassName = _a.containerClassName; __rest(_a, ["list", "containerClassName"]);
    return (jsxRuntime.jsx("div", __assign({ className: "scrollContainer no-scrollbar  ".concat(containerClassName) }, { children: jsxRuntime.jsx("div", __assign({ className: "flex items-center justify-start " }, { children: list })) })));
};

var Card = function (_a) {
    var btnLink = _a.btnLink, btnOnClick = _a.btnOnClick, btnText = _a.btnText, cardLink = _a.cardLink, cardOnClick = _a.cardOnClick, description = _a.description, image = _a.image, title = _a.title, upTitle = _a.upTitle, className = _a.className, titleClassName = _a.titleClassName, descriptionClassName = _a.descriptionClassName, ButtonClassName = _a.ButtonClassName, imageClassName = _a.imageClassName, dataContainerClassName = _a.dataContainerClassName, paragraphExtraComponent = _a.paragraphExtraComponent, imageExtraComponent = _a.imageExtraComponent, ExtraComponent = _a.ExtraComponent;
    var provider = function (child) {
        return cardLink ? (jsxRuntime.jsx(Link__default["default"], __assign({ onClick: cardOnClick, className: "cardData ".concat(className), href: cardLink }, { children: child }))) : (jsxRuntime.jsx("div", __assign({ onClick: cardOnClick, className: "cardData ".concat(className) }, { children: child })));
    };
    return provider(jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [upTitle && title && (jsxRuntime.jsx(Header, { text: title, level: HeaderLevel.h3, className: "cardData__title cardData__title--top ".concat(titleClassName) })), typeof image === "string" ? (jsxRuntime.jsx("img", { className: "w-full h-full object-cover ".concat(imageClassName), alt: title || description, src: image })) : (image), imageExtraComponent, jsxRuntime.jsxs("div", __assign({ className: "cardData__dataContainer ".concat(dataContainerClassName) }, { children: [!upTitle && title && (jsxRuntime.jsx(Header, { text: title, level: HeaderLevel.h3, className: "cardData__title ".concat(titleClassName) })), paragraphExtraComponent, description && (jsxRuntime.jsx(Paragraph, { text: description, className: "cardData__description ".concat(descriptionClassName) })), ExtraComponent, btnText && (jsxRuntime.jsx(Button, { btnType: buttonType.primary, label: btnText, link: btnLink, onClick: btnOnClick, className: "".concat(ButtonClassName) }))] }))] }));
};

var Avatar = function (_a) {
    var image = _a.image, description = _a.description, name = _a.name, square = _a.square, className = _a.className, descriptionClassName = _a.descriptionClassName, imageClassName = _a.imageClassName, nameClassName = _a.nameClassName;
    return (jsxRuntime.jsxs("div", __assign({ className: "avatar ".concat(className) }, { children: [jsxRuntime.jsx("div", __assign({ className: "avatarImage ".concat(square && "avatarImage--square", " ").concat(imageClassName) }, { children: jsxRuntime.jsx("img", { src: image }) })), (description || name) && (jsxRuntime.jsxs("div", __assign({ className: "avatarDataContainer" }, { children: [name && jsxRuntime.jsx("p", __assign({ className: "avatarName ".concat(nameClassName) }, { children: name })), description && (jsxRuntime.jsx("p", __assign({ className: "avatarDescription ".concat(descriptionClassName) }, { children: description })))] })))] })));
};

var Tab = function (_a) {
    var activeId = _a.activeId, items = _a.items, onChange = _a.onChange, className = _a.className;
    var _b = React.useState(activeId), activeTab = _b[0], setActiveTab = _b[1];
    var changeSelectedItem = function (id) {
        if (onChange)
            onChange(id);
        setActiveTab(id);
    };
    var getIndex = function () {
        for (var i in items)
            if (items[i].id === activeTab)
                return i;
        return 0;
    };
    return (jsxRuntime.jsxs("div", __assign({ className: "tab ".concat(className) }, { children: [items === null || items === void 0 ? void 0 : items.map(function (item) { return (jsxRuntime.jsx("div", __assign({ className: "tabItem ".concat(item.id === activeTab && "tabItemActive"), onClick: function () { return changeSelectedItem(item.id); } }, { children: item.name }), item.id)); }), jsxRuntime.jsx("div", { style: {
                    width: "calc(100% / ".concat(items === null || items === void 0 ? void 0 : items.length, ")"),
                    left: "calc( 100% / ".concat(items === null || items === void 0 ? void 0 : items.length, " * ").concat(getIndex(), ") "),
                }, className: "tabViewer" })] })));
};

var Rating = function (_a) {
    var maxRate = _a.maxRate, rate = _a.rate, containerClassName = _a.containerClassName, emptyStarClassName = _a.emptyStarClassName, fillStarClassName = _a.fillStarClassName, onClick = _a.onClick;
    var generateStars = function () {
        var stars = [];
        for (var i = 0; i < maxRate; i++) {
            if (i < rate)
                stars.push(jsxRuntime.jsx(solid.StarIcon, { onClick: onClick, className: "ratingFillStar ".concat(fillStarClassName) }, i));
            else
                stars.push(jsxRuntime.jsx(outline.StarIcon, { onClick: onClick, className: "ratingEmptyStar ".concat(emptyStarClassName) }, i));
        }
        return stars;
    };
    return jsxRuntime.jsx("div", __assign({ className: "flex ".concat(containerClassName) }, { children: generateStars() }));
};

var Breadcrumb = function (_a) {
    var items = _a.items, className = _a.className, itemClassName = _a.itemClassName, chevronClassName = _a.chevronClassName;
    var compProvider = function (childEl, item, index) {
        return item.link ? (jsxRuntime.jsx(Link__default["default"], __assign({ className: item.className, href: item.link }, { children: childEl }), index)) : (jsxRuntime.jsx("div", __assign({ className: item.className }, { children: childEl })));
    };
    return (jsxRuntime.jsx("div", __assign({ className: "breadcrumb ".concat(className) }, { children: items.map(function (item, index) { return (jsxRuntime.jsxs(React__default["default"].Fragment, { children: [index !== 0 && (jsxRuntime.jsx(solid.ChevronRightIcon, { className: "w-5 ".concat(chevronClassName) })), compProvider(jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [item.icon &&
                            (typeof item.icon === "string" ? (jsxRuntime.jsx("img", { src: item.icon })) : (item.icon)), item.name && (jsxRuntime.jsx("div", __assign({ className: "breadcrumbItem ".concat(item.className, " ").concat(itemClassName) }, { children: item.name })))] }), item, index)] }, index)); }) })));
};

var index = {
    Button: Button,
    UseTheme: UseTheme,
    Checkbox: Checkbox,
    Input: Input,
    Carousel: Carousel,
    Dropdown: Dropdown,
    SwitchButton: SwitchButton,
    Accordion: Accordion,
    Modal: Modal,
    Paragraph: Paragraph,
    Header: Header,
    TextArea: Textarea,
    Spinner: Spinner,
    ScrollList: ScrollList,
    Tab: Tab,
    Rating: Rating,
    Breadcrumb: Breadcrumb,
    Card: Card,
    Avatar: Avatar,
    buttonType: buttonType
};

module.exports = index;
//# sourceMappingURL=index.js.map
