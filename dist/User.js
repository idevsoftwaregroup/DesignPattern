export class User {
    fullName;
    eMail;
    constructor(fullName, eMail) {
        this.fullName = fullName;
        this.eMail = eMail;
    }
    getInfo() {
        return `${this.fullName} - ${this.eMail}`;
    }
}
//# sourceMappingURL=User.js.map