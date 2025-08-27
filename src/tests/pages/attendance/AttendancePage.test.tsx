import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AttendancePage from "../../../pages/attendance/AttendancePage";
import { describe, it, expect } from "@jest/globals";

describe("AttendancePage", () => {
  it("debe renderizar el título correctamente", () => {
    render(<AttendancePage />);
    const title = screen.getByText(/Pasar Lista/i);
    expect(title).toBeInTheDocument();
  });

  it("debe mostrar las opciones de grupo al seleccionar un grupo", async () => {
    render(<AttendancePage />);
    const select = screen.getByLabelText(/Seleccionar Grupo:/i);
    await userEvent.selectOptions(select, "group1");
    const groupOption = screen.getByText(/Grupo de Mañana/i);
    expect(groupOption).toBeInTheDocument();
  });
});
