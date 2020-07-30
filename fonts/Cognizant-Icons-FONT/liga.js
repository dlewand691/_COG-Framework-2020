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
            'navigation-drawer': '&#xe945;',
            'arrow-box-up': '&#xe902;',
            'arrow-down': '&#xe903;',
            'arrow-down-solid': '&#xe904;',
            'arrow-left': '&#xe905;',
            'arrow-left-solid': '&#xe906;',
            'arrow-right': '&#xe907;',
            'arrow-solid-right': '&#xe908;',
            'arrow-up': '&#xe909;',
            'arrow-up-solid': '&#xe90a;',
            'download': '&#xe920;',
            'upload': '&#xe960;',
            'logout': '&#xe941;',
            'launch': '&#xe935;',
            'arrow-right-tail': '&#xe98b;',
            'synchronize': '&#xe95b;',
            'synchronize-2': '&#xe95c;',
            'close': '&#xe91a;',
            'add-circle': '&#xe901;',
            'subtract-circle': '&#xe95a;',
            'remove-circle-solid': '&#xe94f;',
            'remove-circle': '&#xe94e;',
            'check-circle': '&#xe916;',
            'check-circle-2': '&#xe917;',
            'check-box': '&#xe915;',
            'expand-diagonal': '&#xe967;',
            'search': '&#xe953;',
            'zoom-in': '&#xe965;',
            'zoom-out': '&#xe966;',
            'window-search-engine': '&#xe964;',
            'report-problem-circle': '&#xe950;',
            'report-problem-triangle': '&#xe951;',
            'help-circle': '&#xe932;',
            'cog': '&#xe91c;',
            'home': '&#xe934;',
            'pencil': '&#xe948;',
            'layers': '&#xe936;',
            'view': '&#xe962;',
            'bin': '&#xe90d;',
            'star': '&#xe959;',
            'bookmark': '&#xe910;',
            'toolbox': '&#xe95e;',
            'lock-close': '&#xe93c;',
            'lock-open': '&#xe93d;',
            'filter': '&#xe928;',
            'shopping-cart': '&#xe957;',
            'book-open': '&#xe90f;',
            'bubble-chat-typing': '&#xe912;',
            'calendar': '&#xe913;',
            'camera': '&#xe914;',
            'picture': '&#xe94a;',
            'clock': '&#xe918;',
            'clock-2': '&#xe919;',
            'cloud': '&#xe91b;',
            'file-acrobat': '&#xe923;',
            'file-favorite-star': '&#xe924;',
            'file-new': '&#xe925;',
            'file-view': '&#xe926;',
            'file-checklist-edit': '&#xe983;',
            'file-text-picture': '&#xe982;',
            'file-word': '&#xe927;',
            'folder': '&#xe929;',
            'folder-add': '&#xe92a;',
            'folder-view': '&#xe92b;',
            'globe': '&#xe92d;',
            'headphone': '&#xe931;',
            'link': '&#xe939;',
            'location-pin': '&#xe93a;',
            'location-pin-solid': '&#xe93b;',
            'map-pin': '&#xe942;',
            'email': '&#xe921;',
            'logo-facebook': '&#xe93e;',
            'logo-linkedin': '&#xe93f;',
            'logo-youtube-clip': '&#xe984;',
            'logo-instagram': '&#xe98a;',
            'logo-twitter-bird': '&#xe940;',
            'logo-slide-share': '&#xe985;',
            'rss-feed': '&#xe952;',
            'rss-feed-solid': '&#xe981;',
            'share': '&#xe955;',
            'share-solid': '&#xe956;',
            'account-group': '&#xe900;',
            'network-user': '&#xe947;',
            'person': '&#xe949;',
            'group-add': '&#xe930;',
            'video-camera': '&#xe961;',
            'video-meeting-square': '&#xe988;',
            'play-button': '&#xe94b;',
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
            'expand': '&#xe922;',
            'newspaper': '&#xe980;',
            'programming-website': '&#xe987;',
            'podcast': '&#xe989;',
            'print': '&#xe98c;',
            'barcode-scan': '&#xe90c;',
            'leaf': '&#xe937;',
            'lightbulb': '&#xe938;',
            'medical-box': '&#xe943;',
            'gauge': '&#xe92c;',
            'qr-code': '&#xe94d;',
            'truck': '&#xe95f;',
            'box': '&#xe911;',
            'bank-notes': '&#xe90b;',
            'credit-card': '&#xe91f;',
            'mobile-phone-portrait': '&#xe944;',
            'tablet-ipad': '&#xe95d;',
            'computer-screen': '&#xe91e;',
            'smartwatch': '&#xe958;',
            'server': '&#xe954;',
            'computer-bug': '&#xe91d;',
            'window-code': '&#xe963;',
            'bluetooth': '&#xe90e;',
            'network-signal': '&#xe946;',
            'presentation-code': '&#xe986;',
            'projector-screen': '&#xe94c;',
            'graph-bar': '&#xe92e;',
            'graph-pie': '&#xe92f;',
            'hierarchy': '&#xe933;',
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
