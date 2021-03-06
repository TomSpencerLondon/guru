import FIXTURE from './fixture';
import {defaultSort} from './sorting';

const fixtureData = Array.from(FIXTURE);

describe('when given an array of objects', () =>  {
    describe('only with craftpeople with mentees', () => {
        it('should sort by number of mentees', () => {
            expect(defaultSort(fixtureData.slice(1, 4))).toEqual(
                Array.from([
                    {
                        'firstName': 'Riccardo',
                        'lastName': 'Toni',
                        'mentees': ['ed rixon', 'jose pablo', 'giulio perrone']
                    },
                    {
                        'firstName': 'Ed',
                        'lastName': 'Rixon',
                        'mentees': ['arnaud claudel', 'giulia mantuano']
                    },
                    {
                        'firstName': 'Etienne',
                        'lastName': 'Mustow',
                        'mentees': ['riccardo toni']
                    }
                ])
            )
        });
    });

    describe('with craftspeople only without mentees', () => {
        it('should sort alphabetically', () => {
            expect(defaultSort(fixtureData.slice(fixtureData.length - 3, fixtureData.length))).toEqual(
                Array.from([
                    {
                        'firstName': 'Giulio',
                        'lastName': 'Perrone',
                        'mentees': []
                    },
                    {
                        'firstName': 'Jose',
                        'lastName': 'Ernesto',
                        'mentees': []
                    },
                    {
                        'firstName': 'Jose',
                        'lastName': 'Pablo',
                        'mentees': []
                    }
                ])
            );
        });
    });
    
    describe('with craftspeople with mentees and without', () => {
        it('should sort by number of mentees and then alphabetically', function () {
            expect(defaultSort(fixtureData)).toEqual(
                Array.from(
                    [
                        {
                            'firstName': 'Riccardo',
                            'lastName': 'Toni',
                            'mentees': ['ed rixon', 'jose pablo', 'giulio perrone']
                        },
                        {
                            'firstName': 'Ed',
                            'lastName': 'Rixon',
                            'mentees': ['arnaud claudel', 'giulia mantuano']
                        },
                        {
                            'firstName': 'Arnaud',
                            'lastName': 'Claudel',
                            'mentor': 'El hombre',
                            'mentees': ['etienne mustow']
                        },
                        {
                            'firstName': 'Etienne',
                            'lastName': 'Mustow',
                            'mentees': ['riccardo toni']
                        },
                        {
                            'firstName': 'Giulio',
                            'lastName': 'Perrone',
                            'mentees': []
                        },
                        {
                            'firstName': 'Jose',
                            'lastName': 'Ernesto',
                            'mentees': []
                        },
                        {
                            'firstName': 'Jose',
                            'lastName': 'Pablo',
                            'mentees': []
                        }
                    ]
                )
            );
        });
    });
});