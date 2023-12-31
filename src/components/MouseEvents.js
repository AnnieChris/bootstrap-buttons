import React from 'react'
import { Button } from 'react-bootstrap'

const MouseEvents = () => {
    return (
        <div>
            MouseEvents
            <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
            <Button as="input" type="button" value="Input" />{' '}
            <Button as="input" type="submit" value="Submit" />{' '}
            <Button as="input" type="reset" value="Reset" />
        </div>
    )
}
export default MouseEvents