import React, { useEffect, useState } from "react";
import UserService from "../BL/api";
import classes from "./UserProfile.module.css";
import DataTable from "./DataTable/DataTable";
import Loader from "./Loader";
import Spinner from "react-bootstrap/Spinner";

function UserProjects() {
  const userService = new UserService();
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //fetch projects from database
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      let projects = await userService.getUserProjectsFromServer(token);
      const columns = Object.keys(projects[0]).map((key) => {
        return {
          Header: key,
          accessor: key,
        };
      });
      setColumns(columns);

      //add field to each project with the project score
      projects = projects.map((project) => {
        let rating = "";
        if (project.score < 70) {
          rating = "low";
        } else if (project.score > 90) {
          rating = "high";
        } else {
          rating = "medium";
        }
        return { ...project, rating };
      });

      setData(projects);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main className={classes.profile}>
        {loading ? (
          <div>loading...</div>
        ) : (
          <DataTable columns={columns} data={data} />
        )}
      </main>
    </>
  );
}

export default UserProjects;
