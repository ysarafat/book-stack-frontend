"use client";
import { Button, Navbar } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";

export const Nav = () => {
  return (
    <Navbar fluid={true} className="bg-stone-50 shadow max-w-full">
      <Navbar.Container className="flex items-center justify-between max-w-7xl mx-auto ">
        <Navbar.Container className="flex items-center ">
          <h1 className="text-lg flex items-center gap-2 uppercase font-bold">
            Book <span className="text-blue-500">Stack.</span>
          </h1>

          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="About Us" />
            <Navbar.Link linkName="Contact Us" />
            <Navbar.Link linkName="Login" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="About Us" />
              <Navbar.Link linkName="Contact Us" />
              <Navbar.Link linkName="Login" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Button size="sm" type="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-slate-600">Search</span>
          </Button>
          <Button size="sm" type="primary">
            Contact
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
