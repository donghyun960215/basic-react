export default function personReducer(person, action) {
  switch (action.type) {
    case 'updated': {
      // const prev = action.prev;
      // const current = action.current;
      // Object Destructuring = 구조 분해 할당을 사용하여 아래과 같이 작업 가능
      const {prev, current} = action;
      return {
        ...person,
        mentors: person.mentors.map(mentor => {
          return mentor.name === prev ? {...mentor, name : current} : mentor
        }),
      };
    }
    case 'added' : {
      const {mentorName, mentorTitle} = action;
      return {
        ...person,
        mentors: [...person.mentors, {name: mentorName, title: mentorTitle}],
      }
    }
    case 'deleted' : {
      const {deleteName}  = action;
      return {
        ...person,
        mentors: person.mentors.filter(mentor => mentor.name !== deleteName)
      }
    }
    default: {
      throw Error(`알수없는 액션 타입이다: ${action.type}`);
    }
  }
}