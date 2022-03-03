import Workspace from '@layouts/Workspace';
import React from 'react';

const Channel = () => {
  //   const { workspace, channel } = useParams<{ workspace: string; channel: string }>();

  return (
    <div id="container">
        <Workspace>
            <div>로그인 되었습니다.</div>
        </Workspace>
    </div>
  );
};

export default Channel;
