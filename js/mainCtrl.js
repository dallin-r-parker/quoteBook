angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {

    $scope.quotes = dataService.getQuotes();

    $scope.removeData = function(textToRemove){
      dataService.removeData(textToRemove);
    }

    $scope.addData = function(text, author){
      var newQuote = {
        text: text,
        author: author
      }
      if(dataService.addData(newQuote))
      {
        $scope.newQuoteText = '';
        $scope.newQuoteAuthor = '';
      }
    }



});
