import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import ToDo from "../ToDo";

// cleanup
afterEach(() => {
  cleanup();
});

// test(arg1,arg2)
test("should render incompleted todo", () => {
  const todo = { id: 0, title: "Make dinner", completed: false };
  render(<ToDo todo={todo} />);
  const toDoElement = screen.getByTestId("todo-0");
  expect(toDoElement).toBeInTheDocument();
  expect(toDoElement).toHaveTextContent("Make dinner");
  expect(toDoElement).not.toContainHTML("strike");
});

test("should render completed todo", () => {
  const todo = { id: 1, title: "Make bed", completed: true };
  render(<ToDo todo={todo} />);
  const toDoElement = screen.getByTestId("todo-1");
  expect(toDoElement).toBeInTheDocument();
  expect(toDoElement).toHaveTextContent("Make bed");
  expect(toDoElement).toContainHTML("strike");
});

// snapshot
test("match snapshot", () => {
  const todo = { id: 1, title: "Make bed", completed: true };
  const tree = renderer.create(<ToDo todo={todo} />).toJSON();
  console.log('tree: ',tree);
  expect(tree).toMatchSnapshot();
});
