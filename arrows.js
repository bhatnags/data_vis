this is arrows.js


/*var w = 100;
var h = 100;
var arrow_group = d3.select("#chart")
   .append("svg")
   .attr("width", w)
   .attr("height", h),//;
*/


var data = [0 19, 1 9, 2 0, 3 48, 4 79, 5 90, 6 1];


var arrow_group = svg.append("g")
   //.attr("transform", "translate(60, 60) rotate(30)");
   .attr("transform", "translate(60, 60) rotate(-40)")/*,
   scaleX = d3.scale.linear()
           .domain([-30,30])
           .range([0,600]),
   scaleY = d3.scale.linear()
           .domain([0,50])
           .range([500,0]),
   poly = [{"x":5, "y":30},
           {"x":15,"y":10},
           {"x":25,"y":30}]*/;



/*arrow_group.selectAll("polygon")
   .data([poly])
   .enter()
   .append("polygon")
   .attr("points", function(d){
      return d.map(function(d) {
         return [scaleX(d.x), scaleY(d.y)].join(",");
      }).join(" ");
   })
   .attr("stroke", "blue")
   .attr("fill", "black")
   .attr("stroke-width", 2)
*/
var triangle = arrow_group.append("polygon")
   .attr("points", "05,30 15,10 25,30")
   .attr("fill", "black")
   .attr("stroke", "blue")
   .attr("stroke-width","2")


var rect = arrow_group.append("rect")
   .attr("x", 30)
   .attr("y", -25)
   .attr("width", 60)
   .attr("height", 20)
   .attr("fill", "green")
   .attr("transform", "rotate(90)")
