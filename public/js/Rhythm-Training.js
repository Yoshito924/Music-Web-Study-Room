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


//リズムの情報を格納した配列
let rhythmNoteArray = [];
//クリックの情報を格納した配列
let clickArray = [];

//音符の種類を格納した配列
let rhythmNoteCharacter;
let rhythmRestCharacter;

//クリックテーブルの表示/非表示
let clickVisualStatus = 1;
function clickVisualControl() {
    if (clickVisualStatus === 0) {
        //クリックを非表示
        document.getElementById("click").classList.remove("invisible");
        document.getElementById("click_table").classList.remove("invisible");
        clickVisualStatus = 1;
    } else if (clickVisualStatus === 1) {
        //クリックを表示
        document.getElementById("click").classList.add("invisible");
        document.getElementById("click_table").classList.add("invisible");
        clickVisualStatus = 0;
    };
};

//値を切り替えたときの処理をする関数
function rhythmChange() {
    //拍子を取得する
    let Numerator_value = Number(document.getElementById('TimeSignature').value);
    document.getElementById('Numerator').innerHTML = Numerator_value;
    //クリックの配列を作成して全て0で満たす。
    clickArray = Array(Numerator_value).fill(0);
    //テーブルを作成する
    clickCreate(Numerator_value);
    //音符の種類を取得する
    let NoteCharacter = Number(document.getElementById('NoteCharacter').value);
    let noteCount = (NoteCharacter / 4) * Numerator_value;
    //リズムの配列を作成して全て0で満たす。
    rhythmNoteArray = Array(noteCount).fill(0);
    //テーブルを作成する
    rhythmCreate(noteCount, NoteCharacter);
    rhythmStop();
};

let saisei;
//値を切り替えたときの処理をする関数
function soundChange() {

    //再生中なら
    if (startTime !== null) {
        saisei = true;
    } else {
        saisei = false;
    }
    //拍子を取得する
    let Numerator_value = Number(document.getElementById('TimeSignature').value);
    document.getElementById('Numerator').innerHTML = Numerator_value;
    //テーブルを作成する
    clickCreate(Numerator_value);

    //音符の種類を取得する
    let NoteCharacter = Number(document.getElementById('NoteCharacter').value);
    let noteCount = (NoteCharacter / 4) * Numerator_value;
    //テーブルを作成する
    rhythmCreate(noteCount, NoteCharacter);

    rhythmSoundAndVolume();
    rhythmStop();
    if (saisei === true) {
        rhythmStart();
    };
};


//リズムの音符と休符を切り替える関数
function rhythmNoteChange(Num) {
    if (NoteOrRest === 0) {
        document.getElementById(`rhythm_count${Num}`).innerHTML = `${Num}<br><font size="6">${rhythmRestCharacter}</font>`
        NoteOrRest = 1;
        rhythmNoteArray.splice(Num - 1, 1, 1);
    } else if (NoteOrRest === 1) {
        document.getElementById(`rhythm_count${Num}`).innerHTML = `${Num}<br><font size="6">${rhythmNoteCharacter}</font>`
        NoteOrRest = 0;
        rhythmNoteArray.splice(Num - 1, 1, 0);
    };
};

//音のミュートON/OFFをするスイッチ
function rhythmSwitch(Num) {
    if (SoundOnOff[Num] === 0) {
        SoundOnOff[Num] = 1;
        document.getElementById(`SoundOnOff_${Num}`).innerHTML = "volume_up";
    } else if (SoundOnOff[Num] === 1) {
        SoundOnOff[Num] = 0;
        document.getElementById(`SoundOnOff_${Num}`).innerHTML = "volume_off";
    };
    soundChange();
};

//鳴らす音を格納する変数
let head;
let rhythm;
let click;

//リズムの音の種類とヴォリュームを管理する関数
function rhythmSoundAndVolume() {
    //ボリュームを管理するための値を取得する
    master_volume = Number(document.getElementById('master_volume').value) / 10;
    //各種類の音の種類の情報を格納する
    let head_sound = Number(document.getElementById('head_sound').value);
    let rhythm_sound = Number(document.getElementById('rhythm_sound').value);
    let click_sound = Number(document.getElementById('click_sound').value);
    //各種類の音のボリュームを調整する
    head = clickSoundArrayLead[head_sound];
    head.volume = master_volume * SoundOnOff[0];
    rhythm = clickSoundArray1[rhythm_sound];
    rhythm.volume = master_volume * SoundOnOff[1];
    click = clickSoundArray2[click_sound];
    click.volume = master_volume * SoundOnOff[2];
};

let Numerator_value = Number(document.getElementById('TimeSignature').value);
let NoteCharacter = Number(document.getElementById('NoteCharacter').value);
let singleNote;

