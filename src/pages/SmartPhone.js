import Cards from "../components/Cards";
import { phone } from "../api/phone";
import apple from "../asset/iconapple-removebg-preview.png"

function SmartPhone() { 
    return (
        <>
            <div className="smartphone container">
               <ul>
                <li><img src={apple}></img></li>           
                <li><h1>iPhone</h1></li>
               </ul>
            </div>
            <hr></hr>
            <section className="container">
                <div className="row mt-5 g-3">
                    {
                        phone.getIphone().map(iphone => (
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
                        phone.getSamsung().map(samsung => (
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
                        phone.getOppo().map(oppos => (
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
                        phone.getHuawei().map(huaweis => (
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