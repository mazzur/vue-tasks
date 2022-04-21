import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('/interviews').reply(200, [
  {
    id: 100,
    interviewer: 'Vitalii Mazur',
    candidate: 'Tim Wright',
    type: 'General',
    feedback: 'Good candidate',
  },
  {
    id: 101,
    interviewer: 'Vitalii Mazur',
    candidate: 'Tom Wrong',
    type: 'Tech Check',
  },
]);
