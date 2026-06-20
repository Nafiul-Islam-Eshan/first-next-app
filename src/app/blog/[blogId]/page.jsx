
const blogDetails = async({params}) => {
    // const res = await params;
    const {blogId} = await params;
    console.log("Params",blogId);
    return (
        <div>
            <h3 className="text-3xl">Blogs Details Coming Soon</h3>
        </div>
    );
};

export default blogDetails;