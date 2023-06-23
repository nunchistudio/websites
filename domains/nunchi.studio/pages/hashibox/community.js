import { Join } from '@nunchistudio/base';

export async function getStaticProps(context) {
  return {
    props: {
      name: 'HashiBox',
      repository: 'hashibox',
      markdoc: {
        frontmatter: {
          title: 'Community'
        },
      },
    },
  }
};

export default Join;
