import React from 'react'
import t1 from '../../utility/images/t1.jpg'
import t2 from '../../utility/images/t2.jpg'
import t3 from '../../utility/images/t3.jpg'
import t4 from '../../utility/images/t4.jpg'

const MainSlider = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <a href='#'>
        <img src={t1} className="d-block w-100" alt="..."/>
      </a>
    </div>
    <div className="carousel-item">
      <a href='#'>
        <img src={t2} className="d-block w-100" alt="..."/>
      </a>
    </div>
    <div className="carousel-item">
      <a href='#'>
        <img src={t3} className="d-block w-100" alt="..."/>
      </a>
    </div>
    <div className="carousel-item">
      <a href='#'>
        <img src={t4} className="d-block w-100" alt="..."/>
      </a>
    </div>
    {/* <div className="carousel-item">
      <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/284aef5d0551f82a3357564b3a30d9c6efe67253_1646729714.jpg?x-oss-process=image/quality,q_95" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c056f6ea0d6ec1d6a886e200c713b5f1cc5e1734_1646745088.jpg?x-oss-process=image/quality,q_95" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/33bdbd851e71952f63a578e51c42882121ed5563_1646567052.jpg?x-oss-process=image/quality,q_95" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/b652a22f6459452b592d932c1d1c61259aead8d7_1645437700.jpg?x-oss-process=image/quality,q_95" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/284aef5d0551f82a3357564b3a30d9c6efe67253_1646729714.jpg?x-oss-process=image/quality,q_95" className="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default MainSlider
