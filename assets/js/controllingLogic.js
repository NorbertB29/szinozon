var controllingLogic = function () {

	var attemptCounter = $(".attempt-counter");
	var controlBtn = $(".control-btn");
	var result = $(".result");

	var selectedColors = [];
	var resultColors = [];
	var genColorsCount = {};

	$(attemptCounter).html("Próbálkozás: " + gameAttempt + " / " + MAX_ATTEMPT);

	$(controlBtn).on('click', function () {

		for (var i = 0; i < 4; i++) {
			selectedColors[i] = $(currentSquares[i]).attr('class').split(/\s+/)[1];
		}
		console.log("selected: " + selectedColors);

		genColorsCount = countColors(colorArray);

		verification();

	});

	function verification () {

		var countColor = {};
		var includingSame = [];

		for (var i = 0; i < selectedColors.length; i++) {
			
			var colorIndexInGen = colorArray.indexOf(selectedColors[i]);
			var j = 0;

			includingSame[i] = false;

			if (colorIndexInGen !== -1) {

				while (includingSame[i] === false && j < colorArray.length) {

					if ((i == j) && colorArray[j] == selectedColors[i]) {
						resultColors[j] = "green";
						includingSame[j] = true;
						countColor[selectedColors[i]]++;
					} 
					j++;

				}

			} else {
				resultColors[i] = "white";
			}
			
		}

		for (var k = 0; k < colorArray.length; k++) {

			if (colorArray.indexOf(selectedColors[k]) !== -1) {

				if ((includingSame[k] === false) && ((countColor[selectedColors[k]] < genColorsCount[selectedColors[k]]) || (!(selectedColors[k] in countColor)))) {
					resultColors[k] = "red";
					countColor[selectedColors[k]]++;
				} else if (includingSame[k] === false) {
					resultColors[k] = "white";
				}

			}

		}
		
		console.log("result: " + resultColors);

		addResult();
		checkResult();

	}

	function addResult () {

		randomizeResults(resultColors);

		for (var i = 0; i < resultColors.length; i++) {
			$(currentResultSquares[i]).addClass(resultColors[i]);
		}

	}

	function checkResult () {

		var isCorrect = true;

		for (var i = 0; i < resultColors.length; i++) {

			if (resultColors[i] !== "green") {
				isCorrect = false;
			}

		}

		if (isCorrect === false) {
			loadNewAttempt();
		} else {
			//nyertel
			$(result).css("display","block");
			$(result).find("h2").html("nyertél");
			scrollToViewport(0, 400);
		}

	}

	function loadNewAttempt () {

		gameAttempt++;

		if (gameAttempt <= MAX_ATTEMPT) {

			selectedColors = [];
			resultColors = [];

			$(colorSector).append(COLOR_SECTION_HTML);

			$(currentSquares).unbind('click');

			window.currentSquares = $($(colorSector).children()[gameAttempt]).find(".color-square");
			window.currentResultSquares = $($(colorSector).children()[gameAttempt]).find(".result-square");

			$(currentSquares).on('click', function (e) { toggler(e, this); });

			$(attemptCounter).html("Próbálkozás: " + gameAttempt + " / " + MAX_ATTEMPT);

			scrollToViewport($(controlBtn).offset().top - 300, 600);

		} else {
			//vesztettel
			$(result).css("display","block");
			$(result).find("h2").html("vesztettél");
			scrollToViewport(0, 400);
		}

	}

	function randomizeResults (array) {

		var temp;

		for (var i = array.length; i; i--) {

			j = Math.floor(Math.random() * i);

			temp = array[i-1];
			array[i-1] = array[j];
			array[j] = temp;

		}

	}

	function countColors (array) {
		var counted = {};

		for (var i = 0; i < array.length; i++) {
			var color = array[i];
			counted[color] = counted[color] ? counted[color]+1 : 1;
		}

		return counted;

	}

	function scrollToViewport (position, duration) {
		$('html, body').animate({ 
			scrollTop: position},
		duration);
	}

};
