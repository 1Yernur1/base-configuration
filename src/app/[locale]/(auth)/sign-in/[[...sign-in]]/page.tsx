"use client";

import { SignIn } from "@clerk/nextjs";
import { useClerkTheme } from "@/shared";

const SignInPage = () => {
	const clerkTheme = useClerkTheme();

	if (!clerkTheme) {
		return null;
	}

	return (
		<div className="h-screen flex justify-center items-center">
			<SignIn appearance={{ baseTheme: clerkTheme }} />
		</div>
	);
};

export default SignInPage;
