"use client";

import { api } from "@/lib/axios";
import { useRouter, useSearchParams } from "next/navigation";
import { setCookie } from "nookies";
import { useEffect } from "react";

export default function Callback() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	useEffect(() => {
		if (!token) {
			return;
		}

		const getUserData = async () => {
			try {
				const res = await api.get("/auth/callback", {
					params: {
						token: token,
					},
				});

				setCookie(null, "@whisper_auth_token", res.data.token, {
					maxAge: 7 * 24 * 60 * 60,
					path: "/",
				});

				router.push("/home");
			} catch (error) {
				console.error("Error during authentication:", error);

				router.push("/login");
			}
		};

		getUserData();
	}, [token, router]);

	return null;
}
