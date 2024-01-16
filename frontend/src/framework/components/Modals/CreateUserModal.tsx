import { ChangeEvent, FormEvent, useState } from 'react';
import { useModal } from '../../hooks/useModal';
import { useStoreDispatch } from '../../store/hooks/useDispatch';
import ImageUpload from '../Home/ImageUpload';
import { strCapitalize } from '../../utils/strCapitalize';
import LoaderIcon from '../icons/LoaderIcon';
import { createUserUsecase } from '../../../features/users/graph';
import { addUser } from '../../store/slices/users-slice';

type UserInfo = {
	name: string;
	surname: string;
	username: string;
	password: string;
	email: string;
	file: File | null;
	prevImage: string;
};

const initialState = {
	name: '',
	surname: '',
	username: '',
	email: '',
	password: '',
	file: null,
	prevImage: 'https://pub-43949222ba2448cbbff5d5c5019cd5e6.r2.dev/default-avatar.png',
};

const CreateUserModal = () => {
	const dispatch = useStoreDispatch();
	const modal = useModal();

	const [loading, setLoading] = useState(false);
	const [userInfo, setUserInfo] = useState<UserInfo>(initialState);

	const handleImageUpload = (file: File) => {
		const reader = new FileReader();

		reader.onload = function (e: ProgressEvent<FileReader>) {
			setUserInfo((prev) => ({ ...prev, file, prevImage: e.target?.result as string }));
		};

		reader.readAsDataURL(file);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		const name = e.target.name;

		if (target instanceof HTMLInputElement) {
			setUserInfo({ ...userInfo, [name]: target.value });
		}
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		const userCreatedResponse = await createUserUsecase.createUser({
			name: userInfo.name,
			surname: userInfo.surname,
			username: userInfo.username,
			email: userInfo.email,
			password: userInfo.password,
			file: userInfo.file,
			prevImage: userInfo.prevImage,
		});

		if (userCreatedResponse.state === 'success') {
			dispatch(addUser({ user: userCreatedResponse.user }));
			setLoading(false);
			modal.closeModal();
		}
	};

	return (
		<form
			className='relative flex flex-col items-center gap-3 w-[500px]'
			onSubmit={handleSubmit}>
			<figure className='rounded-full overflow-hidden w-32 h-32 border-2 border-zinc-600'>
				<img
					src={userInfo.prevImage}
					alt='Profile image'
					className='w-full h-full object-cover'
				/>
				<span className='grid place-items-center absolute top-[6rem] left-[55%] bg-black border-2 border-zinc-600 rounded-full p-1'>
					<ImageUpload
						handleImageUpload={handleImageUpload}
						file={userInfo.file}
						loading={loading}
					/>
				</span>
			</figure>
			<label className='flex flex-col w-[70%] gap-1'>
				<p className='text-zinc-500'>Username</p>
				<input
					className=' text-zinc-300 px-2 py-3 rounded-md bg-transparent border border-zinc-600 outline-[var(--contrast)]'
					name='username'
					placeholder='username'
					required
					onChange={handleInputChange}
					value={strCapitalize(userInfo.username)}
				/>
			</label>
			<label className='flex flex-col w-[70%] gap-1'>
				<p className='text-zinc-500'>Email</p>
				<input
					className=' text-zinc-300 px-2 py-3 rounded-md bg-transparent border border-zinc-600 outline-[var(--contrast)]'
					name='email'
					placeholder='email'
					required
					type='email'
					onChange={handleInputChange}
					value={strCapitalize(userInfo.email)}
				/>
			</label>
			<label className='flex flex-col w-[70%] gap-1'>
				<p className='text-zinc-500'>Password</p>
				<input
					className=' text-zinc-300 px-2 py-3 rounded-md bg-transparent border border-zinc-600 outline-[var(--contrast)]'
					name='password'
					placeholder='password'
					required
					type='password'
					minLength={4}
					onChange={handleInputChange}
					value={strCapitalize(userInfo.password)}
				/>
			</label>
			<label className='flex flex-col w-[70%] gap-1'>
				<p className='text-zinc-500'>Name</p>
				<input
					className=' text-zinc-300 px-2 py-3 rounded-md bg-transparent border border-zinc-600 outline-[var(--contrast)]'
					name='name'
					placeholder='name'
					required
					onChange={handleInputChange}
					value={strCapitalize(userInfo.name)}
				/>
			</label>
			<label className='flex flex-col w-[70%] gap-1'>
				<p className='text-zinc-500'>Surname</p>
				<input
					className=' text-zinc-300 px-2 py-3 rounded-md bg-transparent border border-zinc-600 outline-[var(--contrast)]'
					name='surname'
					placeholder='surname'
					required
					onChange={handleInputChange}
					value={strCapitalize(userInfo.surname)}
				/>
			</label>
			<button
				disabled={loading}
				className='mt-5 mb-2 py-3 px-12 font-bold bg-white hover:bg-slate-200 duration-200 text-black rounded-full'
				type='submit'>
				{loading ? (
					<span className='block w-6 h-6 text-zinc-700 animate-spin'>
						<LoaderIcon />
					</span>
				) : (
					'Create'
				)}
			</button>
		</form>
	);
};

export default CreateUserModal;
