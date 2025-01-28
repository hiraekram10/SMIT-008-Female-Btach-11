import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
const PageNot = () => {
    const navigate  = useNavigate()
    
    
    return(
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={()=>navigate('/')}>Back Home</Button>}
  />
)
};
export default PageNot;