const LookupData = {

    grade: [
        {
            code: 'SE1',
            type: 'SE',
            desc: 'SE - JP'
        },
        {
            code: 'SE2',
            type: 'SE',
            desc: 'SE - PG'
        },
        {
            code: 'SE3',
            type: 'SE',
            desc: 'SE - AP'
        },
        {
            code: 'SE4',
            type: 'SE',
            desc: 'SE - AN'
        },

        {
            code: 'SM',
            type: 'MJF',
            desc: 'MJF - SM'
        },
        {
            code: 'PM',
            type: 'MJF',
            desc: 'MJF - PM'
        },
    ],

    gradeConfig:{
        'SE1'   : true,
        'SE2'   : true,
        'SE3'   : true,
        'SE4'   : true,
        'SM'    : true,
        'PM'    : true,
    },

    office: [
        {
            code: 'DPS',
            type: 'OFFICE',
            desc: 'Bali'
        },
        {
            code: 'JOG',
            type: 'OFFICE',
            desc: 'Yogyakarta'
        },
        {
            code: 'JKT',
            type: 'OFFICE',
            desc: 'Jakarta'
        },
        {
            code: 'BDG',
            type: 'OFFICE',
            desc: 'Bandung'
        },
        {
            code: 'SBY',
            type: 'OFFICE',
            desc: 'Surabaya'
        },
    ],

    officeConfig:{
        'DPS'   : true,
        'JOG'   : true,
        'JKT'   : true,
        'BDG'   : true,
        'SBY'   : true,
    },

}

export default LookupData;