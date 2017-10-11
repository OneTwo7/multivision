angular.module('app').controller('mvMainCtrl', function ($scope) {
  $scope.courses = [
    {name: 'JavaScript for Cave People', featured: true, published: new Date(2017, 9, 9)},
    {name: 'JavaScript for Moon People', featured: true, published: new Date(2017, 7, 19)},
    {name: 'C# for Sharp Folks', featured: false, published: new Date(2017, 7, 12)},
    {name: 'How to Program in Sleep', featured: true, published: new Date(2017, 6, 31)},
    {name: 'Ruby for Those Who Still Care', featured: true, published: new Date(2017, 9, 2)},
    {name: 'Python for Cobras', featured: false, published: new Date(2017, 6, 22)},
    {name: 'C++ Fundamentals', featured: true, published: new Date(2017, 9, 2)},
    {name: 'C++ Comprehensive', featured: true, published: new Date(2017, 8, 16)},
    {name: 'C++ Advanced Topics', featured: false, published: new Date(2017, 8, 16)},
    {name: 'C++ Ultimate', featured: false, published: new Date(2017, 9, 1)},
    {name: 'EcmaScript 6', featured: true, published: new Date(2017, 9, 1)},
    {name: 'Node.js in Action', featured: true, published: new Date(2017, 6, 31)},
    {name: 'Node.js in Waiting Mode', featured: true, published: new Date(2017, 7, 22)},
    {name: 'Ajax and How Not To', featured: true, published: new Date(2017, 9, 5)},
    {name: 'Go for Everyone and That Other Dude', featured: false, published: new Date(2017, 6, 25)},
  ];
});