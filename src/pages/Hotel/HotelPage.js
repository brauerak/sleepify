import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";

function HotelPage (props) {

    const params = useParams();
    const [hotel, setHotel] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchHotel = () => {
        setHotel({id: 3,
            name: "Apartment Modern",
            city: "Paris",
            rating: 9.5,
            image: ''})
            setLoading(false)
    }

    useEffect(() => {
        setTimeout(() => {
            fetchHotel();
        }, 500);
    }, []);

    if (loading) return <LoadingIcon />
    return <p>Hotel: {hotel.name}</p>
}

export default HotelPage;