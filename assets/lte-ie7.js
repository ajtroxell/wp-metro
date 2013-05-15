/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'WP-Metro\'">' + entity + '</span>' + html;
	}
	var icons = {
			'metro-flickr' : '&#xe002;',
			'metro-bitbucket' : '&#xe003;',
			'metro-githubsolid' : '&#xe004;',
			'metro-github' : '&#xe005;',
			'metro-exclamation' : '&#xe006;',
			'metro-stumbleupon' : '&#xe007;',
			'metro-skype' : '&#xe008;',
			'metro-soundcloud' : '&#xe009;',
			'metro-steam' : '&#xe00a;',
			'metro-amazon' : '&#xe00b;',
			'metro-question' : '&#xe00c;',
			'metro-disqus' : '&#xe00d;',
			'metro-zune' : '&#xe00e;',
			'metro-skydrive' : '&#xe010;',
			'metro-earphones' : '&#xe011;',
			'metro-chat' : '&#xe012;',
			'metro-phone' : '&#xe013;',
			'metro-controller' : '&#xe014;',
			'metro-mail' : '&#xe015;',
			'metro-xbox' : '&#xe016;',
			'metro-marketplace' : '&#xe017;',
			'metro-calendar' : '&#xe018;',
			'metro-spotify' : '&#xe019;',
			'metro-googleplus' : '&#xe01b;',
			'metro-hulu' : '&#xe01c;',
			'metro-facebook' : '&#xe01d;',
			'metro-digg' : '&#xe01e;',
			'metro-vimeo' : '&#xe01f;',
			'metro-youtube' : '&#xe020;',
			'metro-wordpress' : '&#xe021;',
			'metro-dribbble' : '&#xe022;',
			'metro-evernote' : '&#xe023;',
			'metro-lastfm' : '&#xe024;',
			'metro-twitter' : '&#xe025;',
			'metro-linkedin' : '&#xe026;',
			'metro-tumblr' : '&#xe027;',
			'metro-excel' : '&#xe028;',
			'metro-office' : '&#xe029;',
			'metro-word' : '&#xe02a;',
			'metro-delicious' : '&#xe001;',
			'metro-rss' : '&#xe00f;',
			'metro-one-note' : '&#xe000;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/metro-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};