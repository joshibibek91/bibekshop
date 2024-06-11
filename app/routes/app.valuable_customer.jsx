import { IndexTable, Card, Text, Badge, useBreakpoints, Page } from '@shopify/polaris';
import React from 'react';


function ValuableCustomer() {
  const orders = [
    {
      SN: "1",
      name: "Karine Ruby",
      email_subscription: <Badge tone="success">Subscribed</Badge>,
      location: "Canada, Toronto",
      orders: "15",
      amount_spent: "Rs. 4500000",
    },
    {
      SN: "2",
      name: "Russell Winfield",
      email_subscription: <Badge tone="success">Subscribed</Badge>,
      location: "Australia, Sydney",
      orders: "12",
      amount_spent: "Rs. 3520000",
    },
    {
      SN: "3",
      name: "Elena Amber",
      email_subscription: <Badge tone="success">Subscribed</Badge>,
      location: "Mumbai, India",
      orders: "9",
      amount_spent: "Rs. 1100000",
    },
    {
      SN: "4",
      name: "Vivienne Jade",
      email_subscription: <Badge tone="info">Unsubscribed</Badge>,
      location: "Madrid, Spain",
      orders: "7",
      amount_spent: "Rs. 150000",
    },
    {
      SN: "5",
      name: "Ayumu Hirano",
      email_subscription: <Badge tone="success">Subscribed</Badge>,
      location: "Paris, France",
      orders: "5",
      amount_spent: "Rs. 100000",
    },

  ];

  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const rowMarkup = orders.map(({ id, SN, name, email_subscription, location, orders, amount_spent }, index) => (

    <IndexTable.Row id={id} key={id} position={index}>

      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {SN}
        </Text>
      </IndexTable.Cell>

      <IndexTable.Cell>{name}</IndexTable.Cell>
      <IndexTable.Cell>{email_subscription}</IndexTable.Cell>
      <IndexTable.Cell>{location}</IndexTable.Cell>
      <IndexTable.Cell>{orders}</IndexTable.Cell>
      <IndexTable.Cell>{amount_spent}</IndexTable.Cell>

    </IndexTable.Row>
  ));

  return (
    <Page fullWidth
      title={"Most Valuable Customers"}
      // primaryAction={{ content: "Add product" }}
      secondaryActions={[
        {
          content: "Export",
          accessibilityLabel: "Export product list",
          onAction: () => alert("Export action"),
        },
        // {
        //   content: "Import",
        //   accessibilityLabel: "Import product list",
        //   onAction: () => alert("Import action"),
        // },
      ]}
    >

      <Card >
        <IndexTable
          condensed={useBreakpoints().smDown}
          resourceName={resourceName}
          itemCount={orders.length}
          headings={[
            { title: 'SN.' },
            { title: 'Name' },
            { title: 'Email Subscription' },
            { title: 'Location' },
            { title: 'Orders' },
            { title: 'Amouunt Spent' },

          ]}
          selectable={false}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </Page>
  );
}

export default ValuableCustomer;
