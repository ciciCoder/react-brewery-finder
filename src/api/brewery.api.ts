import axios from 'axios'

export interface Brewery {
  id: string
  name: string
  brewery_type: string
  address_1: string
  city: string
  state_province: string
  country: string
  website_url: string
}

interface FetchBreweryProps {
  page?: string
  query?: string
}

export const fetchBrewery = async ({ query, page }: FetchBreweryProps) => {
  const params = {
    page,
    query,
    per_page: 8,
  }
  const url = query
    ? 'https://api.openbrewerydb.org/v1/breweries/search'
    : 'https://api.openbrewerydb.org/v1/breweries'
  const { data } = await axios.get<Brewery[]>(url, { params })
  return data
}
// search function
