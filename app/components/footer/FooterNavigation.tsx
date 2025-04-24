'use client';

import Link from 'next/link';

type NavigationCategory = {
  title: string;
  links: Array<{
    href: string;
    label: string;
  }>;
};

type FooterNavigationProps = {
  category: NavigationCategory;
};

export default function FooterNavigation({ category }: FooterNavigationProps) {
  return (
    <div className="text-center px-1 flex flex-col justify-start h-full">
      <h3 className="text-base font-bold mb-1.5 text-center">{category.title}</h3>
      <nav aria-label={`Menú de ${category.title}`}>
        <ul 
          className="space-y-0.5 w-full flex flex-col items-center" 
          itemScope 
          itemType="https://schema.org/SiteNavigationElement"
        >
          {category.links.map((link) => (
            <li key={link.href} itemProp="name" className="w-full text-center">
              <Link 
                href={link.href} 
                className="text-gray-600 hover:text-gray-900 transition-colors block py-0.5 text-sm"
                aria-label={`Ir a ${link.label}`}
                itemProp="url"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}