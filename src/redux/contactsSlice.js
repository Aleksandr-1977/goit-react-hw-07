import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      {
        createdAt: '2025-04-03T13:06:50.957Z',
        name: 'Luke Reinger',
        number: '621-69-22',
        id: '1',
      },
      {
        createdAt: '2025-04-03T10:30:57.652Z',
        name: 'Travis Schimmel',
        number: '462-02-78',
        id: '2',
      },
      {
        createdAt: '2025-04-03T06:26:11.803Z',
        name: 'Raul VonRueden',
        number: '462-30-84',
        id: '3',
      },
      {
        createdAt: '2025-04-03T06:52:30.526Z',
        name: 'Horace Schroeder',
        number: '421-94-01',
        id: '4',
      },
      {
        createdAt: '2025-04-03T10:35:57.780Z',
        name: 'Pablo Kerluke',
        number: '890-88-64',
        id: '5',
      },
      {
        createdAt: '2025-04-03T06:26:58.979Z',
        name: 'Jacquelyn Wuckert',
        number: '295-01-28',
        id: '6',
      },
      {
        createdAt: '2025-04-03T07:11:16.244Z',
        name: 'Della Gerhold',
        number: '382-56-94',
        id: '7',
      },
      {
        createdAt: '2025-04-03T14:56:40.899Z',
        name: 'Craig Wilderman',
        number: '849-54-11',
        id: '8',
      },
      {
        createdAt: '2025-04-02T23:24:27.849Z',
        name: 'Kelly Orn',
        number: '225-71-03',
        id: '9',
      },
      {
        createdAt: '2025-04-02T21:14:14.063Z',
        name: 'Joey Goodwin',
        number: '397-413-70',
        id: '10',
      },
      {
        createdAt: '2025-04-03T15:44:43.116Z',
        name: 'Cheryl Waelchi',
        number: '681-88-38',
        id: '11',
      },
      {
        createdAt: '2025-04-02T19:22:09.330Z',
        name: 'Ronald Dickens',
        number: '885-53-24',
        id: '12',
      },
      {
        createdAt: '2025-04-03T12:33:58.859Z',
        name: 'Curtis Langworth',
        number: '728-37-55',
        id: '13',
      },
      {
        createdAt: '2025-04-02T21:22:22.872Z',
        name: 'Sonja Willms',
        number: '389-80-65',
        id: '14',
      },
      {
        createdAt: '2025-04-02T23:35:32.897Z',
        name: 'Pauline Rowe',
        number: '229-316-88',
        id: '15',
      },
      {
        createdAt: '2025-04-03T06:40:31.888Z',
        name: "Daniel O'Reilly",
        number: '866-46-40',
        id: '16',
      },
      {
        createdAt: '2025-04-03T00:10:23.788Z',
        name: 'Mrs. Molly Grady',
        number: '957-45-91',
        id: '17',
      },
      {
        createdAt: '2025-04-03T05:08:50.757Z',
        name: 'Rogelio Harris',
        number: '704-93-88',
        id: '18',
      },
      {
        createdAt: '2025-04-03T17:51:01.192Z',
        name: 'Bonnie Doyle',
        number: '808-57-43',
        id: '19',
      },
      {
        createdAt: '2025-04-03T11:25:19.017Z',
        name: 'Johnnie Kuphal',
        number: '697-95-12',
        id: '20',
      },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
