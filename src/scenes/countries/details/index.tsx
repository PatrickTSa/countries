import React, { useEffect, useMemo, useState } from 'react';
import { Row, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
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
  LeftArrow,
} from './styles';
import { change, resetInfo } from '~/redux/country/actions';

const DetailScreen: React.FC = () => {
  const [data, setData] = useState<Country>();

  const { countryId } = useParams<DetailScreenParams>();
  const history = useHistory();
  const dispatch = useDispatch();
  const list = useSelector((state: ApplicationState) => state.country.list);

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
          <LeftArrow onClick={() => history.goBack()} />
          <FlagContainer>
            <Flag source={data?.flag.svgFile ?? ''} />
          </FlagContainer>

          <Row>
            <Col>
              <EditInput
                placeholder="Nome"
                value={data?.nativeName ?? ''}
                onSave={(value) =>
                  dispatch(change(countryId, 'nativeName', value))
                }
              />
            </Col>
            <Col>
              <EditInput
                placeholder="Capital"
                value={data?.capital ?? ''}
                onSave={(value) =>
                  dispatch(change(countryId, 'capital', value))
                }
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <EditInput
                placeholder="Área"
                value={data?.area ?? 0}
                onSave={(value) => dispatch(change(countryId, 'area', value))}
              />
            </Col>
            <Col>
              <EditInput
                placeholder="População"
                value={data?.population ?? 0}
                onSave={(value) =>
                  dispatch(change(countryId, 'population', value))
                }
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <EditInput
                placeholder="Top-level domain"
                value={topLevelDomain}
                onSave={(value) =>
                  dispatch(change(countryId, 'topLevelDomains', value))
                }
              />
            </Col>
            <Col>
              <Popconfirm
                placement="top"
                title="Tem certeza que deseja redefinir os dados?"
                onConfirm={() => dispatch(resetInfo(countryId))}
                okText="Sim"
                cancelText="Não"
              >
                <ResetButton>Redefinir informações</ResetButton>
              </Popconfirm>
            </Col>
          </Row>
        </Container>
      </ContentStyled>
    </LayoutStyled>
  );
};

export default DetailScreen;
