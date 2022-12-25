const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      title: 'Take out the garbage',
      tag: 'Important',
      description: 'Take out the garbage',
      start: '22/12/2022',
      end: '23/12/2022',
      status: 'false',
    },
    'task-2': {
      id: 'task-2',
      title: 'Watch my favorite',
      tag: 'Important',
      description: 'Watch my favorite show',
      start: '22/12/2022',
      end: '23/12/2022',
      status: 'false',
    },
    'task-3': {
      id: 'task-3',
      title: 'Charge my phone',
      tag: 'Important',
      description: 'Charge my phone',
      start: '22/12/2022',
      end: '23/12/2022',
      status: 'false',
    },
    'task-4': {
      id: 'task-4',
      title: 'Cook dinner',
      tag: 'Work',
      description: 'Cook dinner',
      start: '22/12/2022',
      end: '23/12/2022',
      status: 'false',

    },
    'task-5': {
      id: 'task-5',
      title: 'Cook dinner',
      tag: 'Work',
      description: 'Cook dinner',
      start: '22/12/2022',
      end: '23/12/2022',
      status: 'false',

    },
    'task-6': {
      id: 'task-6',
      title: 'Cook dinner',
      tag: 'Work',
      description: 'Cook dinner',
      start: '22/12/2022',
      end: '23/12/2022',
      status: 'false',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;
