var colorTableToggler = function () {

	$(colorTable).hide();

	$(currentSquares).on('click',function (e) { toggler(e, this); });

	$(document).on('click', function () {
		$(colorTable).hide();
	});

};

function toggler (e, obj) {

	e.stopPropagation();

	$(colorTable).show();

	squareClicked = obj;

	var posX = $(squareClicked).offset().left;
	var posY = $(squareClicked).offset().top;

	$(colorTable).offset({
		left: posX,
		top: posY
	});

}
