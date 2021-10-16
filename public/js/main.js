'use strict';

//常に正の数の答えを返す剰余演算をする関数 (負の数の剰余演算を処理するため)
function mod(n, m) {
    return ((n % m) + m) % m;
};

// 四捨五入して小数点第3位までを表示する関数 (JavaScriptには元からそういう関数が無いっぽいので)
function roundToThree(num) {
    return +(Math.round(num + "e+3") + "e-3");
};

//2つの整数の最小公倍数を求める関数--------------------------------------
function lcm(a, b) {
    let g = (n, m) => m ? g(m, n % m) : n
    return a * b / g(a, b)
};

//2つの整数の最大公約数を求める関数--------------------------------------
function gcd(a, b) {
    if (b === 0) {
        return a
    }
    return gcd(b, a % b)
};

//鳴らす音を定義する--------------------------------------
let voice1 = new Audio('./Audio/female_1.mp3');
let clave1 = new Audio('./Audio/clave.mp3');
let conga8081 = new Audio('./Audio/conga808.mp3');
let HiHat1 = new Audio('./Audio/HiHat.mp3');
let clap1 = new Audio('./Audio/handClap.mp3');
let cowbell1 = new Audio('./Audio/cowbell_mid.mp3');
let kick1 = new Audio('./Audio/Abletunes FBD Taster - Bassdrum 01.mp3');
let digital1 = new Audio('./Audio/edm-perc-15.mp3');
let click1 = new Audio('./Audio/edm-perc-26.mp3');
let PowerVoice1 = new Audio('./Audio/naiki_voice_1.mp3');

let voice2 = new Audio('./Audio/female_1.mp3');
let clave2 = new Audio('./Audio/clave.mp3');
let conga8082 = new Audio('./Audio/conga808.mp3');
let HiHat2 = new Audio('./Audio/HiHat.mp3');
let clap2 = new Audio('./Audio/handClap.mp3');
let cowbell2 = new Audio('./Audio/cowbell_mid.mp3');
let kick2 = new Audio('./Audio/Abletunes FBD Taster - Bassdrum 01.mp3');
let digital2 = new Audio('./Audio/edm-perc-15.mp3');
let click2 = new Audio('./Audio/edm-perc-26.mp3');
let PowerVoice2 = new Audio('./Audio/naiki_voice_1.mp3');

let voiceLead = new Audio('./Audio/female_1.mp3');
let claveLead = new Audio('./Audio/clave.mp3');
let conga808Lead = new Audio('./Audio/conga808.mp3');
let HiHatLead = new Audio('./Audio/HiHat.mp3');
let clapLead = new Audio('./Audio/handClap.mp3');
let cowbellLead = new Audio('./Audio/cowbell_mid.mp3');
let kickLead = new Audio('./Audio/Abletunes FBD Taster - Bassdrum 01.mp3');
let digitalLead = new Audio('./Audio/edm-perc-15.mp3');
let clickLead = new Audio('./Audio/edm-perc-26.mp3');
let PowerVoiceLead = new Audio('./Audio/naiki_voice_1.mp3');

let voiceLCM = new Audio('./Audio/female_1.mp3');
let claveLCM = new Audio('./Audio/clave.mp3');
let conga808LCM = new Audio('./Audio/conga808.mp3');
let HiHatLCM = new Audio('./Audio/HiHat.mp3');
let clapLCM = new Audio('./Audio/handClap.mp3');
let cowbellLCM = new Audio('./Audio/cowbell_mid.mp3');
let kickLCM = new Audio('./Audio/Abletunes FBD Taster - Bassdrum 01.mp3');
let digitalLCM = new Audio('./Audio/edm-perc-15.mp3');
let clickLCM = new Audio('./Audio/edm-perc-26.mp3');
let PowerVoiceLCM = new Audio('./Audio/naiki_voice_1.mp3');

const clickSoundArray1
    = [voice1,
        clave1,
        conga8081,
        HiHat1,
        clap1,
        cowbell1,
        kick1,
        digital1,
        click1,
        PowerVoice1,
    ];

const clickSoundArray2
    = [voice2,
        clave2,
        conga8082,
        HiHat2,
        clap2,
        cowbell2,
        kick2,
        digital2,
        click2,
        PowerVoice2,
    ];

const clickSoundArrayLead
    = [voiceLead,
        claveLead,
        conga808Lead,
        HiHatLead,
        clapLead,
        cowbellLead,
        kickLead,
        digitalLead,
        clickLead,
        PowerVoiceLead,
    ];

const clickSoundArrayLCM
    = [voiceLCM,
        claveLCM,
        conga808LCM,
        HiHatLCM,
        clapLCM,
        cowbellLCM,
        kickLCM,
        digitalLCM,
        clickLCM,
        PowerVoiceLCM,
    ];

//音符の種類を格納した配列
const MusicalNoteArray = [
    ["●",
        `<img src="./image/note/harfNote.svg" alt="2分音符" title="2分音符 "class="note_image">`,
        `<img src="./image/note/quarterNote.svg" alt="4分音符" title="4分音符 "class="note_image">`,
        `<img src="./image/note/8thNote.svg" alt="8分音符" title="8分音符 "class="note_image">`,
        `<img src="./image/note/16thNote.svg" alt="16分音符" title="16分音符 "class="note_image">`,
        `<img src="./image/note/32ndNote.svg" alt="32分音符" title="32分音符 "class="note_image">`,
        `<img src="./image/note/64thNote.svg" alt="64分音符" title="64分音符 "class="note_image">`,],
    ["○",
        `<img src="./image/note/harfRest.svg" alt="2分休符" title="2分休符 "class="note_image">`,
        `<img src="./image/note/quarterRest.svg" alt="4分休符" title="4分休符 "class="note_image">`,
        `<img src="./image/note/8thRest.svg" alt="8分休符" title="8分休符 "class="note_image">`,
        `<img src="./image/note/16thRest.svg" alt="16分休符" title="16分休符 "class="note_image">`,
        `<img src="./image/note/32ndRest.svg" alt="32分休符" title="32分休符 "class="note_image">`,
        `<img src="./image/note/64thRest.svg" alt="64分休符" title="64分休符 "class="note_image">`,],
];

//クリック音のミュートON/OFFの値を格納する変数
let SoundOnOff = [1, 1, 0];
//ポリリズム・メトロノームのクリック音のミュートON/OFFの値を格納する変数
let OnOff = [1, 1, 1, 1];

//--------------------------------------
let input_bpm; //BPMの値を格納する変数
let beat;  //1拍の長さを格納する変数
let startTime = null;  //スタート時刻を格納する変数
let timerId; //タイマーID

let clickNote; //クリックの細かさ
let divisionClickNote; //クリックの細かさ
let master_volume; //マスターボリューム

//拍子分子の値を格納する変数
let TimeSignatureNumerator;
//拍子分母の値を格納する変数
let TimeSignatureDenominator;
//分割する数の値を格納する変数
let division_number = 0;

//分割する数×拍子分子の値を格納する変数
let division;

