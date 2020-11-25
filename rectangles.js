//var width = 1500;
//var height = 1000;

var start = 50;
var circle_radius = 30;
var juncn_names = ["c1j1", "c1j2", "c1j3", "c1j4" ,"c2j1","c2j2", 
            "c3j1", "c4j1","c4j2", "c5j1", "c6j1", "c6j2"];
var rect_width = 80;
var rect_height = 20;
var gap = 200;
var gap_plus_rad = gap + 30;

var juncn_group = svg
   .selectAll("g")
   .data(juncn_names)
   .enter()
   .append("g")
   .attr("transform", "translate(60, 60) rotate(-90)")
   //.append("g")
   //.attr("transform", "translate(60, 60) rotate(30)");
   //.attr("transform", "translate(60, 60)");
   //.attr("transform", function(d, i) {
   //   return "translate(0,0)";
   //})

      
juncn_group.append("rect")
   .attr("x", function(d, i) {
      if (i>5){ // 6,7,8,9,10,11
         return  (i-5)*gap-70;
      } else if (i==5){ // 4 or 5
         return  100;
      } /*else if (i==6){
         return  4*gap;
      }*/
   })
   .attr("y", function(d, i) {
      if (i>8){ // 9,10,11
         return (12-i)*gap + 100;
      } else if (i>5) { // 6,7,8
         return  (i-5)*gap+100;
      } else if (i==5){ // 4, 5
         return 100;
         //return (i-4)*gap+100;
      } else if (i==6){ // 4, 5
         return (i-6)*gap;
      }
   })
   .attr("width", rect_width)
   .attr("height", rect_height)
   .attr("fill", "red")
   .attr("transform", "rotate(90)")


juncn_group.append("text")
   .attr("x", function(d, i) {
      return start + i ;
   })
   .attr("y", function(d, i) {
            return start + i;
         })
   .attr("stroke", "teal")
   .attr("font-size", "10px")
   .attr("font-family", "sans-serif")
   .text(function(d) {
      return d;
   });
