import { RenderResult, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, it } from 'vitest';
import Unfollower from './Unfollower';

const mockFollower = {
	id: '1a26b3e6-1e2a-497a-9155-009968e8efc5',
	createdAt: '2024-01-10T18:35:30.728283Z',
	updatedAt: '2024-01-10T18:35:30.728283Z',
	name: 'Zaida',
	surname: 'Pintado',
	username: 'zaidapf',
	email: 'zaidapintado@email.com',
	profileImgUrl: 'https://pub-43949222ba2448cbbff5d5c5019cd5e6.r2.dev/woman-random.avif',
	profileBgImgUrl: '',
};

describe('Unfollower', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(<Unfollower unfollower={mockFollower} />);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByRole('img');
		component.getByText('Zaida');
		component.getByText('@zaidapf');
		component.getByRole('button', { name: 'Follow' });
	});
});
