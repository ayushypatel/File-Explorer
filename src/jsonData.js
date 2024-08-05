 const parentData = [
    {
        'id': 1,
        'name': 'Folder 1',
        'children':[
        {
            'id': 10,
            'name': 'folder1 children1',
            'type':'file',
            'content': 'Content of File 1-1',
        },
        {
            'id': 11,
            'name': 'folder1 children2',
            'type':'folder',
            'children':[
                {
                    'id': 12,
                    'name': 'folder1 children2 children1',
                    'type':'file',
                    'content': 'Content of File 1-2',
                }
            ]
        },
    ],
    },
    {
        'id': 2,
        'name': 'Folder 2',
        'children':[
            {
                'id': 13,
                'name': 'folder2 children1',
                'type':'file',
                'content': 'Content of File 2-1',
            },
        ]
    },
    {
        'id': 3,
        'name': 'Folder 3',
        'children':[
            {
                'id': 14,
                'name': '3 children1',
                'type':'file',
                'content': 'Content of File 3-1',
            },
        ]
    },
    {
        'id': 4,
        'name': 'Folder 4',
        'children':[
            {
                'id': 15,
                'name': 'folder4 children1',
                'type':'file',
                'content': 'Content of File 4-1',
            },
            {
                'id': 16,
                'name': 'folder5 children1',
                'type':'file',
                'content': 'Content of File 4-2',
            },
        ]
    },
    {
        'id': 5,
        'name': 'Folder 5',
        'children':[
            {
                'id': 17,
                'name': 'folder5 children1',
                'type':'file',
                'content': 'Content of File 5-1',
            },
            {
                'id': 18,
                'name': 'folder5 children1',
                'type':'file',
                'content': 'Content of File 5-2',
            },
        ]
    }
]
export default parentData;