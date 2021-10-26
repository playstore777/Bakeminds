import React from 'react'
import './Header.css'
import { User } from './User/User';

interface AppProps  {
    title: string;
  };

export const Header: React.FC<AppProps> = ({ title }: AppProps) => {
    return <div className="header">
        <div className="title">
        {title}
        </div>
        <div className="">
        <i id="search" className="fas fa-search"></i>
        <i id="bell" className="far fa-bell"></i>
        </div>
        <div className="user">
          <User name="Shawn Brooks"/>
        </div>
        </div>;

}
