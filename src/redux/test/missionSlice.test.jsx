import rocketsReducer, {
  reserveRocket,
  cancelReservationRocket,
  selectRocket,
} from '../rockets/rocketsSlice';

describe('rocketsSlice reducers', () => {
  test('reserveRocket reducer updates reserved status of the rocket', () => {
    const initialState = {
      rockets: [
        { id: 1, name: 'Rocket 1', reserved: false },
        { id: 2, name: 'Rocket 2', reserved: false },
      ],
    };
    const action = reserveRocket(2);
    const state = rocketsReducer(initialState, action);

    expect(state.rockets[1].reserved).toBe(true);
  });

  test('cancelReservationRocket reducer updates reserved status of the rocket', () => {
    const initialState = {
      rockets: [
        { id: 1, name: 'Rocket 1', reserved: true },
        { id: 2, name: 'Rocket 2', reserved: true },
      ],
    };
    const action = cancelReservationRocket(1);
    const state = rocketsReducer(initialState, action);

    expect(state.rockets[0].reserved).toBe(false);
  });

  test('selectRocket reducer updates the selectedRocket state', () => {
    const initialState = {
      selectedRocket: null,
    };
    const action = selectRocket(1);
    const state = rocketsReducer(initialState, action);

    expect(state.selectedRocket).toBe(1);
  });
});
