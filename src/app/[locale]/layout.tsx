import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ClerkProvider } from "@clerk/nextjs";
import { enUS, ruRU } from "@clerk/localizations";
import { ThemeProvider } from "../providers";

import "./index.scss";

const BaseLayout = async ({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) => {
	const messages = await getMessages();
	const clerkLocal = locale === "ru" ? ruRU : enUS;

	return (
		<ClerkProvider localization={clerkLocal}>
			<html lang={locale} suppressHydrationWarning>
				<body className="h-screen flex justify-center items-center">
					<NextIntlClientProvider messages={messages}>
						<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
							{children}
						</ThemeProvider>
					</NextIntlClientProvider>
				</body>
			</html>
		</ClerkProvider>
	);
};

export default BaseLayout;
