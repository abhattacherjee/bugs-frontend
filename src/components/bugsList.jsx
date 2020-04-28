import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs, getUnresolvedBugs, resolveBug } from "../store/bugs";

const BugsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  const bugs = useSelector(getUnresolvedBugs);

  return (
    <ul>
      {bugs.map(bug => (
        <li key={bug.id}>
          {bug.description}{" "}
          {!bug.resolved && (
            <button onClick={() => dispatch(resolveBug(bug.id))}>
              Resolve bug
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BugsList;
