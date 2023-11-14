import tiwa from "../assets/tiwa.jpeg"

function Hero() {
    return (
        <section className="bg-black p-5">
            <div className="container">
                <div className="row justify-between snub">
                    <div className="col-md-5">
                        <h2 className="">Mariam is a snub</h2>
                    </div>
                    <div className="col-md-5">
                        <img src={tiwa} alt="" className="img-fluid w-100" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero