/*
change dataset from data.json
*/
var svg_width = 2000;
var svg_height = 1200;

// dataset to change the colorscales of the arrows
var dataSet = [
	[1, 2, 10, 1, 2, 1, 2, 10, 1, 2, 1, 2, 6, 3, 9, 6, 3, 4, 2, 1, 2, 1, 6, 6],
	[2, 7, 4, 2, 1, 5, 3, 7, 2, 1, 5, 3, 7, 4, 3, 7, 4, 3, 4, 3, 5, 10, 7, 10],
	[3, 4, 1, 3, 4, 4, 4, 8, 5, 2, 8, 4, 8, 5, 2, 8, 5, 2, 5, 10, 4, 9, 2, 10],
	[4, 5, 4, 4, 3, 10, 4, 3, 10, 2, 9, 1, 1, 7, 2, 9, 1, 1, 7, 6, 2, 5, 8, 4],
	[9, 4, 5, 1, 4, 5, 1, 2, 4, 3, 1, 2, 4, 10, 9, 1, 2, 4, 10, 9, 1, 3, 6, 3],
	[1, 2, 10, 1, 2, 1, 2, 10, 1, 2, 1, 2, 2, 1, 2, 6, 3, 9, 2, 1, 2, 7, 8, 2],
	[1, 2, 10, 1, 2, 1, 2, 10, 1, 2, 1, 2, 6, 3, 2, 6, 3, 9, 2, 1, 2, 7, 8, 5],
	[2, 7, 4, 2, 1, 5, 3, 7, 4, 3, 4, 4, 3, 4, 3, 1, 2, 6, 3, 9, 5, 10, 7, 10],
	[3, 4, 1, 3, 4, 4, 4, 8, 5, 2, 5, 10, 2, 5, 1, 2, 6, 3, 9, 10, 4, 9, 2, 5],
	[4, 5, 4, 4, 3, 10, 2, 1, 2, 10, 1, 2, 9, 1, 1, 7, 6,  1, 7, 6, 2, 5, 8, 2],
	[9, 4, 5, 1, 2, 4, 3, 1, 2, 4, 10, 9, 4, 3, 9, 2, 1, 2, 10, 9, 1, 3, 6, 10],
	[1, 2, 10, 1, 2, 1, 2, 6, 3, 9, 2, 1, 9, 3, 9, 2, 1, 2, 2, 1, 2, 7, 8, 1],
	[1, 2, 10, 1, 2, 1, 2, 6, 3, 9, 2, 1, 2, 3, 9, 2, 1, 2, 2, 1, 2, 7, 8, 2],
	[2, 7, 4, 2, 1, 5, 3, 7, 4, 3, 3, 9, 2, 1, 2, 4, 3, 3, 4, 3, 5, 10, 7, 3],
	[3, 4, 1, 3, 4, 4, 4, 8, 5, 2, 3, 9, 2, 1, 2, 5, 10, 4, 9, 10, 4, 9, 2, 4],
	[4, 5, 4, 4, 3, 4, 4, 3, 10, 2, 3, 9, 2, 1, 2, 9, 1, 1, 7, 6, 2, 5, 8, 5],
	[9, 4, 5, 1, 2, 4, 1, 2, 4, 3, 3, 9, 2, 1, 2, 1, 2, 4, 10, 9, 1, 3, 6, 7],
	[1, 2, 10, 1, 2, 1, 2, 6, 1, 2,3, 9, 2, 1, 2,  6, 3, 9, 2, 1, 2, 7, 8, 9],
	[1, 2, 10, 1, 2, 1, 2, 6, 3, 3, 9, 2, 1, 2, 9, 6, 3, 9, 2, 1, 2, 7, 8, 7],
	[2, 7, 4, 2, 1, 5, 3, 1, 5, 3, 3, 9, 2, 1, 2, 7, 4, 3, 4, 3, 5, 10, 7, 10]
];

var colorScale = d3.scale.linear()
	.domain([0, 5, 10])
	.range(["white", "red", "black"]);//, , "yellow", "blue", "black"]);

