import { Link } from 'react-router-dom'
import './index.css'

const Bookingspage = () => {
    return (
        <div className="bookings-bg-container">
            <div className="booking-division-container">
                <h1 className="division-heading-container">National Aviation Services</h1>
                <div className="division-inner-container">
                    <div className="card-container">
                        <img className="card-img" src={'Images/Bookings-indigo.png'} />
                        <h1 className="card-heading">Indigo</h1>
                        <p className="card-para">Indigo founded in 2006 has an market share of morethan 54% in 2003.
                            Famous for its low cost aviation and year long deals and offers.
                        </p>
                        <a target="_blank" className="card-anchor" href="https://www.goindigo.in/">Click here for using services</a>
                    </div>
                    <div className="card-container">
                        <img className="card-img" src={'Images/Bookings-vistara.jpeg'} />
                        <h1 className="card-heading">Vistara</h1>
                        <p className="card-para">Vistara is a joint venture between Tata Sons and Singapore Airlines
                            (SIA) that was founded in 2013.Vistara is quickly becoming popular
                            for its affordable travel rates coupled with premium hospitality.
                            Vistara has a market share of 10.4%.
                        </p>
                        <a target="_blank" className="card-anchor" href="https://www.airvistara.com/in/">Click here for using services</a>
                    </div>
                    <div className="card-container">
                        <img className="card-img" src={'Images/Bookings-airindia.jpeg'} />
                        <h1 className="card-heading">Air India</h1>
                        <p className="card-para">It offers some of the cheapest fares while also providing the most
                            luggage capacity (25 kg for the economy class) among all the airlines
                            which is highly appreciated by flyers. Air India's solid belief in offering
                            the warmest of hospitalities is symbolised by their mascot, 'The Maharajah'
                            and makes it one of the Best Airlines in India.
                        </p>
                        <a target="_blank" className="card-anchor" href="https://www.airindia.com/">Click here for using services</a>
                    </div>
                </div>
            </div>
            <div className="booking-division-container">
                <h1 className="division-heading-container">International Aviation Services</h1>
                <div className="division-inner-container">
                    <div className="card-container">
                        <img className="card-img" src={'Images/Bookings-singaporeairlines.png'} />
                        <h1 className="card-heading">Singapore Airlines</h1>
                        <p className="card-para">Singapore Airlines is the national airline of the Republic of Singapore
                            and is known for its outstanding service and luxurious travel experience.
                            It is regularly ranked among the best airlines in the world and enjoys an
                            excellent reputation among passengers.
                        </p>
                        <a target="_blank" className="card-anchor" href="https://www.singaporeair.com/">Click here for using services</a>
                    </div>
                    <div className="card-container">
                        <img className="card-img" src={'Images/Bookings-qatarairways.png'} />
                        <h1 className="card-heading">Qatar Airways</h1>
                        <p className="card-para">Qatar Airways is the national airline of the State of Qatar and the proud
                            winner of the Skytrax Airline of the Year 2022 Award.The airline places great emphasis on comfort,
                            first-class cuisine and a trend-setting in-flight product. It is known for its luxurious travel
                            experiences and stands for excellent service.
                        </p>
                        <a target="_blank" className="card-anchor" href="https://www.qatarairways.com/en-in/">Click here for using services</a>
                    </div>
                    <div className="card-container">
                        <img className="card-img" src={'Images/Bookings-delta.png'} />
                        <h1 className="card-heading">Delta Airlines</h1>
                        <p className="card-para">Delta's outstanding operational performance, commitment to safety and premium customer service has
                            earned 2024 Airline of the Year by aviation publication Air Transport World. Delta landed on TIME's
                            inaugural list of the “World's Best Companies,” coming in at No. 12 – the only U.S. airline in the top 155.
                        </p>
                        <a target="_blank" className="card-anchor" href="https://www.delta.com/apac/en">Click here for using services</a>
                    </div>
                </div>
            </div>
            <div className="booking-division-container">
                <h1 className="division-heading-container">National Train Services</h1>
                <div className="divison-inner-container">
                    <div className="card-container">
                        <img className="card-img" src={'Images/Bookings-irctc.png'} />
                        <h1 className="card-heading">IRCTC</h1>
                        <p> className="card-para"Indian Railway Catering and Tourism Corporation is an Indian public sector undertaking that provides ticketing,
                            catering, and tourism services for the state-owned Indian Railways. It was established in 1999 by the Government
                            of India and operated under the administrative control of the Ministry of Railways.
                        </p>
                        <Link to='/trains' className='bookings-linkel'> Click here for Trains List</Link>
                        <Link to='/checkpnr'  className='bookings-linkel'>Click here to check PNR Status</Link>
                        <a target="_blank" className="card-anchor" href="https://www.irctc.co.in//">Click here for using services</a>
                    </div>
                </div>
            </div>
            <br />
            <div className="booking-division-container">
                <h1 className="division-heading-container">National Cruise Services</h1>
                <div className="division-inner-container">
                    <div className="card-container">
                        <img className="card-img" src={'Images/Bookings-cordelia.jpeg'} />
                        <h1 className="card-heading">Cordelia Cruises</h1>
                        <p className="card-para">Cordelia Cruises by Waterways Leisure Tourism Pvt Ltd is India’s premium cruise line. True to its name,
                            Cordelia aspires to promote and drive the cruise culture in India through experiences that are stylish,
                            luxurious and most importantly, inherently Indian. Cordelia is a cruise line for Indians catering to the way Indians love to holiday.
                        </p>
                        <a target="_blank" className="card-anchor" href="https://www.cordeliacruises.com//">Click here for using services</a>
                    </div>
                    <div className="card-container">
                        <img className="card-img" src={'Images/Bookings-angriya.png'} />
                        <h1 className="card-heading">Angriya Cruises</h1>
                        <p className="card-para">Voyages from Mumbai to Goa along the Konkan Coast aboard a ship with an infinity pool & live music.
                        </p>
                        <a target="_blank" className="card-anchor" href="https://angriyacruises.com/">Click here for using services</a>
                    </div>
                </div>
            </div>
            <div className="booking-division-container">
                <h1 className="division-heading-container">International Cruises Services</h1>
                <div className="division-inner-container">
                    <div className="card-container">
                        <img className="card-img" src={'Images/Bookings-regent.png'} />
                        <h1 className="card-heading">Regent Seven Seas</h1>
                        <p className="card-para">Regent Seven Seas Cruises, formerly known as Radisson Seven Seas Cruises, is a luxury cruise line headquartered in Miami, Florida. Since September 2014, Regent Seven Seas Cruises has been a wholly owned subsidiary of Norwegian Cruise Line Holdings, which also owns Norwegian Cruise Line and Oceania Cruises.
                        </p>
                        <a target="_blank" className="card-anchor" href="https://www.rssc.com/">Click here for using services</a>
                    </div>
                    <div className="card-container">
                        <img className="card-img" src={'Images/Bookings-virgin.png'} />
                        <h1 className="card-heading">Virgin Voyages</h1>
                        <p className="card-para">Virgin Voyages is a cruise line headquartered in Plantation, Florida and a joint venture between the Virgin Group and Bain Capital. As of April 2024, Virgin Voyages has three ships in the fleet, with one more on order, all with an expected capacity of approximately 2,700 passengers each.
                        </p>
                        <a target="_blank" className="card-anchor" href="https://www.virginvoyages.com/">Click here for using services</a>
                    </div>
                    <div className="card-container">
                        <img className="card-img" src={'Images/Bookings-holland.jpeg'} />
                        <h1 className="card-heading">Holland America Line</h1>
                        <p className="card-para">Holland America Line is a US-owned cruise line, a subsidiary of Carnival Corporation & plc headquartered in Seattle, Washington, United States.
                        </p>
                        <a target="_blank" className="card-anchor" href="https://www.hollandamerica.com/en">Click here for using services</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookingspage