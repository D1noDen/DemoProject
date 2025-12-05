import {create} from 'zustand';
export const useStore = create((set) => ({
    startDate: null,
    setStartDate: (value) => set({ startDate: value }),
    endDate: null,
    setEndDate: (value) => set({ endDate: value }),
}));