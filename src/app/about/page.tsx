import Experience from "@/components/features/experience"
import Newsletter from "@/components/features/newsletter/newsletter"
import Services from "@/components/features/services"
import Team from "@/components/features/team/team"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Urbain Art - a props",
}

export default function AboutPage() {
	return (
		<main className='w-full'>
			<Services />
			<Team />
			<Experience />
			<Newsletter />
		</main>
	)
}
