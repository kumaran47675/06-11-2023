import { useState, useEffect } from "react";
import './User.css';
import { Table, Input, Button } from 'antd';
import axios from "axios";
const User = () =>{
    useEffect(() => {
        axios
          .get(`https://localhost:7206/api/master/get/`)
          .then((response) => {
            setData(response.data.map((item)=>({
                key:item.requestId,
                status:item.status,
                nameOfTheProject:item.nameOfTheProject,
                nameOfSalesPerson:item.nameOfSalesPerson,
                fandeck:item.fandeck,
                shadeCode:item.shadeCode,
                colourShade:item.colourShade,
                shadeName:item.shadeName,
                product:item.product,
                base:item.base,
                baseBatchNo:item.baseBatchNo,
                formulationFor1LitrePackSize:item.formulationFor1LitrePackSize,
                quantityTintedInLitres:item.quantityTintedInLitres,
                reference:item.reference,
                forProjectOrRetail:item.forProjectOrRetail,
                forSMProjectOrRetailOrBuka:item.forSMProjectOrRetailOrBuka,
                shadeMatchConfirmation:item.shadeMatchConfirmation,
                shadePatch:item.shadePatch,
                otherObservations:item.otherObservations,
                dispensingMachine:item.dispensingMachine,
                tintingInvoice:item.tintingInvoice,
                originalInvoice:item.originalInvoice,
                date:item.date
            }))); 
           
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          })
          .finally(() => {
            console.log(data)// Use response.data directly
            
          });
      }, [data]);
    const columns = [

        {
            title: 'UserId',
            dataIndex: 'userId',
            
          },
          {
            title: 'UserName',
            dataIndex: 'userName',
            
          },
      
          {
            title: 'Depot',
            dataIndex: 'depot',
            
          },

          {
            title: 'Role',
            dataIndex: 'role',
            
          },
    ]
    
    const dataSource =[
        {
            key:'1',
            userId:"12345",
            userName:"Pavan",
            depot:"Bangalore",
            role:"Customer",
            
        },
    
    ]

    return (
        <>
            <h2>
                User Information
            </h2>
            <div className='tablecontainer'>
                <Table
                columns={columns}
                dataSource={dataSource}
                pagination= {false}
                />
            </div>
                
        </>

    )
}

export default User;