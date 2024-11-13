import React from "react";
import Edit from "../assets/img/edit.png";
import Delete from "../assets/img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        {/* content */}
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          ad voluptatibus sit placeat ipsum necessitatibus, sequi molestiae eius
          ab ipsam voluptates. Officia perferendis sint, possimus eaque odit
          aspernatur accusantium blanditiis. Lorem ipsum dolor sit amet.
          <br />
          <br />
          consectetur adipisicing elit. Minus sint modi, illum numquam repellat
          placeat voluptate quam ducimus, nisi distinctio, nemo eaque amet
          soluta deleniti? Corrupti consequuntur ab iste obcaecati! consectetur
          adipisicing elit. Minus sint modi, illum numquam repellat placeat
          voluptate quam ducimus, nisi distinctio, nemo eaque amet soluta
          deleniti? Corrupti consequuntur ab iste obcaecati! consectetur
          adipisicing elit. Minus sint modi, illum numquam repellat placeat
          voluptate quam ducimus, nisi distinctio, nemo eaque amet soluta
          deleniti? Corrupti consequuntur ab iste obcaecati! consectetur
          adipisicing elit. Minus sint modi, illum numquam repellat placeat
          voluptate quam ducimus, nisi distinctio, nemo eaque amet soluta
          deleniti? Corrupti consequuntur ab iste obcaecati!
          <br />
          <br />
          consectetur adipisicing elit. Minus sint modi, illum numquam repellat
          placeat voluptate quam ducimus, nisi distinctio, nemo eaque amet
          soluta deleniti? Corrupti consequuntur ab iste obcaecati! consectetur
          adipisicing elit. Minus sint modi, illum numquam repellat placeat
          voluptate quam ducimus, nisi distinctio, nemo eaque amet soluta
          deleniti? Corrupti consequuntur ab iste obcaecati! consectetur
          adipisicing elit. Minus sint modi, illum numquam repellat placeat
          voluptate quam ducimus, nisi distinctio, nemo eaque amet soluta
          deleniti? Corrupti consequuntur ab iste obcaecati! consectetur
          adipisicing elit. Minus sint modi, illum numquam repellat placeat
          voluptate quam ducimus, nisi distinctio, nemo eaque amet soluta
          deleniti? Corrupti consequuntur ab iste obcaecati!
          <br />
          <br />
          consectetur adipisicing elit. Minus sint modi, illum numquam repellat
          placeat voluptate quam ducimus, nisi distinctio, nemo eaque amet
          soluta deleniti? Corrupti consequuntur ab iste obcaecati! consectetur
          adipisicing elit. Minus sint modi, illum numquam repellat placeat
          voluptate quam ducimus, nisi distinctio, nemo eaque amet soluta
          deleniti? Corrupti consequuntur ab iste obcaecati!
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