//--------------------------------------
//画面の表示を切り替える関数
let windowStatus = 0;
function windowControl() {

    if (windowStatus === 0) {
        //拡大ウィンドウへ変更
        document.getElementById("main_block").classList.remove("xl:flex");
        document.getElementById("left_block").classList.remove("xl:w-8/12");
        document.getElementById("right_block").classList.remove("xl:w-3/12");
        document.getElementById("left_block").classList.add("xl:w-1/1");
        document.getElementById("right_block").classList.add("xl:w-1/1");

        document.getElementById("windowButton").innerHTML = "";
        document.getElementById("windowButton").insertAdjacentHTML('afterbegin',
            `<button id="metronomeStopBtn" class="bg-gray-700 text-white py-2 px-8 rounded"
            onclick=" windowControl()">
                縮小表示
        </button>`);
        windowStatus = 1;
    } else if (windowStatus === 1) {
        //通常ウィンドウへ戻す
        document.getElementById("main_block").classList.add("xl:flex");
        document.getElementById("left_block").classList.add("xl:w-8/12");
        document.getElementById("right_block").classList.add("xl:w-3/12");
        document.getElementById("left_block").classList.remove("xl:w-1/1");
        document.getElementById("right_block").classList.remove("xl:w-1/1");
        //ボタンを切り替える。
        document.getElementById("windowButton").innerHTML = "";
        document.getElementById("windowButton").insertAdjacentHTML('afterbegin',
            `<button id="metronomeStopBtn" class="bg-gray-600 text-white py-2 px-8 rounded"
            onclick=" windowControl()">
                拡大表示
        </button>`);
        windowStatus = 0;
    };
};

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//クリックのオンオフ状態を格納する関数
let noteArray;
//分割クリックのオンオフ状態を格納する関数
let divisionNoteArray

//クリック情報を格納した配列を作る関数
function arrayCreate() {
    //拍子分子の値を取得
    TimeSignatureNumerator = Number(document.getElementById('TimeSignatureNumerator').value);

    //分割する数の値を取得
    division_number = Number(document.getElementById('division_number').value);
    division = division_number * TimeSignatureNumerator;

    //クリックの配列を作成して全て0で満たす。
    noteArray = Array(TimeSignatureNumerator).fill(0);
    divisionNoteArray = Array(division).fill(0);
};

//メトロノームの再生を開始する関数--------------------------------------
function metronomeStart() {

    //メトロノームの再生を停止する関数
    metronomeStop();

    //再生中ならreturn
    if (startTime !== null) {
        return;
    };

    //メトロノームのヴォリュームと音の種類を管理する関数
    metronomeSoundAndVolume()

    //拍子分母の値を取得
    TimeSignatureDenominator = Number(document.getElementById('TimeSignatureDenominator').value);
    document.getElementById('Denominator').innerHTML = `${TimeSignatureDenominator}`;

    //拍子分子の値を取得
    TimeSignatureNumerator = Number(document.getElementById('TimeSignatureNumerator').value);
    document.getElementById('Numerator').innerHTML = `${TimeSignatureNumerator}`;

    let Num = TimeSignatureNumerator;

    //クリックのテーブルを描画する関数
    countCreate(Num);

    //分割する数の値を取得
    division_number = Number(document.getElementById('division_number').value);
    division = division_number * TimeSignatureNumerator;
    let divisionNum = division;

    //連符分割クリックのテーブルを描画する関数
    divisionCreate(divisionNum, TimeSignatureDenominator, TimeSignatureNumerator);

    division = division_number * TimeSignatureNumerator;

    //BPMの値を取得
    input_bpm = Number(document.getElementById('input_bpm').value);

    //一拍の長さ(ms)を計算
    beat = 60000 / input_bpm;

    //-------------------------------------------
    //クリックを刻む分音符の細かさを指定
    clickNote = beat / ((TimeSignatureDenominator / 4) * division_number);

    //クリックを一定間隔ごとに再生し、再生状態をタイマーIDに代入
    timerId = setInterval(clickPlayer, clickNote);

    //-------------------------------------------
    //ボタンを再生中(停止ボタン)に切り替える。
    document.getElementById("playerButton").innerHTML = "";
    document.getElementById("playerButton").insertAdjacentHTML('afterbegin',
        `<button id="metronomeStopBtn" class="bg-red-700 text-white py-2 px-8 rounded"
            onclick=" metronomeStop()">
            <span class="material-icons align-text-bottom">
                pause
            </span>
        </button>`);

    //再生のスタート時刻を取得し、変数に代入する(ページをロードしてからの現在時間を取得)
    startTime = performance.now();
};

//メトロノームの再生を停止する関数--------------------------------------
function metronomeStop() {
    //各種パラメーターをリセットする
    Count = 0;
    countNum = 0;
    divisionCountNum = 0;

    //setIntervalを停止する
    clearInterval(timerId);
    startTime = null;

    //再生・停止ボタンを一度消す
    document.getElementById("playerButton").innerHTML = "";
    //停止ボタンを描画する
    document.getElementById("playerButton").insertAdjacentHTML('afterbegin',
        `<button id="metronomeStartBtn" class="bg-blue-700 text-white py-2 px-8 rounded"
            onclick=" metronomeStart()">
            <span class="material-icons align-text-bottom">
                play_arrow
            </span>
        </button>`);
};

//クリックの音を再生するためのカウントを格納する変数
let Count = 0;
let countNum = 0;
let divisionCountNum = 0;

let click_lead_sound;
let click_1_sound;
let click_2_sound;

let click_lead;
let click_1;
let click_2;

//メトロノームのヴォリュームと音の種類を管理する関数
function metronomeSoundAndVolume() {
    //ボリュームを管理するための値を取得する
    master_volume = Number(document.getElementById('master_volume').value) / 10;
    //各種類の音の種類の情報を格納する
    click_lead_sound = Number(document.getElementById('click_lead_sound').value);
    click_1_sound = Number(document.getElementById('click_1_sound').value);
    click_2_sound = Number(document.getElementById('click_2_sound').value);
    //各種類の音のボリュームを調整する
    click_lead = clickSoundArrayLead[click_lead_sound];
    click_lead.volume = master_volume * SoundOnOff[0];
    click_1 = clickSoundArray1[click_1_sound];
    click_1.volume = master_volume * SoundOnOff[1];
    click_2 = clickSoundArray2[click_2_sound];
    click_2.volume = master_volume * SoundOnOff[2];
};


