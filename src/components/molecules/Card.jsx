import React from "react";

function Card({ title, edad, cinta, horario, mensualidad, fechainicial, tutor, tel_tutor }) {
    return (
        <div className="bg-white shadow-md rounded-md p-6 flex flex-col items-center justify-between text-center">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <ul className="space-y-2 mb-4">
                <li><span className="font-semibold">Edad:</span> {edad}</li>
                <li><span className="font-semibold">Cinta:</span> {cinta}</li>
                <li><span className="font-semibold">Horario:</span> {horario}</li>
                <li><span className="font-semibold">Mensualidad:</span> {mensualidad}</li>
                <li><span className="font-semibold">Fecha de inicio:</span> {fechainicial}</li>
                <li><span className="font-semibold">Tutor:</span> {tutor}</li>
                <li><span className="font-semibold">Teléfono del Tutor:</span> {tel_tutor}</li>
            </ul>
        </div>
    );
}

export default Card;
