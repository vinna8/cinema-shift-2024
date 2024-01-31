import Star from "./Star";

const StarList = () => {
    const numberStar = 5;

    return (
        <>
            {[...Array(numberStar)].map((_, index) => (
                <Star key={index} />
            ))}
        </>
    )
}

export default StarList;