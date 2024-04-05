import { useRef, useState } from "react";
import LoadingFormIcon from "../../../components/UI/LoadingFormIcon/LoadingFormIcon";
import validateEmail from "../../../helpers/validation/validationEmail";

function AddHotel (props) {

    const imageRef = useRef();
    const [form, setForm] = useState({
        name: '',
        city: '',
        rooms: 2,
        description: '',
        amenitiles: [],
        image: null,
        aviability: true
    });
    const [loading, setLoading] = useState(false);

    const submit = e => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            console.log(form);
            console.log(imageRef.current)
            setLoading(false);
        }, 1000)
    }

    const changeAmenitiesHandler = e => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            // rozpakowujemy tablice 'amenitiless' i dodajemy do niej nowe value
            const newAmenities = [...form.amenitiles, value];
            // rozpakowujemy 'form' i 'amenitiles' nadpisujemy nową tabelą 'newAmenitiles'
            setForm({...form, amenitiles: newAmenities});
        } else {
            // filtrujemy obecna tablice 'amenitiles' zostawiamy w nniej wszystko co nie jest 'value'
            const newAmenities = form.amenitiles.filter(x => x !== value);
            setForm({...form, amenitiles: newAmenities});
        }
    }
    return (
        <>
            <form onSubmit={submit}>
                <div className="form-group m-3">
                    <label className="form-label">Name</label>
                    <input 
                        value={form.name}
                        // e setForm rozpakowuje cały form i nadpisuje zmienna 'name' na obecne value
                        onChange={e => setForm({...form, name: e.target.value})}
                        className="form-control" 
                        type='text' />
                </div>

                <div className="form-group m-3">
                    <label className="form-label">City</label>
                    <input 
                        value={form.city}
                        onChange={e => setForm({...form, city: e.target.value})} 
                        className="form-control" 
                        type='text' />
                </div>

                <div className="form-group m-3">
                    <label className="form-label">No. of rooms</label>
                    <select 
                        value={form.rooms}
                        onChange={e => setForm({...form, rooms: e.target.value})}
                        className="form-control" 
                        type='text'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div className="form-group m-3">
                    <label className="form-label">Description</label>
                    <textarea 
                        value={form.description}
                        onChange={e => setForm({...form, description: e.target.value})}
                        className="form-control" 
                        type='text' />
                </div>

                <h5>Amenities</h5>
                <div className="form-group m-3">
                    <label className="p-3">
                        <input 
                            type='checkbox' 
                            className="m-2"
                            value="tv"
                            onChange={changeAmenitiesHandler}
                            checked={form.amenitiles.find(x => x === 'tv')}
                            id="tv"
                        /> TV
                    </label>
                    <label className="p-3">
                        <input 
                            type='checkbox'
                            className="m-2"
                            onChange={changeAmenitiesHandler}
                            value="wifi"
                            checked={form.amenitiles.find(x => x === 'wifi')}
                            id="wifi"
                        /> Wi-Fi 
                    </label>
                    <label className="p-3">
                        <input 
                            type='checkbox'
                            className="m-2"
                            value="pool"
                            onChange={changeAmenitiesHandler}
                            checked={form.amenitiles.find(x => x === 'pool')}
                            id="pool"                            
                        /> Pool
                    </label>
                    <label className="p-3">
                        <input 
                            type='checkbox'
                            className="m-2"
                            value="pets"
                            onChange={changeAmenitiesHandler}
                            checked={form.amenitiles.find(x => x === 'pets')}
                            id="pets"
                        /> Pets friendly
                    </label>
                    <label className="p-3">
                        <input 
                            type='checkbox'
                            className="m-2"
                            value="parking"
                            onChange={changeAmenitiesHandler}
                            checked={form.amenitiles.find(x => x === 'parking')}
                            id="parking"
                        /> Parking
                    </label>
                    <label className="p-3">
                        <input 
                            type='checkbox'
                            className="m-2" 
                            value="selfcheckin"
                            onChange={changeAmenitiesHandler}
                            checked={form.amenitiles.find(x => x === 'selfcheckin')}
                            id="selfcheckin"
                        /> Self check-in
                    </label>
                </div>

                <h5>Images</h5>
                <div className="form-group m-3">
                    <input 
                        type='file' 
                        ref={imageRef}
                        onChange={e => setForm({...form, image: e.target.files})}
                    />
                </div>

                <h5>Availability</h5>
                <div className="form-group m-2">
                    <label className="p-3">
                        <input 
                            type='radio'
                            value={1} 
                            name="status"
                            id="availability"
                            onChange={e => setForm({...form, aviability: e.target.value})}
                            checked={form.aviability == 1}
                            className="m-2"/>Yes</label>
                    <label className="p-3">
                        <input 
                            type='radio'
                            value={0} 
                            name="status"
                            id="not-aviability"
                            onChange={e => setForm({...form, aviability: e.target.value})}
                            checked={form.aviability == 0} 
                            className="m-2"/>No</label>
                </div>
                {loading
                    ? <LoadingFormIcon />
                    : <button className="btn btn-secondary m-3">Add</button>
                }
            </form>
        </>
    )
}

export default AddHotel;