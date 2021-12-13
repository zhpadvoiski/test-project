import {
    render,
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

        userEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(button).toBeEnabled();

        userEvent.click(checkbox);
        expect(button).toBeDisabled();
    });

    test("popover responds to hover", async () => {
        render(<SummaryForm />);

        const nullPopover = screen.queryByText(
            /no ice cream will actually be delivered/i
        );
        expect(nullPopover).not.toBeInTheDocument();

        const termAndConditions = screen.getByText(/terms and conditions/i);
        userEvent.hover(termAndConditions);

        const popover = screen.getByText(
            /no ice cream will actually be delivered/i
        );
        expect(popover).toBeInTheDocument();

        userEvent.unhover(termAndConditions);
        await waitForElementToBeRemoved(() =>
            screen.queryByText(/no ice cream will actually be delivered/i)
        );
    });
});
