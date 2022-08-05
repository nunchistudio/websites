import { Next404 } from '@nunchistudio/base';

export async function getStaticProps(context) {
  return {
    props: {
      markdoc: {
        frontmatter: {
          title: 'Page not found'
        },
      },
    },
  }
};

export default Next404;
