import React from "react"
import { render, screen, fireEvent, waitFor, within } from "@testing-library/react"
import SearchBarUser from "../pages/usuarios/searchBar"



const setUp = (props) => {
    return <SearchBarUser />;
  };


describe("Search User Page", () => {
    it("se muestra la barra de búsqueda de usuario", async () => {
        setUp();
        await waitFor(() => {
            within(screen.getByText('Búsqueda de Usuarios')).toBeInTheDocument()
        })
    })
})