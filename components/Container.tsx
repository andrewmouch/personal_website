import Head from 'next/head';
import { Navbar } from './Navbar';

type ContainerProps = {
  title?: string,
  description?: string
  children?: React.ReactNode
  scrollToTop: () => void
  scrollToExperience: () => void
  scrollToProjects: () => void
  // scrollToInterests: () => void
}

export const Container = (props: ContainerProps) => {
  const { children, title, description } = props;
  const meta = {
    title: title || 'Andrew Mouchantaf',
    description: description || `My personal page.`,
  };

  const { scrollToTop, scrollToExperience, scrollToProjects } = props
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={"container w-11/12 xl:w-8/12 mx-auto mb-12"}>
        <Navbar
          scrollToTop={scrollToTop}
          scrollToExperience={scrollToExperience}
          scrollToProjects={scrollToProjects}
        // scrollToInterests={scrollToInterests}
        />
        <div className={"mt-12 px-6"}>
          {children}
        </div>
      </div>
    </>


  );
}
