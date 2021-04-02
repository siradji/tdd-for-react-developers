
 const Button = ({children, type, onClick}) => {
    return (
        <Button 
            type={type}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default Button;