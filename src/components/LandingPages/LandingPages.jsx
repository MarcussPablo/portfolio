const LandingPages = () => {
    return (
        <section id="landing" className="">
            <div className="container bg-primar ">
                <h2 className="text-center proj-title">Landing pages</h2>
                <div className="row g-4">

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img src="public/images/landing01.png" className="card-img-top" style={{ height: '100%' }} alt="Projeto 1" />
                            <div className="card-body d-flex flex-column justify-content-between ">
                                <div className="mx-auto">
                                    <a href="https://github.com/MarcussPablo/landing-01" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                                        Ver no GitHub
                                    </a>
                                    <a href="https://landing0001.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info ms-1 btn-sm">
                                        Ver online
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img src="public/images/landing02.png" className="card-img-top" style={{ height: '100%' }} alt="Projeto 1" />
                            <div className="card-body d-flex flex-column justify-content-between ">
                                <div className="mx-auto">
                                    <a href="https://github.com/MarcussPablo/landing02" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                                        Ver no GitHub
                                    </a>
                                    <a href="https://landing002.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info ms-1 btn-sm">
                                        Ver online
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img src="public/images/landing03.png" className="card-img-top" style={{ height: '100%' }} alt="Projeto 1" />
                            <div className="card-body d-flex flex-column justify-content-between ">
                                <div className="mx-auto">
                                    <a href="https://github.com/MarcussPablo/landing03" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                                        Ver no GitHub
                                    </a>
                                    <a href="https://landing03.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info ms-1 btn-sm">
                                        Ver online
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}



export default LandingPages