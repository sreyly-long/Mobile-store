import { watch } from "../api/watch";
import Cards from "../components/Cards";

function SmartWatch(){
    return(
        <>
        <section className="container">
                <div className="smartphone"><h1>Apple</h1></div>
        </section>
        <hr ></hr>
        <section>
        <div className="container">
                <div className="row mt-5 g-3">
                    {
                         watch.getApple().map(applew=> (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={applew.title} thumbnail={applew.thumbnail} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

        <section className="container">
                <div className="smartphone"><h1>Android</h1></div>
        </section>
        <hr ></hr>
        <section>
        <div className="container">
                <div className="row mt-5 g-3">
                    {
                         watch.getAndroid().map(android=> (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={android.title} thumbnail={android.thumbnail} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

        <section className="container">
                <div className="smartphone"><h1>Bracelet</h1></div>
        </section>
        <hr ></hr>
        <section>
        <div className="container">
                <div className="row mt-5 g-3">
                    {
                         watch.getBluetooth().map(blue=> (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={blue.title} thumbnail={blue.thumbnail} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
        </>
    )
}
export default SmartWatch;