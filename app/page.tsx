'use client';
import { useState, useEffect } from 'react';

import Dropdown from '@/components/Dropdown';
import { DROPDOWN_OPTIONS } from '@/constants';
import { IFilePayload, IResponse, SortByType } from '@/interfaces';
import { fetchSortedData } from '@/services/api';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import Table from '@/components/Table';

export default function Container() {
  const [response, setResponse] = useState<{
    error: null;
    loading: boolean;
    data: IFilePayload[];
  }>({
    error: null,
    loading: false,
    data: [],
  });
  const [selectedSortOption, setSelectedSortOption] = useState<SortByType | ''>(
    ''
  );

  useEffect(() => {
    const fetchData = async () => {
      setResponse({ error: null, loading: true, data: [] });
      try {
        const { data } = (await fetchSortedData()) as IResponse<IFilePayload[]>;
        setResponse({ error: null, loading: false, data });
      } catch (error: any) {
        setResponse({ error: error.message, loading: false, data: [] });
      }
    };

    fetchData();
  }, [selectedSortOption]);

  const onClick = async (term: SortByType) => {
    if (term === selectedSortOption) {
      return;
    }
    setSelectedSortOption(term);
    setResponse((prev) => ({ ...prev, loading: true }));

    try {
      const { data } = (await fetchSortedData(term)) as IResponse<
        IFilePayload[]
      >;
      setResponse((prev) => ({ ...prev, data }));
    } catch (error: any) {
      console.log(error);
      setResponse((prev) => ({ ...prev, error: error.message }));
    } finally {
      setResponse((prev) => ({ ...prev, loading: false }));
    }
  };

  if (response.loading) {
    return <Loading />;
  }

  if (response.error) {
    return <Error error={response.error} />;
  }

  return (
    <section className='container mx-auto p-6 font-mono'>
      <div className='flex justify-end mb-5'>
        <Dropdown
          buttonLabel='Sort By'
          items={DROPDOWN_OPTIONS}
          selectedValue={selectedSortOption}
          onClick={onClick}
        />
      </div>
      <Table data={response.data} />
    </section>
  );
}
