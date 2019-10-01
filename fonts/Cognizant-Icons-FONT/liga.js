/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'account-group': '&#xe900;',
            'add-circle': '&#xe901;',
            'arrow-box-up': '&#xe902;',
            'arrow-down': '&#xe903;',
            'arrow-down-solid': '&#xe904;',
            'arrow-left': '&#xe905;',
            'arrow-left-solid': '&#xe906;',
            'arrow-right': '&#xe907;',
            'arrow-solid-right': '&#xe908;',
            'arrow-up': '&#xe909;',
            'arrow-up-solid': '&#xe90a;',
            'bank-notes': '&#xe90b;',
            'barcode-scan': '&#xe90c;',
            'bin': '&#xe90d;',
            'bluetooth': '&#xe90e;',
            'book-open': '&#xe90f;',
            'bookmark': '&#xe910;',
            'box': '&#xe911;',
            'bubble-chat-typing': '&#xe912;',
            'calendar': '&#xe913;',
            'camera': '&#xe914;',
            'check-box': '&#xe915;',
            'check-circle': '&#xe916;',
            'check-circle-2': '&#xe917;',
            'clock': '&#xe918;',
            'clock-2': '&#xe919;',
            'close': '&#xe91a;',
            'cloud': '&#xe91b;',
            'cog': '&#xe91c;',
            'computer-bug': '&#xe91d;',
            'computer-screen': '&#xe91e;',
            'credit-card': '&#xe91f;',
            'download': '&#xe920;',
            'email': '&#xe921;',
            'expand': '&#xe922;',
            'file-acrobat': '&#xe923;',
            'file-favorite-star': '&#xe924;',
            'file-new': '&#xe925;',
            'file-view': '&#xe926;',
            'file-word': '&#xe927;',
            'filter': '&#xe928;',
            'folder': '&#xe929;',
            'folder-add': '&#xe92a;',
            'folder-view': '&#xe92b;',
            'gauge': '&#xe92c;',
            'globe': '&#xe92d;',
            'graph-bar': '&#xe92e;',
            'graph-pie': '&#xe92f;',
            'group-add': '&#xe930;',
            'headphone': '&#xe931;',
            'help-circle': '&#xe932;',
            'hierarchy': '&#xe933;',
            'home': '&#xe934;',
            'launch': '&#xe935;',
            'layers': '&#xe936;',
            'leaf': '&#xe937;',
            'lightbulb': '&#xe938;',
            'link': '&#xe939;',
            'location-pin': '&#xe93a;',
            'location-pin-solid': '&#xe93b;',
            'lock-close': '&#xe93c;',
            'lock-open': '&#xe93d;',
            'logo-facebook': '&#xe93e;',
            'logo-linkedin': '&#xe93f;',
            'logo-twitter-bird': '&#xe940;',
            'logout': '&#xe941;',
            'map-pin': '&#xe942;',
            'medical-box': '&#xe943;',
            'mobile-phone-portrait': '&#xe944;',
            'navigation-drawer': '&#xe945;',
            'network-signal': '&#xe946;',
            'network-user': '&#xe947;',
            'pencil': '&#xe948;',
            'person': '&#xe949;',
            'picture': '&#xe94a;',
            'play-button': '&#xe94b;',
            'projector-screen': '&#xe94c;',
            'qr-code': '&#xe94d;',
            'remove-circle': '&#xe94e;',
            'remove-circle-solid': '&#xe94f;',
            'report-problem-circle': '&#xe950;',
            'report-problem-triangle': '&#xe951;',
            'rss-feed': '&#xe952;',
            'search': '&#xe953;',
            'server': '&#xe954;',
            'share': '&#xe955;',
            'share-solid': '&#xe956;',
            'shopping-cart': '&#xe957;',
            'smartwatch': '&#xe958;',
            'star': '&#xe959;',
            'subtract-circle': '&#xe95a;',
            'synchronize': '&#xe95b;',
            'synchronize-2': '&#xe95c;',
            'tablet-ipad': '&#xe95d;',
            'toolbox': '&#xe95e;',
            'truck': '&#xe95f;',
            'upload': '&#xe960;',
            'video-camera': '&#xe961;',
            'view': '&#xe962;',
            'window-code': '&#xe963;',
            'window-search-engine': '&#xe964;',
            'zoom-in': '&#xe965;',
            'zoom-out': '&#xe966;',
            'expand-diagonal': '&#xe967;',
            'control-previous': '&#xe968;',
            'control-previous-solid': '&#xe974;',
            'control-rewind': '&#xe969;',
            'control-rewind-solid': '&#xe975;',
            'control-play': '&#xe96a;',
            'control-play-solid': '&#xe976;',
            'control-pause': '&#xe96b;',
            'control-pause-solid': '&#xe977;',
            'control-stop': '&#xe96c;',
            'control-stop-solid': '&#xe978;',
            'control-fast-forward': '&#xe96d;',
            'control-fast-forward-solid': '&#xe979;',
            'control-next': '&#xe96e;',
            'control-next-solid': '&#xe97a;',
            'control-eject': '&#xe96f;',
            'control-eject-solid': '&#xe97b;',
            'volume-off': '&#xe970;',
            'volume-off-solid': '&#xe97c;',
            'volume-low': '&#xe971;',
            'volume-low-solid': '&#xe97d;',
            'volume-medium': '&#xe972;',
            'volume-medium-solid': '&#xe97e;',
            'volume-max': '&#xe973;',
            'volume-max-solid': '&#xe97f;',
            'newspaper': '&#xe980;',
            'rss-feed-solid': '&#xe981;',
            'file-text-picture': '&#xe982;',
            'file-checklist-edit': '&#xe983;',
            'logo-youtube-clip': '&#xe984;',
            'logo-slide-share': '&#xe985;',
            'presentation-code': '&#xe986;',
            'programming-website': '&#xe987;',
            'video-meeting-square': '&#xe988;',
            'podcast': '&#xe989;',
            'logo-instagram': '&#xe98a;',
            'arrow-right-tail': '&#xe98b;',
            'print': '&#xe98c;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icomoon-liga/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
