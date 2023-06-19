import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getAllJobs } from "../../axios/ApiProvider";
import { jobDataProp, PATHS, PLACEHOLDERS } from "../../Constants";

const useJobSkills = () => {
  const [jobdata, setjobdata] = useState<jobDataProp[]>();

  const [inputValue, setinputValue] = useState("");

  const [arrayInput, setArrayInput] = useState<Array<string>>([]);
  const [aqiCount, setaqiCount] = useState<string>();
  const [placeholder, setPlaceholder] = useState<string>(PLACEHOLDERS.SKILLS);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllJobs((res: jobDataProp[]) => {
      setjobdata(res);
    });
  }, []);

  useEffect(() => {
    dispatch({ type: "SET_SKILLS", payload: arrayInput });
  }, [arrayInput, placeholder]);
  const handleBackClick = () => {
    dispatch({ type: "SET_STEP", payload: "2" });
  };

  const handleInputChange = (event: any) => {
    setinputValue(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      const newSelectedItem = [...arrayInput];
      const duplicatedValues = newSelectedItem.indexOf(
        event.target.value.trim()
      );
      if (duplicatedValues !== -1) {
        setinputValue("");
        return;
      }
      newSelectedItem.push(event.target.value.trim());
      setArrayInput(newSelectedItem);
      setaqiCount(String(jobdata?.length));
      setinputValue("");
      if (newSelectedItem.length > 0) {
        setPlaceholder("");
      }
    }
    if (arrayInput.length && !inputValue.length && event.key === "Backspace") {
      setArrayInput(arrayInput.slice(0, arrayInput.length - 1));
    }
  };

  const handleDelete = (item: any) => {
    const newSelectedItem = [...arrayInput];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setArrayInput(newSelectedItem);
  };
  const handleFinishClick = () => {
    history.push(PATHS.JOB_SEARCH);
  };

  return {
    jobdata,
    inputValue,
    arrayInput,
    aqiCount,
    handleInputChange,
    handleFinishClick,
    handleKeyDown,
    handleDelete,
    handleBackClick,
    placeholder,
  };
};

export default useJobSkills;
