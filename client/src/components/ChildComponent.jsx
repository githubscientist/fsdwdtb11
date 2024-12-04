const ChildComponent = ({ messageFromChild }) => {

    const message = "Hello from the Child!";

    messageFromChild(message);

    return (
        <div>ChildComponent</div>
    )
}

export default ChildComponent