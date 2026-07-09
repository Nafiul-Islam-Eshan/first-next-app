

const foodsPage = async () => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    const {data:foods} = await res.json();
    console.log(foods);
    return (
        <div>
            <h1 className="text-3xl text-neutral-400">Foods : {foods.length}</h1>
        </div>
    );
};

export default foodsPage;