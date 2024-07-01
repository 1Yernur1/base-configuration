"use client";

import { SignUp } from "@clerk/nextjs";
import { useClerkTheme } from "@/shared";

const SignUpPage = () => {
	const clerkTheme = useClerkTheme();
	return (
		<div className="h-screen flex justify-center items-center">
			<SignUp appearance={{ baseTheme: clerkTheme }} />
		</div>
	);
};

export default SignUpPage;
