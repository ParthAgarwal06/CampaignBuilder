import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { CampaignState, CreateCampaignInput, Campaign } from "./campaignTypes";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    title: "Summer Sale",
    message: "Get 30% off this weekend.",
    channel: "Email",
    status: "Draft",
  },
  {
    id: "2",
    title: "Flash SMS Offer",
    message: "Limited time offer. Shop now.",
    channel: "SMS",
    status: "Sent",
  },
  {
    id: "3",
    title: "Social Launch",
    message: "We are launching something new today.",
    channel: "Social",
    status: "Sent",
  },
];


export const fetchCampaigns = createAsyncThunk(
    'campaigns/fetchCampaigns', 
    async () => {
        await delay(1000);
        return mockCampaigns;
    }
)

export const createCampaign = createAsyncThunk(
    'campaigns/createCampaign',
    async (input : CreateCampaignInput) => {
        await delay(1000);
        const newCampaign : Campaign = {
            id : Date.now().toString(),
            title: input.title,
            message: input.message,
            channel: input.channel,
            status: 'Draft'
        }
        return newCampaign;
    }
)

export const updateCampaignStatus = createAsyncThunk(
    'campaigns/updateCampaignStatus',
    async(input : string, {rejectWithValue}) => {
        await delay(1000);
        if(!input) {
            rejectWithValue('id is required');
        }
        return input;
    }
)

export const deleteCampaign = createAsyncThunk(
    'campaigns/deleteCampaign',
    async(input : string, {rejectWithValue}) => {
        await delay(1000);
        if(!input) {
            rejectWithValue('id is required');
        }
        return input;
    }
)

const initialState : CampaignState = {
    items: [],
    loading: false,
    error: null,
}

export const campaignSlice = createSlice({
    name: 'campaigns',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampaigns.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCampaigns.rejected, (state)=> {
                state.loading = false;
                state.error = "Failed to fetch";
            })
            .addCase(fetchCampaigns.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(createCampaign.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(createCampaign.rejected, (state)=> {
                state.loading = false;
                state.error = "Failed to create";
            })
            .addCase(createCampaign.fulfilled, (state, action) => {
                state.items.unshift(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(updateCampaignStatus.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateCampaignStatus.rejected, (state)=> {
                state.loading = false;
                state.error = "Failed to update";
            })
            .addCase(updateCampaignStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const id = action.payload;
                const campaign = state.items.find((element) => {
                    return element.id === id;
                })
                if(!campaign) return;
                campaign.status = 'Sent';                
            })
            .addCase(deleteCampaign.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteCampaign.rejected, (state)=> {
                state.loading = false;
                state.error = "Failed to delete";
            })
            .addCase(deleteCampaign.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = state.items.filter((item) => {
                    return item.id != action.payload;
                })
            })
    }
})

export default campaignSlice.reducer;