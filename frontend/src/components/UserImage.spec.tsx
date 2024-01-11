import { RenderResult, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import UserImage from './UserImage';

const mockSrc = 'mocked_src_image.jpg';

describe('UserImage', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(<UserImage userImage={mockSrc} />);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		const image = component.getByAltText('Profile image');
		const src = image.getAttribute('src');

		expect(src).toBe(mockSrc);
	});
});
