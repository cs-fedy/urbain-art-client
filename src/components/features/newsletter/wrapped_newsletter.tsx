"use client"

import newsletter from "@/../public/images/newsletter.jpg"
import Box from "@/components/common/box"
import Input from "@/components/common/input"
import { JoinNewsletterResult } from "@/lib/api"
import Image from "next/image"
import { useFormState, useFormStatus } from "react-dom"
import { toast } from "react-toastify"
import { useEffect, useRef } from "react"

type NewsletterFormWrapperProps = {
	formAction: (state: any, formData: FormData) => Promise<JoinNewsletterResult>
}

const initialValue = { email: null }

export default function WrappedNewsletter({
	formAction,
}: NewsletterFormWrapperProps) {
	const { pending } = useFormStatus()
	const [state, action] = useFormState(formAction, initialValue)
	const formRef = useRef<HTMLFormElement>(null)

	useEffect(() => {
		if (state.ok) {
			toast.success("joined newsletter successfully", {
				position: "top-right",
				style: { backgroundColor: "#000000" },
			})
		}
	}, [state])

	return (
		<div className='relative flex w-full flex-col-reverse items-center gap-y-16 bg-urbain-black lg:flex-row'>
			<div className='w-full lg:w-1/2'>
				<Image
					src={newsletter}
					alt='newsletter image'
					className='object-contain'
					width={960}
					height={600}
				/>
			</div>

			<div className='mx-20 flex flex-col items-center gap-y-12 py-10 lg:items-start lg:py-0'>
				<div className='flex flex-col items-center space-y-2 lg:items-start'>
					<h2 className='w-full text-center font-play-fair text-3xl leading-snug tracking-wider text-urbain-white sm:text-4xl md:text-5xl lg:max-w-2xl lg:text-left lg:text-6xl'>
						Rejoignez notre Newsletter
					</h2>
					<span className='w-full text-center text-sm text-urbain-white md:text-base lg:max-w-lg lg:text-left'>
						Recevez nos nouveautés, nos actualités ainsi que nos évènements.
					</span>
				</div>

				<form
					ref={formRef}
					action={data => {
						action(data)
						formRef.current?.reset()
					}}
					className='flex w-full flex-col items-center space-y-8 lg:w-3/4 lg:items-start'>
					<Input
						type='email'
						name='email'
						placeholder='Entrez votre email'
						className='w-full rounded-lg text-xl text-white lg:w-max'
						error={!state.ok && state.error?.message}
					/>
					<Box
						type='submit'
						component='button'
						disabled={pending}
						className='w-full bg-urbain-white text-urbain-black hover:bg-slate-100 lg:w-max'>
						<span className='w-full text-center'>
							{pending ? "en cours de soumission" : "S’inscrire"}
						</span>
					</Box>
				</form>
			</div>
		</div>
	)
}
