let rerenderEntireTree = () => {
    console.log('Hello')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 0},
            {id: 2, message: 'It\'s my first post', likesCount: 26}
        ],
        newPostText: 'some text'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sasha'},
            {
                id: 2,
                name: 'Masha',
                img: 'http://images6.fanpop.com/image/photos/38300000/Shosanna-Dreyfus-inglourious-basterds-38365336-200-200.jpg'
            },
            {
                id: 3,
                name: 'Victor',
                img: 'https://steamuserimages-a.akamaihd.net/ugc/775111136116026664/ADD394B9133679576A876216FCD618DC8AA2D48C/'
            },
            {id: 4, name: 'Artem', img: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Hans_Landa_IB_2009.jpg'},
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
            {
                id: 2,
                name: 'Masha',
                img: 'http://images6.fanpop.com/image/photos/38300000/Shosanna-Dreyfus-inglourious-basterds-38365336-200-200.jpg'
            },
            {
                id: 3,
                name: 'Victor',
                img: 'https://steamuserimages-a.akamaihd.net/ugc/775111136116026664/ADD394B9133679576A876216FCD618DC8AA2D48C/'
            },
            {id: 4, name: 'Artem', img: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Hans_Landa_IB_2009.jpg'},
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''; // очищаем textarea после отправки нового поста
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state