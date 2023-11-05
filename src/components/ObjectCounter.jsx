import { useState } from "react";

const ObjectCounter = () => {
  const [person, setPerson] = useState({
    name: "Burhan",
    surname: "Altıntop",
    salary: 10000,
  });

  const handleSalaryInc = () => {
    setPerson({ ...person, salary: person.salary + 500 });
  };

  const handleClrName = () => {
    setPerson({ ...person, name: "noname", surname: "" });
  };

  const handleSalaryDec = () => {
    setPerson({ ...person, salary: person.salary - 500 });
  };
  return (
    <div className="container text-center mt-4">
      <h2 className="text-danger">Use State Object</h2>
      <h3 className="display-4">
        {person.name} {person.surname}
      </h3>
      <h3 className="display-6">Salary: {person.salary}</h3>
      <button onClick={handleSalaryInc} className="btn btn-success">
        Salary Inc
      </button>
      <button onClick={handleClrName} className="btn btn-danger">
        CLR
      </button>
      <button
        onClick={() => person.salary > 0 && handleSalaryDec()}
        className="btn btn-warning"
      >
        Salary Dec
      </button>
    </div>
  );
};

export default ObjectCounter;
