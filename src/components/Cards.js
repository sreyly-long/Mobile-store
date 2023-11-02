const Cards = ({title,thumbnail}) => {
    return (
        <>
            <section>
            <div class="card">
                    <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">{title}</p>
                            <a href="#" class="btn btn-secondary">Add to Cart</a>
                        </div>
                </div>
            </section>
        </>
    )
}
export default Cards;