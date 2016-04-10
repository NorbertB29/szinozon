var colorSetter = function () {

	var colors = $(".color");

	$(colors).on('click', function () {

		var color = $(this).attr('class').split(/\s+/)[1];

		colorSet(color);

	});

	function colorSet (color) {
		var currentColor = $(squareClicked).attr('class').split(/\s+/)[1];
			
		$(squareClicked).removeClass(currentColor);
		$(squareClicked).addClass(color);
	}

};
