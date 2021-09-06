const Card = (props) => {
    return (
        <div
            id="card"
            className="my-10 pb-5 w-full border-b border-gray-lighter"
        >
            {props.children}
        </div>
    );
}
 
export default Card;