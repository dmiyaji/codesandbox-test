/**
 *  const,let等の変数宣言
 */
// var oldParam = "var変数";
// console.log(oldParam);

// // var変数は上書き可能
// oldParam = "var変数を上書き";
// console.log(oldParam);

// // var変数は再宣言可能
// var oldParam = "var変数を再宣言";
// console.log(oldParam);

// let val = "let変数";
// console.log(val);

// // letは上書きが可能
// val = "let変数を上書き";
// console.log(val);

// // let変数は再宣言不可能
// let val = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";

// const変数は再宣言不可能
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトの場合、
// 内部の属性を変更することは出来てしまう。
// const val4 = {
//   name: "みやじ",
//   age: 33
// };
// val4.name = "宮島";
// val4.address = "板橋";
// console.log(val4);

// constで定義した配列も、中身を変えることができる。
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// 実際の開発ではconstを使うことがほとんど。
// Reactで値が変わるものはstateというものを使う。

/**
 * テンプレート文字列に関して。
 * 文字列の中に変数を埋め込める。
 */
// const name = "みやじ";
// const age = 33;

// // 「私の名前はみやじです。年齢は33歳です。」と出したい。
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を使った方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数の書き方
// function func1(str) {
//   return str;
// }
// const func1 = function func1(str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// // 変数が1個の場合は()を省略出来る。
// // 関数の中身が1行の場合は波かっことreturnも省略出来る。
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(1, 2));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "みやじ",
//   age: 33
// };

// 分割代入を使わない場合
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// 分割代入を使う場合
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// // 配列でも使える。
// // 分割代入を使わない場合
// const myProfile = ["みやじ", 33];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// // 分割代入を使う場合
// // 配列は受け取るときのカッコも配列のカッコ。名前がついてないので順番が大事。
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "名無し") => console.log(`こんにちは！${name}さん！`);
// sayHello("みやじ");

/**
 * スプレッド構文　...のやつ
 * 配列とかいろいろなところで使う。
 */

// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// // スプレッド構文を使わずに呼ぶ
// sumFunc(arr1[0], arr1[1]);

// // スプレッド構文で呼ぶ
// sumFunc(...arr1);

// // まとめることも出来る。
// const arr2 = [1, 2, 3, 4, 5];

// // 分割代入と一緒に使われることが多い
// const [num1, num2, ...arr3] = arr2;
// console.log(num1); // 1
// console.log(num2); // 2
// console.log(arr3); // [3,4,5]

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // ディープコピー
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// // 結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // イコールでコピーすると同じオブジェクトを参照してしまう。
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
