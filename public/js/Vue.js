'use strict';

//headのコンポーネントを定義---------------------------------

// Vue.component('head-template', {
//     template: `
//         <div>
//         </div>
//         `
// })

// //headのコンポーネントのインスタンスを作成する
// const headTemplate = new Vue({
//     el: '#head'
// })

//ヘッダーのコンポーネントを定義---------------------------------

Vue.component('header-template', {
  template: `
    <div class="logo">
      <h1 class="py-1 px-1"><a href="index.html">音楽ウェブ自習室</a></h1>
    </div>

    <div class="pc-menu">
      <nav>
        <lu>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Menu</a></li>
        </lu>
      </nav>
    </div>

    <div class="sp-menu">
      <span class="material-icons" id="open">menu</span>
    </div>
        `
})

//ヘッダーのコンポーネントのインスタンスを作成する
const headerTemplate = new Vue({
  el: '#header'
})

//右カラム部分のコンポーネントを定義---------------------------------

Vue.component('right-column', {
  template: `
          <div>
            <h1 class="neumorphism p-3">音楽学習アプリ一覧</h1>

            <p class="py-2">　</p>
            <lu>
              <li class="py-1">
                <a class="linka" href="metronome.html">メトロノーム（変拍子対応）</a>
              </li>
              <li class="py-1">
                <a class="linka" href="polyrhythm-metronome.html">メトロノーム（ポリリズム対応）</a>
              </li>
            </lu>

            <p class="py-2">　</p>

            <h1 class="neumorphism p-3">音楽理論アプリ一覧</h1>

            <p class="py-2">　</p>

            <lu>
              <li class="py-1">
                <a class="linka" target="_blank" rel="noopener noreferrer" href="https://o-to.khufrudamonotes.com/o-to-chords">①コードの構成音を調べる</a>
              </li>
              <li class="py-1">
                <a class="linka" target="_blank" rel="noopener noreferrer" href="https://o-to.khufrudamonotes.com/o-to-scale">②スケールの構成音を調べる</a>
              </li>
              <li class="py-1">
                <a class="linka" target="_blank" rel="noopener noreferrer" href="https://o-to.khufrudamonotes.com/o-to-modal-interchange">③コード・ネーム/モードを検索する</a>
              </li>
              <li class="py-1">
                <a class="linka" target="_blank" rel="noopener noreferrer" href="https://o-to.khufrudamonotes.com/o-to-chord-progression">④コード進行まとめ</a>
              </li>
              <li class="py-1">
                <a class="linka" target="_blank" rel="noopener noreferrer" href="https://o-to.khufrudamonotes.com/o-to-diatonic-chords">⑤ダイアトニック・コード一覧表</a>
              </li>
              <li class="py-1">
                <a class="linka" target="_blank" rel="noopener noreferrer" href="https://o-to.khufrudamonotes.com/o-to-modulation">⑥転調の間隔・関係調を調べる</a>
              </li>
              <li class="py-1">
                <a class="linka" target="_blank" rel="noopener noreferrer" href="https://o-to.khufrudamonotes.com/o-to-note-value">⑦音価の計算をする</a>
              </li>
              <li class="py-1">
                <a class="linka" target="_blank" rel="noopener noreferrer" href="https://o-to.khufrudamonotes.com/o-to-metric-modulation">⑧メトリック・モジュレーション</a>
              </li>
              <li class="py-1">
                <a class="linka" target="_blank" rel="noopener noreferrer" href="https://o-to.khufrudamonotes.com/o-to-degree-change">⑨コード進行のテキストを移調する</a>
              </li>
              <li class="py-1">
                <a class="linka" target="_blank" rel="noopener noreferrer" href="https://o-to.khufrudamonotes.com/o-to-fingerboard">⑩弦楽器の指板を可視化する</a>
              </li>
            </lu>

            <p class="py-2">　</p>

            <h1 class="neumorphism py-3">関連ページへのリンク</h1>
            <p class="py-2">　</p>

            <lu>
              <li class="py-1">
                <a class="linka" href="https://o-to.khufrudamonotes.com/" target="_blank"
                  rel="noopener noreferrer">O-TO【音楽理論ウェブアプリ】</a>
              </li>
              <li class="py-1">
                <a class="linka" href="https://yoshito.khufrudamonotes.com/" target="_blank"
                  rel="noopener noreferrer">開発者の自己紹介</a>
              </li>
              <li class="py-1">
                <a class="linka" href="https://github.com/Yoshito924" target="_blank"
                  rel="noopener noreferrer">GitHub</a>
              </li>
            </lu>
          </div>
          `
})

