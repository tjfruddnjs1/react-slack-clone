import useInput from '@hooks/useInput';
import {
  AddButton,
  Channels,
  Chats,
  Header,
  LogOutButton,
  MenuScroll,
  ProfileImg,
  ProfileModal,
  RightMenu,
  WorkspaceButton,
  WorkspaceModal,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from '@layouts/Workspace/styles';
import loadable from '@loadable/component';
import { Button, Input, Label } from '@pages/SignUp/styles';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback, useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import useSWR from 'swr';

const Workspace: FC = ({ children }) => {
  const {
    data: userData,
    error,
    mutate,
  } = useSWR('http://localhost:3095/api/users', fetcher, { dedupingInterval: 2000 });

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate();
      });
  }, []);

  console.log(userData);

  if (!userData) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  );
};

export default Workspace;
