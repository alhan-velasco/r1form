import React, { useState } from "react";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import Label from "../atoms/Label";

function SectionForm({ addAlumno }) {
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        cinta: '',
        horario: '',
        tutor: '',
        tel_tutor: '',
        mensualidad: '',
        fechainicial: '',
    });

    const cintas = ["10° kup", "8° kup", "6° kup", "4° kup", "2° kup", "1° dan"];

    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const validateForm = () => {
        const { nombre, apellido, edad, cinta, horario, tutor, tel_tutor, mensualidad, fechainicial } = values;
        
        if (!nombre || !apellido || !edad || !cinta || !horario || !tutor || !tel_tutor || !mensualidad || !fechainicial) {
            Swal.fire({
                title: "Error",
                text: "Todos los campos son obligatorios",
                icon: "error",
            });
            return false;
        }

        if (isNaN(edad) || edad <= 0) {
            Swal.fire({
                title: "Error",
                text: "La edad debe ser un número positivo",
                icon: "error",
            });
            return false;
        }

        if (tel_tutor.length < 10) {
            Swal.fire({
                title: "Error",
                text: "El teléfono del tutor debe tener al menos 10 dígitos",
                icon: "error",
            });
            return false;
        }

        if (isNaN(mensualidad) || mensualidad <= 0) {
            Swal.fire({
                title: "Error",
                text: "La mensualidad debe ser un número positivo",
                icon: "error",
            });
            return false;
        }

        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const alumno = {
            nombre: values.nombre,
            apellido: values.apellido,
            edad: values.edad,
            cinta: values.cinta,
            horario: values.horario,
            tutor: values.tutor,
            tel_tutor: values.tel_tutor,
            mensualidad: values.mensualidad,
            fechainicial: values.fechainicial,
        };

        addAlumno(alumno);

        Swal.fire({
            title: "Registro exitoso",
            icon: "success",
        });

        setValues({
            nombre: '',
            apellido: '',
            edad: '',
            cinta: '',
            horario: '',
            tutor: '',
            tel_tutor: '',
            mensualidad: '',
            fechainicial: '',
        });
    };

    return (
        <div className="p-6 bg-white rounded-md shadow-md max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Field 
                    type="text" 
                    placeholder="Nombre" 
                    text="Nombre" 
                    val={values.nombre} 
                    fnVal={(value) => setValues({ ...values, nombre: value })} 
                />
                <Field 
                    type="text" 
                    placeholder="Apellido" 
                    text="Apellido" 
                    val={values.apellido} 
                    fnVal={(value) => setValues({ ...values, apellido: value })} 
                />
                <Field 
                    type="number" 
                    placeholder="Edad" 
                    text="Edad" 
                    val={values.edad} 
                    fnVal={(value) => setValues({ ...values, edad: value })} 
                />
                <div>
                    <Label text="Cinta" />
                    <select 
                        name="cinta" 
                        value={values.cinta} 
                        onChange={handleFieldChange} 
                        className="w-full h-10 border-gray-300 border rounded-md"
                    >
                        <option value="">Seleccione una cinta</option>
                        {cintas.map((cinta) => (
                            <option key={cinta} value={cinta}>{cinta}</option>
                        ))}
                    </select>
                </div>
                <Field 
                    type="text" 
                    placeholder="Horario" 
                    text="Horario" 
                    val={values.horario} 
                    fnVal={(value) => setValues({ ...values, horario: value })} 
                />
                <Field 
                    type="text" 
                    placeholder="Tutor" 
                    text="Tutor" 
                    val={values.tutor} 
                    fnVal={(value) => setValues({ ...values, tutor: value })} 
                />
                <Field 
                    type="number" 
                    placeholder="Teléfono del tutor" 
                    text="Teléfono del tutor" 
                    val={values.tel_tutor} 
                    fnVal={(value) => setValues({ ...values, tel_tutor: value })} 
                />
                <Field 
                    type="number" 
                    placeholder="Mensualidad" 
                    text="Mensualidad" 
                    val={values.mensualidad} 
                    fnVal={(value) => setValues({ ...values, mensualidad: value })} 
                />
                <Field 
                    type="date" 
                    placeholder="Fecha de inicio" 
                    text="Fecha de inicio" 
                    val={values.fechainicial} 
                    fnVal={(value) => setValues({ ...values, fechainicial: value })} 
                />
                <div className="flex justify-center items-center col-span-1 md:col-span-3">
                    <Button title="Guardar" onclick={handleSubmit} />
                </div>
            </form>
        </div>
    );
}

export default SectionForm;
