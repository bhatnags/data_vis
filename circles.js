var width = 1500;
var height = 1000;
var start = 200;

var gap = 200;
var controllables = ["c1", "c2", "c3", "c4", "c5", "c6"];

var circle_radius = 30;
var rect_width = 80;
var rect_height = 20;

var svg = d3.select("#svgcontainer")
   .append("svg")
   .attr("width", width)
   .attr("height", height);


var group = svg.selectAll("g")
   .data(controllables)
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
      if (i<3){
         return start + i*gap;
      } else {
         return start + (5-i)*gap ;
      }
   })
  
   .attr("r", circle_radius)
   .attr("fill", "red")

group.append("text")
   .attr("x", function(d, i) {
      return start + i * gap;
   })
   .attr("y", function(d, i) {
      if (i<3){
         return start + i*gap;
      } else {
         return start + (5-i)*gap ;
      }
   })
   .attr("stroke", "teal")
   .attr("font-size", "10px")
   .attr("font-family", "sans-serif")
   .text(function(d) {
      return d;
   })
   
group.append("rect")
   .attr("x", function(d, i) {
      return start + i*gap - circle_radius;
   })      
   .attr("y", function(d, i) {
      if (i<3){
         return start + i*gap+3* circle_radius;
      } else {
         return start + (5-i)*gap + 3*circle_radius;
      }
   })
   .attr("width", rect_width)
   .attr("height", rect_height)
   .attr("fill", "red")
   //.attr("transform", "rotate(90)")

group.append("rect")
   .attr("x", function(d, i) {
      if (i<2 || i==3 || i==5){
         return start + i*gap - circle_radius;
      } else {
         return start - 5*circle_radius;
      }
   })      
   .attr("y", function(d, i) {
      if (i<2){
         return start + i*gap-4* circle_radius;
      } else if (i==3 || i==5){
         return start + (5-i)*gap - 4*circle_radius;
      } else if (i==2){ 
         return start + (4-1*i)*gap - 12*circle_radius;
      } else if (i==4){ // 2 and 4
      return start + (4-1*i)*gap - 2*circle_radius;
   }
})
   .attr("width", rect_width)
   .attr("height", rect_height)
   .attr("fill", "red")
   //.attr("transform", "rotate(90)")


   ;
