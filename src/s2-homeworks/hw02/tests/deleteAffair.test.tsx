import { deleteAffair, AffairType } from "../HW2";

let initialState: AffairType[];

beforeEach(() => {
  initialState = [
    { _id: 1, name: "React", priority: "high" },
    { _id: 2, name: "anime", priority: "low" },
    { _id: 3, name: "games", priority: "low" },
    { _id: 4, name: "work", priority: "high" },
    { _id: 5, name: "html & css", priority: "middle" },
  ];
});

test("delete 0", () => {
  const newState = deleteAffair(initialState, 0);
  expect(newState.length).toBe(5); // Не должно измениться
  expect(newState).toEqual(initialState); // Состояние не должно измениться
});

test("delete 1", () => {
  const newState = deleteAffair(initialState, 1);
  expect(newState.length).toBe(4); // Должно уменьшиться на 1
  expect(newState).not.toContainEqual({
    _id: 1,
    name: "React",
    priority: "high",
  }); // Должно быть удалено
});

test("delete 3", () => {
  const newState = deleteAffair(initialState, 3);
  expect(newState.length).toBe(4); // Должно уменьшиться на 1
  expect(newState).not.toContainEqual({
    _id: 3,
    name: "games",
    priority: "low",
  }); // Должно быть удалено
});

test("delete 5", () => {
  const newState = deleteAffair(initialState, 5);
  expect(newState.length).toBe(4); // Не должно измениться, т.к. нет объекта с _id === 5
  expect(newState).toEqual(initialState); // Состояние не должно измениться
});

test("delete 6", () => {
  const newState = deleteAffair(initialState, 6);
  expect(newState.length).toBe(5); // Не должно измениться
  expect(newState).toEqual(initialState); // Состояние не должно измениться
});
