import React, {useState} from 'react';
import { Button } from '@material-ui/core';

const App = () => {
    const [state, setState] = useState("CLICK ME");

    return (
        <div>
            <Button onClick={() => setState("HELLO")}>{state}</Button>
        </div>
    
    );
};

export default App;