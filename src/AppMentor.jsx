import React, {useState} from 'react';

function AppMentor() {
  const [person, setPerson] = useState({
    name: '동현이',
    title: '개발자',
    mentor: {
      name: '밥',
      title: '시니어개발자'
    },
  });

  const mentorNameChange = (e) => {
    const name = prompt(`what's your mentor's name?`);
    setPerson((prev)=>({
      ...prev,
      mentor: {...prev.mentor, name: name}
    }))
  }

  const mentorTitleChange = (e) => {
    const title = prompt(`what's your mentor's title?`);
    setPerson((prev) => ({
      ...prev ,
      mentor : {...prev.mentor, title}
    }))
  }

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button onClick={mentorNameChange}>멘토 이름 바꾸기</button>
      <button onClick={mentorTitleChange}>멘토 타이틀 바꾸기</button>
    </div>
  );
}

export default AppMentor;