import "./App.css";
import { Gender } from "./component/gender/index";
import { Info } from "./component/info";
import json from "./fixtures/users.json";
import { Description } from "./component/description/index";
import { Avatar } from "./component/avatar/index";
import { Previous } from "./component/previous/index";
import { Next } from "./component/next/index";
import styles from "./app.module.css";
import { useState } from "react";

function App() {
  const firstJsonItem = 0;
  const [userId, setUserId] = useState(firstJsonItem);
  const jsonlength = json.length - 1;

  const { age, firstName, gender, lastName, city, description, avatar } =
    json[userId];

  const onNextClick = () => {
    if (userId < jsonlength) {
      setUserId(userId + 1);
    } else {
      setUserId(firstJsonItem);
    }
  };

  const onPreviousClick = () => {
    if (userId > firstJsonItem) {
      setUserId(userId - 1);
    } else {
      setUserId(jsonlength);
    }
  };

  return (
    <div className="App">
      <Avatar className="Avatar" url={avatar} />
      <Gender gender={gender} />
      <Info info={firstName} />
      <Info info={lastName} />
      <Info info={age} />
      <Info info={city} />
      <Description description={description} />
      <div className={styles.actions}>
        <Previous onPreviousClick={onPreviousClick} />
        <Next onNextClick={onNextClick} />
      </div>
    </div>
  );
}

export default App;
