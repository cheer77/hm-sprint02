import React from "react";
import Affair from "./affair/Affair";
import { AffairType, FilterType } from "../HW2";
import s from "./Affairs.module.css";

type AffairsPropsType = {
  data: AffairType[]; // Исправляем any на AffairType[]
  setFilter: (filter: FilterType) => void; // Указываем тип функции для setFilter
  deleteAffairCallback: (id: number) => void; // Указываем тип функции для deleteAffairCallback
  filter: FilterType;
};

function Affairs(props: AffairsPropsType) {
  const setAll = () => {
    props.setFilter("all"); // Устанавливаем фильтр на 'all'
  };
  const setHigh = () => {
    props.setFilter("high"); // Устанавливаем фильтр на 'high'
  };
  const setMiddle = () => {
    props.setFilter("middle"); // Устанавливаем фильтр на 'middle'
  };
  const setLow = () => {
    props.setFilter("low"); // Устанавливаем фильтр на 'low'
  };

  const cnAll =
    s.button + " " + s.all + (props.filter === "all" ? " " + s.active : "");
  const cnHigh =
    s.button + " " + s.high + (props.filter === "high" ? " " + s.active : "");
  const cnMiddle =
    s.button +
    " " +
    s.middle +
    (props.filter === "middle" ? " " + s.active : "");
  const cnLow =
    s.button + " " + s.low + (props.filter === "low" ? " " + s.active : "");

  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id}
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  return (
    <div>
      <div className={s.buttonContainer}>
        <button id={"hw2-button-all"} onClick={setAll} className={cnAll}>
          All
        </button>
        <button id={"hw2-button-high"} onClick={setHigh} className={cnHigh}>
          High
        </button>
        <button
          id={"hw2-button-middle"}
          onClick={setMiddle}
          className={cnMiddle}
        >
          Middle
        </button>
        <button id={"hw2-button-low"} onClick={setLow} className={cnLow}>
          Low
        </button>
      </div>
      <div className={s.affairs}>{mappedAffairs}</div>
    </div>
  );
}

export default Affairs;
