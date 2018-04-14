"use strict";


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
			modelResultDiv.classList.remove("d-none");
		}
		e.preventDefault();
	}
}

const model = {
	satOnly: [-17.668, 0.612, 0.014],
	actOnly: [-17.472, 1.944, 0.428],
	both:    [-24.629, 2.690, 0.009, 0.196]
}

const predict = function(gpa, sat, act){
	let predictedLogit;
	let scaledGpa = (gpa - ) / 
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