var width = 1500;
var height = 1000;
var start = 50;
var circle_radius = 30;
var gap = 100;
var junc_names = ["j1", "j2", "j3", "j4", "j5", "j6"];

var svg = d3.select("#svgcontainer")
   .append("svg")
   .attr("width", width)
   .attr("height", height);


var group = svg.selectAll("g")
   .data(junc_names)
   .enter()
   .append("g")
   //.attr("transform", "translate(60, 60) rotate(30)");
   //.attr("transform", "translate(60, 60)");
   .attr("transform", function(d, i) {
      return "translate(0,0)";
   })

group.append("circle")
   .attr("cx", function(d, i) {
            return start + i*gap;
         })
         
   .attr("cy", function(d, i) {
            return start + i*gap;
         })
  
   .attr("r", circle_radius)
   .attr("fill", "red")

group.append("text")
   .attr("x", function(d, i) {
      return start + i * gap;
   })
   .attr("y", function(d, i) {
            return start + i*gap;
         })
   .attr("stroke", "teal")
   .attr("font-size", "10px")
   .attr("font-family", "sans-serif")
   .text(function(d) {
      return d;
   });
