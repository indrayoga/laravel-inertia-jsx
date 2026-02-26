import { Link, useForm } from "@inertiajs/react";

export default function ForgotPassword() {
    const { data, setData, post, processing, errors, recentlySuccessful } =
        useForm({
            email: "",
        });

    const submit = (event) => {
        event.preventDefault();
        post("/forgot-password");
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <div className="mx-auto max-w-md px-6 py-16">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h1 className="text-2xl font-semibold">Forgot password</h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Enter your email and we will send you a reset link.
                    </p>

                    <form onSubmit={submit} className="mt-6 space-y-4">
                        <div>
                            <label className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                                required
                                autoFocus
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-600">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
                        >
                            Email password reset link
                        </button>
                    </form>

                    {recentlySuccessful && (
                        <p className="mt-4 text-sm text-emerald-600">
                            Link sent. Check your email.
                        </p>
                    )}

                    <div className="mt-6 text-sm">
                        <Link
                            href="/login"
                            className="text-slate-700 underline"
                        >
                            Back to login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
