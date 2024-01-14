import { ChangeEvent, useRef } from 'react';
import ImageSearch from '../icons/ImageSearch';
import { uploadImageUsecase } from '../../../features/image/graph';

interface ImageUploadProps {
	id: string;
}

const ImageUpload = ({ id }: ImageUploadProps) => {
	const imageInput = useRef<HTMLInputElement>(null);

	const handleUploadImage = () => {
		imageInput.current?.click();
	};

	const handleImageInputChange = async (e: ChangeEvent) => {
		const target = e.target;

		if (target instanceof HTMLInputElement && target.files && imageInput.current) {
			const file = target.files[0];

			await uploadImageUsecase.uploadImage({ file, userId: id });

			imageInput.current.value = '';
		}
	};

	return (
		<>
			<span
				onClick={handleUploadImage}
				className='block w-fit text-[var(--contrast)] cursor-pointer hover:text-white'>
				<ImageSearch />
			</span>
			<input
				ref={imageInput}
				hidden
				type='file'
				name='image'
				onChange={handleImageInputChange}
			/>
		</>
	);
};

export default ImageUpload;
