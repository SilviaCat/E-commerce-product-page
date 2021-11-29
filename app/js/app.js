const hamburger = document.querySelector(".hamburger");
const menuMobile = document.querySelector(".menu-left-mobile");
const overlay = document.querySelector(".overlay");
const body = document.querySelector(".body");

//LIGHTBOX
const imageBox = document.querySelector(".imgBox");
const lightbox = document.querySelector(".lightbox");
const closeBtn = document.querySelector(".close");

//CAROUSEL
const gallery = document.querySelectorAll(".thumb");
const galleryLightBox = document.querySelectorAll(".thumb-lightbox");
const dx = document.querySelector(".dx");
const sx = document.querySelector(".sx");
const dxLightBox = document.querySelector(".dx_lightbox");
const sxLightBox = document.querySelector(".sx_lightbox");
const imageLightBox = document.querySelector(".imgLightBox");

//CART
const cartBox = document.querySelector(".cart-box");
const checkBox = document.querySelector(".checkBox");

//PRICE
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const price = document.querySelector(".value");
const btnPrice = document.querySelector(".add-cart");
const boxBuy = document.querySelector(".box-buy");
const boxEmpty = document.querySelector(".box-empty");
const qnt = document.querySelector(".qnt");
const totale = document.querySelector(".totale");
const cancella = document.querySelector(".delete");
const carrello = document.querySelector(".carrello");


jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww > 767) {
            if (hamburger.classList.contains('open')) {
                hamburger.classList.remove("open");
                menuMobile.classList.remove("open-menu");
                overlay.classList.remove("display");
                body.classList.remove("no-scroll");

            }
            /*  console.log("width < 600") */
        }
    };
    $(window).resize(function() {
        alterClass();
    });
    alterClass();
});

// HAMBURGER 
hamburger.addEventListener('click', function() {
    if (hamburger.classList.contains("open")) {
        hamburger.classList.remove("open");
        menuMobile.classList.remove("open-menu");
        overlay.classList.remove("display");
        body.classList.remove("no-scroll");
    } else {
        hamburger.classList.add("open");
        menuMobile.classList.add("open-menu");
        overlay.classList.add("display");
        body.classList.add("no-scroll");
    }
});

// MENU CHECKOUT

$(function() {
    $(cartBox).on("click", function(e) {
        if (cartBox.classList.contains("check")) {
            $(cartBox).removeClass("check");
            $(checkBox).css("opacity", 0)
        } else {
            $(cartBox).addClass("check");
            $(checkBox).css({
                opacity: 1,
                "z-index": 1
            })
        }
        e.stopPropagation()
    });
    $(document).on("click", function(e) {
        if ($(e.target).is(checkBox) === false) {
            $(cartBox).removeClass("check");
            $(checkBox).css({
                opacity: 0,
                "z-index": -1
            })
        }
    });
});

//LIGHTBOX
closeBtn.addEventListener('click', function() {
    if (lightbox.classList.contains("open-lightbox")) {
        lightbox.classList.remove("open-lightbox");
        body.classList.remove("no-scroll");
    } else {
        lightbox.classList.add("open-lightbox");
        body.classList.add("no-scroll");
    }
});

imageBox.addEventListener('click', function() {
    if (lightbox.classList.contains("open-lightbox")) {
        lightbox.classList.remove("open-lightbox");
        body.classList.remove("no-scroll");
    } else {
        lightbox.classList.add("open-lightbox");
        body.classList.add("no-scroll");
    }
});

//CAROUSEL LIGHTBOX

sxLightBox.addEventListener('click', function() {
    let imageIndex = getCurrentImageIndex();
    imageIndex++;
    if (imageIndex > 4) {
        imageIndex = 1;
    }
    setImageBox(imageIndex);
    activeThumb(imageIndex);
});

dxLightBox.addEventListener('click', function() {
    let imageIndex = getCurrentImageIndex();
    imageIndex--;
    if (imageIndex < 1) {
        imageIndex = 4;
    }
    setImageBox(imageIndex);
    activeThumb(imageIndex);
});

