import { useRef, useState, useEffect } from "react";
import { Table } from "./Table"
import "./Form.css";
export const Form = () => {
  const ref = useRef(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [form, setForm] = useState({
           gamename:"",
           gameauthor:"",
           gameprice:"",
           gametags:"",
           forkids:"",
           gamerating:"",
    
  });
  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    fetch(`http://localhost:3001/games?_page=${page}&_limit=4`)
      .then((d) => d.json())
      .then((res) => setData(res));
  };

  const handleChange = (e) => {
    let file;
    if (ref.current.files.length !== 0) {
      file = URL.createObjectURL(ref.current.files[0]);
    }
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setForm({
      ...form,
      [name]: value,
      file: file,
    });
  };
  // console.log("form", form);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, form]);
    const payload = {
      gamename: form.gamename,
      gameauthor: form.game.author,
      gameprice: form.gameprice,
      gametags: form.gametags,
      forkids: form.forkids,
      gamerating: form.gamerating,
     
    };
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getData();
    });
  };
  console.log("page", page)
  const Ratingsort = (val) => {
    fetch(`http://localhost:3001/users?_sort=salary&_order=${val}`)
      .then((e) => e.json())
      .then((e) => {
        console.log("sort", e);
        setData(e)
      });
  };
  console.log("inside sort", data)
  return (
    <>
      <div className="main">
        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <div>
              <label>GameName:</label>
              <input style={{ marginLeft: "50px" }}
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label>GameAuthor :</label>
              <input style={{ marginLeft: "62px" }}
                type="number"
                name="age"
                onChange={handleChange}
                placeholder="Enter your age"
              />
            </div>
            <div>
              <label>GamePrice :</label>
              <input style={{ marginLeft: "36px" }}
                type="text"
                name="address"
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label>GameTags :</label>
             
            </div>
            <div>
              <label> IsForKids:</label>
              <input style={{ marginLeft: "52px" }}
                type="number"
                name="salary"
                onChange={handleChange}
                placeholder="Enter your salary"
              />
            </div>
            <div>
              <label>GameRating :</label>
              <select name="gamerating" onChange={handleChange} style={{ marginLeft: "10px" }}>
                <option value="">Choose an option</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            
            </div>
           
            <input type="submit" style={{ marginRight: "440px" }} />
          </form>
        </div>
        <div className="dataDiv">
          <Table list={data} />
          <button onClick={() => setPage(page - 1)}>Prev</button>
          <button onClick={() => setPage(page + 1)}>Next</button>
          <br />
          <button onClick={() => Ratingsort("asc")}>Low to High</button>
          <button onClick={() => Ratingsort("desc")}>High to Low</button>
        </div>
      </div>

    </>
  );
};