import background1 from "../asset/background1.jpg"
import background2 from "../asset/background2.avif"
import background3 from "../asset/background3.webp"
import Cards from "../components/Cards"




const Home = () => {
    const products = [
        {
            id: 1,
            title: "iphone 15pro Max 256GB Natural Titanium Mobile-Store",
            thumbnail: "https://i5.walmartimages.com/seo/Verizon-iPhone-15-Pro-Max-256GB-Blue-Titanium_c5cd208a-a582-4a0b-9030-b484f3cfbee9.ac4fb383f6ec8f7f321ece6b4b807f48.jpeg"

        },
        {
            id: 2,
            title: "iphone 12pro Max 256GB Natural Titanium Mobile-Store",
            thumbnail: "https://m.media-amazon.com/images/I/71FuI8YvCNL.jpg"
        },
        {
            id: 3,
            title: "Titan smart watch 3.0 with 1.96 Inch AMOLED Display|410 x 502",
            thumbnail: "https://staticimg.titan.co.in/Titan/Catalog/90188AP01_1.jpg?impolicy=pqmed&imwidth=640"
        },
        {
            id: 4,
            title: "Samsung Geek Squad Certified Refurbished Galaxy Z Flip3 5GB",
            thumbnail: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479358cv11d.jpg"
        },
        {
            id: 5,
            title: "Samsung Galaxy M62-128GB/8GB Blue-Mobile store",
            thumbnail: "https://i0.wp.com/doctormobile.lk/wp-content/uploads/2022/05/Samsung-Galaxy-M62-Black-best-price-in-Sri-Lanka.jpg?fit=600%2C600&ssl=1"

        },
        {
            id: 6,
            title: "Gateway 14.1 (1080p PC Lapto, Intel core i5,16GB RAM,256GB)",
            thumbnail: "https://yellowappletechnologies.co.ke/wp-content/uploads/2023/04/gateway-14-1-1080p-pc-laptop-intel.webp"
        },
        {
            id: 7,
            title: "Lenovo M10 Tab HD 10.1 Inch 4GB RAM 64GB ROM Wi-Fi +4G",
            thumbnail: "https://www.mombasacomputers.com/wp-content/uploads/2022/02/Lenovo-M10-Tab-HD-10.1-Inch-4GB-RAM-64GB-ROM-Wi-Fi-4G-Android-Tablet.jpg"
        },
        {
            id: 8,
            title: "Buy beatXP Marv Raze Smartwatch with 1.96 HD Display",
            thumbnail: "https://img.beatxp.com/prod/product/350/1%20%2847%29.webp"
        },
        {
            id: 9,
            title: "Samsung Galaxy S22 Ultra 5%GB - Clove Techology ",
            thumbnail: "https://www.clove.co.uk/cdn/shop/products/f74b2e7b-80d9-4689-abeb-38fbe9c8dafe_1200x.jpg?v=1689328232"
        },
        {
            id: 10,
            title: "The iPhone 14 Pro could have a hole-pinch camera and hide",
            thumbnail: "https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg"
        },
        {
            id: 11,
            title: "Laptops For Gaming - All series | ASUS India by Mobile-Store ",
            thumbnail: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg"
        },
        {
            id: 12,
            title: "realme Watch 2 with 320 x 320p Ultral Sharp 600 display upto 12day",
            thumbnail: "https://rukminim2.flixcart.com/image/850/1000/kxgfzbk0/smartwatch/k/n/y/-original-imag9wz384kvusv3.jpeg?q=90"
        },

        {
            id: 1,
            title: "Mobile Phones with 12GB RAM:6 Latest Mobile Phones with 12GB",
            thumbnail: "https://m.economictimes.com/thumb/msid-98897778,width-1200,height-1200,resizemode-4,imgsize-35708/6-latest-mobile-phones-with-12gb-ram-in-india.jpg"
        },
        {
            id: 2,
            title: "New Report Backs iPhone 15 Pro, iPhone 15 Pro Max Price Rises",
            thumbnail: "https://imageio.forbes.com/specials-images/imageserve/64e74ad803781abed13b0612/Apple--iPhone--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-release--new/0x0.jpg?format=jpg&crop=1275,956,x113,y0,safe&width=960"
        },
        {
            id: 3,
            title: "iPhone 14pro - Telstra 12GB Camera RAM:6 by Mobile-Store",
            thumbnail: "https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-14pr/deeppurple/landscape-front.png"
        },
        {
            id: 4,
            title: "Samsung Galaxy S21 5G SM-G9910 by Mobile-Store",
            thumbnail: "https://media.router-switch.com/media/catalog/product/cache/b90fceee6a5fa7acd36a04c7b968181c/s/a/samsung-galaxy-s21-5g-sm-g9910.jpg"
        },
        {
            id: 5,
            title: "Lenovo M7 3rd Gen (TB-7305F)Tablet - lron Grey 32GB Stronge-2GB",
            thumbnail: "https://www.pbtech.co.nz/imgprod/T/A/TABLEN7903__1.jpg"
        },
        {
            id: 6,
            title: "Oppo A78 5G(Glowing Blue,8GB RAM,128 Stronge)|5000 mAh",
            thumbnail: "https://m.media-amazon.com/images/I/41yx-OTfNwL.jpg"
        },

    ]



    return (
        <>
            <section>
                <div className="column_wrapper ">
                    <div className="content_wrapper wrap">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner ">
                                <div className="carousel-item active">
                                    <img src={background1} alt="empty" style={{ height: 600, width: 1600 }} />
                                </div>
                                <div className="carousel-item">
                                    <img src={background2} alt=".." style={{ height: 600, width: 1600 }} />
                                </div>
                                <div className="carousel-item">
                                    <img src={background3} alt="empty" style={{ height: 600, width: 1600 }} />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="title"><h1>Trending</h1></div>
            </section>
            <hr ></hr>
            <section className="product container">
                <div className="row g-3">
                    {
                        products.map((pro) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards product={pro} />

                            </div>

                        ))
                    }

                </div>
            </section>
            <section className="container">
                <div className="title">
                    <h1>SmartPhone</h1>
                </div>
            </section>
            <hr></hr>
            <section className="product container">
                <div className="row g-3">
                    {
                        products.map((pro) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards product={pro} />

                            </div>

                        ))
                    }

                </div>
            </section>
          

        </>

    )
}
export default Home;