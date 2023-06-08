// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Happy Birthday Teruntuk kamu",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Aifyku",  // 同上...
        "Tanganku tidak akan sampai untuk mengusap lembut pipimu",
        "kakiku tak akan kuat untuk berlari ke tempatmu",
        "Kita terpisahkan oleh jarak yang saaangat jauh",
        "Tapi aku percaya dalam hati",
        "kita akan segera berjumpa kembali",
        "Selamat ulang tahun untukmu hari ini",
        "semoga kita lekas berjumpa",
        "dan semoga bahagia terus mengiringi setiap langkahmu",
        "I LOVE YOU SO MUCH",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Aifyku": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Nyalakan Lampu",
        play: "Putar Music",
        bannar_coming: "Dekorasi",
        balloons_flying: "Balon",
        cake_fadein: "ayang siap?",
        light_candle: "jangan lupa Doa dan harapan ayang tahun ini",
        wish_message: "Selamat Ulang tahun sayang",
        story: "Pesan buat Ayang",
    }
};
