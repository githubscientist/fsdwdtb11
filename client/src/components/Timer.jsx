const Timer = (props) => {
    const msg = 'Hello World';

    props.getMessage(msg);

    return (
        <div>
            <h1>Time Now: {props.time}</h1>
        </div>
    )
}

export default Timer;