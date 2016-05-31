import $ from 'jquery'

export default class homeController {
    constructor(friends) {
        this.friends = friends
    }

    random(){
        return this.friends.random().first_name
    }

    shuffle() {
        let random_friend = this.random()
        let current_friend = $('#random_friend_name').text()

        if(current_friend != random_friend){
            this.name = random_friend
        }else{
            this.shuffle()
        }
    }
}
