import { cookies } from 'next/headers'

import { TabBar } from '@/components';


export default function CookiesPage() {

    const cookieStore = cookies();
    const cookieTab = Number(cookieStore.get('selectedTab')?.value ?? '1');

    return (
        <div className="grid grid-cols-1 sm:grid-col-2 gap-3">
            <span className="text-3xl">Tabs</span>
            <TabBar currentTab={cookieTab} />
        </div>
    );
}