import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background p-10">
      <h1 className="bg-slate-50 rounded-2xl w-full text-center text-3xl mx-auto font-bold p-4">RANDOM GIFS</h1>
      <div className="flex flex-col items-center gap-y-10 mt-[45px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
