import React from 'react';

import { List, Card, Rate } from 'antd';

import * as styles from './styles';

const data = [
  {
    title: 'Title 1',
    description: 'blá blá',
    rating: 4,
  },
  {
    title: 'Title 2',
    description: 'blá blá 2',
    rating: 4.5,
  },
  {
    title: 'Title 3',
    description: 'blá blá 3',
    rating: 5,
  },
  {
    title: 'Title 4',
    description: 'blá blá 4',
    rating: 3,
  },
];

export default function ClassesList() {
  return (
    <styles.Content>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card hoverable title={item.title}>
              {item.description}
              <br />
              <Rate disabled allowHalf defaultValue={item.rating} />
            </Card>
          </List.Item>
        )}
      />
    </styles.Content>
  );
}
