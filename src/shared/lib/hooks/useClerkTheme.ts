"use client";

import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { BaseThemeTaggedType } from "@clerk/types";

export const useClerkTheme = (): BaseThemeTaggedType | undefined => {
	const { resolvedTheme } = useTheme();
	const [clerkTheme, setClerkTheme] = useState<BaseThemeTaggedType | undefined>();

	useEffect(() => {
		setClerkTheme(resolvedTheme === "dark" ? dark : undefined);
	}, [resolvedTheme]);

	return clerkTheme;
};
