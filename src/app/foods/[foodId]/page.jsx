
const FoodDetailsPage = async ({params}) => {
    const {foodId} = await params
    

    return (
        <div>
            <h1 className="text-2xl text-blue-600"> Foods Detail Page</h1>
        </div>
    );
};

export default FoodDetailsPage;