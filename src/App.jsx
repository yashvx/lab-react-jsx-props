import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];
  return data;
};

let dataArr = imageData();

// let arr=imageData()
// console.log(arr);

// function myName() {
//   // console.log("Yarshwardhan");
//   let name = [
//     {
//       name: "Yashwardhan",
//       age: 19
//     }
//   ];
//   return name;
// }

// let ans = myName();

// console.log(ans);

// console.log(imageData);

function App() {
  return (
    <>
      <div className="container">
        <h2>Kalvium Gallary</h2>
        <div className="row">
          {dataArr?.map((ele) => {
            return <img className="columns" key={ele.id} src={ele.img}></img>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
