export class Message {
    author: string;
    text: string;
    time: Date;

    toPlainObj(): object {
        return {
            author: this.author,
            text: this.text,
            time: this.time
        };
    }
}
