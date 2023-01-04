interface Calender {
    name: string
    addEvent () : void
    removeEvent() : void
}

// Every calender type say google, microsoft has a name, addEvent and removeEvent methods

interface CloudCalender extends Calender {
    sync():void

}

class GoogleCalender implements Calender {
    constructor (public name: string) {

    }
    addEvent(): void {
        throw new Error("Method not implemented.")
    }
    removeEvent(): void {
        throw new Error("Method not implemented.")
    }

}