import React from 'react'

interface AppProps  {
    name: string;
  };

export const User: React.FC<AppProps> = ({ name }: AppProps) => {
    return <div className="user" style={{fontWeight: 600, fontSize: "0.8rem"}}>
        <p>{name}</p>
        </div>;

}
