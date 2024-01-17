import { RenderResult, fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ProfileNav from './ProfileNav';
import { TAB_ACTIVE, tabs } from './utils';

describe('ProfileNav', () => {
	let component: RenderResult;

	const mockfn = vi.fn() as (navItem: TAB_ACTIVE) => void;

	afterEach(() => {
		component.unmount();
	});

	describe('POST tab', () => {
		beforeEach(() => {
			component = render(
				<ProfileNav
					navState={tabs.POSTS}
					handleTabActive={mockfn}
				/>
			);
		});

		it('Should be render properly if is selected', () => {
			const postTab = component.getByText('Posts');
			expect(postTab.className).toContain('font-bold border-[var(--contrast)]');

			const followersTab = component.getByText('Followers');
			expect(followersTab.className).not.toContain('font-bold border-[var(--contrast)]');

			const followingTab = component.getByText('Following');
			expect(followingTab.className).not.toContain('font-bold border-[var(--contrast)]');
		});

		it('Should trigger the function when users clicks the tab', () => {
			const postTab = component.getByText('Posts');

			fireEvent.click(postTab);

			expect(mockfn).toHaveBeenCalled();
		});
	});

	describe('FOLLOWERS tab', () => {
		beforeEach(() => {
			component = render(
				<ProfileNav
					navState={tabs.FOLLOWERS}
					handleTabActive={mockfn}
				/>
			);
		});

		it('Should be render properly if is selected', () => {
			const postTab = component.getByText('Posts');
			expect(postTab.className).not.toContain('font-bold border-[var(--contrast)]');

			const followersTab = component.getByText('Followers');
			expect(followersTab.className).toContain('font-bold border-[var(--contrast)]');

			const followingTab = component.getByText('Following');
			expect(followingTab.className).not.toContain('font-bold border-[var(--contrast)]');
		});

		it('Should trigger the function when users clicks the tab', () => {
			const postTab = component.getByText('Followers');

			fireEvent.click(postTab);

			expect(mockfn).toHaveBeenCalled();
		});
	});

	describe('FOLLOWINGS tab', () => {
		beforeEach(() => {
			component = render(
				<ProfileNav
					navState={tabs.FOLLOWINGS}
					handleTabActive={mockfn}
				/>
			);
		});

		it('Should be render properly if is selected', () => {
			const postTab = component.getByText('Posts');
			expect(postTab.className).not.toContain('font-bold border-[var(--contrast)]');

			const followersTab = component.getByText('Followers');
			expect(followersTab.className).not.toContain('font-bold border-[var(--contrast)]');

			const followingTab = component.getByText('Following');
			expect(followingTab.className).toContain('font-bold border-[var(--contrast)]');
		});

		it('Should trigger the function when users clicks the tab', () => {
			const postTab = component.getByText('Following');

			fireEvent.click(postTab);

			expect(mockfn).toHaveBeenCalled();
		});
	});
});
