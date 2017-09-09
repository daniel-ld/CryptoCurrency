<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>CryptoCurrency Dashboard</title>
		<link rel="stylesheet" href="">
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container">
			<br>
			<h1>CryptoCurrency Dashboard</h1>
			<br>
			<div class="row">
				<div class="col-lg-8">
					<div class="panel panel-default">
				  		<div class="panel-heading">
				    		<h3 class="panel-title">Live Graphic update every 5 seconds</h3>
				  		</div>
				  		<div class="panel-body">
				    		<div id="myChart" style="width: 100%; height: 296px;"></div>
				  		</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="panel panel-default">
						<div class="panel-heading"><h3 class="panel-title">Calculator BTC/ETH <=> USD/EUR</h3></div>
						<div class="panel-body">
							<form action="" name="frmExample" method="get" onsubmit="return false;">
								<div class="col-lg-8">
									<label for="">From </label>
									<input type="number" class="form-control" id="cmp_from" value="1">
								</div>
								<div class="col-lg-4">
									<div class="form-group">
										<label for="curr_from">&nbsp;</label>
										<select name="" id="curr_from" class="form-control">
											<option value="BTC" selected>BTC</option>
											<option value="ETH">ETH</option>
											<option value="USD">USD</option>
											<option value="EUR">EUR</option>
										</select>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="col-lg-8">
									<label for="">To </label>
									<input type="number" class="form-control" id="cmp_to">
								</div>
								<div class="col-lg-4">
									<div class="form-group">
										<label for="curr_to">&nbsp;</label>
										<select  name="" id="curr_to" class="form-control">
											<option value="USD" selected>USD</option>
											<option value="EUR">EUR</option>
											<option value="BTC">BTC</option>
											<option value="ETH">ETH</option>
										</select>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<hr>

			<div class="row">
				<div class="col-lg-6">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Live Prices Bitcoin - BTC </h3>
						</div>
						<div class="panel-body" style="height: 237px;position: relative; overflow-y: scroll;">
							<table class="table">
								<thead>
									<tr>
										<th>Time</th>
										<th>USD</th>
										<th>EUR</th>
									</tr>
								</thead>
								<tbody id="BTC"> 
									
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Live Prices Etherium - ETH </h3>
						</div>
						<div class="panel-body" style="height: 237px;position: relative; overflow-y: scroll;">
							<table class="table">
								<thead>
									<tr>
										<th>Time</th>
										<th>BTC</th>
										<th>USD</th>
										<th>EUR</th>
									</tr>
								</thead>
								<tbody id="ETH"> 
									
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<hr>
		</div>
		
		<footer style="padding: 20px 0px;">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 text-right">by @daniel_ld</div>
				</div>
			</div>
		</footer>

		<!-- Latest compiled and minified JavaScript -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script> 
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
		<script src="https://code.highcharts.com/highcharts.src.js"></script>
		<script src="js/chars.js"></script>		
		<script src="js/main.js"></script>
	</body>
</html>
