import { Card, ResourceList, ResourceItem, Text } from '@shopify/polaris';
import { useState } from 'react';

const items = [
  {
    id: '6',
    url: 'posts/6',
    title: 'How To Get Value From Wireframes',
    author: 'Jonathan Mangrove',
  },
];

function ResourceItemExample() {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <Card>
      <ResourceList
        resourceName={{singular: 'blog post', plural: 'blog posts'}}
        items={items}
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
        renderItem={(item) => {
          const {id, url, title, author} = item;
          const authorMarkup = author ? <div>by {author}</div> : null;
          return (
            <ResourceItem
              id={id}
              url={url}
              accessibilityLabel={`View details for ${title}`}
              name={title}
            >
              <Text variant="bodyMd" fontWeight="bold" as="h3">
                {title}
              </Text>
              {authorMarkup}
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
}

export default ResourceItemExample;
