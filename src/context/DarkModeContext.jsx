import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  //다크모드인지 일반모드인지 기억해야할 state를 생성
  const [darkMode, setDarkMode] = useState(false);
  //다크모드였으면 일반모드로 일반모드였으면 다크모드로 변경해줄 toggle생성
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    //자식컴포넌트와 공유하고 싶은 데이터가 있다면 value에 지정해주면 된다.
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
