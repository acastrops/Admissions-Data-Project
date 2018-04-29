function formatTitle(text) {
	return {
		text: text.toUpperCase(),
		fontSize: 22,
		font: "Univers LT W01_67 Bold_1476016"
	}
}

// Bring out the donuts
var race_donut = new d3pie("race-donut", {
	"header": {
		"title": formatTitle("Race / Ethnicity"),
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	/* 	"footer": {
		"text": "* This was curious. We're not sure why several people regard Saskatoon as a Top 15 Fear.",
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	}, */
	"size": {
		"canvasWidth": 400,
		"pieInnerRadius": "64%",
		"pieOuterRadius": "76%"
	},
	"data": {
		"sortOrder": "label-asc",
		"content": [
			{
				"label": "Asian",
				"value": 27,
				"color": "#f7f7f7"
			},
			{
				"label": "Hispanic",
				"value": 154,
				"color": "#dfe3ee"
			},
			{
				"label": "Black",
				"value": 24,
				"color": "#8b9dc3"
			},
			{
				"label": "White",
				"value": 593,
				"color": "#282985"
			},
			{
				"label": "Multiracial",
				"value": 31,
				"color": "#ffffff"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "bounce",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	}
});

var gender_donut = new d3pie("gender-donut", {
	"header": {
		"title": formatTitle("Gender"),
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 400,
		"pieInnerRadius": "64%",
		"pieOuterRadius": "76%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "Female",
				"value": 532,
				"color": "#282985"
			},
			{
				"label": "Male ",
				"value": 329,
				"color": "#dfe3ee"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": false,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%"
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});


var secondary_school_type_donut = new d3pie("secondary-school-type-donut", {
	"header": {
		"title": formatTitle("School Type"),
		"subtitle": {
			"text": "Secondary School Type",
			"color": "#7e6e6e",
			"fontSize": 12,
			"font": "open sans"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "Secondary School types for incoming students",
		"color": "#999999",
		"fontSize": 12,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasWidth": 400,
		"pieInnerRadius": "64%",
		"pieOuterRadius": "76%"
	},
	"data": {
		"sortOrder": "label-asc",
		"content": [
			{
				"label": "Public",
				"value": 182,
				"color": "#00047c"
			},
			{
				"label": "Charter",
				"value": 12,
				"color": "#2f3399"
			},
			{
				"label": "Private",
				"value": 11,
				"color": "#2f52aa"
			},
			{
				"label": "Parochial",
				"value": 10,
				"color": "#2e58c9"
			},
			{
				"label": "Home School",
				"value": 5,
				"color": "#4d6fcc"
			},
			{
				"label": "International",
				"value": 3,
				"color": "#779fdd"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%"
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});

var specialized_hs_donut = new d3pie("specialized-hs-donut", {
	"header": {
		"title": formatTitle("Curriculum"),
		"subtitle": {
			"color": "#7e6e6e",
			"fontSize": 12,
			"font": "open sans"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "Specialized High School Curriculum for incoming students",
		"color": "#999999",
		"fontSize": 12,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasWidth": 400,
		"pieInnerRadius": "64%",
		"pieOuterRadius": "76%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "AP",
				"value": 61,
				"color": "#00047c"
			},
			{
				"label": "Honors",
				"value": 5,
				"color": "#d3d3df"
			},
			{
				"label": "IB",
				"value": 25,
				"color": "#7b91c8"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%"
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});

var top6_grad_aoc = new d3pie("top6-grad-aoc-donut", {
	"header": {
		"title": formatTitle("AOCs"),
		"subtitle": {
			"color": "#7e6e6e",
			"fontSize": 12,
			"font": "open sans"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "Areas of Concentration for graduating students",
		"color": "#999999",
		"fontSize": 12,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasWidth": 400,
		"pieInnerRadius": "64%",
		"pieOuterRadius": "76%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "Biology",
				"value": 12,
				"color": "#7b8fc8"
			},
			{
				"label": "Chemestry",
				"value": 10,
				"color": "#00047c"
			},
			{
				"label": "Psychology",
				"value": 8,
				"color": "#efefef"
			},
			{
				"label": "Political Science",
				"value": 6,
				"color": "#efefef"
			},
			{
				"label": "Economics",
				"value": 4,
				"color": "#efefef"
			},
			{
				"label": "Humanities",
				"value": 4,
				"color": "#d3d3df"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%"
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});

var aoc_division_donut = new d3pie("aoc-division-donut", {
	"header": {
		"title": formatTitle("Division"),
		"subtitle": {
			"color": "#7e6e6e",
			"fontSize": 12,
			"font": "open sans"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "Distibution of Graduating AOCs by Division",
		"color": "#999999",
		"fontSize": 12,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasWidth": 400,
		"pieInnerRadius": "64%",
		"pieOuterRadius": "76%"
	},
	"data": {
		"sortOrder": "random",
		"content": [
			{
				"label": "Social Sciences",
				"value": 29,
				"color": "#00047c"
			},
			{
				"label": "Humanities",
				"value": 28,
				"color": "#2f3399"
			},
			{
				"label": "Natural Sciences",
				"value": 32,
				"color": "#2f52aa"
			},
			{
				"label": "Interdisciplinary Studies",
				"value": 8,
				"color": "#2e58c9"
			},
			{
				"label": "Environmental Studies",
				"value": 1,
				"color": "#4d6fcc"
			},
			{
				"label": "General Studies",
				"value": 2,
				"color": "#738def"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%"
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});


var faculty_race_donut = new d3pie("faculty-race-donut", {
	"header": {
		"title": formatTitle("Faculty"),
		"subtitle": {
			"text": "Race/Ethnicity",
			"color": "#7e6e6e",
			"fontSize": 15,
			"font": "open sans"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "Race and Ethnicity (Full-time Instructional faculty)",
		"color": "#999999",
		"fontSize": 12,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasWidth": 400,
		"pieInnerRadius": "64%",
		"pieOuterRadius": "76%"
	},
	"data": {
		"sortOrder": "random",
		"content": [
			{
				"label": "White",
				"value": 62,
				"color": "#00047c"
			},
			{
				"label": "Nonresident Alien",
				"value": 5,
				"color": "#2f3399"
			},
			{
				"label": "Hispanic/Latino",
				"value": 4,
				"color": "#2f52aa"
			},
			{
				"label": "Black or African American",
				"value": 3,
				"color": "#2e58c9"
			},
			{
				"label": "Asian",
				"value": 2,
				"color": "#738def"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%"
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});

var faculty_gender_donut = new d3pie("faculty-gender-donut", {
	"header": {
		"title": formatTitle("Faculty"),
		"subtitle": {
			"text": "Gender",
			"color": "#7e6e6e",
			"fontSize": 15,
			"font": "open sans"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "Full-time Instructional faculty",
		"color": "#999999",
		"fontSize": 12,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasWidth": 400,
		"pieInnerRadius": "64%",
		"pieOuterRadius": "76%"
	},
	"data": {
		"sortOrder": "value-asc",
		"content": [
			{
				"label": "Female",
				"value": 39,
				"color": "#00047c"
			},
			{
				"label": "Male",
				"value": 37,
				"color": "#738def"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%"
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});

// Handle Redraw Listeners

function addRedrawListener(pie){
	// since you can't wrap text on a graph if it doesn't render, add an event listener
    // https://stackoverflow.com/a/37168579/2856889

    var mom = $(pie.element).closest(".collapse")[0];
    var blocker = mom;

    var previousValue = getComputedStyle(blocker).display;

    var observer = new MutationObserver( function(mutations){
        mutations.forEach( function(mutation) {
            if (mutation.attributeName !== 'style') return;
            var currentValue = getComputedStyle(blocker).display;
            if (currentValue !== previousValue) {
               if (previousValue === "none" && currentValue !== "none") {
                 pie.redraw();
               }

               previousValue = getComputedStyle(blocker).display;
            }
        });
    });

    observer.observe(blocker, { attributes: true });
}

const pieCharts = [race_donut, gender_donut, 
secondary_school_type_donut, specialized_hs_donut,
secondary_school_type_donut, top6_grad_aoc, aoc_division_donut,
faculty_race_donut, faculty_gender_donut];

pieCharts.forEach(addRedrawListener);