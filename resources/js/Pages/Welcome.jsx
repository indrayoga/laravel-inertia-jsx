import React, { useEffect, useState } from "react";

export default function Welcome() {
  const [showSnackbar, setShowSnackbar] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const channel = window.Echo.channel("public-notification").listen(
      "SendNotification",
      (event) => {
        console.log("SendNotification received:", event);
        setMessage(event.message);
        setShowSnackbar(true);
      },
    );

    return () => {
      window.Echo.leave("public-notification");
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-100">
      {showSnackbar && (
        <div className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-lg border border-emerald-200 bg-white px-4 py-3 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-slate-800">Berhasil</p>
              <p className="text-xs text-slate-600">
                {message || "Snackbar berhasil ditampilkan di bagian atas."}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowSnackbar(false)}
              className="rounded p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Tutup notifikasi"
            >
              ×
            </button>
          </div>
        </div>
      )}
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
