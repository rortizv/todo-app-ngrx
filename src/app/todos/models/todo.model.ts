
export class Todo {
    public id: number;
    public text: string;
    public completed: boolean = false;

    constructor(text: string) {
        this.text = text;
        this.id = Math.floor(Math.random() * 1000);
    }

}