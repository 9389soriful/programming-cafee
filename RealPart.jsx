import { useState } from "react";
import { useEffect } from "react";
import MainPart from "./mainPart";
import Header from "./Header";
import ClickDet from "./ClickDet";
import ReadMark from "./ReadMark";
function RealPart() {
  const [fake, setFake] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setFake(data));
  }, []);

  const [clickDet, setClickDet] = useState([]);
  function detEvent(click) {
    const newClick = [...clickDet, click];
    setClickDet(newClick);
    console.log(newClick);
  }
  //span time
  const [timeSpent, setTimeSpent] = useState(0);
  function spend(time) {
    const newSpend = timeSpent + time;
    setTimeSpent(newSpend);
  }
  return (
    <>
      <body>
        <Header></Header>
        <main className="flex mt-5 max-sm:flex-col-reverse">
          <div className="flex-1">
            {fake.map((fakeData) => (
              <MainPart
                fakeData={fakeData}
                detEvent={detEvent}
                spend={spend}
              ></MainPart>
            ))}
          </div>
          <div className="flex justify-center items-start flex-1 mt-5 ">
            <div className="flex flex-col items-center ">
            <div className="bg-[#EFEDFD] p-8 rounded-[10px] border-[1px] border-[#6047EC]">
              <h1 className="text-[#6047EC]  font-bold">Spent time on read : {timeSpent} min </h1>
            </div>
            <div className="bg-[#F3F3F3] p-8 rounded-[10px] flex flex-col gap-5 mt-5 w-full h-full">
              <h1 className="font-serif text-lg">
                Bookmarked Blogs : {clickDet.length}
              </h1>
              {clickDet.map((data) => (
                <ClickDet data={data}></ClickDet>
              ))}
            </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default RealPart;
