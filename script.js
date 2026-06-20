const skills = [
{
    rarity:"N",
    title:"Excel",
    text:"資料作成やデータ整理が可能"
},
{
    rarity:"R",
    title:"C言語",
    text:"基本的なプログラム作成が可能"
},
{
    rarity:"R",
    title:"C++",
    text:"オブジェクト指向の学習経験あり"
},
{
    rarity:"SR",
    title:"SQL",
    text:"SELECTやJOINなどを扱える"
},
{
    rarity:"SR",
    title:"Unity",
    text:"学生時代にゲーム制作経験あり"
},
{
    rarity:"SSR",
    title:"テスター経験",
    text:"デジタルTV評価業務を1年以上経験"
}
];

function gacha(){

    const random =
        Math.floor(Math.random() * skills.length);

    const skill = skills[random];

    document.getElementById("card").innerHTML =
    `
        <h2>${skill.rarity}</h2>
        <h3>${skill.title}</h3>
        <p>${skill.text}</p>
    `;
}