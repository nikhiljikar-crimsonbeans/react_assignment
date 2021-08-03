import React, { useState, useEffect } from "react";
import "./Fetchdata.css";
import './Fetchdata.css'

const Fetchdata = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-movies-01.json"
    );
    setUsers(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <nav className="nav_bar">
        <ul>
          <li>
            <center>
              <input
                className="search_inp"
                type="text"
                placeholder="search movie name"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </center>
          </li>
        </ul>
      </nav>

      <table className="fixed">
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Genres</th>
          <th>ReleaseDate</th>
          <th>MovieName</th>
          <th>Actors</th>
          <th>Ratings</th>
          <th>Poster</th>
        </tr>

        {users
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (
              val.originalTitle.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((curElem) => {
            return(
              <div>
                <tr>
                  <td>{curElem.title}</td>
                  <td>{curElem.year}</td>
                  <td>{curElem.genres}</td>
                  <td>{curElem.releaseDate}</td>
                  <td>{curElem.originalTitle}</td>
                  <td>{curElem.actors}</td>
                  <td>{curElem.imdbRating}</td>
                  <td>
                    <img
                      src={curElem.posterurl}
                      alt="Not available"
                      width="100"
                      height="100"
                    />
                  </td>
                </tr>
              </div>
            );
          })}
      </table>
    </div>
  );
};

export default Fetchdata;
