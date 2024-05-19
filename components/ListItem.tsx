import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { bebas } from '@/utils/styles/fonts';

interface Props {
  platform?: string | null;
  number?: number | null;
  description?: string | null;
  link?: string | null;
}

const ListItem: React.FC<Props> = ({ platform, description, link, number }) => {
  return (
    <li className="p-4 md:p-6 lg:p-4 xl:p-6 md:py-8 hover:bg-base-200/60">
      <Link href={link || '/'} passHref>
        <div className="space-x-4 items-center sm:space-x-6 lg:space-x-4 xl:space-x-6 flex justify-between">
          <div className={`${bebas.className} md:text-6xl text-gray-500/50 self-center`}>0{number}</div>
          <div className={`${bebas.className} text-2xl md:text-6xl text-left`}>
            <span className="text-red-600 font-extrabold">&#92;</span>
            {platform || 'TikTok'}
          </div>
          {description && <div className="description self-center text-left text-xl hidden md:block">{description}</div>}
          <div className="self-center bg-gray-500/80 rounded-lg">
            <ArrowUpRight size={64} className="text-base-100" />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
