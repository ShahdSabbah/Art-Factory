/**
 * 1. التحكم في شكل الهيدر عند التمرير (Navbar Scroll)
 * يضيف كلاس nav-scroll لتغيير لون الخلفية بعد نزول 250 بكسل
 */
let nav = document.querySelector('.main-nav');
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
    // الجزء الخاص بتغيير خلفية الـ Navbar
    if (window.scrollY > 250) {
        nav.classList.add("nav-scroll");
    } else {
        nav.classList.remove("nav-scroll");
    }

    // الجزء الخاص بتغيير الرابط النشط (Active Link) بناءً على السيكشن الحالي
    let current = "";
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        // تقليل 200 بكسل لضمان تفعيل الرابط قبل الوصول تماماً للسيكشن
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/**
 * 2. حدث الضغط على الروابط
 * لتغيير حالة النشاط (Active) فور النقر على الرابط
 */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});