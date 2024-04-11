import { useRef, useState } from "react";
import Input from "../../../components/Input/Input";
import LoadingFormIcon from "../../../components/UI/LoadingFormIcon/LoadingFormIcon";
import validateEmail from "../../../helpers/validation/validationEmail";

function AddHotel (props) {

    const imageRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        city: '',
        rooms: 2,
        description: '',
        amenitiles: [],
        image: null,
        aviability: true
    });
    

    const submit = e => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            console.log(form);
            console.log(imageRef.current)
            setLoading(false);
        }, 1000)
    }

    
    return (
        <>
            <form onSubmit={submit}>
                
                
                <Input
                    label='Name'
                    value={form.name}
                    onChange={value => setForm({...form, name: value})} 
                    error=''
                    showError={false}   
                />

                <Input
                    label='City'
                    value={form.city}
                    onChange={value => setForm({...form, city: value})} 
                    error=''
                    showError={false}   
                />


                <Input
                    type='select'
                    label='No. of rooms'
                    value={form.rooms}
                    onChange={value => setForm({...form, rooms: value})}
                    options={[
                        {value:1, label: 1},
                        {value:2, label: 2},
                        {value:3, label: 3},
                        {value:4, label: 4},
                    ]}
                    error=''
                    showError={false}   
                />

                <Input
                    type='textarea'
                    label='Description'
                    value={form.description}
                    onChange={value => setForm({...form, description: value})} 
                    error=''
                    showError={false}   
                />

                <h5>Amenities</h5>
                <Input
                    type='checkbox'
                    value={form.amenitiles}
                    onChange={value => setForm({...form, amenitiles: value})}
                    options={[
                        {value:'tv', label: 'TV'},
                        {value:'wifi', label: 'Wi-Fi'},
                        {value:'pool', label: 'Pool'},
                        {value:'pets', label: 'Pets friendly'},
                        {value:'parinkg', label: 'Parking'},
                        {value:'selfcheckin', label: 'Self Check-In'},
                    ]}
                    error=''
                    showError={false}   
                />
                
                <h5>Images</h5>
                <Input 
                        type='file' 
                        ref={imageRef}
                        onChange={value => setForm({...form, image: value})}
                 />

                <h5>Availability</h5>
                <Input
                    type='radio'
                    value={form.aviability}
                    name='aviability'
                    onChange={value => setForm({...form, aviability: value})}
                    options={[
                        {value:'1', label: 'Available'},
                        {value:'0', label: 'Not yet'},
                    ]}
                    error=''
                    showError={false}   
                />
                {loading
                    ? <LoadingFormIcon />
                    : <button className="btn btn-secondary m-3">Add</button>
                }
            </form>
        </>
    )
}

export default AddHotel;