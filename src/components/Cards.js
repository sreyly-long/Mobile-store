const Cards = ({title,thumbnail}) => {
    return (
        <>
            <section>
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
            </section>
        </>
    )
}
export default Cards;