// FINE CAROUSEL LIGHTBOX

//CAROUSEL

sx.addEventListener('click', function() {
    let imageIndex = getCurrentImageIndex();
    imageIndex++;
    if (imageIndex > 4) {
        imageIndex = 1;
    }
    setImageBox(imageIndex);
    activeThumb(imageIndex);
});

dx.addEventListener('click', function() {
    let imageIndex = getCurrentImageIndex();
    imageIndex--;
    if (imageIndex < 1) {
        imageIndex = 4;
    }
    setImageBox(imageIndex);
    activeThumb(imageIndex);
});

// FINE CAROUSEL

// CAROUSEL BOTH FUNCTION
getCurrentImageIndex = () => {
    const imageIndex = parseInt(imageBox.src.split('\\').pop().split('/').pop().replace('.jpg',
        '').replace('image-product-', ''));
    return imageIndex;
}

setImageBox = (imageIndex) => {
        imageBox.src = 'images/image-product-' + imageIndex + '.jpg';
        imageLightBox.src = 'images/image-product-' + imageIndex + '.jpg';
    }
    // FINE CAROUSEL BOTH FUNCTION

// ACTIVE
activeThumb = (imageIndex) => {
        console.log(imageIndex);
        let indice = imageIndex - 1;
        for (let i = 0; i < gallery.length; i++) {
            gallery[i].classList.remove("active");
            galleryLightBox[i].classList.remove("active");
        }
        gallery[indice].classList.add("active");
        galleryLightBox[indice].classList.add("active");
    }
    // FINE ACTIVE

for (let i = 0; i < galleryLightBox.length; i++) {
    galleryLightBox[i].addEventListener('click', function() {
        for (let j = 0; j < galleryLightBox.length; j++) {
            gallery[j].classList.remove("active");
            galleryLightBox[j].classList.remove("active");
        }

        gallery[i].classList.add("active");
        galleryLightBox[i].classList.add("active");

        let imageUrl = galleryLightBox[i].querySelector("img").src;
        let newUrl = imageUrl.replace('-thumbnail', '')
        imageBox.src = newUrl;
        imageLightBox.src = newUrl;
    })
}


for (let i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener('click', function() {
        for (let j = 0; j < gallery.length; j++) {
            gallery[j].classList.remove("active");
            galleryLightBox[j].classList.remove("active");
        }

        gallery[i].classList.add("active");
        galleryLightBox[i].classList.add("active");

        let imageUrl = gallery[i].querySelector("img").src;
        let newUrl = imageUrl.replace('-thumbnail', '')
        imageBox.src = newUrl;
        imageLightBox.src = newUrl;
    })
}

// PRICE

/* const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const price = document.querySelector(".value");
const btnPrice = document.querySelector(".add-cart"); */
let valore = 1;

minus.addEventListener('click', function() {
    /*     if (valore != 0) {
            valore--;
            console.log(valore);
        } */
    takeValue(valore);
});

plus.addEventListener('click', function() {
    valore++;
    console.log(valore);
    takeValue(valore);
});

takeValue = (valore) => {
    price.innerHTML = valore;
}

btnPrice.addEventListener('click', function() {
    console.log(valore);
    /*     if (valore == 0) {
            boxBuy.style.display = "none";
            boxEmpty.style.display = "flex";
        } else { */
    boxBuy.style.display = "block";
    boxEmpty.style.display = "none";
    qnt.innerHTML = valore;
    let totPrice = 125 * valore;
    totale.innerHTML = "$" + totPrice + ".00"
    carrello.style.opacity = 1;
    carrello.innerHTML = valore;
    valore = 1;
    price.innerHTML = valore;

});

cancella.addEventListener('click', function() {
    boxBuy.style.display = "none";
    boxEmpty.style.display = "flex";
    carrello.style.opacity = 0;
    valore = 1;
})
