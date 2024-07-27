import React from "react";
import Card from "../molecules/Card";

function SectionCards({ listaAlumnos }) {
    const cards = [];
    let current = listaAlumnos.head;

    if (current) {
        do {
            const alumno = current.data;
            cards.push(
                <Card
                    key={`${alumno.nombre}-${alumno.apellido}`}
                    title={`${alumno.nombre} ${alumno.apellido}`}
                    edad={alumno.edad}
                    cinta={alumno.cinta}
                    horario={alumno.horario}
                    mensualidad={alumno.mensualidad}
                    fechainicial={alumno.fechainicial}
                    tutor={alumno.tutor}
                    tel_tutor={alumno.tel_tutor}
                />
            );
            current = current.next;
        } while (current !== listaAlumnos.head);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {cards}
        </div>
    );
}

export default SectionCards;
