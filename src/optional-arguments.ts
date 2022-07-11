export {};

let bmi: (height: number, weight: number, printable: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);

  if(printable){
    console.log({ bmi });
  }
  return weight / (height * height);
};

bmi(1.78, 86, true);

//bmi（身長、体重、console.logで出力するかどうか？）
// bmi(1.78, 86 true); => { bmi: 27.143037495265748 }
// bmi(1.78, 86 false); →console.logには何も表示させない
// bmi(1.78, 86); →console.logには何も表示させない
