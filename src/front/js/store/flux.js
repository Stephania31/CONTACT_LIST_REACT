import {
    exampleStore,
    exampleActions
} from "./exampleStore.js";
import {
    usuarioStore,
    usuarioActions
} from "./usuario.js";
import {
    contactStore,
    contactActions
} from "./contact.js";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            ...exampleStore,
            ...usuarioStore,
            ...contactStore,
        },
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({
                    ...store,
                    demo: demo
                });
            },
            removeContact: (indice) => {
                const store = getStore();
                setStore({
                    listaContacto: store.listaContacto.filter((item, index) => {
                        return index !== indice;
                    }),
                });
            },

            ...exampleActions(getStore, getActions, setStore),
            ...usuarioActions(getStore, getActions, setStore),
            ...contactActions(getStore, getActions, setStore),

            editContact: (index, editedContact) => {
                const store = getStore();
                const updatedContacts = [...store.listaContactos];
                updatedContacts[index] = editedContact;
                setStore({
                    listaContactos: updatedContacts
                });
            },
        },
    };
};

export default getState;