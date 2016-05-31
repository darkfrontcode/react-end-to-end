import angular from 'angular'

class friends {
    constructor() {

        this.list = [{
            id: 1,
            first_name: "Anna",
            last_name: "Carpenter"
        }, {
            id: 2,
            first_name: "Karen",
            last_name: "Castillo"
        }, {
            id: 3,
            first_name: "Louise",
            last_name: "Lopez"
        }, {
            id: 4,
            first_name: "Larry",
            last_name: "Freeman"
        }, {
            id: 5,
            first_name: "Angela",
            last_name: "Ward"
        }, {
            id: 6,
            first_name: "Amanda",
            last_name: "Wood"
        }, {
            id: 7,
            first_name: "Anne",
            last_name: "Garcia"
        }, {
            id: 8,
            first_name: "Dorothy",
            last_name: "Frazier"
        }, {
            id: 9,
            first_name: "Julia",
            last_name: "Dixon"
        }, {
            id: 10,
            first_name: "Judith",
            last_name: "Riley"
        }, {
            id: 11,
            first_name: "Chris",
            last_name: "Greene"
        }, {
            id: 12,
            first_name: "Melissa",
            last_name: "Simmons"
        }, {
            id: 13,
            first_name: "Stephanie",
            last_name: "Fox"
        }, {
            id: 14,
            first_name: "Steve",
            last_name: "Fields"
        }, {
            id: 15,
            first_name: "Diane",
            last_name: "Medina"
        }, {
            id: 16,
            first_name: "Jack",
            last_name: "Dean"
        }, {
            id: 17,
            first_name: "Joe",
            last_name: "Miller"
        }, {
            id: 18,
            first_name: "Donna",
            last_name: "Green"
        }, {
            id: 19,
            first_name: "Rose",
            last_name: "Medina"
        }, {
            id: 20,
            first_name: "Andrea",
            last_name: "Hicks"
        }]
    }

    random() {
        const friendsCount = this.list.length;
        const rand = Math.floor(Math.random() * friendsCount);
        return this.list[rand];
    }
}

export default angular.module('friends', [])
    .service('friends', friends)
    .name;
