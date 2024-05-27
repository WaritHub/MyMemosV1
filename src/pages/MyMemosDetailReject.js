import "./MyMemosDetail.css";
import React from "react";
import { Select } from "@fluentui/react-components";
import Sidebar from "../components/Sidebar";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Link } from "react-router-dom";
// Icon
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDownload } from "react-icons/go";

function MyMemosDetailApprove() {
  //
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="container">
        {/* back Page arrow left */}
        <Link Link to={"/"} style={{ color: "#242424" }}>
          <button className="backPage">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ verticalAlign: "-0.40rem" }}
            >
              <path
                d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12l7.852-8.313Z"
                fill="#212121"
              />
            </svg>
            กลับสู่หน้าหลัก
          </button>
        </Link>
        {/* back Page arrow left */}
        <div className="row">
          <div className="columnApprove">
            <div className="order ">
            <div className="statusOrder not-approved">
            <IoIosCloseCircleOutline className="icon-move"/>
            ไม่อนุมัติ
            </div>
              <div className="orderAprrove not-approved">ลำดับการอนุมัติ 0 / 1</div>
            </div>

            <div className="select-page">
              <button className="back-page-doc">
                <IoIosArrowBack style={{ marginRight: "10" }} />
              </button>
              <div className="move-text-back">หน้า</div>
              <Select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Select>
              <div className="move-text-forward">จาก 1</div>
              <button className="forward-page-doc">
                <IoIosArrowForward style={{ marginLeft: "10" }} />
              </button>
              <button className="download">
                <GoDownload style={{ marginRight: "10" }} />
                ดาวน์โหลด
              </button>
            </div>
            <div className="boxDoc">แสดงไฟล์เอกสาร</div>
          </div>
          <div className="columnDetail">
            <Sidebar />
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}

export default MyMemosDetailApprove;
