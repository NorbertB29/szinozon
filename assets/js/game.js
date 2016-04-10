$(document).ready(function () {

	window.colorSector = $(".color-selector-wrap");
	$(colorSector).append(COLOR_SECTION_HTML);

	window.gameAttempt = 1;
	window.MAX_ATTEMPT = 6;

	window.colorTable = $(".colors-container");
	window.currentSquares = $($(colorSector).children()[gameAttempt]).find(".color-square");
	window.currentResultSquares = $($(colorSector).children()[gameAttempt]).find(".result-square");
	
	window.squareClicked = 0;
	window.colorArray = [];

	colorGenerator();
	colorTableToggler();
	colorSetter();
	controllingLogic();

});
