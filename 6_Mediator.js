class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      });
    }
  }
}

const vlad = new User('Vlad');
const lena = new User('Elena');
const igor = new User('Igor');

const firstRoom = new ChatRoom();

firstRoom.register(vlad);
firstRoom.register(lena);
firstRoom.register(igor);

vlad.send('Hello', lena);
igor.send('Hello all');