//クリックの音を再生する関数--------------------------------------
function clickPlayer() {
    //メインのクリックに合わせて分割テーブルの色付け
    if (mod(Math.trunc(countNum), TimeSignatureNumerator) === 0 || countNum > TimeSignatureNumerator) {
        //カウントをリセット
        if (mod(countNum, TimeSignatureNumerator) === 0 || countNum > TimeSignatureNumerator) {
            countNum = 0;
        };
        //テーブル（拍頭）の色付け
        document.getElementById(`click_count${Math.trunc(countNum) + 1}`).classList.add("bg-red-300");
        document.getElementById(`click_count${TimeSignatureNumerator}`).classList.remove("bg-red-300");
    } else {
        //テーブルの色付け
        document.getElementById(`click_count${Math.trunc(countNum) + 1}`).classList.add("bg-red-300");
        document.getElementById(`click_count${Math.trunc(countNum)}`).classList.remove("bg-red-300");
    };
    //クリック（拍頭）を再生する
    if (mod(Count, division) === 0) {
        //カウントをリセット
        Count = 0;
        divisionCountNum = 1;
        if (noteArray[Math.trunc(countNum)] === 0) {
            //クリック（拍頭）の音を鳴らす
            click_1.currentTime = 0;
            click_1.play();
        };

        if (divisionNoteArray[Math.trunc(countNum)] === 0) {
            //分割クリック（拍頭）の音を鳴らす
            click_2.currentTime = 0;
            click_2.play();
        };
        //クリック（拍頭）の音を鳴らす
        click_lead.currentTime = 0;
        click_lead.play();

        //分割テーブル（拍頭）の色付け
        document.getElementById(`division_count${divisionCountNum}`).classList.add("bg-green-300");
        document.getElementById(`division_count${division}`).classList.remove("bg-green-300");
    };
    //クリックを再生する
    if (mod(Count, division_number) === 0) {
        if (noteArray[Math.trunc(countNum)] === 0) {
            //クリックの音を鳴らす
            click_1.currentTime = 0;
            click_1.play();
        };
    };
    //分割クリックを再生する
    if (mod(Count, division) !== 0) {
        if (divisionNoteArray[Math.trunc(countNum)] === 0) {
            //分割クリックの音を鳴らす
            click_2.currentTime = 0;
            click_2.play();
        };
        //分割テーブルの色付け
        document.getElementById(`division_count${divisionCountNum}`).classList.add("bg-green-300");
        document.getElementById(`division_count${divisionCountNum - 1}`).classList.remove("bg-green-300");
    };
    //JavaScriptの割り算の演算結果の誤差をごまかすために、最後に「0.0001」を足す。
    countNum = countNum + (1 / division_number) + 0.0001;
    divisionCountNum++
    Count++
};

let NoteOrRest = 0;
let divisionNoteOrRest = 0;
//音符と休符を切り替える関数
function noteChange(Num) {
    if (NoteOrRest === 0) {
        document.getElementById(`click_count${Num}`).innerHTML = `${Num}<br><font size="6">${restCharacter}</font>`
        NoteOrRest = 1;
        noteArray.splice(Num - 1, 1, 1);
    } else if (NoteOrRest === 1) {
        document.getElementById(`click_count${Num}`).innerHTML = `${Num}<br><font size="6">${noteCharacter}</font>`
        NoteOrRest = 0;
        noteArray.splice(Num - 1, 1, 0);
    };
};

//音符と休符を切り替える関数
function divisionNoteChange(divisionNum) {
    if (divisionNoteOrRest === 0) {
        document.getElementById(`division_count${divisionNum}`).innerHTML = `${divisionNum}<br><font size="2">${divisionRestCharacter}</font>`
        divisionNoteOrRest = 1;
        divisionNoteArray.splice(divisionNum - 1, 1, 1);
    } else if (divisionNoteOrRest === 1) {
        document.getElementById(`division_count${divisionNum}`).innerHTML = `${divisionNum}<br><font size="2">${divisionNoteCharacter}</font>`
        divisionNoteOrRest = 0;
        divisionNoteArray.splice(divisionNum - 1, 1, 0);
    };
};

//音符の種類を格納する変数
let noteCharacter = MusicalNoteArray[0][2];
//休符の種類を格納する変数
let restCharacter = MusicalNoteArray[1][2];
//クリックのテーブルを描画する関数
function countCreate(Num) {
    //行を一旦、空にする
    document.getElementById("click_count").innerHTML = ""

    TimeSignatureDenominator = Number(document.getElementById('TimeSignatureDenominator').value);
    //表示する音符と休符の種類を決定する
    if (TimeSignatureDenominator === 2) {
        noteCharacter = MusicalNoteArray[0][1];
        restCharacter = MusicalNoteArray[1][1];
    } else if (TimeSignatureDenominator === 4) {
        noteCharacter = MusicalNoteArray[0][2];
        restCharacter = MusicalNoteArray[1][2];
    } else if (TimeSignatureDenominator === 8) {
        noteCharacter = MusicalNoteArray[0][3];
        restCharacter = MusicalNoteArray[1][3];
    } else if (TimeSignatureDenominator === 16) {
        noteCharacter = MusicalNoteArray[0][4];
        restCharacter = MusicalNoteArray[1][4];
    } else if (TimeSignatureDenominator === 32) {
        noteCharacter = MusicalNoteArray[0][5];
        restCharacter = MusicalNoteArray[1][5];
    } else if (TimeSignatureDenominator === 64) {
        noteCharacter = MusicalNoteArray[0][6];
        restCharacter = MusicalNoteArray[1][6];
    } else {
        noteCharacter = MusicalNoteArray[0][0];
        restCharacter = MusicalNoteArray[1][0];
    };
    //カウント数のテーブル要素を作成
    for (let i = 0; i < noteArray.length; i++) {
        if (noteArray[Num - 1] === 0) {
            document.getElementById("click_count").
                insertAdjacentHTML('afterbegin', `<th id="click_count${Num}" class="click_able" onclick="noteChange(${Num})">${Num}<br><font size="6">${noteCharacter}</font></th>`);
        } else if (noteArray[Num - 1] === 1) {
            document.getElementById("click_count").
                insertAdjacentHTML('afterbegin', `<th id="click_count${Num}" class="click_able" onclick="noteChange(${Num})">${Num}<br><font size="6">${restCharacter}</font></th>`);
        };
        Num--
    };
};

//音符の種類を格納する変数
let divisionNoteCharacter = MusicalNoteArray[0][0];
//休符の種類を格納する変数
let divisionRestCharacter = MusicalNoteArray[1][0];

