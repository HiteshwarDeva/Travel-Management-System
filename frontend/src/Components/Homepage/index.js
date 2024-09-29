import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer/footer'
import HomeImg from '../HomeImg'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'Images/Courousel-1.jpg',
        'Images/Courousel-2.jpg',
        'Images/Courousel-4.jpg',
    ];

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const placesarr = [
        {
            id: 0,
            imgUrl: 'India-1.jpeg',
            country: 'India',
        },
        {
            id: 1,
            imgUrl: 'India-2.jpeg',
            country: 'India',
        },
        {
            id: 2,
            imgUrl: 'India-3.jpeg',
            country: 'India',
        },
        {
            id: 3,
            imgUrl: 'India-4.jpeg',
            country: 'India',
        },
        {
            id: 4,
            imgUrl: 'India-5.jpeg',
            country: 'India',
        },
        {
            id: 5,
            imgUrl: 'Dubai-1.jpeg',
            country: 'Dubai',
        },
        {
            id: 6,
            imgUrl: 'Dubai-2.jpeg',
            country: 'Dubai',
        },
        {
            id: 7,
            imgUrl: 'Dubai-3.jpeg',
            country: 'Dubai',
        },
        {
            id: 8,
            imgUrl: 'Dubai-4.jpeg',
            country: 'Dubai',
        },
        {
            id: 9,
            imgUrl: 'Dubai-5.jpeg',
            country: 'Dubai',
        },
        {
            id: 10,
            imgUrl: 'Malaysia-1.jpeg',
            country: 'Malaysia',
        },
        {
            id: 11,
            imgUrl: 'Malaysia-2.jpeg',
            country: 'Malaysia',
        },
        {
            id: 12,
            imgUrl: 'Malaysia-3.jpeg',
            country: 'Malaysia',
        },
        {
            id: 13,
            imgUrl: 'Malaysia-4.jpeg',
            country: 'Malaysia',
        },
        {
            id: 14,
            imgUrl: 'USA-1.jpeg',
            country: 'USA',
        },
        {
            id: 15,
            imgUrl: 'USA-2.jpeg',
            country: 'USA',
        },
        {
            id: 16,
            imgUrl: 'USA-3.jpeg',
            country: 'USA',
        },
        {
            id: 17,
            imgUrl: 'USA-4.jpeg',
            country: 'USA',
        },

    ]


    const [placeslist, setPlacesList] = useState(placesarr);

    const modifiedlist = (event) => {
        const filteredPlaces = placesarr.filter(eachPlace => eachPlace.country === event.target.textContent);
        setPlacesList(filteredPlaces);
    };


    return (
        <div className='home-bg-container'>
            <Navbar />
            <div className="home-info-container">
                <div className='courosel-container'>
                    <div className="carousel">
                        <div className="carousel-inner">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={index === currentIndex ? "carousel-item active" : "carousel-item"}
                                >
                                    {index === currentIndex && <img className='carousel-image' src={image} alt={`Slide ${index + 1}`} />}
                                </div>
                            ))}
                        </div>
                        <button onClick={goToPrevious} className="carousel-control prev">&#10094;</button>
                        <button onClick={goToNext} className="carousel-control next">&#10095;</button>
                    </div>
                </div>
                <br />
                <h1 className="home-query">“The world is a book and those who do not travel read only one page.” – Augustine of Hippo</h1>
                <div className="home-container-2">
                    <h1 class="deatination-heading">Our Top Destinations</h1>
                    <ul className="destination-list-container">
                        <li className="destination-list-name" onClick={modifiedlist} name="India">India</li>
                        <li className="destination-list-name" onClick={modifiedlist} name="Dubai">Dubai</li>
                        <li className="destination-list-name" onClick={modifiedlist} name="Malaysia">Malaysia</li>
                        <li className="destination-list-name" onClick={modifiedlist} name="USA">USA</li>
                    </ul>
                    <div>
                        <ul className="place-list-container">
                            {
                                placeslist.map((eachItem) => (
                                    <HomeImg details={eachItem} id={eachItem.id} />
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="expertise-container">
                    <h1 className='expertise-mainheading'>Our Expertise</h1>
                    <div className='expertise-inner-container'>
                        <img className='expertise-img' src={'Images/expertise-1.png'} />
                        <div className='expertise-info-container'>
                            <h1 className='expertise-heading'>CUSTOMER SATISFACTION</h1>
                            <p className='expertise-info'>We offer expert and passionate advice for finding the right service.</p>
                        </div>
                    </div>
                    <div className='expertise-inner-container'>
                        <img className='expertise-img' src={'Images/expertise-2.png'} />
                        <div className='expertise-info-container'>
                            <h1 className='expertise-heading'>SECURE BOOKING</h1>
                            <p className='expertise-info'>Our reservation system is secure We guarantee your privacy.</p>
                        </div>
                    </div>
                    <div className='expertise-inner-container'>
                        <img className='expertise-img' src={'Images/expertise-3.png'} />
                        <div className='expertise-info-container'>
                            <h1 className='expertise-heading'>BEST DEALS</h1>
                            <p className='expertise-info'>We offer the best services at the best price.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home