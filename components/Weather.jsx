import Image from "next/image";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[450px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width={100}
            height={100}
          />
          <p>{data.weather[0].main}</p>
        </div>
        <p className="text-8xl">{data.main.temp.toFixed(0)}&#176;c</p>
      </div>
      {/* Bottom */}
      <div className="bg-black/60 p-9 rounded-xl">
        <p className="text-2xl text-center pb-4">Weather in {data.name}</p>
        <div className="flex justify-between">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;c</p>
            <p>Feels Like</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)}km/h</p>
            <p>Feels Like</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
