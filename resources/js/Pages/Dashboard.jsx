import { router, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <div className="mx-auto max-w-3xl px-6 py-16">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Signed in as {auth?.user?.name || auth?.user?.email}
                    </p>
                    <button
                        type="button"
                        onClick={() => router.post("/logout")}
                        className="mt-6 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
