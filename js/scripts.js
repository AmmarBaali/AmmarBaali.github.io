$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************** Social Share buttons ***********************/
    var share_bar = document.getElementsByClassName('share-bar');
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);

    for (var i = 0; i < share_bar.length; i++) {
        var html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
            'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(window.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
            'style="width:105px; height:21px;">' +
            '</iframe>' +

            '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(window.location) + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +

            '<div class="g-plusone" data-size="medium"></div>';

        // '<iframe src="https://plusone.google.com/_/+1/fastbutton?bsv&amp;size=medium&amp;url=' + encodeURIComponent(window.location) + '" allowtransparency="true" frameborder="0" scrolling="no" title="+1" style="width:105px; height:21px;"></iframe>';

        share_bar[i].innerHTML = html;
        share_bar[i].style.display = 'inline-block';
    }

    /********************** Embed youtube video *********************/
    $('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    var myCalendar = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Ammar and Ella's Wedding",

            // Event start date
            start: new Date('Jun 28, 2024 16:00'),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date('Jun 29, 2024 03:00'),

            // Event Address
            address: '21700 Trans-Canada Hwy, Vaudreuil-Dorion, Quebec J7V 8P7, Canada',

            // Event Description
            description: "Wedding event of Ammar and Ella at Chateau Vaudreuil."
        }
    });

    $('#add-to-cal').html(myCalendar);


    /********************** RSVP **********************/
	$('#rsvp-form').on('submit', function (e) {
		e.preventDefault();
		var data = $(this).serialize();

		$('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

		// Define an array of valid invite codes
		var validInviteCodes = [
			'b0e53b10c1f55ede516b240036b88f40',
			'1ef062bf592693626c0c29cbfdd253b8',
			'508df4cb2f4d8f80519256258cfb975f',
			'5bd2026f128662763c532f2f4b6f2476',
			'e35cf7b66449df565f93c607d5a81d09',
			'5b26219f766d316ece2a3364a26c0b1c',
			'878997bb3b505d024a587b7d2a400955',
			'6dbc3aa07f91b537b0281ea37e38ab5c',
			'58a59d1e6f71adfe503a7ea94fdd96fa',
			'8527d690a06ec7bb0aec0706317e9e13',
			'd308680e6d780f94cbf6531ff560b38a',
			'f89c5b88fddae2e521815933c60ed742',
			'bcba8e89b428406fcad0ad1d13c758f1',
			'd0b518f0c9518f075240c5dc02ee441d',
			'1f35ff3d360f942a743f5f334eb71b3d',
			'43807fdd49d151613d7ca94f0caa544b',
			'6d679d8aacff0d96f13c9592b77960d0',
			'1538974980f1966094049a9cfd619b9d',
			'60e645394bf4cba85a2de1f894d317cd',
			'd3a8518bb4fc0084895949fc6cf0a389',
			'12ef80caa22b768cb6f597f1812961ed',
			'9fe705c8100ecbeeb609e5a372402c22',
			'b6b036a949b91b7b14212fd44e310e28',
			'70028658328c3c71ddca24240df7cf3d',
			'af461147b0608c4b27fec9e4f47c8876',
			'5dbdd7287f8d4b9df4192606ed4f9307',
			'8b88ffdf8762ecea3ecb9d0b1091f4c2',
			'19ba46fbc6e136cef474ec9458f62b3e',
			'4f932163614ec20c6a25e1decb5a6189',
			'4faf67757cdce20afbfdf43de7f88b53',
			'3dc0d7af0585e19dc0b57e44d8a759b1',
			'9d35d4af68d1096ad15343e127ce5289',
			'78cf72377df71abd6d8f45db8abf5835',
			'522af3a01b8aab9f47461cba9e6d4133',
			'f67dc0f2488c87789c41ef47ca175853',
			'1fc294c4c24adcf72d0db09fa4328061',
			'd923212886ee843582cfcd6dda95f131',
			'9f0abfc4a0c7c336000ab237d5f197c5',
			'74c43b7ec689955c9c1517294e92500f',
			'4cdddb1de7e4acf8004e425b7b7d2ec2',
			'b6b036a949b91b7b14212fd44e310e28',
			'dddc947374a3f6c5e3ef7b27acddda29',
			'1ac9613839f839129173664797c6db5f',
			'322feb33d237c08213e5f41804c958d4',
			'9efd9bdfe3f2e3070c72944ff6a4e3af',
			'4d02b8896e5c9cc36750408f0f25e824',
			'546f59c48b8abbecede447d82ade6a62',
			'82ef8af83b0416441bbfe5f6820f2d37',
			'54dff44a024de9dad8c63c3d3f2e0ff8',
			'ad91c48bab41c40171efbe22239fd732',
			'b7fb6ab8060c1b877e0cedbb4680f3c9',
			'c482a49957bb3b224ac65ffea95fa696',
			'12ef80caa22b768cb6f597f1812961ed',
			'bae8beeaa951902e0c2b6a4b7564b338',
			'ce017c64a425599b5215b5de0e06e5aa',
			'f86782eef82530d5d5cc4a91334c6e14',
			'8f8b45848a9298a8136d6b8f1ed71d83',
			'acd4da919df3f02a34886cade023f102',
			'b2d3267dd31efbc378ad581b5a3a7fd4',
			'03e546ff1332f6ad51dcf146584be69b',
			'd3a8518bb4fc0084895949fc6cf0a389',
			'e5db8884451f2d87f20767fdfa091b76',
			'4cdddb1de7e4acf8004e425b7b7d2ec2',
			'45c88cb788b3241ef73190071fa6a75d',
			'619ac4c6eb3cdcfbbc21ae96cc3b2d35',
			'c734ac41383556f8699935c620cfa310',
			'cf4c97907a69e3901c0945061d2abf93',
			'e70fed6904648de8ddd2b0d97ed9e70f',
			'a181c2fe7c505919cb269d44365088fc',
			'c4c69a272ac9ac42851a071c5ccab8fb',
			'a1615a76b96754448df29f80e7f04c95',
			'a6ba50c21c5abdaeac32f131dfdc5075',
			'37e52ce5c8726ea3bb488bbccaeff9ea',
			'e2c3909f58a7c9db1e9403a6d81f6989',
			'6a8f5b5a5dcbd8981293ac014f7577b7',
			'83d22cdcdac7b5ec4cdc817934c8c3be',
			'b11015c6ed3895691783d0bf7130bae8',
			'92f549ef95fe78402f7e74856f0b4545',
			'7dd206f9e2a846a554cce478b126424c',
			'188a8acba8fda7eaf7f9a3bb9a254093',
			'9337c0025985169b160feffe6100e5f1',
			'60f351c4951d1f847518744df034193d',
			'bd2e697a70d454eca92d7a4ea743372b',
			'a026c95f052fc70bb2d8647de7f02cb2',
			'ebae18fa4290f7fb3ba082b29d79fd9e',
			'add9e4fc71ff5edfc62c824d66003d12',
			'58a42434a07033ea7b174144dede47f1',
			'c3a15103c85994aa5025b7939b3e6b9d',
			'05126e2591c0d0390bdc0de2a97d9d97',
			'3611ef9813e2628495a78c9fda236597',
			'fb5e53ca8fdbde082787b2c9acdcc167',
			'62f9ac73bae800442142afe273bfce8a',
			'a16b2cd458cb25ed258dd23966b1f3e7',
			'648b15c9113e9e9314c4cfa9c76d6b52',
			'436628d1681020de436c20f9be42395c',
			'd55bacf240b12c9f1c6cb63cb9f3eefd',
			'691052727c2774f4635ccb7531b1b019',
			'6b58c5b5a5cfdc4debd2193950c00b99',
			'968315dbd8105b75e8d8696ca2f37378',
			'672522ebd1a9d6889c2c40a5297bc23d'
		];

		// Check if the MD5 hash of the invite code is not in the validInviteCodes array
		if (!validInviteCodes.includes(MD5($('#invite_code').val()))) {
			$('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
		} else {
			$.post('https://script.google.com/macros/s/AKfycbxUsDhNqUH05Rovny3s6nTgLBT0v1OUzK_3CcR8i5OcGeEZOdQ-wEua_W1678iYrq6p/exec', data)
				.done(function (data) {
					console.log(data);
					if (data.result === "error") {
						$('#alert-wrapper').html(alert_markup('danger', data.message));
					} else {
						$('#alert-wrapper').html('');
						$('#rsvp-modal').modal('show');
					}
				})
				.fail(function (data) {
					console.log(data);
					$('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server.'));
				});
		}
	});

});

/********************** Extras **********************/

// Google map
function initMap() {
    var location = {lat: 45.41622699277486, lng: -74.0119070888575};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: location,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function initBBSRMap() {
    var la_fiesta = {lat: 45.41622699277486, lng: -74.0119070888575};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: la_fiesta,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: la_fiesta,
        map: map
    });
}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

// MD5 Encoding
var MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }

    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }

    function H(x, y, z) {
        return (x ^ y ^ z);
    }

    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }

    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
};