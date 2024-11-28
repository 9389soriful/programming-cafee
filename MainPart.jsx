import { PiBookmarkSimpleLight } from "react-icons/pi";
function MainPart({ fakeData , detEvent ,spend}) {
  console.log(fakeData);
  const {spanTime, activeDate, coverImg, name, profileImg, readTime, summary } =
    fakeData;
  return (
    <>
      <main className="flex ">
        <div className="p-4">
          <div className="coverImg ">
            <img className="rounded-lg" src={coverImg} alt="coverImg" />
          </div>
          <div className="profile flex flex-col">
            <div className="profile-icon flex justify-between items-center ">
              <div className="icon-bar flex gap-4  items-center m-2">
                <div className="w-[60px]">
                  <img
                    className="rounded-full"
                    src={profileImg}
                    alt="profileImg"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p>{name}</p>
                  <p>{activeDate}</p>
                </div>
              </div>
              <p className="flex items-center justify-center gap-2">
                {readTime}
                <button onClick={() => detEvent(fakeData)} className="text-[1.5rem] cursor-pointer hover:text-red-400 ">
                <PiBookmarkSimpleLight />
                </button>
              </p>
            </div>
            <div className="decribtion">
              <h1 className="text-[1.2rem] font-bold text-wrap m-2 ">
                {summary}
              </h1>
              <div className="readMore font-bold text-blue-500 underline cursor-pointer m-2">
                <p>#beginner</p>
                <p>#programming</p>
              </div>
              <div className="m-2">
                <button onClick={() => spend(spanTime)} className="text-[#6047EC] underline cursor-pointer font-bold">mark read</button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </main>
    </>
  );
}
export default MainPart;
