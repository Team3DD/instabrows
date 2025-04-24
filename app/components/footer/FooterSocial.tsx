'use client';

import { FacebookIcon } from '../icons/FacebookIcon';
import { InstagramIcon } from '../icons/InstagramIcon';

type ContactInfo = {
  label: string;
  value: string;
};

type SocialLink = {
  href: string;
  label: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
};

type FooterSocialProps = {
  contactInfo: ContactInfo[];
  socialLinks: SocialLink[];
};

export default function FooterSocial({ contactInfo, socialLinks }: FooterSocialProps) {
  return (
    <div className="text-center md:text-right">
      <div className="mb-3" itemScope itemType="https://schema.org/Organization">
        <h3 className="text-sm font-bold mb-1.5">Síguenos</h3>
        <div className="flex justify-center md:justify-end space-x-3">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Síguenos en ${social.label}`}
              itemProp="sameAs"
            >
              <social.icon size={20} className="text-gray-600 hover:text-gray-900" />
            </a>
          ))}
        </div>
      </div>
      
      <div itemScope itemType="https://schema.org/Organization">
        <h3 className="text-sm font-bold mb-1.5">Contacto</h3>
        {contactInfo.map((info, index) => (
          <p 
            key={index} 
            className="text-gray-600 mb-0.5 text-xs leading-tight" 
            itemProp={info.label === "Email" ? "email" : info.label === "Teléfono" ? "telephone" : "address"}
          >
            <span className="font-medium">{info.label}:</span> {info.value}
          </p>
        ))}
      </div>
    </div>
  );
}