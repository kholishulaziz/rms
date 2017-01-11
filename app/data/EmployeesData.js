const EmployeesData = [
    {
        id: 'kholishul_a',
        firstName: 'Kholishul',
        lastName: 'Aziz',
        gender: 'M',
        dob: new Date(1991,3,1),
        nationality: 'Indonesia',
        maritalStatus: 'M',
        phone: '+62857 3032 3302',
        subDivision: 'Java Bootcamp',
        status: 'P',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SE2',
        division: 'CDC',
        email: 'kholishul.aziz@mitrais.com',
        office: 'JOG',
        active: true,
        dependents: [
            {name: "Aziz's Wife", dob: new Date(1991,3,1), gender: 'F', type: 'W', active: true},
            {name: "Aziz's Jr", dob: new Date(2017,3,1), gender: 'M', type: 'C', active: true},
        ],
        gradeHistory:[
            {startDate: new Date(1991,3,1), endDate: new Date(1991,3,3), grade: 'SE1', devStage: 1},
            {startDate: new Date(1991,3,2), endDate: new Date(1991,4,3), grade: 'SE2', devStage: 4},
        ]
    },
    {
        id: 'aldebaran_a',
        firstName: 'Aldebaran Athaillah',
        lastName: 'Aziz',
        gender: 'M',
        dob: new Date(2017,0,21),
        nationality: 'Indonesia',
        maritalStatus: 'S',
        phone: '+62857 1234 5678',
        subDivision: 'PHP Bootcamp',
        status: 'C',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SE1',
        division: 'SWDBl',
        email: 'aldebaran.aziz@mitrais.com',
        office: 'SBY',
        active: true,
        dependents: [
            {name: "Aldebaran's Wife", dob: new Date(1991,3,1), gender: 'F', type: 'W', active: false}
        ],
        gradeHistory:[
            {startDate: new Date(1991,3,1), endDate: new Object, grade: 'SE1', devStage: 2},
        ]
    },
    {
        id: 'ricard_g',
        firstName: 'Ricard',
        lastName: 'Gideon',
        gender: 'M',
        dob: new Date(2017,0,21),
        nationality: 'Australia',
        maritalStatus: 'M',
        phone: '+62857 1234 5678',
        subDivision: 'Android Bootcamp',
        status: 'P',
        suspendDate: new Date(2017,0,21),
        hireDate: new Date(2013,10,18),
        grade: 'SE4',
        division: 'SWDR',
        email: 'ricard.gideon@mitrais.com',
        office: 'JKT',
        active: false,
        dependents: [],
        gradeHistory:[
            {startDate: new Date(1991,3,1), endDate: new Object, grade: 'SE4', devStage: 20},
        ]
    },
    {
        id: 'mary_w',
        firstName: 'Mary Jane',
        lastName: 'Watson',
        gender: 'F',
        dob: new Date(2017,0,21),
        nationality: 'Australia',
        maritalStatus: 'M',
        phone: '+62857 1234 5678',
        subDivision: 'IOS Bootcamp',
        status: 'P',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SE4',
        division: 'SWDG',
        email: 'mary.watson@mitrais.com',
        office: 'JKT',
        active: true,
        dependents: [],
        gradeHistory:[
            {startDate: new Date(1991,3,1), endDate: new Object, grade: 'SE4', devStage: 16},
        ]
    },
    {
        id: 'emma_w',
        firstName: 'Emma',
        lastName: 'Watson',
        gender: 'F',
        dob: new Date(2017,0,21),
        nationality: 'Australia',
        maritalStatus: 'M',
        phone: '+62857 1234 5678',
        subDivision: 'Java Bootcamp',
        status: 'P',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SE1',
        division: 'SWDB',
        email: 'emma.watson@mitrais.com',
        office: 'DPS',
        active: true,
        dependents: [],
        gradeHistory:[
            {startDate: new Date(1991,3,1), endDate: new Object, grade: 'SE1', devStage: 2},
        ]
    },
    {
        id: 'paul_w',
        firstName: 'Paul',
        lastName: 'Watson',
        gender: 'M',
        dob: new Date(2017,0,21),
        nationality: 'Australia',
        maritalStatus: 'M',
        phone: '+62857 1234 5678',
        subDivision: 'Net Bootcamp',
        status: 'P',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SE3',
        division: 'SWDR',
        email: 'dr.watson@mitrais.com',
        office: 'JOG',
        active: true,
        dependents: [],
        gradeHistory:[
            {startDate: new Date(1991,3,1), endDate: new Object, grade: 'SE3', devStage: 9},
        ]
    },
    {
        id: 'dr_w',
        firstName: 'Dr',
        lastName: 'Watson',
        gender: 'M',
        dob: new Date(2017,0,21),
        nationality: 'Australia',
        maritalStatus: 'M',
        phone: '+62857 1234 5678',
        subDivision: 'Net Bootcamp',
        status: 'P',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SE3',
        division: 'SWDR',
        email: 'dr.watson@mitrais.com',
        office: 'JOG',
        active: true,
        dependents: [],
        gradeHistory:[
            {startDate: new Date(1991,3,1), endDate: new Object, grade: 'SE3', devStage: 5},
        ]
    },

    {
        id: 'johnny_w',
        firstName: 'Johnny',
        lastName: 'Watson',
        gender: 'M',
        dob: new Date(2017,0,21),
        nationality: 'Australia',
        maritalStatus: 'M',
        phone: '+62857 1234 5678',
        subDivision: 'Net Bootcamp',
        status: 'P',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SE2',
        division: 'SWDR',
        email: 'dr.watson@mitrais.com',
        office: 'DPS',
        active: true,
        dependents: [],
        gradeHistory:[
            {startDate: new Date(1991,3,1), endDate: new Object, grade: 'SE2', devStage: 4},
        ]
    },
    {
        id: 'sherry_w',
        firstName: 'Sherry',
        lastName: 'Watson',
        gender: 'F',
        dob: new Date(2017,0,21),
        nationality: 'Australia',
        maritalStatus: 'M',
        phone: '+62857 1234 5678',
        subDivision: 'Net Bootcamp',
        status: 'P',
        suspendDate: new Date(2017,0,21),
        hireDate: new Date(2013,10,18),
        grade: 'SE1',
        division: 'SWDR',
        email: 'dr.watson@mitrais.com',
        office: 'BDG',
        active: false,
        dependents: [],
        gradeHistory:[
            {startDate: new Date(1991,3,1), endDate: new Object, grade: 'SE1', devStage: 1},
        ]
    },
    {
        id: 'aziz_m',
        firstName: 'Aziz',
        lastName: 'Muhammad',
        gender: 'M',
        dob: new Date(1991,3,1),
        nationality: 'Indonesia',
        maritalStatus: 'M',
        phone: '+62857 1234 5678',
        subDivision: 'Mobile Bootcamp',
        status: 'P',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SE3',
        division: 'CDC',
        email: 'muhammad.aziz@mitrais.com',
        office: 'JOG',
        active: true,
        dependents: [],
        gradeHistory:[
            {startDate: new Date(1991,3,1), endDate: new Object, grade: 'SE3', devStage: 8},
        ]
    },
];

export default EmployeesData;