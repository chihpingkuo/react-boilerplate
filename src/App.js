import React, {useState} from 'react';

const App = () => {
    const [state, setState] = useState("CLICK ME");

    return (
        <div>
            <button onClick={() => setState("HELLO")}>{state}</button>
        </div>
    
    );
};

export default App;