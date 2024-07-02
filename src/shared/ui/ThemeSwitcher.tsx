"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export const ThemeSwitcher = () => {
	const { resolvedTheme, setTheme } = useTheme();

	const handleChange = () => setTheme(resolvedTheme === "light" ? "dark" : "light");

	return <Switch onCheckedChange={handleChange} />;
};
