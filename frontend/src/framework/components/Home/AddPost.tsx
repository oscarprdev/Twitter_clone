import { ChangeEvent, FormEvent, useState } from 'react';
import { strCapitalize } from '../../utils/strCapitalize';
import { addPostUsecase } from '../../../features/posts/graph';
import { addPost } from '../../store/slices/posts-slice';
import { ADD_POST_TYPES } from '../../store/reducers/posts/add-post/add-post.reducer.types';
import { USER_ID } from '../../../features/shared/domain/constants/constants';
import { useStoreSelector } from '../../store/hooks/useSelector';
import { useStoreDispatch } from '../../store/hooks/useDispatch';
import UserImage from '../UserImage';
import { useModal } from '../../hooks/useModal';

interface PostState {
	content: string;
}

const AddPost = () => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);
	const [post, setPost] = useState<PostState>({ content: '' });
	const dispatch = useStoreDispatch();
	const { closeModal } = useModal();

	const handleTextareaChange = (e: ChangeEvent) => {
		const target = e.target;

		if (target instanceof HTMLTextAreaElement) {
			setPost({ content: target.value });
		}
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(addPost({ type: ADD_POST_TYPES.LOADING }));

		const response = await addPostUsecase.addPost({ userId: USER_ID, post: post.content });

		if (response.state === 'success') {
			dispatch(addPost({ post: response.post, type: ADD_POST_TYPES.ADD_POST }));

			console.log(response.post);

			setPost({ content: '' });
			closeModal();
		}
	};

	const isButtonDisabled = post.content.length === 0;

	return (
		<article className='relative flex items-start gap-4 p-5 w-full h-[150px]'>
			<UserImage userImage={userLogged.profileImgUrl} />
			<form
				className='mt-2 w-full'
				onSubmit={handleSubmit}
				role='form'>
				<textarea
					role='textarea'
					placeholder="What's going on?!"
					maxLength={300}
					value={strCapitalize(post.content)}
					onChange={handleTextareaChange}
					className='w-full resize-none bg-transparent outline-none text-xl text-zinc-300 placeholder:text-zinc-500'
				/>
				<button
					type='submit'
					disabled={isButtonDisabled}
					className={`absolute font-bold bottom-5 right-5 px-5 py-2 rounded-full bg-[var(--contrast)] ${
						isButtonDisabled ? 'opacity-70' : 'opacity-none hover:bg-[var(--contrast-dark)] duration-300'
					} `}>
					Post
				</button>
			</form>
		</article>
	);
};

export default AddPost;
