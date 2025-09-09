import logo from "../assets/logo-modified.png";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full w-full min-h-screen"
      style={{
        background: `url(${logo}) center center no-repeat`,
        backgroundSize: "40% auto", // Adjust the size as needed
        backgroundColor: "#fff"
      }}
    >
      <div className="bg-blue-800 bg-opacity-75 p-10 rounded-lg shadow-lg">
        <h1 className="text-[100px] text-white font-bold tracking-wide text-center">
  GOOD FOOD, GOOD VIBES!!!
</h1>
      </div>
    </div>
  );
}
