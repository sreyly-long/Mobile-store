import { Card } from "react-bootstrap"
import background1 from "../asset/background1.jpg"
import background2 from "../asset/background2.avif"
import background3 from "../asset/background3.webp"
import Cards from "../components/Cards"
import { useState } from "react"
import { supplier } from "../api/product"


const Home = () => {

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
                        supplier.getProducts().map((pro) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={pro.title} thumbnail={pro.thumbnail} />

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
                    {
                        supplier.getSmartPhone().map((smart) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={smart.title} thumbnail={smart.thumbnail} />
                            </div>

                        ))
                    }

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
                    {
                        supplier.getTablet().map((tablet) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={tablet.title} thumbnail={tablet.thumbnail} />
                            </div>

                        ))
                    }

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
                    {
                        supplier.getLapTop().map((laptop) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={laptop.title} thumbnail={laptop.thumbnail} />
                            </div>

                        ))
                    }
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
                    {
                        supplier.getSmartWatch().map((smartwatch) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={smartwatch.title} thumbnail={smartwatch.thumbnail} />
                            </div>

                        ))
                    }

                </div>
            </section>
        </>

    )
}
export default Home;