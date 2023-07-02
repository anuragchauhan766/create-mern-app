import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((data) => {
        data.json().then((a) => console.log(a));
      })
      .catch((e) => console.log(e));
  }, []);

  return <div className="text-red-500">hello</div>;
}

export default App;
