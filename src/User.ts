export class User {
  constructor(
    public fullName: string,
    private eMail: string
  ) {}

  getInfo(): string {
    return `${this.fullName} - ${this.eMail}`;
  }
}
