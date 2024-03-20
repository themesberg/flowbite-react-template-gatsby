import { DarkThemeToggle } from "flowbite-react";
import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <h1 className="text-2xl dark:text-white">Flowbite React + Gatsby</h1>
      <DarkThemeToggle />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
