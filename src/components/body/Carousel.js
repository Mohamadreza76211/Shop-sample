import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Carousel.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MainContainer from './MainContainer'
import PishnahadeVizhe from './PishnahadeVizhe'

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const hotelCards = [
    {
        
        imageSrc:
        "https://dkstatics-public.digikala.com/digikala-products/fe3aecd7f047cd3e13e4a284e0f88461f0ee05bd_1645431917.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        title: 'تومان 419',
        description: '58%',
        description2: '310.000',
        // pricingText: 'USD 50/Day',
        // features: ['310.000'],
      },
      {
        
        imageSrc:"https://dkstatics-public.digikala.com/digikala-products/89ffe023c601e3f9c2e05ae05824bd4c76ac7afa_1640423010.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        title: 'تومان 419',
        description: '58%',
        description2: '310.000',
        // pricingText: 'USD 50/Day',
        // features: ['Free Wifi', 'Free breakfast'],
      },{
        
        imageSrc:
        "https://dkstatics-public.digikala.com/digikala-products/26dfdec3428f30d436e2db8982be5718dfe91e8d_1637476778.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        title: 'تومان 419',
        description: '58%',
        description2: '310.000',
        // pricingText: 'USD 50/Day',
        // features: ['Free Wifi', 'Free breakfast'],
      },{
        
        imageSrc:"https://dkstatics-public.digikala.com/digikala-products/119393305.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        title: 'تومان 419',
        description: '58%',
        description2: '310.000',
        // pricingText: 'USD 50/Day',
        // features: ['Free Wifi', 'Free breakfast'],
      },
      {
        imageSrc:"https://dkstatics-public.digikala.com/digikala-products/90f2808ca1a4ea323686714a5ba63eeff6516e23_1643110818.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        title: 'تومان 419',
        description: '58%',
        description2: '310.000',
        // pricingText: 'USD 80/Day',
        // features: ['Free Wifi', 'Free breakfast'],
      },
      {
        imageSrc:"https://dkstatics-public.digikala.com/digikala-products/121796111.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        title: 'تومان 419',
        description: '58%',
        description2: '310.000',
        // pricingText: 'USD 150/Day',
        // features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
      },
      {
        imageSrc:
          'https://dkstatics-public.digikala.com/digikala-products/d3f6e3d761c58709821959247583fdb2d177119a_1643111144.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
          title: 'تومان 419',
          description: '58%',
          description2: '310.000',
        // pricingText: 'USD 299/Day',
        // features: [
        //   'Free Wifi',
        //   'Free breakfast',
        //   'Discounted Meals',
        //   "MacBook for work use (hotel's property)",
        // ],
      },
      {
        imageSrc:"https://dkstatics-public.digikala.com/digikala-products/8342cd31fe6f67881e9084546fbde3a64ec48a61_1606253319.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        title: 'تومان 419',
        description: '58%',
        description2: '310.000',
        // pricingText: 'USD 80/Day',
        // features: ['Free Wifi', 'Free breakfast'],
      },
      {
        imageSrc:"https://dkstatics-public.digikala.com/digikala-products/70598b2f53935497d14448ed16bfc65b0492e485_1609324553.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        title: 'تومان 419',
        description: '58%',
        description2: '310.000',
        // pricingText: 'USD 80/Day',
        // features: ['Free Wifi', 'Free breakfast'],
      },
    ]

  return (
      
        <div className='content'>
          <MainContainer>
            <h1 className='Tageh1pishnahadeShegeftAngiz'>پیشنهاد <br/>شگفت<br/>انگیز</h1>
            <a href='#' className='TageAInPisnahadeVizhe'>&#8249; مشاهده همه</a>
            <PishnahadeVizhe classNameForTageh1pishnahadeShegeftAngiz="Tageh1pishnahadeShegeftAngiz" classNameForImg2InPishnahadeVizhe="image2InPishnahadeVizhe"/>
            <div className='controls'>
                <button onClick={sliderRef?.slickPrev} className='button'>
                <FaChevronLeft />
                </button>
                <button onClick={sliderRef?.slickNext} className='button'>
                <FaChevronRight />
                </button>
            </div>
            <Slider ref={setSliderRef} {...sliderSettings}>
                {hotelCards.map((card, index) => (
                <div key={index} className='card'>
                    <img src={card.imageSrc} alt={card.title} className='card-image' />
                    <div className='text-info'>
                    <div className='card-header'>
                        <h2 className='card-title'>{card.title}</h2>
                        <span>{card.pricingText}</span>
                    </div>
                    <p className='card-description'>{card.description}</p>
                    <p className='card-description2'>{card.description2}</p>
                    {/* <ul>
                        {card.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                        ))}
                    </ul> */}
                    </div>
                </div>
                ))}
            </Slider>
          </MainContainer>
        </div>
    
  )
}
export default Carousel