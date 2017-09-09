jQuery(document).ready(function($) {
	$(window).load(function() {
		/* Act on the event */
		var myjson = [];
		var x ;

		function loadRecurrency(){
			var cmp_from = $('#cmp_from').val();
			var curr_from = $('#curr_from').val();
			var curr_to = $('#curr_to').val();
			var url = "https://min-api.cryptocompare.com/data/price?fsym="+curr_from+"&tsyms="+curr_to+"";
			$.getJSON(url, function(json){
				x=0;
	            $.each(json, function(i, field){
	                myjson[x] = field;
	                x++;
	            });
	            //console.log(myjson);
	            var resp = (myjson[0]*cmp_from)/1;
				$('#cmp_to').val(resp);
	        });
	        setTimeout(loadRecurrency, 1000);
		}

        //Carga de tablas
        var y;
        var z;
        var fecha = new Date();
        var btc = [];
        var eth = [];
		function updatePrices(){
		    //FECHA
		    var ano = fecha.getFullYear();
		    var mes = fecha.getMonth();
		    if(mes<=9){mes = '0'+mes};
		    var dia = fecha.getDay();
		    if(dia<=9){dia = '0'+dia};

		    //HORA
		    var lahora = new Date();
		    var hours=lahora.getHours();
			var minutes=lahora.getMinutes();
			var seconds=lahora.getSeconds();

			if (hours>12){hours=hours-12};
			if (hours==0){hours=12};
			if (minutes<=9){minutes="0"+minutes};
			if (seconds<=9){seconds="0"+seconds};

  			var fec = ano+' - '+mes+' - '+dia;
  			var hora = hours+':'+minutes+':'+seconds;

			$.getJSON("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR", function(json){
				y=0;
	            $.each(json, function(i, valor){
	                btc[y] = valor;
	                y++;
	            });
	            $('#BTC').prepend('<tr> <td>'+fec+'  '+hora+'</td> <td>'+btc[0]+'</td> <td>'+btc[1]+'</td> </tr>');
	        });

	        $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR", function(json){
				z=0;
	            $.each(json, function(i, valor){
	                eth[z] = valor;
	                z++;
	            });
	            $('#ETH').prepend('<tr> <td>'+fec+'  '+hora+'</td> <td>'+eth[0]+'</td> <td>'+eth[1]+'</td> <td>'+eth[2]+'</td></tr>');
	        });
  			
		    setTimeout(updatePrices, 10000);
		}


		updatePrices();
		loadRecurrency();

		$('cmp_from').on('change', function() {
  			loadRecurrency();
		});
		$('curr_to').on('change', function() {
  			loadRecurrency();
		});

	});





});