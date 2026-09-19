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
        title: "Creator • Game Developer • Music Producer",
        bio: "Dijital dünyada oyunlar geliştiriyor, yazılım ve tasarım eğitimleri veriyor ve elektronik müzikler üretiyorum. Tüm projelerimi ve içeriklerimi buradan keşfedebilirsiniz.",
        avatar: "assets/logo.png",
        location: "İstanbul / Dijital Evren",
        status: "🚀 Yeni oyun projesi üzerinde çalışıyor..."
    },

    // 🎮 OYUNLAR VE UYGULAMALAR (itch.io Gömülü / Embed)
    projects: [
        {
            id: "game-1",
            title: "Cyber Reef: Echoes",
            type: "game",
            category: "Oyunlar",
            description: "Derin okyanus temalı, retro-fütüristik neon piksel sanatına sahip atmosferik bir aksiyon-macera oyunu.",
            tags: ["Godot", "Pixel Art", "Action", "Cyberpunk"],
            cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
            embedUrl: "https://itch.io/embed/834863?dark=true",
            directPlayUrl: "https://play2048.co/",
            itchUrl: "https://itch.io",
            isFeatured: true,
            version: "v1.2.0",
            releaseYear: "2026"
        },
        {
            id: "game-2",
            title: "Abyss Protocol",
            type: "game",
            category: "Oyunlar",
            description: "Terk edilmiş bir su altı araştırma üssünde geçen, bulmaca ve gerilim odaklı birinci şahıs hayatta kalma deneyimi.",
            tags: ["Unity", "3D", "Horror", "Sci-Fi"],
            cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
            embedUrl: "https://itch.io/embed/28412?dark=true",
            directPlayUrl: "https://hextris.io/",
            itchUrl: "https://itch.io",
            isFeatured: true,
            version: "v0.9.4 Beta",
            releaseYear: "2026"
        },
        {
            id: "app-1",
            title: "SynthBox Audio Lab",
            type: "app",
            category: "Uygulamalar",
            description: "Web tabanlı, tarayıcıda çalışan gerçek zamanlı mikro synth ve ritim oluşturucu web uygulaması.",
            tags: ["Web Audio API", "JavaScript", "Synthesizer"],
            cover: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
            embedUrl: "https://itch.io/embed/834863?dark=true",
            directPlayUrl: "https://musiclab.chromeexperiments.com/Song-Maker/",
            itchUrl: "https://itch.io",
            isFeatured: false,
            version: "v2.0",
            releaseYear: "2025"
        },
        {
            id: "app-2",
            title: "Pixel Palette Studio",
            type: "app",
            category: "Uygulamalar",
            description: "Oyun geliştiricileri için otomatik palet oluşturan ve kontrast analizleri sunan hafif yardımcı araç.",
            tags: ["Tool", "Color Theory", "GameDev"],
            cover: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
            embedUrl: "https://itch.io/embed/28412?dark=true",
            directPlayUrl: "https://hextris.io/",
            itchUrl: "https://itch.io",
            isFeatured: false,
            version: "v1.1",
            releaseYear: "2025"
        }
    ],

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
    musicTracks: [
        {
            id: "track-1",
            title: "Neon Bioluminescence",
            artist: "reefbox",
            genre: "Synthwave / Cyber Ambient",
            youtubeId: "DWcJFNfaw9c",
            duration: "3:42",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&auto=format&fit=crop&q=80",
            description: "Derin denizlerin gizemli parıltısından ilham alan analog synthesizer kompozisyonu."
        },
        {
            id: "track-2",
            title: "Submerged Odyssey",
            artist: "reefbox",
            genre: "Downtempo Electronic",
            youtubeId: "5qap5aO4i9A",
            duration: "4:15",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80",
            description: "Sakinleştirici bas hatları ve atmosferik okyanus ses manzaraları."
        },
        {
            id: "track-3",
            title: "Abyss Run (Boss Theme)",
            artist: "reefbox",
            genre: "Dark Synth / Darksynth",
            youtubeId: "MCkTebktHVc",
            duration: "3:18",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
            description: "Hızlı tempolu, yüksek enerjili ve distortion dolu aksiyon müziği."
        },
        {
            id: "track-4",
            title: "Midnight Glitch Horizon",
            artist: "reefbox",
            genre: "Glitch Hop / Ambient",
            youtubeId: "36YnV9STBqc",
            duration: "3:55",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=80",
            description: "Gece kodlaması ve odaklanma için tasarlanmış ritmik synthesizer melodileri."
        }
    ],

    // 🌐 SOSYAL MEDYA HESAPLARI & GÖMÜLÜ İÇERİKLER
    socials: {
        twitter: {
            username: "reefbox",
            url: "https://twitter.com/reefbox",
            handle: "@reefbox",
            timelineUrl: "https://twitter.com/reefbox"
        },
        instagram: {
            username: "reefbox.dev",
            url: "https://instagram.com/reefbox.dev",
            handle: "@reefbox.dev",
            posts: [
                {
                    caption: "Oyun motorunda yeni su altı shader testleri! 🌊 Renk kırılmaları nasıl olmuş?",
                    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
                    likes: "342",
                    comments: "48",
                    date: "3 gün önce"
                },
                {
                    caption: "Yeni parça 'Neon Bioluminescence' mastering aşamasında 🎚️ Kulaklıkları takın!",
                    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&auto=format&fit=crop&q=80",
                    likes: "518",
                    comments: "62",
                    date: "1 hafta önce"
                },
                {
                    caption: "Godot 4.3 eğitim serisi yayında. Kodlamaya başlamak için profil linkine bakın 🚀",
                    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
                    likes: "789",
                    comments: "93",
                    date: "2 hafta önce"
                }
            ]
        },
        youtube: {
            channelName: "YUSUFKAYAA",
            channelUrl: "https://www.youtube.com/@yusufkayaa4687",
            subscribers: "Kanalıma Abone Olun",
            videoCount: "Oyun & Rehber Videoları",
            featuredVideoId: "7jvi2GSvoUA"
        },
        itch: {
            username: "reefbox",
            url: "https://itch.io"
        },
        discord: {
            serverName: "reefbox Topluluğu",
            inviteUrl: "https://discord.gg",
            memberCount: "850+ Üye Aktif"
        }
    }
};

