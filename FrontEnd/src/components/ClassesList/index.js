import React from 'react';
import { Link } from 'react-router-dom';

import { List, Card, Rate, Typography } from 'antd';
import { FiBookOpen } from 'react-icons/fi';
import { classes } from '~/services/dataAPi';

import * as styles from './styles';

const { Paragraph, Title } = Typography;

export default function ClassesList() {
  return (
    <styles.Content>
      <List
        grid={{
          gutter: 8,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 5,
        }}
        dataSource={classes}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/cursoInfo/${item.id}`}>
              <Card
                style={{ textAlign: 'center', borderRadius: '10px' }}
                hoverable
                title={
                  <Title level={5} ellipsis={{ tooltip: true }}>
                    {item.title}
                  </Title>
                }
              >
                <div className="icon-category">
                  <FiBookOpen />
                </div>
                <Paragraph ellipsis={{ rows: 1, tooltip: true }}>
                  {item.description}
                </Paragraph>
                <br />
                <Rate disabled allowHalf defaultValue={item.rating} />
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </styles.Content>
  );
}
