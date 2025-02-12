import Stars from "./Stars";
export default function BackCard({ title, vote, titleOr }) {
  return (
    <>
      <div className="py-4 text-white">
        <h1 className="text-blue-600">{title}</h1>
        <h1>{titleOr}</h1>
        <h1>
          <Stars num={vote}></Stars>
        </h1>
      </div>
    </>
  );
}
