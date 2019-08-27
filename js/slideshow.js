( function() {
	var container, slideGroup, controls, buttonPrev, buttonNext, pagination;

	var container, controls, slides, buttonPrev, buttonNext, pagination;

	container = document.getElementsByClassName( 'slideshow' )[0];
	if ( ! container ) {
		return;
	}

	slideGroup = container.getElementsByClassName( 'slide-group' )[0];

	slides = container.getElementsByClassName( 'slide' );

	controls = document.getElementsByClassName( 'slideshow-controls' )[0];

	buttonPrev = controls.getElementsByTagName( 'button' )[0];

	buttonNext = controls.getElementsByTagName( 'button' )[1];

	pagination = controls.getElementsByTagName( 'ul' )[0];

	// init slides and pagination
	var len = slides.length;
	for ( var i = 0; i < len; i++ ) {
		var slide = slides[i];
		// assign data-slide values
		slide.dataset.slide = i;
		if ( i === 0 ) {
			slide.className += ' visible';
		}

		// create pagination links
		var li = document.createElement( 'li' );
		li.innerHTML = '<a href="#" data-slide="' + i + '">' + ( i + 1 ) + '</a>';
		pagination.appendChild(li);
	}

	pages = pagination.querySelectorAll( 'li' );

	pages.forEach( function( el, i ){
		el.addEventListener( 'click', function() {
			gotoSlide(i);
		})
	})

	buttonPrev.addEventListener( 'click', function(){
		var current = parseInt( container.getElementsByClassName( 'visible' )[0].dataset.slide );
		if (current > 0) {
			gotoSlide( current - 1 )
		}
	})

	buttonNext.addEventListener( 'click', function(){
		var current = parseInt( container.getElementsByClassName( 'visible' )[0].dataset.slide );
		if (current < slides.length - 1) {
			gotoSlide( current + 1 )
		}
	})

	// Swipe Detection
	var startX, endX, xDistance, direction;
	container.addEventListener( 'touchstart', function(e){
		startX = e.changedTouches[0].screenX;
	}, false)

	container.addEventListener( 'touchmove', function(e){
		e.preventDefault();
	}, false)

	container.addEventListener( 'touchend', function(e){
		endX = e.changedTouches[0].screenX;
		direction = startX > endX ? 'left' : 'right';
		distance = direction === 'right' ? endX - startX : startX - endX;
		if (direction === 'right' && distance > 50) {
			buttonPrev.click();
		} else if (direction === 'left' && distance > 50) {
			buttonNext.click();
		}
	}, false)

	function gotoSlide(dest) {
		var current = container.getElementsByClassName( 'visible' )[0];
		var next = container.querySelector(  '[data-slide="' + dest + '"]' );
		current.classList.remove( 'visible' );
		next.classList.add( 'visible' )
		// dataset.slide is a string representation of the number of the slide in slides array
		slideGroup.style.left = parseInt( next.dataset.slide ) * -100 + '%';
	}
})()
