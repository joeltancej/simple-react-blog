import { useState, useEffect } from "react";

const Message = ({ isPending, error }) => {
    const [message, setMessage] = useState(null);
    useEffect(() => {
        if (isPending) {
            setMessage('Loading... (this load time is hardcoded @1.5s)');
        } else if (error) {
            setMessage(error);
        } else {
            setMessage(null); // Clear the message if neither pending nor error
        }
    }, [isPending, error]);
    return (
        <div>{ message }</div>
    );
}
 
export default Message;