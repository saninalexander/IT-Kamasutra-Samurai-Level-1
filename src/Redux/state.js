let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 0},
            {id: 2, message: 'It\'s my first post', likesCount: 26}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Victor'},
            {id: 4, name: 'Artem'},
            {id: 5, name: 'Ivan'},
            {id: 6, name: 'Reggie'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you doing'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Masha', img: 'https://steamuserimages-a.akamaihd.net/ugc/775111136116026664/ADD394B9133679576A876216FCD618DC8AA2D48C/'},
            {id: 2, name: 'Victor', img: 'https://steamuserimages-a.akamaihd.net/ugc/775111136116026664/ADD394B9133679576A876216FCD618DC8AA2D48C/'},
            {id: 3, name: 'Artem', img: 'https://steamuserimages-a.akamaihd.net/ugc/775111136116026664/ADD394B9133679576A876216FCD618DC8AA2D48C/'},
        ]
    }
}

export default state