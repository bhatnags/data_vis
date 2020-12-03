var arrow_path = 'M150,150 C175,110 200,150 190,160 175,140 160,160 150,150';
var arrow_path2 = 'M350,150 C375,110 400,150 390,160 375,140 360,160 350,150';
//var arrow_path = 'M100,150 C200,100 300,150 280,200 200,165 120,200 100,150';


var dataSet = [
	[1, 2, 4, 1, 2, 4, 2, 6, 3, 4],
	[2, 3, 4, 2, 1, 4, 3, 7, 4, 3],
	[3, 4, 1, 3, 4, 4, 4, 8, 5, 2],
	[4, 5, 4, 4, 3, 4, 2, 9, 1, 1],
	[5, 4, 5, 1, 2, 4, 3, 1, 2, 4]
];

var dist = 45;

var colorScale = d3.scale.linear()
	.domain([0, 2.5, 5, 7.5, 10])
	.range(["red", "white", "yellow", "blue", "black"]);

//Draw the SVG element, then the circles
var svg = 
	//d3.select('#circles')
	d3.select('#rectangles')
	.append("svg")
	.attr("width", 400)
	.attr("height", 900)
	.append('g')
	.attr('id', 'foo');


	svg.append('rect')
	.attr({
		"x": 25,
		'y': 45,
		'width': 15,
		'height': 35,
		'id': 'rect1'
	});

	svg.append('rect')
	.attr({
		"x": 50,
		'y': 45,
		'width': 15,
		'height': 35,
		'id': 'rect2'
	});

	svg.append('rect')
	.attr({
		"x": 125, /////// this is 125, to see the demarcagtion between the second and the rest
		'y': 45,
		'width': 15,
		'height': 35,
		'id': 'rect3'
	});
	
	
	svg.append('rect')
	.attr({
		"x": 150,
		'y': 45,
		'width': 15,
		'height': 35,
		'id': 'rect4'
	});

	svg.append('rect')
	.attr({
		"x": 175,
		'y': 45,
		'width': 15,
		'height': 35,
		'id': 'rect5'
	});

	svg.append('rect')
	.attr({
		"x": 200,
		'y': 45,
		'width': 15,
		'height': 35,
		'id': 'rect6'
	});

	svg.append('rect')
	.attr({
		"x": 225,
		'y': 45,
		'width': 15,
		'height': 35,
		'id': 'rect7'
	});

	svg.append('rect')
	.attr({
		"x": 250,
		'y': 45,
		'width': 15,
		'height': 35,
		'id': 'rect8'
	});

	svg.append('rect')
	.attr({
		"x": 275,
		'y': 45,
		'width': 15,
		'height': 35,
		'id': 'rect9'
	});

	svg.append('rect')
	.attr({
		"x": 300,
		'y': 45,
		'width': 15,
		'height': 35,
		'id': 'rect10'
	});



//Initialize the color fill in each circle
	d3.select('#rect1')
	.style('fill', function(d) {
		return colorScale(dataSet[0][0]);
	})
	.transition();

	d3.select('#rect2')
	.style('fill', function(d) {
		return colorScale(dataSet[0][1]);
	})
	.transition();

	d3.select('#rect3')
	.style('fill', function(d) {
		return colorScale(dataSet[0][2]);
	})
	.transition();

	d3.select('#rect4')
	.style('fill', function(d) {
		return colorScale(dataSet[0][3]);
	})
	.transition();

	d3.select('#rect5')
	.style('fill', function(d) {
		return colorScale(dataSet[0][4]);
	})
	.transition();

	d3.select('#rect6')
	.style('fill', function(d) {
		return colorScale(dataSet[0][5]);
	})
	.transition();

	d3.select('#rect7')
	.style('fill', function(d) {
		return colorScale(dataSet[0][6]);
	})
	.transition();

	d3.select('#rect8')
	.style('fill', function(d) {
		return colorScale(dataSet[0][7]);
	})
	.transition();

	d3.select('#rect9')
	.style('fill', function(d) {
		return colorScale(dataSet[0][8]);
	})
	.transition();

	d3.select('#rect10')
	.style('fill', function(d) {
		return colorScale(dataSet[0][9]);
	})
	.transition();

//The function which updates the fill of the circles to match a new time point 			
function update(timePoint) {
	d3.select('#rect1')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][0]);
		});
		d3.select('#rect2')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][1]);
		});
		d3.select('#rect3')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][2]);
		});
		d3.select('#rect4')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][3]);
		});
		d3.select('#rect5')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][4]);
		});
		d3.select('#rect6')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][5]);
		});
		d3.select('#rect7')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][6]);
		});
		d3.select('#rect8')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][7]);
		});
		d3.select('#rect9')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][8]);
		});
		d3.select('#rect10')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][9]);
		});
};

//Run the update function when the slider is changed
d3.select('#rangeSlider').on('input', function() {
	update(this.value);
});

var myTimer;
d3.select("#start").on("click", function() {
 clearInterval (myTimer);
	myTimer = setInterval (function() {
    	var b= d3.select("#rangeSlider");
      var t = (+b.property("value") + 1) % (+b.property("max") + 1);
      if (t == 0) { t = +b.property("min"); }
      b.property("value", t);
      update (t);
    }, 1000);
});

d3.select("#stop").on("click", function() {
	clearInterval (myTimer);
});