//分割クリックのテーブルを描画する関数
function divisionCreate(divisionNum, TimeSignatureDenominator, TimeSignatureNumerator) {
    //行を一旦、分割テーブルを空にする
    document.getElementById("division_count").innerHTML = ""

    //表示する音符と休符の種類を決定する
    if (divisionNum * TimeSignatureDenominator / TimeSignatureNumerator === 2) {
        divisionNoteCharacter = MusicalNoteArray[0][1];
        divisionRestCharacter = MusicalNoteArray[1][1];
    } else if (divisionNum * TimeSignatureDenominator / TimeSignatureNumerator === 4) {
        divisionNoteCharacter = MusicalNoteArray[0][2];
        divisionRestCharacter = MusicalNoteArray[1][2];
    } else if (divisionNum * TimeSignatureDenominator / TimeSignatureNumerator === 8) {
        divisionNoteCharacter = MusicalNoteArray[0][3];
        divisionRestCharacter = MusicalNoteArray[1][3];
    } else if (divisionNum * TimeSignatureDenominator / TimeSignatureNumerator === 16) {
        divisionNoteCharacter = MusicalNoteArray[0][4];
        divisionRestCharacter = MusicalNoteArray[1][4];
    } else if (divisionNum * TimeSignatureDenominator / TimeSignatureNumerator === 32) {
        divisionNoteCharacter = MusicalNoteArray[0][5];
        divisionRestCharacter = MusicalNoteArray[1][5];
    } else if (divisionNum * TimeSignatureDenominator / TimeSignatureNumerator === 64) {
        divisionNoteCharacter = MusicalNoteArray[0][6];
        divisionRestCharacter = MusicalNoteArray[1][6];
    } else {
        divisionNoteCharacter = MusicalNoteArray[0][0];
        divisionRestCharacter = MusicalNoteArray[1][0];
    };
    //カウント数のテーブル要素を作成
    for (let i = 0; i < divisionNoteArray.length; i++) {
        if (divisionNoteArray[divisionNum - 1] === 0) {
            document.getElementById("division_count").
                insertAdjacentHTML('afterbegin', `<th id="division_count${divisionNum}" class="click_able" onclick="divisionNoteChange(${divisionNum})">${divisionNum}<br><font size="2">${divisionNoteCharacter}</font></th>`);
        } else if (divisionNoteArray[divisionNum - 1] === 1) {
            document.getElementById("division_count").
                insertAdjacentHTML('afterbegin', `<th id="division_count${divisionNum}" class="click_able" onclick="divisionNoteChange(${divisionNum})">${divisionNum}<br><font size="2">${divisionRestCharacter}</font></th>`);
        };
        divisionNum--
    };
};

//ボリュームなどを変える処理をする関数
function variableChange() {
    //メトロノームのヴォリュームと音の種類を管理する関数
    metronomeSoundAndVolume();
    //拍子分母の値を取得
    TimeSignatureDenominator = Number(document.getElementById('TimeSignatureDenominator').value);
    document.getElementById('Denominator').innerHTML = `${TimeSignatureDenominator}`;
    //拍子分子の値を取得
    TimeSignatureNumerator = Number(document.getElementById('TimeSignatureNumerator').value);
    document.getElementById('Numerator').innerHTML = `${TimeSignatureNumerator}`;
    let Num = TimeSignatureNumerator;
    //クリックのテーブルを描画する関数
    countCreate(Num);
    //分割する数の値を取得
    division_number = Number(document.getElementById('division_number').value);
    division = division_number * TimeSignatureNumerator;
    let divisionNum = division;
    //連符分割クリックのテーブルを描画する関数
    divisionCreate(divisionNum, TimeSignatureDenominator, TimeSignatureNumerator);
    if (division_number === 1) {
        document.getElementById(`division_count`).classList.add("invisible");
        document.getElementById(`division_count_table`).classList.add("invisible");
    } else {
        document.getElementById(`division_count`).classList.remove("invisible");
        document.getElementById(`division_count_table`).classList.remove("invisible");
    };
    //メトロノームが停止中ならreturn
    if (startTime === null) {
        return;
    };
    metronomeStart();
};

//拍子や分割する数を変える処理をする関数
function valueChange() {
    //クリック情報を格納した配列を作る関数
    arrayCreate();
    //ボリュームなどを変える場合の処理をする関数
    variableChange();
    //停止中ならreturn
    if (startTime === null) {
        //メトロノームの再生を停止する関数
        metronomeStop();
        return;
    };
    //メトロノームの再生を開始する関数
    metronomeStart();
};

//メトロノームのクリック音のミュートON/OFFをするスイッチ
function metronomeSwitch(Num) {
    if (SoundOnOff[Num] === 0) {
        SoundOnOff[Num] = 1;
        document.getElementById(`SoundOnOff_${Num}`).innerHTML = "volume_up";
    } else if (SoundOnOff[Num] === 1) {
        SoundOnOff[Num] = 0;
        document.getElementById(`SoundOnOff_${Num}`).innerHTML = "volume_off";
    };
    //ポリリズム・メトロノームの拍子や分割する数を変える処理をする関数
    valueChange();
};

//----------------ポリリズム・メトロノーム--------------------------------------------------------------------------------------------------------------------------------
//基準とするリズム情報を格納する変数
let polyrhythm_basis_Value;
//基準とする音符の種類の情報を格納する変数
let polyrhythm_basis_note;

//ポリリズムのクリック情報を格納する変数
let polyrhythm_lcm_NoteArray = [];
let polyrhythm_1_NoteArray = [];
let polyrhythm_2_NoteArray = [];

//リズム1の配列の長さを格納する変数
let polyrhythm_1_Num;
//リズム2の配列の長さを格納する変数
let polyrhythm_2_Num;
//ポリリズムの最小公倍数の長さを格納する変数
let polyrhythm_lcm_Num;

//リズム1の値を格納する変数
let polyrhythm_1_Value;
//リズム2の値を格納する変数
let polyrhythm_2_Value;

//リズム1と2の最大公約数を求める
let polyrhythm_gcd;
//リズム1と2の最小公倍数を求める
let polyrhythm_lcm;

//ポリリズム・メトロノームのクリック情報を格納した配列を作る関数
function polyrhythm_arrayCreate() {
    //ポリリズム1の値を取得する
    polyrhythm_1_Value = Number(document.getElementById("polyrhythm_1_Value").value);
    //ポリリズム1の配列を作成する
    polyrhythm_1_NoteArray = Array(polyrhythm_1_Value).fill(0);
    polyrhythm_1_Num = polyrhythm_1_NoteArray.length;
    //ポリリズム2の値を取得する
    polyrhythm_2_Value = Number(document.getElementById("polyrhythm_2_Value").value);
    //ポリリズム2の配列を作成する
    polyrhythm_2_NoteArray = Array(polyrhythm_2_Value).fill(0);
    polyrhythm_2_Num = polyrhythm_2_NoteArray.length;
};

let polyrhythm_timerId;

//クリックの音の種類を格納する変数
let polyrhythm_lead_click;
let polyrhythm_1_click;
let polyrhythm_lcm_click;
let polyrhythm_2_click;
//クリックの音を格納する変数
let polyrhythm_lead_click_sound;
let polyrhythm_1_click_sound;
let polyrhythm_lcm_click_sound;
let polyrhythm_2_click_sound;



//ポリリズム・メトロノームのクリック音のミュートON/OFFをするスイッチ
function polyrhythm_metronomeSwitch(Num) {
    if (OnOff[Num] === 0) {
        OnOff[Num] = 1;
        document.getElementById(`OnOff_${Num}`).innerHTML = "volume_up";
    } else if (OnOff[Num] === 1) {
        OnOff[Num] = 0;
        document.getElementById(`OnOff_${Num}`).innerHTML = "volume_off";
    };
    //ポリリズム・メトロノームの拍子や分割する数を変える処理をする関数
    polyrhythm_valueChange();
};

