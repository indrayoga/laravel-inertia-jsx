import React from "react";

export default function Welcome() {
    return (
        <div className="min-h-screen w-full bg-slate-100">
            <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <span className="text-2xl font-semibold">OK</span>
                </div>
                <h1 className="text-2xl font-semibold text-slate-800">
                    Aplikasi Berjalan
                </h1>
                <p className="mt-3 text-sm text-slate-600">
                    Laravel, Inertia, dan React JSX sudah terhubung dengan baik.
                </p>
                <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
                    <span>Laravel</span>
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    <span>Inertia</span>
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    <span>React JSX</span>
                </div>
            </div>
        </div>
    );
}