//右カラム部分のコンポーネントのインスタンスを作成する
const rightColumn = new Vue({
  el: '#right-column'
})


//フッター部分のコンポーネントを定義---------------------------------

Vue.component('copyright-text', {
  template: `
      <div class="xl:flex pt-2">
        <div class="px-3 py-1">
          <p>&copy; 2021- KHUFRUDAMO NOTES (since 2009) </p>
        </div>
        <div class="px-1 pt-1">
          <!-- Twitterのシェアボタン -->
          <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button"
            data-show-count="false">Tweet</a>
        </div>
        <div class="px-1 pt-1">
          <!-- はてなブックマークへのシェアボタン -->
          <a href="https://b.hatena.ne.jp/entry/" class="hatena-bookmark-button"
            data-hatena-bookmark-layout="basic-label-counter" data-hatena-bookmark-lang="ja"
            title="このエントリーをはてなブックマークに追加"><img
              src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加"
              width="20" height="20" style="border: none;" /></a>
        </div>
        <div class="px-1 pt-1">
          <!-- noteへのシェアボタン -->
          <a href="https://note.com/intent/social_button" class="note-social-button"
            data-url="https://readability-checker.khufrudamonotes.com/"></a>
        </div>
        <div class="px-1 pt-1">
          <!-- Facebookへのシェアボタン -->
          <a class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width=""
            data-layout="button" data-action="recommend" data-size="small" data-share=""></a>
        </div>
        <div class="px-1 pt-1">
          <!-- Facebookへのシェアボタン -->
          <a id="fb-root"></a>
        </div>
        <div class="px-1 pt-1">
          <!-- pocketへのシェアボタン -->
          <a data-pocket-label="pocket" data-pocket-count="none" class="pocket-btn" data-lang="en"></a>
        </div>
        <div class="px-1 pt-1">
          <!-- Lineへのシェアボタン -->
          <a class="line-it-button" data-lang="ja" data-type="share-a" data-ver="3"
            data-url="https://o-to.khufrudamonotes.com/" data-color="default" data-size="small" data-count="true"
            style="display: none;"></a>
        </div>
      </div>

    `
})

Vue.component('footer-template', {
  template: `
  <div class="pt-5 text-right mx-2">
      <a class="linka" href="info.html">このウェブサイトについて</a>
  </div>
    `
})

//インスタンスを作成する
const footer = new Vue({
  el: '#footer'
})

//見出し部分のコンポーネントを定義---------------------------------

Vue.component('title-display', {
  template: `
      <div class="position-relative overflow-hidden p-3 p-md-4 m-md-3 text-center bg-gray-200">
        <div class="col-md-8 p-lg-2 mx-auto mt-5 mb-1">
          <h1 class="display-5 fw-normal">音楽ウェブ自習室</h1>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      `
})

//見出し部分のコンポーネントのインスタンスを作成する
const titleDisplay = new Vue({
  el: '#display'
})

// let chordColor = new Vue({
//     el: "app",
//     data: {
//         check: "list-group-item col-xl text-center",
//         check: "list-group-item list-group-item-danger col-xl text-center"
//     },
//     methods: {

//     }

// })

// new Vue({
//     el: '#tabBox',
//     data: {
//         isActive: '1',
//     }
// })