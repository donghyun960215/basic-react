import './App.css';
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼 클릭됨")
  }
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        image="https://images.unsplash.com/photo-1719754327382-d86926dc62cc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1719754327382-d86926dc62cc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="DongHyun Lee"
        title="프론트엔드 개발자"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1638554244985-4d83598668b7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Mark Lee"
        title="백엔드 개발자"
      />
      <Profile
        image="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Jamas Kim"
        title="디자이너"
      />
    </>
  );
}

export default AppProfile;
