
type SlideProps = {
    images: string[]
    variant: string
}

const Slide = ({images, variant}: SlideProps) => {
  return (
    <section className="ul-slide-container">
        <ul className={`ul-slide ${variant}`}>
            {images.map(image => {
                return <li className="">
                    <img src={image} className="slide-image" />
                </li>
            })}
        </ul>
    </section>
  )
}

export default Slide