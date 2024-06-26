import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
	locales: ["en", "ru"],
	defaultLocale: "ru",
});

const isPublicRoute = createRouteMatcher(["/:locale/sign-in(.*)", "/:locale/sign-up(.*)"]);

export default clerkMiddleware((auth, req) => {
	console.log("req: ", req.url);
	const locale = req.nextUrl.pathname.split("/")[1] || "ru";
	const redirectUrl = new URL(`/${locale}/sign-in?callbackUrl=${encodeURIComponent(req.url)}`, req.url).toString();

	if (!isPublicRoute(req))
		auth().protect({
			unauthenticatedUrl: redirectUrl,
		});

	return intlMiddleware(req);
});

export const config = {
	matcher: ["/", "/(ru|en)/:path*"],
};
