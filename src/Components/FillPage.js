import {Collapse} from 'antd';
import Tinting from './Forms/TintingBanco';
import ColourantBanco from './Forms/ColourantBanco';
import Asset from './Asset';
import { useEffect,useState } from 'react';
import './FillPage.css';

const FillPage = ({userId,setRequestId,requestId,depot}) =>{
    const [isDummyButtonPressed, setIsDummyButtonPressed] = useState(false);
    const [isColourantPressed, setIsColourantPressed] = useState(false);
    // const [isdefaultkeys, setIsdefaultkeys] = useState(["1"]);
    const items = [
        {
          key: '1',
          label: <h2 style={{margin:"0"}}>TINTING</h2>,
          children: <Tinting setIsDummyButtonPressed={setIsDummyButtonPressed}  userId={userId}   setRequestId={setRequestId}  requestId={requestId} depot={depot}/>,
          expandIconPosition: "end",
        },
        
        // {
        //   key: '3',
        //   label: 'Asset',
        //   children: <p>{text}</p>,
        // },
      ];

    useEffect(()=>{

       if(isDummyButtonPressed===true){
        // setIsdefaultkeys(["2"])
        items.push({
            key: '2',
            label: <h2 style={{margin:"0"}}>COLOURANT</h2>,
            children:  <ColourantBanco userId={userId} requestId={requestId} depot={depot} setIsColourantPressed={setIsColourantPressed}/>,

        })
    }

        if(isColourantPressed===true){

            // setIsdefaultkeys(["3"])
            items.push({
                key: '3',
                label: <h2 style={{margin:"0"}}>ASSET</h2>,
                children:  <Asset/>,

            })
        }

        console.log(items.key);

    },[isDummyButtonPressed,isColourantPressed])

    return (
        <>
            <Collapse className="custom-collapse" defaultActiveKey={["1","2"]} items={items} expandIconPosition="right" />
        
        </>
    )


} 

export default FillPage;