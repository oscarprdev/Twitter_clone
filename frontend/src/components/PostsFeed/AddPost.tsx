import { ChangeEvent, FormEvent, useState } from 'react';
import { strCapitalize } from '../../utils/strCapitalize';
import { addPostUsecase } from '../../features/posts/graph';
import { addPost } from '../../store/posts/slices/posts-slice';
import { ADD_POST_TYPES } from '../../store/posts/reducers/add-post/add-post.reducer.types';
import { usePostsDispatch } from '../../store/posts/hooks/usePostsDispatch';
import { USER_ID } from '../../constants/constants';

interface PostState {
	content: string;
}

const AddPost = () => {
	const [post, setPost] = useState<PostState>({ content: '' });
	const dispatch = usePostsDispatch();

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
		}
	};

	return (
		<article className='relative flex items-start gap-4 p-5 w-full h-[200px] border-b-[1px] border-b-zinc-500'>
			<figure className='w-12 h-12 bg-zinc-200 rounded-full'></figure>
			<form
				className='w-full mt-2'
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
					className={`absolute font-bold bottom-5 right-5 px-5 py-2 rounded-full bg-[var(--contrast)] ${
						post.content.length > 0 ? 'opacity-none' : 'opacity-70'
					} `}>
					Post
				</button>
			</form>
		</article>
	);
};

export default AddPost;
