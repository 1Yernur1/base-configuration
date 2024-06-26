import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ClerkProvider } from "@clerk/nextjs";
import "./index.scss";

const BaseLayout = async ({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) => {
	const messages = await getMessages();
	return (
		<ClerkProvider>
			<html lang={locale}>
				<body className="h-screen bg-black text-white flex justify-center items-center">
					<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
				</body>
			</html>
		</ClerkProvider>
	);
};

export default BaseLayout;
