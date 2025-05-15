const Card = ({ title, para, provider, price, images }) => {
  return (
    <>
      <div className="card">
        <img src={images} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{para}</p>
          <div className="provide">
            <div>
              <p>{provider}</p>
              <p>{price}</p>
            </div>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

    </>
  )
}
export default Card