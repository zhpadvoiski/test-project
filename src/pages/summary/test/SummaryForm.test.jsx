import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("SummaryForm tests", () => {
    test("Checkbox initial state is unchecked and button disabled", () => {
        render(<SummaryForm />);
        const checkbox = screen.getByRole("checkbox", {
            name: /terms and conditions/i,
        });
        expect(checkbox).not.toBeChecked();

        const button = screen.getByRole("button", {
            name: /confirm order/i,
        });
        expect(button).toBeDisabled();
    });

    test("Checkbox enables button on first click and disables on second", () => {
        render(<SummaryForm />);

        const checkbox = screen.getByRole("checkbox", {
            name: /terms and conditions/i,
        });
        const button = screen.getByRole("button", {
            name: /confirm order/i,
        });

        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(button).toBeEnabled();

        fireEvent.click(checkbox);
        expect(button).toBeDisabled();
    });
});
