import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Success(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("use");
    alert('Successfully Logged Out');
    navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
}

export default Success;