//クリックのテーブルを描画する関数
function clickCreate(clickNum) {
    //行を一旦、分割テーブルを空にする
    document.getElementById("click").innerHTML = ""
    //表示するクリックの種類を決定する
    let clickNoteCharacter = MusicalNoteArray[0][2];
    //カウント数のテーブル要素を作成
    clickNum = clickArray.length;
    for (let i = 0; i < clickArray.length; i++) {
        document.getElementById("click").
            insertAdjacentHTML('afterbegin', `<th id="click${clickNum}">${clickNum}<br><font size="6">${clickNoteCharacter}</font></th>`);
        clickNum--
    };
};

//リズムのテーブルを描画する関数
function rhythmCreate(rhythmNum, NoteCharacter) {
    //一旦、テーブルを空にする
    document.getElementById("rhythm_count").innerHTML = ""
    //表示する音符と休符の種類を決定する
    if (NoteCharacter === 2) {
        rhythmNoteCharacter = MusicalNoteArray[0][1];
        rhythmRestCharacter = MusicalNoteArray[1][1];
    } else if (NoteCharacter === 4) {
        rhythmNoteCharacter = MusicalNoteArray[0][2];
        rhythmRestCharacter = MusicalNoteArray[1][2];
    } else if (NoteCharacter === 8) {
        rhythmNoteCharacter = MusicalNoteArray[0][3];
        rhythmRestCharacter = MusicalNoteArray[1][3];
    } else if (NoteCharacter === 16) {
        rhythmNoteCharacter = MusicalNoteArray[0][4];
        rhythmRestCharacter = MusicalNoteArray[1][4];
    } else {
        rhythmNoteCharacter = MusicalNoteArray[0][0];
        rhythmRestCharacter = MusicalNoteArray[1][0];
    };
    //テーブル要素を作成
    for (let i = 0; i < rhythmNoteArray.length; i++) {
        if (rhythmNoteArray[rhythmNum - 1] === 0) {
            document.getElementById("rhythm_count").
                insertAdjacentHTML('afterbegin', `<th id="rhythm_count${rhythmNum}" onclick="rhythmNoteChange(${rhythmNum})">${rhythmNum}<br><font size="6">${rhythmNoteCharacter}</font></th>`);
        } else if (rhythmNoteArray[rhythmNum - 1] === 1) {
            document.getElementById("rhythm_count").
                insertAdjacentHTML('afterbegin', `<th id="rhythm_count${rhythmNum}" onclick="rhythmNoteChange(${rhythmNum})">${rhythmNum}<br><font size="6">${rhythmRestCharacter}</font></th>`);
        };
        rhythmNum--
    };
};


//リズムを再生する関数
function rhythmPlayer() {
    singleNote = (NoteCharacter / 4) * Numerator_value;
    //クリックテーブルの色付け
    if (mod(rhythmCountNum, NoteCharacter / 4) === 0) {
        if (mod(clickCountNum, Numerator_value) === 0) {
            clickCountNum = 0;
            //クリックテーブル（拍頭）の色付け
            document.getElementById(`click${Math.trunc(clickCountNum) + 1}`).classList.add("bg-green-300");
            document.getElementById(`click${Numerator_value}`).classList.remove("bg-green-300");
        } else {
            //クリックテーブルの色付け
            document.getElementById(`click${Math.trunc(clickCountNum) + 1}`).classList.add("bg-green-300");
            document.getElementById(`click${Math.trunc(clickCountNum)}`).classList.remove("bg-green-300");
        };
        clickCountNum++
        click.currentTime = 0;
        click.play();
    };
    //（拍頭）を再生する
    if (mod(rhythmCountNum, singleNote) === 0) {
        //小節の先頭の音を鳴らす
        head.currentTime = 0;
        head.play();
        rhythmCountNum = 0;
        if (rhythmNoteArray[Math.trunc(Math.trunc(rhythmCountNum))] === 0) {
            //リズムの音を鳴らす
            rhythm.currentTime = 0;
            rhythm.play();
        };
        //リズム（拍頭）の色付け
        document.getElementById(`rhythm_count${Math.trunc(rhythmCountNum) + 1}`).classList.add("bg-red-300");
        document.getElementById(`rhythm_count${singleNote}`).classList.remove("bg-red-300");
    };
    if (mod(rhythmCountNum, singleNote) !== 0) {
        //リズムの再生する
        if (rhythmNoteArray[Math.trunc(Math.trunc(rhythmCountNum))] === 0) {
            //リズムの音を鳴らす
            rhythm.currentTime = 0;
            rhythm.play();
        };
        //リズムの色付け
        document.getElementById(`rhythm_count${Math.trunc(rhythmCountNum) + 1}`).classList.add("bg-red-300");
        document.getElementById(`rhythm_count${Math.trunc(rhythmCountNum)}`).classList.remove("bg-red-300");
    };
    //JavaScriptの割り算の演算結果の誤差をごまかすために、最後に「0.0001」を足す。
    rhythmCountNum++;
};