//メトロノームのヴォリュームと音の種類を管理する関数
function polyrhythm_metronomeSoundAndVolume() {
    //ボリュームを管理するための値を取得する
    master_volume = Number(document.getElementById('master_volume').value) / 10;
    polyrhythm_lead_click_sound = Number(document.getElementById('polyrhythm_lead_click_sound').value);
    polyrhythm_1_click_sound = Number(document.getElementById('polyrhythm_1_click_sound').value);
    polyrhythm_lcm_click_sound = Number(document.getElementById('polyrhythm_lcm_click_sound').value);
    polyrhythm_2_click_sound = Number(document.getElementById('polyrhythm_2_click_sound').value);
    //各種類の音のボリュームを調整する
    polyrhythm_lead_click = clickSoundArrayLead[polyrhythm_lead_click_sound];
    polyrhythm_lead_click.volume = master_volume * OnOff[0];
    polyrhythm_1_click = clickSoundArray1[polyrhythm_1_click_sound];
    polyrhythm_1_click.volume = master_volume * OnOff[1];
    polyrhythm_lcm_click = clickSoundArrayLCM[polyrhythm_lcm_click_sound];
    polyrhythm_lcm_click.volume = master_volume * OnOff[2];
    polyrhythm_2_click = clickSoundArray2[polyrhythm_2_click_sound];
    polyrhythm_2_click.volume = master_volume * OnOff[3];
};

//ポリリズム・メトロノームの再生を開始する関数--------------------------------------
function polyrhythm_metronomeStart() {
    //メトロノームの再生を停止する関数
    polyrhythm_metronomeStop();
    //再生中ならreturn
    if (startTime !== null) {
        return;
    };
    //メトロノームのヴォリュームと音の種類を管理する関数
    polyrhythm_metronomeSoundAndVolume();
    //-------------------------------------------
    //BPMの値を取得する
    input_bpm = Number(document.getElementById('input_bpm').value);
    //一拍の長さ(ms)を計算
    beat = 60000 / input_bpm;
    //基準はリズム1か最小公倍数か選択する値を取得する
    polyrhythm_basis_Value = Number(document.getElementById("polyrhythm_basis_Value").value);
    //基準となる音符の設定の値を取得する
    polyrhythm_basis_note = Number(document.getElementById("polyrhythm_basis_note").value);
    //リズム1の値を取得する
    polyrhythm_1_Value = Number(document.getElementById("polyrhythm_1_Value").value);
    //リズム2の値を取得する
    polyrhythm_2_Value = Number(document.getElementById("polyrhythm_2_Value").value);
    //リズム1と2の最大公約数を求める
    polyrhythm_gcd = gcd(polyrhythm_1_Value, polyrhythm_2_Value);
    //リズム1と2の最小公倍数を求める
    polyrhythm_lcm = lcm(polyrhythm_1_Value, polyrhythm_2_Value);
    //基準によって条件分岐する
    if (polyrhythm_basis_Value === 0) {
        clickNote = beat / (polyrhythm_basis_note / 4);
    } else if (polyrhythm_basis_Value === 1) {
        //1拍(ms) ÷ (リズム1の値 ÷ 4) × 基準となる音符
        beat / (polyrhythm_1_Value / 4) * polyrhythm_basis_note;
        //クリックを刻む分音符の細かさを指定
        clickNote = (beat * polyrhythm_1_Value) / polyrhythm_lcm / (polyrhythm_basis_note / 4);
    };
    //-------------------------------------------
    //クリックを一定間隔ごとに再生し、再生状態をタイマーIDに代入
    polyrhythm_timerId = setInterval(polyrhythm_clickPlayer, clickNote);
    //-------------------------------------------
    //ボタンを再生中(停止ボタン)に切り替える。
    document.getElementById("polyrhythm_playerButton").innerHTML = "";
    document.getElementById("polyrhythm_playerButton").insertAdjacentHTML('afterbegin',
        `<button id="polyrhythm_metronomeStopBtn" class="bg-red-700 text-white py-2 px-8 rounded"
            onclick="polyrhythm_metronomeStop()">
                <span class="material-icons align-text-bottom">
                    pause
                </span>
        </button>`);
    //再生のスタート時刻を取得し、変数に代入する(ページをロードしてからの現在時間を取得)
    startTime = performance.now();
};

//ポリリズム・メトロノームの再生を停止する関数--------------------------------------
function polyrhythm_metronomeStop() {
    //各種パラメーターをリセットする
    p_Count = 0;
    p1_countNum = 0;
    p2_countNum = 0;
    p_Count = 0;
    //setIntervalを停止する
    clearInterval(polyrhythm_timerId);
    startTime = null;

    rhythm1Create();
    rhythm2Create();
    lcmCreate();
    //再生・停止ボタンを一度消す
    document.getElementById("polyrhythm_playerButton").innerHTML = "";
    //停止ボタンを描画する
    document.getElementById("polyrhythm_playerButton").insertAdjacentHTML('afterbegin',
        `<button id="polyrhythm_metronomeStartBtn" class="bg-blue-700 text-white py-2 px-8 rounded"
            onclick="polyrhythm_metronomeStart()">
                <span class="material-icons align-text-bottom">
                    play_arrow
                </span>
        </button>`);
};


//クリックの音を再生するためのカウントを格納する変数
let p_Count = 0;
let p1_countNum = 0;
let p2_countNum = 0;

function polyrhythm_Value_get() {
    //リズム1か最小公倍数か
    polyrhythm_basis_Value = Number(document.getElementById("polyrhythm_basis_Value").value);
    //基準となる音符の設定の値を取得する
    polyrhythm_basis_note = Number(document.getElementById("polyrhythm_basis_note").value);

    //リズム1の値を取得する
    polyrhythm_1_Value = Number(document.getElementById("polyrhythm_1_Value").value);
    //リズム2の値を取得する
    polyrhythm_2_Value = Number(document.getElementById("polyrhythm_2_Value").value);

    //リズム1と2の最大公約数を求める
    polyrhythm_gcd = gcd(polyrhythm_1_Value, polyrhythm_2_Value);
    //リズム1と2の最小公倍数を求める
    polyrhythm_lcm = lcm(polyrhythm_1_Value, polyrhythm_2_Value);
};

