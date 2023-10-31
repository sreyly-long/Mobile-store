import background1 from "../asset/background1.jpg"
import background2 from "../asset/background2.avif"
import background3 from "../asset/background3.webp"
import Cards from "../components/Cards"


function Home(){

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
                <hr className="horizental"></hr>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 ">
                       

                    </div>
                  
                </div>


            </section>
        </>

    )
}
export default Home;