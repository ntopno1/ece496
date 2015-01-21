//Front-end js controller
//Controls ServicesCtrl function in index.html

function ServicesCtrl($scope, $http){
	console.log("Hello From ServicesCtrl")
	$scope.message = "Hello from controller"

	$scope.create = function(){ //sends to the server.js
		console.log($scope.serviceClient);
		$http.post("/serviceClients", $scope.serviceClient) //POST to the server
		.success(function(response){
			$scope.all()
		});
	}
	
	$scope.renderServiceClients = function(response){ //receives response from the server.js	
		$scope.serviceClients = response;
		
	}
	
	$scope.remove = function(id){
		$http.delete("/serviceClients/" + id)
		.success(function(response){
			$scope.all()
		});
	}
	//get all
	$scope.all = function(){
	$http.get("/serviceClients")	//url where it responds; GET from server
	.success($scope.renderServiceClients);
	}

	$scope.all();
}