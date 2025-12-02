import Breadcrumbs from '@/components/common/sectionHeader';

export default function PageWrapper({
  title,
  breadcrumb,
  children,
}: {
  title?: string;
  breadcrumb?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {title && (
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">{title}</h1>
          {breadcrumb}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
