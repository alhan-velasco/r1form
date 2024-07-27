import React, { useState } from "react";
import SectionForm from "../components/organisms/SectionForm";
import SectionCards from "../components/organisms/SectionCards";
import { LinkedList } from "../data/LinkedList";

function Home() {
    const [alumnos, setAlumnos] = useState(new LinkedList());
    const [update, setUpdate] = useState(0); 

    const addAlumno = (alumno) => {
        alumnos.push(alumno);
        setAlumnos(alumnos); 
        setUpdate(prev => prev + 1);
    };

    return (
        <div id="form-home">
            <SectionForm addAlumno={addAlumno} />
            <SectionCards listaAlumnos={alumnos} />
        </div>
    );
}

export default Home;
