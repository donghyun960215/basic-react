import './App.css';

function AppJSX() {
  const name = "dong";
  const list = ['aaa','bbb','ccc','ddd']
  return (
    <>
      <h1>{name}</h1>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h1>Hello!</h1>
      <ul>
        {
          list.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
      <img style={{ width: '200px', height: '200px' }}
        src="https://images.unsplash.com/photo-1719844841024-3c7166816fc7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
      />
    </>

  );
}

export default AppJSX;
