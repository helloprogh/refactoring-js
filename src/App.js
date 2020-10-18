import React from "react";
import DiffEditor from './components/CodeDiff';
import { Swiper, SwiperSlide } from 'swiper/react';
import refactorSteps from './refactorStep';

const App = () => {
    const stepListItems = refactorSteps.map(step => (
        <SwiperSlide key={step.id}>
            <h2>{step.title}</h2>
            <DiffEditor original={step.original} code={step.code}/>
        </SwiperSlide>
    ));
    return ( 
    <div>
        <Swiper>
            {stepListItems}
        </Swiper>
    </div>
)};

export default App;