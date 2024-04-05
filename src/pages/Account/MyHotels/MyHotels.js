import { Link, useLocation, useMatch } from "react-router-dom"

function MyHotels (props) {

    return (
        <>
            <div className="text-start m-3"> No hotels yet. </div>
            <Link to={"/account/hotels/addhotel"} className='btn btn-outline-secondary m-2'>Add hotel</Link>
        </>
    )
}

export default MyHotels