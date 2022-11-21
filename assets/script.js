// DOMの読み込み,CSS・画像等のリソースの読み込みが完了したら実行する
window.addEventListener("load", () => {
  const profileNextButton = document.querySelector(".profile__next");
  const profileImage = document.querySelector(".profile__image");
  const profileTitle = document.querySelector(".profile__title");
  const profileDesc = document.querySelector(".profile__desc");

  profileNextButton.addEventListener("click", (event) => {
    event.preventDefault();
    profileImage.src =
      "https://1.bp.blogspot.com/-_abP-kIkBWw/X9GYQHFIbBI/AAAAAAABcvA/Vdz-VP3ylPwbC7vSKqYBL3T3sa77uWK6ACNcBGAsYHQ/s400/music_guitar_stand_guitar.png";
    profileTitle.innerHTML = "趣味";
    profileDesc.innerHTML = "たまにギターを弾きます。";
    profileNextButton.style.display = "none";
  });
});
