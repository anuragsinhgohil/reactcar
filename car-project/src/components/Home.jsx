import aboutimg from '../assets/img/about.jpg'
import Carousal1 from '../assets/img/carousel-bg-1.jpg'
import Carousal2 from '../assets/img/carousel-bg-2.jpg'

const Home = () => {
    return(
        <div>
            <div className="container-fluid p-0 mb-5">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={Carousal1} alt="Image" />
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-white text-uppercase mb-3 animated slideInDown">Car Servicing</h6>
                                            <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Repair Service Center</h1>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src="img/carousel-1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={Carousal2} alt="Image" />
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-white text-uppercase mb-3 animated slideInDown">Car Servicing</h6>
                                            <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Wash Service Center</h1>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src="img/carousel-2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Quality Servicing</h5>
                                    <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                                    <a className="text-secondary border-bottom" href="">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="d-flex bg-light py-5 px-4">
                                <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Expert Workers</h5>
                                    <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                                    <a className="text-secondary border-bottom" href="">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Modern Equipment</h5>
                                    <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                                    <a className="text-secondary border-bottom" href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 pt-4" style={{minHeight:'400px'}}>
                                <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                                    <img className="position-absolute img-fluid w-100 h-100" src={aboutimg} style={{objectFit:'cover'}} alt="" />
                                    <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{background:'rgba(0, 0, 0, .08)'}}>
                                        <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Years</span></h1>
                                        <h4 className="text-white">Experience</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h6 className="text-primary text-uppercase">About Us</h6>
                                <h1 className="mb-4"><span className="text-primary">CarServ</span> Is The Best Place For Your Auto Care</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <div className="row g-4 mb-3 pb-3">
                                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="d-flex">
                                            <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width:'45px', height:'45px'}}>
                                                <span className="fw-bold text-secondary">01</span>
                                            </div>
                                            <div className="ps-3">
                                                <h6>Professional & Expert</h6>
                                                <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="d-flex">
                                            <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width:'45px', height:'45px'}}>
                                                <span className="fw-bold text-secondary">02</span>
                                            </div>
                                            <div className="ps-3">
                                                <h6>Quality Servicing Center</h6>
                                                <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="d-flex">
                                            <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width:'45px', height:'45px'}}>
                                                <span className="fw-bold text-secondary">03</span>
                                            </div>
                                            <div className="ps-3">
                                                <h6>Awards Winning Workers</h6>
                                                <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="" className="btn btn-primary py-3 px-5">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="container-fluid fact bg-dark my-5 py-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                                <i className="fa fa-check fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Years Experience</p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                                <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Expert Technicians</p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                                <i className="fa fa-users fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Satisfied Clients</p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                                <i className="fa fa-car fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Compleate Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Home