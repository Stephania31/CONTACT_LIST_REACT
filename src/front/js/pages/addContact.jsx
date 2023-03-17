import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({});

  let newContact = {
    full_name: "Antonio",
    email: "antonio@antonio.com",
    phone: "2222",
    agenda_slug: "agenda_de_antonio",
    address: "47568 NW 34ST, 33434 FL, USA",
  };
  useEffect(() => {}, [data.full_name, data.phone, data.adress, data.email]);

  return (
    <div>
      Aquí debería agregar contactos nuevos
      <br />
      <Link to="/">Regresar a lista de contactos</Link>
      <br />
      <input
        placeholder="Nombre contacto"
        onChange={(e) => {
          setData({ ...data, full_name: e.target.value });
        }}
      />
      <input
        placeholder="Número de teléfono"
        onChange={(e) => {
          setData({ ...data, phone: e.target.value });
        }}
      />
      <input
        placeholder="Dirección"
        onChange={(e) => {
          setData({ ...data, address: e.target.value });
        }}
      />
      <input
        placeholder="Correo electrónico"
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
      />
      <button
        type="button"
        onClick={() => {
          actions.addContact(data);
        }}
      >
        Agregar Contacto a la Agenda
      </button>
    </div>
  );
};

export default AddContact;
