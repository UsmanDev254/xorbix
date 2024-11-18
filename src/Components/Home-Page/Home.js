import React, { Suspense , lazy } from "react";

// Lazy-loaded components
const HomeBanner = lazy(() => import("./Banner"));
const Technology = lazy(() => import("./Technology"));
const HomeTab = lazy(() => import("./Tabs"));
const Clients = lazy(() => import("./Clients"));
const Industries = lazy(() => import("./Industries"));
const Testimonial = lazy(() => import("./Testimonial"));
const BlogFooter = lazy(() => import("./BlogsFooter"));
const Footer = lazy(() => import("../Footer/Footer"));

function Homeparent() {
  return (
    <div className="Home_Main">
      <Suspense fallback={<div>Loading Home Banner...</div>}>
        <HomeBanner />
      </Suspense>
      <Suspense fallback={<div>Loading Technology Section...</div>}>
        <Technology />
      </Suspense>
      <Suspense fallback={<div>Loading Tabs...</div>}>
        <HomeTab />
      </Suspense>
      <Suspense fallback={<div>Loading Clients Section...</div>}>
        <Clients />
      </Suspense>
      <Suspense fallback={<div>Loading Industries Section...</div>}>
        <Industries />
      </Suspense>
      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonial />
      </Suspense>
      <Suspense fallback={<div>Loading Blog Footer...</div>}>
        <BlogFooter />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Homeparent;
