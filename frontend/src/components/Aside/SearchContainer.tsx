import { ChangeEvent, useEffect, useState } from 'react';
import { searchUsersUsecase } from '../../features/users/graph';
import { User } from '../../features/shared/types/user';
import SearchedUsersList from './SearchedUsersList';
import SearchIcon from '../icons/SearchIcon';
import ClearSearchBtn from './ClearSearchBtn';

const SearchContainer = () => {
	const [inputFocused, setInputFocused] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [searchedUsers, setSearchedUsers] = useState<User[]>([]);

	useEffect(() => {
		const searchUsers = async () => {
			const searchResponse = await searchUsersUsecase.getUsersBySearch({ searchValue: inputValue });

			if (searchResponse.state === 'success') {
				setSearchedUsers(searchResponse.users);
			}
		};

		if (inputValue.length > 0) {
			searchUsers();
		}

		if (inputValue.length === 0) {
			setSearchedUsers([]);
		}
	}, [inputValue]);

	const handleSearchChange = (e: ChangeEvent) => {
		const target = e.target;

		if (target instanceof HTMLInputElement) {
			setInputValue(target.value);
		}
	};

	const handleClearSearch = () => {
		setInputValue('');
		setSearchedUsers([]);
	};

	const toggleInputFocused = () => {
		setTimeout(() => {
			setInputFocused(!inputFocused);
		}, 100);
	};

	return (
		<div className='relative w-full'>
			<span className={`absolute left-5 top-3 ${inputFocused ? 'text-[var(--contrast)]' : 'text-zinc-500'}`}>
				<SearchIcon />
			</span>
			<input
				type='search'
				placeholder='Search'
				onFocus={toggleInputFocused}
				onBlur={toggleInputFocused}
				value={inputValue}
				onChange={handleSearchChange}
				className={`${
					inputFocused ? 'bg-black' : 'bg-zinc-800'
				} searchIcon py-3 pl-16 rounded-full placeholder:text-zinc-400  w-full outline-[var(--contrast)] outline-1`}
			/>
			{inputFocused && inputValue.length > 0 && (
				<>
					<ClearSearchBtn handleClearSearch={handleClearSearch} />
					<SearchedUsersList searchedUsers={searchedUsers} />
				</>
			)}
		</div>
	);
};

export default SearchContainer;
