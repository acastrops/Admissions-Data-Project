"use strict";

function createBarGraph(divSelector, dataURL, xColumnName, yColumnName){

  var div = d3.select(divSelector)

  //const divHeight = parseInt(div.style("height"), 10) || 400
  const divHeight = 400;
  //const divWidth = parseInt(div.style("width"), 10) || 400
  const divWidth = 400;
  
  console.log(div.style("height"));
  
  console.log(divWidth, divHeight);

  var margin = {top: 20, right: 20, bottom: 40, left: 40},
      width = divWidth - margin.left - margin.right,
      height = divHeight - margin.top - margin.bottom;

  // set the ranges
  var x = d3.scaleBand()
            .range([0, width])
            .padding(0.1);
  var y = d3.scaleLinear()
            .range([height, 0]);
            
  // append the svg object to the body of the page
  // append a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = div.append("svg")
      .classed("bar-graph", true)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");

  // get the data
  d3.csv(dataURL, function(error, data) {
    if (error) throw error;

    // format the data
    data.forEach(function(d) {
      d[yColumnName] = +d[yColumnName];
    });

    // Scale the range of the data in the domains
    x.domain(data.map(function(d) { return d[xColumnName]; }));
    y.domain([0, d3.max(data, function(d) { return d[yColumnName]; })]);
    
    // append the rectangles for the bar chart
    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d[xColumnName]); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d[yColumnName]); })
        .attr("height", function(d) { return height - y(d[yColumnName]); });

    // add the x Axis
    const xAxis = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

    // since you can't wrap text on a graph if it doesn't render, add an event listener
    // https://stackoverflow.com/a/37168579/2856889

    var mom = $(svg.node()).closest(".collapse")[0];
    var blocker = mom;

    var previousValue = getComputedStyle(blocker).display;

    var observer = new MutationObserver( function(mutations){
        mutations.forEach( function(mutation) {
            if (mutation.attributeName !== 'style') return;
            var currentValue = getComputedStyle(blocker).display;
            if (currentValue !== previousValue) {
               if (previousValue === "none" && currentValue !== "none") {
                 xAxis.selectAll(".tick text")
                    .call(wrap, x.bandwidth());
               }

               previousValue = getComputedStyle(blocker).display;
            }
        });
    });


    observer.observe(blocker, { attributes: true });

  });
}

function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em")
    while (word = words.pop()) {
      line.push(word)
      tspan.text(line.join(" "))
      if (tspan.node().getComputedTextLength() > width) {
        line.pop()
        tspan.text(line.join(" "))
        line = [word]
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", `${++lineNumber * lineHeight + dy}em`).text(word)
      }
    }
  })
}

createBarGraph("#graph-race", "data/race.csv", "race", "total");
