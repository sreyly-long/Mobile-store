import { useState } from "react";
import Cards from "../components/Cards";
import { tablet } from "../api/tablet";

function Tablet(){

    return(
        <>
         <div className="smartphone"><h1>iPad</h1></div>
         <section className="container">
            <div className="row g-3 ">
            {
                        tablet.getIpad().map(iPad => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={iPad.title} thumbnail={iPad.thumbnail} />
                            </div>


                        ))
                    }

            </div>

         </section>

         <div className="smartphone"><h1>Lenovo</h1></div>
         <section className="container">
            <div className="row g-3 ">
            {
                        tablet.getLenovo().map(lenovos => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={lenovos.title} thumbnail={lenovos.thumbnail} />
                            </div>


                        ))
                    }

            </div>

         </section>

         <div className="smartphone"><h1>Samsung</h1></div>
         <section className="container">
            <div className="row g-3 ">
            {
                        tablet.getSamsung().map(sam => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <Cards title={sam.title} thumbnail={sam.thumbnail} />
                            </div>


                        ))
                    }

            </div>

         </section>

        </>
    )
}
export default Tablet;