//ポリリズム・メトロノームのクリックの音を再生する関数--------------------------------------
function polyrhythm_clickPlayer() {
    //メインのクリックに合わせてリズム1のテーブルを色付け
    if (mod(Math.trunc(p1_countNum), polyrhythm_1_Value) === 0 || p1_countNum > polyrhythm_1_Value) {
        //カウントをリセット
        if (mod(p1_countNum, polyrhythm_1_Value) === 0 || p1_countNum > polyrhythm_1_Value) {
            p1_countNum = 0;
        };
        //テーブル（拍頭）の色付け
        document.getElementById(`polyrhythm_1_count${Math.trunc(p1_countNum) + 1}`).classList.add("bg-red-300");
        document.getElementById(`polyrhythm_1_count${polyrhythm_1_Value}`).classList.remove("bg-red-300");
    } else {
        //テーブルの色付け
        document.getElementById(`polyrhythm_1_count${Math.trunc(p1_countNum) + 1}`).classList.add("bg-red-300");
        document.getElementById(`polyrhythm_1_count${Math.trunc(p1_countNum)}`).classList.remove("bg-red-300");
    };
    //メインのクリックに合わせてリズム2のテーブルを色付け
    if (mod(Math.trunc(p2_countNum), polyrhythm_2_Value) === 0 || p2_countNum > polyrhythm_2_Value) {
        //カウントをリセット
        if (mod(p2_countNum, polyrhythm_2_Value) === 0 || p2_countNum > polyrhythm_2_Value) {
            p2_countNum = 0;
        };
        //テーブル（拍頭）の色付け
        document.getElementById(`polyrhythm_2_count${Math.trunc(p2_countNum) + 1}`).classList.add("bg-blue-300");
        document.getElementById(`polyrhythm_2_count${polyrhythm_2_Value}`).classList.remove("bg-blue-300");
    } else {
        //テーブルの色付け
        document.getElementById(`polyrhythm_2_count${Math.trunc(p2_countNum) + 1}`).classList.add("bg-blue-300");
        document.getElementById(`polyrhythm_2_count${Math.trunc(p2_countNum)}`).classList.remove("bg-blue-300");
    };
    //クリック（拍頭）を再生する
    if (mod(p_Count, polyrhythm_lcm) === 0) {
        //カウントをリセット
        p_Count = 0;

        //クリック（拍頭）の音を鳴らす
        polyrhythm_lead_click.currentTime = 0;
        polyrhythm_lead_click.play();

        if (polyrhythm_1_NoteArray[Math.trunc(p1_countNum)] === 0) {
            //リズム2のクリックク（拍頭）の音を鳴らす
            polyrhythm_1_click.currentTime = 0;
            polyrhythm_1_click.play();
        };

        if (polyrhythm_lcm_NoteArray[Math.trunc(p_Count)] === 0) {
            //最小公倍数クリック（拍頭）の音を鳴らす
            polyrhythm_lcm_click.currentTime = 0;
            polyrhythm_lcm_click.play();
        };

        if (polyrhythm_2_NoteArray[Math.trunc(p2_countNum)] === 0) {
            //リズム2のクリックク（拍頭）の音を鳴らす
            polyrhythm_2_click.currentTime = 0;
            polyrhythm_2_click.play();
        };

        //最小公倍数テーブル（拍頭）の色付け
        document.getElementById(`polyrhythm_lcm_count${p_Count + 1}`).classList.add("bg-green-300");
        document.getElementById(`polyrhythm_lcm_count${polyrhythm_lcm}`).classList.remove("bg-green-300");
    };
    //リズム1のクリックの音を鳴らす
    if (mod(p_Count, polyrhythm_2_Value / polyrhythm_gcd) === 0) {
        if (polyrhythm_1_NoteArray[Math.trunc(p1_countNum)] === 0) {
            polyrhythm_1_click.currentTime = 0;
            polyrhythm_1_click.play();
        };
    };
    //リズム2のクリックの音を鳴らす
    if (mod(p_Count, polyrhythm_1_Value / polyrhythm_gcd) === 0) {
        if (polyrhythm_2_NoteArray[Math.trunc(p2_countNum)] === 0) {
            polyrhythm_2_click.currentTime = 0;
            polyrhythm_2_click.play();
        };
    };
    //最小公倍数クリックを再生する
    if (p_Count !== 0) {
        if (polyrhythm_lcm_NoteArray[Math.trunc(p_Count)] === 0) {
            //最小公倍数クリックの音を鳴らす
            polyrhythm_lcm_click.currentTime = 0;
            polyrhythm_lcm_click.play();
        };
        //最小公倍数テーブルの色付け
        document.getElementById(`polyrhythm_lcm_count${p_Count + 1}`).classList.add("bg-green-300");
        document.getElementById(`polyrhythm_lcm_count${p_Count}`).classList.remove("bg-green-300");
    };
    //JavaScriptの割り算の演算結果の誤差をごまかすために、最後に「0.0001」を足す。
    p1_countNum = p1_countNum + (polyrhythm_gcd / polyrhythm_2_Value) + 0.0001;
    p2_countNum = p2_countNum + (polyrhythm_gcd / polyrhythm_1_Value) + 0.0001;
    p_Count++
};

//リズム1の音符の表示を選択して書き込む関数
function polyrhythmDetermine() {
    if (polyrhythm_basis_Value === 0) {
        noteCharacter = MusicalNoteArray[0][0];
        restCharacter = MusicalNoteArray[1][0];
        //表示する音符の種類を決定する
    } else if (polyrhythm_basis_Value === 1) {
        if (polyrhythm_basis_note === 2) {
            noteCharacter = MusicalNoteArray[0][1];
            restCharacter = MusicalNoteArray[1][1];
        } else if (polyrhythm_basis_note === 4) {
            noteCharacter = MusicalNoteArray[0][2];
            restCharacter = MusicalNoteArray[1][2];
        } else if (polyrhythm_basis_note === 8) {
            noteCharacter = MusicalNoteArray[0][3];
            restCharacter = MusicalNoteArray[1][3];
        } else if (polyrhythm_basis_note === 16) {
            noteCharacter = MusicalNoteArray[0][4];
            restCharacter = MusicalNoteArray[1][4];
        } else if (polyrhythm_basis_note === 32) {
            noteCharacter = MusicalNoteArray[0][5];
            restCharacter = MusicalNoteArray[1][5];
        } else if (polyrhythm_basis_note === 64) {
            noteCharacter = MusicalNoteArray[0][6];
            restCharacter = MusicalNoteArray[1][6];
        } else {
            noteCharacter = MusicalNoteArray[0][0];
            restCharacter = MusicalNoteArray[1][0];
        };
    };
};

let polyrhythm_1_NoteOrRest = 0;
//リズム1の音符と休符を切り替える関数
function polyrhythm_1_noteChange(polyrhythm_1_Num) {
    polyrhythm_basis_note = Number(document.getElementById("polyrhythm_basis_note").value);
    polyrhythm_basis_Value = Number(document.getElementById("polyrhythm_basis_Value").value);

    //音符の表示を選択して書き込む関数
    polyrhythmDetermine();
    if (polyrhythm_1_NoteOrRest === 0) {
        document.getElementById(`polyrhythm_1_count${polyrhythm_1_Num}`).innerHTML = `${polyrhythm_1_Num}<br><font size="6">${restCharacter}</font>`
        polyrhythm_1_NoteOrRest = 1;
        polyrhythm_1_NoteArray.splice(polyrhythm_1_Num - 1, 1, 1);
    } else if (polyrhythm_1_NoteOrRest === 1) {
        document.getElementById(`polyrhythm_1_count${polyrhythm_1_Num}`).innerHTML = `${polyrhythm_1_Num}<br><font size="6">${noteCharacter}</font>`
        polyrhythm_1_NoteOrRest = 0;
        polyrhythm_1_NoteArray.splice(polyrhythm_1_Num - 1, 1, 0);
    };
};