// data to draw the triangles in the arrows
var scaleX = d3.scale.linear().domain([0,300]).range([0,600]);
var scaleY = d3.scale.linear().domain([0,500]).range([500,0]);
var poly = [{"x":15, "y":30}, {"x":15,"y":10}, {"x":25,"y":30}];
var arrow_data = ["F", "M", "N", "D", "Z", "C", // first controllable
				"A", "B", "Y", "X",
				"Z", "B",
				"A", "W", "X",
				"Z", "Y", "B",
				"A", "Y",
				"W", "R",// SILVE
				"S", "V", // SOMER
				"C", // SMITH
				"L", // ABSOU	
				"V", "Q", //ABNOR
				"D", "C", // OLDWA
				"R", "X", // BROAD
				"Z", "T" // WAKEF
			];

var dist = 45;
var start = 200; // controllables start and the arrows start
var y_start = 100;

/* links varibales */
var arrow_gap = 20;
var rotate_down = -135;
var rotate_up = 45;
var width_link = 15;
var height_link = 60;


/* controllables variables */
var gap = 300;
var text_gap = 15;
var controllables = ["A", "B", "C", "D", "E", "F"];
var lower_juncs = ["lj1", "lj2", "lj3", "lj4", "lj5", "lj6"];
var remaining_juncs = ["rj1", "rj2", "rj3", "rj4", "rj5", "rj6"];

var circle_radius = 30;
var rect_width = 80;
var rect_height = 20;




//Start with the SVG element

// variables for sp... sliderplaybutton
var sp = d3.selectAll('#svgcontainer')
	.append("svg")
	.attr("width", svg_width)
    .attr("height", svg_height)
	.attr('id', 'foo');

sp//.selectAll("g")
.data([arrow_data]).enter().append('g').selectAll('g');

var triangle_group = sp.selectAll("g")
	.data([poly])
	.enter()
	.append("g")
	.attr("transform", function(d, i) {
		return "translate(600,0)";
	})

var circle_group = triangle_group.selectAll("g")
	.data(controllables)
	.enter()
	.append("g")
	//.attr("transform", "translate(60, 60) rotate(30)");
	//.attr("transform", "translate(60, 60)");
	.attr("transform", function(d, i) {
	   return "translate(-600,0)"; // to nullify the translate 600 done on triangle group
	})
 
var rect_group = circle_group.selectAll("g")
	.data(lower_juncs)
	.enter()
	.append("g")
	//.attr("transform", "translate(60, 60) rotate(30)");
	//.attr("transform", "translate(60, 60)");
	.attr("transform", function(d, i) {
	   return "translate(0,0)";
	})
 
 
var rect_group2 = rect_group.selectAll("g")
	.data(remaining_juncs)
	.enter()
	.append("g")
	//.attr("transform", "translate(60, 60) rotate(30)");
	//.attr("transform", "translate(60, 60)");
	.attr("transform", function(d, i) {
	   return "translate(0,0)";
	})
 






