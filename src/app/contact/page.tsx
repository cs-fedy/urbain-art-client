import ContactDetails from "@/components/features/contact/contact-details"
import Newsletter from "@/components/features/newsletter/newsletter"
import ContactForm from "@/components/features/contact/contact_form/contact-form"

export default function ContactPage() {
	return (
		<div className='w-full'>
			<div className='relative mx-auto mb-10 mt-44 w-10/12 xl:w-8/12'>
				<div className='flex w-full flex-col items-start lg:flex-row'>
					<ContactDetails />
					<ContactForm />
				</div>
			</div>
			<Newsletter />
		</div>
	)
}
