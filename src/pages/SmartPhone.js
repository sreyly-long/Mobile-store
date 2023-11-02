import { useState } from "react";
import Cards from "../components/Cards";

function SmartPhone() {
    const [iphones] = useState(
        [
            {
                id: 1,
                title: "Refurbished iPhone 13 Pro MAx 128GB-Sierra Blue(SIM-Free)",
                thumbnail: "https://cdn.dxomark.com/wp-content/uploads/medias/post-94778/Apple-iPhone-13-Pro-featured-image-packshot-review.jpg"

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
                title: "Apple iPhone 13Pro MAx 5G 128GB Serra Blue(AT&T)MLKP3LL",
                thumbnail: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010758239_437Wx649H_202109291344431.jpeg"
            },
            {
                id: 5,
                title: "Apple iPhone XS MAx 256GB - Gold(CPO)-Game 4U",
                thumbnail: "https://game4u.co.za/wp-content/uploads/2022/04/Iphone-xs-rose-gold.jpg"
            },
            {
                id: 6,
                title: "Apple iPhone 13 Pro MAx 256GB Midnight by Mobile-Store",
                thumbnail: "https://powermaccenter.com/cdn/shop/files/iPhone_13_Midnight_PDP_Image_Position-1A__en-US_bb177767-bf4d-4fb3-87e1-25186af356be_823x.jpg?v=1692028845"
            },

            {
                id: 7,
                title: "iPhone 12 Pro MAx 256GB - Asia Mobile Phone",
                thumbnail: "https://apmpllc.com/storage/media/ekHqT7drL8wc8eF0obTcRkHVy2dh3u9O6xEkYZ5C.jpg"
            },
            {
                id: 8,
                title: "Apple iPhone 12 (128GB) Vermelho - Mobile View",
                thumbnail: "https://mobileview.pt/wp-content/uploads/2023/01/iphone-12-red-select-2020.png"
            },
            {
                id: 9,
                title: "Apple iPhone 14 Pro MAx 6.7 128GB-Single Sim-Mixed-DSCL NG",
                thumbnail: "https://dsclng.com/wp-content/uploads/2022/11/iphone-14-pro.webp"
            },
            {
                id: 10,
                title: "Apple iphone 5 Specifications by Mobile-Store",
                thumbnail: "https://www.manual.nz/thumbs/products/l/10310-apple-iphone-5.jpg"
            },
            {
                id: 11,
                title: "Apple iPhone 14 Plus Memory 128GB by Mobile-Store",
                thumbnail: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Plus-blue-hero_inline.jpg.slideshow-xlarge.jpg"
            },
            {
                id: 12,
                title: "Apple iPhone 11, 64GB, Black available in Mobile-Store",
                thumbnail: "https://m.media-amazon.com/images/I/612kg3rGyYL.jpg"
            },
        ]
    )
    const [samsungs] = useState(
        [
            {
                id: 1,
                title: "Samsung Galay Notes20 (Snapdrago)by Mobile-Store",
                thumbnail: "https://cdn.dxomark.com/wp-content/uploads/medias/post-65438/galaxynote20.jpg"

            },
            {
                id: 2,
                title: "Galaxy Noted 10 and Note 10 Plis look incredible",
                thumbnail: "https://www.cnet.com/a/img/resize/c575bb1d57bdc7f9444a911906ec13f393330dd9/hub/2019/08/17/b8ed4f9d-c156-40c9-b907-5e55165da33f/samsung-galaxy-note-10-plus-18.jpg?auto=webp&fit=crop&height=675&width=1200"
            },
            {
                id: 3,
                title: "Samsung Galaxy Note7 |WIRE by Mobile-Store",
                thumbnail: "https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-14pr/deeppurple/landscape-front.png"
            },
            {
                id: 4,
                title: "Samsung Galaxy Note8(Unblocked) Miding Black",
                thumbnail: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-note/pdp/sm-n950/midnight-black/Note8-Back-S-Pen-Midnight-Black.jpg?$product-details-jpg$"
            },
            {
                id: 5,
                title: "Samsung Galaxy S22 Ultra, S22+ by Mobile-Store",
                thumbnail: "https://media.wired.com/photos/6202b99c2c286ef2d70b5b0a/1:1/w_1281,h_1281,c_limit/Gear-Samsung-Galaxy-S22-Ultra.jpg"
            },
            {
                id: 6,
                title: "Samsung Galaxy S23-Price,Features&Reviews by Mobile-Store",
                thumbnail: "https://www.att.com/scmsassets/global/devices/phones/samsung/samsung-galaxy-s23/gallery/phantomblack/phantomblack-8.jpg"
            },

            {
                id: 7,
                title: "Samsung Galaxy S20|12GB|128GB|Dual-SIM",
                thumbnail: "https://files.refurbed.com/ii/samsung-galaxy-s20-1581675180.jpg?t=fitdesign&h=600&w=800"
            },
            {
                id: 8,
                title: "Samsung Galaxy Z Flip5 5G|Price&Deal| by Mobile-Store ",
                thumbnail: "https://images.samsung.com/ca/smartphones/galaxy-z-flip5/buy/product_color_mint.png"
            },
            {
                id: 9,
                title: "Samsung Galaxy Z Flip$ 128GB(Unblock)by Mobile-Store",
                thumbnail: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6512/6512612cv11d.jpg"
            },
            {
                id: 10,
                title: "Galaxy A53 5G 8GB/128GB(Blue) by Mobile-Store",
                thumbnail: "https://images.samsung.com/is/image/samsung/p6pim/in/feature/164124885/in-feature-galaxy-a-532826538?$FB_TYPE_A_MO_JPG$"
            },
            {
                id: 11,
                title: "Galaxy A80 | SM-A805FZKAXFA | Samsung AFRICA_EN",
                thumbnail: "https://images.samsung.com/is/image/samsung/africa-en-galaxy-a80-a805-sm-a805fzkaxfa-frontblack-171210113?$650_519_PNG$"
            },
            {
                id: 12,
                title: "Samsung Galaxy A14 4G 64GB Silver by Mobile-store",
                thumbnail: "https://m.media-amazon.com/images/I/414aATGEsJL._AC_UF894,1000_QL80_.jpg"
            },
        ]
    )
    const [oppo] = useState(
        [
            {
                id: 1,
                title: "Oppo A58/128GB - Mobile-Store",
                thumbnail: "https://www.henaphoneshop.com/wp-content/uploads/2023/09/oppo-a58-2.png"
            },
            {
                id: 2,
                title: "Oppo Find N2 Flip - Mobile-Store",
                thumbnail: "https://image.oppo.com/content/dam/oppo/product-asset-library/find/find-n2-series/global/find-n2-flip/v1/assets/images-kv-en-purple-mo-1.png.webp"
            },
            {
                id: 3,
                title: "Oppo A57 - Mobile-Store",
                thumbnail: "https://tech101.com.ph/wp-content/uploads/2023/02/Oppo-A57-002-1.jpg"
            },
            {
                id: 4,
                title: "Oppo Reno Specifacation",
                thumbnail: "https://www.4gltemall.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo_reno_1_.jpg"
            },
            {
                id: 5,
                title: "Oppo Reno 9 - Mobile-Store",
                thumbnail: "https://i.gadgets360cdn.com/products/large/reno-db-709x800-1669285802.jpg?downsize=*:360"
            },
            {
                id: 6,
                title: "Oppo Reno 10x Zoom by Mobile-Store",
                thumbnail: "https://assorted.downloads.oppo.com/static/archives/images/dd/Smartphones/Reno-pro/Floating-Layer-980-x-748.png"
            },
        ]
    )
    const [huawei] = useState(
        [
            {
                id:1,
                title:"Huawei Mobile Phones by Mobile-Store",
                thumbnail:"https://images.priceoye.pk/huawei-y6-prime-2019-pakistan-priceoye-gn6su.jpg"
            },
            {
                id:2,
                title:"Huawei Nova Y61GB by Mobile-Store ",
                thumbnail:"https://shunliphone.com/wp-content/uploads/2022/11/Huawei-Nova-Y61-Green-Price-in-Cambodia.jpg"
            },
            {
                id:3,
                title:"Huawei P30 Lite by Mobile-Store",
                thumbnail:"https://livgreen.co.za/cdn/shop/products/Huawei-Nova-4e_bg_2048x2048.jpg?v=1584363264"
            },
            {
                id:4,
                title:"Huawei P30 / Nova 4e Mobite-Store",
                thumbnail:"https://www.spigen.com/cdn/shop/products/crop_p30_lite_ultra_hybrid_0005__copy_merged_1200x1200.jpg?v=1620853707"
            },
            {
                id:5,
                title:"Huawei Nova 11 by Mobile-Store",
                thumbnail:"https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/nova11/resource/images/sec0/huawei-nova-11-f-nova-material.jpg"
            },
            {
                id:6,
                title:"Huawei Nova 11i by Mobile-Store",
                thumbnail:"https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/phones/nova-11i/specs/specs-img.png"
            }
        ]
    )
    return (
        <>
            <div className="smartphone"><h1>iPhone</h1></div>
            <hr></hr>
            <section className="container">
                <div className="row mt-5 g-3">
                    {
                        iphones.map(iphone => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={iphone.title} thumbnail={iphone.thumbnail} />
                            </div>


                        ))
                    }

                </div>
            </section>

            <div className="smartphone"><h1>Samsung</h1></div>
            <hr></hr>
            <section className="container">
                <div className="row mt-5 g-3">
                    {
                        samsungs.map(samsung => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={samsung.title} thumbnail={samsung.thumbnail} />
                            </div>


                        ))
                    }

                </div>
            </section>

            <div className="smartphone"><h1>Oppo</h1></div>
            <hr></hr>
            <section className="container">
                <div className="row mt-5 g-3">
                    {
                        oppo.map(oppos => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={oppos.title} thumbnail={oppos.thumbnail} />
                            </div>


                        ))
                    }

                </div>
            </section>

            <div className="smartphone"><h1>Huawei</h1></div>
            <hr></hr>
            <section className="container">
                <div className="row mt-5 g-3">
                    {
                        huawei.map(huaweis => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={huaweis.title} thumbnail={huaweis.thumbnail} />
                            </div>


                        ))
                    }

                </div>
            </section>


        </>
    )
}
export default SmartPhone;