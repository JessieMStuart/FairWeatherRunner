const Door = props => {
    return (
        <div onClick={() => props.toggleDoor()}>
            <p>{props.open ? 'Open' : 'Closed'} Door</p>
        </div> 
    )
}

export default Door