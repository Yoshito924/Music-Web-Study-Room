// let elapsedTime; //正解の音を鳴らし始めた時刻を格納する変数
// let creationTimeStamp; //リズムを打った時刻を格納する変数

// let latency; //レイテンシー(遅延時間)を格納する変数
// let judgementTime; //タイミングを判定するための値
// let safeTime; //OK判定のタイミング
// let result; //表示する音符を格納する変数

// //キー入力の判定を行う関数--------------------------------------
// function btnOn() {

//     singleNote = (NoteCharacter / 4) * Numerator_value;
//     //難易度の設定を取得する
//     safeTime = (beat / 96) * 10;
//     //レイテンシーの設定を取得する
//     latency = Number(document.getElementById('latency').value);
//     //リズムを叩いた時刻を取得
//     creationTimeStamp = performance.now();
//     //タイミングを判定するための値
//     judgementTime = mod((creationTimeStamp - latency - startTime), beat / singleNote);

//     //タイミングを判定する
//     if (judgementTime <= safeTime) {
//         //OK範囲内でハシっていた場合
//         result = `OK！ +${roundToThree(judgementTime)}ms `;
//     } else if (mod(judgementTime + safeTime, beat) <= safeTime) {
//         //OK範囲内でモタっていた場合
//         result = `OK！ ${roundToThree(judgementTime - beat)}ms`;

//     } else if (judgementTime <= safeTime + ((beat / 96) * 48)) {
//         //BAD範囲内でハシっていた場合
//         result = `BAD！ +${roundToThree(judgementTime)}ms `;
//     } else if (mod(judgementTime + (safeTime + ((beat / 96) * 48)), beat) <= safeTime) {
//         //BAD範囲内でモタっていた場合
//         result = `BAD！${roundToThree(judgementTime - beat)}ms`;
//     } else {
//         //かなりBAD
//         result = `BAD！`;
//     };

//     if (startTime !== null) {
//         //結果を表示する
//         document.getElementById('result').innerHTML = result;
//     };
// };

// //キー入力のイベントリスナー--------------------------------------
// window.addEventListener('keydown', event => {
//     //スペースキーでリズムのスタートとストップをする
//     if (event.code === 'Space' && startTime !== null) {
//         rhythmStop();
//     } else if (event.code === 'Space') {
//         rhythmStart();
//     } else {
//         btnOn();
//     };
//     //リズムパッドにフォーカスする
//     document.getElementById('rhythmPad').focus();
// });
