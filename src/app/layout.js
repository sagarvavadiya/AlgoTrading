'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageLoader from '@/component/common/PageLoader';
import NavHeader from '@/component/common/NavHeader';
import ChatBox from '@/component/common/ChatBox';
import Header from '@/component/common/Header';
import Sidebar from '@/component/common/Sidebar';
import Footer from '@/component/common/Footer';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <html lang='en'>
      <head>
        {/*Title*/}
        <title>
          YashAdmin -Sales Management System Admin Dashboard Bootstrap HTML
          Template | DexignZone
        </title>
        {/* Meta */}
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='author' content='DexignZone' />
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content='YashAdmin, sales Admin Dashboard, Bootstrap Template, Web Application, sales Management, Responsive Design, User Experience, Customizable, Modern UI, Dashboard Template, Admin Panel, Bootstrap 5, HTML5, CSS3, JavaScript, Analytics, Products, Admin Template, UI Kit, SASS, SCSS, CRM, Analytics, Responsive Dashboard, responsive admin dashboard, sales dashboard, ui kit, web app, Admin Dashboard, Template, Admin, CMS pages, Authentication, FrontEnd Integration, Web Application UI, Bootstrap Framework, User Interface Kit, Financial Dashboard, SASS Integration, Customizable Template, Product Management, HTML5/CSS3, CRM Dashboard, Analytics Dashboard, Admin Dashboard UI, Mobile-Friendly Design, UI Components, Dashboard Widgets, Dashboard Framework, Data Visualization, User Experience (UX), Dashboard Widgets, Real-time Analytics, Cross-Browser Compatibility, Interactive Charts, Product Processing, Performance Optimization, Multi-Purpose Template, Efficient Admin Tools, Task Management, Modern Web Technologies, Product Tracking, Responsive Tables, Dashboard Widgets, Invoice Management, Access Control, Modular Design, Product History, Trend Analysis, User-Friendly Interface'
        />
        <meta
          name='description'
          content='The Yash Admin Sales Management System is a robust and intuitive platform designed to streamline sales operations and enhance business productivity. This comprehensive admin dashboard offers a feature-rich environment tailored specifically for managing sales processes effectively.With its modern and responsive design, Yash Admin provides a seamless user experience across various devices and screen sizes. The user interface is highly customizable, allowing administrators to tailor the dashboard to their specific needs and branding requirements.'
        />
        <meta
          property='og:title'
          content='YashAdmin -Sales Management System Admin Dashboard Bootstrap HTML Template | DexignZone'
        />
        <meta
          property='og:description'
          content='The Yash Admin Sales Management System is a robust and intuitive platform designed to streamline sales operations and enhance business productivity. This comprehensive admin dashboard offers a feature-rich environment tailored specifically for managing sales processes effectively.With its modern and responsive design, Yash Admin provides a seamless user experience across various devices and screen sizes. The user interface is highly customizable, allowing administrators to tailor the dashboard to their specific needs and branding requirements.'
        />
        <meta
          property='og:image'
          content='https://yashadmin.dexignzone.com/xhtml/social-image.png'
        />
        <meta name='format-detection' content='telephone=no' />
        <meta
          name='twitter:title'
          content='YashAdmin -Sales Management System Admin Dashboard Bootstrap HTML Template| DexignZone'
        />
        <meta
          name='twitter:description'
          content='The Yash Admin Sales Management System is a robust and intuitive platform designed to streamline sales operations and enhance business productivity. This comprehensive admin dashboard offers a feature-rich environment tailored specifically for managing sales processes effectively.With its modern and responsive design, Yash Admin provides a seamless user experience across various devices and screen sizes. The user interface is highly customizable, allowing administrators to tailor the dashboard to their specific needs and branding requirements.'
        />
        <meta
          name='twitter:image'
          content='https://yashadmin.dexignzone.com/xhtml/social-image.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        {/* MOBILE SPECIFIC */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* FAVICONS ICON */}
        <link
          rel='shortcut icon'
          type='image/png'
          href='assets/images/favicon.png'
        />
        <link
          href='assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css'
          rel='stylesheet'
        />
        <link
          href='assets/vendor/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css'
          rel='stylesheet'
        />
        <link
          href='assets/vendor/datatables/css/jquery.dataTables.min.css'
          rel='stylesheet'
        />
        {/* Style css */}
        <link
          className='main-css'
          href='assets/css/style.css'
          rel='stylesheet'
        />
      </head>
      <body
        data-typography='poppins'
        data-theme-version=''
        data-layout='vertical'
        data-nav-headerbg='color_2'
        data-headerbg='color_1'
        data-sidebar-style='full'
        data-sidebarbg='color_2'
        data-sidebar-position='fixed'
        data-header-position='fixed'
        data-container='wide'
        direction='ltr'
        data-primary='color_1'
        data-secondary='color_1'
      >
        {/********************
  Preloader start
    *********************/}
        <PageLoader show={isLoading} />
        {/********************
  Preloader end
    *********************/}
        {/***********************************
  Main wrapper start
    ************************************/}
        <div id='main-wrapper' className={isLoading ? '' : 'show'}>
          {/***********************************
      Nav header start
  ************************************/}
          <NavHeader />

          {/***********************************
      Nav header end
  ************************************/}
          {/***********************************
      Chat box start
  ************************************/}
          <ChatBox />
          {/***********************************
      Chat box End
  ************************************/}
          {/***********************************
      Header start
  ************************************/}
          <Header />
          {/***********************************
      Header end ti-comment-alt
  ************************************/}
          {/***********************************
      Sidebar start
  ************************************/}
          <Sidebar />
          {/***********************************
      Sidebar end
  ************************************/}
          {/***********************************
      Content body start
  ************************************/}
          {children}
          {/* Vertically centered modal */}
          {/***********************************
      Content body end
  ************************************/}
          {/***********************************
      Footer start
  ************************************/}
          <Footer />
          {/***********************************
      Footer end
  ************************************/}
          {/***********************************
     Support ticket button start
  ************************************/}
          {/***********************************
     Support ticket button end
  ************************************/}
        </div>
        {/***********************************
  Main wrapper end
    ************************************/}
        {/***********************************
  Scripts
    ************************************/}
        {/* Required vendors */}
        {/* Dashboard 1 */}
      </body>
    </html>
  );
}
