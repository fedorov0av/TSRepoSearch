import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Rep {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  html_url: string;
}

interface RepState {
  repos: Rep[];
  loading: boolean;
  error: string | null;
}

const initialState: RepState = {
  repos: [],
  loading: false,
  error: null,
};

export const fetchRepos = createAsyncThunk(
  "repos/fetchRepos",
  async (query: string) => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }
    const data = await response.json();
    return data.items;
  }
);

const repSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.repos = action.payload;
        state.loading = false;
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch repos";
      });
  },
});

export default repSlice.reducer;
