import React from 'react';
import { Carousel, Layout } from 'antd';
import * as styles from './styles';

import { Navbar } from '~/components/Navbar';

const { Header, Content } = Layout;

function LandingPage() {
  const contentStyle = {
    height: '25rem',
    color: '#fff',
    lineHeight: '25rem',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Layout>
      <Header style={{ background: '#fff' }}>
        <Navbar />
      </Header>
      <Content>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <center>
                <img
                  width="100%"
                  src="https://i.postimg.cc/fLLP8Qff/Tenha-acesso-diversos-cursos-gratuitamente-1.png"
                  border="0"
                  alt="Img1"
                />
              </center>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <center>
                <img
                  width="100%"
                  src="https://i.postimg.cc/wTVGYB4Q/Explore-dentre-diversas-reas-do-conhecimento.png"
                  border="0"
                  alt="Img2"
                />
              </center>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <center>
                <img
                  width="100%"
                  src="https://i.postimg.cc/25VkBMLg/Acesse-suas-aulas-em-qualquer-lugar-1.png"
                  border="0"
                  alt="Img3"
                />
              </center>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <center>
                <img
                  width="100%"
                  src="https://i.postimg.cc/Z5f3mkhQ/Tenha-controle-total-do-seu-aprendizado.png"
                  border="0"
                  alt="Img4"
                />
              </center>
            </h3>
          </div>
        </Carousel>

        <styles.About>
          <h1>Sobre</h1>
        </styles.About>

        <styles.WhoWeAre>
          <h1>Quem somos?</h1>
        </styles.WhoWeAre>

        <styles.Contact>
          <h1>Contato</h1>
        </styles.Contact>
      </Content>
    </Layout>
  );
}

export default LandingPage;
