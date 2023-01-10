export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'review',
      title: 'Review',
      type: 'number',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
    },
    {
      name: 'about',
      title: 'About',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
};
