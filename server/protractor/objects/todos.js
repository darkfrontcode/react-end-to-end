'use strict';

module.exports = {
    start: function(){
        var items = this.elements;
        browser.get("http://localhost:3000");
        items.find_it_out.click();
        expect(items.try_again.isDisplayed()).toBeTruthy();
    },
    not_duplicate: function(){
        var items = this.elements,
            friend_name = items.best_friend_name.getText();
        items.try_again.click();
        expect(items.best_friend_name.getText()).not.toBe(friend_name);
        items.full_list.click();
    },
    list_friends: function(){
        var items = this.elements;
        expect(items.list_friends_title.getText()).toEqual("Your friends list");
        items.list_of_friends.then(function(friends){
            expect(friends.length).toEqual(20);
        })
    },
    elements:{
        find_it_out: element(by.buttonText("Find it out")),
        try_again: element(by.buttonText("Try again?")),
        best_friend_name: element(by.css('h4 strong u')),
        full_list: element(by.buttonText("See full list of your friends")),
        list_friends_title: element(by.css('table h2')),
        list_of_friends: element.all(by.repeater('friend in about.listFriends'))
    }
}
