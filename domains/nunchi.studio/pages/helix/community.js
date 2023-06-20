import { Join } from '@nunchistudio/base';

export async function getStaticProps(context) {
  return {
    props: {
      name: 'helix',
      repository: 'helix',
      markdoc: {
        frontmatter: {
          title: 'Community'
        },
      },
    },
  }
};

export default Join;
