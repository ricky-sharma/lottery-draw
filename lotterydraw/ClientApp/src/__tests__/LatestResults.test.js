import { cleanup, render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import $ from "react-test";
import LatestResults from "../pages/LatestResults";

beforeEach(() => {
    cleanup();
});

afterEach(() => {
    cleanup();
});

test('renders grid and column headers', () => {
    render(<LatestResults />);

    const gridHeader = screen.getByText('Latest Results')
    expect(gridHeader).toBeInTheDocument();

    const colProduct = screen.getByText('Product')
    expect(colProduct).toBeInTheDocument();

    const colDrawDisplayName = screen.getByText('Draw Display Name')
    expect(colDrawDisplayName).toBeInTheDocument();

    const colDrawDate = screen.getByText('Draw Date')
    expect(colDrawDate).toBeInTheDocument();

});

test('renders companyId dropdown and Max draw count textbox', () => {
    const { container } = render(<LatestResults />)

    const companyIdDropdown = container.querySelector('#select-companyId')
    expect(companyIdDropdown).toBeInTheDocument();
    expect($(companyIdDropdown).text()).toBe('Golden Casket');
    

    const drawCountTextField = container.querySelector('#textField-DrawCount')
    expect(drawCountTextField).toBeInTheDocument();
    expect(drawCountTextField).toHaveValue(1)
});

test('renders LatestResults without crashing', async () => {
    render(<LatestResults />);
    await act(async () => await new Promise(resolve => setTimeout(resolve, 1000)));
});