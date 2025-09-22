import React, { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

const GroupList = ({ onSelectGroup }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axiosInstance.get("/groups")
      .then(res => setGroups(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Your Groups</h2>
      <ul>
        {groups.map(group => (
          <li key={group._id}>
            <button onClick={() => onSelectGroup(group)}>{group.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;