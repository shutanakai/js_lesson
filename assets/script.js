// DOMの読み込み,CSS・画像等のリソースの読み込みが完了したら実行する
window.addEventListener("load", () => {
  // 検証ツールのConsoleにログとして"Hello JavaScript!"を表示する
  console.log("Hello JavaScript!");

  document.querySelector(".profile__title").innerHTML = "taro yamada";

  document.querySelector(".profile__desc").innerHTML = "ディレクターです。";

  // ボタンを取得する
  console.log(document.querySelector(".profile__next"));

  document.querySelector(".profile__next").addEventListener("click", function () {
    // ボタンをクリックした時この中を実行する
    console.log("ボタンがクリックされました。");

    document.querySelector(".profile__title").innerHTML = "ギター";
    document.querySelector(".profile__desc").innerHTML = "たまに弾いています。";
    document.querySelector(".profile__image").src = "https://1.bp.blogspot.com/-_abP-kIkBWw/X9GYQHFIbBI/AAAAAAABcvA/Vdz-VP3ylPwbC7vSKqYBL3T3sa77uWK6ACNcBGAsYHQ/s400/music_guitar_stand_guitar.png";
    document.querySelector(".profile__next").style.display = "none";
  });
});
