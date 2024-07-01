"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { SignIn } from "@clerk/nextjs";
import type { BaseThemeTaggedType } from "@clerk/types";

const SignInPage = () => {
	const { resolvedTheme } = useTheme();
	const [clerkTheme, setClerkTheme] = useState<BaseThemeTaggedType | undefined>();

	useEffect(() => {
		setClerkTheme(resolvedTheme === "dark" ? dark : undefined);
	}, [resolvedTheme]);

	if (!clerkTheme) return null;

	return (
		<div className="h-screen flex justify-center items-center">
			<SignIn
				appearance={{
					baseTheme: clerkTheme,
				}}
			/>
		</div>
	);
};

export default SignInPage;
