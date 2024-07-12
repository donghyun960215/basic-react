import React,{useState} from 'react';

function AppForm(props) {
  const [form, setForm] = useState({
    name : '',
    email: '',
    phone: '',
  });


  const handleSubmit = (e) => {
    //e.preventDefault();을 하지 않으면 페이지가 새로고침이 된다 그걸 막기 위해 작성해준다.
    e.preventDefault();
    console.log(form)
  };

  const handleChang = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name] : value})
    //기존에 form에 있는 데이터는 그대로 유지하고 현재 input이 변경되고 있는 이름의 키의 전달받은 데이터를 덮는다.
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>이름 : </label>
        <input type="text" id='name' name='name' value={form.name} onChange={handleChang}/>
        <label htmlFor='email'>이메일 : </label>
        <input type="email" id='email' name='email' value={form.email} onChange={handleChang}/>
        <label htmlFor='phone'>핸드폰 : </label>
        <input type="number" id='phone' name='phone' value={form.phone} onChange={handleChang}/>
        <button>Submit</button>
      </form>
    </>
  );
}

export default AppForm;