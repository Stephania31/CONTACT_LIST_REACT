import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Contactos = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => { }, [store.listaContactos])

    return (<div>
        Contactos
        <br />
        <Link to="/add-contact">Agregar un contacto</Link>
        <br />
        <ul>
            {store.listaContactos && store.listaContactos.length > 0 ? <>
                {store.listaContactos.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.full_name} - {item.email} - {item.phone}

                            <button className="btn btn-primary" type="button" onClick={()=>{actions.editContact(index, nombre)}}>
                                Editar contacto
                            </button>

                            <button className="btn btn-danger" type="button" onClick={()=>{actions.deleteContact(index)}}>
                                Eliminar contacto
                            </button>
                        </li>
                    )
                })}
            </> : <>No hay contactos</>}
        </ul>
    </div>)
}

export default Contactos;