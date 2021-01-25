export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Agents`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};

export const baseURL2 = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_2}/Initial`;
