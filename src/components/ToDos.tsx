import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atomsTodo";

function ToDos({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (onCategory: IToDo["category"]) => {
    setToDos((prevToDo) => {
      const targetIndex = prevToDo.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: onCategory };
      return [
        ...prevToDo.slice(0, targetIndex),
        newToDo,
        ...prevToDo.slice(targetIndex + 1),
      ];
    });
  };
  const onClickBtn = () => {
    setToDos((prevToDo) => {
      const targetIndex = prevToDo.findIndex((toDo) => toDo.id === id);
      return [
        ...prevToDo.slice(0, targetIndex),
        ...prevToDo.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>
      )}
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>Doing</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>Done</button>
      )}
      <button onClick={onClickBtn}>❌</button>
    </li>
  );
}

export default ToDos;
