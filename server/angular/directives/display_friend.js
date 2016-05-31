import angular from 'angular';

function displayFriend() {
    return {
        restrict: 'E',
        scope: { friend: '=' },
        template: ['{{friend.first_name}}&nbsp;{{friend.last_name}}'].join('')
    }
}

export default angular.module('displayFriend', [])
    .directive('displayFriend', displayFriend)
    .name;
