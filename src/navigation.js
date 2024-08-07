import { getPermalink } from './utils/permalinks';
import thirtyTwo from '~/assets/favicons/favicon-32x32.png';

export const headerData = {
  links: [
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Course Tutoring',
      links: [
        {
          text: 'High School Coursework',
          href: getPermalink('/tutoring/high-school'),
        },
        {
          text: 'Standardized Testing',
          href: getPermalink('/tutoring/testing'),
        },
        {
          text: 'AP Coursework',
          href: getPermalink('/tutoring/advanced-placement'),
        },
        {
          text: 'College Coursework',
          href: getPermalink('/tutoring/college'),
        },
      ],
    },
    {
      text: 'College Applications',
      links: [
        {
          text: 'Planning',
          href: getPermalink('/college/planning'),
        },
        {
          text: 'Essay Review',
          href: getPermalink('/college/essay'),
        },
        {
          text: 'Application Review',
          href: getPermalink('/college/application'),
        },
        {
          text: 'Resume Review',
          href: getPermalink('/college/resume'),
        },
      ],
    },
    {
      text: 'Yearly Packages',
      href: getPermalink('/yearly-packages'),
    },
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Course Tutoring',
      links: [
        { text: 'High School Coursework', href: getPermalink('/tutoring/high-school') },
        { text: 'Standardized Testing', href: getPermalink('/tutoring/testing') },
        { text: 'AP Coursework', href: getPermalink('/tutoring/advanced-placement') },
        { text: 'College Coursework', href: getPermalink('/tutoring/college') },
      ],
    },
    {
      title: 'College Applications',
      links: [
        { text: 'Planning', href: getPermalink('/college/planning') },
        { text: 'Essay Review', href: getPermalink('/college/essay') },
        { text: 'Application Review', href: getPermalink('/college/application') },
        { text: 'Resume Review', href: getPermalink('/college/resume') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Yearly Packages', href: getPermalink('/yearly-packages') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@longislandivyinsights' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/longislandivyinsights/',
    },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="${thirtyTwo.src}" alt="Long Island Ivy Insights and Consulting logo" loading="lazy"></img>
    © ${new Date().getFullYear()} Long Island Ivy Insights and Consulting, LLC · All rights reserved.
  `,
};
