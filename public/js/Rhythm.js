'use strict';
// let reverb = new Tone.Freeverb().toMaster();
// synth.connect(reverb); 

// メロディの音符を配列で保持
let melodyList = [
    'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'
];

let C_chord = ['C4', 'E4', 'G4'];
let F_chord = ['C4', 'F4', 'A4'];
let G_chord = ['B3', 'D4', 'G4'];
let Am_chord = ['A4', 'E4', 'C4'];

//左側に「発音タイミング」を記載している。：「小節:拍:拍内小拍」
let chordMelody = [
    ['0:0:0', C_chord],
    ['0:1:0', F_chord],
    ['0:2:0', Am_chord],
    ['0:3:0', G_chord],
];

// メロディをシーケンス制御する
let melody = new Tone.Part(setPlay, chordMelody).start();

function setPlay(time, note) {
    // ループを1回に設定
    melody.loop = 1;
    // BPMを設定
    Tone.Transport.bpm.value = Number(document.getElementById("input_bpm").value);
    // 発音を開始するまでの時間
    Tone.Transport.start('0.1');
    // 発音
    synth.triggerAttackRelease(note, '4n', time);
    event.stopPropagation();
};




//動くバーをループ表示する関数
function SquareLoop() {

    // canvas要素を取得
    const canvas = document.querySelector('canvas');

    //ブラウザがサポートしていない場合は処理を留める
    if (typeof canvas.getContext === 'undefined') {
        return;
    };

    // canvas要素が持つgetContext()メソッドを実行し、グラフィック描画のためのメソッドやプロパティを持つオブジェクトを取得する。
    // 引数を"2d"とすることで2Dグラフィックの描画に特化したメソッドやプロパティを持つオブジェクトを取得し、ctxに格納する。
    let ctx = canvas.getContext('2d');

    // 定数ctxに格納したオブジェクトがもつプロパティやメソッドはctx.プロパティ名、ctx.メソッド名() で呼び出せる

    // 描画する色を指定する
    ctx.fillStyle = 'red';

    //※塗りつぶした四角形を描画
    //fillRect(開始x座標, 開始y座標, 描画幅, 描画高さ)
    ctx.fillRect(10, 10, 150, 100);

    let x = 140;
    let y = 100;

    let bottom = canvas.width;

    //バーの動く速さ
    let speed = 10;

    //横幅
    let sizeX = 5;
    let sizeY = 100;

    let hitSizeY = 15;
    let spaceFlag = false;
    let num = 0;

    //動くバーを描画する関数
    function render() {

        //x座標がcanvasの幅を超えたらリセット
        if (x >= canvas.width - 100) {
            x = 0;
        } else {
            x += speed;
        };
        //canvasの内容を全てクリア
        //clearRect(クリア開始位置のX座標 , クリア開始位置のY座標 , クリアする横幅 , クリアする縦幅) 
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //※枠のみの四角形を描画
        //strokeRect(開始x座標, 開始y座標, 描画幅, 描画高さ)
        // ctx.strokeRect(y, bottom, sizeX, sizeY);

        //現在のパスをリセット
        ctx.beginPath();

        //※塗りつぶした四角形を描画
        //fillRect(開始x座標, 開始y座標, 描画幅, 描画高さ)
        ctx.fillRect(x, y, sizeX, sizeY);
    };

    /*キーボード操作の制御*/
    document.addEventListener("keydown", KeyDownFunc);
    document.addEventListener("keyup", KeyUpFunc);
    ctx.font = "16px Arial";

    /*SpaceKeyが押された時の処理*/
    function KeyDownFunc(e) {
        if (e.keyCode == 32 && y >= bottom - hitSizeY && y <= bottom + hitSizeY) {
            spaceFlag = true;
            num++;
        };
    };

    function KeyUpFunc(e) {
        if (e.keyCode == 32 && y > bottom + hitSizeY) {
            spaceFlag = false;
        };
    };

    function hit() {
        if (spaceFlag == true) {
            //canvasの内容をクリア
            //clearRect(クリア開始位置のX座標 , クリア開始位置のY座標 , クリアする横幅 , クリアする縦幅) 
            ctx.clearRect(0, 264, canvas.width, canvas.height);
            ctx.fillText('HIT!' + num, 300, 280);
        } else {
            ctx.fillText('ヒット' + num, 300, 280);
        }

    };

    //処理の反復間隔
    let loop_ms = 50

    //一定時間ごとに処理を繰り返す
    //setInterval(処理,実行間隔(ms))
    setInterval(render, loop_ms);
    setInterval(hit, loop_ms);
}

//動くバーをループ表示する関数
SquareLoop();


// DOM
const beat = document.querySelector('#beat');
const BPMVal = document.querySelector('.bpm .val');
const BPMRange = document.querySelector('.bpm .range');
const rythmVal = document.querySelector('.rhythm .val');
const rythmRadio = document.querySelectorAll('.rhythm input[name="beat"]');


// エンベロープ（キック）
let membraneKickOpts = {
    pitchDecay: 0.001,
    envelope: {
        attack: 0.001,
        decay: 0.75,
        sustain: 0.01,
        release: 0.01
    },
    volume: 25
}


// エンベロープ（スネア）
let noiseSnareOpts = {
    envelope: {
        attack: 0.001,
        decay: 0.5,
        sustain: 0.01
    }
}


// エンベロープ（ハイハット）
let noiseHihatOpts = {
    type: "brown",
    envelope: {
        attack: 0.001,
        decay: 0.03,
        sustain: 0
    }
}


// シンセ生成
const membraneKick = new Tone.MembraneSynth(membraneKickOpts).toMaster();
const noiseSnare = new Tone.NoiseSynth(noiseSnareOpts).toMaster();
const noiseHihat = new Tone.NoiseSynth(noiseHihatOpts).toMaster();


