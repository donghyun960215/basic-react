import React, {memo, useCallback, useMemo, useReducer} from 'react';
import personReducer from "./reducer/person-reducer";

function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const mentorNameChange = useCallback((e) => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({type: 'updated', prev, current});
  },[])

  const addMentor = useCallback((e) => {
    const mentorName = prompt(`추가할 멘토 이름을 입력하세요.`);
    const mentorTitle = prompt(`추가된 멘토의 직급을 입력하세요.`);
    dispatch({type: 'added', mentorName, mentorTitle});
  },[])

  const deleteMentor = useCallback((e) => {
    const deleteName = prompt(`삭제하고 싶은 멘토의 이름을 입력하세요`);
    dispatch({type: 'deleted', deleteName});
  },[])

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
      <Button text='멘토 이름 바꾸기' onClick={mentorNameChange}/>
      <Button text='삭제하기' onClick={deleteMentor}/>
      <Button text='멘토 추가하기' onClick={addMentor}/>
    </div>
  );
}

export default AppMentorsButton;

const Button = memo(({text, onClick}) => {
  console.log('Button',text,'re-rendering')
  const result = useMemo(() => calculateSomething(), [])
  return(
    <button
      onClick={onClick}
      style={{
        backgroundColor:'black',
        color:'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {text}{result}
    </button>
  )
})

function calculateSomething(props) {
  for (let i = 0; i < 10000; i++) {
    console.log('loop')
  }
  return 10;
}

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