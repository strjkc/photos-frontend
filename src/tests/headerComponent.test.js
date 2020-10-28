import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import HeaderComponent from '../components/HeaderComponent'
import NavBar from '../components/NavBar'
import {
    BrowserRouter as Router,
    Switch, Route, Redirect
  } from "react-router-dom"

test('component is rendered', () => {
    const header = render(
        <HeaderComponent />
    )

    expect(header.container).toHaveTextContent('Strahinja\'s Gallery')
})

test('Nav bar is rendered', () => {
    const nav = render (
        <HeaderComponent>
            <Router>
                <NavBar />
            </Router>
        </HeaderComponent>
    )

    expect(nav.container).toHaveTextContent('Featured'
    )
})

test('nav bar renders all options', () => {
    const nav = render (
            <Router>
                <NavBar />
            </Router>
    )
    const navLinks = nav.getAllByRole('nav-link')
    expect(navLinks.length).toBe(6)
})

test('Login is displayed by default', () => {
    const nav = render (
        <Router>
            <NavBar />
        </Router>
    )
    expect(nav.container).toHaveTextContent('Log in')
})

test ('Upload is displayed', () => {
    const nav = render (
        <Router>
            <NavBar user={{some:'some'}} />
        </Router>
    )
    expect(nav.container).toHaveTextContent('Upload')
})

test('Underline is displayed', () => {
    const nav = render (
        <Router>
            <NavBar/>
        </Router>
    )
    const navLink = nav.container.querySelector('#overview')
    fireEvent.mouseOver(navLink)
    const underline = nav.container.querySelector('#overviewUnderbar')
    expect(underline.className.includes('underbarOv')).toBe(true)
})