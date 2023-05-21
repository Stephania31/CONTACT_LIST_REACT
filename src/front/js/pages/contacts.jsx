import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Contactos = () => {
  const { store, actions } = useContext(Context);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedContact, setEditedContact] = useState({
    full_name: "",
    address: "",
    phone: "",
    email: "",
  });

  useEffect(() => {}, [store.listaContactos, editedContact]);

  const handleEditContact = (index) => {
    setEditingIndex(index);
    const { full_name, address, phone, email } = store.listaContactos[index];
    setEditedContact({ full_name, address, phone, email });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = (index) => {
    const confirmacion = window.confirm(
      "¿Está seguro que desea guardar los cambios?"
    );
    if (confirmacion) {
      actions.editContact(index, editedContact);
      setEditingIndex(null);
    }
  };

  return (
    <div>
      <br />
      <div className="d-md-flex justify-content-md-end pe-4">
        <Link to="/add-contact">
          <button type="button" className="btn btn-success btn-lg me-md-2 mb-3">
            Agregar un contacto
          </button>
        </Link>
      </div>

      <div className="card m-5">
        <ul className="list-group list-group-flush">
          {store.listaContactos && store.listaContactos.length > 0 ? (
            <>
              {store.listaContactos.map((item, index) => {
                const isEditing = editingIndex === index;

                return (
                  <li key={index} className="list-group-item d-flex mt-2 mb-2">
                    <img
                      src="https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-1.jpg"
                      className="rounded-circle ms-5 me-5"
                      style={{ width: "15%" }}
                    />
                    <div className="d-flex flex-column align-items-start col-8">
                      {isEditing ? (
                        <>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              name="full_name"
                              value={editedContact.full_name}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              name="address"
                              value={editedContact.address}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              value={editedContact.phone}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              name="email"
                              value={editedContact.email}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-success me-2"
                              onClick={() => handleSaveChanges(index)}
                            >
                              <i className="fas fa-check"></i>
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => setEditingIndex(null)}
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <h5>{item.full_name}</h5>
                          <div className="mb-2">
                            <i className="fa-solid fa-location-dot me-2"></i>
                            {item.address}
                          </div>
                          <div className="mb-2">
                            <i className="fa-solid fa-envelope me-2"></i>
                            {item.email}
                          </div>
                          <div className="mb-2">
                            <i className="fas fa-phone me-2"></i>
                            {item.phone}
                          </div>
                        </>
                      )}
                    </div>
                    <i
                      className="fas fa-pencil-alt"
                      style={{ color: "#050505", cursor: "pointer" }}
                      onClick={() => handleEditContact(index)}
                    ></i>
                    <i
                      className="fa-solid fa-trash-can ms-4"
                      onClick={() => {
                        const confirmacion = window.confirm(
                          "¿Está seguro que desea eliminar este contacto?"
                        );
                        if (confirmacion) {
                          actions.deleteContact(index);
                        }
                      }}
                    ></i>
                  </li>
                );
              })}
            </>
          ) : (
            <p>No hay contactos</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Contactos;