//ページがロードされたときに関数initを実行するイベントリスナーを設定する
window.addEventListener('load', init, false);

//変数contextを定義する
let context;

//AudioContextを作成する関数
function init() {
    try {
        //webkitプレフィックスをつける。（WebKit使用のブラウザに対応するため）
        window.AudioContext
            = window.AudioContext || window.webkitAudioContext;
        //AudioContextを生成する
        context = new AudioContext();
        console.log('init!');
    } catch (e) {
        //try内の処理がエラーの場合、それをユーザーに伝える。
        alert('このブラウザではWeb Audio APIはサポートされていません。');
    };
};


//メトロノームの再生を開始する関数--------------------------------------
function rhythmStart() {
    //メトロノームの再生を停止する関数
    rhythmStop();
    //再生中ならreturn
    if (startTime !== null) {
        return;
    };
    //リズムの音の種類とヴォリュームを管理する関数
    rhythmSoundAndVolume();

    //BPMの値を取得
    input_bpm = Number(document.getElementById('input_bpm').value);
    //一拍の長さ(ms)を計算
    beat = 60000 / input_bpm;
    //-------------------------------------------
    Numerator_value = Number(document.getElementById('TimeSignature').value);
    NoteCharacter = Number(document.getElementById('NoteCharacter').value);
    singleNote = (NoteCharacter / 4) * Numerator_value;
    //クリックを刻む分音符の細かさを指定
    clickNote = beat / (NoteCharacter / 4);

    //----------------------------------------------------------------
    // ページを開いてからの時刻-現在時刻（秒）
    let baseTimeStamp = performance.now();
    let gosa = 0;
    //クリックを一定間隔ごとに再生し、再生状態をタイマーIDに代入
    // timerId = setInterval(rhythmPlayer, clickNote);
    let countNum = 1;
    // クリックを一定間隔ごとに再生し、再生状態をタイマーIDに代入
    timerId = setTimeout(function main() {
        // console.log(`誤差：${gosa / countNum}`);
        // console.log(clickNote - (gosa / countNum));
        gosa = (performance.now() - baseTimeStamp) % clickNote;
        timerId = setTimeout(main, clickNote - (gosa / countNum));
        countNum++
        // メインの処理
        rhythmPlayer();
    }, clickNote);

    //-------------------------------------------
    //再生・停止ボタンを一度消す
    document.getElementById("playerButton").innerHTML = "";
    //ボタンを再生中(停止ボタン)に切り替える。
    document.getElementById("playerButton").insertAdjacentHTML('afterbegin',
        `<button id = "rhythmStopBtn" class= "bg-red-700 text-white py-2 px-8 rounded"
            onclick = " rhythmStop()" >
                <span class="material-icons align-text-bottom">
                    pause
                </span>
        </button> `);
    //再生のスタート時刻を取得し、変数に代入する(ページをロードしてからの現在時間を取得)
    startTime = performance.now();
};

let rhythmCountNum = 0;
let clickCountNum = 0;
let timeoutId;

//メトロノームの再生を停止する関数--------------------------------------
function rhythmStop() {
    //各種パラメーターをリセットする
    rhythmCountNum = 0;
    clickCountNum = 0;
    //setIntervalを停止する
    clearInterval(timerId);
    clearInterval(timeoutId);
    startTime = null;

    //拍子を取得する
    let Numerator_value = Number(document.getElementById('TimeSignature').value);
    document.getElementById('Numerator').innerHTML = Numerator_value;
    //テーブルを作成する
    clickCreate(Numerator_value);

    //音符の種類を取得する
    let NoteCharacter = Number(document.getElementById('NoteCharacter').value);
    let noteCount = (NoteCharacter / 4) * Numerator_value;
    //テーブルを作成する
    rhythmCreate(noteCount, NoteCharacter);

    //再生・停止ボタンを一度消す
    document.getElementById("playerButton").innerHTML = "";
    //停止ボタンを描画する
    document.getElementById("playerButton").insertAdjacentHTML('afterbegin',
        `<button button id = "rhythmStartBtn" class= "bg-blue-700 text-white py-2 px-8 rounded"
            onclick = " rhythmStart()" >
                <span class="material-icons align-text-bottom">
                    play_arrow
                </span>
        </button> `);
};


