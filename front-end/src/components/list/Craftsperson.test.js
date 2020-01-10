import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Craftsperson from './Craftsperson'

describe ('when rendering a craftsperson', () => {
    it('should show last meeting', () => {
            const {getByTestId} = render(<Craftsperson craftsperson={{lastMeeting: 1500000000}} />)
            expect(getByTestId('lastMeetingValue')).toHaveTextContent(1500000000)
    })
    it('should show a dash when no last meeting', () => {
        const {getByTestId} = render(<Craftsperson craftsperson={{}} />)
        expect(getByTestId('lastMeetingValue')).toHaveTextContent("-")
})
})