//ポリリズム最小公倍数の音符の表示を選択して書き込む関数
function lcmDetermine() {
    if (polyrhythm_basis_Value === 1) {
        divisionNoteCharacter = MusicalNoteArray[0][0];
        divisionRestCharacter = MusicalNoteArray[1][0];
        //表示する音符の種類を決定する
    } else if (polyrhythm_basis_Value === 0) {
        if (polyrhythm_basis_note === 2) {
            divisionNoteCharacter = MusicalNoteArray[0][1];
            divisionRestCharacter = MusicalNoteArray[1][1];
        } else if (polyrhythm_basis_note === 4) {
            divisionNoteCharacter = MusicalNoteArray[0][2];
            divisionRestCharacter = MusicalNoteArray[1][2];
        } else if (polyrhythm_basis_note === 8) {
            divisionNoteCharacter = MusicalNoteArray[0][3];
            divisionRestCharacter = MusicalNoteArray[1][3];
        } else if (polyrhythm_basis_note === 16) {
            divisionNoteCharacter = MusicalNoteArray[0][4];
            divisionRestCharacter = MusicalNoteArray[1][4];
        } else if (polyrhythm_basis_note === 32) {
            divisionNoteCharacter = MusicalNoteArray[0][5];
            divisionRestCharacter = MusicalNoteArray[1][5];
        } else if (polyrhythm_basis_note === 64) {
            divisionNoteCharacter = MusicalNoteArray[0][6];
            divisionRestCharacter = MusicalNoteArray[1][6];
        } else {
            divisionNoteCharacter = MusicalNoteArray[0][0];
            divisionRestCharacter = MusicalNoteArray[1][0];
        };
    };
};

let polyrhythm_lcm_Note_NoteOrRest = 0;
//ポリリズム最小公倍数の音符と休符を切り替える関数
function polyrhythm_lcm_NoteChange(polyrhythm_lcm_Note_Num) {
    polyrhythm_basis_note = Number(document.getElementById("polyrhythm_basis_note").value);
    polyrhythm_basis_Value = Number(document.getElementById("polyrhythm_basis_Value").value);
    //ポリリズム最小公倍数の音符の表示を選択して書き込む関数
    lcmDetermine();
    if (polyrhythm_lcm_Note_NoteOrRest === 0) {
        document.getElementById(`polyrhythm_lcm_count${polyrhythm_lcm_Note_Num}`).innerHTML = `${polyrhythm_lcm_Note_Num}<br>${divisionRestCharacter}`
        polyrhythm_lcm_Note_NoteOrRest = 1;
        polyrhythm_lcm_NoteArray.splice(polyrhythm_lcm_Note_Num - 1, 1, 1);
    } else if (polyrhythm_lcm_Note_NoteOrRest === 1) {
        document.getElementById(`polyrhythm_lcm_count${polyrhythm_lcm_Note_Num}`).innerHTML = `${polyrhythm_lcm_Note_Num}<br>${divisionNoteCharacter}`
        polyrhythm_lcm_Note_NoteOrRest = 0;
        polyrhythm_lcm_NoteArray.splice(polyrhythm_lcm_Note_Num - 1, 1, 0);
    };
};


let polyrhythm_2_NoteOrRest = 0;
//リズム2の音符と休符を切り替える関数
function polyrhythm_2_noteChange(polyrhythm_2_Num) {
    polyrhythm_basis_note = Number(document.getElementById("polyrhythm_basis_note").value);
    polyrhythm_basis_Value = Number(document.getElementById("polyrhythm_basis_Value").value);
    if (polyrhythm_2_NoteOrRest === 0) {
        document.getElementById(`polyrhythm_2_count${polyrhythm_2_Num}`).innerHTML = `${polyrhythm_2_Num}<br><font size="6">${MusicalNoteArray[1][0]}</font>`
        polyrhythm_2_NoteOrRest = 1;
        polyrhythm_2_NoteArray.splice(polyrhythm_2_Num - 1, 1, 1);
    } else if (polyrhythm_2_NoteOrRest === 1) {
        document.getElementById(`polyrhythm_2_count${polyrhythm_2_Num}`).innerHTML = `${polyrhythm_2_Num}<br><font size="6">${MusicalNoteArray[0][0]}</font>`
        polyrhythm_2_NoteOrRest = 0;
        polyrhythm_2_NoteArray.splice(polyrhythm_2_Num - 1, 1, 0);
    };
};

function rhythm1Create() {
    //リズム1の配列を作成する
    polyrhythm_1_NoteArray = Array(polyrhythm_1_Value).fill(0);
    polyrhythm_1_Num = polyrhythm_1_NoteArray.length;
    //リズム1の行を一旦、空にする
    document.getElementById("polyrhythm_1_click").innerHTML = "";
    //リズム1のテーブル要素を作成
    for (let i = 0; i < polyrhythm_1_NoteArray.length; i++) {
        if (polyrhythm_1_NoteArray[polyrhythm_1_Num - 1] === 0) {
            document.getElementById("polyrhythm_1_click").
                insertAdjacentHTML('afterbegin', `<th id="polyrhythm_1_count${polyrhythm_1_Num}" class="click_able" onclick="polyrhythm_1_noteChange(${polyrhythm_1_Num})">${polyrhythm_1_Num}<br><font size="6">${noteCharacter}</font></th>`);
        } else if (polyrhythm_1_NoteArray[polyrhythm_1_Num - 1] === 1) {
            document.getElementById("polyrhythm_1_click").
                insertAdjacentHTML('afterbegin', `<th id="polyrhythm_1_count${polyrhythm_1_Num}" class="click_able" onclick="polyrhythm_1_noteChange(${polyrhythm_1_Num})">${polyrhythm_1_Num}<br><font size="6">${restCharacter}</font></th>`);
        };
        polyrhythm_1_Num--
    };
};

function rhythm2Create() {
    //リズム2の配列を作成する
    polyrhythm_2_NoteArray = Array(polyrhythm_2_Value).fill(0);
    polyrhythm_2_Num = polyrhythm_2_NoteArray.length;
    //リズム2の行を一旦、空にする
    document.getElementById("polyrhythm_2_click").innerHTML = "";
    //リズム2のテーブル要素を作成
    for (let i = 0; i < polyrhythm_2_NoteArray.length; i++) {
        if (polyrhythm_2_NoteArray[polyrhythm_2_Num - 1] === 0) {
            document.getElementById("polyrhythm_2_click").
                insertAdjacentHTML('afterbegin', `<th id="polyrhythm_2_count${polyrhythm_2_Num}" class="click_able" onclick="polyrhythm_2_noteChange(${polyrhythm_2_Num})">${polyrhythm_2_Num}<br><font size="6">${MusicalNoteArray[0][0]}</font></th>`);
        } else if (polyrhythm_2_NoteArray[polyrhythm_2_Num - 1] === 1) {
            document.getElementById("polyrhythm_2_click").
                insertAdjacentHTML('afterbegin', `<th id="polyrhythm_2_count${polyrhythm_2_Num}" class="click_able" onclick="polyrhythm_2_noteChange(${polyrhythm_2_Num})">${polyrhythm_2_Num}<br><font size="6">${MusicalNoteArray[1][0]}</font></th>`);
        };
        polyrhythm_2_Num--
    };
};

