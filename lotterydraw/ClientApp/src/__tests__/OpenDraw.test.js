import { cleanup, render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import $ from "react-test";
import OpenDraw from "../pages/OpenDraw";

beforeEach(() => {
    cleanup();
});

afterEach(() => {
    cleanup();
});

test('renders grid and column headers', async () => {
    await render(<OpenDraw />);
    
    const gridHeader = screen.getByText('Lottery Draw & Jackpot Information')
    expect(gridHeader).toBeInTheDocument();

    const colProduct = screen.getByText('Product')
    expect(colProduct).toBeInTheDocument();

    const colDrawDisplayName = screen.getByText('Draw Display Name')
    expect(colDrawDisplayName).toBeInTheDocument();

    const colDrawDate = screen.getByText('Draw Date')
    expect(colDrawDate).toBeInTheDocument();

});

test('renders companyId dropdown and Max draw count textbox', async () => {
    const { container } = await render(<OpenDraw />)

    const companyIdDropdown = container.querySelector('#select-companyId')
    expect(companyIdDropdown).toBeInTheDocument();
    expect($(companyIdDropdown).text()).toBe('Golden Casket');


    const drawCountTextField = container.querySelector('#textField-DrawCount')
    expect(drawCountTextField).toBeInTheDocument();
    expect(drawCountTextField).toHaveValue(20)
});

test('renders OpenDraw without crashing', async () => {
    render(<OpenDraw />);
    await act(async () => await new Promise(resolve => setTimeout(resolve, 1000)));
});