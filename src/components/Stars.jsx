export default function Stars({ num }) {
  const toFive = (num) => {
    return Math.round(num * 5) / 10;
  };

  const starFill = (num) => {
    let starArr = [];
    const roundedNum = toFive(num);

    if (roundedNum === Math.round(roundedNum)) {
      //i deciamli sono ===0
      let i = 0;
      for (i; i < roundedNum; i++) {
        starArr.push(<i className="fa-solid fa-star" key={i}></i>);
      }
      for (i; i < 5; i++) {
        starArr.push(<i className="fa-regular fa-star" key={i}></i>);
      }
    } else {
      let i = 0;
      for (i; i < roundedNum - 1; i++) {
        starArr.push(<i className="fa-solid fa-star" key={i}></i>);
      }
      starArr.push(<i className="fa-solid fa-star-half-stroke" key={i}></i>);
      i++;
      for (i; i < 5; i++) {
        starArr.push(<i className="fa-regular fa-star" key={i}></i>);
      }
    }
    return starArr;
  };
  return <>{starFill(num)}</>;
}
