const Cards = ({title,thumbnail}) => {
    return (
        <>
            <section className="d-flex justify-content-center">
               <div className="row ">
                    <div className="col-12 col-sm-6 col-ml-4 col-lg-3 col-xl-2">
                    <div className="card">
                    <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p class="card-text">{title}</p>
                            <ul>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            </ul>
                            <a href="#" class="btn btn-secondary">See More...</a>
                        </div>
                </div>
                    </div>
               </div>
            </section>
        </>
    )
}
export default Cards;