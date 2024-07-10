import React, {useReducer} from 'react';
import personReducer from "./reducer/person-reducer";

function AppMentors() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const mentorNameChange = (e) => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({type: 'updated', prev, current});
   }

  const addMentor = (e) => {
    const mentorName = prompt(`추가할 멘토 이름을 입력하세요.`);
    const mentorTitle = prompt(`추가된 멘토의 직급을 입력하세요.`);
    dispatch({type: 'added', mentorName, mentorTitle});
  }

  const deleteMentor = (e) => {
    const deleteName = prompt(`삭제하고 싶은 멘토의 이름을 입력하세요`);
    dispatch({type: 'deleted', deleteName});
  }

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 :
      </p>
      <ul>
        {
          person.mentors.map((mentor, index) => (
            <li key={index}>
              {mentor.name}({mentor.title})
            </li>
          ))
        }
      </ul>
      <button onClick={mentorNameChange}>멘토 이름 바꾸기</button>
      <button onClick={addMentor}>멘토 추가하기</button>
      <button onClick={deleteMentor}>멘토 삭제하기</button>
    </div>
  );
}

export default AppMentors;

const initialPerson = {
  name: '동현이',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자'
    },
    {
      name: '제임스',
      title: '주니어개발자'
    },
  ],
}