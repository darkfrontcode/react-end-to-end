var todos = require('../objects/todos');

describe("Random best friend test", function(){

    it("should test find it out button click", function(){
        todos.start();
    });

    it("should check is your best friend is not duplicated", function(){
        todos.not_duplicate();
    });

    it("should check if you are in list friends page", function(){
        todos.list_friends();
    })
})
