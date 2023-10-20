import { useState } from "react";

const friends = [
  "Kajol",
  "Uttom",
  "Rimon",
  "Nahidul",
  "Rakib",
  "Rony",
  "Sakib",
  "Sadman",
  "firad",
  "Kadir",
  "Liam",
  "Emma",
  "Noah",
  "Olivia",
  "Ava",
  "James",
  "Sophia",
  "Logan",
  "Isabella",
  "Mia",
];

const UserList = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [result, setResult] = useState();
  const [guessItem, setGuessItem] = useState();

  const handelButton = (index) => {
    setSelectedButton(index);
    setResult("");
  };

  const handleGuess = () => {
    if (selectedButton === null) {
       alert("Please select anyone!");
       return;
    }

    const randomItem = Math.floor(Math.random() * friends.length);
    setGuessItem(friends[randomItem]);
    console.log(randomItem);
   
    if (randomItem === selectedButton) {
      setResult("matched");
    } else {
      setResult("not matched");
    }
  };

  return (
    <div className="flex w-[60%] mx-auto flex-wrap justify-center mt-[5%] gap-4">
      {friends.map((friends, index) => {
        // console.log(index);
        return (
          <>
            <div className="" key={index}>
              <button
                className={`${
                  index === selectedButton
                    ? "bg-green-500 hover:bg-green-700 active:bg-green-800"
                    : "bg-blue-500 hover:bg-blue-700 active:bg-blue-800"
                } text-white font-semibold py-2 px-4 rounded `}
                onClick={() => handelButton(index)}
              >
                {friends}
              </button>
            </div>
          </>
        );
      })}
      <button
        className="bg-purple-500 absolute hover:bg-purple-700 active:bg-purple-800 text-white mt-[20%] font-semibold py-2 px-4 rounded"
        onClick={() => handleGuess()}
      >
        Guess
      </button>
      {result && (
        <div className=" relative mt-[5%]">
          {result === "matched" ? (
            <div className="bg-green-200 p-2 rounded">Congratulation!😎</div>
          ) : (
            <>
              <div className="bg-red-600 text-white p-2 rounded">
                Bad Luck, Try agin😭
              </div>
              <div className="bg-green-800 text-white mt-6 p-2 rounded">
                Guess Item : {guessItem}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserList;
