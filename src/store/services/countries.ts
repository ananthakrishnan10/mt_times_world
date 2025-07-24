import { api } from '../api';

const countriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCountries: builder.query<
      { name: string; region: string; flag: string }[],
      string | void
    >({
      query: (region) => {
        if (!region || region === 'All') {
          return 'all?fields=name,region,flag';
        }
        return `region/${region.toLowerCase()}?fields=name,region,flag`;
      },
      providesTags: ['Countries'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCountriesQuery } = countriesApi;
