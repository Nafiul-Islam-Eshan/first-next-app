import FoodsCard from "@/Components/FoodsCard";

export const metadata = {
  title: "Foods",
  description: "Delious Food Items.",
};

const foodsPage = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const { data: foods } = await res.json();
  // console.log(foods);
  return (
    <div className="max-w-7xl mx-auto my-4">
      <h1 className="text-3xl text-neutral-400">Foods : {foods.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food, i) => {
          return <FoodsCard food={food} key={i}></FoodsCard>;
        })}
      </div>
    </div>
  );
};

export default foodsPage;
