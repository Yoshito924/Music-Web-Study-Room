'use strict';

const rhythmPattern = [
    { name: "rhythm0", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 1, 1, 1], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm1", partition: 2, Numerator: 2, Denominator: 4, rhythm: [0, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm2", partition: 2, Numerator: 2, Denominator: 4, rhythm: [0, 1], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm3", partition: 2, Numerator: 2, Denominator: 4, rhythm: [1, 0], imagePath: "", difficulty: 0, text: "" },

    //2のまとまり------------------------
    { name: "rhythm5", partition: 2, Numerator: 2, Denominator: 4, rhythm: [0, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm6", partition: 2, Numerator: 2, Denominator: 4, rhythm: [0, 1], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm7", partition: 2, Numerator: 2, Denominator: 4, rhythm: [1, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm8", partition: 2, Numerator: 2, Denominator: 4, rhythm: [1, 1], imagePath: "", difficulty: 0, text: "" },

    //3のまとまり------------------------
    { name: "rhythm8", partition: 3, Numerator: 3, Denominator: 4, rhythm: [0, 0, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm9", partition: 3, Numerator: 3, Denominator: 4, rhythm: [0, 0, 1], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm10", partition: 3, Numerator: 3, Denominator: 4, rhythm: [0, 1, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm11", partition: 3, Numerator: 3, Denominator: 4, rhythm: [0, 1, 1], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm12", partition: 3, Numerator: 3, Denominator: 4, rhythm: [0, 0, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm13", partition: 3, Numerator: 3, Denominator: 4, rhythm: [1, 0, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm14", partition: 3, Numerator: 3, Denominator: 4, rhythm: [1, 1, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm15", partition: 3, Numerator: 3, Denominator: 4, rhythm: [1, 1, 1], imagePath: "", difficulty: 0, text: "" },

    //4のまとまり------------------------
    { name: "rhythm16", partition: 4, Numerator: 4, Denominator: 4, rhythm: [0, 0, 0, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm17", partition: 4, Numerator: 4, Denominator: 4, rhythm: [0, 0, 0, 1], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm18", partition: 4, Numerator: 4, Denominator: 4, rhythm: [0, 0, 1, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm19", partition: 4, Numerator: 4, Denominator: 4, rhythm: [0, 0, 1, 1], imagePath: "", difficulty: 0, text: "" },

    { name: "rhythm20", partition: 4, Numerator: 4, Denominator: 4, rhythm: [0, 1, 0, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm21", partition: 4, Numerator: 4, Denominator: 4, rhythm: [0, 1, 0, 1], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm22", partition: 4, Numerator: 4, Denominator: 4, rhythm: [0, 1, 1, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm23", partition: 4, Numerator: 4, Denominator: 4, rhythm: [0, 1, 1, 1], imagePath: "", difficulty: 0, text: "" },

    { name: "rhythm24", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 0, 0, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm25", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 0, 0, 1], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm26", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 0, 1, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm27", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 0, 1, 1], imagePath: "", difficulty: 0, text: "" },

    { name: "rhythm28", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 1, 0, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm29", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 1, 0, 1], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm30", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 1, 1, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm31", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 1, 1, 1], imagePath: "", difficulty: 0, text: "" },

    //------------------------
    { name: "rhythm32", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 0, 1, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm33", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 0, 1, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm34", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 0, 1, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm35", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 0, 1, 0], imagePath: "", difficulty: 0, text: "" },
    { name: "rhythm36", partition: 4, Numerator: 4, Denominator: 4, rhythm: [1, 0, 1, 0], imagePath: "", difficulty: 0, text: "" },
];


//キー入力の判定を行う関数--------------------------------------
function btnOn() {

    //難易度の設定を取得する
    safeTime = (beat / 96) * 10;

    //レイテンシーの設定を取得する
    latency = Number(document.getElementById('latency').value);

    //リズムを叩いた時刻を取得
    creationTimeStamp = performance.now();

    //タイミングを判定するための値
    judgementTime = mod((creationTimeStamp - latency - startTime), beat);

    //タイミングを判定する
    if (judgementTime <= safeTime) {
        //OK範囲内でハシっていた場合
        result = `OK！ +${roundToThree(judgementTime)}ms `;
    } else if (mod(judgementTime + safeTime, beat) <= safeTime) {
        //OK範囲内でモタっていた場合
        result = `OK！ ${roundToThree(judgementTime - beat)}ms`;

    } else if (judgementTime <= safeTime + ((beat / 96) * 48)) {
        //BAD範囲内でハシっていた場合
        result = `BAD！ +${roundToThree(judgementTime)}ms `;
    } else if (mod(judgementTime + (safeTime + ((beat / 96) * 48)), beat) <= safeTime) {
        //BAD範囲内でモタっていた場合
        result = `BAD！${roundToThree(judgementTime - beat)}ms`;
    } else {
        //かなりBAD
        result = `BAD！`;
    };

    if (startTime !== null) {
        //結果を表示する
        document.getElementById('result').innerHTML = result;
    };
};

//キー入力のイベントリスナー--------------------------------------
window.addEventListener('keydown', event => {
    //スペースキーでリズムのスタートとストップをする
    if (event.code === 'Space' && startTime !== null) {
        rhythmStop();
    } else if (event.code === 'Space') {
        metronomeStart();
    } else {
        btnOn();
    };
    //リズムパッドにフォーカスする
    document.getElementById('rhythmPad').focus();
});
