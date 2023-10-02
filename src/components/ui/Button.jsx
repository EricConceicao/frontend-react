function Button(props) {
    return (
        <button className={'button btn ' + props.style}>{props.text}</button>
    );
}

export default Button