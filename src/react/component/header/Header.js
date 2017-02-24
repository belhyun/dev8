import React from 'react';
import './Header.less';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

const Header = () => (
    <div id="header" role="banner">
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Dev8</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullRight>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>
                    {' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default Header;