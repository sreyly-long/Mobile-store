import { Card } from "react-bootstrap"
import background1 from "../asset/background1.jpg"
import background2 from "../asset/background2.avif"
import background3 from "../asset/background3.webp"
import Cards from "../components/Cards"
import { Link } from "react-router-dom"




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
    ]



    return (
        <>
            <section className="bgnb">
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
            <section className="container">
                <div className="row g-3">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://m.economictimes.com/thumb/msid-98897778,width-1200,height-1200,resizemode-4,imgsize-35708/6-latest-mobile-phones-with-12gb-ram-in-india.jpg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Mobile Phones with 12GB RAM:6 Latest Mobile Phones 12GB</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://imageio.forbes.com/specials-images/imageserve/64e74ad803781abed13b0612/Apple--iPhone--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-release--new/0x0.jpg?format=jpg&crop=1275,956,x113,y0,safe&width=960"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">New Report Backs iPhone 15 Pro, iPhone 15 Pro Max Price Rises</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-14pr/deeppurple/landscape-front.png"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">iPhone 14pro - Telstra 12GB Camera RAM:6 by Mobile-Store</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://media.router-switch.com/media/catalog/product/cache/b90fceee6a5fa7acd36a04c7b968181c/s/a/samsung-galaxy-s21-5g-sm-g9910.jpg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Samsung Galaxy S21 5G SM-G9910 by Mobile-Store</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://www.pbtech.co.nz/imgprod/T/A/TABLEN7903__1.jpg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Lenovo M7 3rd Gen (TB-7305F)Tablet - lron Grey 32GB</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://m.media-amazon.com/images/I/41yx-OTfNwL.jpg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Oppo A78 5G(Glowing Blue,8GB RAM,128 Stronge)|5000 mAh</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="title">
                    <h1>Tablet</h1>
                </div>
            </section>
            <hr></hr>
            <section className="container">
                <div className="row g-3">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://www.android.com/static/2016/img/devices/tablets/transparent/galaxy-tab-s2_1x.png"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Android Tablet by Mobile-Store </p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://cdn1.smartprix.com/rx-iSqCSLMbq-w1200-h1200/SqCSLMbq.jpg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Apple iPid Pro 12.9 2021 Tabblet</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://www.tradeinn.com/f/13754/137543065/apple-ipad-pro-256gb-11.jpg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Apple iPad Pro 256GB 11 by Mobile-Store</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://fdn2.gsmarena.com/vv/bigpic/huawei-mediapad-m5-10.jpg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Huawei MediaPad M5 10 Mobile-Store</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://m.media-amazon.com/images/I/61+WzBO2KQL._AC_UF894,1000_QL80_.jpg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Stylus Pen for iPad Pencil by Mobile-Store</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://cdn.shopify.com/s/files/1/0565/5134/2275/files/Huawei_MatePad_T10_480x480.png?v=1675736414"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Top 10 Affordable Tablet by Mobile-Store</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="title">
                    <h1>LapTop</h1>
                </div>
            </section>
            <hr></hr>
            <section className="container">
                <div className="row g-3">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://media.wired.com/photos/64daad6b4a854832b16fd3bc/4:3/w_1787,h_1340,c_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Laptop Buying Guide(2023) </p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://i5.walmartimages.com/seo/ASUS-ROG-Strix-15-6-R9-RTX-3060-Gaming-Laptop-FHD-AMD-Ryzen-9-5900HX-NVIDIA-GeForce-3060-16GB-RAM-1TB-SSD-Eclipse-Gray-Windows-10-Home-G513QM-WS96_8ca98551-8e80-431a-a0bf-2ae037b9e571.74a18e3919f93a362f7367ac2d157d84.jpeg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">ASUS ROG Strix 15.6 R9 RTX 3060</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://m.media-amazon.com/images/I/61DurOT--9L.jpg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Lenovo IP Gaming 3 AMD Ryzen 5 5600</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://i5.walmartimages.com/seo/Lenovo-Ideapad-Gaming-Chromebook-16-0-WQXGA-2-5K-IPS-Display-Intel-Core-i3-1215U-8GB-RAM-128GB-eMMC-Storm-Grey-82V80009UX-Cloud-Gaming_0c8c2bbb-6e19-47fc-9b81-d0c236f1b43a.0d12448c4d3956fad8563e57b6a68569.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Lenovo Ideapad Gaming Chrmebook</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://itsolution-cambodia.com/wp-content/uploads/2023/01/Lenovo-ThinkPad-E14.png"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">LAptop Lenovo ThinkPAd Gen2-ITU </p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://i.ebayimg.com/images/g/sRsAAOSwSGxlNiua/s-l1200.webp"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Lenovo ThinkPad X1 Nano Gen113&#031</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="title">
                   <h1>SmartWatch</h1>
                </div>
            </section>
            <hr></hr>

            <section className="container">
                <div className="row g-3">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://m.media-amazon.com/images/I/712+lS1mk-L.jpg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Phone SmartWatch Answer/Make Calls</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://contents.mediadecathlon.com/p2320005/k$6e46fbd99b3381f1da3d205fbd250c3b/cw900-hr-well-being-smart-watch-blue.jpg?format=auto&quality=70&f=768x768"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">CW900 HR WELL - BEING SMART WATCH</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://cdna.lystit.com/520/650/n/photos/amazon/3c8b9637/umbro-Black-Bluetooth-Smart-Watch-Watch-With-Sports-Functions-Hr-Smartwatch-And-Body-Temperature-Sensor-Smart-Watch-Touch-Screen-096.jpeg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Umbro Bluetooth Smart Watch with Sport </p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://i5.walmartimages.com/seo/Lenovo-Ideapad-Gaming-Chromebook-16-0-WQXGA-2-5K-IPS-Display-Intel-Core-i3-1215U-8GB-RAM-128GB-eMMC-Storm-Grey-82V80009UX-Cloud-Gaming_0c8c2bbb-6e19-47fc-9b81-d0c236f1b43a.0d12448c4d3956fad8563e57b6a68569.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Lenovo Ideapad Gaming Chrmebook</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://5.imimg.com/data5/SELLER/Default/2022/4/KM/LW/WN/36969715/m5-smart-band-watch.jpg"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Black Rectangular M5 Smart Band Watch</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card">
                            <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697625617/Croma%20Assets/Communication/Wearable%20Devices/Images/272414_sxxpyk.png"class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Smartwatch with Bluetooth calling</p>
                                <a href="#" class="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default Home;