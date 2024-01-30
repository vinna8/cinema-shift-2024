import Star from "./Star"

const Stars = () => {
    const numberStar = 5;

    return (
        <>
            {[...Array(numberStar)].map((_, index) => (
                <Star key={index} />
            ))}
        </>
    )
}

export default Stars;