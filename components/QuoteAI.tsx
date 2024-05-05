import React from "react";

interface Props {
	text?: string;
	name?: string;
	title?: string;
}

const QuoteAI: React.FC<Props> = ({
	text = "In some areas like drug discovery designing better materials that are lighter, stronger. We need artificial intelligence to help us explore the universe in places that we could’ve never done ourselves.",
	name = "Jensen Huang",
	title = "CEO, Nvidia",
}) => {
	return (
		<div className='bg-black'>
			<div className='max-w-7xl px-4 lg:px-8 py-12 lg:py-24 mx-auto'>
				<blockquote className='max-w-4xl mx-auto'>
					<p className='mb-6 md:text-lg'>
						<span className='font-semibold text-yellow-500'>
							{name},
						</span>{" "}
						<span className='text-neutral-500'>{title}</span>
					</p>

					<p className='text-xl sm:text-2xl md:text-3xl md:leading-normal text-white  '>
						{text}
					</p>

					<footer className='mt-6 md:mt-10'>
						<div className='border-neutral-700'>
							<button
								type='button'
								className='group inline-flex items-center gap-x-3 text-neutral-400 text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none'
							>
								<span className='size-8 md:size-10 flex flex-col justify-center items-center bg-white text-black rounded-full group-hover:bg-lime-400 group-focus:bg-lime-400'>
									<svg
										className='flex-shrink-0 size-5'
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										viewBox='0 0 16 16'
									>
										<path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
									</svg>
								</span>
								Watch the Video
							</button>
						</div>
					</footer>
				</blockquote>
			</div>
		</div>
	);
};

export default QuoteAI;
