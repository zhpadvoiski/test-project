import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("update scoop subtotal when scoops change", async () => {
    render(<Options optionType="scoops" />);

    const scoopsSubtotal = screen.getByText("Scoops totatl $", {
        exact: false,
    });
    expect(scoopsSubtotal).toHaveTextContent("0.0");

    const vanillaInput = await screen.findByRole("spinbutton", {
        name: "Vanilla",
    });

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");
    expect(scoopsSubtotal).toHaveTextContent("2.0");

    const chocolateInput = await screen.findByRole("spinbutton", {
        name: "Chocolate",
    });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, "2");
    expect(scoopsSubtotal).toHaveTextContent("6.0");
});
