

import React from "react"
import ReactDOM from "react-dom/client"

// react element: It is an object 
const element1 = React.createElement("h1", { id: "title", key: "1" }, "Heading Element")

// react element using jsx: (a variable in js)
const element2 = (
    <h1 id="h1">Good Morning</h1>
)

// react component
const ChildComponent = () => (
    <p>I am a component</p>
)

// react component: It is a function

// component composition: component inside a component
const Component = () => {
    return (
        <div>
            {console.log("any js code")}
            {element1}
            <ChildComponent />
            {ChildComponent()}
            <h1>Hello</h1>
        </div>
    );
}
    
const root = ReactDOM.createRoot(document.getElementById('root'))
    
// rendering react element: root.render(element1)

// rendering react component:

root.render(<Component />)