// シンセ実行
const kickSynth = () => {
    membraneKick.triggerAttackRelease('C0', '2n');
};
const snareSynth = () => {
    noiseSnare.triggerAttackRelease('8n');
};
const hihatSynth = () => {
    noiseHihat.triggerAttackRelease('32n');
};


// リズム設定値
let rhythmData = [
    {
        value: '1拍子',
        beatNumber: 1,
        kickRhythm: [0],
        snareRhythm: []
    },
    {
        value: '2拍子',
        beatNumber: 2,
        kickRhythm: [0],
        snareRhythm: [1]
    },
    {
        value: '3拍子',
        beatNumber: 3,
        kickRhythm: [0],
        snareRhythm: [1, 2]
    },
    {
        value: '4拍子',
        beatNumber: 4,
        kickRhythm: [0, 2],
        snareRhythm: [1, 3]
    },
    {
        value: '5拍子',
        beatNumber: 5,
        kickRhythm: [0],
        snareRhythm: [3]
    },
    {
        value: '6拍子',
        beatNumber: 6,
        kickRhythm: [0],
        snareRhythm: [3]
    },
    {
        value: '7拍子',
        beatNumber: 7,
        kickRhythm: [0, 4],
        snareRhythm: [2, 6]
    },
    {
        value: '8拍子',
        beatNumber: 8,
        kickRhythm: [0, 4],
        snareRhythm: [2, 6]
    },
    {
        value: '12拍子',
        beatNumber: 12,
        kickRhythm: [0, 6],
        snareRhythm: [3, 9]
    },
    {
        value: 'シャッフル',
        beatNumber: 12,
        kickRhythm: [0, 6],
        snareRhythm: [3, 9],
        shaffle: true
    },
    {
        value: '16拍子',
        beatNumber: 16,
        kickRhythm: [0, 8],
        snareRhythm: [4, 12]
    },
    {
        value: '24拍子',
        beatNumber: 24,
        kickRhythm: [0, 12],
        snareRhythm: [6, 18]
    },
    {
        value: 'ハネた16',
        beatNumber: 24,
        kickRhythm: [0, 12],
        snareRhythm: [6, 18],
        shaffle: true
    },
    {
        value: '32拍子',
        beatNumber: 32,
        kickRhythm: [0, 16],
        snareRhythm: [8, 24]
    },
];


// リズム取得
let getRhythmData = (i) => {
    let data = rhythmData[i];
    let beatLen = 4 / data.beatNumber;
    return {
        data: data,
        beatVal: data.value,
        beatNum: data.beatNumber,
        beatLen: beatLen,
        kickRhythm: data.kickRhythm,
        snareRhythm: data.snareRhythm,
        shaffle: data.shaffle
    }
};


// キック、スネアリズム設定
const setRhythm = (beatNmb, beatLen, Array) => {
    let rhythm = [];
    for (i = 0; i < Array.length; i++) {
        rhythm.push('0:' + beatLen * Array[i] + ':0');
    }
    return rhythm;
}


// ハイハットリズム設定
const setHihatRhythm = (beatNmb, beatLen, shaffle) => {
    let rhythm = [];
    for (i = 0; i < beatNmb; i++) {
        if (shaffle && i % 3 == 1) {
            // 鳴らさない
        } else {
            rhythm.push('0:' + beatLen * i + ':0');
        }
    }
    return rhythm;
};


// ビートリズム設定
let setBeatRhythm = (i) => {
    let data = getRhythmData(i);
    rythmVal.innerHTML = data.beatVal;
    const beatNum = data.beatNum;
    const beatLen = data.beatLen;
    const kickRhythm = data.kickRhythm;
    const snareRhythm = data.snareRhythm;
    const shaffle = data.shaffle;
    return {
        kick: setRhythm(beatNum, beatLen, kickRhythm),
        snare: setRhythm(beatNum, beatLen, snareRhythm),
        hihat: setHihatRhythm(beatNum, beatLen, shaffle)
    }
};


// ビート再生設定
const playBeat = (kickRtm, snareRtm, hihatRtm) => {
    let kickPart = new Tone.Part(kickSynth, kickRtm).start();
    let snarePart = new Tone.Part(snareSynth, snareRtm).start()
    let hihatPart = new Tone.Part(hihatSynth, hihatRtm).start();
    kickPart.loop = true;
    snarePart.loop = true;
    hihatPart.loop = true;
}


// ビート初期値
let defRhythm = setBeatRhythm(7);
playBeat(defRhythm.kick, defRhythm.snare, defRhythm.hihat);


// 再生判定
let play = false;


// 再生ボタン
beat.addEventListener('click', () => {
    if (play) {
        play = false;
        beat.innerHTML = "▶︎";
        Tone.Transport.stop();
    } else {
        play = true;
        beat.innerHTML = "■";
        Tone.Transport.start();
    }
}, false);


// BPM設定
let BPMSet = () => {
    let BPMImput = BPMRange.value;
    BPMVal.innerHTML = BPMImput;
    Tone.Transport.bpm.value = BPMImput;
}
BPMSet();

// BPM変更
BPMRange.addEventListener('input', BPMSet, false);


// リズム変更
function selectRythm() {
    for (let i = 0; i < rhythmData.length; i++) {
        rythmRadio[i].addEventListener('input', () => {
            let beat = setBeatRhythm(i);
            const kick = beat.kick;
            const snare = beat.snare;
            const hihat = beat.hihat;
            if (rythmRadio[i].checked && play) {
                Tone.Transport.cancel();
                Tone.Transport.start();
                playBeat(kick, snare, hihat);
            } else {
                Tone.Transport.cancel();
                playBeat(kick, snare, hihat);
            }
        }, false);
    }
}
selectRythm();