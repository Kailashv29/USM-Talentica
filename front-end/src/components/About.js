import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>
            <p className="text-info">Coming soon</p>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  }
}
export default Header;
