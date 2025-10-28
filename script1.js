<script>
    $(document).ready(function(){
        $('.product-container').slick({
            slidesToShow: 3, // Jumlah produk yang ditampilkan dalam setiap slide
            slidesToScroll: 1, // Jumlah produk yang di-scroll setiap kali tombol ditekan
            autoplay: true, // Slide otomatis
            autoplaySpeed: 2000, // Kecepatan slide otomatis (dalam milidetik)
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [
                {
                    breakpoint: 768, // Lebar viewport ketika tampilan diubah menjadi responsif (misalnya untuk perangkat mobile)
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
</script>