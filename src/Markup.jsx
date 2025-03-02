import { createElement } from "react";

function Markup() {
  /*return createElement(
    "div",
    {
      id: "rootdiv",
    },
    "Hello 1st div"
  );*/
  /*return(
    <div className="rootOther">Hello other</div>
  )*/
  return createElement(
    "div",
    {
      id: "rootdiv",
    },"Hello 2nd div",
    createElement(
      "h2",
      {
        class: "h1tag",
      },
      "H1 Tag"
    )
  );
}

export default Markup;
