import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login'

test('username field should be render', () => { 
    render(<Login />);
    const usernameui = screen.getByPlaceholderText(/username/i);
    expect(usernameui).toBeInTheDocument();

 })

 test('password field should be render', () => { 
    render(<Login />);
    const passwordui = screen.getByPlaceholderText(/password/i);
    expect(passwordui).toBeInTheDocument();

 })

 test('button should be render', () => { 
    render(<Login />);
    const buttonui = screen.getByRole('button');
    expect(buttonui).toBeInTheDocument();

 })

 test('username field should change ', () => { 
    render(<Login />);
    const usernameui = screen.getByPlaceholderText(/username/i);
    const testval= 'test';
   fireEvent.change(usernameui, {target:{value:testval}});
    expect(usernameui.value).toBe(testval);

 })

 test('password field should change', () => { 
    render(<Login />);
    const passwordui = screen.getByPlaceholderText(/password/i);
    const testval= 'test';
   fireEvent.change(passwordui, {target:{value:testval}});
    expect(passwordui.value).toBe(testval);

 })

 test('button should be disabled', () => { 
    render(<Login />);
    const buttonui = screen.getByRole('button');
    expect(buttonui).toBeDisabled();

 })

 test('error message should not be visible', () => { 
    render(<Login />);
    const buttonui = screen.getByTestId('login-error');
    expect(buttonui).not.toBeVisible();

 })

 test('button should be not disabled when there are username or password', () => { 
    render(<Login />);
    const usernameui = screen.getByPlaceholderText(/username/i);
    const passwordui = screen.getByPlaceholderText(/password/i);
    const buttonui = screen.getByRole('button');
    const testval= 'test';
    fireEvent.change(usernameui, {target:{value:testval}});
    fireEvent.change(passwordui, {target:{value:testval}});

    expect(buttonui).not.toBeDisabled();

 })