import { ChangeEvent, useRef, useState } from 'react';
import ImageSearch from '../icons/ImageSearch';
import ImageCheck from '../icons/ImageCheck';

interface ImageUploadProps {
	handleImageUpload(file: File): void;
	loading: boolean;
	file: File | null;
}

const ImageUpload = ({ handleImageUpload, loading, file }: ImageUploadProps) => {
	const imageInput = useRef<HTMLInputElement>(null);
	const [fileName, setFileName] = useState<string>();

	const handleUploadImage = () => {
		if (!loading) {
			imageInput.current?.click();
		}
	};

	const handleImageInputChange = async (e: ChangeEvent) => {
		const target = e.target;

		if (target instanceof HTMLInputElement && target.files && imageInput.current) {
			const file = target.files[0];
			setFileName(file.name);
			handleImageUpload(file);
		}
	};

	return (
		<>
			<span
				onClick={handleUploadImage}
				className={`flex items-center gap-2 w-fit cursor-pointer  ${
					loading ? 'text-zinc-500' : file && !!file ? 'text-green-700 hover:text-green-500' : 'text-[var(--contrast)] hover:text-white'
				}`}>
				{file && !!file && fileName ? (
					<>
						<ImageCheck />
						<p>{fileName}</p>
					</>
				) : (
					<ImageSearch />
				)}
			</span>
			<input
				ref={imageInput}
				hidden
				type='file'
				name='image'
				onChange={handleImageInputChange}
				defaultValue={imageInput.current?.value}
			/>
		</>
	);
};

export default ImageUpload;
