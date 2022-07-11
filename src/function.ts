export {};

//BMIを求める
function bmi(height: number, weight: number): number{
  return weight / (height * height);
}

//身長：178cm、体重86kgの場合
console.log(bmi(1.78, 86));
//=> 27.143037495265748
