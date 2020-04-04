export const getPosts = () => {
  return [
    {
      title: "Motivasyon Arayışı",
      slug: "motivasyon-arayisi",
      details: "Farkındalığın korkutucu yanı, yaptığım aktivitelerin zaman kaybı olabilecek olması. Ya yaptıklarım hiç bir işe yaramazsa? Ya bu iş için uygun degilsem?",
      allwriten: require("./posts/motivasyon-arayisi.md").default,
      date: "15 Ocak 2020",
      image: "motivasyon.jpeg"
    },
    {
      title: "3.Sınıf Elektrik ve Elektronik Mühendisliği Güz Dönemi",
      slug: "elektrik-ve-elektronik-muhendisligi-guz-donemi",
      details: "Güz döneminin sonuna geldik. Bu dönemin bana kattıklarından bahsetmeye çalışacağım. Dönemin zorlukları nelerdi, hangi dersleri aldım?…",
      allwriten: require("./posts/elektrik-ve-elektronik-muhendisligi-guz-donemi.md").default,
      date: "3 Ocak 2020",
      image: "elektrik.jpeg"
    },
    {
      title: "Neymiş Bu CrossFit?",
      slug: "neymis-bu-crossfit",
      details: "Üç yıllık CrossFit deneyimimin ardından bu antrenman metodunu günlük hayatıma nasıl uyarladığımdan bahsetmek istedim. Bir arkadaşım sayesinde tanıştığım bu spor hayatımı nasıl etkiledi, neler öğrendim ve öğrenmeye devam ediyorum?",
      allwriten: require("./posts/neymis-bu-crossfit.md").default,
      date: "29 Kasım 2019",
      image: "halter.jpeg"
    },
  ];
};
