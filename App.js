console.log("App");

{/* <div id="parent">
    <div id="child">
        <h1>I m h1 tag</h1>
<h2>Im h2 tag</h2>
    </div>

</div> */}


const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"Bhndi Bhai")));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

