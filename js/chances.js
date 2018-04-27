"use strict";

(function($){
	$(document).ready(function(){
		$('#stat-carousel-17').lightSlider({
			item: 3,
			slideMove: 3,
			slideMargin: 30,
			pager: false,
			prevHtml: '<span class="glyphicon glyphicon-menu-left"></span><span class="sr-only">previous</span>',
			nextHtml: '<span class="glyphicon glyphicon-menu-right"></span><span class="sr-only">next</span>',
			responsive: [
	            {
	                breakpoint: 768,
	                settings: {
	                    item: 1,
	                    slideMove: 1,
	                  }
	            }
	        ]
		});
	});
})(jQuery);


// handle form stuff first
const form = document.getElementById("chances")
window.onload = function(){
	form.onsubmit = function(e){
				e.preventDefault();
		const prob = predict(parseFloat(form["gpa"].value),
							 parseFloat(form["sat"].value),
							 parseFloat(form["act"].value))
		const probPct = Math.round(prob * 100)
		if (probPct || probPct === 0){

			const displayedResult = document.getElementById("model-result-pct");
			displayedResult.innerText = probPct + "%"

			const modelResultDiv = document.getElementById("model-result");
			modelResultDiv.classList.add("show")
			modelResultDiv.classList.remove("d-none");
		}
		e.preventDefault();
	}
}

const model = {
	satOnly: [-24.704, 2.743, 0.013],
	actOnly: [-22.865, 3.295, 0.446],
	both:    [-25.806, 2.967, 0.009, 0.196]
}

const predict = function(gpa, sat, act){
	let predictedLogit;
	if (sat && act) {
		const currentModel = model["both"]
		predictedLogit = currentModel[0] + gpa * currentModel[1] + sat * currentModel[2] + act * currentModel[3]
	} else if (sat) {
		const currentModel = model["satOnly"]
		predictedLogit = currentModel[0] + gpa * currentModel[1] + sat * currentModel[2]
	} else if (act) {
		const currentModel = model["actOnly"]
		predictedLogit = currentModel[0] + gpa * currentModel[1] + act * currentModel[2]
	} else {
		predictedLogit = NaN
	}
	const odds = Math.exp(predictedLogit)
	return odds / (1 + odds)
}