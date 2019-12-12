export class Post {
  constructor(title, body, isNew) {
    this.title = title;
    this.body = body;
    this.valid = title === "" && body === "" ? false : true;
    this.isNew = isNew
  }
}
