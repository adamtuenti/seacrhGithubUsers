import React from "react"
import { render, screen, fireEvent, waitFor, within } from "@testing-library/react"
import SearchBarUser from "../pages/usuarios/searchBar"
import UsuariosHook from "../pages/usuarios/usuarios"

import TestRenderer from 'react-test-renderer';
const testRenderer = TestRenderer.create(<SearchBarUser />);

test('Usarios result', () => {
    render(<SearchBarUser />);
    screen.debug()
})