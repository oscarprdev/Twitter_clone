import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ClearSearchBtn from './ClearSearchBtn';
import { RenderResult, fireEvent, render } from '@testing-library/react';

describe('ClearSearchBtn', () => {
	let component: RenderResult;
	const mockFn = vi.fn();

	beforeEach(() => {
		component = render(<ClearSearchBtn handleClearSearch={mockFn} />);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByRole('close-icon');
		component.getByTestId('close-icon-container');
	});

	it('Should fire an event on mouseDown', () => {
		const iconContainer = component.getByTestId('close-icon-container');

		fireEvent.mouseDown(iconContainer);

		expect(mockFn).toHaveBeenCalledOnce();
	});
});
