import React, { useEffect, useMemo, useState } from 'react';
import { Row } from 'antd';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import EditInput from '~/components/EditInput';
import { DetailScreenParams } from '~/components/Routes';
import { Country } from '~/domain/country';
import { ApplicationState } from '~/redux/store';
import {
  Container,
  ContentStyled,
  Flag,
  FlagContainer,
  LayoutStyled,
  ResetButton,
  Col,
} from './styles';

const DetailScreen: React.FC = () => {
  const [data, setData] = useState<Country>();

  const { countryId } = useParams<DetailScreenParams>();
  const list = useSelector(({ country }: ApplicationState) => country.list);

  useEffect(() => {
    setData(list.find((item) => item.numericCode === countryId));
  }, [list, countryId]);

  const topLevelDomain = useMemo(() => {
    let value = '';
    data?.topLevelDomains.forEach(({ name }) => {
      value += `${value ? ', ' : ''}${name}`;
    });

    return value;
  }, [data]);

  return (
    <LayoutStyled>
      <ContentStyled>
        <Container>
          <FlagContainer>
            <Flag source={data?.flag.svgFile ?? ''} />
          </FlagContainer>

          <Row>
            <Col>
              <EditInput placeholder="Nome" value={data?.nativeName ?? ''} />
            </Col>
            <Col>
              <EditInput placeholder="Capital" value={data?.capital ?? ''} />
            </Col>
          </Row>

          <Row>
            <Col>
              <EditInput placeholder="Área" value={data?.area ?? 0} />
            </Col>
            <Col>
              <EditInput
                placeholder="População"
                value={data?.population ?? 0}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <EditInput
                placeholder="Top-level domain"
                value={topLevelDomain}
              />
            </Col>
            <Col>
              <ResetButton>Redefinir informações</ResetButton>
            </Col>
          </Row>
        </Container>
      </ContentStyled>
    </LayoutStyled>
  );
};

export default DetailScreen;
