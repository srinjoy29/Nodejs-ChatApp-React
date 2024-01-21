import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='860f99e4-0acf-4308-8605-ace80718d7b3'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
      />
    </div>
  );
};

export default ChatsPage;