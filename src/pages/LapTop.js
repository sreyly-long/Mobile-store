import Cards from "../components/Cards";
import { laptop } from "../api/laptop";

function LapTop(){

    return(
        <>
        <div className="smartphone"><h1>Dell</h1></div>
        <section>
            <div className="container">
                <div className="row g-3">
                    {
                         laptop.getDell().map(dells=> (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={dells.title} thumbnail={dells.thumbnail} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
        <div className="smartphone"><h1>Asus</h1></div>
        <section>
            <div className="container">
                <div className="row g-3">
                    {
                         laptop.getAsus().map(asus=> (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={asus.title} thumbnail={asus.thumbnail} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

        <div className="smartphone"><h1>Apple</h1></div>
        <section>
            <div className="container">
                <div className="row g-3">
                    {
                         laptop.getApple().map(asus=> (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={asus.title} thumbnail={asus.thumbnail} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
        </>

    )
}
export default LapTop;