import { useForm } from "@inertiajs/react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors } = useForm({
        password: "",
    });

    const submit = (event) => {
        event.preventDefault();
        post("/user/confirm-password");
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <div className="mx-auto max-w-md px-6 py-16">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h1 className="text-2xl font-semibold">Confirm password</h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Please confirm your password before continuing.
                    </p>

                    <form onSubmit={submit} className="mt-6 space-y-4">
                        <div>
                            <label className="text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                                required
                                autoFocus
                            />
                            {errors.password && (
                                <p className="mt-1 text-xs text-red-600">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
                        >
                            Confirm
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
