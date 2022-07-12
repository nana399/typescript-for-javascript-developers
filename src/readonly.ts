export {};

// ownerに対する初期化処理
// readonlyを書いた時にはpublicを省略できるが、typescript初心者はpublicを毎回書いた方が良い
class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('はむはむ');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
