import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({});

  useEffect(() => {}, [data.full_name, data.phone, data.adress, data.email]);

  return (
    <div className="mb-3 row ms-5 mt-5">
        <h3 className="text-center">
          Nuevo Contacto
        </h3>  
      <form className="form mt-5">
        <div className="col-sm-10 mt-2">
          <label>Nombre contacto</label>
          <input
            className="form-control mt-2"
            placeholder="Nombre contacto"
            onChange={(e) => {
              setData({ ...data, full_name: e.target.value });
            }}
          />
        </div>
        <div className="col-sm-10 mt-2">
          <label>Número de teléfono</label>
          <input
            className="form-control mt-2"
            placeholder="Número de teléfono"
            onChange={(e) => {
              setData({ ...data, phone: e.target.value });
            }}
          />
        </div>
        <div className="col-sm-10 mt-2">
          <label>Dirección</label>
          <input
            className="form-control mt-2"
            placeholder="Dirección"
            onChange={(e) => {
              setData({ ...data, address: e.target.value });
            }}
          />
        </div>
        <div className="col-sm-10 mt-2">
          <label>Correo electrónico</label>
          <input
            className="form-control mt-2"
            placeholder="Correo electrónico"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
        </div>
        <div className="col-sm-10 d-grid gap-2 mt-3">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              const confirmed = window.confirm(
                "¿Está seguro de que desea agregar este contacto?"
              );
              if (confirmed) {
                actions.addContact(data);
              }
            }}
          >
            Agregar Contacto
          </button>
          <Link to="/">Regresar a lista de contactos</Link>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
