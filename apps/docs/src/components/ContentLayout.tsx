import clsx from 'clsx';

import type { ReactNode } from 'react';

type Meta = {
  title: string;
  author: string;
  publishedAt: string | Date;
};

interface ContentLayoutProps {
  meta: Meta;
  children: ReactNode;
  className?: string;
}

export default function ContentLayout({ meta, children, className }: ContentLayoutProps) {
  return (
    <main className={clsx(className, 'mx-auto max-w-screen-lg py-24 px-4')}>
      <h1 className="text-center text-3xl font-bold">{meta.title}</h1>
      <div className="prose mx-auto mt-12 max-w-none">{children}</div>
    </main>
  );
}
