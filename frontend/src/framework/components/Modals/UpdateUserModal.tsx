import { ChangeEvent, FormEvent, useState } from 'react';
import { useStoreSelector } from '../../store/hooks/useSelector';
import ImageUpload from '../Home/ImageUpload';
import { strCapitalize } from '../../utils/strCapitalize';
import LoaderIcon from '../icons/LoaderIcon';
import { updateUserUsecase } from '../../../features/users/graph';
import { useStoreDispatch } from '../../store/hooks/useDispatch';
import { updateUserLogged } from '../../store/slices/users-slice';
import { useModal } from '../../hooks/useModal';

type UserInfo = {
	name: string;
	surname: string;
	file: File | null;
	prevImage: string;
};

const UpdateUserModal = () => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);
	const dispatch = useStoreDispatch();
	const modal = useModal();

	const [loading, setLoading] = useState(false);
	const [userInfo, setUserInfo] = useState<UserInfo>({
		name: userLogged.name,
		surname: userLogged.surname,
		file: null,
		prevImage: userLogged.profileImgUrl,
	});

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

		const updatedUserResponse = await updateUserUsecase.updateUser({
			userId: userLogged.id,
			name: userInfo.name,
			surname: userInfo.surname,
			file: userInfo.file,
			prevImage: userInfo.prevImage,
		});

		if (updatedUserResponse.state === 'success') {
			setLoading(false);
			dispatch(updateUserLogged({ user: updatedUserResponse.user }));
			modal.closeModal();
		}
	};

	return (
		<form
			className='relative flex flex-col items-center gap-5 w-[500px]'
			onSubmit={handleSubmit}>
			<figure className='rounded-full overflow-hidden w-40 h-40 border-2 border-zinc-600'>
				<img
					src={userInfo.prevImage}
					alt='Profile image'
					className='w-full h-full object-cover'
				/>
				<span className='grid place-items-center absolute top-[8rem] left-[55%] bg-black border-2 border-zinc-600 rounded-full p-1'>
					<ImageUpload
						handleImageUpload={handleImageUpload}
						file={userInfo.file}
						loading={loading}
					/>
				</span>
			</figure>
			<label className='flex flex-col w-[70%] gap-2'>
				<p className='text-zinc-500'>Name</p>
				<input
					className=' text-zinc-300 px-2 py-3 rounded-md bg-transparent border border-zinc-600 outline-[var(--contrast)]'
					name='name'
					placeholder='name'
					onChange={handleInputChange}
					value={strCapitalize(userInfo.name)}
				/>
			</label>
			<label className='flex flex-col w-[70%] gap-2'>
				<p className='text-zinc-500'>Surname</p>
				<input
					className=' text-zinc-300 px-2 py-3 rounded-md bg-transparent border border-zinc-600 outline-[var(--contrast)]'
					name='surname'
					placeholder='surname'
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
					'Update'
				)}
			</button>
		</form>
	);
};

export default UpdateUserModal;
