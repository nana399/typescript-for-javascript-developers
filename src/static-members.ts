export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsuishi';
  static lastname: string = 'Ishida';

  static work(){
    //     "Hey, guys! This is Atsuishi! Are you interested in TypeScript? Let's dive into Typescript!";
    return `Hey, guys! this is ${this.firstName}! Are you interested in TypeScript? Let's dive into Typescript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
