import avatar from '../../img/main-profile-icon.png';

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const SIDEBARPOSITION = 'SIDEBAR_POSITION';


// Barebones data to prototype the profile information
export const identity = {
    firstname: 'Bailey',
    lastname: 'George',
    dob: '1 Nov 1930',
    age: 87,
    gender: 'Male',
    urNo: 4801415,
    avatar,
    address: '2 Punt Road, Gladesville, NSW, Australia'
}

// Barebones data to prototype the timeline information
export const medications = [
    {
        date: '19 Dec 2018',
        intake: [
            {
                time: '06:00',
                name: 'Ziagen 20mg/mL oral liquid solution',
                dose: 1,
                unit: 'Applicatorfuls',
                type: 'Scheduled',
                severity: '',
                incident: ''
            },
            {
                time: '06:01',
                name: 'Balco 10mg tablet',
                dose: 2,
                unit: 'Bags',
                type: 'Scheduled',
                severity: '',
                incident: ''
            },
            {
                time: '10:00',
                name: 'Aspirin 100mg tablet',
                dose: 1,
                unit: 'Tablet',
                type: 'PRN',
                severity: '',
                incident: ''
            },
            {
                time: '12:00',
                name: 'Aspirin 100mg tablet',
                dose: 1,
                unit: 'Tablet',
                type: 'PRN',
                severity: 'H',
                incident: 'Overdose risk - single dose'
            },
            {
                time: '19:40',
                name: 'Ziagen 20mg/mL oral liquid solution',
                dose: 1,
                unit: 'Applicatorfuls',
                type: 'Scheduled',
                severity: '',
                incident: ''
            }
        ]
    },
    {
        date: '18 Dec 2018',
        intake: [
            {
                time: '06:00',
                name: 'Ziagen 20mg/mL oral liquid solution',
                dose: 1,
                unit: 'Applicatorfuls',
                type: 'Scheduled',
                severity: '',
                incident: ''
            },
            {
                time: '06:01',
                name: 'Balco 10mg tablet',
                dose: 2,
                unit: 'Bags',
                type: 'Scheduled',
                severity: 'M',
                incident: ''
            },
            {
                time: '10:00',
                name: 'Aspirin 100mg tablet',
                dose: 1,
                unit: 'Tablet',
                type: 'PRN',
                severity: '',
                incident: ''
            },
            {
                time: '12:00',
                name: 'Aspirin 100mg tablet',
                dose: 1,
                unit: 'Tablet',
                type: 'PRN',
                severity: 'H',
                incident: 'Overdose risk - single dose'
            },
            {
                time: '19:40',
                name: 'Ziagen 20mg/mL oral liquid solution',
                dose: 1,
                unit: 'Applicatorfuls',
                type: 'Scheduled',
                severity: '',
                incident: ''
            }
        ]
    }
]
