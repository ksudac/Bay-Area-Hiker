$("#slider").slider({
    range: true,
    min: 0,
    max: 14,
    values: [0, 3 ],
    step: 2,
    slide : function(event, ui){
	console.log("previous value:"+ $(this).slider('option', 'value'));
    },
	stop: function(event, ui){
	console.log("Current value:"+ $(this).slider('option', 'value'));
    }
});
