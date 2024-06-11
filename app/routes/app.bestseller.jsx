import { IndexTable, Card, Text, Badge, useBreakpoints, Page } from '@shopify/polaris';
import React from 'react';


function BestSales() {
  const orders = [
    {
      SN: "1",
      price: "Rs. 200",
      product: "1ZPRESSO | J-MAX Manual Coffee Grinder",
      tone: <Badge tone="success">Active</Badge>,
      inventory: "20 in stock",
      type: "Brew Gear",
      sales_channnel: "1",
      markets: "3",
      total_sales: "Rs. 5845",
    },
    {
      SN: "2",
      price: "Rs. 200",
      product: "Acaia Pearl Set",
      tone: <Badge tone="success">Active</Badge>,
      inventory: "2 in stock for 50 variants",
      type: "Brew Gear",
      sales_channnel: "1",
      markets: "3",
      total_sales: "Rs. 5050",
    },
    {
      SN: "3",
      price: "Rs. 200",
      product: "AeroPress Go Brewer",
      tone: <Badge tone="info">Draft</Badge>,
      inventory: "3 in stock for 50 variants",
      type: "Brew Gear",
      sales_channnel: "1",
      markets: "3",
      total_sales: "Rs. 4500",
    },
    {
      SN: "4",
      price: "Rs. 200",
      product: "Canadiano Brewer",
      tone: <Badge tone="success">Active</Badge>,
      inventory: "890 in stock for 50 variants",
      type: "Brew Merch",
      sales_channnel: "1",
      markets: "3",
      total_sales: "Rs. 4150",
    },
    {
      SN: "5",
      price: "Rs. 200",
      product: "Canadiano Brewer White Ash",
      tone: <Badge tone="success">Active</Badge>,
      inventory: "890 in stock for 50 variants",
      type: "Brew Gear",
      sales_channnel: "1",
      markets: "3",
      total_sales: "Rs. 3985",
    },
  ];

  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const rowMarkup = orders.map(({ id, SN, order, tone, markets, sales_channnel, price, product, inventory, type, vendor, date, customer, total_sales, paymentStatus, fulfillmentStatus }, index) => (

    <IndexTable.Row id={id} key={id} position={index}>

      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {SN}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <img
          src={"https://cdn.shopify.com/s/files/1/0886/0968/5813/files/Main_52f8e304-92d9-4a36-82af-50df8fe31c69_350x350.jpg?v=1717479863" + String(index)}
          alt={"product thumbnail" + product} style={{ height: '50px' }}
        />
      </IndexTable.Cell>
      <IndexTable.Cell>{product}</IndexTable.Cell>
      <IndexTable.Cell>{price}</IndexTable.Cell>
      <IndexTable.Cell>{tone}</IndexTable.Cell>
      <IndexTable.Cell>
        {inventory}
      </IndexTable.Cell>
      <IndexTable.Cell>{sales_channnel}</IndexTable.Cell>
      <IndexTable.Cell>{markets}</IndexTable.Cell>
      <IndexTable.Cell>{total_sales}</IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <Page fullWidth
      title={"Best Selling Products"}
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
            { title: 'Image' },
            { title: 'Product' },
            { title: 'Price' },
            { title: 'Status' },
            { title: 'Inventory' },
            { title: 'Sales Channel' },
            { title: 'Markets' },
            { title: 'Total Sales' },
          ]}
          selectable={false}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </Page>
  );
}

export default BestSales;
