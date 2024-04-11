import { useRef } from "react"

const InputText = props => {
    return (
        <div className="form-group m-3">
            <label className="form-label">{props.label}</label>
            <input
                value={props.value}
                // e setForm rozpakowuje cały form i nadpisuje zmienna 'name' na obecne value
                onChange={(e) => props.onChange(e.target.value)}
                type={props.type}
                className={`form-control ${
                props.error && props.showError ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback"> {props.error} </div>
        </div>
    )
};
const InputSelect = props => {
    return (
        <div className="form-group m-3">
            <label className="form-label">{props.label}</label>
            <select
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                className={`form-control ${
                    props.error && props.showError ? "is-invalid" : ""}`}
            >
                {props.options.map(option => 
                    <option value={option.value} key={option.value}>{option.label}</option>    
                )}
            </select>
            <div className="invalid-feedback"> {props.error} </div>
    </div>
    )
};
const InputCheckbox = props => {

    const changeAmenitiesHandler = e => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            const newValue = [...props.value, value];
            props.onChange(newValue)
        } else {
            const newValue = props.value.filter(x => x !== value);
            props.onChange(newValue);
        }
    }
    return (
        <div className="form-group m-3">
            {props.options.map(option => (
                <label className="p-3" htmlFor={option.value} key={option.value}>
                    <input
                    type="checkbox"
                    className="m-2"
                    value={option.value}
                    onChange={changeAmenitiesHandler}
                    checked={props.value.find((x) => x === option.value)}
                    id={option.value}
                    />
                {option.label}
                </label>
            ))}
        </div>
    )
};
const InputFile = props => {
    const fileRef = useRef();
    const changeHandler = (e) => {
        props.onChange(e.target.files[0]);
    }

    return (
      <div className="form-group m-3">
        <input
          type="file"
          ref={props.fileRef}
          onChange={changeHandler}
        />
      </div>
    );
};
const InputRadio = props => {
    return (
        <div className="form-group m-2">
            {props.options.map(option => (
                <label className="p-3" htmlFor={`radio-${option.value}-${props.name}`} key={option.value}>
                <input
                type="radio"
                value={option.value}
                name={props.name}
                id={`radio-${option.value}`}
                onChange={(e) => props.onChange(e.target.value)}
                checked={props.value == option.value}
                className="m-2"
                />
                {option.label}
                </label>
            ))}
        </div>
    );
};
const InputTextarea = props => {
    return (
        <div className="form-group m-3">
            <label className="form-label">{props.label}</label>
            <textarea
                value={props.value}
                // e setForm rozpakowuje cały form i nadpisuje zmienna 'name' na obecne value
                onChange={(e) => props.onChange(e.target.value)}
                type={props.type}
                className={`form-control ${
                props.error && props.showError ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback"> {props.error} </div>
        </div>
    )
};

function Input (props) {
    switch (props.type) {
        case 'select':
            return < InputSelect {...props} />;
        case 'checkbox':
            return < InputCheckbox {...props} />;
        case 'file':
            return < InputFile {...props} />;
        case 'radio':
            return < InputRadio {...props} />;
        case 'textarea':
            return < InputTextarea {...props} />;
        default:
            return < InputText {...props} />;
    };
};

Input.defaultProps = {
    type: 'text',
    isValid: false,
    showError: false
};

export default Input;