import React from 'react';
import styles from './Table.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoReloadCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
// @fortawesome/fontawesome-free, @fortawesome/free-solid-svg-icons, and @fortawesome/free-regular-svg-icons
import { initializeIcons } from "@fluentui/react";
import {makeStyles} from "@fluentui/react-components";
import { Link } from 'react-router-dom';
import "./Table.css";

initializeIcons();
const useStyles = makeStyles({
    root: {
      margin: "10px",
      display: "inline-block", 
     "@media (max-width: 1000px)": {
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
    },
    },
    status: {
      display: "flex",
      marginTop: "-25px",
      alignItems: "center",
      justifyContent: "flex-end",
     "@media (max-width: 600px)": {
      display: "block",
      flexDirection: "column",
      marginTop: "25px",
    }
    },
    orderProcess: {
      fontSize: "70%",
    },
    statusText: {
      display: "inline-block",
      fontWeight: "500" ,
      paddingTop: "2px",
      "@media (max-width: 600px)": {
        marginRight: "5px"
      }
    }
  });

function Table() {
    const dec = useStyles();
    return (
        <>
       
          {/* table */}
          <table className={styles.table}>
            <><thead>
            <tr>
                <th scope="col">รายการบันทึก</th>
                <th scope="col">สร้างโดย</th>
                <th scope="col">สถานะ</th>
                <th scope="col">ช่วงเวลา</th>
            </tr>
        </thead><tbody>
                <tr className={styles.tr}>
                
                    <td><Link to = {"/MyMemosDetailApprove"} style={{textDecoration:"none",color: "inherit"}}>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            ทดสอบขออนุมัติการซื้อ 1
                        </div>
                        <div style={{ fontSize: "90%" }}>DEFAULT-PR-202404-0001</div>
                        </Link>
                    </td> 
                    <td>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            Lorem Ipsum
                        </div>
                        <div style={{ fontSize: "90%" }}>แผนก : ไอที</div>
                    </td>
                    <td>
                        <div className="statusPending approved">
                            <IoCheckmarkCircleOutline className="iconPending" />
                            <div className={dec.statusText}>อนุมัติสำเร็จ</div>
                            <div style={{ fontSize: "70%" }}>ลำดับอนุมัติ 2/2</div>
                        </div>
                    </td>
                    <td data-label="ช่วงเวลา" style={{ fontWeight: "bold" }}>
                        12/04/2024
                    </td>
                </tr>
                {/* 2 */}
                <tr>
                    <td><Link to = {"/MyMemosDetailReject"} style={{textDecoration:"none",color: "inherit"}}>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            ทดสอบขออนุมัติการซื้อ 2
                        </div>
                        <div style={{ fontSize: "90%" }}>DEFAULT-PR-202404-0002</div>
                        </Link>
                    </td>
                    <td>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            Lorem Ipsum
                        </div>
                        <div style={{ fontSize: "90%" }}>แผนก : ไอที</div>
                    </td>
                    <td>
                        <div className="statusPending not-approved">
                            <IoIosCloseCircleOutline className="iconPending" />
                            <div className={dec.statusText}>ไม่อนุมัติ</div>
                            <div style={{ fontSize: "70%" }}>ลำดับอนุมัติ 0/1</div>
                        </div>
                    </td>
                    <td data-label="ช่วงเวลา" style={{ fontWeight: "bold" }}>
                        12/04/2024
                    </td>
                </tr>
                {/* 3 */}
                <tr>
                    <td><Link to = {"/MyMemosDetailPending"} style={{textDecoration:"none",color: "inherit"}}>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            ทดสอบขออนุมัติการซื้อ 3
                        </div>
                        <div style={{ fontSize: "90%" }}>DEFAULT-PR-202404-0003</div>
                        </Link>
                    </td>
                    <td>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            Lorem Ipsum
                        </div>
                        <div style={{ fontSize: "90%" }}>แผนก : ไอที</div>
                    </td>
                    <td>
                        <div className="statusPending pending">
                            <IoReloadCircleOutline className="iconPending" />
                            <div className={dec.statusText}>รอการแก้ไข</div>
                            <div style={{ fontSize: "70%" }}>ลำดับอนุมัติ 0/1</div>
                        </div>
                    </td>
                    <td data-label="ช่วงเวลา" style={{ fontWeight: "bold" }}>
                        12/04/2024
                    </td>
                </tr>
            </tbody></>
          </table>
         
       </>
    );
  }
  
  export default Table;
  