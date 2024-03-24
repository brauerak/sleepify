import { useParams } from "react-router-dom";

function Search (props) {

    const { term } = useParams()
    
    return (
        <div>
            Results for {term}: 
        </div>
    );
}

export default Search