//Front-end js controller
//Controls ServicesCtrl function in index.html

function ServicesCtrl($scope, $http){
	console.log("Hello From ServicesCtrl")
	$scope.message = "Hello from controller"

	$scope.create = function(){ //sends to the server.js
		console.log("input from user: ", $scope.serviceClient);
		$http.post("/serviceClients", $scope.serviceClient); //POST to the server
	}
	
	$scope.renderServiceClients = function(response){ //receives response from the server.js	
		console.log("response: ", response)
		$scope.serviceClients = response;
		
	}
	
	//get all
	$http.get("/serviceClients")	//url where it responds; GET from server
	.success($scope.renderServiceClients);

	
}