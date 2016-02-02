var app = angular.module("app").controller('HomeController', function($scope, $location, AuthenticationService) {
  $scope.title = "Home";
  $scope.message = "Mouse Over these images to see a directive at work";

  var onLogoutSuccess = function(response) {
    $location.path('/login');
  };

  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };

  $scope.a = 10;
  $scope.b = 15;

  $scope.user= {name : 'HSamilton', edad: '20', apellido: 'Urbano'};

  $scope.users = [{name:'Hamilton', prof:'Ingeniero', age:'20'},
  				   {name:'Hugo',prof:'Medico',age:'25'},
  				   {name:'Diana',prof:'Ingeniero',age:'268'}];

  $scope.lista = ['Perro','Gato','Mono','Vaca'];
  
  $scope.addUser = function(u){
  	var nu = {name: u.name, prof: u.prof, age : u.age};
  	$scope.users.push(nu);

  };

});

app.filter('decorar', function(){
	
		function decorar1(input){
			return '*' + input + '*';
		}
	
	return decorar1;
});

app.directive('myClient',function(){
	return {
		<!--template: "Nombre: {{user.name}} Edad: {{user.edad}}"-->
		templateUrl: 'my-client.html'
	};
});



