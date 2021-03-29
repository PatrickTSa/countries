import React, { useCallback, useEffect, useState } from 'react';
import { List, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutStyled, ContentStyled, Header, HeaderContent } from './styles';
import Card from '~/components/Card';
import SearchInput from '~/components/SearchInput';
import { getCountryList } from '~/redux/country/actions';
import { ApplicationState } from '~/redux/store';
import { Country } from '~/domain/country';

const CountryScreen: React.FC = () => {
  const [filtered, setFiltered] = useState<any[]>([]);

  const dispatch = useDispatch();

  const list = useSelector(({ country }: ApplicationState) => country.list);
  const loading = useSelector(
    ({ country }: ApplicationState) => country.loading
  );
  const error = useSelector(({ country }: ApplicationState) => country.error);

  useEffect(() => {
    dispatch(getCountryList());
  }, []);

  useEffect(() => {
    setFiltered(list);
  }, [list]);

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  const handleFilter = useCallback(
    (filter: string) => {
      setFiltered(
        list.filter((item) =>
          item.nativeName.toUpperCase().includes(filter.toUpperCase())
        )
      );
    },
    [list]
  );

  return (
    <LayoutStyled>
      <Header>
        <HeaderContent>
          <SearchInput onSearch={handleFilter} />
        </HeaderContent>
      </Header>
      <ContentStyled>
        <List
          grid={{ column: 4, xs: 1, sm: 1, md: 2, lg: 3 }}
          dataSource={filtered}
          renderItem={(item: Country) => <Card data={item} />}
          locale={{ emptyText: 'Nenhum resultado encontrado' }}
          pagination={{
            defaultPageSize: 12,
            showSizeChanger: false,
          }}
          loading={loading}
        />
      </ContentStyled>
    </LayoutStyled>
  );
};

export default CountryScreen;
