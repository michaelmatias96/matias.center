mainApp.controller('MainController', ['$scope', function($scope) {
    $scope.family_members = [
        {
            name: 'Michael Matias',
            age: 19,
            website: 'http://michaelmatias.com',
            img_url: 'img/michael.png'
        },
        {
            name: 'Or Matias',
            age: 28,
            website: 'http://ormatiasmusic.com',
            img_url: 'img/or.png'
        },
        {
            name: 'Lian Matias',
            age: 33,
            website: '',
            img_url: 'img/lian.png'
        },
        {
            name: 'Yossi Matias',
            age: 57,
            website: '',
            img_url: 'img/yossi.png'
        },
        {
            name: 'Shavit Matias',
            age: 54,
            website: '',
            img_url: 'img/shavit.png'
        },
    ];
}]);