import React from "react";

// function Index() {
//   return (
//     <h3>This is Functional Component</h3>
//   )
// }
const Index = (props) => {
    return(
        <div>
            <h3>This is Functional Component</h3>
            <p>{props.message}</p>
        </div>
    );
}

export default Index;