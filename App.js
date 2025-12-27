// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerHTML = "hello World From JavaScript";
// root.appendChild(heading);

//  <div id = parent>
//      <div id = child>
//          <h1>Hello world from react</h>
//      </div>
// </div>     use react and creat this

// from here only on react
const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement("h1", {}, "Hello World From React");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello World From React")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "Hello World From React")
  ),
]);

root.render(parent);
