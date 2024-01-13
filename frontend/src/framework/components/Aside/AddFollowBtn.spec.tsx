import { RenderResult, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddFollowBtn from './AddFollowBtn';
import { afterEach, beforeEach, describe, it } from 'vitest';
import { mockStore } from '../../../tests/utils/store/store.mock';
import { userMocked } from '../../../tests/utils/user.mock';

describe('AddFollowBtn', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<AddFollowBtn id={userMocked.id} />
			</Provider>
		);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByRole('button', { name: 'Follow' });
	});
});
