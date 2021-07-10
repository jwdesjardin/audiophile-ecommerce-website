import Link from 'next/link'
import React from 'react'
import { CartCTX, UserCTX } from '../../context'
import { ProductCartData } from '../../lib/queryTypes'
import { ActiveUser } from '../../lib/Types'
import NumberInput from '../NumberInput'

export const UserMenu = ({
	toggleUserVisible,
}: {
	toggleUserVisible: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	const { activeUser, setActiveUser } = React.useContext(UserCTX)

	const LoggedInMenu = ({ user }: { user: ActiveUser }) => {
		return (
			<div className='bg-white-200 rounded-lg text-black-900 w-full md:w-[377px] absolute right-0 top-32 px-6 py-8'>
				{/* HEADER */}
				<div className='flex justify-between items-center mb-8'>
					<p className='h6'>Welcome, {user.name}</p>
				</div>
				<div className='mb-6'>
					<Link href='/orders'>
						<button className='button-three' onClick={() => toggleUserVisible(false)}>
							View My Orders
						</button>
					</Link>
				</div>

				<button
					className='button-two'
					onClick={() => {
						setActiveUser(null)
						localStorage.removeItem('activeUser')
					}}
				>
					{' '}
					Logout
				</button>
			</div>
		)
	}

	const LoggedOutMenu = () => {
		return (
			<div className='bg-white-200 rounded-lg text-black-900 w-full md:w-[377px] absolute right-0 top-32 px-6 py-8'>
				{/* HEADER */}
				<div className='flex justify-between items-center mb-8'>
					<p className='h6'>You are not logged in.</p>
				</div>
				<Link href='/login'>
					<button className='button-two' onClick={() => toggleUserVisible(false)}>
						Login
					</button>
				</Link>
			</div>
		)
	}

	return (
		<div
			id='overlay'
			onClick={(e) => {
				console.log(e.target['id'])
				if (e.target['id'] === 'overlay') {
					toggleUserVisible(false)
				}
			}}
			className='bg-black-900 bg-opacity-30 fixed h-screen w-full top-0 z-10'
		>
			<div className='content-container relative'>
				{activeUser ? <LoggedInMenu user={activeUser}></LoggedInMenu> : <LoggedOutMenu />}
			</div>
		</div>
	)
}