//最小公倍数のテーブルを描画する関数
function lcmCreate() {
    //ポリリズムカウント数の行を一旦、空にする
    document.getElementById("polyrhythm_lcm_click").innerHTML = "";
    //ポリリズムカウント数の配列を作成する
    polyrhythm_lcm_NoteArray = Array(polyrhythm_lcm).fill(0);
    polyrhythm_lcm_Num = polyrhythm_lcm_NoteArray.length;
    //リズム1と2の値が互いに素、リズム1と2が1ではないときにテーブルを描画する
    if (polyrhythm_gcd === 1 || polyrhythm_1_Value !== 1 || polyrhythm_2_Value !== 1) {
        //ポリリズムカウント数のテーブル要素を作成
        for (let i = 0; i < polyrhythm_lcm_NoteArray.length; i++) {
            if (polyrhythm_lcm_NoteArray[polyrhythm_lcm_Num - 1] === 0) {
                document.getElementById("polyrhythm_lcm_click").
                    insertAdjacentHTML('afterbegin', `<th id="polyrhythm_lcm_count${polyrhythm_lcm_Num}" class="click_able" onclick="polyrhythm_lcm_NoteChange(${polyrhythm_lcm_Num})">${polyrhythm_lcm_Num}<br>${divisionNoteCharacter}</th > `);
            } else if (polyrhythm_lcm_NoteArray[polyrhythm_lcm_Num - 1] === 1) {
                document.getElementById("polyrhythm_lcm_click").
                    insertAdjacentHTML('afterbegin', `<th id = "polyrhythm_lcm_count${polyrhythm_lcm_Num}" class="click_able" onclick = "polyrhythm_lcm_NoteChange(${polyrhythm_lcm_Num})">${polyrhythm_lcm_Num}<br>${divisionRestCharacter}</th > `);
            };
            polyrhythm_lcm_Num--
        };
    };
};

//ポリリズムの判定情報を格納する変数
let polyrhythm_text;
//ポリリズム・メトロノームの表示を切り替える関数
function polyrhythm_variableChange() {
    //設定の値を取得する
    polyrhythm_basis_note = Number(document.getElementById("polyrhythm_basis_note").value);
    polyrhythm_basis_Value = Number(document.getElementById("polyrhythm_basis_Value").value);
    //リズム1の値を取得する
    polyrhythm_1_Value = Number(document.getElementById("polyrhythm_1_Value").value);
    //リズム2の値を取得する
    polyrhythm_2_Value = Number(document.getElementById("polyrhythm_2_Value").value);

    //音符の表示を選択して書き込む関数
    polyrhythmDetermine();
    //ポリリズム最小公倍数の音符の表示を選択して書き込む関数
    lcmDetermine();
    //リズム1のテーブルを描画する関数
    rhythm1Create();
    //リズム2のテーブルを描画する関数
    rhythm2Create();

    //リズム1と2の最大公約数を求める
    polyrhythm_gcd = gcd(polyrhythm_1_Value, polyrhythm_2_Value);
    //リズム1と2の最小公倍数を求める
    polyrhythm_lcm = lcm(polyrhythm_1_Value, polyrhythm_2_Value);
    document.getElementById("polyrhythm_Numerator_Num").innerHTML = polyrhythm_1_Value;
    document.getElementById("polyrhythm_Denominator_Num").innerHTML = polyrhythm_basis_note;

    if (polyrhythm_1_Value === polyrhythm_2_Value) {
        //リズム2のテーブルを非表示にする
        document.getElementById("polyrhythm_2_table").classList.add("invisible");
        document.getElementById("polyrhythm_2_click").classList.add("invisible");
        //lcmのテーブルを非表示にする
        document.getElementById("polyrhythm_lcm_table").classList.add("invisible");
        document.getElementById("polyrhythm_lcm_click").classList.add("invisible");
    } else {
        //リズム2のテーブルを表示する
        document.getElementById("polyrhythm_2_table").classList.remove("invisible");
        document.getElementById("polyrhythm_2_click").classList.remove("invisible");
        //lcmのテーブルを表示する
        document.getElementById("polyrhythm_lcm_table").classList.remove("invisible");
        document.getElementById("polyrhythm_lcm_click").classList.remove("invisible");
    };

    //ポリリズムの判定をする。
    if (polyrhythm_1_Value === polyrhythm_2_Value) {
        polyrhythm_text = `ポリリズムではありません。（両方のリズムの値が同じ）`;
    } else if (polyrhythm_gcd !== 1) {
        polyrhythm_text = `ポリリズムではありません。GCDは${polyrhythm_gcd}です。（互いに素ではない）`;
    } else if (polyrhythm_1_Value === 1 || polyrhythm_2_Value === 1) {
        polyrhythm_text = `ポリリズムではありません。（片方のリズムの値が1）`;
    } else {
        polyrhythm_text = `ポリリズムです。GCDは${polyrhythm_gcd}です。`;
        //リズム1の値が、リズム2の値より大きい場合
        if (polyrhythm_1_Value > 0) {
            //最小公倍数をリズム1の値で割った答えが2の冪の場合
            if (polyrhythm_lcm / polyrhythm_1_Value === 2
                || polyrhythm_lcm / polyrhythm_1_Value === 4
                || polyrhythm_lcm / polyrhythm_1_Value === 8
                || polyrhythm_lcm / polyrhythm_1_Value === 16
                || polyrhythm_lcm / polyrhythm_1_Value === 32
                || polyrhythm_lcm / polyrhythm_1_Value === 64) {
                //拍子を書き込む
                document.getElementById("polyrhythm_Numerator_Num").innerHTML = polyrhythm_lcm;
                document.getElementById("polyrhythm_Denominator_Num").innerHTML = polyrhythm_basis_note * (polyrhythm_lcm / polyrhythm_1_Value);
            } else {
                //拍子の分子はリズム2の値が、リズム1の値より大きく、リズム1と2の最小公倍数をポリリズム1の値で割り切れない場合、リズム1の値になる。
                document.getElementById("polyrhythm_Numerator_Num").innerHTML = polyrhythm_1_Value;
            };
        };
    };

    //ポリリズムの判定情報を書き込む
    document.getElementById("gcd_number").innerHTML = "";
    document.getElementById("gcd_number").innerHTML = polyrhythm_text;
    //最小公倍数を基準BPMとした場合の拍子記号
    if (polyrhythm_basis_Value === 0) {
        document.getElementById("polyrhythm_Numerator_Num").innerHTML = polyrhythm_lcm;
        document.getElementById("polyrhythm_Denominator_Num").innerHTML = polyrhythm_basis_note;
    };

    //最小公倍数のテーブルを描画する関数
    lcmCreate();

    //最小公倍数を表示する
    document.getElementById("lcm_number").innerHTML = "【LCM】：";
    document.getElementById("lcm_number").innerHTML = `【LCM】：${polyrhythm_lcm}`;
};

//ポリリズム・メトロノームの拍子や分割する数を変える処理をする関数
function polyrhythm_valueChange() {
    //ポリリズム・メトロノームのクリック情報を格納した配列を作る関数
    polyrhythm_arrayCreate();
    //ポリリズム・メトロノームのボリュームなどを変える場合の処理をする関数
    polyrhythm_variableChange();
    //停止中ならreturn
    if (startTime === null) {
        //メトロノームの再生を停止する関数
        polyrhythm_metronomeStop();
        return;
    };
    //メトロノームの再生を開始する関数
    polyrhythm_metronomeStart();
};