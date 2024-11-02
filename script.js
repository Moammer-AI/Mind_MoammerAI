// Language data for easy translation
const languageContent = {
    en: {
        mainTitle: "Mind",
        subTitle: "Moammer ALTobi",
        sections: {
            articlesArabic: "Articles in Arabic",
            articlesEnglish: "Articles in English",
            interviews: "TV and Radio Interviews",
            consulting: "Consulting Services in AI and Digital Development",
            training: "Training Services"
        },
        footer: "© Moammer ALTobi 2024"
    },
    ar: {
        mainTitle: "عقل",
        subTitle: "معمر التوبي",
        sections: {
            articlesArabic: "مقالات بالعربية",
            articlesEnglish: "مقالات بالإنجليزية",
            interviews: "المقابلات التلفزيونية والإذاعية",
            consulting: "خدمات الاستشارات في الذكاء الاصطناعي والتطوير الرقمي",
            training: "خدمات التدريب"
        },
        footer: "© معمر التوبي 2024"
    }
};

// Function to change language dynamically
function changeLanguage(lang) {
    document.getElementById("main-title").textContent = languageContent[lang].mainTitle;
    document.getElementById("sub-title").textContent = languageContent[lang].subTitle;
    document.getElementById("section-articles-arabic").textContent = languageContent[lang].sections.articlesArabic;
    document.getElementById("section-articles-english").textContent = languageContent[lang].sections.articlesEnglish;
    document.getElementById("section-interviews").textContent = languageContent[lang].sections.interviews;
    document.getElementById("section-consulting").textContent = languageContent[lang].sections.consulting;
    document.getElementById("section-training").textContent = languageContent[lang].sections.training;
    document.getElementById("footer-text").textContent = languageContent[lang].footer;
}
