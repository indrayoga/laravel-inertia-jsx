import React from "react";

export default function Welcome() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-slate-100">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(120deg, rgba(15, 23, 42, 0.08), rgba(15, 23, 42, 0)), radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.08), transparent 45%), radial-gradient(circle at 70% 60%, rgba(14, 165, 233, 0.12), transparent 45%), repeating-linear-gradient(0deg, rgba(148, 163, 184, 0.22), rgba(148, 163, 184, 0.22) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, rgba(148, 163, 184, 0.22), rgba(148, 163, 184, 0.22) 1px, transparent 1px, transparent 28px)",
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 flex min-h-screen">
                <aside className="hidden w-80 shrink-0 border-r border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur lg:flex lg:flex-col">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                            <span className="text-sm font-semibold">SP</span>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                Satu Peta
                            </p>
                            <p className="text-base font-semibold text-slate-800">
                                Jabar
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                            Cari Lokasi
                        </label>
                        <div className="mt-3 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                            <input
                                type="text"
                                placeholder="Cari lokasi"
                                className="w-full bg-transparent text-sm text-slate-700 outline-none"
                            />
                            <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                                <span className="text-sm">Go</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold text-slate-700">
                                Mapset
                            </h3>
                            <button className="text-xs font-semibold text-emerald-700">
                                Reset
                            </button>
                        </div>
                        <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                            <div className="flex h-24 items-center justify-center rounded-2xl bg-emerald-100/70">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
                                    <span className="text-xs font-semibold">
                                        +
                                    </span>
                                </div>
                            </div>
                            <p className="mt-4 text-center text-xs text-slate-600">
                                Belum ada mapset yang dipilih. Silakan pilih
                                mapset untuk melihat detail.
                            </p>
                            <button className="mt-4 w-full rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
                                Pilih Mapset
                            </button>
                        </div>
                    </div>

                    <div className="mt-auto rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                        <h3 className="text-sm font-semibold text-slate-700">
                            Pengukuran Peta
                        </h3>
                        <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                            {["Jarak", "Rute", "Area"].map((item) => (
                                <button
                                    key={item}
                                    className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 font-semibold text-slate-600"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                <main className="relative flex-1 p-6">
                    <div className="flex items-center justify-end gap-3">
                        <button className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
                            Tentang
                        </button>
                        <button className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
                            Bantuan
                        </button>
                    </div>

                    <div className="pointer-events-none absolute bottom-6 right-6 flex items-center gap-3 text-xs font-semibold text-slate-500">
                        <div className="rounded-full bg-white/80 px-3 py-1 shadow">
                            Lat 0.00000
                        </div>
                        <div className="rounded-full bg-white/80 px-3 py-1 shadow">
                            Long 0.00000
                        </div>
                        <div className="rounded-full bg-white/80 px-3 py-1 shadow">
                            30 km
                        </div>
                    </div>

                    <div className="relative mx-auto mt-6 w-full max-w-5xl">
                        <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl backdrop-blur">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                                        Katalog Mapset
                                    </p>
                                    <h2 className="mt-2 text-xl font-semibold text-slate-800">
                                        Pilih data untuk ditampilkan
                                    </h2>
                                </div>
                                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                                    <span className="text-sm">X</span>
                                </button>
                            </div>

                            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                                            <input
                                                type="text"
                                                placeholder="Cari mapset"
                                                className="w-full bg-transparent text-sm text-slate-700 outline-none"
                                            />
                                        </div>
                                        <button className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
                                            Cari
                                        </button>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {[
                                            "Sektor",
                                            "Organisasi",
                                            "Urutkan",
                                        ].map((item) => (
                                            <button
                                                key={item}
                                                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600"
                                            >
                                                {item}
                                                <span className="text-[10px]">
                                                    v
                                                </span>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-4 space-y-3">
                                        {[
                                            {
                                                title: "Delineasi Zonasi Kawasan Bandung Utara (Kbu)",
                                                org: "Dinas Bina Marga Dan Penataan Ruang",
                                                year: "2021",
                                            },
                                            {
                                                title: "Jaringan Jalan Provinsi",
                                                org: "Dinas Bina Marga Dan Penataan Ruang",
                                                year: "2021",
                                            },
                                            {
                                                title: "Sebaran Pesantren",
                                                org: "Dinas Koperasi Dan Usaha Kecil",
                                                year: "2021",
                                            },
                                        ].map((item) => (
                                            <div
                                                key={item.title}
                                                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
                                            >
                                                <div className="flex h-16 w-20 items-center justify-center rounded-xl bg-slate-100 text-xs text-slate-500">
                                                    preview
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-semibold text-slate-700">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-xs text-slate-500">
                                                        {item.org}
                                                    </p>
                                                    <p className="text-xs text-slate-400">
                                                        {item.year}
                                                    </p>
                                                </div>
                                                <button className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-300">
                                                    <span className="text-[10px]">
                                                        +
                                                    </span>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
                                    <div>
                                        <div className="mx-auto flex h-40 w-48 items-center justify-center rounded-3xl bg-white shadow-sm">
                                            <div className="h-24 w-32 rounded-2xl bg-gradient-to-br from-emerald-200 via-amber-100 to-sky-200"></div>
                                        </div>
                                        <p className="mt-6 text-sm font-semibold text-slate-600">
                                            Pilih mapset dari pilihan di samping
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
