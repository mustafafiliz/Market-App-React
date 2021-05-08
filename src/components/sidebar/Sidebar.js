import React, { Component } from "react";
import SidebarBrands from "./SidebarBrands";
import SidebarSorting from "./SidebarSorting";
import SidebarTags from "./SidebarTags";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarSorting />
        <SidebarBrands />
        <SidebarTags />
      </div>
    );
  }
}

export default Sidebar;
