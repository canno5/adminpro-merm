const HeroImage = ({className, img}) => {
    return (
        <>
            <div className={className}>
                <img src={img} alt="" />
            </div>
        </>
    )
}
export default HeroImage