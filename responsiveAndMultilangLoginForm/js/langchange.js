let langs = {
    ar: {
        title : "تسجيل الدخول.",
        logo : "هشام.",
        home : "الرئيسية",
        about : "حولنا",
        contact : "تواصل معنا",
        sign : "تسجيل الدخول.",
        with : "باستعمال.",
        useemail : "أو باستعمال البريد الالكتروني.",
        eou : "البريد الالكتروني او اسم المستخدم.",
        pass : "كلمة المرور.",
        remember : "تذكرني.",
        forget : "هل نسيت كلمة المرور؟",
        sign2 : "تسجيل الدخول",
        menu : "قائمة"
    },
    en: {
        title : "Sign in.",
        logo : "Hicham.",
        home : "Home",
        about : "About",
        contact : "Contact",
        sign : "Sign in.",
        with : "with.",
        useemail : "or usw e-mail.",
        eou : "E-mail or username.",
        pass : "Your password.",
        remember : "Remember me.",
        forget : "Did you forget your password ?",
        sign2 : "Sign in",
        menu : "Menu"
    }, 
    fr: {
        title : "Ce connecter.",
        logo : "Hicham.",
        home : "Maison",
        about : "A propos",
        contact : "Contacter",
        sign : "Ce connecter",
        with : "avec.",
        useemail : "oubien utuliser e-mail.",
        eou : "E-mail ou nom d\'etulesateur.",
        pass : "Votre mots de pass.",
        remember : "Me sevenir.",
        forget : "As-tu oublier to mots de pass ?",
        sign2 : "Ce connecter",
        menu : "Menu"
    }
};

let selector = document.getElementById("langsel");

function uplang() {
    let lang = selector.options[selector.selectedIndex].value;
    let elements = document.querySelectorAll("[data-lang]");
    let responsiveLink = document.getElementById("responsiveLink");
    let sideBar = document.getElementById("sideBar");
    
    document.querySelector("html").setAttribute("lang", lang);

    if (lang == "ar") {
        document.querySelector("body").style.direction = "rtl";
        responsiveLink.setAttribute("href", "../css/responsiveAr.css")
        sideBar.style.right = "100vw";
        sideBar.style.display = "none";
        setTimeout(() => {
            sideBar.style.display = "flex";
        }, 1000);        
    } else {
        document.querySelector("body").style.direction = "ltr";
        responsiveLink.setAttribute("href", "../css/responsiveEn.css")
        sideBar.style.left = "100vw";
        sideBar.style.display = "none";
        setTimeout(() => {
            sideBar.style.display = "flex";
        }, 1000);
    }

    // change the language of the website    
    let i = elements.length;

    while (i>0) {
        i = i - 1;
        let key = elements[i].getAttribute("data-lang");

        if (elements[i].getAttribute("class") == "textInput") {
            elements[i].setAttribute("placeholder", langs[lang][key]);
        } else {
            elements[i].innerHTML = langs[lang][key];
        }
    }
}