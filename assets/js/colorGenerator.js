var colorGenerator = function () {

	for (var i = 0; i < 4; i++) {
		
		var randNumber = Math.floor(Math.random() * 8) + 1;
		var colorName = "";

		switch (randNumber) {
			case 1: colorName = "red";
				break;
			case 2: colorName = "white";
				break;
			case 3: colorName = "blue";
				break;
			case 4: colorName = "pink";
				break;
			case 5: colorName = "orange";
				break;
			case 6: colorName = "purple";
				break;
			case 7: colorName = "yellow";
				break;
			case 8: colorName = "green";
				break;
			default: colorName = "white";
		}

		colorArray[i] = colorName;

	}	

	console.log("generalt: " + colorArray);
};
