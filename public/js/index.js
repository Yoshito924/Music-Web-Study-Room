'use strict';

//シンセを作成し、マスター出力（スピーカー）に接続する
let synth = new Tone.PolySynth(Tone.Synth).toMaster();


//キーボードを描画する関数
function KeyboardCreate() {

    let data = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    let html = '';

    //2オクターブ分の鍵盤を生成する関数
    for (let octave = 0; octave < 2; octave++) {
        for (let i = 0; i < data.length; i++) {
            let note = data[i];
            let hasSharp = (['E', 'B'].indexOf(note) === -1);

            html += `<div class='whitenote' onmousedown='noteDown(this, false)' onmouseup='noteUp(this,false)' onmouseleave='noteUp(this,false)' data-note='${note + (octave + 4)}'>`;

            if (hasSharp) {
                html += `<div class='blacknote' onmousedown='noteDown(this, true)' onmouseup='noteUp(this, true)' onmouseleave='noteUp(this,true)' data-note='${note + '#' + (octave + 4)}'></div>`;
            };

            html += `</div>`;
        };

    };
    //鍵盤を書き込む関数
    document.getElementById('container').innerHTML = html;
};


//鍵盤を離した時の処理
function noteUp(elem, isSharp) {
    //色を変える
    elem.style.background = isSharp ? '#777' : '';
};

//鍵盤を押した時の処理
function noteDown(elem, isSharp) {
    let note = elem.dataset.note;
    //色を変える
    elem.style.background = isSharp ? 'black' : '#ccc';
    //音を鳴らす
    synth.triggerAttackRelease(note, "16n");
    event.stopPropagation();
};

//--------------------------------------

// navigator.requestMIDIAccess().then(successCallback, faildCallback);

// let midi = null;
// let inputs = [];
// let outputs = [];

// // MIDI接続成功時
// function successCallback(m) {

//     midi = m;
//     // 入力MIDIデバイスの記録
//     let it = midi.inputs.values();
//     for (let o = it.next(); !o.done; o = it.next()) {
//         inputs.push(o.value);
//         $("#input").append("<li>" + o.value.name + "</li>");
//     };

//     // 出力MIDIデバイスの記録
//     let ot = midi.outputs.values();
//     for (let o = ot.next(); !o.done; o = ot.next()) {
//         outputs.push(o.value);
//         $("#output").append("<li>" + o.value.name + "</li>");
//     };

//     // 入力MIDIデバイスから入力が来たときの処理の登録
//     for (let cnt = 0; cnt < inputs.length; cnt++) {
//         inputs[cnt].onmidimessage = onMIDIEvent;
//     };
// };

// // MIDI接続失敗時
// function faildCallback(msg) {
//     console.log("[Error]:" + msg);
// };

// //入力MIDIデバイスから入力が来たときの処理
// function onMIDIEvent(e) {
//     let str = "";
//     for (let i = 0, out = []; i < e.data.length; i++) {
//         str = str + e.data[i].toString(16).substr(-2) + " ";
//     };
//     str = str;
//     $("#data").text(str);

// };