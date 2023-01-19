import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

test("renders learn react link", () => {
  render(<App />);
  screen.debug();
  // expect(linkElement).toBeInTheDocument();
});

test("Test Display toggle", () => {
  render(<App />);
  const DisplayToggle = screen.getByTitle("DisplayToggle");
  const DisplaySpace = screen.getByTitle("DisplaySpace");
  let storedtodo = JSON.parse(localStorage.getItem("todo"));
  userEvent.click(DisplayToggle);
  expect(DisplaySpace.children.length).toBe(0);
});
test("Test Display double toggle", () => {
  render(<App />);
  const DisplayToggle = screen.getByTitle("DisplayToggle");
  const DisplaySpace = screen.getByTitle("DisplaySpace");
  let storedtodo = JSON.parse(localStorage.getItem("todo"));
  userEvent.dblClick(DisplayToggle);
  expect(DisplaySpace.children.length).toBe(storedtodo.length);
});
test("Test Search input", () => {
  render(<App />);
  const SearchInput = screen.getByTitle("SearchInput");
 
  userEvent.type(SearchInput, 'kk');
 
  expect(SearchInput).toHaveValue("kk");

});
test("Test Number of Displayed tasks", () => {
  let todo=[];
  todo.push({ id: 1, task: "jj", done: false });
  todo.push({ id: 2, task: "jj", done: false });
  
  render(<Tasks  displaytodo={todo} filterText={""} toggle={false}/>);
  const DisplaySpace = screen.getByTitle("DisplaySpace");
 
  expect(DisplaySpace.children.length).toBe(2);

});
test("Test Footer", () => {
  let todo=[];
  todo.push({ id: 1, task: "jj", done: false });
  todo.push({ id: 2, task: "jj", done: true });
  todo.push({ id: 3, task: "jj", done: false });
  todo.push({ id: 4, task: "jj", done: true });
  
  render(<Footer  storedtodo={todo} />);
  const FooterDisplaySpace = screen.getByTitle("footer");
 
  expect(FooterDisplaySpace.textContent).toBe("Number of to dos in the list= 4 ---- Number of done to dos= 2 ---- Number of to be done to dos= 2");

});
