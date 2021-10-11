
 export type messageDataType = {
    id: number
    message: string
}

 export type dialogData = {
    id: number
    name: string
}

export type messagePageType = {
    messageData: Array<messageDataType>
    dialogData: Array<dialogData>
}

export type stateType = {
    messagePage: messagePageType
}


export let state: stateType = {
    messagePage: {
        dialogData: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Anton'},
            {id: 3, name: 'Petr'},

            {id: 4, name: 'Egor'},
            {id: 5, name: 'Anna'},
            {id: 6, name: 'Sveta'},
            {id: 7, name: 'Tania'},
        ],
        messageData: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'Bye!'},
        ]
    }
}


