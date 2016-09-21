(function() {
	function Flickr() {
		this.init();
	}

	Flickr.prototype = {
		init: function() {
			this.user = "144623533@N08";
			this.album = "72157674025315935";

			window.getPhotos = this.getPhotos;

			this.getJSON();
		},
		getJSON: function() {
			var src = "http://api.flickr.com/services/feeds/photos_public.gne?id=" + this.user + "&format=json&jsoncallback=getPhotos";
			var script = document.createElement( "script" );
				script.src = src;
				document.body.appendChild( script );
		},
		getPhotos: function( data ) {
			var limit = 4;

			if( data && data.items ) {
				var title = data.title;
				var items = data.items;
				var albumTitle = title.replace( "Content from ", "" );
				var html = "<div class='images'>";

				for( var i = 0; i < items.length; ++i ) {
					var item = items[i];
					var n = i + 1;
					if( n <= limit ) {
						html += "<a href='" + item.link + "'><img src='" + item.media.m + "' alt='' /></a>";
					}
				}

				html += "</div>";

				document.querySelector( "#flickr" ).innerHTML = html;
			}
		}
	};

	document.addEventListener( "DOMContentLoaded", function() {
//		var flickrFeed = new Flickr();

	});

    function SVGMenu( el, options ) {
        this.el = el;
        this.init();
    }
    SVGMenu.prototype.init = function() {
        this.trigger = this.el.querySelector( 'button.menu-handle' );
        this.initEvents();
    };
    SVGMenu.prototype.initEvents = function() {
        this.trigger.addEventListener( 'click', this.toggle.bind(this) );
    };
    SVGMenu.prototype.toggle = function() {
        var self = this;
        if( $(self.el).hasClass( 'menu-open' ) ) {
            setTimeout( function() { $(self.el).removeClass( 'menu-open' );}, 10 );
        }
        else {
            setTimeout( function() { $(self.el).addClass( 'menu-open' );
                $(".menu.menu-open").siblings("#main").on("click",function(){$(self.el).removeClass( 'menu-open' );});
            }, 10 );
        }
    };
    new SVGMenu( document.getElementById( 'main-content' ) );

})();