// first arrow
var num = 1;
sp.append('rect')
	.attr({
		"x": start,// + arrow_gap, //600
		'y': y_start - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect'+num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(-702, 500) rotate(${rotate_down})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect1.x.baseVal.value), //600
		'y': parseInt(rect1.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });




// second arrow
num = 2;
sp.append('rect')
	.attr({
		"x": start - arrow_gap, //600
		'y': y_start - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect' + num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(-100, -285) rotate(${rotate_up})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect2.x.baseVal.value), //600
		'y': parseInt(rect2.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


	
	
// third arrow
num = 3;
sp.append('rect')
	.attr({
		"x": start- 2*arrow_gap, //600
		'y': y_start*2 + 2.5*arrow_gap, //520
		'width': width_link,
		'height': height_link*1.5,
		'id': 'rect' + num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(-745, 705) rotate(${rotate_down})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect3.x.baseVal.value), //600
		'y': parseInt(rect3.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


	
// fourth arrow
num = 4;
sp.append('rect')
	.attr({
		"x": start - arrow_gap, //600
		'y': y_start*2 +3*arrow_gap, //520
		'width': width_link,
		'height': height_link*1.5,
		'id': 'rect' + num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(-100, -105) rotate(${rotate_up})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect4.x.baseVal.value), //600
		'y': parseInt(rect4.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


	
// fifth arrow
num = 5;
sp.append('rect')
	.attr({
		"x": start - 2*arrow_gap, //600
		'y': y_start + arrow_gap, //520
		'width': width_link,
		'height': height_link*2-width_link,
		'id': 'rect' + num,
		'transform': `translate(-120,137)rotate(-45)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(-555, -375) rotate(0)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect5.x.baseVal.value)- 3*arrow_gap, //600
		'y': parseInt(rect5.y.baseVal.value), //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });

	
// sixth arrow
num = 6;
sp.append('rect')
	.attr({
		"x": start - 2*arrow_gap, //600
		'y': y_start + arrow_gap, //520
		'width': width_link,
		'height': height_link*1.3,//-width_link,
		'id': 'rect' + num,
		'transform': `translate(120,10)rotate(${rotate_up})`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(25, 300) rotate(105)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect6.x.baseVal.value)- 3*arrow_gap, //600
		'y': parseInt(rect6.y.baseVal.value) + 7*arrow_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


	
// between c1 and c2 arrow
num = 7; // A
sp.append('rect')
	.attr({
		"x": start - 2*arrow_gap -6, //600
		'y': y_start + arrow_gap, //520
		'width': width_link,
		'height': height_link*5,//-width_link,
		'id': 'rect' + num,
		'transform': `translate(20,290)rotate(-45)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(-420, -220) rotate(0)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect7.x.baseVal.value)+4*arrow_gap, //600
		'y': parseInt(rect7.y.baseVal.value)+8*arrow_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


num = 8; // B
sp.append('rect')
	.attr({
		"x": start - arrow_gap, //600
		'y': y_start + 2*arrow_gap, //520
		'width': width_link,
		'height': height_link*6-2*width_link,
		'id': 'rect' + num,
		'transform': `translate(-15,260)rotate(-45)`,
	});
sp.append('rect')
	.attr({
		"x": start - arrow_gap, //600
		'y': y_start + arrow_gap, //520
		'width': width_link-4,
		'height': width_link+4,
		'id': 'rect' + num + '_2',
		'transform': `translate(58,62)rotate(10)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(95, 260) rotate(100)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect8.x.baseVal.value)+4*arrow_gap, //600
		'y': parseInt(rect8.y.baseVal.value)+7*arrow_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });
	
	
num = 9; // Y
sp.append('rect')
	.attr({
		"x": start - arrow_gap, //600
		'y': y_start + arrow_gap, //520
		'width': width_link,
		'height': height_link*6-2*width_link,
		'id': 'rect' + num,
		'transform': `translate(25,270)rotate(-45)`,
	});
sp.append('rect')
	.attr({
		"x": start - arrow_gap, //600
		'y': y_start + arrow_gap, //520
		'width': width_link-4,
		'height': width_link+4,
		'id': 'rect' + num + '_2',
		'transform': `translate(315,300)rotate(10)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(-605, 505) rotate(-90)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect9.x.baseVal.value)+6*arrow_gap, //600
		'y': parseInt(rect9.y.baseVal.value)+8*arrow_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });
	
		
num = 10; // X
sp.append('rect')
	.attr({
		"x": start - arrow_gap, //600
		'y': y_start + arrow_gap, //520
		'width': width_link,
		'height': height_link*6-2*width_link,
		'id': 'rect' + num,
		'transform': `translate(20,240)rotate(-45)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(-90, 905) rotate(180)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect10.x.baseVal.value)+7*arrow_gap, //600
		'y': parseInt(rect10.y.baseVal.value)+8*arrow_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });
	
		
// between c2 and c3 arrow
num = 11; // Z
sp.append('rect')
	.attr({
		"x": -start,// - 4*arrow_gap, //600
		'y': y_start*6 - arrow_gap, //520
		'width': width_link,
		'height': height_link*5,//-width_link,
		'id': 'rect' + num,
		'transform': `translate(260,-10)rotate(-45)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(-105, 60) rotate(0)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": -parseInt(rect11.x.baseVal.value)*2+8*arrow_gap, //600
		'y': parseInt(rect11.y.baseVal.value), //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });

num = 12; // B
sp.append('rect')
	.attr({
		"x": start,
		'y': y_start*9 - 3*arrow_gap, 
		'width': width_link,
		'height': height_link*5,
		'id': 'rect' + num,
		'transform': `translate(-190,75)rotate(-45)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(200, 1210) rotate(180)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect12.x.baseVal.value)+start*2-arrow_gap, //600
		'y': parseInt(rect12.y.baseVal.value)-start-4*arrow_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });
		

	






// between c3 and c4
num = 13; // A
sp.append('rect')
	.attr({
		"x": start,// + arrow_gap,
		'y': y_start + arrow_gap, 
		'width': width_link,
		'height': height_link*3,
		'id': 'rect' + num,
		'transform': `translate(720,1030)rotate(-90)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(-125, 510) rotate(-45)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect13.x.baseVal.value)*4.5,// + arrow_gap, 
		'y': parseInt(rect13.y.baseVal.value)*7 - arrow_gap, 
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


num = 14; // W
sp.append('rect')
	.attr({
		"x": start,// + arrow_gap,
		'y': y_start + arrow_gap, 
		'width': width_link,
		'height': height_link*3.2,
		'id': 'rect' + num,
		'transform': `translate(735,1010)rotate(-90)`,
	});

sp.append('rect')
	.attr({
		"x": start - arrow_gap, //600
		'y': y_start + arrow_gap, //520
		'width': width_link-4,
		'height': width_link+4,
		'id': 'rect' + num + '_2',
		'transform': `translate(825,845)rotate(-45)`,
	});


triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(140, 1175) rotate(${rotate_down})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect14.x.baseVal.value)*4.5, //600
		'y': parseInt(rect14.y.baseVal.value)*7 - 2*arrow_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });
	
num = 15; // X
sp.append('rect')
	.attr({
		"x": start,// + arrow_gap,
		'y': y_start + arrow_gap, 
		'width': width_link,
		'height': height_link*3,
		'id': 'rect' + num,
		'transform': `translate(735,990)rotate(-90)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(800, 1095) rotate(135)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect15.x.baseVal.value)*4.5, //600
		'y': parseInt(rect15.y.baseVal.value)*6.5, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });

		
// between c4 and c5
num = 16; // Z
sp.append('rect')
	.attr({
		"x": start*7 - arrow_gap,
		'y': -6*y_start + arrow_gap, 
		'width': width_link,
		'height': height_link*5,
		'id': 'rect' + num,
		'transform': `translate(0,0)rotate(45)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(100, 820) rotate(-90)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect16.x.baseVal.value) - 9*arrow_gap, 
		'y': -parseInt(rect16.y.baseVal.value) + start - 1*arrow_gap, 
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });

num = 17; // Y
sp.append('rect')
	.attr({
		"x": start*7- 2*arrow_gap,
		'y': -6*y_start+ arrow_gap, 
		'width': width_link,
		'height': height_link*5,// + arrow_gap,
		'id': 'rect' + num,
		'transform': `translate(-15,5)rotate(45)`,
	});

sp.append('rect')
	.attr({
		"x": start*2,  
		'y': y_start*6, 
		'width': width_link,
		'height': width_link+4,
		'id': 'rect' + num + '_2',
		'transform': `translate(475,1065)rotate(-80)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(590, 295) rotate(10)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect17.x.baseVal.value) - start + 1*arrow_gap, 
		'y': -parseInt(rect17.y.baseVal.value) + start- 2*arrow_gap, 
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });

num = 18; // B
sp.append('rect')
	.attr({
		"x": start*7 - 4*arrow_gap,
		'y': -6*y_start+ arrow_gap, 
		'width': width_link,
		'height': height_link*5,
		'id': 'rect' + num,
		'transform': `translate(0,0)rotate(45)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(1225, 490) rotate(90)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect18.x.baseVal.value) - start + 2*arrow_gap, 
		'y': -parseInt(rect18.y.baseVal.value) +start - 3*arrow_gap, 
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });
	
// between c5 and c6
num = 19; // A
sp.append('rect')
	.attr({
		"x": start*6 + 8*arrow_gap,
		'y': -10*y_start - arrow_gap, 
		'width': width_link,
		'height': height_link*5,
		'id': 'rect' + num,
		'transform': `translate(-10,10)rotate(45)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(387, 507) rotate(-90)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect19.x.baseVal.value) + start,// - 9*arrow_gap, 
		'y': -parseInt(rect19.y.baseVal.value) - 3*start - 2*arrow_gap, 
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });

num = 20; // Y
sp.append('rect')
	.attr({
		"x": start*6 + 7*arrow_gap,
		'y': -10*y_start - arrow_gap, 
		'width': width_link,
		'height': height_link*5,
		'id': 'rect' + num,
		'transform': `translate(-10,10)rotate(45)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(1540, 205) rotate(90)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect20.x.baseVal.value) + start - arrow_gap, 
		'y': -(parseInt(rect20.y.baseVal.value)) -3*start- 2*arrow_gap, 
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });
	



// SILVE
var num = 21;
sp.append('rect')
	.attr({
		"x": start*2.5 + arrow_gap, //600
		'y': y_start*4 - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect'+num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(-382, 800) rotate(${rotate_down})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect21.x.baseVal.value), //600
		'y': parseInt(rect21.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


num = 22; // R
sp.append('rect')
	.attr({
		"x": start*2.5, //600
		'y': y_start*4 - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect' + num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(220, 15) rotate(${rotate_up})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect22.x.baseVal.value), //600
		'y': parseInt(rect22.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


// SOMER
var num = 23;
sp.append('rect')
	.attr({
		"x": start*2.5 + arrow_gap, //600
		'y': y_start*6 - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect'+num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(-382, 1000) rotate(${rotate_down})`)
	.attr('id', "a"+num)
	; 


sp.append("text")
	.attr({
		"x": parseInt(rect23.x.baseVal.value), //600
		'y': parseInt(rect23.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


num = 24;
sp.append('rect')
	.attr({
		"x": start*2.5 - arrow_gap, //600
		'y': y_start*6 - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect' + num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(200, 215) rotate(${rotate_up})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect24.x.baseVal.value), //600
		'y': parseInt(rect24.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


// SMITH
var num = 25;
sp.append('rect')
	.attr({
		"x": start*4,// - arrow_gap, //600
		'y': y_start*9 - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect' + num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(520, 515) rotate(${rotate_up})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect25.x.baseVal.value), //600
		'y': parseInt(rect25.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });	

	
//ABSOU
num = 26;
sp.append('rect')
	.attr({
		"x": start*5 + 4*arrow_gap, //600
		'y': y_start*7 - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect' + num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(800, 315) rotate(${rotate_up})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect26.x.baseVal.value), //600
		'y': parseInt(rect26.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });
	

//ABNOR
var num = 27;
sp.append('rect')
	.attr({
		"x": start*5 + 6*arrow_gap, //600
		'y': y_start*9 - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect'+num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(840, 515) rotate(${rotate_up})`)
	.attr('id', "a"+num)
	; 


sp.append("text")
	.attr({
		"x": parseInt(rect27.x.baseVal.value), //600
		'y': parseInt(rect27.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


num = 28;
sp.append('rect')
	.attr({
		"x": start*5 + 4*arrow_gap, //600
		'y': y_start*9 - 2*arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect' + num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(177, 1285) rotate(${rotate_down})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect28.x.baseVal.value), //600
		'y': parseInt(rect28.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });




// OLDWA

num = 29; // D
sp.append('rect')
	.attr({
		"x": start*7- arrow_gap, //600
		'y': y_start*4 - 3*arrow_gap, //520
		'width': width_link,
		'height': height_link*2,
		'id': 'rect' + num,
	});
sp.append('rect')
	.attr({
		"x": start - arrow_gap, //600
		'y': y_start + arrow_gap, //520
		'width': width_link-4,
		'height': width_link+4,
		'id': 'rect' + num + '_2',
		'transform': `translate(1525,269)rotate(90)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(1275, 415) rotate(90)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect29.x.baseVal.value), //600
		'y': parseInt(rect29.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });

num = 30;
sp.append('rect')
	.attr({
		"x": start*7 - 2*arrow_gap, //600
		'y': y_start*4 - 3*arrow_gap, //520
		'width': width_link,
		'height': height_link*2.2,
		'id': 'rect' + num,
	});
sp.append('rect')
	.attr({
		"x": start - arrow_gap, //600
		'y': y_start + arrow_gap, //520
		'width': width_link-4,
		'height': width_link+4,
		'id': 'rect' + num + '_2',
		'transform': `translate(1325,250)rotate(45)`,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(280, 520) rotate(-90)`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect30.x.baseVal.value), //600
		'y': parseInt(rect30.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });






// BROAD
var num = 31;
sp.append('rect')
	.attr({
		"x": start*9- 6*arrow_gap, //600
		'y': y_start - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect'+num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(818, 505) rotate(${rotate_down})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect31.x.baseVal.value), //600
		'y': parseInt(rect31.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


num = 32;
sp.append('rect')
	.attr({
		"x": start*9 - 4*arrow_gap, //600
		'y': y_start - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect' + num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(1400, -280) rotate(${rotate_up})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect32.x.baseVal.value), //600
		'y': parseInt(rect32.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });



// WAKEF
var num = 33;
sp.append('rect')
	.attr({
		"x": start*9- 6*arrow_gap, //600
		'y': y_start*3 - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect'+num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(818, 705) rotate(${rotate_down})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect33.x.baseVal.value), //600
		'y': parseInt(rect33.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });


num = 34;
sp.append('rect')
	.attr({
		"x": start*9 - 4*arrow_gap, //600
		'y': y_start*3 - arrow_gap, //520
		'width': width_link,
		'height': height_link,
		'id': 'rect' + num,
	});

triangle_group.append("polygon")
	.attr("points",function(d) { 
		return d.map(function(d) { 
		return [scaleX(d.x),scaleY(d.y)].join(","); 
		}).join(" ");
		})
	.attr("stroke-width",2)
	.attr("transform", `translate(1400, -80) rotate(${rotate_up})`)
	.attr('id', "a"+num)
	; 

sp.append("text")
	.attr({
		"x": parseInt(rect34.x.baseVal.value), //600
		'y': parseInt(rect34.y.baseVal.value) + text_gap, //520
	})
	.attr("stroke", "teal")
	.attr("font-size", "10px")
	.attr("font-family", "sans-serif")
	.text(function(d){return d[num-1]; });






//Initialize the color fill in each circle
	d3.selectAll('#rect1, #a1')
	.style('fill', function(d) {
		return colorScale(dataSet[0][0]);
	})
	.transition();
	d3.selectAll('#rect2, #a2')
	.style('fill', function(d) {
		return colorScale(dataSet[0][1]);
	})
	.transition();

	d3.selectAll('#rect3, #a3')
	.style('fill', function(d) {
		return colorScale(dataSet[0][2]);
	})
	.transition();

	d3.selectAll('#rect4, #a4')
	.style('fill', function(d) {
		return colorScale(dataSet[0][3]);
	})
	.transition();

	d3.selectAll('#rect5, #a5')
	.style('fill', function(d) {
		return colorScale(dataSet[0][4]);
	})
	.transition();

	d3.selectAll('#rect6, #a6')
	.style('fill', function(d) {
		return colorScale(dataSet[0][5]);
	})
	.transition();

	d3.selectAll('#rect7, #a7')
	.style('fill', function(d) {
		return colorScale(dataSet[0][6]);
	})
	.transition();

	d3.selectAll('#rect8, #a8, #rect8_2')
	.style('fill', function(d) {
		return colorScale(dataSet[0][7]);
	})
	.transition();

	d3.selectAll('#rect9, #a9, #rect9_2')
	.style('fill', function(d) {
		return colorScale(dataSet[0][8]);
	})
	.transition();

	d3.selectAll('#rect10, #a10')
	.style('fill', function(d) {
		return colorScale(dataSet[0][9]);
	})
	.transition();
	d3.selectAll('#rect11, #a11')
	.style('fill', function(d) {
		return colorScale(dataSet[0][10]);
	})
	.transition();
	d3.selectAll('#rect12, #a12')
	.style('fill', function(d) {
		return colorScale(dataSet[0][11]);
	})
	.transition();
	d3.selectAll('#rect13, #a13')
	.style('fill', function(d) {
		return colorScale(dataSet[0][12]);
	})
	.transition();
	d3.selectAll('#rect14, #a14, #rect14_2')
	.style('fill', function(d) {
		return colorScale(dataSet[0][13]);
	})
	.transition();
	d3.selectAll('#rect15, #a15')
	.style('fill', function(d) {
		return colorScale(dataSet[0][14]);
	})
	.transition();
	d3.selectAll('#rect16, #a16')
	.style('fill', function(d) {
		return colorScale(dataSet[0][15]);
	})
	.transition();
	d3.selectAll('#rect17, #a17, #rect17_2')
	.style('fill', function(d) {
		return colorScale(dataSet[0][16]);
	})
	.transition();
	d3.selectAll('#rect18, #a18')
	.style('fill', function(d) {
		return colorScale(dataSet[0][17]);
	})
	.transition();
	d3.selectAll('#rect19, #a19')
	.style('fill', function(d) {
		return colorScale(dataSet[0][18]);
	})
	.transition();
	d3.selectAll('#rect20, #a20')
	.style('fill', function(d) {
		return colorScale(dataSet[0][19]);
	})
	.transition();
	d3.selectAll('#rect21, #a21')
	.style('fill', function(d) {
		return colorScale(dataSet[0][20]);
	})
	.transition();
	d3.selectAll('#rect22, #a22')
	.style('fill', function(d) {
		return colorScale(dataSet[0][21]);
	})
	.transition();
	d3.selectAll('#rect23, #a23')
	.style('fill', function(d) {
		return colorScale(dataSet[0][22]);
	})
	.transition();
	d3.selectAll('#rect24, #a24')
	.style('fill', function(d) {
		return colorScale(dataSet[0][23]);
	})
	.transition();
	d3.selectAll('#rect25, #a25')
	.style('fill', function(d) {
		return colorScale(dataSet[0][24]);
	})
	.transition();
	d3.selectAll('#rect26, #a26')
	.style('fill', function(d) {
		return colorScale(dataSet[0][25]);
	})
	.transition();
	d3.selectAll('#rect27, #a27')
	.style('fill', function(d) {
		return colorScale(dataSet[0][26]);
	})
	.transition();
	d3.selectAll('#rect28, #a28')
	.style('fill', function(d) {
		return colorScale(dataSet[0][27]);
	})
	.transition();
	d3.selectAll('#rect29, #rect29_2, #a29')
	.style('fill', function(d) {
		return colorScale(dataSet[0][28]);
	})
	.transition();
	d3.selectAll('#rect30, #rect30_2, #a30')
	.style('fill', function(d) {
		return colorScale(dataSet[0][29]);
	})
	.transition();
	d3.selectAll('#rect31, #a31')
	.style('fill', function(d) {
		return colorScale(dataSet[0][30]);
	})
	.transition();
	d3.selectAll('#rect32, #a32')
	.style('fill', function(d) {
		return colorScale(dataSet[0][31]);
	})
	d3.selectAll('#rect33, #a33')
	.style('fill', function(d) {
		return colorScale(dataSet[0][32]);
	})
	.transition();
	d3.selectAll('#rect34, #a34')
	.style('fill', function(d) {
		return colorScale(dataSet[0][33]);
	})







//The function which updates the fill of the circles to match a new time point 			
function update(timePoint) {
	d3.selectAll('#rect1, #a1')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][0]);
		});
		d3.selectAll('#rect2, #a2')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][1]);
		});
		
		d3.selectAll('#rect3, #a3')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][2]);
		});
		d3.selectAll('#rect4, #a4')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][3]);
		});
		d3.selectAll('#rect5, #a5')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][4]);
		});
		d3.selectAll('#rect6, #a6')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][5]);
		});
		d3.selectAll('#rect7, #a7')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][6]);
		});
		d3.selectAll('#rect8, #a8, #rect8_2')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][7]);
		});
		d3.selectAll('#rect9, #a9, #rect9_2')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][8]);
		});
		d3.selectAll('#rect10, #a10')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][9]);
		});
		d3.selectAll('#rect11, #a11')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][10]);
		});
		d3.selectAll('#rect12, #a12')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][11]);
		});
		d3.selectAll('#rect13, #a13')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][12]);
		});
		d3.selectAll('#rect14, #a14, #rect14_2')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][13]);
		});
		d3.selectAll('#rect15, #a15')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][14]);
		});
		d3.selectAll('#rect16, #a16')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][15]);
		});
		d3.selectAll('#rect17, #a17, #rect17_2')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][16]);
		});
		d3.selectAll('#rect18, #a18')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][17]);
		});
		d3.selectAll('#rect19, #a19')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][18]);
		});
		d3.selectAll('#rect20, #a20')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][19]);
		});
		d3.selectAll('#rect21, #a21')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][20]);
		});
		d3.selectAll('#rect22, #a22')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][21]);
		});
		d3.selectAll('#rect23, #a23')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][22]);
		});
		d3.selectAll('#rect24, #a24')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][23]);
		});
		d3.selectAll('#rect25, #a25')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][24]);
		});
		d3.selectAll('#rect26, #a26')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][25]);
		});
		d3.selectAll('#rect27, #a27')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][26]);
		});
		d3.selectAll('#rect28, #a28')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][27]);
		});
		d3.selectAll('#rect29, #rect29_2, #a29')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][28]);
		});
		d3.selectAll('#rect30, #rect30_2, #a30')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][29]);
		});
		d3.selectAll('#rect31, #a31')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][30]);
		});
		d3.selectAll('#rect32, #a32')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][31]);
		});
		d3.selectAll('#rect33, #a33')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][32]);
		});
		d3.selectAll('#rect34, #a34')
		.transition().duration(500)
		.style('fill', function(d) {
			return colorScale(dataSet[timePoint][33]);
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







/*

		CONTROLLABLES

*/





circle_group.append("circle")
   .attr("cx", function(d, i) {
         return start + i*gap;
     })
         
   .attr("cy", function(d, i) {
      if (i<3){
         return start + i*gap;
      } else {
         return start + (5-i)*gap ;
      }
   })
  
   .attr("r", circle_radius*2)
   .attr("fill", "yellow")


circle_group.append("text")
   .attr("x", function(d, i) {
      return start + i * gap - 2*arrow_gap;
   })
   .attr("y", function(d, i) {
      if (i<3){
         return start + i*gap;
      } else {
         return start + (5-i)*gap ;
      }
   })
   .attr("stroke", "teal")
   .attr("font-size", "18px")
   .attr("font-family", "sans-serif")
   .text(function(d) {
      return d;
   })

rect_group.append("rect")
   .attr("x", function(d, i) {
	   if(i==0){
		return start + i*gap - 3*circle_radius;
	   }else if (i==4){
		return start + i*gap - 2*circle_radius+text_gap;
	   } else {
		return start + i*gap - circle_radius;
	   }
   })      
   .attr("y", function(d, i) {
	if (i<3){// j1,j2.j3
		return start + i*gap+4* circle_radius + arrow_gap;
		} else if (i==4){ // oldwa
		return start + (5-i)*gap - 6*circle_radius;
		} else {//j4,j6
			return start + (5-i)*gap + 4*circle_radius + arrow_gap;
		}
   })
   .attr("width", rect_width)
   .attr("height", rect_height)
   .attr("fill", "orange")
   //.attr("transform", "rotate(90)")


rect_group.append("text")
   //.data(lower_juncs).enter().append("text")
	.attr("x", function(d, i) {
		if(i==0){
			return start + i*gap - 3*circle_radius+ text_gap;
		   }else {
			return start + i*gap - circle_radius+ text_gap;
	
		   }
		})      
	.attr("y", function(d, i) {
		if (i<3){
		return start + i*gap+4* circle_radius + text_gap + arrow_gap;
		} else if (i==4){ // oldwa
		return start + (5-i)*gap -6*circle_radius + text_gap;// + arrow_gap;
		} else {
			return start + (5-i)*gap + 4*circle_radius + text_gap + arrow_gap;
		}
	})
   .attr("stroke", "teal")
   .attr("font-size", "10px")
   .attr("font-family", "sans-serif")
   .text(function(d) {
      return d;
   })
   

rect_group2.append("rect")
   .attr("x", function(d, i) {
      if (i<2 || i==3 || i==5){
         return start + i*gap - circle_radius;
      } else {
         return start - 6*circle_radius;
      }
   })      
   .attr("y", function(d, i) {
      if (i<2){
         return start + i*gap-5* circle_radius;// j7, j8
      } else if (i==3 || i==5){
         return start + (5-i)*gap - 5*circle_radius; // j10, j12
      } else if (i==2){ // this is j9
         return start + (4-1*i)*gap - 18*circle_radius;
      } else if (i==4){ 
      return start + (4-1*i)*gap - 5*circle_radius; // j11
   }
})
   .attr("width", rect_width)
   .attr("height", rect_height)
   .attr("fill", "orange")
   //.attr("transform", "rotate(90)")
   ;


rect_group2.append("text")
.attr("x", function(d, i) {
	if (i<2 || i==3 || i==5){
	   return start + i*gap - circle_radius+ text_gap;
	} else {
	   return start - 6*circle_radius+ text_gap;
	}
 })      
 .attr("y", function(d, i) {
	if (i<2){
	   return start + i*gap-5* circle_radius + text_gap;
	} else if (i==3 || i==5){
	   return start + (5-i)*gap - 5*circle_radius + text_gap;
	} else if (i==2){ // this is j9
	   return start + (4-1*i)*gap - 18*circle_radius + text_gap;
	} else if (i==4){ //  this is j11
	return start + (4-1*i)*gap - 5*circle_radius + text_gap;
 }
})
.attr("stroke", "teal")
.attr("font-size", "10px")
.attr("font-family", "sans-serif")
.text(function(d) {
   return d;
})

