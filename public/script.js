var myApp = angular.module("myApp",['angular-parallax']);

myApp.controller("MainCtrl",["$scope",function($scope){

	$scope.masonryContent = [			
		// {	path : "../images/mason_images/1.jpg", class : "w4 h3"}
		// ,			
		// {	path : "../images/mason_images/2.jpg", class : "w2 h4"},
		// {	path : "../images/mason_images/3.jpg", class : "w2 h4"},
		// {	path : "../images/mason_images/4.jpg", class : "w2 h4"},
		// {	path : "../images/mason_images/5.jpg", class : "w2 h4"},
		// {	path : "../images/mason_images/6.jpg", class : "w2 h4"},
		// {	path : "../images/mason_images/7.jpg", class : "w2 h4"},
		// {	path : "../images/mason_images/8.jpg", class : "w2 h4"},
		// {	path : "../images/mason_images/9.jpg", class : "w2 h4"},
		{	path : "images/mason_images/10.jpg", class : "w4 h3"},
		{	path : "images/mason_images/11.jpg", class : "w2 h2"},
		{	path : "images/mason_images/17.jpg", class : "w2 h2"},
		{	path : "images/mason_images/12.jpg", class : "w2 h4"},
		{	path : "images/mason_images/25.jpg", class : "w2 h4"},
		{	path : "images/mason_images/14.jpg", class : "w2 h4"},
		{	path : "images/mason_images/15.jpg", class : "w2 h3"},
		{	path : "images/mason_images/26.jpg", class : "w2 h2"},
		{	path : "images/mason_images/19.jpg", class : "w4 h3"},
		{	path : "images/mason_images/22.jpg", class : "w4 h3"},
		{	path : "images/mason_images/23.jpg", class : "w4 h3"}
	]



	// $scope.$on('imageLoaded',function(){			
	// 		$timeout(function(){
	// 			$sc.msnry = new Masonry( '.masonry', {
	// 						itemSelector : '.grid-item',
	// 		  				columnWidth : 200,
	// 		  				gutter : 10
	// 					});
	// 		},500)	
			
	// 	})

}]);

myApp.directive("mymasonry",["$timeout",function($timeout){
	return {
		restrict: 'A',
		link: function(sc,ele,attrs){
			$timeout(function(){
				$(ele).masonry({
				  itemSelector: '.grid-item',
				  columnWidth: '.grid-sizer',
				  percentPostion: true,
				  gutter: '.gutter-sizer'
				});
				console.log('run')	
			},500);
			
		}
	}
}])

// myApp.directive("fileChangeUpload",[function(){
// 	return {
// 		restrict : "A",
// 		require : "^^findFilesUpload",
// 		link : function(sc,ele,attr,ctrl){			
			
// 			ctrl.registerFileInput(ele);

// 			// on file change
// 			// var onChangeHandler = sc.$eval(attr.fileChangeUpload); //eval function registered
// 			// ele.bind("change",onChangeHandler);
// 			ele.bind('$destroy',function(){
// 				ctrl.UnregisterFileInput(ele);
// 			})
// 		}
// 	}
// }]);

// myApp.directive("findFilesUpload",["$document",function($document){
// 	return {
// 		restrict : "A",
// 		scope : {
// 			filesHandler : "="
// 		},
// 		link : function(sc,ele,attr,ngModel){
// 			var onFileInputAddedHandler = sc.$eval(attr.findFilesUpload); //eval function to register when new input comes in			
// 			// var aa = angular.element($document.querySelector("input"));
// 			// console.log(aa);

// 		},
// 		controller : function($scope){
// 			this.registerFileInput = function(childEle){
// 				$scope.filesHandler.push(childEle);
// 			}

// 			this.UnregisterFileInput = function(childEle){
// 				for(var i = $scope.filesHandler.length; i >= 0 ; i--){
// 					if($scope.filesHandler[i] === childEle){						
// 						$scope.filesHandler.splice(i,1);
// 					}
// 				}				
// 			}
// 		}
// 	}
// }]);
