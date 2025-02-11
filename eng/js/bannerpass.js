document.addEventListener("DOMContentLoaded", function () {
    var banners = [
        `<a href="/eng/components/cards/loseweightnow.html">
            <img src="/eng/img/imagenes/bannerlosenuevoingles.gif" alt="loseWeightnow" class="responsive-gif">
        </a>`,
        `<a href="/eng/components/cards/insurance.html">
            <img src="/eng/img/imagenes/bannerseg.gif" alt="seguros" class="responsive-gif">
        </a>`
    ];

    var bannerContainer = document.querySelector(".bannerlose");
    var index = 0;

    setInterval(function () {
        index = (index + 1) % banners.length;
        bannerContainer.innerHTML = banners[index];
    }, 25000); // Cambia cada 25 segundos
});
