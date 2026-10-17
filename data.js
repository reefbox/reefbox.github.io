/**
 * 🌊 REEFBOX — MERKEZİ VERİ DOSYASI (data.js)
 * 
 * Bu dosya sitenizin tüm içeriklerinin yönetildiği yerdir.
 * Yeni bir oyun, video, müzik veya sosyal hesap eklemek için 
 * sadece aşağıdaki ilgili bölüme yeni bir kayıt eklemeniz yeterlidir.
 * Hiçbir HTML kodunu değiştirmeye gerek yoktur!
 */

const REEFBOX_DATA = {
    // 🏷️ MARKA & PROFİL BİLGİLERİ
    brand: {
        name: "reefbox",
        title: "Creator • YouTube Content Hub",
        bio: "YouTube oyun ve eğitim videolarım, geliştirdiğim projeler ve müziklerim tek bir çatı altında. Tüm içerikler doğrudan site içinde gömülü olarak çalışır.",
        avatar: "assets/logo.png",
        location: "Türkiye",
        status: "🚀 Yeni içerikler üzerinde çalışıyor..."
    },

    // 🎮 OYUNLAR VE UYGULAMALAR (itch.io Gömülü / Embed)
    // Yeni oyun veya uygulama eklemek için aşağıdaki şablonu kullanabilirsiniz:
    /*
    ÖRNEK VERİ ŞABLONU:
    {
        id: "game-1",
        title: "Oyun Adı",
        type: "game", // 'game' veya 'app'
        category: "Oyunlar",
        description: "Oyunun kısa açıklaması.",
        tags: ["Godot", "Pixel Art", "Action"],
        cover: "https://gorsel-linki.com/kapak.jpg",
        embedUrl: "https://itch.io/embed/XXXXX?dark=true",
        directPlayUrl: "https://v6p9d9t4.ssl.hwcdn.net/html/XXXXX/index.html",
        itchUrl: "https://itch.io",
        isFeatured: true,
        version: "v1.0.0",
        releaseYear: "2026"
    }
    */
    projects: [],

    // 🎬 VİDEOLAR VE EĞİTİMLER (YouTube Gömülü)
    videos: [
{
        "id":  "vid-1",
        "title":  "MİNECRAFT YARI OTOMATİK KIRIK TAŞ FARMI (KÜÇÜK)",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "Minecraft ta kolay, kompakt ve pratik yarı otomatik kırık taş farmı yapımı rehberi ve oynanış videosu.",
        "youtubeId":  "7jvi2GSvoUA",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft",
                     "Farm"
                 ],
        "isFeatured":  true
    },
    {
        "id":  "vid-2",
        "title":  "MİNECRAFT KOYUN FARMI (YÜNFARMI)",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: MİNECRAFT KOYUN FARMI (YÜNFARMI)",
        "youtubeId":  "aElB6icvyxw",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft",
                     "Farm"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-3",
        "title":  "MİNECRAFT  Kaktüs  farmı ve yeşil baya farmı yapımı",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: MİNECRAFT  Kaktüs  farmı ve yeşil baya farmı yapımı",
        "youtubeId":  "nu7cSjaMQbs",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft",
                     "Farm"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-4",
        "title":  "MİNECRAFT Wither YAPIMI",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: MİNECRAFT Wither YAPIMI",
        "youtubeId":  "1mggpPQbBtM",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-5",
        "title":  "MİNECRAFT  GOLEM YAPIMI  #shorts",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: MİNECRAFT  GOLEM YAPIMI  #shorts",
        "youtubeId":  "005CM-BUwqc",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-6",
        "title":  "MİNECRAFT  PASTA TUZAGI",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: MİNECRAFT  PASTA TUZAGI",
        "youtubeId":  "dV2_Ks-XKA4",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-7",
        "title":  "MİNECRAFT  KOLAY İNEK FARMI YAPIMI",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: MİNECRAFT  KOLAY İNEK FARMI YAPIMI",
        "youtubeId":  "uFFYAQybtQM",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft",
                     "Farm"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-8",
        "title":  "Minecraft 1.17 şeker kamışı  farmı yapımı",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: Minecraft 1.17 şeker kamışı  farmı yapımı",
        "youtubeId":  "ld-QQ1ZmJBc",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft",
                     "Farm"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-9",
        "title":  "Minecraft 1.17 demir farmı yapımı",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: Minecraft 1.17 demir farmı yapımı",
        "youtubeId":  "JiGHV1eZD4g",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft",
                     "Farm"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-10",
        "title":  "Minecraft\u0027ta görünmez blok alma - Minecraft\u0027ta barikat alma",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: Minecraft\u0027ta görünmez blok alma - Minecraft\u0027ta barikat alma",
        "youtubeId":  "x3LBnbrlTNw",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-11",
        "title":  "Minecraft\u0027ta komut bloğu nasıl alınır",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: Minecraft\u0027ta komut bloğu nasıl alınır",
        "youtubeId":  "XV2jMUeKOPY",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft",
                     "Komut"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-12",
        "title":  "MİNECRAFT YUMURTA FARMI YAPIMI",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: MİNECRAFT YUMURTA FARMI YAPIMI",
        "youtubeId":  "dvT6_XHcCaU",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft",
                     "Farm"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-13",
        "title":  "Minecraft\u0027ta çok basit Asansör yapımı",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: Minecraft\u0027ta çok basit Asansör yapımı",
        "youtubeId":  "kPBqiFphMIg",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-14",
        "title":  "Minecraft\u0027ta sınırsız Altın Elma yapma",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: Minecraft\u0027ta sınırsız Altın Elma yapma",
        "youtubeId":  "9zkr6H6_SdI",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-15",
        "title":  "Minecraft\u0027ta  sınırsız Demir yapımı (komut bulogu)",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: Minecraft\u0027ta  sınırsız Demir yapımı (komut bulogu)",
        "youtubeId":  "WtprCKLW_LY",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft",
                     "Farm",
                     "Komut"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-16",
        "title":  "Minecraft\u0027ta en kolay asansör yapma",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: Minecraft\u0027ta en kolay asansör yapma",
        "youtubeId":  "6gTkz6qat2U",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-17",
        "title":  "Minecraftta SINIRSIZ ELMASYAPMA (komut bulogu)",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: Minecraftta SINIRSIZ ELMASYAPMA (komut bulogu)",
        "youtubeId":  "YOl3OjEs7hU",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft",
                     "Komut"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-18",
        "title":  "Minecraft tabut şarkısı",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: Minecraft tabut şarkısı",
        "youtubeId":  "0brNGwf37fs",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-19",
        "title":  "sonra yazarım başlık",
        "category":  "gaming",
        "categoryName":  "Minecraft \u0026 Oyun",
        "description":  "YUSUFKAYAA YouTube kanalından: sonra yazarım başlık",
        "youtubeId":  "_vUuTTTWlaM",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Minecraft"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-20",
        "title":  "ANİMASYON",
        "category":  "animation",
        "categoryName":  "Animasyon \u0026 Reklam",
        "description":  "YUSUFKAYAA YouTube kanalından: ANİMASYON",
        "youtubeId":  "3lz8_TzEMEU",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Animasyon"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-21",
        "title":  "animasyon",
        "category":  "animation",
        "categoryName":  "Animasyon \u0026 Reklam",
        "description":  "YUSUFKAYAA YouTube kanalından: animasyon",
        "youtubeId":  "fnJtoKNxfVo",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Animasyon"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-22",
        "title":  "Gambol Trendyol reklamı",
        "category":  "animation",
        "categoryName":  "Animasyon \u0026 Reklam",
        "description":  "YUSUFKAYAA YouTube kanalından: Gambol Trendyol reklamı",
        "youtubeId":  "OqWCv6Z3ZmA",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Reklam"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-23",
        "title":  "diş macunu reklamı",
        "category":  "animation",
        "categoryName":  "Animasyon \u0026 Reklam",
        "description":  "YUSUFKAYAA YouTube kanalından: diş macunu reklamı",
        "youtubeId":  "uxfQAuUBj7U",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Reklam"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-24",
        "title":  "ZULA ŞOK REKLAMI",
        "category":  "animation",
        "categoryName":  "Animasyon \u0026 Reklam",
        "description":  "YUSUFKAYAA YouTube kanalından: ZULA ŞOK REKLAMI",
        "youtubeId":  "iQTBbBnI7-Q",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Reklam"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-25",
        "title":  "Gumball ton balığı reklamı",
        "category":  "animation",
        "categoryName":  "Animasyon \u0026 Reklam",
        "description":  "YUSUFKAYAA YouTube kanalından: Gumball ton balığı reklamı",
        "youtubeId":  "-WEYJocRsUw",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Reklam"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-26",
        "title":  "hipnoz videosu",
        "category":  "hipnoz",
        "categoryName":  "Hipnoz Videoları",
        "description":  "YUSUFKAYAA YouTube kanalından: hipnoz videosu",
        "youtubeId":  "lXTC6FU1KMc",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Hipnoz"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-27",
        "title":  "HİPNOZ VİDYOSU",
        "category":  "hipnoz",
        "categoryName":  "Hipnoz Videoları",
        "description":  "YUSUFKAYAA YouTube kanalından: HİPNOZ VİDYOSU",
        "youtubeId":  "8LG_ErMHRbw",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Hipnoz"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-28",
        "title":  "En iyi hipnoz videosu",
        "category":  "hipnoz",
        "categoryName":  "Hipnoz Videoları",
        "description":  "YUSUFKAYAA YouTube kanalından: En iyi hipnoz videosu",
        "youtubeId":  "PAaAYA8Lt3E",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Hipnoz"
                 ],
        "isFeatured":  false
    },
    {
        "id":  "vid-29",
        "title":  "HİPNOZ VİDEO",
        "category":  "hipnoz",
        "categoryName":  "Hipnoz Videoları",
        "description":  "YUSUFKAYAA YouTube kanalından: HİPNOZ VİDEO",
        "youtubeId":  "MAyBQjgwnqk",
        "duration":  "Video",
        "views":  "YouTube",
        "date":  "Kanal",
        "tags":  [
                     "Hipnoz"
                 ],
        "isFeatured":  false
    }
    ],

    // 🎵 MÜZİKLER (YouTube Ses Akışı - Audio Only)
    // Yeni müzik parçası eklemek için aşağıdaki şablonu kullanabilirsiniz:
    /*
    ÖRNEK VERİ ŞABLONU:
    {
        id: "track-1",
        title: "Parça Adı",
        artist: "reefbox",
        genre: "Synthwave",
        youtubeId: "YOUTUBE_VIDEO_ID",
        duration: "3:42",
        cover: "https://gorsel-linki.com/kapak.jpg",
        description: "Parça hakkında kısa açıklama."
    }
    */
    musicTracks: [],

    // 🌐 SOSYAL MEDYA HESAPLARI & GÖMÜLÜ İÇERİKLER
    socials: {
        youtube: {
            channelName: "YUSUFKAYAA",
            channelUrl: "https://www.youtube.com/@yusufkayaa4687",
            subscribers: "Kanalıma Abone Olun",
            videoCount: "Oyun & Rehber Videoları",
            featuredVideoId: "7jvi2GSvoUA"
        }
    }
};

