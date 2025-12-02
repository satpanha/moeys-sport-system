import Header from '@/components/header';
import { DashboardSidebar } from '@/components/dashboard/sidebar/DashboardStateCard';
import { useState } from 'react';

export default function DashboardLayout({ children }:{ children: React.ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	return (
		<div className="min-h-screen flex flex-col bg-background">
			<Header onRegistrationTypeChange={() => {}} currentType="athletes" />
			<div className="flex-1 flex">
				<DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
				<main className="flex-1 overflow-auto p-6">
					{children}
				</main>
			</div>
			<footer className="border-t border-border py-4 text-center text-sm text-muted-foreground">
				© Ministry of Education, Youth & Sport
			</footer>
		</div>
	);
}
