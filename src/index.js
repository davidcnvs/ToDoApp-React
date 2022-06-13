import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './components/01-useState/CounterApp';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { Layout } from './components/05-UseLayoutEffect/Layout';
import { CallBackHook } from './components/06-memos/CallBackHook';
import { MemoHook } from './components/06-memos/MemoHooks';
import { Memorize } from './components/06-memos/Memorize';
import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './components/08-useReducer/TodoApp';
import HooksApp from './HooksApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // <HooksApp />
    // <CounterApp />
    // <CounterWithCustomHook />
    // <SimpleForm />
    // <FormWithCustomHook />
    // <MultipleCustomHooks />
    // <FocusScreen />
    // <RealExampleRef />
    // <Layout />
    // <Memorize />
    // <MemoHook />
    // <CallBackHook />
    // <Padre />
    <TodoApp />

);

//import './components/08-useReducer/intro-reducer';
