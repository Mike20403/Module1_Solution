(function () {
	/* body... */
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', ['$scope', function($scope){
	
		 
		 
		 $scope.DisplayOutput = function () {
		 	/* body... */
		 	var text = $scope.input;
		 	CheckIfTooMuch(text,$scope);
		 }; 


	}]);

	function CheckIfTooMuch (string,$scope){
		// body... 
		
		if (string === undefined){
			$scope.message = "Please enter data first";
	 	 
		} else {
			var words = string.split(', ');
			if (words.length<=3) {
				
				$scope.message = "Enjoy!"
			} else {
				
				$scope.message = "Too much!"
			}
		}
	 	
	}
})();