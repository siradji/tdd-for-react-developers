
const Input = ({placeholder, value, onChange, name}) => {

    return (
       <Input 
            placeholder={placeholder}
            value={value}
            onChange={({target}) => onChange(target)}
            name={name}
       />
    )
}

export default Input
