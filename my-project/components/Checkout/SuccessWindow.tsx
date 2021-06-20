import React from 'react'

export const SuccessWindow = () => {
	return (
		<div className='bg-white-100 p-8 md:p-12 mx-6 rounded-lg md:w-[540px]'>
			<div className='mb-6 md:mb-8'>
				<div className='mb-8'>
					<img src='/assets/shared/desktop/icon-check-circle.svg' alt='' />
				</div>
				<h2 className='h5 md:h3 mb-4 md:mb-6 max-w-xs'>Thank you for your order</h2>
				<p className='text-black-400'>You will recieve an email confirmation shortly.</p>
			</div>

			<div className='rounded-lg overflow-hidden mb-6 md:mb-12 w-full'>
				<div className='flex flex-col md:flex-row w-full'>
					<div className='bg-white-400 p-6 w-7/12'>
						<ul className='w-full border-b border-black-400 mb-2 border-opacity-50'>
							<li className='flex items-center justify-between mb-2'>
								<div className='w-[50px] flex-shrink-0'>
									<img src='/assets/cart/image-xx59-headphones.jpg' alt='' />
								</div>
								<div className='w-full ml-4'>
									<p className='uppercase font-bold'>XX59</p>
									<p className='text-black-400 font-bold'>$2,999</p>
								</div>
								<div className='text-black-400 font-bold'>x1</div>
							</li>
						</ul>
						<button className='text-sm text-black-400 font-bold w-full lowercase'>View Less</button>
					</div>
					<div className='bg-black-900 text-white-200 p-6 w-5/12 flex flex-col justify-center'>
						<p className='uppercase font-extralight mb-2 text-black-400'>Grand Total</p>
						<p className='h6'>$5,446</p>
					</div>
				</div>
			</div>

			<button className='button-one w-full'>Back To Home</button>
		</div>
	)
}
