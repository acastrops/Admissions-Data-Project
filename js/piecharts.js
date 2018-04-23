var race_donut = new d3pie("race-donut", {
	"header": {
		"title": {
			"text": "Race/Ethnicity",
			"fontSize": 29,
			"font": "open sans"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "* This was curious. We're not sure why several people regard Saskatoon as a Top 15 Fear.",
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
				"color": "#3b5998"
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
			"effect": "linear",
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


var pie = new d3pie("pieChart", {
                	"header": {
                		"title": {
                			"text": "Race/Ethnicity",
                			"fontSize": 29,
                			"font": "open sans"
                		},
                		"subtitle": {
                			"color": "#999999",
                			"fontSize": 10,
                			"font": "courier"
                		},
                		"location": "pie-center",
                		"titleSubtitlePadding": 10
                	},
                	"footer": {
                		"text": "* This was curious. We're not sure why several people regard Winnipeg as a Top 15 Fear.",
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
                		"sortOrder": "label-asc",
                		"content": [
                			{
                				"label": "Asian",
                				"value": 27,
                				"color": "#001f7c"
                			},
                			{
                				"label": "Hispanic",
                				"value": 154,
                				"color": "#32368d"
                			},
                			{
                				"label": "Black",
                				"value": 24,
                				"color": "#4869bb"
                			},
                			{
                				"label": "White",
                				"value": 593,
                				"color": "#5f81da"
                			},
                			{
                				"label": "Multiracial",
                				"value": 31,
                				"color": "#4d6fcc"
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
                			"effect": "linear",
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