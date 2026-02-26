import { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function TwoFactorChallenge() {
    const [useRecovery, setUseRecovery] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        code: "",
        recovery_code: "",
    });

    const submit = (event) => {
        event.preventDefault();
        post("/two-factor-challenge");
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <div className="mx-auto max-w-md px-6 py-16">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h1 className="text-2xl font-semibold">
                        Two-factor challenge
                    </h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Enter the code from your authenticator app or use a
                        recovery code.
                    </p>

                    <form onSubmit={submit} className="mt-6 space-y-4">
                        {useRecovery ? (
                            <div>
                                <label className="text-sm font-medium">
                                    Recovery code
                                </label>
                                <input
                                    type="text"
                                    value={data.recovery_code}
                                    onChange={(e) =>
                                        setData("recovery_code", e.target.value)
                                    }
                                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                                    required
                                    autoFocus
                                />
                                {errors.recovery_code && (
                                    <p className="mt-1 text-xs text-red-600">
                                        {errors.recovery_code}
                                    </p>
                                )}
                            </div>
                        ) : (
                            <div>
                                <label className="text-sm font-medium">
                                    Authentication code
                                </label>
                                <input
                                    type="text"
                                    value={data.code}
                                    onChange={(e) =>
                                        setData("code", e.target.value)
                                    }
                                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                                    required
                                    autoFocus
                                />
                                {errors.code && (
                                    <p className="mt-1 text-xs text-red-600">
                                        {errors.code}
                                    </p>
                                )}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
                        >
                            Confirm
                        </button>
                    </form>

                    <button
                        type="button"
                        onClick={() => setUseRecovery((value) => !value)}
                        className="mt-6 text-sm text-slate-700 underline"
                    >
                        {useRecovery
                            ? "Use an authentication code"
                            : "Use a recovery code"}
                    </button>
                </div>
            </div>
        </div>
    );
}
