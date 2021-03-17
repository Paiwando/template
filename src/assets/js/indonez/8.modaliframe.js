/* modaliframe.js | https://www.indonez.com | Indonez | MIT License */
function iframeVid(_props) {
    this.defaults = {
        selector: '.in-iframe',     // selector used to find video element
        url: '',                    // your video, youtube, vimeo url
        width: 900,                 // width of your video
        height: 506                 // height of your video
    }

	this.props = {};
	for(var obj in this.defaults) {
		if( typeof(obj) !== 'undefined') {
			this.props[obj] = this.defaults[obj];
			if( _props.hasOwnProperty( obj ) && this.props.hasOwnProperty( obj ))
				this.props[obj] = _props[obj];
		}
    }

    if (document.querySelector(this.props.selector) != null) {
        let iframeWrap = document.querySelector(this.props.selector),
            iframeInsert = `<iframe src="${this.props.url}" width="${this.props.width}" height="${this.props.height}" data-uk-video="automute: true"></iframe>`,
            observer = new IntersectionObserver(function(entries) {
                if (entries[0].isIntersecting === true && iframeWrap.children.length === 1) iframeWrap.insertAdjacentHTML('beforeend', iframeInsert);
            }, { threshold: [0] });
        observer.observe(document.querySelector(this.props.selector));
    }
}