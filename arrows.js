var arrow_group = svg.append("g")
   .attr("transform", "translate(600, 0) rotate(0)"),
   scaleX = d3.scaleLinear()
      .domain([0,300])
      .range([0,600]),
   scaleY = d3.scaleLinear()
      .domain([0,500])
      .range([500,0]),
   poly = [{"x":15, "y":30}, {"x":15,"y":10}, {"x":25,"y":30}],
   rect_coord1 = [{"x":140, "y":-35}],
   rect_coord2= [{"x":30, "y":-25}]
   ;

   /*************************************************************/
   /************************ FIRST JUNC *******************************/
   /*************************************************************/


   /************************ DOWN ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-680, 520) rotate(-135)");
  
   /************************ UP ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-90, -250) rotate(45)");  
   //.attr("transform", function(d){
   //    return 'translate(' + -90 + ',' + -250 + ') rotate(45)")'  
   //});
   
   /************************ DOWN ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-680, 640) rotate(-135)");
 
   /************************ UP ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-90, -130) rotate(45)");  
   

   /************************ ANGLED ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-540, -370) rotate(0)");  


   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-440, 660) rotate(180)");  


   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-980, 330) rotate(-90)");  


   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-20, 340) rotate(110)");  







   /*************************************************************/
   /************************ SECOND JUNC *******************************/
   /*************************************************************/
   
   /************************ DOWN ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-480, 720) rotate(-135)");
   
   /************************ UP ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(100, -50) rotate(45)");

   /************************ DOWN ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-480, 840) rotate(-135)");
   

   /************************ UP ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(100, 70) rotate(45)");



   /*************************************************************/
   /************************ THIRD JUNC *******************************/
   /*************************************************************/


   /************************ DOWN ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-280, 1040) rotate(-135)");

   /************************ UP ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(300, 270) rotate(45)");


    


   /*************************************************************/
   /************************ FOURTH JUNC *******************************/
   /*************************************************************/
   



    /************************ DOWN ARROW *******************************/
    var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-80, 920) rotate(-135)");


   /************************ UP ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(500, 150) rotate(45)");

    /************************ DOWN ARROW *******************************/
    var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(-80, 1040) rotate(-135)");

   /************************ UP ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(500, 270) rotate(45)");



   /*************************************************************/
   /************************ FIFTH JUNC *******************************/
   /*************************************************************/


   /************************ DOWN ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(120, 840) rotate(-135)");

   /************************ UP ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(700, 70) rotate(45)");


    

  /*************************************************************/
   /************************ SIXTH JUNC *******************************/
   /*************************************************************/
   

   /************************ DOWN ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(320, 520) rotate(-135)");


   
   /************************ UP ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(900, -250) rotate(45)");


   /************************ DOWN ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(320, 640) rotate(-135)");

   /************************ UP ARROW *******************************/
   var triangle = arrow_group.selectAll("g").append("polygon")
   .data([poly])
   .enter().append("polygon")
   .attr("points",function(d) { 
      return d.map(function(d) { 
         return [scaleX(d.x),scaleY(d.y)].join(","); 
      }).join(" ");
   })
   .attr("stroke","black")
   .attr("stroke-width",2)
   .attr("transform", "translate(900, -130) rotate(45)");




var rect = arrow_group.selectAll("g").append("rect")
   .data([rect_coord1, rect_coord2])
   .enter().append("rect")
   .attr("x",function(d) { 
      return scaleX(d.x); 
   })
   .attr("y",function(d) { 
      return scaleY(d.y); 
   })
   .attr("width", 60)
   .attr("height", 20)
   .attr("fill", "green")
   .attr("transform", "translate(0, 200) rotate(90)")

/*var rect = arrow_group.append("rect")
   .attr("x", 30)
   .attr("y", -25)
   .attr("width", 60)
   .attr("height", 20)
   .attr("fill", "green")
   .attr("transform", "rotate(90)")
*/






/*var vis = d3.select("body").append("svg")
   .attr("width", 1000)
   .attr("height", 667),

scaleX = d3.scaleLinear()
  .domain([-30,30])
  .range([0,600]),

scaleY = d3.scaleLinear()
  .domain([0,50])
  .range([500,0]),


vis.selectAll("polygon")
.data([poly])
.enter().append("polygon")
.attr("points",function(d) { 
  return d.map(function(d) { return [scaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
.attr("stroke","black")
.attr("stroke-width",2);

*/
