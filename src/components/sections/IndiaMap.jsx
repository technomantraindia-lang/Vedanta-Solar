import indiaMapImage from "../../assets/home/india.png";

export default function IndiaMap() {
  return (
    <div className="mx-auto w-full max-w-[390px] opacity-95 md:max-w-[430px]">
      <img src={indiaMapImage} alt="India map" className="h-auto w-full object-contain" />
    </div>
  );
}
