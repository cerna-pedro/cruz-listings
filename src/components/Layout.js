import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import 'typeface-amiko';
import './layout.css';

const Layout = ({ children }) => {
  const { title, description, url } = useSiteMetadata();
  return (
    <div className='container'>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes='16x16'
        />
        <meta name='theme-color' content='#fff' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={url} />
        <meta
          property='og:image'
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
      </Helmet>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
