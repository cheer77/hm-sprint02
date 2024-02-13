import { filterAffairs, AffairType, AffairPriorityType } from "../HW2";

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

test("filter all", () => {
  const newState = filterAffairs(initialState, "all");
  expect(newState.length).toBe(5); // Должны вернуться все дела
});

test("filter high", () => {
  const newState = filterAffairs(initialState, "high");
  expect(newState.length).toBe(2); // Должны вернуться только дела с приоритетом 'high'
  expect(newState.every((affair) => affair.priority === "high")).toBe(true); // Проверяем, что все дела имеют приоритет 'high'
});

test("filter middle", () => {
  const newState = filterAffairs(initialState, "middle");
  expect(newState.length).toBe(1); // Должно вернуться только одно дело с приоритетом 'middle'
  expect(newState.every((affair) => affair.priority === "middle")).toBe(true); // Проверяем, что все дела имеют приоритет 'middle'
});

test("filter low", () => {
  const newState = filterAffairs(initialState, "low");
  expect(newState.length).toBe(2); // Должны вернуться только дела с приоритетом 'low'
  expect(newState.every((affair) => affair.priority === "low")).toBe(true); // Проверяем, что все дела имеют приоритет 'low'
});
