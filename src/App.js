import {Routes, Route, Outlet} from 'react-router-dom';
import {Fragment} from 'react';
import Layout from './Layout';
import Page from './Components/Page';
import PostsPage from './Components/PostsPage';
import SearchPage from './Components/SearchPage';
import NotFound from './Components/Parts/NotFound';
import {FRONT_PAGE, WP_PAGES, TAG_TYPE, CATEGORY_TYPE, POST_TYPE, PAGE_TYPE, PERMALINK_ROUTE, BLOG_ROUTE} from './Common/WordPress';

const FrontPage = () => {
  if (FRONT_PAGE) {
    return <Page route={FRONT_PAGE} type={PAGE_TYPE}/>;
  }
  return <PostsPage/>;
}

const PageRoutes = (pages) => {
  const renderRoutes = (pages, parentRoute=null) => {
    return pages.map((page) => {
      let pageRoute = parentRoute ? `${parentRoute}/${page.slug}`: `/${page.slug}`;
      let indexRoute = <Route path={pageRoute} element={<Page route={page.slug} type={PAGE_TYPE}/>}/>;

      if (page.children && page.children.length) {
        return (
          <Fragment>
            {indexRoute}
            {renderRoutes(page.children, pageRoute)}
          </Fragment>
        );
      }
      return indexRoute;
    });
  }
  return renderRoutes(pages);
}

const TaxonomyRoutes = (type) => {
  return Object.keys(type.list).map((ID) => {
    const item = type.list[ID];
    const slug = item.slug;
    const pageRoute = `${type.route}/${slug}`;
    const childRoute = `${pageRoute}/:pageNumber`;
    const TaxonomyPage = () => <PostsPage route={pageRoute} taxonomy={type} taxonomyID={ID}/>;

    return (
      <Fragment>
        <Route path={pageRoute} element={<TaxonomyPage/>}/>
        <Route path={childRoute} element={<TaxonomyPage/>}/>
      </Fragment>
    );
  });
}

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<FrontPage/>}/>
        <Route path={BLOG_ROUTE} element={<PostsPage/>}/>
        <Route path={`${BLOG_ROUTE}/:pageNumber`} element={<PostsPage/>}/>
        <Route path={`${PERMALINK_ROUTE}/:route`} element={<Page type={POST_TYPE}/>}/>
        {PageRoutes(WP_PAGES)}
        {TaxonomyRoutes(TAG_TYPE)}
        {TaxonomyRoutes(CATEGORY_TYPE)}
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}
export default App;
