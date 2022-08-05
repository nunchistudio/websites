import { Join } from '@nunchistudio/base';

export async function getStaticProps(context) {
  return {
    props: {
      name: 'Temporal Land',
      repository: 'temporal-land',
      markdoc: {
        frontmatter: {
          title: 'Join us'
        },
      },
    },
  }
};

export default Join;
