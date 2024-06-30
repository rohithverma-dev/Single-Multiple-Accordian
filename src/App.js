import { useState } from "react";
import "./App.css";

function App() {
  const acc_arr = [
    {
      id: 1,
      title: "Accordian 1",
      description:
        " ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ad magnam. Voluptatum et incidunt voluptas, odit voluptatem officiis est quo nam pariatur impedit provident maiores porro sequi? ",
    },
    {
      id: 2,
      title: "Accordian 2",
      description:
        " ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ad magnam. Voluptatum et incidunt voluptas, odit voluptatem officiis est quo nam pariatur impedit provident maiores porro sequi? ",
    },
    {
      id: 3,
      title: "Accordian 3",
      description:
        " ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ad magnam. Voluptatum et incidunt voluptas, odit voluptatem officiis est quo nam pariatur impedit provident maiores porro sequi? ",
    },
  ];

  const [AcName, setAcName] = useState([]);
  const [single, setSingle] = useState(true);

  const handleSetAcName = (id) => {
    setAcName((prev) => {
      if (single) {
        return prev.includes(id) ? [] : [id];
      } else {
        return prev.includes(id)
          ? prev.filter((acId) => acId !== id)
          : [...prev, id];
      }
    });
  };

  const toggleAccordian = () => {
    setSingle((prev) => (prev ? false : true));
  };

  return (
    <>
      <div onClick={toggleAccordian} className="singlle-multiple-accordian">
        {single ? "Single Accordian" : "Multiple Accordian"}
      </div> 
      <div className="container">
        {acc_arr.map((item) => {
          return (
            <MyAccordian
              key={item.id}
              title={item.title}
              description={item.description}
              isOpen={AcName.includes(item.id)}
              id={item.id}
              item={item}
              handleSetAcName={handleSetAcName}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

const MyAccordian = ({ title, description, isOpen, id, handleSetAcName }) => {
  return (
    <div className="accordian">
      <div onClick={() => handleSetAcName(id)} className="title">
        {title}
      </div>
      {isOpen && <div className="detail">{description}</div>}
    </div>
  );
};
