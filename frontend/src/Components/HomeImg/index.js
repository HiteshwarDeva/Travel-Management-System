import './index.css'

const HomeImg = (props) => {
    const {details} = props
    const {id, imgUrl, category} = details

    return (
        <li className="list-img-item">
            <div className="img-div">
                <img src={`/Images/${imgUrl}`} className="home-img"/>
            </div>
        </li>
    )
}

export default HomeImg