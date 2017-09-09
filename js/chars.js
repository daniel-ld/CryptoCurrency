$(document).ready(function () {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    Highcharts.chart('myChart', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    var series2 = this.series[1];
                    var series3 = this.series[2];
                    var series4 = this.series[3];
                    var series5 = this.series[4];
                    setInterval(function () {
                        var x = (new Date()).getTime(); // current time
                        $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD", function(json){
	            			$.each(json, function(i, valor){
	                			series.addPoint([x, valor], true, true);
	            			});
	        			});

	        			var z = (new Date()).getTime(); // current time
                        $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR", function(json){
	            			$.each(json, function(i, valor2){
	                			series2.addPoint([z, valor2], true, true);
	            			});
	        			});

	        			var a = (new Date()).getTime(); // current time
                        $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC", function(json){
	            			$.each(json, function(i, valor3){
	                			series3.addPoint([a, valor3], true, true);
	            			});
	        			});
	        			var b = (new Date()).getTime(); // current time
                        $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function(json){
	            			$.each(json, function(i, valor4){
	                			series4.addPoint([b, valor4], true, true);
	            			});
	        			});
	        			var c = (new Date()).getTime(); // current time
                        $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR", function(json){
	            			$.each(json, function(i, valor5){
	                			series5.addPoint([c, valor5], true, true);
	            			});
	        			});
                    }, 5000);
                }
            }
        },
        title: {
            text: 'Prices BTC & ETH'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Price'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: true
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'BTC => USD',
            data: (function () {
                 // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -10; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 1
                    });
                }
                return data;
            }())
        },
        {
            name: 'BTC => EUR',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -10; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 1
                    });
                }
                return data;
            }())
        },
        {
            name: 'ETH => BTC',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -10; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 1
                    });
                }
                return data;
            }())
        },
        {
            name: 'ETH => USD',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -10; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 1
                    });
                }
                return data;
            }())
        },
        {
            name: 'ETH => EUR',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -10; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 1
                    });
                }
                return data;
            }())
        }]
    });
});