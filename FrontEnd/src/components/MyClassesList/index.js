import React from 'react';
import { Link } from 'react-router-dom';

import { List, Card, Rate, Typography } from 'antd';
import { FiBookOpen } from 'react-icons/fi';

import * as styles from './styles';
import { useClass } from '~/services/dataHooks';
import { useAuth } from '~/hooks/AuthContext';

const { Paragraph, Title } = Typography;

export default function MyClassesList() {
  const { classes } = useClass();
  const { user } = useAuth();

  const listArray = classes.filter(
    (classe) => classe.students[0].id === user.id
  );

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
        dataSource={listArray}
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
